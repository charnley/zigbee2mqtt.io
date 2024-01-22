"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[34268],{183386:(e,i,n)=>{n.r(i),n.d(i,{data:()=>a});const a=JSON.parse('{"key":"v-768a73cd","path":"/guide/usage/pairing_devices.html","title":"Allowing devices to join","lang":"en-US","frontmatter":{"pageClass":"content-page"},"excerpt":"","headers":[{"level":3,"title":"Frontend (recommended)","slug":"frontend-recommended","link":"#frontend-recommended","children":[]},{"level":2,"title":"Pairing via a specific device","slug":"pairing-via-a-specific-device","link":"#pairing-via-a-specific-device","children":[{"level":3,"title":"MQTT (recommended)","slug":"mqtt-recommended","link":"#mqtt-recommended","children":[]},{"level":3,"title":"Configuration.yaml (not recommended)","slug":"configuration-yaml-not-recommended","link":"#configuration-yaml-not-recommended","children":[]}]},{"level":2,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}],"git":{"updatedTime":1705951618000},"filePathRelative":"guide/usage/pairing_devices.md"}')},645339:(e,i,n)=>{n.r(i),n.d(i,{default:()=>g});var a=n(166252);const t=(0,a.uE)('<h1 id="allowing-devices-to-join" tabindex="-1"><a class="header-anchor" href="#allowing-devices-to-join" aria-hidden="true">#</a> Allowing devices to join</h1><p>To allow devices to join the network joining has to be permitted. There are various ways to do this:</p><h3 id="frontend-recommended" tabindex="-1"><a class="header-anchor" href="#frontend-recommended" aria-hidden="true">#</a> Frontend (recommended)</h3><p>Enabling joining via the frontend ensures that joining is disabled automatically after 255 seconds. The joining button can be found in the right top.</p><h2 id="pairing-via-a-specific-device" tabindex="-1"><a class="header-anchor" href="#pairing-via-a-specific-device" aria-hidden="true">#</a> Pairing via a specific device</h2><p>To the right of Permit join (All) button is an arrow pointing down. This will allow you to pick any router to join from. That is not a guarantee the router is chosen. This can be useful especially for Aqara devices or a switch to a light bulb.</p><h3 id="mqtt-recommended" tabindex="-1"><a class="header-anchor" href="#mqtt-recommended" aria-hidden="true">#</a> MQTT (recommended)</h3>',7),o=(0,a._)("code",null,"zigbee2mqtt/bridge/request/permit_join",-1),r=(0,a._)("code",null,"time",-1),d=(0,a._)("h3",{id:"configuration-yaml-not-recommended",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#configuration-yaml-not-recommended","aria-hidden":"true"},"#"),(0,a.Uk)(" Configuration.yaml (not recommended)")],-1),l=(0,a._)("p",null,[(0,a.Uk)("By setting "),(0,a._)("code",null,"permit_join: true"),(0,a.Uk)(" in your "),(0,a._)("code",null,"configuration.yaml"),(0,a.Uk)(" the joining will automatically be enabled when starting Zigbee2MQTT. Joining is "),(0,a._)("strong",null,"not"),(0,a.Uk)(" automatically disabled.")],-1),c=(0,a._)("h2",{id:"pairing",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,a.Uk)(" Pairing")],-1),s=(0,a._)("p",null,"If no instructions are available, the device can probably be paired by factory resetting it.",-1),u=(0,a._)("p",null,"Once you see something similar to below in the log your device is paired.",-1),m=(0,a._)("div",{class:"language-text line-numbers-mode","data-ext":"text"},[(0,a._)("pre",{class:"language-text"},[(0,a._)("code",null,"Zigbee2MQTT:info  2019-11-09T12:19:56: Successfully interviewed '0x00158d0001dc126a', device has successfully been paired\n")]),(0,a._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,a._)("div",{class:"line-number"})])],-1),h={},g=(0,n(983744).Z)(h,[["render",function(e,i){const n=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[t,(0,a._)("p",null,[(0,a.Uk)("The "),o,(0,a.Uk)(" MQTT topic can be used to enable joining. It is recommended to provide a value for "),r,(0,a.Uk)(" to ensure joining is automatically disabled. See "),(0,a.Wm)(n,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-bridge-request-permit-join"},{default:(0,a.w5)((()=>[(0,a.Uk)("MQTT topic and messages")])),_:1}),(0,a.Uk)(" for more information.")]),d,l,c,(0,a._)("p",null,[(0,a.Uk)("First check if the device page ("),(0,a.Wm)(n,{to:"/supported-devices/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Supported devices")])),_:1}),(0,a.Uk)(", click on the model number) contains instructions on how to pair your device.")]),s,u,m,(0,a._)("p",null,[(0,a.Uk)("In case there are issues when pairing, see the "),(0,a.Wm)(n,{to:"/guide/faq/#why-does-my-device-not-or-fail-to-pair"},{default:(0,a.w5)((()=>[(0,a.Uk)("FAQ")])),_:1}),(0,a.Uk)(" for possible fixes.")])])}]])}}]);