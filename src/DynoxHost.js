"use strict";
const fetch = require('node-fetch');

class DynoxHost {
    constructor(apikey) {
        if (!apikey) throw new Error('[DH.js] Missing User API Key');
        if (typeof apikey !== 'string') throw new Error('[DH.js] User API Key must be a String');

        this.apikey = apikey;
    };

    async getUsage(id) {
        /**
         * Get server usage/stats.
         * @param {String} id Server ID
         */
        if (!id) throw new Error('[DH.js] Missing Server ID in getUsage()');
        if (typeof id !== 'string') throw new Error('[DH.js] Server ID in getUsage() must be a String');

        let res = await fetch(`https://panel.dynoxhost.tk/api/client/servers/${id}/resources`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${this.apikey}`, 'Content-Type': 'application/json', 'Accept': 'application/json' }
        });
        if (res.status === 404) throw new Error(`[DH.js] Server (${id}) not found`);
        if (res.status !== 200) throw new Error(`[DH.js] An unexpected error has occurred`);
        let json = res.json();
        return json;
    };

    async getDetails(id) {
        /**
         * Get server details.
         * @param {String} id Server ID
         */
        if (!id) throw new Error('[DH.js] Missing Server ID in getUsage()');
        if (typeof id !== 'string') throw new Error('[DH.js] Server ID in getServerDetails() must be a String');

        let res = await fetch(`https://panel.dynoxhost.tk/api/client/servers/${id}`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${this.apikey}`, 'Content-Type': 'application/json', 'Accept': 'application/json' }
        });
        if (res.status === 404) throw new Error(`[DH.js] Server (${id}) not found`);
        if (res.status !== 200) throw new Error(`[DH.js] An unexpected error has occurred`);
        let json = res.json();
        return json;
    }

    async setPowerState(id, state) {
        /**
         * Set server power state.
         * @param {String} id Server ID
         * @param {String} state Power State
         */
        if (!id) throw new Error('[DH.js] Missing Server ID in setPowerState()');
        if (typeof id !== 'string') throw new Error('[DH.js] Server ID in setPowerState() must be a String');
        if (!state) throw new Error('[DH.js] Missing Power State in setPowerState()');
        if (typeof state !== 'string') throw new Error('[DH.js] Power State in setPowerState() must be a String');
        //if (!state.toLowerCase().includes(['start', 'stop', 'restart', 'kill'])) throw new Error('[DH.js] Power State in setPowerState() must be: "start", "stop", "restart" or "kill"');

        let res = await fetch(`https://panel.dynoxhost.tk/api/client/servers/${id}/power`, { 
            method: 'POST',
            body: JSON.stringify({ signal: state }),
            headers: { 'Authorization': `Bearer ${this.apikey}`, 'Content-Type': 'application/json', 'Accept': 'application/json' }
        });
        if (res.status === 404) throw new Error(`[DH.js] Server (${id} not found)`);
        if (res.status !== 204) throw new Error(`[DH.js] An unexpected error has occurred`);
        return { output: 'success' };
    }
};

module.exports = DynoxHost;