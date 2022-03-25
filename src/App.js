import Directory from './components/directory/directory.component';

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Mens',
      imageUrl: 'https://media.istockphoto.com/photos/mens-clothing-isolated-on-white-background-picture-id895507422?k=6&m=895507422&s=170667a&w=0&h=lWiRnZxECFYcaSSoKiuPgt2_XxubKbY0a7wYjcT_dfY=',
    },
    {
      id: 2,
      title: 'Womens',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.q5OlxDqRp184Dv7vD3JUjAHaFj&pid=Api&P=0&w=242&h=181',
    },
    {
      id: 3,
      title: 'Kids',
      imageUrl: 'http://retaildesignblog.net/wp-content/uploads/2016/02/Kids-Mode-store-by-storestyle-Bnei-Brack-Israel.jpg',
    },
    {
      id: 4,
      title: 'Electronics',
      imageUrl: 'https://static.turbosquid.com/Preview/001208/066/KL/3D-apple-electronics-2017-model_D.jpg',
    },
    {
      id: 5,
      title: 'Households',
      imageUrl: 'https://cu-rise.com/wp-content/uploads/2019/12/household-img-1024x682.jpg',
    },
  ];

  return <Directory categories={categories} />
};

export default App;
