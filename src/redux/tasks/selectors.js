import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

export const selectTasks = state => state.tasks.items;

export const selectIsLoading = state => state.tasks.isLoading;

export const selectError = state => state.tasks.error;

export const selectStatusFilter = state => state.tasks.items;

export const selectVisibleTasks = createSelector(
  [selectTasks, selectStatusFilter],
  (tasks, statusFilter) => {
    // console.log('Calculating visible tasks');

    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter(task => !task.done);
      case statusFilters.completed:
        return tasks.filter(task => task.done);
      default:
        return tasks;
    }
  }
);

export const selectTaskCount = createSelector([selectTasks], tasks => {
  // console.log("Calculating task count");

  return tasks.reduce(
    (count, task) => {
      if (task.done) {
        count.completed += 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    { active: 0, completed: 0 }
  );
});
