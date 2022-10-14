import './page-header.scss';

import bg from '../../assets/footer-bg.jpg';

interface PageHeaderProps extends React.ComponentPropsWithRef<'div'> {}

const PageHeader = (props: PageHeaderProps) => {
  return (
    <div className='page-header' style={{ backgroundImage: `url(${bg})` }}>
      <h2>{props.children}</h2>
    </div>
  );
};

export default PageHeader;
