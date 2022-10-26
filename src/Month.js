import React from "react";

const Month = (props) => {
  let temp = [];
  //   console.log("props", props);
  /// console.log(`${foo.getFullYear()}-${foo.getMonth() + 1}-${foo.getDay()}`)
  let days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  let foo = 1;
  let newDate;
  let indexday;
  for (let i = 0; i <= 42; i++) {
    let bar = i < 7 ? i + 1 : i + 1 - 7;
    if (i >= props.d[2] && foo < props.d[1]) {
      let daa = props.d;
      daa = daa[0].split(" ")[0];
      console.log(daa);
      newDate = new Date(props.year, daa - 1, foo);
      //   console.log("foo", foo);
      //   console.log("newDate", newDate);
      let indexday = newDate.getDay();

      console.log();
      temp.push(
        <div
          style={{
            display: "inline-block",
            width: "22px",
            height: "22px",
            float: "left",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: props.checkedays === indexday ? "#FFA600" : "",
            borderRadius: props.checkedays === indexday ? "50%" : "",
            color: props.checkedays === indexday ? "#fff" : "#263238",
          }}
          data-index={indexday}
        >
          {foo}
        </div>
      );
      foo++;
    } else {
      temp.push(
        <div
          style={{
            display: "inline-block",
            width: "22px",
            height: "22px",
            float: "left",
          }}
          data-index={indexday}
        ></div>
      );
    }
  }

  return (
    <div
      style={{
        display: "inline-block",
        width: "154px",
        float: "left",
        marginRight: "20px",
      }}
    >
      <h1>{props.d[0]}</h1>
      <div
        style={{
          width: "100%",

          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {days.map((t) => {
          return <span style={{ width: "22px" }}>{t}</span>;
        })}
      </div>
      <div
        style={{
          width: "100%",
        }}
      >
        {temp}
      </div>
    </div>
  );
};

export default Month;
