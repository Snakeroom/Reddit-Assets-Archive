// https://www.redditstatic.com/desktop2x/Reddit.0479a53f614755f8d4de.js
// Retrieved at 7/12/2021, 10:10:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit"], {
		"./assets/fonts/BentonSans/font.less": function(e, t, n) {},
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
					o = e.payload;
				if (t)
					if (n) {
						r.listen("gtm"), r.receiveMessageOnce("loaded.gtm", (function() {
							i = !0, r.stopListening("gtm")
						}));
						var c = document.createElement("iframe");
						c.style.display = "none", c.id = a, c.name = JSON.stringify(s({
							referrer: document.referrer
						}, l(), o)), c.src = n + "?id=" + t, c.onload = m, document.body.appendChild(c)
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
				d = 0;
			e.exports = function(e, t, n) {
				var s = t && n || 0,
					r = t || [],
					l = void 0 !== (e = e || {}).clockseq ? e.clockseq : i,
					u = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					m = void 0 !== e.nsecs ? e.nsecs : d + 1,
					p = u - c + (m - d) / 1e4;
				if (p < 0 && void 0 === e.clockseq && (l = l + 1 & 16383), (p < 0 || u > c) && void 0 === e.nsecs && (m = 0), m >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				c = u, d = m, i = l;
				var b = (1e4 * (268435455 & (u += 122192928e5)) + m) % 4294967296;
				r[s++] = b >>> 24 & 255, r[s++] = b >>> 16 & 255, r[s++] = b >>> 8 & 255, r[s++] = 255 & b;
				var h = u / 4294967296 * 1e4 & 268435455;
				r[s++] = h >>> 8 & 255, r[s++] = 255 & h, r[s++] = h >>> 24 & 15 | 16, r[s++] = h >>> 16 & 255, r[s++] = l >>> 8 | 128, r[s++] = 255 & l;
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
		"./src/higherOrderComponents/asModal/index.m.less": function(e, t, n) {
			e.exports = {
				overlay: "_1DK52RbaamLOWw5UPaht_S",
				mIsVisible: "_1acwN_tUhJ8w-n7oCp-Aw3",
				modal: "_2Bejocqb-InO8686E2ehf"
			}
		},
		"./src/higherOrderComponents/asModal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/FocusTrap/index.ts"),
				i = n("./src/reddit/actions/shortcuts/utils.ts"),
				c = n("./src/reddit/components/Portal/index.tsx"),
				d = n("./src/reddit/constants/shortcuts.ts"),
				l = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				u = n("./src/higherOrderComponents/asModal/index.m.less"),
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
			const b = ({
				className: e,
				isVisible: t,
				...n
			}) => o.a.createElement("div", p({
				className: Object(r.a)(m.a.overlay, e, {
					[m.a.mIsVisible]: t
				})
			}, n));

			function h(e) {
				class t extends s.Component {
					constructor(e) {
						super(e), this.getRef = e => this.ref = e, this.onClick = e => e.stopPropagation(), this.onOverlayClick = e => {
							this.props.onOverlayClick && this.props.onOverlayClick(), e.stopPropagation()
						}, this.state = {
							mounted: !1
						}
					}
					componentDidMount() {
						this.props.ignoreDefaultFocus || this.ref && this.ref.focus(), this.setState({
							mounted: !0
						}), Object(l.a)(), this.ref && (this.focusTrap = new a.b(this.ref), this.focusTrap.activate())
					}
					componentWillUnmount() {
						this.setState({
							mounted: !1
						}), Object(l.b)(), Object(i.d)(), this.focusTrap && this.focusTrap.deactivate()
					}
					render() {
						const {
							props: t
						} = this, {
							className: n,
							ignoreDefaultFocus: s,
							onOverlayClick: a,
							overlayClassName: i,
							overlayCustomStyles: l,
							withOverlay: u,
							...p
						} = t, h = p;
						return o.a.createElement(c.a, {
							container: document.getElementById(d.b)
						}, o.a.createElement(b, {
							className: i,
							isVisible: u,
							onClick: this.onOverlayClick,
							style: l
						}, o.a.createElement("div", {
							"aria-modal": !0,
							className: Object(r.a)(m.a.modal, n),
							onClick: this.onClick,
							ref: this.getRef,
							role: "dialog",
							tabIndex: -1
						}, o.a.createElement(e, h))))
					}
				}
				return t
			}
		},
		"./src/higherOrderComponents/warnOnChildrenCount/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			n("./src/lib/logs/console.ts");
			t.a = function(e, t) {
				return t => o.a.createElement(e, t)
			}
		},
		"./src/lib/LinkedListMap/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			class s {
				constructor(e) {
					this.value = e, this.next = void 0, this.prev = void 0
				}
			}
			class o {
				constructor(e) {
					this.key = e, this.tail = void 0, this.head = void 0, this.length = 0, this.itemsByKey = {}
				}
				static fromArray(e, t) {
					const n = new o(t);
					return e.forEach(e => n.push(e)), n
				}
				first() {
					if (this.tail) return this.tail.value
				}
				firstNode() {
					if (this.tail) return this.tail
				}
				forEach(e) {
					let t = this.tail;
					for (; t;) e(t.value), t = t.next
				}
				get(e) {
					const t = this.getNode(e);
					if (t) return t.value
				}
				getNode(e) {
					return this.itemsByKey[e]
				}
				has(e) {
					return e in this.itemsByKey
				}
				insertAfter(e, t) {
					const n = t instanceof s ? t : new s(t),
						o = this.getNode(e);
					if (!o) throw new Error(`Cannot find item with key ${e}`);
					n.prev = o, n.next = o.next, o.next = n, n.next && (n.next.prev = n);
					const r = t instanceof s ? t.value[this.key] : t[this.key];
					this.itemsByKey[r] = n, this.length++
				}
				insertBefore(e, t) {
					const n = t instanceof s ? t : new s(t),
						o = this.getNode(e);
					if (!o) throw new Error(`Cannot find item with key ${e}`);
					n.next = o, n.prev = o.prev, o.prev = n, n.prev && (n.prev.next = n);
					const r = t instanceof s ? t.value[this.key] : t[this.key];
					this.itemsByKey[r] = n, this.length++
				}
				last() {
					if (this.head) return this.head.value
				}
				lastNode() {
					if (this.head) return this.head
				}
				pop() {
					if (!this.head) return;
					return this.removeNode(this.head).value
				}
				push(e) {
					const t = e instanceof s ? e : new s(e);
					t.prev = this.head, this.head ? this.head.next = t : this.tail = t, this.head = t;
					const n = e instanceof s ? t.value[this.key] : e[this.key];
					this.itemsByKey[n] = t, this.length++
				}
				remove(e) {
					const t = this.getNode(e);
					if (t) return this.removeNode(t).value
				}
				removeNode(e) {
					return e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e === this.tail && (this.tail = e.next), e === this.head && (this.head = e.prev), e.next = void 0, e.prev = void 0, this.itemsByKey[e.value[this.key]] = void 0, this.length--, e
				}
				shift() {
					if (!this.tail) return;
					return this.removeNode(this.tail).value
				}
				toArray() {
					const e = [];
					return this.forEach(t => e.push(t)), e
				}
				unshift(e) {
					const t = e instanceof s ? e : new s(e);
					t.next = this.tail, this.tail ? this.tail.prev = t : this.head = t, this.tail = t;
					const n = e instanceof s ? t.value[this.key] : e[this.key];
					this.itemsByKey[n] = t, this.length++
				}
			}
		},
		"./src/lib/browser/isIncognito.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/constants/index.ts");
			const o = 120 * s.fb;
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
						return !e || e <= o
					}
				})()), e
			}
		},
		"./src/lib/combineRefs/index.tsx": function(e, t, n) {
			"use strict";
			t.a = (...e) => t => {
				e.forEach(e => {
					if (e) return "function" == typeof e ? e(t) : void(e.current = t)
				})
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
				d = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/makeRequest/index.ts");
			async function m(e, t) {
				return await Object(u.b)({
					method: l.hb.POST,
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
						return Object(o.a)(Object(r.a)(e, [a.a]), {
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
					}(n())
			}
		},
		"./src/reddit/actions/comment/authoring.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return $
			})), n.d(t, "o", (function() {
				return te
			})), n.d(t, "m", (function() {
				return ne
			})), n.d(t, "q", (function() {
				return re
			})), n.d(t, "t", (function() {
				return ae
			})), n.d(t, "n", (function() {
				return ce
			})), n.d(t, "s", (function() {
				return de
			})), n.d(t, "l", (function() {
				return le
			})), n.d(t, "a", (function() {
				return me
			})), n.d(t, "b", (function() {
				return he
			})), n.d(t, "p", (function() {
				return ge
			})), n.d(t, "f", (function() {
				return fe
			})), n.d(t, "g", (function() {
				return ve
			})), n.d(t, "j", (function() {
				return Ce
			})), n.d(t, "d", (function() {
				return Oe
			})), n.d(t, "c", (function() {
				return je
			})), n.d(t, "i", (function() {
				return Se
			})), n.d(t, "h", (function() {
				return Ie
			})), n.d(t, "k", (function() {
				return Ne
			})), n.d(t, "r", (function() {
				return Me
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
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
				C = n("./src/lib/makeApiRequest/index.ts"),
				x = n("./src/lib/makeGqlRequest/index.ts"),
				O = n("./src/lib/omitHeaders/index.ts"),
				y = n("./src/reddit/constants/headers.ts"),
				E = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				P = n("./src/reddit/helpers/genericServerError/index.ts"),
				j = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				S = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				_ = n("./src/reddit/models/PostCreationForm/index.ts"),
				k = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				w = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const I = (e, t, n, s) => {
					let o, r;
					if (s === _.h.MARKDOWN) o = n.text, r = null;
					else {
						o = null;
						let e = null;
						n.rteState && (e = h.a.toRichTextJSON(n.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(x.a)(e, {
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
					if (r === _.h.MARKDOWN) a.text = n.text;
					else {
						a.text = null;
						let e = null;
						n.rteState && (e = h.a.toRichTextJSON(n.rteState).document), a.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(C.a)(Object(O.a)(e, [y.a]), {
						method: o.hb.POST,
						endpoint: Object(E.a)(Object(k.a)(Object(w.a)(`${e.apiUrl}/api/comment.json`))),
						data: a
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(S.a)(e)
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
			var M = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var T = n("./src/reddit/endpoints/post/index.tsx"),
				A = n("./src/reddit/endpoints/post/convert.ts"),
				R = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				L = n("./src/reddit/featureFlags/index.ts"),
				F = n("./src/reddit/helpers/dom/index.ts"),
				D = n("./src/reddit/helpers/localStorage/index.ts"),
				U = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				B = n("./src/reddit/models/Comment/index.ts"),
				G = n("./src/reddit/models/PostDraft/index.ts"),
				q = n("./src/reddit/models/RichTextJson/index.ts"),
				H = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				W = n("./src/reddit/models/Toast/index.ts"),
				V = n("./src/reddit/selectors/comments.ts"),
				K = n("./src/reddit/selectors/commentSelector.ts"),
				z = n("./src/reddit/selectors/platform.ts"),
				Q = n("./src/reddit/selectors/posts.ts"),
				J = n("./src/reddit/selectors/user.ts"),
				X = n("./src/reddit/actions/comment/index.ts"),
				Z = n("./src/reddit/actions/comment/constants.ts");
			const Y = Object(r.a)(Z.k),
				$ = ({
					hasFocus: e,
					draftKey: t
				}) => async (n, s) => {
					const o = s();
					if (!!o.features.comments.drafts[t])
						if (Object(J.M)(o) && e) {
							const s = Y({
								hasFocus: e,
								draftKey: t
							});
							n(Object(i.f)(s))
						} else n(Y({
							hasFocus: e,
							draftKey: t
						}))
				}, ee = Object(r.a)(Z.H), te = Object(r.a)(Z.J), ne = Object(r.a)(Z.I), se = Object(r.a)(Z.G), oe = (e, t, n, s) => {
					const o = s.ok && s.body,
						r = o && o.comment && o.comment.id;
					U.f(e, n, t, r)
				}, re = "Toxicity_Warning__Modal", ae = (e, t, n, s, o, r) => async (a, i, {
					gqlContext: c
				}) => {
					const l = i(),
						u = Object(z.e)(l);
					let m = "";
					if (u && (m = u.name), L.d.enableToxicityWarning(l)) {
						if (!(await I(c(), m, s, o))) return void a(Object(d.i)(re))
					}
					a(ce(e, t, n, s, o, r))
				}, ie = e => e.rteState ? h.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, ce = (e, t, n, r, a, i, c) => async (u, h, {
					apiContext: f
				}) => {
					u(Object(d.g)(re));
					const v = h(),
						C = v.features.comments.submit.pending[n];
					if (!v.user.account || C) return;
					u(ee({
						draftKey: n,
						draft: r
					}));
					const x = v.user.account.displayText,
						O = r.commentMode;
					let y;
					if (c ? (y = await Object(R.i)(f(), e, r, x), u(Object(m.a)({
							streamId: e,
							level: y.body.automuteLevel
						}))) : y = await N(f(), e, r, x, O), y.ok) {
						let s;
						s = y.body, u(te({
							...s,
							headCommentId: Object(V.w)(v, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const o = Object(Q.F)(h(), {
							postId: e
						});
						u(Object(l.z)(o, g.a.CommentSubmitted))
					} else {
						y.error && y.error.type === o.Gb && U.g(v, ie(r), e);
						const t = y.error && y.error.fields && y.error.fields[0] ? y.error.fields[0].msg : s.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u(se({
							draftKey: n,
							error: y.error
						})), u(Object(b.f)({
							duration: b.a,
							kind: W.b.Error,
							text: t
						}))
					}
					oe(h(), t, a, y), i || Object(p.d)()
				}, de = e => async (t, n, {
					gqlContext: s
				}) => {
					const {
						parentCommentId: o,
						commentsPageKey: r,
						parentCommentDepth: a,
						draftKey: i,
						formData: c,
						editorMode: l
					} = e, u = n(), m = Object(z.e)(u);
					let p = "";
					if (m && (p = m.name), L.d.enableToxicityWarning(u)) {
						if (!(await I(s(), p, c, l))) return void t(Object(d.i)(re))
					}
					t(le({
						commentsPageKey: r,
						draftKey: i,
						parentCommentDepth: a,
						parentCommentId: o,
						formData: c,
						editorMode: l
					}))
				}, le = e => async (t, n, {
					apiContext: s
				}) => {
					const {
						parentCommentId: r,
						commentsPageKey: a,
						parentCommentDepth: i,
						draftKey: c,
						formData: l,
						editorMode: u
					} = e;
					t(Object(d.g)(re));
					const m = n(),
						b = m.features.comments.submit.pending[c];
					if (!m.user.account || b) return;
					t(ee({
						draftKey: c,
						draft: l
					}));
					const h = m.user.account.displayText,
						g = l.commentMode,
						f = await N(s(), r, l, h, g);
					if (f.ok) t(ne({
						...f.body,
						parentCommentId: r,
						commentsPageKey: a,
						draftKey: c,
						depth: i + 1
					}));
					else {
						if (f.error && f.error.type === o.Gb) {
							const e = Object(K.a)(m, {
								commentId: r
							});
							if (!e) return;
							U.g(m, ie(l), e.postId, r)
						}
						t(se({
							draftKey: c,
							error: f.error
						}))
					}
					oe(n(), a, u, f), Object(p.d)()
				}, ue = Object(r.a)(Z.q), me = Object(r.a)(Z.p), pe = Object(r.a)(Z.l), be = (Object(r.a)(Z.g), Object(r.a)(Z.m)), he = (Object(r.a)(Z.t), (e, t, n) => async (o, r, {
					apiContext: a
				}) => {
					const i = e === _.h.RICH_TEXT;
					if (!t || "object" == typeof t && Object(q.G)(t)) o(be({
						editorMode: e,
						draftKey: n,
						content: i ? q.i : ""
					})), o(Object(u.c)(e));
					else {
						o(Object(u.b)(n));
						const r = await Object(A.a)(a(), e, i ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							o(Object(u.a)(n)), o(be({
								editorMode: e,
								draftKey: n,
								content: t
							})), o(Object(u.c)(e))
						} else o(Object(u.a)(n)), o(Object(b.f)({
							duration: b.a,
							kind: W.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), ge = ({
					commentsPageKey: e,
					parentCommentId: t,
					singleOpen: n
				}) => async (s, o) => {
					const r = o(),
						l = Object(a.a)(G.c.replyToComment, t);
					if (!Object(J.K)(o())) return s(Object(c.j)()), void s(Object(d.k)({
						actionSource: d.a.Reply,
						redirectUrl: Object(V.m)(o(), {
							commentId: t
						})
					}));
					const u = r.features.comments.replyFormOpen[e],
						m = u && u[t];
					if ((m || u && n) && (Object.keys(u).forEach(t => u[t] && s(me({
							parentCommentId: t,
							commentsPageKey: e
						}))), m)) return;
					let p = "",
						b = null;
					const h = r.user.prefs.commentMode,
						g = Object(F.d)();
					if (g) {
						const e = g.filter(e => !!e && 10 !== e.charCodeAt(0));
						if (h === _.h.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
						else {
							const t = e.map(e => H.s(e, null)).map(e => H.l([e])),
								n = H.s("", null),
								s = H.l([n]);
							b = {
								document: [H.c(t), s]
							}
						}
					}
					const f = r.features.comments.drafts[l];
					let v;
					if (v = g ? {
							commentMode: h,
							draftType: G.c.replyToComment,
							rtJson: b,
							text: `${p}\n`
						} : f || {
							commentMode: h,
							draftType: G.c.replyToComment,
							rtJson: b,
							text: ""
						}, Object(J.M)(r)) {
						const n = ue({
							parentCommentId: t,
							commentsPageKey: e,
							draftKey: l,
							formData: v
						});
						s(Object(i.f)(n))
					} else s(ue({
						parentCommentId: t,
						commentsPageKey: e,
						draftKey: l,
						formData: v
					}))
				}, fe = e => async t => {
					t(Object(X.p)(e)), t(Oe(e))
				}, ve = ({
					parentCommentId: e,
					commentsPageKey: t
				}) => async n => {
					n(me({
						parentCommentId: e,
						commentsPageKey: t
					})), n(ge({
						parentCommentId: e,
						commentsPageKey: t
					})), n(Object(X.p)({
						commentId: e,
						commentsPageKey: t
					}))
				}, Ce = (e, t) => n => n(pe({
					draftKey: e,
					formData: t
				})), xe = Object(r.a)(Z.s), Oe = ({
					commentId: e,
					commentMode: t,
					commentsPageKey: n,
					draftKey: s,
					text: o
				}) => async (r, a) => {
					const i = a();
					i.user.account && (U.c(i), r(xe({
						commentId: e,
						commentsPageKey: n,
						draftKey: s,
						formData: {
							text: o,
							commentMode: t,
							rteState: null,
							draftType: G.c.edit,
							hasFocus: !0
						}
					})))
				}, ye = Object(r.a)(Z.C), Ee = Object(r.a)(Z.B), Pe = Object(r.a)(Z.D), je = Object(r.a)(Z.h), Se = ({
					id: e,
					commentsPageKey: t,
					depth: n,
					draftKey: s,
					formData: r
				}) => async (n, a, {
					apiContext: i
				}) => {
					const c = a();
					if (!c.user.account) return;
					n(ye({
						draftKey: s
					})), U.d(c);
					const d = c.user.account.displayText || "",
						l = r.commentMode,
						u = await (async (e, t, n, s, r, a) => {
							const i = {
								api_type: "json",
								return_rtjson: !0,
								thing_id: t
							};
							if (a === _.h.MARKDOWN) i.text = s.text;
							else {
								i.text = null;
								let e = null;
								s.rteState && (e = h.a.toRichTextJSON(s.rteState).document), i.richtext_json = JSON.stringify({
									document: e
								})
							}
							return Object(C.a)(Object(O.a)(e, [y.a]), {
								endpoint: Object(E.a)(Object(w.a)(Object(k.a)(`${e.apiUrl}/api/editusertext`))),
								method: o.hb.POST,
								data: i
							}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
								...e,
								ok: !1,
								error: Object(S.a)(e)
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
						})(i(), e, 0, r, d, l);
					if (u.ok) {
						const o = u.body;
						n(Pe({
							commentId: e,
							commentsPageKey: t,
							draftKey: s
						})), n(Object(X.i)({
							[e]: {
								...o.comment
							}
						}))
					} else n(Ee({
						draftKey: s,
						error: u.error
					}))
				}, _e = Object(r.a)(Z.z), ke = Object(r.a)(Z.y), we = Object(r.a)(Z.A), Ie = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const a = s();
					n(_e({
						id: e
					})), U.a(e, a);
					const i = await ((e, t) => Object(C.a)(Object(O.a)(e, [y.a]), {
						endpoint: Object(E.a)(`${e.apiUrl}/api/del`),
						method: o.hb.POST,
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
						error: e.error || Object(P.a)()
					}))(r(), e);
					i.ok ? n(we({
						id: e,
						postId: t
					})) : n(ke({
						id: e,
						error: i.error
					}))
				}, Ne = e => async (t, n, {
					apiContext: s
				}) => {
					const o = !n().features.comments.models[e].sendReplies;
					t(Object(X.i)({
						[e]: {
							sendReplies: o
						}
					})), (await Object(T.q)(s(), e, o)).ok || t(Object(X.i)({
						[e]: {
							sendReplies: !o
						}
					}))
				}, Me = (e, t) => async (n, o, {
					gqlContext: r
				}) => {
					var a, i, c, d, l, u;
					n(Object(X.c)());
					const m = e => Object(b.f)(Object(b.e)(e, W.b.Error));
					if (((null === (i = null === (a = o().pages) || void 0 === a ? void 0 : a.comments) || void 0 === i ? void 0 : i.followed) || []).length === f.a) n(m(s.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const a = t === B.a.FOLLOWED,
							i = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(X.n)(i)), (await ((e, t) => Object(x.a)(e, {
								...M,
								variables: {
									input: t
								}
							}))(r(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(D.pb)(null !== (l = null === (d = null === (c = o().pages) || void 0 === c ? void 0 : c.comments) || void 0 === d ? void 0 : d.followed) && void 0 !== l ? l : [], null === (u = o().user.account) || void 0 === u ? void 0 : u.id);
							const e = a ? s.fbt._("Followed! You’ll receive updates when there’s new activity", null, {
								hk: "1Dp5UH"
							}) : s.fbt._("Unfollowed, You’ll no longer recieve updates on this comment", null, {
								hk: "2fJsVC"
							});
							n(Object(b.f)({
								kind: W.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(X.n)(i)), n(m(s.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				}
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return w
			})), n.d(t, "m", (function() {
				return I
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "h", (function() {
				return A
			})), n.d(t, "l", (function() {
				return D
			})), n.d(t, "q", (function() {
				return U
			})), n.d(t, "j", (function() {
				return B
			})), n.d(t, "g", (function() {
				return G
			})), n.d(t, "f", (function() {
				return q
			})), n.d(t, "o", (function() {
				return V
			})), n.d(t, "p", (function() {
				return K
			})), n.d(t, "d", (function() {
				return z
			})), n.d(t, "a", (function() {
				return J
			})), n.d(t, "b", (function() {
				return X
			})), n.d(t, "n", (function() {
				return Z
			})), n.d(t, "c", (function() {
				return Y
			})), n.d(t, "k", (function() {
				return $
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/telemetry/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/economics/helpers/async.ts"),
				c = n("./src/reddit/actions/economics/powerups/achievements.ts"),
				d = n("./src/reddit/actions/login.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/presence.ts"),
				m = n("./src/reddit/actions/shortcuts/utils.ts"),
				p = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/actions/vote.ts"),
				h = n("./src/reddit/endpoints/comment/index.tsx"),
				g = n("./src/reddit/helpers/commentList/index.ts"),
				f = n("./src/reddit/helpers/trackers/comment.ts"),
				v = n("./src/reddit/models/Comment/index.ts"),
				C = n("./src/reddit/models/Post/index.ts"),
				x = n("./src/reddit/models/Toast/index.ts"),
				O = n("./src/reddit/models/Vote/index.ts"),
				y = n("./src/reddit/selectors/comments.ts"),
				E = n("./src/reddit/selectors/commentSelector.ts"),
				P = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				j = n("./src/reddit/selectors/moderatingComments.ts"),
				S = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/actions/comment/constants.ts");
			const k = {},
				w = Object(a.a)(_.o),
				I = e => async (t, n, {
					apiContext: s
				}) => {
					if (!Object(S.K)(n())) return t(Object(d.j)()), void t(Object(l.k)({
						actionSource: l.a.Save,
						redirectUrl: Object(y.m)(n(), {
							commentId: e
						})
					}));
					const r = n().features.comments.models[e];
					if (!r) return;
					const a = r.isSaved ? h.k : h.g;
					if (t(w({
							[e]: {
								isSaved: !r.isSaved
							}
						})), (await a(s(), e)).ok) {
						const n = r.isSaved ? o.fbt._("Comment unsaved successfully", null, {
								hk: "UGKHZ"
							}) : o.fbt._("Comment saved successfully", null, {
								hk: "1BZqMx"
							}),
							s = o.fbt._("Undo", null, {
								hk: "46OwLP"
							});
						t(Object(p.f)({
							text: n,
							kind: x.b.Undo,
							buttonText: s,
							buttonAction: I(e)
						}))
					} else t(w({
						[e]: {
							isSaved: r.isSaved
						}
					}))
				}, N = e => `viewing-comment-${e}`, M = s.a.telemetry.commentConsumedThreshold, T = e => async (t, n) => {
					const o = n();
					if (!Object(E.a)(o, {
							commentId: e
						}) || Math.random() > s.a.telemetry.commentSampleRate) return;
					f.c({
						state: o,
						commentId: e
					}), r.c.start(N(e));
					const a = setTimeout(() => f.a({
						state: o,
						commentId: e
					}), M);
					k[e] = a
				}, A = (e, t) => async (n, s) => {
					const o = s(),
						a = N(e);
					if (Object(E.a)(o, {
							commentId: e
						}) && r.c.has(a)) {
						const n = r.c.end(a);
						!t && n < M && (clearTimeout(k[e]), delete k[e])
					}
				}, R = Object(a.a)(_.x), L = Object(a.a)(_.w), F = Object(a.a)(_.v), D = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const r = s(),
						a = r.moreComments.models[t],
						d = r.platform.currentPage,
						l = d && d.routeMatch,
						m = l && l.match,
						{
							partialPostId: p
						} = m ? m.params : null;
					if (!p) return;
					const b = Object(C.s)(p);
					n(R({
						moreCommentsId: a.id
					}));
					const f = await Object(h.e)(o(), b, {
						token: a.token
					}, Object(P.a)(r));
					if (f.ok) {
						const t = f.body,
							s = Object(g.a)(t, b, r);
						n(L({
							key: e,
							moreCommentsItem: a,
							shouldCollapse: s,
							...t
						}));
						const o = r.posts.models[b];
						let d;
						o && "subreddit" === o.belongsTo.type && t.comments && (d = o.belongsTo.id, await n(Object(i.a)({
							commentIds: Object.keys(f.body.comments),
							postIds: [o.id],
							skip: ["communityDetails", "subscription"],
							subredditId: d
						})));
						const l = f.body.comments,
							m = f.body.posts;
						await n(Object(u.b)(m, l, d)), await n(Object(c.b)(d, l))
					} else n(F({
						moreCommentsItem: a,
						...f.error
					}))
				}, U = Object(b.a)(g.b, O.a.upvoted), B = Object(b.a)(g.b, O.a.downvoted), G = Object(a.a)(_.j), q = Object(a.a)(_.i), H = Object(a.a)(_.e), W = Object(a.a)(_.f), V = (Object(a.a)(_.c), Object(a.a)(_.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: n
				}) => async (s, o) => {
					const r = o(),
						a = Object(v.h)(e),
						i = Object(y.n)(r, {
							commentLink: a,
							commentsPageKey: t
						}),
						c = Object(j.b)(r, {
							commentId: e,
							commentsPageKey: t
						}),
						d = i.depth;
					s(H({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: c
					})), c || 0 !== d || n(e, !0), Object(m.d)()
				}), K = ({
					commentId: e,
					commentsPageKey: t
				}) => async n => {
					n(W({
						commentId: e,
						commentsPageKey: t
					}))
				}, z = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: n,
					scrollToAndRemeasure: s
				}) => async (o, r) => {
					const a = r(),
						i = Object(g.e)(t, e, n, a),
						c = Object(j.b)(a, {
							commentId: e.id,
							commentsPageKey: t
						});
					o(H({
						commentId: i,
						commentsPageKey: t,
						isCollapsed: c
					})), 0 === n && s(i, !0), Object(m.d)()
				}, Q = Object(a.a)(_.r), J = e => t => t(Q({
					draftKey: e
				})), X = Object(a.a)(_.a), Z = Object(a.a)(_.E), Y = Object(a.a)(_.b), $ = Object(a.a)(_.u)
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
			const d = Object(i.a)(c.a),
				l = Object(i.a)(c.b),
				u = Object(i.a)(c.c),
				m = e => async (t, n, {
					apiContext: s
				}) => {
					const o = e && e.includeMemberships || !1,
						i = e && e.forceFetch || !1,
						c = n();
					if (!c.economics.me.fetched || o && !c.economics.me.data.specialMemberships || i) {
						const e = await
						function(e, t) {
							return Object(a.a)(e, {
								method: "get",
								endpoint: `${r.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(s(), o);
						if (e.ok) {
							const n = e.body;
							o && !n.specialMemberships && (n.specialMemberships = {}), t(d(n))
						}
					}
				}, p = () => async (e, t) => {
					const n = t(),
						r = n.economics.me.data;
					if (!r) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(l());
						const t = `https://${r.pointsDocsBaseUrl}v1.json?web`,
							n = await Object(o.b)({
								endpoint: t,
								method: s.hb.GET
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
				d = n("./src/reddit/components/Settings/modalIds.ts"),
				l = n("./src/reddit/helpers/localStorage/index.ts"),
				u = n("./src/reddit/selectors/emailCollection.ts");
			const m = o()(l.d),
				p = () => async (e, t) => {
					const n = t();
					m(), Object(u.a)(n) && (await e(Object(i.x)()), Object(u.a)(t()) && e(Object(a.d)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, b = () => async (e, t) => {
					const n = t();
					Object(u.a)(n) && (Object(l.c)(), e(Object(a.c)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, h = () => async (e, t) => {
					e(Object(r.g)(d.g))
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
				d = n("./src/reddit/models/EmailSettings/index.ts"),
				l = n("./src/reddit/models/Toast/index.ts");
			const u = e => async (t, n, {
				apiContext: o
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
				const c = await ((e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					method: o.hb.POST,
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
					correlationId: Object(r.d)(r.a.GildingFlow),
					thingId: c
				})), Object(a.K)(i) || await t(o.r());
				const d = n();
				if (!Object(a.K)(d)) return t(Object(s.f)())
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
				Object(o.K)(n) || await e(s.r());
				const r = t();
				if (!Object(o.K)(r)) throw new Error("Failed to login")
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
				a = n("./src/reddit/endpoints/gold/productCatalog.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				c = n("./src/lib/initializeClient/installReducer.ts"),
				d = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(c.a)({
				features: {
					avatar: d.a
				}
			});
			const l = Object(o.a)(i.o);
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
				} catch (o) {
					Object(s.b)() || console.error(o), r.c.withScope(e => {
						var t, n;
						e.setExtra("response", o.response), e.setExtra("status", null === (t = o.response) || void 0 === t ? void 0 : t.status), e.setExtra("graphql_error", null === (n = o.response) || void 0 === n ? void 0 : n.error), r.c.captureException(o)
					})
				}
			}
		},
		"./src/reddit/actions/notificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return C
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/notificationSettingsLayout/constants.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/notificationSettingsLayoutByChannelEndpoint.ts"),
				c = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				d = n("./src/reddit/models/Toast/index.ts");
			const l = Object(o.a)(r.c),
				u = Object(o.a)(r.b),
				m = Object(o.a)(r.a),
				p = Object(o.a)(r.f),
				b = Object(o.a)(r.e),
				h = Object(o.a)(r.d),
				g = e => async (t, n, {
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
										o = [];
									const r = e => {
										const {
											rowIds: r,
											rowsCollection: a
										} = function(e) {
											const t = [],
												n = {};
											if (e.rows)
												for (let s = 0; s < e.rows.length; s++) {
													const o = e.rows[s],
														r = o.messageType;
													t.push(r), n[r] = o
												}
											return {
												rowsCollection: n,
												rowIds: t
											}
										}(e);
										s = {
											...s,
											...a
										}, o = [...o, ...r];
										const i = e.id;
										n.push(i), t[i] = {
											...e,
											rows: r
										}
									};
									for (let a = 0; a < e.length; a++) r(e[a]);
									return {
										sections: {
											byId: t,
											allIds: n
										},
										rows: {
											byId: s,
											allIds: o
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
			const f = Object(o.a)(r.g),
				v = e => async (t, n, {
					gqlContext: o
				}) => {
					(await Object(i.b)(o(), e)).ok ? (C(t, e), function(e) {
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

			function C(e, t) {
				e(f({
					isEnabled: t.isEnabled,
					messageType: t.messageType
				}))
			}
		},
		"./src/reddit/actions/notifications/state.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/notifications/constants.ts"),
				o = n("./src/reddit/actions/notifications/utils.ts");
			s.a.Default;
			const r = {
				denied: s.a.Denied,
				granted: s.a.Granted
			};
			const a = new class {
					constructor() {
						this.isInitializing = !1, this.isReady = !1, this.isSubscriptionActive = !1, this.permission = s.a.Default, this.listeners = new Set, this.initialize = async e => {
							if (this.isReady || this.isInitializing) return;
							await Object(o.a)(e) === s.c.NotificationsSupported && (this.isInitializing = !0, await this.subscribeToPermissionsChange(), await this.updateIsSubscriptionEnabled(), this.isInitializing = !1, this.isReady = !0, this.notifyAll())
						}, this.updatePermission = () => {
							this.permission = r[Notification.permission] || s.a.Default
						}, this.updateIsSubscriptionEnabled = async () => {
							const e = await window.navigator.serviceWorker.getRegistrations();
							for (const t of e) {
								if (await t.pushManager.getSubscription()) return void(this.isSubscriptionActive = !0)
							}
						}, this.recalculate = async () => {
							this.isReady && (this.updatePermission(), await this.updateIsSubscriptionEnabled(), this.notifyAll())
						}, this.getCurrentState = () => {
							return {
								isEnabled: this.isSubscriptionActive && this.permission === s.a.Granted,
								isSubscriptionActive: this.isSubscriptionActive,
								permission: this.permission
							}
						}, this.subscribe = e => {
							this.listeners.has(e) || this.listeners.add(e), this.isReady && e(this.getCurrentState())
						}, this.unsubscribe = e => {
							this.listeners.delete(e)
						}
					}
					async subscribeToPermissionsChange() {
						if (!window.navigator.permissions || !window.navigator.permissions.query) return;
						const e = await window.navigator.permissions.query({
							name: "notifications"
						});
						this.updatePermission(), e.onchange = () => {
							this.updatePermission(), this.notifyAll()
						}
					}
					notifyAll() {
						this.isReady && this.listeners.forEach(e => {
							e(this.getCurrentState())
						})
					}
				},
				i = (a.subscribe, a.unsubscribe, a.initialize),
				c = a.recalculate
		},
		"./src/reddit/actions/notifications/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/lib/notifications/constants.ts"),
				o = n("./src/lib/notifications/featureFlags.ts"),
				r = n("./src/reddit/featureFlags/index.ts");
			const a = e => r.d.pushNotificationsBrowserSupported(e) ? Object(o.a)() : s.c.BrowserUnsupported
		},
		"./src/reddit/actions/notificationsInbox/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return M
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "b", (function() {
				return U
			})), n.d(t, "f", (function() {
				return B
			})), n.d(t, "c", (function() {
				return G
			})), n.d(t, "a", (function() {
				return q
			})), n.d(t, "h", (function() {
				return W
			})), n.d(t, "i", (function() {
				return V
			})), n.d(t, "g", (function() {
				return z
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				a = (n("./src/reddit/actions/notificationSettingsLayout/index.ts"), n("./src/reddit/actions/notificationsInbox/constants.ts")),
				i = n("./src/reddit/actions/tabBadging.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				l = n("./src/redditGQL/operations/BlockAwarder.json");
			var u = (e, t) => Object(d.a)(e, {
					...l,
					variables: t
				}),
				m = n("./src/redditGQL/operations/DeleteInboxNotifications.json");
			n("./src/reddit/endpoints/notificationSettingsLayoutByChannelEndpoint.ts");
			var p = n("./src/lib/constants/index.ts"),
				b = n("./src/lib/makeApiRequest/index.ts"),
				h = n("./src/lib/omitHeaders/index.ts"),
				g = n("./src/redditGQL/operations/NotificationInboxFeed.json"),
				f = n("./src/redditGQL/operations/NotificationInboxFeedSlimmed.json"),
				v = n("./src/reddit/constants/headers.ts"),
				C = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var x;
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(x || (x = {}));
			var O = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				y = n("./src/redditGQL/operations/UpdateInboxActivitySeenState.json");
			var E = n("./src/reddit/helpers/trackers/inbox.ts"),
				P = n("./src/reddit/models/Badge/index.ts"),
				j = n("./src/reddit/models/NotificationInbox/index.ts"),
				S = n("./src/reddit/models/Toast/index.ts"),
				_ = n("./src/reddit/selectors/appBadges.ts"),
				k = (n("./src/reddit/selectors/notificationPrefs.ts"), n("./src/reddit/selectors/notificationsInbox.tsx"));
			const w = Object(o.a)(a.e),
				I = Object(o.a)(a.b),
				N = Object(o.a)(a.a),
				M = e => async (t, n, {
					gqlContext: s
				}) => {
					var o, r;
					const a = n(),
						i = Object(k.a)(a);
					t(w());
					const l = await ((e, t) => Object(d.a)(e, {
						...g,
						variables: t
					}))(s(), e);
					if (null === (r = null === (o = l.error) || void 0 === o ? void 0 : o.fields) || void 0 === r ? void 0 : r.length) return t(N({
						error: l.error
					})), void t(Object(c.d)());
					const u = l && l.body,
						m = A(u);
					if (null === i) {
						const e = Object(k.f)(a);
						t(L(m.nodes, e.length))
					}
					t(I(m))
				}, T = () => async (e, t, {
					gqlContext: n
				}) => {
					var s, o;
					const r = await (e => Object(d.a)(e, {
						...f
					}))(n());
					if (null === (o = null === (s = r.error) || void 0 === s ? void 0 : s.fields) || void 0 === o ? void 0 : o.length) return;
					const a = r && r.body,
						i = R(a).nodes.filter(e => !e.viewedAt);
					i.length && i.forEach(e => {
						var n;
						Object(E.l)({
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
									d = c.getDate(),
									l = c.getMonth(),
									u = c.getFullYear();
								if ((d !== r || l !== a || u !== i) && !n) {
									n = ((t || 0) + s).toString()
								} else s++
							}
							return n
						})(e, t);
					a && a !== r && n(F({
						index: a
					}))
				}, F = Object(o.a)(a.g), D = (Object(o.a)(a.h), Object(o.a)(a.f)), U = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = [e];
					if ((await ((e, t) => Object(d.a)(e, {
							...m,
							variables: {
								input: t
							}
						}))(o(), {
							notificationIds: r
						})).ok) {
						t(D({
							id: e
						}));
						const o = Object(k.f)(n());
						t(L(o)), t(Object(c.f)(Object(c.e)(s.fbt._("Notification hidden", null, {
							hk: "1jfPqO"
						}), S.b.SuccessCommunityGreen)))
					} else t(Object(c.f)(Object(c.e)(s.fbt._("Failed to hide notification, please try again.", null, {
						hk: "fL7uB"
					}), S.b.Error)))
				}, B = (e, t) => async (n, o, {
					gqlContext: r
				}) => {
					if (!e) return;
					const a = () => {
						const n = s.fbt._("Success! You won't see notifications from this community in the future.", null, {
							hk: "2tkhbk"
						});
						return Object(c.f)(Object(c.e)(n, S.b.Undo, s.fbt._("Undo", null, {
							hk: "4zFGDk"
						}), ((e, t) => async (n, o, {
							gqlContext: r
						}) => {
							if (!e) return;
							(await Object(O.b)(r(), e, {
								isSubredditUpdatesInterestingPostEnabled: !0,
								isUpdateFromSubredditEnabled: !0
							})).ok ? (t && t(), n(Object(c.f)(Object(c.e)(s.fbt._("Success! Undone hiding notifications from this community.", null, {
								hk: "1na0NP"
							}), S.b.SuccessCommunityGreen)))) : n(Object(c.f)(Object(c.e)(s.fbt._("Failed to undo hiding notifications, please try again.", null, {
								hk: "4jo7Pf"
							}), S.b.Error)))
						})(e, t)))
					};
					(await Object(O.b)(r(), e, {
						isSubredditUpdatesInterestingPostEnabled: !1,
						isUpdateFromSubredditEnabled: !1
					})).ok ? n(a()) : n(Object(c.f)(Object(c.e)(s.fbt._("Failed to hide notifications, please try again.", null, {
						hk: "KEGcB"
					}), S.b.Error)))
				}, G = e => async (t, n, {
					apiContext: o
				}) => {
					if (!e) return;
					(await ((e, t) => Object(b.a)(Object(h.a)(e, [v.a]), {
						endpoint: Object(C.a)(`${e.apiUrl}/api/sendreplies`),
						method: p.hb.POST,
						data: {
							id: t
						}
					}))(o(), e)).ok ? t(Object(c.f)(Object(c.e)(s.fbt._("Success! You won't see updates on this in the future", null, {
						hk: "wtDa4"
					}), S.b.SuccessCommunityGreen))) : t(Object(c.f)(Object(c.e)(s.fbt._("Failed to turn off updates on this, please try again", null, {
						hk: "1zhpEy"
					}), S.b.Error)))
				}, q = e => async (t, n, {
					gqlContext: o
				}) => {
					if (!e) return;
					(await u(o(), {
						awardingId: e
					})).ok ? t(Object(c.f)(Object(c.e)(s.fbt._("Success! Awarder has been blocked", null, {
						hk: "2D5PUk"
					}), S.b.SuccessCommunityGreen))) : t(Object(c.f)(Object(c.e)(s.fbt._("Failed to block awarder, please try again", null, {
						hk: "2dxeA8"
					}), S.b.Error)))
				}, H = Object(o.a)(a.d), W = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					let a;
					if (t === j.a.CommentReply || t === j.a.PostReply || t === j.a.PrivateMessage || t === j.a.UsernameMention) {
						if ((a = await ((e, t) => Object(b.a)(Object(h.a)(e, [v.a]), {
								endpoint: Object(C.a)(`${e.apiUrl}/api/read_message`),
								method: p.hb.POST,
								data: {
									id: t
								}
							}))(o(), e)).ok) {
							let e = Object(_.a)(s());
							if (e > 0) {
								e--;
								const t = Object(r.e)({
									count: e,
									key: P.c.ActivityTab
								});
								n(Object(r.a)(t)), n(Object(i.e)())
							}
						}
					} else a = await ((e, t) => Object(b.a)(Object(h.a)(e, [v.a]), {
						endpoint: Object(C.a)(`${e.apiUrl}/api/read_notification`),
						method: p.hb.POST,
						data: {
							id: t
						}
					}))(o(), e);
					if (a.ok) {
						const t = (new Date).toISOString();
						n(H({
							id: e,
							now: t
						}))
					}
				}, V = () => async (e, t, {
					gqlContext: n
				}) => {
					const s = (new Date).toLocaleDateString(),
						o = await ((e, t) => Object(d.a)(e, {
							...y,
							variables: {
								input: t
							}
						}))(n(), {
							lastSentAt: s
						});
					if (o.ok) {
						const t = o.body,
							n = t && t.data && t.data.updateInboxActivitySeenState && t.data.updateInboxActivitySeenState.badgeIndicators;
						n && (e(Object(r.a)(n)), e(Object(i.d)()))
					}
				}, K = Object(o.a)(a.c), z = () => async (e, t, {
					apiContext: n
				}) => {
					const {
						notificationsInbox: {
							markAllAsReadTimestamp: o
						}
					} = t(), a = new Date;
					if (!o || a.getTime() - new Date(o).getTime() > 15e3) {
						if ((await ((e, t) => Object(b.a)(Object(h.a)(e, [v.a]), {
								endpoint: Object(C.a)(`${e.apiUrl}/api/read_all_messages`),
								method: p.hb.POST,
								data: {
									filter_types: null == t ? void 0 : t.join(",")
								}
							}))(n(), [x.Activity, x.Messages])).ok) {
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
							})), e(K({
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
			var s = n("./src/reddit/actions/users.ts"),
				o = n("./src/reddit/selectors/user.ts"),
				r = n("./src/reddit/actions/login.ts");
			t.a = () => async (e, t) => {
				await e(Object(s.r)()), Object(o.K)(t()) || e(Object(r.h)())
			}
		},
		"./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				o = n("./src/reddit/actions/users.ts"),
				r = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				Object(r.K)(t()) || await e(Object(o.r)()), await e(Object(s.b)()).then(() => {
					if (t().economics.me.data) return e(Object(s.a)())
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
					const d = (n.routeMatch.match.params || {}).subredditName;
					if (d) {
						const n = [],
							l = t();
						Object(c.K)(l) || n.push(e(Object(a.r)()));
						const u = Object(s.a)(d, null);
						n.push(e(Object(r.subredditDataRequested)(u, d, {}))), await Promise.all(n);
						const m = Object(i.D)(t(), d);
						await e(Object(o.a)({
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
				o = n("./src/reddit/actions/gold/powerups.ts"),
				r = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/subreddit.ts"),
				i = n("./src/reddit/actions/users.ts"),
				c = n("./src/reddit/selectors/moderatorPermissions.ts"),
				d = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				if (e(Object(r.l)({
						title: Object(s.f)()
					})), await e(Object(i.r)()), !Object(d.K)(t())) return;
				await e(Object(a.q)());
				const n = Object(c.a)(t());
				n && n.length && await e(Object(o.d)(n))
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
				d = n("./src/reddit/models/PostCreationForm/index.ts"),
				l = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(o.a)(m.C),
				b = Object(o.a)(m.p),
				h = Object(o.a)(m.M),
				g = (e, t, n) => async (o, i, {
					apiContext: g
				}) => {
					c.i(i(), t);
					const v = t === d.h.MARKDOWN,
						C = t === d.h.RICH_TEXT,
						x = m.k;
					if (v && Object(l.G)(n)) return o(h({
						editorKey: e,
						editorMode: d.h.MARKDOWN,
						content: ""
					})), void o(f(t));
					if (C && !n) return o(h({
						editorKey: e,
						editorMode: d.h.RICH_TEXT,
						content: l.i
					})), void o(f(t));
					o(p(x));
					const O = await Object(a.a)(g(), t, v ? JSON.stringify(n) : n);
					O.ok ? (o(b(x)), o(h({
						editorKey: e,
						editorMode: t,
						content: O.body.output
					})), o(f(t))) : (o(b(x)), o(Object(r.f)({
						duration: r.a,
						kind: u.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, f = e => async (t, n) => {
					const o = Object(i.m)();
					if (o >= 3) return;
					const a = n().user.prefs.useMarkdown ? d.h.MARKDOWN : d.h.RICH_TEXT;
					if (e === a) return;
					const c = e === d.h.MARKDOWN ? s.fbt._("You can set Markdown as the default editor mode in the settings", null, {
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
					})), Object(i.mb)(o + 1)
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
				c = e => async (t, n, {
					apiContext: s
				}) => {
					const r = await Object(o.a)(s(), e);
					r && r.ok ? t(a({
						streamId: e,
						level: r.body.data.auto_mute_status.level
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
					const g = document.activeElement,
						f = h.shortcuts.activeCommentId,
						v = Object(p.c)(h);
					if (g && "true" === g.contentEditable && f && v) n(o.a({
						parentCommentId: f,
						commentsPageKey: v
					})), Object(p.a)(f);
					else if (Object(l.b)(h)) Object(p.b)(i.b), n(Object(r.i)(Object(l.b)(h)));
					else if (h.toaster[0]) Object(p.b)(i.b), n(Object(a.g)(h.toaster[0].id));
					else if (h.shortcuts.namespace === i.d.Lightbox && h.platform.currentPage) {
						const e = h.platform.currentPage.locationState.closeLocation;
						e && (Object(p.b)(i.b), n(Object(s.b)(e)))
					}
					const {
						activePostId: C
					} = h.shortcuts;
					e(t && C ? c.b(C, "close", !0) : d.a)
				}
		},
		"./src/reddit/actions/shortcuts/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			}));
			var s = n("./src/reddit/constants/shortcuts.ts"),
				o = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				r = n("./src/reddit/helpers/routeKey/index.ts");
			const a = e => {
					const t = e.platform.currentPage;
					if (!t || !t.routeMatch) return;
					const n = t.routeMatch,
						s = Object(o.a)(e);
					return Object(r.b)(n, e, s)
				},
				i = e => {
					const t = document.getElementById(e);
					t && t.focus()
				},
				c = e => {
					const t = document.getElementById(e),
						n = window.scrollX,
						s = window.scrollY;
					t && (t.focus(), window.scrollTo(n, s))
				},
				d = () => {
					c(s.b)
				}
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			var s = n("./src/telemetry/index.ts"),
				o = n("./src/reddit/actions/login.ts"),
				r = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const l = () => async (e, t) => {
				const n = t();
				Object(s.a)(Object(c.c)(n)), e(Object(a.r)({
					forceFetch: !0
				})), await e(Object(r.g)(i.a.SNOOVATAR_MODAL))
			}, u = e => async (t, n) => {
				const a = n();
				Object(s.a)(Object(c.a)(e)(a)), Object(d.K)(a) ? await t(Object(r.h)(i.a.SNOOVATAR_MODAL)) : await t(Object(o.h)())
			}
		},
		"./src/reddit/actions/userFlair/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return o
			})), n.d(t, "e", (function() {
				return r
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
			const o = Object(s.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairChanged)),
				r = Object(s.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleUserFlairInSubreddit)),
				a = Object(s.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleAssignOwnFlairPermission)),
				i = Object(s.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.saveUserFlairTemplate)),
				c = Object(s.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.deleteUserFlairTemplate)),
				d = Object(s.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.reorderUserFlairTemplates)),
				l = Object(s.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairLoadedAndModalOpened))
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
				d = n("./src/lib/addQueryParams/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/lib/makeActionCreator/index.ts"),
				b = n("./src/reddit/actions/sso/constants.ts");
			const h = Object(p.a)(b.a),
				g = Object(p.a)(b.b);
			var f = n("./src/reddit/actions/toaster.ts"),
				v = n("./src/reddit/components/TrackingHelper/index.tsx"),
				C = n("./src/reddit/constants/accountManager.ts"),
				x = n("./src/reddit/constants/history.ts"),
				O = n("./src/reddit/constants/listings.ts"),
				y = n("./src/reddit/constants/modals.ts"),
				E = n("./src/reddit/constants/parameters.ts"),
				P = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				j = n("./src/reddit/helpers/history/index.ts"),
				S = n("./src/reddit/helpers/trackers/onboarding.ts"),
				_ = n("./src/reddit/icons/svgs/Close/index.tsx"),
				k = n("./src/reddit/models/Sso/index.ts"),
				w = n("./src/reddit/models/Toast/index.ts"),
				I = n("./src/reddit/selectors/accountManager.ts"),
				N = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				M = n("./src/reddit/selectors/telemetry.ts"),
				T = n("./src/reddit/selectors/user.ts"),
				A = n("./src/reddit/components/AccountManagerModal/IFrame/index.m.less"),
				R = n.n(A);
			const L = l.a.iframe("IFrame", R.a),
				F = l.a.button("CloseButton", R.a),
				D = l.a.wrapped(_.a, "Close", R.a),
				U = Object(c.c)({
					accountManagerSrc: I.c,
					actionSource: I.a,
					frontpageSignupVariant: N.a,
					isLoggedIn: T.K,
					redirectUrl: I.b
				}),
				B = Object(i.b)(U, (e, t) => ({
					oniFrameLoaded: (t, n) => {
						e((e, s) => {
							t.contentWindow.postMessage({
								events: {
									...Object(M.defaults)(s()),
									actionSource: n
								},
								type: "eventData"
							}, Object(P.a)())
						})
					},
					onTwoFactorChanged: () => e(Object(m.x)(!1)),
					onSSOLinkSuccess: (t, n, s) => {
						e(h({
							linkedIdentity: n
						})), e(Object(u.g)(s)), e(Object(f.f)(Object(f.e)(t, w.b.SuccessCommunity)))
					},
					onSSOUnlinkSuccess: (t, n, s) => {
						e(g({
							linkedIdentity: n
						})), e(Object(u.g)(s)), e(Object(f.f)(Object(f.e)(t, w.b.SuccessCommunity)))
					},
					showToast: (t, n) => {
						e(Object(f.f)(Object(f.e)(t, n)))
					}
				})),
				G = ({
					data: e,
					origin: t
				}) => e && e.success && (e.type === C.a.ChangePassword || e.type === C.a.Close || e.type === C.a.CreateAccount || e.type === C.a.GoogleOneTapDisplayed || e.type === C.a.GoogleOneTapFlowFailed || e.type === C.a.GoogleOneTapSkipped || e.type === C.a.Login || e.type === C.a.PreferenceStatus || e.type === C.a.Register || e.type === C.a.Resize || e.type === C.a.ShowStep || e.type === C.a.SSOLinkFail || e.type === C.a.SSOLinkSuccess || e.type === C.a.SSOUnlinkFail || e.type === C.a.SSOUnlinkSuccess || e.type === C.a.Subscribe || e.type === C.a.TwoFactorChanged) && t === s.a.accountManagerOrigin,
				q = {
					"select-account": "link_account",
					"confirm-otp": "link_account_otp",
					"confirm-password": "link_account_password"
				};
			class H extends a.a.Component {
				constructor() {
					super(...arguments), this.iframeRef = a.a.createRef(), this.isAccountCreated = !1, this.trackResizing = !0, this.currentStep = null, this.state = {
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
						const t = e === k.a.Apple ? y.a.LINK_APPLE_SSO : y.a.LINK_GOOGLE_SSO;
						this.props.onSSOLinkSuccess(o.fbt._("Account connected", null, {
							hk: "2X2Y2n"
						}), e, t)
					}, this.handleUnlinkSSOSuccess = e => {
						const t = e === k.a.Apple ? y.a.UNLINK_APPLE_SSO : y.a.UNLINK_GOOGLE_SSO;
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
						if (this.iframeRef.current && e.source === this.iframeRef.current.contentWindow && G(e))
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
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : (Object(j.a)(x.a.JustLoggedIn, !0), window.location.reload(!0))
					}, this.onChangePassword = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : window.location.reload(!0)
					}, this.onSignUp = (e, t) => {
						let n = "";
						if (this.props.redirectUrl) n = this.props.redirectUrl;
						else if ("/" !== window.location.pathname) n = window.location.href;
						else {
							const s = 0;
							n = (e || t && t.length || 0) > s ? O.c[O.b.Home] : O.c[O.b.Popular]
						}
						this.redirectTo(n)
					}, this.onShowStep = e => {
						this.currentStep = e, e === C.b.Subscribe && (this.trackResizing = !1, this.setIframeStyles({
							height: void 0,
							width: void 0
						})), this.props.onShowScreen && this.props.onShowScreen(e)
					}, this.onGoogleOneTapFlowFailed = e => {
						this.close(), this.props.showToast(e || o.fbt._("Something went wrong. Please try again later", null, {
							hk: "3TdJZE"
						}), w.b.Error)
					}, this.onEmailDigestsStatus = e => {
						e ? this.props.showToast(o.fbt._("Changes saved", null, {
							hk: "6bifV"
						}), w.b.SuccessCommunity) : this.props.showToast(o.fbt._("Something went wrong. Please try again later", null, {
							hk: "1M3Z2N"
						}), w.b.Error)
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.onGoogleOneTapUIViewed && this.props.onGoogleOneTapUIViewed()
					}, this.redirectTo = e => {
						window.location.replace(Object(d.a)(e, {
							[E.o]: "true"
						}))
					}, this.closedByUser = () => {
						if (this.currentStep) {
							const e = q[this.currentStep];
							e && this.props.sendEvent(Object(S.d)(e))
						}
						this.close()
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
					}
				}
				componentDidMount() {
					this.iframeRef.current && (this.iframeRef.current.onload = () => {
						this.props.oniFrameLoaded(this.iframeRef.current, this.props.actionSource), this.focusFirstVisibleIframeInput()
					}, this.props.setRef && this.props.setRef(this.iframeRef), this.props.exposeIFrameElement && this.props.exposeIFrameElement(this.iframeRef.current)), window.addEventListener("message", this.onMessage)
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
						className: t,
						showCloseButton: n
					} = this.props, {
						iframeStyles: s
					} = this.state;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(L, {
						className: t,
						innerRef: this.iframeRef,
						src: e,
						style: s,
						onLoad: this.onIFrameLoad
					}), n && a.a.createElement(F, {
						onClick: this.closedByUser
					}, a.a.createElement(D, null)))
				}
			}
			t.a = B(Object(v.c)(H))
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
					[e.showSuspended]: !!t.showSuspended
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
				popupContainer: "_13Vg6OZEIy5AcJ_DOw6jK0"
			}
		},
		"./src/reddit/components/AppRouter/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Qu
			}));
			var s, o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/isEqual.js"),
				a = n.n(r),
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
				C = n("./src/lib/constants/index.ts"),
				x = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				O = n("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				y = n("./src/lib/fastdom/index.ts"),
				E = n("./src/lib/FocusTrap/index.ts"),
				P = n("./src/lib/isEqualWithoutKey/index.ts"),
				j = n("./src/lib/isSimpleClick/index.ts"),
				S = n("./src/reddit/actions/header.ts"),
				_ = n("./src/reddit/actions/survey/index.ts"),
				k = n("./src/reddit/components/EmailCollection/Banner/Loader.ts"),
				w = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				I = n("./node_modules/polished/dist/polished.es.js"),
				N = n("./node_modules/react-motion/lib/react-motion.js"),
				M = n("./src/lib/lessComponent.tsx"),
				T = n("./src/reddit/components/AccountManagerModal/IFrame/index.tsx"),
				A = n("./src/reddit/components/TrackingHelper/index.tsx"),
				R = n("./src/reddit/constants/accountManager.ts"),
				L = n("./src/reddit/helpers/trackers/onboarding.ts"),
				F = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				D = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				U = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				B = n("./src/config.ts"),
				G = n("./src/reddit/components/Carousel/index.m.less"),
				q = n.n(G);
			! function(e) {
				e.Fade = "fade", e.Slide = "slide"
			}(s || (s = {}));
			class H extends m.a.Component {
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
						src: `${B.a.assetPath}/${e}`,
						style: t
					}), this.renderItem = (e, t) => {
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
								backgroundImage: `url("${B.a.assetPath}/${e.img}")`,
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
			const K = M.a.div("Container", V.a),
				z = M.a.wrapped(H, "Carousel", V.a),
				Q = M.a.div("Phone", V.a),
				J = M.a.img("Frame", V.a),
				X = `${B.a.assetPath}/img/frontpage-signup/android-frame.png`,
				Z = `${B.a.assetPath}/img/frontpage-signup/iphone-frame.png`,
				Y = [{
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
						items: Y,
						itemTime: 5e3,
						itemWidth: 240
					}), m.a.createElement(J, {
						src: X
					})), m.a.createElement(Q, {
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
			const se = M.a.div("Container", ne.a),
				oe = M.a.span("Disclaimer", ne.a),
				re = M.a.a("Link", ne.a);
			var ae = e => m.a.createElement(se, {
					className: e.className
				}, m.a.createElement(re, {
					href: "https://about.reddit.com"
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
					href: "https://about.reddit.com/careers/"
				}, o.fbt._("careers", null, {
					hk: "1nRiZW"
				})), m.a.createElement(re, {
					href: "https://www.reddithelp.com"
				}, o.fbt._("help", null, {
					hk: "3CJ8k2"
				})), m.a.createElement(re, {
					href: "https://about.reddit.com/press/"
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
				ge = M.a.button("NotReady", ce.a),
				fe = M.a.span("NotReadyText", ce.a),
				ve = M.a.wrapped(F.a, "NotReadyIcon", ce.a),
				Ce = Object(x.a)(e => {
					const {
						className: t,
						containerRef: n,
						frontpageSignupVariant: s,
						onCloseClick: r,
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
						className: Object(v.a)({
							[ce.a.fields]: Object(U.b)(s)
						}),
						path: R.c.Register,
						uiMode: R.d.Embed
					}))), m.a.createElement(ge, {
						onClick: r,
						style: {
							"--frontpagesignup-upsell-text-hover-color": Object(I.j)(.8, i)
						}
					}, m.a.createElement(fe, null, o.fbt._("Not ready to sign up yet?", null, {
						hk: "5RIgO"
					})), m.a.createElement(ve, null)), m.a.createElement(pe, null)))
				});
			class xe extends m.a.Component {
				componentDidUpdate(e) {
					this.props.scrollTo !== e.scrollTo && window.scrollTo({
						top: this.props.scrollTo
					})
				}
				render() {
					return null
				}
			}
			class Oe extends m.a.Component {
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
					}, this.renderScroller = ({
						scrollTo: e
					}) => m.a.createElement(xe, {
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
					return m.a.createElement(m.a.Fragment, null, m.a.createElement(Ce, {
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
			var ye = Object(A.c)(Oe),
				Ee = n("./node_modules/js-cookie/src/js.cookie.js"),
				Pe = n.n(Ee),
				je = n("./src/lib/localStorageAvailable/index.ts"),
				Se = n("./src/reddit/actions/modal.ts"),
				_e = n("./src/higherOrderComponents/makeAsync.tsx"),
				ke = Object(_e.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("BadgePurchaseModal").then(n.bind(null, "./src/reddit/components/Badges/PurchaseModal/index.tsx")).then(e => e.default)
				}),
				we = n("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx"),
				Ie = n("./src/higherOrderComponents/asModal/index.tsx"),
				Ne = n("./src/reddit/controls/Button/index.tsx"),
				Me = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Te = n("./src/reddit/selectors/activeModalId.ts"),
				Ae = n("./src/reddit/components/DownToChatBanner/DownToChatPendingModal/index.m.less"),
				Re = n.n(Ae);
			const {
				fbt: Le
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Fe = M.a.button("CloseButton", Re.a), De = M.a.wrapped(Me.a, "Close", Re.a), Ue = M.a.div("Container", Re.a), Be = M.a.p("Description", Re.a), Ge = M.a.div("Footer", Re.a), qe = M.a.h3("Heading", Re.a), He = M.a.img("SnooImage", Re.a), We = M.a.div("Wrapper", Re.a), Ve = Object(f.c)({
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
					return m.a.createElement(We, null, m.a.createElement(Ue, null, m.a.createElement(qe, null, Le._("Ok, looking for people now...", null, {
						hk: "2fr3Y9"
					})), m.a.createElement(Be, null, Le._("You’ll be redirected to your chat room shortly.", null, {
						hk: "4tpnrt"
					})), m.a.createElement(He, {
						src: `${B.a.assetPath}/img/magnifying-glass-snoo.png`
					})), m.a.createElement(Ge, null, m.a.createElement(Ne.i, {
						onClick: this.onCloseButtonClick
					}, Le._("Sounds good", null, {
						hk: "1OMLn5"
					}))), m.a.createElement(Fe, {
						onClick: this.onCloseButtonClick
					}, m.a.createElement(De, null)))
				}
			}
			var ze = Object(p.b)(Ve, e => ({
					modalToggled: t => e(Object(Se.i)(t))
				}))(Object(Ie.a)(Object(A.c)(Ke))),
				Qe = n("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx"),
				Je = n("./src/lib/loadWithRetries/index.ts");
			var Xe = Object(_e.a)({
				getComponent: () => Object(Je.a)(() => n.e("NotificationsPrePromptLoader").then(n.bind(null, "./src/reddit/components/NotificationsPrePrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			const Ze = () => null;
			var Ye = Object(_e.a)({
					ErrorComponent: Ze,
					getComponent: () => Object(Je.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("ModQueuePages~ModerationPages"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"))).then(e => e.default),
					LoadingComponent: Ze
				}),
				$e = n("./src/reddit/actions/structuredStyles/index.ts"),
				et = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				tt = n("./src/reddit/constants/modals.ts"),
				nt = n("./src/reddit/controls/TextButton/index.tsx"),
				st = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: ot
			} = n("./node_modules/fbt/lib/FbtPublic.js"), rt = Object(p.b)(null, (e, {
				subredditId: t
			}) => ({
				closeModal: () => {
					e(Object(Se.i)(tt.a.BLADE_NIGHTMODE)), e(Object($e.f)())
				},
				openBlade: () => {
					e(Object($e.e)(t))
				}
			}));
			var at = Object(Ie.a)(rt(e => m.a.createElement(et.d, null, m.a.createElement(et.h, null, m.a.createElement(st.a, null, m.a.createElement(et.p, null, ot._("Turning off Night Mode", null, {
					hk: "2XW7Rk"
				})), m.a.createElement(nt.a, {
					onClick: e.closeModal
				}, m.a.createElement(et.b, null)))), m.a.createElement(et.k, null, m.a.createElement(et.n, null, ot._("In order to continue styling your community, Night Mode must be turned off.", null, {
					hk: "2qLSfr"
				}))), m.a.createElement(et.f, null, m.a.createElement(et.a, {
					onClick: e.closeModal,
					"data-redditstyle": !0
				}, ot._("Cancel", null, {
					hk: "2TSLl5"
				})), m.a.createElement(et.q, {
					onClick: e.openBlade,
					"data-redditstyle": !0
				}, ot._("Continue", null, {
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
				gt = n("./src/reddit/layout/row/Inline/index.tsx"),
				ft = n("./src/reddit/models/Flair/index.ts"),
				vt = n("./src/reddit/models/User/index.ts"),
				Ct = n("./src/reddit/selectors/authorFlair.ts"),
				xt = n("./src/reddit/selectors/experiments/econ/index.ts"),
				Ot = n("./src/reddit/selectors/gold/powerups/index.ts"),
				yt = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Et = n("./src/reddit/selectors/telemetry.ts"),
				Pt = n("./src/reddit/selectors/user.ts"),
				jt = n("./src/reddit/selectors/userFlair.ts"),
				St = n("./src/reddit/components/UserFlairPicker/index.m.less"),
				_t = n.n(St);
			const kt = e => e.inContextAuthor && e.currentUser && Object(vt.e)(e.currentUser) === e.inContextAuthor.username,
				wt = e => e.authorFlair || kt(e) && e.userFlairData.applied || null,
				It = M.a.wrapped(gt.a, "Section", _t.a),
				Nt = M.a.div("CheckboxText", _t.a);
			class Mt extends m.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.track = e => this.props.sendEvent(t => ({
						source: "user_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(Et.subredditById)(t, this.props.subredditId)
					})), this.setSelectedFlair = e => this.setState({
						previewFlair: e
					}), this.onApply = () => {
						const {
							props: e,
							state: t
						} = this, n = t.previewFlair ? t.previewFlair.templateId : void 0;
						e.activeFlairChanged(t.previewFlair, n, t.showFlair, e.inContextAuthor), this.props.isComingFromAchievementsModal ? e.openAchiementFlairModal() : e.closeModal(), this.track(this.getTrackingNoun("flairadd_mod", "flairadd_user"))
					}, this.onClear = () => this.setSelectedFlair(null), this.onToggleShowFlair = () => {
						this.setState({
							showFlair: !this.state.showFlair
						})
					}, this.state = {
						previewFlair: wt(e),
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
					} = e.displaySettings, r = this.state.showFlair !== o, a = wt(this.props);
					if (!s.canUserChange) return r;
					const {
						canSave: i,
						reason: c
					} = Object(bt.b)(n, t, a);
					return !(i || c !== bt.a.NoChanges || !r) || i
				}
				render() {
					const {
						props: e,
						state: t
					} = this, {
						userFlairData: n,
						subredditId: s
					} = e, r = n.permissions.canUserChange, a = n.permissions.canUserChange, i = this.props.isComingFromAchievementsModal, {
						templates: c,
						templateIds: d
					} = n, l = this.canSave(), u = kt(e);
					return m.a.createElement(ut.a, null, m.a.createElement(lt.a, {
						onClosePressed: e.closeModal,
						title: o.fbt._("Select your community flair", null, {
							hk: "199vaD"
						})
					}), m.a.createElement(mt.a, {
						flair: t.previewFlair,
						flairTemplateType: ft.d.UserFlair,
						placeholderText: o.fbt._("u/username", null, {
							hk: "2EDH9"
						})
					}), a && m.a.createElement(pt.a, {
						flair: t.previewFlair,
						flairTemplateType: ft.d.UserFlair,
						subredditId: s,
						templates: c,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), u && m.a.createElement(It, null, m.a.createElement(ht.a, {
						isSelected: t.showFlair,
						onClick: this.onToggleShowFlair,
						text: m.a.createElement(Nt, null, o.fbt._("Show my user flair on this community", null, {
							hk: "x9nc9"
						}))
					})), m.a.createElement("div", {
						className: _t.a.buttonsRow
					}, i && m.a.createElement(Ne.q, {
						className: _t.a.goBackButton,
						priority: Ne.b.Plain,
						onClick: e.openAchiementFlairModal
					}, o.fbt._("Go Back", null, {
						hk: "4fisFS"
					})), m.a.createElement("div", {
						className: _t.a.rightSideButtons
					}, r && m.a.createElement(Ne.l, {
						className: _t.a.clearButton,
						onClick: this.onClear
					}, o.fbt._("Clear Flair", null, {
						hk: "23i2at"
					})), m.a.createElement(Ne.i, {
						disabled: !l,
						onClick: this.onApply
					}, o.fbt._("Apply", null, {
						hk: "ZvO9n"
					})))))
				}
			}
			const Tt = Object(p.b)(() => Object(f.c)({
				authorFlair: Ct.b,
				currentUser: Pt.j,
				inContextAuthor: Ct.c,
				isMod: (e, t) => !!Object(yt.l)(e, t),
				userFlairData: jt.c,
				isComingFromAchievementsModal: (e, t) => Object(Ot.f)(e, {
					subredditId: t.subredditId
				}) && Object(xt.g)(e)
			}), (e, t) => ({
				activeFlairChanged: (n, s, o, r) => e(Object(dt.f)(n, s, o, r.username, t.subredditId)),
				closeModal: () => e(Object(it.b)({
					username: null,
					subredditId: null
				})),
				openAchiementFlairModal: () => e(Object(ct.e)())
			}))(Mt);
			var At = Object(Ie.a)(Object(A.c)(Tt)),
				Rt = n("./src/reddit/selectors/bannedUser.ts"),
				Lt = n("./src/reddit/selectors/muted.ts"),
				Ft = n("./src/reddit/selectors/notificationPrefs.ts"),
				Dt = n("./src/reddit/selectors/platform.ts"),
				Ut = n("./src/reddit/selectors/removalReasons.ts"),
				Bt = n("./src/reddit/constants/cookie.ts"),
				Gt = n("./src/reddit/featureFlags/index.ts"),
				qt = n("./src/reddit/helpers/localStorage/index.ts"),
				Ht = n("./src/reddit/helpers/toggleBodyScroll/index.ts");
			const Wt = Object(f.c)({
				activeModalId: Te.a,
				authorContext: Ct.c,
				badgePurchaseModalIsOpen: Object(Te.b)(tt.a.BADGE_PURCHASE),
				banContext: Rt.a,
				banModalIsOpen: Object(Te.b)(tt.a.BAN_USER),
				bladeNightmodeModalIsOpen: Object(Te.b)(tt.a.BLADE_NIGHTMODE),
				currentBadgePurchase: e => e.products.currentlyPurchasing,
				downToChatPendingModalIsOpen: Object(Te.b)(tt.a.DOWN_TO_CHAT_PENDING_MODAL),
				introModalFeatureEnabled: e => Gt.d.introModal(e),
				isOverlayOpen: Dt.h,
				moderatorPermissions: e => {
					const t = Object(Dt.c)(e);
					if (t) return e.moderatingSubreddits[t]
				},
				muteContext: Lt.a,
				muteModalIsOpen: Object(Te.b)(tt.a.MUTE_USER),
				notificationsPrePromptIsOpen: Ft.d,
				removalReasonContext: Ut.b,
				removalReasonModalIsOpen: Object(Te.b)(tt.a.ADD_REMOVAL_REASON),
				subredditId: Dt.c,
				userFlairModalIsOpen: Object(Te.b)(tt.a.USER_FLAIR_MODAL_ID),
				userHasSeenRedesignModal: Pt.x,
				userInRedesignBeta: Pt.E,
				userIsLoggedIn: Pt.K,
				userIsMod: Pt.L,
				userIsNew: Pt.N
			});
			class Vt extends m.a.Component {
				constructor(e) {
					super(e), this.state = {
						domReady: !1
					}
				}
				conditionalModalCheck() {
					if (!Object(je.a)()) return; {
						const e = Pe.a.get(Bt.a);
						e && Pe.a.remove(Bt.a, {
							domain: B.a.cookieDomain
						});
						const t = Object(qt.C)(tt.a.ALPHA_CONSUMER);
						t && Object(qt.X)(tt.a.ALPHA_CONSUMER), (e || t) && Object(qt.Bb)(tt.a.REDESIGN_MODAL, !0)
					}
					const {
						userHasSeenRedesignModal: e,
						markRedesignModalAsClosed: t
					} = this.props, n = Object(qt.C)(tt.a.REDESIGN_MODAL);
					!e && n ? t() : e && !n && Object(qt.Bb)(tt.a.REDESIGN_MODAL, !0)
				}
				componentDidMount() {
					this.conditionalModalCheck(), this.setState({
						domReady: !0
					})
				}
				componentDidUpdate() {
					this.conditionalModalCheck(), tt.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(Ht.a)(), 500) : setTimeout(() => Object(Ht.b)(), 500))
				}
				render() {
					const {
						authorContext: e,
						badgePurchaseModalIsOpen: t,
						banContext: n,
						banModalIsOpen: s,
						bladeNightmodeModalIsOpen: o,
						currentBadgePurchase: r,
						downToChatPendingModalIsOpen: a,
						muteContext: i,
						muteModalIsOpen: c,
						notificationsPrePromptIsOpen: d,
						removalReasonContext: l,
						removalReasonModalIsOpen: p,
						sendEvent: b,
						subredditId: h,
						toggleBanModal: g,
						toggleMuteModal: f,
						toggleRemovalReasonsModal: v,
						userFlairModalIsOpen: C
					} = this.props, x = (e, t, n) => s => () => b(o => ({
						source: e,
						action: "click",
						noun: s,
						comment: n && Object(Et.comment)(o, n),
						post: n && Object(Et.post)(o, n),
						screen: Object(Et.screen)(o),
						subreddit: Object(Et.subredditById)(o, t)
					}));
					return m.a.createElement(u.Fragment, null, s && n && m.a.createElement(we.a, {
						contextId: n.contextId,
						subredditId: n.subredditId,
						toggleModal: g,
						trackAddEvent: x("banned", n.subredditId, n.contextId)("add_in_context"),
						trackEventWithName: x("banned", n.subredditId, n.contextId),
						username: n.username
					}), c && i && m.a.createElement(Qe.a, {
						contextId: i.contextId,
						subredditId: i.subredditId,
						toggleModal: f,
						trackAddEvent: x("muted", i.subredditId, i.contextId)("add_in_context"),
						username: i.username
					}), p && l && m.a.createElement(Ye, {
						itemIds: l.itemIds,
						subredditId: l.subredditId,
						toggleModal: v,
						trackClick: x("removal_reasons", l.subredditId, 1 === l.itemIds.length ? l.itemIds[0] : void 0)
					}), o && h && m.a.createElement(at, {
						subredditId: h
					}), C && e && e.subredditId && m.a.createElement(At, {
						subredditId: e.subredditId,
						withOverlay: !0
					}), t && r && m.a.createElement(ke, {
						withOverlay: !0,
						productId: r
					}), d && m.a.createElement(Xe, null), a && m.a.createElement(ze, {
						withOverlay: !0
					}))
				}
			}
			var Kt = Object(p.b)(Wt, e => ({
					markRedesignModalAsClosed: () => e(Object(Se.j)()),
					toggleBanModal: () => e(Object(Se.i)(tt.a.BAN_USER)),
					toggleBladeNightmodeModal: () => e(Object(Se.i)(tt.a.BLADE_NIGHTMODE)),
					toggleMuteModal: () => e(Object(Se.i)(tt.a.MUTE_USER)),
					toggleRemovalReasonsModal: () => e(Object(Se.i)(tt.a.ADD_REMOVAL_REASON))
				}))(Object(A.c)(Vt)),
				zt = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				Qt = n("./src/reddit/constants/experiments.ts"),
				Jt = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Xt = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				Zt = n("./src/reddit/selectors/responsiveSettings.ts"),
				Yt = n("./src/reddit/components/AccountManagerModal/index.m.less"),
				$t = n.n(Yt);
			const en = M.a.div("Overlay", $t.a),
				tn = M.a.div("IframeContainer", $t.a),
				nn = {},
				sn = Object(Jt.t)(),
				on = Object(f.c)({
					frontpageSignupVariant: U.a,
					isResponsiveSettingsEnabled: Zt.a
				}),
				rn = {
					[R.c.ChangePassword]: tt.a.CHANGE_PASSWORD_MODAL_ID,
					[R.c.Index]: tt.a.LOGIN_MODAL_ID,
					[R.c.Register]: tt.a.REGISTER_MODAL_ID,
					[R.c.EnableTwoFactor]: tt.a.ENABLE_TWO_FACTOR,
					[R.c.DisableTwoFactor]: tt.a.DISABLE_TWO_FACTOR,
					[R.c.TwoFactorBackupCodes]: tt.a.TWO_FACTOR_BACKUP_CODES,
					[R.c.LinkAppleSSO]: tt.a.LINK_APPLE_SSO,
					[R.c.UnlinkAppleSSO]: tt.a.UNLINK_APPLE_SSO,
					[R.c.LinkGoogleSSO]: tt.a.LINK_GOOGLE_SSO,
					[R.c.UnlinkGoogleSSO]: tt.a.UNLINK_GOOGLE_SSO,
					[R.c.GoogleOneTap]: tt.a.GOOGLE_ONE_TAP_MODAL_ID,
					[R.c.Onboarding]: tt.a.ONBOARDING_MODAL_ID
				};
			class an extends m.a.Component {
				constructor() {
					super(...arguments), this.subscriptions = [], this.state = {
						containerSize: null,
						isSSOLinkActionFailedModal: !1,
						removeGoogleOneTapStyles: !1,
						removeHiddenOverlay: !1
					}, this.closeModal = () => {
						this.props.closeModal(this.props.path), this.props.path === R.c.Register && Object(U.f)(this.props.frontpageSignupVariant) && Xt.a.throttleFeature(Qt.wb), this.props.sendEvent(Object(L.a)(this.subscriptions))
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
					} = this.state, c = Object(U.c)(e) || Object(U.d)(e), d = s === R.c.LinkAppleSSO || s === R.c.LinkGoogleSSO || s === R.c.UnlinkAppleSSO || s === R.c.UnlinkGoogleSSO, l = s === R.c.GoogleOneTap, u = Object(v.a)({
						[$t.a.small]: c,
						[$t.a.ssoConfirmPassword]: d,
						[$t.a.linkActionSSOFail]: r,
						[$t.a.mResponsive]: t,
						[$t.a.mGoogleOneTap]: l && !a
					}), p = Object(v.a)({
						[$t.a.mGoogleOneTap]: l && !a,
						[$t.a.mHiddenOverlay]: l && !i
					}), b = !c && !r && !t;
					return m.a.createElement(en, {
						className: p
					}, m.a.createElement(tn, {
						className: u,
						style: o || nn
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
			const cn = sn(Object(p.b)(on, (e, t) => ({
				closeModal: t => {
					e(Object(Se.g)(rn[t]))
				}
			}))(Object(A.c)(an)));
			Object(zt.b)(tt.a.CHANGE_PASSWORD_MODAL_ID, e => m.a.createElement(cn, {
				path: R.c.ChangePassword
			})), Object(zt.b)(tt.a.LOGIN_MODAL_ID, e => m.a.createElement(cn, {
				path: R.c.Index
			})), Object(zt.b)(tt.a.ONBOARDING_MODAL_ID, e => m.a.createElement(cn, {
				path: R.c.Onboarding
			})), Object(zt.b)(tt.a.ENABLE_TWO_FACTOR, e => m.a.createElement(cn, {
				path: R.c.EnableTwoFactor
			})), Object(zt.b)(tt.a.DISABLE_TWO_FACTOR, e => m.a.createElement(cn, {
				path: R.c.DisableTwoFactor
			})), Object(zt.b)(tt.a.TWO_FACTOR_BACKUP_CODES, e => m.a.createElement(cn, {
				path: R.c.TwoFactorBackupCodes
			})), Object(zt.b)(tt.a.REGISTER_MODAL_ID, e => m.a.createElement(cn, {
				path: R.c.Register
			})), Object(zt.b)(tt.a.LINK_APPLE_SSO, e => m.a.createElement(cn, {
				path: R.c.LinkAppleSSO
			})), Object(zt.b)(tt.a.LINK_GOOGLE_SSO, e => m.a.createElement(cn, {
				path: R.c.LinkGoogleSSO
			})), Object(zt.b)(tt.a.UNLINK_APPLE_SSO, e => m.a.createElement(cn, {
				path: R.c.UnlinkAppleSSO
			})), Object(zt.b)(tt.a.UNLINK_GOOGLE_SSO, e => m.a.createElement(cn, {
				path: R.c.UnlinkGoogleSSO
			})), Object(zt.b)(tt.a.GOOGLE_ONE_TAP_MODAL_ID, e => m.a.createElement(cn, {
				path: R.c.GoogleOneTap
			}));
			n("./src/reddit/components/CoinPurchaseModal/async.tsx");
			const dn = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestPendingModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx")).then(e => e.default)
			});
			Object(zt.b)(tt.a.CONTRIBUTOR_REQUEST_PENDING, e => m.a.createElement(dn, {
				withOverlay: !0
			}));
			const ln = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestRequestModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx")).then(e => e.default)
			});
			Object(zt.b)(tt.a.CONTRIBUTOR_REQUEST, e => m.a.createElement(ln, {
				withOverlay: !0
			}));
			const un = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("RequestToJoinPrivateSubredditModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestToJoinPrivateSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(zt.b)(tt.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT, e => m.a.createElement(un, {
				withOverlay: !0
			}));
			const mn = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CrowdControlModal").then(n.bind(null, "./src/reddit/components/CrowdControlModal/index.tsx")).then(e => e.default)
			});
			Object(zt.b)(tt.a.CROWD_CONTROL, e => m.a.createElement(mn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/async.tsx"), n("./src/reddit/components/Econ/ClaimFreeAwardModal/async.tsx"), n("./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsSuccess/async.tsx"), n("./src/reddit/components/Econ/TopAwardersModal/async.tsx");
			const pn = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("SubredditPremiumBadgeManagement").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx")).then(e => e.default)
			});
			Object(zt.b)(tt.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT, e => m.a.createElement(pn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const bn = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("SubredditPremiumUploadModal")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/UploadModal/index.tsx")).then(e => e.default)
			});
			Object(zt.b)(tt.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, e => m.a.createElement(bn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const hn = Object(_e.a)({
					getComponent: () => Object(Je.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("FramedGild~GildModal"), n.e("GildModal")]).then(n.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				gn = e => () => {
					e()
				};
			Object(zt.b)(tt.a.GOLD_GILD_MODAL, e => m.a.createElement(hn, {
				onOverlayClick: gn(e),
				withOverlay: !0
			}));
			var fn = n("./src/reddit/components/Gold/GildAnimationOverlay/index.tsx"),
				vn = n("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				Cn = n.n(vn);
			const xn = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => {
					return document.createElement("img").src = fn.SPARKLE_ASSET_PATH, document.createElement("img").src = fn.STARBURST_ASSET_PATH, Promise.resolve().then(n.bind(null, "./src/reddit/components/Gold/GildAnimationOverlay/index.tsx")).then(e => e.default)
				}
			});
			Object(zt.b)(tt.a.GOLD_GILD_ANIMATION_OVERLAY, e => m.a.createElement(xn, {
				withOverlay: !0,
				className: Cn.a.modalBody,
				overlayClassName: Cn.a.modalOverlay
			}));
			const On = Object(_e.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("GoldTargetedOfferModal").then(n.bind(null, "./src/reddit/components/Gold/TargetedOfferModal/index.tsx")).then(e => e.default)
				}),
				yn = e => () => {
					e()
				};
			Object(zt.b)(tt.a.GOLD_TARGETED_OFFER_MODAL, e => m.a.createElement(On, {
				onOverlayClick: yn(e),
				withOverlay: !0
			}));
			const En = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("HarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(zt.b)(tt.a.HARBERGER_TAX_BANNER_MANAGE, e => m.a.createElement(En, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Pn = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("HarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(zt.b)(tt.a.HARBERGER_TAX_BANNER_PURCHASE, e => m.a.createElement(Pn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const jn = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CryptoHarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(zt.b)(tt.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE, e => m.a.createElement(jn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Sn = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CryptoHarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(zt.b)(tt.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE, e => m.a.createElement(Sn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const _n = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("GovernanceReleaseNotesModal")]).then(n.bind(null, "./src/reddit/components/Governance/ReleaseNotesModal/index.tsx")).then(e => e.default)
			});
			Object(zt.b)(tt.a.GOVERNANCE_RELEASE_NOTES, e => m.a.createElement(_n, {
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/TransactionModals/BurnPointsModal/async.tsx"), n("./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx");
			const kn = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceTransferPointsModal").then(n.bind(null, "./src/reddit/components/Governance/TransferPointsModal/index.tsx")).then(e => e.default)
			});
			Object(zt.b)(tt.a.TRANSFER_POINTS, e => m.a.createElement(kn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const wn = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx")).then(e => e.default)
			});
			Object(zt.b)(tt.a.WALLET_REGISTRATION_MODAL, e => m.a.createElement(wn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const In = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ModToMemberShareModal").then(n.bind(null, "./src/reddit/components/ModToMemberShareModal/index.tsx")).then(e => e.default)
			});
			Object(zt.b)(tt.a.MOD_TO_MEMBER_SHARE, e => m.a.createElement(In, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Nn = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditAddSubredditModal").then(n.bind(null, "./src/reddit/components/MultiredditAddSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(zt.b)(tt.a.MULTIREDDIT_ADD_SUBREDDIT, e => m.a.createElement(Nn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Mn = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditCreateModal").then(n.bind(null, "./src/reddit/components/MultiredditCreateModal/index.tsx")).then(e => e.default)
			});
			Object(zt.b)(tt.a.MULTIREDDIT_CREATE, e => m.a.createElement(Mn, {
				onOverlayClick: e,
				withOverlay: !0
			})), Object(zt.b)(tt.a.MULTIREDDIT_DUPLICATE, e => m.a.createElement(Mn, {
				isDuplicateModal: !0,
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Tn = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditEditModal").then(n.bind(null, "./src/reddit/components/MultiredditEditModal/index.tsx")).then(e => e.default)
			});
			Object(zt.b)(tt.a.MULTIREDDIT_EDIT, e => m.a.createElement(Tn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/PostFlowUpsellModal/async.tsx"), n("./src/reddit/components/PowerupsSidebar/SupportersListModal/async.tsx");
			const An = () => null,
				Rn = Object(_e.a)({
					ErrorComponent: An,
					getComponent: () => Object(Je.a)(() => n.e("GlobalModalContainer").then(n.bind(null, "./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx"))).then(e => e.default),
					LoadingComponent: An
				});
			Object(zt.b)(tt.a.PINNED_POSTS_LIMIT_REACHED, e => m.a.createElement(Rn, null));
			var Ln = n("./src/reddit/components/ShortcutIndexModal/index.m.less"),
				Fn = n.n(Ln);
			const {
				fbt: Dn
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Un = M.a.h2("ColumnLabel", Fn.a), Bn = M.a.wrapped(gt.a, "ColumnWrapper", Fn.a), Gn = M.a.div("Column", Fn.a), qn = M.a.div("Description", Fn.a), Hn = M.a.div("Key", Fn.a), Wn = M.a.wrapped(et.k, "ModalMain", Fn.a), Vn = M.a.wrapped(et.d, "ModalBody", Fn.a), Kn = M.a.wrapped(Ne.i, "PrimaryButton", Fn.a), zn = M.a.wrapped(nt.a, "TextButton", Fn.a), Qn = Object(p.b)(null, e => ({
				closeModal: () => e(Object(Se.i)(tt.a.KEYBOARD_SHORTCUTS))
			})), Jn = M.a.wrapped(Object(Ie.a)(Qn(e => m.a.createElement(Vn, {
				onClick: e => e.stopPropagation()
			}, m.a.createElement(et.h, null, m.a.createElement(st.a, null, m.a.createElement(et.p, null, Dn._("Keyboard Shortcuts", null, {
				hk: "zoWU1"
			})), m.a.createElement(zn, {
				onClick: e.closeModal
			}, m.a.createElement(et.b, null)))), m.a.createElement(Wn, null, m.a.createElement(Bn, null, m.a.createElement(Gn, null, m.a.createElement(gt.a, null, m.a.createElement(Un, null, Dn._("Navigation", null, {
				hk: "3zSWEe"
			}))), m.a.createElement(gt.a, null, m.a.createElement(qn, null, Dn._("Show shortcuts", null, {
				hk: "4hXvrI"
			})), m.a.createElement(Hn, null, "Shift + ?")), m.a.createElement(gt.a, null, m.a.createElement(qn, null, Dn._("Next post or comment", null, {
				hk: "1m8s9z"
			})), m.a.createElement(Hn, null, "J")), m.a.createElement(gt.a, null, m.a.createElement(qn, null, Dn._("Previous post or comment", null, {
				hk: "2wzeoq"
			})), m.a.createElement(Hn, null, "K")), m.a.createElement(gt.a, null, m.a.createElement(qn, null, Dn._("Next post in lightbox", null, {
				hk: "1ALR5k"
			})), m.a.createElement(Hn, null, "N")), m.a.createElement(gt.a, null, m.a.createElement(qn, null, Dn._("Previous post in lightbox", null, {
				hk: "2bLo98"
			})), m.a.createElement(Hn, null, "P")), m.a.createElement(gt.a, null, m.a.createElement(qn, null, Dn._("Open post", null, {
				hk: "2wD7mh"
			})), m.a.createElement(Hn, null, "Enter")), m.a.createElement(gt.a, null, m.a.createElement(qn, null, Dn._("Open/close expando", null, {
				hk: "1yDst0"
			})), m.a.createElement(Hn, null, "X")), m.a.createElement(gt.a, null, m.a.createElement(qn, null, Dn._("Go to post link", null, {
				hk: "c0TNr"
			})), m.a.createElement(Hn, null, "L"))), m.a.createElement(Gn, null, m.a.createElement(gt.a, null, m.a.createElement(Un, null, Dn._("Action", null, {
				hk: "3QI6pT"
			}))), m.a.createElement(gt.a, null, m.a.createElement(qn, null, Dn._("Upvote", null, {
				hk: "5i9NP"
			})), m.a.createElement(Hn, null, "A")), m.a.createElement(gt.a, null, m.a.createElement(qn, null, Dn._("Downvote", null, {
				hk: "1ef3YP"
			})), m.a.createElement(Hn, null, "Z")), m.a.createElement(gt.a, null, m.a.createElement(qn, null, Dn._("New post", null, {
				hk: "4dtNWf"
			})), m.a.createElement(Hn, null, "C")), m.a.createElement(gt.a, null, m.a.createElement(qn, null, Dn._("Reply to comment", null, {
				hk: "G8AbT"
			})), m.a.createElement(Hn, null, "R")), m.a.createElement(gt.a, null, m.a.createElement(qn, null, Dn._("Submit comment/post", null, {
				hk: "13agk7"
			})), m.a.createElement(Hn, null, "Ctrl + Enter")), m.a.createElement(gt.a, null, m.a.createElement(qn, null, Dn._("Save", null, {
				hk: "3Dtwo5"
			})), m.a.createElement(Hn, null, "S")), m.a.createElement(gt.a, null, m.a.createElement(qn, null, Dn._("Hide", null, {
				hk: "2Dn9GF"
			})), m.a.createElement(Hn, null, "H")), m.a.createElement(gt.a, null, m.a.createElement(qn, null, Dn._("Open navigation", null, {
				hk: "QdGe2"
			})), m.a.createElement(Hn, null, "Q")), m.a.createElement(gt.a, null, m.a.createElement(qn, null, Dn._("Collapse/expand comment", null, {
				hk: "1FxIUN"
			})), m.a.createElement(Hn, null, "Enter"))))), m.a.createElement(et.f, null, m.a.createElement(Kn, {
				"data-redditstyle": !0,
				onClick: () => {
					e.closeModal()
				}
			}, Dn._("Close", null, {
				hk: "4gbyAA"
			})))))), "ConnectedModal", Fn.a);
			Object(zt.b)(tt.a.KEYBOARD_SHORTCUTS, e => m.a.createElement(Jn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Xn = Object(_e.a)({
					getComponent: () => Object(Je.a)(() => n.e("SnoovatarModal").then(n.bind(null, "./src/reddit/components/SnoovatarModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Zn = e => () => {
					e()
				};
			Object(zt.b)(tt.a.SNOOVATAR_MODAL, e => m.a.createElement(Xn, {
				onOverlayClick: Zn(e),
				withOverlay: !0
			}));
			const {
				fbt: Yn
			} = n("./node_modules/fbt/lib/FbtPublic.js"), $n = Object(f.c)({
				allowNavigationCallback: Dt.a
			}), es = Object(p.b)($n, e => ({
				closeModal: () => e(Object(Se.i)(tt.a.BLADE_UNSAVED_CHANGES)),
				closeBlade: () => e(Object($e.a)())
			}));
			class ts extends m.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.closeBlade(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onCancelClick = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}
				}
				render() {
					return m.a.createElement(et.d, null, m.a.createElement(et.h, null, m.a.createElement(st.a, null, m.a.createElement(et.p, null, Yn._("Discard unsaved changes before leaving?", null, {
						hk: "4qVGC7"
					})), m.a.createElement(nt.a, {
						onClick: this.onCancelClick
					}, m.a.createElement(et.b, null)))), m.a.createElement(et.k, null, m.a.createElement(et.o, null, Yn._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "28O7Pm"
					}))), m.a.createElement(et.f, null, m.a.createElement(et.a, {
						onClick: this.onCancelClick,
						"data-redditstyle": !0
					}, Yn._("Cancel", null, {
						hk: "2TSLl5"
					})), m.a.createElement(et.q, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, Yn._("Discard", null, {
						hk: "1SiwLl"
					}))))
				}
			}
			const ns = Object(Ie.a)(es(ts));
			Object(zt.b)(tt.a.BLADE_UNSAVED_CHANGES, e => m.a.createElement(ns, {
				withOverlay: !0
			}));
			const ss = Object(_e.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Object(Je.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("SubredditWelcomeMessageModal")]).then(n.bind(null, "./src/reddit/components/SubredditWelcomeMessageModal/index.tsx"))).then(e => e.default)
			});
			Object(zt.b)(tt.a.SUBREDDIT_WELCOME_MESSAGE, e => m.a.createElement(ss, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const os = Object(f.c)({
					activeModalId: Te.a
				}),
				rs = Object(p.b)(os, e => ({
					toggleModal: t => e(Object(Se.i)(t))
				})),
				as = 500,
				is = () => {};
			class cs extends m.a.Component {
				constructor() {
					super(...arguments), this.toggleModal = () => {
						this.props.activeModalId && this.props.toggleModal(this.props.activeModalId)
					}
				}
				componentDidUpdate() {
					tt.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(Ht.a)(), as) : setTimeout(() => Object(Ht.b)(), as))
				}
				componentWillUnmount() {
					Object(Ht.b)()
				}
				render() {
					const {
						activeModalId: e
					} = this.props;
					return Object(zt.a)(e)(e ? this.toggleModal : is)
				}
			}
			var ds, ls = rs(cs),
				us = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				ms = n("./src/reddit/actions/page.ts"),
				ps = n("./src/reddit/actions/shortcuts/utils.ts"),
				bs = n("./src/reddit/icons/fonts/index.tsx"),
				hs = n("./src/reddit/selectors/header.ts"),
				gs = n("./src/reddit/selectors/userPrefs.ts"),
				fs = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				vs = n("./src/reddit/components/SEOTitle/index.tsx"),
				Cs = n("./src/reddit/components/SubredditIcon/index.tsx"),
				xs = n("./src/reddit/components/UserIcon/index.tsx"),
				Os = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				ys = n("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				Es = n.n(ys);
			! function(e) {
				e.Acknowledgements = "Acknowledgements", e.All = "All", e.Appeal = "Appeal", e.Category = "Category", e.Coins = "Coins", e.Community = "Community", e.CommunitySearch = "CommunitySearch", e.CreateCommunity = "CreateCommunity", e.CreatePost = "CreatePost", e.DailyCharts = "DailyCharts", e.Employee = "Employee", e.GlobalSearch = "GlobalSearch", e.Geotagging = "Geotagging", e.Home = "Home", e.Inbox = "Inbox", e.ModListing = "ModListing", e.ModMail = "ModMail", e.ModQueue = "ModQueue", e.Multi = "Multi", e.NotificationsInbox = "NotificationsInbox", e.Popular = "Popular", e.Powerups = "Powerups", e.Premium = "Premium", e.PublicAccessNetwork = "PublicAccessNetwork", e.Report = "Report", e.Settings = "Settings", e.SubredditCreation = "SubredditCreation", e.Topic = "Topic", e.Unknown = "Unknown", e.UserDataRequest = "UserDataRequest", e.UserProfile = "UserProfile", e.UserProfileName = "UserProfileName", e.ViewDraft = "ViewDraft"
			}(ds || (ds = {}));
			const Ps = (e, t = !1) => {
				const [n, s] = t && -1 !== e.indexOf("/") ? e.split("/") : [, e];
				return m.a.createElement(m.a.Fragment, null, n && `${n}/`, s && m.a.createElement(vs.b, {
					type: vs.a.HeaderSelector
				}, s))
			};
			var js = n("./src/lib/objectSelector/index.ts"),
				Ss = n("./src/reddit/constants/wiki.ts"),
				_s = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				ks = n("./src/reddit/selectors/subreddit.ts"),
				ws = n("./src/reddit/selectors/topic.ts");
			var Is = Object(js.a)((e, {
					pageLayer: t
				}) => {
					const n = !!e.user.account,
						s = Object(Jt.V)(t);
					switch (s) {
						case "index":
						case "listing":
							return n ? {
								type: ds.Home
							} : {
								type: ds.Popular
							};
						case "modListing":
							return {
								type: ds.ModListing
							};
						case "modQueuePages":
							return {
								type: ds.ModQueue
							};
						case "postCreation":
							return {
								type: ds.CreatePost
							};
						case "postDraft":
							return {
								type: ds.ViewDraft
							};
						case "subredditCreation":
							return {
								type: ds.SubredditCreation
							};
						case "coins":
							return {
								type: ds.Coins
							};
						case "powerups":
							return {
								type: ds.Powerups
							};
						case "premium":
							return {
								type: ds.Premium
							};
						case "acknowledgements":
							return {
								type: ds.Acknowledgements
							};
						case "appeal":
							return {
								type: ds.Appeal
							};
						case "report":
							return {
								type: ds.Report
							};
						case "userDataRequest":
							return {
								type: ds.UserDataRequest
							};
						case "subredditLeaderboard":
							return {
								type: ds.DailyCharts
							};
						case "geotagging":
							return {
								type: ds.Geotagging
							};
						case "notificationsInbox":
							return {
								type: ds.NotificationsInbox
							};
						case "topic": {
							const n = Object(Jt.s)(t),
								s = n && Object(ws.d)(e, n);
							if (s) return {
								type: ds.Topic,
								model: s
							}
						}
					}
					const o = e.user.account;
					if (o) switch (s) {
						case "inboxPages":
							return {
								type: ds.Inbox, model: o
							};
						case "settings":
							return {
								type: ds.Settings, model: o
							}
					}
					const r = Object(Jt.P)(e, {
						pageLayer: t
					});
					if ("all" === r) return {
						type: ds.All
					};
					if ("popular" === r) return {
						type: ds.Popular
					};
					const a = Object(Jt.q)(e, {
						pageLayer: t
					});
					if (a) return "searchResults" === s ? {
						type: ds.CommunitySearch,
						model: a
					} : {
						type: ds.Community,
						model: a
					};
					const i = Object(Jt.d)(e, {
						pageLayer: t
					});
					if (i) return {
						type: ds.Multi,
						model: i
					};
					const c = Object(Jt.j)(e, {
						pageLayer: t
					});
					if (c) return {
						type: ds.UserProfile,
						model: c
					};
					const d = Object(Jt.h)(t);
					if (d) return {
						type: ds.UserProfileName,
						name: `u/${d}`
					};
					if (s && "searchResults" === s) return {
						type: ds.GlobalSearch
					};
					if ("subredditWiki" === s) {
						const n = Object(Jt.n)(e, {
								pageLayer: t
							}) || Ss.e,
							s = Object(ks.y)(e, {
								subredditName: n
							});
						if (s) return {
							type: ds.Community,
							model: s
						}
					}
					return "rpan" === s && Object(_s.a)(e) ? {
						type: ds.PublicAccessNetwork
					} : {
						type: ds.Unknown
					}
				}),
				Ns = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less")),
				Ms = n.n(Ns);

			function Ts() {
				return (Ts = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function As(e) {
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
						className: Object(v.a)(Ms.a.item, e.className, {
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
				})) : m.a.createElement(us.a, Ts({}, s, {
					to: e.to
				})) : m.a.createElement("button", s)
			}
			var Rs = n("./src/reddit/constants/listings.ts"),
				Ls = n("./src/reddit/helpers/getSrCreationEntrypointCopy.ts"),
				Fs = n("./src/reddit/helpers/overlay/index.ts"),
				Ds = n("./src/reddit/routes/modListing/index.ts"),
				Us = n("./src/reddit/routes/powerups/index.ts"),
				Bs = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				Gs = n("./src/reddit/selectors/experiments/srCreationEntrypoints.ts"),
				qs = n("./src/reddit/selectors/multireddit.ts"),
				Hs = n("./src/lib/LinkedListMap/index.ts");

			function Ws() {
				return (Ws = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Vs = Object(f.c)({
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
			var Ks;
			! function(e) {
				e[e.Header = 0] = "Header", e[e.Subreddit = 1] = "Subreddit", e[e.SubredditAutocomplete = 2] = "SubredditAutocomplete", e[e.Profile = 3] = "Profile", e[e.Multi = 4] = "Multi", e[e.GenericClickable = 5] = "GenericClickable", e[e.GenericLink = 6] = "GenericLink", e[e.LoadingState = 7] = "LoadingState", e[e.Category = 8] = "Category", e[e.Action = 9] = "Action"
			}(Ks || (Ks = {}));
			const zs = [e => ({
					id: ds.Employee,
					type: Ks.GenericLink,
					model: {
						url: "/user/reddit/m/employee_subbies/new",
						displayText: "Employee Communities",
						icon: e => m.a.createElement(bs.a, Ws({
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
				Qs = () => [e => ({
					id: ds.All,
					type: Ks.GenericLink,
					model: {
						url: "/r/all/",
						displayText: o.fbt._("All", null, {
							hk: "2M8nEy"
						}).toString(),
						icon: e => m.a.createElement(bs.a, Ws({
							name: "all"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("All", null, {
							hk: "2M8nEy"
						}))
					},
					telemetryNoun: "all"
				})],
				Js = () => [e => ({
					id: "reddit-feeds",
					type: Ks.Header,
					model: {
						displayText: o.fbt._("Feeds", null, {
							hk: "4zvMfr"
						}).toString()
					}
				}), (e, t) => ({
					id: ds.Home,
					type: Ks.GenericLink,
					model: {
						url: "/",
						displayText: o.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => m.a.createElement(bs.a, Ws({
							name: "home"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Home", null, {
							hk: "2u56yo"
						}))
					},
					telemetryNoun: "home"
				}), e => ({
					id: ds.Popular,
					type: Ks.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: o.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(bs.a, Ws({
							name: "popular"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Popular", null, {
							hk: "1op8tD"
						}))
					},
					telemetryNoun: "popular"
				}), ...Qs()],
				Xs = [e => ({
					id: "reddit-feeds",
					type: Ks.Header,
					model: {
						displayText: o.fbt._("Reddit Feeds", null, {
							hk: "3C1mtF"
						}).toString()
					}
				}), () => ({
					id: ds.Home,
					type: Ks.GenericLink,
					model: {
						url: "/",
						displayText: o.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(bs.a, Ws({
							name: "home"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Popular", null, {
							hk: "1op8tD"
						}))
					},
					telemetryNoun: "popular"
				}), ...Qs()],
				Zs = [e => ({
					id: "reddit-other",
					type: Ks.Header,
					model: {
						displayText: o.fbt._("Other", null, {
							hk: "1etY05"
						}).toString()
					}
				}), e => ({
					id: ds.Settings,
					type: Ks.GenericLink,
					model: {
						url: "/settings",
						displayText: o.fbt._("User Settings", null, {
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
						}, o.fbt._("User Settings", null, {
							hk: "36WFGd"
						}))
					},
					telemetryNoun: "settings"
				}), e => ({
					id: ds.Inbox,
					type: Ks.GenericLink,
					model: {
						url: "/message/inbox/",
						displayText: o.fbt._("Messages", null, {
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
						}, o.fbt._("Messages", null, {
							hk: "43DUrY"
						}))
					},
					telemetryNoun: "mail"
				}), e => ({
					id: ds.CreatePost,
					type: Ks.GenericLink,
					model: {
						url: "/submit",
						displayText: o.fbt._("Create Post", null, {
							hk: "dGck6"
						}).toString(),
						icon: e => m.a.createElement(bs.a, Ws({
							name: "add"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Create Post", null, {
							hk: "dGck6"
						}))
					},
					telemetryNoun: "create_post"
				})],
				Ys = [e => ({
					id: ds.Coins,
					type: Ks.GenericLink,
					model: {
						url: "/coins",
						displayText: o.fbt._("Coins", null, {
							hk: "ZFvDU"
						}).toString(),
						icon: e => m.a.createElement(bs.a, Ws({
							name: "coins"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Coins", null, {
							hk: "ZFvDU"
						}))
					},
					telemetryNoun: "coins"
				}), e => ({
					id: ds.Premium,
					type: Ks.GenericLink,
					model: {
						url: "/premium",
						displayText: o.fbt._("Premium", null, {
							hk: "3i2C4T"
						}).toString(),
						icon: e => m.a.createElement(bs.a, Ws({
							name: "premium"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Premium", null, {
							hk: "3i2C4T"
						}))
					},
					telemetryNoun: "premium"
				}), e => ({
					id: ds.Powerups,
					type: Ks.GenericLink,
					model: {
						url: Us.a,
						displayText: o.fbt._("Powerups", null, {
							hk: "w9Ere"
						}).toString(),
						icon: e => m.a.createElement(bs.a, Ws({
							name: "powerup"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Powerups", null, {
							hk: "1f7fL8"
						}))
					},
					telemetryNoun: "powerups"
				})],
				$s = [e => ({
					id: ds.ModQueue,
					type: Ks.GenericLink,
					model: {
						url: "/r/mod/about/modqueue",
						displayText: o.fbt._("Mod Queue", null, {
							hk: "12pTAg"
						}).toString(),
						icon: e => m.a.createElement(bs.a, Ws({
							name: "mod_queue"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Mod Queue", null, {
							hk: "12pTAg"
						}))
					},
					telemetryNoun: "mod_queue"
				}), e => {
					return {
						id: ds.ModMail,
						type: Ks.GenericLink,
						model: {
							url: "https://mod.reddit.com/mail/all",
							displayText: o.fbt._("Modmail", null, {
								hk: "1BtYh4"
							}).toString(),
							icon: e => m.a.createElement(bs.a, Ws({
								name: "mod_mail"
							}, e)),
							text: ({
								className: e
							}) => m.a.createElement("span", {
								className: e
							}, o.fbt._("Modmail", null, {
								hk: "2QQ3dU"
							}))
						},
						telemetryNoun: "modmail_beta"
					}
				}];

			function eo(e, t, n, s, r, a) {
				t.subscriptions.length && (e.push({
					id: "header-subscriptions",
					type: Ks.Header,
					model: {
						displayText: o.fbt._("my communities", null, {
							hk: "2cRte1"
						}).toString()
					}
				}), n && to(e, s, r, a), t.subscriptions.forEach(t => e.push({
					id: "sub" + t.id,
					type: Ks.Subreddit,
					model: t,
					telemetryNoun: "community"
				}))), t.profiles.length && (e.push({
					id: "header-profiles",
					type: Ks.Header,
					model: {
						displayText: o.fbt._("following", null, {
							hk: "1kjEfv"
						}).toString()
					}
				}), t.profiles.forEach(t => e.push({
					id: "pro" + t.id,
					type: Ks.Profile,
					model: t,
					telemetryNoun: "profile"
				})))
			}
			const to = (e, t, n, s) => {
				const r = n === Qt.Dd.Modals,
					a = {
						id: ds.CreateCommunity,
						telemetryNoun: "create_community"
					},
					i = {
						displayText: Object(Ls.a)(t, o.fbt._("Create Community", null, {
							hk: "41sjx"
						}).toString()).toString(),
						icon: e => m.a.createElement(bs.a, Ws({
							name: "add"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, Object(Ls.a)(t, o.fbt._("Create Community", null, {
							hk: "41sjx"
						}).toString()).toString())
					};
				r ? e.push({
					...a,
					type: Ks.GenericClickable,
					model: {
						...i,
						onClick: () => {
							s(Object(Fs.a)("/subreddits/create"))
						}
					}
				}) : e.push({
					...a,
					type: Ks.GenericLink,
					model: {
						...i,
						url: "/subreddits/create"
					}
				})
			};
			var no = n("./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less"),
				so = n.n(no);

			function oo(e) {
				return m.a.createElement("div", {
					className: Object(v.a)(so.a.header, e.className),
					role: "heading"
				}, e.children)
			}
			var ro = n("./src/reddit/actions/subscription/index.ts"),
				ao = n("./src/reddit/helpers/trackers/customFeeds.ts"),
				io = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				co = n.n(io);

			function lo() {
				return (lo = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const uo = Object(f.c)({
					currentUser: Pt.j,
					hideNSFWPref: Pt.C,
					isLoggedIn: Pt.K
				}),
				mo = Object(p.b)(uo, (e, t) => ({
					toggleFavorite: n => {
						switch (n.stopPropagation(), n.preventDefault(), t.type) {
							case Ks.Subreddit:
								e(Object(ro.c)({
									id: t.model.id,
									type: "subreddit"
								}));
								break;
							case Ks.Profile:
								e(Object(ro.c)({
									id: t.model.id,
									type: "profile"
								}));
								break;
							case Ks.Multi:
								e(Object(ro.a)(t.model.url)), t.model.isFavorited ? t.sendEvent(Object(ao.f)(t.model.url)) : t.sendEvent(Object(ao.c)(t.model.url))
						}
					}
				}));
			var po = Object(A.c)(mo((function(e) {
					const t = {
						className: Object(v.a)(co.a.item, e.className, {
							[co.a.mFocused]: !!e.isFocused
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
						case Ks.Subreddit:
							return m.a.createElement(us.a, lo({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(Cs.b, {
								className: co.a.icon,
								shouldHideNsfwIcon: e.hideNSFWPref,
								subredditOrProfile: e.model
							}), m.a.createElement("span", {
								className: co.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(bs.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(v.a)(co.a.favorite, {
									[co.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Ks.SubredditAutocomplete:
							return m.a.createElement(us.a, lo({}, t, {
								"aria-label": e.model.name,
								to: `/r/${e.model.name}/`
							}), m.a.createElement(Cs.b, {
								className: co.a.icon,
								primaryColor: e.model.primaryColor,
								iconUrl: e.model.communityIcon || e.model.icon
							}), m.a.createElement("span", {
								className: co.a.text
							}, e.model.name));
						case Ks.Multi:
							return m.a.createElement(us.a, lo({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement("img", {
								src: e.model.icon,
								className: co.a.customFeedIcon
							}), m.a.createElement("span", {
								className: co.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(bs.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(v.a)(co.a.favorite, {
									[co.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Ks.Profile:
							return m.a.createElement(us.a, lo({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(xs.a, {
								className: co.a.icon,
								iconUrl: e.model.icon.url,
								isNSFW: e.model.isNSFW,
								userName: e.model.name
							}), m.a.createElement("span", {
								className: co.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(bs.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(v.a)(co.a.favorite, {
									[co.a.mFavorite]: !!e.isFavorite
								})
							})))
					}
				}))),
				bo = n("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				ho = n.n(bo);

			function go(e) {
				return m.a.createElement("div", {
					className: e.className
				}, m.a.createElement("div", {
					className: ho.a.header
				}), m.a.createElement("div", {
					className: ho.a.item
				}), m.a.createElement("div", {
					className: ho.a.item
				}), m.a.createElement("div", {
					className: ho.a.item
				}), m.a.createElement("div", {
					className: ho.a.item
				}))
			}
			var fo = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				vo = n("./src/reddit/actions/subreddit.ts"),
				Co = n("./src/reddit/constants/keycodes.ts"),
				xo = n("./src/reddit/helpers/correlationIdTracker.ts"),
				Oo = n("./src/lib/loadableAction/index.ts"),
				yo = n("./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less"),
				Eo = n.n(yo);

			function Po() {
				return (Po = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function jo(e) {
				return e.id === ds.ModMail || e.id === ds.CreateCommunity
			}

			function So(e) {
				const t = new Hs.a("id");
				return e.forEach(e => {
					(function(e) {
						return e.type !== Ks.Header && e.type !== Ks.LoadingState
					})(e) && t.push({
						id: e.id
					})
				}), t
			}
			const _o = Object(f.c)({
					favoriteMultireddits: e => new Set(e.subscriptions.favoriteMultiOrder),
					favoriteProfiles: e => new Set(e.subscriptions.favoriteProfileOrder),
					favoriteSubreddits: e => new Set(e.subscriptions.favoriteSubredditOrder),
					unfilteredListBuilder: e => t => {
						const n = Vs(e),
							s = new Hs.a("id"),
							r = Object(Pt.hb)(e),
							a = Object(Gs.b)(e),
							i = Object(Gs.a)(e);
						if (n.account) {
							const c = n.account;
							(n.favoriteSubreddits.length || n.favoriteProfiles.length || n.favoriteMultireddits.length) && (s.push({
								id: "header-favorites",
								type: Ks.Header,
								model: {
									displayText: o.fbt._("favorites", null, {
										hk: "4Gg0k2"
									}).toString()
								}
							}), n.favoriteSubreddits.forEach(e => s.push({
								id: "fav" + e.id,
								type: Ks.Subreddit,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteProfiles.forEach(e => s.push({
								id: "fav" + e.id,
								type: Ks.Profile,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteMultireddits.forEach(e => s.push({
								id: "fav" + e.url,
								type: Ks.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), n.multisPending && s.push({
								id: "multis-pending",
								type: Ks.LoadingState,
								model: {
									displayText: ""
								}
							}), n.moderatingSubredditsPending ? s.push({
								id: "moderatingSubreddits-pending",
								type: Ks.LoadingState,
								model: {
									displayText: ""
								}
							}) : n.moderatingSubreddits.length && (s.push({
								id: "header-moderating",
								type: Ks.Header,
								model: {
									displayText: o.fbt._("moderating", null, {
										hk: "2du7dx"
									}).toString()
								}
							}), c.isMod && $s.forEach(e => s.push(e(c))), s.push({
								id: ds.ModListing,
								type: Ks.GenericLink,
								model: {
									url: Ds.a,
									displayText: "r/Mod",
									icon: e => m.a.createElement(bs.a, Ws({
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
								type: Ks.Subreddit,
								model: e,
								telemetryNoun: "community_moderate"
							}))), n.multis.length > 0 && ((e, t, n) => {
								e.push({
									id: "header-multis",
									type: Ks.Header,
									model: {
										displayText: o.fbt._("Custom feeds", null, {
											hk: "3K02MA"
										}).toString(),
										button: ({
											className: e,
											sendClickEvent: t
										}) => m.a.createElement("button", {
											onClick: () => {
												n(Object(Se.h)(tt.a.MULTIREDDIT_CREATE)), t()
											},
											className: Object(v.a)(e, Es.a.multiPlusButton)
										}, m.a.createElement(bs.a, {
											name: "add"
										})),
										buttonTelemetryNoun: "create_new_custom_feed"
									}
								}), t.multis.forEach(t => e.push({
									id: t.url,
									type: Ks.Multi,
									model: t,
									telemetryNoun: "custom_feed"
								}))
							})(s, n, t), n.subscriptionsPending ? s.push({
								id: "subscriptions-pending",
								type: Ks.LoadingState,
								model: {
									displayText: ""
								}
							}) : eo(s, n, r, a, i, t), ((e, t, n, s) => (Js().forEach(e => t.push(e(n))), n.isEmployee && zs.forEach(e => t.push(e(n))), Object(_s.a)(e) && t.push({
								id: ds.PublicAccessNetwork,
								type: Ks.GenericClickable,
								model: {
									onClick: () => {
										s(Object(Fs.a)(Rs.c[Rs.b.Rpan]))
									},
									displayText: o.fbt._("Reddit live", null, {
										hk: "3zuymj"
									}).toString(),
									icon: e => m.a.createElement(bs.a, Ws({
										name: "video_live"
									}, e)),
									text: ({
										className: e
									}) => m.a.createElement("span", {
										className: e
									}, o.fbt._("Reddit Live", null, {
										hk: "93lry"
									}))
								},
								telemetryNoun: "rpan"
							}), t))(e, s, c, t), Zs.forEach(e => s.push(e(c))), s.push((() => ({
								id: ds.DailyCharts,
								type: Ks.GenericLink,
								model: {
									url: "/subreddits/leaderboard/",
									displayText: o.fbt._("Top Communities", null, {
										hk: "1KzP9v"
									}).toString(),
									icon: e => m.a.createElement(bs.a, Ws({
										name: "list_numbered"
									}, e)),
									text: ({
										className: e
									}) => m.a.createElement("span", {
										className: e
									}, o.fbt._("Top Communities", null, {
										hk: "1KzP9v"
									}))
								},
								telemetryNoun: "daily_charts"
							}))()), Object(Bs.g)(e) && (e => e.push({
								id: ds.NotificationsInbox,
								type: Ks.GenericLink,
								model: {
									url: "/notifications",
									displayText: o.fbt._("Notifications", null, {
										hk: "2xenVO"
									}).toString(),
									icon: e => m.a.createElement(bs.a, Ws({
										name: "notification"
									}, e)),
									text: ({
										className: e
									}) => m.a.createElement("span", {
										className: e
									}, o.fbt._("Notifications", null, {
										hk: "2xenVO"
									}))
								},
								telemetryNoun: "inbox"
							}))(s), Ys.forEach(e => s.push(e(c)))
						} else n.subscriptions.length || Object(Pt.K)(e) ? Js().forEach(e => s.push(e(null))) : Xs.forEach(e => s.push(e(null))), s.push({
							id: "reddit-other",
							type: Ks.Header,
							model: {
								displayText: o.fbt._("Other", null, {
									hk: "1etY05"
								}).toString()
							}
						}), Ys.forEach(e => s.push(e(null))), eo(s, n, r, a, i, t);
						return s
					}
				}),
				ko = e => ({
					onHomeClicked: () => e(Object(Oo.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Frontpage~ModListing"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))()),
					onGotoUrl: t => e(Object(h.b)(t)),
					onSubredditsRequested: () => {
						e(Object(ro.e)()), e(Object(vo.q)()), e(Object(Oo.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))())
					},
					onActionDispatched: t => e(t)
				}),
				wo = (e, t, n) => ({
					...e,
					...t,
					...n,
					unfilteredList: e.unfilteredListBuilder(t.onActionDispatched)
				});
			class Io extends m.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = e.currentTarget.value,
							n = this.getList(t, this.props),
							s = So(n),
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
						if (e.key === Co.b.Escape && this.props.onClose && this.props.onClose(!0), e.key === Co.b.Tab && this.props.onClose && this.props.onClose(), e.key === Co.b.Enter) {
							const e = this.state.focusOrder.first(),
								t = this.state.focusedItemId || (e ? e.id : null);
							if (t) {
								const e = this.state.renderableList.get(t);
								e && e.type !== Ks.Header && e.type !== Ks.LoadingState && (this.fireTelemetryForListItem(e), e.type === Ks.GenericClickable ? e.model.onClick() : jo(e) ? window.open(e.model.url, "_blank") : this.props.onGotoUrl(e.model.url), this.props.onClose && this.props.onClose(!0))
							}
						}
						e.key === Co.b.ArrowDown && (e.preventDefault(), this.setState(e => {
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
						})), e.key === Co.b.ArrowUp && (e.preventDefault(), this.setState(e => {
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
							case ds.Coins:
							case ds.Premium:
								Object(xo.d)(xo.a.GoldPayment, !0), t = Object(xo.c)(xo.a.GoldPayment)
						}
						switch (e.type) {
							case Ks.Category:
							case Ks.GenericLink:
							case Ks.GenericClickable:
							case Ks.Multi:
							case Ks.Profile:
							case Ks.Subreddit:
								this.props.sendEvent(n => ({
									...Object(Et.defaults)(n),
									...t ? {
										correlationId: t
									} : null,
									customFeed: e.type === Ks.Multi ? Object(Et.customFeedByPath)(n, e.model.url) : null,
									source: "community_nav",
									action: "click",
									noun: e.telemetryNoun
								}));
								break;
							case Ks.Header: {
								const {
									buttonTelemetryNoun: t
								} = e.model;
								t && this.props.sendEvent(e => ({
									...Object(Et.defaults)(e),
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
						focusOrder: So(e.unfilteredList),
						renderableList: e.unfilteredList
					}, this.inputRef = m.a.createRef()
				}
				componentDidMount() {
					"complete" === document.readyState ? this.props.onSubredditsRequested() : window.addEventListener("load", this.props.onSubredditsRequested), this.props.canAutofocus && setTimeout(() => !!this.inputRef.current && this.inputRef.current.focus())
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = this.state.currentInputText,
						n = this.getList(t, e),
						s = So(n);
					this.setState({
						focusOrder: s,
						renderableList: n
					})
				}
				getList(e, t) {
					if (e) {
						const n = new Hs.a("id"),
							s = new RegExp(e, "ig");
						t.unfilteredList.forEach(e => {
							switch (e.type) {
								case Ks.Category:
								case Ks.GenericLink:
								case Ks.Multi:
								case Ks.Profile:
								case Ks.Subreddit:
									e.model.displayText.match(s) && n.push(e);
									break;
								case Ks.Header: {
									const t = n.last();
									t && t.type === Ks.Header && n.pop(), n.push(e);
									break
								}
								case Ks.LoadingState:
							}
						});
						const o = n.last();
						return o && o.type === Ks.Header && n.pop(), n
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
						className: Eo.a.filter,
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
								this.fireTelemetryForListItem(e), this.props.onClose && this.props.onClose(!0), e.id === ds.Home && this.props.onHomeClicked(), e.type === Ks.GenericClickable && e.model.onClick()
							},
							isCurrentPage: this.props.currentPage.type === e.id
						};
						switch (e.type) {
							case Ks.GenericClickable:
								return m.a.createElement(As, Po({}, n, {
									className: Eo.a.item,
									label: e.model.displayText,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Ks.Category:
							case Ks.GenericLink:
								return m.a.createElement(As, Po({}, n, {
									externalLink: jo(e),
									className: Eo.a.item,
									to: e.model.url,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Ks.Header: {
								const n = e.model.button;
								return m.a.createElement(oo, {
									className: Eo.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								}, e.model.displayText, n && m.a.createElement(n, {
									className: Eo.a.headerButton,
									sendClickEvent: () => this.fireTelemetryForListItem(e)
								}))
							}
							case Ks.LoadingState:
								return m.a.createElement(go, {
									className: Eo.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								});
							case Ks.Multi:
								return m.a.createElement(po, Po({}, n, {
									className: Eo.a.item,
									isFavorite: e.model.isFavorited,
									model: e.model,
									type: Ks.Multi
								}));
							case Ks.Profile:
								return m.a.createElement(po, Po({}, n, {
									className: Eo.a.item,
									isFavorite: this.props.favoriteProfiles.has(e.model.id),
									model: e.model,
									type: Ks.Profile
								}));
							case Ks.Subreddit:
								return m.a.createElement(po, Po({}, n, {
									className: Eo.a.item,
									isFavorite: this.props.favoriteSubreddits.has(e.model.id),
									model: e.model,
									type: Ks.Subreddit
								}))
						}
					}))
				}
			}
			const No = Object(p.b)(_o, ko, wo)(Object(A.c)(Io)),
				Mo = Object(p.b)(_o, ko, wo)(Object(A.c)(Object(fo.b)(Io))),
				To = Object(Jt.t)({
					isCommentsPage: Jt.w,
					pageLayer: e => e
				}),
				Ao = Object(f.c)({
					currentPage: Is,
					hideNSFWPref: Pt.C,
					isDropdownOpen: hs.a,
					isLoggedIn: Pt.K,
					isOverlayOpen: Dt.h,
					isPinnedSubscriptionsMenuDisabled: gs.a,
					isSubscriptionsPinned: gs.b
				});
			class Ro extends m.a.Component {
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
						this.enablePreventFocus(), this.props.closeDropdown(), this.disablePreventFocus(), e && Object(ps.d)()
					}, this.onButtonFocus = () => {
						this.props.isSubscriptionsPinned || this.state.preventFocus || this.props.openDropdown(), this.state.preventFocus && this.disablePreventFocus()
					}, this.toggleDropdown = e => {
						this.props.isSubscriptionsPinned || (this.props.sendEvent(e => ({
							...Object(Et.defaults)(e),
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
							isLoggedIn: a,
							isOverlayOpen: i
						} = this.props, c = this.props.isDropdownOpen && !this.props.isSubscriptionsPinned, d = i || !a && r;
						return m.a.createElement("div", {
							"aria-label": o.fbt._("Start typing to filter your communities or use up and down to select.", null, {
								hk: "2PXR4j"
							}),
							className: Object(v.a)(Es.a.container, n, {
								[Es.a.mOpen]: c,
								[Es.a.mNotPinned]: !this.props.isSubscriptionsPinned,
								[Es.a.mPinned]: this.props.isSubscriptionsPinned,
								[Es.a.containerExp]: e
							}),
							onClickCapture: this.stopPropagation,
							role: "navigation"
						}, m.a.createElement("button", {
							className: Es.a.selector,
							onMouseDown: this.props.isSubscriptionsPinned ? this.props.onLocationClick : this.toggleDropdown,
							onFocus: this.onButtonFocus,
							tabIndex: this.state.preventFocus || this.props.isSubscriptionsPinned ? -1 : 0
						}, m.a.createElement("span", {
							className: Es.a.containerText
						}, " ", function(e) {
							switch (e.type) {
								case ds.Acknowledgements:
									return Ps(o.fbt._("Acknowledgements", null, {
										hk: "32JBVF"
									}).toString());
								case ds.All:
									return Ps(o.fbt._("All", null, {
										hk: "2gaHOy"
									}).toString());
								case ds.Appeal:
									return Ps(o.fbt._("Appeal", null, {
										hk: "2dMFkN"
									}).toString());
								case ds.Coins:
									return Ps(o.fbt._("Coins", null, {
										hk: "3ZpUbG"
									}).toString());
								case ds.Community:
									return Ps(e.model.displayText, !0);
								case ds.CommunitySearch:
									return Ps(o.fbt._("Subreddit Results", null, {
										hk: "19qRVH"
									}).toString());
								case ds.CreateCommunity:
									return Ps(o.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case ds.CreatePost:
									return Ps(o.fbt._("Create Post", null, {
										hk: "30V40V"
									}).toString());
								case ds.DailyCharts:
									return Ps(o.fbt._("Top Communities", null, {
										hk: "1sWIEu"
									}).toString());
								case ds.GlobalSearch:
									return Ps(o.fbt._("Search Results", null, {
										hk: "scJwR"
									}).toString());
								case ds.Geotagging:
									return Ps(o.fbt._("Help Out", null, {
										hk: "1RN9v2"
									}).toString());
								case ds.Home:
									return Ps(o.fbt._("Home", null, {
										hk: "amHQd"
									}).toString());
								case ds.Inbox:
									return Ps(o.fbt._("Messages", null, {
										hk: "25MBSp"
									}).toString());
								case ds.ModListing:
									return Ps("r/Mod");
								case ds.ModMail:
									return Ps(o.fbt._("Modmail", null, {
										hk: "of9AC"
									}).toString());
								case ds.ModQueue:
									return Ps(o.fbt._("Mod Queue", null, {
										hk: "3hdHhb"
									}).toString());
								case ds.Multi:
									return Ps(e.model.displayText, !0);
								case ds.NotificationsInbox:
									return Ps(o.fbt._("Notifications", null, {
										hk: "FiFRe"
									}).toString());
								case ds.Popular:
									return Ps(o.fbt._("Popular", null, {
										hk: "1rTNHl"
									}).toString());
								case ds.Powerups:
									return Ps(o.fbt._("Powerups", null, {
										hk: "1ZXjgq"
									}).toString());
								case ds.Premium:
									return Ps(o.fbt._("Premium", null, {
										hk: "x0xKv"
									}).toString());
								case ds.PublicAccessNetwork:
									return Ps(o.fbt._("Reddit Live", null, {
										hk: "4tlHX5"
									}).toString());
								case ds.Report:
									return Ps(o.fbt._("Report", null, {
										hk: "4oVcnd"
									}).toString());
								case ds.Settings:
									return Ps(o.fbt._("User Settings", null, {
										hk: "hcLHW"
									}).toString());
								case ds.SubredditCreation:
									return Ps(o.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case ds.Topic:
									return Ps(e.model);
								case ds.Unknown:
									return Ps("");
								case ds.UserDataRequest:
									return Ps(o.fbt._("Request your Reddit data", null, {
										hk: "3LqHku"
									}).toString());
								case ds.UserProfile:
									return Ps(e.model.displayText, !0);
								case ds.UserProfileName:
									return Ps(e.name, !0);
								case ds.ViewDraft:
									return Ps(o.fbt._("View Draft", null, {
										hk: "3k2k9a"
									}).toString())
							}
						}(t), " "), function(e, t) {
							const n = e => m.a.createElement(bs.a, {
								name: e,
								isFilled: !0,
								className: Es.a.defaultIcon
							});
							switch (e.type) {
								case ds.All:
									return n("all");
								case ds.Acknowledgements:
								case ds.Appeal:
									return n("edit");
								case ds.Coins:
									return n("coins");
								case ds.Community:
								case ds.CommunitySearch: {
									const n = Object(fs.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(Cs.b, {
										className: Es.a.subredditIcon,
										iconUrl: n.url,
										primaryColor: n.color
									})
								}
								case ds.CreateCommunity:
								case ds.CreatePost:
									return n("add");
								case ds.DailyCharts:
									return n("list_numbered");
								case ds.Geotagging:
									return n("custom_feed");
								case ds.GlobalSearch:
									return n("search");
								case ds.Home:
									return n("home");
								case ds.Inbox:
									return m.a.createElement(Os.a, {
										wrapperClassName: Es.a.userIcon
									});
								case ds.ModListing:
									return n("mod_queue");
								case ds.ModMail:
									return n("mod_mail");
								case ds.ModQueue:
									return n("mod_queue");
								case ds.Multi:
									return m.a.createElement("img", {
										src: e.model.icon,
										className: Es.a.customFeedIcon
									});
								case ds.NotificationsInbox:
									return n("notification");
								case ds.Popular:
									return n("popular");
								case ds.Powerups:
									return n("powerup");
								case ds.Premium:
									return n("premium");
								case ds.PublicAccessNetwork:
									return n("video_live");
								case ds.Report:
									return n("report");
								case ds.Settings:
									return m.a.createElement(Os.a, {
										wrapperClassName: Es.a.userIcon
									});
								case ds.SubredditCreation:
									return n("add");
								case ds.Topic:
									return n("custom_feed");
								case ds.Unknown:
									return m.a.createElement("div", {
										className: Es.a.unknownIcon
									});
								case ds.UserDataRequest:
									return n("add");
								case ds.UserProfile: {
									const n = Object(fs.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(xs.a, {
										className: Es.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										omitResponsivePresenceWrapper: !0,
										userName: e.model.name
									})
								}
								case ds.UserProfileName:
									return m.a.createElement("div", {
										className: Es.a.defaultIcon
									});
								case ds.Unknown:
									return m.a.createElement("div", {
										className: Es.a.unknownIcon
									});
								case ds.UserProfile: {
									const n = Object(fs.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(xs.a, {
										className: Es.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										userName: e.model.name
									})
								}
								case ds.ViewDraft:
									return n("edit")
							}
						}(t, s), !this.props.isSubscriptionsPinned && m.a.createElement(bs.a, {
							name: "caret_down",
							className: Es.a.caretDown
						})), c && !this.props.isPinnedSubscriptionsMenuDisabled && m.a.createElement(bs.a, {
							name: "side_menu",
							className: Es.a.pin,
							onClick: d ? void 0 : this.props.onPinSubscriptions
						}), c && m.a.createElement(Mo, {
							canAutofocus: !0,
							className: Es.a.listContainer,
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
			var Lo = To(Object(p.b)(Ao, (e, t) => ({
					closeDropdown: () => e(Object(S.f)()),
					onLocationRefresh: (n, s) => e(Object(ms.f)(n, t.pageLayer, s)),
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
				}))(Object(A.c)(Ro))),
				Fo = n("./src/reddit/components/JumpToContent/index.tsx"),
				Do = n("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				Uo = n("./node_modules/history/esm/history.js"),
				Bo = n("./node_modules/lodash/debounce.js"),
				Go = n.n(Bo),
				qo = n("./node_modules/lodash/isEmpty.js"),
				Ho = n.n(qo),
				Wo = n("./node_modules/uuid/v4.js"),
				Vo = n.n(Wo),
				Ko = n("./src/lib/makeSearchKey/index.ts"),
				zo = n("./src/reddit/actions/post.ts"),
				Qo = n("./src/reddit/actions/search.ts"),
				Jo = n("./src/reddit/actions/search/trending.ts"),
				Xo = n("./src/reddit/components/SearchDropdown/index.tsx"),
				Zo = n("./src/reddit/constants/history.ts"),
				Yo = n("./src/reddit/contexts/ApiContext.tsx"),
				$o = n("./src/lib/makeApiRequest/index.ts"),
				er = n("./src/lib/omitHeaders/index.ts"),
				tr = n("./src/reddit/constants/headers.ts");
			const nr = (e, t) => Object($o.a)(Object(er.a)(e, [tr.a]), {
				endpoint: `${e.apiUrl}/api/subreddit_autocomplete_v2.json`,
				method: C.hb.GET,
				data: {
					query: t
				}
			});
			var sr = n("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				or = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");
			const rr = e => {
				const t = [],
					n = {};
				return e.forEach(e => {
					const s = e.data,
						o = e.kind;
					o === C.Fb.Subreddit ? (t.push(s.name), n[s.name] = Object(or.a)(s)) : o === C.Fb.Account && (t.push(s.subreddit.name), n[s.subreddit.name] = Object(sr.a)(s.subreddit, s.name))
				}), {
					data: n,
					order: t
				}
			};
			var ar = n("./src/reddit/helpers/getSearchUrl/index.ts"),
				ir = n("./src/reddit/helpers/isArrayEqual.ts"),
				cr = n("./src/reddit/helpers/trackers/searchResults.ts"),
				dr = n("./src/reddit/models/Search/index.ts"),
				lr = n("./src/reddit/selectors/experiments/trending.ts"),
				ur = n("./src/reddit/helpers/chooseVariant/index.ts");
			const mr = e => Object(Pt.H)(e) || Qt.Od.Treatment1 === Object(ur.c)(e, {
				experimentEligibilitySelector: ur.a,
				experimentName: Qt.Ld
			});
			var pr = n("./src/reddit/selectors/experiments/uiSimplification.ts"),
				br = n("./src/reddit/selectors/searchResults.ts"),
				hr = n("./src/reddit/selectors/trending.ts"),
				gr = n("./src/reddit/controls/Search/index.m.less"),
				fr = n.n(gr),
				vr = n("./src/reddit/constants/tracking.ts");
			const Cr = Object(f.a)(e => Object(ur.c)(e, {
				experimentEligibilitySelector: ur.a,
				experimentName: Qt.lb
			}), e => e === Qt.vb.Enabled);
			var xr, Or = n("./src/reddit/components/Pill/index.tsx"),
				yr = n("./src/reddit/components/Pill/PillText/index.m.less"),
				Er = n.n(yr);
			! function(e) {
				e.DAY = "DAY", e.NIGHT = "NIGHT"
			}(xr || (xr = {}));
			const Pr = {
					[xr.DAY]: Er.a.pillTextVariantDay,
					[xr.NIGHT]: Er.a.pillTextVariantNight
				},
				jr = e => m.a.createElement("div", {
					className: Object(v.a)(Er.a.pillText, Pr[e.variant])
				}, e.children);
			var Sr = n("./src/reddit/controls/Search/CommunityPill/index.m.less"),
				_r = n.n(Sr);
			const kr = Object(f.c)({
					nightmode: Pt.W
				}),
				wr = Object(p.b)(kr)(({
					nightmode: e,
					subreddit: t
				}) => m.a.createElement(Or.a, {
					"aria-hidden": !0,
					className: _r.a.communityPill,
					"data-testid": "community-search-pill"
				}, m.a.createElement(jr, {
					variant: e ? xr.NIGHT : xr.DAY
				}, m.a.createElement(Cs.b, {
					className: fr.a.subredditIcon,
					subredditOrProfile: t
				}), t.displayText)));
			var Ir = n("./src/reddit/controls/Search/SearchBar/index.m.less"),
				Nr = n.n(Ir);
			const Mr = Object(A.c)(e => {
					const t = Object(p.e)(Cr),
						[n, s] = m.a.useState(!1),
						r = m.a.useContext(g.a),
						a = t && e.subreddit && !n,
						i = () => e.sendEvent(() => (e => ({
							action: vr.c.DISABLE,
							noun: "subreddit_search",
							source: "search",
							subreddit: {
								id: null == e ? void 0 : e.id,
								name: null == e ? void 0 : e.name,
								nsfw: null == e ? void 0 : e.isNSFW,
								quarantined: null == e ? void 0 : e.isQuarantined
							}
						}))(e.subreddit));
					return m.a.createElement("form", {
						action: "/search/",
						autoComplete: "off",
						className: Object(v.a)(Nr.a.searchBar, r && Nr.a.searchBarExp),
						method: "get",
						onSubmit: e.onFormSubmit,
						onFocus: e.onFocusSearchBar,
						role: "search"
					}, m.a.createElement("label", {
						className: Nr.a.iconContainer,
						htmlFor: "header-search-bar"
					}, m.a.createElement(bs.a, {
						"aria-hidden": !0,
						name: "search",
						className: Nr.a.icon
					})), a && e.subreddit && m.a.createElement(wr, {
						subreddit: e.subreddit
					}), m.a.createElement("input", {
						id: "header-search-bar",
						name: "q",
						className: Nr.a.input,
						onChange: e.onChange,
						onClick: e.toggleDropdownAndGetTrending,
						onKeyDown: t => {
							t.key !== Co.b.Backspace || e.searchQuery || n ? e.onKeyDown(t) : (s(!0), i())
						},
						placeholder: o.fbt._("Search", null, {
							hk: "44xF6n"
						}),
						type: "search",
						value: e.searchQuery
					}))
				}),
				Tr = Object(Jt.t)({
					searchQuery: Jt.W,
					pageLayer: e => e
				}),
				Ar = (e, t, n, s) => e(e => ({
					...Object(cr.c)(e),
					source: "search",
					action: "click",
					noun: t,
					actionInfo: Object(Et.actionInfo)(e),
					search: {
						...Object(Et.search)(e, n, !0, s || void 0),
						structureType: Object(Et.structureType)(s),
						queryId: Object(xo.c)(xo.a.SearchResults)
					}
				})),
				Rr = Object(p.b)(() => Object(f.c)({
					currentPage: Dt.b,
					currentSubredditName: Dt.d,
					currentUser: Pt.j,
					dropdownIsOpen: br.f,
					typeaheadIdsByQuery: br.e,
					isInTrendingExperiment: lr.a,
					isInTypeaheadExperiment: mr,
					isInUISimplificationI18NExperiment: pr.a,
					isLoggedIn: Pt.K,
					isSubredditSearchAllowed: (e, {
						pageLayer: t
					}) => Object(Jt.M)(t),
					multireddit: Jt.d,
					nightmode: Pt.W,
					routeName: Dt.p,
					subreddit: Jt.q,
					trendingItems: hr.a,
					typeaheadSuggestions: br.l
				}), (e, t) => ({
					fetchTrendingItems: () => e(Object(Jo.b)()),
					fireAdPixelsOfType: (t, n) => e(Object(zo.z)(t, n)),
					onChange: t => e(Object(Qo.n)({
						searchQuery: t
					})),
					onClearSearchQuery: () => e(Object(Qo.n)({
						searchQuery: ""
					})),
					onGoToUrl: t => e(Object(h.b)(t)),
					onSearch: (t, n, s, o) => {
						e(Object(h.b)(Object(Uo.c)({
							pathname: t,
							search: n,
							state: {
								fromPage: s,
								[Zo.a.SearchOriginPage]: o
							}
						})))
					},
					onToggleDropdown: () => e(Object(Qo.j)()),
					onCloseDropdown: () => e(Object(Qo.i)()),
					onTypeaheadSuggestionsSuccess: t => {
						e(Object(Qo.m)(t))
					}
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onSearch: (s, o) => {
						s.preventDefault();
						const {
							currentUser: r = null
						} = e, a = Object(ar.a)(e.subreddit, e.multireddit, r, o, n.searchOptions, e.isSubredditSearchAllowed);
						if (!a) return;
						const i = a.url,
							c = a.qs,
							d = {
								routeName: e.routeName,
								subredditName: e.currentSubredditName
							},
							l = e.currentPage ? Object(Et.getPageTypeFromCurrentPage)(e.currentPage) : n.pageLayer ? Object(Et.getPageTypeFromCurrentPage)(n.pageLayer) : void 0;
						t.onSearch(i, c, d, l)
					},
					onFocusSearchBar: () => {
						Object(xo.c)(xo.a.SearchResults) || Object(xo.d)(xo.a.SearchResults);
						const e = n.searchOptions || Object(Ko.c)({
							q: n.searchQuery
						});
						Ar(n.sendEvent, Et.OriginElement.SearchBar, e, n.pageLayer ? n.pageLayer : void 0)
					}
				}));
			class Lr extends m.a.Component {
				constructor(e) {
					super(e), this.container = null, this.makeTypeaheadApiRequest = async () => {
						this.setState({
							isTypeaheadPending: !0
						});
						const e = await nr(this.props.apiContext(), this.state.searchQuery);
						if (e.ok) {
							if (e.body && e.body.data && e.body.data.children) {
								const t = rr(e.body.data.children);
								t && t.data && t.order && this.props.onTypeaheadSuggestionsSuccess({
									typeaheadSuggestions: t.data,
									order: t.order,
									searchQuery: this.state.searchQuery
								})
							}
							this.setState({
								isTypeaheadPending: !1,
								fetchedTrending: !0
							})
						} else this.setState({
							isTypeaheadPending: !1
						})
					}, this.makeTrendingApiRequest = async () => {
						this.props.trendingItems.length || this.state.isTrendingPending || (this.setState({
							isTrendingPending: !0
						}), await this.props.fetchTrendingItems(), this.setState({
							isTrendingPending: !1
						}))
					}, this.setContainerRef = e => {
						this.container = e
					}, this.close = () => {
						this.props.onCloseDropdown()
					}, this.onRemoveRecentSearch = e => {
						this.props.currentUser && 0 !== this.state.recentSearches.length && (Object(qt.Y)(e, this.props.currentUser.id), this.setState({
							recentSearches: this.state.recentSearches.filter(t => t.searchQuery !== e.searchQuery),
							focusedItemIndex: -1
						}))
					}, this.onUpdateSearchQuery = e => {
						this.setState({
							searchQuery: e
						})
					}, this.onSetRecentSearch = e => {
						this.props.isLoggedIn && this.props.currentUser && this.setState({
							recentSearches: Object(qt.Ib)({
								...e,
								section: dr.c.recent
							}, this.props.currentUser.id)
						})
					}, this.onChange = e => {
						const t = e.currentTarget.value,
							n = {
								searchQuery: t
							};
						if (this.setState(n), this.props.onChange(t), this.props.isInTypeaheadExperiment) {
							if (!(!this.props.typeaheadIdsByQuery || !this.props.typeaheadIdsByQuery[t]) || !t) return;
							this.onFetchTypeaheadSuggestions()
						}
					}, this.onFetchTypeaheadSuggestions = Go()(() => {
						this.makeTypeaheadApiRequest()
					}, 250), this.onSearch = async e => {
						if (this.close(), this.state.searchQuery.trim()) {
							let t = {
								...dr.a
							};
							if (this.state.selectedItem && this.state.selectedItem.searchQuery === this.state.searchQuery)(t = this.state.selectedItem).id || (t.id = Vo()()), t.section === dr.c.recent ? this.onSendSearchClickRecentEvent(this.state.searchQuery, t, this.state.focusedItemIndex) : t.section === dr.c.typeahead ? this.onSendSearchClickTypeaheadEvent(this.state.searchQuery, t, this.state.focusedItemIndex, this.state.itemList.filter(e => e.isSubreddit)) : this.onSendDropdownClickEvent(this.state.searchQuery, this.state.searchQuery, Et.StructureType.Search, Et.SearchDropdownNouns.Recent);
							else {
								const e = this.props.subreddit && this.props.subreddit.icon ? this.props.subreddit.icon.url : "",
									n = this.props.subreddit ? this.props.subreddit.displayText : void 0,
									s = !!this.props.subreddit && this.props.subreddit.isNSFW,
									o = dr.b.text;
								t = {
									id: Vo()(),
									searchQuery: this.state.searchQuery,
									type: o,
									section: dr.c.recent,
									subredditOrProfileRestrictedName: n,
									displayInfo: {
										iconUrl: e,
										isNSFW: s
									}
								}
							}
							this.onSetRecentSearch(t), this.close(), this.props.onSearch(e, t)
						}
					}, this.onClearSearchQuery = () => {
						this.setState({
							focusedItemIndex: -1,
							selectedItem: null,
							searchQuery: ""
						}), this.props.onClearSearchQuery()
					}, this.onSendDropdownClickEvent = (e, t, n, s) => {
						const o = {
							displayQuery: e,
							rawQuery: t,
							structureType: n,
							searchQuery: this.props.searchQuery
						};
						this.props.sendEvent(Object(cr.s)(s, o))
					}, this.onSendSearchClickRecentEvent = (e, t, n) => {
						this.props.sendEvent(Object(cr.u)(e, t, n))
					}, this.onSendSearchClickTypeaheadEvent = (e, t, n, s) => {
						this.props.sendEvent(Object(cr.w)(e, t, n, s))
					}, this.onSendDropdownViewEvent = (e, t, n, s) => {
						const o = {
							displayQuery: n,
							rawQuery: s || n,
							searchQuery: this.props.searchQuery,
							structureType: t
						};
						this.props.sendEvent(Object(cr.t)(e, o))
					}, this.onKeyDown = e => {
						if (e.key === Co.b.Escape || e.key === Co.b.Tab) this.close();
						else if (e.key === Co.b.ArrowDown) {
							if (e.preventDefault(), 0 === this.state.itemList.length || !this.props.dropdownIsOpen) return;
							if (this.state.focusedItemIndex >= this.state.itemList.length - 1) return;
							const t = this.state.focusedItemIndex + 1,
								n = this.state.itemList[t] || null,
								s = n ? n.searchQuery : "";
							this.setState({
								focusedItemIndex: t,
								searchQuery: s,
								selectedItem: n
							})
						} else if (e.key === Co.b.ArrowUp) {
							if (e.preventDefault(), 0 === this.state.itemList.length || !this.props.dropdownIsOpen) return;
							if (-1 === this.state.focusedItemIndex) return;
							const t = this.state.focusedItemIndex - 1,
								n = this.state.itemList[t] || null,
								s = n ? n.searchQuery : "";
							this.setState({
								focusedItemIndex: t,
								searchQuery: s,
								selectedItem: n
							})
						}
					}, this.toggleDropdownAndGetTrending = () => {
						if (!this.props.trendingItems.length && this.props.isInTrendingExperiment && this.makeTrendingApiRequest(), this.props.currentUser) {
							const e = Object(qt.J)(this.props.currentUser.id);
							e.length > 0 && (this.setState({
								recentSearches: this.props.isLoggedIn ? e : [],
								itemList: [...e, ...this.props.trendingItems]
							}), e.forEach(e => {
								this.onSendDropdownViewEvent(Et.SearchDropdownNouns.Recent, Et.StructureType.Recent, e.searchQuery)
							}))
						}
						this.props.dropdownIsOpen || this.props.onToggleDropdown()
					}, this.onFormSubmit = e => {
						if (e.preventDefault(), !this.state.searchQuery.trim()) return;
						this.onSearch(e);
						const t = this.props.searchOptions || Object(Ko.c)({});
						t.q || (t.q = this.state.searchQuery), Ar(this.props.sendEvent, "full_search_button", t), this.close()
					}, this.state = {
						fetchedTrending: !1,
						focusedItemIndex: -1,
						itemList: [],
						isTrendingPending: !1,
						isTypeaheadPending: !1,
						recentSearches: [],
						searchQuery: this.props.searchQuery || "",
						selectedItem: null
					}
				}
				componentDidUpdate(e) {
					const t = Object(ir.a)(e.typeaheadSuggestions, this.props.typeaheadSuggestions),
						n = Object(ir.a)(e.trendingItems, this.props.trendingItems);
					if (this.props.searchQuery !== e.searchQuery || !t || !n) {
						const n = this.props.typeaheadSuggestions.length ? this.props.typeaheadSuggestions : [...this.state.recentSearches, ...this.props.trendingItems];
						this.setState(() => {
							const t = {
								itemList: n
							};
							return this.props.searchQuery !== e.searchQuery && (t.searchQuery = this.props.searchQuery || ""), t
						}, () => {
							this.state.searchQuery || Ho()(this.props.typeaheadSuggestions) || this.onClearSearchQuery()
						}), !t && this.props.typeaheadSuggestions.length && this.props.typeaheadSuggestions.forEach(e => {
							this.onSendDropdownViewEvent(e.isProfile ? Et.SearchDropdownNouns.TypeaheadProfile : Et.SearchDropdownNouns.TypeaheadSubreddit, Et.StructureType.Search, e.searchQuery)
						})
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return m.a.createElement("div", {
						className: Object(v.a)(fr.a.relativeWrapper, Es.a.container, e.className, {
							"m-open": this.props.dropdownIsOpen
						}),
						id: Xo.b,
						ref: this.setContainerRef
					}, m.a.createElement(Mr, {
						onChange: this.onChange,
						searchQuery: t.searchQuery,
						onFormSubmit: this.onFormSubmit,
						onFocusSearchBar: e.onFocusSearchBar,
						onKeyDown: this.onKeyDown,
						subreddit: e.subreddit,
						toggleDropdownAndGetTrending: this.toggleDropdownAndGetTrending
					}), m.a.createElement(Xo.c, {
						container: this.container,
						focusedItemIndex: t.focusedItemIndex,
						isFixed: e.isFixed,
						isInTrendingExperiment: e.isInTrendingExperiment,
						isInUISimplificationI18NExperiment: e.isInUISimplificationI18NExperiment,
						isOpen: e.dropdownIsOpen,
						isTrendingPending: t.isTrendingPending,
						isTypeaheadPending: t.isTypeaheadPending,
						itemList: t.itemList,
						nightmode: e.nightmode,
						onClearSearchQuery: this.onClearSearchQuery,
						onClose: this.close,
						onRemoveRecentSearch: this.onRemoveRecentSearch,
						onSendDropdownClickEvent: this.onSendDropdownClickEvent,
						onSendSearchClickRecentEvent: this.onSendSearchClickRecentEvent,
						onSendSearchClickTypeaheadEvent: this.onSendSearchClickTypeaheadEvent,
						onSetRecentSearch: this.onSetRecentSearch,
						onUpdateSearchQuery: this.onUpdateSearchQuery,
						recentSearches: t.recentSearches,
						trendingItems: e.trendingItems,
						typeaheadSuggestions: e.typeaheadSuggestions,
						fireAdPixelsOfType: e.fireAdPixelsOfType
					}))
				}
			}
			const Fr = Object(A.c)(Tr(Object(Yo.b)(Rr(Lr))));
			var Dr = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				Ur = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				Br = n("./src/reddit/components/Header/MwebResponsiveHeader/index.m.less"),
				Gr = n.n(Br);
			var qr = e => {
					const {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: Object(v.a)(Gr.a.Container, t)
					}, m.a.createElement("a", {
						"aria-label": o.fbt._("Home", null, {
							hk: "1u0Rxp"
						}),
						className: Gr.a.HomeLink,
						href: B.a.redditUrl
					}, m.a.createElement(Dr.a, {
						className: Gr.a.Snoo
					}), m.a.createElement(Ur.a, {
						className: Gr.a.Wordmark,
						color: "inherit"
					})))
				},
				Hr = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				Wr = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				Vr = n("./src/reddit/hooks/useTracking.ts"),
				Kr = n("./src/reddit/components/Header/QuickLinks/index.m.less"),
				zr = n.n(Kr),
				Qr = m.a.memo((function(e) {
					const t = Object(Vr.a)(),
						n = Object(p.d)(),
						s = Object(u.useCallback)(() => {
							t(e => ({
								...Object(Et.defaults)(e),
								source: "nav",
								action: "click",
								noun: "popular"
							}))
						}, [t]),
						r = Object(u.useCallback)(() => {
							t(e => ({
								...Object(Et.defaults)(e),
								source: "nav",
								action: "click",
								noun: "all"
							}))
						}, [t]),
						a = Object(u.useCallback)(() => {
							n(Object(Fs.a)(Rs.c[Rs.b.Rpan])), t(e => ({
								...Object(Et.defaults)(e),
								source: "nav",
								action: "click",
								noun: "rpan"
							}))
						}, [n, t]),
						i = Object(p.e)(Pt.K),
						c = Object(p.e)(_s.a),
						d = Object(Wr.a)(),
						l = Object(Wr.a)(),
						b = Object(Wr.a)();
					return m.a.createElement("div", {
						className: Object(v.a)(zr.a.container, e.className)
					}, m.a.createElement("div", {
						className: zr.a.row
					}, m.a.createElement(us.a, {
						className: zr.a.icon,
						innerRef: d.target.ref,
						to: i ? Rs.c[Rs.b.Popular] : Rs.c[Rs.b.Home],
						onClick: s,
						onMouseEnter: d.show,
						onMouseLeave: d.hide
					}, m.a.createElement(bs.a, {
						name: "popular"
					})), m.a.createElement(Hr.a, {
						arrowProps: d.arrowProps,
						popperProps: d.popperProps,
						visible: d.visible
					}, o.fbt._("Popular", null, {
						hk: "1Kx4va"
					})), m.a.createElement(m.a.Fragment, null, m.a.createElement(us.a, {
						className: zr.a.icon,
						innerRef: l.target.ref,
						to: Rs.c[Rs.b.All],
						onClick: r,
						onMouseEnter: l.show,
						onMouseLeave: l.hide
					}, m.a.createElement(bs.a, {
						name: "all"
					})), m.a.createElement(Hr.a, {
						arrowProps: l.arrowProps,
						popperProps: l.popperProps,
						visible: l.visible
					}, o.fbt._("All", null, {
						hk: "1Rk1yU"
					}))), c && m.a.createElement(m.a.Fragment, null, m.a.createElement(us.a, {
						className: zr.a.icon,
						innerRef: b.target.ref,
						to: Rs.c[Rs.b.Rpan],
						onClick: a,
						onMouseEnter: b.show,
						onMouseLeave: b.hide
					}, m.a.createElement(bs.a, {
						name: "video_live"
					})), m.a.createElement(Hr.a, {
						arrowProps: b.arrowProps,
						popperProps: b.popperProps,
						visible: b.visible
					}, o.fbt._("Reddit Live", null, {
						hk: "3BFYUK"
					})))))
				})),
				Jr = n("./src/reddit/actions/login.ts"),
				Xr = n("./src/reddit/actions/tooltip.ts"),
				Zr = n("./src/reddit/helpers/trackers/authControls.ts"),
				Yr = n("./src/lib/combineRefs/index.tsx"),
				$r = n("./src/lib/hooks/useOnClickOutside.ts"),
				ea = n("./src/lib/hooks/useTooltip.ts"),
				ta = n("./src/lib/matchRoute/index.ts"),
				na = n("./src/chat/helpers/dom.ts"),
				sa = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				oa = n("./src/reddit/actions/changeUsername.ts"),
				ra = n("./src/reddit/actions/chat/toggle.ts"),
				aa = n("./src/reddit/actions/emailVerificationTooltip.ts"),
				ia = n("./src/reddit/actions/postCreation/general.ts"),
				ca = n("./src/reddit/actions/preferences.ts"),
				da = n("./src/reddit/actions/users.ts"),
				la = n("./src/reddit/components/BadgeCounter/index.tsx"),
				ua = n("./src/reddit/components/BlockNavigation/index.tsx"),
				ma = n("./src/reddit/components/ChangeUsernameModals/Loader.tsx"),
				pa = n("./src/reddit/components/ChangeUsernameTooltip/Loader.tsx"),
				ba = n("./src/reddit/components/CommonTooltip/Hooked.tsx");
			var ha = Object(_e.a)({
					getComponent: () => Object(Je.a)(() => n.e("EmailVerificationModals").then(n.bind(null, "./src/reddit/components/EmailVerificationModals/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				ga = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				fa = n("./src/reddit/helpers/trackers/emailVerification.ts"),
				va = n("./src/reddit/components/EmailVerificationTooltip/index.m.less"),
				Ca = n.n(va);
			class xa extends m.a.Component {
				constructor() {
					super(...arguments), this.onChangeEmailModalOpen = () => {
						this.props.sendEvent(Object(fa.e)(fa.a, "update")), this.props.toggleChangeEmailModal()
					}, this.onCloseTooltip = () => {
						this.props.sendEvent(Object(fa.c)(fa.a)), this.props.closeTooltip()
					}, this.onResendEmailClick = () => {
						this.props.sendEvent(Object(fa.e)(fa.a, "confirm")), this.props.resendEmail(), this.props.closeTooltip()
					}
				}
				componentDidMount() {
					xa.shouldSendViewEvent && (xa.shouldSendViewEvent = !1, this.props.sendEvent(Object(fa.g)(fa.a)))
				}
				render() {
					return m.a.createElement("div", {
						className: Ca.a.container
					}, m.a.createElement("div", {
						className: Ca.a.topLine
					}), m.a.createElement("button", {
						className: Ca.a.closeWrapper,
						onClick: this.onCloseTooltip
					}, m.a.createElement(Me.a, {
						className: Ca.a.closeIcon
					})), m.a.createElement("h5", {
						className: Ca.a.title
					}, o.fbt._("Confirm your email:", null, {
						hk: "1RDs8b"
					})), m.a.createElement("p", {
						className: Ca.a.subtitle
					}, this.props.email), m.a.createElement("p", {
						className: Ca.a.description
					}, o.fbt._("Check your inbox email for Reddit's confirmation email. A current email address helps ensure you don't lose access to your account.", null, {
						hk: "2bhwUs"
					})), m.a.createElement("div", {
						className: Ca.a.buttonWrapper
					}, m.a.createElement(Ne.l, {
						className: Ca.a.commonBtn,
						"data-redditstyle": !0,
						onClick: this.onChangeEmailModalOpen,
						type: "button"
					}, o.fbt._("Update email", null, {
						hk: "1Cxqkk"
					})), m.a.createElement(Ne.i, {
						className: Object(v.a)(Ca.a.commonBtn, Ca.a.primaryBtn),
						"data-redditstyle": !0,
						onClick: this.onResendEmailClick,
						type: "button"
					}, o.fbt._("Got it", null, {
						hk: "3IP9TO"
					}))))
				}
			}
			xa.shouldSendViewEvent = !0;
			const Oa = Object(ga.a)(xa, [fo.a.Click, fo.a.Keydown, fo.a.Resize]);
			var ya = Object(A.c)(Oa),
				Ea = n("./src/reddit/components/GoogleOneTapIFrame/index.m.less"),
				Pa = n.n(Ea);
			const ja = Object(f.c)({
				isLoggedIn: Pt.K
			});
			class Sa extends m.a.Component {
				render() {
					const {
						className: e,
						exposeIFrameElement: t,
						isLoggedIn: n
					} = this.props;
					return m.a.createElement(T.a, {
						className: Object(v.a)(Pa.a.IFrame, {
							[Pa.a["m-hidden"]]: n
						}, e),
						exposeIFrameElement: t,
						path: R.c.GoogleOneTap
					})
				}
			}
			var _a = Object(p.b)(ja)(Sa),
				ka = n("./src/reddit/components/Header/GoldCoinsCta/index.tsx"),
				wa = n("./src/reddit/components/HeaderIconContainer/index.m.less"),
				Ia = n.n(wa);

			function Na() {
				return (Na = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Ma = M.a.button("Button", Ia.a),
				Ta = M.a.div("Container", Ia.a);

			function Aa(e) {
				const {
					children: t,
					isOpen: n,
					...s
				} = e;
				return m.a.createElement(Ma, Na({}, s, {
					id: e.id,
					onClick: t => e.onClick(t)
				}), m.a.createElement(Ta, {
					className: Object(v.a)({
						[Ia.a.isOpen]: n
					})
				}, t))
			}
			var Ra = n("./src/reddit/components/HeaderUserActions/index.m.less"),
				La = n.n(Ra);
			var Fa = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(la.a, {
					isActive: !!e.hasUnreadMessages,
					unreadCount: e.badgeCount
				}), m.a.createElement(bs.a, {
					name: "chat",
					className: La.a.icon2020
				})),
				Da = n("./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less"),
				Ua = n.n(Da);
			const {
				fbt: Ba
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Ga = e => {
				const {
					onCloseFlyout: t
				} = e;
				return m.a.createElement("div", {
					className: Ua.a.container
				}, m.a.createElement("p", {
					className: Ua.a.title
				}, Ba._("New User Settings", null, {
					hk: "1Sziu9"
				})), m.a.createElement("h5", {
					className: Ua.a.subtitle
				}, Ba._("Like customizing Reddit?", null, {
					hk: "38eFal"
				})), m.a.createElement("p", {
					className: Ua.a.description
				}, Ba._("You can save how you sort and view your communities in user settings.", null, {
					hk: "XMkGT"
				})), m.a.createElement(Ne.l, {
					className: Ua.a.dismissBtn,
					onClick: t
				}, Ba._("Got it", null, {
					hk: "3IP9TO"
				})))
			};
			var qa = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(la.a, {
				isActive: !!e.unreadCount,
				unreadCount: e.unreadCount
			}), m.a.createElement(bs.a, {
				name: "message",
				className: La.a.icon2020
			}));
			var Ha = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(la.a, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount
				}), m.a.createElement(bs.a, {
					name: "notification",
					className: La.a.icon2020
				})),
				Wa = n("./src/lib/prettyPrintNumber/index.ts"),
				Va = n("./src/reddit/actions/alpha.ts"),
				Ka = n("./src/reddit/actions/modMode.ts"),
				za = n("./src/reddit/actions/profile/index.ts"),
				Qa = n("./src/reddit/constants/elementClassNames.ts"),
				Ja = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				Xa = n("./src/reddit/helpers/karma.ts"),
				Za = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				Ya = n("./src/reddit/icons/fonts/Premium/index.tsx"),
				$a = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				ei = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				ti = n("./src/reddit/selectors/experiments/presenceIndicator.ts"),
				ni = n("./src/reddit/selectors/modModeEnabled.ts"),
				si = n("./src/reddit/selectors/seo/index.ts"),
				oi = n("./src/reddit/selectors/tooltip.ts"),
				ri = n("./src/higherOrderComponents/asTooltip.tsx"),
				ai = n("./src/reddit/components/HiddenDiv.tsx"),
				ii = n("./src/reddit/controls/Dropdown/index.tsx"),
				ci = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				di = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				li = n("./src/reddit/helpers/trackers/modTools.ts"),
				ui = n("./src/reddit/helpers/trackers/subredditCreation.ts");
			const mi = e => ({
					screen: Et.screen(e),
					profile: Et.profile(e),
					subreddit: Et.subreddit(e)
				}),
				pi = e => t => ({
					source: "user_dropdown",
					action: "click",
					noun: e ? "night_mode_off" : "night_mode_on",
					...mi(t)
				}),
				bi = e => t => ({
					source: "nav",
					action: "click",
					actionInfo: {
						pageType: t.platform.currentPage ? Et.getPageTypeFromCurrentPage(t.platform.currentPage) : void 0,
						settingValue: e ? "online" : "hidden"
					},
					noun: "online_presence_toggle",
					...mi(t)
				}),
				hi = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "premium",
					correlationId: Object(xo.c)(xo.a.GoldPayment),
					...mi(e)
				}),
				gi = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "powerups",
					correlationId: Object(xo.d)(xo.a.PowerupsFlow, !1),
					...mi(e)
				}),
				fi = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "coins",
					correlationId: Object(xo.c)(xo.a.GoldPayment),
					...mi(e)
				});
			var vi = n("./src/reddit/icons/svgs/SnooNoEyes/index.tsx"),
				Ci = n("./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts"),
				xi = n("./src/reddit/actions/snoovatar.ts"),
				Oi = n("./src/reddit/controls/InternalLink/index.tsx");

			function yi() {
				return (yi = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Ei = e => {
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
					return (s || "").startsWith("http") ? m.a.createElement("a", yi({
						href: s
					}, a), t) : m.a.createElement(Oi.a, yi({
						to: s
					}, a), t)
				},
				Pi = n("./src/reddit/components/HeaderUserDropdown/UserMenu/shared.m.less"),
				ji = n.n(Pi);
			const Si = e => {
					const {
						title: t,
						titleClassName: n
					} = e;
					return m.a.createElement("span", {
						className: Object(v.a)(ji.a.title, n)
					}, t)
				},
				_i = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: o
					} = e;
					return m.a.createElement("button", {
						className: Object(v.a)(ji.a.secondLevelButton, t),
						onClick: n
					}, m.a.createElement(Si, {
						title: s,
						titleClassName: o
					}))
				},
				ki = e => {
					const {
						className: t,
						href: n,
						onClick: s,
						title: o,
						titleClassName: r,
						rel: a
					} = e;
					return m.a.createElement(Ei, {
						className: Object(v.a)(ji.a.secondLevelButton, t),
						href: n,
						onClick: s,
						rel: a
					}, m.a.createElement(Si, {
						title: o,
						titleClassName: r
					}))
				},
				wi = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: o,
						isEnabled: r
					} = e;
					return m.a.createElement("button", {
						className: Object(v.a)(ji.a.secondLevelSwitch, t),
						onClick: n,
						onMouseDown: e => {
							e.preventDefault()
						}
					}, m.a.createElement(Si, {
						title: s,
						titleClassName: o
					}), m.a.createElement(ci.a, {
						className: ji.a.toggleSwitch,
						"data-redditstyle": !0,
						on: r,
						redditStyle: !0,
						tabIndex: -1
					}))
				};
			var Ii = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				Ni = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				Mi = n("./src/reddit/icons/svgs/SparkleGradient/index.tsx"),
				Ti = n("./src/reddit/selectors/avatarMarketing.ts"),
				Ai = n("./src/reddit/selectors/meta.ts"),
				Ri = n("./src/reddit/components/HeaderUserDropdown/avatar.m.less"),
				Li = n.n(Ri);
			const Fi = (e, t) => e && m.a.createElement("div", {
				className: Li.a.marketingBadge
			}, m.a.createElement(Ii.a, {
				className: Li.a.marketingAsset,
				headshot: e
			}), o.fbt._("New", null, {
				hk: "2TRcjA"
			}), !t && m.a.createElement(m.a.Fragment, null, m.a.createElement(Mi.a, {
				className: Object(v.a)(Li.a.sparkle, Li.a.sparkle1)
			}), m.a.createElement(Mi.a, {
				className: Object(v.a)(Li.a.sparkle, Li.a.sparkle2)
			}), m.a.createElement(Mi.a, {
				className: Object(v.a)(Li.a.sparkle, Li.a.sparkle3)
			}), m.a.createElement(Mi.a, {
				className: Object(v.a)(Li.a.sparkle, Li.a.sparkle4)
			})));
			var Di = ({
				useNewButtonComponent: e,
				onClick: t
			}) => {
				var n;
				const s = Object(p.d)(),
					r = Object(Vr.a)(),
					a = Object(Jt.Z)(),
					i = Object(p.e)(e => e.user.account),
					c = Object(p.e)(gs.c),
					d = Object(p.e)(xt.c),
					l = Object(p.e)(Ti.b),
					u = Object(p.e)(Ti.a),
					b = () => s(Object(xi.b)("nav")),
					h = Object(p.e)(Ai.i).startsWith("en");
				if ((null === (n = null == a ? void 0 : a.meta) || void 0 === n ? void 0 : n.name) === C.Jb.AVATAR) return null;
				!l && d && s(Object(Ci.a)()), u && r(Ni.d);
				const g = i && i.snoovatarFullBodyAsset ? o.fbt._("Style Avatar", null, {
					hk: "1HIsKA"
				}) : o.fbt._("Create Avatar", null, {
					hk: "3kfCbX"
				});
				if (e) {
					const e = m.a.createElement(m.a.Fragment, null, g, h && Fi(u, c));
					return m.a.createElement(_i, {
						onClick: () => {
							b(), "function" == typeof t && t()
						},
						title: e,
						titleClassName: Li.a.avatarLinkBody
					})
				}
				const f = Object(di.c)((null == i ? void 0 : i.snoovatarFullBodyAsset) ? Oc("avatar_style") : Oc("add"), ((e, t, n, s) => o => m.a.createElement("div", {
					className: `${Li.a.avatarLinkBody} ${o.className}`
				}, e, s && Fi(t, n)))(g, u, c, h));
				return m.a.createElement(f, {
					onClick: b
				})
			};
			const Ui = e => {
					const {
						icon: t,
						title: n,
						titleClassName: s
					} = e;
					return m.a.createElement("span", {
						className: ji.a.headingContent
					}, m.a.createElement("span", {
						className: ji.a.iconContainer
					}, t), m.a.createElement("span", {
						className: Object(v.a)(ji.a.title, s)
					}, n))
				},
				Bi = e => {
					const {
						className: t,
						icon: n,
						onClick: s,
						title: o,
						titleClassName: r
					} = e;
					return m.a.createElement("button", {
						className: Object(v.a)(ji.a.button, t),
						onClick: s
					}, m.a.createElement(Ui, {
						icon: n,
						title: o,
						titleClassName: r
					}))
				},
				Gi = e => {
					const {
						className: t,
						href: n,
						icon: s,
						onClick: o,
						rel: r,
						title: a,
						titleClassName: i
					} = e;
					return m.a.createElement(Ei, {
						className: Object(v.a)(ji.a.button, t),
						href: n,
						rel: r,
						onClick: o
					}, m.a.createElement(Ui, {
						icon: s,
						title: a,
						titleClassName: i
					}))
				};
			class qi extends m.a.Component {
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
						title: t,
						children: n,
						icon: s,
						url: o,
						className: r
					} = this.props, a = null !== (e = this.props.isOpen) && void 0 !== e ? e : this.state.isOpen;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("button", {
						className: ji.a.button,
						type: "button",
						onClick: e => {
							this.toggleOpen(e), "function" == typeof this.props.onClick && this.props.onClick()
						}
					}, m.a.createElement("span", {
						className: ji.a.headingContent,
						tabIndex: -1
					}, m.a.createElement("span", {
						className: ji.a.iconContainer
					}, s), m.a.createElement("span", {
						className: ji.a.title
					}, o ? m.a.createElement(Ei, {
						className: ji.a.innerLink,
						href: o
					}, t) : m.a.createElement(m.a.Fragment, null, t)), m.a.createElement(bs.a, {
						name: "caret_down",
						className: Object(v.a)(ji.a.chevronIcon, {
							[ji.a["m-expanded"]]: a
						})
					}))), m.a.createElement("div", {
						className: Object(v.a)(ji.a.contentContainer, ji.a["m-collapsible"], {
							[ji.a.isOpen]: a
						}, r)
					}, n))
				}
			}
			var Hi = qi;
			var Wi = [{
					link: {
						title: "Gaming",
						url: "/t/gaming/"
					},
					sublinks: [{
						title: "Valheim",
						url: "/t/valheim/"
					}, {
						title: "Genshin Impact",
						url: "/t/genshin_impact/"
					}, {
						title: "Minecraft",
						url: "/t/minecraft/"
					}, {
						title: "Pokimane",
						url: "/t/pokimane/"
					}, {
						title: "Halo Infinite",
						url: "/t/halo_infinite/"
					}, {
						title: "Call of Duty: Warzone",
						url: "/t/call_of_duty_warzone/"
					}, {
						title: "Path of Exile",
						url: "/t/path_of_exile/"
					}, {
						title: "Hollow Knight: Silksong",
						url: "/t/hollow_knight_silksong/"
					}, {
						title: "Escape from Tarkov",
						url: "/t/escape_from_tarkov/"
					}, {
						title: "Watch Dogs: Legion",
						url: "/t/watch_dogs_legion/"
					}]
				}, {
					link: {
						title: "Sports",
						url: "/t/sports/"
					},
					sublinks: [{
						title: "NFL",
						url: "/t/nfl/"
					}, {
						title: "NBA",
						url: "/t/nba/"
					}, {
						title: "Megan Anderson",
						url: "/t/megan_anderson/"
					}, {
						title: "Atlanta Hawks",
						url: "/t/atlanta_hawks/"
					}, {
						title: "Los Angeles Lakers",
						url: "/t/los_angeles_lakers/"
					}, {
						title: "Boston Celtics",
						url: "/t/boston_celtics/"
					}, {
						title: "Arsenal F.C.",
						url: "/t/arsenal_fc/"
					}, {
						title: "Philadelphia 76ers",
						url: "/t/philadelphia_76ers/"
					}, {
						title: "Premier League",
						url: "/t/premier_league/"
					}, {
						title: "UFC",
						url: "/t/ufc/"
					}]
				}, {
					link: {
						title: "Television",
						url: "/t/television/"
					},
					sublinks: [{
						title: "The Real Housewives of Atlanta",
						url: "/t/the_real_housewives_of_atlanta/"
					}, {
						title: "The Bachelor",
						url: "/t/the_bachelor/"
					}, {
						title: "Sister Wives",
						url: "/t/sister_wives/"
					}, {
						title: "90 Day Fiance",
						url: "/t/90_day_fiance/"
					}, {
						title: "Wife Swap",
						url: "/t/wife_swap/"
					}, {
						title: "The Amazing Race Australia",
						url: "/t/the_amazing_race_australia/"
					}, {
						title: "Married at First Sight",
						url: "/t/married_at_first_sight/"
					}, {
						title: "The Real Housewives of Dallas",
						url: "/t/the_real_housewives_of_dallas/"
					}, {
						title: "My 600-lb Life",
						url: "/t/my_600lb_life/"
					}, {
						title: "Last Week Tonight with John Oliver",
						url: "/t/last_week_tonight_with_john_oliver/"
					}]
				}, {
					link: {
						title: "Celebrity",
						url: "/t/celebrity/"
					},
					sublinks: [{
						title: "Kim Kardashian",
						url: "/t/kim_kardashian/"
					}, {
						title: "Doja Cat",
						url: "/t/doja_cat/"
					}, {
						title: "Iggy Azalea",
						url: "/t/iggy_azalea/"
					}, {
						title: "Anya Taylor-Joy",
						url: "/t/anya_taylorjoy/"
					}, {
						title: "Jamie Lee Curtis",
						url: "/t/jamie_lee_curtis/"
					}, {
						title: "Natalie Portman",
						url: "/t/natalie_portman/"
					}, {
						title: "Henry Cavill",
						url: "/t/henry_cavill/"
					}, {
						title: "Millie Bobby Brown",
						url: "/t/millie_bobby_brown/"
					}, {
						title: "Tom Hiddleston",
						url: "/t/tom_hiddleston/"
					}, {
						title: "Keanu Reeves",
						url: "/t/keanu_reeves/"
					}]
				}, {
					link: {
						title: "Business, Economics, and Finance",
						url: "/t/business_economics_and_finance/"
					},
					sublinks: [{
						title: "GameStop",
						url: "/t/gamestop/"
					}, {
						title: "Moderna",
						url: "/t/moderna/"
					}, {
						title: "Pfizer",
						url: "/t/pfizer/"
					}, {
						title: "Johnson & Johnson",
						url: "/t/johnson_johnson/"
					}, {
						title: "AstraZeneca",
						url: "/t/astrazeneca/"
					}, {
						title: "Walgreens",
						url: "/t/walgreens/"
					}, {
						title: "Best Buy",
						url: "/t/best_buy/"
					}, {
						title: "Novavax",
						url: "/t/novavax/"
					}, {
						title: "SpaceX",
						url: "/t/spacex/"
					}, {
						title: "Tesla",
						url: "/t/tesla/"
					}]
				}, {
					link: {
						title: "Crypto",
						url: "/t/cryptocurrency/"
					},
					sublinks: [{
						title: "Cardano",
						url: "/t/cardano/"
					}, {
						title: "Dogecoin",
						url: "/t/dogecoin/"
					}, {
						title: "Algorand",
						url: "/t/algorand/"
					}, {
						title: "Bitcoin",
						url: "/t/bitcoin/"
					}, {
						title: "Litecoin",
						url: "/t/litecoin/"
					}, {
						title: "Basic Attention Token",
						url: "/t/basic_attention_token/"
					}, {
						title: "Bitcoin Cash",
						url: "/t/bitcoin_cash/"
					}]
				}, {
					link: {
						title: "More Topics",
						url: "/topics/a-1/"
					},
					sublinks: [{
						title: "Animals and Pets",
						url: "/t/animals_and_pets/"
					}, {
						title: "Anime",
						url: "/t/anime/"
					}, {
						title: "Art",
						url: "/t/art/"
					}, {
						title: "Cars and Motor Vehicles",
						url: "/t/cars_and_motor_vehicles/"
					}, {
						title: "Crafts and DIY",
						url: "/t/crafts_and_diy/"
					}, {
						title: "Culture, Race, and Ethnicity",
						url: "/t/culture_race_and_ethnicity/"
					}, {
						title: "Ethics and Philosophy",
						url: "/t/ethics_and_philosophy/"
					}, {
						title: "Fashion",
						url: "/t/fashion/"
					}, {
						title: "Food and Drink",
						url: "/t/food_and_drink/"
					}, {
						title: "History",
						url: "/t/history/"
					}, {
						title: "Hobbies",
						url: "/t/hobby/"
					}, {
						title: "Law",
						url: "/t/law/"
					}, {
						title: "Learning and Education",
						url: "/t/learning_and_education/"
					}, {
						title: "Military",
						url: "/t/military/"
					}, {
						title: "Movies",
						url: "/t/movie/"
					}, {
						title: "Music",
						url: "/t/music/"
					}, {
						title: "Place",
						url: "/t/place/"
					}, {
						title: "Podcasts and Streamers",
						url: "/t/podcasts_and_streamers/"
					}, {
						title: "Politics",
						url: "/t/politics/"
					}, {
						title: "Programming",
						url: "/t/programming/"
					}, {
						title: "Reading, Writing, and Literature",
						url: "/t/reading_writing_and_literature/"
					}, {
						title: "Religion and Spirituality",
						url: "/t/religion_and_spirituality/"
					}, {
						title: "Science",
						url: "/t/science/"
					}, {
						title: "Tabletop Games",
						url: "/t/tabletop_game/"
					}, {
						title: "Technology",
						url: "/t/technology/"
					}, {
						title: "Travel",
						url: "/t/travel/"
					}]
				}],
				Vi = n("./src/reddit/components/HeaderUserDropdown/UserMenu/ExploreMenu/styles.m.less"),
				Ki = n.n(Vi);
			var zi = ({
				isOpen: e,
				onClick: t
			}) => {
				return m.a.createElement(Hi, {
					icon: m.a.createElement(bs.a, {
						name: "discover"
					}),
					title: o.fbt._("Explore", null, {
						hk: "4xNnBs"
					}),
					isOpen: e,
					onClick: t
				}, m.a.createElement("span", null, Wi.map(({
					link: e,
					sublinks: t
				}) => m.a.createElement(Hi, {
					className: Ki.a.collapsibleContainer,
					key: null == e ? void 0 : e.url,
					title: (null == e ? void 0 : e.title) || "",
					url: (null == e ? void 0 : e.url) || ""
				}, t.map(e => m.a.createElement(ki, {
					className: Ki.a.basicLink,
					href: e.url,
					key: e.url,
					title: e.title
				}))))))
			};
			var Qi = e => {
				const {
					title: t,
					children: n,
					icon: s
				} = e;
				return m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
					className: ji.a.heading
				}, m.a.createElement("span", {
					className: ji.a.headingContent
				}, m.a.createElement("span", {
					className: ji.a.iconContainer
				}, s), m.a.createElement("span", {
					className: ji.a.title
				}, t))), m.a.createElement("div", {
					className: ji.a.contentContainer
				}, n))
			};
			const Ji = () => {
					const e = Object(p.d)(),
						t = Object(Vr.a)(),
						n = Object(p.e)(Pt.W);
					return m.a.createElement(wi, {
						isEnabled: n,
						onClick: () => {
							t(pi(n)), (t => e(Object(ca.w)(t)))(!n)
						},
						title: o.fbt._("Dark Mode", null, {
							hk: "1pZGTO"
						})
					})
				},
				Xi = () => {
					const e = Object(p.d)(),
						t = Object(Vr.a)(),
						n = Object(p.e)(e => e.user.account),
						s = Object(p.e)(ni.a);
					return n && n.isMod ? m.a.createElement(wi, {
						isEnabled: s,
						onClick: () => {
							t(Object(li.i)(!s)), (() => e(Object(Ka.b)()))()
						},
						title: o.fbt._("Mod Mode", null, {
							hk: "1gLGCN"
						})
					}) : null
				},
				Zi = () => {
					const e = Object(p.d)(),
						t = Object(A.b)(),
						n = Object(p.e)(Pt.j),
						s = Object(p.e)(Pt.ib);
					return n ? m.a.createElement(Qi, {
						icon: m.a.createElement(bs.a, {
							name: "profile"
						}),
						title: o.fbt._("My Stuff", null, {
							hk: "15XGVl"
						})
					}, m.a.createElement(wi, {
						title: o.fbt._("Online Status", null, {
							hk: "3t396G"
						}),
						isEnabled: s,
						onClick: () => {
							t(bi(!s)), (t => e(Object(ca.F)({
								showPresence: t
							})))(!s)
						}
					}), m.a.createElement(ki, {
						title: o.fbt._("Profile", null, {
							hk: "czKk9"
						}),
						href: null == n ? void 0 : n.url
					}), m.a.createElement(Di, {
						onClick: () => e(Object(Xr.j)({
							tooltipId: "USER_DROPDOWN_ID"
						})),
						useNewButtonComponent: !0
					}), m.a.createElement(ki, {
						title: o.fbt._("User Settings", null, {
							hk: "2HIDAR"
						}),
						href: "/settings/"
					})) : null
				},
				Yi = () => {
					return Object(p.e)(Pt.j) ? m.a.createElement(Qi, {
						title: o.fbt._("View Options", null, {
							hk: "142L6P"
						}),
						icon: m.a.createElement(bs.a, {
							name: "views"
						})
					}, m.a.createElement(Xi, null), m.a.createElement(Ji, null)) : null
				},
				$i = ({
					isOpen: e,
					onClick: t
				}) => {
					return Object(p.e)(Pt.j) ? null : m.a.createElement(Hi, {
						icon: m.a.createElement(bs.a, {
							name: "settings"
						}),
						title: o.fbt._("Settings", null, {
							hk: "1AC3DI"
						}),
						isOpen: e,
						onClick: t
					}, m.a.createElement(Ji, null))
				},
				ec = ({
					isOpen: e,
					onClick: t
				}) => m.a.createElement(Hi, {
					icon: m.a.createElement(bs.a, {
						name: "rules"
					}),
					title: o.fbt._("Terms & Policies", null, {
						hk: "3sa1sF"
					}),
					isOpen: e,
					onClick: t
				}, m.a.createElement(ki, {
					href: "https://www.redditinc.com/policies/user-agreement",
					title: o.fbt._("User Agreement", null, {
						hk: "kfqI"
					})
				}), m.a.createElement(ki, {
					href: "https://www.redditinc.com/policies/privacy-policy",
					title: o.fbt._("Privacy Policy", null, {
						hk: "y8Vyn"
					})
				}), m.a.createElement(ki, {
					href: "https://www.redditinc.com/policies/content-policy",
					title: o.fbt._("Content Policy", null, {
						hk: "2xjmLL"
					})
				}), m.a.createElement(ki, {
					href: "https://www.redditinc.com/policies/moderator-guidelines",
					title: o.fbt._("Moderator Guidelines", null, {
						hk: "2AfPVY"
					})
				}));
			var tc = () => [{
				url: "https://reddit.onelink.me/MRHZ/b3d845e",
				title: () => o.fbt._("Reddit iOS", null, {
					hk: "2W8O9q"
				}),
				rel: "nofollow"
			}, {
				url: "https://reddit.onelink.me/MRHZ/4c212f61",
				title: () => o.fbt._("Reddit Android", null, {
					hk: "SmUA3"
				}),
				rel: "nofollow"
			}, {
				url: "https://www.redditgifts.com",
				title: () => o.fbt._("Reddit Gifts", null, {
					hk: "3FWQGX"
				})
			}, {
				url: "/posts/2020/",
				title: () => o.fbt._("Rereddit", null, {
					hk: "1DyKwo"
				})
			}, {
				url: "/subreddits/a-1/",
				title: () => o.fbt._("Communities", null, {
					hk: "9RIu9"
				})
			}, {
				url: "https://www.redditinc.com",
				title: () => o.fbt._("About Reddit", null, {
					hk: "3cosfA"
				})
			}, {
				url: "https://www.redditinc.com/advertising",
				title: () => o.fbt._("Advertise", null, {
					hk: "3eP3Lb"
				})
			}, {
				url: "https://redditblog.com",
				title: () => o.fbt._("Blog", null, {
					hk: "2XlvLX"
				})
			}, {
				url: "https://www.redditinc.com/careers",
				title: () => o.fbt._("Careers", null, {
					hk: "g9gZP"
				})
			}, {
				url: "https://www.redditinc.com/press",
				title: () => o.fbt._("Press", null, {
					hk: "FYgfC"
				})
			}];
			const nc = ({
				url: e,
				title: t,
				rel: n
			}) => m.a.createElement(ki, {
				href: e,
				key: e,
				rel: n,
				title: t()
			});
			var sc = ({
					isLoggedIn: e,
					isOpen: t,
					onClick: n,
					sendEvent: s,
					url: r
				}) => m.a.createElement(Hi, {
					icon: m.a.createElement(bs.a, {
						name: "info"
					}),
					title: o.fbt._("More", null, {
						hk: "42foEw"
					}),
					isOpen: t,
					onClick: n
				}, tc().map(nc), e ? m.a.createElement(ki, {
					href: "https://old.reddit.com" + r,
					title: o.fbt._("Visit Old Reddit", null, {
						hk: "3Fo9ag"
					}),
					onClick: () => {
						s(e => ({
							source: "redesignbanner",
							action: "click",
							noun: "2xdropdown_visit_old",
							screen: Et.screen(e),
							subreddit: Et.subreddit(e)
						}))
					}
				}) : null),
				oc = n("./src/reddit/components/HeaderUserDropdown/UserMenu/index.m.less"),
				rc = n.n(oc);

			function ac() {
				return (ac = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ic = e => {
					e.nativeEvent.stopImmediatePropagation()
				},
				cc = e => {
					const t = e && e.coins || 0;
					return o.fbt._({
						"*": "{number of coins} coins",
						_1: "1 coin"
					}, [o.fbt._plural(t, "number of coins")], {
						hk: "qmnnm"
					})
				};
			var dc;
			! function(e) {
				e[e.ExploreMenu = 0] = "ExploreMenu", e[e.MoreMenu = 1] = "MoreMenu", e[e.Settings = 2] = "Settings", e[e.TermsAndPolicies = 3] = "TermsAndPolicies"
			}(dc || (dc = {}));
			var lc = e => {
					const {
						closeUserDropdown: t,
						dispatchOpenLoginModal: n,
						isInSrCreationEntrypointBehaviorExperiment: s,
						isInSrCreationEntrypointCopyExperiment: r,
						logoutUser: a,
						openCommunityCreationModal: i,
						sendEvent: c,
						shouldShowCreateCommunityItem: d,
						url: l,
						user: p
					} = e, [b, h] = Object(u.useState)(dc.TermsAndPolicies), g = e => () => {
						h(b === e ? null : e)
					}, f = e => ({
						onClick: g(e),
						isOpen: b === e
					}), v = !!p, C = () => {
						t(), n()
					};
					return m.a.createElement("div", {
						onClick: ic
					}, m.a.createElement(Zi, null), m.a.createElement(Yi, null), m.a.createElement(() => d ? m.a.createElement(Bi, {
						icon: m.a.createElement(bs.a, {
							name: "community"
						}),
						onClick: () => {
							s === Qt.Dd.Tabs ? window.open("/subreddits/create", "_blank") : i(), c(Object(ui.a)())
						},
						title: Object(Ls.a)(r, o.fbt._("Create a Community", null, {
							hk: "3QGru4"
						}))
					}) : null, null), m.a.createElement(() => m.a.createElement(Gi, {
						icon: m.a.createElement(bs.a, {
							name: "coins"
						}),
						href: "/coins",
						title: m.a.createElement(m.a.Fragment, null, m.a.createElement("span", null, o.fbt._("Coins", null, {
							hk: "2g3szC"
						})), m.a.createElement("span", {
							className: rc.a.meta
						}, cc(p))),
						onClick: () => {
							Object(xo.d)(xo.a.GoldPayment, !0), e.sendEvent(fi())
						},
						titleClassName: rc.a.coinsTitle,
						className: rc.a.coinsLink
					}), null), m.a.createElement(() => m.a.createElement(Gi, {
						icon: m.a.createElement(bs.a, {
							name: "premium"
						}),
						href: "/premium",
						onClick: () => {
							Object(xo.d)(xo.a.GoldPayment, !0), e.sendEvent(hi())
						},
						title: o.fbt._("Premium", null, {
							hk: "Ib64I"
						})
					}), null), m.a.createElement(() => m.a.createElement(Gi, {
						icon: m.a.createElement(bs.a, {
							name: "powerup"
						}),
						href: "/powerups",
						onClick: () => {
							Object(xo.d)(xo.a.GoldPayment, !0), e.sendEvent(gi())
						},
						title: o.fbt._("Powerups", null, {
							hk: "2rTyID"
						})
					}), null), m.a.createElement(zi, f(dc.ExploreMenu)), m.a.createElement(() => m.a.createElement(Gi, {
						href: Rs.c.popular,
						icon: m.a.createElement(bs.a, {
							name: "rising"
						}),
						title: o.fbt._("Popular Posts", null, {
							hk: "1bbqfg"
						})
					}), null), m.a.createElement(sc, ac({}, f(dc.MoreMenu), {
						isLoggedIn: v,
						url: l,
						sendEvent: c
					})), m.a.createElement($i, f(dc.Settings)), m.a.createElement(() => m.a.createElement(Gi, {
						href: "https://www.reddithelp.com/hc/en-us",
						icon: m.a.createElement(bs.a, {
							name: "help"
						}),
						title: o.fbt._("Help Center", null, {
							hk: "4sGjc0"
						})
					}), null), m.a.createElement(ec, f(dc.TermsAndPolicies)), m.a.createElement(() => v ? m.a.createElement(Bi, {
						icon: m.a.createElement(bs.a, {
							name: "logout"
						}),
						onClick: a,
						title: o.fbt._("Log Out", null, {
							hk: "2SjIc8"
						})
					}) : m.a.createElement(Bi, {
						icon: m.a.createElement(bs.a, {
							name: "profile"
						}),
						onClick: C,
						title: o.fbt._("Sign Up or Log In", null, {
							hk: "3pedCU"
						})
					}), null), m.a.createElement(() => m.a.createElement("div", {
						className: ji.a.copyrightContainer
					}, m.a.createElement("span", {
						className: ji.a.copyrightText
					}, o.fbt._("© {year} Reddit, Inc. All rights reserved", [o.fbt._param("year", (new Date).getFullYear().toString())], {
						hk: "1rgU6A"
					}))), null))
				},
				uc = n("./src/reddit/components/HeaderUserDropdown/index.m.less"),
				mc = n.n(uc);

			function pc() {
				return (pc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const bc = "undefined" != typeof window && "new.reddit.com" !== window.location.hostname,
				hc = M.a.wrapped(ii.a, "Dropdown", mc.a),
				gc = Object(ri.a)(hc),
				fc = e => t => m.a.createElement(bs.a, pc({
					name: e
				}, t)),
				vc = e => m.a.createElement(di.a, {
					className: Object(v.a)(mc.a.button, e.className),
					"data-redditstyle": !0,
					onClick: e.onClick
				}, e.children, m.a.createElement("div", {
					className: mc.a.buttonText
				}, e.displayText), m.a.createElement(ci.a, {
					className: mc.a.toggleSwitch,
					"data-redditstyle": !0,
					redditStyle: !0,
					on: e.isEnabled
				}));
			var Cc = Object(A.c)(e => {
				const {
					logoutUser: t,
					dispatchOpenLoginModal: n,
					isCrawler: s,
					isModModeEnabled: r,
					isPresenceToggleEnabled: a,
					navbarLikeMweb: i,
					nightmode: c,
					requestAwardKarma: d,
					showPresence: l,
					toggleModMode: p,
					user: b,
					isInSrCreationEntrypointCopyExperiment: h,
					isInSrCreationEntrypointBehaviorExperiment: g,
					shouldShowCreateCommunityItem: f,
					openCommunityCreationModal: v
				} = e, C = b && b.id;
				Object(u.useEffect)(() => {
					d()
				}, [C]);
				const x = Object(di.c)(fc("settings"), o.fbt._("User Settings", null, {
						hk: "46J4vT"
					})),
					O = Object(di.b)(fc("help"), o.fbt._("Help Center", null, {
						hk: "4sGjc0"
					})),
					y = Object(di.b)(fc("external_link"), o.fbt._("Visit Old Reddit", null, {
						hk: "3Fo9ag"
					})),
					E = Object(di.c)(fc("logout"), o.fbt._("Log In / Sign Up", null, {
						hk: "4xbfvS"
					})),
					P = Object(di.c)(fc("logout"), o.fbt._("Log Out", null, {
						hk: "2SjIc8"
					})),
					S = Object(di.c)(vi.a, o.fbt._("Opt In to New Reddit", null, {
						hk: "4jiTxA"
					})),
					_ = (e => {
						const t = e && e.coins || 0;
						return o.fbt._({
							"*": "{number of coins} coins",
							_1: "1 coin"
						}, [o.fbt._plural(t, "number of coins")], {
							hk: "qmnnm"
						})
					})(b),
					k = Object(di.c)(fc("coins"), o.fbt._("Coins", null, {
						hk: "25oh47"
					}), {
						meta: _
					}),
					w = Object(di.c)(fc("premium"), o.fbt._("Premium", null, {
						hk: "1SD1CS"
					})),
					I = Object(di.c)(fc("powerup"), o.fbt._("Powerups", null, {
						hk: "3ND1rQ"
					})),
					N = Object(di.c)(fc("community"), Object(Ls.a)(h, o.fbt._("Create a Community", null, {
						hk: "3QGru4"
					})));
				return i ? s ? m.a.createElement(ai.a, null, m.a.createElement(lc, e)) : m.a.createElement(gc, {
					className: mc.a.navbarLikeMweb,
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID",
					tooltipPosition: ["right", "top"],
					targetPosition: ["right", "bottom"]
				}, m.a.createElement(lc, e)) : m.a.createElement(gc, {
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID"
				}, b && a && m.a.createElement(m.a.Fragment, null, m.a.createElement("h3", {
					className: mc.a.sectionHeader,
					role: "heading"
				}, o.fbt._("Online Status", null, {
					hk: "23SMHV"
				})), m.a.createElement(vc, {
					className: mc.a.presenceToggle,
					displayText: l ? o.fbt._("On", null, {
						hk: "3aW5MW"
					}) : o.fbt._("Off", null, {
						hk: "pRgYU"
					}),
					isEnabled: l,
					onClick: () => {
						e.sendEvent(bi(!l)), e.toggleShowPresence(!l)
					}
				})), b && m.a.createElement(u.Fragment, null, m.a.createElement("h3", {
					className: mc.a.sectionHeader,
					role: "heading"
				}, o.fbt._("My Stuff", null, {
					hk: "47vhMb"
				})), (e => {
					const t = o.fbt._("Profile", null, {
							hk: "czKk9"
						}),
						n = Object(di.c)(fc("profile"), t);
					return m.a.createElement(n, {
						href: e.url
					})
				})(b), m.a.createElement(Di, null), m.a.createElement(x, {
					href: "/settings"
				})), m.a.createElement("h3", {
					className: mc.a.sectionHeader,
					role: "heading"
				}, o.fbt._("View Options", null, {
					hk: "3bZPKB"
				})), b && b.isMod && m.a.createElement(vc, {
					displayText: o.fbt._("Mod Mode", null, {
						hk: "3Rb4sj"
					}),
					isEnabled: r,
					onClick: () => {
						e.sendEvent(Object(li.i)(!r)), p()
					}
				}, m.a.createElement(bs.a, {
					name: "mod_mode",
					className: mc.a.modModeIcon
				})), m.a.createElement(vc, {
					displayText: o.fbt._("Night Mode", null, {
						hk: "2lyxcc"
					}),
					isEnabled: c,
					onClick: () => {
						e.sendEvent(pi(c)), e.toggleNightmode(!c)
					}
				}, m.a.createElement(bs.a, {
					name: "night",
					className: mc.a.nightIcon
				})), m.a.createElement("h3", {
					className: mc.a.sectionHeader,
					role: "heading"
				}, o.fbt._("More Stuff", null, {
					hk: "4Gad8T"
				})), f && m.a.createElement(N, {
					className: mc.a.entrypointLink,
					onClick: () => {
						g === Qt.Dd.Tabs ? window.open("/subreddits/create", "_blank") : v(), e.sendEvent(Object(ui.a)())
					}
				}), m.a.createElement(u.Fragment, null, m.a.createElement(k, {
					href: "/coins",
					onClick: () => {
						Object(xo.d)(xo.a.GoldPayment, !0), e.sendEvent(fi())
					}
				}), m.a.createElement(w, {
					href: "/premium",
					onClick: () => {
						Object(xo.d)(xo.a.GoldPayment, !0), e.sendEvent(hi())
					}
				}), m.a.createElement(I, {
					href: "/powerups",
					onClick: () => {
						Object(xo.d)(xo.a.GoldPayment, !0), e.sendEvent(gi())
					}
				})), m.a.createElement(O, {
					href: "https://www.reddithelp.com"
				}), b && m.a.createElement(y, {
					href: "https://old.reddit.com" + e.url,
					onClick: () => {
						e.sendEvent(e => ({
							source: "redesignbanner",
							action: "click",
							noun: "2xdropdown_visit_old",
							screen: Et.screen(e),
							subreddit: Et.subreddit(e)
						}))
					}
				}), !bc && b && m.a.createElement(S, {
					href: "",
					onClick: () => {
						e.sendEvent(e => ({
							source: "redesignbanner",
							action: "click",
							noun: "2xdropdown_opt_in",
							screen: Et.screen(e),
							subreddit: Et.subreddit(e)
						})), e.onOptIntoRedesign()
					}
				}), m.a.createElement("div", {
					className: mc.a.divider
				}), b ? m.a.createElement(P, {
					href: "#",
					onClick: e => {
						t(), e.preventDefault()
					}
				}) : m.a.createElement(E, {
					href: "#",
					onClick: t => {
						Object(j.a)(t) && (t.preventDefault(), t.stopPropagation(), n(), e.sendEvent(Object(Zr.b)()))
					}
				}))
			});

			function xc() {
				return (xc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Oc = e => t => m.a.createElement(bs.a, xc({
					name: e
				}, t)),
				yc = Object(p.b)(() => Object(f.c)({
					isCrawler: e => !!Object(si.a)(e),
					isModModeEnabled: ni.a,
					isOpen: Object(oi.b)("USER_DROPDOWN_ID"),
					isPresenceToggleEnabled: ti.b,
					isInSrCreationEntrypointBehaviorExperiment: Gs.a,
					isInSrCreationEntrypointCopyExperiment: Gs.b,
					shouldShowCreateCommunityItem: Pt.hb,
					navbarLikeMweb: ei.a,
					nightmode: Pt.W,
					showPresence: Pt.ib,
					url: Dt.q
				}), (e, t) => ({
					closeUserDropdown: () => e(Object(Xr.j)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					toggleNightmode: t => e(Object(ca.w)(t)),
					toggleShowPresence: t => e(Object(ca.F)({
						showPresence: t
					})),
					onOptIntoRedesign: () => e(Object(Va.a)()),
					onOptOutOfRedesign: () => {
						"new.reddit.com" !== window.location.host ? (Pe.a.get("rseor3") && Pe.a.remove("rseor3", {
							domain: B.a.cookieDomain
						}), e(Object(Va.b)(!0))) : window.location.host = "old.reddit.com"
					},
					requestAwardKarma: () => {
						t.user && !t.user.totalKarma && e(Object(za.f)(Object(vt.e)(t.user)))
					},
					dispatchOpenLoginModal: () => e(Object(Jr.h)()),
					logoutUser: () => {
						const {
							googleOneTapIFrame: n
						} = t;
						n && n.contentWindow && (console.log("postMessage: disableAutoSelect"), n.contentWindow.postMessage({
							type: "disableAutoSelect"
						}, Object(Ja.a)())), e(Object(da.p)())
					},
					toggleModMode: () => e(Object(Ka.b)()),
					openCommunityCreationModal: () => e(Object(Fs.a)("/subreddits/create"))
				}));
			var Ec = Object(Jt.t)({
					pageLayer: e => e
				})(yc(e => {
					const {
						isPresenceToggleEnabled: t,
						requestAwardKarma: n,
						showPresence: s,
						user: r
					} = e, a = r && r.id;
					Object(u.useEffect)(() => {
						n()
					}, [a]);
					return m.a.createElement("div", {
						className: Object(v.a)(mc.a.container, Qa.e)
					}, m.a.createElement($a.a, {
						"aria-expanded": e.isOpen,
						"aria-haspopup": !0,
						className: Object(v.a)(e.className, mc.a.inlineButton, {
							[mc.a.dropdownOpen]: e.isOpen,
							[mc.a.isLoggedOut]: !r,
							[mc.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						id: "USER_DROPDOWN_ID",
						onClick: () => {
							e.onClick(), e.sendEventWithName("self_user_icon")
						}
					}, m.a.createElement("span", {
						className: mc.a.accountDisplayText
					}, (e => e ? m.a.createElement("span", {
						className: Object(v.a)(mc.a.accountWrapper, mc.a.isLoggedIn),
						id: "email-collection-tooltip-id"
					}, e.accountIcon && m.a.createElement(Os.a, {
						className: mc.a.imgIcon,
						wrapperClassName: mc.a.imgIconWrapper,
						shouldShowPresenceIndicator: t && s
					}), m.a.createElement("span", {
						className: mc.a.accountDetails
					}, m.a.createElement("span", {
						className: mc.a.username
					}, e.displayText, e.isGold && m.a.createElement(Ya.a, {
						className: mc.a.premiumFontIcon,
						title: o.fbt._("Reddit Premium", null, {
							hk: "4Dwpyn"
						}),
						isFilled: !0
					})), m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: mc.a.accountKarma
					}, m.a.createElement(bs.a, {
						name: "karma",
						isFilled: !0,
						className: mc.a.karmaIcon
					}), m.a.createElement("span", null, (e => {
						const t = Object(Xa.a)(e),
							n = Object(Wa.b)(t);
						return o.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [o.fbt._plural(t, "karma count", n)], {
							hk: "ndlXe"
						})
					})(e))), !!e.coins && m.a.createElement("span", {
						className: mc.a.accountCoins
					}, m.a.createElement(Za.a, {
						className: mc.a.coinFontIcon,
						isFilled: !0
					}), m.a.createElement("span", null, (e => Object(Wa.b)(e.coins || 0, {
						displayFull: !1,
						roundDown: !0
					}))(e)))))) : m.a.createElement("span", {
						className: Object(v.a)(mc.a.accountWrapper, mc.a.isLoggedOut)
					}, m.a.createElement(bs.a, {
						name: "user",
						className: mc.a.defaultProfileIcon
					})))(e.user), m.a.createElement(bs.a, {
						name: "caret_down"
					})), m.a.createElement(Do.a, null, o.fbt._("User account menu", null, {
						hk: "2TJXIP"
					}))), m.a.createElement(Cc, e))
				})),
				Pc = n("./src/reddit/components/InboxTooltip/hooked.m.less"),
				jc = n.n(Pc);

			function Sc() {
				return (Sc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var _c = m.a.memo((function({
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
					}, [e]), e ? m.a.createElement("div", Sc({
						id: "INBOX--TOOLTIP",
						className: Object(v.a)(jc.a.tooltip, {
							[jc.a.visible]: n
						})
					}, t.popperProps), t.children) : null
				})),
				kc = n("./src/reddit/components/InboxTooltip/Loader.ts"),
				wc = n("./src/reddit/components/InboxTooltip/index.m.less"),
				Ic = n.n(wc);
			const Nc = M.a.wrapped(Me.a, "CloseIcon", Ic.a),
				Mc = e => m.a.createElement("div", {
					className: Ic.a.welcomeTooltipContainer
				}, m.a.createElement("button", {
					className: Ic.a.closeButton,
					onClick: e.onClose
				}, m.a.createElement(Nc, null)), m.a.createElement("h3", {
					className: Ic.a.tooltipTitle
				}, o.fbt._("Welcome to your new inbox!", null, {
					hk: "4h8pcK"
				})), m.a.createElement("p", {
					className: Ic.a.tooltipDescription
				}, o.fbt._("Now it’s easier to stay up-to-date on your activity and know what’s happening in your communities.", null, {
					hk: "14J4MZ"
				})));
			var Tc = n("./src/reddit/components/ModerationDropdown/index.tsx"),
				Ac = n("./src/reddit/components/Settings/modalIds.ts"),
				Rc = n("./src/reddit/helpers/trackers/inbox.ts"),
				Lc = n("./src/reddit/helpers/trackers/navigation.ts"),
				Fc = n("./src/reddit/hooks/useInboxExposureSeen.ts"),
				Dc = n("./node_modules/icepick/icepick.js");
			const Uc = Object(Dc.freeze)({
				name: "offset",
				options: {
					offset: [-134, 6]
				}
			});
			var Bc = n("./src/reddit/routes/index.ts"),
				Gc = n("./src/reddit/selectors/appBadges.ts");
			var qc = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				Hc = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				Wc = n("./src/reddit/selectors/sso.ts");
			const Vc = "change-username-tooltip-id",
				Kc = "email-verification-tooltip-id",
				zc = m.a.memo((function({
					moderationDropdownOpen: e,
					...t
				}) {
					const n = Object(Wr.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: La.a.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: n.target.ref
					}, m.a.createElement(Aa, {
						"aria-expanded": e,
						"aria-haspopup": !0,
						"aria-label": o.fbt._("Moderation", null, {
							hk: "1qCuzM"
						}),
						id: Tc.a,
						onClick: t.onOpenModerationDropdown,
						isOpen: e
					}, m.a.createElement(la.a, {
						isActive: t.isModerateIconLit,
						unreadCount: -1,
						showEmpty: !0
					}), m.a.createElement(bs.a, {
						className: La.a.icon2020,
						name: "mod"
					})), m.a.createElement(Hr.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, o.fbt._("Moderation", null, {
						hk: "4uQPyx"
					}))), m.a.createElement(Tc.b, {
						className: La.a.moderationDropdown,
						isOpen: e,
						unreadNotifications: t.unreadNotifications,
						sendEventWithName: t.sendEventWithName
					}))
				})),
				Qc = m.a.memo((function(e) {
					const t = Object(Wr.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: La.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, m.a.createElement("a", {
						className: La.a.link,
						href: `${B.a.redditUrl}/chat`,
						onClick: Object(na.a)(e.onClickChat)
					}, m.a.createElement(Fa, {
						badgeCount: e.badgeCount,
						hasUnreadMessages: e.hasUnreadMessages
					}))), m.a.createElement(Hr.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, o.fbt._("Chat", null, {
						hk: "4nXRWH"
					})))
				})),
				Jc = m.a.memo((function({
					onClickMail: e,
					unreadNotifications: t
				}) {
					const n = Object(Wr.a)();
					return m.a.createElement("span", {
						className: La.a.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: n.target.ref
					}, m.a.createElement("a", {
						className: La.a.link,
						href: t && t.hasUnreadMail ? "/message/unread" : "/message/inbox",
						onClick: e
					}, m.a.createElement(qa, {
						unreadCount: t && t.inboxCount || 0
					})), m.a.createElement(Hr.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, o.fbt._("Messages", null, {
						hk: "Txokh"
					})))
				})),
				Xc = {
					placement: "bottom",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				Zc = m.a.memo((function(e) {
					const t = Object(Wr.a)(),
						n = function(e) {
							const t = Object(u.useMemo)(() => {
								const t = Object(ea.a)(e);
								return Object(Dc.updateIn)(t, ["modifiers"], e => Object(Dc.push)(e, Uc))
							}, [e]);
							return Object(ea.b)(t)
						}(),
						s = Object(ea.b)(Xc),
						[r, a] = Object(Fc.a)(e.userId),
						i = Object(p.e)(Bs.d),
						c = Object(p.e)(Bs.e),
						d = Object(p.e)(Bs.c),
						l = d || c,
						b = Object(u.useCallback)(() => {
							n.hide(), t.hide(), i && a()
						}, [n, t, i]),
						h = Object(u.useCallback)(() => {
							s.hide(), t.hide(), l && a()
						}, [s, t, l]);
					Object(u.useEffect)(() => {
						l && !r && setTimeout(() => {
							s.show()
						}, 3e3)
					}, []);
					const g = Object(u.useRef)(!0);
					Object(u.useEffect)(() => {
						g.current ? g.current = !1 : d && h()
					}, [e.pageUrl]), Object($r.a)("INBOX--TOOLTIP", b);
					const f = l && !n.visible;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: La.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: Object(Yr.a)(t.target.ref, n.target.ref, s.target.ref)
					}, m.a.createElement(Aa, {
						"aria-expanded": n.visible,
						"aria-haspopup": !0,
						"aria-label": o.fbt._("Open notifications inbox", null, {
							hk: "1b2BKn"
						}),
						className: La.a.notificationInboxIconContainer,
						onClick: t => {
							t.stopPropagation(), n.visible ? n.hide() : n.show(), e.sendNavClickInbox(), l && !n.visible && h()
						},
						isOpen: n.visible
					}, m.a.createElement(Ha, {
						unreadCount: e.unreadCount
					})), !n.visible && !s.visible && m.a.createElement(Hr.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, m.a.createElement("div", null, o.fbt._("Notifications", null, {
						hk: "vAOKt"
					}))), m.a.createElement(_c, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, m.a.createElement(kc.a, {
						isOpen: n.visible,
						hideTooltip: b,
						userId: e.userId
					})), f && m.a.createElement(ba.a, {
						arrowProps: s.arrowProps,
						popperProps: s.popperProps,
						visible: s.visible,
						tooltipId: "welcome-tooltip-id",
						className: La.a.welcomeTooltip,
						arrowClassName: La.a.welcomeTooltipArrow
					}, m.a.createElement(Mc, {
						onClose: h
					}))))
				})),
				Yc = m.a.memo((function(e) {
					const t = Object(Wr.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: La.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, m.a.createElement("button", {
						className: La.a.link,
						"aria-label": o.fbt._("Create Post", null, {
							hk: "4wbXc8"
						}),
						onClick: e.onClickCreatePost
					}, m.a.createElement(bs.a, {
						className: La.a.icon2020,
						name: "add"
					}))), m.a.createElement(Hr.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, o.fbt._("Create Post", null, {
						hk: "1TvNGq"
					})))
				})),
				$c = Object(Jt.t)({
					pageLayer: e => e
				}),
				ed = Object(f.c)({
					activeDropdownId: oi.a,
					appBadges: Gc.b,
					chatDirectMessagesCount: Gc.e,
					email: Pt.m,
					hasUnreadChatMessages: Gc.f,
					inboxBadgeCount: Gc.g,
					isChangeUsernameTooltipShowing: e => e.isChangeUsernameTooltipShowing,
					isCustomizeFlyoutShowing: e => e.user.isCustomizeFlyoutShowing,
					isEmailVerificationTooltipShowing: e => e.isEmailVerificationTooltipShowing,
					isGoogleOneTapEnabled: qc.c,
					isInboxAppBadgingGqlEnabled: Hc.a,
					isInboxRedesignActive: Bs.g,
					isModerator: yt.j,
					isNameEditable: Pt.M,
					isResponsiveSettingsEnabled: Zt.a,
					shouldOpenEmailVerificationTooltip: (e, {
						pageLayer: t
					}) => Object(Jt.K)(t) && !!Object(Pt.m)(e) && !Object(Pt.A)(e) && Object(Pt.K)(e) && !Object(Pt.I)(e),
					shouldShowChangeUsernameModals: Wc.c,
					unreadNotifications: Pt.lb
				}),
				td = Object(p.b)(ed, (e, t) => ({
					closeChangeUsernameTooltip: () => e(Object(oa.d)()),
					closeEmailVerificationTooltip: () => e(Object(aa.b)()),
					showEmailVerficiationTooltip: () => e(Object(aa.b)()),
					fetchAppBadges: () => e(Object(sa.c)()),
					onChatClick: () => e(Object(ra.f)()),
					onDismissCustomizeFlyout: () => e(Object(ca.s)()),
					onOpenModerationDropdown: () => {
						e(Object(Xr.h)({
							tooltipId: Tc.a
						})), e(Object(vo.q)())
					},
					onOpenUserDropdown: () => e(Object(Xr.h)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					openChangeUsernameModal: () => {
						e(Object(Se.h)(Ac.b))
					},
					openKeepUsernameModal: () => {
						e(Object(Se.h)(Ac.f))
					},
					toggleChangeEmailModal: () => {
						e(Object(aa.b)()), e(Object(Se.i)(Ac.a))
					},
					resendEmail: () => e(Object(da.v)(fa.a)),
					requestCreatePost: () => {
						t.pageLayer && e(ia.n(t.pageLayer))
					},
					startChangeUsernameFlow: t => {
						const n = Object(h.b)(t);
						e(Object(oa.f)(n))
					}
				}));
			class nd extends m.a.Component {
				constructor() {
					super(...arguments), this.state = {
						googleOneTapIFrame: null
					}, this.sendNavClickInbox = () => this.props.sendEvent(Object(Rc.q)({
						badgeCount: this.props.inboxBadgeCount
					})), this.sendEventWithName = e => this.props.sendEvent(Object(Lc.b)(e)), this.onClickMail = () => this.sendEventWithName("mail"), this.onClickCreatePost = () => {
						this.sendEventWithName("create_post"), this.props.requestCreatePost()
					}, this.onClickChat = () => {
						this.sendEventWithName("chat"), this.props.onChatClick()
					}, this.onOpenModerationDropdown = () => {
						this.props.onOpenModerationDropdown(), this.sendEventWithName("mod_entry")
					}, this.confirmNavigate = e => {
						const t = Object(ta.a)(e.pathname, Bc.a),
							n = t && t.route && t.route.meta && t.route.meta.name;
						return !n || n !== C.Jb.POST_CREATION && n !== C.Jb.PROFILE_OVERVIEW || (this.props.startChangeUsernameFlow(e.pathname), !1)
					}, this.exposeIFrameElement = e => {
						this.setState({
							googleOneTapIFrame: e
						})
					}
				}
				componentDidMount() {
					this.props.showEmailVerficiationTooltip(), this.props.isInboxAppBadgingGqlEnabled && Ho()(this.props.appBadges) && this.props.fetchAppBadges()
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
						isChangeUsernameTooltipShowing: c,
						isCustomizeFlyoutShowing: d,
						isEmailVerificationTooltipShowing: l,
						isGoogleOneTapEnabled: p,
						isInboxRedesignActive: b,
						isModerator: h,
						isNameEditable: g,
						isResponsiveSettingsEnabled: f,
						onDismissCustomizeFlyout: C,
						onOpenUserDropdown: x,
						openChangeUsernameModal: O,
						openKeepUsernameModal: y,
						pageLayer: E,
						resendEmail: P,
						shouldOpenEmailVerificationTooltip: j,
						shouldShowChangeUsernameModals: S,
						toggleChangeEmailModal: _,
						unreadNotifications: k,
						user: w
					} = this.props, {
						googleOneTapIFrame: I
					} = this.state, N = !(!k || !k.hasUnreadModmail && !k.hasUnreadOldModmail), M = w && Object(vt.e)(w) || "", T = Object(v.a)({
						[La.a["m-responsive"]]: f
					});
					return m.a.createElement(gt.a, {
						id: Kc,
						ref: e => this.container = e,
						className: n
					}, m.a.createElement(gt.a, {
						className: La.a.headerLinks,
						id: Vc
					}, h && m.a.createElement(zc, {
						isModerateIconLit: N,
						moderationDropdownOpen: e === Tc.a,
						onOpenModerationDropdown: this.onOpenModerationDropdown,
						sendEventWithName: this.sendEventWithName,
						unreadNotifications: k
					}), w && m.a.createElement(u.Fragment, null, m.a.createElement(Qc, {
						onClickChat: this.onClickChat,
						badgeCount: t,
						hasUnreadMessages: a
					}), b ? m.a.createElement(Zc, {
						sendNavClickInbox: this.sendNavClickInbox,
						unreadCount: i,
						pageUrl: null == E ? void 0 : E.url,
						userId: w.id
					}) : m.a.createElement(Jc, {
						onClickMail: this.onClickMail,
						unreadNotifications: k
					}), m.a.createElement(Yc, {
						onClickCreatePost: this.onClickCreatePost
					}), m.a.createElement("span", {
						className: La.a.iconWrapper
					}, m.a.createElement(ka.a, null)))), m.a.createElement(Ec, {
						className: La.a.headerUserDropdown,
						googleOneTapIFrame: I,
						onClick: x,
						user: w,
						sendEventWithName: this.sendEventWithName
					}), p && m.a.createElement("div", {
						className: La.a.loggedInGoogleOneTap
					}, m.a.createElement(_a, {
						exposeIFrameElement: this.exposeIFrameElement
					})), d && m.a.createElement(Ga, {
						onCloseFlyout: C
					}), m.a.createElement(ya, {
						closeTooltip: o,
						email: r,
						isOpen: j && l,
						resendEmail: P,
						toggleChangeEmailModal: _,
						tooltipId: Kc
					}), m.a.createElement(ha, {
						email: r,
						shouldOpenTooltip: j
					}), g && !f && m.a.createElement(u.Fragment, null, m.a.createElement(pa.a, {
						closeTooltip: s,
						isOpen: c && !S,
						openChangeUsernameModal: O,
						openKeepUsernameModal: y,
						tooltipId: Vc,
						username: M
					}), S && m.a.createElement(ma.a, {
						isResponsiveSettingsEnabled: f,
						overlayClassName: T,
						username: M,
						withOverlay: !0
					}), m.a.createElement(ua.a, {
						confirmNavigate: this.confirmNavigate
					})))
				}
			}
			var sd = Object(A.c)($c(td(nd))),
				od = n("./src/reddit/components/Header/User/index.m.less"),
				rd = n.n(od);
			const {
				fbt: ad
			} = n("./node_modules/fbt/lib/FbtPublic.js"), id = Object(f.c)({
				account: e => e.user.account,
				origin: Ai.j
			}), cd = m.a.memo(e => m.a.createElement("div", {
				className: Object(v.a)(e.className, rd.a.row)
			}, !e.account && function(e) {
				const t = e.pageLayer,
					n = B.a.accountManagerOrigin,
					s = t ? t.url : "/",
					o = t && t.meta && t.meta.name === C.Jb.EXPLORE ? encodeURIComponent(e.origin) : encodeURIComponent(e.origin + s);
				return m.a.createElement("div", {
					className: rd.a.loggedOutRow
				}, m.a.createElement(Ne.m, {
					redditStyle: !0,
					className: rd.a.button,
					href: `${n}/login/?dest=${o}`,
					onClick: t => {
						Object(j.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenLoginModal(), e.sendEvent(Object(Zr.a)("nav")))
					}
				}, ad._("Log In", null, {
					hk: "4Cxw0g"
				})), m.a.createElement(Ne.j, {
					redditStyle: !0,
					className: Object(v.a)(rd.a.separator, rd.a.button),
					href: `${n}/register/?dest=${o}`,
					onClick: t => {
						Object(j.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenRegisterModal(), e.sendEvent(Object(Zr.c)("nav")))
					}
				}, ad._("Sign Up", null, {
					hk: "2WZPuJ"
				})))
			}(e), m.a.createElement(sd, {
				className: Object(v.a)({
					[rd.a.loggedOut]: !e.account
				}),
				user: e.account
			})));
			var dd = Object(Jt.t)()(Object(p.b)(id, e => ({
					onOpenLoginModal: () => {
						e(Object(Se.k)({
							actionSource: Se.a.HeaderLogin
						})), e(Object(Jr.h)())
					},
					onOpenRegisterModal: () => {
						e(Object(Se.k)({
							actionSource: Se.a.HeaderSignup
						})), e(Object(Jr.j)())
					},
					closeUserDropdown: () => e(Object(Xr.j)({
						tooltipId: "USER_DROPDOWN_ID"
					}))
				}))(Object(A.c)(cd))),
				ld = n("./src/reddit/components/Header/index.m.less"),
				ud = n.n(ld);

			function md() {
				return (md = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const pd = M.a.header("HeaderDynamicStyles", ud.a),
				bd = Object(f.c)({
					isLoggedIn: Pt.K,
					isNightMode: Pt.W,
					isResponsiveSettingsEnabled: Zt.a,
					isBladeOpen: e => !!e.structuredStyles.isEditing
				}),
				hd = Object(Jt.t)({
					categoryName: Jt.b,
					pageLayer: e => e
				}),
				gd = e => {
					const t = Object(u.useContext)(g.a);
					return m.a.createElement("div", {
						className: ud.a.left
					}, m.a.createElement(Do.a, null, o.fbt._("Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts", null, {
						hk: "ToBNc"
					})), m.a.createElement(Fo.b, null), m.a.createElement(us.a, {
						"aria-label": o.fbt._("Home", null, {
							hk: "3PmGmU"
						}),
						className: ud.a.centeredRow,
						to: "/",
						onClick: e.onReloadFrontpage
					}, m.a.createElement(Dr.a, {
						className: Object(v.a)(ud.a.snoo, {
							[ud.a.snooExp]: t
						})
					}), m.a.createElement(Ur.a, {
						className: ud.a.wordmark
					})), e.children)
				},
				fd = e => m.a.createElement("div", {
					className: ud.a.right
				}, e.children, m.a.createElement(dd, null)),
				vd = e => {
					const t = Object(u.useContext)(g.a);
					return m.a.createElement("div", {
						className: Object(v.a)(ud.a.layout, {
							[ud.a.layoutContainer]: t
						})
					}, m.a.createElement(gd, md({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), m.a.createElement(Lo, null), m.a.createElement(Fr, {
						className: ud.a.search
					})), m.a.createElement(fd, null, m.a.createElement(Qr, {
						className: ud.a.quickLinks
					})))
				},
				Cd = e => {
					const t = Object(u.useContext)(g.a);
					return m.a.createElement("div", {
						className: Object(v.a)(ud.a.layout, {
							[ud.a.layoutContainer]: t
						})
					}, m.a.createElement(gd, md({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), m.a.createElement("div", {
						className: ud.a.searchContainer
					}, m.a.createElement(Fr, {
						className: ud.a.search
					}))), m.a.createElement(fd, null))
				};
			var xd = hd(Object(p.b)(bd, e => ({
					onReloadFrontpage: () => e(Object(Oo.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Frontpage~ModListing"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))(!0))
				}))((function(e) {
					let t;
					const n = Object(u.useContext)(g.a);
					return t = e.isLoggedIn ? vd : Cd, m.a.createElement(pd, {
						"data-redditstyle": !0,
						className: Object(v.a)(ud.a.container, e.className, {
							[ud.a.bladeIsOpen]: e.isBladeOpen,
							[ud.a.navbarHeightContainer]: n
						})
					}, m.a.createElement(t, {
						categoryName: e.categoryName,
						onReloadFrontpage: e.onReloadFrontpage
					}), e.isResponsiveSettingsEnabled && m.a.createElement(qr, {
						className: ud.a.MwebResponsiveHeader
					}))
				}))),
				Od = n("./src/reddit/components/LightboxHeader/index.tsx"),
				yd = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				Ed = n("./src/reddit/components/PinnedSubscriptions/index.m.less"),
				Pd = n.n(Ed);
			const {
				fbt: jd
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Sd = Object(f.c)({
				currentPage: Is
			}), _d = Object(p.b)(Sd, e => ({
				onUnpinSubscriptions: () => e(Object(S.j)())
			})), kd = Object(Jt.t)();
			var wd = M.a.wrapped(kd(_d(e => m.a.createElement("div", {
					"data-redditstyle": !0,
					className: e.className
				}, m.a.createElement("div", {
					className: Pd.a.title
				}, m.a.createElement(oo, {
					className: Pd.a.listHeader
				}, jd._("My Communities", null, {
					hk: "1CmPOc"
				})), m.a.createElement("div", {
					className: Pd.a.unpin,
					onClick: e.onUnpinSubscriptions
				}, m.a.createElement(bs.a, {
					name: "close",
					className: Pd.a.icon
				}))), m.a.createElement(No, {
					currentPage: e.currentPage
				})))), "Component", Pd.a),
				Id = n("./src/reddit/components/Survey/index.tsx"),
				Nd = n("./src/reddit/components/ThemeProvider/index.tsx"),
				Md = n("./src/reddit/actions/toaster.ts");
			const Td = e => t => ({
					source: "toast",
					action: "view",
					noun: e
				}),
				Ad = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...Et.actionInfo(t),
						reason: "primary"
					}
				}),
				Rd = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...Et.actionInfo(t),
						reason: "secondary"
					}
				});
			var Ld = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				Fd = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				Dd = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				Ud = n("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				Bd = n("./src/reddit/icons/svgs/Unlock/index.tsx"),
				Gd = n("./src/reddit/models/Toast/index.ts"),
				qd = n("./src/reddit/selectors/structuredStyles.ts"),
				Hd = n("./src/reddit/constants/colors.ts"),
				Wd = n("./src/reddit/components/Toaster/PlainBread.m.less"),
				Vd = n.n(Wd);

			function Kd() {
				return (Kd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const zd = e => {
				const t = Hd.b;
				switch (e.kind) {
					case Gd.b.Error:
					case Gd.b.AuthError:
					case Gd.b.SuccessEndBroadcast:
						return t.warning;
					case Gd.b.SuccessCommunity:
						return t.op;
					case Gd.b.SuccessCommunityGreen:
					case Gd.b.SuccessMod:
					case Gd.b.SuccessUnlockComment:
						return t.approved;
					case Gd.b.SuccessLockComment:
						return t.reported;
					case Gd.b.EuCookiePolicy:
					case Gd.b.UappBanner:
					case Gd.b.Undo:
					default:
						return t.op
				}
			};
			class Qd extends m.a.Component {
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
			const Jd = M.a.wrapped(Qd, "PlainBread", Vd.a);
			var Xd = e => m.a.createElement(Jd, Kd({}, e, {
					style: {
						...e.style || {},
						"--Toaster-indicatorColor": zd(e)
					}
				})),
				Zd = n("./src/reddit/components/Toaster/StyledComponents.m.less"),
				Yd = n.n(Zd);
			const $d = M.a.span("Text", Yd.a);
			var el = n("./src/reddit/components/Toaster/index.m.less"),
				tl = n.n(el);
			const {
				fbt: nl
			} = n("./node_modules/fbt/lib/FbtPublic.js"), sl = M.a.wrapped(Dd.a, "AuthErrorToastIcon", tl.a), ol = M.a.wrapped(Ne.i, "AuthErrorToastPrimaryButton", tl.a);
			class rl extends m.a.Component {
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
					}, m.a.createElement(Xd, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(sl, null), m.a.createElement($d, null, nl._("Something went wrong loading this page. Try again?", null, {
						hk: "3k6ebn"
					})), m.a.createElement(ol, {
						type: "submit"
					}, nl._("Reload Page", null, {
						hk: "3Hrcyc"
					}))))
				}
			}
			var al = rl,
				il = n("./src/lib/cookieConsent/index.ts"),
				cl = n("./src/reddit/controls/Link/index.tsx"),
				dl = n("./src/reddit/components/Toaster/EuCookiePolicyToast.m.less"),
				ll = n.n(dl);
			const {
				fbt: ul
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ml = M.a.div("Icon", ll.a), pl = () => m.a.createElement(ml, {
				style: {
					backgroundImage: `url(${B.a.assetPath}/img/snoo-upvote.png)`
				}
			}), bl = M.a.wrapped(Ne.i, "PrimaryButton", ll.a), hl = M.a.wrapped(Xd, "Bread", ll.a);
			class gl extends m.a.PureComponent {
				constructor() {
					super(...arguments), this.allowAllCookies = e => {
						e.preventDefault(), Object(il.b)({
							opted: !0,
							nonessential: !0
						}), this.props.onClose("allow-all")
					}, this.allowEssentialCookiesOnly = e => {
						e.preventDefault(), Object(il.b)({
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
					return m.a.createElement("section", null, m.a.createElement(hl, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n                translateY(${e.style.y}px)\n                scale(${e.style.x}, ${e.style.x})\n              `
						}
					}, m.a.createElement(pl, null), m.a.createElement("section", {
						className: ll.a.EuCookiePolicyBody
					}, m.a.createElement($d, null, ul._("We use cookies on our websites for a number of purposes, including analytics and performance, functionality and advertising.", null, {
						hk: "4prHYN"
					}), " ", m.a.createElement(cl.a, {
						href: "https://www.redditinc.com/policies/cookie-notice",
						target: "_blank"
					}, ul._("Learn more about Reddit’s use of cookies", null, {
						hk: "1bxpLb"
					})), "."), m.a.createElement("section", {
						className: ll.a.EuCookiePolicyOptions
					}, m.a.createElement("form", {
						onSubmit: this.allowEssentialCookiesOnly
					}, m.a.createElement(bl, {
						type: "submit"
					}, ul._("Reject non-essential", null, {
						hk: "M79jf"
					}))), m.a.createElement("form", {
						onSubmit: this.allowAllCookies
					}, m.a.createElement(bl, {
						type: "submit"
					}, ul._("Accept all", null, {
						hk: "1tnS6V"
					})))))))
				}
			}
			var fl, vl = gl;
			! function(e) {
				e.LoggedOutMaxSubscriptions = "max_subscriptions"
			}(fl || (fl = {}));
			var Cl = n("./src/reddit/controls/Typography/index.tsx"),
				xl = n("./src/reddit/components/Toaster/MilestoneToast.m.less"),
				Ol = n.n(xl);

			function yl() {
				return (yl = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const El = M.a.div("Container", Ol.a),
				Pl = M.a.img("SideImage", Ol.a),
				jl = M.a.div("Main", Ol.a),
				Sl = M.a.div("SubTitle", Ol.a),
				_l = Cl.a,
				kl = M.a.wrapped(Ne.j, "PrimaryLinkButton", Ol.a),
				wl = M.a.wrapped(Me.a, "CloseIcon", Ol.a);
			class Il extends m.a.Component {
				constructor() {
					super(...arguments), this.onSignup = e => {
						e.stopPropagation(), e.preventDefault(), this.props.onClose(), this.props.onSignup(), this.props.sendEvent(Ad(this.props.name))
					}
				}
				componentDidMount() {
					this.props.sendEvent(Td(this.props.name))
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
					return m.a.createElement(El, {
						key: t,
						style: {
							...s,
							transform: `\n            translateY(${s.y}px)\n            scale(${s.x}, ${s.x})\n          `
						}
					}, m.a.createElement(wl, {
						onClick: this.props.onClose
					}), m.a.createElement(Pl, {
						srcSet: n
					}), m.a.createElement(jl, null, m.a.createElement(Sl, null, r), m.a.createElement(Cl.b, null, a), m.a.createElement(_l, null, e), m.a.createElement(kl, {
						"data-redditstyle": !0,
						href: "/register",
						onClick: this.onSignup
					}, o.fbt._("Sign Up", null, {
						hk: "2iMVSI"
					}))))
				}
			}
			const Nl = Object(p.b)(null, e => ({
					onSignup: () => e(Object(Jr.j)())
				}))(Object(A.c)(Il)),
				Ml = `${Tl("subscribe-cap.png")} 1x,\n  ${Tl("subscribe-cap@2x.png")} 2x,`;

			function Tl(e) {
				return `${B.a.assetPath}/img/banner/${e}`
			}
			const Al = 3;
			var Rl = n("./src/lib/permanentCookieOptions.ts");
			const Ll = e => `${e}:1527210000`;
			var Fl = n("./src/reddit/components/Toaster/UappBannerToast.m.less"),
				Dl = n.n(Fl);
			const {
				fbt: Ul
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Bl = M.a.div("Icon", Dl.a), Gl = () => m.a.createElement(Bl, {
				style: {
					backgroundImage: `url(${B.a.assetPath}/img/snoo-upvote.png)`
				}
			}), ql = M.a.wrapped(Ne.i, "PrimaryButton", Dl.a), Hl = M.a.wrapped(Xd, "Bread", Dl.a);
			class Wl extends m.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), Pe.a.set(Bt.j, Ll(Al), Object(Rl.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, m.a.createElement(Hl, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(Gl, null), m.a.createElement($d, null, Ul._("Reddit is updating its {=User Agreement} and {=Privacy Policy} .", [Ul._param("=User Agreement", m.a.createElement(cl.a, {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, Ul._("User Agreement", null, {
						hk: "XS57W"
					}))), Ul._param("=Privacy Policy", m.a.createElement(cl.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, Ul._("Privacy Policy", null, {
						hk: "4j7vx4"
					})))], {
						hk: "TxCpk"
					}), " "), m.a.createElement(ql, {
						type: "submit"
					}, Ul._("Got it", null, {
						hk: "2WpndK"
					}))))
				}
			}
			var Vl = Wl;

			function Kl() {
				return (Kl = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const zl = [],
				Ql = {
					stiffness: 200,
					damping: 24,
					precision: .01
				},
				Jl = {
					opacity: .5,
					x: .5,
					y: 50
				},
				Xl = {
					opacity: Object(N.spring)(0),
					x: Object(N.spring)(.6),
					y: Object(N.spring)(80, Ql)
				},
				Zl = M.a.wrapped(Dd.a, "SnooFacepalm", tl.a),
				Yl = M.a.wrapped(Ud.a, "SnooHappy", tl.a),
				$l = M.a.wrapped(Cs.b, "SubredditIcon", tl.a),
				eu = M.a.img("CustomIcon", tl.a),
				tu = M.a.div("Container", tl.a),
				nu = M.a.wrapped(Me.a, "Close", tl.a),
				su = M.a.wrapped(Ld.a, "LockIcon", tl.a),
				ou = M.a.wrapped(Bd.a, "UnlockIcon", tl.a),
				ru = M.a.wrapped(Fd.a, "RemoveIcon", tl.a),
				au = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(nu, Kl({
					className: "CloseIcon"
				}, e))),
				iu = M.a.wrapped(Xd, "Bread", tl.a),
				cu = Object(f.c)({
					subredditIcon: qd.b,
					toastSlices: e => e.toaster
				}),
				du = Object(p.b)(cu, e => ({
					dismissToast: t => () => e(Object(Md.g)(t)),
					onButtonClick: (t, n) => () => {
						e(t), e(Object(Md.g)(n))
					}
				}));
			class lu extends m.a.Component {
				constructor() {
					super(...arguments), this.getStyles = e => uu(e, this.props.toastSlices), this.getWillEnterStyles = () => Jl, this.getWillLeaveStyles = () => Xl
				}
				render() {
					return this.props.toastSlices.length ? m.a.createElement(N.TransitionMotion, {
						defaultStyles: zl,
						styles: this.getStyles,
						willLeave: this.getWillLeaveStyles,
						willEnter: this.getWillEnterStyles
					}, e => m.a.createElement(tu, null, e.map(e => {
						const t = e.data,
							n = {
								...e.style,
								transform: `\n                  translateY(${e.style.y}px)\n                  scale(${e.style.x}, ${e.style.x})\n                `
							};
						if (t.kind === Gd.b.Custom && void 0 !== t.customToastType) {
							const s = pu[t.customToastType];
							return m.a.createElement(s, {
								key: e.key,
								toast: t,
								style: n,
								onClose: this.props.dismissToast(t.id)
							})
						}
						if (t.kind === Gd.b.UappBanner) return m.a.createElement(Vl, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === Gd.b.EuCookiePolicy) return m.a.createElement(vl, {
							key: e.key,
							toast: t,
							style: n,
							sendViewEvent: () => this.props.sendEvent(Td("eu_essential_policy")),
							onClose: e => {
								switch (this.props.dismissToast(t.id)(), e) {
									case "allow-all":
										this.props.sendEvent(Ad("eu_essential_cookie_policy"));
										break;
									case "allow-essential":
										this.props.sendEvent(Rd("eu_essential_cookie_policy"))
								}
							}
						});
						if (t.kind === Gd.b.AuthError) return m.a.createElement(al, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						const s = t.kind === Gd.b.Modal ? Ne.i : Ne.o,
							o = t.kind === Gd.b.Modal ? Ne.l : Ne.o;
						return m.a.createElement(iu, {
							className: t.kind === Gd.b.Modal ? tl.a.mModal : void 0,
							key: e.key,
							kind: t.kind,
							sendEvent: t.name ? () => this.props.sendEvent(Td(t.name)) : void 0,
							style: n
						}, m.a.createElement("div", {
							className: tl.a.ContentWrapper
						}, mu(t, this.props.subredditIcon), t.kind === Gd.b.SuccessLockComment && m.a.createElement(su, null), t.kind === Gd.b.SuccessUnlockComment && m.a.createElement(ou, null), m.a.createElement($d, null, t.text)), m.a.createElement("div", {
							className: tl.a.ButtonsWrapper
						}, t.buttonText && t.buttonAction && m.a.createElement(s, {
							onClick: () => {
								this.props.onButtonClick(t.buttonAction, t.id)(), t.name && this.props.sendEvent(Ad(t.name))
							}
						}, t.buttonText), t.secondButtonText && t.secondButtonAction && m.a.createElement(o, {
							onClick: () => {
								this.props.onButtonClick(t.secondButtonAction, t.id)(), t.name && this.props.sendEvent(Rd(t.name))
							}
						}, t.secondButtonText)), m.a.createElement(au, {
							onClick: () => {
								var e, n;
								null === (e = this.props.dismissToast(t.id)) || void 0 === e || e(), null === (n = t.onClose) || void 0 === n || n.call(t)
							}
						}))
					}))) : null
				}
			}
			const uu = (e = [], t) => t.map(e => ({
					data: e,
					key: e.id || (new Date).toString(),
					style: {
						opacity: Object(N.spring)(1),
						x: Object(N.spring)(1, Ql),
						y: Object(N.spring)(0, Ql)
					}
				})),
				mu = (e, t) => {
					if (e.customIconAsset) return m.a.createElement(eu, {
						src: e.customIconAsset
					});
					switch (e.kind) {
						case Gd.b.Error:
							return m.a.createElement(Zl, null);
						case Gd.b.SuccessEndBroadcast:
							return m.a.createElement(ru, null);
						case Gd.b.SuccessAward:
						case Gd.b.SuccessCommunity:
						case Gd.b.SuccessCommunityGreen:
							return m.a.createElement(Yl, null);
						case Gd.b.SuccessMod:
							return m.a.createElement($l, {
								primaryColor: t.color,
								iconUrl: t.url
							})
					}
				},
				pu = {
					[Gd.a.subscribeCap]: e => m.a.createElement(Nl, yl({
						name: fl.LoggedOutMaxSubscriptions,
						sideImage: Ml,
						title: o.fbt._("Oops! You need to Sign Up to join more communities", null, {
							hk: "21CE4w"
						}),
						subTitle: null,
						content: o.fbt._("Sign up to save your communities and secure your account", null, {
							hk: "45W3vB"
						})
					}, e))
				};
			var bu = du(Object(A.c)(lu)),
				hu = n("./src/reddit/featureFlags/profileCollections.ts");
			const gu = () => e => ({
					source: "banner",
					noun: "update_old_browser",
					action: "view",
					banner: {
						id: "update_old_browser"
					}
				}),
				fu = () => e => ({
					source: "banner",
					noun: "old_browser_r2",
					action: "click",
					banner: {
						id: "update_old_browser"
					}
				});
			var vu = n("./src/reddit/components/AlertBanner/Wrapper.m.less"),
				Cu = n.n(vu);
			var xu = M.a.div("Wrapper", Cu.a),
				Ou = n("./src/reddit/components/AlertBanner/index.m.less"),
				yu = n.n(Ou);
			const {
				fbt: Eu
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Pu = () => m.a.createElement(xu, {
				className: Object(v.a)(yu.a.wrapper, yu.a.suspended)
			}, m.a.createElement("span", null, Eu._("Your account has been suspended.", null, {
				hk: "36oqxa"
			}), " "), m.a.createElement("a", {
				className: yu.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, Eu._("Learn more", null, {
				hk: "1OTc8q"
			}))), ju = () => m.a.createElement(xu, {
				className: Object(v.a)(yu.a.wrapper, yu.a.fpr)
			}, m.a.createElement("span", null, Eu._("Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password.", null, {
				hk: "4CbjOV"
			}), " "), m.a.createElement("a", {
				className: yu.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, Eu._("Learn more", null, {
				hk: "1OTc8q"
			}))), Su = ({
				updateLink: e,
				onClickOldReddit: t
			}) => m.a.createElement(xu, {
				className: Object(v.a)(yu.a.wrapper, yu.a.deprecated)
			}, m.a.createElement("span", null, Eu._("Looks like you're using new Reddit on an old browser. The site may not work properly if you don't {update your browser} !", [Eu._param("update your browser", m.a.createElement(_u, {
				link: e
			}, Eu._("update your browser", null, {
				hk: "2TB4hp"
			})))], {
				hk: "gC2GV"
			}), " "), m.a.createElement("span", null, Eu._("If you do not update your browser, we suggest you visit {old reddit} .", [Eu._param("old reddit", m.a.createElement("a", {
				className: yu.a.underlineLink,
				href: B.a.oldRedditUrl,
				onClick: t
			}, Eu._("old reddit", null, {
				hk: "Sv1DJ"
			})))], {
				hk: "4qKEir"
			}))), _u = ({
				children: e,
				link: t
			}) => null !== t ? m.a.createElement("a", {
				className: yu.a.underlineLink,
				href: t
			}, e) : m.a.createElement("span", null, e);
			class ku extends m.a.PureComponent {
				constructor(e) {
					super(e), this.onClickOldReddit = () => {
						this.props.sendEvent(fu())
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.props.browserInfo && this.props.browserInfo.isDeprecated && this.props.sendEvent(gu())
				}
				render() {
					const {
						browserInfo: e,
						showFPR: t,
						showSuspended: n
					} = this.props;
					return e && e.isDeprecated ? m.a.createElement(Su, {
						updateLink: e.updateLink,
						onClickOldReddit: this.onClickOldReddit
					}) : t ? m.a.createElement(ju, null) : n ? m.a.createElement(Pu, null) : null
				}
			}
			var wu = Object(A.c)(ku),
				Iu = n("./src/reddit/components/AlertBanner/heights.ts"),
				Nu = n("./src/reddit/components/PopupPortal/index.tsx"),
				Mu = n("./src/reddit/constants/componentSizes.ts"),
				Tu = n("./src/reddit/constants/elementIds.ts"),
				Au = n("./src/reddit/constants/parameters.ts"),
				Ru = n("./src/reddit/constants/posts.ts"),
				Lu = n("./src/reddit/contexts/InsideOverlay.tsx"),
				Fu = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				Du = n("./src/reddit/helpers/postCollection.ts"),
				Uu = n("./src/reddit/models/Theme/index.ts"),
				Bu = n("./src/reddit/selectors/experiments/survey.ts"),
				Gu = n("./src/reddit/selectors/notificationBanner.ts"),
				qu = n("./src/reddit/selectors/posts.ts"),
				Hu = n("./src/reddit/components/AppRouter/index.m.less"),
				Wu = n.n(Hu);

			function Vu() {
				return (Vu = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Ku = ({
					className: e,
					shouldDisplayPinnedSubscriptions: t,
					...n
				}) => m.a.createElement("div", Vu({
					className: Object(v.a)(Wu.a.main, {
						[Wu.a.mShowingPaddedPinnedDescriptions]: t
					}, e)
				}, n)),
				zu = Object(x.a)(({
					className: e,
					overlayScrollContainerEl: t,
					theme: n,
					...s
				}) => {
					const o = Object(D.a)({
						theme: n,
						...s
					});
					return m.a.createElement("div", Vu({
						className: Object(v.a)(Wu.a.overlayContentWrapper, e),
						style: {
							"--comments-overlay-background": Object(Uu.g)(o.canvas, o.canvasImgUrl, o.canvasImgPosition),
							"--comments-overlay-offset": `${Object(Ht.c)(t)}px`
						}
					}, s))
				}),
				Qu = ({
					className: e,
					divRef: t,
					...n
				}) => {
					const s = Object(u.useContext)(g.a);
					return m.a.createElement("div", Vu({
						className: Object(v.a)(Wu.a.lightboxHeaderWrapper, e, {
							[Wu.a.lightboxHeaderWrapperExp]: s
						})
					}, n, {
						ref: t
					}))
				},
				Ju = Object(Gu.a)(yd.a.EmailCollectionBannerId),
				Xu = Object(p.b)(() => Object(f.c)({
					currentPage: e => e.platform.currentPage,
					frontpageSignupVariant: e => {
						const {
							currentPage: t
						} = e.platform;
						return Object(U.a)(e, {
							pageLayer: t
						})
					},
					hasInvalidSession: Pt.v,
					isLoggedIn: Pt.K,
					isNpsSurveyEnabled: Bu.c,
					isSubscriptionsPinned: gs.b,
					isSuspended: Pt.P,
					isFPR: Pt.I,
					posts: qu.I,
					profileCollectionsEnabled: hu.a,
					showEmailCollectionBanner: e => !Object(Jt.J)(e.platform.currentPage) && Ju(e)
				}), e => ({
					onClickOutsideOverlay: t => e(Object(h.b)(t)),
					onUnpinSubscriptions: () => e(Object(S.j)()),
					onPostDismissTrigger: () => e(Object(_.g)())
				})),
				Zu = (e, t) => !(!e.state || !e.state[Zo.a.IsOverlay] || t === e);
			class Yu extends m.a.Component {
				constructor(e) {
					super(e), this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage, this.isNarrowScreen = !1, this.isWideScreen = !1, this.didCountSurveyTrigger = !1, this.resizeHandler = l()(() => {
						const e = window.innerWidth;
						this.props.isSubscriptionsPinned && e < Mu.l && this.props.onUnpinSubscriptions()
					}, C.I), this.hideSignupUpsell = () => {
						this.setState({
							isSignupUpsellHidden: !0
						})
					}, this.getIsPostCollection = () => {
						const {
							currentPage: e,
							posts: t,
							profileCollectionsEnabled: n
						} = this.props;
						if (Object(Jt.w)(e)) {
							const s = e && e.urlParams && e.urlParams.partialPostId,
								o = `${C.Fb.Post}_${s}`,
								r = t && s && t[o],
								a = r && r.belongsTo.type === Ru.a.PROFILE;
							return !(!r || !Object(Du.a)(r) || a && !n)
						}
						return !1
					}, this.state = {
						isSignupUpsellDisplayed: Object(U.c)(e.frontpageSignupVariant),
						isSignupUpsellHidden: !1
					}
				}
				componentDidMount() {
					this.resizeHandler(), window.addEventListener("resize", this.resizeHandler)
				}
				UNSAFE_componentWillUpdate(e) {
					const {
						isNpsSurveyEnabled: t,
						location: n
					} = this.props, s = n.state && n.state[Zo.a.IsOverlay], o = Object(P.a)(this.previousLocation, e.location);
					t && s && o && !this.didCountSurveyTrigger && (this.props.onPostDismissTrigger(), this.didCountSurveyTrigger = !0);
					const r = Object(P.a)(this.previousLocation, this.props.location),
						a = s ? this.previousPage : this.props.currentPage;
					if (a) {
						const {
							meta: t,
							urlParams: n
						} = a, s = t && (t.name === C.Jb.INDEX || t.name === C.Jb.SUBREDDIT && n.subredditName === Rs.b.Popular), o = Object(U.c)(this.props.frontpageSignupVariant), r = Object(U.c)(e.frontpageSignupVariant);
						s || o || !r ? o && !r && this.setState({
							isSignupUpsellDisplayed: !1
						}) : this.setState({
							isSignupUpsellDisplayed: !0,
							isSignupUpsellHidden: !1
						})
					}
					"POP" === e.history.action || s || o || r || (this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage);
					const i = Zu(e.location, this.previousLocation);
					y.a.write(() => {
						document.body.style.overflow = i ? "hidden" : ""
					})
				}
				componentDidUpdate() {
					this.didCountSurveyTrigger = !1
				}
				render() {
					const {
						currentPage: e,
						frontpageSignupVariant: t,
						hasInvalidSession: n,
						isFPR: s,
						isLoggedIn: r,
						isSubscriptionsPinned: a,
						isSuspended: i,
						location: d,
						onClickOutsideOverlay: l,
						routes: p,
						showEmailCollectionBanner: b
					} = this.props, {
						isSignupUpsellDisplayed: h,
						isSignupUpsellHidden: g
					} = this.state, f = this.context, v = Zu(d, this.previousLocation);
					d.state && d.state[Zo.a.IsOverlay] && !v ? d.state[Zo.a.IsOverlay] = !1 : d.state && (this.previousLocation === d || d.state[Zo.a.CloseLocation] && this.previousLocation.state && this.previousLocation.state[Zo.a.CloseLocation] && this.previousLocation.state[Zo.a.CloseLocation] === d.state[Zo.a.CloseLocation] ? d.state[Zo.a.CloseLocation] = {
						...this.previousLocation,
						state: c()(this.previousLocation.state, Zo.a.CloseLocation)
					} : d.state[Zo.a.CloseLocation] = this.previousLocation);
					const x = Object(P.a)(this.previousLocation, d),
						O = v || x ? this.previousLocation : d,
						y = v || x ? this.previousPage : e,
						E = !(!(y && y.meta && y.meta.name === C.Jb.SEARCH_RESULTS && y && y.queryParams) || y.queryParams[Au.s]),
						j = !(!y || !y.meta || y.meta.name !== C.Jb.MODERATION_PAGES),
						S = Object(Jt.w)(y),
						_ = this.getIsPostCollection(),
						w = h && !g;
					return n ? o.fbt._("Sorry, we have failed you. Try refreshing!", null, {
						hk: "3qsDla"
					}) : m.a.createElement(m.a.Fragment, null, m.a.createElement(Jt.a.Provider, {
						value: y
					}, m.a.createElement(Fo.c, {
						isOverlayOpen: v
					}, m.a.createElement(Nd.a, {
						forceRedditTheme: E
					}, h && m.a.createElement(ye, {
						frontpageSignupVariant: t,
						onClose: this.hideSignupUpsell
					}), m.a.createElement($u, {
						browserInfo: f,
						isFPR: s,
						isInline: w,
						isSuspended: i
					})), m.a.createElement(Lu.a.Provider, {
						value: !1
					}, m.a.createElement(Nd.a, {
						forceRedditTheme: E || j,
						isCommentsPage: S
					}, m.a.createElement(em, {
						frontpageSignupVariant: t,
						isCommentsPage: S,
						isInline: w,
						isLoggedIn: r,
						isSubscriptionsPinned: a,
						location: O,
						overlayIsOpen: v,
						page: y,
						routes: p,
						showEmailCollectionBanner: b,
						browserInfo: f,
						showFPR: s,
						showSuspended: i
					}))))), m.a.createElement(Jt.a.Provider, {
						value: e
					}, v && m.a.createElement(Lu.a.Provider, {
						value: !0
					}, m.a.createElement(Nd.a, {
						isOverlay: !0
					}, m.a.createElement(tm, {
						browserInfo: f,
						isPostCollection: _,
						location: d,
						onClickOutsideOverlay: l,
						page: e,
						routes: p,
						showEmailCollectionBanner: b,
						showFPR: s,
						showSuspended: i
					}))), m.a.createElement(Nd.a, null, m.a.createElement(u.Fragment, null, m.a.createElement("div", {
						id: Nu.a,
						className: Wu.a.popupContainer
					}), m.a.createElement(bu, null), m.a.createElement(Id.a, null), b && m.a.createElement(k.a, null), m.a.createElement(Kt, null), m.a.createElement(ls, null)))))
				}
			}
			Yu.contextType = O.a;
			const $u = Object(A.c)(e => {
					const {
						browserInfo: t,
						isFPR: n,
						isInline: s,
						isSuspended: o
					} = e, r = {
						browserInfo: t,
						showFPR: n,
						showSuspended: o
					};
					return m.a.createElement(u.Fragment, null, m.a.createElement(wu, r), m.a.createElement(xd, {
						className: Object(v.a)(Wu.a.header, Object(Iu.b)(Wu.a, r), {
							[Wu.a.inline]: s
						})
					}))
				}),
				em = Object(A.c)(class extends m.a.Component {
					shouldComponentUpdate(e, t) {
						return !this.locationsEqual(this.props.location, e.location) || !this.pagesEqual(this.props.page, e.page) || this.props.isSubscriptionsPinned !== e.isSubscriptionsPinned || this.props.showEmailCollectionBanner !== e.showEmailCollectionBanner || this.props.isInline !== e.isInline
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
							isInline: r,
							isLoggedIn: a,
							isSubscriptionsPinned: i,
							showEmailCollectionBanner: c
						} = this.props, d = i && !(!a && !s && o);
						return m.a.createElement(Ku, {
							"aria-hidden": s,
							className: Object(v.a)(Object(Iu.b)(Wu.a, this.props), {
								[Wu.a.withUpsell]: !!e,
								[Wu.a.inline]: r
							}),
							shouldDisplayPinnedSubscriptions: d
						}, d && m.a.createElement(wd, {
							className: Object(v.a)(Wu.a.pinnedSubscriptions, Object(Iu.b)(Wu.a, this.props)),
							"data-redditstyle": !0
						}), m.a.createElement(b.f, {
							location: t
						}, n), c && m.a.createElement("div", {
							className: Object(v.a)(Wu.a.bottomSpacer, Object(Iu.a)(Wu.a, this.props))
						}))
					}
				});
			class tm extends m.a.Component {
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
							t(e.state[Zo.a.CloseLocation])
						}
					}, this.onOverlayMouseDown = e => {
						this.mouseDownInWrapper = e.target === this.state.overlayScrollContainerEl && e.clientX <= window.innerWidth - 17
					}, this.state = {
						overlayScrollContainerEl: null,
						mediaIsFullscreen: !1
					}
				}
				componentDidMount() {
					document.addEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.lightboxHeaderEl && (this.lightboxHeaderEl.focus(), this.listingFocusSubscriptionId = Fu.a.subscribe(e => {
						e.isListingFocused && this.lightboxHeaderEl.querySelector(E.a).focus()
					}))
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.listingFocusSubscriptionId && Fu.a.unsubscribe(this.listingFocusSubscriptionId)
				}
				render() {
					const {
						isPostCollection: e,
						page: t,
						routes: n
					} = this.props, {
						overlayScrollContainerEl: s
					} = this.state, o = !(!t || !t.meta || t.meta.name === C.Jb.SUBREDDIT_CREATION || t.meta.name === C.Jb.PUBLIC_ACCESS_NETWORK), r = e;
					return m.a.createElement(zu, {
						className: Object(v.a)(Object(Iu.b)(Wu.a, this.props), {
							[Wu.a.mIsCommentsLightbox]: o,
							[Wu.a.mIsLargeCommentsLightbox]: r
						}),
						overlayScrollContainerEl: s
					}, m.a.createElement("div", {
						className: Object(v.a)(Wu.a.overlayWrapper, Object(Iu.b)(Wu.a, this.props))
					}, m.a.createElement("div", {
						className: Object(v.a)(Wu.a.overlayScrollContainer, {
							[Wu.a.mediaIsFullscreen]: this.state.mediaIsFullscreen
						}),
						id: Tu.d,
						ref: this.overlayRefFn,
						onMouseDown: this.onOverlayMouseDown,
						onMouseUp: this.onOverlayMouseUp
					}, o && m.a.createElement(Qu, {
						divRef: this.lightboxHeaderRefFn,
						className: Object(v.a)(Object(Iu.b)(Wu.a, this.props), {
							[Wu.a.mIsLargeCommentsLightbox]: r
						}),
						tabIndex: -1
					}, m.a.createElement(Od.a, {
						page: t
					})), m.a.createElement(b.f, null, n), m.a.createElement("div", {
						className: Object(v.a)(Wu.a.bottomSpacer, Object(Iu.a)(Wu.a, this.props))
					}))))
				}
			}
			t.b = Xu(Object(A.c)(Yu))
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/BadgeCounter/index.m.less"),
				c = n.n(i);
			t.a = ({
				className: e,
				isActive: t,
				showEmpty: n,
				unreadCount: s
			}) => t ? o.a.createElement("span", {
				className: Object(r.a)(e, c.a.badgeCounter, {
					[c.a.mEmpty]: n || s < 1
				})
			}, n || s < 1 ? "" : Object(a.b)(s)) : null
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
			class d extends o.a.Component {
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
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/helpers/loadThirdPartyScript.ts"),
				c = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				d = n("./src/reddit/constants/modals.ts");
			const l = () => Object(a.a)(() => Promise.all([Promise.all([n.e("CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal~PremiumPurchaseModal"), n.e("CoinPurchaseModal")]).then(n.bind(null, "./src/reddit/components/CoinPurchaseModal/index.tsx")), Object(i.d)().catch(() => {})])).then(e => e[0].default),
				u = Object(r.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: l
				});
			Object(c.b)(d.a.ECON_COIN_PURCHASE, e => o.a.createElement(u, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/CommonTooltip/Hooked.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
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
			t.a = o.a.memo((function({
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
				}, [e]), e ? o.a.createElement("div", c({
					id: t,
					className: Object(r.a)(i.a.tooltip, n, {
						[i.a.visible]: l
					})
				}, d.popperProps), l && o.a.createElement(o.a.Fragment, null, d.arrowProps && o.a.createElement("div", c({
					className: Object(r.a)(i.a.arrow, a)
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
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
			}) => o.a.createElement(i.a, l({}, t, {
				className: Object(r.a)(d.a.horizontalVotes, e),
				scoreClassName: Object(r.a)(d.a.customScoreStyles, t.scoreClassName),
				downvoteClassName: Object(i.b)(t) ? d.a.customDownvoteStyles : void 0
			})));
			t.a = u
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
		"./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/modal.m.less"),
				d = n.n(c);
			const l = Object(s.a)({
				resolved: {},
				chunkName: () => "EconAchievementFlairModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("EconAchievementFlairModal").then(n.bind(null, "./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ACHIEVEMENT_FLAIR, e => r.a.createElement(l, {
				onOverlayClick: e,
				withOverlay: !0,
				className: d.a.modalBody
			}))
		},
		"./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/modal.m.less": function(e, t, n) {
			e.exports = {
				modalBody: "_1DOPDmls0bV8PcYMzJyQXx"
			}
		},
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
		"./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const d = () => n.e("EconPowerupsMarketingModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsMarketingModal/index.tsx")),
				l = Object(r.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(a.a)(d).then(e => e.default)
				});
			Object(i.b)(c.a.ECON_POWERUPS_MARKETING, e => o.a.createElement(l, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/helpers/loadThirdPartyScript.ts"),
				c = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				d = n("./src/reddit/constants/modals.ts");
			const l = () => Promise.all([Promise.all([n.e("CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal~PremiumPurchaseModal"), n.e("EconPowerupsPurchaseModal")]).then(n.bind(null, "./src/reddit/components/Econ/PowerupsPurchaseModal/index.tsx")), Object(i.d)().catch(() => {})]),
				u = Object(r.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(a.a)(l).then(e => e[0].default)
				});
			Object(c.b)(d.a.ECON_POWERUPS_PURCHASE, e => o.a.createElement(u, {
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
			Object(a.b)(i.a.ECON_POWERUPS_SUCCESS, () => r.a.createElement(l, {
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
				C = Object(c.c)({
					award: b.b,
					awardIcon: p.d
				}),
				x = Object(i.b)(C, e => ({
					onClose: () => e(Object(u.g)(m.a.GOLD_GILD_ANIMATION_OVERLAY))
				}));
			t.default = Object(d.a)(x(e => {
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
					className: Object(l.a)(g.a.animationComponent, g.a.starburst),
					style: {
						backgroundImage: `url(${v})`
					}
				}), a.a.createElement("img", {
					alt: r,
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
				importAsync: () => Promise.all([n.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~15384a17"), n.e("vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~339111b0"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/BurnPointsModal/index.tsx")),
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
				importAsync: () => Promise.all([n.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~15384a17"), n.e("vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~339111b0"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), n.e("reddit-components-Governance-TransactionModals-ConvertToCoinsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/index.tsx")),
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
				C = n("./src/reddit/helpers/trackers/goldTopNav.ts"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				O = n("./src/reddit/selectors/experiments/econStorefrontClaim.ts"),
				y = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				E = n("./src/reddit/selectors/tooltip.ts"),
				P = n("./src/reddit/components/Header/GoldCoinsCta/index.m.less"),
				j = n.n(P);
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
				_ = Object(f.a)(),
				k = Object(d.c)({
					activeSaleConfig: y.a,
					activeTooltipId: E.a,
					coinPurchaseDropdownIsOpen: e => Object(E.b)(_)(e),
					isFreeAwardEventEnabled: e => Object(O.a)(e) && Object(y.g)(e)
				}),
				w = (e, t) => ({
					closeTooltip: () => e(Object(m.i)()),
					requestSpecialEvents: () => e(Object(u.a)()),
					toggleTooltip: t => {
						e(t === _ ? Object(m.i)() : Object(m.f)({
							tooltipId: _
						}))
					}
				}),
				I = Object(c.b)(k, w);
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
							Object(v.d)(v.a.GoldPayment, !0), Object(b.a)(), Object(h.b)();
							const e = n ? p.a.CoinSale : o ? p.a.StorefrontFreeAward : void 0;
							r(Object(C.d)("get_coins_cta", e))
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
					} = this.props, r = this.getButtonText(), a = !!e || o, c = Object(l.a)(j.a.icon, {
						[j.a.special]: a
					});
					return i.a.createElement("button", {
						className: Object(l.a)(t, j.a.ctaContainer, {
							[j.a.special]: a
						}),
						id: _,
						onClick: this.handleClick
					}, i.a.createElement("div", {
						className: Object(l.a)(j.a.ctaContent, {
							[j.a.special]: a
						})
					}, i.a.createElement(x.a, {
						name: "coins",
						className: c
					}), i.a.createElement("span", {
						className: j.a.text
					}, r)), s && i.a.createElement(S, {
						activeSaleConfig: e,
						isFreeAwardEventEnabled: o,
						isOpen: s,
						onCloseTooltip: n,
						tooltipId: _
					}))
				}
			}
			t.a = I(Object(g.c)(N))
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
		"./src/reddit/components/Header/QuickLinks/index.m.less": function(e, t, n) {
			e.exports = {
				container: "x0hiXHicn7r3BG9m1FJH4",
				row: "_1vXXD2qKLnHetdKvisFzBD",
				icon: "_3dZnYgFFpifT-M_Vs2FAq6",
				rpanVideoIcon: "_2BMLeQ_Q2tfBzrcfsUAQZi"
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
				return o.a.createElement(t, {
					id: r.c
				}, o.a.createElement(f, {
					href: e.logoHref || "/",
					onClick: e.logoOnClick
				}, o.a.createElement(d.a, null, o.a.createElement(p, null), o.a.createElement(b, null))))
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
				visitOldReddit: "_3Z5rfDuvQDBNfBgpXdnt_b"
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
				notificationInboxIconContainer: "_3AUJR143r5MT-j2-3Y0teA",
				loggedInGoogleOneTap: "GmCFJz0Lv_7OTbtdvK2me",
				icon2020: "_3uVYL9qgX3QSEa_F4F-DPv",
				welcomeTooltip: "_-3krX6mGS5KqbsSJp3Off",
				visible: "TMw6pg71oGapqgV0jlLaN",
				welcomeTooltipArrow: "_1GJb2q6mrucs3GJ9EpbKuZ"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/UserMenu/ExploreMenu/styles.m.less": function(e, t, n) {
			e.exports = {
				basicLink: "_2CQ2c7khtd-m7uslH6Mz7J",
				collapsibleContainer: "_10IrsfRFg99DXaIMnqu-vj"
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
				copyrightText: "_ttuvLVH4k74IkCGNFJSt"
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
				imgIconWrapper: "_1zyV-XmoYeSNGWjfZiXbPc",
				defaultProfileIcon: "_3-lF5kPDkSGfnVUW_GtvUV",
				modModeIcon: "_2Az3JCV8DZZ1S6CU8cR-bl",
				nightIcon: "gRVZlDl2ZHFThtPLjYYzD",
				inlineButton: "_18X7KoiaLuKbuLqg4zE8BH",
				dropdownOpen: "_3F3oKTToidUQ0CbMS1cccX",
				navbarLikeMweb: "_2XkHtsPtFuTExJyk9JQUAp",
				premiumFontIcon: "pztXT07fzqRz6IEE6thRV",
				Dropdown: "_1HSQGYlfPWzs40LP4_oFi5",
				dropdown: "_1HSQGYlfPWzs40LP4_oFi5",
				username: "_2BMnTatQ5gjKGK5OWROgaG",
				divider: "_7cxLZzQcuE-aYbch5G9oN",
				sectionHeader: "_18Q1kN_hFY6M09dHaoehBF",
				entrypointLink: "pszNQQxC761u1dbJ3aR-C"
			}
		},
		"./src/reddit/components/InboxTooltip/Component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return H
			})), n.d(t, "b", (function() {
				return z
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/BadgeCounter/index.tsx"),
				d = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				l = n("./node_modules/lodash/noop.js"),
				u = n.n(l),
				m = n("./node_modules/lodash/omit.js"),
				p = n.n(m),
				b = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/icons/fonts/index.tsx"),
				g = n("./src/reddit/components/InboxTooltip/index.m.less"),
				f = n.n(g);
			const v = e => r.a.createElement("div", {
				className: f.a.dnPromptBanner
			}, r.a.createElement("div", {
				className: f.a.bannerTitleContainer
			}, r.a.createElement("h4", {
				className: f.a.bannerTitle
			}, s.fbt._("Don’t miss out on updates — Turn on desktop notifications.", null, {
				hk: "10oNqB"
			})), r.a.createElement(b.q, {
				onClick: e.onClose,
				Icon: Object(h.b)("close_fill"),
				className: Object(a.a)(f.a.closeIcon, f.a.closeButton),
				size: b.c.XXS,
				priority: b.b.Plain
			})), r.a.createElement("div", {
				className: f.a.buttonsContainer
			}, r.a.createElement(b.q, {
				text: s.fbt._("Turn On", null, {
					hk: "3hywR9"
				}),
				priority: b.b.Tertiary,
				className: Object(a.a)(f.a.button, f.a.turnOnButton),
				size: b.c.XS
			}), r.a.createElement(b.q, {
				text: s.fbt._("No Thanks", null, {
					hk: "4kbwb8"
				}),
				onClick: e.onClose,
				priority: b.b.Plain,
				size: b.c.XS,
				className: Object(a.a)(f.a.button, f.a.closeButton)
			})));
			var C = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				x = n("./src/reddit/components/ResizeSensor/index.tsx");
			const O = 3;
			class y extends r.a.Component {
				constructor() {
					super(...arguments), this.ref = r.a.createRef(), this.handleResize = () => {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						e !== this.props.notificationHeight && this.props.setNotificationHeight(e, this.props.index)
					}
				}
				componentDidMount() {
					if (this.props.index + 1 <= O) {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						this.props.setNotificationHeight(e, this.props.index)
					}
				}
				render() {
					const {
						activeOverflowMenuId: e,
						disableNotificationUpdates: t,
						hideNotification: n,
						hideSubredditNotifications: s,
						blockAwarder: o,
						index: a,
						isInboxPostEmbedEnabled: i,
						markNotificationAsRead: c,
						notification: d,
						setActiveOverflowMenuId: l,
						onItemClick: u
					} = this.props, m = a + 1 <= O;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						ref: this.ref,
						className: f.a.notificationResizeWrapper
					}, r.a.createElement(C.a, {
						activeOverflowMenuId: e,
						disableNotificationUpdates: t,
						hideNotification: n,
						hideSubredditNotifications: s,
						isInboxPostEmbedEnabled: i,
						isInTooltip: !0,
						markNotificationAsRead: c,
						notification: d,
						setActiveOverflowMenuId: l,
						onItemClick: u,
						blockAwarder: o
					}), !!m && r.a.createElement(x.a, {
						onResize: this.handleResize
					})))
				}
			}
			var E = n("./src/reddit/icons/svgs/Close/index.tsx");
			const P = i.a.wrapped(E.a, "CloseIcon", f.a),
				j = ({
					onClose: e
				}) => {
					return r.a.createElement("div", {
						className: f.a.welcomeBanner
					}, r.a.createElement("div", {
						className: f.a.bannerTitleContainer
					}, r.a.createElement("h4", {
						className: f.a.bannerTitle
					}, s.fbt._("Welcome to your new inbox!", null, {
						hk: "37URYp"
					})), r.a.createElement("button", {
						className: f.a.closeButton,
						onClick: t => {
							t.stopPropagation(), t.preventDefault(), e()
						}
					}, r.a.createElement(P, null))), r.a.createElement("p", {
						className: f.a.bannerDescription
					}, s.fbt._("Now it’s easier to stay up-to-date on your activity and know what’s happening in your communities.", null, {
						hk: "3kKTJ3"
					})))
				};
			var S = n("./src/reddit/components/NotificationUnit/Placeholder.tsx"),
				_ = n("./src/reddit/pages/NotificationsInbox/Content/EmptyState.tsx");

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const w = {},
				I = "",
				N = 0,
				M = "200px",
				T = "250px",
				A = 100,
				R = .5,
				L = 5;
			class F extends r.a.Component {
				constructor() {
					super(...arguments), this.container = r.a.createRef(), this.state = {
						notificationHeights: w,
						currentNotificationCursorIndex: -1
					}, this.resetOverflowMenu = () => {
						this.props.activeOverflowMenuId.length > N && this.props.setActiveOverflowMenuId(I)
					}, this.getContainerHeight = () => {
						const {
							notificationHeights: e
						} = this.state;
						let t = 0;
						for (const n in e) t += e[n];
						return this.props.isInboxExposureBannerEnabled && (t += A), 0 === t ? this.props.isInboxExposureBannerEnabled ? T : M : t
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
						} = this.state, n = t + L, s = n > e.length ? n : e.length - 1;
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
								notifications: o
							} = this.props,
							a = o.length > n + L;
						return (s && o.length > 0 && a ? o.slice(0, n + 1) : o).map((n, s) => r.a.createElement(y, k({}, e, {
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
							notifications: o
						} = this.props;
						if (e.isIntersecting) {
							const e = o.length > this.state.currentNotificationCursorIndex + L;
							this.props.notifications.length > 0 && s && e ? this.updateCurrentCursorIndex() : t && n({
								after: t,
								first: L
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
						isInboxExposureBannerEnabled: n,
						setInboxExposureBannerSeen: s,
						isInboxInfiniteScrollEnabled: o,
						isPending: a,
						notifications: i
					} = this.props, c = !(!i || !i.length), l = this.getContainerHeight(), m = i.length > this.state.currentNotificationCursorIndex + L;
					return r.a.createElement("div", {
						className: f.a.notificationList,
						ref: this.container,
						style: {
							height: l,
							maxHeight: l
						}
					}, !c && a && r.a.createElement(S.a, null), !c && !a && r.a.createElement(r.a.Fragment, null, n && r.a.createElement(j, {
						onClose: s
					}), t && r.a.createElement(v, {
						onClose: u.a
					}), r.a.createElement(_.a, {
						isInboxExposureBannerEnabled: n
					})), c && r.a.createElement(r.a.Fragment, null, n && r.a.createElement(j, {
						onClose: s
					}), t && r.a.createElement(v, {
						onClose: u.a
					}), this.renderNotifications()), o && c && !a && (e || m) && r.a.createElement(d.a, {
						onChange: this.loadNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: R
					}, r.a.createElement("div", null)))
				}
			}
			var D = n("./src/reddit/controls/InternalLink/index.tsx"),
				U = n("./src/reddit/helpers/trackers/inbox.ts"),
				B = n("./src/reddit/hooks/useInboxExposureSeen.ts"),
				G = n("./src/reddit/hooks/useTracking.ts");

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const H = [],
				W = i.a.div("StyledDropdown", f.a),
				V = ({
					onMessagesClick: e,
					onBarClick: t,
					markAllAsRead: n,
					messagesBadgeCount: i,
					sendInboxClickSettings: d
				}) => {
					const l = !!i,
						u = Object(o.useCallback)(() => {
							e(), t()
						}, [e, t]),
						m = Object(o.useCallback)(() => {
							d(), t()
						}, [d, t]);
					return r.a.createElement("nav", {
						className: f.a.topNav
					}, r.a.createElement("span", {
						className: f.a.topNavTitle
					}, s.fbt._("Notifications", null, {
						hk: "1sYFjx"
					})), r.a.createElement("span", {
						className: f.a.topNavLinks
					}, r.a.createElement("span", {
						className: f.a.messagesLinkContainer
					}, r.a.createElement(D.a, {
						className: Object(a.a)(f.a.messagesLink, {
							[f.a.mActive]: l
						}),
						onClick: u,
						to: l ? "/message/unread" : "/message/messages"
					}, s.fbt._("Messages", null, {
						hk: "hulKY"
					}), r.a.createElement(c.a, {
						className: f.a.badgeCount,
						isActive: l,
						unreadCount: i
					}))), r.a.createElement("button", {
						className: f.a.navLink,
						onClick: n
					}, r.a.createElement(h.a, {
						name: "mark_read",
						className: f.a.icon
					})), r.a.createElement(D.a, {
						className: f.a.navLink,
						onClick: m,
						to: "/settings/notifications"
					}, r.a.createElement(h.a, {
						name: "settings",
						className: f.a.icon
					}))))
				},
				K = e => r.a.createElement("div", {
					className: f.a.bottomBar
				}, r.a.createElement(D.a, {
					className: f.a.bottomLink,
					onClick: () => {
						e.sendInboxClickSeeAll(), e.onBarClick()
					},
					to: "/notifications"
				}, s.fbt._("See All", null, {
					hk: "3L3tFc"
				}))),
				z = e => {
					const t = Object(G.a)(),
						{
							clearMessageTabBadgeCount: n,
							inboxBadgeCount: s,
							isPending: o,
							messagesBadgeCount: a,
							notifications: i,
							hideTooltip: c,
							isInboxExposureBannerEnabled: d,
							isDNInboxPromptBannerFirstTimeEnabled: l,
							isDNInboxPromptBannerPersistEnabled: u,
							userId: m
						} = e,
						[p, b] = Object(B.a)(m),
						h = !(!i || !i.length);
					return r.a.createElement(W, null, r.a.createElement("div", {
						className: f.a.tooltipContainer
					}, r.a.createElement(V, {
						markAllAsRead: () => {
							e.markAllAsRead(), t(Object(U.e)({
								isMiniInbox: !0
							}))
						},
						messagesBadgeCount: a,
						onMessagesClick: () => {
							t(Object(U.m)({
								badgeCount: s,
								tab: U.d.Messages
							})), t(Object(U.f)()), n()
						},
						sendInboxClickSettings: () => t(Object(U.k)(U.a.MiniInbox)),
						onBarClick: c
					}), r.a.createElement(F, q({}, e, {
						isPending: o,
						onItemClick: c,
						setInboxExposureBannerSeen: b,
						isInboxExposureBannerEnabled: d && !p,
						isDNInboxPromptBannerEnabled: l || u
					})), (h || o) && r.a.createElement(K, {
						sendInboxClickSeeAll: () => t(Object(U.j)()),
						onBarClick: c
					})))
				}
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
				banner: "_2JORWXFw8yoU9OgPbYEHB9",
				bannerTitleContainer: "_2yVpJj9uDdzi680LtyMvne",
				bannerTitle: "_2gWQMeb0LgYfTkmk36hjP0",
				welcomeBanner: "_1Pfbfd7i5z6WslDcVpY3bJ",
				welcomeBannerTitleContainer: "_3vD29VbDsE0T3fgb9zOch1",
				welcomeBannerTitle: "_1_u7T0GoBiKCZ1aRRE96Na",
				CloseIcon: "_2xK-Knp1-SUm_DxX4Ak1T0",
				closeIcon: "_2xK-Knp1-SUm_DxX4Ak1T0",
				bannerDescription: "_3NYgm_gmO2sv_MA775B2RV",
				welcomeTooltipContainer: "_1OZgaZvEs6sdhMUCqaUCW_",
				closeButton: "_3fWRL_DhsIqXjpW4eXDwmR",
				tooltipTitle: "_3EmopbfaUR0bemuuUcEcko",
				tooltipDescription: "_3MtkPXIDbG9Hf6YeNOxAxv",
				dnPromptBanner: "_1rUnXnjFb2eSO8XAhH3ZtZ",
				dnPromptBannerTitleContainer: "_3MYE2TpbwAZPqoOOAjkhos",
				dnPromptBannerTitle: "_1oJJYWNag_xidmHETVm3Ok",
				buttonsContainer: "_3Wwrg6EeSMfskSuP12mlzz",
				button: "_3S02PqgZTMdN5zOmHbonYC",
				turnOnButton: "_1QC-B1O49UiZDlxGwYqhcR"
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
				return g
			})), n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/componentSizes.ts"),
				c = n("./src/reddit/contexts/NavbarExp.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/components/JumpToContent/index.m.less"),
				u = n.n(l);
			const m = Object(o.createContext)(null),
				p = Object(o.createContext)(null);
			class b extends r.a.Component {
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
					return r.a.createElement(m.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, r.a.createElement(p.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const h = i.f + 10,
				g = r.a.memo(() => {
					const [e, t] = Object(o.useState)("-500px"), n = Object(o.useContext)(c.a);
					return r.a.createElement(m.Consumer, null, o => o && r.a.createElement("div", {
						className: Object(a.a)(u.a.wrapper, {
							[u.a.wrapperExp]: n
						}),
						"data-testid": "jump-to-content"
					}, r.a.createElement(d.q, {
						kind: d.a.Button,
						priority: d.b.Plain,
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
							o.focus(), o.scrollIntoView(), window.scrollBy(0, -h)
						}
					}, s.fbt._("Jump to content", null, {
						hk: "2zWOmQ"
					})), r.a.createElement("div", {
						className: Object(a.a)(u.a.rightBorder, {
							[u.a.rightBorderExp]: n
						})
					})))
				}),
				f = r.a.memo(() => r.a.createElement(p.Consumer, null, e => r.a.createElement("div", {
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
				CloseButton: "_2Mq93X6GCESH9CsQ6XVqOS",
				closeButton: "_2Mq93X6GCESH9CsQ6XVqOS"
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
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/constants/icons.ts"),
				u = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/shortcuts/close.ts"),
				p = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				b = n("./src/reddit/components/FlairWrapper/index.tsx"),
				h = n("./src/reddit/components/PostTitle/index.tsx"),
				g = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/constants/colors.ts"),
				v = n("./src/reddit/controls/Button/index.tsx"),
				C = n("./src/reddit/helpers/postCollection.ts"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				O = n("./src/reddit/models/Media/index.ts"),
				y = n("./src/reddit/models/Vote/index.ts"),
				E = n("./src/reddit/selectors/experiments/categories.ts"),
				P = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				j = n("./src/reddit/selectors/platform.ts"),
				S = n("./src/reddit/contexts/Post/index.tsx"),
				_ = n("./src/reddit/components/LightboxHeader/index.m.less"),
				k = n.n(_);
			const w = Object(i.c)({
					isInCategoriesExperiment: E.a,
					post: j.l,
					isVoteCountAnimation: (e, {
						page: t,
						post: n
					}) => {
						if (!t && !n) return !1;
						const s = t && Object(j.l)(e, {
							page: t
						}) || n;
						return !!s && Object(P.g)(e, {
							post: s
						})
					}
				}),
				I = Object(a.b)(w, (e, {
					sendEvent: t
				}) => ({
					close: () => {
						e(Object(m.a)(t, !0))
					},
					toggleVote: (t, n) => e(n === y.a.upvoted ? Object(u.fb)(t) : Object(u.w)(t))
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onVoteClick: s => {
						const o = e.post || n.post;
						o && t.toggleVote(o.id, s)
					}
				}));
			class N extends r.a.Component {
				constructor() {
					super(...arguments), this.closeLightbox = e => {
						e.preventDefault(), e.stopPropagation(), this.props.close()
					}
				}
				render() {
					var e;
					const {
						className: t,
						onCloseClick: n,
						onVoteClick: a,
						page: i,
						post: l,
						isVoteCountAnimation: u
					} = this.props, m = T[l && l.media ? l.media.type : O.o.EMBED], g = !l && (null === (e = null == i ? void 0 : i.meta) || void 0 === e ? void 0 : e.name) === d.Jb.META_MEMBERSHIP_PAYWALL_PAGE, v = l ? S.a : function({
						children: e,
						postId: t
					}) {
						return e
					};
					return r.a.createElement("div", {
						className: Object(c.a)(k.a.container, t, {
							[k.a.isCollection]: l && Object(C.a)(l)
						})
					}, r.a.createElement(v, {
						postId: null == l ? void 0 : l.id
					}, r.a.createElement("div", {
						className: k.a.postDetails
					}, l && r.a.createElement(o.Fragment, null, u ? void 0 : r.a.createElement(p.a, {
						className: k.a.horizontalVotes,
						compact: !1,
						light: !0,
						model: l,
						onVoteClick: a,
						redditStyle: !0
					}), r.a.createElement(x.a, {
						name: m,
						className: k.a.mediaIcon
					}), r.a.createElement(h.c, {
						className: k.a.postTitle,
						post: l,
						size: h.b.Small,
						hideSourceLink: !0,
						isCommentsPage: !0,
						isOverlay: !0,
						nowrap: !0,
						titleColor: f.b.lightboxHeaderText,
						titleLinkClassName: k.a.postTitleLink,
						showCategoryTag: !0
					}), r.a.createElement(b.a, {
						post: l,
						nowrap: !0,
						sendEvent: this.props.sendEvent,
						showCategoryTag: this.props.isInCategoriesExperiment
					})), g && i && i.urlParams.subredditName && r.a.createElement("div", {
						className: k.a.membershipPaywallTitle
					}, s.fbt._("{communityName} Special Membership", [s.fbt._param("communityName", `r/${i.urlParams.subredditName}`)], {
						hk: "4vP4VY"
					}))), r.a.createElement("div", {
						className: k.a.actions
					}, r.a.createElement(M, {
						onClick: n || this.closeLightbox
					}))))
				}
			}
			const M = r.a.memo(e => r.a.createElement(v.q, {
					className: k.a.CloseButton,
					size: v.c.XS,
					onClick: e.onClick,
					priority: v.b.Plain,
					Icon: Object(x.b)("close"),
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
				T = {
					[O.o.GIFVIDEO]: l.a.gif_post,
					[O.o.IMAGE]: l.a.image_post,
					[O.o.TEXT]: l.a.text_post,
					[O.o.RTJSON]: l.a.text_post,
					[O.o.VIDEO]: l.a.video_post,
					[O.o.EMBED]: l.a.embed,
					[O.o.LIVEVIDEO]: l.a.video_live,
					[O.o.GALLERY]: l.a.media_gallery
				};
			t.a = Object(g.c)(I(N))
		},
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, n) {
			e.exports = {
				CloseIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				closeIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				ModalBody: "_2R3RlhymCOkPrz9TusvcPq",
				modalBody: "_2R3RlhymCOkPrz9TusvcPq",
				ModalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				modalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				ModalText: "mFTHPdbEAklUs8yhT4Xm7",
				modalText: "mFTHPdbEAklUs8yhT4Xm7",
				ModalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				modalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				ModalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				modalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				ModalMetaText: "_27eskYssCs-urVW1uHI4YI",
				modalMetaText: "_27eskYssCs-urVW1uHI4YI",
				ModalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				modalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				ModalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				modalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				ModalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				modalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				ModalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				modalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				ModalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				modalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				ModalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				modalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				ModalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				modalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				ModalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				modalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				TextArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				textArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				WarningButton: "_17UyTSs2atqnKg9dIq5ERg",
				warningButton: "_17UyTSs2atqnKg9dIq5ERg",
				PrimaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				primaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				CancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				cancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				RemoveButton: "_2ulRgczjI5SWCMgSA1CNLj",
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "m", (function() {
				return u
			})), n.d(t, "o", (function() {
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "s", (function() {
				return P
			})), n.d(t, "t", (function() {
				return j
			})), n.d(t, "q", (function() {
				return S
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "r", (function() {
				return k
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				r = n("./src/reddit/controls/Input/ModalInput.tsx"),
				a = n("./src/reddit/icons/svgs/Close/index.tsx"),
				i = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				c = n.n(i);
			const d = s.a.wrapped(a.a, "CloseIcon", c.a),
				l = s.a.section("ModalBody", c.a),
				u = s.a.section("ModalPostPreview", c.a),
				m = s.a.p("ModalText", c.a),
				p = s.a.div("ModalSmallText", c.a),
				b = s.a.div("ModalDescriptionText", c.a),
				h = s.a.div("ModalMetaText", c.a),
				g = s.a.label("ModalFormItem", c.a),
				f = s.a.wrapped(r.a, "ModalInput", c.a),
				v = s.a.label("ModalInputLabel", c.a),
				C = s.a.footer("ModalFooter", c.a),
				x = s.a.header("ModalHeader", c.a),
				O = s.a.div("ModalTitle", c.a),
				y = s.a.div("ModalAnnotation", c.a),
				E = s.a.div("ModalMain", c.a),
				P = s.a.textarea("TextArea", c.a),
				j = s.a.wrapped(o.i, "WarningButton", c.a),
				S = s.a.wrapped(o.i, "PrimaryButton", c.a),
				_ = s.a.wrapped(o.l, "CancelButton", c.a),
				k = s.a.wrapped(o.o, "RemoveButton", c.a)
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
				getComponent: () => Object(o.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("ModQueuePages~ModerationPages"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/NotificationUnit/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
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
			t.a = o
		},
		"./src/reddit/components/NotificationUnit/Placeholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/NotificationUnit/index.m.less"),
				a = n.n(r);
			const i = () => o.a.createElement("li", {
					className: a.a.placeholderWrapper
				}, o.a.createElement("span", {
					className: a.a.placeholderAvatar
				}), o.a.createElement("span", {
					className: a.a.placeholderContent
				})),
				c = () => o.a.createElement("ol", null, o.a.createElement(i, null), o.a.createElement(i, null), o.a.createElement(i, null))
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
			const d = ({
				children: e,
				className: t,
				...n
			}) => o.a.createElement("div", c({
				className: Object(r.a)(i.a.pillContainer, t)
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
			var d = c
		},
		"./src/reddit/components/PowerupsSidebar/SupportersListModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			Object(a.b)(i.a.ECON_SUPPORTERS_LIST, e => r.a.createElement(l, {
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
			n.d(t, "b", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts"),
				r = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			const a = () => Object(o.a)(() => Promise.all([Promise.all([n.e("CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal~PremiumPurchaseModal"), n.e("PremiumPurchaseModal")]).then(n.bind(null, "./src/reddit/components/PremiumPurchaseModal/index.tsx")), Object(r.d)().catch(() => {})])).then(e => e[0].default),
				i = Object(s.a)({
					getComponent: a,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				});
			t.a = i
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/raf/index.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r);
			class i extends a.a.Component {
				constructor(e) {
					super(e), this.isIE = () => /Trident/.test(navigator.userAgent), this.setContainerRef = e => {
						this.containerRef || (this.containerRef = e, this.createSensor())
					}, this.handleResize = () => {
						void 0 !== this.frame && o.a.cancel(this.frame), this.frame = o()(this.props.onResize)
					}, this.containerRef = e.containerRef
				}
				shouldComponentUpdate() {
					return !1
				}
				componentDidMount() {
					this.createSensor()
				}
				createSensor() {
					if (!this.containerRef || this.sensor) return;
					this.sensor = document.createElement("object"), this.sensor.setAttribute("style", "\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 100%;\n      width: 100%;\n      overflow: hidden;\n      pointer-events: none;\n      z-index: -1;\n    "), this.sensor.setAttribute("tabindex", "-1"), this.sensor.onload = () => {
						this.props.onResize(), this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.addEventListener("resize", this.handleResize)
					}, this.sensor.type = "text/html";
					const e = this.isIE();
					e && this.containerRef.appendChild(this.sensor), this.sensor.data = "about:blank", e || this.containerRef.appendChild(this.sensor), this.props.onResize()
				}
				componentWillUnmount() {
					this.sensor && (this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.removeEventListener("resize", this.handleResize), this.containerRef && this.containerRef.removeChild(this.sensor))
				}
				render() {
					return a.a.createElement("div", {
						ref: this.setContainerRef
					})
				}
			}
		},
		"./src/reddit/components/Root/AdminPanelLoader.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
				return Object(a.e)(e => Object(i.b)(e) || Object(c.H)(e)) ? r.a.createElement(d, null) : null
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
		"./src/reddit/components/Survey/hooks.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return y
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "b", (function() {
				return P
			})), n.d(t, "c", (function() {
				return j
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/isEqual.js"),
				r = n.n(o),
				a = n("./node_modules/react/index.js"),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/reddit/actions/preferences.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/helpers/survey/index.ts"),
				u = n("./src/reddit/selectors/survey.ts"),
				m = n("./src/reddit/selectors/telemetry.ts");
			const p = (e, t) => {
					const n = Object(u.c)(e),
						s = Object(u.a)(e);
					if (n && s) return {
						experiment_name: "desktop_local_survey_demo",
						experiment_variant: `trigger_${s}`,
						experiment_version: -1
					};
					const o = m.experiment(e, t);
					return o ? {
						experiment_name: o.name,
						experiment_variant: o.variant,
						experiment_version: o.version
					} : {}
				},
				b = e => {
					switch (e) {
						case l.a.CES:
							return "ces";
						case l.a.CSAT:
							return "csat";
						case l.a.NPS:
							return "nps"
					}
				},
				h = (e, t) => n => ({
					source: "survey",
					action: t,
					noun: "intro",
					...m.defaults(n),
					survey: p(n, e)
				}),
				g = ({
					action: e,
					experimentName: t,
					question: n,
					score: s,
					type: o
				}) => r => ({
					source: "survey",
					action: e,
					noun: "rating",
					...m.defaults(r),
					survey: {
						type: b(o),
						min: o === l.a.NPS ? 0 : 1,
						max: o === l.a.NPS ? 10 : 7,
						question: n,
						score: s,
						...p(r, t)
					}
				}),
				f = ({
					action: e,
					experimentName: t,
					question: n,
					text: s,
					type: o
				}) => r => ({
					source: "survey",
					action: e,
					noun: "freeform_text",
					...m.defaults(r),
					survey: {
						question: n,
						type: b(o),
						text: s,
						...p(r, t)
					}
				});
			var v = n("./src/reddit/hooks/useTracking.ts"),
				C = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/selectors/experiments/index.ts"),
				O = n("./src/reddit/selectors/user.ts");
			const y = () => {
					const e = Object(i.d)(),
						[t, n] = Object(a.useState)(null),
						s = Object(v.a)(),
						o = Object(i.e)(O.h),
						d = Object(i.e)(O.sb),
						m = Object(i.e)(x.a, r.a),
						p = Object(i.e)(u.c),
						b = Object(i.e)(u.a),
						g = Object(i.e)(u.b),
						f = Object(i.e)(u.d),
						C = Object(a.useMemo)(() => {
							const e = Object(l.g)(),
								t = {};
							for (const n of e) t[n] = m[n];
							return t
						}, [m]),
						y = Object(a.useCallback)(e => {
							const s = Object(l.f)({
								triggerName: e,
								surveyExperimentVariants: C,
								samplingId: o || d,
								isDemoEnabled: p,
								activeDemoTrigger: b,
								demoTriggerThreshold: g,
								isSampleFactorEnabled: f
							});
							if (p) return void(s && n(s));
							if (!s || s === t) return;
							const r = C[s.experiment_name];
							(null == r ? void 0 : r.variant) && s.variants[r.variant] && setTimeout(() => n(s), 500)
						}, [t, C, o, d, f, p, b, g]);
					return Object(a.useEffect)(() => {
						const e = Object(l.d)(),
							t = e.subscribe(y);
						return () => e.unsubscribe(t)
					}, [y]), Object(a.useEffect)(() => {
						if (!t) return;
						const n = Date.now();
						Object(l.i)(t, n), e(Object(c.F)({
							surveyLastSeenTime: n
						}, !1)), s(h(t.experiment_name, "display"))
					}, [t, e, s]), {
						activeSurvey: t,
						setActiveSurvey: n
					}
				},
				E = ({
					activeStepNum: e,
					activeSurvey: t,
					isFollowUp: n,
					textResponse: s,
					setTextResponse: o,
					setIsSurveyDismissed: r
				}) => {
					(({
						isFollowUp: e,
						textResponse: t
					}) => {
						const n = Object(a.useCallback)(n => {
							if (e && t.length) return n.preventDefault(), n.returnValue = "sure?", "sure?"
						}, [e, t]);
						Object(a.useEffect)(() => (window.addEventListener("beforeunload", n), () => window.removeEventListener("beforeunload", n)), [n])
					})({
						isFollowUp: n,
						textResponse: s
					});
					const [i, c] = Object(a.useState)(!1), d = Object(v.a)(), l = t.experiment_name, u = t.steps[e], m = null == u ? void 0 : u.type, p = null == u ? void 0 : u.question, b = Object(a.useCallback)(() => {
						e >= 0 ? c(!0) : (r(!0), d(h(t.experiment_name, "dismiss")))
					}, [e, t, d, r]), C = Object(a.useCallback)(() => {
						o(""), r(!0), d(n ? f({
							experimentName: l,
							action: "dismiss",
							type: m,
							question: p
						}) : g({
							experimentName: l,
							action: "dismiss",
							type: m,
							question: p
						}))
					}, [l, n, p, d, r, o, m]);
					return {
						isLeavingModalShowing: i,
						onClose: b,
						onLeaveCancel: Object(a.useCallback)(() => c(!1), []),
						onLeaveConfirm: C
					}
				},
				P = ({
					activeSurvey: e,
					selectedNumber: t,
					setIsSurveyDismissed: n,
					setSelectedNumber: s,
					setTextResponse: o,
					textResponse: r
				}) => {
					const [i, c] = Object(a.useState)(-1), [d, u] = Object(a.useState)(0), [m, p] = Object(a.useState)(!1), b = Object(v.a)(), C = Object(a.useCallback)(() => {
						const a = e.experiment_name,
							v = e.steps[i],
							C = null == v ? void 0 : v.type,
							x = null == v ? void 0 : v.question,
							O = null == v ? void 0 : v.follow_up_question,
							y = e.steps[i + 1],
							E = null == y ? void 0 : y.type,
							P = null == y ? void 0 : y.question;
						if (u(d + 1), -1 === i) return b(h(a, "agree")), c(0), void b(g({
							experimentName: a,
							action: "display",
							type: E,
							question: P
						}));
						b(m ? f({
							experimentName: a,
							action: "submit",
							type: C,
							text: r,
							question: O
						}) : g({
							experimentName: a,
							action: "submit",
							question: x,
							type: C,
							score: t && t + (C === l.a.NPS ? 0 : 1)
						})), s(void 0), o(""), m || !O ? (p(!1), i + 1 >= e.steps.length ? n(!0) : (c(i + 1), b(g({
							experimentName: a,
							action: "display",
							type: E,
							question: P
						})))) : (p(!0), b(f({
							experimentName: a,
							action: "display",
							type: C,
							question: O
						})))
					}, [i, e, m, r, t, b, n, s, o, d]);
					return {
						activeStepNum: i,
						isFollowUp: m,
						onStepComplete: C,
						uiStep: d,
						setActiveStepNum: c,
						setUIStep: u,
						setIsFollowUp: p
					}
				},
				j = ({
					isSurveyDismissed: e,
					setIsSurveyDismissed: t,
					setActiveStepNum: n,
					setActiveSurvey: o,
					setUIStep: r,
					setIsFollowUp: c,
					shouldMount: l,
					uiStep: u
				}) => {
					const m = Object(i.d)();
					Object(a.useEffect)(() => {
						e && !l && setTimeout(() => {
							n(-1), r(0), c(!1), o(null), u > 1 && m(Object(d.f)({
								text: s.fbt._("Thanks for your feedback!", null, {
									hk: "11jNYw"
								}),
								kind: C.b.SuccessCommunityGreen
							}))
						}, 500)
					}, [m, e, l, u, t, n, o, r, c])
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
				return O
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
			const v = (e, t) => t.forceRedditTheme ? void 0 : void 0 !== t.subredditName ? t.subredditName : Object(l.o)(e, t);
			class C extends r.a.Component {
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
			const x = Object(a.b)(() => Object(i.a)(e => e.themes.current, e => !!Object(p.i)(e), e => {
				if (Object(p.i)(e)) return e.structuredStyles.draft
			}, (e, t) => {
				if (Object(p.i)(e)) return Object(p.f)(e, t)
			}, v, Object(c.a)((e, t) => {
				if (Object(p.i)(e) || Object(h.kb)(e)) return;
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.D)(e, n);
				if (!s) return;
				if (Object(h.jb)(e, {
						subredditId: s
					})) return;
				const o = e.structuredStyles.models[s];
				return o || void 0
			}), (e, t) => {
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.v)(e, {
					subredditName: n
				});
				return s ? s.emojisCustomSize : void 0
			}, (e, t) => {
				if (t.forceDayMode) return !1;
				return Object(h.vb)(e).nightmode
			}, (e, t) => {
				const n = Object(h.vb)(e);
				if (Object(h.K)(e)) return !n.hideNSFW;
				const s = v(e, t);
				if (s) {
					const t = Object(b.y)(e, {
						subredditName: s
					});
					return !(!t || !t.isNSFW)
				}
				const o = Object(l.d)(e, t);
				return !!o && o.isNSFW
			}, (e, t) => t.isOverlay, (e, t) => t.isCommentsPage, (e, t, n, o, r, a, i, c, d, l, p) => {
				const b = {
						...i ? {
							emojiWidth: i[0],
							emojiHeight: i[1]
						} : {},
						shouldShowNSFWContent: d,
						isCommentsPage: p,
						isOverlay: l
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
			}))(C);
			t.b = x;
			const O = Object(d.t)()(x)
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
					currentUser: d.j,
					isNightMode: d.W,
					isPresenceUserPrefEnabled: d.ib,
					shouldHideNSFW: d.C
				}),
				f = Object(a.b)(g);
			t.a = f(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: o,
					wrapperClassName: a,
					...i
				} = e, d = Object(c.a)(null == t ? void 0 : t.accountIcon);
				return r.a.createElement("div", {
					className: Object(s.a)(b.a.currentUserIconWrapper, a)
				}, d ? r.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : r.a.createElement(m.b, h({}, i, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && r.a.createElement(l.a, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/structuredStyles/index.ts"),
				a = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/structuredStyles.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const d = Object(o.c)({
				bladeHasUnsavedChanges: i.a,
				isEditing: i.i,
				isBladeEditorDirty: i.h,
				isModalOpen: Object(a.b)(c.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(s.b)(d, (e, {
				subredditId: t
			}) => ({
				requestCloseBlade: () => t && e(Object(r.h)(t))
			}))
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
		"./src/reddit/constants/componentSizes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "i", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "m", (function() {
				return p
			})), n.d(t, "q", (function() {
				return b
			})), n.d(t, "r", (function() {
				return h
			})), n.d(t, "s", (function() {
				return g
			})), n.d(t, "u", (function() {
				return f
			})), n.d(t, "t", (function() {
				return v
			})), n.d(t, "v", (function() {
				return C
			})), n.d(t, "w", (function() {
				return x
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "n", (function() {
				return E
			})), n.d(t, "o", (function() {
				return P
			})), n.d(t, "p", (function() {
				return j
			}));
			const s = 284,
				o = 450,
				r = 800,
				a = 284,
				i = 48,
				c = 640,
				d = 1600,
				l = 1280,
				u = 40,
				m = 48,
				p = 24,
				b = 24,
				h = 312,
				g = 40,
				f = 270,
				v = 106,
				C = 5,
				x = 16,
				O = 1250,
				y = 82,
				E = 48,
				P = 36,
				j = 40
		},
		"./src/reddit/constants/keycodes.ts": function(e, t, n) {
			"use strict";
			var s, o;
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e[e.ArrowDown = 40] = "ArrowDown", e[e.ArrowLeft = 37] = "ArrowLeft", e[e.ArrowRight = 39] = "ArrowRight", e[e.ArrowUp = 38] = "ArrowUp", e[e.Backspace = 8] = "Backspace", e[e.Delete = 46] = "Delete", e[e.Enter = 13] = "Enter", e[e.Escape = 27] = "Escape", e[e.F = 70] = "F", e[e.K = 75] = "K", e[e.Space = 32] = "Space", e[e.Tab = 9] = "Tab", e[e.Comma = 188] = "Comma"
				}(s || (s = {})),
				function(e) {
					e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.Backspace = "Backspace", e.Enter = "Enter", e.Escape = "Escape", e.F = "f", e.Tab = "Tab", e.Space = " ", e.Comma = ","
				}(o || (o = {}))
		},
		"./src/reddit/constants/screenWidths.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = 480,
				o = 960,
				r = 1200
		},
		"./src/reddit/contexts/AdminEvents.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/brcast/dist/brcast.es.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = r.a.createContext(Object(s.a)([]))
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
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
			const a = {
					apiContext: () => {
						throw new Error("Component attempted to make an API request with no ApiContext")
					},
					gqlContext: () => {
						throw new Error("Component attempted to make an API request with no GqlContext")
					}
				},
				i = Object(s.createContext)(a);

			function c(e) {
				const t = t => o.a.createElement(i.Consumer, null, ({
					apiContext: n,
					gqlContext: s
				}) => o.a.createElement(e, r({
					apiContext: n,
					gqlContext: s
				}, t)));
				return t.displayName = `WithApiContext(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/contexts/NavbarExp.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = o.a.createContext(!1)
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
			class d extends o.a.Component {
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
		"./src/reddit/controls/Button/index.m.less": function(e, t, n) {
			e.exports = {
				Button: "_2iuoyPiKHN3kfOoeIQalDT",
				button: "_2iuoyPiKHN3kfOoeIQalDT",
				isFullWidth: "_34mIRHpFtnJ0Sk97S2Z3D9",
				xxsmallButtonStyles: "_1h6qKGhVsgNfytYFlo8m3f",
				Icon: "_1mvTX6krm3Q2d1CSyUm28s",
				icon: "_1mvTX6krm3Q2d1CSyUm28s",
				isLeft: "_1HHR_ND8U6x6YrIqKFeXZy",
				isRight: "_3tKmDp5VAtgWvabEmFkJ7T",
				xsmallButtonStyles: "_3uJP0daPEH2plzVEYyTdaH",
				smallButtonStyles: "HNozj_dKjQZ59ZsfEegz8",
				mediumButtonStyles: "_3ukcnQySDskQwK_wB2iXYl",
				largeButtonStyles: "_1J4mN6_wNfCtSyMDUNGQqN",
				xlargeButtonStyles: "XpD6n11mOiKNg8ZKtvgVR",
				primary: "_10BQ7pjWbeYP63SAPNS8Ts",
				active: "_39a0Mt5b1i2joAqIaEHOWJ",
				redditStyle: "_2nelDm85zKKmuD94NequP0",
				DangerButtonColors: "_1t63zWyh9UUgsyQc6acROM",
				dangerButtonColors: "_1t63zWyh9UUgsyQc6acROM",
				GoldButtonColors: "_10UWrWSil1Xu6pdSaa_3-K",
				goldButtonColors: "_10UWrWSil1Xu6pdSaa_3-K",
				PremiumButtonColors: "q_unSaY23rpdd3lDvGZ-",
				premiumButtonColors: "q_unSaY23rpdd3lDvGZ-",
				secondary: "_2tU8R9NTqhvBrhoNAXWWcP",
				tertiary: "_4Glnzr5LA7bNBGMWGW4pU",
				plain: "_3zbhtNO0bdck0oYbYRhjMC",
				isIconOnly: "_1tPpYVD73ugqp4k-VMFRki",
				isSquare: "_3ojSE1JW7jxNzUzZK8kt7m",
				ExtraSmallBaseButton: "_2v8rCfSRT4mr5y4pwEhX41",
				extraSmallBaseButton: "_2v8rCfSRT4mr5y4pwEhX41",
				InlineTextButton: "_3kfXQpuyMJIMeWQCwjZKfw",
				inlineTextButton: "_3kfXQpuyMJIMeWQCwjZKfw",
				ChatButton: "_13twe55MPRo1LqypxB-LJx",
				chatButton: "_13twe55MPRo1LqypxB-LJx"
			}
		},
		"./src/reddit/controls/Button/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "m", (function() {
				return y
			})), n.d(t, "n", (function() {
				return E
			})), n.d(t, "l", (function() {
				return P
			})), n.d(t, "p", (function() {
				return j
			})), n.d(t, "o", (function() {
				return S
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "f", (function() {
				return k
			})), n.d(t, "h", (function() {
				return w
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "g", (function() {
				return N
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/InternalLink/index.tsx"),
				i = n("./src/reddit/controls/Button/index.m.less"),
				c = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = {
				role: "button",
				tabIndex: 0
			};
			var u, m, p, b;
			! function(e) {
				e.XXS = "xxsmallButtonStyles", e.XS = "xsmallButtonStyles", e.S = "smallButtonStyles", e.M = "mediumButtonStyles", e.L = "largeButtonStyles", e.XL = "xlargeButtonStyles"
			}(u || (u = {})),
			function(e) {
				e.Primary = "primary", e.Secondary = "secondary", e.Tertiary = "tertiary", e.Plain = "plain"
			}(m || (m = {})),
			function(e) {
				e.L = "left", e.R = "right", e.C = "center"
			}(p || (p = {})),
			function(e) {
				e.Button = "button", e.ExternalLink = "external-link", e.InternalLink = "internal-link"
			}(b || (b = {}));
			const h = e => {
					const {
						"data-redditstyle": t,
						Icon: n,
						iconPosition: s = p.C,
						isFullWidth: a = !1,
						isSquare: i = !1,
						children: h,
						className: C,
						kind: x = b.Button,
						priority: O = m.Primary,
						redditStyle: y,
						size: E = u.S,
						text: P,
						...j
					} = e, S = (({
						baseClassName: e,
						redditStyle: t,
						dataRedditStyle: n,
						Icon: s,
						isFullWidth: o,
						isSquare: a,
						priority: i,
						size: d,
						text: l
					}) => Object(r.a)(e, c.a.Button, i && c.a[i], d && c.a[d], {
						[c.a.isFullWidth]: o,
						[c.a.isIconOnly]: !!s && !l,
						[c.a.isSquare]: a,
						[c.a.redditStyle]: !(!t && !n)
					}))({
						baseClassName: C,
						children: h,
						dataRedditStyle: t,
						Icon: n,
						isFullWidth: a,
						isSquare: i,
						priority: O,
						redditStyle: y,
						size: E,
						text: P
					}), _ = (({
						children: e,
						text: t,
						Icon: n,
						iconPosition: s,
						priority: a
					}) => !n && t ? o.a.createElement("span", null, t) : o.a.createElement(o.a.Fragment, null, n && (s === p.C || s === p.L) && o.a.createElement(n, {
						className: Object(r.a)(c.a.Icon, {
							[c.a.isLeft]: s === p.L
						}),
						isFilled: a === m.Primary
					}), t && o.a.createElement("span", {
						className: c.a.Text
					}, t), e && e, n && s === p.R && o.a.createElement(n, {
						className: Object(r.a)(c.a.Icon, c.a.isRight),
						isFilled: a === m.Primary
					})))({
						children: h,
						text: P,
						Icon: n,
						iconPosition: s,
						priority: O
					});
					return x === b.InternalLink && (e => "to" in e)(j) ? o.a.createElement(g, d({}, l, j, {
						className: S
					}), _) : x === b.ExternalLink && (e => "href" in e)(j) ? o.a.createElement(f, d({}, l, j, {
						className: S
					}), _) : o.a.createElement(v, d({}, l, j, {
						className: S
					}), _)
				},
				g = e => o.a.createElement(a.a, e),
				f = e => o.a.createElement("a", e),
				v = e => o.a.createElement("button", e),
				C = e => o.a.createElement(h, d({
					kind: b.ExternalLink,
					priority: m.Primary
				}, e)),
				x = e => o.a.createElement(h, d({
					kind: b.InternalLink,
					priority: m.Primary
				}, e)),
				O = e => o.a.createElement(h, d({
					kind: b.Button,
					priority: m.Primary
				}, e)),
				y = e => o.a.createElement(h, d({
					kind: b.ExternalLink,
					priority: m.Secondary
				}, e)),
				E = e => o.a.createElement(h, d({
					kind: b.InternalLink,
					priority: m.Secondary
				}, e)),
				P = e => o.a.createElement(h, d({
					kind: b.Button,
					priority: m.Secondary
				}, e)),
				j = e => o.a.createElement(h, d({
					kind: b.InternalLink,
					priority: m.Plain
				}, e)),
				S = e => o.a.createElement(h, d({
					kind: b.Button,
					priority: m.Plain
				}, e)),
				_ = ({
					className: e,
					...t
				}) => o.a.createElement(h, d({
					kind: b.Button,
					priority: m.Primary,
					className: Object(r.a)(e, c.a.DangerButtonColors)
				}, t)),
				k = ({
					className: e,
					...t
				}) => o.a.createElement(h, d({
					kind: b.Button,
					className: Object(r.a)(e, c.a.GoldButtonColors)
				}, t)),
				w = ({
					className: e,
					...t
				}) => o.a.createElement(h, d({
					kind: b.Button,
					className: Object(r.a)(e, c.a.PremiumButtonColors)
				}, t)),
				I = ({
					className: e,
					...t
				}) => o.a.createElement(h, d({
					kind: b.Button,
					className: Object(r.a)(e, c.a.ChatButton)
				}, t)),
				N = ({
					className: e,
					...t
				}) => o.a.createElement(h, d({
					kind: b.Button,
					className: Object(r.a)(e, c.a.InlineTextButton)
				}, t));
			t.q = h
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
				d = n.n(c);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isSelected,
				"aria-disabled": e.disabled,
				autoFocus: e.autoFocus,
				className: Object(r.a)(d.a.checkboxLabel, e.className),
				disabled: e.disabled,
				onClick: e.onClick,
				type: "button",
				role: "checkbox"
			}, o.a.createElement("span", {
				tabIndex: -1,
				className: d.a.labelContent
			}, e.isSelected ? o.a.createElement(i.a, {
				className: d.a.checkboxSelected
			}) : o.a.createElement(a.a, {
				className: d.a.checkbox
			}), e.text))
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/constants/keycodes.ts"),
				d = n("./src/reddit/controls/Input/index.m.less"),
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
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = ({
						keyCode: e
					}) => {
						e === c.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...n
					} = this.props;
					return o.a.createElement("input", u({
						className: Object(a.a)(l.a.input, e),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(r.b)(null, {
				closeModal: i.f
			})(m)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
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
				input: "_1K7ubH9z5v9E6C19j2fjQU",
				iconContainer: "cNtxQ5c1PdvcDe82u_yz9",
				icon: "_3ylUT2QX58nnEl8r4H26ys"
			}
		},
		"./src/reddit/controls/TextButton/index.m.less": function(e, t, n) {
			e.exports = {
				textButton: "qYzY57HWQ8W424hj3s10-"
			}
		},
		"./src/reddit/controls/TextButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/TextButton/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("button", {
				children: e.children,
				className: Object(r.a)(i.a.textButton, e.className),
				disabled: e.disabled,
				onClick: e.onClick
			})
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
			t.a = o.a.memo(e => {
				const t = e.size || a.c.XS;
				return o.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(r.a)(c.a.toggleSwitch, e.className, c.a[t], {
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
					onClick: () => !e.disabled && e.onToggle && e.onToggle()
				}, o.a.createElement("div", {
					className: c.a.toggleDisplay
				}))
			})
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
		"./src/reddit/endpoints/comment/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "b", (function() {
				return y
			}));
			var s = n("./src/config.ts"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = n("./src/reddit/models/Comment/addProfileImgParam.ts"),
				l = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				u = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const m = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/save`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				p = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/unsave`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/lock`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/unlock`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				g = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/approve`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				f = (e, t, n) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/remove`),
					method: o.hb.POST,
					data: {
						id: t,
						spam: n
					}
				}),
				v = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				C = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				x = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				O = (e, t, n, a) => {
					let i = Object(c.a)(Object(u.a)(Object(l.a)(`${s.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return a && (i = Object(d.a)(i)), Object(r.a)(e, {
						data: n,
						endpoint: i,
						method: o.hb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				y = (e, t, n, s) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/distinguish/${n}`),
					method: o.hb.POST,
					data: {
						id: t,
						sticky: s
					}
				})
		},
		"./src/reddit/endpoints/gold/productCatalog.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "a", (function() {
				return y
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
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
				g = e => e ? {
					ctaText: e.cta_text,
					dropdownHeaderText: e.dropdown_banner_text,
					dropdownHeaderBackgroundAsset: e.dropdown_banner_image_url,
					endsAt: e.ends_at,
					heroImageUrl: e.hero_image_url,
					heroSubtext: e.hero_subtext,
					heroText: e.hero_text
				} : null,
				f = async ({
					context: e,
					correlationId: t,
					shouldUseCurrentOrigin: n
				}) => {
					const r = "/api/v2/gold/purchase_package_details",
						i = n && "undefined" != typeof window ? `${window.location.origin}${r}` : `${e.apiUrl}${r}`,
						c = Object(l.a)(i);
					return Object(o.a)(Object(a.a)(e, [d.a]), {
						method: s.hb.GET,
						endpoint: c,
						data: {
							correlation_id: t
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
			const C = async ({
				context: e,
				awardId: t,
				correlationId: n
			}) => {
				const r = `${e.apiUrl}/api/v2/gold/recommended_coin_package_details`,
					i = Object(l.a)(r);
				return Object(o.a)(Object(a.a)(e, [d.a]), {
					method: s.hb.GET,
					endpoint: i,
					data: {
						correlation_id: n,
						intended_award: t
					}
				}).then(u.c).then(x)
			};

			function x(e) {
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
			const O = e => Object(r.a)(e, {
					...c
				}),
				y = e => Object(r.a)(e, {
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
				return C
			})), n.d(t, "b", (function() {
				return x
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
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
					offerContext: r,
					pennies: i,
					rememberCard: l,
					token: u,
					savedCardId: p
				}) => {
					const b = {
							token: u ? u.id : void 0,
							coins: e,
							offer_context: r,
							pennies: i,
							remember_card: l,
							card_id: p,
							correlation_id: n
						},
						h = `${t.apiUrl}/api/v2/gold/stripe/buy_coins`,
						g = Object(d.a)(h);
					return Object(o.a)(Object(a.a)(t, [c.a]), {
						method: s.hb.POST,
						endpoint: g,
						data: b
					}).then(m)
				}, b = async ({
					coins: e,
					context: t,
					correlationId: n,
					gildParams: r,
					isOldReddit: i,
					offerContext: l,
					pennies: u,
					rememberCard: p,
					thingId: b,
					token: h,
					savedCardId: g
				}) => {
					const {
						gildType: f,
						isAnonymous: v,
						message: C
					} = r, x = {
						token: h ? h.id : void 0,
						coins: e,
						offer_context: l,
						pennies: u,
						thing_id: b,
						gild_type: f,
						message: C ? C.trim() : "",
						is_anonymous: v,
						remember_card: p,
						card_id: g,
						correlation_id: n
					}, O = `${t.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, y = i ? O : Object(d.a)(O);
					return Object(o.a)(Object(a.a)(t, [c.a]), {
						method: s.hb.POST,
						endpoint: y,
						data: x
					}).then(m)
				}, h = async ({
					context: e,
					correlationId: t,
					gildParams: n,
					isOldReddit: r,
					pennies: i,
					rememberCard: l,
					thingId: u,
					token: p,
					savedCardId: b
				}) => {
					const {
						gildType: h,
						isAnonymous: g,
						message: f
					} = n, v = {
						token: p ? p.id : void 0,
						thing_id: u,
						award_id: h,
						message: f ? f.trim() : "",
						is_anonymous: g,
						pennies: i,
						remember_card: l,
						card_id: b,
						correlation_id: t
					}, C = `${e.apiUrl}/api/v2/gold/stripe/buy_award`, x = r ? C : Object(d.a)(C);
					return Object(o.a)(Object(a.a)(e, [c.a]), {
						method: s.hb.POST,
						endpoint: x,
						data: v
					}).then(m)
				}, g = async ({
					context: e,
					correlationId: t,
					pennies: n,
					token: r
				}) => {
					const i = {
							token: r.id,
							pennies: n,
							correlation_id: t
						},
						l = `${e.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						u = Object(d.a)(l);
					return Object(o.a)(Object(a.a)(e, [c.a]), {
						method: s.hb.POST,
						endpoint: u,
						data: i
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
				}, C = async (e, t) => {
					const n = {
						card_id: t
					};
					return Object(o.a)(Object(a.a)(e, [c.a]), {
						method: s.hb.POST,
						endpoint: `${e.apiUrl}/api/v2/gold/stripe/delete_creditcard`,
						data: n
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(u.a)(e)
					})
				}, x = async e => Object(o.a)(Object(a.a)(e, [c.a]), {
					method: s.hb.GET,
					endpoint: `${e.apiUrl}/api/v2/gold/stripe/creditcards`
				}).then(e => e.ok ? {
					...e
				} : {
					...e,
					error: Object(u.a)(e)
				})
		},
		"./src/reddit/endpoints/notificationSettingsLayoutByChannelEndpoint.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/redditGQL/operations/NotificationSettingsLayoutByChannel.json"),
				r = n("./src/redditGQL/operations/UpdateNotificationPreferences.json");
			const a = (e, t) => Object(s.a)(e, {
					...o,
					variables: t
				}),
				i = (e, t) => Object(s.a)(e, {
					...r,
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
				o = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = n("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, n) => {
				const d = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === c.h.MARKDOWN ? d.richtext_json = n : d.markdown_text = n, Object(o.a)(Object(r.a)(e, [a.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: s.hb.POST,
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
				d = n("./src/reddit/selectors/user.ts");

			function l(e) {
				return Object(i.O)(e, {}) === r.g.Large && !Object(d.J)(e) && !Object(c.d)(e)
			}

			function u(e) {
				return Object(a.c)(e, {
					expEventOverride: !1,
					experimentEligibilitySelector: l,
					experimentName: o.cc
				})
			}

			function m(e) {
				switch (e) {
					case o.dc.Enabled:
						return 18;
					default:
						return
				}
			}! function(e) {
				e.Enabled = "frontpage-card-posts-3.enabled", e.NoBucket = "frontpage-card-posts-3.no_bucket"
			}(s || (s = {}));
			const p = e => {
				switch (e) {
					case o.dc.Enabled:
						return s.Enabled;
					default:
						return s.NoBucket
				}
			}
		},
		"./src/reddit/helpers/getAccountManagerMessageTarget/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/config.ts");
			const o = () => s.a.redditUrl
		},
		"./src/reddit/helpers/getSrCreationEntrypointCopy.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/reddit/constants/experiments.ts");
			t.a = (e, t) => {
				switch (e) {
					case o.Ed.Add:
						return s.fbt._("Add Community", null, {
							hk: "nuvEI"
						});
					case o.Ed.Start:
						return s.fbt._("Start Community", null, {
							hk: "244eL5"
						});
					case o.Ed.Create:
						return s.fbt._("Create Subreddit", null, {
							hk: "1Qw5ax"
						});
					default:
						return t
				}
			}
		},
		"./src/reddit/helpers/getSubredditErrorProps/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/models/ContentGate.ts");
			t.a = (e, t, n) => {
				let o, r, a, i, c, d, l, u;
				return e ? e.quarantinedSubreddit ? (r = s.a.QuarantinedSubreddit, i = e.quarantineMessage, c = e.quarantineMessageHtml, d = e.quarantineRequiresEmail) : e.privateSubreddit ? (r = s.a.PrivateSubreddit, a = e.subredditDescription, l = e.isContributorRequestsDisabled, u = e.isContributorRequestTimestamp) : e.goldSubreddit ? r = s.a.GoldSubreddit : e.subredditBanned ? (r = s.a.SubredditBanned, o = e.subredditBanMessage) : e.subredditDoesNotExist ? r = s.a.SubredditDoesNotExist : e.subredditBlockedForLegalReason && (r = s.a.SubredditBlockedForLegalReason) : t && (r = s.a.Nsfw), r && n ? {
					banMessage: o,
					contentGateType: r,
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
				return o
			}));
			var s = n("./node_modules/brcast/dist/brcast.es.js");
			const o = Object(s.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/karma.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = e => e ? e.totalKarma || e.postKarma + e.commentKarma + e.awardeeKarma + e.awarderKarma : 0
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
				o = n.n(s),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				d = n.n(c);
			const l = i.a.button("button", d.a),
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
						meta: l
					} = s,
					m = e => o.a.createElement(o.a.Fragment, null, o.a.createElement(i, {
						className: Object(a.a)(d.a.icon, {
							[d.a.isLit]: e
						})
					}), o.a.createElement(c, {
						className: d.a.body
					}), l && o.a.createElement("div", {
						className: d.a.metaContainer
					}, l));
				return n ? e => o.a.createElement("a", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, d.a.basicLink),
					href: e.href,
					onClick: e.onClick,
					target: "_blank",
					rel: "noopener noreferrer"
				}, m(e.isLit)) : e => e.href ? o.a.createElement(r.a, {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, d.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, m(e.isLit)) : o.a.createElement("button", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, d.a.button),
					onClick: e.onClick
				}, m(e.isLit))
			}
		},
		"./src/reddit/helpers/styles/postBackgroundColor.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			n("./node_modules/polished/dist/polished.es.js");
			var s = n("./src/reddit/models/Theme/NewColorSystem/index.ts");

			function o(e) {
				return e.flairStyleTemplate && e.flairStyleTemplate.postBackgroundColor ? e.flairStyleTemplate.postBackgroundColor : Object(s.a)(e).post
			}
		},
		"./src/reddit/helpers/toggleBodyScroll/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			var s = n("./src/reddit/constants/elementIds.ts");
			let o;
			const r = () => {
					const e = document.body.dataset.previousOverflow;
					if (!e) return;
					document.body.removeAttribute("data-previous-overflow");
					const t = document.getElementById(s.c);
					document.body.style.overflow = e, document.body.style.marginRight = "", t && (t.style.marginRight = "")
				},
				a = () => {
					if (document.body.dataset.previousOverflow) return;
					const e = document.body.style.overflow || "auto";
					document.body.dataset.previousOverflow = e, o || (o = i(document.body)), document.body.style.overflow = "hidden", document.body.style.marginRight = `${o}px`;
					const t = document.getElementById(s.c);
					t && (t.style.marginRight = `${o}px`)
				},
				i = e => {
					const t = e.getBoundingClientRect();
					return window.innerWidth - (t.left + t.right)
				},
				c = e => {
					if (!e || !document.body) return 0;
					const t = i(document.body),
						n = e.offsetWidth - e.scrollWidth;
					return t || n
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
				o = n("./src/reddit/selectors/platform.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = e => {
					const t = Object(o.m)(e);
					return {
						actionInfo: Object(r.actionInfo)(e),
						post: t && Object(r.post)(e, t) || null,
						profile: Object(r.profile)(e),
						screen: Object(r.screen)(e),
						subreddit: Object(r.subreddit)(e)
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
		"./src/reddit/helpers/trackers/comment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/telemetry/index.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = ({
					state: e,
					commentId: t
				}) => Object(s.a)({
					source: "comment",
					action: "view",
					noun: "comment",
					...o.defaults(e),
					profile: o.profile(e),
					post: o.post(e, t),
					media: o.media(e, t),
					subreddit: o.subreddit(e),
					comment: o.comment(e, t)
				}),
				a = ({
					state: e,
					commentId: t
				}) => Object(s.a)({
					source: "comment",
					action: "consume",
					noun: "comment",
					...o.defaults(e),
					profile: o.profile(e),
					post: o.post(e, t),
					media: o.media(e, t),
					subreddit: o.subreddit(e),
					comment: o.comment(e, t)
				}),
				i = e => t => ({
					source: "online_presence",
					action: "view",
					noun: "user",
					user: o.user(t),
					subreddit: o.subreddit(t),
					post: o.post(t, e),
					actionInfo: o.actionInfo(t),
					app: o.app(t),
					referrer: o.referrer(t),
					session: o.session(t)
				})
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return u
			})), n.d(t, "g", (function() {
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
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/helpers/trackers/userFlair.ts"),
				r = n("./src/reddit/models/PostDraft/index.ts"),
				a = n("./src/reddit/selectors/comments.ts"),
				i = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/index.ts");
			const l = e => {
					const t = Object(i.m)(e);
					return {
						source: "comment_composer",
						action: s.c.CLICK,
						...Object(c.defaults)(e),
						screen: Object(c.screen)(e),
						subreddit: Object(c.subreddit)(e),
						post: t ? Object(c.post)(e, t) : null,
						profile: Object(c.profile)(e)
					}
				},
				u = (e, t, n, s) => {
					const r = {
							commentId: s,
							commentsPageKey: n
						},
						i = s && Object(a.j)(e, r) || 0;
					return Object(d.a)({
						noun: "comment",
						...l(e),
						comment: s ? Object(c.comment)(e, s) : null,
						listing: Object(c.listing)(e, void 0, {
							depth: i
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: Object(o.d)(e)
					})
				},
				m = (e, t, n, s) => {
					const o = l(e);
					return Object(d.a)({
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
				},
				p = e => Object(d.a)({
					noun: "cancel",
					...l(e)
				}),
				b = (e, t) => {
					t === r.c.replyToPost && Object(d.a)({
						noun: "input",
						...l(e)
					})
				},
				h = (e, t) => Object(d.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(c.defaults)(t),
					screen: Object(c.screen)(t),
					subreddit: Object(c.subreddit)(t),
					post: Object(c.post)(t, e)
				}),
				g = e => Object(d.a)({
					noun: "edit",
					...l(e)
				}),
				f = e => Object(d.a)({
					noun: "save_edit",
					...l(e)
				})
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
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => ({
					...Object(s.defaults)(t),
					customFeed: Object(s.customFeedByPath)(t, e),
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
				d = e => t => ({
					...o(e, t),
					action: "click",
					noun: "share"
				}),
				l = e => t => ({
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
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/helpers/trackers/goldPayment.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = "gold_top_nav",
				i = (e, t = {}) => ({
					...Object(o.g)(e, t),
					correlationId: Object(s.d)(s.a.GoldPayment, !1),
					profile: r.profile(e),
					subreddit: r.subreddit(e)
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
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "o", (function() {
				return u
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "n", (function() {
				return h
			})), n.d(t, "q", (function() {
				return g
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "p", (function() {
				return v
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "r", (function() {
				return x
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "j", (function() {
				return y
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "e", (function() {
				return P
			}));
			var s, o, r, a, i, c = n("./src/reddit/constants/tracking.ts"),
				d = n("./src/reddit/selectors/telemetry.ts"),
				l = n("./src/telemetry/index.ts");
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(s || (s = {})),
			function(e) {
				e.HideNotifications = "hide_notification", e.HideSubreddit = "hide_subreddit", e.HideUpdates = "hide_updates", e.BlockAwarder = "block_awarder"
			}(o || (o = {})),
			function(e) {
				e.MiniInbox = "mini_inbox", e.Inbox = "inbox"
			}(r || (r = {})),
			function(e) {
				e.Inbox = "inbox", e.Nav = "nav", e.Settings = "notification_app_settings"
			}(a || (a = {})),
			function(e) {
				e[e.FIRST = 1] = "FIRST", e[e.SECOND = 2] = "SECOND"
			}(i || (i = {}));
			const u = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s
				}) => o => ({
					...d.defaults(o),
					action: c.c.VIEW,
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
				m = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s,
					awardId: o
				}) => r => {
					Object(l.a)({
						...d.defaults(r),
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
							awardId: o
						}
					})
				},
				p = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s,
					awardId: o,
					position: r
				}) => i => ({
					...d.defaults(i),
					action: c.c.CLICK,
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
						awardId: o
					},
					actionInfo: {
						position: r
					}
				}),
				b = ({
					badgeCount: e,
					tab: t
				}) => n => ({
					...d.defaults(n),
					action: c.c.VIEW,
					noun: "inbox",
					source: a.Inbox,
					inbox: {
						badgeCount: e,
						tab: t
					}
				}),
				h = ({
					badgeCount: e,
					tab: t
				}) => t => ({
					...d.defaults(t),
					action: c.c.VIEW,
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
					...d.defaults(t),
					action: c.c.CLICK,
					noun: "inbox",
					source: a.Nav,
					inbox: {
						badgeCount: e
					}
				}),
				f = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s,
					awardId: o
				}) => r => ({
					...d.defaults(r),
					action: c.c.CLICK,
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
						awardId: o
					}
				}),
				v = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s
				}) => o => ({
					...d.defaults(o),
					action: c.c.VIEW,
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
				C = ({
					actionInfoType: e,
					id: t,
					isClicked: n,
					isViewed: s,
					type: o
				}) => r => ({
					...d.defaults(r),
					action: c.c.CLICK,
					noun: "overflow_option",
					source: a.Inbox,
					inbox: {
						id: t,
						isClicked: n,
						isViewed: s
					},
					notification: {
						type: o
					},
					actionInfo: {
						...d.actionInfo(r),
						type: e
					}
				}),
				x = ({
					actionInfoType: e,
					id: t,
					isClicked: n,
					isViewed: s,
					type: o
				}) => r => ({
					...d.defaults(r),
					action: c.c.UNDO,
					noun: "overflow_option",
					source: a.Inbox,
					inbox: {
						id: t,
						isClicked: n,
						isViewed: s
					},
					notification: {
						type: o
					},
					actionInfo: {
						...d.actionInfo(r),
						type: e
					}
				}),
				O = e => t => ({
					...d.defaults(t),
					action: c.c.CLICK,
					noun: "notification_app_settings",
					source: a.Inbox,
					actionInfo: {
						...d.actionInfo(t),
						pageType: e
					}
				}),
				y = () => e => ({
					...d.defaults(e),
					action: c.c.CLICK,
					noun: "see_all",
					source: a.Inbox,
					actionInfo: {
						...d.actionInfo(e),
						pageType: r.MiniInbox
					}
				}),
				E = () => e => ({
					...d.defaults(e),
					action: c.c.CLICK,
					noun: "messages",
					source: a.Inbox
				}),
				P = ({
					isMiniInbox: e
				}) => t => ({
					...d.defaults(t),
					action: c.c.CLICK,
					noun: "mark_all_as_read",
					source: a.Inbox,
					actionInfo: e ? {
						...d.actionInfo(t),
						pageType: r.MiniInbox
					} : {}
				})
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			}));
			n("./src/reddit/constants/categories.tsx");
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					screen: s.screen(e),
					profile: s.profile(e),
					subreddit: s.subreddit(e)
				}),
				r = e => t => ({
					source: "nav",
					action: "click",
					noun: e,
					...o(t)
				}),
				a = e => t => ({
					...o(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				i = e => t => ({
					...o(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				})
		},
		"./src/reddit/helpers/trackers/onboarding.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = [],
				r = (e = o) => t => ({
					...s.defaults(t),
					action: "click",
					noun: "exit",
					onboarding: {
						processNotes: "exited",
						numberSubredditsSelected: e.length,
						subredditsSelected: e
					},
					source: "onboarding"
				}),
				a = () => e => ({
					...s.defaults(e),
					action: "dismiss",
					noun: "create_account_screen_dropdown",
					source: "onboarding"
				}),
				i = () => e => ({
					...s.defaults(e),
					action: "view",
					noun: "create_account_screen_dropdown",
					source: "onboarding"
				}),
				c = e => t => ({
					...s.defaults(t),
					action: "dismiss",
					noun: e,
					source: "onboarding"
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
				return C
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "u", (function() {
				return O
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "c", (function() {
				return _
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
					post: s.post(n, t)
				}),
				a = (e, t) => n => ({
					source: "shortcuts",
					action: "submit",
					noun: e,
					comment: s.comment(n, t)
				}),
				i = o("show_panel"),
				c = o("esc_close"),
				d = e => r("enter_open_post", e),
				l = e => a("enter_comment_collapse", e),
				u = e => r("j_next", e),
				m = e => a("j_next", e),
				p = e => r("k_previous", e),
				b = e => a("k_previous", e),
				h = e => r("n_next", e),
				g = e => r("p_previous", e),
				f = e => r("s_save", e),
				v = e => a("s_save", e),
				C = e => r("h_hide", e),
				x = e => r("x_expando", e),
				O = e => r("a_upvote", e),
				y = e => a("a_upvote", e),
				E = e => r("z_downvote", e),
				P = e => a("z_downvote", e),
				j = o("c_create_post"),
				S = e => r("l_go_to_link", e),
				_ = e => a("r_comment", e);
			o("q_navigation")
		},
		"./src/reddit/helpers/trackers/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			}));
			var s = n("./src/reddit/models/Gold/ProductOffer.ts"),
				o = n("./src/reddit/selectors/avatarMarketing.ts"),
				r = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = {
					goldPurchase: {
						offerContext: s.a.AvatarNewGear
					}
				},
				c = e => t => {
					const n = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...r.defaults(t)
					};
					return Object(o.a)(t) && Object.assign(n, i), n
				},
				d = (e, t) => n => {
					const {
						id: s
					} = Object(a.nb)(n, {
						userName: t
					});
					return {
						source: e,
						action: "click",
						noun: "copy_avatar",
						...r.defaults(n),
						snoovatar: {
							userGenerated: s
						}
					}
				},
				l = e => ({
					...r.defaults(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: r.snoovatarActiveForBuilderEvent(e)
				}),
				u = e => ({
					...r.defaults(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: r.snoovatarActiveForBuilderEvent(e)
				}),
				m = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...r.defaults(e),
					...i
				})
		},
		"./src/reddit/helpers/wiki/makeWikiPath.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/constants/wiki.ts");
			t.a = (e, t = !1) => {
				let n = "/wiki";
				return e.subredditName && (n = t ? `/r/${e.subredditName}/about/wiki` : `/r/${e.subredditName}/wiki`, e.wikiSubRoute && (n += `/${e.wikiSubRoute}`)), e.wikiPageName ? n += `/${e.wikiPageName.toLowerCase()}` : e.wikiSubRoute || (n += `/${s.i}`), n
			}
		},
		"./src/reddit/hooks/useInboxExposureSeen.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n("./src/reddit/helpers/localStorage/index.ts");

			function r(e) {
				const [t, n] = Object(s.useState)(Object(o.t)(e));
				return [t, Object(s.useCallback)(() => {
					n(!0), Object(o.sb)(e)
				}, [])]
			}
		},
		"./src/reddit/hooks/useTracking.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = s.b
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
				d = n.n(c);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: Object(r.a)(e.className, Object(i.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || a.b.gold
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
			t.a = ({
				className: e,
				...t
			}) => o.a.createElement("svg", c({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20",
				className: Object(r.a)(i.a.checkbox, e)
			}, t), o.a.createElement("path", {
				fill: "inherit",
				d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
			}))
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
		"./src/reddit/icons/svgs/Snoo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/constants/colors.ts");
			t.a = e => o.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				className: e.className
			}, o.a.createElement("g", null, o.a.createElement("circle", {
				fill: r.b.snoo,
				cx: "10",
				cy: "10",
				r: "10"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
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
				fill: a.b.snoo,
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
			const C = (e, t) => async (n, s) => {
				var o;
				const r = s();
				if (function(e) {
						return f.test(Object(g.g)(e))
					}(t)) {
					const e = (null === (o = Object(v.j)(r)) || void 0 === o ? void 0 : o.displayText) || "";
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
			}, x = Object(p.a)(b.e), O = e => ({
				payload: {
					subreddits: e
				},
				type: b.b
			}), y = e => ({
				payload: e,
				type: b.a
			});
			var E = n("./node_modules/redux-thunk/es/index.js"),
				P = n("./node_modules/request-idle-callback/index.js"),
				j = n("./src/lib/browser/isIncognito.ts"),
				S = n("./src/lib/constants/index.ts"),
				_ = n("./src/lib/extractQueryParams/index.ts"),
				k = n("./src/lib/filterQueryParams/index.ts"),
				w = n("./src/lib/getParsedUserAgent/index.ts"),
				I = n("./src/lib/initializeClient/index.tsx"),
				N = n("./src/lib/loadableAction/index.ts"),
				M = n("./src/lib/matchRoute/index.ts"),
				T = n("./src/lib/performance.js"),
				A = n("./src/lib/reCaptchaEnterprise/index.ts"),
				R = n("./src/lib/safeJSONParse/index.ts"),
				L = n("./src/lib/serviceWorker/index.ts"),
				F = n("./src/reduxMiddleware/apiContext.ts"),
				D = n("./src/reduxMiddleware/gqlContext.ts"),
				U = n("./src/telemetry/index.ts"),
				B = n("./src/telemetry/models/Timer.ts"),
				G = n("./src/reddit/actions/apiRequestHeaders.ts"),
				q = n("./src/reddit/actions/chat/toggle.ts"),
				H = n("./src/reddit/actions/chat/unreadCount.ts"),
				W = n("./src/reddit/actions/comment/index.ts"),
				V = n("./src/reddit/actions/emailCollection/index.ts"),
				K = n("./src/reddit/actions/emailVerification.ts"),
				z = n("./src/reddit/actions/googleOneTap/index.ts"),
				Q = n("./src/reddit/actions/media.ts"),
				J = n("./src/lib/loadWithRetries/index.ts"),
				X = n("./src/reddit/actions/notifications/state.ts"),
				Z = n("./src/reddit/actions/nps.ts"),
				Y = n("./src/reddit/actions/platform.ts"),
				$ = n("./src/reddit/actions/post.ts"),
				ee = n("./src/reddit/actions/reCaptchaEnterprise.ts"),
				te = n("./src/reddit/actions/session.ts"),
				ne = n("./src/reddit/actions/survey/index.ts"),
				se = n("./src/reddit/actions/theme.ts"),
				oe = n("./src/reddit/actions/toaster.ts"),
				re = n("./src/reddit/actions/users.ts"),
				ae = n("./node_modules/react-redux/es/index.js"),
				ie = n("./node_modules/react-router/esm/react-router.js"),
				ce = n("./node_modules/reselect/es/index.js"),
				de = (n("./assets/fonts/redesignIcon2020/redesignFont2020.css"), n("./assets/fonts/BentonSans/font.less"), n("./assets/fonts/IBMPlexSans/font.less"), n("./assets/fonts/NotoMono/font.less"), n("./assets/fonts/NotoSans/font.less"), n("./assets/fonts/VCR/font.less"), n("./src/reddit/components/Root/index.m.less")),
				le = n.n(de),
				ue = n("./src/reddit/components/Root/AdminPanelLoader.tsx"),
				me = n("./src/lib/classNames/index.ts"),
				pe = n("./src/reddit/components/AppRouter/index.tsx"),
				be = n("./src/reddit/contexts/User/index.tsx");

			function he(e) {
				return u.a.createElement(be.b, null, e.children)
			}
			var ge = n("./src/reddit/components/ShortcutWrapper/Loader.ts"),
				fe = n("./src/reddit/constants/shortcuts.ts"),
				ve = n("./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less"),
				Ce = n.n(ve);
			var xe = ({
					children: e
				}) => u.a.createElement("div", {
					className: Ce.a.shortcutDiv,
					id: fe.b,
					tabIndex: -1
				}, u.a.Children.only(e)),
				Oe = n("./src/reddit/components/TrackingHelper/index.tsx"),
				ye = n("./src/reddit/contexts/NavbarExp.ts"),
				Ee = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				Pe = n("./src/reddit/components/Header/Sparse.tsx"),
				je = n("./src/reddit/components/ThemeProvider/index.tsx"),
				Se = n("./src/reddit/contexts/InsideOverlay.tsx"),
				_e = n("./src/reddit/controls/Button/index.tsx"),
				ke = n("./src/reddit/featureFlags/index.ts"),
				we = n("./src/reddit/icons/svgs/DizzySnoo/index.tsx"),
				Ie = n("./src/reddit/pages/InternalServerError/index.m.less"),
				Ne = n.n(Ie);
			const {
				fbt: Me
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Te = Object(ce.c)({
				showError: ke.d.showVerboseErrors
			}), Ae = Object(ae.b)(Te)(e => {
				const t = Object(l.useContext)(ye.a);
				return u.a.createElement(Se.a.Provider, {
					value: !1
				}, u.a.createElement(je.b, {
					subredditName: ""
				}, u.a.createElement("div", null, u.a.createElement(Pe.a, {
					logoHref: "#",
					logoOnClick: () => window.location.reload(!0)
				}), u.a.createElement("div", {
					className: Ne.a.container
				}, u.a.createElement("div", {
					className: Ne.a.mainContent
				}, u.a.createElement(we.a, {
					className: Ne.a.dizzySnoo
				}), u.a.createElement("h3", {
					className: Ne.a.title
				}, Me._("Sorry, for some reason reddit can't be reached.", null, {
					hk: "2yRKWG"
				})), u.a.createElement("div", {
					className: Ne.a.subTitle
				}, Me._("Give us a few minutes to fix the problem. Sorry!", null, {
					hk: "1c7Mg0"
				})), u.a.createElement(_e.i, {
					onClick: () => window.location.reload(!0)
				}, Me._("Reload Page", null, {
					hk: "S79U1"
				})), e.showError && u.a.createElement(u.a.Fragment, null, u.a.createElement("div", {
					className: Ne.a.subTitle
				}, e.error.message), u.a.createElement("pre", null, u.a.createElement("code", null, e.error.stack)))), u.a.createElement("div", {
					className: Object(me.a)(Ne.a.topImageContainer, {
						[Ne.a.topImageContainerExp]: t
					})
				}, u.a.createElement("img", {
					className: Ne.a.image,
					src: `${a.a.assetPath}/img/error/star_pattern.png`
				})), u.a.createElement("div", {
					className: Ne.a.bottomImageContainer
				}, u.a.createElement("img", {
					className: Ne.a.image,
					src: `${a.a.assetPath}/img/error/half_planet.png`
				}))))))
			});
			var Re = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts");

			function Le() {
				return (Le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Fe = Object(ce.c)({
					isNavbarLikeMwebEnabled: Re.a,
					theme: e => e.themes.current
				}),
				De = Object(ae.b)(Fe, {})(({
					children: e,
					theme: t,
					isNavbarLikeMwebEnabled: n
				}) => {
					const s = Object(Ee.a)({
						theme: t
					});
					return u.a.createElement(ye.a.Provider, {
						value: n
					}, u.a.createElement("div", {
						className: Object(me.a)(le.a.container, {
							[le.a.containerExp]: n
						}),
						style: {
							"--background": s.body,
							"--canvas": s.canvas
						}
					}, e))
				});

			function Ue(e) {
				if (e.ok) {
					const {
						RouterComponent: t,
						routes: n
					} = e;
					return u.a.createElement(Oe.a, null, u.a.createElement(De, null, u.a.createElement(he, null, u.a.createElement(ue.a, null), u.a.createElement(ge.a, null), u.a.createElement(xe, null, u.a.createElement(t, null, u.a.createElement(ie.d, {
						component: Be(n)
					}))))))
				}
				return u.a.createElement(Ae, {
					error: e.error
				})
			}
			const Be = e => t => u.a.createElement(pe.b, Le({
				routes: e
			}, t));
			var Ge = n("./src/reddit/constants/localStorage.ts"),
				qe = n("./node_modules/lodash/throttle.js"),
				He = n.n(qe),
				We = n("./src/reddit/helpers/localStorage/index.ts");
			const Ve = 1e3;
			class Ke extends u.a.Component {
				constructor() {
					super(...arguments), this.flush = He()(() => Object(We.yb)(this.props.storageKey, this.props.value), Ve)
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
			const ze = Object(ce.a)(v.K, e => ({
				storageKey: Ge.b.LOCAL_PERSISTED_EXPERIMENTS_STORE,
				value: {},
				enabled: !e
			}));
			var Qe = Object(ae.b)(ze)(Ke);
			var Je = () => u.a.createElement(u.a.Fragment, null, u.a.createElement(Qe, null)),
				Xe = n("./src/reddit/constants/headers.ts"),
				Ze = n("./src/reddit/constants/history.ts"),
				Ye = n("./src/reddit/constants/jsapiEvents.ts"),
				$e = n("./src/reddit/constants/parameters.ts"),
				et = n("./src/reddit/constants/screenWidths.ts"),
				tt = n("./src/reddit/contexts/AdminEvents.ts"),
				nt = n("./src/reddit/contexts/ApiContext.tsx"),
				st = n("./src/reddit/contexts/ThrottlingContext/index.tsx"),
				ot = n("./node_modules/brcast/dist/brcast.es.js"),
				rt = n("./src/telemetry/helpers/sendEvent.ts"),
				at = n("./src/reddit/selectors/runTimeEnvVars.ts");
			var it = "undefined" != typeof document ? () => {
					let e = !1;
					const t = Object(ot.a)([]);
					return {
						broadcaster: t,
						middleware: n => {
							const s = n.getState();
							return (Object(at.b)(s) || Object(v.H)(s)) && (e = !0, Object(rt.c)(t)), s => o => {
								const r = s(o),
									a = n.getState();
								if (!Object(at.b)(a)) {
									const n = Object(v.H)(a);
									e && !n ? (e = !1, Object(rt.c)(void 0), t.setState([])) : n && !e && (t.setState([]), Object(rt.c)(t), e = !0)
								}
								return r
							}
						}
					}
				} : () => ({
					broadcaster: Object(ot.a)([]),
					middleware: () => e => t => e(t)
				}),
				ct = n("./node_modules/lodash/debounce.js"),
				dt = n.n(ct),
				lt = n("./src/lib/domUtils/index.ts");
			const ut = 30 * S.ib;
			let mt = Date.now();
			const pt = () => {
					mt = Date.now()
				},
				bt = !!Object(lt.f)() && {
					passive: !0
				};
			window.addEventListener("click", pt, !1), window.addEventListener("wheel", dt()(pt, 250), bt), window.addEventListener("mousemove", dt()(pt, 250), bt), window.addEventListener("keydown", dt()(pt, 250), bt);
			var ht = e => {
					return document.addEventListener("visibilitychange", (function() {
						"visible" === document.visibilityState && document.hasFocus && Date.now() - mt >= ut ? (e.dispatch(te.h()), pt()) : pt()
					})), e => t => e(t)
				},
				gt = n("./node_modules/lodash/pick.js"),
				ft = n.n(gt),
				vt = n("./src/reddit/actions/header.ts"),
				Ct = n("./src/reddit/actions/preferences.ts"),
				xt = n("./src/reddit/constants/preferences.ts"),
				Ot = n("./src/reddit/helpers/cookies/index.ts");
			const yt = new Set([Ct.f, Ct.h, se.b, Ct.c, Ct.n, vt.d, vt.e, Ct.q]);
			var Et = e => t => n => {
					const s = t(n);
					if (yt.has(n.type)) {
						const t = e.getState().user,
							n = ft()(t.prefs, ["hamburgerTray", "globalTheme", "collapsedTraySections", "nightmode", "subscriptionsPinned", xt.b, xt.d, xt.e]);
						Object(Ot.a)({
							prefs: n
						})
					}
					return s
				},
				Pt = n("./src/lib/fastdom/index.ts"),
				jt = n("./src/reddit/actions/tabBadging.ts"),
				St = n("./src/reddit/selectors/appBadges.ts"),
				_t = n("./src/reddit/selectors/chat.ts"),
				kt = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				wt = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				It = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Nt = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				Mt = n("./src/reddit/selectors/platform.ts");
			const Tt = new Set([302, 400, 401, 403, 404, 421, 429, 500, 502, 503, 504, 0, void 0, null]),
				At = e => {
					var t;
					const {
						currentPage: n
					} = e.platform, s = Object(Mt.p)(e), o = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.status, r = Tt.has(o), a = Object(It.k)(e, {
						pageLayer: n
					}), i = !(!a || !a.hideFromRobots), c = Rt(e), d = n && n.isRobotIndexable, l = s === S.Jb.COMMENTS || s === S.Jb.COLLECTION_COMMENTS, u = !(!n || !n.urlParams.partialCommentId), m = s === S.Jb.SEARCH_RESULTS || s === S.Jb.SUBREDDIT_LEADERBOARD || l && u;
					return i || r || c || (!1 === d || m) ? m ? "noindex" : "noindex,nofollow" : null
				},
				Rt = e => {
					var t;
					let n = !1;
					const s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams.subredditName;
					if (s) {
						const t = Object(v.e)(e, s);
						n = !!Object(Nt.a)(t, !1, s)
					}
					return n
				};
			var Lt = "undefined" != typeof document ? e => t => n => {
					const s = t(n);
					if (n.type === Y.e) {
						const t = e.getState(),
							s = Object(v.J)(t),
							{
								meta: o
							} = n.payload;
						s ? ((e, t) => {
							const n = Object(wt.g)(e),
								s = Object(kt.a)(e);
							let o = 0;
							if (n) o = Object(St.i)(e);
							else if (s) o = Object(St.j)(e);
							else {
								const t = Object(v.F)(e) || 0;
								o = Object(_t.a)(e) + t
							}
							Object(jt.c)(o, t)
						})(t, o.title) : Pt.a.write(() => {
							document.title = o.title, ((e, t) => {
								if (t.head) {
									let n = t.querySelector("meta[name='robots']");
									const s = At(e),
										{
											head: o
										} = t;
									s ? (n || ((n = t.createElement("meta")).name = "robots", o.appendChild(n)), n.content = s) : n && (n.remove ? n.remove() : n.parentNode ? n.parentNode.removeChild(n) : o.removeChild && o.removeChild(n))
								}
							})(t, document)
						})
					}
					return s
				} : () => e => t => e(t),
				Ft = n("./src/reddit/helpers/survey/index.ts");
			var Dt = "undefined" != typeof document ? e => e => t => ((e => !!Object.keys(Ft.b).filter(t => t === e).length)(t.type) && Object(We.R)(Ft.b[t.type]), e(t)) : () => e => t => e(t);
			const Ut = 5 * S.ib;
			var Bt = e => {
					const t = He()(() => {
						const t = e.getState().user.session,
							n = new Date(t.expires),
							s = new Date;
						n.getTime() - s.getTime() > .2 * t.expiresIn * 1e3 || e.dispatch(te.g())
					}, Ut);
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
					return a.user.session && r(a.user.session), window.addEventListener("focus", o), window.addEventListener("touchend", o), document.body.addEventListener("mouseenter", o), e => t => (t.type !== te.a && t.type !== te.b && t.type !== te.c && t.type !== te.e || r(t.payload), t.type === te.d && (clearTimeout(n), n = null), e(t))
				},
				Gt = n("./src/reddit/singleton/tracing/index.ts");
			var qt = e => e => t => {
					const n = () => e(t);
					return Gt.b.isEnabled ? Gt.b.recordLocalSpan(t.type, n) : e(t)
				},
				Ht = n("./src/reddit/actions/frontpage/constants.ts"),
				Wt = n("./src/reddit/actions/pages/profileComments/constants.ts"),
				Vt = n("./src/reddit/actions/pages/profileOverview/constants.ts"),
				Kt = n("./src/reddit/actions/pages/profilePosts.ts"),
				zt = n("./src/reddit/actions/pages/search.ts"),
				Qt = n("./src/reddit/actions/pages/subreddit.ts"),
				Jt = n("./src/reddit/actions/search.ts"),
				Xt = n("./src/reddit/actions/subreddit.ts"),
				Zt = n("./src/reddit/actions/tracking.ts"),
				Yt = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				$t = n("./src/reddit/helpers/history/index.ts"),
				en = n("./src/reddit/helpers/trackers/commentList.ts"),
				tn = n("./src/reddit/helpers/trackers/postList.ts"),
				nn = n("./src/reddit/helpers/trackers/screenview.ts"),
				sn = n("./src/reddit/selectors/subreddit.ts"),
				on = n("./src/reddit/helpers/routeKey/index.ts");
			var rn = e => t => n => {
					const s = t => {
						e.getState().tracking.viewportDataLoaded[t] || e.dispatch(Zt.c({
							routeKey: t
						}))
					};
					if (n.type === Y.a) {
						const s = e.getState(),
							o = (s.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
							a = Object(sn.D)(s, o) || "",
							i = (s.subreddits.about[a] || {}).advertiserCategory;
						r.trigger("pageview", {
							...ft()(n.payload.location, "pathname", "search", "hash"),
							subreddit: o,
							advertiserCategory: i
						});
						const c = s.platform.currentPage && s.platform.currentPage.routeMatch;
						if (c) {
							const e = Object(on.b)(c, s, Object(Yt.a)(s));
							if (e && U.c.has(e)) {
								const t = U.c.end(e);
								!Object(Mt.h)(s) && Object($t.b)(Ze.a.IsOverlay) || Object(nn.k)(c, s, B.TimerType.UserCancelled, t)
							}
						}
						const d = n.payload.routeMatch;
						if (!d) return t(n);
						const l = Object(Yt.a)(s, d),
							u = Object(on.b)(d, s, l);
						if (!u) return t(n);
						U.c.start(u)
					}
					const o = t(n);
					switch (n.type) {
						case Ht.b:
						case Vt.b:
						case Vt.e:
						case Kt.PROFILE_POSTS_LOADED:
						case Wt.e:
						case Qt.SUBREDDIT_LOADED: {
							const {
								key: e,
								token: t
							} = n.payload;
							t || s(e);
							break
						}
						case zt.SEARCH_RESULTS_RECEIVED: {
							const {
								key: e,
								tokens: t
							} = n.payload;
							t.posts || s(e);
							break
						}
						case Ht.f:
						case Xt.i:
						case Kt.MORE_POSTS_LOADED: {
							const {
								key: t,
								postIds: o
							} = n.payload;
							s(t);
							const r = e.getState();
							if (o.length) break;
							if (void 0 === r.listings.postOrder.endMarkers[t]) break;
							tn.l(r, t);
							break
						}
						case Wt.b: {
							const {
								key: t,
								commentIds: o
							} = n.payload;
							if (s(t), o.length) break;
							const r = e.getState();
							if (void 0 === r.profileCommentsPage.endMarkers[t]) break;
							en.a(r, t);
							break
						}
						case Jt.e: {
							const {
								key: e
							} = n.payload;
							s(e);
							break
						}
					}
					return o
				},
				an = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				cn = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				dn = n("./src/reddit/helpers/trackers/global.ts");
			let ln = null;
			const un = () => {
				ln && window.clearTimeout(ln), ln = null
			};
			var mn = e => {
					ln = window.setTimeout(() => {
						un(), Object(U.a)(Object(dn.d)(3e4)(e()))
					}, 3e4), window.addEventListener("beforeunload", un)
				},
				pn = n("./src/reddit/helpers/onBeforeRequestFactory/index.ts"),
				bn = n("./src/lib/cookieConsent/index.ts"),
				hn = n("./src/lib/permanentCookieOptions.ts"),
				gn = n("./src/reddit/constants/cookie.ts");
			const fn = (e, t) => {
				if (!e) return;
				const n = (d.a.get(gn.g) || "").split(",");
				if (!n.includes(e)) {
					n.unshift(e);
					const s = n.slice(0, 10).join(","),
						o = {
							name: gn.g,
							value: s,
							cookieOptions: Object(hn.a)(),
							cookieContext: t
						};
					Object(bn.c)(o)
				}
			};
			var vn = n("./src/reddit/layout/page/Listing/index.tsx"),
				Cn = n("./src/reddit/models/Toast/index.ts"),
				xn = n("./src/reddit/reducers/index.ts"),
				On = n("./src/reddit/routes/index.ts"),
				yn = n("./src/reddit/constants/experiments.ts"),
				En = n("./src/reddit/helpers/chooseVariant/index.ts");
			var Pn = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				jn = n("./src/reddit/selectors/meta.ts");
			const Sn = e => !Object(jn.d)(e) && Object(v.R)(e),
				_n = e => !Object(jn.d)(e) && (e => {
					const t = Object(v.tb)(e);
					return parseInt(t.loidCreated) < 16074144e5
				})(e),
				kn = e => Object(En.c)(e, {
					experimentName: yn.Z,
					experimentEligibilitySelector: Sn
				}),
				wn = e => Object(En.c)(e, {
					experimentName: yn.Z,
					experimentEligibilitySelector: _n
				});
			Object(ce.a)(kn, e => e === yn.O.LoggedInUser), Object(ce.a)(wn, e => e === yn.O.ExistingUser);
			var In;
			! function(e) {
				e.LoggedInUser = "html_response_streaming.logged_in_user", e.ExistingUser = "html_response_streaming.existing_user", e.Control = "html_response_streaming.control_1"
			}(In || (In = {}));
			const Nn = e => {
				const t = kn(e);
				if (t) return t === yn.O.LoggedInUser ? In.LoggedInUser : In.Control;
				const n = wn(e);
				return n ? n === yn.O.ExistingUser ? In.ExistingUser : In.Control : void 0
			};
			var Mn = n("./src/reddit/selectors/experiments/postCommentFollow.ts"),
				Tn = n("./src/reddit/selectors/telemetry.ts");
			const An = {
					displayDelay: 15,
					displayOnRoutes: [S.Jb.SUBREDDIT, S.Jb.COMMENTS],
					experimentName: yn.ic,
					experimentVariant: yn.mc.On,
					isSEOOnly: !0,
					samplingRate: 25,
					seed: Math.random()
				},
				Rn = e => {
					const {
						base_url: t
					} = Object(Tn.requestWithParams)(e), n = Object(Mt.b)(e), s = n && n.urlParams.partialPostId, o = n && n.urlParams.subredditName;
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
				Ln = e => {
					if (((({
							experimentName: e,
							experimentVariant: t
						}, n) => n.experimentOverrides[e] === t)(An, e) || (({
							samplingRate: e,
							seed: t
						}) => !!t && 0 === Math.floor(t * e))(An)) && (({
							displayOnRoutes: e
						}, t) => {
							const n = t.platform.currentPage && t.platform.currentPage.meta && t.platform.currentPage.meta.name;
							return !!n && e.includes(n)
						})(An, e) && (({
							isSEOOnly: e
						}, t) => !e || t.meta.isSessionSeo)(An, e) && (({
							experimentName: e,
							experimentVariant: t
						}, n) => Object(En.c)(n, {
							experimentName: e,
							experimentEligibilitySelector: En.a
						}) === t)(An, e)) return {
						displayDelay: An.displayDelay,
						externalVars: Rn(e)
					}
				};
			var Fn = n("./src/reddit/singleton/EventSystem.ts"),
				Dn = n("./src/lib/initializeClient/installReducer.ts"),
				Un = n("./src/reddit/reducers/features/categories/index.ts"),
				Bn = n("./src/lib/sentry/index.ts"),
				Gn = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const qn = Object(p.a)(Gn.C),
				Hn = () => {
					return Object(We.y)(Ge.b.RPAN_USER_SETTINGS_STORE) || void 0
				};
			var Wn = n("./src/reddit/actions/global/constants.ts");
			Object(Dn.a)({
				features: {
					categories: Un.a
				}
			});
			const Vn = Object(p.a)(Wn.a),
				Kn = e => async (t, n) => {
					t((() => async e => {
						const t = Hn();
						t && e(qn(t))
					})());
					const s = n();
					s.user.loid.loid || s.meta.isBot || Bn.c.withScope(e => {
						Object(Bn.a)(e, {
							serverLogging: !1
						}), Bn.c.captureMessage("User has no LOID set")
					});
					const {
						localStorageData: o
					} = e;
					o && t(Vn(o))
				};
			var zn = n("./src/reddit/actions/login.ts");
			const Qn = /^\/account\/magic_link\/landing\/[^\/]+\/?$/,
				Jn = () => async (e, t) => {
					var n;
					(e => {
						if (!e) return !1;
						const t = new URL(e).pathname;
						return Qn.test(t)
					})(null === (n = t().platform) || void 0 === n ? void 0 : n.sessionReferrer) && e(Object(zn.i)())
				};
			var Xn = n("./src/reddit/actions/notificationsInbox/index.ts"),
				Zn = n("./src/chat/customMiddleware/noop.ts"),
				Yn = n("./src/lib/cache/index.ts");
			const $n = Object(Yn.c)(S.p.RECENT_SUBREDDITS, "recent_subreddits"),
				es = () => Object(Yn.b)($n) || [];
			var ts = e => "undefined" == typeof window ? Zn.a : e => t => {
					const n = e(t);
					switch (t.type) {
						case b.e: {
							const e = es() || [],
								{
									id: n
								} = t.payload || {};
							if (n) {
								const s = e.findIndex(e => e.id === n); - 1 !== s && e.splice(s, 1), e.unshift(t.payload), e.splice(b.c), Object(Yn.d)($n, e, S.nb)
							}
							break
						}
					}
					return n
				},
				ns = n("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts"),
				ss = n("./src/reddit/selectors/experiments/goodVisitSearchFeed.ts");
			Object(o.e)(o.b.EntryPointStart);
			const os = Object(F.a)({
					actionDispatchers: {
						reddaidReceived: re.s,
						loidReceived: re.q,
						sessionTrackerReceived: re.x
					},
					authHeaders: {
						[Xe.a]: "desktop2x"
					},
					cookies: d.a,
					receivedActions: {
						reddaidReceived: re.d,
						loidReceived: re.b,
						sessionTrackerReceived: re.k,
						userAuthenticated: te.c,
						userLoggedOut: te.d,
						userReauthenticated: te.e,
						headersReceived: G.a
					},
					onBeforeRequestFactory: pn.a,
					statsAppName: S.l.Redesign
				}),
				rs = Object(D.a)(os.apiContext),
				as = it();
			let is;
			Object(I.a)({
				reducerMap: xn.a,
				routes: On.a,
				apiContext: os.apiContext,
				gqlContext: rs.gqlContext,
				appFactory: (e, t) => u.a.createElement(tt.a.Provider, {
					value: as.broadcaster
				}, u.a.createElement(nt.a.Provider, {
					value: {
						apiContext: os.apiContext,
						gqlContext: rs.gqlContext
					}
				}, u.a.createElement(st.b, null, u.a.createElement(Ue, {
					ok: !0,
					RouterComponent: e,
					routes: t
				}), u.a.createElement(Je, null)))),
				appName: S.l.Redesign,
				history: Object(i.a)({
					getUserConfirmation(e, t) {
						const n = is;
						if (!n) return;
						n.dispatch(Object(Y.k)({
							allowNavigationCallback: (e = !1) => {
								t(e), n.dispatch(Object(Y.j)())
							}
						}))
					}
				}),
				customMiddleware: [E.a.withExtraArgument({
					routes: On.a,
					apiContext: os.apiContext,
					gqlContext: rs.gqlContext
				}), as.middleware, ht, os.middleware, rs.middleware, Bt, Et, qt, rn, Lt, Dt, ts],
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
					loading: u.a.createElement(vn.a, {
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
							e.origin.indexOf(t) < 0 || "tweet-measured" !== e.data.action || !e.data.id36 || n.dispatch(Object(Q.j)({
								height: e.data.height || 0,
								isDeleted: e.data.isDeleted || !1,
								postId: `t3_${e.data.id36}`
							}))
						}), window.addEventListener("beforeunload", () => {
							const e = n.getState();
							Object(L.b)("sendV2Event", Object(dn.a)("tab_closed")(e))
						}),
						function(e) {
							const t = String(e.split("/")[1]).toLowerCase();
							return "framedgild" === t || "framedmodal" === t
						}(e.location.pathname) || n.dispatch(Object(Y.g)());
					const s = Object(v.W)(n.getState());
					n.dispatch(Object(se.c)({
						nightmode: s
					}));
					const o = (e => e.tracing.traceId)(n.getState());
					if (o && (e => Object(En.c)(e, {
							experimentEligibilitySelector: En.a,
							experimentName: yn.A
						}) === yn.H.Enabled)(n.getState())) {
						Gt.b.enableTracing(!0);
						const e = Gt.b.createTraceFromId(o);
						Gt.b.setParent(e)
					}
					n.dispatch(Object(Y.h)(t));
					e.listen((e, s) => {
						const o = Object(M.a)(Object(i.e)(e), t);
						n.dispatch(Object(Y.i)(e, s, o))
					});
					const r = n.getState(),
						{
							currentPage: c
						} = r.platform;
					if (c) {
						const e = [];
						Object(Mt.i)(r) && e.push($e.e), e.length > 0 && n.dispatch(Object(m.c)(Object(k.a)(c.url, e)))
					}
					return an.a.initialize(), {
						localStorageData: Object(We.z)()
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
					is = c;
					e.listen((e, t) => {
						const n = c.getState(),
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
							i = Object(sn.D)(n, a) || "";
						if (fn(i, {
								country: n.meta.country
							}), i) {
							c.dispatch(C(i, a));
							const e = Object(Mt.e)(n);
							e && c.dispatch(x(e))
						}
						Fn.a.publish(Ye.c, r, document)
					});
					const m = c.getState(),
						p = es();
					c.dispatch((e => async t => {
						const n = {},
							s = new Set;
						e.forEach(e => {
							s.add(e.id), n[e.id] || (n[e.id] = e)
						}), t(O(n)), t(y(Array.from(s)))
					})(p));
					const b = (m.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
						h = Object(sn.D)(m, b) || "";
					if (b) {
						c.dispatch(C(h, b));
						const e = Object(Mt.e)(m);
						e && c.dispatch(x(e))
					}
					const g = Object(sn.D)(m, b) || "",
						f = (m.subreddits.about[g] || {}).advertiserCategory;
					if (r.setup({
							jailUrl: "https://www.redditmedia.com/gtm/jail",
							containerId: a.a.gtmContainerId,
							payload: {
								user: m.user.account ? m.user.account.id : m.user.loid.loid
							}
						}), r.trigger("pageview", {
							subreddit: b,
							advertiserCategory: f
						}), c.dispatch(Kn({
							localStorageData: d
						})), Object(Pn.f)(m) && Object(z.d)(m), c.dispatch(Object(z.c)()), c.dispatch(Jn()), window.addEventListener("load", () => {
							const t = c.getState(),
								{
									currentPage: r
								} = t.platform,
								a = (r.urlParams.subredditName || "").toLowerCase(),
								d = Object(sn.D)(t, a) || "";
							if (fn(d, {
									country: t.meta.country
								}), r && r.meta) {
								const a = r.meta.name;
								if (Object(U.b)(S.l.Redesign, {
										page: a,
										type: "rum"
									}), Object(w.c)(t.meta.userAgent) && window.innerWidth > et.b) {
									const e = Object(o.f)(i);
									T.a && T.a.timing && Gt.b.isEnabled && (Gt.b.recordPerformanceTimings(`${a}_time_to_first_byte`, T.a.timing.fetchStart, T.a.timing.responseStart), Gt.b.recordPerformanceTimings(`${a}_time_to_interactive`, T.a.timing.fetchStart, T.a.timing.domInteractive));
									const n = [];
									let s = !0;
									if (Object(Mt.g)(t)) {
										const e = Object(cn.a)(t);
										n.push(Object(cn.c)(e))
									}
									const r = Nn(t);
									r && (n.push(r), s = !1);
									const c = {
										isLoggedIn: Object(v.K)(t),
										name: a,
										statsdPathsForExperiments: n
									};
									Object(o.g)(c, e, s)
								}
								const d = T.a.timing.domInteractive - T.a.timing.navigationStart;
								Object(nn.k)(r.routeMatch, c.getState(), B.TimerType.Initial, d, r.urlParams);
								const l = Object(_.a)(window.location.href);
								l && l.get($e.a) && history.replaceState(history.state, "", Object(k.a)(window.location.href, [$e.a])), Object(R.a)(l.get($e.y)) && c.dispatch(Object(oe.f)({
									kind: Cn.b.SuccessCommunity,
									text: s.fbt._("Email verification complete", null, {
										hk: "bqMP6"
									})
								})), l.get($e.z) && (c.dispatch(Object(K.a)(l.get($e.z))), history.replaceState(history.state, "", Object(k.a)(window.location.href, [$e.z])));
								let u = !1;
								if ((Object($t.b)(Ze.a.JustLoggedIn) || l && l.get($e.o) && Object(R.a)(l.get($e.o))) && (c.dispatch(Object(oe.f)({
										text: s.fbt._("Successfully logged in!", null, {
											hk: "2POUVB"
										})
									})), u = !0, Object($t.c)(Ze.a.JustLoggedIn), history.replaceState(history.state, "", Object(k.a)(window.location.href, [$e.o]))), Object($t.b)(Ze.a.JustLoggedOut) && (u = !0, Object($t.c)(Ze.a.JustLoggedOut)), Object(X.a)(t), !1 !== We.S()) {
									let s;
									Object(Pn.a)(t) && (s = () => {
										const {
											dispatch: t
										} = c;
										e.listen(() => t(Object(z.b)())), t(Object(z.b)())
									}), (() => Object(J.a)(() => n.e("PushNotifications").then(n.bind(null, "./src/reddit/actions/notifications/index.ts"))))().then(e => e.requestNotificationsPermissions).then(e => c.dispatch(e(u, !1, s)))
								}
								if (a === S.Jb.MULTIREDDIT && r.routeMatch) {
									const {
										multiredditName: e,
										username: t
									} = r.routeMatch.match.params;
									c.dispatch(Object(N.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.recommendationsRequested))({
										multiredditName: e,
										username: t
									}))
								}
								c.dispatch(Object(V.c)())
							}
							Object(v.K)(c.getState()) && (Object(kt.a)(c.getState()) || c.dispatch(Object(H.d)()), c.dispatch(Object(q.e)())), Object(P.requestIdleCallback)(async () => {
								c.dispatch(Object(Z.d)()), await Object(j.a)() && Object(dn.b)(c.getState());
								const t = async () => {
									const e = c.getState(),
										t = Ln(e);
									t && (await (async e => {
										return (await Object(J.a)(() => n.e("UserZoomIntegration").then(n.bind(null, "./src/reddit/helpers/userzoom/index.ts")))).embedFrame(e)
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
								if ("visible" !== document.visibilityState && (We.Mb(Date.now()), Object(U.a)(Object(dn.a)("tab_backgrounded")(t))), (e => Object(En.c)(e, {
										experimentEligibilitySelector: e => !Object(jn.d)(e),
										experimentName: yn.kb
									}) === yn.ub.Enabled)(t) && "visible" === document.visibilityState && n && Object(nn.k)(n.routeMatch, c.getState(), B.TimerType.Revisit, 0, n.urlParams, !0), "visible" === document.visibilityState) {
									const e = We.u(),
										t = We.v(),
										n = We.E(),
										s = We.O();
									if (s && e && n) {
										const o = Date.now() - s;
										Object(U.a)(Object(dn.e)("tab_backgrounded", n)(c.getState(), o, e, t))
									}(s || e || n || t) && (We.ab(), We.eb(), We.cb(), We.bb())
								}
								Object(ss.a)(c.getState()) && (null === (e = null == n ? void 0 : n.locationState) || void 0 === e ? void 0 : e.clickId) && ns.d[n.locationState.clickId] && !ns.d[n.locationState.clickId].completed && ("visible" !== document.visibilityState ? Object(ns.b)(n.locationState.clickId) : Object(ns.c)(n.locationState.clickId))
							}), Object(jn.g)(c.getState()) && mn(c.getState), c.dispatch(Object(ne.j)())
						}), window.history.scrollRestoration = "manual", Fn.a.attachStore(c), c.dispatch(Object(ee.b)(A.a.PageLoad)), Object(wt.i)(c.getState()) && c.dispatch(Object(Xn.e)()), Object(Mn.b)(c.getState())) {
						const e = We.q(null === (l = c.getState().user.account) || void 0 === l ? void 0 : l.id);
						c.dispatch(Object($.C)({
							posts: null != e ? e : []
						}))
					}
					if (Object(Mn.a)(c.getState())) {
						const e = We.p(null === (u = c.getState().user.account) || void 0 === u ? void 0 : u.id);
						c.dispatch(Object(W.k)({
							comments: null != e ? e : []
						}))
					}
				},
				raven: {
					tags: {
						project: S.l.Redesign
					}
				},
				ssr: !0,
				target: document.getElementById("2x-container"),
				timingsSampleRate: 1,
				perfExperimentNameSelector: e => (e => {
					const t = Nn(e);
					return t || null
				})(e.getState())
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
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
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
			const b = Object(d.t)(),
				h = Object(a.c)({
					isEditing: l.i,
					layout: (e, t) => t.forcedLayout || Object(d.O)(e, t)
				}),
				g = Object(r.b)(h),
				f = ({
					hideOnlyChildMargin: e,
					disableFullscreen: t,
					dispatch: n,
					fitPageToContent: s,
					forcedLayout: r,
					isCollectionLayout: a,
					isEditing: i,
					layout: c,
					pageLayer: d,
					...l
				}) => o.a.createElement("div", l);
			t.a = b(g(({
				className: e,
				...t
			}) => o.a.createElement(f, p({
				className: Object(i.a)(e, m.a.styledContent, {
					[m.a.mLargePostLayout]: t.layout === c.g.Large,
					[m.a.mDisableFullScreen]: t.disableFullscreen && !t.isCollectionLayout,
					[m.a.mClassicWidth]: t.isCollectionLayout,
					[m.a.mIsEditing]: !!t.isEditing,
					[m.a.mCanFlexFullWidth]: !t.fitPageToContent,
					[m.a.onlyChildMargin]: !t.hideOnlyChildMargin
				})
			}, t))))
		},
		"./src/reddit/layout/page/Listing/index.m.less": function(e, t, n) {
			e.exports = {
				Body: "_1vyLCp-v-tE5QvZovwrASa",
				body: "_1vyLCp-v-tE5QvZovwrASa",
				Sidebar: "_1BFbVxT49QnrAN3fqGZ1z8",
				sidebar: "_1BFbVxT49QnrAN3fqGZ1z8",
				defaultLayout: "_1tvThPWQpORoc2taKebHxs",
				"m-collectionLayout": "K1OCXipJxqOt01sOdQXEx",
				mCollectionLayout: "K1OCXipJxqOt01sOdQXEx",
				outerContainer: "qYj03fU5CXf5t2Fc5iSvg",
				outerContainerExp: "_35NDNOyTzBcywfeEavUt6p",
				innerContainer: "_3ozFtOe6WpJEMUtxDOIvtU",
				bannerNavContainer: "q4a8asWOWdfdniAbgNhMh",
				backgroundContainer: "_33erTQ46yfKeF2B6B-ooMJ"
			}
		},
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/layout/page/Listing/Content.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/constants/componentSizes.ts"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				u = n("./src/reddit/constants/screenWidths.ts"),
				m = n("./src/reddit/contexts/NavbarExp.ts"),
				p = n("./src/reddit/models/Theme/index.ts"),
				b = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				h = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class g extends o.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return o.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var f = Object(h.a)(g);
			var v = e => o.a.createElement(f, e),
				C = n("./src/reddit/layout/page/Listing/index.m.less"),
				x = n.n(C);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const y = Object(i.a)(e => {
					const {
						backgroundColor: t,
						className: n,
						redditStyle: s,
						theme: r,
						...i
					} = e, c = Object(b.a)(e), d = {
						"--pseudo-before-background": t || Object(p.g)(c.canvas, c.canvasImgUrl, c.canvasImgPosition)
					};
					return o.a.createElement("div", O({
						className: Object(a.a)(x.a.backgroundContainer, n),
						style: d
					}, i))
				}),
				E = c.a.div("Body", x.a),
				P = c.a.div("Sidebar", x.a),
				j = e => e.hero ? o.a.createElement(o.a.Fragment, null, e.hero) : null;
			t.a = function(e) {
				const t = e.trendingUnit ? "28px" : "0",
					n = e.isPageSwapped ? {
						marginRight: `${d.q}px`,
						marginTop: t
					} : {
						marginLeft: `${d.q}px`,
						marginTop: t
					},
					i = e.sidebar && o.a.createElement(P, {
						className: e.isCollectionLayout ? x.a["m-collectionLayout"] : x.a.defaultLayout,
						style: n
					}, e.sidebar),
					c = o.a.createElement(r.a, {
						hideOnlyChildMargin: e.hideOnlyChildMargin,
						className: e.contentClassName,
						disableFullscreen: e.disableFullscreen,
						fitPageToContent: e.fitPageToContent,
						forcedLayout: e.forcedLayout,
						isCollectionLayout: e.isCollectionLayout
					}, e.contentBanner, e.content);
				let p;
				p = e.sidebars ? o.a.createElement(o.a.Fragment, null, e.sidebars[0], c, e.sidebars[1]) : e.isPageSwapped ? o.a.createElement(o.a.Fragment, null, i, c) : o.a.createElement(o.a.Fragment, null, c, i);
				const b = e.disableFullscreen ? `${e.maxWidth||u.a+2*d.m}px` : "100%",
					h = Object(s.useContext)(m.a);
				return o.a.createElement(v, {
					subredditId: e.subredditId
				}, o.a.createElement("div", {
					className: Object(a.a)(x.a.outerContainer, l.i, e.className, {
						[x.a.outerContainerExp]: h
					}),
					ref: e.containerRef
				}, o.a.createElement(y, {
					className: l.h,
					redditStyle: e.redditStyle,
					backgroundColor: e.backgroundColor
				}), o.a.createElement("div", {
					className: x.a.innerContainer
				}, o.a.createElement("div", {
					className: x.a.bannerNavContainer
				}, e.navBar), e.contentNavBar, j(e), o.a.createElement("div", {
					style: {
						maxWidth: b
					}
				}, e.trendingUnit), o.a.createElement(E, {
					style: {
						maxWidth: b
					}
				}, p))))
			}
		},
		"./src/reddit/layout/row/InlineButton/index.m.less": function(e, t, n) {
			e.exports = {
				inlineButton: "_10K5i7NW6qcm-UoCtpB3aK"
			}
		},
		"./src/reddit/layout/row/InlineButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/layout/row/InlineButton/index.m.less"),
				r = n.n(o);
			t.a = s.a.button("inlineButton", r.a)
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_5gAwSCo7K8G413IoE78Ml",
				right: "_2ghjBMFIsORwdO3oh2Kq6g",
				exapndLeftContainer: "_1zTJo0Ndih4fp__5DjbClN"
			}
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				c = n.n(i);
			t.a = Object(r.a)(e => o.a.createElement("div", {
				className: Object(a.a)(c.a.exapndLeftContainer, e.className)
			}, o.a.createElement("div", {
				className: c.a.left
			}, Array.isArray(e.children) && e.children[0]), o.a.createElement("div", {
				className: c.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
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
			var s, o, r, a;
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return o
				})), n.d(t, "c", (function() {
					return r
				})),
				function(e) {
					e.AwardReceived = "AWARD_RECEIVED", e.CakeDay = "CAKE_DAY", e.ChatMessage = "CHAT_MESSAGE", e.CommentFollow = "COMMENT_FOLLOW", e.CommentReply = "COMMENT_REPLY", e.HFNSubredditInterestingPost = "SUBREDDIT_UPDATES_INTERESTING_POST", e.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", e.PostFollow = "POST_FOLLOW", e.PostReply = "POST_REPLY", e.PrivateMessage = "PRIVATE_MESSAGE", e.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", e.ThreadReplies = "THREAD_REPLIES", e.TopLevelComment = "TOP_LEVEL_COMMENT", e.UpvoteComment = "UPVOTE_COMMENT", e.UpvotePost = "UPVOTE_POST", e.UsernameMention = "USERNAME_MENTION", e.UserNewFollower = "USER_NEW_FOLLOWER"
				}(s || (s = {})),
				function(e) {
					e.Award = "AWARD", e.Bell = "BELL", e.Chat = "CHAT", e.Comment = "COMMENT", e.Heart = "HEART", e.Live = "LIVE", e.NotifyAll = "NOTIFY_ALL", e.Redditor = "REDDITOR", e.Reply = "REPLY", e.SortLive = "SORT_LIVE", e.SortRising = "SORT_RISING", e.SortTop = "SORT_TOP", e.Trophy = "TROPHY", e.Upvote = "UPVOTE"
				}(o || (o = {})),
				function(e) {
					e.CopyrightTakedown = "COPYRIGHT_TAKEDOWN", e.ContentTakedown = " CONTENT_TAKEDOWN", e.Author = "AUTHOR", e.Moderator = "MODERATOR", e.CommunityOps = "COMMUNITY_OPS", e.AntiEvilOps = "ANTI_EVIL_OPS", e.Reddit = "REDDIT", e.Deleted = "DELETED", e.AutomodFiltered = "AUTOMOD_FILTERED"
				}(r || (r = {})),
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
					e.Email = "EMAIL", e.Push = "PUSH"
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
				return m
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx");
			var c = e => r.a.createElement("svg", {
					className: e.className,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 21"
				}, r.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M18.4 14.788c-.662 0-1.2-.537-1.2-1.202l-.012-5.998C17.188 3.625 13.963.4 10 .4 6.037.4 2.811 3.625 2.811 7.586l-.01 6.002c0 .663-.54 1.2-1.2 1.2a1.199 1.199 0 100 2.4h16.8a1.2 1.2 0 100-2.4zm-9.6 3.6H7.6c0 1.324 1.076 2.4 2.4 2.4 1.323 0 2.4-1.076 2.4-2.4H8.8zm-3.6-4.797c0 .422-.087.822-.22 1.197H15.02a3.554 3.554 0 01-.22-1.2l-.013-5.997A4.794 4.794 0 0010 2.8a4.794 4.794 0 00-4.789 4.787l-.01 6.003z"
				})),
				d = n("./src/reddit/pages/NotificationsInbox/Content/index.m.less"),
				l = n.n(d);
			const u = i.a.wrapped(c, "BellOutline", l.a),
				m = ({
					isInboxExposureBannerEnabled: e
				}) => r.a.createElement("div", {
					className: Object(a.a)(l.a.emptyState, {
						[l.a.emptyStateWithBanner]: Boolean(e)
					})
				}, r.a.createElement(u, null), r.a.createElement("h1", {
					className: l.a.emptyTitle
				}, s.fbt._("Be the first to know", null, {
					hk: "2mNJO0"
				})), r.a.createElement("p", {
					className: l.a.emptyDescription
				}, s.fbt._("This is where you get updates on your activity and recommendations", null, {
					hk: "27V2PG"
				})))
		},
		"./src/reddit/pages/NotificationsInbox/Content/index.m.less": function(e, t, n) {
			e.exports = {
				notificationsContainer: "_1B9l9ftY8mkrILj7ISvc9_",
				NotificationUnit: "_1xxYCr84JqFV0qli3rFj6Y",
				notificationUnit: "_1xxYCr84JqFV0qli3rFj6Y",
				emptyState: "_1q1-Ijtc4SLFaVvDcMzus8",
				emptyStateWithBanner: "_3cq_2lLFVJmAq-zXfEMOMD",
				emptyTitle: "qVJaimYNUSSDa5PIOSZoi",
				emptyDescription: "ytrwXC5fcR-1vocS1eSbT",
				BellOutline: "_3xFZexoKoKqw8cjNoivDDZ",
				bellOutline: "_3xFZexoKoKqw8cjNoivDDZ",
				Divider: "_2ACXQJ7zvrPMS_i8J15E_s",
				divider: "_2ACXQJ7zvrPMS_i8J15E_s"
			}
		},
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				o = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				r = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/constants/modals.ts");
			const i = {
				active: !1,
				assetUrls: null
			};
			var c = (e = null, t) => {
				var n;
				switch (t.type) {
					case o.o:
						const {
							avatarMarketingEvent: s
						} = t.payload;
						return s ? function(e) {
							const {
								startsAt: t,
								endsAt: n,
								webAssetUrls: s
							} = e, o = t && new Date(t) <= new Date, r = !!n && new Date(n) < new Date, a = s || null;
							return {
								active: !!o && !r && !!a,
								assetUrls: a
							}
						}(s) : i;
					case r.c:
						return (null === (n = t.payload) || void 0 === n ? void 0 : n.id) === a.a.SNOOVATAR_MODAL ? i : e;
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				marketing: c
			})
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
					chunk: o.q.ACKNOWLEDGEMENTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.ACKNOWLEDGEMENTS
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
					chunk: o.q.APPEAL,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.APPEAL
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
					chunk: o.q.AVATAR,
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
						name: o.Jb.AVATAR
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
					chunk: o.q.COINS,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.COINS
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
					chunk: o.q.COINS_MOBILE,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.COINS_MOBILE
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/collectionCommentsPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts"),
				a = n("./src/reddit/featureFlags/profileCollections.ts");
			const i = Object(s.a)({
					resolved: {},
					chunkName: () => "CollectionCommentsPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage~CommentsPage~ProfileOverview"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/pages/CollectionCommentsPage/index.tsx")),
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
				}),
				c = ["/:routePrefix(r)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(r)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(r)/:subredditName/collection/:collectionId"],
				d = ["/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(user)/:subredditName/collection/:collectionId"],
				l = {
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage~CommentsPage~ProfileOverview"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/actions/pages/collectionCommentsPage.ts")).then(e => e.collectionCommentsPageRequested)),
					chunk: o.q.COLLECTION_COMMENTS_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.COLLECTION_COMMENTS
					},
					prefetches: [o.q.FRONTPAGE, o.q.COMMENTS_PAGE, o.q.SUBREDDIT]
				},
				u = {
					...l,
					path: c
				},
				m = {
					...l,
					path: d,
					routePredicate: a.a
				},
				p = [u, m];
			t.a = p
		},
		"./src/reddit/routes/commentsPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = Object(s.a)({
					resolved: {},
					chunkName: () => "CommentsPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage~CommentsPage~ProfileOverview"), n.e("CommentsPage")]).then(n.bind(null, "./src/reddit/pages/CommentsPage/index.tsx")),
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
				}),
				i = ["/:routePrefix(r)/:subredditName/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/:routePrefix(r)/:subredditName/comments/:partialPostId/:urlSafePostTitle?", "/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/comments/:partialPostId/:urlSafePostTitle?"],
				c = ["/:routePrefix(r)/:subredditName/duplicates/:partialPostId/:urlSafePostTitle?", "/:routePrefix(user)/:subredditName/duplicates/:partialPostId/:urlSafePostTitle?", "/duplicates/:partialPostId/:urlSafePostTitle?"],
				d = ["/:routePrefix(user)/:subredditName/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/:routePrefix(user)/:subredditName/comments/:partialPostId/:urlSafePostTitle?"],
				l = (e, t) => ({
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage~CommentsPage~ProfileOverview"), n.e("CommentsPage")]).then(n.bind(null, "./src/reddit/actions/pages/comments.ts")).then(e => e.commentsPageRequested)),
					chunk: o.q.COMMENTS_PAGE,
					component: a,
					exact: !0,
					meta: {
						name: e
					},
					path: t,
					prefetches: [o.q.FRONTPAGE, o.q.SUBREDDIT]
				}),
				u = [l(o.Jb.COMMENTS, i), l(o.Jb.DUPLICATES, c), l(o.Jb.COMMENTS, d)];
			t.a = u
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("FramedGild~GildModal"), n.e("FramedGild")]).then(n.bind(null, "./src/reddit/pages/FramedGildPage/index.tsx")),
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
					chunk: o.q.FRAMED_GILD,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.FRAMED_GILD
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
					chunk: o.q.FRAMED_MODAL,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.FRAMED_MODAL
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
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object.keys(a.U).map(e => a.U[e]).join("|"),
				d = "/",
				l = `/:sort(${c})?`,
				u = Object(r.a)({
					resolved: {},
					chunkName: () => "Frontpage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Frontpage~ModListing"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/pages/Frontpage/index.tsx")),
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
				m = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Frontpage~ModListing"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageRequested)),
					chunk: a.q.FRONTPAGE,
					component: u,
					exact: !0,
					prefetches: [a.q.COMMENTS_PAGE, a.q.SUBREDDIT]
				},
				p = {
					...m,
					path: d,
					meta: {
						name: a.Jb.INDEX
					}
				},
				b = {
					...m,
					path: l,
					meta: {
						name: a.Jb.LISTING
					}
				},
				h = [p, b];
			t.a = h
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
							s = await Object(r.fetchTopicPage)(n(), "coronavirus", {
								includeIdentity: !0,
								includePosts: !1,
								includeRelationships: !1
							})
						} catch {
							return void e(Object(r.topicFailed)())
						}
						if (!s) return;
						const o = t();
						e(Object(r.topicLoaded)({
							...s,
							key: "tagging",
							meta: o.meta
						}))
					},
					chunk: o.q.GEOTAGGING,
					component: c,
					exact: !0,
					meta: {
						name: o.Jb.GEOTAGGING
					},
					path: i,
					prefetches: []
				};
			t.a = d
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
				d = Object.keys(a.Q).map(e => a.Q[e]).join("|"),
				l = [`/message/:pageName(${d})`, "/message/messages/:messageId([A-Za-z0-9]+)"],
				u = {
					action: i.d,
					chunk: a.q.INBOX_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: a.Jb.INBOX_PAGES
					},
					path: l
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
			var d = {
					action: () => async e => await e(Object(i.c)(a.a)),
					chunk: c.q.EMPTY,
					exact: !0,
					meta: {
						name: c.Jb.AVATAR_PROFILE
					},
					path: ["/user/me/avatar", "/u/me/avatar", "/user/:profileName/avatar"]
				},
				l = n("./src/reddit/routes/coins/index.ts"),
				u = n("./src/reddit/routes/coinsMobile/index.ts"),
				m = n("./src/reddit/routes/commentsPage/index.ts"),
				p = (n("./node_modules/@loadable/component/dist/loadable.esm.js"), n("./src/lib/loadableAction/index.ts"));
			var b = [];
			var h = {
					action: Object(p.a)(() => n.e(2).then(n.bind(null, "./src/reddit/actions/pages/emailVerification.ts")).then(e => e.emailVerificationRequested)),
					chunk: c.q.EMPTY,
					exact: !0,
					meta: {
						name: c.Jb.EMAIL_VERIFICATION
					},
					path: "/verification/:verificationToken"
				},
				g = n("./src/lib/addQueryParams/index.ts");
			var f = {
					action: e => async (t, n, {
						apiContext: s
					}) => {
						const {
							queryParams: o
						} = e;
						await t(Object(i.c)(Object(g.a)("/", o)))
					},
					chunk: c.q.EMPTY,
					exact: !0,
					meta: {
						name: c.Jb.EXPLORE
					},
					path: ["/explore", "/explore/:categoryName"],
					prefetches: [c.q.COMMENTS_PAGE, c.q.FRONTPAGE]
				},
				v = n("./src/reddit/routes/framedGild/index.ts"),
				C = n("./src/reddit/routes/framedModal/index.ts"),
				x = n("./src/reddit/routes/frontpage/index.ts"),
				O = n("./src/reddit/routes/geotagging/index.ts"),
				y = n("./src/reddit/routes/inbox/index.ts"),
				E = n("./src/reddit/routes/meta/index.ts"),
				P = n("./src/reddit/routes/moderationPages/index.ts"),
				j = n("./src/reddit/routes/modListing/index.ts"),
				S = n("./src/reddit/routes/modQueue/index.ts"),
				_ = n("./src/reddit/routes/multireddit/index.ts"),
				k = n("./src/reddit/routes/notificationsInbox/index.ts"),
				w = n("./src/reddit/routes/postCreation/constants.ts");
			const I = ["/original", "/original/:categoryName/:sort([a-z]+)?"].map(e => ({
				path: e,
				action: () => async e => {
					await e(Object(i.c)("/"))
				},
				chunk: c.q.EMPTY,
				exact: !0,
				meta: {
					name: c.Jb.ORIGINAL_CONTENT_REDIRECT
				}
			}));
			var N = [{
					path: "/original/submit",
					action: () => async e => {
						await e(Object(i.c)(w.b))
					},
					chunk: c.q.EMPTY,
					exact: !0,
					meta: {
						name: c.Jb.ORIGINAL_CONTENT_REDIRECT
					}
				}, ...I],
				M = n("./src/reddit/routes/postCreation/index.ts"),
				T = n("./src/reddit/routes/postDraft/index.ts"),
				A = n("./src/reddit/routes/powerups/index.ts");
			var R = {
					action: () => async e => await e(Object(i.c)(A.a)),
					chunk: c.q.EMPTY,
					exact: !0,
					meta: {
						name: c.Jb.POWERUP_REDIRECT
					},
					path: "/powerup"
				},
				L = n("./src/reddit/routes/premium/index.ts"),
				F = n("./src/reddit/routes/profileComments/index.ts"),
				D = n("./src/reddit/endpoints/me/index.ts"),
				U = n("./src/reddit/helpers/pageActionLoginRedirect.ts");
			var B = {
					action: e => async (t, n, {
						apiContext: s
					}) => {
						const {
							rest: o
						} = e.params, {
							queryParams: r
						} = e, a = await Object(D.a)(s());
						if (!(a.ok && a.body && a.body.account)) {
							const e = n();
							return void Object(U.a)(t, e)
						}
						const c = a.body.account.displayText,
							d = o ? `/user/${c}/${(e=>e.endsWith("/")?e:`${e}/`)(o)}` : `/user/${c}/`,
							l = Object(g.a)(d, r);
						await t(Object(i.c)(l))
					},
					chunk: c.q.EMPTY,
					exact: !0,
					meta: {
						name: c.Jb.PROFILE_ME
					},
					path: ["/user/me", "/user/me/:rest(.*)"]
				},
				G = n("./src/reddit/routes/profileModSettings/index.ts"),
				q = n("./src/reddit/routes/profileOverview/index.ts"),
				H = n("./src/reddit/routes/profilePosts/index.ts"),
				W = n("./src/reddit/routes/profilePrivate/index.ts");
			var V = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							queryParams: o
						} = e, r = s ? `/user/${n}/${(e=>e.endsWith("/")?e:`${e}/`)(s)}` : `/user/${n}/`, a = Object(g.a)(r, o);
						await t(Object(i.c)(a))
					},
					chunk: c.q.EMPTY,
					exact: !0,
					meta: {
						name: c.Jb.PROFILE_REDIRECT
					},
					path: ["/r/u_:profileName", "/r/u_:profileName/:rest(.*)", "/u/:profileName", "/u/:profileName/:rest(.*)"]
				},
				K = n("./src/reddit/routes/profileSnoobuilder/index.ts");
			var z = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							queryParams: o
						} = e, r = s ? `/user/${n}/posts/${s}` : `/user/${n}/posts`, a = Object(g.a)(r, o);
						t(Object(i.c)(a))
					},
					chunk: c.q.EMPTY,
					exact: !0,
					meta: {
						name: c.Jb.PROFILE_REDIRECT
					},
					path: ["/user/:profileName/submitted", "/user/:profileName/submitted/:rest(.*)"]
				},
				Q = n("./src/reddit/routes/publicAccessNetwork/index.ts"),
				J = n("./src/reddit/routes/report/index.ts"),
				X = n("./src/reddit/routes/searchResults/index.ts"),
				Z = n("./src/reddit/routes/settings/index.ts");
			var Y = [{
					action: e => async t => {
						const {
							page: n
						} = e.params, s = n && "blocked" === n ? "/settings/privacy" : "/settings/";
						await t(Object(i.c)(s))
					},
					chunk: c.q.EMPTY,
					meta: {
						name: c.Jb.SETTINGS_REDIRECT
					},
					path: "/prefs/:page(deactivate|blocked)?"
				}, {
					action: () => async e => {
						await e(Object(i.c)("/settings/profile"))
					},
					chunk: c.q.EMPTY,
					meta: {
						name: c.Jb.SETTINGS_REDIRECT
					},
					path: ["/user/:username/about/edit", "/user/:username/about/edit/privacy"]
				}],
				$ = n("./src/reddit/routes/subreddit/index.ts"),
				ee = n("./src/reddit/routes/subredditCreation/index.ts"),
				te = n("./src/reddit/routes/subredditLeaderboard/index.ts"),
				ne = n("./src/reddit/routes/subredditWiki/index.ts"),
				se = n("./src/reddit/routes/topic/index.ts");
			const oe = [o.a, r.a, a.b, d, l.a, u.a, B, V, z, ...s.a, ...m.a, h, ...x.a, O.a, L.a, A.b, R, v.a, C.a, M.a, T.a, ...N, f, ...E.a, _.a, S.a, j.c, k.a, y.a, F.a, G.a, q.a, H.a, K.a, W.a, Q.a, ...Z.a, ...Y, X.a, ...ne.a, se.a, $.b, ee.a, te.a, P.a, J.a, ...b];
			t.a = oe
		},
		"./src/reddit/routes/meta/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./node_modules/react-router-redux/es/index.js"),
				a = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts"),
				c = n("./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts"),
				d = n("./src/reddit/actions/users.ts"),
				l = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/featureFlags/index.ts"),
				m = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				p = n("./src/reddit/selectors/user.ts");
			const b = {
					action: i.a,
					chunk: o.q.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
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
						name: o.Jb.META_COMMUNITY_POINTS_LEARN_MORE_PAGE
					},
					path: ["/community-points/", "/vault/", "/web/community-points/"]
				},
				h = {
					action: c.a,
					chunk: o.q.META_MEMBERSHIP_PAYWALL_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "MembershipPaywallPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), n.e("MembershipPaywallPage")]).then(n.bind(null, "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx")),
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
						name: o.Jb.META_MEMBERSHIP_PAYWALL_PAGE
					},
					path: ["/web/special-membership/:subredditName", "/web/membership/:subredditName"]
				},
				g = e => async (t, n) => {
					const s = Object(m.a)(e.queryParams);
					Object(p.K)(n()) || await t(Object(d.r)()), s && setTimeout(async () => {
						await t(Object(r.c)(`/r/${encodeURIComponent(s.subreddit)}/`)), u.d.spBurnLinks(n()) && t(Object(a.h)(l.a.CRYPTO_BURN_POINTS, s))
					}, 0)
				}, f = {
					action: g,
					chunk: o.q.EMPTY,
					exact: !0,
					meta: {
						name: o.Jb.META_VAULT_BURN
					},
					path: ["/vault/burn"]
				};
			t.a = [b, h, f]
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("ModQueuePages~ModerationPages"), n.e("ModQueuePages~reddit-components-ModHub-Content-ModQueue"), n.e("ModQueuePages")]).then(n.bind(null, "./src/reddit/pages/ModQueuePages/index.tsx")),
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
				d = Object.keys(a.pb).map(e => a.pb[e]).join("|"),
				l = `/r/mod/about/:pageName(${d})?`,
				u = {
					action: Object(i.a)(() => n.e("ModQueue").then(n.bind(null, "./src/reddit/actions/pages/modQueue/index.ts")).then(e => e.modQueuePageRequested)),
					chunk: a.q.MODQUEUE_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: a.Jb.MODQUEUE_PAGES
					},
					path: l
				};
			t.a = u
		},
		"./src/reddit/routes/moderationPages/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "c", (function() {
				return v
			}));
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/loadableAction/index.ts");
			const d = Object.keys(i.Zb).map(e => i.Zb[e]).join("|"),
				l = [i.Zb.Awards],
				u = l.join("|"),
				m = e => `/${e}/about/scheduledposts`,
				p = e => `/${e}/about/eventposts`,
				b = e => `/${e}/about/predictions`,
				h = Object(r.a)({
					resolved: {},
					chunkName: () => "ModerationPages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("ModQueuePages~ModerationPages"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/pages/ModHub/index.tsx")),
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
				g = ["/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(revisions|wikibanned|wikicontributors)", "/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(edit|create|settings|revisions)/:wikiPageName+", "/r/:subredditName/about/:pageName(wiki)/:wikiPageName*"],
				f = ["/r/:subredditName/about", `/r/:subredditName/about/:pageName(${d})`, `/user/:profileName/about/:pageName(${u})`, ...g],
				v = e => !!Object(a.h)(e, {
					path: "/r/:subredditName/about"
				}),
				C = {
					action: Object(c.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("ModQueuePages~ModerationPages"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/actions/pages/moderationPages/index.ts")).then(e => e.moderationPageRequested)),
					chunk: i.q.MODERATION_PAGES,
					component: h,
					exact: !0,
					meta: {
						name: i.Jb.MODERATION_PAGES
					},
					path: f,
					prefetches: [i.q.SUBREDDIT]
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/pages/Multireddit/index.tsx")),
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
				l = Object.keys(a.U).map(e => `${d}/:sort(${a.U[e]})?`),
				u = "/user/:username/m/:multiredditName",
				m = Object.keys(a.U).map(e => `${u}/:sort(${a.U[e]})?`),
				p = [d, u, ...l, ...m],
				b = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/pages/multireddit/index.ts")).then(e => e.multiredditRequested)),
					chunk: a.q.MULTIREDDIT,
					component: c,
					exact: !0,
					meta: {
						name: a.Jb.MULTIREDDIT
					},
					path: p,
					prefetches: [a.q.SUBREDDIT]
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
					chunk: o.q.NOTIFICATIONS_INBOX,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.NOTIFICATIONS_INBOX
					},
					path: a,
					prefetches: [o.q.FRONTPAGE]
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("PostDraft")]).then(n.bind(null, "./src/reddit/pages/PostDraft/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("PostDraft")]).then(n.bind(null, "./src/reddit/actions/pages/postDraft.ts")).then(e => e.postDraftRequested)),
					chunk: o.q.POST_DRAFT,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.POST_DRAFT
					},
					path: a,
					prefetches: [o.q.POST_DRAFT]
				};
			t.a = c
		},
		"./src/reddit/routes/powerups/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/powerups.ts");
			const a = "/powerups",
				i = {
					action: r.a,
					chunk: o.q.POWERUPS,
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
						name: o.Jb.POWERUPS
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/pages/ProfileComments/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/actions/pages/profileComments/index.ts")).then(e => e.profileCommentsRequested)),
					chunk: o.q.PROFILE_COMMENTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.PROFILE_COMMENTS
					},
					path: a,
					prefetches: [o.q.COMMENTS_PAGE]
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
					chunk: o.q.PROFILE_MODERATION,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.PROFILE_MODERATION
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~ProfileOverview"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/pages/ProfileOverview/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~ProfileOverview"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/actions/pages/profileOverview/index.ts")).then(e => e.profileOverviewRequested)),
					chunk: o.q.PROFILE_OVERVIEW,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.PROFILE_OVERVIEW
					},
					path: a,
					prefetches: [o.q.COMMENTS_PAGE]
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/pages/ProfilePosts/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePosts.ts")).then(e => e.profilePostsRequested)),
					chunk: o.q.PROFILE_POSTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.PROFILE_POSTS
					},
					path: a,
					prefetches: [o.q.COMMENTS_PAGE]
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
			const d = Object(r.a)({
					resolved: {},
					chunkName: () => "ProfilePrivate",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfilePrivate")]).then(n.bind(null, "./src/reddit/pages/ProfilePrivate/index.tsx")),
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
				l = Object.keys(c.a).map(e => c.a[e]).join("|"),
				u = [`/user/:profileName/:listingType(${l})`, `/user/:profileName/gilded/:listingType(${c.a.GivenGildings})`],
				m = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePrivate/index.ts")).then(e => e.profilePrivateRequested)),
					chunk: a.q.PROFILE_PRIVATE,
					component: d,
					exact: !0,
					meta: {
						name: a.Jb.PROFILE_PRIVATE
					},
					path: u,
					prefetches: [a.q.COMMENTS_PAGE]
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/pages/ProfileSnoobuilder/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/actions/pages/profileSnoobuilder.ts")).then(e => e.profileSnoobuilderRequested)),
					chunk: o.q.PROFILE_SNOOBUILDER,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.PROFILE_SNOOBUILDER
					},
					routePredicate: a.d.snoovatar30
				};
			t.a = d
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
					importAsync: () => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("PublicAccessNetwork")]).then(n.bind(null, "./src/reddit/pages/PublicAccessNetwork/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("PublicAccessNetwork")]).then(n.bind(null, "./src/reddit/actions/publicAccessNetwork/page.ts")).then(e => e.publicAccessNetworkRequested)),
					chunk: o.q.PUBLIC_ACCESS_NETWORK,
					component: a,
					exact: !0,
					meta: {
						name: o.Jb.PUBLIC_ACCESS_NETWORK
					},
					path: ["/rpan/r/:subredditName/:partialPostId?", "/rpan/:partialPostId?"],
					prefetches: [o.q.PUBLIC_ACCESS_NETWORK]
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
					chunk: o.q.REPORT_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.REPORT
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/pages/SearchResults/experimentWrapper.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/SearchResults/experimentWrapper.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/actions/pages/search.ts")).then(e => e.searchResultsRequested)),
					chunk: o.q.SEARCH_RESULTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.SEARCH_RESULTS
					},
					path: a,
					prefetches: [o.q.FRONTPAGE, o.q.SUBREDDIT, o.q.COMMENTS_PAGE]
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
			const c = Object.keys(a.Wb).map(e => a.Wb[e]).join("|"),
				d = [{
					action: Object(i.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModStatsChart~Settings"), n.e("Settings")]).then(n.bind(null, "./src/reddit/actions/pages/settings.ts")).then(e => e.settingsPageRequested)),
					component: Object(r.a)({
						resolved: {},
						chunkName: () => "Settings",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModStatsChart~Settings"), n.e("Settings")]).then(n.bind(null, "./src/reddit/pages/Settings/index.tsx")),
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
					chunk: a.q.SETTINGS,
					exact: !0,
					meta: {
						name: a.Jb.SETTINGS
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
					chunk: a.q.USER_DATA_REQUEST,
					exact: !0,
					meta: {
						name: a.Jb.USER_DATA_REQUEST
					},
					path: "/settings/data-request"
				}];
			t.a = d
		},
		"./src/reddit/routes/subredditCreation/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/subreddits/create",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "SubredditCreation",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("SubredditCreation").then(n.bind(null, "./src/reddit/pages/SubredditCreation/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/SubredditCreation/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => n.e("SubredditCreation").then(n.bind(null, "./src/reddit/actions/pages/subredditCreation.ts")).then(e => e.subredditCreationPageRequested)),
					component: i,
					chunk: o.q.SUBREDDIT_CREATION,
					exact: !0,
					meta: {
						name: o.Jb.SUBREDDIT_CREATION
					},
					path: a
				};
			t.a = c
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
					chunk: o.q.SUBREDDIT_LEADERBOARD,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.SUBREDDIT_LEADERBOARD
					},
					path: a,
					prefetches: [o.q.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/subredditWiki/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/loadableAction/index.ts"),
				i = n("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts");
			const c = Object(s.a)({
					resolved: {},
					chunkName: () => "SubredditWiki",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~SubredditWiki"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("ModerationPages~SubredditWiki"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/pages/SubredditWiki/index.tsx")),
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
				}),
				d = ["/r/:subredditName/wiki/:wikiSubRoute(revisions)", "/r/:subredditName/wiki/:wikiSubRoute(edit|create|revisions)/:wikiPageName+", "/r/:subredditName/wiki/:wikiPageName+", "/wiki/:wikiPageName+"],
				l = ["/wiki/", "/r/:subredditName/wiki/", "/r/:subredditName/w/:wikiPageName*", "/w/:wikiPageName*", "/r/:subredditName/wiki/:wikiSubRoute(settings)/:wikiPageName+"],
				u = e => async t => {
					await t(Object(o.c)(Object(i.a)(e.url, e.params)))
				}, m = {
					action: u,
					chunk: r.q.EMPTY,
					exact: !0,
					meta: {
						name: r.Jb.SUBREDDIT_WIKI
					},
					path: l
				}, p = {
					action: Object(a.a)(() => Promise.all([n.e("vendors~SubredditWiki"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("ModerationPages~SubredditWiki"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/actions/pages/subredditWiki/index.ts")).then(e => e.subredditWikiPageRequested)),
					chunk: r.q.SUBREDDIT_WIKI,
					component: c,
					exact: !0,
					meta: {
						name: r.Jb.SUBREDDIT_WIKI
					},
					path: d,
					prefetches: [r.q.SUBREDDIT]
				};
			t.a = [m, p]
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Topic")]).then(n.bind(null, "./src/reddit/pages/Topic/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Topic")]).then(n.bind(null, "./src/reddit/actions/pages/topic.ts")).then(e => e.topicPageRequested)),
					chunk: o.q.TOPIC,
					component: a,
					exact: !0,
					meta: {
						name: o.Jb.TOPIC
					},
					prefetches: [o.q.COMMENTS_PAGE, o.q.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/selectors/accountManager.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return C
			}));
			var s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				o = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				r = n("./src/config.ts"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/reddit/constants/accountManager.ts"),
				d = n("./src/reddit/constants/experiments.ts"),
				l = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				u = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				m = n("./src/reddit/selectors/experiments/magicLink.ts"),
				p = n("./src/reddit/selectors/meta.ts"),
				b = n("./src/reddit/helpers/chooseVariant/index.ts"),
				h = n("./src/reddit/selectors/experiments/index.ts");
			var g = n("./src/reddit/selectors/responsiveSettings.ts");
			const f = e => e.accountManagerModalData.actionSource,
				v = e => e.accountManagerModalData.redirectUrl,
				C = Object(a.a)((e, t) => t.path, (e, t) => t.uiMode, f, l.a, g.a, u.b, e => Object(b.c)(e, {
					experimentEligibilitySelector: h.e,
					experimentName: d.wd
				}), m.a, p.i, (e, t, n, a, l, u, m, p, b) => {
					let h = `${r.a.accountManagerOrigin}${e}`;
					if (h = Object(i.a)(h, {
							experiment_d2x_2020ify_buttons: "enabled"
						}), m && (h = Object(i.a)(h, {
							[`experiment_${d.wd}`]: m
						})), e === c.c.GoogleOneTap) return Object(i.a)(h, {
						[d.V]: u
					});
					if (a && (h = Object(i.a)(h, {
							[d.wb]: a,
							uiMode: t
						})), p && (h = Object(i.a)(h, {
							[`experiment_${d.Fc}`]: p
						})), l && (h = Object(i.a)(h, {
							mweb_responsive_settings: "treatment"
						})), b) {
						const e = Object(s.isoLocaleToR2Language)(b);
						b !== o.DEFAULT_LOCALE && e && (h = Object(i.a)(h, {
							lang: e
						}))
					}
					return e === c.c.Index || e === c.c.ChangePassword ? h : h = Object(i.a)(h, {
						actionSource: n
					})
				})
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/reducers/features/avatar/index.ts"),
				a = n("./src/reddit/selectors/experiments/econ/index.ts");
			Object(o.a)({
				features: {
					avatar: r.a
				}
			});
			const i = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing)
				},
				c = Object(s.a)(a.c, e => {
					var t, n;
					const s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing;
					return (null == s ? void 0 : s.active) ? s.assetUrls && s.assetUrls[0] : null
				}, (e, t) => e ? t : null)
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
				o = n("./src/reddit/components/InboxTooltip/Component.tsx"),
				r = n("./src/reddit/models/SubredditModeration/index.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = (e, {
					subredditId: t
				}) => e.features.banned.models[t],
				c = (e, {
					subredditId: t,
					username: n
				}) => {
					const s = Object(a.nb)(e, {
						userName: n
					});
					if (!s) return;
					const o = i(e, {
						subredditId: t
					});
					return o ? o[s.id] : void 0
				},
				d = Object(s.a)((e, {
					subredditId: t
				}) => {
					const n = e.features.banned.userOrder[t];
					return n ? n.map(n => e.features.banned.models[t][n]) : o.a
				}),
				l = (e, {
					subredditId: t
				}) => {
					const n = Object(r.d)(t);
					return e.features.banned.api.pending[n]
				},
				u = (e, {
					subredditId: t
				}) => e.features.banned.loadMore[t],
				m = e => e.features.banned.search.api.pending,
				p = e => e.features.banned.search.result,
				b = e => e.features.banned.inContext
		},
		"./src/reddit/selectors/experiments/categories.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const a = e => {
				return Object(r.H)(e) || s.G.Treatment1 === Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.z
				})
			}
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
					experimentEligibilitySelector: r.K,
					experimentName: s.Wb
				});
				return !(!t || Object(s.Wd)(t))
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
				d = n("./src/reddit/selectors/user.ts");
			const l = Object(s.a)(d.R, (e, {
					pageLayer: t
				}) => !t || Object(r.y)(t), c.c, (e, t, n) => !e && t && !n),
				u = Object(s.a)((e, t) => Object(a.c)(e, {
					experimentEligibilitySelector: e => l(e, t),
					experimentName: o.wb,
					throttledVariants: {
						[o.ec.CurrentThrottled]: o.wb
					}
				}), i.a),
				m = e => e === o.ec.CurrentThrottled,
				p = e => e === o.ec.CurrentThrottled || e === o.ec.CurrentUnthrottled || e === o.ec.CurrentUnthrottledCopy || e === o.ec.NewPopUnthrottledCopy,
				b = e => e === o.ec.NewPopUnthrottledCopy,
				h = e => e === o.ec.NewPageUnthrottledCopy || e === o.ec.NewPageUnthrottledCopyFields,
				g = e => e === o.ec.NewPageUnthrottledCopyFields
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => Object(o.c)(e, {
				experimentName: s.Kc,
				experimentEligibilitySelector: o.a,
				expEventOverride: !1
			}) === s.Pc.Enabled
		},
		"./src/reddit/selectors/experiments/postActionBarAnimation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/experiments/index.ts"),
				a = n("./src/reddit/selectors/userPrefs.ts");
			const i = 1e4,
				c = e => {
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.l
					});
					return t === s.q.VoteCountOnly || t === s.q.CommentCountOnly || t === s.q.VoteAndCommentCount
				},
				d = e => !1,
				l = e => !1,
				u = (e, {
					post: t
				}) => m(e, {
					postId: t.id
				}),
				m = (e, {
					postId: t
				}) => {
					const n = e.posts.models[t];
					if (Object(a.c)(e) || !n || n.isSponsored || n.isScoreHidden || n.score >= i) return !1;
					const o = Object(r.d)(e, {
							experimentName: s.l
						}),
						c = null == o ? void 0 : o.variant;
					return c === s.q.VoteCountOnly || c === s.q.VoteAndCommentCount
				},
				p = (e, {
					postId: t
				}) => {
					const n = e.posts.models[t];
					if (Object(a.c)(e) || !n || n.isSponsored || n.numComments >= i) return !1;
					const o = Object(r.d)(e, {
							experimentName: s.l
						}),
						c = null == o ? void 0 : o.variant;
					return c === s.q.CommentCountOnly || c === s.q.VoteAndCommentCount
				},
				b = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.eb
					}) === s.pb.Enabled
				}
		},
		"./src/reddit/selectors/experiments/postCommentFollow.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts");
			const c = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.db,
					experimentEligibilitySelector: a.e
				}), i.a),
				d = Object(s.a)(c, e => e === o.Xc.Enabled),
				l = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.T,
					experimentEligibilitySelector: a.e
				}), i.a),
				u = Object(s.a)(l, e => e === o.J.Enabled)
		},
		"./src/reddit/selectors/experiments/srCreationEntrypoints.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts");
			const c = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.ud,
					experimentEligibilitySelector: a.e
				}), i.a),
				d = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.vd,
					experimentEligibilitySelector: a.e
				}), i.a)
		},
		"./src/reddit/selectors/experiments/trending.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const a = e => Object(r.H)(e) || !(s.Nd.Holdout === Object(o.c)(e, {
				experimentEligibilitySelector: o.a,
				experimentName: s.Kd
			}))
		},
		"./src/reddit/selectors/experiments/uiSimplification.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/featureFlags/utils.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = ["AU", "CA", "GB", "US"],
				i = new Set([s.oc.AllItems, s.oc.TrendingSearch]),
				c = e => {
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: Object(o.d)(Object(o.b)(...a)),
						experimentName: s.pc
					});
					return i.has(t)
				},
				d = e => s.oc.AllItems === Object(r.c)(e, {
					experimentEligibilitySelector: Object(o.d)(Object(o.b)(...a)),
					experimentName: s.pc
				})
		},
		"./src/reddit/selectors/moderatingComments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = (e, {
					commentId: t,
					commentsPageKey: n
				}) => {
					if (!t) return !1;
					if (e.features.comments.collapsed[n] && t in e.features.comments.collapsed[n]) return !!e.features.comments.collapsed[n][t];
					const s = e.features.comments.models[t];
					return !!s && ("computedCollapsed" in s ? !!s.computedCollapsed : s.collapsedBecauseCrowdControl ? !e.modModeEnabled : s.collapsed)
				},
				o = (e, {
					commentId: t
				}) => {
					if (!t) return !1;
					const n = e.features.comments.models[t];
					return !(!n || !n.collapsedBecauseCrowdControl) && e.modModeEnabled
				}
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
				o = n("./src/reddit/models/SubredditModeration/index.ts");
			const r = [],
				a = Object(s.a)((e, {
					subredditId: t
				}) => {
					const n = e.pages.modHub.muted.userOrder[t];
					return n ? n.map(n => e.pages.modHub.muted.models[t][n]) : r
				}),
				i = (e, {
					subredditId: t
				}) => {
					const n = Object(o.d)(t);
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
				return o
			})), n.d(t, "f", (function() {
				return r
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			const s = e => e.user.notificationPrefs.api.getPreferences.loaded,
				o = e => e.user.notificationPrefs.api.getPreferences.pending,
				r = e => e.user.notificationPrefs.api.setPreferences.pending,
				a = e => e.user.notificationPrefs.preferences,
				i = e => e.user.notificationPrefs.isNotificationPromptVisible,
				c = (e, t) => {
					var n, s;
					const o = (e => e.user.notificationPrefs.pushSettingsLayout)(e),
						r = null === (n = null == o ? void 0 : o.rows) || void 0 === n ? void 0 : n.byId;
					return r && (null === (s = r[t]) || void 0 === s ? void 0 : s.isEnabled)
				}
		},
		"./src/reddit/selectors/notificationsInbox.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./node_modules/reselect/es/index.js");
			const o = e => e.notificationsInbox && e.notificationsInbox.api && e.notificationsInbox.api.pending,
				r = e => e.notificationsInbox && e.notificationsInbox.pageInfo,
				a = Object(s.a)(r, e => !(!e || !e.hasNextPage)),
				i = Object(s.a)(r, e => e && e.endCursor),
				c = e => e.notificationsInbox && e.notificationsInbox.notifications,
				d = Object(s.a)(c, e => e.slice(0, 5)),
				l = e => e.notificationsInbox && e.notificationsInbox.earlierDividerIndex,
				u = Object(s.a)(c, l, (e, t) => {
					if (t) {
						const n = parseInt(t);
						return e.slice(0, n)
					}
					return e
				}),
				m = Object(s.a)(c, l, (e, t) => {
					if (t) {
						const n = parseInt(t);
						return e.slice(n)
					}
					return null
				})
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
			const s = (e, {
					subredditId: t
				}) => {
					if (e.features.removalReasons.reasonOrder[t]) {
						return e.features.removalReasons.reasonOrder[t].map(t => e.features.removalReasons.models[t])
					}
					return []
				},
				o = e => e.features.removalReasons.removedItemIds && e.features.removalReasons.removedItemIds.itemIds.length ? e.features.removalReasons.removedItemIds : null,
				r = e => e.features.removalReasons.api.pending
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
				o = n("./src/reddit/components/Settings/modalIds.ts"),
				r = n("./src/reddit/models/Sso/index.ts"),
				a = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/user.ts");
			Object(s.a)(i.rb, e => !(!e || !e.length));
			const c = Object(s.a)(i.z, e => !e),
				d = Object(s.a)(i.rb, e => e && e.find(e => e === r.a.Apple)),
				l = Object(s.a)(i.rb, e => !(!e || !e.includes(r.a.Google))),
				u = Object(s.a)(a.a, e => !!e && [o.b, o.d, o.e, o.f].includes(e))
		},
		"./src/reddit/selectors/trending.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = e => e.trending.models
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			}));
			var s = n("./src/lib/constants/index.ts");
			const o = e => !r(e) && !!e.user.prefs.subscriptionsPinned,
				r = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== s.Jb.MODERATION_PAGES),
				a = e => e.user.prefs.reduceAnimationsFromAwards
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
		"./src/redditGQL/operations/FetchSpecialEvents.json": function(e) {
			e.exports = JSON.parse('{"id":"7537a71b4f14"}')
		},
		"./src/redditGQL/operations/NotificationInboxFeed.json": function(e) {
			e.exports = JSON.parse('{"id":"ebe09e7fbc10"}')
		},
		"./src/redditGQL/operations/NotificationInboxFeedSlimmed.json": function(e) {
			e.exports = JSON.parse('{"id":"916e9e9be5e0"}')
		},
		"./src/redditGQL/operations/NotificationSettingsLayoutByChannel.json": function(e) {
			e.exports = JSON.parse('{"id":"d03522f8a8d4"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		},
		"./src/redditGQL/operations/UpdateInboxActivitySeenState.json": function(e) {
			e.exports = JSON.parse('{"id":"85d656894a08"}')
		},
		"./src/redditGQL/operations/UpdateNotificationPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"129085be0500"}')
		}
	},
	[
		["./src/reddit/index.tsx", "runtime~Reddit", "vendors~Governance~ModListing~Reddit~Subreddit", "vendors~Chat~Governance~Reddit", "vendors~Reddit~Subreddit", "Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e", "Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250", "Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435", "Governance~ModListing~Reddit~Subreddit", "Governance~Reddit~reddit-components-LargePost~reddit-components-MediumPost", "Chat~Governance~Reddit", "Governance~Reddit"]
	]
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit.0479a53f614755f8d4de.js.map