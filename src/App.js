import React from 'react';
import {Title} from './components/index';

function App(){
  const date = new Date();
  const now = date.getFullYear()+"年"+(date.getMonth()+1) + "月" + date.getDate() + "日" + date.getHours() + "時";
  return(
    <>
      <Title
      //親から子にデータを渡している。
        title={'ホットドッグ'}
        content={'からしが隠し味です。'}
        createdAt={now}
      />
      <Title 
        title={'肉じゃが'}
        content={'だしが決めて。'}
        createdAt={now}
      />
    </>
  )
}

export default App;

