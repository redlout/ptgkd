
import Vue from 'vue'
import Vuex from 'vuex'
import store from '../../../store'

Vue.use(Vuex)

export default {
handleSpeed() {
    //力量+敏捷+体积+敏捷附加×5
    
    this.$store.state.fx4.speed =
      this.tableData[0].base +
      this.tableData[1].base +
      this.$store.state.fx1.form.volume +
      this.tableData[1].additional * 5;
  },
  handleStrike() {
    //先攻 （敏捷+沉着+沉着附加×4）= 18
    this.$store.state.fx4.strike =
      this.tableData[1].base +
      this.tableData[8].base +
      this.tableData[8].additional * 4;
  },
  handleDefense() {
    //防御 （敏捷与感知中较低者）=  1 +较高者的附加成功
    if (this.tableData[1].base > this.tableData[4].base) {
      this.$store.state.fx4.defense =
        this.tableData[4].base + this.tableData[1].additional;
    } else {
      this.$store.state.fx4.defense =
        this.tableData[1].base + this.tableData[4].additional;
    }
  },
  handleLife() {
    // 生命值 （耐力+体积+耐力附加×2）=6
    this.$store.state.fx4.life =
      this.tableData[2].base +
      this.$store.state.fx1.form.volume +
      this.tableData[2].additional * 2;
  },
  handleWillpower() {
    // 意志力池 （决心+沉着+决心附加×2）= 9
    this.$store.state.fx4.willpower =
      this.tableData[5].base +
      this.tableData[8].base +
      this.tableData[5].additional * 2;
  },
  handleWill() {
    // 意志 （决心+专注+意志）=5
    for (var i = 0; i < this.$store.state.fx3.tableData[7].data.length; i++) {
      if (this.$store.state.fx3.tableData[7].data[i].professional == "意志") {
        this.$store.state.fx4.will =
          this.tableData[5].base +
          this.$store.state.fx3.tableData[7].base +
          this.$store.state.fx3.tableData[7].data[i].level;
      } else {
        this.$store.state.fx4.will =
          this.tableData[5].base + this.$store.state.fx3.tableData[7].base;
      }
    }
  },
  handleReflection() {
    // 反射 （敏捷+运动+反射）= 12
    for (var i = 0; i < this.$store.state.fx3.tableData[0].data.length; i++) {
      if (this.$store.state.fx3.tableData[0].data[i].professional == "反射") {
        this.$store.state.fx4.reflection =
          this.tableData[1].base +
          this.$store.state.fx3.tableData[0].base +
          this.$store.state.fx3.tableData[0].data[i].level;
      } else {
        this.$store.state.fx4.reflection =
          this.tableData[1].base + this.$store.state.fx3.tableData[0].base;
      }
    }
  },
  handleInvestigation() {
    // 强韧 （耐力+生存+强韧）= 2
    for (var i = 0; i < this.$store.state.fx3.tableData[3].data.length; i++) {
      if (this.$store.state.fx3.tableData[3].data[i].professional == "侦察") {
        this.$store.state.fx4.investigation =
          this.tableData[2].base +
          this.$store.state.fx3.tableData[3].base +
          this.$store.state.fx3.tableData[3].data[i].level;
      } else {
        this.$store.state.fx4.investigation =
          this.tableData[2].base + this.$store.state.fx3.tableData[3].base;
      }
    }
  },
  handleInvestigation() {
    // 侦查 （感知+洞察+侦查）= 2
    for (var i = 0; i < this.$store.state.fx3.tableData[8].data.length; i++) {
      if (this.$store.state.fx3.tableData[8].data[i].professional == "侦察") {
        this.$store.state.fx4.investigation =
          this.tableData[4].base +
          this.$store.state.fx3.tableData[8].base +
          this.$store.state.fx3.tableData[8].data[i].level;
      } else {
        this.$store.state.fx4.investigation =
          this.tableData[4].base + this.$store.state.fx3.tableData[8].base;
      }
    }
  },
  handleSensitiverange() {
    // 敏感范围 （感知*20米+感知上的附加成功*20米）= 20
    this.$store.state.fx4.sensitiverange =
      this.tableData[4].base * 20 + this.tableData[4].additional * 20;
  },
}