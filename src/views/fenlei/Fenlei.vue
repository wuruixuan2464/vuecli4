<template>

    <scroll>
      <ul class="cent">
      <li>1fenlei</li>
      <li>2fenlei</li>
      <li>3fenlei</li>
      <li>4fenlei</li>
      <li>5fenlei</li>
      <li>6fenlei</li>
      <li>7fenlei</li>
      <li>8fenlei</li>
      <li>9fenlei</li>
      <li>10fenlei</li>
      <li>11fenlei</li>
      <li>12fenlei</li>
      <li>13fenlei</li>
      <li>14fenlei</li>
      <li>15fenlei</li>
      <li>16fenlei</li>
      <li>17fenlei</li>
      <li>18fenlei</li>
      <li>19fenlei</li>
      <li>20fenlei</li>
      <li>21fenlei</li>
      <li>22fenlei</li>
      <li>23fenlei</li>
      <li>24fenlei</li>
      <li>25fenlei</li>
      <li>26fenlei</li>
      <li>27fenlei</li>
      <li>28fenlei</li>
      <li>29fenlei</li>
      <li>30fenlei</li>
      <li>31fenlei</li>
      <li>32fenlei</li>
      <li>33fenlei</li>
      <li>34fenlei</li>
      <li>35fenlei</li>
      <li>36fenlei</li>
      <li>37fenlei</li>
      <li>38fenlei</li>
      <li>39fenlei</li>
      <li>40fenlei</li>
      <li>41fenlei</li>
      <li>42fenlei</li>
      <li>43fenlei</li>
      <li>44fenlei</li>
      <li>45fenlei</li>
      <li>46fenlei</li>
      <li>47fenlei</li>
      <li>48fenlei</li>
      <li>49fenlei</li>
      <li>50fenlei</li>
      <li>51fenlei</li>
      <li>52fenlei</li>
      <li>53fenlei</li>
      <li>54fenlei</li>
      <li>55fenlei</li>
      <li>56fenlei</li>
      <li>57fenlei</li>
      <li>58fenlei</li>
      <li>59fenlei</li>
      <li>60fenlei</li>
      <li>61fenlei</li>
      <li>62fenlei</li>
      <li>63fenlei</li>
      <li>64fenlei</li>
      <li>65fenlei</li>
      <li>66fenlei</li>
      <li>67fenlei</li>
      <li>68fenlei</li>
      <li>69fenlei</li>
      <li>70fenlei</li>
      <li>71fenlei</li>
      <li>72fenlei</li>
      <li>73fenlei</li>
      <li>74fenlei</li>
      <li>75fenlei</li>
      <li>76fenlei</li>
      <li>77fenlei</li>
      <li>78fenlei</li>
      <li>79fenlei</li>
      <li>80fenlei</li>
      <li>81fenlei</li>
      <li>82fenlei</li>
      <li>83fenlei</li>
      <li>84fenlei</li>
      <li>85fenlei</li>
      <li>86fenlei</li>
      <li>87fenlei</li>
      <li>88fenlei</li>
      <li>89fenlei</li>
      <li>90fenlei</li>
      <li>91fenlei</li>
      <li>92fenlei</li>
      <li>93fenlei</li>
      <li>94fenlei</li>
      <li>95fenlei</li>
      <li>96fenlei</li>
      <li>97fenlei</li>
      <li>98fenlei</li>
      <li>99fenlei</li>
      <li>100fenlei</li>
      </ul>
    </scroll>
   

</template>

<script>
import { request } from "network/request.js";
import Scroll from "components/common/scroll/Scroll";
request({
  url: "/w/website/bannerList",
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
export default {
  name: "Fenlei",
  components: {
    Scroll,
  },
};
</script>

<style scope>
  .wrapper{
    height: 400px;
    overflow: hidden;
  }
</style>