import { useState } from "react";
import blogList from "../blogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Web devs",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet malesuada erat, vel dapibus lorem. Cras condimentum aliquet purus, in tempus velit. In sit amet quam sed sapien tincidunt accumsan. Fusce lacinia, orci et tempus elementum, ante leo elementum ligula, eget interdum leo erat at metus. Suspendisse sit amet dui eu dolor mollis consequat. Mauris odio nunc, interdum non odio sit amet, ultrices cursus ex. Curabitur elementum quis sem eget suscipit. Proin scelerisque, tellus in bibendum tincidunt, mi neque lacinia sapien, at blandit felis est vitae lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In egestas eros vel diam venenatis, a molestie lectus malesuada. Pellentesque sed elit nibh. Ut eu congue nibh, eu finibus velit",
      author: "cisca",
      id: 1,
    },
    {
      title: "Aliens",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet malesuada erat, vel dapibus lorem. Cras condimentum aliquet purus, in tempus velit. In sit amet quam sed sapien tincidunt accumsan. Fusce lacinia, orci et tempus elementum, ante leo elementum ligula, eget interdum leo erat at metus. Suspendisse sit amet dui eu dolor mollis consequat. Mauris odio nunc, interdum non odio sit amet, ultrices cursus ex. Curabitur elementum quis sem eget suscipit. Proin scelerisque, tellus in bibendum tincidunt, mi neque lacinia sapien, at blandit felis est vitae lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In egestas eros vel diam venenatis, a molestie lectus malesuada. Pellentesque sed elit nibh. Ut eu congue nibh, eu finibus velit",
      author: "previa",
      id: 2,
    },
    {
      title: "lemonades",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet malesuada erat, vel dapibus lorem. Cras condimentum aliquet purus, in tempus velit. In sit amet quam sed sapien tincidunt accumsan. Fusce lacinia, orci et tempus elementum, ante leo elementum ligula, eget interdum leo erat at metus. Suspendisse sit amet dui eu dolor mollis consequat. Mauris odio nunc, interdum non odio sit amet, ultrices cursus ex. Curabitur elementum quis sem eget suscipit. Proin scelerisque, tellus in bibendum tincidunt, mi neque lacinia sapien, at blandit felis est vitae lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In egestas eros vel diam venenatis, a molestie lectus malesuada. Pellentesque sed elit nibh. Ut eu congue nibh, eu finibus velit",
      author: "vevee",
      id: 3,
    },
  ]);

  return (
    <div className="home text-lg font-semibold">
      <blogList blogs={blogs} title="All blogs" />
    </div>
  );
};

export default Home;
