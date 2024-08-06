<template>
  <div>
    <form
      :action="actionUrl"
      method="post"
      class="dropzone"
      :id="dropzoneId"
    >
      <div class="fallback">
        <input name="file" type="file" multiple />
      </div>
      <div class="dz-message needsclick">
        <i class="h1 text-muted ri-upload-cloud-2-line"></i>
        <h3>{{ message }}</h3>
        <span class="text-muted font-13">
          (This is just a demo dropzone. Selected files are
          <strong>not</strong> actually uploaded.)
        </span>
      </div>
    </form>
    <div class="dropzone-previews mt-3" :id="previewContainerId"></div>
  </div>
</template>
<script setup lang="js">
import { onMounted,defineProps } from 'vue';
import 'dropzone/dist/dropzone.css';
import Dropzone from 'dropzone';

const props = defineProps({
  actionUrl: {
    type: String,
    default: '/'
  },
  dropzoneId: {
    type: String,
    default: 'myAwesomeDropzone'
  },
  previewContainerId: {
    type: String,
    default: 'file-previews'
  },
  previewTemplate: {
    type: String,
    default: `
      <div class="card mt-1 mb-0 shadow-none border dz-preview dz-file-preview">
        <div class="dz-preview-inner">
          <div class="dz-remove-container">
            <a href="javascript:void(0);" class="btn btn-link text-muted" data-dz-remove>
              <i class="ri-close-line"></i>
            </a>
          </div>
          <div class="p-2 d-flex align-items-center">
            <div class="me-2">
              <img data-dz-thumbnail src="#" class="avatar-sm rounded bg-light" alt="">
            </div>
            <div class="flex-grow-1">
              <a href="javascript:void(0);" class="text-muted fw-bold" data-dz-name></a>
              <p class="mb-0 text-muted" data-dz-size></p>
            </div>
          </div>
        </div>
      </div>
    `
  },
  message: {
    type: String,
    default: 'Drop files here or click to upload.'
  }
});

onMounted(() => {
  Dropzone.autoDiscover = false;

  const dropzoneInstance = new Dropzone(`#${props.dropzoneId}`, {
    url: props.actionUrl,
    previewsContainer: `#${props.previewContainerId}`,
    previewTemplate: props.previewTemplate,
    autoProcessQueue: false
  });

  // Handle the remove button click event
  dropzoneInstance.on("addedfile", (file) => {
    const removeButton = file.previewElement.querySelector("[data-dz-remove]");
    if (removeButton) {
      removeButton.addEventListener("click", () => {
        dropzoneInstance.removeFile(file);
      });
    }
  });

  // Handle file removal from Dropzone
  dropzoneInstance.on("removedfile", (file) => {
    console.log(`File removed: ${file.name}`);
    // Perform additional actions if necessary, e.g., update state or notify the server
  });
});
</script>
<style scoped>
.dropzone-previews {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dropzone .dz-message {
  text-align: center;
}

.dropzone .dz-preview {
  width: 100%;
  max-width: 400px; 
  position: relative; 
  overflow: hidden;
  margin-bottom: 1rem; 
}

.avatar-sm {
  width: 50px;
  height: 50px;
  object-fit: cover;
}

.dz-preview-inner {
  position: relative;
  display: flex;
  align-items: center;
}

.dz-remove-container {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10;
}

.dz-remove {
  color: red;
  cursor: pointer;
}

.dz-remove i {
  font-size: 16px;
}

.dz-preview .text-container {
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis; 
  white-space: nowrap; 
}

.dz-preview .text-container a,
.dz-preview .text-container p {
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis; 
  white-space: wrap; 
}
</style>
