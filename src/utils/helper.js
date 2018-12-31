import moment from "moment";

export const toDayOfTheWeek = (val) => {
    return moment(val, "YYYY-MM-DD HH:mm:ss").format("dddd");
}
