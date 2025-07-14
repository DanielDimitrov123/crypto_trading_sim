interface Props {
    children: string
}

const Button = ({children}: Props) => {
  return (
    <button className='danger'> {children} </button>
  );
};

export default Button;