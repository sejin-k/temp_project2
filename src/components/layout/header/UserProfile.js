export default function UserProfile({ userInfo }) {
  return (
    <div className="p-4 border-b border-gray-200">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-lg overflow-hidden">
          <img 
            src={userInfo.customer_img} 
            alt="프로필" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-1">{userInfo.customer_name}</h3>
          <div className="text-sm text-gray-600 space-y-1">
            <p>{userInfo.customer_birthyear}-{userInfo.customer_birthday} · {userInfo.customer_gender === 'M' ? '남' : '여'}</p>
            <p>{userInfo.customer_phone}</p>
            <p>{userInfo.customer_email}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 