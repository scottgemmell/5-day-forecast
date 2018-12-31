import moment from "moment";

export const toDayOfTheWeek = (val) => {
    return moment(val, "YYYY-MM-DD HH:mm:ss").format("dddd");
}

export const getTempStatus = (temp) => {
    let status = "";
    const num = parseFloat(temp);
    if(num > 8) {
        status = "hot";
    } else if(num > 4){
        status = "average";
    } else {
        status = "cold";
    }
    return status;
}