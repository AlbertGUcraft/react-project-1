import { useState, useEffect } from 'react';
import '../index.css';
import { TUser } from './interface';

function Users() {
  const [users, setUsers] = useState<TUser[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`https://reqres.in/api/users?per_page=3&page=${currentPage}`);
        const data = await response.json();
        setTotalPages(data.total_pages);
        setUsers(data.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [currentPage]);

  const handlePageClick = (page:number) => {
    setCurrentPage(page);
  };

  return (
    <div className="users">
      <div className="user-list">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            id={currentPage === index + 1 ? 'btn_active' : ''}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

type UserCardProps = {
  user: TUser;
}

const UserCard = ({ user }: UserCardProps) => {
  const { first_name, last_name, email, avatar } = user;

  return (
    <div className="user-card">
      <div>
        <img src={avatar} alt={`${first_name} ${last_name}`} />
        <h3>{`${first_name} ${last_name}`}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Users;
