<script lang="ts" setup></script>

<template>
  <span class="close border-rounded black cursor-pointer relative overflow-hidden"></span>
</template>

<style lang="scss" scoped>
.close {
  display: inline-block;
  width: 35px;
  height: 35px;
  background-color: #fff;
  border: 2px solid var(--color-primary);
  transition: all 0.3s ease;

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -1px;
    width: 100%;
    height: 2px;
    background: var(--color-primary);
    content: '';
    transition: all 0.3s ease;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  &.black {
    &::before,
    &::after {
      margin-top: -4px;
      height: 6px;
    }
  }

  &.border-rounded {
    &::before,
    &::after {
      border-radius: 6px;
    }
  }

  &:hover {
    background-color: var(--color-primary);

    &::before,
    &::after {
      background: #fff;
    }
  }
}
</style>
