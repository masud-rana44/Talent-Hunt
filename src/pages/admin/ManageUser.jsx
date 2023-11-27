import useUsers from "../../hooks/useUsers";
import Loader from "../../components/Shared/Loader";
import { updateUser } from "../../api/apiUsers";
import toast from "react-hot-toast";
import Pagination from "../../components/Table/Pagination";

const ManageUser = () => {
  const { users, isLoading } = useUsers();

  const handleRoleChange = async (userId, newRole) => {
    try {
      await updateUser(userId, { role: newRole });
      toast.success("User role updated");
    } catch (error) {
      toast.error(error?.message || "Error updating user");
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Image</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="py-2 px-4 border">
                <img
                  src={user?.image}
                  alt="user"
                  className="w-10 h-10 rounded-full object-cover mx-auto"
                />
              </td>
              <td className="py-2 px-4 border font-medium">{user?.name}</td>
              <td className="py-2 px-4 border">{user?.email}</td>
              <td className="py-2 px-4 border">
                <select
                  className="block w-full py-2 px-4 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue={user?.role}
                  onChange={(e) => handleRoleChange(user._id, e.target.value)}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="creator">Creator</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
        <Pagination count={users.length} />
      </table>
    </div>
  );
};

export default ManageUser;
