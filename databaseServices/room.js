const dbhandler = require("../databasehandler");

const ROOM_IMAGE_BASE_URL = "http://localhost:9000/static/images";

const fetchAllRooms = async () => {
  const response = await dbhandler.query(
    `SELECT * FROM rooms order by room_number;`
  );
  return response.rows.map((room) => {
    return {
      ...room,
      image: room.room_image
        ? `${ROOM_IMAGE_BASE_URL}/${room.room_image}`
        : undefined,
    };
  });
};

const addRoomsToDb = async (roomData) => {
  const {
    room_number,
    occupants_capacity,
    number_of_bed,
    has_ac,
    is_seafacing,
    has_sunset_view,
    price,
    room_image,
  } = roomData;

  const insertQuery = `INSERT INTO rooms (
      room_number,
      occupants_capacity,
      number_of_bed,
      has_ac,
      is_seafacing,
      has_sunset_view,
      price,
      room_image)
    VALUES (
      ${room_number},
      ${occupants_capacity},
      ${number_of_bed},
      '${has_ac}',
      '${is_seafacing}',
      '${has_sunset_view}',
      ${price},
      '${room_image}'
    ); `;

  await dbhandler.query(insertQuery);
};

module.exports = {
  fetchAllRooms,
  addRoomsToDb,
};
