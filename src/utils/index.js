import moment from "moment";

export const formatDate = (dateTime) => {
  const formattedDateTime = moment(dateTime).format("dddd, MMM D YYYY h:mm A");
  const timeZone = moment().format("Z");

  return `${formattedDateTime} to ${moment(dateTime)
    .add(3, "hours")
    .format("h:mm A")} (+${timeZone})`;
};

export const isContestEnd = (deadline) => moment(deadline).isBefore(moment());
