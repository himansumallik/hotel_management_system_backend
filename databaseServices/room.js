const dbhandler = require("../databasehandler");

const ROOM_IMAGE_BASE_URL = "http://localhost:9000/static/images";

const fetchAllRooms = async () => {
  const response = await dbhandler.query(
    `SELECT * FROM rooms order by room_number;`
  );
  return response.rows.map((room) => {
    return {
      ...room,
      image: room.image ? `${ROOM_IMAGE_BASE_URL}/${room.image}` : undefined,
    };
  });
};

module.exports = {
  fetchAllRooms,
};
