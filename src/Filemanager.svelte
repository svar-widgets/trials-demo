<script>
    import { Willow, Filemanager } from "@wx/trial-svelte-filemanager"
    import { files } from "./data.js"
</script>

<Willow>
    <Filemanager data={files} />
</Willow>