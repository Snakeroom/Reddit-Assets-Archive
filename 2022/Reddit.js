// https://www.redditstatic.com/desktop2x/Reddit.fc7b26e9e3f233dc7b17.js
// Retrieved at 3/28/2022, 8:10:04 PM by Reddit Dataminer v1.0.0
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
				o = n("./node_modules/@r/google-tag-manager/node_modules/uuid/index.js"),
				r = function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
					return t.default = e, t
				}(n("./node_modules/@r/frames/compiled.js"));
			var a = "gtm-" + (0, o.v4)(),
				i = !1,
				c = [],
				l = function() {
					var e = document.getElementById(a);
					return e && e.contentWindow ? e : null
				},
				d = t.getLocation = function() {
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
					var n = l();
					n && i ? (t && r.postMessage(n.contentWindow, "data.gtm", t), r.postMessage(n.contentWindow, "event.gtm", {
						event: e
					})) : function(e, t) {
						c.push({
							eventName: e,
							payload: t
						})
					}(e, t)
				},
				m = function() {
					if (l() && i) {
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
					o = e.payload;
				if (t)
					if (n) {
						r.listen("gtm"), r.receiveMessageOnce("loaded.gtm", (function() {
							i = !0, r.stopListening("gtm")
						}));
						var c = document.createElement("iframe");
						c.style.display = "none", c.id = a, c.name = JSON.stringify(s({
							referrer: document.referrer
						}, d(), o)), c.src = n + "?id=" + t, c.onload = m, document.body.appendChild(c)
					} else console.warn("GTM#setup: No `jailUrl` specified, skipping.");
				else console.warn("GTM#setup: No `containerId` specified, skipping.")
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/index.js": function(e, t, n) {
			var s = n("./node_modules/@r/google-tag-manager/node_modules/uuid/v1.js"),
				o = n("./node_modules/@r/google-tag-manager/node_modules/uuid/v4.js"),
				r = o;
			r.v1 = s, r.v4 = o, e.exports = r
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js": function(e, t) {
			for (var n = [], s = 0; s < 256; ++s) n[s] = (s + 256).toString(16).substr(1);
			e.exports = function(e, t) {
				var s = t || 0,
					o = n;
				return o[e[s++]] + o[e[s++]] + o[e[s++]] + o[e[s++]] + "-" + o[e[s++]] + o[e[s++]] + "-" + o[e[s++]] + o[e[s++]] + "-" + o[e[s++]] + o[e[s++]] + "-" + o[e[s++]] + o[e[s++]] + o[e[s++]] + o[e[s++]] + o[e[s++]] + o[e[s++]]
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js": function(e, t, n) {
			(function(t) {
				var n, s = t.crypto || t.msCrypto;
				if (s && s.getRandomValues) {
					var o = new Uint8Array(16);
					n = function() {
						return s.getRandomValues(o), o
					}
				}
				if (!n) {
					var r = new Array(16);
					n = function() {
						for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), r[t] = e >>> ((3 & t) << 3) & 255;
						return r
					}
				}
				e.exports = n
			}).call(this, n("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/v1.js": function(e, t, n) {
			var s = n("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js"),
				o = n("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js"),
				r = s(),
				a = [1 | r[0], r[1], r[2], r[3], r[4], r[5]],
				i = 16383 & (r[6] << 8 | r[7]),
				c = 0,
				l = 0;
			e.exports = function(e, t, n) {
				var s = t && n || 0,
					r = t || [],
					d = void 0 !== (e = e || {}).clockseq ? e.clockseq : i,
					u = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					m = void 0 !== e.nsecs ? e.nsecs : l + 1,
					p = u - c + (m - l) / 1e4;
				if (p < 0 && void 0 === e.clockseq && (d = d + 1 & 16383), (p < 0 || u > c) && void 0 === e.nsecs && (m = 0), m >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				c = u, l = m, i = d;
				var b = (1e4 * (268435455 & (u += 122192928e5)) + m) % 4294967296;
				r[s++] = b >>> 24 & 255, r[s++] = b >>> 16 & 255, r[s++] = b >>> 8 & 255, r[s++] = 255 & b;
				var h = u / 4294967296 * 1e4 & 268435455;
				r[s++] = h >>> 8 & 255, r[s++] = 255 & h, r[s++] = h >>> 24 & 15 | 16, r[s++] = h >>> 16 & 255, r[s++] = d >>> 8 | 128, r[s++] = 255 & d;
				for (var g = e.node || a, f = 0; f < 6; ++f) r[s + f] = g[f];
				return t || o(r)
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/v4.js": function(e, t, n) {
			var s = n("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js"),
				o = n("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js");
			e.exports = function(e, t, n) {
				var r = t && n || 0;
				"string" == typeof e && (t = "binary" == e ? new Array(16) : null, e = null);
				var a = (e = e || {}).random || (e.rng || s)();
				if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t)
					for (var i = 0; i < 16; ++i) t[r + i] = a[i];
				return t || o(a)
			}
		},
		"./node_modules/lodash/_arrayShuffle.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_copyArray.js"),
				o = n("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e) {
				return o(s(e))
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
				o = n("./node_modules/lodash/values.js");
			e.exports = function(e) {
				return s(o(e))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, t) {
				var n = -1,
					o = e.length,
					r = o - 1;
				for (t = void 0 === t ? o : t; ++n < t;) {
					var a = s(n, r),
						i = e[a];
					e[a] = e[n], e[n] = i
				}
				return e.length = t, e
			}
		},
		"./node_modules/lodash/map.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayMap.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				r = n("./node_modules/lodash/_baseMap.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (a(e) ? s : r)(e, o(t, 3))
			}
		},
		"./node_modules/lodash/shuffle.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayShuffle.js"),
				o = n("./node_modules/lodash/_baseShuffle.js"),
				r = n("./node_modules/lodash/isArray.js");
			e.exports = function(e) {
				return (r(e) ? s : o)(e)
			}
		},
		"./src/chat/helpers/dom.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			const s = e => t => {
					if (t.preventDefault(), e && "function" == typeof e) return e(t)
				},
				o = e => t => {
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
				return o
			}));
			var s = n("./node_modules/react/index.js");

			function o(e, t) {
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
					const o = n.length,
						r = this.listenerMap[e].length;
					return this.listenerMap[e] = this.listenerMap[e].filter(e => !n.includes(e)), this.listenerMap[e].length - r === o
				}
				publish(e) {
					return !(!this.listenerMap[e] || !this.listenerMap[e].length) && (this.listenerMap[e].forEach(e => e()), !0)
				}
			}
		},
		"./src/lib/safeBadgeUpdate.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/lib/throwDevError.ts");
			const o = e => {
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
				o = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts");
			var i = n("./src/reddit/helpers/redesignOptoutCookie/index.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/makeRequest/index.ts");
			async function m(e, t) {
				return await Object(u.b)({
					method: d.jb.POST,
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
					apiContext: d
				} = s;
				(await
					function(e) {
						return Object(o.a)(Object(r.a)(e, [a.a]), {
							endpoint: `${e.apiUrl}/api/leave_redesign_beta`,
							method: "post",
							type: "json"
						})
					}(d())).ok ? (Object(i.b)(), await m(d(), !0), e && window.location.reload()) : (m(d(), !1), t(Object(c.f)({
					kind: l.b.Error,
					text: "Sorry, something went wrong. Try Opting out again."
				})))
			}, b = () => async (e, t, n) => {
				let {
					apiContext: c
				} = n;
				Object(i.a)(),
					function(e) {
						Object(o.a)(Object(r.a)(e, [a.a]), {
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
				return le
			})), n.d(t, "t", (function() {
				return de
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
				return Ce
			})), n.d(t, "k", (function() {
				return ye
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
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/makeDraftKey/index.ts"),
				i = n("./src/reddit/actions/changeUsername.ts"),
				c = n("./src/reddit/actions/login.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/postCreation/editorContent.ts"),
				m = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				p = n("./src/reddit/actions/shortcuts/utils.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				g = n("./src/reddit/constants/adEvents.ts"),
				f = n("./src/reddit/constants/localStorage.ts"),
				v = n("./src/redditGQL/operations/CommentToxicity.json"),
				O = n("./src/lib/makeApiRequest/index.ts"),
				C = n("./src/lib/makeGqlRequest/index.ts"),
				y = n("./src/lib/omitHeaders/index.ts"),
				x = n("./src/reddit/constants/headers.ts"),
				E = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				P = n("./src/reddit/helpers/genericServerError/index.ts"),
				j = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				_ = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				S = n("./src/reddit/models/PostCreationForm/index.ts"),
				k = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				M = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const w = (e, t, n, s) => {
					let o, r;
					if (s === S.i.MARKDOWN) o = n.text, r = null;
					else {
						o = null;
						let e = null;
						n.rteState && (e = h.a.toRichTextJSON(n.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(C.a)(e, {
						...v,
						variables: {
							subredditName: t,
							markdown: o,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				N = async (e, t, n, s, r) => {
					const a = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (r === S.i.MARKDOWN) a.text = n.text;
					else {
						a.text = null;
						let e = null;
						n.rteState && (e = h.a.toRichTextJSON(n.rteState).document), a.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(O.a)(Object(y.a)(e, [x.a]), {
						method: o.jb.POST,
						endpoint: Object(E.a)(Object(k.a)(Object(M.a)(`${e.apiUrl}/api/comment.json`))),
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
				z = n("./src/reddit/selectors/commentSelector.ts"),
				K = n("./src/reddit/selectors/platform.ts"),
				J = n("./src/reddit/selectors/posts.ts"),
				Y = n("./src/reddit/selectors/user.ts"),
				Z = n("./src/reddit/actions/comment/index.ts"),
				X = n("./src/reddit/actions/comment/constants.ts");
			const $ = Object(r.a)(X.k),
				ee = e => {
					let {
						hasFocus: t,
						draftKey: n
					} = e;
					return async (e, s) => {
						const o = s();
						if (!!o.features.comments.drafts[n])
							if (Object(Y.R)(o) && t) {
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
				te = Object(r.a)(X.I),
				ne = Object(r.a)(X.K),
				se = Object(r.a)(X.J),
				oe = Object(r.a)(X.H),
				re = async (e, t, n, s) => {
					const o = s.ok && s.body,
						r = o && o.comment && o.comment.id;
					await G.f(e, n, t, r)
				}, ae = "Toxicity_Warning__Modal", ie = (e, t, n, s, o, r) => async (a, i, c) => {
					let {
						gqlContext: d
					} = c;
					const u = i(),
						m = Object(K.e)(u);
					let p = "";
					if (m && (p = m.name), L.d.enableToxicityWarning(u)) {
						if (!(await w(d(), p, s, o))) return void a(Object(l.i)(ae))
					}
					a(le(e, t, n, s, o, r))
				}, ce = e => e.rteState ? h.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, le = (e, t, n, r, a, i, c) => async (u, h, f) => {
					let {
						apiContext: v
					} = f;
					u(Object(l.g)(ae));
					const O = h(),
						C = O.features.comments.submit.pending[n];
					if (!O.user.account || C) return;
					u(te({
						draftKey: n,
						draft: r
					}));
					const y = O.user.account.displayText,
						x = r.commentMode;
					let E;
					if (c ? (E = await Object(R.i)(v(), e, r, y), u(Object(m.a)({
							streamId: e,
							level: E.body.automuteLevel
						}))) : E = await N(v(), e, r, y, x), E.ok) {
						let s;
						s = E.body, u(ne({
							...s,
							headCommentId: Object(Q.w)(O, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const o = Object(J.G)(h(), {
							postId: e
						});
						u(Object(d.z)(o, g.a.CommentSubmitted))
					} else {
						E.error && E.error.type === o.Kb && G.h(O, ce(r), e);
						const t = E.error && E.error.fields && E.error.fields[0] ? E.error.fields[0].msg : s.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u(oe({
							draftKey: n,
							error: E.error
						})), u(Object(b.f)({
							duration: b.a,
							kind: V.b.Error,
							text: t
						}))
					}
					re(h(), t, a, E).then(() => E.ok && a === S.i.RICH_TEXT ? Object(D.b)(D.a.CommentComposer) : void 0), i || Object(p.d)()
				}, de = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const {
						parentCommentId: r,
						commentsPageKey: a,
						parentCommentDepth: i,
						draftKey: c,
						formData: d,
						editorMode: u
					} = e, m = n(), p = Object(K.e)(m);
					let b = "";
					if (p && (b = p.name), L.d.enableToxicityWarning(m)) {
						if (!(await w(o(), b, d, u))) return void t(Object(l.i)(ae))
					}
					t(ue({
						commentsPageKey: a,
						draftKey: c,
						parentCommentDepth: i,
						parentCommentId: r,
						formData: d,
						editorMode: u
					}))
				}, ue = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const {
						parentCommentId: a,
						commentsPageKey: i,
						parentCommentDepth: c,
						draftKey: d,
						formData: u,
						editorMode: m
					} = e;
					t(Object(l.g)(ae));
					const b = n(),
						h = b.features.comments.submit.pending[d];
					if (!b.user.account || h) return;
					t(te({
						draftKey: d,
						draft: u
					}));
					const g = b.user.account.displayText,
						f = u.commentMode,
						v = await N(r(), a, u, g, f);
					if (v.ok) t(se({
						...v.body,
						parentCommentId: a,
						commentsPageKey: i,
						draftKey: d,
						depth: c + 1
					}));
					else {
						if (v.error && v.error.type === o.Kb) {
							const e = Object(z.b)(b, {
								commentId: a
							});
							if (!e) return;
							G.h(b, ce(u), e.postId, a)
						}
						t(oe({
							draftKey: d,
							error: v.error
						}))
					}
					re(n(), i, m, v), Object(p.d)()
				}, me = Object(r.a)(X.q), pe = Object(r.a)(X.y), be = Object(r.a)(X.p), he = Object(r.a)(X.l), ge = (Object(r.a)(X.g), Object(r.a)(X.m)), fe = (Object(r.a)(X.t), (e, t, n) => async (o, r, a) => {
					let {
						apiContext: i
					} = a;
					const c = e === S.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(H.G)(t)) o(ge({
						editorMode: e,
						draftKey: n,
						content: c ? H.i : ""
					})), o(Object(u.c)(e));
					else {
						o(Object(u.b)(n));
						const r = await Object(A.a)(i(), e, c ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							o(Object(u.a)(n)), o(ge({
								editorMode: e,
								draftKey: n,
								content: t
							})), o(Object(u.c)(e))
						} else o(Object(u.a)(n)), o(Object(b.f)({
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
					return async (e, o) => {
						const r = o(),
							d = Object(a.a)(q.c.replyToComment, n);
						if (!Object(Y.P)(o())) return e(Object(c.j)()), void e(Object(l.k)({
							actionSource: l.a.Reply,
							redirectUrl: Object(Q.m)(o(), {
								commentId: n
							})
						}));
						const u = r.features.comments.replyFormOpen[t],
							m = u && u[n];
						if ((m || u && s) && (Object.keys(u).forEach(n => u[n] && e(be({
								parentCommentId: n,
								commentsPageKey: t
							}))), m)) return;
						let p = "",
							b = null;
						const h = r.user.prefs.commentMode,
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
						const f = r.features.comments.drafts[d];
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
							}, Object(Y.R)(r)) {
							const s = me({
								parentCommentId: n,
								commentsPageKey: t,
								draftKey: d,
								formData: v
							});
							e(Object(i.f)(s))
						} else e(me({
							parentCommentId: n,
							commentsPageKey: t,
							draftKey: d,
							formData: v
						}))
					}
				}, Oe = e => async t => {
					t(Object(Z.p)(e)), t(Ee(e))
				}, Ce = e => {
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
				}, ye = (e, t) => n => n(he({
					draftKey: e,
					formData: t
				})), xe = Object(r.a)(X.s), Ee = e => {
					let {
						commentId: t,
						commentMode: n,
						commentsPageKey: s,
						draftKey: o,
						text: r
					} = e;
					return async (e, a) => {
						const i = a();
						i.user.account && (G.c(i), e(xe({
							commentId: t,
							commentsPageKey: s,
							draftKey: o,
							formData: {
								text: r,
								commentMode: n,
								rteState: null,
								draftType: q.c.edit,
								hasFocus: !0
							}
						})))
					}
				}, Pe = Object(r.a)(X.D), je = Object(r.a)(X.C), _e = Object(r.a)(X.E), Se = Object(r.a)(X.h), ke = e => {
					let {
						id: t,
						commentsPageKey: n,
						depth: s,
						draftKey: r,
						formData: a
					} = e;
					return async (e, s, i) => {
						let {
							apiContext: c
						} = i;
						const l = s();
						if (!l.user.account) return;
						e(Pe({
							draftKey: r
						})), G.d(l);
						const d = l.user.account.displayText || "",
							u = a.commentMode,
							m = await (async (e, t, n, s, r, a) => {
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
								return Object(O.a)(Object(y.a)(e, [x.a]), {
									endpoint: Object(E.a)(Object(M.a)(Object(k.a)(`${e.apiUrl}/api/editusertext`))),
									method: o.jb.POST,
									data: i
								}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
									...e,
									ok: !1,
									error: Object(_.a)(e)
								} : {
									...e,
									body: {
										comment: Object(j.a)(e.body.json.data.things[0].data, r)
									}
								} : {
									...e,
									body: {
										comment: Object(j.a)(e.body, r)
									}
								} : {
									...e,
									error: e.error || Object(P.a)()
								})
							})(c(), t, 0, a, d, u);
						if (m.ok) {
							const s = m.body;
							e(_e({
								commentId: t,
								commentsPageKey: n,
								draftKey: r
							})), e(Object(Z.i)({
								[t]: {
									...s.comment
								}
							}))
						} else e(je({
							draftKey: r,
							error: m.error
						}))
					}
				}, Me = Object(r.a)(X.A), we = Object(r.a)(X.z), Ne = Object(r.a)(X.B), Ie = (e, t) => async (n, s, r) => {
					let {
						apiContext: a
					} = r;
					const i = s();
					n(Me({
						id: e
					})), G.a(e, i);
					const c = await ((e, t) => Object(O.a)(Object(y.a)(e, [x.a]), {
						endpoint: Object(E.a)(`${e.apiUrl}/api/del`),
						method: o.jb.POST,
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
					})) : n(we({
						id: e,
						error: c.error
					}))
				}, Te = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const r = !n().features.comments.models[e].sendReplies;
					t(Object(Z.i)({
						[e]: {
							sendReplies: r
						}
					})), (await Object(T.q)(o(), e, r)).ok || t(Object(Z.i)({
						[e]: {
							sendReplies: !r
						}
					}))
				}, Ae = (e, t) => async (n, o, r) => {
					let {
						gqlContext: a
					} = r;
					var i, c, l, d, u, m;
					n(Object(Z.c)());
					const p = e => Object(b.f)(Object(b.e)(e, V.b.Error));
					if (((null === (c = null === (i = o().pages) || void 0 === i ? void 0 : i.comments) || void 0 === c ? void 0 : c.followed) || []).length === f.a) n(p(s.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const r = t === B.a.FOLLOWED,
							i = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(Z.n)(i)), (await ((e, t) => Object(C.a)(e, {
								...I,
								variables: {
									input: t
								}
							}))(a(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(U.wb)(null !== (u = null === (d = null === (l = o().pages) || void 0 === l ? void 0 : l.comments) || void 0 === d ? void 0 : d.followed) && void 0 !== u ? u : [], null === (m = o().user.account) || void 0 === m ? void 0 : m.id);
							const e = r ? s.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
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
				return o
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			const s = "ECON_MANAGEMENT_FETCH_ENTITY_TYPES_SUCCESS",
				o = "ECON_MANAGEMENT_FETCH_ENTITY_TYPES_FAILED",
				r = "ECON_MANAGEMENT_SEARCH_ENTITY_DATA_STARTED",
				a = "ECON_MANAGEMENT_SEARCH_ENTITY_DATA_SUCCESS",
				i = "ECON_MANAGEMENT_SEARCH_ENTITY_DATA_FAILED",
				c = "ECON_MANAGEMENT_FETCH_ASSOCIATED_DATA_SUCCESS"
		},
		"./src/reddit/actions/economics/econManagement/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "a", (function() {
				return x
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/economics/econManagement/constants.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/EconAdminPanelQuery.json"),
				c = n("./src/redditGQL/operations/PerformEconAdminAction.json");
			var l = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/reddit/routes/econManagement/index.ts"),
				u = n("./src/reddit/selectors/econManagement.ts"),
				m = n("./src/reddit/selectors/user.ts");
			const p = Object(s.a)(o.c),
				b = Object(s.a)(o.b),
				h = Object(s.a)(o.e),
				g = Object(s.a)(o.f),
				f = Object(s.a)(o.d),
				v = Object(s.a)(o.a),
				O = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const o = t(),
						c = Object(m.k)(o);
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
					} catch (d) {
						e(b()), e(Object(r.f)({
							duration: r.a,
							kind: l.b.Error,
							text: d.message
						}))
					}
				}, C = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const c = n(),
						u = Object(m.k)(c);
					if (u && u.isEmployee) {
						if ("undefined" != typeof window) {
							const t = `?${d.b}=${e}`;
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
							})(o(), e);
							t(g(n))
						} catch (p) {
							t(f()), t(Object(r.f)({
								duration: r.a,
								kind: l.b.Error,
								text: p.message
							}))
						}
					}
				}, y = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const c = n(),
						d = Object(m.k)(c);
					if (!d || !d.isEmployee) return;
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
							const o = s.body.data.econAdminPanel.response;
							return JSON.parse(o)
						})(o(), p.prefixedId, e);
						t(v({
							entity: n,
							type: e
						}))
					} catch (b) {
						t(Object(r.f)({
							duration: r.a,
							kind: l.b.Error,
							text: b.message
						}))
					}
				}, x = (e, t, n) => async (s, o, i) => {
					let {
						gqlContext: d
					} = i;
					const p = o(),
						b = Object(m.k)(p);
					if (b && b.isEmployee && Object(u.b)(p)) try {
						await (async (e, t, n, s) => {
							const o = s ? {
								params: s
							} : {};
							if (!(await Object(a.a)(e, {
									...c,
									variables: {
										input: {
											name: n,
											args: JSON.stringify({
												entityRef: t,
												...o
											})
										}
									}
								})).ok) throw new Error(`Unable to perform ${n} on ${t} with ${JSON.stringify(o)}`)
						})(d(), e, t, n), s(Object(r.f)({
							duration: r.a,
							kind: l.b.SuccessCommunityGreen,
							text: `${t} executed successfully for ${e}`
						}))
					} catch (h) {
						s(Object(r.f)({
							duration: r.a,
							kind: l.b.Error,
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
				o = n("./src/lib/makeRequest/index.ts"),
				r = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");
			var i = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/economics/me/constants.ts");
			const l = Object(i.a)(c.a),
				d = Object(i.a)(c.b),
				u = Object(i.a)(c.c),
				m = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const i = e && e.includeMemberships || !1,
						c = e && e.forceFetch || !1,
						d = n();
					if (!d.economics.me.fetched || i && !d.economics.me.data.specialMemberships || c) {
						const e = await
						function(e, t) {
							return Object(a.a)(e, {
								method: "get",
								endpoint: `${r.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(o(), i);
						if (e.ok) {
							const n = e.body;
							i && !n.specialMemberships && (n.specialMemberships = {}), t(l(n))
						}
					}
				}, p = () => async (e, t) => {
					const n = t(),
						r = n.economics.me.data;
					if (!r) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(d());
						const t = `https://${r.pointsDocsBaseUrl}v1.json?web`,
							n = await Object(o.b)({
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
				o = n.n(s),
				r = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/notificationBanner.ts"),
				i = n("./src/reddit/actions/preferences.ts"),
				c = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				l = n("./src/reddit/components/Settings/modalIds.ts"),
				d = n("./src/reddit/helpers/localStorage/index.ts"),
				u = n("./src/reddit/selectors/emailCollection.ts");
			const m = o()(d.c),
				p = () => async (e, t) => {
					const n = t();
					m(), Object(u.a)(n) && (await e(Object(i.A)()), Object(u.a)(t()) && e(Object(a.d)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, b = () => async (e, t) => {
					const n = t();
					Object(u.a)(n) && (Object(d.b)(), e(Object(a.c)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, h = () => async (e, t) => {
					e(Object(r.g)(l.h))
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
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/models/EmailSettings/index.ts"),
				d = n("./src/reddit/models/Toast/index.ts");
			const u = e => async (t, n, o) => {
				let {
					apiContext: r
				} = o;
				switch (e) {
					case l.a.Success:
						t(Object(c.f)({
							kind: d.b.SuccessCommunity,
							text: s.fbt._("Email verification complete", null, {
								hk: "vp6R2"
							})
						}));
						break;
					case l.a.AlreadyVerified:
						t(Object(c.f)({
							kind: d.b.SuccessCommunity,
							text: s.fbt._("Your email address has already been verified.", null, {
								hk: "7ro41"
							})
						}));
						break;
					case l.a.WrongUser:
						return void t(Object(c.f)({
							kind: d.b.Error,
							text: s.fbt._("The email verification link you've followed is for a different user account. Please log out and click the email verification link again to verify your email.", null, {
								hk: "1NrK5a"
							})
						}));
					default:
						t(Object(c.f)({
							kind: d.b.Error,
							text: s.fbt._("Something went wrong.", null, {
								hk: "JbBLl"
							})
						}))
				}
			}, m = e => async (t, n, s) => {
				let {
					apiContext: c
				} = s;
				const d = await ((e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					method: o.jb.POST,
					endpoint: `${e.apiUrl}/api/v1/verify_email/${t}`,
					data: {}
				}))(c(), e);
				if (d.ok && d.body && d.body.success) return l.a.Success;
				switch (d.body.reason) {
					case l.a.AlreadyVerified:
						return l.a.AlreadyVerified;
					case l.a.WrongUser:
						return l.a.WrongUser;
					default:
						return l.a.Error
				}
			}
		},
		"./src/reddit/actions/framedGild/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/actions/gold/modals.ts"),
				o = n("./src/reddit/actions/users.ts"),
				r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = e => async (t, n) => {
				const i = n(),
					c = e.params.thingId;
				t(Object(s.c)({
					correlationId: Object(r.e)(r.a.GildingFlow),
					thingId: c
				})), Object(a.P)(i) || await t(o.t());
				const l = n();
				if (!Object(a.P)(l)) return t(Object(s.f)())
			}
		},
		"./src/reddit/actions/framedModal/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/actions/users.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const r = e => async (e, t) => {
				const n = t();
				Object(o.P)(n) || await e(s.t());
				const r = t();
				if (!Object(o.P)(r)) throw new Error("Failed to login")
			}
		},
		"./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./src/lib/env/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/sentry/index.ts"),
				a = n("./src/reddit/endpoints/gold/productCatalog/old.index.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				c = n("./src/lib/initializeClient/installReducer.ts"),
				l = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(c.a)({
				features: {
					avatar: l.a
				}
			});
			const d = Object(o.a)(i.s);
			class SpecialEventsError extends Error {
				constructor() {
					super(...arguments), this.response = null
				}
			}
			const u = () => async (e, t, n) => {
				let {
					gqlContext: o
				} = n;
				try {
					const t = await Object(a.d)(o());
					if (!t.ok) {
						const e = new SpecialEventsError("Got bad response in GQL call for special events");
						throw e.response = t, e
					} {
						const n = t.body.data.econSpecialEvents;
						await e(d(n))
					}
				} catch (i) {
					Object(s.b)() || console.error(i), r.c.withScope(e => {
						var t, n;
						e.setExtra("response", i.response), e.setExtra("status", null === (t = i.response) || void 0 === t ? void 0 : t.status), e.setExtra("graphql_error", null === (n = i.response) || void 0 === n ? void 0 : n.error), r.c.captureException(i)
					})
				}
			}
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
				return K
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				a = (n("./src/reddit/actions/notificationSettingsLayout/index.ts"), n("./src/reddit/actions/notificationsInbox/constants.ts")),
				i = n("./src/reddit/actions/tabBadging.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/lib/makeGqlRequest/index.ts"),
				d = n("./src/redditGQL/operations/BlockAwarder.json");
			var u = (e, t) => Object(l.a)(e, {
					...d,
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
			var C = n("./src/redditGQL/operations/DeleteInboxNotifications.json");
			n("./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts");
			var y = n("./src/redditGQL/operations/UpdateInboxActivitySeenState.json");
			var x = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				E = n("./src/reddit/helpers/trackers/inbox.ts"),
				P = n("./src/reddit/models/Badge/index.ts"),
				j = n("./src/reddit/models/NotificationInbox/index.ts"),
				_ = n("./src/reddit/models/Toast/index.ts"),
				S = n("./src/reddit/selectors/appBadges.ts"),
				k = (n("./src/reddit/selectors/notificationPrefs.ts"), n("./src/reddit/selectors/notificationsInbox.tsx"));
			const M = Object(o.a)(a.e),
				w = Object(o.a)(a.b),
				N = Object(o.a)(a.a),
				I = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					var r, a;
					const i = n(),
						d = Object(k.a)(i);
					t(M());
					const u = await ((e, t) => Object(l.a)(e, {
						...h,
						variables: t
					}))(o(), e);
					if (null === (a = null === (r = u.error) || void 0 === r ? void 0 : r.fields) || void 0 === a ? void 0 : a.length) return t(N({
						error: u.error
					})), void t(Object(c.d)());
					const m = u && u.body,
						p = A(m);
					if (null === d) {
						const e = Object(k.f)(i);
						t(L(p.nodes, e.length))
					}
					t(w(p))
				}, T = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					var o, r;
					const a = await (e => Object(l.a)(e, {
						...g
					}))(s());
					if (null === (r = null === (o = a.error) || void 0 === o ? void 0 : o.fields) || void 0 === r ? void 0 : r.length) return;
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
						o = s && s.pageInfo;
					return {
						nodes: (s && s.edges).map(e => e.node),
						pageInfo: o
					}
				}, R = e => {
					var t, n;
					return {
						nodes: null === (n = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.notificationInbox) || void 0 === n ? void 0 : n.elements.edges.map(e => e.node)
					}
				}, L = (e, t) => async (n, s) => {
					const o = s(),
						r = Object(k.a)(o),
						a = ((e, t) => {
							let n, s = 0;
							const o = new Date,
								r = o.getDate(),
								a = o.getMonth(),
								i = o.getFullYear();
							for (; s < e.length && !n;) {
								const o = e[s],
									c = new Date(o.sentAt),
									l = c.getDate(),
									d = c.getMonth(),
									u = c.getFullYear();
								if ((l !== r || d !== a || u !== i) && !n) {
									n = ((t || 0) + s).toString()
								} else s++
							}
							return n
						})(e, t);
					a && a !== r && n(D({
						index: a
					}))
				}, D = Object(o.a)(a.g), F = (Object(o.a)(a.h), Object(o.a)(a.f)), U = e => async (t, n, o) => {
					let {
						gqlContext: r
					} = o;
					const a = [e];
					if ((await ((e, t) => Object(l.a)(e, {
							...C,
							variables: {
								input: t
							}
						}))(r(), {
							notificationIds: a
						})).ok) {
						t(F({
							id: e
						}));
						const o = Object(k.f)(n());
						t(L(o)), t(Object(c.f)(Object(c.e)(s.fbt._("Notification hidden", null, {
							hk: "1jfPqO"
						}), _.b.SuccessCommunityGreen)))
					} else t(Object(c.f)(Object(c.e)(s.fbt._("Failed to hide notification, please try again.", null, {
						hk: "fL7uB"
					}), _.b.Error)))
				}, G = (e, t) => async (n, o, r) => {
					let {
						gqlContext: a
					} = r;
					if (!e) return;
					(await Object(x.b)(a(), e, {
						isSubredditUpdatesInterestingPostEnabled: !0,
						isUpdateFromSubredditEnabled: !0
					})).ok ? (t && t(), n(Object(c.f)(Object(c.e)(s.fbt._("Success! Undone hiding notifications from this community.", null, {
						hk: "1na0NP"
					}), _.b.SuccessCommunityGreen)))) : n(Object(c.f)(Object(c.e)(s.fbt._("Failed to undo hiding notifications, please try again.", null, {
						hk: "4jo7Pf"
					}), _.b.Error)))
				}, B = (e, t) => async (n, o, r) => {
					let {
						gqlContext: a
					} = r;
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
				}, q = e => async (t, n, o) => {
					let {
						apiContext: r
					} = o;
					if (!e) return;
					(await ((e, t) => Object(p.a)(Object(b.a)(e, [f.a]), {
						endpoint: Object(v.a)(`${e.apiUrl}/api/sendreplies`),
						method: m.jb.POST,
						data: {
							id: t
						}
					}))(r(), e)).ok ? t(Object(c.f)(Object(c.e)(s.fbt._("Success! You won't see updates on this in the future", null, {
						hk: "wtDa4"
					}), _.b.SuccessCommunityGreen))) : t(Object(c.f)(Object(c.e)(s.fbt._("Failed to turn off updates on this, please try again", null, {
						hk: "1zhpEy"
					}), _.b.Error)))
				}, H = e => async (t, n, o) => {
					let {
						gqlContext: r
					} = o;
					if (!e) return;
					(await u(r(), {
						awardingId: e
					})).ok ? t(Object(c.f)(Object(c.e)(s.fbt._("Success! Awarder has been blocked", null, {
						hk: "2D5PUk"
					}), _.b.SuccessCommunityGreen))) : t(Object(c.f)(Object(c.e)(s.fbt._("Failed to block awarder, please try again", null, {
						hk: "2dxeA8"
					}), _.b.Error)))
				}, W = Object(o.a)(a.d), V = (e, t) => async (n, s, o) => {
					let a, {
						apiContext: c
					} = o;
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
								const t = Object(r.e)({
									count: e,
									key: P.c.ActivityTab
								});
								n(Object(r.a)(t)), n(Object(i.e)())
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
					const o = (new Date).toLocaleDateString(),
						a = await ((e, t) => Object(l.a)(e, {
							...y,
							variables: {
								input: t
							}
						}))(s(), {
							lastSentAt: o
						});
					if (a.ok) {
						const t = a.body,
							n = t && t.data && t.data.updateInboxActivitySeenState && t.data.updateInboxActivitySeenState.badgeIndicators;
						n && (e(Object(r.a)(n)), e(Object(i.d)()))
					}
				}, z = Object(o.a)(a.c), K = () => async (e, t, n) => {
					let {
						apiContext: o
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
							}))(o(), [O.Activity, O.Messages])).ok) {
							const t = Object(r.e)({
									count: 0,
									key: P.c.MessageTab
								}),
								n = Object(r.e)({
									count: 0,
									key: P.c.ActivityTab
								});
							e(Object(r.a)({
								...t,
								...n
							})), e(z({
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
				o = n("./src/reddit/actions/platform.ts"),
				r = n("./src/reddit/actions/users.ts"),
				a = n("./src/reddit/selectors/user.ts"),
				i = n("./src/reddit/actions/login.ts");
			t.a = () => async (e, t) => {
				e(Object(o.m)({
					title: Object(s.a)()
				})), await e(Object(r.t)()), Object(a.P)(t()) || e(Object(i.i)())
			}
		},
		"./src/reddit/actions/pages/econManagement.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/reddit/actions/economics/econManagement/index.ts"),
				r = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/routes/econManagement/index.ts"),
				c = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				await e(Object(a.t)());
				const n = t(),
					l = Object(c.P)(n),
					d = Object(c.M)(n);
				l && d || await e(Object(s.c)("/")), e(Object(r.m)({
					title: "Econ control panel"
				})), await e(Object(o.c)());
				n.platform.currentPage.queryParams[i.b]
			}
		},
		"./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				o = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				r = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				e(Object(r.m)({
					title: Object(s.d)()
				})), Object(i.P)(t()) || await e(Object(a.t)()), await e(Object(o.b)()).then(() => {
					if (t().economics.me.data) return e(Object(o.a)())
				})
			}
		},
		"./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/makeListingKey/index.ts"),
				o = n("./src/reddit/actions/economics/helpers/async.ts"),
				r = n("./src/reddit/actions/pages/subreddit.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/subreddit.ts"),
				c = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				const n = t().platform.currentPage;
				if (n && n.routeMatch && n.routeMatch.match) {
					const l = (n.routeMatch.match.params || {}).subredditName;
					if (l) {
						const n = [],
							d = t();
						Object(c.P)(d) || n.push(e(Object(a.t)()));
						const u = Object(s.a)(l, null);
						n.push(e(Object(r.subredditDataRequested)(u, l, {}))), await Promise.all(n);
						const m = Object(i.D)(t(), l);
						await e(Object(o.a)({
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
				o = n("./src/reddit/actions/platform.ts"),
				r = n("./src/reddit/actions/subreddit.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				e(Object(o.m)({
					title: Object(s.j)()
				})), await e(Object(a.t)()), Object(i.P)(t()) && await e(Object(r.q)())
			}
		},
		"./src/reddit/actions/pages/talk.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				o = n("./src/reddit/actions/platform.ts");
			t.a = () => async e => {
				e(Object(o.m)({
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
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/endpoints/post/convert.ts"),
				i = n("./src/reddit/helpers/localStorage/index.ts"),
				c = n("./src/reddit/helpers/trackers/postComposer.ts"),
				l = n("./src/reddit/models/PostCreationForm/index.ts"),
				d = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(o.a)(m.G),
				b = Object(o.a)(m.p),
				h = Object(o.a)(m.Q),
				g = (e, t, n) => async (o, i, g) => {
					let {
						apiContext: v
					} = g;
					c.m(i(), t);
					const O = t === l.i.MARKDOWN,
						C = t === l.i.RICH_TEXT,
						y = m.k;
					if (O && Object(d.G)(n)) return o(h({
						editorKey: e,
						editorMode: l.i.MARKDOWN,
						content: ""
					})), void o(f(t));
					if (C && !n) return o(h({
						editorKey: e,
						editorMode: l.i.RICH_TEXT,
						content: d.i
					})), void o(f(t));
					o(p(y));
					const x = await Object(a.a)(v(), t, O ? JSON.stringify(n) : n);
					x.ok ? (o(b(y)), o(h({
						editorKey: e,
						editorMode: t,
						content: x.body.output
					})), o(f(t))) : (o(b(y)), o(Object(r.f)({
						duration: r.a,
						kind: u.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, f = e => async (t, n) => {
					const o = Object(i.l)();
					if (o >= 3) return;
					const a = n().user.prefs.useMarkdown ? l.i.MARKDOWN : l.i.RICH_TEXT;
					if (e === a) return;
					const c = e === l.i.MARKDOWN ? s.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : s.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(r.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: s.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: u.b.SuccessCommunity,
						text: c
					})), Object(i.sb)(o + 1)
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
				o = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				r = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const a = Object(s.a)(r.r),
				i = Object(s.a)(r.F),
				c = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const c = await Object(o.a)(r(), e);
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
				o = n("./src/reddit/actions/comment/authoring.ts"),
				r = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/constants/shortcuts.ts"),
				c = n("./src/reddit/helpers/trackers/lightbox.ts"),
				l = n("./src/reddit/helpers/trackers/shortcuts.ts"),
				d = n("./src/reddit/selectors/activeModal.ts"),
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
					if (f && "true" === f.contentEditable && v && O) n(o.a({
						parentCommentId: v,
						commentsPageKey: O
					})), Object(p.a)(v);
					else if (Object(d.b)(g)) Object(p.b)(i.b), n(Object(r.i)(Object(d.b)(g)));
					else if (g.toaster[0]) Object(p.b)(i.b), n(Object(a.g)(g.toaster[0].id));
					else if (g.shortcuts.namespace === i.d.Lightbox && g.platform.currentPage) {
						const e = g.platform.currentPage.locationState.closeLocation;
						e && (Object(p.b)(i.b), n(Object(s.b)(e)))
					}
					const {
						activePostId: C
					} = g.shortcuts;
					e(t && C ? c.b(C, "close", !0) : l.a)
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
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/lib/makeActionCreator/index.ts"),
				b = n("./src/reddit/actions/sso/constants.ts");
			const h = Object(p.a)(b.a),
				g = Object(p.a)(b.b);
			var f = n("./src/reddit/actions/survey/index.ts"),
				v = n("./src/reddit/actions/toaster.ts"),
				O = n("./src/reddit/components/TrackingHelper/index.tsx"),
				C = n("./src/reddit/constants/accountManager.ts"),
				y = n("./src/reddit/constants/history.ts"),
				x = n("./src/reddit/constants/modals.ts"),
				E = n("./src/reddit/constants/parameters.ts"),
				P = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				j = n("./src/reddit/helpers/history/index.ts"),
				_ = n("./src/reddit/helpers/trackers/blockingInterstitial.ts"),
				S = n("./src/reddit/helpers/trackers/moreReplies.ts"),
				k = n("./src/reddit/helpers/trackers/onboarding.ts"),
				M = n("./src/reddit/icons/svgs/Close/index.tsx"),
				w = n("./src/reddit/models/Sso/index.ts"),
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
			const q = d.a.iframe("IFrame", B.a),
				H = d.a.button("CloseButton", B.a),
				W = d.a.wrapped(M.a, "Close", B.a),
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
				z = e => {
					let {
						data: t,
						origin: n
					} = e;
					return t && t.success && (t.type === C.a.ChangePassword || t.type === C.a.Close || t.type === C.a.CreateAccount || t.type === C.a.GoogleOneTapDisplayed || t.type === C.a.GoogleOneTapFlowFailed || t.type === C.a.GoogleOneTapSkipped || t.type === C.a.Login || t.type === C.a.PreferenceStatus || t.type === C.a.Register || t.type === C.a.Resize || t.type === C.a.ShowStep || t.type === C.a.SSOLinkFail || t.type === C.a.SSOLinkSuccess || t.type === C.a.SSOUnlinkFail || t.type === C.a.SSOUnlinkSuccess || t.type === C.a.Subscribe || t.type === C.a.TwoFactorChanged) && n === s.a.accountManagerOrigin
				},
				K = {
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
						const t = e === w.a.Apple ? x.a.LINK_APPLE_SSO : x.a.LINK_GOOGLE_SSO;
						this.props.onSSOLinkSuccess(o.fbt._("Account connected", null, {
							hk: "2X2Y2n"
						}), e, t)
					}, this.handleUnlinkSSOSuccess = e => {
						const t = e === w.a.Apple ? x.a.UNLINK_APPLE_SSO : x.a.UNLINK_GOOGLE_SSO;
						this.props.onSSOUnlinkSuccess(o.fbt._("Account disconnected", null, {
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
						if (this.iframeRef.current && e.source === this.iframeRef.current.contentWindow && z(e))
							if (t.type === C.a.CreateAccount) this.isAccountCreated = !0;
							else if (t.type === C.a.Close) this.closedByUser();
						else if (t.type === C.a.Subscribe) this.onSubscribe(t.subscriptions || t.subredditIds);
						else if (t.type === C.a.Login) this.onLogIn();
						else if (t.type === C.a.ChangePassword) this.onChangePassword();
						else if (t.type === C.a.Resize) {
							if (t.payload && this.trackResizing) {
								const e = t.payload;
								e.height && e.width && this.setIframeStyles(e)
							}
						} else if (t.type === C.a.TwoFactorChanged) this.props.onTwoFactorChanged();
						else if (t.type === C.a.SSOLinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === C.a.SSOLinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleLinkSSOSuccess(e)
						} else if (t.type === C.a.SSOUnlinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === C.a.SSOUnlinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleUnlinkSSOSuccess(e)
						} else t.type === C.a.GoogleOneTapDisplayed ? this.props.isLoggedIn || (this.setIframeStyles({
							visibility: "visible"
						}), this.onGoogleOneTapUIViewed()) : t.type === C.a.GoogleOneTapFlowFailed ? this.props.isLoggedIn || this.onGoogleOneTapFlowFailed(t.message) : t.type === C.a.GoogleOneTapSkipped ? this.props.isLoggedIn || (this.props.onGoogleOneTapSkipped && this.props.onGoogleOneTapSkipped(t.reason), this.close()) : t.type === C.a.ShowStep ? this.onShowStep(t.step) : t.type === C.a.PreferenceStatus ? this.onEmailDigestsStatus(t.successfullySet) : this.onSignUp(t.numberSubredditsSelected, t.subredditIds)
					}, this.onSubscribe = e => {
						this.props.onSubscriptionsChanged && this.props.onSubscriptionsChanged(e || [])
					}, this.onLogIn = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : (Object(j.a)(y.b.JustLoggedIn, !0), window.location.reload())
					}, this.onChangePassword = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : window.location.reload()
					}, this.onSignUp = (e, t) => {
						const {
							redirectUrl: n
						} = this.props;
						let s = "";
						s = n || window.location.href, this.isSignupSurveyTriggerSource() && (this.isSignupModalSuccessful = !0), this.redirectTo(s, !0)
					}, this.onShowStep = e => {
						this.currentStep = e, e === C.b.Subscribe && (this.trackResizing = !1, this.setIframeStyles({
							height: void 0,
							width: void 0
						})), this.props.onShowScreen && this.props.onShowScreen(e)
					}, this.onGoogleOneTapFlowFailed = e => {
						this.close(), this.props.showToast(e || o.fbt._("Something went wrong. Please try again later", null, {
							hk: "3TdJZE"
						}), N.b.Error)
					}, this.onEmailDigestsStatus = e => {
						e ? this.props.showToast(o.fbt._("Changes saved", null, {
							hk: "6bifV"
						}), N.b.SuccessCommunity) : this.props.showToast(o.fbt._("Something went wrong. Please try again later", null, {
							hk: "1M3Z2N"
						}), N.b.Error)
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.onGoogleOneTapUIViewed && this.props.onGoogleOneTapUIViewed()
					}, this.redirectTo = function(t) {
						let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
						const s = {
							[E.p]: "true"
						};
						n && (s[E.w] = "true"), e.isSignupModalSuccessful && (s[E.x] = "true"), window.location.replace(Object(l.a)(t, s))
					}, this.closedByUser = () => {
						const {
							isBlockingInterstitialEnabled: e,
							isDismissSurveyEnabled: t,
							isMoreRepliesSignupEnabled: n,
							onDismissSignupTrigger: s,
							sendEvent: o
						} = this.props;
						if (this.currentStep) {
							const e = K[this.currentStep];
							e && o(Object(k.q)(e))
						}
						this.isSignupSurveyTriggerSource() && (this.isSignupModalDismissed = !0), n && o(Object(S.b)()), e && o(Object(_.a)()), this.close(), this.isSignupModalDismissed && t && s()
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
					this.props.path !== e.path && e.path === C.c.GoogleOneTap && this.iframeRef.current && this.setIframeStyles({
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
						path: o
					} = this.props, {
						iframeStyles: r
					} = this.state, i = (o === C.c.Index || o === C.c.Register) && (t === u.a.UserProfile || t === u.a.FeedPost || t === u.a.Comments || t === u.a.FeedScroll || t === u.a.CommentsScroll) && s, c = this.props.showCloseButton && !i;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(q, {
						className: n,
						innerRef: this.iframeRef,
						src: e,
						style: r,
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
				return o
			}));
			const s = (e, t) => ({
					[e.showDeprecated]: !(!t.browserInfo || !t.browserInfo.isDeprecated),
					[e.showFPR]: !!t.showFPR,
					[e.showSuspended]: !!t.showSuspended,
					[e.offline]: !!t.showOffline,
					[e.navExperiment]: !!t.navExperiment
				}),
				o = (e, t) => ({
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
				return Vm
			}));
			var s, o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/isEqual.js"),
				a = n.n(r),
				i = n("./node_modules/lodash/omit.js"),
				c = n.n(i),
				l = n("./node_modules/lodash/throttle.js"),
				d = n.n(l),
				u = n("./node_modules/react/index.js"),
				m = n.n(u),
				p = n("./node_modules/react-redux/es/index.js"),
				b = n("./node_modules/react-router/esm/react-router.js"),
				h = n("./node_modules/react-router-redux/es/index.js"),
				g = n("./src/reddit/contexts/NavbarExp.ts"),
				f = n("./node_modules/reselect/es/index.js"),
				v = n("./src/lib/classNames/index.ts"),
				O = n("./src/lib/constants/index.ts"),
				C = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				y = n("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				x = n("./src/lib/fastdom/index.ts"),
				E = n("./src/lib/FocusTrap/index.ts"),
				P = n("./src/lib/isEqualWithoutKey/index.ts"),
				j = n("./src/lib/isSimpleClick/index.ts"),
				_ = n("./src/reddit/actions/header.ts"),
				S = n("./src/reddit/actions/survey/index.ts"),
				k = n("./src/reddit/components/EmailCollection/Banner/Loader.ts"),
				M = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				w = n("./node_modules/polished/dist/polished.es.js"),
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
							itemWidth: o,
							shouldHandleMouseClicks: r
						} = this.props, {
							pageNumber: a
						} = this.state, i = n === s.Fade ? {
							opacity: t === a ? 1 : 0
						} : {
							marginLeft: 0 === t ? -o * a : void 0
						};
						return m.a.createElement("div", {
							className: Object(v.a)(q.a.item, q.a[n]),
							key: `item-${t}`,
							style: {
								...i,
								backgroundImage: `url("${G.a.assetPath}/${e.img}")`,
								width: o
							},
							onClick: r ? this.handleItemClick : void 0
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
				z = I.a.wrapped(H, "Carousel", V.a),
				K = I.a.div("Phone", V.a),
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
					}, m.a.createElement(K, {
						className: V.a.android
					}, m.a.createElement(z, {
						animationType: s.Fade,
						className: V.a.android,
						delay: 2500,
						items: X,
						itemTime: 5e3,
						itemWidth: 240
					}), m.a.createElement(J, {
						src: Y
					})), m.a.createElement(K, {
						className: V.a.iphone
					}, m.a.createElement(z, {
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
				oe = I.a.span("Disclaimer", ne.a),
				re = I.a.a("Link", ne.a);
			var ae = e => m.a.createElement(se, {
					className: e.className
				}, m.a.createElement(re, {
					href: "https://www.redditinc.com/"
				}, o.fbt._("about", null, {
					hk: "4n6gdA"
				})), m.a.createElement(re, {
					href: "https://www.redditinc.com/advertising"
				}, o.fbt._("advertise", null, {
					hk: "3M40BX"
				})), m.a.createElement(re, {
					href: "http://www.redditblog.com/"
				}, o.fbt._("blog", null, {
					hk: "iEUEu"
				})), m.a.createElement(re, {
					href: "https://www.redditinc.com/careers"
				}, o.fbt._("careers", null, {
					hk: "1nRiZW"
				})), m.a.createElement(re, {
					href: "https://www.reddithelp.com"
				}, o.fbt._("help", null, {
					hk: "3CJ8k2"
				})), m.a.createElement(re, {
					href: "https://www.redditinc.com/press"
				}, o.fbt._("press", null, {
					hk: "x8wb0"
				})), m.a.createElement(re, {
					href: "https://www.reddit.com/coins"
				}, o.fbt._("Reddit coins", null, {
					hk: "4EwVXk"
				})), m.a.createElement(re, {
					href: "https://redditgifts.com/"
				}, o.fbt._("Reddit gifts", null, {
					hk: "1XCLXF"
				})), m.a.createElement(re, {
					href: "https://www.reddit.com/premium"
				}, o.fbt._("Reddit premium", null, {
					hk: "1v1E7F"
				})), m.a.createElement(re, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, o.fbt._("User agreement", null, {
					hk: "18j1Xy"
				})), m.a.createElement(re, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, o.fbt._("Mod policy", null, {
					hk: "18VnG9"
				})), m.a.createElement(oe, null, o.fbt._("© 2019 Reddit, Inc. All rights reserved", null, {
					hk: "1AMxtg"
				}))),
				ie = n("./src/reddit/components/FrontpageSignup/Upsell/index.m.less"),
				ce = n.n(ie);
			const le = {
					stiffness: 300,
					damping: 40,
					precision: 1
				},
				de = I.a.div("Container", ce.a),
				ue = I.a.wrapped(T.a, "IFrame", ce.a),
				me = I.a.wrapped(ee, "Images", ce.a),
				pe = I.a.wrapped(ae, "Links", ce.a),
				be = I.a.div("MainContent", ce.a),
				he = I.a.div("MainContentColumn", ce.a),
				ge = I.a.button("NotReady", ce.a),
				fe = I.a.span("NotReadyText", ce.a),
				ve = I.a.wrapped(D.a, "NotReadyIcon", ce.a),
				Oe = Object(C.a)(e => {
					const {
						className: t,
						containerRef: n,
						frontpageSignupVariant: s,
						onCloseClick: r,
						onVisibilityChange: a
					} = e, i = Object(F.a)(e).bodyText;
					return m.a.createElement(M.a, {
						root: "SignupUpsellContainer",
						threshold: .01,
						rootMargin: "0px 0px 0px 0px",
						onChange: a
					}, m.a.createElement(de, {
						className: t,
						innerRef: n
					}, m.a.createElement(be, null, m.a.createElement(he, null, m.a.createElement(me, null, "Images Placeholder")), m.a.createElement(he, null, m.a.createElement(ue, {
						className: Object(v.a)({
							[ce.a.fields]: Object(U.b)(s)
						}),
						path: R.c.Register,
						uiMode: R.d.Embed
					}))), m.a.createElement(ge, {
						onClick: r,
						style: {
							"--frontpagesignup-upsell-text-hover-color": Object(w.i)(.8, i)
						}
					}, m.a.createElement(fe, null, o.fbt._("Not ready to sign up yet?", null, {
						hk: "5RIgO"
					})), m.a.createElement(ve, null)), m.a.createElement(pe, null)))
				});
			class Ce extends m.a.Component {
				componentDidUpdate(e) {
					this.props.scrollTo !== e.scrollTo && window.scrollTo({
						top: this.props.scrollTo
					})
				}
				render() {
					return null
				}
			}
			class ye extends m.a.Component {
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
						return m.a.createElement(Ce, {
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
							scrollTo: Object(N.spring)(s, le)
						}
					}, this.renderScroller))
				}
			}
			var xe = Object(A.c)(ye),
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
				Me = n("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx"),
				we = n("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx"),
				Ne = n("./src/lib/loadWithRetries/index.ts");
			var Ie = Object(Se.a)({
				getComponent: () => Object(Ne.a)(() => n.e("NotificationsPrePromptLoader").then(n.bind(null, "./src/reddit/components/NotificationsPrePrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			const Te = () => null;
			var Ae = Object(Se.a)({
					ErrorComponent: Te,
					getComponent: () => Object(Ne.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"))).then(e => e.default),
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
				ze = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				Ke = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				Je = n("./src/reddit/components/FlairPreview/index.tsx"),
				Ye = n("./src/reddit/components/FlairSearch/index.tsx"),
				Ze = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				Xe = n("./src/reddit/controls/Button/index.tsx"),
				$e = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				et = n("./src/reddit/layout/row/Inline/index.tsx"),
				tt = n("./src/reddit/models/Flair/index.ts"),
				nt = n("./src/reddit/models/User/index.ts"),
				st = n("./src/reddit/selectors/authorFlair.ts"),
				ot = n("./src/reddit/selectors/moderatorPermissions.ts"),
				rt = n("./src/reddit/selectors/telemetry.ts"),
				at = n("./src/reddit/selectors/user.ts"),
				it = n("./src/reddit/selectors/userFlair.ts"),
				ct = n("./src/reddit/components/UserFlairPicker/index.m.less"),
				lt = n.n(ct);
			const dt = e => e.flairModalContext && e.currentUser && Object(nt.e)(e.currentUser) === e.flairModalContext.username,
				ut = e => e.authorFlair || dt(e) && e.userFlairData.applied || null,
				mt = I.a.wrapped(et.a, "Section", lt.a),
				pt = I.a.div("CheckboxText", lt.a);
			class bt extends m.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.track = e => this.props.sendEvent(t => ({
						source: "user_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(rt.jb)(t, this.props.subredditId)
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
						isUserEnabled: o
					} = e.displaySettings, r = this.state.showFlair !== o, a = ut(this.props);
					if (!s.canUserChange) return r;
					const {
						canSave: i,
						reason: c
					} = Object(Ze.b)(n, t, a);
					return !(i || c !== Ze.a.NoChanges || !r) || i
				}
				render() {
					const {
						props: e,
						state: t
					} = this, {
						userFlairData: n,
						subredditId: s,
						flairModalContext: r
					} = e, a = n.permissions.canUserChange, i = n.permissions.canUserChange, c = null == r ? void 0 : r.isOpenedFromAchievementsModal, {
						templates: l,
						templateIds: d
					} = n, u = this.canSave(), p = dt(e);
					return m.a.createElement(Ke.a, null, m.a.createElement(ze.a, {
						onClosePressed: e.closeModal,
						title: o.fbt._("Select your community flair", null, {
							hk: "199vaD"
						})
					}), m.a.createElement(Je.a, {
						flair: t.previewFlair,
						flairTemplateType: tt.d.UserFlair,
						placeholderText: o.fbt._("u/username", null, {
							hk: "2EDH9"
						})
					}), i && m.a.createElement(Ye.a, {
						flair: t.previewFlair,
						flairTemplateType: tt.d.UserFlair,
						subredditId: s,
						templates: l,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), p && m.a.createElement(mt, null, m.a.createElement($e.a, {
						isSelected: t.showFlair,
						onClick: this.onToggleShowFlair,
						text: m.a.createElement(pt, null, o.fbt._("Show my user flair on this community", null, {
							hk: "x9nc9"
						}))
					})), m.a.createElement("div", {
						className: lt.a.buttonsRow
					}, c && m.a.createElement(Xe.t, {
						className: lt.a.goBackButton,
						priority: Xe.c.Plain,
						onClick: e.openAchiementFlairModal
					}, o.fbt._("Go Back", null, {
						hk: "4fisFS"
					})), m.a.createElement("div", {
						className: lt.a.rightSideButtons
					}, a && m.a.createElement(Xe.o, {
						className: lt.a.clearButton,
						onClick: this.onClear
					}, o.fbt._("Clear Flair", null, {
						hk: "23i2at"
					})), m.a.createElement(Xe.l, {
						disabled: !u,
						onClick: this.onApply
					}, o.fbt._("Apply", null, {
						hk: "ZvO9n"
					})))))
				}
			}
			const ht = Object(p.b)(() => Object(f.c)({
				authorFlair: st.b,
				currentUser: at.k,
				flairModalContext: st.c,
				isMod: (e, t) => !!Object(ot.m)(e, t),
				userFlairData: it.d
			}), (e, t) => ({
				activeFlairChanged: (n, s, o, r) => e(Object(Qe.f)(n, s, o, r.username, t.subredditId)),
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
				Ct = n("./src/reddit/selectors/notificationPrefs.ts"),
				yt = n("./src/reddit/selectors/platform.ts"),
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
				isOverlayOpen: yt.i,
				moderatorPermissions: e => {
					const t = Object(yt.c)(e);
					if (t) return e.moderatingSubreddits[t]
				},
				muteContext: Ot.a,
				muteModalIsOpen: Object(ft.b)(Fe.a.MUTE_USER),
				notificationsPrePromptIsOpen: Ct.e,
				removalReasonContext: xt.b,
				removalReasonModalIsOpen: Object(ft.b)(Fe.a.ADD_REMOVAL_REASON),
				subredditId: yt.c,
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
						const t = Object(jt.G)(Fe.a.ALPHA_CONSUMER);
						t && Object(jt.ab)(Fe.a.ALPHA_CONSUMER), (e || t) && Object(jt.Ib)(Fe.a.REDESIGN_MODAL, !0)
					}
					const {
						userHasSeenRedesignModal: e,
						markRedesignModalAsClosed: t
					} = this.props, n = Object(jt.G)(Fe.a.REDESIGN_MODAL);
					!e && n ? t() : e && !n && Object(jt.Ib)(Fe.a.REDESIGN_MODAL, !0)
				}
				componentDidMount() {
					this.conditionalModalCheck(), this.setState({
						domReady: !0
					})
				}
				componentDidUpdate() {
					this.conditionalModalCheck(), Fe.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(_t.a)(), 500) : setTimeout(() => Object(_t.b)(), 500))
				}
				render() {
					const {
						authorContext: e,
						badgePurchaseModalIsOpen: t,
						banContext: n,
						banModalIsOpen: s,
						bladeNightmodeModalIsOpen: o,
						currentBadgePurchase: r,
						muteContext: a,
						muteModalIsOpen: i,
						notificationsPrePromptIsOpen: c,
						removalReasonContext: l,
						removalReasonModalIsOpen: d,
						sendEvent: p,
						subredditId: b,
						toggleBanModal: h,
						toggleMuteModal: g,
						toggleRemovalReasonsModal: f,
						userFlairModalIsOpen: v
					} = this.props, O = (e, t, n) => s => () => p(o => ({
						source: e,
						action: "click",
						noun: s,
						comment: n && Object(rt.i)(o, n),
						post: n && Object(rt.I)(o, n),
						screen: Object(rt.ab)(o),
						subreddit: Object(rt.jb)(o, t)
					}));
					return m.a.createElement(u.Fragment, null, s && n && m.a.createElement(Me.a, {
						contextId: n.contextId,
						subredditId: n.subredditId,
						toggleModal: h,
						trackAddEvent: O("banned", n.subredditId, n.contextId)("add_in_context"),
						trackEventWithName: O("banned", n.subredditId, n.contextId),
						username: n.username
					}), i && a && m.a.createElement(we.a, {
						contextId: a.contextId,
						subredditId: a.subredditId,
						toggleModal: g,
						trackAddEvent: O("muted", a.subredditId, a.contextId)("add_in_context"),
						username: a.username
					}), d && l && m.a.createElement(Ae, {
						itemIds: l.itemIds,
						subredditId: l.subredditId,
						toggleModal: f,
						trackClick: O("removal_reasons", l.subredditId, 1 === l.itemIds.length ? l.itemIds[0] : void 0)
					}), o && b && m.a.createElement(He, {
						subredditId: b
					}), v && e && e.subredditId && m.a.createElement(gt, {
						subredditId: e.subredditId,
						withOverlay: !0
					}), t && r && m.a.createElement(ke, {
						withOverlay: !0,
						productId: r
					}), c && m.a.createElement(Ie, null))
				}
			}
			var Mt = Object(p.b)(St, e => ({
					markRedesignModalAsClosed: () => e(Object(_e.j)()),
					toggleBanModal: () => e(Object(_e.i)(Fe.a.BAN_USER)),
					toggleBladeNightmodeModal: () => e(Object(_e.i)(Fe.a.BLADE_NIGHTMODE)),
					toggleMuteModal: () => e(Object(_e.i)(Fe.a.MUTE_USER)),
					toggleRemovalReasonsModal: () => e(Object(_e.i)(Fe.a.ADD_REMOVAL_REASON))
				}))(Object(A.c)(kt)),
				wt = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
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
						this.props.closeModal(this.props.path), this.props.path === R.c.Register && Object(U.f)(this.props.frontpageSignupVariant) && Tt.a.throttleFeature(Nt.rc), this.props.sendEvent(Object(L.a)(this.subscriptions))
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
						containerSize: o,
						isSSOLinkActionFailedModal: r,
						removeGoogleOneTapStyles: a,
						removeHiddenOverlay: i
					} = this.state, c = Object(U.c)(e) || Object(U.d)(e), l = s === R.c.LinkAppleSSO || s === R.c.LinkGoogleSSO || s === R.c.UnlinkAppleSSO || s === R.c.UnlinkGoogleSSO, d = s === R.c.GoogleOneTap, u = Object(v.a)({
						[Lt.a.small]: c,
						[Lt.a.ssoConfirmPassword]: l,
						[Lt.a.linkActionSSOFail]: r,
						[Lt.a.mResponsive]: t,
						[Lt.a.mGoogleOneTap]: d && !a
					}), p = Object(v.a)({
						[Lt.a.mGoogleOneTap]: d && !a,
						[Lt.a.mHiddenOverlay]: d && !i
					}), b = !c && !r && !t;
					return m.a.createElement(Dt, {
						className: p
					}, m.a.createElement(Ft, {
						className: u,
						style: o || Ut
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
			Object(wt.b)(Fe.a.CHANGE_PASSWORD_MODAL_ID, e => m.a.createElement(Wt, {
				path: R.c.ChangePassword
			})), Object(wt.b)(Fe.a.LOGIN_MODAL_ID, e => m.a.createElement(Wt, {
				path: R.c.Index
			})), Object(wt.b)(Fe.a.ONBOARDING_MODAL_ID, e => m.a.createElement(Wt, {
				path: R.c.Onboarding
			})), Object(wt.b)(Fe.a.ENABLE_TWO_FACTOR, e => m.a.createElement(Wt, {
				path: R.c.EnableTwoFactor
			})), Object(wt.b)(Fe.a.DISABLE_TWO_FACTOR, e => m.a.createElement(Wt, {
				path: R.c.DisableTwoFactor
			})), Object(wt.b)(Fe.a.TWO_FACTOR_BACKUP_CODES, e => m.a.createElement(Wt, {
				path: R.c.TwoFactorBackupCodes
			})), Object(wt.b)(Fe.a.REGISTER_MODAL_ID, e => m.a.createElement(Wt, {
				path: R.c.Register
			})), Object(wt.b)(Fe.a.LINK_APPLE_SSO, e => m.a.createElement(Wt, {
				path: R.c.LinkAppleSSO
			})), Object(wt.b)(Fe.a.LINK_GOOGLE_SSO, e => m.a.createElement(Wt, {
				path: R.c.LinkGoogleSSO
			})), Object(wt.b)(Fe.a.UNLINK_APPLE_SSO, e => m.a.createElement(Wt, {
				path: R.c.UnlinkAppleSSO
			})), Object(wt.b)(Fe.a.UNLINK_GOOGLE_SSO, e => m.a.createElement(Wt, {
				path: R.c.UnlinkGoogleSSO
			})), Object(wt.b)(Fe.a.GOOGLE_ONE_TAP_MODAL_ID, e => m.a.createElement(Wt, {
				path: R.c.GoogleOneTap
			}));
			n("./src/reddit/components/CoinPurchaseModal/async.tsx");
			const Vt = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestPendingModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx")).then(e => e.default)
			});
			Object(wt.b)(Fe.a.CONTRIBUTOR_REQUEST_PENDING, e => m.a.createElement(Vt, {
				withOverlay: !0
			}));
			const Qt = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestRequestModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx")).then(e => e.default)
			});
			Object(wt.b)(Fe.a.CONTRIBUTOR_REQUEST, e => m.a.createElement(Qt, {
				withOverlay: !0
			}));
			const zt = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("RequestToJoinPrivateSubredditModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestToJoinPrivateSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(wt.b)(Fe.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT, e => m.a.createElement(zt, {
				withOverlay: !0
			}));
			const Kt = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CrowdControlModal").then(n.bind(null, "./src/reddit/components/CrowdControlModal/index.tsx")).then(e => e.default)
			});
			Object(wt.b)(Fe.a.CROWD_CONTROL, e => m.a.createElement(Kt, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/Econ/ClaimFreeAwardModal/async.tsx"), n("./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx"), n("./src/reddit/components/Econ/Marketplace/ClaimModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsSuccess/async.tsx"), n("./src/reddit/components/Econ/Prediction/CancelPredictionModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/EndTimeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/PremiumModal/async.tsx"), n("./src/reddit/components/Econ/TopAwardersModal/async.tsx");
			const Jt = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("SubredditPremiumBadgeManagement").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx")).then(e => e.default)
			});
			Object(wt.b)(Fe.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT, e => m.a.createElement(Jt, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Yt = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("SubredditPremiumUploadModal")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/UploadModal/index.tsx")).then(e => e.default)
			});
			Object(wt.b)(Fe.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, e => m.a.createElement(Yt, {
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
			Object(wt.b)(Fe.a.GOLD_GILD_MODAL, e => m.a.createElement(Zt, {
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
			Object(wt.b)(Fe.a.GOLD_GILD_ANIMATION_OVERLAY, e => m.a.createElement(nn, {
				withOverlay: !0,
				className: tn.a.modalBody,
				overlayClassName: tn.a.modalOverlay
			}));
			const sn = Object(Se.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("GoldTargetedOfferModal").then(n.bind(null, "./src/reddit/components/Gold/TargetedOfferModal/index.tsx")).then(e => e.default)
				}),
				on = e => () => {
					e()
				};
			Object(wt.b)(Fe.a.GOLD_TARGETED_OFFER_MODAL, e => m.a.createElement(sn, {
				onOverlayClick: on(e),
				withOverlay: !0
			}));
			const rn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("HarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(wt.b)(Fe.a.HARBERGER_TAX_BANNER_MANAGE, e => m.a.createElement(rn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const an = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("HarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(wt.b)(Fe.a.HARBERGER_TAX_BANNER_PURCHASE, e => m.a.createElement(an, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const cn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CryptoHarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(wt.b)(Fe.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE, e => m.a.createElement(cn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const ln = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CryptoHarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(wt.b)(Fe.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE, e => m.a.createElement(ln, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const dn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("GovernanceReleaseNotesModal")]).then(n.bind(null, "./src/reddit/components/Governance/ReleaseNotesModal/index.tsx")).then(e => e.default)
			});
			Object(wt.b)(Fe.a.GOVERNANCE_RELEASE_NOTES, e => m.a.createElement(dn, {
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/TransactionModals/BurnPointsModal/async.tsx"), n("./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx");
			const un = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceTransferPointsModal").then(n.bind(null, "./src/reddit/components/Governance/TransferPointsModal/index.tsx")).then(e => e.default)
			});
			Object(wt.b)(Fe.a.TRANSFER_POINTS, e => m.a.createElement(un, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const mn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx")).then(e => e.default)
			});
			Object(wt.b)(Fe.a.WALLET_REGISTRATION_MODAL, e => m.a.createElement(mn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const pn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ModToMemberShareModal").then(n.bind(null, "./src/reddit/components/ModToMemberShareModal/index.tsx")).then(e => e.default)
			});
			Object(wt.b)(Fe.a.MOD_TO_MEMBER_SHARE, e => m.a.createElement(pn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const bn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditAddSubredditModal").then(n.bind(null, "./src/reddit/components/MultiredditAddSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(wt.b)(Fe.a.MULTIREDDIT_ADD_SUBREDDIT, e => m.a.createElement(bn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const hn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditCreateModal").then(n.bind(null, "./src/reddit/components/MultiredditCreateModal/index.tsx")).then(e => e.default)
			});
			Object(wt.b)(Fe.a.MULTIREDDIT_CREATE, e => m.a.createElement(hn, {
				onOverlayClick: e,
				withOverlay: !0
			})), Object(wt.b)(Fe.a.MULTIREDDIT_DUPLICATE, e => m.a.createElement(hn, {
				isDuplicateModal: !0,
				onOverlayClick: e,
				withOverlay: !0
			}));
			const gn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditEditModal").then(n.bind(null, "./src/reddit/components/MultiredditEditModal/index.tsx")).then(e => e.default)
			});
			Object(wt.b)(Fe.a.MULTIREDDIT_EDIT, e => m.a.createElement(gn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const fn = () => Promise.all([n.e(5), n.e("OnboardingModal")]).then(n.bind(null, "./src/reddit/components/Onboarding/Modal.tsx")),
				vn = Object(Se.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(Ne.a)(fn).then(e => e.default)
				});
			Object(wt.b)(Fe.a.ONBOARDING_MODAL_D2X, e => m.a.createElement(vn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/async.tsx"), n("./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/async.tsx"), n("./src/reddit/components/PostFlowUpsellModal/async.tsx"), n("./src/reddit/components/PowerupsSidebar/SupportersListModal/async.tsx"), n("./src/reddit/components/PremiumPurchaseModal/Loader.tsx");
			const On = () => null,
				Cn = Object(Se.a)({
					ErrorComponent: On,
					getComponent: () => Object(Ne.a)(() => n.e("GlobalModalContainer").then(n.bind(null, "./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx"))).then(e => e.default),
					LoadingComponent: On
				});
			Object(wt.b)(Fe.a.PINNED_POSTS_LIMIT_REACHED, e => m.a.createElement(Cn, null));
			var yn = n("./src/reddit/components/ShortcutIndexModal/index.m.less"),
				xn = n.n(yn);
			const En = I.a.h2("ColumnLabel", xn.a),
				Pn = I.a.wrapped(et.a, "ColumnWrapper", xn.a),
				jn = I.a.div("Column", xn.a),
				_n = I.a.div("Description", xn.a),
				Sn = I.a.div("Key", xn.a),
				kn = I.a.wrapped(De.l, "ModalMain", xn.a),
				Mn = I.a.wrapped(De.e, "ModalBody", xn.a),
				wn = I.a.wrapped(Xe.l, "PrimaryButton", xn.a),
				Nn = I.a.wrapped(Ue.a, "TextButton", xn.a),
				In = Object(p.b)(null, e => ({
					closeModal: () => e(Object(_e.i)(Fe.a.KEYBOARD_SHORTCUTS))
				})),
				Tn = I.a.wrapped(Object(Re.a)(In(e => m.a.createElement(Mn, {
					onClick: e => e.stopPropagation()
				}, m.a.createElement(De.i, null, m.a.createElement(Ge.a, null, m.a.createElement(De.q, null, o.fbt._("Keyboard Shortcuts", null, {
					hk: "zoWU1"
				})), m.a.createElement(Nn, {
					onClick: e.closeModal
				}, m.a.createElement(De.b, null)))), m.a.createElement(kn, null, m.a.createElement(Pn, null, m.a.createElement(jn, null, m.a.createElement(et.a, null, m.a.createElement(En, null, o.fbt._("Navigation", null, {
					hk: "3zSWEe"
				}))), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Show shortcuts", null, {
					hk: "4hXvrI"
				})), m.a.createElement(Sn, null, "Shift + ?")), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Next post or comment", null, {
					hk: "1m8s9z"
				})), m.a.createElement(Sn, null, "J")), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Previous post or comment", null, {
					hk: "2wzeoq"
				})), m.a.createElement(Sn, null, "K")), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Next post in lightbox", null, {
					hk: "1ALR5k"
				})), m.a.createElement(Sn, null, "N")), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Previous post in lightbox", null, {
					hk: "2bLo98"
				})), m.a.createElement(Sn, null, "P")), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Open post", null, {
					hk: "2wD7mh"
				})), m.a.createElement(Sn, null, "Enter")), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Open/close expando", null, {
					hk: "1yDst0"
				})), m.a.createElement(Sn, null, "X")), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Go to post link", null, {
					hk: "c0TNr"
				})), m.a.createElement(Sn, null, "L"))), m.a.createElement(jn, null, m.a.createElement(et.a, null, m.a.createElement(En, null, o.fbt._("Action", null, {
					hk: "3QI6pT"
				}))), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Upvote", null, {
					hk: "5i9NP"
				})), m.a.createElement(Sn, null, "A")), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Downvote", null, {
					hk: "1ef3YP"
				})), m.a.createElement(Sn, null, "Z")), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("New post", null, {
					hk: "4dtNWf"
				})), m.a.createElement(Sn, null, "C")), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Reply to comment", null, {
					hk: "G8AbT"
				})), m.a.createElement(Sn, null, "R")), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Submit comment/post", null, {
					hk: "13agk7"
				})), m.a.createElement(Sn, null, "Ctrl + Enter")), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Save", null, {
					hk: "4yMsMq"
				})), m.a.createElement(Sn, null, "S")), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Hide", null, {
					hk: "2Dn9GF"
				})), m.a.createElement(Sn, null, "H")), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Open navigation", null, {
					hk: "QdGe2"
				})), m.a.createElement(Sn, null, "Q")), m.a.createElement(et.a, null, m.a.createElement(_n, null, o.fbt._("Collapse/expand comment", null, {
					hk: "1FxIUN"
				})), m.a.createElement(Sn, null, "Enter"))))), m.a.createElement(De.g, null, m.a.createElement(wn, {
					"data-redditstyle": !0,
					onClick: () => {
						e.closeModal()
					}
				}, o.fbt._("Close", null, {
					hk: "4gbyAA"
				})))))), "ConnectedModal", xn.a);
			Object(wt.b)(Fe.a.KEYBOARD_SHORTCUTS, e => m.a.createElement(Tn, {
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
			Object(wt.b)(Fe.a.SNOOVATAR_MODAL, e => m.a.createElement(An, {
				onOverlayClick: Rn(e),
				withOverlay: !0
			}));
			const {
				fbt: Ln
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Dn = Object(f.c)({
				allowNavigationCallback: yt.a
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
			Object(wt.b)(Fe.a.BLADE_UNSAVED_CHANGES, e => m.a.createElement(Gn, {
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
				componentDidUpdate() {
					Fe.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(_t.a)(), Hn) : setTimeout(() => Object(_t.b)(), Hn))
				}
				componentWillUnmount() {
					Object(_t.b)()
				}
				render() {
					const {
						activeModalId: e
					} = this.props;
					return Object(wt.a)(e)(e ? this.toggleModal : Wn)
				}
			}
			var Qn, zn = qn(Vn),
				Kn = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				Jn = n("./src/reddit/actions/page.ts"),
				Yn = n("./src/reddit/actions/shortcuts/utils.ts"),
				Zn = n("./src/reddit/icons/fonts/index.tsx"),
				Xn = n("./src/reddit/selectors/experiments/d2xSeoLightboxExperiment.ts"),
				$n = n("./src/reddit/selectors/header.ts"),
				es = n("./src/reddit/selectors/userPrefs.ts"),
				ts = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				ns = n("./src/reddit/components/SEOTitle/index.tsx"),
				ss = n("./src/reddit/components/SubredditIcon/index.tsx"),
				os = n("./src/reddit/components/UserIcon/index.tsx"),
				rs = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				as = n("./src/reddit/routes/wrappedreddit/index.ts"),
				is = n("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				cs = n.n(is);
			! function(e) {
				e.Acknowledgements = "Acknowledgements", e.All = "All", e.Appeal = "Appeal", e.Avatar = "Avatar", e.Category = "Category", e.Coins = "Coins", e.Community = "Community", e.CommunitySearch = "CommunitySearch", e.CreateCommunity = "CreateCommunity", e.CreatePost = "CreatePost", e.DailyCharts = "DailyCharts", e.Employee = "Employee", e.GlobalSearch = "GlobalSearch", e.Geotagging = "Geotagging", e.Home = "Home", e.Inbox = "Inbox", e.InternationalSite = "InternationalSite", e.ModListing = "ModListing", e.ModMail = "ModMail", e.ModQueue = "ModQueue", e.Multi = "Multi", e.NotificationsInbox = "NotificationsInbox", e.Popular = "Popular", e.Powerups = "Powerups", e.Predictions = "Predictions", e.Premium = "Premium", e.PublicAccessNetwork = "PublicAccessNetwork", e.Report = "Report", e.Settings = "Settings", e.SubredditCreation = "SubredditCreation", e.Talk = "Talk", e.Topic = "Topic", e.Unknown = "Unknown", e.UserDataRequest = "UserDataRequest", e.UserProfile = "UserProfile", e.UserProfileName = "UserProfileName", e.ViewDraft = "ViewDraft", e.WrappedReddit = "WrappedReddit"
			}(Qn || (Qn = {}));
			const ls = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const [n, s] = t && -1 !== e.indexOf("/") ? e.split("/") : [, e];
				return m.a.createElement(m.a.Fragment, null, n && `${n}/`, s && m.a.createElement(ns.b, {
					type: ns.a.HeaderSelector
				}, s))
			};
			var ds = n("./src/lib/objectSelector/index.ts"),
				us = n("./src/reddit/constants/wiki.ts"),
				ms = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				ps = n("./src/reddit/selectors/subreddit.ts"),
				bs = n("./src/reddit/selectors/topic.ts");
			var hs = Object(ds.a)((e, t) => {
					let {
						pageLayer: n
					} = t;
					const s = !!e.user.account,
						o = Object(It.Y)(n);
					switch (o) {
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
						case "RedditRecap2021":
							return {
								type: Qn.WrappedReddit
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
								s = t && Object(bs.d)(e, t);
							if (s) return {
								type: Qn.Topic,
								model: s
							}
						}
					}
					const r = e.user.account;
					if (r) switch (o) {
						case "inboxPages":
							return {
								type: Qn.Inbox, model: r
							};
						case "settings":
							return {
								type: Qn.Settings, model: r
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
					if (i) return "searchResults" === o ? {
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
					const l = Object(It.k)(e, {
						pageLayer: n
					});
					if (l) return {
						type: Qn.UserProfile,
						model: l
					};
					const d = Object(It.i)(n);
					if (d) return {
						type: Qn.UserProfileName,
						name: `u/${d}`
					};
					if (o && "searchResults" === o) return {
						type: Qn.GlobalSearch
					};
					if ("subredditWiki" === o) {
						const t = Object(It.o)(e, {
								pageLayer: n
							}) || us.e,
							s = Object(ps.x)(e, {
								subredditName: t
							});
						if (s) return {
							type: Qn.Community,
							model: s
						}
					}
					return "rpan" === o && Object(ms.a)(e) ? {
						type: Qn.PublicAccessNetwork
					} : {
						type: Qn.Unknown
					}
				}),
				gs = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less")),
				fs = n.n(gs);

			function vs() {
				return (vs = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function Os(e) {
				const t = e.icon,
					n = e.text,
					s = {
						id: e.id,
						role: "menuitem",
						children: m.a.createElement(m.a.Fragment, null, m.a.createElement(t, {
							className: fs.a.icon,
							isFilled: e.isCurrentPage
						}), m.a.createElement(n, {
							className: fs.a.text
						})),
						className: Object(v.a)(fs.a.item, e.className, {
							[fs.a.mFocused]: !!e.isFocused,
							[fs.a.buttonContainer]: !e.to
						}),
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
				return s["aria-label"] = e.to || e.label, e.to ? e.externalLink ? m.a.createElement("a", vs({}, s, {
					href: e.to,
					target: "_blank"
				})) : m.a.createElement(Kn.a, vs({}, s, {
					to: e.to
				})) : m.a.createElement("button", s)
			}
			var Cs = n("./src/reddit/constants/listings.ts"),
				ys = n("./src/reddit/helpers/overlay/index.ts"),
				xs = n("./src/reddit/routes/modListing/index.ts"),
				Es = n("./src/reddit/routes/powerups/index.ts"),
				Ps = n("./src/reddit/routes/predictions/index.ts"),
				js = n("./src/reddit/routes/talk/index.ts"),
				_s = n("./src/reddit/selectors/experiments/econ/index.ts"),
				Ss = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				ks = n("./src/reddit/selectors/experiments/wrappedReddit.ts"),
				Ms = n("./src/reddit/selectors/multireddit.ts"),
				ws = n("./src/lib/LinkedListMap/index.ts"),
				Ns = n("./src/reddit/routes/avatar/index.ts");

			function Is() {
				return (Is = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Ts = Object(f.c)({
				account: e => e.user.account,
				favoriteMultireddits: e => e.subscriptions.favoriteMultiOrder.map(t => Object(Ms.e)(e, t)).filter(Boolean),
				favoriteProfiles: e => e.subscriptions.favoriteProfileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				favoriteSubreddits: e => e.subscriptions.favoriteSubredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubreddits: e => (e.subreddits.moderated.order || []).map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubredditsPending: e => e.subreddits.moderated.api.pending || !e.subreddits.moderated.api.fetched,
				multis: e => e.subscriptions.multiredditOrder.map(t => Object(Ms.e)(e, t)).filter(Boolean),
				multisPending: e => e.multireddits.api.forUser.pending || !e.multireddits.api.forUser.fetched,
				profiles: e => e.subscriptions.profileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				subscriptions: e => e.subscriptions.subredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptionsPending: e => e.subscriptions.api.pending || !e.subscriptions.api.fetched
			});
			var As;
			! function(e) {
				e[e.Header = 0] = "Header", e[e.Subreddit = 1] = "Subreddit", e[e.SubredditAutocomplete = 2] = "SubredditAutocomplete", e[e.Profile = 3] = "Profile", e[e.Multi = 4] = "Multi", e[e.GenericClickable = 5] = "GenericClickable", e[e.GenericLink = 6] = "GenericLink", e[e.LoadingState = 7] = "LoadingState", e[e.Category = 8] = "Category", e[e.Action = 9] = "Action", e[e.CreatePost = 10] = "CreatePost"
			}(As || (As = {}));
			const Rs = [e => ({
					id: Qn.Employee,
					type: As.GenericLink,
					model: {
						url: "/user/reddit/m/employee_subbies/new",
						displayText: "Employee Communities",
						icon: e => m.a.createElement(Zn.a, Is({
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
				Ls = () => [e => ({
					id: Qn.All,
					type: As.GenericLink,
					model: {
						url: "/r/all/",
						displayText: o.fbt._("All", null, {
							hk: "2M8nEy"
						}).toString(),
						icon: e => m.a.createElement(Zn.a, Is({
							name: "all"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("All", null, {
								hk: "2M8nEy"
							}))
						}
					},
					telemetryNoun: "all"
				})],
				Ds = () => [e => ({
					id: "reddit-feeds",
					type: As.Header,
					model: {
						displayText: o.fbt._("Feeds", null, {
							hk: "4zvMfr"
						}).toString()
					}
				}), (e, t) => ({
					id: Qn.Home,
					type: As.GenericLink,
					model: {
						url: "/",
						displayText: o.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => m.a.createElement(Zn.a, Is({
							name: "home"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("Home", null, {
								hk: "2u56yo"
							}))
						}
					},
					telemetryNoun: "home"
				}), e => ({
					id: Qn.Popular,
					type: As.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: o.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(Zn.a, Is({
							name: "popular"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("Popular", null, {
								hk: "1op8tD"
							}))
						}
					},
					telemetryNoun: "popular"
				}), ...Ls()],
				Fs = [e => ({
					id: "reddit-feeds",
					type: As.Header,
					model: {
						displayText: o.fbt._("Reddit Feeds", null, {
							hk: "3C1mtF"
						}).toString()
					}
				}), () => ({
					id: Qn.Home,
					type: As.GenericLink,
					model: {
						url: "/",
						displayText: o.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(Zn.a, Is({
							name: "home"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("Popular", null, {
								hk: "1op8tD"
							}))
						}
					},
					telemetryNoun: "popular"
				}), ...Ls()],
				Us = [e => ({
					id: "reddit-other",
					type: As.Header,
					model: {
						displayText: o.fbt._("Other", null, {
							hk: "1etY05"
						}).toString()
					}
				}), e => ({
					id: Qn.Settings,
					type: As.GenericLink,
					model: {
						url: "/settings",
						displayText: o.fbt._("User Settings", null, {
							hk: "36WFGd"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return m.a.createElement(rs.a, {
								className: t
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("User Settings", null, {
								hk: "36WFGd"
							}))
						}
					},
					telemetryNoun: "settings"
				}), e => ({
					id: Qn.Inbox,
					type: As.GenericLink,
					model: {
						url: "/message/inbox/",
						displayText: o.fbt._("Messages", null, {
							hk: "43DUrY"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return m.a.createElement(rs.a, {
								className: t
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("Messages", null, {
								hk: "43DUrY"
							}))
						}
					},
					telemetryNoun: "mail"
				})],
				Gs = e => ({
					id: Qn.Coins,
					type: As.GenericLink,
					model: {
						url: "/coins",
						displayText: o.fbt._("Coins", null, {
							hk: "ZFvDU"
						}).toString(),
						icon: e => m.a.createElement(Zn.a, Is({
							name: "coins"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("Coins", null, {
								hk: "ZFvDU"
							}))
						}
					},
					telemetryNoun: "coins"
				}),
				Bs = e => ({
					id: Qn.Premium,
					type: As.GenericLink,
					model: {
						url: "/premium",
						displayText: o.fbt._("Premium", null, {
							hk: "3i2C4T"
						}).toString(),
						icon: e => m.a.createElement(Zn.a, Is({
							name: "premium"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("Premium", null, {
								hk: "3i2C4T"
							}))
						}
					},
					telemetryNoun: "premium"
				}),
				qs = e => ({
					id: Qn.Avatar,
					type: As.GenericLink,
					model: {
						url: Ns.a,
						displayText: o.fbt._("Avatar", null, {
							hk: "12GoEB"
						}).toString(),
						icon: e => m.a.createElement(Zn.a, Is({
							name: "avatar_style"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("Avatar", null, {
								hk: "43lxPH"
							}))
						}
					},
					telemetryNoun: "avatar"
				}),
				Hs = e => ({
					id: Qn.Powerups,
					type: As.GenericLink,
					model: {
						url: Es.a,
						displayText: o.fbt._("Powerups", null, {
							hk: "w9Ere"
						}).toString(),
						icon: e => m.a.createElement(Zn.a, Is({
							name: "powerup"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("Powerups", null, {
								hk: "1f7fL8"
							}))
						}
					},
					telemetryNoun: "powerups"
				}),
				Ws = e => ({
					id: Qn.WrappedReddit,
					type: As.GenericLink,
					model: {
						url: as.b,
						displayText: o.fbt._("Reddit Recap", null, {
							hk: "3S6KUW"
						}).toString(),
						icon: e => m.a.createElement("img", {
							src: as.a,
							className: cs.a.wrappedRedditLogo
						}),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("Reddit Recap", null, {
								hk: "1UuGvQ"
							}))
						}
					},
					telemetryNoun: "recap"
				}),
				Vs = e => ({
					id: Qn.Talk,
					type: As.GenericLink,
					model: {
						url: js.a,
						displayText: o.fbt._("Talk", null, {
							hk: "lHWAD"
						}).toString(),
						icon: e => m.a.createElement(Zn.a, Is({
							name: "live"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("Talk", null, {
								hk: "31Avul"
							}))
						}
					},
					telemetryNoun: "talk"
				}),
				Qs = e => ({
					id: Qn.Predictions,
					type: As.GenericLink,
					model: {
						url: Ps.a,
						displayText: o.fbt._("Predictions", null, {
							hk: "4doXhN"
						}).toString(),
						icon: e => m.a.createElement(Zn.a, Is({
							name: "prediction"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("Predictions", null, {
								hk: "3lUrcj"
							}))
						}
					},
					telemetryNoun: "predictions"
				}),
				zs = [e => ({
					id: Qn.ModQueue,
					type: As.GenericLink,
					model: {
						url: "/r/mod/about/modqueue",
						displayText: o.fbt._("Mod Queue", null, {
							hk: "12pTAg"
						}).toString(),
						icon: e => m.a.createElement(Zn.a, Is({
							name: "mod_queue"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("Mod Queue", null, {
								hk: "12pTAg"
							}))
						}
					},
					telemetryNoun: "mod_queue"
				}), e => {
					return {
						id: Qn.ModMail,
						type: As.GenericLink,
						model: {
							url: "https://mod.reddit.com/mail/all",
							displayText: o.fbt._("Modmail", null, {
								hk: "1BtYh4"
							}).toString(),
							icon: e => m.a.createElement(Zn.a, Is({
								name: "mod_mail"
							}, e)),
							text(e) {
								let {
									className: t
								} = e;
								return m.a.createElement("span", {
									className: t
								}, o.fbt._("Modmail", null, {
									hk: "2QQ3dU"
								}))
							}
						},
						telemetryNoun: "modmail_beta"
					}
				}];

			function Ks(e, t, n, s) {
				t.subscriptions.length && (e.push({
					id: "header-subscriptions",
					type: As.Header,
					model: {
						displayText: o.fbt._("my communities", null, {
							hk: "2cRte1"
						}).toString()
					}
				}), n && Js(e, s), t.subscriptions.forEach(t => e.push({
					id: "sub" + t.id,
					type: As.Subreddit,
					model: t,
					telemetryNoun: "community"
				}))), t.profiles.length && (e.push({
					id: "header-profiles",
					type: As.Header,
					model: {
						displayText: o.fbt._("following", null, {
							hk: "1kjEfv"
						}).toString()
					}
				}), t.profiles.forEach(t => e.push({
					id: "pro" + t.id,
					type: As.Profile,
					model: t,
					telemetryNoun: "profile"
				})))
			}
			const Js = (e, t) => {
				const n = {
						id: Qn.CreateCommunity,
						telemetryNoun: "create_community"
					},
					s = {
						displayText: o.fbt._("Create Community", null, {
							hk: "41sjx"
						}).toString(),
						icon: e => m.a.createElement(Zn.a, Is({
							name: "add"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, o.fbt._("Create Community", null, {
								hk: "41sjx"
							}).toString())
						}
					};
				e.push({
					...n,
					type: As.GenericClickable,
					model: {
						...s,
						onClick: () => {
							t(Object(_e.h)(Fe.a.SUBREDDIT_CREATION_MODAL_ID))
						}
					}
				})
			};
			var Ys = n("./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less"),
				Zs = n.n(Ys);

			function Xs(e) {
				return m.a.createElement("div", {
					className: Object(v.a)(Zs.a.header, e.className),
					role: "heading"
				}, e.children)
			}
			var $s = n("./src/reddit/actions/subscription/index.ts"),
				eo = n("./src/reddit/helpers/trackers/customFeeds.ts"),
				to = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				no = n.n(to);

			function so() {
				return (so = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const oo = Object(f.c)({
					currentUser: at.k,
					hideNSFWPref: at.F,
					isLoggedIn: at.P
				}),
				ro = Object(p.b)(oo, (e, t) => ({
					toggleFavorite: n => {
						switch (n.stopPropagation(), n.preventDefault(), t.type) {
							case As.Subreddit:
								e(Object($s.c)({
									id: t.model.id,
									type: "subreddit"
								}));
								break;
							case As.Profile:
								e(Object($s.c)({
									id: t.model.id,
									type: "profile"
								}));
								break;
							case As.Multi:
								e(Object($s.a)(t.model.url)), t.model.isFavorited ? t.sendEvent(Object(eo.f)(t.model.url)) : t.sendEvent(Object(eo.c)(t.model.url))
						}
					}
				}));
			var ao = Object(A.c)(ro((function(e) {
					const t = {
						className: Object(v.a)(no.a.item, e.className, {
							[no.a.mFocused]: !!e.isFocused
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
						case As.Subreddit:
							return m.a.createElement(Kn.a, so({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(ss.b, {
								className: no.a.icon,
								shouldHideNsfwIcon: e.hideNSFWPref,
								subredditOrProfile: e.model
							}), m.a.createElement("span", {
								className: no.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(Zn.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(v.a)(no.a.favorite, {
									[no.a.mFavorite]: !!e.isFavorite
								})
							})));
						case As.SubredditAutocomplete:
							return m.a.createElement(Kn.a, so({}, t, {
								"aria-label": e.model.name,
								to: `/r/${e.model.name}/`
							}), m.a.createElement(ss.b, {
								className: no.a.icon,
								primaryColor: e.model.primaryColor,
								iconUrl: e.model.communityIcon || e.model.icon
							}), m.a.createElement("span", {
								className: no.a.text
							}, e.model.name));
						case As.Multi:
							return m.a.createElement(Kn.a, so({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement("img", {
								src: e.model.icon,
								className: no.a.customFeedIcon
							}), m.a.createElement("span", {
								className: no.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(Zn.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(v.a)(no.a.favorite, {
									[no.a.mFavorite]: !!e.isFavorite
								})
							})));
						case As.Profile:
							return m.a.createElement(Kn.a, so({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(os.a, {
								className: no.a.icon,
								iconUrl: e.model.icon.url,
								isNSFW: e.model.isNSFW,
								userName: e.model.name
							}), m.a.createElement("span", {
								className: no.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(Zn.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(v.a)(no.a.favorite, {
									[no.a.mFavorite]: !!e.isFavorite
								})
							})))
					}
				}))),
				io = n("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				co = n.n(io);

			function lo(e) {
				return m.a.createElement("div", {
					className: e.className
				}, m.a.createElement("div", {
					className: co.a.header
				}), m.a.createElement("div", {
					className: co.a.item
				}), m.a.createElement("div", {
					className: co.a.item
				}), m.a.createElement("div", {
					className: co.a.item
				}), m.a.createElement("div", {
					className: co.a.item
				}))
			}
			var uo = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				mo = n("./src/reddit/actions/subreddit.ts"),
				po = n("./src/reddit/constants/keycodes.ts"),
				bo = n("./src/reddit/helpers/correlationIdTracker.ts"),
				ho = n("./src/reddit/helpers/trackers/postComposer.ts"),
				go = n("./src/lib/loadableAction/index.ts"),
				fo = n("./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less"),
				vo = n.n(fo);

			function Oo() {
				return (Oo = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function Co(e) {
				return e.id === Qn.ModMail || e.id === Qn.CreateCommunity
			}

			function yo(e) {
				const t = new ws.a("id");
				return e.forEach(e => {
					(function(e) {
						return e.type !== As.Header && e.type !== As.LoadingState
					})(e) && t.push({
						id: e.id
					})
				}), t
			}
			const xo = Object(f.c)({
					favoriteMultireddits: e => new Set(e.subscriptions.favoriteMultiOrder),
					favoriteProfiles: e => new Set(e.subscriptions.favoriteProfileOrder),
					favoriteSubreddits: e => new Set(e.subscriptions.favoriteSubredditOrder),
					unfilteredListBuilder: e => t => {
						const n = Ts(e),
							s = new ws.a("id"),
							r = Object(at.ob)(e),
							a = Object(_s.q)(e),
							i = Object(ks.b)(e),
							c = [];
						a && i || (!a && c.push(Qn.Predictions), !i && c.push(Qn.WrappedReddit));
						const l = (e => Object(_s.y)(e) ? [Bs, Gs, qs, Hs, Ws, Vs, Qs] : [Gs, Bs, qs, Hs, Ws, Vs, Qs])(e),
							d = c.length ? l.filter(e => !c.includes(e(null).id)) : l;
						if (n.account) {
							const a = n.account;
							(n.favoriteSubreddits.length || n.favoriteProfiles.length || n.favoriteMultireddits.length) && (s.push({
								id: "header-favorites",
								type: As.Header,
								model: {
									displayText: o.fbt._("favorites", null, {
										hk: "4Gg0k2"
									}).toString()
								}
							}), n.favoriteSubreddits.forEach(e => s.push({
								id: "fav" + e.id,
								type: As.Subreddit,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteProfiles.forEach(e => s.push({
								id: "fav" + e.id,
								type: As.Profile,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteMultireddits.forEach(e => s.push({
								id: "fav" + e.url,
								type: As.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), n.multisPending && s.push({
								id: "multis-pending",
								type: As.LoadingState,
								model: {
									displayText: ""
								}
							}), n.moderatingSubredditsPending ? s.push({
								id: "moderatingSubreddits-pending",
								type: As.LoadingState,
								model: {
									displayText: ""
								}
							}) : n.moderatingSubreddits.length && (s.push({
								id: "header-moderating",
								type: As.Header,
								model: {
									displayText: o.fbt._("moderating", null, {
										hk: "2du7dx"
									}).toString()
								}
							}), a.isMod && zs.forEach(e => s.push(e(a))), s.push({
								id: Qn.ModListing,
								type: As.GenericLink,
								model: {
									url: xs.a,
									displayText: "r/Mod",
									icon: e => m.a.createElement(Zn.a, Is({
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
								type: As.Subreddit,
								model: e,
								telemetryNoun: "community_moderate"
							}))), n.multis.length > 0 && ((e, t, n) => {
								e.push({
									id: "header-multis",
									type: As.Header,
									model: {
										displayText: o.fbt._("Custom feeds", null, {
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
												className: Object(v.a)(t, cs.a.multiPlusButton)
											}, m.a.createElement(Zn.a, {
												name: "add"
											}))
										},
										buttonTelemetryNoun: "create_new_custom_feed"
									}
								}), t.multis.forEach(t => e.push({
									id: t.url,
									type: As.Multi,
									model: t,
									telemetryNoun: "custom_feed"
								}))
							})(s, n, t), n.subscriptionsPending ? s.push({
								id: "subscriptions-pending",
								type: As.LoadingState,
								model: {
									displayText: ""
								}
							}) : Ks(s, n, r, t), ((e, t, n, s) => (Ds().forEach(e => t.push(e(n))), n.isEmployee && Rs.forEach(e => t.push(e(n))), Object(ms.a)(e) && t.push({
								id: Qn.PublicAccessNetwork,
								type: As.GenericClickable,
								model: {
									onClick: () => {
										s(Object(ys.a)(Cs.c[Cs.b.Rpan]))
									},
									displayText: o.fbt._("Reddit live", null, {
										hk: "3zuymj"
									}).toString(),
									icon: e => m.a.createElement(Zn.a, Is({
										name: "video_live"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, o.fbt._("Reddit Live", null, {
											hk: "93lry"
										}))
									}
								},
								telemetryNoun: "rpan"
							}), t))(e, s, a, t), Us.forEach(e => s.push(e(a))), s.push((() => ({
								id: Qn.CreatePost,
								type: As.CreatePost,
								model: {
									url: "/submit",
									displayText: o.fbt._("Create Post", null, {
										hk: "dGck6"
									}).toString(),
									icon: e => m.a.createElement(Zn.a, Is({
										name: "add"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, o.fbt._("Create Post", null, {
											hk: "dGck6"
										}))
									}
								}
							}))()), s.push((() => ({
								id: Qn.DailyCharts,
								type: As.GenericLink,
								model: {
									url: "/subreddits/leaderboard/",
									displayText: o.fbt._("Top Communities", null, {
										hk: "1KzP9v"
									}).toString(),
									icon: e => m.a.createElement(Zn.a, Is({
										name: "list_numbered"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, o.fbt._("Top Communities", null, {
											hk: "1KzP9v"
										}))
									}
								},
								telemetryNoun: "daily_charts"
							}))()), Object(Ss.b)(e) && (e => e.push({
								id: Qn.NotificationsInbox,
								type: As.GenericLink,
								model: {
									url: "/notifications",
									displayText: o.fbt._("Notifications", null, {
										hk: "2xenVO"
									}).toString(),
									icon: e => m.a.createElement(Zn.a, Is({
										name: "notification"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, o.fbt._("Notifications", null, {
											hk: "2xenVO"
										}))
									}
								},
								telemetryNoun: "inbox"
							}))(s), d.forEach(e => s.push(e(a)))
						} else n.subscriptions.length || Object(at.P)(e) ? Ds().forEach(e => s.push(e(null))) : Fs.forEach(e => s.push(e(null))), s.push({
							id: "reddit-other",
							type: As.Header,
							model: {
								displayText: o.fbt._("Other", null, {
									hk: "1etY05"
								}).toString()
							}
						}), d.forEach(e => s.push(e(null))), Ks(s, n, r, t);
						return s
					}
				}),
				Eo = e => ({
					onHomeClicked: () => e(Object(go.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))()),
					onGotoUrl: t => e(Object(h.b)(t)),
					onSubredditsRequested: () => {
						e(Object($s.e)()), e(Object(mo.q)()), e(Object(go.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))())
					},
					onActionDispatched: t => e(t)
				}),
				Po = (e, t, n) => ({
					...e,
					...t,
					...n,
					unfilteredList: e.unfilteredListBuilder(t.onActionDispatched)
				});
			class jo extends m.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = e.currentTarget.value,
							n = this.getList(t, this.props),
							s = yo(n),
							o = s.first();
						this.setState({
							focusOrder: s,
							renderableList: n,
							currentInputText: e.currentTarget.value,
							focusedItemId: o ? o.id : void 0
						})
					}, this.onChangeFocusedListItemId = e => this.setState({
						focusedItemId: e
					}), this.onKeyDown = e => {
						if (e.key === po.b.Escape && this.props.onClose && this.props.onClose(!0), e.key === po.b.Tab && this.props.onClose && this.props.onClose(), e.key === po.b.Enter) {
							const e = this.state.focusOrder.first(),
								t = this.state.focusedItemId || (e ? e.id : null);
							if (t) {
								const e = this.state.renderableList.get(t);
								e && e.type !== As.Header && e.type !== As.LoadingState && (this.fireTelemetryForListItem(e), e.type === As.GenericClickable ? e.model.onClick() : Co(e) ? window.open(e.model.url, "_blank") : this.props.onGotoUrl(e.model.url), this.props.onClose && this.props.onClose(!0))
							}
						}
						e.key === po.b.ArrowDown && (e.preventDefault(), this.setState(e => {
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
						})), e.key === po.b.ArrowUp && (e.preventDefault(), this.setState(e => {
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
								Object(bo.e)(bo.a.GoldPayment, !0), t = Object(bo.c)(bo.a.GoldPayment)
						}
						switch (e.type) {
							case As.Category:
							case As.GenericLink:
							case As.GenericClickable:
							case As.Multi:
							case As.Profile:
							case As.Subreddit:
								this.props.sendEvent(n => ({
									...Object(rt.o)(n),
									...t ? {
										correlationId: t
									} : null,
									customFeed: e.type === As.Multi ? Object(rt.n)(n, e.model.url) : null,
									source: "community_nav",
									action: "click",
									noun: e.telemetryNoun
								}));
								break;
							case As.Header: {
								const {
									buttonTelemetryNoun: t
								} = e.model;
								t && this.props.sendEvent(e => ({
									...Object(rt.o)(e),
									source: "community_nav",
									action: "click",
									noun: t
								}));
								break
							}
							case As.CreatePost:
								this.props.sendEvent(Object(ho.x)({
									actionInfoType: "community_nav"
								}))
						}
					}, this.state = {
						currentInputText: "",
						focusedItemId: null,
						focusOrder: yo(e.unfilteredList),
						renderableList: e.unfilteredList
					}, this.inputRef = m.a.createRef()
				}
				componentDidMount() {
					"complete" === document.readyState ? this.props.onSubredditsRequested() : window.addEventListener("load", this.props.onSubredditsRequested), this.props.canAutofocus && setTimeout(() => !!this.inputRef.current && this.inputRef.current.focus())
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = this.state.currentInputText,
						n = this.getList(t, e),
						s = yo(n);
					this.setState({
						focusOrder: s,
						renderableList: n
					})
				}
				getList(e, t) {
					if (e) {
						const n = new ws.a("id"),
							s = new RegExp(e, "ig");
						t.unfilteredList.forEach(e => {
							switch (e.type) {
								case As.Category:
								case As.GenericLink:
								case As.Multi:
								case As.Profile:
								case As.Subreddit:
								case As.CreatePost:
									e.model.displayText.match(s) && n.push(e);
									break;
								case As.Header: {
									const t = n.last();
									t && t.type === As.Header && n.pop(), n.push(e);
									break
								}
								case As.LoadingState:
							}
						});
						const o = n.last();
						return o && o.type === As.Header && n.pop(), n
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
						"aria-label": t && t.model.displayText ? `${t.model.displayText} ${o.fbt._("selected",null,{hk:"QqrSS"})}` : ""
					}), m.a.createElement("input", {
						autoFocus: this.props.canAutofocus,
						"aria-label": o.fbt._("Start typing to filter your communities or use up and down to select.", null, {
							hk: "1AB1YU"
						}),
						className: vo.a.filter,
						id: "header-subreddit-filter",
						placeholder: o.fbt._("Filter", null, {
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
								this.fireTelemetryForListItem(e), this.props.onClose && this.props.onClose(!0), e.id === Qn.Home && this.props.onHomeClicked(), e.type === As.GenericClickable && e.model.onClick()
							},
							isCurrentPage: this.props.currentPage.type === e.id
						};
						switch (e.type) {
							case As.GenericClickable:
								return m.a.createElement(Os, Oo({}, n, {
									className: vo.a.item,
									label: e.model.displayText,
									icon: e.model.icon,
									text: e.model.text
								}));
							case As.Category:
							case As.GenericLink:
							case As.CreatePost:
								return m.a.createElement(Os, Oo({}, n, {
									externalLink: Co(e),
									className: vo.a.item,
									to: e.model.url,
									icon: e.model.icon,
									text: e.model.text
								}));
							case As.Header: {
								const n = e.model.button;
								return m.a.createElement(Xs, {
									className: vo.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								}, e.model.displayText, n && m.a.createElement(n, {
									className: vo.a.headerButton,
									sendClickEvent: () => this.fireTelemetryForListItem(e)
								}))
							}
							case As.LoadingState:
								return m.a.createElement(lo, {
									className: vo.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								});
							case As.Multi:
								return m.a.createElement(ao, Oo({}, n, {
									className: vo.a.item,
									isFavorite: e.model.isFavorited,
									model: e.model,
									type: As.Multi
								}));
							case As.Profile:
								return m.a.createElement(ao, Oo({}, n, {
									className: vo.a.item,
									isFavorite: this.props.favoriteProfiles.has(e.model.id),
									model: e.model,
									type: As.Profile
								}));
							case As.Subreddit:
								return m.a.createElement(ao, Oo({}, n, {
									className: vo.a.item,
									isFavorite: this.props.favoriteSubreddits.has(e.model.id),
									model: e.model,
									type: As.Subreddit
								}))
						}
					}))
				}
			}
			const _o = Object(p.b)(xo, Eo, Po)(Object(A.c)(jo)),
				So = Object(p.b)(xo, Eo, Po)(Object(A.c)(Object(uo.b)(jo))),
				ko = Object(It.u)({
					isCommentsPage: It.x,
					pageLayer: e => e
				}),
				Mo = Object(f.c)({
					currentPage: hs,
					hideNSFWPref: at.F,
					isD2xSeoDisableLightboxEnabled: Xn.a,
					isDropdownOpen: $n.a,
					isLoggedIn: at.P,
					isOverlayOpen: yt.i,
					isPinnedSubscriptionsMenuDisabled: es.a,
					isSubscriptionsPinned: es.b
				});
			class wo extends m.a.Component {
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
							...Object(rt.o)(e),
							source: "nav",
							action: "click",
							noun: this.props.isDropdownOpen ? "close_community_nav" : "open_community_nav"
						})), this.props.isDropdownOpen && this.enablePreventFocus(), this.props.toggleDropdown(), this.props.isDropdownOpen || this.disablePreventFocus())
					}, this.renderHeaderSubreddit = e => {
						const {
							currentPage: t,
							className: n,
							hideNSFWPref: s,
							isCommentsPage: r,
							isD2xSeoDisableLightboxEnabled: a,
							isLoggedIn: i,
							isOverlayOpen: c
						} = this.props, l = this.props.isDropdownOpen && !this.props.isSubscriptionsPinned, d = c || !a && !i && r;
						return m.a.createElement("div", {
							"aria-label": o.fbt._("Start typing to filter your communities or use up and down to select.", null, {
								hk: "2PXR4j"
							}),
							className: Object(v.a)(cs.a.container, n, {
								[cs.a.mOpen]: l,
								[cs.a.mNotPinned]: !this.props.isSubscriptionsPinned,
								[cs.a.mPinned]: this.props.isSubscriptionsPinned,
								[cs.a.containerExp]: e
							}),
							onClickCapture: this.stopPropagation,
							role: "navigation"
						}, m.a.createElement("button", {
							className: cs.a.selector,
							onMouseDown: this.props.isSubscriptionsPinned ? this.props.onLocationClick : this.toggleDropdown,
							onFocus: this.onButtonFocus,
							tabIndex: this.state.preventFocus || this.props.isSubscriptionsPinned ? -1 : 0
						}, m.a.createElement("span", {
							className: cs.a.containerText
						}, " ", function(e) {
							switch (e.type) {
								case Qn.Acknowledgements:
									return ls(o.fbt._("Acknowledgements", null, {
										hk: "32JBVF"
									}).toString());
								case Qn.All:
									return ls(o.fbt._("All", null, {
										hk: "2gaHOy"
									}).toString());
								case Qn.Appeal:
									return ls(o.fbt._("Appeal", null, {
										hk: "2dMFkN"
									}).toString());
								case Qn.Avatar:
									return ls(o.fbt._("Avatar", null, {
										hk: "4E0V0C"
									}).toString());
								case Qn.Coins:
									return ls(o.fbt._("Coins", null, {
										hk: "3ZpUbG"
									}).toString());
								case Qn.Community:
									return ls(e.model.displayText, !0);
								case Qn.CommunitySearch:
									return ls(o.fbt._("Subreddit Results", null, {
										hk: "19qRVH"
									}).toString());
								case Qn.CreateCommunity:
									return ls(o.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case Qn.CreatePost:
									return ls(o.fbt._("Create Post", null, {
										hk: "30V40V"
									}).toString());
								case Qn.DailyCharts:
									return ls(o.fbt._("Top Communities", null, {
										hk: "1sWIEu"
									}).toString());
								case Qn.GlobalSearch:
									return ls(o.fbt._("Search Results", null, {
										hk: "scJwR"
									}).toString());
								case Qn.Geotagging:
									return ls(o.fbt._("Help Out", null, {
										hk: "1RN9v2"
									}).toString());
								case Qn.Home:
									return ls(o.fbt._("Home", null, {
										hk: "amHQd"
									}).toString());
								case Qn.Inbox:
									return ls(o.fbt._("Messages", null, {
										hk: "25MBSp"
									}).toString());
								case Qn.ModListing:
									return ls("r/Mod");
								case Qn.ModMail:
									return ls(o.fbt._("Modmail", null, {
										hk: "of9AC"
									}).toString());
								case Qn.ModQueue:
									return ls(o.fbt._("Mod Queue", null, {
										hk: "3hdHhb"
									}).toString());
								case Qn.Multi:
									return ls(e.model.displayText, !0);
								case Qn.NotificationsInbox:
									return ls(o.fbt._("Notifications", null, {
										hk: "FiFRe"
									}).toString());
								case Qn.InternationalSite:
								case Qn.Popular:
									return ls(o.fbt._("Popular", null, {
										hk: "1rTNHl"
									}).toString());
								case Qn.WrappedReddit:
									return ls(o.fbt._("Reddit Recap", null, {
										hk: "1IMaHW"
									}).toString());
								case Qn.Powerups:
									return ls(o.fbt._("Powerups", null, {
										hk: "1ZXjgq"
									}).toString());
								case Qn.Predictions:
									return ls(o.fbt._("Predictions", null, {
										hk: "47Cyyb"
									}).toString());
								case Qn.Premium:
									return ls(o.fbt._("Premium", null, {
										hk: "x0xKv"
									}).toString());
								case Qn.PublicAccessNetwork:
									return ls(o.fbt._("Reddit Live", null, {
										hk: "4tlHX5"
									}).toString());
								case Qn.Report:
									return ls(o.fbt._("Report", null, {
										hk: "4oVcnd"
									}).toString());
								case Qn.Settings:
									return ls(o.fbt._("User Settings", null, {
										hk: "hcLHW"
									}).toString());
								case Qn.SubredditCreation:
									return ls(o.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case Qn.Talk:
									return ls(o.fbt._("Talk", null, {
										hk: "gVQjb"
									}).toString());
								case Qn.Topic:
									return ls(e.model);
								case Qn.Unknown:
									return ls("");
								case Qn.UserDataRequest:
									return ls(o.fbt._("Request your Reddit data", null, {
										hk: "3LqHku"
									}).toString());
								case Qn.UserProfile:
									return ls(e.model.displayText, !0);
								case Qn.UserProfileName:
									return ls(e.name, !0);
								case Qn.ViewDraft:
									return ls(o.fbt._("View Draft", null, {
										hk: "3k2k9a"
									}).toString())
							}
						}(t), " "), function(e, t) {
							const n = e => m.a.createElement(Zn.a, {
								name: e,
								isFilled: !0,
								className: cs.a.defaultIcon
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
										className: cs.a.subredditIcon,
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
									return m.a.createElement(rs.a, {
										wrapperClassName: cs.a.userIcon
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
										className: cs.a.customFeedIcon
									});
								case Qn.NotificationsInbox:
									return n("notification");
								case Qn.InternationalSite:
								case Qn.Popular:
									return n("popular");
								case Qn.WrappedReddit:
									return m.a.createElement("img", {
										src: as.a,
										className: cs.a.wrappedRedditLogoActive
									});
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
									return m.a.createElement(rs.a, {
										wrapperClassName: cs.a.userIcon
									});
								case Qn.SubredditCreation:
									return n("add");
								case Qn.Talk:
									return n("live");
								case Qn.Topic:
									return n("custom_feed");
								case Qn.Unknown:
									return m.a.createElement("div", {
										className: cs.a.unknownIcon
									});
								case Qn.UserDataRequest:
									return n("add");
								case Qn.UserProfile: {
									const n = Object(ts.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(os.a, {
										className: cs.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										omitResponsivePresenceWrapper: !0,
										userName: e.model.name
									})
								}
								case Qn.UserProfileName:
									return m.a.createElement("div", {
										className: cs.a.defaultIcon
									});
								case Qn.Unknown:
									return m.a.createElement("div", {
										className: cs.a.unknownIcon
									});
								case Qn.UserProfile: {
									const n = Object(ts.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(os.a, {
										className: cs.a.userIcon,
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
							className: cs.a.caretDown
						})), l && !this.props.isPinnedSubscriptionsMenuDisabled && m.a.createElement(Zn.a, {
							name: "side_menu",
							className: cs.a.pin,
							onClick: d ? void 0 : this.props.onPinSubscriptions
						}), l && m.a.createElement(So, {
							canAutofocus: !0,
							className: cs.a.listContainer,
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
			var No = ko(Object(p.b)(Mo, (e, t) => ({
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
				}))(Object(A.c)(wo))),
				Io = n("./src/reddit/components/JumpToContent/index.tsx"),
				To = n("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				Ao = n("./node_modules/history/esm/history.js"),
				Ro = n("./node_modules/lodash/isEmpty.js"),
				Lo = n.n(Ro),
				Do = n("./node_modules/lodash/pick.js"),
				Fo = n.n(Do),
				Uo = n("./node_modules/uuid/v4.js"),
				Go = n.n(Uo),
				Bo = n("./src/lib/hooks/usePrevious.ts"),
				qo = n("./src/lib/makeSearchKey/index.ts"),
				Ho = n("./src/reddit/actions/post.ts"),
				Wo = n("./src/reddit/actions/search.ts"),
				Vo = n("./src/lib/makeApiRequest/index.ts"),
				Qo = n("./src/lib/omitHeaders/index.ts"),
				zo = n("./src/reddit/constants/headers.ts");
			var Ko = n("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				Jo = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");
			const Yo = e => async (t, n, s) => {
				let {
					apiContext: o
				} = s;
				var r, a;
				const i = await ((e, t) => Object(Vo.a)(Object(Qo.a)(e, [zo.a]), {
					endpoint: `${e.apiUrl}/api/subreddit_autocomplete_v2.json`,
					method: O.jb.GET,
					data: {
						query: t
					}
				}))(o(), e);
				if (i.ok && (null === (a = null === (r = i.body) || void 0 === r ? void 0 : r.data) || void 0 === a ? void 0 : a.children)) {
					const n = (e => {
						const t = [],
							n = {};
						return e.forEach(e => {
							const s = e.data,
								o = e.kind;
							o === O.Ib.Subreddit ? (t.push(s.name), n[s.name] = Object(Jo.a)(s)) : o === O.Ib.Account && (t.push(s.subreddit.name), n[s.subreddit.name] = Object(Ko.a)(s.subreddit, s.name, s.accept_followers))
						}), {
							data: n,
							order: t
						}
					})(i.body.data.children);
					n && n.data && n.order && t(Object(Wo.o)({
						typeaheadSuggestions: n.data,
						order: n.order,
						searchQuery: e
					}))
				}
			};
			var Zo, Xo = n("./src/reddit/actions/search/trending.ts"),
				$o = n("./src/reddit/components/SearchDropdown/index.tsx"),
				er = n("./src/reddit/components/SearchDropdown/TypeaheadSuggestion.tsx"),
				tr = n("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				nr = n("./src/reddit/constants/history.ts"),
				sr = n("./src/reddit/constants/parameters.ts"),
				or = n("./src/reddit/helpers/getSearchUrl/index.ts"),
				rr = n("./src/reddit/helpers/isArrayEqual.ts"),
				ar = n("./src/reddit/helpers/trackers/screenview.ts"),
				ir = n("./src/reddit/helpers/trackers/searchResults.ts"),
				cr = n("./src/reddit/hooks/usePageLayer.ts"),
				lr = n("./src/reddit/models/Search/index.ts"),
				dr = n("./src/reddit/selectors/searchFix.ts"),
				ur = n("./src/reddit/selectors/searchResults.ts"),
				mr = n("./src/reddit/selectors/trending.ts"),
				pr = n("./src/reddit/helpers/search/searchImpressionId.ts"),
				br = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				hr = n("./src/reddit/controls/Search/index.m.less"),
				gr = n.n(hr),
				fr = n("./node_modules/lodash/debounce.js"),
				vr = n.n(fr),
				Or = n("./src/reddit/components/Pill/index.tsx"),
				Cr = n("./src/reddit/components/Pill/PillText/index.m.less"),
				yr = n.n(Cr);
			! function(e) {
				e.DAY = "DAY", e.NIGHT = "NIGHT"
			}(Zo || (Zo = {}));
			const xr = {
					[Zo.DAY]: yr.a.pillTextVariantDay,
					[Zo.NIGHT]: yr.a.pillTextVariantNight
				},
				Er = e => m.a.createElement("div", {
					className: Object(v.a)(yr.a.pillText, xr[e.variant])
				}, e.children);
			var Pr = n("./src/reddit/controls/Search/CommunityPill/index.m.less"),
				jr = n.n(Pr);
			const _r = Object(f.c)({
					nightmode: at.cb
				}),
				Sr = Object(p.b)(_r)(e => {
					let {
						nightmode: t,
						subreddit: n
					} = e;
					return m.a.createElement(Or.a, {
						"aria-hidden": !0,
						className: jr.a.communityPill,
						"data-testid": "community-search-pill"
					}, m.a.createElement(Er, {
						variant: t ? Zo.NIGHT : Zo.DAY
					}, m.a.createElement(ss.b, {
						className: gr.a.subredditIcon,
						subredditOrProfile: n
					}), n.displayText))
				});
			var kr = n("./src/reddit/controls/Search/SearchBar/index.m.less"),
				Mr = n.n(kr);
			const wr = e => {
				let {
					inputRef: t,
					searchQuery: n,
					showCommunityPill: s,
					subreddit: r,
					onChange: a,
					onFormSubmit: i,
					onFocusSearchBar: c,
					onKeyDown: l
				} = e;
				const d = m.a.useContext(g.a),
					u = s && r ? o.fbt._("Search within {subredditName}", [o.fbt._param("subredditName", r.displayText)], {
						hk: "2B6J3t"
					}) : o.fbt._("Search all of Reddit", null, {
						hk: "1Fi1f5"
					});
				return m.a.createElement("form", {
					action: "/search/",
					autoComplete: "off",
					className: Object(v.a)(Mr.a.searchBar, d && Mr.a.searchBarExp),
					method: "get",
					onSubmit: i,
					onFocus: c,
					role: "search"
				}, m.a.createElement("label", {
					className: Mr.a.inputLabel,
					htmlFor: "header-search-bar"
				}, m.a.createElement("div", {
					"aria-hidden": !0,
					className: Mr.a.iconContainer
				}, m.a.createElement(Zn.a, {
					name: "search",
					className: Mr.a.icon
				})), m.a.createElement(To.a, {
					"aria-live": "assertive"
				}, u), s && r && m.a.createElement(Sr, {
					subreddit: r
				})), m.a.createElement("input", {
					id: "header-search-bar",
					name: "q",
					className: Mr.a.input,
					onChange: vr()((function() {
						var e;
						a((null === (e = null == t ? void 0 : t.current) || void 0 === e ? void 0 : e.value) || "")
					}), 200),
					onKeyDown: l,
					placeholder: o.fbt._("Search Reddit", null, {
						hk: "34Vfom"
					}),
					ref: t,
					type: "search",
					defaultValue: n
				}))
			};

			function Nr(e) {
				let {
					className: t
				} = e;
				var n;
				const s = Object(cr.a)(),
					o = Object(It.Z)(s),
					r = Object(It.W)(s),
					{
						nsfwSessionSetting: a,
						refreshNsfwSessionSettingExpiryTime: i
					} = Object(tr.b)(),
					[c, l] = Object(u.useState)(-1),
					[d, b] = Object(u.useState)([]),
					[g, f] = Object(u.useState)(!1),
					[O, C] = Object(u.useState)({}),
					[y, x] = Object(u.useState)([]),
					[E, P] = Object(u.useState)(null),
					j = Object(u.useRef)(null),
					_ = Object(u.useRef)(null),
					S = Object(A.b)(),
					k = Object(p.d)(),
					M = Object(p.e)(yt.b),
					w = Object(p.e)(yt.d),
					N = Object(p.e)(at.k),
					I = Object(p.e)(ur.q),
					T = Object(p.e)(ur.p),
					R = Object(p.e)(at.P),
					L = Object(p.e)(ur.r),
					D = Object(p.e)(at.cb),
					F = Object(p.e)(yt.r),
					U = Object(p.e)(e => Object(It.ab)(e, {
						pageLayer: s
					})),
					G = Object(p.e)(e => Object(It.r)(e, {
						pageLayer: s
					})),
					B = Object(p.e)(e => Object(It.e)(e, {
						pageLayer: s
					})),
					q = Object(p.e)(e => Object(mr.a)(e, lr.d.dropdown)),
					H = Object(p.e)(ur.x),
					W = Object(p.e)(at.jb),
					V = Object(Bo.a)(G),
					Q = Object(Bo.a)(o),
					z = Object(Bo.a)(H),
					K = Object(Bo.a)(q),
					J = ((null === (n = _.current) || void 0 === n ? void 0 : n.value) || "").trim(),
					Y = he(J),
					Z = M ? Object(rt.v)(M) : s ? Object(rt.v)(s) : void 0,
					X = O[J],
					$ = Object(qo.e)({
						...Fo()(r || {}, sr.u),
						q: J
					});
				Object(u.useEffect)(() => {
					ee()
				}, [K, z, H, q]), Object(u.useEffect)(() => {
					V || !G || L || se()
				}, [V, G, L]), Object(u.useEffect)(() => {
					Lo()(H) || o ? ce(o || "") : ie()
				}, [Q, o]);
				const ee = () => {
						const e = Object(rr.a)(z, H),
							t = Object(rr.a)(K, q);
						if (!e || !t) {
							const e = H.length ? H : [...y, ...q];
							b(e)
						}
					},
					te = e => k(Object(Wo.p)({
						searchQuery: e
					})),
					ne = function() {
						let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						return e && pr.a.clear(br.a.Typeahead), k(Object(Wo.k)())
					},
					se = () => k(Object(Wo.m)()),
					oe = (e, t, n) => {
						e.preventDefault(), ((e, t, n, s) => {
							k(Object(h.b)(Object(Ao.c)({
								pathname: e,
								search: t,
								state: {
									[nr.b.SearchOriginPage]: s,
									...n
								}
							})))
						})(t.url, t.qs, {
							...n,
							routeName: F,
							subredditName: w
						}, Z)
					},
					re = async () => {
						q.length || g || (f(!0), await (() => k(Object(Xo.b)(lr.d.dropdown)))(), f(!1))
					}, ae = e => {
						R && N && x(Object(jt.Ob)({
							...e,
							section: lr.c.recent
						}, N.id))
					}, ie = function() {
						let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						l(-1), P(null), ce(""), te(""), e && pr.a.update(br.a.Typeahead), pe()
					};

				function ce(e) {
					_.current && (_.current.value = e)
				}
				const le = (e, t, n, s) => {
						const o = {
							displayQuery: e,
							rawQuery: t,
							structureType: n,
							searchQuery: J
						};
						S(Object(ir.u)(s, o))
					},
					de = (e, t, n) => {
						S(Object(ir.w)(e, t, n))
					},
					ue = (e, t, n, s) => {
						S(Object(ir.y)(e, t, n, s))
					},
					me = e => {
						const t = d[e] || null,
							n = t ? t.searchQuery : "";
						l(e), ce(n), P(t)
					},
					pe = () => {
						if (q.length || re(), N) {
							const e = Object(jt.M)(N.id);
							e.length > 0 && (x(R ? e : []), b([...e, ...q]))
						}
					},
					be = e => {
						!(!T || !T[e]) || (e ? (async e => {
							O[e] || (O[e] = !0, C({
								...O
							}), await k(Yo(e)), O[e] = !1, C({
								...O
							}))
						})(e) : pe())
					};

				function he(e) {
					const t = G && G.icon ? G.icon.url : "",
						n = null == G ? void 0 : G.displayText,
						s = !!G && G.isNSFW,
						o = lr.b.text;
					return {
						id: Go()(),
						searchQuery: e,
						type: o,
						section: lr.c.recent,
						subredditOrProfileRestrictedName: n,
						displayInfo: {
							iconUrl: t,
							isNSFW: s
						}
					}
				}
				return m.a.createElement("div", {
					className: Object(v.a)(gr.a.relativeWrapper, cs.a.container, t, {
						"m-open": I
					}),
					id: $o.b,
					ref: j
				}, m.a.createElement(wr, {
					inputRef: _,
					onChange: e => {
						const t = e.trim();
						pr.a.update(br.a.Typeahead), te(t), be(t)
					},
					searchQuery: J,
					onFormSubmit: e => {
						e.preventDefault(), J.trim() && (async e => {
							var t, n;
							const o = (null === (t = _.current) || void 0 === t ? void 0 : t.value) || "";
							if (!o.trim()) return;
							o !== J && te(o);
							let r = {
									...lr.a
								},
								l = {},
								u = !0;
							if (E && E.searchQuery === J ? ((r = E).id || (r.id = Go()()), r.section === lr.c.recent ? de(o, r, c) : r.section === lr.c.typeahead ? (l = Object(er.b)(), u = !1, ue(o, r, c, d.filter(e => e.isSubreddit))) : le(o, o, rt.c.Search, ir.a.RECENT)) : (r = he(o), S(Object(ir.n)(rt.a.FullSearchButton, Object(qo.e)({
									q: J
								}), U, br.a.Typeahead, s || void 0))), ae(r), ne(u), !r.searchQuery) return;
							const m = Object(or.a)({
								subreddit: G,
								multireddit: B,
								searchItem: r,
								searchOptions: void 0,
								shouldSearchSubreddit: U,
								includeNsfwResults: W && a
							});
							oe(e, m, l), r.isTypeaheadSuggestion && ie(u), i(), null === (n = _.current) || void 0 === n || n.blur()
						})(e)
					},
					onFocusSearchBar: () => {
						Object(bo.c)(bo.a.SearchResults) || Object(bo.e)(bo.a.SearchResults), pr.a.update(br.a.Typeahead), S(Object(ir.n)(rt.a.SearchBar, $, U, br.a.Typeahead, s || void 0)), I || ((() => k(Object(Wo.l)()))(), S(Object(ar.u)($, null != s ? s : void 0, Object(dr.b)({
							pageLayer: s
						})))), be(J)
					},
					onKeyDown: e => {
						if (e.key === po.b.Escape || e.key === po.b.Tab) ne();
						else if (e.key === po.b.ArrowDown) {
							if (e.preventDefault(), 0 === d.length || !I) return;
							if (c >= d.length - 1) return;
							me(c + 1)
						} else if (e.key === po.b.ArrowUp) {
							if (e.preventDefault(), 0 === d.length || !I) return;
							if (-1 === c) return;
							me(c - 1)
						} else e.key === po.b.Backspace && !J && U && L && (S(() => Object(ir.g)(G)), (() => k(Object(Wo.j)()))())
					},
					showCommunityPill: U,
					subreddit: G
				}), m.a.createElement($o.c, {
					container: j.current,
					focusedItemIndex: c,
					searchOriginPage: Z,
					isOpen: I,
					isTrendingPending: g,
					isTypeaheadPending: X,
					itemList: d,
					nightmode: D,
					recentSearches: y,
					trendingItems: q,
					searchItem: Y,
					typeaheadSuggestions: H,
					onClearSearchQuery: ie,
					onClose: ne,
					onRemoveRecentSearch: e => {
						N && 0 !== y.length && (Object(jt.bb)(e, N.id), x(y.filter(t => t.searchQuery !== e.searchQuery)), l(-1))
					},
					onSendSearchClickRecentEvent: de,
					onSendSearchClickTypeaheadEvent: ue,
					onSetRecentSearch: ae,
					onUpdateSearchQuery: ce,
					fireAdPixelsOfType: (e, t) => k(Object(Ho.z)(e, t))
				}))
			}
			var Ir = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				Tr = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				Ar = n("./src/reddit/selectors/responsivePage.ts"),
				Rr = n("./src/reddit/components/Header/MwebResponsiveHeader/index.m.less"),
				Lr = n.n(Rr);
			var Dr = e => {
					const {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: Object(v.a)(Lr.a.Container, t)
					}, m.a.createElement("a", {
						"aria-label": o.fbt._("Home", null, {
							hk: "1u0Rxp"
						}),
						className: Lr.a.HomeLink,
						href: G.a.redditUrl
					}, m.a.createElement(Ir.a, {
						className: Lr.a.Snoo
					}), m.a.createElement(Tr.a, {
						className: Lr.a.Wordmark,
						color: "inherit"
					})))
				},
				Fr = n("./src/reddit/actions/cooldownTime.ts"),
				Ur = n("./src/reddit/components/BadgeCounter/index.tsx");

			function Gr(e) {
				return `${e}`.padStart(2, "0")
			}
			class Br {
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
			var qr = n("./src/reddit/selectors/experiments/hotPotato.ts"),
				Hr = n("./src/reddit/components/Header/QuickLinks/Timer.m.less"),
				Wr = n.n(Hr);
			const Vr = Object(f.c)({
				isEmbedSubredditPage: qr.b,
				isRequestPending: e => e.cooldownTimer.api.pending,
				expiresAt: e => e.cooldownTimer.expiresAt,
				currentPage: yt.b
			});
			class Qr extends m.a.Component {
				constructor(e) {
					super(e), this.drawTimer = e => {
						const t = function(e) {
							if (!e) return null;
							const t = Math.min(99, Math.floor(e / 60 / 60)),
								n = Math.floor(e / 60 % 60),
								s = Math.floor(e % 60);
							return t || n || s ? t ? `${t}h${Gr(n)}` : `${n}:${Gr(s)}` : null
						}(e);
						this.state.countdown !== t && this.setState({
							countdown: t
						})
					}, this.timer = new Br(this.drawTimer), this.state = {
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
					return t && !n ? null : !e || n ? m.a.createElement(Ur.a, {
						isActive: !0,
						unreadCount: -1,
						showEmpty: !0
					}) : m.a.createElement("div", {
						className: Wr.a.timer
					}, o.fbt._("{Time remaining}", [o.fbt._param("Time remaining", e)], {
						hk: "4it6wP"
					}))
				}
			}
			var zr = Object(p.b)(Vr, e => ({
					fetchCooldownTimer: () => e(Object(Fr.e)())
				}))(Qr),
				Kr = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				Jr = n("./src/reddit/helpers/trackers/hotPotato.ts"),
				Yr = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				Zr = n("./src/reddit/hooks/useTracking.ts"),
				Xr = n("./src/reddit/icons/svgs/HotPotato/index.tsx");
			var $r = e => m.a.createElement("svg", {
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
			var ea = e => m.a.createElement("svg", {
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
				ta = n("./src/reddit/helpers/chooseVariant/index.ts");
			const na = e => {
				return Object(ta.c)(e, {
					experimentEligibilitySelector: ta.a,
					experimentName: Nt.ye
				}) === Nt.id
			};
			var sa = n("./src/reddit/components/Header/QuickLinks/index.m.less"),
				oa = n.n(sa),
				ra = m.a.memo((function(e) {
					const t = Object(Zr.a)(),
						n = Object(p.d)(),
						s = Object(u.useCallback)(() => {
							t(e => ({
								...Object(rt.o)(e),
								source: "nav",
								action: "click",
								noun: "popular"
							}))
						}, [t]),
						r = Object(u.useCallback)(() => {
							t(e => ({
								...Object(rt.o)(e),
								source: "nav",
								action: "click",
								noun: "all"
							}))
						}, [t]),
						a = Object(u.useCallback)(() => {
							t(e => ({
								...Object(rt.o)(e),
								source: "nav",
								action: "click",
								noun: "recap"
							}))
						}, [t]),
						i = Object(u.useCallback)(() => {
							n(Object(ys.a)(Cs.c[Cs.b.Rpan])), t(e => ({
								...Object(rt.o)(e),
								source: "nav",
								action: "click",
								noun: "rpan"
							}))
						}, [n, t]),
						c = Object(u.useCallback)(() => {
							t(Object(Jr.b)())
						}, [t]),
						l = Object(p.e)(at.P),
						d = Object(p.e)(ms.a),
						b = Object(p.e)(na),
						h = Object(p.e)(ks.b),
						g = Object(p.e)(qr.a),
						f = Object(p.e)(at.cb),
						O = Object(Yr.a)(),
						C = Object(Yr.a)(),
						y = Object(Yr.a)(),
						x = Object(Yr.a)(),
						E = Object(Yr.a)(),
						P = Object(Yr.a)();
					return m.a.createElement("div", {
						className: Object(v.a)(oa.a.container, e.className)
					}, m.a.createElement("div", {
						className: oa.a.row
					}, m.a.createElement(Kn.a, {
						className: oa.a.icon,
						innerRef: O.target.ref,
						to: l ? Cs.c[Cs.b.Popular] : Cs.c[Cs.b.Home],
						onClick: s,
						onMouseEnter: O.show,
						onMouseLeave: O.hide
					}, m.a.createElement(Zn.a, {
						name: "popular"
					})), m.a.createElement(Kr.a, {
						arrowProps: O.arrowProps,
						popperProps: O.popperProps,
						visible: O.visible
					}, o.fbt._("Popular", null, {
						hk: "1Kx4va"
					})), m.a.createElement(m.a.Fragment, null, m.a.createElement(Kn.a, {
						className: oa.a.icon,
						innerRef: C.target.ref,
						to: Cs.c[Cs.b.All],
						onClick: r,
						onMouseEnter: C.show,
						onMouseLeave: C.hide
					}, m.a.createElement(Zn.a, {
						name: "all"
					})), m.a.createElement(Kr.a, {
						arrowProps: C.arrowProps,
						popperProps: C.popperProps,
						visible: C.visible
					}, o.fbt._("All", null, {
						hk: "1Rk1yU"
					}))), d && m.a.createElement(m.a.Fragment, null, m.a.createElement(Kn.a, {
						className: oa.a.icon,
						innerRef: y.target.ref,
						to: Cs.c[Cs.b.Rpan],
						onClick: i,
						onMouseEnter: y.show,
						onMouseLeave: y.hide
					}, m.a.createElement(Zn.a, {
						name: "video_live"
					})), m.a.createElement(Kr.a, {
						arrowProps: y.arrowProps,
						popperProps: y.popperProps,
						visible: y.visible
					}, o.fbt._("Reddit Live", null, {
						hk: "3BFYUK"
					}))), b && m.a.createElement(m.a.Fragment, null, m.a.createElement(Kn.a, {
						className: oa.a.icon,
						innerRef: x.target.ref,
						to: "/r/psbattleslive",
						onClick: () => {},
						onMouseEnter: x.show,
						onMouseLeave: x.hide
					}, m.a.createElement($r, {
						className: oa.a.psBattlesIcon
					})), m.a.createElement(Kr.a, {
						arrowProps: x.arrowProps,
						popperProps: x.popperProps,
						visible: x.visible
					}, o.fbt._("PsBattles Live in partnership with Adobe", null, {
						hk: "3mGYdM"
					}))), h && m.a.createElement(m.a.Fragment, null, m.a.createElement(Kn.a, {
						className: oa.a.icon,
						innerRef: E.target.ref,
						to: as.b,
						onClick: a,
						onMouseEnter: E.show,
						onMouseLeave: E.hide
					}, m.a.createElement(ea, {
						className: Object(v.a)(oa.a.redditRecapIcon, {
							[oa.a.isNightMode]: f
						})
					})), m.a.createElement(Kr.a, {
						arrowProps: E.arrowProps,
						popperProps: E.popperProps,
						visible: E.visible
					}, o.fbt._("Reddit Recap page", null, {
						hk: "ZDBQK"
					}))), !!g && m.a.createElement(m.a.Fragment, null, m.a.createElement(Kn.a, {
						className: Object(v.a)(oa.a.icon, oa.a.hotPotatoLink),
						innerRef: P.target.ref,
						to: `/r/${g}`,
						onMouseEnter: P.show,
						onMouseLeave: P.hide,
						onClick: c
					}, m.a.createElement(Xr.a, {
						className: oa.a.hotPotatoIcon
					}), m.a.createElement(zr, null)), m.a.createElement(Kr.a, {
						arrowProps: P.arrowProps,
						popperProps: P.popperProps,
						visible: P.visible
					}, o.fbt._("Hot Potato", null, {
						hk: "f114"
					})))))
				})),
				aa = n("./src/reddit/actions/login.ts"),
				ia = n("./src/reddit/actions/tooltip.ts"),
				ca = n("./src/lib/combineRefs/index.tsx"),
				la = n("./src/lib/hooks/useOnClickOutside.ts"),
				da = n("./src/lib/hooks/useTooltip.ts"),
				ua = n("./src/reddit/components/HeaderIconContainer/index.m.less"),
				ma = n.n(ua);

			function pa() {
				return (pa = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ba = I.a.button("Button", ma.a),
				ha = I.a.div("Container", ma.a);

			function ga(e) {
				const {
					children: t,
					isOpen: n,
					...s
				} = e;
				return m.a.createElement(ba, pa({}, s, {
					id: e.id,
					onClick: t => e.onClick(t)
				}), m.a.createElement(ha, {
					className: Object(v.a)({
						[ma.a.isOpen]: n
					})
				}, t))
			}
			var fa = n("./src/reddit/components/HeaderUserActions/index.m.less"),
				va = n.n(fa);
			var Oa = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Ur.a, {
					isActive: !!e.unreadCount || !!e.showEmpty,
					unreadCount: e.unreadCount,
					showEmpty: !!e.showEmpty && !e.unreadCount
				}), m.a.createElement(Zn.a, {
					name: "notification",
					className: va.a.icon2020
				})),
				Ca = n("./src/lib/getParsedUserAgent/index.ts"),
				ya = n("./src/reddit/components/InboxBanner/index.m.less"),
				xa = n.n(ya);
			var Ea = Object(Re.a)(e => {
					let {
						onClose: t
					} = e;
					const n = Object(Ca.b)(navigator.userAgent);
					return m.a.createElement(De.e, null, m.a.createElement(De.i, {
						className: xa.a.modalHeader
					}, m.a.createElement(De.q, {
						className: xa.a.modalTitle
					}, o.fbt._("Turn on desktop notifications", null, {
						hk: "LDaeq"
					})), m.a.createElement(Xe.t, {
						onClick: t,
						Icon: Object(Zn.b)("close_fill"),
						size: Xe.d.XXS,
						priority: Xe.c.Plain,
						className: xa.a.modalCloseIcon
					})), m.a.createElement(De.l, null, m.a.createElement("ul", {
						className: xa.a.modalList
					}, m.a.createElement("li", {
						className: xa.a.modalListItem
					}, m.a.createElement("span", null, "1"), o.fbt._("Click on {lockIcon} in your browser address bar", [o.fbt._param("lockIcon", m.a.createElement(Zn.a, {
						name: "lock_fill",
						className: xa.a.modalListIcon
					}))], {
						hk: "kcfln"
					})), n && m.a.createElement("li", {
						className: xa.a.modalListItem
					}, m.a.createElement("span", null, "2"), o.fbt._("Select {lockIcon} site settings", [o.fbt._param("lockIcon", m.a.createElement(Zn.a, {
						name: "settings_fill",
						className: xa.a.modalListIcon
					}))], {
						hk: "4wRmvx"
					})), m.a.createElement("li", {
						className: xa.a.modalListItem
					}, m.a.createElement("span", null, n ? 3 : 2), o.fbt._("Change {lockIcon} site settings notifications to ‘Allow’", [o.fbt._param("lockIcon", m.a.createElement(Zn.a, {
						name: "notification_fill",
						className: xa.a.modalListIcon
					}))], {
						hk: "31PZ6t"
					})))), m.a.createElement(De.g, null, m.a.createElement(Xe.t, {
						text: o.fbt._("Got it", null, {
							hk: "1q53HE"
						}),
						onClick: t
					})))
				}),
				Pa = n("./src/reddit/components/InboxTooltip/hooked.m.less"),
				ja = n.n(Pa);

			function _a() {
				return (_a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Sa = m.a.memo((function(e) {
					let {
						visible: t,
						...n
					} = e;
					const [s, o] = Object(u.useState)(t);
					return Object(u.useEffect)(() => {
						let e = window.setTimeout(() => {
							e = void 0, o(t)
						}, 0);
						return () => {
							e && window.clearTimeout(e), o(!1)
						}
					}, [t]), t ? m.a.createElement("div", _a({
						id: "INBOX--TOOLTIP",
						className: Object(v.a)(ja.a.tooltip, {
							[ja.a.visible]: s
						})
					}, n.popperProps), n.children) : null
				})),
				ka = n("./src/reddit/components/InboxTooltip/Loader.ts"),
				Ma = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts");
			var wa = n("./node_modules/icepick/icepick.js");
			const Na = Object(wa.freeze)({
				name: "offset",
				options: {
					offset: [-134, 6]
				}
			});
			var Ia = n("./src/reddit/selectors/activeModal.ts"),
				Ta = n("./src/reddit/selectors/experiments/notifications.ts"),
				Aa = n("./src/reddit/components/Header/NotificationsButton/index.m.less"),
				Ra = n.n(Aa);
			const La = {
					placement: "bottom",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				Da = m.a.memo((function(e) {
					const t = Object(p.d)(),
						n = Object(Yr.a)(),
						s = function(e) {
							const t = Object(u.useMemo)(() => {
								const t = Object(da.a)(e);
								return Object(wa.updateIn)(t, ["modifiers"], e => Object(wa.push)(e, Na))
							}, [e]);
							return Object(da.b)(t)
						}(),
						r = Object(da.b)(La),
						[a, i] = Object(Ma.a)(e.userId),
						[c, l] = function(e) {
							const [t, n] = Object(u.useState)(Object(jt.u)(e));
							return [t, Object(u.useCallback)(() => {
								n(!0), Object(jt.tb)(e)
							}, [])]
						}(e.userId),
						d = Object(p.e)(Object(Ia.c)("browser_notifications_permission_settings")),
						b = Object(p.e)(Object(at.J)(3 * O.B)),
						h = Object(p.e)(Ta.f),
						g = !c && b && h,
						f = Object(u.useCallback)(() => {
							s.hide(), n.hide(), a || i(), c || l()
						}, [s, n, i, a, c, l]);
					Object(la.a)("INBOX--TOOLTIP", f);
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: e.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: Object(ca.a)(n.target.ref, s.target.ref, r.target.ref)
					}, m.a.createElement(ga, {
						"aria-expanded": s.visible,
						"aria-haspopup": !0,
						"aria-label": o.fbt._("Open notifications inbox", null, {
							hk: "1b2BKn"
						}),
						className: Ra.a.notificationInboxIconContainer,
						onClick: t => {
							t.stopPropagation(), s.visible ? f() : s.show(), e.sendNavClickInbox()
						},
						isOpen: s.visible
					}, m.a.createElement(Oa, {
						unreadCount: e.unreadCount,
						showEmpty: g
					})), !s.visible && !r.visible && m.a.createElement(Kr.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, m.a.createElement("div", null, o.fbt._("Notifications", null, {
						hk: "vAOKt"
					}))), m.a.createElement(Sa, {
						arrowProps: s.arrowProps,
						popperProps: s.popperProps,
						visible: s.visible
					}, m.a.createElement(ka.a, {
						isOpen: s.visible,
						hideTooltip: f,
						userId: e.userId,
						desktopNotificationsModalId: "browser_notifications_permission_settings",
						isLoggedIn: e.isLoggedIn
					}))), d && m.a.createElement(Ea, {
						onClose: () => {
							t(Object(_e.g)("browser_notifications_permission_settings"))
						},
						withOverlay: !0
					}))
				}));
			var Fa = n("./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts"),
				Ua = n("./src/reddit/actions/snoovatarModal.ts"),
				Ga = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				Ba = n("./src/reddit/icons/svgs/SparkleGradient/index.tsx"),
				qa = n("./src/lib/initializeClient/installReducer.ts"),
				Ha = n("./src/lib/safeJSONParse/index.ts"),
				Wa = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(qa.a)({
				features: {
					avatar: Wa.a
				}
			});
			const Va = e => 864e5 * e,
				Qa = e => {
					var t, n, s;
					return null === (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === s ? void 0 : s.quickCreateV1
				},
				za = e => {
					const t = Object(yt.q)(e);
					return Boolean((null == t ? void 0 : t[sr.v]) && Object(Ha.a)(t[sr.v]))
				},
				Ka = (e, t, n) => {
					var s;
					const o = !!(null === (s = Object(at.k)(e)) || void 0 === s ? void 0 : s.snoovatarFullBodyAsset);
					return Ja(e, t) && n === o
				},
				Ja = (e, t) => {
					const n = Object(at.k)(e);
					return !(!n || !t) && (new Date).getTime() - (e => Math.floor(1e3 * e))(n.created) > Va(t)
				};
			var Ya = n("./src/reddit/components/Header/AvatarQuickCreateCta/index.m.less"),
				Za = n.n(Ya);
			const {
				fbt: Xa
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function $a(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "view";
				if (e) {
					const n = Object(jt.z)(),
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
			var ei = e => {
					let {
						avatarUrlParams: t
					} = e;
					const n = Object(p.e)(Qa),
						s = Object(p.d)(),
						o = Object(Zr.a)();
					Object(u.useEffect)(() => {
						o(Object(Ga.o)())
					}, [o]), Object(u.useEffect)(() => {
						n || s(Object(Fa.a)())
					}, [s, n]), Object(u.useEffect)(() => {
						$a(n)
					}, [n]);
					return m.a.createElement(Xe.k, {
						onClick: () => {
							o(Object(Ga.c)()), $a(n, "click"), s(Object(Ua.b)({
								share: t,
								source: "quick_create"
							}))
						},
						className: Za.a.ctaContainer
					}, m.a.createElement("img", {
						className: Za.a.quickCreateGiftAnimation,
						src: `${G.a.assetPath}/img/snoovatars/Golden_Chest.png`,
						alt: Xa._("animated golden chest", null, {
							hk: "12HBG9"
						})
					}), m.a.createElement(m.a.Fragment, null, m.a.createElement(Ba.a, {
						className: Object(v.a)(Za.a.sparkle, Za.a.sparkle1)
					}), m.a.createElement(Ba.a, {
						className: Object(v.a)(Za.a.sparkle, Za.a.sparkle2)
					}), m.a.createElement(Ba.a, {
						className: Object(v.a)(Za.a.sparkle, Za.a.sparkle3)
					})), Xa._("Open Gift", null, {
						hk: "Cd6TH"
					}))
				},
				ti = n("./src/lib/matchRoute/index.ts"),
				ni = n("./src/chat/helpers/dom.ts"),
				si = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				oi = n("./src/reddit/actions/changeUsername.ts"),
				ri = n("./src/reddit/actions/chat/toggle.ts"),
				ai = n("./src/reddit/actions/emailVerificationTooltip.ts"),
				ii = n("./src/reddit/actions/postCreation/general.ts"),
				ci = n("./src/reddit/actions/preferences.ts"),
				li = n("./src/reddit/actions/users.ts"),
				di = n("./src/reddit/components/BlockNavigation/index.tsx"),
				ui = n("./src/reddit/components/ChangeUsernameModals/Loader.tsx"),
				mi = n("./src/reddit/components/ChangeUsernameTooltip/Loader.tsx");
			var pi = Object(Se.a)({
					getComponent: () => Object(Ne.a)(() => n.e("EmailVerificationModals").then(n.bind(null, "./src/reddit/components/EmailVerificationModals/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				bi = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				hi = n("./src/reddit/helpers/trackers/emailVerification.ts"),
				gi = n("./src/reddit/icons/svgs/Close/index.tsx"),
				fi = n("./src/reddit/components/EmailVerificationTooltip/index.m.less"),
				vi = n.n(fi);
			class Oi extends m.a.Component {
				constructor() {
					super(...arguments), this.onChangeEmailModalOpen = e => {
						e.stopPropagation(), this.props.sendEvent(Object(hi.e)(hi.a, "update")), this.props.toggleChangeEmailModal()
					}, this.onCloseTooltip = () => {
						this.props.sendEvent(Object(hi.c)(hi.a)), this.props.closeTooltip()
					}, this.onResendEmailClick = () => {
						this.props.sendEvent(Object(hi.e)(hi.a, "confirm")), this.props.resendEmail(), this.props.closeTooltip()
					}
				}
				componentDidMount() {
					Oi.shouldSendViewEvent && (Oi.shouldSendViewEvent = !1, this.props.sendEvent(Object(hi.g)(hi.a)))
				}
				render() {
					return m.a.createElement("div", {
						className: vi.a.container
					}, m.a.createElement("div", {
						className: vi.a.topLine
					}), m.a.createElement("button", {
						className: vi.a.closeWrapper,
						onClick: this.onCloseTooltip
					}, m.a.createElement(gi.a, {
						className: vi.a.closeIcon
					})), m.a.createElement("h5", {
						className: vi.a.title
					}, o.fbt._("Confirm your email:", null, {
						hk: "1RDs8b"
					})), m.a.createElement("p", {
						className: vi.a.subtitle
					}, this.props.email), m.a.createElement("p", {
						className: vi.a.description
					}, o.fbt._("Check your inbox email for Reddit's confirmation email. A current email address helps ensure you don't lose access to your account.", null, {
						hk: "2bhwUs"
					})), m.a.createElement("div", {
						className: vi.a.buttonWrapper
					}, m.a.createElement(Xe.o, {
						className: vi.a.commonBtn,
						"data-redditstyle": !0,
						onClick: this.onChangeEmailModalOpen,
						type: "button"
					}, o.fbt._("Update email", null, {
						hk: "1Cxqkk"
					})), m.a.createElement(Xe.l, {
						className: Object(v.a)(vi.a.commonBtn, vi.a.primaryBtn),
						"data-redditstyle": !0,
						onClick: this.onResendEmailClick,
						type: "button"
					}, o.fbt._("Got it", null, {
						hk: "3IP9TO"
					}))))
				}
			}
			Oi.shouldSendViewEvent = !0;
			const Ci = Object(bi.a)(Oi, [uo.a.Click, uo.a.Keydown, uo.a.Resize]);
			var yi = Object(A.c)(Ci),
				xi = n("./src/reddit/components/GoogleOneTapIFrame/index.m.less"),
				Ei = n.n(xi);
			const Pi = Object(f.c)({
				isLoggedIn: at.P
			});
			class ji extends m.a.Component {
				render() {
					const {
						className: e,
						exposeIFrameElement: t,
						isLoggedIn: n
					} = this.props;
					return m.a.createElement(T.a, {
						className: Object(v.a)(Ei.a.IFrame, {
							[Ei.a["m-hidden"]]: n
						}, e),
						exposeIFrameElement: t,
						path: R.c.GoogleOneTap
					})
				}
			}
			var _i = Object(p.b)(Pi)(ji),
				Si = n("./src/reddit/components/Header/GoldCoinsCta/index.tsx");
			var ki = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Ur.a, {
					isActive: e.badgeCount > 0 || e.hasUnreadGroupMessages,
					unreadCount: e.badgeCount
				}), m.a.createElement(Zn.a, {
					name: "chat",
					className: va.a.icon2020
				})),
				Mi = n("./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less"),
				wi = n.n(Mi);
			const {
				fbt: Ni
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Ii = e => {
				const {
					onCloseFlyout: t
				} = e;
				return m.a.createElement("div", {
					className: wi.a.container
				}, m.a.createElement("p", {
					className: wi.a.title
				}, Ni._("New User Settings", null, {
					hk: "1Sziu9"
				})), m.a.createElement("h5", {
					className: wi.a.subtitle
				}, Ni._("Like customizing Reddit?", null, {
					hk: "38eFal"
				})), m.a.createElement("p", {
					className: wi.a.description
				}, Ni._("You can save how you sort and view your communities in user settings.", null, {
					hk: "XMkGT"
				})), m.a.createElement(Xe.o, {
					className: wi.a.dismissBtn,
					onClick: t
				}, Ni._("Got it", null, {
					hk: "3IP9TO"
				})))
			};
			var Ti = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Ur.a, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount
				}), m.a.createElement(Zn.a, {
					name: "message",
					className: va.a.icon2020
				})),
				Ai = n("./node_modules/lodash/noop.js"),
				Ri = n.n(Ai),
				Li = n("./src/lib/prettyPrintNumber/index.ts"),
				Di = n("./src/realtime/GQLSubscription/async.tsx"),
				Fi = n("./src/reddit/actions/alpha.ts"),
				Ui = n("./src/reddit/actions/modMode.ts"),
				Gi = n("./src/reddit/actions/profile/index.ts"),
				Bi = n("./src/reddit/constants/elementClassNames.ts"),
				qi = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				Hi = n("./src/reddit/helpers/karma.ts"),
				Wi = n("./src/reddit/hooks/useWindowEvent.ts"),
				Vi = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				Qi = n("./src/reddit/icons/fonts/Premium/index.tsx"),
				zi = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				Ki = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				Ji = n("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				Yi = n("./src/reddit/selectors/modModeEnabled.ts"),
				Zi = n("./src/reddit/selectors/seo/index.ts"),
				Xi = n("./src/reddit/selectors/tooltip.ts"),
				$i = n("./src/higherOrderComponents/asTooltip.tsx"),
				ec = n("./src/lib/constants/icons.ts"),
				tc = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				nc = n("./src/reddit/helpers/trackers/user.ts"),
				sc = n("./src/reddit/components/HeaderUserDropdown/UserMenu/Components/WrappedRedditLink/index.m.less"),
				oc = n.n(sc);
			const {
				fbt: rc
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ac = Object(tc.c)(() => m.a.createElement("img", {
				src: as.a,
				className: cs.a.wrappedRedditDropdown
			}), () => m.a.createElement("div", {
				className: oc.a.wrappedRedditLink
			}, rc._("{=Reddit Recap}{=NEW!}", [rc._param("=Reddit Recap", m.a.createElement("p", {
				className: oc.a.title
			}, rc._("Reddit Recap", null, {
				hk: "1fzA7a"
			}))), rc._param("=NEW!", m.a.createElement("p", {
				className: oc.a.new
			}, rc._("NEW!", null, {
				hk: "hAUg8"
			})))], {
				hk: "3xR4ek"
			}))), ic = e => {
				let {
					isNavClickExperimentEnabled: t
				} = e;
				const n = Object(p.e)(ks.b),
					s = Object(A.b)(),
					o = t ? oc.a.wrappedExperimentRedditLink : "";
				return n ? m.a.createElement(ac, {
					className: o,
					href: as.b,
					onClick: () => s(Object(nc.h)())
				}) : null
			};
			var cc = n("./src/reddit/components/HiddenDiv.tsx"),
				lc = n("./src/reddit/controls/Dropdown/index.tsx"),
				dc = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				uc = n("./src/reddit/helpers/trackers/authControls.ts"),
				mc = n("./src/reddit/helpers/trackers/modTools.ts"),
				pc = n("./src/reddit/helpers/trackers/navigation.ts"),
				bc = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				hc = n("./src/reddit/icons/svgs/SnooNoEyes/index.tsx"),
				gc = n("./src/reddit/constants/colors.ts"),
				fc = n("./src/reddit/controls/InternalLink/index.tsx");

			function vc() {
				return (vc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Oc = e => {
					const {
						children: t,
						className: n,
						href: s = "#",
						onClick: o,
						rel: r
					} = e, a = {
						onClick: o,
						rel: r,
						className: n
					};
					return (s || "").startsWith("http") ? m.a.createElement("a", vc({
						href: s
					}, a), t) : m.a.createElement(fc.a, vc({
						to: s
					}, a), t)
				},
				Cc = n("./src/reddit/components/HeaderUserDropdown/UserMenu/shared.m.less"),
				yc = n.n(Cc);
			const xc = e => {
					const {
						title: t,
						titleClassName: n
					} = e;
					return m.a.createElement("span", {
						className: Object(v.a)(yc.a.title, n)
					}, t)
				},
				Ec = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: o
					} = e;
					return m.a.createElement("button", {
						className: Object(v.a)(yc.a.secondLevelButton, t),
						onClick: n
					}, m.a.createElement(xc, {
						title: s,
						titleClassName: o
					}))
				},
				Pc = e => {
					const {
						className: t,
						href: n,
						onClick: s,
						title: o,
						titleClassName: r,
						rel: a
					} = e;
					return m.a.createElement(Oc, {
						className: Object(v.a)(yc.a.secondLevelButton, t),
						href: n,
						onClick: s,
						rel: a
					}, m.a.createElement(xc, {
						title: o,
						titleClassName: r
					}))
				},
				jc = e => {
					const {
						className: t,
						href: n,
						iconClassName: s,
						iconUrl: o,
						onClick: r,
						rel: a,
						title: i,
						titleClassName: c
					} = e;
					return m.a.createElement(Oc, {
						className: Object(v.a)(yc.a.secondLevelButton, t),
						href: n,
						onClick: r,
						rel: a
					}, m.a.createElement(ss.b, {
						"aria-hidden": !0,
						className: Object(v.a)(yc.a.subredditIcon, s),
						iconUrl: o,
						primaryColor: gc.a.snoo
					}), m.a.createElement(xc, {
						title: i,
						titleClassName: c
					}))
				},
				_c = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: o,
						isEnabled: r
					} = e;
					return m.a.createElement("button", {
						className: Object(v.a)(yc.a.secondLevelSwitch, t),
						onClick: n,
						onMouseDown: e => {
							e.preventDefault()
						}
					}, m.a.createElement(xc, {
						title: s,
						titleClassName: o
					}), m.a.createElement(dc.a, {
						className: yc.a.toggleSwitch,
						"data-redditstyle": !0,
						on: r,
						redditStyle: !0,
						tabIndex: -1
					}))
				};
			var Sc = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				kc = n("./src/reddit/selectors/avatarMarketing.ts"),
				Mc = n("./src/reddit/selectors/meta.ts"),
				wc = n("./src/reddit/components/HeaderUserDropdown/avatar.m.less"),
				Nc = n.n(wc);
			const Ic = (e, t) => e && m.a.createElement("div", {
				className: Nc.a.marketingBadge
			}, m.a.createElement(Sc.a, {
				className: Nc.a.marketingAsset,
				headshot: e
			}), o.fbt._("New", null, {
				hk: "2TRcjA"
			}), !t && m.a.createElement(m.a.Fragment, null, m.a.createElement(Ba.a, {
				className: Object(v.a)(Nc.a.sparkle, Nc.a.sparkle1)
			}), m.a.createElement(Ba.a, {
				className: Object(v.a)(Nc.a.sparkle, Nc.a.sparkle2)
			}), m.a.createElement(Ba.a, {
				className: Object(v.a)(Nc.a.sparkle, Nc.a.sparkle3)
			}), m.a.createElement(Ba.a, {
				className: Object(v.a)(Nc.a.sparkle, Nc.a.sparkle4)
			})));
			var Tc = e => {
				let {
					useNewButtonComponent: t,
					onClick: n
				} = e;
				var s;
				const r = Object(p.d)(),
					a = Object(Zr.a)(),
					i = Object(It.fb)(),
					c = Object(p.e)(e => e.user.account),
					l = Object(p.e)(es.c),
					d = Object(p.e)(_s.b),
					u = Object(p.e)(kc.b),
					b = Object(p.e)(kc.a),
					h = () => r(Object(Ua.b)({
						clickSource: "nav"
					})),
					g = Object(p.e)(Mc.i).startsWith("en");
				if ((null === (s = null == i ? void 0 : i.meta) || void 0 === s ? void 0 : s.name) === O.Nb.AVATAR) return null;
				!u && d && r(Object(Fa.a)()), b && a(Ga.m);
				const f = c && c.snoovatarFullBodyAsset ? o.fbt._("Style Avatar", null, {
					hk: "1HIsKA"
				}) : o.fbt._("Create Avatar", null, {
					hk: "3kfCbX"
				});
				if (t) {
					const e = m.a.createElement(m.a.Fragment, null, f, g && Ic(b, l));
					return m.a.createElement(Ec, {
						onClick: () => {
							h(), "function" == typeof n && n()
						},
						title: e,
						titleClassName: Nc.a.avatarLinkBody
					})
				}
				const v = Object(tc.c)((null == c ? void 0 : c.snoovatarFullBodyAsset) ? Cl("avatar_style") : Cl("add"), ((e, t, n, s) => o => m.a.createElement("div", {
					className: `${Nc.a.avatarLinkBody} ${o.className}`
				}, e, s && Ic(t, n)))(f, b, l, g));
				return m.a.createElement(v, {
					onClick: h
				})
			};
			const Ac = e => {
					const {
						icon: t,
						title: n,
						titleClassName: s
					} = e;
					return m.a.createElement("span", {
						className: yc.a.headingContent
					}, m.a.createElement("span", {
						className: yc.a.iconContainer
					}, t), m.a.createElement("span", {
						className: Object(v.a)(yc.a.title, s)
					}, n))
				},
				Rc = e => {
					const {
						className: t,
						icon: n,
						onClick: s,
						title: o,
						titleClassName: r
					} = e;
					return m.a.createElement("button", {
						className: Object(v.a)(yc.a.button, t),
						onClick: s
					}, m.a.createElement(Ac, {
						icon: n,
						title: o,
						titleClassName: r
					}))
				},
				Lc = e => {
					const {
						className: t,
						href: n,
						icon: s,
						onClick: o,
						rel: r,
						title: a,
						titleClassName: i
					} = e;
					return m.a.createElement(Oc, {
						className: Object(v.a)(yc.a.button, t),
						href: n,
						rel: r,
						onClick: o
					}, m.a.createElement(Ac, {
						icon: s,
						title: a,
						titleClassName: i
					}))
				};
			class Dc extends m.a.Component {
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
						onClick: o,
						title: r,
						url: a
					} = this.props, i = null !== (e = this.props.isOpen) && void 0 !== e ? e : this.state.isOpen;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("button", {
						className: yc.a.button,
						type: "button",
						onClick: e => {
							if (this.toggleOpen(e), "function" == typeof o) {
								const t = e.target,
									n = Boolean(t.getAttribute("data-chevron"));
								o(e, n)
							}
						}
					}, m.a.createElement("span", {
						className: yc.a.headingContent,
						tabIndex: -1
					}, m.a.createElement("span", {
						className: yc.a.iconContainer
					}, s), m.a.createElement("span", {
						className: yc.a.title
					}, a ? m.a.createElement(Oc, {
						className: yc.a.innerLink,
						href: a
					}, r) : m.a.createElement(m.a.Fragment, null, r)), m.a.createElement(Zn.a, {
						"data-chevron": !0,
						name: "caret_down",
						className: Object(v.a)(yc.a.chevronIcon, {
							[yc.a["m-expanded"]]: i
						})
					}))), m.a.createElement("div", {
						className: Object(v.a)(yc.a.contentContainer, yc.a["m-collapsible"], {
							[yc.a.isOpen]: i
						}, n)
					}, t))
				}
			}
			var Fc = Dc;
			var Uc = [{
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
				Gc = n("./src/reddit/components/HeaderUserDropdown/UserMenu/ExploreMenu/styles.m.less"),
				Bc = n.n(Gc);
			var qc = e => {
				let {
					isOpen: t,
					onClick: n,
					sendEvent: s
				} = e;
				const [r, a] = Object(u.useState)(null), i = e => () => {
					a(r === e ? null : e)
				};
				return m.a.createElement(Fc, {
					icon: m.a.createElement(Zn.a, {
						name: "discover"
					}),
					isOpen: t,
					onClick: (e, t) => {
						s(Object(pc.c)(t ? "explore_chevron" : "explore_menu")), "function" == typeof n && n(e)
					},
					title: o.fbt._("Explore", null, {
						hk: "4xNnBs"
					})
				}, m.a.createElement("span", null, Uc.map((e, t) => ((e, t, n) => {
					let {
						link: s,
						sublinks: o
					} = e, {
						isOpen: r,
						onClick: a
					} = t;
					return m.a.createElement(Fc, {
						className: Bc.a.collapsibleContainer,
						isOpen: r,
						key: s.url,
						onClick: (e, t) => {
							s.noun && n(Object(pc.c)(s.noun + (t ? "_chevron" : "_menu"))), "function" == typeof a && a(e)
						},
						title: s.title,
						url: s.url
					}, o.map(e => m.a.createElement(Pc, {
						className: Bc.a.basicLink,
						href: e.url,
						key: e.url,
						onClick: () => {
							e.noun && n(Object(pc.c)(e.noun + "_menu"))
						},
						title: e.title
					})))
				})(e, (e => ({
					onClick: i(e),
					isOpen: r === e
				}))(t), s))))
			};
			var Hc = e => {
				const {
					title: t,
					children: n,
					icon: s
				} = e;
				return m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
					className: yc.a.heading
				}, m.a.createElement("span", {
					className: yc.a.headingContent
				}, m.a.createElement("span", {
					className: yc.a.iconContainer
				}, s), m.a.createElement("span", {
					className: yc.a.title
				}, t))), m.a.createElement("div", {
					className: yc.a.contentContainer
				}, n))
			};
			const Wc = () => {
					const e = Object(p.d)(),
						t = Object(Zr.a)(),
						n = Object(p.e)(at.cb);
					return m.a.createElement(_c, {
						isEnabled: n,
						onClick: () => {
							t(Object(nc.i)(n)), (t => e(Object(ci.z)(t)))(!n)
						},
						title: o.fbt._("Dark Mode", null, {
							hk: "PaAOV"
						})
					})
				},
				Vc = () => {
					const e = Object(p.d)(),
						t = Object(Zr.a)(),
						n = Object(p.e)(e => e.user.account),
						s = Object(p.e)(Yi.a);
					return n && n.isMod ? m.a.createElement(_c, {
						isEnabled: s,
						onClick: () => {
							t(Object(mc.i)(!s)), (() => e(Object(Ui.b)()))()
						},
						title: o.fbt._("Mod Mode", null, {
							hk: "1gLGCN"
						})
					}) : null
				},
				Qc = () => {
					const e = Object(p.d)(),
						t = Object(A.b)(),
						n = Object(p.e)(at.k),
						s = Object(p.e)(at.U);
					return n ? m.a.createElement(Hc, {
						icon: m.a.createElement(Zn.a, {
							name: "profile"
						}),
						title: o.fbt._("My Stuff", null, {
							hk: "15XGVl"
						})
					}, m.a.createElement(_c, {
						title: o.fbt._("Online Status", null, {
							hk: "3t396G"
						}),
						isEnabled: s,
						onClick: () => {
							t(Object(nc.j)(!s)), (t => e(Object(ci.I)({
								showPresence: t
							})))(!s)
						}
					}), m.a.createElement(ic, {
						isNavClickExperimentEnabled: !0
					}), m.a.createElement(Pc, {
						title: o.fbt._("Profile", null, {
							hk: "czKk9"
						}),
						href: null == n ? void 0 : n.url,
						onClick: () => t(Object(pc.c)("profile"))
					}), m.a.createElement(Tc, {
						onClick: () => e(Object(ia.j)({
							tooltipId: "USER_DROPDOWN_ID"
						})),
						useNewButtonComponent: !0
					}), m.a.createElement(Pc, {
						title: o.fbt._("User Settings", null, {
							hk: "2HIDAR"
						}),
						href: "/settings/",
						onClick: () => t(Object(pc.c)("settings"))
					})) : null
				},
				zc = () => {
					return Object(p.e)(at.k) ? m.a.createElement(Hc, {
						title: o.fbt._("View Options", null, {
							hk: "142L6P"
						}),
						icon: m.a.createElement(Zn.a, {
							name: "views"
						})
					}, m.a.createElement(Vc, null), m.a.createElement(Wc, null)) : null
				},
				Kc = e => {
					let {
						isOpen: t,
						onClick: n
					} = e;
					return Object(p.e)(at.k) ? null : m.a.createElement(Fc, {
						icon: m.a.createElement(Zn.a, {
							name: "settings"
						}),
						title: o.fbt._("Settings", null, {
							hk: "1AC3DI"
						}),
						isOpen: t,
						onClick: n
					}, m.a.createElement(Wc, null))
				},
				Jc = e => {
					let {
						isOpen: t,
						onClick: n,
						sendEvent: s
					} = e;
					return m.a.createElement(Fc, {
						icon: m.a.createElement(Zn.a, {
							name: "rules"
						}),
						isOpen: t,
						onClick: (e, t) => {
							s(Object(pc.c)(t ? "terms_chevron" : "terms_menu")), "function" == typeof n && n(e)
						},
						title: o.fbt._("Terms & Policies", null, {
							hk: "3sa1sF"
						})
					}, m.a.createElement(Pc, {
						href: "https://www.redditinc.com/policies/user-agreement",
						onClick: () => s(Object(pc.c)("user_agreement")),
						title: o.fbt._("User Agreement", null, {
							hk: "kfqI"
						})
					}), m.a.createElement(Pc, {
						href: "https://www.redditinc.com/policies/privacy-policy",
						onClick: () => s(Object(pc.c)("privacy_policy")),
						title: o.fbt._("Privacy Policy", null, {
							hk: "y8Vyn"
						})
					}), m.a.createElement(Pc, {
						href: "https://www.redditinc.com/policies/content-policy",
						onClick: () => s(Object(pc.c)("content_policy")),
						title: o.fbt._("Content Policy", null, {
							hk: "2xjmLL"
						})
					}), m.a.createElement(Pc, {
						href: "https://www.redditinc.com/policies/moderator-guidelines",
						onClick: () => s(Object(pc.c)("mod_policy")),
						title: o.fbt._("Moderator Guidelines", null, {
							hk: "2AfPVY"
						})
					}))
				};
			var Yc = n("./src/reddit/helpers/getReredditLinkWithYear/index.ts");
			var Zc = () => [{
				noun: "ios",
				rel: "nofollow",
				title: () => o.fbt._("Reddit iOS", null, {
					hk: "2W8O9q"
				}),
				url: "https://reddit.onelink.me/MRHZ/b3d845e"
			}, {
				noun: "android",
				rel: "nofollow",
				title: () => o.fbt._("Reddit Android", null, {
					hk: "SmUA3"
				}),
				url: "https://reddit.onelink.me/MRHZ/4c212f61"
			}, {
				noun: "rereddit",
				title: () => o.fbt._("Rereddit", null, {
					hk: "1DyKwo"
				}),
				url: Object(Yc.a)()
			}, {
				noun: "communities",
				title: () => o.fbt._("Communities", null, {
					hk: "9RIu9"
				}),
				url: "/subreddits/a-1/"
			}, {
				noun: "about_reddit",
				title: () => o.fbt._("About Reddit", null, {
					hk: "3cosfA"
				}),
				url: "https://www.redditinc.com"
			}, {
				noun: "advertise",
				title: () => o.fbt._("Advertise", null, {
					hk: "3eP3Lb"
				}),
				url: "https://www.redditinc.com/advertising"
			}, {
				noun: "blog",
				title: () => o.fbt._("Blog", null, {
					hk: "2PoxW5"
				}),
				url: "https://redditblog.com"
			}, {
				noun: "careers",
				title: () => o.fbt._("Careers", null, {
					hk: "g9gZP"
				}),
				url: "https://www.redditinc.com/careers"
			}, {
				noun: "press",
				title: () => o.fbt._("Press", null, {
					hk: "10XBDT"
				}),
				url: "https://www.redditinc.com/press"
			}];
			var Xc = e => {
					let {
						isLoggedIn: t,
						isOpen: n,
						onClick: s,
						sendEvent: r,
						url: a
					} = e;
					return m.a.createElement(Fc, {
						icon: m.a.createElement(Zn.a, {
							name: "info"
						}),
						title: o.fbt._("More", null, {
							hk: "42foEw"
						}),
						isOpen: n,
						onClick: (e, t) => {
							r(Object(pc.c)(t ? "more_chevron" : "more_menu")), "function" == typeof s && s(e)
						}
					}, Zc().map(e => ((e, t) => {
						let {
							noun: n,
							rel: s,
							title: o,
							url: r
						} = e;
						return m.a.createElement(Pc, {
							href: r,
							key: r,
							onClick: () => {
								n && t(Object(pc.c)(n))
							},
							rel: s,
							title: o()
						})
					})(e, r)), t ? m.a.createElement(Pc, {
						href: "https://old.reddit.com" + a,
						title: o.fbt._("Visit Old Reddit", null, {
							hk: "3Fo9ag"
						}),
						onClick: () => {
							r(Object(pc.c)("old_reddit")), r(e => ({
								source: "redesignbanner",
								action: "click",
								noun: "2xdropdown_visit_old",
								screen: rt.ab(e),
								subreddit: rt.ib(e)
							}))
						}
					}) : null)
				},
				$c = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				el = n("./src/reddit/components/HeaderUserDropdown/UserMenu/RecentCommunitiesMenu/styles.m.less"),
				tl = n.n(el);
			var nl = e => {
					let {
						isOpen: t,
						onClick: n
					} = e;
					const [{
						links: s,
						showAll: r
					}, a] = Object(u.useState)({
						links: Object($c.b)(),
						showAll: !1
					});
					if (Object(u.useEffect)(() => {
							t || a({
								links: s,
								showAll: !1
							})
						}, [s, t]), 0 === s.length) return null;
					const i = r ? s : s.slice(0, 3),
						c = () => a({
							links: s,
							showAll: !r
						});
					return m.a.createElement(Fc, {
						"aria-hidden": !0,
						icon: m.a.createElement(Zn.a, {
							name: "history"
						}),
						isOpen: t,
						title: o.fbt._("Recent Communities", null, {
							hk: "cJ4rl"
						}),
						onClick: n
					}, i.map(e => {
						var t, n;
						return m.a.createElement(jc, {
							className: tl.a.basicLink,
							href: e.url,
							iconClassName: e.communityIcon || (null === (t = e.icon) || void 0 === t ? void 0 : t.url) ? void 0 : tl.a.subredditIcon,
							iconUrl: e.communityIcon || (null === (n = e.icon) || void 0 === n ? void 0 : n.url),
							key: e.url,
							title: e.title,
							titleClassName: tl.a.title
						})
					}), s.length > 3 && (e => m.a.createElement("span", {
						className: yc.a.spanButton,
						onClick: c
					}, m.a.createElement("span", {
						className: Object(v.a)(yc.a.headingContent, tl.a.headingContent)
					}, m.a.createElement("span", {
						className: yc.a.title
					}, e))))(r ? o.fbt._("see less", null, {
						hk: "3tQWvR"
					}) : o.fbt._("see more", null, {
						hk: "1WV0AC"
					})))
				},
				sl = n("./src/reddit/components/HeaderUserDropdown/UserMenu/index.m.less"),
				ol = n.n(sl);

			function rl() {
				return (rl = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const al = e => {
					e.nativeEvent.stopImmediatePropagation()
				},
				il = e => {
					const t = e && e.coins || 0;
					return o.fbt._({
						"*": "{number of coins} coins",
						_1: "1 coin"
					}, [o.fbt._plural(t, "number of coins")], {
						hk: "qmnnm"
					})
				};
			var cl;
			! function(e) {
				e[e.RecentCommunitiesMenu = 0] = "RecentCommunitiesMenu", e[e.ExploreMenu = 1] = "ExploreMenu", e[e.MoreMenu = 2] = "MoreMenu", e[e.Settings = 3] = "Settings", e[e.TermsAndPolicies = 4] = "TermsAndPolicies"
			}(cl || (cl = {}));
			var ll = e => {
					const {
						closeUserDropdown: t,
						dispatchOpenLoginModal: n,
						logoutUser: s,
						openCommunityCreationModal: r,
						sendEvent: a,
						shouldShowCreateCommunityItem: i,
						url: c,
						user: l
					} = e, [d, p] = Object(u.useState)(cl.TermsAndPolicies), b = e => () => {
						p(d === e ? null : e)
					}, h = e => ({
						onClick: b(e),
						isOpen: d === e
					}), g = !!l, f = () => {
						t(), n()
					};
					return m.a.createElement("div", {
						onClick: al
					}, m.a.createElement(Qc, null), m.a.createElement(zc, null), m.a.createElement(() => i ? m.a.createElement(Rc, {
						icon: m.a.createElement(Zn.a, {
							name: "community"
						}),
						onClick: () => {
							r(), a(Object(bc.a)())
						},
						title: o.fbt._("Create a Community", null, {
							hk: "3QGru4"
						})
					}) : null, null), m.a.createElement(() => m.a.createElement(Lc, {
						icon: m.a.createElement(Zn.a, {
							name: "coins"
						}),
						href: "/coins",
						title: m.a.createElement(m.a.Fragment, null, m.a.createElement("span", null, o.fbt._("Coins", null, {
							hk: "2g3szC"
						})), m.a.createElement("span", {
							className: ol.a.meta
						}, il(l))),
						onClick: () => {
							Object(bo.e)(bo.a.GoldPayment, !0), e.sendEvent(Object(nc.d)())
						},
						titleClassName: ol.a.coinsTitle,
						className: ol.a.coinsLink
					}), null), m.a.createElement(() => m.a.createElement(Lc, {
						icon: m.a.createElement(Zn.a, {
							name: "premium"
						}),
						href: "/premium",
						onClick: () => {
							Object(bo.e)(bo.a.GoldPayment, !0), e.sendEvent(Object(nc.g)())
						},
						title: o.fbt._("Premium", null, {
							hk: "Ib64I"
						})
					}), null), m.a.createElement(() => m.a.createElement(Lc, {
						icon: m.a.createElement(Zn.a, {
							name: "powerup"
						}),
						href: Es.a,
						onClick: () => {
							Object(bo.e)(bo.a.GoldPayment, !0), e.sendEvent(Object(nc.e)())
						},
						title: o.fbt._("Powerups", null, {
							hk: "2rTyID"
						})
					}), null), m.a.createElement(() => m.a.createElement(Lc, {
						icon: m.a.createElement(Zn.a, {
							name: "live"
						}),
						href: js.a,
						onClick: () => e.sendEventWithName("reddit_talk"),
						title: o.fbt._("Talk", null, {
							hk: "2nFtKJ"
						})
					}), null), !g && m.a.createElement(nl, h(cl.RecentCommunitiesMenu)), m.a.createElement(qc, rl({}, h(cl.ExploreMenu), {
						sendEvent: a
					})), m.a.createElement(Kc, h(cl.Settings)), m.a.createElement(() => m.a.createElement(Lc, {
						href: "https://www.reddithelp.com/hc/en-us",
						icon: m.a.createElement(Zn.a, {
							name: "help"
						}),
						title: o.fbt._("Help Center", null, {
							hk: "4sGjc0"
						}),
						onClick: () => e.sendEventWithName("help_center")
					}), null), m.a.createElement(Xc, rl({}, h(cl.MoreMenu), {
						isLoggedIn: g,
						url: c,
						sendEvent: a
					})), m.a.createElement(Jc, rl({}, h(cl.TermsAndPolicies), {
						sendEvent: a
					})), m.a.createElement(() => g ? m.a.createElement(Rc, {
						icon: m.a.createElement(Zn.a, {
							name: "logout"
						}),
						onClick: () => {
							e.sendEventWithName("logout"), s()
						},
						title: o.fbt._("Log Out", null, {
							hk: "2SjIc8"
						})
					}) : m.a.createElement(Rc, {
						icon: m.a.createElement(Zn.a, {
							name: "profile"
						}),
						onClick: f,
						title: o.fbt._("Sign Up or Log In", null, {
							hk: "3pedCU"
						})
					}), null), m.a.createElement(() => m.a.createElement("div", {
						className: yc.a.copyrightContainer
					}, m.a.createElement("span", {
						className: yc.a.copyrightText
					}, o.fbt._("© {year} Reddit, Inc. All rights reserved", [o.fbt._param("year", (new Date).getFullYear().toString())], {
						hk: "1rgU6A"
					}))), null))
				},
				dl = n("./src/reddit/components/HeaderUserDropdown/index.m.less"),
				ul = n.n(dl);

			function ml() {
				return (ml = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const pl = "undefined" != typeof window && "new.reddit.com" !== window.location.hostname,
				bl = I.a.wrapped(lc.a, "Dropdown", ul.a),
				hl = Object($i.a)(bl),
				gl = e => t => m.a.createElement(Zn.a, ml({
					name: e
				}, t)),
				fl = e => m.a.createElement(tc.a, {
					className: Object(v.a)(ul.a.button, e.className),
					"data-redditstyle": !0,
					onClick: e.onClick
				}, e.children, m.a.createElement("div", {
					className: ul.a.buttonText
				}, e.displayText), m.a.createElement(dc.a, {
					className: ul.a.toggleSwitch,
					"data-redditstyle": !0,
					redditStyle: !0,
					on: e.isEnabled
				}));
			var vl = Object(A.c)(e => {
				const {
					logoutUser: t,
					dispatchOpenLoginModal: n,
					isCrawler: s,
					isModModeEnabled: r,
					isPresenceToggleEnabled: a,
					navbarLikeMweb: i,
					navbarLikeMwebV2: c,
					nightmode: l,
					requestAwardKarma: d,
					showPresence: b,
					toggleModMode: h,
					user: g,
					sendEvent: f,
					shouldShowCreateCommunityItem: v,
					openCommunityCreationModal: O
				} = e, C = g && g.id, y = Object(p.e)(_s.q), x = Object(p.e)(t => e.isOpen && Object(_s.y)(t)), E = Object(p.e)(_s.a);
				Object(u.useEffect)(() => {
					d()
				}, [C]);
				const P = Object(tc.c)(gl("settings"), o.fbt._("User Settings", null, {
						hk: "46J4vT"
					})),
					_ = Object(tc.b)(gl("help"), o.fbt._("Help Center", null, {
						hk: "4sGjc0"
					})),
					S = Object(tc.b)(gl("external_link"), o.fbt._("Visit Old Reddit", null, {
						hk: "3Fo9ag"
					})),
					k = Object(tc.c)(gl("logout"), o.fbt._("Log In / Sign Up", null, {
						hk: "4xbfvS"
					})),
					M = Object(tc.c)(gl("logout"), o.fbt._("Log Out", null, {
						hk: "2SjIc8"
					})),
					w = Object(tc.c)(hc.a, o.fbt._("Opt In to New Reddit", null, {
						hk: "4jiTxA"
					})),
					N = Object(tc.b)(gl(ec.a.campaign), o.fbt._("Advertise on Reddit", null, {
						hk: "3R4KSI"
					})),
					I = (e => {
						const t = e && e.coins || 0;
						return o.fbt._({
							"*": "{number of coins} coins",
							_1: "1 coin"
						}, [o.fbt._plural(t, "number of coins")], {
							hk: "qmnnm"
						})
					})(g),
					T = Object(tc.c)(gl("coins"), o.fbt._("Coins", null, {
						hk: "25oh47"
					}), {
						meta: I
					}),
					A = o.fbt._("No ads, monthly coins, and more!", null, {
						hk: "3OXYGs"
					}),
					R = Object(tc.c)(gl("premium"), o.fbt._("Premium", null, {
						hk: "1SD1CS"
					}), {
						meta: x ? A : void 0
					}),
					L = () => {
						Object(bo.e)(bo.a.GoldPayment, !0), f(Object(nc.g)())
					},
					D = Object(tc.c)(gl("powerup"), o.fbt._("Powerups", null, {
						hk: "3ND1rQ"
					})),
					F = Object(tc.c)(gl("live"), o.fbt._("Talk", null, {
						hk: "5IHxP"
					})),
					U = Object(tc.c)(gl("prediction"), o.fbt._("Predictions", null, {
						hk: "1LUvJo"
					})),
					G = Object(tc.c)(gl("community"), o.fbt._("Create a Community", null, {
						hk: "3QGru4"
					}));
				return i || c ? s ? m.a.createElement(cc.a, null, m.a.createElement(ll, e)) : m.a.createElement(hl, {
					className: ul.a.navbarLikeMweb,
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID",
					tooltipPosition: ["right", "top"],
					targetPosition: ["right", "bottom"]
				}, m.a.createElement(ll, e)) : m.a.createElement(hl, {
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID"
				}, g && a && m.a.createElement(m.a.Fragment, null, m.a.createElement("h3", {
					className: ul.a.sectionHeader,
					role: "heading"
				}, o.fbt._("Online Status", null, {
					hk: "23SMHV"
				})), m.a.createElement(fl, {
					className: ul.a.presenceToggle,
					displayText: b ? o.fbt._("On", null, {
						hk: "3aW5MW"
					}) : o.fbt._("Off", null, {
						hk: "pRgYU"
					}),
					isEnabled: b,
					onClick: () => {
						f(Object(nc.j)(!b)), e.toggleShowPresence(!b)
					}
				})), g && m.a.createElement(u.Fragment, null, m.a.createElement("h3", {
					className: ul.a.sectionHeader,
					role: "heading"
				}, o.fbt._("My Stuff", null, {
					hk: "3aVCEV"
				})), m.a.createElement(ic, null), (e => {
					const t = o.fbt._("Profile", null, {
							hk: "czKk9"
						}),
						n = Object(tc.c)(gl("profile"), t);
					return m.a.createElement(n, {
						href: e.url,
						onClick: () => f(Object(pc.c)("profile"))
					})
				})(g), m.a.createElement(Tc, null), m.a.createElement(P, {
					href: "/settings",
					onClick: () => f(Object(pc.c)("settings"))
				})), m.a.createElement("h3", {
					className: ul.a.sectionHeader,
					role: "heading"
				}, o.fbt._("View Options", null, {
					hk: "3bZPKB"
				})), g && g.isMod && m.a.createElement(fl, {
					displayText: o.fbt._("Mod Mode", null, {
						hk: "3Rb4sj"
					}),
					isEnabled: r,
					onClick: () => {
						f(Object(mc.i)(!r)), h()
					}
				}, m.a.createElement(Zn.a, {
					name: "mod_mode",
					className: ul.a.modModeIcon
				})), m.a.createElement(fl, {
					displayText: o.fbt._("Dark Mode", null, {
						hk: "1Tx6hE"
					}),
					isEnabled: l,
					onClick: () => {
						f(Object(nc.i)(l)), e.toggleNightmode(!l)
					}
				}, m.a.createElement(Zn.a, {
					name: "night",
					className: ul.a.nightIcon
				})), m.a.createElement("h3", {
					className: ul.a.sectionHeader,
					role: "heading"
				}, o.fbt._("More Stuff", null, {
					hk: "4Gad8T"
				})), v && m.a.createElement(G, {
					className: ul.a.entrypointLink,
					onClick: () => {
						O(), f(Object(bc.a)())
					}
				}), m.a.createElement(u.Fragment, null, x && m.a.createElement(R, {
					href: "/premium",
					onClick: L
				}), E && m.a.createElement(N, {
					href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=user_menu_cta",
					onClick: () => f(Object(nc.b)())
				}), m.a.createElement(T, {
					href: "/coins",
					onClick: () => {
						Object(bo.e)(bo.a.GoldPayment, !0), f(Object(nc.d)())
					}
				}), !x && m.a.createElement(R, {
					href: "/premium",
					onClick: L
				}), m.a.createElement(D, {
					href: "/powerups",
					onClick: () => {
						Object(bo.e)(bo.a.PowerupsFlow, !0), f(Object(nc.e)())
					}
				}), m.a.createElement(F, {
					href: js.a,
					onClick: () => f(Object(pc.c)("reddit_talk"))
				}), y && m.a.createElement(U, {
					href: "/predictions",
					onClick: () => {
						Object(bo.e)(bo.a.GoldPayment, !0), f(Object(nc.f)())
					}
				})), m.a.createElement(_, {
					href: "https://www.reddithelp.com",
					onClick: () => f(Object(pc.c)("help_center"))
				}), g && m.a.createElement(S, {
					href: "https://old.reddit.com" + e.url,
					onClick: () => {
						f(Object(pc.c)("old_reddit")), f(e => ({
							source: "redesignbanner",
							action: "click",
							noun: "2xdropdown_visit_old",
							screen: rt.ab(e),
							subreddit: rt.ib(e)
						}))
					}
				}), !pl && g && m.a.createElement(w, {
					href: "",
					onClick: () => {
						f(e => ({
							source: "redesignbanner",
							action: "click",
							noun: "2xdropdown_opt_in",
							screen: rt.ab(e),
							subreddit: rt.ib(e)
						})), e.onOptIntoRedesign()
					}
				}), m.a.createElement("div", {
					className: ul.a.divider
				}), g ? m.a.createElement(M, {
					href: "#",
					onClick: e => {
						f(Object(pc.c)("logout")), t(), e.preventDefault()
					}
				}) : m.a.createElement(k, {
					href: "#",
					onClick: e => {
						Object(j.a)(e) && (e.preventDefault(), e.stopPropagation(), n(), f(Object(uc.b)()))
					}
				}))
			});

			function Ol() {
				return (Ol = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Cl = e => t => m.a.createElement(Zn.a, Ol({
					name: e
				}, t)),
				yl = Object(p.b)(() => Object(f.c)({
					isCrawler: e => !!Object(Zi.a)(e),
					isModModeEnabled: Yi.a,
					isOpen: Object(Xi.b)("USER_DROPDOWN_ID"),
					isPresenceToggleEnabled: Ji.d,
					shouldShowCreateCommunityItem: at.ob,
					navbarLikeMweb: Ki.a,
					navbarLikeMwebV2: Ki.b,
					nightmode: at.cb,
					showPresence: at.U,
					url: yt.u
				}), (e, t) => ({
					closeUserDropdown: () => e(Object(ia.j)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					exposeNavClickV2Experiment: () => e((() => async (e, t) => Object(ta.e)(t(), Nt.Yd))()),
					toggleNightmode: t => e(Object(ci.z)(t)),
					toggleShowPresence: t => e(Object(ci.I)({
						showPresence: t
					})),
					onOptIntoRedesign: () => e(Object(Fi.a)()),
					onOptOutOfRedesign: () => {
						"new.reddit.com" !== window.location.host ? (Pe.a.get("rseor3") && Pe.a.remove("rseor3", {
							domain: G.a.cookieDomain
						}), e(Object(Fi.b)(!0))) : window.location.host = "old.reddit.com"
					},
					requestAwardKarma: () => {
						var n;
						!t.user || null !== (n = t.user.karma) && void 0 !== n && n.total || e(Object(Gi.f)(Object(nt.e)(t.user)))
					},
					dispatchOpenLoginModal: () => e(Object(aa.i)()),
					logoutUser: () => {
						const {
							googleOneTapIFrame: n
						} = t;
						n && n.contentWindow && (console.log("postMessage: disableAutoSelect"), n.contentWindow.postMessage({
							type: "disableAutoSelect"
						}, Object(qi.a)())), e(Object(li.q)())
					},
					toggleModMode: () => e(Object(Ui.b)()),
					openCommunityCreationModal: () => e(Object(_e.h)(Fe.a.SUBREDDIT_CREATION_MODAL_ID))
				}));
			var xl = Object(It.u)({
					pageLayer: e => e
				})(yl(e => {
					const {
						exposeNavClickV2Experiment: t,
						isPresenceToggleEnabled: n,
						requestAwardKarma: s,
						showPresence: r,
						user: a
					} = e, i = Object(p.e)(Ji.b), [c, l] = Object(u.useState)(!1), d = a && a.id;
					Object(u.useEffect)(() => {
						s()
					}, [d]);
					const b = Object(u.useMemo)(() => ({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "USER_IS_ONLINE",
									userID: d
								}
							}
						}), [d]),
						h = Object(u.useCallback)(() => {
							l("visible" === document.visibilityState)
						}, []);
					return Object(Wi.a)("visibilitychange", h), Object(u.useEffect)(() => {
						l("visible" === document.visibilityState)
					}, []), m.a.createElement("div", {
						className: Object(v.a)(ul.a.container, Bi.e)
					}, r && c && i && m.a.createElement(Di.a, {
						variables: b,
						onData: Ri.a,
						queryKey: "userIsOnline"
					}), m.a.createElement(zi.a, {
						"aria-expanded": e.isOpen,
						"aria-haspopup": !0,
						className: Object(v.a)(e.className, ul.a.inlineButton, {
							[ul.a.dropdownOpen]: e.isOpen,
							[ul.a.isLoggedOut]: !a,
							[ul.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						id: "USER_DROPDOWN_ID",
						onClick: () => {
							t(), e.onClick(), e.sendEventWithName("self_user_icon")
						}
					}, m.a.createElement("span", {
						className: ul.a.accountDisplayText
					}, (t => t ? m.a.createElement("span", {
						className: Object(v.a)(ul.a.accountWrapper, ul.a.isLoggedIn),
						id: "email-collection-tooltip-id"
					}, t.accountIcon && m.a.createElement(rs.a, {
						className: Object(v.a)(ul.a.imgIcon, {
							[ul.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						wrapperClassName: ul.a.imgIconWrapper,
						shouldShowPresenceIndicator: n && r
					}), m.a.createElement("span", {
						className: ul.a.accountDetails
					}, m.a.createElement("span", {
						className: ul.a.username
					}, t.displayText, t.isGold && m.a.createElement(Qi.a, {
						className: ul.a.premiumFontIcon,
						title: o.fbt._("Reddit Premium", null, {
							hk: "4Dwpyn"
						}),
						isFilled: !0
					})), m.a.createElement("span", {
						className: ul.a.accountKarma
					}, m.a.createElement(Zn.a, {
						name: "karma",
						isFilled: !0,
						className: ul.a.karmaIcon
					}), m.a.createElement("span", null, (e => {
						const t = Object(Hi.a)(e),
							n = Object(Li.b)(t);
						return o.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [o.fbt._plural(t, "karma count", n)], {
							hk: "ndlXe"
						})
					})(t))), !!t.coins && m.a.createElement("span", {
						className: ul.a.accountCoins
					}, m.a.createElement(Vi.a, {
						className: ul.a.coinFontIcon,
						isFilled: !0
					}), m.a.createElement("span", null, (e => Object(Li.b)(e.coins || 0, {
						displayFull: !1,
						roundDown: !0
					}))(t))))) : e.navbarLikeMweb ? null : m.a.createElement("span", {
						className: Object(v.a)(ul.a.accountWrapper, ul.a.isLoggedOut)
					}, m.a.createElement(Zn.a, {
						name: "user",
						className: ul.a.defaultProfileIcon
					})))(e.user), m.a.createElement(Zn.a, {
						name: "caret_down"
					})), m.a.createElement(To.a, null, o.fbt._("User account menu", null, {
						hk: "2TJXIP"
					}))), m.a.createElement(vl, e))
				})),
				El = n("./src/reddit/components/ModerationDropdown/index.tsx"),
				Pl = n("./src/reddit/components/Settings/modalIds.ts"),
				jl = n("./src/reddit/helpers/trackers/inbox.ts"),
				_l = n("./src/reddit/routes/index.ts"),
				Sl = n("./src/reddit/selectors/appBadges.ts"),
				kl = n("./src/reddit/selectors/emailVerification.ts"),
				Ml = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				wl = n("./src/reddit/selectors/sso.ts");
			const Nl = Object(f.a)(e => Object(ta.c)(e, {
				experimentEligibilitySelector: ta.a,
				experimentName: Nt.zf
			}), e => e === Nt.id);
			var Il = n("./src/reddit/components/HeaderUserActions/AdsSignupLink/index.m.less"),
				Tl = n.n(Il);
			var Al = Object(A.c)(e => {
				let {
					className: t,
					sendEvent: n
				} = e;
				const s = Object(p.e)(Nl),
					r = Object(p.e)(at.cb),
					a = Object(Yr.a)(),
					i = o.fbt._("Advertise", null, {
						hk: "bW02l"
					});
				return s ? m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
					className: Object(v.a)(t, Tl.a.container, {
						[Tl.a.isNightMode]: r
					})
				}, m.a.createElement("a", {
					className: Tl.a.link,
					ref: a.target.ref,
					href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=top_nav_cta",
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: () => {
						n(Object(nc.c)())
					},
					onMouseEnter: a.show,
					onMouseLeave: a.hide,
					"aria-label": i
				}, m.a.createElement(Zn.a, {
					className: Tl.a.icon,
					name: "campaign"
				}))), m.a.createElement(Kr.a, {
					arrowProps: a.arrowProps,
					popperProps: a.popperProps,
					visible: a.visible
				}, i)) : null
			});
			const Rl = "change-username-tooltip-id",
				Ll = "email-verification-tooltip-id",
				Dl = m.a.memo((function(e) {
					let {
						moderationDropdownOpen: t,
						...n
					} = e;
					const s = Object(Yr.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: va.a.iconWrapper,
						onMouseEnter: s.show,
						onMouseLeave: s.hide,
						ref: s.target.ref
					}, m.a.createElement(ga, {
						"aria-expanded": t,
						"aria-haspopup": !0,
						"aria-label": o.fbt._("Moderation", null, {
							hk: "1qCuzM"
						}),
						id: El.a,
						onClick: n.onOpenModerationDropdown,
						isOpen: t
					}, m.a.createElement(Ur.a, {
						isActive: n.isModerateIconLit,
						unreadCount: -1,
						showEmpty: !0
					}), m.a.createElement(Zn.a, {
						className: va.a.icon2020,
						name: "mod"
					})), m.a.createElement(Kr.a, {
						arrowProps: s.arrowProps,
						popperProps: s.popperProps,
						visible: s.visible
					}, o.fbt._("Moderation", null, {
						hk: "4uQPyx"
					}))), m.a.createElement(El.b, {
						className: va.a.moderationDropdown,
						isOpen: t,
						unreadNotifications: n.unreadNotifications,
						sendEventWithName: n.sendEventWithName
					}))
				})),
				Fl = m.a.memo((function(e) {
					const t = Object(Yr.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: va.a.iconWrapper,
						onMouseEnter: () => {
							t.show()
						},
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, m.a.createElement("a", {
						className: va.a.link,
						href: `${G.a.redditUrl}/chat`,
						onClick: Object(ni.a)(e.onClickChat)
					}, m.a.createElement(ki, {
						badgeCount: e.badgeCount,
						hasUnreadGroupMessages: e.hasUnreadChatMessages
					}))), m.a.createElement(Kr.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, o.fbt._("Chat", null, {
						hk: "4nXRWH"
					})))
				})),
				Ul = m.a.memo((function(e) {
					let {
						onClickMail: t,
						unreadNotifications: n
					} = e;
					const s = Object(Yr.a)();
					return m.a.createElement("span", {
						className: va.a.iconWrapper,
						onMouseEnter: s.show,
						onMouseLeave: s.hide,
						ref: s.target.ref
					}, m.a.createElement("a", {
						className: va.a.link,
						href: n && n.hasUnreadMail ? "/message/unread" : "/message/inbox",
						onClick: t
					}, m.a.createElement(Ti, {
						unreadCount: n && n.inboxCount || 0
					})), m.a.createElement(Kr.a, {
						arrowProps: s.arrowProps,
						popperProps: s.popperProps,
						visible: s.visible
					}, o.fbt._("Messages", null, {
						hk: "Txokh"
					})))
				})),
				Gl = m.a.memo((function(e) {
					const t = Object(Yr.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: va.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, m.a.createElement("button", {
						className: va.a.link,
						"aria-label": o.fbt._("Create Post", null, {
							hk: "4wbXc8"
						}),
						onClick: e.onClickCreatePost
					}, m.a.createElement(Zn.a, {
						className: va.a.icon2020,
						name: "add"
					}))), m.a.createElement(Kr.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, o.fbt._("Create Post", null, {
						hk: "1TvNGq"
					})))
				})),
				Bl = Object(It.u)({
					pageLayer: e => e
				}),
				ql = Object(f.c)({
					activeDropdownId: Xi.a,
					appBadges: Sl.b,
					chatDirectMessagesCount: Sl.e,
					email: at.n,
					hasUnreadChatMessages: Sl.f,
					inboxBadgeCount: Sl.g,
					isAvatarQuickCreateEnabled: e => Object(_s.e)(e) && (e => {
						if (za(e)) return !0;
						const t = Qa(e),
							n = (new Date).getTime(),
							s = Object(jt.z)();
						if (!(null == t ? void 0 : t.active) || !Ka(e, null == t ? void 0 : t.min_days_on_reddit, t.should_have_avatar)) return !1;
						if (s && t) {
							const e = n > s.lastInteractionTimestamp + Va(null == t ? void 0 : t.min_days_since_last_event_interaction);
							return !!(s.id === t.id && e && s.eventViews <= t.max_event_views) || s.id !== t.id && e
						}
						return !1
					})(e),
					isChangeUsernameTooltipShowing: e => e.isChangeUsernameTooltipShowing,
					isCustomizeFlyoutShowing: e => e.user.isCustomizeFlyoutShowing,
					isEmailVerificationTooltipShowing: e => e.isEmailVerificationTooltipShowing,
					isGoogleOneTapEnabled: Ml.c,
					isInboxRedesignActive: Ss.b,
					isModerator: ot.j,
					isNameEditable: at.R,
					isResponsiveSettingsEnabled: At.a,
					shouldOpenEmailVerificationTooltip: kl.a,
					shouldShowChangeUsernameModals: wl.c,
					unreadNotifications: at.wb
				}),
				Hl = Object(p.b)(ql, (e, t) => ({
					closeChangeUsernameTooltip: () => e(Object(oi.d)()),
					closeEmailVerificationTooltip: () => e(Object(ai.b)()),
					showEmailVerficiationTooltip: () => e(Object(ai.b)()),
					fetchAppBadges: () => e(Object(si.c)()),
					onChatClick: () => e(Object(ri.f)()),
					onDismissCustomizeFlyout: () => e(Object(ci.u)()),
					onOpenModerationDropdown: () => {
						e(Object(ia.h)({
							tooltipId: El.a
						})), e(Object(mo.q)())
					},
					onOpenUserDropdown: () => e(Object(ia.h)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					openChangeUsernameModal: () => {
						e(Object(_e.h)(Pl.b))
					},
					openKeepUsernameModal: () => {
						e(Object(_e.h)(Pl.g))
					},
					toggleChangeEmailModal: () => {
						e(Object(ai.b)()), e(Object(_e.i)(Pl.a))
					},
					resendEmail: () => e(Object(li.x)(hi.a)),
					requestCreatePost: () => {
						t.pageLayer && e(ii.p(t.pageLayer))
					},
					startChangeUsernameFlow: t => {
						const n = Object(h.b)(t);
						e(Object(oi.f)(n))
					}
				}));
			class Wl extends m.a.Component {
				constructor() {
					super(...arguments), this.state = {
						googleOneTapIFrame: null
					}, this.sendNavClickInbox = () => this.props.sendEvent(Object(jl.z)({
						badgeCount: this.props.inboxBadgeCount
					})), this.sendEventWithName = e => this.props.sendEvent(Object(pc.c)(e)), this.onClickMail = () => this.sendEventWithName("mail"), this.onClickCreatePost = () => {
						this.props.sendEvent(Object(ho.x)({
							actionInfoType: "nav"
						})), this.props.requestCreatePost()
					}, this.onClickChat = () => {
						this.sendEventWithName("chat"), this.props.onChatClick()
					}, this.onOpenModerationDropdown = () => {
						this.props.onOpenModerationDropdown(), this.sendEventWithName("mod_entry")
					}, this.confirmNavigate = e => {
						const t = Object(ti.a)(e.pathname, _l.a),
							n = t && t.route && t.route.meta && t.route.meta.name;
						return !n || n !== O.Nb.POST_CREATION && n !== O.Nb.PROFILE_OVERVIEW || (this.props.startChangeUsernameFlow(e.pathname), !1)
					}, this.exposeIFrameElement = e => {
						this.setState({
							googleOneTapIFrame: e
						})
					}
				}
				componentDidMount() {
					this.props.showEmailVerficiationTooltip(), Lo()(this.props.appBadges) && this.props.fetchAppBadges()
				}
				render() {
					const {
						activeDropdownId: e,
						chatDirectMessagesCount: t,
						className: n,
						closeChangeUsernameTooltip: s,
						closeEmailVerificationTooltip: o,
						email: r,
						hasUnreadChatMessages: a,
						inboxBadgeCount: i,
						isAvatarQuickCreateEnabled: c,
						isChangeUsernameTooltipShowing: l,
						isCustomizeFlyoutShowing: d,
						isEmailVerificationTooltipShowing: p,
						isGoogleOneTapEnabled: b,
						isInboxRedesignActive: h,
						isModerator: g,
						isNameEditable: f,
						isResponsiveSettingsEnabled: O,
						onDismissCustomizeFlyout: C,
						onOpenUserDropdown: y,
						openChangeUsernameModal: x,
						openKeepUsernameModal: E,
						pageLayer: P,
						resendEmail: j,
						shouldOpenEmailVerificationTooltip: _,
						shouldShowChangeUsernameModals: S,
						toggleChangeEmailModal: k,
						unreadNotifications: M,
						user: w
					} = this.props, {
						googleOneTapIFrame: N
					} = this.state, I = !(!M || !M.hasUnreadModmail), T = w && Object(nt.e)(w) || "", A = Object(v.a)({
						[va.a["m-responsive"]]: O
					});
					return m.a.createElement(et.a, {
						id: Ll,
						ref: e => this.container = e,
						className: n
					}, m.a.createElement(et.a, {
						className: va.a.headerLinks,
						id: Rl
					}, g && m.a.createElement(Dl, {
						isModerateIconLit: I,
						moderationDropdownOpen: e === El.a,
						onOpenModerationDropdown: this.onOpenModerationDropdown,
						sendEventWithName: this.sendEventWithName,
						unreadNotifications: M
					}), w && m.a.createElement(u.Fragment, null, m.a.createElement(Fl, {
						onClickChat: this.onClickChat,
						badgeCount: t,
						hasUnreadChatMessages: a
					}), h ? m.a.createElement(Da, {
						sendNavClickInbox: this.sendNavClickInbox,
						unreadCount: i,
						pageUrl: null == P ? void 0 : P.url,
						userId: w.id,
						isLoggedIn: !!w,
						iconWrapper: va.a.iconWrapper
					}) : m.a.createElement(Ul, {
						onClickMail: this.onClickMail,
						unreadNotifications: M
					}), m.a.createElement(Gl, {
						onClickCreatePost: this.onClickCreatePost
					}), m.a.createElement(Al, {
						className: va.a.iconWrapper
					}), m.a.createElement("span", {
						className: va.a.iconWrapper
					}, c ? m.a.createElement(ei, {
						avatarUrlParams: {
							avatarId: "random",
							username: T
						}
					}) : m.a.createElement(Si.a, null)))), m.a.createElement(xl, {
						className: va.a.headerUserDropdown,
						googleOneTapIFrame: N,
						onClick: y,
						user: w,
						sendEventWithName: this.sendEventWithName
					}), b && m.a.createElement("div", {
						className: va.a.loggedInGoogleOneTap
					}, m.a.createElement(_i, {
						exposeIFrameElement: this.exposeIFrameElement
					})), d && m.a.createElement(Ii, {
						onCloseFlyout: C
					}), m.a.createElement(yi, {
						closeTooltip: o,
						email: r,
						isOpen: _ && p,
						resendEmail: j,
						toggleChangeEmailModal: k,
						tooltipId: Ll
					}), m.a.createElement(pi, {
						email: r,
						shouldOpenTooltip: _
					}), f && !O && m.a.createElement(u.Fragment, null, m.a.createElement(mi.a, {
						closeTooltip: s,
						isOpen: l && !S,
						openChangeUsernameModal: x,
						openKeepUsernameModal: E,
						tooltipId: Rl,
						username: T
					}), S && m.a.createElement(ui.a, {
						isResponsiveSettingsEnabled: O,
						overlayClassName: A,
						username: T,
						withOverlay: !0
					}), m.a.createElement(di.a, {
						confirmNavigate: this.confirmNavigate
					})))
				}
			}
			var Vl = Object(A.c)(Bl(Hl(Wl))),
				Ql = n("./src/reddit/components/Header/User/index.m.less"),
				zl = n.n(Ql);
			const {
				fbt: Kl
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Jl = Object(f.c)({
				account: e => e.user.account,
				origin: Mc.j
			}), Yl = m.a.memo(e => m.a.createElement("div", {
				className: Object(v.a)(e.className, zl.a.row)
			}, !e.account && m.a.createElement(Zl, e), m.a.createElement(Vl, {
				className: Object(v.a)({
					[zl.a.loggedOut]: !e.account
				}),
				user: e.account
			}))), Zl = e => {
				const t = Object(p.e)(Sl.g),
					n = Object(p.e)(at.Db),
					s = Object(p.e)(Ss.d),
					o = e.pageLayer,
					r = G.a.accountManagerOrigin,
					a = o ? o.url : "/",
					i = o && o.meta && o.meta.name === O.Nb.EXPLORE ? encodeURIComponent(e.origin) : encodeURIComponent(e.origin + a);
				return m.a.createElement(m.a.Fragment, null, s && m.a.createElement(Da, {
					sendNavClickInbox: () => e.sendEvent(Object(jl.z)({
						badgeCount: t
					})),
					unreadCount: t,
					pageUrl: a,
					userId: n,
					isLoggedIn: !1,
					iconWrapper: zl.a.iconWrapper
				}), m.a.createElement("div", {
					className: zl.a.loggedOutRow
				}, m.a.createElement(Al, {
					className: zl.a.adSignupIconWrapper
				}), m.a.createElement(Xe.t, {
					kind: Xe.b.ExternalLink,
					priority: Xe.c.Secondary,
					redditStyle: !0,
					className: zl.a.button,
					href: `${r}/login/?dest=${i}`,
					onClick: t => {
						Object(j.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenLoginModal(), e.sendEvent(Object(uc.a)("nav")))
					}
				}, Kl._("Log In", null, {
					hk: "4Cxw0g"
				})), m.a.createElement(Xe.t, {
					kind: Xe.b.ExternalLink,
					priority: Xe.c.Primary,
					redditStyle: !0,
					className: Object(v.a)(zl.a.separator, zl.a.button),
					href: `${r}/register/?dest=${i}`,
					onClick: t => {
						Object(j.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenRegisterModal(), e.sendEvent(Object(uc.c)("nav")))
					}
				}, Kl._("Sign Up", null, {
					hk: "2WZPuJ"
				}))))
			};
			var Xl = Object(It.u)()(Object(p.b)(Jl, e => ({
					onOpenLoginModal: () => {
						e(Object(_e.k)({
							actionSource: _e.a.HeaderLogin
						})), e(Object(aa.i)())
					},
					onOpenRegisterModal: () => {
						e(Object(_e.k)({
							actionSource: _e.a.HeaderSignup
						})), e(Object(aa.j)())
					},
					closeUserDropdown: () => e(Object(ia.j)({
						tooltipId: "USER_DROPDOWN_ID"
					}))
				}))(Object(A.c)(Yl))),
				$l = n("./src/reddit/components/Header/index.m.less"),
				ed = n.n($l);

			function td() {
				return (td = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const nd = I.a.header("HeaderDynamicStyles", ed.a),
				sd = Object(f.c)({
					isLoggedIn: at.P,
					isNightMode: at.cb,
					isResponsiveSettingsEnabled: At.a,
					isPageResponsive: Ar.a,
					isBladeOpen: e => !!e.structuredStyles.isEditing
				}),
				od = Object(It.u)({
					categoryName: It.c,
					pageLayer: e => e
				}),
				rd = e => {
					const t = Object(u.useContext)(g.a);
					return m.a.createElement("div", {
						className: ed.a.left
					}, m.a.createElement(To.a, null, o.fbt._("Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts", null, {
						hk: "ToBNc"
					})), m.a.createElement(Io.b, null), m.a.createElement(Kn.a, {
						"aria-label": o.fbt._("Home", null, {
							hk: "3PmGmU"
						}),
						className: ed.a.centeredRow,
						to: "/",
						onClick: e.onReloadFrontpage
					}, m.a.createElement(Ir.a, {
						className: Object(v.a)(ed.a.snoo, {
							[ed.a.snooExp]: t
						})
					}), m.a.createElement(Tr.a, {
						className: ed.a.wordmark
					})), e.children)
				},
				ad = e => m.a.createElement("div", {
					className: ed.a.right
				}, e.children, m.a.createElement(Xl, null)),
				id = e => {
					const t = Object(u.useContext)(g.a);
					return m.a.createElement("div", {
						className: Object(v.a)(ed.a.layout, {
							[ed.a.layoutContainer]: t
						})
					}, m.a.createElement(rd, td({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), m.a.createElement(No, null), m.a.createElement(Nr, {
						className: ed.a.search
					})), m.a.createElement(ad, null, m.a.createElement(ra, {
						className: ed.a.quickLinks
					})))
				},
				cd = e => {
					const t = Object(u.useContext)(g.a);
					return m.a.createElement("div", {
						className: Object(v.a)(ed.a.layout, {
							[ed.a.layoutContainer]: t
						})
					}, m.a.createElement(rd, td({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), m.a.createElement("div", {
						className: ed.a.searchContainer
					}, m.a.createElement(Nr, {
						className: ed.a.search
					}))), m.a.createElement(ad, null))
				};
			var ld = od(Object(p.b)(sd, e => ({
					onReloadFrontpage: () => e(Object(go.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))(!0))
				}))((function(e) {
					let t;
					const n = Object(u.useContext)(g.a);
					return t = e.isLoggedIn ? id : cd, m.a.createElement(nd, {
						"data-redditstyle": !0,
						className: Object(v.a)(ed.a.container, e.className, {
							[ed.a.bladeIsOpen]: e.isBladeOpen,
							[ed.a.navbarHeightContainer]: n
						})
					}, m.a.createElement(t, {
						categoryName: e.categoryName,
						onReloadFrontpage: e.onReloadFrontpage
					}), (e.isResponsiveSettingsEnabled || e.isPageResponsive) && m.a.createElement(Dr, {
						className: ed.a.MwebResponsiveHeader
					}))
				}))),
				dd = n("./src/reddit/components/LightboxHeader/index.tsx"),
				ud = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				md = n("./src/reddit/components/PinnedSubscriptions/index.m.less"),
				pd = n.n(md);
			const {
				fbt: bd
			} = n("./node_modules/fbt/lib/FbtPublic.js"), hd = Object(f.c)({
				currentPage: hs
			}), gd = Object(p.b)(hd, e => ({
				onUnpinSubscriptions: () => e(Object(_.j)())
			})), fd = Object(It.u)();
			var vd = I.a.wrapped(fd(gd(e => m.a.createElement("div", {
					"data-redditstyle": !0,
					className: e.className
				}, m.a.createElement("div", {
					className: pd.a.title
				}, m.a.createElement(Xs, {
					className: pd.a.listHeader
				}, bd._("My Communities", null, {
					hk: "1CmPOc"
				})), m.a.createElement("div", {
					className: pd.a.unpin,
					onClick: e.onUnpinSubscriptions
				}, m.a.createElement(Zn.a, {
					name: "close",
					className: pd.a.icon
				}))), m.a.createElement(_o, {
					currentPage: e.currentPage
				})))), "Component", pd.a),
				Od = n("./src/reddit/components/Survey/index.tsx"),
				Cd = n("./src/reddit/components/ThemeProvider/index.tsx"),
				yd = n("./src/reddit/actions/toaster.ts");
			const xd = e => t => ({
					source: "toast",
					action: "view",
					noun: e
				}),
				Ed = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...rt.d(t),
						reason: "primary"
					}
				}),
				Pd = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...rt.d(t),
						reason: "secondary"
					}
				});
			var jd = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				_d = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				Sd = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				kd = n("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				Md = n("./src/reddit/icons/svgs/Unlock/index.tsx"),
				wd = n("./src/reddit/models/Toast/index.ts"),
				Nd = n("./src/reddit/selectors/structuredStyles.ts"),
				Id = n("./src/reddit/components/Toaster/PlainBread.m.less"),
				Td = n.n(Id);

			function Ad() {
				return (Ad = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Rd = e => {
				const t = gc.a;
				switch (e.kind) {
					case wd.b.Error:
					case wd.b.AuthError:
					case wd.b.SuccessEndBroadcast:
						return t.warning;
					case wd.b.SuccessCommunity:
						return t.op;
					case wd.b.SuccessCommunityGreen:
					case wd.b.SuccessMod:
					case wd.b.SuccessUnlockComment:
						return t.approved;
					case wd.b.SuccessLockComment:
						return t.reported;
					case wd.b.EuCookiePolicy:
					case wd.b.UappBanner:
					case wd.b.Undo:
					default:
						return t.op
				}
			};
			class Ld extends m.a.Component {
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
			const Dd = I.a.wrapped(Ld, "PlainBread", Td.a);
			var Fd = e => m.a.createElement(Dd, Ad({}, e, {
					style: {
						...e.style || {},
						"--Toaster-indicatorColor": Rd(e)
					}
				})),
				Ud = n("./src/reddit/components/Toaster/StyledComponents.m.less"),
				Gd = n.n(Ud);
			const Bd = I.a.span("Text", Gd.a);
			var qd = n("./src/reddit/components/Toaster/index.m.less"),
				Hd = n.n(qd);
			const {
				fbt: Wd
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Vd = I.a.wrapped(Sd.a, "AuthErrorToastIcon", Hd.a), Qd = I.a.wrapped(Xe.l, "AuthErrorToastPrimaryButton", Hd.a);
			class zd extends m.a.Component {
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
					}, m.a.createElement(Fd, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(Vd, null), m.a.createElement(Bd, null, Wd._("Something went wrong loading this page. Try again?", null, {
						hk: "3k6ebn"
					})), m.a.createElement(Qd, {
						type: "submit"
					}, Wd._("Reload Page", null, {
						hk: "3Hrcyc"
					}))))
				}
			}
			var Kd = zd,
				Jd = n("./src/lib/cookieConsent/index.ts"),
				Yd = n("./src/reddit/controls/Link/index.tsx"),
				Zd = n("./src/reddit/components/Toaster/EuCookiePolicyToast.m.less"),
				Xd = n.n(Zd);
			const {
				fbt: $d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), eu = I.a.div("Icon", Xd.a), tu = () => m.a.createElement(eu, {
				style: {
					backgroundImage: `url(${G.a.assetPath}/img/snoo-upvote.png)`
				}
			}), nu = I.a.wrapped(Xe.l, "PrimaryButton", Xd.a), su = I.a.wrapped(Fd, "Bread", Xd.a);
			class ou extends m.a.PureComponent {
				constructor() {
					super(...arguments), this.allowAllCookies = e => {
						e.preventDefault(), Object(Jd.b)({
							opted: !0,
							nonessential: !0
						}), this.props.onClose("allow-all")
					}, this.allowEssentialCookiesOnly = e => {
						e.preventDefault(), Object(Jd.b)({
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
					return m.a.createElement("section", null, m.a.createElement(su, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n                translateY(${e.style.y}px)\n                scale(${e.style.x}, ${e.style.x})\n              `
						}
					}, m.a.createElement(tu, null), m.a.createElement("section", {
						className: Xd.a.EuCookiePolicyBody
					}, m.a.createElement(Bd, null, $d._("We use cookies on our websites for a number of purposes, including analytics and performance, functionality and advertising.", null, {
						hk: "4prHYN"
					}), " ", m.a.createElement(Yd.a, {
						href: "https://www.redditinc.com/policies/cookie-notice",
						target: "_blank"
					}, $d._("Learn more about Reddit’s use of cookies", null, {
						hk: "1bxpLb"
					})), "."), m.a.createElement("section", {
						className: Xd.a.EuCookiePolicyOptions
					}, m.a.createElement("form", {
						onSubmit: this.allowEssentialCookiesOnly
					}, m.a.createElement(nu, {
						type: "submit"
					}, $d._("Reject non-essential", null, {
						hk: "M79jf"
					}))), m.a.createElement("form", {
						onSubmit: this.allowAllCookies
					}, m.a.createElement(nu, {
						type: "submit"
					}, $d._("Accept all", null, {
						hk: "1tnS6V"
					})))))))
				}
			}
			var ru, au = ou;
			! function(e) {
				e.LoggedOutMaxSubscriptions = "max_subscriptions"
			}(ru || (ru = {}));
			var iu = n("./src/reddit/controls/Typography/index.tsx"),
				cu = n("./src/reddit/components/Toaster/MilestoneToast.m.less"),
				lu = n.n(cu);

			function du() {
				return (du = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const uu = I.a.div("Container", lu.a),
				mu = I.a.img("SideImage", lu.a),
				pu = I.a.div("Main", lu.a),
				bu = I.a.div("SubTitle", lu.a),
				hu = iu.a,
				gu = I.a.wrapped(Xe.m, "PrimaryLinkButton", lu.a),
				fu = I.a.wrapped(gi.a, "CloseIcon", lu.a);
			class vu extends m.a.Component {
				constructor() {
					super(...arguments), this.onSignup = e => {
						e.stopPropagation(), e.preventDefault(), this.props.onClose(), this.props.onSignup(), this.props.sendEvent(Ed(this.props.name))
					}
				}
				componentDidMount() {
					this.props.sendEvent(xd(this.props.name))
				}
				render() {
					const {
						content: e,
						key: t,
						sideImage: n,
						style: s,
						subTitle: r,
						title: a
					} = this.props;
					return m.a.createElement(uu, {
						key: t,
						style: {
							...s,
							transform: `\n            translateY(${s.y}px)\n            scale(${s.x}, ${s.x})\n          `
						}
					}, m.a.createElement(fu, {
						onClick: this.props.onClose
					}), m.a.createElement(mu, {
						srcSet: n
					}), m.a.createElement(pu, null, m.a.createElement(bu, null, r), m.a.createElement(iu.b, null, a), m.a.createElement(hu, null, e), m.a.createElement(gu, {
						"data-redditstyle": !0,
						href: "/register",
						onClick: this.onSignup
					}, o.fbt._("Sign Up", null, {
						hk: "2iMVSI"
					}))))
				}
			}
			const Ou = Object(p.b)(null, e => ({
					onSignup: () => e(Object(aa.j)())
				}))(Object(A.c)(vu)),
				Cu = `${yu("subscribe-cap.png")} 1x,\n  ${yu("subscribe-cap@2x.png")} 2x,`;

			function yu(e) {
				return `${G.a.assetPath}/img/banner/${e}`
			}
			const xu = 3;
			var Eu = n("./src/lib/permanentCookieOptions.ts");
			const Pu = e => `${e}:1527210000`;
			var ju = n("./src/reddit/components/Toaster/UappBannerToast.m.less"),
				_u = n.n(ju);
			const {
				fbt: Su
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ku = I.a.div("Icon", _u.a), Mu = () => m.a.createElement(ku, {
				style: {
					backgroundImage: `url(${G.a.assetPath}/img/snoo-upvote.png)`
				}
			}), wu = I.a.wrapped(Xe.l, "PrimaryButton", _u.a), Nu = I.a.wrapped(Fd, "Bread", _u.a);
			class Iu extends m.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), Pe.a.set(Et.j, Pu(xu), Object(Eu.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, m.a.createElement(Nu, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(Mu, null), m.a.createElement(Bd, null, Su._("Reddit is updating its {=User Agreement} and {=Privacy Policy} .", [Su._param("=User Agreement", m.a.createElement(Yd.a, {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, Su._("User Agreement", null, {
						hk: "XS57W"
					}))), Su._param("=Privacy Policy", m.a.createElement(Yd.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, Su._("Privacy Policy", null, {
						hk: "4j7vx4"
					})))], {
						hk: "TxCpk"
					}), " "), m.a.createElement(wu, {
						type: "submit"
					}, Su._("Got it", null, {
						hk: "2WpndK"
					}))))
				}
			}
			var Tu = Iu;

			function Au() {
				return (Au = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Ru = [],
				Lu = {
					stiffness: 200,
					damping: 24,
					precision: .01
				},
				Du = {
					opacity: .5,
					x: .5,
					y: 50
				},
				Fu = {
					opacity: Object(N.spring)(0),
					x: Object(N.spring)(.6),
					y: Object(N.spring)(80, Lu)
				},
				Uu = I.a.wrapped(Sd.a, "SnooFacepalm", Hd.a),
				Gu = I.a.wrapped(kd.a, "SnooHappy", Hd.a),
				Bu = I.a.wrapped(ss.b, "SubredditIcon", Hd.a),
				qu = I.a.img("CustomIcon", Hd.a),
				Hu = I.a.div("Container", Hd.a),
				Wu = I.a.wrapped(gi.a, "Close", Hd.a),
				Vu = I.a.wrapped(jd.a, "LockIcon", Hd.a),
				Qu = I.a.wrapped(Md.a, "UnlockIcon", Hd.a),
				zu = I.a.wrapped(_d.a, "RemoveIcon", Hd.a),
				Ku = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Wu, Au({
					className: "CloseIcon"
				}, e))),
				Ju = I.a.wrapped(Fd, "Bread", Hd.a),
				Yu = Object(f.c)({
					subredditIcon: Nd.b,
					toastSlices: e => e.toaster
				}),
				Zu = Object(p.b)(Yu, e => ({
					dismissToast: t => () => e(Object(yd.g)(t)),
					onButtonClick: (t, n) => () => {
						e(t), e(Object(yd.g)(n))
					}
				}));
			class Xu extends m.a.Component {
				constructor() {
					super(...arguments), this.getStyles = e => $u(e, this.props.toastSlices), this.getWillEnterStyles = () => Du, this.getWillLeaveStyles = () => Fu
				}
				render() {
					return this.props.toastSlices.length ? m.a.createElement(N.TransitionMotion, {
						defaultStyles: Ru,
						styles: this.getStyles,
						willLeave: this.getWillLeaveStyles,
						willEnter: this.getWillEnterStyles
					}, e => m.a.createElement(Hu, null, e.map(e => {
						const t = e.data,
							n = {
								...e.style,
								transform: `\n                  translateY(${e.style.y}px)\n                  scale(${e.style.x}, ${e.style.x})\n                `
							};
						if (t.kind === wd.b.Custom && void 0 !== t.customToastType) {
							const s = tm[t.customToastType];
							return m.a.createElement(s, {
								key: e.key,
								toast: t,
								style: n,
								onClose: this.props.dismissToast(t.id)
							})
						}
						if (t.kind === wd.b.UappBanner) return m.a.createElement(Tu, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === wd.b.EuCookiePolicy) return m.a.createElement(au, {
							key: e.key,
							toast: t,
							style: n,
							sendViewEvent: () => this.props.sendEvent(xd("eu_essential_policy")),
							onClose: e => {
								switch (this.props.dismissToast(t.id)(), e) {
									case "allow-all":
										this.props.sendEvent(Ed("eu_essential_cookie_policy"));
										break;
									case "allow-essential":
										this.props.sendEvent(Pd("eu_essential_cookie_policy"))
								}
							}
						});
						if (t.kind === wd.b.AuthError) return m.a.createElement(Kd, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						const s = t.kind === wd.b.Modal ? Xe.l : Xe.r,
							o = t.kind === wd.b.Modal ? Xe.o : Xe.r;
						return m.a.createElement(Ju, {
							className: t.kind === wd.b.Modal ? Hd.a.mModal : void 0,
							key: e.key,
							kind: t.kind,
							sendEvent: t.name ? () => this.props.sendEvent(xd(t.name)) : void 0,
							style: n
						}, m.a.createElement("div", {
							className: Hd.a.ContentWrapper
						}, em(t, this.props.subredditIcon), t.kind === wd.b.SuccessLockComment && m.a.createElement(Vu, null), t.kind === wd.b.SuccessUnlockComment && m.a.createElement(Qu, null), m.a.createElement(Bd, null, t.text)), m.a.createElement("div", {
							className: Hd.a.ButtonsWrapper
						}, t.buttonText && t.buttonAction && m.a.createElement(s, {
							onClick: () => {
								this.props.onButtonClick(t.buttonAction, t.id)(), t.name && this.props.sendEvent(Ed(t.name))
							}
						}, t.buttonText), t.secondButtonText && t.secondButtonAction && m.a.createElement(o, {
							onClick: () => {
								this.props.onButtonClick(t.secondButtonAction, t.id)(), t.name && this.props.sendEvent(Pd(t.name))
							}
						}, t.secondButtonText)), m.a.createElement(Ku, {
							onClick: () => {
								var e, n;
								null === (e = this.props.dismissToast(t.id)) || void 0 === e || e(), null === (n = t.onClose) || void 0 === n || n.call(t)
							}
						}))
					}))) : null
				}
			}
			const $u = function() {
					arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					let e = arguments.length > 1 ? arguments[1] : void 0;
					return e.map(e => ({
						data: e,
						key: e.id || (new Date).toString(),
						style: {
							opacity: Object(N.spring)(1),
							x: Object(N.spring)(1, Lu),
							y: Object(N.spring)(0, Lu)
						}
					}))
				},
				em = (e, t) => {
					if (e.customIconAsset) return m.a.createElement(qu, {
						src: e.customIconAsset
					});
					switch (e.kind) {
						case wd.b.Error:
							return m.a.createElement(Uu, null);
						case wd.b.SuccessEndBroadcast:
							return m.a.createElement(zu, null);
						case wd.b.SuccessAward:
						case wd.b.SuccessCommunity:
						case wd.b.SuccessCommunityGreen:
							return m.a.createElement(Gu, null);
						case wd.b.SuccessMod:
							return m.a.createElement(Bu, {
								primaryColor: t.color,
								iconUrl: t.url
							})
					}
				},
				tm = {
					[wd.a.subscribeCap]: e => m.a.createElement(Ou, du({
						name: ru.LoggedOutMaxSubscriptions,
						sideImage: Cu,
						title: o.fbt._("Oops! You need to Sign Up to join more communities", null, {
							hk: "21CE4w"
						}),
						subTitle: null,
						content: o.fbt._("Sign up to save your communities and secure your account", null, {
							hk: "45W3vB"
						})
					}, e))
				};
			var nm = Zu(Object(A.c)(Xu)),
				sm = n("./src/reddit/featureFlags/profileCollections.ts"),
				om = n("./src/reddit/helpers/trackers/banners.ts"),
				rm = n("./src/reddit/components/AlertBanner/Wrapper.m.less"),
				am = n.n(rm);
			var im = I.a.div("Wrapper", am.a),
				cm = n("./src/reddit/components/AlertBanner/index.m.less"),
				lm = n.n(cm);
			const {
				fbt: dm
			} = n("./node_modules/fbt/lib/FbtPublic.js"), um = () => m.a.createElement(im, {
				className: Object(v.a)(lm.a.wrapper, lm.a.suspended)
			}, m.a.createElement("span", null, dm._("Your account has been suspended.", null, {
				hk: "36oqxa"
			}), " "), m.a.createElement("a", {
				className: lm.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, dm._("Learn more", null, {
				hk: "1OTc8q"
			}))), mm = () => m.a.createElement(im, {
				className: Object(v.a)(lm.a.wrapper, lm.a.fpr)
			}, m.a.createElement("span", null, dm._("Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password.", null, {
				hk: "4CbjOV"
			}), " "), m.a.createElement("a", {
				className: lm.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, dm._("Learn more", null, {
				hk: "1OTc8q"
			}))), pm = e => {
				let {
					updateLink: t,
					onClickOldReddit: n
				} = e;
				return m.a.createElement(im, {
					className: Object(v.a)(lm.a.wrapper, lm.a.deprecated)
				}, m.a.createElement("span", null, dm._("Looks like you're using new Reddit on an old browser. The site may not work properly if you don't {update your browser} !", [dm._param("update your browser", m.a.createElement(bm, {
					link: t
				}, dm._("update your browser", null, {
					hk: "2TB4hp"
				})))], {
					hk: "gC2GV"
				}), " "), m.a.createElement("span", null, dm._("If you do not update your browser, we suggest you visit {old reddit} .", [dm._param("old reddit", m.a.createElement("a", {
					className: lm.a.underlineLink,
					href: G.a.oldRedditUrl,
					onClick: n
				}, dm._("old reddit", null, {
					hk: "Sv1DJ"
				})))], {
					hk: "4qKEir"
				})))
			}, bm = e => {
				let {
					children: t,
					link: n
				} = e;
				return null !== n ? m.a.createElement("a", {
					className: lm.a.underlineLink,
					href: n
				}, t) : m.a.createElement("span", null, t)
			};
			class hm extends m.a.PureComponent {
				constructor(e) {
					super(e), this.onClickOldReddit = () => {
						this.props.sendEvent(Object(om.a)())
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.props.browserInfo && this.props.browserInfo.isDeprecated && this.props.sendEvent(Object(om.b)())
				}
				render() {
					const {
						browserInfo: e,
						showFPR: t,
						showSuspended: n
					} = this.props;
					return e && e.isDeprecated ? m.a.createElement(pm, {
						updateLink: e.updateLink,
						onClickOldReddit: this.onClickOldReddit
					}) : t ? m.a.createElement(mm, null) : n ? m.a.createElement(um, null) : null
				}
			}
			var gm = Object(A.c)(hm),
				fm = n("./src/reddit/components/AlertBanner/heights.ts");
			var vm = n("./src/reddit/components/OfflineBanner/index.m.less"),
				Om = n.n(vm);
			const {
				fbt: Cm
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ym = e => {
					const t = Object(u.useCallback)(() => window.location.reload(), []),
						n = e.online ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAE9 0lEQVRoQ9WYW0hlZRTHf94TIXXAYRQzQwmFQQSVYSZ6UlESH+whRxMDX6IHJ1AQCXFQkSFUCIUeCkETUx/CF1FB8ClNpFFEX8T UKWkyxgFngjRvJ9Z278Pe57Yv51Kul33O3mut7/9fa32X9UVxwyXqhuMn0gR+BbJ0QfsU+CaYIEaSgEuAulzKQ3lGR0fLzzngA 6ckIkpAA68HGxWlQHCMw7Ghg4i5AhBIBE4d+HTO3OZgscB5bW0tk5OTbtPV1VXu3bv3v8/AZ8DXwAmQODw8TFNTE0dHR6SlpWl kHFeCY0MLGSgE1lW9D4Fp4AdAfmvyO5BpwZdflVATuF5ijJIAnAUDMpBtuAhIYa+GC7RhFQvxIFoGQh2YiJXQR8AU8C6wE+Lg+ HQXjkhFNAvhICCREhLh8m3IRLgGEQIXgGxgmqwA3wHfqt9CUmGhIvAe8KMDRPGyQzuwc5sES+AXIEe8tbS0MDAwYAnL2dkZt2/ f5tWrV5p+nNOsmBH4EmjzgeoKiE5ISOD01NEZzO3y6uqKmJgY7X8S8DdwB/hDffkx8L2/yPgj0AwMipGAfPjwIS9fvmRmZsbtx 9fJ0lL4/Sitra1RVFQUyMUn6hwyncTPgLcrKyuZm5Ne41ok3SkpKVRVVRmIBAPal63aH7gbH9GJj4/n/FyZKk+AL/R2nhmQqDf v7++TnZ3t1uvu7ubx48dsbGxQUFAQasxe/pKSkpQ5Ijg0SUxM1MrVgFn/R35fNTQ0MDY25jZ8/fo1ycnJHB8fK89Iya1bt9ja2 iIjI8M9pJYd/R6jJ2DoWTUrMRocHKS5WaZFZEWifnIibcS1TE1NKfPRLwH5ODEx4TY4PDwkKysLWfb+K6mpqWF6WlqJa/HsoQ0 ZCPXKEg7SISOQk5PD3t6eAePFxYV+TTfFr6tpRXd0dJTGxsaAdgEJLC0t8eDBA8WBbDDqvY2Xw9jYWC4vL5X3vb29jIyMsLNzf Xq2mkUNfGdnJ11dXVppBLRva2ujr6+vF+hwl5QOnUsAa8BkAF9gdnd3yc3N5e7du2xubhrIic3CwgJlZWWm0ZcgSMb0Ivb3799 neXnZy97XCmSYzerMvtJA+yPga6MxRWtDQUgJOU9Rx5U7mToDaQ9FWbPekPLRbRwGlbq6OsNKZQNbUKr+bvB8nYX+kd1bDlieK Q4KQZDGdggoc9HOhAyETXZTqWk5tebn51NeXu6Iil0CcpS9Y3VF0SNKTU1Vjh1WRGpdPaQFVC8uLubp06ey7HlNDn/HaeV2wS4 Bz3XdCgkrY6h+ZX3/yWtyBxjEVVJSglzAWpUwE/AZ7EAdme15sL29TV5enlW+dHR00NPTE1C/tLSUxcVF2fKV1tVOBt4B9trb2 3nyRPoIa2InCzbKx2+gzXpi21kQmlZIyF5jpqd+l/74T3/hMyPgaEl98eKF0lH5k/X1dQoL5fbdv1RXV0vr+jNQEkjPCgFHJMR IQEobqklmZiYHBwemtSh99+zsrJJMM2VTBZ0DpZwqKiqYn5838+v4e1xcnHYCsITNkpIOzbZ688zz589JT093DNTTcGVlRTmJq jd871t1bJeA5lfOwcptVH9/P62trVbH89IbHx9HLhJUsY3HtoEHgt+At7R39fX1CCAzGRoa4tGjR3q1N4G/zOx8fQ+WgN7n58B XNkAIgyEb+j5VQ0kgWCyO7G88gX8BA0iEQE02M2MAAAAASUVORK5CYII=" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmH AAAFhUlEQVRoQ+1ZX0gsZRT/reu/XEpcs2tqiEQpV31Qr5qpFHHTEoOuocVF3Bd7iOylfRDUlzDxImYYGD0kitKDokH5YLoQiL rQalLqiy89qGRqaYnh33XjjDPjzOzMfDOzu4XQ9yDuznfO+f3Od86Zc7614ZYv2y3Hj0gSeBrArxIHnQJ4LNwOiySBQCAQEPH2 9fXB7XYLny8AvAbg+1AJRYrAby6X687w8LAMn82mai4kDCEJ63jv2OfzOYqLi9UIlABY4h/8CKAQsB7KkSJA+GQhdHJygoSEBP peaZPiLA3AjpVwiiSBDwB8pgD1OoDvFN8JiWIJiyUhK57SkSECvwB41ore/5oAldY4AFEUcreBQCOAUQXQdwCMWQGvllBW9bDk XgSwyG+6AvA2gAmWkJHn/1YIhZSoekTCSeAvAE/oGFsBUGTEq2b2hErgDwBOMmi321FRUYGhoSFkZWVxGKiV6O/vR3d3N/b29q S4jgE8bgao1l4rBEjmhKoHAZ6fnzeNw+l04vDwUJCzgkG0qSdMDVe0GrrOzk50dHSYBq4UqK+vx8QEl8vfAHjTikItAlzSXVxc IDr6moPQiEk7TCsG1WQ0mjxh6+cA3jcTQoHl5WUUFd3kGxloaGjA2Jjlcs3kWlpaCp/Px+WNsFJTU7G7u6sbakGNFQnt7Nz0Vc nJyZibm0NeXp4MxMzMDCorK4UGjQnQyIbBwUE0Nzfj8vKSKwoi8ps2PChigghIPbC1tYX9/X0UFlLHC2xubiIzM5P7v7y8HDU1 NWhrazOCzfCe1tZW9PT0yE5CGsLKblaXQHt7O7q6ujjjAwMDaGlpkQGJRD6QAYfDwZVfOg1h+f1+IR/vAaA54jo3Fa6R9fDSZ5 QHgVflu22e61rPWrTn7OyMAyAUBZYMZ0+hW5LsIm5DBHJyctAdv4EHT1kjoFdltBxwenqK+Ph4mcHFxUXuZSl1vJLAQ6/X+1VZ WZlMMCkpCYfFfwY5zegJCDGsPEG7B0hMSsLBwQHrQMTnvDM0T4A2cjEh9Qy1AXcz7uD3l62dAEnZo2zw3w/GacYJkmQ2R0AQ/D AT+OR5YPsUeGbeWPwLkB3RNvz9inkClLxCSZ2enuYqn14I0cMFqpJqsZmWlia+I4wkL6sIvPUzYH+pHuPj45ohJE1mPnx+APCC VhWi7z8G0G4WICuIY2JiuBfUo+eA+07gHsFQhKqaDoHA0dEREhMTZd4P+sAreAPAt+EmQLo9Hg+qqqo4M3RnRK0DaxEBSRh9Ce Bd2clqKNB8H7AMhvu5pAT/BKBAqV+zG43ECVghxxP4AsB7qiGmodTvdrujent7rdgMm8zS0hJKSugmUvvqUW+gCSmMhKOPjY0F vVUZPb8qabXWwWgIcQViamoKtbW1MhkKLWq5FTMuqMqcn58HARF6emrQjo9pFDa+eAJ0DXPTWyvEWfOo7BQEj+Tm5mJ9fV1URa 0AzQ20VldXkZ+fH4RSrTnTo0Ivr6srwq5/c80i8DWABxsbG8jOzkZGRgZoRtBa4Rw7eV00l8fqEWUR4EKJ/lAcx8XRNab+IsPb 29tIT09nbWU6guV95vHwFkwlMxFobGzE6KjyCtQYHyOJK9XEOoHA5OQk6urqjFnnby8WFha4kdPMIsJNTU2CCAuXqFpvI00TJ2 ZeaHQDRzOyGRm6QKAmkV/MmFc6RY8AlQCbUTBer1f0uhEZl8uFkZERKR4qlVzZMbN0X2QpKSlB9V48Y/VfHLnpiiY46aJ5eG1t jWvgFIvGPPlmM+gZWe6nX05WVlZQUHDdQ83OzqK6ulow8SmAVrrAA0DT8kO+U7yrg4F+kXkE4COTOLUrFkPRPoAnJXvoxksM2H CBCEWP4WwPxUgkZf8nEEnvGtH9D0h1xECJaZxWAAAAAElFTkSuQmCC";
					return m.a.createElement("div", {
						className: Object(v.a)(e.className, Om.a.banner, {
							[Om.a.online]: e.online,
							[Om.a.hidden]: !e.showBanner
						})
					}, m.a.createElement("img", {
						className: Om.a.snoomoji,
						src: n
					}), m.a.createElement("span", {
						className: Om.a.title
					}, e.online ? Cm._("Found the internet!", null, {
						hk: "fMghd"
					}) : Cm._("hmm… no internet?", null, {
						hk: "28GsiU"
					})), m.a.createElement(Zn.a, {
						className: Om.a.refresh,
						name: "refresh_fill",
						onClick: t
					}))
				},
				xm = n("./src/reddit/components/Upsell/async.ts"),
				Em = n("./src/reddit/constants/componentSizes.ts"),
				Pm = n("./src/reddit/constants/elementIds.ts"),
				jm = n("./src/reddit/constants/posts.ts"),
				_m = n("./src/reddit/contexts/InsideOverlay.tsx"),
				Sm = n("./src/reddit/constants/promo.ts"),
				km = n("./src/reddit/contexts/Promo/index.ts");

			function Mm(e, t) {
				const {
					promoName: n
				} = t.payload, s = e.get(n);
				switch (t.type) {
					case Sm.a.Completed:
						return s === Sm.a.Shown ? new Map(e.set(n, Sm.a.Completed)) : e;
					case Sm.a.Dismissed:
						return s === Sm.a.Shown ? new Map(e.set(n, Sm.a.Dismissed)) : e;
					case Sm.a.Shown:
						return s ? e : new Map(e.set(n, Sm.a.Shown));
					default:
						throw new Error
				}
			}
			var wm = function(e) {
					let {
						children: t
					} = e;
					const [n, s] = u.useReducer(Mm, new Map), o = u.useCallback(e => s({
						type: Sm.a.Completed,
						payload: {
							promoName: e
						}
					}), []), r = u.useCallback(e => s({
						type: Sm.a.Dismissed,
						payload: {
							promoName: e
						}
					}), []), a = u.useCallback(e => s({
						type: Sm.a.Shown,
						payload: {
							promoName: e
						}
					}), []), i = u.useMemo(() => ({
						completePromo: o,
						dismissPromo: r,
						promos: n,
						showPromo: a
					}), [o, r, n, a]);
					return u.createElement(km.a.Provider, {
						value: i
					}, t)
				},
				Nm = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				Im = n("./src/reddit/helpers/postCollection.ts"),
				Tm = n("./src/reddit/models/Theme/index.ts"),
				Am = n("./src/reddit/selectors/experiments/econ/meta.ts");
			var Rm = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Lm = n("./src/reddit/selectors/experiments/survey.ts"),
				Dm = n("./src/reddit/selectors/notificationBanner.ts"),
				Fm = n("./src/reddit/selectors/onboarding.ts"),
				Um = n("./src/reddit/selectors/posts.ts"),
				Gm = n("./src/reddit/components/AppRouter/index.m.less"),
				Bm = n.n(Gm);

			function qm() {
				return (qm = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Hm = e => {
					let {
						className: t,
						shouldDisplayPinnedSubscriptions: n,
						...s
					} = e;
					return m.a.createElement("div", qm({
						className: Object(v.a)(Bm.a.main, {
							[Bm.a.mShowingPaddedPinnedDescriptions]: n
						}, t)
					}, s))
				},
				Wm = Object(C.a)(e => {
					let {
						className: t,
						overlayScrollContainerEl: n,
						theme: s,
						...o
					} = e;
					const r = Object(F.a)({
						theme: s,
						...o
					});
					return m.a.createElement("div", qm({
						className: Object(v.a)(Bm.a.overlayContentWrapper, t),
						style: {
							"--comments-overlay-background": Object(Tm.g)(r.canvas, r.canvasImgUrl, r.canvasImgPosition),
							"--comments-overlay-offset": `${Object(_t.c)(n)}px`
						}
					}, o))
				}),
				Vm = e => {
					let {
						className: t,
						divRef: n,
						...s
					} = e;
					const o = Object(u.useContext)(g.a);
					return m.a.createElement("div", qm({
						className: Object(v.a)(Bm.a.lightboxHeaderWrapper, t, {
							[Bm.a.lightboxHeaderWrapperExp]: o
						})
					}, s, {
						ref: n
					}))
				},
				Qm = Object(Dm.a)(ud.a.EmailCollectionBannerId),
				zm = Object(p.b)(() => Object(f.c)({
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
					isNpsSurveyEnabled: Lm.d,
					isOnboardingQueryParamEnabled: Fm.c,
					isSubscriptionsPinned: es.b,
					isSuccessfulSurveyEnabled: Lm.f,
					isSuspended: at.W,
					isFPR: at.N,
					posts: Um.J,
					profileCollectionsEnabled: sm.a,
					showEmailCollectionBanner: e => !Object(It.M)(e.platform.currentPage) && Qm(e),
					isBlockingInterstitialEnabled: Rm.b,
					signUpModalIsOpen: Object(Ia.c)(Fe.a.REGISTER_MODAL_ID)
				}), e => ({
					onClickOutsideOverlay: t => e(Object(h.b)(t)),
					onPostDismissTrigger: () => e(Object(S.k)()),
					onSuccessfulSignupTrigger: () => e(Object(S.g)()),
					onUnpinSubscriptions: () => e(Object(_.j)())
				})),
				Km = (e, t) => !(!e.state || !e.state[nr.b.IsOverlay] || t === e);
			class Jm extends m.a.Component {
				constructor(e) {
					super(e), this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage, this.isNarrowScreen = !1, this.isWideScreen = !1, this.didCountSurveyTrigger = !1, this.resizeHandler = d()(() => {
						const e = window.innerWidth;
						this.props.isSubscriptionsPinned && e < Em.l && this.props.onUnpinSubscriptions()
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
								o = `${O.Ib.Post}_${s}`,
								r = t && s && t[o],
								a = r && r.belongsTo.type === jm.a.PROFILE;
							return !(!r || !Object(Im.a)(r) || a && !n)
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
					} = this.props, o = n.state && n.state[nr.b.IsOverlay], r = Object(P.a)(this.previousLocation, e.location);
					t && o && r && !this.didCountSurveyTrigger && (s(), this.didCountSurveyTrigger = !0);
					const a = Object(P.a)(this.previousLocation, this.props.location),
						i = o ? this.previousPage : this.props.currentPage;
					if (i) {
						const {
							meta: t,
							urlParams: n
						} = i, s = t && (t.name === O.Nb.INDEX || t.name === O.Nb.SUBREDDIT && n.subredditName === Cs.b.Popular), o = Object(U.c)(this.props.frontpageSignupVariant), r = Object(U.c)(e.frontpageSignupVariant);
						s || o || !r ? o && !r && this.setState({
							isSignupUpsellDisplayed: !1
						}) : this.setState({
							isSignupUpsellDisplayed: !0,
							isSignupUpsellHidden: !1
						})
					}
					if ("POP" === e.history.action || o || r || a || (this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage), this.props.isBlockingInterstitialEnabled && this.props.signUpModalIsOpen) return;
					const c = Km(e.location, this.previousLocation);
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
						isD2xSeoDisableLightboxEnabled: r,
						isFPR: a,
						isLoggedIn: i,
						isSubscriptionsPinned: l,
						isSuspended: d,
						location: p,
						onClickOutsideOverlay: b,
						routes: h,
						showEmailCollectionBanner: g
					} = this.props, {
						isSignupUpsellDisplayed: f,
						isSignupUpsellHidden: v
					} = this.state, C = this.context, y = Km(p, this.previousLocation);
					p.state && p.state[nr.b.IsOverlay] && !y ? p.state[nr.b.IsOverlay] = !1 : p.state && (this.previousLocation === p || p.state[nr.b.CloseLocation] && this.previousLocation.state && this.previousLocation.state[nr.b.CloseLocation] && this.previousLocation.state[nr.b.CloseLocation] === p.state[nr.b.CloseLocation] ? p.state[nr.b.CloseLocation] = {
						...this.previousLocation,
						state: c()(this.previousLocation.state, nr.b.CloseLocation)
					} : p.state[nr.b.CloseLocation] = this.previousLocation);
					const x = Object(P.a)(this.previousLocation, p),
						E = y || x ? this.previousLocation : p,
						j = y || x ? this.previousPage : t,
						_ = !(!(j && j.meta && j.meta.name === O.Nb.SEARCH_RESULTS && j && j.queryParams) || j.queryParams[sr.t]),
						S = !(!j || !j.meta || j.meta.name !== O.Nb.MODERATION_PAGES),
						M = Object(It.x)(j),
						w = this.getIsPostCollection(),
						N = f && !v,
						I = e.showBanner;
					return s ? o.fbt._("Sorry, we have failed you. Try refreshing!", null, {
						hk: "3qsDla"
					}) : m.a.createElement(m.a.Fragment, null, m.a.createElement(It.a.Provider, {
						value: j
					}, m.a.createElement(Io.c, {
						isOverlayOpen: y
					}, m.a.createElement(Cd.a, {
						forceRedditTheme: _
					}, f && m.a.createElement(xe, {
						frontpageSignupVariant: n,
						onClose: this.hideSignupUpsell
					}), m.a.createElement(Ym, {
						browserInfo: C,
						connection: e,
						isFPR: a,
						isInline: N,
						isSuspended: d,
						showOffline: I
					})), m.a.createElement(_m.a.Provider, {
						value: !1
					}, m.a.createElement(Cd.a, {
						forceRedditTheme: _ || S,
						isCommentsPage: M
					}, m.a.createElement(wm, null, m.a.createElement(Zm, {
						browserInfo: C,
						frontpageSignupVariant: n,
						isD2xSeoDisableLightboxEnabled: r,
						isCommentsPage: M,
						isInline: N,
						isLoggedIn: i,
						isSubscriptionsPinned: l,
						location: E,
						overlayIsOpen: y,
						page: j,
						routes: h,
						showEmailCollectionBanner: g,
						showFPR: a,
						showOffline: I,
						showSuspended: d
					}), m.a.createElement(xm.b, null), m.a.createElement(xm.a, null)))))), m.a.createElement(It.a.Provider, {
						value: t
					}, y && m.a.createElement(_m.a.Provider, {
						value: !0
					}, m.a.createElement(Cd.a, {
						isOverlay: !0
					}, m.a.createElement(Xm, {
						browserInfo: C,
						isPostCollection: w,
						location: p,
						onClickOutsideOverlay: b,
						page: t,
						routes: h,
						showEmailCollectionBanner: g,
						showFPR: a,
						showOffline: I,
						showSuspended: d
					}))), m.a.createElement(Cd.a, null, m.a.createElement(u.Fragment, null, m.a.createElement(nm, null), m.a.createElement(Od.a, null), g && m.a.createElement(k.a, null), m.a.createElement(Mt, null), m.a.createElement(zn, null)))))
				}
			}
			Jm.contextType = y.a;
			const Ym = Object(A.c)(e => {
					const t = Object(It.fb)(),
						n = Object(p.e)(e => ((e, t) => {
							let {
								pageLayer: n
							} = t;
							return !!Object(It.bb)(n) || !Object(Am.a)(e)
						})(e, {
							pageLayer: t
						})),
						s = Object(u.useContext)(g.a),
						{
							browserInfo: o,
							connection: r,
							isFPR: a,
							isInline: i,
							showOffline: c,
							isSuspended: l
						} = e,
						d = {
							browserInfo: o,
							showFPR: a,
							showSuspended: l,
							showOffline: c,
							navExperiment: s
						};
					return m.a.createElement(u.Fragment, null, m.a.createElement(gm, d), n && m.a.createElement(ld, {
						className: Object(v.a)(Bm.a.header, Object(fm.b)(Bm.a, d), {
							[Bm.a.inline]: i
						})
					}), m.a.createElement(ym, {
						className: Object(v.a)(Bm.a.offlineBanner, Object(fm.b)(Bm.a, d)),
						online: r.online,
						showBanner: r.showBanner
					}))
				}),
				Zm = Object(A.c)(class extends m.a.Component {
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
							isCommentsPage: o,
							isD2xSeoDisableLightboxEnabled: r,
							isInline: a,
							isLoggedIn: i,
							isSubscriptionsPinned: c,
							showEmailCollectionBanner: l
						} = this.props, d = c && !(!r && !i && !s && o);
						return m.a.createElement(Hm, {
							"aria-hidden": s,
							className: Object(v.a)(Object(fm.b)(Bm.a, this.props), {
								[Bm.a.withUpsell]: !!e,
								[Bm.a.inline]: a
							}),
							shouldDisplayPinnedSubscriptions: d
						}, d && m.a.createElement(vd, {
							className: Object(v.a)(Bm.a.pinnedSubscriptions, Object(fm.b)(Bm.a, this.props)),
							"data-redditstyle": !0
						}), m.a.createElement(b.f, {
							location: t
						}, n), l && m.a.createElement("div", {
							className: Object(v.a)(Bm.a.bottomSpacer, Object(fm.a)(Bm.a, this.props))
						}))
					}
				});
			class Xm extends m.a.Component {
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
							t(e.state[nr.b.CloseLocation])
						}
					}, this.onOverlayMouseDown = e => {
						this.mouseDownInWrapper = e.target === this.state.overlayScrollContainerEl && e.clientX <= window.innerWidth - 17
					}, this.state = {
						overlayScrollContainerEl: null,
						mediaIsFullscreen: !1
					}
				}
				componentDidMount() {
					document.addEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.lightboxHeaderEl && (this.lightboxHeaderEl.focus(), this.listingFocusSubscriptionId = Nm.a.subscribe(e => {
						e.isListingFocused && this.lightboxHeaderEl.querySelector(E.a).focus()
					}))
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.listingFocusSubscriptionId && Nm.a.unsubscribe(this.listingFocusSubscriptionId)
				}
				render() {
					const {
						isPostCollection: e,
						page: t,
						routes: n
					} = this.props, {
						overlayScrollContainerEl: s
					} = this.state, o = !(!t || !t.meta || t.meta.name === O.Nb.SUBREDDIT_CREATION || t.meta.name === O.Nb.PUBLIC_ACCESS_NETWORK), r = e;
					return m.a.createElement(Wm, {
						className: Object(v.a)(Object(fm.b)(Bm.a, this.props), {
							[Bm.a.mIsCommentsLightbox]: o,
							[Bm.a.mIsLargeCommentsLightbox]: r
						}),
						overlayScrollContainerEl: s
					}, m.a.createElement("div", {
						className: Object(v.a)(Bm.a.overlayWrapper, Object(fm.b)(Bm.a, this.props))
					}, m.a.createElement("div", {
						className: Object(v.a)(Bm.a.overlayScrollContainer, {
							[Bm.a.mediaIsFullscreen]: this.state.mediaIsFullscreen
						}),
						id: Pm.d,
						ref: this.overlayRefFn,
						onMouseDown: this.onOverlayMouseDown,
						onMouseUp: this.onOverlayMouseUp
					}, o && m.a.createElement(Vm, {
						divRef: this.lightboxHeaderRefFn,
						className: Object(v.a)(Object(fm.b)(Bm.a, this.props), {
							[Bm.a.mIsLargeCommentsLightbox]: r
						}),
						tabIndex: -1
					}, m.a.createElement(dd.a, {
						page: t
					})), m.a.createElement(b.f, null, n), m.a.createElement("div", {
						className: Object(v.a)(Bm.a.bottomSpacer, Object(fm.a)(Bm.a, this.props))
					}))))
				}
			}
			t.b = zm(Object(A.c)(Jm))
		},
		"./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(s.a)({
				ErrorComponent: r,
				getComponent: () => Object(o.a)(() => n.e("BannedUserModal").then(n.bind(null, "./src/reddit/components/BannedUserList/AddBannedUserModal/_AddBannedUserModal.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/BlockNavigation/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				i = n("./src/reddit/actions/modal.ts");
			const c = "non-empty-string-to-block-navigation";
			class l extends o.a.Component {
				constructor() {
					super(...arguments), this.onBeforeUnload = e => {
						if (this.props.enabled) return e.preventDefault(), e.returnValue = "", ""
					}, this.message = (e, t) => {
						return !0 === (this.props.confirmNavigate || this.defaultConfirmNavigate)(e, t) || c
					}, this.defaultConfirmNavigate = (e, t) => {
						const {
							ignoreCurrentLocation: n = !0,
							location: s,
							showModal: o,
							dialogId: r
						} = this.props;
						return !(!n || e.pathname !== s.pathname) || (r && o(), !1)
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
					return o.a.createElement(a.b, {
						message: this.message,
						when: e
					})
				}
			}
			t.a = Object(r.b)(null, (e, t) => ({
				showModal: () => e(Object(i.h)(t.dialogId))
			}))(Object(a.i)(l))
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
			const o = Object(s.a)({
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
			t.a = o
		},
		"./src/reddit/components/ChangeUsernameTooltip/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
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
			t.a = o
		},
		"./src/reddit/components/CoinPurchaseModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/helpers/loadThirdPartyScript.ts"),
				c = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				l = n("./src/reddit/constants/modals.ts");
			const d = () => Object(a.a)(() => Promise.all([n.e("CoinPurchaseModal").then(n.bind(null, "./src/reddit/components/CoinPurchaseModal/index.tsx")), Object(i.d)().catch(() => {})])).then(e => e[0].default),
				u = Object(r.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: d
				});
			Object(c.b)(l.a.ECON_COIN_PURCHASE, e => o.a.createElement(u, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Crypto/componentStyles.less": function(e, t, n) {},
		"./src/reddit/components/Econ/ClaimFreeAwardModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.ECON_CLAIM_FREE_AWARD_MODAL, e => r.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.ECON_COIN_PACKAGE_OFFER, e => r.a.createElement(c, {
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
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = () => Promise.all([n.e(0), n.e(1), n.e("vendors~MarketplaceClaimModal"), n.e("MarketplaceClaimModal")]).then(n.bind(null, "./src/reddit/components/Econ/Marketplace/ClaimModal/index.tsx")),
				l = Object(s.a)(c, {
					ssr: !1
				});
			Object(a.b)(i.a.ECON_MARKETPLACE_CLAIM, e => r.a.createElement(l, {
				onClose: e
			}))
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/modal.m.less"),
				l = n.n(c);
			const d = Object(s.a)({
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
			Object(a.b)(i.a.ACHIEVEMENT_FLAIR, e => r.a.createElement(d, {
				onOverlayClick: e,
				withOverlay: !0,
				className: l.a.modalBody
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
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const l = () => n.e("EconPowerupsMarketingModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsMarketingModal/index.tsx")),
				d = Object(r.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(a.a)(l).then(e => e.default)
				});
			Object(i.b)(c.a.ECON_POWERUPS_MARKETING, e => o.a.createElement(d, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/PowerupsPremiumUpsellModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.m.less"),
				l = n.n(c);
			const d = () => n.e("PowerupsPremiumUpsellModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.tsx")),
				u = Object(s.a)(d);
			Object(a.b)(i.a.ECON_POWERUPS_PREMIUM_UPSELL, e => r.a.createElement(u, {
				onOverlayClick: e,
				withOverlay: !0,
				className: l.a.modal
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
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/helpers/loadThirdPartyScript.ts"),
				c = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				l = n("./src/reddit/constants/modals.ts");
			const d = () => Promise.all([n.e("EconPowerupsPurchaseModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsPurchaseModal/index.tsx")), Object(i.d)().catch(() => {})]),
				u = Object(r.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(a.a)(d).then(e => e[0].default)
				});
			Object(c.b)(l.a.ECON_POWERUPS_PURCHASE, e => o.a.createElement(u, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/PowerupsSuccess/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/components/Econ/PowerupsSuccess/index.m.less"),
				l = n.n(c);
			const d = Object(s.a)({
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
			Object(a.b)(i.a.ECON_POWERUPS_SUCCESS, () => r.a.createElement(d, {
				withOverlay: !0,
				className: l.a.modalBody,
				overlayClassName: l.a.modalOverlay
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
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.ECON_PREDICTIONS_CANCEL_PREDICTION, () => r.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.ECON_PREDICTIONS_CHANGE_OUTCOME, () => r.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/Prediction/EndTimeModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.ECON_PREDICTIONS_CHANGE_END_TIME, () => r.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/Prediction/PremiumModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.ECON_PREDICTIONS_PREMIUM_UPSELL, () => r.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/TopAwardersModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.ECON_TOP_AWARDERS, e => r.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/EditCommunityDescriptionModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.EDIT_DESCRIPTION_MODAL, e => r.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			var l = c
		},
		"./src/reddit/components/EmailCollection/Banner/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
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
			t.a = o
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
				return r
			})), n.d(t, "a", (function() {
				return a
			}));
			const s = {},
				o = () => null;

			function r(e, t) {
				if (e in s) throw new Error(`Modal with id ${e} already registered!`);
				s[e] = t
			}

			function a(e) {
				return e && e in s ? s[e] : o
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
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/lib/classNames/index.ts"),
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
				C = Object(i.b)(O, e => ({
					onClose: () => e(Object(u.g)(m.a.GOLD_GILD_ANIMATION_OVERLAY))
				}));
			t.default = Object(l.a)(C(e => {
				const {
					award: t,
					awardIcon: n,
					onClose: s
				} = e;
				setTimeout(s, 1700);
				const r = o.fbt._("Animation of {award name} image", [o.fbt._param("award name", t.name)], {
					hk: "222osK"
				});
				return a.a.createElement("div", {
					className: g.a.gildAnimationContainer
				}, a.a.createElement("div", {
					className: Object(d.a)(g.a.animationComponent, g.a.starburst),
					style: {
						backgroundImage: `url(${v})`
					}
				}), a.a.createElement("img", {
					alt: r,
					className: Object(d.a)(g.a.animationComponent, g.a.awardAsset),
					src: n
				}), a.a.createElement("div", {
					className: Object(d.a)(g.a.animationComponent, g.a.sparkle),
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
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.CRYPTO_BURN_POINTS, e => r.a.createElement(c, null))
		},
		"./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.CONVERT_TO_COINS, e => r.a.createElement(c, null))
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
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n.n(o),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/models/Gold/ProductOffer.ts"),
				b = n("./src/reddit/components/CoinPurchaseModal/async.tsx"),
				h = n("./src/reddit/components/PremiumPurchaseModal/Loader.tsx"),
				g = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/helpers/awards/overlayIds.ts"),
				v = n("./src/reddit/helpers/correlationIdTracker.ts"),
				O = n("./src/reddit/helpers/trackers/goldTopNav.ts"),
				C = n("./src/reddit/icons/fonts/index.tsx"),
				y = n("./src/reddit/selectors/experiments/econStorefrontClaim.ts"),
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
				k = Object(l.c)({
					activeSaleConfig: x.a,
					activeTooltipId: E.a,
					coinPurchaseDropdownIsOpen: e => Object(E.b)(S)(e),
					isFreeAwardEventEnabled: e => Object(y.a)(e) && Object(x.g)(e)
				}),
				M = (e, t) => ({
					closeTooltip: () => e(Object(m.i)()),
					requestSpecialEvents: () => e(Object(u.a)()),
					toggleTooltip: t => {
						e(t === S ? Object(m.i)() : Object(m.f)({
							tooltipId: S
						}))
					}
				}),
				w = Object(c.b)(k, M);
			class N extends i.a.Component {
				constructor() {
					super(...arguments), this.handleClick = e => {
						const {
							activeTooltipId: t,
							activeSaleConfig: n,
							coinPurchaseDropdownIsOpen: s,
							isFreeAwardEventEnabled: o,
							sendEvent: r,
							toggleTooltip: a
						} = this.props;
						if (!s) {
							Object(v.e)(v.a.GoldPayment, !0), Object(b.a)(), Object(h.a)();
							const e = n ? p.a.CoinSale : o ? p.a.StorefrontFreeAward : void 0;
							r(Object(O.d)("get_coins_cta", e))
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
					return e ? e.ctaText || o.fbt._("Coin Sale", null, {
						hk: "1VWZAa"
					}) : t ? o.fbt._("Free", null, {
						hk: "2qYM7h"
					}) : o.fbt._("Get Coins", null, {
						hk: "4h3X7d"
					})
				}
				render() {
					const {
						activeSaleConfig: e,
						className: t,
						closeTooltip: n,
						coinPurchaseDropdownIsOpen: s,
						isFreeAwardEventEnabled: o
					} = this.props, r = this.getButtonText(), a = !!e || o, c = Object(d.a)(j.a.icon, {
						[j.a.special]: a
					});
					return i.a.createElement("button", {
						className: Object(d.a)(t, j.a.ctaContainer, {
							[j.a.special]: a
						}),
						id: S,
						onClick: this.handleClick
					}, i.a.createElement("div", {
						className: Object(d.a)(j.a.ctaContent, {
							[j.a.special]: a
						})
					}, i.a.createElement(C.a, {
						name: "coins",
						className: c
					}), i.a.createElement("span", {
						className: j.a.text
					}, r)), s && i.a.createElement(_, {
						activeSaleConfig: e,
						isFreeAwardEventEnabled: o,
						isOpen: s,
						onCloseTooltip: n,
						tooltipId: S
					}))
				}
			}
			t.a = w(Object(g.c)(N))
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
				o = n.n(s),
				r = n("./src/reddit/constants/elementIds.ts"),
				a = n("./src/reddit/contexts/NavbarExp.ts"),
				i = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				c = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				l = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/components/Header/Sparse.m.less"),
				u = n.n(d),
				m = n("./src/lib/lessComponent.tsx");
			const p = m.a.wrapped(i.a, "Logo", u.a),
				b = m.a.wrapped(c.a, "Wordmark", u.a),
				h = m.a.div("SparseContainer", u.a),
				g = m.a.div("SparseContainerExp", u.a),
				f = m.a.a("HomeExternalLink", u.a);
			t.a = function(e) {
				const t = Object(s.useContext)(a.a) ? g : h;
				return o.a.createElement(t, {
					id: r.c
				}, o.a.createElement(f, {
					href: e.logoHref || "/",
					onClick: e.logoOnClick
				}, o.a.createElement(l.a, null, o.a.createElement(p, null), o.a.createElement(b, null))))
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
		"./src/reddit/components/HeaderUserDropdown/UserMenu/Components/WrappedRedditLink/index.m.less": function(e, t, n) {
			e.exports = {
				wrappedRedditLink: "_2NC38Q4rouKBBzqzRX6lhs",
				title: "FoPLNyQVV7ez6y0sHbwMw",
				new: "_2nuU8DsVa0ONjRG-wncIjP",
				wrappedExperimentRedditLink: "_3WVoLUGBYLjGL1eoKYhzYY"
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
				return l
			})), n.d(t, "f", (function() {
				return d
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
				o = n("./src/config.ts"),
				r = n("./src/lib/pubsub/index.ts"),
				a = n("./src/reddit/constants/listings.ts"),
				i = n("./src/reddit/constants/page.ts");
			const c = e => e && e.toLowerCase() === a.b.Popular,
				l = e => e && e.toLowerCase() === a.b.All,
				d = e => e && e === i.c,
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
					let t, n, r, i, m, {
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
					return d(p) ? (t = `${o.a.assetPath}/img/id-cards/home-banner@2x.png`, r = u(`url('${o.a.assetPath}/img/id-cards/snoo-home@2x.png')`), m = a.c[a.b.Home], n = s.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), i = s.fbt._("Home", null, {
						hk: "9xVXB"
					})) : l(p) ? (t = `${o.a.assetPath}/img/id-cards/banner@2x.png`, n = s.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), r = u(`url('${o.a.assetPath}/img/id-cards/snoo-home@2x.png')`), i = "r/all", m = a.c[a.b.All]) : c(p) ? (t = `${o.a.assetPath}/img/id-cards/banner@2x.png`, n = s.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), r = u(`url('${o.a.assetPath}/img/id-cards/snoo-home@2x.png')`), i = "r/popular", m = a.c[a.b.Popular]) : p && (n = h && h.description, r = u(""), i = b.displayText, m = b.url, O = h && h.subscribersCount, v = h && h.currentlyViewingCount), {
						snooBackground: r,
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
				p = new r.a,
				b = "VISIBLE",
				h = "NOT_VISIBLE",
				g = e => p.publish(e ? b : h)
		},
		"./src/reddit/components/InboxTooltip/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
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
			t.a = o
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
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/constants/icons.ts"),
				u = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/shortcuts/close.ts"),
				p = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				b = n("./src/reddit/components/FlairWrapper/index.tsx"),
				h = n("./src/reddit/components/IdCard/helpers.ts"),
				g = n("./src/reddit/components/PostTitle/index.tsx"),
				f = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				v = n("./src/reddit/components/SubscribeButton/index.tsx"),
				O = n("./src/reddit/components/TrackingHelper/index.tsx"),
				C = n("./src/reddit/constants/colors.ts"),
				y = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/helpers/postCollection.ts"),
				E = n("./src/reddit/icons/fonts/index.tsx"),
				P = n("./src/reddit/icons/svgs/Subreddit/index.tsx"),
				j = n("./src/reddit/models/Media/index.ts"),
				_ = n("./src/reddit/models/Vote/index.ts"),
				S = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				k = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				M = n("./src/reddit/selectors/platform.ts"),
				w = n("./src/reddit/selectors/subreddit.ts"),
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
						const o = s || Object(M.n)(e, {
							page: n
						});
						return (null == o ? void 0 : o.belongsTo) ? Object(w.K)(e, {
							identifier: o.belongsTo
						}) : null
					},
					post: M.n,
					joinOptimizationsLightboxHeaderEnabled: e => Object(S.a)(e) || Object(S.d)(e) || Object(S.c)(e),
					isVoteCountAnimation: (e, t) => {
						let {
							page: n,
							post: s
						} = t;
						if (!n && !s) return !1;
						const o = n && Object(M.n)(e, {
							page: n
						}) || s;
						return !!o && Object(k.g)(e, {
							post: o
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
						const o = e.post || n.post;
						o && t.toggleVote(o.id, s)
					}
				})),
				D = {
					[j.o.GIFVIDEO]: d.a.gif_post,
					[j.o.IMAGE]: d.a.image_post,
					[j.o.TEXT]: d.a.text_post,
					[j.o.RTJSON]: d.a.text_post,
					[j.o.VIDEO]: d.a.video_post,
					[j.o.EMBED]: d.a.embed,
					[j.o.LIVEVIDEO]: d.a.video_live,
					[j.o.GALLERY]: d.a.media_gallery,
					[j.o.LIVEAUDIO]: d.a.audio
				},
				F = e => D[(null == e ? void 0 : e.media) ? e.media.type : j.o.EMBED];
			class U extends r.a.Component {
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
								noun: (null == t ? void 0 : t.name) && Object(w.eb)(e, {
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
						post: d,
						useAdaptiveStyles: u,
						isVoteCountAnimation: m
					} = this.props, h = F(d), O = !d && (null === (e = null == i ? void 0 : i.meta) || void 0 === e ? void 0 : e.name) === l.Nb.META_MEMBERSHIP_PAYWALL_PAGE, y = d ? I.a : function(e) {
						let {
							children: t,
							postId: n
						} = e;
						return t
					};
					return r.a.createElement("div", {
						className: Object(c.a)(A.a.container, t, {
							[A.a.isCollection]: d && Object(x.a)(d),
							[A.a.adaptive]: u
						})
					}, r.a.createElement(y, {
						postId: null == d ? void 0 : d.id
					}, r.a.createElement("div", {
						className: A.a.postDetails
					}, d && r.a.createElement(o.Fragment, null, m && !u ? void 0 : r.a.createElement(p.a, {
						className: A.a.horizontalVotes,
						compact: !1,
						light: !u,
						model: d,
						onVoteClick: a,
						redditStyle: !0
					}), r.a.createElement(E.a, {
						name: h,
						className: A.a.mediaIcon
					}), r.a.createElement(g.c, {
						className: A.a.postTitle,
						post: d,
						size: u ? g.b.Medium : g.b.Small,
						hideSourceLink: !0,
						isCommentsPage: !0,
						isOverlay: !0,
						nowrap: !0,
						titleColor: u ? void 0 : C.a.lightboxHeaderText,
						titleLinkClassName: A.a.postTitleLink
					}), r.a.createElement(b.a, {
						post: d,
						nowrap: !0,
						sendEvent: this.props.sendEvent
					}), this.props.showSubreddit && this.props.subreddit && r.a.createElement(r.a.Fragment, null, r.a.createElement(P.a, {
						className: A.a.srIcon
					}), r.a.createElement(f.a, {
						to: this.props.subreddit.url,
						className: A.a.subredditName
					}, this.props.subreddit.name))), O && i && i.urlParams.subredditName && r.a.createElement("div", {
						className: A.a.membershipPaywallTitle
					}, s.fbt._("{communityName} Special Membership", [s.fbt._param("communityName", `r/${i.urlParams.subredditName}`)], {
						hk: "4vP4VY"
					}))), r.a.createElement("div", {
						className: A.a.actions
					}, this.props.joinOptimizationsLightboxHeaderEnabled && this.props.subreddit && r.a.createElement(v.a, {
						className: Object(c.a)(A.a.SubscribeButton, {
							[A.a.visible]: this.state.showSubscribeButton
						}),
						identifier: {
							name: this.props.subreddit.name,
							type: "subreddit"
						},
						onClick: this.handleSubscribeButtonClick,
						small: !0
					}), !this.props.hideCloseButton && r.a.createElement(G, {
						onClick: n || this.closeLightbox
					}))))
				}
			}
			const G = r.a.memo(e => r.a.createElement(y.t, {
				className: A.a.CloseButton,
				size: y.d.XS,
				onClick: e.onClick,
				priority: y.c.Plain,
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
				return r
			}));
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts");
			const r = "Header--Moderation",
				a = () => null;
			t.b = Object(s.a)({
				ErrorComponent: a,
				getComponent: () => Object(o.a)(() => n.e("ModerationDropdowns").then(n.bind(null, "./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx"))).then(e => e.default),
				LoadingComponent: a
			})
		},
		"./src/reddit/components/MutedUserList/MuteUserModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(s.a)({
				ErrorComponent: r,
				getComponent: () => Object(o.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx"))).then(e => e.default),
				LoadingComponent: r
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
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
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
			const l = e => {
				let {
					children: t,
					className: n,
					...s
				} = e;
				return o.a.createElement("div", c({
					className: Object(r.a)(i.a.pillContainer, n)
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
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.ECON_PREDICTIONS_INACTIVITY_MODAL, () => r.a.createElement(c, null))
		},
		"./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.ECON_PREDICTIONS_START_TOURNAMENT_LIMIT, () => r.a.createElement(c, null))
		},
		"./src/reddit/components/PostFlowUpsellModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.POST_FLOW_UPSELL_MODAL_ID, e => r.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			var l = c
		},
		"./src/reddit/components/PowerupsSidebar/SupportersListModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/components/PowerupsSidebar/SupportersListModal/modal.m.less"),
				l = n.n(c);
			const d = Object(s.a)({
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
			Object(a.b)(i.a.ECON_SUPPORTERS_LIST, e => r.a.createElement(d, {
				onOverlayClick: e,
				withOverlay: !0,
				className: l.a.modalBody
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
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				c = n("./src/reddit/constants/modals.ts"),
				l = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			const d = () => Object(a.a)(() => Promise.all([n.e("PremiumPurchaseModal").then(n.bind(null, "./src/reddit/components/PremiumPurchaseModal/index.tsx")), Object(l.d)().catch(() => {})])).then(e => e[0].default),
				u = Object(r.a)({
					getComponent: d,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				});
			Object(i.b)(c.a.ECON_PREMIUM_PURCHASE, () => o.a.createElement(u, null))
		},
		"./src/reddit/components/Root/AdminPanelLoader.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/profile/index.ts"),
				c = n("./src/reddit/selectors/runTimeEnvVars.ts"),
				l = n("./src/reddit/selectors/user.ts");
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

			function u() {
				const e = Object(a.d)();
				return Object(o.useEffect)(() => {
					e(Object(i.a)())
				}, []), Object(a.e)(e => Object(c.b)(e) || Object(l.M)(e) || Object(l.L)(e)) ? r.a.createElement(d, null) : null
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
			const o = Object(s.a)({
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
			t.a = o
		},
		"./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less": function(e, t, n) {
			e.exports = {
				shortcutDiv: "hciOr5UGrnYrZxB11tX9s"
			}
		},
		"./src/reddit/components/SubredditCreationModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.SUBREDDIT_CREATION_MODAL_ID, e => r.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			var l = c
		},
		"./src/reddit/components/Survey/hooks.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return M
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "c", (function() {
				return I
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/isEqual.js"),
				r = n.n(o),
				a = n("./node_modules/lodash/shuffle.js"),
				i = n.n(a),
				c = n("./node_modules/react/index.js"),
				l = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/actions/preferences.ts"),
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
					const o = g.q(e, t);
					return o ? {
						experiment_name: o.name,
						experiment_variant: o.variant,
						experiment_version: o.version
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
				C = e => {
					let {
						action: t,
						experimentName: n,
						question: s,
						score: o,
						questionId: r,
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
							question_id: r,
							parent_question_id: a,
							score: o,
							...f(e, n)
						}
					})
				},
				y = e => {
					let {
						action: t,
						experimentName: n,
						question: s,
						text: o,
						type: r,
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
							type: v(r),
							text: o,
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
						score: o,
						type: r,
						questionId: a,
						questionParentId: i,
						max: c,
						text: l
					} = e;
					return e => ({
						source: "survey",
						action: t,
						noun: "multi_choice",
						...g.o(e),
						survey: {
							type: v(r),
							min: 0,
							max: c,
							text: l,
							question: s,
							score: o,
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
			const M = () => {
					const e = Object(l.d)(),
						t = Object(E.a)(),
						[n, s] = Object(c.useState)(null),
						o = Object(P.a)(),
						a = Object(l.e)(k.i),
						i = Object(l.e)(k.Db),
						u = Object(l.e)(_.a, r.a),
						b = Object(l.e)(h.c),
						g = Object(l.e)(h.a),
						f = Object(l.e)(h.b),
						v = Object(l.e)(h.d),
						C = Object(l.e)(S.g),
						y = Object(c.useMemo)(() => {
							const e = Object(p.g)(C),
								t = {};
							for (const n of e) t[n] = u[n];
							return t
						}, [u, C]),
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
							const o = Object(p.e)({
								triggerName: e,
								surveyExperimentVariants: y,
								samplingId: a || i,
								isSampleFactorEnabled: v,
								isSurveyServiceMigrationEnabled: C
							});
							if (!o || o.experimentName === (null == n ? void 0 : n.experimentName)) return;
							const r = y[o.experimentName];
							(null == r ? void 0 : r.variant) && o.variants.find(e => e.variantName === r.variant) && (C ? await (async (e, t, n) => {
								const s = await Object(m.b)(t());
								if (s.ok) {
									const t = s.body,
										{
											activeSurveys: o
										} = t.data.customerSurveyConfig,
										r = o.find(t => t.experimentName === e.experimentName);
									r && n({
										...e,
										steps: r.steps
									})
								}
							})(o, t, x) : x(o))
						}, [n, y, a, i, v, b, g, f, C, x, t]);
					return Object(c.useEffect)(() => {
						const e = Object(p.c)(),
							t = e.subscribe(j);
						return () => e.unsubscribe(t)
					}, [j]), Object(c.useEffect)(() => {
						if (!n) return;
						const t = Date.now();
						Object(p.i)(n, t), e(Object(d.I)({
							surveyLastSeenTime: t
						}, !1)), o(O(n.experimentName, "display"))
					}, [n, e, o]), {
						activeSurvey: n,
						setActiveSurvey: s
					}
				},
				w = e => {
					let {
						activeStepNum: t,
						activeSurvey: n,
						isFollowUp: o,
						textResponse: r,
						setTextResponse: a,
						setIsSurveyDismissed: i,
						uiStep: l
					} = e;
					(e => {
						let {
							isFollowUp: t,
							textResponse: n
						} = e;
						const o = Object(c.useCallback)(e => {
							if (t && n.length) return e.preventDefault(), e.returnValue = "sure?", s.fbt._("Are you sure?", null, {
								hk: "1B7lB5"
							})
						}, [t, n]);
						Object(c.useEffect)(() => (window.addEventListener("beforeunload", o), () => window.removeEventListener("beforeunload", o)), [o])
					})({
						isFollowUp: o,
						textResponse: r
					});
					const [d, u] = Object(c.useState)(!1), m = Object(P.a)(), p = n.experimentName, h = n.steps[t], g = null == h ? void 0 : h.type, f = null == h ? void 0 : h.question, v = Object(c.useCallback)(() => {
						t >= 0 ? u(!0) : (i(!0), m(O(n.experimentName, "dismiss")))
					}, [t, n, m, i]), E = Object(c.useCallback)(() => {
						a(""), i(!0);
						const e = {
							question: f,
							experimentName: p,
							type: g,
							action: "dismiss",
							questionId: l.toString(),
							questionParentId: h.type === b.a.MULTI_CHOICE && o ? `${l-1}` : null
						};
						m(o ? y(e) : h.type === b.a.MULTI_CHOICE ? x(e) : C(e))
					}, [p, o, f, h, m, i, a, g, l]);
					return {
						isLeavingModalShowing: d,
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
						setSelectedNumber: o,
						setTextResponse: r,
						textResponse: a
					} = e;
					const [l, d] = Object(c.useState)(-1), [u, m] = Object(c.useState)(0), [p, h] = Object(c.useState)(!1), g = Object(P.a)(), [f, v] = Object(c.useState)(""), [E, j] = Object(c.useState)([]), _ = Object(c.useCallback)(() => {
						var e, c;
						const E = t.experimentName,
							P = t.steps[l],
							_ = null == P ? void 0 : P.type,
							S = null == P ? void 0 : P.question,
							k = null == P ? void 0 : P.followUpQuestion,
							M = t.steps[l + 1],
							w = null == M ? void 0 : M.type,
							N = null == M ? void 0 : M.question;
						if (m(u + 1), M && M.questionOptions && j(i()(M.questionOptions)), -1 === l) {
							g(O(E, "agree")), d(0);
							const e = {
								question: N,
								type: w,
								action: "display",
								experimentName: E,
								questionId: `${u+1}`.toString(),
								questionParentId: null
							};
							return void g(w === b.a.MULTI_CHOICE ? x({
								text: f,
								...e
							}) : C(e))
						}
						const I = {
							experimentName: E,
							type: _,
							action: "submit",
							questionId: u.toString(),
							questionParentId: P.type === b.a.MULTI_CHOICE && p ? `${u-1}` : null
						};
						if (g(p ? y({
								text: a,
								question: k,
								...I
							}) : _ === b.a.MULTI_CHOICE ? x({
								question: S,
								max: null === (e = P.questionOptions) || void 0 === e ? void 0 : e.length,
								score: null === (c = P.questionOptions) || void 0 === c ? void 0 : c.findIndex(e => e === f),
								text: f,
								...I
							}) : C({
								question: S,
								score: n && n + (_ === b.a.NPS ? 0 : 1),
								...I
							})), o(void 0), r(""), v(""), p || !k)
							if (h(!1), l + 1 >= t.steps.length) s(!0);
							else {
								d(l + 1);
								const e = {
									experimentName: E,
									action: "display",
									type: w,
									question: N,
									questionId: (u + 1).toString()
								};
								g(w === b.a.MULTI_CHOICE ? x({
									text: f,
									...e
								}) : C(e))
							}
						else h(!0), g(y({
							experimentName: E,
							action: "display",
							type: _,
							question: k,
							questionId: `${u+1}`,
							questionParentId: u.toString()
						}))
					}, [f, v, l, t, p, a, n, g, s, o, r, u]);
					return {
						questionOptions: E,
						selectedOption: f,
						setSelectedOption: v,
						activeStepNum: l,
						isFollowUp: p,
						onStepComplete: _,
						uiStep: u,
						setActiveStepNum: d,
						setUIStep: m,
						setIsFollowUp: h
					}
				},
				I = e => {
					let {
						isSurveyDismissed: t,
						setIsSurveyDismissed: n,
						setActiveStepNum: o,
						setActiveSurvey: r,
						setUIStep: a,
						setIsFollowUp: i,
						shouldMount: d,
						uiStep: m
					} = e;
					const p = Object(l.d)();
					Object(c.useEffect)(() => {
						t && !d && setTimeout(() => {
							o(-1), a(0), i(!1), r(null), m > 1 && p(Object(u.f)({
								text: s.fbt._("Thanks for your feedback!", null, {
									hk: "11jNYw"
								}),
								kind: j.b.SuccessCommunityGreen
							}))
						}, 500)
					}, [p, t, d, m, n, o, r, a, i])
				}
		},
		"./src/reddit/components/Survey/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
				return e ? r.a.createElement(i, {
					activeSurvey: e,
					setActiveSurvey: t
				}) : null
			}
		},
		"./src/reddit/components/ThemeProvider/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/objectSelector/index.ts"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = n("./src/reddit/models/StructuredStyles/index.ts"),
				m = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/selectors/structuredStyles.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				g = n("./src/lib/CSSVariableProvider/index.tsx"),
				f = n("./src/lib/isAdHocMultireddit/index.ts");
			const v = (e, t) => t.forceRedditTheme ? void 0 : void 0 !== t.subredditName ? t.subredditName : Object(d.p)(e, t);
			class O extends r.a.Component {
				render() {
					const {
						children: e,
						isRootOrUniqueClassName: t,
						theme: n
					} = this.props;
					return r.a.createElement(g.e, {
						theme: n,
						isRootOrUniqueClassName: t
					}, e)
				}
			}
			const C = Object(a.b)(() => Object(i.a)(e => e.themes.current, e => !!Object(p.i)(e), e => {
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
				const o = e.structuredStyles.models[s];
				return o || void 0
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
				const o = Object(d.e)(e, t);
				return !!o && o.isNSFW
			}, (e, t) => t.isOverlay, (e, t) => t.isCommentsPage, (e, t, n, o, r, a, i, c, l, d, p) => {
				const b = {
						...i ? {
							emojiWidth: i[0],
							emojiHeight: i[1]
						} : {},
						shouldShowNSFWContent: l,
						isCommentsPage: p,
						isOverlay: d
					},
					h = r && r.length && !Object(f.a)(r) ? `subredditvars-r-${r.toLocaleLowerCase()}` : g.c;
				if (t && n && o) {
					const e = Object(u.h)(n, o);
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
			t.b = C;
			const y = Object(l.u)()(C)
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
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
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
				r = Object(s.a)({
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
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = n("./src/reddit/selectors/user.ts"),
				d = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
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
					currentUser: l.k,
					isNightMode: l.cb,
					isPresenceUserPrefEnabled: l.U,
					shouldHideNSFW: l.F
				}),
				f = Object(a.b)(g);
			t.a = f(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: o,
					wrapperClassName: a,
					...i
				} = e, l = Object(c.b)(null == t ? void 0 : t.accountIcon);
				return r.a.createElement("div", {
					className: Object(s.a)(b.a.currentUserIconWrapper, a)
				}, l ? r.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : r.a.createElement(m.b, h({}, i, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && r.a.createElement(d.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/constants/accountManager.ts": function(e, t, n) {
			"use strict";
			var s, o, r, a;
			n.d(t, "c", (function() {
					return s
				})), n.d(t, "a", (function() {
					return o
				})), n.d(t, "d", (function() {
					return r
				})), n.d(t, "b", (function() {
					return a
				})),
				function(e) {
					e.ChangePassword = "/change_password/", e.Index = "/login/", e.Register = "/register/", e.EnableTwoFactor = "/2fa/enable/", e.DisableTwoFactor = "/2fa/disable/", e.TwoFactorBackupCodes = "/2fa/backup-keys/", e.LinkAppleSSO = "/account/sso/link/?provider=apple", e.UnlinkAppleSSO = "/account/sso/unlink/?provider=apple", e.LinkGoogleSSO = "/account/sso/link/?provider=google", e.UnlinkGoogleSSO = "/account/sso/unlink/?provider=google", e.GoogleOneTap = "/account/sso/one_tap/", e.Onboarding = "/account/onboarding/"
				}(s || (s = {})),
				function(e) {
					e.ChangePassword = "changePassword", e.Close = "close", e.CreateAccount = "createAccount", e.GoogleOneTapDisplayed = "googleOneTapDisplayed", e.GoogleOneTapFlowFailed = "googleOneTapFlowFailed", e.GoogleOneTapSkipped = "googleOneTapSkipped", e.Login = "login", e.PreferenceStatus = "preferenceStatus", e.Register = "register", e.Resize = "resize", e.ShowStep = "showStep", e.SSOLinkFail = "ssoLinkFail", e.SSOLinkSuccess = "ssoLinkSuccess", e.SSOUnlinkFail = "ssoUnlinkFail", e.SSOUnlinkSuccess = "ssoUnlinkSuccess", e.Subscribe = "subscribe", e.TwoFactorChanged = "twoFactorChanged"
				}(o || (o = {})),
				function(e) {
					e.Embed = "embed", e.Modal = "modal"
				}(r || (r = {})),
				function(e) {
					e.SelectAccount = "select-account", e.Email = "email", e.EmailOptIn = "email-opt-in", e.GoogleUI = "google-ui", e.Subscribe = "subscribe", e.UsernameAndPassword = "username-and-password"
				}(a || (a = {}))
		},
		"./src/reddit/constants/promo.ts": function(e, t, n) {
			"use strict";
			var s, o;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.SignupUpsellCell = "signupUpsellBottomCell", e.SignupUpsellCellDismissible = "signupUpsellBottomCellDismissible", e.SignupUpsellBottomSheet = "signupUpsellBottomSheet"
				}(s || (s = {})),
				function(e) {
					e.Shown = "shown", e.Dismissed = "dismissed", e.Completed = "completed"
				}(o || (o = {}))
		},
		"./src/reddit/contexts/AdminEvents.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/brcast/dist/brcast.es.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = r.a.createContext(Object(s.a)([]))
		},
		"./src/reddit/contexts/Promo/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/noop.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js");
			const a = r.createContext({
				showPromo: o.a,
				dismissPromo: o.a,
				completePromo: o.a,
				promos: new Map
			});
			t.a = a
		},
		"./src/reddit/contexts/ThrottlingContext/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/constants/featureThrottling.ts"),
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
				c = Object.keys(r.a).reduce((e, t) => (e[t] = Object(s.createContext)(i), e), {});
			class l extends o.a.Component {
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
							const t = Object.keys(r.a).reduce((t, n) => (a.a.isFeatureThrottled(n) && (t[n] = {
								...e[n],
								isThrottled: !0
							}), t), {});
							return Object.keys(t).length > 0 ? t : null
						})
					}, this.renderContextProvider = (e, t) => {
						const n = c[t];
						return o.a.createElement(n.Provider, {
							value: this.state[t]
						}, e)
					}, this.state = Object.keys(r.a).reduce((e, t) => (e[t] = {
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = n("./src/reddit/controls/CheckboxWithLabel/index.m.less"),
				l = n.n(c);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isSelected,
				"aria-disabled": e.disabled,
				autoFocus: e.autoFocus,
				className: Object(r.a)(l.a.checkboxLabel, e.className),
				disabled: e.disabled,
				onClick: e.onClick,
				type: "button",
				role: "checkbox"
			}, o.a.createElement("span", {
				tabIndex: -1,
				className: l.a.labelContent
			}, e.isSelected ? o.a.createElement(i.a, {
				className: l.a.checkboxSelected
			}) : o.a.createElement(a.a, {
				className: l.a.checkbox
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
				o = n("./src/reddit/controls/InvisibleScreenReaderText/index.m.less"),
				r = n.n(o);
			t.a = s.a.span("invisibleText", r.a)
		},
		"./src/reddit/controls/Link/index.m.less": function(e, t, n) {
			e.exports = {
				link: "zrXDKcys3Vl7vt1f6ef4V"
			}
		},
		"./src/reddit/controls/Link/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/Link/index.m.less"),
				r = n.n(o);
			t.a = s.a.a("link", r.a)
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				c = n.n(i);
			t.a = Object(s.memo)(Object(s.forwardRef)((e, t) => {
				const n = e.size || a.d.XS;
				return o.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(r.a)(c.a.toggleSwitch, e.className, c.a[n], {
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
				}, o.a.createElement("div", {
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
				o = n("./src/reddit/controls/Typography/index.m.less"),
				r = n.n(o);
			s.a.h1("heading1", r.a), s.a.h2("heading2", r.a), s.a.h3("heading3", r.a), s.a.h4("heading4", r.a);
			const a = s.a.h5("heading5", r.a),
				i = (s.a.h6("heading6", r.a), s.a.p("body1", r.a), s.a.p("body2", r.a)),
				c = (s.a.p("actionFont", r.a), s.a.p("metadata", r.a));
			s.a.p("metadata3", r.a)
		},
		"./src/reddit/endpoints/gold/productCatalog/old.index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "a", (function() {
				return x
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/redditGQL/operations/ClaimAwardOffer.json"),
				c = n("./src/redditGQL/operations/FetchSpecialEvents.json"),
				l = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
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
						shouldUseCurrentOrigin: r
					} = e;
					const i = "/api/v2/gold/purchase_package_details",
						c = r && "undefined" != typeof window ? `${window.location.origin}${i}` : `${t.apiUrl}${i}`,
						m = Object(d.a)(c);
					return Object(o.a)(Object(a.a)(t, [l.a]), {
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
					premium_packages: o
				} = e.body, r = {
					activeSaleConfig: g(t),
					coinPackages: p(n),
					dealCoinPackages: b(s),
					premiumPackages: h(o)
				};
				return {
					...e,
					body: r
				}
			}
			const O = async e => {
				let {
					context: t,
					awardId: n,
					correlationId: r
				} = e;
				const i = `${t.apiUrl}/api/v2/gold/recommended_coin_package_details`,
					c = Object(d.a)(i);
				return Object(o.a)(Object(a.a)(t, [l.a]), {
					method: s.jb.GET,
					endpoint: c,
					data: {
						correlation_id: r,
						intended_award: n
					}
				}).then(u.c).then(C)
			};

			function C(e) {
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
			const y = e => Object(r.a)(e, {
					...c
				}),
				x = e => Object(r.a)(e, {
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
				return C
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/redditGQL/operations/ChangeStripePaymentMethod.json"),
				c = n("./src/reddit/constants/headers.ts"),
				l = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = n("./src/reddit/helpers/genericServerError/index.ts"),
				u = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const m = e => e.ok ? e.body.json && e.body.json.errors.length ? {
					...e,
					ok: !1,
					error: Object(u.a)(e)
				} : {
					...e
				} : {
					...e,
					error: e.error || Object(d.a)()
				},
				p = async e => {
					let {
						coins: t,
						context: n,
						correlationId: r,
						offerContext: i,
						pennies: d,
						rememberCard: u,
						token: p,
						savedCardId: b
					} = e;
					const h = {
							token: p ? p.id : void 0,
							coins: t,
							offer_context: i,
							pennies: d,
							remember_card: u,
							card_id: b,
							correlation_id: r
						},
						g = `${n.apiUrl}/api/v2/gold/stripe/buy_coins`,
						f = Object(l.a)(g);
					return Object(o.a)(Object(a.a)(n, [c.a]), {
						method: s.jb.POST,
						endpoint: f,
						data: h
					}).then(m)
				}, b = async e => {
					let {
						coins: t,
						context: n,
						correlationId: r,
						gildParams: i,
						isOldReddit: d,
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
						message: C
					} = i, y = {
						token: g ? g.id : void 0,
						coins: t,
						offer_context: u,
						pennies: p,
						thing_id: h,
						gild_type: v,
						message: C ? C.trim() : "",
						is_anonymous: O,
						remember_card: b,
						card_id: f,
						correlation_id: r
					}, x = `${n.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, E = d ? x : Object(l.a)(x);
					return Object(o.a)(Object(a.a)(n, [c.a]), {
						method: s.jb.POST,
						endpoint: E,
						data: y
					}).then(m)
				}, h = async e => {
					let {
						context: t,
						correlationId: n,
						gildParams: r,
						isOldReddit: i,
						pennies: d,
						rememberCard: u,
						thingId: p,
						token: b,
						savedCardId: h
					} = e;
					const {
						gildType: g,
						isAnonymous: f,
						message: v
					} = r, O = {
						token: b ? b.id : void 0,
						thing_id: p,
						award_id: g,
						message: v ? v.trim() : "",
						is_anonymous: f,
						pennies: d,
						remember_card: u,
						card_id: h,
						correlation_id: n
					}, C = `${t.apiUrl}/api/v2/gold/stripe/buy_award`, y = i ? C : Object(l.a)(C);
					return Object(o.a)(Object(a.a)(t, [c.a]), {
						method: s.jb.POST,
						endpoint: y,
						data: O
					}).then(m)
				}, g = async e => {
					let {
						context: t,
						correlationId: n,
						pennies: r,
						token: i
					} = e;
					const d = {
							token: i.id,
							pennies: r,
							correlation_id: n
						},
						u = `${t.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						p = Object(l.a)(u);
					return Object(o.a)(Object(a.a)(t, [c.a]), {
						method: s.jb.POST,
						endpoint: p,
						data: d
					}).then(m)
				}, f = "paymentInfoUpdated", v = async e => {
					const {
						origin: t
					} = window.location, n = `${t}/settings/premium`, s = new URLSearchParams({
						[f]: "true"
					}), o = await Object(r.a)(e, {
						...i,
						variables: {
							successUrl: `${n}?${s}`,
							cancelUrl: `${n}`
						}
					});
					if (!o.ok) throw new Error("Unable to update payment information");
					return o.body.data.changeStripePaymentMethod.sessionId
				}, O = async (e, t) => {
					const n = {
						card_id: t
					};
					return Object(o.a)(Object(a.a)(e, [c.a]), {
						method: s.jb.POST,
						endpoint: `${e.apiUrl}/api/v2/gold/stripe/delete_creditcard`,
						data: n
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(u.a)(e)
					})
				}, C = async e => Object(o.a)(Object(a.a)(e, [c.a]), {
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
				o = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = n("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, n) => {
				const l = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === c.i.MARKDOWN ? l.richtext_json = n : l.markdown_text = n, Object(o.a)(Object(r.a)(e, [a.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: s.jb.POST,
					data: l
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

			function o(e) {
				const {
					subreddit: t,
					amount: n,
					memo: s,
					cta: o
				} = e;
				return t && n && s && o ? {
					subreddit: t,
					amount: n,
					memo: s,
					cta: o
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/helpers/dom/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "h", (function() {
				return d
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
				o = n.n(s),
				r = n("./src/lib/FocusTrap/index.ts");
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
				l = () => c() ? (() => {
					const e = document.getSelection();
					if (!e) return [];
					const t = e.getRangeAt(0).cloneContents().childNodes;
					return o()(t, e => e.textContent || "")
				})() : null,
				d = (e, t) => {
					const n = document.createRange();
					return n.selectNode(t), e.compareBoundaryPoints(Range.END_TO_START, n) < 0 && e.compareBoundaryPoints(Range.START_TO_END, n) > 0
				},
				u = e => {
					const t = window.getSelection();
					if (1 !== t.rangeCount) return;
					const n = t.getRangeAt(0);
					if (!d(n, e)) return;
					const {
						startContainer: s,
						startOffset: o,
						endContainer: r,
						endOffset: a
					} = n, i = document.createRange();
					i.selectNode(e);
					let c = !0;
					if (-1 === i.compareBoundaryPoints(Range.START_TO_START, n) && (i.setStart(s, o), c = !1), 1 === i.compareBoundaryPoints(Range.END_TO_END, n) && (i.setEnd(r, a), c = !1), c) return [e];
					const l = document.createElement("div");
					return l.appendChild(i.cloneContents()), [...l.childNodes]
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
					e.querySelectorAll(r.a).forEach(e => {
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
			var s, o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/constants/postLayout.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/selectors/meta.ts"),
				l = n("./src/reddit/selectors/user.ts");

			function d(e) {
				return Object(i.R)(e, {}) === r.g.Large && !Object(l.O)(e) && !Object(c.d)(e)
			}

			function u(e) {
				return Object(a.c)(e, {
					expEventOverride: !1,
					experimentEligibilitySelector: d,
					experimentName: o.qd
				})
			}

			function m(e) {
				switch (e) {
					case o.rd.Enabled:
						return 18;
					default:
						return
				}
			}! function(e) {
				e.Enabled = "frontpage-card-posts-3.enabled", e.NoBucket = "frontpage-card-posts-3.no_bucket"
			}(s || (s = {}));
			const p = e => {
				switch (e) {
					case o.rd.Enabled:
						return s.Enabled;
					default:
						return s.NoBucket
				}
			}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");
			t.a = () => ({
				type: o.I.SERVER_ERROR,
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
				return o
			}));
			var s = n("./src/config.ts");
			const o = () => s.a.redditUrl
		},
		"./src/reddit/helpers/getSubredditErrorProps/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/models/ContentGate.ts");
			t.a = (e, t, n) => {
				let o, r, a, i, c, l, d, u, m, p, b;
				return e ? e.quarantinedSubreddit ? (r = s.a.QuarantinedSubreddit, i = e.quarantineMessage, c = e.quarantineMessageHtml, l = e.quarantineRequiresEmail) : e.privateSubreddit ? (r = s.a.PrivateSubreddit, a = e.subredditDescription, d = e.isContributorRequestsDisabled, u = e.isContributorRequestTimestamp) : e.goldSubreddit ? r = s.a.GoldSubreddit : e.subredditBanned ? (r = s.a.SubredditBanned, o = e.subredditBanMessage) : e.subredditDoesNotExist ? r = s.a.SubredditDoesNotExist : e.subredditBlockedForLegalReason ? r = s.a.SubredditBlockedForLegalReason : e.interstitialWarningMessage && (r = s.a.GatedSubreddit, m = e.interstitialWarningMessage, p = e.interstitialWarningMessageHtml, b = e.interstitialWarningMessageRTJson) : t && (r = s.a.Nsfw), r && n ? {
					banMessage: o,
					contentGateType: r,
					isContributorRequestsDisabled: d,
					isContributorRequestTimestamp: u,
					subredditDescription: a,
					subredditName: n,
					quarantineMessage: i,
					quarantineMessageHtml: c,
					quarantineRequiresEmail: l,
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
				return d
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				l = n.n(c);
			const d = i.a.button("button", l.a),
				u = e => t => o.a.createElement("div", {
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
						meta: d
					} = s,
					m = e => o.a.createElement(o.a.Fragment, null, o.a.createElement(i, {
						className: Object(a.a)(l.a.icon, {
							[l.a.isLit]: e
						})
					}), o.a.createElement(c, {
						className: l.a.body
					}), d && o.a.createElement("div", {
						className: l.a.metaContainer
					}, d));
				return n ? e => o.a.createElement("a", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, l.a.basicLink),
					href: e.href,
					onClick: e.onClick,
					target: "_blank",
					rel: "noopener noreferrer"
				}, m(e.isLit)) : e => e.href ? o.a.createElement(r.a, {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, l.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, m(e.isLit)) : o.a.createElement("button", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, l.a.button),
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
				return l
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/platform.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = e => {
					const t = Object(o.o)(e);
					return {
						actionInfo: Object(r.d)(e),
						post: t && Object(r.I)(e, t) || null,
						profile: Object(r.R)(e),
						screen: Object(r.ab)(e),
						subreddit: Object(r.ib)(e)
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
				l = () => e => ({
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
				return o
			})), n.d(t, "e", (function() {
				return r
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
				o = () => e => ({
					source: "banner",
					noun: "old_browser_r2",
					action: "click",
					banner: {
						id: "update_old_browser"
					}
				}),
				r = () => e => ({
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
				o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/models/PostDraft/index.ts"),
				a = n("./src/reddit/selectors/comments.ts"),
				i = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				l = n("./src/telemetry/index.ts");
			const d = e => {
					const t = Object(i.o)(e);
					return {
						source: "comment_composer",
						action: s.c.CLICK,
						...Object(c.o)(e),
						screen: Object(c.ab)(e),
						subreddit: Object(c.ib)(e),
						post: t ? Object(c.I)(e, t) : null,
						profile: Object(c.R)(e),
						correlationId: Object(o.c)(o.a.CommentComposer)
					}
				},
				u = async (e, t, s, o) => {
					const r = {
							commentId: o,
							commentsPageKey: s
						},
						i = o && Object(a.j)(e, r) || 0,
						{
							getFlairData: u
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(l.a)({
						noun: "comment",
						...d(e),
						comment: o ? Object(c.i)(e, o) : null,
						listing: Object(c.z)(e, void 0, {
							depth: i
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: u(e)
					})
				}, m = (e, t, n, s) => {
					const o = d(e);
					return Object(l.a)({
						...o,
						actionInfo: {
							...o.actionInfo,
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
				}, p = e => Object(l.a)({
					noun: "cancel",
					...d(e)
				}), b = (e, t) => {
					t === r.c.replyToPost && Object(l.a)({
						noun: "input",
						...d(e)
					})
				}, h = (e, t) => Object(l.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(c.o)(t),
					screen: Object(c.ab)(t),
					subreddit: Object(c.ib)(t),
					post: Object(c.I)(t, e)
				}), g = e => Object(l.a)({
					noun: "edit",
					...d(e)
				}), f = e => Object(l.a)({
					noun: "save_edit",
					...d(e)
				}), v = (e, t) => n => {
					const s = "image_upload" === e || "video_upload" === e;
					return {
						...d(n),
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
				return r
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "f", (function() {
				return u
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => ({
					...Object(s.o)(t),
					customFeed: Object(s.n)(t, e),
					source: "custom_feeds"
				}),
				r = e => t => ({
					...o(e, t),
					action: "click",
					noun: "delete"
				}),
				a = e => t => ({
					...o(e, t),
					action: "click",
					noun: "follow"
				}),
				i = e => t => ({
					...o(e, t),
					action: "click",
					noun: "unfollow"
				}),
				c = e => t => ({
					...o(e, t),
					action: "click",
					noun: "duplicate"
				}),
				l = e => t => ({
					...o(e, t),
					action: "click",
					noun: "share"
				}),
				d = e => t => ({
					...o(e, t),
					action: "click",
					noun: "favorite",
					source: "community_nav"
				}),
				u = e => t => ({
					...o(e, t),
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
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/helpers/trackers/goldPayment.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = "gold_top_nav",
				i = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return {
						...Object(o.h)(e, t),
						correlationId: Object(s.e)(s.a.GoldPayment, !1),
						profile: r.R(e),
						subreddit: r.ib(e)
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
				l = e => t => ({
					source: a,
					action: "click",
					noun: "coins_package",
					...i(t, {
						packageId: e
					})
				}),
				d = () => e => ({
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
				return l
			}));
			var s, o, r, a = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Click = "click", e.Dismiss = "dismiss", e.View = "view"
			}(s || (s = {})),
			function(e) {
				e.Load = "load_more_comments", e.SsoSignup = "sso_signup"
			}(o || (o = {})),
			function(e) {
				e.Popup = "popup", e.PostDetail = "post_detail"
			}(r || (r = {}));
			const i = () => e => ({
					...Object(a.o)(e),
					source: r.PostDetail,
					action: s.Click,
					noun: o.Load,
					actionInfo: Object(a.d)(e, {
						page_type: "d2x_post_detail"
					})
				}),
				c = () => e => ({
					...Object(a.o)(e),
					source: r.Popup,
					action: s.Dismiss,
					noun: o.SsoSignup,
					actionInfo: Object(a.d)(e, {
						page_type: "d2x_post_detail"
					})
				}),
				l = () => e => ({
					...Object(a.o)(e),
					source: r.Popup,
					action: s.View,
					noun: o.SsoSignup,
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
				return l
			})), n.d(t, "c", (function() {
				return d
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
				return C
			})), n.d(t, "m", (function() {
				return y
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
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = [],
				a = "onboarding";
			var i;
			! function(e) {
				e.CATEGORY = "category", e.CREATE_ACCOUNT_SCREEN_DROPDOWN = "create_account_screen_dropdown", e.EXIT = "exit", e.GENDER = "gender", e.ONBOARDING_COMMUNITY_RECOMMENDATIONS = "onboarding_community_recommendations", e.ONBOARDING_GENDER_COLLECTION = "onboarding_gender_collection", e.ONBOARDING_INTEREST = "onboarding_interest", e.SUB_CATEGORY = "sub_category", e.SUBREDDIT = "subreddit", e.TOPIC_PREVIEW = "topic_preview", e.VIEW_MORE = "view_more"
			}(i || (i = {}));
			const c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r;
					return t => ({
						...Object(o.o)(t),
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
				l = () => e => ({
					...Object(o.o)(e),
					action: s.c.DISMISS,
					noun: i.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: a
				}),
				d = () => e => ({
					...Object(o.o)(e),
					action: s.c.VIEW,
					noun: i.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: a
				}),
				u = e => t => ({
					...Object(o.o)(t),
					action: s.c.DISMISS,
					noun: e,
					source: a
				}),
				m = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				p = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_INTEREST
				}),
				b = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				h = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				g = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_INTEREST
				}),
				f = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				v = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.SKIP,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				O = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.SKIP,
					noun: i.ONBOARDING_INTEREST
				}),
				C = () => e => ({
					...Object(o.o)(e),
					source: a,
					action: s.c.SELECT,
					noun: i.GENDER
				}),
				y = (e, t, n, r) => c => ({
					...Object(o.o)(c),
					source: a,
					action: e ? s.c.SELECT : s.c.DESELECT,
					actionInfo: {
						...Object(o.d)(c),
						reason: r
					},
					noun: t ? i.CATEGORY : i.SUB_CATEGORY,
					onboarding: {
						categoryName: n
					}
				}),
				x = (e, t, n, r) => c => ({
					...Object(o.o)(c),
					source: a,
					action: e ? s.c.SELECT : s.c.DESELECT,
					actionInfo: {
						...Object(o.d)(c),
						reason: r
					},
					noun: i.SUBREDDIT,
					onboarding: {
						categoryName: t,
						subredditName: n
					}
				}),
				E = e => t => ({
					...Object(o.o)(t),
					source: a,
					action: s.c.CLICK,
					noun: i.VIEW_MORE,
					onboarding: {
						categoryName: e
					}
				}),
				P = () => e => ({
					...Object(o.o)(e),
					source: "topic_chaining_prompt",
					action: s.c.VIEW,
					noun: i.TOPIC_PREVIEW
				}),
				j = () => e => ({
					...Object(o.o)(e),
					source: "topic_chaining_prompt",
					action: s.c.CLICK,
					noun: i.TOPIC_PREVIEW
				}),
				_ = e => t => ({
					...Object(o.o)(t),
					source: "topic_chaining_prompt",
					action: s.c.SELECT,
					noun: i.CATEGORY,
					onboarding: {
						categoryName: e
					}
				}),
				S = () => e => ({
					...Object(o.o)(e),
					source: "topic_chaining_prompt",
					action: s.c.DISMISS,
					noun: i.TOPIC_PREVIEW
				}),
				k = (e, t) => n => ({
					...Object(o.o)(n),
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
				return l
			})), n.d(t, "b", (function() {
				return d
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
				return C
			})), n.d(t, "u", (function() {
				return y
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
			const o = e => () => ({
					source: "shortcuts",
					action: "submit",
					noun: e
				}),
				r = (e, t) => n => ({
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
				i = o("show_panel"),
				c = o("esc_close"),
				l = e => r("enter_open_post", e),
				d = e => a("enter_comment_collapse", e),
				u = e => r("j_next", e),
				m = e => a("j_next", e),
				p = e => r("k_previous", e),
				b = e => a("k_previous", e),
				h = e => r("n_next", e),
				g = e => r("p_previous", e),
				f = e => r("s_save", e),
				v = e => a("s_save", e),
				O = e => r("h_hide", e),
				C = e => r("x_expando", e),
				y = e => r("a_upvote", e),
				x = e => a("a_upvote", e),
				E = e => r("z_downvote", e),
				P = e => a("z_downvote", e),
				j = o("c_create_post"),
				_ = e => r("l_go_to_link", e),
				S = e => a("r_comment", e);
			o("q_navigation")
		},
		"./src/reddit/helpers/trackers/user.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return i
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "j", (function() {
				return l
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "k", (function() {
				return f
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const a = e => ({
					screen: o.ab(e),
					profile: o.R(e),
					subreddit: o.ib(e)
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
				l = e => t => ({
					source: "nav",
					action: "click",
					actionInfo: {
						pageType: t.platform.currentPage ? o.v(t.platform.currentPage) : void 0,
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
					noun: "advertise",
					...a(e)
				}),
				b = () => e => ({
					source: "nav",
					action: "click",
					noun: "advertise",
					...a(e)
				}),
				h = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "coins",
					correlationId: Object(s.c)(s.a.GoldPayment),
					...a(e)
				}),
				g = e => t => ({
					source: "profile",
					action: "click",
					noun: "block_user",
					targetUser: {
						id: Object(r.yb)(t, {
							userName: e
						}).id
					},
					...o.o(t)
				}),
				f = e => t => ({
					source: "profile",
					action: "click",
					noun: "unblock_user",
					targetUser: {
						id: Object(r.yb)(t, {
							userName: e
						}).id
					},
					...o.o(t)
				})
		},
		"./src/reddit/helpers/wiki/makeWikiPath.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/constants/wiki.ts");
			t.a = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = "/wiki";
				const o = e.countryCode ? `/${e.countryCode}` : "",
					r = e.languageCode ? `/${e.languageCode}` : "";
				return e.subredditName && (n = t ? `${o}${r}/r/${e.subredditName}/about/wiki` : `${o}${r}/r/${e.subredditName}/wiki`, e.wikiSubRoute && (n += `/${e.wikiSubRoute}`)), e.wikiPageName ? n += `/${e.wikiPageName.toLowerCase()}` : e.wikiSubRoute || (n += `/${s.i}`), n
			}
		},
		"./src/reddit/hooks/useGqlContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n("./src/reddit/contexts/ApiContext.tsx");

			function r() {
				const {
					gqlContext: e
				} = Object(s.useContext)(o.a);
				return e
			}
		},
		"./src/reddit/hooks/useWindowEvent.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js");
			const o = (e, t) => {
				Object(s.useEffect)(() => (window.addEventListener(e, t), () => window.removeEventListener(e, t)), [e, t])
			};
			t.a = o
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				l = n.n(c);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: Object(r.a)(e.className, Object(i.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || a.a.gold
				}
			}), "CoinIcon", l.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
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
				return o.a.createElement("svg", c({
					xmlns: "http://www.w3.org/2000/svg",
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					className: Object(r.a)(i.a.checkbox, t)
				}, n), o.a.createElement("path", {
					fill: "inherit",
					d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), o.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
			}))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("g", null, o.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/DizzySnoo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 52 52"
			}, o.a.createElement("path", {
				d: "M19.39,15.71a31.37,31.37,0,0,0-3.08,1.53,2.24,2.24,0,0,1-1.34.23c-4.27-1.06-7.54.28-10,4-2.09,3.17-.74,8,1.58,9.76a2.39,2.39,0,0,1,.91,1.53,12.18,12.18,0,0,0,5,8.87c.16.13.33.24.49.35a25.65,25.65,0,0,0,5.52,2.81A24,24,0,0,0,26.83,46c2.74-.09,5.49-.1,8.06-1.18a22.6,22.6,0,0,0,6.25-4c2.21-2.67,4.31-5.45,4.62-9a11.29,11.29,0,0,1,1.64-4.91,4.66,4.66,0,0,0,.54-1.58c.78-4.68-3.5-9.17-7.84-7.57a3.37,3.37,0,0,1-3-.49,18.33,18.33,0,0,0-7.63-2.81A25.61,25.61,0,0,0,19.39,15.71Z"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M42.39,18.88a12.75,12.75,0,0,0-2.48,0c1.76,2.1,3.33,3.86,4,6.23-4-5.95-9.64-9.32-16.71-9.37a19.14,19.14,0,0,0-17,9.06c-.17-.53-.51-1-.38-1.3A9.3,9.3,0,0,1,14,18.94c-3-1.13-6.34.54-8,3.85-1.29,2.58-.52,6.08,1.74,7.5a18.14,18.14,0,0,1,.55-2.24,15.4,15.4,0,0,1,1-1.9.86.86,0,0,1,.07.69,12.41,12.41,0,0,0,.4,8.24,11.06,11.06,0,0,0,3.82,5.31c7.18,5.27,17.21,6.56,25.28.91a13.72,13.72,0,0,0,5.77-10.45c.1-1.13.1-2.26.15-3.4l.3.27c.44-.29,1.12-.49,1.3-.9A6.06,6.06,0,0,0,42.39,18.88Z"
			}), o.a.createElement("path", {
				d: "M19.48,28.09a.73.73,0,0,1,.59-1q1.37.39.64,1.66a1.91,1.91,0,0,1-2.8.67c-2-1.53-.17-4,1.61-4.15a2.88,2.88,0,0,1,3,3.41,3.68,3.68,0,0,1-2.47,2.56,3.86,3.86,0,0,1-5.37-3.12c-.24-2.18,1.25-3.73,3.12-4.49,1.66-.67,5.58.83,4.89.44-2.7-1.49-5.73-2.15-7.86.32a5.19,5.19,0,0,0,.37,7c1.65,1.53,4.28,1.38,6.15.39s3.15-4,1.6-5.89-4.84-2.39-6.4-.19-.52,4.82,2.15,5.12c2,.22,4.63-2.84,2.55-4.43-1.5-1.15-4.32.86-2.79,2.32.48.46,1.46-.13,1-.59Z"
			}), o.a.createElement("path", {
				d: "M35.66,28.69c1.52-1.26.33-3.28-1.64-3.11-2.66.22-1.83,4.41.31,4.94,2.65.66,4.41-1.6,3.67-4.09s-4.31-3.3-6.24-1.53a3.94,3.94,0,0,0-.08,5.78,5.4,5.4,0,0,0,5.93.89c2.34-1.08,2.85-4.35,2-6.51-.54-1.3-1.64-1.74-2.91-2.18a6.19,6.19,0,0,0-4.81.49c-.52.38,3-.45,4.61.24a3.87,3.87,0,0,1,2.4,4.73c-.53,2.68-3.49,3.31-5.66,2.21a3,3,0,0,1,1.5-5.64,2.66,2.66,0,0,1,2,4.18c-1,1.2-2.88.44-3.33-.84a1.29,1.29,0,0,1,.92-1.69c.68-.06,1.14.68.33,1.25C34.08,28.17,34.85,29.36,35.66,28.69Z"
			}), o.a.createElement("path", {
				d: "M27.48,14.55a23.72,23.72,0,0,1-5.89-.24c-2.93-.77-.16-2.12,1-2.52a23.39,23.39,0,0,1,6.7-1c1.71-.05,4.47-.62,5.54,1.06a13.86,13.86,0,0,1-5.86.71c-1.18-.08-4.66-.14-5.34-1.35-.59-1,.88-2.95,1.86-3a11.48,11.48,0,0,1,2.11.15c.67.07.59-.94,0-1A6.33,6.33,0,0,0,23.36,8a2.55,2.55,0,0,0-.27,4.23c2.39,1.83,7.34,1.61,10.07,1.1,1.23-.23,4-.56,2.91-2.43-.68-1.15-2.46-1.07-3.6-1.08a31.33,31.33,0,0,0-11.3,1.47c-2.62,1-3.87,2.91-.4,4a14.5,14.5,0,0,0,4.86.4l1.85-.09C28.1,15.52,28.13,14.52,27.48,14.55Z"
			}), o.a.createElement("path", {
				d: "M30.73,5.14a3.35,3.35,0,0,0-4.43-.85,3,3,0,0,0-.72,3.93c.77,1.16,3.31,1.48,4.39.7A2.63,2.63,0,0,0,30.73,5.14Z"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M29.34,7.94c-.52.7-1.71.34-2.39.11-1-.34-1-2.35-.18-2.9a1.79,1.79,0,0,1,2.23,0,2.34,2.34,0,0,1,1,1.18C30.21,6.87,29.61,7.57,29.34,7.94Z"
			}), o.a.createElement("path", {
				d: "M31.51,35.16c-5.18.72-4.85-2.84-9.7-1.22-3,1-3,4.65-.45,6.32,3.2,2.09,9.08.72,11,.24C36.87,39.38,36.72,34.43,31.51,35.16Z"
			}))
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, o.a.createElement("g", null, o.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), o.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/icons/svgs/SnooFacepalm/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				fill: "#000",
				d: "M5.1 3.2c.5.3 1.1.3 1.7.1 1.4-.5 2.9-.9 4.5-.7 1.2.2 1.8.2 2.3.4 1 .4 2 .9 3 1.4.5.3 1 .8 1.5 1.2.2.2.5.4.7.4 2.4-.1 4.1 1 5 3.3.8 2-.5 4.5-2 5.1-.3.1-.6.4-.7.7-.6 2-1.9 3.3-3.7 4.2-.1.1-.2.1-.3.1-.7.3-3.9 1.7-7.9 1-4.8-.9-9.3-4.6-8.7-10.2.1-1 0-1.9-.3-2.9-.2-.2-.2-.5-.2-.8.1-2.7 2.9-4.6 5.1-3.3z"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M.7 7.5c.4 1.3.7.5.8.5-.1.6-.3 1.3-.3 1.9-.3 2.4.3 4.6 1.9 6.3 3.7 4 8.5 4.6 13.2 2.7 1.2-.5 2.6-1.7 3.3-2.8.8-1.4 1.3-2.8 1.2-4.4 0-.1 0-.2.1-.4.1.4.3.8.3 1.1.1.4 0 .8 0 1.3 1.4-.5 2.2-2.3 1.8-3.9-.5-2-2.1-3.3-3.9-3 .9.8 1.6 3.3 1.4 3.6-1.5-3.8-4.4-6.1-8.2-6.8-3.8-.8-7.2.4-10.1 3.2.6-1.2 1.7-2 2.9-2.9-.6-.1-1-.3-1.4-.3-1.8.1-3.5 2.1-3 3.9z"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M7.2 16.7c1.4.6 2.9.9 4.4 1 .6 0 1.3-.4.3-.5-1.2-.1-2.4-.3-3.5-.8-.3-.1-.7-.1-1 0-.1 0-.5.2-.2.3zM7.3 13.4c-.1 0-.2-.1-.3-.2-.1-.2-.2-.4-.4-.6-.6-.6-1.4-1.1-2.2-.9-.3.1-.5.2-.8.2h-.5c0-.1-.1-.3 0-.4.2-.2.5-.3.6-.4 1.6-.6 3.7.6 3.9 1.7v.3c0 .3-.2.3-.3.3zm9.8 1.1c-.1 0-.3 0-.4-.1-.1 0-.1-.1-.2-.1-.7-.5-1.5-.5-2.3 0-.2.1-.5.2-.7.3 0-.2 0-.4.1-.6.6-.6 1.7-.8 2.7-.5.3.1.7.5.9.8.1 0 0 .2-.1.2z"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M16.1 20.7c-2-.2-2.7-.9-2.9-2.5-.1-.9-.3-1.6-.7-2.4-.4-.9-.5-1.4-1.5-1.7-1.3-.5-1.9-1.6-2-2.6 0-.8.2-1.7.8-2.3 1.1-1.1 2.9-1.1 4.2-.5 1.3.6 3.8 3.2 4.3 4.5 1.6 4.2.8 7.2-2.2 7.5zM12 5.6c.1.2.1.7.6.5.4-.1.4-.6-.2-1.6-.3-.6-.5-1.6 0-2.2 1-1.3 2.3-1 3.5-.7.4.1 1.5.3 1.5.8 0 .7.6 1.8 1.2 2.2 1.2 1 3.5-.1 3.5-1.8 0-1.5-1.1-2.7-2.5-2.6-.6 0-1.6.7-2 1.2-.6-.2-1.2-.4-1.9-.5-1.3-.3-2.6-.3-3.7.7-1.2 1.1-.8 2.9 0 4-.1-.1-.2-.2-.3-.4.1.1.2.3.3.4.1.1-.6-.9 0 0z"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M21.3 3.1c-.2.5-.6.9-1 1-.4.1-.9 0-1.3-.3s-.7-.7-.7-1.1c0-.2 0-.8.8-1.4.5-.4 1.4 0 1.9.4.2.4.5.8.3 1.4zM18 14.6c-.5-2.5-3.8-6.4-6.8-5.3-1.4.5-1.7 2.4-.8 3.5.7.8 2.1 1.2 3 1.6-.3 0-.6.1-.9 0 1.2 1.6.6 4.7 2.8 5.2 2.5.7 3.4-1.7 2.7-5z"
			}))
		},
		"./src/reddit/icons/svgs/SnooHappy/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 25",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				fill: "#000",
				d: "M19.7 9.4c-.6.2-1.1 0-1.6-.3-1.3-.8-2.6-1.4-4.2-1.5-1.2-.1-1.8-.1-2.3 0-1.1.2-2.2.4-3.2.7-.6.2-1.1.6-1.7.8-.2.1-.5.2-.7.2-2.3-.6-4.1.2-5.4 2.2-1.1 1.7-.4 4.4.9 5.3.2.2.5.5.5.8.1 2.1 1.2 3.6 2.7 4.8.1.1.2.1.3.2.6.4 1.9 1.2 3 1.5 1.5.5 3 .7 4.5.7 1.5-.1 3-.1 4.4-.6.4-.2 2.3-1.1 3.4-2.2 1.2-1.5 2.3-3 2.5-4.9.1-1 .4-1.8.9-2.7.2-.3.2-.6.3-.9.4-2.5-2-5-4.3-4.1z"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M20.9 10c-.4-.1-.8 0-1.4 0 1 1.1 1.8 2.1 2.2 3.4-2.2-3.2-5.3-5.1-9.1-5.1s-7 1.6-9.2 4.9c-.1-.3-.3-.6-.2-.7.5-1 1.2-1.9 2.3-2.5-1.7-.5-3.5.4-4.4 2.2-.7 1.4-.3 3.3.9 4.1l.3-1.2c.1-.4.4-.7.6-1 .1.2.1.3 0 .4-.5 1.5-.3 3 .2 4.5.5 1 1.1 2 2.1 2.8 3.9 2.9 9.4 3.6 13.8.5 1.9-1.3 2.9-3.3 3.1-5.7.1-.6.1-1.2.1-1.8.1 0 .1.1.2.1.2-.2.6-.3.7-.5.7-1.7-.4-3.9-2.2-4.4z"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M10.1 15.4s-.3-.1-.4-.2l-.6-.6c-.8-.5-1.6-.3-2.2.5-.2.3-.3.5-.5.8-.1.1-.3.2-.5.3-.1-.2-.2-.4-.2-.6.1-.4.3-.7.3-.9 1.1-1.7 3.3-1.8 4.1-.3.1.2.2.3.2.5s-.1.4-.2.5zm3.1 6.5c-2.3 0-4-1.6-4.4-3.4 0-.1.3-.4.6-.5 2-.8 5-1.1 7.2-.4.2.1.5.2.5.3 0 .1-.3.2-.3.3-.4 1.7-1.5 3.7-3.6 3.7zm5.9-6.5c-.1 0-.3-.1-.4-.2-.1 0-.1-.1-.1-.2-.6-.9-1.4-1-2.2-.3-.2.2-.5.2-.7.4.1-.3 0-.7.2-.9.7-.9 1.8-1.1 2.7-.5.2.2.6.9.8 1.4-.1.1-.2.3-.3.3zM16.6.5c-.5-.4-1.4-.7-2.3-.2-.4.2-.7.5-.8.7-.2.7-.2 1.1-.1 1.5-1 1-2.2 1.6-3.6 1.7-.2 0-.4.2-.4.4-.1.5.1.9.4 1.4.5.7.7 1.2.9 1.9V8c.1.2.2.2.4.2.1 0 .2-.1.3-.1.1-.1.1-.2.1-.3v-.2c0-.1-.1-.3-.1-.4-.1-.3-.2-.6-.3-.8-.1-.2-.2-.3-.3-.4-.1-.3-.3-.8-.3-1.1.5-.1 1.1-.2 1.6-.5.4-.2.7-.5 1-.8.2-.2.3-.3.5-.4.4.5.8.7 1.6.8h.2c.4 0 .9-.2 1.3-.5s.6-.8.6-1.4c.1-.6-.2-1.2-.7-1.6z"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M14 1.9c-.1-.6.4-1.1 1.1-1.2.8-.1 1.4.3 1.5 1 .1.7-.5 1.5-1.1 1.6-.7.1-1.4-.6-1.5-1.4z"
			}))
		},
		"./src/reddit/icons/svgs/SnooNoEyes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M15.4687,7.5029 C15.0937,7.5029 14.7307,7.5849 14.3997,7.7389 C13.4987,7.2209 12.4417,6.8769 11.3157,6.7229 L11.7777,4.5489 L12.8277,4.7729 C13.1127,5.5939 13.8847,6.1889 14.8007,6.1889 C15.9547,6.1889 16.8947,5.2489 16.8947,4.0949 C16.8947,2.9399 15.9547,1.9999 14.8007,1.9999 C14.1367,1.9999 13.5507,2.3159 13.1667,2.7999 L11.2147,2.3849 C10.6757,2.2739 10.1437,2.6139 10.0287,3.1549 L9.3297,6.4389 C9.3137,6.5159 9.3257,6.5899 9.3277,6.6659 C7.9607,6.7589 6.6667,7.1219 5.5987,7.7379 C5.2677,7.5839 4.9057,7.5029 4.5317,7.5029 C3.1357,7.5029 1.9997,8.6389 1.9997,10.0349 C1.9997,10.7769 2.3257,11.4699 2.8687,11.9429 C2.9027,14.8739 6.0217,17.1629 9.9967,17.1629 C13.9697,17.1629 17.0877,14.8769 17.1247,11.9479 C17.6707,11.4759 17.9997,10.7799 17.9997,10.0349 C17.9997,8.6389 16.8647,7.5029 15.4687,7.5029"
			})))
		},
		"./src/reddit/icons/svgs/SparkleGradient/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r(e) {
				return o.a.createElement("svg", {
					className: e.className,
					style: e.style,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 12 12"
				}, o.a.createElement("path", {
					d: "M6.47.828a.5.5 0 00-.94 0L4.268 4.267.827 5.53a.5.5 0 000 .938l3.44 1.264 1.264 3.44a.5.5 0 00.938 0l1.264-3.44 3.44-1.264a.5.5 0 000-.938l-3.44-1.264L6.47.827z",
					fill: "url(#orangeYellowGradient)",
					stroke: "#fff",
					strokeLinejoin: "round"
				}), o.a.createElement("defs", null, o.a.createElement("linearGradient", {
					id: "orangeYellowGradient",
					x1: "1",
					y1: "11",
					x2: "11.01",
					y2: "10.99",
					gradientUnits: "userSpaceOnUse"
				}, o.a.createElement("stop", {
					stopColor: "#EC0623"
				}), o.a.createElement("stop", {
					offset: "1",
					stopColor: "#FF8717"
				}))))
			}
		},
		"./src/reddit/icons/svgs/Subreddit/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				fill: "#737577",
				d: "M10 .38a9.62 9.62 0 100 19.24A9.62 9.62 0 0010 .38zm0 18A8.381 8.381 0 1114.6 3L9.41 15.55h1.35l4.87-11.73A8.36 8.36 0 0110 18.38z"
			}), o.a.createElement("path", {
				fill: "#737577",
				d: "M10.68 7.87l.66-1.56a1.649 1.649 0 00-.46-.15 3 3 0 00-.7-.07c-.502-.01-1 .09-1.46.29-.38.18-.72.436-1 .75V6.2H6.13v7.3h1.61V9.3A1.71 1.71 0 018 8.43a1.64 1.64 0 01.66-.59 2.12 2.12 0 011-.22 2.08 2.08 0 011.02.25z"
			}))
		},
		"./src/reddit/icons/svgs/Unlock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 17",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.9656 14.8328L13.6 13.4672V8.99847C13.6 8.55608 13.2416 8.19848 12.8 8.19848H12V6.59849C12 4.39291 10.2056 2.59853 8 2.59853C6.5712 2.59853 5.328 3.35852 4.624 4.49131L2.1656 2.03294C1.8528 1.72014 1.3472 1.72014 1.0344 2.03294C0.721605 2.34573 0.721605 2.85133 1.0344 3.16413L13.8344 15.964C13.9904 16.12 14.1952 16.1984 14.4 16.1984C14.6048 16.1984 14.8096 16.12 14.9656 15.964C15.2784 15.6512 15.2784 15.1456 14.9656 14.8328ZM4 8.19859H3.2C2.7584 8.19859 2.4 8.55619 2.4 8.99859V14.5986C2.4 15.041 2.7584 15.3986 3.2 15.3986H11.6688L4 7.72979V8.19859ZM10.4 6.59854C10.4 5.27534 9.32319 4.19854 7.99999 4.19854C7.00959 4.19854 6.15839 4.80174 5.79199 5.65934L8.33119 8.19853H10.4V6.59854Z"
			}))
		},
		"./src/reddit/icons/svgs/Wordmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = Object(r.a)(e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 57 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				fill: e.color || Object(i.a)(e).bodyText
			}, o.a.createElement("path", {
				d: "M54.63,16.52V7.68h1a1,1,0,0,0,1.09-1V6.65a1,1,0,0,0-.93-1.12H54.63V3.88a1.23,1.23,0,0,0-1.12-1.23,1.2,1.2,0,0,0-1.27,1.11V5.55h-1a1,1,0,0,0-1.09,1v.07a1,1,0,0,0,.93,1.12h1.13v8.81a1.19,1.19,0,0,0,1.19,1.19h0a1.19,1.19,0,0,0,1.25-1.12A.17.17,0,0,0,54.63,16.52Z"
			}), o.a.createElement("circle", {
				fill: a.a.snoo,
				cx: "47.26",
				cy: "3.44",
				r: "2.12"
			}), o.a.createElement("path", {
				d: "M48.44,7.81a1.19,1.19,0,1,0-2.38,0h0v8.71a1.19,1.19,0,0,0,2.38,0Z"
			}), o.a.createElement("path", {
				d: "M30.84,1.19A1.19,1.19,0,0,0,29.65,0h0a1.19,1.19,0,0,0-1.19,1.19V6.51a4.11,4.11,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S22.28,18,25.42,18a4.26,4.26,0,0,0,3.1-1.23,1.17,1.17,0,0,0,1.47.8,1.2,1.2,0,0,0,.85-1.05ZM25.41,15.64c-1.83,0-3.32-1.77-3.32-4s1.48-4,3.32-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"
			}), o.a.createElement("path", {
				d: "M43.28,1.19A1.19,1.19,0,0,0,42.09,0h0a1.18,1.18,0,0,0-1.18,1.19h0V6.51a4.15,4.15,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S34.72,18,37.86,18A4.26,4.26,0,0,0,41,16.77a1.17,1.17,0,0,0,1.47.8,1.19,1.19,0,0,0,.85-1.05ZM37.85,15.64c-1.83,0-3.31-1.77-3.31-4s1.47-4,3.31-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"
			}), o.a.createElement("path", {
				d: "M17.27,12.44a1.49,1.49,0,0,0,1.59-1.38v-.15a4.81,4.81,0,0,0-.1-.85A5.83,5.83,0,0,0,13.25,5.3c-3.1,0-5.69,2.85-5.69,6.35S10.11,18,13.25,18a5.66,5.66,0,0,0,4.39-1.84,1.23,1.23,0,0,0-.08-1.74l-.11-.09a1.29,1.29,0,0,0-1.58.17,3.91,3.91,0,0,1-2.62,1.12A3.54,3.54,0,0,1,10,12.44h7.27Zm-4-4.76a3.41,3.41,0,0,1,3.09,2.64H10.14A3.41,3.41,0,0,1,13.24,7.68Z"
			}), o.a.createElement("path", {
				d: "M7.68,6.53a1.19,1.19,0,0,0-1-1.18A4.56,4.56,0,0,0,2.39,6.91V6.75A1.2,1.2,0,0,0,0,6.75v9.77a1.23,1.23,0,0,0,1.12,1.24,1.19,1.19,0,0,0,1.26-1.1.66.66,0,0,0,0-.14v-5A3.62,3.62,0,0,1,5.81,7.7a4.87,4.87,0,0,1,.54,0h.24A1.18,1.18,0,0,0,7.68,6.53Z"
			}))))
		},
		"./src/reddit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = (n("./src/polyfill.ts"), n("./src/lib/performanceTimings/index.tsx")),
				r = n("./node_modules/@r/google-tag-manager/compiled.js"),
				a = n("./src/config.ts"),
				i = n("./node_modules/history/esm/history.js"),
				c = n("./node_modules/js-cookie/src/js.cookie.js"),
				l = n.n(c),
				d = n("./node_modules/react/index.js"),
				u = n.n(d),
				m = n("./node_modules/react-router-redux/es/index.js"),
				p = n("./src/lib/makeActionCreator/index.ts"),
				b = n("./src/reddit/actions/recentSubreddits/constants.ts"),
				h = n("./src/lib/isFakeSubreddit/index.ts"),
				g = n("./src/reddit/helpers/name/index.ts");
			const f = /^u_[\w-]+$/;
			var v = n("./src/reddit/selectors/user.ts");
			const O = (e, t) => async (n, s) => {
				var o;
				const r = s();
				if (function(e) {
						return f.test(Object(g.g)(e))
					}(t)) {
					const e = (null === (o = Object(v.k)(r)) || void 0 === o ? void 0 : o.displayText) || "";
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
			}, C = Object(p.a)(b.e), y = e => ({
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
				M = n("./src/lib/getParsedUserAgent/index.ts"),
				w = n("./src/lib/initializeClient/index.tsx"),
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
				z = n("./src/reddit/actions/emailVerification.ts"),
				K = n("./src/reddit/actions/googleOneTap/index.ts"),
				J = n("./src/reddit/actions/media.ts"),
				Y = n("./src/lib/loadWithRetries/index.ts"),
				Z = () => Object(Y.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/notifications/index.ts"))),
				X = n("./src/reddit/actions/nps.ts");
			const $ = Object(N.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/onboarding/index.ts")).then(e => e.default));
			var ee = n("./src/reddit/actions/platform.ts"),
				te = n("./src/reddit/actions/post.ts"),
				ne = n("./src/reddit/actions/reCaptchaEnterprise.ts"),
				se = n("./src/reddit/actions/session.ts"),
				oe = n("./src/reddit/actions/survey/index.ts"),
				re = n("./src/reddit/actions/theme.ts"),
				ae = n("./src/reddit/actions/toaster.ts"),
				ie = n("./src/reddit/actions/users.ts"),
				ce = n("./node_modules/react-redux/es/index.js"),
				le = n("./node_modules/react-router/esm/react-router.js"),
				de = n("./node_modules/reselect/es/index.js"),
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
				Ce = n("./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less"),
				ye = n.n(Ce);
			var xe = e => {
					let {
						children: t
					} = e;
					return u.a.createElement("div", {
						className: ye.a.shortcutDiv,
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
				Me = n("./src/reddit/controls/Button/index.tsx"),
				we = n("./src/reddit/featureFlags/index.ts"),
				Ne = n("./src/reddit/icons/svgs/DizzySnoo/index.tsx"),
				Ie = n("./src/reddit/pages/InternalServerError/index.m.less"),
				Te = n.n(Ie);
			const {
				fbt: Ae
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Re = Object(de.c)({
				showError: we.d.showVerboseErrors
			}), Le = Object(ce.b)(Re)(e => {
				const t = Object(d.useContext)(Pe.a);
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
				})), u.a.createElement(Me.l, {
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
			const Ue = Object(de.c)({
					isNavbarLikeMwebEnabled: De.a,
					theme: e => e.themes.current
				}),
				Ge = Object(ce.b)(Ue, {})(e => {
					let {
						children: t,
						theme: n,
						isNavbarLikeMwebEnabled: s
					} = e;
					const o = Object(je.a)({
						theme: n
					});
					return u.a.createElement(Pe.a.Provider, {
						value: s
					}, u.a.createElement("div", {
						className: Object(be.a)(me.a.container, {
							[me.a.containerExp]: s
						}),
						style: {
							"--background": o.body,
							"--canvas": o.canvas
						}
					}, t))
				});

			function Be(e) {
				if (e.ok) {
					const {
						RouterComponent: t,
						routes: n
					} = e;
					return u.a.createElement(Ee.a, null, u.a.createElement(Ge, null, u.a.createElement(fe, null, u.a.createElement(pe.a, null), u.a.createElement(ve.a, null), u.a.createElement(xe, null, u.a.createElement(t, null, u.a.createElement(le.d, {
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
			const ze = 1e3;
			class Ke extends u.a.Component {
				constructor() {
					super(...arguments), this.flush = Ve()(() => Object(Qe.Gb)(this.props.storageKey, this.props.value), ze)
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
			Ke.defaultProps = {
				enabled: !0,
				syncOnMount: !0
			};
			const Je = Object(de.a)(v.P, e => ({
				storageKey: He.b.LOCAL_PERSISTED_EXPERIMENTS_STORE,
				value: {},
				enabled: !e
			}));
			var Ye = Object(ce.b)(Je)(Ke);
			var Ze = () => u.a.createElement(u.a.Fragment, null, u.a.createElement(Ye, null)),
				Xe = n("./src/reddit/constants/experiments.ts"),
				$e = n("./src/reddit/constants/headers.ts"),
				et = n("./src/reddit/constants/history.ts"),
				tt = n("./src/reddit/constants/jsapiEvents.ts"),
				nt = n("./src/reddit/constants/parameters.ts"),
				st = n("./src/reddit/constants/screenWidths.ts"),
				ot = n("./src/reddit/contexts/AdminEvents.ts"),
				rt = n("./src/reddit/contexts/ApiContext.tsx"),
				at = n("./src/reddit/contexts/ThrottlingContext/index.tsx"),
				it = n("./src/reddit/actions/appBadgeIndicators/constants.ts");
			const ct = () => e => t => e(t);
			var lt = n("./src/lib/safeBadgeUpdate.ts"),
				dt = n("./src/reddit/selectors/appBadges.ts");

			function ut(e) {
				const t = Object(dt.g)(e);
				Object(lt.a)(t)
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
							return (Object(bt.b)(s) || Object(v.M)(s)) && (e = !0, Object(G.e)(t)), s => o => {
								const r = s(o),
									a = n.getState();
								if (!Object(bt.b)(a)) {
									const n = Object(v.M)(a);
									e && !n ? (e = !1, Object(G.e)(void 0), t.setState([])) : n && !e && (t.setState([]), Object(G.e)(t), e = !0)
								}
								return r
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
			let Ct = Date.now();
			const yt = () => {
					Ct = Date.now()
				},
				xt = !!Object(vt.f)() && {
					passive: !0
				};
			window.addEventListener("click", yt, !1), window.addEventListener("wheel", ft()(yt, 250), xt), window.addEventListener("mousemove", ft()(yt, 250), xt), window.addEventListener("keydown", ft()(yt, 250), xt);
			var Et = e => {
					return document.addEventListener("visibilitychange", (function() {
						"visible" === document.visibilityState && document.hasFocus && Date.now() - Ct >= Ot ? (e.dispatch(se.h()), yt()) : yt()
					})), e => t => e(t)
				},
				Pt = n("./node_modules/lodash/pick.js"),
				jt = n.n(Pt),
				_t = n("./src/reddit/actions/header.ts"),
				St = n("./src/reddit/actions/preferences.ts"),
				kt = n("./src/reddit/constants/preferences.ts"),
				Mt = n("./src/reddit/helpers/cookies/index.ts");
			const wt = new Set([St.g, St.i, re.b, St.d, St.o, _t.d, _t.e, St.r]);
			var Nt = e => t => n => {
					const s = t(n);
					if (wt.has(n.type)) {
						const t = e.getState().user,
							n = jt()(t.prefs, ["hamburgerTray", "globalTheme", "collapsedTraySections", "nightmode", "subscriptionsPinned", kt.b, kt.d, kt.e]);
						Object(Mt.a)({
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
					} = e.platform, s = Object(Dt.r)(e), o = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.status, r = Ft.has(o), a = Object(Rt.l)(e, {
						pageLayer: n
					}), i = !(!a || !a.hideFromRobots), c = Gt(e), l = n && n.isRobotIndexable, d = s === _.Nb.COMMENTS || s === _.Nb.COLLECTION_COMMENTS, u = !(!n || !n.urlParams.partialCommentId), m = s === _.Nb.SEARCH_RESULTS || s === _.Nb.SUBREDDIT_LEADERBOARD || d && u;
					return i || r || c || (!1 === l || m) ? m ? "noindex" : "noindex,nofollow" : null
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
								meta: o
							} = n.payload;
						s ? ((e, t) => {
							let n = 0;
							n = Object(At.b)(e) ? Object(dt.i)(e) : Object(dt.j)(e), Object(Tt.c)(n, t)
						})(t, o.title) : It.a.write(() => {
							document.title = o.title, ((e, t) => {
								if (t.head) {
									let n = t.querySelector("meta[name='robots']");
									const s = Ut(e),
										{
											head: o
										} = t;
									s ? (n || ((n = t.createElement("meta")).name = "robots", o.appendChild(n)), n.content = s) : n && (n.remove ? n.remove() : n.parentNode ? n.parentNode.removeChild(n) : o.removeChild && o.removeChild(n))
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
			var zt = "undefined" != typeof document ? e => e => t => ((e => !!Object.keys(Qt.a).filter(t => t === e).length)(t.type) && Object(Qe.U)(Qt.a[t.type]), e(t)) : ct;
			const Kt = 5 * _.kb;
			var Jt = e => {
					const t = Ve()(() => {
						const t = e.getState().user.session,
							n = new Date(t.expires),
							s = new Date;
						n.getTime() - s.getTime() > .2 * t.expiresIn * 1e3 || e.dispatch(se.g())
					}, Kt);
					let n, s;
					const o = () => {
							const n = e.getState().user.session;
							if (!n || !s) return;
							const o = new Date(n.expires),
								r = s + Math.floor(.8 * (o.getTime() - s));
							Date.now() > r && t && t()
						},
						r = e => {
							s = Date.now();
							const o = new Date(e.expires).getTime() - s,
								r = .8 + .1 * Math.random(),
								a = Math.min(Math.floor(r * e.expiresIn * 1e3), Math.floor(r * o));
							n = setTimeout(t, a)
						},
						a = e.getState();
					return a.user.session && r(a.user.session), window.addEventListener("focus", o), window.addEventListener("touchend", o), document.body.addEventListener("mouseenter", o), e => t => (t.type !== se.a && t.type !== se.b && t.type !== se.c && t.type !== se.e || r(t.payload), t.type === se.d && (clearTimeout(n), n = null), e(t))
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
				on = n("./src/reddit/actions/search.ts"),
				rn = n("./src/reddit/actions/subreddit.ts"),
				an = n("./src/reddit/actions/tracking.ts"),
				cn = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				ln = n("./src/reddit/helpers/history/index.ts"),
				dn = n("./src/reddit/helpers/trackers/commentList.ts"),
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
							o = (s.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
							a = Object(pn.D)(s, o) || "",
							i = (s.subreddits.about[a] || {}).advertiserCategory;
						r.trigger("pageview", {
							...jt()(n.payload.location, "pathname", "search", "hash"),
							subreddit: o,
							advertiserCategory: i
						});
						const c = s.platform.currentPage && s.platform.currentPage.routeMatch;
						if (c) {
							const e = Object(bn.b)(c, s, Object(cn.a)(s));
							if (e && U.c.has(e)) {
								const t = U.c.end(e);
								!Object(Dt.i)(s) && Object(ln.b)(et.b.IsOverlay) || Object(mn.k)(c, s, q.TimerType.UserCancelled, t)
							}
						}
						const l = n.payload.routeMatch;
						if (!l) return t(n);
						const d = Object(cn.a)(s, l),
							u = Object(bn.b)(l, s, d);
						if (!u) return t(n);
						U.c.start(u)
					}
					const o = t(n);
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
						case rn.i:
						case tn.MORE_POSTS_LOADED: {
							const {
								key: t,
								postIds: o
							} = n.payload;
							s(t);
							const r = e.getState();
							if (o.length) break;
							if (void 0 === r.listings.postOrder.endMarkers[t]) break;
							un.l(r, t);
							break
						}
						case $t.b: {
							const {
								key: t,
								commentIds: o
							} = n.payload;
							if (s(t), o.length) break;
							const r = e.getState();
							if (void 0 === r.profileCommentsPage.endMarkers[t]) break;
							dn.a(r, t);
							break
						}
						case on.e: {
							const {
								key: e
							} = n.payload;
							s(e);
							break
						}
					}
					return o
				},
				gn = n("./src/reddit/helpers/chooseVariant/index.ts"),
				fn = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				vn = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				On = n("./src/reddit/helpers/trackers/global.ts");
			let Cn = null;
			const yn = () => {
				Cn && window.clearTimeout(Cn), Cn = null
			};
			var xn = e => {
					Cn = window.setTimeout(() => {
						yn(), Object(U.a)(Object(On.d)(3e4)(e()))
					}, 3e4), window.addEventListener("beforeunload", yn)
				},
				En = n("./src/reddit/helpers/onBeforeRequestFactory/index.ts"),
				Pn = n("./src/reddit/actions/connection/constants.ts");
			const jn = Object(p.a)(Pn.b),
				_n = Object(p.a)(Pn.a),
				Sn = Object(p.a)(Pn.c);
			var kn = n("./src/reddit/actions/meta.ts"),
				Mn = n("./src/reddit/selectors/telemetry.ts");
			const wn = (e, t) => Object(U.a)({
					...Mn.o(e),
					source: "store",
					action: "install",
					noun: "pwa",
					actionInfo: Object(Mn.d)(e, {
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
					}, 1e3), wn(t, function(e) {
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
				const n = (l.a.get(Ln.g) || "").split(",");
				if (!n.includes(e)) {
					n.unshift(e);
					const s = n.slice(0, 10).join(","),
						o = {
							name: Ln.g,
							value: s,
							cookieOptions: Object(Rn.a)(),
							cookieContext: t
						};
					Object(An.c)(o)
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
					experimentName: Xe.yd,
					experimentVariant: Xe.Cd.On,
					isSEOOnly: !0,
					samplingRate: 25,
					seed: Math.random()
				},
				Vn = e => {
					const {
						base_url: t
					} = Object(Mn.Z)(e), n = Object(Dt.b)(e), s = n && n.urlParams.partialPostId, o = n && n.urlParams.subredditName;
					return {
						...t && {
							rbl: t
						},
						...o && {
							s: o
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
			var zn = n("./src/reddit/selectors/meta.ts"),
				Kn = n("./src/reddit/selectors/onboarding.ts");
			var Jn = n("./src/reddit/singleton/EventSystem.ts"),
				Yn = n("./src/telemetry/helpers/getSerializedThriftJSON.ts"),
				Zn = n("./src/telemetry/helpers/getSignatureHeader.ts"),
				Xn = n("./src/lib/initializeClient/installReducer.ts"),
				$n = n("./src/reddit/reducers/features/categories/index.ts"),
				es = n("./src/lib/sentry/index.ts"),
				ts = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const ns = Object(p.a)(ts.C),
				ss = () => {
					return Object(Qe.C)(He.b.RPAN_USER_SETTINGS_STORE) || void 0
				};
			var os = n("./src/reddit/actions/global/constants.ts");
			Object(Xn.a)({
				features: {
					categories: $n.a
				}
			});
			const rs = Object(p.a)(os.a),
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
						localStorageData: o
					} = e;
					o && t(rs(o))
				};
			var is = n("./src/reddit/actions/login.ts");
			const cs = /^\/account\/magic_link\/landing\/[^\/]+\/?$/,
				ls = () => async (e, t) => {
					var n;
					(e => {
						if (!e) return !1;
						const t = new URL(e).pathname;
						return cs.test(t)
					})(null === (n = t().platform) || void 0 === n ? void 0 : n.sessionReferrer) && e(Object(is.c)())
				};
			var ds = n("./src/reddit/actions/notificationsInbox/index.ts"),
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
			Object(o.e)(o.b.EntryPointStart);
			const Cs = Object(D.a)({
					actionDispatchers: {
						reddaidReceived: ie.u,
						loidReceived: ie.r,
						sessionTrackerReceived: ie.z
					},
					authHeaders: {
						[$e.a]: "desktop2x"
					},
					cookies: l.a,
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
				ys = Object(F.a)(Cs.apiContext),
				xs = Object(F.a)(Cs.apiContext, a.a.gqlRealtime2Url),
				Es = ht();
			let Ps;
			Object(w.a)({
				reducerMap: Gn.a,
				routes: Bn.a,
				apiContext: Cs.apiContext,
				gqlContext: ys.gqlContext,
				gqlRealtime2Context: xs.gqlContext,
				appFactory: (e, t) => u.a.createElement(ot.a.Provider, {
					value: Es.broadcaster
				}, u.a.createElement(rt.a.Provider, {
					value: {
						apiContext: Cs.apiContext,
						gqlContext: ys.gqlContext,
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
					apiContext: Cs.apiContext,
					gqlContext: ys.gqlContext,
					gqlRealtime2Context: xs.gqlContext
				}), Es.middleware, Et, Cs.middleware, ys.middleware, xs.middleware, Jt, Nt, Zt, hn, Vt, zt, vs.a, mt, e => t => n => {
					let s, o;
					if (!Object(fs.b)(e.getState()) || !n.payload) return t(n);
					o = (null == (s = e.getState().platform.currentPage) ? void 0 : s.urlParams.subredditName) || "";
					const r = {
						...n.payload
					};
					try {
						void 0 !== n.payload.posts && (n.payload.posts = ((e, t, n) => {
							if (!hs(e, n)) return t;
							for (const [s, o] of Object.entries(t)) {
								const e = o.belongsTo.id,
									t = Object(ps.c)(e);
								(n || t) && (o.permalink = o.permalink.replace("https://www.reddit.com/r/", `https://www.reddit.com/${bs}/r/`))
							}
							return t
						})(e.getState(), n.payload.posts, o)), void 0 !== n.payload.comments && (n.payload.comments = ((e, t, n) => {
							if (!hs(e, n)) return t;
							for (const [s, o] of Object.entries(t)) {
								const e = o.subredditId,
									t = Object(ps.c)(e);
								(n || t) && (o.permalink = gs(o.permalink))
							}
							return t
						})(e.getState(), n.payload.comments, o))
					} catch (a) {
						n.payload = {
							...r
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
									o = Object(ps.c)(s.name);
								if (e || o) {
									const e = gs(s.url),
										o = {
											...s,
											url: e
										};
									t[n] = o
								}
							}
							return t
						})(e.getState(), n.payload.subreddits))
					} catch (o) {
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
							experimentName: Xe.lf,
							expEventOverride: !1
						})), Object(G.c)("enabled" === Object(gn.c)(s.getState(), {
							experimentEligibilitySelector: gn.a,
							experimentName: Xe.nf
						})), Object(G.g)("enabled" === Object(gn.c)(s.getState(), {
							experimentEligibilitySelector: gn.a,
							experimentName: Xe.mf
						})), Object(G.f)(ys.gqlContext), window.addEventListener("beforeunload", () => {
							const e = s.getState(),
								t = Object(On.a)("tab_closed")(e),
								n = B.g(t),
								o = Object(Yn.a)(n),
								r = Object(Zn.b)(o);
							Object(L.b)("sendV2EventsData", {
								data: o,
								headers: r
							})
						}),
						function(e) {
							const t = String(e.split("/")[1]).toLowerCase();
							return "framedgild" === t || "framedmodal" === t
						}(t.location.pathname) || s.dispatch(Object(ee.h)());
					const o = Object(v.cb)(s.getState());
					s.dispatch(Object(re.c)({
						nightmode: o
					}));
					const r = (e => e.tracing.traceId)(s.getState());
					if (r && (e => Object(gn.c)(e, {
							experimentEligibilitySelector: gn.a,
							experimentName: Xe.F
						}) === Xe.O.Enabled)(s.getState())) {
						Yt.b.enableTracing(!0);
						const e = Yt.b.createTraceFromId(r);
						Yt.b.setParent(e)
					}
					s.dispatch(Object(ee.i)(n));
					t.listen((e, t) => {
						const o = Object(I.a)(Object(i.e)(e), n, s.getState());
						s.dispatch(Object(ee.j)(e, t, o))
					});
					const c = s.getState(),
						{
							currentPage: l
						} = c.platform;
					if (l) {
						const e = [nt.h];
						if (Object(Dt.j)(c) && e.push(nt.e), e.length > 0) {
							const t = Object(k.a)(l.url, e);
							t !== l.url && s.dispatch(Object(m.c)(t))
						}
					}
					return fn.a.initialize(c), {
						localStorageData: Object(Qe.D)()
					}
				},
				postRender: e => {
					let {
						browserHistory: t,
						routes: i,
						serverDocumentLength: c,
						store: l,
						localStorageData: d
					} = e;
					var u, m;
					Ps = l;
					t.listen((e, t) => {
						const n = l.getState(),
							{
								urlParams: s,
								queryParams: o
							} = n.platform.currentPage,
							r = {
								action: t,
								location: e,
								urlParams: s,
								queryParams: o
							},
							a = s.subredditName,
							i = Object(pn.D)(n, a) || "";
						if (Dn(i, {
								country: n.meta.country
							}), i) {
							l.dispatch(O(i, a));
							const e = Object(Dt.e)(n);
							e && l.dispatch(C(e))
						}
						Jn.a.publish(tt.c, r, document)
					});
					const p = l.getState(),
						b = Object(vs.b)();
					l.dispatch((e => async t => {
						const n = {},
							s = new Set;
						e.forEach(e => {
							s.add(e.id), n[e.id] || (n[e.id] = e)
						}), t(y(n)), t(x(Array.from(s)))
					})(b));
					const h = (p.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
						g = Object(pn.D)(p, h) || "";
					if (h) {
						l.dispatch(O(g, h));
						const e = Object(Dt.e)(p);
						e && l.dispatch(C(e))
					}
					const f = Object(pn.D)(p, h) || "",
						E = (p.subreddits.about[f] || {}).advertiserCategory;
					r.setup({
						jailUrl: "https://www.redditmedia.com/gtm/jail",
						containerId: a.a.gtmContainerId,
						payload: {
							user: p.user.account ? p.user.account.id : p.user.loid.loid
						}
					}), r.trigger("pageview", {
						subreddit: h,
						advertiserCategory: E
					}), l.dispatch(as({
						localStorageData: d
					})), Object(qn.f)(p) && Object(K.d)(p), l.dispatch(Object(K.c)()), Object(Kn.c)(p) && (l.dispatch($()), history.replaceState(history.state, "", Object(k.a)(window.location.href, [nt.w]))), l.dispatch(ls()), window.addEventListener("load", () => {
						const e = l.getState(),
							{
								currentPage: r
							} = e.platform,
							a = (r.urlParams.subredditName || "").toLowerCase(),
							i = Object(pn.D)(e, a) || "";
						if (Object(L.a)(), Dn(i, {
								country: e.meta.country
							}), r && r.meta) {
							const a = r.meta.name;
							if (Object(U.b)(_.n.Redesign, {
									page: a,
									type: "rum"
								}), Object(M.c)(e.meta.userAgent) && window.innerWidth > st.b) {
								const t = Object(o.f)(c);
								T.a && T.a.timing && Yt.b.isEnabled && (Yt.b.recordPerformanceTimings(`${a}_time_to_first_byte`, T.a.timing.fetchStart, T.a.timing.responseStart), Yt.b.recordPerformanceTimings(`${a}_time_to_interactive`, T.a.timing.fetchStart, T.a.timing.domInteractive));
								const n = [],
									s = !0;
								if (Object(Dt.g)(e)) {
									const t = Object(vn.a)(e);
									n.push(Object(vn.c)(t))
								}
								const r = {
									isLoggedIn: Object(v.P)(e),
									name: a,
									statsdPathsForExperiments: n
								};
								Object(o.g)(r, t, s)
							}
							const i = T.a.timing.domInteractive - T.a.timing.navigationStart;
							Object(mn.k)(r.routeMatch, l.getState(), q.TimerType.Initial, i, r.urlParams);
							const d = Object(S.a)(window.location.href);
							d && d.get(nt.a) && history.replaceState(history.state, "", Object(k.a)(window.location.href, [nt.a])), Object(R.a)(d.get(nt.E)) && l.dispatch(Object(ae.f)({
								kind: Un.b.SuccessCommunity,
								text: s.fbt._("Email verification complete", null, {
									hk: "bqMP6"
								})
							})), d.get(nt.F) && (l.dispatch(Object(z.a)(d.get(nt.F))), history.replaceState(history.state, "", Object(k.a)(window.location.href, [nt.F])));
							let u = !1;
							const m = Object(v.S)(e);
							(Object(ln.b)(et.b.JustLoggedIn) || m) && (l.dispatch(Object(ae.f)({
								text: s.fbt._("Successfully logged in!", null, {
									hk: "2POUVB"
								})
							})), u = !0, Object(ln.c)(et.b.JustLoggedIn), history.replaceState(history.state, "", Object(k.a)(window.location.href, [nt.p]))), Object(ln.b)(et.b.JustLoggedOut) && (u = !0, Object(ln.c)(et.b.JustLoggedOut)), Z().then(e => {
								let {
									subscribeToPermissionsChange: t
								} = e;
								return l.dispatch(t())
							});
							const p = () => l.dispatch(Object(us.openReonboardingModalIfNeeded)());
							if (!1 !== Qe.V()) {
								let n;
								Object(qn.a)(e) && (n = () => {
									const {
										dispatch: e
									} = l;
									t.listen(() => e(Object(K.b)())), e(Object(K.b)())
								});
								const s = () => {
									n && n(), p()
								};
								Z().then(e => e.requestNotificationsPermissions).then(e => l.dispatch(e(u, !1, s)))
							} else p();
							if (a === _.Nb.MULTIREDDIT && r.routeMatch) {
								const {
									multiredditName: e,
									username: t
								} = r.routeMatch.match.params;
								l.dispatch(Object(N.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.recommendationsRequested))({
									multiredditName: e,
									username: t
								}))
							}
							l.dispatch(Object(Q.c)())
						}
						Object(v.P)(l.getState()) && l.dispatch(Object(W.d)()), Object(P.requestIdleCallback)(async () => {
							l.dispatch(Object(X.d)()), await Object(j.a)() && Object(On.b)(l.getState());
							const e = async () => {
								const e = l.getState(),
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
							const t = l.getState(),
								{
									currentPage: n
								} = t.platform;
							if ("visible" !== document.visibilityState && (Qe.Ub(Date.now()), Object(U.a)(Object(On.a)("tab_backgrounded")(t))), (e => Object(gn.c)(e, {
									experimentEligibilitySelector: e => !Object(zn.d)(e),
									experimentName: Xe.cc
								}) === Xe.qc.Enabled)(t) && "visible" === document.visibilityState && n && Object(mn.k)(n.routeMatch, l.getState(), q.TimerType.Revisit, 0, n.urlParams, !0), "visible" === document.visibilityState) {
								const e = Qe.x(),
									t = Qe.y(),
									n = Qe.I(),
									s = Qe.R();
								if (s && e && n) {
									const o = Date.now() - s;
									Object(U.a)(Object(On.e)("tab_backgrounded", n)(l.getState(), o, e, t))
								}(s || e || n || t) && (Qe.db(), Qe.hb(), Qe.fb(), Qe.eb())
							}(null === (e = null == n ? void 0 : n.locationState) || void 0 === e ? void 0 : e.clickId) && Os.d[n.locationState.clickId] && !Os.d[n.locationState.clickId].completed && ("visible" !== document.visibilityState ? Object(Os.b)(n.locationState.clickId) : Object(Os.c)(n.locationState.clickId))
						}), Object(zn.g)(l.getState()) && xn(l.getState), l.dispatch(Object(oe.n)())
					}), window.history.scrollRestoration = "manual", Jn.a.attachStore(l), l.dispatch(Object(ne.b)(A.a.PageLoad));
					const w = Qe.p(null === (u = l.getState().user.account) || void 0 === u ? void 0 : u.id),
						I = Qe.o(null === (m = l.getState().user.account) || void 0 === m ? void 0 : m.id);
					l.dispatch(Object(te.C)({
						posts: null != w ? w : []
					})), l.dispatch(Object(V.k)({
						comments: null != I ? I : []
					})), Object(At.f)(l.getState()) && l.dispatch(Object(ds.e)()), Object(P.requestIdleCallback)(() => {
						if (Object(Hn.g)(l.getState())) {
							const e = Qe.E();
							(!e || e && Date.now() - e.lastUpdated >= _.B) && l.dispatch(Object(oe.f)())
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

			function o(e) {
				return "object" != typeof e[0]
			}
			var r;
			n.d(t, "c", (function() {
					return s
				})), n.d(t, "b", (function() {
					return o
				})), n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.Default = "default", e.Loading = "loading", e.Error = "error"
				}(r || (r = {}))
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
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return c
			}));
			var s, o, r, a, i = n("./src/reddit/models/FeedElement/index.ts");

			function c(e) {
				return e.__typename === i.a.InboxNotificationCollection
			}! function(e) {
				e.AwardReceived = "AWARD_RECEIVED", e.CakeDay = "CAKE_DAY", e.ChatMessage = "CHAT_MESSAGE", e.ChatRequest = "CHAT_REQUEST", e.ChatAcceptInvite = "CHAT_ACCEPT_INVITE", e.CommentFollow = "COMMENT_FOLLOW", e.CommentReply = "COMMENT_REPLY", e.HFNSubredditInterestingPost = "SUBREDDIT_UPDATES_INTERESTING_POST", e.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", e.ModeratedSrViralCommentPost = "MODERATED_SR_VIRAL_COMMENT_POST", e.OneOff = "ONE_OFF", e.PostFollow = "POST_FOLLOW", e.PostReply = "POST_REPLY", e.PrivateMessage = "PRIVATE_MESSAGE", e.RedditLore = "REDDIT_LORE", e.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", e.TalkLive = "TALK_LIVE", e.ThreadReplies = "THREAD_REPLIES", e.TopLevelComment = "TOP_LEVEL_COMMENT", e.UpvoteComment = "UPVOTE_COMMENT", e.UpvotePost = "UPVOTE_POST", e.UsernameMention = "USERNAME_MENTION", e.UserNewFollower = "USER_NEW_FOLLOWER"
			}(s || (s = {})),
			function(e) {
				e.Award = "AWARD", e.Bell = "BELL", e.Chat = "CHAT", e.Comment = "COMMENT", e.Heart = "HEART", e.Live = "LIVE", e.Lore = "LORE", e.NotifyAll = "NOTIFY_ALL", e.Redditor = "REDDITOR", e.Reply = "REPLY", e.SortLive = "SORT_LIVE", e.SortRising = "SORT_RISING", e.SortTop = "SORT_TOP", e.Trophy = "TROPHY", e.Upvote = "UPVOTE"
			}(o || (o = {})),
			function(e) {
				e.CopyrightTakedown = "COPYRIGHT_TAKEDOWN", e.ContentTakedown = " CONTENT_TAKEDOWN", e.Author = "AUTHOR", e.Moderator = "MODERATOR", e.CommunityOps = "COMMUNITY_OPS", e.AntiEvilOps = "ANTI_EVIL_OPS", e.Reddit = "REDDIT", e.Deleted = "DELETED", e.AutomodFiltered = "AUTOMOD_FILTERED"
			}(r || (r = {})),
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
		"./src/reddit/routes/acknowledgements/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/page.ts");
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
					action: r.a,
					chunk: o.s.ACKNOWLEDGEMENTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.ACKNOWLEDGEMENTS
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/appeal/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/page.ts");
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
					action: r.a,
					chunk: o.s.APPEAL,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.APPEAL
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
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/avatar.ts");
			const a = "/avatar",
				i = [a, `${a}/:username`, `${a}/:username/:avatarId`],
				c = {
					action: r.a,
					chunk: o.s.AVATAR,
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
						name: o.Nb.AVATAR
					},
					path: i
				};
			t.b = c
		},
		"./src/reddit/routes/coins/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/page.ts");
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
					action: r.c,
					chunk: o.s.COINS,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.COINS
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/coinsMobile/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/page.ts");
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
					action: r.b,
					chunk: o.s.COINS_MOBILE,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.COINS_MOBILE
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/collectionCommentsPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/countrySites/index.ts"),
				a = n("./src/lib/loadableAction/index.ts"),
				i = n("./src/reddit/featureFlags/profileCollections.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "CollectionCommentsPage",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/pages/CollectionCommentsPage/index.tsx")),
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
			let l = ["/:routePrefix(r)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(r)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(r)/:subredditName/collection/:collectionId"];
			l = Object(r.b)(l);
			const d = ["/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(user)/:subredditName/collection/:collectionId"],
				u = {
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/actions/pages/collectionCommentsPage.ts")).then(e => e.collectionCommentsPageRequested)),
					chunk: o.s.COLLECTION_COMMENTS_PAGE,
					component: c,
					exact: !0,
					meta: {
						name: o.Nb.COLLECTION_COMMENTS
					},
					prefetches: [o.s.FRONTPAGE, o.s.COMMENTS_PAGE, o.s.SUBREDDIT]
				},
				m = {
					...u,
					path: l
				},
				p = {
					...u,
					path: d,
					routePredicate: i.a
				},
				b = [m, p];
			t.a = b
		},
		"./src/reddit/routes/commentsPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/countrySites/index.ts"),
				a = n("./src/lib/loadableAction/index.ts");
			const i = Object(s.a)({
				resolved: {},
				chunkName: () => "CommentsPage",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CommentsPage")]).then(n.bind(null, "./src/reddit/pages/CommentsPage/index.tsx")),
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
			c = Object(r.b)(c);
			const l = ["/:routePrefix(r)/:subredditName/duplicates/:partialPostId/:urlSafePostTitle?", "/:routePrefix(user)/:subredditName/duplicates/:partialPostId/:urlSafePostTitle?", "/duplicates/:partialPostId/:urlSafePostTitle?"],
				d = ["/:routePrefix(user)/:subredditName/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/:routePrefix(user)/:subredditName/comments/:partialPostId/:urlSafePostTitle?"],
				u = (e, t) => ({
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CommentsPage")]).then(n.bind(null, "./src/reddit/actions/pages/comments.ts")).then(e => e.commentsPageRequested)),
					chunk: o.s.COMMENTS_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: e
					},
					path: t,
					prefetches: [o.s.FRONTPAGE, o.s.SUBREDDIT]
				}),
				m = [u(o.Nb.COMMENTS, c), u(o.Nb.DUPLICATES, l), u(o.Nb.COMMENTS, d)];
			t.a = m
		},
		"./src/reddit/routes/countrySitePage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/countrySites/index.ts"),
				a = n("./src/lib/loadableAction/index.ts");
			const i = Object(s.a)({
					resolved: {},
					chunkName: () => "CountryPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("CountryPage")]).then(n.bind(null, "./src/reddit/pages/CountrySitePage/index.tsx")),
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
				l = {
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("CountryPage")]).then(n.bind(null, "./src/reddit/actions/pages/countrySite/index.ts")).then(e => e.internationalSiteHomePageRequested)),
					chunk: o.s.INTERNATIONAL_SITE_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.INTERNATIONAL_SITE_PAGE
					},
					path: Object(r.b)(c, !1),
					prefetches: [o.s.SUBREDDIT]
				};
			t.a = l
		},
		"./src/reddit/routes/econManagement/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/econManagement.ts");
			const a = "/econ-management",
				i = "q",
				c = {
					action: r.a,
					chunk: o.s.ECON_MANAGEMENT,
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
						name: o.Nb.ECON_MANAGEMENT
					},
					path: a
				};
			t.c = c
		},
		"./src/reddit/routes/followers/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
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
					action: Object(r.a)(() => n.e("ProfileFollowersAction").then(n.bind(null, "./src/reddit/actions/pages/followers/index.ts")).then(e => e.followersPageRequested)),
					chunk: o.s.PROFILE_FOLLOWERS,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.FOLLOWERS
					},
					path: a,
					prefetches: [o.s.PROFILE_OVERVIEW]
				};
			t.a = c
		},
		"./src/reddit/routes/framedGild/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/framedGild/index.ts");
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
					action: r.a,
					chunk: o.s.FRAMED_GILD,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.FRAMED_GILD
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/framedModal/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/framedModal/index.ts");
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
					action: r.a,
					chunk: o.s.FRAMED_MODAL,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.FRAMED_MODAL
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/frontpage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts"),
				c = n("./src/reddit/selectors/user.ts");
			const l = Object.keys(a.W).map(e => a.W[e]).join("|"),
				d = "/",
				u = `/:sort(${l})?`,
				m = Object(r.a)({
					resolved: {},
					chunkName: () => "Frontpage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/pages/Frontpage/index.tsx")),
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
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageRequested)),
					chunk: a.s.FRONTPAGE,
					component: m,
					exact: !0,
					prefetches: [a.s.COMMENTS_PAGE, a.s.SUBREDDIT]
				},
				b = {
					...p,
					path: d,
					meta: {
						name: a.Nb.INDEX
					},
					routePredicate: c.P
				},
				h = {
					...p,
					path: d,
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
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/topic.ts"),
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
				l = {
					action: e => async (e, t, n) => {
						let s, {
							gqlContext: o
						} = n; {
							const e = t();
							if (Object(a.c)(e, {
									topicSlug: "coronavirus"
								})) return
						}
						try {
							s = await Object(r.fetchTopicPage)(o(), "coronavirus", {
								includeIdentity: !0,
								includePosts: !1,
								includeRelationships: !1
							})
						} catch {
							return void e(Object(r.topicFailed)())
						}
						if (!s) return;
						const i = t();
						e(Object(r.topicLoaded)({
							...s,
							key: "tagging",
							meta: i.meta
						}))
					},
					chunk: o.s.GEOTAGGING,
					component: c,
					exact: !0,
					meta: {
						name: o.Nb.GEOTAGGING
					},
					path: i,
					prefetches: []
				};
			t.a = l
		},
		"./src/reddit/routes/inbox/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/actions/page.ts");
			const c = Object(r.a)({
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
				l = Object.keys(a.S).map(e => a.S[e]).join("|"),
				d = [`/message/:pageName(${l})`, "/message/messages/:messageId([A-Za-z0-9]+)"],
				u = {
					action: i.d,
					chunk: a.s.INBOX_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: a.Nb.INBOX_PAGES
					},
					path: d
				};
			t.a = u
		},
		"./src/reddit/routes/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/routes/collectionCommentsPage/index.ts"),
				o = n("./src/reddit/routes/acknowledgements/index.ts"),
				r = n("./src/reddit/routes/appeal/index.ts"),
				a = n("./src/reddit/routes/avatar/index.ts"),
				i = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./src/lib/constants/index.ts");
			var l = {
					action: () => async e => await e(Object(i.c)(a.a)),
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Nb.AVATAR_PROFILE
					},
					path: ["/user/me/avatar", "/u/me/avatar", "/user/:profileName/avatar"]
				},
				d = n("./src/reddit/routes/coins/index.ts"),
				u = n("./src/reddit/routes/coinsMobile/index.ts"),
				m = n("./src/reddit/routes/commentsPage/index.ts"),
				p = n("./src/reddit/routes/countrySitePage/index.ts"),
				b = (n("./node_modules/@loadable/component/dist/loadable.esm.js"), n("./src/lib/loadableAction/index.ts"));
			var h = [],
				g = n("./src/reddit/routes/econManagement/index.ts");
			var f = {
					action: Object(b.a)(() => n.e(10).then(n.bind(null, "./src/reddit/actions/pages/emailVerification.ts")).then(e => e.emailVerificationRequested)),
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
							apiContext: o
						} = s;
						const {
							queryParams: r
						} = e;
						await t(Object(i.c)(Object(v.a)("/", r)))
					},
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Nb.EXPLORE
					},
					path: ["/explore", "/explore/:categoryName"],
					prefetches: [c.s.COMMENTS_PAGE, c.s.FRONTPAGE]
				},
				C = n("./src/reddit/routes/followers/index.ts"),
				y = n("./src/reddit/routes/framedGild/index.ts"),
				x = n("./src/reddit/routes/framedModal/index.ts"),
				E = n("./src/reddit/routes/frontpage/index.ts"),
				P = n("./src/reddit/routes/geotagging/index.ts"),
				j = n("./src/reddit/routes/inbox/index.ts"),
				_ = n("./src/reddit/routes/meta/index.ts"),
				S = n("./src/reddit/routes/moderationPages/index.ts"),
				k = n("./src/reddit/routes/modListing/index.ts"),
				M = n("./src/reddit/routes/modQueue/index.ts"),
				w = n("./src/reddit/routes/multireddit/index.ts"),
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
							apiContext: o
						} = s;
						const {
							rest: r
						} = e.params, {
							queryParams: a
						} = e, c = await Object(H.a)(o());
						if (!(c.ok && c.body && c.body.account)) {
							const e = n();
							return void Object(W.a)(t, e)
						}
						const l = c.body.account.displayText,
							d = r ? `/user/${l}/${(e=>e.endsWith("/")?e:`${e}/`)(r)}` : `/user/${l}/`,
							u = Object(v.a)(d, a);
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
				z = n("./src/reddit/routes/profileOverview/index.ts"),
				K = n("./src/reddit/routes/profilePosts/index.ts"),
				J = n("./src/reddit/routes/profilePrivate/index.ts");
			var Y = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							queryParams: o
						} = e, r = s ? `/user/${n}/${(e=>e.endsWith("/")?e:`${e}/`)(s)}` : `/user/${n}/`, a = Object(v.a)(r, o);
						await t(Object(i.c)(a))
					},
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Nb.PROFILE_REDIRECT
					},
					path: ["/r/u_:profileName", "/r/u_:profileName/:rest(.*)", "/u/:profileName", "/u/:profileName/:rest(.*)"]
				},
				Z = n("./src/reddit/routes/profileSnoobuilder/index.ts");
			var X = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							queryParams: o
						} = e, r = s ? `/user/${n}/posts/${s}` : `/user/${n}/posts`, a = Object(v.a)(r, o);
						t(Object(i.c)(a))
					},
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Nb.PROFILE_REDIRECT
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
				re = n("./src/reddit/routes/subredditLeaderboard/index.ts"),
				ae = n("./src/reddit/routes/subredditWiki/index.ts"),
				ie = n("./src/reddit/routes/talk/index.ts"),
				ce = n("./src/reddit/routes/topic/index.ts"),
				le = n("./src/reddit/routes/wrappedreddit/index.ts");
			const de = [o.a, r.a, a.b, l, d.a, u.a, p.a, V, Y, X, ...s.a, ...m.a, f, ...E.a, P.a, B.a, D.b, le.c, U.b, ie.b, g.c, F, G, C.a, y.a, x.a, R.a, L.a, ...A, O, ..._.a, w.a, M.a, k.c, N.a, j.a, q.a, Q.a, z.a, K.a, Z.a, J.a, $.a, ...ne.a, ...se, te.a, ...ae.a, ce.a, oe.b, re.a, S.a, ee.a, ...h];
			t.a = de
		},
		"./src/reddit/routes/meta/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = "/community-points/",
				o = "/community-points/documentation/*"
		},
		"./src/reddit/routes/meta/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./node_modules/react-router-redux/es/index.js"),
				a = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts"),
				c = n("./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts"),
				l = n("./src/reddit/actions/users.ts"),
				d = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/featureFlags/index.ts"),
				m = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/routes/meta/constants.ts");
			const h = {
					action: () => async (e, t) => {
						Object(p.P)(t()) || await e(Object(l.t)())
					},
					chunk: o.s.META_ARBITRUM_POINTS_MIGRATION_PAGE,
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
						name: o.Nb.META_ARBITRUM_POINTS_MIGRATION_PAGE
					},
					path: ["/web/points-migration/"]
				},
				g = {
					action: i.a,
					chunk: o.s.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
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
						name: o.Nb.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
						isResponsive: !0
					},
					path: [b.b, b.a, "/vault/", "/web/community-points/"]
				},
				f = {
					action: c.a,
					chunk: o.s.META_MEMBERSHIP_PAYWALL_PAGE,
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
						name: o.Nb.META_MEMBERSHIP_PAYWALL_PAGE
					},
					path: ["/web/special-membership/:subredditName", "/web/membership/:subredditName"]
				},
				v = e => async (t, n) => {
					const s = Object(m.a)(e.queryParams);
					Object(p.P)(n()) || await t(Object(l.t)()), s && setTimeout(async () => {
						await t(Object(r.c)(`/r/${encodeURIComponent(s.subreddit)}/`)), u.d.spBurnLinks(n()) && t(Object(a.h)(d.a.CRYPTO_BURN_POINTS, s))
					}, 0)
				}, O = {
					action: v,
					chunk: o.s.EMPTY,
					exact: !0,
					meta: {
						name: o.Nb.META_VAULT_BURN
					},
					path: ["/vault/burn"]
				};
			t.a = [h, g, f, O]
		},
		"./src/reddit/routes/modQueue/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "ModQueuePages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("ModQueuePages")]).then(n.bind(null, "./src/reddit/pages/ModQueuePages/index.tsx")),
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
				l = Object.keys(a.rb).map(e => a.rb[e]).join("|"),
				d = `/r/mod/about/:pageName(${l})?`,
				u = {
					action: Object(i.a)(() => n.e("ModQueue").then(n.bind(null, "./src/reddit/actions/pages/modQueue/index.ts")).then(e => e.modQueuePageRequested)),
					chunk: a.s.MODQUEUE_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: a.Nb.MODQUEUE_PAGES
					},
					path: d
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
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/countrySites/index.ts"),
				c = n("./src/lib/loadableAction/index.ts"),
				l = n("./node_modules/react-router/esm/react-router.js");
			const d = Object.keys(a.fc).map(e => a.fc[e]).join("|"),
				u = [a.fc.Awards],
				m = u.join("|"),
				p = e => `${e}about/scheduledposts`,
				b = e => `${e}about/eventposts`,
				h = e => `${e}about/predictions`,
				g = Object(r.a)({
					resolved: {},
					chunkName: () => "ModerationPages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/pages/ModHub/index.tsx")),
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
			let v = ["/r/:subredditName/about", `/r/:subredditName/about/:pageName(${d})`, `/user/:profileName/about/:pageName(${m})`, ...f];
			v = Object(i.b)(v);
			const O = e => !!Object(l.h)(e, {
					path: "/r/:subredditName/about"
				}) || !!Object(l.h)(e, {
					path: "/:countryCode([a-z]{2})/r/:subredditName/about"
				}) || !!Object(l.h)(e, {
					path: "/:countryCode([a-z]{2})/:languageCode([a-z]{2})/r/:subredditName/about"
				}),
				C = {
					action: Object(c.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/actions/pages/moderationPages/index.ts")).then(e => e.moderationPageRequested)),
					chunk: a.s.MODERATION_PAGES,
					component: g,
					exact: !0,
					meta: {
						name: a.Nb.MODERATION_PAGES
					},
					path: v,
					prefetches: [a.s.SUBREDDIT]
				};
			t.a = C
		},
		"./src/reddit/routes/multireddit/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "Multireddit",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/pages/Multireddit/index.tsx")),
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
				l = "/me/m/:multiredditName",
				d = Object.keys(a.W).map(e => `${l}/:sort(${a.W[e]})?`),
				u = "/user/:username/m/:multiredditName",
				m = Object.keys(a.W).map(e => `${u}/:sort(${a.W[e]})?`),
				p = [l, u, ...d, ...m],
				b = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/pages/multireddit/index.ts")).then(e => e.multiredditRequested)),
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
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
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
					action: Object(r.a)(() => n.e("NotificationsInbox").then(n.bind(null, "./src/reddit/actions/pages/notificationsInbox.ts")).then(e => e.notificationsInboxPageRequested)),
					chunk: o.s.NOTIFICATIONS_INBOX,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.NOTIFICATIONS_INBOX
					},
					path: a,
					prefetches: [o.s.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/postDraft/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("PostDraft")]).then(n.bind(null, "./src/reddit/actions/pages/postDraft.ts")).then(e => e.postDraftRequested)),
					chunk: o.s.POST_DRAFT,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.POST_DRAFT
					},
					path: a,
					prefetches: [o.s.POST_DRAFT]
				};
			t.a = c
		},
		"./src/reddit/routes/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/predictions.ts");
			const a = "/predictions",
				i = {
					action: r.a,
					chunk: o.s.PREDICTIONS,
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
						name: o.Nb.PREDICTIONS,
						isResponsive: !0
					},
					path: a
				};
			t.b = i
		},
		"./src/reddit/routes/profileComments/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/comments",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileComments",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/pages/ProfileComments/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/actions/pages/profileComments/index.ts")).then(e => e.profileCommentsRequested)),
					chunk: o.s.PROFILE_COMMENTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.PROFILE_COMMENTS
					},
					path: a,
					prefetches: [o.s.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profileModSettings/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
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
					action: Object(r.a)(() => n.e("ProfileModeration").then(n.bind(null, "./src/reddit/actions/pages/profileModSettings.ts")).then(e => e.profileModSettingsRequested)),
					chunk: o.s.PROFILE_MODERATION,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.PROFILE_MODERATION
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/profileOverview/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileOverview",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/pages/ProfileOverview/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/actions/pages/profileOverview/index.ts")).then(e => e.profileOverviewRequested)),
					chunk: o.s.PROFILE_OVERVIEW,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.PROFILE_OVERVIEW
					},
					path: a,
					prefetches: [o.s.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profilePosts/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/posts",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfilePosts",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/pages/ProfilePosts/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePosts.ts")).then(e => e.profilePostsRequested)),
					chunk: o.s.PROFILE_POSTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.PROFILE_POSTS
					},
					path: a,
					prefetches: [o.s.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profilePrivate/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts"),
				c = n("./src/reddit/models/Profile/index.ts");
			const l = Object(r.a)({
					resolved: {},
					chunkName: () => "ProfilePrivate",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfilePrivate")]).then(n.bind(null, "./src/reddit/pages/ProfilePrivate/index.tsx")),
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
				d = Object.keys(c.b).map(e => c.b[e]).join("|"),
				u = [`/user/:profileName/:listingType(${d})`, `/user/:profileName/gilded/:listingType(${c.b.GivenGildings})`],
				m = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePrivate/index.ts")).then(e => e.profilePrivateRequested)),
					chunk: a.s.PROFILE_PRIVATE,
					component: l,
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
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts"),
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
				l = {
					path: c,
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/actions/pages/profileSnoobuilder.ts")).then(e => e.profileSnoobuilderRequested)),
					chunk: o.s.PROFILE_SNOOBUILDER,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.PROFILE_SNOOBUILDER
					},
					routePredicate: a.d.snoovatar30
				};
			t.a = l
		},
		"./src/reddit/routes/publicAccessNetwork/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
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
					action: Object(r.a)(() => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("PublicAccessNetwork")]).then(n.bind(null, "./src/reddit/actions/publicAccessNetwork/page.ts")).then(e => e.publicAccessNetworkRequested)),
					chunk: o.s.PUBLIC_ACCESS_NETWORK,
					component: a,
					exact: !0,
					meta: {
						name: o.Nb.PUBLIC_ACCESS_NETWORK
					},
					path: ["/rpan/r/:subredditName/:partialPostId?", "/rpan/:partialPostId?"],
					prefetches: [o.s.PUBLIC_ACCESS_NETWORK]
				};
			t.a = i
		},
		"./src/reddit/routes/report/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
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
					action: Object(r.a)(() => n.e("Report").then(n.bind(null, "./src/reddit/actions/pages/report/index.ts")).then(e => e.reportPageRequested)),
					chunk: o.s.REPORT_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.REPORT
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/searchResults/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = ["/search", "/r/:subredditName/search", "/me/m/:multiredditName/search", "/user/:username/m/:multiredditName/search"],
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "SearchResults",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/pages/SearchResults/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/actions/pages/search/searchResultsRequested.ts")).then(e => e.searchResultsRequested)),
					chunk: o.s.SEARCH_RESULTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.SEARCH_RESULTS
					},
					path: a,
					prefetches: [o.s.FRONTPAGE, o.s.SUBREDDIT, o.s.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/settings/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object.keys(a.cc).map(e => a.cc[e]).join("|"),
				l = [{
					action: Object(i.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModStatsChart~Settings~ViewsTooltip"), n.e("vendors~Settings"), n.e("Settings")]).then(n.bind(null, "./src/reddit/actions/pages/settings.ts")).then(e => e.settingsPageRequested)),
					component: Object(r.a)({
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
					component: Object(r.a)({
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
			t.a = l
		},
		"./src/reddit/routes/subredditLeaderboard/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
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
					action: Object(r.a)(() => n.e("SubredditLeaderboard").then(n.bind(null, "./src/reddit/actions/pages/subredditLeaderboard.ts")).then(e => e.subredditLeaderboardPageRequested)),
					chunk: o.s.SUBREDDIT_LEADERBOARD,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.SUBREDDIT_LEADERBOARD,
						isResponsive: !0
					},
					path: a,
					prefetches: [o.s.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/subredditWiki/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/countrySites/index.ts"),
				i = n("./src/lib/loadableAction/index.ts"),
				c = n("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts");
			const l = Object(s.a)({
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
			let d = ["/r/:subredditName/wiki/:wikiSubRoute(revisions)", "/r/:subredditName/wiki/:wikiSubRoute(edit|create|revisions)/:wikiPageName+", "/r/:subredditName/wiki/:wikiPageName+"];
			d = Object(a.b)(d), d.push("/wiki/:wikiPageName+");
			const u = ["/wiki/", "/r/:subredditName/wiki/", "/r/:subredditName/w/:wikiPageName*", "/w/:wikiPageName*", "/r/:subredditName/wiki/:wikiSubRoute(settings)/:wikiPageName+"],
				m = e => async t => {
					await t(Object(o.c)(Object(c.a)(e.url, e.params)))
				}, p = {
					action: m,
					chunk: r.s.EMPTY,
					exact: !0,
					meta: {
						name: r.Nb.SUBREDDIT_WIKI
					},
					path: u
				}, b = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("ModerationPages~SubredditWiki"), n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/actions/pages/subredditWiki/index.ts")).then(e => e.subredditWikiPageRequested)),
					chunk: r.s.SUBREDDIT_WIKI,
					component: l,
					exact: !0,
					meta: {
						name: r.Nb.SUBREDDIT_WIKI
					},
					path: d,
					prefetches: [r.s.SUBREDDIT]
				};
			t.a = [p, b]
		},
		"./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				o = n.n(s),
				r = n("./src/reddit/constants/wiki.ts"),
				a = n("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				i = n("./src/reddit/routes/moderationPages/index.ts");
			t.a = (e, t) => {
				const n = t.wikiSubRoute === r.m.Settings,
					s = Object(a.a)(t, Object(i.c)(e) || n),
					c = o.a.parse(e);
				return (c.pathname || "").replace(/\/$/, "") !== s ? (c.pathname = s, o.a.format(c)) : e
			}
		},
		"./src/reddit/routes/talk/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/talk.ts");
			const a = "/talk",
				i = {
					action: r.a,
					chunk: o.s.TALK,
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
						name: o.Nb.TALK
					},
					path: a
				};
			t.b = i
		},
		"./src/reddit/routes/topic/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), n.e("Topic")]).then(n.bind(null, "./src/reddit/actions/pages/topic.ts")).then(e => e.topicPageRequested)),
					chunk: o.s.TOPIC,
					component: a,
					exact: !0,
					meta: {
						name: o.Nb.TOPIC
					},
					prefetches: [o.s.COMMENTS_PAGE, o.s.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/selectors/accountManager/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return M
			}));
			var s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				o = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				r = n("./src/config.ts"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/reddit/constants/accountManager.ts"),
				l = n("./src/reddit/constants/experiments.ts"),
				d = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				u = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				m = n("./src/reddit/helpers/chooseVariant/index.ts"),
				p = n("./src/reddit/selectors/experiments/index.ts");
			const b = Object(a.a)(e => Object(m.c)(e, {
				experimentEligibilitySelector: p.f,
				experimentName: l.td
			}), e => e === l.zd.Enabled);
			var h = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				g = n("./src/reddit/selectors/experiments/magicLink.ts"),
				f = n("./src/reddit/selectors/experiments/moreRepliesSignup.ts"),
				v = n("./src/reddit/actions/modal.ts"),
				O = n("./src/reddit/selectors/accountManager/modalData.ts"),
				C = n("./src/reddit/selectors/meta.ts");
			const y = Object(a.a)(p.f, C.b, O.a, (e, t, n) => e && "DE" === t && n === v.a.Report),
				x = Object(a.a)(e => Object(m.c)(e, {
					experimentEligibilitySelector: y,
					experimentName: l.Zd
				}), e => e === l.je.Enabled);
			var E = n("./src/lib/getParsedUserAgent/index.ts");
			const P = Object(a.a)(e => Object(m.c)(e, {
				experimentEligibilitySelector: e => Object(E.g)(e.meta.userAgent) && Object(p.f)(e),
				experimentName: l.Se
			}), e => e === l.ff.Enabled);
			var j = n("./src/reddit/selectors/experiments/utils.ts"),
				_ = n("./src/reddit/selectors/responsiveSettings.ts");
			const S = Object(a.c)({
					frontpageSignupVariant: d.a,
					googleOneTapVariant: u.b,
					magicLinkVariant: g.a,
					moreRepliesSignupVariant: e => Object(j.a)(Object(f.b)(e)),
					ssoLoginLinkVariant: e => Object(m.c)(e, {
						experimentEligibilitySelector: e => !Object(p.e)(e),
						experimentName: l.Ue
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
				M = Object(a.a)((e, t) => t.path, (e, t) => t.uiMode, e => Object(O.c)(e), O.a, _.a, C.i, S, k, (e, t, n, a, d, u, m, p) => {
					const {
						frontpageSignupVariant: b,
						googleOneTapVariant: h,
						ssoLoginLinkVariant: g,
						magicLinkVariant: f,
						moreRepliesSignupVariant: v,
						blockingInterstitialVariant: O
					} = m, {
						isGoogleSsoGisEnabled: C,
						isMoreRepliesSignupEnabled: y,
						isNetzDGComplianceEnabled: x,
						isSafariOneTapEnabled: E,
						isBlockingInterstitialEnabled: P
					} = p;
					let j = `${r.a.accountManagerOrigin}${e}`;
					if (j = Object(i.a)(j, {
							experiment_d2x_2020ify_buttons: "enabled"
						}), g && (j = Object(i.a)(j, {
							[`experiment_${l.Ue}`]: g
						})), C && (j = Object(i.a)(j, {
							[`experiment_${l.td}`]: "enabled"
						})), y && (j = Object(i.a)(j, {
							[`experiment_${l.Qd}`]: v
						})), x && (j = Object(i.a)(j, {
							[`experiment_${l.Zd}`]: l.je.Enabled,
							thing_id: n
						})), j = Object(i.a)(j, {
							experiment_d2x_onboarding: "enabled"
						}), E && (j = Object(i.a)(j, {
							[`experiment_${l.Se}`]: "enabled"
						})), e === c.c.GoogleOneTap) return Object(i.a)(j, {
						[l.ub]: h
					});
					if (P && (j = Object(i.a)(j, {
							[`experiment_${l.yb}`]: O
						})), b && (j = Object(i.a)(j, {
							[l.rc]: b,
							uiMode: t
						})), f && (j = Object(i.a)(j, {
							[`experiment_${l.Md}`]: f
						})), d && (j = Object(i.a)(j, {
							mweb_responsive_settings: "treatment"
						})), u) {
						const e = Object(s.isoLocaleToR2Language)(u);
						u !== o.DEFAULT_LOCALE && e && (j = Object(i.a)(j, {
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
				return o
			})), n.d(t, "c", (function() {
				return r
			}));
			const s = e => e.accountManagerModalData.actionSource,
				o = e => e.accountManagerModalData.redirectUrl,
				r = e => e.accountManagerModalData.thingId
		},
		"./src/reddit/selectors/econManagement.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/models/EconManagement/index.ts"),
				r = n("./src/reddit/actions/economics/econManagement/constants.ts");
			const a = {
				displayState: o.a.Default,
				currentEntity: null,
				relatedData: {},
				entityTypes: {}
			};
			var i = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.c:
						return {
							...e, entityTypes: t.payload.reduce((e, t) => ({
								...e,
								[t.typename]: t
							}), {})
						};
					case r.e:
						return {
							...a, entityTypes: e.entityTypes, displayState: o.a.Loading
						};
					case r.d:
						return {
							...a, entityTypes: e.entityTypes, displayState: o.a.Error
						};
					case r.f: {
						const n = t.payload,
							s = n.typename;
						return {
							...e,
							displayState: o.a.Default,
							currentEntity: {
								id: n.entityId || "",
								type: s,
								prefixedId: `${n.typename}:${n.entityId}`,
								details: n
							},
							relatedData: {}
						}
					}
					case r.a: {
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
				l = e => {
					var t, n;
					return (null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.econManagement) || void 0 === n ? void 0 : n.displayState) || o.a.Default
				},
				d = e => {
					var t, n;
					const s = c(e);
					if (!s) return [];
					const o = null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.econManagement) || void 0 === n ? void 0 : n.entityTypes[s.type];
					return o && o.externalRefs || []
				},
				u = (e, t) => {
					var n, s;
					return null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.econManagement) || void 0 === s ? void 0 : s.relatedData[t]
				},
				m = (e, t) => {
					var n, s, o;
					return (null === (o = null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.econManagement) || void 0 === s ? void 0 : s.entityTypes[t]) || void 0 === o ? void 0 : o.actions) || []
				}
		},
		"./src/reddit/selectors/experiments/d2xSeoLightboxExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/meta.ts");
			const c = Object(s.a)(e => Object(r.c)(e, {
				experimentEligibilitySelector: e => Object(i.g)(e) && Object(a.f)(e),
				experimentName: o.Xb
			}), e => e === o.hb.Enabled)
		},
		"./src/reddit/selectors/experiments/econ/meta.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const r = Object(o.a)(s.Nd)
		},
		"./src/reddit/selectors/experiments/econStorefrontClaim.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const a = e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: r.P,
					experimentName: s.ed
				});
				return !(!t || Object(s.Df)(t))
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
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts"),
				c = n("./src/reddit/selectors/meta.ts"),
				l = n("./src/reddit/selectors/user.ts");
			const d = Object(s.a)(l.Y, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return !n || Object(r.A)(n)
				}, c.c, (e, t, n) => !e && t && !n),
				u = Object(s.a)((e, t) => Object(a.c)(e, {
					experimentEligibilitySelector: e => d(e, t),
					experimentName: o.rc,
					throttledVariants: {
						[o.sd.CurrentThrottled]: o.rc
					}
				}), i.a),
				m = e => e === o.sd.CurrentThrottled,
				p = e => e === o.sd.CurrentThrottled || e === o.sd.CurrentUnthrottled || e === o.sd.CurrentUnthrottledCopy || e === o.sd.NewPopUnthrottledCopy,
				b = e => e === o.sd.NewPopUnthrottledCopy,
				h = e => e === o.sd.NewPageUnthrottledCopy || e === o.sd.NewPageUnthrottledCopyFields,
				g = e => e === o.sd.NewPageUnthrottledCopyFields
		},
		"./src/reddit/selectors/experiments/joinOptimizations.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts");
			const i = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Eb,
					experimentEligibilitySelector: a.e
				}), e => e === o.W.Enabled),
				c = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Fb,
					experimentEligibilitySelector: a.e
				}), e => e === o.X.Enabled),
				l = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Gb,
					experimentEligibilitySelector: a.e
				}), e => e === o.Y.Enabled),
				d = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Hb,
					experimentEligibilitySelector: a.e
				}), e => e === o.Z.Enabled),
				u = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Jb,
					experimentEligibilitySelector: a.e
				}), e => e === o.bb.Enabled),
				m = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Ib,
					experimentEligibilitySelector: a.e
				}), e => e === o.ab.Enabled)
		},
		"./src/reddit/selectors/experiments/moreRepliesSignup.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts");
			const c = e => Object(r.c)(e, {
					experimentEligibilitySelector: a.f,
					experimentName: o.Qd,
					throttledVariants: {
						[o.Ud.ThrottledDaily]: o.Vd.Daily,
						[o.Ud.ThrottledWeekly]: o.Vd.Weekly
					}
				}),
				l = Object(s.a)(c, e => !!Object(i.a)(e))
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
				return l
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/experiments/presence.ts");
			const a = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.we
					}) === s.id
				},
				i = e => {
					if (Object(r.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.ve
					}) === s.id
				},
				c = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.me
					}) === s.id
				},
				l = e => {
					if (Object(r.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.le
					}) === s.id
				}
		},
		"./src/reddit/selectors/experiments/wrappedReddit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.dc
				}) === s.jb.Enabled,
				a = e => Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.ec
				}) === s.kb.Enabled
		},
		"./src/reddit/selectors/muted.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/models/SubredditModeration/index.ts"),
				r = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/pages/modHub/index.ts");
			Object(r.a)({
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
				l = (e, t) => {
					let {
						subredditId: n
					} = t;
					const s = Object(o.e)(n);
					return !!e.pages.modHub.muted.api.pending[s]
				},
				d = e => !!e.pages.modHub.muted.search.api.pending,
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
				return l
			})), n.d(t, "f", (function() {
				return d
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
				o = n("./src/reddit/actions/notifications/utils.ts"),
				r = n("./node_modules/reselect/es/index.js");
			const a = e => e.notificationsInbox && e.notificationsInbox.api && e.notificationsInbox.api.pending,
				i = e => e.notificationsInbox && e.notificationsInbox.pageInfo,
				c = Object(r.a)(i, e => !(!e || !e.hasNextPage)),
				l = Object(r.a)(i, e => e && e.endCursor),
				d = e => e.notificationsInbox && e.notificationsInbox.notifications,
				u = Object(r.a)(d, e => e.slice(0, 5)),
				m = e => e.notificationsInbox && e.notificationsInbox.earlierDividerIndex,
				p = Object(r.a)(d, m, (e, t) => {
					if (t) {
						const n = parseInt(t);
						return e.slice(0, n)
					}
					return e
				}),
				b = Object(r.a)(d, m, (e, t) => {
					if (t) {
						const n = parseInt(t);
						return e.slice(n)
					}
					return null
				}),
				h = Object(r.a)(o.a, e => e === s.c.NotificationsSupported)
		},
		"./src/reddit/selectors/removalReasons.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
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
				o = e => e.features.removalReasons.removedItemIds && e.features.removalReasons.removedItemIds.itemIds.length ? e.features.removalReasons.removedItemIds : null,
				r = e => e.features.removalReasons.api.pending
		},
		"./src/reddit/selectors/searchFix.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/contexts/PageLayer/index.tsx");
			const a = {},
				i = e => {
					let {
						pageLayer: t
					} = e;
					return t && t.locationState || a
				},
				c = Object(s.a)((e, t) => i(t), e => e.fromPage && e.fromPage.subredditName),
				l = Object(s.a)((e, t) => i(t), e => e.fromPage && e.fromPage.routeName),
				d = e => {
					let {
						pageLayer: t
					} = e;
					return t && t.locationState && t.locationState.searchSwitcherType
				},
				u = Object(s.a)(l, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return Object(r.B)(n)
				}, (e, t) => t && (e === o.Nb.COMMENTS || e === o.Nb.SUBREDDIT))
		},
		"./src/reddit/selectors/sso.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/components/Settings/modalIds.ts"),
				r = n("./src/reddit/models/Sso/index.ts"),
				a = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/user.ts");
			Object(s.a)(i.Cb, e => !(!e || !e.length));
			const c = Object(s.a)(i.C, e => !e),
				l = Object(s.a)(i.Cb, e => e && e.find(e => e === r.a.Apple)),
				d = Object(s.a)(i.Cb, e => !(!e || !e.includes(r.a.Google))),
				u = Object(s.a)(a.a, e => !!e && [o.b, o.d, o.e, o.g].includes(e))
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
		["./src/reddit/index.tsx", "runtime~Reddit", "vendors~Governance~ModListing~Reddit~Subreddit", "vendors~Chat~Governance~Reddit", "vendors~Reddit~StandalonePostPage", "Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e", "Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435", "Governance~ModListing~Reddit~ReportFlow~Subreddit", "Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3", "Governance~ModListing~Reddit~Subreddit", "Chat~Governance~Reddit", "Governance~Reddit", "AuthorHovercard~Reddit", "ModListing~Reddit"]
	]
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit.fc7b26e9e3f233dc7b17.js.map