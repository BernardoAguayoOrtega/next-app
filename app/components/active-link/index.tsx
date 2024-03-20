import Link from "next/link";

type ActiveLinkProps = {
  path: string;
  label: string;
  icon?: React.ReactNode;
};

function ActiveLink(props: ActiveLinkProps) {
  return (
    <Link href={props.path}>
      <span className='flex items-center space-x-2'>
        {props.icon}
        <span>{props.label}</span>
      </span>
    </Link>
  );
}

export default ActiveLink;