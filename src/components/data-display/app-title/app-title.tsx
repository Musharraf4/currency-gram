export const AppTitle = (props: any) => {
  const { title, className, Variant = "div", onClick } = props;
  return (
    <Variant className={`break-word ${className}`} onClick={(e: any) => onClick?.(e)}>
      {title}
    </Variant>
  );
};
