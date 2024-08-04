<template>
  <div ref="editor"></div>
</template>

<script>
import Quill from "quill";
import "quill/dist/quill.core.css";
import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";

export default {
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Type something in here!",
    }
  },
  data() {
    return {
      editor: null,
    };
  },
  mounted() {
    this.editor = new Quill(this.$refs.editor, {
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, 4, false] }],
          ["bold", "italic", "underline", "link"],
        ],
      },
      theme: "snow",
      formats: ["bold", "underline", "header", "italic", "link"],
      placeholder: this.placeholder,
    });
    this.editor.root.innerHTML = this.modelValue;
    this.editor.on("text-change", () => {
      this.$emit("update:modelValue", this.editor.root.innerHTML);
    });
  },
  watch: {
    modelValue(newVal) {
      if (newVal !== this.editor.root.innerHTML) {
        this.editor.root.innerHTML = newVal;
      }
    }
  }
};
</script>
