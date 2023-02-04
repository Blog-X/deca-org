import AxiosJsInstance from "@/hooks/AxiosInstance";

const addTeam = async (orgAddress, teamName, task, myAddress, myName) => {
  try {
    const response = await AxiosJsInstance.post("api/team/addTeam", {
      orgAddress: orgAddress,
      teamName: teamName,
      task: task,
      myAddress: myAddress,
      myName: myName,
    });
    if (response.status === 200) {
      alert("Team added successfully");
    } else {
      alert("Failed to add team");
    }
  } catch (error) {
    console.log(error);
  }
};

export { addTeam };
