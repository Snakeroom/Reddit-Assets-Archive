// https://www.redditstatic.com/desktop2x/Reddit.3e5e1d131d5788fc1cae.js
// Retrieved at 4/5/2022, 3:40:03 PM by Reddit Dataminer v1.0.0
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
				for (var g = e.node || a, f = 0; f < 6; ++f) o[s + f] = g[f];
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
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var n = Math.floor,
				s = Math.random;
			e.exports = function(e, t) {
				return e + n(s() * (t - e + 1))
			}
		},
		"./node_modules/lodash/_baseShuffle.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_shuffleSelf.js"),
				r = n("./node_modules/lodash/values.js");
			e.exports = function(e) {
				return s(r(e))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, t) {
				var n = -1,
					r = e.length,
					o = r - 1;
				for (t = void 0 === t ? r : t; ++n < t;) {
					var a = s(n, o),
						i = e[a];
					e[a] = e[n], e[n] = i
				}
				return e.length = t, e
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
		"./src/lib/combineRefs/index.tsx": function(e, t, n) {
			"use strict";
			t.a = function() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return e => {
					t.forEach(t => {
						if (t) return "function" == typeof t ? t(e) : void(t.current = e)
					})
				}
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
				addListeners(e) {
					this.listenerMap[e] || (this.listenerMap[e] = []);
					for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) n[s - 1] = arguments[s];
					this.listenerMap[e].push(...n)
				}
				removeListeners(e) {
					for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) n[s - 1] = arguments[s];
					if (!this.listenerMap[e] || !this.listenerMap[e].length) return !1;
					const r = n.length,
						o = this.listenerMap[e].length;
					return this.listenerMap[e] = this.listenerMap[e].filter(e => !n.includes(e)), this.listenerMap[e].length - o === r
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
			const p = e => async (t, n, s) => {
				let {
					apiContext: l
				} = s;
				(await
					function(e) {
						return Object(r.a)(Object(o.a)(e, [a.a]), {
							endpoint: `${e.apiUrl}/api/leave_redesign_beta`,
							method: "post",
							type: "json"
						})
					}(l())).ok ? (Object(i.b)(), await m(l(), !0), e && window.location.reload()) : (m(l(), !1), t(Object(c.f)({
					kind: d.b.Error,
					text: "Sorry, something went wrong. Try Opting out again."
				})))
			}, b = () => async (e, t, n) => {
				let {
					apiContext: c
				} = n;
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
					}(c())
			}
		},
		"./src/reddit/actions/comment/authoring.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return ee
			})), n.d(t, "p", (function() {
				return ne
			})), n.d(t, "n", (function() {
				return se
			})), n.d(t, "r", (function() {
				return ae
			})), n.d(t, "u", (function() {
				return ie
			})), n.d(t, "o", (function() {
				return de
			})), n.d(t, "t", (function() {
				return le
			})), n.d(t, "m", (function() {
				return ue
			})), n.d(t, "h", (function() {
				return pe
			})), n.d(t, "a", (function() {
				return be
			})), n.d(t, "b", (function() {
				return fe
			})), n.d(t, "q", (function() {
				return ve
			})), n.d(t, "f", (function() {
				return Oe
			})), n.d(t, "g", (function() {
				return ye
			})), n.d(t, "k", (function() {
				return Ce
			})), n.d(t, "d", (function() {
				return Ee
			})), n.d(t, "c", (function() {
				return Se
			})), n.d(t, "j", (function() {
				return ke
			})), n.d(t, "i", (function() {
				return Ie
			})), n.d(t, "l", (function() {
				return Te
			})), n.d(t, "s", (function() {
				return Ae
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
				g = n("./src/reddit/constants/adEvents.ts"),
				f = n("./src/reddit/constants/localStorage.ts"),
				v = n("./src/redditGQL/operations/CommentToxicity.json"),
				O = n("./src/lib/makeApiRequest/index.ts"),
				y = n("./src/lib/makeGqlRequest/index.ts"),
				C = n("./src/lib/omitHeaders/index.ts"),
				x = n("./src/reddit/constants/headers.ts"),
				E = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				P = n("./src/reddit/helpers/genericServerError/index.ts"),
				j = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				_ = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				S = n("./src/reddit/models/PostCreationForm/index.ts"),
				k = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				w = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const M = (e, t, n, s) => {
					let r, o;
					if (s === S.i.MARKDOWN) r = n.text, o = null;
					else {
						r = null;
						let e = null;
						n.rteState && (e = h.a.toRichTextJSON(n.rteState).document), o = JSON.stringify({
							document: e
						})
					}
					return Object(y.a)(e, {
						...v,
						variables: {
							subredditName: t,
							markdown: r,
							richText: o
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				N = async (e, t, n, s, o) => {
					const a = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (o === S.i.MARKDOWN) a.text = n.text;
					else {
						a.text = null;
						let e = null;
						n.rteState && (e = h.a.toRichTextJSON(n.rteState).document), a.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(O.a)(Object(C.a)(e, [x.a]), {
						method: r.jb.POST,
						endpoint: Object(E.a)(Object(k.a)(Object(w.a)(`${e.apiUrl}/api/comment.json`))),
						data: a
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(_.a)(e)
					} : {
						...e,
						body: {
							comment: Object(j.a)(e.body.json.data.things[0].data, s)
						}
					} : {
						...e,
						body: {
							comment: Object(j.a)(e.body, s)
						}
					} : {
						...e,
						error: e.error || Object(P.a)()
					})
				};
			var I = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var T = n("./src/reddit/endpoints/post/index.tsx"),
				A = n("./src/reddit/endpoints/post/convert.ts"),
				R = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				L = n("./src/reddit/featureFlags/index.ts"),
				D = n("./src/reddit/helpers/correlationIdTracker.ts"),
				F = n("./src/reddit/helpers/dom/index.ts"),
				U = n("./src/reddit/helpers/localStorage/index.ts"),
				G = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				B = n("./src/reddit/models/Comment/index.ts"),
				q = n("./src/reddit/models/PostDraft/index.ts"),
				H = n("./src/reddit/models/RichTextJson/index.ts"),
				W = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				V = n("./src/reddit/models/Toast/index.ts"),
				Q = n("./src/reddit/selectors/comments.ts"),
				K = n("./src/reddit/selectors/commentSelector.ts"),
				z = n("./src/reddit/selectors/platform.ts"),
				J = n("./src/reddit/selectors/posts.ts"),
				Y = n("./src/reddit/selectors/user.ts"),
				Z = n("./src/reddit/actions/comment/index.ts"),
				X = n("./src/reddit/actions/comment/constants.ts");
			const $ = Object(o.a)(X.k),
				ee = e => {
					let {
						hasFocus: t,
						draftKey: n
					} = e;
					return async (e, s) => {
						const r = s();
						if (!!r.features.comments.drafts[n])
							if (Object(Y.R)(r) && t) {
								const s = $({
									hasFocus: t,
									draftKey: n
								});
								e(Object(i.f)(s))
							} else e($({
								hasFocus: t,
								draftKey: n
							}))
					}
				},
				te = Object(o.a)(X.I),
				ne = Object(o.a)(X.K),
				se = Object(o.a)(X.J),
				re = Object(o.a)(X.H),
				oe = async (e, t, n, s) => {
					const r = s.ok && s.body,
						o = r && r.comment && r.comment.id;
					await G.f(e, n, t, o)
				}, ae = "Toxicity_Warning__Modal", ie = (e, t, n, s, r, o) => async (a, i, c) => {
					let {
						gqlContext: l
					} = c;
					const u = i(),
						m = Object(z.e)(u);
					let p = "";
					if (m && (p = m.name), L.d.enableToxicityWarning(u)) {
						if (!(await M(l(), p, s, r))) return void a(Object(d.i)(ae))
					}
					a(de(e, t, n, s, r, o))
				}, ce = e => e.rteState ? h.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, de = (e, t, n, o, a, i, c) => async (u, h, f) => {
					let {
						apiContext: v
					} = f;
					u(Object(d.g)(ae));
					const O = h(),
						y = O.features.comments.submit.pending[n];
					if (!O.user.account || y) return;
					u(te({
						draftKey: n,
						draft: o
					}));
					const C = O.user.account.displayText,
						x = o.commentMode;
					let E;
					if (c ? (E = await Object(R.i)(v(), e, o, C), u(Object(m.a)({
							streamId: e,
							level: E.body.automuteLevel
						}))) : E = await N(v(), e, o, C, x), E.ok) {
						let s;
						s = E.body, u(ne({
							...s,
							headCommentId: Object(Q.w)(O, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const r = Object(J.G)(h(), {
							postId: e
						});
						u(Object(l.z)(r, g.a.CommentSubmitted))
					} else {
						E.error && E.error.type === r.Kb && G.h(O, ce(o), e);
						const t = E.error && E.error.fields && E.error.fields[0] ? E.error.fields[0].msg : s.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u(re({
							draftKey: n,
							error: E.error
						})), u(Object(b.f)({
							duration: b.a,
							kind: V.b.Error,
							text: t
						}))
					}
					oe(h(), t, a, E).then(() => E.ok && a === S.i.RICH_TEXT ? Object(D.b)(D.a.CommentComposer) : void 0), i || Object(p.d)()
				}, le = e => async (t, n, s) => {
					let {
						gqlContext: r
					} = s;
					const {
						parentCommentId: o,
						commentsPageKey: a,
						parentCommentDepth: i,
						draftKey: c,
						formData: l,
						editorMode: u
					} = e, m = n(), p = Object(z.e)(m);
					let b = "";
					if (p && (b = p.name), L.d.enableToxicityWarning(m)) {
						if (!(await M(r(), b, l, u))) return void t(Object(d.i)(ae))
					}
					t(ue({
						commentsPageKey: a,
						draftKey: c,
						parentCommentDepth: i,
						parentCommentId: o,
						formData: l,
						editorMode: u
					}))
				}, ue = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const {
						parentCommentId: a,
						commentsPageKey: i,
						parentCommentDepth: c,
						draftKey: l,
						formData: u,
						editorMode: m
					} = e;
					t(Object(d.g)(ae));
					const b = n(),
						h = b.features.comments.submit.pending[l];
					if (!b.user.account || h) return;
					t(te({
						draftKey: l,
						draft: u
					}));
					const g = b.user.account.displayText,
						f = u.commentMode,
						v = await N(o(), a, u, g, f);
					if (v.ok) t(se({
						...v.body,
						parentCommentId: a,
						commentsPageKey: i,
						draftKey: l,
						depth: c + 1
					}));
					else {
						if (v.error && v.error.type === r.Kb) {
							const e = Object(K.b)(b, {
								commentId: a
							});
							if (!e) return;
							G.h(b, ce(u), e.postId, a)
						}
						t(re({
							draftKey: l,
							error: v.error
						}))
					}
					oe(n(), i, m, v), Object(p.d)()
				}, me = Object(o.a)(X.q), pe = Object(o.a)(X.y), be = Object(o.a)(X.p), he = Object(o.a)(X.l), ge = (Object(o.a)(X.g), Object(o.a)(X.m)), fe = (Object(o.a)(X.t), (e, t, n) => async (r, o, a) => {
					let {
						apiContext: i
					} = a;
					const c = e === S.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(H.G)(t)) r(ge({
						editorMode: e,
						draftKey: n,
						content: c ? H.i : ""
					})), r(Object(u.c)(e));
					else {
						r(Object(u.b)(n));
						const o = await Object(A.a)(i(), e, c ? t : JSON.stringify(t));
						if (o.ok) {
							const t = o.body.output;
							r(Object(u.a)(n)), r(ge({
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
				}), ve = e => {
					let {
						commentsPageKey: t,
						parentCommentId: n,
						singleOpen: s
					} = e;
					return async (e, r) => {
						const o = r(),
							l = Object(a.a)(q.c.replyToComment, n);
						if (!Object(Y.P)(r())) return e(Object(c.j)()), void e(Object(d.k)({
							actionSource: d.a.Reply,
							redirectUrl: Object(Q.m)(r(), {
								commentId: n
							})
						}));
						const u = o.features.comments.replyFormOpen[t],
							m = u && u[n];
						if ((m || u && s) && (Object.keys(u).forEach(n => u[n] && e(be({
								parentCommentId: n,
								commentsPageKey: t
							}))), m)) return;
						let p = "",
							b = null;
						const h = o.user.prefs.commentMode,
							g = Object(F.d)();
						if (g) {
							const e = g.filter(e => !!e && 10 !== e.charCodeAt(0));
							if (h === S.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
							else {
								const t = e.map(e => W.s(e, null)).map(e => W.l([e])),
									n = W.s("", null),
									s = W.l([n]);
								b = {
									document: [W.c(t), s]
								}
							}
						}
						const f = o.features.comments.drafts[l];
						let v;
						if (v = g ? {
								commentMode: h,
								draftType: q.c.replyToComment,
								rtJson: b,
								text: `${p}\n`
							} : f || {
								commentMode: h,
								draftType: q.c.replyToComment,
								rtJson: b,
								text: ""
							}, Object(Y.R)(o)) {
							const s = me({
								parentCommentId: n,
								commentsPageKey: t,
								draftKey: l,
								formData: v
							});
							e(Object(i.f)(s))
						} else e(me({
							parentCommentId: n,
							commentsPageKey: t,
							draftKey: l,
							formData: v
						}))
					}
				}, Oe = e => async t => {
					t(Object(Z.p)(e)), t(Ee(e))
				}, ye = e => {
					let {
						parentCommentId: t,
						commentsPageKey: n
					} = e;
					return async e => {
						e(be({
							parentCommentId: t,
							commentsPageKey: n
						})), e(ve({
							parentCommentId: t,
							commentsPageKey: n
						})), e(Object(Z.p)({
							commentId: t,
							commentsPageKey: n
						}))
					}
				}, Ce = (e, t) => n => n(he({
					draftKey: e,
					formData: t
				})), xe = Object(o.a)(X.s), Ee = e => {
					let {
						commentId: t,
						commentMode: n,
						commentsPageKey: s,
						draftKey: r,
						text: o
					} = e;
					return async (e, a) => {
						const i = a();
						i.user.account && (G.c(i), e(xe({
							commentId: t,
							commentsPageKey: s,
							draftKey: r,
							formData: {
								text: o,
								commentMode: n,
								rteState: null,
								draftType: q.c.edit,
								hasFocus: !0
							}
						})))
					}
				}, Pe = Object(o.a)(X.D), je = Object(o.a)(X.C), _e = Object(o.a)(X.E), Se = Object(o.a)(X.h), ke = e => {
					let {
						id: t,
						commentsPageKey: n,
						depth: s,
						draftKey: o,
						formData: a
					} = e;
					return async (e, s, i) => {
						let {
							apiContext: c
						} = i;
						const d = s();
						if (!d.user.account) return;
						e(Pe({
							draftKey: o
						})), G.d(d);
						const l = d.user.account.displayText || "",
							u = a.commentMode,
							m = await (async (e, t, n, s, o, a) => {
								const i = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: t
								};
								if (a === S.i.MARKDOWN) i.text = s.text;
								else {
									i.text = null;
									let e = null;
									s.rteState && (e = h.a.toRichTextJSON(s.rteState).document), i.richtext_json = JSON.stringify({
										document: e
									})
								}
								return Object(O.a)(Object(C.a)(e, [x.a]), {
									endpoint: Object(E.a)(Object(w.a)(Object(k.a)(`${e.apiUrl}/api/editusertext`))),
									method: r.jb.POST,
									data: i
								}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
									...e,
									ok: !1,
									error: Object(_.a)(e)
								} : {
									...e,
									body: {
										comment: Object(j.a)(e.body.json.data.things[0].data, o)
									}
								} : {
									...e,
									body: {
										comment: Object(j.a)(e.body, o)
									}
								} : {
									...e,
									error: e.error || Object(P.a)()
								})
							})(c(), t, 0, a, l, u);
						if (m.ok) {
							const s = m.body;
							e(_e({
								commentId: t,
								commentsPageKey: n,
								draftKey: o
							})), e(Object(Z.i)({
								[t]: {
									...s.comment
								}
							}))
						} else e(je({
							draftKey: o,
							error: m.error
						}))
					}
				}, we = Object(o.a)(X.A), Me = Object(o.a)(X.z), Ne = Object(o.a)(X.B), Ie = (e, t) => async (n, s, o) => {
					let {
						apiContext: a
					} = o;
					const i = s();
					n(we({
						id: e
					})), G.a(e, i);
					const c = await ((e, t) => Object(O.a)(Object(C.a)(e, [x.a]), {
						endpoint: Object(E.a)(`${e.apiUrl}/api/del`),
						method: r.jb.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(_.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(P.a)()
					}))(a(), e);
					c.ok ? n(Ne({
						id: e,
						postId: t
					})) : n(Me({
						id: e,
						error: c.error
					}))
				}, Te = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const o = !n().features.comments.models[e].sendReplies;
					t(Object(Z.i)({
						[e]: {
							sendReplies: o
						}
					})), (await Object(T.q)(r(), e, o)).ok || t(Object(Z.i)({
						[e]: {
							sendReplies: !o
						}
					}))
				}, Ae = (e, t) => async (n, r, o) => {
					let {
						gqlContext: a
					} = o;
					var i, c, d, l, u, m;
					n(Object(Z.c)());
					const p = e => Object(b.f)(Object(b.e)(e, V.b.Error));
					if (((null === (c = null === (i = r().pages) || void 0 === i ? void 0 : i.comments) || void 0 === c ? void 0 : c.followed) || []).length === f.a) n(p(s.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const o = t === B.a.FOLLOWED,
							i = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(Z.n)(i)), (await ((e, t) => Object(y.a)(e, {
								...I,
								variables: {
									input: t
								}
							}))(a(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(U.wb)(null !== (u = null === (l = null === (d = r().pages) || void 0 === d ? void 0 : d.comments) || void 0 === l ? void 0 : l.followed) && void 0 !== u ? u : [], null === (m = r().user.account) || void 0 === m ? void 0 : m.id);
							const e = o ? s.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : s.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							n(Object(b.f)({
								kind: V.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(Z.n)(i)), n(p(s.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
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
				return y
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "a", (function() {
				return x
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
				g = Object(s.a)(r.f),
				f = Object(s.a)(r.d),
				v = Object(s.a)(r.a),
				O = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const r = t(),
						c = Object(m.k)(r);
					if (c && c.isEmployee) try {
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
						})(s());
						e(p(t))
					} catch (l) {
						e(b()), e(Object(o.f)({
							duration: o.a,
							kind: d.b.Error,
							text: l.message
						}))
					}
				}, y = e => async (t, n, s) => {
					let {
						gqlContext: r
					} = s;
					const c = n(),
						u = Object(m.k)(c);
					if (u && u.isEmployee) {
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
							})(r(), e);
							t(g(n))
						} catch (p) {
							t(f()), t(Object(o.f)({
								duration: o.a,
								kind: d.b.Error,
								text: p.message
							}))
						}
					}
				}, C = e => async (t, n, s) => {
					let {
						gqlContext: r
					} = s;
					const c = n(),
						l = Object(m.k)(c);
					if (!l || !l.isEmployee) return;
					const p = Object(u.b)(c);
					if (p) try {
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
						})(r(), p.prefixedId, e);
						t(v({
							entity: n,
							type: e
						}))
					} catch (b) {
						t(Object(o.f)({
							duration: o.a,
							kind: d.b.Error,
							text: b.message
						}))
					}
				}, x = (e, t, n) => async (s, r, i) => {
					let {
						gqlContext: l
					} = i;
					const p = r(),
						b = Object(m.k)(p);
					if (b && b.isEmployee && Object(u.b)(p)) try {
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
						})(l(), e, t, n), s(Object(o.f)({
							duration: o.a,
							kind: d.b.SuccessCommunityGreen,
							text: `${t} executed successfully for ${e}`
						}))
					} catch (h) {
						s(Object(o.f)({
							duration: o.a,
							kind: d.b.Error,
							text: h.message
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
				m = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const i = e && e.includeMemberships || !1,
						c = e && e.forceFetch || !1,
						l = n();
					if (!l.economics.me.fetched || i && !l.economics.me.data.specialMemberships || c) {
						const e = await
						function(e, t) {
							return Object(a.a)(e, {
								method: "get",
								endpoint: `${o.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(r(), i);
						if (e.ok) {
							const n = e.body;
							i && !n.specialMemberships && (n.specialMemberships = {}), t(d(n))
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
					m(), Object(u.a)(n) && (await e(Object(i.A)()), Object(u.a)(t()) && e(Object(a.d)({
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
			const u = e => async (t, n, r) => {
				let {
					apiContext: o
				} = r;
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
			}, m = e => async (t, n, s) => {
				let {
					apiContext: c
				} = s;
				const l = await ((e, t) => Object(o.a)(Object(a.a)(e, [i.a]), {
					method: r.jb.POST,
					endpoint: `${e.apiUrl}/api/v1/verify_email/${t}`,
					data: {}
				}))(c(), e);
				if (l.ok && l.body && l.body.success) return d.a.Success;
				switch (l.body.reason) {
					case d.a.AlreadyVerified:
						return d.a.AlreadyVerified;
					case d.a.WrongUser:
						return d.a.WrongUser;
					default:
						return d.a.Error
				}
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
				})), Object(a.P)(i) || await t(r.t());
				const d = n();
				if (!Object(a.P)(d)) return t(Object(s.f)())
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
				Object(r.P)(n) || await e(s.t());
				const o = t();
				if (!Object(r.P)(o)) throw new Error("Failed to login")
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
				a = n("./src/reddit/endpoints/gold/productCatalog/old.index.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				c = n("./src/lib/initializeClient/installReducer.ts"),
				d = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(c.a)({
				features: {
					avatar: d.a
				}
			});
			const l = Object(r.a)(i.s);
			class SpecialEventsError extends Error {
				constructor() {
					super(...arguments), this.response = null
				}
			}
			const u = () => async (e, t, n) => {
				let {
					gqlContext: r
				} = n;
				try {
					const t = await Object(a.d)(r());
					if (!t.ok) {
						const e = new SpecialEventsError("Got bad response in GQL call for special events");
						throw e.response = t, e
					} {
						const n = t.body.data.econSpecialEvents;
						await e(l(n))
					}
				} catch (i) {
					Object(s.b)() || console.error(i), o.c.withScope(e => {
						var t, n;
						e.setExtra("response", i.response), e.setExtra("status", null === (t = i.response) || void 0 === t ? void 0 : t.status), e.setExtra("graphql_error", null === (n = i.response) || void 0 === n ? void 0 : n.error), o.c.captureException(i)
					})
				}
			}
		},
		"./src/reddit/actions/moderationLog/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = "SUBREDDIT__MODERATION_LOG_LOADED",
				r = "SUBREDDIT__ALL_MODERATORS_LOADED"
		},
		"./src/reddit/actions/notificationsInbox/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return I
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "b", (function() {
				return U
			})), n.d(t, "i", (function() {
				return G
			})), n.d(t, "f", (function() {
				return B
			})), n.d(t, "c", (function() {
				return q
			})), n.d(t, "a", (function() {
				return H
			})), n.d(t, "h", (function() {
				return V
			})), n.d(t, "j", (function() {
				return Q
			})), n.d(t, "g", (function() {
				return z
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
				g = n("./src/redditGQL/operations/NotificationInboxFeedSlimmed.json"),
				f = n("./src/reddit/constants/headers.ts"),
				v = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var O;
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(O || (O = {}));
			var y = n("./src/redditGQL/operations/DeleteInboxNotifications.json");
			n("./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts");
			var C = n("./src/redditGQL/operations/UpdateInboxActivitySeenState.json");
			var x = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				E = n("./src/reddit/helpers/trackers/inbox.ts"),
				P = n("./src/reddit/models/Badge/index.ts"),
				j = n("./src/reddit/models/NotificationInbox/index.ts"),
				_ = n("./src/reddit/models/Toast/index.ts"),
				S = n("./src/reddit/selectors/appBadges.ts"),
				k = (n("./src/reddit/selectors/notificationPrefs.ts"), n("./src/reddit/selectors/notificationsInbox.tsx"));
			const w = Object(r.a)(a.e),
				M = Object(r.a)(a.b),
				N = Object(r.a)(a.a),
				I = e => async (t, n, s) => {
					let {
						gqlContext: r
					} = s;
					var o, a;
					const i = n(),
						l = Object(k.a)(i);
					t(w());
					const u = await ((e, t) => Object(d.a)(e, {
						...h,
						variables: t
					}))(r(), e);
					if (null === (a = null === (o = u.error) || void 0 === o ? void 0 : o.fields) || void 0 === a ? void 0 : a.length) return t(N({
						error: u.error
					})), void t(Object(c.d)());
					const m = u && u.body,
						p = A(m);
					if (null === l) {
						const e = Object(k.f)(i);
						t(L(p.nodes, e.length))
					}
					t(M(p))
				}, T = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					var r, o;
					const a = await (e => Object(d.a)(e, {
						...g
					}))(s());
					if (null === (o = null === (r = a.error) || void 0 === r ? void 0 : r.fields) || void 0 === o ? void 0 : o.length) return;
					const i = a && a.body,
						c = R(i).nodes.filter(e => !e.viewedAt);
					c.length && c.forEach(e => {
						var n;
						Object(E.s)({
							id: e.id,
							isClicked: !1,
							isViewed: Boolean(e.viewedAt),
							type: null === (n = e.context) || void 0 === n ? void 0 : n.messageType
						})(t())
					})
				}, A = e => {
					const t = e && e.data,
						n = t && t.notificationInbox,
						s = n && n.elements,
						r = s && s.pageInfo;
					return {
						nodes: (s && s.edges).map(e => e.node),
						pageInfo: r
					}
				}, R = e => {
					var t, n;
					return {
						nodes: null === (n = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.notificationInbox) || void 0 === n ? void 0 : n.elements.edges.map(e => e.node)
					}
				}, L = (e, t) => async (n, s) => {
					const r = s(),
						o = Object(k.a)(r),
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
					a && a !== o && n(D({
						index: a
					}))
				}, D = Object(r.a)(a.g), F = (Object(r.a)(a.h), Object(r.a)(a.f)), U = e => async (t, n, r) => {
					let {
						gqlContext: o
					} = r;
					const a = [e];
					if ((await ((e, t) => Object(d.a)(e, {
							...y,
							variables: {
								input: t
							}
						}))(o(), {
							notificationIds: a
						})).ok) {
						t(F({
							id: e
						}));
						const r = Object(k.f)(n());
						t(L(r)), t(Object(c.f)(Object(c.e)(s.fbt._("Notification hidden", null, {
							hk: "1jfPqO"
						}), _.b.SuccessCommunityGreen)))
					} else t(Object(c.f)(Object(c.e)(s.fbt._("Failed to hide notification, please try again.", null, {
						hk: "fL7uB"
					}), _.b.Error)))
				}, G = (e, t) => async (n, r, o) => {
					let {
						gqlContext: a
					} = o;
					if (!e) return;
					(await Object(x.b)(a(), e, {
						isSubredditUpdatesInterestingPostEnabled: !0,
						isUpdateFromSubredditEnabled: !0
					})).ok ? (t && t(), n(Object(c.f)(Object(c.e)(s.fbt._("Success! Undone hiding notifications from this community.", null, {
						hk: "1na0NP"
					}), _.b.SuccessCommunityGreen)))) : n(Object(c.f)(Object(c.e)(s.fbt._("Failed to undo hiding notifications, please try again.", null, {
						hk: "4jo7Pf"
					}), _.b.Error)))
				}, B = (e, t) => async (n, r, o) => {
					let {
						gqlContext: a
					} = o;
					if (!e) return;
					(await Object(x.b)(a(), e, {
						isSubredditUpdatesInterestingPostEnabled: !1,
						isUpdateFromSubredditEnabled: !1
					})).ok ? n((() => {
						const n = s.fbt._("Success! You won't see notifications from this community in the future.", null, {
							hk: "2tkhbk"
						});
						return Object(c.f)(Object(c.e)(n, _.b.Undo, s.fbt._("Undo", null, {
							hk: "4zFGDk"
						}), G(e, t)))
					})()) : n(Object(c.f)(Object(c.e)(s.fbt._("Failed to hide notifications, please try again.", null, {
						hk: "KEGcB"
					}), _.b.Error)))
				}, q = e => async (t, n, r) => {
					let {
						apiContext: o
					} = r;
					if (!e) return;
					(await ((e, t) => Object(p.a)(Object(b.a)(e, [f.a]), {
						endpoint: Object(v.a)(`${e.apiUrl}/api/sendreplies`),
						method: m.jb.POST,
						data: {
							id: t
						}
					}))(o(), e)).ok ? t(Object(c.f)(Object(c.e)(s.fbt._("Success! You won't see updates on this in the future", null, {
						hk: "wtDa4"
					}), _.b.SuccessCommunityGreen))) : t(Object(c.f)(Object(c.e)(s.fbt._("Failed to turn off updates on this, please try again", null, {
						hk: "1zhpEy"
					}), _.b.Error)))
				}, H = e => async (t, n, r) => {
					let {
						gqlContext: o
					} = r;
					if (!e) return;
					(await u(o(), {
						awardingId: e
					})).ok ? t(Object(c.f)(Object(c.e)(s.fbt._("Success! Awarder has been blocked", null, {
						hk: "2D5PUk"
					}), _.b.SuccessCommunityGreen))) : t(Object(c.f)(Object(c.e)(s.fbt._("Failed to block awarder, please try again", null, {
						hk: "2dxeA8"
					}), _.b.Error)))
				}, W = Object(r.a)(a.d), V = (e, t) => async (n, s, r) => {
					let a, {
						apiContext: c
					} = r;
					if (t === j.a.CommentReply || t === j.a.PostReply || t === j.a.PrivateMessage || t === j.a.UsernameMention) {
						if ((a = await ((e, t) => Object(p.a)(Object(b.a)(e, [f.a]), {
								endpoint: Object(v.a)(`${e.apiUrl}/api/read_message`),
								method: m.jb.POST,
								data: {
									id: t
								}
							}))(c(), e)).ok) {
							let e = Object(S.a)(s());
							if (e > 0) {
								e--;
								const t = Object(o.e)({
									count: e,
									key: P.c.ActivityTab
								});
								n(Object(o.a)(t)), n(Object(i.e)())
							}
						}
					} else a = await ((e, t) => Object(p.a)(Object(b.a)(e, [f.a]), {
						endpoint: Object(v.a)(`${e.apiUrl}/api/read_notification`),
						method: m.jb.POST,
						data: {
							id: t
						}
					}))(c(), e);
					if (a.ok) {
						const t = (new Date).toISOString();
						n(W({
							id: e,
							now: t
						}))
					}
				}, Q = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const r = (new Date).toLocaleDateString(),
						a = await ((e, t) => Object(d.a)(e, {
							...C,
							variables: {
								input: t
							}
						}))(s(), {
							lastSentAt: r
						});
					if (a.ok) {
						const t = a.body,
							n = t && t.data && t.data.updateInboxActivitySeenState && t.data.updateInboxActivitySeenState.badgeIndicators;
						n && (e(Object(o.a)(n)), e(Object(i.d)()))
					}
				}, K = Object(r.a)(a.c), z = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					const {
						notificationsInbox: {
							markAllAsReadTimestamp: a
						}
					} = t(), i = new Date;
					if (!a || i.getTime() - new Date(a).getTime() > 15e3) {
						if ((await ((e, t) => Object(p.a)(Object(b.a)(e, [f.a]), {
								endpoint: Object(v.a)(`${e.apiUrl}/api/read_all_messages`),
								method: m.jb.POST,
								data: {
									filter_types: null == t ? void 0 : t.join(",")
								}
							}))(r(), [O.Activity, O.Messages])).ok) {
							const t = Object(o.e)({
									count: 0,
									key: P.c.MessageTab
								}),
								n = Object(o.e)({
									count: 0,
									key: P.c.ActivityTab
								});
							e(Object(o.a)({
								...t,
								...n
							})), e(K({
								now: i.toISOString()
							}))
						} else e(Object(c.f)(Object(c.e)(s.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "VW7c3"
						}), _.b.Error)))
					}
				}
		},
		"./src/reddit/actions/pages/avatar.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				r = n("./src/reddit/actions/platform.ts"),
				o = n("./src/reddit/actions/users.ts"),
				a = n("./src/reddit/selectors/user.ts"),
				i = n("./src/reddit/actions/login.ts");
			t.a = () => async (e, t) => {
				e(Object(r.m)({
					title: Object(s.a)()
				})), await e(Object(o.t)()), Object(a.P)(t()) || e(Object(i.i)())
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
					d = Object(c.P)(n),
					l = Object(c.M)(n);
				d && l || await e(Object(s.c)("/")), e(Object(o.m)({
					title: "Econ control panel"
				})), await e(Object(r.c)());
				n.platform.currentPage.queryParams[i.b]
			}
		},
		"./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				r = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				o = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				e(Object(o.m)({
					title: Object(s.d)()
				})), Object(i.P)(t()) || await e(Object(a.t)()), await e(Object(r.b)()).then(() => {
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
						Object(c.P)(l) || n.push(e(Object(a.t)()));
						const u = Object(s.a)(d, null);
						n.push(e(Object(o.subredditDataRequested)(u, d, {}))), await Promise.all(n);
						const m = Object(i.D)(t(), d);
						await e(Object(r.a)({
							subredditId: m,
							skip: ["badges", "tips", "wallets"]
						}))
					}
				}
			}
		},
		"./src/reddit/actions/pages/predictions.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				r = n("./src/reddit/actions/platform.ts"),
				o = n("./src/reddit/actions/subreddit.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				e(Object(r.m)({
					title: Object(s.j)()
				})), await e(Object(a.t)()), Object(i.P)(t()) && await e(Object(o.q)())
			}
		},
		"./src/reddit/actions/pages/talk.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
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
				return g
			})), n.d(t, "c", (function() {
				return f
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
				g = (e, t, n) => async (r, i, g) => {
					let {
						apiContext: v
					} = g;
					c.m(i(), t);
					const O = t === d.i.MARKDOWN,
						y = t === d.i.RICH_TEXT,
						C = m.k;
					if (O && Object(l.G)(n)) return r(h({
						editorKey: e,
						editorMode: d.i.MARKDOWN,
						content: ""
					})), void r(f(t));
					if (y && !n) return r(h({
						editorKey: e,
						editorMode: d.i.RICH_TEXT,
						content: l.i
					})), void r(f(t));
					r(p(C));
					const x = await Object(a.a)(v(), t, O ? JSON.stringify(n) : n);
					x.ok ? (r(b(C)), r(h({
						editorKey: e,
						editorMode: t,
						content: x.body.output
					})), r(f(t))) : (r(b(C)), r(Object(o.f)({
						duration: o.a,
						kind: u.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, f = e => async (t, n) => {
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
					})), Object(i.sb)(r + 1)
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
				c = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const c = await Object(r.a)(o(), e);
					c && c.ok ? t(a({
						streamId: e,
						level: c.body.data.auto_mute_status.level
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
				h = (e, t) => async (n, u, m) => {
					let {
						apiContext: h
					} = m;
					const g = u();
					for (const e of b)
						if (e(g)) return;
					const f = document.activeElement,
						v = g.shortcuts.activeCommentId,
						O = Object(p.c)(g);
					if (f && "true" === f.contentEditable && v && O) n(r.a({
						parentCommentId: v,
						commentsPageKey: O
					})), Object(p.a)(v);
					else if (Object(l.b)(g)) Object(p.b)(i.b), n(Object(o.i)(Object(l.b)(g)));
					else if (g.toaster[0]) Object(p.b)(i.b), n(Object(a.g)(g.toaster[0].id));
					else if (g.shortcuts.namespace === i.d.Lightbox && g.platform.currentPage) {
						const e = g.platform.currentPage.locationState.closeLocation;
						e && (Object(p.b)(i.b), n(Object(s.b)(e)))
					}
					const {
						activePostId: y
					} = g.shortcuts;
					e(t && y ? c.b(y, "close", !0) : d.a)
				}
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
				g = Object(p.a)(b.b);
			var f = n("./src/reddit/actions/survey/index.ts"),
				v = n("./src/reddit/actions/toaster.ts"),
				O = n("./src/reddit/components/TrackingHelper/index.tsx"),
				y = n("./src/reddit/constants/accountManager.ts"),
				C = n("./src/reddit/constants/history.ts"),
				x = n("./src/reddit/constants/modals.ts"),
				E = n("./src/reddit/constants/parameters.ts"),
				P = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				j = n("./src/reddit/helpers/history/index.ts"),
				_ = n("./src/reddit/helpers/trackers/blockingInterstitial.ts"),
				S = n("./src/reddit/helpers/trackers/moreReplies.ts"),
				k = n("./src/reddit/helpers/trackers/onboarding.ts"),
				w = n("./src/reddit/icons/svgs/Close/index.tsx"),
				M = n("./src/reddit/models/Sso/index.ts"),
				N = n("./src/reddit/models/Toast/index.ts"),
				I = n("./src/reddit/selectors/accountManager/index.ts"),
				T = n("./src/reddit/selectors/accountManager/modalData.ts"),
				A = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				R = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				L = n("./src/reddit/selectors/experiments/moreRepliesSignup.ts"),
				D = n("./src/reddit/selectors/experiments/survey.ts"),
				F = n("./src/reddit/selectors/telemetry.ts"),
				U = n("./src/reddit/selectors/user.ts"),
				G = n("./src/reddit/components/AccountManagerModal/IFrame/index.m.less"),
				B = n.n(G);
			const q = l.a.iframe("IFrame", B.a),
				H = l.a.button("CloseButton", B.a),
				W = l.a.wrapped(w.a, "Close", B.a),
				V = Object(c.c)({
					accountManagerSrc: I.a,
					actionSource: T.a,
					frontpageSignupVariant: A.a,
					isBlockingInterstitialEnabled: R.b,
					isDismissSurveyEnabled: D.a,
					isHardBlockingInterstitialEnabled: R.c,
					isLoggedIn: U.P,
					isMoreRepliesSignupEnabled: L.a,
					redirectUrl: T.b
				}),
				Q = Object(i.b)(V, (e, t) => ({
					onDismissSignupTrigger: () => e(Object(f.d)()),
					oniFrameLoaded: (t, n) => {
						e((e, s) => {
							t.contentWindow.postMessage({
								events: {
									...Object(F.o)(s()),
									actionSource: n
								},
								type: "eventData"
							}, Object(P.a)())
						})
					},
					onTwoFactorChanged: () => e(Object(m.A)(!1)),
					onSSOLinkSuccess: (t, n, s) => {
						e(h({
							linkedIdentity: n
						})), e(Object(u.g)(s)), e(Object(v.f)(Object(v.e)(t, N.b.SuccessCommunity)))
					},
					onSSOUnlinkSuccess: (t, n, s) => {
						e(g({
							linkedIdentity: n
						})), e(Object(u.g)(s)), e(Object(v.f)(Object(v.e)(t, N.b.SuccessCommunity)))
					},
					showToast: (t, n) => {
						e(Object(v.f)(Object(v.e)(t, n)))
					}
				})),
				K = e => {
					let {
						data: t,
						origin: n
					} = e;
					return t && t.success && (t.type === y.a.ChangePassword || t.type === y.a.Close || t.type === y.a.CreateAccount || t.type === y.a.GoogleOneTapDisplayed || t.type === y.a.GoogleOneTapFlowFailed || t.type === y.a.GoogleOneTapSkipped || t.type === y.a.Login || t.type === y.a.PreferenceStatus || t.type === y.a.Register || t.type === y.a.Resize || t.type === y.a.ShowStep || t.type === y.a.SSOLinkFail || t.type === y.a.SSOLinkSuccess || t.type === y.a.SSOUnlinkFail || t.type === y.a.SSOUnlinkSuccess || t.type === y.a.Subscribe || t.type === y.a.TwoFactorChanged) && n === s.a.accountManagerOrigin
				},
				z = {
					"select-account": "link_account",
					"confirm-otp": "link_account_otp",
					"confirm-password": "link_account_password"
				};
			class J extends a.a.Component {
				constructor() {
					var e;
					super(...arguments), e = this, this.iframeRef = a.a.createRef(), this.isAccountCreated = !1, this.isSignupModalDismissed = !1, this.isSignupModalSuccessful = !1, this.trackResizing = !0, this.currentStep = null, this.state = {
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
						const t = e === M.a.Apple ? x.a.LINK_APPLE_SSO : x.a.LINK_GOOGLE_SSO;
						this.props.onSSOLinkSuccess(r.fbt._("Account connected", null, {
							hk: "2X2Y2n"
						}), e, t)
					}, this.handleUnlinkSSOSuccess = e => {
						const t = e === M.a.Apple ? x.a.UNLINK_APPLE_SSO : x.a.UNLINK_GOOGLE_SSO;
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
							if (t.type === y.a.CreateAccount) this.isAccountCreated = !0;
							else if (t.type === y.a.Close) this.closedByUser();
						else if (t.type === y.a.Subscribe) this.onSubscribe(t.subscriptions || t.subredditIds);
						else if (t.type === y.a.Login) this.onLogIn();
						else if (t.type === y.a.ChangePassword) this.onChangePassword();
						else if (t.type === y.a.Resize) {
							if (t.payload && this.trackResizing) {
								const e = t.payload;
								e.height && e.width && this.setIframeStyles(e)
							}
						} else if (t.type === y.a.TwoFactorChanged) this.props.onTwoFactorChanged();
						else if (t.type === y.a.SSOLinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === y.a.SSOLinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleLinkSSOSuccess(e)
						} else if (t.type === y.a.SSOUnlinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === y.a.SSOUnlinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleUnlinkSSOSuccess(e)
						} else t.type === y.a.GoogleOneTapDisplayed ? this.props.isLoggedIn || (this.setIframeStyles({
							visibility: "visible"
						}), this.onGoogleOneTapUIViewed()) : t.type === y.a.GoogleOneTapFlowFailed ? this.props.isLoggedIn || this.onGoogleOneTapFlowFailed(t.message) : t.type === y.a.GoogleOneTapSkipped ? this.props.isLoggedIn || (this.props.onGoogleOneTapSkipped && this.props.onGoogleOneTapSkipped(t.reason), this.close()) : t.type === y.a.ShowStep ? this.onShowStep(t.step) : t.type === y.a.PreferenceStatus ? this.onEmailDigestsStatus(t.successfullySet) : this.onSignUp(t.numberSubredditsSelected, t.subredditIds)
					}, this.onSubscribe = e => {
						this.props.onSubscriptionsChanged && this.props.onSubscriptionsChanged(e || [])
					}, this.onLogIn = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : (Object(j.a)(C.b.JustLoggedIn, !0), window.location.reload())
					}, this.onChangePassword = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : window.location.reload()
					}, this.onSignUp = (e, t) => {
						const {
							redirectUrl: n
						} = this.props;
						let s = "";
						s = n || window.location.href, this.isSignupSurveyTriggerSource() && (this.isSignupModalSuccessful = !0), this.redirectTo(s, !0)
					}, this.onShowStep = e => {
						this.currentStep = e, e === y.b.Subscribe && (this.trackResizing = !1, this.setIframeStyles({
							height: void 0,
							width: void 0
						})), this.props.onShowScreen && this.props.onShowScreen(e)
					}, this.onGoogleOneTapFlowFailed = e => {
						this.close(), this.props.showToast(e || r.fbt._("Something went wrong. Please try again later", null, {
							hk: "3TdJZE"
						}), N.b.Error)
					}, this.onEmailDigestsStatus = e => {
						e ? this.props.showToast(r.fbt._("Changes saved", null, {
							hk: "6bifV"
						}), N.b.SuccessCommunity) : this.props.showToast(r.fbt._("Something went wrong. Please try again later", null, {
							hk: "1M3Z2N"
						}), N.b.Error)
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.onGoogleOneTapUIViewed && this.props.onGoogleOneTapUIViewed()
					}, this.redirectTo = function(t) {
						let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
						const s = {
							[E.q]: "true"
						};
						n && (s[E.x] = "true"), e.isSignupModalSuccessful && (s[E.y] = "true"), window.location.replace(Object(d.a)(t, s))
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
							e && r(Object(k.q)(e))
						}
						this.isSignupSurveyTriggerSource() && (this.isSignupModalDismissed = !0), n && r(Object(S.b)()), e && r(Object(_.a)()), this.close(), this.isSignupModalDismissed && t && s()
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
					this.props.path !== e.path && e.path === y.c.GoogleOneTap && this.iframeRef.current && this.setIframeStyles({
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
					} = this.state, i = (r === y.c.Index || r === y.c.Register) && (t === u.a.UserProfile || t === u.a.FeedPost || t === u.a.Comments || t === u.a.FeedScroll || t === u.a.CommentsScroll) && s, c = this.props.showCloseButton && !i;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(q, {
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
			t.a = Q(Object(O.c)(J))
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
				return Lm
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
				g = n("./src/reddit/contexts/NavbarExp.ts"),
				f = n("./node_modules/reselect/es/index.js"),
				v = n("./src/lib/classNames/index.ts"),
				O = n("./src/lib/constants/index.ts"),
				y = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				C = n("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				x = n("./src/lib/fastdom/index.ts"),
				E = n("./src/lib/FocusTrap/index.ts"),
				P = n("./src/lib/isEqualWithoutKey/index.ts"),
				j = n("./src/lib/isSimpleClick/index.ts"),
				_ = n("./src/reddit/actions/header.ts"),
				S = n("./src/reddit/actions/survey/index.ts"),
				k = n("./src/reddit/components/EmailCollection/Banner/Loader.ts"),
				w = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				M = n("./node_modules/polished/dist/polished.es.js"),
				N = n("./node_modules/react-motion/lib/react-motion.js"),
				I = n("./src/lib/lessComponent.tsx"),
				T = n("./src/reddit/components/AccountManagerModal/IFrame/index.tsx"),
				A = n("./src/reddit/components/TrackingHelper/index.tsx"),
				R = n("./src/reddit/constants/accountManager.ts"),
				L = n("./src/reddit/helpers/trackers/onboarding.ts"),
				D = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				F = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				U = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				G = n("./src/config.ts"),
				B = n("./src/reddit/components/Carousel/index.m.less"),
				q = n.n(B);
			! function(e) {
				e.Fade = "fade", e.Slide = "slide"
			}(s || (s = {}));
			class H extends m.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.timeoutNumber = null, this.handleNextPage = () => {
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
					}, this.setPageInterval = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
						t.clearPageInterval(), t.timeoutNumber = window.setTimeout(t.handleNextPage, t.props.itemTime + e)
					}, this.handleItemClick = () => {
						this.clearPageInterval(), this.handleNextPage()
					}, this.renderItemExtra = e => {
						let {
							img: t,
							style: n
						} = e;
						return m.a.createElement("img", {
							key: t,
							src: `${G.a.assetPath}/${t}`,
							style: n
						})
					}, this.renderItem = (e, t) => {
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
							className: Object(v.a)(q.a.item, q.a[n]),
							key: `item-${t}`,
							style: {
								...i,
								backgroundImage: `url("${G.a.assetPath}/${e.img}")`,
								width: r
							},
							onClick: o ? this.handleItemClick : void 0
						}, e.extra && e.extra.map(this.renderItemExtra))
					}, this.renderIndicator = (e, t) => m.a.createElement("div", {
						className: Object(v.a)(q.a.indicator, {
							[q.a.indicatorSelected]: this.state.pageNumber % this.props.items.length === t
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
						className: Object(v.a)(e, q.a.container)
					}, m.a.createElement("article", {
						className: q.a.items
					}, this.state.items.map(this.renderItem)), t && m.a.createElement("footer", {
						className: q.a.indicators
					}, n.map(this.renderIndicator)))
				}
			}
			var W = n("./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less"),
				V = n.n(W);
			const Q = I.a.div("Container", V.a),
				K = I.a.wrapped(H, "Carousel", V.a),
				z = I.a.div("Phone", V.a),
				J = I.a.img("Frame", V.a),
				Y = `${G.a.assetPath}/img/frontpage-signup/android-frame.png`,
				Z = `${G.a.assetPath}/img/frontpage-signup/iphone-frame.png`,
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
					return m.a.createElement(Q, {
						className: t
					}, m.a.createElement(z, {
						className: V.a.android
					}, m.a.createElement(K, {
						animationType: s.Fade,
						className: V.a.android,
						delay: 2500,
						items: X,
						itemTime: 5e3,
						itemWidth: 240
					}), m.a.createElement(J, {
						src: Y
					})), m.a.createElement(z, {
						className: V.a.iphone
					}, m.a.createElement(K, {
						animationType: s.Fade,
						className: V.a.iphone,
						items: $,
						itemTime: 5e3,
						itemWidth: 232
					}), m.a.createElement(J, {
						src: Z
					})))
				},
				te = n("./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less"),
				ne = n.n(te);
			const se = I.a.div("Container", ne.a),
				re = I.a.span("Disclaimer", ne.a),
				oe = I.a.a("Link", ne.a);
			var ae = e => m.a.createElement(se, {
					className: e.className
				}, m.a.createElement(oe, {
					href: "https://www.redditinc.com/"
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
					href: "https://www.redditinc.com/careers"
				}, r.fbt._("careers", null, {
					hk: "1nRiZW"
				})), m.a.createElement(oe, {
					href: "https://www.reddithelp.com"
				}, r.fbt._("help", null, {
					hk: "3CJ8k2"
				})), m.a.createElement(oe, {
					href: "https://www.redditinc.com/press"
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
				le = I.a.div("Container", ce.a),
				ue = I.a.wrapped(T.a, "IFrame", ce.a),
				me = I.a.wrapped(ee, "Images", ce.a),
				pe = I.a.wrapped(ae, "Links", ce.a),
				be = I.a.div("MainContent", ce.a),
				he = I.a.div("MainContentColumn", ce.a),
				ge = I.a.button("NotReady", ce.a),
				fe = I.a.span("NotReadyText", ce.a),
				ve = I.a.wrapped(D.a, "NotReadyIcon", ce.a),
				Oe = Object(y.a)(e => {
					const {
						className: t,
						containerRef: n,
						frontpageSignupVariant: s,
						onCloseClick: o,
						onVisibilityChange: a
					} = e, i = Object(F.a)(e).bodyText;
					return m.a.createElement(w.a, {
						root: "SignupUpsellContainer",
						threshold: .01,
						rootMargin: "0px 0px 0px 0px",
						onChange: a
					}, m.a.createElement(le, {
						className: t,
						innerRef: n
					}, m.a.createElement(be, null, m.a.createElement(he, null, m.a.createElement(me, null, "Images Placeholder")), m.a.createElement(he, null, m.a.createElement(ue, {
						className: Object(v.a)({
							[ce.a.fields]: Object(U.b)(s)
						}),
						path: R.c.Register,
						uiMode: R.d.Embed
					}))), m.a.createElement(ge, {
						onClick: o,
						style: {
							"--frontpagesignup-upsell-text-hover-color": Object(M.i)(.8, i)
						}
					}, m.a.createElement(fe, null, r.fbt._("Not ready to sign up yet?", null, {
						hk: "5RIgO"
					})), m.a.createElement(ve, null)), m.a.createElement(pe, null)))
				});
			class ye extends m.a.Component {
				componentDidUpdate(e) {
					this.props.scrollTo !== e.scrollTo && window.scrollTo({
						top: this.props.scrollTo
					})
				}
				render() {
					return null
				}
			}
			class Ce extends m.a.Component {
				constructor() {
					super(...arguments), this.containerRef = m.a.createRef(), this.state = {
						isClosed: !1
					}, this.closeUpsell = () => {
						"safari" in window ? this.hideUpsell() : (this.setState({
							isClosed: !0
						}), this.props.sendEvent(Object(L.a)()))
					}, this.hideUpsell = () => {
						this.containerRef.current && (this.containerRef.current.style.marginTop = `-${this.containerRef.current.offsetHeight}px`, this.props.onClose())
					}, this.handleUpsellVisibilityChange = e => {
						this.state.isClosed || e.isIntersecting || this.hideUpsell()
					}, this.renderScroller = e => {
						let {
							scrollTo: t
						} = e;
						return m.a.createElement(ye, {
							scrollTo: t
						})
					}
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
					}), m.a.createElement(N.Motion, {
						defaultStyle: {
							scrollTo: 0
						},
						onRest: this.hideUpsell,
						style: {
							scrollTo: Object(N.spring)(s, de)
						}
					}, this.renderScroller))
				}
			}
			var xe = Object(A.c)(Ce),
				Ee = n("./node_modules/js-cookie/src/js.cookie.js"),
				Pe = n.n(Ee),
				je = n("./src/lib/localStorageAvailable/index.ts"),
				_e = n("./src/reddit/actions/modal.ts"),
				Se = n("./src/higherOrderComponents/makeAsync.tsx"),
				ke = Object(Se.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("BadgePurchaseModal").then(n.bind(null, "./src/reddit/components/Badges/PurchaseModal/index.tsx")).then(e => e.default)
				}),
				we = n("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx"),
				Me = n("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx"),
				Ne = n("./src/lib/loadWithRetries/index.ts");
			var Ie = Object(Se.a)({
				getComponent: () => Object(Ne.a)(() => n.e("NotificationsPrePromptLoader").then(n.bind(null, "./src/reddit/components/NotificationsPrePrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			const Te = () => null;
			var Ae = Object(Se.a)({
					ErrorComponent: Te,
					getComponent: () => Object(Ne.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"))).then(e => e.default),
					LoadingComponent: Te
				}),
				Re = n("./src/higherOrderComponents/asModal/index.tsx"),
				Le = n("./src/reddit/actions/structuredStyles/index.ts"),
				De = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				Fe = n("./src/reddit/constants/modals.ts"),
				Ue = n("./src/reddit/controls/TextButton/index.tsx"),
				Ge = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: Be
			} = n("./node_modules/fbt/lib/FbtPublic.js"), qe = Object(p.b)(null, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					closeModal: () => {
						e(Object(_e.i)(Fe.a.BLADE_NIGHTMODE)), e(Object(Le.f)())
					},
					openBlade: () => {
						e(Object(Le.e)(n))
					}
				}
			});
			var He = Object(Re.a)(qe(e => m.a.createElement(De.e, null, m.a.createElement(De.i, null, m.a.createElement(Ge.a, null, m.a.createElement(De.q, null, Be._("Turning off Dark Mode", null, {
					hk: "2RVfrK"
				})), m.a.createElement(Ue.a, {
					onClick: e.closeModal
				}, m.a.createElement(De.b, null)))), m.a.createElement(De.l, null, m.a.createElement(De.o, null, Be._("In order to continue styling your community, Dark Mode must be turned off.", null, {
					hk: "2oiEiX"
				}))), m.a.createElement(De.g, null, m.a.createElement(De.a, {
					onClick: e.closeModal,
					"data-redditstyle": !0
				}, Be._("Cancel", null, {
					hk: "2TSLl5"
				})), m.a.createElement(De.r, {
					onClick: e.openBlade,
					"data-redditstyle": !0
				}, Be._("Continue", null, {
					hk: "413jMZ"
				})))))),
				We = n("./src/reddit/actions/authorFlair.ts"),
				Ve = n("./src/reddit/actions/gold/powerups.ts"),
				Qe = n("./src/reddit/actions/userFlair/index.ts"),
				Ke = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				ze = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				Je = n("./src/reddit/components/FlairPreview/index.tsx"),
				Ye = n("./src/reddit/components/FlairSearch/index.tsx"),
				Ze = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				Xe = n("./src/reddit/controls/Button/index.tsx"),
				$e = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				et = n("./src/reddit/layout/row/Inline/index.tsx"),
				tt = n("./src/reddit/models/Flair/index.ts"),
				nt = n("./src/reddit/models/User/index.ts"),
				st = n("./src/reddit/selectors/authorFlair.ts"),
				rt = n("./src/reddit/selectors/moderatorPermissions.ts"),
				ot = n("./src/reddit/selectors/telemetry.ts"),
				at = n("./src/reddit/selectors/user.ts"),
				it = n("./src/reddit/selectors/userFlair.ts"),
				ct = n("./src/reddit/components/UserFlairPicker/index.m.less"),
				dt = n.n(ct);
			const lt = e => e.flairModalContext && e.currentUser && Object(nt.e)(e.currentUser) === e.flairModalContext.username,
				ut = e => e.authorFlair || lt(e) && e.userFlairData.applied || null,
				mt = I.a.wrapped(et.a, "Section", dt.a),
				pt = I.a.div("CheckboxText", dt.a);
			class bt extends m.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.track = e => this.props.sendEvent(t => ({
						source: "user_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(ot.ib)(t, this.props.subredditId)
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
						previewFlair: ut(e),
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
					} = e.displaySettings, o = this.state.showFlair !== r, a = ut(this.props);
					if (!s.canUserChange) return o;
					const {
						canSave: i,
						reason: c
					} = Object(Ze.b)(n, t, a);
					return !(i || c !== Ze.a.NoChanges || !o) || i
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
					} = n, u = this.canSave(), p = lt(e);
					return m.a.createElement(ze.a, null, m.a.createElement(Ke.a, {
						onClosePressed: e.closeModal,
						title: r.fbt._("Select your community flair", null, {
							hk: "199vaD"
						})
					}), m.a.createElement(Je.a, {
						flair: t.previewFlair,
						flairTemplateType: tt.d.UserFlair,
						placeholderText: r.fbt._("u/username", null, {
							hk: "2EDH9"
						})
					}), i && m.a.createElement(Ye.a, {
						flair: t.previewFlair,
						flairTemplateType: tt.d.UserFlair,
						subredditId: s,
						templates: d,
						templateIds: l,
						onChange: this.setSelectedFlair
					}), p && m.a.createElement(mt, null, m.a.createElement($e.a, {
						isSelected: t.showFlair,
						onClick: this.onToggleShowFlair,
						text: m.a.createElement(pt, null, r.fbt._("Show my user flair on this community", null, {
							hk: "x9nc9"
						}))
					})), m.a.createElement("div", {
						className: dt.a.buttonsRow
					}, c && m.a.createElement(Xe.t, {
						className: dt.a.goBackButton,
						priority: Xe.c.Plain,
						onClick: e.openAchiementFlairModal
					}, r.fbt._("Go Back", null, {
						hk: "4fisFS"
					})), m.a.createElement("div", {
						className: dt.a.rightSideButtons
					}, a && m.a.createElement(Xe.o, {
						className: dt.a.clearButton,
						onClick: this.onClear
					}, r.fbt._("Clear Flair", null, {
						hk: "23i2at"
					})), m.a.createElement(Xe.l, {
						disabled: !u,
						onClick: this.onApply
					}, r.fbt._("Apply", null, {
						hk: "ZvO9n"
					})))))
				}
			}
			const ht = Object(p.b)(() => Object(f.c)({
				authorFlair: st.b,
				currentUser: at.k,
				flairModalContext: st.c,
				isMod: (e, t) => !!Object(rt.m)(e, t),
				userFlairData: it.d
			}), (e, t) => ({
				activeFlairChanged: (n, s, r, o) => e(Object(Qe.f)(n, s, r, o.username, t.subredditId)),
				closeModal: () => e(Object(We.b)({
					username: null,
					subredditId: null
				})),
				openAchiementFlairModal: () => e(Object(Ve.f)())
			}))(bt);
			var gt = Object(Re.a)(Object(A.c)(ht)),
				ft = n("./src/reddit/selectors/activeModalId.ts"),
				vt = n("./src/reddit/selectors/bannedUser.ts"),
				Ot = n("./src/reddit/selectors/muted.ts"),
				yt = n("./src/reddit/selectors/notificationPrefs.ts"),
				Ct = n("./src/reddit/selectors/platform.ts"),
				xt = n("./src/reddit/selectors/removalReasons.ts"),
				Et = n("./src/reddit/constants/cookie.ts"),
				Pt = n("./src/reddit/featureFlags/index.ts"),
				jt = n("./src/reddit/helpers/localStorage/index.ts"),
				_t = n("./src/reddit/helpers/toggleBodyScroll/index.ts");
			const St = Object(f.c)({
				activeModalId: ft.a,
				authorContext: st.c,
				badgePurchaseModalIsOpen: Object(ft.b)(Fe.a.BADGE_PURCHASE),
				banContext: vt.a,
				banModalIsOpen: Object(ft.b)(Fe.a.BAN_USER),
				bladeNightmodeModalIsOpen: Object(ft.b)(Fe.a.BLADE_NIGHTMODE),
				currentBadgePurchase: e => e.products.currentlyPurchasing,
				introModalFeatureEnabled: e => Pt.d.introModal(e),
				isOverlayOpen: Ct.i,
				moderatorPermissions: e => {
					const t = Object(Ct.c)(e);
					if (t) return e.moderatingSubreddits[t]
				},
				muteContext: Ot.a,
				muteModalIsOpen: Object(ft.b)(Fe.a.MUTE_USER),
				notificationsPrePromptIsOpen: yt.e,
				removalReasonContext: xt.b,
				removalReasonModalIsOpen: Object(ft.b)(Fe.a.ADD_REMOVAL_REASON),
				subredditId: Ct.c,
				userFlairModalIsOpen: Object(ft.b)(Fe.a.USER_FLAIR_MODAL_ID),
				userHasSeenRedesignModal: at.A,
				userInRedesignBeta: at.H,
				userIsLoggedIn: at.P,
				userIsMod: at.Q,
				userIsNew: at.T
			});
			class kt extends m.a.Component {
				constructor(e) {
					super(e), this.state = {
						domReady: !1
					}
				}
				conditionalModalCheck() {
					if (!Object(je.a)()) return; {
						const e = Pe.a.get(Et.a);
						e && Pe.a.remove(Et.a, {
							domain: G.a.cookieDomain
						});
						const t = Object(jt.F)(Fe.a.ALPHA_CONSUMER);
						t && Object(jt.ab)(Fe.a.ALPHA_CONSUMER), (e || t) && Object(jt.Hb)(Fe.a.REDESIGN_MODAL, !0)
					}
					const {
						userHasSeenRedesignModal: e,
						markRedesignModalAsClosed: t
					} = this.props, n = Object(jt.F)(Fe.a.REDESIGN_MODAL);
					!e && n ? t() : e && !n && Object(jt.Hb)(Fe.a.REDESIGN_MODAL, !0)
				}
				componentDidMount() {
					this.conditionalModalCheck(), this.setState({
						domReady: !0
					})
				}
				componentDidUpdate(e) {
					this.conditionalModalCheck(), e.activeModalId !== this.props.activeModalId && (Fe.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(_t.a)(), 500) : setTimeout(() => Object(_t.b)(), 500)))
				}
				render() {
					const {
						authorContext: e,
						badgePurchaseModalIsOpen: t,
						banContext: n,
						banModalIsOpen: s,
						bladeNightmodeModalIsOpen: r,
						currentBadgePurchase: o,
						muteContext: a,
						muteModalIsOpen: i,
						notificationsPrePromptIsOpen: c,
						removalReasonContext: d,
						removalReasonModalIsOpen: l,
						sendEvent: p,
						subredditId: b,
						toggleBanModal: h,
						toggleMuteModal: g,
						toggleRemovalReasonsModal: f,
						userFlairModalIsOpen: v
					} = this.props, O = (e, t, n) => s => () => p(r => ({
						source: e,
						action: "click",
						noun: s,
						comment: n && Object(ot.i)(r, n),
						post: n && Object(ot.I)(r, n),
						screen: Object(ot.Z)(r),
						subreddit: Object(ot.ib)(r, t)
					}));
					return m.a.createElement(u.Fragment, null, s && n && m.a.createElement(we.a, {
						contextId: n.contextId,
						subredditId: n.subredditId,
						toggleModal: h,
						trackAddEvent: O("banned", n.subredditId, n.contextId)("add_in_context"),
						trackEventWithName: O("banned", n.subredditId, n.contextId),
						username: n.username,
						withOverlay: !0
					}), i && a && m.a.createElement(Me.a, {
						contextId: a.contextId,
						subredditId: a.subredditId,
						toggleModal: g,
						trackAddEvent: O("muted", a.subredditId, a.contextId)("add_in_context"),
						username: a.username,
						withOverlay: !0
					}), l && d && m.a.createElement(Ae, {
						itemIds: d.itemIds,
						subredditId: d.subredditId,
						toggleModal: f,
						trackClick: O("removal_reasons", d.subredditId, 1 === d.itemIds.length ? d.itemIds[0] : void 0)
					}), r && b && m.a.createElement(He, {
						subredditId: b
					}), v && e && e.subredditId && m.a.createElement(gt, {
						subredditId: e.subredditId,
						withOverlay: !0
					}), t && o && m.a.createElement(ke, {
						withOverlay: !0,
						productId: o
					}), c && m.a.createElement(Ie, null))
				}
			}
			var wt = Object(p.b)(St, e => ({
					markRedesignModalAsClosed: () => e(Object(_e.j)()),
					toggleBanModal: () => e(Object(_e.i)(Fe.a.BAN_USER)),
					toggleBladeNightmodeModal: () => e(Object(_e.i)(Fe.a.BLADE_NIGHTMODE)),
					toggleMuteModal: () => e(Object(_e.i)(Fe.a.MUTE_USER)),
					toggleRemovalReasonsModal: () => e(Object(_e.i)(Fe.a.ADD_REMOVAL_REASON))
				}))(Object(A.c)(kt)),
				Mt = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				Nt = n("./src/reddit/constants/experiments.ts"),
				It = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Tt = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				At = n("./src/reddit/selectors/responsiveSettings.ts"),
				Rt = n("./src/reddit/components/AccountManagerModal/index.m.less"),
				Lt = n.n(Rt);
			const Dt = I.a.div("Overlay", Lt.a),
				Ft = I.a.div("IframeContainer", Lt.a),
				Ut = {},
				Gt = Object(It.u)(),
				Bt = Object(f.c)({
					frontpageSignupVariant: U.a,
					isResponsiveSettingsEnabled: At.a
				}),
				qt = {
					[R.c.ChangePassword]: Fe.a.CHANGE_PASSWORD_MODAL_ID,
					[R.c.Index]: Fe.a.LOGIN_MODAL_ID,
					[R.c.Register]: Fe.a.REGISTER_MODAL_ID,
					[R.c.EnableTwoFactor]: Fe.a.ENABLE_TWO_FACTOR,
					[R.c.DisableTwoFactor]: Fe.a.DISABLE_TWO_FACTOR,
					[R.c.TwoFactorBackupCodes]: Fe.a.TWO_FACTOR_BACKUP_CODES,
					[R.c.LinkAppleSSO]: Fe.a.LINK_APPLE_SSO,
					[R.c.UnlinkAppleSSO]: Fe.a.UNLINK_APPLE_SSO,
					[R.c.LinkGoogleSSO]: Fe.a.LINK_GOOGLE_SSO,
					[R.c.UnlinkGoogleSSO]: Fe.a.UNLINK_GOOGLE_SSO,
					[R.c.GoogleOneTap]: Fe.a.GOOGLE_ONE_TAP_MODAL_ID,
					[R.c.Onboarding]: Fe.a.ONBOARDING_MODAL_ID
				};
			class Ht extends m.a.Component {
				constructor() {
					super(...arguments), this.subscriptions = [], this.state = {
						containerSize: null,
						isSSOLinkActionFailedModal: !1,
						removeGoogleOneTapStyles: !1,
						removeHiddenOverlay: !1
					}, this.closeModal = () => {
						this.props.closeModal(this.props.path), this.props.path === R.c.Register && Object(U.f)(this.props.frontpageSignupVariant) && Tt.a.throttleFeature(Nt.oc), this.props.sendEvent(Object(L.a)(this.subscriptions))
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
						"user_cancel" === e && this.props.sendEvent(Object(L.b)())
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.sendEvent(Object(L.c)())
					}, this.onShowScreen = e => {
						const {
							path: t
						} = this.props, n = t === R.c.Index || t === R.c.Register, s = t === R.c.GoogleOneTap;
						e === R.b.SelectAccount ? n ? this.resizeContainer({
							height: 474,
							width: 416
						}) : s && this.setState({
							removeHiddenOverlay: !0
						}) : e === R.b.Subscribe ? (n && this.restoreContainerSize(), this.restoreIFrameStyles()) : e === R.b.Email || e === R.b.UsernameAndPassword ? n && this.restoreContainerSize() : e !== R.b.EmailOptIn && e !== R.b.GoogleUI || this.setState({
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
					} = this.state, c = Object(U.c)(e) || Object(U.d)(e), d = s === R.c.LinkAppleSSO || s === R.c.LinkGoogleSSO || s === R.c.UnlinkAppleSSO || s === R.c.UnlinkGoogleSSO, l = s === R.c.GoogleOneTap, u = Object(v.a)({
						[Lt.a.small]: c,
						[Lt.a.ssoConfirmPassword]: d,
						[Lt.a.linkActionSSOFail]: o,
						[Lt.a.mResponsive]: t,
						[Lt.a.mGoogleOneTap]: l && !a
					}), p = Object(v.a)({
						[Lt.a.mGoogleOneTap]: l && !a,
						[Lt.a.mHiddenOverlay]: l && !i
					}), b = !c && !o && !t;
					return m.a.createElement(Dt, {
						className: p
					}, m.a.createElement(Ft, {
						className: u,
						style: r || Ut
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
			const Wt = Gt(Object(p.b)(Bt, (e, t) => ({
				closeModal: t => {
					e(Object(_e.g)(qt[t]))
				}
			}))(Object(A.c)(Ht)));
			Object(Mt.b)(Fe.a.CHANGE_PASSWORD_MODAL_ID, e => m.a.createElement(Wt, {
				path: R.c.ChangePassword
			})), Object(Mt.b)(Fe.a.LOGIN_MODAL_ID, e => m.a.createElement(Wt, {
				path: R.c.Index
			})), Object(Mt.b)(Fe.a.ONBOARDING_MODAL_ID, e => m.a.createElement(Wt, {
				path: R.c.Onboarding
			})), Object(Mt.b)(Fe.a.ENABLE_TWO_FACTOR, e => m.a.createElement(Wt, {
				path: R.c.EnableTwoFactor
			})), Object(Mt.b)(Fe.a.DISABLE_TWO_FACTOR, e => m.a.createElement(Wt, {
				path: R.c.DisableTwoFactor
			})), Object(Mt.b)(Fe.a.TWO_FACTOR_BACKUP_CODES, e => m.a.createElement(Wt, {
				path: R.c.TwoFactorBackupCodes
			})), Object(Mt.b)(Fe.a.REGISTER_MODAL_ID, e => m.a.createElement(Wt, {
				path: R.c.Register
			})), Object(Mt.b)(Fe.a.LINK_APPLE_SSO, e => m.a.createElement(Wt, {
				path: R.c.LinkAppleSSO
			})), Object(Mt.b)(Fe.a.LINK_GOOGLE_SSO, e => m.a.createElement(Wt, {
				path: R.c.LinkGoogleSSO
			})), Object(Mt.b)(Fe.a.UNLINK_APPLE_SSO, e => m.a.createElement(Wt, {
				path: R.c.UnlinkAppleSSO
			})), Object(Mt.b)(Fe.a.UNLINK_GOOGLE_SSO, e => m.a.createElement(Wt, {
				path: R.c.UnlinkGoogleSSO
			})), Object(Mt.b)(Fe.a.GOOGLE_ONE_TAP_MODAL_ID, e => m.a.createElement(Wt, {
				path: R.c.GoogleOneTap
			}));
			n("./src/reddit/components/CoinPurchaseModal/async.tsx");
			const Vt = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestPendingModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.CONTRIBUTOR_REQUEST_PENDING, e => m.a.createElement(Vt, {
				withOverlay: !0
			}));
			const Qt = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestRequestModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.CONTRIBUTOR_REQUEST, e => m.a.createElement(Qt, {
				withOverlay: !0
			}));
			const Kt = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("RequestToJoinPrivateSubredditModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestToJoinPrivateSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT, e => m.a.createElement(Kt, {
				withOverlay: !0
			}));
			const zt = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CrowdControlModal").then(n.bind(null, "./src/reddit/components/CrowdControlModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.CROWD_CONTROL, e => m.a.createElement(zt, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/Econ/ClaimFreeAwardModal/async.tsx"), n("./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx"), n("./src/reddit/components/Econ/Marketplace/ClaimModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsSuccess/async.tsx"), n("./src/reddit/components/Econ/Prediction/CancelPredictionModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/EndTimeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/PremiumModal/async.tsx"), n("./src/reddit/components/Econ/TopAwardersModal/async.tsx");
			const Jt = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("SubredditPremiumBadgeManagement").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT, e => m.a.createElement(Jt, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Yt = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("SubredditPremiumUploadModal")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/UploadModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, e => m.a.createElement(Yt, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			n("./src/reddit/components/EditCommunityDescriptionModal/async.tsx");
			const Zt = Object(Se.a)({
					getComponent: () => Object(Ne.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("FramedGild~GildModal"), n.e("GildModal")]).then(n.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Xt = e => () => {
					e()
				};
			Object(Mt.b)(Fe.a.GOLD_GILD_MODAL, e => m.a.createElement(Zt, {
				onOverlayClick: Xt(e),
				withOverlay: !0
			}));
			var $t = n("./src/reddit/components/Gold/GildAnimationOverlay/index.tsx"),
				en = n("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				tn = n.n(en);
			const nn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => {
					return document.createElement("img").src = $t.SPARKLE_ASSET_PATH, document.createElement("img").src = $t.STARBURST_ASSET_PATH, Promise.resolve().then(n.bind(null, "./src/reddit/components/Gold/GildAnimationOverlay/index.tsx")).then(e => e.default)
				}
			});
			Object(Mt.b)(Fe.a.GOLD_GILD_ANIMATION_OVERLAY, e => m.a.createElement(nn, {
				withOverlay: !0,
				className: tn.a.modalBody,
				overlayClassName: tn.a.modalOverlay
			}));
			const sn = Object(Se.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("GoldTargetedOfferModal").then(n.bind(null, "./src/reddit/components/Gold/TargetedOfferModal/index.tsx")).then(e => e.default)
				}),
				rn = e => () => {
					e()
				};
			Object(Mt.b)(Fe.a.GOLD_TARGETED_OFFER_MODAL, e => m.a.createElement(sn, {
				onOverlayClick: rn(e),
				withOverlay: !0
			}));
			const on = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("HarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.HARBERGER_TAX_BANNER_MANAGE, e => m.a.createElement(on, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const an = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("HarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.HARBERGER_TAX_BANNER_PURCHASE, e => m.a.createElement(an, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const cn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CryptoHarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE, e => m.a.createElement(cn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const dn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CryptoHarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE, e => m.a.createElement(dn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const ln = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("GovernanceReleaseNotesModal")]).then(n.bind(null, "./src/reddit/components/Governance/ReleaseNotesModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.GOVERNANCE_RELEASE_NOTES, e => m.a.createElement(ln, {
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/TransactionModals/BurnPointsModal/async.tsx"), n("./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx");
			const un = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceTransferPointsModal").then(n.bind(null, "./src/reddit/components/Governance/TransferPointsModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.TRANSFER_POINTS, e => m.a.createElement(un, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const mn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.WALLET_REGISTRATION_MODAL, e => m.a.createElement(mn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const pn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ModToMemberShareModal").then(n.bind(null, "./src/reddit/components/ModToMemberShareModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.MOD_TO_MEMBER_SHARE, e => m.a.createElement(pn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const bn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditAddSubredditModal").then(n.bind(null, "./src/reddit/components/MultiredditAddSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.MULTIREDDIT_ADD_SUBREDDIT, e => m.a.createElement(bn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const hn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditCreateModal").then(n.bind(null, "./src/reddit/components/MultiredditCreateModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.MULTIREDDIT_CREATE, e => m.a.createElement(hn, {
				onOverlayClick: e,
				withOverlay: !0
			})), Object(Mt.b)(Fe.a.MULTIREDDIT_DUPLICATE, e => m.a.createElement(hn, {
				isDuplicateModal: !0,
				onOverlayClick: e,
				withOverlay: !0
			}));
			const gn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditEditModal").then(n.bind(null, "./src/reddit/components/MultiredditEditModal/index.tsx")).then(e => e.default)
			});
			Object(Mt.b)(Fe.a.MULTIREDDIT_EDIT, e => m.a.createElement(gn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const fn = () => Promise.all([n.e(5), n.e("OnboardingModal")]).then(n.bind(null, "./src/reddit/components/Onboarding/Modal.tsx")),
				vn = Object(Se.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(Ne.a)(fn).then(e => e.default)
				});
			Object(Mt.b)(Fe.a.ONBOARDING_MODAL_D2X, e => m.a.createElement(vn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/async.tsx"), n("./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/async.tsx"), n("./src/reddit/components/PostFlowUpsellModal/async.tsx"), n("./src/reddit/components/PowerupsSidebar/SupportersListModal/async.tsx"), n("./src/reddit/components/PremiumPurchaseModal/Loader.tsx");
			const On = () => null,
				yn = Object(Se.a)({
					ErrorComponent: On,
					getComponent: () => Object(Ne.a)(() => n.e("GlobalModalContainer").then(n.bind(null, "./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx"))).then(e => e.default),
					LoadingComponent: On
				});
			Object(Mt.b)(Fe.a.PINNED_POSTS_LIMIT_REACHED, e => m.a.createElement(yn, null));
			var Cn = n("./src/reddit/components/ShortcutIndexModal/index.m.less"),
				xn = n.n(Cn);
			const En = I.a.h2("ColumnLabel", xn.a),
				Pn = I.a.wrapped(et.a, "ColumnWrapper", xn.a),
				jn = I.a.div("Column", xn.a),
				_n = I.a.div("Description", xn.a),
				Sn = I.a.div("Key", xn.a),
				kn = I.a.wrapped(De.l, "ModalMain", xn.a),
				wn = I.a.wrapped(De.e, "ModalBody", xn.a),
				Mn = I.a.wrapped(Xe.l, "PrimaryButton", xn.a),
				Nn = I.a.wrapped(Ue.a, "TextButton", xn.a),
				In = Object(p.b)(null, e => ({
					closeModal: () => e(Object(_e.i)(Fe.a.KEYBOARD_SHORTCUTS))
				})),
				Tn = I.a.wrapped(Object(Re.a)(In(e => m.a.createElement(wn, {
					onClick: e => e.stopPropagation()
				}, m.a.createElement(De.i, null, m.a.createElement(Ge.a, null, m.a.createElement(De.q, null, r.fbt._("Keyboard Shortcuts", null, {
					hk: "zoWU1"
				})), m.a.createElement(Nn, {
					onClick: e.closeModal
				}, m.a.createElement(De.b, null)))), m.a.createElement(kn, null, m.a.createElement(Pn, null, m.a.createElement(jn, null, m.a.createElement(et.a, null, m.a.createElement(En, null, r.fbt._("Navigation", null, {
					hk: "3zSWEe"
				}))), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Show shortcuts", null, {
					hk: "4hXvrI"
				})), m.a.createElement(Sn, null, "Shift + ?")), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Next post or comment", null, {
					hk: "1m8s9z"
				})), m.a.createElement(Sn, null, "J")), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Previous post or comment", null, {
					hk: "2wzeoq"
				})), m.a.createElement(Sn, null, "K")), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Next post in lightbox", null, {
					hk: "1ALR5k"
				})), m.a.createElement(Sn, null, "N")), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Previous post in lightbox", null, {
					hk: "2bLo98"
				})), m.a.createElement(Sn, null, "P")), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Open post", null, {
					hk: "2wD7mh"
				})), m.a.createElement(Sn, null, "Enter")), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Open/close expando", null, {
					hk: "1yDst0"
				})), m.a.createElement(Sn, null, "X")), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Go to post link", null, {
					hk: "c0TNr"
				})), m.a.createElement(Sn, null, "L"))), m.a.createElement(jn, null, m.a.createElement(et.a, null, m.a.createElement(En, null, r.fbt._("Action", null, {
					hk: "3QI6pT"
				}))), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Upvote", null, {
					hk: "5i9NP"
				})), m.a.createElement(Sn, null, "A")), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Downvote", null, {
					hk: "1ef3YP"
				})), m.a.createElement(Sn, null, "Z")), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("New post", null, {
					hk: "4dtNWf"
				})), m.a.createElement(Sn, null, "C")), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Reply to comment", null, {
					hk: "G8AbT"
				})), m.a.createElement(Sn, null, "R")), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Submit comment/post", null, {
					hk: "13agk7"
				})), m.a.createElement(Sn, null, "Ctrl + Enter")), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Save", null, {
					hk: "4yMsMq"
				})), m.a.createElement(Sn, null, "S")), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Hide", null, {
					hk: "2Dn9GF"
				})), m.a.createElement(Sn, null, "H")), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Open navigation", null, {
					hk: "QdGe2"
				})), m.a.createElement(Sn, null, "Q")), m.a.createElement(et.a, null, m.a.createElement(_n, null, r.fbt._("Collapse/expand comment", null, {
					hk: "1FxIUN"
				})), m.a.createElement(Sn, null, "Enter"))))), m.a.createElement(De.g, null, m.a.createElement(Mn, {
					"data-redditstyle": !0,
					onClick: () => {
						e.closeModal()
					}
				}, r.fbt._("Close", null, {
					hk: "4gbyAA"
				})))))), "ConnectedModal", xn.a);
			Object(Mt.b)(Fe.a.KEYBOARD_SHORTCUTS, e => m.a.createElement(Tn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const An = Object(Se.a)({
					getComponent: () => Object(Ne.a)(() => n.e("SnoovatarModal").then(n.bind(null, "./src/reddit/components/SnoovatarModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Rn = e => () => {
					e()
				};
			Object(Mt.b)(Fe.a.SNOOVATAR_MODAL, e => m.a.createElement(An, {
				onOverlayClick: Rn(e),
				withOverlay: !0
			}));
			const {
				fbt: Ln
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Dn = Object(f.c)({
				allowNavigationCallback: Ct.a
			}), Fn = Object(p.b)(Dn, e => ({
				closeModal: () => e(Object(_e.i)(Fe.a.BLADE_UNSAVED_CHANGES)),
				closeBlade: () => e(Object(Le.a)())
			}));
			class Un extends m.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.closeBlade(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onCancelClick = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}
				}
				render() {
					return m.a.createElement(De.e, null, m.a.createElement(De.i, null, m.a.createElement(Ge.a, null, m.a.createElement(De.q, null, Ln._("Discard unsaved changes before leaving?", null, {
						hk: "4qVGC7"
					})), m.a.createElement(Ue.a, {
						onClick: this.onCancelClick
					}, m.a.createElement(De.b, null)))), m.a.createElement(De.l, null, m.a.createElement(De.p, null, Ln._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "28O7Pm"
					}))), m.a.createElement(De.g, null, m.a.createElement(De.a, {
						onClick: this.onCancelClick,
						"data-redditstyle": !0
					}, Ln._("Cancel", null, {
						hk: "2TSLl5"
					})), m.a.createElement(De.r, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, Ln._("Discard", null, {
						hk: "1SiwLl"
					}))))
				}
			}
			const Gn = Object(Re.a)(Fn(Un));
			Object(Mt.b)(Fe.a.BLADE_UNSAVED_CHANGES, e => m.a.createElement(Gn, {
				withOverlay: !0
			}));
			n("./src/reddit/components/SubredditCreationModal/async.tsx");
			const Bn = Object(f.c)({
					activeModalId: ft.a
				}),
				qn = Object(p.b)(Bn, e => ({
					toggleModal: t => e(Object(_e.i)(t))
				})),
				Hn = 500,
				Wn = () => {};
			class Vn extends m.a.Component {
				constructor() {
					super(...arguments), this.toggleModal = () => {
						this.props.activeModalId && this.props.toggleModal(this.props.activeModalId)
					}
				}
				componentDidUpdate(e) {
					e.activeModalId !== this.props.activeModalId && (Fe.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(_t.a)(), Hn) : setTimeout(() => Object(_t.b)(), Hn)))
				}
				componentWillUnmount() {
					Object(_t.b)()
				}
				render() {
					const {
						activeModalId: e
					} = this.props;
					return Object(Mt.a)(e)(e ? this.toggleModal : Wn)
				}
			}
			var Qn, Kn = qn(Vn),
				zn = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				Jn = n("./src/reddit/actions/page.ts"),
				Yn = n("./src/reddit/actions/shortcuts/utils.ts"),
				Zn = n("./src/reddit/icons/fonts/index.tsx"),
				Xn = n("./src/reddit/selectors/experiments/d2xSeoLightboxExperiment.ts"),
				$n = n("./src/reddit/selectors/header.ts"),
				es = n("./src/reddit/selectors/userPrefs.ts"),
				ts = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				ns = n("./src/reddit/components/SEOTitle/index.tsx"),
				ss = n("./src/reddit/components/SubredditIcon/index.tsx"),
				rs = n("./src/reddit/components/UserIcon/index.tsx"),
				os = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				as = n("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				is = n.n(as);
			! function(e) {
				e.Acknowledgements = "Acknowledgements", e.All = "All", e.Appeal = "Appeal", e.Avatar = "Avatar", e.Category = "Category", e.Coins = "Coins", e.Community = "Community", e.CommunitySearch = "CommunitySearch", e.CreateCommunity = "CreateCommunity", e.CreatePost = "CreatePost", e.DailyCharts = "DailyCharts", e.Employee = "Employee", e.GlobalSearch = "GlobalSearch", e.Geotagging = "Geotagging", e.Home = "Home", e.Inbox = "Inbox", e.InternationalSite = "InternationalSite", e.ModListing = "ModListing", e.ModMail = "ModMail", e.ModQueue = "ModQueue", e.Multi = "Multi", e.NotificationsInbox = "NotificationsInbox", e.Popular = "Popular", e.Powerups = "Powerups", e.Predictions = "Predictions", e.Premium = "Premium", e.PublicAccessNetwork = "PublicAccessNetwork", e.Report = "Report", e.Settings = "Settings", e.SubredditCreation = "SubredditCreation", e.Talk = "Talk", e.Topic = "Topic", e.Unknown = "Unknown", e.UserDataRequest = "UserDataRequest", e.UserProfile = "UserProfile", e.UserProfileName = "UserProfileName", e.ViewDraft = "ViewDraft"
			}(Qn || (Qn = {}));
			const cs = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const [n, s] = t && -1 !== e.indexOf("/") ? e.split("/") : [, e];
				return m.a.createElement(m.a.Fragment, null, n && `${n}/`, s && m.a.createElement(ns.b, {
					type: ns.a.HeaderSelector
				}, s))
			};
			var ds = n("./src/lib/objectSelector/index.ts"),
				ls = n("./src/reddit/constants/wiki.ts"),
				us = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				ms = n("./src/reddit/selectors/subreddit.ts"),
				ps = n("./src/reddit/selectors/topic.ts");
			var bs = Object(ds.a)((e, t) => {
					let {
						pageLayer: n
					} = t;
					const s = !!e.user.account,
						r = Object(It.Y)(n);
					switch (r) {
						case "avatar":
							return {
								type: Qn.Avatar
							};
						case "index":
						case "listing":
							return s ? {
								type: Qn.Home
							} : {
								type: Qn.Popular
							};
						case "modListing":
							return {
								type: Qn.ModListing
							};
						case "modQueuePages":
							return {
								type: Qn.ModQueue
							};
						case "postCreation":
							return {
								type: Qn.CreatePost
							};
						case "postDraft":
							return {
								type: Qn.ViewDraft
							};
						case "subredditCreation":
							return {
								type: Qn.SubredditCreation
							};
						case "coins":
							return {
								type: Qn.Coins
							};
						case "internationalSitePage":
							return {
								type: Qn.InternationalSite
							};
						case "powerups":
							return {
								type: Qn.Powerups
							};
						case "predictions":
							return {
								type: Qn.Predictions
							};
						case "premium":
							return {
								type: Qn.Premium
							};
						case "acknowledgements":
							return {
								type: Qn.Acknowledgements
							};
						case "appeal":
							return {
								type: Qn.Appeal
							};
						case "report":
							return {
								type: Qn.Report
							};
						case "userDataRequest":
							return {
								type: Qn.UserDataRequest
							};
						case "subredditLeaderboard":
							return {
								type: Qn.DailyCharts
							};
						case "geotagging":
							return {
								type: Qn.Geotagging
							};
						case "notificationsInbox":
							return {
								type: Qn.NotificationsInbox
							};
						case "talk":
							return {
								type: Qn.Talk
							};
						case "topic": {
							const t = Object(It.t)(n),
								s = t && Object(ps.d)(e, t);
							if (s) return {
								type: Qn.Topic,
								model: s
							}
						}
					}
					const o = e.user.account;
					if (o) switch (r) {
						case "inboxPages":
							return {
								type: Qn.Inbox, model: o
							};
						case "settings":
							return {
								type: Qn.Settings, model: o
							}
					}
					const a = Object(It.S)(e, {
						pageLayer: n
					});
					if ("all" === a) return {
						type: Qn.All
					};
					if ("popular" === a) return {
						type: Qn.Popular
					};
					const i = Object(It.r)(e, {
						pageLayer: n
					});
					if (i) return "searchResults" === r ? {
						type: Qn.CommunitySearch,
						model: i
					} : {
						type: Qn.Community,
						model: i
					};
					const c = Object(It.e)(e, {
						pageLayer: n
					});
					if (c) return {
						type: Qn.Multi,
						model: c
					};
					const d = Object(It.k)(e, {
						pageLayer: n
					});
					if (d) return {
						type: Qn.UserProfile,
						model: d
					};
					const l = Object(It.i)(n);
					if (l) return {
						type: Qn.UserProfileName,
						name: `u/${l}`
					};
					if (r && "searchResults" === r) return {
						type: Qn.GlobalSearch
					};
					if ("subredditWiki" === r) {
						const t = Object(It.o)(e, {
								pageLayer: n
							}) || ls.e,
							s = Object(ms.x)(e, {
								subredditName: t
							});
						if (s) return {
							type: Qn.Community,
							model: s
						}
					}
					return "rpan" === r && Object(us.a)(e) ? {
						type: Qn.PublicAccessNetwork
					} : {
						type: Qn.Unknown
					}
				}),
				hs = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less")),
				gs = n.n(hs);

			function fs() {
				return (fs = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function vs(e) {
				const t = e.icon,
					n = e.text,
					s = {
						id: e.id,
						role: "menuitem",
						children: m.a.createElement(m.a.Fragment, null, m.a.createElement(t, {
							className: gs.a.icon,
							isFilled: e.isCurrentPage
						}), m.a.createElement(n, {
							className: gs.a.text
						})),
						className: Object(v.a)(gs.a.item, e.className, {
							[gs.a.mFocused]: !!e.isFocused,
							[gs.a.buttonContainer]: !e.to
						}),
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
				return s["aria-label"] = e.to || e.label, e.to ? e.externalLink ? m.a.createElement("a", fs({}, s, {
					href: e.to,
					target: "_blank"
				})) : m.a.createElement(zn.a, fs({}, s, {
					to: e.to
				})) : m.a.createElement("button", s)
			}
			var Os = n("./src/reddit/constants/listings.ts"),
				ys = n("./src/reddit/helpers/overlay/index.ts"),
				Cs = n("./src/reddit/routes/modListing/index.ts"),
				xs = n("./src/reddit/routes/powerups/index.ts"),
				Es = n("./src/reddit/routes/predictions/index.ts"),
				Ps = n("./src/reddit/routes/talk/index.ts"),
				js = n("./src/reddit/selectors/experiments/econ/index.ts"),
				_s = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				Ss = n("./src/reddit/selectors/multireddit.ts"),
				ks = n("./src/lib/LinkedListMap/index.ts"),
				ws = n("./src/reddit/routes/avatar/index.ts");

			function Ms() {
				return (Ms = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Ns = Object(f.c)({
				account: e => e.user.account,
				favoriteMultireddits: e => e.subscriptions.favoriteMultiOrder.map(t => Object(Ss.e)(e, t)).filter(Boolean),
				favoriteProfiles: e => e.subscriptions.favoriteProfileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				favoriteSubreddits: e => e.subscriptions.favoriteSubredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubreddits: e => (e.subreddits.moderated.order || []).map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubredditsPending: e => e.subreddits.moderated.api.pending || !e.subreddits.moderated.api.fetched,
				multis: e => e.subscriptions.multiredditOrder.map(t => Object(Ss.e)(e, t)).filter(Boolean),
				multisPending: e => e.multireddits.api.forUser.pending || !e.multireddits.api.forUser.fetched,
				profiles: e => e.subscriptions.profileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				subscriptions: e => e.subscriptions.subredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptionsPending: e => e.subscriptions.api.pending || !e.subscriptions.api.fetched
			});
			var Is;
			! function(e) {
				e[e.Header = 0] = "Header", e[e.Subreddit = 1] = "Subreddit", e[e.SubredditAutocomplete = 2] = "SubredditAutocomplete", e[e.Profile = 3] = "Profile", e[e.Multi = 4] = "Multi", e[e.GenericClickable = 5] = "GenericClickable", e[e.GenericLink = 6] = "GenericLink", e[e.LoadingState = 7] = "LoadingState", e[e.Category = 8] = "Category", e[e.Action = 9] = "Action", e[e.CreatePost = 10] = "CreatePost"
			}(Is || (Is = {}));
			const Ts = [e => ({
					id: Qn.Employee,
					type: Is.GenericLink,
					model: {
						url: "/user/reddit/m/employee_subbies/new",
						displayText: "Employee Communities",
						icon: e => m.a.createElement(Zn.a, Ms({
							name: "home"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, "Employee Communities")
						}
					},
					telemetryNoun: "employee"
				})],
				As = () => [e => ({
					id: Qn.All,
					type: Is.GenericLink,
					model: {
						url: "/r/all/",
						displayText: r.fbt._("All", null, {
							hk: "2M8nEy"
						}).toString(),
						icon: e => m.a.createElement(Zn.a, Ms({
							name: "all"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, r.fbt._("All", null, {
								hk: "2M8nEy"
							}))
						}
					},
					telemetryNoun: "all"
				})],
				Rs = () => [e => ({
					id: "reddit-feeds",
					type: Is.Header,
					model: {
						displayText: r.fbt._("Feeds", null, {
							hk: "4zvMfr"
						}).toString()
					}
				}), (e, t) => ({
					id: Qn.Home,
					type: Is.GenericLink,
					model: {
						url: "/",
						displayText: r.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => m.a.createElement(Zn.a, Ms({
							name: "home"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, r.fbt._("Home", null, {
								hk: "2u56yo"
							}))
						}
					},
					telemetryNoun: "home"
				}), e => ({
					id: Qn.Popular,
					type: Is.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: r.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(Zn.a, Ms({
							name: "popular"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, r.fbt._("Popular", null, {
								hk: "1op8tD"
							}))
						}
					},
					telemetryNoun: "popular"
				}), ...As()],
				Ls = [e => ({
					id: "reddit-feeds",
					type: Is.Header,
					model: {
						displayText: r.fbt._("Reddit Feeds", null, {
							hk: "3C1mtF"
						}).toString()
					}
				}), () => ({
					id: Qn.Home,
					type: Is.GenericLink,
					model: {
						url: "/",
						displayText: r.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(Zn.a, Ms({
							name: "home"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, r.fbt._("Popular", null, {
								hk: "1op8tD"
							}))
						}
					},
					telemetryNoun: "popular"
				}), ...As()],
				Ds = [e => ({
					id: "reddit-other",
					type: Is.Header,
					model: {
						displayText: r.fbt._("Other", null, {
							hk: "1etY05"
						}).toString()
					}
				}), e => ({
					id: Qn.Settings,
					type: Is.GenericLink,
					model: {
						url: "/settings",
						displayText: r.fbt._("User Settings", null, {
							hk: "36WFGd"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return m.a.createElement(os.a, {
								className: t
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, r.fbt._("User Settings", null, {
								hk: "36WFGd"
							}))
						}
					},
					telemetryNoun: "settings"
				}), e => ({
					id: Qn.Inbox,
					type: Is.GenericLink,
					model: {
						url: "/message/inbox/",
						displayText: r.fbt._("Messages", null, {
							hk: "43DUrY"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return m.a.createElement(os.a, {
								className: t
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, r.fbt._("Messages", null, {
								hk: "43DUrY"
							}))
						}
					},
					telemetryNoun: "mail"
				})],
				Fs = e => ({
					id: Qn.Coins,
					type: Is.GenericLink,
					model: {
						url: "/coins",
						displayText: r.fbt._("Coins", null, {
							hk: "ZFvDU"
						}).toString(),
						icon: e => m.a.createElement(Zn.a, Ms({
							name: "coins"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, r.fbt._("Coins", null, {
								hk: "ZFvDU"
							}))
						}
					},
					telemetryNoun: "coins"
				}),
				Us = e => ({
					id: Qn.Premium,
					type: Is.GenericLink,
					model: {
						url: "/premium",
						displayText: r.fbt._("Premium", null, {
							hk: "3i2C4T"
						}).toString(),
						icon: e => m.a.createElement(Zn.a, Ms({
							name: "premium"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, r.fbt._("Premium", null, {
								hk: "3i2C4T"
							}))
						}
					},
					telemetryNoun: "premium"
				}),
				Gs = e => ({
					id: Qn.Avatar,
					type: Is.GenericLink,
					model: {
						url: ws.a,
						displayText: r.fbt._("Avatar", null, {
							hk: "12GoEB"
						}).toString(),
						icon: e => m.a.createElement(Zn.a, Ms({
							name: "avatar_style"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, r.fbt._("Avatar", null, {
								hk: "43lxPH"
							}))
						}
					},
					telemetryNoun: "avatar"
				}),
				Bs = e => ({
					id: Qn.Powerups,
					type: Is.GenericLink,
					model: {
						url: xs.a,
						displayText: r.fbt._("Powerups", null, {
							hk: "w9Ere"
						}).toString(),
						icon: e => m.a.createElement(Zn.a, Ms({
							name: "powerup"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, r.fbt._("Powerups", null, {
								hk: "1f7fL8"
							}))
						}
					},
					telemetryNoun: "powerups"
				}),
				qs = e => ({
					id: Qn.Talk,
					type: Is.GenericLink,
					model: {
						url: Ps.a,
						displayText: r.fbt._("Talk", null, {
							hk: "lHWAD"
						}).toString(),
						icon: e => m.a.createElement(Zn.a, Ms({
							name: "live"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, r.fbt._("Talk", null, {
								hk: "31Avul"
							}))
						}
					},
					telemetryNoun: "talk"
				}),
				Hs = e => ({
					id: Qn.Predictions,
					type: Is.GenericLink,
					model: {
						url: Es.a,
						displayText: r.fbt._("Predictions", null, {
							hk: "4doXhN"
						}).toString(),
						icon: e => m.a.createElement(Zn.a, Ms({
							name: "prediction"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, r.fbt._("Predictions", null, {
								hk: "3lUrcj"
							}))
						}
					},
					telemetryNoun: "predictions"
				}),
				Ws = [e => ({
					id: Qn.ModQueue,
					type: Is.GenericLink,
					model: {
						url: "/r/mod/about/modqueue",
						displayText: r.fbt._("Mod Queue", null, {
							hk: "12pTAg"
						}).toString(),
						icon: e => m.a.createElement(Zn.a, Ms({
							name: "mod_queue"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, r.fbt._("Mod Queue", null, {
								hk: "12pTAg"
							}))
						}
					},
					telemetryNoun: "mod_queue"
				}), e => {
					return {
						id: Qn.ModMail,
						type: Is.GenericLink,
						model: {
							url: "https://mod.reddit.com/mail/all",
							displayText: r.fbt._("Modmail", null, {
								hk: "1BtYh4"
							}).toString(),
							icon: e => m.a.createElement(Zn.a, Ms({
								name: "mod_mail"
							}, e)),
							text(e) {
								let {
									className: t
								} = e;
								return m.a.createElement("span", {
									className: t
								}, r.fbt._("Modmail", null, {
									hk: "2QQ3dU"
								}))
							}
						},
						telemetryNoun: "modmail_beta"
					}
				}];

			function Vs(e, t, n, s) {
				t.subscriptions.length && (e.push({
					id: "header-subscriptions",
					type: Is.Header,
					model: {
						displayText: r.fbt._("my communities", null, {
							hk: "2cRte1"
						}).toString()
					}
				}), n && Qs(e, s), t.subscriptions.forEach(t => e.push({
					id: "sub" + t.id,
					type: Is.Subreddit,
					model: t,
					telemetryNoun: "community"
				}))), t.profiles.length && (e.push({
					id: "header-profiles",
					type: Is.Header,
					model: {
						displayText: r.fbt._("following", null, {
							hk: "1kjEfv"
						}).toString()
					}
				}), t.profiles.forEach(t => e.push({
					id: "pro" + t.id,
					type: Is.Profile,
					model: t,
					telemetryNoun: "profile"
				})))
			}
			const Qs = (e, t) => {
				const n = {
						id: Qn.CreateCommunity,
						telemetryNoun: "create_community"
					},
					s = {
						displayText: r.fbt._("Create Community", null, {
							hk: "41sjx"
						}).toString(),
						icon: e => m.a.createElement(Zn.a, Ms({
							name: "add"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, r.fbt._("Create Community", null, {
								hk: "41sjx"
							}).toString())
						}
					};
				e.push({
					...n,
					type: Is.GenericClickable,
					model: {
						...s,
						onClick: () => {
							t(Object(_e.h)(Fe.a.SUBREDDIT_CREATION_MODAL_ID))
						}
					}
				})
			};
			var Ks = n("./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less"),
				zs = n.n(Ks);

			function Js(e) {
				return m.a.createElement("div", {
					className: Object(v.a)(zs.a.header, e.className),
					role: "heading"
				}, e.children)
			}
			var Ys = n("./src/reddit/actions/subscription/index.ts"),
				Zs = n("./src/reddit/helpers/trackers/customFeeds.ts"),
				Xs = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				$s = n.n(Xs);

			function er() {
				return (er = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const tr = Object(f.c)({
					currentUser: at.k,
					hideNSFWPref: at.F,
					isLoggedIn: at.P
				}),
				nr = Object(p.b)(tr, (e, t) => ({
					toggleFavorite: n => {
						switch (n.stopPropagation(), n.preventDefault(), t.type) {
							case Is.Subreddit:
								e(Object(Ys.c)({
									id: t.model.id,
									type: "subreddit"
								}));
								break;
							case Is.Profile:
								e(Object(Ys.c)({
									id: t.model.id,
									type: "profile"
								}));
								break;
							case Is.Multi:
								e(Object(Ys.a)(t.model.url)), t.model.isFavorited ? t.sendEvent(Object(Zs.f)(t.model.url)) : t.sendEvent(Object(Zs.c)(t.model.url))
						}
					}
				}));
			var sr = Object(A.c)(nr((function(e) {
					const t = {
						className: Object(v.a)($s.a.item, e.className, {
							[$s.a.mFocused]: !!e.isFocused
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
						case Is.Subreddit:
							return m.a.createElement(zn.a, er({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(ss.b, {
								className: $s.a.icon,
								shouldHideNsfwIcon: e.hideNSFWPref,
								subredditOrProfile: e.model
							}), m.a.createElement("span", {
								className: $s.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(Zn.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(v.a)($s.a.favorite, {
									[$s.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Is.SubredditAutocomplete:
							return m.a.createElement(zn.a, er({}, t, {
								"aria-label": e.model.name,
								to: `/r/${e.model.name}/`
							}), m.a.createElement(ss.b, {
								className: $s.a.icon,
								primaryColor: e.model.primaryColor,
								iconUrl: e.model.communityIcon || e.model.icon
							}), m.a.createElement("span", {
								className: $s.a.text
							}, e.model.name));
						case Is.Multi:
							return m.a.createElement(zn.a, er({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement("img", {
								src: e.model.icon,
								className: $s.a.customFeedIcon
							}), m.a.createElement("span", {
								className: $s.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(Zn.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(v.a)($s.a.favorite, {
									[$s.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Is.Profile:
							return m.a.createElement(zn.a, er({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(rs.a, {
								className: $s.a.icon,
								iconUrl: e.model.icon.url,
								isNSFW: e.model.isNSFW,
								userName: e.model.name
							}), m.a.createElement("span", {
								className: $s.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(Zn.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(v.a)($s.a.favorite, {
									[$s.a.mFavorite]: !!e.isFavorite
								})
							})))
					}
				}))),
				rr = n("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				or = n.n(rr);

			function ar(e) {
				return m.a.createElement("div", {
					className: e.className
				}, m.a.createElement("div", {
					className: or.a.header
				}), m.a.createElement("div", {
					className: or.a.item
				}), m.a.createElement("div", {
					className: or.a.item
				}), m.a.createElement("div", {
					className: or.a.item
				}), m.a.createElement("div", {
					className: or.a.item
				}))
			}
			var ir = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				cr = n("./src/reddit/actions/subreddit.ts"),
				dr = n("./src/reddit/constants/keycodes.ts"),
				lr = n("./src/reddit/helpers/correlationIdTracker.ts"),
				ur = n("./src/reddit/helpers/trackers/postComposer.ts"),
				mr = n("./src/lib/loadableAction/index.ts"),
				pr = n("./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less"),
				br = n.n(pr);

			function hr() {
				return (hr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function gr(e) {
				return e.id === Qn.ModMail || e.id === Qn.CreateCommunity
			}

			function fr(e) {
				const t = new ks.a("id");
				return e.forEach(e => {
					(function(e) {
						return e.type !== Is.Header && e.type !== Is.LoadingState
					})(e) && t.push({
						id: e.id
					})
				}), t
			}
			const vr = Object(f.c)({
					favoriteMultireddits: e => new Set(e.subscriptions.favoriteMultiOrder),
					favoriteProfiles: e => new Set(e.subscriptions.favoriteProfileOrder),
					favoriteSubreddits: e => new Set(e.subscriptions.favoriteSubredditOrder),
					unfilteredListBuilder: e => t => {
						const n = Ns(e),
							s = new ks.a("id"),
							o = Object(at.ob)(e),
							a = Object(js.q)(e),
							i = [];
						a || i.push(Qn.Predictions);
						const c = (e => Object(js.y)(e) ? [Us, Fs, Gs, Bs, qs, Hs] : [Fs, Us, Gs, Bs, qs, Hs])(e),
							d = i.length ? c.filter(e => !i.includes(e(null).id)) : c;
						if (n.account) {
							const a = n.account;
							(n.favoriteSubreddits.length || n.favoriteProfiles.length || n.favoriteMultireddits.length) && (s.push({
								id: "header-favorites",
								type: Is.Header,
								model: {
									displayText: r.fbt._("favorites", null, {
										hk: "4Gg0k2"
									}).toString()
								}
							}), n.favoriteSubreddits.forEach(e => s.push({
								id: "fav" + e.id,
								type: Is.Subreddit,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteProfiles.forEach(e => s.push({
								id: "fav" + e.id,
								type: Is.Profile,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteMultireddits.forEach(e => s.push({
								id: "fav" + e.url,
								type: Is.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), n.multisPending && s.push({
								id: "multis-pending",
								type: Is.LoadingState,
								model: {
									displayText: ""
								}
							}), n.moderatingSubredditsPending ? s.push({
								id: "moderatingSubreddits-pending",
								type: Is.LoadingState,
								model: {
									displayText: ""
								}
							}) : n.moderatingSubreddits.length && (s.push({
								id: "header-moderating",
								type: Is.Header,
								model: {
									displayText: r.fbt._("moderating", null, {
										hk: "2du7dx"
									}).toString()
								}
							}), a.isMod && Ws.forEach(e => s.push(e(a))), s.push({
								id: Qn.ModListing,
								type: Is.GenericLink,
								model: {
									url: Cs.a,
									displayText: "r/Mod",
									icon: e => m.a.createElement(Zn.a, Ms({
										name: "mod_queue"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, "r/Mod")
									}
								},
								telemetryNoun: "r_mod"
							}), n.moderatingSubreddits.forEach(e => s.push({
								id: "mod" + e.id,
								type: Is.Subreddit,
								model: e,
								telemetryNoun: "community_moderate"
							}))), n.multis.length > 0 && ((e, t, n) => {
								e.push({
									id: "header-multis",
									type: Is.Header,
									model: {
										displayText: r.fbt._("Custom feeds", null, {
											hk: "3K02MA"
										}).toString(),
										button(e) {
											let {
												className: t,
												sendClickEvent: s
											} = e;
											return m.a.createElement("button", {
												onClick: () => {
													n(Object(_e.h)(Fe.a.MULTIREDDIT_CREATE)), s()
												},
												className: Object(v.a)(t, is.a.multiPlusButton)
											}, m.a.createElement(Zn.a, {
												name: "add"
											}))
										},
										buttonTelemetryNoun: "create_new_custom_feed"
									}
								}), t.multis.forEach(t => e.push({
									id: t.url,
									type: Is.Multi,
									model: t,
									telemetryNoun: "custom_feed"
								}))
							})(s, n, t), n.subscriptionsPending ? s.push({
								id: "subscriptions-pending",
								type: Is.LoadingState,
								model: {
									displayText: ""
								}
							}) : Vs(s, n, o, t), ((e, t, n, s) => (Rs().forEach(e => t.push(e(n))), n.isEmployee && Ts.forEach(e => t.push(e(n))), Object(us.a)(e) && t.push({
								id: Qn.PublicAccessNetwork,
								type: Is.GenericClickable,
								model: {
									onClick: () => {
										s(Object(ys.a)(Os.c[Os.b.Rpan]))
									},
									displayText: r.fbt._("Reddit live", null, {
										hk: "3zuymj"
									}).toString(),
									icon: e => m.a.createElement(Zn.a, Ms({
										name: "video_live"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, r.fbt._("Reddit Live", null, {
											hk: "93lry"
										}))
									}
								},
								telemetryNoun: "rpan"
							}), t))(e, s, a, t), Ds.forEach(e => s.push(e(a))), s.push((() => ({
								id: Qn.CreatePost,
								type: Is.CreatePost,
								model: {
									url: "/submit",
									displayText: r.fbt._("Create Post", null, {
										hk: "dGck6"
									}).toString(),
									icon: e => m.a.createElement(Zn.a, Ms({
										name: "add"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, r.fbt._("Create Post", null, {
											hk: "dGck6"
										}))
									}
								}
							}))()), s.push((() => ({
								id: Qn.DailyCharts,
								type: Is.GenericLink,
								model: {
									url: "/subreddits/leaderboard/",
									displayText: r.fbt._("Top Communities", null, {
										hk: "1KzP9v"
									}).toString(),
									icon: e => m.a.createElement(Zn.a, Ms({
										name: "list_numbered"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, r.fbt._("Top Communities", null, {
											hk: "1KzP9v"
										}))
									}
								},
								telemetryNoun: "daily_charts"
							}))()), Object(_s.b)(e) && (e => e.push({
								id: Qn.NotificationsInbox,
								type: Is.GenericLink,
								model: {
									url: "/notifications",
									displayText: r.fbt._("Notifications", null, {
										hk: "2xenVO"
									}).toString(),
									icon: e => m.a.createElement(Zn.a, Ms({
										name: "notification"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, r.fbt._("Notifications", null, {
											hk: "2xenVO"
										}))
									}
								},
								telemetryNoun: "inbox"
							}))(s), d.forEach(e => s.push(e(a)))
						} else n.subscriptions.length || Object(at.P)(e) ? Rs().forEach(e => s.push(e(null))) : Ls.forEach(e => s.push(e(null))), s.push({
							id: "reddit-other",
							type: Is.Header,
							model: {
								displayText: r.fbt._("Other", null, {
									hk: "1etY05"
								}).toString()
							}
						}), d.forEach(e => s.push(e(null))), Vs(s, n, o, t);
						return s
					}
				}),
				Or = e => ({
					onHomeClicked: () => e(Object(mr.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("Frontpage~ModListing~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))()),
					onGotoUrl: t => e(Object(h.b)(t)),
					onSubredditsRequested: () => {
						e(Object(Ys.f)()), e(Object(cr.q)()), e(Object(mr.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))())
					},
					onActionDispatched: t => e(t)
				}),
				yr = (e, t, n) => ({
					...e,
					...t,
					...n,
					unfilteredList: e.unfilteredListBuilder(t.onActionDispatched)
				});
			class Cr extends m.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = e.currentTarget.value,
							n = this.getList(t, this.props),
							s = fr(n),
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
						if (e.key === dr.b.Escape && this.props.onClose && this.props.onClose(!0), e.key === dr.b.Tab && this.props.onClose && this.props.onClose(), e.key === dr.b.Enter) {
							const e = this.state.focusOrder.first(),
								t = this.state.focusedItemId || (e ? e.id : null);
							if (t) {
								const e = this.state.renderableList.get(t);
								e && e.type !== Is.Header && e.type !== Is.LoadingState && (this.fireTelemetryForListItem(e), e.type === Is.GenericClickable ? e.model.onClick() : gr(e) ? window.open(e.model.url, "_blank") : this.props.onGotoUrl(e.model.url), this.props.onClose && this.props.onClose(!0))
							}
						}
						e.key === dr.b.ArrowDown && (e.preventDefault(), this.setState(e => {
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
						})), e.key === dr.b.ArrowUp && (e.preventDefault(), this.setState(e => {
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
							case Qn.Coins:
							case Qn.Premium:
								Object(lr.e)(lr.a.GoldPayment, !0), t = Object(lr.c)(lr.a.GoldPayment)
						}
						switch (e.type) {
							case Is.Category:
							case Is.GenericLink:
							case Is.GenericClickable:
							case Is.Multi:
							case Is.Profile:
							case Is.Subreddit:
								this.props.sendEvent(n => ({
									...Object(ot.o)(n),
									...t ? {
										correlationId: t
									} : null,
									customFeed: e.type === Is.Multi ? Object(ot.n)(n, e.model.url) : null,
									source: "community_nav",
									action: "click",
									noun: e.telemetryNoun
								}));
								break;
							case Is.Header: {
								const {
									buttonTelemetryNoun: t
								} = e.model;
								t && this.props.sendEvent(e => ({
									...Object(ot.o)(e),
									source: "community_nav",
									action: "click",
									noun: t
								}));
								break
							}
							case Is.CreatePost:
								this.props.sendEvent(Object(ur.x)({
									actionInfoType: "community_nav"
								}))
						}
					}, this.state = {
						currentInputText: "",
						focusedItemId: null,
						focusOrder: fr(e.unfilteredList),
						renderableList: e.unfilteredList
					}, this.inputRef = m.a.createRef()
				}
				componentDidMount() {
					"complete" === document.readyState ? this.props.onSubredditsRequested() : window.addEventListener("load", this.props.onSubredditsRequested), this.props.canAutofocus && setTimeout(() => !!this.inputRef.current && this.inputRef.current.focus())
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = this.state.currentInputText,
						n = this.getList(t, e),
						s = fr(n);
					this.setState({
						focusOrder: s,
						renderableList: n
					})
				}
				getList(e, t) {
					if (e) {
						const n = new ks.a("id"),
							s = new RegExp(e, "ig");
						t.unfilteredList.forEach(e => {
							switch (e.type) {
								case Is.Category:
								case Is.GenericLink:
								case Is.Multi:
								case Is.Profile:
								case Is.Subreddit:
								case Is.CreatePost:
									e.model.displayText.match(s) && n.push(e);
									break;
								case Is.Header: {
									const t = n.last();
									t && t.type === Is.Header && n.pop(), n.push(e);
									break
								}
								case Is.LoadingState:
							}
						});
						const r = n.last();
						return r && r.type === Is.Header && n.pop(), n
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
						className: br.a.filter,
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
								this.fireTelemetryForListItem(e), this.props.onClose && this.props.onClose(!0), e.id === Qn.Home && this.props.onHomeClicked(), e.type === Is.GenericClickable && e.model.onClick()
							},
							isCurrentPage: this.props.currentPage.type === e.id
						};
						switch (e.type) {
							case Is.GenericClickable:
								return m.a.createElement(vs, hr({}, n, {
									className: br.a.item,
									label: e.model.displayText,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Is.Category:
							case Is.GenericLink:
							case Is.CreatePost:
								return m.a.createElement(vs, hr({}, n, {
									externalLink: gr(e),
									className: br.a.item,
									to: e.model.url,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Is.Header: {
								const n = e.model.button;
								return m.a.createElement(Js, {
									className: br.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								}, e.model.displayText, n && m.a.createElement(n, {
									className: br.a.headerButton,
									sendClickEvent: () => this.fireTelemetryForListItem(e)
								}))
							}
							case Is.LoadingState:
								return m.a.createElement(ar, {
									className: br.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								});
							case Is.Multi:
								return m.a.createElement(sr, hr({}, n, {
									className: br.a.item,
									isFavorite: e.model.isFavorited,
									model: e.model,
									type: Is.Multi
								}));
							case Is.Profile:
								return m.a.createElement(sr, hr({}, n, {
									className: br.a.item,
									isFavorite: this.props.favoriteProfiles.has(e.model.id),
									model: e.model,
									type: Is.Profile
								}));
							case Is.Subreddit:
								return m.a.createElement(sr, hr({}, n, {
									className: br.a.item,
									isFavorite: this.props.favoriteSubreddits.has(e.model.id),
									model: e.model,
									type: Is.Subreddit
								}))
						}
					}))
				}
			}
			const xr = Object(p.b)(vr, Or, yr)(Object(A.c)(Cr)),
				Er = Object(p.b)(vr, Or, yr)(Object(A.c)(Object(ir.b)(Cr))),
				Pr = Object(It.u)({
					isCommentsPage: It.x,
					pageLayer: e => e
				}),
				jr = Object(f.c)({
					currentPage: bs,
					hideNSFWPref: at.F,
					isD2xSeoDisableLightboxEnabled: Xn.a,
					isDropdownOpen: $n.a,
					isLoggedIn: at.P,
					isOverlayOpen: Ct.i,
					isPinnedSubscriptionsMenuDisabled: es.a,
					isSubscriptionsPinned: es.b
				});
			class _r extends m.a.Component {
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
						this.enablePreventFocus(), this.props.closeDropdown(), this.disablePreventFocus(), e && Object(Yn.d)()
					}, this.onButtonFocus = () => {
						this.props.isSubscriptionsPinned || this.state.preventFocus || this.props.openDropdown(), this.state.preventFocus && this.disablePreventFocus()
					}, this.toggleDropdown = e => {
						this.props.isSubscriptionsPinned || (this.props.sendEvent(e => ({
							...Object(ot.o)(e),
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
							isD2xSeoDisableLightboxEnabled: a,
							isLoggedIn: i,
							isOverlayOpen: c
						} = this.props, d = this.props.isDropdownOpen && !this.props.isSubscriptionsPinned, l = c || !a && !i && o;
						return m.a.createElement("div", {
							"aria-label": r.fbt._("Start typing to filter your communities or use up and down to select.", null, {
								hk: "2PXR4j"
							}),
							className: Object(v.a)(is.a.container, n, {
								[is.a.mOpen]: d,
								[is.a.mNotPinned]: !this.props.isSubscriptionsPinned,
								[is.a.mPinned]: this.props.isSubscriptionsPinned,
								[is.a.containerExp]: e
							}),
							onClickCapture: this.stopPropagation,
							role: "navigation"
						}, m.a.createElement("button", {
							className: is.a.selector,
							onMouseDown: this.props.isSubscriptionsPinned ? this.props.onLocationClick : this.toggleDropdown,
							onFocus: this.onButtonFocus,
							tabIndex: this.state.preventFocus || this.props.isSubscriptionsPinned ? -1 : 0
						}, m.a.createElement("span", {
							className: is.a.containerText
						}, " ", function(e) {
							switch (e.type) {
								case Qn.Acknowledgements:
									return cs(r.fbt._("Acknowledgements", null, {
										hk: "32JBVF"
									}).toString());
								case Qn.All:
									return cs(r.fbt._("All", null, {
										hk: "2gaHOy"
									}).toString());
								case Qn.Appeal:
									return cs(r.fbt._("Appeal", null, {
										hk: "2dMFkN"
									}).toString());
								case Qn.Avatar:
									return cs(r.fbt._("Avatar", null, {
										hk: "4E0V0C"
									}).toString());
								case Qn.Coins:
									return cs(r.fbt._("Coins", null, {
										hk: "3ZpUbG"
									}).toString());
								case Qn.Community:
									return cs(e.model.displayText, !0);
								case Qn.CommunitySearch:
									return cs(r.fbt._("Subreddit Results", null, {
										hk: "19qRVH"
									}).toString());
								case Qn.CreateCommunity:
									return cs(r.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case Qn.CreatePost:
									return cs(r.fbt._("Create Post", null, {
										hk: "30V40V"
									}).toString());
								case Qn.DailyCharts:
									return cs(r.fbt._("Top Communities", null, {
										hk: "1sWIEu"
									}).toString());
								case Qn.GlobalSearch:
									return cs(r.fbt._("Search Results", null, {
										hk: "scJwR"
									}).toString());
								case Qn.Geotagging:
									return cs(r.fbt._("Help Out", null, {
										hk: "1RN9v2"
									}).toString());
								case Qn.Home:
									return cs(r.fbt._("Home", null, {
										hk: "amHQd"
									}).toString());
								case Qn.Inbox:
									return cs(r.fbt._("Messages", null, {
										hk: "25MBSp"
									}).toString());
								case Qn.ModListing:
									return cs("r/Mod");
								case Qn.ModMail:
									return cs(r.fbt._("Modmail", null, {
										hk: "of9AC"
									}).toString());
								case Qn.ModQueue:
									return cs(r.fbt._("Mod Queue", null, {
										hk: "3hdHhb"
									}).toString());
								case Qn.Multi:
									return cs(e.model.displayText, !0);
								case Qn.NotificationsInbox:
									return cs(r.fbt._("Notifications", null, {
										hk: "FiFRe"
									}).toString());
								case Qn.InternationalSite:
								case Qn.Popular:
									return cs(r.fbt._("Popular", null, {
										hk: "1rTNHl"
									}).toString());
								case Qn.Powerups:
									return cs(r.fbt._("Powerups", null, {
										hk: "1ZXjgq"
									}).toString());
								case Qn.Predictions:
									return cs(r.fbt._("Predictions", null, {
										hk: "47Cyyb"
									}).toString());
								case Qn.Premium:
									return cs(r.fbt._("Premium", null, {
										hk: "x0xKv"
									}).toString());
								case Qn.PublicAccessNetwork:
									return cs(r.fbt._("Reddit Live", null, {
										hk: "4tlHX5"
									}).toString());
								case Qn.Report:
									return cs(r.fbt._("Report", null, {
										hk: "4oVcnd"
									}).toString());
								case Qn.Settings:
									return cs(r.fbt._("User Settings", null, {
										hk: "hcLHW"
									}).toString());
								case Qn.SubredditCreation:
									return cs(r.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case Qn.Talk:
									return cs(r.fbt._("Talk", null, {
										hk: "gVQjb"
									}).toString());
								case Qn.Topic:
									return cs(e.model);
								case Qn.Unknown:
									return cs("");
								case Qn.UserDataRequest:
									return cs(r.fbt._("Request your Reddit data", null, {
										hk: "3LqHku"
									}).toString());
								case Qn.UserProfile:
									return cs(e.model.displayText, !0);
								case Qn.UserProfileName:
									return cs(e.name, !0);
								case Qn.ViewDraft:
									return cs(r.fbt._("View Draft", null, {
										hk: "3k2k9a"
									}).toString())
							}
						}(t), " "), function(e, t) {
							const n = e => m.a.createElement(Zn.a, {
								name: e,
								isFilled: !0,
								className: is.a.defaultIcon
							});
							switch (e.type) {
								case Qn.All:
									return n("all");
								case Qn.Acknowledgements:
								case Qn.Appeal:
									return n("edit");
								case Qn.Avatar:
									return n("avatar_style");
								case Qn.Coins:
									return n("coins");
								case Qn.Community:
								case Qn.CommunitySearch: {
									const n = Object(ts.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(ss.b, {
										className: is.a.subredditIcon,
										iconUrl: n.url,
										primaryColor: n.color
									})
								}
								case Qn.CreateCommunity:
								case Qn.CreatePost:
									return n("add");
								case Qn.DailyCharts:
									return n("list_numbered");
								case Qn.Geotagging:
									return n("custom_feed");
								case Qn.GlobalSearch:
									return n("search");
								case Qn.Home:
									return n("home");
								case Qn.Inbox:
									return m.a.createElement(os.a, {
										wrapperClassName: is.a.userIcon
									});
								case Qn.ModListing:
									return n("mod_queue");
								case Qn.ModMail:
									return n("mod_mail");
								case Qn.ModQueue:
									return n("mod_queue");
								case Qn.Multi:
									return m.a.createElement("img", {
										src: e.model.icon,
										className: is.a.customFeedIcon
									});
								case Qn.NotificationsInbox:
									return n("notification");
								case Qn.InternationalSite:
								case Qn.Popular:
									return n("popular");
								case Qn.Powerups:
									return n("powerup");
								case Qn.Predictions:
									return n("prediction");
								case Qn.Premium:
									return n("premium");
								case Qn.PublicAccessNetwork:
									return n("video_live");
								case Qn.Report:
									return n("report");
								case Qn.Settings:
									return m.a.createElement(os.a, {
										wrapperClassName: is.a.userIcon
									});
								case Qn.SubredditCreation:
									return n("add");
								case Qn.Talk:
									return n("live");
								case Qn.Topic:
									return n("custom_feed");
								case Qn.Unknown:
									return m.a.createElement("div", {
										className: is.a.unknownIcon
									});
								case Qn.UserDataRequest:
									return n("add");
								case Qn.UserProfile: {
									const n = Object(ts.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(rs.a, {
										className: is.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										omitResponsivePresenceWrapper: !0,
										userName: e.model.name
									})
								}
								case Qn.UserProfileName:
									return m.a.createElement("div", {
										className: is.a.defaultIcon
									});
								case Qn.Unknown:
									return m.a.createElement("div", {
										className: is.a.unknownIcon
									});
								case Qn.UserProfile: {
									const n = Object(ts.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(rs.a, {
										className: is.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										userName: e.model.name
									})
								}
								case Qn.ViewDraft:
									return n("edit")
							}
						}(t, s), !this.props.isSubscriptionsPinned && m.a.createElement(Zn.a, {
							name: "caret_down",
							className: is.a.caretDown
						})), d && !this.props.isPinnedSubscriptionsMenuDisabled && m.a.createElement(Zn.a, {
							name: "side_menu",
							className: is.a.pin,
							onClick: l ? void 0 : this.props.onPinSubscriptions
						}), d && m.a.createElement(Er, {
							canAutofocus: !0,
							className: is.a.listContainer,
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
					return m.a.createElement(g.a.Consumer, null, this.renderHeaderSubreddit)
				}
			}
			var Sr = Pr(Object(p.b)(jr, (e, t) => ({
					closeDropdown: () => e(Object(_.f)()),
					onLocationRefresh: (n, s) => e(Object(Jn.f)(n, t.pageLayer, s)),
					onPinSubscriptions: () => {
						e(Object(_.i)()), e(Object(_.f)())
					},
					openDropdown: () => e(Object(_.g)()),
					toggleDropdown: () => e(Object(_.h)())
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onLocationClick: n => t.onLocationRefresh(n, e.isOverlayOpen)
				}))(Object(A.c)(_r))),
				kr = n("./src/reddit/components/JumpToContent/index.tsx"),
				wr = n("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				Mr = n("./node_modules/history/esm/history.js"),
				Nr = n("./node_modules/lodash/isEmpty.js"),
				Ir = n.n(Nr),
				Tr = n("./node_modules/lodash/pick.js"),
				Ar = n.n(Tr),
				Rr = n("./node_modules/uuid/v4.js"),
				Lr = n.n(Rr),
				Dr = n("./src/lib/hooks/usePrevious.ts"),
				Fr = n("./src/lib/makeSearchKey/index.ts"),
				Ur = n("./src/reddit/actions/post.ts"),
				Gr = n("./src/reddit/actions/search.ts"),
				Br = n("./src/lib/makeApiRequest/index.ts"),
				qr = n("./src/lib/omitHeaders/index.ts"),
				Hr = n("./src/reddit/constants/headers.ts");
			var Wr = n("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				Vr = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");
			const Qr = e => async (t, n, s) => {
				let {
					apiContext: r
				} = s;
				var o, a;
				const i = await ((e, t) => Object(Br.a)(Object(qr.a)(e, [Hr.a]), {
					endpoint: `${e.apiUrl}/api/subreddit_autocomplete_v2.json`,
					method: O.jb.GET,
					data: {
						query: t
					}
				}))(r(), e);
				if (i.ok && (null === (a = null === (o = i.body) || void 0 === o ? void 0 : o.data) || void 0 === a ? void 0 : a.children)) {
					const n = (e => {
						const t = [],
							n = {};
						return e.forEach(e => {
							const s = e.data,
								r = e.kind;
							r === O.Ib.Subreddit ? (t.push(s.name), n[s.name] = Object(Vr.a)(s)) : r === O.Ib.Account && (t.push(s.subreddit.name), n[s.subreddit.name] = Object(Wr.a)(s.subreddit, s.name, s.accept_followers))
						}), {
							data: n,
							order: t
						}
					})(i.body.data.children);
					n && n.data && n.order && t(Object(Gr.o)({
						typeaheadSuggestions: n.data,
						order: n.order,
						searchQuery: e
					}))
				}
			};
			var Kr, zr = n("./src/reddit/actions/search/trending.ts"),
				Jr = n("./src/reddit/components/SearchDropdown/index.tsx"),
				Yr = n("./src/reddit/components/SearchDropdown/TypeaheadSuggestion.tsx"),
				Zr = n("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				Xr = n("./src/reddit/constants/history.ts"),
				$r = n("./src/reddit/constants/parameters.ts"),
				eo = n("./src/reddit/helpers/getSearchUrl/index.ts"),
				to = n("./src/reddit/helpers/isArrayEqual.ts"),
				no = n("./src/reddit/helpers/trackers/screenview.ts"),
				so = n("./src/reddit/helpers/trackers/searchResults.ts"),
				ro = n("./src/reddit/hooks/usePageLayer.ts"),
				oo = n("./src/reddit/models/Search/index.ts"),
				ao = n("./src/reddit/selectors/searchFix.ts"),
				io = n("./src/reddit/selectors/searchResults.ts"),
				co = n("./src/reddit/selectors/trending.ts"),
				lo = n("./src/reddit/helpers/search/searchImpressionId.ts"),
				uo = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				mo = n("./src/reddit/controls/Search/index.m.less"),
				po = n.n(mo),
				bo = n("./node_modules/lodash/debounce.js"),
				ho = n.n(bo),
				go = n("./src/reddit/components/Pill/index.tsx"),
				fo = n("./src/reddit/components/Pill/PillText/index.m.less"),
				vo = n.n(fo);
			! function(e) {
				e.DAY = "DAY", e.NIGHT = "NIGHT"
			}(Kr || (Kr = {}));
			const Oo = {
					[Kr.DAY]: vo.a.pillTextVariantDay,
					[Kr.NIGHT]: vo.a.pillTextVariantNight
				},
				yo = e => m.a.createElement("div", {
					className: Object(v.a)(vo.a.pillText, Oo[e.variant])
				}, e.children);
			var Co = n("./src/reddit/controls/Search/CommunityPill/index.m.less"),
				xo = n.n(Co);
			const Eo = Object(f.c)({
					nightmode: at.cb
				}),
				Po = Object(p.b)(Eo)(e => {
					let {
						nightmode: t,
						subreddit: n
					} = e;
					return m.a.createElement(go.a, {
						"aria-hidden": !0,
						className: xo.a.communityPill,
						"data-testid": "community-search-pill"
					}, m.a.createElement(yo, {
						variant: t ? Kr.NIGHT : Kr.DAY
					}, m.a.createElement(ss.b, {
						className: po.a.subredditIcon,
						subredditOrProfile: n
					}), n.displayText))
				});
			var jo = n("./src/reddit/controls/Search/SearchBar/index.m.less"),
				_o = n.n(jo);
			const So = e => {
				let {
					inputRef: t,
					searchQuery: n,
					showCommunityPill: s,
					subreddit: o,
					onChange: a,
					onFormSubmit: i,
					onFocusSearchBar: c,
					onKeyDown: d
				} = e;
				const l = m.a.useContext(g.a),
					u = s && o ? r.fbt._("Search within {subredditName}", [r.fbt._param("subredditName", o.displayText)], {
						hk: "2B6J3t"
					}) : r.fbt._("Search all of Reddit", null, {
						hk: "1Fi1f5"
					});
				return m.a.createElement("form", {
					action: "/search/",
					autoComplete: "off",
					className: Object(v.a)(_o.a.searchBar, l && _o.a.searchBarExp),
					method: "get",
					onSubmit: i,
					onFocus: c,
					role: "search"
				}, m.a.createElement("label", {
					className: _o.a.inputLabel,
					htmlFor: "header-search-bar"
				}, m.a.createElement("div", {
					"aria-hidden": !0,
					className: _o.a.iconContainer
				}, m.a.createElement(Zn.a, {
					name: "search",
					className: _o.a.icon
				})), m.a.createElement(wr.a, {
					"aria-live": "assertive"
				}, u), s && o && m.a.createElement(Po, {
					subreddit: o
				})), m.a.createElement("input", {
					id: "header-search-bar",
					name: "q",
					className: _o.a.input,
					onChange: ho()((function() {
						var e;
						a((null === (e = null == t ? void 0 : t.current) || void 0 === e ? void 0 : e.value) || "")
					}), 200),
					onKeyDown: d,
					placeholder: r.fbt._("Search Reddit", null, {
						hk: "34Vfom"
					}),
					ref: t,
					type: "search",
					defaultValue: n
				}))
			};

			function ko(e) {
				let {
					className: t
				} = e;
				var n;
				const s = Object(ro.a)(),
					r = Object(It.Z)(s),
					o = Object(It.W)(s),
					{
						nsfwSessionSetting: a,
						refreshNsfwSessionSettingExpiryTime: i
					} = Object(Zr.b)(),
					[c, d] = Object(u.useState)(-1),
					[l, b] = Object(u.useState)([]),
					[g, f] = Object(u.useState)(!1),
					[O, y] = Object(u.useState)({}),
					[C, x] = Object(u.useState)([]),
					[E, P] = Object(u.useState)(null),
					j = Object(u.useRef)(null),
					_ = Object(u.useRef)(null),
					S = Object(A.b)(),
					k = Object(p.d)(),
					w = Object(p.e)(Ct.b),
					M = Object(p.e)(Ct.d),
					N = Object(p.e)(at.k),
					I = Object(p.e)(io.q),
					T = Object(p.e)(io.p),
					R = Object(p.e)(at.P),
					L = Object(p.e)(io.r),
					D = Object(p.e)(at.cb),
					F = Object(p.e)(Ct.r),
					U = Object(p.e)(e => Object(It.ab)(e, {
						pageLayer: s
					})),
					G = Object(p.e)(e => Object(It.r)(e, {
						pageLayer: s
					})),
					B = Object(p.e)(e => Object(It.e)(e, {
						pageLayer: s
					})),
					q = Object(p.e)(e => Object(co.a)(e, oo.d.dropdown)),
					H = Object(p.e)(io.x),
					W = Object(p.e)(at.jb),
					V = Object(Dr.a)(G),
					Q = Object(Dr.a)(r),
					K = Object(Dr.a)(H),
					z = Object(Dr.a)(q),
					J = ((null === (n = _.current) || void 0 === n ? void 0 : n.value) || "").trim(),
					Y = he(J),
					Z = w ? Object(ot.v)(w) : s ? Object(ot.v)(s) : void 0,
					X = O[J],
					$ = Object(Fr.e)({
						...Ar()(o || {}, $r.v),
						q: J
					});
				Object(u.useEffect)(() => {
					ee()
				}, [z, K, H, q]), Object(u.useEffect)(() => {
					V || !G || L || se()
				}, [V, G, L]), Object(u.useEffect)(() => {
					Ir()(H) || r ? ce(r || "") : ie()
				}, [Q, r]);
				const ee = () => {
						const e = Object(to.a)(K, H),
							t = Object(to.a)(z, q);
						if (!e || !t) {
							const e = H.length ? H : [...C, ...q];
							b(e)
						}
					},
					te = e => k(Object(Gr.p)({
						searchQuery: e
					})),
					ne = function() {
						let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						return e && lo.a.clear(uo.a.Typeahead), k(Object(Gr.k)())
					},
					se = () => k(Object(Gr.m)()),
					re = (e, t, n) => {
						e.preventDefault(), ((e, t, n, s) => {
							k(Object(h.b)(Object(Mr.c)({
								pathname: e,
								search: t,
								state: {
									[Xr.b.SearchOriginPage]: s,
									...n
								}
							})))
						})(t.url, t.qs, {
							...n,
							routeName: F,
							subredditName: M
						}, Z)
					},
					oe = async () => {
						q.length || g || (f(!0), await (() => k(Object(zr.b)(oo.d.dropdown)))(), f(!1))
					}, ae = e => {
						R && N && x(Object(jt.Ob)({
							...e,
							section: oo.c.recent
						}, N.id))
					}, ie = function() {
						let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						d(-1), P(null), ce(""), te(""), e && lo.a.update(uo.a.Typeahead), pe()
					};

				function ce(e) {
					_.current && (_.current.value = e)
				}
				const de = (e, t, n, s) => {
						const r = {
							displayQuery: e,
							rawQuery: t,
							structureType: n,
							searchQuery: J
						};
						S(Object(so.v)(s, r))
					},
					le = (e, t, n) => {
						S(Object(so.x)(e, t, n))
					},
					ue = (e, t, n, s) => {
						S(Object(so.z)(e, t, n, s))
					},
					me = e => {
						const t = l[e] || null,
							n = t ? t.searchQuery : "";
						d(e), ce(n), P(t)
					},
					pe = () => {
						if (q.length || oe(), N) {
							const e = Object(jt.M)(N.id);
							e.length > 0 && (x(R ? e : []), b([...e, ...q]))
						}
					},
					be = e => {
						!(!T || !T[e]) || (e ? (async e => {
							O[e] || (O[e] = !0, y({
								...O
							}), await k(Qr(e)), O[e] = !1, y({
								...O
							}))
						})(e) : pe())
					};

				function he(e) {
					const t = G && G.icon ? G.icon.url : "",
						n = null == G ? void 0 : G.displayText,
						s = !!G && G.isNSFW,
						r = oo.b.text;
					return {
						id: Lr()(),
						searchQuery: e,
						type: r,
						section: oo.c.recent,
						subredditOrProfileRestrictedName: n,
						displayInfo: {
							iconUrl: t,
							isNSFW: s
						}
					}
				}
				return m.a.createElement("div", {
					className: Object(v.a)(po.a.relativeWrapper, is.a.container, t, {
						"m-open": I
					}),
					id: Jr.b,
					ref: j
				}, m.a.createElement(So, {
					inputRef: _,
					onChange: e => {
						const t = e.trim();
						lo.a.update(uo.a.Typeahead), te(t), be(t)
					},
					searchQuery: J,
					onFormSubmit: e => {
						e.preventDefault(), J.trim() && (async e => {
							var t, n;
							const r = (null === (t = _.current) || void 0 === t ? void 0 : t.value) || "";
							if (!r.trim()) return;
							r !== J && te(r);
							let o = {
									...oo.a
								},
								d = {},
								u = !0;
							if (E && E.searchQuery === J ? ((o = E).id || (o.id = Lr()()), o.section === oo.c.recent ? le(r, o, c) : o.section === oo.c.typeahead ? (d = Object(Yr.b)(), u = !1, ue(r, o, c, l.filter(e => e.isSubreddit))) : de(r, r, ot.c.Search, so.a.RECENT)) : (o = he(r), S(Object(so.o)(ot.a.FullSearchButton, Object(Fr.e)({
									q: J
								}), U, uo.a.Typeahead, s || void 0))), ae(o), ne(u), !o.searchQuery) return;
							const m = Object(eo.a)({
								subreddit: G,
								multireddit: B,
								searchItem: o,
								searchOptions: void 0,
								shouldSearchSubreddit: U,
								includeNsfwResults: W && a
							});
							re(e, m, d), o.isTypeaheadSuggestion && ie(u), i(), null === (n = _.current) || void 0 === n || n.blur()
						})(e)
					},
					onFocusSearchBar: () => {
						Object(lr.c)(lr.a.SearchResults) || Object(lr.e)(lr.a.SearchResults), lo.a.update(uo.a.Typeahead), S(Object(so.o)(ot.a.SearchBar, $, U, uo.a.Typeahead, s || void 0)), I || ((() => k(Object(Gr.l)()))(), S(Object(no.u)($, null != s ? s : void 0, Object(ao.b)({
							pageLayer: s
						})))), be(J)
					},
					onKeyDown: e => {
						if (e.key === dr.b.Escape || e.key === dr.b.Tab) ne();
						else if (e.key === dr.b.ArrowDown) {
							if (e.preventDefault(), 0 === l.length || !I) return;
							if (c >= l.length - 1) return;
							me(c + 1)
						} else if (e.key === dr.b.ArrowUp) {
							if (e.preventDefault(), 0 === l.length || !I) return;
							if (-1 === c) return;
							me(c - 1)
						} else e.key === dr.b.Backspace && !J && U && L && (S(() => Object(so.h)(G)), (() => k(Object(Gr.j)()))())
					},
					showCommunityPill: U,
					subreddit: G
				}), m.a.createElement(Jr.c, {
					container: j.current,
					focusedItemIndex: c,
					searchOriginPage: Z,
					isOpen: I,
					isTrendingPending: g,
					isTypeaheadPending: X,
					itemList: l,
					nightmode: D,
					recentSearches: C,
					trendingItems: q,
					searchItem: Y,
					typeaheadSuggestions: H,
					onClearSearchQuery: ie,
					onClose: ne,
					onRemoveRecentSearch: e => {
						N && 0 !== C.length && (Object(jt.bb)(e, N.id), x(C.filter(t => t.searchQuery !== e.searchQuery)), d(-1))
					},
					onSendSearchClickRecentEvent: le,
					onSendSearchClickTypeaheadEvent: ue,
					onSetRecentSearch: ae,
					onUpdateSearchQuery: ce,
					fireAdPixelsOfType: (e, t) => k(Object(Ur.z)(e, t))
				}))
			}
			var wo = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				Mo = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				No = n("./src/reddit/selectors/responsivePage.ts"),
				Io = n("./src/reddit/components/Header/MwebResponsiveHeader/index.m.less"),
				To = n.n(Io);
			var Ao = e => {
					const {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: Object(v.a)(To.a.Container, t)
					}, m.a.createElement("a", {
						"aria-label": r.fbt._("Home", null, {
							hk: "1u0Rxp"
						}),
						className: To.a.HomeLink,
						href: G.a.redditUrl
					}, m.a.createElement(wo.a, {
						className: To.a.Snoo
					}), m.a.createElement(Mo.a, {
						className: To.a.Wordmark,
						color: "inherit"
					})))
				},
				Ro = n("./src/reddit/actions/cooldownTime.ts"),
				Lo = n("./src/reddit/components/BadgeCounter/index.tsx");

			function Do(e) {
				return `${e}`.padStart(2, "0")
			}
			class Fo {
				constructor(e) {
					this.startAt = 0, this.expireAt = 0, this.interval = 1e3, this.timeoutId = 0, this.tick = () => {
						this.startAt += this.interval;
						const e = Date.now() - this.startAt,
							t = this.getRemainingSeconds();
						if (this.callback(t), !t) return this.stop();
						const n = Math.max(0, this.interval - e);
						this.timeoutId = window.setTimeout(this.tick, n)
					}, this.callback = t => e(t || this.getRemainingSeconds())
				}
				stop() {
					window.clearTimeout(this.timeoutId), this.timeoutId = 0
				}
				start(e) {
					this.stop(), this.startAt = Date.now(), this.expireAt = e, this.callback(), this.timeoutId = window.setTimeout(this.tick, this.interval)
				}
				getRemainingSeconds() {
					return Math.max(0, Math.round((this.expireAt - Date.now()) / this.interval))
				}
			}
			var Uo = n("./src/reddit/selectors/experiments/hotPotato.ts"),
				Go = n("./src/reddit/components/Header/QuickLinks/Timer.m.less"),
				Bo = n.n(Go);
			const qo = Object(f.c)({
				isEmbedSubredditPage: Uo.c,
				isRequestPending: e => e.cooldownTimer.api.pending,
				expiresAt: e => e.cooldownTimer.expiresAt,
				currentPage: Ct.b
			});
			class Ho extends m.a.Component {
				constructor(e) {
					super(e), this.drawTimer = e => {
						const t = function(e) {
							if (!e) return null;
							const t = Math.min(99, Math.floor(e / 60 / 60)),
								n = Math.floor(e / 60 % 60),
								s = Math.floor(e % 60);
							return t || n || s ? t ? `${t}h${Do(n)}` : `${n}:${Do(s)}` : null
						}(e);
						this.state.countdown !== t && this.setState({
							countdown: t
						})
					}, this.timer = new Fo(this.drawTimer), this.state = {
						countdown: null
					}
				}
				componentDidMount() {
					this.updateTimer()
				}
				componentWillUnmount() {
					this.timer.stop()
				}
				componentDidUpdate(e) {
					let {
						currentPage: t,
						expiresAt: n
					} = e;
					this.props.currentPage === t && this.props.expiresAt === n || this.updateTimer()
				}
				updateTimer() {
					const {
						expiresAt: e
					} = this.props, t = e <= Date.now();
					e && !t ? this.timer.start(e) : this.props.fetchCooldownTimer()
				}
				render() {
					const {
						countdown: e
					} = this.state, {
						isRequestPending: t,
						isEmbedSubredditPage: n
					} = this.props;
					return t && !n ? null : !e || n ? m.a.createElement(Lo.a, {
						isActive: !0,
						unreadCount: -1,
						showEmpty: !0
					}) : m.a.createElement("div", {
						className: Bo.a.timer
					}, r.fbt._("{Time remaining}", [r.fbt._param("Time remaining", e)], {
						hk: "4it6wP"
					}))
				}
			}
			var Wo = Object(p.b)(qo, e => ({
					fetchCooldownTimer: () => e(Object(Ro.e)())
				}))(Ho),
				Vo = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				Qo = n("./src/reddit/helpers/trackers/hotPotato.ts"),
				Ko = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				zo = n("./src/reddit/hooks/useTracking.ts"),
				Jo = n("./src/reddit/icons/svgs/HotPotato/index.tsx");
			var Yo = e => m.a.createElement("svg", {
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
				})),
				Zo = n("./src/reddit/helpers/chooseVariant/index.ts");
			const Xo = e => {
				return Object(Zo.c)(e, {
					experimentEligibilitySelector: Zo.a,
					experimentName: Nt.ye
				}) === Nt.fd
			};
			var $o = n("./src/reddit/components/Header/QuickLinks/index.m.less"),
				ea = n.n($o),
				ta = m.a.memo((function(e) {
					const t = Object(zo.a)(),
						n = Object(p.d)(),
						s = Object(u.useCallback)(() => {
							t(e => ({
								...Object(ot.o)(e),
								source: "nav",
								action: "click",
								noun: "popular"
							}))
						}, [t]),
						o = Object(u.useCallback)(() => {
							t(e => ({
								...Object(ot.o)(e),
								source: "nav",
								action: "click",
								noun: "all"
							}))
						}, [t]),
						a = Object(u.useCallback)(() => {
							n(Object(ys.a)(Os.c[Os.b.Rpan])), t(e => ({
								...Object(ot.o)(e),
								source: "nav",
								action: "click",
								noun: "rpan"
							}))
						}, [n, t]),
						i = Object(u.useCallback)(() => {
							t(Object(Qo.b)())
						}, [t]),
						c = Object(p.e)(at.P),
						d = Object(p.e)(us.a),
						l = Object(p.e)(Xo),
						b = Object(p.e)(Uo.a),
						h = Object(p.e)(Uo.b),
						g = Object(Ko.a)(),
						f = Object(Ko.a)(),
						O = Object(Ko.a)(),
						y = Object(Ko.a)(),
						C = Object(Ko.a)();
					return m.a.createElement("div", {
						className: Object(v.a)(ea.a.container, e.className)
					}, m.a.createElement("div", {
						className: ea.a.row
					}, m.a.createElement(zn.a, {
						className: ea.a.icon,
						innerRef: g.target.ref,
						to: c ? Os.c[Os.b.Popular] : Os.c[Os.b.Home],
						onClick: s,
						onMouseEnter: g.show,
						onMouseLeave: g.hide
					}, m.a.createElement(Zn.a, {
						name: "popular"
					})), m.a.createElement(Vo.a, {
						arrowProps: g.arrowProps,
						popperProps: g.popperProps,
						visible: g.visible
					}, r.fbt._("Popular", null, {
						hk: "1Kx4va"
					})), m.a.createElement(m.a.Fragment, null, m.a.createElement(zn.a, {
						className: ea.a.icon,
						innerRef: f.target.ref,
						to: Os.c[Os.b.All],
						onClick: o,
						onMouseEnter: f.show,
						onMouseLeave: f.hide
					}, m.a.createElement(Zn.a, {
						name: "all"
					})), m.a.createElement(Vo.a, {
						arrowProps: f.arrowProps,
						popperProps: f.popperProps,
						visible: f.visible
					}, r.fbt._("All", null, {
						hk: "1Rk1yU"
					}))), d && m.a.createElement(m.a.Fragment, null, m.a.createElement(zn.a, {
						className: ea.a.icon,
						innerRef: O.target.ref,
						to: Os.c[Os.b.Rpan],
						onClick: a,
						onMouseEnter: O.show,
						onMouseLeave: O.hide
					}, m.a.createElement(Zn.a, {
						name: "video_live"
					})), m.a.createElement(Vo.a, {
						arrowProps: O.arrowProps,
						popperProps: O.popperProps,
						visible: O.visible
					}, r.fbt._("Reddit Live", null, {
						hk: "3BFYUK"
					}))), l && m.a.createElement(m.a.Fragment, null, m.a.createElement(zn.a, {
						className: ea.a.icon,
						innerRef: y.target.ref,
						to: "/r/psbattleslive",
						onClick: () => {},
						onMouseEnter: y.show,
						onMouseLeave: y.hide
					}, m.a.createElement(Yo, {
						className: ea.a.psBattlesIcon
					})), m.a.createElement(Vo.a, {
						arrowProps: y.arrowProps,
						popperProps: y.popperProps,
						visible: y.visible
					}, r.fbt._("PsBattles Live in partnership with Adobe", null, {
						hk: "3mGYdM"
					}))), b && m.a.createElement(m.a.Fragment, null, m.a.createElement(zn.a, {
						className: Object(v.a)(ea.a.icon, ea.a.hotPotatoLink),
						innerRef: C.target.ref,
						to: `/r/${h}`,
						onMouseEnter: C.show,
						onMouseLeave: C.hide,
						onClick: i
					}, m.a.createElement(Jo.a, {
						className: ea.a.hotPotatoIcon
					}), m.a.createElement(Wo, null)), m.a.createElement(Vo.a, {
						arrowProps: C.arrowProps,
						popperProps: C.popperProps,
						visible: C.visible
					}, r.fbt._("Place your tile", null, {
						hk: "2ZCdRE"
					})))))
				})),
				na = n("./src/reddit/actions/login.ts"),
				sa = n("./src/reddit/actions/tooltip.ts"),
				ra = n("./src/lib/combineRefs/index.tsx"),
				oa = n("./src/lib/hooks/useOnClickOutside.ts"),
				aa = n("./src/lib/hooks/useTooltip.ts"),
				ia = n("./src/reddit/components/HeaderIconContainer/index.m.less"),
				ca = n.n(ia);

			function da() {
				return (da = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const la = I.a.button("Button", ca.a),
				ua = I.a.div("Container", ca.a);

			function ma(e) {
				const {
					children: t,
					isOpen: n,
					...s
				} = e;
				return m.a.createElement(la, da({}, s, {
					id: e.id,
					onClick: t => e.onClick(t)
				}), m.a.createElement(ua, {
					className: Object(v.a)({
						[ca.a.isOpen]: n
					})
				}, t))
			}
			var pa = n("./src/reddit/components/HeaderUserActions/index.m.less"),
				ba = n.n(pa);
			var ha = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Lo.a, {
					isActive: !!e.unreadCount || !!e.showEmpty,
					unreadCount: e.unreadCount,
					showEmpty: !!e.showEmpty && !e.unreadCount
				}), m.a.createElement(Zn.a, {
					name: "notification",
					className: ba.a.icon2020
				})),
				ga = n("./src/lib/getParsedUserAgent/index.ts"),
				fa = n("./src/reddit/components/InboxBanner/index.m.less"),
				va = n.n(fa);
			var Oa = Object(Re.a)(e => {
					let {
						onClose: t
					} = e;
					const n = Object(ga.b)(navigator.userAgent);
					return m.a.createElement(De.e, null, m.a.createElement(De.i, {
						className: va.a.modalHeader
					}, m.a.createElement(De.q, {
						className: va.a.modalTitle
					}, r.fbt._("Turn on desktop notifications", null, {
						hk: "LDaeq"
					})), m.a.createElement(Xe.t, {
						onClick: t,
						Icon: Object(Zn.b)("close_fill"),
						size: Xe.d.XXS,
						priority: Xe.c.Plain,
						className: va.a.modalCloseIcon
					})), m.a.createElement(De.l, null, m.a.createElement("ul", {
						className: va.a.modalList
					}, m.a.createElement("li", {
						className: va.a.modalListItem
					}, m.a.createElement("span", null, "1"), r.fbt._("Click on {lockIcon} in your browser address bar", [r.fbt._param("lockIcon", m.a.createElement(Zn.a, {
						name: "lock_fill",
						className: va.a.modalListIcon
					}))], {
						hk: "kcfln"
					})), n && m.a.createElement("li", {
						className: va.a.modalListItem
					}, m.a.createElement("span", null, "2"), r.fbt._("Select {lockIcon} site settings", [r.fbt._param("lockIcon", m.a.createElement(Zn.a, {
						name: "settings_fill",
						className: va.a.modalListIcon
					}))], {
						hk: "4wRmvx"
					})), m.a.createElement("li", {
						className: va.a.modalListItem
					}, m.a.createElement("span", null, n ? 3 : 2), r.fbt._("Change {lockIcon} site settings notifications to ‘Allow’", [r.fbt._param("lockIcon", m.a.createElement(Zn.a, {
						name: "notification_fill",
						className: va.a.modalListIcon
					}))], {
						hk: "31PZ6t"
					})))), m.a.createElement(De.g, null, m.a.createElement(Xe.t, {
						text: r.fbt._("Got it", null, {
							hk: "1q53HE"
						}),
						onClick: t
					})))
				}),
				ya = n("./src/reddit/components/InboxTooltip/hooked.m.less"),
				Ca = n.n(ya);

			function xa() {
				return (xa = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Ea = m.a.memo((function(e) {
					let {
						visible: t,
						...n
					} = e;
					const [s, r] = Object(u.useState)(t);
					return Object(u.useEffect)(() => {
						let e = window.setTimeout(() => {
							e = void 0, r(t)
						}, 0);
						return () => {
							e && window.clearTimeout(e), r(!1)
						}
					}, [t]), t ? m.a.createElement("div", xa({
						id: "INBOX--TOOLTIP",
						className: Object(v.a)(Ca.a.tooltip, {
							[Ca.a.visible]: s
						})
					}, n.popperProps), n.children) : null
				})),
				Pa = n("./src/reddit/components/InboxTooltip/Loader.ts"),
				ja = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts");
			var _a = n("./node_modules/icepick/icepick.js");
			const Sa = Object(_a.freeze)({
				name: "offset",
				options: {
					offset: [-134, 6]
				}
			});
			var ka = n("./src/reddit/selectors/activeModal.ts"),
				wa = n("./src/reddit/selectors/experiments/notifications.ts"),
				Ma = n("./src/reddit/components/Header/NotificationsButton/index.m.less"),
				Na = n.n(Ma);
			const Ia = {
					placement: "bottom",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				Ta = m.a.memo((function(e) {
					const t = Object(p.d)(),
						n = Object(Ko.a)(),
						s = function(e) {
							const t = Object(u.useMemo)(() => {
								const t = Object(aa.a)(e);
								return Object(_a.updateIn)(t, ["modifiers"], e => Object(_a.push)(e, Sa))
							}, [e]);
							return Object(aa.b)(t)
						}(),
						o = Object(aa.b)(Ia),
						[a, i] = Object(ja.a)(e.userId),
						[c, d] = function(e) {
							const [t, n] = Object(u.useState)(Object(jt.t)(e));
							return [t, Object(u.useCallback)(() => {
								n(!0), Object(jt.tb)(e)
							}, [])]
						}(e.userId),
						l = Object(p.e)(Object(ka.c)("browser_notifications_permission_settings")),
						b = Object(p.e)(Object(at.J)(3 * O.B)),
						h = Object(p.e)(wa.f),
						g = !c && b && h,
						f = Object(u.useCallback)(() => {
							s.hide(), n.hide(), a || i(), c || d()
						}, [s, n, i, a, c, d]);
					Object(oa.a)("INBOX--TOOLTIP", f);
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: e.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: Object(ra.a)(n.target.ref, s.target.ref, o.target.ref)
					}, m.a.createElement(ma, {
						"aria-expanded": s.visible,
						"aria-haspopup": !0,
						"aria-label": r.fbt._("Open notifications inbox", null, {
							hk: "1b2BKn"
						}),
						className: Na.a.notificationInboxIconContainer,
						onClick: t => {
							t.stopPropagation(), s.visible ? f() : s.show(), e.sendNavClickInbox()
						},
						isOpen: s.visible
					}, m.a.createElement(ha, {
						unreadCount: e.unreadCount,
						showEmpty: g
					})), !s.visible && !o.visible && m.a.createElement(Vo.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, m.a.createElement("div", null, r.fbt._("Notifications", null, {
						hk: "vAOKt"
					}))), m.a.createElement(Ea, {
						arrowProps: s.arrowProps,
						popperProps: s.popperProps,
						visible: s.visible
					}, m.a.createElement(Pa.a, {
						isOpen: s.visible,
						hideTooltip: f,
						userId: e.userId,
						desktopNotificationsModalId: "browser_notifications_permission_settings",
						isLoggedIn: e.isLoggedIn
					}))), l && m.a.createElement(Oa, {
						onClose: () => {
							t(Object(_e.g)("browser_notifications_permission_settings"))
						},
						withOverlay: !0
					}))
				}));
			var Aa = n("./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts"),
				Ra = n("./src/reddit/actions/snoovatarModal.ts"),
				La = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				Da = n("./src/reddit/icons/svgs/SparkleGradient/index.tsx"),
				Fa = n("./src/lib/initializeClient/installReducer.ts"),
				Ua = n("./src/lib/safeJSONParse/index.ts"),
				Ga = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(Fa.a)({
				features: {
					avatar: Ga.a
				}
			});
			const Ba = e => 864e5 * e,
				qa = e => {
					var t, n, s;
					return null === (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === s ? void 0 : s.quickCreateV1
				},
				Ha = e => {
					const t = Object(Ct.q)(e);
					return Boolean((null == t ? void 0 : t[$r.w]) && Object(Ua.a)(t[$r.w]))
				},
				Wa = (e, t, n) => {
					var s;
					const r = !!(null === (s = Object(at.k)(e)) || void 0 === s ? void 0 : s.snoovatarFullBodyAsset);
					return Va(e, t) && n === r
				},
				Va = (e, t) => {
					const n = Object(at.k)(e);
					return !(!n || !t) && (new Date).getTime() - (e => Math.floor(1e3 * e))(n.created) > Ba(t)
				};
			var Qa = n("./src/reddit/components/Header/AvatarQuickCreateCta/index.m.less"),
				Ka = n.n(Qa);
			const {
				fbt: za
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Ja(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "view";
				if (e) {
					const n = Object(jt.y)(),
						s = {
							id: e.id,
							eventViews: n.eventViews.toString() || "0"
						};
					if ("view" === t) {
						const t = n.id === e.id ? n.eventViews : 0;
						s.eventViews = (t + 1).toString()
					}
					"click" === t && (s.lastInteractionTimestamp = (new Date).getTime().toString()), Object(jt.jb)(s)
				}
			}
			var Ya = e => {
					let {
						avatarUrlParams: t
					} = e;
					const n = Object(p.e)(qa),
						s = Object(p.d)(),
						r = Object(zo.a)();
					Object(u.useEffect)(() => {
						r(Object(La.o)())
					}, [r]), Object(u.useEffect)(() => {
						n || s(Object(Aa.a)())
					}, [s, n]), Object(u.useEffect)(() => {
						Ja(n)
					}, [n]);
					return m.a.createElement(Xe.k, {
						onClick: () => {
							r(Object(La.c)()), Ja(n, "click"), s(Object(Ra.b)({
								share: t,
								source: "quick_create"
							}))
						},
						className: Ka.a.ctaContainer
					}, m.a.createElement("img", {
						className: Ka.a.quickCreateGiftAnimation,
						src: `${G.a.assetPath}/img/snoovatars/Golden_Chest.png`,
						alt: za._("animated golden chest", null, {
							hk: "12HBG9"
						})
					}), m.a.createElement(m.a.Fragment, null, m.a.createElement(Da.a, {
						className: Object(v.a)(Ka.a.sparkle, Ka.a.sparkle1)
					}), m.a.createElement(Da.a, {
						className: Object(v.a)(Ka.a.sparkle, Ka.a.sparkle2)
					}), m.a.createElement(Da.a, {
						className: Object(v.a)(Ka.a.sparkle, Ka.a.sparkle3)
					})), za._("Open Gift", null, {
						hk: "Cd6TH"
					}))
				},
				Za = n("./src/lib/matchRoute/index.ts"),
				Xa = n("./src/chat/helpers/dom.ts"),
				$a = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				ei = n("./src/reddit/actions/changeUsername.ts"),
				ti = n("./src/reddit/actions/chat/toggle.ts"),
				ni = n("./src/reddit/actions/emailVerificationTooltip.ts"),
				si = n("./src/reddit/actions/postCreation/general.ts"),
				ri = n("./src/reddit/actions/preferences.ts"),
				oi = n("./src/reddit/actions/users.ts"),
				ai = n("./src/reddit/components/BlockNavigation/index.tsx"),
				ii = n("./src/reddit/components/ChangeUsernameModals/Loader.tsx"),
				ci = n("./src/reddit/components/ChangeUsernameTooltip/Loader.tsx");
			var di = Object(Se.a)({
					getComponent: () => Object(Ne.a)(() => n.e("EmailVerificationModals").then(n.bind(null, "./src/reddit/components/EmailVerificationModals/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				li = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				ui = n("./src/reddit/helpers/trackers/emailVerification.ts"),
				mi = n("./src/reddit/icons/svgs/Close/index.tsx"),
				pi = n("./src/reddit/components/EmailVerificationTooltip/index.m.less"),
				bi = n.n(pi);
			class hi extends m.a.Component {
				constructor() {
					super(...arguments), this.onChangeEmailModalOpen = e => {
						e.stopPropagation(), this.props.sendEvent(Object(ui.e)(ui.a, "update")), this.props.toggleChangeEmailModal()
					}, this.onCloseTooltip = () => {
						this.props.sendEvent(Object(ui.c)(ui.a)), this.props.closeTooltip()
					}, this.onResendEmailClick = () => {
						this.props.sendEvent(Object(ui.e)(ui.a, "confirm")), this.props.resendEmail(), this.props.closeTooltip()
					}
				}
				componentDidMount() {
					hi.shouldSendViewEvent && (hi.shouldSendViewEvent = !1, this.props.sendEvent(Object(ui.g)(ui.a)))
				}
				render() {
					return m.a.createElement("div", {
						className: bi.a.container
					}, m.a.createElement("div", {
						className: bi.a.topLine
					}), m.a.createElement("button", {
						className: bi.a.closeWrapper,
						onClick: this.onCloseTooltip
					}, m.a.createElement(mi.a, {
						className: bi.a.closeIcon
					})), m.a.createElement("h5", {
						className: bi.a.title
					}, r.fbt._("Confirm your email:", null, {
						hk: "1RDs8b"
					})), m.a.createElement("p", {
						className: bi.a.subtitle
					}, this.props.email), m.a.createElement("p", {
						className: bi.a.description
					}, r.fbt._("Check your inbox email for Reddit's confirmation email. A current email address helps ensure you don't lose access to your account.", null, {
						hk: "2bhwUs"
					})), m.a.createElement("div", {
						className: bi.a.buttonWrapper
					}, m.a.createElement(Xe.o, {
						className: bi.a.commonBtn,
						"data-redditstyle": !0,
						onClick: this.onChangeEmailModalOpen,
						type: "button"
					}, r.fbt._("Update email", null, {
						hk: "1Cxqkk"
					})), m.a.createElement(Xe.l, {
						className: Object(v.a)(bi.a.commonBtn, bi.a.primaryBtn),
						"data-redditstyle": !0,
						onClick: this.onResendEmailClick,
						type: "button"
					}, r.fbt._("Got it", null, {
						hk: "3IP9TO"
					}))))
				}
			}
			hi.shouldSendViewEvent = !0;
			const gi = Object(li.a)(hi, [ir.a.Click, ir.a.Keydown, ir.a.Resize]);
			var fi = Object(A.c)(gi),
				vi = n("./src/reddit/components/GoogleOneTapIFrame/index.m.less"),
				Oi = n.n(vi);
			const yi = Object(f.c)({
				isLoggedIn: at.P
			});
			class Ci extends m.a.Component {
				render() {
					const {
						className: e,
						exposeIFrameElement: t,
						isLoggedIn: n
					} = this.props;
					return m.a.createElement(T.a, {
						className: Object(v.a)(Oi.a.IFrame, {
							[Oi.a["m-hidden"]]: n
						}, e),
						exposeIFrameElement: t,
						path: R.c.GoogleOneTap
					})
				}
			}
			var xi = Object(p.b)(yi)(Ci),
				Ei = n("./src/reddit/components/Header/GoldCoinsCta/index.tsx");
			var Pi = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Lo.a, {
					isActive: e.badgeCount > 0 || e.hasUnreadGroupMessages,
					unreadCount: e.badgeCount
				}), m.a.createElement(Zn.a, {
					name: "chat",
					className: ba.a.icon2020
				})),
				ji = n("./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less"),
				_i = n.n(ji);
			const {
				fbt: Si
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ki = e => {
				const {
					onCloseFlyout: t
				} = e;
				return m.a.createElement("div", {
					className: _i.a.container
				}, m.a.createElement("p", {
					className: _i.a.title
				}, Si._("New User Settings", null, {
					hk: "1Sziu9"
				})), m.a.createElement("h5", {
					className: _i.a.subtitle
				}, Si._("Like customizing Reddit?", null, {
					hk: "38eFal"
				})), m.a.createElement("p", {
					className: _i.a.description
				}, Si._("You can save how you sort and view your communities in user settings.", null, {
					hk: "XMkGT"
				})), m.a.createElement(Xe.o, {
					className: _i.a.dismissBtn,
					onClick: t
				}, Si._("Got it", null, {
					hk: "3IP9TO"
				})))
			};
			var wi = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Lo.a, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount
				}), m.a.createElement(Zn.a, {
					name: "message",
					className: ba.a.icon2020
				})),
				Mi = n("./node_modules/lodash/noop.js"),
				Ni = n.n(Mi),
				Ii = n("./src/lib/prettyPrintNumber/index.ts"),
				Ti = n("./src/realtime/GQLSubscription/async.tsx"),
				Ai = n("./src/reddit/actions/alpha.ts"),
				Ri = n("./src/reddit/actions/modMode.ts"),
				Li = n("./src/reddit/actions/profile/index.ts"),
				Di = n("./src/reddit/constants/elementClassNames.ts"),
				Fi = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				Ui = n("./src/reddit/helpers/karma.ts"),
				Gi = n("./src/reddit/hooks/useWindowEvent.ts"),
				Bi = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				qi = n("./src/reddit/icons/fonts/Premium/index.tsx"),
				Hi = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				Wi = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				Vi = n("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				Qi = n("./src/reddit/selectors/modModeEnabled.ts"),
				Ki = n("./src/reddit/selectors/seo/index.ts"),
				zi = n("./src/reddit/selectors/tooltip.ts"),
				Ji = n("./src/higherOrderComponents/asTooltip.tsx"),
				Yi = n("./src/lib/constants/icons.ts"),
				Zi = n("./src/reddit/components/HiddenDiv.tsx"),
				Xi = n("./src/reddit/controls/Dropdown/index.tsx"),
				$i = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				ec = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				tc = n("./src/reddit/helpers/trackers/authControls.ts"),
				nc = n("./src/reddit/helpers/trackers/modTools.ts"),
				sc = n("./src/reddit/helpers/trackers/navigation.ts"),
				rc = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				oc = n("./src/reddit/helpers/trackers/user.ts"),
				ac = n("./src/reddit/icons/svgs/SnooNoEyes/index.tsx"),
				ic = n("./src/reddit/constants/colors.ts"),
				cc = n("./src/reddit/controls/InternalLink/index.tsx");

			function dc() {
				return (dc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var lc = e => {
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
					return (s || "").startsWith("http") ? m.a.createElement("a", dc({
						href: s
					}, a), t) : m.a.createElement(cc.a, dc({
						to: s
					}, a), t)
				},
				uc = n("./src/reddit/components/HeaderUserDropdown/UserMenu/shared.m.less"),
				mc = n.n(uc);
			const pc = e => {
					const {
						title: t,
						titleClassName: n
					} = e;
					return m.a.createElement("span", {
						className: Object(v.a)(mc.a.title, n)
					}, t)
				},
				bc = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: r
					} = e;
					return m.a.createElement("button", {
						className: Object(v.a)(mc.a.secondLevelButton, t),
						onClick: n
					}, m.a.createElement(pc, {
						title: s,
						titleClassName: r
					}))
				},
				hc = e => {
					const {
						className: t,
						href: n,
						onClick: s,
						title: r,
						titleClassName: o,
						rel: a
					} = e;
					return m.a.createElement(lc, {
						className: Object(v.a)(mc.a.secondLevelButton, t),
						href: n,
						onClick: s,
						rel: a
					}, m.a.createElement(pc, {
						title: r,
						titleClassName: o
					}))
				},
				gc = e => {
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
					return m.a.createElement(lc, {
						className: Object(v.a)(mc.a.secondLevelButton, t),
						href: n,
						onClick: o,
						rel: a
					}, m.a.createElement(ss.b, {
						"aria-hidden": !0,
						className: Object(v.a)(mc.a.subredditIcon, s),
						iconUrl: r,
						primaryColor: ic.a.snoo
					}), m.a.createElement(pc, {
						title: i,
						titleClassName: c
					}))
				},
				fc = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: r,
						isEnabled: o
					} = e;
					return m.a.createElement("button", {
						className: Object(v.a)(mc.a.secondLevelSwitch, t),
						onClick: n,
						onMouseDown: e => {
							e.preventDefault()
						}
					}, m.a.createElement(pc, {
						title: s,
						titleClassName: r
					}), m.a.createElement($i.a, {
						className: mc.a.toggleSwitch,
						"data-redditstyle": !0,
						on: o,
						redditStyle: !0,
						tabIndex: -1
					}))
				};
			var vc = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				Oc = n("./src/reddit/selectors/avatarMarketing.ts"),
				yc = n("./src/reddit/selectors/meta.ts"),
				Cc = n("./src/reddit/components/HeaderUserDropdown/avatar.m.less"),
				xc = n.n(Cc);
			const Ec = (e, t) => e && m.a.createElement("div", {
				className: xc.a.marketingBadge
			}, m.a.createElement(vc.a, {
				className: xc.a.marketingAsset,
				headshot: e
			}), r.fbt._("New", null, {
				hk: "2TRcjA"
			}), !t && m.a.createElement(m.a.Fragment, null, m.a.createElement(Da.a, {
				className: Object(v.a)(xc.a.sparkle, xc.a.sparkle1)
			}), m.a.createElement(Da.a, {
				className: Object(v.a)(xc.a.sparkle, xc.a.sparkle2)
			}), m.a.createElement(Da.a, {
				className: Object(v.a)(xc.a.sparkle, xc.a.sparkle3)
			}), m.a.createElement(Da.a, {
				className: Object(v.a)(xc.a.sparkle, xc.a.sparkle4)
			})));
			var Pc = e => {
				let {
					useNewButtonComponent: t,
					onClick: n
				} = e;
				var s;
				const o = Object(p.d)(),
					a = Object(zo.a)(),
					i = Object(It.fb)(),
					c = Object(p.e)(e => e.user.account),
					d = Object(p.e)(es.c),
					l = Object(p.e)(js.b),
					u = Object(p.e)(Oc.b),
					b = Object(p.e)(Oc.a),
					h = () => o(Object(Ra.b)({
						clickSource: "nav"
					})),
					g = Object(p.e)(yc.i).startsWith("en");
				if ((null === (s = null == i ? void 0 : i.meta) || void 0 === s ? void 0 : s.name) === O.Nb.AVATAR) return null;
				!u && l && o(Object(Aa.a)()), b && a(La.m);
				const f = c && c.snoovatarFullBodyAsset ? r.fbt._("Style Avatar", null, {
					hk: "1HIsKA"
				}) : r.fbt._("Create Avatar", null, {
					hk: "3kfCbX"
				});
				if (t) {
					const e = m.a.createElement(m.a.Fragment, null, f, g && Ec(b, d));
					return m.a.createElement(bc, {
						onClick: () => {
							h(), "function" == typeof n && n()
						},
						title: e,
						titleClassName: xc.a.avatarLinkBody
					})
				}
				const v = Object(ec.c)((null == c ? void 0 : c.snoovatarFullBodyAsset) ? ud("avatar_style") : ud("add"), ((e, t, n, s) => r => m.a.createElement("div", {
					className: `${xc.a.avatarLinkBody} ${r.className}`
				}, e, s && Ec(t, n)))(f, b, d, g));
				return m.a.createElement(v, {
					onClick: h
				})
			};
			const jc = e => {
					const {
						icon: t,
						title: n,
						titleClassName: s
					} = e;
					return m.a.createElement("span", {
						className: mc.a.headingContent
					}, m.a.createElement("span", {
						className: mc.a.iconContainer
					}, t), m.a.createElement("span", {
						className: Object(v.a)(mc.a.title, s)
					}, n))
				},
				_c = e => {
					const {
						className: t,
						icon: n,
						onClick: s,
						title: r,
						titleClassName: o
					} = e;
					return m.a.createElement("button", {
						className: Object(v.a)(mc.a.button, t),
						onClick: s
					}, m.a.createElement(jc, {
						icon: n,
						title: r,
						titleClassName: o
					}))
				},
				Sc = e => {
					const {
						className: t,
						href: n,
						icon: s,
						onClick: r,
						rel: o,
						title: a,
						titleClassName: i
					} = e;
					return m.a.createElement(lc, {
						className: Object(v.a)(mc.a.button, t),
						href: n,
						rel: o,
						onClick: r
					}, m.a.createElement(jc, {
						icon: s,
						title: a,
						titleClassName: i
					}))
				};
			class kc extends m.a.Component {
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
						className: mc.a.button,
						type: "button",
						onClick: e => {
							if (this.toggleOpen(e), "function" == typeof r) {
								const t = e.target,
									n = Boolean(t.getAttribute("data-chevron"));
								r(e, n)
							}
						}
					}, m.a.createElement("span", {
						className: mc.a.headingContent,
						tabIndex: -1
					}, m.a.createElement("span", {
						className: mc.a.iconContainer
					}, s), m.a.createElement("span", {
						className: mc.a.title
					}, a ? m.a.createElement(lc, {
						className: mc.a.innerLink,
						href: a
					}, o) : m.a.createElement(m.a.Fragment, null, o)), m.a.createElement(Zn.a, {
						"data-chevron": !0,
						name: "caret_down",
						className: Object(v.a)(mc.a.chevronIcon, {
							[mc.a["m-expanded"]]: i
						})
					}))), m.a.createElement("div", {
						className: Object(v.a)(mc.a.contentContainer, mc.a["m-collapsible"], {
							[mc.a.isOpen]: i
						}, n)
					}, t))
				}
			}
			var wc = kc;
			var Mc = [{
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
				Nc = n("./src/reddit/components/HeaderUserDropdown/UserMenu/ExploreMenu/styles.m.less"),
				Ic = n.n(Nc);
			var Tc = e => {
				let {
					isOpen: t,
					onClick: n,
					sendEvent: s
				} = e;
				const [o, a] = Object(u.useState)(null), i = e => () => {
					a(o === e ? null : e)
				};
				return m.a.createElement(wc, {
					icon: m.a.createElement(Zn.a, {
						name: "discover"
					}),
					isOpen: t,
					onClick: (e, t) => {
						s(Object(sc.c)(t ? "explore_chevron" : "explore_menu")), "function" == typeof n && n(e)
					},
					title: r.fbt._("Explore", null, {
						hk: "4xNnBs"
					})
				}, m.a.createElement("span", null, Mc.map((e, t) => ((e, t, n) => {
					let {
						link: s,
						sublinks: r
					} = e, {
						isOpen: o,
						onClick: a
					} = t;
					return m.a.createElement(wc, {
						className: Ic.a.collapsibleContainer,
						isOpen: o,
						key: s.url,
						onClick: (e, t) => {
							s.noun && n(Object(sc.c)(s.noun + (t ? "_chevron" : "_menu"))), "function" == typeof a && a(e)
						},
						title: s.title,
						url: s.url
					}, r.map(e => m.a.createElement(hc, {
						className: Ic.a.basicLink,
						href: e.url,
						key: e.url,
						onClick: () => {
							e.noun && n(Object(sc.c)(e.noun + "_menu"))
						},
						title: e.title
					})))
				})(e, (e => ({
					onClick: i(e),
					isOpen: o === e
				}))(t), s))))
			};
			var Ac = e => {
				const {
					title: t,
					children: n,
					icon: s
				} = e;
				return m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
					className: mc.a.heading
				}, m.a.createElement("span", {
					className: mc.a.headingContent
				}, m.a.createElement("span", {
					className: mc.a.iconContainer
				}, s), m.a.createElement("span", {
					className: mc.a.title
				}, t))), m.a.createElement("div", {
					className: mc.a.contentContainer
				}, n))
			};
			const Rc = () => {
					const e = Object(p.d)(),
						t = Object(zo.a)(),
						n = Object(p.e)(at.cb);
					return m.a.createElement(fc, {
						isEnabled: n,
						onClick: () => {
							t(Object(oc.h)(n)), (t => e(Object(ri.z)(t)))(!n)
						},
						title: r.fbt._("Dark Mode", null, {
							hk: "PaAOV"
						})
					})
				},
				Lc = () => {
					const e = Object(p.d)(),
						t = Object(zo.a)(),
						n = Object(p.e)(e => e.user.account),
						s = Object(p.e)(Qi.a);
					return n && n.isMod ? m.a.createElement(fc, {
						isEnabled: s,
						onClick: () => {
							t(Object(nc.i)(!s)), (() => e(Object(Ri.b)()))()
						},
						title: r.fbt._("Mod Mode", null, {
							hk: "1gLGCN"
						})
					}) : null
				},
				Dc = () => {
					const e = Object(p.d)(),
						t = Object(A.b)(),
						n = Object(p.e)(at.k),
						s = Object(p.e)(at.U);
					return n ? m.a.createElement(Ac, {
						icon: m.a.createElement(Zn.a, {
							name: "profile"
						}),
						title: r.fbt._("My Stuff", null, {
							hk: "15XGVl"
						})
					}, m.a.createElement(fc, {
						title: r.fbt._("Online Status", null, {
							hk: "3t396G"
						}),
						isEnabled: s,
						onClick: () => {
							t(Object(oc.i)(!s)), (t => e(Object(ri.I)({
								showPresence: t
							})))(!s)
						}
					}), m.a.createElement(hc, {
						title: r.fbt._("Profile", null, {
							hk: "czKk9"
						}),
						href: null == n ? void 0 : n.url,
						onClick: () => t(Object(sc.c)("profile"))
					}), m.a.createElement(Pc, {
						onClick: () => e(Object(sa.j)({
							tooltipId: "USER_DROPDOWN_ID"
						})),
						useNewButtonComponent: !0
					}), m.a.createElement(hc, {
						title: r.fbt._("User Settings", null, {
							hk: "2HIDAR"
						}),
						href: "/settings/",
						onClick: () => t(Object(sc.c)("settings"))
					})) : null
				},
				Fc = () => {
					return Object(p.e)(at.k) ? m.a.createElement(Ac, {
						title: r.fbt._("View Options", null, {
							hk: "142L6P"
						}),
						icon: m.a.createElement(Zn.a, {
							name: "views"
						})
					}, m.a.createElement(Lc, null), m.a.createElement(Rc, null)) : null
				},
				Uc = e => {
					let {
						isOpen: t,
						onClick: n
					} = e;
					return Object(p.e)(at.k) ? null : m.a.createElement(wc, {
						icon: m.a.createElement(Zn.a, {
							name: "settings"
						}),
						title: r.fbt._("Settings", null, {
							hk: "1AC3DI"
						}),
						isOpen: t,
						onClick: n
					}, m.a.createElement(Rc, null))
				},
				Gc = e => {
					let {
						isOpen: t,
						onClick: n,
						sendEvent: s
					} = e;
					return m.a.createElement(wc, {
						icon: m.a.createElement(Zn.a, {
							name: "rules"
						}),
						isOpen: t,
						onClick: (e, t) => {
							s(Object(sc.c)(t ? "terms_chevron" : "terms_menu")), "function" == typeof n && n(e)
						},
						title: r.fbt._("Terms & Policies", null, {
							hk: "3sa1sF"
						})
					}, m.a.createElement(hc, {
						href: "https://www.redditinc.com/policies/user-agreement",
						onClick: () => s(Object(sc.c)("user_agreement")),
						title: r.fbt._("User Agreement", null, {
							hk: "kfqI"
						})
					}), m.a.createElement(hc, {
						href: "https://www.redditinc.com/policies/privacy-policy",
						onClick: () => s(Object(sc.c)("privacy_policy")),
						title: r.fbt._("Privacy Policy", null, {
							hk: "y8Vyn"
						})
					}), m.a.createElement(hc, {
						href: "https://www.redditinc.com/policies/content-policy",
						onClick: () => s(Object(sc.c)("content_policy")),
						title: r.fbt._("Content Policy", null, {
							hk: "2xjmLL"
						})
					}), m.a.createElement(hc, {
						href: "https://www.redditinc.com/policies/moderator-guidelines",
						onClick: () => s(Object(sc.c)("mod_policy")),
						title: r.fbt._("Moderator Guidelines", null, {
							hk: "2AfPVY"
						})
					}))
				};
			var Bc = n("./src/reddit/helpers/getReredditLinkWithYear/index.ts");
			var qc = () => [{
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
				noun: "rereddit",
				title: () => r.fbt._("Rereddit", null, {
					hk: "1DyKwo"
				}),
				url: Object(Bc.a)()
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
					hk: "2PoxW5"
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
					hk: "10XBDT"
				}),
				url: "https://www.redditinc.com/press"
			}];
			var Hc = e => {
					let {
						isLoggedIn: t,
						isOpen: n,
						onClick: s,
						sendEvent: o,
						url: a
					} = e;
					return m.a.createElement(wc, {
						icon: m.a.createElement(Zn.a, {
							name: "info"
						}),
						title: r.fbt._("More", null, {
							hk: "42foEw"
						}),
						isOpen: n,
						onClick: (e, t) => {
							o(Object(sc.c)(t ? "more_chevron" : "more_menu")), "function" == typeof s && s(e)
						}
					}, qc().map(e => ((e, t) => {
						let {
							noun: n,
							rel: s,
							title: r,
							url: o
						} = e;
						return m.a.createElement(hc, {
							href: o,
							key: o,
							onClick: () => {
								n && t(Object(sc.c)(n))
							},
							rel: s,
							title: r()
						})
					})(e, o)), t ? m.a.createElement(hc, {
						href: "https://old.reddit.com" + a,
						title: r.fbt._("Visit Old Reddit", null, {
							hk: "3Fo9ag"
						}),
						onClick: () => {
							o(Object(sc.c)("old_reddit")), o(e => ({
								source: "redesignbanner",
								action: "click",
								noun: "2xdropdown_visit_old",
								screen: ot.Z(e),
								subreddit: ot.hb(e)
							}))
						}
					}) : null)
				},
				Wc = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				Vc = n("./src/reddit/components/HeaderUserDropdown/UserMenu/RecentCommunitiesMenu/styles.m.less"),
				Qc = n.n(Vc);
			var Kc = e => {
					let {
						isOpen: t,
						onClick: n
					} = e;
					const [{
						links: s,
						showAll: o
					}, a] = Object(u.useState)({
						links: Object(Wc.b)(),
						showAll: !1
					});
					if (Object(u.useEffect)(() => {
							t || a({
								links: s,
								showAll: !1
							})
						}, [s, t]), 0 === s.length) return null;
					const i = o ? s : s.slice(0, 3),
						c = () => a({
							links: s,
							showAll: !o
						});
					return m.a.createElement(wc, {
						"aria-hidden": !0,
						icon: m.a.createElement(Zn.a, {
							name: "history"
						}),
						isOpen: t,
						title: r.fbt._("Recent Communities", null, {
							hk: "cJ4rl"
						}),
						onClick: n
					}, i.map(e => {
						var t, n;
						return m.a.createElement(gc, {
							className: Qc.a.basicLink,
							href: e.url,
							iconClassName: e.communityIcon || (null === (t = e.icon) || void 0 === t ? void 0 : t.url) ? void 0 : Qc.a.subredditIcon,
							iconUrl: e.communityIcon || (null === (n = e.icon) || void 0 === n ? void 0 : n.url),
							key: e.url,
							title: e.title,
							titleClassName: Qc.a.title
						})
					}), s.length > 3 && (e => m.a.createElement("span", {
						className: mc.a.spanButton,
						onClick: c
					}, m.a.createElement("span", {
						className: Object(v.a)(mc.a.headingContent, Qc.a.headingContent)
					}, m.a.createElement("span", {
						className: mc.a.title
					}, e))))(o ? r.fbt._("see less", null, {
						hk: "3tQWvR"
					}) : r.fbt._("see more", null, {
						hk: "1WV0AC"
					})))
				},
				zc = n("./src/reddit/components/HeaderUserDropdown/UserMenu/index.m.less"),
				Jc = n.n(zc);

			function Yc() {
				return (Yc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Zc = e => {
					e.nativeEvent.stopImmediatePropagation()
				},
				Xc = e => {
					const t = e && e.coins || 0;
					return r.fbt._({
						"*": "{number of coins} coins",
						_1: "1 coin"
					}, [r.fbt._plural(t, "number of coins")], {
						hk: "qmnnm"
					})
				};
			var $c;
			! function(e) {
				e[e.RecentCommunitiesMenu = 0] = "RecentCommunitiesMenu", e[e.ExploreMenu = 1] = "ExploreMenu", e[e.MoreMenu = 2] = "MoreMenu", e[e.Settings = 3] = "Settings", e[e.TermsAndPolicies = 4] = "TermsAndPolicies"
			}($c || ($c = {}));
			var ed = e => {
					const {
						closeUserDropdown: t,
						dispatchOpenLoginModal: n,
						logoutUser: s,
						openCommunityCreationModal: o,
						sendEvent: a,
						shouldShowCreateCommunityItem: i,
						url: c,
						user: d
					} = e, [l, p] = Object(u.useState)($c.TermsAndPolicies), b = e => () => {
						p(l === e ? null : e)
					}, h = e => ({
						onClick: b(e),
						isOpen: l === e
					}), g = !!d, f = () => {
						t(), n()
					};
					return m.a.createElement("div", {
						onClick: Zc
					}, m.a.createElement(Dc, null), m.a.createElement(Fc, null), m.a.createElement(() => i ? m.a.createElement(_c, {
						icon: m.a.createElement(Zn.a, {
							name: "community"
						}),
						onClick: () => {
							o(), a(Object(rc.a)())
						},
						title: r.fbt._("Create a Community", null, {
							hk: "3QGru4"
						})
					}) : null, null), m.a.createElement(() => m.a.createElement(Sc, {
						icon: m.a.createElement(Zn.a, {
							name: "coins"
						}),
						href: "/coins",
						title: m.a.createElement(m.a.Fragment, null, m.a.createElement("span", null, r.fbt._("Coins", null, {
							hk: "2g3szC"
						})), m.a.createElement("span", {
							className: Jc.a.meta
						}, Xc(d))),
						onClick: () => {
							Object(lr.e)(lr.a.GoldPayment, !0), e.sendEvent(Object(oc.d)())
						},
						titleClassName: Jc.a.coinsTitle,
						className: Jc.a.coinsLink
					}), null), m.a.createElement(() => m.a.createElement(Sc, {
						icon: m.a.createElement(Zn.a, {
							name: "premium"
						}),
						href: "/premium",
						onClick: () => {
							Object(lr.e)(lr.a.GoldPayment, !0), e.sendEvent(Object(oc.g)())
						},
						title: r.fbt._("Premium", null, {
							hk: "Ib64I"
						})
					}), null), m.a.createElement(() => m.a.createElement(Sc, {
						icon: m.a.createElement(Zn.a, {
							name: "powerup"
						}),
						href: xs.a,
						onClick: () => {
							Object(lr.e)(lr.a.GoldPayment, !0), e.sendEvent(Object(oc.e)())
						},
						title: r.fbt._("Powerups", null, {
							hk: "2rTyID"
						})
					}), null), m.a.createElement(() => m.a.createElement(Sc, {
						icon: m.a.createElement(Zn.a, {
							name: "live"
						}),
						href: Ps.a,
						onClick: () => e.sendEventWithName("reddit_talk"),
						title: r.fbt._("Talk", null, {
							hk: "2nFtKJ"
						})
					}), null), !g && m.a.createElement(Kc, h($c.RecentCommunitiesMenu)), m.a.createElement(Tc, Yc({}, h($c.ExploreMenu), {
						sendEvent: a
					})), m.a.createElement(Uc, h($c.Settings)), m.a.createElement(() => m.a.createElement(Sc, {
						href: "https://www.reddithelp.com/hc/en-us",
						icon: m.a.createElement(Zn.a, {
							name: "help"
						}),
						title: r.fbt._("Help Center", null, {
							hk: "4sGjc0"
						}),
						onClick: () => e.sendEventWithName("help_center")
					}), null), m.a.createElement(Hc, Yc({}, h($c.MoreMenu), {
						isLoggedIn: g,
						url: c,
						sendEvent: a
					})), m.a.createElement(Gc, Yc({}, h($c.TermsAndPolicies), {
						sendEvent: a
					})), m.a.createElement(() => g ? m.a.createElement(_c, {
						icon: m.a.createElement(Zn.a, {
							name: "logout"
						}),
						onClick: () => {
							e.sendEventWithName("logout"), s()
						},
						title: r.fbt._("Log Out", null, {
							hk: "2SjIc8"
						})
					}) : m.a.createElement(_c, {
						icon: m.a.createElement(Zn.a, {
							name: "profile"
						}),
						onClick: f,
						title: r.fbt._("Sign Up or Log In", null, {
							hk: "3pedCU"
						})
					}), null), m.a.createElement(() => m.a.createElement("div", {
						className: mc.a.copyrightContainer
					}, m.a.createElement("span", {
						className: mc.a.copyrightText
					}, r.fbt._("© {year} Reddit, Inc. All rights reserved", [r.fbt._param("year", (new Date).getFullYear().toString())], {
						hk: "1rgU6A"
					}))), null))
				},
				td = n("./src/reddit/components/HeaderUserDropdown/index.m.less"),
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
			const rd = "undefined" != typeof window && "new.reddit.com" !== window.location.hostname,
				od = I.a.wrapped(Xi.a, "Dropdown", nd.a),
				ad = Object(Ji.a)(od),
				id = e => t => m.a.createElement(Zn.a, sd({
					name: e
				}, t)),
				cd = e => m.a.createElement(ec.a, {
					className: Object(v.a)(nd.a.button, e.className),
					"data-redditstyle": !0,
					onClick: e.onClick
				}, e.children, m.a.createElement("div", {
					className: nd.a.buttonText
				}, e.displayText), m.a.createElement($i.a, {
					className: nd.a.toggleSwitch,
					"data-redditstyle": !0,
					redditStyle: !0,
					on: e.isEnabled
				}));
			var dd = Object(A.c)(e => {
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
					user: g,
					sendEvent: f,
					shouldShowCreateCommunityItem: v,
					openCommunityCreationModal: O
				} = e, y = g && g.id, C = Object(p.e)(js.q), x = Object(p.e)(t => e.isOpen && Object(js.y)(t)), E = Object(p.e)(js.a);
				Object(u.useEffect)(() => {
					l()
				}, [y]);
				const P = Object(ec.c)(id("settings"), r.fbt._("User Settings", null, {
						hk: "46J4vT"
					})),
					_ = Object(ec.b)(id("help"), r.fbt._("Help Center", null, {
						hk: "4sGjc0"
					})),
					S = Object(ec.b)(id("external_link"), r.fbt._("Visit Old Reddit", null, {
						hk: "3Fo9ag"
					})),
					k = Object(ec.c)(id("logout"), r.fbt._("Log In / Sign Up", null, {
						hk: "4xbfvS"
					})),
					w = Object(ec.c)(id("logout"), r.fbt._("Log Out", null, {
						hk: "2SjIc8"
					})),
					M = Object(ec.c)(ac.a, r.fbt._("Opt In to New Reddit", null, {
						hk: "4jiTxA"
					})),
					N = Object(ec.b)(id(Yi.a.campaign), r.fbt._("Advertise on Reddit", null, {
						hk: "3R4KSI"
					})),
					I = (e => {
						const t = e && e.coins || 0;
						return r.fbt._({
							"*": "{number of coins} coins",
							_1: "1 coin"
						}, [r.fbt._plural(t, "number of coins")], {
							hk: "qmnnm"
						})
					})(g),
					T = Object(ec.c)(id("coins"), r.fbt._("Coins", null, {
						hk: "25oh47"
					}), {
						meta: I
					}),
					A = r.fbt._("No ads, monthly coins, and more!", null, {
						hk: "3OXYGs"
					}),
					R = Object(ec.c)(id("premium"), r.fbt._("Premium", null, {
						hk: "1SD1CS"
					}), {
						meta: x ? A : void 0
					}),
					L = () => {
						Object(lr.e)(lr.a.GoldPayment, !0), f(Object(oc.g)())
					},
					D = Object(ec.c)(id("powerup"), r.fbt._("Powerups", null, {
						hk: "3ND1rQ"
					})),
					F = Object(ec.c)(id("live"), r.fbt._("Talk", null, {
						hk: "5IHxP"
					})),
					U = Object(ec.c)(id("prediction"), r.fbt._("Predictions", null, {
						hk: "1LUvJo"
					})),
					G = Object(ec.c)(id("community"), r.fbt._("Create a Community", null, {
						hk: "3QGru4"
					}));
				return i || c ? s ? m.a.createElement(Zi.a, null, m.a.createElement(ed, e)) : m.a.createElement(ad, {
					className: nd.a.navbarLikeMweb,
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID",
					tooltipPosition: ["right", "top"],
					targetPosition: ["right", "bottom"]
				}, m.a.createElement(ed, e)) : m.a.createElement(ad, {
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID"
				}, g && a && m.a.createElement(m.a.Fragment, null, m.a.createElement("h3", {
					className: nd.a.sectionHeader,
					role: "heading"
				}, r.fbt._("Online Status", null, {
					hk: "23SMHV"
				})), m.a.createElement(cd, {
					className: nd.a.presenceToggle,
					displayText: b ? r.fbt._("On", null, {
						hk: "3aW5MW"
					}) : r.fbt._("Off", null, {
						hk: "pRgYU"
					}),
					isEnabled: b,
					onClick: () => {
						f(Object(oc.i)(!b)), e.toggleShowPresence(!b)
					}
				})), g && m.a.createElement(u.Fragment, null, m.a.createElement("h3", {
					className: nd.a.sectionHeader,
					role: "heading"
				}, r.fbt._("My Stuff", null, {
					hk: "3aVCEV"
				})), (e => {
					const t = r.fbt._("Profile", null, {
							hk: "czKk9"
						}),
						n = Object(ec.c)(id("profile"), t);
					return m.a.createElement(n, {
						href: e.url,
						onClick: () => f(Object(sc.c)("profile"))
					})
				})(g), m.a.createElement(Pc, null), m.a.createElement(P, {
					href: "/settings",
					onClick: () => f(Object(sc.c)("settings"))
				})), m.a.createElement("h3", {
					className: nd.a.sectionHeader,
					role: "heading"
				}, r.fbt._("View Options", null, {
					hk: "3bZPKB"
				})), g && g.isMod && m.a.createElement(cd, {
					displayText: r.fbt._("Mod Mode", null, {
						hk: "3Rb4sj"
					}),
					isEnabled: o,
					onClick: () => {
						f(Object(nc.i)(!o)), h()
					}
				}, m.a.createElement(Zn.a, {
					name: "mod_mode",
					className: nd.a.modModeIcon
				})), m.a.createElement(cd, {
					displayText: r.fbt._("Dark Mode", null, {
						hk: "1Tx6hE"
					}),
					isEnabled: d,
					onClick: () => {
						f(Object(oc.h)(d)), e.toggleNightmode(!d)
					}
				}, m.a.createElement(Zn.a, {
					name: "night",
					className: nd.a.nightIcon
				})), m.a.createElement("h3", {
					className: nd.a.sectionHeader,
					role: "heading"
				}, r.fbt._("More Stuff", null, {
					hk: "4Gad8T"
				})), v && m.a.createElement(G, {
					className: nd.a.entrypointLink,
					onClick: () => {
						O(), f(Object(rc.a)())
					}
				}), m.a.createElement(u.Fragment, null, x && m.a.createElement(R, {
					href: "/premium",
					onClick: L
				}), E && m.a.createElement(N, {
					href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=user_menu_cta",
					onClick: () => f(Object(oc.b)())
				}), m.a.createElement(T, {
					href: "/coins",
					onClick: () => {
						Object(lr.e)(lr.a.GoldPayment, !0), f(Object(oc.d)())
					}
				}), !x && m.a.createElement(R, {
					href: "/premium",
					onClick: L
				}), m.a.createElement(D, {
					href: "/powerups",
					onClick: () => {
						Object(lr.e)(lr.a.PowerupsFlow, !0), f(Object(oc.e)())
					}
				}), m.a.createElement(F, {
					href: Ps.a,
					onClick: () => f(Object(sc.c)("reddit_talk"))
				}), C && m.a.createElement(U, {
					href: "/predictions",
					onClick: () => {
						Object(lr.e)(lr.a.GoldPayment, !0), f(Object(oc.f)())
					}
				})), m.a.createElement(_, {
					href: "https://www.reddithelp.com",
					onClick: () => f(Object(sc.c)("help_center"))
				}), g && m.a.createElement(S, {
					href: "https://old.reddit.com" + e.url,
					onClick: () => {
						f(Object(sc.c)("old_reddit")), f(e => ({
							source: "redesignbanner",
							action: "click",
							noun: "2xdropdown_visit_old",
							screen: ot.Z(e),
							subreddit: ot.hb(e)
						}))
					}
				}), !rd && g && m.a.createElement(M, {
					href: "",
					onClick: () => {
						f(e => ({
							source: "redesignbanner",
							action: "click",
							noun: "2xdropdown_opt_in",
							screen: ot.Z(e),
							subreddit: ot.hb(e)
						})), e.onOptIntoRedesign()
					}
				}), m.a.createElement("div", {
					className: nd.a.divider
				}), g ? m.a.createElement(w, {
					href: "#",
					onClick: e => {
						f(Object(sc.c)("logout")), t(), e.preventDefault()
					}
				}) : m.a.createElement(k, {
					href: "#",
					onClick: e => {
						Object(j.a)(e) && (e.preventDefault(), e.stopPropagation(), n(), f(Object(tc.b)()))
					}
				}))
			});

			function ld() {
				return (ld = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ud = e => t => m.a.createElement(Zn.a, ld({
					name: e
				}, t)),
				md = Object(p.b)(() => Object(f.c)({
					isCrawler: e => !!Object(Ki.a)(e),
					isModModeEnabled: Qi.a,
					isOpen: Object(zi.b)("USER_DROPDOWN_ID"),
					isPresenceToggleEnabled: Vi.d,
					shouldShowCreateCommunityItem: at.ob,
					navbarLikeMweb: Wi.a,
					navbarLikeMwebV2: Wi.b,
					nightmode: at.cb,
					showPresence: at.U,
					url: Ct.u
				}), (e, t) => ({
					closeUserDropdown: () => e(Object(sa.j)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					exposeNavClickV2Experiment: () => e((() => async (e, t) => Object(Zo.e)(t(), Nt.Xd))()),
					toggleNightmode: t => e(Object(ri.z)(t)),
					toggleShowPresence: t => e(Object(ri.I)({
						showPresence: t
					})),
					onOptIntoRedesign: () => e(Object(Ai.a)()),
					onOptOutOfRedesign: () => {
						"new.reddit.com" !== window.location.host ? (Pe.a.get("rseor3") && Pe.a.remove("rseor3", {
							domain: G.a.cookieDomain
						}), e(Object(Ai.b)(!0))) : window.location.host = "old.reddit.com"
					},
					requestAwardKarma: () => {
						var n;
						!t.user || null !== (n = t.user.karma) && void 0 !== n && n.total || e(Object(Li.f)(Object(nt.e)(t.user)))
					},
					dispatchOpenLoginModal: () => e(Object(na.i)()),
					logoutUser: () => {
						const {
							googleOneTapIFrame: n
						} = t;
						n && n.contentWindow && (console.log("postMessage: disableAutoSelect"), n.contentWindow.postMessage({
							type: "disableAutoSelect"
						}, Object(Fi.a)())), e(Object(oi.q)())
					},
					toggleModMode: () => e(Object(Ri.b)()),
					openCommunityCreationModal: () => e(Object(_e.h)(Fe.a.SUBREDDIT_CREATION_MODAL_ID))
				}));
			var pd = Object(It.u)({
					pageLayer: e => e
				})(md(e => {
					const {
						exposeNavClickV2Experiment: t,
						isPresenceToggleEnabled: n,
						requestAwardKarma: s,
						showPresence: o,
						user: a
					} = e, i = Object(p.e)(Vi.b), [c, d] = Object(u.useState)(!1), l = a && a.id;
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
					return Object(Gi.a)("visibilitychange", h), Object(u.useEffect)(() => {
						d("visible" === document.visibilityState)
					}, []), m.a.createElement("div", {
						className: Object(v.a)(nd.a.container, Di.e)
					}, o && c && i && m.a.createElement(Ti.a, {
						variables: b,
						onData: Ni.a,
						queryKey: "userIsOnline"
					}), m.a.createElement(Hi.a, {
						"aria-expanded": e.isOpen,
						"aria-haspopup": !0,
						className: Object(v.a)(e.className, nd.a.inlineButton, {
							[nd.a.dropdownOpen]: e.isOpen,
							[nd.a.isLoggedOut]: !a,
							[nd.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						id: "USER_DROPDOWN_ID",
						onClick: () => {
							t(), e.onClick(), e.sendEventWithName("self_user_icon")
						}
					}, m.a.createElement("span", {
						className: nd.a.accountDisplayText
					}, (t => t ? m.a.createElement("span", {
						className: Object(v.a)(nd.a.accountWrapper, nd.a.isLoggedIn),
						id: "email-collection-tooltip-id"
					}, t.accountIcon && m.a.createElement(os.a, {
						className: Object(v.a)(nd.a.imgIcon, {
							[nd.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						wrapperClassName: nd.a.imgIconWrapper,
						shouldShowPresenceIndicator: n && o
					}), m.a.createElement("span", {
						className: nd.a.accountDetails
					}, m.a.createElement("span", {
						className: nd.a.username
					}, t.displayText, t.isGold && m.a.createElement(qi.a, {
						className: nd.a.premiumFontIcon,
						title: r.fbt._("Reddit Premium", null, {
							hk: "4Dwpyn"
						}),
						isFilled: !0
					})), m.a.createElement("span", {
						className: nd.a.accountKarma
					}, m.a.createElement(Zn.a, {
						name: "karma",
						isFilled: !0,
						className: nd.a.karmaIcon
					}), m.a.createElement("span", null, (e => {
						const t = Object(Ui.a)(e),
							n = Object(Ii.b)(t);
						return r.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [r.fbt._plural(t, "karma count", n)], {
							hk: "ndlXe"
						})
					})(t))), !!t.coins && m.a.createElement("span", {
						className: nd.a.accountCoins
					}, m.a.createElement(Bi.a, {
						className: nd.a.coinFontIcon,
						isFilled: !0
					}), m.a.createElement("span", null, (e => Object(Ii.b)(e.coins || 0, {
						displayFull: !1,
						roundDown: !0
					}))(t))))) : e.navbarLikeMweb ? null : m.a.createElement("span", {
						className: Object(v.a)(nd.a.accountWrapper, nd.a.isLoggedOut)
					}, m.a.createElement(Zn.a, {
						name: "user",
						className: nd.a.defaultProfileIcon
					})))(e.user), m.a.createElement(Zn.a, {
						name: "caret_down"
					})), m.a.createElement(wr.a, null, r.fbt._("User account menu", null, {
						hk: "2TJXIP"
					}))), m.a.createElement(dd, e))
				})),
				bd = n("./src/reddit/components/ModerationDropdown/index.tsx"),
				hd = n("./src/reddit/components/Settings/modalIds.ts"),
				gd = n("./src/reddit/helpers/trackers/inbox.ts"),
				fd = n("./src/reddit/routes/index.ts"),
				vd = n("./src/reddit/selectors/appBadges.ts"),
				Od = n("./src/reddit/selectors/emailVerification.ts"),
				yd = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				Cd = n("./src/reddit/selectors/sso.ts");
			const xd = Object(f.a)(e => Object(Zo.c)(e, {
				experimentEligibilitySelector: Zo.a,
				experimentName: Nt.xf
			}), e => e === Nt.fd);
			var Ed = n("./src/reddit/components/HeaderUserActions/AdsSignupLink/index.m.less"),
				Pd = n.n(Ed);
			var jd = Object(A.c)(e => {
				let {
					className: t,
					sendEvent: n
				} = e;
				const s = Object(p.e)(xd),
					o = Object(p.e)(at.cb),
					a = Object(Ko.a)(),
					i = r.fbt._("Advertise", null, {
						hk: "bW02l"
					});
				return s ? m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
					className: Object(v.a)(t, Pd.a.container, {
						[Pd.a.isNightMode]: o
					})
				}, m.a.createElement("a", {
					className: Pd.a.link,
					ref: a.target.ref,
					href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=top_nav_cta",
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: () => {
						n(Object(oc.c)())
					},
					onMouseEnter: a.show,
					onMouseLeave: a.hide,
					"aria-label": i
				}, m.a.createElement(Zn.a, {
					className: Pd.a.icon,
					name: "campaign"
				}))), m.a.createElement(Vo.a, {
					arrowProps: a.arrowProps,
					popperProps: a.popperProps,
					visible: a.visible
				}, i)) : null
			});
			const _d = "change-username-tooltip-id",
				Sd = "email-verification-tooltip-id",
				kd = m.a.memo((function(e) {
					let {
						moderationDropdownOpen: t,
						...n
					} = e;
					const s = Object(Ko.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: ba.a.iconWrapper,
						onMouseEnter: s.show,
						onMouseLeave: s.hide,
						ref: s.target.ref
					}, m.a.createElement(ma, {
						"aria-expanded": t,
						"aria-haspopup": !0,
						"aria-label": r.fbt._("Moderation", null, {
							hk: "1qCuzM"
						}),
						id: bd.a,
						onClick: n.onOpenModerationDropdown,
						isOpen: t
					}, m.a.createElement(Lo.a, {
						isActive: n.isModerateIconLit,
						unreadCount: -1,
						showEmpty: !0
					}), m.a.createElement(Zn.a, {
						className: ba.a.icon2020,
						name: "mod"
					})), m.a.createElement(Vo.a, {
						arrowProps: s.arrowProps,
						popperProps: s.popperProps,
						visible: s.visible
					}, r.fbt._("Moderation", null, {
						hk: "4uQPyx"
					}))), m.a.createElement(bd.b, {
						className: ba.a.moderationDropdown,
						isOpen: t,
						unreadNotifications: n.unreadNotifications,
						sendEventWithName: n.sendEventWithName
					}))
				})),
				wd = m.a.memo((function(e) {
					const t = Object(Ko.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: ba.a.iconWrapper,
						onMouseEnter: () => {
							t.show()
						},
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, m.a.createElement("a", {
						className: ba.a.link,
						href: `${G.a.redditUrl}/chat`,
						onClick: Object(Xa.a)(e.onClickChat)
					}, m.a.createElement(Pi, {
						badgeCount: e.badgeCount,
						hasUnreadGroupMessages: e.hasUnreadChatMessages
					}))), m.a.createElement(Vo.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, r.fbt._("Chat", null, {
						hk: "4nXRWH"
					})))
				})),
				Md = m.a.memo((function(e) {
					let {
						onClickMail: t,
						unreadNotifications: n
					} = e;
					const s = Object(Ko.a)();
					return m.a.createElement("span", {
						className: ba.a.iconWrapper,
						onMouseEnter: s.show,
						onMouseLeave: s.hide,
						ref: s.target.ref
					}, m.a.createElement("a", {
						className: ba.a.link,
						href: n && n.hasUnreadMail ? "/message/unread" : "/message/inbox",
						onClick: t
					}, m.a.createElement(wi, {
						unreadCount: n && n.inboxCount || 0
					})), m.a.createElement(Vo.a, {
						arrowProps: s.arrowProps,
						popperProps: s.popperProps,
						visible: s.visible
					}, r.fbt._("Messages", null, {
						hk: "Txokh"
					})))
				})),
				Nd = m.a.memo((function(e) {
					const t = Object(Ko.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: ba.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, m.a.createElement("button", {
						className: ba.a.link,
						"aria-label": r.fbt._("Create Post", null, {
							hk: "4wbXc8"
						}),
						onClick: e.onClickCreatePost
					}, m.a.createElement(Zn.a, {
						className: ba.a.icon2020,
						name: "add"
					}))), m.a.createElement(Vo.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, r.fbt._("Create Post", null, {
						hk: "1TvNGq"
					})))
				})),
				Id = Object(It.u)({
					pageLayer: e => e
				}),
				Td = Object(f.c)({
					activeDropdownId: zi.a,
					appBadges: vd.b,
					chatDirectMessagesCount: vd.e,
					email: at.n,
					hasUnreadChatMessages: vd.f,
					inboxBadgeCount: vd.g,
					isAvatarQuickCreateEnabled: e => Object(js.e)(e) && (e => {
						if (Ha(e)) return !0;
						const t = qa(e),
							n = (new Date).getTime(),
							s = Object(jt.y)();
						if (!(null == t ? void 0 : t.active) || !Wa(e, null == t ? void 0 : t.min_days_on_reddit, t.should_have_avatar)) return !1;
						if (s && t) {
							const e = n > s.lastInteractionTimestamp + Ba(null == t ? void 0 : t.min_days_since_last_event_interaction);
							return !!(s.id === t.id && e && s.eventViews <= t.max_event_views) || s.id !== t.id && e
						}
						return !1
					})(e),
					isChangeUsernameTooltipShowing: e => e.isChangeUsernameTooltipShowing,
					isCustomizeFlyoutShowing: e => e.user.isCustomizeFlyoutShowing,
					isEmailVerificationTooltipShowing: e => e.isEmailVerificationTooltipShowing,
					isGoogleOneTapEnabled: yd.c,
					isInboxRedesignActive: _s.b,
					isModerator: rt.j,
					isNameEditable: at.R,
					isResponsiveSettingsEnabled: At.a,
					shouldOpenEmailVerificationTooltip: Od.a,
					shouldShowChangeUsernameModals: Cd.c,
					unreadNotifications: at.wb
				}),
				Ad = Object(p.b)(Td, (e, t) => ({
					closeChangeUsernameTooltip: () => e(Object(ei.d)()),
					closeEmailVerificationTooltip: () => e(Object(ni.b)()),
					showEmailVerficiationTooltip: () => e(Object(ni.b)()),
					fetchAppBadges: () => e(Object($a.c)()),
					onChatClick: () => e(Object(ti.f)()),
					onDismissCustomizeFlyout: () => e(Object(ri.u)()),
					onOpenModerationDropdown: () => {
						e(Object(sa.h)({
							tooltipId: bd.a
						})), e(Object(cr.q)())
					},
					onOpenUserDropdown: () => e(Object(sa.h)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					openChangeUsernameModal: () => {
						e(Object(_e.h)(hd.b))
					},
					openKeepUsernameModal: () => {
						e(Object(_e.h)(hd.g))
					},
					toggleChangeEmailModal: () => {
						e(Object(ni.b)()), e(Object(_e.i)(hd.a))
					},
					resendEmail: () => e(Object(oi.x)(ui.a)),
					requestCreatePost: () => {
						t.pageLayer && e(si.p(t.pageLayer))
					},
					startChangeUsernameFlow: t => {
						const n = Object(h.b)(t);
						e(Object(ei.f)(n))
					}
				}));
			class Rd extends m.a.Component {
				constructor() {
					super(...arguments), this.state = {
						googleOneTapIFrame: null
					}, this.sendNavClickInbox = () => this.props.sendEvent(Object(gd.y)({
						badgeCount: this.props.inboxBadgeCount
					})), this.sendEventWithName = e => this.props.sendEvent(Object(sc.c)(e)), this.onClickMail = () => this.sendEventWithName("mail"), this.onClickCreatePost = () => {
						this.props.sendEvent(Object(ur.x)({
							actionInfoType: "nav"
						})), this.props.requestCreatePost()
					}, this.onClickChat = () => {
						this.sendEventWithName("chat"), this.props.onChatClick()
					}, this.onOpenModerationDropdown = () => {
						this.props.onOpenModerationDropdown(), this.sendEventWithName("mod_entry")
					}, this.confirmNavigate = e => {
						const t = Object(Za.a)(e.pathname, fd.a),
							n = t && t.route && t.route.meta && t.route.meta.name;
						return !n || n !== O.Nb.POST_CREATION && n !== O.Nb.PROFILE_OVERVIEW || (this.props.startChangeUsernameFlow(e.pathname), !1)
					}, this.exposeIFrameElement = e => {
						this.setState({
							googleOneTapIFrame: e
						})
					}
				}
				componentDidMount() {
					this.props.showEmailVerficiationTooltip(), Ir()(this.props.appBadges) && this.props.fetchAppBadges()
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
						isModerator: g,
						isNameEditable: f,
						isResponsiveSettingsEnabled: O,
						onDismissCustomizeFlyout: y,
						onOpenUserDropdown: C,
						openChangeUsernameModal: x,
						openKeepUsernameModal: E,
						pageLayer: P,
						resendEmail: j,
						shouldOpenEmailVerificationTooltip: _,
						shouldShowChangeUsernameModals: S,
						toggleChangeEmailModal: k,
						unreadNotifications: w,
						user: M
					} = this.props, {
						googleOneTapIFrame: N
					} = this.state, I = !(!w || !w.hasUnreadModmail), T = M && Object(nt.e)(M) || "", A = Object(v.a)({
						[ba.a["m-responsive"]]: O
					});
					return m.a.createElement(et.a, {
						id: Sd,
						ref: e => this.container = e,
						className: n
					}, m.a.createElement(et.a, {
						className: ba.a.headerLinks,
						id: _d
					}, g && m.a.createElement(kd, {
						isModerateIconLit: I,
						moderationDropdownOpen: e === bd.a,
						onOpenModerationDropdown: this.onOpenModerationDropdown,
						sendEventWithName: this.sendEventWithName,
						unreadNotifications: w
					}), M && m.a.createElement(u.Fragment, null, m.a.createElement(wd, {
						onClickChat: this.onClickChat,
						badgeCount: t,
						hasUnreadChatMessages: a
					}), h ? m.a.createElement(Ta, {
						sendNavClickInbox: this.sendNavClickInbox,
						unreadCount: i,
						pageUrl: null == P ? void 0 : P.url,
						userId: M.id,
						isLoggedIn: !!M,
						iconWrapper: ba.a.iconWrapper
					}) : m.a.createElement(Md, {
						onClickMail: this.onClickMail,
						unreadNotifications: w
					}), m.a.createElement(Nd, {
						onClickCreatePost: this.onClickCreatePost
					}), m.a.createElement(jd, {
						className: ba.a.iconWrapper
					}), m.a.createElement("span", {
						className: ba.a.iconWrapper
					}, c ? m.a.createElement(Ya, {
						avatarUrlParams: {
							avatarId: "random",
							username: T
						}
					}) : m.a.createElement(Ei.a, null)))), m.a.createElement(pd, {
						className: ba.a.headerUserDropdown,
						googleOneTapIFrame: N,
						onClick: C,
						user: M,
						sendEventWithName: this.sendEventWithName
					}), b && m.a.createElement("div", {
						className: ba.a.loggedInGoogleOneTap
					}, m.a.createElement(xi, {
						exposeIFrameElement: this.exposeIFrameElement
					})), l && m.a.createElement(ki, {
						onCloseFlyout: y
					}), m.a.createElement(fi, {
						closeTooltip: r,
						email: o,
						isOpen: _ && p,
						resendEmail: j,
						toggleChangeEmailModal: k,
						tooltipId: Sd
					}), m.a.createElement(di, {
						email: o,
						shouldOpenTooltip: _
					}), f && !O && m.a.createElement(u.Fragment, null, m.a.createElement(ci.a, {
						closeTooltip: s,
						isOpen: d && !S,
						openChangeUsernameModal: x,
						openKeepUsernameModal: E,
						tooltipId: _d,
						username: T
					}), S && m.a.createElement(ii.a, {
						isResponsiveSettingsEnabled: O,
						overlayClassName: A,
						username: T,
						withOverlay: !0
					}), m.a.createElement(ai.a, {
						confirmNavigate: this.confirmNavigate
					})))
				}
			}
			var Ld = Object(A.c)(Id(Ad(Rd))),
				Dd = n("./src/reddit/components/Header/User/index.m.less"),
				Fd = n.n(Dd);
			const {
				fbt: Ud
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Gd = Object(f.c)({
				account: e => e.user.account,
				origin: yc.j
			}), Bd = m.a.memo(e => m.a.createElement("div", {
				className: Object(v.a)(e.className, Fd.a.row)
			}, !e.account && m.a.createElement(qd, e), m.a.createElement(Ld, {
				className: Object(v.a)({
					[Fd.a.loggedOut]: !e.account
				}),
				user: e.account
			}))), qd = e => {
				const t = Object(p.e)(vd.g),
					n = Object(p.e)(at.Db),
					s = Object(p.e)(_s.d),
					r = e.pageLayer,
					o = G.a.accountManagerOrigin,
					a = r ? r.url : "/",
					i = r && r.meta && r.meta.name === O.Nb.EXPLORE ? encodeURIComponent(e.origin) : encodeURIComponent(e.origin + a);
				return m.a.createElement(m.a.Fragment, null, s && m.a.createElement(Ta, {
					sendNavClickInbox: () => e.sendEvent(Object(gd.y)({
						badgeCount: t
					})),
					unreadCount: t,
					pageUrl: a,
					userId: n,
					isLoggedIn: !1,
					iconWrapper: Fd.a.iconWrapper
				}), m.a.createElement("div", {
					className: Fd.a.loggedOutRow
				}, m.a.createElement(jd, {
					className: Fd.a.adSignupIconWrapper
				}), m.a.createElement(Xe.t, {
					kind: Xe.b.ExternalLink,
					priority: Xe.c.Secondary,
					redditStyle: !0,
					className: Fd.a.button,
					href: `${o}/login/?dest=${i}`,
					onClick: t => {
						Object(j.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenLoginModal(), e.sendEvent(Object(tc.a)("nav")))
					}
				}, Ud._("Log In", null, {
					hk: "4Cxw0g"
				})), m.a.createElement(Xe.t, {
					kind: Xe.b.ExternalLink,
					priority: Xe.c.Primary,
					redditStyle: !0,
					className: Object(v.a)(Fd.a.separator, Fd.a.button),
					href: `${o}/register/?dest=${i}`,
					onClick: t => {
						Object(j.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenRegisterModal(), e.sendEvent(Object(tc.c)("nav")))
					}
				}, Ud._("Sign Up", null, {
					hk: "2WZPuJ"
				}))))
			};
			var Hd = Object(It.u)()(Object(p.b)(Gd, e => ({
					onOpenLoginModal: () => {
						e(Object(_e.k)({
							actionSource: _e.a.HeaderLogin
						})), e(Object(na.i)())
					},
					onOpenRegisterModal: () => {
						e(Object(_e.k)({
							actionSource: _e.a.HeaderSignup
						})), e(Object(na.j)())
					},
					closeUserDropdown: () => e(Object(sa.j)({
						tooltipId: "USER_DROPDOWN_ID"
					}))
				}))(Object(A.c)(Bd))),
				Wd = n("./src/reddit/components/Header/index.m.less"),
				Vd = n.n(Wd);

			function Qd() {
				return (Qd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Kd = I.a.header("HeaderDynamicStyles", Vd.a),
				zd = Object(f.c)({
					isLoggedIn: at.P,
					isNightMode: at.cb,
					isResponsiveSettingsEnabled: At.a,
					isPageResponsive: No.a,
					isBladeOpen: e => !!e.structuredStyles.isEditing
				}),
				Jd = Object(It.u)({
					categoryName: It.c,
					pageLayer: e => e
				}),
				Yd = e => {
					const t = Object(u.useContext)(g.a);
					return m.a.createElement("div", {
						className: Vd.a.left
					}, m.a.createElement(wr.a, null, r.fbt._("Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts", null, {
						hk: "ToBNc"
					})), m.a.createElement(kr.b, null), m.a.createElement(zn.a, {
						"aria-label": r.fbt._("Home", null, {
							hk: "3PmGmU"
						}),
						className: Vd.a.centeredRow,
						to: "/",
						onClick: e.onReloadFrontpage
					}, m.a.createElement(wo.a, {
						className: Object(v.a)(Vd.a.snoo, {
							[Vd.a.snooExp]: t
						})
					}), m.a.createElement(Mo.a, {
						className: Vd.a.wordmark
					})), e.children)
				},
				Zd = e => m.a.createElement("div", {
					className: Vd.a.right
				}, e.children, m.a.createElement(Hd, null)),
				Xd = e => {
					const t = Object(u.useContext)(g.a);
					return m.a.createElement("div", {
						className: Object(v.a)(Vd.a.layout, {
							[Vd.a.layoutContainer]: t
						})
					}, m.a.createElement(Yd, Qd({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), m.a.createElement(Sr, null), m.a.createElement(ko, {
						className: Vd.a.search
					})), m.a.createElement(Zd, null, m.a.createElement(ta, {
						className: Vd.a.quickLinks
					})))
				},
				$d = e => {
					const t = Object(u.useContext)(g.a);
					return m.a.createElement("div", {
						className: Object(v.a)(Vd.a.layout, {
							[Vd.a.layoutContainer]: t
						})
					}, m.a.createElement(Yd, Qd({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), m.a.createElement("div", {
						className: Vd.a.searchContainer
					}, m.a.createElement(ko, {
						className: Vd.a.search
					}))), m.a.createElement(Zd, null))
				};
			var el = Jd(Object(p.b)(zd, e => ({
					onReloadFrontpage: () => e(Object(mr.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("Frontpage~ModListing~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))(!0))
				}))((function(e) {
					let t;
					const n = Object(u.useContext)(g.a);
					return t = e.isLoggedIn ? Xd : $d, m.a.createElement(Kd, {
						"data-redditstyle": !0,
						className: Object(v.a)(Vd.a.container, e.className, {
							[Vd.a.bladeIsOpen]: e.isBladeOpen,
							[Vd.a.navbarHeightContainer]: n
						})
					}, m.a.createElement(t, {
						categoryName: e.categoryName,
						onReloadFrontpage: e.onReloadFrontpage
					}), (e.isResponsiveSettingsEnabled || e.isPageResponsive) && m.a.createElement(Ao, {
						className: Vd.a.MwebResponsiveHeader
					}))
				}))),
				tl = n("./src/reddit/components/LightboxHeader/index.tsx"),
				nl = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				sl = n("./src/reddit/components/PinnedSubscriptions/index.m.less"),
				rl = n.n(sl);
			const {
				fbt: ol
			} = n("./node_modules/fbt/lib/FbtPublic.js"), al = Object(f.c)({
				currentPage: bs
			}), il = Object(p.b)(al, e => ({
				onUnpinSubscriptions: () => e(Object(_.j)())
			})), cl = Object(It.u)();
			var dl = I.a.wrapped(cl(il(e => m.a.createElement("div", {
					"data-redditstyle": !0,
					className: e.className
				}, m.a.createElement("div", {
					className: rl.a.title
				}, m.a.createElement(Js, {
					className: rl.a.listHeader
				}, ol._("My Communities", null, {
					hk: "1CmPOc"
				})), m.a.createElement("div", {
					className: rl.a.unpin,
					onClick: e.onUnpinSubscriptions
				}, m.a.createElement(Zn.a, {
					name: "close",
					className: rl.a.icon
				}))), m.a.createElement(xr, {
					currentPage: e.currentPage
				})))), "Component", rl.a),
				ll = n("./src/reddit/components/Survey/index.tsx"),
				ul = n("./src/reddit/components/ThemeProvider/index.tsx"),
				ml = n("./src/reddit/actions/toaster.ts");
			const pl = e => t => ({
					source: "toast",
					action: "view",
					noun: e
				}),
				bl = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...ot.d(t),
						reason: "primary"
					}
				}),
				hl = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...ot.d(t),
						reason: "secondary"
					}
				});
			var gl = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				fl = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				vl = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				Ol = n("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				yl = n("./src/reddit/icons/svgs/Unlock/index.tsx"),
				Cl = n("./src/reddit/models/Toast/index.ts"),
				xl = n("./src/reddit/selectors/structuredStyles.ts"),
				El = n("./src/reddit/components/Toaster/PlainBread.m.less"),
				Pl = n.n(El);

			function jl() {
				return (jl = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const _l = e => {
				const t = ic.a;
				switch (e.kind) {
					case Cl.b.Error:
					case Cl.b.AuthError:
					case Cl.b.SuccessEndBroadcast:
						return t.warning;
					case Cl.b.SuccessCommunity:
						return t.op;
					case Cl.b.SuccessCommunityGreen:
					case Cl.b.SuccessMod:
					case Cl.b.SuccessUnlockComment:
						return t.approved;
					case Cl.b.SuccessLockComment:
						return t.reported;
					case Cl.b.EuCookiePolicy:
					case Cl.b.UappBanner:
					case Cl.b.Undo:
					default:
						return t.op
				}
			};
			class Sl extends m.a.Component {
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
			const kl = I.a.wrapped(Sl, "PlainBread", Pl.a);
			var wl = e => m.a.createElement(kl, jl({}, e, {
					style: {
						...e.style || {},
						"--Toaster-indicatorColor": _l(e)
					}
				})),
				Ml = n("./src/reddit/components/Toaster/StyledComponents.m.less"),
				Nl = n.n(Ml);
			const Il = I.a.span("Text", Nl.a);
			var Tl = n("./src/reddit/components/Toaster/index.m.less"),
				Al = n.n(Tl);
			const {
				fbt: Rl
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ll = I.a.wrapped(vl.a, "AuthErrorToastIcon", Al.a), Dl = I.a.wrapped(Xe.l, "AuthErrorToastPrimaryButton", Al.a);
			class Fl extends m.a.Component {
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
					}, m.a.createElement(wl, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(Ll, null), m.a.createElement(Il, null, Rl._("Something went wrong loading this page. Try again?", null, {
						hk: "3k6ebn"
					})), m.a.createElement(Dl, {
						type: "submit"
					}, Rl._("Reload Page", null, {
						hk: "3Hrcyc"
					}))))
				}
			}
			var Ul = Fl,
				Gl = n("./src/lib/cookieConsent/index.ts"),
				Bl = n("./src/reddit/controls/Link/index.tsx"),
				ql = n("./src/reddit/components/Toaster/EuCookiePolicyToast.m.less"),
				Hl = n.n(ql);
			const {
				fbt: Wl
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Vl = I.a.div("Icon", Hl.a), Ql = () => m.a.createElement(Vl, {
				style: {
					backgroundImage: `url(${G.a.assetPath}/img/snoo-upvote.png)`
				}
			}), Kl = I.a.wrapped(Xe.l, "PrimaryButton", Hl.a), zl = I.a.wrapped(wl, "Bread", Hl.a);
			class Jl extends m.a.PureComponent {
				constructor() {
					super(...arguments), this.allowAllCookies = e => {
						e.preventDefault(), Object(Gl.b)({
							opted: !0,
							nonessential: !0
						}), this.props.onClose("allow-all")
					}, this.allowEssentialCookiesOnly = e => {
						e.preventDefault(), Object(Gl.b)({
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
					return m.a.createElement("section", null, m.a.createElement(zl, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n                translateY(${e.style.y}px)\n                scale(${e.style.x}, ${e.style.x})\n              `
						}
					}, m.a.createElement(Ql, null), m.a.createElement("section", {
						className: Hl.a.EuCookiePolicyBody
					}, m.a.createElement(Il, null, Wl._("We use cookies on our websites for a number of purposes, including analytics and performance, functionality and advertising.", null, {
						hk: "4prHYN"
					}), " ", m.a.createElement(Bl.a, {
						href: "https://www.redditinc.com/policies/cookie-notice",
						target: "_blank"
					}, Wl._("Learn more about Reddit’s use of cookies", null, {
						hk: "1bxpLb"
					})), "."), m.a.createElement("section", {
						className: Hl.a.EuCookiePolicyOptions
					}, m.a.createElement("form", {
						onSubmit: this.allowEssentialCookiesOnly
					}, m.a.createElement(Kl, {
						type: "submit"
					}, Wl._("Reject non-essential", null, {
						hk: "M79jf"
					}))), m.a.createElement("form", {
						onSubmit: this.allowAllCookies
					}, m.a.createElement(Kl, {
						type: "submit"
					}, Wl._("Accept all", null, {
						hk: "1tnS6V"
					})))))))
				}
			}
			var Yl, Zl = Jl;
			! function(e) {
				e.LoggedOutMaxSubscriptions = "max_subscriptions"
			}(Yl || (Yl = {}));
			var Xl = n("./src/reddit/controls/Typography/index.tsx"),
				$l = n("./src/reddit/components/Toaster/MilestoneToast.m.less"),
				eu = n.n($l);

			function tu() {
				return (tu = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const nu = I.a.div("Container", eu.a),
				su = I.a.img("SideImage", eu.a),
				ru = I.a.div("Main", eu.a),
				ou = I.a.div("SubTitle", eu.a),
				au = Xl.a,
				iu = I.a.wrapped(Xe.m, "PrimaryLinkButton", eu.a),
				cu = I.a.wrapped(mi.a, "CloseIcon", eu.a);
			class du extends m.a.Component {
				constructor() {
					super(...arguments), this.onSignup = e => {
						e.stopPropagation(), e.preventDefault(), this.props.onClose(), this.props.onSignup(), this.props.sendEvent(bl(this.props.name))
					}
				}
				componentDidMount() {
					this.props.sendEvent(pl(this.props.name))
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
					return m.a.createElement(nu, {
						key: t,
						style: {
							...s,
							transform: `\n            translateY(${s.y}px)\n            scale(${s.x}, ${s.x})\n          `
						}
					}, m.a.createElement(cu, {
						onClick: this.props.onClose
					}), m.a.createElement(su, {
						srcSet: n
					}), m.a.createElement(ru, null, m.a.createElement(ou, null, o), m.a.createElement(Xl.b, null, a), m.a.createElement(au, null, e), m.a.createElement(iu, {
						"data-redditstyle": !0,
						href: "/register",
						onClick: this.onSignup
					}, r.fbt._("Sign Up", null, {
						hk: "2iMVSI"
					}))))
				}
			}
			const lu = Object(p.b)(null, e => ({
					onSignup: () => e(Object(na.j)())
				}))(Object(A.c)(du)),
				uu = `${mu("subscribe-cap.png")} 1x,\n  ${mu("subscribe-cap@2x.png")} 2x,`;

			function mu(e) {
				return `${G.a.assetPath}/img/banner/${e}`
			}
			const pu = 3;
			var bu = n("./src/lib/permanentCookieOptions.ts");
			const hu = e => `${e}:1527210000`;
			var gu = n("./src/reddit/components/Toaster/UappBannerToast.m.less"),
				fu = n.n(gu);
			const {
				fbt: vu
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ou = I.a.div("Icon", fu.a), yu = () => m.a.createElement(Ou, {
				style: {
					backgroundImage: `url(${G.a.assetPath}/img/snoo-upvote.png)`
				}
			}), Cu = I.a.wrapped(Xe.l, "PrimaryButton", fu.a), xu = I.a.wrapped(wl, "Bread", fu.a);
			class Eu extends m.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), Pe.a.set(Et.j, hu(pu), Object(bu.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, m.a.createElement(xu, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(yu, null), m.a.createElement(Il, null, vu._("Reddit is updating its {=User Agreement} and {=Privacy Policy} .", [vu._param("=User Agreement", m.a.createElement(Bl.a, {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, vu._("User Agreement", null, {
						hk: "XS57W"
					}))), vu._param("=Privacy Policy", m.a.createElement(Bl.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, vu._("Privacy Policy", null, {
						hk: "4j7vx4"
					})))], {
						hk: "TxCpk"
					}), " "), m.a.createElement(Cu, {
						type: "submit"
					}, vu._("Got it", null, {
						hk: "2WpndK"
					}))))
				}
			}
			var Pu = Eu;

			function ju() {
				return (ju = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const _u = [],
				Su = {
					stiffness: 200,
					damping: 24,
					precision: .01
				},
				ku = {
					opacity: .5,
					x: .5,
					y: 50
				},
				wu = {
					opacity: Object(N.spring)(0),
					x: Object(N.spring)(.6),
					y: Object(N.spring)(80, Su)
				},
				Mu = I.a.wrapped(vl.a, "SnooFacepalm", Al.a),
				Nu = I.a.wrapped(Ol.a, "SnooHappy", Al.a),
				Iu = I.a.wrapped(ss.b, "SubredditIcon", Al.a),
				Tu = I.a.img("CustomIcon", Al.a),
				Au = I.a.div("Container", Al.a),
				Ru = I.a.wrapped(mi.a, "Close", Al.a),
				Lu = I.a.wrapped(gl.a, "LockIcon", Al.a),
				Du = I.a.wrapped(yl.a, "UnlockIcon", Al.a),
				Fu = I.a.wrapped(fl.a, "RemoveIcon", Al.a),
				Uu = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Ru, ju({
					className: "CloseIcon"
				}, e))),
				Gu = I.a.wrapped(wl, "Bread", Al.a),
				Bu = Object(f.c)({
					subredditIcon: xl.b,
					toastSlices: e => e.toaster
				}),
				qu = Object(p.b)(Bu, e => ({
					dismissToast: t => () => e(Object(ml.g)(t)),
					onButtonClick: (t, n) => () => {
						e(t), e(Object(ml.g)(n))
					}
				}));
			class Hu extends m.a.Component {
				constructor() {
					super(...arguments), this.getStyles = e => Wu(e, this.props.toastSlices), this.getWillEnterStyles = () => ku, this.getWillLeaveStyles = () => wu
				}
				render() {
					return this.props.toastSlices.length ? m.a.createElement(N.TransitionMotion, {
						defaultStyles: _u,
						styles: this.getStyles,
						willLeave: this.getWillLeaveStyles,
						willEnter: this.getWillEnterStyles
					}, e => m.a.createElement(Au, null, e.map(e => {
						const t = e.data,
							n = {
								...e.style,
								transform: `\n                  translateY(${e.style.y}px)\n                  scale(${e.style.x}, ${e.style.x})\n                `
							};
						if (t.kind === Cl.b.Custom && void 0 !== t.customToastType) {
							const s = Qu[t.customToastType];
							return m.a.createElement(s, {
								key: e.key,
								toast: t,
								style: n,
								onClose: this.props.dismissToast(t.id)
							})
						}
						if (t.kind === Cl.b.UappBanner) return m.a.createElement(Pu, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === Cl.b.EuCookiePolicy) return m.a.createElement(Zl, {
							key: e.key,
							toast: t,
							style: n,
							sendViewEvent: () => this.props.sendEvent(pl("eu_essential_policy")),
							onClose: e => {
								switch (this.props.dismissToast(t.id)(), e) {
									case "allow-all":
										this.props.sendEvent(bl("eu_essential_cookie_policy"));
										break;
									case "allow-essential":
										this.props.sendEvent(hl("eu_essential_cookie_policy"))
								}
							}
						});
						if (t.kind === Cl.b.AuthError) return m.a.createElement(Ul, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						const s = t.kind === Cl.b.Modal ? Xe.l : Xe.r,
							r = t.kind === Cl.b.Modal ? Xe.o : Xe.r;
						return m.a.createElement(Gu, {
							className: t.kind === Cl.b.Modal ? Al.a.mModal : void 0,
							key: e.key,
							kind: t.kind,
							sendEvent: t.name ? () => this.props.sendEvent(pl(t.name)) : void 0,
							style: n
						}, m.a.createElement("div", {
							className: Al.a.ContentWrapper
						}, Vu(t, this.props.subredditIcon), t.kind === Cl.b.SuccessLockComment && m.a.createElement(Lu, null), t.kind === Cl.b.SuccessUnlockComment && m.a.createElement(Du, null), m.a.createElement(Il, null, t.text)), m.a.createElement("div", {
							className: Al.a.ButtonsWrapper
						}, t.buttonText && t.buttonAction && m.a.createElement(s, {
							onClick: () => {
								this.props.onButtonClick(t.buttonAction, t.id)(), t.name && this.props.sendEvent(bl(t.name))
							}
						}, t.buttonText), t.secondButtonText && t.secondButtonAction && m.a.createElement(r, {
							onClick: () => {
								this.props.onButtonClick(t.secondButtonAction, t.id)(), t.name && this.props.sendEvent(hl(t.name))
							}
						}, t.secondButtonText)), m.a.createElement(Uu, {
							onClick: () => {
								var e, n;
								null === (e = this.props.dismissToast(t.id)) || void 0 === e || e(), null === (n = t.onClose) || void 0 === n || n.call(t)
							}
						}))
					}))) : null
				}
			}
			const Wu = function() {
					arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					let e = arguments.length > 1 ? arguments[1] : void 0;
					return e.map(e => ({
						data: e,
						key: e.id || (new Date).toString(),
						style: {
							opacity: Object(N.spring)(1),
							x: Object(N.spring)(1, Su),
							y: Object(N.spring)(0, Su)
						}
					}))
				},
				Vu = (e, t) => {
					if (e.customIconAsset) return m.a.createElement(Tu, {
						src: e.customIconAsset
					});
					switch (e.kind) {
						case Cl.b.Error:
							return m.a.createElement(Mu, null);
						case Cl.b.SuccessEndBroadcast:
							return m.a.createElement(Fu, null);
						case Cl.b.SuccessAward:
						case Cl.b.SuccessCommunity:
						case Cl.b.SuccessCommunityGreen:
							return m.a.createElement(Nu, null);
						case Cl.b.SuccessMod:
							return m.a.createElement(Iu, {
								primaryColor: t.color,
								iconUrl: t.url
							})
					}
				},
				Qu = {
					[Cl.a.subscribeCap]: e => m.a.createElement(lu, tu({
						name: Yl.LoggedOutMaxSubscriptions,
						sideImage: uu,
						title: r.fbt._("Oops! You need to Sign Up to join more communities", null, {
							hk: "21CE4w"
						}),
						subTitle: null,
						content: r.fbt._("Sign up to save your communities and secure your account", null, {
							hk: "45W3vB"
						})
					}, e))
				};
			var Ku = qu(Object(A.c)(Hu)),
				zu = n("./src/reddit/featureFlags/profileCollections.ts"),
				Ju = n("./src/reddit/helpers/trackers/banners.ts"),
				Yu = n("./src/reddit/components/AlertBanner/Wrapper.m.less"),
				Zu = n.n(Yu);
			var Xu = I.a.div("Wrapper", Zu.a),
				$u = n("./src/reddit/components/AlertBanner/index.m.less"),
				em = n.n($u);
			const {
				fbt: tm
			} = n("./node_modules/fbt/lib/FbtPublic.js"), nm = () => m.a.createElement(Xu, {
				className: Object(v.a)(em.a.wrapper, em.a.suspended)
			}, m.a.createElement("span", null, tm._("Your account has been suspended.", null, {
				hk: "36oqxa"
			}), " "), m.a.createElement("a", {
				className: em.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, tm._("Learn more", null, {
				hk: "1OTc8q"
			}))), sm = () => m.a.createElement(Xu, {
				className: Object(v.a)(em.a.wrapper, em.a.fpr)
			}, m.a.createElement("span", null, tm._("Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password.", null, {
				hk: "4CbjOV"
			}), " "), m.a.createElement("a", {
				className: em.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, tm._("Learn more", null, {
				hk: "1OTc8q"
			}))), rm = e => {
				let {
					updateLink: t,
					onClickOldReddit: n
				} = e;
				return m.a.createElement(Xu, {
					className: Object(v.a)(em.a.wrapper, em.a.deprecated)
				}, m.a.createElement("span", null, tm._("Looks like you're using new Reddit on an old browser. The site may not work properly if you don't {update your browser} !", [tm._param("update your browser", m.a.createElement(om, {
					link: t
				}, tm._("update your browser", null, {
					hk: "2TB4hp"
				})))], {
					hk: "gC2GV"
				}), " "), m.a.createElement("span", null, tm._("If you do not update your browser, we suggest you visit {old reddit} .", [tm._param("old reddit", m.a.createElement("a", {
					className: em.a.underlineLink,
					href: G.a.oldRedditUrl,
					onClick: n
				}, tm._("old reddit", null, {
					hk: "Sv1DJ"
				})))], {
					hk: "4qKEir"
				})))
			}, om = e => {
				let {
					children: t,
					link: n
				} = e;
				return null !== n ? m.a.createElement("a", {
					className: em.a.underlineLink,
					href: n
				}, t) : m.a.createElement("span", null, t)
			};
			class am extends m.a.PureComponent {
				constructor(e) {
					super(e), this.onClickOldReddit = () => {
						this.props.sendEvent(Object(Ju.a)())
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.props.browserInfo && this.props.browserInfo.isDeprecated && this.props.sendEvent(Object(Ju.b)())
				}
				render() {
					const {
						browserInfo: e,
						showFPR: t,
						showSuspended: n
					} = this.props;
					return e && e.isDeprecated ? m.a.createElement(rm, {
						updateLink: e.updateLink,
						onClickOldReddit: this.onClickOldReddit
					}) : t ? m.a.createElement(sm, null) : n ? m.a.createElement(nm, null) : null
				}
			}
			var im = Object(A.c)(am),
				cm = n("./src/reddit/components/AlertBanner/heights.ts");
			var dm = n("./src/reddit/components/OfflineBanner/index.m.less"),
				lm = n.n(dm);
			const {
				fbt: um
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var mm = e => {
					const t = Object(u.useCallback)(() => window.location.reload(), []),
						n = e.online ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAE9 0lEQVRoQ9WYW0hlZRTHf94TIXXAYRQzQwmFQQSVYSZ6UlESH+whRxMDX6IHJ1AQCXFQkSFUCIUeCkETUx/CF1FB8ClNpFFEX8T UKWkyxgFngjRvJ9Z278Pe57Yv51Kul33O3mut7/9fa32X9UVxwyXqhuMn0gR+BbJ0QfsU+CaYIEaSgEuAulzKQ3lGR0fLzzngA 6ckIkpAA68HGxWlQHCMw7Ghg4i5AhBIBE4d+HTO3OZgscB5bW0tk5OTbtPV1VXu3bv3v8/AZ8DXwAmQODw8TFNTE0dHR6SlpWl kHFeCY0MLGSgE1lW9D4Fp4AdAfmvyO5BpwZdflVATuF5ijJIAnAUDMpBtuAhIYa+GC7RhFQvxIFoGQh2YiJXQR8AU8C6wE+Lg+ HQXjkhFNAvhICCREhLh8m3IRLgGEQIXgGxgmqwA3wHfqt9CUmGhIvAe8KMDRPGyQzuwc5sES+AXIEe8tbS0MDAwYAnL2dkZt2/ f5tWrV5p+nNOsmBH4EmjzgeoKiE5ISOD01NEZzO3y6uqKmJgY7X8S8DdwB/hDffkx8L2/yPgj0AwMipGAfPjwIS9fvmRmZsbtx 9fJ0lL4/Sitra1RVFQUyMUn6hwyncTPgLcrKyuZm5Ne41ok3SkpKVRVVRmIBAPal63aH7gbH9GJj4/n/FyZKk+AL/R2nhmQqDf v7++TnZ3t1uvu7ubx48dsbGxQUFAQasxe/pKSkpQ5Ijg0SUxM1MrVgFn/R35fNTQ0MDY25jZ8/fo1ycnJHB8fK89Iya1bt9ja2 iIjI8M9pJYd/R6jJ2DoWTUrMRocHKS5WaZFZEWifnIibcS1TE1NKfPRLwH5ODEx4TY4PDwkKysLWfb+K6mpqWF6WlqJa/HsoQ0 ZCPXKEg7SISOQk5PD3t6eAePFxYV+TTfFr6tpRXd0dJTGxsaAdgEJLC0t8eDBA8WBbDDqvY2Xw9jYWC4vL5X3vb29jIyMsLNzf Xq2mkUNfGdnJ11dXVppBLRva2ujr6+vF+hwl5QOnUsAa8BkAF9gdnd3yc3N5e7du2xubhrIic3CwgJlZWWm0ZcgSMb0Ivb3799 neXnZy97XCmSYzerMvtJA+yPga6MxRWtDQUgJOU9Rx5U7mToDaQ9FWbPekPLRbRwGlbq6OsNKZQNbUKr+bvB8nYX+kd1bDlieK Q4KQZDGdggoc9HOhAyETXZTqWk5tebn51NeXu6Iil0CcpS9Y3VF0SNKTU1Vjh1WRGpdPaQFVC8uLubp06ey7HlNDn/HaeV2wS4 Bz3XdCgkrY6h+ZX3/yWtyBxjEVVJSglzAWpUwE/AZ7EAdme15sL29TV5enlW+dHR00NPTE1C/tLSUxcVF2fKV1tVOBt4B9trb2 3nyRPoIa2InCzbKx2+gzXpi21kQmlZIyF5jpqd+l/74T3/hMyPgaEl98eKF0lH5k/X1dQoL5fbdv1RXV0vr+jNQEkjPCgFHJMR IQEobqklmZiYHBwemtSh99+zsrJJMM2VTBZ0DpZwqKiqYn5838+v4e1xcnHYCsITNkpIOzbZ688zz589JT093DNTTcGVlRTmJq jd871t1bJeA5lfOwcptVH9/P62trVbH89IbHx9HLhJUsY3HtoEHgt+At7R39fX1CCAzGRoa4tGjR3q1N4G/zOx8fQ+WgN7n58B XNkAIgyEb+j5VQ0kgWCyO7G88gX8BA0iEQE02M2MAAAAASUVORK5CYII=" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmH AAAFhUlEQVRoQ+1ZX0gsZRT/reu/XEpcs2tqiEQpV31Qr5qpFHHTEoOuocVF3Bd7iOylfRDUlzDxImYYGD0kitKDokH5YLoQiL rQalLqiy89qGRqaYnh33XjjDPjzOzMfDOzu4XQ9yDuznfO+f3Od86Zc7614ZYv2y3Hj0gSeBrArxIHnQJ4LNwOiySBQCAQEPH2 9fXB7XYLny8AvAbg+1AJRYrAby6X687w8LAMn82mai4kDCEJ63jv2OfzOYqLi9UIlABY4h/8CKAQsB7KkSJA+GQhdHJygoSEBP peaZPiLA3AjpVwiiSBDwB8pgD1OoDvFN8JiWIJiyUhK57SkSECvwB41ore/5oAldY4AFEUcreBQCOAUQXQdwCMWQGvllBW9bDk XgSwyG+6AvA2gAmWkJHn/1YIhZSoekTCSeAvAE/oGFsBUGTEq2b2hErgDwBOMmi321FRUYGhoSFkZWVxGKiV6O/vR3d3N/b29q S4jgE8bgao1l4rBEjmhKoHAZ6fnzeNw+l04vDwUJCzgkG0qSdMDVe0GrrOzk50dHSYBq4UqK+vx8QEl8vfAHjTikItAlzSXVxc IDr6moPQiEk7TCsG1WQ0mjxh6+cA3jcTQoHl5WUUFd3kGxloaGjA2Jjlcs3kWlpaCp/Px+WNsFJTU7G7u6sbakGNFQnt7Nz0Vc nJyZibm0NeXp4MxMzMDCorK4UGjQnQyIbBwUE0Nzfj8vKSKwoi8ps2PChigghIPbC1tYX9/X0UFlLHC2xubiIzM5P7v7y8HDU1 NWhrazOCzfCe1tZW9PT0yE5CGsLKblaXQHt7O7q6ujjjAwMDaGlpkQGJRD6QAYfDwZVfOg1h+f1+IR/vAaA54jo3Fa6R9fDSZ5 QHgVflu22e61rPWrTn7OyMAyAUBZYMZ0+hW5LsIm5DBHJyctAdv4EHT1kjoFdltBxwenqK+Ph4mcHFxUXuZSl1vJLAQ6/X+1VZ WZlMMCkpCYfFfwY5zegJCDGsPEG7B0hMSsLBwQHrQMTnvDM0T4A2cjEh9Qy1AXcz7uD3l62dAEnZo2zw3w/GacYJkmQ2R0AQ/D AT+OR5YPsUeGbeWPwLkB3RNvz9inkClLxCSZ2enuYqn14I0cMFqpJqsZmWlia+I4wkL6sIvPUzYH+pHuPj45ohJE1mPnx+APCC VhWi7z8G0G4WICuIY2JiuBfUo+eA+07gHsFQhKqaDoHA0dEREhMTZd4P+sAreAPAt+EmQLo9Hg+qqqo4M3RnRK0DaxEBSRh9Ce Bd2clqKNB8H7AMhvu5pAT/BKBAqV+zG43ECVghxxP4AsB7qiGmodTvdrujent7rdgMm8zS0hJKSugmUvvqUW+gCSmMhKOPjY0F vVUZPb8qabXWwWgIcQViamoKtbW1MhkKLWq5FTMuqMqcn58HARF6emrQjo9pFDa+eAJ0DXPTWyvEWfOo7BQEj+Tm5mJ9fV1URa 0AzQ20VldXkZ+fH4RSrTnTo0Ivr6srwq5/c80i8DWABxsbG8jOzkZGRgZoRtBa4Rw7eV00l8fqEWUR4EKJ/lAcx8XRNab+IsPb 29tIT09nbWU6guV95vHwFkwlMxFobGzE6KjyCtQYHyOJK9XEOoHA5OQk6urqjFnnby8WFha4kdPMIsJNTU2CCAuXqFpvI00TJ2 ZeaHQDRzOyGRm6QKAmkV/MmFc6RY8AlQCbUTBer1f0uhEZl8uFkZERKR4qlVzZMbN0X2QpKSlB9V48Y/VfHLnpiiY46aJ5eG1t jWvgFIvGPPlmM+gZWe6nX05WVlZQUHDdQ83OzqK6ulow8SmAVrrAA0DT8kO+U7yrg4F+kXkE4COTOLUrFkPRPoAnJXvoxksM2H CBCEWP4WwPxUgkZf8nEEnvGtH9D0h1xECJaZxWAAAAAElFTkSuQmCC";
					return m.a.createElement("div", {
						className: Object(v.a)(e.className, lm.a.banner, {
							[lm.a.online]: e.online,
							[lm.a.hidden]: !e.showBanner
						})
					}, m.a.createElement("img", {
						className: lm.a.snoomoji,
						src: n
					}), m.a.createElement("span", {
						className: lm.a.title
					}, e.online ? um._("Found the internet!", null, {
						hk: "fMghd"
					}) : um._("hmm… no internet?", null, {
						hk: "28GsiU"
					})), m.a.createElement(Zn.a, {
						className: lm.a.refresh,
						name: "refresh_fill",
						onClick: t
					}))
				},
				pm = n("./src/reddit/components/Upsell/async.ts"),
				bm = n("./src/reddit/constants/componentSizes.ts"),
				hm = n("./src/reddit/constants/elementIds.ts"),
				gm = n("./src/reddit/constants/posts.ts"),
				fm = n("./src/reddit/contexts/InsideOverlay.tsx"),
				vm = n("./src/reddit/constants/promo.ts"),
				Om = n("./src/reddit/contexts/Promo/index.ts");

			function ym(e, t) {
				const {
					promoName: n
				} = t.payload, s = e.get(n);
				switch (t.type) {
					case vm.a.Completed:
						return s === vm.a.Shown ? new Map(e.set(n, vm.a.Completed)) : e;
					case vm.a.Dismissed:
						return s === vm.a.Shown ? new Map(e.set(n, vm.a.Dismissed)) : e;
					case vm.a.Shown:
						return s ? e : new Map(e.set(n, vm.a.Shown));
					default:
						throw new Error
				}
			}
			var Cm = function(e) {
					let {
						children: t
					} = e;
					const [n, s] = u.useReducer(ym, new Map), r = u.useCallback(e => s({
						type: vm.a.Completed,
						payload: {
							promoName: e
						}
					}), []), o = u.useCallback(e => s({
						type: vm.a.Dismissed,
						payload: {
							promoName: e
						}
					}), []), a = u.useCallback(e => s({
						type: vm.a.Shown,
						payload: {
							promoName: e
						}
					}), []), i = u.useMemo(() => ({
						completePromo: r,
						dismissPromo: o,
						promos: n,
						showPromo: a
					}), [r, o, n, a]);
					return u.createElement(Om.a.Provider, {
						value: i
					}, t)
				},
				xm = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				Em = n("./src/reddit/helpers/postCollection.ts"),
				Pm = n("./src/reddit/models/Theme/index.ts"),
				jm = n("./src/reddit/selectors/experiments/econ/meta.ts");
			var _m = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Sm = n("./src/reddit/selectors/experiments/survey.ts"),
				km = n("./src/reddit/selectors/notificationBanner.ts"),
				wm = n("./src/reddit/selectors/onboarding.ts"),
				Mm = n("./src/reddit/selectors/posts.ts"),
				Nm = n("./src/reddit/components/AppRouter/index.m.less"),
				Im = n.n(Nm);

			function Tm() {
				return (Tm = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Am = e => {
					let {
						className: t,
						shouldDisplayPinnedSubscriptions: n,
						...s
					} = e;
					return m.a.createElement("div", Tm({
						className: Object(v.a)(Im.a.main, {
							[Im.a.mShowingPaddedPinnedDescriptions]: n
						}, t)
					}, s))
				},
				Rm = Object(y.a)(e => {
					let {
						className: t,
						overlayScrollContainerEl: n,
						theme: s,
						...r
					} = e;
					const o = Object(F.a)({
						theme: s,
						...r
					});
					return m.a.createElement("div", Tm({
						className: Object(v.a)(Im.a.overlayContentWrapper, t),
						style: {
							"--comments-overlay-background": Object(Pm.g)(o.canvas, o.canvasImgUrl, o.canvasImgPosition),
							"--comments-overlay-offset": `${Object(_t.c)(n)}px`
						}
					}, r))
				}),
				Lm = e => {
					let {
						className: t,
						divRef: n,
						...s
					} = e;
					const r = Object(u.useContext)(g.a);
					return m.a.createElement("div", Tm({
						className: Object(v.a)(Im.a.lightboxHeaderWrapper, t, {
							[Im.a.lightboxHeaderWrapperExp]: r
						})
					}, s, {
						ref: n
					}))
				},
				Dm = Object(km.a)(nl.a.EmailCollectionBannerId),
				Fm = Object(p.b)(() => Object(f.c)({
					connection: e => e.connection,
					currentPage: e => e.platform.currentPage,
					frontpageSignupVariant: e => {
						const {
							currentPage: t
						} = e.platform;
						return Object(U.a)(e, {
							pageLayer: t
						})
					},
					hasInvalidSession: at.x,
					isD2xSeoDisableLightboxEnabled: Xn.a,
					isLoggedIn: at.P,
					isNpsSurveyEnabled: Sm.d,
					isOnboardingQueryParamEnabled: wm.c,
					isSubscriptionsPinned: es.b,
					isSuccessfulSurveyEnabled: Sm.f,
					isSuspended: at.W,
					isFPR: at.N,
					posts: Mm.J,
					profileCollectionsEnabled: zu.a,
					showEmailCollectionBanner: e => !Object(It.M)(e.platform.currentPage) && Dm(e),
					isBlockingInterstitialEnabled: _m.b,
					signUpModalIsOpen: Object(ka.c)(Fe.a.REGISTER_MODAL_ID)
				}), e => ({
					onClickOutsideOverlay: t => e(Object(h.b)(t)),
					onPostDismissTrigger: () => e(Object(S.k)()),
					onSuccessfulSignupTrigger: () => e(Object(S.g)()),
					onUnpinSubscriptions: () => e(Object(_.j)())
				})),
				Um = (e, t) => !(!e.state || !e.state[Xr.b.IsOverlay] || t === e);
			class Gm extends m.a.Component {
				constructor(e) {
					super(e), this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage, this.isNarrowScreen = !1, this.isWideScreen = !1, this.didCountSurveyTrigger = !1, this.resizeHandler = l()(() => {
						const e = window.innerWidth;
						this.props.isSubscriptionsPinned && e < bm.l && this.props.onUnpinSubscriptions()
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
						if (Object(It.x)(e)) {
							const s = e && e.urlParams && e.urlParams.partialPostId,
								r = `${O.Ib.Post}_${s}`,
								o = t && s && t[r],
								a = o && o.belongsTo.type === gm.a.PROFILE;
							return !(!o || !Object(Em.a)(o) || a && !n)
						}
						return !1
					}, this.state = {
						isSignupUpsellDisplayed: Object(U.c)(e.frontpageSignupVariant),
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
					} = this.props, r = n.state && n.state[Xr.b.IsOverlay], o = Object(P.a)(this.previousLocation, e.location);
					t && r && o && !this.didCountSurveyTrigger && (s(), this.didCountSurveyTrigger = !0);
					const a = Object(P.a)(this.previousLocation, this.props.location),
						i = r ? this.previousPage : this.props.currentPage;
					if (i) {
						const {
							meta: t,
							urlParams: n
						} = i, s = t && (t.name === O.Nb.INDEX || t.name === O.Nb.SUBREDDIT && n.subredditName === Os.b.Popular), r = Object(U.c)(this.props.frontpageSignupVariant), o = Object(U.c)(e.frontpageSignupVariant);
						s || r || !o ? r && !o && this.setState({
							isSignupUpsellDisplayed: !1
						}) : this.setState({
							isSignupUpsellDisplayed: !0,
							isSignupUpsellHidden: !1
						})
					}
					if ("POP" === e.history.action || r || o || a || (this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage), this.props.isBlockingInterstitialEnabled && this.props.signUpModalIsOpen) return;
					const c = Um(e.location, this.previousLocation);
					x.a.write(() => {
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
						isD2xSeoDisableLightboxEnabled: o,
						isFPR: a,
						isLoggedIn: i,
						isSubscriptionsPinned: d,
						isSuspended: l,
						location: p,
						onClickOutsideOverlay: b,
						routes: h,
						showEmailCollectionBanner: g
					} = this.props, {
						isSignupUpsellDisplayed: f,
						isSignupUpsellHidden: v
					} = this.state, y = this.context, C = Um(p, this.previousLocation);
					p.state && p.state[Xr.b.IsOverlay] && !C ? p.state[Xr.b.IsOverlay] = !1 : p.state && (this.previousLocation === p || p.state[Xr.b.CloseLocation] && this.previousLocation.state && this.previousLocation.state[Xr.b.CloseLocation] && this.previousLocation.state[Xr.b.CloseLocation] === p.state[Xr.b.CloseLocation] ? p.state[Xr.b.CloseLocation] = {
						...this.previousLocation,
						state: c()(this.previousLocation.state, Xr.b.CloseLocation)
					} : p.state[Xr.b.CloseLocation] = this.previousLocation);
					const x = Object(P.a)(this.previousLocation, p),
						E = C || x ? this.previousLocation : p,
						j = C || x ? this.previousPage : t,
						_ = !(!(j && j.meta && j.meta.name === O.Nb.SEARCH_RESULTS && j && j.queryParams) || j.queryParams[$r.u]),
						S = !(!j || !j.meta || j.meta.name !== O.Nb.MODERATION_PAGES),
						w = Object(It.x)(j),
						M = this.getIsPostCollection(),
						N = f && !v,
						I = e.showBanner;
					return s ? r.fbt._("Sorry, we have failed you. Try refreshing!", null, {
						hk: "3qsDla"
					}) : m.a.createElement(m.a.Fragment, null, m.a.createElement(It.a.Provider, {
						value: j
					}, m.a.createElement(kr.c, {
						isOverlayOpen: C
					}, m.a.createElement(ul.a, {
						forceRedditTheme: _
					}, f && m.a.createElement(xe, {
						frontpageSignupVariant: n,
						onClose: this.hideSignupUpsell
					}), m.a.createElement(Bm, {
						browserInfo: y,
						connection: e,
						isFPR: a,
						isInline: N,
						isSuspended: l,
						showOffline: I
					})), m.a.createElement(fm.a.Provider, {
						value: !1
					}, m.a.createElement(ul.a, {
						forceRedditTheme: _ || S,
						isCommentsPage: w
					}, m.a.createElement(Cm, null, m.a.createElement(qm, {
						browserInfo: y,
						frontpageSignupVariant: n,
						isD2xSeoDisableLightboxEnabled: o,
						isCommentsPage: w,
						isInline: N,
						isLoggedIn: i,
						isSubscriptionsPinned: d,
						location: E,
						overlayIsOpen: C,
						page: j,
						routes: h,
						showEmailCollectionBanner: g,
						showFPR: a,
						showOffline: I,
						showSuspended: l
					}), m.a.createElement(pm.b, null), m.a.createElement(pm.a, null)))))), m.a.createElement(It.a.Provider, {
						value: t
					}, C && m.a.createElement(fm.a.Provider, {
						value: !0
					}, m.a.createElement(ul.a, {
						isOverlay: !0
					}, m.a.createElement(Hm, {
						browserInfo: y,
						isPostCollection: M,
						location: p,
						onClickOutsideOverlay: b,
						page: t,
						routes: h,
						showEmailCollectionBanner: g,
						showFPR: a,
						showOffline: I,
						showSuspended: l
					}))), m.a.createElement(ul.a, null, m.a.createElement(u.Fragment, null, m.a.createElement(Ku, null), m.a.createElement(ll.a, null), g && m.a.createElement(k.a, null), m.a.createElement(wt, null), m.a.createElement(Kn, null)))))
				}
			}
			Gm.contextType = C.a;
			const Bm = Object(A.c)(e => {
					const t = Object(It.fb)(),
						n = Object(p.e)(e => ((e, t) => {
							let {
								pageLayer: n
							} = t;
							return !!Object(It.bb)(n) || !Object(jm.a)(e)
						})(e, {
							pageLayer: t
						})),
						s = Object(u.useContext)(g.a),
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
					return m.a.createElement(u.Fragment, null, m.a.createElement(im, l), n && m.a.createElement(el, {
						className: Object(v.a)(Im.a.header, Object(cm.b)(Im.a, l), {
							[Im.a.inline]: i
						})
					}), m.a.createElement(mm, {
						className: Object(v.a)(Im.a.offlineBanner, Object(cm.b)(Im.a, l)),
						online: o.online,
						showBanner: o.showBanner
					}))
				}),
				qm = Object(A.c)(class extends m.a.Component {
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
							isD2xSeoDisableLightboxEnabled: o,
							isInline: a,
							isLoggedIn: i,
							isSubscriptionsPinned: c,
							showEmailCollectionBanner: d
						} = this.props, l = c && !(!o && !i && !s && r);
						return m.a.createElement(Am, {
							"aria-hidden": s,
							className: Object(v.a)(Object(cm.b)(Im.a, this.props), {
								[Im.a.withUpsell]: !!e,
								[Im.a.inline]: a
							}),
							shouldDisplayPinnedSubscriptions: l
						}, l && m.a.createElement(dl, {
							className: Object(v.a)(Im.a.pinnedSubscriptions, Object(cm.b)(Im.a, this.props)),
							"data-redditstyle": !0
						}), m.a.createElement(b.f, {
							location: t
						}, n), d && m.a.createElement("div", {
							className: Object(v.a)(Im.a.bottomSpacer, Object(cm.a)(Im.a, this.props))
						}))
					}
				});
			class Hm extends m.a.Component {
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
						if (this.mouseDownInWrapper && Object(j.a)(e) && 0 === e.button && e.target === this.state.overlayScrollContainerEl) {
							const {
								location: e,
								onClickOutsideOverlay: t
							} = this.props;
							t(e.state[Xr.b.CloseLocation])
						}
					}, this.onOverlayMouseDown = e => {
						this.mouseDownInWrapper = e.target === this.state.overlayScrollContainerEl && e.clientX <= window.innerWidth - 17
					}, this.state = {
						overlayScrollContainerEl: null,
						mediaIsFullscreen: !1
					}
				}
				componentDidMount() {
					document.addEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.lightboxHeaderEl && (this.lightboxHeaderEl.focus(), this.listingFocusSubscriptionId = xm.a.subscribe(e => {
						e.isListingFocused && this.lightboxHeaderEl.querySelector(E.a).focus()
					}))
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.listingFocusSubscriptionId && xm.a.unsubscribe(this.listingFocusSubscriptionId)
				}
				render() {
					const {
						isPostCollection: e,
						page: t,
						routes: n
					} = this.props, {
						overlayScrollContainerEl: s
					} = this.state, r = !(!t || !t.meta || t.meta.name === O.Nb.SUBREDDIT_CREATION || t.meta.name === O.Nb.PUBLIC_ACCESS_NETWORK), o = e;
					return m.a.createElement(Rm, {
						className: Object(v.a)(Object(cm.b)(Im.a, this.props), {
							[Im.a.mIsCommentsLightbox]: r,
							[Im.a.mIsLargeCommentsLightbox]: o
						}),
						overlayScrollContainerEl: s
					}, m.a.createElement("div", {
						className: Object(v.a)(Im.a.overlayWrapper, Object(cm.b)(Im.a, this.props))
					}, m.a.createElement("div", {
						className: Object(v.a)(Im.a.overlayScrollContainer, {
							[Im.a.mediaIsFullscreen]: this.state.mediaIsFullscreen
						}),
						id: hm.d,
						ref: this.overlayRefFn,
						onMouseDown: this.onOverlayMouseDown,
						onMouseUp: this.onOverlayMouseUp
					}, r && m.a.createElement(Lm, {
						divRef: this.lightboxHeaderRefFn,
						className: Object(v.a)(Object(cm.b)(Im.a, this.props), {
							[Im.a.mIsLargeCommentsLightbox]: o
						}),
						tabIndex: -1
					}, m.a.createElement(tl.a, {
						page: t
					})), m.a.createElement(b.f, null, n), m.a.createElement("div", {
						className: Object(v.a)(Im.a.bottomSpacer, Object(cm.a)(Im.a, this.props))
					}))))
				}
			}
			t.b = Fm(Object(A.c)(Gm))
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
		"./src/reddit/components/Crypto/componentStyles.less": function(e, t, n) {},
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
		"./src/reddit/components/Econ/Marketplace/ClaimModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = () => Promise.all([n.e(0), n.e(1), n.e("vendors~MarketplaceClaimModal"), n.e("MarketplaceClaimModal")]).then(n.bind(null, "./src/reddit/components/Econ/Marketplace/ClaimModal/index.tsx")),
				d = Object(s.a)(c, {
					ssr: !1
				});
			Object(a.b)(i.a.ECON_MARKETPLACE_CLAIM, e => o.a.createElement(d, {
				onClose: e
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
				importAsync: () => Promise.all([n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("EconTopAwardersModal")]).then(n.bind(null, "./src/reddit/components/Econ/TopAwardersModal/index.tsx")),
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
				return f
			})), n.d(t, "STARBURST_ASSET_PATH", (function() {
				return v
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
				g = n.n(h);
			const f = `${s.a.assetPath}/img/gold/animated-sparkle-256.png`,
				v = `${s.a.assetPath}/img/gold/animated-starburst-256.png`,
				O = Object(c.c)({
					award: b.b,
					awardIcon: p.d
				}),
				y = Object(i.b)(O, e => ({
					onClose: () => e(Object(u.g)(m.a.GOLD_GILD_ANIMATION_OVERLAY))
				}));
			t.default = Object(d.a)(y(e => {
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
					className: g.a.gildAnimationContainer
				}, a.a.createElement("div", {
					className: Object(l.a)(g.a.animationComponent, g.a.starburst),
					style: {
						backgroundImage: `url(${v})`
					}
				}), a.a.createElement("img", {
					alt: o,
					className: Object(l.a)(g.a.animationComponent, g.a.awardAsset),
					src: n
				}), a.a.createElement("div", {
					className: Object(l.a)(g.a.animationComponent, g.a.sparkle),
					style: {
						backgroundImage: `url(${f})`
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
				g = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/helpers/awards/overlayIds.ts"),
				v = n("./src/reddit/helpers/correlationIdTracker.ts"),
				O = n("./src/reddit/helpers/trackers/goldTopNav.ts"),
				y = n("./src/reddit/icons/fonts/index.tsx"),
				C = n("./src/reddit/selectors/experiments/econStorefrontClaim.ts"),
				x = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				E = n("./src/reddit/selectors/tooltip.ts"),
				P = n("./src/reddit/components/Header/GoldCoinsCta/index.m.less"),
				j = n.n(P);
			const _ = Object(s.a)({
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
				S = Object(f.a)(),
				k = Object(d.c)({
					activeSaleConfig: x.a,
					activeTooltipId: E.a,
					coinPurchaseDropdownIsOpen: e => Object(E.b)(S)(e),
					isFreeAwardEventEnabled: e => Object(C.a)(e) && Object(x.g)(e)
				}),
				w = (e, t) => ({
					closeTooltip: () => e(Object(m.i)()),
					requestSpecialEvents: () => e(Object(u.a)()),
					toggleTooltip: t => {
						e(t === S ? Object(m.i)() : Object(m.f)({
							tooltipId: S
						}))
					}
				}),
				M = Object(c.b)(k, w);
			class N extends i.a.Component {
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
							Object(v.e)(v.a.GoldPayment, !0), Object(b.a)(), Object(h.a)();
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
					} = this.props, o = this.getButtonText(), a = !!e || r, c = Object(l.a)(j.a.icon, {
						[j.a.special]: a
					});
					return i.a.createElement("button", {
						className: Object(l.a)(t, j.a.ctaContainer, {
							[j.a.special]: a
						}),
						id: S,
						onClick: this.handleClick
					}, i.a.createElement("div", {
						className: Object(l.a)(j.a.ctaContent, {
							[j.a.special]: a
						})
					}, i.a.createElement(y.a, {
						name: "coins",
						className: c
					}), i.a.createElement("span", {
						className: j.a.text
					}, o)), s && i.a.createElement(_, {
						activeSaleConfig: e,
						isFreeAwardEventEnabled: r,
						isOpen: s,
						onCloseTooltip: n,
						tooltipId: S
					}))
				}
			}
			t.a = M(Object(g.c)(N))
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
		"./src/reddit/components/Header/QuickLinks/Timer.m.less": function(e, t, n) {
			e.exports = {
				timer: "_1RWqLcP0XUFojNUc0Mf0Yc"
			}
		},
		"./src/reddit/components/Header/QuickLinks/index.m.less": function(e, t, n) {
			e.exports = {
				container: "x0hiXHicn7r3BG9m1FJH4",
				row: "_1vXXD2qKLnHetdKvisFzBD",
				icon: "_3dZnYgFFpifT-M_Vs2FAq6",
				psBattlesIcon: "_3wyl6g2grDztg8KpnqxWiE",
				redditRecapIcon: "_1o57g3XSOeqm_QEQu824EP",
				isNightMode: "F6FHwO9Q2Pva6rdcMPWrm",
				hotPotatoLink: "_1o0rv7Kcd4-rywKyuwuS4d",
				hotPotatoIcon: "_3hPJyNn7eKE2V1QllrneKU"
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
				g = m.a.div("SparseContainerExp", u.a),
				f = m.a.a("HomeExternalLink", u.a);
			t.a = function(e) {
				const t = Object(s.useContext)(a.a) ? g : h;
				return r.a.createElement(t, {
					id: o.c
				}, r.a.createElement(f, {
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
				iconWrapper: "_2QpF1Fkq_rr2nvPL1no0nN",
				adSignupIconWrapper: "buhDxtCErlohIqSGl44CH"
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
		"./src/reddit/components/HeaderUserActions/AdsSignupLink/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2I12Htze2UzJmmfnrgYJOn",
				icon: "_1jAt0x8BSB9mgoXbsDuKJ6",
				link: "_24UNt1hkbrZxLzs5vkvuDh",
				isNightMode: "_1dBtowHdRHcGyLbVEaOL8t"
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
				icon2020: "_3uVYL9qgX3QSEa_F4F-DPv"
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
				entrypointLink: "pszNQQxC761u1dbJ3aR-C"
			}
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
				return g
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/config.ts"),
				o = n("./src/lib/pubsub/index.ts"),
				a = n("./src/reddit/constants/listings.ts"),
				i = n("./src/reddit/constants/page.ts");
			const c = e => e && e.toLowerCase() === a.b.Popular,
				d = e => e && e.toLowerCase() === a.b.All,
				l = e => e && e === i.c,
				u = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 68;
					return {
						height: n,
						image: e,
						width: t
					}
				},
				m = e => {
					let t, n, o, i, m, {
						listingName: p,
						subreddit: b,
						idCardWidget: h
					} = e;
					const g = h && h.subscribersText || s.fbt._("Members", null, {
							hk: "1dldMb"
						}),
						f = h && h.currentlyViewingText || s.fbt._("Online", null, {
							hk: "36JX70"
						});
					let v, O;
					return l(p) ? (t = `${r.a.assetPath}/img/id-cards/home-banner@2x.png`, o = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), m = a.c[a.b.Home], n = s.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), i = s.fbt._("Home", null, {
						hk: "9xVXB"
					})) : d(p) ? (t = `${r.a.assetPath}/img/id-cards/banner@2x.png`, n = s.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), o = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), i = "r/all", m = a.c[a.b.All]) : c(p) ? (t = `${r.a.assetPath}/img/id-cards/banner@2x.png`, n = s.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), o = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), i = "r/popular", m = a.c[a.b.Popular]) : p && (n = h && h.description, o = u(""), i = b.displayText, m = b.url, O = h && h.subscribersCount, v = h && h.currentlyViewingCount), {
						snooBackground: o,
						description: n,
						titleText: i,
						url: m,
						subscribersCount: O,
						subscribersText: g,
						currentlyViewingText: f,
						currentlyViewingCount: v,
						...t ? {
							bannerBackgroundImage: t
						} : {}
					}
				},
				p = new o.a,
				b = "VISIBLE",
				h = "NOT_VISIBLE",
				g = e => p.publish(e ? b : h)
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
				g = n("./src/reddit/components/PostTitle/index.tsx"),
				f = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				v = n("./src/reddit/components/SubscribeButton/index.tsx"),
				O = n("./src/reddit/components/TrackingHelper/index.tsx"),
				y = n("./src/reddit/constants/colors.ts"),
				C = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/helpers/postCollection.ts"),
				E = n("./src/reddit/icons/fonts/index.tsx"),
				P = n("./src/reddit/icons/svgs/Subreddit/index.tsx"),
				j = n("./src/reddit/models/Media/index.ts"),
				_ = n("./src/reddit/models/Vote/index.ts"),
				S = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				k = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				w = n("./src/reddit/selectors/platform.ts"),
				M = n("./src/reddit/selectors/subreddit.ts"),
				N = n("./src/reddit/selectors/telemetry.ts"),
				I = n("./src/reddit/contexts/Post/index.tsx"),
				T = n("./src/reddit/components/LightboxHeader/index.m.less"),
				A = n.n(T);
			const R = Object(i.c)({
					subreddit: (e, t) => {
						let {
							page: n,
							post: s
						} = t;
						if (!n && !s) return null;
						const r = s || Object(w.n)(e, {
							page: n
						});
						return (null == r ? void 0 : r.belongsTo) ? Object(M.K)(e, {
							identifier: r.belongsTo
						}) : null
					},
					post: w.n,
					joinOptimizationsLightboxHeaderEnabled: e => Object(S.a)(e) || Object(S.d)(e) || Object(S.c)(e),
					isVoteCountAnimation: (e, t) => {
						let {
							page: n,
							post: s
						} = t;
						if (!n && !s) return !1;
						const r = n && Object(w.n)(e, {
							page: n
						}) || s;
						return !!r && Object(k.g)(e, {
							post: r
						})
					}
				}),
				L = Object(a.b)(R, (e, t) => {
					let {
						sendEvent: n
					} = t;
					return {
						close: () => {
							e(Object(m.a)(n, !0))
						},
						toggleVote: (t, n) => e(n === _.a.upvoted ? Object(u.kb)(t) : Object(u.w)(t))
					}
				}, (e, t, n) => ({
					...e,
					...t,
					...n,
					onVoteClick: s => {
						const r = e.post || n.post;
						r && t.toggleVote(r.id, s)
					}
				})),
				D = {
					[j.o.GIFVIDEO]: l.a.gif_post,
					[j.o.IMAGE]: l.a.image_post,
					[j.o.TEXT]: l.a.text_post,
					[j.o.RTJSON]: l.a.text_post,
					[j.o.VIDEO]: l.a.video_post,
					[j.o.EMBED]: l.a.embed,
					[j.o.LIVEVIDEO]: l.a.video_live,
					[j.o.GALLERY]: l.a.media_gallery,
					[j.o.LIVEAUDIO]: l.a.audio
				},
				F = e => D[(null == e ? void 0 : e.media) ? e.media.type : j.o.EMBED];
			class U extends o.a.Component {
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
								noun: (null == t ? void 0 : t.name) && Object(M.eb)(e, {
									identifier: {
										name: t.name,
										type: "subreddit"
									}
								}) ? "subscribe" : "unsubscribe",
								post: n ? N.I(e, n.id) : void 0,
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
					} = this.props, h = F(l), O = !l && (null === (e = null == i ? void 0 : i.meta) || void 0 === e ? void 0 : e.name) === d.Nb.META_MEMBERSHIP_PAYWALL_PAGE, C = l ? I.a : function(e) {
						let {
							children: t,
							postId: n
						} = e;
						return t
					};
					return o.a.createElement("div", {
						className: Object(c.a)(A.a.container, t, {
							[A.a.isCollection]: l && Object(x.a)(l),
							[A.a.adaptive]: u
						})
					}, o.a.createElement(C, {
						postId: null == l ? void 0 : l.id
					}, o.a.createElement("div", {
						className: A.a.postDetails
					}, l && o.a.createElement(r.Fragment, null, m && !u ? void 0 : o.a.createElement(p.a, {
						className: A.a.horizontalVotes,
						compact: !1,
						light: !u,
						model: l,
						onVoteClick: a,
						redditStyle: !0
					}), o.a.createElement(E.a, {
						name: h,
						className: A.a.mediaIcon
					}), o.a.createElement(g.c, {
						className: A.a.postTitle,
						post: l,
						size: u ? g.b.Medium : g.b.Small,
						hideSourceLink: !0,
						isCommentsPage: !0,
						isOverlay: !0,
						nowrap: !0,
						titleColor: u ? void 0 : y.a.lightboxHeaderText,
						titleLinkClassName: A.a.postTitleLink
					}), o.a.createElement(b.a, {
						post: l,
						nowrap: !0,
						sendEvent: this.props.sendEvent
					}), this.props.showSubreddit && this.props.subreddit && o.a.createElement(o.a.Fragment, null, o.a.createElement(P.a, {
						className: A.a.srIcon
					}), o.a.createElement(f.a, {
						to: this.props.subreddit.url,
						className: A.a.subredditName
					}, this.props.subreddit.name))), O && i && i.urlParams.subredditName && o.a.createElement("div", {
						className: A.a.membershipPaywallTitle
					}, s.fbt._("{communityName} Special Membership", [s.fbt._param("communityName", `r/${i.urlParams.subredditName}`)], {
						hk: "4vP4VY"
					}))), o.a.createElement("div", {
						className: A.a.actions
					}, this.props.joinOptimizationsLightboxHeaderEnabled && this.props.subreddit && o.a.createElement(v.a, {
						className: Object(c.a)(A.a.SubscribeButton, {
							[A.a.visible]: this.state.showSubscribeButton
						}),
						identifier: {
							name: this.props.subreddit.name,
							type: "subreddit"
						},
						onClick: this.handleSubscribeButtonClick,
						small: !0
					}), !this.props.hideCloseButton && o.a.createElement(G, {
						onClick: n || this.closeLightbox
					}))))
				}
			}
			const G = o.a.memo(e => o.a.createElement(C.t, {
				className: A.a.CloseButton,
				size: C.d.XS,
				onClick: e.onClick,
				priority: C.c.Plain,
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
			}));
			t.a = Object(O.c)(L(U))
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
				getComponent: () => Object(r.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
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
			const d = e => {
				let {
					children: t,
					className: n,
					...s
				} = e;
				return r.a.createElement("div", c({
					className: Object(o.a)(i.a.pillContainer, n)
				}, s), t)
			}
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
		"./src/reddit/components/Root/AdminPanelLoader.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/profile/index.ts"),
				c = n("./src/reddit/selectors/runTimeEnvVars.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const l = Object(s.a)({
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

			function u() {
				const e = Object(a.d)();
				return Object(r.useEffect)(() => {
					e(Object(i.a)())
				}, []), Object(a.e)(e => Object(c.b)(e) || Object(d.M)(e) || Object(d.L)(e)) ? o.a.createElement(l, null) : null
			}
		},
		"./src/reddit/components/Root/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1VP69d9lk-Wk9zokOaylL",
				containerExp: "KDkLHOpoLUZvoYQUBe9nF"
			}
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
		"./src/reddit/components/Survey/hooks.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return w
			})), n.d(t, "a", (function() {
				return M
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "c", (function() {
				return I
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
				m = n("./src/reddit/endpoints/survey/index.ts");
			var p = n("./src/reddit/helpers/survey/index.ts"),
				b = n("./src/reddit/models/Survey/index.ts"),
				h = n("./src/reddit/selectors/survey.ts"),
				g = n("./src/reddit/selectors/telemetry.ts");
			const f = (e, t) => {
					const n = Object(h.c)(e),
						s = Object(h.a)(e);
					if (n && s) return {
						experiment_name: "desktop_local_survey_demo",
						experiment_variant: `trigger_${s}`,
						experiment_version: -1
					};
					const r = g.q(e, t);
					return r ? {
						experiment_name: r.name,
						experiment_variant: r.variant,
						experiment_version: r.version
					} : {}
				},
				v = e => {
					switch (e) {
						case b.a.CES:
							return "ces";
						case b.a.CSAT:
							return "csat";
						case b.a.NPS:
							return "nps";
						case b.a.MULTI_CHOICE:
							return "multi_choice"
					}
				},
				O = (e, t) => n => ({
					source: "survey",
					action: t,
					noun: "intro",
					...g.o(n),
					survey: f(n, e)
				}),
				y = e => {
					let {
						action: t,
						experimentName: n,
						question: s,
						score: r,
						questionId: o,
						questionParentId: a,
						type: i
					} = e;
					return e => ({
						source: "survey",
						action: t,
						noun: "rating",
						...g.o(e),
						survey: {
							type: v(i),
							min: i === b.a.NPS ? 0 : 1,
							max: i === b.a.NPS ? 10 : 7,
							question: s,
							question_id: o,
							parent_question_id: a,
							score: r,
							...f(e, n)
						}
					})
				},
				C = e => {
					let {
						action: t,
						experimentName: n,
						question: s,
						text: r,
						type: o,
						questionId: a,
						questionParentId: i
					} = e;
					return e => ({
						source: "survey",
						action: t,
						noun: "freeform_text",
						...g.o(e),
						survey: {
							question: s,
							type: v(o),
							text: r,
							question_id: a,
							parent_question_id: i,
							...f(e, n)
						}
					})
				},
				x = e => {
					let {
						action: t,
						experimentName: n,
						question: s,
						score: r,
						type: o,
						questionId: a,
						questionParentId: i,
						max: c,
						text: d
					} = e;
					return e => ({
						source: "survey",
						action: t,
						noun: "multi_choice",
						...g.o(e),
						survey: {
							type: v(o),
							min: 0,
							max: c,
							text: d,
							question: s,
							score: r,
							question_id: a,
							parent_question_id: i,
							...f(e, n)
						}
					})
				};
			var E = n("./src/reddit/hooks/useGqlContext.ts"),
				P = n("./src/reddit/hooks/useTracking.ts"),
				j = n("./src/reddit/models/Toast/index.ts"),
				_ = n("./src/reddit/selectors/experiments/index.ts"),
				S = n("./src/reddit/selectors/experiments/survey.ts"),
				k = n("./src/reddit/selectors/user.ts");
			const w = () => {
					const e = Object(d.d)(),
						t = Object(E.a)(),
						[n, s] = Object(c.useState)(null),
						r = Object(P.a)(),
						a = Object(d.e)(k.i),
						i = Object(d.e)(k.Db),
						u = Object(d.e)(_.a, o.a),
						b = Object(d.e)(h.c),
						g = Object(d.e)(h.a),
						f = Object(d.e)(h.b),
						v = Object(d.e)(h.d),
						y = Object(d.e)(S.g),
						C = Object(c.useMemo)(() => {
							const e = Object(p.g)(y),
								t = {};
							for (const n of e) t[n] = u[n];
							return t
						}, [u, y]),
						x = Object(c.useCallback)(e => {
							setTimeout(() => s(e), 500)
						}, []),
						j = Object(c.useCallback)(async e => {
							if (b) {
								const t = Object(p.f)({
									triggerName: e,
									isDemoEnabled: b,
									activeDemoTrigger: g,
									demoTriggerThreshold: f
								});
								return void(t && s(t))
							}
							const r = Object(p.e)({
								triggerName: e,
								surveyExperimentVariants: C,
								samplingId: a || i,
								isSampleFactorEnabled: v,
								isSurveyServiceMigrationEnabled: y
							});
							if (!r || r.experimentName === (null == n ? void 0 : n.experimentName)) return;
							const o = C[r.experimentName];
							(null == o ? void 0 : o.variant) && r.variants.find(e => e.variantName === o.variant) && (y ? await (async (e, t, n) => {
								const s = await Object(m.b)(t());
								if (s.ok) {
									const t = s.body,
										{
											activeSurveys: r
										} = t.data.customerSurveyConfig,
										o = r.find(t => t.experimentName === e.experimentName);
									o && n({
										...e,
										steps: o.steps
									})
								}
							})(r, t, x) : x(r))
						}, [n, C, a, i, v, b, g, f, y, x, t]);
					return Object(c.useEffect)(() => {
						const e = Object(p.c)(),
							t = e.subscribe(j);
						return () => e.unsubscribe(t)
					}, [j]), Object(c.useEffect)(() => {
						if (!n) return;
						const t = Date.now();
						Object(p.i)(n, t), e(Object(l.I)({
							surveyLastSeenTime: t
						}, !1)), r(O(n.experimentName, "display"))
					}, [n, e, r]), {
						activeSurvey: n,
						setActiveSurvey: s
					}
				},
				M = e => {
					let {
						activeStepNum: t,
						activeSurvey: n,
						isFollowUp: r,
						textResponse: o,
						setTextResponse: a,
						setIsSurveyDismissed: i,
						uiStep: d
					} = e;
					(e => {
						let {
							isFollowUp: t,
							textResponse: n
						} = e;
						const r = Object(c.useCallback)(e => {
							if (t && n.length) return e.preventDefault(), e.returnValue = "sure?", s.fbt._("Are you sure?", null, {
								hk: "1B7lB5"
							})
						}, [t, n]);
						Object(c.useEffect)(() => (window.addEventListener("beforeunload", r), () => window.removeEventListener("beforeunload", r)), [r])
					})({
						isFollowUp: r,
						textResponse: o
					});
					const [l, u] = Object(c.useState)(!1), m = Object(P.a)(), p = n.experimentName, h = n.steps[t], g = null == h ? void 0 : h.type, f = null == h ? void 0 : h.question, v = Object(c.useCallback)(() => {
						t >= 0 ? u(!0) : (i(!0), m(O(n.experimentName, "dismiss")))
					}, [t, n, m, i]), E = Object(c.useCallback)(() => {
						a(""), i(!0);
						const e = {
							question: f,
							experimentName: p,
							type: g,
							action: "dismiss",
							questionId: d.toString(),
							questionParentId: h.type === b.a.MULTI_CHOICE && r ? `${d-1}` : null
						};
						m(r ? C(e) : h.type === b.a.MULTI_CHOICE ? x(e) : y(e))
					}, [p, r, f, h, m, i, a, g, d]);
					return {
						isLeavingModalShowing: l,
						onClose: v,
						onLeaveCancel: Object(c.useCallback)(() => u(!1), []),
						onLeaveConfirm: E
					}
				},
				N = e => {
					let {
						activeSurvey: t,
						selectedNumber: n,
						setIsSurveyDismissed: s,
						setSelectedNumber: r,
						setTextResponse: o,
						textResponse: a
					} = e;
					const [d, l] = Object(c.useState)(-1), [u, m] = Object(c.useState)(0), [p, h] = Object(c.useState)(!1), g = Object(P.a)(), [f, v] = Object(c.useState)(""), [E, j] = Object(c.useState)([]), _ = Object(c.useCallback)(() => {
						var e, c;
						const E = t.experimentName,
							P = t.steps[d],
							_ = null == P ? void 0 : P.type,
							S = null == P ? void 0 : P.question,
							k = null == P ? void 0 : P.followUpQuestion,
							w = t.steps[d + 1],
							M = null == w ? void 0 : w.type,
							N = null == w ? void 0 : w.question;
						if (m(u + 1), w && w.questionOptions && j(i()(w.questionOptions)), -1 === d) {
							g(O(E, "agree")), l(0);
							const e = {
								question: N,
								type: M,
								action: "display",
								experimentName: E,
								questionId: `${u+1}`.toString(),
								questionParentId: null
							};
							return void g(M === b.a.MULTI_CHOICE ? x({
								text: f,
								...e
							}) : y(e))
						}
						const I = {
							experimentName: E,
							type: _,
							action: "submit",
							questionId: u.toString(),
							questionParentId: P.type === b.a.MULTI_CHOICE && p ? `${u-1}` : null
						};
						if (g(p ? C({
								text: a,
								question: k,
								...I
							}) : _ === b.a.MULTI_CHOICE ? x({
								question: S,
								max: null === (e = P.questionOptions) || void 0 === e ? void 0 : e.length,
								score: null === (c = P.questionOptions) || void 0 === c ? void 0 : c.findIndex(e => e === f),
								text: f,
								...I
							}) : y({
								question: S,
								score: n && n + (_ === b.a.NPS ? 0 : 1),
								...I
							})), r(void 0), o(""), v(""), p || !k)
							if (h(!1), d + 1 >= t.steps.length) s(!0);
							else {
								l(d + 1);
								const e = {
									experimentName: E,
									action: "display",
									type: M,
									question: N,
									questionId: (u + 1).toString()
								};
								g(M === b.a.MULTI_CHOICE ? x({
									text: f,
									...e
								}) : y(e))
							}
						else h(!0), g(C({
							experimentName: E,
							action: "display",
							type: _,
							question: k,
							questionId: `${u+1}`,
							questionParentId: u.toString()
						}))
					}, [f, v, d, t, p, a, n, g, s, r, o, u]);
					return {
						questionOptions: E,
						selectedOption: f,
						setSelectedOption: v,
						activeStepNum: d,
						isFollowUp: p,
						onStepComplete: _,
						uiStep: u,
						setActiveStepNum: l,
						setUIStep: m,
						setIsFollowUp: h
					}
				},
				I = e => {
					let {
						isSurveyDismissed: t,
						setIsSurveyDismissed: n,
						setActiveStepNum: r,
						setActiveSurvey: o,
						setUIStep: a,
						setIsFollowUp: i,
						shouldMount: l,
						uiStep: m
					} = e;
					const p = Object(d.d)();
					Object(c.useEffect)(() => {
						t && !l && setTimeout(() => {
							r(-1), a(0), i(!1), o(null), m > 1 && p(Object(u.f)({
								text: s.fbt._("Thanks for your feedback!", null, {
									hk: "11jNYw"
								}),
								kind: j.b.SuccessCommunityGreen
							}))
						}, 500)
					}, [p, t, l, m, n, r, o, a, i])
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
				return C
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
				g = n("./src/lib/CSSVariableProvider/index.tsx"),
				f = n("./src/lib/isAdHocMultireddit/index.ts");
			const v = (e, t) => t.forceRedditTheme ? void 0 : void 0 !== t.subredditName ? t.subredditName : Object(l.p)(e, t);
			class O extends o.a.Component {
				render() {
					const {
						children: e,
						isRootOrUniqueClassName: t,
						theme: n
					} = this.props;
					return o.a.createElement(g.e, {
						theme: n,
						isRootOrUniqueClassName: t
					}, e)
				}
			}
			const y = Object(a.b)(() => Object(i.a)(e => e.themes.current, e => !!Object(p.i)(e), e => {
				if (Object(p.i)(e)) return e.structuredStyles.draft
			}, (e, t) => {
				if (Object(p.i)(e)) return Object(p.f)(e, t)
			}, v, Object(c.a)((e, t) => {
				if (Object(p.i)(e) || Object(h.qb)(e)) return;
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.D)(e, n);
				if (!s) return;
				if (Object(h.pb)(e, {
						subredditId: s
					})) return;
				const r = e.structuredStyles.models[s];
				return r || void 0
			}), (e, t) => {
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.u)(e, {
					subredditName: n
				});
				return s ? s.emojisCustomSize : void 0
			}, (e, t) => {
				if (t.forceDayMode) return !1;
				return Object(h.Fb)(e).nightmode
			}, (e, t) => {
				const n = Object(h.Fb)(e);
				if (Object(h.P)(e)) return !n.hideNSFW;
				const s = v(e, t);
				if (s) {
					const t = Object(b.x)(e, {
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
					h = o && o.length && !Object(f.a)(o) ? `subredditvars-r-${o.toLocaleLowerCase()}` : g.c;
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
			t.b = y;
			const C = Object(d.u)()(y)
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
			const g = Object(i.c)({
					currentUser: d.k,
					isNightMode: d.cb,
					isPresenceUserPrefEnabled: d.U,
					shouldHideNSFW: d.F
				}),
				f = Object(a.b)(g);
			t.a = f(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: r,
					wrapperClassName: a,
					...i
				} = e, d = Object(c.b)(null == t ? void 0 : t.accountIcon);
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
		"./src/reddit/endpoints/gold/productCatalog/old.index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "a", (function() {
				return x
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
					frequency: e.frequency,
					mobileId: e.mobile_id,
					paypalButtonId: e.paypal_button_id,
					pennies: e.pennies,
					periodicalCoins: e.periodical_coins,
					signupBonusCoins: e.signup_bonus_coins
				})),
				g = e => e ? {
					ctaText: e.cta_text,
					dropdownHeaderText: e.dropdown_banner_text,
					dropdownHeaderBackgroundAsset: e.dropdown_banner_image_url,
					endsAt: e.ends_at,
					heroImageUrl: e.hero_image_url,
					heroSubtext: e.hero_subtext,
					heroText: e.hero_text
				} : null,
				f = async e => {
					let {
						context: t,
						correlationId: n,
						shouldUseCurrentOrigin: o
					} = e;
					const i = "/api/v2/gold/purchase_package_details",
						c = o && "undefined" != typeof window ? `${window.location.origin}${i}` : `${t.apiUrl}${i}`,
						m = Object(l.a)(c);
					return Object(r.a)(Object(a.a)(t, [d.a]), {
						method: s.jb.GET,
						endpoint: m,
						data: {
							correlation_id: n
						}
					}).then(u.c).then(v)
				};

			function v(e) {
				if (!e.ok) return e;
				const {
					active_sale: t,
					coin_packages: n,
					deals: s,
					premium_packages: r
				} = e.body, o = {
					activeSaleConfig: g(t),
					coinPackages: p(n),
					dealCoinPackages: b(s),
					premiumPackages: h(r)
				};
				return {
					...e,
					body: o
				}
			}
			const O = async e => {
				let {
					context: t,
					awardId: n,
					correlationId: o
				} = e;
				const i = `${t.apiUrl}/api/v2/gold/recommended_coin_package_details`,
					c = Object(l.a)(i);
				return Object(r.a)(Object(a.a)(t, [d.a]), {
					method: s.jb.GET,
					endpoint: c,
					data: {
						correlation_id: o,
						intended_award: n
					}
				}).then(u.c).then(y)
			};

			function y(e) {
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
			const C = e => Object(o.a)(e, {
					...c
				}),
				x = e => Object(o.a)(e, {
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
				return g
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "b", (function() {
				return y
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
				p = async e => {
					let {
						coins: t,
						context: n,
						correlationId: o,
						offerContext: i,
						pennies: l,
						rememberCard: u,
						token: p,
						savedCardId: b
					} = e;
					const h = {
							token: p ? p.id : void 0,
							coins: t,
							offer_context: i,
							pennies: l,
							remember_card: u,
							card_id: b,
							correlation_id: o
						},
						g = `${n.apiUrl}/api/v2/gold/stripe/buy_coins`,
						f = Object(d.a)(g);
					return Object(r.a)(Object(a.a)(n, [c.a]), {
						method: s.jb.POST,
						endpoint: f,
						data: h
					}).then(m)
				}, b = async e => {
					let {
						coins: t,
						context: n,
						correlationId: o,
						gildParams: i,
						isOldReddit: l,
						offerContext: u,
						pennies: p,
						rememberCard: b,
						thingId: h,
						token: g,
						savedCardId: f
					} = e;
					const {
						gildType: v,
						isAnonymous: O,
						message: y
					} = i, C = {
						token: g ? g.id : void 0,
						coins: t,
						offer_context: u,
						pennies: p,
						thing_id: h,
						gild_type: v,
						message: y ? y.trim() : "",
						is_anonymous: O,
						remember_card: b,
						card_id: f,
						correlation_id: o
					}, x = `${n.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, E = l ? x : Object(d.a)(x);
					return Object(r.a)(Object(a.a)(n, [c.a]), {
						method: s.jb.POST,
						endpoint: E,
						data: C
					}).then(m)
				}, h = async e => {
					let {
						context: t,
						correlationId: n,
						gildParams: o,
						isOldReddit: i,
						pennies: l,
						rememberCard: u,
						thingId: p,
						token: b,
						savedCardId: h
					} = e;
					const {
						gildType: g,
						isAnonymous: f,
						message: v
					} = o, O = {
						token: b ? b.id : void 0,
						thing_id: p,
						award_id: g,
						message: v ? v.trim() : "",
						is_anonymous: f,
						pennies: l,
						remember_card: u,
						card_id: h,
						correlation_id: n
					}, y = `${t.apiUrl}/api/v2/gold/stripe/buy_award`, C = i ? y : Object(d.a)(y);
					return Object(r.a)(Object(a.a)(t, [c.a]), {
						method: s.jb.POST,
						endpoint: C,
						data: O
					}).then(m)
				}, g = async e => {
					let {
						context: t,
						correlationId: n,
						pennies: o,
						token: i
					} = e;
					const l = {
							token: i.id,
							pennies: o,
							correlation_id: n
						},
						u = `${t.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						p = Object(d.a)(u);
					return Object(r.a)(Object(a.a)(t, [c.a]), {
						method: s.jb.POST,
						endpoint: p,
						data: l
					}).then(m)
				}, f = "paymentInfoUpdated", v = async e => {
					const {
						origin: t
					} = window.location, n = `${t}/settings/premium`, s = new URLSearchParams({
						[f]: "true"
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
				}, y = async e => Object(r.a)(Object(a.a)(e, [c.a]), {
					method: s.jb.GET,
					endpoint: `${e.apiUrl}/api/v2/gold/stripe/creditcards`
				}).then(e => e.ok ? {
					...e
				} : {
					...e,
					error: Object(u.a)(e)
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
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function r(e) {
				const {
					subreddit: t,
					amount: n,
					memo: s,
					cta: r
				} = e;
				return t && n && s && r ? {
					subreddit: t,
					amount: n,
					memo: s,
					cta: r
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/helpers/dom/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/lodash/map.js"),
				r = n.n(s),
				o = n("./src/lib/FocusTrap/index.ts");
			const a = e => "INPUT" === e.tagName.toUpperCase() || "TEXTAREA" === e.tagName.toUpperCase() || "DIV" === e.tagName.toUpperCase() && e.isContentEditable,
				i = e => {
					let t = e;
					do {
						if (a(t)) return !0
					} while (t = t.parentElement);
					return !1
				},
				c = () => {
					const e = document.getSelection();
					return !!e && (e.rangeCount > 0 && e.getRangeAt(0).toString().length > 0)
				},
				d = () => c() ? (() => {
					const e = document.getSelection();
					if (!e) return [];
					const t = e.getRangeAt(0).cloneContents().childNodes;
					return r()(t, e => e.textContent || "")
				})() : null,
				l = (e, t) => {
					const n = document.createRange();
					return n.selectNode(t), e.compareBoundaryPoints(Range.END_TO_START, n) < 0 && e.compareBoundaryPoints(Range.START_TO_END, n) > 0
				},
				u = e => {
					const t = window.getSelection();
					if (1 !== t.rangeCount) return;
					const n = t.getRangeAt(0);
					if (!l(n, e)) return;
					const {
						startContainer: s,
						startOffset: r,
						endContainer: o,
						endOffset: a
					} = n, i = document.createRange();
					i.selectNode(e);
					let c = !0;
					if (-1 === i.compareBoundaryPoints(Range.START_TO_START, n) && (i.setStart(s, r), c = !1), 1 === i.compareBoundaryPoints(Range.END_TO_END, n) && (i.setEnd(o, a), c = !1), c) return [e];
					const d = document.createElement("div");
					return d.appendChild(i.cloneContents()), [...d.childNodes]
				},
				m = (e, t, n) => {
					let s = e;
					for (; s && (!n || !n(s));) {
						if (s && t(s)) return s;
						s = s.parentElement
					}
				},
				p = e => e && e.parentElement && m(e.parentElement, e => "static" !== window.getComputedStyle(e).getPropertyValue("position")),
				b = e => {
					e.querySelectorAll(o.a).forEach(e => {
						e.tabIndex = -1
					})
				}
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
				return Object(i.R)(e, {}) === o.g.Large && !Object(d.O)(e) && !Object(c.d)(e)
			}

			function u(e) {
				return Object(a.c)(e, {
					expEventOverride: !1,
					experimentEligibilitySelector: l,
					experimentName: r.nd
				})
			}

			function m(e) {
				switch (e) {
					case r.od.Enabled:
						return 18;
					default:
						return
				}
			}! function(e) {
				e.Enabled = "frontpage-card-posts-3.enabled", e.NoBucket = "frontpage-card-posts-3.no_bucket"
			}(s || (s = {}));
			const p = e => {
				switch (e) {
					case r.od.Enabled:
						return s.Enabled;
					default:
						return s.NoBucket
				}
			}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			t.a = () => ({
				type: r.I.SERVER_ERROR,
				fields: [{
					field: "",
					msg: s.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
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
				let r, o, a, i, c, d, l, u, m, p, b;
				return e ? e.quarantinedSubreddit ? (o = s.a.QuarantinedSubreddit, i = e.quarantineMessage, c = e.quarantineMessageHtml, d = e.quarantineRequiresEmail) : e.privateSubreddit ? (o = s.a.PrivateSubreddit, a = e.subredditDescription, l = e.isContributorRequestsDisabled, u = e.isContributorRequestTimestamp) : e.goldSubreddit ? o = s.a.GoldSubreddit : e.subredditBanned ? (o = s.a.SubredditBanned, r = e.subredditBanMessage) : e.subredditDoesNotExist ? o = s.a.SubredditDoesNotExist : e.subredditBlockedForLegalReason ? o = s.a.SubredditBlockedForLegalReason : e.interstitialWarningMessage && (o = s.a.GatedSubreddit, m = e.interstitialWarningMessage, p = e.interstitialWarningMessageHtml, b = e.interstitialWarningMessageRTJson) : t && (o = s.a.Nsfw), o && n ? {
					banMessage: r,
					contentGateType: o,
					isContributorRequestsDisabled: l,
					isContributorRequestTimestamp: u,
					subredditDescription: a,
					subredditName: n,
					quarantineMessage: i,
					quarantineMessageHtml: c,
					quarantineRequiresEmail: d,
					interstitialWarningMessage: m,
					interstitialWarningMessageHtml: p,
					interstitialWarningMessageRTJson: b
				} : void 0
			}
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
						screen: Object(o.Z)(e),
						subreddit: Object(o.hb)(e)
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
		"./src/reddit/helpers/trackers/banners.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			}));
			const s = () => e => ({
					source: "banner",
					noun: "update_old_browser",
					action: "view",
					banner: {
						id: "update_old_browser"
					}
				}),
				r = () => e => ({
					source: "banner",
					noun: "old_browser_r2",
					action: "click",
					banner: {
						id: "update_old_browser"
					}
				}),
				o = () => e => ({
					source: "banner",
					action: "view",
					noun: "lang_site"
				}),
				a = () => e => ({
					source: "banner",
					action: "click",
					noun: "lang_site"
				}),
				i = () => e => ({
					source: "banner",
					action: "dismiss",
					noun: "lang_site"
				})
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return u
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "g", (function() {
				return v
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/models/PostDraft/index.ts"),
				a = n("./src/reddit/selectors/comments.ts"),
				i = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/index.ts");
			const l = e => {
					const t = Object(i.o)(e);
					return {
						source: "comment_composer",
						action: s.c.CLICK,
						...Object(c.o)(e),
						screen: Object(c.Z)(e),
						subreddit: Object(c.hb)(e),
						post: t ? Object(c.I)(e, t) : null,
						profile: Object(c.R)(e),
						correlationId: Object(r.c)(r.a.CommentComposer)
					}
				},
				u = async (e, t, s, r) => {
					const o = {
							commentId: r,
							commentsPageKey: s
						},
						i = r && Object(a.j)(e, o) || 0,
						{
							getFlairData: u
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(d.a)({
						noun: "comment",
						...l(e),
						comment: r ? Object(c.i)(e, r) : null,
						listing: Object(c.z)(e, void 0, {
							depth: i
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: u(e)
					})
				}, m = (e, t, n, s) => {
					const r = l(e);
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
				}, p = e => Object(d.a)({
					noun: "cancel",
					...l(e)
				}), b = (e, t) => {
					t === o.c.replyToPost && Object(d.a)({
						noun: "input",
						...l(e)
					})
				}, h = (e, t) => Object(d.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(c.o)(t),
					screen: Object(c.Z)(t),
					subreddit: Object(c.hb)(t),
					post: Object(c.I)(t, e)
				}), g = e => Object(d.a)({
					noun: "edit",
					...l(e)
				}), f = e => Object(d.a)({
					noun: "save_edit",
					...l(e)
				}), v = (e, t) => n => {
					const s = "image_upload" === e || "video_upload" === e;
					return {
						...l(n),
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
				i = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return {
						...Object(r.h)(e, t),
						correlationId: Object(s.e)(s.a.GoldPayment, !1),
						profile: o.R(e),
						subreddit: o.hb(e)
					}
				},
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
		"./src/reddit/helpers/trackers/onboarding.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "q", (function() {
				return u
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "p", (function() {
				return p
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "m", (function() {
				return C
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "u", (function() {
				return P
			})), n.d(t, "r", (function() {
				return j
			})), n.d(t, "t", (function() {
				return _
			})), n.d(t, "s", (function() {
				return S
			})), n.d(t, "l", (function() {
				return k
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = [],
				a = "onboarding";
			var i;
			! function(e) {
				e.CATEGORY = "category", e.CREATE_ACCOUNT_SCREEN_DROPDOWN = "create_account_screen_dropdown", e.EXIT = "exit", e.GENDER = "gender", e.ONBOARDING_COMMUNITY_RECOMMENDATIONS = "onboarding_community_recommendations", e.ONBOARDING_GENDER_COLLECTION = "onboarding_gender_collection", e.ONBOARDING_INTEREST = "onboarding_interest", e.SUB_CATEGORY = "sub_category", e.SUBREDDIT = "subreddit", e.TOPIC_PREVIEW = "topic_preview", e.VIEW_MORE = "view_more"
			}(i || (i = {}));
			const c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
					return t => ({
						...Object(r.o)(t),
						action: s.c.CLICK,
						noun: i.EXIT,
						onboarding: {
							processNotes: "exited",
							numberSubredditsSelected: e.length,
							subredditsSelected: e
						},
						source: a
					})
				},
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
				g = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_INTEREST
				}),
				f = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				v = () => e => ({
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
				y = () => e => ({
					...Object(r.o)(e),
					source: a,
					action: s.c.SELECT,
					noun: i.GENDER
				}),
				C = (e, t, n, o) => c => ({
					...Object(r.o)(c),
					source: a,
					action: e ? s.c.SELECT : s.c.DESELECT,
					actionInfo: {
						...Object(r.d)(c),
						reason: o
					},
					noun: t ? i.CATEGORY : i.SUB_CATEGORY,
					onboarding: {
						categoryName: n
					}
				}),
				x = (e, t, n, o) => c => ({
					...Object(r.o)(c),
					source: a,
					action: e ? s.c.SELECT : s.c.DESELECT,
					actionInfo: {
						...Object(r.d)(c),
						reason: o
					},
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
				}),
				P = () => e => ({
					...Object(r.o)(e),
					source: "topic_chaining_prompt",
					action: s.c.VIEW,
					noun: i.TOPIC_PREVIEW
				}),
				j = () => e => ({
					...Object(r.o)(e),
					source: "topic_chaining_prompt",
					action: s.c.CLICK,
					noun: i.TOPIC_PREVIEW
				}),
				_ = e => t => ({
					...Object(r.o)(t),
					source: "topic_chaining_prompt",
					action: s.c.SELECT,
					noun: i.CATEGORY,
					onboarding: {
						categoryName: e
					}
				}),
				S = () => e => ({
					...Object(r.o)(e),
					source: "topic_chaining_prompt",
					action: s.c.DISMISS,
					noun: i.TOPIC_PREVIEW
				}),
				k = (e, t) => n => ({
					...Object(r.o)(n),
					source: a,
					action: s.c.VIEW,
					noun: e ? i.CATEGORY : i.SUB_CATEGORY,
					onboarding: {
						categoryName: t
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
				return g
			})), n.d(t, "r", (function() {
				return f
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "u", (function() {
				return C
			})), n.d(t, "t", (function() {
				return x
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "c", (function() {
				return S
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
					comment: s.i(n, t)
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
				g = e => o("p_previous", e),
				f = e => o("s_save", e),
				v = e => a("s_save", e),
				O = e => o("h_hide", e),
				y = e => o("x_expando", e),
				C = e => o("a_upvote", e),
				x = e => a("a_upvote", e),
				E = e => o("z_downvote", e),
				P = e => a("z_downvote", e),
				j = r("c_create_post"),
				_ = e => o("l_go_to_link", e),
				S = e => a("r_comment", e);
			r("q_navigation")
		},
		"./src/reddit/helpers/trackers/user.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return i
			})), n.d(t, "i", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "j", (function() {
				return g
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/selectors/telemetry.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const a = e => ({
					screen: r.Z(e),
					profile: r.R(e),
					subreddit: r.hb(e)
				}),
				i = e => t => ({
					source: "user_dropdown",
					action: "click",
					noun: e ? "night_mode_off" : "night_mode_on",
					...a(t)
				}),
				c = e => t => ({
					source: "nav",
					action: "click",
					actionInfo: {
						pageType: t.platform.currentPage ? r.v(t.platform.currentPage) : void 0,
						settingValue: e ? "online" : "hidden"
					},
					noun: "online_presence_toggle",
					...a(t)
				}),
				d = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "predictions",
					...a(e)
				}),
				l = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "premium",
					correlationId: Object(s.c)(s.a.GoldPayment),
					...a(e)
				}),
				u = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "powerups",
					correlationId: Object(s.e)(s.a.PowerupsFlow, !1),
					...a(e)
				}),
				m = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "advertise",
					...a(e)
				}),
				p = () => e => ({
					source: "nav",
					action: "click",
					noun: "advertise",
					...a(e)
				}),
				b = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "coins",
					correlationId: Object(s.c)(s.a.GoldPayment),
					...a(e)
				}),
				h = e => t => ({
					source: "profile",
					action: "click",
					noun: "block_user",
					targetUser: {
						id: Object(o.yb)(t, {
							userName: e
						}).id
					},
					...r.o(t)
				}),
				g = e => t => ({
					source: "profile",
					action: "click",
					noun: "unblock_user",
					targetUser: {
						id: Object(o.yb)(t, {
							userName: e
						}).id
					},
					...r.o(t)
				})
		},
		"./src/reddit/helpers/wiki/makeWikiPath.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/constants/wiki.ts");
			t.a = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = "/wiki";
				const r = e.countryCode ? `/${e.countryCode}` : "",
					o = e.languageCode ? `/${e.languageCode}` : "";
				return e.subredditName && (n = t ? `${r}${o}/r/${e.subredditName}/about/wiki` : `${r}${o}/r/${e.subredditName}/wiki`, e.wikiSubRoute && (n += `/${e.wikiSubRoute}`)), e.wikiPageName ? n += `/${e.wikiPageName.toLowerCase()}` : e.wikiSubRoute || (n += `/${s.i}`), n
			}
		},
		"./src/reddit/hooks/useGqlContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n("./src/reddit/contexts/ApiContext.tsx");

			function o() {
				const {
					gqlContext: e
				} = Object(s.useContext)(r.a);
				return e
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
			t.a = e => {
				let {
					className: t,
					...n
				} = e;
				return r.a.createElement("svg", c({
					xmlns: "http://www.w3.org/2000/svg",
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					className: Object(o.a)(i.a.checkbox, t)
				}, n), r.a.createElement("path", {
					fill: "inherit",
					d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
				}))
			}
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
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
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
				g = n("./src/reddit/helpers/name/index.ts");
			const f = /^u_[\w-]+$/;
			var v = n("./src/reddit/selectors/user.ts");
			const O = (e, t) => async (n, s) => {
				var r;
				const o = s();
				if (function(e) {
						return f.test(Object(g.g)(e))
					}(t)) {
					const e = (null === (r = Object(v.k)(o)) || void 0 === r ? void 0 : r.displayText) || "";
					if (function(e, t) {
							return Object(g.g)(e) === Object(g.g)(t)
						}(t, function(e) {
							return `u_${Object(g.g)(e)}`
						}(e))) return
				} else if (Object(h.a)(t)) return;
				n((e => ({
					payload: e,
					type: b.f
				}))(e))
			}, y = Object(p.a)(b.e), C = e => ({
				payload: {
					subreddits: e
				},
				type: b.b
			}), x = e => ({
				payload: e,
				type: b.a
			});
			var E = n("./node_modules/redux-thunk/es/index.js"),
				P = n("./node_modules/request-idle-callback/index.js"),
				j = n("./src/lib/browser/isIncognito.ts"),
				_ = n("./src/lib/constants/index.ts"),
				S = n("./src/lib/extractQueryParams/index.ts"),
				k = n("./src/lib/filterQueryParams/index.ts"),
				w = n("./src/lib/getParsedUserAgent/index.ts"),
				M = n("./src/lib/initializeClient/index.tsx"),
				N = n("./src/lib/loadableAction/index.ts"),
				I = n("./src/lib/matchRoute/index.ts"),
				T = n("./src/lib/performance.js"),
				A = n("./src/lib/reCaptchaEnterprise/index.ts"),
				R = n("./src/lib/safeJSONParse/index.ts"),
				L = n("./src/lib/serviceWorker/index.ts"),
				D = n("./src/reduxMiddleware/apiContext.ts"),
				F = n("./src/reduxMiddleware/gqlContext.ts"),
				U = n("./src/telemetry/index.ts"),
				G = n("./src/telemetry/helpers/sendEvent.ts"),
				B = n("./src/telemetry/models/Event.ts"),
				q = n("./src/telemetry/models/Timer.ts"),
				H = n("./src/reddit/actions/apiRequestHeaders.ts"),
				W = n("./src/reddit/actions/chat/toggle.ts"),
				V = n("./src/reddit/actions/comment/index.ts"),
				Q = n("./src/reddit/actions/emailCollection/index.ts"),
				K = n("./src/reddit/actions/emailVerification.ts"),
				z = n("./src/reddit/actions/googleOneTap/index.ts"),
				J = n("./src/reddit/actions/media.ts"),
				Y = n("./src/lib/loadWithRetries/index.ts"),
				Z = () => Object(Y.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/notifications/index.ts"))),
				X = n("./src/reddit/actions/nps.ts");
			const $ = Object(N.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/onboarding/index.ts")).then(e => e.default));
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
				ue = (n("./assets/fonts/redesignIcon2020/redesignFont2020.css"), n("./assets/fonts/BentonSans/font.less"), n("./assets/fonts/IBMPlexSans/font.less"), n("./assets/fonts/NotoMono/font.less"), n("./assets/fonts/NotoSans/font.less"), n("./assets/fonts/RedditSans/font.less"), n("./assets/fonts/VCR/font.less"), n("./src/reddit/components/Crypto/componentStyles.less"), n("./src/reddit/components/Root/index.m.less")),
				me = n.n(ue),
				pe = n("./src/reddit/components/Root/AdminPanelLoader.tsx"),
				be = n("./src/lib/classNames/index.ts"),
				he = n("./src/reddit/components/AppRouter/index.tsx"),
				ge = n("./src/reddit/contexts/User/index.tsx");

			function fe(e) {
				return u.a.createElement(ge.b, null, e.children)
			}
			var ve = n("./src/reddit/components/ShortcutWrapper/Loader.ts"),
				Oe = n("./src/reddit/constants/shortcuts.ts"),
				ye = n("./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less"),
				Ce = n.n(ye);
			var xe = e => {
					let {
						children: t
					} = e;
					return u.a.createElement("div", {
						className: Ce.a.shortcutDiv,
						id: Oe.b,
						tabIndex: -1
					}, u.a.Children.only(t))
				},
				Ee = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Pe = n("./src/reddit/contexts/NavbarExp.ts"),
				je = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				_e = n("./src/reddit/components/Header/Sparse.tsx"),
				Se = n("./src/reddit/components/ThemeProvider/index.tsx"),
				ke = n("./src/reddit/contexts/InsideOverlay.tsx"),
				we = n("./src/reddit/controls/Button/index.tsx"),
				Me = n("./src/reddit/featureFlags/index.ts"),
				Ne = n("./src/reddit/icons/svgs/DizzySnoo/index.tsx"),
				Ie = n("./src/reddit/pages/InternalServerError/index.m.less"),
				Te = n.n(Ie);
			const {
				fbt: Ae
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Re = Object(le.c)({
				showError: Me.d.showVerboseErrors
			}), Le = Object(ce.b)(Re)(e => {
				const t = Object(l.useContext)(Pe.a);
				return u.a.createElement(ke.a.Provider, {
					value: !1
				}, u.a.createElement(Se.b, {
					subredditName: ""
				}, u.a.createElement("div", null, u.a.createElement(_e.a, {
					logoHref: "#",
					logoOnClick: () => window.location.reload(!0)
				}), u.a.createElement("div", {
					className: Te.a.container
				}, u.a.createElement("div", {
					className: Te.a.mainContent
				}, u.a.createElement(Ne.a, {
					className: Te.a.dizzySnoo
				}), u.a.createElement("h3", {
					className: Te.a.title
				}, Ae._("Sorry, for some reason reddit can't be reached.", null, {
					hk: "2yRKWG"
				})), u.a.createElement("div", {
					className: Te.a.subTitle
				}, Ae._("Give us a few minutes to fix the problem. Sorry!", null, {
					hk: "1c7Mg0"
				})), u.a.createElement(we.l, {
					onClick: () => window.location.reload(!0)
				}, Ae._("Reload Page", null, {
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
			var De = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts");

			function Fe() {
				return (Fe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Ue = Object(le.c)({
					isNavbarLikeMwebEnabled: De.a,
					theme: e => e.themes.current
				}),
				Ge = Object(ce.b)(Ue, {})(e => {
					let {
						children: t,
						theme: n,
						isNavbarLikeMwebEnabled: s
					} = e;
					const r = Object(je.a)({
						theme: n
					});
					return u.a.createElement(Pe.a.Provider, {
						value: s
					}, u.a.createElement("div", {
						className: Object(be.a)(me.a.container, {
							[me.a.containerExp]: s
						}),
						style: {
							"--background": r.body,
							"--canvas": r.canvas
						}
					}, t))
				});

			function Be(e) {
				if (e.ok) {
					const {
						RouterComponent: t,
						routes: n
					} = e;
					return u.a.createElement(Ee.a, null, u.a.createElement(Ge, null, u.a.createElement(fe, null, u.a.createElement(pe.a, null), u.a.createElement(ve.a, null), u.a.createElement(xe, null, u.a.createElement(t, null, u.a.createElement(de.d, {
						component: qe(n)
					}))))))
				}
				return u.a.createElement(Le, {
					error: e.error
				})
			}
			const qe = e => t => u.a.createElement(he.b, Fe({
				routes: e
			}, t));
			var He = n("./src/reddit/constants/localStorage.ts"),
				We = n("./node_modules/lodash/throttle.js"),
				Ve = n.n(We),
				Qe = n("./src/reddit/helpers/localStorage/index.ts");
			const Ke = 1e3;
			class ze extends u.a.Component {
				constructor() {
					super(...arguments), this.flush = Ve()(() => Object(Qe.Fb)(this.props.storageKey, this.props.value), Ke)
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
			ze.defaultProps = {
				enabled: !0,
				syncOnMount: !0
			};
			const Je = Object(le.a)(v.P, e => ({
				storageKey: He.b.LOCAL_PERSISTED_EXPERIMENTS_STORE,
				value: {},
				enabled: !e
			}));
			var Ye = Object(ce.b)(Je)(ze);
			var Ze = () => u.a.createElement(u.a.Fragment, null, u.a.createElement(Ye, null)),
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
							return (Object(bt.b)(s) || Object(v.M)(s)) && (e = !0, Object(G.e)(t)), s => r => {
								const o = s(r),
									a = n.getState();
								if (!Object(bt.b)(a)) {
									const n = Object(v.M)(a);
									e && !n ? (e = !1, Object(G.e)(void 0), t.setState([])) : n && !e && (t.setState([]), Object(G.e)(t), e = !0)
								}
								return o
							}
						}
					}
				} : () => ({
					broadcaster: Object(pt.a)([]),
					middleware: () => e => t => e(t)
				}),
				gt = n("./node_modules/lodash/debounce.js"),
				ft = n.n(gt),
				vt = n("./src/lib/domUtils/index.ts");
			const Ot = 30 * _.kb;
			let yt = Date.now();
			const Ct = () => {
					yt = Date.now()
				},
				xt = !!Object(vt.f)() && {
					passive: !0
				};
			window.addEventListener("click", Ct, !1), window.addEventListener("wheel", ft()(Ct, 250), xt), window.addEventListener("mousemove", ft()(Ct, 250), xt), window.addEventListener("keydown", ft()(Ct, 250), xt);
			var Et = e => {
					return document.addEventListener("visibilitychange", (function() {
						"visible" === document.visibilityState && document.hasFocus && Date.now() - yt >= Ot ? (e.dispatch(se.h()), Ct()) : Ct()
					})), e => t => e(t)
				},
				Pt = n("./node_modules/lodash/pick.js"),
				jt = n.n(Pt),
				_t = n("./src/reddit/actions/header.ts"),
				St = n("./src/reddit/actions/preferences.ts"),
				kt = n("./src/reddit/constants/preferences.ts"),
				wt = n("./src/reddit/helpers/cookies/index.ts");
			const Mt = new Set([St.g, St.i, oe.b, St.d, St.o, _t.d, _t.e, St.r]);
			var Nt = e => t => n => {
					const s = t(n);
					if (Mt.has(n.type)) {
						const t = e.getState().user,
							n = jt()(t.prefs, ["hamburgerTray", "globalTheme", "collapsedTraySections", "nightmode", "subscriptionsPinned", kt.b, kt.d, kt.e]);
						Object(wt.a)({
							prefs: n
						})
					}
					return s
				},
				It = n("./src/lib/fastdom/index.ts"),
				Tt = n("./src/reddit/actions/tabBadging.ts"),
				At = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				Rt = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Lt = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				Dt = n("./src/reddit/selectors/platform.ts");
			const Ft = new Set([302, 400, 401, 403, 404, 421, 429, 500, 502, 503, 504, 0, void 0, null]),
				Ut = e => {
					var t;
					const {
						currentPage: n
					} = e.platform, s = Object(Dt.r)(e), r = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.status, o = Ft.has(r), a = Object(Rt.l)(e, {
						pageLayer: n
					}), i = !(!a || !a.hideFromRobots), c = Gt(e), d = n && n.isRobotIndexable, l = s === _.Nb.COMMENTS || s === _.Nb.COLLECTION_COMMENTS, u = !(!n || !n.urlParams.partialCommentId), m = s === _.Nb.SEARCH_RESULTS || s === _.Nb.SUBREDDIT_LEADERBOARD || l && u;
					return i || o || c || (!1 === d || m) ? m ? "noindex" : "noindex,nofollow" : null
				},
				Gt = e => {
					var t;
					let n = !1;
					const s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams.subredditName;
					if (s) {
						const t = Object(v.f)(e, s);
						n = !!Object(Lt.a)(t, !1, s)
					}
					return n
				};
			var Bt = n("./src/reddit/models/NewStructuredStyles/index.ts");
			const qt = "theme-color",
				Ht = `meta[name="${qt}"]`;

			function Wt(e) {
				return e ? Bt.b.body : Bt.a.body
			}
			var Vt = "undefined" != typeof document ? e => t => n => {
					const s = t(n);
					if (n.type === ee.f) {
						const t = e.getState(),
							s = Object(v.O)(t),
							{
								meta: r
							} = n.payload;
						s ? ((e, t) => {
							let n = 0;
							n = Object(At.b)(e) ? Object(lt.i)(e) : Object(lt.j)(e), Object(Tt.c)(n, t)
						})(t, r.title) : It.a.write(() => {
							document.title = r.title, ((e, t) => {
								if (t.head) {
									let n = t.querySelector("meta[name='robots']");
									const s = Ut(e),
										{
											head: r
										} = t;
									s ? (n || ((n = t.createElement("meta")).name = "robots", r.appendChild(n)), n.content = s) : n && (n.remove ? n.remove() : n.parentNode ? n.parentNode.removeChild(n) : r.removeChild && r.removeChild(n))
								}
							})(t, document)
						})
					} else if (n.type === St.i) {
						! function(e) {
							It.a.write(() => {
								const t = document.head.querySelector(Ht);
								if (t) {
									const n = Object(v.cb)(e);
									t.content = Wt(n)
								}
							})
						}(e.getState())
					}
					return s
				} : ct,
				Qt = n("./src/reddit/helpers/survey/index.ts");
			var Kt = "undefined" != typeof document ? e => e => t => ((e => !!Object.keys(Qt.a).filter(t => t === e).length)(t.type) && Object(Qe.U)(Qt.a[t.type]), e(t)) : ct;
			const zt = 5 * _.kb;
			var Jt = e => {
					const t = Ve()(() => {
						const t = e.getState().user.session,
							n = new Date(t.expires),
							s = new Date;
						n.getTime() - s.getTime() > .2 * t.expiresIn * 1e3 || e.dispatch(se.g())
					}, zt);
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
				Yt = n("./src/reddit/singleton/tracing/index.ts");
			var Zt = e => e => t => {
					const n = () => e(t);
					return Yt.b.isEnabled ? Yt.b.recordLocalSpan(t.type, n) : e(t)
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
							a = Object(pn.D)(s, r) || "",
							i = (s.subreddits.about[a] || {}).advertiserCategory;
						o.trigger("pageview", {
							...jt()(n.payload.location, "pathname", "search", "hash"),
							subreddit: r,
							advertiserCategory: i
						});
						const c = s.platform.currentPage && s.platform.currentPage.routeMatch;
						if (c) {
							const e = Object(bn.b)(c, s, Object(cn.a)(s));
							if (e && U.c.has(e)) {
								const t = U.c.end(e);
								!Object(Dt.i)(s) && Object(dn.b)(et.b.IsOverlay) || Object(mn.k)(c, s, q.TimerType.UserCancelled, t)
							}
						}
						const d = n.payload.routeMatch;
						if (!d) return t(n);
						const l = Object(cn.a)(s, d),
							u = Object(bn.b)(d, s, l);
						if (!u) return t(n);
						U.c.start(u)
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
						case rn.e: {
							const {
								key: e
							} = n.payload;
							s(e);
							break
						}
					}
					return r
				},
				gn = n("./src/reddit/helpers/chooseVariant/index.ts"),
				fn = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				vn = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				On = n("./src/reddit/helpers/trackers/global.ts");
			let yn = null;
			const Cn = () => {
				yn && window.clearTimeout(yn), yn = null
			};
			var xn = e => {
					yn = window.setTimeout(() => {
						Cn(), Object(U.a)(Object(On.d)(3e4)(e()))
					}, 3e4), window.addEventListener("beforeunload", Cn)
				},
				En = n("./src/reddit/helpers/onBeforeRequestFactory/index.ts"),
				Pn = n("./src/reddit/actions/connection/constants.ts");
			const jn = Object(p.a)(Pn.b),
				_n = Object(p.a)(Pn.a),
				Sn = Object(p.a)(Pn.c);
			var kn = n("./src/reddit/actions/meta.ts"),
				wn = n("./src/reddit/selectors/telemetry.ts");
			const Mn = (e, t) => Object(U.a)({
					...wn.o(e),
					source: "store",
					action: "install",
					noun: "pwa",
					actionInfo: Object(wn.d)(e, {
						type: t
					})
				}),
				Nn = "(display-mode: minimal-ui)";
			const In = 3 * _.Sb;

			function Tn(e) {
				if (!window) return;
				(function(e) {
					const t = e.matchMedia(Nn).matches;
					return e.navigator && e.navigator.standalone || t
				})(window) && e.dispatch(Object(kn.i)());
				const t = window.matchMedia(Nn);
				t && "function" == typeof t.addEventListener && t.addEventListener("change", t => {
					t.matches ? e.dispatch(Object(kn.i)()) : e.dispatch(Object(kn.j)())
				}), window.addEventListener("appinstalled", () => {
					const t = e.getState();
					setTimeout(() => {
						ut(t)
					}, 1e3), Mn(t, function(e) {
						return "microsoft-store" === new URLSearchParams(e.location.search).get("app-install-source") ? "microsoft-store" : "browser"
					}(window))
				}), window.addEventListener("online", () => {
					e.dispatch(jn()), setTimeout(() => e.dispatch(Sn()), In)
				}), window.addEventListener("offline", () => e.dispatch(_n()))
			}
			var An = n("./src/lib/cookieConsent/index.ts"),
				Rn = n("./src/lib/permanentCookieOptions.ts"),
				Ln = n("./src/reddit/constants/cookie.ts");
			const Dn = (e, t) => {
				if (!e) return;
				const n = (d.a.get(Ln.g) || "").split(",");
				if (!n.includes(e)) {
					n.unshift(e);
					const s = n.slice(0, 10).join(","),
						r = {
							name: Ln.g,
							value: s,
							cookieOptions: Object(Rn.a)(),
							cookieContext: t
						};
					Object(An.c)(r)
				}
			};
			var Fn = n("./src/reddit/layout/page/Listing/index.tsx"),
				Un = n("./src/reddit/models/Toast/index.ts"),
				Gn = n("./src/reddit/reducers/index.ts"),
				Bn = n("./src/reddit/routes/index.ts");
			var qn = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				Hn = n("./src/reddit/selectors/experiments/survey.ts");
			const Wn = {
					displayDelay: 15,
					displayOnRoutes: [_.Nb.SUBREDDIT, _.Nb.COMMENTS],
					experimentName: Xe.vd,
					experimentVariant: Xe.zd.On,
					isSEOOnly: !0,
					samplingRate: 25,
					seed: Math.random()
				},
				Vn = e => {
					const {
						base_url: t
					} = Object(wn.Y)(e), n = Object(Dt.b)(e), s = n && n.urlParams.partialPostId, r = n && n.urlParams.subredditName;
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
				Qn = e => {
					if ((((e, t) => {
							let {
								experimentName: n,
								experimentVariant: s
							} = e;
							return t.experimentOverrides[n] === s
						})(Wn, e) || (e => {
							let {
								samplingRate: t,
								seed: n
							} = e;
							return !!n && 0 === Math.floor(n * t)
						})(Wn)) && ((e, t) => {
							let {
								displayOnRoutes: n
							} = e;
							const s = t.platform.currentPage && t.platform.currentPage.meta && t.platform.currentPage.meta.name;
							return !!s && n.includes(s)
						})(Wn, e) && ((e, t) => {
							let {
								isSEOOnly: n
							} = e;
							return !n || t.meta.isSessionSeo
						})(Wn, e) && ((e, t) => {
							let {
								experimentName: n,
								experimentVariant: s
							} = e;
							return Object(gn.c)(t, {
								experimentName: n,
								experimentEligibilitySelector: gn.a
							}) === s
						})(Wn, e)) return {
						displayDelay: Wn.displayDelay,
						externalVars: Vn(e)
					}
				};
			var Kn = n("./src/reddit/selectors/meta.ts"),
				zn = n("./src/reddit/selectors/onboarding.ts");
			var Jn = n("./src/reddit/singleton/EventSystem.ts"),
				Yn = n("./src/telemetry/helpers/getSerializedThriftJSON.ts"),
				Zn = n("./src/telemetry/helpers/getSignatureHeader.ts"),
				Xn = n("./src/lib/initializeClient/installReducer.ts"),
				$n = n("./src/reddit/reducers/features/categories/index.ts"),
				es = n("./src/lib/sentry/index.ts"),
				ts = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const ns = Object(p.a)(ts.C),
				ss = () => {
					return Object(Qe.B)(He.b.RPAN_USER_SETTINGS_STORE) || void 0
				};
			var rs = n("./src/reddit/actions/global/constants.ts");
			Object(Xn.a)({
				features: {
					categories: $n.a
				}
			});
			const os = Object(p.a)(rs.a),
				as = e => async (t, n) => {
					t((() => async e => {
						const t = ss();
						t && e(ns(t))
					})());
					const s = n();
					s.user.loid.loid || s.meta.isBot || es.c.withScope(e => {
						Object(es.a)(e, {
							serverLogging: !1
						}), es.c.captureMessage("User has no LOID set")
					});
					const {
						localStorageData: r
					} = e;
					r && t(os(r))
				};
			var is = n("./src/reddit/actions/login.ts");
			const cs = /^\/account\/magic_link\/landing\/[^\/]+\/?$/,
				ds = () => async (e, t) => {
					var n;
					(e => {
						if (!e) return !1;
						const t = new URL(e).pathname;
						return cs.test(t)
					})(null === (n = t().platform) || void 0 === n ? void 0 : n.sessionReferrer) && e(Object(is.c)())
				};
			var ls = n("./src/reddit/actions/notificationsInbox/index.ts"),
				us = n("./src/reddit/actions/onboarding/index.ts"),
				ms = n("./src/reddit/constants/countrySites.ts"),
				ps = n("./src/reddit/selectors/countrySites.ts");
			const bs = ms.b ? `${ms.a}/${ms.b}` : `${ms.a}`,
				hs = (e, t) => {
					return !!Object(ps.d)(e) && !(t && !Object(ps.c)(t))
				},
				gs = e => e.startsWith("/r/") ? e.replace("/r/", `/${bs}/r/`) : e;
			var fs = n("./src/reddit/selectors/experiments/countrySites.ts");
			var vs = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				Os = n("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts");
			Object(r.e)(r.b.EntryPointStart);
			const ys = Object(D.a)({
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
						headersReceived: H.a
					},
					onBeforeRequestFactory: En.a,
					statsAppName: _.n.Redesign
				}),
				Cs = Object(F.a)(ys.apiContext),
				xs = Object(F.a)(ys.apiContext, a.a.gqlRealtime2Url),
				Es = ht();
			let Ps;
			Object(M.a)({
				reducerMap: Gn.a,
				routes: Bn.a,
				apiContext: ys.apiContext,
				gqlContext: Cs.gqlContext,
				gqlRealtime2Context: xs.gqlContext,
				appFactory: (e, t) => u.a.createElement(rt.a.Provider, {
					value: Es.broadcaster
				}, u.a.createElement(ot.a.Provider, {
					value: {
						apiContext: ys.apiContext,
						gqlContext: Cs.gqlContext,
						gqlRealtime2Context: xs.gqlContext
					}
				}, u.a.createElement(at.b, null, u.a.createElement(Be, {
					ok: !0,
					RouterComponent: e,
					routes: t
				}), u.a.createElement(Ze, null)))),
				appName: _.n.Redesign,
				history: Object(i.a)({
					getUserConfirmation(e, t) {
						const n = Ps;
						if (!n) return;
						n.dispatch(Object(ee.l)({
							allowNavigationCallback: function() {
								let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
								t(e), n.dispatch(Object(ee.k)())
							}
						}))
					}
				}),
				customMiddleware: [E.a.withExtraArgument({
					routes: Bn.a,
					apiContext: ys.apiContext,
					gqlContext: Cs.gqlContext,
					gqlRealtime2Context: xs.gqlContext
				}), Es.middleware, Et, ys.middleware, Cs.middleware, xs.middleware, Jt, Nt, Zt, hn, Vt, Kt, vs.a, mt, e => t => n => {
					let s, r;
					if (!Object(fs.b)(e.getState()) || !n.payload) return t(n);
					r = (null == (s = e.getState().platform.currentPage) ? void 0 : s.urlParams.subredditName) || "";
					const o = {
						...n.payload
					};
					try {
						void 0 !== n.payload.posts && (n.payload.posts = ((e, t, n) => {
							if (!hs(e, n)) return t;
							for (const [s, r] of Object.entries(t)) {
								const e = r.belongsTo.id,
									t = Object(ps.c)(e);
								(n || t) && (r.permalink = r.permalink.replace("https://www.reddit.com/r/", `https://www.reddit.com/${bs}/r/`))
							}
							return t
						})(e.getState(), n.payload.posts, r)), void 0 !== n.payload.comments && (n.payload.comments = ((e, t, n) => {
							if (!hs(e, n)) return t;
							for (const [s, r] of Object.entries(t)) {
								const e = r.subredditId,
									t = Object(ps.c)(e);
								(n || t) && (r.permalink = gs(r.permalink))
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
					if (!Object(fs.b)(e.getState()) || !n.payload) return t(n);
					const s = {
						...n.payload
					};
					try {
						n.type === b.e ? n.payload = ((e, t) => {
							if (!hs(e, t.name)) return t;
							const n = Object(ps.c)(t.id);
							if (t.name || n) {
								const e = gs(t.url);
								return {
									...t,
									url: e
								}
							}
							return t
						})(e.getState(), n.payload) : void 0 !== n.payload.subreddits && (n.payload.subreddits = ((e, t) => {
							if (!hs(e, "")) return t;
							for (const [n, s] of Object.entries(t)) {
								const e = Object(ps.c)(s.id),
									r = Object(ps.c)(s.name);
								if (e || r) {
									const e = gs(s.url),
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
				modifyInitialData: e => {
					let {
						initialData: t,
						browserHistory: n
					} = e;
					const s = t.platform.currentPage ? t.platform.currentPage.key : "";
					if (s) {
						const e = n.location.key;
						t.platform.currentPage && (t.platform.currentPage.key = e);
						for (const n of ["referrers", "metas"]) Object.keys(t.platform[n]).length && (t.platform[n] = {
							[e]: t.platform[n][s]
						})
					}
					return t
				},
				staticPages: {
					loading: u.a.createElement(Fn.a, {
						content: null,
						sidebar: null
					})
				},
				preRender: e => {
					let {
						browserHistory: t,
						routes: n,
						store: s
					} = e;
					window.addEventListener("message", e => {
							const t = a.a.mediaUrl;
							e.origin.indexOf(t) < 0 || "tweet-measured" !== e.data.action || !e.data.id36 || s.dispatch(Object(J.j)({
								height: e.data.height || 0,
								isDeleted: e.data.isDeleted || !1,
								postId: `t3_${e.data.id36}`
							}))
						}), Tn(s), Object(G.d)("enabled" === Object(gn.c)(s.getState(), {
							experimentEligibilitySelector: gn.a,
							experimentName: Xe.jf,
							expEventOverride: !1
						})), Object(G.c)("enabled" === Object(gn.c)(s.getState(), {
							experimentEligibilitySelector: gn.a,
							experimentName: Xe.lf
						})), Object(G.g)("enabled" === Object(gn.c)(s.getState(), {
							experimentEligibilitySelector: gn.a,
							experimentName: Xe.kf
						})), Object(G.f)(Cs.gqlContext), window.addEventListener("beforeunload", () => {
							const e = s.getState(),
								t = Object(On.a)("tab_closed")(e),
								n = B.g(t),
								r = Object(Yn.a)(n),
								o = Object(Zn.b)(r);
							Object(L.b)("sendV2EventsData", {
								data: r,
								headers: o
							})
						}),
						function(e) {
							const t = String(e.split("/")[1]).toLowerCase();
							return "framedgild" === t || "framedmodal" === t
						}(t.location.pathname) || s.dispatch(Object(ee.h)());
					const r = Object(v.cb)(s.getState());
					s.dispatch(Object(oe.c)({
						nightmode: r
					}));
					const o = (e => e.tracing.traceId)(s.getState());
					if (o && (e => Object(gn.c)(e, {
							experimentEligibilitySelector: gn.a,
							experimentName: Xe.F
						}) === Xe.O.Enabled)(s.getState())) {
						Yt.b.enableTracing(!0);
						const e = Yt.b.createTraceFromId(o);
						Yt.b.setParent(e)
					}
					s.dispatch(Object(ee.i)(n));
					t.listen((e, t) => {
						const r = Object(I.a)(Object(i.e)(e), n, s.getState());
						s.dispatch(Object(ee.j)(e, t, r))
					});
					const c = s.getState(),
						{
							currentPage: d
						} = c.platform;
					if (d) {
						const e = [nt.i];
						if (Object(Dt.j)(c) && e.push(nt.f), e.length > 0) {
							const t = Object(k.a)(d.url, e);
							t !== d.url && s.dispatch(Object(m.c)(t))
						}
					}
					return fn.a.initialize(c), {
						localStorageData: Object(Qe.C)()
					}
				},
				postRender: e => {
					let {
						browserHistory: t,
						routes: i,
						serverDocumentLength: c,
						store: d,
						localStorageData: l
					} = e;
					var u, m;
					Ps = d;
					t.listen((e, t) => {
						const n = d.getState(),
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
							i = Object(pn.D)(n, a) || "";
						if (Dn(i, {
								country: n.meta.country
							}), i) {
							d.dispatch(O(i, a));
							const e = Object(Dt.e)(n);
							e && d.dispatch(y(e))
						}
						Jn.a.publish(tt.c, o, document)
					});
					const p = d.getState(),
						b = Object(vs.b)();
					d.dispatch((e => async t => {
						const n = {},
							s = new Set;
						e.forEach(e => {
							s.add(e.id), n[e.id] || (n[e.id] = e)
						}), t(C(n)), t(x(Array.from(s)))
					})(b));
					const h = (p.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
						g = Object(pn.D)(p, h) || "";
					if (h) {
						d.dispatch(O(g, h));
						const e = Object(Dt.e)(p);
						e && d.dispatch(y(e))
					}
					const f = Object(pn.D)(p, h) || "",
						E = (p.subreddits.about[f] || {}).advertiserCategory;
					o.setup({
						jailUrl: "https://www.redditmedia.com/gtm/jail",
						containerId: a.a.gtmContainerId,
						payload: {
							user: p.user.account ? p.user.account.id : p.user.loid.loid
						}
					}), o.trigger("pageview", {
						subreddit: h,
						advertiserCategory: E
					}), d.dispatch(as({
						localStorageData: l
					})), Object(qn.f)(p) && Object(z.d)(p), d.dispatch(Object(z.c)()), Object(zn.c)(p) && (d.dispatch($()), history.replaceState(history.state, "", Object(k.a)(window.location.href, [nt.x]))), d.dispatch(ds()), window.addEventListener("load", () => {
						const e = d.getState(),
							{
								currentPage: o
							} = e.platform,
							a = (o.urlParams.subredditName || "").toLowerCase(),
							i = Object(pn.D)(e, a) || "";
						if (Object(L.a)(), Dn(i, {
								country: e.meta.country
							}), o && o.meta) {
							const a = o.meta.name;
							if (Object(U.b)(_.n.Redesign, {
									page: a,
									type: "rum"
								}), Object(w.c)(e.meta.userAgent) && window.innerWidth > st.b) {
								const t = Object(r.f)(c);
								T.a && T.a.timing && Yt.b.isEnabled && (Yt.b.recordPerformanceTimings(`${a}_time_to_first_byte`, T.a.timing.fetchStart, T.a.timing.responseStart), Yt.b.recordPerformanceTimings(`${a}_time_to_interactive`, T.a.timing.fetchStart, T.a.timing.domInteractive));
								const n = [],
									s = !0;
								if (Object(Dt.g)(e)) {
									const t = Object(vn.a)(e);
									n.push(Object(vn.c)(t))
								}
								const o = {
									isLoggedIn: Object(v.P)(e),
									name: a,
									statsdPathsForExperiments: n
								};
								Object(r.g)(o, t, s)
							}
							const i = T.a.timing.domInteractive - T.a.timing.navigationStart;
							Object(mn.k)(o.routeMatch, d.getState(), q.TimerType.Initial, i, o.urlParams);
							const l = Object(S.a)(window.location.href);
							l && l.get(nt.a) && history.replaceState(history.state, "", Object(k.a)(window.location.href, [nt.a])), Object(R.a)(l.get(nt.G)) && d.dispatch(Object(ae.f)({
								kind: Un.b.SuccessCommunity,
								text: s.fbt._("Email verification complete", null, {
									hk: "bqMP6"
								})
							})), l.get(nt.H) && (d.dispatch(Object(K.a)(l.get(nt.H))), history.replaceState(history.state, "", Object(k.a)(window.location.href, [nt.H])));
							let u = !1;
							const m = Object(v.S)(e);
							(Object(dn.b)(et.b.JustLoggedIn) || m) && (d.dispatch(Object(ae.f)({
								text: s.fbt._("Successfully logged in!", null, {
									hk: "2POUVB"
								})
							})), u = !0, Object(dn.c)(et.b.JustLoggedIn), history.replaceState(history.state, "", Object(k.a)(window.location.href, [nt.q]))), Object(dn.b)(et.b.JustLoggedOut) && (u = !0, Object(dn.c)(et.b.JustLoggedOut)), Z().then(e => {
								let {
									subscribeToPermissionsChange: t
								} = e;
								return d.dispatch(t())
							});
							const p = () => d.dispatch(Object(us.openReonboardingModalIfNeeded)());
							if (!1 !== Qe.V()) {
								let n;
								Object(qn.a)(e) && (n = () => {
									const {
										dispatch: e
									} = d;
									t.listen(() => e(Object(z.b)())), e(Object(z.b)())
								});
								const s = () => {
									n && n(), p()
								};
								Z().then(e => e.requestNotificationsPermissions).then(e => d.dispatch(e(u, !1, s)))
							} else p();
							if (a === _.Nb.MULTIREDDIT && o.routeMatch) {
								const {
									multiredditName: e,
									username: t
								} = o.routeMatch.match.params;
								d.dispatch(Object(N.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.recommendationsRequested))({
									multiredditName: e,
									username: t
								}))
							}
							d.dispatch(Object(Q.c)())
						}
						Object(v.P)(d.getState()) && d.dispatch(Object(W.d)()), Object(P.requestIdleCallback)(async () => {
							d.dispatch(Object(X.d)()), await Object(j.a)() && Object(On.b)(d.getState());
							const e = async () => {
								const e = d.getState(),
									t = Qn(e);
								t && (await (async e => {
									return (await Object(Y.a)(() => n.e("UserZoomIntegration").then(n.bind(null, "./src/reddit/helpers/userzoom/index.ts")))).embedFrame(e)
								})(t), s && s())
							}, s = t.listen((t, n) => {
								"POP" !== n && e()
							});
							e()
						}), document.addEventListener("visibilitychange", () => {
							var e;
							const t = d.getState(),
								{
									currentPage: n
								} = t.platform;
							if ("visible" !== document.visibilityState && (Qe.Ub(Date.now()), Object(U.a)(Object(On.a)("tab_backgrounded")(t))), (e => Object(gn.c)(e, {
									experimentEligibilitySelector: e => !Object(Kn.d)(e),
									experimentName: Xe.bc
								}) === Xe.nc.Enabled)(t) && "visible" === document.visibilityState && n && Object(mn.k)(n.routeMatch, d.getState(), q.TimerType.Revisit, 0, n.urlParams, !0), "visible" === document.visibilityState) {
								const e = Qe.w(),
									t = Qe.x(),
									n = Qe.H(),
									s = Qe.R();
								if (s && e && n) {
									const r = Date.now() - s;
									Object(U.a)(Object(On.e)("tab_backgrounded", n)(d.getState(), r, e, t))
								}(s || e || n || t) && (Qe.db(), Qe.hb(), Qe.fb(), Qe.eb())
							}(null === (e = null == n ? void 0 : n.locationState) || void 0 === e ? void 0 : e.clickId) && Os.d[n.locationState.clickId] && !Os.d[n.locationState.clickId].completed && ("visible" !== document.visibilityState ? Object(Os.b)(n.locationState.clickId) : Object(Os.c)(n.locationState.clickId))
						}), Object(Kn.g)(d.getState()) && xn(d.getState), d.dispatch(Object(re.n)())
					}), window.history.scrollRestoration = "manual", Jn.a.attachStore(d), d.dispatch(Object(ne.b)(A.a.PageLoad));
					const M = Qe.p(null === (u = d.getState().user.account) || void 0 === u ? void 0 : u.id),
						I = Qe.o(null === (m = d.getState().user.account) || void 0 === m ? void 0 : m.id);
					d.dispatch(Object(te.C)({
						posts: null != M ? M : []
					})), d.dispatch(Object(V.k)({
						comments: null != I ? I : []
					})), Object(At.f)(d.getState()) && d.dispatch(Object(ls.e)()), Object(P.requestIdleCallback)(() => {
						if (Object(Hn.g)(d.getState())) {
							const e = Qe.D();
							(!e || e && Date.now() - e.lastUpdated >= _.B) && d.dispatch(Object(re.f)())
						}
					})
				},
				raven: {
					tags: {
						project: _.n.Redesign
					}
				},
				ssr: !0,
				target: document.getElementById("2x-container"),
				timingsSampleRate: 1
			})
		},
		"./src/reddit/models/ContentGate.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.CustomFeedDoesNotExist = "CustomFeedDoesNotExist", e.GoldSubreddit = "GoldSubreddit", e.Nsfw = "Nsfw", e.NsfwCustomFeed = "NsfwCustomFeed", e.PrivateSubreddit = "PrivateSubreddit", e.ProfileDoesNotExist = "ProfileDoesNotExist", e.ProfileDeleted = "ProfileDeleted", e.ProfileSuspended = "ProfileSuspended", e.ProfileBlockedForLegalReason = "ProfileBlockedForLegalReason", e.QuarantinedSubreddit = "QuarantinedSubreddit", e.GatedSubreddit = "GatedSubreddit", e.SubredditBanned = "SubredditBanned", e.SubredditBlockedForLegalReason = "SubredditBlockedForLegalReason", e.SubredditDoesNotExist = "SubredditDoesNotExist", e.PostBlockedForLegalReason = "PostBlockedForLegalReason"
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
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return c
			}));
			var s, r, o, a, i = n("./src/reddit/models/FeedElement/index.ts");

			function c(e) {
				return e.__typename === i.a.InboxNotificationCollection
			}! function(e) {
				e.AwardReceived = "AWARD_RECEIVED", e.CakeDay = "CAKE_DAY", e.ChatMessage = "CHAT_MESSAGE", e.ChatRequest = "CHAT_REQUEST", e.ChatAcceptInvite = "CHAT_ACCEPT_INVITE", e.CommentFollow = "COMMENT_FOLLOW", e.CommentReply = "COMMENT_REPLY", e.HFNSubredditInterestingPost = "SUBREDDIT_UPDATES_INTERESTING_POST", e.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", e.ModeratedSrViralCommentPost = "MODERATED_SR_VIRAL_COMMENT_POST", e.OneOff = "ONE_OFF", e.PostFollow = "POST_FOLLOW", e.PostReply = "POST_REPLY", e.PrivateMessage = "PRIVATE_MESSAGE", e.RedditLore = "REDDIT_LORE", e.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", e.TalkLive = "TALK_LIVE", e.ThreadReplies = "THREAD_REPLIES", e.TopLevelComment = "TOP_LEVEL_COMMENT", e.UpvoteComment = "UPVOTE_COMMENT", e.UpvotePost = "UPVOTE_POST", e.UsernameMention = "USERNAME_MENTION", e.UserNewFollower = "USER_NEW_FOLLOWER"
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
		"./src/reddit/reducers/pages/modHub/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				r = n("./src/reddit/actions/subredditModeration/constants.ts");
			var o = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.g:
						case r.f:
							return null;
						case r.e:
							return t.payload;
						default:
							return e
					}
				},
				a = n("./src/reddit/models/SubredditModeration/index.ts");
			const i = {};
			var c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.g: {
							const {
								subredditId: n,
								fetchedToken: s
							} = t.payload, r = Object(a.e)(n, s);
							return {
								...e,
								[r]: !0
							}
						}
						case r.f:
						case r.e: {
							const {
								subredditId: n,
								fetchedToken: s
							} = t.payload, r = Object(a.e)(n, s);
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				d = Object(s.c)({
					error: o,
					pending: c
				});
			const l = {};
			var u = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.f: {
						const {
							fetchedToken: n,
							subredditId: s
						} = t.payload, r = Object(a.e)(s, n);
						return {
							...e,
							[r]: !0
						}
					}
					default:
						return e
				}
			};
			const m = {};
			var p = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.f: {
							const {
								subredditId: e,
								after: n
							} = t.payload;
							return {
								[e]: n
							}
						}
						default:
							return e
					}
				},
				b = n("./node_modules/icepick/icepick.js");
			const h = {};
			var g = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.d:
					case r.f: {
						const {
							subredditId: n,
							approvedSubmitters: s
						} = t.payload, r = {
							[n]: s
						};
						return Object(b.merge)(e, r)
					}
					case r.k: {
						const {
							subredditId: n,
							userId: s
						} = t.payload;
						return Object(b.unsetIn)(e, [n, s])
					}
					default:
						return e
				}
			};
			var f = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.j:
					case r.i:
						return null;
					case r.h:
						return t.payload;
					default:
						return e
				}
			};
			var v = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.j:
							return !0;
						case r.i:
						case r.h:
							return !1;
						default:
							return e
					}
				},
				O = Object(s.c)({
					error: f,
					pending: v
				});
			var y = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.j:
							return null;
						case r.i: {
							const e = t.payload.approvedSubmitterIds[0];
							return e ? t.payload.approvedSubmitters[e] : null
						}
						default:
							return e
					}
				},
				C = Object(s.c)({
					api: O,
					result: y
				});
			const x = {};
			var E = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.f: {
							const {
								subredditId: n,
								approvedSubmitterIds: s
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: [...e[n], ...s]
							} : {
								...e,
								[n]: s
							}
						}
						case r.k: {
							const {
								subredditId: n,
								userId: s
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== s)
							}
						}
						case r.d: {
							const {
								subredditId: n,
								approvedSubmitterIds: s
							} = t.payload, r = s[0];
							return r && e[n] && -1 === e[n].indexOf(r) ? {
								[n]: [r, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				P = Object(s.c)({
					api: d,
					fetchedTokens: u,
					loadMore: p,
					models: g,
					search: C,
					userOrder: E
				}),
				j = n("./src/reddit/actions/grantUserFlair/constants.ts");
			var _ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.g:
					case j.i:
						return null;
					case j.f:
						return t.payload;
					default:
						return e
				}
			};
			var S = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.i:
							return !0;
						case j.g:
						case j.f:
							return !1;
						default:
							return e
					}
				},
				k = Object(s.c)({
					error: _,
					pending: S
				}),
				w = n("./node_modules/lodash/merge.js"),
				M = n.n(w),
				N = n("./node_modules/lodash/omit.js"),
				I = n.n(N);
			const T = {};
			var A = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.g:
					case j.k: {
						const {
							subredditId: n,
							flairedUsers: s
						} = t.payload;
						return M()({
							...e
						}, {
							[n]: s
						})
					}
					case j.c: {
						const {
							subredditId: n,
							userName: s
						} = t.payload, r = I()(e[n], s);
						return {
							...e,
							[n]: r
						}
					}
					case j.a:
					case j.b:
					case j.h:
						const {
							subredditId: n, userName: s, applied: r
						} = t.payload;
						return r ? {
							...e,
							[n]: {
								...e[n],
								[s]: r
							}
						} : e;
					default:
						return e
				}
			};
			const R = {};
			var L = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.g: {
						const {
							key: n,
							pageInfo: s
						} = t.payload;
						return {
							...e,
							[n]: s
						}
					}
					default:
						return e
				}
			};
			var D = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.l:
					case j.k:
						return null;
					case j.j:
						return t.payload;
					default:
						return e
				}
			};
			var F = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.l:
							return !0;
						case j.k:
						case j.j:
							return !1;
						default:
							return e
					}
				},
				U = Object(s.c)({
					error: D,
					pending: F
				});
			var G = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.k: {
							const {
								searchResult: e
							} = t.payload;
							return e
						}
						case j.c: {
							const {
								userName: n
							} = t.payload;
							return e === n ? null : e
						}
						default:
							return e
					}
				},
				B = Object(s.c)({
					api: U,
					result: G
				});
			const q = {};
			var H = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.g: {
							const {
								key: n,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[n]: s
							}
						}
						case j.a: {
							const {
								key: n,
								userName: s
							} = t.payload;
							if (!n) return e;
							if (!e[n].includes(s)) {
								const t = [...e[n], s];
								return {
									...e,
									[n]: t
								}
							}
							return e
						}
						case j.c: {
							const {
								userName: n
							} = t.payload, s = {};
							for (const t in e) s[t] = e[t].filter(e => e !== n);
							return s
						}
						default:
							return e
					}
				},
				W = Object(s.c)({
					api: k,
					models: A,
					pageInfo: L,
					search: B,
					userOrder: H
				}),
				V = n("./src/reddit/actions/moderationLog/constants.ts");
			const Q = {};
			var K = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.b: {
						const {
							actionIds: n,
							key: s,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[s]: n
							}
						}
					}
					default:
						return e
				}
			};
			const z = {};
			var J = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case V.b: {
							const {
								normalizedModerationLog: n,
								subredditId: s
							} = t.payload, r = {};
							n.forEach(e => {
								r[e.id] = e
							});
							const o = {
								[s]: r
							};
							return M()({
								...e
							}, o)
						}
						default:
							return e
					}
				},
				Y = Object(s.c)({
					itemOrder: K,
					models: J
				});
			var Z = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.b: {
						const {
							endCursor: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const X = {};
			var $ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : X,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.b: {
						const {
							hasNextPage: n,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: n
						}
					}
					default:
						return e
				}
			};
			const ee = {};
			var te = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ee,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.b: {
						const {
							hasPreviousPage: n,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: n
						}
					}
					default:
						return e
				}
			};
			const ne = [];
			var se = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ne,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.a: {
						const {
							normalizedModerators: n,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: n
						}
					}
					default:
						return e
				}
			};
			var re = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case V.b: {
							const {
								startCursor: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				oe = Object(s.c)({
					actions: Y,
					endCursor: Z,
					hasNextPage: $,
					hasPreviousPage: te,
					moderators: se,
					startCursor: re
				});
			const ae = {};
			var ie = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ae,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.K:
					case r.u: {
						const {
							subredditId: n,
							moderators: s
						} = t.payload.response || t.payload, r = {
							[n]: s
						};
						return Object(b.merge)(e, r)
					}
					case r.y: {
						const {
							subredditId: n,
							userId: s,
							permissions: r
						} = t.payload;
						return Object(b.setIn)(e, [n, s, "modPermissions"], r)
					}
					case r.fb: {
						const {
							subredditId: n,
							userId: s
						} = t.payload;
						return Object(b.unsetIn)(e, [n, s])
					}
					default:
						return e
				}
			};
			const ce = {};
			var de = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ce,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.v:
					case r.u: {
						const {
							key: n,
							subredditId: s
						} = t.payload;
						return s ? {
							...e,
							[n]: null
						} : e
					}
					case r.t: {
						const {
							error: n,
							key: s,
							subredditId: r
						} = t.payload;
						return r ? {
							...e,
							[s]: n
						} : e
					}
					default:
						return e
				}
			};
			const le = {};
			var ue = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : le,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.t:
						case r.u: {
							const {
								subredditId: n,
								key: s
							} = t.payload;
							return n ? {
								...e,
								[s]: !1
							} : e
						}
						case r.v: {
							const {
								subredditId: n,
								key: s
							} = t.payload;
							return n ? {
								...e,
								[s]: !0
							} : e
						}
						default:
							return e
					}
				},
				me = Object(s.c)({
					error: de,
					pending: ue
				});
			const pe = {};
			var be = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.u: {
							const {
								subredditId: n,
								response: s,
								key: r
							} = t.payload;
							return Object(b.setIn)(e, [n, r], s.moderatorIds)
						}
						case r.fb: {
							const {
								subredditId: n,
								userId: s,
								key: r
							} = t.payload, o = e[n][r].filter(e => e !== s);
							return Object(b.setIn)(e, [n, r], o)
						}
						default:
							return e
					}
				},
				he = Object(s.c)({
					data: be,
					api: me
				});
			var ge = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.B:
					case r.A:
						return null;
					case r.z:
						return t.payload;
					default:
						return e
				}
			};
			var fe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.A:
						case r.z:
							return !1;
						case r.B:
							return !0;
						default:
							return e
					}
				},
				ve = Object(s.c)({
					error: ge,
					pending: fe
				});
			const Oe = {};
			var ye = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.A: {
						const {
							subredditId: n,
							moderators: s
						} = t.payload;
						return Object(b.set)(e, n, s)
					}
					case r.cb: {
						const {
							subredditId: n,
							userId: s
						} = t.payload;
						return Object(b.unsetIn)(e, [n, s])
					}
					case r.c: {
						const n = t.payload,
							{
								subredditId: s,
								moderators: r
							} = n,
							o = {
								[s]: r
							};
						return Object(b.merge)(e, o)
					}
					default:
						return e
				}
			};
			const Ce = {};
			var xe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ce,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.A: {
							const {
								subredditId: n,
								moderatorIds: s
							} = t.payload;
							return {
								...e,
								[n]: s
							}
						}
						case r.cb: {
							const {
								subredditId: n,
								userId: s
							} = t.payload, r = e[n].filter(e => e !== s);
							return {
								...e,
								[n]: r
							}
						}
						case r.c: {
							const n = t.payload,
								{
									subredditId: s,
									moderatorIds: r
								} = n,
								o = [...e[s] || [], ...r];
							return {
								...e,
								[s]: o
							}
						}
						default:
							return e
					}
				},
				Ee = Object(s.c)({
					api: ve,
					models: ye,
					userOrder: xe
				});
			const Pe = {};
			var je = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.H: {
						const {
							subredditId: n,
							response: s
						} = t.payload, {
							invitePending: r
						} = s, o = {
							[n]: r
						};
						return Object(b.merge)(e, o)
					}
					case r.E:
					case r.F: {
						const {
							subredditId: n
						} = t.payload;
						return Object(b.unset)(e, n)
					}
					default:
						return e
				}
			};
			const _e = {};
			var Se = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _e,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.u: {
						const {
							response: e
						} = t.payload;
						return {
							[e.subredditId]: {
								after: e.after,
								before: e.before
							}
						}
					}
					default:
						return e
				}
			};
			const ke = {};
			var we = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ke,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.H: {
						const {
							response: e
						} = t.payload;
						return {
							[e.subredditId]: {
								after: e.after,
								before: e.before
							}
						}
					}
					default:
						return e
				}
			};
			const Me = {};
			var Ne = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Me,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.H: {
						const {
							response: n
						} = t.payload, s = {
							[n.subredditId]: n.moderators
						};
						return Object(b.merge)({
							...e
						}, s)
					}
					case r.y: {
						const n = t.payload,
							{
								subredditId: s,
								userId: r,
								permissions: o
							} = n;
						return e[s] && e[s][r] ? Object(b.setIn)(e, [s, r, "modPermissions"], o) : e
					}
					default:
						return e
				}
			};
			var Ie = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.L:
					case r.K:
						return null;
					case r.J:
						return t.payload;
					default:
						return e
				}
			};
			var Te = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.L:
							return !0;
						case r.K:
						case r.J:
							return !1;
						default:
							return e
					}
				},
				Ae = Object(s.c)({
					error: Ie,
					pending: Te
				}),
				Re = n("./node_modules/lodash/isEqual.js"),
				Le = n.n(Re);
			var De = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.L:
						case r.J:
						case r.fb:
							return null;
						case r.K: {
							const e = t.payload.moderatorIds[0];
							return e ? t.payload.moderators[e] : null
						}
						case r.y: {
							const {
								userId: n,
								permissions: s
							} = t.payload;
							return e && e.id === n && !Le()(e.modPermissions, s) ? {
								...e,
								modPermissions: s
							} : e
						}
						default:
							return e
					}
				},
				Fe = Object(s.c)({
					api: Ae,
					result: De
				});
			const Ue = {};
			var Ge = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ue,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.I:
					case r.H: {
						const {
							subredditId: n,
							key: s
						} = t.payload;
						return n ? {
							...e,
							[s]: null
						} : e
					}
					case r.G: {
						const {
							error: n,
							subredditId: s,
							key: r
						} = t.payload;
						return s ? {
							...e,
							[r]: n
						} : e
					}
					default:
						return e
				}
			};
			const Be = {};
			var qe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Be,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.G:
						case r.H: {
							const {
								subredditId: n,
								key: s
							} = t.payload;
							return n ? {
								...e,
								[s]: !1
							} : e
						}
						case r.I: {
							const {
								subredditId: n,
								key: s
							} = t.payload;
							return n ? {
								...e,
								[s]: !0
							} : e
						}
						default:
							return e
					}
				},
				He = Object(s.c)({
					error: Ge,
					pending: qe
				});
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const We = {};
			var Ve = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : We,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.H: {
							const {
								response: n,
								subredditId: s,
								key: r
							} = t.payload, {
								moderatorIds: o
							} = n;
							return Object(b.merge)(e, {
								[s]: {
									[r]: o
								}
							})
						}
						case r.fb: {
							const {
								subredditId: n,
								userId: s
							} = t.payload, r = {
								...e[n]
							};
							return Object.keys(e[n]).forEach(t => {
								const o = e[n][t].filter(e => e !== s);
								r[t] = o
							}), Object(b.set)(e, n, r)
						}
						default:
							return e
					}
				},
				Qe = Object(s.c)({
					data: Ve,
					api: He
				}),
				Ke = Object(s.c)({
					editableModerators: ie,
					editableUserOrder: he,
					invitedModerators: Ee,
					invitePending: je,
					loadMoreModerators: we,
					loadMoreEditableModerators: Se,
					models: Ne,
					search: Fe,
					userOrder: Qe
				}),
				ze = n("./src/reddit/actions/bulkActions/constants.ts");
			var Je = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ze.c:
						case ze.b:
							return null;
						case ze.a:
							return t.payload;
						default:
							return e
					}
				},
				Ye = n("./src/reddit/actions/modQueue/constants.ts");
			var Ze = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ze.c:
							return !0;
						case ze.b:
						case ze.a:
						case Ye.s:
						case Ye.r:
							return !1;
						default:
							return e
					}
				},
				Xe = Object(s.c)({
					error: Je,
					pending: Ze
				});
			const $e = {};
			var et = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $e,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.a: {
							const {
								ids: n
							} = t.payload, s = {};
							return n.forEach(e => s[e] = !0), {
								...e,
								...s
							}
						}
						case Ye.d: {
							const {
								ids: n
							} = t.payload;
							return I()(e, n)
						}
						case Ye.c: {
							const {
								ids: e
							} = t.payload, n = {};
							return e.forEach(e => n[e] = !0), n
						}
						default:
							return e
					}
				},
				tt = n("./src/reddit/models/ModQueue/index.ts");
			const nt = {};
			var st = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ze.b: {
							const {
								operation: e,
								ids: n
							} = t.payload;
							return "approve" === e ? nt : {
								[tt.c[e]]: n
							}
						}
						default:
							return e
					}
				},
				rt = Object(s.c)({
					api: Xe,
					selectedItems: et,
					undoLastAction: st
				});
			var ot = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.g:
					case Ye.f:
						return null;
					case Ye.e:
						return t.payload;
					default:
						return e
				}
			};
			var at = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.g:
							return !0;
						case Ye.f:
						case Ye.e:
							return !1;
						default:
							return e
					}
				},
				it = Object(s.c)({
					error: ot,
					pending: at
				});
			const ct = {};
			var dt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ct,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.f: {
						const {
							listingKey: n,
							page: s,
							response: r
						} = t.payload, {
							modqueue: o
						} = r;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[s]: o
							}
						}
					}
					default:
						return e
				}
			};
			const lt = {};
			var ut = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.f: {
							const {
								listingKey: n,
								response: s
							} = t.payload, {
								modqueue: r
							} = s, o = r[r.length - 1] || null;
							return {
								...e,
								[n]: o
							}
						}
						default:
							return e
					}
				},
				mt = Object(s.c)({
					api: it,
					itemOrder: dt,
					loadMore: ut
				}),
				pt = n("./src/reddit/actions/pages/modListing/constants.ts");
			var bt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pt.e: {
						const n = t.payload,
							{
								moderatingSubreddits: s
							} = n;
						return s ? null : e
					}
					case Ye.i:
					case Ye.f:
					case Ye.m:
					case Ye.p:
					case Ye.v: {
						const {
							response: e
						} = t.payload, {
							moderatedAfter: n
						} = e;
						return n
					}
					case Ye.k: {
						const e = t.payload,
							{
								moderatedAfter: n
							} = e;
						return n
					}
					default:
						return e
				}
			};
			const ht = [];
			var gt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ht,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.i:
					case Ye.f:
					case Ye.m:
					case Ye.p:
					case Ye.v: {
						const {
							response: e
						} = t.payload, {
							listingOrder: n
						} = e;
						return n
					}
					case Ye.k: {
						const n = t.payload,
							{
								listingOrder: s
							} = n;
						return [...e, ...s]
					}
					case pt.e: {
						const n = t.payload,
							{
								listingOrder: s
							} = n;
						return s || e
					}
					default:
						return e
				}
			};
			var ft = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.b:
						return !0;
					default:
						return e
				}
			};
			var vt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.k:
							return !0;
						case Ye.b:
							return !1;
						default:
							return e
					}
				},
				Ot = Object(s.c)({
					after: bt,
					data: gt,
					loaded: ft,
					pending: vt
				});
			var yt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.j:
					case Ye.i:
						return null;
					case Ye.h:
						return t.payload;
					default:
						return e
				}
			};
			var Ct = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.j:
							return !0;
						case Ye.i:
						case Ye.h:
							return !1;
						default:
							return e
					}
				},
				xt = Object(s.c)({
					error: yt,
					pending: Ct
				});
			const Et = {};
			var Pt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Et,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.i: {
						const {
							listingKey: n,
							page: s,
							response: r
						} = t.payload, {
							modqueue: o
						} = r;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[s]: o
							}
						}
					}
					default:
						return e
				}
			};
			const jt = {};
			var _t = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.i: {
							const {
								listingKey: n,
								response: s
							} = t.payload, {
								modqueue: r
							} = s, o = r[r.length - 1] || null;
							return {
								...e,
								[n]: o
							}
						}
						default:
							return e
					}
				},
				St = Object(s.c)({
					api: xt,
					itemOrder: Pt,
					loadMore: _t
				});
			var kt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.n:
					case Ye.m:
						return null;
					case Ye.l:
						return t.payload;
					default:
						return e
				}
			};
			var wt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.n:
							return !0;
						case Ye.m:
						case Ye.l:
							return !1;
						default:
							return e
					}
				},
				Mt = Object(s.c)({
					error: kt,
					pending: wt
				});
			const Nt = {};
			var It = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.m: {
						const {
							listingKey: n,
							page: s,
							response: r
						} = t.payload, {
							modqueue: o
						} = r;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[s]: o
							}
						}
					}
					default:
						return e
				}
			};
			const Tt = {};
			var At = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.m: {
							const {
								listingKey: n,
								response: s
							} = t.payload, {
								modqueue: r
							} = s, o = r[r.length - 1] || null;
							return {
								...e,
								[n]: o
							}
						}
						default:
							return e
					}
				},
				Rt = Object(s.c)({
					api: Mt,
					itemOrder: It,
					loadMore: At
				});
			var Lt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.q:
					case Ye.p:
						return null;
					case Ye.o:
						return t.payload;
					default:
						return e
				}
			};
			var Dt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.q:
							return !0;
						case Ye.p:
						case Ye.o:
							return !1;
						default:
							return e
					}
				},
				Ft = Object(s.c)({
					error: Lt,
					pending: Dt
				});
			const Ut = {};
			var Gt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ut,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.p: {
						const {
							listingKey: n,
							page: s,
							response: r
						} = t.payload, {
							modqueue: o
						} = r;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[s]: o
							}
						}
					}
					default:
						return e
				}
			};
			const Bt = {};
			var qt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.p: {
							const {
								listingKey: n,
								response: s
							} = t.payload, {
								modqueue: r
							} = s, o = r[r.length - 1] || null;
							return {
								...e,
								[n]: o
							}
						}
						default:
							return e
					}
				},
				Ht = Object(s.c)({
					api: Ft,
					itemOrder: Gt,
					loadMore: qt
				});
			var Wt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.w:
					case Ye.v:
						return null;
					case Ye.u:
						return t.payload;
					default:
						return e
				}
			};
			var Vt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.w:
							return !0;
						case Ye.v:
						case Ye.u:
							return !1;
						default:
							return e
					}
				},
				Qt = Object(s.c)({
					error: Wt,
					pending: Vt
				});
			const Kt = {};
			var zt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.v: {
						const {
							listingKey: n,
							page: s,
							response: r
						} = t.payload, {
							modqueue: o
						} = r;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[s]: o
							}
						}
					}
					default:
						return e
				}
			};
			const Jt = {};
			var Yt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.v: {
							const {
								listingKey: n,
								response: s
							} = t.payload, {
								modqueue: r
							} = s, o = r[r.length - 1] || null;
							return {
								...e,
								[n]: o
							}
						}
						default:
							return e
					}
				},
				Zt = Object(s.c)({
					api: Qt,
					itemOrder: zt,
					loadMore: Yt
				}),
				Xt = Object(s.c)({
					bulkAction: rt,
					edited: mt,
					moderatedCommunitiesOrder: Ot,
					modqueue: St,
					reports: Rt,
					spam: Ht,
					unmoderated: Zt
				});
			var $t = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.U:
					case r.S:
						return null;
					case r.R:
						return t.payload;
					default:
						return e
				}
			};
			const en = {};
			var tn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : en,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.U: {
							const {
								subredditId: n,
								fetchedToken: s
							} = t.payload, r = Object(a.e)(n, s);
							return {
								...e,
								[r]: !0
							}
						}
						case r.S:
						case r.R: {
							const {
								subredditId: n,
								fetchedToken: s
							} = t.payload, r = Object(a.e)(n, s);
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				nn = Object(s.c)({
					error: $t,
					pending: tn
				});
			const sn = {};
			var rn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.S: {
							const {
								fetchedToken: n,
								subredditId: s
							} = t.payload, r = Object(a.e)(s, n);
							return {
								...e,
								[r]: !0
							}
						}
						default:
							return e
					}
				},
				on = n("./src/reddit/actions/inContextModeration.ts");
			var an = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case on.b:
						return t.payload;
					default:
						return e
				}
			};
			const cn = {};
			var dn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.S: {
						const {
							subredditId: e,
							after: n
						} = t.payload;
						return {
							[e]: n
						}
					}
					default:
						return e
				}
			};
			const ln = {};
			var un = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ln,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.T:
					case r.S: {
						const {
							subredditId: n,
							mutedUsers: s
						} = t.payload, r = {
							[n]: s
						};
						return Object(b.merge)(e, r)
					}
					case r.Y: {
						const {
							subredditId: n,
							userId: s
						} = t.payload;
						return Object(b.unsetIn)(e, [n, s])
					}
					default:
						return e
				}
			};
			var mn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.X:
					case r.W:
						return null;
					case r.V:
						return t.payload;
					default:
						return e
				}
			};
			var pn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.X:
							return !0;
						case r.W:
						case r.V:
							return !1;
						default:
							return e
					}
				},
				bn = Object(s.c)({
					error: mn,
					pending: pn
				});
			var hn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.X:
						case r.V:
							return null;
						case r.W: {
							const e = t.payload.mutedUserIds[0];
							return e ? t.payload.mutedUsers[e] : null
						}
						default:
							return e
					}
				},
				gn = Object(s.c)({
					api: bn,
					result: hn
				});
			const fn = {};
			var vn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.S: {
							const {
								subredditId: n,
								mutedUserIds: s
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: [...e[n], ...s]
							} : {
								...e,
								[n]: s
							}
						}
						case r.Y: {
							const {
								subredditId: n,
								userId: s
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== s)
							}
						}
						case r.T: {
							const {
								subredditId: n,
								mutedUserIds: s
							} = t.payload, r = s[0];
							return r && e[n] && -1 === e[n].indexOf(r) ? {
								[n]: [r, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				On = Object(s.c)({
					api: nn,
					fetchedTokens: rn,
					inContext: an,
					loadMore: dn,
					models: un,
					search: gn,
					userOrder: vn
				});
			t.a = Object(s.c)({
				approvedSubmitters: P,
				flairedUsers: W,
				moderationLog: oe,
				moderators: Ke,
				modQueue: Xt,
				muted: On
			})
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
						name: r.Nb.ACKNOWLEDGEMENTS
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
						name: r.Nb.APPEAL
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
						name: r.Nb.AVATAR
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
						name: r.Nb.COINS
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
						name: r.Nb.COINS_MOBILE
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
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/pages/CollectionCommentsPage/index.tsx")),
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
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/actions/pages/collectionCommentsPage.ts")).then(e => e.collectionCommentsPageRequested)),
					chunk: r.s.COLLECTION_COMMENTS_PAGE,
					component: c,
					exact: !0,
					meta: {
						name: r.Nb.COLLECTION_COMMENTS
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
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CommentsPage")]).then(n.bind(null, "./src/reddit/pages/CommentsPage/index.tsx")),
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
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CommentsPage")]).then(n.bind(null, "./src/reddit/actions/pages/comments.ts")).then(e => e.commentsPageRequested)),
					chunk: r.s.COMMENTS_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: e
					},
					path: t,
					prefetches: [r.s.FRONTPAGE, r.s.SUBREDDIT]
				}),
				m = [u(r.Nb.COMMENTS, c), u(r.Nb.DUPLICATES, d), u(r.Nb.COMMENTS, l)];
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("CountryPage")]).then(n.bind(null, "./src/reddit/pages/CountrySitePage/index.tsx")),
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
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("CountryPage")]).then(n.bind(null, "./src/reddit/actions/pages/countrySite/index.ts")).then(e => e.internationalSiteHomePageRequested)),
					chunk: r.s.INTERNATIONAL_SITE_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.INTERNATIONAL_SITE_PAGE
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
						name: r.Nb.ECON_MANAGEMENT
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
						name: r.Nb.FOLLOWERS
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("FramedGild~GildModal"), n.e("FramedGild")]).then(n.bind(null, "./src/reddit/pages/FramedGildPage/index.tsx")),
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
						name: r.Nb.FRAMED_GILD
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
						name: r.Nb.FRAMED_MODAL
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("Frontpage~ModListing~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/pages/Frontpage/index.tsx")),
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
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("Frontpage~ModListing~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageRequested)),
					chunk: a.s.FRONTPAGE,
					component: m,
					exact: !0,
					prefetches: [a.s.COMMENTS_PAGE, a.s.SUBREDDIT]
				},
				b = {
					...p,
					path: l,
					meta: {
						name: a.Nb.INDEX
					},
					routePredicate: c.P
				},
				h = {
					...p,
					path: l,
					meta: {
						name: a.Nb.INDEX,
						telemetryPageType: "popular"
					},
					routePredicate: e => !Object(c.P)(e)
				},
				g = {
					...p,
					path: u,
					meta: {
						name: a.Nb.LISTING
					},
					routePredicate: c.P
				},
				f = {
					...p,
					path: u,
					meta: {
						name: a.Nb.LISTING,
						telemetryPageType: "popular"
					},
					routePredicate: e => !Object(c.P)(e)
				},
				v = [b, h, g, f];
			t.a = v
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
					action: e => async (e, t, n) => {
						let s, {
							gqlContext: r
						} = n; {
							const e = t();
							if (Object(a.c)(e, {
									topicSlug: "coronavirus"
								})) return
						}
						try {
							s = await Object(o.fetchTopicPage)(r(), "coronavirus", {
								includeIdentity: !0,
								includePosts: !1,
								includeRelationships: !1
							})
						} catch {
							return void e(Object(o.topicFailed)())
						}
						if (!s) return;
						const i = t();
						e(Object(o.topicLoaded)({
							...s,
							key: "tagging",
							meta: i.meta
						}))
					},
					chunk: r.s.GEOTAGGING,
					component: c,
					exact: !0,
					meta: {
						name: r.Nb.GEOTAGGING
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
						name: a.Nb.INBOX_PAGES
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
						name: c.Nb.AVATAR_PROFILE
					},
					path: ["/user/me/avatar", "/u/me/avatar", "/user/:profileName/avatar"]
				},
				l = n("./src/reddit/routes/coins/index.ts"),
				u = n("./src/reddit/routes/coinsMobile/index.ts"),
				m = n("./src/reddit/routes/commentsPage/index.ts"),
				p = n("./src/reddit/routes/countrySitePage/index.ts"),
				b = (n("./node_modules/@loadable/component/dist/loadable.esm.js"), n("./src/lib/loadableAction/index.ts"));
			var h = [],
				g = n("./src/reddit/routes/econManagement/index.ts");
			var f = {
					action: Object(b.a)(() => n.e(9).then(n.bind(null, "./src/reddit/actions/pages/emailVerification.ts")).then(e => e.emailVerificationRequested)),
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Nb.EMAIL_VERIFICATION
					},
					path: "/verification/:verificationToken"
				},
				v = n("./src/lib/addQueryParams/index.ts");
			var O = {
					action: e => async (t, n, s) => {
						let {
							apiContext: r
						} = s;
						const {
							queryParams: o
						} = e;
						await t(Object(i.c)(Object(v.a)("/", o)))
					},
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Nb.EXPLORE
					},
					path: ["/explore", "/explore/:categoryName"],
					prefetches: [c.s.COMMENTS_PAGE, c.s.FRONTPAGE]
				},
				y = n("./src/reddit/routes/followers/index.ts"),
				C = n("./src/reddit/routes/framedGild/index.ts"),
				x = n("./src/reddit/routes/framedModal/index.ts"),
				E = n("./src/reddit/routes/frontpage/index.ts"),
				P = n("./src/reddit/routes/geotagging/index.ts"),
				j = n("./src/reddit/routes/inbox/index.ts"),
				_ = n("./src/reddit/routes/meta/index.ts"),
				S = n("./src/reddit/routes/moderationPages/index.ts"),
				k = n("./src/reddit/routes/modListing/index.ts"),
				w = n("./src/reddit/routes/modQueue/index.ts"),
				M = n("./src/reddit/routes/multireddit/index.ts"),
				N = n("./src/reddit/routes/notificationsInbox/index.ts"),
				I = n("./src/reddit/routes/postCreation/constants.ts");
			const T = ["/original", "/original/:categoryName/:sort([a-z]+)?"].map(e => ({
				path: e,
				action: () => async e => {
					await e(Object(i.c)("/"))
				},
				chunk: c.s.EMPTY,
				exact: !0,
				meta: {
					name: c.Nb.ORIGINAL_CONTENT_REDIRECT
				}
			}));
			var A = [{
					path: "/original/submit",
					action: () => async e => {
						await e(Object(i.c)(I.b))
					},
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Nb.ORIGINAL_CONTENT_REDIRECT
					}
				}, ...T],
				R = n("./src/reddit/routes/postCreation/index.ts"),
				L = n("./src/reddit/routes/postDraft/index.ts"),
				D = n("./src/reddit/routes/powerups/index.ts");
			var F = {
					action: () => async e => await e(Object(i.c)(D.a)),
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Nb.POWERUP_REDIRECT
					},
					path: "/powerup"
				},
				U = n("./src/reddit/routes/predictions/index.ts");
			var G = {
					action: () => async e => await e(Object(i.c)(U.a)),
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Nb.PREDICTION_REDIRECT
					},
					path: "/prediction"
				},
				B = n("./src/reddit/routes/premium/index.ts"),
				q = n("./src/reddit/routes/profileComments/index.ts"),
				H = n("./src/reddit/endpoints/me/index.ts"),
				W = n("./src/reddit/helpers/pageActionLoginRedirect.ts");
			var V = {
					action: e => async (t, n, s) => {
						let {
							apiContext: r
						} = s;
						const {
							rest: o
						} = e.params, {
							queryParams: a
						} = e, c = await Object(H.a)(r());
						if (!(c.ok && c.body && c.body.account)) {
							const e = n();
							return void Object(W.a)(t, e)
						}
						const d = c.body.account.displayText,
							l = o ? `/user/${d}/${(e=>e.endsWith("/")?e:`${e}/`)(o)}` : `/user/${d}/`,
							u = Object(v.a)(l, a);
						await t(Object(i.c)(u))
					},
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Nb.PROFILE_ME
					},
					path: ["/user/me", "/user/me/:rest(.*)"]
				},
				Q = n("./src/reddit/routes/profileModSettings/index.ts"),
				K = n("./src/reddit/routes/profileOverview/index.ts"),
				z = n("./src/reddit/routes/profilePosts/index.ts"),
				J = n("./src/reddit/routes/profilePrivate/index.ts"),
				Y = n("./src/server/helpers/canonicalUrl.tsx");
			var Z = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							queryParams: r
						} = e, o = ((e, t, n) => {
							const s = `/user/${e}/${t?Object(Y.a)(t.replace("submitted","posts")):""}`;
							return Object(v.a)(s, n)
						})(n, s, r);
						await t(Object(i.c)(o))
					},
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Nb.PROFILE_REDIRECT
					},
					path: ["/r/u_:profileName", "/r/u_:profileName/:rest(.*)", "/u/:profileName", "/u/:profileName/:rest(.*)"]
				},
				X = n("./src/reddit/routes/profileSnoobuilder/index.ts");
			var $ = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							queryParams: r
						} = e, o = s ? `/user/${n}/posts/${s}` : `/user/${n}/posts`, a = Object(v.a)(o, r);
						t(Object(i.c)(a))
					},
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Nb.PROFILE_REDIRECT
					},
					path: ["/user/:profileName/submitted", "/user/:profileName/submitted/:rest(.*)"]
				},
				ee = n("./src/reddit/routes/publicAccessNetwork/index.ts"),
				te = n("./src/reddit/routes/report/index.ts"),
				ne = n("./src/reddit/routes/searchResults/index.ts"),
				se = n("./src/reddit/routes/settings/index.ts");
			var re = [{
					action: e => async t => {
						const {
							page: n
						} = e.params, s = n && "blocked" === n ? "/settings/privacy" : "/settings/";
						await t(Object(i.c)(s))
					},
					chunk: c.s.EMPTY,
					meta: {
						name: c.Nb.SETTINGS_REDIRECT
					},
					path: "/prefs/:page(deactivate|blocked)?"
				}, {
					action: () => async e => {
						await e(Object(i.c)("/settings/profile"))
					},
					chunk: c.s.EMPTY,
					meta: {
						name: c.Nb.SETTINGS_REDIRECT
					},
					path: ["/user/:username/about/edit", "/user/:username/about/edit/privacy"]
				}],
				oe = n("./src/reddit/routes/subreddit/index.ts"),
				ae = n("./src/reddit/routes/subredditLeaderboard/index.ts"),
				ie = n("./src/reddit/routes/subredditWiki/index.ts"),
				ce = n("./src/reddit/routes/talk/index.ts"),
				de = n("./src/reddit/routes/topic/index.ts");
			const le = [r.a, o.a, a.b, d, l.a, u.a, p.a, V, Z, $, ...s.a, ...m.a, f, ...E.a, P.a, B.a, D.b, U.b, ce.b, g.c, F, G, y.a, C.a, x.a, R.a, L.a, ...A, O, ..._.a, M.a, w.a, k.c, N.a, j.a, q.a, Q.a, K.a, z.a, X.a, J.a, ee.a, ...se.a, ...re, ne.a, ...ie.a, de.a, oe.b, ae.a, S.a, te.a, ...h];
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
						Object(p.P)(t()) || await e(Object(d.t)())
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
						name: r.Nb.META_ARBITRUM_POINTS_MIGRATION_PAGE
					},
					path: ["/web/points-migration/"]
				},
				g = {
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
						name: r.Nb.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
						isResponsive: !0
					},
					path: [b.b, b.a, "/vault/", "/web/community-points/"]
				},
				f = {
					action: c.a,
					chunk: r.s.META_MEMBERSHIP_PAYWALL_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "MembershipPaywallPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), n.e("MembershipPaywallPage")]).then(n.bind(null, "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx")),
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
						name: r.Nb.META_MEMBERSHIP_PAYWALL_PAGE
					},
					path: ["/web/special-membership/:subredditName", "/web/membership/:subredditName"]
				},
				v = e => async (t, n) => {
					const s = Object(m.a)(e.queryParams);
					Object(p.P)(n()) || await t(Object(d.t)()), s && setTimeout(async () => {
						await t(Object(o.c)(`/r/${encodeURIComponent(s.subreddit)}/`)), u.d.spBurnLinks(n()) && t(Object(a.h)(l.a.CRYPTO_BURN_POINTS, s))
					}, 0)
				}, O = {
					action: v,
					chunk: r.s.EMPTY,
					exact: !0,
					meta: {
						name: r.Nb.META_VAULT_BURN
					},
					path: ["/vault/burn"]
				};
			t.a = [h, g, f, O]
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("ModQueuePages")]).then(n.bind(null, "./src/reddit/pages/ModQueuePages/index.tsx")),
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
					action: Object(i.a)(() => n.e("ModQueue").then(n.bind(null, "./src/reddit/actions/pages/modQueue/index.ts")).then(e => e.modQueuePageRequested)),
					chunk: a.s.MODQUEUE_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: a.Nb.MODQUEUE_PAGES
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
			const l = Object.keys(a.fc).map(e => a.fc[e]).join("|"),
				u = [a.fc.Awards],
				m = u.join("|"),
				p = e => `${e}about/scheduledposts`,
				b = e => `${e}about/eventposts`,
				h = e => `${e}about/predictions`,
				g = Object(o.a)({
					resolved: {},
					chunkName: () => "ModerationPages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/pages/ModHub/index.tsx")),
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
				f = ["/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(revisions|wikibanned|wikicontributors)", "/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(edit|create|settings|revisions)/:wikiPageName+", "/r/:subredditName/about/:pageName(wiki)/:wikiPageName*"];
			let v = ["/r/:subredditName/about", `/r/:subredditName/about/:pageName(${l})`, `/user/:profileName/about/:pageName(${m})`, ...f];
			v = Object(i.b)(v);
			const O = e => !!Object(d.h)(e, {
					path: "/r/:subredditName/about"
				}) || !!Object(d.h)(e, {
					path: "/:countryCode([a-z]{2})/r/:subredditName/about"
				}) || !!Object(d.h)(e, {
					path: "/:countryCode([a-z]{2})/:languageCode([a-z]{2})/r/:subredditName/about"
				}),
				y = {
					action: Object(c.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/actions/pages/moderationPages/index.ts")).then(e => e.moderationPageRequested)),
					chunk: a.s.MODERATION_PAGES,
					component: g,
					exact: !0,
					meta: {
						name: a.Nb.MODERATION_PAGES
					},
					path: v,
					prefetches: [a.s.SUBREDDIT]
				};
			t.a = y
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/pages/Multireddit/index.tsx")),
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
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/pages/multireddit/index.ts")).then(e => e.multiredditRequested)),
					chunk: a.s.MULTIREDDIT,
					component: c,
					exact: !0,
					meta: {
						name: a.Nb.MULTIREDDIT
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
						name: r.Nb.NOTIFICATIONS_INBOX
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("PostDraft")]).then(n.bind(null, "./src/reddit/pages/PostDraft/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("PostDraft")]).then(n.bind(null, "./src/reddit/actions/pages/postDraft.ts")).then(e => e.postDraftRequested)),
					chunk: r.s.POST_DRAFT,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.POST_DRAFT
					},
					path: a,
					prefetches: [r.s.POST_DRAFT]
				};
			t.a = c
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
						name: r.Nb.PREDICTIONS,
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/pages/ProfileComments/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/actions/pages/profileComments/index.ts")).then(e => e.profileCommentsRequested)),
					chunk: r.s.PROFILE_COMMENTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.PROFILE_COMMENTS
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
						name: r.Nb.PROFILE_MODERATION
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileOverview~ProfilePosts"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/pages/ProfileOverview/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileOverview~ProfilePosts"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/actions/pages/profileOverview/index.ts")).then(e => e.profileOverviewRequested)),
					chunk: r.s.PROFILE_OVERVIEW,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.PROFILE_OVERVIEW
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ProfileOverview~ProfilePosts"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/pages/ProfilePosts/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ProfileOverview~ProfilePosts"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePosts.ts")).then(e => e.profilePostsRequested)),
					chunk: r.s.PROFILE_POSTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.PROFILE_POSTS
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfilePrivate")]).then(n.bind(null, "./src/reddit/pages/ProfilePrivate/index.tsx")),
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
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ProfileOverview~ProfilePosts"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePrivate/index.ts")).then(e => e.profilePrivateRequested)),
					chunk: a.s.PROFILE_PRIVATE,
					component: d,
					exact: !0,
					meta: {
						name: a.Nb.PROFILE_PRIVATE
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/pages/ProfileSnoobuilder/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/actions/pages/profileSnoobuilder.ts")).then(e => e.profileSnoobuilderRequested)),
					chunk: r.s.PROFILE_SNOOBUILDER,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.PROFILE_SNOOBUILDER
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
					importAsync: () => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("PublicAccessNetwork")]).then(n.bind(null, "./src/reddit/pages/PublicAccessNetwork/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("PublicAccessNetwork")]).then(n.bind(null, "./src/reddit/actions/publicAccessNetwork/page.ts")).then(e => e.publicAccessNetworkRequested)),
					chunk: r.s.PUBLIC_ACCESS_NETWORK,
					component: a,
					exact: !0,
					meta: {
						name: r.Nb.PUBLIC_ACCESS_NETWORK
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
						name: r.Nb.REPORT
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/pages/SearchResults/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~d9e7ab4c"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/actions/pages/search/searchResultsRequested.ts")).then(e => e.searchResultsRequested)),
					chunk: r.s.SEARCH_RESULTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.SEARCH_RESULTS
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
			const c = Object.keys(a.cc).map(e => a.cc[e]).join("|"),
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
						name: a.Nb.SETTINGS
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
						name: a.Nb.USER_DATA_REQUEST
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
						name: r.Nb.SUBREDDIT_LEADERBOARD,
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
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("ModerationPages~SubredditWiki"), n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/pages/SubredditWiki/index.tsx")),
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
						name: o.Nb.SUBREDDIT_WIKI
					},
					path: u
				}, b = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("ModerationPages~SubredditWiki"), n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/actions/pages/subredditWiki/index.ts")).then(e => e.subredditWikiPageRequested)),
					chunk: o.s.SUBREDDIT_WIKI,
					component: d,
					exact: !0,
					meta: {
						name: o.Nb.SUBREDDIT_WIKI
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
						name: r.Nb.TALK
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("Topic")]).then(n.bind(null, "./src/reddit/pages/Topic/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("Topic")]).then(n.bind(null, "./src/reddit/actions/pages/topic.ts")).then(e => e.topicPageRequested)),
					chunk: r.s.TOPIC,
					component: a,
					exact: !0,
					meta: {
						name: r.Nb.TOPIC
					},
					prefetches: [r.s.COMMENTS_PAGE, r.s.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/selectors/accountManager/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return w
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
				experimentName: d.qd
			}), e => e === d.wd.Enabled);
			var h = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				g = n("./src/reddit/selectors/experiments/magicLink.ts"),
				f = n("./src/reddit/selectors/experiments/moreRepliesSignup.ts"),
				v = n("./src/reddit/actions/modal.ts"),
				O = n("./src/reddit/selectors/accountManager/modalData.ts"),
				y = n("./src/reddit/selectors/meta.ts");
			const C = Object(a.a)(p.f, y.b, O.a, (e, t, n) => e && "DE" === t && n === v.a.Report),
				x = Object(a.a)(e => Object(m.c)(e, {
					experimentEligibilitySelector: C,
					experimentName: d.Yd
				}), e => e === d.ie.Enabled);
			var E = n("./src/lib/getParsedUserAgent/index.ts");
			const P = Object(a.a)(e => Object(m.c)(e, {
				experimentEligibilitySelector: e => Object(E.g)(e.meta.userAgent) && Object(p.f)(e),
				experimentName: d.Se
			}), e => e === d.ef.Enabled);
			var j = n("./src/reddit/selectors/experiments/utils.ts"),
				_ = n("./src/reddit/selectors/responsiveSettings.ts");
			const S = Object(a.c)({
					frontpageSignupVariant: l.a,
					googleOneTapVariant: u.b,
					magicLinkVariant: g.a,
					moreRepliesSignupVariant: e => Object(j.a)(Object(f.b)(e)),
					ssoLoginLinkVariant: e => Object(m.c)(e, {
						experimentEligibilitySelector: e => !Object(p.e)(e),
						experimentName: d.Ue
					}),
					blockingInterstitialVariant: h.d
				}),
				k = Object(a.c)({
					isGoogleSsoGisEnabled: b,
					isMoreRepliesSignupEnabled: f.a,
					isNetzDGComplianceEnabled: x,
					isSafariOneTapEnabled: P,
					isBlockingInterstitialEnabled: h.b
				}),
				w = Object(a.a)((e, t) => t.path, (e, t) => t.uiMode, e => Object(O.c)(e), O.a, _.a, y.i, S, k, (e, t, n, a, l, u, m, p) => {
					const {
						frontpageSignupVariant: b,
						googleOneTapVariant: h,
						ssoLoginLinkVariant: g,
						magicLinkVariant: f,
						moreRepliesSignupVariant: v,
						blockingInterstitialVariant: O
					} = m, {
						isGoogleSsoGisEnabled: y,
						isMoreRepliesSignupEnabled: C,
						isNetzDGComplianceEnabled: x,
						isSafariOneTapEnabled: E,
						isBlockingInterstitialEnabled: P
					} = p;
					let j = `${o.a.accountManagerOrigin}${e}`;
					if (j = Object(i.a)(j, {
							experiment_d2x_2020ify_buttons: "enabled"
						}), g && (j = Object(i.a)(j, {
							[`experiment_${d.Ue}`]: g
						})), y && (j = Object(i.a)(j, {
							[`experiment_${d.qd}`]: "enabled"
						})), C && (j = Object(i.a)(j, {
							[`experiment_${d.Pd}`]: v
						})), x && (j = Object(i.a)(j, {
							[`experiment_${d.Yd}`]: d.ie.Enabled,
							thing_id: n
						})), j = Object(i.a)(j, {
							experiment_d2x_onboarding: "enabled"
						}), E && (j = Object(i.a)(j, {
							[`experiment_${d.Se}`]: "enabled"
						})), e === c.c.GoogleOneTap) return Object(i.a)(j, {
						[d.tb]: h
					});
					if (P && (j = Object(i.a)(j, {
							[`experiment_${d.xb}`]: O
						})), b && (j = Object(i.a)(j, {
							[d.oc]: b,
							uiMode: t
						})), f && (j = Object(i.a)(j, {
							[`experiment_${d.Ld}`]: f
						})), l && (j = Object(i.a)(j, {
							mweb_responsive_settings: "treatment"
						})), u) {
						const e = Object(s.isoLocaleToR2Language)(u);
						u !== r.DEFAULT_LOCALE && e && (j = Object(i.a)(j, {
							lang: e
						}))
					}
					return e === c.c.Index || e === c.c.ChangePassword ? j : j = Object(i.a)(j, {
						actionSource: a
					})
				})
		},
		"./src/reddit/selectors/accountManager/modalData.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			}));
			const s = e => e.accountManagerModalData.actionSource,
				r = e => e.accountManagerModalData.redirectUrl,
				o = e => e.accountManagerModalData.thingId
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
			var i = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
		"./src/reddit/selectors/experiments/d2xSeoLightboxExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/meta.ts");
			const c = Object(s.a)(e => Object(o.c)(e, {
				experimentEligibilitySelector: e => Object(i.g)(e) && Object(a.f)(e),
				experimentName: r.Wb
			}), e => e === r.hb.Enabled)
		},
		"./src/reddit/selectors/experiments/econ/meta.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(r.a)(s.Md)
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
					experimentEligibilitySelector: o.P,
					experimentName: s.bd
				});
				return !(!t || Object(s.Bf)(t))
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
				return g
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts"),
				c = n("./src/reddit/selectors/meta.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const l = Object(s.a)(d.Y, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return !n || Object(o.A)(n)
				}, c.c, (e, t, n) => !e && t && !n),
				u = Object(s.a)((e, t) => Object(a.c)(e, {
					experimentEligibilitySelector: e => l(e, t),
					experimentName: r.oc,
					throttledVariants: {
						[r.pd.CurrentThrottled]: r.oc
					}
				}), i.a),
				m = e => e === r.pd.CurrentThrottled,
				p = e => e === r.pd.CurrentThrottled || e === r.pd.CurrentUnthrottled || e === r.pd.CurrentUnthrottledCopy || e === r.pd.NewPopUnthrottledCopy,
				b = e => e === r.pd.NewPopUnthrottledCopy,
				h = e => e === r.pd.NewPageUnthrottledCopy || e === r.pd.NewPageUnthrottledCopyFields,
				g = e => e === r.pd.NewPageUnthrottledCopyFields
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
					experimentName: r.Db,
					experimentEligibilitySelector: a.e
				}), e => e === r.W.Enabled),
				c = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Eb,
					experimentEligibilitySelector: a.e
				}), e => e === r.X.Enabled),
				d = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Fb,
					experimentEligibilitySelector: a.e
				}), e => e === r.Y.Enabled),
				l = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Gb,
					experimentEligibilitySelector: a.e
				}), e => e === r.Z.Enabled),
				u = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Ib,
					experimentEligibilitySelector: a.e
				}), e => e === r.bb.Enabled),
				m = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Hb,
					experimentEligibilitySelector: a.e
				}), e => e === r.ab.Enabled)
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
					experimentName: r.Pd,
					throttledVariants: {
						[r.Td.ThrottledDaily]: r.Ud.Daily,
						[r.Td.ThrottledWeekly]: r.Ud.Weekly
					}
				}),
				d = Object(s.a)(c, e => !!Object(i.a)(e))
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
						experimentName: s.ve
					}) === s.fd
				},
				i = e => {
					if (Object(o.a)(e)) return !1;
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.ue
					}) === s.fd
				},
				c = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.le
					}) === s.fd
				},
				d = e => {
					if (Object(o.a)(e)) return !1;
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.ke
					}) === s.fd
				}
		},
		"./src/reddit/selectors/muted.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				r = n("./src/reddit/models/SubredditModeration/index.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/pages/modHub/index.ts");
			Object(o.a)({
				pages: {
					modHub: a.a
				}
			});
			const i = [],
				c = Object(s.a)((e, t) => {
					let {
						subredditId: n
					} = t;
					const s = e.pages.modHub.muted.userOrder[n];
					return s ? s.map(t => e.pages.modHub.muted.models[n][t]) : i
				}),
				d = (e, t) => {
					let {
						subredditId: n
					} = t;
					const s = Object(r.e)(n);
					return !!e.pages.modHub.muted.api.pending[s]
				},
				l = e => !!e.pages.modHub.muted.search.api.pending,
				u = e => e.pages.modHub.muted.search.result,
				m = e => {
					var t, n, s;
					return null === (s = null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.modHub) || void 0 === n ? void 0 : n.muted) || void 0 === s ? void 0 : s.inContext
				},
				p = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.pages.modHub.muted.loadMore[n]
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
		"./src/reddit/selectors/removalReasons.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = (e, t) => {
					let {
						subredditId: n
					} = t;
					if (e.features.removalReasons.reasonOrder[n]) {
						return e.features.removalReasons.reasonOrder[n].map(t => e.features.removalReasons.models[t])
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
				i = e => {
					let {
						pageLayer: t
					} = e;
					return t && t.locationState || a
				},
				c = Object(s.a)((e, t) => i(t), e => e.fromPage && e.fromPage.subredditName),
				d = Object(s.a)((e, t) => i(t), e => e.fromPage && e.fromPage.routeName),
				l = e => {
					let {
						pageLayer: t
					} = e;
					return t && t.locationState && t.locationState.searchSwitcherType
				},
				u = Object(s.a)(d, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return Object(o.B)(n)
				}, (e, t) => t && (e === r.Nb.COMMENTS || e === r.Nb.SUBREDDIT))
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
			Object(s.a)(i.Cb, e => !(!e || !e.length));
			const c = Object(s.a)(i.C, e => !e),
				d = Object(s.a)(i.Cb, e => e && e.find(e => e === o.a.Apple)),
				l = Object(s.a)(i.Cb, e => !(!e || !e.includes(o.a.Google))),
				u = Object(s.a)(a.a, e => !!e && [r.b, r.d, r.e, r.g].includes(e))
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
			e.exports = JSON.parse('{"id":"36e10bfb5d5e"}')
		},
		"./src/redditGQL/operations/NotificationInboxFeedSlimmed.json": function(e) {
			e.exports = JSON.parse('{"id":"916e9e9be5e0"}')
		},
		"./src/redditGQL/operations/PerformEconAdminAction.json": function(e) {
			e.exports = JSON.parse('{"id":"de8b0fb0be5d"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		},
		"./src/redditGQL/operations/UpdateInboxActivitySeenState.json": function(e) {
			e.exports = JSON.parse('{"id":"85d656894a08"}')
		}
	},
	[
		["./src/reddit/index.tsx", "runtime~Reddit", "vendors~Governance~ModListing~Reddit~Subreddit", "vendors~Chat~Governance~Reddit", "vendors~Reddit~StandalonePostPage", "Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e", "Reddit~RpanListingUnit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPos~93b34f9d", "Governance~ModListing~Reddit~ReportFlow~Subreddit", "Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3", "Chat~Governance~Reddit", "ModListing~Reddit~Subreddit", "Governance~Reddit", "AuthorHovercard~Reddit"]
	]
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit.3e5e1d131d5788fc1cae.js.map