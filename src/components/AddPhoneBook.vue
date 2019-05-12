<template>
  <div>
    <h2>新增联络人</h2>
    <div class="addPB">
      <form action @submit.prevent="onsubmit">
        <input type="text" placeholder="姓名" v-model="phoneBook.nameIn" required>
        <input type="text" placeholder="电话" v-model="phoneBook.numberIn" required>
        <select name id v-model="phoneBook.countryIn">
          <option v-for="countryIn in countriesIn">{{ countryIn }}</option>
        </select>
        <input type="submit" value="添加">
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddPhoneBook",
  data() {
    return {
      countriesIn: ["中国", "菲律宾", "韩国", "老挝", "越南", "俄罗斯", "日本"],
      phoneBook: {
        nameIn: "",
        numberIn: "",
        countryIn: ""
      }
    };
  },
  methods: {
    ...mapActions(["addPB"]),
    onsubmit() {
      //分发actions
      this.addPB(this.title);
      this.title = "";
    }
  }
};
</script>

<style scoped>
#addPB {
  box-sizing: border-box;
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
  background-color: aqua;
}
form {
  display: flex;
}
input[type="text"],
select {
  flex: 4;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 4;
  background: #41b883;
  color: #fff;
  border: 1px dotted #41b883;
  cursor: pointer;
}
</style>
