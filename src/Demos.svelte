<script>
    import { Willow, Segmented } from "@wx/svelte-core";
    import Filemanager from './Filemanager.svelte';
    import Gantt from './Gantt.svelte';
    import Grid from './Grid.svelte';

    import Router, { push } from "svelte-spa-router";
    import { wrap } from "svelte-spa-router/wrap";

    const options = [{
        id: "gantt",
        name: "Gantt",
    }, {
        id: "files",
        name: "Files",
    }, {
        id: "grid",
        name: "Grid",
    }];
    const routes = {
        "/": wrap({
            component: {},
            conditions: () => {
                push("/gantt");
                return false;
            },
        }),
        "/gantt": Gantt,
        "/files": Filemanager,
        "/grid": Grid
    };

    const navigation = (e) => {
        push(`/${e.detail.id}`);
    }
</script>

<div class="page">
    <div class="top">
        <Willow>
            <Segmented {options} value="gantt" on:select={navigation} />
        </Willow>
    </div>
    <div class="bottom">
        <Router {routes} />
    </div>
</div>

<style>
    .page {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .top {
        background: #efefef;
        padding: 10px;
    }
    .bottom {
        flex: 1;
        height: calc(100% - 50px)
    }
</style>