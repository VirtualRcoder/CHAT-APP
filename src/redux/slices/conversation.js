import { createSlice } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";

const user_id = window.localStorage.getItem("user_id");

const initialState = {
  direct_chat: {
    conversations: [],
    current_conversation: null,
    current_message: [],
  },
  group_chat: {},
};

const slice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    fetchDirectConversations(state, action) {
      const list = action.payload.conversations.map((el) => {
        const this_user = el.participants.find(
          (elm) => elm._id.toString() !== user_id
        );
        return {
          id: el._id,
          user_id: this_user._id,
          name: `${this_user.firstName} ${this_user.lastName}`,
          online: this_user.status === "Online",
          img: faker.image.avatar(),
          msg: faker.music.songName(),
          time: "9:36",
          unread: 0,
          pinned: false,
        };
      });
      if (list !== state.direct_chat.conversations) {
        state.direct_chat.conversations = list;
      }
    },
    updateDirectConversation(state, action) {
      const this_conversation = action.payload.conversation;
      state.direct_chat.conversations = state.direct_chat.conversations.map(
        (el) => {
          if (el.id !== this.conversation._id) {
            return el;
          } else {
            const user = this_conversation.participants.find(
              (elm) => elm._id.toString() !== user_id
            );
            return {
              id: this_conversation._id,
              user_id: user._id,
              name: `${user.firstName} ${user.lastName}`,
              online: user.status === "Online",
              img: faker.image.avatar(),
              msg: faker.music.songName(),
              time: "9:36",
              unread: 0,
              pinned: false,
            };
          }
        }
      );
    },
    addDirectConversation(state, action) {
      const this_conversation = action.payload.conversation;

      const user = this_conversation.participants.find(
        (elm) => elm._id.toString() !== user_id
      );

      state.direct_chat.conversations.push({
        id: this_conversation._id,
        user_id: user._id,
        name: `${user.firstName} ${user.lastName}`,
        online: user.status === "Online",
        img: faker.image.avatar(),
        msg: faker.music.songName(),
        time: "9:36",
        unread: 0,
        pinned: false,
      });
    },
    setCurrentConversation(state, action) {
      if (action.payload !== state.direct_chat.current_conversation) {
        state.direct_chat.current_conversation = action.payload;
      }
    },
    fetchCurrentMessages(state, action) {
      // console.log(action.payload.messages.messages);
      const messages = action.payload.messages.messages;
      const formatted_messages = messages.map((el) => ({
        id: el._id,
        type: "msg",
        subtype: el.type,
        message: el.text,
        incoming: el.to === user_id,
        outgoing: el.from === user_id,
      }));
      state.direct_chat.current_message = formatted_messages;
    },
    addDirectMessage(state, action) {
      state.direct_chat.current_message.push(action.payload.message);
    },
  },
});
export default slice.reducer;

export const FetchDirectConversations = ({ conversations }) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.fetchDirectConversations({ conversations }));
  };
};

export const AddDirectConversations = ({ conversation }) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.addDirectConversation({ conversation }));
  };
};

export const UpdateDirectConversations = ({ conversation }) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.updateDirectConversation({ conversation }));
  };
};

export const SetCurrentConversation = (current_conversation) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.setCurrentConversation(current_conversation));
  };
};

export const FetchCurrentMessages = ({ messages }) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.fetchCurrentMessages({ messages }));
  };
};

export const AddDirectMessage = (message) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.addDirectMessage({ message }));
  };
};
