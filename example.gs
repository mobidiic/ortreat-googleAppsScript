function onFormSubmitSendMailForMuffinOrder(e) {
  MailApp.sendEmail("메일주소"
    ,"[" + e.values[1] + "]님의 주문이 접수되었습니다."
    ,"---- 주문서 내용 ----\n"
    +"이름 : " + e.values[1] + "\n"
    +"전화번호 : " + e.values[2] + "\n"
    +"픽업일자 : " + e.values[4] + "\n"
    +"픽업시간 : " + e.values[5] + "\n"
    +"---------------");
}

function onFormSubmitRegistCalendar(e){
  let calendar = CalendarApp.getCalendarById("구글캘린더 ID");
  let title = e.values[1] + "(" + e.values[10] + ")";
  let date = e.values[4];
  let _preTime = e.values[5].split(" ")[1] + " " + e.values[5].split(" ")[0];
  let time = _preTime.replace("오전","AM").replace("오후","PM");
  let startDtime = new Date(date + " " + time + " +0900");
  let endDtime = addedOneHourTime(startDtime);
  let options = {
    description : "케이크 종류 : " + e.values[6] + "\n"
    +"레터링문구 : " + e.values[11] + "\n"
    +"시트선택 : " + e.values[7] + "\n"
    +"초 선택 : " + e.values[8] + "\n"
    +"픽업 방식 : " + e.values[9] + "\n"
  };
  calendar.createEvent(title, startDtime, endDtime, options);
}

function addedOneHourTime(date){
  let addedTime = new Date();
  addedTime.setTime(date.getTime() + 60*60*1000);
  return addedTime
}