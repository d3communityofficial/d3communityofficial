import { Cpu } from 'lucide-react';
import Image from 'next/image';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Aravind Kumar J',
      role: 'FOUNDER',
      seed: 'Aravind',
      bgColor: 'b6e3f4',
      roleColor: 'text-dark-primary',
      borderHover: 'group-hover:border-dark-primary',
    },
    {
      name: 'Hemanath M',
      role: 'CORE_TEAM',
      seed: 'Hemanath',
      bgColor: 'ffdfbf',
      roleColor: 'text-dark-muted',
      borderHover: 'group-hover:border-dark-secondary',
    },
    {
      name: 'Udhayaprakasha V',
      role: 'CORE_TEAM',
      seed: 'Udhaya',
      bgColor: 'c0aede',
      roleColor: 'text-dark-muted',
      borderHover: 'group-hover:border-dark-secondary',
    },
    {
      name: 'Sahithya B A',
      role: 'CORE_TEAM',
      seed: 'Sahithya',
      bgColor: 'd4f4dd',
      roleColor: 'text-dark-muted',
      borderHover: 'group-hover:border-dark-secondary',
    },
    {
      name: 'GANESH KUMAR R',
      role: 'CORE_TEAM',
      seed: 'Ganesh',
      bgColor: 'ffd5e5',
      roleColor: 'text-dark-muted',
      borderHover: 'group-hover:border-dark-secondary',
    },
    {
      name: 'HARI NANDHA KUMAR C',
      role: 'CORE_TEAM',
      seed: 'Hari',
      bgColor: 'fff5ba',
      roleColor: 'text-dark-muted',
      borderHover: 'group-hover:border-dark-secondary',
    },
    {
      name: 'PRANAV VIKRAMAN .S.S',
      role: 'CORE_TEAM',
      seed: 'Pranav',
      bgColor: 'e5d4f4',
      roleColor: 'text-dark-muted',
      borderHover: 'group-hover:border-dark-secondary',
    },
    {
      name: 'Sarvesh M Rao',
      role: 'CORE_TEAM',
      seed: 'Sarvesh',
      bgColor: 'd4e5f4',
      roleColor: 'text-dark-muted',
      borderHover: 'group-hover:border-dark-secondary',
    },
    {
      name: 'Yogeshwari S',
      role: 'CORE_TEAM',
      seed: 'Yogeshwari',
      bgColor: 'ffd1dc',
      roleColor: 'text-dark-muted',
      borderHover: 'group-hover:border-dark-secondary',
    },
  ];

  return (
    <div className='md:col-span-3 lg:col-span-1'>
      <h2 className='text-2xl font-bold flex items-center gap-2 mb-6'>
        <Cpu className='w-6 h-6 text-dark-primary' />
        Core Units
      </h2>

      <div className='bg-dark-card border border-dark-border rounded-3xl p-6'>
        <div className='space-y-6'>
          {teamMembers.map((member) => (
            <div key={member.name} className='flex items-center gap-4 group'>
              <div
                className={`w-12 h-12 rounded-xl bg-gray-800 overflow-hidden border border-dark-border ${member.borderHover} transition-colors`}
              >
                <Image
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.seed}&backgroundColor=${member.bgColor}`}
                  alt={member.name}
                  width={48}
                  height={48}
                  className='w-full h-full object-cover'
                />
              </div>
              <div>
                <h4 className='font-bold text-sm text-white'>{member.name}</h4>
                <span className={`text-xs ${member.roleColor} font-mono`}>{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
