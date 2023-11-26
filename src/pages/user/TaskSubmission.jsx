import { useParams } from "react-router-dom";
import FileUploader from "../../components/Shared/FileUploader";
import useTaskByContestId from "../../hooks/useTaskByContestId";
import Loader from "../../components/Shared/Loader";
import { createTask } from "../../api/apiTask";
import toast from "react-hot-toast";

const TaskSubmission = () => {
  const { contestId } = useParams();
  const { task, isLoading, refetch } = useTaskByContestId(contestId);

  if (isLoading) return <Loader />;

  const handleTaskSubmit = async (task) => {
    try {
      await createTask(contestId, { task });
      refetch();
      toast.success("Task submitted");
    } catch (error) {
      toast.error(error?.message || "Error submitting task");
    }
  };

  return (
    <div>
      {!task ? (
        <FileUploader handleTaskSubmit={handleTaskSubmit} />
      ) : (
        <div>
          <p>Congratulations! You successfully submit the task.</p>
          <p>
            Your task is:{" "}
            <a
              href={task.task}
              target="blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {task.task}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default TaskSubmission;
