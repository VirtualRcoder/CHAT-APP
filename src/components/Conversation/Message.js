import { Box, Stack } from "@mui/material";
// import { Chat_History } from "../../data";
import {
  DocMsg,
  Timeline,
  MediaMsg,
  ReplyMsg,
  LinkMsg,
  TextMsg,
} from "./MsgTypes";

import { useDispatch, useSelector } from "react-redux";
import {
  FetchCurrentMessages,
  SetCurrentConversation,
} from "../../redux/slices/conversation";
import { socket } from "../../socket";
import { useEffect } from "react";

export default function Message() {
  const dispatch = useDispatch();

  const { conversations, current_message } = useSelector(
    (state) => state.conversation.direct_chat
  );

  const { room_id } = useSelector((state) => state.app);

  useEffect(() => {
    const current = conversations.find((el) => el?.id === room_id);

    socket.emit("get_messages", { conversation_id: current?.id }, (data) => {
      // data => list of messages
      // console.log(data, "List of messages");
      dispatch(FetchCurrentMessages({ messages: data }));
    });

    dispatch(SetCurrentConversation(current));
  }, [current_message, room_id]);

  return (
    <Box p={3}>
      <Stack spacing={3}>
        {current_message.map((el) => {
          switch (el.type) {
            case "divider":
              return <Timeline el={el} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  return <MediaMsg el={el} />;

                case "doc":
                  return <DocMsg el={el} />;
                case "link":
                  return <LinkMsg el={el} />;
                case "reply":
                  return <ReplyMsg el={el} />;
                default:
                  return <TextMsg el={el} />;
              }

            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
}
