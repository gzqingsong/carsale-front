<template>
  <div class="dashboard-container">
    <component :is="currentRole"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'
import userAdminDashboard from './useradmin'

export default {
  name: 'Dashboard',
  components: { adminDashboard, editorDashboard, userAdminDashboard },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (this.roles.includes('admin')) {
      this.currentRole = 'adminDashboard'
    } else if (this.roles.includes('editor')) {
      this.currentRole = 'editorDashboard'
    } else if (this.roles.includes('useradmin')) {
      this.currentRole = 'userAdminDashboard'
    }
  }
}
</script>
