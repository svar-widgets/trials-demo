<script>
    import { Willow, Grid } from "@wx/trial-svelte-grid"
    import { tasks } from "./data.js";

    const columns = [
        { id: "text", header: "Text", width: 200 },
        { id: "progress", header: "Progress", width: 120 },
        { id: "type", header: "Type", width: 120 },
        { id: "details", header: "Details", flexgrow: 1 },
    ];
</script>

<Willow>
    <Grid autoConfig={true} data={tasks} {columns} />
</Willow>