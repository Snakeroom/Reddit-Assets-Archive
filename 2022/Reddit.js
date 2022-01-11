// https://www.redditstatic.com/desktop2x/Reddit.7e617fd09d7e9b0533cd.js
// Retrieved at 1/11/2022, 3:50:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit"], {
		"./assets/fonts/BentonSans/font.less": function(e, t, n) {},
		"./assets/fonts/RedditSans/font.less": function(e, t, n) {},
		"./assets/fonts/VCR/font.less": function(e, t, n) {},
		"./assets/fonts/redesignIcon2020/redesignFont2020.css": function(e, t, n) {},
		"./node_modules/@r/google-tag-manager/compiled.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.setup = t.trigger = t.getLocation = void 0;
			var s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				},
				r = n("./node_modules/@r/google-tag-manager/node_modules/uuid/index.js"),
				o = function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
					return t.default = e, t
				}(n("./node_modules/@r/frames/compiled.js"));
			var a = "gtm-" + (0, r.v4)(),
				i = !1,
				c = [],
				d = function() {
					var e = document.getElementById(a);
					return e && e.contentWindow ? e : null
				},
				l = t.getLocation = function() {
					return {
						href: location.href,
						hostname: location.hostname,
						origin: location.origin,
						pathname: location.pathname || "/",
						search: location.search.replace(/^\?/, ""),
						hash: location.hash.replace(/^#/, "")
					}
				},
				u = t.trigger = function(e, t) {
					var n = d();
					n && i ? (t && o.postMessage(n.contentWindow, "data.gtm", t), o.postMessage(n.contentWindow, "event.gtm", {
						event: e
					})) : function(e, t) {
						c.push({
							eventName: e,
							payload: t
						})
					}(e, t)
				},
				m = function() {
					if (d() && i) {
						var e = c.slice();
						c = [], e.forEach((function(e) {
							var t = e.eventName,
								n = e.payload;
							return u(t, n)
						}))
					}
				};
			t.setup = function(e) {
				var t = e.containerId,
					n = e.jailUrl,
					r = e.payload;
				if (t)
					if (n) {
						o.listen("gtm"), o.receiveMessageOnce("loaded.gtm", (function() {
							i = !0, o.stopListening("gtm")
						}));
						var c = document.createElement("iframe");
						c.style.display = "none", c.id = a, c.name = JSON.stringify(s({
							referrer: document.referrer
						}, l(), r)), c.src = n + "?id=" + t, c.onload = m, document.body.appendChild(c)
					} else console.warn("GTM#setup: No `jailUrl` specified, skipping.");
				else console.warn("GTM#setup: No `containerId` specified, skipping.")
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/index.js": function(e, t, n) {
			var s = n("./node_modules/@r/google-tag-manager/node_modules/uuid/v1.js"),
				r = n("./node_modules/@r/google-tag-manager/node_modules/uuid/v4.js"),
				o = r;
			o.v1 = s, o.v4 = r, e.exports = o
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js": function(e, t) {
			for (var n = [], s = 0; s < 256; ++s) n[s] = (s + 256).toString(16).substr(1);
			e.exports = function(e, t) {
				var s = t || 0,
					r = n;
				return r[e[s++]] + r[e[s++]] + r[e[s++]] + r[e[s++]] + "-" + r[e[s++]] + r[e[s++]] + "-" + r[e[s++]] + r[e[s++]] + "-" + r[e[s++]] + r[e[s++]] + "-" + r[e[s++]] + r[e[s++]] + r[e[s++]] + r[e[s++]] + r[e[s++]] + r[e[s++]]
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js": function(e, t, n) {
			(function(t) {
				var n, s = t.crypto || t.msCrypto;
				if (s && s.getRandomValues) {
					var r = new Uint8Array(16);
					n = function() {
						return s.getRandomValues(r), r
					}
				}
				if (!n) {
					var o = new Array(16);
					n = function() {
						for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), o[t] = e >>> ((3 & t) << 3) & 255;
						return o
					}
				}
				e.exports = n
			}).call(this, n("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/v1.js": function(e, t, n) {
			var s = n("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js"),
				r = n("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js"),
				o = s(),
				a = [1 | o[0], o[1], o[2], o[3], o[4], o[5]],
				i = 16383 & (o[6] << 8 | o[7]),
				c = 0,
				d = 0;
			e.exports = function(e, t, n) {
				var s = t && n || 0,
					o = t || [],
					l = void 0 !== (e = e || {}).clockseq ? e.clockseq : i,
					u = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					m = void 0 !== e.nsecs ? e.nsecs : d + 1,
					p = u - c + (m - d) / 1e4;
				if (p < 0 && void 0 === e.clockseq && (l = l + 1 & 16383), (p < 0 || u > c) && void 0 === e.nsecs && (m = 0), m >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				c = u, d = m, i = l;
				var b = (1e4 * (268435455 & (u += 122192928e5)) + m) % 4294967296;
				o[s++] = b >>> 24 & 255, o[s++] = b >>> 16 & 255, o[s++] = b >>> 8 & 255, o[s++] = 255 & b;
				var h = u / 4294967296 * 1e4 & 268435455;
				o[s++] = h >>> 8 & 255, o[s++] = 255 & h, o[s++] = h >>> 24 & 15 | 16, o[s++] = h >>> 16 & 255, o[s++] = l >>> 8 | 128, o[s++] = 255 & l;
				for (var f = e.node || a, g = 0; g < 6; ++g) o[s + g] = f[g];
				return t || r(o)
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/v4.js": function(e, t, n) {
			var s = n("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js"),
				r = n("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js");
			e.exports = function(e, t, n) {
				var o = t && n || 0;
				"string" == typeof e && (t = "binary" == e ? new Array(16) : null, e = null);
				var a = (e = e || {}).random || (e.rng || s)();
				if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t)
					for (var i = 0; i < 16; ++i) t[o + i] = a[i];
				return t || r(a)
			}
		},
		"./node_modules/lodash/_arrayShuffle.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_copyArray.js"),
				r = n("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e) {
				return r(s(e))
			}
		},
		"./node_modules/lodash/_baseShuffle.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_shuffleSelf.js"),
				r = n("./node_modules/lodash/values.js");
			e.exports = function(e) {
				return s(r(e))
			}
		},
		"./node_modules/lodash/shuffle.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayShuffle.js"),
				r = n("./node_modules/lodash/_baseShuffle.js"),
				o = n("./node_modules/lodash/isArray.js");
			e.exports = function(e) {
				return (o(e) ? s : r)(e)
			}
		},
		"./src/chat/helpers/dom.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = e => t => {
					if (t.preventDefault(), e && "function" == typeof e) return e(t)
				},
				r = e => t => {
					if (t.preventDefault(), t.stopPropagation(), e && "function" == typeof e) return e(t)
				}
		},
		"./src/lib/browser/isIncognito.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/constants/index.ts");
			const r = 120 * s.hb;
			t.a = async () => {
				let e = await (async () => await new Promise(e => {
					const t = window.RequestFileSystem || window.webkitRequestFileSystem;
					t ? t(0, 100, () => e(!1), () => e(!0)) : e(void 0)
				}))();
				return e || (e = await (async () => {
					if ("storage" in navigator && "estimate" in navigator.storage) {
						const {
							quota: e
						} = await navigator.storage.estimate();
						return !e || e <= r
					}
				})()), e
			}
		},
		"./src/lib/hooks/useOnClickOutside.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js");

			function r(e, t) {
				const n = Object(s.useCallback)(n => {
					if (!t) return;
					const s = document.getElementById(e);
					s && (s.contains(n.target) || t(n))
				}, [e, t]);
				Object(s.useEffect)(() => {
					if (t) return window.addEventListener("click", n), () => {
						window.removeEventListener("click", n)
					}
				}, [t, n])
			}
		},
		"./src/lib/isSimpleClick/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				if (e && e.target && (e => {
						let t = e;
						for (; t && t !== window.document.body;) {
							if ("A" === t.nodeName) return !0;
							t = t.parentElement
						}
						return !1
					})(e.target)) {
					if (e.ctrlKey) return !1;
					if (e.altKey) return !1;
					if (e.metaKey) return !1;
					if (e.shiftKey) return !1
				}
				return !0
			}
		},
		"./src/lib/notifications/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./src/lib/getParsedUserAgent/index.ts"),
				r = n("./src/lib/localStorageAvailable/index.ts"),
				o = n("./src/lib/notifications/constants.ts"),
				a = n("./src/lib/notifications/featureFlags.ts");
			n("./src/lib/serviceWorker/index.ts");
			const i = () => {
					if (Object(a.a)() !== o.c.NotificationsSupported) return o.a.Unsupported;
					const e = Object(r.a)() && localStorage.getItem(o.f) === o.g;
					return "granted" === Notification.permission ? o.a.Granted : "denied" === Notification.permission ? o.a.Denied : e ? o.a.Closed : o.a.Default
				},
				c = () => !!Object(r.a)() && (localStorage.removeItem(o.f), !0),
				d = async (e, t, n, a, c, d) => {
					const l = i();
					if (l === o.a.Unsupported) return void d();
					if (Object(r.a)()) {
						const t = localStorage.getItem(o.h),
							n = (new Date).getTime();
						if (!e && t && parseInt(t) + o.i > n) return void d();
						localStorage.setItem(o.h, n.toString())
					}
					if (!t && l === o.a.Denied) return a(!1, !0), void d();
					if (!t && l === o.a.Granted) return c(!1), void d();
					if (!t && l === o.a.Closed) return void d();
					let u = o.a.Default;
					const m = navigator.userAgent;
					switch (Object(s.b)(m) || Object(s.f)(m) ? function(e) {
						return new Promise(t => setTimeout(t, e))
					}(1800).then(() => {
						u === o.a.Default && n()
					}) : n(), u = await Notification.requestPermission()) {
						case "granted":
							c(!0);
							break;
						case "denied":
							a(!0, !0);
							break;
						case "default":
							d();
							break;
						default:
							a(!0, !1), localStorage.setItem(o.f, o.g)
					}
				}
		},
		"./src/lib/pubsub/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			class s {
				constructor() {
					this.listenerMap = {}
				}
				_resetListenerMap() {
					this.listenerMap = {}
				}
				_resetKey(e) {
					this.listenerMap[e] = []
				}
				reset(e) {
					e ? this._resetKey(e) : this._resetListenerMap()
				}
				addListeners(e, ...t) {
					this.listenerMap[e] || (this.listenerMap[e] = []), this.listenerMap[e].push(...t)
				}
				removeListeners(e, ...t) {
					if (!this.listenerMap[e] || !this.listenerMap[e].length) return !1;
					const n = t.length,
						s = this.listenerMap[e].length;
					return this.listenerMap[e] = this.listenerMap[e].filter(e => !t.includes(e)), this.listenerMap[e].length - s === n
				}
				publish(e) {
					return !(!this.listenerMap[e] || !this.listenerMap[e].length) && (this.listenerMap[e].forEach(e => e()), !0)
				}
			}
		},
		"./src/lib/safeBadgeUpdate.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/lib/throwDevError.ts");
			const r = e => {
				const t = null === window || void 0 === window ? void 0 : window.navigator;
				if (t && "setAppBadge" in t && "clearAppBadge" in t) {
					(e >= 0 ? t.setAppBadge(e) : t.clearAppBadge()).catch(e => Object(s.a)(e))
				}
			}
		},
		"./src/reddit/actions/alpha.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			}));
			var s = n("./src/config.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts");
			var i = n("./src/reddit/helpers/redesignOptoutCookie/index.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/makeRequest/index.ts");
			async function m(e, t) {
				return await Object(u.b)({
					method: l.jb.POST,
					endpoint: "/timings/optoutrequest",
					data: {
						appName: e.statsAppName,
						successful: t
					},
					type: "json"
				})
			}
			const p = e => async (t, n, {
				apiContext: s
			}) => {
				(await
					function(e) {
						return Object(r.a)(Object(o.a)(e, [a.a]), {
							endpoint: `${e.apiUrl}/api/leave_redesign_beta`,
							method: "post",
							type: "json"
						})
					}(s())).ok ? (Object(i.b)(), await m(s(), !0), e && window.location.reload()) : (m(s(), !1), t(Object(c.f)({
					kind: d.b.Error,
					text: "Sorry, something went wrong. Try Opting out again."
				})))
			}, b = () => async (e, t, {
				apiContext: n
			}) => {
				Object(i.a)(),
					function(e) {
						Object(r.a)(Object(o.a)(e, [a.a]), {
							endpoint: `${e.apiUrl}/api/join_redesign_beta`,
							method: "post",
							type: "json"
						}).then(() => {
							const {
								pathname: e,
								search: t
							} = window.location, n = `${s.a.redditUrl}${e}${t}`;
							window.location.replace(n)
						})
					}(n())
			}
		},
		"./src/reddit/actions/comment/authoring.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return ee
			})), n.d(t, "o", (function() {
				return ne
			})), n.d(t, "m", (function() {
				return se
			})), n.d(t, "q", (function() {
				return ae
			})), n.d(t, "t", (function() {
				return ie
			})), n.d(t, "n", (function() {
				return de
			})), n.d(t, "s", (function() {
				return le
			})), n.d(t, "l", (function() {
				return ue
			})), n.d(t, "a", (function() {
				return pe
			})), n.d(t, "b", (function() {
				return fe
			})), n.d(t, "p", (function() {
				return ge
			})), n.d(t, "f", (function() {
				return Ce
			})), n.d(t, "g", (function() {
				return Oe
			})), n.d(t, "j", (function() {
				return ve
			})), n.d(t, "d", (function() {
				return ye
			})), n.d(t, "c", (function() {
				return Se
			})), n.d(t, "i", (function() {
				return ke
			})), n.d(t, "h", (function() {
				return Ie
			})), n.d(t, "k", (function() {
				return Me
			})), n.d(t, "r", (function() {
				return Te
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/makeDraftKey/index.ts"),
				i = n("./src/reddit/actions/changeUsername.ts"),
				c = n("./src/reddit/actions/login.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/postCreation/editorContent.ts"),
				m = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				p = n("./src/reddit/actions/shortcuts/utils.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				f = n("./src/reddit/constants/adEvents.ts"),
				g = n("./src/reddit/constants/localStorage.ts"),
				C = n("./src/redditGQL/operations/CommentToxicity.json"),
				O = n("./src/lib/makeApiRequest/index.ts"),
				v = n("./src/lib/makeGqlRequest/index.ts"),
				x = n("./src/lib/omitHeaders/index.ts"),
				y = n("./src/reddit/constants/headers.ts"),
				E = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				j = n("./src/reddit/helpers/genericServerError/index.ts"),
				_ = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				S = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				k = n("./src/reddit/models/PostCreationForm/index.ts"),
				P = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				w = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const N = (e, t, n, s) => {
					let r, o;
					if (s === k.i.MARKDOWN) r = n.text, o = null;
					else {
						r = null;
						let e = null;
						n.rteState && (e = h.a.toRichTextJSON(n.rteState).document), o = JSON.stringify({
							document: e
						})
					}
					return Object(v.a)(e, {
						...C,
						variables: {
							subredditName: t,
							markdown: r,
							richText: o
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				I = async (e, t, n, s, o) => {
					const a = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (o === k.i.MARKDOWN) a.text = n.text;
					else {
						a.text = null;
						let e = null;
						n.rteState && (e = h.a.toRichTextJSON(n.rteState).document), a.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(O.a)(Object(x.a)(e, [y.a]), {
						method: r.jb.POST,
						endpoint: Object(E.a)(Object(P.a)(Object(w.a)(`${e.apiUrl}/api/comment.json`))),
						data: a
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(S.a)(e)
					} : {
						...e,
						body: {
							comment: Object(_.a)(e.body.json.data.things[0].data, s)
						}
					} : {
						...e,
						body: {
							comment: Object(_.a)(e.body, s)
						}
					} : {
						...e,
						error: e.error || Object(j.a)()
					})
				};
			var M = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var T = n("./src/reddit/endpoints/post/index.tsx"),
				R = n("./src/reddit/endpoints/post/convert.ts"),
				L = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				A = n("./src/reddit/featureFlags/index.ts"),
				F = n("./src/reddit/helpers/correlationIdTracker.ts"),
				D = n("./src/reddit/helpers/dom/index.ts"),
				B = n("./src/reddit/helpers/localStorage/index.ts"),
				U = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				G = n("./src/reddit/models/Comment/index.ts"),
				H = n("./src/reddit/models/PostDraft/index.ts"),
				W = n("./src/reddit/models/RichTextJson/index.ts"),
				q = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				V = n("./src/reddit/models/Toast/index.ts"),
				K = n("./src/reddit/selectors/comments.ts"),
				z = n("./src/reddit/selectors/commentSelector.ts"),
				Q = n("./src/reddit/selectors/platform.ts"),
				J = n("./src/reddit/selectors/posts.ts"),
				Z = n("./src/reddit/selectors/user.ts"),
				Y = n("./src/reddit/actions/comment/index.ts"),
				X = n("./src/reddit/actions/comment/constants.ts");
			const $ = Object(o.a)(X.k),
				ee = ({
					hasFocus: e,
					draftKey: t
				}) => async (n, s) => {
					const r = s();
					if (!!r.features.comments.drafts[t])
						if (Object(Z.L)(r) && e) {
							const s = $({
								hasFocus: e,
								draftKey: t
							});
							n(Object(i.f)(s))
						} else n($({
							hasFocus: e,
							draftKey: t
						}))
				}, te = Object(o.a)(X.H), ne = Object(o.a)(X.J), se = Object(o.a)(X.I), re = Object(o.a)(X.G), oe = async (e, t, n, s) => {
					const r = s.ok && s.body,
						o = r && r.comment && r.comment.id;
					await U.g(e, n, t, o)
				}, ae = "Toxicity_Warning__Modal", ie = (e, t, n, s, r, o) => async (a, i, {
					gqlContext: c
				}) => {
					const l = i(),
						u = Object(Q.e)(l);
					let m = "";
					if (u && (m = u.name), A.d.enableToxicityWarning(l)) {
						if (!(await N(c(), m, s, r))) return void a(Object(d.i)(ae))
					}
					a(de(e, t, n, s, r, o))
				}, ce = e => e.rteState ? h.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, de = (e, t, n, o, a, i, c) => async (u, h, {
					apiContext: g
				}) => {
					u(Object(d.g)(ae));
					const C = h(),
						O = C.features.comments.submit.pending[n];
					if (!C.user.account || O) return;
					u(te({
						draftKey: n,
						draft: o
					}));
					const v = C.user.account.displayText,
						x = o.commentMode;
					let y;
					if (c ? (y = await Object(L.i)(g(), e, o, v), u(Object(m.a)({
							streamId: e,
							level: y.body.automuteLevel
						}))) : y = await I(g(), e, o, v, x), y.ok) {
						let s;
						s = y.body, u(ne({
							...s,
							headCommentId: Object(K.w)(C, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const r = Object(J.H)(h(), {
							postId: e
						});
						u(Object(l.z)(r, f.a.CommentSubmitted))
					} else {
						y.error && y.error.type === r.Jb && U.i(C, ce(o), e);
						const t = y.error && y.error.fields && y.error.fields[0] ? y.error.fields[0].msg : s.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u(re({
							draftKey: n,
							error: y.error
						})), u(Object(b.f)({
							duration: b.a,
							kind: V.b.Error,
							text: t
						}))
					}
					oe(h(), t, a, y).then(() => y.ok && a === k.i.RICH_TEXT ? Object(F.b)(F.a.CommentComposer) : void 0), i || Object(p.d)()
				}, le = e => async (t, n, {
					gqlContext: s
				}) => {
					const {
						parentCommentId: r,
						commentsPageKey: o,
						parentCommentDepth: a,
						draftKey: i,
						formData: c,
						editorMode: l
					} = e, u = n(), m = Object(Q.e)(u);
					let p = "";
					if (m && (p = m.name), A.d.enableToxicityWarning(u)) {
						if (!(await N(s(), p, c, l))) return void t(Object(d.i)(ae))
					}
					t(ue({
						commentsPageKey: o,
						draftKey: i,
						parentCommentDepth: a,
						parentCommentId: r,
						formData: c,
						editorMode: l
					}))
				}, ue = e => async (t, n, {
					apiContext: s
				}) => {
					const {
						parentCommentId: o,
						commentsPageKey: a,
						parentCommentDepth: i,
						draftKey: c,
						formData: l,
						editorMode: u
					} = e;
					t(Object(d.g)(ae));
					const m = n(),
						b = m.features.comments.submit.pending[c];
					if (!m.user.account || b) return;
					t(te({
						draftKey: c,
						draft: l
					}));
					const h = m.user.account.displayText,
						f = l.commentMode,
						g = await I(s(), o, l, h, f);
					if (g.ok) t(se({
						...g.body,
						parentCommentId: o,
						commentsPageKey: a,
						draftKey: c,
						depth: i + 1
					}));
					else {
						if (g.error && g.error.type === r.Jb) {
							const e = Object(z.b)(m, {
								commentId: o
							});
							if (!e) return;
							U.i(m, ce(l), e.postId, o)
						}
						t(re({
							draftKey: c,
							error: g.error
						}))
					}
					oe(n(), a, u, g), Object(p.d)()
				}, me = Object(o.a)(X.q), pe = Object(o.a)(X.p), be = Object(o.a)(X.l), he = (Object(o.a)(X.g), Object(o.a)(X.m)), fe = (Object(o.a)(X.t), (e, t, n) => async (r, o, {
					apiContext: a
				}) => {
					const i = e === k.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(W.G)(t)) r(he({
						editorMode: e,
						draftKey: n,
						content: i ? W.i : ""
					})), r(Object(u.c)(e));
					else {
						r(Object(u.b)(n));
						const o = await Object(R.a)(a(), e, i ? t : JSON.stringify(t));
						if (o.ok) {
							const t = o.body.output;
							r(Object(u.a)(n)), r(he({
								editorMode: e,
								draftKey: n,
								content: t
							})), r(Object(u.c)(e))
						} else r(Object(u.a)(n)), r(Object(b.f)({
							duration: b.a,
							kind: V.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), ge = ({
					commentsPageKey: e,
					parentCommentId: t,
					singleOpen: n
				}) => async (s, r) => {
					const o = r(),
						l = Object(a.a)(H.c.replyToComment, t);
					if (!Object(Z.J)(r())) return s(Object(c.j)()), void s(Object(d.k)({
						actionSource: d.a.Reply,
						redirectUrl: Object(K.m)(r(), {
							commentId: t
						})
					}));
					const u = o.features.comments.replyFormOpen[e],
						m = u && u[t];
					if ((m || u && n) && (Object.keys(u).forEach(t => u[t] && s(pe({
							parentCommentId: t,
							commentsPageKey: e
						}))), m)) return;
					let p = "",
						b = null;
					const h = o.user.prefs.commentMode,
						f = Object(D.d)();
					if (f) {
						const e = f.filter(e => !!e && 10 !== e.charCodeAt(0));
						if (h === k.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
						else {
							const t = e.map(e => q.s(e, null)).map(e => q.l([e])),
								n = q.s("", null),
								s = q.l([n]);
							b = {
								document: [q.c(t), s]
							}
						}
					}
					const g = o.features.comments.drafts[l];
					let C;
					if (C = f ? {
							commentMode: h,
							draftType: H.c.replyToComment,
							rtJson: b,
							text: `${p}\n`
						} : g || {
							commentMode: h,
							draftType: H.c.replyToComment,
							rtJson: b,
							text: ""
						}, Object(Z.L)(o)) {
						const n = me({
							parentCommentId: t,
							commentsPageKey: e,
							draftKey: l,
							formData: C
						});
						s(Object(i.f)(n))
					} else s(me({
						parentCommentId: t,
						commentsPageKey: e,
						draftKey: l,
						formData: C
					}))
				}, Ce = e => async t => {
					t(Object(Y.p)(e)), t(ye(e))
				}, Oe = ({
					parentCommentId: e,
					commentsPageKey: t
				}) => async n => {
					n(pe({
						parentCommentId: e,
						commentsPageKey: t
					})), n(ge({
						parentCommentId: e,
						commentsPageKey: t
					})), n(Object(Y.p)({
						commentId: e,
						commentsPageKey: t
					}))
				}, ve = (e, t) => n => n(be({
					draftKey: e,
					formData: t
				})), xe = Object(o.a)(X.s), ye = ({
					commentId: e,
					commentMode: t,
					commentsPageKey: n,
					draftKey: s,
					text: r
				}) => async (o, a) => {
					const i = a();
					i.user.account && (U.d(i), o(xe({
						commentId: e,
						commentsPageKey: n,
						draftKey: s,
						formData: {
							text: r,
							commentMode: t,
							rteState: null,
							draftType: H.c.edit,
							hasFocus: !0
						}
					})))
				}, Ee = Object(o.a)(X.C), je = Object(o.a)(X.B), _e = Object(o.a)(X.D), Se = Object(o.a)(X.h), ke = ({
					id: e,
					commentsPageKey: t,
					depth: n,
					draftKey: s,
					formData: o
				}) => async (n, a, {
					apiContext: i
				}) => {
					const c = a();
					if (!c.user.account) return;
					n(Ee({
						draftKey: s
					})), U.e(c);
					const d = c.user.account.displayText || "",
						l = o.commentMode,
						u = await (async (e, t, n, s, o, a) => {
							const i = {
								api_type: "json",
								return_rtjson: !0,
								thing_id: t
							};
							if (a === k.i.MARKDOWN) i.text = s.text;
							else {
								i.text = null;
								let e = null;
								s.rteState && (e = h.a.toRichTextJSON(s.rteState).document), i.richtext_json = JSON.stringify({
									document: e
								})
							}
							return Object(O.a)(Object(x.a)(e, [y.a]), {
								endpoint: Object(E.a)(Object(w.a)(Object(P.a)(`${e.apiUrl}/api/editusertext`))),
								method: r.jb.POST,
								data: i
							}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
								...e,
								ok: !1,
								error: Object(S.a)(e)
							} : {
								...e,
								body: {
									comment: Object(_.a)(e.body.json.data.things[0].data, o)
								}
							} : {
								...e,
								body: {
									comment: Object(_.a)(e.body, o)
								}
							} : {
								...e,
								error: e.error || Object(j.a)()
							})
						})(i(), e, 0, o, d, l);
					if (u.ok) {
						const r = u.body;
						n(_e({
							commentId: e,
							commentsPageKey: t,
							draftKey: s
						})), n(Object(Y.i)({
							[e]: {
								...r.comment
							}
						}))
					} else n(je({
						draftKey: s,
						error: u.error
					}))
				}, Pe = Object(o.a)(X.z), we = Object(o.a)(X.y), Ne = Object(o.a)(X.A), Ie = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const a = s();
					n(Pe({
						id: e
					})), U.b(e, a);
					const i = await ((e, t) => Object(O.a)(Object(x.a)(e, [y.a]), {
						endpoint: Object(E.a)(`${e.apiUrl}/api/del`),
						method: r.jb.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(S.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(j.a)()
					}))(o(), e);
					i.ok ? n(Ne({
						id: e,
						postId: t
					})) : n(we({
						id: e,
						error: i.error
					}))
				}, Me = e => async (t, n, {
					apiContext: s
				}) => {
					const r = !n().features.comments.models[e].sendReplies;
					t(Object(Y.i)({
						[e]: {
							sendReplies: r
						}
					})), (await Object(T.o)(s(), e, r)).ok || t(Object(Y.i)({
						[e]: {
							sendReplies: !r
						}
					}))
				}, Te = (e, t) => async (n, r, {
					gqlContext: o
				}) => {
					var a, i, c, d, l, u;
					n(Object(Y.c)());
					const m = e => Object(b.f)(Object(b.e)(e, V.b.Error));
					if (((null === (i = null === (a = r().pages) || void 0 === a ? void 0 : a.comments) || void 0 === i ? void 0 : i.followed) || []).length === g.a) n(m(s.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const a = t === G.a.FOLLOWED,
							i = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(Y.n)(i)), (await ((e, t) => Object(v.a)(e, {
								...M,
								variables: {
									input: t
								}
							}))(o(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(B.sb)(null !== (l = null === (d = null === (c = r().pages) || void 0 === c ? void 0 : c.comments) || void 0 === d ? void 0 : d.followed) && void 0 !== l ? l : [], null === (u = r().user.account) || void 0 === u ? void 0 : u.id);
							const e = a ? s.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : s.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							n(Object(b.f)({
								kind: V.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(Y.n)(i)), n(m(s.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				}
		},
		"./src/reddit/actions/economics/econManagement/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			const s = "ECON_MANAGEMENT_FETCH_ENTITY_TYPES_SUCCESS",
				r = "ECON_MANAGEMENT_FETCH_ENTITY_TYPES_FAILED",
				o = "ECON_MANAGEMENT_SEARCH_ENTITY_DATA_STARTED",
				a = "ECON_MANAGEMENT_SEARCH_ENTITY_DATA_SUCCESS",
				i = "ECON_MANAGEMENT_SEARCH_ENTITY_DATA_FAILED",
				c = "ECON_MANAGEMENT_FETCH_ASSOCIATED_DATA_SUCCESS"
		},
		"./src/reddit/actions/economics/econManagement/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "a", (function() {
				return y
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/economics/econManagement/constants.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/EconAdminPanelQuery.json"),
				c = n("./src/redditGQL/operations/PerformEconAdminAction.json");
			var d = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/reddit/routes/econManagement/index.ts"),
				u = n("./src/reddit/selectors/econManagement.ts"),
				m = n("./src/reddit/selectors/user.ts");
			const p = Object(s.a)(r.c),
				b = Object(s.a)(r.b),
				h = Object(s.a)(r.e),
				f = Object(s.a)(r.f),
				g = Object(s.a)(r.d),
				C = Object(s.a)(r.a),
				O = () => async (e, t, {
					gqlContext: n
				}) => {
					const s = t(),
						r = Object(m.k)(s);
					if (r && r.isEmployee) try {
						const t = await (async e => {
							const t = await Object(a.a)(e, {
								...i,
								variables: {
									query: "",
									queryName: "getEntityTypes"
								}
							});
							if (!t.ok) throw new Error("Unable to update the preferred achievement flair");
							const n = t.body.data.econAdminPanel.response;
							return JSON.parse(n)
						})(n());
						e(p(t))
					} catch (c) {
						e(b()), e(Object(o.f)({
							duration: o.a,
							kind: d.b.Error,
							text: c.message
						}))
					}
				}, v = e => async (t, n, {
					gqlContext: s
				}) => {
					const r = n(),
						c = Object(m.k)(r);
					if (c && c.isEmployee) {
						if ("undefined" != typeof window) {
							const t = `?${l.b}=${e}`;
							window.history.pushState({
								path: t
							}, "", t)
						}
						t(h());
						try {
							const n = await (async (e, t) => {
								const n = await Object(a.a)(e, {
									...i,
									variables: {
										query: JSON.stringify({
											entityRef: t
										}),
										queryName: "getEntity"
									}
								});
								if (!n.ok) throw new Error(`Unable to fetch ${t}`);
								const s = n.body.data.econAdminPanel.response;
								return JSON.parse(s)
							})(s(), e);
							t(f(n))
						} catch (u) {
							t(g()), t(Object(o.f)({
								duration: o.a,
								kind: d.b.Error,
								text: u.message
							}))
						}
					}
				}, x = e => async (t, n, {
					gqlContext: s
				}) => {
					const r = n(),
						c = Object(m.k)(r);
					if (!c || !c.isEmployee) return;
					const l = Object(u.b)(r);
					if (l) try {
						const n = await (async (e, t, n) => {
							const s = await Object(a.a)(e, {
								...i,
								variables: {
									query: JSON.stringify({
										contextEntityRef: t,
										entityType: n
									}),
									queryName: "getEntitiesBelongingTo"
								}
							});
							if (!s.ok) throw new Error(`Unable to fetch ${n} data for ${t}`);
							const r = s.body.data.econAdminPanel.response;
							return JSON.parse(r)
						})(s(), l.prefixedId, e);
						t(C({
							entity: n,
							type: e
						}))
					} catch (p) {
						t(Object(o.f)({
							duration: o.a,
							kind: d.b.Error,
							text: p.message
						}))
					}
				}, y = (e, t, n) => async (s, r, {
					gqlContext: i
				}) => {
					const l = r(),
						p = Object(m.k)(l);
					if (p && p.isEmployee && Object(u.b)(l)) try {
						await (async (e, t, n, s) => {
							const r = s ? {
								params: s
							} : {};
							if (!(await Object(a.a)(e, {
									...c,
									variables: {
										input: {
											name: n,
											args: JSON.stringify({
												entityRef: t,
												...r
											})
										}
									}
								})).ok) throw new Error(`Unable to perform ${n} on ${t} with ${JSON.stringify(r)}`)
						})(i(), e, t, n), s(Object(o.f)({
							duration: o.a,
							kind: d.b.SuccessCommunityGreen,
							text: `${t} executed successfully for ${e}`
						}))
					} catch (b) {
						s(Object(o.f)({
							duration: o.a,
							kind: d.b.Error,
							text: b.message
						}))
					}
				}
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeRequest/index.ts"),
				o = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");
			var i = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/economics/me/constants.ts");
			const d = Object(i.a)(c.a),
				l = Object(i.a)(c.b),
				u = Object(i.a)(c.c),
				m = e => async (t, n, {
					apiContext: s
				}) => {
					const r = e && e.includeMemberships || !1,
						i = e && e.forceFetch || !1,
						c = n();
					if (!c.economics.me.fetched || r && !c.economics.me.data.specialMemberships || i) {
						const e = await
						function(e, t) {
							return Object(a.a)(e, {
								method: "get",
								endpoint: `${o.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(s(), r);
						if (e.ok) {
							const n = e.body;
							r && !n.specialMemberships && (n.specialMemberships = {}), t(d(n))
						}
					}
				}, p = () => async (e, t) => {
					const n = t(),
						o = n.economics.me.data;
					if (!o) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(l());
						const t = `https://${o.pointsDocsBaseUrl}v1.json?web`,
							n = await Object(r.b)({
								endpoint: t,
								method: s.jb.GET
							});
						n.ok && n.body && e(u(n.body))
					}
				}
		},
		"./src/reddit/actions/emailCollection/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return h
			}));
			var s = n("./node_modules/lodash/once.js"),
				r = n.n(s),
				o = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/notificationBanner.ts"),
				i = n("./src/reddit/actions/preferences.ts"),
				c = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				d = n("./src/reddit/components/Settings/modalIds.ts"),
				l = n("./src/reddit/helpers/localStorage/index.ts"),
				u = n("./src/reddit/selectors/emailCollection.ts");
			const m = r()(l.c),
				p = () => async (e, t) => {
					const n = t();
					m(), Object(u.a)(n) && (await e(Object(i.z)()), Object(u.a)(t()) && e(Object(a.d)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, b = () => async (e, t) => {
					const n = t();
					Object(u.a)(n) && (Object(l.b)(), e(Object(a.c)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, h = () => async (e, t) => {
					e(Object(o.g)(d.h))
				}
		},
		"./src/reddit/actions/emailVerification.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/models/EmailSettings/index.ts"),
				l = n("./src/reddit/models/Toast/index.ts");
			const u = e => async (t, n, {
				apiContext: r
			}) => {
				switch (e) {
					case d.a.Success:
						t(Object(c.f)({
							kind: l.b.SuccessCommunity,
							text: s.fbt._("Email verification complete", null, {
								hk: "vp6R2"
							})
						}));
						break;
					case d.a.AlreadyVerified:
						t(Object(c.f)({
							kind: l.b.SuccessCommunity,
							text: s.fbt._("Your email address has already been verified.", null, {
								hk: "7ro41"
							})
						}));
						break;
					case d.a.WrongUser:
						return void t(Object(c.f)({
							kind: l.b.Error,
							text: s.fbt._("The email verification link you've followed is for a different user account. Please log out and click the email verification link again to verify your email.", null, {
								hk: "1NrK5a"
							})
						}));
					default:
						t(Object(c.f)({
							kind: l.b.Error,
							text: s.fbt._("Something went wrong.", null, {
								hk: "JbBLl"
							})
						}))
				}
			}, m = e => async (t, n, {
				apiContext: s
			}) => {
				const c = await ((e, t) => Object(o.a)(Object(a.a)(e, [i.a]), {
					method: r.jb.POST,
					endpoint: `${e.apiUrl}/api/v1/verify_email/${t}`,
					data: {}
				}))(s(), e);
				if (c.ok && c.body && c.body.success) return d.a.Success;
				switch (c.body.reason) {
					case d.a.AlreadyVerified:
						return d.a.AlreadyVerified;
					case d.a.WrongUser:
						return d.a.WrongUser;
					default:
						return d.a.Error
				}
			}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "b", (function() {
				return S
			}));
			var s, r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/performanceTimings/index.tsx"),
				a = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(s || (s = {}));
			var d, l = n("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var m = n("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = n("./src/reddit/selectors/platform.ts"),
				b = n("./src/reddit/selectors/user.ts");
			const h = Object(r.a)(a.g),
				f = Object(r.a)(a.e),
				g = Object(r.a)(a.h),
				C = Object(r.a)(a.c),
				O = Object(r.a)(a.f),
				v = Object(r.a)(a.j),
				x = Object(r.a)(a.i),
				y = () => async (e, t, {
					gqlContext: n
				}) => {
					const r = t(),
						o = Object(m.e)(r),
						a = Object(m.d)(r),
						d = Object(b.I)(r);
					if (o || !a) return;
					e(g());
					let p = !1;
					try {
						const t = d ? s.LoggedInGeo : s.LoggedOutGeo,
							r = await ((e, t, n) => Object(i.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(n(), t);
						if (r.ok && r.body) {
							const {
								data: t
							} = r.body;
							if (E(t)) {
								if (j(t)) {
									e(C({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), p = !0
								} else if (_(t)) {
									const n = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: s,
											interactedSubreddit: r,
											category: o
										} = n.focusRecommendations[0],
										a = [s, r],
										i = Object(u.d)(a),
										c = Object(l.b)(a),
										d = Object(u.c)(s),
										m = {
											recommendedSubredditIds: [s.id],
											interactedSubredditIds: [r.id],
											subreddits: i,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: o,
											lastLoadedEnv: "client"
										};
									e(h(m)), p = !0
								}
							} else p = !1
						}
					} catch (O) {
						p = !1
					}
					p || e(f({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, E = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, j = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations;
					return !(!n || 0 !== n.length)
				}, _ = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						s = t && t.type;
					return !!(n && !j(e) && s === d.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				}, S = () => async (e, t, n) => {
					var s, r;
					const a = t(),
						i = Object(m.g)(a);
					if (Object(m.f)(a) || null === i || "client" === i) {
						const n = null === (r = null === (s = Object(p.b)(t())) || void 0 === s ? void 0 : s.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							i = Object(b.J)(a);
						return Object(o.i)(() => e(y()), {
							name: "getFocusedVerticalsRequested",
							page: n,
							isLoggedIn: i
						})
					}
					if ("server" === i) return e(O({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/framedGild/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/actions/gold/modals.ts"),
				r = n("./src/reddit/actions/users.ts"),
				o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = e => async (t, n) => {
				const i = n(),
					c = e.params.thingId;
				t(Object(s.c)({
					correlationId: Object(o.e)(o.a.GildingFlow),
					thingId: c
				})), Object(a.J)(i) || await t(r.t());
				const d = n();
				if (!Object(a.J)(d)) return t(Object(s.f)())
			}
		},
		"./src/reddit/actions/framedModal/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/actions/users.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const o = e => async (e, t) => {
				const n = t();
				Object(r.J)(n) || await e(s.t());
				const o = t();
				if (!Object(r.J)(o)) throw new Error("Failed to login")
			}
		},
		"./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./src/lib/env/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/sentry/index.ts"),
				a = n("./src/reddit/endpoints/gold/productCatalog/index.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				c = n("./src/lib/initializeClient/installReducer.ts"),
				d = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(c.a)({
				features: {
					avatar: d.a
				}
			});
			const l = Object(r.a)(i.o);
			class SpecialEventsError extends Error {
				constructor() {
					super(...arguments), this.response = null
				}
			}
			const u = () => async (e, t, {
				gqlContext: n
			}) => {
				try {
					const t = await Object(a.d)(n());
					if (!t.ok) {
						const e = new SpecialEventsError("Got bad response in GQL call for special events");
						throw e.response = t, e
					} {
						const n = t.body.data.econSpecialEvents;
						await e(l(n))
					}
				} catch (r) {
					Object(s.b)() || console.error(r), o.c.withScope(e => {
						var t, n;
						e.setExtra("response", r.response), e.setExtra("status", null === (t = r.response) || void 0 === t ? void 0 : t.status), e.setExtra("graphql_error", null === (n = r.response) || void 0 === n ? void 0 : n.error), o.c.captureException(r)
					})
				}
			}
		},
		"./src/reddit/actions/notificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "c", (function() {
				return O
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/notificationSettingsLayout/constants.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts");
			n("./src/lib/makeGqlRequest/index.ts"), n("./src/redditGQL/operations/UserSubredditsNotificationsLevel.json");
			var c = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				d = n("./src/reddit/models/Toast/index.ts");
			const l = Object(r.a)(o.c),
				u = Object(r.a)(o.b),
				m = Object(r.a)(o.a),
				p = Object(r.a)(o.f),
				b = Object(r.a)(o.e),
				h = Object(r.a)(o.d),
				f = e => async (t, n, {
					gqlContext: s
				}) => {
					e === c.a.Push ? t(p()) : t(l()), await async function(e, t, n) {
						const s = await Object(i.a)(e(), {
							channel: t
						});
						if (s.ok && s.body) {
							const e = function(e) {
								const t = e && e.data,
									n = t && t.notificationSettingsLayoutByChannel,
									s = n && n.sections;
								if (s) return function(e) {
									const t = {},
										n = [];
									let s = {},
										r = [];
									const o = e => {
										const {
											rowIds: o,
											rowsCollection: a
										} = function(e) {
											const t = [],
												n = {};
											if (e.rows)
												for (let s = 0; s < e.rows.length; s++) {
													const r = e.rows[s],
														o = r.messageType;
													t.push(o), n[o] = r
												}
											return {
												rowsCollection: n,
												rowIds: t
											}
										}(e);
										s = {
											...s,
											...a
										}, r = [...r, ...o];
										const i = e.id;
										n.push(i), t[i] = {
											...e,
											rows: o
										}
									};
									for (let a = 0; a < e.length; a++) o(e[a]);
									return {
										sections: {
											byId: t,
											allIds: n
										},
										rows: {
											byId: s,
											allIds: r
										}
									}
								}(s)
							}(s.body);
							t === c.a.Push ? n(b(e)) : n(u(e))
						} else t === c.a.Push ? n(h({
							error: s.error
						})) : n(m({
							error: s.error
						}))
					}(s, e, t)
				};
			const g = Object(r.a)(o.g),
				C = e => async (t, n, {
					gqlContext: r
				}) => {
					(await Object(i.b)(r(), e)).ok ? (O(t, e), function(e) {
						e(Object(a.f)({
							kind: d.b.SuccessCommunity,
							text: s.fbt._("Changes saved", null, {
								hk: "UBoVR"
							})
						}))
					}(t)) : function(e) {
						e(Object(a.f)({
							kind: d.b.Error,
							text: s.fbt._("We had some issues saving your changes. Please try again.", null, {
								hk: "1OvQi6"
							})
						}))
					}(t)
				};

			function O(e, t) {
				e(g({
					isEnabled: t.isEnabled,
					messageType: t.messageType
				}))
			}
		},
		"./src/reddit/actions/notifications/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./src/lib/notifications/index.ts"),
				r = n("./src/lib/notifications/constants.ts"),
				o = n("./src/lib/notifications/featureFlags.ts"),
				a = n("./src/reddit/featureFlags/index.ts"),
				i = n("./src/reddit/helpers/localStorage/index.ts");
			const c = e => a.d.pushNotificationsBrowserSupported(e) ? Object(o.a)() : r.c.BrowserUnsupported,
				d = e => {
					switch (e) {
						case r.a.Denied:
							i.kb(!1), Object(s.c)();
							break;
						case r.a.Default:
						case r.a.Granted:
							i.kb(!0), Object(s.c)();
							break;
						case r.a.Closed:
							i.kb(!0)
					}
				}
		},
		"./src/reddit/actions/notificationsInbox/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return M
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "b", (function() {
				return B
			})), n.d(t, "i", (function() {
				return U
			})), n.d(t, "f", (function() {
				return G
			})), n.d(t, "c", (function() {
				return H
			})), n.d(t, "a", (function() {
				return W
			})), n.d(t, "h", (function() {
				return V
			})), n.d(t, "j", (function() {
				return K
			})), n.d(t, "g", (function() {
				return Q
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				a = (n("./src/reddit/actions/notificationSettingsLayout/index.ts"), n("./src/reddit/actions/notificationsInbox/constants.ts")),
				i = n("./src/reddit/actions/tabBadging.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				l = n("./src/redditGQL/operations/BlockAwarder.json");
			var u = (e, t) => Object(d.a)(e, {
					...l,
					variables: t
				}),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/redditGQL/operations/NotificationInboxFeed.json"),
				f = n("./src/redditGQL/operations/NotificationInboxFeedSlimmed.json"),
				g = n("./src/reddit/constants/headers.ts"),
				C = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var O;
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(O || (O = {}));
			var v = n("./src/redditGQL/operations/DeleteInboxNotifications.json");
			n("./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts");
			var x = n("./src/redditGQL/operations/UpdateInboxActivitySeenState.json");
			var y = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				E = n("./src/reddit/helpers/trackers/inbox.ts"),
				j = n("./src/reddit/models/Badge/index.ts"),
				_ = n("./src/reddit/models/NotificationInbox/index.ts"),
				S = n("./src/reddit/models/Toast/index.ts"),
				k = n("./src/reddit/selectors/appBadges.ts"),
				P = (n("./src/reddit/selectors/notificationPrefs.ts"), n("./src/reddit/selectors/notificationsInbox.tsx"));
			const w = Object(r.a)(a.e),
				N = Object(r.a)(a.b),
				I = Object(r.a)(a.a),
				M = e => async (t, n, {
					gqlContext: s
				}) => {
					var r, o;
					const a = n(),
						i = Object(P.a)(a);
					t(w());
					const l = await ((e, t) => Object(d.a)(e, {
						...h,
						variables: t
					}))(s(), e);
					if (null === (o = null === (r = l.error) || void 0 === r ? void 0 : r.fields) || void 0 === o ? void 0 : o.length) return t(I({
						error: l.error
					})), void t(Object(c.d)());
					const u = l && l.body,
						m = R(u);
					if (null === i) {
						const e = Object(P.f)(a);
						t(A(m.nodes, e.length))
					}
					t(N(m))
				}, T = () => async (e, t, {
					gqlContext: n
				}) => {
					var s, r;
					const o = await (e => Object(d.a)(e, {
						...f
					}))(n());
					if (null === (r = null === (s = o.error) || void 0 === s ? void 0 : s.fields) || void 0 === r ? void 0 : r.length) return;
					const a = o && o.body,
						i = L(a).nodes.filter(e => !e.viewedAt);
					i.length && i.forEach(e => {
						var n;
						Object(E.n)({
							id: e.id,
							isClicked: !1,
							isViewed: Boolean(e.viewedAt),
							type: null === (n = e.context) || void 0 === n ? void 0 : n.messageType
						})(t())
					})
				}, R = e => {
					const t = e && e.data,
						n = t && t.notificationInbox,
						s = n && n.elements,
						r = s && s.pageInfo;
					return {
						nodes: (s && s.edges).map(e => e.node),
						pageInfo: r
					}
				}, L = e => {
					var t, n;
					return {
						nodes: null === (n = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.notificationInbox) || void 0 === n ? void 0 : n.elements.edges.map(e => e.node)
					}
				}, A = (e, t) => async (n, s) => {
					const r = s(),
						o = Object(P.a)(r),
						a = ((e, t) => {
							let n, s = 0;
							const r = new Date,
								o = r.getDate(),
								a = r.getMonth(),
								i = r.getFullYear();
							for (; s < e.length && !n;) {
								const r = e[s],
									c = new Date(r.sentAt),
									d = c.getDate(),
									l = c.getMonth(),
									u = c.getFullYear();
								if ((d !== o || l !== a || u !== i) && !n) {
									n = ((t || 0) + s).toString()
								} else s++
							}
							return n
						})(e, t);
					a && a !== o && n(F({
						index: a
					}))
				}, F = Object(r.a)(a.g), D = (Object(r.a)(a.h), Object(r.a)(a.f)), B = e => async (t, n, {
					gqlContext: r
				}) => {
					const o = [e];
					if ((await ((e, t) => Object(d.a)(e, {
							...v,
							variables: {
								input: t
							}
						}))(r(), {
							notificationIds: o
						})).ok) {
						t(D({
							id: e
						}));
						const r = Object(P.f)(n());
						t(A(r)), t(Object(c.f)(Object(c.e)(s.fbt._("Notification hidden", null, {
							hk: "1jfPqO"
						}), S.b.SuccessCommunityGreen)))
					} else t(Object(c.f)(Object(c.e)(s.fbt._("Failed to hide notification, please try again.", null, {
						hk: "fL7uB"
					}), S.b.Error)))
				}, U = (e, t) => async (n, r, {
					gqlContext: o
				}) => {
					if (!e) return;
					(await Object(y.b)(o(), e, {
						isSubredditUpdatesInterestingPostEnabled: !0,
						isUpdateFromSubredditEnabled: !0
					})).ok ? (t && t(), n(Object(c.f)(Object(c.e)(s.fbt._("Success! Undone hiding notifications from this community.", null, {
						hk: "1na0NP"
					}), S.b.SuccessCommunityGreen)))) : n(Object(c.f)(Object(c.e)(s.fbt._("Failed to undo hiding notifications, please try again.", null, {
						hk: "4jo7Pf"
					}), S.b.Error)))
				}, G = (e, t) => async (n, r, {
					gqlContext: o
				}) => {
					if (!e) return;
					(await Object(y.b)(o(), e, {
						isSubredditUpdatesInterestingPostEnabled: !1,
						isUpdateFromSubredditEnabled: !1
					})).ok ? n((() => {
						const n = s.fbt._("Success! You won't see notifications from this community in the future.", null, {
							hk: "2tkhbk"
						});
						return Object(c.f)(Object(c.e)(n, S.b.Undo, s.fbt._("Undo", null, {
							hk: "4zFGDk"
						}), U(e, t)))
					})()) : n(Object(c.f)(Object(c.e)(s.fbt._("Failed to hide notifications, please try again.", null, {
						hk: "KEGcB"
					}), S.b.Error)))
				}, H = e => async (t, n, {
					apiContext: r
				}) => {
					if (!e) return;
					(await ((e, t) => Object(p.a)(Object(b.a)(e, [g.a]), {
						endpoint: Object(C.a)(`${e.apiUrl}/api/sendreplies`),
						method: m.jb.POST,
						data: {
							id: t
						}
					}))(r(), e)).ok ? t(Object(c.f)(Object(c.e)(s.fbt._("Success! You won't see updates on this in the future", null, {
						hk: "wtDa4"
					}), S.b.SuccessCommunityGreen))) : t(Object(c.f)(Object(c.e)(s.fbt._("Failed to turn off updates on this, please try again", null, {
						hk: "1zhpEy"
					}), S.b.Error)))
				}, W = e => async (t, n, {
					gqlContext: r
				}) => {
					if (!e) return;
					(await u(r(), {
						awardingId: e
					})).ok ? t(Object(c.f)(Object(c.e)(s.fbt._("Success! Awarder has been blocked", null, {
						hk: "2D5PUk"
					}), S.b.SuccessCommunityGreen))) : t(Object(c.f)(Object(c.e)(s.fbt._("Failed to block awarder, please try again", null, {
						hk: "2dxeA8"
					}), S.b.Error)))
				}, q = Object(r.a)(a.d), V = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					let a;
					if (t === _.a.CommentReply || t === _.a.PostReply || t === _.a.PrivateMessage || t === _.a.UsernameMention) {
						if ((a = await ((e, t) => Object(p.a)(Object(b.a)(e, [g.a]), {
								endpoint: Object(C.a)(`${e.apiUrl}/api/read_message`),
								method: m.jb.POST,
								data: {
									id: t
								}
							}))(r(), e)).ok) {
							let e = Object(k.a)(s());
							if (e > 0) {
								e--;
								const t = Object(o.e)({
									count: e,
									key: j.c.ActivityTab
								});
								n(Object(o.a)(t)), n(Object(i.e)())
							}
						}
					} else a = await ((e, t) => Object(p.a)(Object(b.a)(e, [g.a]), {
						endpoint: Object(C.a)(`${e.apiUrl}/api/read_notification`),
						method: m.jb.POST,
						data: {
							id: t
						}
					}))(r(), e);
					if (a.ok) {
						const t = (new Date).toISOString();
						n(q({
							id: e,
							now: t
						}))
					}
				}, K = () => async (e, t, {
					gqlContext: n
				}) => {
					const s = (new Date).toLocaleDateString(),
						r = await ((e, t) => Object(d.a)(e, {
							...x,
							variables: {
								input: t
							}
						}))(n(), {
							lastSentAt: s
						});
					if (r.ok) {
						const t = r.body,
							n = t && t.data && t.data.updateInboxActivitySeenState && t.data.updateInboxActivitySeenState.badgeIndicators;
						n && (e(Object(o.a)(n)), e(Object(i.d)()))
					}
				}, z = Object(r.a)(a.c), Q = () => async (e, t, {
					apiContext: n
				}) => {
					const {
						notificationsInbox: {
							markAllAsReadTimestamp: r
						}
					} = t(), a = new Date;
					if (!r || a.getTime() - new Date(r).getTime() > 15e3) {
						if ((await ((e, t) => Object(p.a)(Object(b.a)(e, [g.a]), {
								endpoint: Object(C.a)(`${e.apiUrl}/api/read_all_messages`),
								method: m.jb.POST,
								data: {
									filter_types: null == t ? void 0 : t.join(",")
								}
							}))(n(), [O.Activity, O.Messages])).ok) {
							const t = Object(o.e)({
									count: 0,
									key: j.c.MessageTab
								}),
								n = Object(o.e)({
									count: 0,
									key: j.c.ActivityTab
								});
							e(Object(o.a)({
								...t,
								...n
							})), e(z({
								now: a.toISOString()
							}))
						} else e(Object(c.f)(Object(c.e)(s.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "VW7c3"
						}), S.b.Error)))
					}
				}
		},
		"./src/reddit/actions/pages/avatar.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle.ts"),
				r = n("./src/reddit/actions/platform.ts"),
				o = n("./src/reddit/actions/users.ts"),
				a = n("./src/reddit/selectors/user.ts"),
				i = n("./src/reddit/actions/login.ts");
			t.a = () => async (e, t) => {
				e(Object(r.m)({
					title: Object(s.a)()
				})), await e(Object(o.t)()), Object(a.J)(t()) || e(Object(i.i)())
			}
		},
		"./src/reddit/actions/pages/econManagement.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/reddit/actions/economics/econManagement/index.ts"),
				o = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/routes/econManagement/index.ts"),
				c = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				await e(Object(a.t)());
				const n = t(),
					d = Object(c.J)(n),
					l = Object(c.G)(n);
				d && l || await e(Object(s.c)("/")), e(Object(o.m)({
					title: "Econ control panel"
				})), await e(Object(r.c)());
				n.platform.currentPage.queryParams[i.b]
			}
		},
		"./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle.ts"),
				r = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				o = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				e(Object(o.m)({
					title: Object(s.d)()
				})), Object(i.J)(t()) || await e(Object(a.t)()), await e(Object(r.b)()).then(() => {
					if (t().economics.me.data) return e(Object(r.a)())
				})
			}
		},
		"./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/makeListingKey/index.ts"),
				r = n("./src/reddit/actions/economics/helpers/async.ts"),
				o = n("./src/reddit/actions/pages/subreddit.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/subreddit.ts"),
				c = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				const n = t().platform.currentPage;
				if (n && n.routeMatch && n.routeMatch.match) {
					const d = (n.routeMatch.match.params || {}).subredditName;
					if (d) {
						const n = [],
							l = t();
						Object(c.J)(l) || n.push(e(Object(a.t)()));
						const u = Object(s.a)(d, null);
						n.push(e(Object(o.subredditDataRequested)(u, d, {}))), await Promise.all(n);
						const m = Object(i.C)(t(), d);
						await e(Object(r.a)({
							subredditId: m,
							skip: ["badges", "tips", "wallets"]
						}))
					}
				}
			}
		},
		"./src/reddit/actions/pages/powerups.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle.ts"),
				r = n("./src/reddit/actions/gold/powerups.ts"),
				o = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/subreddit.ts"),
				i = n("./src/reddit/actions/subscription/index.ts"),
				c = n("./src/reddit/actions/users.ts"),
				d = n("./src/reddit/selectors/gold/powerups/modSignup.ts"),
				l = n("./src/reddit/selectors/moderatorPermissions.ts"),
				u = n("./src/reddit/selectors/subscriptions.ts"),
				m = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				const n = t();
				if (e(Object(o.m)({
						title: Object(s.h)()
					})), await e(Object(c.t)()), !Object(m.J)(n)) return;
				await e(Object(a.q)());
				const p = Object(d.b)(n),
					b = Object(l.a)(n);
				if (p) return await e(Object(r.d)(b));
				await e(Object(i.e)()), await e(Object(r.o)());
				const h = Object(u.c)(n);
				if (h && h.length) {
					const t = h.map(e => e.id);
					await e(Object(r.d)(t))
				}
			}
		},
		"./src/reddit/actions/pages/predictions.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle.ts"),
				r = n("./src/reddit/actions/platform.ts"),
				o = n("./src/reddit/actions/subreddit.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				e(Object(r.m)({
					title: Object(s.i)()
				})), await e(Object(a.t)()), Object(i.J)(t()) && await e(Object(o.q)())
			}
		},
		"./src/reddit/actions/pages/talk.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle.ts"),
				r = n("./src/reddit/actions/platform.ts");
			t.a = () => async e => {
				e(Object(r.m)({
					title: Object(s.o)()
				}))
			}
		},
		"./src/reddit/actions/pages/wrappedReddit.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle.ts"),
				r = n("./src/reddit/actions/platform.ts");
			t.a = () => async e => {
				e(Object(r.m)({
					title: Object(s.p)()
				}))
			}
		},
		"./src/reddit/actions/postCreation/editorContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "c", (function() {
				return g
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/endpoints/post/convert.ts"),
				i = n("./src/reddit/helpers/localStorage/index.ts"),
				c = n("./src/reddit/helpers/trackers/postComposer.ts"),
				d = n("./src/reddit/models/PostCreationForm/index.ts"),
				l = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(r.a)(m.G),
				b = Object(r.a)(m.p),
				h = Object(r.a)(m.Q),
				f = (e, t, n) => async (r, i, {
					apiContext: f
				}) => {
					c.j(i(), t);
					const C = t === d.i.MARKDOWN,
						O = t === d.i.RICH_TEXT,
						v = m.k;
					if (C && Object(l.G)(n)) return r(h({
						editorKey: e,
						editorMode: d.i.MARKDOWN,
						content: ""
					})), void r(g(t));
					if (O && !n) return r(h({
						editorKey: e,
						editorMode: d.i.RICH_TEXT,
						content: l.i
					})), void r(g(t));
					r(p(v));
					const x = await Object(a.a)(f(), t, C ? JSON.stringify(n) : n);
					x.ok ? (r(b(v)), r(h({
						editorKey: e,
						editorMode: t,
						content: x.body.output
					})), r(g(t))) : (r(b(v)), r(Object(o.f)({
						duration: o.a,
						kind: u.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, g = e => async (t, n) => {
					const r = Object(i.l)();
					if (r >= 3) return;
					const a = n().user.prefs.useMarkdown ? d.i.MARKDOWN : d.i.RICH_TEXT;
					if (e === a) return;
					const c = e === d.i.MARKDOWN ? s.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : s.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(o.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: s.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: u.b.SuccessCommunity,
						text: c
					})), Object(i.pb)(r + 1)
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				o = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const a = Object(s.a)(o.r),
				i = Object(s.a)(o.F),
				c = e => async (t, n, {
					apiContext: s
				}) => {
					const o = await Object(r.a)(s(), e);
					o && o.ok ? t(a({
						streamId: e,
						level: o.body.data.auto_mute_status.level
					})) : t(i(e))
				}
		},
		"./src/reddit/actions/shortcuts/close.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/reddit/actions/comment/authoring.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/constants/shortcuts.ts"),
				c = n("./src/reddit/helpers/trackers/lightbox.ts"),
				d = n("./src/reddit/helpers/trackers/shortcuts.ts"),
				l = n("./src/reddit/selectors/activeModal.ts"),
				u = n("./src/reddit/selectors/gild.ts"),
				m = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				p = n("./src/reddit/actions/shortcuts/utils.ts");
			const b = [m.u, m.o, e => !!Object(u.d)(e)],
				h = (e, t) => async (n, u, {
					apiContext: m
				}) => {
					const h = u();
					for (const e of b)
						if (e(h)) return;
					const f = document.activeElement,
						g = h.shortcuts.activeCommentId,
						C = Object(p.c)(h);
					if (f && "true" === f.contentEditable && g && C) n(r.a({
						parentCommentId: g,
						commentsPageKey: C
					})), Object(p.a)(g);
					else if (Object(l.b)(h)) Object(p.b)(i.b), n(Object(o.i)(Object(l.b)(h)));
					else if (h.toaster[0]) Object(p.b)(i.b), n(Object(a.g)(h.toaster[0].id));
					else if (h.shortcuts.namespace === i.d.Lightbox && h.platform.currentPage) {
						const e = h.platform.currentPage.locationState.closeLocation;
						e && (Object(p.b)(i.b), n(Object(s.b)(e)))
					}
					const {
						activePostId: O
					} = h.shortcuts;
					e(t && O ? c.b(O, "close", !0) : d.a)
				}
		},
		"./src/reddit/actions/userFlair/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return r
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			}));
			var s = n("./src/lib/loadableAction/index.ts");
			const r = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairChanged)),
				o = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleUserFlairInSubreddit)),
				a = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleAssignOwnFlairPermission)),
				i = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.saveUserFlairTemplate)),
				c = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.deleteUserFlairTemplate)),
				d = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.reorderUserFlairTemplates)),
				l = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairLoadedAndModalOpened))
		},
		"./src/reddit/components/AccountManagerModal/IFrame/index.m.less": function(e, t, n) {
			e.exports = {
				IFrame: "_25r3t_lrPF3M6zD2YkWvZU",
				iFrame: "_25r3t_lrPF3M6zD2YkWvZU",
				CloseButton: "_1ryinm9ofYAx_k9dpdCbpq",
				closeButton: "_1ryinm9ofYAx_k9dpdCbpq",
				Close: "_14dkERGUnSwisNWFcFX-0T",
				close: "_14dkERGUnSwisNWFcFX-0T"
			}
		},
		"./src/reddit/components/AccountManagerModal/IFrame/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/addQueryParams/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/lib/makeActionCreator/index.ts"),
				b = n("./src/reddit/actions/sso/constants.ts");
			const h = Object(p.a)(b.a),
				f = Object(p.a)(b.b);
			var g = n("./src/reddit/actions/survey/index.ts"),
				C = n("./src/reddit/actions/toaster.ts"),
				O = n("./src/reddit/components/TrackingHelper/index.tsx"),
				v = n("./src/reddit/constants/accountManager.ts"),
				x = n("./src/reddit/constants/history.ts"),
				y = n("./src/reddit/constants/modals.ts"),
				E = n("./src/reddit/constants/parameters.ts"),
				j = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				_ = n("./src/reddit/helpers/history/index.ts"),
				S = n("./src/reddit/helpers/trackers/blockingInterstitial.ts"),
				k = n("./src/reddit/helpers/trackers/moreReplies.ts"),
				P = n("./src/reddit/helpers/trackers/onboarding.ts"),
				w = n("./src/reddit/icons/svgs/Close/index.tsx"),
				N = n("./src/reddit/models/Sso/index.ts"),
				I = n("./src/reddit/models/Toast/index.ts"),
				M = n("./src/reddit/selectors/accountManager.ts"),
				T = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				R = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				L = n("./src/reddit/selectors/experiments/moreRepliesSignup.ts"),
				A = n("./src/reddit/selectors/experiments/survey.ts"),
				F = n("./src/reddit/selectors/telemetry.ts"),
				D = n("./src/reddit/selectors/user.ts"),
				B = n("./src/reddit/components/AccountManagerModal/IFrame/index.m.less"),
				U = n.n(B);
			const G = l.a.iframe("IFrame", U.a),
				H = l.a.button("CloseButton", U.a),
				W = l.a.wrapped(w.a, "Close", U.a),
				q = Object(c.c)({
					accountManagerSrc: M.c,
					actionSource: M.a,
					frontpageSignupVariant: T.a,
					isBlockingInterstitialEnabled: R.b,
					isDismissSurveyEnabled: A.a,
					isHardBlockingInterstitialEnabled: R.c,
					isLoggedIn: D.J,
					isMoreRepliesSignupEnabled: L.a,
					redirectUrl: M.b
				}),
				V = Object(i.b)(q, (e, t) => ({
					onDismissSignupTrigger: () => e(Object(g.d)()),
					oniFrameLoaded: (t, n) => {
						e((e, s) => {
							t.contentWindow.postMessage({
								events: {
									...Object(F.o)(s()),
									actionSource: n
								},
								type: "eventData"
							}, Object(j.a)())
						})
					},
					onTwoFactorChanged: () => e(Object(m.z)(!1)),
					onSSOLinkSuccess: (t, n, s) => {
						e(h({
							linkedIdentity: n
						})), e(Object(u.g)(s)), e(Object(C.f)(Object(C.e)(t, I.b.SuccessCommunity)))
					},
					onSSOUnlinkSuccess: (t, n, s) => {
						e(f({
							linkedIdentity: n
						})), e(Object(u.g)(s)), e(Object(C.f)(Object(C.e)(t, I.b.SuccessCommunity)))
					},
					showToast: (t, n) => {
						e(Object(C.f)(Object(C.e)(t, n)))
					}
				})),
				K = ({
					data: e,
					origin: t
				}) => e && e.success && (e.type === v.a.ChangePassword || e.type === v.a.Close || e.type === v.a.CreateAccount || e.type === v.a.GoogleOneTapDisplayed || e.type === v.a.GoogleOneTapFlowFailed || e.type === v.a.GoogleOneTapSkipped || e.type === v.a.Login || e.type === v.a.PreferenceStatus || e.type === v.a.Register || e.type === v.a.Resize || e.type === v.a.ShowStep || e.type === v.a.SSOLinkFail || e.type === v.a.SSOLinkSuccess || e.type === v.a.SSOUnlinkFail || e.type === v.a.SSOUnlinkSuccess || e.type === v.a.Subscribe || e.type === v.a.TwoFactorChanged) && t === s.a.accountManagerOrigin,
				z = {
					"select-account": "link_account",
					"confirm-otp": "link_account_otp",
					"confirm-password": "link_account_password"
				};
			class Q extends a.a.Component {
				constructor() {
					super(...arguments), this.iframeRef = a.a.createRef(), this.isAccountCreated = !1, this.isSignupModalDismissed = !1, this.isSignupModalSuccessful = !1, this.trackResizing = !0, this.currentStep = null, this.state = {
						iframeStyles: {}
					}, this.focusFirstVisibleIframeInput = () => {
						try {
							if (!this.iframeRef.current) return;
							const e = this.iframeRef.current.contentWindow ? this.iframeRef.current.contentWindow.document : this.iframeRef.current.contentDocument;
							if (!e) return;
							const t = e.querySelector('input:not([type="hidden"])');
							t && t.focus()
						} catch (e) {}
					}, this.handleLinkSSOSuccess = e => {
						const t = e === N.a.Apple ? y.a.LINK_APPLE_SSO : y.a.LINK_GOOGLE_SSO;
						this.props.onSSOLinkSuccess(r.fbt._("Account connected", null, {
							hk: "2X2Y2n"
						}), e, t)
					}, this.handleUnlinkSSOSuccess = e => {
						const t = e === N.a.Apple ? y.a.UNLINK_APPLE_SSO : y.a.UNLINK_GOOGLE_SSO;
						this.props.onSSOUnlinkSuccess(r.fbt._("Account disconnected", null, {
							hk: "mUOBy"
						}), e, t)
					}, this.setIframeStyles = e => {
						this.setState(t => ({
							iframeStyles: {
								...t.iframeStyles,
								...e
							}
						}))
					}, this.onMessage = e => {
						const {
							data: t
						} = e;
						if (this.iframeRef.current && e.source === this.iframeRef.current.contentWindow && K(e))
							if (t.type === v.a.CreateAccount) this.isAccountCreated = !0;
							else if (t.type === v.a.Close) this.closedByUser();
						else if (t.type === v.a.Subscribe) this.onSubscribe(t.subscriptions || t.subredditIds);
						else if (t.type === v.a.Login) this.onLogIn();
						else if (t.type === v.a.ChangePassword) this.onChangePassword();
						else if (t.type === v.a.Resize) {
							if (t.payload && this.trackResizing) {
								const e = t.payload;
								e.height && e.width && this.setIframeStyles(e)
							}
						} else if (t.type === v.a.TwoFactorChanged) this.props.onTwoFactorChanged();
						else if (t.type === v.a.SSOLinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === v.a.SSOLinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleLinkSSOSuccess(e)
						} else if (t.type === v.a.SSOUnlinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === v.a.SSOUnlinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleUnlinkSSOSuccess(e)
						} else t.type === v.a.GoogleOneTapDisplayed ? this.props.isLoggedIn || (this.setIframeStyles({
							visibility: "visible"
						}), this.onGoogleOneTapUIViewed()) : t.type === v.a.GoogleOneTapFlowFailed ? this.props.isLoggedIn || this.onGoogleOneTapFlowFailed(t.message) : t.type === v.a.GoogleOneTapSkipped ? this.props.isLoggedIn || (this.props.onGoogleOneTapSkipped && this.props.onGoogleOneTapSkipped(t.reason), this.close()) : t.type === v.a.ShowStep ? this.onShowStep(t.step) : t.type === v.a.PreferenceStatus ? this.onEmailDigestsStatus(t.successfullySet) : this.onSignUp(t.numberSubredditsSelected, t.subredditIds)
					}, this.onSubscribe = e => {
						this.props.onSubscriptionsChanged && this.props.onSubscriptionsChanged(e || [])
					}, this.onLogIn = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : (Object(_.a)(x.b.JustLoggedIn, !0), window.location.reload())
					}, this.onChangePassword = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : window.location.reload()
					}, this.onSignUp = (e, t) => {
						const {
							redirectUrl: n
						} = this.props;
						let s = "";
						s = n || window.location.href, this.isSignupSurveyTriggerSource() && (this.isSignupModalSuccessful = !0), this.redirectTo(s, !0)
					}, this.onShowStep = e => {
						this.currentStep = e, e === v.b.Subscribe && (this.trackResizing = !1, this.setIframeStyles({
							height: void 0,
							width: void 0
						})), this.props.onShowScreen && this.props.onShowScreen(e)
					}, this.onGoogleOneTapFlowFailed = e => {
						this.close(), this.props.showToast(e || r.fbt._("Something went wrong. Please try again later", null, {
							hk: "3TdJZE"
						}), I.b.Error)
					}, this.onEmailDigestsStatus = e => {
						e ? this.props.showToast(r.fbt._("Changes saved", null, {
							hk: "6bifV"
						}), I.b.SuccessCommunity) : this.props.showToast(r.fbt._("Something went wrong. Please try again later", null, {
							hk: "1M3Z2N"
						}), I.b.Error)
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.onGoogleOneTapUIViewed && this.props.onGoogleOneTapUIViewed()
					}, this.redirectTo = (e, t = !1) => {
						const n = {
							[E.p]: "true"
						};
						t && (n[E.v] = "true"), this.isSignupModalSuccessful && (n[E.w] = "true"), window.location.replace(Object(d.a)(e, n))
					}, this.closedByUser = () => {
						const {
							isBlockingInterstitialEnabled: e,
							isDismissSurveyEnabled: t,
							isMoreRepliesSignupEnabled: n,
							onDismissSignupTrigger: s,
							sendEvent: r
						} = this.props;
						if (this.currentStep) {
							const e = z[this.currentStep];
							e && r(Object(P.p)(e))
						}
						this.isSignupSurveyTriggerSource() && (this.isSignupModalDismissed = !0), n && r(Object(k.b)()), e && r(Object(S.a)()), this.close(), this.isSignupModalDismissed && t && s()
					}, this.close = () => {
						this.props.onClose && this.props.onClose();
						try {
							sessionStorage.removeItem("data"), sessionStorage.removeItem("initialData")
						} catch (e) {}
						this.isAccountCreated && this.onSignUp()
					}, this.isLoaded = !1, this.onIFrameLoad = e => {
						this.currentStep = null, this.isLoaded ? (this.trackResizing = !1, this.setIframeStyles({
							height: void 0,
							width: void 0
						}), this.props.onChange && this.props.onChange()) : this.isLoaded = !0
					}, this.isSignupSurveyTriggerSource = () => {
						const {
							actionSource: e
						} = this.props;
						return e && u.l.includes(e)
					}
				}
				componentDidMount() {
					const {
						actionSource: e,
						exposeIFrameElement: t,
						oniFrameLoaded: n,
						setRef: s
					} = this.props;
					this.iframeRef.current && (this.iframeRef.current.onload = () => {
						n(this.iframeRef.current, e), this.focusFirstVisibleIframeInput()
					}, s && s(this.iframeRef), t && t(this.iframeRef.current)), window.addEventListener("message", this.onMessage)
				}
				componentDidUpdate(e) {
					this.props.path !== e.path && e.path === v.c.GoogleOneTap && this.iframeRef.current && this.setIframeStyles({
						height: void 0,
						visibility: void 0,
						width: void 0
					})
				}
				componentWillUnmount() {
					window.removeEventListener("message", this.onMessage)
				}
				render() {
					const {
						accountManagerSrc: e,
						actionSource: t,
						className: n,
						isHardBlockingInterstitialEnabled: s,
						path: r
					} = this.props, {
						iframeStyles: o
					} = this.state, i = (r === v.c.Index || r === v.c.Register) && (t === u.a.UserProfile || t === u.a.FeedPost || t === u.a.Comments || t === u.a.FeedScroll || t === u.a.CommentsScroll) && s, c = this.props.showCloseButton && !i;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(G, {
						className: n,
						innerRef: this.iframeRef,
						src: e,
						style: o,
						onLoad: this.onIFrameLoad
					}), c && a.a.createElement(H, {
						onClick: this.closedByUser
					}, a.a.createElement(W, null)))
				}
			}
			t.a = V(Object(O.c)(Q))
		},
		"./src/reddit/components/AccountManagerModal/index.m.less": function(e, t, n) {
			e.exports = {
				Overlay: "_1UtFUrE2ijAe5ba5uPgcfQ",
				overlay: "_1UtFUrE2ijAe5ba5uPgcfQ",
				IframeContainer: "_34uo64r1j-TcpBGXAQcZJ1",
				iframeContainer: "_34uo64r1j-TcpBGXAQcZJ1",
				small: "FBb4FZ4ng7CvLYrT6LBdp",
				ssoConfirmPassword: "_3CQoZKhSqrJrbOGJxp03DS",
				mResponsive: "_2CwLGmlfoqlHFJcOwm0RS-",
				linkActionSSOFail: "_1ALB_4jSDt6vPeELvg9lKL",
				linkActionSsoFail: "_1ALB_4jSDt6vPeELvg9lKL",
				mGoogleOneTap: "_15Lh8Q9iPGbXdxumHm8cT9",
				mHiddenOverlay: "_233XfOVq91N_ugGQDBb_OT"
			}
		},
		"./src/reddit/components/AlertBanner/Wrapper.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "GfthJQJvWCHdUoMi6YjYa",
				wrapper: "GfthJQJvWCHdUoMi6YjYa"
			}
		},
		"./src/reddit/components/AlertBanner/heights.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = (e, t) => ({
					[e.showDeprecated]: !(!t.browserInfo || !t.browserInfo.isDeprecated),
					[e.showFPR]: !!t.showFPR,
					[e.showSuspended]: !!t.showSuspended,
					[e.offline]: !!t.showOffline,
					[e.navExperiment]: !!t.navExperiment
				}),
				r = (e, t) => ({
					[e.showEmailCollectionBanner]: !!t.showEmailCollectionBanner
				})
		},
		"./src/reddit/components/AlertBanner/index.m.less": function(e, t, n) {
			e.exports = {
				underlineButton: "_1uQwMnfXrOfzkL_CFxH6fd",
				underlineLink: "vOGtEDdh1mVbkqinhg3Ov",
				wrapper: "_3el1HrJryfAxBUzu4HsIhE",
				deprecated: "_2s1xq3Ji1Oj7oZtdSqWznV",
				fpr: "_36j6vvbAY0wIrxbyXuNQhn",
				suspended: "_1ivoPEQV9lryC0mH-f_uGY",
				closeButton: "_1oAzKCYwbVOQ-AbuRZfMg2",
				closeIcon: "_6aklZuhHMm1XJcsi8dEeP"
			}
		},
		"./src/reddit/components/AppRouter/index.m.less": function(e, t, n) {
			e.exports = {
				header: "cx1ohrUAq6ARaXTX2u8YN",
				showDeprecated: "_378Md-M6pOqwzEiV3lAwYk",
				showFPR: "_2P-zXcOfggYIWnL3EfXUHP",
				showFpr: "_2P-zXcOfggYIWnL3EfXUHP",
				showSuspended: "_3o7sV2ySJ76-f1ktwzclmi",
				offline: "_1OVuPhC0s89CZodD5qWMWP",
				navExperiment: "_32g3BKfzA1V3Y0eaczZbYl",
				inline: "_2aHCVoJEFfwy05xpKqUif2",
				overlayContentWrapper: "_2DJXORCrmcNpPTSq0LqL6i",
				mIsCommentsLightbox: "_26pbaCw90eAC80WRqUfICJ",
				mIsLargeCommentsLightbox: "_2zCdbqYzIDmabv-Dk_ILKk",
				overlayWrapper: "_2mIbM_6nl-2OnOGEbEMRXa",
				main: "_1nxEQl5D2Bx2jxDILRHemb",
				mShowingPaddedPinnedDescriptions: "_3x1dyL19KnZ4kI6i9TlRp4",
				pinnedSubscriptions: "zoWOQnp55WuhEugRSwfw1",
				withUpsell: "_1kFzDy0hQVq-CvguZsCcmV",
				lightboxHeaderWrapper: "_3obgdFz00GvpqpuX8QCsNK",
				lightboxHeaderWrapperExp: "_1k5guql3KcBJzH7i7UCr7Y",
				bottomAdContainer: "_2SL_DAWw1V6pxZysgrdeBe",
				sidebarFooter: "_2AJ0ZwpZtFJ10GdcU0CUew",
				sidebarFooterWithAd: "_1ht98h5gXjzYhFyRZgB0Pv",
				bottomSpacer: "_14-8KVF3BKuTNsLNWcOG2X",
				showEmailCollectionBanner: "_25N7Qd1z8aRQYtQhjEFyTC",
				overlayScrollContainer: "_29IbETWb5VVDcfk_-GumWz",
				mediaIsFullscreen: "_34Bl1Of1839ZWJXR8IY0Ym",
				popupContainer: "_13Vg6OZEIy5AcJ_DOw6jK0",
				offlineBanner: "_1C1Dn0NhEGQkEA9tDGKKSH"
			}
		},
		"./src/reddit/components/AppRouter/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return zm
			}));
			var s, r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/isEqual.js"),
				a = n.n(o),
				i = n("./node_modules/lodash/omit.js"),
				c = n.n(i),
				d = n("./node_modules/lodash/throttle.js"),
				l = n.n(d),
				u = n("./node_modules/react/index.js"),
				m = n.n(u),
				p = n("./node_modules/react-redux/es/index.js"),
				b = n("./node_modules/react-router/esm/react-router.js"),
				h = n("./node_modules/react-router-redux/es/index.js"),
				f = n("./src/reddit/contexts/NavbarExp.ts"),
				g = n("./node_modules/reselect/es/index.js"),
				C = n("./src/lib/classNames/index.ts"),
				O = n("./src/lib/constants/index.ts"),
				v = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				x = n("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				y = n("./src/lib/fastdom/index.ts"),
				E = n("./src/lib/FocusTrap/index.ts"),
				j = n("./src/lib/isEqualWithoutKey/index.ts"),
				_ = n("./src/lib/isSimpleClick/index.ts"),
				S = n("./src/reddit/actions/header.ts"),
				k = n("./src/reddit/actions/survey/index.ts"),
				P = n("./src/reddit/components/EmailCollection/Banner/Loader.ts"),
				w = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				N = n("./node_modules/polished/dist/polished.es.js"),
				I = n("./node_modules/react-motion/lib/react-motion.js"),
				M = n("./src/lib/lessComponent.tsx"),
				T = n("./src/reddit/components/AccountManagerModal/IFrame/index.tsx"),
				R = n("./src/reddit/components/TrackingHelper/index.tsx"),
				L = n("./src/reddit/constants/accountManager.ts"),
				A = n("./src/reddit/helpers/trackers/onboarding.ts"),
				F = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				D = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				B = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				U = n("./src/config.ts"),
				G = n("./src/reddit/components/Carousel/index.m.less"),
				H = n.n(G);
			! function(e) {
				e.Fade = "fade", e.Slide = "slide"
			}(s || (s = {}));
			class W extends m.a.Component {
				constructor(e) {
					super(e), this.timeoutNumber = null, this.handleNextPage = () => {
						this.props.animationType === s.Fade ? this.handleNextFadePage() : this.handleNextSlidePage(), this.setPageInterval()
					}, this.handleNextFadePage = () => {
						this.setState((e, t) => ({
							...e,
							pageNumber: (e.pageNumber + 1) % t.items.length
						}))
					}, this.handleNextSlidePage = () => {
						this.setState((e, t) => {
							const n = 10 * t.items.length;
							return {
								...e,
								pageNumber: (e.pageNumber + 1) % n,
								items: e.pageNumber === n - 1 ? t.items : e.pageNumber === e.items.length - 1 ? e.items.concat(t.items) : e.items
							}
						})
					}, this.clearPageInterval = () => {
						this.timeoutNumber && window.clearTimeout(this.timeoutNumber)
					}, this.setPageInterval = (e = 0) => {
						this.clearPageInterval(), this.timeoutNumber = window.setTimeout(this.handleNextPage, this.props.itemTime + e)
					}, this.handleItemClick = () => {
						this.clearPageInterval(), this.handleNextPage()
					}, this.renderItemExtra = ({
						img: e,
						style: t
					}) => m.a.createElement("img", {
						key: e,
						src: `${U.a.assetPath}/${e}`,
						style: t
					}), this.renderItem = (e, t) => {
						const {
							animationType: n,
							itemWidth: r,
							shouldHandleMouseClicks: o
						} = this.props, {
							pageNumber: a
						} = this.state, i = n === s.Fade ? {
							opacity: t === a ? 1 : 0
						} : {
							marginLeft: 0 === t ? -r * a : void 0
						};
						return m.a.createElement("div", {
							className: Object(C.a)(H.a.item, H.a[n]),
							key: `item-${t}`,
							style: {
								...i,
								backgroundImage: `url("${U.a.assetPath}/${e.img}")`,
								width: r
							},
							onClick: o ? this.handleItemClick : void 0
						}, e.extra && e.extra.map(this.renderItemExtra))
					}, this.renderIndicator = (e, t) => m.a.createElement("div", {
						className: Object(C.a)(H.a.indicator, {
							[H.a.indicatorSelected]: this.state.pageNumber % this.props.items.length === t
						}),
						key: t
					}), this.state = {
						items: e.items,
						pageNumber: 0
					}
				}
				componentDidMount() {
					this.setPageInterval(this.props.delay)
				}
				componentWillUnmount() {
					this.clearPageInterval()
				}
				render() {
					const {
						className: e,
						shouldShowIndicators: t,
						items: n
					} = this.props;
					return m.a.createElement("div", {
						className: Object(C.a)(e, H.a.container)
					}, m.a.createElement("article", {
						className: H.a.items
					}, this.state.items.map(this.renderItem)), t && m.a.createElement("footer", {
						className: H.a.indicators
					}, n.map(this.renderIndicator)))
				}
			}
			var q = n("./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less"),
				V = n.n(q);
			const K = M.a.div("Container", V.a),
				z = M.a.wrapped(W, "Carousel", V.a),
				Q = M.a.div("Phone", V.a),
				J = M.a.img("Frame", V.a),
				Z = `${U.a.assetPath}/img/frontpage-signup/android-frame.png`,
				Y = `${U.a.assetPath}/img/frontpage-signup/iphone-frame.png`,
				X = [{
					img: "img/frontpage-signup/android-1.png"
				}, {
					img: "img/frontpage-signup/android-2.png"
				}, {
					img: "img/frontpage-signup/android-3.png"
				}, {
					img: "img/frontpage-signup/android-4.png"
				}],
				$ = [{
					img: "img/frontpage-signup/iphone-1.png"
				}, {
					img: "img/frontpage-signup/iphone-2.png"
				}, {
					img: "img/frontpage-signup/iphone-3.png"
				}, {
					img: "img/frontpage-signup/iphone-4.png"
				}];
			var ee = e => {
					const {
						className: t
					} = e;
					return m.a.createElement(K, {
						className: t
					}, m.a.createElement(Q, {
						className: V.a.android
					}, m.a.createElement(z, {
						animationType: s.Fade,
						className: V.a.android,
						delay: 2500,
						items: X,
						itemTime: 5e3,
						itemWidth: 240
					}), m.a.createElement(J, {
						src: Z
					})), m.a.createElement(Q, {
						className: V.a.iphone
					}, m.a.createElement(z, {
						animationType: s.Fade,
						className: V.a.iphone,
						items: $,
						itemTime: 5e3,
						itemWidth: 232
					}), m.a.createElement(J, {
						src: Y
					})))
				},
				te = n("./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less"),
				ne = n.n(te);
			const se = M.a.div("Container", ne.a),
				re = M.a.span("Disclaimer", ne.a),
				oe = M.a.a("Link", ne.a);
			var ae = e => m.a.createElement(se, {
					className: e.className
				}, m.a.createElement(oe, {
					href: "https://about.reddit.com"
				}, r.fbt._("about", null, {
					hk: "4n6gdA"
				})), m.a.createElement(oe, {
					href: "https://www.redditinc.com/advertising"
				}, r.fbt._("advertise", null, {
					hk: "3M40BX"
				})), m.a.createElement(oe, {
					href: "http://www.redditblog.com/"
				}, r.fbt._("blog", null, {
					hk: "iEUEu"
				})), m.a.createElement(oe, {
					href: "https://about.reddit.com/careers/"
				}, r.fbt._("careers", null, {
					hk: "1nRiZW"
				})), m.a.createElement(oe, {
					href: "https://www.reddithelp.com"
				}, r.fbt._("help", null, {
					hk: "3CJ8k2"
				})), m.a.createElement(oe, {
					href: "https://about.reddit.com/press/"
				}, r.fbt._("press", null, {
					hk: "x8wb0"
				})), m.a.createElement(oe, {
					href: "https://www.reddit.com/coins"
				}, r.fbt._("Reddit coins", null, {
					hk: "4EwVXk"
				})), m.a.createElement(oe, {
					href: "https://redditgifts.com/"
				}, r.fbt._("Reddit gifts", null, {
					hk: "1XCLXF"
				})), m.a.createElement(oe, {
					href: "https://www.reddit.com/premium"
				}, r.fbt._("Reddit premium", null, {
					hk: "1v1E7F"
				})), m.a.createElement(oe, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, r.fbt._("User agreement", null, {
					hk: "18j1Xy"
				})), m.a.createElement(oe, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, r.fbt._("Mod policy", null, {
					hk: "18VnG9"
				})), m.a.createElement(re, null, r.fbt._("© 2019 Reddit, Inc. All rights reserved", null, {
					hk: "1AMxtg"
				}))),
				ie = n("./src/reddit/components/FrontpageSignup/Upsell/index.m.less"),
				ce = n.n(ie);
			const de = {
					stiffness: 300,
					damping: 40,
					precision: 1
				},
				le = M.a.div("Container", ce.a),
				ue = M.a.wrapped(T.a, "IFrame", ce.a),
				me = M.a.wrapped(ee, "Images", ce.a),
				pe = M.a.wrapped(ae, "Links", ce.a),
				be = M.a.div("MainContent", ce.a),
				he = M.a.div("MainContentColumn", ce.a),
				fe = M.a.button("NotReady", ce.a),
				ge = M.a.span("NotReadyText", ce.a),
				Ce = M.a.wrapped(F.a, "NotReadyIcon", ce.a),
				Oe = Object(v.a)(e => {
					const {
						className: t,
						containerRef: n,
						frontpageSignupVariant: s,
						onCloseClick: o,
						onVisibilityChange: a
					} = e, i = Object(D.a)(e).bodyText;
					return m.a.createElement(w.a, {
						root: "SignupUpsellContainer",
						threshold: .01,
						rootMargin: "0px 0px 0px 0px",
						onChange: a
					}, m.a.createElement(le, {
						className: t,
						innerRef: n
					}, m.a.createElement(be, null, m.a.createElement(he, null, m.a.createElement(me, null, "Images Placeholder")), m.a.createElement(he, null, m.a.createElement(ue, {
						className: Object(C.a)({
							[ce.a.fields]: Object(B.b)(s)
						}),
						path: L.c.Register,
						uiMode: L.d.Embed
					}))), m.a.createElement(fe, {
						onClick: o,
						style: {
							"--frontpagesignup-upsell-text-hover-color": Object(N.i)(.8, i)
						}
					}, m.a.createElement(ge, null, r.fbt._("Not ready to sign up yet?", null, {
						hk: "5RIgO"
					})), m.a.createElement(Ce, null)), m.a.createElement(pe, null)))
				});
			class ve extends m.a.Component {
				componentDidUpdate(e) {
					this.props.scrollTo !== e.scrollTo && window.scrollTo({
						top: this.props.scrollTo
					})
				}
				render() {
					return null
				}
			}
			class xe extends m.a.Component {
				constructor() {
					super(...arguments), this.containerRef = m.a.createRef(), this.state = {
						isClosed: !1
					}, this.closeUpsell = () => {
						"safari" in window ? this.hideUpsell() : (this.setState({
							isClosed: !0
						}), this.props.sendEvent(Object(A.a)()))
					}, this.hideUpsell = () => {
						this.containerRef.current && (this.containerRef.current.style.marginTop = `-${this.containerRef.current.offsetHeight}px`, this.props.onClose())
					}, this.handleUpsellVisibilityChange = e => {
						this.state.isClosed || e.isIntersecting || this.hideUpsell()
					}, this.renderScroller = ({
						scrollTo: e
					}) => m.a.createElement(ve, {
						scrollTo: e
					})
				}
				render() {
					const {
						className: e,
						frontpageSignupVariant: t
					} = this.props, {
						isClosed: n
					} = this.state, s = n && this.containerRef.current ? this.containerRef.current.offsetHeight : 0;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement(Oe, {
						className: e,
						containerRef: this.containerRef,
						frontpageSignupVariant: t,
						onCloseClick: this.closeUpsell,
						onVisibilityChange: this.handleUpsellVisibilityChange
					}), m.a.createElement(I.Motion, {
						defaultStyle: {
							scrollTo: 0
						},
						onRest: this.hideUpsell,
						style: {
							scrollTo: Object(I.spring)(s, de)
						}
					}, this.renderScroller))
				}
			}
			var ye = Object(R.c)(xe),
				Ee = n("./node_modules/js-cookie/src/js.cookie.js"),
				je = n.n(Ee),
				_e = n("./src/lib/localStorageAvailable/index.ts"),
				Se = n("./src/reddit/actions/modal.ts"),
				ke = n("./src/higherOrderComponents/makeAsync.tsx"),
				Pe = Object(ke.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("BadgePurchaseModal").then(n.bind(null, "./src/reddit/components/Badges/PurchaseModal/index.tsx")).then(e => e.default)
				}),
				we = n("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx"),
				Ne = n("./src/higherOrderComponents/asModal/index.tsx"),
				Ie = n("./src/reddit/controls/Button/index.tsx"),
				Me = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Te = n("./src/reddit/selectors/activeModalId.ts"),
				Re = n("./src/reddit/components/DownToChatBanner/DownToChatPendingModal/index.m.less"),
				Le = n.n(Re);
			const {
				fbt: Ae
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Fe = M.a.button("CloseButton", Le.a), De = M.a.wrapped(Me.a, "Close", Le.a), Be = M.a.div("Container", Le.a), Ue = M.a.p("Description", Le.a), Ge = M.a.div("Footer", Le.a), He = M.a.h3("Heading", Le.a), We = M.a.img("SnooImage", Le.a), qe = M.a.div("Wrapper", Le.a), Ve = Object(g.c)({
				activeModalId: Te.a
			});
			class Ke extends m.a.Component {
				constructor() {
					super(...arguments), this.onCloseButtonClick = () => {
						const {
							modalToggled: e,
							activeModalId: t
						} = this.props;
						t && e(t)
					}
				}
				render() {
					return m.a.createElement(qe, null, m.a.createElement(Be, null, m.a.createElement(He, null, Ae._("Ok, looking for people now...", null, {
						hk: "2fr3Y9"
					})), m.a.createElement(Ue, null, Ae._("You’ll be redirected to your chat room shortly.", null, {
						hk: "4tpnrt"
					})), m.a.createElement(We, {
						src: `${U.a.assetPath}/img/magnifying-glass-snoo.png`
					})), m.a.createElement(Ge, null, m.a.createElement(Ie.l, {
						onClick: this.onCloseButtonClick
					}, Ae._("Sounds good", null, {
						hk: "1OMLn5"
					}))), m.a.createElement(Fe, {
						onClick: this.onCloseButtonClick
					}, m.a.createElement(De, null)))
				}
			}
			var ze = Object(p.b)(Ve, e => ({
					modalToggled: t => e(Object(Se.i)(t))
				}))(Object(Ne.a)(Object(R.c)(Ke))),
				Qe = n("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx"),
				Je = n("./src/lib/loadWithRetries/index.ts");
			var Ze = Object(ke.a)({
				getComponent: () => Object(Je.a)(() => n.e("NotificationsPrePromptLoader").then(n.bind(null, "./src/reddit/components/NotificationsPrePrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			const Ye = () => null;
			var Xe = Object(ke.a)({
					ErrorComponent: Ye,
					getComponent: () => Object(Je.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("ModQueue~ModQueuePages~ModerationPages"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"))).then(e => e.default),
					LoadingComponent: Ye
				}),
				$e = n("./src/reddit/actions/structuredStyles/index.ts"),
				et = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				tt = n("./src/reddit/constants/modals.ts"),
				nt = n("./src/reddit/controls/TextButton/index.tsx"),
				st = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: rt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ot = Object(p.b)(null, (e, {
				subredditId: t
			}) => ({
				closeModal: () => {
					e(Object(Se.i)(tt.a.BLADE_NIGHTMODE)), e(Object($e.f)())
				},
				openBlade: () => {
					e(Object($e.e)(t))
				}
			}));
			var at = Object(Ne.a)(ot(e => m.a.createElement(et.e, null, m.a.createElement(et.i, null, m.a.createElement(st.a, null, m.a.createElement(et.q, null, rt._("Turning off Night Mode", null, {
					hk: "2XW7Rk"
				})), m.a.createElement(nt.a, {
					onClick: e.closeModal
				}, m.a.createElement(et.b, null)))), m.a.createElement(et.l, null, m.a.createElement(et.o, null, rt._("In order to continue styling your community, Night Mode must be turned off.", null, {
					hk: "2qLSfr"
				}))), m.a.createElement(et.g, null, m.a.createElement(et.a, {
					onClick: e.closeModal,
					"data-redditstyle": !0
				}, rt._("Cancel", null, {
					hk: "2TSLl5"
				})), m.a.createElement(et.r, {
					onClick: e.openBlade,
					"data-redditstyle": !0
				}, rt._("Continue", null, {
					hk: "413jMZ"
				})))))),
				it = n("./src/reddit/actions/authorFlair.ts"),
				ct = n("./src/reddit/actions/gold/powerups.ts"),
				dt = n("./src/reddit/actions/userFlair/index.ts"),
				lt = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				ut = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				mt = n("./src/reddit/components/FlairPreview/index.tsx"),
				pt = n("./src/reddit/components/FlairSearch/index.tsx"),
				bt = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				ht = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				ft = n("./src/reddit/layout/row/Inline/index.tsx"),
				gt = n("./src/reddit/models/Flair/index.ts"),
				Ct = n("./src/reddit/models/User/index.ts"),
				Ot = n("./src/reddit/selectors/authorFlair.ts"),
				vt = n("./src/reddit/selectors/moderatorPermissions.ts"),
				xt = n("./src/reddit/selectors/telemetry.ts"),
				yt = n("./src/reddit/selectors/user.ts"),
				Et = n("./src/reddit/selectors/userFlair.ts"),
				jt = n("./src/reddit/components/UserFlairPicker/index.m.less"),
				_t = n.n(jt);
			const St = e => e.flairModalContext && e.currentUser && Object(Ct.e)(e.currentUser) === e.flairModalContext.username,
				kt = e => e.authorFlair || St(e) && e.userFlairData.applied || null,
				Pt = M.a.wrapped(ft.a, "Section", _t.a),
				wt = M.a.div("CheckboxText", _t.a);
			class Nt extends m.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.track = e => this.props.sendEvent(t => ({
						source: "user_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(xt.kb)(t, this.props.subredditId)
					})), this.setSelectedFlair = e => this.setState({
						previewFlair: e
					}), this.onApply = () => {
						var e;
						const {
							props: t,
							state: n
						} = this, s = n.previewFlair ? n.previewFlair.templateId : void 0;
						t.activeFlairChanged(n.previewFlair, s, n.showFlair, t.flairModalContext), (null === (e = t.flairModalContext) || void 0 === e ? void 0 : e.isOpenedFromAchievementsModal) ? t.openAchiementFlairModal() : t.closeModal(), this.track(this.getTrackingNoun("flairadd_mod", "flairadd_user"))
					}, this.onClear = () => this.setSelectedFlair(null), this.onToggleShowFlair = () => {
						this.setState({
							showFlair: !this.state.showFlair
						})
					}, this.state = {
						previewFlair: kt(e),
						showFlair: e.userFlairData.displaySettings.isUserEnabled
					}
				}
				canSave() {
					const {
						userFlairData: e
					} = this.props, {
						previewFlair: t
					} = this.state, {
						templates: n,
						permissions: s
					} = e, {
						isUserEnabled: r
					} = e.displaySettings, o = this.state.showFlair !== r, a = kt(this.props);
					if (!s.canUserChange) return o;
					const {
						canSave: i,
						reason: c
					} = Object(bt.b)(n, t, a);
					return !(i || c !== bt.a.NoChanges || !o) || i
				}
				render() {
					const {
						props: e,
						state: t
					} = this, {
						userFlairData: n,
						subredditId: s,
						flairModalContext: o
					} = e, a = n.permissions.canUserChange, i = n.permissions.canUserChange, c = null == o ? void 0 : o.isOpenedFromAchievementsModal, {
						templates: d,
						templateIds: l
					} = n, u = this.canSave(), p = St(e);
					return m.a.createElement(ut.a, null, m.a.createElement(lt.a, {
						onClosePressed: e.closeModal,
						title: r.fbt._("Select your community flair", null, {
							hk: "199vaD"
						})
					}), m.a.createElement(mt.a, {
						flair: t.previewFlair,
						flairTemplateType: gt.d.UserFlair,
						placeholderText: r.fbt._("u/username", null, {
							hk: "2EDH9"
						})
					}), i && m.a.createElement(pt.a, {
						flair: t.previewFlair,
						flairTemplateType: gt.d.UserFlair,
						subredditId: s,
						templates: d,
						templateIds: l,
						onChange: this.setSelectedFlair
					}), p && m.a.createElement(Pt, null, m.a.createElement(ht.a, {
						isSelected: t.showFlair,
						onClick: this.onToggleShowFlair,
						text: m.a.createElement(wt, null, r.fbt._("Show my user flair on this community", null, {
							hk: "x9nc9"
						}))
					})), m.a.createElement("div", {
						className: _t.a.buttonsRow
					}, c && m.a.createElement(Ie.t, {
						className: _t.a.goBackButton,
						priority: Ie.c.Plain,
						onClick: e.openAchiementFlairModal
					}, r.fbt._("Go Back", null, {
						hk: "4fisFS"
					})), m.a.createElement("div", {
						className: _t.a.rightSideButtons
					}, a && m.a.createElement(Ie.o, {
						className: _t.a.clearButton,
						onClick: this.onClear
					}, r.fbt._("Clear Flair", null, {
						hk: "23i2at"
					})), m.a.createElement(Ie.l, {
						disabled: !u,
						onClick: this.onApply
					}, r.fbt._("Apply", null, {
						hk: "ZvO9n"
					})))))
				}
			}
			const It = Object(p.b)(() => Object(g.c)({
				authorFlair: Ot.b,
				currentUser: yt.k,
				flairModalContext: Ot.c,
				isMod: (e, t) => !!Object(vt.m)(e, t),
				userFlairData: Et.d
			}), (e, t) => ({
				activeFlairChanged: (n, s, r, o) => e(Object(dt.f)(n, s, r, o.username, t.subredditId)),
				closeModal: () => e(Object(it.b)({
					username: null,
					subredditId: null
				})),
				openAchiementFlairModal: () => e(Object(ct.f)())
			}))(Nt);
			var Mt = Object(Ne.a)(Object(R.c)(It)),
				Tt = n("./src/reddit/selectors/bannedUser.ts"),
				Rt = n("./src/reddit/selectors/muted.ts"),
				Lt = n("./src/reddit/selectors/notificationPrefs.ts"),
				At = n("./src/reddit/selectors/platform.ts"),
				Ft = n("./src/reddit/selectors/removalReasons.ts"),
				Dt = n("./src/reddit/constants/cookie.ts"),
				Bt = n("./src/reddit/featureFlags/index.ts"),
				Ut = n("./src/reddit/helpers/localStorage/index.ts"),
				Gt = n("./src/reddit/helpers/toggleBodyScroll/index.ts");
			const Ht = Object(g.c)({
				activeModalId: Te.a,
				authorContext: Ot.c,
				badgePurchaseModalIsOpen: Object(Te.b)(tt.a.BADGE_PURCHASE),
				banContext: Tt.a,
				banModalIsOpen: Object(Te.b)(tt.a.BAN_USER),
				bladeNightmodeModalIsOpen: Object(Te.b)(tt.a.BLADE_NIGHTMODE),
				currentBadgePurchase: e => e.products.currentlyPurchasing,
				downToChatPendingModalIsOpen: Object(Te.b)(tt.a.DOWN_TO_CHAT_PENDING_MODAL),
				introModalFeatureEnabled: e => Bt.d.introModal(e),
				isOverlayOpen: At.i,
				moderatorPermissions: e => {
					const t = Object(At.c)(e);
					if (t) return e.moderatingSubreddits[t]
				},
				muteContext: Rt.a,
				muteModalIsOpen: Object(Te.b)(tt.a.MUTE_USER),
				notificationsPrePromptIsOpen: Lt.d,
				removalReasonContext: Ft.b,
				removalReasonModalIsOpen: Object(Te.b)(tt.a.ADD_REMOVAL_REASON),
				subredditId: At.c,
				userFlairModalIsOpen: Object(Te.b)(tt.a.USER_FLAIR_MODAL_ID),
				userHasSeenRedesignModal: yt.x,
				userInRedesignBeta: yt.E,
				userIsLoggedIn: yt.J,
				userIsMod: yt.K,
				userIsNew: yt.N
			});
			class Wt extends m.a.Component {
				constructor(e) {
					super(e), this.state = {
						domReady: !1
					}
				}
				conditionalModalCheck() {
					if (!Object(_e.a)()) return; {
						const e = je.a.get(Dt.a);
						e && je.a.remove(Dt.a, {
							domain: U.a.cookieDomain
						});
						const t = Object(Ut.E)(tt.a.ALPHA_CONSUMER);
						t && Object(Ut.X)(tt.a.ALPHA_CONSUMER), (e || t) && Object(Ut.Fb)(tt.a.REDESIGN_MODAL, !0)
					}
					const {
						userHasSeenRedesignModal: e,
						markRedesignModalAsClosed: t
					} = this.props, n = Object(Ut.E)(tt.a.REDESIGN_MODAL);
					!e && n ? t() : e && !n && Object(Ut.Fb)(tt.a.REDESIGN_MODAL, !0)
				}
				componentDidMount() {
					this.conditionalModalCheck(), this.setState({
						domReady: !0
					})
				}
				componentDidUpdate() {
					this.conditionalModalCheck(), tt.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(Gt.a)(), 500) : setTimeout(() => Object(Gt.b)(), 500))
				}
				render() {
					const {
						authorContext: e,
						badgePurchaseModalIsOpen: t,
						banContext: n,
						banModalIsOpen: s,
						bladeNightmodeModalIsOpen: r,
						currentBadgePurchase: o,
						downToChatPendingModalIsOpen: a,
						muteContext: i,
						muteModalIsOpen: c,
						notificationsPrePromptIsOpen: d,
						removalReasonContext: l,
						removalReasonModalIsOpen: p,
						sendEvent: b,
						subredditId: h,
						toggleBanModal: f,
						toggleMuteModal: g,
						toggleRemovalReasonsModal: C,
						userFlairModalIsOpen: O
					} = this.props, v = (e, t, n) => s => () => b(r => ({
						source: e,
						action: "click",
						noun: s,
						comment: n && Object(xt.j)(r, n),
						post: n && Object(xt.I)(r, n),
						screen: Object(xt.ab)(r),
						subreddit: Object(xt.kb)(r, t)
					}));
					return m.a.createElement(u.Fragment, null, s && n && m.a.createElement(we.a, {
						contextId: n.contextId,
						subredditId: n.subredditId,
						toggleModal: f,
						trackAddEvent: v("banned", n.subredditId, n.contextId)("add_in_context"),
						trackEventWithName: v("banned", n.subredditId, n.contextId),
						username: n.username
					}), c && i && m.a.createElement(Qe.a, {
						contextId: i.contextId,
						subredditId: i.subredditId,
						toggleModal: g,
						trackAddEvent: v("muted", i.subredditId, i.contextId)("add_in_context"),
						username: i.username
					}), p && l && m.a.createElement(Xe, {
						itemIds: l.itemIds,
						subredditId: l.subredditId,
						toggleModal: C,
						trackClick: v("removal_reasons", l.subredditId, 1 === l.itemIds.length ? l.itemIds[0] : void 0)
					}), r && h && m.a.createElement(at, {
						subredditId: h
					}), O && e && e.subredditId && m.a.createElement(Mt, {
						subredditId: e.subredditId,
						withOverlay: !0
					}), t && o && m.a.createElement(Pe, {
						withOverlay: !0,
						productId: o
					}), d && m.a.createElement(Ze, null), a && m.a.createElement(ze, {
						withOverlay: !0
					}))
				}
			}
			var qt = Object(p.b)(Ht, e => ({
					markRedesignModalAsClosed: () => e(Object(Se.j)()),
					toggleBanModal: () => e(Object(Se.i)(tt.a.BAN_USER)),
					toggleBladeNightmodeModal: () => e(Object(Se.i)(tt.a.BLADE_NIGHTMODE)),
					toggleMuteModal: () => e(Object(Se.i)(tt.a.MUTE_USER)),
					toggleRemovalReasonsModal: () => e(Object(Se.i)(tt.a.ADD_REMOVAL_REASON))
				}))(Object(R.c)(Wt)),
				Vt = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				Kt = n("./src/reddit/constants/experiments.ts"),
				zt = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Qt = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				Jt = n("./src/reddit/selectors/responsiveSettings.ts"),
				Zt = n("./src/reddit/components/AccountManagerModal/index.m.less"),
				Yt = n.n(Zt);
			const Xt = M.a.div("Overlay", Yt.a),
				$t = M.a.div("IframeContainer", Yt.a),
				en = {},
				tn = Object(zt.u)(),
				nn = Object(g.c)({
					frontpageSignupVariant: B.a,
					isResponsiveSettingsEnabled: Jt.a
				}),
				sn = {
					[L.c.ChangePassword]: tt.a.CHANGE_PASSWORD_MODAL_ID,
					[L.c.Index]: tt.a.LOGIN_MODAL_ID,
					[L.c.Register]: tt.a.REGISTER_MODAL_ID,
					[L.c.EnableTwoFactor]: tt.a.ENABLE_TWO_FACTOR,
					[L.c.DisableTwoFactor]: tt.a.DISABLE_TWO_FACTOR,
					[L.c.TwoFactorBackupCodes]: tt.a.TWO_FACTOR_BACKUP_CODES,
					[L.c.LinkAppleSSO]: tt.a.LINK_APPLE_SSO,
					[L.c.UnlinkAppleSSO]: tt.a.UNLINK_APPLE_SSO,
					[L.c.LinkGoogleSSO]: tt.a.LINK_GOOGLE_SSO,
					[L.c.UnlinkGoogleSSO]: tt.a.UNLINK_GOOGLE_SSO,
					[L.c.GoogleOneTap]: tt.a.GOOGLE_ONE_TAP_MODAL_ID,
					[L.c.Onboarding]: tt.a.ONBOARDING_MODAL_ID
				};
			class rn extends m.a.Component {
				constructor() {
					super(...arguments), this.subscriptions = [], this.state = {
						containerSize: null,
						isSSOLinkActionFailedModal: !1,
						removeGoogleOneTapStyles: !1,
						removeHiddenOverlay: !1
					}, this.closeModal = () => {
						this.props.closeModal(this.props.path), this.props.path === L.c.Register && Object(B.f)(this.props.frontpageSignupVariant) && Qt.a.throttleFeature(Kt.dc), this.props.sendEvent(Object(A.a)(this.subscriptions))
					}, this.resizeContainer = e => {
						this.setState({
							containerSize: e
						})
					}, this.restoreContainerSize = () => {
						this.setState({
							containerSize: null
						})
					}, this.updateSubscriptions = e => {
						this.subscriptions = e
					}, this.handleSSOLinkActionFail = () => {
						this.setState({
							isSSOLinkActionFailedModal: !0
						})
					}, this.restoreIFrameStyles = () => {
						this.setState({
							removeGoogleOneTapStyles: !0,
							removeHiddenOverlay: !0
						})
					}, this.onGoogleOneTapSkipped = e => {
						"user_cancel" === e && this.props.sendEvent(Object(A.b)())
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.sendEvent(Object(A.c)())
					}, this.onShowScreen = e => {
						const {
							path: t
						} = this.props, n = t === L.c.Index || t === L.c.Register, s = t === L.c.GoogleOneTap;
						e === L.b.SelectAccount ? n ? this.resizeContainer({
							height: 474,
							width: 416
						}) : s && this.setState({
							removeHiddenOverlay: !0
						}) : e === L.b.Subscribe ? (n && this.restoreContainerSize(), this.restoreIFrameStyles()) : e === L.b.Email || e === L.b.UsernameAndPassword ? n && this.restoreContainerSize() : e !== L.b.EmailOptIn && e !== L.b.GoogleUI || this.setState({
							removeHiddenOverlay: !1
						})
					}
				}
				render() {
					const {
						frontpageSignupVariant: e,
						isResponsiveSettingsEnabled: t,
						pageLayer: n,
						path: s
					} = this.props, {
						containerSize: r,
						isSSOLinkActionFailedModal: o,
						removeGoogleOneTapStyles: a,
						removeHiddenOverlay: i
					} = this.state, c = Object(B.c)(e) || Object(B.d)(e), d = s === L.c.LinkAppleSSO || s === L.c.LinkGoogleSSO || s === L.c.UnlinkAppleSSO || s === L.c.UnlinkGoogleSSO, l = s === L.c.GoogleOneTap, u = Object(C.a)({
						[Yt.a.small]: c,
						[Yt.a.ssoConfirmPassword]: d,
						[Yt.a.linkActionSSOFail]: o,
						[Yt.a.mResponsive]: t,
						[Yt.a.mGoogleOneTap]: l && !a
					}), p = Object(C.a)({
						[Yt.a.mGoogleOneTap]: l && !a,
						[Yt.a.mHiddenOverlay]: l && !i
					}), b = !c && !o && !t;
					return m.a.createElement(Xt, {
						className: p
					}, m.a.createElement($t, {
						className: u,
						style: r || en
					}, m.a.createElement(T.a, {
						onChange: this.restoreContainerSize,
						onClose: this.closeModal,
						onGoogleOneTapSkipped: this.onGoogleOneTapSkipped,
						onGoogleOneTapUIViewed: this.onGoogleOneTapUIViewed,
						onShowScreen: this.onShowScreen,
						onSSOLinkActionFail: this.handleSSOLinkActionFail,
						onSubscriptionsChanged: this.updateSubscriptions,
						pageLayer: n,
						path: s,
						showCloseButton: b
					})))
				}
			}
			const on = tn(Object(p.b)(nn, (e, t) => ({
				closeModal: t => {
					e(Object(Se.g)(sn[t]))
				}
			}))(Object(R.c)(rn)));
			Object(Vt.b)(tt.a.CHANGE_PASSWORD_MODAL_ID, e => m.a.createElement(on, {
				path: L.c.ChangePassword
			})), Object(Vt.b)(tt.a.LOGIN_MODAL_ID, e => m.a.createElement(on, {
				path: L.c.Index
			})), Object(Vt.b)(tt.a.ONBOARDING_MODAL_ID, e => m.a.createElement(on, {
				path: L.c.Onboarding
			})), Object(Vt.b)(tt.a.ENABLE_TWO_FACTOR, e => m.a.createElement(on, {
				path: L.c.EnableTwoFactor
			})), Object(Vt.b)(tt.a.DISABLE_TWO_FACTOR, e => m.a.createElement(on, {
				path: L.c.DisableTwoFactor
			})), Object(Vt.b)(tt.a.TWO_FACTOR_BACKUP_CODES, e => m.a.createElement(on, {
				path: L.c.TwoFactorBackupCodes
			})), Object(Vt.b)(tt.a.REGISTER_MODAL_ID, e => m.a.createElement(on, {
				path: L.c.Register
			})), Object(Vt.b)(tt.a.LINK_APPLE_SSO, e => m.a.createElement(on, {
				path: L.c.LinkAppleSSO
			})), Object(Vt.b)(tt.a.LINK_GOOGLE_SSO, e => m.a.createElement(on, {
				path: L.c.LinkGoogleSSO
			})), Object(Vt.b)(tt.a.UNLINK_APPLE_SSO, e => m.a.createElement(on, {
				path: L.c.UnlinkAppleSSO
			})), Object(Vt.b)(tt.a.UNLINK_GOOGLE_SSO, e => m.a.createElement(on, {
				path: L.c.UnlinkGoogleSSO
			})), Object(Vt.b)(tt.a.GOOGLE_ONE_TAP_MODAL_ID, e => m.a.createElement(on, {
				path: L.c.GoogleOneTap
			}));
			n("./src/reddit/components/CoinPurchaseModal/async.tsx");
			const an = Object(ke.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestPendingModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.CONTRIBUTOR_REQUEST_PENDING, e => m.a.createElement(an, {
				withOverlay: !0
			}));
			const cn = Object(ke.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestRequestModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.CONTRIBUTOR_REQUEST, e => m.a.createElement(cn, {
				withOverlay: !0
			}));
			const dn = Object(ke.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("RequestToJoinPrivateSubredditModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestToJoinPrivateSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT, e => m.a.createElement(dn, {
				withOverlay: !0
			}));
			const ln = Object(ke.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CrowdControlModal").then(n.bind(null, "./src/reddit/components/CrowdControlModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.CROWD_CONTROL, e => m.a.createElement(ln, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/Econ/ClaimFreeAwardModal/async.tsx"), n("./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsSuccess/async.tsx"), n("./src/reddit/components/Econ/Prediction/CancelPredictionModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/EndTimeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/PremiumModal/async.tsx"), n("./src/reddit/components/Econ/TopAwardersModal/async.tsx");
			const un = Object(ke.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("SubredditPremiumBadgeManagement").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT, e => m.a.createElement(un, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const mn = Object(ke.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("SubredditPremiumUploadModal")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/UploadModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, e => m.a.createElement(mn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			n("./src/reddit/components/EditCommunityDescriptionModal/async.tsx");
			const pn = Object(ke.a)({
					getComponent: () => Object(Je.a)(() => Promise.all([n.e("FramedGild~GildModal"), n.e("GildModal")]).then(n.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				bn = e => () => {
					e()
				};
			Object(Vt.b)(tt.a.GOLD_GILD_MODAL, e => m.a.createElement(pn, {
				onOverlayClick: bn(e),
				withOverlay: !0
			}));
			var hn = n("./src/reddit/components/Gold/GildAnimationOverlay/index.tsx"),
				fn = n("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				gn = n.n(fn);
			const Cn = Object(ke.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => {
					return document.createElement("img").src = hn.SPARKLE_ASSET_PATH, document.createElement("img").src = hn.STARBURST_ASSET_PATH, Promise.resolve().then(n.bind(null, "./src/reddit/components/Gold/GildAnimationOverlay/index.tsx")).then(e => e.default)
				}
			});
			Object(Vt.b)(tt.a.GOLD_GILD_ANIMATION_OVERLAY, e => m.a.createElement(Cn, {
				withOverlay: !0,
				className: gn.a.modalBody,
				overlayClassName: gn.a.modalOverlay
			}));
			const On = Object(ke.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("GoldTargetedOfferModal").then(n.bind(null, "./src/reddit/components/Gold/TargetedOfferModal/index.tsx")).then(e => e.default)
				}),
				vn = e => () => {
					e()
				};
			Object(Vt.b)(tt.a.GOLD_TARGETED_OFFER_MODAL, e => m.a.createElement(On, {
				onOverlayClick: vn(e),
				withOverlay: !0
			}));
			const xn = Object(ke.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("HarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.HARBERGER_TAX_BANNER_MANAGE, e => m.a.createElement(xn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const yn = Object(ke.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("HarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.HARBERGER_TAX_BANNER_PURCHASE, e => m.a.createElement(yn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const En = Object(ke.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CryptoHarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE, e => m.a.createElement(En, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const jn = Object(ke.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CryptoHarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE, e => m.a.createElement(jn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const _n = Object(ke.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceReleaseNotesModal").then(n.bind(null, "./src/reddit/components/Governance/ReleaseNotesModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.GOVERNANCE_RELEASE_NOTES, e => m.a.createElement(_n, {
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/TransactionModals/BurnPointsModal/async.tsx"), n("./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx");
			const Sn = Object(ke.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceTransferPointsModal").then(n.bind(null, "./src/reddit/components/Governance/TransferPointsModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.TRANSFER_POINTS, e => m.a.createElement(Sn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const kn = Object(ke.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.WALLET_REGISTRATION_MODAL, e => m.a.createElement(kn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Pn = Object(ke.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ModToMemberShareModal").then(n.bind(null, "./src/reddit/components/ModToMemberShareModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.MOD_TO_MEMBER_SHARE, e => m.a.createElement(Pn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const wn = Object(ke.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditAddSubredditModal").then(n.bind(null, "./src/reddit/components/MultiredditAddSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.MULTIREDDIT_ADD_SUBREDDIT, e => m.a.createElement(wn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Nn = Object(ke.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditCreateModal").then(n.bind(null, "./src/reddit/components/MultiredditCreateModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.MULTIREDDIT_CREATE, e => m.a.createElement(Nn, {
				onOverlayClick: e,
				withOverlay: !0
			})), Object(Vt.b)(tt.a.MULTIREDDIT_DUPLICATE, e => m.a.createElement(Nn, {
				isDuplicateModal: !0,
				onOverlayClick: e,
				withOverlay: !0
			}));
			const In = Object(ke.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditEditModal").then(n.bind(null, "./src/reddit/components/MultiredditEditModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.MULTIREDDIT_EDIT, e => m.a.createElement(In, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Mn = () => Promise.all([n.e(3), n.e("OnboardingModal")]).then(n.bind(null, "./src/reddit/components/Onboarding/Modal.tsx")),
				Tn = Object(ke.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(Je.a)(Mn).then(e => e.default)
				});
			Object(Vt.b)(tt.a.ONBOARDING_MODAL_D2X, e => m.a.createElement(Tn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/async.tsx"), n("./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/async.tsx"), n("./src/reddit/components/PostFlowUpsellModal/async.tsx"), n("./src/reddit/components/PowerupsSidebar/SupportersListModal/async.tsx"), n("./src/reddit/components/PremiumPurchaseModal/Loader.tsx");
			const Rn = () => null,
				Ln = Object(ke.a)({
					ErrorComponent: Rn,
					getComponent: () => Object(Je.a)(() => n.e("GlobalModalContainer").then(n.bind(null, "./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx"))).then(e => e.default),
					LoadingComponent: Rn
				});
			Object(Vt.b)(tt.a.PINNED_POSTS_LIMIT_REACHED, e => m.a.createElement(Ln, null));
			var An = n("./src/reddit/components/ShortcutIndexModal/index.m.less"),
				Fn = n.n(An);
			const Dn = M.a.h2("ColumnLabel", Fn.a),
				Bn = M.a.wrapped(ft.a, "ColumnWrapper", Fn.a),
				Un = M.a.div("Column", Fn.a),
				Gn = M.a.div("Description", Fn.a),
				Hn = M.a.div("Key", Fn.a),
				Wn = M.a.wrapped(et.l, "ModalMain", Fn.a),
				qn = M.a.wrapped(et.e, "ModalBody", Fn.a),
				Vn = M.a.wrapped(Ie.l, "PrimaryButton", Fn.a),
				Kn = M.a.wrapped(nt.a, "TextButton", Fn.a),
				zn = Object(p.b)(null, e => ({
					closeModal: () => e(Object(Se.i)(tt.a.KEYBOARD_SHORTCUTS))
				})),
				Qn = M.a.wrapped(Object(Ne.a)(zn(e => m.a.createElement(qn, {
					onClick: e => e.stopPropagation()
				}, m.a.createElement(et.i, null, m.a.createElement(st.a, null, m.a.createElement(et.q, null, r.fbt._("Keyboard Shortcuts", null, {
					hk: "zoWU1"
				})), m.a.createElement(Kn, {
					onClick: e.closeModal
				}, m.a.createElement(et.b, null)))), m.a.createElement(Wn, null, m.a.createElement(Bn, null, m.a.createElement(Un, null, m.a.createElement(ft.a, null, m.a.createElement(Dn, null, r.fbt._("Navigation", null, {
					hk: "3zSWEe"
				}))), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, r.fbt._("Show shortcuts", null, {
					hk: "4hXvrI"
				})), m.a.createElement(Hn, null, "Shift + ?")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, r.fbt._("Next post or comment", null, {
					hk: "1m8s9z"
				})), m.a.createElement(Hn, null, "J")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, r.fbt._("Previous post or comment", null, {
					hk: "2wzeoq"
				})), m.a.createElement(Hn, null, "K")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, r.fbt._("Next post in lightbox", null, {
					hk: "1ALR5k"
				})), m.a.createElement(Hn, null, "N")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, r.fbt._("Previous post in lightbox", null, {
					hk: "2bLo98"
				})), m.a.createElement(Hn, null, "P")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, r.fbt._("Open post", null, {
					hk: "2wD7mh"
				})), m.a.createElement(Hn, null, "Enter")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, r.fbt._("Open/close expando", null, {
					hk: "1yDst0"
				})), m.a.createElement(Hn, null, "X")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, r.fbt._("Go to post link", null, {
					hk: "c0TNr"
				})), m.a.createElement(Hn, null, "L"))), m.a.createElement(Un, null, m.a.createElement(ft.a, null, m.a.createElement(Dn, null, r.fbt._("Action", null, {
					hk: "3QI6pT"
				}))), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, r.fbt._("Upvote", null, {
					hk: "5i9NP"
				})), m.a.createElement(Hn, null, "A")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, r.fbt._("Downvote", null, {
					hk: "1ef3YP"
				})), m.a.createElement(Hn, null, "Z")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, r.fbt._("New post", null, {
					hk: "4dtNWf"
				})), m.a.createElement(Hn, null, "C")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, r.fbt._("Reply to comment", null, {
					hk: "G8AbT"
				})), m.a.createElement(Hn, null, "R")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, r.fbt._("Submit comment/post", null, {
					hk: "13agk7"
				})), m.a.createElement(Hn, null, "Ctrl + Enter")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, r.fbt._("Save", null, {
					hk: "4yMsMq"
				})), m.a.createElement(Hn, null, "S")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, r.fbt._("Hide", null, {
					hk: "2Dn9GF"
				})), m.a.createElement(Hn, null, "H")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, r.fbt._("Open navigation", null, {
					hk: "QdGe2"
				})), m.a.createElement(Hn, null, "Q")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, r.fbt._("Collapse/expand comment", null, {
					hk: "1FxIUN"
				})), m.a.createElement(Hn, null, "Enter"))))), m.a.createElement(et.g, null, m.a.createElement(Vn, {
					"data-redditstyle": !0,
					onClick: () => {
						e.closeModal()
					}
				}, r.fbt._("Close", null, {
					hk: "4gbyAA"
				})))))), "ConnectedModal", Fn.a);
			Object(Vt.b)(tt.a.KEYBOARD_SHORTCUTS, e => m.a.createElement(Qn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Jn = Object(ke.a)({
					getComponent: () => Object(Je.a)(() => n.e("SnoovatarModal").then(n.bind(null, "./src/reddit/components/SnoovatarModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Zn = e => () => {
					e()
				};
			Object(Vt.b)(tt.a.SNOOVATAR_MODAL, e => m.a.createElement(Jn, {
				onOverlayClick: Zn(e),
				withOverlay: !0
			}));
			const {
				fbt: Yn
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Xn = Object(g.c)({
				allowNavigationCallback: At.a
			}), $n = Object(p.b)(Xn, e => ({
				closeModal: () => e(Object(Se.i)(tt.a.BLADE_UNSAVED_CHANGES)),
				closeBlade: () => e(Object($e.a)())
			}));
			class es extends m.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.closeBlade(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onCancelClick = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}
				}
				render() {
					return m.a.createElement(et.e, null, m.a.createElement(et.i, null, m.a.createElement(st.a, null, m.a.createElement(et.q, null, Yn._("Discard unsaved changes before leaving?", null, {
						hk: "4qVGC7"
					})), m.a.createElement(nt.a, {
						onClick: this.onCancelClick
					}, m.a.createElement(et.b, null)))), m.a.createElement(et.l, null, m.a.createElement(et.p, null, Yn._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "28O7Pm"
					}))), m.a.createElement(et.g, null, m.a.createElement(et.a, {
						onClick: this.onCancelClick,
						"data-redditstyle": !0
					}, Yn._("Cancel", null, {
						hk: "2TSLl5"
					})), m.a.createElement(et.r, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, Yn._("Discard", null, {
						hk: "1SiwLl"
					}))))
				}
			}
			const ts = Object(Ne.a)($n(es));
			Object(Vt.b)(tt.a.BLADE_UNSAVED_CHANGES, e => m.a.createElement(ts, {
				withOverlay: !0
			}));
			n("./src/reddit/components/SubredditCreationModal/async.tsx");
			const ns = Object(g.c)({
					activeModalId: Te.a
				}),
				ss = Object(p.b)(ns, e => ({
					toggleModal: t => e(Object(Se.i)(t))
				})),
				rs = 500,
				os = () => {};
			class as extends m.a.Component {
				constructor() {
					super(...arguments), this.toggleModal = () => {
						this.props.activeModalId && this.props.toggleModal(this.props.activeModalId)
					}
				}
				componentDidUpdate() {
					tt.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(Gt.a)(), rs) : setTimeout(() => Object(Gt.b)(), rs))
				}
				componentWillUnmount() {
					Object(Gt.b)()
				}
				render() {
					const {
						activeModalId: e
					} = this.props;
					return Object(Vt.a)(e)(e ? this.toggleModal : os)
				}
			}
			var is, cs = ss(as),
				ds = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				ls = n("./src/reddit/actions/page.ts"),
				us = n("./src/reddit/actions/shortcuts/utils.ts"),
				ms = n("./src/reddit/icons/fonts/index.tsx"),
				ps = n("./src/reddit/selectors/header.ts"),
				bs = n("./src/reddit/selectors/userPrefs.ts"),
				hs = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				fs = n("./src/reddit/components/SEOTitle/index.tsx"),
				gs = n("./src/reddit/components/SubredditIcon/index.tsx"),
				Cs = n("./src/reddit/components/UserIcon/index.tsx"),
				Os = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				vs = n("./src/reddit/routes/wrappedreddit/index.ts"),
				xs = n("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				ys = n.n(xs);
			! function(e) {
				e.Acknowledgements = "Acknowledgements", e.All = "All", e.Appeal = "Appeal", e.Avatar = "Avatar", e.Category = "Category", e.Coins = "Coins", e.Community = "Community", e.CommunitySearch = "CommunitySearch", e.CreateCommunity = "CreateCommunity", e.CreatePost = "CreatePost", e.DailyCharts = "DailyCharts", e.Employee = "Employee", e.GlobalSearch = "GlobalSearch", e.Geotagging = "Geotagging", e.Home = "Home", e.Inbox = "Inbox", e.ModListing = "ModListing", e.ModMail = "ModMail", e.ModQueue = "ModQueue", e.Multi = "Multi", e.NotificationsInbox = "NotificationsInbox", e.Popular = "Popular", e.Powerups = "Powerups", e.Predictions = "Predictions", e.Premium = "Premium", e.PublicAccessNetwork = "PublicAccessNetwork", e.Report = "Report", e.Settings = "Settings", e.SubredditCreation = "SubredditCreation", e.Talk = "Talk", e.Topic = "Topic", e.Unknown = "Unknown", e.UserDataRequest = "UserDataRequest", e.UserProfile = "UserProfile", e.UserProfileName = "UserProfileName", e.ViewDraft = "ViewDraft", e.WrappedReddit = "WrappedReddit"
			}(is || (is = {}));
			const Es = () => m.a.createElement("img", {
				src: vs.a,
				className: ys.a.wrappedRedditDropdown
			});
			const js = (e, t = !1) => {
				const [n, s] = t && -1 !== e.indexOf("/") ? e.split("/") : [, e];
				return m.a.createElement(m.a.Fragment, null, n && `${n}/`, s && m.a.createElement(fs.b, {
					type: fs.a.HeaderSelector
				}, s))
			};
			var _s = n("./src/lib/objectSelector/index.ts"),
				Ss = n("./src/reddit/constants/wiki.ts"),
				ks = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				Ps = n("./src/reddit/selectors/subreddit.ts"),
				ws = n("./src/reddit/selectors/topic.ts");
			var Ns = Object(_s.a)((e, {
					pageLayer: t
				}) => {
					const n = !!e.user.account,
						s = Object(zt.Y)(t);
					switch (s) {
						case "avatar":
							return {
								type: is.Avatar
							};
						case "index":
						case "listing":
							return n ? {
								type: is.Home
							} : {
								type: is.Popular
							};
						case "modListing":
							return {
								type: is.ModListing
							};
						case "modQueuePages":
							return {
								type: is.ModQueue
							};
						case "postCreation":
							return {
								type: is.CreatePost
							};
						case "postDraft":
							return {
								type: is.ViewDraft
							};
						case "subredditCreation":
							return {
								type: is.SubredditCreation
							};
						case "coins":
							return {
								type: is.Coins
							};
						case "RedditRecap2021":
							return {
								type: is.WrappedReddit
							};
						case "powerups":
							return {
								type: is.Powerups
							};
						case "predictions":
							return {
								type: is.Predictions
							};
						case "premium":
							return {
								type: is.Premium
							};
						case "acknowledgements":
							return {
								type: is.Acknowledgements
							};
						case "appeal":
							return {
								type: is.Appeal
							};
						case "report":
							return {
								type: is.Report
							};
						case "userDataRequest":
							return {
								type: is.UserDataRequest
							};
						case "subredditLeaderboard":
							return {
								type: is.DailyCharts
							};
						case "geotagging":
							return {
								type: is.Geotagging
							};
						case "notificationsInbox":
							return {
								type: is.NotificationsInbox
							};
						case "talk":
							return {
								type: is.Talk
							};
						case "topic": {
							const n = Object(zt.t)(t),
								s = n && Object(ws.d)(e, n);
							if (s) return {
								type: is.Topic,
								model: s
							}
						}
					}
					const r = e.user.account;
					if (r) switch (s) {
						case "inboxPages":
							return {
								type: is.Inbox, model: r
							};
						case "settings":
							return {
								type: is.Settings, model: r
							}
					}
					const o = Object(zt.S)(e, {
						pageLayer: t
					});
					if ("all" === o) return {
						type: is.All
					};
					if ("popular" === o) return {
						type: is.Popular
					};
					const a = Object(zt.r)(e, {
						pageLayer: t
					});
					if (a) return "searchResults" === s ? {
						type: is.CommunitySearch,
						model: a
					} : {
						type: is.Community,
						model: a
					};
					const i = Object(zt.e)(e, {
						pageLayer: t
					});
					if (i) return {
						type: is.Multi,
						model: i
					};
					const c = Object(zt.k)(e, {
						pageLayer: t
					});
					if (c) return {
						type: is.UserProfile,
						model: c
					};
					const d = Object(zt.i)(t);
					if (d) return {
						type: is.UserProfileName,
						name: `u/${d}`
					};
					if (s && "searchResults" === s) return {
						type: is.GlobalSearch
					};
					if ("subredditWiki" === s) {
						const n = Object(zt.o)(e, {
								pageLayer: t
							}) || Ss.e,
							s = Object(Ps.w)(e, {
								subredditName: n
							});
						if (s) return {
							type: is.Community,
							model: s
						}
					}
					return "rpan" === s && Object(ks.a)(e) ? {
						type: is.PublicAccessNetwork
					} : {
						type: is.Unknown
					}
				}),
				Is = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less")),
				Ms = n.n(Is);

			function Ts() {
				return (Ts = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function Rs(e) {
				const t = e.icon,
					n = e.text,
					s = {
						id: e.id,
						role: "menuitem",
						children: m.a.createElement(m.a.Fragment, null, m.a.createElement(t, {
							className: Ms.a.icon,
							isFilled: e.isCurrentPage
						}), m.a.createElement(n, {
							className: Ms.a.text
						})),
						className: Object(C.a)(Ms.a.item, e.className, {
							[Ms.a.mFocused]: !!e.isFocused,
							[Ms.a.buttonContainer]: !e.to
						}),
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
				return s["aria-label"] = e.to || e.label, e.to ? e.externalLink ? m.a.createElement("a", Ts({}, s, {
					href: e.to,
					target: "_blank"
				})) : m.a.createElement(ds.a, Ts({}, s, {
					to: e.to
				})) : m.a.createElement("button", s)
			}
			var Ls = n("./src/reddit/constants/listings.ts"),
				As = n("./src/reddit/helpers/overlay/index.ts"),
				Fs = n("./src/reddit/routes/modListing/index.ts"),
				Ds = n("./src/reddit/routes/powerups/index.ts"),
				Bs = n("./src/reddit/routes/predictions/index.ts"),
				Us = n("./src/reddit/routes/talk/index.ts"),
				Gs = n("./src/reddit/selectors/experiments/econ/index.ts"),
				Hs = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				Ws = n("./src/reddit/selectors/experiments/wrappedReddit.ts"),
				qs = n("./src/reddit/selectors/multireddit.ts"),
				Vs = n("./src/lib/LinkedListMap/index.ts"),
				Ks = n("./src/reddit/routes/avatar/index.ts");

			function zs() {
				return (zs = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Qs = Object(g.c)({
				account: e => e.user.account,
				favoriteMultireddits: e => e.subscriptions.favoriteMultiOrder.map(t => Object(qs.e)(e, t)).filter(Boolean),
				favoriteProfiles: e => e.subscriptions.favoriteProfileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				favoriteSubreddits: e => e.subscriptions.favoriteSubredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubreddits: e => (e.subreddits.moderated.order || []).map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubredditsPending: e => e.subreddits.moderated.api.pending || !e.subreddits.moderated.api.fetched,
				multis: e => e.subscriptions.multiredditOrder.map(t => Object(qs.e)(e, t)).filter(Boolean),
				multisPending: e => e.multireddits.api.forUser.pending || !e.multireddits.api.forUser.fetched,
				profiles: e => e.subscriptions.profileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				subscriptions: e => e.subscriptions.subredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptionsPending: e => e.subscriptions.api.pending || !e.subscriptions.api.fetched
			});
			var Js;
			! function(e) {
				e[e.Header = 0] = "Header", e[e.Subreddit = 1] = "Subreddit", e[e.SubredditAutocomplete = 2] = "SubredditAutocomplete", e[e.Profile = 3] = "Profile", e[e.Multi = 4] = "Multi", e[e.GenericClickable = 5] = "GenericClickable", e[e.GenericLink = 6] = "GenericLink", e[e.LoadingState = 7] = "LoadingState", e[e.Category = 8] = "Category", e[e.Action = 9] = "Action"
			}(Js || (Js = {}));
			const Zs = [e => ({
					id: is.Employee,
					type: Js.GenericLink,
					model: {
						url: "/user/reddit/m/employee_subbies/new",
						displayText: "Employee Communities",
						icon: e => m.a.createElement(ms.a, zs({
							name: "home"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, "Employee Communities")
					},
					telemetryNoun: "employee"
				})],
				Ys = () => [e => ({
					id: is.All,
					type: Js.GenericLink,
					model: {
						url: "/r/all/",
						displayText: r.fbt._("All", null, {
							hk: "2M8nEy"
						}).toString(),
						icon: e => m.a.createElement(ms.a, zs({
							name: "all"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, r.fbt._("All", null, {
							hk: "2M8nEy"
						}))
					},
					telemetryNoun: "all"
				})],
				Xs = () => [e => ({
					id: "reddit-feeds",
					type: Js.Header,
					model: {
						displayText: r.fbt._("Feeds", null, {
							hk: "4zvMfr"
						}).toString()
					}
				}), (e, t) => ({
					id: is.Home,
					type: Js.GenericLink,
					model: {
						url: "/",
						displayText: r.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => m.a.createElement(ms.a, zs({
							name: "home"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, r.fbt._("Home", null, {
							hk: "2u56yo"
						}))
					},
					telemetryNoun: "home"
				}), e => ({
					id: is.Popular,
					type: Js.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: r.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(ms.a, zs({
							name: "popular"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, r.fbt._("Popular", null, {
							hk: "1op8tD"
						}))
					},
					telemetryNoun: "popular"
				}), ...Ys()],
				$s = [e => ({
					id: "reddit-feeds",
					type: Js.Header,
					model: {
						displayText: r.fbt._("Reddit Feeds", null, {
							hk: "3C1mtF"
						}).toString()
					}
				}), () => ({
					id: is.Home,
					type: Js.GenericLink,
					model: {
						url: "/",
						displayText: r.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(ms.a, zs({
							name: "home"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, r.fbt._("Popular", null, {
							hk: "1op8tD"
						}))
					},
					telemetryNoun: "popular"
				}), ...Ys()],
				er = [e => ({
					id: "reddit-other",
					type: Js.Header,
					model: {
						displayText: r.fbt._("Other", null, {
							hk: "1etY05"
						}).toString()
					}
				}), e => ({
					id: is.Settings,
					type: Js.GenericLink,
					model: {
						url: "/settings",
						displayText: r.fbt._("User Settings", null, {
							hk: "36WFGd"
						}).toString(),
						icon: ({
							className: e
						}) => m.a.createElement(Os.a, {
							className: e
						}),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, r.fbt._("User Settings", null, {
							hk: "36WFGd"
						}))
					},
					telemetryNoun: "settings"
				}), e => ({
					id: is.Inbox,
					type: Js.GenericLink,
					model: {
						url: "/message/inbox/",
						displayText: r.fbt._("Messages", null, {
							hk: "43DUrY"
						}).toString(),
						icon: ({
							className: e
						}) => m.a.createElement(Os.a, {
							className: e
						}),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, r.fbt._("Messages", null, {
							hk: "43DUrY"
						}))
					},
					telemetryNoun: "mail"
				}), e => ({
					id: is.CreatePost,
					type: Js.GenericLink,
					model: {
						url: "/submit",
						displayText: r.fbt._("Create Post", null, {
							hk: "dGck6"
						}).toString(),
						icon: e => m.a.createElement(ms.a, zs({
							name: "add"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, r.fbt._("Create Post", null, {
							hk: "dGck6"
						}))
					},
					telemetryNoun: "create_post"
				})],
				tr = e => ({
					id: is.Coins,
					type: Js.GenericLink,
					model: {
						url: "/coins",
						displayText: r.fbt._("Coins", null, {
							hk: "ZFvDU"
						}).toString(),
						icon: e => m.a.createElement(ms.a, zs({
							name: "coins"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, r.fbt._("Coins", null, {
							hk: "ZFvDU"
						}))
					},
					telemetryNoun: "coins"
				}),
				nr = e => ({
					id: is.Premium,
					type: Js.GenericLink,
					model: {
						url: "/premium",
						displayText: r.fbt._("Premium", null, {
							hk: "3i2C4T"
						}).toString(),
						icon: e => m.a.createElement(ms.a, zs({
							name: "premium"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, r.fbt._("Premium", null, {
							hk: "3i2C4T"
						}))
					},
					telemetryNoun: "premium"
				}),
				sr = e => ({
					id: is.Avatar,
					type: Js.GenericLink,
					model: {
						url: Ks.a,
						displayText: r.fbt._("Avatar", null, {
							hk: "12GoEB"
						}).toString(),
						icon: e => m.a.createElement(ms.a, zs({
							name: "avatar_style"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, r.fbt._("Avatar", null, {
							hk: "43lxPH"
						}))
					},
					telemetryNoun: "avatar"
				}),
				rr = e => ({
					id: is.Powerups,
					type: Js.GenericLink,
					model: {
						url: Ds.a,
						displayText: r.fbt._("Powerups", null, {
							hk: "w9Ere"
						}).toString(),
						icon: e => m.a.createElement(ms.a, zs({
							name: "powerup"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, r.fbt._("Powerups", null, {
							hk: "1f7fL8"
						}))
					},
					telemetryNoun: "powerups"
				}),
				or = e => ({
					id: is.WrappedReddit,
					type: Js.GenericLink,
					model: {
						url: vs.b,
						displayText: r.fbt._("Reddit Recap", null, {
							hk: "3S6KUW"
						}).toString(),
						icon: e => m.a.createElement("img", {
							src: vs.a,
							className: ys.a.wrappedRedditLogo
						}),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, r.fbt._("Reddit Recap", null, {
							hk: "1UuGvQ"
						}))
					},
					telemetryNoun: "recap"
				}),
				ar = e => ({
					id: is.Talk,
					type: Js.GenericLink,
					model: {
						url: Us.a,
						displayText: r.fbt._("Talk", null, {
							hk: "lHWAD"
						}).toString(),
						icon: e => m.a.createElement(ms.a, zs({
							name: "live"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, r.fbt._("Talk", null, {
							hk: "31Avul"
						}))
					},
					telemetryNoun: "talk"
				}),
				ir = e => ({
					id: is.Predictions,
					type: Js.GenericLink,
					model: {
						url: Bs.a,
						displayText: r.fbt._("Predictions", null, {
							hk: "4doXhN"
						}).toString(),
						icon: e => m.a.createElement(ms.a, zs({
							name: "prediction"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, r.fbt._("Predictions", null, {
							hk: "3lUrcj"
						}))
					},
					telemetryNoun: "predictions"
				}),
				cr = [e => ({
					id: is.ModQueue,
					type: Js.GenericLink,
					model: {
						url: "/r/mod/about/modqueue",
						displayText: r.fbt._("Mod Queue", null, {
							hk: "12pTAg"
						}).toString(),
						icon: e => m.a.createElement(ms.a, zs({
							name: "mod_queue"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, r.fbt._("Mod Queue", null, {
							hk: "12pTAg"
						}))
					},
					telemetryNoun: "mod_queue"
				}), e => {
					return {
						id: is.ModMail,
						type: Js.GenericLink,
						model: {
							url: "https://mod.reddit.com/mail/all",
							displayText: r.fbt._("Modmail", null, {
								hk: "1BtYh4"
							}).toString(),
							icon: e => m.a.createElement(ms.a, zs({
								name: "mod_mail"
							}, e)),
							text: ({
								className: e
							}) => m.a.createElement("span", {
								className: e
							}, r.fbt._("Modmail", null, {
								hk: "2QQ3dU"
							}))
						},
						telemetryNoun: "modmail_beta"
					}
				}];

			function dr(e, t, n, s) {
				t.subscriptions.length && (e.push({
					id: "header-subscriptions",
					type: Js.Header,
					model: {
						displayText: r.fbt._("my communities", null, {
							hk: "2cRte1"
						}).toString()
					}
				}), n && lr(e, s), t.subscriptions.forEach(t => e.push({
					id: "sub" + t.id,
					type: Js.Subreddit,
					model: t,
					telemetryNoun: "community"
				}))), t.profiles.length && (e.push({
					id: "header-profiles",
					type: Js.Header,
					model: {
						displayText: r.fbt._("following", null, {
							hk: "1kjEfv"
						}).toString()
					}
				}), t.profiles.forEach(t => e.push({
					id: "pro" + t.id,
					type: Js.Profile,
					model: t,
					telemetryNoun: "profile"
				})))
			}
			const lr = (e, t) => {
				const n = {
						id: is.CreateCommunity,
						telemetryNoun: "create_community"
					},
					s = {
						displayText: r.fbt._("Create Community", null, {
							hk: "41sjx"
						}).toString(),
						icon: e => m.a.createElement(ms.a, zs({
							name: "add"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, r.fbt._("Create Community", null, {
							hk: "41sjx"
						}).toString())
					};
				e.push({
					...n,
					type: Js.GenericClickable,
					model: {
						...s,
						onClick: () => {
							t(Object(Se.h)(tt.a.SUBREDDIT_CREATION_MODAL_ID))
						}
					}
				})
			};
			var ur = n("./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less"),
				mr = n.n(ur);

			function pr(e) {
				return m.a.createElement("div", {
					className: Object(C.a)(mr.a.header, e.className),
					role: "heading"
				}, e.children)
			}
			var br = n("./src/reddit/actions/subscription/index.ts"),
				hr = n("./src/reddit/helpers/trackers/customFeeds.ts"),
				fr = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				gr = n.n(fr);

			function Cr() {
				return (Cr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Or = Object(g.c)({
					currentUser: yt.k,
					hideNSFWPref: yt.C,
					isLoggedIn: yt.J
				}),
				vr = Object(p.b)(Or, (e, t) => ({
					toggleFavorite: n => {
						switch (n.stopPropagation(), n.preventDefault(), t.type) {
							case Js.Subreddit:
								e(Object(br.c)({
									id: t.model.id,
									type: "subreddit"
								}));
								break;
							case Js.Profile:
								e(Object(br.c)({
									id: t.model.id,
									type: "profile"
								}));
								break;
							case Js.Multi:
								e(Object(br.a)(t.model.url)), t.model.isFavorited ? t.sendEvent(Object(hr.f)(t.model.url)) : t.sendEvent(Object(hr.c)(t.model.url))
						}
					}
				}));
			var xr = Object(R.c)(vr((function(e) {
					const t = {
						className: Object(C.a)(gr.a.item, e.className, {
							[gr.a.mFocused]: !!e.isFocused
						}),
						id: e.id,
						role: "menuitem",
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
					switch (e.type) {
						case Js.Subreddit:
							return m.a.createElement(ds.a, Cr({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(gs.b, {
								className: gr.a.icon,
								shouldHideNsfwIcon: e.hideNSFWPref,
								subredditOrProfile: e.model
							}), m.a.createElement("span", {
								className: gr.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(ms.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(C.a)(gr.a.favorite, {
									[gr.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Js.SubredditAutocomplete:
							return m.a.createElement(ds.a, Cr({}, t, {
								"aria-label": e.model.name,
								to: `/r/${e.model.name}/`
							}), m.a.createElement(gs.b, {
								className: gr.a.icon,
								primaryColor: e.model.primaryColor,
								iconUrl: e.model.communityIcon || e.model.icon
							}), m.a.createElement("span", {
								className: gr.a.text
							}, e.model.name));
						case Js.Multi:
							return m.a.createElement(ds.a, Cr({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement("img", {
								src: e.model.icon,
								className: gr.a.customFeedIcon
							}), m.a.createElement("span", {
								className: gr.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(ms.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(C.a)(gr.a.favorite, {
									[gr.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Js.Profile:
							return m.a.createElement(ds.a, Cr({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(Cs.a, {
								className: gr.a.icon,
								iconUrl: e.model.icon.url,
								isNSFW: e.model.isNSFW,
								userName: e.model.name
							}), m.a.createElement("span", {
								className: gr.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(ms.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(C.a)(gr.a.favorite, {
									[gr.a.mFavorite]: !!e.isFavorite
								})
							})))
					}
				}))),
				yr = n("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				Er = n.n(yr);

			function jr(e) {
				return m.a.createElement("div", {
					className: e.className
				}, m.a.createElement("div", {
					className: Er.a.header
				}), m.a.createElement("div", {
					className: Er.a.item
				}), m.a.createElement("div", {
					className: Er.a.item
				}), m.a.createElement("div", {
					className: Er.a.item
				}), m.a.createElement("div", {
					className: Er.a.item
				}))
			}
			var _r = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				Sr = n("./src/reddit/actions/subreddit.ts"),
				kr = n("./src/reddit/constants/keycodes.ts"),
				Pr = n("./src/reddit/helpers/correlationIdTracker.ts"),
				wr = n("./src/lib/loadableAction/index.ts"),
				Nr = n("./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less"),
				Ir = n.n(Nr);

			function Mr() {
				return (Mr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function Tr(e) {
				return e.id === is.ModMail || e.id === is.CreateCommunity
			}

			function Rr(e) {
				const t = new Vs.a("id");
				return e.forEach(e => {
					(function(e) {
						return e.type !== Js.Header && e.type !== Js.LoadingState
					})(e) && t.push({
						id: e.id
					})
				}), t
			}
			const Lr = Object(g.c)({
					favoriteMultireddits: e => new Set(e.subscriptions.favoriteMultiOrder),
					favoriteProfiles: e => new Set(e.subscriptions.favoriteProfileOrder),
					favoriteSubreddits: e => new Set(e.subscriptions.favoriteSubredditOrder),
					unfilteredListBuilder: e => t => {
						const n = Qs(e),
							s = new Vs.a("id"),
							o = Object(yt.hb)(e),
							a = Object(Gs.r)(e),
							i = Object(Ws.b)(e),
							c = [];
						a && i || (!a && c.push(is.Predictions), !i && c.push(is.WrappedReddit));
						const d = (e => Object(Gs.z)(e) ? [nr, tr, sr, rr, or, ar, ir] : [tr, nr, sr, rr, or, ar, ir])(e),
							l = c.length ? d.filter(e => !c.includes(e(null).id)) : d;
						if (n.account) {
							const a = n.account;
							(n.favoriteSubreddits.length || n.favoriteProfiles.length || n.favoriteMultireddits.length) && (s.push({
								id: "header-favorites",
								type: Js.Header,
								model: {
									displayText: r.fbt._("favorites", null, {
										hk: "4Gg0k2"
									}).toString()
								}
							}), n.favoriteSubreddits.forEach(e => s.push({
								id: "fav" + e.id,
								type: Js.Subreddit,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteProfiles.forEach(e => s.push({
								id: "fav" + e.id,
								type: Js.Profile,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteMultireddits.forEach(e => s.push({
								id: "fav" + e.url,
								type: Js.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), n.multisPending && s.push({
								id: "multis-pending",
								type: Js.LoadingState,
								model: {
									displayText: ""
								}
							}), n.moderatingSubredditsPending ? s.push({
								id: "moderatingSubreddits-pending",
								type: Js.LoadingState,
								model: {
									displayText: ""
								}
							}) : n.moderatingSubreddits.length && (s.push({
								id: "header-moderating",
								type: Js.Header,
								model: {
									displayText: r.fbt._("moderating", null, {
										hk: "2du7dx"
									}).toString()
								}
							}), a.isMod && cr.forEach(e => s.push(e(a))), s.push({
								id: is.ModListing,
								type: Js.GenericLink,
								model: {
									url: Fs.a,
									displayText: "r/Mod",
									icon: e => m.a.createElement(ms.a, zs({
										name: "mod_queue"
									}, e)),
									text: ({
										className: e
									}) => m.a.createElement("span", {
										className: e
									}, "r/Mod")
								},
								telemetryNoun: "r_mod"
							}), n.moderatingSubreddits.forEach(e => s.push({
								id: "mod" + e.id,
								type: Js.Subreddit,
								model: e,
								telemetryNoun: "community_moderate"
							}))), n.multis.length > 0 && ((e, t, n) => {
								e.push({
									id: "header-multis",
									type: Js.Header,
									model: {
										displayText: r.fbt._("Custom feeds", null, {
											hk: "3K02MA"
										}).toString(),
										button: ({
											className: e,
											sendClickEvent: t
										}) => m.a.createElement("button", {
											onClick: () => {
												n(Object(Se.h)(tt.a.MULTIREDDIT_CREATE)), t()
											},
											className: Object(C.a)(e, ys.a.multiPlusButton)
										}, m.a.createElement(ms.a, {
											name: "add"
										})),
										buttonTelemetryNoun: "create_new_custom_feed"
									}
								}), t.multis.forEach(t => e.push({
									id: t.url,
									type: Js.Multi,
									model: t,
									telemetryNoun: "custom_feed"
								}))
							})(s, n, t), n.subscriptionsPending ? s.push({
								id: "subscriptions-pending",
								type: Js.LoadingState,
								model: {
									displayText: ""
								}
							}) : dr(s, n, o, t), ((e, t, n, s) => (Xs().forEach(e => t.push(e(n))), n.isEmployee && Zs.forEach(e => t.push(e(n))), Object(ks.a)(e) && t.push({
								id: is.PublicAccessNetwork,
								type: Js.GenericClickable,
								model: {
									onClick: () => {
										s(Object(As.a)(Ls.c[Ls.b.Rpan]))
									},
									displayText: r.fbt._("Reddit live", null, {
										hk: "3zuymj"
									}).toString(),
									icon: e => m.a.createElement(ms.a, zs({
										name: "video_live"
									}, e)),
									text: ({
										className: e
									}) => m.a.createElement("span", {
										className: e
									}, r.fbt._("Reddit Live", null, {
										hk: "93lry"
									}))
								},
								telemetryNoun: "rpan"
							}), t))(e, s, a, t), er.forEach(e => s.push(e(a))), s.push((() => ({
								id: is.DailyCharts,
								type: Js.GenericLink,
								model: {
									url: "/subreddits/leaderboard/",
									displayText: r.fbt._("Top Communities", null, {
										hk: "1KzP9v"
									}).toString(),
									icon: e => m.a.createElement(ms.a, zs({
										name: "list_numbered"
									}, e)),
									text: ({
										className: e
									}) => m.a.createElement("span", {
										className: e
									}, r.fbt._("Top Communities", null, {
										hk: "1KzP9v"
									}))
								},
								telemetryNoun: "daily_charts"
							}))()), Object(Hs.b)(e) && (e => e.push({
								id: is.NotificationsInbox,
								type: Js.GenericLink,
								model: {
									url: "/notifications",
									displayText: r.fbt._("Notifications", null, {
										hk: "2xenVO"
									}).toString(),
									icon: e => m.a.createElement(ms.a, zs({
										name: "notification"
									}, e)),
									text: ({
										className: e
									}) => m.a.createElement("span", {
										className: e
									}, r.fbt._("Notifications", null, {
										hk: "2xenVO"
									}))
								},
								telemetryNoun: "inbox"
							}))(s), l.forEach(e => s.push(e(a)))
						} else n.subscriptions.length || Object(yt.J)(e) ? Xs().forEach(e => s.push(e(null))) : $s.forEach(e => s.push(e(null))), s.push({
							id: "reddit-other",
							type: Js.Header,
							model: {
								displayText: r.fbt._("Other", null, {
									hk: "1etY05"
								}).toString()
							}
						}), l.forEach(e => s.push(e(null))), dr(s, n, o, t);
						return s
					}
				}),
				Ar = e => ({
					onHomeClicked: () => e(Object(wr.a)(() => n.e("Frontpage").then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))()),
					onGotoUrl: t => e(Object(h.b)(t)),
					onSubredditsRequested: () => {
						e(Object(br.e)()), e(Object(Sr.q)()), e(Object(wr.a)(() => Promise.all([n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))())
					},
					onActionDispatched: t => e(t)
				}),
				Fr = (e, t, n) => ({
					...e,
					...t,
					...n,
					unfilteredList: e.unfilteredListBuilder(t.onActionDispatched)
				});
			class Dr extends m.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = e.currentTarget.value,
							n = this.getList(t, this.props),
							s = Rr(n),
							r = s.first();
						this.setState({
							focusOrder: s,
							renderableList: n,
							currentInputText: e.currentTarget.value,
							focusedItemId: r ? r.id : void 0
						})
					}, this.onChangeFocusedListItemId = e => this.setState({
						focusedItemId: e
					}), this.onKeyDown = e => {
						if (e.key === kr.b.Escape && this.props.onClose && this.props.onClose(!0), e.key === kr.b.Tab && this.props.onClose && this.props.onClose(), e.key === kr.b.Enter) {
							const e = this.state.focusOrder.first(),
								t = this.state.focusedItemId || (e ? e.id : null);
							if (t) {
								const e = this.state.renderableList.get(t);
								e && e.type !== Js.Header && e.type !== Js.LoadingState && (this.fireTelemetryForListItem(e), e.type === Js.GenericClickable ? e.model.onClick() : Tr(e) ? window.open(e.model.url, "_blank") : this.props.onGotoUrl(e.model.url), this.props.onClose && this.props.onClose(!0))
							}
						}
						e.key === kr.b.ArrowDown && (e.preventDefault(), this.setState(e => {
							const t = this.findNextFocusableItem(),
								n = t ? e.renderableList.get(t) : void 0,
								s = n ? n.model.displayText : e.currentInputText;
							if (t) {
								const e = document.getElementById(`focus-${t}`);
								e && e.scrollIntoView({
									block: "nearest"
								})
							}
							return {
								currentInputText: s,
								focusedItemId: t
							}
						})), e.key === kr.b.ArrowUp && (e.preventDefault(), this.setState(e => {
							const t = this.findPrevFocusableItem(),
								n = t ? e.renderableList.get(t) : void 0,
								s = n ? n.model.displayText : e.currentInputText;
							if (t) {
								const e = document.getElementById(`focus-${t}`);
								e && e.scrollIntoView({
									block: "nearest"
								})
							}
							return {
								currentInputText: s,
								focusedItemId: t
							}
						}))
					}, this.fireTelemetryForListItem = e => {
						let t;
						switch (e.id) {
							case is.Coins:
							case is.Premium:
								Object(Pr.e)(Pr.a.GoldPayment, !0), t = Object(Pr.c)(Pr.a.GoldPayment)
						}
						switch (e.type) {
							case Js.Category:
							case Js.GenericLink:
							case Js.GenericClickable:
							case Js.Multi:
							case Js.Profile:
							case Js.Subreddit:
								this.props.sendEvent(n => ({
									...Object(xt.o)(n),
									...t ? {
										correlationId: t
									} : null,
									customFeed: e.type === Js.Multi ? Object(xt.n)(n, e.model.url) : null,
									source: "community_nav",
									action: "click",
									noun: e.telemetryNoun
								}));
								break;
							case Js.Header: {
								const {
									buttonTelemetryNoun: t
								} = e.model;
								t && this.props.sendEvent(e => ({
									...Object(xt.o)(e),
									source: "community_nav",
									action: "click",
									noun: t
								}));
								break
							}
						}
					}, this.state = {
						currentInputText: "",
						focusedItemId: null,
						focusOrder: Rr(e.unfilteredList),
						renderableList: e.unfilteredList
					}, this.inputRef = m.a.createRef()
				}
				componentDidMount() {
					"complete" === document.readyState ? this.props.onSubredditsRequested() : window.addEventListener("load", this.props.onSubredditsRequested), this.props.canAutofocus && setTimeout(() => !!this.inputRef.current && this.inputRef.current.focus())
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = this.state.currentInputText,
						n = this.getList(t, e),
						s = Rr(n);
					this.setState({
						focusOrder: s,
						renderableList: n
					})
				}
				getList(e, t) {
					if (e) {
						const n = new Vs.a("id"),
							s = new RegExp(e, "ig");
						t.unfilteredList.forEach(e => {
							switch (e.type) {
								case Js.Category:
								case Js.GenericLink:
								case Js.Multi:
								case Js.Profile:
								case Js.Subreddit:
									e.model.displayText.match(s) && n.push(e);
									break;
								case Js.Header: {
									const t = n.last();
									t && t.type === Js.Header && n.pop(), n.push(e);
									break
								}
								case Js.LoadingState:
							}
						});
						const r = n.last();
						return r && r.type === Js.Header && n.pop(), n
					}
					return t.unfilteredList
				}
				findNextFocusableItem() {
					const e = this.state.focusOrder.first();
					if (this.state.focusedItemId) {
						const t = this.state.focusOrder.getNode(this.state.focusedItemId);
						if (t) return t.next ? t.next.value.id : t.value.id;
						if (e) return e.id
					} else if (e) return e.id
				}
				findPrevFocusableItem() {
					const e = this.state.focusOrder.last();
					if (this.state.focusedItemId) {
						const t = this.state.focusOrder.getNode(this.state.focusedItemId);
						if (t) return t.prev ? t.prev.value.id : t.value.id;
						if (e) return e.id
					} else if (e) return e.id
				}
				render() {
					const e = this.state.renderableList.toArray(),
						t = this.state.focusedItemId ? this.state.renderableList.get(this.state.focusedItemId) : null;
					return m.a.createElement("div", {
						role: "menu",
						className: this.props.className
					}, m.a.createElement("div", {
						"aria-live": "assertive",
						"aria-label": t && t.model.displayText ? `${t.model.displayText} ${r.fbt._("selected",null,{hk:"QqrSS"})}` : ""
					}), m.a.createElement("input", {
						autoFocus: this.props.canAutofocus,
						"aria-label": r.fbt._("Start typing to filter your communities or use up and down to select.", null, {
							hk: "1AB1YU"
						}),
						className: Ir.a.filter,
						id: "header-subreddit-filter",
						placeholder: r.fbt._("Filter", null, {
							hk: "oqdpz"
						}),
						onChange: this.onChange,
						onKeyDown: this.onKeyDown,
						ref: this.inputRef
					}), e.map((e, t) => {
						const n = {
							id: `focus-${e.id}`,
							isFocused: this.state.focusedItemId === e.id,
							key: `subreddit-list-key-${e.id}`,
							onFocus: () => this.onChangeFocusedListItemId(e.id),
							onMouseEnter: () => this.onChangeFocusedListItemId(e.id),
							onMouseLeave: () => this.onChangeFocusedListItemId(void 0),
							onClick: () => {
								this.fireTelemetryForListItem(e), this.props.onClose && this.props.onClose(!0), e.id === is.Home && this.props.onHomeClicked(), e.type === Js.GenericClickable && e.model.onClick()
							},
							isCurrentPage: this.props.currentPage.type === e.id
						};
						switch (e.type) {
							case Js.GenericClickable:
								return m.a.createElement(Rs, Mr({}, n, {
									className: Ir.a.item,
									label: e.model.displayText,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Js.Category:
							case Js.GenericLink:
								return m.a.createElement(Rs, Mr({}, n, {
									externalLink: Tr(e),
									className: Ir.a.item,
									to: e.model.url,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Js.Header: {
								const n = e.model.button;
								return m.a.createElement(pr, {
									className: Ir.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								}, e.model.displayText, n && m.a.createElement(n, {
									className: Ir.a.headerButton,
									sendClickEvent: () => this.fireTelemetryForListItem(e)
								}))
							}
							case Js.LoadingState:
								return m.a.createElement(jr, {
									className: Ir.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								});
							case Js.Multi:
								return m.a.createElement(xr, Mr({}, n, {
									className: Ir.a.item,
									isFavorite: e.model.isFavorited,
									model: e.model,
									type: Js.Multi
								}));
							case Js.Profile:
								return m.a.createElement(xr, Mr({}, n, {
									className: Ir.a.item,
									isFavorite: this.props.favoriteProfiles.has(e.model.id),
									model: e.model,
									type: Js.Profile
								}));
							case Js.Subreddit:
								return m.a.createElement(xr, Mr({}, n, {
									className: Ir.a.item,
									isFavorite: this.props.favoriteSubreddits.has(e.model.id),
									model: e.model,
									type: Js.Subreddit
								}))
						}
					}))
				}
			}
			const Br = Object(p.b)(Lr, Ar, Fr)(Object(R.c)(Dr)),
				Ur = Object(p.b)(Lr, Ar, Fr)(Object(R.c)(Object(_r.b)(Dr))),
				Gr = Object(zt.u)({
					isCommentsPage: zt.x,
					pageLayer: e => e
				}),
				Hr = Object(g.c)({
					currentPage: Ns,
					hideNSFWPref: yt.C,
					isDropdownOpen: ps.a,
					isLoggedIn: yt.J,
					isOverlayOpen: At.i,
					isPinnedSubscriptionsMenuDisabled: bs.a,
					isSubscriptionsPinned: bs.b
				});
			class Wr extends m.a.Component {
				constructor(e) {
					super(e), this.state = {
						preventFocus: !1
					}, this.handleKeyboardShortcut = e => {
						if ("q" === e.key && !this.props.isSubscriptionsPinned) {
							if (document.activeElement && ("input" === document.activeElement.tagName.toLowerCase() || "textarea" === document.activeElement.tagName.toLowerCase() || "true" === document.activeElement.getAttribute("contenteditable"))) return;
							this.props.openDropdown()
						}
					}, this.enablePreventFocus = () => this.setState({
						preventFocus: !0
					}), this.disablePreventFocus = () => setTimeout(() => this.setState({
						preventFocus: !1
					})), this.close = e => {
						this.enablePreventFocus(), this.props.closeDropdown(), this.disablePreventFocus(), e && Object(us.d)()
					}, this.onButtonFocus = () => {
						this.props.isSubscriptionsPinned || this.state.preventFocus || this.props.openDropdown(), this.state.preventFocus && this.disablePreventFocus()
					}, this.toggleDropdown = e => {
						this.props.isSubscriptionsPinned || (this.props.sendEvent(e => ({
							...Object(xt.o)(e),
							source: "nav",
							action: "click",
							noun: this.props.isDropdownOpen ? "close_community_nav" : "open_community_nav"
						})), this.props.isDropdownOpen && this.enablePreventFocus(), this.props.toggleDropdown(), this.props.isDropdownOpen || this.disablePreventFocus())
					}, this.renderHeaderSubreddit = e => {
						const {
							currentPage: t,
							className: n,
							hideNSFWPref: s,
							isCommentsPage: o,
							isLoggedIn: a,
							isOverlayOpen: i
						} = this.props, c = this.props.isDropdownOpen && !this.props.isSubscriptionsPinned, d = i || !a && o;
						return m.a.createElement("div", {
							"aria-label": r.fbt._("Start typing to filter your communities or use up and down to select.", null, {
								hk: "2PXR4j"
							}),
							className: Object(C.a)(ys.a.container, n, {
								[ys.a.mOpen]: c,
								[ys.a.mNotPinned]: !this.props.isSubscriptionsPinned,
								[ys.a.mPinned]: this.props.isSubscriptionsPinned,
								[ys.a.containerExp]: e
							}),
							onClickCapture: this.stopPropagation,
							role: "navigation"
						}, m.a.createElement("button", {
							className: ys.a.selector,
							onMouseDown: this.props.isSubscriptionsPinned ? this.props.onLocationClick : this.toggleDropdown,
							onFocus: this.onButtonFocus,
							tabIndex: this.state.preventFocus || this.props.isSubscriptionsPinned ? -1 : 0
						}, m.a.createElement("span", {
							className: ys.a.containerText
						}, " ", function(e) {
							switch (e.type) {
								case is.Acknowledgements:
									return js(r.fbt._("Acknowledgements", null, {
										hk: "32JBVF"
									}).toString());
								case is.All:
									return js(r.fbt._("All", null, {
										hk: "2gaHOy"
									}).toString());
								case is.Appeal:
									return js(r.fbt._("Appeal", null, {
										hk: "2dMFkN"
									}).toString());
								case is.Avatar:
									return js(r.fbt._("Avatar", null, {
										hk: "4E0V0C"
									}).toString());
								case is.Coins:
									return js(r.fbt._("Coins", null, {
										hk: "3ZpUbG"
									}).toString());
								case is.Community:
									return js(e.model.displayText, !0);
								case is.CommunitySearch:
									return js(r.fbt._("Subreddit Results", null, {
										hk: "19qRVH"
									}).toString());
								case is.CreateCommunity:
									return js(r.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case is.CreatePost:
									return js(r.fbt._("Create Post", null, {
										hk: "30V40V"
									}).toString());
								case is.DailyCharts:
									return js(r.fbt._("Top Communities", null, {
										hk: "1sWIEu"
									}).toString());
								case is.GlobalSearch:
									return js(r.fbt._("Search Results", null, {
										hk: "scJwR"
									}).toString());
								case is.Geotagging:
									return js(r.fbt._("Help Out", null, {
										hk: "1RN9v2"
									}).toString());
								case is.Home:
									return js(r.fbt._("Home", null, {
										hk: "amHQd"
									}).toString());
								case is.Inbox:
									return js(r.fbt._("Messages", null, {
										hk: "25MBSp"
									}).toString());
								case is.ModListing:
									return js("r/Mod");
								case is.ModMail:
									return js(r.fbt._("Modmail", null, {
										hk: "of9AC"
									}).toString());
								case is.ModQueue:
									return js(r.fbt._("Mod Queue", null, {
										hk: "3hdHhb"
									}).toString());
								case is.Multi:
									return js(e.model.displayText, !0);
								case is.NotificationsInbox:
									return js(r.fbt._("Notifications", null, {
										hk: "FiFRe"
									}).toString());
								case is.Popular:
									return js(r.fbt._("Popular", null, {
										hk: "1rTNHl"
									}).toString());
								case is.WrappedReddit:
									return js(r.fbt._("Reddit Recap", null, {
										hk: "1IMaHW"
									}).toString());
								case is.Powerups:
									return js(r.fbt._("Powerups", null, {
										hk: "1ZXjgq"
									}).toString());
								case is.Predictions:
									return js(r.fbt._("Predictions", null, {
										hk: "47Cyyb"
									}).toString());
								case is.Premium:
									return js(r.fbt._("Premium", null, {
										hk: "x0xKv"
									}).toString());
								case is.PublicAccessNetwork:
									return js(r.fbt._("Reddit Live", null, {
										hk: "4tlHX5"
									}).toString());
								case is.Report:
									return js(r.fbt._("Report", null, {
										hk: "4oVcnd"
									}).toString());
								case is.Settings:
									return js(r.fbt._("User Settings", null, {
										hk: "hcLHW"
									}).toString());
								case is.SubredditCreation:
									return js(r.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case is.Talk:
									return js(r.fbt._("Talk", null, {
										hk: "gVQjb"
									}).toString());
								case is.Topic:
									return js(e.model);
								case is.Unknown:
									return js("");
								case is.UserDataRequest:
									return js(r.fbt._("Request your Reddit data", null, {
										hk: "3LqHku"
									}).toString());
								case is.UserProfile:
									return js(e.model.displayText, !0);
								case is.UserProfileName:
									return js(e.name, !0);
								case is.ViewDraft:
									return js(r.fbt._("View Draft", null, {
										hk: "3k2k9a"
									}).toString())
							}
						}(t), " "), function(e, t) {
							const n = e => m.a.createElement(ms.a, {
								name: e,
								isFilled: !0,
								className: ys.a.defaultIcon
							});
							switch (e.type) {
								case is.All:
									return n("all");
								case is.Acknowledgements:
								case is.Appeal:
									return n("edit");
								case is.Avatar:
									return n("avatar_style");
								case is.Coins:
									return n("coins");
								case is.Community:
								case is.CommunitySearch: {
									const n = Object(hs.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(gs.b, {
										className: ys.a.subredditIcon,
										iconUrl: n.url,
										primaryColor: n.color
									})
								}
								case is.CreateCommunity:
								case is.CreatePost:
									return n("add");
								case is.DailyCharts:
									return n("list_numbered");
								case is.Geotagging:
									return n("custom_feed");
								case is.GlobalSearch:
									return n("search");
								case is.Home:
									return n("home");
								case is.Inbox:
									return m.a.createElement(Os.a, {
										wrapperClassName: ys.a.userIcon
									});
								case is.ModListing:
									return n("mod_queue");
								case is.ModMail:
									return n("mod_mail");
								case is.ModQueue:
									return n("mod_queue");
								case is.Multi:
									return m.a.createElement("img", {
										src: e.model.icon,
										className: ys.a.customFeedIcon
									});
								case is.NotificationsInbox:
									return n("notification");
								case is.Popular:
									return n("popular");
								case is.WrappedReddit:
									return m.a.createElement("img", {
										src: vs.a,
										className: ys.a.wrappedRedditLogoActive
									});
								case is.Powerups:
									return n("powerup");
								case is.Predictions:
									return n("prediction");
								case is.Premium:
									return n("premium");
								case is.PublicAccessNetwork:
									return n("video_live");
								case is.Report:
									return n("report");
								case is.Settings:
									return m.a.createElement(Os.a, {
										wrapperClassName: ys.a.userIcon
									});
								case is.SubredditCreation:
									return n("add");
								case is.Talk:
									return n("live");
								case is.Topic:
									return n("custom_feed");
								case is.Unknown:
									return m.a.createElement("div", {
										className: ys.a.unknownIcon
									});
								case is.UserDataRequest:
									return n("add");
								case is.UserProfile: {
									const n = Object(hs.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(Cs.a, {
										className: ys.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										omitResponsivePresenceWrapper: !0,
										userName: e.model.name
									})
								}
								case is.UserProfileName:
									return m.a.createElement("div", {
										className: ys.a.defaultIcon
									});
								case is.Unknown:
									return m.a.createElement("div", {
										className: ys.a.unknownIcon
									});
								case is.UserProfile: {
									const n = Object(hs.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(Cs.a, {
										className: ys.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										userName: e.model.name
									})
								}
								case is.ViewDraft:
									return n("edit")
							}
						}(t, s), !this.props.isSubscriptionsPinned && m.a.createElement(ms.a, {
							name: "caret_down",
							className: ys.a.caretDown
						})), c && !this.props.isPinnedSubscriptionsMenuDisabled && m.a.createElement(ms.a, {
							name: "side_menu",
							className: ys.a.pin,
							onClick: d ? void 0 : this.props.onPinSubscriptions
						}), c && m.a.createElement(Ur, {
							canAutofocus: !0,
							className: ys.a.listContainer,
							currentPage: t,
							onClose: this.close
						}))
					}
				}
				componentDidMount() {
					document.addEventListener("keyup", this.handleKeyboardShortcut)
				}
				componentWillUnmount() {
					document.removeEventListener("keyup", this.handleKeyboardShortcut)
				}
				shouldComponentUpdate(e, t) {
					return this.state.preventFocus !== t.preventFocus || (!(!this.props.isDropdownOpen && !e.isDropdownOpen) || (e.currentPage !== this.props.currentPage || e.isSubscriptionsPinned !== this.props.isSubscriptionsPinned))
				}
				stopPropagation(e) {
					e.nativeEvent.stopImmediatePropagation()
				}
				render() {
					return m.a.createElement(f.a.Consumer, null, this.renderHeaderSubreddit)
				}
			}
			var qr = Gr(Object(p.b)(Hr, (e, t) => ({
					closeDropdown: () => e(Object(S.f)()),
					onLocationRefresh: (n, s) => e(Object(ls.f)(n, t.pageLayer, s)),
					onPinSubscriptions: () => {
						e(Object(S.i)()), e(Object(S.f)())
					},
					openDropdown: () => e(Object(S.g)()),
					toggleDropdown: () => e(Object(S.h)())
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onLocationClick: n => t.onLocationRefresh(n, e.isOverlayOpen)
				}))(Object(R.c)(Wr))),
				Vr = n("./src/reddit/components/JumpToContent/index.tsx"),
				Kr = n("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				zr = n("./node_modules/history/esm/history.js"),
				Qr = n("./node_modules/lodash/isEmpty.js"),
				Jr = n.n(Qr),
				Zr = n("./node_modules/lodash/pick.js"),
				Yr = n.n(Zr),
				Xr = n("./node_modules/uuid/v4.js"),
				$r = n.n(Xr),
				eo = n("./src/lib/hooks/usePrevious.ts"),
				to = n("./src/lib/makeSearchKey/index.ts"),
				no = n("./src/reddit/actions/post.ts"),
				so = n("./src/reddit/actions/search.ts"),
				ro = n("./src/lib/makeApiRequest/index.ts"),
				oo = n("./src/lib/omitHeaders/index.ts"),
				ao = n("./src/reddit/constants/headers.ts");
			var io = n("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				co = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");
			const lo = e => async (t, n, {
				apiContext: s
			}) => {
				var r, o;
				const a = await ((e, t) => Object(ro.a)(Object(oo.a)(e, [ao.a]), {
					endpoint: `${e.apiUrl}/api/subreddit_autocomplete_v2.json`,
					method: O.jb.GET,
					data: {
						query: t
					}
				}))(s(), e);
				if (a.ok && (null === (o = null === (r = a.body) || void 0 === r ? void 0 : r.data) || void 0 === o ? void 0 : o.children)) {
					const n = (e => {
						const t = [],
							n = {};
						return e.forEach(e => {
							const s = e.data,
								r = e.kind;
							r === O.Ib.Subreddit ? (t.push(s.name), n[s.name] = Object(co.a)(s)) : r === O.Ib.Account && (t.push(s.subreddit.name), n[s.subreddit.name] = Object(io.a)(s.subreddit, s.name, s.accept_followers))
						}), {
							data: n,
							order: t
						}
					})(a.body.data.children);
					n && n.data && n.order && t(Object(so.o)({
						typeaheadSuggestions: n.data,
						order: n.order,
						searchQuery: e
					}))
				}
			};
			var uo, mo = n("./src/reddit/actions/search/trending.ts"),
				po = n("./src/reddit/components/SearchDropdown/index.tsx"),
				bo = n("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				ho = n("./src/reddit/constants/history.ts"),
				fo = n("./src/reddit/constants/parameters.ts"),
				go = n("./src/reddit/helpers/getSearchUrl/index.ts"),
				Co = n("./src/reddit/helpers/isArrayEqual.ts"),
				Oo = n("./src/reddit/helpers/trackers/screenview.ts"),
				vo = n("./src/reddit/helpers/trackers/searchResults.ts"),
				xo = n("./src/reddit/hooks/usePageLayer.ts"),
				yo = n("./src/reddit/models/Search/index.ts"),
				Eo = n("./src/reddit/pages/SearchResults/index.tsx"),
				jo = n("./src/reddit/selectors/searchFix.ts"),
				_o = n("./src/reddit/selectors/searchResults.ts"),
				So = n("./src/reddit/selectors/trending.ts"),
				ko = n("./src/reddit/helpers/search/searchQueryId.ts"),
				Po = n("./src/reddit/controls/Search/index.m.less"),
				wo = n.n(Po),
				No = n("./node_modules/lodash/debounce.js"),
				Io = n.n(No),
				Mo = n("./src/reddit/components/Pill/index.tsx"),
				To = n("./src/reddit/components/Pill/PillText/index.m.less"),
				Ro = n.n(To);
			! function(e) {
				e.DAY = "DAY", e.NIGHT = "NIGHT"
			}(uo || (uo = {}));
			const Lo = {
					[uo.DAY]: Ro.a.pillTextVariantDay,
					[uo.NIGHT]: Ro.a.pillTextVariantNight
				},
				Ao = e => m.a.createElement("div", {
					className: Object(C.a)(Ro.a.pillText, Lo[e.variant])
				}, e.children);
			var Fo = n("./src/reddit/controls/Search/CommunityPill/index.m.less"),
				Do = n.n(Fo);
			const Bo = Object(g.c)({
					nightmode: yt.W
				}),
				Uo = Object(p.b)(Bo)(({
					nightmode: e,
					subreddit: t
				}) => m.a.createElement(Mo.a, {
					"aria-hidden": !0,
					className: Do.a.communityPill,
					"data-testid": "community-search-pill"
				}, m.a.createElement(Ao, {
					variant: e ? uo.NIGHT : uo.DAY
				}, m.a.createElement(gs.b, {
					className: wo.a.subredditIcon,
					subredditOrProfile: t
				}), t.displayText)));
			var Go = n("./src/reddit/controls/Search/SearchBar/index.m.less"),
				Ho = n.n(Go);
			const Wo = ({
				inputRef: e,
				searchQuery: t,
				showCommunityPill: n,
				subreddit: s,
				onChange: o,
				onFormSubmit: a,
				onFocusSearchBar: i,
				onKeyDown: c,
				toggleDropdownAndGetTrending: d
			}) => {
				const l = m.a.useContext(f.a),
					u = n && s ? r.fbt._("Search within {subredditName}", [r.fbt._param("subredditName", s.displayText)], {
						hk: "2B6J3t"
					}) : r.fbt._("Search all of Reddit", null, {
						hk: "1Fi1f5"
					});
				return m.a.createElement("form", {
					action: "/search/",
					autoComplete: "off",
					className: Object(C.a)(Ho.a.searchBar, l && Ho.a.searchBarExp),
					method: "get",
					onSubmit: a,
					onFocus: i,
					role: "search"
				}, m.a.createElement("label", {
					className: Ho.a.inputLabel,
					htmlFor: "header-search-bar"
				}, m.a.createElement("div", {
					"aria-hidden": !0,
					className: Ho.a.iconContainer
				}, m.a.createElement(ms.a, {
					name: "search",
					className: Ho.a.icon
				})), m.a.createElement(Kr.a, {
					"aria-live": "assertive"
				}, u), n && s && m.a.createElement(Uo, {
					subreddit: s
				})), m.a.createElement("input", {
					id: "header-search-bar",
					name: "q",
					className: Ho.a.input,
					onChange: Io()((function() {
						var t;
						o((null === (t = null == e ? void 0 : e.current) || void 0 === t ? void 0 : t.value) || "")
					}), 200),
					onClick: d,
					onKeyDown: c,
					placeholder: r.fbt._("Search Reddit", null, {
						hk: "34Vfom"
					}),
					ref: e,
					type: "search",
					defaultValue: t
				}))
			};

			function qo({
				className: e
			}) {
				var t, n, s;
				const r = Object(xo.a)(),
					o = Object(zt.Z)(r),
					a = Object(zt.W)(r),
					{
						nsfwSessionSetting: i,
						refreshNsfwSessionSettingExpiryTime: c
					} = Object(bo.c)(),
					[d, l] = Object(u.useState)(-1),
					[b, f] = Object(u.useState)([]),
					[g, O] = Object(u.useState)(!1),
					[v, x] = Object(u.useState)({}),
					[y, E] = Object(u.useState)([]),
					[j, _] = Object(u.useState)(null),
					S = Object(u.useRef)(null),
					k = Object(u.useRef)(null),
					P = Object(R.b)(),
					w = Object(p.d)(),
					N = Object(p.e)(At.b),
					I = Object(p.e)(At.d),
					M = Object(p.e)(yt.k),
					T = Object(p.e)(_o.l),
					L = Object(p.e)(_o.k),
					A = Object(p.e)(yt.J),
					F = Object(p.e)(_o.m),
					D = Object(p.e)(yt.W),
					B = Object(p.e)(At.r),
					U = Object(p.e)(e => Object(zt.ab)(e, {
						pageLayer: r
					})),
					G = Object(p.e)(e => Object(zt.r)(e, {
						pageLayer: r
					})),
					H = Object(p.e)(e => Object(zt.e)(e, {
						pageLayer: r
					})),
					W = (null === (t = null == r ? void 0 : r.routeMatch) || void 0 === t ? void 0 : t.match) && Object(Eo.getSearchKey)(null === (n = null == r ? void 0 : r.routeMatch) || void 0 === n ? void 0 : n.match, a),
					q = Object(p.e)(e => W ? Object(_o.p)(e, {
						listingKey: W
					}) : void 0),
					V = Object(p.e)(e => Object(So.a)(e, yo.d.dropdown)),
					K = Object(p.e)(_o.r),
					z = Object(p.e)(yt.db),
					Q = Object(eo.a)(G),
					J = Object(eo.a)(o),
					Z = Object(eo.a)(K),
					Y = Object(eo.a)(V),
					X = ((null === (s = k.current) || void 0 === s ? void 0 : s.value) || "").trim(),
					$ = function() {
						const e = G && G.icon ? G.icon.url : "",
							t = null == G ? void 0 : G.displayText,
							n = !!G && G.isNSFW,
							s = yo.b.text;
						return {
							id: $r()(),
							searchQuery: X,
							type: s,
							section: yo.c.recent,
							subredditOrProfileRestrictedName: t,
							displayInfo: {
								iconUrl: e,
								isNSFW: n
							}
						}
					}(),
					ee = N ? Object(xt.v)(N) : r ? Object(xt.v)(r) : void 0,
					te = v[X];
				Object(u.useEffect)(() => {
					ne()
				}, [Y, Z, K, V]), Object(u.useEffect)(() => {
					Q || !G || F || oe()
				}, [Q, G, F]), Object(u.useEffect)(() => {
					Jr()(K) || o ? le(o || "") : de()
				}, [J, o]);
				const ne = () => {
						const e = Object(Co.a)(Z, K),
							t = Object(Co.a)(Y, V);
						if (!e || !t) {
							const t = K.length ? K : [...y, ...V];
							f(t), !e && K.length && K.forEach(e => {
								be(e.isProfile ? xt.b.TypeaheadProfile : xt.b.TypeaheadSubreddit, xt.c.Search, e.searchQuery)
							})
						}
					},
					se = e => w(Object(so.p)({
						searchQuery: e
					})),
					re = () => w(Object(so.k)()),
					oe = () => w(Object(so.m)()),
					ae = (e, t) => {
						e.preventDefault(), ((e, t, n, s) => {
							w(Object(h.b)(Object(zr.c)({
								pathname: e,
								search: t,
								state: {
									fromPage: n,
									[ho.b.SearchOriginPage]: s
								}
							})))
						})(t.url, t.qs, {
							routeName: B,
							subredditName: I
						}, ee)
					},
					ie = async () => {
						V.length || g || (O(!0), await (() => w(Object(mo.b)(yo.d.dropdown)))(), O(!1))
					}, ce = e => {
						A && M && E(Object(Ut.Lb)({
							...e,
							section: yo.c.recent
						}, M.id))
					}, de = () => {
						l(-1), _(null), le(""), se("")
					};

				function le(e) {
					k.current && (k.current.value = e)
				}
				const ue = (e, t, n, s) => {
						const r = {
							displayQuery: e,
							rawQuery: t,
							structureType: n,
							searchQuery: o
						};
						P(Object(vo.q)(s, r))
					},
					me = (e, t, n) => {
						P(Object(vo.s)(e, t, n))
					},
					pe = (e, t, n, s) => {
						P(Object(vo.u)(e, t, n, s))
					},
					be = (e, t, n, s) => {
						const r = {
							displayQuery: n,
							rawQuery: s || n,
							searchQuery: o,
							structureType: t
						};
						P(Object(vo.r)(e, r))
					},
					he = e => {
						const t = b[e] || null,
							n = t ? t.searchQuery : "";
						l(e), le(n), _(t)
					};
				return m.a.createElement("div", {
					className: Object(C.a)(wo.a.relativeWrapper, ys.a.container, e, {
						"m-open": T
					}),
					id: po.b,
					ref: S
				}, m.a.createElement(Wo, {
					inputRef: k,
					onChange: e => {
						const t = e.trim();
						ko.a.get(t), se(t), !(!L || !L[t]) || (t ? (async e => {
							v[e] || (v[e] = !0, x({
								...v
							}), await w(lo(e)), v[e] = !1, x({
								...v
							}))
						})(t) : ie())
					},
					searchQuery: X,
					onFormSubmit: e => {
						e.preventDefault(), X.trim() && ((async e => {
							var t;
							if (re(), !X.trim()) return;
							let n = {
								...yo.a
							};
							if (j && j.searchQuery === X ? ((n = j).id || (n.id = $r()()), n.section === yo.c.recent ? me(X, n, d) : n.section === yo.c.typeahead ? pe(X, n, d, b.filter(e => e.isSubreddit)) : ue(X, X, xt.c.Search, xt.b.Recent)) : n = $, ce(n), re(), !n.searchQuery) return;
							const s = Object(go.a)({
								subreddit: G,
								multireddit: H,
								searchItem: n,
								searchOptions: void 0,
								shouldSearchSubreddit: U,
								includeNsfwResults: z && i
							});
							ae(e, s), n.isTypeaheadSuggestion && de(), c(), null === (t = k.current) || void 0 === t || t.blur()
						})(e), P(Object(vo.j)(xt.a.FullSearchButton, Object(to.e)({
							q: X
						}), U, r || void 0)), re())
					},
					onFocusSearchBar: () => {
						Object(Pr.c)(Pr.a.SearchResults) || Object(Pr.e)(Pr.a.SearchResults), P(Object(vo.j)(xt.a.SearchBar, Object(to.e)({
							q: o
						}), U, r || void 0))
					},
					onKeyDown: e => {
						if (e.key === kr.b.Escape || e.key === kr.b.Tab) re();
						else if (e.key === kr.b.ArrowDown) {
							if (e.preventDefault(), 0 === b.length || !T) return;
							if (d >= b.length - 1) return;
							he(d + 1)
						} else if (e.key === kr.b.ArrowUp) {
							if (e.preventDefault(), 0 === b.length || !T) return;
							if (-1 === d) return;
							he(d - 1)
						} else e.key === kr.b.Backspace && !X && U && F && (P(() => Object(vo.d)(G)), (() => w(Object(so.j)()))())
					},
					showCommunityPill: U,
					subreddit: G,
					toggleDropdownAndGetTrending: () => {
						if (V.length || ie(), M) {
							const e = Object(Ut.K)(M.id);
							e.length > 0 && (E(A ? e : []), f([...e, ...V]), e.forEach(e => {
								be(xt.b.Recent, xt.c.Recent, e.searchQuery)
							}))
						}
						if (!T) {
							(() => w(Object(so.l)()))();
							const e = Object(to.e)(Yr()(a || {}, fo.u));
							P(Object(Oo.u)(e, null != r ? r : void 0, i, Object(jo.b)({
								pageLayer: r
							}), q))
						}
					}
				}), m.a.createElement(po.c, {
					container: S.current,
					focusedItemIndex: d,
					searchOriginPage: ee,
					isOpen: T,
					isTrendingPending: g,
					isTypeaheadPending: te,
					itemList: b,
					nightmode: D,
					recentSearches: y,
					trendingItems: V,
					searchItem: $,
					typeaheadSuggestions: K,
					onClearSearchQuery: de,
					onClose: re,
					onRemoveRecentSearch: e => {
						M && 0 !== y.length && (Object(Ut.Y)(e, M.id), E(y.filter(t => t.searchQuery !== e.searchQuery)), l(-1))
					},
					onSendSearchClickRecentEvent: me,
					onSendSearchClickTypeaheadEvent: pe,
					onSetRecentSearch: ce,
					onUpdateSearchQuery: le,
					fireAdPixelsOfType: (e, t) => w(Object(no.z)(e, t))
				}))
			}
			var Vo = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				Ko = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				zo = n("./src/reddit/selectors/responsivePage.ts"),
				Qo = n("./src/reddit/components/Header/MwebResponsiveHeader/index.m.less"),
				Jo = n.n(Qo);
			var Zo = e => {
					const {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: Object(C.a)(Jo.a.Container, t)
					}, m.a.createElement("a", {
						"aria-label": r.fbt._("Home", null, {
							hk: "1u0Rxp"
						}),
						className: Jo.a.HomeLink,
						href: U.a.redditUrl
					}, m.a.createElement(Vo.a, {
						className: Jo.a.Snoo
					}), m.a.createElement(Ko.a, {
						className: Jo.a.Wordmark,
						color: "inherit"
					})))
				},
				Yo = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				Xo = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				$o = n("./src/reddit/hooks/useTracking.ts");
			var ea = e => m.a.createElement("svg", {
				className: e.className,
				id: "flat",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				fill: "#ff4500"
			}, m.a.createElement("path", {
				fill: "inherit",
				d: "M19.625.375H5.7812V1.8062H2.6089V3.75H.5127V19.625H14.0356V17.6816h2.0962V14.7988H19.625ZM14.8818,16.4316H12.7856V18.375H1.7627V5H3.8589V3.0562H5.7812V14.7988h9.1006Zm3.4932-2.8828H7.0312V1.625H18.375Z"
			}), m.a.createElement("path", {
				fill: "inherit",
				d: "M9.83,8.6869h.8086a2.5968,2.5968,0,0,0,1.2324-.2827,2.0363,2.0363,0,0,0,.8281-.7906,2.2972,2.2972,0,0,0,.2935-1.1709,2.1873,2.1873,0,0,0-.2872-1.1347,1.8957,1.8957,0,0,0-.8281-.749,2.9046,2.9046,0,0,0-1.2788-.2627H8.3815V10.807H9.83Zm0-3.1006h.68a1.1725,1.1725,0,0,1,.78.2427.8044.8044,0,0,1,.2852.6582.9157.9157,0,0,1-.124.4746.86.86,0,0,1-.3531.3291,1.1443,1.1443,0,0,1-.5346.12H9.83Z"
			}), m.a.createElement("path", {
				fill: "inherit",
				d: "M15.5881,9.7269a.6642.6642,0,0,1-.2827.0552.8486.8486,0,0,1-.5079-.1655,1.1369,1.1369,0,0,1-.3491-.3911l-1.122.4682a1.785,1.785,0,0,0,.4487.6143,2.18,2.18,0,0,0,.6909.4194,2.2847,2.2847,0,0,0,.8218.15,2.1,2.1,0,0,0,.8945-.19,1.5993,1.5993,0,0,0,.6494-.5323,1.325,1.325,0,0,0,.2407-.78,1.1177,1.1177,0,0,0-.2407-.7422,1.5127,1.5127,0,0,0-.519-.4151,3.6685,3.6685,0,0,0-.5923-.2119c-.2207-.0591-.3936-.11-.5186-.1548a1.0759,1.0759,0,0,1-.3159-.1679.3052.3052,0,0,1-.1284-.2471.3264.3264,0,0,1,.1392-.2671.547.547,0,0,1,.3466-.1084.6423.6423,0,0,1,.4156.1348,1.09,1.09,0,0,1,.2558.28l1.0694-.45a1.4624,1.4624,0,0,0-.3843-.53,1.9609,1.9609,0,0,0-.6294-.3755,2.1994,2.1994,0,0,0-.78-.1367,2.0044,2.0044,0,0,0-.8682.1831,1.4665,1.4665,0,0,0-.6069.5146,1.3217,1.3217,0,0,0-.2212.751,1.1947,1.1947,0,0,0,.3491.8857,2.0947,2.0947,0,0,0,.9322.51c.0146.0029.0556.0151.1235.0356a3.8108,3.8108,0,0,1,.669.2208q.2584.1192.2587.3178a.318.318,0,0,1-.06.1812A.4179.4179,0,0,1,15.5881,9.7269Z"
			}));
			var ta = e => m.a.createElement("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className,
					viewBox: "0 0 20 20"
				}, m.a.createElement("path", {
					d: "M14.906 9.214a4.27 4.27 0 0 1-2.229 1.42 7.31 7.31 0 0 1-2.36.07 3.57 3.57 0 0 0-3.354 1.459 2.627 2.627 0 0 0-.495 1.441l-.018 1.009.94-.37a2.995 2.995 0 0 1 2.262.277c-.298.19-.583.411-.861.627a8.176 8.176 0 0 1-.93.66 1.2 1.2 0 0 1-.945.2l-.714-.2-.132.73a.987.987 0 0 1-.388.617 2.258 2.258 0 0 1-.656.247 3.075 3.075 0 0 0-1.453.727 2.622 2.622 0 0 1-.057-.935 3.06 3.06 0 0 1 .835-1.28l.722-.819-.744-.402a4.412 4.412 0 0 1-1.854-2.58 6.867 6.867 0 0 1 .29-4.115 7.31 7.31 0 0 1 6.89-4.852l.22.003a9.215 9.215 0 0 1 1.863.247A2.4 2.4 0 0 0 13.34 7.58c.058 0 .116-.002.176-.006a2.377 2.377 0 0 0 1.788-1.01l.152-.204a5.493 5.493 0 0 1 .12 1.024 2.872 2.872 0 0 1-.67 1.83Z"
				}), m.a.createElement("circle", {
					cx: "10.753",
					cy: "8.702",
					r: "1.006"
				}), m.a.createElement("path", {
					d: "M13.516 7.573c-.06.005-.118.007-.176.007a2.398 2.398 0 0 1-1.603-4.185 9.215 9.215 0 0 0-1.864-.246 8.467 8.467 0 0 0-.22-.004 7.31 7.31 0 0 0-6.89 4.852 6.867 6.867 0 0 0-.289 4.116 4.412 4.412 0 0 0 1.855 2.579l.744.402-.722.82a3.06 3.06 0 0 0-.835 1.279 2.622 2.622 0 0 0 .057.936 3.075 3.075 0 0 1 1.453-.728 2.258 2.258 0 0 0 .656-.247.987.987 0 0 0 .388-.617l.132-.73.713.2a1.2 1.2 0 0 0 .946-.2 8.176 8.176 0 0 0 .93-.66c.278-.216.563-.436.861-.627a2.995 2.995 0 0 0-2.263-.276l-.939.37.018-1.01a2.627 2.627 0 0 1 .495-1.441 3.57 3.57 0 0 1 3.354-1.459 7.31 7.31 0 0 0 2.36-.07 4.27 4.27 0 0 0 2.229-1.42 2.872 2.872 0 0 0 .67-1.83 5.493 5.493 0 0 0-.12-1.024l-.152.204a2.377 2.377 0 0 1-1.788 1.01Z"
				}), m.a.createElement("path", {
					d: "M18.753.342A1.155 1.155 0 0 0 17.31.127l-4.05 2.325a9.945 9.945 0 0 0-3.347-.653A8.594 8.594 0 0 0 1.5 7.523a8.261 8.261 0 0 0-.325 4.961A6.162 6.162 0 0 0 3 15.408a3.244 3.244 0 0 0-.825 1.637 3.638 3.638 0 0 0 .667 2.63.868.868 0 0 0 .696.355.835.835 0 0 0 .169-.017.92.92 0 0 0 .703-.681c.087-.35.338-.452.981-.631a3.073 3.073 0 0 0 1.116-.478 2.329 2.329 0 0 0 .692-.835 2.817 2.817 0 0 0 1.329-.408 9.23 9.23 0 0 0 1.09-.766 5.376 5.376 0 0 1 1.216-.794.86.86 0 0 0 .537-.626.936.936 0 0 0-.255-.848 4.32 4.32 0 0 0-2.93-1.165 2.262 2.262 0 0 1 1.99-.735 8.295 8.295 0 0 0 2.87-.114 5.646 5.646 0 0 0 2.907-1.866 4.21 4.21 0 0 0 .973-2.682 6.432 6.432 0 0 0-.192-1.484 3.042 3.042 0 0 0-.142-.41c-.055-.136-.127-.262-.193-.392l2.458-3.295a1.16 1.16 0 0 0-.104-1.461Zm-3.847 8.872a4.27 4.27 0 0 1-2.229 1.42 7.31 7.31 0 0 1-2.36.07 3.57 3.57 0 0 0-3.354 1.459 2.627 2.627 0 0 0-.495 1.441l-.018 1.009.94-.37a2.995 2.995 0 0 1 2.262.277c-.298.19-.583.411-.861.627a8.176 8.176 0 0 1-.93.66 1.2 1.2 0 0 1-.945.2l-.714-.2-.132.73a.987.987 0 0 1-.388.617 2.258 2.258 0 0 1-.656.247 3.075 3.075 0 0 0-1.453.727 2.622 2.622 0 0 1-.057-.935 3.06 3.06 0 0 1 .835-1.28l.722-.819-.744-.402a4.412 4.412 0 0 1-1.854-2.58 6.867 6.867 0 0 1 .29-4.115 7.31 7.31 0 0 1 6.89-4.852l.22.003a9.215 9.215 0 0 1 1.863.247A2.4 2.4 0 0 0 13.34 7.58c.058 0 .116-.002.176-.006a2.377 2.377 0 0 0 1.788-1.01l.152-.204a5.493 5.493 0 0 1 .12 1.024 2.872 2.872 0 0 1-.67 1.83Zm.665-5.264-.819 1.098-.544.728a1.054 1.054 0 1 1-1.405-1.505l.531-.305 1.344-.772 2.548-1.462Z"
				}), m.a.createElement("path", {
					d: "m15.571 3.95-.819 1.098-.544.728a1.054 1.054 0 1 1-1.405-1.505l.531-.305 1.344-.772 2.548-1.462Z"
				})),
				na = n("./src/reddit/helpers/chooseVariant/index.ts");
			const sa = e => {
				return Object(na.c)(e, {
					experimentEligibilitySelector: na.a,
					experimentName: Kt.ke
				}) === Kt.Vc
			};
			var ra = n("./src/reddit/components/Header/QuickLinks/index.m.less"),
				oa = n.n(ra),
				aa = m.a.memo((function(e) {
					const t = Object($o.a)(),
						n = Object(p.d)(),
						s = Object(u.useCallback)(() => {
							t(e => ({
								...Object(xt.o)(e),
								source: "nav",
								action: "click",
								noun: "popular"
							}))
						}, [t]),
						o = Object(u.useCallback)(() => {
							t(e => ({
								...Object(xt.o)(e),
								source: "nav",
								action: "click",
								noun: "all"
							}))
						}, [t]),
						a = Object(u.useCallback)(() => {
							t(e => ({
								...Object(xt.o)(e),
								source: "nav",
								action: "click",
								noun: "recap"
							}))
						}, [t]),
						i = Object(u.useCallback)(() => {
							n(Object(As.a)(Ls.c[Ls.b.Rpan])), t(e => ({
								...Object(xt.o)(e),
								source: "nav",
								action: "click",
								noun: "rpan"
							}))
						}, [n, t]),
						c = Object(p.e)(yt.J),
						d = Object(p.e)(ks.a),
						l = Object(p.e)(sa),
						b = Object(p.e)(Ws.b),
						h = Object(p.e)(yt.W),
						f = Object(Xo.a)(),
						g = Object(Xo.a)(),
						O = Object(Xo.a)(),
						v = Object(Xo.a)(),
						x = Object(Xo.a)();
					return m.a.createElement("div", {
						className: Object(C.a)(oa.a.container, e.className)
					}, m.a.createElement("div", {
						className: oa.a.row
					}, m.a.createElement(ds.a, {
						className: oa.a.icon,
						innerRef: f.target.ref,
						to: c ? Ls.c[Ls.b.Popular] : Ls.c[Ls.b.Home],
						onClick: s,
						onMouseEnter: f.show,
						onMouseLeave: f.hide
					}, m.a.createElement(ms.a, {
						name: "popular"
					})), m.a.createElement(Yo.a, {
						arrowProps: f.arrowProps,
						popperProps: f.popperProps,
						visible: f.visible
					}, r.fbt._("Popular", null, {
						hk: "1Kx4va"
					})), m.a.createElement(m.a.Fragment, null, m.a.createElement(ds.a, {
						className: oa.a.icon,
						innerRef: g.target.ref,
						to: Ls.c[Ls.b.All],
						onClick: o,
						onMouseEnter: g.show,
						onMouseLeave: g.hide
					}, m.a.createElement(ms.a, {
						name: "all"
					})), m.a.createElement(Yo.a, {
						arrowProps: g.arrowProps,
						popperProps: g.popperProps,
						visible: g.visible
					}, r.fbt._("All", null, {
						hk: "1Rk1yU"
					}))), d && m.a.createElement(m.a.Fragment, null, m.a.createElement(ds.a, {
						className: oa.a.icon,
						innerRef: O.target.ref,
						to: Ls.c[Ls.b.Rpan],
						onClick: i,
						onMouseEnter: O.show,
						onMouseLeave: O.hide
					}, m.a.createElement(ms.a, {
						name: "video_live"
					})), m.a.createElement(Yo.a, {
						arrowProps: O.arrowProps,
						popperProps: O.popperProps,
						visible: O.visible
					}, r.fbt._("Reddit Live", null, {
						hk: "3BFYUK"
					}))), l && m.a.createElement(m.a.Fragment, null, m.a.createElement(ds.a, {
						className: oa.a.icon,
						innerRef: v.target.ref,
						to: "/r/psbattleslive",
						onClick: () => {},
						onMouseEnter: v.show,
						onMouseLeave: v.hide
					}, m.a.createElement(ea, {
						className: oa.a.psBattlesIcon
					})), m.a.createElement(Yo.a, {
						arrowProps: v.arrowProps,
						popperProps: v.popperProps,
						visible: v.visible
					}, r.fbt._("PsBattles Live in partnership with Adobe", null, {
						hk: "3mGYdM"
					}))), b && m.a.createElement(m.a.Fragment, null, m.a.createElement(ds.a, {
						className: oa.a.icon,
						innerRef: x.target.ref,
						to: vs.b,
						onClick: a,
						onMouseEnter: x.show,
						onMouseLeave: x.hide
					}, m.a.createElement(ta, {
						className: Object(C.a)(oa.a.redditRecapIcon, {
							[oa.a.isNightMode]: h
						})
					})), m.a.createElement(Yo.a, {
						arrowProps: x.arrowProps,
						popperProps: x.popperProps,
						visible: x.visible
					}, r.fbt._("Reddit Recap page", null, {
						hk: "ZDBQK"
					})))))
				})),
				ia = n("./src/reddit/actions/login.ts"),
				ca = n("./src/reddit/actions/tooltip.ts"),
				da = n("./src/lib/combineRefs/index.tsx"),
				la = n("./src/lib/hooks/useOnClickOutside.ts"),
				ua = n("./src/lib/hooks/useTooltip.ts"),
				ma = n("./src/reddit/components/CommonTooltip/Hooked.tsx"),
				pa = n("./src/reddit/components/HeaderIconContainer/index.m.less"),
				ba = n.n(pa);

			function ha() {
				return (ha = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const fa = M.a.button("Button", ba.a),
				ga = M.a.div("Container", ba.a);

			function Ca(e) {
				const {
					children: t,
					isOpen: n,
					...s
				} = e;
				return m.a.createElement(fa, ha({}, s, {
					id: e.id,
					onClick: t => e.onClick(t)
				}), m.a.createElement(ga, {
					className: Object(C.a)({
						[ba.a.isOpen]: n
					})
				}, t))
			}
			var Oa = n("./src/reddit/components/BadgeCounter/index.tsx"),
				va = n("./src/reddit/components/HeaderUserActions/index.m.less"),
				xa = n.n(va);
			var ya = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Oa.a, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount
				}), m.a.createElement(ms.a, {
					name: "notification",
					className: xa.a.icon2020
				})),
				Ea = n("./src/lib/getParsedUserAgent/index.ts"),
				ja = n("./src/reddit/components/InboxBanner/index.m.less"),
				_a = n.n(ja);
			var Sa = Object(Ne.a)(({
					onClose: e
				}) => {
					const t = Object(Ea.b)(navigator.userAgent);
					return m.a.createElement(et.e, null, m.a.createElement(et.i, {
						className: _a.a.modalHeader
					}, m.a.createElement(et.q, {
						className: _a.a.modalTitle
					}, r.fbt._("Turn on desktop notifications", null, {
						hk: "LDaeq"
					})), m.a.createElement(Ie.t, {
						onClick: e,
						Icon: Object(ms.b)("close_fill"),
						size: Ie.d.XXS,
						priority: Ie.c.Plain,
						className: _a.a.modalCloseIcon
					})), m.a.createElement(et.l, null, m.a.createElement("ul", {
						className: _a.a.modalList
					}, m.a.createElement("li", {
						className: _a.a.modalListItem
					}, m.a.createElement("span", null, "1"), r.fbt._("Click on {lockIcon} in your browser address bar", [r.fbt._param("lockIcon", m.a.createElement(ms.a, {
						name: "lock_fill",
						className: _a.a.modalListIcon
					}))], {
						hk: "kcfln"
					})), t && m.a.createElement("li", {
						className: _a.a.modalListItem
					}, m.a.createElement("span", null, "2"), r.fbt._("Select {lockIcon} site settings", [r.fbt._param("lockIcon", m.a.createElement(ms.a, {
						name: "settings_fill",
						className: _a.a.modalListIcon
					}))], {
						hk: "4wRmvx"
					})), m.a.createElement("li", {
						className: _a.a.modalListItem
					}, m.a.createElement("span", null, t ? 3 : 2), r.fbt._("Change {lockIcon} site settings notifications to ‘Allow’", [r.fbt._param("lockIcon", m.a.createElement(ms.a, {
						name: "notification_fill",
						className: _a.a.modalListIcon
					}))], {
						hk: "31PZ6t"
					})))), m.a.createElement(et.g, null, m.a.createElement(Ie.t, {
						text: r.fbt._("Got it", null, {
							hk: "1q53HE"
						}),
						onClick: e
					})))
				}),
				ka = n("./src/reddit/components/InboxTooltip/hooked.m.less"),
				Pa = n.n(ka);

			function wa() {
				return (wa = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Na = m.a.memo((function({
					visible: e,
					...t
				}) {
					const [n, s] = Object(u.useState)(e);
					return Object(u.useEffect)(() => {
						let t = window.setTimeout(() => {
							t = void 0, s(e)
						}, 0);
						return () => {
							t && window.clearTimeout(t), s(!1)
						}
					}, [e]), e ? m.a.createElement("div", wa({
						id: "INBOX--TOOLTIP",
						className: Object(C.a)(Pa.a.tooltip, {
							[Pa.a.visible]: n
						})
					}, t.popperProps), t.children) : null
				})),
				Ia = n("./src/reddit/components/InboxTooltip/Loader.ts"),
				Ma = n("./src/reddit/components/InboxTooltip/index.m.less"),
				Ta = n.n(Ma);
			const Ra = M.a.wrapped(Me.a, "CloseIcon", Ta.a),
				La = e => m.a.createElement("div", {
					className: Ta.a.welcomeTooltipContainer
				}, m.a.createElement("button", {
					className: Ta.a.closeButton,
					onClick: e.onClose
				}, m.a.createElement(Ra, null)), m.a.createElement("h3", {
					className: Ta.a.tooltipTitle
				}, r.fbt._("Welcome to your new inbox!", null, {
					hk: "4h8pcK"
				})), m.a.createElement("p", {
					className: Ta.a.tooltipDescription
				}, r.fbt._("Now it’s easier to stay up-to-date on your activity and know what’s happening in your communities.", null, {
					hk: "14J4MZ"
				})));
			var Aa = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts");
			var Fa = n("./node_modules/icepick/icepick.js");
			const Da = Object(Fa.freeze)({
				name: "offset",
				options: {
					offset: [-134, 6]
				}
			});
			var Ba = n("./src/reddit/selectors/activeModal.ts"),
				Ua = n("./src/reddit/components/Header/NotificationsButton/index.m.less"),
				Ga = n.n(Ua);
			const Ha = {
					placement: "bottom",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				Wa = m.a.memo((function(e) {
					const t = Object(p.d)(),
						n = Object(Xo.a)(),
						s = function(e) {
							const t = Object(u.useMemo)(() => {
								const t = Object(ua.a)(e);
								return Object(Fa.updateIn)(t, ["modifiers"], e => Object(Fa.push)(e, Da))
							}, [e]);
							return Object(ua.b)(t)
						}(),
						o = Object(ua.b)(Ha),
						[a, i] = function(e) {
							const [t, n] = Object(u.useState)(Object(Ut.u)(e));
							return [t, Object(u.useCallback)(() => {
								n(!0), Object(Ut.vb)(e)
							}, [])]
						}(e.userId),
						[c, d] = Object(Aa.a)(e.userId),
						l = Object(p.e)(Object(Ba.c)("browser_notifications_permission_settings")),
						b = Object(u.useCallback)(() => {
							s.hide(), n.hide(), i(), c || d()
						}, [s, n, d, i, c]),
						h = Object(u.useCallback)(() => {
							o.hide(), n.hide(), i()
						}, [o, n, i]);
					Object(u.useEffect)(() => {
						a || setTimeout(() => {
							o.show()
						}, 3e3)
					}, [a]);
					const f = Object(u.useRef)(!0);
					Object(u.useEffect)(() => {
						f.current ? f.current = !1 : h()
					}, [e.pageUrl]), Object(la.a)("INBOX--TOOLTIP", b);
					const g = !s.visible;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: e.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: Object(da.a)(n.target.ref, s.target.ref, o.target.ref)
					}, m.a.createElement(Ca, {
						"aria-expanded": s.visible,
						"aria-haspopup": !0,
						"aria-label": r.fbt._("Open notifications inbox", null, {
							hk: "1b2BKn"
						}),
						className: Ga.a.notificationInboxIconContainer,
						onClick: t => {
							t.stopPropagation(), s.visible ? b() : s.show(), e.sendNavClickInbox(), s.visible || h()
						},
						isOpen: s.visible
					}, m.a.createElement(ya, {
						unreadCount: e.unreadCount
					})), !s.visible && !o.visible && m.a.createElement(Yo.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, m.a.createElement("div", null, r.fbt._("Notifications", null, {
						hk: "vAOKt"
					}))), m.a.createElement(Na, {
						arrowProps: s.arrowProps,
						popperProps: s.popperProps,
						visible: s.visible
					}, m.a.createElement(Ia.a, {
						isOpen: s.visible,
						hideTooltip: b,
						userId: e.userId,
						desktopNotificationsModalId: "browser_notifications_permission_settings",
						isLoggedIn: e.isLoggedIn
					})), g && m.a.createElement(ma.a, {
						arrowProps: o.arrowProps,
						popperProps: o.popperProps,
						visible: o.visible,
						tooltipId: "welcome-tooltip-id",
						className: Ga.a.welcomeTooltip,
						arrowClassName: Ga.a.welcomeTooltipArrow
					}, m.a.createElement(La, {
						onClose: h
					}))), l && m.a.createElement(Sa, {
						onClose: () => {
							t(Object(Se.g)("browser_notifications_permission_settings"))
						},
						withOverlay: !0
					}))
				}));
			var qa = n("./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts"),
				Va = n("./src/reddit/actions/snoovatarModal.ts"),
				Ka = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				za = n("./src/reddit/icons/svgs/SparkleGradient/index.tsx"),
				Qa = n("./src/lib/initializeClient/installReducer.ts"),
				Ja = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(Qa.a)({
				features: {
					avatar: Ja.a
				}
			});
			const Za = e => 864e5 * e,
				Ya = e => {
					var t, n, s;
					return null === (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === s ? void 0 : s.quickCreateV1
				},
				Xa = (e, t, n) => {
					var s;
					const r = !!(null === (s = Object(yt.k)(e)) || void 0 === s ? void 0 : s.snoovatarFullBodyAsset);
					return $a(e, t) && n === r
				},
				$a = (e, t) => {
					const n = Object(yt.k)(e);
					return !(!n || !t) && (new Date).getTime() - (e => Math.floor(1e3 * e))(n.created) > Za(t)
				};
			var ei = n("./src/reddit/components/Header/AvatarQuickCreateCta/index.m.less"),
				ti = n.n(ei);
			const {
				fbt: ni
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function si(e, t = "view") {
				if (e) {
					const n = Object(Ut.y)(),
						s = {
							id: e.id,
							eventViews: n.eventViews.toString() || "0"
						};
					if ("view" === t) {
						const t = n.id === e.id ? n.eventViews : 0;
						s.eventViews = (t + 1).toString()
					}
					"click" === t && (s.lastInteractionTimestamp = (new Date).getTime().toString()), Object(Ut.gb)(s)
				}
			}
			var ri = ({
					avatarUrlParams: e
				}) => {
					const t = Object(p.e)(Ya),
						n = Object(p.d)(),
						s = Object($o.a)();
					Object(u.useEffect)(() => {
						s(Object(Ka.o)())
					}, [s]), Object(u.useEffect)(() => {
						t || n(Object(qa.a)())
					}, [n, t]), Object(u.useEffect)(() => {
						si(t)
					}, [t]);
					return m.a.createElement(Ie.k, {
						onClick: () => {
							s(Object(Ka.c)()), si(t, "click"), n(Object(Va.b)({
								share: e,
								source: "quick_create"
							}))
						},
						className: ti.a.ctaContainer
					}, m.a.createElement("img", {
						className: ti.a.quickCreateGiftAnimation,
						src: `${U.a.assetPath}/img/snoovatars/Golden_Chest.png`,
						alt: ni._("animated golden chest", null, {
							hk: "12HBG9"
						})
					}), m.a.createElement(m.a.Fragment, null, m.a.createElement(za.a, {
						className: Object(C.a)(ti.a.sparkle, ti.a.sparkle1)
					}), m.a.createElement(za.a, {
						className: Object(C.a)(ti.a.sparkle, ti.a.sparkle2)
					}), m.a.createElement(za.a, {
						className: Object(C.a)(ti.a.sparkle, ti.a.sparkle3)
					})), ni._("Open Gift", null, {
						hk: "Cd6TH"
					}))
				},
				oi = n("./src/lib/cache/index.ts"),
				ai = n("./src/lib/matchRoute/index.ts"),
				ii = n("./src/chat/helpers/dom.ts"),
				ci = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				di = n("./src/reddit/actions/changeUsername.ts"),
				li = n("./src/reddit/actions/chat/toggle.ts"),
				ui = n("./src/reddit/actions/emailVerificationTooltip.ts"),
				mi = n("./src/reddit/actions/postCreation/general.ts"),
				pi = n("./src/reddit/actions/preferences.ts"),
				bi = n("./src/reddit/actions/users.ts"),
				hi = n("./src/reddit/components/BlockNavigation/index.tsx"),
				fi = n("./src/reddit/components/ChangeUsernameModals/Loader.tsx"),
				gi = n("./src/reddit/components/ChangeUsernameTooltip/Loader.tsx");
			var Ci = Object(ke.a)({
					getComponent: () => Object(Je.a)(() => n.e("EmailVerificationModals").then(n.bind(null, "./src/reddit/components/EmailVerificationModals/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Oi = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				vi = n("./src/reddit/helpers/trackers/emailVerification.ts"),
				xi = n("./src/reddit/components/EmailVerificationTooltip/index.m.less"),
				yi = n.n(xi);
			class Ei extends m.a.Component {
				constructor() {
					super(...arguments), this.onChangeEmailModalOpen = e => {
						e.stopPropagation(), this.props.sendEvent(Object(vi.e)(vi.a, "update")), this.props.toggleChangeEmailModal()
					}, this.onCloseTooltip = () => {
						this.props.sendEvent(Object(vi.c)(vi.a)), this.props.closeTooltip()
					}, this.onResendEmailClick = () => {
						this.props.sendEvent(Object(vi.e)(vi.a, "confirm")), this.props.resendEmail(), this.props.closeTooltip()
					}
				}
				componentDidMount() {
					Ei.shouldSendViewEvent && (Ei.shouldSendViewEvent = !1, this.props.sendEvent(Object(vi.g)(vi.a)))
				}
				render() {
					return m.a.createElement("div", {
						className: yi.a.container
					}, m.a.createElement("div", {
						className: yi.a.topLine
					}), m.a.createElement("button", {
						className: yi.a.closeWrapper,
						onClick: this.onCloseTooltip
					}, m.a.createElement(Me.a, {
						className: yi.a.closeIcon
					})), m.a.createElement("h5", {
						className: yi.a.title
					}, r.fbt._("Confirm your email:", null, {
						hk: "1RDs8b"
					})), m.a.createElement("p", {
						className: yi.a.subtitle
					}, this.props.email), m.a.createElement("p", {
						className: yi.a.description
					}, r.fbt._("Check your inbox email for Reddit's confirmation email. A current email address helps ensure you don't lose access to your account.", null, {
						hk: "2bhwUs"
					})), m.a.createElement("div", {
						className: yi.a.buttonWrapper
					}, m.a.createElement(Ie.o, {
						className: yi.a.commonBtn,
						"data-redditstyle": !0,
						onClick: this.onChangeEmailModalOpen,
						type: "button"
					}, r.fbt._("Update email", null, {
						hk: "1Cxqkk"
					})), m.a.createElement(Ie.l, {
						className: Object(C.a)(yi.a.commonBtn, yi.a.primaryBtn),
						"data-redditstyle": !0,
						onClick: this.onResendEmailClick,
						type: "button"
					}, r.fbt._("Got it", null, {
						hk: "3IP9TO"
					}))))
				}
			}
			Ei.shouldSendViewEvent = !0;
			const ji = Object(Oi.a)(Ei, [_r.a.Click, _r.a.Keydown, _r.a.Resize]);
			var _i = Object(R.c)(ji),
				Si = n("./src/reddit/components/GoogleOneTapIFrame/index.m.less"),
				ki = n.n(Si);
			const Pi = Object(g.c)({
				isLoggedIn: yt.J
			});
			class wi extends m.a.Component {
				render() {
					const {
						className: e,
						exposeIFrameElement: t,
						isLoggedIn: n
					} = this.props;
					return m.a.createElement(T.a, {
						className: Object(C.a)(ki.a.IFrame, {
							[ki.a["m-hidden"]]: n
						}, e),
						exposeIFrameElement: t,
						path: L.c.GoogleOneTap
					})
				}
			}
			var Ni = Object(p.b)(Pi)(wi),
				Ii = n("./src/reddit/components/Header/GoldCoinsCta/index.tsx");
			var Mi = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Oa.a, {
					isActive: e.badgeCount > 0 || e.hasUnreadGroupMessages,
					unreadCount: e.badgeCount
				}), m.a.createElement(ms.a, {
					name: "chat",
					className: xa.a.icon2020
				})),
				Ti = n("./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less"),
				Ri = n.n(Ti);
			const {
				fbt: Li
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Ai = e => {
				const {
					onCloseFlyout: t
				} = e;
				return m.a.createElement("div", {
					className: Ri.a.container
				}, m.a.createElement("p", {
					className: Ri.a.title
				}, Li._("New User Settings", null, {
					hk: "1Sziu9"
				})), m.a.createElement("h5", {
					className: Ri.a.subtitle
				}, Li._("Like customizing Reddit?", null, {
					hk: "38eFal"
				})), m.a.createElement("p", {
					className: Ri.a.description
				}, Li._("You can save how you sort and view your communities in user settings.", null, {
					hk: "XMkGT"
				})), m.a.createElement(Ie.o, {
					className: Ri.a.dismissBtn,
					onClick: t
				}, Li._("Got it", null, {
					hk: "3IP9TO"
				})))
			};
			var Fi = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Oa.a, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount
				}), m.a.createElement(ms.a, {
					name: "message",
					className: xa.a.icon2020
				})),
				Di = n("./node_modules/lodash/noop.js"),
				Bi = n.n(Di),
				Ui = n("./src/lib/prettyPrintNumber/index.ts"),
				Gi = n("./src/realtime/GQLSubscription/async.tsx"),
				Hi = n("./src/reddit/actions/alpha.ts"),
				Wi = n("./src/reddit/actions/modMode.ts"),
				qi = n("./src/reddit/actions/profile/index.ts"),
				Vi = n("./src/reddit/constants/elementClassNames.ts"),
				Ki = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				zi = n("./src/reddit/helpers/karma.ts"),
				Qi = n("./src/reddit/hooks/useWindowEvent.ts"),
				Ji = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				Zi = n("./src/reddit/icons/fonts/Premium/index.tsx"),
				Yi = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				Xi = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				$i = n("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				ec = n("./src/reddit/selectors/modModeEnabled.ts"),
				tc = n("./src/reddit/selectors/seo/index.ts"),
				nc = n("./src/reddit/selectors/tooltip.ts"),
				sc = n("./src/higherOrderComponents/asTooltip.tsx"),
				rc = n("./src/reddit/components/HiddenDiv.tsx"),
				oc = n("./src/reddit/controls/Dropdown/index.tsx"),
				ac = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				ic = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				cc = n("./src/reddit/helpers/trackers/authControls.ts"),
				dc = n("./src/reddit/helpers/trackers/modTools.ts"),
				lc = n("./src/reddit/helpers/trackers/navigation.ts"),
				uc = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				mc = n("./src/reddit/helpers/trackers/user.ts"),
				pc = n("./src/reddit/icons/svgs/SnooNoEyes/index.tsx"),
				bc = n("./src/reddit/constants/colors.ts"),
				hc = n("./src/reddit/controls/InternalLink/index.tsx");

			function fc() {
				return (fc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var gc = e => {
					const {
						children: t,
						className: n,
						href: s = "#",
						onClick: r,
						rel: o
					} = e, a = {
						onClick: r,
						rel: o,
						className: n
					};
					return (s || "").startsWith("http") ? m.a.createElement("a", fc({
						href: s
					}, a), t) : m.a.createElement(hc.a, fc({
						to: s
					}, a), t)
				},
				Cc = n("./src/reddit/components/HeaderUserDropdown/UserMenu/shared.m.less"),
				Oc = n.n(Cc);
			const vc = e => {
					const {
						title: t,
						titleClassName: n
					} = e;
					return m.a.createElement("span", {
						className: Object(C.a)(Oc.a.title, n)
					}, t)
				},
				xc = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: r
					} = e;
					return m.a.createElement("button", {
						className: Object(C.a)(Oc.a.secondLevelButton, t),
						onClick: n
					}, m.a.createElement(vc, {
						title: s,
						titleClassName: r
					}))
				},
				yc = e => {
					const {
						className: t,
						href: n,
						onClick: s,
						title: r,
						titleClassName: o,
						rel: a
					} = e;
					return m.a.createElement(gc, {
						className: Object(C.a)(Oc.a.secondLevelButton, t),
						href: n,
						onClick: s,
						rel: a
					}, m.a.createElement(vc, {
						title: r,
						titleClassName: o
					}))
				},
				Ec = e => {
					const {
						className: t,
						href: n,
						iconClassName: s,
						iconUrl: r,
						onClick: o,
						rel: a,
						title: i,
						titleClassName: c
					} = e;
					return m.a.createElement(gc, {
						className: Object(C.a)(Oc.a.secondLevelButton, t),
						href: n,
						onClick: o,
						rel: a
					}, m.a.createElement(gs.b, {
						"aria-hidden": !0,
						className: Object(C.a)(Oc.a.subredditIcon, s),
						iconUrl: r,
						primaryColor: bc.a.snoo
					}), m.a.createElement(vc, {
						title: i,
						titleClassName: c
					}))
				},
				jc = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: r,
						isEnabled: o
					} = e;
					return m.a.createElement("button", {
						className: Object(C.a)(Oc.a.secondLevelSwitch, t),
						onClick: n,
						onMouseDown: e => {
							e.preventDefault()
						}
					}, m.a.createElement(vc, {
						title: s,
						titleClassName: r
					}), m.a.createElement(ac.a, {
						className: Oc.a.toggleSwitch,
						"data-redditstyle": !0,
						on: o,
						redditStyle: !0,
						tabIndex: -1
					}))
				};
			var _c = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				Sc = n("./src/reddit/selectors/avatarMarketing.ts"),
				kc = n("./src/reddit/selectors/meta.ts"),
				Pc = n("./src/reddit/components/HeaderUserDropdown/avatar.m.less"),
				wc = n.n(Pc);
			const Nc = (e, t) => e && m.a.createElement("div", {
				className: wc.a.marketingBadge
			}, m.a.createElement(_c.a, {
				className: wc.a.marketingAsset,
				headshot: e
			}), r.fbt._("New", null, {
				hk: "2TRcjA"
			}), !t && m.a.createElement(m.a.Fragment, null, m.a.createElement(za.a, {
				className: Object(C.a)(wc.a.sparkle, wc.a.sparkle1)
			}), m.a.createElement(za.a, {
				className: Object(C.a)(wc.a.sparkle, wc.a.sparkle2)
			}), m.a.createElement(za.a, {
				className: Object(C.a)(wc.a.sparkle, wc.a.sparkle3)
			}), m.a.createElement(za.a, {
				className: Object(C.a)(wc.a.sparkle, wc.a.sparkle4)
			})));
			var Ic = ({
				useNewButtonComponent: e,
				onClick: t
			}) => {
				var n;
				const s = Object(p.d)(),
					o = Object($o.a)(),
					a = Object(zt.fb)(),
					i = Object(p.e)(e => e.user.account),
					c = Object(p.e)(bs.c),
					d = Object(p.e)(Gs.d),
					l = Object(p.e)(Sc.b),
					u = Object(p.e)(Sc.a),
					b = () => s(Object(Va.b)({
						clickSource: "nav"
					})),
					h = Object(p.e)(kc.i).startsWith("en");
				if ((null === (n = null == a ? void 0 : a.meta) || void 0 === n ? void 0 : n.name) === O.Mb.AVATAR) return null;
				!l && d && s(Object(qa.a)()), u && o(Ka.m);
				const f = i && i.snoovatarFullBodyAsset ? r.fbt._("Style Avatar", null, {
					hk: "1HIsKA"
				}) : r.fbt._("Create Avatar", null, {
					hk: "3kfCbX"
				});
				if (e) {
					const e = m.a.createElement(m.a.Fragment, null, f, h && Nc(u, c));
					return m.a.createElement(xc, {
						onClick: () => {
							b(), "function" == typeof t && t()
						},
						title: e,
						titleClassName: wc.a.avatarLinkBody
					})
				}
				const g = Object(ic.c)((null == i ? void 0 : i.snoovatarFullBodyAsset) ? Od("avatar_style") : Od("add"), ((e, t, n, s) => r => m.a.createElement("div", {
					className: `${wc.a.avatarLinkBody} ${r.className}`
				}, e, s && Nc(t, n)))(f, u, c, h));
				return m.a.createElement(g, {
					onClick: b
				})
			};
			const Mc = e => {
					const {
						icon: t,
						title: n,
						titleClassName: s
					} = e;
					return m.a.createElement("span", {
						className: Oc.a.headingContent
					}, m.a.createElement("span", {
						className: Oc.a.iconContainer
					}, t), m.a.createElement("span", {
						className: Object(C.a)(Oc.a.title, s)
					}, n))
				},
				Tc = e => {
					const {
						className: t,
						icon: n,
						onClick: s,
						title: r,
						titleClassName: o
					} = e;
					return m.a.createElement("button", {
						className: Object(C.a)(Oc.a.button, t),
						onClick: s
					}, m.a.createElement(Mc, {
						icon: n,
						title: r,
						titleClassName: o
					}))
				},
				Rc = e => {
					const {
						className: t,
						href: n,
						icon: s,
						onClick: r,
						rel: o,
						title: a,
						titleClassName: i
					} = e;
					return m.a.createElement(gc, {
						className: Object(C.a)(Oc.a.button, t),
						href: n,
						rel: o,
						onClick: r
					}, m.a.createElement(Mc, {
						icon: s,
						title: a,
						titleClassName: i
					}))
				};
			class Lc extends m.a.Component {
				constructor(e) {
					super(e), this.toggleOpen = e => {
						const t = "A" === e.target.tagName;
						this.props.children && !t && null == this.props.isOpen && this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.state = {
						isOpen: !!e.defaultOpen
					}
				}
				render() {
					var e;
					const {
						children: t,
						className: n,
						icon: s,
						onClick: r,
						title: o,
						url: a
					} = this.props, i = null !== (e = this.props.isOpen) && void 0 !== e ? e : this.state.isOpen;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("button", {
						className: Oc.a.button,
						type: "button",
						onClick: e => {
							if (this.toggleOpen(e), "function" == typeof r) {
								const t = e.target,
									n = Boolean(t.getAttribute("data-chevron"));
								r(e, n)
							}
						}
					}, m.a.createElement("span", {
						className: Oc.a.headingContent,
						tabIndex: -1
					}, m.a.createElement("span", {
						className: Oc.a.iconContainer
					}, s), m.a.createElement("span", {
						className: Oc.a.title
					}, a ? m.a.createElement(gc, {
						className: Oc.a.innerLink,
						href: a
					}, o) : m.a.createElement(m.a.Fragment, null, o)), m.a.createElement(ms.a, {
						"data-chevron": !0,
						name: "caret_down",
						className: Object(C.a)(Oc.a.chevronIcon, {
							[Oc.a["m-expanded"]]: i
						})
					}))), m.a.createElement("div", {
						className: Object(C.a)(Oc.a.contentContainer, Oc.a["m-collapsible"], {
							[Oc.a.isOpen]: i
						}, n)
					}, t))
				}
			}
			var Ac = Lc;
			var Fc = [{
					link: {
						noun: "gaming",
						title: "Gaming",
						url: "/t/gaming/"
					},
					sublinks: [{
						noun: "valheim",
						title: "Valheim",
						url: "/t/valheim/"
					}, {
						noun: "genshin_impact",
						title: "Genshin Impact",
						url: "/t/genshin_impact/"
					}, {
						noun: "minecraft",
						title: "Minecraft",
						url: "/t/minecraft/"
					}, {
						noun: "pokimane",
						title: "Pokimane",
						url: "/t/pokimane/"
					}, {
						noun: "halo_infinite",
						title: "Halo Infinite",
						url: "/t/halo_infinite/"
					}, {
						noun: "call_of_duty_warzone",
						title: "Call of Duty: Warzone",
						url: "/t/call_of_duty_warzone/"
					}, {
						noun: "path_of_exile",
						title: "Path of Exile",
						url: "/t/path_of_exile/"
					}, {
						noun: "hollow_knight_silksong",
						title: "Hollow Knight: Silksong",
						url: "/t/hollow_knight_silksong/"
					}, {
						noun: "escape_from_tarkov",
						title: "Escape from Tarkov",
						url: "/t/escape_from_tarkov/"
					}, {
						noun: "watch_dogs_legion",
						title: "Watch Dogs: Legion",
						url: "/t/watch_dogs_legion/"
					}]
				}, {
					link: {
						noun: "sports",
						title: "Sports",
						url: "/t/sports/"
					},
					sublinks: [{
						noun: "nfl",
						title: "NFL",
						url: "/t/nfl/"
					}, {
						noun: "nba",
						title: "NBA",
						url: "/t/nba/"
					}, {
						noun: "megan_anderson",
						title: "Megan Anderson",
						url: "/t/megan_anderson/"
					}, {
						noun: "atlanta_hawks",
						title: "Atlanta Hawks",
						url: "/t/atlanta_hawks/"
					}, {
						noun: "los_angeles_lakers",
						title: "Los Angeles Lakers",
						url: "/t/los_angeles_lakers/"
					}, {
						noun: "boston_celtics",
						title: "Boston Celtics",
						url: "/t/boston_celtics/"
					}, {
						noun: "arsenal_fc",
						title: "Arsenal F.C.",
						url: "/t/arsenal_fc/"
					}, {
						noun: "philadelphia_76ers",
						title: "Philadelphia 76ers",
						url: "/t/philadelphia_76ers/"
					}, {
						noun: "premier_league",
						title: "Premier League",
						url: "/t/premier_league/"
					}, {
						noun: "ufc",
						title: "UFC",
						url: "/t/ufc/"
					}]
				}, {
					link: {
						noun: "tv",
						title: "Television",
						url: "/t/television/"
					},
					sublinks: [{
						noun: "the_real_housewives_of_atlanta",
						title: "The Real Housewives of Atlanta",
						url: "/t/the_real_housewives_of_atlanta/"
					}, {
						noun: "the_bachelor",
						title: "The Bachelor",
						url: "/t/the_bachelor/"
					}, {
						noun: "sister_wives",
						title: "Sister Wives",
						url: "/t/sister_wives/"
					}, {
						noun: "90_day_fiance",
						title: "90 Day Fiance",
						url: "/t/90_day_fiance/"
					}, {
						noun: "wife_swap",
						title: "Wife Swap",
						url: "/t/wife_swap/"
					}, {
						noun: "the_amazing_race_australia",
						title: "The Amazing Race Australia",
						url: "/t/the_amazing_race_australia/"
					}, {
						noun: "married_at_first_sight",
						title: "Married at First Sight",
						url: "/t/married_at_first_sight/"
					}, {
						noun: "the_real_housewives_of_dallas",
						title: "The Real Housewives of Dallas",
						url: "/t/the_real_housewives_of_dallas/"
					}, {
						noun: "my_600lb_life",
						title: "My 600-lb Life",
						url: "/t/my_600lb_life/"
					}, {
						noun: "last_week_tonight_with_john_oliver",
						title: "Last Week Tonight with John Oliver",
						url: "/t/last_week_tonight_with_john_oliver/"
					}]
				}, {
					link: {
						noun: "celebrity",
						title: "Celebrity",
						url: "/t/celebrity/"
					},
					sublinks: [{
						noun: "kim_kardashian",
						title: "Kim Kardashian",
						url: "/t/kim_kardashian/"
					}, {
						noun: "doja_cat",
						title: "Doja Cat",
						url: "/t/doja_cat/"
					}, {
						noun: "iggy_azalea",
						title: "Iggy Azalea",
						url: "/t/iggy_azalea/"
					}, {
						noun: "anya_taylorjoy",
						title: "Anya Taylor-Joy",
						url: "/t/anya_taylor_joy/"
					}, {
						noun: "jamie_lee_curtis",
						title: "Jamie Lee Curtis",
						url: "/t/jamie_lee_curtis/"
					}, {
						noun: "natalie_portman",
						title: "Natalie Portman",
						url: "/t/natalie_portman/"
					}, {
						noun: "henry_cavill",
						title: "Henry Cavill",
						url: "/t/henry_cavill/"
					}, {
						noun: "millie_bobby_brown",
						title: "Millie Bobby Brown",
						url: "/t/millie_bobby_brown/"
					}, {
						noun: "tom_hiddleston",
						title: "Tom Hiddleston",
						url: "/t/tom_hiddleston/"
					}, {
						noun: "keanu_reeves",
						title: "Keanu Reeves",
						url: "/t/keanu_reeves/"
					}]
				}, {
					link: {
						noun: "business",
						title: "Business, Economics, and Finance",
						url: "/t/business_economics_and_finance/"
					},
					sublinks: [{
						noun: "gamestop",
						title: "GameStop",
						url: "/t/gamestop/"
					}, {
						noun: "moderna",
						title: "Moderna",
						url: "/t/moderna/"
					}, {
						noun: "pfizer",
						title: "Pfizer",
						url: "/t/pfizer/"
					}, {
						noun: "johnson_johnson",
						title: "Johnson & Johnson",
						url: "/t/johnson_johnson/"
					}, {
						noun: "astrazeneca",
						title: "AstraZeneca",
						url: "/t/astrazeneca/"
					}, {
						noun: "walgreens",
						title: "Walgreens",
						url: "/t/walgreens/"
					}, {
						noun: "best_buy",
						title: "Best Buy",
						url: "/t/best_buy/"
					}, {
						noun: "novavax",
						title: "Novavax",
						url: "/t/novavax/"
					}, {
						noun: "spacex",
						title: "SpaceX",
						url: "/t/spacex/"
					}, {
						noun: "tesla",
						title: "Tesla",
						url: "/t/tesla/"
					}]
				}, {
					link: {
						noun: "crypto",
						title: "Crypto",
						url: "/t/cryptocurrency/"
					},
					sublinks: [{
						noun: "cardano",
						title: "Cardano",
						url: "/t/cardano/"
					}, {
						noun: "dogecoin",
						title: "Dogecoin",
						url: "/t/dogecoin/"
					}, {
						noun: "algorand",
						title: "Algorand",
						url: "/t/algorand/"
					}, {
						noun: "bitcoin",
						title: "Bitcoin",
						url: "/t/bitcoin/"
					}, {
						noun: "litecoin",
						title: "Litecoin",
						url: "/t/litecoin/"
					}, {
						noun: "basic_attention_token",
						title: "Basic Attention Token",
						url: "/t/basic_attention_token/"
					}, {
						noun: "bitcoin_cash",
						title: "Bitcoin Cash",
						url: "/t/bitcoin_cash/"
					}]
				}, {
					link: {
						noun: "more_topics",
						title: "More Topics",
						url: "/topics/a-1/"
					},
					sublinks: [{
						noun: "animals_and_pets",
						title: "Animals and Pets",
						url: "/t/animals_and_pets/"
					}, {
						noun: "anime",
						title: "Anime",
						url: "/t/anime/"
					}, {
						noun: "art",
						title: "Art",
						url: "/t/art/"
					}, {
						noun: "cars_and_motor_vehicles",
						title: "Cars and Motor Vehicles",
						url: "/t/cars_and_motor_vehicles/"
					}, {
						noun: "crafts_and_diy",
						title: "Crafts and DIY",
						url: "/t/crafts_and_diy/"
					}, {
						noun: "culture_race_and_ethnicity",
						title: "Culture, Race, and Ethnicity",
						url: "/t/culture_race_and_ethnicity/"
					}, {
						noun: "ethics_and_philosophy",
						title: "Ethics and Philosophy",
						url: "/t/ethics_and_philosophy/"
					}, {
						noun: "fashion",
						title: "Fashion",
						url: "/t/fashion/"
					}, {
						noun: "food_and_drink",
						title: "Food and Drink",
						url: "/t/food_and_drink/"
					}, {
						noun: "history",
						title: "History",
						url: "/t/history/"
					}, {
						noun: "hobby",
						title: "Hobbies",
						url: "/t/hobby/"
					}, {
						noun: "law",
						title: "Law",
						url: "/t/law/"
					}, {
						noun: "learning_and_education",
						title: "Learning and Education",
						url: "/t/learning_and_education/"
					}, {
						noun: "military",
						title: "Military",
						url: "/t/military/"
					}, {
						noun: "movie",
						title: "Movies",
						url: "/t/movie/"
					}, {
						noun: "music",
						title: "Music",
						url: "/t/music/"
					}, {
						noun: "place",
						title: "Place",
						url: "/t/place/"
					}, {
						noun: "podcasts_and_streamers",
						title: "Podcasts and Streamers",
						url: "/t/podcasts_and_streamers/"
					}, {
						noun: "politics",
						title: "Politics",
						url: "/t/politics/"
					}, {
						noun: "programming",
						title: "Programming",
						url: "/t/programming/"
					}, {
						noun: "reading_writing_and_literature",
						title: "Reading, Writing, and Literature",
						url: "/t/reading_writing_and_literature/"
					}, {
						noun: "religion_and_spirituality",
						title: "Religion and Spirituality",
						url: "/t/religion_and_spirituality/"
					}, {
						noun: "science",
						title: "Science",
						url: "/t/science/"
					}, {
						noun: "tabletop_game",
						title: "Tabletop Games",
						url: "/t/tabletop_game/"
					}, {
						noun: "technology",
						title: "Technology",
						url: "/t/technology/"
					}, {
						noun: "travel",
						title: "Travel",
						url: "/t/travel/"
					}]
				}],
				Dc = n("./src/reddit/components/HeaderUserDropdown/UserMenu/ExploreMenu/styles.m.less"),
				Bc = n.n(Dc);
			var Uc = ({
				isOpen: e,
				onClick: t,
				sendEvent: n
			}) => {
				const [s, o] = Object(u.useState)(null), a = e => () => {
					o(s === e ? null : e)
				};
				return m.a.createElement(Ac, {
					icon: m.a.createElement(ms.a, {
						name: "discover"
					}),
					isOpen: e,
					onClick: (e, s) => {
						n(Object(lc.b)(s ? "explore_chevron" : "explore_menu")), "function" == typeof t && t(e)
					},
					title: r.fbt._("Explore", null, {
						hk: "4xNnBs"
					})
				}, m.a.createElement("span", null, Fc.map((e, t) => (({
					link: e,
					sublinks: t
				}, {
					isOpen: n,
					onClick: s
				}, r) => m.a.createElement(Ac, {
					className: Bc.a.collapsibleContainer,
					isOpen: n,
					key: e.url,
					onClick: (t, n) => {
						e.noun && r(Object(lc.b)(e.noun + (n ? "_chevron" : "_menu"))), "function" == typeof s && s(t)
					},
					title: e.title,
					url: e.url
				}, t.map(e => m.a.createElement(yc, {
					className: Bc.a.basicLink,
					href: e.url,
					key: e.url,
					onClick: () => {
						e.noun && r(Object(lc.b)(e.noun + "_menu"))
					},
					title: e.title
				}))))(e, (e => ({
					onClick: a(e),
					isOpen: s === e
				}))(t), n))))
			};
			var Gc = e => {
				const {
					title: t,
					children: n,
					icon: s
				} = e;
				return m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
					className: Oc.a.heading
				}, m.a.createElement("span", {
					className: Oc.a.headingContent
				}, m.a.createElement("span", {
					className: Oc.a.iconContainer
				}, s), m.a.createElement("span", {
					className: Oc.a.title
				}, t))), m.a.createElement("div", {
					className: Oc.a.contentContainer
				}, n))
			};
			const Hc = () => {
					const e = Object(p.d)(),
						t = Object($o.a)(),
						n = Object(p.e)(yt.W);
					return m.a.createElement(jc, {
						isEnabled: n,
						onClick: () => {
							t(Object(mc.g)(n)), (t => e(Object(pi.y)(t)))(!n)
						},
						title: r.fbt._("Dark Mode", null, {
							hk: "1pZGTO"
						})
					})
				},
				Wc = () => {
					const e = Object(p.d)(),
						t = Object($o.a)(),
						n = Object(p.e)(e => e.user.account),
						s = Object(p.e)(ec.a);
					return n && n.isMod ? m.a.createElement(jc, {
						isEnabled: s,
						onClick: () => {
							t(Object(dc.i)(!s)), (() => e(Object(Wi.b)()))()
						},
						title: r.fbt._("Mod Mode", null, {
							hk: "1gLGCN"
						})
					}) : null
				},
				qc = () => {
					const e = Object(p.d)(),
						t = Object(R.b)(),
						n = Object(p.e)(yt.k),
						s = Object(p.e)(yt.O);
					return n ? m.a.createElement(Gc, {
						icon: m.a.createElement(ms.a, {
							name: "profile"
						}),
						title: r.fbt._("My Stuff", null, {
							hk: "15XGVl"
						})
					}, m.a.createElement(jc, {
						title: r.fbt._("Online Status", null, {
							hk: "3t396G"
						}),
						isEnabled: s,
						onClick: () => {
							t(Object(mc.h)(!s)), (t => e(Object(pi.H)({
								showPresence: t
							})))(!s)
						}
					}), m.a.createElement(yc, {
						title: r.fbt._("Profile", null, {
							hk: "czKk9"
						}),
						href: null == n ? void 0 : n.url,
						onClick: () => t(Object(lc.b)("profile"))
					}), m.a.createElement(Ic, {
						onClick: () => e(Object(ca.j)({
							tooltipId: "USER_DROPDOWN_ID"
						})),
						useNewButtonComponent: !0
					}), m.a.createElement(yc, {
						title: r.fbt._("User Settings", null, {
							hk: "2HIDAR"
						}),
						href: "/settings/",
						onClick: () => t(Object(lc.b)("settings"))
					})) : null
				},
				Vc = () => {
					return Object(p.e)(yt.k) ? m.a.createElement(Gc, {
						title: r.fbt._("View Options", null, {
							hk: "142L6P"
						}),
						icon: m.a.createElement(ms.a, {
							name: "views"
						})
					}, m.a.createElement(Wc, null), m.a.createElement(Hc, null)) : null
				},
				Kc = ({
					isOpen: e,
					onClick: t
				}) => {
					return Object(p.e)(yt.k) ? null : m.a.createElement(Ac, {
						icon: m.a.createElement(ms.a, {
							name: "settings"
						}),
						title: r.fbt._("Settings", null, {
							hk: "1AC3DI"
						}),
						isOpen: e,
						onClick: t
					}, m.a.createElement(Hc, null))
				},
				zc = ({
					isOpen: e,
					onClick: t,
					sendEvent: n
				}) => m.a.createElement(Ac, {
					icon: m.a.createElement(ms.a, {
						name: "rules"
					}),
					isOpen: e,
					onClick: (e, s) => {
						n(Object(lc.b)(s ? "terms_chevron" : "terms_menu")), "function" == typeof t && t(e)
					},
					title: r.fbt._("Terms & Policies", null, {
						hk: "3sa1sF"
					})
				}, m.a.createElement(yc, {
					href: "https://www.redditinc.com/policies/user-agreement",
					onClick: () => n(Object(lc.b)("user_agreement")),
					title: r.fbt._("User Agreement", null, {
						hk: "kfqI"
					})
				}), m.a.createElement(yc, {
					href: "https://www.redditinc.com/policies/privacy-policy",
					onClick: () => n(Object(lc.b)("privacy_policy")),
					title: r.fbt._("Privacy Policy", null, {
						hk: "y8Vyn"
					})
				}), m.a.createElement(yc, {
					href: "https://www.redditinc.com/policies/content-policy",
					onClick: () => n(Object(lc.b)("content_policy")),
					title: r.fbt._("Content Policy", null, {
						hk: "2xjmLL"
					})
				}), m.a.createElement(yc, {
					href: "https://www.redditinc.com/policies/moderator-guidelines",
					onClick: () => n(Object(lc.b)("mod_policy")),
					title: r.fbt._("Moderator Guidelines", null, {
						hk: "2AfPVY"
					})
				})),
				Qc = (e = new Date) => {
					const t = e.getFullYear();
					return `/posts/${e.getMonth()>=6?t:t-1}/`
				};
			var Jc = () => [{
				noun: "ios",
				rel: "nofollow",
				title: () => r.fbt._("Reddit iOS", null, {
					hk: "2W8O9q"
				}),
				url: "https://reddit.onelink.me/MRHZ/b3d845e"
			}, {
				noun: "android",
				rel: "nofollow",
				title: () => r.fbt._("Reddit Android", null, {
					hk: "SmUA3"
				}),
				url: "https://reddit.onelink.me/MRHZ/4c212f61"
			}, {
				noun: "gifts",
				title: () => r.fbt._("Reddit Gifts", null, {
					hk: "3FWQGX"
				}),
				url: "https://www.redditgifts.com"
			}, {
				noun: "rereddit",
				title: () => r.fbt._("Rereddit", null, {
					hk: "1DyKwo"
				}),
				url: Qc()
			}, {
				noun: "communities",
				title: () => r.fbt._("Communities", null, {
					hk: "9RIu9"
				}),
				url: "/subreddits/a-1/"
			}, {
				noun: "about_reddit",
				title: () => r.fbt._("About Reddit", null, {
					hk: "3cosfA"
				}),
				url: "https://www.redditinc.com"
			}, {
				noun: "advertise",
				title: () => r.fbt._("Advertise", null, {
					hk: "3eP3Lb"
				}),
				url: "https://www.redditinc.com/advertising"
			}, {
				noun: "blog",
				title: () => r.fbt._("Blog", null, {
					hk: "2XlvLX"
				}),
				url: "https://redditblog.com"
			}, {
				noun: "careers",
				title: () => r.fbt._("Careers", null, {
					hk: "g9gZP"
				}),
				url: "https://www.redditinc.com/careers"
			}, {
				noun: "press",
				title: () => r.fbt._("Press", null, {
					hk: "FYgfC"
				}),
				url: "https://www.redditinc.com/press"
			}];
			var Zc = ({
					isLoggedIn: e,
					isOpen: t,
					onClick: n,
					sendEvent: s,
					url: o
				}) => m.a.createElement(Ac, {
					icon: m.a.createElement(ms.a, {
						name: "info"
					}),
					title: r.fbt._("More", null, {
						hk: "42foEw"
					}),
					isOpen: t,
					onClick: (e, t) => {
						s(Object(lc.b)(t ? "more_chevron" : "more_menu")), "function" == typeof n && n(e)
					}
				}, Jc().map(e => (({
					noun: e,
					rel: t,
					title: n,
					url: s
				}, r) => m.a.createElement(yc, {
					href: s,
					key: s,
					onClick: () => {
						e && r(Object(lc.b)(e))
					},
					rel: t,
					title: n()
				}))(e, s)), e ? m.a.createElement(yc, {
					href: "https://old.reddit.com" + o,
					title: r.fbt._("Visit Old Reddit", null, {
						hk: "3Fo9ag"
					}),
					onClick: () => {
						s(Object(lc.b)("old_reddit")), s(e => ({
							source: "redesignbanner",
							action: "click",
							noun: "2xdropdown_visit_old",
							screen: xt.ab(e),
							subreddit: xt.jb(e)
						}))
					}
				}) : null),
				Yc = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				Xc = n("./src/reddit/components/HeaderUserDropdown/UserMenu/RecentCommunitiesMenu/styles.m.less"),
				$c = n.n(Xc);
			var ed = ({
					isOpen: e,
					onClick: t
				}) => {
					const [{
						links: n,
						showAll: s
					}, o] = Object(u.useState)({
						links: Object(Yc.b)(),
						showAll: !1
					});
					if (Object(u.useEffect)(() => {
							e || o({
								links: n,
								showAll: !1
							})
						}, [n, e]), 0 === n.length) return null;
					const a = s ? n : n.slice(0, 3),
						i = () => o({
							links: n,
							showAll: !s
						});
					return m.a.createElement(Ac, {
						"aria-hidden": !0,
						icon: m.a.createElement(ms.a, {
							name: "history"
						}),
						isOpen: e,
						title: r.fbt._("Recent Communities", null, {
							hk: "cJ4rl"
						}),
						onClick: t
					}, a.map(e => {
						var t, n;
						return m.a.createElement(Ec, {
							className: $c.a.basicLink,
							href: e.url,
							iconClassName: e.communityIcon || (null === (t = e.icon) || void 0 === t ? void 0 : t.url) ? void 0 : $c.a.subredditIcon,
							iconUrl: e.communityIcon || (null === (n = e.icon) || void 0 === n ? void 0 : n.url),
							key: e.url,
							title: e.title,
							titleClassName: $c.a.title
						})
					}), n.length > 3 && (e => m.a.createElement("span", {
						className: Oc.a.spanButton,
						onClick: i
					}, m.a.createElement("span", {
						className: Object(C.a)(Oc.a.headingContent, $c.a.headingContent)
					}, m.a.createElement("span", {
						className: Oc.a.title
					}, e))))(s ? r.fbt._("see less", null, {
						hk: "3tQWvR"
					}) : r.fbt._("see more", null, {
						hk: "1WV0AC"
					})))
				},
				td = n("./src/reddit/components/HeaderUserDropdown/UserMenu/index.m.less"),
				nd = n.n(td);

			function sd() {
				return (sd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const rd = e => {
					e.nativeEvent.stopImmediatePropagation()
				},
				od = e => {
					const t = e && e.coins || 0;
					return r.fbt._({
						"*": "{number of coins} coins",
						_1: "1 coin"
					}, [r.fbt._plural(t, "number of coins")], {
						hk: "qmnnm"
					})
				};
			var ad;
			! function(e) {
				e[e.RecentCommunitiesMenu = 0] = "RecentCommunitiesMenu", e[e.ExploreMenu = 1] = "ExploreMenu", e[e.MoreMenu = 2] = "MoreMenu", e[e.Settings = 3] = "Settings", e[e.TermsAndPolicies = 4] = "TermsAndPolicies"
			}(ad || (ad = {}));
			var id = e => {
					const {
						closeUserDropdown: t,
						dispatchOpenLoginModal: n,
						logoutUser: s,
						openCommunityCreationModal: o,
						sendEvent: a,
						shouldShowCreateCommunityItem: i,
						url: c,
						user: d
					} = e, [l, p] = Object(u.useState)(ad.TermsAndPolicies), b = e => () => {
						p(l === e ? null : e)
					}, h = e => ({
						onClick: b(e),
						isOpen: l === e
					}), f = !!d, g = () => {
						t(), n()
					};
					return m.a.createElement("div", {
						onClick: rd
					}, m.a.createElement(qc, null), m.a.createElement(Vc, null), m.a.createElement(() => i ? m.a.createElement(Tc, {
						icon: m.a.createElement(ms.a, {
							name: "community"
						}),
						onClick: () => {
							o(), a(Object(uc.a)())
						},
						title: r.fbt._("Create a Community", null, {
							hk: "3QGru4"
						})
					}) : null, null), m.a.createElement(() => m.a.createElement(Rc, {
						icon: m.a.createElement(ms.a, {
							name: "coins"
						}),
						href: "/coins",
						title: m.a.createElement(m.a.Fragment, null, m.a.createElement("span", null, r.fbt._("Coins", null, {
							hk: "2g3szC"
						})), m.a.createElement("span", {
							className: nd.a.meta
						}, od(d))),
						onClick: () => {
							Object(Pr.e)(Pr.a.GoldPayment, !0), e.sendEvent(Object(mc.b)())
						},
						titleClassName: nd.a.coinsTitle,
						className: nd.a.coinsLink
					}), null), m.a.createElement(() => m.a.createElement(Rc, {
						icon: m.a.createElement(ms.a, {
							name: "premium"
						}),
						href: "/premium",
						onClick: () => {
							Object(Pr.e)(Pr.a.GoldPayment, !0), e.sendEvent(Object(mc.e)())
						},
						title: r.fbt._("Premium", null, {
							hk: "Ib64I"
						})
					}), null), m.a.createElement(() => m.a.createElement(Rc, {
						icon: m.a.createElement(ms.a, {
							name: "powerup"
						}),
						href: Ds.a,
						onClick: () => {
							Object(Pr.e)(Pr.a.GoldPayment, !0), e.sendEvent(Object(mc.c)())
						},
						title: r.fbt._("Powerups", null, {
							hk: "2rTyID"
						})
					}), null), m.a.createElement(() => m.a.createElement(Rc, {
						icon: m.a.createElement(ms.a, {
							name: "live"
						}),
						href: Us.a,
						onClick: () => e.sendEventWithName("reddit_talk"),
						title: r.fbt._("Talk", null, {
							hk: "2nFtKJ"
						})
					}), null), !f && m.a.createElement(ed, h(ad.RecentCommunitiesMenu)), m.a.createElement(Uc, sd({}, h(ad.ExploreMenu), {
						sendEvent: a
					})), m.a.createElement(Kc, h(ad.Settings)), m.a.createElement(() => m.a.createElement(Rc, {
						href: "https://www.reddithelp.com/hc/en-us",
						icon: m.a.createElement(ms.a, {
							name: "help"
						}),
						title: r.fbt._("Help Center", null, {
							hk: "4sGjc0"
						}),
						onClick: () => e.sendEventWithName("help_center")
					}), null), m.a.createElement(Zc, sd({}, h(ad.MoreMenu), {
						isLoggedIn: f,
						url: c,
						sendEvent: a
					})), m.a.createElement(zc, sd({}, h(ad.TermsAndPolicies), {
						sendEvent: a
					})), m.a.createElement(() => f ? m.a.createElement(Tc, {
						icon: m.a.createElement(ms.a, {
							name: "logout"
						}),
						onClick: () => {
							e.sendEventWithName("logout"), s()
						},
						title: r.fbt._("Log Out", null, {
							hk: "2SjIc8"
						})
					}) : m.a.createElement(Tc, {
						icon: m.a.createElement(ms.a, {
							name: "profile"
						}),
						onClick: g,
						title: r.fbt._("Sign Up or Log In", null, {
							hk: "3pedCU"
						})
					}), null), m.a.createElement(() => m.a.createElement("div", {
						className: Oc.a.copyrightContainer
					}, m.a.createElement("span", {
						className: Oc.a.copyrightText
					}, r.fbt._("© {year} Reddit, Inc. All rights reserved", [r.fbt._param("year", (new Date).getFullYear().toString())], {
						hk: "1rgU6A"
					}))), null))
				},
				cd = n("./src/reddit/components/HeaderUserDropdown/index.m.less"),
				dd = n.n(cd);

			function ld() {
				return (ld = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ud = "undefined" != typeof window && "new.reddit.com" !== window.location.hostname,
				md = () => m.a.createElement("div", {
					className: dd.a.wrappedRedditLink
				}, r.fbt._("{=Reddit Recap}{=NEW!}", [r.fbt._param("=Reddit Recap", m.a.createElement("p", {
					className: dd.a.title
				}, r.fbt._("Reddit Recap", null, {
					hk: "1fzA7a"
				}))), r.fbt._param("=NEW!", m.a.createElement("p", {
					className: dd.a.new
				}, r.fbt._("NEW!", null, {
					hk: "hAUg8"
				})))], {
					hk: "3xR4ek"
				})),
				pd = M.a.wrapped(oc.a, "Dropdown", dd.a),
				bd = Object(sc.a)(pd),
				hd = e => t => m.a.createElement(ms.a, ld({
					name: e
				}, t)),
				fd = e => m.a.createElement(ic.a, {
					className: Object(C.a)(dd.a.button, e.className),
					"data-redditstyle": !0,
					onClick: e.onClick
				}, e.children, m.a.createElement("div", {
					className: dd.a.buttonText
				}, e.displayText), m.a.createElement(ac.a, {
					className: dd.a.toggleSwitch,
					"data-redditstyle": !0,
					redditStyle: !0,
					on: e.isEnabled
				}));
			var gd = Object(R.c)(e => {
				const {
					logoutUser: t,
					dispatchOpenLoginModal: n,
					isCrawler: s,
					isModModeEnabled: o,
					isPresenceToggleEnabled: a,
					navbarLikeMweb: i,
					navbarLikeMwebV2: c,
					nightmode: d,
					requestAwardKarma: l,
					showPresence: b,
					toggleModMode: h,
					user: f,
					sendEvent: g,
					shouldShowCreateCommunityItem: C,
					openCommunityCreationModal: O
				} = e, v = f && f.id, x = Object(p.e)(Gs.r), y = Object(p.e)(t => e.isOpen && Object(Gs.z)(t)), E = Object(p.e)(Ws.b);
				Object(u.useEffect)(() => {
					l()
				}, [v]);
				const j = Object(ic.c)(hd("settings"), r.fbt._("User Settings", null, {
						hk: "46J4vT"
					})),
					S = Object(ic.b)(hd("help"), r.fbt._("Help Center", null, {
						hk: "4sGjc0"
					})),
					k = Object(ic.b)(hd("external_link"), r.fbt._("Visit Old Reddit", null, {
						hk: "3Fo9ag"
					})),
					P = Object(ic.c)(hd("logout"), r.fbt._("Log In / Sign Up", null, {
						hk: "4xbfvS"
					})),
					w = Object(ic.c)(hd("logout"), r.fbt._("Log Out", null, {
						hk: "2SjIc8"
					})),
					N = Object(ic.c)(pc.a, r.fbt._("Opt In to New Reddit", null, {
						hk: "4jiTxA"
					})),
					I = (e => {
						const t = e && e.coins || 0;
						return r.fbt._({
							"*": "{number of coins} coins",
							_1: "1 coin"
						}, [r.fbt._plural(t, "number of coins")], {
							hk: "qmnnm"
						})
					})(f),
					M = Object(ic.c)(hd("coins"), r.fbt._("Coins", null, {
						hk: "25oh47"
					}), {
						meta: I
					}),
					T = r.fbt._("No ads, monthly coins, and more!", null, {
						hk: "3OXYGs"
					}),
					R = Object(ic.c)(hd("premium"), r.fbt._("Premium", null, {
						hk: "1SD1CS"
					}), {
						meta: y ? T : void 0
					}),
					L = () => {
						Object(Pr.e)(Pr.a.GoldPayment, !0), g(Object(mc.e)())
					},
					A = Object(ic.c)(hd("powerup"), r.fbt._("Powerups", null, {
						hk: "3ND1rQ"
					})),
					F = Object(ic.c)(Es, md),
					D = Object(ic.c)(hd("live"), r.fbt._("Talk", null, {
						hk: "5IHxP"
					})),
					B = Object(ic.c)(hd("prediction"), r.fbt._("Predictions", null, {
						hk: "1LUvJo"
					})),
					U = Object(ic.c)(hd("community"), r.fbt._("Create a Community", null, {
						hk: "3QGru4"
					}));
				return i || c ? s ? m.a.createElement(rc.a, null, m.a.createElement(id, e)) : m.a.createElement(bd, {
					className: dd.a.navbarLikeMweb,
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID",
					tooltipPosition: ["right", "top"],
					targetPosition: ["right", "bottom"]
				}, m.a.createElement(id, e)) : m.a.createElement(bd, {
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID"
				}, f && a && m.a.createElement(m.a.Fragment, null, m.a.createElement("h3", {
					className: dd.a.sectionHeader,
					role: "heading"
				}, r.fbt._("Online Status", null, {
					hk: "23SMHV"
				})), m.a.createElement(fd, {
					className: dd.a.presenceToggle,
					displayText: b ? r.fbt._("On", null, {
						hk: "3aW5MW"
					}) : r.fbt._("Off", null, {
						hk: "pRgYU"
					}),
					isEnabled: b,
					onClick: () => {
						g(Object(mc.h)(!b)), e.toggleShowPresence(!b)
					}
				})), f && m.a.createElement(u.Fragment, null, m.a.createElement("h3", {
					className: dd.a.sectionHeader,
					role: "heading"
				}, r.fbt._("My Stuff", null, {
					hk: "47vhMb"
				})), E && m.a.createElement(F, {
					href: vs.b,
					onClick: () => {
						e.sendEvent(Object(mc.f)())
					}
				}), (e => {
					const t = r.fbt._("Profile", null, {
							hk: "czKk9"
						}),
						n = Object(ic.c)(hd("profile"), t);
					return m.a.createElement(n, {
						href: e.url,
						onClick: () => g(Object(lc.b)("profile"))
					})
				})(f), m.a.createElement(Ic, null), m.a.createElement(j, {
					href: "/settings",
					onClick: () => g(Object(lc.b)("settings"))
				})), m.a.createElement("h3", {
					className: dd.a.sectionHeader,
					role: "heading"
				}, r.fbt._("View Options", null, {
					hk: "3bZPKB"
				})), f && f.isMod && m.a.createElement(fd, {
					displayText: r.fbt._("Mod Mode", null, {
						hk: "3Rb4sj"
					}),
					isEnabled: o,
					onClick: () => {
						g(Object(dc.i)(!o)), h()
					}
				}, m.a.createElement(ms.a, {
					name: "mod_mode",
					className: dd.a.modModeIcon
				})), m.a.createElement(fd, {
					displayText: r.fbt._("Night Mode", null, {
						hk: "2lyxcc"
					}),
					isEnabled: d,
					onClick: () => {
						g(Object(mc.g)(d)), e.toggleNightmode(!d)
					}
				}, m.a.createElement(ms.a, {
					name: "night",
					className: dd.a.nightIcon
				})), m.a.createElement("h3", {
					className: dd.a.sectionHeader,
					role: "heading"
				}, r.fbt._("More Stuff", null, {
					hk: "4Gad8T"
				})), C && m.a.createElement(U, {
					className: dd.a.entrypointLink,
					onClick: () => {
						O(), g(Object(uc.a)())
					}
				}), m.a.createElement(u.Fragment, null, y && m.a.createElement(R, {
					href: "/premium",
					onClick: L
				}), m.a.createElement(M, {
					href: "/coins",
					onClick: () => {
						Object(Pr.e)(Pr.a.GoldPayment, !0), g(Object(mc.b)())
					}
				}), !y && m.a.createElement(R, {
					href: "/premium",
					onClick: L
				}), m.a.createElement(A, {
					href: "/powerups",
					onClick: () => {
						Object(Pr.e)(Pr.a.PowerupsFlow, !0), g(Object(mc.c)())
					}
				}), m.a.createElement(D, {
					href: Us.a,
					onClick: () => g(Object(lc.b)("reddit_talk"))
				}), x && m.a.createElement(B, {
					href: "/predictions",
					onClick: () => {
						Object(Pr.e)(Pr.a.GoldPayment, !0), g(Object(mc.d)())
					}
				})), m.a.createElement(S, {
					href: "https://www.reddithelp.com",
					onClick: () => g(Object(lc.b)("help_center"))
				}), f && m.a.createElement(k, {
					href: "https://old.reddit.com" + e.url,
					onClick: () => {
						g(Object(lc.b)("old_reddit")), g(e => ({
							source: "redesignbanner",
							action: "click",
							noun: "2xdropdown_visit_old",
							screen: xt.ab(e),
							subreddit: xt.jb(e)
						}))
					}
				}), !ud && f && m.a.createElement(N, {
					href: "",
					onClick: () => {
						g(e => ({
							source: "redesignbanner",
							action: "click",
							noun: "2xdropdown_opt_in",
							screen: xt.ab(e),
							subreddit: xt.jb(e)
						})), e.onOptIntoRedesign()
					}
				}), m.a.createElement("div", {
					className: dd.a.divider
				}), f ? m.a.createElement(w, {
					href: "#",
					onClick: e => {
						g(Object(lc.b)("logout")), t(), e.preventDefault()
					}
				}) : m.a.createElement(P, {
					href: "#",
					onClick: e => {
						Object(_.a)(e) && (e.preventDefault(), e.stopPropagation(), n(), g(Object(cc.b)()))
					}
				}))
			});

			function Cd() {
				return (Cd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Od = e => t => m.a.createElement(ms.a, Cd({
					name: e
				}, t)),
				vd = Object(p.b)(() => Object(g.c)({
					isCrawler: e => !!Object(tc.a)(e),
					isModModeEnabled: ec.a,
					isOpen: Object(nc.b)("USER_DROPDOWN_ID"),
					isPresenceToggleEnabled: $i.d,
					shouldShowCreateCommunityItem: yt.hb,
					navbarLikeMweb: Xi.a,
					navbarLikeMwebV2: Xi.b,
					nightmode: yt.W,
					showPresence: yt.O,
					url: At.u
				}), (e, t) => ({
					closeUserDropdown: () => e(Object(ca.j)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					exposeNavClickV2Experiment: () => e((() => async (e, t) => Object(na.e)(t(), Kt.Md))()),
					toggleNightmode: t => e(Object(pi.y)(t)),
					toggleShowPresence: t => e(Object(pi.H)({
						showPresence: t
					})),
					onOptIntoRedesign: () => e(Object(Hi.a)()),
					onOptOutOfRedesign: () => {
						"new.reddit.com" !== window.location.host ? (je.a.get("rseor3") && je.a.remove("rseor3", {
							domain: U.a.cookieDomain
						}), e(Object(Hi.b)(!0))) : window.location.host = "old.reddit.com"
					},
					requestAwardKarma: () => {
						var n;
						!t.user || null !== (n = t.user.karma) && void 0 !== n && n.total || e(Object(qi.f)(Object(Ct.e)(t.user)))
					},
					dispatchOpenLoginModal: () => e(Object(ia.i)()),
					logoutUser: () => {
						const {
							googleOneTapIFrame: n
						} = t;
						n && n.contentWindow && (console.log("postMessage: disableAutoSelect"), n.contentWindow.postMessage({
							type: "disableAutoSelect"
						}, Object(Ki.a)())), e(Object(bi.q)())
					},
					toggleModMode: () => e(Object(Wi.b)()),
					openCommunityCreationModal: () => e(Object(Se.h)(tt.a.SUBREDDIT_CREATION_MODAL_ID))
				}));
			var xd = Object(zt.u)({
					pageLayer: e => e
				})(vd(e => {
					const {
						exposeNavClickV2Experiment: t,
						isPresenceToggleEnabled: n,
						requestAwardKarma: s,
						showPresence: o,
						user: a
					} = e, i = Object(p.e)($i.b), [c, d] = Object(u.useState)(!1), l = a && a.id;
					Object(u.useEffect)(() => {
						s()
					}, [l]);
					const b = Object(u.useMemo)(() => ({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "USER_IS_ONLINE",
									userID: l
								}
							}
						}), [l]),
						h = Object(u.useCallback)(() => {
							d("visible" === document.visibilityState)
						}, []);
					return Object(Qi.a)("visibilitychange", h), Object(u.useEffect)(() => {
						d("visible" === document.visibilityState)
					}, []), m.a.createElement("div", {
						className: Object(C.a)(dd.a.container, Vi.e)
					}, o && c && i && m.a.createElement(Gi.a, {
						variables: b,
						onData: Bi.a,
						queryKey: "userIsOnline"
					}), m.a.createElement(Yi.a, {
						"aria-expanded": e.isOpen,
						"aria-haspopup": !0,
						className: Object(C.a)(e.className, dd.a.inlineButton, {
							[dd.a.dropdownOpen]: e.isOpen,
							[dd.a.isLoggedOut]: !a,
							[dd.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						id: "USER_DROPDOWN_ID",
						onClick: () => {
							t(), e.onClick(), e.sendEventWithName("self_user_icon")
						}
					}, m.a.createElement("span", {
						className: dd.a.accountDisplayText
					}, (t => t ? m.a.createElement("span", {
						className: Object(C.a)(dd.a.accountWrapper, dd.a.isLoggedIn),
						id: "email-collection-tooltip-id"
					}, t.accountIcon && m.a.createElement(Os.a, {
						className: Object(C.a)(dd.a.imgIcon, {
							[dd.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						wrapperClassName: dd.a.imgIconWrapper,
						shouldShowPresenceIndicator: n && o
					}), m.a.createElement("span", {
						className: dd.a.accountDetails
					}, m.a.createElement("span", {
						className: dd.a.username
					}, t.displayText, t.isGold && m.a.createElement(Zi.a, {
						className: dd.a.premiumFontIcon,
						title: r.fbt._("Reddit Premium", null, {
							hk: "4Dwpyn"
						}),
						isFilled: !0
					})), m.a.createElement("span", {
						className: dd.a.accountKarma
					}, m.a.createElement(ms.a, {
						name: "karma",
						isFilled: !0,
						className: dd.a.karmaIcon
					}), m.a.createElement("span", null, (e => {
						const t = Object(zi.a)(e),
							n = Object(Ui.b)(t);
						return r.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [r.fbt._plural(t, "karma count", n)], {
							hk: "ndlXe"
						})
					})(t))), !!t.coins && m.a.createElement("span", {
						className: dd.a.accountCoins
					}, m.a.createElement(Ji.a, {
						className: dd.a.coinFontIcon,
						isFilled: !0
					}), m.a.createElement("span", null, (e => Object(Ui.b)(e.coins || 0, {
						displayFull: !1,
						roundDown: !0
					}))(t))))) : e.navbarLikeMweb ? null : m.a.createElement("span", {
						className: Object(C.a)(dd.a.accountWrapper, dd.a.isLoggedOut)
					}, m.a.createElement(ms.a, {
						name: "user",
						className: dd.a.defaultProfileIcon
					})))(e.user), m.a.createElement(ms.a, {
						name: "caret_down"
					})), m.a.createElement(Kr.a, null, r.fbt._("User account menu", null, {
						hk: "2TJXIP"
					}))), m.a.createElement(gd, e))
				})),
				yd = n("./src/reddit/components/ModerationDropdown/index.tsx"),
				Ed = n("./src/reddit/components/PromptTooltip/TooltipHooked.m.less"),
				jd = n.n(Ed);

			function _d() {
				return (_d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Sd = m.a.memo((function({
					visible: e,
					...t
				}) {
					const [n, s] = Object(u.useState)(e);
					return Object(u.useEffect)(() => {
						let t = window.setTimeout(() => {
							t = void 0, s(e)
						}, 0);
						return () => {
							t && window.clearTimeout(t), s(!1)
						}
					}, [e]), e ? t.styled ? m.a.createElement("div", _d({
						className: Object(C.a)(jd.a.tooltip, {
							[jd.a.visible]: n || t.isInstant
						})
					}, t.popperProps, {
						onMouseEnter: () => t.isCloseOnHover && t.hide()
					}), t.children, n && !t.noArrow && m.a.createElement("div", _d({
						className: jd.a.arrow
					}, t.arrowProps))) : m.a.createElement("div", t.popperProps, t.children) : null
				})),
				kd = n("./src/reddit/components/Settings/modalIds.ts"),
				Pd = n("./src/reddit/helpers/trackers/inbox.ts"),
				wd = n("./src/reddit/routes/index.ts"),
				Nd = n("./src/reddit/selectors/appBadges.ts");
			const Id = e => Object(na.c)(e, {
					experimentName: Kt.E,
					experimentEligibilitySelector: () => Object(yt.I)(e)
				}) === Kt.Vc,
				Md = e => Object(na.c)(e, {
					experimentName: Kt.G,
					experimentEligibilitySelector: () => Object(yt.I)(e) && !Id(e)
				}) === Kt.Vc,
				Td = e => Object(na.c)(e, {
					experimentName: Kt.H,
					experimentEligibilitySelector: () => Object(yt.I)(e) && !Id(e)
				}) === Kt.Vc;
			var Rd = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				Ld = n("./src/reddit/selectors/sso.ts");
			const Ad = "change-username-tooltip-id",
				Fd = "email-verification-tooltip-id",
				Dd = m.a.memo((function({
					moderationDropdownOpen: e,
					...t
				}) {
					const n = Object(Xo.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: xa.a.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: n.target.ref
					}, m.a.createElement(Ca, {
						"aria-expanded": e,
						"aria-haspopup": !0,
						"aria-label": r.fbt._("Moderation", null, {
							hk: "1qCuzM"
						}),
						id: yd.a,
						onClick: t.onOpenModerationDropdown,
						isOpen: e
					}, m.a.createElement(Oa.a, {
						isActive: t.isModerateIconLit,
						unreadCount: -1,
						showEmpty: !0
					}), m.a.createElement(ms.a, {
						className: xa.a.icon2020,
						name: "mod"
					})), m.a.createElement(Yo.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, r.fbt._("Moderation", null, {
						hk: "4uQPyx"
					}))), m.a.createElement(yd.b, {
						className: xa.a.moderationDropdown,
						isOpen: e,
						unreadNotifications: t.unreadNotifications,
						sendEventWithName: t.sendEventWithName
					}))
				})),
				Bd = m.a.memo((function(e) {
					const t = Object(Xo.a)(),
						n = Object(ua.b)(),
						s = Object(p.e)(yt.k),
						o = Object(p.e)(Md),
						a = Object(p.e)(Td),
						i = o || a,
						c = {
							...n.arrowProps,
							style: {
								...n.arrowProps.style,
								borderBottom: "5px solid #006DC6"
							}
						};
					return Object(u.useEffect)(() => {
						const e = Object(oi.c)(O.q.CHAT, O.y.CHAT_MEDIA_SHARE_GLOBAL_PROMPT, (null == s ? void 0 : s.id) || "unknown"),
							t = Object(oi.b)(e);
						i && (t || 0) < 3 && Object(oi.d)(e, t ? t + 1 : 1, oi.a), i && 2 === t && setTimeout(() => {
							n.show()
						}, 1e3)
					}, []), m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: xa.a.iconWrapper,
						onMouseEnter: () => {
							n.hide(), t.show()
						},
						onMouseLeave: t.hide,
						ref: Object(da.a)(t.target.ref, n.target.ref)
					}, m.a.createElement("a", {
						className: xa.a.link,
						href: `${U.a.redditUrl}/chat`,
						onClick: Object(ii.a)(e.onClickChat)
					}, m.a.createElement(Mi, {
						badgeCount: e.badgeCount,
						hasUnreadGroupMessages: e.hasUnreadChatMessages
					}))), m.a.createElement(Yo.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, r.fbt._("Chat", null, {
						hk: "4nXRWH"
					})), i && m.a.createElement(Sd, {
						arrowProps: c,
						popperProps: n.popperProps,
						visible: n.visible,
						hide: () => {},
						isInstant: !0,
						styled: !0
					}, m.a.createElement("button", {
						className: xa.a.Tooltip
					}, r.fbt._("NEW! Send images", null, {
						hk: "1CSvOg"
					}))))
				})),
				Ud = m.a.memo((function({
					onClickMail: e,
					unreadNotifications: t
				}) {
					const n = Object(Xo.a)();
					return m.a.createElement("span", {
						className: xa.a.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: n.target.ref
					}, m.a.createElement("a", {
						className: xa.a.link,
						href: t && t.hasUnreadMail ? "/message/unread" : "/message/inbox",
						onClick: e
					}, m.a.createElement(Fi, {
						unreadCount: t && t.inboxCount || 0
					})), m.a.createElement(Yo.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, r.fbt._("Messages", null, {
						hk: "Txokh"
					})))
				})),
				Gd = m.a.memo((function(e) {
					const t = Object(Xo.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: xa.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, m.a.createElement("button", {
						className: xa.a.link,
						"aria-label": r.fbt._("Create Post", null, {
							hk: "4wbXc8"
						}),
						onClick: e.onClickCreatePost
					}, m.a.createElement(ms.a, {
						className: xa.a.icon2020,
						name: "add"
					}))), m.a.createElement(Yo.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, r.fbt._("Create Post", null, {
						hk: "1TvNGq"
					})))
				})),
				Hd = Object(zt.u)({
					pageLayer: e => e
				}),
				Wd = Object(g.c)({
					activeDropdownId: nc.a,
					appBadges: Nd.b,
					chatDirectMessagesCount: Nd.e,
					email: yt.n,
					hasUnreadChatMessages: Nd.f,
					inboxBadgeCount: Nd.g,
					isAvatarQuickCreateEnabled: e => Object(Gs.g)(e) && (e => {
						const t = Ya(e),
							n = (new Date).getTime(),
							s = Object(Ut.y)();
						if (!(null == t ? void 0 : t.active) || !Xa(e, null == t ? void 0 : t.min_days_on_reddit, t.should_have_avatar)) return !1;
						if (s && t) {
							const e = n > s.lastInteractionTimestamp + Za(null == t ? void 0 : t.min_days_since_last_event_interaction);
							return !!(s.id === t.id && e && s.eventViews <= t.max_event_views) || s.id !== t.id && e
						}
						return !1
					})(e),
					isChangeUsernameTooltipShowing: e => e.isChangeUsernameTooltipShowing,
					isCustomizeFlyoutShowing: e => e.user.isCustomizeFlyoutShowing,
					isEmailVerificationTooltipShowing: e => e.isEmailVerificationTooltipShowing,
					isGoogleOneTapEnabled: Rd.c,
					isInboxRedesignActive: Hs.b,
					isModerator: vt.j,
					isNameEditable: yt.L,
					isResponsiveSettingsEnabled: Jt.a,
					shouldOpenEmailVerificationTooltip: (e, {
						pageLayer: t
					}) => Object(zt.N)(t) && !!Object(yt.n)(e) && !Object(yt.A)(e) && Object(yt.J)(e) && !Object(yt.H)(e),
					shouldShowChangeUsernameModals: Ld.c,
					unreadNotifications: yt.kb
				}),
				qd = Object(p.b)(Wd, (e, t) => ({
					closeChangeUsernameTooltip: () => e(Object(di.d)()),
					closeEmailVerificationTooltip: () => e(Object(ui.b)()),
					showEmailVerficiationTooltip: () => e(Object(ui.b)()),
					fetchAppBadges: () => e(Object(ci.c)()),
					onChatClick: () => e(Object(li.g)()),
					onDismissCustomizeFlyout: () => e(Object(pi.u)()),
					onOpenModerationDropdown: () => {
						e(Object(ca.h)({
							tooltipId: yd.a
						})), e(Object(Sr.q)())
					},
					onOpenUserDropdown: () => e(Object(ca.h)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					openChangeUsernameModal: () => {
						e(Object(Se.h)(kd.b))
					},
					openKeepUsernameModal: () => {
						e(Object(Se.h)(kd.g))
					},
					toggleChangeEmailModal: () => {
						e(Object(ui.b)()), e(Object(Se.i)(kd.a))
					},
					resendEmail: () => e(Object(bi.x)(vi.a)),
					requestCreatePost: () => {
						t.pageLayer && e(mi.p(t.pageLayer))
					},
					startChangeUsernameFlow: t => {
						const n = Object(h.b)(t);
						e(Object(di.f)(n))
					}
				}));
			class Vd extends m.a.Component {
				constructor() {
					super(...arguments), this.state = {
						googleOneTapIFrame: null
					}, this.sendNavClickInbox = () => this.props.sendEvent(Object(Pd.t)({
						badgeCount: this.props.inboxBadgeCount
					})), this.sendEventWithName = e => this.props.sendEvent(Object(lc.b)(e)), this.onClickMail = () => this.sendEventWithName("mail"), this.onClickCreatePost = () => {
						this.sendEventWithName("create_post"), this.props.requestCreatePost()
					}, this.onClickChat = () => {
						this.sendEventWithName("chat"), this.props.onChatClick()
					}, this.onOpenModerationDropdown = () => {
						this.props.onOpenModerationDropdown(), this.sendEventWithName("mod_entry")
					}, this.confirmNavigate = e => {
						const t = Object(ai.a)(e.pathname, wd.a),
							n = t && t.route && t.route.meta && t.route.meta.name;
						return !n || n !== O.Mb.POST_CREATION && n !== O.Mb.PROFILE_OVERVIEW || (this.props.startChangeUsernameFlow(e.pathname), !1)
					}, this.exposeIFrameElement = e => {
						this.setState({
							googleOneTapIFrame: e
						})
					}
				}
				componentDidMount() {
					this.props.showEmailVerficiationTooltip(), Jr()(this.props.appBadges) && this.props.fetchAppBadges()
				}
				render() {
					const {
						activeDropdownId: e,
						chatDirectMessagesCount: t,
						className: n,
						closeChangeUsernameTooltip: s,
						closeEmailVerificationTooltip: r,
						email: o,
						hasUnreadChatMessages: a,
						inboxBadgeCount: i,
						isAvatarQuickCreateEnabled: c,
						isChangeUsernameTooltipShowing: d,
						isCustomizeFlyoutShowing: l,
						isEmailVerificationTooltipShowing: p,
						isGoogleOneTapEnabled: b,
						isInboxRedesignActive: h,
						isModerator: f,
						isNameEditable: g,
						isResponsiveSettingsEnabled: O,
						onDismissCustomizeFlyout: v,
						onOpenUserDropdown: x,
						openChangeUsernameModal: y,
						openKeepUsernameModal: E,
						pageLayer: j,
						resendEmail: _,
						shouldOpenEmailVerificationTooltip: S,
						shouldShowChangeUsernameModals: k,
						toggleChangeEmailModal: P,
						unreadNotifications: w,
						user: N
					} = this.props, {
						googleOneTapIFrame: I
					} = this.state, M = !(!w || !w.hasUnreadModmail), T = N && Object(Ct.e)(N) || "", R = Object(C.a)({
						[xa.a["m-responsive"]]: O
					});
					return m.a.createElement(ft.a, {
						id: Fd,
						ref: e => this.container = e,
						className: n
					}, m.a.createElement(ft.a, {
						className: xa.a.headerLinks,
						id: Ad
					}, f && m.a.createElement(Dd, {
						isModerateIconLit: M,
						moderationDropdownOpen: e === yd.a,
						onOpenModerationDropdown: this.onOpenModerationDropdown,
						sendEventWithName: this.sendEventWithName,
						unreadNotifications: w
					}), N && m.a.createElement(u.Fragment, null, m.a.createElement(Bd, {
						onClickChat: this.onClickChat,
						badgeCount: t,
						hasUnreadChatMessages: a
					}), h ? m.a.createElement(Wa, {
						sendNavClickInbox: this.sendNavClickInbox,
						unreadCount: i,
						pageUrl: null == j ? void 0 : j.url,
						userId: N.id,
						isLoggedIn: !!N,
						iconWrapper: xa.a.iconWrapper
					}) : m.a.createElement(Ud, {
						onClickMail: this.onClickMail,
						unreadNotifications: w
					}), m.a.createElement(Gd, {
						onClickCreatePost: this.onClickCreatePost
					}), m.a.createElement("span", {
						className: xa.a.iconWrapper
					}, c ? m.a.createElement(ri, {
						avatarUrlParams: {
							avatarId: "random",
							username: T
						}
					}) : m.a.createElement(Ii.a, null)))), m.a.createElement(xd, {
						className: xa.a.headerUserDropdown,
						googleOneTapIFrame: I,
						onClick: x,
						user: N,
						sendEventWithName: this.sendEventWithName
					}), b && m.a.createElement("div", {
						className: xa.a.loggedInGoogleOneTap
					}, m.a.createElement(Ni, {
						exposeIFrameElement: this.exposeIFrameElement
					})), l && m.a.createElement(Ai, {
						onCloseFlyout: v
					}), m.a.createElement(_i, {
						closeTooltip: r,
						email: o,
						isOpen: S && p,
						resendEmail: _,
						toggleChangeEmailModal: P,
						tooltipId: Fd
					}), m.a.createElement(Ci, {
						email: o,
						shouldOpenTooltip: S
					}), g && !O && m.a.createElement(u.Fragment, null, m.a.createElement(gi.a, {
						closeTooltip: s,
						isOpen: d && !k,
						openChangeUsernameModal: y,
						openKeepUsernameModal: E,
						tooltipId: Ad,
						username: T
					}), k && m.a.createElement(fi.a, {
						isResponsiveSettingsEnabled: O,
						overlayClassName: R,
						username: T,
						withOverlay: !0
					}), m.a.createElement(hi.a, {
						confirmNavigate: this.confirmNavigate
					})))
				}
			}
			var Kd = Object(R.c)(Hd(qd(Vd))),
				zd = n("./src/reddit/components/Header/User/index.m.less"),
				Qd = n.n(zd);
			const {
				fbt: Jd
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Zd = Object(g.c)({
				account: e => e.user.account,
				origin: kc.j
			}), Yd = m.a.memo(e => m.a.createElement("div", {
				className: Object(C.a)(e.className, Qd.a.row)
			}, !e.account && m.a.createElement(Xd, e), m.a.createElement(Kd, {
				className: Object(C.a)({
					[Qd.a.loggedOut]: !e.account
				}),
				user: e.account
			}))), Xd = e => {
				const t = Object(p.e)(Nd.g),
					n = Object(p.e)(yt.rb),
					s = Object(p.e)(Hs.d),
					r = e.pageLayer,
					o = U.a.accountManagerOrigin,
					a = r ? r.url : "/",
					i = r && r.meta && r.meta.name === O.Mb.EXPLORE ? encodeURIComponent(e.origin) : encodeURIComponent(e.origin + a);
				return m.a.createElement(m.a.Fragment, null, s && m.a.createElement(Wa, {
					sendNavClickInbox: () => e.sendEvent(Object(Pd.t)({
						badgeCount: t
					})),
					unreadCount: t,
					pageUrl: a,
					userId: n,
					isLoggedIn: !1,
					iconWrapper: Qd.a.iconWrapper
				}), m.a.createElement("div", {
					className: Qd.a.loggedOutRow
				}, m.a.createElement(Ie.t, {
					kind: Ie.b.ExternalLink,
					priority: Ie.c.Secondary,
					redditStyle: !0,
					className: Qd.a.button,
					href: `${o}/login/?dest=${i}`,
					onClick: t => {
						Object(_.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenLoginModal(), e.sendEvent(Object(cc.a)("nav")))
					}
				}, Jd._("Log In", null, {
					hk: "4Cxw0g"
				})), m.a.createElement(Ie.t, {
					kind: Ie.b.ExternalLink,
					priority: Ie.c.Primary,
					redditStyle: !0,
					className: Object(C.a)(Qd.a.separator, Qd.a.button),
					href: `${o}/register/?dest=${i}`,
					onClick: t => {
						Object(_.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenRegisterModal(), e.sendEvent(Object(cc.c)("nav")))
					}
				}, Jd._("Sign Up", null, {
					hk: "2WZPuJ"
				}))))
			};
			var $d = Object(zt.u)()(Object(p.b)(Zd, e => ({
					onOpenLoginModal: () => {
						e(Object(Se.k)({
							actionSource: Se.a.HeaderLogin
						})), e(Object(ia.i)())
					},
					onOpenRegisterModal: () => {
						e(Object(Se.k)({
							actionSource: Se.a.HeaderSignup
						})), e(Object(ia.j)())
					},
					closeUserDropdown: () => e(Object(ca.j)({
						tooltipId: "USER_DROPDOWN_ID"
					}))
				}))(Object(R.c)(Yd))),
				el = n("./src/reddit/components/Header/index.m.less"),
				tl = n.n(el);

			function nl() {
				return (nl = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const sl = M.a.header("HeaderDynamicStyles", tl.a),
				rl = Object(g.c)({
					isLoggedIn: yt.J,
					isNightMode: yt.W,
					isResponsiveSettingsEnabled: Jt.a,
					isPageResponsive: zo.a,
					isBladeOpen: e => !!e.structuredStyles.isEditing
				}),
				ol = Object(zt.u)({
					categoryName: zt.c,
					pageLayer: e => e
				}),
				al = e => {
					const t = Object(u.useContext)(f.a);
					return m.a.createElement("div", {
						className: tl.a.left
					}, m.a.createElement(Kr.a, null, r.fbt._("Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts", null, {
						hk: "ToBNc"
					})), m.a.createElement(Vr.b, null), m.a.createElement(ds.a, {
						"aria-label": r.fbt._("Home", null, {
							hk: "3PmGmU"
						}),
						className: tl.a.centeredRow,
						to: "/",
						onClick: e.onReloadFrontpage
					}, m.a.createElement(Vo.a, {
						className: Object(C.a)(tl.a.snoo, {
							[tl.a.snooExp]: t
						})
					}), m.a.createElement(Ko.a, {
						className: tl.a.wordmark
					})), e.children)
				},
				il = e => m.a.createElement("div", {
					className: tl.a.right
				}, e.children, m.a.createElement($d, null)),
				cl = e => {
					const t = Object(u.useContext)(f.a);
					return m.a.createElement("div", {
						className: Object(C.a)(tl.a.layout, {
							[tl.a.layoutContainer]: t
						})
					}, m.a.createElement(al, nl({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), m.a.createElement(qr, null), m.a.createElement(qo, {
						className: tl.a.search
					})), m.a.createElement(il, null, m.a.createElement(aa, {
						className: tl.a.quickLinks
					})))
				},
				dl = e => {
					const t = Object(u.useContext)(f.a);
					return m.a.createElement("div", {
						className: Object(C.a)(tl.a.layout, {
							[tl.a.layoutContainer]: t
						})
					}, m.a.createElement(al, nl({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), m.a.createElement("div", {
						className: tl.a.searchContainer
					}, m.a.createElement(qo, {
						className: tl.a.search
					}))), m.a.createElement(il, null))
				};
			var ll = ol(Object(p.b)(rl, e => ({
					onReloadFrontpage: () => e(Object(wr.a)(() => n.e("Frontpage").then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))(!0))
				}))((function(e) {
					let t;
					const n = Object(u.useContext)(f.a);
					return t = e.isLoggedIn ? cl : dl, m.a.createElement(sl, {
						"data-redditstyle": !0,
						className: Object(C.a)(tl.a.container, e.className, {
							[tl.a.bladeIsOpen]: e.isBladeOpen,
							[tl.a.navbarHeightContainer]: n
						})
					}, m.a.createElement(t, {
						categoryName: e.categoryName,
						onReloadFrontpage: e.onReloadFrontpage
					}), (e.isResponsiveSettingsEnabled || e.isPageResponsive) && m.a.createElement(Zo, {
						className: tl.a.MwebResponsiveHeader
					}))
				}))),
				ul = n("./src/reddit/components/LightboxHeader/index.tsx"),
				ml = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				pl = n("./src/reddit/components/PinnedSubscriptions/index.m.less"),
				bl = n.n(pl);
			const {
				fbt: hl
			} = n("./node_modules/fbt/lib/FbtPublic.js"), fl = Object(g.c)({
				currentPage: Ns
			}), gl = Object(p.b)(fl, e => ({
				onUnpinSubscriptions: () => e(Object(S.j)())
			})), Cl = Object(zt.u)();
			var Ol = M.a.wrapped(Cl(gl(e => m.a.createElement("div", {
					"data-redditstyle": !0,
					className: e.className
				}, m.a.createElement("div", {
					className: bl.a.title
				}, m.a.createElement(pr, {
					className: bl.a.listHeader
				}, hl._("My Communities", null, {
					hk: "1CmPOc"
				})), m.a.createElement("div", {
					className: bl.a.unpin,
					onClick: e.onUnpinSubscriptions
				}, m.a.createElement(ms.a, {
					name: "close",
					className: bl.a.icon
				}))), m.a.createElement(Br, {
					currentPage: e.currentPage
				})))), "Component", bl.a),
				vl = n("./src/reddit/components/Survey/index.tsx"),
				xl = n("./src/reddit/components/ThemeProvider/index.tsx"),
				yl = n("./src/reddit/actions/toaster.ts");
			const El = e => t => ({
					source: "toast",
					action: "view",
					noun: e
				}),
				jl = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...xt.d(t),
						reason: "primary"
					}
				}),
				_l = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...xt.d(t),
						reason: "secondary"
					}
				});
			var Sl = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				kl = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				Pl = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				wl = n("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				Nl = n("./src/reddit/icons/svgs/Unlock/index.tsx"),
				Il = n("./src/reddit/models/Toast/index.ts"),
				Ml = n("./src/reddit/selectors/structuredStyles.ts"),
				Tl = n("./src/reddit/components/Toaster/PlainBread.m.less"),
				Rl = n.n(Tl);

			function Ll() {
				return (Ll = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Al = e => {
				const t = bc.a;
				switch (e.kind) {
					case Il.b.Error:
					case Il.b.AuthError:
					case Il.b.SuccessEndBroadcast:
						return t.warning;
					case Il.b.SuccessCommunity:
						return t.op;
					case Il.b.SuccessCommunityGreen:
					case Il.b.SuccessMod:
					case Il.b.SuccessUnlockComment:
						return t.approved;
					case Il.b.SuccessLockComment:
						return t.reported;
					case Il.b.EuCookiePolicy:
					case Il.b.UappBanner:
					case Il.b.Undo:
					default:
						return t.op
				}
			};
			class Fl extends m.a.Component {
				componentDidMount() {
					this.props.sendEvent && this.props.sendEvent()
				}
				render() {
					const {
						kind: e,
						sendEvent: t,
						...n
					} = this.props;
					return m.a.createElement("div", n)
				}
			}
			const Dl = M.a.wrapped(Fl, "PlainBread", Rl.a);
			var Bl = e => m.a.createElement(Dl, Ll({}, e, {
					style: {
						...e.style || {},
						"--Toaster-indicatorColor": Al(e)
					}
				})),
				Ul = n("./src/reddit/components/Toaster/StyledComponents.m.less"),
				Gl = n.n(Ul);
			const Hl = M.a.span("Text", Gl.a);
			var Wl = n("./src/reddit/components/Toaster/index.m.less"),
				ql = n.n(Wl);
			const {
				fbt: Vl
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Kl = M.a.wrapped(Pl.a, "AuthErrorToastIcon", ql.a), zl = M.a.wrapped(Ie.l, "AuthErrorToastPrimaryButton", ql.a);
			class Ql extends m.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), window.location.reload(!0)
					}
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, m.a.createElement(Bl, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(Kl, null), m.a.createElement(Hl, null, Vl._("Something went wrong loading this page. Try again?", null, {
						hk: "3k6ebn"
					})), m.a.createElement(zl, {
						type: "submit"
					}, Vl._("Reload Page", null, {
						hk: "3Hrcyc"
					}))))
				}
			}
			var Jl = Ql,
				Zl = n("./src/lib/cookieConsent/index.ts"),
				Yl = n("./src/reddit/controls/Link/index.tsx"),
				Xl = n("./src/reddit/components/Toaster/EuCookiePolicyToast.m.less"),
				$l = n.n(Xl);
			const {
				fbt: eu
			} = n("./node_modules/fbt/lib/FbtPublic.js"), tu = M.a.div("Icon", $l.a), nu = () => m.a.createElement(tu, {
				style: {
					backgroundImage: `url(${U.a.assetPath}/img/snoo-upvote.png)`
				}
			}), su = M.a.wrapped(Ie.l, "PrimaryButton", $l.a), ru = M.a.wrapped(Bl, "Bread", $l.a);
			class ou extends m.a.PureComponent {
				constructor() {
					super(...arguments), this.allowAllCookies = e => {
						e.preventDefault(), Object(Zl.b)({
							opted: !0,
							nonessential: !0
						}), this.props.onClose("allow-all")
					}, this.allowEssentialCookiesOnly = e => {
						e.preventDefault(), Object(Zl.b)({
							opted: !0,
							nonessential: !1
						}), this.props.onClose("allow-essential")
					}
				}
				componentDidMount() {
					this.props.sendViewEvent && this.props.sendViewEvent()
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("section", null, m.a.createElement(ru, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n                translateY(${e.style.y}px)\n                scale(${e.style.x}, ${e.style.x})\n              `
						}
					}, m.a.createElement(nu, null), m.a.createElement("section", {
						className: $l.a.EuCookiePolicyBody
					}, m.a.createElement(Hl, null, eu._("We use cookies on our websites for a number of purposes, including analytics and performance, functionality and advertising.", null, {
						hk: "4prHYN"
					}), " ", m.a.createElement(Yl.a, {
						href: "https://www.redditinc.com/policies/cookie-notice",
						target: "_blank"
					}, eu._("Learn more about Reddit’s use of cookies", null, {
						hk: "1bxpLb"
					})), "."), m.a.createElement("section", {
						className: $l.a.EuCookiePolicyOptions
					}, m.a.createElement("form", {
						onSubmit: this.allowEssentialCookiesOnly
					}, m.a.createElement(su, {
						type: "submit"
					}, eu._("Reject non-essential", null, {
						hk: "M79jf"
					}))), m.a.createElement("form", {
						onSubmit: this.allowAllCookies
					}, m.a.createElement(su, {
						type: "submit"
					}, eu._("Accept all", null, {
						hk: "1tnS6V"
					})))))))
				}
			}
			var au, iu = ou;
			! function(e) {
				e.LoggedOutMaxSubscriptions = "max_subscriptions"
			}(au || (au = {}));
			var cu = n("./src/reddit/controls/Typography/index.tsx"),
				du = n("./src/reddit/components/Toaster/MilestoneToast.m.less"),
				lu = n.n(du);

			function uu() {
				return (uu = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const mu = M.a.div("Container", lu.a),
				pu = M.a.img("SideImage", lu.a),
				bu = M.a.div("Main", lu.a),
				hu = M.a.div("SubTitle", lu.a),
				fu = cu.a,
				gu = M.a.wrapped(Ie.m, "PrimaryLinkButton", lu.a),
				Cu = M.a.wrapped(Me.a, "CloseIcon", lu.a);
			class Ou extends m.a.Component {
				constructor() {
					super(...arguments), this.onSignup = e => {
						e.stopPropagation(), e.preventDefault(), this.props.onClose(), this.props.onSignup(), this.props.sendEvent(jl(this.props.name))
					}
				}
				componentDidMount() {
					this.props.sendEvent(El(this.props.name))
				}
				render() {
					const {
						content: e,
						key: t,
						sideImage: n,
						style: s,
						subTitle: o,
						title: a
					} = this.props;
					return m.a.createElement(mu, {
						key: t,
						style: {
							...s,
							transform: `\n            translateY(${s.y}px)\n            scale(${s.x}, ${s.x})\n          `
						}
					}, m.a.createElement(Cu, {
						onClick: this.props.onClose
					}), m.a.createElement(pu, {
						srcSet: n
					}), m.a.createElement(bu, null, m.a.createElement(hu, null, o), m.a.createElement(cu.b, null, a), m.a.createElement(fu, null, e), m.a.createElement(gu, {
						"data-redditstyle": !0,
						href: "/register",
						onClick: this.onSignup
					}, r.fbt._("Sign Up", null, {
						hk: "2iMVSI"
					}))))
				}
			}
			const vu = Object(p.b)(null, e => ({
					onSignup: () => e(Object(ia.j)())
				}))(Object(R.c)(Ou)),
				xu = `${yu("subscribe-cap.png")} 1x,\n  ${yu("subscribe-cap@2x.png")} 2x,`;

			function yu(e) {
				return `${U.a.assetPath}/img/banner/${e}`
			}
			const Eu = 3;
			var ju = n("./src/lib/permanentCookieOptions.ts");
			const _u = e => `${e}:1527210000`;
			var Su = n("./src/reddit/components/Toaster/UappBannerToast.m.less"),
				ku = n.n(Su);
			const {
				fbt: Pu
			} = n("./node_modules/fbt/lib/FbtPublic.js"), wu = M.a.div("Icon", ku.a), Nu = () => m.a.createElement(wu, {
				style: {
					backgroundImage: `url(${U.a.assetPath}/img/snoo-upvote.png)`
				}
			}), Iu = M.a.wrapped(Ie.l, "PrimaryButton", ku.a), Mu = M.a.wrapped(Bl, "Bread", ku.a);
			class Tu extends m.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), je.a.set(Dt.j, _u(Eu), Object(ju.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, m.a.createElement(Mu, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(Nu, null), m.a.createElement(Hl, null, Pu._("Reddit is updating its {=User Agreement} and {=Privacy Policy} .", [Pu._param("=User Agreement", m.a.createElement(Yl.a, {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, Pu._("User Agreement", null, {
						hk: "XS57W"
					}))), Pu._param("=Privacy Policy", m.a.createElement(Yl.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, Pu._("Privacy Policy", null, {
						hk: "4j7vx4"
					})))], {
						hk: "TxCpk"
					}), " "), m.a.createElement(Iu, {
						type: "submit"
					}, Pu._("Got it", null, {
						hk: "2WpndK"
					}))))
				}
			}
			var Ru = Tu;

			function Lu() {
				return (Lu = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Au = [],
				Fu = {
					stiffness: 200,
					damping: 24,
					precision: .01
				},
				Du = {
					opacity: .5,
					x: .5,
					y: 50
				},
				Bu = {
					opacity: Object(I.spring)(0),
					x: Object(I.spring)(.6),
					y: Object(I.spring)(80, Fu)
				},
				Uu = M.a.wrapped(Pl.a, "SnooFacepalm", ql.a),
				Gu = M.a.wrapped(wl.a, "SnooHappy", ql.a),
				Hu = M.a.wrapped(gs.b, "SubredditIcon", ql.a),
				Wu = M.a.img("CustomIcon", ql.a),
				qu = M.a.div("Container", ql.a),
				Vu = M.a.wrapped(Me.a, "Close", ql.a),
				Ku = M.a.wrapped(Sl.a, "LockIcon", ql.a),
				zu = M.a.wrapped(Nl.a, "UnlockIcon", ql.a),
				Qu = M.a.wrapped(kl.a, "RemoveIcon", ql.a),
				Ju = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Vu, Lu({
					className: "CloseIcon"
				}, e))),
				Zu = M.a.wrapped(Bl, "Bread", ql.a),
				Yu = Object(g.c)({
					subredditIcon: Ml.b,
					toastSlices: e => e.toaster
				}),
				Xu = Object(p.b)(Yu, e => ({
					dismissToast: t => () => e(Object(yl.g)(t)),
					onButtonClick: (t, n) => () => {
						e(t), e(Object(yl.g)(n))
					}
				}));
			class $u extends m.a.Component {
				constructor() {
					super(...arguments), this.getStyles = e => em(e, this.props.toastSlices), this.getWillEnterStyles = () => Du, this.getWillLeaveStyles = () => Bu
				}
				render() {
					return this.props.toastSlices.length ? m.a.createElement(I.TransitionMotion, {
						defaultStyles: Au,
						styles: this.getStyles,
						willLeave: this.getWillLeaveStyles,
						willEnter: this.getWillEnterStyles
					}, e => m.a.createElement(qu, null, e.map(e => {
						const t = e.data,
							n = {
								...e.style,
								transform: `\n                  translateY(${e.style.y}px)\n                  scale(${e.style.x}, ${e.style.x})\n                `
							};
						if (t.kind === Il.b.Custom && void 0 !== t.customToastType) {
							const s = nm[t.customToastType];
							return m.a.createElement(s, {
								key: e.key,
								toast: t,
								style: n,
								onClose: this.props.dismissToast(t.id)
							})
						}
						if (t.kind === Il.b.UappBanner) return m.a.createElement(Ru, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === Il.b.EuCookiePolicy) return m.a.createElement(iu, {
							key: e.key,
							toast: t,
							style: n,
							sendViewEvent: () => this.props.sendEvent(El("eu_essential_policy")),
							onClose: e => {
								switch (this.props.dismissToast(t.id)(), e) {
									case "allow-all":
										this.props.sendEvent(jl("eu_essential_cookie_policy"));
										break;
									case "allow-essential":
										this.props.sendEvent(_l("eu_essential_cookie_policy"))
								}
							}
						});
						if (t.kind === Il.b.AuthError) return m.a.createElement(Jl, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						const s = t.kind === Il.b.Modal ? Ie.l : Ie.r,
							r = t.kind === Il.b.Modal ? Ie.o : Ie.r;
						return m.a.createElement(Zu, {
							className: t.kind === Il.b.Modal ? ql.a.mModal : void 0,
							key: e.key,
							kind: t.kind,
							sendEvent: t.name ? () => this.props.sendEvent(El(t.name)) : void 0,
							style: n
						}, m.a.createElement("div", {
							className: ql.a.ContentWrapper
						}, tm(t, this.props.subredditIcon), t.kind === Il.b.SuccessLockComment && m.a.createElement(Ku, null), t.kind === Il.b.SuccessUnlockComment && m.a.createElement(zu, null), m.a.createElement(Hl, null, t.text)), m.a.createElement("div", {
							className: ql.a.ButtonsWrapper
						}, t.buttonText && t.buttonAction && m.a.createElement(s, {
							onClick: () => {
								this.props.onButtonClick(t.buttonAction, t.id)(), t.name && this.props.sendEvent(jl(t.name))
							}
						}, t.buttonText), t.secondButtonText && t.secondButtonAction && m.a.createElement(r, {
							onClick: () => {
								this.props.onButtonClick(t.secondButtonAction, t.id)(), t.name && this.props.sendEvent(_l(t.name))
							}
						}, t.secondButtonText)), m.a.createElement(Ju, {
							onClick: () => {
								var e, n;
								null === (e = this.props.dismissToast(t.id)) || void 0 === e || e(), null === (n = t.onClose) || void 0 === n || n.call(t)
							}
						}))
					}))) : null
				}
			}
			const em = (e = [], t) => t.map(e => ({
					data: e,
					key: e.id || (new Date).toString(),
					style: {
						opacity: Object(I.spring)(1),
						x: Object(I.spring)(1, Fu),
						y: Object(I.spring)(0, Fu)
					}
				})),
				tm = (e, t) => {
					if (e.customIconAsset) return m.a.createElement(Wu, {
						src: e.customIconAsset
					});
					switch (e.kind) {
						case Il.b.Error:
							return m.a.createElement(Uu, null);
						case Il.b.SuccessEndBroadcast:
							return m.a.createElement(Qu, null);
						case Il.b.SuccessAward:
						case Il.b.SuccessCommunity:
						case Il.b.SuccessCommunityGreen:
							return m.a.createElement(Gu, null);
						case Il.b.SuccessMod:
							return m.a.createElement(Hu, {
								primaryColor: t.color,
								iconUrl: t.url
							})
					}
				},
				nm = {
					[Il.a.subscribeCap]: e => m.a.createElement(vu, uu({
						name: au.LoggedOutMaxSubscriptions,
						sideImage: xu,
						title: r.fbt._("Oops! You need to Sign Up to join more communities", null, {
							hk: "21CE4w"
						}),
						subTitle: null,
						content: r.fbt._("Sign up to save your communities and secure your account", null, {
							hk: "45W3vB"
						})
					}, e))
				};
			var sm = Xu(Object(R.c)($u)),
				rm = n("./src/reddit/featureFlags/profileCollections.ts");
			const om = () => e => ({
					source: "banner",
					noun: "update_old_browser",
					action: "view",
					banner: {
						id: "update_old_browser"
					}
				}),
				am = () => e => ({
					source: "banner",
					noun: "old_browser_r2",
					action: "click",
					banner: {
						id: "update_old_browser"
					}
				});
			var im = n("./src/reddit/components/AlertBanner/Wrapper.m.less"),
				cm = n.n(im);
			var dm = M.a.div("Wrapper", cm.a),
				lm = n("./src/reddit/components/AlertBanner/index.m.less"),
				um = n.n(lm);
			const {
				fbt: mm
			} = n("./node_modules/fbt/lib/FbtPublic.js"), pm = () => m.a.createElement(dm, {
				className: Object(C.a)(um.a.wrapper, um.a.suspended)
			}, m.a.createElement("span", null, mm._("Your account has been suspended.", null, {
				hk: "36oqxa"
			}), " "), m.a.createElement("a", {
				className: um.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, mm._("Learn more", null, {
				hk: "1OTc8q"
			}))), bm = () => m.a.createElement(dm, {
				className: Object(C.a)(um.a.wrapper, um.a.fpr)
			}, m.a.createElement("span", null, mm._("Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password.", null, {
				hk: "4CbjOV"
			}), " "), m.a.createElement("a", {
				className: um.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, mm._("Learn more", null, {
				hk: "1OTc8q"
			}))), hm = ({
				updateLink: e,
				onClickOldReddit: t
			}) => m.a.createElement(dm, {
				className: Object(C.a)(um.a.wrapper, um.a.deprecated)
			}, m.a.createElement("span", null, mm._("Looks like you're using new Reddit on an old browser. The site may not work properly if you don't {update your browser} !", [mm._param("update your browser", m.a.createElement(fm, {
				link: e
			}, mm._("update your browser", null, {
				hk: "2TB4hp"
			})))], {
				hk: "gC2GV"
			}), " "), m.a.createElement("span", null, mm._("If you do not update your browser, we suggest you visit {old reddit} .", [mm._param("old reddit", m.a.createElement("a", {
				className: um.a.underlineLink,
				href: U.a.oldRedditUrl,
				onClick: t
			}, mm._("old reddit", null, {
				hk: "Sv1DJ"
			})))], {
				hk: "4qKEir"
			}))), fm = ({
				children: e,
				link: t
			}) => null !== t ? m.a.createElement("a", {
				className: um.a.underlineLink,
				href: t
			}, e) : m.a.createElement("span", null, e);
			class gm extends m.a.PureComponent {
				constructor(e) {
					super(e), this.onClickOldReddit = () => {
						this.props.sendEvent(am())
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.props.browserInfo && this.props.browserInfo.isDeprecated && this.props.sendEvent(om())
				}
				render() {
					const {
						browserInfo: e,
						showFPR: t,
						showSuspended: n
					} = this.props;
					return e && e.isDeprecated ? m.a.createElement(hm, {
						updateLink: e.updateLink,
						onClickOldReddit: this.onClickOldReddit
					}) : t ? m.a.createElement(bm, null) : n ? m.a.createElement(pm, null) : null
				}
			}
			var Cm = Object(R.c)(gm),
				Om = n("./src/reddit/components/AlertBanner/heights.ts");
			var vm = n("./src/reddit/components/OfflineBanner/index.m.less"),
				xm = n.n(vm);
			const {
				fbt: ym
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Em = e => {
					const t = Object(u.useCallback)(() => window.location.reload(), []),
						n = e.online ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAE9 0lEQVRoQ9WYW0hlZRTHf94TIXXAYRQzQwmFQQSVYSZ6UlESH+whRxMDX6IHJ1AQCXFQkSFUCIUeCkETUx/CF1FB8ClNpFFEX8T UKWkyxgFngjRvJ9Z278Pe57Yv51Kul33O3mut7/9fa32X9UVxwyXqhuMn0gR+BbJ0QfsU+CaYIEaSgEuAulzKQ3lGR0fLzzngA 6ckIkpAA68HGxWlQHCMw7Ghg4i5AhBIBE4d+HTO3OZgscB5bW0tk5OTbtPV1VXu3bv3v8/AZ8DXwAmQODw8TFNTE0dHR6SlpWl kHFeCY0MLGSgE1lW9D4Fp4AdAfmvyO5BpwZdflVATuF5ijJIAnAUDMpBtuAhIYa+GC7RhFQvxIFoGQh2YiJXQR8AU8C6wE+Lg+ HQXjkhFNAvhICCREhLh8m3IRLgGEQIXgGxgmqwA3wHfqt9CUmGhIvAe8KMDRPGyQzuwc5sES+AXIEe8tbS0MDAwYAnL2dkZt2/ f5tWrV5p+nNOsmBH4EmjzgeoKiE5ISOD01NEZzO3y6uqKmJgY7X8S8DdwB/hDffkx8L2/yPgj0AwMipGAfPjwIS9fvmRmZsbtx 9fJ0lL4/Sitra1RVFQUyMUn6hwyncTPgLcrKyuZm5Ne41ok3SkpKVRVVRmIBAPal63aH7gbH9GJj4/n/FyZKk+AL/R2nhmQqDf v7++TnZ3t1uvu7ubx48dsbGxQUFAQasxe/pKSkpQ5Ijg0SUxM1MrVgFn/R35fNTQ0MDY25jZ8/fo1ycnJHB8fK89Iya1bt9ja2 iIjI8M9pJYd/R6jJ2DoWTUrMRocHKS5WaZFZEWifnIibcS1TE1NKfPRLwH5ODEx4TY4PDwkKysLWfb+K6mpqWF6WlqJa/HsoQ0 ZCPXKEg7SISOQk5PD3t6eAePFxYV+TTfFr6tpRXd0dJTGxsaAdgEJLC0t8eDBA8WBbDDqvY2Xw9jYWC4vL5X3vb29jIyMsLNzf Xq2mkUNfGdnJ11dXVppBLRva2ujr6+vF+hwl5QOnUsAa8BkAF9gdnd3yc3N5e7du2xubhrIic3CwgJlZWWm0ZcgSMb0Ivb3799 neXnZy97XCmSYzerMvtJA+yPga6MxRWtDQUgJOU9Rx5U7mToDaQ9FWbPekPLRbRwGlbq6OsNKZQNbUKr+bvB8nYX+kd1bDlieK Q4KQZDGdggoc9HOhAyETXZTqWk5tebn51NeXu6Iil0CcpS9Y3VF0SNKTU1Vjh1WRGpdPaQFVC8uLubp06ey7HlNDn/HaeV2wS4 Bz3XdCgkrY6h+ZX3/yWtyBxjEVVJSglzAWpUwE/AZ7EAdme15sL29TV5enlW+dHR00NPTE1C/tLSUxcVF2fKV1tVOBt4B9trb2 3nyRPoIa2InCzbKx2+gzXpi21kQmlZIyF5jpqd+l/74T3/hMyPgaEl98eKF0lH5k/X1dQoL5fbdv1RXV0vr+jNQEkjPCgFHJMR IQEobqklmZiYHBwemtSh99+zsrJJMM2VTBZ0DpZwqKiqYn5838+v4e1xcnHYCsITNkpIOzbZ688zz589JT093DNTTcGVlRTmJq jd871t1bJeA5lfOwcptVH9/P62trVbH89IbHx9HLhJUsY3HtoEHgt+At7R39fX1CCAzGRoa4tGjR3q1N4G/zOx8fQ+WgN7n58B XNkAIgyEb+j5VQ0kgWCyO7G88gX8BA0iEQE02M2MAAAAASUVORK5CYII=" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmH AAAFhUlEQVRoQ+1ZX0gsZRT/reu/XEpcs2tqiEQpV31Qr5qpFHHTEoOuocVF3Bd7iOylfRDUlzDxImYYGD0kitKDokH5YLoQiL rQalLqiy89qGRqaYnh33XjjDPjzOzMfDOzu4XQ9yDuznfO+f3Od86Zc7614ZYv2y3Hj0gSeBrArxIHnQJ4LNwOiySBQCAQEPH2 9fXB7XYLny8AvAbg+1AJRYrAby6X687w8LAMn82mai4kDCEJ63jv2OfzOYqLi9UIlABY4h/8CKAQsB7KkSJA+GQhdHJygoSEBP peaZPiLA3AjpVwiiSBDwB8pgD1OoDvFN8JiWIJiyUhK57SkSECvwB41ore/5oAldY4AFEUcreBQCOAUQXQdwCMWQGvllBW9bDk XgSwyG+6AvA2gAmWkJHn/1YIhZSoekTCSeAvAE/oGFsBUGTEq2b2hErgDwBOMmi321FRUYGhoSFkZWVxGKiV6O/vR3d3N/b29q S4jgE8bgao1l4rBEjmhKoHAZ6fnzeNw+l04vDwUJCzgkG0qSdMDVe0GrrOzk50dHSYBq4UqK+vx8QEl8vfAHjTikItAlzSXVxc IDr6moPQiEk7TCsG1WQ0mjxh6+cA3jcTQoHl5WUUFd3kGxloaGjA2Jjlcs3kWlpaCp/Px+WNsFJTU7G7u6sbakGNFQnt7Nz0Vc nJyZibm0NeXp4MxMzMDCorK4UGjQnQyIbBwUE0Nzfj8vKSKwoi8ps2PChigghIPbC1tYX9/X0UFlLHC2xubiIzM5P7v7y8HDU1 NWhrazOCzfCe1tZW9PT0yE5CGsLKblaXQHt7O7q6ujjjAwMDaGlpkQGJRD6QAYfDwZVfOg1h+f1+IR/vAaA54jo3Fa6R9fDSZ5 QHgVflu22e61rPWrTn7OyMAyAUBZYMZ0+hW5LsIm5DBHJyctAdv4EHT1kjoFdltBxwenqK+Ph4mcHFxUXuZSl1vJLAQ6/X+1VZ WZlMMCkpCYfFfwY5zegJCDGsPEG7B0hMSsLBwQHrQMTnvDM0T4A2cjEh9Qy1AXcz7uD3l62dAEnZo2zw3w/GacYJkmQ2R0AQ/D AT+OR5YPsUeGbeWPwLkB3RNvz9inkClLxCSZ2enuYqn14I0cMFqpJqsZmWlia+I4wkL6sIvPUzYH+pHuPj45ohJE1mPnx+APCC VhWi7z8G0G4WICuIY2JiuBfUo+eA+07gHsFQhKqaDoHA0dEREhMTZd4P+sAreAPAt+EmQLo9Hg+qqqo4M3RnRK0DaxEBSRh9Ce Bd2clqKNB8H7AMhvu5pAT/BKBAqV+zG43ECVghxxP4AsB7qiGmodTvdrujent7rdgMm8zS0hJKSugmUvvqUW+gCSmMhKOPjY0F vVUZPb8qabXWwWgIcQViamoKtbW1MhkKLWq5FTMuqMqcn58HARF6emrQjo9pFDa+eAJ0DXPTWyvEWfOo7BQEj+Tm5mJ9fV1URa 0AzQ20VldXkZ+fH4RSrTnTo0Ivr6srwq5/c80i8DWABxsbG8jOzkZGRgZoRtBa4Rw7eV00l8fqEWUR4EKJ/lAcx8XRNab+IsPb 29tIT09nbWU6guV95vHwFkwlMxFobGzE6KjyCtQYHyOJK9XEOoHA5OQk6urqjFnnby8WFha4kdPMIsJNTU2CCAuXqFpvI00TJ2 ZeaHQDRzOyGRm6QKAmkV/MmFc6RY8AlQCbUTBer1f0uhEZl8uFkZERKR4qlVzZMbN0X2QpKSlB9V48Y/VfHLnpiiY46aJ5eG1t jWvgFIvGPPlmM+gZWe6nX05WVlZQUHDdQ83OzqK6ulow8SmAVrrAA0DT8kO+U7yrg4F+kXkE4COTOLUrFkPRPoAnJXvoxksM2H CBCEWP4WwPxUgkZf8nEEnvGtH9D0h1xECJaZxWAAAAAElFTkSuQmCC";
					return m.a.createElement("div", {
						className: Object(C.a)(e.className, xm.a.banner, {
							[xm.a.online]: e.online,
							[xm.a.hidden]: !e.showBanner
						})
					}, m.a.createElement("img", {
						className: xm.a.snoomoji,
						src: n
					}), m.a.createElement("span", {
						className: xm.a.title
					}, e.online ? ym._("Found the internet!", null, {
						hk: "fMghd"
					}) : ym._("hmm… no internet?", null, {
						hk: "28GsiU"
					})), m.a.createElement(ms.a, {
						className: xm.a.refresh,
						name: "refresh_fill",
						onClick: t
					}))
				},
				jm = n("./src/reddit/components/Upsell/async.ts"),
				_m = n("./src/reddit/constants/componentSizes.ts"),
				Sm = n("./src/reddit/constants/elementIds.ts"),
				km = n("./src/reddit/constants/posts.ts"),
				Pm = n("./src/reddit/contexts/InsideOverlay.tsx"),
				wm = n("./src/reddit/constants/promo.ts"),
				Nm = n("./src/reddit/contexts/Promo/index.ts");

			function Im(e, t) {
				const {
					promoName: n
				} = t.payload, s = e.get(n);
				switch (t.type) {
					case wm.a.Completed:
						return s === wm.a.Shown ? new Map(e.set(n, wm.a.Completed)) : e;
					case wm.a.Dismissed:
						return s === wm.a.Shown ? new Map(e.set(n, wm.a.Dismissed)) : e;
					case wm.a.Shown:
						return s ? e : new Map(e.set(n, wm.a.Shown));
					default:
						throw new Error
				}
			}
			var Mm = function({
					children: e
				}) {
					const [t, n] = u.useReducer(Im, new Map), s = u.useCallback(e => n({
						type: wm.a.Completed,
						payload: {
							promoName: e
						}
					}), []), r = u.useCallback(e => n({
						type: wm.a.Dismissed,
						payload: {
							promoName: e
						}
					}), []), o = u.useCallback(e => n({
						type: wm.a.Shown,
						payload: {
							promoName: e
						}
					}), []), a = u.useMemo(() => ({
						completePromo: s,
						dismissPromo: r,
						promos: t,
						showPromo: o
					}), [s, r, t, o]);
					return u.createElement(Nm.a.Provider, {
						value: a
					}, e)
				},
				Tm = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				Rm = n("./src/reddit/helpers/postCollection.ts"),
				Lm = n("./src/reddit/models/Theme/index.ts"),
				Am = n("./src/reddit/selectors/experiments/econ/meta.ts");
			var Fm = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Dm = n("./src/reddit/selectors/experiments/survey.ts"),
				Bm = n("./src/reddit/selectors/notificationBanner.ts"),
				Um = n("./src/reddit/selectors/onboarding.ts"),
				Gm = n("./src/reddit/selectors/posts.ts"),
				Hm = n("./src/reddit/components/AppRouter/index.m.less"),
				Wm = n.n(Hm);

			function qm() {
				return (qm = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Vm = ({
					className: e,
					shouldDisplayPinnedSubscriptions: t,
					...n
				}) => m.a.createElement("div", qm({
					className: Object(C.a)(Wm.a.main, {
						[Wm.a.mShowingPaddedPinnedDescriptions]: t
					}, e)
				}, n)),
				Km = Object(v.a)(({
					className: e,
					overlayScrollContainerEl: t,
					theme: n,
					...s
				}) => {
					const r = Object(D.a)({
						theme: n,
						...s
					});
					return m.a.createElement("div", qm({
						className: Object(C.a)(Wm.a.overlayContentWrapper, e),
						style: {
							"--comments-overlay-background": Object(Lm.g)(r.canvas, r.canvasImgUrl, r.canvasImgPosition),
							"--comments-overlay-offset": `${Object(Gt.c)(t)}px`
						}
					}, s))
				}),
				zm = ({
					className: e,
					divRef: t,
					...n
				}) => {
					const s = Object(u.useContext)(f.a);
					return m.a.createElement("div", qm({
						className: Object(C.a)(Wm.a.lightboxHeaderWrapper, e, {
							[Wm.a.lightboxHeaderWrapperExp]: s
						})
					}, n, {
						ref: t
					}))
				},
				Qm = Object(Bm.a)(ml.a.EmailCollectionBannerId),
				Jm = Object(p.b)(() => Object(g.c)({
					connection: e => e.connection,
					currentPage: e => e.platform.currentPage,
					frontpageSignupVariant: e => {
						const {
							currentPage: t
						} = e.platform;
						return Object(B.a)(e, {
							pageLayer: t
						})
					},
					hasInvalidSession: yt.u,
					isLoggedIn: yt.J,
					isNpsSurveyEnabled: Dm.d,
					isOnboardingQueryParamEnabled: Um.b,
					isSubscriptionsPinned: bs.b,
					isSuccessfulSurveyEnabled: Dm.f,
					isSuspended: yt.Q,
					isFPR: yt.H,
					posts: Gm.K,
					profileCollectionsEnabled: rm.a,
					showEmailCollectionBanner: e => !Object(zt.M)(e.platform.currentPage) && Qm(e),
					isBlockingInterstitialEnabled: Fm.b,
					signUpModalIsOpen: Object(Ba.c)(tt.a.REGISTER_MODAL_ID)
				}), e => ({
					onClickOutsideOverlay: t => e(Object(h.b)(t)),
					onPostDismissTrigger: () => e(Object(k.i)()),
					onSuccessfulSignupTrigger: () => e(Object(k.f)()),
					onUnpinSubscriptions: () => e(Object(S.j)())
				})),
				Zm = (e, t) => !(!e.state || !e.state[ho.b.IsOverlay] || t === e);
			class Ym extends m.a.Component {
				constructor(e) {
					super(e), this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage, this.isNarrowScreen = !1, this.isWideScreen = !1, this.didCountSurveyTrigger = !1, this.resizeHandler = l()(() => {
						const e = window.innerWidth;
						this.props.isSubscriptionsPinned && e < _m.l && this.props.onUnpinSubscriptions()
					}, O.K), this.hideSignupUpsell = () => {
						this.setState({
							isSignupUpsellHidden: !0
						})
					}, this.getIsPostCollection = () => {
						const {
							currentPage: e,
							posts: t,
							profileCollectionsEnabled: n
						} = this.props;
						if (Object(zt.x)(e)) {
							const s = e && e.urlParams && e.urlParams.partialPostId,
								r = `${O.Ib.Post}_${s}`,
								o = t && s && t[r],
								a = o && o.belongsTo.type === km.a.PROFILE;
							return !(!o || !Object(Rm.a)(o) || a && !n)
						}
						return !1
					}, this.state = {
						isSignupUpsellDisplayed: Object(B.c)(e.frontpageSignupVariant),
						isSignupUpsellHidden: !1
					}
				}
				componentDidMount() {
					this.resizeHandler(), window.addEventListener("resize", this.resizeHandler);
					const {
						isOnboardingQueryParamEnabled: e,
						isSuccessfulSurveyEnabled: t,
						onSuccessfulSignupTrigger: n
					} = this.props;
					t && !e && n()
				}
				UNSAFE_componentWillUpdate(e) {
					const {
						isNpsSurveyEnabled: t,
						location: n,
						onPostDismissTrigger: s
					} = this.props, r = n.state && n.state[ho.b.IsOverlay], o = Object(j.a)(this.previousLocation, e.location);
					t && r && o && !this.didCountSurveyTrigger && (s(), this.didCountSurveyTrigger = !0);
					const a = Object(j.a)(this.previousLocation, this.props.location),
						i = r ? this.previousPage : this.props.currentPage;
					if (i) {
						const {
							meta: t,
							urlParams: n
						} = i, s = t && (t.name === O.Mb.INDEX || t.name === O.Mb.SUBREDDIT && n.subredditName === Ls.b.Popular), r = Object(B.c)(this.props.frontpageSignupVariant), o = Object(B.c)(e.frontpageSignupVariant);
						s || r || !o ? r && !o && this.setState({
							isSignupUpsellDisplayed: !1
						}) : this.setState({
							isSignupUpsellDisplayed: !0,
							isSignupUpsellHidden: !1
						})
					}
					if ("POP" === e.history.action || r || o || a || (this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage), this.props.isBlockingInterstitialEnabled && this.props.signUpModalIsOpen) return;
					const c = Zm(e.location, this.previousLocation);
					y.a.write(() => {
						document.body.style.overflow = c ? "hidden" : ""
					})
				}
				componentDidUpdate() {
					this.didCountSurveyTrigger = !1
				}
				render() {
					const {
						connection: e,
						currentPage: t,
						frontpageSignupVariant: n,
						hasInvalidSession: s,
						isFPR: o,
						isLoggedIn: a,
						isSubscriptionsPinned: i,
						isSuspended: d,
						location: l,
						onClickOutsideOverlay: p,
						routes: b,
						showEmailCollectionBanner: h
					} = this.props, {
						isSignupUpsellDisplayed: f,
						isSignupUpsellHidden: g
					} = this.state, C = this.context, v = Zm(l, this.previousLocation);
					l.state && l.state[ho.b.IsOverlay] && !v ? l.state[ho.b.IsOverlay] = !1 : l.state && (this.previousLocation === l || l.state[ho.b.CloseLocation] && this.previousLocation.state && this.previousLocation.state[ho.b.CloseLocation] && this.previousLocation.state[ho.b.CloseLocation] === l.state[ho.b.CloseLocation] ? l.state[ho.b.CloseLocation] = {
						...this.previousLocation,
						state: c()(this.previousLocation.state, ho.b.CloseLocation)
					} : l.state[ho.b.CloseLocation] = this.previousLocation);
					const x = Object(j.a)(this.previousLocation, l),
						y = v || x ? this.previousLocation : l,
						E = v || x ? this.previousPage : t,
						_ = !(!(E && E.meta && E.meta.name === O.Mb.SEARCH_RESULTS && E && E.queryParams) || E.queryParams[fo.t]),
						S = !(!E || !E.meta || E.meta.name !== O.Mb.MODERATION_PAGES),
						k = Object(zt.x)(E),
						w = this.getIsPostCollection(),
						N = f && !g,
						I = e.showBanner;
					return s ? r.fbt._("Sorry, we have failed you. Try refreshing!", null, {
						hk: "3qsDla"
					}) : m.a.createElement(m.a.Fragment, null, m.a.createElement(zt.a.Provider, {
						value: E
					}, m.a.createElement(Vr.c, {
						isOverlayOpen: v
					}, m.a.createElement(xl.a, {
						forceRedditTheme: _
					}, f && m.a.createElement(ye, {
						frontpageSignupVariant: n,
						onClose: this.hideSignupUpsell
					}), m.a.createElement(Xm, {
						browserInfo: C,
						connection: e,
						isFPR: o,
						isInline: N,
						isSuspended: d,
						showOffline: I
					})), m.a.createElement(Pm.a.Provider, {
						value: !1
					}, m.a.createElement(xl.a, {
						forceRedditTheme: _ || S,
						isCommentsPage: k
					}, m.a.createElement(Mm, null, m.a.createElement($m, {
						browserInfo: C,
						frontpageSignupVariant: n,
						isCommentsPage: k,
						isInline: N,
						isLoggedIn: a,
						isSubscriptionsPinned: i,
						location: y,
						overlayIsOpen: v,
						page: E,
						routes: b,
						showEmailCollectionBanner: h,
						showFPR: o,
						showOffline: I,
						showSuspended: d
					}), m.a.createElement(jm.b, null), m.a.createElement(jm.a, null)))))), m.a.createElement(zt.a.Provider, {
						value: t
					}, v && m.a.createElement(Pm.a.Provider, {
						value: !0
					}, m.a.createElement(xl.a, {
						isOverlay: !0
					}, m.a.createElement(ep, {
						browserInfo: C,
						isPostCollection: w,
						location: l,
						onClickOutsideOverlay: p,
						page: t,
						routes: b,
						showEmailCollectionBanner: h,
						showFPR: o,
						showOffline: I,
						showSuspended: d
					}))), m.a.createElement(xl.a, null, m.a.createElement(u.Fragment, null, m.a.createElement(sm, null), m.a.createElement(vl.a, null), h && m.a.createElement(P.a, null), m.a.createElement(qt, null), m.a.createElement(cs, null)))))
				}
			}
			Ym.contextType = x.a;
			const Xm = Object(R.c)(e => {
					const t = Object(zt.fb)(),
						n = Object(p.e)(e => ((e, {
							pageLayer: t
						}) => !!Object(zt.bb)(t) || !Object(Am.a)(e))(e, {
							pageLayer: t
						})),
						s = Object(u.useContext)(f.a),
						{
							browserInfo: r,
							connection: o,
							isFPR: a,
							isInline: i,
							showOffline: c,
							isSuspended: d
						} = e,
						l = {
							browserInfo: r,
							showFPR: a,
							showSuspended: d,
							showOffline: c,
							navExperiment: s
						};
					return m.a.createElement(u.Fragment, null, m.a.createElement(Cm, l), n && m.a.createElement(ll, {
						className: Object(C.a)(Wm.a.header, Object(Om.b)(Wm.a, l), {
							[Wm.a.inline]: i
						})
					}), m.a.createElement(Em, {
						className: Object(C.a)(Wm.a.offlineBanner, Object(Om.b)(Wm.a, l)),
						online: o.online,
						showBanner: o.showBanner
					}))
				}),
				$m = Object(R.c)(class extends m.a.Component {
					shouldComponentUpdate(e, t) {
						return !this.locationsEqual(this.props.location, e.location) || !this.pagesEqual(this.props.page, e.page) || this.props.isSubscriptionsPinned !== e.isSubscriptionsPinned || this.props.showEmailCollectionBanner !== e.showEmailCollectionBanner || this.props.isInline !== e.isInline || this.props.showOffline !== e.showOffline
					}
					locationsEqual(e, t) {
						const n = c()(e, "key"),
							s = c()(t, "key");
						return a()(n, s)
					}
					pagesEqual(e, t) {
						if (e && t) {
							const n = c()(e, ["key", "locationState"]),
								s = c()(t, ["key", "locationState"]);
							return a()(n, s)
						}
						return !1
					}
					render() {
						const {
							frontpageSignupVariant: e,
							location: t,
							routes: n,
							overlayIsOpen: s,
							isCommentsPage: r,
							isInline: o,
							isLoggedIn: a,
							isSubscriptionsPinned: i,
							showEmailCollectionBanner: c
						} = this.props, d = i && !(!a && !s && r);
						return m.a.createElement(Vm, {
							"aria-hidden": s,
							className: Object(C.a)(Object(Om.b)(Wm.a, this.props), {
								[Wm.a.withUpsell]: !!e,
								[Wm.a.inline]: o
							}),
							shouldDisplayPinnedSubscriptions: d
						}, d && m.a.createElement(Ol, {
							className: Object(C.a)(Wm.a.pinnedSubscriptions, Object(Om.b)(Wm.a, this.props)),
							"data-redditstyle": !0
						}), m.a.createElement(b.f, {
							location: t
						}, n), c && m.a.createElement("div", {
							className: Object(C.a)(Wm.a.bottomSpacer, Object(Om.a)(Wm.a, this.props))
						}))
					}
				});
			class ep extends m.a.Component {
				constructor(e) {
					super(e), this.mouseDownInWrapper = !1, this.listingFocusSubscriptionId = 0, this.handleWebkitFullscreenChange = e => {
						this.setState({
							mediaIsFullscreen: null !== document.webkitFullscreenElement
						})
					}, this.lightboxHeaderRefFn = e => this.lightboxHeaderEl = e, this.overlayRefFn = e => {
						this.setState({
							overlayScrollContainerEl: e
						})
					}, this.onOverlayMouseUp = e => {
						if (this.mouseDownInWrapper && Object(_.a)(e) && 0 === e.button && e.target === this.state.overlayScrollContainerEl) {
							const {
								location: e,
								onClickOutsideOverlay: t
							} = this.props;
							t(e.state[ho.b.CloseLocation])
						}
					}, this.onOverlayMouseDown = e => {
						this.mouseDownInWrapper = e.target === this.state.overlayScrollContainerEl && e.clientX <= window.innerWidth - 17
					}, this.state = {
						overlayScrollContainerEl: null,
						mediaIsFullscreen: !1
					}
				}
				componentDidMount() {
					document.addEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.lightboxHeaderEl && (this.lightboxHeaderEl.focus(), this.listingFocusSubscriptionId = Tm.a.subscribe(e => {
						e.isListingFocused && this.lightboxHeaderEl.querySelector(E.a).focus()
					}))
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.listingFocusSubscriptionId && Tm.a.unsubscribe(this.listingFocusSubscriptionId)
				}
				render() {
					const {
						isPostCollection: e,
						page: t,
						routes: n
					} = this.props, {
						overlayScrollContainerEl: s
					} = this.state, r = !(!t || !t.meta || t.meta.name === O.Mb.SUBREDDIT_CREATION || t.meta.name === O.Mb.PUBLIC_ACCESS_NETWORK), o = e;
					return m.a.createElement(Km, {
						className: Object(C.a)(Object(Om.b)(Wm.a, this.props), {
							[Wm.a.mIsCommentsLightbox]: r,
							[Wm.a.mIsLargeCommentsLightbox]: o
						}),
						overlayScrollContainerEl: s
					}, m.a.createElement("div", {
						className: Object(C.a)(Wm.a.overlayWrapper, Object(Om.b)(Wm.a, this.props))
					}, m.a.createElement("div", {
						className: Object(C.a)(Wm.a.overlayScrollContainer, {
							[Wm.a.mediaIsFullscreen]: this.state.mediaIsFullscreen
						}),
						id: Sm.d,
						ref: this.overlayRefFn,
						onMouseDown: this.onOverlayMouseDown,
						onMouseUp: this.onOverlayMouseUp
					}, r && m.a.createElement(zm, {
						divRef: this.lightboxHeaderRefFn,
						className: Object(C.a)(Object(Om.b)(Wm.a, this.props), {
							[Wm.a.mIsLargeCommentsLightbox]: o
						}),
						tabIndex: -1
					}, m.a.createElement(ul.a, {
						page: t
					})), m.a.createElement(b.f, null, n), m.a.createElement("div", {
						className: Object(C.a)(Wm.a.bottomSpacer, Object(Om.a)(Wm.a, this.props))
					}))))
				}
			}
			t.b = Jm(Object(R.c)(Ym))
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/BadgeCounter/index.m.less": function(e, t, n) {
			e.exports = {
				badgeCounter: "_1-nIsCaWhGBFN-L4ZHnbGp",
				mEmpty: "_3FX9lCQKNdKXkfBiSWCjSb"
			}
		},
		"./src/reddit/components/BadgeCounter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/BadgeCounter/index.m.less"),
				c = n.n(i);
			t.a = ({
				className: e,
				isActive: t,
				showEmpty: n,
				unreadCount: s
			}) => t ? r.a.createElement("span", {
				className: Object(o.a)(e, c.a.badgeCounter, {
					[c.a.mEmpty]: n || s < 1
				})
			}, n || s < 1 ? "" : Object(a.b)(s)) : null
		},
		"./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts");
			const o = () => null;
			t.a = Object(s.a)({
				ErrorComponent: o,
				getComponent: () => Object(r.a)(() => n.e("BannedUserModal").then(n.bind(null, "./src/reddit/components/BannedUserList/AddBannedUserModal/_AddBannedUserModal.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/BlockNavigation/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				i = n("./src/reddit/actions/modal.ts");
			const c = "non-empty-string-to-block-navigation";
			class d extends r.a.Component {
				constructor() {
					super(...arguments), this.onBeforeUnload = e => {
						if (this.props.enabled) return e.preventDefault(), e.returnValue = "", ""
					}, this.message = (e, t) => {
						return !0 === (this.props.confirmNavigate || this.defaultConfirmNavigate)(e, t) || c
					}, this.defaultConfirmNavigate = (e, t) => {
						const {
							ignoreCurrentLocation: n = !0,
							location: s,
							showModal: r,
							dialogId: o
						} = this.props;
						return !(!n || e.pathname !== s.pathname) || (o && r(), !1)
					}
				}
				componentDidMount() {
					this.props.blockOnBeforeUnload && window.addEventListener("beforeunload", this.onBeforeUnload)
				}
				componentWillUnmount() {
					this.props.blockOnBeforeUnload && window.removeEventListener("beforeunload", this.onBeforeUnload)
				}
				render() {
					const {
						enabled: e = !0
					} = this.props;
					return r.a.createElement(a.b, {
						message: this.message,
						when: e
					})
				}
			}
			t.a = Object(o.b)(null, (e, t) => ({
				showModal: () => e(Object(i.h)(t.dialogId))
			}))(Object(a.i)(d))
		},
		"./src/reddit/components/Carousel/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FR0eEUi22u9saLEyWWJGS",
				indicators: "_3YoS4yX_XBXWbj-eYFW6MS",
				indicator: "_1mwHqJp51wXFI7rjTonkz5",
				indicatorSelected: "_2ol4vy2ml1IZ6lfT2n775g",
				items: "_26qHHOV6EkP4whoc4ySt3l",
				item: "_2gs-hGAB6w3q4Gc8mSyG5Z",
				fade: "uAUBkt8dAygLJNIsiAmad",
				slide: "_4S2XTVURHpoKNNEuKzJbH"
			}
		},
		"./src/reddit/components/ChangeUsernameModals/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "ChangeUsernameModals",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ChangeUsernameModals").then(n.bind(null, "./src/reddit/components/ChangeUsernameModals/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ChangeUsernameModals/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/ChangeUsernameTooltip/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "ChangeUsernameTooltip",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ChangeUsernameTooltip").then(n.bind(null, "./src/reddit/components/ChangeUsernameTooltip/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ChangeUsernameTooltip/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/CoinPurchaseModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/helpers/loadThirdPartyScript.ts"),
				c = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				d = n("./src/reddit/constants/modals.ts");
			const l = () => Object(a.a)(() => Promise.all([n.e("CoinPurchaseModal").then(n.bind(null, "./src/reddit/components/CoinPurchaseModal/index.tsx")), Object(i.d)().catch(() => {})])).then(e => e[0].default),
				u = Object(o.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: l
				});
			Object(c.b)(d.a.ECON_COIN_PURCHASE, e => r.a.createElement(u, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/CommonTooltip/Hooked.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/CommonTooltip/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = r.a.memo((function({
				visible: e,
				tooltipId: t,
				className: n,
				arrowClassName: a,
				...d
			}) {
				const [l, u] = Object(s.useState)(e);
				return Object(s.useEffect)(() => {
					let t = window.setTimeout(() => {
						t = void 0, u(e)
					}, 0);
					return () => {
						t && window.clearTimeout(t), u(!1)
					}
				}, [e]), e ? r.a.createElement("div", c({
					id: t,
					className: Object(o.a)(i.a.tooltip, n, {
						[i.a.visible]: l
					})
				}, d.popperProps), l && r.a.createElement(r.a.Fragment, null, d.arrowProps && r.a.createElement("div", c({
					className: Object(o.a)(i.a.arrow, a)
				}, d.arrowProps)), d.children)) : null
			}))
		},
		"./src/reddit/components/CommonTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "_1sDiFFHKyPJghjPpVTW7vB",
				visible: "_288IzKhWMb7Dw403RofBU8",
				arrow: "J7dyd68w4oXhfat_ErBlK",
				carot: "_1cSDLuGjo4e7WXeW8lyx7K"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.m.less": function(e, t, n) {
			e.exports = {
				horizontalVotes: "_2oM1YqCxIwkvwyeZamWwhW",
				customScoreStyles: "_25IkBM0rRUqWX5ZojEMAFQ",
				customDownvoteStyles: "_783RL1AYIib59nxLCXhgv"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/components/VerticalVotes/index.tsx"),
				c = n("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = Object(a.a)(({
				className: e,
				...t
			}) => r.a.createElement(i.a, l({}, t, {
				className: Object(o.a)(d.a.horizontalVotes, e),
				scoreClassName: Object(o.a)(d.a.customScoreStyles, t.scoreClassName),
				downvoteClassName: Object(i.b)(t) ? d.a.customDownvoteStyles : void 0
			})));
			t.a = u
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				g = n.n(f),
				C = n("./src/lib/lessComponent.tsx");
			const O = "create-community-button",
				v = C.a.wrapped(l.c, "StyledTooltip", g.a),
				x = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.hb)(e),
					userIsSuspended: h.Q
				});
			t.a = Object(a.b)(x, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: n => {
					n(Object(b.c)(t)), e(Object(c.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
				},
				onShowTooltip: () => e(Object(d.f)({
					tooltipId: O
				})),
				onHideTooltip: () => e(Object(d.i)())
			}))(Object(u.c)(({
				className: e,
				eventSource: t,
				onShowTooltip: n,
				onHideTooltip: r,
				openCommunityCreation: a,
				sendEvent: i,
				userDoesNotHaveEnoughExpToCreateCommunity: c,
				userIsSuspended: d,
				onClick: l
			}) => {
				return o.a.createElement(p.t, {
					className: e,
					disabled: d || c,
					onClick: e => {
						l && l(e), a(i)
					},
					onMouseEnter: n,
					onMouseLeave: r,
					priority: p.c.Secondary,
					id: O,
					isFullWidth: !0
				}, s.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), c ? o.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: O,
					text: s.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : d ? o.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: O,
					text: s.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/CreateCommunitySidebar/index.m.less": function(e, t, n) {
			e.exports = {
				BannerImg: "_2ddpn_fVcA1SYZzLivK-SD",
				bannerImg: "_2ddpn_fVcA1SYZzLivK-SD",
				ButtonContainer: "_2ymEyPXQM0ccuwfvIOMpnZ",
				buttonContainer: "_2ymEyPXQM0ccuwfvIOMpnZ",
				Button: "_1vv6LrKIsjHuIJCCgIntnC",
				button: "_1vv6LrKIsjHuIJCCgIntnC",
				CommunityText: "_9jODC2-h7cM9Y6Duqs_W4",
				communityText: "_9jODC2-h7cM9Y6Duqs_W4",
				Container: "_3lfTEmyI7x9ib1wz4e8RWP",
				container: "_3lfTEmyI7x9ib1wz4e8RWP",
				SnooImg: "_20axzOalQqYkHj-7Idfqun",
				snooImg: "_20axzOalQqYkHj-7Idfqun"
			}
		},
		"./src/reddit/components/DownToChatBanner/DownToChatPendingModal/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "O258FYaW9n8M2K5BGX4v_",
				wrapper: "O258FYaW9n8M2K5BGX4v_",
				backgroundAnimation: "_3wgpIyg-y7kAJzTXM19iIz",
				Container: "WWLVFaNE0_QzzlHV-5_2A",
				container: "WWLVFaNE0_QzzlHV-5_2A",
				Heading: "_2mCl3hzhnrbUnRSV0Hlgvv",
				heading: "_2mCl3hzhnrbUnRSV0Hlgvv",
				Description: "_3cd3ufhq0Jp8vxXTPbHKEa",
				description: "_3cd3ufhq0Jp8vxXTPbHKEa",
				SnooImage: "_1cU9WVsnegf986qVbdoocd",
				snooImage: "_1cU9WVsnegf986qVbdoocd",
				Footer: "_31ILosdTcnxgP48mu3YbxG",
				footer: "_31ILosdTcnxgP48mu3YbxG"
			}
		},
		"./src/reddit/components/Econ/ClaimFreeAwardModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "ClaimFreeAwardModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ClaimFreeAwardModal").then(n.bind(null, "./src/reddit/components/Econ/ClaimFreeAwardModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/ClaimFreeAwardModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_CLAIM_FREE_AWARD_MODAL, e => o.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "GoldTargetedOfferModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("GoldTargetedOfferModal").then(n.bind(null, "./src/reddit/components/Econ/CoinPackageOfferModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/CoinPackageOfferModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_COIN_PACKAGE_OFFER, e => o.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/modal.m.less"),
				d = n.n(c);
			const l = Object(s.a)({
				resolved: {},
				chunkName: () => "EconPowerupsFlairModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("EconPowerupsFlairModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ACHIEVEMENT_FLAIR, e => o.a.createElement(l, {
				onOverlayClick: e,
				withOverlay: !0,
				className: d.a.modalBody
			}))
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/modal.m.less": function(e, t, n) {
			e.exports = {
				modalBody: "_3kFZWXar5EkIAbiKLZxwKw"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const d = () => n.e("EconPowerupsMarketingModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsMarketingModal/index.tsx")),
				l = Object(o.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(a.a)(d).then(e => e.default)
				});
			Object(i.b)(c.a.ECON_POWERUPS_MARKETING, e => r.a.createElement(l, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/PowerupsPremiumUpsellModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.m.less"),
				d = n.n(c);
			const l = () => n.e("PowerupsPremiumUpsellModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.tsx")),
				u = Object(s.a)(l);
			Object(a.b)(i.a.ECON_POWERUPS_PREMIUM_UPSELL, e => o.a.createElement(u, {
				onOverlayClick: e,
				withOverlay: !0,
				className: d.a.modal
			}))
		},
		"./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.m.less": function(e, t, n) {
			e.exports = {
				modal: "_1KwpOybv6p44QN3WvUVBoQ",
				container: "TPBQxpFGmnc7DlYlMReTd",
				title: "_1MbiZSwLn6AEllOCsl_VOs",
				footer: "_3rKjfC0Km1veZhKaJ4mY5g"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/helpers/loadThirdPartyScript.ts"),
				c = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				d = n("./src/reddit/constants/modals.ts");
			const l = () => Promise.all([n.e("EconPowerupsPurchaseModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsPurchaseModal/index.tsx")), Object(i.d)().catch(() => {})]),
				u = Object(o.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(a.a)(l).then(e => e[0].default)
				});
			Object(c.b)(d.a.ECON_POWERUPS_PURCHASE, e => r.a.createElement(u, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/PowerupsSuccess/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/components/Econ/PowerupsSuccess/index.m.less"),
				d = n.n(c);
			const l = Object(s.a)({
				resolved: {},
				chunkName: () => "PowerupSuccessModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("PowerupSuccessModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsSuccess/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PowerupsSuccess/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_POWERUPS_SUCCESS, () => o.a.createElement(l, {
				withOverlay: !0,
				className: d.a.modalBody,
				overlayClassName: d.a.modalOverlay
			}))
		},
		"./src/reddit/components/Econ/PowerupsSuccess/index.m.less": function(e, t, n) {
			e.exports = {
				modalOverlay: "_3uruuYeyxpi66lhx6sYSsl",
				fadeOut: "nIOXvEXFyDg7VnFtNVmlJ",
				modalBody: "_2HHFaH5ZLOM1NWKsiGkorM",
				successPowerup: "_25UgJzq-s3kOud15pllhar",
				icon: "_15HZ1T5sP47ouINDpZ92Td",
				title: "_2bJ-GCaxSGVPn1OefwaiZ0",
				confetti: "_3cJJ0jZwGKhEPBNW-HZasa"
			}
		},
		"./src/reddit/components/Econ/Prediction/CancelPredictionModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction-CancelPredictionModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-Prediction-CancelPredictionModal").then(n.bind(null, "./src/reddit/components/Econ/Prediction/CancelPredictionModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/CancelPredictionModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_PREDICTIONS_CANCEL_PREDICTION, () => o.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction-ChangePredictionOutcomeModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-Prediction-ChangePredictionOutcomeModal").then(n.bind(null, "./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_PREDICTIONS_CHANGE_OUTCOME, () => o.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/Prediction/EndTimeModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction-EndTimeModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-Prediction-EndTimeModal").then(n.bind(null, "./src/reddit/components/Econ/Prediction/EndTimeModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/EndTimeModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_PREDICTIONS_CHANGE_END_TIME, () => o.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/Prediction/PremiumModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction-PremiumModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("Premium~reddit-components-Econ-Prediction-PremiumModal"), n.e("reddit-components-Econ-Prediction-PremiumModal")]).then(n.bind(null, "./src/reddit/components/Econ/Prediction/PremiumModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/PremiumModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_PREDICTIONS_PREMIUM_UPSELL, () => o.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/TopAwardersModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "EconTopAwardersModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("EconTopAwardersModal").then(n.bind(null, "./src/reddit/components/Econ/TopAwardersModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/TopAwardersModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			Object(a.b)(i.a.ECON_TOP_AWARDERS, e => o.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/EditCommunityDescriptionModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "EditCommunityDescriptionModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("EditCommunityDescriptionModal").then(n.bind(null, "./src/reddit/components/EditCommunityDescriptionModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/EditCommunityDescriptionModal/index.tsx"
				}
			});
			Object(a.b)(i.a.EDIT_DESCRIPTION_MODAL, e => o.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			var d = c
		},
		"./src/reddit/components/EmailCollection/Banner/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "EmailCollectionBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("EmailCollectionBanner").then(n.bind(null, "./src/reddit/components/EmailCollection/Banner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/EmailCollection/Banner/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/components/EmailVerificationTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				closeIcon: "_2lPBwpVCWIEI428aTPAwZx",
				closeWrapper: "_1_Rq-E5LCS_6JTARElGK12",
				container: "_2IHh1GBfUxJVQQX0dJvAry",
				topLine: "_1l7oRxdMdQQ7NG2BqRCukJ",
				title: "_3tEYeY-LfC8l7tb0sWeImJ",
				subtitle: "_42_eHTHzRRdWB7Fg8R_QS",
				description: "_33SFF8h93OHkDyAJ59D1nc",
				buttonWrapper: "_9wv2Od0X3vE5kIG9M0Ic",
				commonBtn: "_193xt0mDvkWqbClnP3Aj6T",
				primaryBtn: "BwIqd_kQSoiSr3qEDtdp_"
			}
		},
		"./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1DtVp1OCzoJt6rVu4kqyST",
				container: "_1DtVp1OCzoJt6rVu4kqyST",
				Phone: "_20m5B-2NHmUmXVUYC1gymo",
				phone: "_20m5B-2NHmUmXVUYC1gymo",
				android: "_2jgq6Cm4n7c3NNl8VpFltS",
				iphone: "_2ocrsCliWP9UUmx5ZL374w",
				Carousel: "_1gqdyMEgD0pz6QBvVhgU7i",
				carousel: "_1gqdyMEgD0pz6QBvVhgU7i",
				Frame: "_3P_iHJEXRll3mWyuqNik3I",
				frame: "_3P_iHJEXRll3mWyuqNik3I"
			}
		},
		"./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_23C-3j-0TrSZn_NJT8fcwU",
				container: "_23C-3j-0TrSZn_NJT8fcwU",
				Disclaimer: "_19_2-KUNWYbunHVuHaoY-a",
				disclaimer: "_19_2-KUNWYbunHVuHaoY-a",
				Link: "EzRsHBU9A06NEXZnsJyWI",
				link: "EzRsHBU9A06NEXZnsJyWI"
			}
		},
		"./src/reddit/components/FrontpageSignup/Upsell/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1uKZh7b1kZ-bLvlZ02RLL6",
				container: "_1uKZh7b1kZ-bLvlZ02RLL6",
				MainContent: "_1xH0LEH3NeL-Kz1FAMx9Vz",
				mainContent: "_1xH0LEH3NeL-Kz1FAMx9Vz",
				MainContentColumn: "_3UaPvIbppFSklSTg2aTFLl",
				mainContentColumn: "_3UaPvIbppFSklSTg2aTFLl",
				Images: "_19dEFhHhbDgVJWuOq0KZlf",
				images: "_19dEFhHhbDgVJWuOq0KZlf",
				IFrame: "_2e0gx7j1Bc2qfAjI-3Tbio",
				iFrame: "_2e0gx7j1Bc2qfAjI-3Tbio",
				fields: "g5DNTyz0K4p8Qe1KemhqM",
				NotReady: "W6BMDJ-zjJbsEwxbpvU5r",
				notReady: "W6BMDJ-zjJbsEwxbpvU5r",
				NotReadyText: "_1igwWwaemysS2mmPW8WZ2s",
				notReadyText: "_1igwWwaemysS2mmPW8WZ2s",
				NotReadyIcon: "_3PeYnzFZio-HxxDaqnOAE_",
				notReadyIcon: "_3PeYnzFZio-HxxDaqnOAE_",
				Links: "_1etyEGrcHpnkE1UMtQIjpV",
				links: "_1etyEGrcHpnkE1UMtQIjpV",
				Carousel: "_3OBSZQIgZx2ksSzBQmYOeO",
				carousel: "_3OBSZQIgZx2ksSzBQmYOeO"
			}
		},
		"./src/reddit/components/GlobalModalContainer/registry.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			}));
			const s = {},
				r = () => null;

			function o(e, t) {
				if (e in s) throw new Error(`Modal with id ${e} already registered!`);
				s[e] = t
			}

			function a(e) {
				return e && e in s ? s[e] : r
			}
		},
		"./src/reddit/components/Gold/GildAnimationOverlay/index.m.less": function(e, t, n) {
			e.exports = {
				modalOverlay: "_3b88NBdFAQ04N7cULqQvPh",
				fadeOut: "_3ktYxYLY8M4ue26GyBBjpt",
				modalBody: "_2W0vYckM4OsrrANQqi_sir",
				gildAnimationContainer: "_3xD0e6RJGug4SSLnVIPeh2",
				awardScaleIn: "_231us7lszsy_R3tzl2GqL1",
				awardScaleOut: "eC2A2qBG6f2mU9XPlMMcZ",
				animationComponent: "_2KBRcm-P0k4_mVHu1UroF6",
				starburst: "_3xKR2QByGO_30UN1TJJ9qF",
				awardAsset: "Ju8wOr8Uag5VUdjYF6E_m",
				sparkle: "_28LAx64oVvQTCvxl2mvkX4"
			}
		},
		"./src/reddit/components/Gold/GildAnimationOverlay/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "SPARKLE_ASSET_PATH", (function() {
				return g
			})), n.d(t, "STARBURST_ASSET_PATH", (function() {
				return C
			}));
			var s = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/selectors/gold/awardIcon.ts"),
				b = n("./src/reddit/selectors/gold/giveAwards.ts"),
				h = n("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				f = n.n(h);
			const g = `${s.a.assetPath}/img/gold/animated-sparkle-256.png`,
				C = `${s.a.assetPath}/img/gold/animated-starburst-256.png`,
				O = Object(c.c)({
					award: b.b,
					awardIcon: p.d
				}),
				v = Object(i.b)(O, e => ({
					onClose: () => e(Object(u.g)(m.a.GOLD_GILD_ANIMATION_OVERLAY))
				}));
			t.default = Object(d.a)(v(e => {
				const {
					award: t,
					awardIcon: n,
					onClose: s
				} = e;
				setTimeout(s, 1700);
				const o = r.fbt._("Animation of {award name} image", [r.fbt._param("award name", t.name)], {
					hk: "222osK"
				});
				return a.a.createElement("div", {
					className: f.a.gildAnimationContainer
				}, a.a.createElement("div", {
					className: Object(l.a)(f.a.animationComponent, f.a.starburst),
					style: {
						backgroundImage: `url(${C})`
					}
				}), a.a.createElement("img", {
					alt: o,
					className: Object(l.a)(f.a.animationComponent, f.a.awardAsset),
					src: n
				}), a.a.createElement("div", {
					className: Object(l.a)(f.a.animationComponent, f.a.sparkle),
					style: {
						backgroundImage: `url(${g})`
					}
				}))
			}))
		},
		"./src/reddit/components/GoogleOneTapIFrame/index.m.less": function(e, t, n) {
			e.exports = {
				IFrame: "V6V7iCbDSFo5LexMzDv4B",
				iFrame: "V6V7iCbDSFo5LexMzDv4B",
				"m-hidden": "_1F0LLqsimObYeEF5Q2a-Nn",
				mHidden: "_1F0LLqsimObYeEF5Q2a-Nn"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/BurnPointsModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-BurnPointsModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e(0), n.e("vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~bd661033"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/BurnPointsModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/TransactionModals/BurnPointsModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			Object(a.b)(i.a.CRYPTO_BURN_POINTS, e => o.a.createElement(c, null))
		},
		"./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-ConvertToCoinsModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e(0), n.e("vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~bd661033"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), n.e("reddit-components-Governance-TransactionModals-ConvertToCoinsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			Object(a.b)(i.a.CONVERT_TO_COINS, e => o.a.createElement(c, null))
		},
		"./src/reddit/components/Header/AvatarQuickCreateCta/index.m.less": function(e, t, n) {
			e.exports = {
				ctaContainer: "_1_-T-UyaTFWSKiU5qkmH4p",
				sparkle: "_3BW2xh05Xd6fPp8ewmG_zt",
				fadeIn: "_3EsU62vzG6DnMyeCR6qmsN",
				quickCreateGiftAnimation: "_2ayMLd0-DF3iBdcNu4Jyw9",
				sparkle1: "_2XTOJxs8_NUxZs7xO_yqD4",
				sparkle2: "DSsYeuIxRQ_6mpLKn7Znw",
				sparkle3: "egE_sRX5MzRyi9eJWBBvR"
			}
		},
		"./src/reddit/components/Header/GoldCoinsCta/index.m.less": function(e, t, n) {
			e.exports = {
				ctaContainer: "_1t5i5bNwZeJ7FuUXZ9rM-p",
				ctaContent: "jEUbSHJJx8vISKpWirlfx",
				special: "_1dJtiWITrnvIbQdXgYgdym",
				text: "_2Q7wEg_pr4EKVIc6XvJibh",
				icon: "_1F-AgkBVxGxQsEfI3oVkVa"
			}
		},
		"./src/reddit/components/Header/GoldCoinsCta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n.n(r),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/models/Gold/ProductOffer.ts"),
				b = n("./src/reddit/components/CoinPurchaseModal/async.tsx"),
				h = n("./src/reddit/components/PremiumPurchaseModal/Loader.tsx"),
				f = n("./src/reddit/components/TrackingHelper/index.tsx"),
				g = n("./src/reddit/helpers/awards/overlayIds.ts"),
				C = n("./src/reddit/helpers/correlationIdTracker.ts"),
				O = n("./src/reddit/helpers/trackers/goldTopNav.ts"),
				v = n("./src/reddit/icons/fonts/index.tsx"),
				x = n("./src/reddit/selectors/experiments/econStorefrontClaim.ts"),
				y = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				E = n("./src/reddit/selectors/tooltip.ts"),
				j = n("./src/reddit/components/Header/GoldCoinsCta/index.m.less"),
				_ = n.n(j);
			const S = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-CoinPurchaseDropdown",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-CoinPurchaseDropdown").then(n.bind(null, "./src/reddit/components/CoinPurchaseDropdown/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/CoinPurchaseDropdown/index.tsx"
					}
				}),
				k = Object(g.a)(),
				P = Object(d.c)({
					activeSaleConfig: y.a,
					activeTooltipId: E.a,
					coinPurchaseDropdownIsOpen: e => Object(E.b)(k)(e),
					isFreeAwardEventEnabled: e => Object(x.a)(e) && Object(y.g)(e)
				}),
				w = (e, t) => ({
					closeTooltip: () => e(Object(m.i)()),
					requestSpecialEvents: () => e(Object(u.a)()),
					toggleTooltip: t => {
						e(t === k ? Object(m.i)() : Object(m.f)({
							tooltipId: k
						}))
					}
				}),
				N = Object(c.b)(P, w);
			class I extends i.a.Component {
				constructor() {
					super(...arguments), this.handleClick = e => {
						const {
							activeTooltipId: t,
							activeSaleConfig: n,
							coinPurchaseDropdownIsOpen: s,
							isFreeAwardEventEnabled: r,
							sendEvent: o,
							toggleTooltip: a
						} = this.props;
						if (!s) {
							Object(C.e)(C.a.GoldPayment, !0), Object(b.a)(), Object(h.a)();
							const e = n ? p.a.CoinSale : r ? p.a.StorefrontFreeAward : void 0;
							o(Object(O.d)("get_coins_cta", e))
						}
						a(t)
					}
				}
				componentDidMount() {
					const {
						activeSaleConfig: e,
						requestSpecialEvents: t
					} = this.props;
					e || t()
				}
				getButtonText() {
					const {
						activeSaleConfig: e,
						isFreeAwardEventEnabled: t
					} = this.props;
					return e ? e.ctaText || r.fbt._("Coin Sale", null, {
						hk: "1VWZAa"
					}) : t ? r.fbt._("Free", null, {
						hk: "2qYM7h"
					}) : r.fbt._("Get Coins", null, {
						hk: "4h3X7d"
					})
				}
				render() {
					const {
						activeSaleConfig: e,
						className: t,
						closeTooltip: n,
						coinPurchaseDropdownIsOpen: s,
						isFreeAwardEventEnabled: r
					} = this.props, o = this.getButtonText(), a = !!e || r, c = Object(l.a)(_.a.icon, {
						[_.a.special]: a
					});
					return i.a.createElement("button", {
						className: Object(l.a)(t, _.a.ctaContainer, {
							[_.a.special]: a
						}),
						id: k,
						onClick: this.handleClick
					}, i.a.createElement("div", {
						className: Object(l.a)(_.a.ctaContent, {
							[_.a.special]: a
						})
					}, i.a.createElement(v.a, {
						name: "coins",
						className: c
					}), i.a.createElement("span", {
						className: _.a.text
					}, o)), s && i.a.createElement(S, {
						activeSaleConfig: e,
						isFreeAwardEventEnabled: r,
						isOpen: s,
						onCloseTooltip: n,
						tooltipId: k
					}))
				}
			}
			t.a = N(Object(f.c)(I))
		},
		"./src/reddit/components/Header/MwebResponsiveHeader/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1oBkxkI9Ae3Qs71WqfDicM",
				container: "_1oBkxkI9Ae3Qs71WqfDicM",
				HomeLink: "_3zEcZZkpP9hBtkGINx6zWf",
				homeLink: "_3zEcZZkpP9hBtkGINx6zWf",
				Snoo: "_1ZrnhKss6v3Ggw08tDbTXH",
				snoo: "_1ZrnhKss6v3Ggw08tDbTXH",
				Wordmark: "_1rivc6IIexuAqsRVeptXuq",
				wordmark: "_1rivc6IIexuAqsRVeptXuq"
			}
		},
		"./src/reddit/components/Header/NotificationsButton/index.m.less": function(e, t, n) {
			e.exports = {
				notificationInboxIconContainer: "_1Tdh9XCXmEOaXAlloLqrmH",
				welcomeTooltip: "_3OMmYPy8XZymvnsxBSK3c0",
				visible: "_1Ssw-NK4SzV_ZrK0hsAQZj",
				welcomeTooltipArrow: "_3Dl1lNOXSRFghRireQprSr"
			}
		},
		"./src/reddit/components/Header/QuickLinks/index.m.less": function(e, t, n) {
			e.exports = {
				container: "x0hiXHicn7r3BG9m1FJH4",
				row: "_1vXXD2qKLnHetdKvisFzBD",
				icon: "_3dZnYgFFpifT-M_Vs2FAq6",
				psBattlesIcon: "_3wyl6g2grDztg8KpnqxWiE",
				redditRecapIcon: "_1o57g3XSOeqm_QEQu824EP",
				isNightMode: "F6FHwO9Q2Pva6rdcMPWrm"
			}
		},
		"./src/reddit/components/Header/Sparse.m.less": function(e, t, n) {
			e.exports = {
				Logo: "_27RfkQ1Fuxjg5UzNJqCtC-",
				logo: "_27RfkQ1Fuxjg5UzNJqCtC-",
				Wordmark: "_1j_hHS0lKR-ok52j1iYlId",
				wordmark: "_1j_hHS0lKR-ok52j1iYlId",
				HomeExternalLink: "XGVEYXuPeFqHqAf2DqHaM",
				homeExternalLink: "XGVEYXuPeFqHqAf2DqHaM",
				SparseContainer: "_1GdKQyDUWvhTFBDr0FsAkj",
				sparseContainer: "_1GdKQyDUWvhTFBDr0FsAkj",
				SparseContainerExp: "pb476LMY7Ob_RBN7pZ3kN",
				sparseContainerExp: "pb476LMY7Ob_RBN7pZ3kN"
			}
		},
		"./src/reddit/components/Header/Sparse.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/elementIds.ts"),
				a = n("./src/reddit/contexts/NavbarExp.ts"),
				i = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				c = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				l = n("./src/reddit/components/Header/Sparse.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");
			const p = m.a.wrapped(i.a, "Logo", u.a),
				b = m.a.wrapped(c.a, "Wordmark", u.a),
				h = m.a.div("SparseContainer", u.a),
				f = m.a.div("SparseContainerExp", u.a),
				g = m.a.a("HomeExternalLink", u.a);
			t.a = function(e) {
				const t = Object(s.useContext)(a.a) ? f : h;
				return r.a.createElement(t, {
					id: o.c
				}, r.a.createElement(g, {
					href: e.logoHref || "/",
					onClick: e.logoOnClick
				}, r.a.createElement(d.a, null, r.a.createElement(p, null), r.a.createElement(b, null))))
			}
		},
		"./src/reddit/components/Header/User/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3Wg53T10KuuPmyWOMWsY2F",
				icon: "_234aKY_LemFWuSTYVoshHn",
				link: "_2qcLS5et_OlJluP0WWDdsJ",
				loggedOut: "U3FRqDA_Qhr4icbaNXSuf",
				loggedOutRow: "_1JBkpB_FOZMZ7IPr3FyNfH",
				oldRedditLink: "_31lJpVPojF0SAR5usRZ36h",
				row: "_19oWd7e3z7-ztUGzdIoCR7",
				separator: "Z_HUY3BUsGOBOtdmH94ZS",
				visitOldReddit: "_3Z5rfDuvQDBNfBgpXdnt_b",
				iconWrapper: "_2QpF1Fkq_rr2nvPL1no0nN"
			}
		},
		"./src/reddit/components/Header/index.m.less": function(e, t, n) {
			e.exports = {
				centeredRow: "_30BbATRhFv3V83DHNDjJAO",
				container: "_2GyPfdsi-MbQFyHRECo9GO",
				navbarHeightContainer: "lNoTgmppXfHyXXS-3aRDj",
				layout: "_2vkeRJojnV7cb9pMlPHy7d",
				layoutContainer: "_31IHoBZ9we7EzLMdkTaIR2",
				compactLayout: "Y4MkVr6trrdypfZVUkpIA",
				searchContainer: "_1iqnOY2Y57wmetu8MAjiId",
				explore: "_17gDYx5g5X6q--Lcmc9IvO",
				search: "_2dlTXDaX9JuL0bekTwhV18",
				snoo: "_1O4jTk-dZ-VIxsCuYB6OR8",
				snooExp: "_32hLJ8_m9mplK6bwNXysk8",
				wordmark: "_1bWuGs_1sq4Pqy099x_yy-",
				left: "_3dnbqz69WJTFCss8wl7Wlk",
				quickLinks: "_23q1waDr4n_2fR5A7zcZzb",
				right: "_2u8LqkbMtzd0lpblMFbJq5",
				HeaderDynamicStyles: "_1tvdSTbdxaK-BnUbzUIqIY",
				headerDynamicStyles: "_1tvdSTbdxaK-BnUbzUIqIY",
				bladeIsOpen: "_1z0T-r2uyIYQr2tLUWs4M2",
				MwebResponsiveHeader: "_2egmn5KNYpLrH0zPS0gihA",
				mwebResponsiveHeader: "_2egmn5KNYpLrH0zPS0gihA"
			}
		},
		"./src/reddit/components/HeaderIconContainer/index.m.less": function(e, t, n) {
			e.exports = {
				Button: "PH-V9ggsF2mi5JTDmDqdR",
				button: "PH-V9ggsF2mi5JTDmDqdR",
				Container: "FOioVk_DUTmZIKKa82Mm1",
				container: "FOioVk_DUTmZIKKa82Mm1",
				isOpen: "_2DgzqfpTotjWrh91uFswuC"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less": function(e, t, n) {
			e.exports = {
				item: "_26MVepkxZHzpNv1cuAA4JA",
				mFocused: "_7Xbismt11Yj8tq6BaRWFr",
				buttonContainer: "oiDWziAp_Bua6rb7oQKXs",
				icon: "cq0sTeCPC4GI78UNPdClD",
				text: "_1nBP1OfpQDgTmzRFqaVult"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_1Ok0AiXwAeYl2SsUBaxgPC"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less": function(e, t, n) {
			e.exports = {
				filter: "_37tmRmxaFMjRRrvwcY2JmY",
				item: "_2MgAHlPDdKvXiG-Qbz5cbC",
				listHeader: "_2XRPX11qL4-HxWPuHAzOW5",
				headerButton: "_1ee4j8lY-1iIi8GkJdJ5RD"
			}
		},
		"./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less": function(e, t, n) {
			e.exports = {
				container: "nSJCQrnLY07CzwT8tTsNO",
				title: "csebgIdGwT3fBJ8kUT2aQ",
				subtitle: "rsZg2IAMPbcDGNPnNIBy_",
				description: "_3m-DocsNGlVUjAtAm7ZZLi",
				dismissBtn: "_3tJL-r-lrTcB_GkrrlZxEN"
			}
		},
		"./src/reddit/components/HeaderUserActions/index.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "_2zZ-KGHbWWqrwGlHWXR90y",
				postIcon: "_1aj2BqXAeeo2bHwArcJ5AT",
				moderateIcon: "_14ugEJZOmgrUDXYeFSSv9w",
				isLit: "_3ge8uSGq8pAK2qqs45Vzde",
				link: "_1x6pySZ2CoUnAfsFhGe7J1",
				headerLinks: "_20HfCAFz3ot1MW1o29ZoGZ",
				headerUserDropdown: "_1pA8z73SZ1olP5KMKFN4_Z",
				moderationDropdown: "_1luaIaEVRAlXWIwqbCOj2a",
				envelopeIcon: "_1V77mEI1g_5ZlCh_c2-Yab",
				isUnread: "_2Wgcbg0LNUiJf4L2fVQJ7O",
				notificationInboxIcon: "_2mR_VyuaB50nsX1FR6XERF",
				loggedInGoogleOneTap: "GmCFJz0Lv_7OTbtdvK2me",
				icon2020: "_3uVYL9qgX3QSEa_F4F-DPv",
				Tooltip: "_3Sym-M5cqi1lDyLwRbM2As",
				tooltip: "_3Sym-M5cqi1lDyLwRbM2As"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/UserMenu/ExploreMenu/styles.m.less": function(e, t, n) {
			e.exports = {
				basicLink: "_2CQ2c7khtd-m7uslH6Mz7J",
				collapsibleContainer: "_10IrsfRFg99DXaIMnqu-vj"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/UserMenu/RecentCommunitiesMenu/styles.m.less": function(e, t, n) {
			e.exports = {
				basicLink: "_2gT-SgcGRQsJc7cLAzWT3r",
				headingContent: "_26v6JOihbU7MuezKAlj4JI",
				subredditIcon: "u_VVgOsrqJsUNbQ80sEby",
				title: "_3eGd1zitdF6RmAyLpSDjG6"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/UserMenu/index.m.less": function(e, t, n) {
			e.exports = {
				coinsLink: "_3zu1R6cDitNjrJaFA1VPXj",
				coinsTitle: "_6PPJ3peMr-B90dx0MQDhB",
				meta: "msJd1mFtK7HCAm9dasMIn"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/UserMenu/shared.m.less": function(e, t, n) {
			e.exports = {
				button: "_3fbofimxVp_hpVM6I1TGMS",
				heading: "_1pjbWqnK8P0fDmz8PgLxXY",
				secondLevelButton: "NiNJXib52w4C8FUidB5af",
				secondLevelSwitch: "nBh6t8H3UNZpI1Ce9s6yQ",
				headingContent: "f8nXLisWxOYzMMl1uIAP3",
				iconContainer: "_225mt8Dkk7IyfYILsMLk9t",
				title: "yloKeyD8bfd8UJ_Gi9rsR",
				collapseIcon: "_3MAMvvyd5hQy71OUfBGRkm",
				chevronIcon: "_3DRWid86ywqQiIYSK1e5mN",
				"m-expanded": "_1AFIV6eh63D9Ab_ml6uJ5j",
				mExpanded: "_1AFIV6eh63D9Ab_ml6uJ5j",
				contentContainer: "_3SDj_IT6ZaqCbKfC4eTjb2",
				"m-collapsible": "sJncFX1AQ0-0SzCGc9V5L",
				mCollapsible: "sJncFX1AQ0-0SzCGc9V5L",
				isOpen: "_27B2PE8qRdRlQHbzPBidG6",
				innerLink: "_2ChaQYEC5d_hjd-mltzvQK",
				copyrightContainer: "_2XCnMY85ivEZUL6cAgK0nV",
				copyrightText: "_ttuvLVH4k74IkCGNFJSt",
				subredditIcon: "_3i89oiIrBc-3aoYCzDu8Dy",
				spanButton: "VeDtdPVW3ue8oUfGWbxqu"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/avatar.m.less": function(e, t, n) {
			e.exports = {
				avatarLinkBody: "_6opQAE7SUXi-Fy7P3vItL",
				marketingBadge: "_6qTe2HfpYA9trfOatbi74",
				marketingAsset: "_1lcNm4na-FCLir4IeIpM7w",
				sparkle: "_2thIi4nb9dgSv10ECKVHL4",
				fadeIn: "w8i-7IiMlCG-ncHyRHzxw",
				sparkle1: "_2XE_ejqL9tZ617JilWAoev",
				sparkle2: "RPtjfCh_RZnh_Lh-sTACB",
				sparkle3: "o03hgL0CTE9PaKw9A2nHD",
				sparkle4: "_16-T-fB2mGMlxyfbZjQvUG"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/index.m.less": function(e, t, n) {
			e.exports = {
				accountCoins: "_2pXW42IYsGP59qZnjAnkAx",
				accountDisplayText: "DFKWwVItcycZV1bKUOyay",
				accountKarma: "Rz5N3cHNgTGZsIQJqBfgk",
				accountDetails: "_1pHyKCBktIf_9WFW9jjM3P",
				accountWrapper: "_3KfbpxpA8Esu_3UHTmIvfw",
				isLoggedOut: "_22SL37yETIW414yUiZj27w",
				isLoggedIn: "_2OFo5eaD2V6ZcJsYBuYned",
				button: "_1zZ3VDhRC38fXLLvVCHOwK",
				presenceToggle: "_3Axd0OX2sZP0PEIHdeocc3",
				buttonText: "_3m4MQxMy4WfgIkMhHh-UAg",
				coinFontIcon: "LyE1zRbUJlGravH4LHRfD",
				karmaIcon: "_2wYneOcJEB6o4mj1NedmsR",
				dropdownTriangle: "_50RxI-5rW1xzwoC42vhzM",
				imgIcon: "-z42jjKOFdAdFhdJ8mmI4",
				navbarLikeMweb: "_2XkHtsPtFuTExJyk9JQUAp",
				imgIconWrapper: "_1zyV-XmoYeSNGWjfZiXbPc",
				defaultProfileIcon: "_3-lF5kPDkSGfnVUW_GtvUV",
				modModeIcon: "_2Az3JCV8DZZ1S6CU8cR-bl",
				nightIcon: "gRVZlDl2ZHFThtPLjYYzD",
				inlineButton: "_18X7KoiaLuKbuLqg4zE8BH",
				dropdownOpen: "_3F3oKTToidUQ0CbMS1cccX",
				premiumFontIcon: "pztXT07fzqRz6IEE6thRV",
				Dropdown: "_1HSQGYlfPWzs40LP4_oFi5",
				dropdown: "_1HSQGYlfPWzs40LP4_oFi5",
				username: "_2BMnTatQ5gjKGK5OWROgaG",
				divider: "_7cxLZzQcuE-aYbch5G9oN",
				sectionHeader: "_18Q1kN_hFY6M09dHaoehBF",
				entrypointLink: "pszNQQxC761u1dbJ3aR-C",
				wrappedRedditLink: "_1f-M1-Wco_JkruNM-gbitJ",
				title: "_3FG3m0EPMiB-kuAPH9Nkv",
				new: "_1dN5eIVV_0z41cZZwxMAGV"
			}
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("IdCard").then(n.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "c", (function() {
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/config.ts"),
				o = n("./src/lib/pubsub/index.ts"),
				a = n("./src/reddit/constants/listings.ts"),
				i = n("./src/reddit/constants/page.ts");
			const c = e => e && e.toLowerCase() === a.b.Popular,
				d = e => e && e.toLowerCase() === a.b.All,
				l = e => e && e === i.c,
				u = (e, t = 40, n = 68) => ({
					height: n,
					image: e,
					width: t
				}),
				m = ({
					listingName: e,
					subreddit: t,
					idCardWidget: n
				}) => {
					let o, i, m, p, b;
					const h = n && n.subscribersText || s.fbt._("Members", null, {
							hk: "1dldMb"
						}),
						f = n && n.currentlyViewingText || s.fbt._("Online", null, {
							hk: "36JX70"
						});
					let g, C;
					return l(e) ? (o = `${r.a.assetPath}/img/id-cards/home-banner@2x.png`, m = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), b = a.c[a.b.Home], i = s.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), p = s.fbt._("Home", null, {
						hk: "9xVXB"
					})) : d(e) ? (o = `${r.a.assetPath}/img/id-cards/banner@2x.png`, i = s.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), m = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), p = "r/all", b = a.c[a.b.All]) : c(e) ? (o = `${r.a.assetPath}/img/id-cards/banner@2x.png`, i = s.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), m = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), p = "r/popular", b = a.c[a.b.Popular]) : e && (i = n && n.description, m = u(""), p = t.displayText, b = t.url, C = n && n.subscribersCount, g = n && n.currentlyViewingCount), {
						snooBackground: m,
						description: i,
						titleText: p,
						url: b,
						subscribersCount: C,
						subscribersText: h,
						currentlyViewingText: f,
						currentlyViewingCount: g,
						...o ? {
							bannerBackgroundImage: o
						} : {}
					}
				},
				p = new o.a,
				b = "VISIBLE",
				h = "NOT_VISIBLE",
				f = e => p.publish(e ? b : h)
		},
		"./src/reddit/components/InboxBanner/Banner.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/components/InboxBanner/index.m.less"),
				d = n.n(c);
			t.a = ({
				className: e,
				closeButtonText: t,
				closeIcon: n,
				descriptionText: r,
				primaryButtonText: c,
				titleText: l,
				onClose: u,
				onClick: m
			}) => o.a.createElement("div", {
				className: Object(s.a)(d.a.banner, e)
			}, o.a.createElement("div", {
				className: d.a.bannerTitleContainer
			}, l && o.a.createElement("h4", {
				className: d.a.bannerTitle
			}, l), n && o.a.createElement(a.t, {
				onClick: u,
				Icon: Object(i.b)("close_fill"),
				className: Object(s.a)(d.a.closeIcon, d.a.closeButton),
				size: a.d.XXS,
				priority: a.c.Plain
			})), r && o.a.createElement("p", {
				className: d.a.bannerDescription
			}, r), o.a.createElement("div", {
				className: d.a.bannerButtonsContainer
			}, c && o.a.createElement(a.t, {
				text: c,
				priority: a.c.Tertiary,
				className: Object(s.a)(d.a.button, d.a.primaryButton),
				size: a.d.XS,
				onClick: m
			}), t && o.a.createElement(a.t, {
				text: t,
				onClick: u,
				priority: a.c.Plain,
				size: a.d.XS,
				className: Object(s.a)(d.a.button, d.a.closeButton)
			})))
		},
		"./src/reddit/components/InboxBanner/PolicyBanner.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/InboxBanner/Banner.tsx"),
				i = n("./src/reddit/helpers/trackers/inbox.ts"),
				c = n("./src/reddit/hooks/useTracking.ts"),
				d = n("./src/reddit/components/InboxBanner/index.m.less"),
				l = n.n(d);
			const u = ({
				onClose: e,
				pageType: t
			}) => {
				const n = Object(c.a)(),
					r = s.fbt._("We’ve updated our {userAgreement} and {privacyPolicy}. Take a look, as the changes take effect September 12, 2021.", [s.fbt._param("userAgreement", o.a.createElement("a", {
						className: l.a.underlineLink,
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "User Agreement")), s.fbt._param("privacyPolicy", o.a.createElement("a", {
						className: l.a.underlineLink,
						href: "https://www.redditinc.com/policies/privacy-policy",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "Privacy Policy"))], {
						hk: "3bGC4g"
					});
				return o.a.createElement(a.a, {
					className: l.a.policyBanner,
					titleText: s.fbt._("Reddit’s User Agreement & Privacy Policy", null, {
						hk: "32fxCY"
					}),
					descriptionText: r,
					primaryButtonText: s.fbt._("Ok", null, {
						hk: "1IJxzv"
					}),
					onClick: s => {
						s.stopPropagation(), e(), n(Object(i.f)(t, i.a.Confirm))
					}
				})
			}
		},
		"./src/reddit/components/InboxBanner/index.m.less": function(e, t, n) {
			e.exports = {
				underlineLink: "_3vOO3WyD7yteL4Rr9E1i2y",
				banner: "_34mO86zNIysmcISYIe8gVT",
				bannerTitleContainer: "rh7yf_ejK6H75L6jZkb6C",
				bannerTitle: "V_VLkmdSrXqz92-5vad5F",
				bannerDescription: "_1vbdR0mal1nPuuTOZIemLg",
				closeButton: "-Fi_Lr4OQ6XfCIiufmgxa",
				bannerButtonsContainer: "_1a9VL63O5el1YN7RuPoDLy",
				button: "_1mejKTw8yWGmudymV6GufX",
				primaryButton: "_1mR2YFl21PdJDX9T7ykA7c",
				welcomeBanner: "_3QWgBcfZuqQ6TlxZa6uYkS",
				dnPromptBanner: "_3IIpKn1IlCXgko4sLMEie1",
				policyBanner: "GLgkxGZkPymWBWeRISXBe",
				modalHeader: "_2Ggqgl_RyXu2U-mPYZSaCk",
				modalTitle: "_2C3YUpN8pGzseZOBK0tl0I",
				modalCloseIcon: "_2BTQI8_1TIwwfdecOP_j6o",
				modalListItem: "-sXLpWAGj2HMFvzRvH_bC",
				modalListIcon: "_3UO2hA0CsOqKl1bYybPZGs",
				wrappedRedditBanner: "_3lPlfNiwLG6b9WE7zxkkU5",
				bannerContainer: "V5Q75l1gWtGpBZEehJiGH",
				bannerImage: "_2zetWw7f4W-0OWrUYJHPQ-",
				bannerDataContainer: "SIz6ozr7aqewYGVSLfSf6",
				bannerLogo: "_3vKs7F-vWpFg20NtGjjN62"
			}
		},
		"./src/reddit/components/InboxTooltip/Component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return X
			})), n.d(t, "b", (function() {
				return ne
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/notifications/index.ts"),
				i = n("./src/lib/notifications/constants.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/BadgeCounter/index.tsx"),
				u = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				m = n("./node_modules/lodash/omit.js"),
				p = n.n(m),
				b = n("./src/reddit/components/InboxBanner/Banner.tsx"),
				h = n("./src/reddit/components/InboxBanner/index.m.less"),
				f = n.n(h);
			const g = ({
				onClose: e,
				onTurnOnBrowserNotifications: t
			}) => {
				return o.a.createElement(b.a, {
					className: f.a.dnPromptBanner,
					titleText: s.fbt._("Don’t miss out on updates — Turn on desktop notifications.", null, {
						hk: "10oNqB"
					}),
					onClose: t => {
						t.stopPropagation(), e()
					},
					closeIcon: !0,
					primaryButtonText: s.fbt._("Turn On", null, {
						hk: "3hywR9"
					}),
					closeButtonText: s.fbt._("No Thanks", null, {
						hk: "2GQOmV"
					}),
					onClick: n => {
						t(), e()
					}
				})
			};
			var C = n("./src/reddit/components/InboxBanner/PolicyBanner.tsx"),
				O = n("./src/config.ts"),
				v = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/controls/InternalLink/index.tsx"),
				y = n("./src/reddit/icons/fonts/index.tsx"),
				E = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				j = n("./src/reddit/routes/wrappedreddit/index.ts");
			const _ = {
					background: `url(${O.a.assetPath}/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png)`,
					backgroundSize: "cover"
				},
				S = ({
					onClose: e
				}) => o.a.createElement("div", {
					className: Object(c.a)(f.a.banner, f.a.wrappedRedditBanner),
					style: _
				}, o.a.createElement(x.a, {
					to: j.b,
					className: f.a.bannerContainer,
					onClick: e
				}, o.a.createElement("div", {
					className: f.a.bannerDataContainer
				}, o.a.createElement("div", {
					className: f.a.bannerTitleContainer
				}, o.a.createElement(E.a, {
					className: f.a.bannerLogo
				}), o.a.createElement("h4", {
					className: f.a.bannerTitle
				}, s.fbt._("Reddit Recap", null, {
					hk: "tRxDK"
				}))), o.a.createElement("p", {
					className: f.a.bannerDescription
				}, s.fbt._("It’s that time of the year. Come check out your 2021 highlights on Reddit.", null, {
					hk: "eufBA"
				}))), o.a.createElement("img", {
					alt: s.fbt._("Image Banner for Reddit Recap", null, {
						hk: "1K2v1e"
					}),
					className: f.a.bannerImage,
					src: `${O.a.assetPath}/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png`
				})), o.a.createElement(v.t, {
					onClick: e,
					Icon: Object(y.b)("close_fill"),
					className: Object(c.a)(f.a.closeIcon, f.a.closeButton),
					size: v.d.XXS,
					priority: v.c.Plain
				}));
			var k = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				P = n("./src/reddit/components/ResizeSensor/index.tsx"),
				w = n("./src/reddit/components/InboxTooltip/index.m.less"),
				N = n.n(w);
			const I = 3;
			class M extends o.a.Component {
				constructor() {
					super(...arguments), this.ref = o.a.createRef(), this.handleResize = () => {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						e !== this.props.notificationHeight && this.props.setNotificationHeight(e, this.props.index)
					}
				}
				componentDidMount() {
					if (this.props.index + 1 <= I) {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						this.props.setNotificationHeight(e, this.props.index)
					}
				}
				render() {
					const {
						activeOverflowMenuId: e,
						decreaseSubredditNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: s,
						hideSubredditNotifications: r,
						blockAwarder: a,
						index: i,
						isInboxPostEmbedEnabled: c,
						markNotificationAsRead: d,
						notification: l,
						setActiveOverflowMenuId: u,
						onItemClick: m
					} = this.props, p = i + 1 <= I;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						ref: this.ref,
						className: N.a.notificationResizeWrapper
					}, o.a.createElement(k.a, {
						activeOverflowMenuId: e,
						decreaseSubredditNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: s,
						hideSubredditNotifications: r,
						isInboxPostEmbedEnabled: c,
						isInTooltip: !0,
						markNotificationAsRead: d,
						notification: l,
						setActiveOverflowMenuId: u,
						onItemClick: m,
						blockAwarder: a
					}), !!p && o.a.createElement(P.a, {
						onResize: this.handleResize
					})))
				}
			}
			var T = n("./src/reddit/components/NotificationUnit/Placeholder.tsx"),
				R = n("./src/reddit/helpers/trackers/inbox.ts"),
				L = n("./src/reddit/pages/NotificationsInbox/Content/EmptyState.tsx");

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const F = {},
				D = "",
				B = 0,
				U = "200px",
				G = "250px",
				H = "270px",
				W = 100,
				q = .5,
				V = 5;
			class K extends o.a.Component {
				constructor() {
					super(...arguments), this.container = o.a.createRef(), this.state = {
						notificationHeights: F,
						currentNotificationCursorIndex: -1
					}, this.resetOverflowMenu = () => {
						this.props.activeOverflowMenuId.length > B && this.props.setActiveOverflowMenuId(D)
					}, this.getContainerHeight = () => {
						const {
							notificationHeights: e
						} = this.state, {
							isDNInboxPromptBannerEnabled: t,
							isInboxPrivacyPolicyBannerEnabled: n,
							isLoggedIn: s
						} = this.props, r = t || n;
						let o = 0;
						for (const a in e) o += e[a];
						return 0 === o ? r ? G : s ? U : H : (r && (o += W), o)
					}, this.setNotificationHeight = (e, t) => {
						this.setState(n => ({
							notificationHeights: {
								...n.notificationHeights,
								[t]: e
							}
						}))
					}, this.updateCurrentCursorIndex = () => {
						const {
							notifications: e
						} = this.props, {
							currentNotificationCursorIndex: t
						} = this.state, n = t + V, s = n > e.length ? n : e.length - 1;
						this.setState({
							currentNotificationCursorIndex: s
						})
					}, this.renderNotifications = () => {
						const e = p()(this.props, ["notifications"]),
							{
								notificationHeights: t,
								currentNotificationCursorIndex: n
							} = this.state,
							{
								isInboxInfiniteScrollEnabled: s,
								notifications: r
							} = this.props,
							a = r.length > n + V;
						return (s && r.length > 0 && a ? r.slice(0, n + 1) : r).map((n, s) => o.a.createElement(M, A({}, e, {
							index: s,
							key: s,
							notification: n,
							notificationHeight: t[s],
							setNotificationHeight: this.setNotificationHeight
						})))
					}, this.loadNotifications = e => {
						const {
							cursor: t,
							fetchNotifications: n,
							isInboxInfiniteScrollEnabled: s,
							notifications: r
						} = this.props;
						if (e.isIntersecting) {
							const e = r.length > this.state.currentNotificationCursorIndex + V;
							this.props.notifications.length > 0 && s && e ? this.updateCurrentCursorIndex() : t && n({
								after: t,
								first: V
							})
						}
					}
				}
				componentDidMount() {
					const e = this.container && this.container.current;
					e && e.addEventListener("scroll", this.resetOverflowMenu)
				}
				componentWillUnmount() {
					const e = this.container && this.container.current;
					e && e.removeEventListener("scroll", this.resetOverflowMenu), this.resetOverflowMenu()
				}
				render() {
					const {
						hasNextPage: e,
						isDNInboxPromptBannerEnabled: t,
						isInboxPrivacyPolicyBannerEnabled: n,
						isInboxInfiniteScrollEnabled: s,
						isLoggedIn: r,
						isPending: a,
						notifications: i,
						setDesktopNotificationsPromptSeen: c,
						setInboxPrivacyPolicyBannerSeen: d,
						showBrowserNotificationsPermissionSettings: l,
						isWrappedRedditBannerEnabled: m,
						setDesktopNotificationWrappedRedditBannerSeen: p
					} = this.props, b = !(!i || !i.length), h = this.getContainerHeight(), f = i.length > this.state.currentNotificationCursorIndex + V, O = n || t || m;
					return o.a.createElement("div", {
						className: N.a.notificationList,
						ref: this.container,
						style: {
							height: h,
							maxHeight: h
						}
					}, O && o.a.createElement("div", {
						className: N.a.notificationBannerContainer
					}, n && o.a.createElement(C.a, {
						onClose: d,
						pageType: R.b.MiniInbox
					}), t && o.a.createElement(g, {
						onTurnOnBrowserNotifications: l,
						onClose: c
					}), m && o.a.createElement(S, {
						onClose: p
					})), !b && a && o.a.createElement(T.a, null), !b && !a && o.a.createElement(L.a, {
						isBannerEnabled: O,
						isLoggedIn: r
					}), b && this.renderNotifications(), s && b && !a && (e || f) && o.a.createElement(u.a, {
						onChange: this.loadNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: q
					}, o.a.createElement("div", null)))
				}
			}
			var z = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts"),
				Q = n("./src/reddit/helpers/localStorage/index.ts");
			var J = n("./src/reddit/hooks/useInboxPrivacyPolicyBannerSeen.ts"),
				Z = n("./src/reddit/hooks/useTracking.ts");

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const X = [],
				$ = d.a.div("StyledDropdown", N.a),
				ee = ({
					isLoggedIn: e,
					onMessagesClick: t,
					onBarClick: n,
					markAllAsRead: a,
					messagesBadgeCount: i,
					sendInboxClickSettings: d
				}) => {
					const u = !!i,
						m = Object(r.useCallback)(() => {
							t(), n()
						}, [t, n]),
						p = Object(r.useCallback)(() => {
							d(), n()
						}, [d, n]);
					return o.a.createElement("nav", {
						className: N.a.topNav
					}, o.a.createElement("span", {
						className: N.a.topNavTitle
					}, s.fbt._("Notifications", null, {
						hk: "1sYFjx"
					})), e && o.a.createElement("span", {
						className: N.a.topNavLinks
					}, o.a.createElement("span", {
						className: N.a.messagesLinkContainer
					}, o.a.createElement(x.a, {
						className: Object(c.a)(N.a.messagesLink, {
							[N.a.mActive]: u
						}),
						onClick: m,
						to: u ? "/message/unread" : "/message/messages"
					}, s.fbt._("Messages", null, {
						hk: "hulKY"
					}), o.a.createElement(l.a, {
						className: N.a.badgeCount,
						isActive: u,
						unreadCount: i
					}))), o.a.createElement("button", {
						className: N.a.navLink,
						onClick: a
					}, o.a.createElement(y.a, {
						name: "mark_read",
						className: N.a.icon
					})), o.a.createElement(x.a, {
						className: N.a.navLink,
						onClick: p,
						to: "/settings/notifications"
					}, o.a.createElement(y.a, {
						name: "settings",
						className: N.a.icon
					}))))
				},
				te = e => o.a.createElement("div", {
					className: N.a.bottomBar
				}, o.a.createElement(x.a, {
					className: N.a.bottomLink,
					onClick: () => {
						e.sendInboxClickSeeAll(), e.onBarClick()
					},
					to: "/notifications"
				}, s.fbt._("See All", null, {
					hk: "3L3tFc"
				}))),
				ne = e => {
					const t = Object(Z.a)(),
						{
							clearMessageTabBadgeCount: n,
							inboxBadgeCount: s,
							isPending: c,
							messagesBadgeCount: d,
							notifications: l,
							hideTooltip: u,
							isInboxPolicyBannerEnabled: m,
							isLoggedIn: p,
							isPushNotificationsSupported: b,
							isWrappedRedditBannerEnabled: h,
							userId: f
						} = e,
						[g, C] = function(e) {
							const [t, n] = Object(r.useState)(Object(Q.t)(e));
							return [t, Object(r.useCallback)(() => {
								n(!0), Object(Q.yb)(e)
							}, [])]
						}(f),
						[O, v] = Object(z.a)(f),
						[x, y] = Object(J.a)(f),
						E = !(!l || !l.length),
						j = Object(a.a)(),
						_ = j === i.a.Closed || j === i.a.Default || j === i.a.Denied,
						S = b && _ && !O;
					return o.a.createElement($, null, o.a.createElement("div", {
						className: N.a.tooltipContainer
					}, o.a.createElement(ee, {
						markAllAsRead: () => {
							e.markAllAsRead(), t(Object(R.g)({
								isMiniInbox: !0
							}))
						},
						messagesBadgeCount: d,
						onMessagesClick: () => {
							t(Object(R.p)({
								badgeCount: s,
								tab: R.e.Messages
							})), t(Object(R.h)()), n()
						},
						sendInboxClickSettings: () => t(Object(R.m)(R.b.MiniInbox)),
						onBarClick: u,
						isLoggedIn: p
					}), o.a.createElement(K, Y({}, e, {
						isPending: c,
						onItemClick: u,
						setDesktopNotificationsPromptSeen: v,
						isDNInboxPromptBannerEnabled: S,
						isInboxPrivacyPolicyBannerEnabled: m && !x,
						setInboxPrivacyPolicyBannerSeen: y,
						isWrappedRedditBannerEnabled: h && !g,
						setDesktopNotificationWrappedRedditBannerSeen: () => {
							C(), t(Object(R.o)())
						}
					})), (E || c) && o.a.createElement(te, {
						sendInboxClickSeeAll: () => t(Object(R.l)()),
						onBarClick: u
					})))
				}
		},
		"./src/reddit/components/InboxTooltip/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "InboxTooltip",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("InboxTooltip").then(n.bind(null, "./src/reddit/components/InboxTooltip/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/InboxTooltip/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/components/InboxTooltip/hooked.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "_3uJguwDAW5Ra1r4aegBvBq",
				visible: "_1TfMsQUAiVAqjXRo7s3R_t"
			}
		},
		"./src/reddit/components/InboxTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				carot: "_389RY3FytRs4F82-BLVEiq",
				StyledDropdown: "_3fRnnkCBwqAZG6nmxhTKHr",
				styledDropdown: "_3fRnnkCBwqAZG6nmxhTKHr",
				tooltipContainer: "_3oNU8Gzy2V3jDPhFfeEFbD",
				topNav: "F0hrtz76LlopbY9X0wtDo",
				topNavTitle: "wdFbe8PT7DInxaiHo2Me1",
				messagesLinkContainer: "_1581SeO-Xb1j1kfhIRrIyB",
				topNavLinks: "_1R0ZV71kh7uwDXo7fn1eDk",
				messagesLink: "_27rjoZBkLhiqLLjBu-xU_p",
				"m-active": "_29xCmtH_l8UtRn8IP08VLB",
				mActive: "_29xCmtH_l8UtRn8IP08VLB",
				badgeCount: "_1mrhJHegVozrNeTH7r5svN",
				navLink: "_2l1d6HSQ764u0JcvRSEJXD",
				notificationList: "_2MId4QR3fPm4RPlrSTZg_E",
				notificationResizeWrapper: "_3PWmWL3sMw23-xBHydcnPf",
				emptyState: "_17HPdVVhdV3LWBjzHwGlhA",
				emptyTitle: "_2CY3n2AMoj0af7gQhj9dfI",
				emptyDescription: "HxBuWRTAFa8y8bMiQKdSJ",
				bottomBar: "_8INvnNiEMHRndJ0M-LiY",
				bottomLink: "X1WC7m4hrFQNzINreBRsv",
				icon: "_3pDOQfbIbQuT4PBwPGp85E",
				BellOutline: "SBkEJxL8i3eNB9EZn7AAz",
				bellOutline: "SBkEJxL8i3eNB9EZn7AAz",
				notificationBannerContainer: "_2prSjBmU3TS_Liup8DFR-2",
				welcomeTooltipContainer: "_1OZgaZvEs6sdhMUCqaUCW_",
				closeButton: "_3fWRL_DhsIqXjpW4eXDwmR",
				CloseIcon: "_2xK-Knp1-SUm_DxX4Ak1T0",
				closeIcon: "_2xK-Knp1-SUm_DxX4Ak1T0",
				tooltipTitle: "_3EmopbfaUR0bemuuUcEcko",
				tooltipDescription: "_3MtkPXIDbG9Hf6YeNOxAxv"
			}
		},
		"./src/reddit/components/JumpToContent/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3KaTO_3YaHK3SMocnu8jV9",
				rightBorder: "_1Bt_cwKVUG30M9eNB-9rU4",
				rightBorderExp: "d2l2sN1D4PNVkzMmwALA2",
				wrapper: "_32Xa3voy05uAFz3ZnopP_S",
				wrapperExp: "_1C67uwkUf95iJOZ63vDJOZ"
			}
		},
		"./src/reddit/components/JumpToContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return b
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return g
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/componentSizes.ts"),
				c = n("./src/reddit/contexts/NavbarExp.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/components/JumpToContent/index.m.less"),
				u = n.n(l);
			const m = Object(r.createContext)(null),
				p = Object(r.createContext)(null);
			class b extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						handleRef: null
					}, this.setHandleRef = e => {
						this.state.handleRef !== e && this.setState({
							handleRef: e
						})
					}
				}
				render() {
					return o.a.createElement(m.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, o.a.createElement(p.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const h = i.f + 10,
				f = o.a.memo(() => {
					const [e, t] = Object(r.useState)("-500px"), n = Object(r.useContext)(c.a);
					return o.a.createElement(m.Consumer, null, r => r && o.a.createElement("div", {
						className: Object(a.a)(u.a.wrapper, {
							[u.a.wrapperExp]: n
						}),
						"data-testid": "jump-to-content"
					}, o.a.createElement(d.t, {
						kind: d.b.Button,
						priority: d.c.Plain,
						className: u.a.button,
						style: {
							marginLeft: e
						},
						onBlur: e => {
							const n = e.currentTarget.clientWidth + 55;
							t(`-${n}px`)
						},
						onFocus: () => {
							t("0")
						},
						onClick: () => {
							r.focus(), r.scrollIntoView(), window.scrollBy(0, -h)
						}
					}, s.fbt._("Jump to content", null, {
						hk: "2zWOmQ"
					})), o.a.createElement("div", {
						className: Object(a.a)(u.a.rightBorder, {
							[u.a.rightBorderExp]: n
						})
					})))
				}),
				g = o.a.memo(() => o.a.createElement(p.Consumer, null, e => o.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/LightboxHeader/index.m.less": function(e, t, n) {
			e.exports = {
				container: "K4Eem3pMbRbAYioOfqN5E",
				isCollection: "_1_ihtgX_FgdbtB-rbz84r6",
				postDetails: "-DOLBAFWXMQX1Q3ErGO8I",
				mediaIcon: "_33YMDoIltkTaZemWTS7Yki",
				postTitle: "P9Qd6oTCWgLr3ackKg0I5",
				postTitleLink: "_1iZHnGYX-Wc90AM6BQQemg",
				membershipPaywallTitle: "SHwEfOV-Wq0AnI-uha8Ci",
				horizontalVotes: "_15Igkrvvp7jIfVHt0eKzFd",
				actions: "_25ONQRwoX20oeRXFl_FZXt",
				SubscribeButton: "_2W8hDtix416kR_AGDshJ1q",
				subscribeButton: "_2W8hDtix416kR_AGDshJ1q",
				visible: "_3hDL4MmXN5ibsBRoePashZ",
				CloseButton: "_2Mq93X6GCESH9CsQ6XVqOS",
				closeButton: "_2Mq93X6GCESH9CsQ6XVqOS",
				subredditName: "xP-T4vxk4aKEQTlxxGner",
				adaptive: "_34HwaRmVoDiPrSaCPUqpjx",
				srIcon: "_3LZZ1LMv49fbgZrji_1D8u"
			}
		},
		"./src/reddit/components/LightboxHeader/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/constants/icons.ts"),
				u = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/shortcuts/close.ts"),
				p = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				b = n("./src/reddit/components/FlairWrapper/index.tsx"),
				h = n("./src/reddit/components/IdCard/helpers.ts"),
				f = n("./src/reddit/components/PostTitle/index.tsx"),
				g = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				C = n("./src/reddit/components/SubscribeButton/index.tsx"),
				O = n("./src/reddit/components/TrackingHelper/index.tsx"),
				v = n("./src/reddit/constants/colors.ts"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				y = n("./src/reddit/helpers/postCollection.ts"),
				E = n("./src/reddit/icons/fonts/index.tsx"),
				j = n("./src/reddit/icons/svgs/Subreddit/index.tsx"),
				_ = n("./src/reddit/models/Media/index.ts"),
				S = n("./src/reddit/models/Vote/index.ts"),
				k = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				P = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				w = n("./src/reddit/selectors/platform.ts"),
				N = n("./src/reddit/selectors/subreddit.ts"),
				I = n("./src/reddit/selectors/telemetry.ts"),
				M = n("./src/reddit/contexts/Post/index.tsx"),
				T = n("./src/reddit/components/LightboxHeader/index.m.less"),
				R = n.n(T);
			const L = Object(i.c)({
					subreddit: (e, {
						page: t,
						post: n
					}) => {
						if (!t && !n) return null;
						const s = n || Object(w.n)(e, {
							page: t
						});
						return (null == s ? void 0 : s.belongsTo) ? Object(N.J)(e, {
							identifier: s.belongsTo
						}) : null
					},
					post: w.n,
					joinOptimizationsLightboxHeaderEnabled: e => Object(k.a)(e) || Object(k.d)(e) || Object(k.c)(e),
					isVoteCountAnimation: (e, {
						page: t,
						post: n
					}) => {
						if (!t && !n) return !1;
						const s = t && Object(w.n)(e, {
							page: t
						}) || n;
						return !!s && Object(P.g)(e, {
							post: s
						})
					}
				}),
				A = Object(a.b)(L, (e, {
					sendEvent: t
				}) => ({
					close: () => {
						e(Object(m.a)(t, !0))
					},
					toggleVote: (t, n) => e(n === S.a.upvoted ? Object(u.jb)(t) : Object(u.w)(t))
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onVoteClick: s => {
						const r = e.post || n.post;
						r && t.toggleVote(r.id, s)
					}
				}));
			class F extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showSubscribeButton: !1
					}, this.closeLightbox = e => {
						e.preventDefault(), e.stopPropagation(), this.props.close()
					}, this.handleSubscribeButtonVisible = () => {
						this.setState({
							showSubscribeButton: !1
						})
					}, this.handleSubscribeButtonNotVisible = () => {
						this.setState({
							showSubscribeButton: !0
						})
					}, this.handleSubscribeButtonClick = e => {
						e.stopPropagation(), this.props.subreddit && this.props.sendEvent(e => {
							const {
								subreddit: t,
								post: n
							} = this.props;
							return {
								source: "sticky_banner",
								action: "click",
								noun: (null == t ? void 0 : t.name) && Object(N.db)(e, {
									identifier: {
										name: t.name,
										type: "subreddit"
									}
								}) ? "subscribe" : "unsubscribe",
								post: n ? I.I(e, n.id) : void 0,
								subreddit: t
							}
						})
					}
				}
				componentDidMount() {
					this.props.joinOptimizationsLightboxHeaderEnabled && (h.h.addListeners(h.b, this.handleSubscribeButtonVisible), h.h.addListeners(h.a, this.handleSubscribeButtonNotVisible))
				}
				componentWillUnmount() {
					this.props.joinOptimizationsLightboxHeaderEnabled && (h.h.removeListeners(h.b, this.handleSubscribeButtonVisible), h.h.removeListeners(h.a, this.handleSubscribeButtonNotVisible))
				}
				render() {
					var e;
					const {
						className: t,
						onCloseClick: n,
						onVoteClick: a,
						page: i,
						post: l,
						useAdaptiveStyles: u,
						isVoteCountAnimation: m
					} = this.props, h = B[l && l.media ? l.media.type : _.o.EMBED], O = !l && (null === (e = null == i ? void 0 : i.meta) || void 0 === e ? void 0 : e.name) === d.Mb.META_MEMBERSHIP_PAYWALL_PAGE, x = l ? M.a : function({
						children: e,
						postId: t
					}) {
						return e
					};
					return o.a.createElement("div", {
						className: Object(c.a)(R.a.container, t, {
							[R.a.isCollection]: l && Object(y.a)(l),
							[R.a.adaptive]: u
						})
					}, o.a.createElement(x, {
						postId: null == l ? void 0 : l.id
					}, o.a.createElement("div", {
						className: R.a.postDetails
					}, l && o.a.createElement(r.Fragment, null, m && !u ? void 0 : o.a.createElement(p.a, {
						className: R.a.horizontalVotes,
						compact: !1,
						light: !u,
						model: l,
						onVoteClick: a,
						redditStyle: !0
					}), o.a.createElement(E.a, {
						name: h,
						className: R.a.mediaIcon
					}), o.a.createElement(f.c, {
						className: R.a.postTitle,
						post: l,
						size: u ? f.b.Medium : f.b.Small,
						hideSourceLink: !0,
						isCommentsPage: !0,
						isOverlay: !0,
						nowrap: !0,
						titleColor: u ? void 0 : v.a.lightboxHeaderText,
						titleLinkClassName: R.a.postTitleLink
					}), o.a.createElement(b.a, {
						post: l,
						nowrap: !0,
						sendEvent: this.props.sendEvent
					}), this.props.showSubreddit && this.props.subreddit && o.a.createElement(o.a.Fragment, null, o.a.createElement(j.a, {
						className: R.a.srIcon
					}), o.a.createElement(g.a, {
						to: this.props.subreddit.url,
						className: R.a.subredditName
					}, this.props.subreddit.name))), O && i && i.urlParams.subredditName && o.a.createElement("div", {
						className: R.a.membershipPaywallTitle
					}, s.fbt._("{communityName} Special Membership", [s.fbt._param("communityName", `r/${i.urlParams.subredditName}`)], {
						hk: "4vP4VY"
					}))), o.a.createElement("div", {
						className: R.a.actions
					}, this.props.joinOptimizationsLightboxHeaderEnabled && this.props.subreddit && o.a.createElement(C.a, {
						className: Object(c.a)(R.a.SubscribeButton, {
							[R.a.visible]: this.state.showSubscribeButton
						}),
						identifier: {
							name: this.props.subreddit.name,
							type: "subreddit"
						},
						onClick: this.handleSubscribeButtonClick,
						small: !0
					}), !this.props.hideCloseButton && o.a.createElement(D, {
						onClick: n || this.closeLightbox
					}))))
				}
			}
			const D = o.a.memo(e => o.a.createElement(x.t, {
					className: R.a.CloseButton,
					size: x.d.XS,
					onClick: e.onClick,
					priority: x.c.Plain,
					Icon: Object(E.b)("close"),
					text: s.fbt._("Close", null, {
						hk: "4gbyAA"
					}),
					title: s.fbt._("Close", null, {
						hk: "4gbyAA"
					}),
					"aria-label": s.fbt._("Close", null, {
						hk: "4gbyAA"
					})
				})),
				B = {
					[_.o.GIFVIDEO]: l.a.gif_post,
					[_.o.IMAGE]: l.a.image_post,
					[_.o.TEXT]: l.a.text_post,
					[_.o.RTJSON]: l.a.text_post,
					[_.o.VIDEO]: l.a.video_post,
					[_.o.EMBED]: l.a.embed,
					[_.o.LIVEVIDEO]: l.a.video_live,
					[_.o.GALLERY]: l.a.media_gallery,
					[_.o.LIVEAUDIO]: l.a.audio
				};
			t.a = Object(O.c)(A(F))
		},
		"./src/reddit/components/ModerationDropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts");
			const o = "Header--Moderation",
				a = () => null;
			t.b = Object(s.a)({
				ErrorComponent: a,
				getComponent: () => Object(r.a)(() => n.e("ModerationDropdowns").then(n.bind(null, "./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx"))).then(e => e.default),
				LoadingComponent: a
			})
		},
		"./src/reddit/components/MutedUserList/MuteUserModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts");
			const o = () => null;
			t.a = Object(s.a)({
				ErrorComponent: o,
				getComponent: () => Object(r.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("ModQueue~ModQueuePages~ModerationPages"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/NotificationUnit/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "NotificationUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("NotificationUnit").then(n.bind(null, "./src/reddit/components/NotificationUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/NotificationUnit/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/components/NotificationUnit/Placeholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/components/NotificationUnit/index.m.less"),
				a = n.n(o);
			const i = () => r.a.createElement("li", {
					className: a.a.placeholderWrapper
				}, r.a.createElement("span", {
					className: a.a.placeholderAvatar
				}), r.a.createElement("span", {
					className: a.a.placeholderContent
				})),
				c = () => r.a.createElement("ol", null, r.a.createElement(i, null), r.a.createElement(i, null), r.a.createElement(i, null))
		},
		"./src/reddit/components/NotificationUnit/index.m.less": function(e, t, n) {
			e.exports = {
				notificationItem: "_3mUSJN4kdLCGjq-K-JLJw",
				unread: "_2n4UrzwZ3VBdRmFUYAHF_9",
				isNightMode: "_3ds5pVvIyBrh1GgQ2O7AFd",
				contextContainer: "_3T3J7R8JnlSfiFdB5bxe5h",
				link: "_1tpiOc0IxpDU113wUs4zi1",
				avatarContainer: "_2WN4-UdVoyjpLQ8mpNTQA",
				avatar: "_12V0IULSx8mSJHxdpHwOGE",
				nsfwAvatar: "_1Bzw8F6BC4Vk8OzAgnU0z3",
				notificationIconContainer: "_3smo-GSstogGTGh6ArpwI0",
				NotifIcon: "OzS9DxR-g3V71ZAeo2lbH",
				notifIcon: "OzS9DxR-g3V71ZAeo2lbH",
				RedditorIcon: "_23rEnykeBXjpsB9b72y8_1",
				redditorIcon: "_23rEnykeBXjpsB9b72y8_1",
				Separator: "_1caKsZ5CCRPSfIgoh608Ej",
				separator: "_1caKsZ5CCRPSfIgoh608Ej",
				topBar: "_3mGSd8RyCZhF_eqyrV_Bvk",
				title: "_180jOSBDwwE60X5UR8zt3-",
				timeAgo: "_2fQXbzOYQuzqlwMzxgtBKH",
				"m-tooltip": "_2a8MIP8QlMF7KPqTup62Vt",
				mTooltip: "_2a8MIP8QlMF7KPqTup62Vt",
				menuButton: "_8Q653FSGz7lD9Ux0AQsXY",
				isOpen: "WHFiF_asC8mzlevTdJv26",
				MenuIcon: "_2oVe02cXZA6mJa7WXHJFi5",
				menuIcon: "_2oVe02cXZA6mJa7WXHJFi5",
				contentContainer: "_3Q_e75oXJ8meqWwAQS36l2",
				body: "_2VDnxV3G5ZvEDq10Z-_fM9",
				ButtonIcon: "_25ecrisK-bGTesa4kIqyHR",
				buttonIcon: "_25ecrisK-bGTesa4kIqyHR",
				ReplyButtonIcon: "_1wAIwQaxmGHWzaHv-8jex_",
				replyButtonIcon: "_1wAIwQaxmGHWzaHv-8jex_",
				notificationButton: "_3doOacPPJ-LU-aBSoLl9TV",
				isUnread: "_2svu3lh5YfWQmYfACdB2J5",
				replyIcon: "_3LbCSOW9yuZK_CHzTuR9M5",
				postIcon: "_102yZEdZMcXLlu2Ri0KD9O",
				postEmbedContainer: "_1cndvAxAFPMUr8IaWuw_we",
				postEmbedContent: "_2fsQOzhZpW9XNu1RXtgzqW",
				deleted: "LypGzp3NJwjpkpsRn9Ocn",
				postEmbedTitleContainer: "_2XT3C7unUlQXgaiyeYfIYv",
				postEmbedTitle: "_1SZwyv3jy4dBipT0yC1CcI",
				postEmbedMeta: "_1LcCO3y9JhylZFlKsgvzHs",
				postEmbedBlurredThumbnailContainer: "_2EmrjrpYxkgB5_ljritGbO",
				postEmbedBlurredThumbnail: "_2a0rc3KL05PEnGmVWcQI8W",
				postEmbedThumbnail: "msJLWFmahK0W8JhaqYny9",
				postEmbedThumbnailBase: "_3CGVcVQDu97m9Oj_xs0n01",
				postEmbedNSFWThumbnailIndicator: "_2q-yvZHWG3Xp2YECYCI09S",
				postEmbedNsfwThumbnailIndicator: "_2q-yvZHWG3Xp2YECYCI09S",
				WarningIcon: "_2PzKGDccrg-BWzhhzJaJTs",
				warningIcon: "_2PzKGDccrg-BWzhhzJaJTs",
				StyledDropdown: "_1i_9WvxHOe7AlJZQ6w_-X9",
				styledDropdown: "_1i_9WvxHOe7AlJZQ6w_-X9",
				overflowMenuContainer: "_2UKt6pQu-os9uxZnfhPydP",
				overflowMenuOption: "_1g8x_Z2KsTf65RBk7dRBZm",
				placeholderWrapper: "_2iacm7sPgvO9z8gO1W7FoY",
				placeholderAvatar: "_2_cDiTNVpitX7CtTmIambB",
				placeholderContent: "_2KpinIkIJ7VxNGQgUgzJCA",
				glimmer: "_27pfB7o_o_4F4TdujFhrNO",
				PostUnavailableInfo: "_2lh6HxiG9gd6MKnaAag9Cu",
				postUnavailableInfo: "_2lh6HxiG9gd6MKnaAag9Cu",
				StateIcon: "_2RPeGp2zLx2hBQTZWSUTQK",
				stateIcon: "_2RPeGp2zLx2hBQTZWSUTQK",
				Text: "_2bba9zuFqUwxMhGdswkU86",
				text: "_2bba9zuFqUwxMhGdswkU86"
			}
		},
		"./src/reddit/components/OfflineBanner/index.m.less": function(e, t, n) {
			e.exports = {
				banner: "OEQgz7Lkj--3zFaLL7BUF",
				online: "_1HWVXJoazfrENIGlRprCVp",
				snoomoji: "_3BcAFuYpz37S0WFvgyWCUN",
				title: "_2hQKVL2Pm4yfkiqifapnBp",
				refresh: "_1E59q-NCGBwN0Aq_bPsPKb",
				hidden: "_2elztvdigLcbcRyu_4wcFW"
			}
		},
		"./src/reddit/components/Pill/PillButton/index.m.less": function(e, t, n) {
			e.exports = {
				primaryButton: "cmR5BF4NpBUm3DBMZCmJS",
				active: "_2dj14FxV-bfkwopj1jV_fF",
				redditStyle: "C64b9palJF2n26mG_1q3D",
				DangerButtonColors: "_1aqI4zAQaNw-k6Jp5j3WJz",
				dangerButtonColors: "_1aqI4zAQaNw-k6Jp5j3WJz",
				GoldButtonColors: "Vi9jnbb9vJd6ugulSJIAD",
				goldButtonColors: "Vi9jnbb9vJd6ugulSJIAD",
				PremiumButtonColors: "ntawTzO-ZquMyaWgqE0je",
				premiumButtonColors: "ntawTzO-ZquMyaWgqE0je",
				Icon: "_1V9TNuAloX-Z3moRIXc8tO",
				icon: "_1V9TNuAloX-Z3moRIXc8tO",
				isLeft: "HjpiNF5rj_I6fiMfmW-X7",
				isRight: "_1A_npZJAxjfyiijZ14jtzh",
				tabGroup: "_2jNQT-6WbFOjX2hdDWV56w",
				inactive: "_1g3g98ViMb36cM-peU17Jk"
			}
		},
		"./src/reddit/components/Pill/PillButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return m
			}));
			var s, r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Pill/PillButton/index.m.less"),
				c = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.BUTTON = "BUTTON", e.TAB_GROUP = "TAB_GROUP"
			}(s || (s = {}));
			const l = {
					[s.BUTTON]: void 0,
					[s.TAB_GROUP]: c.a.tabGroup
				},
				u = (e, t) => {
					if (t !== s.BUTTON) return e ? c.a.active : c.a.inactive
				},
				m = ({
					active: e = !0,
					children: t,
					className: n,
					disabled: s = !1,
					onClick: r,
					variant: i,
					...m
				}) => o.a.createElement("button", d({}, m, {
					className: Object(a.a)(c.a.primaryButton, l[i], u(e, i), n),
					disabled: s,
					onClick: r
				}), t)
		},
		"./src/reddit/components/Pill/PillText/index.m.less": function(e, t, n) {
			e.exports = {
				pillText: "_3CUdiRoAXQxoYJ-UeFCjPS",
				pillTextVariantDay: "_2SVIoeexI3lRGCH0NAYAMx",
				pillTextVariantNight: "QRGfIrC3QhcjQPpbXOPJy"
			}
		},
		"./src/reddit/components/Pill/index.m.less": function(e, t, n) {
			e.exports = {
				pillContainer: "_3LO_LEpMLN8-uaedpg6nl4"
			}
		},
		"./src/reddit/components/Pill/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/Pill/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = ({
				children: e,
				className: t,
				...n
			}) => r.a.createElement("div", c({
				className: Object(o.a)(i.a.pillContainer, t)
			}, n), e)
		},
		"./src/reddit/components/PinnedSubscriptions/index.m.less": function(e, t, n) {
			e.exports = {
				title: "FRrbwuHy8Zmlubp3nowLZ",
				listHeader: "_3hELZctjzdizaWjW1al9DZ",
				unpin: "_2oY_N7NWiAv9m_mFIRdwVX",
				icon: "_3B-ny-D97ZKwdUyXAaWF19",
				Component: "_20fGT0XJD3MvX9yBsVeKMn",
				component: "_20fGT0XJD3MvX9yBsVeKMn"
			}
		},
		"./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-PostCreationForm-PredictionEditor-InactivityModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-PostCreationForm-PredictionEditor-InactivityModal").then(n.bind(null, "./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_PREDICTIONS_INACTIVITY_MODAL, () => o.a.createElement(c, null))
		},
		"./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-PostCreationForm-PredictionEditor-StartTournamentLimitationModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-PostCreationForm-PredictionEditor-StartTournamentLimitationModal").then(n.bind(null, "./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_PREDICTIONS_START_TOURNAMENT_LIMIT, () => o.a.createElement(c, null))
		},
		"./src/reddit/components/PostFlowUpsellModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "PostFlowUpsellModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("PostFlowUpsellModal").then(n.bind(null, "./src/reddit/components/PostFlowUpsellModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/PostFlowUpsellModal/index.tsx"
				}
			});
			Object(a.b)(i.a.POST_FLOW_UPSELL_MODAL_ID, e => o.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			var d = c
		},
		"./src/reddit/components/PowerupsSidebar/SupportersListModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/components/PowerupsSidebar/SupportersListModal/modal.m.less"),
				d = n.n(c);
			const l = Object(s.a)({
				resolved: {},
				chunkName: () => "SupportersListModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("SupportersListModal").then(n.bind(null, "./src/reddit/components/PowerupsSidebar/SupportersListModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/PowerupsSidebar/SupportersListModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_SUPPORTERS_LIST, e => o.a.createElement(l, {
				onOverlayClick: e,
				withOverlay: !0,
				className: d.a.modalBody
			}))
		},
		"./src/reddit/components/PowerupsSidebar/SupportersListModal/modal.m.less": function(e, t, n) {
			e.exports = {
				modalBody: "_2iaVQV4QQm863obinS6v2-"
			}
		},
		"./src/reddit/components/PremiumPurchaseModal/Loader.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				c = n("./src/reddit/constants/modals.ts"),
				d = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			const l = () => Object(a.a)(() => Promise.all([n.e("PremiumPurchaseModal").then(n.bind(null, "./src/reddit/components/PremiumPurchaseModal/index.tsx")), Object(d.d)().catch(() => {})])).then(e => e[0].default),
				u = Object(o.a)({
					getComponent: l,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				});
			Object(i.b)(c.a.ECON_PREMIUM_PURCHASE, () => r.a.createElement(u, null))
		},
		"./src/reddit/components/PromptTooltip/TooltipHooked.m.less": function(e, t, n) {
			e.exports = {
				arrow: "_2ukk2zBUtkijjIv8uGpGK",
				tooltip: "_21mjMOHMLOJXm_uLG6jmFe",
				visible: "bxlw8_5wUYitxHKlcuDhP"
			}
		},
		"./src/reddit/components/Root/AdminPanelLoader.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/runTimeEnvVars.ts"),
				c = n("./src/reddit/selectors/user.ts");
			const d = Object(s.a)({
				resolved: {},
				chunkName: () => "AdminPanel",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~AdminPanel"), n.e("AdminPanel")]).then(n.bind(null, "./src/reddit/components/AdminPanel/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/AdminPanel/index.tsx"
				}
			});

			function l() {
				return Object(a.e)(e => Object(i.b)(e) || Object(c.G)(e)) ? o.a.createElement(d, null) : null
			}
		},
		"./src/reddit/components/Root/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1VP69d9lk-Wk9zokOaylL",
				containerExp: "KDkLHOpoLUZvoYQUBe9nF"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/HeroUnit/index.m.less": function(e, t, n) {
			e.exports = {
				postContainer: "_3W4fKI_ey_jDfiIO7ElMuP",
				eventMeta: "_2IeaiLn4GyfAXKD1TLrIS1",
				postContent: "_3zoWB97jg8GAUJCl4XA57a",
				postItemMetaContainer: "_3xctgCPJ_3knmtE3O9TQzE",
				postItemTitleContainer: "_3CAq9fn45Es59QdDzgtbhZ",
				postItemFlatlistContainer: "oNxebZMPvUlTJIOtprxhP",
				mediaWrapper: "_1eIKxpeFNBTQ699qAcQRbd",
				marginCancel: "_3IElQYxAJq_0qRyeyMDc_K",
				twitterEmbed: "Tzfi4PWE-V9cQ78MJ3GkX",
				promotedTrend: "_1yoxdnJLJUmMiTSTn_QkNJ",
				mediaContent: "_1zcwL6v8t8G0OHvf5D4WW-",
				textMediaWrapper: "_2ZlSdmjvWREfUPvdtzIAN_",
				textMedia: "_2dnz6aKPWeFF1opQ_XsTYW",
				seeMore: "_2oliTAoFFxS1mse-sOZinV",
				adLinkWrapper: "p35vRG-PK5zfK-G5gjGAr",
				outboundLink: "_16eWoJfxv365opQYh3dOAJ",
				adCallToAction: "BMx4T197BjzZgmRjegR7y",
				active: "_28VWbryTIGJPb62Ey50lm8",
				redditStyle: "n1f3mSINfKiMWmz1fdi1o"
			}
		},
		"./src/reddit/components/SearchNSFWToggle/SearchNSFWToggle.m.less": function(e, t, n) {
			e.exports = {
				searchNSFWToggle: "S53DUJItOf0GhJnniZ_fP",
				searchNsfwToggle: "S53DUJItOf0GhJnniZ_fP",
				searchNSFWToggleLabel: "_21fWc_5nZQR--Hc7UhjtY9",
				searchNsfwToggleLabel: "_21fWc_5nZQR--Hc7UhjtY9"
			}
		},
		"./src/reddit/components/SearchPost/index.m.less": function(e, t, n) {
			e.exports = {
				postContainer: "_2dkUkgRYbhbpU_2O2Wc5am",
				mFirst: "_28efb5XEIggTEMzT5v9i61",
				eventMeta: "_1rd6n9Xvtg4-5Vw7E3NhEh",
				postContent: "_2i5O0KNpb9tDq0bsNOZB_Q",
				postItemMetaContainer: "_37TF67KpZQl9SHbiAhz3mf",
				postItemTitleContainer: "_19FzInkloQSdrf0rh3Omen",
				postItemFlatlistContainer: "HNL__wz5plDpzJe5Lnn",
				outboundLink: "a6Bzb7gqvN3mqBOAEyFIv",
				thumbnail: "_2r9BZFotuBbLYnijAaskeZ",
				thumbnailContainer: "Gk-MlLujgqsaX1n-sGa_O",
				syntaxHighlight: "_1Nh8xLEUG3orjY1k1aijj"
			}
		},
		"./src/reddit/components/SearchPostFlatlist/index.m.less": function(e, t, n) {
			e.exports = {
				flatlistContainer: "_2IpBiHtzKzIxk2fKI4UOv1",
				flatlistItem: "_vaFo96phV6L5Hltvwcox"
			}
		},
		"./src/reddit/components/SearchPostMeta/index.m.less": function(e, t, n) {
			e.exports = {
				hovercardContainer: "_3Wz607wX-KXslTUjYvTZWi",
				metaContainer: "_3xeOZ4NlqvpwzbB5E8QC6r",
				postTopMeta: "_1wxi9M8fCejzbsH0YGSer2",
				subredditName: "_305seOZmrgus3clHOXCmfs",
				subredditIcon: "id5ExZR7GqiUypGICnSYs",
				SubscribeButton: "_2vYQV4h1KDa5M62EoOG3t-",
				subscribeButton: "_2vYQV4h1KDa5M62EoOG3t-"
			}
		},
		"./src/reddit/components/SearchResultsContent/AuthorsList/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return w
			}));
			var s = n("./node_modules/lodash/times.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/hooks/usePrevious.ts"),
				u = n("./src/lib/LRUCache/index.ts"),
				m = n("./src/reddit/actions/search.ts"),
				p = n("./src/reddit/components/Scroller/Simple.tsx"),
				b = n("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				h = n("./src/reddit/components/SearchResultsContent/helpers/viewCommunityTracker.ts"),
				f = n("./src/reddit/components/TrackingHelper/index.tsx"),
				g = n("./src/reddit/contexts/PageLayer/index.tsx"),
				C = n("./src/reddit/helpers/trackers/screenview.ts"),
				O = n("./src/reddit/selectors/searchResults.ts"),
				v = n("./src/reddit/selectors/tracking.ts"),
				x = n("./src/telemetry/index.ts"),
				y = n("./src/telemetry/models/Timer.ts"),
				E = n("./src/reddit/components/SearchResultsContent/CommunitiesList/index.tsx"),
				j = n("./src/reddit/components/SearchResultsContent/CommunitiesList/index.m.less"),
				_ = n.n(j),
				S = n("./src/reddit/components/SearchResultsContent/Community/index.tsx"),
				k = n("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx");
			const P = Object(c.c)({
					apiError: O.b,
					apiPending: O.c,
					loadMore: O.n,
					viewportDataLoaded: v.a
				}),
				w = e => {
					const t = Object(o.useRef)(!1);
					let n = !1,
						s = !1;
					const c = new u.a(E.d),
						O = Object(o.useRef)(),
						v = Object(o.useRef)(null),
						j = [d.ac.Users],
						{
							nsfwSessionSetting: w
						} = Object(b.c)(),
						N = Object(g.fb)(),
						I = Object(f.b)(),
						M = Object(i.d)(),
						{
							identifiers: T,
							listingKey: R,
							searchOptions: L,
							sidebar: A
						} = e,
						{
							apiError: F,
							apiPending: D,
							loadMore: B,
							viewportDataLoaded: U
						} = Object(i.e)(t => P(t, e)),
						G = A ? E.e : T.length,
						H = A ? E.e : E.c,
						W = () => {
							if (!Q()) return;
							const e = x.c.end(R);
							I(Object(C.v)(R, L, y.TimerType.InApp, e, N, w))
						},
						q = () => {
							const e = O.current && Array.from(O.current.children),
								t = e && e.pop();
							return t && t.getBoundingClientRect().bottom > window.innerHeight
						};
					Object(o.useEffect)(() => {
						W(), v.current && Object(x.b)(d.n.Redesign, {
							type: "mount",
							component: "authorSearchResults",
							duration: x.c.end(v.current)
						})
					}, []), Object(o.useEffect)(() => {
						if (W(), v.current && x.c.has(v.current)) {
							const e = x.c.end(v.current);
							if (e < 10) return;
							Object(x.b)(d.n.Redesign, {
								duration: e,
								type: "mount",
								component: "authorSearchResults"
							})
						}
					});
					const V = Object(l.a)(R),
						K = Object(l.a)(T.length);
					Object(o.useEffect)(() => {
						v.current && x.c.cancel(v.current), T.length && (v.current = x.c.start()), (R !== V || !q() && T.length !== K) && (t.current = !1)
					}, [v, R, T.length, V, K, t]), Object(o.useEffect)(() => () => {
						v.current && x.c.cancel(v.current), O.current = void 0, t.current = !1
					});
					const z = () => {
							t.current = !0, W()
						},
						Q = () => {
							const e = q();
							return x.c.has(R) && (F || !s && (n || t && (e || U)))
						},
						J = e => {
							O.current = e instanceof Element ? e : void 0
						},
						Z = () => {
							const e = T.slice(0, G).map((e, t) => ((e, t) => {
								const n = {
										...L,
										id: e.id,
										eventType: e.type
									},
									s = `author-search-${t}-${R}`,
									r = Object(h.b)(e, R, I, n);
								let o;
								if (void 0 === (o = c.get(s))) {
									const n = `author-search-item-[id:${e.id}]`,
										s = () => a.a.createElement(S.a, {
											className: _.a.separatedCommunity,
											first: 0 === t,
											identifier: e,
											key: n,
											listingKey: R,
											searchOptions: L,
											sidebar: A
										});
									o = {
										estHeight: E.b,
										trackOnEnteredViewport: r,
										id: e.id,
										render: s
									}
								}
								return c.set(s, o), o
							})(e, t));
							return a.a.createElement(p.b, {
								key: R,
								innerRef: J,
								loadMoreToken: B && B.token ? B.token : void 0,
								onLastVisibleChildRendered: z,
								onLoadMore: () => {
									A || M(Object(m.n)(j))
								}
							}, e)
						};
					return (() => T.length > 0)() ? (n = !1, s = !1, Z()) : (() => Boolean(F) || !1 === D)() ? (n = !0, s = !1, Z()) : (n = !1, s = !0, (() => {
						const e = !F;
						return a.a.createElement("div", {
							"data-testid": "authors-list-placeholder"
						}, r()(H, t => a.a.createElement(k.a, {
							className: _.a.communityPlaceholder,
							key: t,
							isLoading: e,
							sidebar: A
						})))
					})())
				}
		},
		"./src/reddit/components/SearchResultsContent/Communities/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2mO8vClBdPxiJ30y_C6od2",
				title: "_1hYBlRBooHG-eY5iAHen-R",
				separator: "_1LvQXvsxpSVi-JRudk3e4e",
				previewCommunityStyles: "_3MfNPE_vLKliHPkiYMAtZm",
				loadMoreItem: "_1mLDB-TFHMY0SRGTRD-ipK",
				viewMore: "DMHO9Pay4I5LSwZTtE4TY"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommunitiesList/index.m.less": function(e, t, n) {
			e.exports = {
				separatedCommunity: "_12I4LEbhoIMSoIIXC_OHwT"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommunitiesList/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return k
			})), n.d(t, "d", (function() {
				return P
			})), n.d(t, "c", (function() {
				return w
			})), n.d(t, "e", (function() {
				return N
			})), n.d(t, "a", (function() {
				return M
			}));
			var s = n("./node_modules/lodash/times.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/LRUCache/index.ts"),
				u = n("./src/lib/hooks/usePrevious.ts"),
				m = n("./src/reddit/actions/search.ts"),
				p = n("./src/reddit/components/Scroller/Simple.tsx"),
				b = n("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				h = n("./src/reddit/components/SearchResultsContent/helpers/viewCommunityTracker.ts"),
				f = n("./src/reddit/components/TrackingHelper/index.tsx"),
				g = n("./src/reddit/contexts/PageLayer/index.tsx"),
				C = n("./src/reddit/helpers/trackers/screenview.ts"),
				O = n("./src/reddit/selectors/searchResults.ts"),
				v = n("./src/reddit/selectors/tracking.ts"),
				x = n("./src/telemetry/index.ts"),
				y = n("./src/telemetry/models/Timer.ts"),
				E = n("./src/reddit/components/SearchResultsContent/Community/index.tsx"),
				j = n("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx"),
				_ = n("./src/reddit/components/SearchResultsContent/CommunitiesList/index.m.less"),
				S = n.n(_);
			const k = 32,
				P = 250,
				w = 10,
				N = 5,
				I = Object(c.c)({
					apiError: (e, {
						listingKey: t
					}) => Object(O.e)(e, {
						listingKey: t
					}),
					apiPending: (e, {
						listingKey: t
					}) => Object(O.f)(e, {
						listingKey: t
					}),
					loadMore: (e, {
						listingKey: t
					}) => Object(O.o)(e, {
						listingKey: t
					}),
					viewportDataLoaded: v.a
				}),
				M = e => {
					const t = Object(o.useRef)(!1);
					let n = !1,
						s = !1;
					const c = new l.a(P),
						O = Object(o.useRef)(),
						v = Object(o.useRef)(null),
						{
							nsfwSessionSetting: _
						} = Object(b.c)(),
						M = Object(g.fb)(),
						T = Object(f.b)(),
						R = Object(i.d)(),
						{
							identifiers: L,
							listingKey: A,
							searchOptions: F,
							sidebar: D
						} = e,
						{
							apiError: B,
							apiPending: U,
							loadMore: G,
							viewportDataLoaded: H
						} = Object(i.e)(t => I(t, e)),
						W = {
							identifierCount: D ? N : L.length,
							placeholderCount: D ? N : w,
							moreResultsTypes: [d.ac.Subreddits]
						},
						q = () => {
							if (!J()) return;
							const e = x.c.end(A);
							T(Object(C.v)(A, F, y.TimerType.InApp, e, M, _))
						},
						V = () => {
							const e = O.current && Array.from(O.current.children),
								t = e && e.pop();
							return t && t.getBoundingClientRect().bottom > window.innerHeight
						};
					Object(o.useEffect)(() => {
						q(), v.current && Object(x.b)(d.n.Redesign, {
							type: "mount",
							component: "communitySearchResults",
							duration: x.c.end(v.current)
						})
					}, []), Object(o.useEffect)(() => {
						if (q(), v.current && x.c.has(v.current)) {
							const e = x.c.end(v.current);
							if (e < 10) return;
							Object(x.b)(d.n.Redesign, {
								duration: e,
								type: "mount",
								component: "communitySearchResults"
							})
						}
					});
					const K = Object(u.a)(A),
						z = Object(u.a)(L.length);
					Object(o.useEffect)(() => {
						v.current && x.c.cancel(v.current), L.length && (v.current = x.c.start()), (A !== K || !V() && L.length !== z) && (t.current = !1)
					}, [v, A, L.length, K, z, t]), Object(o.useEffect)(() => () => {
						v.current && x.c.cancel(v.current), O.current = void 0, t.current = !1
					});
					const Q = () => {
							t.current = !0, q()
						},
						J = () => {
							const e = V();
							return x.c.has(A) && (B || !s && (n || t && (e || H)))
						},
						Z = e => {
							O.current = e instanceof Element ? e : void 0
						},
						Y = () => {
							const e = L.slice(0, W.identifierCount).map((e, t) => ((e, t) => {
								const n = {
										...F,
										id: e.id,
										eventType: e.type
									},
									s = `community-search-${t}-${A}`,
									r = Object(h.b)(e, A, T, n);
								let o;
								if (void 0 === (o = c.get(s))) {
									const n = `community-search-item-[id:${e.id}]`,
										s = () => a.a.createElement(E.a, {
											className: S.a.separatedCommunity,
											first: 0 === t,
											identifier: e,
											key: n,
											listingKey: A,
											searchOptions: F,
											sidebar: D
										});
									o = {
										estHeight: k,
										trackOnEnteredViewport: r,
										id: e.id,
										render: s
									}
								}
								return c.set(s, o), o
							})(e, t));
							return a.a.createElement(p.b, {
								key: A,
								innerRef: Z,
								loadMoreToken: G && G.token ? G.token : void 0,
								onLastVisibleChildRendered: Q,
								onLoadMore: () => {
									D || R(Object(m.n)(W.moreResultsTypes))
								}
							}, e)
						};
					return (() => L.length > 0)() ? (n = !1, s = !1, Y()) : (() => Boolean(B) || !1 === U)() ? (n = !0, s = !1, Y()) : (n = !1, s = !0, (() => {
						const e = !B;
						return a.a.createElement("div", {
							"data-testid": "communities-list-placeholder"
						}, r()(W.placeholderCount, t => a.a.createElement(j.a, {
							className: S.a.communityPlaceholder,
							key: t,
							isLoading: e,
							sidebar: D
						})))
					})())
				}
		},
		"./src/reddit/components/SearchResultsContent/Community/index.m.less": function(e, t, n) {
			e.exports = {
				container: "ei8_Bq_te0jjwNIqmk8Tw",
				sidebar: "iwmtpuJa21jtA4y_LuOVI",
				mFirst: "YLZe4_XS9hOtObp1VjEF-",
				subredditIcon: "_2YBzxh6YUsSdcmbcJ-kE5L",
				contentContainer: "_1Nla8vW02K39sy0E826Iug",
				subredditInfo: "_1nTSkRaTteYjCY91DwVEF3",
				title: "_2torGbn_fNOMbGw3UAasPl",
				subtitle: "_3CUjJH8t2eFynKUAv1ER7C",
				flair: "_3sOM1thDS-RiUzmUb8yzxN",
				description: "_3JYXhJlwZCvjZTBplEncbq",
				buttonContainer: "_3llSmEBMCJTcO537oPxHIH"
			}
		},
		"./src/reddit/components/SearchResultsContent/Community/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return L
			}));
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/truncateText/index.ts"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/components/Flair/index.tsx"),
				u = n("./node_modules/fbt/lib/FbtPublic.js"),
				m = n("./src/lib/prettyPrintNumber/index.ts"),
				p = n("./src/reddit/components/SubscribeButton/index.tsx"),
				b = n("./src/reddit/helpers/karma.ts");
			var h = n("./src/reddit/constants/tracking.ts"),
				f = n("./src/reddit/helpers/correlationIdTracker.ts"),
				g = n("./src/reddit/selectors/telemetry.ts");
			const C = e => t => ({
				correlationId: Object(f.c)(f.a.SearchResults),
				actionInfo: g.d(t),
				search: g.bb(t, e)
			});
			var O = n("./src/reddit/components/SubredditIcon/index.tsx"),
				v = n("./src/reddit/constants/posts.ts"),
				x = n("./src/reddit/contexts/PageLayer/index.tsx"),
				y = n("./src/reddit/controls/Button/index.tsx"),
				E = n("./src/reddit/controls/InternalLink/index.tsx"),
				j = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				_ = n("./src/reddit/helpers/trackers/searchResults.ts"),
				S = n("./src/reddit/hooks/useClickSourceData.ts"),
				k = n("./src/reddit/hooks/useTracking.ts"),
				P = n("./src/reddit/models/Flair/index.ts"),
				w = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				N = n("./src/reddit/selectors/subreddit.ts"),
				I = n("./src/reddit/selectors/user.ts"),
				M = n("./src/reddit/components/SearchResultsContent/Community/index.m.less"),
				T = n.n(M);
			const R = Object(c.c)({
					isBlockingInterstitialEnabled: w.b,
					hideNSFWPref: I.C,
					subredditOrProfile: N.J,
					subredditOrProfileAboutInfo: N.F,
					userIsSubscriber: N.db
				}),
				L = e => {
					const {
						className: t,
						first: n,
						identifier: c,
						listingKey: f,
						searchOptions: g,
						sidebar: w
					} = e, N = Object(x.fb)(), I = Object(k.a)(), M = Object(S.a)(), {
						isBlockingInterstitialEnabled: L,
						hideNSFWPref: A,
						subredditOrProfile: F,
						subredditOrProfileAboutInfo: D
					} = Object(i.e)(t => R(t, e)), B = Object(i.d)(), U = Object(o.useCallback)(e => {
						F && c.type === v.a.PROFILE && L && (e.preventDefault(), B(Object(d.cb)(F.url))), I(Object(_.k)(g, N, c, f))
					}, [I, g, N, f, c, L, B, F]), G = Object(o.useCallback)(e => {
						e.preventDefault(), e.stopPropagation(), I(Object(_.k)(g, N, c, f))
					}, [I, g, N, c, f]);
					if (!F) return null;
					const H = F.displayText,
						W = D.publicDescription,
						q = ((e, t) => {
							if ("subreddit" !== e) {
								const e = t,
									n = Object(b.a)(e),
									s = Object(m.b)(n);
								return u.fbt._({
									"*": "{karma count} Karma",
									_1: "1 Karma"
								}, [u.fbt._plural(n, "karma count", s)], {
									hk: "4r0tyT"
								})
							}
							const n = t;
							return "number" == typeof n.subscribers ? u.fbt._({
								"*": "{number of subscribers} Members",
								_1: "1 Member"
							}, [u.fbt._plural(n.subscribers, "number of subscribers", Object(m.b)(n.subscribers))], {
								hk: "vb11y"
							}) : null
						})(c.type, D),
						V = (({
							identifierType: e,
							subredditOrProfile: t,
							subredditOrProfileAboutInfo: n,
							onSubscribeButtonClick: s,
							subscribeEventFactory: r,
							priority: o
						}) => {
							if ("subreddit" !== e) return t.acceptFollowers ? a.a.createElement(p.a, {
								getEventFactory: r,
								identifier: {
									name: t.name,
									type: "profile"
								},
								onClick: s,
								priority: o,
								small: !0
							}) : null;
							return "number" == typeof n.subscribers ? a.a.createElement(p.a, {
								getEventFactory: r,
								identifier: {
									name: t.name,
									type: "subreddit"
								},
								onClick: s,
								priority: o,
								small: !0
							}) : null
						})({
							identifierType: c.type,
							subredditOrProfile: F,
							subredditOrProfileAboutInfo: D,
							onSubscribeButtonClick: G,
							subscribeEventFactory: e => {
								if (!e) return ((e, t) => n => ({
									source: "search",
									action: h.c.CLICK,
									noun: `result_subscribe_${e}`,
									...C(t)
								}))(c.type, g)
							},
							priority: y.c.Tertiary
						});
					return a.a.createElement(E.a, {
						"data-testid": `${c.type}-link`,
						className: Object(s.a)(T.a.container, w && T.a.sidebar, n ? T.a.mFirst : void 0, t),
						onClick: U,
						to: {
							pathname: F.url,
							state: M
						}
					}, a.a.createElement("div", {
						className: T.a.iconContainer
					}, a.a.createElement(O.b, {
						className: T.a.subredditIcon,
						shouldHideNsfwIcon: A,
						subredditOrProfile: F
					})), a.a.createElement("div", {
						className: T.a.contentContainer
					}, a.a.createElement("div", {
						className: Object(s.a)(T.a.subredditInfo, w && T.a.sidebar)
					}, a.a.createElement("h6", {
						className: T.a.title
					}, H), F.isNSFW && a.a.createElement(l.b, {
						className: T.a.flair,
						flair: {
							type: P.f.Nsfw,
							text: "nsfw"
						}
					}), q && a.a.createElement(a.a.Fragment, null, a.a.createElement("p", {
						className: T.a.subtitle
					}, !w && a.a.createElement(j.b, null), q))), !w && a.a.createElement("p", {
						className: T.a.description
					}, Object(r.a)(W, 150, "..."))), a.a.createElement("div", {
						className: T.a.buttonContainer
					}, V))
				}
		},
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less": function(e, t, n) {
			e.exports = {
				communityContainer: "_2-tXnoxd32Utasnz79k34",
				sidebar: "_2PlcVxaNCQS2-GyaX_mhOA",
				subreddtiIcon: "_3yGdKsP-cHl-Cb_SH-PyXp",
				contentContainer: "Lsafh1CsbqQ8tiuBPTucl",
				subredditInfo: "_1TKuN8SZONE4tjAoEul8sp",
				title: "_11V3zVIqp59I7JvzWnky0w",
				author: "_2GNPL8YTca77gPEWlF9nDb",
				description: "_3C8z4MmIB_gou30f3ojB0V",
				buttonContainer: "_14X6ixd8jgBYsNSxRPXTbL"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				i = n("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less"),
				c = n.n(i);
			const d = e => r.a.createElement("div", {
				className: Object(o.a)(c.a.communityContainer, e.sidebar && c.a.sidebar),
				"data-testid": "community-placeholder"
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.subreddtiIcon, Object(a.a)(e))
			}), r.a.createElement("div", {
				className: c.a.contentContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.subredditInfo, e.sidebar && c.a.sidebar)
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.title, Object(a.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(c.a.author, Object(a.b)(e))
			})), !e.sidebar && r.a.createElement("div", {
				className: Object(o.a)(c.a.description, Object(a.b)(e))
			})), r.a.createElement("div", {
				className: Object(o.a)(c.a.buttonContainer, Object(a.a)(e))
			}))
		},
		"./src/reddit/components/SearchResultsContent/NoResults/index.m.less": function(e, t, n) {
			e.exports = {
				noResults: "_1VDJFxZ-XJSB8yo1UyJzsi",
				withSidebar: "_3C2YoevK_DDUuAyafjSuUs",
				header: "kKE_PXkpQNWEX-RiwWuTA",
				text: "_1tEoY-vmgG3yWH6hCdgy3p"
			}
		},
		"./src/reddit/components/SearchResultsContent/helpers/viewCommunityTracker.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/lib/LRUCache/index.ts"),
				r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/helpers/trackers/searchResults.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const i = new s.a(250),
				c = (e, t, n, s) => {
					const r = `last-${t}`,
						o = `entered-${e.id}-${r}`;
					let a = i.get(o);
					return void 0 === a && (a = "subreddit" === e.type ? () => l(n, e.id, s) : () => d(n, e.id, s), i.set(o, a)), a
				},
				d = (e, t, n) => e(e => ({
					...Object(o.c)(e, n),
					source: "search",
					action: "view",
					noun: "search_results_profile",
					correlationId: Object(r.c)(r.a.SearchResults),
					actionInfo: a.d(e),
					search: a.bb(e, n),
					profile: a.R(e)
				})),
				l = (e, t, n) => e(e => ({
					...Object(o.c)(e, n),
					source: "search",
					action: "view",
					noun: "search_results_subreddit",
					correlationId: Object(r.c)(r.a.SearchResults),
					actionInfo: a.d(e),
					search: a.bb(e, n),
					subreddit: a.jb(e)
				}))
		},
		"./src/reddit/components/SearchResultsContent/index.m.less": function(e, t, n) {
			e.exports = {
				resultsContainer: "_1MTbwSHIISfMYM16YhZ8kN"
			}
		},
		"./src/reddit/components/SearchResultsContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Bt
			}));
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/search/index.ts"),
				c = n("./node_modules/lodash/constant.js"),
				d = n.n(c),
				l = n("./node_modules/lodash/times.js"),
				u = n.n(l),
				m = n("./src/reddit/selectors/searchResults.ts"),
				p = n("./src/reddit/components/SearchResultsContent/CommunitiesList/index.tsx"),
				b = n("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx"),
				h = n("./src/reddit/components/SearchResultsContent/Communities/index.m.less"),
				f = n.n(h);
			const g = (e, t) => Boolean(t && t.token) && e.length > 0,
				C = e => {
					const {
						listingKey: t,
						searchOptions: n
					} = e, s = Object(a.e)(e => Object(m.d)(e, {
						listingKey: t
					})), r = Object(a.e)(e => Object(m.o)(e, {
						listingKey: t
					}));
					return o.a.createElement("div", {
						className: f.a.container,
						"data-testid": "communities-list"
					}, !n.is_multi && o.a.createElement(p.a, {
						identifiers: s,
						listingKey: t,
						searchOptions: n
					}), g(s, r) && o.a.Children.toArray(u()(3, d()(o.a.createElement(b.a, {
						className: f.a.loadMoreItem,
						isLoading: !0
					})))))
				};
			var O = n("./src/reddit/components/SearchResultsContent/AuthorsList/index.tsx");
			const v = e => {
					const {
						listingKey: t,
						searchOptions: n
					} = e, s = Object(a.e)(e => Object(m.a)(e, {
						listingKey: t
					})), r = Object(a.e)(e => Object(m.n)(e, {
						listingKey: t
					}));
					return o.a.createElement("div", {
						className: f.a.container,
						"data-testid": "authors-list"
					}, !n.is_multi && o.a.createElement(O.a, {
						identifiers: s,
						listingKey: t,
						searchOptions: n
					}), g(s, r) && o.a.Children.toArray(u()(3, d()(o.a.createElement(b.a, {
						className: f.a.loadMoreItem,
						isLoading: !0
					})))))
				},
				x = e => {
					return /\b(author|subreddit|flair|nsfw|self|selftext|site|url):[^\b]+/.test(e)
				};
			var y = n("./src/reddit/helpers/trackers/searchResults.ts"),
				E = n("./src/reddit/hooks/useTracking.ts");
			const j = e => o.a.createElement("svg", {
				width: "68",
				height: "68",
				viewBox: "0 0 68 68",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				opacity: "0.5"
			}, o.a.createElement("path", {
				opacity: "0.5",
				d: "M24.0765 62.221H23.88C18.8437 61.8013 13.8553 61.1585 9.8284 60.4201L1.83309 59.926C1.39607 59.8973 0.988164 59.6968 0.698496 59.3683C0.408829 59.0398 0.260945 58.6101 0.287153 58.1729C0.287153 58.1198 0.287153 58.0773 0.287153 58.0294C0.866215 54.3319 1.22747 50.4698 1.59403 46.3366C1.74278 44.7429 1.89153 43.1491 2.0509 41.5554C2.36434 38.3679 2.68309 35.4566 3.0284 32.6357L3.63403 27.5676C3.78809 26.2129 3.94746 24.8104 4.16528 23.3973C4.57965 20.6719 5.16403 17.7926 6.64621 15.2107C7.02845 14.5512 7.4713 13.9287 7.96903 13.3513C8.4702 12.7333 9.05486 12.188 9.70621 11.731C10.8469 10.9717 12.0672 10.3393 13.3453 9.84507L13.4356 9.80788C14.5122 9.38724 15.5518 8.87723 16.5434 8.2832C17.4179 7.68273 18.1985 6.95586 18.8596 6.12632L19.3218 5.59507C19.9725 4.78196 20.6828 4.0184 21.4468 3.3107C22.4656 2.39364 23.6358 1.66027 24.9053 1.1432C25.1841 1.02221 25.4696 0.917551 25.7606 0.829758H25.835C26.1427 0.713538 26.4567 0.614223 26.7753 0.532258C27.4035 0.375443 28.0429 0.267104 28.6878 0.208195C29.909 0.108959 31.1372 0.133878 32.3534 0.28257C33.5406 0.415061 34.7127 0.658735 35.8543 1.01038C36.4183 1.1836 36.9717 1.38937 37.5118 1.62663C38.0431 1.85507 38.5106 2.08351 38.9834 2.31726L39.3393 2.49257C40.8642 3.31976 42.4816 3.96352 44.1578 4.41038C44.3118 4.44226 44.45 4.46882 44.5934 4.49007H44.7475C45.7208 4.39665 46.6842 4.2189 47.6268 3.95882C48.1262 3.83132 48.6415 3.68788 49.1781 3.53913C49.8156 3.35851 50.4796 3.17257 51.1809 3.00788C52.6324 2.61618 54.1293 2.4179 55.6328 2.4182C56.4944 2.42917 57.3511 2.54875 58.1828 2.77413C59.0231 3.0092 59.834 3.33892 60.6 3.75695C62.1234 4.58147 63.4262 5.76036 64.3984 7.19413C65.2572 8.42103 65.9553 9.75292 66.4756 11.1573C66.5978 11.4866 66.7146 11.8054 66.8209 12.1241C66.9388 12.4728 67.0381 12.8275 67.1184 13.1866C67.2667 13.8442 67.3661 14.5119 67.4159 15.1841C67.478 15.872 67.4494 16.565 67.3309 17.2454C67.208 17.8817 66.9989 18.4984 66.7093 19.0782C66.6721 19.1473 66.6403 19.2057 66.6031 19.2641V19.3066C66.302 20.0633 65.9037 20.7777 65.4184 21.4316C64.9598 22.0295 64.4515 22.5875 63.899 23.0998L63.7184 23.2644C63.9321 23.5088 64.1207 23.774 64.2815 24.056C64.9398 25.1788 65.2348 26.4777 65.1262 27.7748C65.0637 29.0497 64.6318 30.279 63.8831 31.3129C63.1645 32.2477 62.2461 33.01 61.195 33.5441C60.2717 34.0316 59.2946 34.4095 58.2837 34.6704C57.3238 34.9128 56.3442 35.0692 55.3565 35.1379C54.7562 35.191 54.1559 35.2335 53.5715 35.2707C52.503 35.314 51.4383 35.4258 50.384 35.6054C48.8748 35.9097 47.4033 36.3783 45.9959 37.0026C45.6028 37.1726 45.215 37.3479 44.8325 37.5338C44.094 38.166 43.2387 38.8354 42.2559 39.5154C40.4692 40.7482 38.5981 41.8542 36.6565 42.8251C36.1253 43.1013 35.525 43.3829 34.9193 43.6644L34.0003 44.0948L33.0175 44.5091C32.0665 44.8704 31.0625 45.2104 29.7875 45.5716V45.6141C29.6546 45.8957 29.5165 46.1826 29.3943 46.4801C29.1393 47.0698 28.895 47.6913 28.6718 48.3341C28.208 49.6498 27.8125 50.9885 27.4872 52.3451C26.885 54.9125 26.4888 57.5239 26.3025 60.1544C26.2684 60.7191 26.018 61.2488 25.6035 61.6337C25.189 62.0185 24.6421 62.2289 24.0765 62.221ZM24.0287 60.7123C24.2062 60.7211 24.3802 60.6607 24.514 60.5438C24.6478 60.4268 24.731 60.2625 24.7459 60.0854C24.936 57.3565 25.3446 54.6473 25.9678 51.9838C26.3078 50.5732 26.721 49.1812 27.2056 47.8135C27.4393 47.1441 27.6996 46.4907 27.9653 45.8691C28.0981 45.5557 28.2415 45.2476 28.385 44.9501L28.5656 44.5888L28.7143 44.2966L29.0278 44.2063C30.4196 43.7973 31.4715 43.4519 32.449 43.0748L33.3787 42.6816L34.2659 42.2832C34.8556 42.0123 35.424 41.7519 35.9553 41.4704C37.8565 40.5281 39.6886 39.4522 41.4378 38.251C42.3127 37.6437 43.1567 36.993 43.9665 36.3013L44.0462 36.2323L44.1365 36.1898C44.5668 35.9826 45.0025 35.786 45.4487 35.5948C46.9536 34.9297 48.5265 34.4309 50.1396 34.1073C51.2605 33.9149 52.3927 33.796 53.529 33.7513C54.1028 33.7141 54.6871 33.6769 55.2768 33.6238C56.1728 33.5619 57.0616 33.4215 57.9331 33.2041C58.8295 32.9725 59.696 32.6373 60.515 32.2054C61.3636 31.771 62.1057 31.1542 62.6878 30.3991C63.2626 29.6003 63.593 28.6516 63.6387 27.6685C63.7229 26.6822 63.5022 25.6938 63.0065 24.8369C62.7721 24.449 62.4612 24.1128 62.0928 23.8488L61.2959 23.2751L62.0503 22.6535C62.3106 22.441 62.5815 22.2126 62.8259 21.9788C63.3145 21.5251 63.7641 21.031 64.17 20.5019C64.5849 19.9434 64.9243 19.3325 65.1793 18.6851L65.2909 18.4726L65.3387 18.3823C65.5693 17.9257 65.7356 17.4394 65.8328 16.9373C65.9268 16.3846 65.9483 15.822 65.8965 15.2638C65.852 14.6649 65.7632 14.07 65.6309 13.4841C65.5618 13.1788 65.4767 12.8774 65.3759 12.581C65.275 12.2729 65.1634 11.9701 65.0518 11.6619C64.575 10.3781 63.9358 9.16049 63.15 8.03882C62.3116 6.79679 61.1852 5.77607 59.8668 5.06382C59.2018 4.70203 58.4978 4.41687 57.7684 4.21382C57.058 4.02163 56.3262 3.91989 55.5903 3.91101C54.2165 3.91084 52.8486 4.08942 51.5209 4.44226C50.8356 4.61226 50.1875 4.7982 49.5659 4.97351C48.9443 5.14882 48.5034 5.27632 47.9721 5.40382C46.9457 5.68206 45.8969 5.87048 44.8378 5.96695H44.6518H44.4925H44.4181C44.2162 5.94038 44.0143 5.9032 43.8125 5.8607C42.017 5.39122 40.2849 4.70624 38.654 3.8207L38.2981 3.64538C37.8359 3.42226 37.3684 3.19913 36.8797 2.98132C36.3943 2.77611 35.8977 2.59873 35.3922 2.45007C34.3526 2.12887 33.2856 1.90479 32.2046 1.7807C31.0854 1.64317 29.9551 1.62003 28.8312 1.71163C28.2461 1.75436 27.6652 1.84317 27.094 1.97726C26.8152 2.04322 26.5403 2.12481 26.2706 2.22163L26.1856 2.2482C25.9381 2.32283 25.6951 2.41152 25.4578 2.51382C24.3365 2.96721 23.3028 3.6126 22.4031 4.42101C21.6915 5.07992 21.0292 5.79016 20.4215 6.54601L19.954 7.07726C19.1956 8.01988 18.3002 8.84359 17.2978 9.52101C16.2342 10.1616 15.1181 10.7108 13.9615 11.1626L13.8765 11.1998C12.6977 11.6532 11.5719 12.2339 10.519 12.9316C9.97908 13.3107 9.49454 13.763 9.07934 14.2757C8.65896 14.7947 8.28728 15.3513 7.96903 15.9385C6.60903 18.3079 6.06184 21.0173 5.67403 23.5991C5.47215 24.9804 5.31278 26.3723 5.14278 27.7163L4.53715 32.8057C4.19715 35.5948 3.8784 38.5219 3.56496 41.6935C3.40028 43.2873 3.25153 44.881 3.10809 46.4748C2.72028 50.6132 2.35903 54.5179 1.79059 58.2366C1.78599 58.2577 1.78586 58.2794 1.79019 58.3005C1.79452 58.3216 1.80322 58.3416 1.81573 58.3591C1.82825 58.3766 1.84429 58.3913 1.86284 58.4022C1.88138 58.4132 1.90202 58.4201 1.9234 58.4226L9.96121 58.9166H10.0515C14.0465 59.6551 19.0084 60.2873 24.0181 60.7069L24.0287 60.7123Z",
				fill: "white"
			}), o.a.createElement("path", {
				opacity: "0.5",
				d: "M60.6689 67.7829C59.3729 67.8082 58.1043 67.409 57.0564 66.646C56.5109 66.2282 56.0433 65.7174 55.6752 65.1372C55.4308 64.76 55.2183 64.3882 55.0377 64.0747L54.8836 63.7985C54.6987 63.4549 54.4874 63.1263 54.2514 62.8157C54.0498 62.5698 53.8115 62.3566 53.5448 62.1835L53.3908 62.0772C53.0295 61.8344 52.69 61.5607 52.3761 61.2591C52.2281 61.1105 52.0896 60.9525 51.9617 60.7863L51.8873 60.6907C51.7864 60.5685 51.6855 60.4304 51.5898 60.2975L51.4995 60.1754L51.4464 60.1063C51.3422 60.2021 51.2429 60.3032 51.1489 60.4091C49.9918 61.7902 49.373 63.543 49.4064 65.3444C49.3999 65.7444 49.2572 66.1302 49.0018 66.4382C48.7465 66.7461 48.3938 66.9578 48.0019 67.0383C47.6101 67.1187 47.2025 67.0632 46.8465 66.8808C46.4904 66.6984 46.2072 66.4001 46.0436 66.035C45.6842 65.2167 45.4083 64.3641 45.2202 63.4904C45.0382 62.6605 44.9315 61.8159 44.9014 60.9669C43.7456 62.332 42.7985 63.8609 42.0911 65.5038C41.9437 65.8462 41.6889 66.1312 41.3652 66.3159C41.0414 66.5006 40.6663 66.5749 40.2966 66.5275C39.9269 66.48 39.5827 66.3135 39.3161 66.0531C39.0494 65.7927 38.8748 65.4526 38.8186 65.0841C38.4296 62.5593 38.5927 59.9801 39.2967 57.5244C39.5395 56.6631 39.8559 55.8241 40.2423 55.0169C40.7135 53.3184 41.5493 51.743 42.6914 50.4004C43.0842 49.9409 43.5123 49.5129 43.9717 49.12C44.434 48.7153 44.922 48.3409 45.4326 47.9991C46.5736 47.2327 47.8287 46.6517 49.1514 46.2779C50.1547 46.0035 51.1875 45.8518 52.2273 45.8263C51.9033 45.2738 51.4884 44.7799 51.0002 44.3654C50.0261 43.5553 48.9164 42.924 47.7223 42.5007C46.1911 42.006 44.5757 41.8253 42.973 41.9694C42.598 42.0281 42.2144 41.9511 41.8911 41.7522C41.5679 41.5533 41.3262 41.2455 41.2097 40.8843C41.0931 40.5231 41.1093 40.1321 41.2553 39.7818C41.4013 39.4315 41.6675 39.1447 42.0061 38.9732C43.707 37.9656 45.59 37.3034 47.5472 37.0244C49.5043 36.7455 51.4973 36.8553 53.412 37.3475C54.4476 37.6135 55.4507 37.993 56.403 38.4791C57.3613 38.9656 58.2735 39.5382 59.1283 40.1897C60.9056 41.5404 62.4032 43.2238 63.5377 45.1463C64.3333 46.5228 64.9679 47.9863 65.4289 49.5079C65.6255 50.1772 65.8061 50.8572 66.0027 51.6329C66.1762 52.3412 66.3409 53.0336 66.4967 53.71C66.842 55.2507 67.0811 56.616 67.2405 57.8857L67.4689 59.8672C67.5598 60.5721 67.6094 61.2816 67.6177 61.9922C67.6355 62.8397 67.4876 63.6825 67.182 64.4732C66.8056 65.4086 66.1037 66.1765 65.2058 66.6354C64.8863 66.8037 64.5563 66.951 64.2177 67.0763C63.9042 67.1985 63.5748 67.31 63.2455 67.4004C62.5838 67.5937 61.9036 67.7166 61.2161 67.7669C61.0319 67.7775 60.8495 67.7829 60.6689 67.7829ZM51.8395 57.9547L52.2752 58.5816C52.4292 58.8419 52.5727 59.0597 52.7161 59.2616L52.8064 59.3891C52.8861 59.4954 52.9605 59.6069 53.0508 59.7132L53.1411 59.83C53.2312 59.9494 53.3288 60.063 53.4333 60.17C53.687 60.4106 53.9607 60.6292 54.2514 60.8235L54.4108 60.935C54.7941 61.1897 55.1363 61.5014 55.4255 61.8594C55.7111 62.23 55.9669 62.6225 56.1905 63.0335L56.3498 63.315C56.5305 63.6391 56.7164 63.9685 56.9342 64.3032C57.2083 64.7397 57.5572 65.1246 57.9648 65.44C58.8758 66.0837 59.9903 66.3727 61.0992 66.2529C61.6824 66.2094 62.2594 66.1043 62.8205 65.9394C63.1073 65.8597 63.3889 65.7641 63.6652 65.6579C63.9528 65.5524 64.2332 65.4282 64.5045 65.286C65.0732 64.9909 65.5206 64.5059 65.7689 63.9154C66.0032 63.2946 66.1151 62.6343 66.0983 61.971C66.0896 61.3207 66.0435 60.6715 65.9602 60.0266L65.7317 58.0557C65.583 56.8444 65.3492 55.5269 65.0145 54.0288C64.8622 53.3523 64.7011 52.6706 64.5311 51.9835C64.3398 51.2025 64.1645 50.5438 63.9998 49.9063C63.5735 48.4998 62.9871 47.1468 62.252 45.8741C61.2177 44.1204 59.8518 42.5848 58.2305 41.3532C57.4473 40.7563 56.6116 40.2317 55.7336 39.786C54.888 39.3516 53.9972 39.0113 53.0773 38.7713C49.6066 37.8975 45.9316 38.4181 42.8401 40.2216C42.8174 40.2313 42.7981 40.2476 42.7848 40.2685C42.7715 40.2894 42.7649 40.3138 42.7658 40.3385C42.7664 40.3529 42.77 40.3671 42.7763 40.3801C42.7826 40.3931 42.7915 40.4047 42.8025 40.4141C42.8134 40.4236 42.8262 40.4307 42.84 40.435C42.8537 40.4394 42.8683 40.4409 42.8826 40.4394C44.6987 40.2831 46.5275 40.4964 48.2589 41.0663C49.6136 41.5508 50.8725 42.2701 51.9776 43.1913C52.7127 43.7938 53.3166 44.5405 53.752 45.3854C53.906 45.7015 54.0271 46.0326 54.1133 46.3735L54.3842 47.3882L53.3217 47.3191C50.8347 47.1427 48.3607 47.8089 46.2986 49.2104C45.838 49.5178 45.3979 49.855 44.9811 50.2197C44.5786 50.5634 44.2038 50.9382 43.8601 51.3407C42.8463 52.5319 42.108 53.9323 41.698 55.4419L41.6501 55.5694C41.2842 56.3207 40.9856 57.1029 40.7576 57.9069C40.1132 60.1501 39.9628 62.5063 40.3167 64.8132C40.3208 64.851 40.3347 64.8871 40.3571 64.9178C40.3795 64.9486 40.4095 64.9729 40.4442 64.9885C40.4957 65.0098 40.5535 65.0101 40.6052 64.9892C40.6568 64.9684 40.6982 64.928 40.7205 64.8769C41.5554 62.9541 42.6944 61.1783 44.0939 59.6175C44.4605 59.2085 44.843 58.8207 45.268 58.4222L46.8139 56.9719L46.527 59.0969C46.527 59.1394 46.527 59.1819 46.527 59.2244V59.2829C46.3044 61.3763 46.6265 63.4918 47.462 65.4241C47.4807 65.4714 47.5127 65.5122 47.5543 65.5414C47.5958 65.5707 47.645 65.5872 47.6958 65.5888C47.762 65.5888 47.8255 65.5625 47.8723 65.5157C47.9192 65.4688 47.9455 65.4053 47.9455 65.3391C47.9103 63.1656 48.6654 61.0532 50.0705 59.3944C50.3928 59.0467 50.7487 58.7318 51.133 58.4541L51.8395 57.9547Z",
				fill: "white"
			})), o.a.createElement("path", {
				d: "M66.0614 15.9394C65.1674 13.0745 63.7239 10.4111 61.8114 8.09819C60.0264 5.936 57.0301 4.30506 54.3739 4.33694C51.7176 4.36881 48.3389 5.93069 45.7676 6.05288C42.7342 6.18569 39.637 4.26256 36.8214 3.046C33.8995 1.81881 29.6283 1.40444 26.7861 2.2385C21.4417 3.83225 20.8945 7.551 17.4254 9.761C14.7161 11.5035 11.5233 11.9551 9.4992 14.2288C6.0142 18.1388 5.91326 24.041 4.97295 31.3988C3.48014 43.0279 3.0392 51.5863 1.94482 58.2694L24.0608 59.7994C24.2201 50.9701 25.7236 44.6748 31.6311 41.7369",
				fill: "#6FC437"
			}), o.a.createElement("path", {
				d: "M31.6255 41.7569C31.6574 41.826 31.243 42.0969 30.494 42.6282C29.4203 43.4202 28.4865 44.3863 27.7315 45.4863C26.5832 47.2611 25.8028 49.2482 25.4365 51.33C25.1826 52.6396 25.0052 53.9629 24.9052 55.2932C24.799 56.7116 24.7511 58.2203 24.7352 59.8141C24.7345 59.9034 24.7162 59.9917 24.6814 60.0739C24.6466 60.1562 24.5959 60.2307 24.5323 60.2934C24.4686 60.356 24.3933 60.4055 24.3105 60.4391C24.2278 60.4726 24.1392 60.4895 24.0499 60.4888H24.0021C17.7174 60.1435 10.2268 59.6972 1.8702 59.1713C1.75222 59.1638 1.63686 59.1332 1.53075 59.0811C1.42464 59.0289 1.32987 58.9564 1.25188 58.8675C1.17389 58.7787 1.11421 58.6753 1.07628 58.5633C1.03835 58.4513 1.0229 58.333 1.03083 58.215C1.03083 58.215 1.03083 58.1619 1.03083 58.1353C1.8277 53.0035 2.23145 47.436 2.81583 41.6188C3.09916 38.7111 3.42323 35.7432 3.78802 32.715L4.31927 28.1622C4.49458 26.6269 4.66458 25.0757 4.89833 23.4978C5.30739 20.8416 5.87052 18.0525 7.28895 15.5769C7.63715 14.9527 8.04265 14.3623 8.5002 13.8132C8.95968 13.2441 9.49607 12.7417 10.094 12.3203C11.2182 11.5751 12.4207 10.9551 13.6799 10.4716C14.7961 10.0322 15.873 9.49901 16.8993 8.87784C17.8359 8.23664 18.6736 7.46164 19.3855 6.57753C20.1599 5.60279 21.0013 4.68327 21.9036 3.82566C22.8578 2.96483 23.9543 2.27636 25.1443 1.79097C25.4344 1.68029 25.7306 1.58628 26.0315 1.50941C26.3256 1.40444 26.6253 1.31576 26.9293 1.24378C27.5283 1.10098 28.1375 1.00507 28.7515 0.956905C29.925 0.862861 31.1051 0.88778 32.2736 1.03128C33.405 1.15862 34.522 1.39161 35.6099 1.72722C36.1521 1.89272 36.6843 2.08962 37.2036 2.31691C37.6977 2.54003 38.1758 2.76316 38.6433 2.99159C40.508 3.89472 42.2558 4.7819 43.993 5.14847C44.828 5.33715 45.6904 5.37136 46.5377 5.2494C47.3988 5.12057 48.2519 4.9432 49.093 4.71816C50.7824 4.29847 52.424 3.79378 54.1505 3.73534C55.7567 3.73943 57.3338 4.16438 58.7246 4.96784C59.9212 5.62127 60.9916 6.48301 61.8855 7.51253C62.5955 8.37218 63.2384 9.28507 63.8086 10.2432C64.6045 11.5532 65.2462 12.9508 65.7211 14.4082C66.0346 15.4069 66.1143 15.9541 66.0558 15.97C65.9974 15.986 65.7743 15.4866 65.3439 14.5569C64.7229 13.2004 63.9871 11.8994 63.1446 10.6682C62.5431 9.78564 61.881 8.94601 61.163 8.15534C60.3072 7.25948 59.3024 6.51891 58.1933 5.96659C56.962 5.31067 55.5824 4.98315 54.1877 5.01566C52.5783 5.21055 50.9925 5.5665 49.4543 6.07815C48.5643 6.34301 47.6596 6.55587 46.7449 6.71566C45.7303 6.88416 44.6937 6.86796 43.6849 6.66784C41.6449 6.28003 39.7802 5.35566 37.9155 4.49503C37.448 4.27722 36.9858 4.06472 36.513 3.86816C36.0553 3.67683 35.5871 3.51187 35.1105 3.37409C34.1197 3.08571 33.1041 2.89008 32.0771 2.78972C31.0173 2.6823 29.9494 2.6823 28.8896 2.78972C28.3683 2.83628 27.8514 2.92331 27.3436 3.05003C27.0879 3.11341 26.836 3.19146 26.5893 3.28378C26.3341 3.36238 26.084 3.45641 25.8402 3.56534C24.851 3.97859 23.9413 4.56105 23.1521 5.28659C22.3201 6.09878 21.5445 6.96673 20.8305 7.88441C20.0036 8.92168 19.028 9.83108 17.9352 10.5832C16.819 11.2687 15.646 11.8571 14.429 12.3416C13.3109 12.7756 12.2423 13.3277 11.2415 13.9885C10.781 14.3122 10.3696 14.7005 10.0196 15.1413C9.64672 15.5917 9.31596 16.0754 9.03145 16.5863C7.83614 18.6688 7.28895 21.1975 6.90645 23.7953C6.68333 25.32 6.51333 26.8553 6.3327 28.3907C6.15208 29.926 5.96614 31.4666 5.80145 32.9594C5.41541 35.9663 5.07541 38.92 4.78145 41.8207C4.15458 47.6166 3.71895 53.1841 2.83177 58.4382L2.00302 57.3757C10.349 58.0078 17.8343 58.6028 24.103 59.1235L23.3752 59.7875C23.4336 58.1938 23.5293 56.6319 23.6886 55.1763C23.8397 53.803 24.0757 52.4404 24.3952 51.0963C24.8704 48.908 25.8048 46.8456 27.1365 45.0453C27.9933 43.9327 29.0623 43.001 30.2815 42.3041C30.6872 42.0315 31.1447 41.8452 31.6255 41.7569Z",
				fill: "black"
			}), o.a.createElement("path", {
				d: "M40.6621 30.193C46.1817 29.6617 52.7267 28.4664 57.2955 25.7145C59.6277 24.3067 62.3211 22.7449 64.0689 20.402C65.2324 18.8083 66.1408 15.913 64.6002 15.2542C63.3252 14.723 60.4458 15.2224 58.8521 16.0299C54.6021 18.1867 48.8274 22.5802 42.3833 23.5099C39.573 23.9189 36.7255 23.4302 33.9205 22.9786C31.1155 22.527 27.9297 22.9095 25.1513 23.5099C21.4001 24.9733 17.0586 24.9389 17.0002 28.0414C16.9683 30.6605 21.2502 30.0708 24.1667 28.9127",
				fill: "black"
			}), o.a.createElement("path", {
				d: "M24.1882 28.9123C24.1882 28.9708 23.9439 29.1673 23.3754 29.4436C22.5375 29.8133 21.6582 30.0808 20.7564 30.2405C20.0767 30.3537 19.3842 30.368 18.7004 30.283H18.4029L18.0948 30.198C17.8741 30.1329 17.6619 30.0419 17.4626 29.927C17.0017 29.6385 16.666 29.1871 16.5223 28.6626C16.4253 28.1332 16.4546 27.5883 16.6079 27.0723C16.7611 26.5563 17.2571 26.2749 17.6273 25.8842C18.362 25.0958 19.0701 24.9885 20.0476 24.5348C21.0606 24.0391 21.9192 23.7013 22.9994 23.3767C24.1644 23.0009 25.692 22.5998 26.9029 22.4205C29.4848 22.0805 32.0242 21.783 34.6804 22.1814C37.3367 22.5798 40.1735 22.9942 42.9201 22.4205C45.847 21.7755 48.6568 20.6824 51.2501 19.1798C52.6207 18.4361 53.9595 17.6445 55.2929 16.8689C55.9623 16.4811 56.6317 16.0933 57.3117 15.7214C57.6464 15.5301 58.0023 15.3548 58.3423 15.1901C58.7183 15.0004 59.107 14.8371 59.5057 14.7014C60.2695 14.4491 61.0559 14.2712 61.8539 14.1701C62.6821 14.0309 63.5278 14.0309 64.356 14.1701C64.6082 14.2224 64.8527 14.3063 65.0839 14.4198C65.2251 14.4938 65.3601 14.5791 65.4876 14.6748C65.6082 14.7825 65.7218 14.8979 65.8276 15.0201C66.1607 15.4639 66.3465 16.0008 66.3589 16.5555C66.3717 17.3865 66.2125 18.2113 65.8914 18.978C65.6119 19.6876 65.2404 20.3574 64.7864 20.9701C64.3555 21.5405 63.8775 22.0736 63.3573 22.5639C62.3866 23.4534 61.3335 24.2485 60.2123 24.9386C59.681 25.2733 59.1498 25.5867 58.6504 25.8842C58.1511 26.1817 57.6464 26.4739 57.1151 26.7555C56.1241 27.2826 55.096 27.7371 54.0392 28.1155C52.2463 28.7504 50.4059 29.2424 48.5354 29.587C46.8939 29.8951 45.4701 30.0705 44.2854 30.182C41.9532 30.3998 40.6623 30.3573 40.6464 30.2298C40.6304 30.1023 41.9001 29.8526 44.1685 29.4011C47.3558 28.823 50.4811 27.9443 53.5026 26.7767C54.4771 26.3799 55.4232 25.9167 56.3342 25.3901C56.7964 25.1245 57.2904 24.8111 57.7898 24.4976C58.2892 24.1842 58.7832 23.8655 59.2773 23.5308C60.293 22.8605 61.2445 22.0975 62.1195 21.2517C62.5568 20.8249 62.9584 20.363 63.3201 19.8705C63.664 19.3772 63.9425 18.8415 64.1489 18.2767C64.3599 17.7553 64.4664 17.1976 64.4623 16.6351C64.467 16.4759 64.4245 16.3187 64.3401 16.1836C64.3401 16.1836 64.3082 16.1836 64.3029 16.1517C64.2976 16.1198 64.2657 16.1517 64.2498 16.1251C64.158 16.0852 64.0617 16.0566 63.9629 16.0401C63.3558 15.9437 62.7372 15.9437 62.1301 16.0401C61.4612 16.137 60.8031 16.297 60.1645 16.5183C59.853 16.6263 59.5495 16.7559 59.2561 16.9061C58.932 17.0814 58.6079 17.2408 58.2839 17.4373C57.6357 17.7986 56.9823 18.1811 56.3182 18.5689C54.9954 19.3498 53.662 20.1626 52.217 20.9276C49.4471 22.5214 46.4418 23.6654 43.3132 24.317C41.7877 24.5977 40.2312 24.671 38.686 24.5348C37.1985 24.4233 35.7801 24.1948 34.436 23.9717C31.7214 23.5467 29.2192 23.1536 26.9029 23.3767C25.7786 23.5126 24.6666 23.7364 23.5773 24.0461C22.5643 24.309 21.5732 24.6501 20.6129 25.0661C19.7762 25.4064 19.0105 25.9001 18.3551 26.5217C18.2187 26.6567 18.0975 26.8064 17.9939 26.968L17.8451 27.1964L17.7495 27.4355C17.6329 27.7324 17.5909 28.0535 17.6273 28.3705C17.6819 28.6241 17.8274 28.8489 18.0364 29.0026C18.2902 29.1658 18.5736 29.2777 18.8704 29.332C19.4625 29.4402 20.0661 29.4706 20.6661 29.4223C21.5367 29.3475 22.4012 29.2125 23.2532 29.0186C23.8429 28.907 24.1617 28.8433 24.1882 28.9123Z",
				fill: "black"
			}), o.a.createElement("path", {
				d: "M30.1169 6.61499C33.6922 6.80093 34.2766 9.57405 34.0535 11.2581C33.9279 12.1042 33.6207 12.9131 33.1531 13.6293C32.6854 14.3455 32.0683 14.952 31.3441 15.4072C30.6646 15.86 29.8815 16.1335 29.0678 16.2022C28.2541 16.271 27.4363 16.1327 26.6904 15.8003C24.7407 14.8016 24.1138 12.1612 25.0276 10.2222C25.9413 8.28312 28.0557 7.03468 30.2285 6.67874",
				fill: "#FFE100"
			}), o.a.createElement("path", {
				d: "M30.2234 6.70437C30.2234 6.84781 29.8568 7.02844 29.2034 7.35781C28.3079 7.78652 27.4922 8.36505 26.7915 9.06844C26.3496 9.52813 26.0013 10.0694 25.7662 10.6622C25.5259 11.303 25.4635 11.9969 25.5856 12.6703C25.6967 13.3812 26.0405 14.0351 26.5631 14.5297C27.1303 15.0238 27.8679 15.2773 28.619 15.2363C29.4212 15.1929 30.2 14.9507 30.8853 14.5315C31.5706 14.1123 32.1409 13.5294 32.5449 12.835C32.9181 12.2251 33.1554 11.542 33.2409 10.8322C33.3093 10.2247 33.2422 9.60964 33.0443 9.03125C32.8745 8.611 32.6213 8.22954 32.2998 7.90996C31.9784 7.59037 31.5955 7.33928 31.1743 7.17188L30.7334 6.98594C30.6006 6.93281 30.489 6.89562 30.3934 6.85312C30.2074 6.76812 30.1065 6.68844 30.1118 6.61938C30.1171 6.55031 30.2234 6.49188 30.4359 6.44938C30.5597 6.41572 30.6857 6.39086 30.8131 6.375C30.9689 6.375 31.146 6.375 31.3443 6.375C31.862 6.43362 32.3626 6.59625 32.8159 6.85312C33.4476 7.21722 33.9647 7.75091 34.3087 8.39375C34.707 9.1685 34.906 10.0303 34.8878 10.9013C34.8642 11.8885 34.6094 12.8565 34.144 13.7275C33.6405 14.691 32.9115 15.5185 32.019 16.1394C31.0401 16.8273 29.8836 17.2183 28.6881 17.2656C28.0543 17.2918 27.4217 17.1916 26.827 16.9709C26.2323 16.7502 25.6875 16.4133 25.2243 15.98C24.3918 15.1629 23.8712 14.0804 23.7528 12.92C23.6314 11.9062 23.8048 10.8788 24.2521 9.96094C24.6371 9.20405 25.1807 8.53905 25.8459 8.01125C26.7532 7.2829 27.8325 6.79995 28.9803 6.60875C29.7506 6.49187 30.2021 6.57156 30.2234 6.70437Z",
				fill: "black"
			}), o.a.createElement("path", {
				d: "M30.8976 6.72683C31.1579 6.66308 31.5298 7.04558 31.7423 7.78933C31.9784 8.79378 31.8949 9.84689 31.5032 10.8015C31.2935 11.3272 31.0051 11.818 30.6479 12.2571C30.3463 12.6165 29.9873 12.9235 29.5854 13.1656C28.8948 13.5746 28.3636 13.58 28.2201 13.3515C28.0767 13.1231 28.2839 12.6928 28.5814 12.1456C28.9746 11.4865 29.3225 10.8013 29.6226 10.095C29.8963 9.36535 30.1269 8.62032 30.3132 7.86371C30.4726 7.23683 30.6161 6.79058 30.8976 6.72683Z",
				fill: "black"
			}), o.a.createElement("path", {
				d: "M41.5334 9.92461C41.4803 10.1849 40.4178 10.254 38.8028 9.79711C37.8882 9.51813 36.9937 9.17735 36.1253 8.77711C35.1627 8.31315 34.1598 7.93795 33.1291 7.65617C32.1244 7.42754 31.0907 7.35409 30.0638 7.43836C29.2286 7.52398 28.4086 7.7205 27.6253 8.02273C26.2494 8.55398 25.4578 9.14898 25.2347 8.93648C25.1391 8.84617 25.2028 8.56461 25.4738 8.16086C25.8736 7.59955 26.3788 7.12139 26.9613 6.75305C27.8287 6.18636 28.8003 5.79808 29.8194 5.61086C31.0702 5.37841 32.3551 5.4019 33.5966 5.67992C34.7826 5.99304 35.9183 6.47237 36.97 7.10367L39.3713 8.46367C40.6941 9.21804 41.5972 9.63773 41.5334 9.92461Z",
				fill: "black"
			}), o.a.createElement("path", {
				d: "M16.3469 27.1684C15.1834 31.5194 19.8691 30.6906 21.0909 30.3559C23.1767 29.6804 25.2069 28.8438 27.1631 27.8538C31.8594 25.6491 37.1719 27.8909 42.2559 28.2097C46.1712 28.4541 51.2234 27.5031 54.7031 25.4791C55.7226 24.8009 56.8041 24.221 57.9331 23.7472C59.0753 23.3488 60.9241 23.3169 61.9387 24.0235C63.575 25.1656 63.8087 27.9388 62.7941 29.7716C61.7794 31.6044 59.3409 32.6138 57.4497 33.0547C55.5584 33.4956 52.5303 33.4691 50.6178 33.7825C46.4581 34.4625 42.6491 36.7044 38.8825 38.7763C35.1159 40.8481 31.1369 42.8191 26.9294 42.8988C22.7219 42.9784 18.2116 40.6994 16.5966 36.3644",
				fill: "#6FC437"
			}), o.a.createElement("path", {
				d: "M16.5962 36.3647C16.6706 36.3382 16.8566 36.6729 17.2284 37.2732C17.7658 38.1426 18.4322 38.9254 19.2047 39.5947C19.7596 40.068 20.3591 40.4861 20.995 40.8432C21.7502 41.2551 22.5483 41.5829 23.375 41.8207C24.3242 42.0909 25.3048 42.2355 26.2916 42.251C27.4037 42.2551 28.5125 42.1303 29.5959 41.8791C32.1194 41.2339 34.543 40.2473 36.7997 38.9466C39.3072 37.6079 41.9263 35.9504 44.965 34.5797C46.5396 33.8536 48.1893 33.3031 49.8844 32.9382C51.6272 32.6706 53.3827 32.4933 55.1438 32.4069C55.9739 32.3443 56.7969 32.2092 57.6034 32.0032C58.4019 31.7924 59.1737 31.4912 59.9038 31.1054C60.5918 30.7561 61.1954 30.2612 61.6728 29.655C62.1005 29.05 62.344 28.3341 62.3741 27.5938C62.4391 26.8671 62.2836 26.1376 61.9278 25.5007C61.7735 25.2369 61.5631 25.0102 61.3116 24.8366C61.035 24.6788 60.7298 24.5776 60.4138 24.5391C59.6799 24.4319 58.9313 24.4937 58.225 24.7197C57.4612 25.0208 56.7297 25.3982 56.0416 25.846C55.2653 26.3294 54.4578 26.7607 53.6244 27.1369C52.8035 27.4992 51.9607 27.8097 51.1009 28.0666C49.4514 28.5604 47.7575 28.8913 46.0434 29.0547C44.4089 29.2203 42.7612 29.2079 41.1294 29.0175C39.5356 28.8263 38.08 28.5288 36.6722 28.2738C35.3402 28.0081 33.9938 27.8201 32.64 27.7107C31.4336 27.6159 30.2199 27.7001 29.0381 27.9604C28.7672 28.04 28.5069 28.1038 28.2253 28.1888L27.4603 28.481L25.8984 29.1663C24.8784 29.6125 23.9009 30.0057 22.9606 30.335C22.0782 30.665 21.1627 30.8983 20.23 31.031C19.4208 31.1435 18.5977 31.1056 17.8022 30.9194C17.4568 30.8459 17.1313 30.6986 16.848 30.4877C16.5647 30.2769 16.3302 30.0073 16.1606 29.6975C16.0412 29.4467 15.9657 29.1771 15.9375 28.9007C15.9375 28.7785 15.9375 28.6616 15.9375 28.5554L15.9747 28.2525C16.0038 27.969 16.0755 27.6914 16.1872 27.4291C16.258 27.252 16.3094 27.167 16.3413 27.1741C16.3731 27.1741 16.3891 27.2857 16.3891 27.4716C16.3709 27.7369 16.3709 28.0032 16.3891 28.2685V28.5394C16.3891 28.6297 16.4316 28.7254 16.4528 28.821C16.4983 29.0281 16.5753 29.227 16.6812 29.4107C16.8327 29.6195 17.0263 29.7941 17.2497 29.9232C17.473 30.0522 17.721 30.1328 17.9775 30.1597C18.6848 30.2584 19.4038 30.2332 20.1025 30.0854C20.9525 29.9041 21.782 29.6371 22.5781 29.2885C23.46 28.9219 24.395 28.4916 25.3725 28.0082L26.8919 27.2485L27.7631 26.8713C28.0659 26.7597 28.3741 26.6694 28.6875 26.5685C30.0025 26.2244 31.3619 26.0811 32.7197 26.1435C34.1446 26.2123 35.5639 26.3684 36.9697 26.611C38.4041 26.8341 39.8544 27.0944 41.3366 27.2379C42.8462 27.3836 44.3672 27.3676 45.8734 27.19C47.4612 27.0144 49.0284 26.687 50.5538 26.2125C51.334 25.9712 52.0987 25.682 52.8434 25.3466C53.5987 24.9951 54.3299 24.5941 55.0322 24.146C55.8266 23.6269 56.6721 23.1908 57.5556 22.8444C58.5801 22.4962 59.6729 22.3978 60.7431 22.5575C61.3352 22.6353 61.9048 22.8342 62.4166 23.1419C62.922 23.4764 63.3466 23.9192 63.6597 24.4382C64.2328 25.4266 64.4904 26.5665 64.3981 27.7054C64.344 28.834 63.9639 29.9227 63.3038 30.8397C62.6476 31.6843 61.8132 32.3736 60.86 32.8585C59.9903 33.3172 59.0704 33.6737 58.1188 33.921C57.2003 34.1502 56.2635 34.2977 55.3191 34.3619C53.5234 34.5266 51.7916 34.5319 50.2563 34.8347C48.6967 35.1505 47.1756 35.6331 45.7194 36.2744C42.8241 37.5229 40.1891 39.106 37.5806 40.4235C35.165 41.7338 32.5747 42.6926 29.8881 43.271C28.6882 43.5036 27.4646 43.591 26.2438 43.5313C24.1971 43.4083 22.2153 42.7666 20.485 41.6666C19.8217 41.2309 19.2072 40.7251 18.6522 40.1579C17.8852 39.3815 17.2771 38.463 16.8619 37.4538C16.5962 36.7738 16.5378 36.386 16.5962 36.3647Z",
				fill: "black"
			}), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M15.9056 56.1432C15.9322 56.0423 16.66 56.2016 18.0306 56.2973C19.9614 56.4358 21.9006 56.1994 23.7416 55.6013V56.6054C21.675 56.106 19.2419 55.5004 16.5006 54.8098C16.3366 54.7683 16.1933 54.6685 16.0975 54.5291C16.0018 54.3896 15.9601 54.22 15.9802 54.052C16.0004 53.8841 16.0811 53.7292 16.2072 53.6164C16.3333 53.5036 16.4962 53.4406 16.6653 53.4391L24.3844 53.3807L24.2038 54.9745L16.15 53.3435C15.9098 53.3203 15.6886 53.2025 15.5352 53.0162C15.3818 52.8299 15.3086 52.5903 15.3319 52.3501C15.3551 52.1099 15.4729 51.8887 15.6592 51.7353C15.8455 51.5818 16.0851 51.5087 16.3253 51.532H24.5703L24.2516 53.4126L15.7091 50.496C15.474 50.4083 15.2803 50.2357 15.1661 50.0122C15.0519 49.7887 15.0256 49.5306 15.0922 49.2887C15.1589 49.0468 15.3137 48.8386 15.5262 48.7051C15.7387 48.5716 15.9935 48.5226 16.2403 48.5676C18.6243 49.1407 21.1091 49.1498 23.4972 48.5941C23.8691 48.5091 24.2356 48.4082 24.5969 48.2966L24.7085 50.257C21.5321 49.6143 18.5436 48.2573 15.9694 46.2885C15.7461 46.1476 15.5879 45.9238 15.5296 45.6662C15.4713 45.4087 15.5177 45.1386 15.6586 44.9152C15.7995 44.6919 16.0233 44.5337 16.2809 44.4754C16.5384 44.4172 16.8086 44.4636 17.0319 44.6045C19.6027 45.9258 22.5624 46.2802 25.3725 45.6032L25.4681 47.4626C21.9273 46.9125 18.653 45.2512 16.1181 42.7185C15.9739 42.5722 15.8867 42.3791 15.8724 42.1741C15.8581 41.9691 15.9176 41.7658 16.0402 41.6009C16.1627 41.4359 16.3403 41.3203 16.5407 41.2749C16.7411 41.2295 16.9511 41.2573 17.1328 41.3532C20.4843 43.127 24.3187 43.7716 28.066 43.1913L28.2147 44.5513C26.3054 44.5726 24.4142 44.1794 22.6716 43.3989C20.9289 42.6183 19.3764 41.4691 18.121 40.0304C16.3997 37.9904 16.081 36.5029 16.1606 36.487C16.2403 36.471 16.8725 37.7513 18.6628 39.5151C19.7495 40.5677 21.0069 41.4281 22.3816 42.0598C24.1869 42.8963 26.1693 43.2793 28.1563 43.1754C28.3281 43.1674 28.4966 43.2244 28.6284 43.3349C28.7602 43.4454 28.8456 43.6014 28.8677 43.772C28.8898 43.9426 28.8469 44.1152 28.7476 44.2557C28.6483 44.3961 28.4998 44.4941 28.3316 44.5301C24.2582 45.3238 20.0364 44.7407 16.3306 42.8726L17.3347 41.4966C19.6443 43.7046 22.5867 45.1349 25.7497 45.5873C25.9635 45.6218 26.1591 45.7283 26.3042 45.8891C26.4492 46.0499 26.535 46.2554 26.5474 46.4716C26.5598 46.6878 26.498 46.9018 26.3723 47.0781C26.2466 47.2545 26.0644 47.3826 25.856 47.4413C22.5937 48.2777 19.1387 47.9001 16.1341 46.3788L17.1966 44.6895C19.5492 46.4691 22.2731 47.6949 25.1653 48.2754C25.3887 48.3155 25.592 48.4297 25.7425 48.5995C25.8929 48.7694 25.9818 48.985 25.9947 49.2115C26.0076 49.4381 25.9437 49.6624 25.8135 49.8482C25.6833 50.034 25.4942 50.1705 25.2769 50.2357C24.8678 50.3579 24.4588 50.4695 24.0444 50.5704C21.353 51.1955 18.5524 51.1791 15.8685 50.5226L16.3997 48.5995L24.9369 51.5745C25.1503 51.6522 25.3295 51.8026 25.4431 51.9993C25.5567 52.196 25.5975 52.4264 25.5582 52.6502C25.5189 52.8739 25.4021 53.0766 25.2282 53.2228C25.0544 53.369 24.8347 53.4494 24.6075 53.4498L16.3625 53.3595L16.5591 51.5638L24.5863 53.3966C24.7668 53.4559 24.9211 53.5761 25.0227 53.7367C25.1243 53.8973 25.1667 54.0883 25.1429 54.2768C25.119 54.4653 25.0302 54.6397 24.8918 54.7699C24.7534 54.9001 24.574 54.978 24.3844 54.9904L16.6706 54.8045L16.8619 53.4338C19.5766 54.2307 21.9778 54.9479 24.0125 55.5588H24.0444C24.1452 55.5971 24.232 55.6651 24.2932 55.7538C24.3544 55.8425 24.3872 55.9478 24.3872 56.0556C24.3872 56.1634 24.3544 56.2686 24.2932 56.3573C24.232 56.446 24.1452 56.514 24.0444 56.5523C22.0621 57.0867 19.985 57.1684 17.9669 56.7913C16.5538 56.5629 15.8791 56.2229 15.9056 56.1432Z",
				fill: "#46A508"
			}))), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M49.2576 33.4109C49.2895 33.5065 48.3438 33.9421 46.4526 34.16C45.2942 34.2589 44.1279 34.2053 42.9835 34.0006C41.4356 33.7344 39.9444 33.2062 38.5741 32.4387L39.5145 31.6684C39.8429 32.4763 40.396 33.1732 41.1082 33.6765C41.8809 34.2352 42.8109 34.5347 43.7645 34.5318C43.952 34.5325 44.133 34.6007 44.2744 34.7239C44.4158 34.8471 44.5082 35.017 44.5346 35.2027C44.561 35.3884 44.5198 35.5773 44.4184 35.7351C44.3169 35.8928 44.1621 36.0088 43.9823 36.0618C41.9311 36.6168 39.7691 36.615 37.7188 36.0565C35.4533 35.4519 33.4122 34.2025 31.8432 32.46L33.4688 31.7481C33.6742 33.1589 34.3636 34.4544 35.419 35.4129C36.4744 36.3714 37.8301 36.9332 39.2541 37.0021C39.5029 37.004 39.7421 37.0987 39.9247 37.2676C40.1074 37.4366 40.2204 37.6676 40.2417 37.9155C40.263 38.1634 40.1909 38.4103 40.0397 38.6079C39.8885 38.8054 39.669 38.9395 39.4241 38.9837C36.6893 39.444 33.8798 38.9167 31.4979 37.4962C29.5513 36.3645 27.9766 34.6901 26.9663 32.6778L28.8682 32.3059C28.8229 33.9808 29.3879 35.615 30.4581 36.9042C31.5284 38.1933 33.0308 39.0495 34.6854 39.3131C34.9012 39.3677 35.0907 39.4972 35.22 39.6784C35.3494 39.8596 35.4102 40.0809 35.3917 40.3027C35.3732 40.5246 35.2766 40.7327 35.1191 40.89C34.9615 41.0474 34.7532 41.1437 34.5313 41.1618C29.6802 40.9632 25.0459 39.0982 21.4095 35.8812L22.6154 35.0631C23.1301 36.7477 24.165 38.2262 25.5717 39.2865C26.9784 40.3467 28.6847 40.9344 30.446 40.9653C31.4366 40.9885 32.4251 40.8631 33.3785 40.5934C34.0426 40.4075 34.3932 40.2746 34.441 40.349C34.4888 40.4234 34.1913 40.6678 33.5432 40.9971C32.5824 41.4638 31.5389 41.7364 30.4726 41.7993C28.7433 41.9263 27.0146 41.544 25.5001 40.6996C23.473 39.5681 21.9307 37.7329 21.1651 35.5412C21.1104 35.3879 21.1075 35.2208 21.1569 35.0656C21.2063 34.9105 21.3052 34.7758 21.4385 34.6823C21.5718 34.5889 21.7321 34.5417 21.8948 34.5481C22.0575 34.5545 22.2136 34.6141 22.3391 34.7178H22.3657C25.8186 37.5513 30.1191 39.15 34.5845 39.2599L34.457 41.1299C32.3117 40.8323 30.3519 39.7529 28.9538 38.0989C27.5556 36.4448 26.8176 34.3326 26.8813 32.1678C26.8961 31.9485 26.9825 31.7402 27.1271 31.5747C27.2717 31.4092 27.4667 31.2958 27.682 31.2518C27.8973 31.2077 28.1211 31.2356 28.319 31.331C28.517 31.4264 28.6782 31.5841 28.7779 31.78C29.6236 33.4296 30.9254 34.8015 32.5285 35.7325C34.4951 36.9066 36.8105 37.3558 39.0735 37.0021L39.2382 38.9837C37.3357 38.9005 35.5245 38.1446 34.1274 36.8506C32.7303 35.5566 31.838 33.8086 31.6095 31.9181C31.5927 31.7204 31.6389 31.5225 31.7415 31.3527C31.844 31.1829 31.9977 31.0498 32.1804 30.9726C32.3631 30.8954 32.5656 30.8779 32.7589 30.9228C32.9521 30.9676 33.1262 31.0724 33.2563 31.2221C34.5188 32.6497 36.1403 33.7135 37.9526 34.3029C39.7649 34.8924 41.7019 34.9861 43.5626 34.5743L43.7538 36.115C42.481 36.0776 41.2538 35.6325 40.2529 34.8453C39.347 34.1481 38.6654 33.2006 38.2926 32.12V32.0934C38.2495 31.9688 38.2461 31.8339 38.2828 31.7072C38.3196 31.5806 38.3947 31.4685 38.4978 31.3863C38.601 31.3041 38.727 31.256 38.8587 31.2485C38.9903 31.241 39.1211 31.2744 39.2329 31.3443C40.4533 32.1095 41.7874 32.6762 43.1854 33.0231C44.2447 33.2852 45.3297 33.4295 46.4207 33.4534C48.227 33.4693 49.2257 33.2728 49.2576 33.4109Z",
				fill: "#46A508"
			}))), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M60.5631 23.7427C60.5631 23.6524 60.9456 23.6046 61.429 23.9711C61.7639 24.2552 62.0232 24.6179 62.1836 25.0268C62.344 25.4356 62.4005 25.8779 62.3481 26.3139C62.2524 27.5146 61.2856 28.7152 59.9202 29.3155C58.5549 29.9158 56.8974 29.9211 55.3887 29.8467L55.9731 28.0724C57.1635 28.7524 58.5499 29.0072 59.9043 28.7949C60.7699 28.6681 61.5959 28.3485 62.3215 27.8599H62.3534C62.5116 27.7504 62.6985 27.6897 62.8909 27.6855C63.0832 27.6812 63.2726 27.7336 63.4356 27.8359C63.5985 27.9383 63.7278 28.0863 63.8074 28.2615C63.887 28.4367 63.9134 28.6314 63.8834 28.8214C63.7869 29.3568 63.5845 29.8676 63.2881 30.3237C62.9916 30.7799 62.607 31.1722 62.1568 31.4777C61.7608 31.7608 61.3236 31.9812 60.8606 32.1311C60.4399 32.2674 60.005 32.3548 59.5643 32.3914C58.8034 32.4487 58.0382 32.4005 57.2906 32.248C56.6732 32.1277 56.0658 31.9607 55.4737 31.7486C53.3487 30.9517 52.3234 29.9742 52.4456 29.7936C52.5677 29.613 53.7737 30.1124 55.819 30.5108C56.9795 30.76 58.1732 30.8157 59.3518 30.6755C59.9645 30.5886 60.5445 30.3452 61.0359 29.9689C61.5085 29.6212 61.8268 29.1028 61.9231 28.5239L63.4849 29.4642C62.5166 30.1633 61.3941 30.6188 60.2124 30.7924C58.3863 31.078 56.5186 30.6889 54.9584 29.698H54.9212C54.7438 29.5799 54.6109 29.4059 54.5437 29.2036C54.4765 29.0014 54.4788 28.7824 54.5502 28.5816C54.6216 28.3808 54.758 28.2096 54.9379 28.0952C55.1177 27.9808 55.3306 27.9298 55.5427 27.9502C57.0462 28.1149 58.3265 28.1786 59.3146 27.8333C59.7356 27.7196 60.1237 27.5077 60.4469 27.215C60.7702 26.9222 61.0193 26.557 61.174 26.1492C61.2537 25.8645 61.2764 25.5668 61.2409 25.2733C61.2053 24.9797 61.1122 24.6961 60.9668 24.4386C60.7649 24.0242 60.5312 23.8596 60.5631 23.7427Z",
				fill: "#46A508"
			}))), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M40.0247 15.3553C39.844 15.3606 39.844 14.3459 39.2065 12.7999C38.8191 11.8681 38.2807 11.0065 37.6128 10.2499C36.7769 9.2701 35.721 8.50189 34.5315 8.00807L35.4028 6.83932C36.6817 8.3338 37.5026 10.1654 37.7668 12.1146C38.0973 14.3746 37.6794 16.6806 36.5768 18.6809L34.9406 17.6503C35.6649 16.5473 36.0896 15.2749 36.1731 13.9581C36.2556 12.5818 35.954 11.2097 35.3018 9.99494C34.9259 9.2886 34.4399 8.64661 33.8622 8.09307L35.4187 6.83932C36.1252 8.00669 36.5313 9.33095 36.6007 10.6937C36.6701 12.0564 36.4007 13.4151 35.8165 14.6482C35.2323 15.8813 34.3516 16.9504 33.2531 17.7598C32.1546 18.5692 30.8726 19.0938 29.5218 19.2865H29.49C29.2939 19.304 29.098 19.252 28.9363 19.1396C28.7747 19.0272 28.6578 18.8616 28.6059 18.6717C28.554 18.4819 28.5705 18.2798 28.6524 18.1009C28.7344 17.9219 28.8767 17.7775 29.0543 17.6928C30.6463 17.0222 31.9917 15.8754 32.9059 14.4096C33.6102 13.264 34.0326 11.9677 34.1384 10.6271C34.2044 9.73943 34.158 8.84695 34.0003 7.97088C33.8993 7.35463 33.8303 7.01463 33.9153 6.97745C34.0003 6.94026 34.2181 7.22182 34.489 7.82745C34.8665 8.71431 35.0755 9.66374 35.1053 10.6271C35.1566 12.1756 34.8013 13.7106 34.0747 15.079C33.1075 16.8959 31.5771 18.3499 29.7131 19.2228L29.2456 17.629C30.2238 17.438 31.1474 17.032 31.9495 16.4403C32.7516 15.8486 33.4122 15.086 33.8834 14.2078C34.3808 13.2216 34.622 12.1262 34.5849 11.0223C34.5477 9.91845 34.2334 8.84169 33.6709 7.8912C33.5465 7.6823 33.5017 7.43553 33.5448 7.19626C33.5878 6.95698 33.7157 6.74126 33.905 6.58876C34.0944 6.43626 34.3324 6.35722 34.5753 6.36616C34.8183 6.37511 35.0499 6.47144 35.2275 6.63745C35.9671 7.33144 36.5897 8.14054 37.0709 9.03338C37.8952 10.5833 38.2636 12.335 38.1334 14.0856C38.0122 15.7483 37.4512 17.3489 36.5078 18.7234C36.3669 18.9397 36.1458 19.0911 35.8933 19.1444C35.6407 19.1977 35.3773 19.1485 35.1611 19.0076C34.9448 18.8667 34.7933 18.6457 34.74 18.3931C34.6867 18.1405 34.7359 17.8772 34.8768 17.6609C35.7409 16.1231 36.1392 14.3673 36.0232 12.6072C35.9072 10.8471 35.2819 9.15878 34.2234 7.74776L34.1915 7.70526C34.0908 7.57321 34.0372 7.41125 34.0393 7.24521C34.0413 7.07916 34.0988 6.91857 34.2027 6.78901C34.3066 6.65946 34.4509 6.5684 34.6125 6.53034C34.7741 6.49228 34.9439 6.50942 35.0947 6.57901C36.4742 7.22799 37.6661 8.21697 38.5584 9.45307C39.2257 10.3634 39.7126 11.3931 39.9928 12.4865C40.4337 14.3459 40.1362 15.3712 40.0247 15.3553Z",
				fill: "#46A508"
			}))), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M53.1677 6.63077C53.1252 6.5139 53.8318 6.09952 55.2927 5.89234C56.1786 5.79214 57.0746 5.82978 57.9489 6.0039C59.1332 6.2359 60.2598 6.69992 61.2639 7.36921C61.4041 7.46442 61.5067 7.60555 61.5539 7.76827C61.6012 7.93099 61.5902 8.1051 61.5228 8.26059C61.4555 8.41607 61.336 8.54318 61.185 8.62C61.0339 8.69682 60.8608 8.71853 60.6955 8.6814H60.6317C59.5297 8.427 58.3818 8.4489 57.2902 8.74515C56.0696 9.0716 54.9651 9.73426 54.1027 10.6576L52.9127 9.20202C54.2865 8.31694 55.8747 7.8212 57.508 7.76765C59.2396 7.7375 60.9488 8.16251 62.4646 9.00015C62.6576 9.10657 62.8108 9.27296 62.9009 9.47417C62.9909 9.67538 63.013 9.90045 62.9638 10.1153C62.9146 10.3302 62.7967 10.5232 62.6281 10.6652C62.4594 10.8071 62.2491 10.8903 62.0289 10.902H61.9971L61.2533 10.9339C59.3054 11.069 57.4233 11.694 55.7814 12.7508C54.3007 13.7231 53.035 14.9888 52.0627 16.4695L50.6336 15.407C52.0227 13.9334 53.7388 12.807 55.6433 12.1186C57.0915 11.5828 58.6255 11.3163 60.1696 11.3323C62.7408 11.3855 64.0742 12.1239 64.0158 12.2673C63.9627 12.4958 62.5655 12.1398 60.2227 12.3948C58.8329 12.549 57.4759 12.92 56.2011 13.4945C54.5737 14.2088 53.1229 15.2715 51.9511 16.6076C51.8028 16.7769 51.5962 16.8843 51.3724 16.9085C51.1487 16.9326 50.924 16.8719 50.7429 16.7382C50.5618 16.6046 50.4375 16.4078 50.3946 16.1868C50.3517 15.9658 50.3934 15.7368 50.5114 15.5451C51.5705 13.7663 53.0068 12.2412 54.7189 11.0773C56.6201 9.81518 58.8172 9.06999 61.0939 8.91515L61.9652 8.87796L61.4924 10.7798C60.2871 10.0943 58.9264 9.72857 57.5399 9.71734C56.2508 9.74296 54.9916 10.1096 53.8902 10.7798H53.8583C53.6629 10.8955 53.432 10.9361 53.2088 10.894C52.9856 10.8519 52.7854 10.73 52.6455 10.5511C52.5056 10.3722 52.4356 10.1484 52.4486 9.92169C52.4616 9.69493 52.5567 9.48066 52.7161 9.3189C53.857 8.16683 55.3106 7.37447 56.8971 7.03984C58.2706 6.73971 59.6986 6.80195 61.0408 7.22046L60.4086 8.52202C58.934 7.40477 57.1565 6.75858 55.3086 6.66796C53.9805 6.63609 53.2102 6.79015 53.1677 6.63077Z",
				fill: "#46A508"
			}))), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M12.0118 17.4526C11.8683 17.4101 11.9746 16.353 12.7927 14.6848C13.9874 12.3457 15.8321 10.4014 18.1052 9.08545C18.2714 8.9849 18.4679 8.94637 18.6598 8.97668C18.8517 9.00698 19.0267 9.10417 19.1539 9.25105C19.2811 9.39793 19.3522 9.58505 19.3547 9.77932C19.3573 9.97359 19.291 10.1625 19.1677 10.3126L19.1305 10.3551C17.6679 12.1595 16.8624 14.4075 16.8461 16.7301L14.8752 16.5389C15.4115 13.1328 16.9269 9.95615 19.2368 7.39608C19.3903 7.17839 19.6241 7.03063 19.8866 6.9853C20.1491 6.93997 20.4189 7.00078 20.6366 7.15436C20.8543 7.30793 21.0021 7.5417 21.0474 7.80422C21.0927 8.06674 21.0319 8.33652 20.8783 8.5542C19.6049 10.865 19.1446 13.5367 19.5715 16.1405L17.813 16.3264C17.8123 13.1603 18.6717 10.0534 20.2993 7.33764C21.4946 5.40389 22.5199 4.57514 22.6474 4.68139C22.7749 4.78764 22.0896 5.84483 21.2502 7.82108C20.0689 10.4829 19.5094 13.3789 19.614 16.2892C19.6172 16.5069 19.5404 16.7181 19.398 16.8828C19.2556 17.0475 19.0577 17.1541 18.8418 17.1823C18.626 17.2105 18.4073 17.1584 18.2274 17.0358C18.0475 16.9133 17.9189 16.7288 17.8661 16.5176V16.4805C17.2198 13.4588 17.6659 10.3058 19.1252 7.58201L20.7508 8.73483C18.7241 11.0332 17.3646 13.8421 16.8196 16.8576V16.8842C16.7871 17.1368 16.6574 17.3668 16.4579 17.5251C16.2585 17.6835 16.0051 17.7578 15.7517 17.7322C15.4984 17.7066 15.265 17.5831 15.1013 17.388C14.9376 17.1929 14.8564 16.9416 14.8752 16.6876C14.948 13.93 16.0095 11.2904 17.8661 9.25014L18.8861 10.5198C16.7786 11.6163 14.9671 13.2055 13.6055 15.1523C12.6068 16.5814 12.219 17.5323 12.0118 17.4526Z",
				fill: "#46A508"
			}))), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M48.6468 10.7373C48.5512 10.8436 48.2537 10.7373 47.8181 10.5089C47.5835 10.3898 47.3356 10.2989 47.0796 10.2379C46.8292 10.1815 46.5671 10.2115 46.3359 10.3229C46.2563 10.366 46.1943 10.4355 46.1606 10.5195C46.1021 10.6258 46.0225 10.8329 45.8737 11.1304C45.7765 11.3261 45.6492 11.5054 45.4965 11.6617C45.2541 11.903 44.9364 12.0541 44.5962 12.0899C44.256 12.1256 43.9138 12.0439 43.6265 11.8583C43.405 11.7189 43.2121 11.5386 43.0581 11.327C42.9376 11.1599 42.8327 10.982 42.7446 10.7958C42.7021 10.7054 42.665 10.6151 42.6331 10.5301C42.6128 10.4758 42.5898 10.4226 42.564 10.3708C42.5218 10.2741 42.4624 10.1859 42.3887 10.1104C42.4404 10.1381 42.4971 10.1552 42.5555 10.1606C42.6139 10.1661 42.6728 10.1599 42.7287 10.1423C42.8202 10.1125 42.8988 10.0526 42.9518 9.97232C42.9492 10.0219 42.9492 10.0715 42.9518 10.1211C42.9445 10.252 42.9445 10.3833 42.9518 10.5142C42.9518 11.0454 42.9518 11.5767 42.9518 12.0654C42.954 12.2782 42.8878 12.4861 42.763 12.6585C42.6382 12.8308 42.4613 12.9585 42.2584 13.0228C42.0555 13.087 41.8374 13.0845 41.6361 13.0154C41.4348 12.9463 41.261 12.8145 41.1403 12.6392C40.0435 11.1035 38.7321 9.73307 37.2462 8.56982C36.1146 7.66138 35.3496 7.14607 35.4506 6.90169C35.5515 6.65732 36.5131 6.77419 37.9421 7.43294C39.8465 8.36926 41.4988 9.74829 42.7606 11.4545L40.9065 12.0389V10.4876C40.8931 10.2771 40.8931 10.066 40.9065 9.85544C40.9372 9.56904 41.0181 9.29029 41.1456 9.032C41.3353 8.64295 41.6716 8.34495 42.0806 8.20325C42.2923 8.13438 42.516 8.11061 42.7375 8.13349C42.9589 8.15636 43.1731 8.22537 43.3662 8.33607C43.626 8.49178 43.849 8.70204 44.0196 8.95232C44.1488 9.14319 44.2557 9.34816 44.3384 9.56325C44.3756 9.65357 44.4234 9.79169 44.4393 9.8395L44.4925 9.99888C44.5236 10.0847 44.5609 10.1681 44.604 10.2486L44.6412 10.3176C44.6076 10.3538 44.5774 10.3929 44.5509 10.4345C44.4393 10.5992 44.4765 10.6576 44.4659 10.5461C44.4553 10.4345 44.4659 10.5461 44.4659 10.5461C44.4559 10.5252 44.4434 10.5056 44.4287 10.4876C44.4014 10.4452 44.3693 10.4059 44.3331 10.3708C44.2959 10.3389 44.3756 10.3229 44.4234 10.2379C44.5788 10.0051 44.7454 9.77989 44.9228 9.56325C45.1749 9.26755 45.5128 9.05773 45.8896 8.96294C46.4432 8.82939 47.0268 8.91304 47.5206 9.19669C47.8395 9.37488 48.1195 9.61512 48.344 9.90325C48.6575 10.3442 48.7425 10.6258 48.6468 10.7373Z",
				fill: "#46A508"
			}))), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M13.4247 56.2881C13.4619 56.3678 12.3622 56.9468 10.1204 56.8884C8.52214 56.8154 6.96021 56.3876 5.54789 55.6359C4.13556 54.8843 2.90827 53.8277 1.95505 52.5428C1.88048 52.4326 1.84101 52.3025 1.84181 52.1695C1.84261 52.0365 1.88366 51.9068 1.95954 51.7976C2.03543 51.6884 2.14261 51.6047 2.26697 51.5575C2.39134 51.5104 2.52706 51.5019 2.6563 51.5334H2.69349C5.22456 52.2627 7.86652 52.5291 10.4922 52.3196L10.3435 53.9134C8.66603 53.4903 7.10475 52.6965 5.77444 51.5905C4.44414 50.4845 3.37864 49.0944 2.6563 47.5225C2.57928 47.3506 2.5566 47.1593 2.59131 46.9741C2.62601 46.789 2.71644 46.6189 2.85049 46.4866C2.98454 46.3543 3.15581 46.2661 3.34137 46.2338C3.52693 46.2015 3.71793 46.2267 3.8888 46.3059L8.2238 48.3778L7.1188 49.8971C6.19471 48.8709 5.39578 47.7385 4.7388 46.5237C4.08116 45.2873 3.5302 43.997 3.09192 42.6668C3.02161 42.4768 3.01078 42.2698 3.06087 42.0735C3.11096 41.8771 3.2196 41.7006 3.37236 41.5674C3.52512 41.4343 3.71478 41.3507 3.91614 41.3279C4.1175 41.3051 4.32105 41.3441 4.49974 41.4397L9.24911 43.9312L8.05911 45.525C7.52613 44.9916 7.03088 44.4217 6.57692 43.8197C5.01261 41.7008 3.95654 39.2506 3.49036 36.6584C3.45006 36.4414 3.48278 36.2171 3.58343 36.0206C3.68408 35.8242 3.84697 35.6666 4.04666 35.5725C4.24635 35.4785 4.47158 35.4532 4.68715 35.5007C4.90272 35.5481 5.09649 35.6657 5.23817 35.835C6.49203 37.3474 8.12306 38.502 9.9663 39.1818L8.96755 40.8181C7.61693 39.5707 6.53887 38.0574 5.80109 36.3734C5.0633 34.6894 4.68174 32.871 4.68036 31.0325C4.6779 30.8215 4.75068 30.6166 4.88565 30.4545C5.02062 30.2924 5.20895 30.1836 5.41684 30.1478C5.62473 30.112 5.83859 30.1514 6.02003 30.259C6.20148 30.3666 6.33865 30.5354 6.40693 30.735C6.7417 31.6355 7.27967 32.4467 7.97901 33.1055C8.67834 33.7643 9.52019 34.2529 10.4391 34.5334L9.56255 35.7447C8.0215 33.37 6.98869 30.702 6.52911 27.9087C6.17105 25.8004 6.14954 23.6487 6.46536 21.5337C6.99661 18.0434 8.11224 16.3275 8.20786 16.3806C8.40974 16.4497 7.6288 18.2665 7.36849 21.6347C7.22319 23.6548 7.3681 25.6853 7.7988 27.6643C8.34628 30.2355 9.39708 32.6729 10.8907 34.8362C10.9836 34.9708 11.0332 35.1306 11.0327 35.2941C11.0323 35.4577 10.9819 35.6172 10.8883 35.7512C10.7946 35.8853 10.6622 35.9876 10.5089 36.0443C10.3555 36.1011 10.1884 36.1096 10.03 36.0687C8.83993 35.7507 7.74111 35.1576 6.82207 34.3373C5.90304 33.517 5.18946 32.4924 4.7388 31.3459L6.46536 31.0325C6.50371 32.6056 6.86108 34.1546 7.51583 35.5856C8.17059 37.0166 9.10908 38.2997 10.2744 39.3572C10.4439 39.5081 10.5553 39.7135 10.5892 39.9379C10.6231 40.1623 10.5774 40.3915 10.4601 40.5858C10.3428 40.78 10.1612 40.9271 9.94683 41.0016C9.73244 41.076 9.49877 41.0731 9.2863 40.9934C8.226 40.6058 7.2178 40.0883 6.28474 39.4528C5.33029 38.7879 4.46756 38.0002 3.7188 37.11L5.46661 36.2706C5.88363 38.5773 6.82314 40.758 8.21317 42.6456C8.61082 43.1704 9.04392 43.6674 9.50942 44.1331C9.67281 44.3058 9.76996 44.5307 9.78377 44.7681C9.79757 45.0054 9.72714 45.2401 9.58489 45.4306C9.44263 45.6211 9.23769 45.7553 9.00618 45.8095C8.77468 45.8637 8.53147 45.8344 8.31942 45.7268L3.57005 43.23L4.98849 42.024C5.71117 44.4427 6.92667 46.6856 8.55849 48.6115C8.70634 48.7764 8.79276 48.9872 8.80313 49.2085C8.81351 49.4297 8.74721 49.6477 8.61544 49.8257C8.48367 50.0037 8.2945 50.1307 8.0799 50.1853C7.86529 50.24 7.6384 50.2189 7.43755 50.1256L3.13442 48.0006L4.37224 46.7521C4.9624 48.0897 5.83933 49.2813 6.94096 50.2424C8.04259 51.2036 9.342 51.9109 10.7472 52.3143C10.9321 52.3663 11.0926 52.4821 11.2003 52.6411C11.3079 52.8001 11.3558 52.9921 11.3355 53.183C11.3151 53.374 11.2278 53.5515 11.089 53.6843C10.9502 53.817 10.7689 53.8963 10.5772 53.9081C7.77483 54.0597 4.96889 53.6831 2.30567 52.7978L3.05474 51.7884C3.96665 53.1458 5.20285 54.2541 6.6513 55.0131C7.7542 55.5968 8.94918 55.9868 10.1841 56.1659C12.2188 56.4421 13.3929 56.1234 13.4247 56.2881Z",
				fill: "#46A508"
			}))), o.a.createElement("path", {
				d: "M3.83093 57.9069C3.93186 57.211 12.4584 57.9494 24.1512 58.5444L22.6053 59.915C22.7157 57.0513 23.1018 54.2048 23.7581 51.4151C24.1151 49.9196 24.5622 48.4472 25.0969 47.0057C25.3589 46.2973 25.6458 45.6067 25.9575 44.9338C26.1116 44.5938 26.2762 44.2644 26.4462 43.9351C26.6162 43.6057 26.7809 43.2976 27.0147 42.9204C27.2088 42.6072 27.5177 42.3823 27.8753 42.2935C29.2406 41.9535 30.5953 41.5976 31.7853 41.231L32.2156 41.0822L32.6672 40.9122L33.5544 40.5776C34.1387 40.3544 34.7054 40.1295 35.2544 39.9029C37.4484 39.0051 39.345 38.1019 40.9069 37.3157C44.0253 35.7219 45.8475 34.6594 46.0653 34.9569C46.2831 35.2544 44.8009 36.7951 41.8153 38.8722C40.0442 40.094 38.189 41.1894 36.2637 42.1501C35.7148 42.4298 35.1428 42.7043 34.5478 42.9735L33.6447 43.3772L33.1825 43.5791L32.6778 43.781C31.3497 44.3122 30.0216 44.7001 28.5766 45.1144L29.4425 44.4769C29.3256 44.6841 29.1662 45.0082 29.0281 45.2791C28.89 45.5501 28.7519 45.8688 28.6191 46.1716C28.3534 46.7826 28.0878 47.4147 27.8753 48.0682C27.4027 49.4081 27.0002 50.7717 26.6694 52.1535C26.069 54.7638 25.6781 57.4178 25.5006 60.0904V60.1382C25.4878 60.326 25.438 60.5095 25.3541 60.678C25.2702 60.8465 25.1538 60.9968 25.0116 61.1202C24.8695 61.2436 24.7043 61.3377 24.5257 61.3971C24.347 61.4565 24.1584 61.48 23.9706 61.4663C12.1556 60.4835 3.71936 58.5869 3.83093 57.9069Z",
				fill: "black"
			}), o.a.createElement("path", {
				d: "M61.0938 23.0134C61.0035 22.9019 61.4179 22.4344 62.1563 21.6534C63.2259 20.6567 64.0872 19.4578 64.6904 18.1259C64.8536 17.7096 64.9625 17.2739 65.0144 16.8297C65.0554 16.3424 65.0376 15.8518 64.9613 15.3688C64.8863 14.82 64.7745 14.2769 64.6266 13.7431C64.5519 13.4714 64.4632 13.2036 64.361 12.9409C64.2547 12.6541 64.1379 12.3725 64.0157 12.0856C63.5273 10.9102 62.9033 9.7959 62.1563 8.76532C61.405 7.69276 60.4135 6.81047 59.261 6.18876C58.6792 5.87159 58.0647 5.61864 57.4282 5.43438C56.817 5.26316 56.1873 5.16683 55.5529 5.14751C54.2787 5.13018 53.007 5.26573 51.7651 5.55126C50.5326 5.80626 49.3319 6.11438 48.1685 6.3322C47.0724 6.55643 45.9563 6.66857 44.8376 6.66688C43.1679 6.69204 41.532 6.19624 40.1572 5.24845C39.2169 4.53126 38.9566 3.9097 39.0522 3.83532C39.1479 3.76095 39.626 4.14345 40.5663 4.57376C41.9042 5.15017 43.3663 5.37862 44.8163 5.23782C45.832 5.1476 46.838 4.96986 47.8232 4.70657C48.8857 4.43032 50.081 4.06907 51.3719 3.74501C52.758 3.37292 54.1868 3.18361 55.6219 3.18188C56.4224 3.19139 57.2185 3.30206 57.9913 3.51126C58.7736 3.72447 59.5293 4.02566 60.2438 4.40907C61.6616 5.17264 62.8751 6.26585 63.7819 7.59657C64.6041 8.77137 65.2736 10.046 65.7741 11.3897C65.891 11.7031 66.0079 12.0166 66.1088 12.33C66.2182 12.6525 66.3104 12.9806 66.3851 13.3128C66.5253 13.9354 66.6194 14.5676 66.6666 15.2041C66.7219 15.8263 66.6969 16.453 66.5922 17.0688C66.4819 17.6388 66.2943 18.1911 66.0344 18.7103C65.5981 19.5601 65.0175 20.3277 64.3185 20.9788C63.8132 21.4539 63.2675 21.884 62.6876 22.2644C61.7526 22.8753 61.1841 23.1197 61.0938 23.0134Z",
				fill: "black"
			}), o.a.createElement("path", {
				d: "M56.2864 52.0966C56.7114 49.2544 56.1217 46.7841 53.2636 44.1278C51.881 42.8163 50.2426 41.8044 48.4509 41.1554C46.6592 40.5063 44.7528 40.2342 42.8511 40.3559C44.8569 39.2047 47.1259 38.5906 49.4386 38.5729C51.7513 38.5552 54.0294 39.1346 56.0526 40.255C60.1061 42.5341 62.7092 45.9978 64.0214 50.9119C64.8555 53.8096 65.435 56.7746 65.7533 59.7731C65.9604 61.4519 66.2526 63.5609 65.1104 64.7137C64.7433 65.0506 64.3138 65.3123 63.8461 65.4841C61.7795 66.3606 59.2348 66.6953 57.5879 65.0962C56.6051 64.1347 56.1323 62.6525 55.1654 61.6697C54.5651 61.0641 53.7417 60.7453 53.1786 60.1078C51.2342 57.9191 50.3204 55.4381 50.7136 52.5641",
				fill: "#6FC437"
			}), o.a.createElement("path", {
				d: "M50.687 52.5476C50.7667 52.5476 50.772 52.861 50.8145 53.4189C50.8575 54.2185 50.9948 55.0102 51.2235 55.7776C51.595 56.9672 52.2001 58.0707 53.0032 59.0235C53.1201 59.1617 53.237 59.3051 53.3645 59.4432C53.4809 59.5795 53.6051 59.709 53.7363 59.831C54.0379 60.0731 54.3576 60.2915 54.6926 60.4845C54.8838 60.6067 55.0804 60.7342 55.2876 60.8935C55.4961 61.053 55.6899 61.2308 55.8667 61.4248C56.2001 61.8096 56.5005 62.2219 56.7645 62.6573C57.2957 63.4914 57.7526 64.3201 58.4379 64.7823C59.2065 65.2646 60.1233 65.4532 61.0198 65.3135C61.5326 65.2584 62.0383 65.1497 62.5285 64.9895C62.7835 64.9098 63.0598 64.8142 63.2882 64.7079C63.5326 64.6121 63.7704 64.5003 64.0001 64.3732C64.3659 64.1836 64.6466 63.863 64.7863 63.4754C64.9476 62.9914 65.0161 62.4814 64.9882 61.972C64.9672 61.3638 64.9122 60.7572 64.8235 60.1551L64.5685 58.2054C64.3932 56.9145 64.1329 55.6182 63.8248 54.2901C63.6689 53.6243 63.5043 52.9531 63.3307 52.2767C63.1607 51.5967 62.9748 50.9167 62.7995 50.2685C62.397 48.9556 61.8481 47.6922 61.1632 46.502C60.2127 44.8871 58.9611 43.4696 57.4763 42.3264C56.7477 41.786 55.9726 41.3113 55.1601 40.9079C54.3864 40.5013 53.5705 40.1807 52.727 39.9517C49.5467 39.0995 46.16 39.5107 43.276 41.0992L42.782 39.5054C45.7395 39.3434 48.6739 40.1086 51.1757 41.6942C52.2028 42.3392 53.1451 43.1102 53.9807 43.9892C54.7069 44.7257 55.3257 45.5609 55.8188 46.4701C56.5149 47.7548 56.8126 49.2177 56.6742 50.6723C56.5679 51.6498 56.3713 52.1385 56.2917 52.1279C56.212 52.1173 56.212 51.5967 56.1482 50.667C56.0747 49.3455 55.6631 48.065 54.9529 46.9482C54.4411 46.1632 53.8285 45.4488 53.1307 44.8232C52.3249 44.0714 51.4333 43.417 50.4745 42.8735C48.1872 41.5701 45.56 40.9869 42.936 41.2001C42.7414 41.2201 42.5457 41.1731 42.3813 41.067C42.2169 40.9608 42.0936 40.8018 42.0317 40.6161C41.9698 40.4305 41.9731 40.2293 42.0409 40.0457C42.1087 39.8621 42.2371 39.7072 42.4048 39.6064C45.6644 37.6925 49.5476 37.1427 53.2104 38.0764C54.1941 38.3244 55.1474 38.6808 56.0526 39.1389C56.9698 39.6042 57.8428 40.1519 58.661 40.7751C60.362 42.0652 61.7948 43.6749 62.8792 45.5139C63.6443 46.8401 64.2539 48.2502 64.696 49.716C64.9085 50.4439 65.0892 51.1345 65.2538 51.841C65.4185 52.5476 65.5885 53.217 65.7426 53.9023C66.0454 55.2729 66.3057 56.6489 66.4704 58.0035L66.6988 59.9798C66.7859 60.6547 66.8338 61.3341 66.8423 62.0145C66.8607 62.7652 66.7326 63.5122 66.4651 64.2139C66.1584 64.9726 65.5941 65.599 64.8713 65.9829C64.5727 66.1398 64.2639 66.2764 63.947 66.392C63.6495 66.5089 63.3467 66.6116 63.0385 66.7001C62.4273 66.8797 61.7986 66.9937 61.1632 67.0401C59.8717 67.1758 58.5753 66.8337 57.5188 66.0785C57.043 65.7111 56.6349 65.2634 56.3129 64.7557C56.0101 64.2935 55.7817 63.8473 55.5426 63.4382C55.3375 63.066 55.103 62.7107 54.8413 62.3757C54.597 62.077 54.3086 61.8172 53.986 61.6054C53.609 61.3539 53.2536 61.0714 52.9235 60.7607C52.7676 60.5927 52.6221 60.4153 52.4879 60.2295C52.3551 60.0701 52.2382 59.9001 52.1213 59.7407C51.3049 58.6279 50.7427 57.3493 50.4745 55.9954C50.3088 55.1514 50.2909 54.285 50.4214 53.4348C50.501 52.8239 50.6285 52.537 50.687 52.5476Z",
				fill: "black"
			}), o.a.createElement("path", {
				d: "M58.6821 51.5324C55.1759 48.042 50.6496 48.1536 46.2562 50.693C41.8628 53.2323 39.7271 59.4002 40.524 64.8136C42.7659 59.7455 47.2071 55.9417 52.1584 54.8633",
				fill: "#6FC437"
			}), o.a.createElement("path", {
				d: "M52.1586 54.8578C52.2223 55.1181 50.5648 55.5218 48.2911 56.9828C46.9336 57.8598 45.7006 58.9158 44.6255 60.1225C43.2791 61.629 42.1865 63.3443 41.3901 65.2012C41.3088 65.395 41.1662 65.5568 40.9842 65.6618C40.8021 65.7668 40.5907 65.8094 40.3823 65.7829C40.1738 65.7563 39.9797 65.6623 39.8298 65.515C39.6799 65.3678 39.5823 65.1754 39.552 64.9675C39.1812 62.5558 39.3389 60.0924 40.0142 57.7478C40.9067 54.5603 42.8405 51.6968 45.4223 50.1296C47.898 48.6421 50.5383 47.9621 52.7695 48.1534C54.5167 48.2849 56.1791 48.9591 57.5242 50.0818C57.8752 50.3812 58.1907 50.7199 58.4645 51.0912C58.6505 51.3462 58.7195 51.5056 58.6664 51.5534C58.6133 51.6012 58.4539 51.5534 58.1883 51.394C57.9226 51.2346 57.5508 51.0115 57.0726 50.73C55.7414 49.9849 54.242 49.5917 52.7164 49.5878C50.4602 49.6915 48.2786 50.4279 46.4211 51.7128C44.3758 53.0568 42.7501 55.4846 41.9586 58.3162C41.3649 60.386 41.1969 62.5547 41.4645 64.6912L39.6264 64.4415C40.5616 62.4009 41.8594 60.5468 43.4567 58.9697C44.7007 57.7362 46.1359 56.7118 47.7067 55.9362C48.7229 55.4226 49.8068 55.056 50.9261 54.8471C51.7017 54.7196 52.1373 54.7515 52.1586 54.8578Z",
				fill: "black"
			}), o.a.createElement("path", {
				d: "M58.9691 59.0916C57.0778 56.855 54.0178 56.6744 51.5316 58.0291C49.0453 59.3837 47.7278 62.21 47.6587 65.2859C46.3997 62.4119 46.0331 57.9228 48.3706 55.0328C50.7081 52.1428 54.7881 52.1162 58.1562 53.6091",
				fill: "#6FC437"
			}), o.a.createElement("path", {
				d: "M58.1564 53.6259C58.098 53.764 57.5614 53.6259 56.637 53.4825C55.3703 53.2382 54.0708 53.2148 52.7961 53.4134C51.9185 53.5518 51.0844 53.8896 50.3578 54.4007C49.6311 54.9118 49.0314 55.5827 48.6045 56.3618C47.6164 58.0884 47.4358 60.5215 47.9458 62.8909C48.0924 63.5805 48.3041 64.2547 48.578 64.9043L46.6495 65.2868C46.649 62.8127 47.6 60.4331 49.3058 58.6409C49.7037 58.2536 50.1418 57.9099 50.6126 57.6156C51.0539 57.3494 51.52 57.127 52.0045 56.9515C52.865 56.631 53.7802 56.483 54.698 56.5159C56.0163 56.5361 57.2819 57.0367 58.2573 57.9237C58.9055 58.5559 59.0701 59.0287 58.9851 59.0978C58.9001 59.1668 58.5123 58.8906 57.8217 58.5134C56.8747 57.9938 55.7956 57.7647 54.7192 57.8547C53.9814 57.9197 53.2615 58.1177 52.5942 58.439C52.2227 58.6088 51.8671 58.8115 51.5317 59.0447C51.1877 59.2962 50.8692 59.5809 50.5808 59.8947C49.3045 61.4205 48.6233 63.3565 48.6629 65.3453C48.6579 65.5727 48.5757 65.7916 48.43 65.9662C48.2843 66.1408 48.0836 66.2607 47.8608 66.3064C47.638 66.3521 47.4063 66.3207 47.2036 66.2176C47.0009 66.1144 46.8393 65.9454 46.7451 65.7384C46.4086 64.9713 46.1505 64.1721 45.9748 63.3531C45.6706 61.9921 45.5952 60.5899 45.7517 59.204C45.8859 57.8729 46.3141 56.5882 47.0055 55.4428C47.6407 54.3813 48.544 53.5056 49.6245 52.9034C50.5382 52.3922 51.5508 52.0824 52.5942 51.995C54.0492 51.8938 55.5072 52.1453 56.8442 52.7281C57.7845 53.1265 58.2095 53.509 58.1564 53.6259Z",
				fill: "black"
			}), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M57.4124 63.2938C57.4124 63.2142 57.6461 63.1557 58.0605 63.0442C58.6544 62.8919 59.2285 62.6708 59.7711 62.3854C60.5979 61.9511 61.3112 61.3288 61.8536 60.5685C62.5478 59.5868 62.9191 58.4134 62.9161 57.211L64.3133 57.5935C63.5012 59.1117 62.2544 60.3529 60.7327 61.1582C58.9871 62.1107 56.9716 62.4475 55.0111 62.1145C54.79 62.0734 54.5906 61.9554 54.4483 61.7812C54.306 61.6071 54.23 61.3882 54.2338 61.1633C54.2376 60.9385 54.321 60.7223 54.4692 60.5531C54.6173 60.3839 54.8206 60.2726 55.043 60.2392H55.0749C56.4247 60.0242 57.6891 59.4414 58.7294 58.5549C59.7697 57.6683 60.5455 56.5122 60.9717 55.2135L62.7461 56.122C62.5442 56.3717 62.3477 56.6532 62.1246 56.871C61.0218 58.1308 59.6313 59.1058 58.0711 59.7132C56.5689 60.2714 54.953 60.4538 53.3642 60.2445C53.1268 60.2142 52.909 60.0969 52.753 59.9153C52.597 59.7337 52.5139 59.5007 52.5199 59.2613C52.5258 59.022 52.6204 58.7934 52.7852 58.6197C52.95 58.4461 53.1734 58.3398 53.4121 58.3213C55.029 58.1782 56.5284 57.4171 57.5983 56.1963C58.572 55.0859 59.2128 53.7233 59.4471 52.2651L60.9239 52.6635C60.2754 54.0839 59.334 55.3512 58.1614 56.3823C57.291 57.1526 56.3004 57.7753 55.2289 58.2257C53.4546 58.9482 52.3655 58.8898 52.3496 58.757C52.3336 58.6242 53.3217 58.3373 54.8411 57.4448C55.7485 56.9049 56.5778 56.2436 57.3061 55.4792C58.2529 54.4942 58.9982 53.3339 59.5002 52.0632C59.5689 51.8907 59.6976 51.7488 59.8626 51.6637C60.0276 51.5785 60.2178 51.5558 60.3982 51.5998C60.5787 51.6438 60.7371 51.7514 60.8444 51.903C60.9518 52.0545 61.0008 52.2397 60.9824 52.4245V52.4617C60.7967 54.2547 60.0893 55.954 58.9477 57.3492C57.613 58.9819 55.6894 60.0239 53.5927 60.2498L53.6192 58.3267C54.8923 58.4648 56.1799 58.2973 57.3752 57.8379C58.6301 57.3318 59.7478 56.5363 60.6371 55.5163C60.823 55.3198 60.9824 55.0967 61.1683 54.8948L61.2055 54.8523C61.3553 54.6729 61.5628 54.5511 61.7925 54.5077C62.0221 54.4642 62.2597 54.5018 62.4648 54.614C62.6698 54.7263 62.8295 54.9062 62.9167 55.1231C63.0038 55.3399 63.013 55.5803 62.9427 55.8032C62.4029 57.4655 61.4034 58.9409 60.0599 60.0588C58.7164 61.1766 57.0838 61.8912 55.3511 62.1198L55.4149 60.2392C56.9637 60.5329 58.5661 60.3128 59.9783 59.6123C61.2426 59.0076 62.3065 58.0524 63.0436 56.8604L63.0702 56.8126C63.1552 56.6706 63.2854 56.5613 63.4399 56.5022C63.5945 56.443 63.7644 56.4375 63.9225 56.4865C64.0805 56.5356 64.2176 56.6362 64.3115 56.7724C64.4055 56.9086 64.4511 57.0724 64.4408 57.2376C64.3563 58.7284 63.7852 60.1505 62.8152 61.2857C62.0978 62.1246 61.1727 62.7603 60.1324 63.1292C59.4932 63.3634 58.8153 63.4734 58.1349 63.4532C57.6408 63.4479 57.4071 63.3629 57.4124 63.2938Z",
				fill: "#46A508"
			}))), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M59.9148 50.4699C59.6651 50.5018 59.442 49.1896 58.5017 47.2824C57.9476 46.1514 57.2455 45.0991 56.4139 44.1533C55.3829 42.9699 54.1442 41.985 52.7588 41.2474L53.7895 39.6536C55.3353 40.7807 56.5677 42.2837 57.37 44.0204C58.1724 45.757 58.518 47.6698 58.3742 49.5774C58.355 49.8118 58.2524 50.0317 58.085 50.1969C57.9176 50.3622 57.6965 50.4619 57.4618 50.4779C57.2271 50.494 56.9944 50.4254 56.806 50.2845C56.6176 50.1436 56.486 49.9399 56.4351 49.7102C56.0638 48.0099 55.3398 46.4064 54.3101 45.0033C53.4824 43.864 52.4844 42.8589 51.351 42.023C49.4173 40.5939 47.951 40.1636 48.0254 39.898C48.0254 39.7864 48.4451 39.7652 49.157 39.898C50.1644 40.1006 51.1341 40.4591 52.031 40.9605C53.4142 41.7235 54.6429 42.7379 55.6542 43.9514C56.9555 45.4893 57.8828 47.3076 58.3635 49.2639L56.4245 49.4074C56.4828 48.0684 56.264 46.7319 55.7817 45.4814C55.1481 43.7841 54.0601 42.2937 52.6367 41.173L52.5942 41.1464C52.4895 41.0767 52.3996 40.987 52.3297 40.8825C52.2597 40.778 52.211 40.6607 52.1863 40.5374C52.1616 40.4141 52.1615 40.2871 52.1859 40.1637C52.2103 40.0403 52.2588 39.923 52.3285 39.8183C52.3983 39.7137 52.488 39.6238 52.5925 39.5538C52.697 39.4838 52.8143 39.4351 52.9376 39.4104C53.1867 39.3606 53.4453 39.4118 53.6567 39.5527C55.2217 40.4544 56.585 41.6677 57.6623 43.1174C58.506 44.2412 59.156 45.4981 59.5854 46.8361C60.3079 49.0727 60.1007 50.4699 59.9148 50.4699Z",
				fill: "#46A508"
			}))), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M55.4415 53.5724C55.4415 53.8806 53.7308 53.854 51.218 54.6031C49.7586 55.0389 48.3661 55.6735 47.0796 56.489C45.5142 57.4726 44.1407 58.7327 43.0262 60.2077C42.882 60.3983 42.6749 60.5315 42.4417 60.5836C42.2085 60.6358 41.9644 60.6036 41.7527 60.4927C41.5411 60.3817 41.3757 60.1993 41.2859 59.9779C41.1961 59.7565 41.1878 59.5104 41.2624 59.2834C41.358 59.0018 41.4483 58.7149 41.5652 58.4334C42.4095 56.3207 43.8607 54.5054 45.7355 53.2165C47.2488 52.1768 49.0024 51.5405 50.8302 51.3678C52.0338 51.2431 53.2502 51.355 54.4108 51.6971C55.2183 51.9521 55.6115 52.2284 55.5743 52.3559C55.5371 52.4834 55.0749 52.4834 54.2887 52.4781C53.2019 52.4556 52.1163 52.559 51.0533 52.7862C49.5222 53.1186 48.0825 53.7823 46.8352 54.7306C45.3306 55.8851 44.1637 57.4226 43.4565 59.1824C43.3608 59.4109 43.2865 59.6499 43.2068 59.8837L41.4271 58.9806C42.7039 57.2985 44.318 55.9016 46.1658 54.8793C47.6505 54.0496 49.2685 53.4851 50.9471 53.2112C52.054 53.0157 53.1839 52.987 54.2993 53.1262C55.0377 53.2749 55.4521 53.4449 55.4415 53.5724Z",
				fill: "#46A508"
			}))), o.a.createElement("path", {
				d: "M40.9863 58.9697C40.7844 58.9697 40.6091 58.4385 40.625 57.4291C40.6872 56.0193 41.0399 54.6375 41.661 53.3704C42.0825 52.4713 42.6182 51.6303 43.2547 50.8682C43.6215 50.4393 44.0211 50.0396 44.45 49.6729C44.8923 49.2888 45.359 48.9339 45.8472 48.6104C48.0885 47.0896 50.7816 46.3793 53.4813 46.5969C54.0986 46.6422 54.7124 46.7256 55.3194 46.8466L53.5185 48.2704C53.573 47.4013 53.4047 46.5328 53.0297 45.7469C52.6367 44.9938 52.0944 44.3287 51.436 43.7919C50.2132 42.7771 48.8011 42.015 47.2816 41.55C45.9482 41.1144 44.7953 40.8966 43.9932 40.7C43.191 40.5035 42.7288 40.3388 42.7235 40.1369C42.7182 39.935 43.1697 39.7332 44.025 39.5791C45.2557 39.3795 46.5094 39.367 47.7438 39.5419C49.6828 39.7888 51.5311 40.5095 53.1253 41.6404C54.1525 42.3565 55.0087 43.2907 55.6328 44.3763C56.303 45.6055 56.6262 46.9938 56.5678 48.3925C56.561 48.59 56.5153 48.7842 56.4333 48.964C56.3514 49.1438 56.2348 49.3057 56.0902 49.4404C55.9456 49.5751 55.7759 49.6799 55.5908 49.749C55.4057 49.8181 55.2088 49.85 55.0113 49.8429H54.82H54.7616C54.2747 49.7547 53.7835 49.6926 53.29 49.6569C51.2176 49.4862 49.1427 49.9553 47.3453 51.001C46.9274 51.2387 46.5231 51.4994 46.1341 51.7819C45.7746 52.0297 45.432 52.3012 45.1088 52.5947C44.5158 53.153 43.9818 53.7707 43.515 54.4382C42.8249 55.4541 42.241 56.5382 41.7725 57.6735C41.4378 58.5129 41.1988 59.0016 40.9863 58.9697Z",
				fill: "black"
			}));
			var _ = n("./src/reddit/components/SearchResultsContent/NoResults/index.m.less"),
				S = n.n(_);
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var P;

			function w({
				query: e,
				type: t,
				searchOptions: n
			}) {
				const a = Object(E.a)();
				return Object(r.useEffect)(() => {
					a(Object(y.i)(t, n))
				}, []), o.a.createElement("div", {
					className: Object(s.a)(S.a.noResults, t === P.Posts && S.a.withSidebar),
					"data-testid": "no-results"
				}, o.a.createElement(j, null), o.a.createElement("h2", {
					className: S.a.header
				}, k._("If there aren’t any search results for “", null, {
					hk: "jdZLH"
				}), k._("{search query}", [k._param("search query", e)], {
					hk: "4vP3YT"
				}), k._("”, does it even exist?", null, {
					hk: "3Pa0q2"
				})), o.a.createElement("p", {
					className: S.a.text
				}, k._("Looks like there aren’t any results for “", null, {
					hk: "4zRIzA"
				}), k._("{search query}", [k._param("search query", e)], {
					hk: "4vP3YT"
				}), k._("”. Try double-checking your spelling or searching for a related topic.", null, {
					hk: "2wIbnh"
				})))
			}

			function N(e) {
				const {
					hasAuthorsResults: t,
					listingKey: n,
					searchOptions: s
				} = e, r = s.is_multi || s.category, c = t && !x(s.q), d = Object(i.a)(s.q || ""), l = Object(a.e)(t => Object(m.c)(t, e)), u = void 0 === l || l;
				return o.a.createElement(o.a.Fragment, null, c || u ? o.a.createElement(v, {
					key: "authorsPreview",
					listingKey: n,
					searchOptions: s
				}) : !r && o.a.createElement(w, {
					searchOptions: s,
					query: d,
					type: P.People
				}))
			}

			function I(e) {
				const {
					hasCommunityResults: t,
					listingKey: n,
					searchOptions: s
				} = e, r = s.is_multi || s.category, c = Object(a.e)(t => Object(m.f)(t, e)), d = t && !x(s.q), l = Object(i.a)(s.q || ""), u = void 0 === c || c;
				return o.a.createElement(o.a.Fragment, null, d || u ? o.a.createElement(C, {
					key: "communitiesPreview",
					listingKey: n,
					searchOptions: s
				}) : !r && o.a.createElement(w, {
					query: l,
					type: P.Communities,
					searchOptions: s
				}))
			}! function(e) {
				e.Communities = "communities", e.People = "people", e.Posts = "posts"
			}(P || (P = {}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var M = n("./node_modules/lodash/isEmpty.js"),
				T = n.n(M),
				R = n("./src/lib/constants/index.ts"),
				L = n("./src/lib/hooks/usePrevious.ts"),
				A = n("./src/reddit/actions/search.ts"),
				F = n("./src/config.ts"),
				D = n("./src/lib/intersectionObserver/index.ts"),
				B = n("./src/lib/isUrl/index.ts"),
				U = n("./src/lib/opener/index.ts"),
				G = n("./src/reddit/actions/post.ts"),
				H = n("./src/reddit/components/BlankPost/index.tsx"),
				W = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				q = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				V = n("./src/reddit/components/Media/index.tsx"),
				K = n("./src/reddit/components/PostContainer/index.tsx"),
				z = n("./src/reddit/components/Thumbnail/index.tsx"),
				Q = n("./src/reddit/components/TrackingHelper/index.tsx"),
				J = n("./src/reddit/constants/adEvents.ts"),
				Z = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Y = n("./src/reddit/contexts/Post/index.tsx"),
				X = n("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				$ = n("./src/reddit/helpers/clickSourceData/index.ts"),
				ee = n("./src/reddit/helpers/overlay/index.ts"),
				te = n("./src/reddit/helpers/path/index.ts"),
				ne = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				se = n("./src/reddit/models/Media/index.ts"),
				re = n("./src/reddit/selectors/posts.ts"),
				oe = n("./src/reddit/selectors/showPromotedCTA.ts"),
				ae = n("./src/reddit/selectors/user.ts"),
				ie = n("./node_modules/reselect/es/index.js"),
				ce = n("./src/lib/getShortenedLink.ts"),
				de = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				le = n("./src/reddit/components/PostTitle/index.tsx"),
				ue = n("./node_modules/fbt/lib/FbtPublic.js"),
				me = n("./src/lib/prettyPrintNumber/index.ts"),
				pe = n("./src/reddit/components/SearchPostFlatlist/index.m.less"),
				be = n.n(pe);

			function he({
				post: e,
				className: t
			}) {
				const n = Object.values(e.awardCountsById || {}).reduce((e, t) => e += t, 0);
				return o.a.createElement("div", {
					className: Object(s.a)(be.a.flatlistContainer, t)
				}, o.a.createElement("span", {
					className: Object(s.a)(be.a.flatlistItem)
				}, ue.fbt._("{upvotesCount} upvotes", [ue.fbt._param("upvotesCount", Object(me.b)(e.score))], {
					hk: "4pEh4K"
				})), o.a.createElement("span", {
					className: Object(s.a)(be.a.flatlistItem)
				}, ue.fbt._("{commentsCount} comments", [ue.fbt._param("commentsCount", Object(me.b)(e.numComments))], {
					hk: "25X8If"
				})), o.a.createElement("span", {
					className: Object(s.a)(be.a.flatlistItem)
				}, ue.fbt._("{awardsCount} awards", [ue.fbt._param("awardsCount", Object(me.b)(n))], {
					hk: "2DUF36"
				})))
			}
			var fe = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				ge = n("./src/reddit/components/PostTopMeta/index.tsx"),
				Ce = n("./src/reddit/components/QuarantinedLabel/index.tsx"),
				Oe = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				ve = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				xe = n("./src/reddit/hooks/useClickSourceData.ts"),
				ye = n("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				Ee = n("./src/reddit/components/SearchPostMeta/index.m.less"),
				je = n.n(Ee);
			var _e = e => {
					const {
						className: t,
						flairStyleTemplate: n,
						post: r,
						subredditOrProfile: a,
						tooltipType: i
					} = e, c = Object(xe.a)();
					return o.a.createElement("div", {
						className: Object(s.a)(t, je.a.metaContainer)
					}, !r.isSponsored && a && o.a.createElement(fe.a, {
						className: Object(s.a)(je.a.hovercardContainer, je.a.hovercardContainer),
						postId: r.id,
						subredditName: a.name
					}, o.a.createElement(ye.b, {
						className: je.a.subredditIcon,
						subredditOrProfile: a,
						linkTo: a.url
					}), o.a.createElement(Oe.a, {
						className: je.a.subredditName,
						"data-testid": "subreddit-name",
						"data-click-id": "subreddit",
						to: {
							pathname: a.url,
							state: c
						}
					}, a.displayText)), a && a.isQuarantined && o.a.createElement(Ce.a, null), !r.isSponsored && o.a.createElement(o.a.Fragment, null, o.a.createElement(ve.b, null), o.a.createElement(q.h, {
						type: r.belongsTo.type,
						id: r.belongsTo.id
					})), o.a.createElement(ge.d, {
						className: je.a.postTopMeta,
						flairStyleTemplate: n,
						post: r,
						tooltipType: i
					}))
				},
				Se = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				ke = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				Pe = n("./src/reddit/components/CallToActionButton/index.tsx"),
				we = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				Ne = n("./src/reddit/hooks/useTheme.ts"),
				Ie = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Me = n("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/index.m.less"),
				Te = n.n(Me);
			const {
				fbt: Re
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Le = `${F.a.assetPath}/img/link-placeholder.png`, Ae = Object(ie.c)({
				autoplayPref: ae.b,
				showPromotedCTA: oe.a,
				flairStyleTemplate: Z.V
			});

			function Fe(e) {
				var t;
				const {
					postId: n,
					listingKey: i,
					searchOptions: c,
					discoveryUnit: d
				} = e, l = Object(r.useRef)(), u = Object(r.useRef)(), {
					autoplayPref: m,
					flairStyleTemplate: p,
					showPromotedCTA: b
				} = Object(a.e)(t => Ae(t, e)), h = Object(a.e)(e => Object(re.d)(e, {
					postId: n
				})), f = Object(a.e)(Ie.b), g = Object(Z.fb)(), C = Object(Q.b)(), O = Object(a.d)(), v = Object(Ne.a)(), {
					post: x,
					subredditOrProfile: E
				} = Object(Y.d)(n), j = Object(r.useCallback)((e, t) => {
					O(Object(G.Q)(e, t))
				}, [O]), _ = !!x.source && !h;
				if (Object(r.useEffect)(() => (l.current && Object(D.a)(l.current, (e, t) => {
						u.current && (t ? u.current.focusContent() : u.current.pauseContent())
					}), Object(y.g)(i, c, d), () => {
						l.current && Object(D.b)(l.current), u.current && u.current.stopContent(), l.current = null, u.current = null
					}), []), !x) return null;
				const {
					media: S
				} = h || x || {}, k = (null == S ? void 0 : S.type) === se.o.EMBED && (null == S ? void 0 : S.provider) === se.v.Twitter, P = (null == S ? void 0 : S.type) === se.o.VIDEO || (null == S ? void 0 : S.type) === se.o.GIFVIDEO;

				function w(e) {
					e.stopPropagation(), e.preventDefault(), x.isSponsored ? (O(Object(G.z)(x, J.a.Click)), x.source ? x.source.outboundUrl ? Object(U.e)(x.source.outboundUrl, U.d.BLANK) : Object(U.e)(x.source.url, U.d.BLANK) : Object(U.e)(x.permalink, U.d.BLANK)) : O(f ? Object(G.ab)(Object(te.b)(x.permalink), x.id) : Object(ee.a)({
						pathname: Object(te.b)(x.permalink),
						state: Object($.a)(g)
					}))
				}

				function N(e) {
					x.isSponsored && P || w(e), x.isSponsored && function(e) {
						P || (e.stopPropagation(), e.preventDefault()), C(Object(y.p)(x.id, c, d, i, g))
					}(e)
				}
				return x.isBlank ? o.a.createElement(H.BlankPost, {
					onPostViewable: j,
					post: x,
					postId: x.id
				}) : o.a.createElement(Y.a, {
					postId: n
				}, o.a.createElement(K.a, {
					className: Te.a.postContainer,
					eventFactory: function(e, t) {
						let n;
						return (n = "subreddit" === t ? ne.z(c, g, i, d) : x && x.isSponsored ? ne.y(c, g, i, d) : ne.A(c, g, i, d))(e)
					},
					onClick: w,
					post: x,
					"data-click-id": "hero_unit",
					style: {
						...Object(we.d)({
							theme: v,
							flairStyleTemplate: p,
							redditStyle: !1
						}),
						...Object(we.b)(p)
					}
				}, o.a.createElement(de.a, {
					"data-click-id": "background"
				}, o.a.createElement(W.a, {
					className: Te.a.eventMeta,
					post: x
				}), o.a.createElement("div", {
					className: Object(s.a)(Te.a.postContent, {}),
					"data-click-id": "body"
				}, o.a.createElement(_e, {
					className: Te.a.postItemMetaContainer,
					key: "PostMeta",
					shouldShowSubscribeButton: !1,
					post: x,
					subredditOrProfile: E
				}), o.a.createElement("div", {
					className: Te.a.postItemTitleContainer
				}, o.a.createElement(le.c, {
					hideSourceLink: !0,
					post: x,
					size: le.b.Medium,
					isOverlay: !1
				}), !b && _ && o.a.createElement(Se.a, {
					className: Te.a.outboundLink,
					href: (null === (t = null == x ? void 0 : x.source) || void 0 === t ? void 0 : t.url) || "",
					isSponsored: x.isSponsored,
					postId: x.id,
					source: x.source
				}, Object(ce.a)(x))), function() {
					let e = o.a.createElement(o.a.Fragment, null);
					const t = !!x.source && Object(B.a)(x.source.url) || !!x.thumbnail && Object(B.a)(x.thumbnail.url),
						n = !S && t,
						r = Object(s.a)(Te.a.mediaWrapper, {
							[Te.a.marginCancel]: b && !!x.source,
							[Te.a.promotedTrend]: x.isSponsored
						});
					if (n) e = o.a.createElement("div", {
						className: r
					}, o.a.createElement(z.a, {
						className: Te.a.thumbnail,
						post: x,
						templatePlaceholderImage: Le,
						usePreview: !0
					}));
					else if (S)
						if (S.type !== se.o.RTJSON && S.type !== se.o.TEXT) e = o.a.createElement("div", {
							className: Object(s.a)(r, k && Te.a.twitterEmbed),
							onClickCapture: N,
							ref: e => l.current = e
						}, o.a.createElement(V.a, {
							className: Te.a.mediaContent,
							autoplayPref: m,
							isListing: !1,
							isMiniCard: !1,
							isNotCardView: !0,
							isPromotedTrend: x.isSponsored,
							post: h || x,
							primaryContent: !0,
							scrollerItemRef: e => u.current = e,
							shouldLoad: !0,
							shouldPause: !0,
							showCentered: !0,
							showFull: !0
						}));
						else {
							e = o.a.createElement("div", {
								className: Te.a.mediaPlaceholder
							}), (S.type === se.o.RTJSON && S.richtextContent || S.type === se.o.TEXT && S.content) && Object(X.a)(x) && (e = o.a.createElement("div", {
								className: r,
								onClickCapture: w,
								ref: e => l.current = e
							}, o.a.createElement(V.a, {
								autoplayPref: m,
								className: Te.a.textMedia,
								isListing: !1,
								isMiniCard: !1,
								isNotCardView: !1,
								post: h || x,
								shouldPause: !0,
								shouldLoad: !0,
								showCentered: !0,
								showFull: !0
							}), o.a.createElement("div", {
								className: Te.a.seeMore
							}, Re._("More", null, {
								hk: "362mDE"
							}))))
						} return e
				}(), b && x.source && o.a.createElement(ke.a, {
					className: Te.a.adLinkWrapper
				}, o.a.createElement(Se.a, {
					className: Object(s.a)(Te.a.outboundLink),
					href: x.source.url.replace(F.a.redditUrl, ""),
					isSponsored: x.isSponsored,
					postId: x.id,
					source: x.source
				}, x.source.displayText), x.callToAction && o.a.createElement(Pe.a, {
					className: Te.a.adCallToAction,
					href: x.source.url.replace(F.a.redditUrl, ""),
					isSponsored: x.isSponsored,
					postId: x.id,
					source: x.source
				}, x.callToAction)), !x.isSponsored && o.a.createElement(he, {
					className: Object(s.a)(Te.a.postItemFlatlistContainer),
					post: x
				}), o.a.createElement(q.d, null)))))
			}
			var De = n("./src/lib/LRUCache/index.ts"),
				Be = n("./src/reddit/components/Scroller/Simple.tsx"),
				Ue = n("./src/reddit/components/SearchResultsContent/helpers/viewCommunityTracker.ts"),
				Ge = n("./src/reddit/hooks/usePageLayer.ts"),
				He = n("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const We = 376,
				qe = new De.a(1);

			function Ve({
				discoveryUnit: e,
				listingKey: t,
				searchOptions: n,
				postId: s,
				children: r
			}) {
				const i = Object(a.d)(),
					c = Object(Ge.a)();
				if (!e || !s) return null;
				const d = () => {
					const r = `entered-hero-unit-${s}`;
					let o = Ue.a.get(r);
					if (void 0 === o) {
						const a = e.layout.viewTypeWeb === He.b.PromotedTrendHero;
						o = () => {
							i((r, o) => Object(ne.B)(o(), e, s, n, c, t, a))
						}, Ue.a.set(r, o)
					}
					return o
				};
				return o.a.createElement(Be.b, null, (() => {
					const n = `hero-unit-search-${t}`;
					let s;
					return void 0 === (s = qe.get(n)) && (s = {
						estHeight: We,
						trackOnEnteredViewport: d(),
						id: e.id,
						render: () => r
					}), qe.set(n, s), [s]
				})())
			}
			var Ke = n("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				ze = n("./src/reddit/helpers/trackers/screenview.ts"),
				Qe = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				Je = n("./src/reddit/selectors/listings.ts"),
				Ze = n("./src/reddit/selectors/platform.ts");
			const Ye = e => {
				const t = e.listings.activeKey,
					n = e.searchDiscoveryUnits.models[t];
				return n || {}
			};
			var Xe = n("./src/reddit/selectors/searchFix.ts"),
				$e = n("./src/telemetry/index.ts"),
				et = n("./src/telemetry/models/Timer.ts");
			const {
				Hero: tt,
				PromotedTrendHero: nt
			} = He.b;

			function st(e) {
				const t = Object.values(e).find(e => e.layout.viewTypeWeb === tt || e.layout.viewTypeWeb === nt);
				if (null == t ? void 0 : t.postOrder) return t.postOrder[0]
			}
			var rt = n("./src/reddit/components/PostList/index.tsx"),
				ot = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				at = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				it = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				ct = n("./src/reddit/components/ModModeReports/index.tsx"),
				dt = n("./src/reddit/components/ModModeReports/helpers.ts"),
				lt = n("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				ut = n("./src/reddit/selectors/moderatorPermissions.ts"),
				mt = n("./src/reddit/selectors/poll/index.ts"),
				pt = n("./src/reddit/selectors/postFlair.ts");
			const bt = {
					crosspost: re.d,
					isActive: re.j,
					isLoggedIn: ae.J,
					moderatorPermissions: ut.l,
					modModeEnabled: Z.T,
					poll: mt.e,
					showEditFlair: pt.a,
					flairStyleTemplate: Z.V
				},
				ht = () => Object(ie.c)(bt);
			var ft = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				gt = n("./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx"),
				Ct = n("./src/reddit/components/SearchPost/index.m.less"),
				Ot = n.n(Ct);

			function vt() {
				return (vt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const xt = Object(ot.a)(e => {
					const {
						className: t,
						crosspost: n,
						eventFactory: a,
						first: i,
						flairStyleTemplate: c,
						isLoggedIn: d,
						isOverlay: l,
						moderatorPermissions: u,
						modModeEnabled: m,
						onClickPost: p,
						onIgnoreReports: b,
						poll: h,
						post: f,
						redditStyle: g,
						showBulkActionCheckbox: C,
						subredditOrProfile: O,
						searchQuery: v
					} = e, x = g ? void 0 : c, y = n || void 0, E = Object(ft.a)(u), j = Object(it.d)(f), _ = Object(dt.c)(f), S = Object(z.b)({
						crosspost: n,
						post: f,
						url: void 0,
						usePreview: !1
					}), k = S && Object(B.a)(S), P = !!f.media && Object(se.H)(f.media), w = !d, N = Object(r.useMemo)(() => Object(gt.a)(v, e => o.a.createElement("span", {
						className: Object(s.a)(Ot.a.syntaxHighlight)
					}, e), e => e), [v]), I = {
						flairStyleTemplate: x,
						post: f,
						isOverlay: l,
						shouldShowSubscribeButton: w,
						subredditOrProfile: O
					}, M = o.a.createElement(K.a, {
						className: Object(s.a)(Ot.a.postContainer, Object(we.a)(e), i ? Ot.a.mFirst : void 0, t),
						eventFactory: a,
						isOverlay: l,
						onClick: p,
						post: f,
						style: {
							...Object(we.d)(e),
							...Object(we.b)(x)
						}
					}, o.a.createElement(de.a, {
						"data-click-id": "background",
						flairStyleTemplate: x,
						redditStyle: !0
					}, o.a.createElement(W.a, {
						className: Ot.a.eventMeta,
						post: f
					}), o.a.createElement("div", {
						className: Object(s.a)(Ot.a.postContent, {
							[Ot.a.showBulkActionCheckbox]: C
						}),
						"data-click-id": "body"
					}, o.a.createElement(_e, vt({
						className: Ot.a.postItemMetaContainer,
						key: "PostMeta"
					}, I)), o.a.createElement("div", {
						className: Ot.a.postItemTitleContainer
					}, o.a.createElement("div", null, o.a.createElement(le.c, {
						format: N,
						hideSourceLink: !0,
						poll: h,
						post: f,
						redditStyle: g,
						size: le.b.Medium,
						titleColor: x && x.postTitleColor,
						isOverlay: l
					}), f.source && !y && o.a.createElement(Se.a, {
						className: Ot.a.outboundLink,
						href: f.source.url,
						isSponsored: f.isSponsored,
						postId: f.id,
						source: f.source
					}, Object(ce.a)(f))), k && o.a.createElement("div", {
						className: Ot.a.thumbnailContainer
					}, o.a.createElement(z.a, {
						className: Ot.a.thumbnail,
						crosspost: y && f,
						isMeta: f.isMeta,
						post: y || f,
						redditStyle: g,
						templatePlaceholderImage: x && x.postPlaceholderImage,
						removeLink: P
					}))), m && E && j && o.a.createElement(at.a, {
						thing: f
					}), m && E && _ && o.a.createElement(ct.a, {
						onIgnoreReports: b,
						reportable: f
					}), o.a.createElement(he, {
						className: Object(s.a)(Ot.a.postItemFlatlistContainer),
						post: f
					}), o.a.createElement(q.d, null))));
					return o.a.createElement(lt.b, null, M)
				}),
				yt = Object(Y.b)((e => t => {
					const n = Object(Z.fb)(),
						s = ((e, {
							postId: t
						}) => ({
							onIgnoreReports: () => e(Object(G.fb)(t))
						}))(Object(a.d)(), {
							...t
						}),
						r = Object(Z.Z)(n),
						i = Object(a.e)(ht),
						c = {
							...t,
							...i,
							...s,
							searchQuery: r
						};
					return o.a.createElement(e, c)
				})(xt));
			var Et = n("./src/reddit/constants/postLayout.ts"),
				jt = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				_t = n("./src/reddit/helpers/trackers/post.ts"),
				St = n("./src/reddit/selectors/tracking.ts"),
				kt = n("./src/reddit/connectors/PostList/index.ts");
			const Pt = Object(kt.c)(),
				wt = Object(ie.c)({
					...kt.d,
					layout: () => Et.g.Search,
					viewportDataLoaded: St.a,
					postIds: (e, {
						heroPostId: t,
						listingKey: n,
						listingName: s,
						inSubredditOrProfile: r,
						searchDiscoveryUnit: o
					}) => {
						const a = o && o.postOrder,
							i = st(Ye(e));
						if (a && a.length > 0) {
							if (t) {
								const n = a.indexOf(t);
								if (n > -1) return a.splice(n, 1), Object(re.X)(e, a)
							}
							return Object(re.X)(e, a)
						}
						const {
							models: c
						} = e.posts;
						return Object(re.E)(e, n, s, !!r).filter(e => c && c[e] && !c[e].isSponsored && i !== e)
					}
				}),
				Nt = (e, t, n, s) => {
					if (n) return Object(_t.h)(e, t);
					const {
						sendEvent: r,
						listingKey: o,
						searchOptions: a,
						pageLayer: i,
						searchDiscoveryUnit: c
					} = s;
					return "body" === t || "background" === t || "expando_open" === t || "image" === t || "timestamp" === t ? r(Object(y.l)(e, {
						...a,
						id: e,
						eventType: "post"
					}, i, o, c)) : "subreddit" === t ? r(Object(y.k)(a, i, void 0, o, e, c)) : "comments" === t && r(Object(y.l)(e, {
						...a,
						id: e,
						eventType: "post"
					}, i, o, c)), Object(_t.h)(e, t)
				},
				It = Object(a.b)(wt, (e, t) => ({
					...Object(kt.b)(e),
					trackOnPostEnteredViewport: e => {
						t.sendEvent(Object(y.n)(t.listingKey, e, {
							...t.searchOptions,
							id: e,
							eventType: "post"
						}, Object(Xe.b)(t))), t.sendEvent(Object(y.o)(t.listingKey, e, {
							...t.searchOptions,
							id: e,
							eventType: "post"
						}, t.pageLayer, t.searchDiscoveryUnit))
					}
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					openPost: e => t.openPost(e),
					postClickEventFactory: Nt,
					postComponentForLayout: ({
						post: e
					}) => e.isBlank ? jt.a : yt
				}));
			const Mt = (e => Object(Q.c)(Pt(It(e))))(rt.a),
				Tt = () => null,
				Rt = Object(ie.c)({
					viewTreatment: m.q,
					searchDiscoveryUnitsModels: Ye,
					hasPostResults: m.i,
					apiPending: Je.d,
					postIds: re.A,
					posts: re.z,
					loadMore: Je.g,
					isOverlayOpen: Ze.i,
					treatment: m.p
				});

			function Lt(e) {
				const {
					listingKey: t,
					listingName: n,
					location: s,
					searchOptions: c
				} = e, {
					nsfwSessionSetting: d
				} = Object(Ke.c)(), l = Object(Ge.a)(), u = Object(E.a)(), m = Object(a.d)(), {
					viewTreatment: p,
					searchDiscoveryUnitsModels: b,
					hasPostResults: h,
					postIds: f,
					isOverlayOpen: g,
					apiPending: C,
					treatment: O
				} = Object(a.e)(t => Rt(t, e)), v = Object(L.a)(g), x = Object(r.useRef)(!1), y = void 0 === C || C, j = (e, n) => u(Object(ze.v)(t, c, n, e, l, d, Object(Xe.b)({
					pageLayer: l
				}), O));
				let _;
				Object(r.useEffect)(() => {
					h && !T()(f) && I()
				}, [h, f]), Object(r.useEffect)(() => {
					v && !g && I()
				}, [g, v]), p === He.c.Trending && (_ = st(b));
				const S = Object(i.a)(c.q || ""),
					k = Object(r.useMemo)(() => Object.values(b).find(e => e.name === Qe.l || e.name === Qe.f), [b]),
					N = _ && k;

				function I() {
					if ($e.c.has(t) || !x.current) {
						x.current = !0;
						const e = $e.c.end(t);
						j(e, et.TimerType.InApp)
					}
				}
				return h || N || y ? o.a.createElement(o.a.Fragment, null, N && o.a.createElement(Ve, {
					key: _,
					postId: _,
					discoveryUnit: k,
					searchOptions: c,
					listingKey: t
				}, o.a.createElement(Fe, {
					key: _,
					discoveryUnit: k,
					postId: _,
					listingKey: t,
					searchOptions: c
				})), (h || y) && o.a.createElement(Mt, {
					key: "posts",
					listingKey: t,
					listingName: n,
					location: s,
					inSubredditOrProfile: !1,
					noPostsComponent: Tt,
					onLoadMore: function() {
						m(Object(A.n)([R.ac.Posts]))
					},
					searchOptions: c
				})) : o.a.createElement(w, {
					query: S,
					type: P.Posts,
					searchOptions: c
				})
			}
			var At = n("./src/reddit/constants/page.ts"),
				Ft = n("./src/reddit/components/SearchResultsContent/index.m.less"),
				Dt = n.n(Ft);

			function Bt(e) {
				const {
					listingKey: t,
					listingName: n,
					location: r,
					searchOptions: i,
					tab: c
				} = e, d = Object(a.e)(e => Object(m.h)(e, {
					listingKey: t
				})), l = Object(a.e)(e => Object(m.g)(e, {
					listingKey: t
				}));
				return o.a.createElement("div", {
					className: Object(s.a)(Dt.a.resultsContainer)
				}, c === At.h.Listings ? o.a.createElement(I, {
					hasCommunityResults: d,
					listingKey: t,
					searchOptions: i
				}) : c === At.h.Authors ? o.a.createElement(N, {
					hasAuthorsResults: l,
					listingKey: t,
					searchOptions: i
				}) : o.a.createElement(Lt, {
					key: t,
					listingKey: t,
					listingName: n,
					location: r,
					searchOptions: i
				}))
			}
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/selectors.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/selectors/searchFix.ts"),
				r = n("./src/reddit/selectors/subreddit.ts");
			const o = (e, t) => {
				const n = Object(s.a)(e, t);
				return n ? Object(r.w)(e, {
					subredditName: n
				}) : null
			}
		},
		"./src/reddit/components/SearchResultsNav/index.m.less": function(e, t, n) {
			e.exports = {
				searchResultsNav: "_21H_PIzpqfpibB_EcUDwpj",
				pillRow: "_3XkfKrHLCXvnVsLyBJXzzv",
				pillElement: "_1gui9gwvmz0Ta6TaySS6jf",
				nsfwToggleContainer: "_1nT46ChOZ3tgGqgs2CyMeJ",
				searchSwitcherContainer: "_10JrVcY3xBcUNO7dNh0Js2"
			}
		},
		"./src/reddit/components/SearchResultsNav/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return D
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/constants/page.ts"),
				d = n("./src/reddit/constants/parameters.ts"),
				l = n("./src/reddit/helpers/search/searchResultsTabTo.ts"),
				u = n("./src/reddit/hooks/useTracking.ts"),
				m = n("./src/reddit/controls/InternalLink/index.tsx"),
				p = n("./src/reddit/helpers/trackers/searchResults.ts"),
				b = n("./src/reddit/components/Pill/PillButton/index.tsx"),
				h = n("./node_modules/lodash/noop.js"),
				f = n.n(h),
				g = n("./src/reddit/models/SearchDiscoveryUnit/index.ts"),
				C = n("./src/reddit/selectors/searchResults.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				v = n("./node_modules/history/esm/history.js"),
				x = n("./node_modules/react-router-redux/es/index.js"),
				y = n("./src/lib/classNames/index.ts"),
				E = n("./src/lib/colors/constants.ts"),
				j = n("./src/lib/search/index.ts"),
				_ = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				S = n("./src/reddit/constants/tracking.ts"),
				k = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				P = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				w = n("./src/reddit/hooks/usePageLayer.ts"),
				N = n("./src/reddit/selectors/telemetry.ts"),
				I = n("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				M = n("./src/reddit/components/SearchNSFWToggle/SearchNSFWToggle.m.less"),
				T = n.n(M);
			const R = "safe-search-toggle";

			function L({
				searchOptions: e
			}) {
				const t = Object(u.a)(),
					n = Object(w.a)(),
					[r, i] = o.a.useState(!0);
				o.a.useEffect(() => i(null), []);
				const c = Object(P.a)({}),
					{
						nsfwSessionSetting: l,
						setNsfwSessionSetting: m
					} = Object(I.c)(),
					p = Object(a.d)();
				c.arrowProps.style = {
					...c.arrowProps.style,
					borderBottom: `3px solid ${E.e}`
				}, c.popperProps.style = {
					...c.popperProps.style,
					backgroundColor: E.e
				};
				const b = null != r ? r : !l;
				return o.a.createElement("div", {
					className: Object(y.a)(T.a.searchNSFWToggle),
					"data-testid": R,
					onMouseEnter: c.show,
					onMouseLeave: c.hide
				}, o.a.createElement("label", {
					htmlFor: R,
					className: Object(y.a)(T.a.searchNSFWToggleLabel)
				}, s.fbt._("Safe Search", null, {
					hk: "x1C2Y"
				})), o.a.createElement(k.a, {
					activeColorOverride: E.a,
					id: R,
					onToggle: function() {
						t(t => (function(t, n) {
							return {
								action: n ? S.c.DISABLE : S.c.ENABLE,
								source: "search",
								noun: "nsfw",
								actionInfo: Object(N.d)(t),
								search: Object(N.bb)(t, e)
							}
						})(t, !b));
						const s = !l;
						m(s);
						const r = (null == n ? void 0 : n.queryParams[d.q]) || "",
							{
								include_over_18: o,
								...a
							} = (null == n ? void 0 : n.queryParams) || {},
							i = {
								...a,
								...s && {
									[d.j]: "1"
								}
							},
							c = {
								pathname: location.pathname,
								search: Object(j.c)(location.pathname, r, i).replace(location.pathname + "?", "")
							};
						p(Object(x.b)(Object(v.c)(c)))
					},
					on: b,
					redditStyle: !0,
					ref: c.target.ref
				}), o.a.createElement(_.a, {
					visible: c.visible,
					arrowProps: c.arrowProps,
					popperProps: c.popperProps
				}, b && s.fbt._("Turn off safe search to show adult and NSFW (Not Safe for Work) search results", null, {
					hk: "E5puY"
				}), !b && s.fbt._("Turn on safe search to hide adult and NSFW (Not Safe for Work) search results", null, {
					hk: "1G2k8"
				})))
			}
			var A = n("./src/reddit/components/SearchResultsNav/index.m.less"),
				F = n.n(A);

			function D({
				activeTab: e,
				location: t,
				searchOptions: n,
				searchSwitcher: r
			}) {
				const h = Object(u.a)(),
					v = Object(a.e)(O.db),
					x = Object(a.e)(C.q) === g.c.Trending,
					y = n[d.c] || n.q || "",
					E = [{
						condition: !0,
						active: e === c.h.Posts,
						target: p.a.Posts,
						key: "posts",
						contentTypes: "",
						text: s.fbt._("Posts", null, {
							hk: "vNVpl"
						})
					}, {
						condition: !n.is_multi && !n.restrict_sr,
						active: e === c.h.Listings,
						target: p.a.Communities,
						key: "communities",
						contentTypes: i.ac.Subreddits,
						text: s.fbt._("Communities", null, {
							hk: "45NgGC"
						})
					}, {
						condition: !n.is_multi && !n.restrict_sr,
						active: e === c.h.Authors,
						target: p.a.Authors,
						key: "authors",
						contentTypes: i.ac.Users,
						text: s.fbt._("People", null, {
							hk: "Ttxbf"
						})
					}],
					j = v && !x && "1" !== n.sr_nsfw;
				return o.a.createElement("div", {
					"data-testid": "search-results-nav",
					className: F.a.searchResultsNav
				}, o.a.createElement("div", {
					className: F.a.pillRow,
					role: "tablist"
				}, E.filter(e => e.condition).map(e => {
					const {
						active: s,
						key: r,
						text: a,
						contentTypes: i
					} = e;
					return o.a.createElement(m.a, {
						key: r,
						to: Object(l.a)(t, y, i),
						"aria-selected": s,
						role: "tab",
						className: F.a.pillElement,
						onClick: () => (e => {
							e.active && h(Object(p.h)(e.target, n))
						})(e)
					}, o.a.createElement(b.a, {
						active: s,
						onClick: f.a,
						variant: b.b.TAB_GROUP
					}, a))
				})), r && o.a.createElement("div", {
					className: F.a.searchSwitcherContainer
				}, r), j && o.a.createElement("div", {
					className: F.a.nsfwToggleContainer
				}, o.a.createElement(L, {
					searchOptions: n
				})))
			}
		},
		"./src/reddit/components/SearchResultsSidebar/index.m.less": function(e, t, n) {
			e.exports = {
				container: "DpriHZnFiOfa0afZpg8vf",
				header: "_3n4VKjpr-iVnAmYcon-YbI",
				link: "_2tLIUcp3fYt74ZlVikNlz5",
				noResults: "YoadDFUejEmzEbJmjTvHn"
			}
		},
		"./src/reddit/components/SearchResultsSidebar/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return B
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/config.ts"),
				l = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				u = n("./src/reddit/components/CreateCommunitySidebar/index.m.less"),
				m = n.n(u),
				p = n("./src/lib/lessComponent.tsx");
			const {
				fbt: b
			} = n("./node_modules/fbt/lib/FbtPublic.js"), h = p.a.div("ButtonContainer", m.a), f = p.a.div("Container", m.a), g = p.a.img("BannerImg", m.a), C = p.a.img("SnooImg", m.a), O = p.a.div("CommunityText", m.a);
			var v = () => o.a.createElement(f, null, o.a.createElement(g, {
					src: `${d.a.assetPath}/img/search-results-community-banner.png`
				}), o.a.createElement(C, {
					src: `${d.a.assetPath}/img/snoo-thinking.png`
				}), o.a.createElement(O, null, b._("Have an idea for a new community?", null, {
					hk: "LfgUP"
				})), o.a.createElement(h, null, o.a.createElement(l.a, {
					className: m.a.Button,
					eventSource: "sidebar"
				}))),
				x = n("./src/reddit/components/IdCard/async.tsx"),
				y = n("./src/reddit/components/SearchResultsContent/CommunitiesList/index.tsx"),
				E = n("./src/reddit/components/SidebarContainer/index.tsx"),
				j = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				_ = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				S = n("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				k = n("./src/reddit/controls/InternalLink/index.tsx"),
				P = n("./src/reddit/helpers/search/searchResultsTabTo.ts"),
				w = n("./src/reddit/selectors/platform.ts"),
				N = n("./src/reddit/selectors/searchResults.ts"),
				I = n("./src/reddit/selectors/subreddit.ts"),
				M = n("./src/reddit/selectors/user.ts"),
				T = n("./src/reddit/selectors/widgets.ts"),
				R = n("./src/reddit/components/SearchResultsContent/AuthorsList/index.tsx"),
				L = n("./src/reddit/components/SearchResultsSidebar/index.m.less"),
				A = n.n(L);
			const F = Object(i.c)({
					authorIdentifiers: (e, {
						listingKey: t
					}) => Object(N.a)(e, {
						listingKey: t
					}),
					communityIdentifiers: (e, {
						listingKey: t
					}) => Object(N.d)(e, {
						listingKey: t
					}),
					currentSubreddit: w.e,
					isLoggedIn: M.J,
					hasCommunityResults: (e, {
						listingKey: t
					}) => Object(N.h)(e, {
						listingKey: t
					}),
					hasAuthorResults: (e, {
						listingKey: t
					}) => Object(N.g)(e, {
						listingKey: t
					}),
					subredditId: (e, {
						listingName: t
					}) => Object(I.C)(e, t),
					postFlairWidgets: (e, {
						listingName: t
					}) => {
						const n = Object(I.C)(e, t);
						return Object(T.g)(e, {
							subredditId: n
						})
					},
					idCardWidget: (e, {
						listingName: t
					}) => Object(T.d)(e, {
						subredditName: t
					})
				}),
				D = ({
					authorIdentifiers: e,
					className: t,
					communityIdentifiers: n,
					hasAuthorResults: r,
					hasCommunityResults: a,
					listingKey: i,
					listingName: d,
					location: l,
					idCardWidget: u,
					isLoggedIn: m,
					postFlairWidgets: p,
					searchOptions: b,
					currentSubreddit: h
				}) => {
					const f = b.q || "",
						g = Boolean(h && d === h.name && b.restrict_sr),
						C = !!b.is_multi,
						O = n.length - y.e >= 1,
						w = e.length - y.e >= 1;
					let N;
					return g ? N = o.a.createElement(o.a.Fragment, null, u && o.a.createElement(x.a, {
						listingName: d
					}), p && p.map((e, t) => o.a.createElement(j.a, {
						key: `widgetSpacer-${t}`
					}, o.a.createElement(S.a, {
						subredditName: d,
						widget: e
					})))) : C || (N = o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: A.a.container,
						"data-testid": "communities-list"
					}, o.a.createElement("h4", {
						className: A.a.header
					}, s.fbt._("Communities", null, {
						hk: "3cMR66"
					})), a ? o.a.createElement(o.a.Fragment, null, !b.is_multi && o.a.createElement(y.a, {
						identifiers: n,
						listingKey: i,
						searchOptions: b,
						sidebar: !0
					}), O && o.a.createElement(k.a, {
						to: Object(P.a)(l, f, c.ac.Subreddits)
					}, o.a.createElement("p", {
						className: A.a.link
					}, s.fbt._("See more communities", null, {
						hk: "2VoaHj"
					})))) : o.a.createElement("p", {
						className: A.a.noResults
					}, s.fbt._("No results", null, {
						hk: "3feoKq"
					}))), o.a.createElement("div", {
						className: A.a.container,
						"data-testid": "authors-list"
					}, o.a.createElement("h4", {
						className: A.a.header
					}, s.fbt._("People", null, {
						hk: "2M8TqB"
					})), r ? o.a.createElement(o.a.Fragment, null, !b.is_multi && o.a.createElement(R.a, {
						identifiers: e,
						listingKey: i,
						searchOptions: b,
						sidebar: !0
					}), w && o.a.createElement(k.a, {
						to: Object(P.a)(l, f, c.ac.Users)
					}, o.a.createElement("p", {
						className: A.a.link
					}, s.fbt._("See more people", null, {
						hk: "yjtZU"
					})))) : o.a.createElement("p", {
						className: A.a.noResults
					}, s.fbt._("No results", null, {
						hk: "3qx6oy"
					}))), m && o.a.createElement("div", {
						className: A.a.container
					}, o.a.createElement(v, null)))), o.a.createElement(E.a, {
						"data-testid": "search-results-sidebar",
						className: t
					}, N, o.a.createElement(_.a, null))
				},
				B = e => {
					const t = Object(a.e)(t => F(t, e)),
						n = {
							...e,
							...t
						};
					return o.a.createElement(D, n)
				}
		},
		"./src/reddit/components/SearchResultsSubNav/GlobalSearchResultsLink/index.m.less": function(e, t, n) {
			e.exports = {
				TertiaryButton: "_3t6mNXBt6sQ7oZpTvfpI-D",
				tertiaryButton: "_3t6mNXBt6sQ7oZpTvfpI-D",
				AllRedditResultsButton: "_3DJNcKXVcC9fp5NF4suS_j",
				allRedditResultsButton: "_3DJNcKXVcC9fp5NF4suS_j"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/Select/SelectOption/index.m.less": function(e, t, n) {
			e.exports = {
				SelectOption: "_iuAkxGWujgYETf2Xyv89",
				selectOption: "_iuAkxGWujgYETf2Xyv89",
				mIsSelected: "hxyadGitKiIMfl81IVThw"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/Select/index.m.less": function(e, t, n) {
			e.exports = {
				caret: "OGoNN0lGfOACQsVwIa1wo",
				Wrapper: "_3yqn7UgWZCfM22Sk-rcBbs",
				wrapper: "_3yqn7UgWZCfM22Sk-rcBbs",
				caretOpen: "_1ILOkGbdwmhXOmzBDCYXFT",
				filterButton: "BZDMD8yWu5imupa73nqYE",
				hasValue: "_1HyZhQLyitFqci_zC5jGCy",
				Dropdown: "_3RwR0q62tl_HktsM6eNnOn",
				dropdown: "_3RwR0q62tl_HktsM6eNnOn"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/index.m.less": function(e, t, n) {
			e.exports = {
				RightLink: "_3AmQ4JXJufVLUdOsC6v61i",
				rightLink: "_3AmQ4JXJufVLUdOsC6v61i",
				ArrowRight: "FGX7ywlMTix8BeUr5G7TE",
				arrowRight: "FGX7ywlMTix8BeUr5G7TE",
				Component: "_1fPZw9wLFaCEzhzp2Hkx18",
				component: "_1fPZw9wLFaCEzhzp2Hkx18",
				ComponentRedesign: "_26jxFFm8Z3TxPyZxoddAGy",
				componentRedesign: "_26jxFFm8Z3TxPyZxoddAGy"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return pe
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./node_modules/fbt/lib/FbtPublic.js"),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/reddit/constants/parameters.ts"),
				b = n("./src/lib/search/index.ts");
			const h = (e, t, n, s, r, o) => {
				var a;
				const i = Object(b.b)(null !== (a = e[p.q]) && void 0 !== a ? a : ""),
					c = e && e[n],
					d = {};
				let l = Object(b.c)(t || "", i, {
					[n]: r
				});
				const u = [];
				for (const m of s) {
					const e = Object(b.c)(t || "", i, {
						[n]: m
					});
					d[e] = o[m](), u.push(e), c === m && (l = e)
				}
				return {
					optionLabels: d,
					options: u,
					value: l
				}
			};
			var f = n("./src/higherOrderComponents/asTooltip.tsx"),
				g = n("./src/reddit/components/Pill/PillButton/index.tsx"),
				C = n("./src/reddit/controls/Dropdown/index.tsx"),
				O = n("./src/reddit/icons/fonts/index.tsx"),
				v = n("./src/reddit/actions/tooltip.ts"),
				x = n("./src/reddit/selectors/tooltip.ts");
			const y = Object(a.c)({
				isOpen: (e, {
					tooltipId: t
				}) => Object(x.b)(t)(e)
			});
			var E = n("./src/reddit/components/SearchResultsSubNav/Select/index.m.less"),
				j = n.n(E),
				_ = n("./node_modules/query-string/index.js"),
				S = n.n(_),
				k = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				P = n("./src/reddit/components/TrackingHelper/index.tsx"),
				w = n("./src/reddit/constants/history.ts"),
				N = n("./src/reddit/controls/Dropdown/Row.tsx"),
				I = n("./src/reddit/helpers/history/index.ts"),
				M = n("./node_modules/lodash/fromPairs.js"),
				T = n.n(M),
				R = n("./src/lib/extractQueryParams/index.ts"),
				L = n("./src/reddit/helpers/correlationIdTracker.ts"),
				A = n("./src/reddit/helpers/trackers/searchResults.ts"),
				F = n("./src/reddit/selectors/telemetry.ts");
			const D = (e, t) => {
					const n = T()([...Object(R.a)(e)]);
					return Object(m.qc)(n.sort) && (t.sort = n.sort), Object(m.sc)(n.t) && (t.t = n.t), t
				},
				B = (e, t, n, s) => () => e(e => ({
					...Object(A.c)(e),
					source: "search",
					action: "click",
					noun: t,
					correlationId: Object(L.c)(L.a.SearchResults),
					actionInfo: F.d(e),
					search: F.bb(e, D(n, s))
				})),
				U = ({
					option: e,
					...t
				}) => {
					const n = Object(P.b)();
					return r.a.createElement(k.a, {
						key: e,
						to: {
							pathname: S.a.parseUrl(e).url,
							state: {
								[w.b.SearchOriginPage]: Object(I.b)(w.b.SearchOriginPage)
							},
							search: e.replace(S.a.parseUrl(e).url + "?", "")
						},
						onClick: B(n, "full_search_filter_changed", e, t.searchOptions)
					}, r.a.createElement(N.b, {
						className: Object(i.a)(t.styles.SelectOption, t.isSelected && t.styles.mIsSelected),
						displayText: t.displayText,
						isSelected: t.isSelected
					}))
				};
			var G = n("./src/reddit/components/SearchResultsSubNav/Select/SelectOption/index.m.less"),
				H = n.n(G);

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const q = Object(f.a)(e => r.a.createElement(C.a, W({
					className: j.a.Component
				}, e))),
				V = ({
					active: e,
					label: t,
					options: n,
					optionLabels: s,
					searchOptions: a,
					tooltipId: c,
					value: d,
					...l
				}) => {
					const {
						isOpen: u,
						onClick: m
					} = (e => {
						const {
							isOpen: t
						} = Object(o.e)(t => y(t, {
							tooltipId: e
						})), n = Object(o.d)();
						return {
							isOpen: t,
							onClick: t ? () => n(Object(v.i)()) : () => n(Object(v.f)({
								tooltipId: e
							}))
						}
					})(c);
					return r.a.createElement("div", {
						className: j.a.Wrapper
					}, r.a.createElement(g.a, W({}, l, {
						active: u,
						className: Object(i.a)(j.a.filterButton, e && j.a.hasValue),
						onClick: m,
						variant: g.b.TAB_GROUP
					}), t, r.a.createElement(O.a, {
						name: "caret_down",
						className: Object(i.a)(j.a.caret, u && j.a.caretOpen)
					})), r.a.createElement("div", {
						id: c
					}, r.a.createElement(q, {
						className: j.a.Dropdown,
						isOpen: u,
						tooltipId: c
					}, n.map((e, t) => r.a.createElement(U, {
						displayText: s[e],
						key: t,
						isSelected: e === d,
						option: e,
						searchOptions: a,
						styles: {
							mIsSelected: H.a.mIsSelected,
							SelectOption: H.a.SelectOption
						}
					})))))
				},
				K = [m.Xb.Relevance, m.Xb.Hot, m.Xb.Top, m.Xb.New, m.Xb.Comments],
				z = {
					[m.Xb.Hot]: () => u.fbt._("Hot", null, {
						hk: "3c99Ga"
					}),
					[m.Xb.Relevance]: () => u.fbt._("Relevance", null, {
						hk: "LvJkD"
					}),
					[m.Xb.Top]: () => u.fbt._("Top", null, {
						hk: "bijGV"
					}),
					[m.Xb.New]: () => u.fbt._("New", null, {
						hk: "23egpt"
					}),
					[m.Xb.Comments]: () => u.fbt._("Most Comments", null, {
						hk: "4k1FoM"
					})
				};

			function Q() {
				return (Q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const J = [m.gc.HOUR, m.gc.DAY, m.gc.WEEK, m.gc.MONTH, m.gc.YEAR, m.gc.ALL],
				Z = {
					[m.gc.HOUR]: () => u.fbt._("Past Hour", null, {
						hk: "4qCarL"
					}),
					[m.gc.DAY]: () => u.fbt._("Past 24 Hours", null, {
						hk: "GI5qN"
					}),
					[m.gc.WEEK]: () => u.fbt._("Past Week", null, {
						hk: "3jQHYQ"
					}),
					[m.gc.MONTH]: () => u.fbt._("Past Month", null, {
						hk: "11eVJy"
					}),
					[m.gc.YEAR]: () => u.fbt._("Past Year", null, {
						hk: "38MavC"
					}),
					[m.gc.ALL]: () => u.fbt._("All Time", null, {
						hk: "2buTB7"
					})
				};

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var X;
			! function(e) {
				e.SORT = "SORT", e.TIME = "TIME"
			}(X || (X = {}));
			const $ = [X.SORT, X.TIME],
				ee = {
					[X.SORT]: e => {
						const {
							options: t,
							optionLabels: n,
							value: s
						} = h(e.queryParams, e.url, p.x, K, m.Pb, z), o = {
							"data-testid": "search-results-filter-sort",
							options: t,
							optionLabels: n,
							searchOptions: e.searchOptions,
							tooltipId: "search-results-sort",
							value: s
						};
						return r.a.createElement(V, Q({}, o, {
							active: Boolean(e.queryParams[p.x]),
							label: e.queryParams[p.x] ? n[s] : u.fbt._("Sort", null, {
								hk: "2COMme"
							})
						}))
					},
					[X.TIME]: e => {
						const {
							options: t,
							optionLabels: n,
							value: s
						} = h(e.queryParams, e.url, p.B, J.slice().reverse(), m.Qb, Z);
						if (!e.searchOptions || e.searchOptions.sort === m.W.NEW || e.searchOptions.sort === m.W.HOT) return null;
						const o = {
							"data-testid": "search-results-filter-time",
							options: t,
							optionLabels: n,
							searchOptions: e.searchOptions,
							tooltipId: "search-results-time",
							value: s
						};
						return r.a.createElement(V, Y({}, o, {
							active: Boolean(e.queryParams[p.B]),
							label: e.queryParams[p.B] ? n[s] : u.fbt._("Time", null, {
								hk: "3hL0P3"
							})
						}))
					}
				};
			var te = n("./src/lib/lessComponent.tsx"),
				ne = n("./src/reddit/controls/Button/index.tsx"),
				se = n("./src/reddit/helpers/search/switchSearchScope.ts"),
				re = n("./src/reddit/components/SearchResultsSubNav/GlobalSearchResultsLink/index.m.less"),
				oe = n.n(re);
			const {
				fbt: ae
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ie = te.a.wrapped(ne.r, "TertiaryButton", oe.a), ce = te.a.wrapped(ie, "AllRedditResultsButton", oe.a), de = e => {
				const t = Object(P.b)();
				return r.a.createElement(k.a, {
					to: Object(se.a)(e.queryParams)
				}, r.a.createElement(ce, {
					onClick: () => {
						t(t => ({
							...Object(A.c)(t, e.searchOptions),
							action: "click",
							noun: "unrestrict_to_subreddit",
							source: "search_results"
						}))
					},
					"data-redditstyle": !0
				}, ae._("All reddit results", null, {
					hk: "2IBCsX"
				}), r.a.createElement(O.a, {
					name: "forward"
				})))
			};
			var le = n("./src/reddit/components/SearchResultsSubNav/index.m.less"),
				ue = n.n(le);
			const me = Object(a.c)({
					subreddit: l.w
				}),
				pe = e => {
					const {
						subreddit: t
					} = Object(o.e)(t => me(t, e)), n = Object(c.fb)(), s = Object(c.W)(n), a = Object(c.eb)(n), l = t && !!e.searchOptions.restrict_sr && !e.shouldHideGlobalSearchLink;
					return r.a.createElement(d.a, {
						className: Object(i.a)(ue.a.ComponentRedesign),
						"data-testid": "search-results-subnav"
					}, $.map((t, n) => {
						const o = ee[t];
						return r.a.createElement(o, {
							key: n,
							queryParams: s,
							searchOptions: e.searchOptions,
							tab: e.tab,
							url: a
						})
					}), l && r.a.createElement(de, {
						queryParams: s,
						searchOptions: e.searchOptions
					}))
				}
		},
		"./src/reddit/components/SearchSwitcher/index.m.less": function(e, t, n) {
			e.exports = {
				searchSwitcher: "_1i7CStyaaHQU2aiG0GdpSA",
				mSr: "_3-pePLWUAV_CAVhht1dfup",
				redesign: "_3Tphf4AA5J39saIlrB1SYD",
				subredditIcon: "_3swS56fqtrGcixPfTzK_Cl",
				searchSwitcherText: "-V0kqUlRHvLoNRUAUmCy9",
				arrowIcon: "N0zmIZbfRSCGk2rUOGHSS"
			}
		},
		"./src/reddit/components/SearchSwitcher/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				a = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/components/SubredditIcon/index.tsx"),
				l = n("./src/reddit/components/ThemeProvider/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/history.ts"),
				p = n("./src/reddit/controls/InternalLink/index.tsx"),
				b = n("./src/reddit/helpers/history/index.ts"),
				h = n("./src/reddit/helpers/trackers/searchResults.ts"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				g = n("./src/reddit/components/SearchSwitcher/index.m.less"),
				C = n.n(g);
			const {
				fbt: O
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class v extends r.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							searchOptions: e,
							sendEvent: t,
							subreddit: n
						} = this.props;
						t(Object(h.t)(!!n, e))
					}
				}
				render() {
					const {
						redesign: e,
						subreddit: t,
						url: n
					} = this.props, s = {
						[C.a.mSr]: !!t
					}, {
						pathname: o,
						search: l
					} = a.a.parse(n), u = t ? c.Yb.ToSubreddit : c.Yb.ToGlobal, h = t ? r.a.createElement(r.a.Fragment, null, r.a.createElement("span", null, O._("Show results from", null, {
						hk: "3aVDvz"
					})), r.a.createElement(d.b, {
						className: C.a.subredditIcon,
						subredditOrProfile: t
					}), r.a.createElement("p", {
						className: Object(i.a)(C.a.searchSwitcherText, s)
					}, t.displayText)) : r.a.createElement(r.a.Fragment, null, O._("{=Show results from}{=all of Reddit}", [O._param("=Show results from", r.a.createElement("span", null, O._("Show results from", null, {
						hk: "4l8fSw"
					}))), O._param("=all of Reddit", r.a.createElement("p", {
						className: Object(i.a)(C.a.searchSwitcherText, s)
					}, O._("all of Reddit", null, {
						hk: "rc9dH"
					})))], {
						hk: "2NDUqb"
					}));
					return r.a.createElement(p.a, {
						className: Object(i.a)(C.a.searchSwitcher, e && C.a.redesign, s),
						"data-testid": "search-switcher-link",
						onClick: this.onClick,
						to: {
							pathname: o,
							search: l,
							state: {
								searchSwitcherType: u,
								[m.b.SearchOriginPage]: Object(b.b)(m.b.SearchOriginPage)
							}
						}
					}, h, r.a.createElement(f.a, {
						name: "forward",
						className: Object(i.a)(C.a.arrowIcon, s)
					}))
				}
			}
			t.a = Object(u.c)(e => e.subreddit ? r.a.createElement(l.b, {
				subredditName: e.subreddit.name
			}, r.a.createElement(v, e)) : r.a.createElement(v, e))
		},
		"./src/reddit/components/ShortcutIndexModal/index.m.less": function(e, t, n) {
			e.exports = {
				ColumnLabel: "_3RwBfA8Nrz_fZLCoxbAAmA",
				columnLabel: "_3RwBfA8Nrz_fZLCoxbAAmA",
				ColumnWrapper: "_2fnA79IIdtL-mNZYnvBalc",
				columnWrapper: "_2fnA79IIdtL-mNZYnvBalc",
				Column: "_3O97w7RY6RBkLbc3u-Mg4u",
				column: "_3O97w7RY6RBkLbc3u-Mg4u",
				Description: "_2rgXACgxMtUDCuKcGDK6tL",
				description: "_2rgXACgxMtUDCuKcGDK6tL",
				Key: "_3Ren-BGfEFUtj5MNFV9jGZ",
				key: "_3Ren-BGfEFUtj5MNFV9jGZ",
				ModalMain: "_3SVP64qu6nV3rRil6Mkvmk",
				modalMain: "_3SVP64qu6nV3rRil6Mkvmk",
				ModalBody: "_3MZjFI9WV4spd-w0yXdEAG",
				modalBody: "_3MZjFI9WV4spd-w0yXdEAG",
				PrimaryButton: "_2eEY2Q9pfXNNh2P9nh8cn4",
				primaryButton: "_2eEY2Q9pfXNNh2P9nh8cn4",
				TextButton: "_1RrzHtukV58ONGeHXBNR7t",
				textButton: "_1RrzHtukV58ONGeHXBNR7t",
				ConnectedModal: "_1qRgDlLw5wytfgHvP96-gS",
				connectedModal: "_1qRgDlLw5wytfgHvP96-gS"
			}
		},
		"./src/reddit/components/ShortcutWrapper/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "ShortcutWrapper",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ShortcutWrapper").then(n.bind(null, "./src/reddit/components/ShortcutWrapper/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ShortcutWrapper/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less": function(e, t, n) {
			e.exports = {
				shortcutDiv: "hciOr5UGrnYrZxB11tX9s"
			}
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/SidebarContainer/index.m.less"),
				o = n.n(r);
			t.a = s.a.div("container", o.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, n) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				CountryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR",
				countryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/lessComponent.tsx"),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/selectors/experiments/countrySites.ts"),
				l = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				u = n("./node_modules/reselect/es/index.js"),
				m = n("./src/reddit/components/SidebarFooter/index.m.less"),
				p = n.n(m);
			const {
				fbt: b
			} = n("./node_modules/fbt/lib/FbtPublic.js"), h = o.a.a("Link", p.a), f = Object(u.c)({
				isCountrySitesEnabled: d.a,
				isNavbarLikeMwebEnabled: l.a
			}), g = Object(a.b)(f), C = Object(c.u)({
				isFrontpage: c.A,
				isCountrySitePage: c.y
			});
			t.a = C(g(e => e.isNavbarLikeMwebEnabled ? e.isFrontpage ? r.a.createElement(i.a, {
				className: p.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, r.a.createElement("div", {
				className: p.a.LinkContainer
			}, r.a.createElement("div", {
				className: p.a.Column
			}, r.a.createElement(h, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, b._("User Agreement", null, {
				hk: "2RA6JL"
			})), r.a.createElement(h, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, b._("Privacy policy", null, {
				hk: "10K04G"
			}))), r.a.createElement("div", {
				className: p.a.Column
			}, r.a.createElement(h, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, b._("Content policy", null, {
				hk: "1DyxZS"
			})), r.a.createElement(h, {
				href: "https://www.redditinc.com/policies/moderator-guidelines"
			}, b._("Moderator Guidelines", null, {
				hk: "2O9otm"
			})))), r.a.createElement("div", {
				className: p.a.Copyright
			}, b._("© {year} Reddit, Inc. All rights reserved.", [b._param("year", (new Date).getFullYear().toString())], {
				hk: "sR7zP"
			}))) : null : r.a.createElement(i.a, {
				className: p.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, r.a.createElement("div", {
				className: p.a.LinkContainer
			}, r.a.createElement("div", {
				className: p.a.Column
			}, r.a.createElement(h, {
				href: "https://www.reddithelp.com"
			}, b._("help", null, {
				hk: "4lyYaD"
			})), r.a.createElement(h, {
				href: "https://www.reddit.com/coins"
			}, b._("Reddit coins", null, {
				hk: "32iMaN"
			})), r.a.createElement(h, {
				href: "https://www.reddit.com/premium"
			}, b._("Reddit premium", null, {
				hk: "RuO3A"
			})), r.a.createElement(h, {
				href: "https://redditgifts.com/"
			}, b._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && r.a.createElement(r.a.Fragment, null, r.a.createElement(h, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, b._("Communities", null, {
				hk: "3CJu37"
			})), r.a.createElement(h, {
				href: "https://www.reddit.com/posts/2020/"
			}, b._("Rereddit", null, {
				hk: "1z3k7C"
			})), r.a.createElement(h, {
				href: "https://www.reddit.com/topics/a-1/"
			}, b._("Topics", null, {
				hk: "349RFt"
			})))), r.a.createElement("div", {
				className: p.a.Column
			}, r.a.createElement(h, {
				href: "https://about.reddit.com"
			}, b._("about", null, {
				hk: "1sqJKs"
			})), r.a.createElement(h, {
				href: "https://about.reddit.com/careers/"
			}, b._("careers", null, {
				hk: "26ABvc"
			})), r.a.createElement(h, {
				href: "https://about.reddit.com/press/"
			}, b._("press", null, {
				hk: "2Qmgdz"
			})), r.a.createElement(h, {
				href: "https://www.redditinc.com/advertising"
			}, b._("advertise", null, {
				hk: "Mt40U"
			})), r.a.createElement(h, {
				href: "http://www.redditblog.com/"
			}, b._("blog", null, {
				hk: "46IQJw"
			})), r.a.createElement(h, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, b._("Terms", null, {
				hk: "4qRzfE"
			})), r.a.createElement(h, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, b._("Content policy", null, {
				hk: "1DyxZS"
			})), r.a.createElement(h, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, b._("Privacy policy", null, {
				hk: "10K04G"
			})), r.a.createElement(h, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, b._("Mod policy", null, {
				hk: "2gYc2T"
			})))), (e.isCountrySitePage || e.isFrontpage && e.isCountrySitesEnabled) && r.a.createElement("div", {
				className: p.a.CountryLinkContainer
			}, r.a.createElement("div", {
				className: p.a.Column
			}, r.a.createElement(h, {
				href: "/"
			}, b._("USA/Global", null, {
				hk: "3nQepG"
			}))), r.a.createElement("div", {
				className: p.a.Column
			}, r.a.createElement(h, {
				href: "/de/"
			}, b._("Deutsch", null, {
				hk: "31zojm"
			})))), r.a.createElement("div", {
				className: p.a.Copyright
			}, b._("Reddit Inc © {year} . All rights reserved", [b._param("year", (new Date).getFullYear().toString())], {
				hk: "3nJUt5"
			})))))
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				r = n.n(s),
				o = n("./src/lib/lessComponent.tsx");
			t.a = o.a.div("Component", r.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/lodash/throttle.js"),
				o = n.n(r),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/constants/elementIds.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/components/BackToTop/index.m.less"),
				m = n.n(u);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = e => {
				if (e) {
					const e = document.getElementById(d.d);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			var h = ({
					className: e,
					isOverlay: t,
					style: n
				}) => i.a.createElement("div", {
					className: Object(s.a)(e, m.a.container),
					style: n
				}, i.a.createElement(l.l, {
					className: m.a.button,
					onClick: () => b(t)
				}, p._("Back to Top", null, {
					hk: "YjBtV"
				}))),
				f = n("./src/reddit/components/SidebarFooter/index.tsx"),
				g = n("./src/reddit/constants/componentSizes.ts"),
				C = n("./src/reddit/contexts/PageLayer/index.tsx"),
				O = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				v = n.n(O),
				x = n("./src/lib/lessComponent.tsx");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const E = c.e[1] + 24,
				j = g.f + 8,
				_ = j + 152 + 16,
				S = _ + E + 8,
				k = x.a.div("Container", v.a),
				P = x.a.wrapped(({
					className: e,
					isOverlay: t,
					...n
				}) => i.a.createElement(h, y({
					className: e,
					isOverlay: t,
					style: {
						top: `calc(100vh - ${t?j:8}px)`
					}
				}, n)), "BackToTop", v.a),
				w = ({
					children: e,
					className: t,
					isFakeOverlay: n,
					isSticky: r
				}) => i.a.createElement("div", {
					className: Object(s.a)(t, {
						[v.a.StickyStyles]: r && !n,
						[v.a.StickyStylesFakeOverlay]: !!n
					})
				}, e);
			class N extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > S,
						shouldFooterSticky: this.windowHeight > _
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = o()(() => {
						this.updateMeasurements(), this.updateState()
					}, c.K), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					var e;
					const {
						props: {
							adComponent: t,
							adComponentOnFakeOverlay: n,
							children: s,
							className: r,
							hideFooter: o,
							pageLayer: a
						}
					} = this, c = this.state.isAdSticky && !(!t && !s);
					return i.a.createElement(k, {
						className: r,
						innerRef: this.setWrapperRef
					}, i.a.createElement(w, {
						isFakeOverlay: n,
						isSticky: c
					}, t, s, !o && i.a.createElement(f.a, null)), !this.props.hideBackToTop && i.a.createElement(P, {
						isOverlay: !!(null === (e = null == a ? void 0 : a.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const I = Object(C.u)();
			t.a = I(N)
		},
		"./src/reddit/components/StructuredStyles/BladeManager/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class a extends r.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return r.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var i = Object(o.a)(a);
			t.a = e => r.a.createElement(i, e)
		},
		"./src/reddit/components/SubredditCreationModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "SubredditCreation",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("SubredditCreation").then(n.bind(null, "./src/reddit/components/SubredditCreationModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/SubredditCreationModal/index.tsx"
				}
			});
			Object(a.b)(i.a.SUBREDDIT_CREATION_MODAL_ID, e => o.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			var d = c
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = n.n(c),
				l = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = (e, t, n) => null != n ? n : t ? e : a.c.Plain,
				p = ({
					border: e,
					priority: t,
					small: n,
					...s
				}) => o.a.createElement(a.t, u({}, s, {
					priority: m(a.c.Primary, e, t),
					className: Object(l.a)(s.className, d.a.BaseButton),
					size: n ? a.d.S : a.d.M
				})),
				b = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? s.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : s.fbt._("Following", null, {
					hk: "1wQlVR"
				})), o.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? s.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : s.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				h = ({
					buttonType: e,
					border: t,
					priority: n,
					small: s,
					...r
				}) => o.a.createElement(a.t, u({}, r, {
					priority: m(a.c.Secondary, t, n),
					className: Object(l.a)(r.className, d.a.BaseButton),
					size: s ? a.d.S : a.d.M,
					text: b(e)
				}));
			class f extends o.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? (this.props.onUnsubscribe(), this.props.afterUnsubscribeAction && this.props.afterUnsubscribeAction()) : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: n,
						priority: s,
						small: r = !1,
						isFullWidth: a = !1
					} = this.props, c = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: s,
						small: r,
						isFullWidth: a
					};
					return this.props.userIsSubscriber ? o.a.createElement(h, u({}, c, {
						buttonType: this.props.identifier.type
					})) : o.a.createElement(p, u({}, c, {
						id: n
					}), this.props.children, Object(i.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				r = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(s.c)(o.a))
		},
		"./src/reddit/components/Survey/hooks.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return _
			})), n.d(t, "a", (function() {
				return S
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "c", (function() {
				return P
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/isEqual.js"),
				o = n.n(r),
				a = n("./node_modules/lodash/shuffle.js"),
				i = n.n(a),
				c = n("./node_modules/react/index.js"),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/reddit/actions/preferences.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/helpers/survey/index.ts"),
				p = n("./src/reddit/selectors/survey.ts"),
				b = n("./src/reddit/selectors/telemetry.ts");
			const h = (e, t) => {
					const n = Object(p.c)(e),
						s = Object(p.a)(e);
					if (n && s) return {
						experiment_name: "desktop_local_survey_demo",
						experiment_variant: `trigger_${s}`,
						experiment_version: -1
					};
					const r = b.q(e, t);
					return r ? {
						experiment_name: r.name,
						experiment_variant: r.variant,
						experiment_version: r.version
					} : {}
				},
				f = e => {
					switch (e) {
						case m.a.CES:
							return "ces";
						case m.a.CSAT:
							return "csat";
						case m.a.NPS:
							return "nps";
						case m.a.MULTI_CHOICE:
							return "multi_choice"
					}
				},
				g = (e, t) => n => ({
					source: "survey",
					action: t,
					noun: "intro",
					...b.o(n),
					survey: h(n, e)
				}),
				C = ({
					action: e,
					experimentName: t,
					question: n,
					score: s,
					questionId: r,
					questionParentId: o,
					type: a
				}) => i => ({
					source: "survey",
					action: e,
					noun: "rating",
					...b.o(i),
					survey: {
						type: f(a),
						min: a === m.a.NPS ? 0 : 1,
						max: a === m.a.NPS ? 10 : 7,
						question: n,
						question_id: r,
						parent_question_id: o,
						score: s,
						...h(i, t)
					}
				}),
				O = ({
					action: e,
					experimentName: t,
					question: n,
					text: s,
					type: r,
					questionId: o,
					questionParentId: a
				}) => i => ({
					source: "survey",
					action: e,
					noun: "freeform_text",
					...b.o(i),
					survey: {
						question: n,
						type: f(r),
						text: s,
						question_id: o,
						parent_question_id: a,
						...h(i, t)
					}
				}),
				v = ({
					action: e,
					experimentName: t,
					question: n,
					score: s,
					type: r,
					questionId: o,
					questionParentId: a,
					max: i,
					text: c
				}) => d => ({
					source: "survey",
					action: e,
					noun: "multi_choice",
					...b.o(d),
					survey: {
						type: f(r),
						min: 0,
						max: i,
						text: c,
						question: n,
						score: s,
						question_id: o,
						parent_question_id: a,
						...h(d, t)
					}
				});
			var x = n("./src/reddit/hooks/useTracking.ts"),
				y = n("./src/reddit/models/Toast/index.ts"),
				E = n("./src/reddit/selectors/experiments/index.ts"),
				j = n("./src/reddit/selectors/user.ts");
			const _ = () => {
					const e = Object(d.d)(),
						[t, n] = Object(c.useState)(null),
						s = Object(x.a)(),
						r = Object(d.e)(j.i),
						a = Object(d.e)(j.rb),
						i = Object(d.e)(E.a, o.a),
						u = Object(d.e)(p.c),
						b = Object(d.e)(p.a),
						h = Object(d.e)(p.b),
						f = Object(d.e)(p.d),
						C = Object(c.useMemo)(() => {
							const e = Object(m.g)(),
								t = {};
							for (const n of e) t[n] = i[n];
							return t
						}, [i]),
						O = Object(c.useCallback)(e => {
							const s = Object(m.f)({
								triggerName: e,
								surveyExperimentVariants: C,
								samplingId: r || a,
								isDemoEnabled: u,
								activeDemoTrigger: b,
								demoTriggerThreshold: h,
								isSampleFactorEnabled: f
							});
							if (u) return void(s && n(s));
							if (!s || s === t) return;
							const o = C[s.experiment_name];
							(null == o ? void 0 : o.variant) && s.variants[o.variant] && setTimeout(() => n(s), 500)
						}, [t, C, r, a, f, u, b, h]);
					return Object(c.useEffect)(() => {
						const e = Object(m.d)(),
							t = e.subscribe(O);
						return () => e.unsubscribe(t)
					}, [O]), Object(c.useEffect)(() => {
						if (!t) return;
						const n = Date.now();
						Object(m.i)(t, n), e(Object(l.H)({
							surveyLastSeenTime: n
						}, !1)), s(g(t.experiment_name, "display"))
					}, [t, e, s]), {
						activeSurvey: t,
						setActiveSurvey: n
					}
				},
				S = ({
					activeStepNum: e,
					activeSurvey: t,
					isFollowUp: n,
					textResponse: s,
					setTextResponse: r,
					setIsSurveyDismissed: o,
					uiStep: a
				}) => {
					(({
						isFollowUp: e,
						textResponse: t
					}) => {
						const n = Object(c.useCallback)(n => {
							if (e && t.length) return n.preventDefault(), n.returnValue = "sure?", "sure?"
						}, [e, t]);
						Object(c.useEffect)(() => (window.addEventListener("beforeunload", n), () => window.removeEventListener("beforeunload", n)), [n])
					})({
						isFollowUp: n,
						textResponse: s
					});
					const [i, d] = Object(c.useState)(!1), l = Object(x.a)(), u = t.experiment_name, p = t.steps[e], b = null == p ? void 0 : p.type, h = null == p ? void 0 : p.question, f = Object(c.useCallback)(() => {
						e >= 0 ? d(!0) : (o(!0), l(g(t.experiment_name, "dismiss")))
					}, [e, t, l, o]), y = Object(c.useCallback)(() => {
						r(""), o(!0);
						const e = {
							question: h,
							experimentName: u,
							type: b,
							action: "dismiss",
							questionId: a.toString(),
							questionParentId: p.type === m.a.MULTI_CHOICE && n ? `${a-1}` : null
						};
						l(n ? O(e) : p.type === m.a.MULTI_CHOICE ? v(e) : C(e))
					}, [u, n, h, p, l, o, r, b, a]);
					return {
						isLeavingModalShowing: i,
						onClose: f,
						onLeaveCancel: Object(c.useCallback)(() => d(!1), []),
						onLeaveConfirm: y
					}
				},
				k = ({
					activeSurvey: e,
					selectedNumber: t,
					setIsSurveyDismissed: n,
					setSelectedNumber: s,
					setTextResponse: r,
					textResponse: o
				}) => {
					const [a, d] = Object(c.useState)(-1), [l, u] = Object(c.useState)(0), [p, b] = Object(c.useState)(!1), h = Object(x.a)(), [f, y] = Object(c.useState)(""), [E, j] = Object(c.useState)([]), _ = Object(c.useCallback)(() => {
						var c, x;
						const E = e.experiment_name,
							_ = e.steps[a],
							S = null == _ ? void 0 : _.type,
							k = null == _ ? void 0 : _.question,
							P = null == _ ? void 0 : _.follow_up_question,
							w = e.steps[a + 1],
							N = null == w ? void 0 : w.type,
							I = null == w ? void 0 : w.question;
						if (u(l + 1), w && w.question_options && j(i()(w.question_options)), -1 === a) {
							h(g(E, "agree")), d(0);
							const e = {
								question: I,
								type: N,
								action: "display",
								experimentName: E,
								questionId: `${l+1}`.toString(),
								questionParentId: null
							};
							return void h(N === m.a.MULTI_CHOICE ? v({
								text: f,
								...e
							}) : C(e))
						}
						const M = {
							experimentName: E,
							type: S,
							action: "submit",
							questionId: l.toString(),
							questionParentId: _.type === m.a.MULTI_CHOICE && p ? `${l-1}` : null
						};
						if (h(p ? O({
								text: o,
								question: P,
								...M
							}) : S === m.a.MULTI_CHOICE ? v({
								question: k,
								max: null === (c = _.question_options) || void 0 === c ? void 0 : c.length,
								score: null === (x = _.question_options) || void 0 === x ? void 0 : x.findIndex(e => e === f),
								text: f,
								...M
							}) : C({
								question: k,
								score: t && t + (S === m.a.NPS ? 0 : 1),
								...M
							})), s(void 0), r(""), y(""), p || !P)
							if (b(!1), a + 1 >= e.steps.length) n(!0);
							else {
								d(a + 1);
								const e = {
									experimentName: E,
									action: "display",
									type: N,
									question: I,
									questionId: (l + 1).toString()
								};
								h(N === m.a.MULTI_CHOICE ? v({
									text: f,
									...e
								}) : C(e))
							}
						else b(!0), h(O({
							experimentName: E,
							action: "display",
							type: S,
							question: P,
							questionId: `${l+1}`,
							questionParentId: l.toString()
						}))
					}, [f, y, a, e, p, o, t, h, n, s, r, l]);
					return {
						questionOptions: E,
						selectedOption: f,
						setSelectedOption: y,
						activeStepNum: a,
						isFollowUp: p,
						onStepComplete: _,
						uiStep: l,
						setActiveStepNum: d,
						setUIStep: u,
						setIsFollowUp: b
					}
				},
				P = ({
					isSurveyDismissed: e,
					setIsSurveyDismissed: t,
					setActiveStepNum: n,
					setActiveSurvey: r,
					setUIStep: o,
					setIsFollowUp: a,
					shouldMount: i,
					uiStep: l
				}) => {
					const m = Object(d.d)();
					Object(c.useEffect)(() => {
						e && !i && setTimeout(() => {
							n(-1), o(0), a(!1), r(null), l > 1 && m(Object(u.f)({
								text: s.fbt._("Thanks for your feedback!", null, {
									hk: "11jNYw"
								}),
								kind: y.b.SuccessCommunityGreen
							}))
						}, 500)
					}, [m, e, i, l, t, n, r, o, a])
				}
		},
		"./src/reddit/components/Survey/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/Survey/hooks.ts");
			const i = Object(s.a)({
				resolved: {},
				chunkName: () => "SurveyAsync",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("SurveyAsync").then(n.bind(null, "./src/reddit/components/Survey/Async.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Survey/Async.tsx"
				}
			});

			function c() {
				const {
					activeSurvey: e,
					setActiveSurvey: t
				} = Object(a.d)();
				return e ? o.a.createElement(i, {
					activeSurvey: e,
					setActiveSurvey: t
				}) : null
			}
		},
		"./src/reddit/components/ThemeProvider/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/objectSelector/index.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = n("./src/reddit/models/StructuredStyles/index.ts"),
				m = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/selectors/structuredStyles.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				f = n("./src/lib/CSSVariableProvider/index.tsx"),
				g = n("./src/lib/isAdHocMultireddit/index.ts");
			const C = (e, t) => t.forceRedditTheme ? void 0 : void 0 !== t.subredditName ? t.subredditName : Object(l.p)(e, t);
			class O extends o.a.Component {
				render() {
					const {
						children: e,
						isRootOrUniqueClassName: t,
						theme: n
					} = this.props;
					return o.a.createElement(f.e, {
						theme: n,
						isRootOrUniqueClassName: t
					}, e)
				}
			}
			const v = Object(a.b)(() => Object(i.a)(e => e.themes.current, e => !!Object(p.i)(e), e => {
				if (Object(p.i)(e)) return e.structuredStyles.draft
			}, (e, t) => {
				if (Object(p.i)(e)) return Object(p.f)(e, t)
			}, C, Object(c.a)((e, t) => {
				if (Object(p.i)(e) || Object(h.jb)(e)) return;
				const n = C(e, t);
				if (!n) return;
				const s = Object(b.C)(e, n);
				if (!s) return;
				if (Object(h.ib)(e, {
						subredditId: s
					})) return;
				const r = e.structuredStyles.models[s];
				return r || void 0
			}), (e, t) => {
				const n = C(e, t);
				if (!n) return;
				const s = Object(b.t)(e, {
					subredditName: n
				});
				return s ? s.emojisCustomSize : void 0
			}, (e, t) => {
				if (t.forceDayMode) return !1;
				return Object(h.tb)(e).nightmode
			}, (e, t) => {
				const n = Object(h.tb)(e);
				if (Object(h.J)(e)) return !n.hideNSFW;
				const s = C(e, t);
				if (s) {
					const t = Object(b.w)(e, {
						subredditName: s
					});
					return !(!t || !t.isNSFW)
				}
				const r = Object(l.e)(e, t);
				return !!r && r.isNSFW
			}, (e, t) => t.isOverlay, (e, t) => t.isCommentsPage, (e, t, n, r, o, a, i, c, d, l, p) => {
				const b = {
						...i ? {
							emojiWidth: i[0],
							emojiHeight: i[1]
						} : {},
						shouldShowNSFWContent: d,
						isCommentsPage: p,
						isOverlay: l
					},
					h = o && o.length && !Object(g.a)(o) ? `subredditvars-r-${o.toLocaleLowerCase()}` : f.c;
				if (t && n && r) {
					const e = Object(u.h)(n, r);
					return {
						isRootOrUniqueClassName: h,
						theme: Object(m.i)(e, b)
					}
				}
				if (a) {
					const e = Object(u.h)(a);
					let t;
					return {
						isRootOrUniqueClassName: h,
						theme: t = c ? Object(m.h)(e, b) : Object(m.i)(e, b)
					}
				}
				return {
					isRootOrUniqueClassName: h,
					theme: Object(s.merge)(e, {
						subredditContext: b
					})
				}
			}))(O);
			t.b = v;
			const x = Object(d.u)()(v)
		},
		"./src/reddit/components/Toaster/EuCookiePolicyToast.m.less": function(e, t, n) {
			e.exports = {
				Icon: "_2pPCvXlD2wzNO9taY3pzqw",
				icon: "_2pPCvXlD2wzNO9taY3pzqw",
				PrimaryButton: "_1tI68pPnLBjR1iHcL7vsee",
				primaryButton: "_1tI68pPnLBjR1iHcL7vsee",
				Bread: "_3RhWPJfjpsEoBw52x0fQp2",
				bread: "_3RhWPJfjpsEoBw52x0fQp2",
				EuCookiePolicyBody: "_3vKcvhm0JtGJa_zEd1cO2w",
				euCookiePolicyBody: "_3vKcvhm0JtGJa_zEd1cO2w",
				EuCookiePolicyOptions: "_2BNSty-Ld4uppTeWGfEe8r",
				euCookiePolicyOptions: "_2BNSty-Ld4uppTeWGfEe8r"
			}
		},
		"./src/reddit/components/Toaster/MilestoneToast.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3Cb-J_TUgYhl23GF1E8ueS",
				container: "_3Cb-J_TUgYhl23GF1E8ueS",
				SideImage: "_3noiB6ClBZxqX-VfENVYha",
				sideImage: "_3noiB6ClBZxqX-VfENVYha",
				Main: "_2uE5iMLmEfZ_HNjn85c1NP",
				main: "_2uE5iMLmEfZ_HNjn85c1NP",
				SubTitle: "_2dvmXQB_w1cCQdCLjHGb0F",
				subTitle: "_2dvmXQB_w1cCQdCLjHGb0F",
				PrimaryLinkButton: "_2JcKYVeW6FIeewNVpxApr6",
				primaryLinkButton: "_2JcKYVeW6FIeewNVpxApr6",
				CloseIcon: "_1kI4teIozhxDil2omCIIs5",
				closeIcon: "_1kI4teIozhxDil2omCIIs5"
			}
		},
		"./src/reddit/components/Toaster/PlainBread.m.less": function(e, t, n) {
			e.exports = {
				PlainBread: "trdUvQxqQHHqQKOUBcgnr",
				plainBread: "trdUvQxqQHHqQKOUBcgnr"
			}
		},
		"./src/reddit/components/Toaster/StyledComponents.m.less": function(e, t, n) {
			e.exports = {
				Text: "_7JH6kQpO-bx66b9ajIZrz",
				text: "_7JH6kQpO-bx66b9ajIZrz"
			}
		},
		"./src/reddit/components/Toaster/UappBannerToast.m.less": function(e, t, n) {
			e.exports = {
				Icon: "NODQrxMsajJv0SMw0Glss",
				icon: "NODQrxMsajJv0SMw0Glss",
				PrimaryButton: "_-660JDG_NhSvu-lby-LYB",
				primaryButton: "_-660JDG_NhSvu-lby-LYB",
				Bread: "_3jUV8naze01hV-7EqsBdjm",
				bread: "_3jUV8naze01hV-7EqsBdjm"
			}
		},
		"./src/reddit/components/Toaster/index.m.less": function(e, t, n) {
			e.exports = {
				AuthErrorToastIcon: "_2Jt0Cjod2bIVz4VEgb6ZNn",
				authErrorToastIcon: "_2Jt0Cjod2bIVz4VEgb6ZNn",
				AuthErrorToastPrimaryButton: "_1BkkYahLrqvrnZoHHBH9pU",
				authErrorToastPrimaryButton: "_1BkkYahLrqvrnZoHHBH9pU",
				CustomIcon: "_3F4cPSBsBgzFOcnpe466x-",
				customIcon: "_3F4cPSBsBgzFOcnpe466x-",
				SnooFacepalm: "_33UT9FofKPRVp4gDnLAM-6",
				snooFacepalm: "_33UT9FofKPRVp4gDnLAM-6",
				SnooHappy: "_5OZRCtpmuaH0Is4CZ7GpZ",
				snooHappy: "_5OZRCtpmuaH0Is4CZ7GpZ",
				SubredditIcon: "_-43TYgcIz7mHcgQHam-CV",
				subredditIcon: "_-43TYgcIz7mHcgQHam-CV",
				UnlockIcon: "tClrg2w16xkW4hmCj8nTo",
				unlockIcon: "tClrg2w16xkW4hmCj8nTo",
				LockIcon: "ZI0D2mGVpaunJEvFji7pm",
				lockIcon: "ZI0D2mGVpaunJEvFji7pm",
				RemoveIcon: "vvMBwTMgHpgz4UTQ4H_nJ",
				removeIcon: "vvMBwTMgHpgz4UTQ4H_nJ",
				Container: "_3q-XSJ2vokDQrvdG6mR__k",
				container: "_3q-XSJ2vokDQrvdG6mR__k",
				Bread: "EjdBJNEwygtHMKiHd3Bnv",
				bread: "EjdBJNEwygtHMKiHd3Bnv",
				mModal: "_29WPjLJ0vRIyLIUC_lQ4a8",
				ButtonsWrapper: "_2-rGW3UtrT-pD45pofU3tx",
				buttonsWrapper: "_2-rGW3UtrT-pD45pofU3tx",
				ContentWrapper: "_21oJwLzDt5kLN6scufKBab",
				contentWrapper: "_21oJwLzDt5kLN6scufKBab"
			}
		},
		"./src/reddit/components/Upsell/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
					resolved: {},
					chunkName: () => "BottomCellWrapper",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("BottomCellWrapper").then(n.bind(null, "./src/reddit/components/Upsell/BottomCellWrapper/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Upsell/BottomCellWrapper/index.tsx"
					}
				}, {
					ssr: !1
				}),
				o = Object(s.a)({
					resolved: {},
					chunkName: () => "BottomSheetUpsellWrapper",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("BottomSheetUpsellWrapper").then(n.bind(null, "./src/reddit/components/Upsell/BottomSheetUpsellWrapper/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Upsell/BottomSheetUpsellWrapper/index.tsx"
					}
				}, {
					ssr: !1
				})
		},
		"./src/reddit/components/UserFlairPicker/index.m.less": function(e, t, n) {
			e.exports = {
				buttonsRow: "_2jjk9b3mpveU6Vpam4kPBm",
				rightSideButtons: "_1DUcff8CoMLomEzQZ1S6IX",
				clearButton: "_2HCY4xCLt3RKVIgnkh0ZgW",
				goBackButton: "saAxhszfFnlBT8m48Quv9",
				Section: "_3dGLI85CRTmDAbSQrDiQZl",
				section: "_3dGLI85CRTmDAbSQrDiQZl",
				CheckboxText: "_2pIwiaNLf5jaTR1EK7Nx09",
				checkboxText: "_2pIwiaNLf5jaTR1EK7Nx09"
			}
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				d = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				u = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				m = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				p = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				b = n.n(p);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const f = Object(i.c)({
					currentUser: d.k,
					isNightMode: d.W,
					isPresenceUserPrefEnabled: d.O,
					shouldHideNSFW: d.C
				}),
				g = Object(a.b)(f);
			t.a = g(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: r,
					wrapperClassName: a,
					...i
				} = e, d = Object(c.a)(null == t ? void 0 : t.accountIcon);
				return o.a.createElement("div", {
					className: Object(s.a)(b.a.currentUserIconWrapper, a)
				}, d ? o.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : o.a.createElement(m.b, h({}, i, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && o.a.createElement(l.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/components/Widgets/PostFlair/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				widgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				TertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				tertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				StyledFlair: "ij57zT3Rtmsew_4V8vYmY",
				styledFlair: "ij57zT3Rtmsew_4V8vYmY",
				cloudDisplay: "l8B49A4v1dhWGGEwM7vYA",
				flairFilter: "_1Dpo5nORF-CHLCeoDHpZuR",
				Flair: "_3b9QdopIknN9AuNvj2kI9X",
				flair: "_3b9QdopIknN9AuNvj2kI9X",
				"m-selected": "XUSGYTFEMdkVpqVqn1ZsC",
				mSelected: "XUSGYTFEMdkVpqVqn1ZsC",
				flairFilterContainer: "qHKWh5t-0ZHqZ00w567bU",
				flairFilterButton: "_1Uh_u9ypgpntBJ_2RC1Ge3"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/fastdom/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/components/Flair/index.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = n("./src/reddit/constants/parameters.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/helpers/correlationIdTracker.ts"),
				C = n("./src/reddit/helpers/flair.ts"),
				O = n("./src/reddit/helpers/trackers/postFlair.ts"),
				v = n("./src/reddit/models/Widgets/index.ts"),
				x = n("./src/reddit/selectors/subreddit.ts"),
				y = n("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				E = n.n(y);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = 129,
				S = Object(h.u)({
					filterName: e => Object(h.W)(e)[b.g],
					url: e => Object(h.eb)(e)
				}),
				k = Object(i.c)({
					subredditId: (e, t) => Object(x.C)(e, t.subredditName)
				}),
				P = Object(a.b)(k),
				w = l.a.div("WidgetContent", E.a),
				N = ({
					display: e,
					isFlairFilter: t,
					onMouseDown: n,
					...s
				}) => o.a.createElement("li", {
					className: Object(c.a)(E.a.StyledFlair, e === v.g.Cloud && E.a.cloudDisplay, {
						[E.a.flairFilter]: t,
						[E.a["m-selected"]]: s.isSelected
					}),
					onMouseDown: n
				}, o.a.createElement(u.b, j({}, s, {
					className: E.a.Flair,
					isFlairFilter: t,
					forceSmallEmojis: !0
				})));
			class I extends o.a.Component {
				constructor(e) {
					super(e), this.flairListRef = o.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(O.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(O.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(O.d)())
					}, this.onClick = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(g.e)(g.a.SearchResults), this.props.sendEvent(Object(O.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(C.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(C.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					d.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > _ && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return o.a.createElement(f.r, {
						className: E.a.flairFilterButton,
						onMouseDown: this.trackFlairOverflowClick,
						onClick: this.onToggleCollapse
					}, this.state.isCollapsed ? s.fbt._("See more", null, {
						hk: "2fWFes"
					}) : s.fbt._("See less", null, {
						hk: "3oxSZ9"
					}))
				}
				renderFlairs(e) {
					const {
						subredditName: t,
						widget: n
					} = this.props;
					return o.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => o.a.createElement(N, {
						key: e.templateId,
						display: n.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(C.e)(this.props.url, Object(C.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, n = t ? _ : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return o.a.createElement("div", {
						className: E.a.flairFilterContainer,
						style: {
							maxHeight: n
						}
					}, this.renderFlairs(e))
				}
				renderSelectedFlairFilter(e) {
					const {
						subredditName: t,
						widget: n
					} = this.props;
					return o.a.createElement("ul", null, o.a.createElement(N, {
						key: e.templateId,
						display: n.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(C.e)(this.props.url, Object(C.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: n
					} = this.state, s = t.order, r = this.getFlairsFromIds(s), a = e && this.getSelectedFlair(r) || void 0, i = t.order.length > s.length || n && !a;
					return o.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, o.a.createElement(w, null, a && this.renderSelectedFlairFilter(a), !a && this.renderFlairFilters(r), i && this.renderButton()))
				}
			}
			t.a = S(P(Object(m.c)(I)))
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, n) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/reddit/components/SEOTitle/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/widgets.ts"),
				b = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = n("./src/reddit/selectors/experiments/topPosts.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/models/Theme/index.ts"),
				O = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const v = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(O.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				x = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(O.a)(e).widgetColors.sidebarWidgetHeaderColor,
				y = e => {
					const t = v(e);
					return Object(C.f)(t)
				},
				E = e => {
					const t = x(e);
					return Object(C.f)(t)
				};
			var j = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				_ = n.n(j);
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js"), k = Object(u.u)(), P = Object(o.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.n)(e, t) || void 0,
						s = t.redditStyle || Object(f.l)(e, {
							subredditId: n
						}),
						r = Object(g.W)(e);
					return s || r
				},
				nigtmode: g.W,
				subredditId: u.n,
				topPostVariant: h.d
			}));
			class w extends r.a.Component {
				constructor() {
					super(...arguments), this.contentRef = r.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(p.b)(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = v(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = y(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = x(this.props), e.color = e.fill = E(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: s,
						headerButton: o,
						id: a,
						onClick: c,
						onHeaderClick: l,
						title: u,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = n ? _.a.widgetContentOnly : _.a.widgetContent, f = !s && this.props.styles, g = f ? this.getWidgetBackgroundStyles() : {}, C = f ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(i.a)(t, _.a.widgetBackground, {
							[_.a.redditStyle]: s,
							[_.a.clickable]: !!c,
							[_.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: c,
						style: g
					}, u && r.a.createElement("div", {
						className: Object(i.a)(_.a.widgetHeader, {
							[_.a.clickable]: !!l
						}),
						id: a,
						style: C,
						onClick: l
					}, r.a.createElement("div", {
						className: Object(i.a)(_.a.widgetTitle, p)
					}, r.a.createElement(d.b, {
						type: d.a.Widget
					}, u)), o), r.a.createElement("div", {
						className: Object(i.a)(h, {
							[_.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(m.r, {
						className: _.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, S._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = k(P(Object(c.a)(Object(l.c)(w))))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return E
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "b", (function() {
				return k
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/actions/ads/index.ts"),
				i = n("./src/reddit/actions/focusedVerticals/index.ts"),
				c = n("./src/reddit/actions/gold/tooltips.ts"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/postList.ts"),
				u = n("./src/reddit/actions/survey/index.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = n("./src/reddit/helpers/trackers/post.ts"),
				f = n("./src/reddit/components/PostList/Placeholder.tsx"),
				g = n("./src/reddit/featureFlags/index.ts"),
				C = n("./src/reddit/selectors/experiments/survey.ts"),
				O = n("./src/reddit/selectors/listings.ts"),
				v = n("./src/reddit/selectors/posts.ts"),
				x = n("./src/reddit/selectors/subreddit.ts"),
				y = n("./src/reddit/selectors/tracking.ts");

			function E() {
				return Object(p.u)({
					currentProfileName: p.i,
					isCommentPermalink: p.w,
					isCommentsPage: p.x,
					isFrontpage: p.A,
					isProfilePostListing: p.L,
					isTopicPage: p.Q,
					pageLayer: e => e
				})
			}
			const j = E(),
				_ = {
					apiError: O.c,
					apiPending: O.d,
					measureScrollFPS: g.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.R)(e, t),
					loadMore: O.g,
					postsById: v.T,
					postIds: Object(o.a)((e, {
						listingKey: t,
						listingName: n,
						inSubredditOrProfile: s
					}) => Object(v.E)(e, t, n, s)),
					subredditsById: x.Y,
					viewportDataLoaded: y.a,
					pageReferrer: p.U,
					postListPlaceholderComponent: () => f.a,
					isNpsScrollSurveyEnabled: C.e
				},
				S = Object(r.c)(_),
				k = e => ({
					onBottomViewed: (t, n) => e(l.c(t, n)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(a.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(i.a)({
							lastLoadedEnv: "server"
						})), e(d.L(t))
					},
					fireAdPixelsOfType: (t, n) => {
						e(d.z(t, n))
					},
					trackOnPostEnteredViewport: (t, n, s, r) => {
						e(d.O(t, s, r))
					},
					trackOnPostExitedViewport: (t, n, s, r, o) => {
						e(d.P(t, s, r, o))
					},
					showModalOnScroll: () => e(d.bb()),
					surveyTriggerScrollCounted: () => e(Object(u.j)())
				}),
				P = e => Object(b.b)({
					...e
				}),
				w = (e, t, n, s) => {
					const {
						listingKey: r,
						hostPostData: o,
						listingBelowVariant: a
					} = s;
					return Object(h.h)(e, t, "post", r, o, a, void 0)
				},
				N = Object(s.b)(S, k, (e, t, n) => ({
					...e,
					...t,
					...n,
					postComponentForLayout: P,
					postClickEventFactory: w
				}));
			t.a = e => Object(m.c)(j(N(e)))
		},
		"./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/LRUCache/index.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r);
			const a = new s.a(250),
				i = (e, t, n) => {
					const s = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const r = `${e.id}-${s}`;
						let i = a.get(r);
						if (void 0 === i) {
							const c = new RegExp(`(\\b${s}\\b)`, "gi"),
								d = e.title.split(c);
							i = n(o.a.createElement(o.a.Fragment, null, o.a.Children.toArray(d.map((e, n) => n % 2 != 0 ? t(e) : e)))), a.set(r, i)
						}
						return i
					}
				}
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/structuredStyles/index.ts"),
				a = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/structuredStyles.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const d = Object(r.c)({
				bladeHasUnsavedChanges: i.a,
				isEditing: i.i,
				isBladeEditorDirty: i.h,
				isModalOpen: Object(a.b)(c.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(s.b)(d, (e, {
				subredditId: t
			}) => ({
				requestCloseBlade: () => t && e(Object(o.h)(t))
			}))
		},
		"./src/reddit/constants/accountManager.ts": function(e, t, n) {
			"use strict";
			var s, r, o, a;
			n.d(t, "c", (function() {
					return s
				})), n.d(t, "a", (function() {
					return r
				})), n.d(t, "d", (function() {
					return o
				})), n.d(t, "b", (function() {
					return a
				})),
				function(e) {
					e.ChangePassword = "/change_password/", e.Index = "/login/", e.Register = "/register/", e.EnableTwoFactor = "/2fa/enable/", e.DisableTwoFactor = "/2fa/disable/", e.TwoFactorBackupCodes = "/2fa/backup-keys/", e.LinkAppleSSO = "/account/sso/link/?provider=apple", e.UnlinkAppleSSO = "/account/sso/unlink/?provider=apple", e.LinkGoogleSSO = "/account/sso/link/?provider=google", e.UnlinkGoogleSSO = "/account/sso/unlink/?provider=google", e.GoogleOneTap = "/account/sso/one_tap/", e.Onboarding = "/account/onboarding/"
				}(s || (s = {})),
				function(e) {
					e.ChangePassword = "changePassword", e.Close = "close", e.CreateAccount = "createAccount", e.GoogleOneTapDisplayed = "googleOneTapDisplayed", e.GoogleOneTapFlowFailed = "googleOneTapFlowFailed", e.GoogleOneTapSkipped = "googleOneTapSkipped", e.Login = "login", e.PreferenceStatus = "preferenceStatus", e.Register = "register", e.Resize = "resize", e.ShowStep = "showStep", e.SSOLinkFail = "ssoLinkFail", e.SSOLinkSuccess = "ssoLinkSuccess", e.SSOUnlinkFail = "ssoUnlinkFail", e.SSOUnlinkSuccess = "ssoUnlinkSuccess", e.Subscribe = "subscribe", e.TwoFactorChanged = "twoFactorChanged"
				}(r || (r = {})),
				function(e) {
					e.Embed = "embed", e.Modal = "modal"
				}(o || (o = {})),
				function(e) {
					e.SelectAccount = "select-account", e.Email = "email", e.EmailOptIn = "email-opt-in", e.GoogleUI = "google-ui", e.Subscribe = "subscribe", e.UsernameAndPassword = "username-and-password"
				}(a || (a = {}))
		},
		"./src/reddit/constants/promo.ts": function(e, t, n) {
			"use strict";
			var s, r;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.SignupUpsellCell = "signupUpsellBottomCell", e.SignupUpsellCellDismissible = "signupUpsellBottomCellDismissible", e.SignupUpsellBottomSheet = "signupUpsellBottomSheet"
				}(s || (s = {})),
				function(e) {
					e.Shown = "shown", e.Dismissed = "dismissed", e.Completed = "completed"
				}(r || (r = {}))
		},
		"./src/reddit/contexts/AdminEvents.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/brcast/dist/brcast.es.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r);
			t.a = o.a.createContext(Object(s.a)([]))
		},
		"./src/reddit/contexts/Promo/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/noop.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js");
			const a = o.createContext({
				showPromo: r.a,
				dismissPromo: r.a,
				completePromo: r.a,
				promos: new Map
			});
			t.a = a
		},
		"./src/reddit/contexts/ThrottlingContext/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/featureThrottling.ts"),
				a = n("./src/reddit/helpers/featureThrottling/store/index.ts");
			const i = {
					isThrottled: !1,
					resetFeature: () => {
						throw new Error("Component attempted to reset feature with no ThrottlingContext")
					},
					throttleFeature: () => {
						throw new Error("Component attempted to throttle feature with no ThrottlingContext")
					}
				},
				c = Object.keys(o.a).reduce((e, t) => (e[t] = Object(s.createContext)(i), e), {});
			class d extends r.a.Component {
				constructor(e) {
					super(e), this.onThrottlingDataChange = (e, t) => {
						if (t) {
							const e = a.a.isFeatureThrottled(t);
							this.setState(n => e === n[t].isThrottled ? null : {
								...n,
								[t]: {
									...n[t],
									isThrottled: e
								}
							})
						} else this.setState(e => {
							const t = Object.keys(o.a).reduce((t, n) => (a.a.isFeatureThrottled(n) && (t[n] = {
								...e[n],
								isThrottled: !0
							}), t), {});
							return Object.keys(t).length > 0 ? t : null
						})
					}, this.renderContextProvider = (e, t) => {
						const n = c[t];
						return r.a.createElement(n.Provider, {
							value: this.state[t]
						}, e)
					}, this.state = Object.keys(o.a).reduce((e, t) => (e[t] = {
						isThrottled: !1,
						resetFeature: a.a.resetFeature.bind(a.a, t),
						throttleFeature: a.a.throttleFeature.bind(a.a, t)
					}, e), {})
				}
				componentDidMount() {
					a.a.subscribe(this.onThrottlingDataChange)
				}
				componentWilUnmount() {
					a.a.unsubscribe(this.onThrottlingDataChange)
				}
				render() {
					return Object.keys(c).reduce(this.renderContextProvider, this.props.children)
				}
			}
		},
		"./src/reddit/controls/CheckboxWithLabel/index.m.less": function(e, t, n) {
			e.exports = {
				checkbox: "_21CrWSXdmd-ue61gDl6zRs",
				checkboxSelected: "_1xT_z2uw_7yX0esEUZVFwf",
				sharedIconStyles: "_1NVucoiiTLKJiKzRTPVKaW",
				checkboxLabel: "_1H6-wE3jxCdsIeXW5AMjj8",
				labelContent: "-kceiAQn0jpWOpu7qZRjD"
			}
		},
		"./src/reddit/controls/CheckboxWithLabel/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = n("./src/reddit/controls/CheckboxWithLabel/index.m.less"),
				d = n.n(c);
			t.a = e => r.a.createElement("button", {
				"aria-checked": e.isSelected,
				"aria-disabled": e.disabled,
				autoFocus: e.autoFocus,
				className: Object(o.a)(d.a.checkboxLabel, e.className),
				disabled: e.disabled,
				onClick: e.onClick,
				type: "button",
				role: "checkbox"
			}, r.a.createElement("span", {
				tabIndex: -1,
				className: d.a.labelContent
			}, e.isSelected ? r.a.createElement(i.a, {
				className: d.a.checkboxSelected
			}) : r.a.createElement(a.a, {
				className: d.a.checkbox
			}), e.text))
		},
		"./src/reddit/controls/InvisibleScreenReaderText/index.m.less": function(e, t, n) {
			e.exports = {
				invisibleText: "_1RIl585IYPW6cmNXwgRz0J"
			}
		},
		"./src/reddit/controls/InvisibleScreenReaderText/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/InvisibleScreenReaderText/index.m.less"),
				o = n.n(r);
			t.a = s.a.span("invisibleText", o.a)
		},
		"./src/reddit/controls/Link/index.m.less": function(e, t, n) {
			e.exports = {
				link: "zrXDKcys3Vl7vt1f6ef4V"
			}
		},
		"./src/reddit/controls/Link/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Link/index.m.less"),
				o = n.n(r);
			t.a = s.a.a("link", o.a)
		},
		"./src/reddit/controls/Search/CommunityPill/index.m.less": function(e, t, n) {
			e.exports = {
				communityPill: "_1MA3fP9fWarZfJ7sTZvCY8"
			}
		},
		"./src/reddit/controls/Search/SearchBar/index.m.less": function(e, t, n) {
			e.exports = {
				searchBar: "_1DeR7_QiQnu2UK0e2dDfYD",
				searchBarExp: "_2cQyXGCHzUUwjteF5E1eO7",
				inputLabel: "_1t0x2fnX0IYp1-sp47CSHI",
				input: "_1K7ubH9z5v9E6C19j2fjQU",
				iconContainer: "cNtxQ5c1PdvcDe82u_yz9",
				icon: "_3ylUT2QX58nnEl8r4H26ys"
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.m.less": function(e, t, n) {
			e.exports = {
				toggleDisplay: "_2FKpII1jz0h6xCAw1kQAvS",
				toggleSwitch: "_2e2g485kpErHhJQUiyvvC2",
				redditStyle: "_3kUvbpMbR21zJBboDdBH7D",
				mActive: "_1L5kUnhRYhUJ4TkMbOTKkI",
				mDisabled: "_3clF3xRMqSWmoBQpXv8U5z",
				xs: "_1asGWL2_XadHoBuUlNArOq",
				s: "_1hku5xiXsbqzLmszstPyR3",
				m: "_10hZCcuqkss2sf5UbBMCSD",
				l: "_1fCdbQCDv6tiX242k80-LO",
				xl: "_2Jp5Pv4tgpAsTcnUzTsXgO"
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				c = n.n(i);
			t.a = Object(s.memo)(Object(s.forwardRef)((e, t) => {
				const n = e.size || a.d.XS;
				return r.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(o.a)(c.a.toggleSwitch, e.className, c.a[n], {
						[c.a.mActive]: e.on && !e.disabled || e.forceOn && e.on,
						[c.a.mDisabled]: e.disabled,
						[c.a.redditStyle]: e.redditStyle
					}),
					style: e.on && !e.disabled && e.activeColorOverride ? {
						backgroundColor: e.activeColorOverride
					} : void 0,
					id: e.id,
					role: "switch",
					tabIndex: e.tabIndex,
					type: "button",
					onClick: () => !e.disabled && e.onToggle && e.onToggle(),
					ref: t
				}, r.a.createElement("div", {
					className: c.a.toggleDisplay
				}))
			}))
		},
		"./src/reddit/controls/Typography/index.m.less": function(e, t, n) {
			e.exports = {
				heading1: "_37JeV292IJA7_x1qej_-2H",
				heading2: "p13k-tsMcatGBlVpJBZmw",
				heading3: "_1nHvvYpmn7q9eWDAGzKcce",
				heading4: "_1-rwUWsB5F8WmYI8F66dai",
				heading5: "_22RKdGqihAj6MFumW6DuRV",
				heading6: "_4xqrI_N1UdqsK9E1RSisG",
				body1: "_2HJOIn4SJm4z1NeCv_hNFu",
				body2: "_3ImIPX9rfoPmUrZ1R8KGqS",
				actionFont: "_3uShGanwyVFBaTiPMFzfAC",
				metadata: "_2nyJGeaFJbXTqTh9OGwxfu",
				metadata3: "_3BIqvjJkJKZfH4vtC11dGF"
			}
		},
		"./src/reddit/controls/Typography/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Typography/index.m.less"),
				o = n.n(r);
			s.a.h1("heading1", o.a), s.a.h2("heading2", o.a), s.a.h3("heading3", o.a), s.a.h4("heading4", o.a);
			const a = s.a.h5("heading5", o.a),
				i = (s.a.h6("heading6", o.a), s.a.p("body1", o.a), s.a.p("body2", o.a)),
				c = (s.a.p("actionFont", o.a), s.a.p("metadata", o.a));
			s.a.p("metadata3", o.a)
		},
		"./src/reddit/customMiddleware/recentSubreddits.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			}));
			var s = n("./src/chat/customMiddleware/noop.ts"),
				r = n("./src/lib/cache/index.ts"),
				o = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/localStorageAvailable/index.ts"),
				i = n("./src/reddit/actions/recentSubreddits/constants.ts");
			const c = Object(r.c)(o.r.RECENT_SUBREDDITS, "recent_subreddits"),
				d = () => Object(a.a)() && Object(r.b)(c) || [];
			t.a = e => "undefined" == typeof window ? s.a : e => t => {
				const n = e(t);
				switch (t.type) {
					case i.e: {
						const e = d() || [],
							{
								id: n
							} = t.payload || {};
						if (n) {
							const s = e.findIndex(e => e.id === n); - 1 !== s && e.splice(s, 1), e.unshift(t.payload), e.splice(i.c), Object(r.d)(c, e, o.pb)
						}
						break
					}
				}
				return n
			}
		},
		"./src/reddit/endpoints/gold/productCatalog/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "a", (function() {
				return y
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/redditGQL/operations/ClaimAwardOffer.json"),
				c = n("./src/redditGQL/operations/FetchSpecialEvents.json"),
				d = n("./src/reddit/constants/headers.ts"),
				l = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = n("./src/reddit/endpoints/gold/purchase.ts");
			const m = e => ({
					baselineCoins: e.baseline_coins || e.coins,
					baselinePennies: e.baseline_pennies || e.pennies,
					bonusPct: e.bonus_pct,
					coins: e.coins,
					description: e.description,
					featured: e.featured,
					featuredLabel: e.featured_label,
					images: {
						marketing: e.images.marketing,
						purchaseSuccess: e.images.purchase_success
					},
					mobileId: e.mobile_id,
					pennies: e.pennies
				}),
				p = e => e.map(m),
				b = e => e.map(e => {
					return {
						...m(e),
						dealInfo: {
							type: e.deal_info.type,
							title: e.deal_info.title,
							subtitle: e.deal_info.subtitle,
							displayDelay: e.deal_info.display_delay
						}
					}
				}),
				h = e => e.map(e => ({
					defaultSignupBonusCoins: e.default_signup_bonus_coins,
					bonusPct: e.bonus_pct,
					description: e.description,
					frequency: e.frequency,
					frequencyDays: e.frequency_days,
					images: {
						marketing: e.images.marketing,
						purchaseSuccess: e.images.purchase_success
					},
					mobileId: e.mobile_id,
					mobilePennies: e.mobile_pennies,
					paypalButtonId: e.paypal_button_id,
					pennies: e.pennies,
					periodicalCoins: e.periodical_coins,
					signupBonusCoins: e.signup_bonus_coins
				})),
				f = e => e ? {
					ctaText: e.cta_text,
					dropdownHeaderText: e.dropdown_banner_text,
					dropdownHeaderBackgroundAsset: e.dropdown_banner_image_url,
					endsAt: e.ends_at,
					heroImageUrl: e.hero_image_url,
					heroSubtext: e.hero_subtext,
					heroText: e.hero_text
				} : null,
				g = async ({
					context: e,
					correlationId: t,
					shouldUseCurrentOrigin: n
				}) => {
					const o = "/api/v2/gold/purchase_package_details",
						i = n && "undefined" != typeof window ? `${window.location.origin}${o}` : `${e.apiUrl}${o}`,
						c = Object(l.a)(i);
					return Object(r.a)(Object(a.a)(e, [d.a]), {
						method: s.jb.GET,
						endpoint: c,
						data: {
							correlation_id: t
						}
					}).then(u.c).then(C)
				};

			function C(e) {
				if (!e.ok) return e;
				const {
					active_sale: t,
					coin_packages: n,
					deals: s,
					premium_packages: r
				} = e.body, o = {
					activeSaleConfig: f(t),
					coinPackages: p(n),
					dealCoinPackages: b(s),
					premiumPackages: h(r)
				};
				return {
					...e,
					body: o
				}
			}
			const O = async ({
				context: e,
				awardId: t,
				correlationId: n
			}) => {
				const o = `${e.apiUrl}/api/v2/gold/recommended_coin_package_details`,
					i = Object(l.a)(o);
				return Object(r.a)(Object(a.a)(e, [d.a]), {
					method: s.jb.GET,
					endpoint: i,
					data: {
						correlation_id: n,
						intended_award: t
					}
				}).then(u.c).then(v)
			};

			function v(e) {
				if (!e.ok) return e;
				const t = e.body,
					n = {
						coinPackages: p([t])
					};
				return {
					...e,
					body: n
				}
			}
			const x = e => Object(o.a)(e, {
					...c
				}),
				y = e => Object(o.a)(e, {
					...i,
					variables: {
						input: {
							offerId: "free_awards"
						}
					}
				})
		},
		"./src/reddit/endpoints/gold/purchase.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "b", (function() {
				return v
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/redditGQL/operations/ChangeStripePaymentMethod.json"),
				c = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				l = n("./src/reddit/helpers/genericServerError/index.ts"),
				u = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const m = e => e.ok ? e.body.json && e.body.json.errors.length ? {
					...e,
					ok: !1,
					error: Object(u.a)(e)
				} : {
					...e
				} : {
					...e,
					error: e.error || Object(l.a)()
				},
				p = async ({
					coins: e,
					context: t,
					correlationId: n,
					offerContext: o,
					pennies: i,
					rememberCard: l,
					token: u,
					savedCardId: p
				}) => {
					const b = {
							token: u ? u.id : void 0,
							coins: e,
							offer_context: o,
							pennies: i,
							remember_card: l,
							card_id: p,
							correlation_id: n
						},
						h = `${t.apiUrl}/api/v2/gold/stripe/buy_coins`,
						f = Object(d.a)(h);
					return Object(r.a)(Object(a.a)(t, [c.a]), {
						method: s.jb.POST,
						endpoint: f,
						data: b
					}).then(m)
				}, b = async ({
					coins: e,
					context: t,
					correlationId: n,
					gildParams: o,
					isOldReddit: i,
					offerContext: l,
					pennies: u,
					rememberCard: p,
					thingId: b,
					token: h,
					savedCardId: f
				}) => {
					const {
						gildType: g,
						isAnonymous: C,
						message: O
					} = o, v = {
						token: h ? h.id : void 0,
						coins: e,
						offer_context: l,
						pennies: u,
						thing_id: b,
						gild_type: g,
						message: O ? O.trim() : "",
						is_anonymous: C,
						remember_card: p,
						card_id: f,
						correlation_id: n
					}, x = `${t.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, y = i ? x : Object(d.a)(x);
					return Object(r.a)(Object(a.a)(t, [c.a]), {
						method: s.jb.POST,
						endpoint: y,
						data: v
					}).then(m)
				}, h = async ({
					context: e,
					correlationId: t,
					gildParams: n,
					isOldReddit: o,
					pennies: i,
					rememberCard: l,
					thingId: u,
					token: p,
					savedCardId: b
				}) => {
					const {
						gildType: h,
						isAnonymous: f,
						message: g
					} = n, C = {
						token: p ? p.id : void 0,
						thing_id: u,
						award_id: h,
						message: g ? g.trim() : "",
						is_anonymous: f,
						pennies: i,
						remember_card: l,
						card_id: b,
						correlation_id: t
					}, O = `${e.apiUrl}/api/v2/gold/stripe/buy_award`, v = o ? O : Object(d.a)(O);
					return Object(r.a)(Object(a.a)(e, [c.a]), {
						method: s.jb.POST,
						endpoint: v,
						data: C
					}).then(m)
				}, f = async ({
					context: e,
					correlationId: t,
					pennies: n,
					token: o
				}) => {
					const i = {
							token: o.id,
							pennies: n,
							correlation_id: t
						},
						l = `${e.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						u = Object(d.a)(l);
					return Object(r.a)(Object(a.a)(e, [c.a]), {
						method: s.jb.POST,
						endpoint: u,
						data: i
					}).then(m)
				}, g = "paymentInfoUpdated", C = async e => {
					const {
						origin: t
					} = window.location, n = `${t}/settings/premium`, s = new URLSearchParams({
						[g]: "true"
					}), r = await Object(o.a)(e, {
						...i,
						variables: {
							successUrl: `${n}?${s}`,
							cancelUrl: `${n}`
						}
					});
					if (!r.ok) throw new Error("Unable to update payment information");
					return r.body.data.changeStripePaymentMethod.sessionId
				}, O = async (e, t) => {
					const n = {
						card_id: t
					};
					return Object(r.a)(Object(a.a)(e, [c.a]), {
						method: s.jb.POST,
						endpoint: `${e.apiUrl}/api/v2/gold/stripe/delete_creditcard`,
						data: n
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(u.a)(e)
					})
				}, v = async e => Object(r.a)(Object(a.a)(e, [c.a]), {
					method: s.jb.GET,
					endpoint: `${e.apiUrl}/api/v2/gold/stripe/creditcards`
				}).then(e => e.ok ? {
					...e
				} : {
					...e,
					error: Object(u.a)(e)
				})
		},
		"./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/redditGQL/operations/NotificationSettingsLayoutByChannel.json"),
				o = n("./src/redditGQL/operations/UpdateNotificationPreferences.json");
			const a = (e, t) => Object(s.a)(e, {
					...r,
					variables: t
				}),
				i = (e, t) => Object(s.a)(e, {
					...o,
					variables: {
						input: {
							preferences: [t]
						}
					}
				})
		},
		"./src/reddit/endpoints/post/convert.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = n("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, n) => {
				const d = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === c.i.MARKDOWN ? d.richtext_json = n : d.markdown_text = n, Object(r.a)(Object(o.a)(e, [a.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: s.jb.POST,
					data: d
				})
			}
		},
		"./src/reddit/helpers/awards/overlayIds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = () => "COIN_PURCHASE_DROPDOWN_ID"
		},
		"./src/reddit/helpers/frontpageCardPostCountExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			}));
			var s, r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/constants/postLayout.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/selectors/meta.ts"),
				d = n("./src/reddit/selectors/user.ts");

			function l(e) {
				return Object(i.R)(e, {}) === o.g.Large && !Object(d.I)(e) && !Object(c.d)(e)
			}

			function u(e) {
				return Object(a.c)(e, {
					expEventOverride: !1,
					experimentEligibilitySelector: l,
					experimentName: r.cd
				})
			}

			function m(e) {
				switch (e) {
					case r.dd.Enabled:
						return 18;
					default:
						return
				}
			}! function(e) {
				e.Enabled = "frontpage-card-posts-3.enabled", e.NoBucket = "frontpage-card-posts-3.no_bucket"
			}(s || (s = {}));
			const p = e => {
				switch (e) {
					case r.dd.Enabled:
						return s.Enabled;
					default:
						return s.NoBucket
				}
			}
		},
		"./src/reddit/helpers/getAccountManagerMessageTarget/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/config.ts");
			const r = () => s.a.redditUrl
		},
		"./src/reddit/helpers/getSubredditErrorProps/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/models/ContentGate.ts");
			t.a = (e, t, n) => {
				let r, o, a, i, c, d, l, u;
				return e ? e.quarantinedSubreddit ? (o = s.a.QuarantinedSubreddit, i = e.quarantineMessage, c = e.quarantineMessageHtml, d = e.quarantineRequiresEmail) : e.privateSubreddit ? (o = s.a.PrivateSubreddit, a = e.subredditDescription, l = e.isContributorRequestsDisabled, u = e.isContributorRequestTimestamp) : e.goldSubreddit ? o = s.a.GoldSubreddit : e.subredditBanned ? (o = s.a.SubredditBanned, r = e.subredditBanMessage) : e.subredditDoesNotExist ? o = s.a.SubredditDoesNotExist : e.subredditBlockedForLegalReason && (o = s.a.SubredditBlockedForLegalReason) : t && (o = s.a.Nsfw), o && n ? {
					banMessage: r,
					contentGateType: o,
					isContributorRequestsDisabled: l,
					isContributorRequestTimestamp: u,
					subredditDescription: a,
					subredditName: n,
					quarantineMessage: i,
					quarantineMessageHtml: c,
					quarantineRequiresEmail: d
				} : void 0
			}
		},
		"./src/reddit/helpers/isListingFocused/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/brcast/dist/brcast.es.js");
			const r = Object(s.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/karma.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const s = e => {
				if (!e || !e.karma) return 0;
				const {
					total: t,
					...n
				} = e.karma;
				return t || Object.values(n).reduce((e, t) => e + (t || 0), 0)
			}
		},
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less": function(e, t, n) {
			e.exports = {
				basicLink: "_1YWXCINvcuU7nk0ED-bta8",
				metaContainer: "_1HGeWoy6faY2UWkCD7cYoW",
				outboundLink: "_1Jtes5zRWNpwobWM4O2Unx",
				button: "_2KotRmn9DgdA58Ikji2mnV",
				icon: "_2BQPq3iyS8t6kKtFmtkB30",
				isLit: "_3RofgwJEAbXD6OnLxEZ8Kg",
				body: "vzhy90YD0qH7ZDJi7xMGw"
			}
		},
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				d = n.n(c);
			const l = i.a.button("button", d.a),
				u = e => t => r.a.createElement("div", {
					className: t.className
				}, e);

			function m(e, t, n) {
				return b(e, t, !0, {
					...n
				})
			}

			function p(e, t, n) {
				return b(e, t, !1, {
					...n
				})
			}

			function b(e, t, n, s) {
				const i = e,
					c = "function" == typeof t ? t : u(t),
					{
						meta: l
					} = s,
					m = e => r.a.createElement(r.a.Fragment, null, r.a.createElement(i, {
						className: Object(a.a)(d.a.icon, {
							[d.a.isLit]: e
						})
					}), r.a.createElement(c, {
						className: d.a.body
					}), l && r.a.createElement("div", {
						className: d.a.metaContainer
					}, l));
				return n ? e => r.a.createElement("a", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, d.a.basicLink),
					href: e.href,
					onClick: e.onClick,
					target: "_blank",
					rel: "noopener noreferrer"
				}, m(e.isLit)) : e => e.href ? r.a.createElement(o.a, {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, d.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, m(e.isLit)) : r.a.createElement("button", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, d.a.button),
					onClick: e.onClick
				}, m(e.isLit))
			}
		},
		"./src/reddit/helpers/search/searchResultsTabTo.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/history/esm/history.js"),
				r = n("./src/lib/search/index.ts"),
				o = n("./src/reddit/constants/history.ts"),
				a = n("./src/reddit/helpers/history/index.ts");
			const i = (e, t, n) => {
				const i = Object(s.e)(e);
				return {
					pathname: e.pathname,
					state: {
						[o.b.SearchOriginPage]: Object(a.b)(o.b.SearchOriginPage)
					},
					search: Object(r.c)(i, t, {
						type: n
					}).replace(e.pathname + "?", "")
				}
			}
		},
		"./src/reddit/helpers/search/searchTabType.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/constants/page.ts");
			const o = (e, t) => t || e.includes(s.ac.Posts) ? r.h.Posts : e.includes(s.ac.Users) && !e.includes(s.ac.Subreddits) ? r.h.Authors : r.h.Listings
		},
		"./src/reddit/helpers/search/switchSearchScope.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/lib/addQueryParams/index.ts"),
				r = n("./src/lib/search/index.ts"),
				o = n("./src/reddit/constants/parameters.ts");

			function a(e, t) {
				let n = "/search",
					a = "",
					i = e && e[o.q] || "";
				t ? (i = i.replace("flair:", "flair_name:"), n = `/r/${t}/search`, a = "1") : i = i.replace("flair_name:", "flair:");
				const c = Object(s.a)(n, {
					[o.q]: i,
					[o.t]: a
				});
				return Object(r.c)(c, i, {
					[o.t]: a
				})
			}
		},
		"./src/reddit/helpers/trackers/authControls.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/platform.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const a = e => {
					const t = Object(r.o)(e);
					return {
						actionInfo: Object(o.d)(e),
						post: t && Object(o.I)(e, t) || null,
						profile: Object(o.R)(e),
						screen: Object(o.ab)(e),
						subreddit: Object(o.jb)(e)
					}
				},
				i = e => t => ({
					source: e,
					action: s.c.CLICK,
					noun: "login",
					...a(t)
				}),
				c = e => t => ({
					source: e,
					action: s.c.CLICK,
					noun: "signup",
					...a(t)
				}),
				d = () => e => ({
					source: "user_dropdown",
					action: s.c.CLICK,
					noun: "login_signup",
					...a(e)
				})
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "h", (function() {
				return O
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/models/PostDraft/index.ts"),
				a = n("./src/reddit/selectors/comments.ts"),
				i = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/index.ts");
			const l = "comment_composer",
				u = e => {
					const t = Object(i.o)(e);
					return {
						source: l,
						action: s.c.CLICK,
						...Object(c.o)(e),
						screen: Object(c.ab)(e),
						subreddit: Object(c.jb)(e),
						post: t ? Object(c.I)(e, t) : null,
						profile: Object(c.R)(e),
						correlationId: Object(r.c)(r.a.CommentComposer)
					}
				},
				m = async (e, t, s, r) => {
					const o = {
							commentId: r,
							commentsPageKey: s
						},
						i = r && Object(a.j)(e, o) || 0,
						{
							getFlairData: l
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(d.a)({
						noun: "comment",
						...u(e),
						comment: r ? Object(c.j)(e, r) : null,
						listing: Object(c.z)(e, void 0, {
							depth: i
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: l(e)
					})
				}, p = (e, t, n, s) => {
					const r = u(e);
					return Object(d.a)({
						...r,
						actionInfo: {
							...r.actionInfo,
							reason: "karma_rate_limit"
						},
						source: "backend",
						action: "error",
						noun: "comment",
						comment: {
							bodyText: t,
							parentId: s,
							postId: n
						}
					})
				}, b = e => Object(d.a)({
					noun: "cancel",
					...u(e)
				}), h = (e, t) => {
					t === o.c.replyToPost && Object(d.a)({
						noun: "input",
						...u(e)
					})
				}, f = (e, t) => Object(d.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(c.o)(t),
					screen: Object(c.ab)(t),
					subreddit: Object(c.jb)(t),
					post: Object(c.I)(t, e)
				}), g = e => Object(d.a)({
					noun: "edit",
					...u(e)
				}), C = e => Object(d.a)({
					noun: "save_edit",
					...u(e)
				}), O = (e, t) => n => {
					const s = "image_upload" === e || "video_upload" === e;
					return {
						...u(n),
						noun: s ? e : "text_option",
						commentComposer: {
							textType: e,
							finalStatus: t ? "on" : "off"
						}
					}
				}
		},
		"./src/reddit/helpers/trackers/customFeeds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = (e, t) => ({
					...Object(s.o)(t),
					customFeed: Object(s.n)(t, e),
					source: "custom_feeds"
				}),
				o = e => t => ({
					...r(e, t),
					action: "click",
					noun: "delete"
				}),
				a = e => t => ({
					...r(e, t),
					action: "click",
					noun: "follow"
				}),
				i = e => t => ({
					...r(e, t),
					action: "click",
					noun: "unfollow"
				}),
				c = e => t => ({
					...r(e, t),
					action: "click",
					noun: "duplicate"
				}),
				d = e => t => ({
					...r(e, t),
					action: "click",
					noun: "share"
				}),
				l = e => t => ({
					...r(e, t),
					action: "click",
					noun: "favorite",
					source: "community_nav"
				}),
				u = e => t => ({
					...r(e, t),
					action: "click",
					noun: "unfavorite",
					source: "community_nav"
				})
		},
		"./src/reddit/helpers/trackers/goldTopNav.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/helpers/trackers/goldPayment.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const a = "gold_top_nav",
				i = (e, t = {}) => ({
					...Object(r.g)(e, t),
					correlationId: Object(s.e)(s.a.GoldPayment, !1),
					profile: o.R(e),
					subreddit: o.jb(e)
				}),
				c = (e, t) => n => ({
					source: a,
					action: "click",
					noun: e,
					...i(n, {
						offerContext: t
					})
				}),
				d = e => t => ({
					source: a,
					action: "click",
					noun: "coins_package",
					...i(t, {
						packageId: e
					})
				}),
				l = () => e => ({
					source: a,
					action: "click",
					noun: "premium",
					...i(e)
				}),
				u = () => e => ({
					source: a,
					action: "click",
					noun: "free_award_offer",
					...i(e)
				}),
				m = e => t => ({
					source: a,
					action: "view",
					noun: "dropdown",
					...i(t, {
						offerContext: e
					})
				})
		},
		"./src/reddit/helpers/trackers/inbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return s
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "r", (function() {
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "p", (function() {
				return h
			})), n.d(t, "q", (function() {
				return f
			})), n.d(t, "t", (function() {
				return g
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "s", (function() {
				return O
			})), n.d(t, "k", (function() {
				return v
			})), n.d(t, "u", (function() {
				return x
			})), n.d(t, "m", (function() {
				return y
			})), n.d(t, "l", (function() {
				return E
			})), n.d(t, "h", (function() {
				return j
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "f", (function() {
				return S
			})), n.d(t, "o", (function() {
				return k
			}));
			var s, r, o, a, i, c, d = n("./src/reddit/constants/tracking.ts"),
				l = n("./src/reddit/selectors/telemetry.ts"),
				u = n("./src/telemetry/index.ts");
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(s || (s = {})),
			function(e) {
				e.HideNotifications = "hide_notification", e.HideSubreddit = "hide_subreddit", e.HideUpdates = "hide_updates", e.BlockAwarder = "block_awarder", e.DecreaseSubredditUpdates = "disable_frequent"
			}(r || (r = {})),
			function(e) {
				e.MiniInbox = "mini_inbox", e.Inbox = "inbox"
			}(o || (o = {})),
			function(e) {
				e.Inbox = "inbox", e.Nav = "nav", e.Settings = "notification_app_settings"
			}(a || (a = {})),
			function(e) {
				e[e.FIRST = 1] = "FIRST", e[e.SECOND = 2] = "SECOND"
			}(i || (i = {})),
			function(e) {
				e.Confirm = "confirm"
			}(c || (c = {}));
			const m = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s
				}) => r => ({
					...l.o(r),
					action: d.c.VIEW,
					noun: "inbox_notification",
					source: a.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: s
					}
				}),
				p = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s,
					awardId: r
				}) => o => {
					Object(u.a)({
						...l.o(o),
						action: "receive",
						noun: "inbox_notification",
						source: a.Inbox,
						inbox: {
							id: e,
							isClicked: t,
							isViewed: n
						},
						notification: {
							type: s
						},
						goldPurchase: {
							awardId: r
						}
					})
				},
				b = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s,
					awardId: r,
					position: o
				}) => i => ({
					...l.o(i),
					action: d.c.CLICK,
					noun: "inbox_notification",
					source: a.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: s
					},
					goldPurchase: {
						awardId: r
					},
					actionInfo: {
						position: o
					}
				}),
				h = ({
					badgeCount: e,
					tab: t
				}) => n => ({
					...l.o(n),
					action: d.c.VIEW,
					noun: "inbox",
					source: a.Inbox,
					inbox: {
						badgeCount: e,
						tab: t
					}
				}),
				f = ({
					badgeCount: e,
					tab: t
				}) => t => ({
					...l.o(t),
					action: d.c.VIEW,
					noun: "mini_inbox",
					source: a.Inbox,
					inbox: {
						badgeCount: e,
						tab: s.Activity
					}
				}),
				g = ({
					badgeCount: e
				}) => t => ({
					...l.o(t),
					action: d.c.CLICK,
					noun: "inbox",
					source: a.Nav,
					inbox: {
						badgeCount: e
					}
				}),
				C = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s,
					awardId: r
				}) => o => ({
					...l.o(o),
					action: d.c.CLICK,
					noun: "inbox_notification_overflow",
					source: a.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: s
					},
					goldPurchase: {
						awardId: r
					}
				}),
				O = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s
				}) => r => ({
					...l.o(r),
					action: d.c.VIEW,
					noun: "inbox_notification_overflow",
					source: a.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: s
					}
				}),
				v = ({
					actionInfoType: e,
					id: t,
					isClicked: n,
					isViewed: s,
					type: r
				}) => o => ({
					...l.o(o),
					action: d.c.CLICK,
					noun: "overflow_option",
					source: a.Inbox,
					inbox: {
						id: t,
						isClicked: n,
						isViewed: s
					},
					notification: {
						type: r
					},
					actionInfo: {
						...l.d(o),
						type: e
					}
				}),
				x = ({
					actionInfoType: e,
					id: t,
					isClicked: n,
					isViewed: s,
					type: r
				}) => o => ({
					...l.o(o),
					action: d.c.UNDO,
					noun: "overflow_option",
					source: a.Inbox,
					inbox: {
						id: t,
						isClicked: n,
						isViewed: s
					},
					notification: {
						type: r
					},
					actionInfo: {
						...l.d(o),
						type: e
					}
				}),
				y = e => t => ({
					...l.o(t),
					action: d.c.CLICK,
					noun: "notification_app_settings",
					source: a.Inbox,
					actionInfo: {
						...l.d(t),
						pageType: e
					}
				}),
				E = () => e => ({
					...l.o(e),
					action: d.c.CLICK,
					noun: "see_all",
					source: a.Inbox,
					actionInfo: {
						...l.d(e),
						pageType: o.MiniInbox
					}
				}),
				j = () => e => ({
					...l.o(e),
					action: d.c.CLICK,
					noun: "messages",
					source: a.Inbox
				}),
				_ = ({
					isMiniInbox: e
				}) => t => ({
					...l.o(t),
					action: d.c.CLICK,
					noun: "mark_all_as_read",
					source: a.Inbox,
					actionInfo: e ? {
						...l.d(t),
						pageType: o.MiniInbox
					} : {}
				}),
				S = (e, t) => n => ({
					...l.o(n),
					action: d.c.CLICK,
					noun: "policy_banner",
					source: a.Inbox,
					actionInfo: {
						...l.d(n),
						pageType: e,
						type: t
					}
				}),
				k = () => e => ({
					...l.o(e),
					action: d.c.CLICK,
					noun: "inbox_banner",
					source: a.Inbox,
					actionInfo: {
						...l.d(e),
						type: "2021Recap"
					}
				})
		},
		"./src/reddit/helpers/trackers/moreReplies.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			}));
			var s, r, o, a = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Click = "click", e.Dismiss = "dismiss", e.View = "view"
			}(s || (s = {})),
			function(e) {
				e.Load = "load_more_comments", e.SsoSignup = "sso_signup"
			}(r || (r = {})),
			function(e) {
				e.Popup = "popup", e.PostDetail = "post_detail"
			}(o || (o = {}));
			const i = () => e => ({
					...Object(a.o)(e),
					source: o.PostDetail,
					action: s.Click,
					noun: r.Load,
					actionInfo: Object(a.d)(e, {
						page_type: "d2x_post_detail"
					})
				}),
				c = () => e => ({
					...Object(a.o)(e),
					source: o.Popup,
					action: s.Dismiss,
					noun: r.SsoSignup,
					actionInfo: Object(a.d)(e, {
						page_type: "d2x_post_detail"
					})
				}),
				d = () => e => ({
					...Object(a.o)(e),
					source: o.Popup,
					action: s.View,
					noun: r.SsoSignup,
					actionInfo: Object(a.d)(e, {
						page_type: "d2x_post_detail",
						type: "view_more_comments"
					})
				})
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			}));
			n("./src/reddit/constants/categories.tsx");
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: s.ab(e),
					profile: s.R(e),
					subreddit: s.jb(e)
				}),
				o = e => t => ({
					action: "click",
					source: "nav",
					noun: e,
					...r(t)
				}),
				a = e => t => ({
					...r(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				i = e => t => ({
					...r(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				})
		},
		"./src/reddit/helpers/trackers/onboarding.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "p", (function() {
				return u
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "o", (function() {
				return p
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "m", (function() {
				return O
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "l", (function() {
				return x
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "f", (function() {
				return E
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = [],
				a = "onboarding";
			var i;
			! function(e) {
				e.CATEGORY = "category", e.CREATE_ACCOUNT_SCREEN_DROPDOWN = "create_account_screen_dropdown", e.EXIT = "exit", e.GENDER = "gender", e.ONBOARDING_COMMUNITY_RECOMMENDATIONS = "onboarding_community_recommendations", e.ONBOARDING_GENDER_COLLECTION = "onboarding_gender_collection", e.ONBOARDING_INTEREST = "onboarding_interest", e.SUB_CATEGORY = "sub_category", e.SUBREDDIT = "subreddit", e.VIEW_MORE = "view_more"
			}(i || (i = {}));
			const c = (e = o) => t => ({
					...Object(r.o)(t),
					action: s.c.CLICK,
					noun: i.EXIT,
					onboarding: {
						processNotes: "exited",
						numberSubredditsSelected: e.length,
						subredditsSelected: e
					},
					source: a
				}),
				d = () => e => ({
					...Object(r.o)(e),
					action: s.c.DISMISS,
					noun: i.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: a
				}),
				l = () => e => ({
					...Object(r.o)(e),
					action: s.c.VIEW,
					noun: i.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: a
				}),
				u = e => t => ({
					...Object(r.o)(t),
					action: s.c.DISMISS,
					noun: e,
					source: a
				}),
				m = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				p = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_INTEREST
				}),
				b = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				h = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				f = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_INTEREST
				}),
				g = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				C = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: s.c.SKIP,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				O = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: s.c.SKIP,
					noun: i.ONBOARDING_INTEREST
				}),
				v = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: s.c.SELECT,
					noun: i.GENDER
				}),
				x = (e, t, n) => o => ({
					...Object(r.o)(o),
					source: a,
					action: e ? s.c.SELECT : s.c.DESELECT,
					noun: t ? i.CATEGORY : i.SUB_CATEGORY,
					onboarding: {
						categoryName: n
					}
				}),
				y = (e, t, n) => o => ({
					...Object(r.o)(o),
					source: a,
					action: e ? s.c.SELECT : s.c.DESELECT,
					noun: i.SUBREDDIT,
					onboarding: {
						categoryName: t,
						subredditName: n
					}
				}),
				E = e => t => ({
					...Object(r.o)(t),
					source: a,
					action: s.c.CLICK,
					noun: i.VIEW_MORE,
					onboarding: {
						categoryName: e
					}
				})
		},
		"./src/reddit/helpers/trackers/shortcuts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "s", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "k", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "o", (function() {
				return p
			})), n.d(t, "n", (function() {
				return b
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "p", (function() {
				return f
			})), n.d(t, "r", (function() {
				return g
			})), n.d(t, "q", (function() {
				return C
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "u", (function() {
				return x
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "c", (function() {
				return k
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => () => ({
					source: "shortcuts",
					action: "submit",
					noun: e
				}),
				o = (e, t) => n => ({
					source: "shortcuts",
					action: "submit",
					noun: e,
					post: s.I(n, t)
				}),
				a = (e, t) => n => ({
					source: "shortcuts",
					action: "submit",
					noun: e,
					comment: s.j(n, t)
				}),
				i = r("show_panel"),
				c = r("esc_close"),
				d = e => o("enter_open_post", e),
				l = e => a("enter_comment_collapse", e),
				u = e => o("j_next", e),
				m = e => a("j_next", e),
				p = e => o("k_previous", e),
				b = e => a("k_previous", e),
				h = e => o("n_next", e),
				f = e => o("p_previous", e),
				g = e => o("s_save", e),
				C = e => a("s_save", e),
				O = e => o("h_hide", e),
				v = e => o("x_expando", e),
				x = e => o("a_upvote", e),
				y = e => a("a_upvote", e),
				E = e => o("z_downvote", e),
				j = e => a("z_downvote", e),
				_ = r("c_create_post"),
				S = e => o("l_go_to_link", e),
				k = e => a("r_comment", e);
			r("q_navigation")
		},
		"./src/reddit/helpers/trackers/user.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "i", (function() {
				return h
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/selectors/telemetry.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const a = e => ({
					screen: r.ab(e),
					profile: r.R(e),
					subreddit: r.jb(e)
				}),
				i = e => t => ({
					source: "user_dropdown",
					action: "click",
					noun: e ? "night_mode_off" : "night_mode_on",
					...a(t)
				}),
				c = () => e => ({
					...a(e),
					source: "nav",
					action: "click",
					noun: "recap"
				}),
				d = e => t => ({
					source: "nav",
					action: "click",
					actionInfo: {
						pageType: t.platform.currentPage ? r.v(t.platform.currentPage) : void 0,
						settingValue: e ? "online" : "hidden"
					},
					noun: "online_presence_toggle",
					...a(t)
				}),
				l = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "predictions",
					...a(e)
				}),
				u = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "premium",
					correlationId: Object(s.c)(s.a.GoldPayment),
					...a(e)
				}),
				m = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "powerups",
					correlationId: Object(s.e)(s.a.PowerupsFlow, !1),
					...a(e)
				}),
				p = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "coins",
					correlationId: Object(s.c)(s.a.GoldPayment),
					...a(e)
				}),
				b = e => t => ({
					source: "profile",
					action: "click",
					noun: "block_user",
					targetUser: {
						id: Object(o.mb)(t, {
							userName: e
						}).id
					},
					...r.o(t)
				}),
				h = e => t => ({
					source: "profile",
					action: "click",
					noun: "unblock_user",
					targetUser: {
						id: Object(o.mb)(t, {
							userName: e
						}).id
					},
					...r.o(t)
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			}));
			var s, r, o = n("./src/reddit/constants/tracking.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {}));
			const i = (e, t) => n => ({
					source: r.COMMUNITY_WIDGETS,
					action: o.c.CLICK,
					noun: s.SEE_MORE,
					widget: Object(a.wb)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...a.o
				}),
				c = (e, t) => n => ({
					source: r.POST,
					action: o.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: a.I(n, e),
					subreddit: a.jb(n),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...a.o(n)
				}),
				d = () => e => ({
					source: r.SIDEBAR,
					action: o.c.VIEW,
					noun: s.TOPICS_WIDGET,
					...a.o(e)
				}),
				l = e => t => ({
					source: r.TOPICS_WIDGET,
					action: o.c.CLICK,
					noun: s.TOPIC,
					...a.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/helpers/wiki/makeWikiPath.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/constants/wiki.ts");
			t.a = (e, t = !1) => {
				let n = "/wiki";
				const r = e.countryCode ? `/${e.countryCode}` : "",
					o = e.languageCode ? `/${e.languageCode}` : "";
				return e.subredditName && (n = t ? `${r}${o}/r/${e.subredditName}/about/wiki` : `${r}${o}/r/${e.subredditName}/wiki`, e.wikiSubRoute && (n += `/${e.wikiSubRoute}`)), e.wikiPageName ? n += `/${e.wikiPageName.toLowerCase()}` : e.wikiSubRoute || (n += `/${s.i}`), n
			}
		},
		"./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n("./src/reddit/helpers/localStorage/index.ts");

			function o(e) {
				const [t, n] = Object(s.useState)(Object(r.s)(e));
				return [t, Object(s.useCallback)(() => {
					n(!0), Object(r.lb)(e)
				}, [])]
			}
		},
		"./src/reddit/hooks/useInboxPrivacyPolicyBannerSeen.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n("./src/reddit/helpers/localStorage/index.ts");

			function o(e) {
				const [t, n] = Object(s.useState)(() => Object(r.v)(e));
				return [t, Object(s.useCallback)(() => {
					n(!0), Object(r.wb)(e)
				}, [e])]
			}
		},
		"./src/reddit/hooks/useWindowEvent.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js");
			const r = (e, t) => {
				Object(s.useEffect)(() => (window.addEventListener(e, t), () => window.removeEventListener(e, t)), [e, t])
			};
			t.a = r
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, n) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				d = n.n(c);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: Object(o.a)(e.className, Object(i.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || a.a.gold
				}
			}), "CoinIcon", d.a);
			t.a = l
		},
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => r.a.createElement("svg", c({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20",
				className: Object(o.a)(i.a.checkbox, e)
			}, t), r.a.createElement("path", {
				fill: "inherit",
				d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
			}))
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), r.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
			}))
		},
		"./src/reddit/icons/svgs/DizzySnoo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 52 52"
			}, r.a.createElement("path", {
				d: "M19.39,15.71a31.37,31.37,0,0,0-3.08,1.53,2.24,2.24,0,0,1-1.34.23c-4.27-1.06-7.54.28-10,4-2.09,3.17-.74,8,1.58,9.76a2.39,2.39,0,0,1,.91,1.53,12.18,12.18,0,0,0,5,8.87c.16.13.33.24.49.35a25.65,25.65,0,0,0,5.52,2.81A24,24,0,0,0,26.83,46c2.74-.09,5.49-.1,8.06-1.18a22.6,22.6,0,0,0,6.25-4c2.21-2.67,4.31-5.45,4.62-9a11.29,11.29,0,0,1,1.64-4.91,4.66,4.66,0,0,0,.54-1.58c.78-4.68-3.5-9.17-7.84-7.57a3.37,3.37,0,0,1-3-.49,18.33,18.33,0,0,0-7.63-2.81A25.61,25.61,0,0,0,19.39,15.71Z"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M42.39,18.88a12.75,12.75,0,0,0-2.48,0c1.76,2.1,3.33,3.86,4,6.23-4-5.95-9.64-9.32-16.71-9.37a19.14,19.14,0,0,0-17,9.06c-.17-.53-.51-1-.38-1.3A9.3,9.3,0,0,1,14,18.94c-3-1.13-6.34.54-8,3.85-1.29,2.58-.52,6.08,1.74,7.5a18.14,18.14,0,0,1,.55-2.24,15.4,15.4,0,0,1,1-1.9.86.86,0,0,1,.07.69,12.41,12.41,0,0,0,.4,8.24,11.06,11.06,0,0,0,3.82,5.31c7.18,5.27,17.21,6.56,25.28.91a13.72,13.72,0,0,0,5.77-10.45c.1-1.13.1-2.26.15-3.4l.3.27c.44-.29,1.12-.49,1.3-.9A6.06,6.06,0,0,0,42.39,18.88Z"
			}), r.a.createElement("path", {
				d: "M19.48,28.09a.73.73,0,0,1,.59-1q1.37.39.64,1.66a1.91,1.91,0,0,1-2.8.67c-2-1.53-.17-4,1.61-4.15a2.88,2.88,0,0,1,3,3.41,3.68,3.68,0,0,1-2.47,2.56,3.86,3.86,0,0,1-5.37-3.12c-.24-2.18,1.25-3.73,3.12-4.49,1.66-.67,5.58.83,4.89.44-2.7-1.49-5.73-2.15-7.86.32a5.19,5.19,0,0,0,.37,7c1.65,1.53,4.28,1.38,6.15.39s3.15-4,1.6-5.89-4.84-2.39-6.4-.19-.52,4.82,2.15,5.12c2,.22,4.63-2.84,2.55-4.43-1.5-1.15-4.32.86-2.79,2.32.48.46,1.46-.13,1-.59Z"
			}), r.a.createElement("path", {
				d: "M35.66,28.69c1.52-1.26.33-3.28-1.64-3.11-2.66.22-1.83,4.41.31,4.94,2.65.66,4.41-1.6,3.67-4.09s-4.31-3.3-6.24-1.53a3.94,3.94,0,0,0-.08,5.78,5.4,5.4,0,0,0,5.93.89c2.34-1.08,2.85-4.35,2-6.51-.54-1.3-1.64-1.74-2.91-2.18a6.19,6.19,0,0,0-4.81.49c-.52.38,3-.45,4.61.24a3.87,3.87,0,0,1,2.4,4.73c-.53,2.68-3.49,3.31-5.66,2.21a3,3,0,0,1,1.5-5.64,2.66,2.66,0,0,1,2,4.18c-1,1.2-2.88.44-3.33-.84a1.29,1.29,0,0,1,.92-1.69c.68-.06,1.14.68.33,1.25C34.08,28.17,34.85,29.36,35.66,28.69Z"
			}), r.a.createElement("path", {
				d: "M27.48,14.55a23.72,23.72,0,0,1-5.89-.24c-2.93-.77-.16-2.12,1-2.52a23.39,23.39,0,0,1,6.7-1c1.71-.05,4.47-.62,5.54,1.06a13.86,13.86,0,0,1-5.86.71c-1.18-.08-4.66-.14-5.34-1.35-.59-1,.88-2.95,1.86-3a11.48,11.48,0,0,1,2.11.15c.67.07.59-.94,0-1A6.33,6.33,0,0,0,23.36,8a2.55,2.55,0,0,0-.27,4.23c2.39,1.83,7.34,1.61,10.07,1.1,1.23-.23,4-.56,2.91-2.43-.68-1.15-2.46-1.07-3.6-1.08a31.33,31.33,0,0,0-11.3,1.47c-2.62,1-3.87,2.91-.4,4a14.5,14.5,0,0,0,4.86.4l1.85-.09C28.1,15.52,28.13,14.52,27.48,14.55Z"
			}), r.a.createElement("path", {
				d: "M30.73,5.14a3.35,3.35,0,0,0-4.43-.85,3,3,0,0,0-.72,3.93c.77,1.16,3.31,1.48,4.39.7A2.63,2.63,0,0,0,30.73,5.14Z"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M29.34,7.94c-.52.7-1.71.34-2.39.11-1-.34-1-2.35-.18-2.9a1.79,1.79,0,0,1,2.23,0,2.34,2.34,0,0,1,1,1.18C30.21,6.87,29.61,7.57,29.34,7.94Z"
			}), r.a.createElement("path", {
				d: "M31.51,35.16c-5.18.72-4.85-2.84-9.7-1.22-3,1-3,4.65-.45,6.32,3.2,2.09,9.08.72,11,.24C36.87,39.38,36.72,34.43,31.51,35.16Z"
			}))
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, r.a.createElement("g", null, r.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), r.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/icons/svgs/Snoo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/colors.ts");
			t.a = e => r.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				className: e.className
			}, r.a.createElement("g", null, r.a.createElement("circle", {
				fill: o.a.snoo,
				cx: "10",
				cy: "10",
				r: "10"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
			})))
		},
		"./src/reddit/icons/svgs/SnooFacepalm/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fill: "#000",
				d: "M5.1 3.2c.5.3 1.1.3 1.7.1 1.4-.5 2.9-.9 4.5-.7 1.2.2 1.8.2 2.3.4 1 .4 2 .9 3 1.4.5.3 1 .8 1.5 1.2.2.2.5.4.7.4 2.4-.1 4.1 1 5 3.3.8 2-.5 4.5-2 5.1-.3.1-.6.4-.7.7-.6 2-1.9 3.3-3.7 4.2-.1.1-.2.1-.3.1-.7.3-3.9 1.7-7.9 1-4.8-.9-9.3-4.6-8.7-10.2.1-1 0-1.9-.3-2.9-.2-.2-.2-.5-.2-.8.1-2.7 2.9-4.6 5.1-3.3z"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M.7 7.5c.4 1.3.7.5.8.5-.1.6-.3 1.3-.3 1.9-.3 2.4.3 4.6 1.9 6.3 3.7 4 8.5 4.6 13.2 2.7 1.2-.5 2.6-1.7 3.3-2.8.8-1.4 1.3-2.8 1.2-4.4 0-.1 0-.2.1-.4.1.4.3.8.3 1.1.1.4 0 .8 0 1.3 1.4-.5 2.2-2.3 1.8-3.9-.5-2-2.1-3.3-3.9-3 .9.8 1.6 3.3 1.4 3.6-1.5-3.8-4.4-6.1-8.2-6.8-3.8-.8-7.2.4-10.1 3.2.6-1.2 1.7-2 2.9-2.9-.6-.1-1-.3-1.4-.3-1.8.1-3.5 2.1-3 3.9z"
			}), r.a.createElement("path", {
				fill: "#000",
				d: "M7.2 16.7c1.4.6 2.9.9 4.4 1 .6 0 1.3-.4.3-.5-1.2-.1-2.4-.3-3.5-.8-.3-.1-.7-.1-1 0-.1 0-.5.2-.2.3zM7.3 13.4c-.1 0-.2-.1-.3-.2-.1-.2-.2-.4-.4-.6-.6-.6-1.4-1.1-2.2-.9-.3.1-.5.2-.8.2h-.5c0-.1-.1-.3 0-.4.2-.2.5-.3.6-.4 1.6-.6 3.7.6 3.9 1.7v.3c0 .3-.2.3-.3.3zm9.8 1.1c-.1 0-.3 0-.4-.1-.1 0-.1-.1-.2-.1-.7-.5-1.5-.5-2.3 0-.2.1-.5.2-.7.3 0-.2 0-.4.1-.6.6-.6 1.7-.8 2.7-.5.3.1.7.5.9.8.1 0 0 .2-.1.2z"
			}), r.a.createElement("path", {
				fill: "#000",
				d: "M16.1 20.7c-2-.2-2.7-.9-2.9-2.5-.1-.9-.3-1.6-.7-2.4-.4-.9-.5-1.4-1.5-1.7-1.3-.5-1.9-1.6-2-2.6 0-.8.2-1.7.8-2.3 1.1-1.1 2.9-1.1 4.2-.5 1.3.6 3.8 3.2 4.3 4.5 1.6 4.2.8 7.2-2.2 7.5zM12 5.6c.1.2.1.7.6.5.4-.1.4-.6-.2-1.6-.3-.6-.5-1.6 0-2.2 1-1.3 2.3-1 3.5-.7.4.1 1.5.3 1.5.8 0 .7.6 1.8 1.2 2.2 1.2 1 3.5-.1 3.5-1.8 0-1.5-1.1-2.7-2.5-2.6-.6 0-1.6.7-2 1.2-.6-.2-1.2-.4-1.9-.5-1.3-.3-2.6-.3-3.7.7-1.2 1.1-.8 2.9 0 4-.1-.1-.2-.2-.3-.4.1.1.2.3.3.4.1.1-.6-.9 0 0z"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M21.3 3.1c-.2.5-.6.9-1 1-.4.1-.9 0-1.3-.3s-.7-.7-.7-1.1c0-.2 0-.8.8-1.4.5-.4 1.4 0 1.9.4.2.4.5.8.3 1.4zM18 14.6c-.5-2.5-3.8-6.4-6.8-5.3-1.4.5-1.7 2.4-.8 3.5.7.8 2.1 1.2 3 1.6-.3 0-.6.1-.9 0 1.2 1.6.6 4.7 2.8 5.2 2.5.7 3.4-1.7 2.7-5z"
			}))
		},
		"./src/reddit/icons/svgs/SnooHappy/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 25",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fill: "#000",
				d: "M19.7 9.4c-.6.2-1.1 0-1.6-.3-1.3-.8-2.6-1.4-4.2-1.5-1.2-.1-1.8-.1-2.3 0-1.1.2-2.2.4-3.2.7-.6.2-1.1.6-1.7.8-.2.1-.5.2-.7.2-2.3-.6-4.1.2-5.4 2.2-1.1 1.7-.4 4.4.9 5.3.2.2.5.5.5.8.1 2.1 1.2 3.6 2.7 4.8.1.1.2.1.3.2.6.4 1.9 1.2 3 1.5 1.5.5 3 .7 4.5.7 1.5-.1 3-.1 4.4-.6.4-.2 2.3-1.1 3.4-2.2 1.2-1.5 2.3-3 2.5-4.9.1-1 .4-1.8.9-2.7.2-.3.2-.6.3-.9.4-2.5-2-5-4.3-4.1z"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M20.9 10c-.4-.1-.8 0-1.4 0 1 1.1 1.8 2.1 2.2 3.4-2.2-3.2-5.3-5.1-9.1-5.1s-7 1.6-9.2 4.9c-.1-.3-.3-.6-.2-.7.5-1 1.2-1.9 2.3-2.5-1.7-.5-3.5.4-4.4 2.2-.7 1.4-.3 3.3.9 4.1l.3-1.2c.1-.4.4-.7.6-1 .1.2.1.3 0 .4-.5 1.5-.3 3 .2 4.5.5 1 1.1 2 2.1 2.8 3.9 2.9 9.4 3.6 13.8.5 1.9-1.3 2.9-3.3 3.1-5.7.1-.6.1-1.2.1-1.8.1 0 .1.1.2.1.2-.2.6-.3.7-.5.7-1.7-.4-3.9-2.2-4.4z"
			}), r.a.createElement("path", {
				fill: "#000",
				d: "M10.1 15.4s-.3-.1-.4-.2l-.6-.6c-.8-.5-1.6-.3-2.2.5-.2.3-.3.5-.5.8-.1.1-.3.2-.5.3-.1-.2-.2-.4-.2-.6.1-.4.3-.7.3-.9 1.1-1.7 3.3-1.8 4.1-.3.1.2.2.3.2.5s-.1.4-.2.5zm3.1 6.5c-2.3 0-4-1.6-4.4-3.4 0-.1.3-.4.6-.5 2-.8 5-1.1 7.2-.4.2.1.5.2.5.3 0 .1-.3.2-.3.3-.4 1.7-1.5 3.7-3.6 3.7zm5.9-6.5c-.1 0-.3-.1-.4-.2-.1 0-.1-.1-.1-.2-.6-.9-1.4-1-2.2-.3-.2.2-.5.2-.7.4.1-.3 0-.7.2-.9.7-.9 1.8-1.1 2.7-.5.2.2.6.9.8 1.4-.1.1-.2.3-.3.3zM16.6.5c-.5-.4-1.4-.7-2.3-.2-.4.2-.7.5-.8.7-.2.7-.2 1.1-.1 1.5-1 1-2.2 1.6-3.6 1.7-.2 0-.4.2-.4.4-.1.5.1.9.4 1.4.5.7.7 1.2.9 1.9V8c.1.2.2.2.4.2.1 0 .2-.1.3-.1.1-.1.1-.2.1-.3v-.2c0-.1-.1-.3-.1-.4-.1-.3-.2-.6-.3-.8-.1-.2-.2-.3-.3-.4-.1-.3-.3-.8-.3-1.1.5-.1 1.1-.2 1.6-.5.4-.2.7-.5 1-.8.2-.2.3-.3.5-.4.4.5.8.7 1.6.8h.2c.4 0 .9-.2 1.3-.5s.6-.8.6-1.4c.1-.6-.2-1.2-.7-1.6z"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M14 1.9c-.1-.6.4-1.1 1.1-1.2.8-.1 1.4.3 1.5 1 .1.7-.5 1.5-1.1 1.6-.7.1-1.4-.6-1.5-1.4z"
			}))
		},
		"./src/reddit/icons/svgs/SnooNoEyes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M15.4687,7.5029 C15.0937,7.5029 14.7307,7.5849 14.3997,7.7389 C13.4987,7.2209 12.4417,6.8769 11.3157,6.7229 L11.7777,4.5489 L12.8277,4.7729 C13.1127,5.5939 13.8847,6.1889 14.8007,6.1889 C15.9547,6.1889 16.8947,5.2489 16.8947,4.0949 C16.8947,2.9399 15.9547,1.9999 14.8007,1.9999 C14.1367,1.9999 13.5507,2.3159 13.1667,2.7999 L11.2147,2.3849 C10.6757,2.2739 10.1437,2.6139 10.0287,3.1549 L9.3297,6.4389 C9.3137,6.5159 9.3257,6.5899 9.3277,6.6659 C7.9607,6.7589 6.6667,7.1219 5.5987,7.7379 C5.2677,7.5839 4.9057,7.5029 4.5317,7.5029 C3.1357,7.5029 1.9997,8.6389 1.9997,10.0349 C1.9997,10.7769 2.3257,11.4699 2.8687,11.9429 C2.9027,14.8739 6.0217,17.1629 9.9967,17.1629 C13.9697,17.1629 17.0877,14.8769 17.1247,11.9479 C17.6707,11.4759 17.9997,10.7799 17.9997,10.0349 C17.9997,8.6389 16.8647,7.5029 15.4687,7.5029"
			})))
		},
		"./src/reddit/icons/svgs/SparkleGradient/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o(e) {
				return r.a.createElement("svg", {
					className: e.className,
					style: e.style,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 12 12"
				}, r.a.createElement("path", {
					d: "M6.47.828a.5.5 0 00-.94 0L4.268 4.267.827 5.53a.5.5 0 000 .938l3.44 1.264 1.264 3.44a.5.5 0 00.938 0l1.264-3.44 3.44-1.264a.5.5 0 000-.938l-3.44-1.264L6.47.827z",
					fill: "url(#orangeYellowGradient)",
					stroke: "#fff",
					strokeLinejoin: "round"
				}), r.a.createElement("defs", null, r.a.createElement("linearGradient", {
					id: "orangeYellowGradient",
					x1: "1",
					y1: "11",
					x2: "11.01",
					y2: "10.99",
					gradientUnits: "userSpaceOnUse"
				}, r.a.createElement("stop", {
					stopColor: "#EC0623"
				}), r.a.createElement("stop", {
					offset: "1",
					stopColor: "#FF8717"
				}))))
			}
		},
		"./src/reddit/icons/svgs/Subreddit/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				fill: "#737577",
				d: "M10 .38a9.62 9.62 0 100 19.24A9.62 9.62 0 0010 .38zm0 18A8.381 8.381 0 1114.6 3L9.41 15.55h1.35l4.87-11.73A8.36 8.36 0 0110 18.38z"
			}), r.a.createElement("path", {
				fill: "#737577",
				d: "M10.68 7.87l.66-1.56a1.649 1.649 0 00-.46-.15 3 3 0 00-.7-.07c-.502-.01-1 .09-1.46.29-.38.18-.72.436-1 .75V6.2H6.13v7.3h1.61V9.3A1.71 1.71 0 018 8.43a1.64 1.64 0 01.66-.59 2.12 2.12 0 011-.22 2.08 2.08 0 011.02.25z"
			}))
		},
		"./src/reddit/icons/svgs/Unlock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 17",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.9656 14.8328L13.6 13.4672V8.99847C13.6 8.55608 13.2416 8.19848 12.8 8.19848H12V6.59849C12 4.39291 10.2056 2.59853 8 2.59853C6.5712 2.59853 5.328 3.35852 4.624 4.49131L2.1656 2.03294C1.8528 1.72014 1.3472 1.72014 1.0344 2.03294C0.721605 2.34573 0.721605 2.85133 1.0344 3.16413L13.8344 15.964C13.9904 16.12 14.1952 16.1984 14.4 16.1984C14.6048 16.1984 14.8096 16.12 14.9656 15.964C15.2784 15.6512 15.2784 15.1456 14.9656 14.8328ZM4 8.19859H3.2C2.7584 8.19859 2.4 8.55619 2.4 8.99859V14.5986C2.4 15.041 2.7584 15.3986 3.2 15.3986H11.6688L4 7.72979V8.19859ZM10.4 6.59854C10.4 5.27534 9.32319 4.19854 7.99999 4.19854C7.00959 4.19854 6.15839 4.80174 5.79199 5.65934L8.33119 8.19853H10.4V6.59854Z"
			}))
		},
		"./src/reddit/icons/svgs/Wordmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = Object(o.a)(e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 57 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: e.color || Object(i.a)(e).bodyText
			}, r.a.createElement("path", {
				d: "M54.63,16.52V7.68h1a1,1,0,0,0,1.09-1V6.65a1,1,0,0,0-.93-1.12H54.63V3.88a1.23,1.23,0,0,0-1.12-1.23,1.2,1.2,0,0,0-1.27,1.11V5.55h-1a1,1,0,0,0-1.09,1v.07a1,1,0,0,0,.93,1.12h1.13v8.81a1.19,1.19,0,0,0,1.19,1.19h0a1.19,1.19,0,0,0,1.25-1.12A.17.17,0,0,0,54.63,16.52Z"
			}), r.a.createElement("circle", {
				fill: a.a.snoo,
				cx: "47.26",
				cy: "3.44",
				r: "2.12"
			}), r.a.createElement("path", {
				d: "M48.44,7.81a1.19,1.19,0,1,0-2.38,0h0v8.71a1.19,1.19,0,0,0,2.38,0Z"
			}), r.a.createElement("path", {
				d: "M30.84,1.19A1.19,1.19,0,0,0,29.65,0h0a1.19,1.19,0,0,0-1.19,1.19V6.51a4.11,4.11,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S22.28,18,25.42,18a4.26,4.26,0,0,0,3.1-1.23,1.17,1.17,0,0,0,1.47.8,1.2,1.2,0,0,0,.85-1.05ZM25.41,15.64c-1.83,0-3.32-1.77-3.32-4s1.48-4,3.32-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"
			}), r.a.createElement("path", {
				d: "M43.28,1.19A1.19,1.19,0,0,0,42.09,0h0a1.18,1.18,0,0,0-1.18,1.19h0V6.51a4.15,4.15,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S34.72,18,37.86,18A4.26,4.26,0,0,0,41,16.77a1.17,1.17,0,0,0,1.47.8,1.19,1.19,0,0,0,.85-1.05ZM37.85,15.64c-1.83,0-3.31-1.77-3.31-4s1.47-4,3.31-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"
			}), r.a.createElement("path", {
				d: "M17.27,12.44a1.49,1.49,0,0,0,1.59-1.38v-.15a4.81,4.81,0,0,0-.1-.85A5.83,5.83,0,0,0,13.25,5.3c-3.1,0-5.69,2.85-5.69,6.35S10.11,18,13.25,18a5.66,5.66,0,0,0,4.39-1.84,1.23,1.23,0,0,0-.08-1.74l-.11-.09a1.29,1.29,0,0,0-1.58.17,3.91,3.91,0,0,1-2.62,1.12A3.54,3.54,0,0,1,10,12.44h7.27Zm-4-4.76a3.41,3.41,0,0,1,3.09,2.64H10.14A3.41,3.41,0,0,1,13.24,7.68Z"
			}), r.a.createElement("path", {
				d: "M7.68,6.53a1.19,1.19,0,0,0-1-1.18A4.56,4.56,0,0,0,2.39,6.91V6.75A1.2,1.2,0,0,0,0,6.75v9.77a1.23,1.23,0,0,0,1.12,1.24,1.19,1.19,0,0,0,1.26-1.1.66.66,0,0,0,0-.14v-5A3.62,3.62,0,0,1,5.81,7.7a4.87,4.87,0,0,1,.54,0h.24A1.18,1.18,0,0,0,7.68,6.53Z"
			}))))
		},
		"./src/reddit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = (n("./src/polyfill.ts"), n("./src/lib/performanceTimings/index.tsx")),
				o = n("./node_modules/@r/google-tag-manager/compiled.js"),
				a = n("./src/config.ts"),
				i = n("./node_modules/history/esm/history.js"),
				c = n("./node_modules/js-cookie/src/js.cookie.js"),
				d = n.n(c),
				l = n("./node_modules/react/index.js"),
				u = n.n(l),
				m = n("./node_modules/react-router-redux/es/index.js"),
				p = n("./src/lib/makeActionCreator/index.ts"),
				b = n("./src/reddit/actions/recentSubreddits/constants.ts"),
				h = n("./src/lib/isFakeSubreddit/index.ts"),
				f = n("./src/reddit/helpers/name/index.ts");
			const g = /^u_[\w-]+$/;
			var C = n("./src/reddit/selectors/user.ts");
			const O = (e, t) => async (n, s) => {
				var r;
				const o = s();
				if (function(e) {
						return g.test(Object(f.g)(e))
					}(t)) {
					const e = (null === (r = Object(C.k)(o)) || void 0 === r ? void 0 : r.displayText) || "";
					if (function(e, t) {
							return Object(f.g)(e) === Object(f.g)(t)
						}(t, function(e) {
							return `u_${Object(f.g)(e)}`
						}(e))) return
				} else if (Object(h.a)(t)) return;
				n((e => ({
					payload: e,
					type: b.f
				}))(e))
			}, v = Object(p.a)(b.e), x = e => ({
				payload: {
					subreddits: e
				},
				type: b.b
			}), y = e => ({
				payload: e,
				type: b.a
			});
			var E = n("./node_modules/redux-thunk/es/index.js"),
				j = n("./node_modules/request-idle-callback/index.js"),
				_ = n("./src/lib/browser/isIncognito.ts"),
				S = n("./src/lib/constants/index.ts"),
				k = n("./src/lib/extractQueryParams/index.ts"),
				P = n("./src/lib/filterQueryParams/index.ts"),
				w = n("./src/lib/getParsedUserAgent/index.ts"),
				N = n("./src/lib/initializeClient/index.tsx"),
				I = n("./src/lib/loadableAction/index.ts"),
				M = n("./src/lib/matchRoute/index.ts"),
				T = n("./src/lib/performance.js"),
				R = n("./src/lib/reCaptchaEnterprise/index.ts"),
				L = n("./src/lib/safeJSONParse/index.ts"),
				A = n("./src/lib/serviceWorker/index.ts"),
				F = n("./src/reduxMiddleware/apiContext.ts"),
				D = n("./src/reduxMiddleware/gqlContext.ts"),
				B = n("./src/telemetry/index.ts"),
				U = n("./src/telemetry/helpers/sendEvent.ts"),
				G = n("./src/telemetry/models/Event.ts"),
				H = n("./src/telemetry/models/Timer.ts"),
				W = n("./src/reddit/actions/apiRequestHeaders.ts"),
				q = n("./src/reddit/actions/chat/toggle.ts"),
				V = n("./src/reddit/actions/comment/index.ts"),
				K = n("./src/reddit/actions/emailCollection/index.ts"),
				z = n("./src/reddit/actions/emailVerification.ts"),
				Q = n("./src/reddit/actions/googleOneTap/index.ts"),
				J = n("./src/reddit/actions/media.ts"),
				Z = n("./src/lib/loadWithRetries/index.ts"),
				Y = () => Object(Z.a)(() => n.e("PushNotifications").then(n.bind(null, "./src/reddit/actions/notifications/index.ts"))),
				X = n("./src/reddit/actions/nps.ts");
			const $ = Object(I.a)(() => n.e("OnboardingActions").then(n.bind(null, "./src/reddit/actions/onboarding/index.ts")).then(e => e.default));
			var ee = n("./src/reddit/actions/platform.ts"),
				te = n("./src/reddit/actions/post.ts"),
				ne = n("./src/reddit/actions/reCaptchaEnterprise.ts"),
				se = n("./src/reddit/actions/session.ts"),
				re = n("./src/reddit/actions/survey/index.ts"),
				oe = n("./src/reddit/actions/theme.ts"),
				ae = n("./src/reddit/actions/toaster.ts"),
				ie = n("./src/reddit/actions/users.ts"),
				ce = n("./node_modules/react-redux/es/index.js"),
				de = n("./node_modules/react-router/esm/react-router.js"),
				le = n("./node_modules/reselect/es/index.js"),
				ue = (n("./assets/fonts/redesignIcon2020/redesignFont2020.css"), n("./assets/fonts/BentonSans/font.less"), n("./assets/fonts/IBMPlexSans/font.less"), n("./assets/fonts/NotoMono/font.less"), n("./assets/fonts/NotoSans/font.less"), n("./assets/fonts/RedditSans/font.less"), n("./assets/fonts/VCR/font.less"), n("./src/reddit/components/Root/index.m.less")),
				me = n.n(ue),
				pe = n("./src/reddit/components/Root/AdminPanelLoader.tsx"),
				be = n("./src/lib/classNames/index.ts"),
				he = n("./src/reddit/components/AppRouter/index.tsx"),
				fe = n("./src/reddit/contexts/User/index.tsx");

			function ge(e) {
				return u.a.createElement(fe.b, null, e.children)
			}
			var Ce = n("./src/reddit/components/ShortcutWrapper/Loader.ts"),
				Oe = n("./src/reddit/constants/shortcuts.ts"),
				ve = n("./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less"),
				xe = n.n(ve);
			var ye = ({
					children: e
				}) => u.a.createElement("div", {
					className: xe.a.shortcutDiv,
					id: Oe.b,
					tabIndex: -1
				}, u.a.Children.only(e)),
				Ee = n("./src/reddit/components/TrackingHelper/index.tsx"),
				je = n("./src/reddit/contexts/NavbarExp.ts"),
				_e = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				Se = n("./src/reddit/components/Header/Sparse.tsx"),
				ke = n("./src/reddit/components/ThemeProvider/index.tsx"),
				Pe = n("./src/reddit/contexts/InsideOverlay.tsx"),
				we = n("./src/reddit/controls/Button/index.tsx"),
				Ne = n("./src/reddit/featureFlags/index.ts"),
				Ie = n("./src/reddit/icons/svgs/DizzySnoo/index.tsx"),
				Me = n("./src/reddit/pages/InternalServerError/index.m.less"),
				Te = n.n(Me);
			const {
				fbt: Re
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Le = Object(le.c)({
				showError: Ne.d.showVerboseErrors
			}), Ae = Object(ce.b)(Le)(e => {
				const t = Object(l.useContext)(je.a);
				return u.a.createElement(Pe.a.Provider, {
					value: !1
				}, u.a.createElement(ke.b, {
					subredditName: ""
				}, u.a.createElement("div", null, u.a.createElement(Se.a, {
					logoHref: "#",
					logoOnClick: () => window.location.reload(!0)
				}), u.a.createElement("div", {
					className: Te.a.container
				}, u.a.createElement("div", {
					className: Te.a.mainContent
				}, u.a.createElement(Ie.a, {
					className: Te.a.dizzySnoo
				}), u.a.createElement("h3", {
					className: Te.a.title
				}, Re._("Sorry, for some reason reddit can't be reached.", null, {
					hk: "2yRKWG"
				})), u.a.createElement("div", {
					className: Te.a.subTitle
				}, Re._("Give us a few minutes to fix the problem. Sorry!", null, {
					hk: "1c7Mg0"
				})), u.a.createElement(we.l, {
					onClick: () => window.location.reload(!0)
				}, Re._("Reload Page", null, {
					hk: "S79U1"
				})), e.showError && u.a.createElement(u.a.Fragment, null, u.a.createElement("div", {
					className: Te.a.subTitle
				}, e.error.message), u.a.createElement("pre", null, u.a.createElement("code", null, e.error.stack)))), u.a.createElement("div", {
					className: Object(be.a)(Te.a.topImageContainer, {
						[Te.a.topImageContainerExp]: t
					})
				}, u.a.createElement("img", {
					className: Te.a.image,
					src: `${a.a.assetPath}/img/error/star_pattern.png`
				})), u.a.createElement("div", {
					className: Te.a.bottomImageContainer
				}, u.a.createElement("img", {
					className: Te.a.image,
					src: `${a.a.assetPath}/img/error/half_planet.png`
				}))))))
			});
			var Fe = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts");

			function De() {
				return (De = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Be = Object(le.c)({
					isNavbarLikeMwebEnabled: Fe.a,
					theme: e => e.themes.current
				}),
				Ue = Object(ce.b)(Be, {})(({
					children: e,
					theme: t,
					isNavbarLikeMwebEnabled: n
				}) => {
					const s = Object(_e.a)({
						theme: t
					});
					return u.a.createElement(je.a.Provider, {
						value: n
					}, u.a.createElement("div", {
						className: Object(be.a)(me.a.container, {
							[me.a.containerExp]: n
						}),
						style: {
							"--background": s.body,
							"--canvas": s.canvas
						}
					}, e))
				});

			function Ge(e) {
				if (e.ok) {
					const {
						RouterComponent: t,
						routes: n
					} = e;
					return u.a.createElement(Ee.a, null, u.a.createElement(Ue, null, u.a.createElement(ge, null, u.a.createElement(pe.a, null), u.a.createElement(Ce.a, null), u.a.createElement(ye, null, u.a.createElement(t, null, u.a.createElement(de.d, {
						component: He(n)
					}))))))
				}
				return u.a.createElement(Ae, {
					error: e.error
				})
			}
			const He = e => t => u.a.createElement(he.b, De({
				routes: e
			}, t));
			var We = n("./src/reddit/constants/localStorage.ts"),
				qe = n("./node_modules/lodash/throttle.js"),
				Ve = n.n(qe),
				Ke = n("./src/reddit/helpers/localStorage/index.ts");
			const ze = 1e3;
			class Qe extends u.a.Component {
				constructor() {
					super(...arguments), this.flush = Ve()(() => Object(Ke.Db)(this.props.storageKey, this.props.value), ze)
				}
				componentDidMount() {
					this.props.syncOnMount && this.sync()
				}
				componentDidUpdate() {
					this.sync()
				}
				sync() {
					this.props.enabled && this.flush()
				}
				render() {
					return null
				}
			}
			Qe.defaultProps = {
				enabled: !0,
				syncOnMount: !0
			};
			const Je = Object(le.a)(C.J, e => ({
				storageKey: We.b.LOCAL_PERSISTED_EXPERIMENTS_STORE,
				value: {},
				enabled: !e
			}));
			var Ze = Object(ce.b)(Je)(Qe);
			var Ye = () => u.a.createElement(u.a.Fragment, null, u.a.createElement(Ze, null)),
				Xe = n("./src/reddit/constants/experiments.ts"),
				$e = n("./src/reddit/constants/headers.ts"),
				et = n("./src/reddit/constants/history.ts"),
				tt = n("./src/reddit/constants/jsapiEvents.ts"),
				nt = n("./src/reddit/constants/parameters.ts"),
				st = n("./src/reddit/constants/screenWidths.ts"),
				rt = n("./src/reddit/contexts/AdminEvents.ts"),
				ot = n("./src/reddit/contexts/ApiContext.tsx"),
				at = n("./src/reddit/contexts/ThrottlingContext/index.tsx"),
				it = n("./src/reddit/actions/appBadgeIndicators/constants.ts");
			const ct = () => e => t => e(t);
			var dt = n("./src/lib/safeBadgeUpdate.ts"),
				lt = n("./src/reddit/selectors/appBadges.ts");

			function ut(e) {
				const t = Object(lt.g)(e);
				Object(dt.a)(t)
			}
			var mt = "undefined" != typeof document ? e => t => n => {
					const s = t(n);
					return n.type !== it.b && n.type !== it.d || ut(e.getState()), s
				} : ct,
				pt = n("./node_modules/brcast/dist/brcast.es.js"),
				bt = n("./src/reddit/selectors/runTimeEnvVars.ts");
			var ht = "undefined" != typeof document ? () => {
					let e = !1;
					const t = Object(pt.a)([]);
					return {
						broadcaster: t,
						middleware: n => {
							const s = n.getState();
							return (Object(bt.b)(s) || Object(C.G)(s)) && (e = !0, Object(U.e)(t)), s => r => {
								const o = s(r),
									a = n.getState();
								if (!Object(bt.b)(a)) {
									const n = Object(C.G)(a);
									e && !n ? (e = !1, Object(U.e)(void 0), t.setState([])) : n && !e && (t.setState([]), Object(U.e)(t), e = !0)
								}
								return o
							}
						}
					}
				} : () => ({
					broadcaster: Object(pt.a)([]),
					middleware: () => e => t => e(t)
				}),
				ft = n("./node_modules/lodash/debounce.js"),
				gt = n.n(ft),
				Ct = n("./src/lib/domUtils/index.ts");
			const Ot = 30 * S.kb;
			let vt = Date.now();
			const xt = () => {
					vt = Date.now()
				},
				yt = !!Object(Ct.f)() && {
					passive: !0
				};
			window.addEventListener("click", xt, !1), window.addEventListener("wheel", gt()(xt, 250), yt), window.addEventListener("mousemove", gt()(xt, 250), yt), window.addEventListener("keydown", gt()(xt, 250), yt);
			var Et = e => {
					return document.addEventListener("visibilitychange", (function() {
						"visible" === document.visibilityState && document.hasFocus && Date.now() - vt >= Ot ? (e.dispatch(se.h()), xt()) : xt()
					})), e => t => e(t)
				},
				jt = n("./node_modules/lodash/pick.js"),
				_t = n.n(jt),
				St = n("./src/reddit/actions/header.ts"),
				kt = n("./src/reddit/actions/preferences.ts"),
				Pt = n("./src/reddit/constants/preferences.ts"),
				wt = n("./src/reddit/helpers/cookies/index.ts");
			const Nt = new Set([kt.g, kt.i, oe.b, kt.d, kt.o, St.d, St.e, kt.r]);
			var It = e => t => n => {
					const s = t(n);
					if (Nt.has(n.type)) {
						const t = e.getState().user,
							n = _t()(t.prefs, ["hamburgerTray", "globalTheme", "collapsedTraySections", "nightmode", "subscriptionsPinned", Pt.b, Pt.d, Pt.e]);
						Object(wt.a)({
							prefs: n
						})
					}
					return s
				},
				Mt = n("./src/lib/fastdom/index.ts"),
				Tt = n("./src/reddit/actions/tabBadging.ts"),
				Rt = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				Lt = n("./src/reddit/contexts/PageLayer/index.tsx"),
				At = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				Ft = n("./src/reddit/selectors/platform.ts");
			const Dt = new Set([302, 400, 401, 403, 404, 421, 429, 500, 502, 503, 504, 0, void 0, null]),
				Bt = e => {
					var t;
					const {
						currentPage: n
					} = e.platform, s = Object(Ft.r)(e), r = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.status, o = Dt.has(r), a = Object(Lt.l)(e, {
						pageLayer: n
					}), i = !(!a || !a.hideFromRobots), c = Ut(e), d = n && n.isRobotIndexable, l = s === S.Mb.COMMENTS || s === S.Mb.COLLECTION_COMMENTS, u = !(!n || !n.urlParams.partialCommentId), m = s === S.Mb.SEARCH_RESULTS || s === S.Mb.SUBREDDIT_LEADERBOARD || l && u;
					return i || o || c || (!1 === d || m) ? m ? "noindex" : "noindex,nofollow" : null
				},
				Ut = e => {
					var t;
					let n = !1;
					const s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams.subredditName;
					if (s) {
						const t = Object(C.f)(e, s);
						n = !!Object(At.a)(t, !1, s)
					}
					return n
				};
			var Gt = n("./src/reddit/models/NewStructuredStyles/index.ts");
			const Ht = "theme-color",
				Wt = `meta[name="${Ht}"]`;

			function qt(e) {
				return e ? Gt.b.body : Gt.a.body
			}
			var Vt = "undefined" != typeof document ? e => t => n => {
					const s = t(n);
					if (n.type === ee.f) {
						const t = e.getState(),
							s = Object(C.I)(t),
							{
								meta: r
							} = n.payload;
						s ? ((e, t) => {
							let n = 0;
							n = Object(Rt.b)(e) ? Object(lt.i)(e) : Object(lt.j)(e), Object(Tt.c)(n, t)
						})(t, r.title) : Mt.a.write(() => {
							document.title = r.title, ((e, t) => {
								if (t.head) {
									let n = t.querySelector("meta[name='robots']");
									const s = Bt(e),
										{
											head: r
										} = t;
									s ? (n || ((n = t.createElement("meta")).name = "robots", r.appendChild(n)), n.content = s) : n && (n.remove ? n.remove() : n.parentNode ? n.parentNode.removeChild(n) : r.removeChild && r.removeChild(n))
								}
							})(t, document)
						})
					} else if (n.type === kt.i) {
						! function(e) {
							Mt.a.write(() => {
								const t = document.head.querySelector(Wt);
								if (t) {
									const n = Object(C.W)(e);
									t.content = qt(n)
								}
							})
						}(e.getState())
					}
					return s
				} : ct,
				Kt = n("./src/reddit/helpers/survey/index.ts");
			var zt = "undefined" != typeof document ? e => e => t => ((e => !!Object.keys(Kt.b).filter(t => t === e).length)(t.type) && Object(Ke.S)(Kt.b[t.type]), e(t)) : ct;
			const Qt = 5 * S.kb;
			var Jt = e => {
					const t = Ve()(() => {
						const t = e.getState().user.session,
							n = new Date(t.expires),
							s = new Date;
						n.getTime() - s.getTime() > .2 * t.expiresIn * 1e3 || e.dispatch(se.g())
					}, Qt);
					let n, s;
					const r = () => {
							const n = e.getState().user.session;
							if (!n || !s) return;
							const r = new Date(n.expires),
								o = s + Math.floor(.8 * (r.getTime() - s));
							Date.now() > o && t && t()
						},
						o = e => {
							s = Date.now();
							const r = new Date(e.expires).getTime() - s,
								o = .8 + .1 * Math.random(),
								a = Math.min(Math.floor(o * e.expiresIn * 1e3), Math.floor(o * r));
							n = setTimeout(t, a)
						},
						a = e.getState();
					return a.user.session && o(a.user.session), window.addEventListener("focus", r), window.addEventListener("touchend", r), document.body.addEventListener("mouseenter", r), e => t => (t.type !== se.a && t.type !== se.b && t.type !== se.c && t.type !== se.e || o(t.payload), t.type === se.d && (clearTimeout(n), n = null), e(t))
				},
				Zt = n("./src/reddit/singleton/tracing/index.ts");
			var Yt = e => e => t => {
					const n = () => e(t);
					return Zt.b.isEnabled ? Zt.b.recordLocalSpan(t.type, n) : e(t)
				},
				Xt = n("./src/reddit/actions/frontpage/constants.ts"),
				$t = n("./src/reddit/actions/pages/profileComments/constants.ts"),
				en = n("./src/reddit/actions/pages/profileOverview/constants.ts"),
				tn = n("./src/reddit/actions/pages/profilePosts.ts"),
				nn = n("./src/reddit/actions/pages/search/index.ts"),
				sn = n("./src/reddit/actions/pages/subreddit.ts"),
				rn = n("./src/reddit/actions/search.ts"),
				on = n("./src/reddit/actions/subreddit.ts"),
				an = n("./src/reddit/actions/tracking.ts"),
				cn = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				dn = n("./src/reddit/helpers/history/index.ts"),
				ln = n("./src/reddit/helpers/trackers/commentList.ts"),
				un = n("./src/reddit/helpers/trackers/postList.ts"),
				mn = n("./src/reddit/helpers/trackers/screenview.ts"),
				pn = n("./src/reddit/selectors/subreddit.ts"),
				bn = n("./src/reddit/helpers/routeKey/index.ts");
			var hn = e => t => n => {
					const s = t => {
						e.getState().tracking.viewportDataLoaded[t] || e.dispatch(an.c({
							routeKey: t
						}))
					};
					if (n.type === ee.b) {
						const s = e.getState(),
							r = (s.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
							a = Object(pn.C)(s, r) || "",
							i = (s.subreddits.about[a] || {}).advertiserCategory;
						o.trigger("pageview", {
							..._t()(n.payload.location, "pathname", "search", "hash"),
							subreddit: r,
							advertiserCategory: i
						});
						const c = s.platform.currentPage && s.platform.currentPage.routeMatch;
						if (c) {
							const e = Object(bn.b)(c, s, Object(cn.a)(s));
							if (e && B.c.has(e)) {
								const t = B.c.end(e);
								!Object(Ft.i)(s) && Object(dn.b)(et.b.IsOverlay) || Object(mn.k)(c, s, H.TimerType.UserCancelled, t)
							}
						}
						const d = n.payload.routeMatch;
						if (!d) return t(n);
						const l = Object(cn.a)(s, d),
							u = Object(bn.b)(d, s, l);
						if (!u) return t(n);
						B.c.start(u)
					}
					const r = t(n);
					switch (n.type) {
						case Xt.b:
						case en.b:
						case en.e:
						case tn.PROFILE_POSTS_LOADED:
						case $t.e:
						case sn.SUBREDDIT_LOADED: {
							const {
								key: e,
								token: t
							} = n.payload;
							t || s(e);
							break
						}
						case nn.c: {
							const {
								key: e,
								tokens: t
							} = n.payload;
							t.posts || s(e);
							break
						}
						case Xt.f:
						case on.i:
						case tn.MORE_POSTS_LOADED: {
							const {
								key: t,
								postIds: r
							} = n.payload;
							s(t);
							const o = e.getState();
							if (r.length) break;
							if (void 0 === o.listings.postOrder.endMarkers[t]) break;
							un.l(o, t);
							break
						}
						case $t.b: {
							const {
								key: t,
								commentIds: r
							} = n.payload;
							if (s(t), r.length) break;
							const o = e.getState();
							if (void 0 === o.profileCommentsPage.endMarkers[t]) break;
							ln.a(o, t);
							break
						}
						case rn.g: {
							const {
								key: e
							} = n.payload;
							s(e);
							break
						}
					}
					return r
				},
				fn = n("./src/reddit/helpers/chooseVariant/index.ts"),
				gn = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				Cn = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				On = n("./src/reddit/helpers/trackers/global.ts");
			let vn = null;
			const xn = () => {
				vn && window.clearTimeout(vn), vn = null
			};
			var yn = e => {
					vn = window.setTimeout(() => {
						xn(), Object(B.a)(Object(On.d)(3e4)(e()))
					}, 3e4), window.addEventListener("beforeunload", xn)
				},
				En = n("./src/reddit/helpers/onBeforeRequestFactory/index.ts"),
				jn = n("./src/reddit/actions/connection/constants.ts");
			const _n = Object(p.a)(jn.b),
				Sn = Object(p.a)(jn.a),
				kn = Object(p.a)(jn.c);
			var Pn = n("./src/reddit/actions/meta.ts"),
				wn = n("./src/reddit/selectors/telemetry.ts");
			const Nn = (e, t) => Object(B.a)({
					...wn.o(e),
					source: "store",
					action: "install",
					noun: "pwa",
					actionInfo: Object(wn.d)(e, {
						type: t
					})
				}),
				In = "(display-mode: minimal-ui)";
			const Mn = 3 * S.Rb;

			function Tn(e) {
				if (!window) return;
				(function(e) {
					const t = e.matchMedia(In).matches;
					return e.navigator && e.navigator.standalone || t
				})(window) && e.dispatch(Object(Pn.i)());
				const t = window.matchMedia(In);
				t && "function" == typeof t.addEventListener && t.addEventListener("change", t => {
					t.matches ? e.dispatch(Object(Pn.i)()) : e.dispatch(Object(Pn.j)())
				}), window.addEventListener("appinstalled", () => {
					const t = e.getState();
					setTimeout(() => {
						ut(t)
					}, 1e3), Nn(t, function(e) {
						return "microsoft-store" === new URLSearchParams(e.location.search).get("app-install-source") ? "microsoft-store" : "browser"
					}(window))
				}), window.addEventListener("online", () => {
					e.dispatch(_n()), setTimeout(() => e.dispatch(kn()), Mn)
				}), window.addEventListener("offline", () => e.dispatch(Sn()))
			}
			var Rn = n("./src/lib/cookieConsent/index.ts"),
				Ln = n("./src/lib/permanentCookieOptions.ts"),
				An = n("./src/reddit/constants/cookie.ts");
			const Fn = (e, t) => {
				if (!e) return;
				const n = (d.a.get(An.g) || "").split(",");
				if (!n.includes(e)) {
					n.unshift(e);
					const s = n.slice(0, 10).join(","),
						r = {
							name: An.g,
							value: s,
							cookieOptions: Object(Ln.a)(),
							cookieContext: t
						};
					Object(Rn.c)(r)
				}
			};
			var Dn = n("./src/reddit/layout/page/Listing/index.tsx"),
				Bn = n("./src/reddit/models/Toast/index.ts"),
				Un = n("./src/reddit/reducers/index.ts"),
				Gn = n("./src/reddit/routes/index.ts");
			var Hn = n("./src/reddit/selectors/experiments/googleOneTap.ts");
			const Wn = {
					displayDelay: 15,
					displayOnRoutes: [S.Mb.SUBREDDIT, S.Mb.COMMENTS],
					experimentName: Xe.ld,
					experimentVariant: Xe.qd.On,
					isSEOOnly: !0,
					samplingRate: 25,
					seed: Math.random()
				},
				qn = e => {
					const {
						base_url: t
					} = Object(wn.Z)(e), n = Object(Ft.b)(e), s = n && n.urlParams.partialPostId, r = n && n.urlParams.subredditName;
					return {
						...t && {
							rbl: t
						},
						...r && {
							s: r
						},
						...s && {
							p: s
						}
					}
				},
				Vn = e => {
					if (((({
							experimentName: e,
							experimentVariant: t
						}, n) => n.experimentOverrides[e] === t)(Wn, e) || (({
							samplingRate: e,
							seed: t
						}) => !!t && 0 === Math.floor(t * e))(Wn)) && (({
							displayOnRoutes: e
						}, t) => {
							const n = t.platform.currentPage && t.platform.currentPage.meta && t.platform.currentPage.meta.name;
							return !!n && e.includes(n)
						})(Wn, e) && (({
							isSEOOnly: e
						}, t) => !e || t.meta.isSessionSeo)(Wn, e) && (({
							experimentName: e,
							experimentVariant: t
						}, n) => Object(fn.c)(n, {
							experimentName: e,
							experimentEligibilitySelector: fn.a
						}) === t)(Wn, e)) return {
						displayDelay: Wn.displayDelay,
						externalVars: qn(e)
					}
				};
			var Kn = n("./src/reddit/selectors/meta.ts"),
				zn = n("./src/reddit/selectors/onboarding.ts");
			var Qn = n("./src/reddit/singleton/EventSystem.ts"),
				Jn = n("./src/telemetry/helpers/getSerializedThriftJSON.ts"),
				Zn = n("./src/telemetry/helpers/getSignatureHeader.ts"),
				Yn = n("./src/lib/initializeClient/installReducer.ts"),
				Xn = n("./src/reddit/reducers/features/categories/index.ts"),
				$n = n("./src/lib/sentry/index.ts"),
				es = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const ts = Object(p.a)(es.C),
				ns = () => {
					return Object(Ke.B)(We.b.RPAN_USER_SETTINGS_STORE) || void 0
				};
			var ss = n("./src/reddit/actions/global/constants.ts");
			Object(Yn.a)({
				features: {
					categories: Xn.a
				}
			});
			const rs = Object(p.a)(ss.a),
				os = e => async (t, n) => {
					t((() => async e => {
						const t = ns();
						t && e(ts(t))
					})());
					const s = n();
					s.user.loid.loid || s.meta.isBot || $n.c.withScope(e => {
						Object($n.a)(e, {
							serverLogging: !1
						}), $n.c.captureMessage("User has no LOID set")
					});
					const {
						localStorageData: r
					} = e;
					r && t(rs(r))
				};
			var as = n("./src/reddit/actions/login.ts");
			const is = /^\/account\/magic_link\/landing\/[^\/]+\/?$/,
				cs = () => async (e, t) => {
					var n;
					(e => {
						if (!e) return !1;
						const t = new URL(e).pathname;
						return is.test(t)
					})(null === (n = t().platform) || void 0 === n ? void 0 : n.sessionReferrer) && e(Object(as.c)())
				};
			var ds = n("./src/reddit/actions/notificationsInbox/index.ts"),
				ls = n("./src/reddit/constants/countrySites.ts"),
				us = n("./src/reddit/selectors/countrySites.ts");
			const ms = ls.b ? `${ls.a}/${ls.b}` : `${ls.a}`,
				ps = (e, t) => {
					return !!Object(us.d)(e) && !(t && !Object(us.c)(t))
				},
				bs = e => e.startsWith("/r/") ? e.replace("/r/", `/${ms}/r/`) : e;
			var hs = n("./src/reddit/selectors/experiments/countrySites.ts");
			var fs = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				gs = n("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts"),
				Cs = n("./src/reddit/selectors/experiments/goodVisitSearchFeed.ts");
			Object(r.e)(r.b.EntryPointStart);
			const Os = Object(F.a)({
					actionDispatchers: {
						reddaidReceived: ie.u,
						loidReceived: ie.r,
						sessionTrackerReceived: ie.z
					},
					authHeaders: {
						[$e.a]: "desktop2x"
					},
					cookies: d.a,
					receivedActions: {
						reddaidReceived: ie.d,
						loidReceived: ie.b,
						sessionTrackerReceived: ie.k,
						userAuthenticated: se.c,
						userLoggedOut: se.d,
						userReauthenticated: se.e,
						headersReceived: W.a
					},
					onBeforeRequestFactory: En.a,
					statsAppName: S.n.Redesign
				}),
				vs = Object(D.a)(Os.apiContext),
				xs = ht();
			let ys;
			Object(N.a)({
				reducerMap: Un.a,
				routes: Gn.a,
				apiContext: Os.apiContext,
				gqlContext: vs.gqlContext,
				appFactory: (e, t) => u.a.createElement(rt.a.Provider, {
					value: xs.broadcaster
				}, u.a.createElement(ot.a.Provider, {
					value: {
						apiContext: Os.apiContext,
						gqlContext: vs.gqlContext
					}
				}, u.a.createElement(at.b, null, u.a.createElement(Ge, {
					ok: !0,
					RouterComponent: e,
					routes: t
				}), u.a.createElement(Ye, null)))),
				appName: S.n.Redesign,
				history: Object(i.a)({
					getUserConfirmation(e, t) {
						const n = ys;
						if (!n) return;
						n.dispatch(Object(ee.l)({
							allowNavigationCallback: (e = !1) => {
								t(e), n.dispatch(Object(ee.k)())
							}
						}))
					}
				}),
				customMiddleware: [E.a.withExtraArgument({
					routes: Gn.a,
					apiContext: Os.apiContext,
					gqlContext: vs.gqlContext
				}), xs.middleware, Et, Os.middleware, vs.middleware, Jt, It, Yt, hn, Vt, zt, fs.a, mt, e => t => n => {
					let s, r;
					if (!Object(hs.a)(e.getState()) || !n.payload) return t(n);
					r = (null == (s = e.getState().platform.currentPage) ? void 0 : s.urlParams.subredditName) || "";
					const o = {
						...n.payload
					};
					try {
						void 0 !== n.payload.posts && (n.payload.posts = ((e, t, n) => {
							if (!ps(e, n)) return t;
							for (const [s, r] of Object.entries(t)) {
								const e = r.belongsTo.id,
									t = Object(us.c)(e);
								(n || t) && (r.permalink = r.permalink.replace("https://www.reddit.com/r/", `https://www.reddit.com/${ms}/r/`))
							}
							return t
						})(e.getState(), n.payload.posts, r)), void 0 !== n.payload.comments && (n.payload.comments = ((e, t, n) => {
							if (!ps(e, n)) return t;
							for (const [s, r] of Object.entries(t)) {
								const e = r.subredditId,
									t = Object(us.c)(e);
								(n || t) && (r.permalink = bs(r.permalink))
							}
							return t
						})(e.getState(), n.payload.comments, r))
					} catch (a) {
						n.payload = {
							...o
						}
					}
					return t(n)
				}, e => t => n => {
					if (!Object(hs.a)(e.getState()) || !n.payload) return t(n);
					const s = {
						...n.payload
					};
					try {
						n.type === b.e ? n.payload = ((e, t) => {
							if (!ps(e, t.name)) return t;
							const n = Object(us.c)(t.id);
							if (t.name || n) {
								const e = bs(t.url);
								return {
									...t,
									url: e
								}
							}
							return t
						})(e.getState(), n.payload) : void 0 !== n.payload.subreddits && (n.payload.subreddits = ((e, t) => {
							if (!ps(e, "")) return t;
							for (const [n, s] of Object.entries(t)) {
								const e = Object(us.c)(s.id),
									r = Object(us.c)(s.name);
								if (e || r) {
									const e = bs(s.url),
										r = {
											...s,
											url: e
										};
									t[n] = r
								}
							}
							return t
						})(e.getState(), n.payload.subreddits))
					} catch (r) {
						n.payload = {
							...s
						}
					}
					return t(n)
				}],
				modifyInitialData: ({
					initialData: e,
					browserHistory: t
				}) => {
					const n = e.platform.currentPage ? e.platform.currentPage.key : "";
					if (n) {
						const s = t.location.key;
						e.platform.currentPage && (e.platform.currentPage.key = s);
						for (const t of ["referrers", "metas"]) Object.keys(e.platform[t]).length && (e.platform[t] = {
							[s]: e.platform[t][n]
						})
					}
					return e
				},
				staticPages: {
					loading: u.a.createElement(Dn.a, {
						content: null,
						sidebar: null
					})
				},
				preRender: ({
					browserHistory: e,
					routes: t,
					store: n
				}) => {
					window.addEventListener("message", e => {
							const t = a.a.mediaUrl;
							e.origin.indexOf(t) < 0 || "tweet-measured" !== e.data.action || !e.data.id36 || n.dispatch(Object(J.j)({
								height: e.data.height || 0,
								isDeleted: e.data.isDeleted || !1,
								postId: `t3_${e.data.id36}`
							}))
						}), Tn(n), Object(U.d)("enabled" === Object(fn.c)(n.getState(), {
							experimentEligibilitySelector: fn.a,
							experimentName: Xe.Se,
							expEventOverride: !1
						})), Object(U.c)("enabled" === Object(fn.c)(n.getState(), {
							experimentEligibilitySelector: fn.a,
							experimentName: Xe.Ue
						})), Object(U.g)("enabled" === Object(fn.c)(n.getState(), {
							experimentEligibilitySelector: fn.a,
							experimentName: Xe.Te
						})), Object(U.f)(vs.gqlContext), window.addEventListener("beforeunload", () => {
							const e = n.getState(),
								t = Object(On.a)("tab_closed")(e),
								s = G.g(t),
								r = Object(Jn.a)(s),
								o = Object(Zn.b)(r);
							Object(A.b)("sendV2EventsData", {
								data: r,
								headers: o
							})
						}),
						function(e) {
							const t = String(e.split("/")[1]).toLowerCase();
							return "framedgild" === t || "framedmodal" === t
						}(e.location.pathname) || n.dispatch(Object(ee.h)());
					const s = Object(C.W)(n.getState());
					n.dispatch(Object(oe.c)({
						nightmode: s
					}));
					const r = (e => e.tracing.traceId)(n.getState());
					if (r && (e => Object(fn.c)(e, {
							experimentEligibilitySelector: fn.a,
							experimentName: Xe.I
						}) === Xe.R.Enabled)(n.getState())) {
						Zt.b.enableTracing(!0);
						const e = Zt.b.createTraceFromId(r);
						Zt.b.setParent(e)
					}
					n.dispatch(Object(ee.i)(t));
					e.listen((e, s) => {
						const r = Object(M.a)(Object(i.e)(e), t, n.getState());
						n.dispatch(Object(ee.j)(e, s, r))
					});
					const o = n.getState(),
						{
							currentPage: c
						} = o.platform;
					if (c) {
						const e = [nt.h];
						if (Object(Ft.j)(o) && e.push(nt.e), e.length > 0) {
							const t = Object(P.a)(c.url, e);
							t !== c.url && n.dispatch(Object(m.c)(t))
						}
					}
					return gn.a.initialize(), {
						localStorageData: Object(Ke.C)()
					}
				},
				postRender: ({
					browserHistory: e,
					routes: t,
					serverDocumentLength: i,
					store: c,
					localStorageData: d
				}) => {
					var l, u;
					ys = c;
					e.listen((e, t) => {
						const n = c.getState(),
							{
								urlParams: s,
								queryParams: r
							} = n.platform.currentPage,
							o = {
								action: t,
								location: e,
								urlParams: s,
								queryParams: r
							},
							a = s.subredditName,
							i = Object(pn.C)(n, a) || "";
						if (Fn(i, {
								country: n.meta.country
							}), i) {
							c.dispatch(O(i, a));
							const e = Object(Ft.e)(n);
							e && c.dispatch(v(e))
						}
						Qn.a.publish(tt.c, o, document)
					});
					const m = c.getState(),
						p = Object(fs.b)();
					c.dispatch((e => async t => {
						const n = {},
							s = new Set;
						e.forEach(e => {
							s.add(e.id), n[e.id] || (n[e.id] = e)
						}), t(x(n)), t(y(Array.from(s)))
					})(p));
					const b = (m.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
						h = Object(pn.C)(m, b) || "";
					if (b) {
						c.dispatch(O(h, b));
						const e = Object(Ft.e)(m);
						e && c.dispatch(v(e))
					}
					const f = Object(pn.C)(m, b) || "",
						g = (m.subreddits.about[f] || {}).advertiserCategory;
					o.setup({
						jailUrl: "https://www.redditmedia.com/gtm/jail",
						containerId: a.a.gtmContainerId,
						payload: {
							user: m.user.account ? m.user.account.id : m.user.loid.loid
						}
					}), o.trigger("pageview", {
						subreddit: b,
						advertiserCategory: g
					}), c.dispatch(os({
						localStorageData: d
					})), Object(Hn.f)(m) && Object(Q.d)(m), c.dispatch(Object(Q.c)()), Object(zn.b)(m) && (c.dispatch($()), history.replaceState(history.state, "", Object(P.a)(window.location.href, [nt.v]))), c.dispatch(cs()), window.addEventListener("load", () => {
						const t = c.getState(),
							{
								currentPage: o
							} = t.platform,
							a = (o.urlParams.subredditName || "").toLowerCase(),
							d = Object(pn.C)(t, a) || "";
						if (Object(A.a)(), Fn(d, {
								country: t.meta.country
							}), o && o.meta) {
							const a = o.meta.name;
							if (Object(B.b)(S.n.Redesign, {
									page: a,
									type: "rum"
								}), Object(w.c)(t.meta.userAgent) && window.innerWidth > st.b) {
								const e = Object(r.f)(i);
								T.a && T.a.timing && Zt.b.isEnabled && (Zt.b.recordPerformanceTimings(`${a}_time_to_first_byte`, T.a.timing.fetchStart, T.a.timing.responseStart), Zt.b.recordPerformanceTimings(`${a}_time_to_interactive`, T.a.timing.fetchStart, T.a.timing.domInteractive));
								const n = [],
									s = !0;
								if (Object(Ft.g)(t)) {
									const e = Object(Cn.a)(t);
									n.push(Object(Cn.c)(e))
								}
								const o = {
									isLoggedIn: Object(C.J)(t),
									name: a,
									statsdPathsForExperiments: n
								};
								Object(r.g)(o, e, s)
							}
							const d = T.a.timing.domInteractive - T.a.timing.navigationStart;
							Object(mn.k)(o.routeMatch, c.getState(), H.TimerType.Initial, d, o.urlParams);
							const l = Object(k.a)(window.location.href);
							l && l.get(nt.a) && history.replaceState(history.state, "", Object(P.a)(window.location.href, [nt.a])), Object(L.a)(l.get(nt.C)) && c.dispatch(Object(ae.f)({
								kind: Bn.b.SuccessCommunity,
								text: s.fbt._("Email verification complete", null, {
									hk: "bqMP6"
								})
							})), l.get(nt.D) && (c.dispatch(Object(z.a)(l.get(nt.D))), history.replaceState(history.state, "", Object(P.a)(window.location.href, [nt.D])));
							let u = !1;
							const m = Object(C.M)(t);
							if ((Object(dn.b)(et.b.JustLoggedIn) || m) && (c.dispatch(Object(ae.f)({
									text: s.fbt._("Successfully logged in!", null, {
										hk: "2POUVB"
									})
								})), u = !0, Object(dn.c)(et.b.JustLoggedIn), history.replaceState(history.state, "", Object(P.a)(window.location.href, [nt.p]))), Object(dn.b)(et.b.JustLoggedOut) && (u = !0, Object(dn.c)(et.b.JustLoggedOut)), Y().then(({
									subscribeToPermissionsChange: e
								}) => c.dispatch(e())), !1 !== Ke.T()) {
								let n;
								Object(Hn.a)(t) && (n = () => {
									const {
										dispatch: t
									} = c;
									e.listen(() => t(Object(Q.b)())), t(Object(Q.b)())
								}), Y().then(e => e.requestNotificationsPermissions).then(e => c.dispatch(e(u, !1, n)))
							}
							if (a === S.Mb.MULTIREDDIT && o.routeMatch) {
								const {
									multiredditName: e,
									username: t
								} = o.routeMatch.match.params;
								c.dispatch(Object(I.a)(() => Promise.all([n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.recommendationsRequested))({
									multiredditName: e,
									username: t
								}))
							}
							c.dispatch(Object(K.c)())
						}
						Object(C.J)(c.getState()) && c.dispatch(Object(q.e)()), Object(j.requestIdleCallback)(async () => {
							c.dispatch(Object(X.d)()), await Object(_.a)() && Object(On.b)(c.getState());
							const t = async () => {
								const e = c.getState(),
									t = Vn(e);
								t && (await (async e => {
									return (await Object(Z.a)(() => n.e("UserZoomIntegration").then(n.bind(null, "./src/reddit/helpers/userzoom/index.ts")))).embedFrame(e)
								})(t), s && s())
							}, s = e.listen((e, n) => {
								"POP" !== n && t()
							});
							t()
						}), document.addEventListener("visibilitychange", () => {
							var e;
							const t = c.getState(),
								{
									currentPage: n
								} = t.platform;
							if ("visible" !== document.visibilityState && (Ke.Pb(Date.now()), Object(B.a)(Object(On.a)("tab_backgrounded")(t))), (e => Object(fn.c)(e, {
									experimentEligibilitySelector: e => !Object(Kn.d)(e),
									experimentName: Xe.Pb
								}) === Xe.cc.Enabled)(t) && "visible" === document.visibilityState && n && Object(mn.k)(n.routeMatch, c.getState(), H.TimerType.Revisit, 0, n.urlParams, !0), "visible" === document.visibilityState) {
								const e = Ke.w(),
									t = Ke.x(),
									n = Ke.G(),
									s = Ke.P();
								if (s && e && n) {
									const r = Date.now() - s;
									Object(B.a)(Object(On.e)("tab_backgrounded", n)(c.getState(), r, e, t))
								}(s || e || n || t) && (Ke.ab(), Ke.eb(), Ke.cb(), Ke.bb())
							}
							Object(Cs.a)(c.getState()) && (null === (e = null == n ? void 0 : n.locationState) || void 0 === e ? void 0 : e.clickId) && gs.d[n.locationState.clickId] && !gs.d[n.locationState.clickId].completed && ("visible" !== document.visibilityState ? Object(gs.b)(n.locationState.clickId) : Object(gs.c)(n.locationState.clickId))
						}), Object(Kn.g)(c.getState()) && yn(c.getState), c.dispatch(Object(re.l)())
					}), window.history.scrollRestoration = "manual", Qn.a.attachStore(c), c.dispatch(Object(ne.b)(R.a.PageLoad));
					const E = Ke.p(null === (l = c.getState().user.account) || void 0 === l ? void 0 : l.id),
						N = Ke.o(null === (u = c.getState().user.account) || void 0 === u ? void 0 : u.id);
					c.dispatch(Object(te.C)({
						posts: null != E ? E : []
					})), c.dispatch(Object(V.k)({
						comments: null != N ? N : []
					})), Object(Rt.f)(c.getState()) && c.dispatch(Object(ds.e)())
				},
				raven: {
					tags: {
						project: S.n.Redesign
					}
				},
				ssr: !0,
				target: document.getElementById("2x-container"),
				timingsSampleRate: 1
			})
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.m.less": function(e, t, n) {
			e.exports = {
				backgroundContainer: "_2wxsLGNmMLx6sEMLJyn2o9"
			}
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/layout/page/Listing/BackgroundContainer.m.less"),
				l = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(a.a)(e => {
				const {
					backgroundColor: t,
					className: n,
					redditStyle: s,
					theme: a,
					...d
				} = e, m = Object(c.a)(e), p = {
					"--pseudo-before-background": t || Object(i.g)(m.canvas, m.canvasImgUrl, m.canvasImgPosition)
				};
				return r.a.createElement("div", u({
					className: Object(o.a)(l.a.backgroundContainer, n),
					style: p
				}, d))
			})
		},
		"./src/reddit/layout/page/Listing/Content.m.less": function(e, t, n) {
			e.exports = {
				styledContent: "_1OVBBWLtHoSPfGCRaPzpTf",
				mCanFlexFullWidth: "PaJBYLqPf_Gie2aZntVQ7",
				mLargePostLayout: "_3nSp9cdBpqL13CqjdMr2L_",
				mDisableFullScreen: "_2udhMC-jldHp_EpAuBeSR1",
				mClassicWidth: "_1Tc65kRFm7a8piCXHVL4L4",
				mIsEditing: "_25-JsrYQ-pXWBM8eqpxeN7",
				onlyChildMargin: "_2OVNlZuUd8L9v0yVECZ2iA"
			}
		},
		"./src/reddit/layout/page/Listing/Content.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/structuredStyles.ts"),
				u = n("./src/reddit/layout/page/Listing/Content.m.less"),
				m = n.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = Object(d.u)(),
				h = Object(a.c)({
					isEditing: l.i,
					layout: (e, t) => t.forcedLayout || Object(d.R)(e, t)
				}),
				f = Object(o.b)(h);
			t.a = b(f(({
				className: e,
				hideOnlyChildMargin: t,
				disableFullscreen: n,
				dispatch: s,
				fitPageToContent: o,
				forcedLayout: a,
				isCollectionLayout: l,
				isEditing: u,
				layout: b,
				pageLayer: h,
				...f
			}) => r.a.createElement("div", p({
				className: Object(i.a)(e, m.a.styledContent, {
					[m.a.mLargePostLayout]: b === c.g.Large || Object(d.O)(h),
					[m.a.mDisableFullScreen]: n && !l,
					[m.a.mClassicWidth]: l,
					[m.a.mIsEditing]: !!u,
					[m.a.mCanFlexFullWidth]: !o,
					[m.a.onlyChildMargin]: !t
				})
			}, f))))
		},
		"./src/reddit/layout/page/Listing/index.m.less": function(e, t, n) {
			e.exports = {
				body: "_31N0dvxfpsO6Ur5AKx4O5d",
				sidebar: "_3Kd8DQpBIbsr5E1JcrMFTY",
				defaultLayout: "_1tvThPWQpORoc2taKebHxs",
				"m-collectionLayout": "K1OCXipJxqOt01sOdQXEx",
				mCollectionLayout: "K1OCXipJxqOt01sOdQXEx",
				outerContainer: "qYj03fU5CXf5t2Fc5iSvg",
				outerContainerExp: "_35NDNOyTzBcywfeEavUt6p",
				innerContainer: "_3ozFtOe6WpJEMUtxDOIvtU",
				bannerNavContainer: "q4a8asWOWdfdniAbgNhMh"
			}
		},
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				a = n("./src/reddit/layout/page/Listing/Content.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/componentSizes.ts"),
				d = n("./src/reddit/constants/elementClassNames.ts"),
				l = n("./src/reddit/constants/screenWidths.ts"),
				u = n("./src/reddit/contexts/NavbarExp.ts"),
				m = n("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				p = n("./src/reddit/layout/page/Listing/index.m.less"),
				b = n.n(p);
			t.a = e => {
				const {
					backgroundColor: t,
					className: n,
					containerRef: p,
					content: h,
					contentBanner: f,
					contentClassName: g,
					contentNavBar: C,
					disableFullscreen: O,
					fitPageToContent: v,
					forcedLayout: x,
					hideOnlyChildMargin: y,
					isCollectionLayout: E,
					isPageSwapped: j,
					maxWidth: _,
					navBar: S,
					redditStyle: k,
					sidebar: P,
					sidebars: w,
					trendingUnit: N,
					subredditId: I
				} = e, M = N ? "28px" : "0", T = j ? {
					marginRight: `${c.q}px`,
					marginTop: M
				} : {
					marginLeft: `${c.q}px`,
					marginTop: M
				}, R = P && r.a.createElement("div", {
					className: Object(i.a)(b.a.sidebar, E ? b.a["m-collectionLayout"] : b.a.defaultLayout),
					style: T
				}, P), L = r.a.createElement(a.a, {
					hideOnlyChildMargin: y,
					className: g,
					disableFullscreen: O,
					fitPageToContent: v,
					forcedLayout: x,
					isCollectionLayout: E
				}, f, h);
				let A;
				A = w ? r.a.createElement(r.a.Fragment, null, w[0], L, w[1]) : j ? r.a.createElement(r.a.Fragment, null, R, L) : r.a.createElement(r.a.Fragment, null, L, R);
				const F = O ? `${_||l.a+2*c.m}px` : "100%",
					D = Object(s.useContext)(u.a);
				return r.a.createElement(m.a, {
					subredditId: I
				}, r.a.createElement("div", {
					className: Object(i.a)(b.a.outerContainer, d.i, n, {
						[b.a.outerContainerExp]: D
					}),
					ref: p
				}, r.a.createElement(o.a, {
					className: d.h,
					redditStyle: k,
					backgroundColor: t
				}), r.a.createElement("div", {
					className: b.a.innerContainer
				}, S, C, (e => e.hero ? r.a.createElement(r.a.Fragment, null, e.hero) : null)(e), r.a.createElement("div", {
					style: {
						maxWidth: F
					}
				}, N), r.a.createElement("div", {
					className: b.a.body,
					style: {
						maxWidth: F
					}
				}, A))))
			}
		},
		"./src/reddit/layout/page/SearchResults/index.m.less": function(e, t, n) {
			e.exports = {
				bodyContainer: "eZLYleuk3b8ykGiskfpo3",
				contentContainer: "_3Up38k81YNBWQoW1ovMU88",
				content: "_2lzCpzHH0OvyFsvuESLurr",
				mainContent: "_1BJGsKulUQfhJyO19XsBph",
				withSidebar: "_3SktesklDBwXt2pEl0sHY8",
				sidebarContent: "_2iRJ8DI-3RTbsXRSDXE5ZG"
			}
		},
		"./src/reddit/layout/page/SearchResults/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				i = n("./src/reddit/constants/elementClassNames.ts"),
				c = n("./src/reddit/contexts/NavbarExp.ts"),
				d = n("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				l = n("./src/reddit/layout/page/Listing/index.m.less"),
				u = n.n(l),
				m = n("./src/reddit/layout/page/SearchResults/index.m.less"),
				p = n.n(m);
			t.a = ({
				backgroundColor: e,
				className: t,
				containerRef: n,
				content: l,
				navBar: m,
				redditStyle: b,
				sidebar: h,
				subredditId: f
			}) => {
				const g = Object(s.useContext)(c.a),
					C = Boolean(h);
				return r.a.createElement(a.a, {
					subredditId: f
				}, r.a.createElement("div", {
					className: Object(o.a)(u.a.outerContainer, i.i, t, {
						[u.a.outerContainerExp]: g
					}),
					ref: n
				}, r.a.createElement(d.a, {
					className: i.h,
					redditStyle: b,
					backgroundColor: e
				}), r.a.createElement("div", {
					className: u.a.innerContainer
				}, r.a.createElement("div", {
					className: p.a.bodyContainer
				}, r.a.createElement("div", {
					className: p.a.contentContainer
				}, r.a.createElement("div", {
					className: p.a.navContent
				}, m), r.a.createElement("div", {
					className: Object(o.a)(p.a.content, C && p.a.withSidebar)
				}, r.a.createElement("div", {
					className: Object(o.a)(p.a.mainContent, C && p.a.withSidebar)
				}, l), C && r.a.createElement("div", {
					className: p.a.sidebarContent
				}, h)))))))
			}
		},
		"./src/reddit/models/ContentGate.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.CustomFeedDoesNotExist = "CustomFeedDoesNotExist", e.GoldSubreddit = "GoldSubreddit", e.Nsfw = "Nsfw", e.NsfwCustomFeed = "NsfwCustomFeed", e.PrivateSubreddit = "PrivateSubreddit", e.ProfileDoesNotExist = "ProfileDoesNotExist", e.ProfileDeleted = "ProfileDeleted", e.ProfileSuspended = "ProfileSuspended", e.ProfileBlockedForLegalReason = "ProfileBlockedForLegalReason", e.QuarantinedSubreddit = "QuarantinedSubreddit", e.SubredditBanned = "SubredditBanned", e.SubredditBlockedForLegalReason = "SubredditBlockedForLegalReason", e.SubredditDoesNotExist = "SubredditDoesNotExist", e.PostBlockedForLegalReason = "PostBlockedForLegalReason"
				}(s || (s = {}))
		},
		"./src/reddit/models/EconManagement/index.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				return e.hasOwnProperty("source")
			}

			function r(e) {
				return "object" != typeof e[0]
			}
			var o;
			n.d(t, "c", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})), n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.Default = "default", e.Loading = "loading", e.Error = "error"
				}(o || (o = {}))
		},
		"./src/reddit/models/EmailSettings/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Success = "SUCCESS", e.AlreadyVerified = "EMAIL_ALREADY_VERIFIED", e.WrongUser = "EMAIL_VERIFY_WRONG_USER", e.Error = "EMAIL_VERIFY_ERROR"
				}(s || (s = {}))
		},
		"./src/reddit/models/NotificationInbox/index.ts": function(e, t, n) {
			"use strict";
			var s, r, o, a;
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})), n.d(t, "c", (function() {
					return o
				})),
				function(e) {
					e.AwardReceived = "AWARD_RECEIVED", e.CakeDay = "CAKE_DAY", e.ChatMessage = "CHAT_MESSAGE", e.CommentFollow = "COMMENT_FOLLOW", e.CommentReply = "COMMENT_REPLY", e.HFNSubredditInterestingPost = "SUBREDDIT_UPDATES_INTERESTING_POST", e.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", e.PostFollow = "POST_FOLLOW", e.PostReply = "POST_REPLY", e.PrivateMessage = "PRIVATE_MESSAGE", e.RedditLore = "REDDIT_LORE", e.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", e.ThreadReplies = "THREAD_REPLIES", e.TopLevelComment = "TOP_LEVEL_COMMENT", e.UpvoteComment = "UPVOTE_COMMENT", e.UpvotePost = "UPVOTE_POST", e.UsernameMention = "USERNAME_MENTION", e.UserNewFollower = "USER_NEW_FOLLOWER"
				}(s || (s = {})),
				function(e) {
					e.Award = "AWARD", e.Bell = "BELL", e.Chat = "CHAT", e.Comment = "COMMENT", e.Heart = "HEART", e.Live = "LIVE", e.Lore = "LORE", e.NotifyAll = "NOTIFY_ALL", e.Redditor = "REDDITOR", e.Reply = "REPLY", e.SortLive = "SORT_LIVE", e.SortRising = "SORT_RISING", e.SortTop = "SORT_TOP", e.Trophy = "TROPHY", e.Upvote = "UPVOTE"
				}(r || (r = {})),
				function(e) {
					e.CopyrightTakedown = "COPYRIGHT_TAKEDOWN", e.ContentTakedown = " CONTENT_TAKEDOWN", e.Author = "AUTHOR", e.Moderator = "MODERATOR", e.CommunityOps = "COMMUNITY_OPS", e.AntiEvilOps = "ANTI_EVIL_OPS", e.Reddit = "REDDIT", e.Deleted = "DELETED", e.AutomodFiltered = "AUTOMOD_FILTERED"
				}(o || (o = {})),
				function(e) {
					e.InboxNotification = "InboxNotification", e.InboxNotificationContext = "InboxNotificationContext", e.NotificationIcon = "NotificationIcon", e.AwardReceivedInboxNotificationContext = "AwardReceivedInboxNotificationContext", e.BasicInboxNotificationContext = "BasicInboxNotificationContext", e.CommentInboxNotificationContext = "CommentInboxNotificationContext", e.PostInboxNotificationContext = "PostInboxNotificationContext", e.PostSubredditInboxNotificationContext = "PostSubredditInboxNotificationContext", e.SubredditInboxNotificationContext = "SubredditInboxNotificationContext"
				}(a || (a = {}))
		},
		"./src/reddit/models/NotificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Email = "EMAIL", e.Push = "PUSH", e.CommunityAlerts = "COMMUNITY_ALERTS", e.ModCommunityAlerts = "MOD_COMMUNITY_ALERTS"
				}(s || (s = {}))
		},
		"./src/reddit/models/Sso/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Apple = "https://appleid.apple.com", e.Google = "https://accounts.google.com"
				}(s || (s = {}))
		},
		"./src/reddit/pages/InternalServerError/index.m.less": function(e, t, n) {
			e.exports = {
				dizzySnoo: "UaNg246yNIpwcq_Uhe6vC",
				container: "EXdERxzjUGqvBK511L1Eq",
				mainContent: "_3dyrEHC8cc6dIOTUPQmv1S",
				title: "_1PdcLVyQbMPVKRikIspqb_",
				subTitle: "_1YhiRkum1oGZUdm5i1mHFJ",
				image: "_1gTZDLeeF0VPQsS6Iz5boy",
				bottomImageContainer: "_3sveU8lpcXyGOpDXsXc9xg",
				imageContainer: "_2wX-WzezrtDmDaxm8BR4zz",
				topImageContainer: "_3zW_PbmBAhs9ARwV_Yl9BR",
				topImageContainerExp: "_2NU2A-ZU5J-cxP78RF0oeb"
			}
		},
		"./src/reddit/pages/NotificationsInbox/Content/EmptyState.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/actions/login.ts"),
				l = n("./src/reddit/controls/Button/index.tsx");
			var u = e => o.a.createElement("svg", {
					className: e.className,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 21"
				}, o.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M18.4 14.788c-.662 0-1.2-.537-1.2-1.202l-.012-5.998C17.188 3.625 13.963.4 10 .4 6.037.4 2.811 3.625 2.811 7.586l-.01 6.002c0 .663-.54 1.2-1.2 1.2a1.199 1.199 0 100 2.4h16.8a1.2 1.2 0 100-2.4zm-9.6 3.6H7.6c0 1.324 1.076 2.4 2.4 2.4 1.323 0 2.4-1.076 2.4-2.4H8.8zm-3.6-4.797c0 .422-.087.822-.22 1.197H15.02a3.554 3.554 0 01-.22-1.2l-.013-5.997A4.794 4.794 0 0010 2.8a4.794 4.794 0 00-4.789 4.787l-.01 6.003z"
				})),
				m = n("./src/reddit/pages/NotificationsInbox/Content/index.m.less"),
				p = n.n(m);
			const b = i.a.wrapped(u, "BellOutline", p.a),
				h = ({
					isBannerEnabled: e,
					isLoggedIn: t
				}) => {
					const n = Object(c.d)();
					return o.a.createElement("div", {
						className: Object(a.a)(p.a.emptyState, {
							[p.a.emptyStateWithBanner]: Boolean(e),
							[p.a.loggedOutState]: !t
						})
					}, o.a.createElement(b, null), o.a.createElement("h1", {
						className: p.a.emptyTitle
					}, s.fbt._("Be the first to know", null, {
						hk: "2mNJO0"
					})), o.a.createElement("p", {
						className: p.a.emptyDescription
					}, s.fbt._("This is where you get updates on your activity and recommendations", null, {
						hk: "27V2PG"
					})), !t && o.a.createElement("div", {
						className: p.a.emptyStateLoggedOutContainer
					}, o.a.createElement(l.j, {
						onClick: () => n(Object(d.i)())
					}, s.fbt._("Log In", null, {
						hk: "ZR3pC"
					})), o.a.createElement("span", {
						className: p.a.emptyStateDivider
					}), o.a.createElement(l.j, {
						onClick: () => n(Object(d.j)())
					}, s.fbt._("Sign Up", null, {
						hk: "3Jd0SI"
					}))))
				}
		},
		"./src/reddit/pages/NotificationsInbox/Content/index.m.less": function(e, t, n) {
			e.exports = {
				notificationsBannersContainer: "_30M-VGAobP1YuoM04brOVT",
				notificationsContainer: "_1B9l9ftY8mkrILj7ISvc9_",
				NotificationUnit: "_1xxYCr84JqFV0qli3rFj6Y",
				notificationUnit: "_1xxYCr84JqFV0qli3rFj6Y",
				emptyState: "_1q1-Ijtc4SLFaVvDcMzus8",
				emptyStateLoggedOutContainer: "_3RdkUuOKNnzN1UCWQNo6gI",
				emptyStateDivider: "-CQMcpUJHUU0cafBbsr__",
				loggedOutState: "_3DbA2SOgvxHXDiHhZbGEVw",
				emptyStateWithBanner: "_3cq_2lLFVJmAq-zXfEMOMD",
				emptyTitle: "qVJaimYNUSSDa5PIOSZoi",
				emptyDescription: "ytrwXC5fcR-1vocS1eSbT",
				BellOutline: "_3xFZexoKoKqw8cjNoivDDZ",
				bellOutline: "_3xFZexoKoKqw8cjNoivDDZ",
				Divider: "_2ACXQJ7zvrPMS_i8J15E_s",
				divider: "_2ACXQJ7zvrPMS_i8J15E_s"
			}
		},
		"./src/reddit/pages/SearchResults/index.m.less": function(e, t, n) {
			e.exports = {
				sidebar: "_35ky2Wm3TP6kFdIh-DOxmA",
				announcement: "_38miRaQjZDUy2B55AHWYlg",
				searchSwitcherContainer: "_79QamRjUfUQIFHxCnTvSZ"
			}
		},
		"./src/reddit/pages/SearchResults/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "getSearchKey", (function() {
				return q
			})), n.d(t, "default", (function() {
				return V
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/lodash/pick.js"),
				o = n.n(r),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/hooks/usePrevious.ts"),
				u = n("./src/lib/makeSearchKey/index.ts"),
				m = n("./src/reddit/actions/correlationId/index.tsx"),
				p = n("./src/reddit/actions/survey/index.ts"),
				b = n("./src/reddit/components/JumpToContent/index.tsx"),
				h = n("./src/reddit/components/SearchResultsContent/index.tsx"),
				f = n("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/selectors.ts"),
				g = n("./src/reddit/components/SearchResultsNav/index.tsx"),
				C = n("./src/reddit/components/SearchResultsSidebar/index.tsx"),
				O = n("./src/reddit/components/SearchSwitcher/index.tsx"),
				v = n("./src/reddit/constants/covid.ts"),
				x = n("./src/reddit/constants/page.ts"),
				y = n("./src/reddit/constants/parameters.ts"),
				E = n("./src/reddit/contexts/PageLayer/index.tsx"),
				j = n("./src/reddit/helpers/correlationIdTracker.ts"),
				_ = n("./src/reddit/helpers/search/searchTabType.ts"),
				S = n("./src/reddit/helpers/search/switchSearchScope.ts"),
				k = n("./src/reddit/helpers/trackers/searchResults.ts"),
				P = n("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				w = n("./src/reddit/hooks/useTheme.ts"),
				N = n("./src/reddit/layout/page/SearchResults/index.tsx"),
				I = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				M = n("./src/reddit/selectors/correlationId.ts"),
				T = n("./src/reddit/selectors/searchFix.ts"),
				R = n("./src/reddit/selectors/subreddit.ts"),
				L = n("./src/reddit/components/SearchResultsSubNav/index.tsx"),
				A = n("./src/reddit/components/TrackingHelper/index.tsx"),
				F = n("./src/reddit/pages/SearchResults/index.m.less"),
				D = n.n(F);

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const U = 3e3,
				G = Object(s.a)({
					resolved: {},
					chunkName: () => "FeaturedLiveEntrypointLegacyAnnouncement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("FeaturedLiveEntrypointLegacyAnnouncement").then(n.bind(null, "./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.tsx"
					}
				}),
				H = {
					[x.h.Listings]: {
						tab: x.h.Listings,
						sidebar: !1,
						filterNav: !1
					},
					[x.h.Authors]: {
						tab: x.h.Authors,
						sidebar: !1,
						filterNav: !1
					},
					[x.h.Posts]: {
						tab: x.h.Posts,
						sidebar: !0,
						filterNav: !0
					}
				},
				W = () => {
					const e = Object(c.d)(),
						t = Object(c.e)(e => Object(M.a)(e, j.a.SearchResults));
					Object(a.useEffect)(() => {
						t ? (Object(j.d)(j.a.SearchResults, t), e(Object(m.d)({
							key: j.a.SearchResults
						}))) : Object(j.c)(j.a.SearchResults) || Object(j.e)(j.a.SearchResults)
					}, [])
				},
				q = (e, t) => {
					const n = e.params.multiredditName,
						s = e.params.subredditName || n || "",
						r = e.params.username,
						a = Object(u.e)(o()(t || {}, y.u));
					return Object(u.b)(s, r, a)
				};

			function V({
				location: e,
				match: t
			}) {
				const n = Object(c.d)(),
					s = Object(E.fb)(),
					r = Object(A.b)(),
					m = Object(w.a)(),
					M = Object(a.useRef)(!1),
					F = Object(c.e)(e => Object(R.w)(e, {
						subredditName: t.params.subredditName
					})),
					q = Object(c.e)(e => Object(f.a)(e, {
						pageLayer: s
					})),
					V = Object(c.e)(e => Object(T.c)(e, {
						pageLayer: s
					})),
					K = Object(E.W)(s),
					z = Object(E.cb)(s),
					[Q, J] = Object(a.useState)(!1),
					Z = Object(l.a)(K) || null;
				W(), Object(P.b)(), Object(a.useEffect)(() => {
					let e = 0;
					return e = window.setTimeout(() => n(Object(p.h)()), U), () => {
						Object(j.b)(j.a.SearchResults), window.clearTimeout(e)
					}
				}, []), Object(a.useEffect)(() => {
					K !== Z && (M.current = !1, J(!1)), K && Z && K[y.q] !== Z[y.q] && (Object(j.b)(j.a.SearchResults), Object(j.e)(j.a.SearchResults))
				}, [K, Z]);
				const Y = t.params.multiredditName,
					X = t.params.subredditName || Y || "",
					$ = t.params.username,
					ee = Object(u.e)(o()(K || {}, y.u)),
					te = F && ee.restrict_sr,
					ne = Object(_.a)(ee.type, te),
					se = Object(u.b)(X, $, ee),
					re = {
						...ee,
						type: [d.ac.Posts, d.ac.Subreddits, d.ac.Users]
					},
					oe = Object(u.b)(X, $, re),
					ae = {
						redesign: !0,
						searchOptions: ee
					};
				let ie;
				Object(E.P)(s) || Object(E.C)(s) ? ie = i.a.createElement(O.a, B({}, ae, {
					url: Object(S.a)(K)
				})) : q && V && (ie = i.a.createElement(O.a, B({}, ae, {
					subreddit: q,
					url: Object(S.a)(K, q.name)
				})));
				const ce = H[ne].tab,
					de = H[ne].sidebar && !Y,
					le = H[ne].filterNav,
					ue = Object(I.a)({
						redditStyle: !0,
						theme: m
					});
				return i.a.createElement(N.a, {
					backgroundColor: ue.canvas,
					content: i.a.createElement(i.a.Fragment, null, i.a.createElement(b.a, null), z && !Q && (() => {
						const e = e => r(Object(k.b)(e, Object(u.e)(o()(K || {}, y.u))));
						return M.current || (e("view"), M.current = !0), i.a.createElement(G, {
							announcement: v.a,
							className: D.a.announcement,
							onBtnClick: () => e("click"),
							onClose: () => {
								e("dismiss"), J(!0)
							}
						})
					})(), i.a.createElement(h.a, {
						listingKey: se,
						listingName: X,
						location: e,
						searchOptions: ee,
						tab: ce
					})),
					navBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(g.a, {
						activeTab: ce,
						location: e,
						searchOptions: ee,
						searchSwitcher: ie
					}), le && i.a.createElement(L.a, {
						key: "subNav",
						searchOptions: ee,
						shouldHideGlobalSearchLink: !0,
						subredditName: X,
						tab: ce
					}), ie && i.a.createElement("div", {
						className: D.a.searchSwitcherContainer
					}, ie)),
					sidebar: de && i.a.createElement(C.a, {
						className: D.a.sidebar,
						listingKey: oe,
						listingName: X || x.c,
						location: e,
						searchOptions: re,
						tab: ce
					})
				})
			}
		},
		"./src/reddit/routes/acknowledgements/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/page.ts");
			const a = "/acknowledgements",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "Acknowledgements",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Acknowledgements").then(n.bind(null, "./src/reddit/pages/Acknowledgements/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Acknowledgements/index.tsx"
					}
				}),
				c = {
					action: o.a,
					chunk: r.s.ACKNOWLEDGEMENTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Mb.ACKNOWLEDGEMENTS
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/appeal/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/page.ts");
			const a = ["/appeal", "/appeals"],
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "Appeal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Appeal").then(n.bind(null, "./src/reddit/pages/AppealPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/AppealPage/index.tsx"
					}
				}),
				c = {
					action: o.a,
					chunk: r.s.APPEAL,
					component: i,
					exact: !0,
					meta: {
						name: r.Mb.APPEAL
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/avatar/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/avatar.ts");
			const a = "/avatar",
				i = [a, `${a}/:username`, `${a}/:username/:avatarId`],
				c = {
					action: o.a,
					chunk: r.s.AVATAR,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Avatar",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("Avatar").then(n.bind(null, "./src/reddit/pages/Avatar/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Avatar/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Mb.AVATAR
					},
					path: i
				};
			t.b = c
		},
		"./src/reddit/routes/coins/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/page.ts");
			const a = "/coins",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "Coins",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Coins").then(n.bind(null, "./src/reddit/pages/CoinsPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/CoinsPage/index.tsx"
					}
				}),
				c = {
					action: o.c,
					chunk: r.s.COINS,
					component: i,
					exact: !0,
					meta: {
						name: r.Mb.COINS
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/coinsMobile/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/page.ts");
			const a = "/coins/mobile",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "CoinsMobile",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CoinsMobile").then(n.bind(null, "./src/reddit/pages/CoinsMobilePage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/CoinsMobilePage/index.tsx"
					}
				}),
				c = {
					action: o.b,
					chunk: r.s.COINS_MOBILE,
					component: i,
					exact: !0,
					meta: {
						name: r.Mb.COINS_MOBILE
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/collectionCommentsPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/countrySites/index.ts"),
				a = n("./src/lib/loadableAction/index.ts"),
				i = n("./src/reddit/featureFlags/profileCollections.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "CollectionCommentsPage",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage~CommentsPage~StandalonePostPage"), n.e("CommentsPage"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/pages/CollectionCommentsPage/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/pages/CollectionCommentsPage/index.tsx"
				}
			});
			let d = ["/:routePrefix(r)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(r)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(r)/:subredditName/collection/:collectionId"];
			d = Object(o.b)(d);
			const l = ["/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(user)/:subredditName/collection/:collectionId"],
				u = {
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage~CommentsPage~StandalonePostPage"), n.e("CommentsPage"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/actions/pages/collectionCommentsPage.ts")).then(e => e.collectionCommentsPageRequested)),
					chunk: r.s.COLLECTION_COMMENTS_PAGE,
					component: c,
					exact: !0,
					meta: {
						name: r.Mb.COLLECTION_COMMENTS
					},
					prefetches: [r.s.FRONTPAGE, r.s.COMMENTS_PAGE, r.s.SUBREDDIT]
				},
				m = {
					...u,
					path: d
				},
				p = {
					...u,
					path: l,
					routePredicate: i.a
				},
				b = [m, p];
			t.a = b
		},
		"./src/reddit/routes/commentsPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/countrySites/index.ts"),
				a = n("./src/lib/loadableAction/index.ts");
			const i = Object(s.a)({
				resolved: {},
				chunkName: () => "CommentsPage",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage~CommentsPage~StandalonePostPage"), n.e("CommentsPage")]).then(n.bind(null, "./src/reddit/pages/CommentsPage/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/pages/CommentsPage/index.tsx"
				}
			});
			let c = ["/:routePrefix(r)/:subredditName/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/:routePrefix(r)/:subredditName/comments/:partialPostId/:urlSafePostTitle?", "/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/comments/:partialPostId/:urlSafePostTitle?"];
			c = Object(o.b)(c);
			const d = ["/:routePrefix(r)/:subredditName/duplicates/:partialPostId/:urlSafePostTitle?", "/:routePrefix(user)/:subredditName/duplicates/:partialPostId/:urlSafePostTitle?", "/duplicates/:partialPostId/:urlSafePostTitle?"],
				l = ["/:routePrefix(user)/:subredditName/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/:routePrefix(user)/:subredditName/comments/:partialPostId/:urlSafePostTitle?"],
				u = (e, t) => ({
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage~CommentsPage~StandalonePostPage"), n.e("CommentsPage")]).then(n.bind(null, "./src/reddit/actions/pages/comments.ts")).then(e => e.commentsPageRequested)),
					chunk: r.s.COMMENTS_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: e
					},
					path: t,
					prefetches: [r.s.FRONTPAGE, r.s.SUBREDDIT]
				}),
				m = [u(r.Mb.COMMENTS, c), u(r.Mb.DUPLICATES, d), u(r.Mb.COMMENTS, l)];
			t.a = m
		},
		"./src/reddit/routes/countrySitePage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/countrySites/index.ts"),
				a = n("./src/lib/loadableAction/index.ts");
			const i = Object(s.a)({
					resolved: {},
					chunkName: () => "CountryPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("CountryPage")]).then(n.bind(null, "./src/reddit/pages/CountrySitePage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/CountrySitePage/index.tsx"
					}
				}),
				c = ["/"],
				d = {
					action: Object(a.a)(() => Promise.all([n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("CountryPage")]).then(n.bind(null, "./src/reddit/actions/pages/countrySite/index.ts")).then(e => e.countrySiteHomePageRequested)),
					chunk: r.s.COUNTRY_SITE_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: r.Mb.COUNTRY_SITE_PAGE
					},
					path: Object(o.b)(c, !1),
					prefetches: [r.s.SUBREDDIT]
				};
			t.a = d
		},
		"./src/reddit/routes/econManagement/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/econManagement.ts");
			const a = "/econ-management",
				i = "q",
				c = {
					action: o.a,
					chunk: r.s.ECON_MANAGEMENT,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "EconManagement",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("EconManagement").then(n.bind(null, "./src/reddit/pages/EconManagement/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/EconManagement/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Mb.ECON_MANAGEMENT
					},
					path: a
				};
			t.c = c
		},
		"./src/reddit/routes/followers/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/followers",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileFollowersPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("ProfileFollowersPage").then(n.bind(null, "./src/reddit/pages/Followers/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Followers/index.tsx"
					}
				}),
				c = {
					action: Object(o.a)(() => n.e("ProfileFollowersAction").then(n.bind(null, "./src/reddit/actions/pages/followers/index.ts")).then(e => e.followersPageRequested)),
					chunk: r.s.PROFILE_FOLLOWERS,
					component: i,
					exact: !0,
					meta: {
						name: r.Mb.FOLLOWERS
					},
					path: a,
					prefetches: [r.s.PROFILE_OVERVIEW]
				};
			t.a = c
		},
		"./src/reddit/routes/framedGild/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/framedGild/index.ts");
			const a = "/framedGild/:thingId",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "FramedGild",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("FramedGild~GildModal"), n.e("FramedGild")]).then(n.bind(null, "./src/reddit/pages/FramedGildPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/FramedGildPage/index.tsx"
					}
				}),
				c = {
					action: o.a,
					chunk: r.s.FRAMED_GILD,
					component: i,
					exact: !0,
					meta: {
						name: r.Mb.FRAMED_GILD
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/framedModal/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/framedModal/index.ts");
			const a = "/framedModal/:type",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "FramedModal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("FramedModal").then(n.bind(null, "./src/reddit/pages/FramedModalPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/FramedModalPage/index.tsx"
					}
				}),
				c = {
					action: o.a,
					chunk: r.s.FRAMED_MODAL,
					component: i,
					exact: !0,
					meta: {
						name: r.Mb.FRAMED_MODAL
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/frontpage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts"),
				c = n("./src/reddit/selectors/user.ts");
			const d = Object.keys(a.W).map(e => a.W[e]).join("|"),
				l = "/",
				u = `/:sort(${d})?`,
				m = Object(o.a)({
					resolved: {},
					chunkName: () => "Frontpage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Frontpage").then(n.bind(null, "./src/reddit/pages/Frontpage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Frontpage/index.tsx"
					}
				}),
				p = {
					action: Object(i.a)(() => n.e("Frontpage").then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageRequested)),
					chunk: a.s.FRONTPAGE,
					component: m,
					exact: !0,
					prefetches: [a.s.COMMENTS_PAGE, a.s.SUBREDDIT]
				},
				b = {
					...p,
					path: l,
					meta: {
						name: a.Mb.INDEX
					},
					routePredicate: c.J
				},
				h = {
					...p,
					path: l,
					meta: {
						name: a.Mb.INDEX,
						telemetryPageType: "popular"
					},
					routePredicate: e => !Object(c.J)(e)
				},
				f = {
					...p,
					path: u,
					meta: {
						name: a.Mb.LISTING
					},
					routePredicate: c.J
				},
				g = {
					...p,
					path: u,
					meta: {
						name: a.Mb.LISTING,
						telemetryPageType: "popular"
					},
					routePredicate: e => !Object(c.J)(e)
				},
				C = [b, h, f, g];
			t.a = C
		},
		"./src/reddit/routes/geotagging/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/topic.ts"),
				a = n("./src/reddit/selectors/topic.ts");
			const i = "/label/subreddits",
				c = Object(s.a)({
					resolved: {},
					chunkName: () => "Geotagging",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Geotagging").then(n.bind(null, "./src/reddit/pages/Geotagging/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Geotagging/index.tsx"
					}
				}),
				d = {
					action: e => async (e, t, {
						gqlContext: n
					}) => {
						{
							const e = t();
							if (Object(a.c)(e, {
									topicSlug: "coronavirus"
								})) return
						}
						let s;
						try {
							s = await Object(o.fetchTopicPage)(n(), "coronavirus", {
								includeIdentity: !0,
								includePosts: !1,
								includeRelationships: !1
							})
						} catch {
							return void e(Object(o.topicFailed)())
						}
						if (!s) return;
						const r = t();
						e(Object(o.topicLoaded)({
							...s,
							key: "tagging",
							meta: r.meta
						}))
					},
					chunk: r.s.GEOTAGGING,
					component: c,
					exact: !0,
					meta: {
						name: r.Mb.GEOTAGGING
					},
					path: i,
					prefetches: []
				};
			t.a = d
		},
		"./src/reddit/routes/inbox/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/actions/page.ts");
			const c = Object(o.a)({
					resolved: {},
					chunkName: () => "InboxPages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("InboxPages").then(n.bind(null, "./src/reddit/pages/RedditEmbed/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/RedditEmbed/index.tsx"
					}
				}),
				d = Object.keys(a.S).map(e => a.S[e]).join("|"),
				l = [`/message/:pageName(${d})`, "/message/messages/:messageId([A-Za-z0-9]+)"],
				u = {
					action: i.d,
					chunk: a.s.INBOX_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: a.Mb.INBOX_PAGES
					},
					path: l
				};
			t.a = u
		},
		"./src/reddit/routes/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/routes/collectionCommentsPage/index.ts"),
				r = n("./src/reddit/routes/acknowledgements/index.ts"),
				o = n("./src/reddit/routes/appeal/index.ts"),
				a = n("./src/reddit/routes/avatar/index.ts"),
				i = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./src/lib/constants/index.ts");
			var d = {
					action: () => async e => await e(Object(i.c)(a.a)),
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Mb.AVATAR_PROFILE
					},
					path: ["/user/me/avatar", "/u/me/avatar", "/user/:profileName/avatar"]
				},
				l = n("./src/reddit/routes/coins/index.ts"),
				u = n("./src/reddit/routes/coinsMobile/index.ts"),
				m = n("./src/reddit/routes/commentsPage/index.ts"),
				p = n("./src/reddit/routes/countrySitePage/index.ts"),
				b = (n("./node_modules/@loadable/component/dist/loadable.esm.js"), n("./src/lib/loadableAction/index.ts"));
			var h = [],
				f = n("./src/reddit/routes/econManagement/index.ts");
			var g = {
					action: Object(b.a)(() => n.e(7).then(n.bind(null, "./src/reddit/actions/pages/emailVerification.ts")).then(e => e.emailVerificationRequested)),
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Mb.EMAIL_VERIFICATION
					},
					path: "/verification/:verificationToken"
				},
				C = n("./src/lib/addQueryParams/index.ts");
			var O = {
					action: e => async (t, n, {
						apiContext: s
					}) => {
						const {
							queryParams: r
						} = e;
						await t(Object(i.c)(Object(C.a)("/", r)))
					},
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Mb.EXPLORE
					},
					path: ["/explore", "/explore/:categoryName"],
					prefetches: [c.s.COMMENTS_PAGE, c.s.FRONTPAGE]
				},
				v = n("./src/reddit/routes/followers/index.ts"),
				x = n("./src/reddit/routes/framedGild/index.ts"),
				y = n("./src/reddit/routes/framedModal/index.ts"),
				E = n("./src/reddit/routes/frontpage/index.ts"),
				j = n("./src/reddit/routes/geotagging/index.ts"),
				_ = n("./src/reddit/routes/inbox/index.ts"),
				S = n("./src/reddit/routes/meta/index.ts"),
				k = n("./src/reddit/routes/moderationPages/index.ts"),
				P = n("./src/reddit/routes/modListing/index.ts"),
				w = n("./src/reddit/routes/modQueue/index.ts"),
				N = n("./src/reddit/routes/multireddit/index.ts"),
				I = n("./src/reddit/routes/notificationsInbox/index.ts"),
				M = n("./src/reddit/routes/postCreation/constants.ts");
			const T = ["/original", "/original/:categoryName/:sort([a-z]+)?"].map(e => ({
				path: e,
				action: () => async e => {
					await e(Object(i.c)("/"))
				},
				chunk: c.s.EMPTY,
				exact: !0,
				meta: {
					name: c.Mb.ORIGINAL_CONTENT_REDIRECT
				}
			}));
			var R = [{
					path: "/original/submit",
					action: () => async e => {
						await e(Object(i.c)(M.b))
					},
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Mb.ORIGINAL_CONTENT_REDIRECT
					}
				}, ...T],
				L = n("./src/reddit/routes/postCreation/index.ts"),
				A = n("./src/reddit/routes/postDraft/index.ts"),
				F = n("./src/reddit/routes/powerups/index.ts");
			var D = {
					action: () => async e => await e(Object(i.c)(F.a)),
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Mb.POWERUP_REDIRECT
					},
					path: "/powerup"
				},
				B = n("./src/reddit/routes/predictions/index.ts");
			var U = {
					action: () => async e => await e(Object(i.c)(B.a)),
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Mb.PREDICTION_REDIRECT
					},
					path: "/prediction"
				},
				G = n("./src/reddit/routes/premium/index.ts"),
				H = n("./src/reddit/routes/profileComments/index.ts"),
				W = n("./src/reddit/endpoints/me/index.ts"),
				q = n("./src/reddit/helpers/pageActionLoginRedirect.ts");
			var V = {
					action: e => async (t, n, {
						apiContext: s
					}) => {
						const {
							rest: r
						} = e.params, {
							queryParams: o
						} = e, a = await Object(W.a)(s());
						if (!(a.ok && a.body && a.body.account)) {
							const e = n();
							return void Object(q.a)(t, e)
						}
						const c = a.body.account.displayText,
							d = r ? `/user/${c}/${(e=>e.endsWith("/")?e:`${e}/`)(r)}` : `/user/${c}/`,
							l = Object(C.a)(d, o);
						await t(Object(i.c)(l))
					},
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Mb.PROFILE_ME
					},
					path: ["/user/me", "/user/me/:rest(.*)"]
				},
				K = n("./src/reddit/routes/profileModSettings/index.ts"),
				z = n("./src/reddit/routes/profileOverview/index.ts"),
				Q = n("./src/reddit/routes/profilePosts/index.ts"),
				J = n("./src/reddit/routes/profilePrivate/index.ts");
			var Z = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							queryParams: r
						} = e, o = s ? `/user/${n}/${(e=>e.endsWith("/")?e:`${e}/`)(s)}` : `/user/${n}/`, a = Object(C.a)(o, r);
						await t(Object(i.c)(a))
					},
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Mb.PROFILE_REDIRECT
					},
					path: ["/r/u_:profileName", "/r/u_:profileName/:rest(.*)", "/u/:profileName", "/u/:profileName/:rest(.*)"]
				},
				Y = n("./src/reddit/routes/profileSnoobuilder/index.ts");
			var X = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							queryParams: r
						} = e, o = s ? `/user/${n}/posts/${s}` : `/user/${n}/posts`, a = Object(C.a)(o, r);
						t(Object(i.c)(a))
					},
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Mb.PROFILE_REDIRECT
					},
					path: ["/user/:profileName/submitted", "/user/:profileName/submitted/:rest(.*)"]
				},
				$ = n("./src/reddit/routes/publicAccessNetwork/index.ts"),
				ee = n("./src/reddit/routes/report/index.ts"),
				te = n("./src/reddit/routes/searchResults/index.ts"),
				ne = n("./src/reddit/routes/settings/index.ts");
			var se = [{
					action: e => async t => {
						const {
							page: n
						} = e.params, s = n && "blocked" === n ? "/settings/privacy" : "/settings/";
						await t(Object(i.c)(s))
					},
					chunk: c.s.EMPTY,
					meta: {
						name: c.Mb.SETTINGS_REDIRECT
					},
					path: "/prefs/:page(deactivate|blocked)?"
				}, {
					action: () => async e => {
						await e(Object(i.c)("/settings/profile"))
					},
					chunk: c.s.EMPTY,
					meta: {
						name: c.Mb.SETTINGS_REDIRECT
					},
					path: ["/user/:username/about/edit", "/user/:username/about/edit/privacy"]
				}],
				re = n("./src/reddit/routes/subreddit/index.ts"),
				oe = n("./src/reddit/routes/subredditLeaderboard/index.ts"),
				ae = n("./src/reddit/routes/subredditWiki/index.ts"),
				ie = n("./src/reddit/routes/talk/index.ts"),
				ce = n("./src/reddit/routes/topic/index.ts"),
				de = n("./src/reddit/routes/wrappedreddit/index.ts");
			const le = [r.a, o.a, a.b, d, l.a, u.a, p.a, V, Z, X, ...s.a, ...m.a, g, ...E.a, j.a, G.a, F.b, de.c, B.b, ie.b, f.c, D, U, v.a, x.a, y.a, L.a, A.a, ...R, O, ...S.a, N.a, w.a, P.c, I.a, _.a, H.a, K.a, z.a, Q.a, Y.a, J.a, $.a, ...ne.a, ...se, te.a, ...ae.a, ce.a, re.b, oe.a, k.a, ee.a, ...h];
			t.a = le
		},
		"./src/reddit/routes/meta/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = "/community-points/",
				r = "/community-points/documentation/*"
		},
		"./src/reddit/routes/meta/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./node_modules/react-router-redux/es/index.js"),
				a = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts"),
				c = n("./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts"),
				d = n("./src/reddit/actions/users.ts"),
				l = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/featureFlags/index.ts"),
				m = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/routes/meta/constants.ts");
			const h = {
					action: () => async (e, t) => {
						Object(p.J)(t()) || await e(Object(d.t)())
					},
					chunk: r.s.META_ARBITRUM_POINTS_MIGRATION_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "reddit-pages-meta-ArbitrumPointsMigrationPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e(0), n.e("reddit-pages-meta-ArbitrumPointsMigrationPage")]).then(n.bind(null, "./src/reddit/pages/meta/ArbitrumPointsMigrationPage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/meta/ArbitrumPointsMigrationPage/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Mb.META_ARBITRUM_POINTS_MIGRATION_PAGE
					},
					path: ["/web/points-migration/"]
				},
				f = {
					action: i.a,
					chunk: r.s.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "CommunityPointsLearnMore",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("CommunityPointsLearnMore").then(n.bind(null, "./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Mb.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
						isResponsive: !0
					},
					path: [b.b, b.a, "/vault/", "/web/community-points/"]
				},
				g = {
					action: c.a,
					chunk: r.s.META_MEMBERSHIP_PAYWALL_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "MembershipPaywallPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), n.e("MembershipPaywallPage")]).then(n.bind(null, "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Mb.META_MEMBERSHIP_PAYWALL_PAGE
					},
					path: ["/web/special-membership/:subredditName", "/web/membership/:subredditName"]
				},
				C = e => async (t, n) => {
					const s = Object(m.a)(e.queryParams);
					Object(p.J)(n()) || await t(Object(d.t)()), s && setTimeout(async () => {
						await t(Object(o.c)(`/r/${encodeURIComponent(s.subreddit)}/`)), u.d.spBurnLinks(n()) && t(Object(a.h)(l.a.CRYPTO_BURN_POINTS, s))
					}, 0)
				}, O = {
					action: C,
					chunk: r.s.EMPTY,
					exact: !0,
					meta: {
						name: r.Mb.META_VAULT_BURN
					},
					path: ["/vault/burn"]
				};
			t.a = [h, f, g, O]
		},
		"./src/reddit/routes/modQueue/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object(o.a)({
					resolved: {},
					chunkName: () => "ModQueuePages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("ModQueue~ModQueuePages~ModerationPages"), n.e("ModQueuePages")]).then(n.bind(null, "./src/reddit/pages/ModQueuePages/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ModQueuePages/index.tsx"
					}
				}),
				d = Object.keys(a.rb).map(e => a.rb[e]).join("|"),
				l = `/r/mod/about/:pageName(${d})?`,
				u = {
					action: Object(i.a)(() => Promise.all([n.e("ModQueue~ModQueuePages~ModerationPages"), n.e("ModQueue")]).then(n.bind(null, "./src/reddit/actions/pages/modQueue/index.ts")).then(e => e.modQueuePageRequested)),
					chunk: a.s.MODQUEUE_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: a.Mb.MODQUEUE_PAGES
					},
					path: l
				};
			t.a = u
		},
		"./src/reddit/routes/moderationPages/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "c", (function() {
				return O
			}));
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/countrySites/index.ts"),
				c = n("./src/lib/loadableAction/index.ts"),
				d = n("./node_modules/react-router/esm/react-router.js");
			const l = Object.keys(a.ec).map(e => a.ec[e]).join("|"),
				u = [a.ec.Awards],
				m = u.join("|"),
				p = e => `${e}about/scheduledposts`,
				b = e => `${e}about/eventposts`,
				h = e => `${e}about/predictions`,
				f = Object(o.a)({
					resolved: {},
					chunkName: () => "ModerationPages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("ModQueue~ModQueuePages~ModerationPages"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/pages/ModHub/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ModHub/index.tsx"
					}
				}),
				g = ["/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(revisions|wikibanned|wikicontributors)", "/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(edit|create|settings|revisions)/:wikiPageName+", "/r/:subredditName/about/:pageName(wiki)/:wikiPageName*"];
			let C = ["/r/:subredditName/about", `/r/:subredditName/about/:pageName(${l})`, `/user/:profileName/about/:pageName(${m})`, ...g];
			C = Object(i.b)(C);
			const O = e => !!Object(d.h)(e, {
					path: "/r/:subredditName/about"
				}) || !!Object(d.h)(e, {
					path: "/:countryCode([a-z]{2})/r/:subredditName/about"
				}) || !!Object(d.h)(e, {
					path: "/:countryCode([a-z]{2})/:languageCode([a-z]{2})/r/:subredditName/about"
				}),
				v = {
					action: Object(c.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("ModQueue~ModQueuePages~ModerationPages"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/actions/pages/moderationPages/index.ts")).then(e => e.moderationPageRequested)),
					chunk: a.s.MODERATION_PAGES,
					component: f,
					exact: !0,
					meta: {
						name: a.Mb.MODERATION_PAGES
					},
					path: C,
					prefetches: [a.s.SUBREDDIT]
				};
			t.a = v
		},
		"./src/reddit/routes/multireddit/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object(o.a)({
					resolved: {},
					chunkName: () => "Multireddit",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/pages/Multireddit/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Multireddit/index.tsx"
					}
				}),
				d = "/me/m/:multiredditName",
				l = Object.keys(a.W).map(e => `${d}/:sort(${a.W[e]})?`),
				u = "/user/:username/m/:multiredditName",
				m = Object.keys(a.W).map(e => `${u}/:sort(${a.W[e]})?`),
				p = [d, u, ...l, ...m],
				b = {
					action: Object(i.a)(() => Promise.all([n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/pages/multireddit/index.ts")).then(e => e.multiredditRequested)),
					chunk: a.s.MULTIREDDIT,
					component: c,
					exact: !0,
					meta: {
						name: a.Mb.MULTIREDDIT
					},
					path: p,
					prefetches: [a.s.SUBREDDIT]
				};
			t.a = b
		},
		"./src/reddit/routes/notificationsInbox/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/notifications/",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "NotificationsInbox",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("NotificationsInbox").then(n.bind(null, "./src/reddit/pages/NotificationsInbox/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/NotificationsInbox/index.tsx"
					}
				}),
				c = {
					action: Object(o.a)(() => n.e("NotificationsInbox").then(n.bind(null, "./src/reddit/actions/pages/notificationsInbox.ts")).then(e => e.notificationsInboxPageRequested)),
					chunk: r.s.NOTIFICATIONS_INBOX,
					component: i,
					exact: !0,
					meta: {
						name: r.Mb.NOTIFICATIONS_INBOX
					},
					path: a,
					prefetches: [r.s.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/postDraft/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/draft/:draftId",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "PostDraft",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("PostDraft").then(n.bind(null, "./src/reddit/pages/PostDraft/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/PostDraft/index.tsx"
					}
				}),
				c = {
					action: Object(o.a)(() => n.e("PostDraft").then(n.bind(null, "./src/reddit/actions/pages/postDraft.ts")).then(e => e.postDraftRequested)),
					chunk: r.s.POST_DRAFT,
					component: i,
					exact: !0,
					meta: {
						name: r.Mb.POST_DRAFT
					},
					path: a,
					prefetches: [r.s.POST_DRAFT]
				};
			t.a = c
		},
		"./src/reddit/routes/powerups/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/powerups.ts");
			const a = "/powerups",
				i = {
					action: o.a,
					chunk: r.s.POWERUPS,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Powerups",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("Powerups").then(n.bind(null, "./src/reddit/pages/Powerups/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Powerups/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Mb.POWERUPS,
						isResponsive: !0
					},
					path: a
				};
			t.b = i
		},
		"./src/reddit/routes/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/predictions.ts");
			const a = "/predictions",
				i = {
					action: o.a,
					chunk: r.s.PREDICTIONS,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Predictions",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("Predictions").then(n.bind(null, "./src/reddit/pages/Predictions/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Predictions/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Mb.PREDICTIONS,
						isResponsive: !0
					},
					path: a
				};
			t.b = i
		},
		"./src/reddit/routes/profileComments/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/comments",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileComments",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/pages/ProfileComments/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileComments/index.tsx"
					}
				}),
				c = {
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/actions/pages/profileComments/index.ts")).then(e => e.profileCommentsRequested)),
					chunk: r.s.PROFILE_COMMENTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Mb.PROFILE_COMMENTS
					},
					path: a,
					prefetches: [r.s.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profileModSettings/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/about/edit/moderation",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileModeration",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("ProfileModeration").then(n.bind(null, "./src/reddit/pages/ProfileModSettings/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileModSettings/index.tsx"
					}
				}),
				c = {
					action: Object(o.a)(() => n.e("ProfileModeration").then(n.bind(null, "./src/reddit/actions/pages/profileModSettings.ts")).then(e => e.profileModSettingsRequested)),
					chunk: r.s.PROFILE_MODERATION,
					component: i,
					exact: !0,
					meta: {
						name: r.Mb.PROFILE_MODERATION
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/profileOverview/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileOverview",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/pages/ProfileOverview/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileOverview/index.tsx"
					}
				}),
				c = {
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/actions/pages/profileOverview/index.ts")).then(e => e.profileOverviewRequested)),
					chunk: r.s.PROFILE_OVERVIEW,
					component: i,
					exact: !0,
					meta: {
						name: r.Mb.PROFILE_OVERVIEW
					},
					path: a,
					prefetches: [r.s.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profilePosts/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/posts",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfilePosts",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("ProfilePosts").then(n.bind(null, "./src/reddit/pages/ProfilePosts/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfilePosts/index.tsx"
					}
				}),
				c = {
					action: Object(o.a)(() => n.e("ProfilePosts").then(n.bind(null, "./src/reddit/actions/pages/profilePosts.ts")).then(e => e.profilePostsRequested)),
					chunk: r.s.PROFILE_POSTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Mb.PROFILE_POSTS
					},
					path: a,
					prefetches: [r.s.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profilePrivate/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts"),
				c = n("./src/reddit/models/Profile/index.ts");
			const d = Object(o.a)({
					resolved: {},
					chunkName: () => "ProfilePrivate",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfilePrivate")]).then(n.bind(null, "./src/reddit/pages/ProfilePrivate/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfilePrivate/index.tsx"
					}
				}),
				l = Object.keys(c.b).map(e => c.b[e]).join("|"),
				u = [`/user/:profileName/:listingType(${l})`, `/user/:profileName/gilded/:listingType(${c.b.GivenGildings})`],
				m = {
					action: Object(i.a)(() => n.e("ProfilePosts").then(n.bind(null, "./src/reddit/actions/pages/profilePrivate/index.ts")).then(e => e.profilePrivateRequested)),
					chunk: a.s.PROFILE_PRIVATE,
					component: d,
					exact: !0,
					meta: {
						name: a.Mb.PROFILE_PRIVATE
					},
					path: u,
					prefetches: [a.s.COMMENTS_PAGE]
				};
			t.a = m
		},
		"./src/reddit/routes/profileSnoobuilder/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts"),
				a = n("./src/reddit/featureFlags/index.ts");
			const i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileSnoobuilder",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("ProfileSnoobuilder").then(n.bind(null, "./src/reddit/pages/ProfileSnoobuilder/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileSnoobuilder/index.tsx"
					}
				}),
				c = "/user/:profileName/snoo",
				d = {
					path: c,
					action: Object(o.a)(() => n.e("ProfileSnoobuilder").then(n.bind(null, "./src/reddit/actions/pages/profileSnoobuilder.ts")).then(e => e.profileSnoobuilderRequested)),
					chunk: r.s.PROFILE_SNOOBUILDER,
					component: i,
					exact: !0,
					meta: {
						name: r.Mb.PROFILE_SNOOBUILDER
					},
					routePredicate: a.d.snoovatar30
				};
			t.a = d
		},
		"./src/reddit/routes/publicAccessNetwork/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = Object(s.a)({
					resolved: {},
					chunkName: () => "PublicAccessNetwork",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("PublicAccessNetwork")]).then(n.bind(null, "./src/reddit/pages/PublicAccessNetwork/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/PublicAccessNetwork/index.tsx"
					}
				}),
				i = {
					action: Object(o.a)(() => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("PublicAccessNetwork")]).then(n.bind(null, "./src/reddit/actions/publicAccessNetwork/page.ts")).then(e => e.publicAccessNetworkRequested)),
					chunk: r.s.PUBLIC_ACCESS_NETWORK,
					component: a,
					exact: !0,
					meta: {
						name: r.Mb.PUBLIC_ACCESS_NETWORK
					},
					path: ["/rpan/r/:subredditName/:partialPostId?", "/rpan/:partialPostId?"],
					prefetches: [r.s.PUBLIC_ACCESS_NETWORK]
				};
			t.a = i
		},
		"./src/reddit/routes/report/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/report",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ReportPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("ReportPage").then(n.bind(null, "./src/reddit/pages/ReportPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ReportPage/index.tsx"
					}
				}),
				c = {
					action: Object(o.a)(() => n.e("Report").then(n.bind(null, "./src/reddit/actions/pages/report/index.ts")).then(e => e.reportPageRequested)),
					chunk: r.s.REPORT_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: r.Mb.REPORT
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/searchResults/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = ["/search", "/r/:subredditName/search", "/me/m/:multiredditName/search", "/user/:username/m/:multiredditName/search"],
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "SearchResults",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("SearchResults").then(n.bind(null, "./src/reddit/pages/SearchResults/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/SearchResults/index.tsx"
					}
				}),
				c = {
					action: Object(o.a)(() => n.e("SearchResults").then(n.bind(null, "./src/reddit/actions/pages/search/searchResultsRequested.ts")).then(e => e.searchResultsRequested)),
					chunk: r.s.SEARCH_RESULTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Mb.SEARCH_RESULTS
					},
					path: a,
					prefetches: [r.s.FRONTPAGE, r.s.SUBREDDIT, r.s.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/settings/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object.keys(a.bc).map(e => a.bc[e]).join("|"),
				d = [{
					action: Object(i.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModStatsChart~Settings~ViewsTooltip"), n.e("vendors~Settings"), n.e("Settings")]).then(n.bind(null, "./src/reddit/actions/pages/settings.ts")).then(e => e.settingsPageRequested)),
					component: Object(o.a)({
						resolved: {},
						chunkName: () => "Settings",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModStatsChart~Settings~ViewsTooltip"), n.e("vendors~Settings"), n.e("Settings")]).then(n.bind(null, "./src/reddit/pages/Settings/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Settings/index.tsx"
						}
					}),
					chunk: a.s.SETTINGS,
					exact: !0,
					meta: {
						name: a.Mb.SETTINGS
					},
					path: `/settings/:page(${c})?`
				}, {
					action: Object(i.a)(() => n.e("UserDataRequestPage").then(n.bind(null, "./src/reddit/actions/userDataRequest.ts")).then(e => e.userDataRequestPageRequested)),
					component: Object(o.a)({
						resolved: {},
						chunkName: () => "UserDataRequestPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("UserDataRequestPage").then(n.bind(null, "./src/reddit/pages/UserDataRequestPage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/UserDataRequestPage/index.tsx"
						}
					}),
					chunk: a.s.USER_DATA_REQUEST,
					exact: !0,
					meta: {
						name: a.Mb.USER_DATA_REQUEST
					},
					path: "/settings/data-request"
				}];
			t.a = d
		},
		"./src/reddit/routes/subredditLeaderboard/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = ["/subreddits/leaderboard", "/subreddits/leaderboard/:categoryName/"],
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "SubredditLeaderboard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("SubredditLeaderboard").then(n.bind(null, "./src/reddit/pages/SubredditLeaderboard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/SubredditLeaderboard/index.tsx"
					}
				}),
				c = {
					action: Object(o.a)(() => n.e("SubredditLeaderboard").then(n.bind(null, "./src/reddit/actions/pages/subredditLeaderboard.ts")).then(e => e.subredditLeaderboardPageRequested)),
					chunk: r.s.SUBREDDIT_LEADERBOARD,
					component: i,
					exact: !0,
					meta: {
						name: r.Mb.SUBREDDIT_LEADERBOARD,
						isResponsive: !0
					},
					path: a,
					prefetches: [r.s.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/subredditWiki/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/countrySites/index.ts"),
				i = n("./src/lib/loadableAction/index.ts"),
				c = n("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts");
			const d = Object(s.a)({
				resolved: {},
				chunkName: () => "SubredditWiki",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("ModerationPages~SubredditWiki"), n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/pages/SubredditWiki/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/pages/SubredditWiki/index.tsx"
				}
			});
			let l = ["/r/:subredditName/wiki/:wikiSubRoute(revisions)", "/r/:subredditName/wiki/:wikiSubRoute(edit|create|revisions)/:wikiPageName+", "/r/:subredditName/wiki/:wikiPageName+"];
			l = Object(a.b)(l), l.push("/wiki/:wikiPageName+");
			const u = ["/wiki/", "/r/:subredditName/wiki/", "/r/:subredditName/w/:wikiPageName*", "/w/:wikiPageName*", "/r/:subredditName/wiki/:wikiSubRoute(settings)/:wikiPageName+"],
				m = e => async t => {
					await t(Object(r.c)(Object(c.a)(e.url, e.params)))
				}, p = {
					action: m,
					chunk: o.s.EMPTY,
					exact: !0,
					meta: {
						name: o.Mb.SUBREDDIT_WIKI
					},
					path: u
				}, b = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("ModerationPages~SubredditWiki"), n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/actions/pages/subredditWiki/index.ts")).then(e => e.subredditWikiPageRequested)),
					chunk: o.s.SUBREDDIT_WIKI,
					component: d,
					exact: !0,
					meta: {
						name: o.Mb.SUBREDDIT_WIKI
					},
					path: l,
					prefetches: [o.s.SUBREDDIT]
				};
			t.a = [p, b]
		},
		"./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/wiki.ts"),
				a = n("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				i = n("./src/reddit/routes/moderationPages/index.ts");
			t.a = (e, t) => {
				const n = t.wikiSubRoute === o.m.Settings,
					s = Object(a.a)(t, Object(i.c)(e) || n),
					c = r.a.parse(e);
				return (c.pathname || "").replace(/\/$/, "") !== s ? (c.pathname = s, r.a.format(c)) : e
			}
		},
		"./src/reddit/routes/talk/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/talk.ts");
			const a = "/talk",
				i = {
					action: o.a,
					chunk: r.s.TALK,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Talk",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("Talk").then(n.bind(null, "./src/reddit/pages/Talk/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Talk/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Mb.TALK
					},
					path: a
				};
			t.b = i
		},
		"./src/reddit/routes/topic/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = Object(s.a)({
					resolved: {},
					chunkName: () => "Topic",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Topic").then(n.bind(null, "./src/reddit/pages/Topic/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Topic/index.tsx"
					}
				}),
				i = ["/t/:topicSlug"],
				c = {
					path: i,
					action: Object(o.a)(() => n.e("Topic").then(n.bind(null, "./src/reddit/actions/pages/topic.ts")).then(e => e.topicPageRequested)),
					chunk: r.s.TOPIC,
					component: a,
					exact: !0,
					meta: {
						name: r.Mb.TOPIC
					},
					prefetches: [r.s.COMMENTS_PAGE, r.s.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/wrappedreddit/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/wrappedReddit.ts");
			const a = "/RedditRecap2021",
				i = "https://i.redd.it/8yb4biw7bf481.png",
				c = {
					action: o.a,
					chunk: r.s.WRAPPED_REDDIT,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "WrappedReddit",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("WrappedReddit").then(n.bind(null, "./src/reddit/pages/WrappedReddit/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/WrappedReddit/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Mb.WRAPPED_REDDIT
					},
					path: a
				};
			t.c = c
		},
		"./src/reddit/selectors/accountManager.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "c", (function() {
				return k
			}));
			var s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				o = n("./src/config.ts"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/reddit/constants/accountManager.ts"),
				d = n("./src/reddit/constants/experiments.ts"),
				l = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				u = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				m = n("./src/reddit/helpers/chooseVariant/index.ts"),
				p = n("./src/reddit/selectors/experiments/index.ts");
			const b = Object(a.a)(e => Object(m.c)(e, {
				experimentEligibilitySelector: p.f,
				experimentName: d.gd
			}), e => e === d.nd.Enabled);
			var h = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				f = n("./src/reddit/selectors/experiments/magicLink.ts"),
				g = n("./src/reddit/selectors/experiments/moreRepliesSignup.ts"),
				C = n("./src/lib/getParsedUserAgent/index.ts");
			const O = Object(a.a)(e => Object(m.c)(e, {
				experimentEligibilitySelector: e => Object(C.g)(e.meta.userAgent) && Object(p.f)(e),
				experimentName: d.Ee
			}), e => e === d.Me.Enabled);
			var v = n("./src/reddit/selectors/experiments/utils.ts"),
				x = n("./src/reddit/selectors/meta.ts"),
				y = n("./src/reddit/selectors/responsiveSettings.ts");
			const E = e => e.accountManagerModalData.actionSource,
				j = e => e.accountManagerModalData.redirectUrl,
				_ = Object(a.c)({
					frontpageSignupVariant: l.a,
					googleOneTapVariant: u.b,
					magicLinkVariant: f.a,
					moreRepliesSignupVariant: e => Object(v.a)(Object(g.b)(e)),
					ssoLoginLinkVariant: e => Object(m.c)(e, {
						experimentEligibilitySelector: e => !Object(p.e)(e),
						experimentName: d.Fe
					}),
					blockingInterstitialVariant: h.d
				}),
				S = Object(a.c)({
					isGoogleSsoGisEnabled: b,
					isMoreRepliesSignupEnabled: g.a,
					isSafariOneTapEnabled: O,
					isBlockingInterstitialEnabled: h.b
				}),
				k = Object(a.a)((e, t) => t.path, (e, t) => t.uiMode, E, y.a, x.i, _, S, (e, t, n, a, l, u, m) => {
					const {
						frontpageSignupVariant: p,
						googleOneTapVariant: b,
						ssoLoginLinkVariant: h,
						magicLinkVariant: f,
						moreRepliesSignupVariant: g,
						blockingInterstitialVariant: C
					} = u, {
						isGoogleSsoGisEnabled: O,
						isMoreRepliesSignupEnabled: v,
						isSafariOneTapEnabled: x,
						isBlockingInterstitialEnabled: y
					} = m;
					let E = `${o.a.accountManagerOrigin}${e}`;
					if (E = Object(i.a)(E, {
							experiment_d2x_2020ify_buttons: "enabled"
						}), h && (E = Object(i.a)(E, {
							[`experiment_${d.Fe}`]: h
						})), O && (E = Object(i.a)(E, {
							[`experiment_${d.gd}`]: "enabled"
						})), v && (E = Object(i.a)(E, {
							[`experiment_${d.Ed}`]: g
						})), E = Object(i.a)(E, {
							experiment_d2x_onboarding: "enabled"
						}), x && (E = Object(i.a)(E, {
							[`experiment_${d.Ee}`]: "enabled"
						})), e === c.c.GoogleOneTap) return Object(i.a)(E, {
						[d.qb]: b
					});
					if (y && (E = Object(i.a)(E, {
							[`experiment_${d.ub}`]: C
						})), p && (E = Object(i.a)(E, {
							[d.dc]: p,
							uiMode: t
						})), f && (E = Object(i.a)(E, {
							[`experiment_${d.Ad}`]: f
						})), a && (E = Object(i.a)(E, {
							mweb_responsive_settings: "treatment"
						})), l) {
						const e = Object(s.isoLocaleToR2Language)(l);
						l !== r.DEFAULT_LOCALE && e && (E = Object(i.a)(E, {
							lang: e
						}))
					}
					return e === c.c.Index || e === c.c.ChangePassword ? E : E = Object(i.a)(E, {
						actionSource: n
					})
				})
		},
		"./src/reddit/selectors/bannedUser.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				r = n("./src/reddit/components/InboxTooltip/Component.tsx"),
				o = n("./src/reddit/models/SubredditModeration/index.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = (e, {
					subredditId: t
				}) => e.features.banned.models[t],
				c = (e, {
					subredditId: t,
					username: n
				}) => {
					const s = Object(a.mb)(e, {
						userName: n
					});
					if (!s) return;
					const r = i(e, {
						subredditId: t
					});
					return r ? r[s.id] : void 0
				},
				d = Object(s.a)((e, {
					subredditId: t
				}) => {
					const n = e.features.banned.userOrder[t];
					return n ? n.map(n => e.features.banned.models[t][n]) : r.a
				}),
				l = (e, {
					subredditId: t
				}) => {
					const n = Object(o.d)(t);
					return e.features.banned.api.pending[n]
				},
				u = (e, {
					subredditId: t
				}) => e.features.banned.loadMore[t],
				m = e => e.features.banned.search.api.pending,
				p = e => e.features.banned.search.result,
				b = e => e.features.banned.inContext
		},
		"./src/reddit/selectors/correlationId.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = (e, t) => e.correlationId[t]
		},
		"./src/reddit/selectors/econManagement.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/models/EconManagement/index.ts"),
				o = n("./src/reddit/actions/economics/econManagement/constants.ts");
			const a = {
				displayState: r.a.Default,
				currentEntity: null,
				relatedData: {},
				entityTypes: {}
			};
			var i = (e = a, t) => {
				switch (t.type) {
					case o.c:
						return {
							...e, entityTypes: t.payload.reduce((e, t) => ({
								...e,
								[t.typename]: t
							}), {})
						};
					case o.e:
						return {
							...a, entityTypes: e.entityTypes, displayState: r.a.Loading
						};
					case o.d:
						return {
							...a, entityTypes: e.entityTypes, displayState: r.a.Error
						};
					case o.f: {
						const n = t.payload,
							s = n.typename;
						return {
							...e,
							displayState: r.a.Default,
							currentEntity: {
								id: n.entityId || "",
								type: s,
								prefixedId: `${n.typename}:${n.entityId}`,
								details: n
							},
							relatedData: {}
						}
					}
					case o.a: {
						const n = t.payload,
							s = n.type;
						return {
							...e,
							relatedData: {
								...e.relatedData,
								[s]: n.entity
							}
						}
					}
					default:
						return e
				}
			};
			Object(s.a)({
				pages: {
					econManagement: i
				}
			});
			const c = e => {
					var t, n;
					return (null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.econManagement) || void 0 === n ? void 0 : n.currentEntity) || null
				},
				d = e => {
					var t, n;
					return (null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.econManagement) || void 0 === n ? void 0 : n.displayState) || r.a.Default
				},
				l = e => {
					var t, n;
					const s = c(e);
					if (!s) return [];
					const r = null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.econManagement) || void 0 === n ? void 0 : n.entityTypes[s.type];
					return r && r.externalRefs || []
				},
				u = (e, t) => {
					var n, s;
					return null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.econManagement) || void 0 === s ? void 0 : s.relatedData[t]
				},
				m = (e, t) => {
					var n, s, r;
					return (null === (r = null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.econManagement) || void 0 === s ? void 0 : s.entityTypes[t]) || void 0 === r ? void 0 : r.actions) || []
				}
		},
		"./src/reddit/selectors/experiments/econ/meta.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(r.a)(s.Bd)
		},
		"./src/reddit/selectors/experiments/econStorefrontClaim.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const a = e => {
				const t = Object(r.c)(e, {
					experimentEligibilitySelector: o.J,
					experimentName: s.Sc
				});
				return !(!t || Object(s.if)(t))
			}
		},
		"./src/reddit/selectors/experiments/frontpageSignup.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "b", (function() {
				return f
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts"),
				c = n("./src/reddit/selectors/meta.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const l = Object(s.a)(d.S, (e, {
					pageLayer: t
				}) => !t || Object(o.A)(t), c.c, (e, t, n) => !e && t && !n),
				u = Object(s.a)((e, t) => Object(a.c)(e, {
					experimentEligibilitySelector: e => l(e, t),
					experimentName: r.dc,
					throttledVariants: {
						[r.ed.CurrentThrottled]: r.dc
					}
				}), i.a),
				m = e => e === r.ed.CurrentThrottled,
				p = e => e === r.ed.CurrentThrottled || e === r.ed.CurrentUnthrottled || e === r.ed.CurrentUnthrottledCopy || e === r.ed.NewPopUnthrottledCopy,
				b = e => e === r.ed.NewPopUnthrottledCopy,
				h = e => e === r.ed.NewPageUnthrottledCopy || e === r.ed.NewPageUnthrottledCopyFields,
				f = e => e === r.ed.NewPageUnthrottledCopyFields
		},
		"./src/reddit/selectors/experiments/joinOptimizations.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts");
			const i = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.yb,
					experimentEligibilitySelector: a.e
				}), e => e === r.X.Enabled),
				c = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.zb,
					experimentEligibilitySelector: a.e
				}), e => e === r.Y.Enabled),
				d = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Ab,
					experimentEligibilitySelector: a.e
				}), e => e === r.Z.Enabled),
				l = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Bb,
					experimentEligibilitySelector: a.e
				}), e => e === r.ab.Enabled),
				u = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Db,
					experimentEligibilitySelector: a.e
				}), e => e === r.cb.Enabled),
				m = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Cb,
					experimentEligibilitySelector: a.e
				}), e => e === r.bb.Enabled)
		},
		"./src/reddit/selectors/experiments/moreRepliesSignup.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts");
			const c = e => Object(o.c)(e, {
					experimentEligibilitySelector: a.f,
					experimentName: r.Ed,
					throttledVariants: {
						[r.Id.ThrottledDaily]: r.Jd.Daily,
						[r.Id.ThrottledWeekly]: r.Jd.Weekly
					}
				}),
				d = Object(s.a)(c, e => !!Object(i.a)(e))
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(r.c)(e, {
					experimentName: s.Ld,
					experimentEligibilitySelector: r.a
				}) === s.Ud.Enabled,
				a = e => Object(r.c)(e, {
					experimentName: s.Md,
					experimentEligibilitySelector: r.a,
					expEventOverride: !1
				}) === s.Vd.Enabled
		},
		"./src/reddit/selectors/experiments/onlineIndicator.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/experiments/presence.ts");
			const a = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.ie
					}) === s.Vc
				},
				i = e => {
					if (Object(o.a)(e)) return !1;
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.he
					}) === s.Vc
				},
				c = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.Yd
					}) === s.Vc
				},
				d = e => {
					if (Object(o.a)(e)) return !1;
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.Xd
					}) === s.Vc
				}
		},
		"./src/reddit/selectors/experiments/wrappedReddit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.Qb
				}) === s.ib.Enabled,
				a = e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.Rb
				}) === s.jb.Enabled
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "d", (function() {
				return x
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				r = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/selectors/posts.ts"),
				a = n("./src/reddit/selectors/subreddit.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const c = (e, t) => {
					const n = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (n) {
						const t = Object(a.R)(e, {
							subredditId: n
						});
						return t && t.displayText || ""
					}
					return ""
				},
				d = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				u = [],
				m = Object(s.a)((e, t) => {
					const n = p(e, t);
					if (!n) return u;
					const s = Object(a.V)(e, {
						subredditName: n.name
					});
					return s && s.postIds && s.postIds.length ? s.postIds : u
				}),
				p = (e, t) => {
					const n = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return n ? Object(a.R)(e, {
						subredditId: n
					}) : null
				},
				b = (e, t, n, s, r) => {
					const a = r.find(e => e <= t) || -1,
						i = r.find(e => e > t) || 1 / 0;
					return t !== i && t !== a && (!(a + n > t) && (!(t + n > i) && !((e, t, n) => {
						const s = n[t - 1],
							r = n[t],
							a = r && Object(o.H)(e, {
								postId: s
							}) || null,
							i = r && Object(o.H)(e, {
								postId: r
							}) || null;
						return a && a.isSponsored || i && i.isSponsored
					})(e, t, s)))
				},
				h = [3],
				f = Object(s.a)((e, {
					existingDUPositions: t,
					listingProps: n
				}) => {
					const s = t.slice().sort();
					let r = -1;
					const a = Object(o.A)(e, {
							listingKey: n.listingKey
						}),
						i = [];
					return h.forEach(t => {
						let n = r + t;
						if (!(n >= a.length)) {
							for (; n < a.length && !b(e, n, t, a, s);) n += 1;
							n < a.length && (i.push(n), r = n)
						}
					}), i
				}),
				g = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				C = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				O = e => e.focusedVerticals.category,
				v = e => e.focusedVerticals.lastLoadedEnv,
				x = e => {
					const t = Object(i.I)(e),
						n = r.d.geoSubredditRecommendationDULoggedIn(e),
						s = r.d.geoSubredditRecommendationDULoggedOut(e);
					return t && n || !t && s
				}
		},
		"./src/reddit/selectors/gold/powerups/modSignup.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./src/reddit/featureFlags/subredditPoints.ts"),
				r = n("./src/reddit/selectors/moderatorPermissions.ts"),
				o = n("./src/reddit/selectors/user.ts"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/selectors/gold/powerups/index.ts");
			const c = e => {
					const t = Object(r.a)(e);
					if (!t) return null;
					const n = Object(o.G)(e),
						a = [];
					for (const r of t) {
						const t = e.subreddits.models[r];
						if (!t) return null;
						const o = Object(i.h)(e, {
							subredditId: r
						});
						s.b.has(t.name) || t.isNSFW || t.subscribers < 1e3 && !n || a.push({
							id: r,
							displayText: t.displayText,
							hasPowerups: o
						})
					}
					return a
				},
				d = Object(a.a)(c, e => !!(null == e ? void 0 : e.length))
		},
		"./src/reddit/selectors/muted.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				r = n("./src/reddit/models/SubredditModeration/index.ts");
			const o = [],
				a = Object(s.a)((e, {
					subredditId: t
				}) => {
					const n = e.pages.modHub.muted.userOrder[t];
					return n ? n.map(n => e.pages.modHub.muted.models[t][n]) : o
				}),
				i = (e, {
					subredditId: t
				}) => {
					const n = Object(r.d)(t);
					return !!e.pages.modHub.muted.api.pending[n]
				},
				c = e => !!e.pages.modHub.muted.search.api.pending,
				d = e => e.pages.modHub.muted.search.result,
				l = e => {
					var t, n, s;
					return null === (s = null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.modHub) || void 0 === n ? void 0 : n.muted) || void 0 === s ? void 0 : s.inContext
				},
				u = (e, {
					subredditId: t
				}) => e.pages.modHub.muted.loadMore[t]
		},
		"./src/reddit/selectors/notificationPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			const s = e => e.user.notificationPrefs.api.getPreferences.loaded,
				r = e => e.user.notificationPrefs.api.getPreferences.pending,
				o = e => e.user.notificationPrefs.api.setPreferences.pending,
				a = e => e.user.notificationPrefs.preferences,
				i = e => e.user.notificationPrefs.isNotificationPromptVisible,
				c = (e, t) => {
					var n, s;
					const r = (e => e.user.notificationPrefs.pushSettingsLayout)(e),
						o = null === (n = null == r ? void 0 : r.rows) || void 0 === n ? void 0 : n.byId;
					return o && (null === (s = o[t]) || void 0 === s ? void 0 : s.isEnabled)
				}
		},
		"./src/reddit/selectors/notificationsInbox.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "h", (function() {
				return h
			}));
			var s = n("./src/lib/notifications/constants.ts"),
				r = n("./src/reddit/actions/notifications/utils.ts"),
				o = n("./node_modules/reselect/es/index.js");
			const a = e => e.notificationsInbox && e.notificationsInbox.api && e.notificationsInbox.api.pending,
				i = e => e.notificationsInbox && e.notificationsInbox.pageInfo,
				c = Object(o.a)(i, e => !(!e || !e.hasNextPage)),
				d = Object(o.a)(i, e => e && e.endCursor),
				l = e => e.notificationsInbox && e.notificationsInbox.notifications,
				u = Object(o.a)(l, e => e.slice(0, 5)),
				m = e => e.notificationsInbox && e.notificationsInbox.earlierDividerIndex,
				p = Object(o.a)(l, m, (e, t) => {
					if (t) {
						const n = parseInt(t);
						return e.slice(0, n)
					}
					return e
				}),
				b = Object(o.a)(l, m, (e, t) => {
					if (t) {
						const n = parseInt(t);
						return e.slice(n)
					}
					return null
				}),
				h = Object(o.a)(r.a, e => e === s.c.NotificationsSupported)
		},
		"./src/reddit/selectors/onboarding.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/safeJSONParse/index.ts"),
				o = n("./src/reddit/constants/parameters.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const c = e => {
					const t = Object(a.q)(e);
					return Boolean((null == t ? void 0 : t[o.v]) && Object(r.a)(t[o.v]))
				},
				d = Object(s.a)(i.J, i.I, c, (e, t, n) => (e || t) && n),
				l = e => {
					const {
						genderUpdateState: t
					} = e.onboardingModal;
					if (t.success || t.failure) return t
				}
		},
		"./src/reddit/selectors/removalReasons.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = (e, {
					subredditId: t
				}) => {
					if (e.features.removalReasons.reasonOrder[t]) {
						return e.features.removalReasons.reasonOrder[t].map(t => e.features.removalReasons.models[t])
					}
					return []
				},
				r = e => e.features.removalReasons.removedItemIds && e.features.removalReasons.removedItemIds.itemIds.length ? e.features.removalReasons.removedItemIds : null,
				o = e => e.features.removalReasons.api.pending
		},
		"./src/reddit/selectors/searchFix.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx");
			const a = {},
				i = ({
					pageLayer: e
				}) => e && e.locationState || a,
				c = Object(s.a)((e, t) => i(t), e => e.fromPage && e.fromPage.subredditName),
				d = Object(s.a)((e, t) => i(t), e => e.fromPage && e.fromPage.routeName),
				l = ({
					pageLayer: e
				}) => e && e.locationState && e.locationState.searchSwitcherType,
				u = Object(s.a)(d, (e, {
					pageLayer: t
				}) => Object(o.B)(t), (e, t) => t && (e === r.Mb.COMMENTS || e === r.Mb.SUBREDDIT))
		},
		"./src/reddit/selectors/sso.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/components/Settings/modalIds.ts"),
				o = n("./src/reddit/models/Sso/index.ts"),
				a = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/user.ts");
			Object(s.a)(i.qb, e => !(!e || !e.length));
			const c = Object(s.a)(i.z, e => !e),
				d = Object(s.a)(i.qb, e => e && e.find(e => e === o.a.Apple)),
				l = Object(s.a)(i.qb, e => !(!e || !e.includes(o.a.Google))),
				u = Object(s.a)(a.a, e => !!e && [r.b, r.d, r.e, r.g].includes(e))
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = (e, {
				listingKey: t
			}) => e.tracking.viewportDataLoaded[t]
		},
		"./src/redditGQL/operations/BlockAwarder.json": function(e) {
			e.exports = JSON.parse('{"id":"9769ffbb7031"}')
		},
		"./src/redditGQL/operations/ChangeStripePaymentMethod.json": function(e) {
			e.exports = JSON.parse('{"id":"ce700fb9b230"}')
		},
		"./src/redditGQL/operations/ClaimAwardOffer.json": function(e) {
			e.exports = JSON.parse('{"id":"7264b2ee2ded"}')
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/DeleteInboxNotifications.json": function(e) {
			e.exports = JSON.parse('{"id":"ce2deb9deef7"}')
		},
		"./src/redditGQL/operations/EconAdminPanelQuery.json": function(e) {
			e.exports = JSON.parse('{"id":"d47c78bc4284"}')
		},
		"./src/redditGQL/operations/FetchSpecialEvents.json": function(e) {
			e.exports = JSON.parse('{"id":"6c73f2f0b64f"}')
		},
		"./src/redditGQL/operations/NotificationInboxFeed.json": function(e) {
			e.exports = JSON.parse('{"id":"6bc40669baab"}')
		},
		"./src/redditGQL/operations/NotificationInboxFeedSlimmed.json": function(e) {
			e.exports = JSON.parse('{"id":"916e9e9be5e0"}')
		},
		"./src/redditGQL/operations/NotificationSettingsLayoutByChannel.json": function(e) {
			e.exports = JSON.parse('{"id":"d03522f8a8d4"}')
		},
		"./src/redditGQL/operations/PerformEconAdminAction.json": function(e) {
			e.exports = JSON.parse('{"id":"de8b0fb0be5d"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"07269d01f4b6"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		},
		"./src/redditGQL/operations/UpdateInboxActivitySeenState.json": function(e) {
			e.exports = JSON.parse('{"id":"85d656894a08"}')
		},
		"./src/redditGQL/operations/UpdateNotificationPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"129085be0500"}')
		},
		"./src/redditGQL/operations/UserSubredditsNotificationsLevel.json": function(e) {
			e.exports = JSON.parse('{"id":"8404d1f9e84d"}')
		}
	},
	[
		["./src/reddit/index.tsx", "runtime~Reddit", "vendors~Governance~ModListing~Reddit~Subreddit", "vendors~Chat~Governance~Reddit", "vendors~PostCreation~Reddit~Subreddit", "PostCreation~Reddit~StandalonePostPage~SubredditTopContent~TopWeekPostsDiscoveryUnit~reddit-componen~2583c786", "PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24", "Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e", "PostCreation~Reddit~StandalonePostPage~Subreddit~reddit-components-ClassicPost~reddit-components-Com~82e48dd3", "Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-Large~9b58114a", "Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435", "Governance~ModListing~Reddit~ReportFlow~Subreddit", "ModListing~PostCreation~Reddit~StandalonePostPage~Subreddit", "Governance~ModListing~Reddit~Subreddit", "Chat~Governance~Reddit", "Governance~Reddit"]
	]
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit.7e617fd09d7e9b0533cd.js.map