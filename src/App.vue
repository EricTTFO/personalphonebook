<template>
  <div id="app">
    <HeaderPhoneBook/>
    <div class="container">
      <FilterPhoneBook/>
      <AddPhoneBook/>
      <PhoneBook/>
    </div>
  </div>
</template>

<script>
import HeaderPhoneBook from "./components/HeaderPhoneBook";
import FilterPhoneBook from "./components/FilterPhoneBook";
import AddPhoneBook from "./components/AddPhoneBook";
import PhoneBook from "./components/PhoneBook";
export default {
  name: "app",
  components: {
    HeaderPhoneBook,
    FilterPhoneBook,
    AddPhoneBook,
    PhoneBook
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
