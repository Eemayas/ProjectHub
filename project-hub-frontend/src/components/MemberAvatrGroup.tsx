const MemberAvatarGroup = ({
  memberList,
  size = 10,
}: {
  memberList: {
    name: string;
    profileImg: string;
  }[];
  size?: number;
}) => {
  return (
    <div className="flex -space-x-4 rtl:space-x-reverse">
      {memberList.slice(0, 4).map((member, index) => (
        <img
          key={`member-${index}`}
          className={`h-${size} w-${size} border-2 border-white rounded-full dark:border-gray-800"`}
          src={member.profileImg}
          alt={member.name}
        />
      ))}
      {memberList.length > 4 && (
        <a
          className={`h-${size} w-${size} flex items-center justify-center text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800`} //TODO:Add link to member section
          href="#"
        >
          +{memberList.length - 4}
        </a>
      )}
    </div>
  );
};
export default MemberAvatarGroup;
