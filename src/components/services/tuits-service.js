import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;

export const createTuit = async(tuit) => {
  const newTuit = {
    tuit: tuit.tuit,
    //id: (new Date()).getTime() + '',
    postedBy: {
      "username": "ReactJS"
    },
    handle: "ReactJS",
    'avatar-image': "../../../images/react-blue.png",
    stats: {
      retuits: 0,
      likes: 0,
      comments: 0,
      dislikes: 0,
    }
  }
  const response = await axios.post(TUITS_API, newTuit)
  return response.data;
}

export const findAllTuits = async() => {
  const response = await axios.get(TUITS_API);
  const tuits = response.data;
  return tuits;
}
export const deleteTuit = async(tuit) => {
  const response = await axios
    .delete(`${TUITS_API}/${tuit._id}`);
  return response.data;
}

export const updateTuit = async(tuit) => {
  const response = await axios
    .put(`${TUITS_API}/${tuit._id}`, tuit);
  return response.data;
}