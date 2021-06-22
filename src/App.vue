<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container fluid>
          <v-col>
            <v-row>
              <v-btn @click="addTab">add tab</v-btn>
            </v-row>
            <v-row class="mt-6">{{ `tabs: [${tabs}]` }}</v-row>
            <v-row class="mt-6">{{ `activeTabUuid: ${tabs[activeTabIndex]}, activeTabIndex: ${activeTabIndex}` }}</v-row>
            <v-row class="mt-6">
              <v-tabs
                  v-model="activeTabIndex"
                  hide-slider
                  active-class="tabs--active"
              >
                <v-tab
                    v-for="(tab, index) in tabs"
                    :key="tab"
                >
                  <v-row align="center">
                    <v-col>{{ index }}</v-col>
                    <v-col>
                      <v-btn
                          x-small
                          @click="removeTab(index)"
                      >
                        d
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-tab>
              </v-tabs>
              <v-tabs-items
                  :value="activeTabIndex"
              >
                <v-tab-item
                    v-for="tab in tabs"
                    :key="tab"
                >
                  {{ tab }}
                </v-tab-item>
              </v-tabs-items>
            </v-row>
          </v-col>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import { v4 as uuidv4 } from 'uuid';


@Component
export default class App extends Vue {
  public activeTabIndex = 0;
  public tabs: string[] = [];

  public addTab(): void {
    this.tabs.push(uuidv4());
  }
  public removeTab(deletingTabIndex: number): void {
    this.tabs.splice(deletingTabIndex, 1);
  }
}
</script>

<style lang="scss">

* {
  margin: 0px;
}

.v-window {
  width: 100%;

  &-item {
    background-color: aliceblue;
  }
}

.tabs--active {
  background-color: yellowgreen;
}

</style>
