import React from "react";
import { subjects, groups } from "../constant/ssc";
import Footer from "@/components/Footer";

export default function ssc() {
  const [group, setGroup] = React.useState(groups[0]);
  const [selectedSubjects, setSelectedSubjects] = React.useState({});
  const [gpas, setGpas] = React.useState({});
  const [point, setPoint] = React.useState("");

  React.useEffect(() => {
    const points = Object.values(gpas);
    const exist = points.find((point) => point === "unselected");
    // @ts-ignore
    const totalSubjects = subjects[group].length;

    if (!exist && points.length == totalSubjects) {
      const fail = points.find(
        (point, index) => point === "0.00" && index != totalSubjects - 1
      );
      if (fail) {
        setPoint("0.00");
      } else {
        const totalMainSubject = points.length;
        let totalPoint = 0;
        points.forEach((point: any, index: Number) => {
          const num = Number(point);
          if (index == totalMainSubject - 1) {
            totalPoint = totalPoint + (num - 2);
          } else {
            totalPoint = totalPoint + num;
          }
        });
        const grade = totalPoint / (totalMainSubject - 1);
        setPoint(grade >= 5 ? "5" : grade.toFixed(2).toString());
      }
    }
  }, [gpas]);

  return (
    <div>
      <Footer />
      <div className="container mx-auto">
        <div className="w-11/12 md:w-1/2 mx-auto bg-[#222] my-5 rounded-2xl overflow-hidden">
          <div className="bg-[#6C63FF] p-3 rounded-2xl text-white text-center font-semibold text-xl">
            SSC GPA CALCULATOR
          </div>
          <div className="m-4 text-white">
            <div className="border p-2 rounded-md">
              <div className="text-center">
                <h6 className="font-light mb-2">Select Group</h6>
                <div className="grid grid-cols-3 text-xs font-light border rounded-full overflow-hidden">
                  {groups.map((groupName) => (
                    <div
                      className={`hover:bg-[#6C63FF] ${
                        group == groupName && "bg-[#6C63FF]"
                      } cursor-pointer p-2 rounded-full uppercase`}
                      onClick={() => setGroup(groupName)}
                    >
                      {groupName}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="m-4 flex flex-col space-y-2">
            <div className="grid grid-cols-8 text-white font-light gap-2">
              <div className="col-span-1">Code</div>
              <div className="col-span-4 pl-2">Subject</div>
              <div className="col-span-3 pl-2">Select Grade</div>
            </div>
            {/* @ts-ignore */}
            {subjects[group].map((subject, index) => (
              <div className="grid grid-cols-8 text-white font-light gap-2">
                <div className="col-span-1 py-1">
                  {subject.code
                    ? subject.code
                    : // @ts-ignore
                    selectedSubjects[index]
                    ? // @ts-ignore
                      selectedSubjects[index]
                    : // @ts-ignore
                      Object.values(subject)[0][0].code}
                </div>
                <div className="col-span-4 bg-[#353535] pl-1 py-1 rounded-md">
                  {subject.name ? (
                    subject.name
                  ) : (
                    <select
                      className="bg-[#353535] w-full text-white outline-none"
                      onChange={(e) => {
                        setSelectedSubjects({
                          ...selectedSubjects,
                          [index]: e.target.value,
                        });
                      }}
                    >
                      {/* @ts-ignore */}
                      {Object.values(subject)[0].map((sub: any) => (
                        <option value={sub.code}>{sub.name}</option>
                      ))}
                    </select>
                  )}
                </div>
                <div className="col-span-3 bg-[#353535] pl-1 py-1 rounded-md">
                  <select
                    className="bg-[#353535] w-full text-white outline-none"
                    onChange={(e) => {
                      setGpas({
                        ...gpas,
                        [index]: e.target.value,
                      });
                    }}
                  >
                    <option value="unselected">Select Grade</option>
                    <option value="5.00">A+</option>
                    <option value="4.00">A</option>
                    <option value="3.50">A-</option>
                    <option value="3.00">B</option>
                    <option value="2.00">C</option>
                    <option value="1.00">D</option>
                    <option value="0.00">F</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
          {point && (
            <div className="flex  justify-evenly my-4">
              <div className="text-center w-32 h-32 flex flex-col bg-[#6C63FF] text-white justify-center items-center rounded-full">
                <p>Your Grade</p>
                <p className="text-3xl font-semibold">
                  {Number(point) == 5
                    ? "A+"
                    : Number(point) >= 4
                    ? "A"
                    : Number(point) >= 3.5
                    ? "A-"
                    : Number(point) >= 3
                    ? "B"
                    : Number(point) >= 2
                    ? "C"
                    : Number(point) >= 1
                    ? "D"
                    : "F"}
                </p>
              </div>
              <div className="text-center w-32 h-32 flex flex-col bg-[#6C63FF] text-white justify-center items-center rounded-full">
                <p>Your Point</p>
                <p className="text-3xl font-semibold">{point}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}
