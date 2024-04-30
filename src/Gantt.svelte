<script>
    import { Willow, Gantt } from "@wx/trial-svelte-gantt"
    import { tasks } from "./data.js";
</script>

<Willow>
    <Gantt {tasks} />
</Willow>