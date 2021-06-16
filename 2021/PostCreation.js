// https://www.redditstatic.com/desktop2x/PostCreation.41f14ccc9370e93f74ff.js
// Retrieved at 6/16/2021, 10:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PostCreation", "ChatMessageInput~MembershipPaywallPage~RichTextEditor", "ContributorRequestButton"], {
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
				return b
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/FocusTrap/index.ts"),
				a = n("./src/reddit/actions/shortcuts/utils.ts"),
				c = n("./src/reddit/components/Portal/index.tsx"),
				d = n("./src/reddit/constants/shortcuts.ts"),
				l = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				u = n("./src/higherOrderComponents/asModal/index.m.less"),
				p = n.n(u);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const h = ({
				className: e,
				isVisible: t,
				...n
			}) => r.a.createElement("div", m({
				className: Object(s.a)(p.a.overlay, e, {
					[p.a.mIsVisible]: t
				})
			}, n));

			function b(e) {
				class t extends o.Component {
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
						}), Object(l.a)(), this.ref && (this.focusTrap = new i.b(this.ref), this.focusTrap.activate())
					}
					componentWillUnmount() {
						this.setState({
							mounted: !1
						}), Object(l.b)(), Object(a.d)(), this.focusTrap && this.focusTrap.deactivate()
					}
					render() {
						const {
							props: t
						} = this, {
							className: n,
							ignoreDefaultFocus: o,
							onOverlayClick: i,
							overlayClassName: a,
							overlayCustomStyles: l,
							withOverlay: u,
							...m
						} = t, b = m;
						return r.a.createElement(c.a, {
							container: document.getElementById(d.b)
						}, r.a.createElement(h, {
							className: a,
							isVisible: u,
							onClick: this.onOverlayClick,
							style: l
						}, r.a.createElement("div", {
							"aria-modal": !0,
							className: Object(s.a)(p.a.modal, n),
							onClick: this.onClick,
							ref: this.getRef,
							role: "dialog",
							tabIndex: -1
						}, r.a.createElement(e, b))))
					}
				}
				return t
			}
		},
		"./src/higherOrderComponents/warnOnChildrenCount/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			n("./src/lib/logs/console.ts");
			t.a = function(e, t) {
				return t => r.a.createElement(e, t)
			}
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/bignumber.js/bignumber.js");

			function r(e, t) {
				const n = new o.BigNumber(e),
					r = new o.BigNumber(t),
					s = new o.BigNumber(n.dividedBy(r)),
					i = new o.BigNumber("100").multipliedBy(s);
				return new o.BigNumber(i).toNumber()
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
		"./src/lib/constants/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			const o = "custom"
		},
		"./src/lib/convertToCamelCase/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				const t = {};
				for (const n in e) {
					t[n.replace(/_\w/g, e => e[1].toUpperCase())] = e[n]
				}
				return t
			}
		},
		"./src/lib/forEachGroup/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const o = e => e;

			function r(e, t, n) {
				const [r, s] = Array.isArray(e) ? [e.length, t => e[t]] : [e.size, t => e.get(t)], {
					keyFn: i = o
				} = t || {};
				let {
					start: a = 0,
					end: c = r
				} = t || {};
				if ((a = a < 0 ? 0 : a) >= (c = c > r ? r : c)) return;
				let d = s(a),
					l = i(d, a),
					u = a;
				for (let o = a + 1; o < c; o++) {
					const e = s(o),
						t = i(e, o);
					if (t !== l) {
						if (!1 === n(d, l, u, o)) return;
						l = t, u = o, d = e
					}
				}
				n(d, l, u, c)
			}
		},
		"./src/lib/forceHttps/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/lib/getShortenedLink.ts": function(e, t, n) {
			"use strict";
			var o = n("./src/reddit/models/Media/index.ts"),
				r = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				s = n.n(r);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: n,
					domainOverride: r
				} = e;
				let i = "";
				if (n) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					i = r || Object(o.D)(e)
				} else i = Object(o.D)(e);
				const a = s.a.parse(i),
					c = a.path || "",
					d = c.length > 7 ? c.substring(0, 7) + "..." : c;
				return (a.hostname ? a.hostname.replace("www.", "") : "") + d
			}
		},
		"./src/lib/hooks/useTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var o = n("./node_modules/icepick/icepick.js"),
				r = n("./node_modules/react/index.js"),
				s = n("./node_modules/react-popper/lib/esm/usePopper.js");
			const i = Object(o.freeze)({
				modifiers: []
			});

			function a(e) {
				let t = "object" == typeof e ? e : i;
				return Array.isArray(t.modifiers) || (t = Object(o.assoc)(t, "modifiers", i.modifiers)), t
			}

			function c(e) {
				const [t, n] = Object(r.useState)(null), [i, c] = Object(r.useState)(null), [d, l] = Object(r.useState)(null), [u, p] = Object(r.useState)(!1), m = Object(r.useCallback)(async () => p(!0), []), h = Object(r.useCallback)(() => p(!1), []), b = Object(r.useCallback)(() => p(!u), [u]), f = Object(r.useMemo)(() => {
					const t = a(e);
					return d ? Object(o.updateIn)(t, ["modifiers"], e => Object(o.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: g,
					styles: E,
					update: C
				} = Object(s.a)(t, i, f);
				return Object(r.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: E.arrow,
						...g.arrow
					},
					hide: h,
					popperProps: {
						ref: c,
						style: E.popper,
						...g.popper
					},
					show: m,
					target: {
						element: t,
						ref: n
					},
					toggle: b,
					visible: u,
					update: C
				}), [l, g, c, h, m, E, t, n, b, u, C])
			}
		},
		"./src/lib/intersectionObserver/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			let o;
			const r = new Map,
				s = new Map;
			"undefined" != typeof window && (n("./node_modules/intersection-observer/intersection-observer.js"), o = new IntersectionObserver(e => {
				e.forEach(e => {
					const t = e.target,
						n = e.intersectionRatio > 0;
					if (n !== !!s.get(t)) {
						s.set(t, n);
						const o = r.get(t);
						if (o) {
							o(e, n && !!s.get(t))
						}
					}
				})
			}, {
				threshold: [.001]
			}));
			const i = (e, t) => {
					try {
						r.set(e, t), o && o.observe(e)
					} catch (n) {
						0
					}
				},
				a = e => {
					try {
						r.delete(e), o && o.unobserve(e)
					} catch (t) {
						0
					}
				}
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return m
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "i", (function() {
				return O
			}));
			var o = n("./node_modules/linkify-it/index.js"),
				r = n.n(o),
				s = n("./node_modules/tlds/index.js"),
				i = n.n(s),
				a = n("./src/lib/linkMatchers/customLinks.ts"),
				c = n("./node_modules/lodash/values.js"),
				d = n.n(c);
			const l = e => d()(a.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				p = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				m = r()().tlds(i.a).set({
					fuzzyIP: !0
				}),
				h = r()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.mention.prefix, a.g.mention.config),
				b = p(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config),
				f = p(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config),
				g = r()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config).add(a.g.mention.prefix, a.g.mention.config),
				E = r()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(a.g.subreddit.prefix, a.g.subredditFullUrl.config).add(a.g.subredditFull.prefix, a.g.subredditFullUrl.config),
				C = m.normalize;
			m.normalize = e => {
				C.call(m, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const y = (e, t) => {
					return (g.match(e) || []).filter(e => {
						const n = l(e.text);
						return !n || n && t
					})
				},
				x = e => {
					return [...f.match(e) || [], ...h.match(e) || []].map(e => !l(e.text) && e.text.replace(a.a, "")).filter(e => e)
				},
				v = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				O = e => {
					const t = m.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const n = t[0];
						return n.lastIndex === e.length ? n : ((e, t) => {
							const n = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(n)) return t.lastIndex += n.length, t.url += n, t
						})(e, n)
					}
				}
		},
		"./src/lib/memoizeByReference/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./node_modules/lodash/every.js"),
				r = n.n(o);

			function s(e) {
				let t = null,
					n = null;
				return (...o) => (null !== t && o.length === t.length && r()(o, (e, n) => e === t[n]) || (t = o, n = e(...o)), n)
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			const s = [r.kc, r.nb, r.z, r.O, r.ib, r.Nb],
				i = {
					[r.Nb]: e => o.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [o.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[r.ib]: e => o.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [o.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[r.O]: e => o.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [o.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[r.z]: e => o.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [o.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[r.nb]: e => o.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [o.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[r.kc]: e => o.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [o.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				a = {
					[r.Nb]: e => o.fbt._("{amount}s", [o.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[r.ib]: e => o.fbt._("{amount}m", [o.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[r.O]: e => o.fbt._("{amount}h", [o.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[r.z]: e => o.fbt._("{amount}d", [o.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[r.nb]: e => o.fbt._("{amount}m", [o.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.kc]: e => o.fbt._("{amount}y", [o.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[r.nb]: e => o.fbt._("{amount}m", [o.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.kc]: e => o.fbt._("{amount}y", [o.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, n = !1) {
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[r.kc]: "",
						[r.nb]: "",
						[r.z]: "",
						[r.O]: "",
						[r.ib]: "",
						[r.Nb]: ""
					};
				let u = d - c;
				if (u <= 0) return o.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const o of s) {
					const e = Math.floor(u / o);
					e && (l[o] = (t ? a : i)[o](e).toString()), u -= e * o
				}
				const p = s.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || n ? p : o.fbt._("{amount of time left} left", [o.fbt._param("amount of time left", p)], {
					hk: "7VjAI"
				}).toString()
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
				return se
			})), n.d(t, "t", (function() {
				return ie
			})), n.d(t, "n", (function() {
				return ce
			})), n.d(t, "s", (function() {
				return de
			})), n.d(t, "l", (function() {
				return le
			})), n.d(t, "a", (function() {
				return pe
			})), n.d(t, "b", (function() {
				return be
			})), n.d(t, "p", (function() {
				return fe
			})), n.d(t, "f", (function() {
				return ge
			})), n.d(t, "g", (function() {
				return Ee
			})), n.d(t, "j", (function() {
				return Ce
			})), n.d(t, "d", (function() {
				return xe
			})), n.d(t, "c", (function() {
				return ke
			})), n.d(t, "i", (function() {
				return Se
			})), n.d(t, "h", (function() {
				return Ie
			})), n.d(t, "k", (function() {
				return Pe
			})), n.d(t, "r", (function() {
				return Re
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/makeDraftKey/index.ts"),
				a = n("./src/reddit/actions/changeUsername.ts"),
				c = n("./src/reddit/actions/login.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/postCreation/editorContent.ts"),
				p = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				m = n("./src/reddit/actions/shortcuts/utils.ts"),
				h = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				f = n("./src/reddit/constants/adEvents.ts"),
				g = n("./src/reddit/constants/localStorage.ts"),
				E = n("./src/redditGQL/operations/CommentToxicity.json"),
				C = n("./src/lib/makeApiRequest/index.ts"),
				y = n("./src/lib/makeGqlRequest/index.ts"),
				x = n("./src/lib/omitHeaders/index.ts"),
				v = n("./src/reddit/constants/headers.ts"),
				O = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				_ = n("./src/reddit/helpers/genericServerError/index.ts"),
				k = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				S = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				j = n("./src/reddit/models/PostCreationForm/index.ts"),
				T = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				w = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const I = (e, t, n, o) => {
					let r, s;
					if (o === j.h.MARKDOWN) r = n.text, s = null;
					else {
						r = null;
						let e = null;
						n.rteState && (e = b.a.toRichTextJSON(n.rteState).document), s = JSON.stringify({
							document: e
						})
					}
					return Object(y.a)(e, {
						...E,
						variables: {
							subredditName: t,
							markdown: r,
							richText: s
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				P = async (e, t, n, o, s) => {
					const i = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (s === j.h.MARKDOWN) i.text = n.text;
					else {
						i.text = null;
						let e = null;
						n.rteState && (e = b.a.toRichTextJSON(n.rteState).document), i.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(C.a)(Object(x.a)(e, [v.a]), {
						method: r.hb.POST,
						endpoint: Object(O.a)(Object(T.a)(Object(w.a)(`${e.apiUrl}/api/comment.json`))),
						data: i
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(S.a)(e)
					} : {
						...e,
						body: {
							comment: Object(k.a)(e.body.json.data.things[0].data, o)
						}
					} : {
						...e,
						body: {
							comment: Object(k.a)(e.body, o)
						}
					} : {
						...e,
						error: e.error || Object(_.a)()
					})
				};
			var R = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var M = n("./src/reddit/endpoints/post/index.tsx"),
				N = n("./src/reddit/endpoints/post/convert.ts"),
				D = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				L = n("./src/reddit/featureFlags/index.ts"),
				A = n("./src/reddit/helpers/dom/index.ts"),
				F = n("./src/reddit/helpers/localStorage/index.ts"),
				B = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				U = n("./src/reddit/models/Comment/index.ts"),
				K = n("./src/reddit/models/PostDraft/index.ts"),
				W = n("./src/reddit/models/RichTextJson/index.ts"),
				G = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				H = n("./src/reddit/models/Toast/index.ts"),
				q = n("./src/reddit/selectors/comments.ts"),
				V = n("./src/reddit/selectors/commentSelector.ts"),
				z = n("./src/reddit/selectors/platform.ts"),
				Q = n("./src/reddit/selectors/posts.ts"),
				Y = n("./src/reddit/selectors/user.ts"),
				J = n("./src/reddit/actions/comment/index.ts"),
				X = n("./src/reddit/actions/comment/constants.ts");
			const Z = Object(s.a)(X.k),
				$ = ({
					hasFocus: e,
					draftKey: t
				}) => async (n, o) => {
					const r = o();
					if (!!r.features.comments.drafts[t])
						if (Object(Y.M)(r) && e) {
							const o = Z({
								hasFocus: e,
								draftKey: t
							});
							n(Object(a.f)(o))
						} else n(Z({
							hasFocus: e,
							draftKey: t
						}))
				}, ee = Object(s.a)(X.H), te = Object(s.a)(X.J), ne = Object(s.a)(X.I), oe = Object(s.a)(X.G), re = (e, t, n, o) => {
					const r = o.ok && o.body,
						s = r && r.comment && r.comment.id;
					B.f(e, n, t, s)
				}, se = "Toxicity_Warning__Modal", ie = (e, t, n, o, r, s) => async (i, a, {
					gqlContext: c
				}) => {
					const l = a(),
						u = Object(z.e)(l);
					let p = "";
					if (u && (p = u.name), L.d.enableToxicityWarning(l)) {
						if (!(await I(c(), p, o, r))) return void i(Object(d.i)(se))
					}
					i(ce(e, t, n, o, r, s))
				}, ae = e => e.rteState ? b.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, ce = (e, t, n, s, i, a, c) => async (u, b, {
					apiContext: g
				}) => {
					u(Object(d.g)(se));
					const E = b(),
						C = E.features.comments.submit.pending[n];
					if (!E.user.account || C) return;
					u(ee({
						draftKey: n,
						draft: s
					}));
					const y = E.user.account.displayText,
						x = s.commentMode;
					let v;
					if (c ? (v = await Object(D.i)(g(), e, s, y), u(Object(p.a)({
							streamId: e,
							level: v.body.automuteLevel
						}))) : v = await P(g(), e, s, y, x), v.ok) {
						let o;
						o = v.body, u(te({
							...o,
							headCommentId: Object(q.w)(E, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const r = Object(Q.F)(b(), {
							postId: e
						});
						u(Object(l.x)(r, f.a.CommentSubmitted))
					} else {
						v.error && v.error.type === r.Gb && B.g(E, ae(s), e);
						const t = v.error && v.error.fields && v.error.fields[0] ? v.error.fields[0].msg : o.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u(oe({
							draftKey: n,
							error: v.error
						})), u(Object(h.f)({
							duration: h.a,
							kind: H.b.Error,
							text: t
						}))
					}
					re(b(), t, i, v), a || Object(m.d)()
				}, de = e => async (t, n, {
					gqlContext: o
				}) => {
					const {
						parentCommentId: r,
						commentsPageKey: s,
						parentCommentDepth: i,
						draftKey: a,
						formData: c,
						editorMode: l
					} = e, u = n(), p = Object(z.e)(u);
					let m = "";
					if (p && (m = p.name), L.d.enableToxicityWarning(u)) {
						if (!(await I(o(), m, c, l))) return void t(Object(d.i)(se))
					}
					t(le({
						commentsPageKey: s,
						draftKey: a,
						parentCommentDepth: i,
						parentCommentId: r,
						formData: c,
						editorMode: l
					}))
				}, le = e => async (t, n, {
					apiContext: o
				}) => {
					const {
						parentCommentId: s,
						commentsPageKey: i,
						parentCommentDepth: a,
						draftKey: c,
						formData: l,
						editorMode: u
					} = e;
					t(Object(d.g)(se));
					const p = n(),
						h = p.features.comments.submit.pending[c];
					if (!p.user.account || h) return;
					t(ee({
						draftKey: c,
						draft: l
					}));
					const b = p.user.account.displayText,
						f = l.commentMode,
						g = await P(o(), s, l, b, f);
					if (g.ok) t(ne({
						...g.body,
						parentCommentId: s,
						commentsPageKey: i,
						draftKey: c,
						depth: a + 1
					}));
					else {
						if (g.error && g.error.type === r.Gb) {
							const e = Object(V.a)(p, {
								commentId: s
							});
							if (!e) return;
							B.g(p, ae(l), e.postId, s)
						}
						t(oe({
							draftKey: c,
							error: g.error
						}))
					}
					re(n(), i, u, g), Object(m.d)()
				}, ue = Object(s.a)(X.q), pe = Object(s.a)(X.p), me = Object(s.a)(X.l), he = (Object(s.a)(X.g), Object(s.a)(X.m)), be = (Object(s.a)(X.t), (e, t, n) => async (r, s, {
					apiContext: i
				}) => {
					const a = e === j.h.RICH_TEXT;
					if (!t || "object" == typeof t && Object(W.G)(t)) r(he({
						editorMode: e,
						draftKey: n,
						content: a ? W.i : ""
					})), r(Object(u.c)(e));
					else {
						r(Object(u.b)(n));
						const s = await Object(N.a)(i(), e, a ? t : JSON.stringify(t));
						if (s.ok) {
							const t = s.body.output;
							r(Object(u.a)(n)), r(he({
								editorMode: e,
								draftKey: n,
								content: t
							})), r(Object(u.c)(e))
						} else r(Object(u.a)(n)), r(Object(h.f)({
							duration: h.a,
							kind: H.b.Error,
							text: o.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), fe = ({
					commentsPageKey: e,
					parentCommentId: t,
					singleOpen: n
				}) => async (o, r) => {
					const s = r(),
						l = Object(i.a)(K.c.replyToComment, t);
					if (!Object(Y.K)(r())) return o(Object(c.j)()), void o(Object(d.k)({
						actionSource: d.a.Reply,
						redirectUrl: Object(q.m)(r(), {
							commentId: t
						})
					}));
					const u = s.features.comments.replyFormOpen[e],
						p = u && u[t];
					if ((p || u && n) && (Object.keys(u).forEach(t => u[t] && o(pe({
							parentCommentId: t,
							commentsPageKey: e
						}))), p)) return;
					let m = "",
						h = null;
					const b = s.user.prefs.commentMode,
						f = Object(A.d)();
					if (f) {
						const e = f.filter(e => !!e && 10 !== e.charCodeAt(0));
						if (b === j.h.MARKDOWN) m = e.map(e => `> ${e}\n`).join("");
						else {
							const t = e.map(e => G.s(e, null)).map(e => G.l([e])),
								n = G.s("", null),
								o = G.l([n]);
							h = {
								document: [G.c(t), o]
							}
						}
					}
					const g = s.features.comments.drafts[l];
					let E;
					if (E = f ? {
							commentMode: b,
							draftType: K.c.replyToComment,
							rtJson: h,
							text: `${m}\n`
						} : g || {
							commentMode: b,
							draftType: K.c.replyToComment,
							rtJson: h,
							text: ""
						}, Object(Y.M)(s)) {
						const n = ue({
							parentCommentId: t,
							commentsPageKey: e,
							draftKey: l,
							formData: E
						});
						o(Object(a.f)(n))
					} else o(ue({
						parentCommentId: t,
						commentsPageKey: e,
						draftKey: l,
						formData: E
					}))
				}, ge = e => async t => {
					t(Object(J.p)(e)), t(xe(e))
				}, Ee = ({
					parentCommentId: e,
					commentsPageKey: t
				}) => async n => {
					n(pe({
						parentCommentId: e,
						commentsPageKey: t
					})), n(fe({
						parentCommentId: e,
						commentsPageKey: t
					})), n(Object(J.p)({
						commentId: e,
						commentsPageKey: t
					}))
				}, Ce = (e, t) => n => n(me({
					draftKey: e,
					formData: t
				})), ye = Object(s.a)(X.s), xe = ({
					commentId: e,
					commentMode: t,
					commentsPageKey: n,
					draftKey: o,
					text: r
				}) => async (s, i) => {
					const a = i();
					a.user.account && (B.c(a), s(ye({
						commentId: e,
						commentsPageKey: n,
						draftKey: o,
						formData: {
							text: r,
							commentMode: t,
							rteState: null,
							draftType: K.c.edit,
							hasFocus: !0
						}
					})))
				}, ve = Object(s.a)(X.C), Oe = Object(s.a)(X.B), _e = Object(s.a)(X.D), ke = Object(s.a)(X.h), Se = ({
					id: e,
					commentsPageKey: t,
					depth: n,
					draftKey: o,
					formData: s
				}) => async (n, i, {
					apiContext: a
				}) => {
					const c = i();
					if (!c.user.account) return;
					n(ve({
						draftKey: o
					})), B.d(c);
					const d = c.user.account.displayText || "",
						l = s.commentMode,
						u = await (async (e, t, n, o, s, i) => {
							const a = {
								api_type: "json",
								return_rtjson: !0,
								thing_id: t
							};
							if (i === j.h.MARKDOWN) a.text = o.text;
							else {
								a.text = null;
								let e = null;
								o.rteState && (e = b.a.toRichTextJSON(o.rteState).document), a.richtext_json = JSON.stringify({
									document: e
								})
							}
							return Object(C.a)(Object(x.a)(e, [v.a]), {
								endpoint: Object(O.a)(Object(w.a)(Object(T.a)(`${e.apiUrl}/api/editusertext`))),
								method: r.hb.POST,
								data: a
							}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
								...e,
								ok: !1,
								error: Object(S.a)(e)
							} : {
								...e,
								body: {
									comment: Object(k.a)(e.body.json.data.things[0].data, s)
								}
							} : {
								...e,
								body: {
									comment: Object(k.a)(e.body, s)
								}
							} : {
								...e,
								error: e.error || Object(_.a)()
							})
						})(a(), e, 0, s, d, l);
					if (u.ok) {
						const r = u.body;
						n(_e({
							commentId: e,
							commentsPageKey: t,
							draftKey: o
						})), n(Object(J.i)({
							[e]: {
								...r.comment
							}
						}))
					} else n(Oe({
						draftKey: o,
						error: u.error
					}))
				}, je = Object(s.a)(X.z), Te = Object(s.a)(X.y), we = Object(s.a)(X.A), Ie = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const i = o();
					n(je({
						id: e
					})), B.a(e, i);
					const a = await ((e, t) => Object(C.a)(Object(x.a)(e, [v.a]), {
						endpoint: Object(O.a)(`${e.apiUrl}/api/del`),
						method: r.hb.POST,
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
						error: e.error || Object(_.a)()
					}))(s(), e);
					a.ok ? n(we({
						id: e,
						postId: t
					})) : n(Te({
						id: e,
						error: a.error
					}))
				}, Pe = e => async (t, n, {
					apiContext: o
				}) => {
					const r = !n().features.comments.models[e].sendReplies;
					t(Object(J.i)({
						[e]: {
							sendReplies: r
						}
					})), (await Object(M.q)(o(), e, r)).ok || t(Object(J.i)({
						[e]: {
							sendReplies: !r
						}
					}))
				}, Re = (e, t) => async (n, r, {
					gqlContext: s
				}) => {
					var i, a, c, d, l, u;
					n(Object(J.c)());
					const p = e => Object(h.f)(Object(h.e)(e, H.b.Error));
					if (((null === (a = null === (i = r().pages) || void 0 === i ? void 0 : i.comments) || void 0 === a ? void 0 : a.followed) || []).length === g.a) n(p(o.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const i = t === U.a.FOLLOWED,
							a = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(J.n)(a)), (await ((e, t) => Object(y.a)(e, {
								...R,
								variables: {
									input: t
								}
							}))(s(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(F.pb)(null !== (l = null === (d = null === (c = r().pages) || void 0 === c ? void 0 : c.comments) || void 0 === d ? void 0 : d.followed) && void 0 !== l ? l : [], null === (u = r().user.account) || void 0 === u ? void 0 : u.id);
							const e = i ? o.fbt._("Followed! You’ll receive updates when there’s new activity", null, {
								hk: "1Dp5UH"
							}) : o.fbt._("Unfollowed, You’ll no longer recieve updates on this comment", null, {
								hk: "2fJsVC"
							});
							n(Object(h.f)({
								kind: H.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(J.n)(a)), n(p(o.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
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
				return M
			})), n.d(t, "h", (function() {
				return N
			})), n.d(t, "l", (function() {
				return F
			})), n.d(t, "q", (function() {
				return B
			})), n.d(t, "j", (function() {
				return U
			})), n.d(t, "g", (function() {
				return K
			})), n.d(t, "f", (function() {
				return W
			})), n.d(t, "o", (function() {
				return q
			})), n.d(t, "p", (function() {
				return V
			})), n.d(t, "d", (function() {
				return z
			})), n.d(t, "a", (function() {
				return Y
			})), n.d(t, "b", (function() {
				return J
			})), n.d(t, "n", (function() {
				return X
			})), n.d(t, "c", (function() {
				return Z
			})), n.d(t, "k", (function() {
				return $
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/telemetry/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/economics/helpers/async.ts"),
				c = n("./src/reddit/actions/economics/powerups/achievements.ts"),
				d = n("./src/reddit/actions/login.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/presence.ts"),
				p = n("./src/reddit/actions/shortcuts/utils.ts"),
				m = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/reddit/actions/vote.ts"),
				b = n("./src/reddit/endpoints/comment/index.tsx"),
				f = n("./src/reddit/helpers/commentList/index.ts"),
				g = n("./src/reddit/helpers/trackers/comment.ts"),
				E = n("./src/reddit/models/Comment/index.ts"),
				C = n("./src/reddit/models/Post/index.ts"),
				y = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/models/Vote/index.ts"),
				v = n("./src/reddit/selectors/comments.ts"),
				O = n("./src/reddit/selectors/commentSelector.ts"),
				_ = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				k = n("./src/reddit/selectors/moderatingComments.ts"),
				S = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/actions/comment/constants.ts");
			const T = {},
				w = Object(i.a)(j.o),
				I = e => async (t, n, {
					apiContext: o
				}) => {
					if (!Object(S.K)(n())) return t(Object(d.j)()), void t(Object(l.k)({
						actionSource: l.a.Save,
						redirectUrl: Object(v.m)(n(), {
							commentId: e
						})
					}));
					const s = n().features.comments.models[e];
					if (!s) return;
					const i = s.isSaved ? b.k : b.g;
					if (t(w({
							[e]: {
								isSaved: !s.isSaved
							}
						})), (await i(o(), e)).ok) {
						const n = s.isSaved ? r.fbt._("Comment unsaved successfully", null, {
								hk: "UGKHZ"
							}) : r.fbt._("Comment saved successfully", null, {
								hk: "1BZqMx"
							}),
							o = r.fbt._("Undo", null, {
								hk: "46OwLP"
							});
						t(Object(m.f)({
							text: n,
							kind: y.b.Undo,
							buttonText: o,
							buttonAction: I(e)
						}))
					} else t(w({
						[e]: {
							isSaved: s.isSaved
						}
					}))
				}, P = e => `viewing-comment-${e}`, R = o.a.telemetry.commentConsumedThreshold, M = e => async (t, n) => {
					const r = n();
					if (!Object(O.a)(r, {
							commentId: e
						}) || Math.random() > o.a.telemetry.commentSampleRate) return;
					g.c({
						state: r,
						commentId: e
					}), s.c.start(P(e));
					const i = setTimeout(() => g.a({
						state: r,
						commentId: e
					}), R);
					T[e] = i
				}, N = (e, t) => async (n, o) => {
					const r = o(),
						i = P(e);
					if (Object(O.a)(r, {
							commentId: e
						}) && s.c.has(i)) {
						const n = s.c.end(i);
						!t && n < R && (clearTimeout(T[e]), delete T[e])
					}
				}, D = Object(i.a)(j.x), L = Object(i.a)(j.w), A = Object(i.a)(j.v), F = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const s = o(),
						i = s.moreComments.models[t],
						d = s.platform.currentPage,
						l = d && d.routeMatch,
						p = l && l.match,
						{
							partialPostId: m
						} = p ? p.params : null;
					if (!m) return;
					const h = Object(C.s)(m);
					n(D({
						moreCommentsId: i.id
					}));
					const g = await Object(b.e)(r(), h, {
						token: i.token
					}, Object(_.a)(s));
					if (g.ok) {
						const t = g.body,
							o = Object(f.a)(t, h, s);
						n(L({
							key: e,
							moreCommentsItem: i,
							shouldCollapse: o,
							...t
						}));
						const r = s.posts.models[h];
						let d;
						r && "subreddit" === r.belongsTo.type && t.comments && (d = r.belongsTo.id, await n(Object(a.a)({
							commentIds: Object.keys(g.body.comments),
							postIds: [r.id],
							skip: ["communityDetails", "subscription"],
							subredditId: d
						})));
						const l = g.body.comments,
							p = g.body.posts;
						await n(Object(u.b)(p, l, d)), await n(Object(c.b)(d, l))
					} else n(A({
						moreCommentsItem: i,
						...g.error
					}))
				}, B = Object(h.a)(f.b, x.a.upvoted), U = Object(h.a)(f.b, x.a.downvoted), K = Object(i.a)(j.j), W = Object(i.a)(j.i), G = Object(i.a)(j.e), H = Object(i.a)(j.f), q = (Object(i.a)(j.c), Object(i.a)(j.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: n
				}) => async (o, r) => {
					const s = r(),
						i = Object(E.h)(e),
						a = Object(v.n)(s, {
							commentLink: i,
							commentsPageKey: t
						}),
						c = Object(k.b)(s, {
							commentId: e,
							commentsPageKey: t
						}),
						d = a.depth;
					o(G({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: c
					})), c || 0 !== d || n(e, !0), Object(p.d)()
				}), V = ({
					commentId: e,
					commentsPageKey: t
				}) => async n => {
					n(H({
						commentId: e,
						commentsPageKey: t
					}))
				}, z = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: n,
					scrollToAndRemeasure: o
				}) => async (r, s) => {
					const i = s(),
						a = Object(f.e)(t, e, n, i),
						c = Object(k.b)(i, {
							commentId: e.id,
							commentsPageKey: t
						});
					r(G({
						commentId: a,
						commentsPageKey: t,
						isCollapsed: c
					})), 0 === n && o(a, !0), Object(p.d)()
				}, Q = Object(i.a)(j.r), Y = e => t => t(Q({
					draftKey: e
				})), J = Object(i.a)(j.a), X = Object(i.a)(j.E), Z = Object(i.a)(j.b), $ = Object(i.a)(j.u)
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			}));
			const o = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				r = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			}));
			const o = "ECONOMICS__ME__ME_DATA_SUCCESS",
				r = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				s = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return m
			}));
			var o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeRequest/index.ts"),
				s = n("./src/config.ts"),
				i = n("./src/reddit/endpoints/governance/requester.ts");
			var a = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/economics/me/constants.ts");
			const d = Object(a.a)(c.a),
				l = Object(a.a)(c.b),
				u = Object(a.a)(c.c),
				p = e => async (t, n, {
					apiContext: o
				}) => {
					const r = e && e.includeMemberships || !1,
						a = e && e.forceFetch || !1,
						c = n();
					if (!c.economics.me.fetched || r && !c.economics.me.data.specialMemberships || a) {
						const e = await
						function(e, t) {
							return Object(i.a)(e, {
								method: "get",
								endpoint: `${s.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(o(), r);
						if (e.ok) {
							const n = e.body;
							r && !n.specialMemberships && (n.specialMemberships = {}), t(d(n))
						}
					}
				}, m = () => async (e, t) => {
					const n = t(),
						s = n.economics.me.data;
					if (!s) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(l());
						const t = `https://${s.pointsDocsBaseUrl}v1.json?web`,
							n = await Object(r.b)({
								endpoint: t,
								method: o.hb.GET
							});
						n.ok && n.body && e(u(n.body))
					}
				}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			const o = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/powerups/achievements.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "c", (function() {
				return S
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/sentry/index.ts"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/SubredditUserAchievements.json"),
				c = n("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			var d = n("./src/reddit/selectors/experiments/econ/index.ts"),
				l = n("./src/lib/initializeClient/installReducer.ts"),
				u = n("./src/reddit/reducers/features/powerups/index.ts"),
				p = n("./src/reddit/actions/gold/powerups.ts"),
				m = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/selectors/gold/powerups/index.ts"),
				f = n("./src/reddit/selectors/gold/powerups/achievements.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/actions/economics/powerups/constants.ts");
			Object(l.a)({
				features: {
					powerups: u.a
				}
			});
			const C = Object(r.a)(E.d),
				y = Object(r.a)(E.f),
				x = Object(r.a)(E.g),
				v = Object(r.a)(E.e),
				O = (e, t) => async (n, o, {
					gqlContext: r
				}) => {
					const c = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (c.length) try {
						const t = await (async (e, t, n) => {
							const o = await Object(i.a)(e, {
								...a,
								variables: {
									subredditId: t,
									redditorIds: n
								}
							});
							if (!o.ok) throw new Error("Unable to fetch user achievements");
							return o.body.data.subredditInfoById
						})(r(), e, c);
						await n(C(t))
					} catch (d) {
						s.c.captureException(d)
					}
				}, _ = (e, t) => async (n, o) => {
					if (!e) return;
					const r = o(),
						s = Object(g.j)(r);
					if (!s || !Object(b.f)(r, {
							subredditId: e
						}) || !Object(d.h)(r)) return;
					const i = !!Object(f.b)(r, {
						subredditId: e,
						userId: s.id
					});
					!t && i || await n(O(e, [s.id]))
				}, k = (e, t) => async (n, o) => {
					if (!e) return;
					await n(Object(p.i)(e, {
						fullData: !0
					}));
					const r = o();
					if (!Object(b.f)(r, {
							subredditId: e
						}) || !t || !Object(d.h)(r)) return;
					const s = new Set;
					Object.values(t).forEach(e => {
						s.add(e.authorId)
					}), await n(O(e, Array.from(s)))
				}, S = (e, t) => async (n, r, {
					gqlContext: a
				}) => {
					const d = r(),
						l = Object(g.j)(d);
					if (!l) return;
					const u = {
						subredditId: e,
						userId: l.id,
						achievementType: t
					};
					n(y(u));
					try {
						await (async (e, t, n) => {
							if (!(await Object(i.a)(e, {
									...c,
									variables: {
										subredditId: t,
										achievementType: n
									}
								})).ok) throw new Error("Unable to update the preferred achievement flair")
						})(a(), u.subredditId, u.achievementType), n(x(u))
					} catch (p) {
						n(v(u)), s.c.captureException(p), n(Object(m.f)({
							duration: m.a,
							kind: h.b.Error,
							text: o.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return x
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "g", (function() {
				return T
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "l", (function() {
				return I
			})), n.d(t, "m", (function() {
				return P
			})), n.d(t, "c", (function() {
				return R
			})), n.d(t, "a", (function() {
				return M
			})), n.d(t, "n", (function() {
				return D
			})), n.d(t, "i", (function() {
				return L
			})), n.d(t, "d", (function() {
				return A
			})), n.d(t, "e", (function() {
				return F
			}));
			var o = n("./node_modules/uuid/index.js"),
				r = n.n(o),
				s = n("./src/lib/initializeClient/installReducer.ts"),
				i = n("./src/reddit/reducers/features/predictions/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/endpoints/economics/predictions.ts"),
				d = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				l = n("./src/reddit/models/Prediction/index.ts"),
				u = n("./src/reddit/selectors/experiments/econ/index.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/selectors/features/predictions/creation/index.ts"),
				f = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				g = n("./src/reddit/actions/economics/predictions/constants.ts");
			Object(s.a)({
				features: {
					predictions: i.a
				}
			});
			const E = Object(a.a)(g.d),
				C = Object(a.a)(g.h),
				y = Object(a.a)(g.g),
				x = (e, t, n, o) => async (r, s, {
					gqlContext: i
				}) => {
					const a = Object(h.K)(s()),
						d = await Object(c.h)(i(), {
							subredditId: e,
							period: t,
							top: n,
							includeCurrentRank: a,
							tournamentId: o
						});
					if (d.error || !d.ok) throw new Error("Failed to fetch subreddit top predictors");
					const {
						subredditInfoById: l
					} = d.body.data;
					if (!l || !l.predictionWinners) throw new Error("Subreddit has no prediction winners");
					const {
						predictionWinners: u
					} = l, p = {
						subredditId: e,
						...u
					};
					return r(E(p)), p
				}, v = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = n(),
						s = Object(p.R)(r, {
							postId: e,
							disallowProfile: !0
						});
					if (!s) throw new Error("Post does not belong to a subreddit");
					const i = await Object(c.f)(o(), s.name, Object(u.g)(r));
					if (i.error || !i.ok) throw new Error("Failed to fetch coin packs");
					const {
						subredditInfoByName: a
					} = i.body.data;
					if (!a || !a.predictionCoinPackages.length) throw new Error("Subreddit has no coin packs");
					return a.predictionCoinPackages
				}, O = ({
					coinPackageId: e,
					optionId: t,
					postId: n,
					price: o
				}) => async (r, s, {
					gqlContext: i
				}) => {
					const a = await Object(c.l)(i(), {
						coinPackageId: e,
						optionId: t,
						postId: n,
						price: o
					});
					if (a.error || !a.ok) throw new Error("Failed to make prediction");
					const {
						votePrediction: d
					} = a.body.data;
					if (!d) throw new Error("Failed to create prediction vote");
					return r(C({
						pollId: n,
						prediction: d.poll,
						price: o
					})), d.poll
				}, _ = ({
					optionId: e,
					postId: t
				}) => async (n, o, {
					gqlContext: r
				}) => {
					const s = await Object(c.j)(r(), {
							optionId: e,
							postId: t
						}),
						{
							resolvePrediction: i
						} = s.body.data;
					if (!(null == i ? void 0 : i.poll)) throw new Error("Failed to resolve prediction");
					return n(y({
						pollId: t,
						prediction: i.poll
					})), i.poll
				}, k = Object(a.a)(g.b), S = Object(a.a)(g.c), j = Object(a.a)(g.f), T = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = n(),
						s = Object(m.E)(r, e);
					if (Object(f.i)(r, {
							subredditId: s
						})) return Object(f.e)(r, {
						subredditId: s
					});
					t(k({
						subredditId: s
					}));
					const i = await Object(c.i)(o(), {
						subredditName: e,
						isLatestOnly: !0,
						isIncludingPredictions: !0,
						isIncludingParticipants: !0
					});
					if (i.error || !i.ok) throw new Error("Failed to fetch tournaments");
					const {
						subredditInfoByName: a
					} = i.body.data;
					if (!a.predictionTournaments) return [];
					const l = a.predictionTournaments.map(e => {
							var t, n;
							const o = null !== (n = null === (t = e.predictionPosts) || void 0 === t ? void 0 : t.map(e => {
								const t = Object(d.e)(e),
									n = t.pollData;
								return {
									...t,
									pollData: n
								}
							})) && void 0 !== n ? n : [];
							return {
								...e,
								predictionPosts: o
							}
						}),
						u = l.reduce((e, t) => (t.predictionPosts.length && t.predictionPosts.forEach(t => {
							e[t.id] = t
						}), e), {});
					return t(S({
						subredditId: s,
						tournaments: l
					})), t(j({
						posts: u,
						meta: r.meta
					})), l
				}, w = Object(a.a)(g.a), I = Object(a.a)(g.i), P = Object(a.a)(g.j), R = ({
					subredditId: e
				}) => async (t, n, {
					gqlContext: o
				}) => {
					const r = n(),
						s = Object(b.b)(r),
						i = Object(u.a)(r);
					if (!s) throw new Error("Failed to create tournament, no prediction drafts attached");
					const a = await Object(c.c)(o(), {
							name: "Predictions Tournament",
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: s,
							currency: i ? l.a.Coins : l.a.Tokens
						}),
						{
							createPredictionTournament: d
						} = a.body.data;
					if (!(null == d ? void 0 : d.tournament)) throw new Error("Failed to resolve prediction");
					const {
						tournament: p
					} = d;
					return t(S({
						subredditId: e,
						tournaments: [p]
					})), p
				}, M = (e, t) => async (n, o, {
					gqlContext: s
				}) => {
					var i;
					const a = Object(b.b)(o());
					if (!a) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const d = await Object(c.b)(s(), {
							tournamentId: e,
							isStartImmediately: !0,
							iKey: `add-dfts-${r.a.v4()}`,
							subredditId: t,
							predictionDrafts: a
						}),
						{
							addPredictionDrafts: l
						} = d.body.data;
					if (null === (i = l.errors) || void 0 === i ? void 0 : i.length) throw new Error(l.errors[0].message);
					if (!(null == l ? void 0 : l.tournament)) throw new Error("Failed to create prediction");
					return l.tournament
				}, N = Object(a.a)(g.k), D = (e, t, n) => async (o, r, {
					gqlContext: s
				}) => {
					const i = await Object(c.k)(s(), {
							tournamentId: e,
							name: n
						}),
						{
							updatePredictionTournament: a
						} = i.body.data;
					if (!a.tournament) throw new Error("Failed to update prediction name");
					return o(N({
						subredditId: t,
						tournament: a.tournament
					})), a.tournament
				}, L = (e, t) => async (n, o, {
					gqlContext: r
				}) => {
					const s = await Object(c.d)(r(), {
							tournamentId: e
						}),
						{
							endPredictionTournament: i
						} = s.body.data;
					if (!i.tournament) throw new Error("Failed to update prediction name");
					return n(N({
						subredditId: t,
						tournament: i.tournament
					})), i.tournament
				}, A = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = await Object(c.e)(o(), {
						postId: e
					});
					if (!r.ok || r.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: s
					} = r.body.data;
					if (!s.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return s.predictionChipPackages
				}, F = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = await Object(c.g)(o(), {
						tournamentId: e
					});
					if (!r.ok || r.error) throw new Error("Failed to fetch token balance");
					const {
						identity: s
					} = r.body.data;
					if (!s.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return s.predictionTokens
				}
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			}));
			const o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "c", (function() {
				return T
			})), n.d(t, "f", (function() {
				return w
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/forOwn.js"),
				r = n.n(o),
				s = n("./src/reddit/actions/governance/errorToast.ts"),
				i = n("./src/reddit/endpoints/economics/emojis.ts"),
				a = n("./src/reddit/endpoints/economics/specialMembership.ts"),
				c = n("./src/reddit/endpoints/economics/subredditPremium.ts"),
				d = n("./src/reddit/endpoints/governance/badges.ts"),
				l = n("./src/config.ts"),
				u = n("./src/reddit/endpoints/governance/requester.ts");

			function p(e, t, n) {
				return Object(u.a)(e, {
					method: "get",
					endpoint: `${l.a.metaUrl}/products/${t}?owners=${n}` + "&types=emotes_pack,giphy"
				})
			}
			var m = n("./src/reddit/models/Badge/index.ts"),
				h = n("./src/reddit/models/Badge/managementPage.ts"),
				b = n("./src/reddit/models/Product/index.ts"),
				f = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				g = n("./src/reddit/selectors/economics.ts"),
				E = n("./src/reddit/selectors/products.ts"),
				C = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				y = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function x(e) {
				return !!e && "removeBadge" === e.type
			}

			function v(e) {
				if (!x(e)) return e
			}
			const O = () => async (e, t, {
				apiContext: n
			}) => {
				if (!t().user.account) return;
				await e(Object(C.b)({
					includeMemberships: !0
				}));
				const o = t().economics.me.data.specialMemberships || {},
					r = Object.keys(o);
				if (r.length) {
					const t = await Object(a.e)(n(), r);
					t.ok && e(Object(y.g)(t.body))
				}
			}, _ = (e, t) => async (n, o, {
				apiContext: r
			}) => {
				const s = o().user.account,
					i = o().economics.subredditPremium[e],
					a = !i || i.status !== f.a.Fetched || t;
				if (s && a) {
					const t = await Object(c.a)(r(), e, s.id);
					n(Object(y.i)(t))
				}
			}, k = e => async (t, n, {
				apiContext: o
			}) => {
				const r = n(),
					i = r.user.account,
					a = Object(g.f)(r, e.subredditId),
					c = Object.keys(a).map(e => a[e]).filter(Boolean);
				if (i && e.badge) {
					let n, r;
					n = e.placement === m.a.First ? a[h.a.Loyalty] : e.placement === m.a.Second ? a[h.a.Achievement] : a[h.a.Cosmetic], t(Object(y.a)({
						...e,
						badge: v(e.badge),
						currentAppliedBadges: c,
						userId: i.id
					})), x(e.badge) && n ? r = await Object(d.a)(o(), e.subredditId, n.id, !1) : x(e.badge) || (r = await Object(d.a)(o(), e.subredditId, e.badge.id)), r && !r.ok && (t(Object(y.a)({
						...e,
						badge: n,
						currentAppliedBadges: c,
						userId: i.id
					})), Object(s.a)(t, r.error))
				}
			}, S = (e, t) => async (n, o, {
				apiContext: r
			}) => {
				await n(_(e, !0));
				const s = o().economics.subredditPremium[e];
				if (s && s.status === f.a.Fetched) {
					const o = s.data.userOwnedBadges.find(e => e.type === t.id);
					o && (n(k({
						badge: o,
						subredditId: e,
						placement: o.placement
					})), n(Object(y.d)(h.c.MyBadges)))
				}
			}, j = e => async (t, n, {
				apiContext: o
			}) => {
				const a = n().user.account,
					c = !n().economics.emotes[e],
					d = !n().economics.gifs[e];
				if (a && (c || d)) {
					const [n, c] = await Promise.all([Object(i.b)(o(), e), p(o(), e, a.id)]);
					if (!c.ok) return void Object(s.a)(t, c.error);
					const d = {
						emotes: [],
						emoteCollections: n.ok ? n.body : {},
						giphy: []
					};
					r()(c.body, e => {
						e.type === b.a.EmotesPack ? d.emotes.push(e) : e.type === b.a.Giphy && d.giphy.push(e)
					}), t(Object(y.e)({
						subredditId: e,
						products: d
					}))
				}
			}, T = (e, t, n) => async (o, r, {
				apiContext: s
			}) => {
				if (await o(_(e, !0)), n && t) {
					const n = r(),
						s = Object(g.f)(n, e),
						i = Object(E.a)(n, t);
					if (!s[Object(h.d)(i.placement)] && i) {
						const t = Object(g.l)(n, {
							subredditId: e,
							badge: i
						});
						t && await o(k({
							badge: t,
							subredditId: e
						}))
					}
					o(Object(y.c)({
						subredditId: e,
						initialView: h.c.MyBadges
					}))
				}
			}, w = e => async (t, n, {
				apiContext: o
			}) => {
				const {
					wallet: r
				} = await Object(a.c)(o(), e);
				t(Object(y.f)({
					wallet: r
				})), await t(_(e.subredditId, !0))
			}
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "h", (function() {
				return h
			}));
			var o = n("./src/lib/loadableAction/index.ts");
			const r = e => () => n.e("CommunityAwards").then(n.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				s = Object(o.a)(r("awardSheetInfoRequested")),
				i = Object(o.a)(r("manageableAwardsRequested")),
				a = Object(o.a)(r("createCommunityAward")),
				c = Object(o.a)(r("createGlobalAward")),
				d = Object(o.a)(r("createModAward")),
				l = Object(o.a)(r("createAwardFailed")),
				u = Object(o.a)(r("createAwardSuccessful")),
				p = Object(o.a)(r("removeCommunityAward")),
				m = Object(o.a)(r("disableAwardinCommunity")),
				h = Object(o.a)(r("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return f
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "f", (function() {
				return _
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/postParentMessage/index.ts"),
				s = n("./src/reddit/helpers/isPost.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				a = n("./src/reddit/selectors/gild.ts"),
				c = n("./src/reddit/helpers/correlationIdTracker.ts"),
				d = n("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/selectors/communityAwards.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/telemetry/index.ts"),
				b = n("./src/reddit/actions/gold/constants.ts");
			const f = Object(o.a)(b.L),
				g = Object(o.a)(b.g),
				E = () => async (e, t) => {
					const o = t();
					e(g()), Object(c.b)(c.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: r
					} = await n.e("givePremiumTrackers").then(n.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(h.a)(r()(o))
				}, C = Object(o.a)(b.K), y = ({
					awardId: e,
					correlationId: t,
					thingId: n
				}) => async (o, r) => {
					const a = r(),
						c = e ? Object(u.a)(a, e) : void 0;
					o(C({
						award: c && c.isEnabled ? c : void 0,
						thingId: n,
						correlationId: t
					})), o(Object(l.h)(i.a.GOLD_GILD_MODAL));
					const h = Object(m.J)(a, {
						thingId: n
					});
					let b = null;
					if (h) b = h.id;
					else if (Object(s.a)(n)) {
						const e = Object(p.F)(a, {
							postId: n
						});
						e && (b = e.belongsTo.id)
					}
					b && Object(d.a)(b, n)
				}, x = Object(o.a)(b.f), v = Object(o.a)(b.J), O = () => async (e, t) => {
					const o = t(),
						s = Object(a.d)(o);
					if (Object(a.g)(o)) {
						const e = "close.gild";
						Object(r.a)({
							type: e
						})
					}
					e(x()), e(Object(l.g)(i.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(h.a)(d(s)(o)), Object(c.b)(c.a.GildingFlow)
				}, _ = () => async () => {
					Object(r.a)({
						type: "login.gild"
					})
				}
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "p", (function() {
				return E
			})), n.d(t, "q", (function() {
				return C
			})), n.d(t, "r", (function() {
				return y
			})), n.d(t, "s", (function() {
				return x
			})), n.d(t, "t", (function() {
				return v
			})), n.d(t, "u", (function() {
				return O
			})), n.d(t, "v", (function() {
				return _
			})), n.d(t, "w", (function() {
				return k
			})), n.d(t, "x", (function() {
				return S
			}));
			const o = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				r = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				s = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				i = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				a = "POLL_VOTE_SUCCESS",
				c = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				d = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				l = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				u = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				p = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				m = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				h = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				b = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				f = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				g = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				E = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				C = "GOVERNANCE__TRANSFER_FAILURE",
				y = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				x = "GOVERNANCE__TRANSFER_PENDING",
				v = "GOVERNANCE__TRANSFER_SUCCESS",
				O = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				_ = "GOVERNANCE__WALLETS_FETCH_PENDING",
				k = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				S = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./src/reddit/actions/toaster.ts"),
				r = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				s = n("./src/reddit/models/Toast/index.ts");

			function i(e, t) {
				e(Object(o.f)({
					duration: 5e3,
					kind: s.b.Error,
					text: Object(r.a)(t)
				}))
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "f", (function() {
				return T
			})), n.d(t, "g", (function() {
				return N
			})), n.d(t, "d", (function() {
				return D
			})), n.d(t, "e", (function() {
				return L
			})), n.d(t, "h", (function() {
				return A
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/config.ts"),
				l = n("./src/lib/makeGqlRequest/index.ts"),
				u = n("./src/reddit/models/Poll/index.ts"),
				p = n("./src/redditGQL/operations/PollVote.json"),
				m = n("./src/reddit/endpoints/governance/requester.ts");
			var h = n("./src/reddit/endpoints/governance/wallet.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/models/Vote/index.ts"),
				g = n("./src/reddit/selectors/crypto/points.ts"),
				E = n("./src/reddit/actions/governance/constants.ts"),
				C = n("./src/reddit/actions/governance/errorToast.ts");
			const y = Object(r.a)(E.b),
				x = Object(r.a)(E.c),
				v = Object(r.a)(E.e),
				O = (Object(r.a)(E.f), Object(r.a)(E.g), Object(r.a)(E.h)),
				_ = Object(r.a)(E.i),
				k = Object(r.a)(E.j),
				S = Object(r.a)(E.k),
				j = Object(r.a)(E.q),
				T = Object(r.a)(E.r),
				w = Object(r.a)(E.s),
				I = Object(r.a)(E.t),
				P = Object(r.a)(E.u),
				R = Object(r.a)(E.v),
				M = Object(r.a)(E.w),
				N = Object(r.a)(E.x),
				D = (e, t) => async (n, o, {
					apiContext: r,
					gqlContext: s
				}) => {
					let i, c = o().polls.models[e];
					if (n(k({
							pollId: e
						})), (i = c.type === u.a.GA ? await ((e, t, n) => Object(l.a)(e, {
								...p,
								variables: {
									input: {
										postId: t,
										optionId: n
									}
								}
							}))(s(), e, t) : await
							function(e, t, n, o) {
								return Object(m.a)(e, {
									method: "put",
									endpoint: `${d.a.metaUrl}/polls/${t}/${n}/votes/me/${o}`
								})
							}(r(), c.subredditId, e, t)).ok) {
						if (c.type === u.a.GA) {
							const {
								options: e
							} = i.body.data.updatePostPollVoteState.poll;
							n(v({
								pollId: c.id,
								optionId: t,
								options: e
							}))
						} else n(S(i.body));
						const r = o();
						if ((c = r.polls.models[e]) && Object(u.d)(c)) {
							const {
								postId: e
							} = c, t = r.posts.models[e];
							t && t.voteState === f.a.notVoted && n(Object(a.bb)(e))
						}
					} else n(_({
						pollId: e,
						error: i.error || i.errors[0].message
					})), Object(C.a)(n, i.error || i.errors[0].messsage)
				}, L = (e, t) => async (n, r, {
					apiContext: a
				}) => {
					var l;
					n(w());
					const u = r().transfers.communityPoints.contentId || void 0,
						p = await
					function(e, t) {
						return Object(m.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: `${d.a.metaUrl}/wallets/me/${t.subredditId}/transfers`,
							method: "post"
						})
					}(a(), {
						...e,
						contentId: u
					});
					p.ok ? (n(I({
						...p.body,
						subredditId: e.subredditId
					})), n(Object(c.f)({
						kind: b.b.SuccessCommunity,
						text: o.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [o.fbt._param("amount", Object(s.a)(e.amount)), o.fbt._param("tokenName", (null === (l = Object(g.b)(r(), e.subredditId)) || void 0 === l ? void 0 : l.name) || ""), o.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(i.f)())) : (n(j({
						error: p.error
					})), Object(C.a)(n, p.error))
				}, A = e => async (t, n, {
					apiContext: o
				}) => {
					t(R());
					const r = await Object(h.a)(o(), e);
					r.ok ? t(M(r.body)) : t(P({
						error: r.error
					}))
				}
		},
		"./src/reddit/actions/polls.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			var o = n("./src/lib/makeActionCreator/index.ts");
			const r = "POLLS__POLL_CREATION_UPDATED",
				s = Object(o.a)(r)
		},
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "t", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "r", (function() {
				return u
			})), n.d(t, "s", (function() {
				return p
			})), n.d(t, "n", (function() {
				return m
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "p", (function() {
				return y
			})), n.d(t, "q", (function() {
				return x
			})), n.d(t, "o", (function() {
				return v
			}));
			const o = "CREATE_COLLECTION_PENDING",
				r = "CREATE_COLLECTION_SUCCESS",
				s = "CREATE_COLLECTION_FAILED",
				i = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				a = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				c = "ADD_POST_TO_COLLECTION_SUCCESS",
				d = "UPDATE_POST_WITH_COLLECTION_ID",
				l = "DELETE_COLLECTION_SUCCESS",
				u = "UPDATE_COLLECTION_PENDING",
				p = "UPDATE_COLLECTION_SUCCESS",
				m = "UPDATE_COLLECTION_FAILED",
				h = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				b = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				f = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				g = "REORDER_COLLECTION_PENDING",
				E = "REORDER_COLLECTION_SUCCESS",
				C = "REORDER_COLLECTION_FAILED",
				y = "UPDATE_COLLECTION_LAYOUT_PENDING",
				x = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				v = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postCollection/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return M
			})), n.d(t, "e", (function() {
				return D
			})), n.d(t, "g", (function() {
				return A
			})), n.d(t, "a", (function() {
				return U
			})), n.d(t, "c", (function() {
				return W
			})), n.d(t, "h", (function() {
				return V
			})), n.d(t, "f", (function() {
				return J
			})), n.d(t, "d", (function() {
				return oe
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react-router-redux/es/index.js"),
				s = n("./src/lib/filterQueryParams/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/postCollection/constants.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/constants/history.ts"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/makeApiRequest/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				m = n("./src/reddit/constants/headers.ts");
			var h = (e, t, n) => Object(u.a)(Object(p.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/add_post_to_collection.json`,
				method: l.hb.POST,
				data: {
					collection_id: t,
					link_fullname: n
				}
			});
			var b = (e, t, n) => Object(u.a)(Object(p.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/create_collection.json`,
				method: l.hb.POST,
				data: {
					title: t,
					sr_fullname: n
				}
			});
			var f = (e, t) => Object(u.a)(Object(p.a)(e, [m.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/delete_collection.json`,
					method: l.hb.POST,
					data: {
						collection_id: t
					}
				}),
				g = n("./src/config.ts");
			var E = (e, t) => Object(u.a)(Object(p.a)(e, [m.a]), {
				endpoint: `${g.a.gatewayUrl}/desktopapi/v1/subreddit_collections/${t}`,
				method: l.hb.GET
			});
			var C = (e, t, n) => Object(u.a)(Object(p.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/remove_post_in_collection.json`,
				method: l.hb.POST,
				data: {
					collection_id: t,
					link_fullname: n
				}
			});
			var y = (e, t, n) => Object(u.a)(Object(p.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_title.json`,
				method: l.hb.POST,
				data: {
					collection_id: t,
					title: n
				}
			});
			var x = (e, t, n) => Object(u.a)(Object(p.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/reorder_collection.json`,
				method: l.hb.POST,
				data: {
					collection_id: t,
					link_ids: n.join(",")
				}
			});
			var v = (e, t, n) => Object(u.a)(Object(p.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_description.json`,
				method: l.hb.POST,
				data: {
					collection_id: t,
					description: n
				}
			});
			var O = (e, t, n) => Object(u.a)(Object(p.a)(e, [m.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/update_collection_display_layout.json`,
					method: l.hb.POST,
					data: {
						collection_id: t,
						display_layout: n
					}
				}),
				_ = n("./src/reddit/helpers/overlay/index.ts"),
				k = n("./src/reddit/helpers/path/index.ts"),
				S = n("./src/reddit/models/Toast/index.ts"),
				j = n("./src/reddit/selectors/postCollection.ts"),
				T = n("./src/reddit/selectors/posts.ts"),
				w = n("./src/reddit/selectors/subreddit.ts");
			const I = Object(i.a)(a.c),
				P = Object(i.a)(a.b),
				R = Object(i.a)(a.d),
				M = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					n(I());
					const s = await b(r(), e, t);
					let i;
					if (s.ok) {
						const e = o().meta,
							t = (e => ({
								author: e.author_name || void 0,
								createdAtUTC: e.created_at_utc,
								description: e.description,
								displayLayout: e.display_layout,
								id: e.collection_id,
								lastUpdateUTC: e.last_update_utc,
								permalink: e.permalink,
								postIds: e.link_ids,
								primaryPostId: e.primary_link_id || void 0,
								subredditId: e.subreddit_id,
								title: e.title
							}))(s.body);
						n(R({
							collection: t,
							meta: e
						})), i = t
					} else {
						const e = s.error;
						n(P(e))
					}
					return i
				}, N = Object(i.a)(a.f), D = e => async (t, n, {
					apiContext: r
				}) => {
					const s = n().postCollection.subredditToIds || {};
					if (Object.keys(s).length > 0) return;
					const i = await E(r(), e);
					i.ok ? t(N(i.body)) : t(Object(c.f)({
						kind: S.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, L = Object(i.a)(a.g), A = (e, t, n) => async (r, s, {
					apiContext: i
				}) => {
					if ((await C(i(), e, t)).ok) {
						const i = s(),
							a = Object(T.F)(i, {
								postId: t
							}),
							d = a && a.title || "",
							l = Object(j.q)(i, {
								collectionId: e
							}),
							u = (l && l.postIds && l.postIds.indexOf(t) || -1) - 1;
						if (r(L({
								collectionId: e,
								postId: t
							})), n && u >= 0) {
							const t = s(),
								n = Object(j.q)(t, {
									collectionId: e
								}),
								o = n && n.postIds && n.postIds[u] || "",
								i = Object(T.F)(t, {
									postId: o
								});
							i && i.permalink && r(Object(_.a)(i.permalink))
						}
						r(Object(c.f)({
							kind: S.b.SuccessMod,
							text: o.fbt._("Following post removed from collection successfully: {postTitle}", [o.fbt._param("postTitle", d)], {
								hk: "8e1lV"
							}),
							buttonText: o.fbt._("UNDO", null, {
								hk: "3KPLib"
							}),
							buttonAction: U(e, t)
						}))
					} else r(Object(c.f)({
						kind: S.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, F = Object(i.a)(a.a), B = Object(i.a)(a.t), U = (e, t) => async (n, r, {
					apiContext: s
				}) => {
					const i = r();
					if ((await h(s(), e, t)).ok) {
						n(F({
							collectionId: e,
							postId: t
						})), n(B({
							collectionId: e,
							postId: t
						}));
						const r = Object(T.F)(i, {
								postId: t
							}),
							s = Object(j.q)(i, {
								collectionId: e
							}),
							a = s && s.title || "";
						n(Object(c.f)({
							kind: S.b.SuccessMod,
							text: o.fbt._("Success! You added a post to the collection: {title}", [o.fbt._param("title", a)], {
								hk: "3KNJWi"
							}),
							buttonText: o.fbt._("VIEW", null, {
								hk: "1SSkgL"
							}),
							buttonAction: Object(_.a)(r.permalink)
						}))
					} else n(Object(c.f)({
						kind: S.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, K = Object(i.a)(a.e), W = (e, t) => async (n, i, {
					apiContext: a
				}) => {
					const d = i();
					if ((await f(a(), e)).ok) {
						const {
							url: i
						} = d.platform.currentPage, a = Object(j.q)(d, {
							collectionId: e
						}), l = a && a.title || "", u = a && a.subredditId, p = u ? Object(w.c)(d, u) : "/";
						n(K({
							collectionId: e,
							collection: a
						})), n(t ? Object(r.c)(Object(s.a)(i, ["collection"])) : Object(r.b)(p)), n(Object(c.f)({
							kind: S.b.SuccessMod,
							text: o.fbt._("Collection deleted successfully: {title}", [o.fbt._param("title", l)], {
								hk: "4tcOKB"
							})
						}))
					} else n(Object(c.f)({
						kind: S.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, G = Object(i.a)(a.r), H = Object(i.a)(a.n), q = Object(i.a)(a.s), V = (e, t) => async (n, r, {
					apiContext: s
				}) => {
					n(G());
					const i = await y(s(), e, t);
					let a = !1;
					if (i.ok) n(q({
						collectionId: e,
						newTitle: t
					})), n(Object(c.f)({
						kind: S.b.SuccessMod,
						text: o.fbt._("Collection title updated successfully", null, {
							hk: "2hKzKl"
						})
					})), a = !0;
					else {
						const e = i.error;
						n(H(e)), n(Object(c.f)({
							kind: S.b.Error,
							text: o.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))
					}
					return a
				}, z = Object(i.a)(a.l), Q = Object(i.a)(a.m), Y = Object(i.a)(a.k), J = e => async (t, n) => {
					const o = n().platform.currentPage.locationState;
					t(!(!o || !o[d.a.IsOverlay]) ? Object(_.a)(e.permalink) : Object(r.b)(Object(k.b)(e.permalink)))
				}, X = Object(i.a)(a.i), Z = Object(i.a)(a.j), $ = Object(i.a)(a.h), ee = Object(i.a)(a.p), te = Object(i.a)(a.o), ne = Object(i.a)(a.q), oe = e => async t => {
					const n = [],
						{
							collectionId: r,
							description: s,
							displayLayout: i,
							postIds: a,
							title: d
						} = e;
					a && n.push(t(((e, t) => async (n, r, {
						apiContext: s
					}) => {
						n(X());
						const i = await x(s(), e, t);
						let a = !1;
						return i.ok ? (n(Z({
							collectionId: e,
							postIds: t
						})), n(Object(c.f)({
							kind: S.b.SuccessMod,
							text: o.fbt._("Collection order updated successfully", null, {
								hk: "4ccHEL"
							})
						})), a = !0) : (n($({
							error: i.error
						})), n(Object(c.f)({
							kind: S.b.Error,
							text: o.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))), a
					})(r, a))), d && n.push(t(V(r, d))), void 0 !== s && n.push(t(((e, t) => async (n, r, {
						apiContext: s
					}) => {
						n(z());
						const i = await v(s(), e, t);
						let a = !1;
						if (i.ok) n(Q({
							collectionId: e,
							newDescription: t
						})), n(Object(c.f)({
							kind: S.b.SuccessMod,
							text: o.fbt._("Collection description updated successfully", null, {
								hk: "1rIDCC"
							})
						})), a = !0;
						else {
							const e = i.error;
							n(Y(e)), n(Object(c.f)({
								kind: S.b.Error,
								text: o.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return a
					})(r, s))), i && n.push(t(((e, t) => async (n, r, {
						apiContext: s
					}) => {
						n(ee());
						const i = await O(s(), e, t);
						let a = !1;
						if (i.ok) n(ne({
							collectionId: e,
							newLayout: t
						})), n(Object(c.f)({
							kind: S.b.SuccessMod,
							text: o.fbt._("Collection layout updated successfully", null, {
								hk: "1Rs19j"
							})
						})), a = !0;
						else {
							const e = i.error;
							n(te(e)), n(Object(c.f)({
								kind: S.b.Error,
								text: o.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return a
					})(r, i)));
					let l = !0;
					return await Promise.all(n).then(e => {
						e.forEach(e => {
							e || (l = !1)
						})
					}), l
				}
		},
		"./src/reddit/actions/postCreation/editorContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "c", (function() {
				return g
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/post/convert.ts"),
				a = n("./src/reddit/helpers/localStorage/index.ts"),
				c = n("./src/reddit/helpers/trackers/postComposer.ts"),
				d = n("./src/reddit/models/PostCreationForm/index.ts"),
				l = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				p = n("./src/reddit/actions/postCreation/constants.ts");
			const m = Object(r.a)(p.C),
				h = Object(r.a)(p.p),
				b = Object(r.a)(p.M),
				f = (e, t, n) => async (r, a, {
					apiContext: f
				}) => {
					c.i(a(), t);
					const E = t === d.h.MARKDOWN,
						C = t === d.h.RICH_TEXT,
						y = p.k;
					if (E && Object(l.G)(n)) return r(b({
						editorKey: e,
						editorMode: d.h.MARKDOWN,
						content: ""
					})), void r(g(t));
					if (C && !n) return r(b({
						editorKey: e,
						editorMode: d.h.RICH_TEXT,
						content: l.i
					})), void r(g(t));
					r(m(y));
					const x = await Object(i.a)(f(), t, E ? JSON.stringify(n) : n);
					x.ok ? (r(h(y)), r(b({
						editorKey: e,
						editorMode: t,
						content: x.body.output
					})), r(g(t))) : (r(h(y)), r(Object(s.f)({
						duration: s.a,
						kind: u.b.Error,
						text: o.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, g = e => async (t, n) => {
					const r = Object(a.m)();
					if (r >= 3) return;
					const i = n().user.prefs.useMarkdown ? d.h.MARKDOWN : d.h.RICH_TEXT;
					if (e === i) return;
					const c = e === d.h.MARKDOWN ? o.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : o.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(s.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: o.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: u.b.SuccessCommunity,
						text: c
					})), Object(a.mb)(r + 1)
				}
		},
		"./src/reddit/actions/postCreation/mediaUpload.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return M
			})), n.d(t, "b", (function() {
				return D
			})), n.d(t, "a", (function() {
				return L
			})), n.d(t, "c", (function() {
				return F
			})), n.d(t, "e", (function() {
				return B
			})), n.d(t, "d", (function() {
				return U
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/uuid/v4.js"),
				s = n.n(r),
				i = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/formatApiError/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/actions/upload.ts"),
				u = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				m = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/reddit/constants/headers.ts");
			var b = n("./src/reddit/helpers/correlationIdTracker.ts"),
				f = n("./src/reddit/helpers/imagePreview/index.ts"),
				g = n("./src/reddit/helpers/media/index.ts"),
				E = n("./src/reddit/models/Upload/index.ts"),
				C = n("./src/reddit/selectors/telemetry.ts"),
				y = n("./src/telemetry/index.ts");
			const x = e => ({
				...C.defaults(e),
				screen: C.screen(e),
				profile: C.profile(e),
				subreddit: C.subreddit(e)
			});
			var v = n("./src/reddit/helpers/trackers/postComposer.ts"),
				O = n("./src/reddit/models/Gold/Powerups/index.ts"),
				_ = n("./src/reddit/models/PostCreationForm/index.ts"),
				k = n("./src/reddit/models/Toast/index.ts"),
				S = n("./src/reddit/selectors/gold/powerups/index.ts"),
				j = n("./src/reddit/selectors/postCreations.ts"),
				T = n("./src/reddit/actions/postCreation/constants.ts"),
				w = n("./src/reddit/actions/postCreation/general.ts");
			const I = Object(c.a)(T.u),
				P = Object(c.a)(T.v),
				R = Object(c.a)(T.t),
				M = e => async (t, n) => {
					t(I());
					const o = e.map(({
						url: e,
						uploadKey: n
					}) => {
						const o = Object(g.a)(Object(g.c)(e), "poster.png");
						return t(A(o, n))
					});
					await Promise.all(o);
					const r = n().uploads,
						s = e.map(({
							uploadKey: e
						}) => r[e]).find(e => e.status !== E.a.SUCCESS);
					t(s ? R(s.error) : P())
				}, N = (e, t) => ({
					error: t ? {
						type: e,
						fields: [{
							field: "",
							msg: t
						}]
					} : {
						type: e
					}
				});
			const D = "RTE",
				L = "GALLERY",
				A = (e, t, n, r) => async (s, a, {
					apiContext: c
				}) => {
					const d = Object(j.h)(a()),
						u = Date.now();
					let _ = null,
						k = !1,
						T = !1,
						w = !1;
					const I = e => {
						if (!w && n && k) {
							w = !0;
							const o = a(),
								r = Date.now() - u,
								s = Object(b.c)(b.a.PostComposer);
							T ? (async ({
								state: e,
								uploadKey: t,
								assetId: n,
								isCanceled: o,
								fileSource: r,
								uploadDuration: s,
								correlationId: i
							}) => {
								const a = e.uploads[t],
									c = o || a.status === E.a.CANCELED,
									{
										file: d,
										url: l,
										metadata: u,
										error: p
									} = a,
									m = u.mimetype || d.type,
									h = m.startsWith("video/"),
									b = a.status === E.a.SUCCESS;
								let f = "";
								p ? f = JSON.stringify(p) : c && (f = "canceled");
								const g = {
									width: u.width,
									height: u.height,
									duration: u.videoDuration && Math.round(1e3 * u.videoDuration)
								};
								Object(y.a)({
									source: h ? "videoupload" : "imageupload",
									action: "upload",
									correlationId: i,
									noun: h ? "video" : "image",
									...x(e),
									actionInfo: {
										...C.actionInfo(e),
										success: b,
										...f ? {
											reason: f
										} : {}
									},
									media: {
										mimetype: m,
										uploadDuration: s,
										source: r,
										fileName: d.name,
										size: d.size,
										type: h ? "video" : "image",
										...n ? {
											id: n
										} : {},
										...l ? {
											url: l
										} : {},
										...g
									}
								})
							})({
								state: o,
								uploadKey: t,
								assetId: _,
								isCanceled: e,
								fileSource: n,
								uploadDuration: r,
								correlationId: s
							}) : v.t(o, t)
						}
					};
					return await s(Object(l.l)(e, t, async u => {
						k = !0, Object(l.k)(u.id, () => {
							I(!0)
						});
						const {
							error: b,
							metadata: E
						} = await async function(e, t, n) {
							const r = n && n.allowedPostTypes,
								s = n && n.name,
								a = await Object(g.g)(t) || t.type,
								c = Object(g.b)(t) || void 0;
							if (!c) return N("UNSUPPORTED_BROWSER");
							const d = {
								localUrl: c,
								mimetype: a
							};
							if (!a || !Object(g.i)(a)) return {
								error: {
									type: i.R
								}
							};
							if (a.startsWith("image/")) {
								if (r && !r.images) {
									const e = o.fbt._("Images are not allowed in r/{subredditName}", [o.fbt._param("subredditName", s)], {
										hk: "3C2E7Q"
									});
									return N(i.R, e)
								}
								if ("image/gif" === a) {
									if (t.size > i.X) return N(i.J)
								} else if (t.size > i.Z) return N(i.P);
								const e = await Object(f.a)(c);
								d.width = e.width, d.height = e.height
							} else if (a.startsWith("video/")) {
								const a = !(null == n || !n.id) && Object(S.o)(e, {
										subredditId: n.id,
										benefit: O.a.HdVideo
									}),
									u = a ? 2 * i.db : i.db;
								if (t.size > u) return N(i.hc);
								let p;
								try {
									p = await Object(g.h)(c, !0)
								} catch (l) {
									return N(i.R)
								}
								if (r) {
									const {
										videos: e,
										images: t
									} = r;
									if (t && !e && p.duration > i.eb) {
										const e = o.fbt._("Sorry, r/{subredditName} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF.", [o.fbt._param("subredditName", s)], {
											hk: "46ULiz"
										});
										return N(i.R, e)
									}
									if (!t && !e) {
										const e = o.fbt._("Videos are not allowed in r/{subredditName}", [o.fbt._param("subredditName", s)], {
											hk: "4uTUZb"
										});
										return N(i.R, e)
									}
								}
								const m = a ? 2 * i.cb : i.cb;
								if (p.duration > m) {
									const e = o.fbt._("Video is too long. Maximum video length is {duration} minutes.", [o.fbt._param("duration", (m / 60).toString())], {
										hk: "20nB6Q"
									});
									return N(i.R, e)
								}
								if (p.duration < i.kb) {
									const e = o.fbt._("Video is too short. Minimum video length is {duration} seconds.", [o.fbt._param("duration", i.kb.toString())], {
										hk: "49PSW8"
									});
									return N(i.R, e)
								}
								if (p.height < i.lb || p.width < i.mb) {
									const e = o.fbt._("Videos must be {min_video_width}x{min_video_height} pixels or larger.", [o.fbt._param("min_video_width", i.mb.toString()), o.fbt._param("min_video_height", i.lb.toString())], {
										hk: "2HSUGl"
									});
									return N(i.R, e)
								}
								if (t.size / p.duration < i.jb) {
									const e = o.fbt._("Videos must have a bitrate of {min_bitrate}KB/s or larger.", [o.fbt._param("min_bitrate", (i.jb / i.S).toString())], {
										hk: "1ehgDE"
									});
									return N(i.R, e)
								}
								d.height = p.height, d.width = p.width, d.videoDuration = p.duration, d.videoFirstFrameUrl = p.firstFrame.dataUrl
							}
							return {
								metadata: d
							}
						}(a(), e, d);
						if (b || !E) return {
							error: b
						};
						s(Object(l.m)({
							key: t,
							metadata: {
								fileSource: n,
								...E
							}
						})), T = !0, r && r();
						const C = e.name,
							y = await (async (e, t, n) => Object(p.a)(Object(m.a)(e, [h.a]), {
								endpoint: `${e.apiUrl}/api/media/asset.json`,
								method: i.hb.POST,
								data: {
									filepath: t,
									mimetype: n
								}
							}))(c(), C, E.mimetype);
						return y.ok ? (_ = y.body.asset.asset_id, {
							uploadLease: y.body.args
						}) : {
							error: y.error || void 0
						}
					}, !0)), I(!1), a().uploads[t] || null
				}, F = e => async (t, n, {
					apiContext: o
				}) => {
					const r = n().uploads[e];
					r && !Object(E.c)(r) && await t(A(r.file, r.key, r.metadata.fileSource, void 0))
				}, B = (e, t, n) => async (r, i) => {
					const c = e.map((e, o) => new Promise(async o => {
							const i = Object(E.d)(n, s()().slice(-6));
							await r(A(e, i, t, () => o({
								uploadKey: i,
								isValid: !0
							}))), o({
								uploadKey: i,
								isValid: !1
							})
						})),
						l = await Promise.all(c),
						u = l.map(e => e.uploadKey);
					return r(((e, t = 3) => async (n, r) => {
						const {
							uploads: s
						} = r(), i = e.map(e => s[e]).filter(e => e.status === E.a.FAILED && !e.metadata.mimetype).map(e => e.error), c = i.length > t ? t - 1 : i.length, l = i.length - c;
						i.slice(0, c).forEach(e => n(Object(d.f)({
							duration: d.a,
							kind: k.b.Error,
							text: Object(a.a)(e)
						}))), l > 0 && n(Object(d.f)({
							duration: d.a,
							kind: k.b.Error,
							text: o.fbt._({
								"*": "Couldn't add {number} more files",
								_1: "Couldn't add 1 more file"
							}, [o.fbt._plural(l, "number")], {
								hk: "2fQwvl"
							})
						}))
					})(u)), l.filter(e => e.isValid).map(e => e.uploadKey)
				}, U = (e, t) => async (n, r) => {
					const s = r(),
						i = Object(j.U)(s),
						{
							items: a
						} = i,
						c = !a.length && 1 === e.length,
						p = Object(j.L)(s) && !c;
					let m = !1,
						h = e;
					if (p) {
						if (Object(_.v)(i)) return void n(Object(d.f)({
							kind: k.b.Error,
							text: o.fbt._("Please remove the existing video first. Videos aren't supported within galleries yet.", null, {
								hk: "3lGxp4"
							})
						}));
						h.some(e => Object(g.l)(e.type)) && n(Object(d.f)({
							kind: k.b.Error,
							text: o.fbt._("Videos aren’t supported within galleries...yet", null, {
								hk: "9Cl20"
							})
						})), h = h.filter(e => Object(g.k)(e.type));
						const e = Math.max(0, u.b - a.length);
						h.length > e && (n(Object(d.f)({
							kind: k.b.Error,
							text: o.fbt._("You have hit the limit of {images_limit} images", [o.fbt._param("images_limit", `${u.b}`)], {
								hk: "6M4kX"
							})
						})), h = h.slice(0, e))
					} else h = h.slice(0, 1), m = !0, n(Object(l.j)(L, !0));
					const b = await n(B(h, t, L));
					if (!b.length) return;
					const f = b.map(e => ({
							uploadKey: e,
							caption: "",
							url: ""
						})),
						E = 0 === a.length;
					n(Object(w.d)({
						...i,
						items: m ? f : [...a, ...f],
						selectedKey: E ? b[0] : b[b.length - 1]
					}))
				}
		},
		"./src/reddit/actions/presence.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return p
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var d = n("./src/reddit/selectors/experiments/presenceIndicator.ts");
			const l = "PRESENCE__PRESENTUSERS_LOADED",
				u = Object(o.a)(l),
				p = (e, t, n) => async (o, l, {
					apiContext: p
				}) => {
					const m = l();
					if (!Object(d.a)(m)) return;
					const h = new Set;
					e && Object.values(e).map(e => {
						e.authorId && h.add(e.authorId)
					}), t && Object.values(t).map(e => {
						e.authorId && h.add(e.authorId)
					});
					const b = await (async (e, t, n) => Object(s.a)(Object(i.a)(e, [a.a]), {
						endpoint: Object(c.a)(`${e.apiUrl}/api/presence`),
						method: r.hb.POST,
						data: {
							user_fullnames: t.join(","),
							subreddit_fullname: n || ""
						}
					}).then(e => {
						if (!e.ok) return {
							presentUsers: []
						};
						const n = e.body.present_user_fullnames || [],
							o = new Set(n),
							r = {};
						return t.forEach(e => {
							r[e] = o.has(e)
						}), {
							presentUsers: r
						}
					}))(p(), Array.from(h), n);
					o(u(b))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				s = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(o.a)(s.r),
				a = Object(o.a)(s.F),
				c = e => async (t, n, {
					apiContext: o
				}) => {
					const s = await Object(r.a)(o(), e);
					s && s.ok ? t(i({
						streamId: e,
						level: s.body.data.auto_mute_status.level
					})) : t(a(e))
				}
		},
		"./src/reddit/actions/scheduledPosts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return r
			})), n.d(t, "f", (function() {
				return s
			})), n.d(t, "m", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "l", (function() {
				return l
			})), n.d(t, "k", (function() {
				return u
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "o", (function() {
				return m
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "n", (function() {
				return g
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "r", (function() {
				return C
			})), n.d(t, "u", (function() {
				return y
			})), n.d(t, "p", (function() {
				return x
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "v", (function() {
				return O
			})), n.d(t, "s", (function() {
				return _
			})), n.d(t, "x", (function() {
				return k
			})), n.d(t, "w", (function() {
				return S
			})), n.d(t, "t", (function() {
				return j
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = "SCHEDULED_POSTS_REQUESTED",
				s = "SCHEDULED_POSTS_LOADED",
				i = "STANDALONE_SCHEDULED_POSTS_LOADED",
				a = "RECURRING_SCHEDULED_POSTS_LOADED",
				c = "SCHEDULED_POSTS_FAILED",
				d = "SCHEDULED_POST_CREATION_SUCCEEDED",
				l = "SCHEDULED_POST_SUBMIT_NOW_SUCCESS",
				u = "SCHEDULED_POST_MUTATE_REQUESTED",
				p = "SCHEDULED_POST_MUTATE_FAILED",
				m = "STANDALONE_POST_MUTATE_SUCCESS",
				h = "RECURRING_POST_MUTATE_SUCCESS",
				b = "RECURRING_POST__EDIT_MODAL_LOAD",
				f = "RECURRING_POST__EDIT_LOAD",
				g = "STANDALONE_POST__EDIT_LOAD",
				E = "SCHEDULED_POST__DELETE_SUCCESS",
				C = () => o.fbt._("Failed to load scheduled posts", null, {
					hk: "1fhkq4"
				}),
				y = () => o.fbt._("Whoops! Invalid scheduled post", null, {
					hk: "35jBb6"
				}),
				x = () => o.fbt._("Unable to delete scheduled post", null, {
					hk: "23nWms"
				}),
				v = () => o.fbt._("Successfully deleted scheduled post", null, {
					hk: "1Lk7r2"
				}),
				O = () => o.fbt._("Unable to submit scheduled post", null, {
					hk: "vCW43"
				}),
				_ = () => o.fbt._("Retry", null, {
					hk: "4bCZ7M"
				}),
				k = () => o.fbt._("Successfully submitted scheduled post!", null, {
					hk: "ONo6q"
				}),
				S = () => o.fbt._("Successfully edited scheduled post!", null, {
					hk: "HfGcT"
				}),
				j = () => o.fbt._("Failed to update scheduled post", null, {
					hk: "2zBuRu"
				})
		},
		"./src/reddit/actions/scheduledPosts/edit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return C
			})), n.d(t, "a", (function() {
				return x
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react-router-redux/es/index.js"),
				s = n("./src/telemetry/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/scheduledPosts/index.ts"),
				c = n("./src/reddit/actions/scheduledPosts/constants.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/endpoints/scheduledPosts/update.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				p = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				m = n("./src/reddit/models/ScheduledPost/index.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/routes/postCreation/index.ts"),
				f = n("./src/reddit/selectors/scheduledPosts/index.ts");
			const g = Object(i.a)(c.n),
				E = Object(i.a)(c.b),
				C = (e, t) => async (n, o, s) => {
					const i = Object(f.a)(o(), {
						scheduledPostId: t,
						subredditId: e
					});
					i && (await n(Object(r.b)(Object(b.c)(i.subreddit.name, i.collectionId))), n((Object(m.p)(i) ? E : g)(i)))
				}, y = (e, t) => {
					Object(m.p)(t) ? e(Object(a.d)({
						scheduledPost: t
					})) : e(Object(a.h)({
						scheduledPost: t
					}))
				}, x = (e, t, n) => async (r, i, {
					gqlContext: b
				}) => {
					r(Object(a.g)());
					const g = Object(f.a)(i(), {
						subredditId: e,
						scheduledPostId: t
					});
					if (g && Object(m.p)(g) && Object(s.a)(Object(p.u)()(i(), g)), !g) return void r(Object(a.f)({
						message: o.fbt._("Scheduled post not found", null, {
							hk: "2zjM55"
						})
					}));
					if (!Object.keys(n).length) return void y(r, g);
					const E = await Object(l.a)(b(), {
							...n,
							id: t
						}),
						C = E.body;
					if (!(E.ok && C && C.data && C.data.updateScheduledPost && C.data.updateScheduledPost.ok && C.data.updateScheduledPost.scheduledPost)) return r(Object(a.f)({
						message: E.error && E.error.fields && E.error.fields.length && E.error.fields[0].msg || o.fbt._("Unknown error", null, {
							hk: "fXs5s"
						})
					})), void r(Object(d.f)(Object(d.e)(c.t(), h.b.Error, c.s(), x(e, t, n))));
					r(Object(d.f)(Object(d.e)(c.w(), h.b.SuccessCommunity))), y(r, Object(u.d)(C.data.updateScheduledPost.scheduledPost))
				}
		},
		"./src/reddit/actions/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "a", (function() {
				return T
			})), n.d(t, "b", (function() {
				return I
			}));
			var o = n("./src/lib/assertNever.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/scheduledPosts/constants.ts"),
				i = n("./src/reddit/actions/scheduledPosts/edit.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/scheduledPosts/index.ts"),
				d = n("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				l = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				u = n("./src/reddit/models/ScheduledPost/index.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/scheduledPosts/index.ts"),
				h = n("./src/telemetry/index.ts");
			const b = Object(r.a)(s.g),
				f = Object(r.a)(s.k),
				g = Object(r.a)(s.j),
				E = Object(r.a)(s.o),
				C = Object(r.a)(s.d),
				y = Object(r.a)(s.f),
				x = Object(r.a)(s.m),
				v = Object(r.a)(s.a),
				O = Object(r.a)(s.c),
				_ = Object(r.a)(s.e),
				k = Object(r.a)(s.h),
				S = (e, t) => {
					e(_()), e(Object(a.f)(Object(a.e)(s.r(), p.b.Error, s.s(), j(t))))
				},
				j = ({
					subredditId: e,
					includeStandalone: t = {
						standaloneFirst: 25
					},
					includeRecurring: n = {
						recurringFirst: 1e4
					},
					...o
				}) => async (r, s, {
					gqlContext: i
				}) => {
					if (Object(m.h)(s(), {
							subredditId: e
						})) return;
					r(b());
					const a = {
							subredditId: e,
							includeRecurring: n,
							includeStandalone: t,
							...o
						},
						l = await Object(c.b)(i(), a);
					Object(c.f)(l, a) ? w(r, Object(d.e)(l.body.data), a) : S(r, a)
				}, T = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = n();
					if (!Object(m.h)(r, {
							subredditId: e
						})) return t(j({
						subredditId: e
					}));
					if (!Object(m.g)(r, {
							subredditId: e,
							type: u.f.standalonePosts
						})) return;
					const s = Object(m.c)(r, {
						subredditId: e,
						type: u.f.standalonePosts
					});
					if (!s) return;
					t(b());
					const i = {
							subredditId: e,
							includeStandalone: {
								standaloneFirst: 25,
								standaloneAfter: s
							}
						},
						a = await Object(c.b)(o(), i);
					a.ok ? w(t, Object(d.e)(a.body.data), i) : t(_())
				}, w = (e, t, n) => {
					Object(d.b)(t) ? e(y(t)) : Object(d.a)(t) ? e(v(t)) : Object(d.c)(t) ? e(x(t)) : S(e, n)
				}, I = (e, t) => async (n, r, s) => {
					const a = {},
						c = r();
					switch (e) {
						case "isModDistinguished":
						case "isNsfw":
						case "isOriginalContent":
						case "isContestMode":
						case "isPostAsMetaMod":
						case "isSpoiler":
							a[e] = !t[e];
							break;
						case "isSticky":
							const n = !!t.sticky && "NONE" !== t.sticky;
							a.sticky = n ? "NONE" : "SECOND";
							break;
						default:
							return Object(o.a)(e)
					}
					Object(h.a)(Object(l.t)(e, a[e], Object(u.p)(t))(c)), n(Object(i.a)(t.subreddit.id, t.id, a))
				}
		},
		"./src/reddit/actions/shortcuts/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			}));
			var o = n("./src/reddit/constants/shortcuts.ts"),
				r = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				s = n("./src/reddit/helpers/routeKey/index.ts");
			const i = e => {
					const t = e.platform.currentPage;
					if (!t || !t.routeMatch) return;
					const n = t.routeMatch,
						o = Object(r.a)(e);
					return Object(s.b)(n, e, o)
				},
				a = e => {
					const t = document.getElementById(e);
					t && t.focus()
				},
				c = e => {
					const t = document.getElementById(e),
						n = window.scrollX,
						o = window.scrollY;
					t && (t.focus(), window.scrollTo(n, o))
				},
				d = () => {
					c(o.b)
				}
		},
		"./src/reddit/actions/subredditAutocomplete/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const o = "SUBREDDIT_AUTOCOMPLETE__PENDING",
				r = "SUBREDDIT_AUTOCOMPLETE__LOADED",
				s = "SUBREDDIT_AUTOCOMPLETE__FAILED"
		},
		"./src/reddit/actions/subredditAutocomplete/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/redditGQL/operations/SubredditTypeaheadSearch.json"),
				i = n("./src/reddit/helpers/graphql/normalizeAllowedPostTypesFromGql/index.ts"),
				a = n("./src/reddit/helpers/name/index.ts"),
				c = n("./src/reddit/selectors/subredditAutocomplete.ts"),
				d = n("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const l = Object(o.a)(d.c),
				u = Object(o.a)(d.b),
				p = Object(o.a)(d.a),
				m = (e, t = !1) => async (n, o, {
					gqlContext: d
				}) => {
					const m = Object(a.g)(e);
					if (!m) return;
					const h = o(),
						b = h.subredditAutocomplete;
					if (b.api.pending[m] || b.models[m]) return;
					if (Object(c.b)(h, {
							substring: m
						})) return;
					n(l({
						key: m
					}));
					const f = await ((e, t) => Object(r.a)(e, {
						...s,
						variables: t
					}))(d(), {
						query: m,
						includeNsfw: t
					});
					if (f.ok) {
						const e = f.body.data.subredditTypeahead.subreddits.edges.map(e => (({
							allowedPostTypes: e,
							id: t,
							isCrosspostDestination: n,
							isNsfw: o,
							name: r,
							styles: s,
							subscribersCount: a
						}) => ({
							allowedPostTypes: Object(i.a)(e),
							communityIcon: s && s.icon || "",
							icon: s && s.legacyIcon && s.legacyIcon.url || "",
							id: t,
							isCrosspostDestination: n,
							isNsfw: o,
							name: r,
							primaryColor: s && s.primaryColor || "",
							subscribers: a
						}))(e.node));
						n(u({
							key: m,
							subreddits: e
						}))
					} else n(p({
						key: m,
						error: f.error
					}))
				}
		},
		"./src/reddit/actions/subredditCrosspostable.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/subscription/index.ts"),
				s = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/selectors/subreddit.ts");
			const l = "SUBREDDIT_CROSSPOSTABLE__PENDING",
				u = "SUBREDDIT_CROSSPOSTABLE__LOADED",
				p = "SUBREDDIT_CROSSPOSTABLE__FAILED",
				m = (Object(o.a)(l), Object(o.a)(u)),
				h = Object(o.a)(p),
				b = () => async (e, t, {
					apiContext: n
				}) => {
					await e(r.e());
					const {
						api: o,
						ids: l
					} = t().subreddits.crosspostable;
					if (o.pending || Object.keys(l).length) return;
					const u = await ((e, t) => Object(i.a)(Object(a.a)(e, [c.a]), {
						data: t,
						endpoint: `${e.apiUrl}/api/crosspostable_subreddits.json`,
						method: s.hb.GET
					}))(n(), {
						sr_detail: !1
					});
					if (u.ok) {
						const n = t(),
							o = u.body && u.body.length ? u.body.map(e => Object(d.E)(n, e)).filter(e => !!e).reduce((e, t) => (e[t] = !0, e), {}) : {};
						e(m({
							subredditIds: o
						}))
					} else e(h({
						error: u.error
					}))
				}
		},
		"./src/reddit/actions/upload.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return l
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "m", (function() {
				return y
			})), n.d(t, "k", (function() {
				return j
			})), n.d(t, "l", (function() {
				return T
			})), n.d(t, "i", (function() {
				return w
			})), n.d(t, "j", (function() {
				return I
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/get.js"),
				r = n.n(o),
				s = n("./node_modules/uuid/v4.js"),
				i = n.n(s),
				a = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/uploadToS3/index.ts"),
				d = n("./src/reddit/models/Upload/index.ts");
			const l = "UPLOAD_PENDING",
				u = "UPLOAD_UPLOADING",
				p = "UPLOAD_METADATA_CHANGED",
				m = "UPLOAD_PROGRESS",
				h = "UPLOAD_SUCCESS",
				b = "UPLOAD_FAILED",
				f = "UPLOAD_CANCELED",
				g = "UPLOAD_REMOVED",
				E = Object(a.a)(l),
				C = Object(a.a)(u),
				y = Object(a.a)(p),
				x = Object(a.a)(m),
				v = Object(a.a)(h),
				O = Object(a.a)(b),
				_ = Object(a.a)(f),
				k = Object(a.a)(g),
				S = new Map,
				j = (e, t) => {
					const n = S.get(e) || [];
					n.push(t), S.set(e, n)
				},
				T = (e, t, n, o = !1) => async (s, a, {
					apiContext: l
				}) => {
					const u = t;
					if (a().uploads[u] && Object(d.c)(a().uploads[u])) return;
					const p = i()(),
						m = () => {
							const e = a().uploads[u];
							return !e || e.id !== p || e.status === d.a.CANCELED
						};
					s(E({
						key: u,
						id: p,
						file: e
					}));
					const {
						uploadLease: h,
						error: b
					} = await n(a().uploads[u]);
					if (m()) return;
					if (b || !h) return void s(O({
						key: u,
						error: b
					}));
					let f;
					j(p, () => {
						f && f.abort()
					}), s(C({
						key: u
					}));
					const g = await Object(c.a)(e, h, e => (f = e, o && e.on("progress", e => {
						if (!m() && "upload" === e.direction) {
							const t = {
								percent: e.percent,
								total: e.total,
								uploaded: e.loaded
							};
							s(x({
								key: u,
								progress: t
							}))
						}
					}), e));
					if (f = null, !m())
						if (g.ok) {
							const e = decodeURIComponent(g.body.PostResponse.Location);
							s(v({
								key: u,
								url: e
							}))
						} else {
							const e = r()(g, "body.Error.Message.0"),
								t = {
									type: "ERROR",
									...e ? {
										fields: [{
											field: "0",
											msg: e
										}]
									} : {}
								};
							s(O({
								key: u,
								error: t
							}))
						}
				}, w = (e, t = !1) => (n, o) => {
					const r = o().uploads[e];
					r && (((e, t) => {
						const n = S.get(e);
						n && n.forEach(n => n(e, t)), S.delete(e)
					})(r.id, t), n(t ? k({
						key: e
					}) : _({
						key: e
					})))
				}, I = (e, t = !1) => (n, o) => {
					Object.keys(o().uploads).forEach(o => {
						o.startsWith(e) && n(w(o, t))
					})
				}
		},
		"./src/reddit/actions/userFlair/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "i", (function() {
				return s
			})), n.d(t, "j", (function() {
				return i
			})), n.d(t, "h", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "p", (function() {
				return u
			})), n.d(t, "q", (function() {
				return p
			})), n.d(t, "o", (function() {
				return m
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "m", (function() {
				return g
			})), n.d(t, "n", (function() {
				return E
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "k", (function() {
				return y
			}));
			const o = "USER_FLAIR_DATA__MUTATED",
				r = "AUTHOR_FLAIR_DATA__MUTATED",
				s = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				a = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				c = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				d = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				l = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				u = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				p = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				m = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				h = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				b = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				f = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				g = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				E = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				C = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				y = "USERFLAIR_FETCH_SUCCESS"
		},
		"./src/reddit/components/CollapseIntoOverflow/index.m.less": function(e, t, n) {
			e.exports = {
				hidden: "_2x_bJPl7Q970NCRxOS36QB",
				innerWrapper: "_3oLr47tuKGv2mNpavCZ2X0",
				outerWrapper: "_1wi_3uF8fUynqe5reIop-G",
				overflowMenu: "_2aOuodBenLHlceR3j0AlIM",
				overflowMenuWrapper: "_3nQ7w1VIzZvzFawddOYgBC",
				row: "_2IirhjIkZ7hgWGtpr087xZ",
				postWrap: "WaTxGJXojt1RbZOH3q6eC"
			}
		},
		"./src/reddit/components/CollapseIntoOverflow/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var o = n("./src/lib/fastdom/index.ts"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/OverflowMenu/index.tsx"),
				c = n("./src/reddit/helpers/richTextEditor/index.ts"),
				d = n("./src/reddit/components/CollapseIntoOverflow/index.m.less"),
				l = n.n(d);
			const u = 33,
				p = e => e.preventDefault(),
				m = (e, t) => `${e===c.a.Post?"Post":"Comment"}--Overflow-Dropdown__${t}`,
				h = e => e.reduce((e, t) => (Array.isArray(t) ? e += t.length : t && e++, e), 0);
			class b extends s.a.Component {
				constructor(e) {
					super(e), this.breakpoints = [], this.updateCurrentBreakpoint = () => {
						o.a.read(() => {
							if (!this.container) return;
							const {
								indexOfCurrentBreakpoint: e,
								totalNumCollapsibleItems: t
							} = this.state, n = this.container.clientWidth;
							let r = this.breakpoints.findIndex((e, o) => {
								const r = o + 1 < t - 1,
									s = this.breakpoints[o + 1] + (r ? u : 0);
								return n < s
							});
							r < 0 && (r = t - 1), r !== e && o.a.write(() => {
								this.setState({
									indexOfCurrentBreakpoint: r,
									shouldShowOverflow: r < t - 1
								})
							})
						})
					};
					const t = Array.isArray(e.children) ? h(e.children) : 1;
					this.state = {
						indexOfCurrentBreakpoint: t - 1,
						shouldShowOverflow: !1,
						totalNumCollapsibleItems: t
					}
				}
				componentDidMount() {
					window.addEventListener("resize", this.updateCurrentBreakpoint)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.updateCurrentBreakpoint)
				}
				registerBreakpoint(e, t) {
					this.breakpoints[t] = 0, o.a.read(() => {
						if (e && e.clientWidth) {
							const n = e.clientWidth;
							this.breakpoints[t] = 0 === t ? n : this.breakpoints[t - 1] + n, this.breakpoints[this.state.totalNumCollapsibleItems - 1] && this.updateCurrentBreakpoint()
						}
					})
				}
				render() {
					const {
						children: e,
						className: t,
						oveflowMenuDropdownId: n,
						onOverflowMenuClick: o,
						renderOverflowMenuTooltip: r,
						editorType: d
					} = this.props, {
						indexOfCurrentBreakpoint: u,
						shouldShowOverflow: h
					} = this.state, b = s.a.Children.toArray(e).filter(Boolean);
					return s.a.createElement("div", {
						className: Object(i.a)(l.a.outerWrapper, t),
						ref: e => this.container = e
					}, s.a.createElement("div", {
						className: l.a.innerWrapper
					}, b.map((e, t) => s.a.createElement("span", {
						className: t > u ? l.a.hidden : void 0,
						key: t,
						ref: e => this.registerBreakpoint(e, t)
					}, e)), h && s.a.createElement("div", {
						className: l.a.overflowMenuWrapper,
						key: "overflowMenuWrapper"
					}, r && r(), s.a.createElement(a.b, {
						className: l.a.overflowMenu,
						dropdownId: m(d, n),
						isFixed: !1,
						handleMouseDown: p,
						onClick: o
					}, s.a.createElement("div", {
						className: Object(i.a)(l.a.row, {
							[l.a.postWrap]: d === c.a.Post
						})
					}, b.map((e, t) => s.a.createElement("span", {
						className: t <= u ? l.a.hidden : void 0,
						key: t
					}, e)))))))
				}
			}
		},
		"./src/reddit/components/CommentCreation/ExpandingFormDiv.m.less": function(e, t, n) {
			e.exports = {
				breakout: "_1VBLErIxAjOke05q8yLOyf"
			}
		},
		"./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.m.less"),
				a = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const d = (e, t) => 21 * e + 33 + (t ? 10 : 0);
			t.a = ({
				breakOut: e,
				depth: t,
				isEditing: n,
				...o
			}) => r.a.createElement("div", c({
				className: Object(s.a)({
					[a.a.breakout]: e
				}),
				style: {
					left: d(t, n)
				}
			}, o))
		},
		"./src/reddit/components/CommentCreation/FormFooter/index.m.less": function(e, t, n) {
			e.exports = {
				BaseFooterButton: "_2vw1scWo_wiHUpczRL3dho",
				baseFooterButton: "_2vw1scWo_wiHUpczRL3dho",
				SubmitButton: "_22S4OsoDdOqiM-hPTeOURa",
				submitButton: "_22S4OsoDdOqiM-hPTeOURa",
				LoadingIcon: "_2qsMO_C_HwxgUgktaOeqZ2",
				loadingIcon: "_2qsMO_C_HwxgUgktaOeqZ2",
				CancelButton: "cZz52cPDbNgzrR1Oo1k27",
				cancelButton: "cZz52cPDbNgzrR1Oo1k27",
				ButtonWrapper: "_3SNMf5ZJL_5F1qxcZkD0Cp",
				buttonWrapper: "_3SNMf5ZJL_5F1qxcZkD0Cp",
				FormFooterWrapper: "_17TqawK-44tH0psnHPIhzS",
				formFooterWrapper: "_17TqawK-44tH0psnHPIhzS",
				pending: "_5p2VqxvUAZTtPIXr7XU5p"
			}
		},
		"./src/reddit/components/CommentCreation/FormFooter/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				d = n("./src/reddit/components/CommentCreation/FormFooter/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = i.a.div("FormFooterWrapper", l.a), m = i.a.wrapped(a.q, "SubmitButton", l.a), h = i.a.wrapped(c.a, "LoadingIcon", l.a), b = i.a.wrapped(a.q, "CancelButton", l.a), f = i.a.div("ButtonWrapper", l.a), g = e => e.preventDefault();
			t.a = ({
				pending: e,
				cancelButtonEnabled: t = !0,
				children: n,
				className: o,
				submitButtonText: i,
				canSubmit: c,
				onSubmit: d,
				onCancel: E
			}) => r.a.createElement(p, {
				className: Object(s.a)(o, {
					[l.a.pending]: e
				})
			}, r.a.createElement(f, null, r.a.createElement(m, {
				size: a.c.XS,
				type: "submit",
				disabled: !c,
				onClick: d,
				onMouseDown: g
			}, e ? r.a.createElement(h, {
				sizePx: 10
			}) : i), t && r.a.createElement(b, {
				priority: a.b.Secondary,
				size: a.c.XS,
				type: "reset",
				disabled: e,
				onClick: E,
				onMouseDown: g
			}, u._("Cancel", null, {
				hk: "2TSLl5"
			}))), n)
		},
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/MarkdownModeButton.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_3oZ5XBWSc3x7cXsvdt3fJ",
				wrapper: "_3oZ5XBWSc3x7cXsvdt3fJ",
				MarkdownModeIcon: "_1EifMLRAKpii4eqciAhY4q",
				markdownModeIcon: "_1EifMLRAKpii4eqciAhY4q",
				Button: "_1Q2Vq3gesOWZA73NbspEiQ",
				button: "_1Q2Vq3gesOWZA73NbspEiQ"
			}
		},
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/index.m.less": function(e, t, n) {
			e.exports = {
				LoadingIcon: "_2izw1tRcQRvnfuR1E05Cy4",
				loadingIcon: "_2izw1tRcQRvnfuR1E05Cy4",
				CommentHeader: "PN-j_b1WdWATQha3fOgkV",
				commentHeader: "PN-j_b1WdWATQha3fOgkV",
				HelpButton: "MQruKnjMvMoDlmee_nF40",
				helpButton: "MQruKnjMvMoDlmee_nF40",
				SwitchModeButton: "_2UH-_HmB6X-2cCsOZVDtC5",
				switchModeButton: "_2UH-_HmB6X-2cCsOZVDtC5",
				FormHeaderText: "_1EQf9w-o91arfThHA8fn-N",
				formHeaderText: "_1EQf9w-o91arfThHA8fn-N",
				HelpIcon: "_3TI2tdRj3loY834ns393zu",
				helpIcon: "_3TI2tdRj3loY834ns393zu",
				Wrapper: "B0932G-wzdOKwoaSaKsKU",
				wrapper: "B0932G-wzdOKwoaSaKsKU",
				isTopLevelComment: "_3-O087Fe8Gpv51vkui03iG",
				mRedesign: "dDb_knwHdpaUGniyi2rvM",
				FormWrapper: "_2LoNYeXgOQfq1adQ3jWSbi",
				formWrapper: "_2LoNYeXgOQfq1adQ3jWSbi",
				ResizableAutosizeTextarea: "AISc5olsWsxMr-ZvG8ywU",
				resizableAutosizeTextarea: "AISc5olsWsxMr-ZvG8ywU",
				mExpanded: "_2FiN5dLqiHVqs1l1NeoU-W",
				FormFooter: "OQubMtSYxy2qH2Q1upQvp",
				formFooter: "OQubMtSYxy2qH2Q1upQvp",
				userIcon: "_1LJWM5yPEtZv26nvbB_mvr",
				CurrentUserIcon: "_6R8kWvljXn9F_7IAh1RG4",
				currentUserIcon: "_6R8kWvljXn9F_7IAh1RG4",
				pending: "_1N53zdZlGyvjHMUoXkJa42",
				focused: "_2sPOgUISlhUYTMcHhUPCTP"
			}
		},
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return de
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-dom/index.js"),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/comment/authoring.ts"),
				l = n("./src/reddit/components/AuthorLink/index.tsx"),
				u = n("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				p = n("./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx"),
				m = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				h = n("./src/reddit/components/MarkdownHelp/index.tsx"),
				b = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				f = n("./src/reddit/controls/ErrorText/index.tsx"),
				g = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				E = n("./src/reddit/icons/svgs/Help/index.tsx"),
				C = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx"),
				y = n("./src/reddit/components/CommentCreation/FormFooter/index.tsx"),
				x = n("./src/lib/fastdom/index.ts"),
				v = n("./src/reddit/components/CommentCreation/ToolbarSelector.m.less"),
				O = n.n(v),
				_ = n("./src/lib/lessComponent.tsx");
			const k = 310,
				S = _.a.div("Container", O.a);
			class j extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						toolbarType: null
					}, this.setContainerRef = e => this.container = e, this.selectToolbar = () => {
						const e = this.container && this.container.parentElement;
						if (!e) return;
						const {
							width: t
						} = e.getBoundingClientRect(), n = t < k ? "compact" : "full";
						n !== this.state.toolbarType && x.a.write(() => {
							this.setState({
								toolbarType: n
							})
						})
					}
				}
				componentDidMount() {
					x.a.read(this.selectToolbar), window.addEventListener("resize", this.selectToolbar)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.selectToolbar)
				}
				render() {
					return s.a.createElement(S, {
						innerRef: this.setContainerRef
					}, this.state.toolbarType ? this.props.children(this.state.toolbarType) : null)
				}
			}
			var T = n("./src/reddit/icons/svgs/MarkdownMode/index.tsx"),
				w = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				I = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/MarkdownModeButton.m.less"),
				P = n.n(I),
				R = n("./src/reddit/controls/Button/index.tsx");
			const M = _.a.wrapped(g.a, "LoadingIcon", P.a),
				N = ({
					isFilled: e,
					...t
				}) => s.a.createElement(M, t),
				D = _.a.div("Wrapper", P.a),
				L = _.a.wrapped(T.a, "MarkdownModeIcon", P.a),
				A = ({
					isFilled: e,
					...t
				}) => s.a.createElement(L, t);
			var F = s.a.memo((function(e) {
					const t = o.fbt._("Switch to fancy pants editor", null, {
						hk: "1XOb4H"
					});
					return s.a.createElement(D, null, s.a.createElement(R.q, {
						priority: R.b.Plain,
						size: R.c.XS,
						"aria-label": t,
						innerRef: e.buttonRef,
						className: e.className,
						onClick: e.onClick,
						Icon: e.isConverting ? N : A
					}, s.a.createElement(w.a, {
						text: t
					})))
				})),
				B = n("./src/lib/classNames/index.ts"),
				U = n("./src/reddit/constants/keycodes.ts"),
				K = n("./src/reddit/components/CommentCreation/getCancelModalId.ts"),
				W = n("./src/reddit/constants/componentSizes.ts"),
				G = n("./src/reddit/constants/componentTestIds.ts"),
				H = n("./src/reddit/selectors/activeModalId.ts"),
				q = n("./src/reddit/selectors/comments.ts"),
				V = n("./src/reddit/selectors/editorContent.ts"),
				z = n("./src/reddit/actions/modal.ts"),
				Q = n("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				Y = n("./src/reddit/models/PostCreationForm/index.ts"),
				J = n("./src/reddit/models/PostDraft/index.ts"),
				X = n("./src/reddit/models/User/index.ts"),
				Z = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.m.less"),
				$ = n.n(Z);
			const ee = _.a.button("SwitchModeButton", $.a),
				te = _.a.wrapped(g.a, "LoadingIcon", $.a),
				ne = _.a.div("CommentHeader", $.a),
				oe = _.a.span("FormHeaderText", $.a),
				re = _.a.button("HelpButton", $.a),
				se = _.a.wrapped(E.a, "HelpIcon", $.a),
				ie = _.a.wrapped(Q.a, "ResizableAutosizeTextarea", $.a),
				ae = _.a.wrapped(y.a, "FormFooter", $.a),
				ce = _.a.wrapped(b.a, "CurrentUserIcon", $.a),
				de = e => s.a.createElement(re, {
					className: e.className,
					onClick: e.onClick
				}, s.a.createElement(se, null)),
				le = 8,
				ue = 16,
				pe = _.a.div("Wrapper", $.a),
				me = _.a.div("FormWrapper", $.a),
				he = Object(a.b)(() => Object(c.c)({
					activeModalId: H.a,
					userName: e => e.user.account ? Object(X.e)(e.user.account) : "",
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					draft: q.i,
					isConverting: (e, t) => Object(V.a)(e, t.draftKey)
				}), (e, t) => ({
					cancelModalToggled: () => e(Object(z.i)(Object(K.a)(t.draftKey))),
					helpModalToggled: () => e(Object(z.i)(h.b))
				}));
			class be extends s.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.cancelForm = () => {
						this.props.onCancel(), this.onBlur()
					}, this.detectBreakout = () => {
						if (!this.wrapperEl || !this.wrapperEl.parentElement || this.props.isTopLevelComment) return;
						const e = this.wrapperEl.parentElement.getBoundingClientRect().width < W.c,
							t = this.getWrapperHeight();
						e === this.state.breakOut && t === this.state.wrapperHeight || x.a.write(() => {
							this.setState({
								breakOut: e,
								wrapperHeight: t
							})
						})
					}, this.focus = () => {
						this.textAreaRef && this.textAreaRef.focus()
					}, this.onChange = e => {
						const {
							value: t
						} = e.currentTarget;
						this.props.onChange && this.props.onChange({
							text: t,
							editorState: null
						}), this.setState(() => ({
							text: t,
							hasChanged: !0,
							showError: !1
						}), () => {
							x.a.read(this.detectBreakout)
						})
					}, this.shouldConfirmCancel = () => this.userHasEnteredText() && this.state.hasChanged && this.props.draftType === J.c.edit, this.onCancel = () => {
						this.shouldConfirmCancel() ? this.props.cancelModalToggled() : this.cancelForm()
					}, this.onBlur = e => {
						(!e || e && e.relatedTarget !== this.switchModeBtn) && (this.textAreaRef && this.textAreaRef.blur(), this.props.onFocusChanged(!1))
					}, this.onFocus = () => {
						this.props.onFocus(), this.props.onFocusChanged(!0)
					}, this.handleKeyDown = e => {
						const {
							ctrlKey: t,
							metaKey: n,
							keyCode: o
						} = e;
						(t || n) && o === U.a.Enter && this.onSubmit()
					}, this.onSubmit = () => {
						this.props.onSubmit({
							commentMode: Y.h.MARKDOWN,
							draftType: this.props.draftType,
							editorState: null,
							text: this.getCurrentText(),
							validate: this.props.showWarningModal
						}), this.onBlur()
					}, this.userHasEnteredText = () => {
						const {
							text: e
						} = this.state;
						return !!e.trim()
					}, this.setWrapperRef = e => {
						this.wrapperEl = e, this.props.editorElementRef && this.props.editorElementRef(e)
					}, this.setTextAreaRef = e => this.textAreaRef = e;
					const {
						draftType: t,
						hasError: n,
						initialText: r
					} = e;
					this.state = {
						text: r || "",
						autofocusDisabled: !1,
						hasChanged: !1,
						showError: n,
						breakOut: !1,
						wrapperHeight: void 0,
						formHeight: null,
						cancelModalText: t === J.c.edit ? o.fbt._("Are you sure that you want to discard your edits?", null, {
							hk: "1ZfaWW"
						}) : o.fbt._("Are you sure that you want to discard your comment?", null, {
							hk: "3d8gJY"
						})
					}
				}
				componentDidMount() {
					this.props.onMount(), window.addEventListener("resize", this.detectBreakout), x.a.read(this.detectBreakout), x.a.write(() => {
						this.props.draft.hasFocus && this.textAreaRef && this.textAreaRef.focus()
					}), this.props.instanceRef && this.props.instanceRef(this)
				}
				componentWillUnmount() {
					this.props.onUnmount({
						text: this.getCurrentText()
					}), window.removeEventListener("resize", this.detectBreakout), this.props.instanceRef && this.props.instanceRef(null)
				}
				componentDidUpdate(e) {
					const t = e.pending,
						{
							hasError: n,
							pending: o
						} = this.props;
					t && !o && !n ? this.setState({
						text: "",
						showError: !1
					}) : e.hasError !== this.props.hasError && this.setState({
						showError: this.props.hasError
					})
				}
				getCurrentText() {
					const {
						draft: e
					} = this.props, t = e && e.text;
					return this.state.text || t
				}
				getWrapperHeight() {
					if (!this.textAreaRef) return;
					const e = Object(i.findDOMNode)(this.textAreaRef);
					return e instanceof Element ? e.getBoundingClientRect().height + le + ue + W.o : void 0
				}
				render() {
					const {
						activeModalId: e,
						autofocus: t,
						cancelModalToggled: n,
						className: r,
						disableAutofocus: i,
						depth: a,
						draft: c,
						draftKey: b,
						draftType: g,
						errorMsgs: E,
						pending: y,
						modalSeen: x,
						submitButtonText: v,
						isCommentBoxDesignEnabled: O,
						isExpanded: _,
						isTopLevelComment: k,
						onSwitchMode: S,
						userName: T
					} = this.props, {
						cancelModalText: w,
						showError: I,
						text: P,
						breakOut: R,
						wrapperHeight: M
					} = this.state, N = Object(K.a)(b), D = c.draftType === J.c.edit;
					return s.a.createElement(pe, {
						"data-test-id": G.b,
						className: Object(B.a)(r, {
							[$.a.isTopLevelComment]: k,
							[$.a.mExpanded]: _,
							[$.a.mRedesign]: O
						}),
						ref: this.setWrapperRef,
						style: {
							height: R ? M : void 0
						}
					}, !O && k && s.a.createElement(ne, null, s.a.createElement(oe, null, o.fbt._("Comment as {authorLink}", [o.fbt._param("authorLink", s.a.createElement(l.a, {
						author: T,
						isAdmin: !1,
						isAdminEmeritus: !1,
						isAuthorDeleted: !1,
						isMod: !1,
						isOp: !1
					}, T))], {
						hk: "4pMWAk"
					}))), s.a.createElement(C.a, {
						breakOut: R,
						depth: a,
						isEditing: D
					}, O && s.a.createElement("div", {
						className: $.a.userIcon
					}, s.a.createElement(ce, null)), s.a.createElement(me, {
						className: Object(B.a)({
							[$.a.pending]: y,
							[$.a.focused]: c.hasFocus
						})
					}, s.a.createElement(ie, {
						innerRef: this.setTextAreaRef,
						autoFocus: t && !i,
						disabled: y,
						initialHeight: this.props.initialHeight,
						onBlur: this.onBlur,
						onChange: this.onChange,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.onFocus,
						onKeyDown: this.handleKeyDown,
						placeholder: O ? o.fbt._("Add a comment", null, {
							hk: "39ZBm0"
						}) : o.fbt._("What are your thoughts?", null, {
							hk: "4or1AH"
						}),
						value: P
					}), (!O || _) && s.a.createElement(ae, {
						cancelButtonEnabled: g !== J.c.replyToPost,
						onSubmit: this.onSubmit,
						onCancel: this.onCancel,
						pending: y,
						submitButtonText: v,
						canSubmit: this.userHasEnteredText()
					}, s.a.createElement(j, null, e => "compact" === e ? s.a.createElement(F, {
						buttonRef: e => this.switchModeBtn = e,
						onClick: () => S(Y.h.RICH_TEXT, P, b),
						isConverting: this.props.isConverting
					}) : s.a.createElement("div", null, s.a.createElement(ee, {
						innerRef: e => this.switchModeBtn = e,
						onClick: () => S(Y.h.RICH_TEXT, P, b)
					}, o.fbt._("Switch to Fancy Pants Editor", null, {
						hk: "ousUG"
					}), this.props.isConverting && s.a.createElement(te, {
						sizePx: 12
					})))), s.a.createElement(de, {
						onClick: this.props.helpModalToggled
					})))), I && Object(f.c)(E), e === N && s.a.createElement(m.a, {
						actionText: o.fbt._("Discard", null, {
							hk: "1kJ5PR"
						}),
						cancelActionText: o.fbt._("keep", null, {
							hk: "J0ER1"
						}),
						modalText: w,
						onConfirm: () => this.cancelForm(),
						toggleModal: n,
						trackClick: () => {}
					}), e === h.b && s.a.createElement(h.a, null), e === d.q && s.a.createElement(p.a, {
						onSubmit: this.onSubmit,
						modalSeen: x,
						withOverlay: !0
					}), s.a.createElement(u.a, {
						editKey: b,
						hasValue: !!P
					}))
				}
			}
			t.b = he(be)
		},
		"./src/reddit/components/CommentCreation/NavigationModule/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-router/esm/react-router.js");
			let a = null;
			class c extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.unblock = e => {
						c.blockers.delete(e), c.blockers.size || (a && a(), a = null, window.removeEventListener("beforeunload", c.navigationBlocker))
					}
				}
				componentDidUpdate(e) {
					!e.hasValue && this.props.hasValue ? this.block(this.props.editKey) : e.hasValue && !this.props.hasValue && this.unblock(this.props.editKey)
				}
				componentWillUnmount() {
					this.unblock(this.props.editKey)
				}
				componentDidMount() {
					this.props.hasValue && this.block(this.props.editKey)
				}
				block(e) {
					c.blockers.add(e), a || (window.addEventListener("beforeunload", c.navigationBlocker), a = this.props.history.block(() => {
						const e = this.props.isPostEdit ? o.fbt._("You have a post edit in progress, are you sure you want to discard it?", null, {
							hk: "4u5L7p"
						}) : o.fbt._("You have a comment in progress, are you sure you want to discard it?", null, {
							hk: "rgscd"
						});
						return window.confirm(e) ? void 0 : o.fbt._("Are you sure you want to leave?", null, {
							hk: "1Ua5kc"
						})
					}))
				}
				render() {
					return null
				}
			}
			c.blockers = new Set, c.navigationBlocker = e => {
				const t = "Are you sure you want to leave?";
				return e.returnValue = t, t
			}, t.a = Object(i.i)(c)
		},
		"./src/reddit/components/CommentCreation/ToolbarSelector.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1XC-wMQsKPqfaPcfWQCZdW",
				container: "_1XC-wMQsKPqfaPcfWQCZdW"
			}
		},
		"./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/uuid/v4.js"),
				a = n.n(i),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/reddit/actions/comment/authoring.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/controls/TextButton/index.tsx"),
				h = n("./src/reddit/constants/tracking.ts"),
				b = n("./src/reddit/selectors/telemetry.ts");
			const f = e => ({
					source: "toxicity_modal",
					...b.defaults(e),
					screen: b.screen(e),
					subreddit: b.subreddit(e)
				}),
				g = e => t => ({
					action: h.c.VIEW,
					noun: "modal",
					correlationId: e,
					...f(t)
				}),
				E = e => t => ({
					action: h.c.CLICK,
					noun: "submit",
					correlationId: e,
					...f(t)
				}),
				C = e => t => ({
					action: h.c.CLICK,
					noun: "edit",
					correlationId: e,
					...f(t)
				}),
				y = e => t => ({
					action: h.c.CLICK,
					noun: "close",
					correlationId: e,
					...f(t)
				});
			var x = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js"), O = Object(s.b)(null, (e, t) => ({
				closeModal: () => {
					e(Object(l.g)(d.q))
				},
				continue: () => {
					t.onSubmit()
				}
			}));
			class _ extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						correlationId: a()()
					}
				}
				componentDidMount() {
					this.props.modalSeen(), this.props.sendEvent(g(this.state.correlationId))
				}
				render() {
					return r.a.createElement(u.d, null, r.a.createElement(u.h, null, r.a.createElement(x.a, null, r.a.createElement(u.p, null, v._("Are you sure you want to post that?", null, {
						hk: "4yXqtu"
					})), r.a.createElement(m.a, {
						onClick: () => {
							this.props.sendEvent(y(this.state.correlationId)), this.props.closeModal()
						}
					}, r.a.createElement(u.b, null)))), r.a.createElement(u.k, null, r.a.createElement(u.o, null, v._("A reminder from the mods: Please follow community rules when commenting.", null, {
						hk: "Hdi9f"
					}))), r.a.createElement(u.f, null, r.a.createElement(u.a, {
						onClick: () => {
							this.props.sendEvent(C(this.state.correlationId)), this.props.closeModal()
						},
						"data-redditstyle": !0
					}, v._("Go back and edit", null, {
						hk: "3nGNI7"
					})), r.a.createElement(u.q, {
						onClick: () => {
							this.props.sendEvent(E(this.state.correlationId)), this.props.continue()
						},
						"data-redditstyle": !0
					}, v._("Comment", null, {
						hk: "1leYg7"
					}))))
				}
			}
			t.a = Object(c.a)(O(Object(p.c)(_)))
		},
		"./src/reddit/components/CommentCreation/getCancelModalId.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			const o = e => `Comment-cancelModal__${e}`
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, n) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(l);
			const p = e => e.preventDefault();
			t.a = Object(i.a)(e => s.a.createElement(a.d, null, s.a.createElement(a.h, null, s.a.createElement(d.a, null, s.a.createElement(a.p, null, e.headerText || o.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), s.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, s.a.createElement(a.b, null)))), s.a.createElement(a.k, null, s.a.createElement(a.o, {
				className: u.a.ModalText
			}, e.modalText)), s.a.createElement(a.f, null, !e.hideCancelButton && s.a.createElement(a.a, {
				className: u.a.buttonWidth,
				onMouseDown: p,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || o.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), s.a.createElement(a.t, {
				className: u.a.buttonWidth,
				onMouseDown: p,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.actionText))))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.m.less": function(e, t, n) {
			e.exports = {
				RequestButton: "_3K2ydhts9_ES4s9UpcXqBi",
				requestButton: "_3K2ydhts9_ES4s9UpcXqBi"
			}
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/privateCommunity.ts"),
				m = n("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				h = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				b = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.m.less"),
				f = n.n(b);
			const g = () => ({
				[h.b.Comment]: o.fbt._("Request to Comment", null, {
					hk: "3KRhw5"
				}),
				[h.b.IdCard]: o.fbt._("Request to Post", null, {
					hk: "2xsrGd"
				}),
				[h.b.PostSubmission]: o.fbt._("Request to Post", null, {
					hk: "2xsrGd"
				}),
				[h.b.ContentGate]: o.fbt._("Request to Join", null, {
					hk: "1nK8Vv"
				})
			});
			class E extends s.a.Component {
				constructor() {
					super(...arguments), this.onRequest = () => {
						const {
							sendEvent: e,
							eventSource: t,
							openRequestToJoinSubredditModal: n,
							openContributorRequestModal: o
						} = this.props;
						t === h.b.ContentGate ? (e(Object(p.a)(t)), n()) : (e(Object(m.a)(t)), o())
					}
				}
				render() {
					const {
						eventSource: e,
						smallButton: t,
						className: n,
						isContributorRequestPending: r
					} = this.props;
					return s.a.createElement(u.q, {
						priority: e === h.b.ContentGate ? u.b.Secondary : u.b.Primary,
						className: Object(a.a)(t ? null : f.a.RequestButton, n),
						onClick: this.onRequest,
						size: t ? u.c.S : u.c.M,
						disabled: r
					}, r ? o.fbt._("Request Pending", null, {
						hk: "hVswi"
					}) : g()[e])
				}
			}
			t.default = Object(i.b)(null, e => ({
				openContributorRequestModal: () => e(Object(c.i)(l.a.CONTRIBUTOR_REQUEST)),
				openRequestToJoinSubredditModal: () => e(Object(c.i)(l.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT))
			}))(Object(d.c)(E))
		},
		"./src/reddit/components/Econ/Prediction/EducationMessage/constants.ts": function(e, t, n) {
			"use strict";
			var o;
			n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.nonDismissable = "predictionEducationNonDismissable", e.creation = "predictionEducationCreation", e.feature = "predictionEducationFeature"
				}(o || (o = {}))
		},
		"./src/reddit/components/Econ/Prediction/EducationMessage/index.m.less": function(e, t, n) {
			e.exports = {
				educationMessage: "_26GJLzgfE0wgM-CnXwauPN",
				titleRow: "vZoXjCnTHVyUauLNVGVfk",
				header: "_27PnGSqq2_i7iJirZpjlvp",
				title: "_3tXfrHlKYl3OfwzJeHj2TF",
				newBadge: "_2xWQI6x-vSCyMVG0rWrUv",
				closeButton: "_2fuSvPWThjhQeduKzDNNsl"
			}
		},
		"./src/reddit/components/Econ/Prediction/EducationMessage/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/hooks/useLocalStorage.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/components/Econ/Prediction/EducationMessage/constants.ts"),
				d = n("./src/reddit/components/Econ/Prediction/EducationMessage/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function p({
				message: e,
				newBadge: t,
				onClose: n,
				onView: d,
				storageKey: p = c.a.nonDismissable,
				title: m
			}) {
				const h = p !== c.a.nonDismissable,
					[b, f] = Object(s.a)(p, !h || !1),
					[g, E] = Object(o.useState)(!1);
				return Object(o.useEffect)(() => {
					b || g || !d || (d(), E(!0))
				}, [b, g, d]), h && b ? null : r.a.createElement("div", {
					className: l.a.educationMessage
				}, r.a.createElement("div", {
					className: l.a.titleRow
				}, r.a.createElement("div", {
					className: l.a.header
				}, r.a.createElement("h3", {
					className: l.a.title
				}, m), t && r.a.createElement("div", {
					className: l.a.newBadge
				}, u._("New", null, {
					hk: "2N0EBb"
				}))), h && r.a.createElement(i.q, {
					"aria-label": u._("Close", null, {
						hk: "2UjnU"
					}),
					className: l.a.closeButton,
					Icon: Object(a.b)("close"),
					onClick: () => {
						f(!0), n && n()
					},
					priority: i.b.Plain
				})), e)
			}
		},
		"./src/reddit/components/Econ/Prediction/NewBadge/index.m.less": function(e, t, n) {
			e.exports = {
				newBadge: "_25Zpk4lWyvwk-rK1hZ0N8m"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionFeatureEducationMessage/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/components/Econ/Prediction/EducationMessage/index.tsx");

			function a({
				isTokens: e,
				onClose: t,
				onView: n,
				storageKey: r
			}) {
				const a = o.fbt._("Predictions", null, {
						hk: "3X6mhV"
					}),
					c = e ? o.fbt._("Redditors add tokens to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "FDY0l"
					}) : o.fbt._("Redditors add coins to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "4eP2MR"
					});
				return s.a.createElement("div", null, s.a.createElement(i.a, {
					onClose: t,
					onView: n,
					title: a,
					newBadge: !0,
					message: c,
					storageKey: r
				}))
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.m.less": function(e, t, n) {
			e.exports = {
				modalHeader: "_26bOTAKvGixX5tMC3vGfTv"
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/lodash/noop.js"),
				r = n.n(o),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = n.n(d);
			t.a = e => i.a.createElement(a.h, {
				className: l.a.modalHeader
			}, i.a.createElement(a.p, null, e.title), i.a.createElement(c.a, {
				onClick: e.onClosePressed || r.a
			}, i.a.createElement(a.b, null)))
		},
		"./src/reddit/components/FlairPickerWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_3nRJIwLuth2pKYrXnr2jPN",
				wrapper: "_3nRJIwLuth2pKYrXnr2jPN"
			}
		},
		"./src/reddit/components/FlairPickerWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				s = n.n(r);
			const i = o.a.div("Wrapper", s.a);
			t.a = i
		},
		"./src/reddit/components/FlairPreview/index.m.less": function(e, t, n) {
			e.exports = {
				Placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				SelectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				selectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				FlairComponent: "vynkb69RQyUY-PA6bCaW0",
				flairComponent: "vynkb69RQyUY-PA6bCaW0"
			}
		},
		"./src/reddit/components/FlairPreview/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/Flair/index.tsx"),
				c = n("./src/reddit/components/FlairPreview/index.m.less"),
				d = n.n(c);
			const l = i.a.span("Placeholder", d.a),
				u = i.a.div("SelectedFlair", d.a),
				p = i.a.wrapped(a.b, "FlairComponent", d.a);
			t.a = e => e.flair ? s.a.createElement(u, null, s.a.createElement(l, null, o.fbt._("{placeholder}", [o.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), s.a.createElement(p, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : s.a.createElement(u, null, o.fbt._("No flair selected", null, {
				hk: "1XPXbv"
			}))
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.m.less": function(e, t, n) {
			e.exports = {
				FlairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				flairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				isCompact: "_3YjPWOd9tK9O_DN50RI_FN"
			}
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var o = n("./node_modules/lodash/once.js"),
				r = n.n(o),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/loadWithRetries/index.ts"),
				u = n("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				p = n.n(u);
			const m = d.a.wrapped(e => i.a.createElement("div", {
					className: Object(c.a)(e.className, {
						[p.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", p.a),
				h = r()((e = m) => Object(a.a)({
					getComponent: () => Object(l.a)(() => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("FlairEdit")]).then(n.bind(null, "./src/reddit/components/FlairSearch/FlairEdit/index.tsx")).then(e => e.default)),
					ErrorComponent: e,
					LoadingComponent: e
				}))
		},
		"./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1bdAduczElF9-gLoCvHz-p",
				flairComponent: "_2leID3tMN8hpvVd4XhEqTl",
				radioOption: "FJIE5E2gciCA8q3Jzvcyg",
				pencil: "_3H_wwe03-Fkrm6oWGakXI8",
				searchBoxWrapper: "_18cuM8Uu7RcIFu1bCT0r4t",
				searchIcon: "_2bECVWL_WJ9RGBx7-RnzfO",
				searchInput: "_1nQbRaoAvb6Uy0oI-OfDtZ"
			}
		},
		"./src/reddit/components/FlairSearch/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2AKP6aCod0Z6TuXXfc1ZqL",
				buttonsRow: "_3w7b_fPwMuVD17J7epjTXi",
				clearButton: "_3WykjMvdVO5xibqd5xlfTC",
				flairEditSection: "SVd7IxchgiWetdYbftTHx",
				editLabel: "KTa3kg9lzGPUeLuhAHMT_",
				restrictionHintText: "_1fV9kJfKnED9qQ2AF8f3iT"
			}
		},
		"./src/reddit/components/FlairSearch/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/memoizeByReference/index.ts"),
				l = n("./src/reddit/featureFlags/index.ts"),
				u = n("./src/reddit/helpers/flair.ts"),
				p = n("./src/reddit/helpers/trackers/userFlair.ts"),
				m = n("./src/reddit/hooks/useTracking.ts"),
				h = n("./src/reddit/selectors/moderatorPermissions.ts"),
				b = n("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				f = n("./src/reddit/components/Flair/index.tsx"),
				g = n("./src/reddit/controls/RadioInput/index.tsx"),
				E = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				C = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				y = n("./src/reddit/icons/svgs/Search/index.tsx"),
				x = n("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				v = n.n(x);
			class O extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						searchQuery: ""
					}, this.onSearchChange = e => {
						this.setState({
							searchQuery: e.target.value
						})
					}
				}
				render() {
					const {
						templates: e,
						templateIds: t,
						selectedTemplateId: n
					} = this.props, {
						searchQuery: r
					} = this.state, i = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(r)), a = !!n && i.some(e => e.id === n);
					return s.a.createElement("div", {
						className: v.a.container
					}, s.a.createElement("div", {
						className: v.a.searchBoxWrapper
					}, s.a.createElement("input", {
						className: v.a.searchInput,
						onChange: this.onSearchChange,
						type: "text",
						placeholder: o.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: r
					}), s.a.createElement(y.a, {
						className: v.a.searchIcon
					})), s.a.createElement(g.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: n
					}, i.map((e, t) => {
						const o = Object(u.c)(e),
							r = n === e.id || !a && 0 === t;
						return s.a.createElement(E.a, {
							className: v.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: r ? 0 : -1,
							value: e.id
						}, s.a.createElement(f.b, {
							className: v.a.flairComponent,
							flair: o,
							forceSmallEmojis: !0
						}), e.textEditable && s.a.createElement(C.a, {
							className: v.a.pencil
						}))
					})))
				}
			}
			var _ = n("./src/reddit/components/FlairSearch/index.m.less"),
				k = n.n(_);
			const S = Object(d.a)(e => e && Object(u.c)(e)),
				j = Object(a.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: h.f
				}),
				T = Object(i.b)(j);
			t.a = T(e => {
				const {
					flairTemplateType: t,
					flair: n,
					className: r,
					onChange: i,
					subredditId: a,
					templates: d,
					templateIds: l,
					areFlairRestrictionsEnabled: h,
					isModerator: f
				} = e, g = Object(m.a)(), E = d && n && n.templateId && d[n.templateId] || void 0, C = Object(b.a)(), y = n || S(E);
				return s.a.createElement("div", {
					className: Object(c.a)(r, k.a.container)
				}, d && l && s.a.createElement(O, {
					flairTemplateType: t,
					onChange: e => {
						if (d) {
							const t = d[e],
								n = Object(u.c)(t);
							g(Object(p.b)({
								userFlair: t
							})), i(n)
						}
					},
					selectedTemplateId: E ? E.id : "",
					templateIds: l,
					templates: d
				}), y && E && (f || E.textEditable) && s.a.createElement("div", {
					className: k.a.flairEditSection
				}, s.a.createElement("div", {
					className: k.a.editLabel
				}, o.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), h && s.a.createElement("div", {
					className: k.a.restrictionHintText
				}, Object(u.k)(E)), s.a.createElement(C, {
					autofocus: !0,
					emojiPickerId: "FlairSearch-EmojiPicker-DropdownId",
					flair: y,
					flairTemplate: E,
					flairTemplateType: t,
					isFlairModOnly: E.modOnly,
					onChange: e => {
						const t = d && e.templateId ? d[e.templateId] : void 0;
						let n = e;
						t && (n = Object(u.d)({
							flair: e,
							template: t,
							ignoreTextAllowance: !0
						})), i(n)
					},
					subredditId: a
				})))
			})
		},
		"./src/reddit/components/FocusableContent/index.m.less": function(e, t, n) {
			e.exports = {
				FocusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				focusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				isFocused: "_3F2J0fSnCI3ZvF_tBSaV0s",
				noBorder: "_1CpUVAt2tGEwaaBV3nZNJs"
			}
		},
		"./src/reddit/components/FocusableContent/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/FocusableContent/index.m.less"),
				c = n.n(a);
			t.a = i.a.wrapped(e => r.a.createElement("div", {
				className: Object(s.a)(e.className, {
					[c.a.isFocused]: e.isFocused,
					[c.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", c.a)
		},
		"./src/reddit/components/Governance/PollHelpText/index.m.less": function(e, t, n) {
			e.exports = {
				pollHelpText: "_13USlqK0GlZqaPCBL0zKGR",
				decisionThreholdAmount: "_2c1NZvJKkI6yBivC77FPD4",
				decisionThresholdTitle: "_3awYIQIHL4ztIb5nZDL46P",
				decisionThresholdExplanation: "_1GSbrVpv76_yXM2VcUM3zK"
			}
		},
		"./src/reddit/components/Governance/ProposalTemplates/Generic/index.m.less": function(e, t, n) {
			e.exports = {
				hintText: "_1iTDa11Wj-8Ogp0kHlXhus",
				text: "_3Q86vH6B2mMSV8rHtZq4H9",
				topline: "_12_7Q434C71LJVJC_6GX71"
			}
		},
		"./src/reddit/components/Governance/ProposalTemplates/Spinoff/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_2clkG943bEk_52p-4FBzwJ"
			}
		},
		"./src/reddit/components/Governance/ProposalTemplates/TopModReplacement/index.m.less": function(e, t, n) {
			e.exports = {
				input: "AyMlaMkumG28uV6ZIz9ed"
			}
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, n) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/selectors/crypto/points.ts"),
				l = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(l);
			const p = Object(i.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(d.b)(e, t)
			});
			t.a = Object(s.b)(p)((function(e) {
				var t;
				const n = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!n) return null;
				const o = e.grey ? n.greyVector || n.grey : n.filledVector || n.filled,
					s = `${a.a.assetPath}/${o}`;
				if (e.grey && s.endsWith(".svg")) {
					const t = `url(${s}) center/cover`;
					return r.a.createElement("div", {
						className: Object(c.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return r.a.createElement("img", {
					className: e.className,
					src: s
				})
			}))
		},
		"./src/reddit/components/Governance/TokenAmount/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1_TXyD8cel36iFhXWbXulM",
				small: "_1MnpXAw_e6q3FjPvZfRITL",
				token: "_3ugCwJ_lmINM5PwXoNm8XD"
			}
		},
		"./src/reddit/components/Governance/TokenAmount/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/components/Governance/Token/index.tsx"),
				l = n("./src/reddit/helpers/governance/tokens.ts"),
				u = n("./src/reddit/selectors/crypto/points.ts"),
				p = n("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				m = n.n(p);
			const h = Object(i.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(u.b)(e, t)
			});
			t.a = Object(s.b)(h)((function(e) {
				var t;
				return r.a.createElement("div", {
					className: Object(a.a)(m.a.container, e.className, {
						[m.a.small]: e.small
					})
				}, r.a.createElement(d.a, {
					className: Object(a.a)(m.a.token, {
						[m.a.small]: e.small
					}),
					grey: e.grey,
					subredditId: e.subredditId
				}), Object(c.a)(Object(l.b)(e.amount, null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.displayConversion)), e.additionalText || null)
			}))
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
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
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, n) {
			e.exports = {
				IconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				iconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				TextWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				textWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				leftSideRectangle: "_3TLlMYjrPH9Kl9522LpSxb",
				wrapper: "_1DUKbp8va6vxOv9zemBDBi",
				subtitle: "_2J85dtk0HKQBLk8HTSWduv",
				title: "Nt8TnDvJ2BsL8KWcFQKy5"
			}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				a = n.n(i),
				c = n("./src/lib/lessComponent.tsx");
			const d = c.a.div("IconWrapper", a.a),
				l = c.a.div("TextWrapper", a.a);

			function u(e) {
				const {
					className: t,
					color: n,
					icon: o,
					subtitle: i,
					title: c
				} = e;
				return r.a.createElement("div", {
					className: Object(s.a)(t, a.a.wrapper),
					style: n && {
						borderColor: n
					} || {}
				}, r.a.createElement("div", {
					className: a.a.leftSideRectangle,
					style: n && {
						backgroundColor: n
					} || {}
				}), o ? r.a.createElement(d, null, o) : r.a.createElement(d, null), r.a.createElement(l, null, r.a.createElement("div", {
					className: a.a.title
				}, c), i && r.a.createElement("div", {
					className: a.a.subtitle
				}, i)))
			}
		},
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/InfoTextTooltip/hooked.m.less"),
				a = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = r.a.memo((function({
				visible: e,
				...t
			}) {
				const [n, i] = Object(o.useState)(e);
				return Object(o.useEffect)(() => {
					let t = window.setTimeout(() => {
						t = void 0, i(e)
					}, 0);
					return () => {
						t && window.clearTimeout(t), i(!1)
					}
				}, [e]), e ? r.a.createElement("div", c({
					className: Object(s.a)(a.a.tooltip, {
						[a.a.visible]: n
					})
				}, t.popperProps), t.children, n && r.a.createElement("div", c({
					className: a.a.arrow
				}, t.arrowProps))) : null
			}))
		},
		"./src/reddit/components/InfoTextTooltip/hooked.m.less": function(e, t, n) {
			e.exports = {
				arrow: "_1jsc29CjRXZWjd2tr0Ji0Y",
				tooltip: "_2J_zB4R1FH2EjGMkQjedwc",
				visible: "u6HtAZu8_LKL721-EnKuR"
			}
		},
		"./src/reddit/components/JumpToContent/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3KaTO_3YaHK3SMocnu8jV9",
				rightBorder: "_1Bt_cwKVUG30M9eNB-9rU4",
				wrapper: "_32Xa3voy05uAFz3ZnopP_S"
			}
		},
		"./src/reddit/components/JumpToContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return b
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/constants/componentSizes.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/JumpToContent/index.m.less"),
				d = n.n(c);
			const l = Object(r.createContext)(null),
				u = Object(r.createContext)(null);
			class p extends s.a.Component {
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
					return s.a.createElement(l.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, s.a.createElement(u.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const m = i.f + 10,
				h = s.a.memo(() => {
					const [e, t] = Object(r.useState)("-500px");
					return s.a.createElement(l.Consumer, null, n => n && s.a.createElement("div", {
						className: d.a.wrapper
					}, s.a.createElement(a.q, {
						kind: a.a.Button,
						priority: a.b.Plain,
						className: d.a.button,
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
							n.focus(), n.scrollIntoView(), window.scrollBy(0, -m)
						}
					}, o.fbt._("Jump to content", null, {
						hk: "2zWOmQ"
					})), s.a.createElement("div", {
						className: d.a.rightBorder
					})))
				}),
				b = s.a.memo(() => s.a.createElement(u.Consumer, null, e => s.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				a = n("./src/reddit/helpers/overlay/index.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e) {
				const {
					children: t,
					className: n,
					to: o,
					...s
				} = e, d = Object(a.b)(o);
				return r.a.createElement(i.a, c({
					className: n,
					to: d
				}, s), t)
			}

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const {
					isOverlay: t,
					...n
				} = e, o = t ? d : s.a;
				return r.a.createElement(o, l({}, n, {
					children: n.children,
					className: n.className,
					onClick: n.onClick,
					to: n.to
				}))
			}
		},
		"./src/reddit/components/MakeGifToggle/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1iRy5EPCLqSx8I0k9OT0wW",
				content: "NfjQg3srQXRhyOxLBwXrS",
				toggleSwitch: "_1fUmirx6e9tUDs04TQq6A1",
				mCompactSwitch: "_3Cx_YBpXo1s1iy7oA-4s6R",
				mDisabled: "_1M5N6DrrQQCQJs3JctDSu8",
				hoverTooltip: "_9qS60cx9uxyt1k4eZF_0w",
				tooltipContentClass: "_21DP8j-B-UkVKGJONbrTmX"
			}
		},
		"./src/reddit/components/MakeGifToggle/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				c = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				l = n("./src/reddit/components/MakeGifToggle/index.m.less"),
				u = n.n(l);
			t.a = e => s.a.createElement(d.a, {
				className: Object(i.a)(u.a.container, e.disabled ? u.a.mDisabled : null, e.isCompact ? u.a.mCompactSwitch : null),
				onMouseDown: e => e.preventDefault(),
				onClick: t => {
					t.stopPropagation(), !e.disabled && e.onClick()
				}
			}, s.a.createElement(d.a, {
				className: u.a.content
			}, s.a.createElement(c.a, {
				className: u.a.toggleSwitch,
				on: e.on
			}), s.a.createElement("label", null, o.fbt._("Make GIF", null, {
				hk: "2ig2GG"
			}))), e.tooltip ? s.a.createElement(a.a, {
				className: u.a.hoverTooltip,
				tooltipContentClass: u.a.tooltipContentClass,
				text: e.tooltip
			}) : null)
		},
		"./src/reddit/components/MarkdownHelp/index.m.less": function(e, t, n) {
			e.exports = {
				Section: "_1gF-JM2Md5QrEmUiEkRvLZ",
				section: "_1gF-JM2Md5QrEmUiEkRvLZ",
				Container: "C8uCM4XqGMA6xiIu7zfJl",
				container: "C8uCM4XqGMA6xiIu7zfJl",
				helpTable: "_3E7k-M4lVIYGW6Z7QoiPc9",
				Table: "_1t5z5ubOp-UUzTGLJr43d0",
				table: "_1t5z5ubOp-UUzTGLJr43d0",
				P: "_3MhMubukVABghyvZNN2X65",
				p: "_3MhMubukVABghyvZNN2X65"
			}
		},
		"./src/reddit/components/MarkdownHelp/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return y
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				c = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				d = n("./src/reddit/components/RichTextJson/elements.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/higherOrderComponents/asModal/index.tsx"),
				m = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/layout/row/Inline/index.tsx"),
				f = n("./src/reddit/layout/row/RightAlign/index.tsx"),
				g = n("./src/reddit/components/MarkdownHelp/index.m.less"),
				E = n.n(g),
				C = n("./src/lib/lessComponent.tsx");
			const y = "Markdown_Help__Modal",
				x = C.a.wrapped(b.a, "Section", E.a),
				v = C.a.div("Container", E.a),
				O = C.a.table("Table", E.a),
				_ = C.a.p("P", E.a);
			class k extends s.a.Component {
				render() {
					const e = o.fbt._("italics", null, {
							hk: "9wBJ9"
						}),
						t = o.fbt._("bold", null, {
							hk: "yoD2u"
						}),
						n = o.fbt._("item", null, {
							hk: "20ZnoS"
						}),
						r = o.fbt._("quoted text", null, {
							hk: "1Lvb4b"
						}),
						i = o.fbt._("strikethrough", null, {
							hk: "UcaLr"
						}),
						u = o.fbt._("spoilers", null, {
							hk: "372XyC"
						});
					return s.a.createElement(c.a, null, s.a.createElement(a.a, {
						onClosePressed: this.props.closeModal,
						title: o.fbt._("Markdown Help", null, {
							hk: "w08E2"
						})
					}), s.a.createElement(v, null, s.a.createElement(O, {
						className: E.a.helpTable
					}, s.a.createElement("tr", null, s.a.createElement(d.s, null, s.a.createElement(d.j, null, o.fbt._("Type this:", null, {
						hk: "VDjXQ"
					}))), s.a.createElement(d.s, null, s.a.createElement(d.j, null, o.fbt._("to get this:", null, {
						hk: "4zlZi9"
					})))), s.a.createElement("tr", null, s.a.createElement(d.p, null, s.a.createElement(d.j, null, "*", e, "*")), s.a.createElement(d.p, null, s.a.createElement(d.f, null, e))), s.a.createElement("tr", null, s.a.createElement(d.p, null, s.a.createElement(d.j, null, "**", t, "**")), s.a.createElement(d.p, null, s.a.createElement(d.b, null, t))), s.a.createElement("tr", null, s.a.createElement(d.p, null, s.a.createElement(d.j, null, "[reddit!](https://reddit.com)")), s.a.createElement(d.p, null, s.a.createElement(d.a, {
						href: "https://www.reddit.com"
					}, "reddit!"))), s.a.createElement("tr", null, s.a.createElement(d.p, null, s.a.createElement(d.j, null, "* ", n, " 1"), s.a.createElement(d.j, null, "* ", n, " 2"), s.a.createElement(d.j, null, "* ", n, " 3")), s.a.createElement(d.p, null, s.a.createElement(d.v, null, s.a.createElement(d.g, null, n, " 1"), s.a.createElement(d.g, null, n, " 2"), s.a.createElement(d.g, null, n, " 3")))), s.a.createElement("tr", null, s.a.createElement(d.p, null, s.a.createElement(d.j, null, "> ", r)), s.a.createElement(d.p, null, s.a.createElement(d.c, null, r))), s.a.createElement("tr", null, s.a.createElement(d.p, null, s.a.createElement(d.j, null, "~~", i, "~~")), s.a.createElement(d.p, null, s.a.createElement(d.d, null, i))), s.a.createElement("tr", null, s.a.createElement(d.p, null, s.a.createElement(d.j, null, o.fbt._("super^script", null, {
						hk: "2WteOp"
					}))), s.a.createElement(d.p, null, o.fbt._("super{=script}", [o.fbt._param("=script", s.a.createElement(d.m, null, o.fbt._("script", null, {
						hk: "4a2qMi"
					})))], {
						hk: "1VvC4z"
					}))), s.a.createElement("tr", null, s.a.createElement(d.p, null, s.a.createElement(d.j, null, `>!${u}!<`)), s.a.createElement(d.p, null, s.a.createElement(l.a, null, u)))), s.a.createElement(_, null, o.fbt._("Check the {=commenting wiki page} for more help", [o.fbt._param("=commenting wiki page", s.a.createElement(d.a, {
						href: "https://www.reddit.com/wiki/commenting"
					}, o.fbt._("commenting wiki page", null, {
						hk: "25UBE"
					})))], {
						hk: "1J9oBy"
					}))), s.a.createElement(x, null, s.a.createElement(f.a, null, s.a.createElement(h.i, {
						onClick: this.props.closeModal,
						"data-redditstyle": !0
					}, o.fbt._("Close", null, {
						hk: "4gbyAA"
					})))))
				}
			}
			const S = Object(i.b)(null, (e, t) => ({
				closeModal: () => e(Object(m.i)(y))
			}))(k);
			t.a = Object(p.a)(Object(u.c)(S))
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
				return p
			})), n.d(t, "n", (function() {
				return m
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "p", (function() {
				return x
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "s", (function() {
				return _
			})), n.d(t, "t", (function() {
				return k
			})), n.d(t, "q", (function() {
				return S
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "r", (function() {
				return T
			}));
			var o = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Button/index.tsx"),
				s = n("./src/reddit/controls/Input/ModalInput.tsx"),
				i = n("./src/reddit/icons/svgs/Close/index.tsx"),
				a = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				c = n.n(a);
			const d = o.a.wrapped(i.a, "CloseIcon", c.a),
				l = o.a.section("ModalBody", c.a),
				u = o.a.section("ModalPostPreview", c.a),
				p = o.a.p("ModalText", c.a),
				m = o.a.div("ModalSmallText", c.a),
				h = o.a.div("ModalDescriptionText", c.a),
				b = o.a.div("ModalMetaText", c.a),
				f = o.a.label("ModalFormItem", c.a),
				g = o.a.wrapped(s.a, "ModalInput", c.a),
				E = o.a.label("ModalInputLabel", c.a),
				C = o.a.footer("ModalFooter", c.a),
				y = o.a.header("ModalHeader", c.a),
				x = o.a.div("ModalTitle", c.a),
				v = o.a.div("ModalAnnotation", c.a),
				O = o.a.div("ModalMain", c.a),
				_ = o.a.textarea("TextArea", c.a),
				k = o.a.wrapped(r.i, "WarningButton", c.a),
				S = o.a.wrapped(r.i, "PrimaryButton", c.a),
				j = o.a.wrapped(r.l, "CancelButton", c.a),
				T = o.a.wrapped(r.o, "RemoveButton", c.a)
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/Row.tsx"),
				h = n("./src/reddit/icons/fonts/index.tsx"),
				b = n("./src/reddit/selectors/tooltip.ts"),
				f = n("./src/reddit/components/OverflowMenu/index.m.less"),
				g = n.n(f);
			const E = d.a.wrapped(p.a, "_Dropdown", g.a),
				C = Object(u.a)(E),
				y = d.a.button("MenuButton", g.a),
				x = d.a.wrapped(m.b, "DropdownRow", g.a),
				v = Object(a.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(b.b)(t)(e)
				}),
				O = Object(i.b)(v, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				_ = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = O(e => s.a.createElement(y, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": o.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[g.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: _(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : s.a.createElement(h.a, {
				name: "overflow_horizontal",
				className: g.a.MenuIcon
			}), s.a.createElement(C, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/timeAgo/index.ts"),
				s = n("./src/lib/timeUntil/index.ts"),
				i = n("./node_modules/react/index.js"),
				a = n.n(i);

			function c(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return a.a.createElement("span", {
					className: e.className
				}, t ? o.fbt._("Voting closed {timeAgo}", [o.fbt._param("timeAgo", Object(r.d)(e.poll.endsAt / 1e3))], {
					hk: "3OERID"
				}) : Object(s.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/Poll/PostTitleMetaData/index.m.less": function(e, t, n) {
			e.exports = {
				proposalMetaData: "_3yYOHq_rWQcgaR_pinEQU7",
				proposalExpiry: "_1poH87fXNrjNu84jKXBtun"
			}
		},
		"./src/reddit/components/PollCreator/DefaultHintText/index.m.less": function(e, t, n) {
			e.exports = {
				helpTextItem: "wYdL1V7fxOtMwgvL8gt4a",
				helpTextList: "_23_RY8_TK404O0hdN7zpNn",
				helpTitle: "_3qXjOYMFBOO47HoteguQiz",
				helpTitleText: "_1NjVVC7kcVvJTLxxbNEi0S",
				infoIcon: "_2EKnk91_WzE7ao5vX6K5cC"
			}
		},
		"./src/reddit/components/PollCreator/EndDatePicker/index.m.less": function(e, t, n) {
			e.exports = {
				endDatePicker: "_11No5LInq3EU9b_SdtgV5r",
				title: "_2OgmT0eiv8yeZkNv_R4vFy",
				dateTime: "_24VUErhy8JiR-xw9cMsdx0",
				timeZone: "jHZVOve2QGoctU0iDnnCI",
				timeInput: "_1YzViNj-rqobl3wArJ3k_"
			}
		},
		"./src/reddit/components/PollCreator/Option/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1RbFYzRB1jybmSRJ1VD_3f",
				grapple: "_3uUTBg1zNH9BKBOP3vVw6R",
				input: "CdINWDy27JLWIBXz488aN",
				trash: "_3AvADfaxGi-rnV-WFuWxTA"
			}
		},
		"./src/reddit/components/PollCreator/PollTypePicker/index.m.less": function(e, t, n) {
			e.exports = {
				pollTypePicker: "drrpCJbRPvWIi1se7oigP",
				button: "_39suzYUnvfHrQXd0LE1RYx",
				pollTypePickerButton: "_28-N09acaS2LiVHc52ApJg",
				buttonContent: "_2_qeC1tN1L5P6Y0YRK53bG",
				buttonBackground: "_3RjfM9k2XuNzq3D4Zhj4uT",
				predictionLabel: "xRe7YxsTBpNw2SR22vmzr",
				education: "lqD-1gWpcZmY0UJOP1zSl"
			}
		},
		"./src/reddit/components/PollCreator/TournamentPicker/index.m.less": function(e, t, n) {
			e.exports = {
				tournamentPicker: "_25F8doc5ufAo8JIxMy7xJZ",
				title: "_16nXKAYcvkyC8JhINAzIRG",
				input: "jiVuYdcb1GhQgH7_UaB1P"
			}
		},
		"./src/reddit/components/PollCreator/index.m.less": function(e, t, n) {
			e.exports = {
				flexRow: "_2G4E6Ja1LjN3lvEFdvCAMM",
				addButton: "_1MW4m9_ojHA4AO_I1MhQf3",
				container: "_3S9C536IVs6t9fXO2fE_Yq",
				controls: "_2RaOqu97VZrV7eSMAd--Fj",
				help: "_1kYOBe87AO-Ly-PkWe8yd8",
				options: "_26J8Tm1n-2QR6K2VOyZvJk",
				votingLengthCaret: "ekKR9rTD5h3p7yQ4SaLoa",
				votingLengthDropdown: "_1Sbl_DKDMJM71lJ_1GQgbB",
				votingLengthDropdownContainer: "_24W8XLxQSgwVVFneYfHsJR",
				votingLengthSelector: "_3TH3dFaVjJ2OSx-B_N3pDU",
				votingLengthSelector__disabled: "_2Wc5VFPksdxez0HQRlpdeE",
				votingLengthSelectorDisabled: "_2Wc5VFPksdxez0HQRlpdeE",
				votingLengthTitleText: "_1-ozAll8fJXOJ9tr9TwS1r",
				votingLengthDisplay: "gj1NXudk861pHzMz3jvCj",
				predictionSettings: "HXVbpI7By73VaXfNbuqeV"
			}
		},
		"./src/reddit/components/PostCreationForm/Button/index.m.less": function(e, t, n) {
			e.exports = {
				PrimaryButton: "_18Bo5Wuo3tMV-RDB8-kh8Z",
				primaryButton: "_18Bo5Wuo3tMV-RDB8-kh8Z",
				SecondaryButton: "lUsjLveKkZWUAgDDyU1rD",
				secondaryButton: "lUsjLveKkZWUAgDDyU1rD"
			}
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1IZotn_IQQ1fgtUjaFYbkd",
				onHoverActionText: "_1Zlk1VrZ8puYZy5lJOfz--",
				Container: "_1IZotn_IQQ1fgtUjaFYbkd",
				PostTitle: "_1hzDym_NpIlizkTDXc_rQj",
				postTitle: "_1hzDym_NpIlizkTDXc_rQj",
				MetaLine: "_67JuJTdFwIJPLPDkyPX-f",
				metaLine: "_67JuJTdFwIJPLPDkyPX-f",
				SubredditName: "_88OYON0K3w_tpnmCSWlUX",
				subredditName: "_88OYON0K3w_tpnmCSWlUX",
				InfoSpan: "_3DFfW-OG-MvCLiiEN18mpq",
				infoSpan: "_3DFfW-OG-MvCLiiEN18mpq"
			}
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_1QvpnsvD_e--dvDTEcz7_w",
				wrapper: "_1QvpnsvD_e--dvDTEcz7_w",
				TopRow: "vuQEtla32r0kemmh11Hov",
				topRow: "vuQEtla32r0kemmh11Hov",
				TitleRow: "_1eSyFPTFSsfyp8BVxs83PB",
				titleRow: "_1eSyFPTFSsfyp8BVxs83PB",
				DetailsContainer: "_87UrrqUro4oVpXFAElZUX",
				detailsContainer: "_87UrrqUro4oVpXFAElZUX",
				ButtonRow: "_1CUOht5hsM0AF9T3Ox1yos",
				buttonRow: "_1CUOht5hsM0AF9T3Ox1yos",
				CloseWrapper: "_3OsXrjEdHgK1wJBfPX6IhR",
				closeWrapper: "_3OsXrjEdHgK1wJBfPX6IhR",
				Close: "_1TaKYhB80ExuTPoLaQZMRE",
				close: "_1TaKYhB80ExuTPoLaQZMRE",
				Empty: "_20K7F6rAgXGH5z83v7Ifiv",
				empty: "_20K7F6rAgXGH5z83v7Ifiv",
				EmptyImage: "_2eLeResic3Gc77W_edgNGt",
				emptyImage: "_2eLeResic3Gc77W_edgNGt",
				EmptyText: "_3t6VBoBsR8CGQvaPLHPjmW",
				emptyText: "_3t6VBoBsR8CGQvaPLHPjmW",
				FilterWrapper: "pKfhphFBuya82DYP2Q90X",
				filterWrapper: "pKfhphFBuya82DYP2Q90X",
				FilterInput: "_3W5cary86KmYWrVgEpGKPb",
				filterInput: "_3W5cary86KmYWrVgEpGKPb",
				SearchIcon: "_9T_dguVcd795c_vOyl9s4",
				searchIcon: "_9T_dguVcd795c_vOyl9s4",
				PlusIcon: "hfmgzmXCLe3hvSyZad9WP",
				plusIcon: "hfmgzmXCLe3hvSyZad9WP",
				CreateCollectionButton: "_34_h0zRV3AgFr_0sh99pKz",
				createCollectionButton: "_34_h0zRV3AgFr_0sh99pKz"
			}
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/lib/memoizeByReference/index.ts"),
				u = n("./src/reddit/actions/postCreation/general.ts"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/keycodes.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/controls/Input/index.tsx"),
				f = n("./src/reddit/icons/svgs/Close/index.tsx"),
				g = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				E = n("./src/reddit/icons/svgs/Search/index.tsx"),
				C = n("./src/reddit/layout/row/Inline/index.tsx"),
				y = n("./src/reddit/models/PostCreationForm/index.ts"),
				x = n("./src/reddit/selectors/postCollection.ts"),
				v = n("./src/lib/timeAgo/index.ts"),
				O = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				_ = n("./src/reddit/helpers/name/index.ts"),
				k = n("./src/reddit/models/Subreddit/index.ts"),
				S = n("./src/reddit/models/User/index.ts"),
				j = n("./src/reddit/selectors/subreddit.ts"),
				T = n("./src/reddit/selectors/user.ts"),
				w = n("./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less"),
				I = n.n(w),
				P = n("./src/lib/lessComponent.tsx");
			const {
				fbt: R
			} = n("./node_modules/fbt/lib/FbtPublic.js"), M = P.a.div("Container", I.a), N = P.a.h2("PostTitle", I.a), D = P.a.div("MetaLine", I.a), L = P.a.span("SubredditName", I.a), A = P.a.time("InfoSpan", I.a), F = Object(c.c)({
				subreddit: (e, {
					collection: {
						subredditId: t
					}
				}) => t ? Object(j.T)(e, {
					subredditId: t
				}) : void 0,
				user: T.j
			});
			class B extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onClick = () => {
						this.props.onClick(this.props.collection.id)
					}
				}
				render() {
					const {
						collection: e,
						subreddit: t,
						user: n,
						onHoverActionText: o
					} = this.props, r = t && Object(k.h)(t) && n ? Object(_.d)(Object(S.e)(n)) : t ? t.displayText : "", s = e.postIds.length;
					return i.a.createElement(M, {
						onClick: this.onClick,
						className: I.a.container
					}, i.a.createElement(N, {
						"data-redditstyle": !0
					}, e.title), i.a.createElement(D, {
						"data-redditstyle": !0
					}, r && i.a.createElement(L, {
						"data-redditstyle": !0
					}, r), r && i.a.createElement(O.b, null), i.a.createElement(A, null, R._({
						"*": "{number of posts} posts",
						_1: "1 post"
					}, [R._plural(s, "number of posts")], {
						hk: "1Uy96U"
					})), i.a.createElement(O.b, null), i.a.createElement(A, null, R._("created {time}", [R._param("time", Object(v.d)(e.createdAtUTC))], {
						hk: "2cUc5m"
					}))), o && i.a.createElement("div", {
						className: I.a.onHoverActionText
					}, i.a.createElement("span", null, o)))
				}
			}
			var U = Object(a.b)(F)(B),
				K = n("./src/reddit/helpers/trackers/postCollection.ts"),
				W = n("./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less"),
				G = n.n(W);
			const H = `${o.a.assetPath}/img/snoo-drafts.png`,
				q = P.a.div("TopRow", G.a),
				V = P.a.div("TitleRow", G.a),
				z = P.a.div("DetailsContainer", G.a),
				Q = P.a.wrapped(C.a, "ButtonRow", G.a),
				Y = P.a.div("CloseWrapper", G.a),
				J = P.a.wrapped(f.a, "Close", G.a),
				X = P.a.div("Empty", G.a),
				Z = P.a.img("EmptyImage", G.a),
				$ = P.a.p("EmptyText", G.a),
				ee = P.a.div("FilterWrapper", G.a),
				te = P.a.wrapped(b.a, "FilterInput", G.a),
				ne = P.a.wrapped(E.a, "SearchIcon", G.a),
				oe = P.a.wrapped(g.a, "PlusIcon", G.a),
				re = P.a.wrapped(h.m, "CreateCollectionButton", G.a),
				se = Object(l.a)((e, t) => {
					const n = t.toLowerCase();
					return e.filter(e => e.title.toLowerCase().includes(n))
				}),
				ie = Object(c.c)({
					collections: x.v
				}),
				ae = Object(a.b)(ie, (e, {
					postId: t,
					isOverlay: n
				}) => ({
					onOpenCreateCollectionModal: () => {
						let o = y.b;
						t && (o = Object(y.t)(t, !!n)), e(Object(u.x)(o))
					}
				}));
			class ce extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						filterStr: ""
					}, this.close = () => {
						this.props.sendEvent(Object(K.c)()), this.props.onClose()
					}, this.handleEscapeKey = e => {
						e.keyCode === m.a.Escape && this.close()
					}, this.handleCreateCollectionClicked = () => {
						this.props.onOpenCreateCollectionModal(), this.props.sendEvent(Object(K.j)())
					}, this.handleCollectionSelected = e => {
						this.props.onSelectCollection(e), this.props.sendEvent(Object(K.q)())
					}, this.onFilterStringChange = e => {
						this.setState({
							filterStr: e.target.value
						})
					}, this.renderItem = e => i.a.createElement(U, {
						key: e.id,
						collection: e,
						onClick: () => this.handleCollectionSelected(e),
						onHoverActionText: this.props.onItemHoverActionText
					})
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey), this.props.sendEvent(Object(K.d)())
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				renderNoCollections() {
					return i.a.createElement(X, null, i.a.createElement(Z, {
						src: H
					}), i.a.createElement($, null, r.fbt._("Your collections will live here", null, {
						hk: "FCxWg"
					})))
				}
				renderNoFilterMatches() {
					return i.a.createElement(X, null, i.a.createElement($, null, r.fbt._("No collection matching filter", null, {
						hk: "2vawdK"
					}), ";"))
				}
				render() {
					const {
						collections: e,
						titleText: t
					} = this.props;
					let n;
					if (0 === e.length) n = this.renderNoCollections();
					else {
						const t = se(e, this.state.filterStr);
						n = 0 === t.length ? this.renderNoFilterMatches() : t.map(this.renderItem)
					}
					return i.a.createElement("div", {
						className: G.a.wrapper,
						"data-redditstyle": !0
					}, i.a.createElement(q, null, i.a.createElement(V, {
						"data-redditstyle": !0
					}, t || r.fbt._("My collections", null, {
						hk: "3yKovS"
					}), i.a.createElement(Y, {
						onClick: this.close
					}, i.a.createElement(J, {
						"data-redditstyle": !0
					}))), i.a.createElement(ee, null, i.a.createElement(ne, null), i.a.createElement(te, {
						placeholder: r.fbt._("Find a collection", null, {
							hk: "3DbFBU"
						}),
						value: this.state.filterStr,
						onChange: this.onFilterStringChange
					}))), i.a.createElement(z, null, n), i.a.createElement(Q, null, i.a.createElement(re, {
						onClick: this.handleCreateCollectionClicked
					}, i.a.createElement(oe, null), r.fbt._("Create a collection", null, {
						hk: "37xJVm"
					}))))
				}
			}
			const de = Object(d.a)(ae(Object(p.c)(ce)));
			t.a = de
		},
		"./src/reddit/components/PostCreationForm/ControlRow/AddTournamentPredictionButton/index.m.less": function(e, t, n) {
			e.exports = {
				addTournamentPredictionButton: "_379A0ry8uhFTCCqbGtPG08",
				tooltip: "NKpm2s1DjP3vbRrlx4pxe"
			}
		},
		"./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/OCDisclaimer/index.m.less": function(e, t, n) {
			e.exports = {
				DontShowButton: "_1GOEXFnWfJy7WEF43f7RJk",
				dontShowButton: "_1GOEXFnWfJy7WEF43f7RJk",
				Component: "w3m9FyPsy2phDlWxoznhq",
				component: "w3m9FyPsy2phDlWxoznhq"
			}
		},
		"./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/PostModifierButton/index.m.less": function(e, t, n) {
			e.exports = {
				PostModifierButton: "_5x1WjCc4HQF6tqnODOql0",
				postModifierButton: "_5x1WjCc4HQF6tqnODOql0",
				active: "HvFw1XKOfl5Jh7Run7iq4",
				HoverTooltip: "zprH8YpG-gVpFuEr-eQJw",
				hoverTooltip: "zprH8YpG-gVpFuEr-eQJw",
				TintOverlay: "stbc2Exoq0W4ZkGltglct",
				tintOverlay: "stbc2Exoq0W4ZkGltglct",
				isDisabled: "_3rEHSruwAvICnPAngYiIW1",
				mShiftTooltipToTheRight: "gceWvjO6tPHW1sEDhwkGK",
				Icon: "_3DWz59jTNPem2lIMybAGb8",
				icon: "_3DWz59jTNPem2lIMybAGb8"
			}
		},
		"./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/index.m.less": function(e, t, n) {
			e.exports = {
				FlairComponent: "_2YM79GnDqrRjQQcFtEokkY",
				flairComponent: "_2YM79GnDqrRjQQcFtEokkY",
				FlairTextWrapper: "_1pXTTYLLHHqfgwyMuCqT6T",
				flairTextWrapper: "_1pXTTYLLHHqfgwyMuCqT6T",
				ModifierRow: "_2_rA2mCdhHc1Lr7Ff1ygvH",
				modifierRow: "_2_rA2mCdhHc1Lr7Ff1ygvH",
				AddFlair: "_1LD2Xsr3fioSkWZ13vMORC",
				addFlair: "_1LD2Xsr3fioSkWZ13vMORC",
				Text: "_2iXMeyQ3VxZmKCXkplOvQ_",
				text: "_2iXMeyQ3VxZmKCXkplOvQ_",
				TintOverlay: "_2vWD8kW1_iU4dc3CgY9_gH",
				tintOverlay: "_2vWD8kW1_iU4dc3CgY9_gH",
				FlairIcon: "_2U5dhGN1LkTGmvfDSXp7Pn",
				flairIcon: "_2U5dhGN1LkTGmvfDSXp7Pn",
				StyledCaretIcon: "MZjVSHyz_JYuVJV8JeezH",
				styledCaretIcon: "MZjVSHyz_JYuVJV8JeezH",
				mHasError: "_12W0J-fwDQQ6_tQ9fdpzqG",
				errorMessages: "_29DzChs2ytJ2zOxDSU_YZZ"
			}
		},
		"./src/reddit/components/PostCreationForm/ControlRow/ToggleDestCollectionButton/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_1FASP6jHc95Gr8_JE5NtRM",
				active: "_2cgz1Psg0iRSwK2eF0PY7a"
			}
		},
		"./src/reddit/components/PostCreationForm/ControlRow/index.m.less": function(e, t, n) {
			e.exports = {
				ButtonLayout: "_1T0P_YQg7fOYLCRoKl_xxO",
				buttonLayout: "_1T0P_YQg7fOYLCRoKl_xxO",
				buttonLayoutStyles: "_1BOItL6vmZFDKOuaOKKJHf",
				SaveDraftButtonLayout: "_2qdAvPbBMsK4TpwNnVe-pj",
				saveDraftButtonLayout: "_2qdAvPbBMsK4TpwNnVe-pj",
				Container: "_1d1--0DMy_jAIxCCoYMo1k",
				container: "_1d1--0DMy_jAIxCCoYMo1k",
				Divider: "_3DzaxETs3eHqVBAuiSTECq",
				divider: "_3DzaxETs3eHqVBAuiSTECq",
				ButtonsAndErrors: "_2DHDj0dbS1TkKD3fMqSbHy",
				buttonsAndErrors: "_2DHDj0dbS1TkKD3fMqSbHy",
				ButtonRow: "_2RmKGBRP9puAMQITZ7HMaB",
				buttonRow: "_2RmKGBRP9puAMQITZ7HMaB",
				errorMessages: "_2kLLxn1y9vaTeT0OAc-Ikc",
				PostLoadingIcon: "_2QZRXSFrX2qcSjZIV5mRzK",
				postLoadingIcon: "_2QZRXSFrX2qcSjZIV5mRzK",
				DraftLoadingIcon: "_4S5sqoV61IY7tpZqBwoKQ",
				draftLoadingIcon: "_4S5sqoV61IY7tpZqBwoKQ",
				postModifiers: "_2pAQpGYEPAVsPmV5uVmGGU",
				clockIcon: "_1z-5BtMZ_1-gl9JLssX5SJ",
				postScheduleButton: "_2cMg4VsPGSoc_OwPOPRAie",
				postScheduleIcon: "_1ND9PCHVFG_UrSPdlJqv5W",
				removeRightBorderRadius: "_1_Xn_Na9NfUSd_yoc1w2Eb"
			}
		},
		"./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3vV_tKesULQ5WMGh38lX4b",
				container: "_3vV_tKesULQ5WMGh38lX4b",
				Content: "_11JSvybbRhcX_cfoagpne_",
				content: "_11JSvybbRhcX_cfoagpne_",
				TitleRow: "_3Ev4JRxdS9-3GTBR5M1yCP",
				titleRow: "_3Ev4JRxdS9-3GTBR5M1yCP",
				Details: "_3Uw02TWwSQhLfCJkPsihqr",
				details: "_3Uw02TWwSQhLfCJkPsihqr",
				Footer: "_25MDqXgOCWDBjtAEBi2cmy",
				footer: "_25MDqXgOCWDBjtAEBi2cmy",
				CancelButton: "_2tLOIj2nClBaVRuMBIJE8X",
				cancelButton: "_2tLOIj2nClBaVRuMBIJE8X",
				CloseWrapper: "_GVnqGyX40oKfgIS56Q-k",
				closeWrapper: "_GVnqGyX40oKfgIS56Q-k",
				CloseIcon: "_1GgoANMMbLQJ-gSefDJZuZ",
				closeIcon: "_1GgoANMMbLQJ-gSefDJZuZ",
				Label: "_3QPFKpxsmu6j_gbiAuVgfW",
				label: "_3QPFKpxsmu6j_gbiAuVgfW",
				TitleInput: "ZEfw7a99aHsmkl4fx38l5",
				titleInput: "ZEfw7a99aHsmkl4fx38l5",
				AddCollectionIcon: "_30BNMMyQPTPvHEoL3-LXrM",
				addCollectionIcon: "_30BNMMyQPTPvHEoL3-LXrM",
				PrimaryActionButton: "_22f_S1XUre_FujBgOgEHJe",
				primaryActionButton: "_22f_S1XUre_FujBgOgEHJe",
				LoadingIcon: "_3cD2qECfUUTwega16qDhBc",
				loadingIcon: "_3cD2qECfUUTwega16qDhBc",
				ErrorText: "GIQ2YnBHQtY1QM1yPEhCR",
				errorText: "GIQ2YnBHQtY1QM1yPEhCR"
			}
		},
		"./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/lib/formatApiError/index.ts"),
				l = n("./src/reddit/actions/postCollection/index.ts"),
				u = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = n("./src/reddit/constants/postCreation.ts"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/controls/ErrorText/index.tsx"),
				b = n("./src/reddit/controls/Input/index.tsx"),
				f = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = n("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				E = n("./src/reddit/icons/svgs/Close/index.tsx"),
				C = n("./src/reddit/layout/row/Inline/index.tsx"),
				y = n("./src/reddit/selectors/postCollection.ts"),
				x = n("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less"),
				v = n.n(x),
				O = n("./src/lib/lessComponent.tsx");
			const _ = O.a.div("Container", v.a),
				k = O.a.div("Content", v.a),
				S = O.a.div("TitleRow", v.a),
				j = O.a.div("Details", v.a),
				T = O.a.wrapped(u.f, "Footer", v.a),
				w = O.a.wrapped(m.l, "CancelButton", v.a),
				I = O.a.div("CloseWrapper", v.a),
				P = O.a.wrapped(E.a, "CloseIcon", v.a),
				R = O.a.label("Label", v.a),
				M = O.a.wrapped(b.a, "TitleInput", v.a),
				N = O.a.wrapped(g.a, "AddCollectionIcon", v.a),
				D = O.a.wrapped(m.i, "PrimaryActionButton", v.a),
				L = O.a.wrapped(f.a, "LoadingIcon", v.a),
				A = O.a.wrapped(h.b, "ErrorText", v.a),
				F = Object(a.c)({
					collection: y.q,
					error: y.c,
					isPending: y.g
				}),
				B = Object(i.b)(F, (e, t) => ({
					onCreate: (t, n) => e(Object(l.b)(t, n)),
					onUpdate: n => e(Object(l.h)(t.collectionId, n))
				}));
			class U extends s.a.PureComponent {
				constructor(e) {
					super(e), this.onTitleChange = e => {
						this.setState({
							collectionTitle: e.target.value
						})
					}, this.onPrimaryButtonClick = async () => {
						const {
							collectionId: e,
							subredditId: t
						} = this.props, {
							collectionTitle: n
						} = this.state;
						if (e) {
							await this.props.onUpdate(n) && this.props.onCollectionUpdated && this.props.onCollectionUpdated()
						} else {
							const e = await this.props.onCreate(n, t);
							e && this.props.onCollectionCreated && this.props.onCollectionCreated(e)
						}
					}, this.onClose = () => {
						this.props.onCancel()
					};
					const {
						collection: t
					} = e;
					this.state = {
						collectionTitle: t ? t.title : ""
					}
				}
				render() {
					const {
						collectionId: e,
						error: t,
						isPending: n
					} = this.props, r = !e, i = !!this.state.collectionTitle.trim(), a = r ? o.fbt._("Create", null, {
						hk: "Ijp7n"
					}) : o.fbt._("Save", null, {
						hk: "2Onrrv"
					});
					return s.a.createElement(_, null, s.a.createElement(I, {
						onClick: this.props.onCancel
					}, s.a.createElement(P, null)), s.a.createElement(k, null, r && s.a.createElement(s.a.Fragment, null, s.a.createElement(S, null, s.a.createElement(N, null), o.fbt._("Create a collection", null, {
						hk: "3ndxk5"
					})), s.a.createElement(j, null, o.fbt._("Group posts into one feed. Create a series of events or just a group of random things. Make something awesome!", null, {
						hk: "2eCAQw"
					}))), s.a.createElement(R, null, r ? o.fbt._("Give a title for your collection", null, {
						hk: "Uaqbe"
					}) : o.fbt._("Edit title", null, {
						hk: "1jzweg"
					}), s.a.createElement(M, {
						maxLength: p.e,
						onChange: this.onTitleChange,
						placeholder: o.fbt._("Enter title", null, {
							hk: "3B0iRI"
						}),
						value: this.state.collectionTitle
					}))), s.a.createElement(T, null, s.a.createElement(C.a, null, s.a.createElement(w, {
						onClick: this.props.onCancel
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(D, {
						onClick: this.onPrimaryButtonClick,
						disabled: n || !i
					}, n ? s.a.createElement(L, {
						sizePx: 10
					}) : a)), t && s.a.createElement(A, null, Object(d.a)(t))))
				}
			}
			t.a = Object(c.a)(B(U))
		},
		"./src/reddit/components/PostCreationForm/CreationControls/index.m.less": function(e, t, n) {
			e.exports = {
				SubredditPicker: "k3D4EVssJ1w-8irx6jW6k",
				subredditPicker: "k3D4EVssJ1w-8irx6jW6k",
				ControlRow: "i0kJNtq5ma1uzbOX9_mM4",
				controlRow: "i0kJNtq5ma1uzbOX9_mM4"
			}
		},
		"./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/Icon.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2zmE2mxeSGThXfrD20TENk",
				component: "_2zmE2mxeSGThXfrD20TENk"
			}
		},
		"./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/Placeholder.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3s9TqP-_YHesViWXcd4cMj",
				container: "_3s9TqP-_YHesViWXcd4cMj",
				LeftBlock: "_3ZfLmI01IKam1zqUNiCCY6",
				leftBlock: "_3ZfLmI01IKam1zqUNiCCY6",
				Content: "_3GIbVaHf4QKOhABI3DhSMo",
				content: "_3GIbVaHf4QKOhABI3DhSMo",
				MediaIcon: "_31VuujawtoKX7A_ykq786h",
				mediaIcon: "_31VuujawtoKX7A_ykq786h",
				Title: "_24WZEeSSq6ekrxl4oZMhB3",
				title: "_24WZEeSSq6ekrxl4oZMhB3",
				Secondary: "_1a6BjjqFgWMfDd1GftKY3a",
				secondary: "_1a6BjjqFgWMfDd1GftKY3a"
			}
		},
		"./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2mGd4F9ksQ8wRlvFjnL0wz",
				container: "_2mGd4F9ksQ8wRlvFjnL0wz",
				LeftBlock: "_32kTNEqb0vEW5J0BmJdwnn",
				leftBlock: "_32kTNEqb0vEW5J0BmJdwnn",
				Content: "wrG0DeMFlU8RmFoT1gUDM",
				content: "wrG0DeMFlU8RmFoT1gUDM",
				RightBlock: "AnY3sJDM9Z2aUfyXs2Hfl",
				rightBlock: "AnY3sJDM9Z2aUfyXs2Hfl",
				PostTitle: "_25WWHqf4udQb0G9Wa_ar6s",
				postTitle: "_25WWHqf4udQb0G9Wa_ar6s",
				EditingPostTitle: "_3kH-PKnEjv45UIFAwY_XwK",
				editingPostTitle: "_3kH-PKnEjv45UIFAwY_XwK",
				MetaLine: "_1P65-c5DlnBqJL1jOa9TFr",
				metaLine: "_1P65-c5DlnBqJL1jOa9TFr",
				SubredditName: "_2cQKCpCLQTg1gPnnhEqZ6z",
				subredditName: "_2cQKCpCLQTg1gPnnhEqZ6z",
				DraftSavedTime: "Aegaj4-SLZNjFEolptURF",
				draftSavedTime: "Aegaj4-SLZNjFEolptURF",
				TrashIcon: "lWsFaDYxW8Sc4sqVTxVGv",
				trashIcon: "lWsFaDYxW8Sc4sqVTxVGv",
				InteractiveDiv: "_1nhwaUh9TlWeM5H9a_E18l",
				interactiveDiv: "_1nhwaUh9TlWeM5H9a_E18l",
				ConfirmDelete: "_3lIfF-MBpq24PJLxdGfIWQ",
				confirmDelete: "_3lIfF-MBpq24PJLxdGfIWQ"
			}
		},
		"./src/reddit/components/PostCreationForm/DraftListModal/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_29SuZj4Q_M_-p6FwlKJw2V",
				wrapper: "_29SuZj4Q_M_-p6FwlKJw2V",
				TitleRow: "_1t9vurufwtvAZm6k-7T1N0",
				titleRow: "_1t9vurufwtvAZm6k-7T1N0",
				DraftsNumber: "VA7GC_5VP6Yx4VSLaCW7T",
				draftsNumber: "VA7GC_5VP6Yx4VSLaCW7T",
				DetailsContainer: "_2ffvzlYi6yd1I-j5ndDKFm",
				detailsContainer: "_2ffvzlYi6yd1I-j5ndDKFm",
				ButtonRow: "_3JS6XDYnB0zNhQRfV4rLl0",
				buttonRow: "_3JS6XDYnB0zNhQRfV4rLl0",
				CancelButton: "_2AHvxdRmdK6Dve6_MNs6YW",
				cancelButton: "_2AHvxdRmdK6Dve6_MNs6YW",
				CloseWrapper: "_2put2qtgUIjmVIlQlZxeTb",
				closeWrapper: "_2put2qtgUIjmVIlQlZxeTb",
				Close: "_1Ojj3n0SwnEevN0xKAhtFi",
				close: "_1Ojj3n0SwnEevN0xKAhtFi",
				Empty: "_3j6Qa8OS7J6clTSNxqrADq",
				empty: "_3j6Qa8OS7J6clTSNxqrADq",
				EmptyImage: "_13SmMRVwMLfOrhzEqQQXrJ",
				emptyImage: "_13SmMRVwMLfOrhzEqQQXrJ",
				EmptyText: "_2OF81CBhfbV9gjOU-5n9Dr",
				emptyText: "_2OF81CBhfbV9gjOU-5n9Dr",
				DraftListModal: "_2bMp7e8oHvukp1hKtlg1r-",
				draftListModal: "_2bMp7e8oHvukp1hKtlg1r-"
			}
		},
		"./src/reddit/components/PostCreationForm/EduTooltips/BaseEduTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1LVDV1pks4den73WWY46GI",
				contentContainer: "_3v3OHx0_DIBm8WcTKrQ_Vj",
				description: "_1ZyYR40qdR1KVaYW3JJnFF",
				gotIt: "_31UHkJmzR05A-oHijI9dsj",
				hero: "_3KJU9tTmfe-f0PGdg1hJ6O",
				icon: "_1TqYQFIF_2oaFDavvx7TEE",
				iconExplanation: "_2gaQgwvoc2dROc2Uramfat",
				iconsExplanations: "_1IKgmmXb6LA2blrkyfqnxx",
				title: "_1ZeryymPzBgAm7zK9oPs3l",
				Container: "_1LVDV1pks4den73WWY46GI",
				OuterContainer: "_3cH-rE_yhLIp3GscF-WShj",
				outerContainer: "_3cH-rE_yhLIp3GscF-WShj"
			}
		},
		"./src/reddit/components/PostCreationForm/EduTooltips/CollectionButtonTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3zSOhojke1hMymIth30Ue"
			}
		},
		"./src/reddit/components/PostCreationForm/EduTooltips/EventButtonTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_RsSSHM-K9MvWN3u6Jxnf"
			}
		},
		"./src/reddit/components/PostCreationForm/LinkEditor/index.m.less": function(e, t, n) {
			e.exports = {
				URLInput: "_3zY6b4QJpSz1067ahq73_K",
				urlInput: "_3zY6b4QJpSz1067ahq73_K",
				mHasError: "_1WipnslOO1oVfOEMxsrYU3"
			}
		},
		"./src/reddit/components/PostCreationForm/MarkdownEditor/index.m.less": function(e, t, n) {
			e.exports = {
				LoadingIcon: "dyBWJSV5slC_6_q-avEAz",
				loadingIcon: "dyBWJSV5slC_6_q-avEAz",
				ModeDescription: "_2wjlEqW6Mz7pFfwBHVpPEA",
				modeDescription: "_2wjlEqW6Mz7pFfwBHVpPEA",
				ModeWrapper: "_2IWlVWhYLpVswet-ElQ9xx",
				modeWrapper: "_2IWlVWhYLpVswet-ElQ9xx",
				SwitchModeButton: "_2POD_tWc9UVvI3zBwPH9Yu",
				switchModeButton: "_2POD_tWc9UVvI3zBwPH9Yu",
				MarkdownHelpButton: "oqXBQCZarmL4V15c4Izxm",
				markdownHelpButton: "oqXBQCZarmL4V15c4Izxm",
				Toolbar: "_1HVLi6b9dq2O2gkgGAO1Fa",
				toolbar: "_1HVLi6b9dq2O2gkgGAO1Fa"
			}
		},
		"./src/reddit/components/PostCreationForm/MarkdownEditor/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/postCreation/general.ts"),
				d = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx"),
				l = n("./src/reddit/components/FocusableContent/index.tsx"),
				u = n("./src/reddit/components/MarkdownHelp/index.tsx"),
				p = n("./src/reddit/components/PostCreationForm/Prompt/index.tsx"),
				m = n("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				h = n("./src/reddit/constants/keycodes.ts"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = n("./src/reddit/models/PostCreationForm/index.ts"),
				E = n("./src/reddit/selectors/activeModalId.ts"),
				C = n("./src/reddit/selectors/editorContent.ts"),
				y = n("./src/reddit/components/PostCreationForm/MarkdownEditor/index.m.less"),
				x = n.n(y),
				v = n("./src/lib/lessComponent.tsx");
			const O = v.a.wrapped(f.a, "LoadingIcon", x.a),
				_ = ({
					isFilled: e,
					...t
				}) => s.a.createElement(O, t),
				k = v.a.span("ModeDescription", x.a),
				S = v.a.div("ModeWrapper", x.a),
				j = v.a.wrapped(d.a, "MarkdownHelpButton", x.a),
				T = v.a.div("Toolbar", x.a),
				w = Object(a.c)({
					activeModalId: E.a,
					isConverting: e => Object(C.a)(e)
				}),
				I = Object(i.b)(w, (e, t) => ({
					onChange: n => {
						e(Object(c.c)(n)), t.onChange && t.onChange(n)
					},
					helpModalToggled: () => e(Object(c.x)(u.b)),
					switchToRTEModalToggled: () => e(Object(c.x)(p.a.SWITCH_TO_RTE_MODAL_ID))
				}));
			class P extends s.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.onChange = e => {
						const {
							value: t
						} = e.currentTarget;
						this.props.onChange(t)
					}, this.onBlur = () => {
						this.setState({
							isFocused: !1
						}), this.props.onBlur && this.props.onBlur()
					}, this.onFocus = () => {
						const {
							onFocus: e
						} = this.props;
						e && e(), this.setState({
							isFocused: !0
						})
					}, this.handleKeyDown = e => {
						const {
							ctrlKey: t,
							metaKey: n,
							keyCode: o
						} = e;
						(t || n) && o === h.a.Enter && this.props.onSubmit()
					}, this.handleSwitchModeClick = () => {
						this.props.value ? this.props.switchToRTEModalToggled() : this.props.onSwitchEditorMode(g.h.RICH_TEXT, this.props.value)
					}, this.handleSwitchToRTEConfirm = () => {
						this.props.switchToRTEModalToggled(), this.props.onSwitchEditorMode(g.h.RICH_TEXT, this.props.value)
					}, this.setTextAreaRef = e => this.textAreaRef = e, this.state = {
						isFocused: !1
					}
				}
				componentDidMount() {
					const {
						instanceRef: e
					} = this.props;
					e && e(this)
				}
				componentWillUnmount() {
					const {
						instanceRef: e
					} = this.props;
					e && e(null)
				}
				focus() {
					this.textAreaRef && this.textAreaRef.focus()
				}
				render() {
					const {
						className: e,
						isConverting: t,
						placeholderText: n,
						focusableContentMarkdownClassName: r,
						value: i
					} = this.props, {
						isFocused: a
					} = this.state;
					return s.a.createElement("div", {
						className: e
					}, s.a.createElement(l.a, {
						className: r,
						isFocused: a
					}, s.a.createElement(T, null, s.a.createElement(S, null, s.a.createElement(k, null, o.fbt._("Markdown", null, {
						hk: "42KuwU"
					})), s.a.createElement(j, {
						onClick: this.props.helpModalToggled
					})), s.a.createElement(R, {
						isConverting: t,
						onClick: this.handleSwitchModeClick
					})), s.a.createElement(m.a, {
						disabled: !!this.props.disabled,
						initialHeight: this.props.initialHeight,
						innerRef: this.setTextAreaRef,
						onBlur: this.onBlur,
						onChange: this.onChange,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.onFocus,
						onKeyDown: this.handleKeyDown,
						placeholder: n,
						value: i
					})), this.props.activeModalId === u.b && s.a.createElement(u.a, null), this.props.activeModalId === p.a.SWITCH_TO_RTE_MODAL_ID && s.a.createElement(p.b, {
						modalId: p.a.SWITCH_TO_RTE_MODAL_ID,
						onCancel: this.props.switchToRTEModalToggled,
						onConfirm: this.handleSwitchToRTEConfirm
					}))
				}
			}
			const R = s.a.memo(({
				isConverting: e,
				onClick: t
			}) => {
				const n = o.fbt._("Switch to Fancy Pants Editor", null, {
					hk: "1AKY7t"
				});
				return s.a.createElement(b.q, {
					priority: b.b.Plain,
					size: b.c.XS,
					onClick: t,
					Icon: e ? _ : void 0,
					text: n
				})
			});
			t.a = I(P)
		},
		"./src/reddit/components/PostCreationForm/MediaInput/DropArea/index.m.less": function(e, t, n) {
			e.exports = {
				HiddenInput: "sU2P34us34ODfjtvAFHEh",
				hiddenInput: "sU2P34us34ODfjtvAFHEh",
				UploadButton: "_3O09Fh0CTb1KXH9g--pyTm",
				uploadButton: "_3O09Fh0CTb1KXH9g--pyTm",
				HamsterSmall: "_2O_N8Ef-BG5Cfd4rpYn2gC",
				hamsterSmall: "_2O_N8Ef-BG5Cfd4rpYn2gC",
				HamsterLarge: "wV8IXIxvKm8PPZrR4ID63",
				hamsterLarge: "wV8IXIxvKm8PPZrR4ID63",
				Container: "_1Ts5GUNze2r03Hs4YNM7R7",
				container: "_1Ts5GUNze2r03Hs4YNM7R7",
				DropArea: "_1U5lLS9mQzBY-ItvbtGGLz",
				dropArea: "_1U5lLS9mQzBY-ItvbtGGLz",
				DropAreaActive: "_3dk8Anard_IzanCLoEOxwY",
				dropAreaActive: "_3dk8Anard_IzanCLoEOxwY",
				DropAreaOver: "_2u00X-QMmF0nCuc0JgGiPG",
				dropAreaOver: "_2u00X-QMmF0nCuc0JgGiPG",
				Paragraph: "_23Ktfv_B7IB6GfAwZ1n5KM",
				paragraph: "_23Ktfv_B7IB6GfAwZ1n5KM",
				ErrorMsg: "_1g07w9noInEjzrHqFqXu7p",
				errorMsg: "_1g07w9noInEjzrHqFqXu7p",
				Box: "_2bMJxWQqwzcVG4QCyh3UhG",
				box: "_2bMJxWQqwzcVG4QCyh3UhG"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/MultipleUploadStatusBar/index.m.less": function(e, t, n) {
			e.exports = {
				ControlRow: "XAYmQCRZd6pa1gK4J2Irv",
				controlRow: "XAYmQCRZd6pa1gK4J2Irv",
				OuterDivProgressBar: "_3lnXFUS1rk-i2bmQ9tBVAg",
				outerDivProgressBar: "_3lnXFUS1rk-i2bmQ9tBVAg",
				ProgressBar: "_2h9OzlkpNau2hE61muUCcM",
				progressBar: "_2h9OzlkpNau2hE61muUCcM",
				Status: "_2QlfNrUATpUf8fxWF3xLUc",
				status: "_2QlfNrUATpUf8fxWF3xLUc"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/AddImageItem.m.less": function(e, t, n) {
			e.exports = {
				AddImageWrapper: "_3mOObaE2qUuGBwPZt06QMP",
				addImageWrapper: "_3mOObaE2qUuGBwPZt06QMP",
				AddImageItem: "_1PHeBCrOhYxisqmUW-NOTZ",
				addImageItem: "_1PHeBCrOhYxisqmUW-NOTZ",
				plusIcon: "_3fjztH0o3WW8ugsD8VUpdG",
				hiddenInput: "_8GGSjoMJRi3bIAaFgk5VT"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/ImageItem.m.less": function(e, t, n) {
			e.exports = {
				GalleryMediaUpload: "_3cm8_J6ytCvL4Z0YkUO6fO",
				galleryMediaUpload: "_3cm8_J6ytCvL4Z0YkUO6fO",
				isDragging: "_1hQY_UY2EioccXnSHJuH2j",
				isSelected: "_3mV402dYSBG5F3rfKzCHih",
				isError: "_10Cb6hifpOfnmfdg7Zetit",
				galleryImage: "-_ofbVTDK5uSQ60HcXH2-",
				deleteButton: "_3611iw8TKLU1FFCTSMHMWl",
				deleteIcon: "_1RI3AZPuym8dOTJt-TRI38",
				showDeleteNormal: "_2LKMLYT_7bo_5rfh9705Pg"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/ImageItemsWrapper.m.less": function(e, t, n) {
			e.exports = {
				itemsWrapper: "_3BGk3QOycswdTTmIh9R56y",
				sortableImages: "_7eeHxLESKnWVh8uefc7iN",
				imageStyles: "_2175QbehBw28eJRKOGrVKp",
				hoverMarker: "_1q50A238Zq0unVV8sFYvEm",
				pendingItem: "_1liymuUZSLP_05fSC0_0iQ"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/InputWrapper.m.less": function(e, t, n) {
			e.exports = {
				inputWrapper: "_1ZgKdgcmpiQuMxVOb36gpi",
				inputStyles: "_3QhJ8Am-icOjVUrut4LpNH",
				urlInputStyles: "_2P6NoGE4s1hTODn5PMPuIh",
				charsCounter: "_18XDqj2Sr9Pi7101fkIdE3"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/Layout.m.less": function(e, t, n) {
			e.exports = {
				Layout: "_3uExMaQ9CE8L0F97PE7ESO",
				layout: "_3uExMaQ9CE8L0F97PE7ESO",
				hero: "_3cjkwfQbHf5cGuN_2K1uvN",
				mainContent: "D_D1mksZjLSJKHZf-qFgh",
				sideMetaContent: "_3s8GQtCSn-VS8biCUpM7QQ",
				bottomContent: "_1ipt9uyZjJ4fiF29YsWqgy"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/SelectedImage.m.less": function(e, t, n) {
			e.exports = {
				selectedImage: "_1HQ9Q4NlQY-2w_yLQXa4MW",
				pendingImage: "_16rNFI0ovowGxjX85OoDQ7"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			}));
			const o = 20,
				r = 180
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/index.m.less": function(e, t, n) {
			e.exports = {
				dropArea: "_37BTO6li-OWodKOMQsps09",
				isDropAreaActive: "OPoLiV8gJNj-kgaS3TA6s",
				isDropAreaOver: "_2dpUJvIRjH1lQlhWr9Ln7B",
				errorMessage: "_1geBZyOTOcY8e2hp9dLJBb"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/Preview/index.m.less": function(e, t, n) {
			e.exports = {
				Img: "_2CZpGuT-0gMB2CW-1Z4Rzr",
				img: "_2CZpGuT-0gMB2CW-1Z4Rzr",
				BlurImg: "_3lXopXY4SQ5xn1DGFU-6mv",
				blurImg: "_3lXopXY4SQ5xn1DGFU-6mv",
				ImagePreview: "_1x86R_C1SXWhk5Ta6ZwgCE",
				imagePreview: "_1x86R_C1SXWhk5Ta6ZwgCE",
				VideoPreview: "_1qFo28RpDjnwvvZFYuoYw1",
				videoPreview: "_1qFo28RpDjnwvvZFYuoYw1",
				Component: "_32O_ZBzCA0KWydc-ydD4Ut",
				component: "_32O_ZBzCA0KWydc-ydD4Ut"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/UploadStatusBar/index.m.less": function(e, t, n) {
			e.exports = {
				ControlRow: "_2UeBgPJSAh_VteJrmt29jr",
				controlRow: "_2UeBgPJSAh_VteJrmt29jr",
				Button: "mU3hHnDkWt1Fu4t0MzJ3D",
				button: "mU3hHnDkWt1Fu4t0MzJ3D",
				Status: "_2tgT4LseX3Xg9TNczoQt_8",
				status: "_2tgT4LseX3Xg9TNczoQt_8",
				Component: "_1ou_efVZQLBrztRrswvRdK",
				component: "_1ou_efVZQLBrztRrswvRdK"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_2WJ7xvGE_xrehqTKCrcVpN",
				wrapper: "_2WJ7xvGE_xrehqTKCrcVpN",
				UploadStatusBar: "_1cAEFWtInMytYP6NpKBxK7",
				uploadStatusBar: "_1cAEFWtInMytYP6NpKBxK7",
				Controls: "_2Hg3aAL1qjiKtlSICSWx59",
				controls: "_2Hg3aAL1qjiKtlSICSWx59",
				ThumbnailSelect: "_3Beo1Ag8mmirgP8ObHTty9",
				thumbnailSelect: "_3Beo1Ag8mmirgP8ObHTty9",
				Trash: "_18Z2AbfCvCglpgZoyExSaS",
				trash: "_18Z2AbfCvCglpgZoyExSaS"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/RemovePrompt/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "RbI4r-xLIZTGjyNNqMkc2",
				wrapper: "RbI4r-xLIZTGjyNNqMkc2",
				TitleRow: "_3KkK2UFvbWMkRb887z28Ay",
				titleRow: "_3KkK2UFvbWMkRb887z28Ay",
				DetailsContainer: "_3x1u7rU-TVemMtzZVifQk",
				detailsContainer: "_3x1u7rU-TVemMtzZVifQk",
				ButtonRow: "_1rR3d9OXZt1cL70vCFunZP",
				buttonRow: "_1rR3d9OXZt1cL70vCFunZP",
				CancelButton: "_2JpoeseNULOIs1m0HM_FkJ",
				cancelButton: "_2JpoeseNULOIs1m0HM_FkJ",
				ConfirmButton: "_1-56PBUj1A-mgJh4Uhz5Jd",
				confirmButton: "_1-56PBUj1A-mgJh4Uhz5Jd"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1UbcPNs4A8n5PIWX0H5sGt",
				container: "_1UbcPNs4A8n5PIWX0H5sGt"
			}
		},
		"./src/reddit/components/PostCreationForm/PostCreationFooter/PostSettings/Hint/index.m.less": function(e, t, n) {
			e.exports = {
				Info: "_2kALbPZ2PwY7w-w3Mtrxpl",
				info: "_2kALbPZ2PwY7w-w3Mtrxpl",
				TooltipContent: "c_vthvCq93OKrS5BGZYdr",
				tooltipContent: "c_vthvCq93OKrS5BGZYdr",
				Hint: "_2yxSY9022XfAJtQVxxa1lL",
				hint: "_2yxSY9022XfAJtQVxxa1lL",
				HoverTooltip: "_3M5yvX2tFyuTet4AEPmVDL",
				hoverTooltip: "_3M5yvX2tFyuTet4AEPmVDL",
				tooltipContentClass: "_2AY8LM9XpfuTjCMB4PF1mj"
			}
		},
		"./src/reddit/components/PostCreationForm/PostCreationFooter/PostSettings/index.m.less": function(e, t, n) {
			e.exports = {
				CheckboxInput: "rLLDF6zuY7gDPdOpDtryW",
				checkboxInput: "rLLDF6zuY7gDPdOpDtryW",
				ConnectAccountLink: "_2XixtsvkuzAkwuKe93t7Bd",
				connectAccountLink: "_2XixtsvkuzAkwuKe93t7Bd",
				Container: "_1WZBFo38dOAZ_-qyyA6sNh",
				container: "_1WZBFo38dOAZ_-qyyA6sNh",
				ContainerLeft: "ncWlnJtypP1_Mwohv06zd",
				containerLeft: "ncWlnJtypP1_Mwohv06zd",
				ContainerRight: "_1rdhEwGT1578MFV4zdgyXX",
				containerRight: "_1rdhEwGT1578MFV4zdgyXX",
				CheckboxText: "_1sBmqB8geWKIW5Nt8svFgc",
				checkboxText: "_1sBmqB8geWKIW5Nt8svFgc",
				Option: "_367d1mrPAvSzXPXQZfPXq5",
				option: "_367d1mrPAvSzXPXQZfPXq5",
				TextButton: "_5SJ8wEtj0ehde_UTuEUJL",
				textButton: "_5SJ8wEtj0ehde_UTuEUJL",
				TextBox: "_1TBGkOAQIuFnbqFv3ePDxT",
				textBox: "_1TBGkOAQIuFnbqFv3ePDxT",
				Wrapper: "_2CXYv7vwpCTLV6wKUwqkBz",
				wrapper: "_2CXYv7vwpCTLV6wKUwqkBz"
			}
		},
		"./src/reddit/components/PostCreationForm/PostCreationFooter/ScheduledTimeInfo/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3iy2yiZt_m40oq7tdW_klw",
				container: "_3iy2yiZt_m40oq7tdW_klw",
				replayIcon: "_2ks2fE4UUmcEWL1vQnR7wp"
			}
		},
		"./src/reddit/components/PostCreationForm/PostCreationFooter/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_22Te0a5VxZnLITkTavQh95",
				container: "_22Te0a5VxZnLITkTavQh95"
			}
		},
		"./src/reddit/components/PostCreationForm/PostCreationHeader/index.m.less": function(e, t, n) {
			e.exports = {
				CreateLabel: "_3M6BmdyQcCEQZu-MylN14",
				createLabel: "_3M6BmdyQcCEQZu-MylN14",
				CountIndicator: "_3-lCASba1yl0jeRpeQ5jwm",
				countIndicator: "_3-lCASba1yl0jeRpeQ5jwm",
				LinkButton: "_3KQDVc4kBIwA5u7S9n99NQ",
				linkButton: "_3KQDVc4kBIwA5u7S9n99NQ",
				CreatePostHeader: "_1HWpiNu6dkOnZixxwDYTVJ",
				createPostHeader: "_1HWpiNu6dkOnZixxwDYTVJ"
			}
		},
		"./src/reddit/components/PostCreationForm/PostEditor/GovTypeSelector/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1kR_hX_PP5udhk-mtPuavx",
				currentSelection: "_1ZxmKr4SrkV__KWvI2gxKt",
				flexRow: "wIleinjtpdijasCWI_jCU",
				dropdownIcon: "oK9t9SNnOOCu-BraimNJE",
				newLabel: "_1pi_9nWsspppnkpr0Km1Hl",
				pollTypeIcon: "_1ZEeQaLhgbqgxX5zvvM2OO",
				text: "_3BIAW_hHKHgVyTnhczBT4A"
			}
		},
		"./src/reddit/components/PostCreationForm/PostEditor/index.m.less": function(e, t, n) {
			e.exports = {
				focusableContent: "Mb0x12Cu8JKRJRJCcf9_K",
				mPollBorder: "_3tqYz5xeUZo9em1LrxMZOB",
				mHasError: "_24RennTZzi_jyZ_kdBt9U2",
				govToggle: "_2VmXXwMxyQk230gkKvJTzF",
				pollCreator: "_3GqK73QyFc10CoXE2bReko"
			}
		},
		"./src/reddit/components/PostCreationForm/PostTitle/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3zkbHfhLbXp21FwGj_kNZV",
				inputWrapper: "_2wyvfFW3oNcCs5GVkmcJ8z",
				PostTitleInput: "_1ec_Oj5SWdypd8L-VELKg-",
				postTitleInput: "_1ec_Oj5SWdypd8L-VELKg-",
				mHasError: "_1dItJbdjTchVLwC0krCsr3",
				charsCounter: "_10vnCUi_uRLhIdKnPglWAw"
			}
		},
		"./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less": function(e, t, n) {
			e.exports = {
				PrimaryButton: "_35XIX8S5eAkigMxHxx98TS",
				primaryButton: "_35XIX8S5eAkigMxHxx98TS",
				ModalText: "_1ShPAP1uGnX3ZkiyNiigAA",
				modalText: "_1ShPAP1uGnX3ZkiyNiigAA"
			}
		},
		"./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = n("./src/reddit/constants/keycodes.ts"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = n("./src/reddit/controls/TextButton/index.tsx"),
				u = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				p = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less"),
				m = n.n(p),
				h = n("./src/lib/lessComponent.tsx");
			const b = h.a.wrapped(c.i, "PrimaryButton", m.a),
				f = h.a.wrapped(i.o, "ModalText", m.a);
			class g extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === a.a.Escape && this.props.onClose()
					}
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					const {
						primaryButtonLoading: e,
						secondaryButtonLoading: t
					} = this.props;
					return r.a.createElement(i.d, null, r.a.createElement(i.h, null, r.a.createElement(u.a, null, r.a.createElement(i.p, null, this.props.titleText), r.a.createElement(l.a, {
						onClick: this.props.onClose
					}, r.a.createElement(i.b, null)))), r.a.createElement(i.k, null, r.a.createElement(f, null, this.props.bodyText)), r.a.createElement(i.f, null, r.a.createElement(i.a, {
						onClick: this.props.onSecondaryAction
					}, t ? r.a.createElement(d.a, {
						sizePx: 16
					}) : this.props.secondaryButtonText), r.a.createElement(b, {
						onClick: this.props.onPrimaryAction
					}, e ? r.a.createElement(d.a, {
						sizePx: 16
					}) : this.props.primaryButtonText)))
				}
			}
			t.a = Object(s.a)(g)
		},
		"./src/reddit/components/PostCreationForm/Prompt/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var o, r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx");
			! function(e) {
				e.LOAD_DRAFT_MODAL_ID = "POST_CREATION__LOAD_DRAFT_MODAL_ID", e.MAX_DRAFTS_MODAL_ID = "POST_CREATION__MAX_DRAFTS_MODAL_ID", e.SWITCH_TO_RTE_MODAL_ID = "MARKDOWN_EDITOR__SWITCH_TO_RTE_MODAL_ID"
			}(o || (o = {}));
			const c = {
					title: () => r.fbt._("Load draft", null, {
						hk: "VQ7SS"
					}),
					body: () => r.fbt._("Loading this draft will discard your current post.", null, {
						hk: "49vMci"
					}),
					confirm: () => r.fbt._("Load Draft", null, {
						hk: "29mFSs"
					}),
					cancel: () => r.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				},
				d = {
					title: () => r.fbt._("Save draft", null, {
						hk: "36SGct"
					}),
					body: () => r.fbt._("Looks like you’ve hit your max number of drafts. Please delete one to make room.", null, {
						hk: "4g9gOF"
					}),
					confirm: () => r.fbt._("Manage Drafts", null, {
						hk: "3a6SXJ"
					}),
					cancel: () => r.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				},
				l = {
					title: () => r.fbt._("Switch to Fancy Pants Editor", null, {
						hk: "22mr8J"
					}),
					body: () => r.fbt._("Switching to Fancy Pants Editor may result in a loss of content", null, {
						hk: "1cWryd"
					}),
					confirm: () => r.fbt._("Switch", null, {
						hk: "36pRzE"
					}),
					cancel: () => r.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				},
				u = {
					[o.LOAD_DRAFT_MODAL_ID]: c,
					[o.MAX_DRAFTS_MODAL_ID]: d,
					[o.SWITCH_TO_RTE_MODAL_ID]: l
				};
			class p extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onCancel = () => {
						this.props.onCancel(this.props.modalId)
					}, this.onConfirm = () => {
						this.props.onConfirm(this.props.modalId)
					}
				}
				render() {
					const {
						modalId: e
					} = this.props, t = u[e];
					return i.a.createElement(a.a, {
						bodyText: t.body(),
						secondaryButtonText: t.cancel(),
						primaryButtonText: t.confirm(),
						titleText: t.title(),
						onClose: this.onCancel,
						onPrimaryAction: this.onConfirm,
						onSecondaryAction: this.onCancel
					})
				}
			}
			t.b = p
		},
		"./src/reddit/components/PostCreationForm/RecaptchaOverlay/index.m.less": function(e, t, n) {
			e.exports = {
				OverlayWrapper: "_36HnnNoO8oBJDJnOgDiENG",
				overlayWrapper: "_36HnnNoO8oBJDJnOgDiENG",
				OverlayContent: "_3Ye_87oAzGPJr-7DymIhl0",
				overlayContent: "_3Ye_87oAzGPJr-7DymIhl0",
				ExplanationText: "_17qYQd3F9TbaKxu_Q0ssNq",
				explanationText: "_17qYQd3F9TbaKxu_Q0ssNq"
			}
		},
		"./src/reddit/components/PostCreationForm/SafeHarborText/index.m.less": function(e, t, n) {
			e.exports = {
				TextContainer: "_3sXblbCnnsbtHR0izSxX-Q",
				textContainer: "_3sXblbCnnsbtHR0izSxX-Q"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/FallbackDateInput/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3A53iTDZ6H1L--Ky3qNCTO",
				container: "_3A53iTDZ6H1L--Ky3qNCTO",
				Select: "_2ryUqzbCnNhx8nbFXg9-c0",
				select: "_2ryUqzbCnNhx8nbFXg9-c0",
				Delimiter: "_1X2oFpzvpth9SVe2-xCR9D",
				delimiter: "_1X2oFpzvpth9SVe2-xCR9D"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.m.less": function(e, t, n) {
			e.exports = {
				Input: "_1Css-vhkiry0RZJBBPrnRI",
				input: "_1Css-vhkiry0RZJBBPrnRI"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			}));
			var o = n("./node_modules/lodash/once.js"),
				r = n.n(o),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./node_modules/lodash/range.js"),
				c = n.n(a),
				d = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/FallbackDateInput/index.m.less"),
				l = n.n(d),
				u = n("./src/lib/lessComponent.tsx");
			const p = u.a.div("Container", l.a),
				m = u.a.select("Select", l.a),
				h = u.a.span("Delimiter", l.a),
				b = 2018,
				f = e => {
					const t = new Date;
					return new Date(t.getFullYear(), e).toLocaleDateString([], {
						month: "short"
					})
				},
				g = e => {
					const [t, n, o] = e.split("-").map(Number);
					return {
						year: t,
						month: n - 1,
						day: o
					}
				};
			class E extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onChange = e => {
						const t = {
								...g(this.props.value),
								...e
							},
							{
								year: n,
								month: o,
								day: r
							} = t,
							s = new Date(Date.UTC(n, o, r)).toISOString().slice(0, 10);
						this.props.onChange(s)
					}, this.onChangeYear = e => {
						const t = +e.target.value;
						this.onChange({
							year: t
						})
					}, this.onChangeMonth = e => {
						const t = +e.target.value;
						this.onChange({
							month: t
						})
					}, this.onChangeDay = e => {
						const t = +e.target.value;
						this.onChange({
							day: t
						})
					}
				}
				render() {
					const {
						year: e,
						month: t,
						day: n
					} = g(this.props.value);
					return i.a.createElement(p, {
						className: this.props.className
					}, i.a.createElement(m, {
						onChange: this.onChangeMonth,
						value: t
					}, c()(12).map(e => i.a.createElement("option", {
						key: e,
						value: e
					}, f(e)))), i.a.createElement(h, null, "/"), i.a.createElement(m, {
						onChange: this.onChangeDay,
						value: n
					}, c()(1, 32).map(e => i.a.createElement("option", {
						key: e,
						value: e
					}, ("0" + e).slice(-2)))), i.a.createElement(h, null, "/"), i.a.createElement(m, {
						onChange: this.onChangeYear,
						value: e
					}, c()(b, b + 10).map(e => i.a.createElement("option", {
						key: e,
						value: e
					}, e))))
				}
			}
			var C = E,
				y = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.m.less"),
				x = n.n(y);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const O = r()(() => {
					const e = document.createElement("input");
					return e.setAttribute("type", "date"), e.setAttribute("value", "not-a-date"), "not-a-date" !== e.value
				}),
				_ = u.a.input("Input", x.a);

			function k(e) {
				return O() ? i.a.createElement(_, v({
					type: "date"
				}, e, {
					onChange: t => e.onChange(t.target.value)
				})) : i.a.createElement(C, e)
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/FallbackTimeInput/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "Q-u1MdpyF-DbsLmmseQmg",
				container: "Q-u1MdpyF-DbsLmmseQmg",
				Input: "_2UYlo-ZbVNGY329O9jwCzC",
				input: "_2UYlo-ZbVNGY329O9jwCzC",
				Delimiter: "_2a_r5Jp8FH3k8flNGKLy5f",
				delimiter: "_2a_r5Jp8FH3k8flNGKLy5f"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.m.less": function(e, t, n) {
			e.exports = {
				TimeInput: "gRgwdQKTQf9yT3db3ACAy",
				timeInput: "gRgwdQKTQf9yT3db3ACAy"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			}));
			var o = n("./node_modules/lodash/once.js"),
				r = n.n(o),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./node_modules/lodash/clamp.js"),
				c = n.n(a),
				d = n("./src/reddit/components/FocusableContent/index.tsx"),
				l = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/FallbackTimeInput/index.m.less"),
				u = n.n(l),
				p = n("./src/lib/lessComponent.tsx");
			const m = p.a.wrapped(d.a, "Container", u.a),
				h = p.a.input("Input", u.a),
				b = p.a.span("Delimiter", u.a),
				f = e => ("0" + e).slice(-2),
				g = (e, t) => {
					const n = +e.slice(-2);
					if (Number.isInteger(n)) return n > t ? 0 : n
				};
			class E extends i.a.PureComponent {
				constructor(e) {
					super(e), this.callOnChange = () => {
						let e = c()(+this.state.hour, 0, 24);
						const t = c()(+this.state.minute, 0, 59);
						24 === e && t > 0 && (e = 0), this.setState({
							hour: e,
							minute: t
						});
						const n = `${f(e)}:${f(t)}`;
						this.props.onChange(n)
					}, this.onChangeHour = e => {
						const t = g(e.target.value, 24);
						void 0 !== t && this.setState({
							hour: t
						}, this.callOnChange)
					}, this.onChangeMinute = e => {
						const t = g(e.target.value, 59);
						void 0 !== t && this.setState({
							minute: t
						}, this.callOnChange)
					}, this.onHourInputBlur = () => this.setState({
						isHourInputFocused: !1
					}), this.onHourInputFocus = () => this.setState({
						isHourInputFocused: !0
					}), this.onMinuteInputBlur = () => this.setState({
						isMinuteInputFocused: !1
					}), this.onMinuteInputFocus = () => this.setState({
						isMinuteInputFocused: !0
					});
					const [t, n] = e.value.split(":").map(Number);
					this.state = {
						hour: t,
						minute: n,
						isHourInputFocused: !1,
						isMinuteInputFocused: !1
					}
				}
				componentWillReceiveProps(e) {
					const [t, n] = e.value.split(":").map(Number);
					this.setState({
						hour: t,
						minute: n
					})
				}
				render() {
					const e = this.state.isHourInputFocused || this.state.isMinuteInputFocused;
					return i.a.createElement(m, {
						className: this.props.className,
						isFocused: e
					}, i.a.createElement(h, {
						type: "number",
						onChange: this.onChangeHour,
						onFocus: this.onHourInputFocus,
						onBlur: this.onHourInputBlur,
						value: f(this.state.hour)
					}), i.a.createElement(b, null, ":"), i.a.createElement(h, {
						type: "number",
						onChange: this.onChangeMinute,
						onFocus: this.onMinuteInputFocus,
						onBlur: this.onMinuteInputBlur,
						value: f(this.state.minute)
					}))
				}
			}
			var C = E,
				y = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.m.less"),
				x = n.n(y);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const O = r()(() => {
					const e = document.createElement("input");
					return e.setAttribute("type", "time"), e.setAttribute("value", "not-a-time"), "not-a-time" !== e.value
				}),
				_ = p.a.input("TimeInput", x.a);

			function k(e) {
				return O() ? i.a.createElement(_, v({
					type: "time"
				}, e, {
					onChange: t => e.onChange(t.target.value)
				})) : i.a.createElement(C, e)
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.m.less": function(e, t, n) {
			e.exports = {
				select: "_1gQeiuYndtyKo6Or5iS8xL"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/loadWithRetries/index.ts"),
				a = n("./src/reddit/helpers/scheduledPosts/index.ts"),
				c = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.m.less"),
				d = n.n(c);
			const l = e => {
				const t = e.map(a.d);
				return t.sort((e, t) => {
					const n = -1440,
						{
							offset: o = n
						} = e,
						{
							offset: r = n
						} = t;
					return r - o || (e.displayText < t.displayText ? -1 : 1) || 0
				}), t
			};
			class u extends r.a.PureComponent {
				constructor(e) {
					super(e), this.onSelect = e => {
						const t = e.target.value;
						this.props.onChange(t)
					};
					const t = u.cachedTimezoneOptions || l([this.props.selectedTimezoneName]);
					this.state = {
						timezoneOptions: t
					}
				}
				async loadTimezones() {
					const e = (await Object(i.a)(() => n.e("TimezoneList").then(n.bind(null, "./src/lib/timezone/timezoneList.ts")))).default,
						t = l(e);
					this.setState({
						timezoneOptions: t
					}), u.cachedTimezoneOptions = t
				}
				componentDidMount() {
					u.cachedTimezoneOptions || this.loadTimezones()
				}
				render() {
					return r.a.createElement("select", {
						onChange: this.onSelect,
						value: this.props.selectedTimezoneName,
						className: Object(s.a)(d.a.select, this.props.className)
					}, this.state.timezoneOptions.map(({
						name: e,
						displayText: t
					}) => r.a.createElement("option", {
						key: e,
						value: e
					}, t)))
				}
			}
			t.a = u
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "ppLwDvFzc7jVTiV_5euUj",
				container: "ppLwDvFzc7jVTiV_5euUj",
				Content: "_3VbwtRsayHUBLVMtjkul4u",
				content: "_3VbwtRsayHUBLVMtjkul4u",
				TitleRow: "_2aRE3m6KuLAhRIDmdmFKaY",
				titleRow: "_2aRE3m6KuLAhRIDmdmFKaY",
				Hr: "_1aShcxrllO1loaDr49TUUo",
				hr: "_1aShcxrllO1loaDr49TUUo",
				TimeInput: "_1bu7h4vK0WEgtRzSz-_mbA",
				timeInput: "_1bu7h4vK0WEgtRzSz-_mbA",
				TimeSelectionRow: "BUT684iT0_upDm6a1x4q_",
				timeSelectionRow: "BUT684iT0_upDm6a1x4q_",
				RadioOptionContent: "_3Ry1zpEULyeAACzRNZgIHN",
				radioOptionContent: "_3Ry1zpEULyeAACzRNZgIHN",
				OptionDetails: "_3imVLMudY3hxD1tq8KO6MB",
				optionDetails: "_3imVLMudY3hxD1tq8KO6MB",
				RadioInput: "_3VPprBv9bGCEm-hzjVWKmd",
				radioInput: "_3VPprBv9bGCEm-hzjVWKmd",
				RadioOption: "V4Tm9i9X2Co6LU8ez1zlw",
				radioOption: "V4Tm9i9X2Co6LU8ez1zlw",
				Delimiter: "_2bajvlJVcTANoHFRcmq7lu",
				delimiter: "_2bajvlJVcTANoHFRcmq7lu",
				Footer: "_3KeMI-XaG-5bILTvrCkaGS",
				footer: "_3KeMI-XaG-5bILTvrCkaGS",
				CancelButton: "_2NvAutu3QQJ9DwGHa83msC",
				cancelButton: "_2NvAutu3QQJ9DwGHa83msC",
				DeleteButton: "_3mKiK6bFRKi6y6Wkk1xLyp",
				deleteButton: "_3mKiK6bFRKi6y6Wkk1xLyp",
				ErrorMessage: "ZK5-SDSIvd4eGlmmbaRoO",
				errorMessage: "ZK5-SDSIvd4eGlmmbaRoO",
				ClearIcon: "E0CXpIVd8SDvRSwZFAmCn",
				clearIcon: "E0CXpIVd8SDvRSwZFAmCn"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/lib/timezone/index.ts"),
				l = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/utils.ts"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/controls/RadioInput/index.tsx"),
				b = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				f = n("./src/reddit/helpers/scheduledPosts/index.ts"),
				g = n("./src/reddit/helpers/trackers/postEvent.ts"),
				E = n("./src/reddit/icons/svgs/Clear/index.tsx"),
				C = n("./src/reddit/layout/row/Inline/index.tsx"),
				y = n("./src/reddit/models/PostCreationForm/index.ts"),
				x = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.tsx"),
				v = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.tsx"),
				O = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.tsx"),
				_ = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/index.m.less"),
				k = n.n(_);
			const S = 240,
				j = () => {
					const e = new Date;
					e.setMinutes(60);
					const t = Object(d.g)(e);
					return e.setMinutes(e.getMinutes() + S), {
						startDate: t,
						endDate: Object(d.g)(e),
						submitTime: y.i.Now,
						timezoneName: Object(d.b)() || d.a
					}
				},
				T = c.a.div("Container", k.a),
				w = c.a.div("Content", k.a),
				I = c.a.div("TitleRow", k.a),
				P = c.a.hr("Hr", k.a),
				R = c.a.wrapped(v.a, "TimeInput", k.a),
				M = c.a.div("TimeSelectionRow", k.a),
				N = c.a.div("RadioOptionContent", k.a),
				D = c.a.span("OptionDetails", k.a),
				L = c.a.wrapped(h.a, "RadioInput", k.a),
				A = c.a.wrapped(b.a, "RadioOption", k.a),
				F = c.a.span("Delimiter", k.a),
				B = c.a.wrapped(l.f, "Footer", k.a),
				U = c.a.wrapped(m.l, "CancelButton", k.a),
				K = c.a.wrapped(m.l, "DeleteButton", k.a),
				W = c.a.div("ErrorMessage", k.a),
				G = c.a.wrapped(E.a, "ClearIcon", k.a);
			class H extends s.a.PureComponent {
				constructor(e) {
					super(e), this.currentTimezone = Object(d.b)(), this.maxDate = Object(u.a)(), this.buildEventSchedule = () => ({
						startDate: Object(f.a)(this.state.startDate, this.state.startTime),
						endDate: Object(f.a)(this.state.endDate, this.state.endTime),
						timezoneName: this.state.timezoneName,
						submitTime: this.state.submitTime
					}), this.onStartDateChange = e => {
						this.setState({
							startDate: e
						}, this.updateEndDatetime)
					}, this.onStartTimeChange = e => {
						this.setState({
							startTime: e
						}, this.updateEndDatetime)
					}, this.updateEndDatetime = () => {
						if (this.state.isEndTimeTouched) return;
						const {
							startDate: e,
							startTime: t
						} = this.state;
						if (e && t) {
							const n = Object(d.f)(Object(f.a)(e, t));
							n.setMinutes(n.getMinutes() + S);
							const [o, r] = Object(f.i)(Object(d.g)(n));
							this.setState({
								endDate: o,
								endTime: r
							})
						}
					}, this.onEndDateChange = e => {
						this.setState({
							endDate: e,
							isEndTimeTouched: !0
						})
					}, this.onEndTimeChange = e => {
						this.setState({
							endTime: e,
							isEndTimeTouched: !0
						})
					}, this.onTimezoneChange = e => {
						this.setState({
							timezoneName: e
						})
					}, this.onSubmitTimeChange = e => {
						this.setState({
							submitTime: e
						})
					}, this.onApplyClick = () => {
						const e = this.buildEventSchedule();
						this.props.sendEvent(Object(g.b)(e)), this.props.onChange(e), this.props.onClose()
					}, this.onDeleteButtonClick = () => {
						const e = this.buildEventSchedule();
						this.props.sendEvent(Object(g.d)(e)), this.props.onChange(null), this.props.onClose()
					}, this.onCancelButtonClick = () => {
						this.props.sendEvent(Object(g.c)()), this.props.onClose()
					}, this.getValidationError = () => {
						const {
							endDate: e,
							endTime: t,
							startDate: n,
							startTime: r
						} = this.state;
						if (!(n && r && e && t)) return o.fbt._("Please enter valid start and end time", null, {
							hk: "2IyBsT"
						});
						const s = Object(d.f)(Object(f.a)(n, r)),
							i = Object(d.f)(Object(f.a)(e, t));
						return s < (this.currentTimezone === this.state.timezoneName ? new Date : new Date(Date.now() - a.z)) ? o.fbt._("Event start time needs to be in the future", null, {
							hk: "3oL3LM"
						}) : i < s ? o.fbt._("End time must be after start time", null, {
							hk: "3C3TKE"
						}) : null
					}, this.getSubmitAtLabel = () => {
						const {
							startDate: e,
							startTime: t
						} = this.state;
						return Object(f.b)(e, t)
					}, this.renderSubmitTimeRadio = () => s.a.createElement(L, {
						value: this.state.submitTime,
						name: "submit_time",
						onChange: this.onSubmitTimeChange
					}, s.a.createElement(A, {
						showButton: !0,
						value: y.i.Now
					}, s.a.createElement(N, null, s.a.createElement("span", null, o.fbt._("Submit post now", null, {
						hk: "2ueTnc"
					})), s.a.createElement(D, null, o.fbt._("Submitting post before your event allows people to follow your event and come back at the event time", null, {
						hk: "3LTavv"
					})))), s.a.createElement(A, {
						showButton: !0,
						value: y.i.AtEventTime
					}, s.a.createElement(N, null, s.a.createElement("span", null, this.getSubmitAtLabel()), s.a.createElement(D, null, o.fbt._("This post will be editable and hidden from people visiting your community until the event starts.", null, {
						hk: "1fGKlZ"
					})))));
					const t = e.schedule || j(),
						[n, r] = Object(f.i)(t.startDate),
						[i, c] = Object(f.i)(t.endDate);
					this.state = {
						startDate: n,
						startTime: r,
						endDate: i,
						endTime: c,
						timezoneName: t.timezoneName,
						submitTime: t.submitTime,
						isEndTimeTouched: !!e.schedule
					}
				}
				componentDidMount() {
					this.props.sendEvent(Object(g.e)())
				}
				render() {
					const {
						shouldShowSubmitTime: e
					} = this.props, t = this.getValidationError();
					return s.a.createElement(T, null, s.a.createElement(w, null, s.a.createElement(I, null, o.fbt._("When is the event?", null, {
						hk: "2fTD7f"
					})), s.a.createElement(M, null, o.fbt._("{start time}{to}{end time}", [o.fbt._param("start time", s.a.createElement("fieldset", null, s.a.createElement("legend", null, o.fbt._("Start time", null, {
						hk: "3nqplI"
					})), s.a.createElement(x.a, {
						max: this.maxDate,
						onChange: this.onStartDateChange,
						value: this.state.startDate
					}), s.a.createElement(R, {
						onChange: this.onStartTimeChange,
						value: this.state.startTime
					}))), o.fbt._param("to", s.a.createElement(F, null, o.fbt._("to", null, {
						hk: "2tWTBK"
					}))), o.fbt._param("end time", s.a.createElement("fieldset", {
						style: {
							opacity: this.state.isEndTimeTouched ? 1 : .5
						}
					}, s.a.createElement("legend", null, o.fbt._("End time (optional)", null, {
						hk: "2XKdsz"
					})), s.a.createElement(x.a, {
						max: this.maxDate,
						onChange: this.onEndDateChange,
						value: this.state.endDate
					}), s.a.createElement(R, {
						onChange: this.onEndTimeChange,
						value: this.state.endTime
					})))], {
						hk: "3MRWfF"
					})), s.a.createElement("div", null, s.a.createElement("label", null, o.fbt._("Time zone", null, {
						hk: "3F7Bko"
					}), s.a.createElement(O.a, {
						selectedTimezoneName: this.state.timezoneName,
						onChange: this.onTimezoneChange
					}))), e && s.a.createElement(s.a.Fragment, null, s.a.createElement(P, null), s.a.createElement("fieldset", null, s.a.createElement("legend", null, o.fbt._("When do you want to submit this post?", null, {
						hk: "3kBgxg"
					})), this.renderSubmitTimeRadio()))), s.a.createElement(B, null, s.a.createElement(C.a, null, this.props.schedule && this.props.shouldShowDeleteButton && s.a.createElement(K, {
						onClick: this.onDeleteButtonClick
					}, s.a.createElement(G, null), o.fbt._("Clear", null, {
						hk: "npkgK"
					})), s.a.createElement(U, {
						onClick: this.onCancelButtonClick
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(m.i, {
						onClick: this.onApplyClick,
						disabled: !!t
					}, o.fbt._("Apply", null, {
						hk: "2TE8JD"
					}))), t && s.a.createElement(W, null, t)))
				}
			}
			t.default = Object(i.a)(Object(p.c)(H))
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./src/lib/timezone/index.ts"),
				r = n("./src/reddit/helpers/scheduledPosts/index.ts");
			const s = () => {
				const e = new Date;
				e.setFullYear(e.getFullYear() + 1);
				const [t] = Object(r.i)(Object(o.g)(e));
				return t
			}
		},
		"./src/reddit/components/PostCreationForm/SubredditChangePrompt/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_1elQqozWN8v7kNb3-2JJnv",
				wrapper: "_1elQqozWN8v7kNb3-2JJnv",
				TitleRow: "_21ZJQglqJoGvKPVrE1g6y4",
				titleRow: "_21ZJQglqJoGvKPVrE1g6y4",
				DetailsContainer: "_2BCyPW29meUC7c2ZvAIF6O",
				detailsContainer: "_2BCyPW29meUC7c2ZvAIF6O",
				ButtonRow: "_3-rBvo8wMI4G0IKFdRF5et",
				buttonRow: "_3-rBvo8wMI4G0IKFdRF5et",
				CancelButton: "_12whVTuRHmPsEJZdopRGQN",
				cancelButton: "_12whVTuRHmPsEJZdopRGQN",
				ConfirmButton: "ERUkO2xr-Jto7MQoScSJG",
				confirmButton: "ERUkO2xr-Jto7MQoScSJG"
			}
		},
		"./src/reddit/components/PostCreationForm/Tabs/index.m.less": function(e, t, n) {
			e.exports = {
				Icon: "_3WIAbYQQdSmuuFLDSfhn5_",
				icon: "_3WIAbYQQdSmuuFLDSfhn5_",
				Container: "_3vyt9N_0jfZuOwByiKDi9x",
				container: "_3vyt9N_0jfZuOwByiKDi9x",
				Stretched: "zvJD12Xx7AKjzhwAslrBy",
				stretched: "zvJD12Xx7AKjzhwAslrBy",
				Tab: "Z1w8VkpQ23E1Wdq_My3U4",
				tab: "Z1w8VkpQ23E1Wdq_My3U4",
				isActive: "j1Q89sB76i7EBRDhnQhlr"
			}
		},
		"./src/reddit/components/PostCreationForm/index.m.less": function(e, t, n) {
			e.exports = {
				FormContent: "_3w_665DK_NH7yIsRMuZkqB",
				formContent: "_3w_665DK_NH7yIsRMuZkqB",
				CrosspostBox: "QQaE6143-4kvEuZSTBX7_",
				crosspostBox: "QQaE6143-4kvEuZSTBX7_",
				FormContainer: "HOFZo2X7Fr6JVBztpsByj",
				formContainer: "HOFZo2X7Fr6JVBztpsByj",
				TabContent: "_1zq6UabIEJJ-z9grsiCJY7",
				tabContent: "_1zq6UabIEJJ-z9grsiCJY7",
				PostingGuidelines: "_2vcPDTxC76PPQ70AdMkN0C",
				postingGuidelines: "_2vcPDTxC76PPQ70AdMkN0C"
			}
		},
		"./src/reddit/components/PostFlairPicker/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			}));
			var o = n("./node_modules/lodash/isEqual.js"),
				r = n.n(o),
				s = n("./src/reddit/constants/flair.ts"),
				i = n("./src/reddit/helpers/flair.ts"),
				a = n("./src/reddit/models/Flair/index.ts");
			const c = e => (e || []).find(e => e.type === a.f.Text || e.type === a.f.Image || e.type === a.f.Richtext);
			var d;
			! function(e) {
				e[e.InvalidTemplate = 0] = "InvalidTemplate", e[e.NoChanges = 1] = "NoChanges", e[e.NotSelected = 2] = "NotSelected", e[e.TextIsNotAllowed = 3] = "TextIsNotAllowed", e[e.TextIsEmpty = 4] = "TextIsEmpty", e[e.TextIsTooLong = 5] = "TextIsTooLong"
			}(d || (d = {}));
			const l = (e, t, n) => {
				if (n && !t) return {
					canSave: !0
				};
				if (!t) return {
					canSave: !1,
					reason: d.NotSelected
				};
				const o = e && t.templateId ? e[t.templateId] : void 0;
				if (!o) return {
					canSave: !1,
					reason: d.InvalidTemplate
				};
				const a = Object(i.g)(t).length;
				return 0 === a ? {
					canSave: !1,
					reason: d.TextIsEmpty
				} : a > s.g ? {
					canSave: !1,
					reason: d.TextIsTooLong
				} : Object(i.n)(t) && !Object(i.r)(o) ? {
					canSave: !1,
					reason: d.TextIsNotAllowed
				} : r()(n, t) ? {
					canSave: !1,
					reason: d.NoChanges
				} : {
					canSave: !0
				}
			}
		},
		"./src/reddit/components/PostFlairPicker/index.m.less": function(e, t, n) {
			e.exports = {
				buttonsRow: "cF9DU_4WDAKS4gs43ct2_",
				clearButton: "_3vB6Y9PiwJ0YV6c9MGbDwT"
			}
		},
		"./src/reddit/components/PostFlairPicker/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return k
			}));
			var o, r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				u = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				m = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				h = n("./src/reddit/components/FlairPreview/index.tsx"),
				b = n("./src/reddit/components/FlairSearch/index.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/models/Flair/index.ts"),
				E = n("./src/reddit/selectors/moderatorPermissions.ts"),
				C = n("./src/reddit/selectors/postFlair.ts"),
				y = n("./src/reddit/selectors/subreddit.ts"),
				x = n("./src/reddit/selectors/telemetry.ts"),
				v = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				O = n("./src/reddit/components/PostFlairPicker/index.m.less"),
				_ = n.n(O);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(o || (o = {}));
			const k = (e, t = !1, n = o.UNSET) => `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${n}]`,
				S = Object(c.c)({
					flairData: C.d,
					subreddit: y.T,
					isMod: (e, t) => !!Object(E.k)(e, t)
				});
			class j extends i.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.onApply = () => {
						const {
							previewFlair: e
						} = this.state, t = e && e.templateId;
						this.props.onFlairChanged({
							previewFlair: e,
							selectedTemplateId: t
						}), this.props.closeModal && this.props.closeModal(), this.track(this.getTrackingNoun("flairadd_mod", "flairadd_user"))
					}, this.onClear = () => this.setSelectedFlair(null), this.setSelectedFlair = e => {
						this.setState({
							previewFlair: e
						})
					}, this.track = e => this.props.sendEvent(t => ({
						source: "post_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(x.subredditById)(t, this.props.subredditId)
					}));
					const t = Object(v.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, n = Object(v.c)(this.props.flairs) || null;
					return Object(v.b)(e, t, n)
				}
				render() {
					const {
						props: e
					} = this, {
						previewFlair: t
					} = this.state, {
						className: n,
						flairData: o,
						subreddit: s
					} = e, a = s.displayText, {
						templates: c,
						templateIds: d
					} = o, {
						canSave: l
					} = this.canSave();
					return i.a.createElement(m.a, {
						className: n
					}, i.a.createElement(p.a, {
						onClosePressed: e.closeModal,
						title: r.fbt._("Select {subredditName} flair", [r.fbt._param("subredditName", a)], {
							hk: "1lDMWS"
						})
					}), i.a.createElement(h.a, {
						flair: t,
						flairTemplateType: g.d.LinkFlair,
						placeholderText: r.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), i.a.createElement(b.a, {
						flair: t,
						flairTemplateType: g.d.LinkFlair,
						subredditId: s.id,
						templates: c,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), i.a.createElement("div", {
						className: _.a.buttonsRow
					}, i.a.createElement(f.i, {
						disabled: !l,
						onClick: this.onApply
					}, r.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), i.a.createElement(f.l, {
						className: _.a.clearButton,
						onClick: this.onClear
					}, r.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const T = Object(a.b)(S, (e, t) => ({
				closeModal: () => e(Object(u.i)(t.modalId))
			}))(j);
			t.a = Object(l.a)(Object(d.c)(T))
		},
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, n) {
			e.exports = {
				outboundLinkIcon: "qgDkGQIoFEpMMeNtfI0BY",
				pollMeta: "FKej75-i0z1XubMqeVh9Q",
				styledLink: "SQnoC3ObvgnGjWt90zD9Z",
				isVisitedEnabled: "_2INHSNB8V5eaWp4P0rY_mE",
				Title: "_2SdHzo12ISmrC8H86TgSCp",
				title: "_2SdHzo12ISmrC8H86TgSCp",
				titleContainer: "y8HYJ-y_lTUHkQIc1mdCq",
				isNoWrap: "_2_QBmCTk6VD4M3dvKqXD23",
				postTitleVisibility: "_1hLrLjnE1G_RBCNcN9MVQf",
				ExtraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				extraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				Large: "_3wqmjmv3tb_k-PROt7qFZe",
				large: "_3wqmjmv3tb_k-PROt7qFZe",
				Medium: "_1zpZYP8cFNLfLDexPY65Y7",
				medium: "_1zpZYP8cFNLfLDexPY65Y7",
				Small: "uWdXen_41bh0iwLrgzFkc",
				small: "uWdXen_41bh0iwLrgzFkc",
				ExtraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				extraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				Component: "_2FCtq-QzlfuN-SwVMUZMM3",
				component: "_2FCtq-QzlfuN-SwVMUZMM3"
			}
		},
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return R
			})), n.d(t, "a", (function() {
				return H
			}));
			var o = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/ads/index.ts"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/constants/experiments.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/controls/OutboundLink/index.tsx"),
				b = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				f = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				g = n("./src/reddit/helpers/flair.ts"),
				E = n("./src/reddit/helpers/path/index.ts"),
				C = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				y = n("./src/reddit/icons/fonts/index.tsx"),
				x = n("./src/reddit/models/Flair/index.ts"),
				v = n("./src/reddit/models/Media/index.ts"),
				O = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				_ = n("./src/lib/getShortenedLink.ts"),
				k = n("./src/reddit/components/FlairWrapper/index.tsx"),
				S = n("./node_modules/fbt/lib/FbtPublic.js"),
				j = n("./src/lib/prettyPrintNumber/index.ts"),
				T = n("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				w = n("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				I = n.n(w);
			const P = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var R, M = Object(i.b)(P)((function(e) {
					const {
						poll: t,
						resultsByVoters: n
					} = e, o = n ? n.totalVotes : "0";
					return s.a.createElement("div", {
						className: Object(l.a)(e.className, I.a.proposalMetaData)
					}, s.a.createElement("span", null, S.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [S.fbt._param("count", Object(j.a)(o)), S.fbt._plural(parseInt(o))], {
						hk: "4rP1VK"
					})), t && s.a.createElement(T.a, {
						className: I.a.proposalExpiry,
						poll: t
					}))
				})),
				N = n("./src/reddit/components/SEOTitle/index.tsx"),
				D = n("./src/reddit/selectors/user.ts"),
				L = n("./src/reddit/components/PostTitle/index.m.less"),
				A = n.n(L),
				F = n("./src/config.ts"),
				B = n("./src/reddit/hooks/useClickSourceData.ts"),
				U = n("./src/reddit/hooks/useExperimentVariant.ts"),
				K = n("./src/reddit/hooks/usePostContext.ts"),
				W = n("./src/reddit/hooks/useTheme.ts");

			function G() {
				return (G = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(R || (R = {}));
			const H = ({
					size: e,
					titleColor: t,
					titleType: n,
					nowrap: o,
					children: r,
					className: i,
					redditStyle: a
				}) => {
					const c = Object(W.a)();
					let d = "";
					switch (e) {
						case R.ExtraLarge:
							d = A.a.ExtraLarge;
							break;
						case R.Large:
							d = A.a.Large;
							break;
						case R.Medium:
							d = A.a.Medium;
							break;
						case R.Small:
							d = A.a.Small;
							break;
						case R.ExtraSmall:
							d = A.a.ExtraSmall
					}
					return s.a.createElement("div", {
						className: Object(l.a)(A.a.Title, i, d, {
							[A.a.isNoWrap]: o
						}),
						style: {
							"--posttitletextcolor": t || Object(O.a)({
								redditStyle: a,
								theme: c
							}).titleText
						}
					}, n ? s.a.createElement(N.b, {
						type: n
					}, r) : r)
				},
				q = ({
					className: e,
					disableVisited: t,
					titleColor: n,
					children: o,
					...r
				}) => s.a.createElement(a.a, G({}, r, {
					className: Object(l.a)(e, A.a.styledLink, {
						[A.a.isVisitedEnabled]: !t
					})
				}), o),
				V = ({
					disableVisited: e,
					nowrap: t,
					className: n,
					children: o
				}) => s.a.createElement("div", {
					className: Object(l.a)(A.a.titleContainer, n, {
						[A.a.isNoWrap]: t,
						[A.a.isVisitedEnabled]: !e
					})
				}, o),
				z = Object(c.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(m.p)(e, {
						pageLayer: t
					}),
					shouldOpenPostInNewTab: D.cb
				}),
				Q = e => {
					const {
						post: t,
						subreddit: n
					} = e, {
						isSponsored: o
					} = t, r = Object(B.a)(), i = Object(U.a)(p.Wb) === p.ac.Enabled;
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return s.a.createElement(V, {
						nowrap: e.nowrap
					}, s.a.createElement(Y, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return s.a.createElement(h.b, {
						href: t.source.url,
						isSponsored: o,
						postId: t.id,
						source: t.source
					}, s.a.createElement(Y, e)); {
						const a = t.media && Object(v.G)(t.media) ? Object(C.c)(t.id, n.name) : t.permalink,
							c = e.isCommentPermalink ? Object(E.b)(a) : i ? Object(f.a)(a, void 0, r) : Object(f.a)(a);
						return s.a.createElement(V, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, o ? ((e, t) => {
							const {
								source: n
							} = Object(d.t)(e, t.imageGalleryCurrentItem);
							return n ? s.a.createElement(h.b, {
								href: n.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: n
							}, s.a.createElement(Y, t)) : s.a.createElement(Y, t)
						})(t, e) : s.a.createElement(q, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: c
						}, s.a.createElement(Y, e)))
					}
				},
				Y = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: n,
						post: o
					} = e;
					let r = e.format ? e.format(o) : o.title;
					n && "string" == typeof r && (r = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(r));
					const i = e.isCommentsPage ? N.a.PostComments : N.a.PostItem;
					return s.a.createElement(H, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: i
					}, t && s.a.createElement(k.a, {
						titleFlair: t,
						nowrap: !0,
						post: o,
						sendEvent: e.sendEvent,
						showCategoryTag: !1
					}), r)
				},
				J = e => {
					const {
						hideSourceLink: t,
						post: n
					} = e, {
						isSponsored: o
					} = n, r = !t && !e.isCrosspost && e.size !== R.Large && !n.isSponsored && !(n.media && Object(v.G)(n.media)) && (n.source || n.media && (n.media.type === v.o.GIFVIDEO || n.media.type === v.o.IMAGE || n.media.type === v.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (r) return s.a.createElement(b.a, {
							className: e.outboundLinkClassName,
							href: Object(v.D)(n),
							isSponsored: o,
							postId: n.id,
							source: n.source
						}, Object(_.a)(n), !n.isSponsored && s.a.createElement(y.a, {
							name: "external_link",
							className: A.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== R.Large && e.size !== R.ExtraLarge) return s.a.createElement(b.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: o,
						postId: n.id,
						source: n.source
					}, Object(_.a)(n), !n.isSponsored && s.a.createElement(y.a, {
						name: "external_link",
						className: A.a.outboundLinkIcon
					}));
					return null
				};
			class X extends s.a.Component {
				getDynamicStyleTags() {
					return s.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${A.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(o.c)(.45,Object(O.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(o.c)(.45,this.props.titleColor||Object(O.a)(this.props).titleText,Object(O.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: n,
						isCommentsPage: o,
						isOverlay: r,
						poll: i,
						post: a,
						showNSFWSpoilerFlairsOnly: c
					} = this.props, d = n === x.b.Left, u = Object(k.b)(a), p = c ? u.filter(e => e.type === x.f.Nsfw || e.type === x.f.Spoiler) : d ? u.filter(e => Object(g.q)(e.type)) : [], m = c ? [] : d ? u.filter(e => !Object(g.q)(e.type)) : u, h = !r && !o, b = !t && p && p.length > 0 && h, f = !t && m && m.length > 0 && h;
					return s.a.createElement("div", {
						className: Object(l.a)(A.a.Component, e, a.id)
					}, !c && b && s.a.createElement(k.a, {
						isFlairFilter: !0,
						titleFlair: p,
						nowrap: !0,
						post: a,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), s.a.createElement(Q, G({}, this.props, {
						leftFlair: c ? p : void 0
					})), i && s.a.createElement(M, {
						className: A.a.pollMeta,
						pollId: i.id
					}), s.a.createElement(J, this.props), f && s.a.createElement(k.a, {
						isFlairFilter: !0,
						titleFlair: m,
						nowrap: !0,
						post: a,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), s.a.createElement("div", {
						className: A.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${F.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = s.a.memo((function(e) {
				const t = Object(m.Z)(),
					n = Object(m.v)(t),
					o = Object(K.a)(),
					r = Object(i.e)(r => z(r, {
						...o,
						...e,
						isCommentPermalink: n,
						pageLayer: t
					})),
					a = Object(W.a)(),
					c = Object(u.b)();
				return s.a.createElement(X, G({
					pageLayer: t,
					isCommentPermalink: n
				}, o, r, e, {
					theme: a,
					sendEvent: c
				}))
			}))
		},
		"./src/reddit/components/PostingSidebar/PolicyRow/index.m.less": function(e, t, n) {
			e.exports = {
				PolicyRow: "_2N9ShiilNyzdd0B_i9geBj",
				policyRow: "_2N9ShiilNyzdd0B_i9geBj"
			}
		},
		"./src/reddit/components/PostingSidebar/PolicyRow/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/config.ts");
			const {
				redditUrl: i
			} = s.a, a = `${i}/help/contentpolicy`, c = `${i}/wiki/reddiquette`;
			var d = n("./src/reddit/components/PostingSidebar/PolicyRow/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => r.a.createElement("div", {
				className: l.a.PolicyRow
			}, u._("Please be mindful of reddit's {=content policy} and practice good {=reddiquette}.", [u._param("=content policy", r.a.createElement("a", {
				href: a
			}, u._("content policy", null, {
				hk: "2PeDvo"
			}))), u._param("=reddiquette", r.a.createElement("a", {
				href: c
			}, u._("reddiquette", null, {
				hk: "uPdiw"
			})))], {
				hk: "4yQuKr"
			}))
		},
		"./src/reddit/components/PostingSidebar/PostingReddiquette/index.m.less": function(e, t, n) {
			e.exports = {
				Snoo: "_1XXU14d6sjwsheKLMcy7ro",
				snoo: "_1XXU14d6sjwsheKLMcy7ro",
				Li: "_2aD4E5YdfsXR-e8kLRuTEp",
				li: "_2aD4E5YdfsXR-e8kLRuTEp",
				Ol: "a5fJMl2u0aujwukxWH3if",
				ol: "a5fJMl2u0aujwukxWH3if",
				Title: "_27SYzmGZdspPn9yA9voNCY",
				title: "_27SYzmGZdspPn9yA9voNCY",
				Component: "_1Zj2sAyYL2zB-kzZQcWiW",
				component: "_1Zj2sAyYL2zB-kzZQcWiW"
			}
		},
		"./src/reddit/components/PostingSidebar/PostingReddiquette/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/icons/svgs/SnooPosting/index.tsx"),
				l = n("./src/reddit/selectors/postCreations.ts"),
				u = n("./src/reddit/components/PostingSidebar/PostingReddiquette/index.m.less"),
				p = n.n(u),
				m = n("./src/lib/lessComponent.tsx");
			const h = m.a.wrapped(d.a, "Snoo", p.a),
				b = m.a.li("Li", p.a),
				f = m.a.ol("Ol", p.a),
				g = m.a.div("Title", p.a),
				E = Object(a.c)({
					submissionType: l.kb
				});
			t.a = m.a.wrapped(Object(i.b)(E)(e => {
				const {
					className: t,
					submissionType: n
				} = e, r = n === c.Rb.CROSSPOST;
				return s.a.createElement("div", {
					className: t
				}, s.a.createElement(g, null, s.a.createElement(h, null), r ? o.fbt._("Crossposting to Reddit", null, {
					hk: "2ODPDt"
				}) : o.fbt._("Posting to Reddit", null, {
					hk: "8eEIT"
				})), s.a.createElement(f, null, s.a.createElement(b, null, o.fbt._("Remember the human", null, {
					hk: "1x3u5R"
				})), s.a.createElement(b, null, o.fbt._("Behave like you would in real life", null, {
					hk: "3pxfk1"
				})), s.a.createElement(b, null, o.fbt._("Look for the original source of content", null, {
					hk: "1FfUM4"
				})), s.a.createElement(b, null, o.fbt._("Search for duplicates before posting", null, {
					hk: "3Ij1gf"
				})), s.a.createElement(b, null, o.fbt._("Read the community’s rules", null, {
					hk: "3RNQW2"
				})), r && s.a.createElement(b, null, o.fbt._("You must join a community to crosspost there", null, {
					hk: "1YAEPX"
				}))))
			}), "Component", p.a)
		},
		"./src/reddit/components/PostingSidebar/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "itxZANPrH4AAYOj6VgfL9",
				container: "itxZANPrH4AAYOj6VgfL9"
			}
		},
		"./src/reddit/components/PostingSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(o),
				s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/components/IdCard/async.tsx"),
				u = n("./src/reddit/components/SidebarFooter/index.tsx"),
				p = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				m = n("./src/reddit/components/Widgets/PostCollection/index.tsx"),
				h = n("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/models/Widgets/index.ts"),
				g = n("./src/reddit/selectors/postCreations.ts"),
				E = n("./src/reddit/selectors/profile.ts"),
				C = n("./src/reddit/selectors/subreddit.ts"),
				y = n("./src/reddit/selectors/widgets.ts"),
				x = n("./src/reddit/components/PostingSidebar/PolicyRow/index.tsx"),
				v = n("./src/reddit/components/PostingSidebar/PostingReddiquette/index.tsx"),
				O = n("./src/reddit/components/PostingSidebar/index.m.less"),
				_ = n.n(O),
				k = n("./src/lib/lessComponent.tsx");
			const S = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-ProfileIdCard").then(n.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				j = k.a.div("Container", _.a),
				T = Object(b.t)(),
				w = new Set(["all", "post"]),
				I = Object(d.a)((e, {
					pageLayer: t
				}) => {
					const n = Object(b.q)(e, {
						pageLayer: t
					});
					return n && Object(C.S)(e, {
						subredditId: n.id
					})
				}, e => (e || []).filter(e => w.has(e.kind))),
				P = (e, {
					pageLayer: t
				}) => {
					const n = Object(b.q)(e, {
						pageLayer: t
					});
					return !(!n || !Object(y.d)(e, {
						subredditName: n.name
					}))
				},
				R = Object(d.c)({
					hasIdCardWidgetData: P,
					isCreationPagePending: g.J,
					profile: (e, {
						pageLayer: t,
						subredditOrProfileId: n
					}) => n ? Object(E.p)(e, {
						profileId: n
					}) : Object(b.j)(e, {
						pageLayer: t
					}),
					subreddit: b.q,
					subredditRules: I,
					currentPostCollection: b.f
				}),
				M = Object(c.b)(R),
				N = e => {
					const {
						className: t,
						currentPostCollection: n,
						hasIdCardWidgetData: o,
						isCreationPagePending: r,
						profile: s,
						subreddit: i,
						subredditRules: c
					} = e, d = o || r;
					return a.a.createElement(j, {
						className: t
					}, n && a.a.createElement(m.a, {
						collection: n
					}), i && d && a.a.createElement(p.a, null, a.a.createElement(l.a, {
						isSubmissionPage: !0,
						listingName: i.name
					})), s && !i && a.a.createElement(p.a, null, a.a.createElement(S, {
						profileName: s.name,
						isOverlay: !1,
						isSubmissionPage: !0
					})), i && c && a.a.createElement(p.a, null, a.a.createElement(h.a, {
						subredditName: i.name,
						display: f.e.COMPACT,
						rules: c,
						redditStyle: !0
					})), a.a.createElement(v.a, null), a.a.createElement(p.a, null), a.a.createElement(x.a, null), a.a.createElement(u.a, {
						redditStyle: !0
					}))
				};
			t.a = T(M(N))
		},
		"./src/reddit/components/ProgressBar/index.m.less": function(e, t, n) {
			e.exports = {
				innerBar: "Db3WJFTcyAR-IM0cIkpDG",
				outerBar: "i8kQtxHYBB8Sb3bPI4M_e"
			}
		},
		"./src/reddit/components/ProgressBar/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/ProgressBar/index.m.less"),
				a = n.n(i);
			t.a = ({
				className: e,
				innerBarClassName: t,
				percent: n
			}) => r.a.createElement("div", {
				className: Object(s.a)(a.a.outerBar, e)
			}, r.a.createElement("div", {
				className: Object(s.a)(a.a.innerBar, t),
				style: {
					width: `${n.toFixed(2)}%`
				}
			}))
		},
		"./src/reddit/components/RequestPendingBanner/index.m.less": function(e, t, n) {
			e.exports = {
				Banner: "_1AD-JX9FUzLgvv8A5yaVqV",
				banner: "_1AD-JX9FUzLgvv8A5yaVqV",
				Subtitle: "_1ljRPHbvpC41amZF9_xBeb",
				subtitle: "_1ljRPHbvpC41amZF9_xBeb"
			}
		},
		"./src/reddit/components/RequestPendingBanner/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				l = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				u = n("./src/reddit/selectors/platform.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/components/RequestPendingBanner/index.m.less"),
				h = n.n(m);
			const b = c.a.wrapped(d.a, "Banner", h.a),
				f = Object(i.b)(() => Object(a.c)({
					restrictions: p.o,
					subreddit: u.e
				}));
			t.a = f(({
				restrictions: e,
				subreddit: t
			}) => {
				if (!t) return null;
				const n = e === l.e.Comment ? l.a.Create : l.a.Draft;
				return s.a.createElement(b, {
					subtitle: s.a.createElement("span", {
						className: h.a.Subtitle
					}, o.fbt._("Your request to {restrictions} in {displayName} was sent and is pending. In the meantime, you can {action} a post and {=browse the community}", [o.fbt._param("restrictions", l.d[e]()), o.fbt._param("displayName", t.name), o.fbt._param("action", l.c[n]()), o.fbt._param("=browse the community", s.a.createElement("a", {
						href: `${t.url}`
					}, o.fbt._("browse the community", null, {
						hk: "3hwgAC"
					})))], {
						hk: "2CX6Q6"
					})),
					title: o.fbt._("Request to {restrictions} is pending...", [o.fbt._param("restrictions", l.d[e]())], {
						hk: "1tQuSr"
					})
				})
			})
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.m.less": function(e, t, n) {
			e.exports = {
				editorWrapper: "VBa-xDMEbFi3vsO4id4OC",
				textareaAutosize: "_6Ej82J4aTDK36LLOcpFbC",
				mIsFullHeight: "aZb6a46diyLdUQJynW3aD"
			}
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-autosize-textarea/lib/index.js"),
				i = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/ResizableAutosizeTextarea/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const u = ({
					className: e,
					children: t,
					editorWrapperRef: n,
					initialHeight: o
				}) => r.a.createElement("div", {
					className: Object(a.a)(d.a.editorWrapper, e),
					style: o ? {
						height: o
					} : void 0,
					ref: n
				}, t),
				p = ({
					isFullHeight: e,
					textAreaRef: t,
					...n
				}) => r.a.createElement(i.a, l({
					className: Object(a.a)(d.a.textareaAutosize, {
						[d.a.mIsFullHeight]: e
					}),
					innerRef: t
				}, n));
			class m extends r.a.Component {
				constructor(e) {
					super(e), this.editorHeight = null, this.editorRef = null, this.editorStyleMutationObserver = null, this.onEditorStyleChanged = () => {
						if (!this.editorRef) return;
						const {
							isResized: e
						} = this.state;
						e || this.setState({
							isResized: !0
						});
						const t = this.editorRef.style.height ? Number.parseInt(this.editorRef.style.height) : null;
						this.editorHeight !== t && (this.editorHeight = t, t && this.props.onEditorResize && this.props.onEditorResize(t))
					}, this.setEditorWrapperRef = e => this.editorRef = e, this.state = {
						initialHeight: e.initialHeight,
						isResized: !!e.initialHeight
					}
				}
				componentDidMount() {
					this.editorRef && (this.editorStyleMutationObserver = new MutationObserver(this.onEditorStyleChanged), this.editorStyleMutationObserver.observe(this.editorRef, {
						attributes: !0,
						attributeFilter: ["style"]
					}))
				}
				componentWillUnmount() {
					this.editorStyleMutationObserver && (this.editorStyleMutationObserver.disconnect(), this.editorStyleMutationObserver = null)
				}
				render() {
					const {
						className: e,
						initialHeight: t,
						innerRef: n,
						onEditorResize: o,
						...s
					} = this.props, {
						isResized: i
					} = this.state;
					return r.a.createElement(u, {
						className: e,
						editorWrapperRef: this.setEditorWrapperRef,
						initialHeight: t
					}, r.a.createElement(p, l({}, s, {
						children: !0,
						isFullHeight: !!i,
						textAreaRef: n
					})))
				}
			}
			t.a = m
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, n) {
			e.exports = {
				removalReasonButton: "_3IEDcFIIs_TeXsZtKZGzUd",
				TextWrapper: "smOzqVIOoNqmSJcyBX2N6",
				textWrapper: "smOzqVIOoNqmSJcyBX2N6",
				Button: "_1rNBkuuOkN2SorEXyRkYjB",
				button: "_1rNBkuuOkN2SorEXyRkYjB",
				ApproveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				approveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				RemoveButton: "_2OvUr_pd3kddsNP_f35S28",
				removeButton: "_2OvUr_pd3kddsNP_f35S28"
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				c = n.n(a);
			const d = e => r.a.createElement("button", {
					className: Object(s.a)(c.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick
				}, e.children, e.text && r.a.createElement("span", {
					className: c.a.TextWrapper
				}, e.text, " ")),
				l = i.a.wrapped(d, "ApproveButton", c.a),
				u = i.a.wrapped(d, "RemoveButton", c.a),
				p = e => r.a.createElement("button", {
					className: Object(s.a)(c.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/RichTextEditor/Blockquote/index.m.less": function(e, t, n) {
			e.exports = {
				BlockQuoteWrapper: "_3bqfSxMWo3yWv7j4N8hQy6",
				blockQuoteWrapper: "_3bqfSxMWo3yWv7j4N8hQy6"
			}
		},
		"./src/reddit/components/RichTextEditor/CodeBlock/index.m.less": function(e, t, n) {
			e.exports = {
				CodeBlockWrapper: "_2YrwxhRxsXvszOhYWDUhMh",
				codeBlockWrapper: "_2YrwxhRxsXvszOhYWDUhMh"
			}
		},
		"./src/reddit/components/RichTextEditor/DragController/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "a", (function() {
				return b
			}));
			var o = n("./node_modules/lodash/includes.js"),
				r = n.n(o);
			var s = n("./src/reddit/helpers/dom/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const a = e => e.className.indexOf("public-DraftEditor-content") >= 0,
				c = e => !!e.parentElement && !!e.parentElement.parentElement && a(e.parentElement.parentElement),
				d = e => !(!e.dataset.block || !e.dataset.offsetKey),
				l = e => {
					const {
						offsetKey: t
					} = e.dataset;
					return t ? (e => e.split("-")[0])(t) : ""
				},
				u = (e, t) => {
					return ((e, t) => {
						const n = function(e, t) {
							let n = 0,
								o = e.length - 1;
							for (; n <= o;) {
								const r = o + n >> 1,
									s = t(e[r]);
								if (s > 0) n = r + 1;
								else {
									if (!(s < 0)) return r;
									o = r - 1
								}
							}
							return n
						}(e, e => {
							const n = e.getBoundingClientRect();
							return t < n.top ? -1 : t > n.bottom ? 1 : 0
						});
						return e[Math.min(n, e.length - 1)]
					})(e.querySelectorAll("[data-block][data-offset-key]"), t)
				},
				p = (e, t) => {
					const n = Object(s.b)(e, d, a);
					return n || u(e, t)
				},
				m = (e, t) => {
					const n = (e => {
						const t = e.target;
						if (!(t instanceof HTMLElement)) return;
						const n = Object(s.b)(t, a);
						if (!n) return;
						const o = p(t, e.clientY);
						if (!o) return;
						const r = Object(s.b)(o, c);
						return r ? {
							editorContentElement: n,
							topLevelElement: r,
							blockElement: o
						} : void 0
					})(t);
					if (!n) return;
					const {
						topLevelElement: o,
						blockElement: r
					} = n, d = l(r), u = e.getCurrentContent(), m = u.getBlockForKey(d);
					if (!m) return;
					const {
						upperElement: h,
						lowerElement: b
					} = ((e, t, n, o) => {
						let r = n,
							s = n;
						if (e.getType() === i.b.UNSTYLED) r = s = t;
						else if (Object(i.o)(e.getType())) {
							r = s = t;
							const a = o.getBlockAfter(e.getKey());
							a && Object(i.u)(a.getType()) && (s = n.nextElementSibling)
						} else Object(i.u)(e.getType()) && (r = n.previousElementSibling, s = t);
						return {
							upperElement: r,
							lowerElement: s
						}
					})(m, r, o, u), {
						clientY: f,
						isBefore: g
					} = ((e, t, n) => {
						const o = e.getBoundingClientRect(),
							r = t.getBoundingClientRect();
						let i, c;
						if (n > (o.top + r.bottom) / 2) {
							i = r.bottom, c = !1;
							const e = Object(s.b)(t, e => !!e.nextElementSibling, a);
							if (e) {
								i = (e.nextElementSibling.getBoundingClientRect().top + r.bottom) / 2
							}
						} else {
							i = o.top, c = !0;
							const t = Object(s.b)(e, e => !!e.previousElementSibling, a);
							if (t) {
								i = (t.previousElementSibling.getBoundingClientRect().bottom + o.top) / 2
							}
						}
						return {
							clientY: i,
							isBefore: c
						}
					})(h, b, t.clientY);
					let E = d;
					if (m.getType() !== i.b.UNSTYLED) {
						const e = p(g ? h : b, f);
						e && (E = l(e))
					}
					return {
						clientY: f,
						isBefore: g,
						blockKey: E
					}
				},
				h = e => e.items ? !!Array.from(e.items).find(e => "file" === e.kind) : !(!e.files || !e.files.length) || r()(e.types, "Files"),
				b = e => e.items ? Array.from(e.items).map(e => "file" === e.kind ? e.getAsFile() : null).filter(Boolean) : e.files ? Array.from(e.files) : []
		},
		"./src/reddit/components/RichTextEditor/DragController/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_13Sj3UMDKkCCJTq88berCB",
				hideCaret: "_2BqK1CuzH2oWi2F9_cuFPQ",
				DropLine: "z5iuD3MVYcfS7tTihbvof",
				dropLine: "z5iuD3MVYcfS7tTihbvof",
				Tooltip: "_1z9S1KmnM79xn-UA0FnbP6",
				tooltip: "_1z9S1KmnM79xn-UA0FnbP6"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "ki2VbfBhU-qxg1S6VyET6",
				above: "_8fNGSBGvr1Ds8PbrsUGzN",
				below: "_38gWvHp3NJkR5r5ftUfbFG",
				HoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2",
				hoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less"),
				c = n.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = i.a.wrapped(e => {
				const {
					children: t,
					className: n,
					renderBelow: o,
					text: i,
					tooltipContentClass: a,
					...l
				} = e;
				return r.a.createElement("div", d({}, l, {
					className: Object(s.a)(c.a.container, n)
				}), i ? r.a.createElement("div", {
					className: Object(s.a)(c.a.tooltip, a, o ? c.a.below : c.a.above)
				}, i) : null, t)
			}, "HoverTooltip", c.a)
		},
		"./src/reddit/components/RichTextEditor/LinksController/LinkDetailsPopup/index.m.less": function(e, t, n) {
			e.exports = {
				LinkDetailsBox: "_2F28OVOVlGo6WCT2l8lHzO",
				linkDetailsBox: "_2F28OVOVlGo6WCT2l8lHzO",
				Link: "_3vJCj_aXdDc-UXA9fDK-z-",
				link: "_3vJCj_aXdDc-UXA9fDK-z-",
				LinkButton: "_1NtBcR7JgjxkWLJrk3ddD3",
				linkButton: "_1NtBcR7JgjxkWLJrk3ddD3"
			}
		},
		"./src/reddit/components/RichTextEditor/LinksController/LinkEditorPopup/index.m.less": function(e, t, n) {
			e.exports = {
				EditForm: "_1iFkUjPC4J8jzWrDthDpcv",
				editForm: "_1iFkUjPC4J8jzWrDthDpcv",
				LinkEditorBox: "_3HMg7pEvqliZhuStFZ241S",
				linkEditorBox: "_3HMg7pEvqliZhuStFZ241S",
				Input: "_2rXi0UvEKRcI3WdI52LAx1",
				input: "_2rXi0UvEKRcI3WdI52LAx1",
				Label: "_2olni9Ucr8-t8W62nTkY_",
				label: "_2olni9Ucr8-t8W62nTkY_",
				HintAndButtonRow: "_2qiAR3ZyDGPSr9zmqhP_5Z",
				hintAndButtonRow: "_2qiAR3ZyDGPSr9zmqhP_5Z",
				InvalidUrlHint: "pKrgYGkHvjHPFkWO-Gnko",
				invalidUrlHint: "pKrgYGkHvjHPFkWO-Gnko",
				SubmitButton: "_8a_rf-Al8VNnUQ42WlvF",
				submitButton: "_8a_rf-Al8VNnUQ42WlvF"
			}
		},
		"./src/reddit/components/RichTextEditor/OrderedList/index.m.less": function(e, t, n) {
			e.exports = {
				OrderedListWrapper: "_1QXegNe8bOemD558m-vc9t",
				orderedListWrapper: "_1QXegNe8bOemD558m-vc9t"
			}
		},
		"./src/reddit/components/RichTextEditor/Paragraph/index.m.less": function(e, t, n) {
			e.exports = {
				ParagraphWrapper: "_3LuG0YVLLHE2azRNVaKz7O",
				paragraphWrapper: "_3LuG0YVLLHE2azRNVaKz7O"
			}
		},
		"./src/reddit/components/RichTextEditor/TextRendering/index.m.less": function(e, t, n) {
			e.exports = {
				H1: "_15ThA3NFuzpQTnPu0I3QKj",
				h1: "_15ThA3NFuzpQTnPu0I3QKj",
				H2: "_3R5icAd6cRzwpq-yhvQUoW",
				h2: "_3R5icAd6cRzwpq-yhvQUoW",
				H3: "_3UxnA7bFPnKoS0rKMO1UYe",
				h3: "_3UxnA7bFPnKoS0rKMO1UYe",
				H4: "_10CFPbxVR0HQhyRBkeExmO",
				h4: "_10CFPbxVR0HQhyRBkeExmO",
				H5: "_3bidJE2WceaRjyBA8LLfp3",
				h5: "_3bidJE2WceaRjyBA8LLfp3",
				H6: "_27N6aQ0-d-ntRM1JkDwGg7",
				h6: "_27N6aQ0-d-ntRM1JkDwGg7"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_2lAJkFZXhr5kbH7YF-sYFf",
				enabled: "_1H0LLEwUP5ys6cgxr9KhMa",
				active: "_32EiQr-Px2GJvCfigwwmuK"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				l = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.m.less"),
				u = n.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const m = e => {
				e.preventDefault(), e.stopPropagation()
			};
			t.a = i.a.wrapped(e => {
				const {
					active: t,
					className: n,
					disabledTooltip: o,
					enabled: i = !0,
					tooltip: l,
					Icon: h,
					iconName: b,
					onClick: f,
					tooltipBelow: g,
					children: E
				} = e, C = {
					"aria-label": l,
					"aria-selected": t,
					className: Object(s.a)(u.a.button, n, {
						[u.a.active]: !!t,
						[u.a.enabled]: i
					}),
					onMouseDown: m,
					onClick: e => {
						m(e), i && f && f(e)
					},
					role: "button",
					tabIndex: -1
				};
				return r.a.createElement(a.q, p({}, C, {
					size: a.c.S,
					priority: a.b.Plain,
					isSquare: !0,
					Icon: b ? Object(c.b)(b) : h
				}), r.a.createElement(d.a, {
					text: (i ? l : o) || "",
					tooltipContentClass: e.tooltipContentClass,
					renderBelow: g
				}), E)
			}, "FormatterButton", u.a)
		},
		"./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.m.less": function(e, t, n) {
			e.exports = {
				LoadingIcon: "jOFrSZE7wRk_lVAP2pBvY",
				loadingIcon: "jOFrSZE7wRk_lVAP2pBvY",
				Text: "EVdFfF5K7kZFMaYpSHbLe",
				text: "EVdFfF5K7kZFMaYpSHbLe",
				Button: "_1Mg8ZhclDuQlkzEqVU21qu",
				button: "_1Mg8ZhclDuQlkzEqVU21qu"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = n("./src/reddit/selectors/editorContent.ts"),
				p = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				m = n("./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.m.less"),
				h = n.n(m);
			const b = c.a.wrapped(l.a, "LoadingIcon", h.a),
				f = Object(a.c)({
					isConverting: (e, t) => Object(u.a)(e, t.draftKey)
				}),
				g = Object(i.b)(f);
			t.a = s.a.memo(g(e => s.a.createElement(d.q, {
				priority: d.b.Plain,
				size: d.c.XS,
				text: s.a.createElement(s.a.Fragment, null, e.isConverting && s.a.createElement(b, {
					sizePx: 12
				}), o.fbt._("Markdown Mode", null, {
					hk: "1DXoXV"
				})),
				"aria-label": o.fbt._("Switch to markdown", null, {
					hk: "OxsM0"
				}),
				tabIndex: -1,
				className: e.className,
				onClick: e.onClick
			}, !e.shouldHideTooltip && s.a.createElement(p.a, {
				text: o.fbt._("Switch to markdown", null, {
					hk: "4mWw83"
				})
			}))))
		},
		"./src/reddit/components/RichTextEditor/Toolbar/MediaInputButton/index.m.less": function(e, t, n) {
			e.exports = {
				ImageIcon: "_1jv-IJjyjDSSVuYe6CzeHv",
				imageIcon: "_1jv-IJjyjDSSVuYe6CzeHv",
				VideoIcon: "uo_2BSPFse-IQNQbclyKb",
				videoIcon: "uo_2BSPFse-IQNQbclyKb",
				HiddenInput: "_2keaDnXIlu9Yq2y-cC8zgu",
				hiddenInput: "_2keaDnXIlu9Yq2y-cC8zgu"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.m.less": function(e, t, n) {
			e.exports = {
				Icon: "_3UAl61hrkRAXX5JQ6m_q8R",
				icon: "_3UAl61hrkRAXX5JQ6m_q8R"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return p
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "l", (function() {
				return y
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "c", (function() {
				return O
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/constants/icons.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				d = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.m.less"),
				l = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const p = (e, t = 0) => n => {
					const o = (e => a.a.wrapped(e, "Icon", l.a))(e);
					return s.a.createElement(o, u({}, n, {
						style: {
							padding: t
						}
					}))
				},
				m = {
					type: "style",
					name: "bold",
					iconName: i.a.bold,
					style: c.k.BOLD,
					tooltipTranslation: () => o.fbt._("Bold", null, {
						hk: "16qNLn"
					})
				},
				h = {
					type: "style",
					name: "italics",
					iconName: i.a.italic,
					style: c.k.ITALIC,
					tooltipTranslation: () => o.fbt._("Italics", null, {
						hk: "3hxpiB"
					})
				},
				b = {
					type: "style",
					name: "strikethrough",
					iconName: i.a.strikethrough,
					style: c.k.STRIKETHROUGH,
					tooltipTranslation: () => o.fbt._("Strikethrough", null, {
						hk: "U4hXC"
					})
				},
				f = {
					type: "style",
					name: "inline_code",
					iconName: i.a.code_inline,
					style: c.k.MONOSPACE,
					tooltipTranslation: () => o.fbt._("Inline Code", null, {
						hk: "1eNxEt"
					})
				},
				g = {
					type: "style",
					name: "spoiler",
					iconName: i.a.spoiler,
					style: c.k.SPOILER,
					tooltipTranslation: () => o.fbt._("Spoiler", null, {
						hk: "1tb6Ht"
					})
				},
				E = {
					type: "style",
					name: "superscript",
					iconName: i.a.superscript,
					style: c.k.SUPERSCRIPT,
					tooltipTranslation: () => o.fbt._("Superscript", null, {
						hk: "sqKFn"
					})
				},
				C = {
					type: "block",
					name: "heading",
					iconName: i.a.text_size,
					block: c.b.H1,
					tooltipTranslation: () => o.fbt._("Heading", null, {
						hk: "4jnBPs"
					})
				},
				y = {
					type: "block",
					name: "unordered_list",
					iconName: i.a.list_bulleted,
					block: c.i.UNORDERED,
					tooltipTranslation: () => o.fbt._("Bulleted List", null, {
						hk: "21Yx7R"
					})
				},
				x = {
					type: "block",
					name: "ordered_list",
					iconName: i.a.list_numbered,
					block: c.i.ORDERED,
					tooltipTranslation: () => o.fbt._("Numbered List", null, {
						hk: "4BmF1X"
					})
				},
				v = {
					type: "block",
					name: "block_quote",
					iconName: i.a.quote,
					block: c.e,
					tooltipTranslation: () => o.fbt._("Quote Block", null, {
						hk: "1xUsGm"
					})
				},
				O = {
					type: "block",
					name: "code_block",
					iconName: i.a.code_block,
					block: c.f,
					tooltipTranslation: () => o.fbt._("Code Block", null, {
						hk: "2y19DH"
					})
				}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/index.m.less": function(e, t, n) {
			e.exports = {
				ToolbarWrapper: "_2w8adx4kIBGPEESCyEmToa",
				toolbarWrapper: "_2w8adx4kIBGPEESCyEmToa",
				isSticky: "r7zyyy152ZTdiHhea0cIj",
				tooltip: "dMXy0l6Saub8-fPDkQvGC",
				SectionSpacer: "_2voJAi1L0g2QbtAFDHSOCK",
				sectionSpacer: "_2voJAi1L0g2QbtAFDHSOCK",
				CollapseIntoOverflow: "_2Sw_-OGBZ8HN7tA8CP2qjP",
				collapseIntoOverflow: "_2Sw_-OGBZ8HN7tA8CP2qjP",
				MarkdownButtonWrapper: "-CJZhr1W053faqFXFYgXO",
				markdownButtonWrapper: "-CJZhr1W053faqFXFYgXO",
				MarkdownButton: "_2Z7RdWBmSoubpoKJAgNIAi",
				markdownButton: "_2Z7RdWBmSoubpoKJAgNIAi"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return P
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "f", (function() {
				return N
			})), n.d(t, "h", (function() {
				return D
			})), n.d(t, "e", (function() {
				return L
			})), n.d(t, "a", (function() {
				return A
			})), n.d(t, "d", (function() {
				return F
			})), n.d(t, "b", (function() {
				return B
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/constants/icons.ts"),
				d = n("./src/reddit/components/CollapseIntoOverflow/index.tsx"),
				l = n("./src/reddit/helpers/richTextEditor/index.ts"),
				u = n("./src/reddit/components/RichTextEditor/editorStateTransforms.ts"),
				p = n("./src/reddit/components/RichTextEditor/helpers/controlsState.ts"),
				m = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				h = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				b = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				f = n("./src/reddit/components/RichTextEditor/table/helpers.ts");
			var g = (e, t, n) => {
					if (Object(m.v)(o.RichUtils.getCurrentBlockType(e))) return e;
					const r = e.getCurrentContent(),
						s = e.getSelection().getEndKey(),
						i = Object(f.l)(t, n),
						a = Object(b.f)(r, s, i, b.a.after, !0),
						c = o.EditorState.push(e, a, h.e);
					return o.EditorState.forceSelection(c, o.SelectionState.createEmpty(i[0].getKey()))
				},
				E = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				C = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx"),
				y = n("./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.tsx"),
				x = n("./src/lib/constants/index.ts"),
				v = n("./src/lib/lessComponent.tsx"),
				O = n("./src/reddit/components/RichTextEditor/Toolbar/MediaInputButton/index.m.less"),
				_ = n.n(O);
			const k = v.a.input("HiddenInput", _.a);
			class S extends s.Component {
				constructor() {
					super(...arguments), this.hiddenInputEl = null, this.onFileInputChange = e => {
						e.stopPropagation();
						const t = this.hiddenInputEl;
						t.files && t.files.length && (this.props.onFilesInput(Array.from(t.files)), t.value = "")
					}, this.onButtonClick = () => {
						this.hiddenInputEl && this.hiddenInputEl.click(), this.props.onClick()
					}, this.onHiddenInputClick = e => e.stopPropagation()
				}
				render() {
					const {
						controlsState: e,
						destSubreddit: t,
						type: n
					} = this.props, o = "image" === n, s = e.blocks[m.a];
					let a = !0;
					if (t && t.allowedPostTypes) {
						const {
							images: e,
							videos: n
						} = t.allowedPostTypes;
						a = o ? e : n
					}
					return i.a.createElement(E.a, {
						iconName: o ? c.a.image_post : c.a.video_post,
						active: s.isActive,
						enabled: s.isEnabled && a,
						tooltip: o ? r.fbt._("Add an image", null, {
							hk: "4bqU7J"
						}) : r.fbt._("Add a video", null, {
							hk: "2dn6oZ"
						}),
						onClick: this.onButtonClick
					}, i.a.createElement(k, {
						multiple: !0,
						innerRef: e => this.hiddenInputEl = e,
						onChange: this.onFileInputChange,
						onClick: this.onHiddenInputClick,
						type: "file",
						accept: Array.from(o ? x.a : x.b).join()
					}))
				}
			}
			var j = n("./src/reddit/components/RichTextEditor/Toolbar/index.m.less"),
				T = n.n(j);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const I = e => i.a.createElement(E.a, w({}, e, {
					tooltipContentClass: T.a.tooltip
				})),
				P = () => i.a.createElement("div", {
					className: T.a.SectionSpacer
				}),
				R = (e, t, n, r, s) => {
					const {
						name: a,
						iconName: c,
						tooltipTranslation: d
					} = e, l = d();
					if ("style" === e.type) {
						const {
							style: o
						} = e;
						return i.a.createElement(I, {
							iconName: c,
							active: t.styles[o].isActive,
							enabled: t.styles[o].isEnabled,
							key: a,
							tooltip: l,
							onClick: () => {
								const e = Object(u.c)(o, n);
								r(e), s(a, ((e, t) => e.getCurrentInlineStyle().contains(t))(e, o))
							}
						})
					} {
						const {
							block: d
						} = e;
						return i.a.createElement(I, {
							iconName: c,
							active: t.blocks[d].isActive,
							enabled: t.blocks[d].isEnabled,
							key: a,
							tooltip: l,
							onClick: () => {
								const e = Object(u.i)(d, n);
								r(e), s(a, ((e, t) => o.RichUtils.getCurrentBlockType(e) === t)(e, d))
							}
						})
					}
				},
				M = (e, t, n, o, r) => e.map(e => R(e, t, n, o, r)),
				N = [C.b, C.e],
				D = [C.j, C.g, C.k, C.i],
				L = [C.d, C.l, C.h, C.a, C.c],
				A = e => i.a.createElement(I, {
					iconName: c.a.link_post,
					active: e.controlsState.link.isActive,
					enabled: e.controlsState.link.isEnabled,
					tooltip: r.fbt._("Link", null, {
						hk: "e4PGW"
					}),
					onClick: () => {
						e.onLinkButtonClick(), e.trackOnClick("link", !0)
					}
				}),
				F = e => i.a.createElement(I, {
					iconName: c.a.table,
					active: e.controlsState.blocks[m.l].isActive,
					enabled: e.controlsState.blocks[m.l].isEnabled,
					tooltip: r.fbt._("Table", null, {
						hk: "3cHfLT"
					}),
					onClick: () => {
						e.onChange(g(e.editorState, 3, 2)), e.trackOnClick("table", !0)
					}
				}),
				B = e => {
					const {
						className: t,
						allowMediaUploads: n = !1,
						destSubreddit: o,
						editorState: r,
						isOverlay: s,
						onChange: c,
						onFilesSelect: u,
						readOnly: m,
						trackOnClick: h,
						onLinkButtonClick: b,
						onMarkdownButtonClick: f,
						editorKey: g
					} = e, E = Object(p.a)(r);
					return m && Object(p.b)(E), i.a.createElement("div", {
						className: Object(a.a)(T.a.ToolbarWrapper, t, {
							[T.a.isSticky]: !s
						})
					}, i.a.createElement(d.a, {
						oveflowMenuDropdownId: g,
						className: T.a.CollapseIntoOverflow,
						editorType: l.a.Post
					}, M(N, E, r, c, h), i.a.createElement(A, {
						controlsState: E,
						trackOnClick: h,
						onLinkButtonClick: b
					}), M(D, E, r, c, h), i.a.createElement(P, null), M(L, E, r, c, h), i.a.createElement(P, null), i.a.createElement(F, {
						controlsState: E,
						editorState: r,
						trackOnClick: h,
						onChange: c
					}), n && i.a.createElement(S, {
						destSubreddit: o,
						controlsState: E,
						onClick: () => h("image_upload"),
						onFilesInput: u,
						type: "image"
					}), n && i.a.createElement(S, {
						destSubreddit: o,
						controlsState: E,
						onClick: () => h("video_upload"),
						onFilesInput: u,
						type: "video"
					})), i.a.createElement("div", {
						className: T.a.MarkdownButtonWrapper
					}, i.a.createElement(y.a, {
						className: T.a.MarkdownButton,
						onClick: f
					})))
				}
		},
		"./src/reddit/components/RichTextEditor/Tooltip/getSelectionClientRect.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js");

			function r() {
				const e = window.getSelection();
				if (!e.rangeCount) return null;
				const t = Object(o.getVisibleSelectionRect)(window);
				return t || (!t && e.focusNode && e.focusNode === e.anchorNode ? e.focusNode.getBoundingClientRect() : null)
			}
		},
		"./src/reddit/components/RichTextEditor/Tooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltipBox: "tVQ1dB4n0mAWdcQNxFq-K",
				dropdown: "_1akkpO3lymdoWGIc5tjIpm",
				triangle: "_2O2U-Vhc1mg9O7DOwp50Aa",
				triangleBack: "_3IfYYXUMUzn2OvoiMUNcaQ",
				triangleFront: "_3CtwSTtkmKXvzDo3TmCp9C",
				triangleBelow: "_1churYJpAwcb-tf0k1c46F"
			}
		},
		"./src/reddit/components/RichTextEditor/Tooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return b
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/index.tsx"),
				a = n("./src/reddit/helpers/dom/index.ts"),
				c = n("./src/reddit/components/RichTextEditor/Tooltip/index.m.less"),
				d = n.n(c);
			const l = 8,
				u = 16,
				p = 15 + u / 2;
			var m;
			! function(e) {
				e[e.None = 0] = "None", e[e.Above = 1] = "Above", e[e.Below = 2] = "Below"
			}(m || (m = {}));
			const h = ({
				isBelow: e = !1,
				style: t
			}) => r.a.createElement("div", {
				className: Object(s.a)(d.a.triangle, {
					[d.a.triangleBelow]: e
				}),
				style: t
			}, r.a.createElement("div", {
				className: d.a.triangleBack
			}), r.a.createElement("div", {
				className: d.a.triangleFront
			}));
			class b extends o.Component {
				constructor(e) {
					super(e), this.containerRef = null, this.updateContainerRef = e => this.containerRef = e, this.setTargetPosition = e => {
						e ? this.updatePositioning(e) : this.setState({
							positioning: null
						})
					}, this.state = {
						positioning: null
					}
				}
				updatePositioning(e) {
					if (!this.containerRef) return;
					const t = this.containerRef.getBoundingClientRect(),
						n = Math.round(t.width),
						o = Math.round(t.height),
						r = this.state.positioning;
					if (!e) {
						if (!r) return;
						if (r.tooltipWidth === n && r.tooltipHeight === o) return
					}
					const s = e ? e.bottom : r.target.bottom,
						i = e ? e.top : r.target.top,
						c = e ? e.left : r.target.left,
						d = Object(a.e)(this.containerRef);
					let l, u, p;
					if (d) {
						const e = d.getBoundingClientRect();
						l = e.bottom - (s || 0), u = c - e.left + d.scrollLeft, p = i - e.top + d.scrollTop
					} else {
						const e = document.documentElement,
							t = window.pageYOffset || e.scrollTop;
						u = c + (window.pageXOffset || e.scrollLeft), p = i + t
					}
					const m = {
						target: {
							top: i,
							left: c
						},
						tooltipWidth: n,
						tooltipHeight: o,
						tooltip: {
							top: p,
							left: u,
							bottom: l
						}
					};
					this.adjustPositionForTriangle(m, d), this.setState({
						positioning: m
					})
				}
				adjustPositionForTriangle(e, t) {
					const {
						trianglePlacement: n
					} = this.props;
					if (!n) return;
					const o = t ? t.offsetWidth : document.documentElement.offsetWidth,
						r = o ? Math.max(e.tooltip.left + e.tooltipWidth - o, 0) : 0;
					e.tooltip.left -= r + p;
					const s = r + p - u / 2;
					let i;
					n === m.Above ? (e.tooltip.top += l, i = -l) : (e.tooltip.top -= e.tooltipHeight + l, i = e.tooltipHeight), e.triangle = {
						top: i,
						left: s
					}
				}
				componentDidUpdate(e, t) {
					e.targetPosition !== this.props.targetPosition ? this.setTargetPosition(this.props.targetPosition || null) : this.updatePositioning()
				}
				componentDidMount() {
					this.setTargetPosition(this.props.targetPosition || null), this.props.onSetPositionUpdater && this.props.onSetPositionUpdater(this.setTargetPosition)
				}
				componentWillUnmount() {
					this.props.onSetPositionUpdater && this.props.onSetPositionUpdater(null)
				}
				render() {
					const {
						aboveParent: e,
						dropdown: t,
						trianglePlacement: n
					} = this.props, {
						positioning: o
					} = this.state, a = o && void 0 !== o.triangle && r.a.createElement(h, {
						isBelow: n === m.Below,
						style: {
							top: o.triangle.top + "px",
							left: o.triangle.left + "px"
						}
					});
					let c = r.a.createElement("div", {
						className: Object(s.a)(d.a.tooltipBox, this.props.className, {
							[d.a.dropdown]: t
						}),
						style: o ? {
							left: o.tooltip.left,
							...e ? {
								bottom: o.tooltip.bottom
							} : {
								top: o.tooltip.top
							}
						} : {},
						ref: this.updateContainerRef
					}, o && this.props.children && r.a.createElement(r.a.Fragment, null, a, this.props.children));
					return this.props.usePortal && (c = Object(i.d)(c, this.props.portalContainer || document.body)), c
				}
			}
		},
		"./src/reddit/components/RichTextEditor/UnorderedList/index.m.less": function(e, t, n) {
			e.exports = {
				UnorderedListWrapper: "vXDC2CysyRNVq3lFirKDs",
				unorderedListWrapper: "vXDC2CysyRNVq3lFirKDs"
			}
		},
		"./src/reddit/components/RichTextEditor/constants/draftEditorCommands.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "g", (function() {
				return s
			})), n.d(t, "h", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			}));
			const o = "bold",
				r = "italic",
				s = "underline",
				i = "undo",
				a = "backspace",
				c = "delete",
				d = "split-block",
				l = "adjust-depth"
		},
		"./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			}));
			const o = "backspace-character",
				r = "insert-fragment",
				s = "insert-characters",
				i = "change-block-data",
				a = "change-block-type",
				c = "remove-range"
		},
		"./src/reddit/components/RichTextEditor/editorStateTransforms.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "a", (function() {
				return x
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./node_modules/immutable/dist/immutable.js"),
				s = n("./src/reddit/components/RichTextEditor/constants/draftEditorCommands.ts"),
				i = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				a = n("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				c = n("./src/reddit/components/RichTextEditor/helpers/modifiers.ts"),
				d = n("./src/reddit/components/RichTextEditor/helpers/styles.ts"),
				l = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const u = (e, t) => {
					return t.getSelection().isCollapsed() ? Object(d.a)(e, t) : Object(d.b)(e, t)
				},
				p = (e, t) => {
					const n = t.getCurrentContent(),
						r = t.getSelection(),
						s = r.getEndKey(),
						c = o.RichUtils.getCurrentBlockType(t) === e ? l.n : e;
					let u = t,
						p = o.Modifier.setBlockType(n, r, c);
					const m = n.getBlockForKey(s).getLength();
					if (Object(l.r)(c) || Object(l.q)(c)) {
						const e = o.SelectionState.createEmpty(r.getStartKey()).merge({
							focusKey: r.getEndKey(),
							focusOffset: m
						});
						u = Object(d.c)(u), p = ((e, t) => {
							const n = Object.keys(l.k).reduce((e, n) => o.Modifier.removeInlineStyle(e, t, l.k[n]), e);
							return Object(a.h)(n, t)
						})(p, e)
					}
					if (Object(l.q)(c) || Object(l.p)(c)) {
						const e = p.getBlockAfter(s);
						if (!e || e.getType() !== c && e.getType() !== l.n) {
							const e = o.SelectionState.createEmpty(s).merge({
								anchorOffset: m,
								focusOffset: m
							});
							p = o.Modifier.splitBlock(p, e), p = o.Modifier.setBlockType(p, p.getSelectionAfter(), l.n)
						}
					}
					return p = p.merge({
						selectionAfter: r
					}), o.EditorState.push(u, p, i.c)
				},
				m = (e, t) => {
					const n = o.Modifier.setBlockType(e, t, l.n);
					return o.Modifier.replaceText(n, t, "", Object(r.OrderedSet)([]))
				},
				h = (e, t) => o.EditorState.forceSelection(e, o.SelectionState.createEmpty(t)),
				b = e => {
					const t = e.getCurrentContent(),
						n = e.getSelection(),
						s = c.d(t, n),
						a = s.getBlockAfter(n.getEndKey()),
						d = o.SelectionState.createEmpty(a.getKey()),
						u = o.Modifier.replaceText(o.Modifier.setBlockType(s, d, l.n), d, "", Object(r.OrderedSet)([])),
						p = o.EditorState.push(e, u, i.d);
					return h(p, a.getKey())
				},
				f = e => {
					const t = e.getCurrentContent(),
						n = e.getSelection(),
						r = t.getBlockForKey(n.getEndKey()),
						i = r.set("depth", Math.max(r.getDepth() - 1, 0)),
						a = t.merge({
							blockMap: t.getBlockMap().merge({
								[r.getKey()]: i
							})
						});
					return o.EditorState.push(e, a, s.a)
				},
				g = e => {
					const t = e.getCurrentContent(),
						n = e.getSelection(),
						r = t.getBlockForKey(n.getEndKey()).getKey(),
						s = o.EditorState.push(e, m(t, n), i.c);
					return h(s, r)
				},
				E = e => {
					const t = e.getCurrentContent(),
						n = e.getSelection(),
						r = t.getBlockForKey(n.getEndKey()),
						s = r.getKey(),
						a = t.getBlockBefore(s).getKey(),
						c = o.SelectionState.createEmpty(s).merge({
							focusOffset: r.getText().length
						}),
						d = o.EditorState.push(e, m(((e, t) => {
							const n = e.getBlockMap().remove(t);
							return e.merge({
								blockMap: n
							})
						})(t, a), c), i.c);
					return h(d, s)
				},
				C = e => {
					const t = c.d(e.getCurrentContent(), e.getSelection());
					return o.EditorState.push(e, t, s.f)
				},
				y = e => {
					const t = c.a(e.getCurrentContent(), e.getSelection(), "\n");
					return o.EditorState.push(e, t, i.d)
				},
				x = e => {
					const t = e.getSelection(),
						n = c.a(e.getCurrentContent(), t, " ");
					return o.EditorState.push(e, n, i.d)
				}
		},
		"./src/reddit/components/RichTextEditor/emotes/Powerups/tooltipAsync.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "PowerupsEmotesTooltip",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("PowerupsEmotesTooltip").then(n.bind(null, "./src/reddit/components/RichTextEditor/emotes/Powerups/Tooltip.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/RichTextEditor/emotes/Powerups/Tooltip.tsx"
				}
			})
		},
		"./src/reddit/components/RichTextEditor/emotes/decorator.m.less": function(e, t, n) {
			e.exports = {
				emote: "Q7hqnjoPSXm7QyvW8qf57",
				sticker: "_1WD0TSe2_gY29FXmFjPCza"
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "d", (function() {
				return y
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./node_modules/immutable/dist/immutable.js"),
				s = n("./src/lib/memoizeByReference/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				a = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				c = n("./src/reddit/components/RichTextEditor/entity/getAllEntitiesInSelection.ts"),
				d = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				l = n("./src/reddit/components/RichTextEditor/helpers/modifiers.ts"),
				u = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const p = "⬛";

			function m(e, t) {
				return e.createEntity(a.a.EMOTE, "IMMUTABLE", t)
			}

			function h(e, t) {
				let n = t.getCurrentContent();
				const r = (n = m(n, e)).getLastCreatedEntityKey();
				n = Object(l.b)(n, t.getSelection(), p, void 0, r);
				const s = o.EditorState.push(t, n, i.d);
				return o.EditorState.forceSelection(s, s.getSelection())
			}

			function b(e, t) {
				if (t.getStartKey() !== t.getEndKey()) return !1;
				const n = e.getBlockForKey(t.getEndKey()).getType();
				return !(Object(u.q)(n) || Object(u.r)(n) || Object(u.t)(n))
			}

			function f(e, t) {
				const n = Object(c.a)(e, t, t => {
					const n = t.getEntity();
					return !!n && e.getEntity(n).getType() === a.a.EMOTE
				});
				let r;
				for (; r = n.pop();) {
					const t = o.SelectionState.createEmpty(r.blockKey).merge({
						anchorOffset: r.start,
						focusOffset: r.end
					});
					e = o.Modifier.removeRange(e, t, "backward")
				}
				return e
			}

			function g(e) {
				const t = e.getSelection();
				if (!t.isCollapsed()) return null;
				const n = e.getCurrentContent().getBlockForKey(t.getFocusKey()),
					o = n.getText(),
					r = n.getCharacterList();
				let s = t.getFocusOffset() - 1;
				const i = [];
				for (; s >= 0;) {
					const e = o[s],
						t = r.get(s),
						n = t && t.getEntity();
					if (!e.trim().length || n) return null;
					if (":" === e && i.length > 0) break;
					i.unshift(e), s--
				}
				return s >= 0 && i.length ? i.join("").toLowerCase() : null
			}

			function E(e, t, n) {
				e.findEntityRanges(e => {
					const t = e.getEntity();
					return !!t && n.getEntity(t).getType() === a.a.EMOTE
				}, t)
			}
			const C = Object(s.a)(e => {
				if (e.getBlockMap().size > 1) return !1;
				const t = e.getFirstBlock();
				let n = 0;
				return E(t, () => n++, e), n <= 3 && n === t.getLength()
			});

			function y(e, t) {
				if (C(e.getCurrentContent()) === C(t.getCurrentContent())) return e;
				const n = e.getCurrentContent(),
					s = n.getFirstBlock();
				return o.EditorState.set(e, {
					currentContent: o.Modifier.mergeBlockData(n, Object(d.b)(s), Object(r.Map)({
						_emote_modified: new Date
					}))
				})
			}
		},
		"./src/reddit/components/RichTextEditor/entity/applyEntityToContentBlock.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js");

			function r(e, t, n, r) {
				let s = e.getCharacterList();
				return s = s.withMutations(e => {
					for (let s = t; s < n; s++) e.set(s, o.CharacterMetadata.applyEntity(e.get(s), r))
				}), e.set("characterList", s)
			}
		},
		"./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/components/RichTextEditor/entity/applyEntityToContentBlock.ts");

			function r(e, t, n, r, s) {
				const i = e.createEntity(n.getType(), n.getMutability(), n.getData()),
					a = e.getLastCreatedEntityKey();
				return [i, Object(o.a)(t, r, s, a)]
			}

			function s(e, t, n = !1) {
				const o = new Map;
				let s = t,
					i = e;
				return t.forEach((e, t) => {
					e && t && e.findEntityRanges(e => !!e.getEntity(), (n, r) => {
						const s = e.getEntityAt(n),
							i = o.get(s) || [];
						i.push({
							start: n,
							end: r,
							blockKey: t
						}), o.set(s, i)
					})
				}), o.forEach((t, o) => {
					const a = e.getEntity(o);
					(n ? t.slice(1) : t).forEach(({
						start: e,
						end: t,
						blockKey: n
					}) => {
						const o = s.get(n),
							[c, d] = r(i, o, a, e, t);
						i = c, s = s.set(n, d)
					})
				}), [i, s]
			}
		},
		"./src/reddit/components/RichTextEditor/entity/entityTypes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const o = {
					COMMENT_LINK: "COMMENT_LINK",
					EMOTE: "EMOTE",
					LINK: "LINK",
					POST_LINK: "POST_LINK",
					SUBREDDIT_LINK: "SUBREDDIT_LINK",
					USER_LINK: "USER_LINK",
					USER_MENTION: "USER_MENTION"
				},
				r = new Set([o.COMMENT_LINK, o.LINK, o.POST_LINK, o.SUBREDDIT_LINK, o.USER_LINK, o.USER_MENTION]),
				s = (e, t) => {
					const n = e && t.getEntity(e);
					return !!n && (e => r.has(e))(n.getType())
				}
		},
		"./src/reddit/components/RichTextEditor/entity/getAllEntitiesInSelection.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts");

			function r(e, t, n) {
				const r = [];
				return Object(o.a)(e, t, (e, o) => {
					const s = t.getStartKey() === o ? t.getStartOffset() : 0,
						i = t.getEndKey() === o ? t.getEndOffset() : e.getLength();
					e.findEntityRanges(n, (t, n) => {
						s <= n && i >= t && r.push({
							blockKey: o,
							entityKey: e.getEntityAt(t),
							start: t,
							end: n
						})
					})
				}), r
			}
		},
		"./src/reddit/components/RichTextEditor/entity/getSelectionEntityInfo.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js");

			function r(e, t) {
				const n = t.getFocusKey();
				if (n !== t.getAnchorKey()) return;
				const r = e.getBlockForKey(n),
					s = t.getStartOffset(),
					i = t.getEndOffset(),
					a = r.getEntityAt(i) || (i > 0 ? r.getEntityAt(i - 1) : null);
				if (!a) return;
				let c, d;
				if (r.findEntityRanges(e => e.getEntity() === a, (e, t) => {
						e <= s && i <= t && (c = e, d = t)
					}), "number" != typeof c || "number" != typeof d) return;
				const l = r.getText().slice(c, d);
				return {
					entitySelection: o.SelectionState.createEmpty(n).merge({
						anchorOffset: c,
						focusOffset: d
					}),
					entityKey: a,
					entityText: l
				}
			}
		},
		"./src/reddit/components/RichTextEditor/entity/link/decorator.m.less": function(e, t, n) {
			e.exports = {
				RegularLink: "_1FRfMxEAy__7c8vezYv9qP",
				regularLink: "_1FRfMxEAy__7c8vezYv9qP"
			}
		},
		"./src/reddit/components/RichTextEditor/entity/link/helpers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "e", (function() {
				return v
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./src/lib/linkMatchers/index.ts"),
				s = n("./src/lib/linkMatchers/customLinks.ts"),
				i = n("./src/lib/memoizeByReference/index.ts"),
				a = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				c = n("./src/reddit/components/RichTextEditor/entity/getAllEntitiesInSelection.ts"),
				d = n("./src/reddit/components/RichTextEditor/entity/getSelectionEntityInfo.ts"),
				l = n("./src/reddit/components/RichTextEditor/spoiler/helpers.ts"),
				u = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const p = [a.a.SUBREDDIT_LINK, a.a.USER_LINK, a.a.USER_MENTION],
				m = [...p, a.a.LINK];

			function h(e, t, n) {
				e.findEntityRanges(e => {
					const t = e.getEntity();
					return !!t && m.includes(n.getEntity(t).getType())
				}, t)
			}
			const b = e => {
					const t = r.a.match(e);
					if (t && t.length && t[0]) {
						const {
							schema: e,
							url: n
						} = t[0];
						return {
							linkPrefix: e,
							url: n
						}
					}
					return {
						linkPrefix: "",
						url: ""
					}
				},
				f = Object(i.a)((function(e) {
					const t = e.getCurrentContent(),
						n = e.getSelection();
					if (!n.isCollapsed()) return;
					if (Object(u.q)(t.getBlockForKey(n.getStartKey()).getType())) return;
					const s = n.getFocusKey(),
						i = t.getBlockForKey(s),
						a = n.getFocusOffset(),
						c = i.getText(),
						d = c.lastIndexOf(" ", a - 1) + 1,
						p = c.slice(d, a);
					if (!p) return;
					const m = r.f.match(p);
					if (!m) return;
					const h = m[m.length - 1],
						b = d + h.index,
						f = d + h.lastIndex;
					let g = -1;
					if (i.findEntityRanges(e => !!e.getEntity(), (e, t) => {
							e < a && (g = t)
						}), g >= b) return;
					return i.getCharacterList().slice(b, f).find(l.b) ? void 0 : {
						selection: o.SelectionState.createEmpty(s).merge({
							anchorOffset: b,
							focusOffset: f
						}),
						url: h.url
					}
				}));

			function g(e, t, n) {
				const r = e.getSelection();
				let s = e.getCurrentContent();
				const i = (s = s.createEntity(a.a.LINK, "MUTABLE", {
					url: n
				})).getLastCreatedEntityKey();
				return s = (s = o.Modifier.applyEntity(s, t, i)).merge({
					selectionAfter: r
				}), o.EditorState.push(e, s, "apply-entity")
			}
			const E = Object(i.a)((function(e) {
				const t = e.getCurrentContent(),
					n = Object(d.a)(t, e.getSelection());
				if (!n) return;
				const o = t.getEntity(n.entityKey);
				if (o.getType() !== a.a.LINK) return;
				const {
					url: r
				} = o.getData();
				return {
					url: r,
					...n
				}
			}));
			const C = Object(i.a)((function(e) {
				const t = e.getCurrentContent(),
					n = e.getSelection(),
					o = Object(d.a)(t, n);
				if (!o) return;
				const r = n.getFocusOffset(),
					s = t.getEntity(o.entityKey),
					{
						linkPrefix: i
					} = b(o.entityText);
				return !p.includes(s.getType()) || !o.entityText.startsWith(i) || r - o.entitySelection.getStartOffset() < i.length ? void 0 : {
					internalName: o.entityText.slice(i.length),
					...o
				}
			}));

			function y(e, t, n, r) {
				let s = "apply-entity",
					i = e.getCurrentContent(),
					c = e;
				const l = Object(d.a)(i, t);
				if (n)
					if (l) {
						const e = i.getEntity(l.entityKey),
							{
								url: t
							} = e.getData();
						t !== n && (i = i.mergeEntityData(l.entityKey, {
							url: n
						})), void 0 !== r && l.entityText !== r && (i = o.Modifier.replaceText(i, l.entitySelection, r, void 0, l.entityKey), s = "insert-characters")
					} else {
						if (void 0 === r) throw new Error("New link display text must be provided!");
						const e = (i = i.createEntity(a.a.LINK, "MUTABLE", {
							url: n
						})).getLastCreatedEntityKey();
						i = o.Modifier.replaceText(i, t, r, void 0, e), s = "insert-characters"
					}
				else i = (i = o.Modifier.applyEntity(i, t, "")).merge({
					selectionAfter: e.getSelection()
				});
				return i === e.getCurrentContent() ? e : c = o.EditorState.push(c, i, s)
			}

			function x(e, t) {
				const n = C(e);
				if (!n) return e;
				const {
					linkPrefix: r,
					url: i
				} = b(n.entityText), a = `${r===s.d.mention?s.d.profile:r}${t}`, c = n.entitySelection.getStartOffset() + a.length;
				let d = y(e, n.entitySelection, i, a);
				return d = o.EditorState.forceSelection(d, n.entitySelection.merge({
					anchorOffset: c,
					focusOffset: c
				}))
			}

			function v(e, t) {
				if (t.getStartKey() !== t.getEndKey()) return !1;
				const n = e.getBlockForKey(t.getEndKey()).getType();
				return !Object(u.q)(n) && !Object(u.t)(n) && !Object(c.a)(e, t, t => {
					const n = t.getEntity();
					return !!n && e.getEntity(n).getType() !== a.a.LINK
				}).length
			}
		},
		"./src/reddit/components/RichTextEditor/helpers/common.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "h", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "g", (function() {
				return h
			}));
			var o, r = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
				i = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			! function(e) {
				e.before = "before", e.after = "after"
			}(o || (o = {}));
			const a = (e, t) => new r.ContentBlock({
					key: e || Object(r.genKey)(),
					...t ? {
						text: t,
						characterList: Object(s.List)(Object(s.Repeat)(r.CharacterMetadata.create(), t.length))
					} : {}
				}),
				c = e => e.props.children,
				d = e => c(e).props.block,
				l = (e, t, n, s = o.after, c = !1, d = !1) => {
					const l = [];
					let p = -1;
					if (e.getBlockMap().forEach((e, r) => {
							s === o.after && l.push(e), r === t && (l.push(...n), p = l.length - 1), s === o.before && l.push(e)
						}), p >= 0) {
						if (c) {
							const e = l[p + 1];
							e && e.getType() === i.n || l.splice(p + 1, 0, a())
						}
						if (d) {
							const e = p - n.length,
								t = l[e];
							t && t.getType() === i.n || l.splice(e + 1, 0, a())
						}
					}
					return e.merge({
						blockMap: r.BlockMapBuilder.createFromArray(l),
						selectionAfter: u(n[n.length - 1], !1, !0)
					})
				},
				u = (e, t = !1, n = !1) => {
					let o = r.SelectionState.createEmpty(e.getKey()).merge({
						hasFocus: n
					});
					return t && (o = o.merge({
						anchorOffset: e.getLength(),
						focusOffset: e.getLength()
					})), o
				},
				p = (e, t) => {
					let n = e.getBlockBefore(t),
						o = e.getBlockMap();
					return o.get(t) ? (o = o.size > 1 ? o.remove(t) : o.set(t, a(t)), n = n || o.first(), e.merge({
						blockMap: o,
						selectionAfter: u(n, !0)
					})) : e
				},
				m = (e, t) => t.querySelector(`[data-block][data-offset-key="${e}-0-0"]`),
				h = e => e.getType() === i.n && !e.getText()
		},
		"./src/reddit/components/RichTextEditor/helpers/controlsState.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return g
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/forEach.js"),
				r = n.n(o),
				s = n("./src/lib/forEachGroup/index.ts"),
				i = n("./src/lib/memoizeByReference/index.ts"),
				a = n("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				c = n("./src/reddit/components/RichTextEditor/entity/link/helpers.tsx"),
				d = n("./src/reddit/components/RichTextEditor/media/helpers.ts"),
				l = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				u = n("./src/reddit/components/RichTextEditor/table/helpers.ts"),
				p = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts"),
				m = n("./src/reddit/components/RichTextEditor/helpers/styles.ts");
			const h = e => {
					const t = e.getCurrentContent(),
						n = e.getSelection(),
						o = {};
					r()(l.k, e => o[e] = {
						isActive: !1,
						isEnabled: !1
					});
					const i = new Set(Object.keys(o));
					if (i.delete(l.k.HIGHLIGHT), n.isCollapsed()) {
						const r = t.getBlockForKey(n.getEndKey()),
							s = r.getType();
						Object(l.q)(s) || Object(l.r)(s) || Object(l.t)(s) || i.forEach(e => o[e].isEnabled = !0), e.getCurrentInlineStyle().forEach(e => {
							e && o[e] && (o[e].isActive = !0)
						}), Object(u.i)(r) && (o[l.k.BOLD] = {
							isEnabled: !1,
							isActive: !1
						})
					} else {
						Object(m.e)(t, n).forEach(e => {
							i.delete(e), o[e] && (o[e].isActive = !0, o[e].isEnabled = !0)
						}), Object(p.a)(t, n, (e, r) => {
							if (!i.size) return !1;
							const a = n.getStartKey() === r ? n.getStartOffset() : 0,
								c = n.getEndKey() === r ? n.getEndOffset() : e.getLength(),
								d = e.getType(),
								u = e.getCharacterList();
							Object(l.q)(d) || Object(l.r)(d) || Object(l.t)(d) || Object(s.a)(u, {
								start: a,
								end: c
							}, (n, r, s, a) => {
								const c = n.getStyle(),
									d = n.getEntity(),
									l = d ? t.getEntity(d) : null;
								if (i.forEach(t => {
										const n = !o[t].isActive,
											r = Object(m.f)(c, e, l, t, n);
										r && r !== c && (o[t].isEnabled = !0, i.delete(t))
									}), !i.size) return !1
							})
						})
					}
					return o
				},
				b = e => {
					const t = {};
					return r()(l.b, n => t[n] = {
						isActive: !1,
						isEnabled: e
					}), t
				},
				f = Object(i.a)(e => {
					const t = e.getCurrentContent(),
						n = e.getSelection(),
						o = (e => {
							const t = e.getCurrentContent(),
								n = e.getSelection();
							let o = b(!0),
								s = null;
							if (n.isCollapsed()) s = t.getBlockForKey(n.getEndKey()).getType();
							else {
								let e = null;
								Object(p.a)(t, n, (t, n) => {
									const r = t.getType();
									return Object(l.t)(r) ? (o = b(!1), !1) : (null === e && (e = r), e !== r ? (e = null, !1) : void 0)
								}), s = e
							}
							return null !== s && ((Object(l.v)(s) || Object(l.t)(s)) && r()(o, e => {
								e.isEnabled = !1
							}), o[s].isActive = !0), o
						})(e);
					return {
						giphy: {
							isActive: !1,
							isEnabled: o[l.a].isEnabled && !Object(d.j)(t)
						},
						emote: {
							isActive: !1,
							isEnabled: Object(a.b)(t, n)
						},
						link: {
							isActive: !1,
							isEnabled: Object(c.e)(t, n)
						},
						blocks: o,
						styles: h(e)
					}
				}),
				g = e => {
					r()(e.blocks, e => {
						e.isEnabled = !1
					}), r()(e.styles, e => {
						e.isEnabled = !1
					}), e.link.isEnabled = !1
				}
		},
		"./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts": function(e, t, n) {
			"use strict";

			function o(e, t, n) {
				const o = t.getStartKey(),
					r = t.getEndKey();
				if (o === r) return void n(e.getBlockForKey(o), o);
				let s = !1;
				e.getBlockMap().forEach((e, t) => {
					if (t === o && (s = !0), !s || !e || !t) return;
					const i = n(e, t);
					return t !== r && i
				})
			}
			n.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/components/RichTextEditor/helpers/modifiers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts");

			function s(e, t) {
				const n = t.getStartKey();
				if (n !== t.getEndKey()) return;
				const o = e.getBlockForKey(n),
					s = t.getStartOffset(),
					i = t.getEndOffset(),
					a = s > 0 ? o.getEntityAt(s - 1) : null,
					c = o.getEntityAt(i);
				if (!a || !c || a !== c) return;
				const d = e.getEntity(c),
					l = o.getCharacterList().toSeq().skip(i).takeWhile(e => !!e && e.getEntity() === c).count(),
					[u, p] = Object(r.a)(e, o, d, i, i + l);
				return u.merge({
					blockMap: u.getBlockMap().set(o.getKey(), p)
				})
			}

			function i(e, t, n) {
				const r = s(e, t) || e;
				return o.Modifier.replaceWithFragment(r, t, n)
			}

			function a(e, t, n, r, i) {
				let a = e;
				return -1 !== n.indexOf("\n") && (a = s(e, t) || a), o.Modifier.replaceText(a, t, n, r, i)
			}

			function c(e, t, n, r, i) {
				let a = e;
				return -1 !== n.indexOf("\n") && (a = s(e, t) || a), o.Modifier.insertText(a, t, n, r, i)
			}

			function d(e, t) {
				const n = s(e, t) || e;
				return o.Modifier.splitBlock(n, t)
			}
		},
		"./src/reddit/components/RichTextEditor/helpers/sliceContiguousBlocks.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/lodash/forEach.js"),
				r = n.n(o);
			t.a = (e, t) => {
				const n = e.getBlocksAsArray(),
					o = t.getKey(),
					s = t.getType();
				let i = null,
					a = null,
					c = !1;
				if (r()(n, (e, t) => {
						if (c || e.getKey() !== o || (c = !0), e.getType() === s) null === i && (i = t), a = t;
						else {
							if (c) return !1;
							i = null, a = null
						}
					}), c) return a = a || 0, {
					start: i = i || 0,
					blocks: n.slice(i, a + 1)
				}
			}
		},
		"./src/reddit/components/RichTextEditor/helpers/styles.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return u
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./node_modules/immutable/dist/immutable.js"),
				s = n("./src/lib/forEachGroup/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				a = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				c = n("./src/reddit/components/RichTextEditor/table/helpers.ts"),
				d = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts");
			const l = Object(r.OrderedSet)([]),
				u = (e, t, n, o, s = !0) => {
					const d = t.getType();
					if (Object(a.q)(d) || Object(a.r)(d) || Object(a.t)(d)) return;
					if (o === a.k.BOLD && Object(c.i)(t)) return;
					const u = n ? n.getType() : null;
					return (u === i.a.SUBREDDIT_LINK || u === i.a.USER_LINK) && o !== a.k.SPOILER && o !== a.k.MONOSPACE || u === i.a.EMOTE ? void 0 : o === a.k.MONOSPACE || o === a.k.SPOILER ? s ? Object(r.OrderedSet)([o]) : l : (e.has(a.k.MONOSPACE) || e.has(a.k.SPOILER)) && s ? Object(r.OrderedSet)([o]) : !s || o !== a.k.SUPERSCRIPT && o !== a.k.SUBSCRIPT ? s ? e.add(o) : e.has(o) ? e.delete(o) : void 0 : e.delete(a.k.SUBSCRIPT).delete(a.k.SUPERSCRIPT).add(o)
				},
				p = (e, t) => {
					let n = null,
						o = !0;
					return Object(d.a)(e, t, (r, d) => {
						const l = r.getType(),
							u = Object(c.i)(r);
						if (u || (o = !1), Object(a.q)(l) || Object(a.r)(l) || Object(a.t)(l)) return !1;
						const p = t.getStartKey() === d ? t.getStartOffset() : 0,
							m = t.getEndKey() === d ? t.getEndOffset() : r.getLength(),
							h = r.getCharacterList();
						Object(s.a)(h, {
							start: p,
							end: m
						}, t => {
							const o = t.getEntity();
							if (o && e.getEntity(o).getType() === i.a.SUBREDDIT_LINK) return;
							let r = t.getStyle();
							return u && (r = r.add(a.k.BOLD)), null === n ? n = r.asMutable() : n.intersect(r), !(n && !n.size) && void 0
						})
					}), null === n ? [] : (o && n.delete(a.k.BOLD), n.toJS())
				},
				m = (e, t) => {
					const n = t.getCurrentContent(),
						r = t.getSelection();
					let i = n.getBlockMap();
					const c = -1 === p(n, r).indexOf(e);
					Object(d.a)(n, r, (t, d) => {
						if (!t || !d) return !1;
						const l = r.getStartKey() === d ? r.getStartOffset() : 0,
							p = r.getEndKey() === d ? r.getEndOffset() : t.getLength(),
							m = t.getCharacterList(),
							h = m.withMutations(r => {
								Object(s.a)(m, {
									start: l,
									end: p
								}, (s, i, d, l) => {
									const p = s.getStyle(),
										m = s.getEntity(),
										h = m ? n.getEntity(m) : null,
										b = u(p, t, h, e, c);
									if (b) {
										const e = ((e, t) => o.CharacterMetadata.create({
											style: t,
											entity: t.has(a.k.SPOILER) ? null : e.getEntity()
										}))(s, b);
										for (let t = d; t < l; t++) r.set(t, e)
									}
								})
							});
						if (h !== m) {
							const e = t.set("characterList", h);
							i = i.set(d, e)
						}
					});
					const l = n.merge({
						blockMap: i,
						selectionAfter: r
					});
					return o.EditorState.push(t, l, "change-inline-style")
				},
				h = (e, t) => {
					const n = t.getCurrentContent(),
						r = t.getSelection(),
						s = n.getBlockForKey(r.getStartKey()),
						i = s.getEntityAt(r.getStartOffset()),
						a = i ? n.getEntity(i) : null,
						c = t.getCurrentInlineStyle(),
						d = u(c, s, a, e, !c.has(e));
					let l = t;
					return d && (l = o.EditorState.setInlineStyleOverride(l, d)), l
				},
				b = e => o.EditorState.setInlineStyleOverride(e, l),
				f = (e, t) => {
					const n = e.getSelection(),
						o = t.getSelection();
					return n.getStartOffset() > 0 || n.getFocusKey() === o.getFocusKey() || e.getCurrentInlineStyle().isEmpty() ? e : b(e)
				}
		},
		"./src/reddit/components/RichTextEditor/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3YZ-jFfccqhepgq1dDuLEv",
				container: "_3YZ-jFfccqhepgq1dDuLEv",
				FocusableContent: "_3wl1bRnSzxHkKJfvqakrNI",
				focusableContent: "_3wl1bRnSzxHkKJfvqakrNI",
				showSubmitButton: "_3Imp2y02BMA96sEJAe9M3M",
				mRedesign: "_2sl29I15jbNPrKiiB9kfVf",
				editorWrapper: "_2baJGEALPiEMZpWB2iWQs7",
				mExpanded: "_1UhKfcyzvaWRtDdXZmzg6D",
				userIcon: "_1wS6Q6S9RvAbzxaselfK2i",
				CurrentUserIcon: "_1RdaOAYbtM4Zwt3M_YE8kp",
				currentUserIcon: "_1RdaOAYbtM4Zwt3M_YE8kp",
				hasInitialHeight: "_35E-zXyMmfsLI7nv_sBvFL",
				hasInitialMinHeight: "_18GfdTZmF2EPjYSkBDE0WI",
				noBorder: "HXDWn-rmYOwqGcGtz9AKm",
				insetSubmitButton: "_3b2mbY1nb1R-z21ihISt7z",
				emptyContent: "_3cP1eCSI5AeGc6__VQ1axu",
				focusedContent: "_2O6bpyGivXLGxZ0LErKCzW"
			}
		},
		"./src/reddit/components/RichTextEditor/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = (n("./node_modules/draft-js/dist/Draft.css"), n("./node_modules/fbt/lib/FbtPublic.js")),
				s = n("./node_modules/lodash/filter.js"),
				i = n.n(s),
				a = n("./node_modules/react/index.js"),
				c = n.n(a),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				u = n("./node_modules/shallowequal/index.js"),
				p = n.n(u),
				m = n("./src/lib/classNames/index.ts"),
				h = n("./src/lib/fastdom/index.ts"),
				b = n("./src/lib/lessComponent.tsx"),
				f = n("./src/lib/linkMatchers/customLinks.ts"),
				g = n("./src/lib/logs/console.ts"),
				E = n("./src/telemetry/models/Media.ts"),
				C = n("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				y = n("./src/reddit/actions/postCreation/mediaUpload.ts"),
				x = n("./src/reddit/featureFlags/index.ts"),
				v = n("./src/reddit/helpers/trackers/postComposer.ts"),
				O = n("./src/reddit/models/PostCreationForm/index.ts"),
				_ = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const k = {
				BREAK_HEADER_ENTITY: "BREAK_HEADER_ENTITY",
				CONVERT_TO_LIST_ON_SPACE: "CONVERT_TO_LIST_ON_SPACE",
				EXEC_TABLE_ON_ENTER_HANDLER: "EXEC_TABLE_ON_ENTER_HANDLER",
				INSERT_LINE_BREAK: "INSERT_LINE_BREAK",
				LINKIFY_ON_ENTER: "LINKIFY_ON_ENTER",
				LINKIFY_ON_SPACE: "LINKIFY_ON_SPACE",
				MAKE_PLAIN_BLOCK: "MAKE_PLAIN_BLOCK",
				OPEN_LINK_TOOLTIP: "OPEN_LINK_TOOLTIP",
				REDUCE_LIST_INDENT: "REDUCE_LIST_INDENT",
				REMOVE_EXTRA_LIST_ITEM: "REMOVE_EXTRA_LIST_ITEM",
				RESET_CURRENT_AND_PREVIOUS_BLOCKS: "RESET_CURRENT_AND_PREVIOUS_BLOCKS",
				SUBMIT: "SUBMIT"
			};
			const S = e => {
					const t = e.getCurrentContent().getBlockMap();
					if (t.size > 2 || (e => !!e.reduce((e = 0, t) => e + t.getLength(), 0))(t) || (e => !!e.find(e => Object(_.o)(e.getType())))(t)) return null; {
						const n = e.getSelection();
						if (n.isCollapsed() && n.getFocusKey() === t.first().getKey()) return n.getFocusKey()
					}
				},
				j = e => {
					const t = e.getCharacterList().map(e => o.CharacterMetadata.create({
						entity: e.getEntity()
					}));
					return e.set("characterList", t)
				};
			var T = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				w = n("./src/reddit/components/RichTextEditor/constants/draftEditorCommands.ts"),
				I = n("./node_modules/lodash/escape.js"),
				P = n.n(I),
				R = n("./src/reddit/components/RichTextEditor/media/helpers.ts"),
				M = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				N = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				D = n("./node_modules/immutable/dist/immutable.js"),
				L = n("./src/reddit/helpers/dom/index.ts"),
				A = n("./node_modules/lodash/chunk.js"),
				F = n.n(A),
				B = n("./node_modules/lodash/flatten.js"),
				U = n.n(B),
				K = n("./node_modules/lodash/takeWhile.js"),
				W = n.n(K),
				G = n("./src/reddit/components/RichTextEditor/helpers/modifiers.ts"),
				H = n("./src/reddit/components/RichTextEditor/table/helpers.ts"),
				q = n("./node_modules/lodash/last.js"),
				V = n.n(q),
				z = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				Q = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts"),
				Y = n("./node_modules/lodash/find.js"),
				J = n.n(Y);
			var X = (e, t) => {
				const n = e.getSelection(),
					r = e.getCurrentContent(),
					s = r.getBlockForKey(n.getAnchorKey()),
					i = r.getBlockForKey(n.getFocusKey()),
					[a, c] = Object(H.e)(r, s, i);
				if (!a || a !== c) return e;
				const d = Object(H.g)(s),
					l = Object(H.g)(i),
					{
						blocks: u,
						start: p
					} = a,
					{
						colCount: m
					} = l,
					h = u.length / m,
					{
						minCol: b,
						minRow: f,
						maxCol: g,
						maxRow: E
					} = Object(H.f)(d, l),
					C = u.filter(e => {
						const {
							rowIndex: n,
							colIndex: o
						} = Object(H.g)(e);
						return "rows" === t ? !(f <= n && n <= E) : !(b <= o && o <= g)
					});
				C.sort(H.b);
				const y = "rows" === t ? m : C.length / h,
					x = U()(Object(H.d)(F()(C, y))),
					v = r.getBlocksAsArray(),
					O = [...v.slice(0, p), ...x, ...v.slice(p + u.length)],
					_ = r.merge({
						blockMap: o.BlockMapBuilder.createFromArray(O)
					}),
					k = {
						colIndex: b,
						rowIndex: f
					};
				let S = J()(x, e => Object(H.h)(k, Object(H.g)(e)));
				S || (S = x.length ? x[x.length - 1] : v[p > 0 ? p - 1 : 0]);
				const j = o.SelectionState.createEmpty(S.getKey()).merge({
					focusOffset: S.getLength(),
					anchorOffset: S.getLength()
				});
				let T = o.EditorState.push(e, _, z.e);
				return T = o.EditorState.forceSelection(T, j)
			};
			var Z = (e, t = !1) => {
				const n = e.getSelection();
				if (n.isCollapsed()) return;
				if (n.getStartKey() === n.getEndKey() && !t) return;
				const r = e.getCurrentContent(),
					s = r.getBlockForKey(n.getAnchorKey()),
					i = r.getBlockForKey(n.getFocusKey()),
					[a, c] = Object(H.e)(r, s, i);
				if (!a || a !== c) return;
				const d = {};
				let l = n;
				if (s === i) {
					const e = Object(H.n)(i, 0, n.getStartOffset()),
						t = Object(H.n)(i, n.getEndOffset());
					d[i.getKey()] = Object(H.j)(i, [e, t]), l = n
				} else {
					if (a.blocks[0].getKey() === n.getStartKey() && V()(a.blocks).getKey() === n.getEndKey()) return X(e, "rows");
					Object(Q.a)(r, n, (e, t) => {
						d[t] = Object(H.n)(e, 0, 0)
					}), l = n.merge({
						anchorOffset: 0,
						focusOffset: 0
					})
				}
				const u = r.merge({
					blockMap: r.getBlockMap().merge(d),
					selectionAfter: l
				});
				return o.EditorState.push(e, u, z.f)
			};
			const $ = (e, t, n, o) => {
					const {
						htmlParts: r
					} = t;
					e.forEach((e, s) => {
						r.push(`<${n} ${o[s]} style="margin: 0px; padding: 4px 9px; border: 1px solid rgb(229, 227, 218);">`), fe(e, t), r.push(`</${n}>`)
					})
				},
				ee = e => {
					const t = e[0],
						n = e[e.length - 1],
						o = [...e].sort(H.b),
						{
							minCol: r,
							maxCol: s
						} = Object(H.f)(Object(H.g)(t), Object(H.g)(n)),
						i = s - r + 1;
					return Object(H.d)(F()(o, i))
				},
				te = (e, t, n) => {
					n ? fe(e[0], t) : ((e, t) => {
						const {
							editor: n,
							htmlParts: o
						} = t, r = n.getEditorKey(), s = e[0].map(e => {
							const {
								alignment: t
							} = Object(H.g)(e);
							return t ? `align="${H.a[t]}"` : ""
						}), [i, ...a] = e;
						o.push(`\n    <table data-editor="${r}">\n      <thead>\n        <tr>`), $(i, t, "th", s), o.push("\n        </tr>\n      </thead>\n      <tbody>"), a.forEach(e => {
							o.push("\n        <tr>"), $(e, t, "td", s), o.push("\n        </tr>")
						}), o.push("\n      </tbody>\n    </table>")
					})(ee(e), t)
				},
				ne = (e, t, n) => {
					n ? t.textParts.push(Ce(e[0], t)) : ((e, t) => {
						const {
							textParts: n
						} = t;
						e.forEach(e => {
							n.push(e.map(e => Ce(e, t)).join(" "))
						})
					})(ee(e), t)
				},
				oe = e => {
					const {
						processed: t,
						remaining: n
					} = e, o = [];
					for (; n.length;) {
						const e = n[0];
						if (!Object(_.v)(e.getType())) break;
						o.push(n.shift())
					}
					const r = !n.length && !t.length,
						s = 1 === o.length && r;
					te(o, e, s), ne(o, e, s), ((e, t, n, o) => {
						if (n)
							if (o) {
								const n = e[0].merge({
									data: Object(D.Map)(),
									type: _.n
								});
								t.blocksParts = [n]
							} else t.blocksParts = U()(ee(e))
					})(o, e, r, s), t.push(...o)
				},
				re = e => Z(e, !0),
				se = (e, t, n) => {
					const r = Object(_.v)(n.first().getType()),
						s = Object(_.v)(n.last().getType()),
						i = e.getBlockForKey(t.getAnchorKey()),
						a = e.getBlockForKey(t.getFocusKey()),
						[c, d] = Object(H.e)(e, i, a);
					return c && c === d ? ((e, t, n, r) => {
						const s = Object(_.v)(r.first().getType()),
							i = e.getBlockForKey(t.getAnchorKey()),
							a = e.getBlockForKey(t.getFocusKey()),
							{
								blocks: c,
								start: d
							} = n;
						c.sort(H.b);
						const l = Object(H.g)(c[0]);
						let {
							colCount: u
						} = l;
						const p = F()(c, u);
						let m = p.length;
						const {
							minRow: h,
							minCol: b
						} = Object(H.f)(Object(H.g)(i), Object(H.g)(a)), f = r.toArray();
						if (s) {
							const n = W()(f, e => Object(_.v)(e.getType()));
							n.sort(H.b);
							const r = Object(H.g)(n[0]).colCount,
								s = F()(n, r),
								i = s.length,
								a = h + i - 1,
								l = b + r - 1;
							if (n.length !== i * r) throw new Error("Invalid table fragment!");
							if (l >= u && p.forEach(e => {
									e.push(...Object(H.l)(l - u + 1, 1))
								}), u = p[0].length, a >= m) {
								const e = F()(Object(H.l)(u, a - m + 1), u);
								p.push(...e)
							}
							m = p.length;
							for (let e = 0; e < i; e++)
								for (let t = 0; t < r; t++) {
									const n = h + e,
										o = b + t,
										r = s[e][t];
									p[n][o] = r.set("key", p[n][o].getKey())
								}
							const g = Object(H.d)(p),
								E = U()(g),
								C = e.getBlocksAsArray(),
								y = [...C.slice(0, d), ...E, ...C.slice(d + c.length)],
								x = Object(H.o)(t, p[h][b], p[a][l]);
							return e.merge({
								blockMap: o.BlockMapBuilder.createFromArray(y),
								selectionAfter: x
							})
						} {
							const n = p[h][b],
								r = Object(H.j)(n, f, " ");
							let s = t;
							return t.getStartKey() !== t.getEndKey() && (s = Object(H.o)(t, n, n)), G.c(e, s, o.BlockMapBuilder.createFromArray([r]))
						}
					})(e, t, c, n) : c || d || !r && !s ? void 0 : ((e, t, n) => {
						const r = Object(_.v)(n.first().getType()),
							s = Object(_.v)(n.last().getType()),
							i = n.toArray();
						r && i.unshift(Object(M.h)()), s && i.push(Object(M.h)());
						const a = o.BlockMapBuilder.createFromArray(i);
						return G.c(e, t, a)
					})(e, t, n)
				};
			var ie = n("./node_modules/draft-js/lib/removeEntitiesAtEdges.js"),
				ae = n.n(ie);
			var ce = (e, t) => {
				const n = t.getStartKey(),
					o = t.getStartOffset(),
					r = t.getEndKey(),
					s = t.getEndOffset(),
					i = ae()(e, t).getBlockMap(),
					a = i.keySeq(),
					c = a.indexOf(n),
					d = a.indexOf(r) + 1;
				return i.slice(c, d).map((e, t) => {
					const i = e.getText(),
						a = e.getCharacterList();
					return n === r ? e.merge({
						text: i.slice(o, s),
						characterList: a.slice(o, s)
					}) : t === n ? e.merge({
						text: i.slice(o),
						characterList: a.slice(o)
					}) : t === r ? e.merge({
						text: i.slice(0, s),
						characterList: a.slice(0, s)
					}) : e
				})
			};
			const de = (e, t) => {
					const n = {
							children: [],
							parentItem: t,
							type: e.getType()
						},
						o = {
							block: e,
							parentList: n
						};
					return n.children.push(o), t && (t.childrenLists = t.childrenLists || [], t.childrenLists.push(n)), {
						list: n,
						item: o
					}
				},
				le = (e, t) => {
					const {
						type: n,
						children: o
					} = e, {
						htmlParts: r
					} = t, s = n === _.b.ORDERED_LIST ? "ol" : "ul";
					r.push(`<${s}>`), o.forEach(e => ((e, t) => {
						const {
							block: n,
							childrenLists: o
						} = e, {
							htmlParts: r
						} = t;
						r.push("<li>"), fe(n, t, !0), o && o.forEach(e => le(e, t)), r.push("</li>")
					})(e, t)), r.push(`</${s}>`)
				},
				ue = (e, t) => {
					const {
						children: n
					} = e;
					n.forEach((e, n) => pe(e, n, t))
				},
				pe = (e, t, n) => {
					const {
						block: o,
						childrenLists: r
					} = e, {
						textParts: s
					} = n, i = " ".repeat(o.getDepth()), a = o.getType() === _.b.ORDERED_LIST ? `${t+1}.` : "-", c = Ce(o, n);
					s.push(`${i}${a} ${c}`), r && r.forEach(e => ue(e, n))
				},
				me = e => {
					const {
						remaining: t
					} = e, n = t.shift(), o = n.getType(), r = [n];
					for (; t.length;) {
						const e = t[0],
							n = e.getType();
						if (!Object(_.s)(n)) break;
						if (e.getDepth() > 0 || n === _.b.UNORDERED_LIST) r.push(t.shift());
						else {
							if (n !== o) break;
							if (r.some(e => e.getType() !== _.b.ORDERED_LIST)) break;
							r.push(t.shift())
						}
					}
					const s = (e => {
						const t = e[0],
							n = {
								type: t.getType(),
								children: []
							};
						let o, r = n,
							s = t.getDepth();
						return e.forEach(e => {
							const t = e.getType(),
								n = e.getDepth();
							if (n > s) {
								const t = de(e, o);
								r = t.list, o = t.item, s = n
							} else {
								for (; s !== n;) r = r.parentItem ? r.parentItem.parentList : r, s--;
								if (t === r.type) o = {
									block: e,
									parentList: r
								}, r.children.push(o);
								else {
									const t = de(e, r.parentItem);
									r = t.list, o = t.item
								}
							}
						}), n
					})(r);
					le(s, e), ue(s, e), e.processed.push(...r)
				};
			var he = (e, t) => {
				const n = e.toArray().filter(e => !Object(_.t)(e.getType()));
				if (1 === n.length) {
					n[0].getType() !== _.n && n.push(new o.ContentBlock({
						key: Object(o.genKey)(),
						type: _.n
					}))
				}
				const r = o.ContentState.createFromBlockArray(n),
					s = JSON.stringify(Object(o.convertToRaw)(r));
				return `<div data-reddit-rtjson="${P()(s)}">${t}</div>`
			};
			const be = () => !!window.clipboardData,
				fe = (e, t, n = !1) => {
					const {
						htmlParts: o
					} = t, r = ge(e, t);
					r && r.forEach(e => o.push(n ? e.innerHTML : e.outerHTML))
				},
				ge = (e, t) => {
					const {
						selection: n,
						editor: o
					} = t, r = n.getStartKey(), s = n.getEndKey(), i = e.getKey(), a = o.refs.editor, c = Object(M.d)(i, a);
					return c ? i === r || i === s ? Object(L.c)(c) : [c] : null
				};
			var Ee = (e, t, n) => {
				const r = e.getCurrentContent(),
					s = e.getSelection(),
					i = ke(e) || ce(r, s);
				if (!i || !i.count()) return;
				const a = i.toArray(),
					c = {
						editor: t,
						editorState: e,
						selection: s,
						remaining: a,
						processed: [],
						htmlParts: [],
						textParts: [],
						blocksParts: [...a]
					};
				for (; c.remaining.length;) {
					const e = c.remaining[0].getType();
					switch (!0) {
						case Object(_.t)(e):
							_e(c);
							break;
						case Object(_.s)(e):
							me(c);
							break;
						case Object(_.v)(e):
							oe(c);
							break;
						default:
							ye(c)
					}
				}
				const d = c.textParts.join("\n"),
					l = (e => Object(D.OrderedMap)(e.map(e => {
						const t = Object(o.genKey)();
						return [t, e.set("key", t)]
					})))(c.blocksParts);
				return ((e, {
					html: t,
					text: n
				}) => {
					be() ? window.clipboardData.setData("text", n) : (t && e.clipboardData.setData("text/html", t), e.clipboardData.setData("text/plain", n))
				})(n, {
					html: he(l, c.htmlParts.join("")),
					text: d
				}), n.stopPropagation(), n.preventDefault(), t.setClipboard(l), l
			};
			const Ce = (e, t) => {
					const n = e.getText(),
						o = t.editorState.getCurrentContent(),
						r = [];
					let s = -1;
					return e.getCharacterList().forEach((e, t) => {
						const i = e && e.getEntity();
						if (i && void 0 !== t) {
							const e = o.getEntity(i);
							e.getType() === N.a.EMOTE && (r.push(n.substring(s + 1, t)), r.push(`:${e.getData().id}:`), s = t)
						}
					}), r.push(n.substring(s + 1, n.length)), r.join("")
				},
				ye = e => {
					const t = e.remaining.shift();
					((e, t) => fe(e, t))(t, e), ((e, t) => {
						t.textParts.push(Ce(e, t))
					})(t, e), e.processed.push(t)
				},
				xe = (e, t) => {
					const n = e.first(),
						r = e.last();
					let s = e;
					if (Object(_.u)(n.getType()) ? s = s.set(s.keySeq().first(), n.merge({
							type: _.n
						})) : Object(_.o)(n.getType()) && (s = o.BlockMapBuilder.createFromArray([Object(M.h)(), ...s.toArray()])), Object(_.u)(r.getType()) || !Object(R.q)(t)) {
						const e = Object(M.h)();
						s = s.set(e.getKey(), e)
					} else if (Object(_.o)(r.getType())) {
						const e = Object(M.h)().merge({
							type: _.j
						});
						s = s.set(e.getKey(), e)
					}
					return s
				},
				ve = (e, t, n) => {
					const o = e.getBlockForKey(t.getStartKey());
					if (Object(_.u)(o.getType())) {
						const o = n.first(),
							r = n.set(n.keySeq().first(), Object(M.h)(o.getKey(), o.getText()).merge({
								type: _.j
							}));
						return G.c(e, t, r)
					}
				},
				Oe = (e, t, n) => {
					const o = ((e, t, n) => {
						const o = t ? t.getText() : "";
						return `<span data-editor="${n}">${P()(o)}</span>`
					})(0, t, n.editor.getEditorKey());
					n.htmlParts.push(o)
				},
				_e = e => {
					const {
						remaining: t
					} = e, n = t.shift(), o = t[0] && Object(_.u)(t[0].getType()) ? t.shift() : void 0;
					Oe(0, o, e), ((e, t) => {
						const n = e ? Ce(e, t) : "";
						t.textParts.push(n)
					})(o, e), e.processed.push(n), o && e.processed.push(o)
				},
				ke = e => {
					const t = e.getSelection(),
						n = t.getFocusKey();
					if (n !== t.getAnchorKey()) return;
					const r = e.getCurrentContent(),
						s = r.getBlockForKey(n);
					if (Object(_.o)(s.getType())) {
						const e = [s],
							t = r.getBlockAfter(s.getKey());
						return t && Object(_.u)(t.getType()) && e.push(t), o.ContentState.createFromBlockArray(e).getBlockMap()
					}
				},
				Se = e => {
					const t = ke(e);
					if (t) return Object(R.d)(e, t.first().getKey())
				},
				je = e => {
					const t = e.getSelection();
					let n = e.getCurrentContent();
					const r = n.getBlockForKey(t.getStartKey()),
						s = n.getBlockForKey(t.getEndKey());
					if (Object(_.t)(r.getType()) || Object(_.t)(s.getType())) {
						if (t.isCollapsed())
							if (Object(_.u)(r.getType())) n = G.d(n, t), n = o.Modifier.setBlockType(n, n.getSelectionAfter(), _.n);
							else if (Object(_.o)(r.getType())) {
							let r = n.getBlockAfter(t.getStartKey());
							return r || (r = (e = Object(R.b)(e, t.getStartKey(), M.a.after)).getCurrentContent().getBlockAfter(t.getStartKey())), o.EditorState.forceSelection(e, Object(M.b)(r, !0))
						}
						return o.EditorState.push(e, n, "split-block")
					}
				},
				Te = (e, t) => {
					const n = e.getSelection(),
						r = e.getCurrentContent(),
						s = "up" === t ? n.getStartKey() : n.getEndKey(),
						i = r.getBlockForKey(s);
					if (!Object(_.o)(i.getType())) return;
					const a = "up" === t ? r.getBlockBefore(s) : r.getBlockAfter(s);
					return a ? o.EditorState.forceSelection(e, Object(M.b)(a, !0)) : Object(R.b)(e, s, "up" === t ? M.a.before : M.a.after)
				},
				we = (e, t) => {
					if (e.shiftKey) return;
					const n = Te(t, "up");
					return n && e.preventDefault(), n
				},
				Ie = (e, t) => {
					if (e.shiftKey) return;
					const n = Te(t, "down");
					return n && e.preventDefault(), n
				},
				Pe = (e, t) => {
					const n = e.getSelection();
					return n.isCollapsed() && 0 === n.getStartOffset() && Object(_.o)(e.getCurrentContent().getBlockForKey(n.getStartKey()).getType())
				};
			var Re = (e, t) => {
					if (!Object(R.q)(t)) return e;
					const n = e.getSelection(),
						o = e.getCurrentContent(),
						r = o.getBlockForKey(n.getStartKey());
					if (Object(_.o)(r.getType())) {
						const t = o.getBlockAfter(r.getKey());
						if (!t || !Object(_.u)(t.getType())) return Object(R.d)(e, r.getKey(), !1)
					}
					return e
				},
				Me = n("./src/reddit/actions/modal.ts"),
				Ne = n("./src/reddit/actions/upload.ts"),
				De = n("./src/reddit/components/ThumbnailSelector/index.tsx"),
				Le = e => null,
				Ae = n("./src/reddit/helpers/media/index.ts"),
				Fe = n("./src/reddit/helpers/richTextEditor/index.ts"),
				Be = n("./src/reddit/selectors/activeModalId.ts");
			const Ue = "application/x-reddit-rte-block";
			var Ke = n("./src/reddit/models/Upload/index.ts"),
				We = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/ImagePreview/index.m.less"),
				Ge = n.n(We);
			const He = b.a.img("Img", Ge.a);
			var qe = b.a.wrapped(e => {
					const {
						className: t,
						url: n
					} = e;
					return c.a.createElement("div", {
						className: t
					}, c.a.createElement(He, {
						draggable: !1,
						src: n
					}))
				}, "Component", Ge.a),
				Ve = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/Placeholder/index.m.less"),
				ze = n.n(Ve);
			const Qe = b.a.div("Message", ze.a);
			var Ye = b.a.wrapped(e => {
					const {
						className: t,
						isImage: n
					} = e;
					return c.a.createElement("div", {
						className: t
					}, c.a.createElement(Qe, null, n ? r.fbt._("Processing video...", null, {
						hk: "3g3QoU"
					}) : r.fbt._("Processing image...", null, {
						hk: "1xoNB3"
					})))
				}, "Component", ze.a),
				Je = n("./src/lib/formatApiError/index.ts"),
				Xe = n("./src/reddit/components/ProgressBar/index.tsx"),
				Ze = n("./src/reddit/controls/Button/index.tsx"),
				$e = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/StatusBar/index.m.less"),
				et = n.n($e);
			const tt = b.a.div("ControlRow", et.a),
				nt = b.a.wrapped(Ze.q, "Button", et.a),
				ot = b.a.wrapped(Ze.q, "ErrButton", et.a),
				rt = b.a.div("Status", et.a),
				st = b.a.wrapped(Xe.a, "ProgressBar", et.a),
				it = b.a.div("ErrorLine", et.a),
				at = e => t => {
					t.stopPropagation(), e(t)
				};
			var ct = b.a.wrapped(e => {
					const {
						upload: t
					} = e, n = at(e.onCancel), o = at(e.onRetry), s = at(e.onRemove), {
						status: i,
						progress: a
					} = t, d = a && a.percent || 0, l = i === Ke.a.FAILED || i === Ke.a.CANCELED, u = (e => {
						const {
							status: t,
							progress: n
						} = e;
						return t === Ke.a.CANCELED ? r.fbt._("Upload was canceled", null, {
							hk: "71azQ"
						}) : t === Ke.a.FAILED ? r.fbt._("Upload failed: {errorText}", [r.fbt._param("errorText", Object(Je.a)(e.error))], {
							hk: "3NGGzE"
						}) : 100 === (n && n.percent || 0) ? r.fbt._("Success!", null, {
							hk: "3622uh"
						}) : r.fbt._("Uploading: {fileName}", [r.fbt._param("fileName", e.file.name)], {
							hk: "H7qzO"
						})
					})(t);
					return c.a.createElement("div", {
						className: e.className
					}, l ? c.a.createElement(it, null) : c.a.createElement(st, {
						innerBarClassName: et.a.ProgressBarInner,
						percent: d
					}), c.a.createElement(tt, null, c.a.createElement(rt, {
						className: l ? et.a.hasError : void 0,
						title: l ? u : void 0
					}, u), c.a.createElement("div", {
						className: et.a.ButtonsContainer
					}, l ? [c.a.createElement(ot, {
						kind: Ze.a.Button,
						priority: Ze.b.Plain,
						key: "remove",
						onClick: s
					}, r.fbt._("Remove", null, {
						hk: "3LUKPE"
					})), c.a.createElement(ot, {
						kind: Ze.a.Button,
						priority: Ze.b.Plain,
						key: "retry",
						onClick: o
					}, r.fbt._("Retry", null, {
						hk: "3sO2HB"
					}))] : c.a.createElement(nt, {
						kind: Ze.a.Button,
						priority: Ze.b.Plain,
						disabled: 100 === d,
						onClick: n
					}, r.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})))))
				}, "Component", et.a),
				dt = n("./node_modules/react-motion/lib/react-motion.js"),
				lt = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				ut = n("./src/reddit/components/PlayButton/index.tsx"),
				pt = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/VideoPreview/index.m.less"),
				mt = n.n(pt);
			const ht = {
					stiffness: 60,
					damping: 20
				},
				bt = [{
					key: "video",
					style: {
						opacity: Object(dt.spring)(1, ht)
					}
				}],
				ft = b.a.wrapped(e => {
					const {
						autoPlay: t = !1,
						className: n,
						showControls: o,
						shouldPause: r,
						style: s,
						dashUrl: i,
						hlsUrl: a,
						otherUrl: d
					} = e;
					return c.a.createElement("div", {
						className: n,
						style: s
					}, c.a.createElement(lt.b, {
						autoPlay: t,
						shouldIgnoreAutoplayPref: !0,
						shouldLoad: !1,
						shouldPause: r,
						isGif: !1,
						hlsSource: a,
						mpegDashSource: i,
						otherSource: d,
						showSettingsIcon: !1,
						showControlBar: o,
						playerClickPlay: !1,
						hideUntilLoaded: !0
					}))
				}, "VideoPlayer", mt.a),
				gt = b.a.img("PosterImg", mt.a),
				Et = b.a.wrapped(e => {
					const {
						className: t,
						onPlayButtonClick: n,
						url: o,
						showPlayButton: r
					} = e;
					return c.a.createElement("div", {
						className: t
					}, c.a.createElement(gt, {
						draggable: !1,
						src: o
					}), r && c.a.createElement(ut.a, {
						className: mt.a.playButton,
						onClick: n
					}))
				}, "Poster", mt.a);
			class Ct extends c.a.Component {
				constructor(e) {
					super(e), this.onPlayButtonClick = () => {
						this.setState({
							showVideo: !0
						})
					}, this.willEnter = () => ({
						opacity: 0
					}), this.willLeave = () => ({
						opacity: Object(dt.spring)(0, ht)
					}), this.didLeave = () => {
						this.setState({
							showVideo: !1
						})
					}, this.state = {
						showVideo: !1
					}
				}
				renderVideo() {
					const {
						props: e
					} = this;
					return c.a.createElement("div", {
						className: e.className
					}, c.a.createElement(ft, {
						dashUrl: e.dashUrl,
						hlsUrl: e.hlsUrl,
						showControls: e.isUploaded && e.isSelected,
						shouldPause: !e.isSelected || void 0
					}))
				}
				render() {
					const {
						className: e,
						isSelected: t,
						posterUrl: n,
						dashUrl: o,
						hlsUrl: r,
						otherUrl: s
					} = this.props;
					if (!n) return this.renderVideo();
					const {
						showVideo: i
					} = this.state, a = !!(o || r || s);
					return c.a.createElement(dt.TransitionMotion, {
						defaultStyles: [],
						styles: t && i && a ? bt : [],
						willEnter: this.willEnter,
						willLeave: this.willLeave,
						didLeave: this.didLeave
					}, a => c.a.createElement("div", {
						className: e
					}, a.map(e => c.a.createElement(ft, {
						key: e.key,
						autoPlay: !0,
						style: e.style,
						otherUrl: s,
						dashUrl: o,
						hlsUrl: r,
						showControls: !0,
						shouldPause: !t || void 0
					})), c.a.createElement(Et, {
						url: n,
						showPlayButton: !i || !t,
						onPlayButtonClick: this.onPlayButtonClick
					})))
				}
			}
			var yt = b.a.wrapped(Ct, "Component", mt.a),
				xt = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/index.m.less"),
				vt = n.n(xt);

			function Ot() {
				return (Ot = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var _t = e => {
					const {
						alignCenter: t,
						isSelected: n,
						onCancel: o,
						onRetry: r,
						onRemove: s,
						upload: i,
						mediaAsset: a,
						thumbnail: d,
						...l
					} = e;
					let u = !1;
					if (i) u = "image" === Object(Ae.f)(i.metadata.mimetype);
					else {
						if (!a) return null;
						u = a.type === R.a.Image || a.type === R.a.AnimatedImage
					}
					const p = i ? i.metadata.height : a.height,
						h = !i || i.status === Ke.a.SUCCESS,
						b = u && !!p && p < 104,
						f = !p;
					return c.a.createElement("div", Ot({
						className: Object(m.a)(vt.a.container, {
							[vt.a.alignCenter]: t,
							[vt.a.isCompact]: b,
							[vt.a.isUploaded]: h,
							[vt.a.isSelected]: n
						})
					}, l), f ? c.a.createElement(Ye, {
						className: vt.a.placeholder,
						isImage: u
					}) : u ? c.a.createElement(qe, {
						className: vt.a.imagePreview,
						url: i ? i.metadata.localUrl : a.imageUrl
					}) : c.a.createElement(yt, {
						className: vt.a.videoPreview,
						dashUrl: a ? a.dashUrl : void 0,
						hlsUrl: a ? a.hlsUrl : void 0,
						isSelected: n,
						isUploaded: h,
						otherUrl: i ? i.metadata.localUrl : void 0,
						posterUrl: d ? d.url : a.posterUrl
					}), i && c.a.createElement(ct, {
						className: vt.a.statusBar,
						onCancel: o,
						onRemove: s,
						onRetry: r,
						upload: i
					}))
				},
				kt = n("./src/reddit/components/RichTextEditor/media/MediaBlock/SelectionHook/index.m.less"),
				St = n.n(kt);

			function jt() {
				return (jt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Tt = b.a.div("HiddenDiv", St.a);
			var wt = ({
					elementRef: e,
					...t
				}) => c.a.createElement(Tt, jt({}, t, {
					innerRef: e
				}), c.a.createElement("br", null)),
				It = n("./src/reddit/components/MakeGifToggle/index.tsx"),
				Pt = n("./src/reddit/icons/svgs/ThumbnailSelect/index.tsx"),
				Rt = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				Mt = n("./src/reddit/layout/row/Inline/index.tsx"),
				Nt = n("./src/reddit/components/RichTextEditor/Toolbar/index.tsx"),
				Dt = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				Lt = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx"),
				At = n("./src/reddit/components/RichTextEditor/media/MediaBlock/Toolbar/index.m.less"),
				Ft = n.n(At);
			const Bt = b.a.wrapped(Dt.a, "FormatterButton", Ft.a),
				Ut = Object(Lt.f)(Rt.b),
				Kt = Object(Lt.f)(Pt.a),
				Wt = b.a.wrapped(Mt.a, "ToolbarContent", Ft.a);
			var Gt = e => {
					const {
						alignCenter: t,
						block: n,
						editorState: o,
						onChange: s,
						showVideoControls: i
					} = e, a = n.getKey(), {
						makeGif: d = !1
					} = Object(R.h)(n) || {};
					return c.a.createElement("div", {
						className: Object(m.a)(Ft.a.container, {
							[Ft.a.alignCenter]: t
						})
					}, c.a.createElement(Wt, {
						className: Ft.a.content
					}, i && c.a.createElement(It.a, {
						isCompact: !0,
						key: "make-gif",
						on: d,
						onClick: () => s(Object(R.r)(o, a, {
							makeGif: !d
						}))
					}), i && e.showThumbnailButton && c.a.createElement(Bt, {
						Icon: Kt,
						onClick: e.onThumbnailButtonClick,
						tooltip: r.fbt._("Choose thumbnail", null, {
							hk: "2gKwDF"
						}),
						tooltipBelow: !0
					}), i && c.a.createElement(Nt.c, null), c.a.createElement(Bt, {
						Icon: Ut,
						onClick: () => s(Object(R.d)(o, a)),
						tooltip: r.fbt._("Remove", null, {
							hk: "2aF1Zw"
						}),
						tooltipBelow: !0
					})))
				},
				Ht = n("./src/reddit/components/RichTextEditor/media/MediaBlock/index.m.less"),
				qt = n.n(Ht);
			const Vt = e => `RTE_VIDEO_THUMBNAIL_SELECTOR_${e.getKey()}`,
				zt = Object(l.a)(e => e.uploads, (e, t) => {
					const n = Object(R.h)(t.block);
					return n && n.uploadInfo && n.uploadInfo.uploadKey
				}, (e, t) => t ? e[t] : void 0),
				Qt = Object(d.b)((e, t) => ({
					upload: zt(e, t),
					isThumbnailSelectorOpen: Object(Be.a)(e) === Vt(t.block),
					isRteVideoPosterEnabled: x.d.rteVideoPoster(e)
				}), (e, t) => ({
					onCancelUpload: t => e(Ne.i(t, !1)),
					toggleVideoThumbnailsSelector: () => e(Object(Me.i)(Vt(t.block)))
				})),
				Yt = b.a.div("MediaContainer", qt.a),
				Jt = b.a.div("Container", qt.a);
			class Xt extends c.a.Component {
				constructor(e) {
					super(e), this.onNativeSelectionChange = () => {
						const e = window.getSelection();
						if (0 === e.rangeCount) return;
						const t = e.getRangeAt(0),
							{
								commonAncestorContainer: n
							} = t;
						this.state.active ? this.rootContainer.contains(n) || this.setState({
							active: !1
						}) : this.rootContainer && this.rootContainer.contains(n) && this.selectBlock(), this.setState({
							isInSelection: Object(L.i)(t, this.rootContainer)
						})
					}, this.selectBlock = () => {
						const e = document.createRange();
						e.selectNodeContents(this.rootContainer);
						const t = window.getSelection();
						t.removeAllRanges(), t.addRange(e), this.setState({
							active: !0
						})
					}, this.isSelected = () => {
						const e = this.props.blockProps.getEditorState().getSelection(),
							t = this.props.block.getKey();
						return this.state.active && Object(R.n)(e, t)
					}, this.onRetryUpload = () => {
						const {
							upload: e
						} = this.props;
						e && this.props.blockProps.onRetryUpload(e.key)
					}, this.onMediaViewClickCapture = e => {
						this.state.active || this.selectBlock()
					}, this.onDragStart = e => {
						e.dataTransfer.effectAllowed = "move", e.dataTransfer.setData(Ue, this.props.block.getKey())
					}, this.onRemove = () => {
						const e = this.props.blockProps.getEditorState();
						this.props.blockProps.onChange(Object(R.d)(e, this.props.block.getKey()))
					}, this.onCancelUpload = async () => {
						this.props.upload && (await this.props.onCancelUpload(this.props.upload.key), this.selectBlock())
					}, this.onToolbarStateChange = e => {
						this.props.blockProps.onChange(e)
					}, this.toggleVideoThumbnailsSelector = () => {
						this.props.toggleVideoThumbnailsSelector()
					}, this.onThumbnailSelect = e => {
						const t = this.props.blockProps.getEditorState(),
							n = this.props.block.getKey();
						let o = Object(R.r)(t, this.props.block.getKey(), {
							thumbnail: e
						});
						o = Object(R.p)(o, n), this.props.blockProps.onChange(o), this.toggleVideoThumbnailsSelector()
					}, this.state = {
						active: !1,
						isInSelection: !1
					}
				}
				shouldComponentUpdate(e, t) {
					return t.active !== this.state.active || t.isInSelection !== this.state.isInSelection || e.block !== this.props.block || e.upload !== this.props.upload || Object(R.n)(e.selection, e.block.getKey())
				}
				componentDidMount() {
					document.addEventListener("selectionchange", this.onNativeSelectionChange);
					const {
						selection: e
					} = this.props;
					e.getHasFocus() && Object(R.n)(e, this.props.block.getKey()) && this.selectBlock(), this.overlayContainer = Le(!0)
				}
				componentWillUnmount() {
					document.removeEventListener("selectionchange", this.onNativeSelectionChange)
				}
				componentWillReceiveProps(e) {
					const t = e.block.getKey(),
						n = this.props.blockProps.getEditorState(),
						o = n;
					n !== o && this.props.blockProps.onChange(o), !this.state.active && e.selection !== this.props.selection && e.selection.getHasFocus() && Object(R.n)(e.selection, t) && this.selectBlock()
				}
				getToolbarOffset() {
					if (!this.props.blockProps.rteFocusableContentRef || !this.rootContainer) return 0;
					const {
						top: e
					} = this.rootContainer.getBoundingClientRect(), {
						top: t
					} = this.props.blockProps.rteFocusableContentRef.getBoundingClientRect();
					return e - t - 30 - 10
				}
				render() {
					const {
						block: e,
						blockProps: t,
						isRteVideoPosterEnabled: n,
						offsetKey: o,
						upload: r
					} = this.props, s = Object(R.h)(e), i = s ? s.thumbnail : void 0, a = !!r && Object(Ae.l)(r.metadata.mimetype || ""), {
						active: d,
						isInSelection: l
					} = this.state, u = t.editorType === Fe.a.Comment;
					return c.a.createElement(Jt, {
						innerRef: e => this.rootContainer = e
					}, d && c.a.createElement(Gt, {
						block: e,
						editorState: t.getEditorState(),
						onChange: this.onToolbarStateChange,
						onThumbnailButtonClick: this.toggleVideoThumbnailsSelector,
						showThumbnailButton: n,
						showVideoControls: a,
						alignCenter: !u
					}), c.a.createElement(wt, null), c.a.createElement("div", {
						contentEditable: !1,
						"data-offset-key": o
					}, c.a.createElement(Yt, {
						draggable: !0,
						onDragStart: this.onDragStart,
						innerRef: e => this.mediaContainer = e
					}, c.a.createElement(_t, {
						isSelected: l || d,
						thumbnail: i,
						onCancel: this.onCancelUpload,
						onClickCapture: this.onMediaViewClickCapture,
						onRetry: this.onRetryUpload,
						onRemove: this.onRemove,
						upload: r,
						mediaAsset: s.mediaAsset,
						alignCenter: !u
					})), r && a && c.a.createElement(De.a, {
						onSelect: this.onThumbnailSelect,
						onToggleModal: this.toggleVideoThumbnailsSelector,
						videoSource: r.metadata.localUrl,
						videoDuration: r.metadata.videoDuration,
						selected: i,
						isOpen: this.props.isThumbnailSelectorOpen
					})), c.a.createElement(wt, null))
				}
			}
			var Zt = Qt(Xt),
				$t = n("./src/reddit/components/RichTextEditor/media/MediaCaption/index.m.less"),
				en = n.n($t);
			class tn extends c.a.PureComponent {
				constructor(e) {
					super(e);
					const {
						contentState: t,
						block: n
					} = Object(M.e)(e.children[0]).props;
					this.mediaBlockKey = t.getBlockBefore(n.getKey()).getKey()
				}
				render() {
					const e = this.props.children[0],
						t = Object(M.e)(e),
						{
							block: n,
							contentState: o
						} = t.props,
						s = o.getBlockForKey(this.mediaBlockKey),
						i = Object(R.h)(s);
					if (!i || !(i.mediaAsset || i.uploadInfo && i.uploadInfo.mediaType)) return null;
					const a = !n.getLength();
					return c.a.createElement("div", {
						className: en.a.wrapper,
						style: {
							"--media-caption-placeholder-text": a ? `'${r.fbt._("Add caption",null,{hk:"3zI8El"})}'` : ""
						}
					}, e)
				}
			}
			const nn = Object(D.Map)({
				[_.j]: {
					element: "div",
					wrapper: c.a.createElement(tn, null)
				}
			});
			var on = (e, t, n) => {
					const r = e.getSelection(),
						s = e.getCurrentContent(),
						i = s.getBlockForKey(r.getAnchorKey()),
						a = s.getBlockForKey(r.getFocusKey()),
						[c, d] = Object(H.e)(s, i, a);
					if (!c || c !== d) return e;
					const {
						blocks: l,
						start: u
					} = c, p = Object(H.g)(i), m = Object(H.g)(a), {
						colCount: h
					} = m;
					l.sort(H.b);
					const b = F()(l, h),
						{
							minCol: f,
							minRow: g,
							maxCol: E,
							maxRow: C
						} = Object(H.f)(p, m),
						y = {
							rowIndex: 0,
							colIndex: 0
						};
					if ("rows" === t) {
						const e = "before" === n ? g : C + 1,
							t = F()(Object(H.l)(h, C - g + 1), h);
						b.splice(e, 0, ...t), y.rowIndex = e
					} else {
						const e = "before" === n ? f : E + 1;
						b.forEach(t => {
							t.splice(e, 0, ...Object(H.l)(E - f + 1, 1))
						}), y.colIndex = e
					}
					const x = Object(H.d)(b),
						v = s.getBlocksAsArray(),
						O = U()(x),
						_ = [...v.slice(0, u), ...O, ...v.slice(u + l.length)],
						k = s.merge({
							blockMap: o.BlockMapBuilder.createFromArray(_)
						}),
						S = J()(O, e => Object(H.h)(y, Object(H.g)(e))),
						j = Object(H.o)(r, S, S);
					let T = o.EditorState.push(e, k, z.e);
					return T = o.EditorState.forceSelection(T, j)
				},
				rn = n("./node_modules/lodash/clamp.js"),
				sn = n.n(rn),
				an = n("./src/reddit/components/RichTextEditor/helpers/sliceContiguousBlocks.ts");
			var cn = (e, t, n = "preserve") => {
				const r = e.getSelection(),
					s = e.getCurrentContent(),
					i = "up" === t || "left" === t ? r.getStartKey() : r.getEndKey(),
					a = s.getBlockForKey(i);
				if (!Object(_.v)(a.getType())) return;
				const c = Object(H.g)(a),
					{
						colCount: d,
						colIndex: l,
						rowIndex: u
					} = c,
					p = s.getBlocksAsArray(),
					m = Object(an.a)(s, a);
				if (!m) return;
				let h = u,
					b = l;
				switch (t) {
					case "up":
						h--;
						break;
					case "down":
						h++;
						break;
					case "left":
						--b < 0 && (h--, b = d - 1);
						break;
					case "right":
						++b >= d && (h++, b = 0)
				}
				const f = {
					rowIndex: h,
					colIndex: b
				};
				let g = i;
				const E = J()(m.blocks, e => Object(H.h)(Object(H.g)(e), f));
				if (E) g = E.getKey();
				else {
					const e = Object(H.c)(f, c) < 0 ? m.start - 1 : m.start + m.blocks.length;
					0 <= e && e < p.length && (g = p[e].getKey())
				}
				const C = s.getBlockForKey(g);
				let y = 0;
				"preserve" === n ? y = sn()(r.getFocusOffset(), 0, C.getLength()) : "end" === n && (y = C.getLength());
				const x = r.merge({
					anchorKey: g,
					focusKey: g,
					focusOffset: y,
					anchorOffset: y
				});
				return r !== x ? o.EditorState.forceSelection(e, x) : void 0
			};
			const dn = (e, t) => {
					const n = t.getCurrentContent(),
						o = t.getSelection(),
						r = n.getBlockForKey(o.getFocusKey()),
						[s] = Object(H.e)(n, r, r);
					if (!s) return;
					const i = Object(H.g)(r);
					let a;
					return (a = i.colIndex === i.colCount - 1 && i.rowIndex === s.blocks.length / i.colCount - 1 && !e.shiftKey && o.getFocusKey() === o.getAnchorKey() ? on(t, "rows", "after") : cn(t, e.shiftKey ? "left" : "right", "end")) ? (e.preventDefault(), a) : void 0
				},
				ln = (e, t) => {
					if (e.shiftKey) return;
					const n = cn(t, "up");
					return n && e.preventDefault(), n
				},
				un = (e, t) => {
					if (e.shiftKey) return;
					const n = cn(t, "down");
					return n && e.preventDefault(), n
				};
			class pn {
				constructor() {
					this.lastRowInsertionState = null
				}
				undoRowInsertion(e) {
					const t = o.EditorState.undo(e);
					return cn(t, "down", "end") || t
				}
				isSelectionInLastRow(e) {
					const t = e.getCurrentContent(),
						n = e.getSelection(),
						o = t.getBlockForKey(n.getFocusKey()),
						[r] = Object(H.e)(t, o, o);
					if (!r) return !1;
					const s = Object(H.g)(r.blocks[0]).colCount,
						i = r.blocks.length / s;
					return Object(H.g)(o).rowIndex === i - 1
				}
				insertNewRow(e) {
					const t = e.getSelection();
					let n = on(e, "rows", "after");
					return n = o.EditorState.forceSelection(n, t), n = cn(n, "down") || n, this.lastRowInsertionState = n, n
				}
				handle(e) {
					return e.getSelection().isCollapsed() ? e === this.lastRowInsertionState ? this.undoRowInsertion(e) : this.isSelectionInLastRow(e) ? this.insertNewRow(e) : cn(e, "down") || e : e
				}
			}
			const mn = (e, t) => {
				const n = e.getSelection();
				if (n.isCollapsed() || n.getStartKey() === n.getEndKey()) return;
				const r = e.getCurrentContent(),
					s = r.getBlockForKey(n.getAnchorKey()),
					i = r.getBlockForKey(n.getFocusKey()),
					[a, c] = Object(H.e)(r, s, i);
				if (a && a === c) {
					const s = Object(H.o)(n, i, i, !1),
						a = G.b(r, s, t);
					return o.EditorState.push(e, a, z.d)
				}
			};
			var hn = n("./node_modules/lodash/forEach.js"),
				bn = n.n(hn);
			const fn = (e, t) => t ? e[0] : e[e.length - 1];
			var gn = (e, t) => {
					return e.getSelection().isCollapsed() ? ((e, t) => {
						const n = e.getSelection(),
							r = t.getSelection();
						if (!n.isCollapsed() || r.isCollapsed() || 0 !== r.getStartOffset() || r.getStartKey() !== n.getStartKey()) return e;
						const s = e.getCurrentContent(),
							i = t.getCurrentContent(),
							a = s.getBlockForKey(n.getAnchorKey());
						if (!Object(_.v)(a.getType())) return e;
						const {
							rowIndex: c,
							colIndex: d
						} = Object(H.g)(a);
						if (0 !== c || 0 !== d) return e;
						const l = s.getBlockMap(),
							u = i.getBlockMap();
						if (l.size >= u.size) return e;
						const p = s.getBlockAfter(n.getAnchorKey()),
							m = i.getBlockAfter(r.getEndKey());
						if (p && p !== m) return e;
						const h = a.merge({
								type: _.n,
								data: Object(D.Map)({})
							}),
							b = s.merge({
								blockMap: l.set(a.getKey(), h)
							});
						return o.EditorState.set(e, {
							currentContent: b
						})
					})(e, t) : ((e, t) => {
						const n = e.getSelection();
						if (n.isCollapsed()) return e;
						if (t.getSelection() === n) return e;
						if (n.getFocusKey() === n.getAnchorKey()) return e;
						const r = e.getCurrentContent(),
							s = r.getBlockForKey(n.getAnchorKey()),
							i = r.getBlockForKey(n.getFocusKey()),
							[a, c] = Object(H.e)(r, s, i);
						if (!a && !c) return e;
						let d = e;
						if (a !== c) {
							const t = n.getIsBackward(),
								r = Object(H.o)(n, a ? fn(a.blocks, !t) : null, c ? fn(c.blocks, t) : null, t);
							n !== r && (d = o.EditorState.forceSelection(e, r))
						} else if (a && c && a === c) {
							const t = Object(H.g)(s),
								a = Object(H.g)(i),
								l = r.getBlocksAsArray(),
								{
									start: u,
									blocks: p
								} = c,
								m = p[0],
								h = Object(H.g)(m);
							if (0 !== h.colIndex || 0 !== h.rowIndex) throw new Error("First table block must always has [0, 0] coordinate!");
							const b = Object(H.b)(i, s) < 0,
								f = Object(H.k)(t, a),
								g = [],
								E = [];
							bn()(p, e => {
								const t = Object(H.g)(e);
								f(t.rowIndex, t.colIndex) ? g.push(e) : e !== m && E.push(e)
							});
							const C = g[0] === m;
							g.sort(H.b);
							const y = [...l.slice(0, u), ...C ? [] : [m], ...g, ...E, ...l.slice(u + p.length)],
								x = fn(g, !b),
								v = fn(g, b),
								O = Object(H.o)(n, x, v, b),
								_ = r.merge({
									blockMap: o.BlockMapBuilder.createFromArray(y),
									selectionAfter: O
								});
							d = o.EditorState.set(e, {
								currentContent: _
							}), O !== n && (d = o.EditorState.forceSelection(d, O))
						}
						return d
					})(e, t)
				},
				En = n("./src/reddit/components/RichTextEditor/table/Renderer/index.m.less"),
				Cn = n.n(En);
			const yn = b.a.div("Cell", Cn.a),
				xn = b.a.div("Row", Cn.a),
				vn = b.a.div("Table", Cn.a),
				On = (e, t) => {
					if (!t || !e.contains(t)) return;
					let n = t;
					for (; n && n !== e;) {
						if (n instanceof HTMLElement && n.hasAttribute("data-row")) return n;
						n.parentElement && (n = n.parentElement)
					}
				},
				_n = (e, t = 10) => {
					let n = e,
						o = t;
					for (; n && o > 0;) {
						if (n instanceof HTMLElement && n.dataset.table) return n;
						n.parentElement && (n = n.parentElement), o--
					}
				},
				kn = e => {
					const {
						dataset: t
					} = e;
					if ("string" == typeof t.row && "string" == typeof t.col) return {
						rowIndex: +t.row,
						colIndex: +t.col
					}
				},
				Sn = e => {
					const t = window.getSelection(),
						{
							focusNode: n,
							anchorNode: o,
							rangeCount: r
						} = t;
					if (n !== o && r && e) {
						const n = t.getRangeAt(0);
						return Object(L.i)(n, e) && !e.contains(n.commonAncestorContainer)
					}
					return !1
				},
				jn = e => {
					const t = c.a.Children.toArray(e),
						n = Object(M.e)(t[0]),
						{
							selection: o,
							contentState: r,
							block: s
						} = n.props,
						{
							colCount: i
						} = Object(H.g)(s);
					t.sort((e, t) => Object(H.b)(Object(M.c)(e), Object(M.c)(t)));
					const a = F()(t, i);
					let d, l, u = !1;
					if (o.getAnchorKey() !== o.getFocusKey()) {
						const e = r.getBlocksAsArray(),
							n = r.getBlockForKey(o.getStartKey()),
							i = r.getBlockForKey(o.getEndKey()),
							a = e.indexOf(n),
							c = e.indexOf(i),
							p = e.indexOf(s),
							m = p + t.length - 1;
						a < p && p < c || a < m && m < c ? u = !0 : p <= a && c <= m && (l = Object(H.g)(o.getIsBackward() ? i : n), d = Object(H.g)(o.getIsBackward() ? n : i))
					}
					return {
						rows: a,
						anchorCell: l,
						focusCell: d,
						isSelectWholeTable: u
					}
				};
			class Tn extends c.a.Component {
				constructor(e) {
					super(e), this.tableElem = null, this.onMouseDown = e => {
						if (!this.tableElem || e.nativeEvent.detail < 2) return;
						const t = window.getSelection(),
							n = t.rangeCount ? t.getRangeAt(0) : null,
							o = On(this.tableElem, t.focusNode);
						if (n && o)
							if (2 === e.nativeEvent.detail && t.isCollapsed) {
								const r = n.cloneRange();
								r.setEndAfter(o), r.toString() || (e.preventDefault(), t.selectAllChildren(o))
							} else e.nativeEvent.detail >= 3 && (t.selectAllChildren(o), e.preventDefault())
					}, this.onNativeSelectionChange = () => {
						const e = this.tableElem;
						if (!e) return;
						const t = window.getSelection();
						if (t.anchorNode === t.focusNode) return void this.resetSelection();
						const n = On(e, t.anchorNode),
							o = On(e, t.focusNode);
						n && n === o ? this.resetSelection() : n && o ? this.setCellsRange(n, o) : n || o ? this.selectWholeTable() : Sn(e) ? this.selectWholeTable() : this.resetSelection()
					}, this.resetSelection = () => {
						(this.state.anchorCell || this.state.focusCell || this.state.isSelectWholeTable) && this.setState({
							isSelectWholeTable: !1,
							focusCell: void 0,
							anchorCell: void 0
						})
					}, this.setCellsRange = (e, t) => {
						const n = kn(t),
							o = kn(e);
						Object(H.h)(n, this.state.focusCell) && Object(H.h)(o, this.state.anchorCell) && !this.state.isSelectWholeTable || this.setState({
							focusCell: n,
							anchorCell: o,
							isSelectWholeTable: !1
						})
					}, this.selectWholeTable = () => {
						!this.state.focusCell && this.state.isSelectWholeTable || this.setState({
							focusCell: void 0,
							isSelectWholeTable: !0
						})
					}, this.state = jn(e.children)
				}
				componentDidMount() {
					document.addEventListener("selectionchange", this.onNativeSelectionChange)
				}
				componentWillUnmount() {
					document.removeEventListener("selectionchange", this.onNativeSelectionChange)
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.children !== this.props.children && this.setState(jn(e.children))
				}
				render() {
					const {
						rows: e,
						anchorCell: t,
						focusCell: n,
						isSelectWholeTable: o
					} = this.state;
					let r;
					o ? r = (e, t) => !0 : t && n && !Object(H.h)(t, n) && (r = Object(H.k)(t, n));
					const s = e[0].map(e => Object(H.g)(Object(M.e)(e).props.block).alignment),
						i = e.map((e, t) => c.a.createElement(xn, {
							key: t
						}, e.map((e, n) => c.a.createElement(yn, {
							"data-row": t,
							"data-col": n,
							"data-selected": !!r && r(t, n),
							key: n,
							style: {
								"--cell-text-alignment": s[n] ? H.a[s[n]] : void 0
							}
						}, e))));
					return c.a.createElement(vn, {
						className: r ? Cn.a.isFakeSelectionActive : void 0,
						innerRef: e => this.tableElem = e,
						onMouseDown: this.onMouseDown,
						"data-table": !0
					}, i)
				}
			}
			const wn = Object(D.Map)({
				[_.l]: {
					element: "div",
					wrapper: c.a.createElement(Tn, null)
				}
			});
			var In = n("./node_modules/lodash/isEqual.js"),
				Pn = n.n(In),
				Rn = n("./src/reddit/components/RichTextEditor/Tooltip/index.tsx"),
				Mn = n("./src/reddit/icons/svgs/FormattingAlignCenter/index.tsx"),
				Nn = n("./src/reddit/icons/svgs/FormattingAlignLeft/index.tsx"),
				Dn = n("./src/reddit/icons/svgs/FormattingAlignRight/index.tsx"),
				Ln = n("./src/reddit/icons/svgs/FormattingDeleteRow/index.tsx"),
				An = n("./src/reddit/icons/svgs/FormattingInsertRow/index.tsx"),
				Fn = n("./src/reddit/models/RichTextJson/index.ts");
			var Bn = (e, t = !1) => {
				const n = e.getSelection(),
					r = e.getCurrentContent(),
					s = r.getBlockForKey(n.getAnchorKey()),
					i = r.getBlockForKey(n.getFocusKey()),
					[a, c] = Object(H.e)(r, s, i);
				if (a && a === c) {
					const {
						blocks: t
					} = a;
					t.sort(H.b);
					const r = Object(H.o)(n, t[0], V()(t));
					return X(o.EditorState.set(e, {
						selection: r
					}), "rows")
				}
			};
			var Un = (e, t) => {
					const n = e.getSelection(),
						r = e.getCurrentContent(),
						s = r.getBlockForKey(n.getAnchorKey()),
						i = r.getBlockForKey(n.getFocusKey()),
						[a, c] = Object(H.e)(r, s, i);
					if (!a || a !== c) return e;
					const d = Object(H.g)(s),
						l = Object(H.g)(i),
						{
							minCol: u,
							maxCol: p
						} = Object(H.f)(d, l),
						m = a.blocks.map(e => {
							const {
								colIndex: n
							} = Object(H.g)(e);
							return u <= n && n <= p ? Object(H.m)(e, {
								alignment: t
							}) : e
						}),
						h = r.getBlockMap(),
						b = r.merge({
							blockMap: h.merge(o.BlockMapBuilder.createFromArray(m)),
							selectionAfter: n,
							selectionBefore: n
						});
					return o.EditorState.push(e, b, z.b)
				},
				Kn = n("./src/reddit/components/RichTextEditor/table/Toolbar/index.m.less"),
				Wn = n.n(Kn);

			function Gn() {
				return (Gn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Hn = (e, t) => n => c.a.createElement(e, Gn({}, t, n)),
				qn = Object(Lt.f)(An.a),
				Vn = Hn(qn, {
					orientation: "up"
				}),
				zn = Hn(qn, {
					orientation: "right"
				}),
				Qn = Hn(qn, {
					orientation: "left"
				}),
				Yn = Object(Lt.f)(Ln.a),
				Jn = Hn(Yn, {
					orientation: "vertical"
				}),
				Xn = Object(Lt.f)(Mn.a),
				Zn = Object(Lt.f)(Nn.a),
				$n = Object(Lt.f)(Dn.a),
				eo = Object(Lt.f)(Rt.b),
				to = b.a.wrapped(Mt.a, "ToolbarContent", Wn.a),
				no = e => c.a.createElement(Dt.a, Gn({}, e, {
					className: Object(m.a)(Wn.a.formatterButton, e.className),
					tooltipContentClass: Wn.a.tooltip
				}));
			var oo = e => {
					const {
						editorState: t,
						onChange: n
					} = e;
					return c.a.createElement(to, null, c.a.createElement(no, {
						Icon: Zn,
						onClick: () => n(Un(t, Fn.e)),
						tooltip: r.fbt._("Left align", null, {
							hk: "45eAc"
						})
					}), c.a.createElement(no, {
						Icon: Xn,
						onClick: () => n(Un(t, Fn.d)),
						tooltip: r.fbt._("Center align", null, {
							hk: "4aAfyf"
						})
					}), c.a.createElement(no, {
						Icon: $n,
						onClick: () => n(Un(t, Fn.f)),
						tooltip: r.fbt._("Right align", null, {
							hk: "3oHuXw"
						})
					}), c.a.createElement(Nt.c, null), c.a.createElement(no, {
						Icon: Qn,
						onClick: () => n(on(t, "columns", "before")),
						tooltip: r.fbt._("Insert column before", null, {
							hk: "11EB6Q"
						})
					}), c.a.createElement(no, {
						Icon: zn,
						onClick: () => n(on(t, "columns", "after")),
						tooltip: r.fbt._("Insert column after", null, {
							hk: "Ddlpl"
						})
					}), c.a.createElement(no, {
						Icon: Jn,
						onClick: () => n(X(t, "columns")),
						tooltip: r.fbt._("Delete column", null, {
							hk: "3HaQQD"
						})
					}), c.a.createElement(Nt.c, null), c.a.createElement(no, {
						Icon: Vn,
						onClick: () => n(on(t, "rows", "before")),
						tooltip: r.fbt._("Insert row above", null, {
							hk: "1HIgn"
						})
					}), c.a.createElement(no, {
						Icon: qn,
						onClick: () => n(on(t, "rows", "after")),
						tooltip: r.fbt._("Insert row below", null, {
							hk: "3t7ZU"
						})
					}), c.a.createElement(no, {
						Icon: Yn,
						onClick: () => n(X(t, "rows")),
						tooltip: r.fbt._("Delete row", null, {
							hk: "3yJYqS"
						})
					}), c.a.createElement(Nt.c, null), c.a.createElement(no, {
						Icon: eo,
						onClick: () => n(Bn(t) || t),
						tooltip: r.fbt._("Delete table", null, {
							hk: "1fK0KA"
						})
					}))
				},
				ro = n("./src/reddit/components/RichTextEditor/table/ToolbarController/index.m.less"),
				so = n.n(ro);
			const io = 20,
				ao = b.a.div("ActionButton", so.a),
				co = b.a.div("ToolbarWrapper", so.a),
				lo = e => {
					const t = {};
					if (!e || !document.documentElement) return t;
					const n = e.left - 154.5,
						o = e.left + 154.5 - document.documentElement.clientWidth;
					return n < 0 ? t.left = -n + io + 2 : o > 0 && (t.left = -o + io - 2), t
				},
				uo = e => {
					e.preventDefault(), e.stopPropagation()
				};
			class po extends a.Component {
				constructor(e) {
					super(e), this.containerElem = null, this.setContainerRef = e => this.containerElem = e, this.onResize = e => {
						this.hideToolbar(), this.state.tooltipPosition && this.updateForCurrentSelection()
					}, this.onDocumentClick = e => {
						this.state.isToolbarActive && this.containerElem && (this.containerElem.contains(e.target) || this.hideToolbar())
					}, this.onNativeSelectionChange = () => {
						this.updateForCurrentSelection()
					}, this.updateForCurrentSelection = () => {
						const e = window.getSelection();
						if (!e.rangeCount) return void this.hideActionButton();
						const t = e.getRangeAt(0).commonAncestorContainer,
							{
								rteDomRef: n
							} = this.props;
						if (!n.contains(t)) return void this.hideActionButton();
						const o = _n(t);
						if (!o) return void this.hideActionButton();
						const r = On(o, e.anchorNode);
						if (!r) return void this.hideActionButton();
						const s = On(o, e.focusNode);
						s ? this.updateActionButtonPosition(r, s) : this.hideActionButton()
					}, this.updateActionButtonPosition = (e, t) => {
						const n = e.getBoundingClientRect(),
							o = t.getBoundingClientRect(),
							r = {
								top: Math.min(n.top, o.top),
								left: Math.max(n.right, o.right) - io
							};
						Pn()(this.state.tooltipPosition, r) || this.setState({
							tooltipPosition: r
						}), this.hideToolbar()
					}, this.hideActionButton = () => {
						this.hideToolbar(), this.state.tooltipPosition && this.setState({
							tooltipPosition: null
						})
					}, this.hideToolbar = () => {
						this.state.isToolbarActive && this.setState({
							isToolbarActive: !1
						})
					}, this.onActionButtonClick = e => {
						this.setState(e => ({
							isToolbarActive: !e.isToolbarActive
						})), uo(e)
					}, this.state = {
						isToolbarActive: !1,
						tooltipPosition: null
					}, this.api = {
						hideActionButton: this.hideActionButton
					}
				}
				componentDidMount() {
					const {
						onSetApi: e
					} = this.props;
					document.addEventListener("selectionchange", this.onNativeSelectionChange), document.addEventListener("click", this.onDocumentClick), window.addEventListener("resize", this.onResize), e && e(this.api)
				}
				componentWillUnmount() {
					const {
						onSetApi: e
					} = this.props;
					document.removeEventListener("selectionchange", this.onNativeSelectionChange), document.removeEventListener("click", this.onDocumentClick), window.removeEventListener("resize", this.onResize), e && e(null)
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = e.editorState.getSelection(),
						n = this.props.editorState.getSelection();
					t.getHasFocus() && Object(_.v)(o.RichUtils.getCurrentBlockType(e.editorState)) ? t !== n && this.hideToolbar() : this.hideActionButton()
				}
				render() {
					const e = !this.props.readOnly && this.state.isToolbarActive,
						{
							tooltipPosition: t
						} = this.state;
					return c.a.createElement("div", {
						ref: this.setContainerRef
					}, c.a.createElement(Rn.b, {
						targetPosition: t
					}, c.a.createElement(ao, {
						className: e ? so.a.isPressed : void 0,
						onClick: this.onActionButtonClick,
						onMouseDown: uo,
						onMouseMove: uo
					}, e ? c.a.createElement(co, {
						style: lo(t)
					}, c.a.createElement(oo, {
						onChange: this.props.onChange,
						editorState: this.props.editorState
					})) : null)))
				}
			}
			var mo = n("./src/reddit/components/RichTextEditor/editorStateTransforms.ts");
			n("./node_modules/core-js/modules/web.dom.iterable.js");

			function ho() {
				return (ho = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function bo() {
				return new Map
			}
			const fo = c.a.createContext(bo());

			function go(e) {
				class t extends c.a.Component {
					constructor() {
						super(...arguments), this.elementRef = null, this.updateElementRef = e => {
							const {
								registry: t
							} = this.props;
							this.elementRef = e, e ? t.set(this.props.entityKey, e) : t.delete(this.props.entityKey)
						}
					}
					componentWillReceiveProps(e) {
						const {
							registry: t
						} = this.props;
						this.props.entityKey !== e.entityKey && this.elementRef && (t.get(this.props.entityKey) === this.elementRef && t.delete(this.props.entityKey), t.set(e.entityKey, this.elementRef))
					}
					render() {
						return c.a.createElement("span", {
							ref: this.updateElementRef
						}, c.a.createElement(e, this.props))
					}
				}
				return e => c.a.createElement(fo.Consumer, null, n => c.a.createElement(t, ho({}, e, {
					registry: n
				})))
			}
			var Eo = n("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				Co = n("./src/reddit/components/RichTextEditor/emotes/decorator.m.less"),
				yo = n.n(Co);
			const xo = {
					strategy: Eo.e,
					component: go(e => {
						const {
							contentState: t
						} = e, n = Object(Eo.i)(t), o = t.getEntity(e.entityKey), {
							id: r,
							emoji: s,
							sticker: i
						} = o.getData(), a = n ? i : s;
						return c.a.createElement("span", {
							className: Object(m.a)(yo.a.emote, {
								[yo.a.sticker]: n
							}),
							title: `:${r}:`,
							style: {
								backgroundImage: `url(${a.path})`,
								width: a.x
							}
						}, e.children)
					})
				},
				vo = () => xo;
			var Oo = n("./src/reddit/selectors/gold/enabledFeatures.ts"),
				_o = n("./src/reddit/selectors/gold/powerups/index.ts"),
				ko = n("./src/reddit/components/RichTextEditor/emotes/Powerups/tooltipAsync.ts"),
				So = n("./src/higherOrderComponents/makeAsync.tsx"),
				jo = Object(So.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("SpecialMembershipsEmotesTooltip").then(n.bind(null, "./src/reddit/components/RichTextEditor/emotes/SpecialMemberships/tooltip.tsx")).then(e => e.default)
				});
			var To = e => {
				const {
					subreddit: t
				} = e, n = t.id, o = Object(d.e)(e => Object(Oo.b)(e, {
					subredditId: n
				}));
				return Object(d.e)(e => Object(_o.f)(e, {
					subredditId: n
				})) ? c.a.createElement(ko.a, e) : c.a.createElement(c.a.Fragment, null, o && c.a.createElement(jo, e))
			};
			const wo = new Set([N.a.LINK]);
			var Io = n("./src/reddit/components/RichTextEditor/entity/link/helpers.tsx"),
				Po = n("./src/reddit/components/RichTextEditor/entity/link/decorator.m.less"),
				Ro = n.n(Po);
			const Mo = b.a.a("RegularLink", Ro.a),
				No = {
					strategy: Io.a,
					component: go(e => {
						const t = e.contentState.getEntity(e.entityKey),
							{
								url: n
							} = t.getData();
						return c.a.createElement(Mo, {
							href: n
						}, e.children)
					})
				},
				Do = () => No;
			var Lo = n("./src/lib/linkMatchers/index.ts");
			const Ao = (e, t) => {
					if (t.getType() === _.f) return [];
					return (e.match(t.getText()) || []).filter(e => ((e, {
						index: t,
						lastIndex: n
					}) => {
						for (let o = t; o < n; o++) {
							if (e.getInlineStyleAt(o).contains(_.k.MONOSPACE)) return !1
						}
						return !0
					})(t, e))
				},
				Fo = (e, t, n, r, s, i) => {
					const a = e.getBlockForKey(t),
						c = o.SelectionState.createEmpty(t),
						d = [],
						l = new Set;
					let u = e;
					const p = n === N.a.USER_MENTION ? N.a.USER_LINK : n,
						m = (e, t, o) => {
							let r = null;
							for (let s = e; s < t; s++) {
								const e = a.getEntityAt(s),
									t = e && u.getEntity(e);
								if (t) {
									if (t.getType() !== n) return;
									r || l.has(e) || (r = e)
								}
							}
							if (r) {
								u.getEntity(r).getData().url !== o && (u = u.mergeEntityData(r, {
									url: o
								}))
							}
							return r || (e => (u = u.createEntity(p, "MUTABLE", {
								url: e
							})).getLastCreatedEntityKey())(o)
						},
						h = (e, t, n) => {
							const r = c.merge({
								anchorOffset: e,
								focusOffset: t
							});
							u = o.Modifier.applyEntity(u, r, n)
						},
						b = (e, t) => h(e, t, null),
						g = u.getBlockForKey(t);
					Ao(r, g).forEach(({
						index: e,
						lastIndex: r,
						url: a
					}, p) => {
						const b = m(e, r, a);
						b && (n === N.a.USER_MENTION ? (((e, n, r) => {
							const a = u && u.getBlockForKey(t),
								d = a && a.getText().substr(e, n);
							if (d && d.replace(f.d.mention, "") && d.startsWith(f.d.mention) && f.c.test(d.replace(f.d.mention, ""))) {
								const t = c.merge({
										anchorOffset: e,
										focusOffset: e + f.d.mention.length
									}),
									a = c.merge({
										anchorOffset: e,
										focusOffset: n + f.d.mention.length
									}),
									d = c.merge({
										anchorOffset: n + f.d.mention.length,
										focusOffset: n + f.d.mention.length
									});
								u = Object(G.b)(u, t, f.d.profile), u = o.Modifier.applyEntity(u, a, r), s && i && i(o.EditorState.forceSelection(s, d))
							}
						})(e + p, r + p, b), d.push([e + p, r + p + 1])) : (h(e, r, b), d.push([e, r])), l.add(b))
					});
					let E = 0;
					return g.findEntityRanges(e => {
						const t = e.getEntity();
						return !!t && u.getEntity(t).getType() === n
					}, (e, t) => {
						if (E >= d.length) return void b(e, t);
						const [n, o] = d[E];
						t <= n ? b(e, t) : (e < n && b(e, n - 1), t > o && b(o, t), E++)
					}), u
				},
				Bo = (e, t) => {
					const n = e.getCurrentContent(),
						r = t.getCurrentContent();
					if (n === r) return e;
					const s = n.getBlockMap(),
						i = r.getBlockMap();
					let a = n;
					return s.forEach((t, n) => {
						if (n) {
							if (t === i.get(n)) return;
							a = Fo(a, n, N.a.SUBREDDIT_LINK, Lo.g), a = Fo(a, n, N.a.USER_LINK, Lo.j), a = Fo(a, n, N.a.USER_MENTION, Lo.e, e, t => e = t)
						}
					}), e.getCurrentContent() === a ? e : (a = a.merge({
						selectionAfter: e.getCurrentContent().getSelectionAfter(),
						selectionBefore: e.getCurrentContent().getSelectionBefore()
					}), o.EditorState.set(e, {
						currentContent: a
					}))
				};
			var Uo = e => {
				const t = e.getCurrentContent();
				return t.getBlockMap().some(e => {
					if ((null == e ? void 0 : e.getType()) === _.a) return !0;
					let n = !1;
					return null == e || e.findEntityRanges(e => {
						const n = e.getEntity();
						return !!n && t.getEntity(n).getType() === N.a.EMOTE
					}, () => n = !0), n
				})
			};
			const Ko = " ".repeat(4),
				Wo = new RegExp("^ {1,4}|\\t"),
				Go = new Set([_.b.CODE_BLOCK]),
				Ho = (e, t) => {
					const n = t.getCurrentContent(),
						r = t.getSelection(),
						s = e.shiftKey;
					let i = n,
						a = r.getAnchorOffset(),
						c = r.getFocusOffset();
					if (Object(Q.a)(n, r, (e, t) => {
							const n = e.getType();
							if ("paragraph" === n || !Go.has(n)) return !1;
							let d = null;
							const l = e.getText(),
								u = o.SelectionState.createEmpty(t);
							if (s) {
								const e = l.match(Wo);
								if (e) {
									const t = e[0].length;
									i = G.b(i, u.merge({
										focusOffset: t
									}), ""), d = -t
								}
							} else i = G.a(i, r.isCollapsed() ? r : u, Ko), d = 4;
							null !== d && (t === r.getAnchorKey() && (a += d), t === r.getFocusKey() && (c += d))
						}), i !== n) return i = i.merge({
						selectionAfter: r.merge({
							anchorOffset: a,
							focusOffset: c
						})
					}), e.preventDefault(), o.EditorState.push(t, i, s ? "remove-range" : "insert-characters")
				},
				qo = (e, t) => (e => {
					const t = e.getSelection(),
						n = e.getCurrentContent();
					if (!t.isCollapsed()) return Z(e);
					if (0 === t.getStartOffset()) {
						const o = n.getBlockForKey(t.getEndKey());
						if (Object(_.v)(o.getType())) return e; {
							const t = n.getBlockBefore(o.getKey());
							if (t && Object(_.v)(t.getType())) return e
						}
					}
				})(e) || ((e, t) => {
					const n = e.getSelection(),
						r = e.getCurrentContent();
					if (n.isCollapsed() && 0 === n.getStartOffset()) {
						const s = r.getBlockForKey(n.getEndKey());
						if (Object(_.o)(s.getType())) return Object(R.d)(e, s.getKey());
						if (Object(_.u)(s.getType())) {
							const t = r.getBlockBefore(s.getKey());
							return o.EditorState.forceSelection(e, Object(M.b)(t))
						}
						if (!Object(R.q)(t) && Object(M.g)(s)) {
							const t = r.getBlockBefore(s.getKey());
							if (t && Object(_.o)(t.getType())) return e = o.EditorState.push(e, Object(M.i)(r, s.getKey()), z.f), o.EditorState.forceSelection(e, Object(M.b)(t))
						}
					}
				})(e, t),
				Vo = (e, t) => (e => {
					const t = e.getSelection(),
						n = e.getCurrentContent();
					if (!t.isCollapsed()) return Z(e); {
						const o = n.getBlockForKey(t.getEndKey());
						if (t.getEndOffset() === o.getLength()) {
							if (Object(_.v)(o.getType())) return e; {
								const t = n.getBlockAfter(o.getKey());
								if (t && Object(_.v)(t.getType())) return e
							}
						}
					}
				})(e) || ((e, t) => {
					const n = e.getSelection(),
						r = e.getCurrentContent();
					if (!n.isCollapsed()) return;
					const s = r.getBlockForKey(n.getEndKey());
					if (n.getEndOffset() === s.getLength()) {
						if (Object(_.o)(s.getType())) return Object(R.d)(e, s.getKey()); {
							const i = r.getBlockAfter(n.getEndKey());
							if (i && Object(_.o)(i.getType())) {
								if (Object(R.q)(t)) return Object(R.d)(e, i.getKey());
								if (Object(M.g)(s)) return e = o.EditorState.push(e, Object(M.i)(r, s.getKey()), z.f), o.EditorState.forceSelection(e, Object(M.b)(i))
							}
						}
					}
				})(e, t),
				zo = e => {
					const t = e.getSelection();
					if (!t.isCollapsed()) return !1;
					const n = o.RichUtils.getCurrentBlockType(e);
					if (!_.c.includes(n)) return !1;
					if (t.getFocusOffset() > 0) {
						if ("\n" === e.getCurrentContent().getBlockForKey(t.getFocusKey()).getText()[t.getFocusOffset() - 1]) return !1
					}
					return !0
				};
			var Qo = n("./src/lib/memoizeByReference/index.ts");
			const Yo = Object(Qo.a)(e => {
					const t = e.getSelection();
					if (!t.isCollapsed()) return;
					const n = t.getStartOffset(),
						o = e.getCurrentContent(),
						r = o.getBlockForKey(t.getFocusKey());
					if (r.getType() !== _.n) return;
					const s = r.getText();
					if (s.startsWith("1.") && 2 === n) return _.i.ORDERED;
					if (s.startsWith("*") && 1 === n) {
						const e = o.getBlockBefore(r.getKey());
						if (e && e.getType() === _.n && e.getText().startsWith("* ")) return;
						return _.i.UNORDERED
					}
				}),
				Jo = e => {
					const t = Yo(e);
					if (!t) return e;
					const n = Object(mo.a)(e);
					let r = o.Modifier.replaceText(n.getCurrentContent(), n.getSelection().merge({
						anchorOffset: 0
					}), "");
					return r = o.Modifier.setBlockType(r, r.getSelectionAfter(), t), o.EditorState.push(n, r, z.c)
				};
			var Xo = n("./src/reddit/components/RichTextEditor/helpers/styles.ts");
			const Zo = Object(So.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GifTooltip").then(n.bind(null, "./src/reddit/components/RichTextEditor/media/GifTooltip/index.tsx")).then(e => e.default)
			});

			function $o(e) {
				return c.a.createElement(Zo, e)
			}
			var er = n("./src/reddit/components/RichTextEditor/spoiler/helpers.ts"),
				tr = n("./src/reddit/components/RichTextEditor/spoiler/decorator.m.less"),
				nr = n.n(tr);
			const or = e => c.a.createElement("span", {
					className: nr.a.spoiler
				}, c.a.createElement("span", null), e.children, c.a.createElement("span", null)),
				rr = () => ({
					strategy: er.a,
					component: or
				});
			var sr = n("./src/reddit/components/FocusableContent/index.tsx"),
				ir = n("./src/reddit/components/RichTextEditor/Blockquote/index.m.less"),
				ar = n.n(ir);
			const cr = b.a.div("BlockQuoteWrapper", ar.a),
				dr = Object(D.Map)({
					[_.e]: {
						element: "blockquote",
						wrapper: c.a.createElement(cr, null)
					}
				});
			var lr = n("./src/reddit/components/RichTextEditor/CodeBlock/index.m.less"),
				ur = n.n(lr);
			const pr = b.a.div("CodeBlockWrapper", ur.a),
				mr = Object(D.Map)({
					[_.f]: {
						element: "code",
						wrapper: c.a.createElement(pr, null)
					}
				});
			var hr = n("./node_modules/bowser/src/bowser.js"),
				br = n.n(hr),
				fr = n("./node_modules/lodash/includes.js"),
				gr = n.n(fr),
				Er = n("./src/reddit/components/RichTextEditor/DragController/helpers.ts"),
				Cr = n("./src/reddit/components/RichTextEditor/DragController/index.m.less"),
				yr = n.n(Cr);
			const xr = b.a.div("DropLine", yr.a),
				vr = b.a.wrapped(Rn.b, "Tooltip", yr.a);
			class Or extends a.Component {
				constructor(e) {
					super(e), this.dragCount = 0, this.setContainerRef = e => this.containerRef = e, this.preventDocumentDrop = e => {
						!! function e(t) {
							return t.draggable ? t : t.parentElement ? e(t.parentElement) : null
						}(e.target) || (e.preventDefault(), e.stopPropagation())
					}, this.onDragOver = e => {
						const t = gr()(e.dataTransfer.types, Ue);
						if (!t) {
							if (!Object(Er.c)(e.dataTransfer) || !this.props.allowMediaUploads) return
						}
						if (!t && !Object(Er.c)(e.dataTransfer)) return;
						e.preventDefault();
						try {
							e.dataTransfer.dropEffect = t ? "move" : "copy"
						} catch (s) {}
						const {
							editorState: n
						} = this.props;
						let o = null;
						const r = Object(Er.b)(n, e);
						if (r) {
							const e = this.containerRef.getBoundingClientRect().left;
							o = {
								top: r.clientY,
								left: e
							}
						}
						Pn()(o, this.state.point) || this.setState({
							point: o
						})
					}, this.onDragEnter = e => {
						this.dragCount++
					}, this.onDragLeave = e => {
						this.dragCount--, 0 === this.dragCount && this.state.point && this.setState({
							point: null
						})
					}, this.onDrop = e => {
						const t = () => {
								this.dragCount = 0, this.setState({
									point: null
								})
							},
							n = br.a.msie ? null : e.dataTransfer.getData(Ue),
							o = Object(Er.a)(e.dataTransfer);
						if (!(n || o.length && this.props.allowMediaUploads)) return void t();
						const {
							editorState: r
						} = this.props, s = Object(Er.b)(r, e);
						if (!s) return void t();
						e.preventDefault(), e.stopPropagation();
						const i = s.isBefore ? M.a.before : M.a.after;
						n ? this.props.onBlockMove(n, s.blockKey, i) : setTimeout(() => {
							this.props.onFilesDrop(o, s.blockKey, i)
						}), t()
					}, this.state = {
						point: null
					}
				}
				componentDidMount() {
					document.addEventListener("drop", this.preventDocumentDrop), document.addEventListener("dragover", this.preventDocumentDrop)
				}
				componentWillUnmount() {
					document.removeEventListener("drop", this.preventDocumentDrop), document.removeEventListener("dragover", this.preventDocumentDrop)
				}
				render() {
					const {
						children: e
					} = this.props, {
						point: t
					} = this.state, n = c.a.Children.only(e);
					return c.a.createElement("div", {
						className: Object(m.a)(yr.a.container, {
							[yr.a.hideCaret]: !!t
						}),
						onDragEnter: this.onDragEnter,
						onDragLeave: this.onDragLeave,
						onDragOver: this.onDragOver,
						onDrop: this.onDrop,
						ref: this.setContainerRef
					}, c.a.createElement("div", null, n), c.a.createElement(vr, {
						targetPosition: t
					}, c.a.createElement(xr, null)))
				}
			}
			var _r = n("./node_modules/draft-js/lib/DraftPasteProcessor.js"),
				kr = n.n(_r),
				Sr = n("./node_modules/draft-js/lib/getEntityKeyForSelection.js"),
				jr = n.n(Sr),
				Tr = n("./node_modules/draft-js/lib/splitTextIntoTextBlocks.js"),
				wr = n.n(Tr),
				Ir = n("./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts"),
				Pr = n("./src/reddit/components/RichTextEditor/entity/applyEntityToContentBlock.ts");

			function Rr(e, t, n) {
				const r = Object(o.convertFromHTML)(t, void 0, n);
				if (r) {
					const {
						contentBlocks: t,
						entityMap: n
					} = r;
					if (t) {
						const r = o.BlockMapBuilder.createFromArray(function(e) {
							return e.map(e => Object(_.r)(e.getType()) ? j(e) : e)
						}(t));
						return [e.set("entityMap", n), r]
					}
				}
				return [e, null]
			}

			function Mr(e, t, n) {
				const r = wr()(t),
					s = n && 1 === r.length ? n : o.CharacterMetadata.create(),
					i = kr.a.processText(r, s).map(e => e.merge({
						type: _.n
					}));
				return o.BlockMapBuilder.createFromArray(i)
			}
			const Nr = e => {
					if (!e) return null;
					const t = (new DOMParser).parseFromString(e, "text/html").querySelector("[data-reddit-rtjson]");
					return t && t.getAttribute("data-reddit-rtjson")
				},
				Dr = e => {
					if (be()) return {
						text: window.clipboardData.getData("text"),
						html: null
					}; {
						const t = e.clipboardData.getData("text/html");
						return {
							text: e.clipboardData.getData("text/plain"),
							html: t
						}
					}
				};

			function Lr(e, t, n, r) {
				const {
					text: s,
					html: i
				} = Dr(n), a = function(e, t, n, o) {
					const r = {
							text: t,
							html: n,
							rtjson: o,
							fragment: null
						},
						s = e.getClipboard();
					return s && n && function(e, t, n, o) {
						return -1 !== t.indexOf(o) || 1 === e.size && e.first().getText() === n
					}(s, n, t, e.getEditorKey()) && (r.fragment = s), r
				}(t, s, i, i && Nr(i));
				t.getClipboard() && !a.fragment && t.setClipboard(null);
				const c = e.getCurrentContent(),
					d = e.getSelection(),
					l = e.getCurrentInlineStyle(),
					u = t.props.blockRenderMap;
				let p = null,
					m = c;
				if (!(p = function(e, t, n) {
						const o = e.getBlockForKey(t.getStartKey()),
							r = e.getBlockForKey(t.getEndKey());
						if (o.getType() === _.f || r.getType() === _.f) return Mr(0, n).map(e => e.merge({
							type: _.f,
							depth: 0
						}))
					}(m, d, a.text)) && a.fragment && (p = a.fragment, [m, p] = Object(Ir.b)(m, p), p = xe(p, r)), !p && a.rtjson && (p = function(e) {
						const t = JSON.parse(e);
						return Object(o.convertFromRaw)(t).getBlockMap()
					}(a.rtjson)), !p && a.html && ([m, p] = Rr(m, a.html, u)), !p && a.text) {
					const e = function(e, t, n) {
						return o.CharacterMetadata.create({
							style: n,
							entity: jr()(e, t)
						})
					}(m, d, l);
					p = Mr(0, a.text, e), [m, p] = function(e, t) {
						let n = e,
							o = t;
						return t.forEach(e => {
							const t = e.getText(),
								r = Lo.f.match(t);
							if (!r) return;
							let s = e;
							r.forEach(({
								index: e,
								lastIndex: t,
								url: r
							}) => {
								const i = (n = n.createEntity(N.a.LINK, "MUTABLE", {
									url: r
								})).getLastCreatedEntityKey();
								s = Object(Pr.a)(s, e, t, i), o = o.set(s.getKey(), s)
							})
						}), [n, o]
					}(m, p)
				}
				if (p) return m = function(e, t, n) {
					if (n.isEmpty()) return e;
					let o = se(e, t, n) || ve(e, t, n);
					return o || (o = G.c(e, t, n))
				}(m, d, p), o.EditorState.push(e, m, z.e)
			}
			var Ar = n("./src/reddit/components/RichTextEditor/entity/getSelectionEntityInfo.ts"),
				Fr = n("./src/reddit/components/RichTextEditor/Tooltip/getSelectionClientRect.ts"),
				Br = n("./src/reddit/components/RichTextEditor/LinksController/LinkDetailsPopup/index.m.less"),
				Ur = n.n(Br);
			const Kr = b.a.div("LinkDetailsBox", Ur.a),
				Wr = b.a.a("Link", Ur.a),
				Gr = b.a.a("LinkButton", Ur.a);
			var Hr = e => c.a.createElement("div", null, c.a.createElement(Kr, {
					onMouseDown: e => e.preventDefault()
				}, c.a.createElement(Wr, {
					href: e.url,
					target: "_blank"
				}, e.url), c.a.createElement("span", null, " – "), c.a.createElement(Gr, {
					onClick: () => e.onStartEdit(),
					role: "button"
				}, r.fbt._("Change", null, {
					hk: "3aOmcP"
				})), c.a.createElement("span", null, " | "), c.a.createElement(Gr, {
					onClick: () => e.onRemove(),
					role: "button"
				}, r.fbt._("Remove", null, {
					hk: "3nPt5D"
				})))),
				qr = n("./src/reddit/controls/Input/index.tsx"),
				Vr = n("./src/reddit/components/RichTextEditor/LinksController/LinkEditorPopup/index.m.less"),
				zr = n.n(Vr);
			const Qr = b.a.form("EditForm", zr.a),
				Yr = b.a.wrapped(e => c.a.createElement("div", e, e.children), "LinkEditorBox", zr.a),
				Jr = b.a.wrapped(qr.a, "Input", zr.a),
				Xr = b.a.label("Label", zr.a),
				Zr = b.a.div("HintAndButtonRow", zr.a),
				$r = b.a.span("InvalidUrlHint", zr.a),
				es = b.a.wrapped(Ze.i, "SubmitButton", zr.a),
				ts = e => {
					e && (e.focus(), e.select())
				},
				ns = / /g,
				os = e => e.replace(ns, "%20");
			class rs extends a.Component {
				constructor(e) {
					super(e), this.focused = !1, this.focusLostTimer = 0, this.textInputElementRef = null, this.urlInputElementRef = null, this.onEdited = () => {
						const e = this.state.url.trim(),
							t = os(e),
							n = Object(Lo.i)(t);
						if (!n) return this.setState({
							isInvalidUrl: !0
						}), void(this.urlInputElementRef && this.urlInputElementRef.focus());
						const o = n.url;
						this.props.onEdited(o, this.state.displayText.trim() || e)
					}, this.onFocus = () => {
						this.focused = !0
					}, this.onBlur = () => {
						this.focused = !1, this.focusLostTimer = window.setTimeout(() => {
							this.focused || this.props.onFocusLost()
						}, 0)
					}, this.onClick = e => {
						e.stopPropagation()
					}, this.handleUrlChange = e => {
						const t = e.target.value;
						let {
							isInvalidUrl: n
						} = this.state;
						n && Object(Lo.h)(Lo.f, t) && (n = !1), this.setState({
							url: t,
							isInvalidUrl: n
						})
					}, this.handleDisplayTextChange = e => {
						this.setState({
							displayText: e.target.value
						})
					}, this.handleSubmit = e => {
						this.onEdited(), e.preventDefault()
					}, this.state = {
						url: e.url,
						displayText: e.displayText,
						isInvalidUrl: !1
					}
				}
				componentDidMount() {
					Object(Lo.h)(Lo.f, this.state.displayText) ? ts(this.textInputElementRef) : ts(this.urlInputElementRef)
				}
				componentWillUnmount() {
					this.focusLostTimer && clearTimeout(this.focusLostTimer)
				}
				render() {
					const {
						isInsertMode: e
					} = this.props;
					return c.a.createElement(Yr, {
						tabIndex: 0,
						onClick: this.onClick,
						onBlur: this.onBlur,
						onFocus: this.onFocus
					}, c.a.createElement(Qr, {
						onSubmit: this.handleSubmit
					}, c.a.createElement(Xr, null, r.fbt._("Text", null, {
						hk: "1oock0"
					}), ":", c.a.createElement(Jr, {
						innerRef: e => this.textInputElementRef = e,
						type: "text",
						placeholder: r.fbt._("Title of link (optional)", null, {
							hk: "17GvI"
						}),
						value: this.state.displayText,
						onChange: this.handleDisplayTextChange
					})), c.a.createElement(Xr, null, r.fbt._("Link", null, {
						hk: "1Cfzw7"
					}), c.a.createElement(Jr, {
						innerRef: e => this.urlInputElementRef = e,
						type: "text",
						placeholder: r.fbt._("Paste or type a link", null, {
							hk: "3QWoAf"
						}),
						value: this.state.url,
						onChange: this.handleUrlChange
					})), c.a.createElement(Zr, null, c.a.createElement(es, {
						type: "submit",
						disabled: this.state.isInvalidUrl
					}, e ? r.fbt._("Insert", null, {
						hk: "3H7yaS"
					}) : r.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), this.state.isInvalidUrl ? c.a.createElement($r, null, r.fbt._("Link doesn't look right", null, {
						hk: "1BHfKz"
					})) : null)))
				}
			}

			function ss(e, t, n) {
				const o = e.getCurrentContent(),
					r = {
						text: "",
						url: ""
					};
				if (t.isCollapsed()) return r;
				if (n) r.text = n.entityText, r.url = o.getEntity(n.entityKey).getData().url;
				else {
					r.text = function(e, t) {
						if (e.getStartKey() !== e.getEndKey()) throw new Error("Selection must be in a single block");
						return e.isCollapsed() ? "" : t.getBlockForKey(e.getStartKey()).getText().slice(e.getStartOffset(), e.getEndOffset())
					}(t, e.getCurrentContent());
					const n = Object(Lo.h)(Lo.f, r.text);
					n && (r.url = n.url)
				}
				return r
			}

			function is(e, t) {
				return o.EditorState.set(e, {
					currentContent: o.Modifier.removeInlineStyle(e.getCurrentContent(), t, _.k.HIGHLIGHT)
				})
			}
			class as extends a.Component {
				constructor(e) {
					super(e), this.api = null, this.updateTooltipPosition = null, this.lastEditorSelectionClientRect = null, this.editLinkInSelection = e => {
						const {
							editorState: t
						} = this.props;
						let n = e,
							r = t;
						const s = t.getCurrentContent();
						if (!Object(Io.e)(s, e)) return !1;
						const i = Object(Ar.a)(s, e);
						if (i) {
							if (s.getEntity(i.entityKey).getType() !== N.a.LINK) return !1;
							n = i.entitySelection
						} else this.isEditorFocused() && (this.lastEditorSelectionClientRect = Object(Fr.a)());
						return this.state.linkSelection && (r = is(t, this.state.linkSelection)), r = function(e, t) {
							return o.EditorState.set(e, {
								currentContent: o.Modifier.applyInlineStyle(e.getCurrentContent(), t, _.k.HIGHLIGHT)
							})
						}(t, n), this.props.onChange(r, () => {
							this.setState({
								linkSelection: n,
								linkEntity: i
							})
						}), !0
					}, this.hidePopup = () => {
						this.interruptLinkEditing(), this.hideDetailsPopup()
					}, this.showDetailsPopup = () => {
						this.state.isDetailsPopupActive || this.setState({
							isDetailsPopupActive: !0
						})
					}, this.hideDetailsPopup = () => {
						this.state.isDetailsPopupActive && this.setState({
							isDetailsPopupActive: !1
						})
					}, this.updatePosition = () => {
						if (!this.updateTooltipPosition) return;
						const {
							editorState: e
						} = this.props, t = e.getCurrentContent();
						let n;
						if (this.state.linkSelection) {
							const e = Object(Ar.a)(t, this.state.linkSelection);
							if (e) {
								const t = this.props.entityElementRegistry.get(e.entityKey);
								n = t && t.getBoundingClientRect()
							} else this.lastEditorSelectionClientRect && (n = this.lastEditorSelectionClientRect)
						} else {
							const t = Object(Io.c)(e);
							if (t) {
								const e = this.props.entityElementRegistry.get(t.entityKey);
								n = e && e.getBoundingClientRect()
							}
						}
						n && (this.updateTooltipPosition({
							left: n.left,
							top: n.bottom
						}), this.lastEditorSelectionClientRect = null)
					}, this.handleLink = (e, t) => {
						const {
							linkSelection: n
						} = this.state, {
							editorState: r
						} = this.props;
						let s = r;
						n && (n.isCollapsed() || (s = is(r, n)), void 0 !== e && (s = Object(Io.h)(s, n, e, t)), this.setState({
							linkSelection: null,
							linkEntity: null
						}), s !== r && (s = o.EditorState.forceSelection(s, s.getSelection()), this.props.onChange(s)))
					}, this.onLinkEdited = (e, t) => {
						this.handleLink(e, t)
					}, this.interruptLinkEditing = () => this.handleLink(), this.isEditorFocused = () => this.props.editorState.getSelection().getHasFocus(), this.onStartEditFocusedLink = () => {
						const {
							editorState: e
						} = this.props, t = Object(Io.c)(e);
						t && this.editLinkInSelection(t.entitySelection)
					}, this.onRemoveFocusedLink = () => {
						const {
							editorState: e
						} = this.props, t = Object(Io.c)(e);
						t && this.props.onChange(Object(Io.h)(e, t.entitySelection, ""))
					}, this.renderEditorPopup = () => {
						const {
							linkSelection: e,
							linkEntity: t
						} = this.state, {
							editorState: n
						} = this.props;
						if (!e) return null;
						const {
							text: o,
							url: r
						} = ss(n, e, t);
						return c.a.createElement(rs, {
							url: r,
							displayText: o,
							isInsertMode: !t,
							onEdited: this.onLinkEdited,
							onFocusLost: this.interruptLinkEditing
						})
					}, this.renderDetailsPopup = () => {
						const e = Object(Io.c)(this.props.editorState);
						return e && this.isEditorFocused() && this.state.isDetailsPopupActive ? c.a.createElement(Hr, {
							url: e.url,
							onStartEdit: this.onStartEditFocusedLink,
							onRemove: this.onRemoveFocusedLink
						}) : null
					}, this.state = {
						isDetailsPopupActive: !1,
						linkSelection: null,
						linkEntity: null
					}, this.api = {
						editLinkInSelection: this.editLinkInSelection,
						hidePopup: this.hidePopup
					}
				}
				componentDidMount() {
					const {
						onSetApi: e
					} = this.props;
					this.api && e && e(this.api)
				}
				componentWillUnmount() {
					this.props.onSetApi && this.props.onSetApi(null)
				}
				componentDidUpdate(e, t) {
					t.linkSelection === this.state.linkSelection && e.editorState === this.props.editorState || (this.showDetailsPopup(), this.updatePosition())
				}
				render() {
					return c.a.createElement(Rn.b, {
						onSetPositionUpdater: e => this.updateTooltipPosition = e,
						trianglePlacement: Rn.a.Above
					}, this.renderEditorPopup() || this.renderDetailsPopup())
				}
			}
			var cs = n("./src/reddit/components/RichTextEditor/OrderedList/index.m.less"),
				ds = n.n(cs);
			const ls = b.a.ol("OrderedListWrapper", ds.a),
				us = Object(D.Map)({
					[_.i.ORDERED]: {
						element: "li",
						aliasedElements: ["li"],
						wrapper: c.a.createElement(ls, null)
					}
				});
			var ps = n("./src/reddit/components/RichTextEditor/Paragraph/index.m.less"),
				ms = n.n(ps);
			const hs = b.a.div("ParagraphWrapper", ms.a),
				bs = Object(D.Map)({
					[_.n]: {
						element: "div",
						aliasedElements: ["p"],
						wrapper: c.a.createElement(hs, null)
					}
				});
			var fs = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx");
			var gs = n("./src/reddit/components/RichTextEditor/TextRendering/index.m.less"),
				Es = n.n(gs);
			const Cs = Object(Qo.a)(() => ({
					[_.k.SUPERSCRIPT]: {
						position: "relative",
						top: "-0.4em",
						fontSize: "0.7em",
						lineHeight: "0.7em"
					},
					[_.k.HIGHLIGHT]: {
						backgroundColor: "#b8e0f9"
					},
					[_.k.UNDERLINE]: {
						textDecoration: "none"
					},
					[_.k.MONOSPACE]: {
						backgroundColor: "var(--newRedditTheme-field)",
						caretColor: "#000",
						color: "var(--newRedditTheme-monospaceColor)",
						fontFamily: "Noto Mono, Menlo, Monaco, Consolas, monospace",
						padding: "0.1em 0.2em",
						fontSize: "0.8em",
						borderRadius: "3px"
					}
				})),
				ys = b.a.div("H1", Es.a),
				xs = b.a.div("H2", Es.a),
				vs = b.a.div("H3", Es.a),
				Os = b.a.div("H4", Es.a),
				_s = b.a.div("H5", Es.a),
				ks = b.a.div("H6", Es.a),
				Ss = e => ({
					component: t => c.a.createElement(e, null, c.a.createElement(o.EditorBlock, t)),
					editable: !0
				}),
				js = {
					[_.g.H1]: Ss(ys),
					[_.g.H2]: Ss(xs),
					[_.g.H3]: Ss(vs),
					[_.g.H4]: Ss(Os),
					[_.g.H5]: Ss(_s),
					[_.g.H6]: Ss(ks)
				},
				Ts = ["italic normal 1em 'Noto Sans'", "italic bold 1em 'Noto Sans'", "normal bold 1em 'Noto Sans'"],
				ws = () => {
					const e = document.fonts;
					e && e.load && Ts.forEach(t => e.load(t))
				};
			var Is = n("./src/reddit/components/RichTextEditor/UnorderedList/index.m.less"),
				Ps = n.n(Is);
			const Rs = b.a.ul("UnorderedListWrapper", Ps.a),
				Ms = Object(D.Map)({
					[_.i.UNORDERED]: {
						element: "li",
						aliasedElements: ["li"],
						wrapper: c.a.createElement(Rs, null)
					}
				});
			var Ns = n("./src/reddit/contexts/InsideOverlay.tsx"),
				Ds = n("./node_modules/lodash/debounce.js"),
				Ls = n.n(Ds),
				As = n("./src/reddit/actions/subredditAutocomplete/index.ts"),
				Fs = n("./src/reddit/controls/SubredditDropdown/index.m.less"),
				Bs = n.n(Fs);

			function Us() {
				return (Us = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Ks = ({
				isFocused: e,
				...t
			}) => c.a.createElement("div", Us({
				className: Object(m.a)(Bs.a.entry, {
					[Bs.a.mIsFocused]: e
				})
			}, t));
			class Ws extends a.Component {
				constructor(e) {
					super(e), this.mouseDown = !1, this.onMouseUp = () => {
						this.mouseDown && (this.props.onEntrySelect(this.props.entry), this.mouseDown = !1)
					}, this.onMouseDown = e => {
						this.mouseDown = !0, e.preventDefault()
					}, this.onMouseOver = () => {
						this.props.onEntryFocus(this.props.entry)
					}, this.mouseDown = !1
				}
				componentDidUpdate() {
					this.mouseDown = !1
				}
				render() {
					return c.a.createElement(Ks, {
						isFocused: this.props.isFocused,
						onMouseDown: this.onMouseDown,
						onMouseUp: this.onMouseUp,
						onMouseOver: this.onMouseOver
					}, this.props.children)
				}
			}
			var Gs = n("./src/reddit/helpers/name/index.ts"),
				Hs = n("./src/reddit/selectors/subredditAutocomplete.ts");
			const qs = Object(l.c)({
				subredditSuggestions: (e, t) => {
					const n = Object(Hs.d)(e, t);
					return n ? n.subreddits : []
				}
			});
			class Vs extends a.Component {
				constructor(e) {
					super(e), this.api = null, this.onEntrySelect = e => {
						this.props.onSelect(this.props.subredditSuggestions[e].name)
					}, this.onEntryFocus = e => {
						this.setState({
							selectedSuggestionIndex: e
						})
					}, this.moveUp = () => {
						if (this.props.subredditSuggestions.length > 1) {
							let e = this.state.selectedSuggestionIndex - 1;
							return e = e < 0 ? this.props.subredditSuggestions.length - 1 : e, this.setState({
								selectedSuggestionIndex: e
							}), !0
						}
						return !1
					}, this.moveDown = () => {
						if (this.props.subredditSuggestions.length > 1) {
							const e = (this.state.selectedSuggestionIndex + 1) % this.props.subredditSuggestions.length;
							return this.setState({
								selectedSuggestionIndex: e
							}), !0
						}
						return !1
					}, this.selectCurrent = () => {
						if (this.props.subredditSuggestions.length) {
							const e = this.props.subredditSuggestions[this.state.selectedSuggestionIndex];
							return e && this.props.onSelect(e.name), !0
						}
						return !1
					}, this.state = {
						selectedSuggestionIndex: 0
					}, this.requestSubredditAutocomplete = Ls()(this.requestSubredditAutocomplete.bind(this), 200, {
						maxWait: 200
					}), this.api = {
						moveUp: this.moveUp,
						moveDown: this.moveDown,
						selectCurrent: this.selectCurrent
					}
				}
				componentDidMount() {
					this.requestSubredditAutocomplete(this.props.substring), this.props.onDropdownApi(this.api)
				}
				componentWillUnmount() {
					this.props.onDropdownApi(null)
				}
				componentWillReceiveProps(e) {
					e.substring !== this.props.substring && (this.requestSubredditAutocomplete(e.substring), this.setState({
						selectedSuggestionIndex: 0
					}))
				}
				requestSubredditAutocomplete(e) {
					this.props.onGetSubredditAutocomplete(e)
				}
				render() {
					return this.props.subredditSuggestions.length ? c.a.createElement("div", {
						className: Object(m.a)(Bs.a.list, this.props.className)
					}, this.props.subredditSuggestions.map((e, t) => c.a.createElement(Ws, {
						entry: t,
						isFocused: t === this.state.selectedSuggestionIndex,
						key: e.name,
						onEntrySelect: this.onEntrySelect,
						onEntryFocus: this.onEntryFocus
					}, Object(Gs.c)(e.name)))) : null
				}
			}
			var zs = Object(d.b)(qs, (e, t) => ({
					onGetSubredditAutocomplete: t => {
						e(As.a(t))
					}
				}))(Vs),
				Qs = n("./src/reddit/selectors/comments.ts");
			const Ys = Object(l.c)({
				commentAuthors: Qs.h
			});
			class Js extends a.Component {
				constructor(e) {
					super(e), this.api = null, this.onEntrySelect = e => {
						this.props.onSelect(this.state.userSuggestions[e])
					}, this.onEntryFocus = e => {
						this.setState({
							selectedSuggestionIndex: e
						})
					}, this.moveUp = () => {
						if (this.state.userSuggestions.length > 1) {
							let e = this.state.selectedSuggestionIndex - 1;
							return e = e < 0 ? this.state.userSuggestions.length - 1 : e, this.setState({
								selectedSuggestionIndex: e
							}), !0
						}
						return !1
					}, this.moveDown = () => {
						if (this.state.userSuggestions.length > 1) {
							const e = (this.state.selectedSuggestionIndex + 1) % this.state.userSuggestions.length;
							return this.setState({
								selectedSuggestionIndex: e
							}), !0
						}
						return !1
					}, this.selectCurrent = () => {
						if (this.state.userSuggestions.length) {
							const e = this.state.userSuggestions[this.state.selectedSuggestionIndex];
							return e && this.props.onSelect(e), !0
						}
						return !1
					}, this.state = {
						userSuggestions: [],
						selectedSuggestionIndex: 0
					}, this.api = {
						moveUp: this.moveUp,
						moveDown: this.moveDown,
						selectCurrent: this.selectCurrent
					}
				}
				componentDidMount() {
					this.props.onDropdownApi(this.api), this.setState({
						userSuggestions: this.filterUsers(this.props.substring)
					})
				}
				componentWillUnmount() {
					this.props.onDropdownApi(null)
				}
				componentWillReceiveProps(e) {
					e.substring !== this.props.substring && this.setState({
						selectedSuggestionIndex: 0,
						userSuggestions: this.filterUsers(e.substring)
					})
				}
				filterUsers(e) {
					const {
						commentAuthors: t
					} = this.props;
					return t.filter(t => t.toLowerCase().startsWith(e.toLowerCase()))
				}
				render() {
					return this.state.userSuggestions.length ? c.a.createElement("div", {
						className: Object(m.a)(Bs.a.list, this.props.className)
					}, this.state.userSuggestions.map((e, t) => c.a.createElement(Ws, {
						key: t,
						entry: t,
						onEntryFocus: this.onEntryFocus,
						onEntrySelect: this.onEntrySelect,
						isFocused: t === this.state.selectedSuggestionIndex
					}, Object(Gs.d)(e)))) : null
				}
			}
			var Xs = Object(d.b)(Ys)(Js),
				Zs = n("./node_modules/lodash/dropRightWhile.js"),
				$s = n.n(Zs),
				ei = n("./node_modules/lodash/flatMap.js"),
				ti = n.n(ei),
				ni = n("./node_modules/lodash/reduceRight.js"),
				oi = n.n(ni),
				ri = n("./node_modules/lodash/trimEnd.js"),
				si = n.n(ri),
				ii = n("./node_modules/lodash/trimStart.js"),
				ai = n.n(ii),
				ci = n("./src/lib/forEachGroup/index.ts");

			function di(e, t) {
				const n = [],
					o = e.withMutations(e => {
						for (; e.size && t(e.first());) n.push(e.first()), e.shift()
					});
				return {
					popped: n,
					stack: o
				}
			}
			var li = n("./src/lib/unicodeUtils/index.ts"),
				ui = n("./src/reddit/helpers/richTextJson/index.ts"),
				pi = n("./src/reddit/models/RichTextJson/nodeMakers.ts");
			const mi = {
				BOLD: Fn.j.bold,
				ITALIC: Fn.j.italic,
				MONOSPACE: Fn.j.monospace,
				STRIKETHROUGH: Fn.j.strikethrough,
				SUBSCRIPT: Fn.j.subscript,
				SUPERSCRIPT: Fn.j.superscript,
				UNDERLINE: Fn.j.underline
			};
			var hi = (e, t) => bi(e.getBlockMap(), e, t);
			const bi = (e, t, n) => {
					const o = [];
					let r = e.toStack();
					for (; r.size;) {
						const e = r.first(),
							s = e.getType();
						switch (r = r.shift(), s) {
							case _.g.H1:
							case _.g.H2:
							case _.g.H3:
							case _.g.H4:
							case _.g.H5:
							case _.g.H6:
								o.push(xi(e, t));
								break;
							case _.e: {
								const {
									popped: n,
									stack: s
								} = di(r, e => e.getType() === _.e);
								r = s, o.push(vi([e, ...n], t));
								break
							}
							case _.f: {
								const {
									popped: t,
									stack: n
								} = di(r, e => e.getType() === _.f);
								r = n, o.push(Oi([e, ...t]));
								break
							}
							case _.i.ORDERED:
							case _.i.UNORDERED: {
								const {
									popped: n,
									stack: i
								} = di(r, e => e.getType() === s);
								r = i, o.push(_i([e, ...n], t));
								break
							}
							case _.l: {
								const {
									popped: n,
									stack: s
								} = di(r, e => Object(_.v)(e.getType()));
								r = s, o.push(ki([e, ...n], t));
								break
							}
							case _.a: {
								let t = r.first();
								t && Object(_.u)(t.getType()) ? r = r.shift() : t = void 0, o.push(Si(e, t, n));
								break
							}
							case _.n:
							default:
								o.push(Ci(e, t))
						}
					}
					return o
				},
				fi = e => e.reduce((e, t) => t === _.k.UNDERLINE || t === _.k.SUBSCRIPT ? e : e | (mi[t] || 0) | 0, 0),
				gi = (e, t) => {
					const n = [],
						o = Object(li.b)(e);
					return Object(ci.a)(t, {
						keyFn: e => e.getStyle()
					}, (t, r, s, i) => {
						if (r.isEmpty()) return;
						const a = e.slice(s, i),
							c = s + (a.length - ai()(a).length),
							d = i - (a.length - si()(a).length),
							l = d - c,
							u = o[c],
							p = o[d] - u;
						l > 0 && n.push([fi(r), u, p])
					}), n.length ? n : null
				},
				Ei = (e, t) => {
					const n = e.getText(),
						o = e.getCharacterList(),
						r = [],
						s = _.d.includes(e.getType()),
						i = _.c.includes(e.getType());
					let a = 0;
					return Object(ci.a)(o, {
						keyFn: (e, o) => {
							const r = e.getEntity();
							return s && e.getStyle().contains(_.k.SPOILER) ? "spoiler" : Object(N.b)(r, t) ? `link-${e.getEntity()}` : "\n" === n[o] ? i ? "linebreak" : "skip" : r && t.getEntity(r).getType() === N.a.EMOTE ? `emote-${a++}` : "text"
						}
					}, (e, s, i, a) => {
						const c = n.slice(i, a),
							d = o.slice(i, a).toList();
						if ("text" === s) {
							const e = gi(c, d);
							r.push(Object(pi.s)(c, e))
						} else if ("spoiler" === s) r.push(Object(pi.n)(c));
						else if (s.startsWith("link-")) {
							const n = t.getEntity(e.getEntity());
							r.push(((e, t, n) => {
								const o = e.getType(),
									r = [N.a.USER_LINK, N.a.USER_MENTION],
									{
										url: s
									} = e.getData(),
									i = t.startsWith("/");
								if (o === N.a.SUBREDDIT_LINK) {
									const e = t.replace(f.e, "");
									return Object(pi.o)(e, i)
								}
								if (r.includes(o)) {
									const e = t.replace(f.a, "");
									return Object(pi.t)(e, i)
								}
								const a = gi(t, n);
								return Object(pi.i)(t, s, a)
							})(n, c, d))
						} else if ("linebreak" === s) r.push(Object(pi.h)());
						else if (s.startsWith("emote-")) {
							const n = t.getEntity(e.getEntity()).getData();
							r.push(Object(pi.e)(n.fullId, n.imageType))
						}
					}), r
				},
				Ci = (e, t) => Object(pi.l)(Ei(e, t)),
				yi = e => "text" === e.e ? Object(pi.m)(e.t) : "link" === e.e ? Object(pi.i)(e.t, e.u, null) : e.e === Fn.x ? e.c.map(yi) : e.e === Fn.n ? Object(pi.m)("") : e,
				xi = (e, t) => Object(pi.f)(_.m[e.getType()], ((e, t) => oi()(ti()(Ei(e, t), yi), ([e, ...t], n) => {
					if (!e) return [n];
					const o = t.length ? t : [];
					return e && "raw" === n.e && "raw" === e.e ? [Object(pi.m)(n.t + e.t), ...o] : [n, e, ...o]
				}, []))(e, t)),
				vi = (e, t) => Object(pi.c)($s()(e.map(e => ((e, t) => e.getText().trim().length ? Ci(e, t) : pi.a)(e, t)), e => e === pi.a)),
				Oi = e => Object(pi.d)(e.map(e => Object(pi.m)(e.getText()))),
				_i = (e, t) => {
					if (!e.length) return Object(pi.k)([], !1);
					const n = e[0].getDepth();
					let o = null;
					const r = [];
					let s = [];
					const i = () => null !== o || s.length,
						a = () => {
							const e = [];
							null !== o && (e.push(o), o = null), s.length && (e.push(_i(s, t)), s = []), r.push(Object(pi.j)(e))
						};
					return e.forEach(e => {
						e.getDepth() > n ? s.push(e) : (i() && a(), o = Object(pi.l)(Ei(e, t)))
					}), i() && a(), Object(pi.k)(r, e[0].getType() === _.i.ORDERED)
				},
				ki = (e, t) => {
					const n = [...e].sort(H.b),
						o = n[0],
						{
							colCount: r
						} = Object(H.g)(o),
						s = F()(n, r),
						i = s[0].map(e => {
							const {
								alignment: n
							} = Object(H.g)(e);
							return Object(pi.q)(Ei(e, t), n)
						}),
						a = s.slice(1).map(e => e.map(e => Object(pi.p)(Ei(e, t))));
					return Object(pi.r)(i, a)
				},
				Si = (e, t, n) => {
					const o = Object(R.h)(e);
					if (!o) throw new Error("Invalid atomic block!");
					const {
						uploadInfo: r,
						mediaAsset: s,
						makeGif: i
					} = o, a = t ? t.getText() : "";
					if (r && n) {
						const e = n[r.uploadKey],
							t = e && e.metadata.mimetype || "",
							{
								assetId: s,
								thumbnailAssetId: c
							} = Object(R.f)(o, n);
						return Object(Ae.j)(t) ? Object(pi.b)(s, a) : Object(Ae.k)(t) ? Object(pi.g)(s, a) : Object(pi.u)(s, a, c, i)
					} {
						const {
							assetId: e,
							type: t
						} = s;
						let n;
						switch (t) {
							case R.a.AnimatedImage:
								n = Object(pi.b)(e, a);
								break;
							case R.a.Image:
								n = Object(pi.g)(e, a);
								break;
							case R.a.Video:
								n = Object(pi.u)(e, a);
								break;
							default:
								throw new Error("Invalid media type")
						}
						return Object(ui.f)(e) ? Object(pi.l)([n]) : n
					}
				};
			var ji, Ti = n("./src/reddit/constants/componentSizes.ts"),
				wi = n("./src/reddit/constants/elementIds.ts");
			! function(e) {
				e.Up = "up", e.Down = "down"
			}(ji || (ji = {}));
			var Ii = e => {
					const t = window.getSelection().focusNode;
					if (!t || !t.parentElement) return;
					const n = document.getElementById(wi.d),
						o = n || document.documentElement;
					if (!o) return;
					const r = window.innerHeight,
						{
							bottom: s,
							top: i
						} = t.parentElement.getBoundingClientRect(),
						a = n ? 0 : Ti.f + Ti.p;
					e === ji.Up && i < a ? o.scrollBy(0, i - a) : e === ji.Down && s > r && o.scrollBy(0, s - r)
				},
				Pi = n("./src/reddit/models/Product/index.ts"),
				Ri = (e, t, n) => {
					const o = {
						url: n
					};
					return e.createEntity(t, "MUTABLE", o)
				},
				Mi = n("./node_modules/lodash/maxBy.js"),
				Ni = n.n(Mi);
			const Di = (e, t) => {
				if (!t) return (e => {
					const t = e.id;
					switch (e.e) {
						case Fn.m:
							return {
								assetId: t, type: R.a.Image
							};
						case Fn.a:
							return {
								assetId: t, type: R.a.AnimatedImage
							};
						case Fn.D:
							return {
								assetId: t, type: R.a.Video
							}
					}
				})(e);
				const n = t.id;
				switch (t.e) {
					case Fn.s: {
						const {
							s: e
						} = t;
						return {
							assetId: n,
							type: R.a.Image,
							imageUrl: e.u,
							width: e.x,
							height: e.y
						}
					}
					case Fn.r: {
						const {
							s: e
						} = t;
						return {
							assetId: n,
							type: R.a.AnimatedImage,
							imageUrl: e.gif,
							posterUrl: e.p,
							dashUrl: e.mp4,
							width: e.x,
							height: e.y
						}
					}
					case Fn.t: {
						const {
							isGif: e,
							dashUrl: o,
							hlsUrl: r,
							p: s,
							x: i,
							y: a
						} = t;
						let c;
						if (s) {
							c = Ni()(s, e => e.x).u
						}
						return {
							assetId: n,
							type: R.a.Video,
							isGif: e,
							dashUrl: o,
							hlsUrl: r,
							posterUrl: c,
							width: i,
							height: a
						}
					}
				}
			};

			function Li(e, t, n) {
				const r = e.id,
					s = e.c,
					i = Fn.E(t, r),
					a = Di(e, i),
					c = [new o.ContentBlock({
						key: Object(o.genKey)(),
						type: _.a,
						data: Object(D.Map)({
							mediaAsset: a
						})
					})];
				if (n) {
					const e = Object(M.h)(Object(o.genKey)(), s).merge({
						type: _.j
					});
					c.push(e)
				}
				return c
			}
			const Ai = Object.keys(mi),
				Fi = (e, t, n) => {
					switch (t.e) {
						case Fn.u:
							return Hi(e, t.c, _.b.UNSTYLED, n);
						case Fn.k:
							const o = _.h[t.l];
							return Hi(e, t.c || [], o, n);
						case Fn.p:
							return Ki(e, t, n);
						case Fn.b:
							return Bi(e, t, n);
						case Fn.c:
							return void t.c.forEach(t => Hi(e, [t], _.b.CODE_BLOCK, n));
						case Fn.z:
							return Ui(e, t, n);
						case Fn.m:
						case Fn.a:
						case Fn.D:
							return void e.blocks.push(...Li(t, n.mediaMetadataMap, Object(R.q)(n.editorType)))
					}
				},
				Bi = (e, t, n) => {
					t && t.c && t.c.length && t.c.forEach(t => t.e === Fn.u ? Hi(e, t.c, _.b.BLOCK_QUOTE, n) : Fi(e, t, n))
				},
				Ui = (e, t, n) => {
					const {
						h: o,
						c: r
					} = t, s = o.length;
					[o, ...r].forEach((t, r) => t.forEach((t, i) => {
						const {
							c: a = []
						} = t, {
							a: c
						} = o[i], d = {
							alignment: c,
							colCount: s,
							colIndex: i,
							rowIndex: r
						};
						Hi(e, a, _.b.TABLE_CELL, n, d)
					}))
				},
				Ki = (e, t, n, o = 0) => {
					const r = t.o ? _.b.ORDERED_LIST : _.b.UNORDERED_LIST;
					t.c.forEach(t => {
						const s = t.c;
						if (!s || !s.length) return;
						const [i, a] = s, c = i.e === Fn.u ? i.c : [];
						Hi(e, c, r, n, void 0, o), a && a.e === Fn.p && Ki(e, a, n, o + 1)
					})
				},
				Wi = {
					[Fn.y]: ["r/", "/r/"],
					[Fn.B]: ["u/", "/user/"],
					[Fn.C]: ["u/", "/user/"],
					[Fn.v]: ["p/", ""],
					[Fn.g]: ["c/", ""]
				},
				Gi = {
					[Fn.y]: N.a.SUBREDDIT_LINK,
					[Fn.B]: N.a.USER_LINK,
					[Fn.C]: N.a.USER_MENTION,
					[Fn.v]: N.a.POST_LINK,
					[Fn.g]: N.a.COMMENT_LINK
				},
				Hi = (e, t, n, r, s = {}, i, a = !1) => {
					const c = e.content;
					if (1 === t.length && (t[0].e === Fn.m || t[0].e === Fn.a)) {
						const n = t[0];
						if (Object(ui.f)(n.id)) return void e.blocks.push(...Li(n, r.mediaMetadataMap, Object(R.q)(r.editorType)))
					}
					const {
						charList: d,
						text: l,
						updatedContent: u
					} = qi(t, c, r), p = new o.ContentBlock({
						key: Object(o.genKey)(),
						characterList: Object(D.List)(d),
						data: Object(D.fromJS)(s),
						depth: i,
						text: l,
						type: n
					});
					e.content = u || c, a ? e.blocks.unshift(p) : e.blocks.push(p)
				},
				qi = (e, t, n) => {
					let o = t,
						r = "";
					const s = [];
					if (e.forEach(e => {
							const t = Vi(e, o, n);
							o = t.updatedContent || o, r += t.text, s.push(...t.charList)
						}), r.length !== s.length) throw new Error("Characters length mismatch!");
					return {
						charList: s,
						text: r,
						updatedContent: o !== t ? o : void 0
					}
				},
				Vi = (e, t, n) => {
					switch (e.e) {
						case Fn.A: {
							const {
								t,
								f: n
							} = e;
							return {
								charList: zi(t, n),
								text: t
							}
						}
						case Fn.x: {
							const {
								c: r
							} = e, s = qi(r, t, n);
							return s.charList = s.charList.map(e => (e => o.CharacterMetadata.create({
								style: e.getStyle().add(_.k.SPOILER),
								entity: e.getEntity()
							}))(e)), s
						}
						case Fn.v:
						case Fn.g:
						case Fn.w: {
							const {
								t
							} = e;
							return {
								charList: zi(t),
								text: t
							}
						}
						case Fn.y:
						case Fn.B:
						case Fn.C: {
							const [n, o] = Wi[e.e], r = (e.l ? "/" : "") + n + e.t, s = o + e.t, i = Ri(t, Gi[e.e], s), a = i.getLastCreatedEntityKey();
							return {
								charList: zi(r, void 0, a),
								text: r,
								updatedContent: i
							}
						}
						case Fn.o: {
							const {
								t: n,
								u: o,
								f: r
							} = e, s = Ri(t, N.a.LINK, o), i = s.getLastCreatedEntityKey();
							return {
								charList: zi(n, r, i),
								text: n,
								updatedContent: s
							}
						}
						case Fn.m:
						case Fn.a:
							const {
								id: r
							} = e;
							if (r.startsWith("emote|")) {
								const e = Object(Pi.b)(r),
									o = n.activeEmotes && n.activeEmotes[e];
								if (o) {
									const e = Object(Eo.c)(t, o),
										n = e.getLastCreatedEntityKey(),
										r = Eo.a;
									return {
										charList: zi(r, void 0, n),
										text: r,
										updatedContent: e
									}
								}
								const s = `:${e}:`;
								return {
									charList: zi(s),
									text: s
								}
							}
							return {
								text: "", charList: zi("")
							};
						default:
							return {
								text: "", charList: zi("")
							}
					}
				},
				zi = (e, t, n = null) => {
					const r = o.CharacterMetadata.create({
							entity: n
						}),
						s = Array(e.length).fill(r),
						i = Object(li.a)(e);
					return t && t.forEach(e => {
						const [t, r, a] = e, c = (e => {
							const t = Ai.filter(t => !!(mi[t] & e));
							return Object(D.OrderedSet)(t)
						})(t), d = r + a, l = o.CharacterMetadata.create({
							entity: n,
							style: c
						});
						s.fill(l, i[r], i[d])
					}), s
				},
				Qi = (e, t) => {
					e.blocks.length && (e.blocks[0].getType() === _.b.TABLE_CELL && Hi(e, [], _.b.UNSTYLED, t, void 0, void 0, !0), e.blocks[e.blocks.length - 1].getType() === _.b.TABLE_CELL && Hi(e, [], _.b.UNSTYLED, t))
				};
			var Yi = (e, t, n, r) => {
					const s = "string" == typeof e ? JSON.parse(e) : e;
					if (!s || !s.document || !s.document.length) return null;
					const i = {
							editorType: t,
							mediaMetadataMap: n,
							activeEmotes: r ? r.reduce((e, t) => ({
								...e,
								...t.emotes
							}), {}) : void 0
						},
						a = {
							blocks: [],
							content: o.ContentState.createFromText("")
						};
					s.document.forEach(e => {
						Fi(a, e, i)
					}), 0 === a.blocks.length && Hi(a, [], _.b.UNSTYLED, i), Qi(a, i);
					const c = o.BlockMapBuilder.createFromArray(a.blocks),
						d = o.SelectionState.createEmpty(c.first().getKey());
					return a.content.merge({
						blockMap: c,
						selectionBefore: d,
						selectionAfter: d
					})
				},
				Ji = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				Xi = n("./src/reddit/constants/elementClassNames.ts"),
				Zi = n("./src/reddit/constants/keycodes.ts"),
				$i = n("./src/reddit/icons/svgs/Send/index.tsx"),
				ea = n("./src/reddit/selectors/economics.ts"),
				ta = n("./src/reddit/components/RichTextEditor/index.m.less"),
				na = n.n(ta);

			function oa() {
				return (oa = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			Object(fs.b)({
				draftToRTFJson: hi,
				getMediaCount: R.g,
				getPendingThumbnailUploads: R.i,
				isAllMediaUploaded: R.m
			});
			const ra = "handled",
				sa = "not-handled",
				ia = /^\s*$/,
				aa = 20,
				ca = b.a.wrapped(sr.a, "FocusableContent", na.a),
				da = b.a.div("Container", na.a),
				la = b.a.wrapped(Ji.a, "CurrentUserIcon", na.a),
				ua = e => `${y.b}-${e}`,
				pa = Object(d.b)(() => {
					const e = (() => Object(l.a)(e => e.uploads, (e, t) => t.rteState.editorKey, (e, t) => i()(e, e => e.key.startsWith(ua(t)))))();
					return Object(l.c)({
						editorUploads: e,
						emotesSpecialMembershipEnabled: x.d.spEmotes,
						giphySpecialMembershipEnabled: x.d.spGiphy,
						activeEmotes: (e, t) => {
							var n;
							return Object(ea.b)(e, {
								subredditId: null === (n = t.destSubreddit) || void 0 === n ? void 0 : n.id
							})
						},
						shouldShowCommentGifsTooltip: (e, t) => {
							var n;
							return Object(Oo.c)(e, {
								subredditId: null === (n = t.destSubreddit) || void 0 === n ? void 0 : n.id
							})
						}
					})
				}, e => ({
					onFetchEditorProducts: t => e(Object(C.e)(t)),
					onTrackMediaDrop: t => e((e, n) => v.o(n(), t)),
					retryUpload: t => e(y.c(t)),
					startUploads: (t, n, o) => e(y.e(t, n, ua(o)))
				}));
			class ma extends a.Component {
				constructor(e) {
					super(e), this.blockRenderMap = o.DefaultDraftBlockRenderMap.merge(dr, mr, wn, us, bs, Ms, nn), this.editorHeight = null, this.editorRef = null, this.editorRootStyleMutationObserver = null, this.linksControllerApi = null, this.suggestionDropdownApi = null, this.tableToolbarControllerApi = null, this.emotesTooltipApi = null, this.gifTooltipApi = null, this.updateSuggestionDropdownPosition = null, this.isJustAutocompleteSelected = !1, this.isJustLinkified = !1, this.isMouseDown = !1, this.isJustConvertedToList = !1, this.needSyncScroll = null, this.transforms = {
						[k.BREAK_HEADER_ENTITY]: mo.b,
						[k.INSERT_LINE_BREAK]: mo.e,
						[k.REDUCE_LIST_INDENT]: mo.f,
						[k.RESET_CURRENT_AND_PREVIOUS_BLOCKS]: mo.g,
						[k.REMOVE_EXTRA_LIST_ITEM]: mo.h,
						[w.d]: e => Vo(e, this.props.editorType),
						[w.b]: e => qo(e, this.props.editorType),
						[w.f]: mo.d,
						[w.c]: e => Object(mo.c)(_.k.BOLD, e),
						[w.e]: e => Object(mo.c)(_.k.ITALIC, e),
						[w.g]: e => Object(mo.c)(_.k.UNDERLINE, e)
					}, this.setContainerRef = e => {
						const {
							domRef: t
						} = this.props;
						t && t(e), this.setState({
							containerRef: e
						})
					}, this.setFocusableContentRef = e => this.setState({
						focusableContentRef: e
					}), this.rteStateChanged = (e, t) => {
						const n = {
							...this.props.rteState,
							isBound: !0,
							editorState: e
						};
						this.props.onChange(n, t)
					}, this.hideTooltips = () => {
						this.emotesTooltipApi && this.emotesTooltipApi.closeTooltip(), this.gifTooltipApi && this.gifTooltipApi.closeTooltip(), this.tableToolbarControllerApi && this.tableToolbarControllerApi.hideActionButton(), this.linksControllerApi && this.linksControllerApi.hidePopup(), this.suppressAutocompleteForFocusedLink()
					}, this.onEditorStyleChanged = () => {
						if (!this.editorRef) return;
						const e = this.editorRef.refs.editor,
							t = e.style.height ? Number.parseInt(e.style.height) : null;
						this.editorHeight !== t && (this.hideTooltips(), this.editorHeight = t, t && this.props.onEditorResize && this.props.onEditorResize(t))
					}, this.insertValidatedMedia = () => {
						const {
							editorUploads: e
						} = this.props, {
							editorState: t,
							mediaToInsert: n
						} = this.state;
						if (!n) return;
						const {
							files: o,
							blockKey: r,
							insertionMode: s
						} = n, i = o.map(t => e.find(e => e.file === t)).filter(Boolean);
						this.setState({
							mediaToInsert: null
						});
						const a = i.filter(e => !!e.metadata.mimetype);
						a.length && this.onChange(Object(R.l)(t, a, r, s))
					}, this.focus = () => this.editorRef && this.editorRef.focus(), this.blur = () => this.editorRef && this.editorRef.blur(), this.isFocused = () => this.state.editorState.getSelection().getHasFocus(), this.isEmpty = () => !this.state.editorState.getCurrentContent().hasText(), this.setEditorRef = e => this.editorRef = e, this.setSuggestionDropdownApi = e => this.suggestionDropdownApi = e, this.setLinksControllerApi = e => this.linksControllerApi = e, this.setTableToolbarControllerApi = e => this.tableToolbarControllerApi = e, this.setEmotesTooltipApi = e => this.emotesTooltipApi = e, this.setGifTooltipApi = e => this.gifTooltipApi = e, this.setSuggestionDropdownPositionUpdater = e => this.updateSuggestionDropdownPosition = e, this.getEditorState = () => this.state.editorState, this.setEditorState = (e, t) => {
						const n = this.state.editorState.getCurrentContent() !== e.getCurrentContent();
						n && this.props.readOnly || (this.setState({
							editorState: e
						}, t), this.rteStateChanged(e, n))
					}, this.toolbarSetState = e => {
						const t = e.getInlineStyleOverride();
						let n = e;
						n.getSelection().getHasFocus() || (n = o.EditorState.forceSelection(n, n.getSelection()), t && (n = o.EditorState.setInlineStyleOverride(n, t))), this.onChange(n)
					}, this.onChange = (e, t) => {
						let n = e;
						n = gn(n, this.state.editorState), n = Re(n, this.props.editorType), this.emotesTooltipApi && (n = Object(Eo.d)(n, this.state.editorState)), n = Bo(n, this.state.editorState), n = Object(Xo.d)(n, this.state.editorState), this.setEditorState(n, t);
						let {
							suppressAutocompleteForLink: o
						} = this.state;
						if (o) {
							const t = Object(Io.b)(e);
							t && t.entityKey === o || (o = null)
						}
						this.setState({
							suppressAutocompleteForLink: o
						}), this.isJustAutocompleteSelected = !1, this.isJustLinkified = !1, this.isMouseDown = !1, this.isJustConvertedToList = !1
					}, this.onFocus = () => {
						const {
							onFocus: e
						} = this.props;
						this.emotesTooltipApi && this.emotesTooltipApi.closeTooltip(), this.gifTooltipApi && this.gifTooltipApi.closeTooltip(), e && e()
					}, this.handleBeforeInput = e => {
						const {
							editorState: t
						} = this.state;
						if (this.isMouseDown) return ra;
						if (Pe(t, e)) return ra;
						let n = function(e, t) {
							const n = e.getSelection(),
								r = n.getFocusOffset();
							if (!n.isCollapsed() || 0 === r) return;
							const s = n.getFocusKey(),
								i = e.getCurrentContent(),
								a = i.getBlockForKey(s),
								c = a.getEntityAt(r - 1),
								d = a.getEntityAt(r);
							if (!(c && (!d || d !== c))) return;
							const l = i.getEntity(c),
								u = wo.has(l.getType());
							if ("MUTABLE" === l.getMutability() && u) {
								const r = o.Modifier.insertText(i, n, t, e.getCurrentInlineStyle());
								return o.EditorState.push(e, r, "insert-characters")
							}
						}(t, e) || t;
						return (n = mn(n, e) || n) !== t ? (this.onChange(n), ra) : sa
					}, this.keyBindingFN = e => {
						const {
							editorState: t
						} = this.state, {
							submitOnEnter: n
						} = this.props, r = t.getSelection();
						if (e.metaKey && e.keyCode === Zi.a.K) return k.OPEN_LINK_TOOLTIP;
						if (e.keyCode === Zi.a.Space) {
							if (Yo(t)) return k.CONVERT_TO_LIST_ON_SPACE;
							if (Object(Io.d)(t)) return k.LINKIFY_ON_SPACE
						} else if (e.keyCode === Zi.a.Enter) {
							if (e.ctrlKey || e.metaKey || n && !e.shiftKey) return k.SUBMIT;
							if (e.shiftKey && zo(t)) return k.INSERT_LINE_BREAK; {
								const e = this.enterKeyBinding(t);
								if (e) return e
							}
						} else if (e.keyCode === Zi.a.Backspace) {
							if (this.isJustLinkified || this.isJustConvertedToList) return w.h;
							if (r.isCollapsed()) {
								const e = t.getCurrentContent(),
									n = r.getEndKey(),
									o = r.getStartOffset(),
									s = e.getBlockForKey(n),
									i = s.getType();
								if ((Object(_.s)(i) || Object(_.q)(i) || Object(_.p)(i)) && 0 === o && s.getLength() > 0) {
									const t = e.getBlockBefore(n);
									if (!t || t.getType() !== i) return k.MAKE_PLAIN_BLOCK
								}
							}
						}
						return Object(o.getDefaultKeyBinding)(e)
					}, this.handleKeyCommand = e => {
						const {
							editorState: t
						} = this.state;
						let n = e,
							r = null;
						const s = e => {
							let t = e;
							if (r) {
								const {
									selection: e,
									url: n
								} = r;
								t = Object(Io.f)(t, e, n)
							}
							return this.onChange(t), this.isJustLinkified = !!r, ra
						};
						if (n === k.SUBMIT) this.props.onSubmit();
						else {
							if (n === k.CONVERT_TO_LIST_ON_SPACE) {
								const e = s(Jo(t));
								return this.isJustConvertedToList = !0, e
							}
							if (n === k.LINKIFY_ON_SPACE) return r = Object(Io.d)(t), s(Object(mo.a)(t));
							if (n === k.LINKIFY_ON_ENTER && (r = Object(Io.d)(t), !(n = this.enterKeyBinding(t, !1)))) return s(Object(mo.d)(t))
						}
						if (n === k.OPEN_LINK_TOOLTIP) return this.onToolbarLinkButtonClick(), ra;
						if (n === k.MAKE_PLAIN_BLOCK) {
							return s(Object(mo.i)(_.n, t))
						}
						if (n === k.EXEC_TABLE_ON_ENTER_HANDLER) return s(this.tableOnEnterHandler.handle(t));
						const i = this.transforms[n];
						if (i) {
							const e = i(t);
							if (e) return s(e)
						}
						const a = o.RichUtils.handleKeyCommand(t, n);
						return a ? s(a) : sa
					}, this.handleOnTab = e => {
						if (this.emotesTooltipApi && this.emotesTooltipApi.handleTabInEditor() || this.suggestionDropdownApi && this.suggestionDropdownApi.selectCurrent()) return void e.preventDefault();
						const {
							editorState: t
						} = this.state;
						let n = dn(e, t);
						if (n = n || Ho(e, t)) return void this.onChange(n);
						const r = o.RichUtils.onTab(e, t, 2);
						this.onChange(r)
					}, this.handleOnUpArrow = e => {
						if (this.emotesTooltipApi && this.emotesTooltipApi.handleUpArrowInEditor() || this.suggestionDropdownApi && this.suggestionDropdownApi.moveUp()) return void e.preventDefault();
						const t = ln(e, this.state.editorState) || we(e, this.state.editorState);
						t && this.onChange(t), this.needSyncScroll = ji.Up
					}, this.handleOnDownArrow = e => {
						if (this.suggestionDropdownApi && this.suggestionDropdownApi.moveDown()) return void e.preventDefault();
						const t = un(e, this.state.editorState) || Ie(e, this.state.editorState);
						t && this.onChange(t), this.needSyncScroll = ji.Down
					}, this.handleReturn = e => {
						const t = je(this.state.editorState);
						return t ? (this.onChange(t), e.preventDefault(), ra) : this.suggestionDropdownApi && this.suggestionDropdownApi.selectCurrent() ? (e.preventDefault(), ra) : sa
					}, this.suppressAutocompleteForFocusedLink = () => {
						const e = Object(Io.b)(this.state.editorState);
						e && this.state.suppressAutocompleteForLink !== e.entityKey && this.setState({
							suppressAutocompleteForLink: e.entityKey
						})
					}, this.handleEscape = e => {
						this.emotesTooltipApi && this.emotesTooltipApi.handleEscapeKeyInEditor(), this.suppressAutocompleteForFocusedLink()
					}, this.handleOnCopy = e => {
						this.editorRef && Ee(this.state.editorState, this.editorRef, e)
					}, this.handleOnCut = e => {
						const {
							editorState: t
						} = this.state;
						if (!this.editorRef) return;
						if (!Ee(t, this.editorRef, e)) return;
						const n = re(t) || Se(t) || Object(R.e)(t);
						n && this.onChange(n)
					}, this.handleOnPaste = e => {
						const {
							editorState: t
						} = this.state;
						if (!this.editorRef) return;
						if (this.handleFilesPaste(e, t), e.isPropagationStopped()) return;
						const n = Lr(t, this.editorRef, e, this.props.editorType);
						n && this.onChange(n)
					}, this.handleFilesPaste = (e, t) => {
						if (!this.props.allowMediaUploads) return void e.stopPropagation();
						const n = e.clipboardData.files;
						if (n && n.length) {
							const o = Array.from(n),
								r = t.getSelection().getEndKey();
							this.insertMediaFiles({
								files: o,
								blockKey: r,
								insertionMode: M.a.after,
								filesSource: E.FileSource.Clipboard
							}), e.stopPropagation()
						}
					}, this.handleOnMouseDown = e => {
						this.isMouseDown = !0
					}, this.handleOnMouseUp = e => {
						this.isMouseDown = !1
					}, this.handleDroppedFiles = (e, t) => ra, this.handleDrop = (e, t, n) => ra, this.handleBlur = () => {
						this.props.onBlur && this.props.onBlur()
					}, this.handlePastedText = (e, t) => ra, this.onInternalSuggestionSelected = e => {
						this.onChange(Object(Io.g)(this.state.editorState, e)), this.isJustAutocompleteSelected = !0
					}, this.onToolbarEmoteButtonClick = e => {
						this.gifTooltipApi && this.gifTooltipApi.closeTooltip(), this.emotesTooltipApi && this.emotesTooltipApi.toggleTooltip(e)
					}, this.onToolbarGifButtonClick = e => {
						this.emotesTooltipApi && this.emotesTooltipApi.closeTooltip(), this.gifTooltipApi && this.gifTooltipApi.toggleTooltip(e)
					}, this.onToolbarLinkButtonClick = () => {
						if (!this.linksControllerApi) return;
						const {
							editorState: e
						} = this.state;
						this.linksControllerApi.editLinkInSelection(e.getSelection()) || Object(g.b)(void 0, "Current selection cannot be edited by link editor!")
					}, this.handleSwitchToMarkdownMode = () => {
						const {
							editorState: e
						} = this.state, {
							onSwitchEditorMode: t
						} = this.props, n = fs.a.toRichTextJSON({
							...this.props.rteState,
							isBound: !0,
							editorState: Object(R.c)(e)
						});
						t && t(O.h.MARKDOWN, n), this.state.confirmModalOpen && this.toggleConfirmModal()
					}, this.onToolbarMarkdownSwitchClick = () => {
						const {
							editorState: e
						} = this.state;
						e && Uo(e) ? this.setState({
							confirmModalOpen: !0
						}) : this.handleSwitchToMarkdownMode()
					}, this.toggleConfirmModal = () => {
						this.setState({
							confirmModalOpen: !this.state.confirmModalOpen
						})
					}, this.insertMediaFiles = async e => {
						this.setState({
							mediaToInsert: e
						});
						const {
							files: t,
							filesSource: n
						} = e, o = t.slice(0, aa);
						await this.props.startUploads(o, n, this.props.rteState.editorKey), this.insertValidatedMedia()
					}, this.onRetryUpload = e => {
						this.props.retryUpload(e)
					}, this.onFilesSelect = e => {
						const {
							editorState: t
						} = this.state, n = t.getSelection().getEndKey();
						this.insertMediaFiles({
							files: e,
							blockKey: n,
							insertionMode: M.a.after,
							filesSource: E.FileSource.FileSelector
						})
					}, this.onFilesDrop = (e, t, n) => {
						this.props.onTrackMediaDrop(e), this.insertMediaFiles({
							files: e,
							blockKey: t,
							insertionMode: n,
							filesSource: E.FileSource.DragAndDrop
						})
					}, this.onBlockMove = (e, t, n) => {
						const {
							editorState: o
						} = this.state, r = Object(R.o)(o, e, t, n);
						r && this.onChange(r)
					}, this.getAtomicBlocksRenderConfig = () => ({
						component: Zt,
						props: {
							getEditorState: this.getEditorState,
							onChange: this.onChange,
							onRetryUpload: this.onRetryUpload,
							rteFocusableContentRef: this.state.focusableContentRef,
							editorType: this.props.editorType
						}
					}), this.blockRendererFn = e => {
						const t = e.getType();
						return t === _.a ? this.getAtomicBlocksRenderConfig() : t in js ? js[t] : void 0
					}, this.renderToolbar = e => c.a.createElement(Nt.b, e), this.entityElementRegistry = bo(), this.tableOnEnterHandler = new pn;
					const {
						activeEmotes: t,
						editorType: n,
						noBorder: r,
						initialHeight: s,
						initialMinHeight: i,
						rteState: a
					} = e;
					let d;
					a.isBound ? d = a.editorState : Object(Fn.G)(a.initialRTJSON) ? d = this.createInitialState(a.editorKey) : (d = o.EditorState.createWithContent(Yi(a.initialRTJSON, n, a.mediaMetadataMap, t), this.editorDecorators()), d = this.moveSelectionToEnd(d)), this.state = {
						noBorder: r,
						containerRef: null,
						confirmModalOpen: !1,
						editorState: d,
						focusableContentRef: null,
						inited: !1,
						initialHeight: s,
						initialMinHeight: i,
						mediaToInsert: null,
						suppressAutocompleteForLink: null
					}
				}
				editorDecorators() {
					return new o.CompositeDecorator([vo(), rr(), Do()])
				}
				moveSelectionToEnd(e) {
					const t = e.getCurrentContent().getBlockMap(),
						n = t.last().getKey(),
						r = t.last().getLength(),
						s = new o.SelectionState({
							anchorKey: n,
							anchorOffset: r,
							focusKey: n,
							focusOffset: r
						});
					return o.EditorState.acceptSelection(e, s)
				}
				createInitialState(e) {
					return o.EditorState.createWithContent(o.ContentState.createFromBlockArray([new o.ContentBlock({
						key: `${e}_initial`
					})]), this.editorDecorators())
				}
				componentDidMount() {
					if (this.props.rteRef && this.props.rteRef(this), h.a.write(ws), this.rteStateChanged(this.state.editorState, !1), this.editorRef) {
						const e = this.editorRef.refs.editor;
						e.addEventListener("scroll", this.hideTooltips), this.editorRootStyleMutationObserver = new MutationObserver(this.onEditorStyleChanged), this.editorRootStyleMutationObserver.observe(e, {
							attributes: !0,
							attributeFilter: ["style"]
						})
					}
					const {
						destSubreddit: e,
						emotesSpecialMembershipEnabled: t,
						giphySpecialMembershipEnabled: n
					} = this.props;
					e && e.id && (t || n) && this.props.onFetchEditorProducts(e.id)
				}
				componentDidUpdate(e, t) {
					const n = this.getLinkForAutocomplete();
					if (n && this.updateSuggestionDropdownPosition) {
						const e = this.entityElementRegistry.get(n.entityKey);
						if (e) {
							const {
								left: t,
								bottom: n,
								height: o
							} = e.getBoundingClientRect();
							this.updateSuggestionDropdownPosition({
								left: t,
								top: n,
								bottom: n - o
							})
						}
					}
					this.needSyncScroll && (Ii(this.needSyncScroll), this.needSyncScroll = null)
				}
				componentWillUnmount() {
					if (this.props.rteRef && this.props.rteRef(null), this.insertValidatedMedia = () => {}, this.editorRef) {
						this.editorRef.refs.editor.removeEventListener("scroll", this.hideTooltips)
					}
					this.editorRootStyleMutationObserver && (this.editorRootStyleMutationObserver.disconnect(), this.editorRootStyleMutationObserver = null)
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.rteState !== this.props.rteState && e.rteState.isBound && e.rteState.editorState !== this.state.editorState && this.setState({
						editorState: e.rteState.editorState
					})
				}
				shouldComponentUpdate(e, t) {
					if (t !== this.state) return !0;
					if (!(e.rteState.isBound && e.rteState.editorState === this.state.editorState)) return !0;
					return !p()(e, this.props, (e, t, n) => "rteState" === n || void 0)
				}
				enterKeyBinding(e, t = !0) {
					const n = e.getCurrentContent(),
						o = e.getSelection(),
						r = o.getStartKey(),
						s = o.getEndKey(),
						i = o.getEndOffset(),
						a = n.getBlockForKey(r).getType(),
						c = n.getBlockForKey(s),
						d = c.getType(),
						l = i === c.getText().length;
					if (a === _.l || d === _.l) return k.EXEC_TABLE_ON_ENTER_HANDLER;
					if (o.isCollapsed()) {
						if (t && Object(Io.d)(e)) return k.LINKIFY_ON_ENTER;
						if (Object(_.r)(d) && l) return k.BREAK_HEADER_ENTITY;
						if (Object(_.s)(d)) {
							if (ia.test(c.getText())) return c.getDepth() > 0 ? k.REDUCE_LIST_INDENT : k.REMOVE_EXTRA_LIST_ITEM
						} else if (d === _.e) {
							const e = n.getBlockBefore(s);
							if (e && e.getType() === _.e && ia.test(e.getText()) && ia.test(c.getText())) return k.RESET_CURRENT_AND_PREVIOUS_BLOCKS
						} else if (d === _.f) {
							const e = n.getBlockBefore(s),
								t = n.getBlockAfter(s);
							if (!c.getText() && e && e.getType() === _.f && !e.getText() && (!t || t.getType() !== _.f)) return k.RESET_CURRENT_AND_PREVIOUS_BLOCKS
						}
					}
				}
				getLinkForAutocomplete() {
					const {
						editorState: e,
						suppressAutocompleteForLink: t
					} = this.state;
					if (!this.isJustAutocompleteSelected && e.getSelection().getHasFocus()) {
						const n = Object(Io.b)(e);
						if (n && n.entityKey !== t) return n
					}
				}
				renderInternalLinkSuggestionDropdown() {
					const {
						isChatPost: e
					} = this.props, t = this.getLinkForAutocomplete();
					return t ? c.a.createElement(Rn.b, {
						aboveParent: e,
						dropdown: !0,
						onSetPositionUpdater: this.setSuggestionDropdownPositionUpdater
					}, t.entityText.startsWith(f.f) && c.a.createElement(zs, {
						onDropdownApi: this.setSuggestionDropdownApi,
						onSelect: this.onInternalSuggestionSelected,
						substring: t.internalName
					}), f.a.test(t.entityText) && c.a.createElement(Xs, {
						onDropdownApi: this.setSuggestionDropdownApi,
						onSelect: this.onInternalSuggestionSelected,
						substring: t.internalName
					})) : null
				}
				render() {
					const {
						className: e,
						userCanUseGifs: t,
						allowMediaUploads: n = !1,
						dataTestId: s,
						destSubreddit: i,
						editorType: a,
						focusableContentRTEClassName: d,
						hideToolbar: l,
						rteState: u,
						isExpanded: p,
						isOverlay: h,
						isCommentBoxDesignEnabled: b,
						onSubmit: f,
						placeholderText: g,
						shouldShowCommentGifsTooltip: E,
						showSubmitButton: C = !1,
						submitButtonClassName: y,
						toolbarPosition: x = "top",
						renderToolbar: v = this.renderToolbar
					} = this.props, {
						editorKey: O
					} = u, {
						containerRef: _,
						editorState: k,
						mediaToInsert: j,
						confirmModalOpen: w
					} = this.state, I = this.props.readOnly || !!j, P = S(k), R = this.isEmpty(), M = v({
						allowMediaUploads: n,
						destSubreddit: i,
						editorKey: O,
						editorState: k,
						isOverlay: !!h,
						onChange: this.toolbarSetState,
						onFilesSelect: this.onFilesSelect,
						trackOnClick: this.props.trackToolbarClick,
						readOnly: I,
						onEmoteButtonClick: this.onToolbarEmoteButtonClick,
						onGifButtonClick: this.onToolbarGifButtonClick,
						onLinkButtonClick: this.onToolbarLinkButtonClick,
						onMarkdownButtonClick: this.onToolbarMarkdownSwitchClick,
						userCanUseGifs: !!t
					}), N = !l && (!b || p);
					return c.a.createElement(da, {
						className: e,
						innerRef: this.setContainerRef
					}, b && c.a.createElement("div", {
						className: na.a.userIcon
					}, c.a.createElement(la, null)), c.a.createElement(ca, {
						className: Object(m.a)(d, {
							[na.a.showSubmitButton]: C,
							[na.a.mExpanded]: p,
							[na.a.mRedesign]: b
						}),
						noBorder: this.props.noBorder,
						isFocused: this.isFocused(),
						ref: this.setFocusableContentRef
					}, N && "top" === x && M, _ && c.a.createElement(po, {
						editorState: k,
						readOnly: I,
						onChange: this.onChange,
						onSetApi: this.setTableToolbarControllerApi,
						rteDomRef: _
					}), c.a.createElement("div", {
						className: Object(m.a)(na.a.editorWrapper, {
							[na.a.hasInitialHeight]: !!this.props.initialHeight,
							[na.a.hasInitialMinHeight]: !!this.props.initialMinHeight,
							[na.a.noBorder]: !!this.props.noBorder
						}),
						style: {
							"--rte-initial-height": this.props.initialHeight ? `${this.props.initialHeight}px` : void 0,
							"--rte-initial-min-height": this.props.initialMinHeight ? `${this.props.initialMinHeight}px` : void 0
						},
						"data-test-id": s,
						onCopyCapture: this.handleOnCopy,
						onCutCapture: this.handleOnCut,
						onPasteCapture: this.handleOnPaste,
						onMouseDown: this.handleOnMouseDown,
						onMouseUp: this.handleOnMouseUp
					}, c.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n                .${Xi.b}[${Xi.d}="${P}-0-0"]::after {\n                  bottom: 0;\n                  color: var(--newCommunityTheme-actionIcon);\n                  content: '${g}';\n                  cursor: text;\n                  left: 0;\n                  position: absolute;\n                  top: 0;\n                }\n              `
						}
					}), c.a.createElement(Or, {
						allowMediaUploads: n && !I,
						onBlockMove: this.onBlockMove,
						onFilesDrop: this.onFilesDrop,
						editorState: k,
						onChange: this.onChange
					}, c.a.createElement(fo.Provider, {
						value: this.entityElementRegistry
					}, c.a.createElement(o.Editor, {
						readOnly: I,
						ref: this.setEditorRef,
						blockRendererFn: this.blockRendererFn,
						blockRenderMap: this.blockRenderMap,
						editorKey: O,
						editorState: k,
						keyBindingFn: this.keyBindingFN,
						handleBeforeInput: this.handleBeforeInput,
						handleKeyCommand: this.handleKeyCommand,
						handlePastedText: this.handlePastedText,
						handleDroppedFiles: this.handleDroppedFiles,
						handleDrop: this.handleDrop,
						onBlur: this.handleBlur,
						onChange: this.onChange,
						onFocus: this.onFocus,
						onTab: this.handleOnTab,
						onUpArrow: this.handleOnUpArrow,
						onDownArrow: this.handleOnDownArrow,
						onEscape: this.handleEscape,
						spellCheck: !0,
						handleReturn: this.handleReturn,
						customStyleMap: Cs()
					})))), N && "bottom" === x && M, c.a.createElement(as, {
						editorState: k,
						entityElementRegistry: this.entityElementRegistry,
						onSetApi: this.setLinksControllerApi,
						onChange: this.onChange
					}), a === Fe.a.Comment && i && c.a.createElement(To, {
						editorState: k,
						onChange: this.onChange,
						onSetApi: this.setEmotesTooltipApi,
						subreddit: i
					}), (E || t) && i && c.a.createElement($o, {
						editorState: k,
						onChange: this.onChange,
						onSetApi: this.setGifTooltipApi,
						subreddit: i,
						userCanUseGifs: !!t
					}), this.renderInternalLinkSuggestionDropdown(), C && c.a.createElement(Ze.d, {
						"aria-label": r.fbt._("submit", null, {
							hk: "12XoZ8"
						}),
						className: Object(m.a)(y, na.a.insetSubmitButton, {
							[na.a.emptyContent]: R,
							[na.a.focusedContent]: this.isFocused()
						}),
						disabled: R,
						onClick: f,
						tabIndex: -1,
						type: "submit"
					}, c.a.createElement($i.a, null))), w && c.a.createElement(T.a, {
						toggleModal: this.toggleConfirmModal,
						onConfirm: this.handleSwitchToMarkdownMode,
						actionText: r.fbt._("Continue", null, {
							hk: "3aoEeD"
						}),
						cancelActionText: r.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						headerText: r.fbt._("Switch to Markdown", null, {
							hk: "3zGkKa"
						}),
						modalText: r.fbt._("Switching to markdown will remove any images, gifs or videos from your post.", null, {
							hk: "3rlwkB"
						}),
						trackClick: () => {}
					}))
				}
			}
			t.a = pa(Object(Ns.b)(e => c.a.createElement(ma, oa({
				key: e.rteState.editorKey
			}, e))))
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/ImagePreview/index.m.less": function(e, t, n) {
			e.exports = {
				Img: "_1gJwMe53cjYITkMu0Ve8j-",
				img: "_1gJwMe53cjYITkMu0Ve8j-",
				Component: "_3VYFd7PKhTJ-0i22YsgFPv",
				component: "_3VYFd7PKhTJ-0i22YsgFPv"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/Placeholder/index.m.less": function(e, t, n) {
			e.exports = {
				Message: "_3cyJHYsdZdz4RWdmrzyYx-",
				message: "_3cyJHYsdZdz4RWdmrzyYx-",
				Component: "_3JSUHg1gLhxUj4PB_Pgw8a",
				component: "_3JSUHg1gLhxUj4PB_Pgw8a"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/StatusBar/index.m.less": function(e, t, n) {
			e.exports = {
				buttonBaseStyles: "_3R1ajPuzbs2MdbXedj3YXU",
				ControlRow: "_1rrSEjTxZcLOZTDNZlj5N4",
				controlRow: "_1rrSEjTxZcLOZTDNZlj5N4",
				ButtonsContainer: "dZ3F6qSOhun6ezUwcnbal",
				buttonsContainer: "dZ3F6qSOhun6ezUwcnbal",
				Button: "_2rIEdliEXr7qNb-COL-zuO",
				button: "_2rIEdliEXr7qNb-COL-zuO",
				ErrButton: "_3CUr1530H3uD-ts9tKd9RA",
				errButton: "_3CUr1530H3uD-ts9tKd9RA",
				Status: "jXuqxr-x0kyU3BSfugjwM",
				status: "jXuqxr-x0kyU3BSfugjwM",
				hasError: "_4XwI6tILia1pR9HTda4wv",
				ProgressBar: "_1NvtB5J5UfhiHd0ix7TZgb",
				progressBar: "_1NvtB5J5UfhiHd0ix7TZgb",
				ProgressBarInner: "_29o2WRRYmrLU47NaFzQzxq",
				progressBarInner: "_29o2WRRYmrLU47NaFzQzxq",
				ErrorLine: "_3M-thbkBHHvsWjDt8edbhz",
				errorLine: "_3M-thbkBHHvsWjDt8edbhz",
				Component: "_1CqupI5I-zzAInIdLwphQg",
				component: "_1CqupI5I-zzAInIdLwphQg"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/VideoPreview/index.m.less": function(e, t, n) {
			e.exports = {
				VideoPlayer: "_3gstD1_YUjNWZqjtwdgU9t",
				videoPlayer: "_3gstD1_YUjNWZqjtwdgU9t",
				PosterImg: "_2C2yx7Rf_BKPOyll-aq_hI",
				posterImg: "_2C2yx7Rf_BKPOyll-aq_hI",
				Poster: "_1UCJLqzcYXck8Ahv0PlvVw",
				poster: "_1UCJLqzcYXck8Ahv0PlvVw",
				Component: "wSihDBKVJH6iP2jdDjRQ6",
				component: "wSihDBKVJH6iP2jdDjRQ6",
				playButton: "il4HPAfKcVtq-WQY-if85"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/index.m.less": function(e, t, n) {
			e.exports = {
				statusBar: "_33CSkXq7gXeXCM2zSal9BN",
				container: "_1FMEfWD94pPZ_HdEN_e7Xy",
				isCompact: "_3-T8BPflZuKw_F2VRPDbcX",
				isUploaded: "_3Lj2c902Oeb7yL_jYu9v5L",
				isSelected: "Eaps2a9y_jwhKHth8v14G",
				imagePreview: "_2nlrFrYbO0bIKFeZ3HMbn_",
				placeholder: "_1-LSy7nvfNGWVhRWwwQu6A",
				videoPreview: "_2MumquPHY8gruoy6114twC",
				alignCenter: "_3U9f0TNBM1K2bggm3KMHTk"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/SelectionHook/index.m.less": function(e, t, n) {
			e.exports = {
				HiddenDiv: "_13RYjdyxMuKrkV_EtlOjhg",
				hiddenDiv: "_13RYjdyxMuKrkV_EtlOjhg"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/Toolbar/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3hDtN0e5U4EpahGe25ye-b",
				alignCenter: "Vh7FGvkGyl5SeyJP4J1GG",
				content: "_3wXzBVn-uBvRcixZwQWkNX",
				FormatterButton: "_6DRydZXlG3Ko7_4xxYUhW",
				formatterButton: "_6DRydZXlG3Ko7_4xxYUhW",
				ToolbarContent: "_3qUkCQkbZvTB6uBQEQQfSZ",
				toolbarContent: "_3qUkCQkbZvTB6uBQEQQfSZ"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/index.m.less": function(e, t, n) {
			e.exports = {
				MediaContainer: "_12ZUhulrgf1BAChnRZHmZt",
				mediaContainer: "_12ZUhulrgf1BAChnRZHmZt",
				Container: "DK9d46mm9FgC8mFWPGlG_",
				container: "DK9d46mm9FgC8mFWPGlG_"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaCaption/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2eZK2IABgFqGZLMYPxwoNY"
			}
		},
		"./src/reddit/components/RichTextEditor/media/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "q", (function() {
				return g
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "r", (function() {
				return C
			})), n.d(t, "l", (function() {
				return y
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "n", (function() {
				return v
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "m", (function() {
				return w
			})), n.d(t, "g", (function() {
				return I
			})), n.d(t, "j", (function() {
				return P
			})), n.d(t, "i", (function() {
				return R
			})), n.d(t, "o", (function() {
				return M
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "f", (function() {
				return L
			}));
			var o, r = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
				i = n("./node_modules/lodash/flatten.js"),
				a = n.n(i),
				c = n("./node_modules/lodash/last.js"),
				d = n.n(c),
				l = n("./src/reddit/helpers/media/index.ts"),
				u = n("./src/reddit/helpers/richTextEditor/index.ts"),
				p = n("./src/reddit/helpers/richTextJson/index.ts"),
				m = n("./src/reddit/models/Upload/index.ts"),
				h = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				b = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				f = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			! function(e) {
				e[e.Image = 0] = "Image", e[e.AnimatedImage = 1] = "AnimatedImage", e[e.Video = 2] = "Video"
			}(o || (o = {}));
			const g = e => e !== u.a.Comment,
				E = e => {
					if (!Object(f.o)(e.getType())) return;
					const t = e.getData(),
						n = t.get("mediaAsset"),
						o = t.get("uploadInfo");
					if (!n && !o) return;
					const r = t.get("thumbnail");
					return {
						makeGif: t.get("makeGif"),
						thumbnail: r,
						uploadInfo: o,
						mediaAsset: n
					}
				},
				C = (e, t, n) => {
					let o = e.getCurrentContent();
					const i = o.getBlockForKey(t),
						a = E(i),
						c = a && a.uploadInfo;
					if (!c) throw new Error("Block must contain `uploadInfo` data");
					if (n.makeGif === a.makeGif && n.thumbnail === a.thumbnail) return e;
					const d = Object(s.Map)(n),
						l = o.getBlockMap().toKeyedSeq().filter(e => {
							const t = E(e);
							return !!t && !!t.uploadInfo && t.uploadInfo.uploadKey === c.uploadKey
						}).map(e => e.mergeIn(["data"], d));
					return o = (o = o.mergeIn(["blockMap"], l)).merge({
						selectionAfter: e.getSelection()
					}), r.EditorState.push(e, o, h.b)
				},
				y = (e, t, n, o) => {
					let i = e.getCurrentContent();
					const c = a()(t.map(e => {
						const t = Object(l.f)(e.metadata.mimetype),
							n = (e => {
								if (e && e.metadata.videoFirstFrameUrl) {
									return {
										url: e.metadata.videoFirstFrameUrl,
										time: 0
									}
								}
							})(e);
						return [new r.ContentBlock({
							key: Object(r.genKey)(),
							type: f.a,
							data: Object(s.Map)({
								uploadInfo: {
									mediaType: t,
									uploadKey: e.key
								},
								thumbnail: n
							})
						}), new r.ContentBlock({
							key: Object(r.genKey)(),
							type: f.j
						})]
					}));
					i = Object(b.f)(i, n, c, o);
					const u = r.EditorState.push(e, i, h.e),
						p = d()(c);
					return r.EditorState.forceSelection(u, Object(b.b)(p, !0))
				},
				x = (e, t, n, i, a, c, d, l) => {
					const u = new r.ContentBlock({
							key: Object(r.genKey)(),
							type: f.a,
							data: Object(s.Map)({
								mediaAsset: {
									type: o.AnimatedImage,
									assetId: Object(p.b)(t, i),
									imageUrl: n,
									width: a,
									height: c
								}
							})
						}),
						m = Object(b.f)(e.getCurrentContent(), d, [u], l);
					let g = r.EditorState.push(e, m, h.e);
					g = r.EditorState.forceSelection(g, Object(b.b)(u, !0));
					const E = u.getKey();
					return g.getCurrentContent().getBlockAfter(E) || (g = N(g, E)), g
				};

			function v(e, t) {
				return e.isCollapsed() && e.getStartKey() === t && 0 === e.getStartOffset() && 0 === e.getEndOffset()
			}

			function O(e, t) {
				const n = e.getCurrentContent().getBlockAfter(t);
				return r.EditorState.forceSelection(e, Object(b.b)(n, !0))
			}
			const _ = (e, t) => {
					const n = e.getBlockAfter(t);
					return e = Object(b.i)(e, t), n && Object(f.u)(n.getType()) && (e = Object(b.i)(e, n.getKey())), e
				},
				k = (e, t, n = !0) => {
					let o = e.getCurrentContent();
					o = _(o, t);
					let s = n ? r.EditorState.push(e, o, h.f) : r.EditorState.set(e, {
						currentContent: o
					});
					return s = r.EditorState.forceSelection(s, o.getSelectionAfter())
				},
				S = e => {
					let t = e.getCurrentContent();
					T(t).forEach(e => {
						t = _(t, e.getKey())
					});
					const n = r.EditorState.push(e, t, h.f);
					return r.EditorState.forceSelection(n, t.getSelectionAfter())
				},
				j = e => {
					let t = e.getCurrentContent();
					const n = e.getSelection();
					t = r.Modifier.removeRange(t, n, "forward");
					let o = r.EditorState.push(e, t, h.f);
					return o = r.EditorState.forceSelection(o, t.getSelectionAfter())
				},
				T = e => e.getBlockMap().toSeq().filter(e => !!e && !!E(e)),
				w = (e, t) => e.getBlockMap().toSeq().filter(e => {
					const n = E(e),
						o = n && n.uploadInfo && n.uploadInfo.uploadKey;
					return !(!o || t[o] && t[o].url)
				}).isEmpty(),
				I = e => {
					const t = T(e),
						n = {
							gifvideo: 0,
							image: 0,
							video: 0,
							total: 0
						};
					return t.forEach(e => {
						const t = E(e);
						let r;
						r = t.makeGif ? "gifvideo" : t.uploadInfo && "video" === t.uploadInfo.mediaType || t.mediaAsset && t.mediaAsset.type === o.Video ? "video" : "image", n[r]++, n.total++
					}), n
				},
				P = e => !T(e).isEmpty(),
				R = (e, t) => {
					const n = T(e).map(e => {
						const n = E(e),
							{
								uploadInfo: o,
								thumbnail: r
							} = n;
						if (!o || !r) return;
						const s = D(n),
							i = t[s];
						return i && i.url ? void 0 : {
							...r,
							uploadKey: s
						}
					}).filter(Boolean).toArray();
					return n.length ? n : void 0
				},
				M = (e, t, n, o) => {
					let s = e.getCurrentContent();
					const i = s.getBlockForKey(t),
						a = s.getBlockAfter(t),
						c = [i];
					if (a && Object(f.u)(a.getType()) && c.push(a), c.find(e => e.getKey() === n)) return;
					const l = c.reduce((e, t) => e.remove(t.getKey()), s.getBlockMap());
					s = s.set("blockMap", l), s = Object(b.f)(s, n, c, o);
					const u = r.EditorState.push(e, s, h.e);
					return r.EditorState.forceSelection(u, Object(b.b)(d()(c), !0))
				},
				N = (e, t, n = b.a.after) => {
					const o = Object(b.h)(),
						s = Object(b.f)(e.getCurrentContent(), t, [o], n),
						i = r.EditorState.push(e, s, h.e);
					return r.EditorState.forceSelection(i, r.SelectionState.createEmpty(o.getKey()))
				},
				D = e => e.thumbnail && e.uploadInfo ? `${e.uploadInfo.uploadKey}-thumbnail-${e.thumbnail.time}` : "",
				L = (e, t) => {
					let n = "",
						o = "";
					if (e.uploadInfo) {
						const {
							uploadKey: r
						} = e.uploadInfo, s = t[r];
						s && s.url && (n = Object(m.b)(s.url));
						const i = t[D(e)];
						i && i.url && (o = Object(m.b)(i.url))
					}
					return {
						assetId: n,
						thumbnailAssetId: o
					}
				}
		},
		"./src/reddit/components/RichTextEditor/spoiler/decorator.m.less": function(e, t, n) {
			e.exports = {
				spoiler: "_1AlhnBqYYVTQbTr33YViyK"
			}
		},
		"./src/reddit/components/RichTextEditor/spoiler/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return i
			}));
			var o = n("./src/lib/forEachGroup/index.ts"),
				r = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const s = e => e.getStyle().has(r.k.SPOILER);

			function i(e, t, n) {
				const r = e.getCharacterList();
				Object(o.a)(r, {
					keyFn: s
				}, (e, n, o, r) => {
					n && t(o, r)
				})
			}
		},
		"./src/reddit/components/RichTextEditor/table/Renderer/index.m.less": function(e, t, n) {
			e.exports = {
				Cell: "_1J5sneEp0XXo0pFsMN7Kjs",
				cell: "_1J5sneEp0XXo0pFsMN7Kjs",
				Row: "_2Hd-Rc7z9gTKIz6JUGhbcl",
				row: "_2Hd-Rc7z9gTKIz6JUGhbcl",
				Table: "_9QFGu47IyMX1ID1xQid-8",
				table: "_9QFGu47IyMX1ID1xQid-8",
				isFakeSelectionActive: "_1QXaG0_iXh-LFDkah9HqP3"
			}
		},
		"./src/reddit/components/RichTextEditor/table/Toolbar/index.m.less": function(e, t, n) {
			e.exports = {
				formatterButton: "_1dNavKEU0lSO4mo9fYWTPm",
				ToolbarContent: "_1yPmb5QUbyAQX1wIs4FYQI",
				toolbarContent: "_1yPmb5QUbyAQX1wIs4FYQI",
				tooltip: "_3fnB5glctifL-mkYhH6aA1"
			}
		},
		"./src/reddit/components/RichTextEditor/table/ToolbarController/index.m.less": function(e, t, n) {
			e.exports = {
				ActionButton: "_2g2bsszGVtKe_XRKcRrpQi",
				actionButton: "_2g2bsszGVtKe_XRKcRrpQi",
				isPressed: "_2WwwYG59S_TJRq7FSdTVKK",
				ToolbarWrapper: "_3rXrpMuvoGNBbLE7TQQCB9",
				toolbarWrapper: "_3rXrpMuvoGNBbLE7TQQCB9"
			}
		},
		"./src/reddit/components/RichTextEditor/table/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "m", (function() {
				return u
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "o", (function() {
				return v
			})), n.d(t, "d", (function() {
				return O
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./node_modules/immutable/dist/immutable.js"),
				s = n("./src/reddit/models/RichTextJson/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/helpers/sliceContiguousBlocks.ts"),
				a = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const c = {
					[s.e]: "left",
					[s.f]: "right",
					[s.d]: "center"
				},
				d = e => {
					const t = e.getData();
					return {
						colIndex: t.get("colIndex"),
						rowIndex: t.get("rowIndex"),
						colCount: t.get("colCount"),
						alignment: t.get("alignment")
					}
				},
				l = ["data"],
				u = (e, t) => e.mergeIn(l, t),
				p = (e, t, n) => e.merge({
					text: e.getText().slice(t, n),
					characterList: e.getCharacterList().slice(t, n)
				}),
				m = (e, t, n = "", r) => {
					const s = t.map(e => e.getText()).join(n),
						i = n ? r || o.CharacterMetadata.create() : null,
						a = [];
					return t.forEach(e => {
						a.push(...e.getCharacterList().toArray()), i && t.length > 1 && a.push(i)
					}), e.merge({
						text: s,
						characterList: a
					})
				},
				h = (e, t) => {
					const n = [];
					for (let s = 0; s < t; s++)
						for (let t = 0; t < e; t++) n.push(new o.ContentBlock({
							key: Object(o.genKey)(),
							type: a.l,
							data: Object(r.Map)({
								colCount: e,
								colIndex: t,
								rowIndex: s
							})
						}));
					return n
				},
				b = (e, t) => ({
					minCol: Math.min(e.colIndex, t.colIndex),
					minRow: Math.min(e.rowIndex, t.rowIndex),
					maxCol: Math.max(e.colIndex, t.colIndex),
					maxRow: Math.max(e.rowIndex, t.rowIndex)
				}),
				f = (e, t) => {
					const {
						minCol: n,
						minRow: o,
						maxCol: r,
						maxRow: s
					} = b(e, t);
					return (e, t) => o <= e && e <= s && n <= t && t <= r
				},
				g = (e, t) => e.rowIndex < t.rowIndex ? -1 : e.rowIndex > t.rowIndex ? 1 : e.colIndex - t.colIndex,
				E = (e, t) => e === t || !(!e || !t) && 0 === g(e, t),
				C = (e, t) => g(d(e), d(t)),
				y = e => {
					if (Object(a.v)(e.getType())) {
						return 0 === d(e).rowIndex
					}
					return !1
				},
				x = (e, t, n) => {
					const o = (t, n) => {
						if (t) {
							const o = Object(i.a)(e, t);
							return o && n && -1 !== o.blocks.indexOf(n) ? [o, o] : [o, n ? Object(i.a)(e, n) : null]
						}
						return n ? o(n, null).reverse() : [null, null]
					};
					return o(Object(a.v)(t.getType()) ? t : null, Object(a.v)(n.getType()) ? n : null)
				},
				v = (e, t, n, o = !1) => {
					const r = {
						isBackward: o
					};
					return t && (r.anchorKey = t.getKey(), r.anchorOffset = o ? t.getLength() : 0), n && (r.focusKey = n.getKey(), r.focusOffset = o ? 0 : n.getLength()), e.merge(r)
				},
				O = e => {
					if (!e.length) return [];
					const t = e[0].length;
					return e.map((e, n) => e.map((e, o) => u(e, {
						rowIndex: n,
						colIndex: o,
						colCount: t
					})))
				}
		},
		"./src/reddit/components/ScheduledPost/PostSchedulePickerModal/loader.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "reddit-components-ScheduledPost-PostSchedulePickerModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-ScheduledPost-PostSchedulePickerModal").then(n.bind(null, "./src/reddit/components/ScheduledPost/PostSchedulePickerModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ScheduledPost/PostSchedulePickerModal/index.tsx"
				}
			})
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
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/lessComponent.tsx"),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				l = n("./node_modules/reselect/es/index.js"),
				u = n("./src/reddit/components/SidebarFooter/index.m.less"),
				p = n.n(u);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js"), h = s.a.a("Link", p.a), b = Object(l.c)({
				isNavbarLikeMwebEnabled: d.a
			}), f = Object(i.b)(b), g = Object(c.t)({
				isFrontpage: c.y
			});
			t.a = g(f(e => e.isNavbarLikeMwebEnabled ? e.isFrontpage ? r.a.createElement(a.a, {
				className: p.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, r.a.createElement("div", {
				className: p.a.LinkContainer
			}, r.a.createElement("div", {
				className: p.a.Column
			}, r.a.createElement(h, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, m._("User Agreement", null, {
				hk: "2RA6JL"
			})), r.a.createElement(h, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, m._("Privacy policy", null, {
				hk: "10K04G"
			}))), r.a.createElement("div", {
				className: p.a.Column
			}, r.a.createElement(h, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, m._("Content policy", null, {
				hk: "1DyxZS"
			})), r.a.createElement(h, {
				href: "https://www.redditinc.com/policies/moderator-guidelines"
			}, m._("Moderator Guidelines", null, {
				hk: "2O9otm"
			})))), r.a.createElement("div", {
				className: p.a.Copyright
			}, m._("© {year} Reddit, Inc. All rights reserved.", [m._param("year", (new Date).getFullYear().toString())], {
				hk: "sR7zP"
			}))) : null : r.a.createElement(a.a, {
				className: p.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, r.a.createElement("div", {
				className: p.a.LinkContainer
			}, r.a.createElement("div", {
				className: p.a.Column
			}, r.a.createElement(h, {
				href: "https://www.reddithelp.com"
			}, m._("help", null, {
				hk: "4lyYaD"
			})), r.a.createElement(h, {
				href: "https://www.reddit.com/mobile/download"
			}, m._("Reddit App", null, {
				hk: "1ehrjP"
			})), r.a.createElement(h, {
				href: "https://www.reddit.com/coins"
			}, m._("Reddit coins", null, {
				hk: "32iMaN"
			})), r.a.createElement(h, {
				href: "https://www.reddit.com/premium"
			}, m._("Reddit premium", null, {
				hk: "RuO3A"
			})), r.a.createElement(h, {
				href: "https://redditgifts.com/"
			}, m._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && r.a.createElement(r.a.Fragment, null, r.a.createElement(h, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, m._("Communities", null, {
				hk: "3CJu37"
			})), r.a.createElement(h, {
				href: "https://www.reddit.com/posts/2020/"
			}, m._("Rereddit", null, {
				hk: "1z3k7C"
			})), r.a.createElement(h, {
				href: "https://www.reddit.com/topics/a-1/"
			}, m._("Topics", null, {
				hk: "349RFt"
			})))), r.a.createElement("div", {
				className: p.a.Column
			}, r.a.createElement(h, {
				href: "https://about.reddit.com"
			}, m._("about", null, {
				hk: "1sqJKs"
			})), r.a.createElement(h, {
				href: "https://about.reddit.com/careers/"
			}, m._("careers", null, {
				hk: "26ABvc"
			})), r.a.createElement(h, {
				href: "https://about.reddit.com/press/"
			}, m._("press", null, {
				hk: "2Qmgdz"
			})), r.a.createElement(h, {
				href: "https://www.redditinc.com/advertising"
			}, m._("advertise", null, {
				hk: "Mt40U"
			})), r.a.createElement(h, {
				href: "http://www.redditblog.com/"
			}, m._("blog", null, {
				hk: "46IQJw"
			})), r.a.createElement(h, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, m._("Terms", null, {
				hk: "4qRzfE"
			})), r.a.createElement(h, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, m._("Content policy", null, {
				hk: "1DyxZS"
			})), r.a.createElement(h, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, m._("Privacy policy", null, {
				hk: "10K04G"
			})), r.a.createElement(h, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, m._("Mod policy", null, {
				hk: "2gYc2T"
			})))), r.a.createElement("div", {
				className: p.a.Copyright
			}, m._("Reddit Inc © {year} . All rights reserved", [m._param("year", (new Date).getFullYear().toString())], {
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
			var o = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				r = n.n(o),
				s = n("./src/lib/lessComponent.tsx");
			t.a = s.a.div("Component", r.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/navs.m.less": function(e, t, n) {
			e.exports = {
				FormNavElement: "KLpkXNw-FZfqtRK9U_8HB",
				formNavElement: "KLpkXNw-FZfqtRK9U_8HB",
				disabled: "_2omjYUqCweNidaShU2H5EC",
				DragCard: "ygS6b189jD1GHwzotinJB",
				dragCard: "ygS6b189jD1GHwzotinJB",
				isOverAndCanDrop: "_3_GRCa3UIhqQ68fvB00PLZ",
				isDragging: "_2yg01oNjKP8Gcb4HPjf58k"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/StructuredStyles/StyledComponents/navs.m.less"),
				a = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const d = ({
					disabled: e,
					...t
				}) => r.a.createElement("div", c({}, t, {
					className: Object(s.a)(a.a.FormNavElement, {
						[a.a.disabled]: e
					})
				}), t.children),
				l = ({
					canDrop: e,
					className: t,
					isDragging: n,
					isOver: o,
					disabled: i,
					...d
				}) => r.a.createElement("div", c({}, d, {
					className: Object(s.a)(a.a.DragCard, {
						[a.a.disabled]: i,
						[a.a.isDraffing]: n,
						[a.a.isOverAndCanDrop]: o && e
					}, t)
				}))
		},
		"./src/reddit/components/ThumbnailSelector/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "uqOt5KqJAqw5pe-WNxa0a",
				component: "uqOt5KqJAqw5pe-WNxa0a",
				TitleRow: "HEiFtUR3s93dQ2jUWWnxr",
				titleRow: "HEiFtUR3s93dQ2jUWWnxr",
				Close: "_3RlS_q06rJ_8dy_UNp3Ev7",
				close: "_3RlS_q06rJ_8dy_UNp3Ev7",
				CloseWrapper: "_3lFQIq1yN1kLxjZb5AvHjL",
				closeWrapper: "_3lFQIq1yN1kLxjZb5AvHjL",
				ThumbnailsContainer: "_2sw7c1Sfzp0uz-RIcglCo",
				thumbnailsContainer: "_2sw7c1Sfzp0uz-RIcglCo",
				Image: "_2H32szY9NZ1aKr6j4Ced7u",
				image: "_2H32szY9NZ1aKr6j4Ced7u",
				thumbnail: "_2Ks8P6YD1-8_Ju3IrYpPJf",
				isSelected: "_3oA67AGI49fKcqDP970t4U",
				ButtonRow: "_2Bo7ys2El8ABMVNqYUdrA5",
				buttonRow: "_2Bo7ys2El8ABMVNqYUdrA5",
				CancelButton: "mBq3crGX9-xOOg-b-1V85",
				cancelButton: "mBq3crGX9-xOOg-b-1V85"
			}
		},
		"./src/reddit/components/ThumbnailSelector/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/debounce.js"),
				s = n.n(r),
				i = n("./node_modules/lodash/range.js"),
				a = n.n(i),
				c = n("./node_modules/react/index.js"),
				d = n.n(c),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				p = n("./src/higherOrderComponents/asModal/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/helpers/media/index.ts"),
				b = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				f = n("./src/reddit/icons/svgs/Close/index.tsx"),
				g = n("./src/reddit/layout/row/Inline/index.tsx"),
				E = n("./src/reddit/components/ThumbnailSelector/index.m.less"),
				C = n.n(E);
			const y = 10,
				x = Object(p.a)(u.a.div("Component", C.a)),
				v = u.a.wrapped(g.a, "TitleRow", C.a),
				O = u.a.wrapped(f.a, "Close", C.a),
				_ = u.a.div("CloseWrapper", C.a),
				k = u.a.div("ThumbnailsContainer", C.a),
				S = u.a.img("Image", C.a),
				j = e => d.a.createElement("div", {
					className: Object(l.a)(C.a.thumbnail, Object(b.a)({
						isLoading: e.isLoading
					}), {
						[C.a.isSelected]: e.isSelected
					}),
					onClick: e.onClick,
					ref: e.elementRef
				}, e.thumbnail.url && d.a.createElement(S, {
					src: e.thumbnail.url
				})),
				T = u.a.wrapped(g.a, "ButtonRow", C.a),
				w = m.i,
				I = u.a.wrapped(m.l, "CancelButton", C.a),
				P = (e, t) => {
					if (1 === e) return [0];
					const n = a()(0, t, t / (e - 1));
					return n.push(t), n.map(e => +e.toFixed(2))
				};
			class R extends d.a.Component {
				constructor(e) {
					super(e), this.isThumbnailsAreGenerating = !1, this.setSelectedElementRef = e => this.selectedElement = e, this.setThumbnails = s()(e => this.setState({
						thumbnails: e
					}), 100), this.scrollIntoView = () => {
						this.selectedElement && this.selectedElement.scrollIntoView({})
					}, this.setSelected = e => {
						this.setState({
							selectedIndex: e
						})
					}, this.onSelectButton = () => {
						const {
							selectedIndex: e
						} = this.state, t = this.state.thumbnails[e];
						this.props.onSelect({
							time: t.time,
							url: t.url
						})
					};
					const {
						thumbnailsCount: t = y,
						selected: n,
						videoDuration: o
					} = this.props, r = P(t, o).map(e => ({
						time: e,
						url: n && n.time === e ? n.url : void 0
					})), i = n ? r.findIndex(e => n.time === e.time) : -1;
					this.state = {
						thumbnails: r,
						selectedIndex: i
					}
				}
				componentDidMount() {
					this.scrollIntoView(), this.props.isOpen && this.generateVideoThumbnails()
				}
				componentDidUpdate(e) {
					this.props.isOpen && !e.isOpen && (this.scrollIntoView(), this.generateVideoThumbnails())
				}
				async generateVideoThumbnails() {
					const {
						thumbnails: e
					} = this.state;
					if (this.isThumbnailsAreGenerating || !e.find(e => !e.url)) return;
					this.isThumbnailsAreGenerating = !0;
					const t = document.createElement("video"),
						n = document.createElement("canvas");
					await Object(h.o)(t, this.props.videoSource);
					let o = 0;
					t.currentTime = e[o].time, await Object(h.d)(t, n, t => (e[o].url = t.dataUrl, o++, this.setThumbnails(e), o < e.length ? e[o].time : null)), this.setState({
						thumbnails: e
					}), this.isThumbnailsAreGenerating = !1
				}
				render() {
					if (!this.props.isOpen) return null;
					const {
						selectedIndex: e,
						thumbnails: t
					} = this.state;
					return d.a.createElement(x, {
						withOverlay: !0
					}, d.a.createElement(v, null, o.fbt._("Choose thumbnail", null, {
						hk: "XlI0H"
					}), d.a.createElement(_, {
						onClick: this.props.onToggleModal
					}, d.a.createElement(O, null))), d.a.createElement(k, null, t.map((t, n) => d.a.createElement(j, {
						key: n,
						elementRef: n === e ? this.setSelectedElementRef : void 0,
						isLoading: !t.url,
						onClick: () => this.setSelected(n),
						isSelected: n === e,
						thumbnail: t
					}))), d.a.createElement(T, null, d.a.createElement(I, {
						onClick: this.props.onToggleModal
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), d.a.createElement(w, {
						onClick: this.onSelectButton
					}, o.fbt._("Select", null, {
						hk: "3s53WD"
					}))))
				}
			}
			t.a = R
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				d = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				u = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				p = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				m = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				h = n.n(m);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const f = Object(a.c)({
					currentUser: d.j,
					isNightMode: d.W,
					isPresenceUserPrefEnabled: d.ib,
					shouldHideNSFW: d.C
				}),
				g = Object(i.b)(f);
			t.a = g(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: r,
					wrapperClassName: i,
					...a
				} = e, d = Object(c.a)(null == t ? void 0 : t.accountIcon);
				return s.a.createElement("div", {
					className: Object(o.a)(h.a.currentUserIconWrapper, i)
				}, d ? s.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : s.a.createElement(p.b, b({}, a, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && s.a.createElement(l.a, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownRow: "JoWBeMWu_l8J_Hn6Udz_j",
				dropdownRow: "JoWBeMWu_l8J_Hn6Udz_j"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/lodash/noop.js"),
				r = n.n(o),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/post.ts"),
				p = n("./src/reddit/actions/postCollection/index.ts"),
				m = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				h = n("./src/reddit/components/OverflowMenu/index.tsx"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/controls/Dropdown/Row.tsx"),
				g = n("./src/reddit/selectors/activeModalId.ts"),
				E = n("./src/reddit/selectors/postCollection.ts"),
				C = n("./node_modules/reselect/es/index.js"),
				y = n("./src/reddit/helpers/trackers/postCollection.ts"),
				x = n("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less"),
				v = n.n(x),
				O = n("./node_modules/fbt/lib/FbtPublic.js");
			const _ = d.a.wrapped(f.b, "DropdownRow", v.a);
			let k;
			const S = Object(g.b)("DELETE_COLLECTION_CONFM_MODAL_ID"),
				j = Object(g.b)("EDIT_POST_COLLECTION_MODAL_ID"),
				T = Object(C.c)({
					createPostUrl: E.d,
					isDeleteConfirmModalOpen: S,
					isEditCollectionModalOpen: j,
					shouldShowCollectionEditOptions: E.s
				}),
				w = Object(a.b)(T, (e, t) => ({
					copyLink: () => e(Object(u.B)(t.permalink)),
					onCreatePost: n => {
						t.shouldShowCreatePost && e(Object(c.b)(n))
					},
					onRemoveCollection: () => e(Object(p.c)(t.collectionId, t.isSubmitPage)),
					onToggleDeleteConfirmModal: () => e(l.i("DELETE_COLLECTION_CONFM_MODAL_ID")),
					onToggleEditModal: async () => {
						k || (k = await Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("editCollectionModal")]).then(n.bind(null, "./src/reddit/components/EditCollectionModal/index.tsx")).then(e => e.EditCollectionModal)), e(l.i("EDIT_POST_COLLECTION_MODAL_ID"))
					}
				}));
			t.a = w(Object(b.c)(e => {
				const {
					className: t,
					collectionId: n,
					copyLink: o,
					createPostUrl: s,
					isDeleteConfirmModalOpen: a,
					isEditCollectionModalOpen: c,
					onCreatePost: d,
					onRemoveCollection: l,
					onToggleDeleteConfirmModal: u,
					onToggleEditModal: p,
					shouldShowCollectionEditOptions: b,
					shouldShowCreatePost: f,
					targetPosition: g,
					tooltipPosition: E,
					sendEvent: C
				} = e;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement(h.b, {
					className: t,
					dropdownId: `collection-menu-${n}-${f?1:2}`,
					onClick: r.a,
					targetPosition: g,
					tooltipPosition: E
				}, i.a.createElement(_, {
					onClick: o,
					displayText: O.fbt._("Copy collection link", null, {
						hk: "3Rfodz"
					})
				}), b && i.a.createElement(i.a.Fragment, null, i.a.createElement(_, {
					onClick: () => {
						C(Object(y.l)(n)), p()
					},
					displayText: O.fbt._("Edit", null, {
						hk: "1nftDt"
					})
				}), i.a.createElement(_, {
					onClick: () => {
						C(Object(y.k)(n)), u()
					},
					displayText: O.fbt._("Delete collection", null, {
						hk: "2FyIJB"
					})
				}), f && i.a.createElement(_, {
					onClick: () => {
						d(s)
					},
					displayText: O.fbt._("Create post", null, {
						hk: "1v2jHl"
					})
				}))), c && k && i.a.createElement(k, {
					collectionId: n,
					onClose: p,
					onEditSuccess: p
				}), a && i.a.createElement(m.a, {
					actionText: O.fbt._("Yes, Delete", null, {
						hk: "15Espn"
					}),
					headerText: O.fbt._("Delete Collection", null, {
						hk: "1QJ3as"
					}),
					modalText: O.fbt._("Are you sure you want to delete this collection? The posts within the collection won't be deleted.", null, {
						hk: "36jKp5"
					}),
					onConfirm: l,
					toggleModal: u,
					trackClick: r.a
				}))
			}))
		},
		"./src/reddit/components/Widgets/PostCollection/PendingItem/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_135f7-HhEMvekPzYxVBaFE",
				activeItemIndicator: "_31zbCRopTPo2NGtlgVsrBX",
				metaLine: "_1OrlyQwYIehGSk4bhP_l2R",
				title: "_2jvQA1RLlcCLU44q6eB3g0"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownRow: "_3V8ByF4idIiROiWQ9i468R",
				dropdownRow: "_3V8ByF4idIiROiWQ9i468R"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/noop.js"),
				s = n.n(r),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/lib/opener/index.ts"),
				l = n("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				u = n("./src/reddit/components/OverflowMenu/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/Row.tsx"),
				m = n("./src/reddit/helpers/path/index.ts"),
				h = n("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.m.less"),
				b = n.n(h);
			const f = c.a.wrapped(p.b, "DropdownRow", b.a);
			t.a = e => {
				const {
					isFutureEvent: t,
					onAddEventStartTime: n,
					onEditStartTime: r,
					onStartEventNow: i,
					postPermalink: c,
					shouldShowAddEventStartTime: p,
					targetPosition: h,
					tooltipPosition: b
				} = e;
				return a.a.createElement(u.b, {
					className: e.className,
					dropdownId: e.dropdownId,
					onClick: s.a,
					targetPosition: h,
					tooltipPosition: b
				}, p && n && a.a.createElement(f, {
					onClick: n,
					displayText: o.fbt._("Add event start time", null, {
						hk: "4xWttR"
					})
				}), t && i && a.a.createElement(f, {
					onClick: i,
					displayText: o.fbt._("Start event now", null, {
						hk: "2TTNfJ"
					})
				}), t && r && a.a.createElement(f, {
					onClick: r,
					displayText: o.fbt._("Edit start time", null, {
						hk: "44XUxC"
					})
				}), a.a.createElement(f, {
					onClick: e.onRemoveClick,
					displayText: o.fbt._("Remove from collection", null, {
						hk: "qsiiu"
					})
				}), c && a.a.createElement(l.a, {
					target: d.c.BLANK,
					rel: d.b,
					isOverlay: !1,
					to: Object(m.b)(c)
				}, a.a.createElement(f, {
					displayText: o.fbt._("View post", null, {
						hk: "1PtvnG"
					})
				})))
			}
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/Placeholder.m.less": function(e, t, n) {
			e.exports = {
				Container: "I9mI9NePKM1BEsmfZR-6H",
				container: "I9mI9NePKM1BEsmfZR-6H",
				Content: "_6d8yyfLZcJ1OXLzEXoApB",
				content: "_6d8yyfLZcJ1OXLzEXoApB",
				Title: "_1efKScSk4JSYvERdEecZnZ",
				title: "_1efKScSk4JSYvERdEecZnZ",
				Secondary: "_3fCsv_r4CtfCTdAzBRaR9N",
				secondary: "_3fCsv_r4CtfCTdAzBRaR9N"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/index.m.less": function(e, t, n) {
			e.exports = {
				container: "ceAYEjQdznT14GrQQ52QV",
				content: "_36S4oraLw5gf--rC9-aWZs",
				overflowMenu: "MiZ0gbh9xe5Yiwt3RQf2o",
				metaLine: "_2JVAK9jCDOKkFXe1XS6gwH",
				title: "_2U-RjfXG1sY-NtByFOS-uC"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3_XzG2WCa3EYhqzE_vUcMN",
				topRow: "r_Dz4suUXbQkBdwR-eQ77",
				collectionDescription: "_3K3iJQYRdF3d2n1WlPxkpr",
				listContainer: "_2K8wDNk-kaP5gX-QEAXuMc",
				listWrapper: "VYYQfc9_vtbBaR47zbXdB",
				menuButton: "_1BX9a5jz4LWzuQohy4Cvz4"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.tsx"),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/selectors/postCreations.ts"),
				l = n("./src/reddit/components/Widgets/PostCollection/PendingItem/index.m.less"),
				u = n.n(l);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = Object(c.c)({
				title: d.pb
			});
			var h = Object(a.b)(m)(e => {
					const {
						title: t
					} = e;
					return r.a.createElement("div", {
						className: u.a.container
					}, r.a.createElement("div", {
						className: u.a.activeItemIndicator
					}), t && r.a.createElement("h2", {
						className: u.a.title
					}, t), r.a.createElement("div", {
						className: u.a.metaLine
					}, p._("Editing", null, {
						hk: "2w5fAf"
					})))
				}),
				b = n("./node_modules/fbt/lib/FbtPublic.js"),
				f = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				g = n("./src/lib/timeAgo/index.ts"),
				E = n("./src/reddit/actions/postCollection/index.ts"),
				C = n("./src/reddit/selectors/posts.ts"),
				y = n("./src/reddit/components/Widgets/PostCollection/PostItem/index.m.less"),
				x = n.n(y),
				v = n("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.tsx"),
				O = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				_ = n("./src/reddit/components/Widgets/PostCollection/PostItem/Placeholder.m.less"),
				k = n.n(_);

			function S({
				className: e,
				isLoading: t
			}) {
				const n = Object(O.a)({
					isLoading: t
				});
				return r.a.createElement("div", {
					className: Object(s.a)(k.a.Container, e)
				}, r.a.createElement("div", {
					className: k.a.Content
				}, r.a.createElement("div", {
					className: Object(s.a)(k.a.Title, n)
				}), r.a.createElement("div", {
					className: Object(s.a)(k.a.Secondary, n)
				})))
			}
			const j = ["right", "bottom"],
				T = ["right", "top"];
			var w = Object(a.b)(() => Object(c.c)({
					post: C.F
				}), (e, t) => ({
					onRemovePostFromCollection: () => e(Object(E.g)(t.collectionId, t.postId))
				}))(e => {
					const {
						post: t,
						onRemovePostFromCollection: n
					} = e;
					return t ? r.a.createElement("div", {
						className: x.a.container
					}, r.a.createElement("div", {
						className: x.a.content
					}, r.a.createElement(f.a, {
						className: x.a.title,
						target: "_blank",
						to: t.permalink
					}, t.title), r.a.createElement("div", {
						className: x.a.metaLine
					}, b.fbt._("Posted · {timeAgo}", [b.fbt._param("timeAgo", Object(g.d)(t.created / 1e3))], {
						hk: "ZVJpV"
					}))), r.a.createElement(v.a, {
						onRemoveClick: n,
						className: x.a.overflowMenu,
						dropdownId: "collection-widget-item" + t.id,
						postPermalink: t.permalink,
						targetPosition: j,
						tooltipPosition: T
					})) : r.a.createElement(S, {
						className: x.a.container,
						isLoading: !0
					})
				}),
				I = n("./src/reddit/components/Widgets/PostCollection/index.m.less"),
				P = n.n(I);
			const {
				fbt: R
			} = n("./node_modules/fbt/lib/FbtPublic.js"), M = ["right", "bottom"], N = ["right", "top"];
			class D extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.renderItem = (e, t) => r.a.createElement(w, {
						collectionId: this.props.collection.id,
						key: e,
						postId: e
					})
				}
				render() {
					const {
						className: e,
						collection: t
					} = this.props, n = t.postIds.map(this.renderItem).reverse();
					return r.a.createElement("div", {
						className: Object(s.a)(e, P.a.container)
					}, r.a.createElement("div", {
						className: P.a.topRow
					}, R._("Collection", null, {
						hk: "1pY1s2"
					}), r.a.createElement(i.a, {
						className: P.a.menuButton,
						collectionId: t.id,
						isSubmitPage: !0,
						permalink: t.permalink,
						targetPosition: M,
						tooltipPosition: N
					})), r.a.createElement("h4", {
						className: P.a.collectionDescription
					}, t.title), r.a.createElement("div", {
						className: P.a.listWrapper
					}, r.a.createElement("div", {
						className: P.a.listContainer
					}, n)), r.a.createElement(h, null))
				}
			}
			t.a = D
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less": function(e, t, n) {
			e.exports = {
				RawHTMLDisplay: "_2vztYwRKSDZV2ISjSixByA",
				rawHtmlDisplay: "_2vztYwRKSDZV2ISjSixByA",
				Chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				RuleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				ruleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				pointerCursor: "_3osxlOKfiylmgqNqsW7erB",
				RuleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				ruleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				RuleTitle: "tbIApBd2DM_drfZQJjIum",
				ruleTitle: "tbIApBd2DM_drfZQJjIum",
				RuleDescription: "_2QhEclR_DjIrTv_oNU5MMN",
				ruleDescription: "_2QhEclR_DjIrTv_oNU5MMN"
			}
		},
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/index.tsx"),
				u = n("./src/reddit/helpers/dom/index.ts"),
				p = n("./src/reddit/icons/fonts/index.tsx"),
				m = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				h = n("./src/reddit/models/Widgets/index.ts"),
				b = n("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				f = n.n(b);
			const g = c.a.div("RuleShortName", f.a),
				E = c.a.div("RuleIndex", f.a),
				C = c.a.div("RuleTitle", f.a),
				y = c.a.div("RuleDescription", f.a),
				x = c.a.wrapped(d.a, "RawHTMLDisplay", f.a),
				v = {};
			class O extends s.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(u.f)() || this.setState({
							isVisible: !this.state.isVisible
						})
					}, this.state = {
						isVisible: this.shouldShowFullDisplay(e)
					}
				}
				shouldShowFullDisplay(e) {
					return e.display === h.e.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: n,
						shouldShowFullDisplay: o
					} = this, r = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), i = !o(e) && !!r;
					return s.a.createElement(g, {
						className: Object(a.a)({
							[f.a.pointerCursor]: i
						}),
						onClick: o(e) || !r ? void 0 : n
					}, s.a.createElement(m.a, null, s.a.createElement(E, null, `${e.humanIndex}.`), s.a.createElement(C, null, `${e.rule.shortName}`), s.a.createElement("div", null, !o(e) && r && s.a.createElement(p.a, {
						name: t.isVisible ? "caret_up" : "caret_down"
					}))), t.isVisible && s.a.createElement(y, null, e.rule.descriptionRichText ? s.a.createElement(l.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: v
					}) : e.rule.descriptionHtml ? s.a.createElement(x, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			const _ = e => e.rules.length > 0 ? s.a.createElement(i.a, {
				className: e.className,
				styles: e.styles,
				title: o.fbt._("{subredditName} Rules", [o.fbt._param("subredditName", `r/${e.subredditName}`)], {
					hk: "2AwRLk"
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, n) {
				return s.a.createElement(O, {
					key: `rule${t.shortName}${t.createdUtc}`,
					rule: t,
					display: e.display,
					humanIndex: n + 1
				})
			}))) : null;
			t.b = e => s.a.createElement(_, {
				rules: e.widget.data || [],
				subredditName: e.subredditName,
				display: e.widget.display,
				redditStyle: e.redditStyle,
				styles: e.widget.styles
			})
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/reddit/components/SEOTitle/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/widgets.ts"),
				h = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				b = n("./src/reddit/selectors/experiments/topPosts.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/models/Theme/index.ts"),
				C = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const y = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(C.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				x = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(C.a)(e).widgetColors.sidebarWidgetHeaderColor,
				v = e => {
					const t = y(e);
					return Object(E.f)(t)
				},
				O = e => {
					const t = x(e);
					return Object(E.f)(t)
				};
			var _ = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				k = n.n(_);
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js"), j = Object(u.t)(), T = Object(s.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.m)(e, t) || void 0,
						o = t.redditStyle || Object(f.l)(e, {
							subredditId: n
						}),
						r = Object(g.W)(e);
					return o || r
				},
				nigtmode: g.W,
				subredditId: u.m,
				topPostVariant: b.d
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
						e && t && this.props.sendEvent(Object(m.b)(e, t)), this.setState({
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
					return e.backgroundColor = y(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = v(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = x(this.props), e.color = e.fill = O(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: o,
						headerButton: s,
						onClick: i,
						title: c,
						titleClassName: l,
						truncateThreshold: u
					} = this.props, m = n ? k.a.widgetContentOnly : k.a.widgetContent, h = !o && this.props.styles, b = h ? this.getWidgetBackgroundStyles() : {}, f = h ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(a.a)(t, k.a.widgetBackground, {
							[k.a.redditStyle]: o,
							[k.a.clickable]: !!i,
							[k.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": o,
						onClick: i,
						style: b
					}, c && r.a.createElement("div", {
						className: k.a.widgetHeader,
						style: f
					}, r.a.createElement("div", {
						className: Object(a.a)(k.a.widgetTitle, l)
					}, r.a.createElement(d.b, {
						type: d.a.Widget
					}, c)), s), r.a.createElement("div", {
						className: Object(a.a)(m, {
							[k.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? u : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(p.o, {
						className: k.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, S._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = j(T(Object(c.a)(Object(l.c)(w))))
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/actions/structuredStyles/index.ts"),
				i = n("./src/reddit/selectors/activeModalId.ts"),
				a = n("./src/reddit/selectors/structuredStyles.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const d = Object(r.c)({
				bladeHasUnsavedChanges: a.a,
				isEditing: a.i,
				isBladeEditorDirty: a.h,
				isModalOpen: Object(i.b)(c.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(o.b)(d, (e, {
				subredditId: t
			}) => ({
				requestCloseBlade: () => t && e(Object(s.h)(t))
			}))
		},
		"./src/reddit/constants/componentSizes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "i", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "m", (function() {
				return m
			})), n.d(t, "q", (function() {
				return h
			})), n.d(t, "r", (function() {
				return b
			})), n.d(t, "s", (function() {
				return f
			})), n.d(t, "u", (function() {
				return g
			})), n.d(t, "t", (function() {
				return E
			})), n.d(t, "v", (function() {
				return C
			})), n.d(t, "w", (function() {
				return y
			})), n.d(t, "l", (function() {
				return x
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "o", (function() {
				return _
			})), n.d(t, "p", (function() {
				return k
			}));
			const o = 284,
				r = 450,
				s = 800,
				i = 284,
				a = 48,
				c = 640,
				d = 1600,
				l = 1280,
				u = 40,
				p = 48,
				m = 24,
				h = 24,
				b = 312,
				f = 40,
				g = 270,
				E = 106,
				C = 5,
				y = 16,
				x = 1250,
				v = 82,
				O = 48,
				_ = 36,
				k = 40
		},
		"./src/reddit/constants/componentTestIds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			}));
			const o = "comment",
				r = "comment-submission-form-markdown",
				s = "comment-submission-form-richtext",
				i = "comments-page-link-num-comments",
				a = "post-content"
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			}));
			const o = "reddit",
				r = "reddit.ready",
				s = "reddit.urlChanged"
		},
		"./src/reddit/constants/keycodes.ts": function(e, t, n) {
			"use strict";
			var o, r;
			n.d(t, "a", (function() {
					return o
				})), n.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e[e.ArrowDown = 40] = "ArrowDown", e[e.ArrowLeft = 37] = "ArrowLeft", e[e.ArrowRight = 39] = "ArrowRight", e[e.ArrowUp = 38] = "ArrowUp", e[e.Backspace = 8] = "Backspace", e[e.Delete = 46] = "Delete", e[e.Enter = 13] = "Enter", e[e.Escape = 27] = "Escape", e[e.F = 70] = "F", e[e.K = 75] = "K", e[e.Space = 32] = "Space", e[e.Tab = 9] = "Tab", e[e.Comma = 188] = "Comma"
				}(o || (o = {})),
				function(e) {
					e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.Enter = "Enter", e.Escape = "Escape", e.F = "f", e.Tab = "Tab", e.Space = " ", e.Comma = ","
				}(r || (r = {}))
		},
		"./src/reddit/constants/postCreation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			}));
			const o = "PostCreation-AddEventButton",
				r = 500,
				s = "PostCreation-CollectionEducationTooltip",
				i = "PostCreation-EventEducationTooltip",
				a = 300,
				c = a,
				d = "PostCreation-AddToCollectionButton"
		},
		"./src/reddit/constants/screenWidths.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const o = 480,
				r = 960,
				s = 1200
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
				return p
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "m", (function() {
				return v
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "l", (function() {
				return _
			})), n.d(t, "p", (function() {
				return k
			})), n.d(t, "o", (function() {
				return S
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "f", (function() {
				return T
			})), n.d(t, "h", (function() {
				return w
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "g", (function() {
				return P
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/InternalLink/index.tsx"),
				a = n("./src/reddit/controls/Button/index.m.less"),
				c = n.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const l = {
				role: "button",
				tabIndex: 0
			};
			var u, p, m, h;
			! function(e) {
				e.XXS = "xxsmallButtonStyles", e.XS = "xsmallButtonStyles", e.S = "smallButtonStyles", e.M = "mediumButtonStyles", e.L = "largeButtonStyles", e.XL = "xlargeButtonStyles"
			}(u || (u = {})),
			function(e) {
				e.Primary = "primary", e.Secondary = "secondary", e.Tertiary = "tertiary", e.Plain = "plain"
			}(p || (p = {})),
			function(e) {
				e.L = "left", e.R = "right", e.C = "center"
			}(m || (m = {})),
			function(e) {
				e.Button = "button", e.ExternalLink = "external-link", e.InternalLink = "internal-link"
			}(h || (h = {}));
			const b = e => {
					const {
						"data-redditstyle": t,
						Icon: n,
						iconPosition: o = m.C,
						isFullWidth: i = !1,
						isSquare: a = !1,
						children: b,
						className: C,
						kind: y = h.Button,
						priority: x = p.Primary,
						redditStyle: v,
						size: O = u.S,
						text: _,
						...k
					} = e, S = (({
						baseClassName: e,
						redditStyle: t,
						dataRedditStyle: n,
						Icon: o,
						isFullWidth: r,
						isSquare: i,
						priority: a,
						size: d,
						text: l
					}) => Object(s.a)(e, c.a.Button, a && c.a[a], d && c.a[d], {
						[c.a.isFullWidth]: r,
						[c.a.isIconOnly]: !!o && !l,
						[c.a.isSquare]: i,
						[c.a.redditStyle]: !(!t && !n)
					}))({
						baseClassName: C,
						children: b,
						dataRedditStyle: t,
						Icon: n,
						isFullWidth: i,
						isSquare: a,
						priority: x,
						redditStyle: v,
						size: O,
						text: _
					}), j = (({
						children: e,
						text: t,
						Icon: n,
						iconPosition: o,
						priority: i
					}) => !n && t ? r.a.createElement("span", null, t) : r.a.createElement(r.a.Fragment, null, n && (o === m.C || o === m.L) && r.a.createElement(n, {
						className: Object(s.a)(c.a.Icon, {
							[c.a.isLeft]: o === m.L
						}),
						isFilled: i === p.Primary
					}), t && r.a.createElement("span", {
						className: c.a.Text
					}, t), e && e, n && o === m.R && r.a.createElement(n, {
						className: Object(s.a)(c.a.Icon, c.a.isRight),
						isFilled: i === p.Primary
					})))({
						children: b,
						text: _,
						Icon: n,
						iconPosition: o,
						priority: x
					});
					return y === h.InternalLink && (e => "to" in e)(k) ? r.a.createElement(f, d({}, l, k, {
						className: S
					}), j) : y === h.ExternalLink && (e => "href" in e)(k) ? r.a.createElement(g, d({}, l, k, {
						className: S
					}), j) : r.a.createElement(E, d({}, l, k, {
						className: S
					}), j)
				},
				f = e => r.a.createElement(i.a, e),
				g = e => r.a.createElement("a", e),
				E = e => r.a.createElement("button", e),
				C = e => r.a.createElement(b, d({
					kind: h.ExternalLink,
					priority: p.Primary
				}, e)),
				y = e => r.a.createElement(b, d({
					kind: h.InternalLink,
					priority: p.Primary
				}, e)),
				x = e => r.a.createElement(b, d({
					kind: h.Button,
					priority: p.Primary
				}, e)),
				v = e => r.a.createElement(b, d({
					kind: h.ExternalLink,
					priority: p.Secondary
				}, e)),
				O = e => r.a.createElement(b, d({
					kind: h.InternalLink,
					priority: p.Secondary
				}, e)),
				_ = e => r.a.createElement(b, d({
					kind: h.Button,
					priority: p.Secondary
				}, e)),
				k = e => r.a.createElement(b, d({
					kind: h.InternalLink,
					priority: p.Plain
				}, e)),
				S = e => r.a.createElement(b, d({
					kind: h.Button,
					priority: p.Plain
				}, e)),
				j = ({
					className: e,
					...t
				}) => r.a.createElement(b, d({
					kind: h.Button,
					priority: p.Primary,
					className: Object(s.a)(e, c.a.DangerButtonColors)
				}, t)),
				T = ({
					className: e,
					...t
				}) => r.a.createElement(b, d({
					kind: h.Button,
					className: Object(s.a)(e, c.a.GoldButtonColors)
				}, t)),
				w = ({
					className: e,
					...t
				}) => r.a.createElement(b, d({
					kind: h.Button,
					className: Object(s.a)(e, c.a.PremiumButtonColors)
				}, t)),
				I = ({
					className: e,
					...t
				}) => r.a.createElement(b, d({
					kind: h.Button,
					className: Object(s.a)(e, c.a.ChatButton)
				}, t)),
				P = ({
					className: e,
					...t
				}) => r.a.createElement(b, d({
					kind: h.Button,
					className: Object(s.a)(e, c.a.InlineTextButton)
				}, t));
			t.q = b
		},
		"./src/reddit/controls/CheckboxInput/index.m.less": function(e, t, n) {
			e.exports = {
				checkboxInput: "_2BPowd18EKTnfZFrj5kY3G",
				disabled: "_303iMx_S0pgrbpYhsYTV6K",
				checkboxSelected: "_2VtQ8EjxlJXdicVJhc73gQ"
			}
		},
		"./src/reddit/controls/CheckboxInput/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/controls/CheckboxInput/index.m.less"),
				l = n.n(d);
			t.a = e => r.a.createElement(c.a, {
				"aria-checked": !!e.value,
				"aria-disabled": e.disabled,
				"aria-labelledby": e.name,
				className: Object(s.a)(e.className, l.a.checkboxInput, e.disabled ? l.a.disabled : null),
				onClick: e.onChange && !e.disabled ? () => e.onChange(!e.value) : void 0,
				role: "checkbox"
			}, r.a.createElement("input", {
				value: e.value ? e.value.toString() : "",
				type: "hidden"
			}), e.value ? r.a.createElement(a.a, {
				className: l.a.checkboxSelected
			}) : r.a.createElement(i.a, null), e.children)
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var o = n("./node_modules/lodash/throttle.js"),
				r = n.n(o),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/index.m.less"),
				m = n.n(p),
				h = n("./src/reddit/controls/Dropdown/row.m.less"),
				b = n.n(h);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			class g extends i.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = r()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, n = Object(a.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(c.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && i.a.createElement("span", {
						className: n
					}, e.children), i.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(u.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: r()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(l.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(d.a, {
						className: m.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(a.a)(b.a.row, e, {
					[b.a.mIsInteractive]: !t.noHover,
					[b.a.mIsSelected]: t.isSelected,
					[b.a.topics]: t.isTopicsStyle
				});
				return i.a.createElement(g, f({
					className: n
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			})), n.d(t, "c", (function() {
				return j
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/uniqueId.js"),
				s = n.n(r),
				i = n("./node_modules/raf/index.js"),
				a = n.n(i),
				c = n("./node_modules/react/index.js"),
				d = n.n(c),
				l = n("./node_modules/react-redux/es/index.js"),
				u = n("./node_modules/reselect/es/index.js"),
				p = n("./src/lib/classNames/index.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/selectors/activeModalId.ts"),
				b = n("./src/higherOrderComponents/asModal/index.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/layout/row/Inline/index.tsx"),
				E = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				C = n.n(E);
			var y = Object(b.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return d.a.createElement("div", {
						className: C.a.wrapper
					}, d.a.createElement(g.a, {
						className: C.a.titleRow
					}, n), d.a.createElement("div", {
						className: C.a.detailsContainer
					}, t), d.a.createElement(g.a, {
						className: C.a.buttonRow
					}, d.a.createElement(f.i, {
						className: C.a.confirmButton,
						onClick: e.onConfirmed
					}, o.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				x = n("./src/reddit/controls/ErrorText/index.m.less"),
				v = n.n(x);
			const O = Object(u.c)({
				activeModalId: h.a
			});
			class _ extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${s()()}`
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					a()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						activeModalId: t,
						className: n,
						errorModalBody: r,
						errorModalTitle: s = o.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: i = o.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: a,
						textHasOverflowed: c
					} = this.state;
					return d.a.createElement("div", {
						className: Object(p.a)(v.a.wrapper, n)
					}, d.a.createElement("span", {
						className: v.a.description,
						ref: this.spanRef
					}, e), c && d.a.createElement("span", {
						className: v.a.moreText,
						onClick: this.toggleModal
					}, i), t === a && d.a.createElement(y, {
						onConfirmed: this.toggleModal,
						title: s
					}, r || e))
				}
			}
			const k = Object(l.b)(O, e => ({
					toggleErrorTextModal: t => e(Object(m.i)(t))
				}))(_),
				S = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: o,
						fallbackMessage: r,
						messages: s = []
					} = e, i = s.length ? s : r ? [r] : [];
					return i.length ? d.a.createElement("div", {
						className: t
					}, i.map((e, t) => d.a.createElement(k, {
						className: n,
						errorModalTitle: o,
						key: t
					}, e))) : null
				},
				j = e => d.a.createElement(S, {
					fallbackMessage: o.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = k
		},
		"./src/reddit/controls/FileDrop/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/lodash/flow.js"),
				r = n.n(o),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./node_modules/react-dnd/lib/index.js"),
				c = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				d = n("./src/reddit/helpers/dragDropContext/index.ts");
			const l = c.NativeTypes.FILE,
				u = r()(Object(a.DropTarget)(l, {
					drop: (e, t) => {
						if (t && t.didDrop() || !t) return;
						const n = t.getItem();
						n.files && e.onDrop(n.files)
					}
				}, (e, t) => ({
					connectDropTarget: e.dropTarget(),
					isOver: t.isOver(),
					canDrop: t.canDrop()
				})), d.a);
			class p extends i.a.Component {
				render() {
					return this.props.connectDropTarget ? this.props.connectDropTarget(i.a.createElement("div", {
						className: this.props.className
					}, this.props.render(this.props.isOver, this.props.canDrop))) : null
				}
			}
			t.a = u(p)
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3CWuMoFPzdbJCxYJVmEw00",
				label: "J4DegnzzIY1-C2PFzYkrA",
				mHasValue: "t09kxBqaSw0Is_F5sUdQ1",
				inputWrapper: "_3TCLGRXxb1PXK-_sziBD2q",
				mIsInvalid: "_1pMjk4nL9CObVggXCSuELu",
				inputMovingLabelWrapper: "_2-meAmTwsZSCNYrpbEy7BX",
				mIsRedditStyle: "_3ONm7CsU4BtjX9jO5WYv2X",
				trash: "_2YUtyje1Y5rUty_3zgPOGM",
				trashContainer: "_2wjFyjW1rwWs4WFcSc7xNl",
				plus: "_3o11DwChSYlSiDT6FYqOIE",
				addValueButton: "_1Dm7EZTfDne90O5xANs501",
				multiInputWrapper: "_3CjWcr8XyX0xN32ADxPngu",
				errorText: "_2JNX-DiHbrfxhFYgkcBNaK"
			}
		},
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return C
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/ErrorText/index.tsx"),
				c = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				d = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				l = n("./src/reddit/controls/FormFields/index.m.less"),
				u = n.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const m = i.a.input("input", u.a),
				h = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				b = e => {
					const {
						label: t,
						children: n,
						inputRef: o,
						className: i,
						...a
					} = e, c = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(s.a)(u.a.inputWrapper, i, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: h
					}, r.a.createElement(m, p({
						"aria-invalid": e.isInvalid,
						innerRef: o
					}, a)), e.label && r.a.createElement("label", {
						className: Object(s.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				f = e => {
					const {
						label: t,
						children: n,
						inputRef: o,
						isInvalid: i,
						className: a,
						redditStyle: c,
						...d
					} = e, l = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(s.a)(u.a.inputMovingLabelWrapper, a, {
							[u.a.mIsInvalid]: i,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: h
					}, r.a.createElement(m, p({
						innerRef: o
					}, d)), e.label && r.a.createElement("label", {
						className: Object(s.a)(u.a.label, {
							[u.a.mHasValue]: l
						})
					}, e.label), e.children)
				},
				g = e => r.a.createElement("div", {
					className: Object(s.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", r.a.createElement(c.a, {
					className: u.a.plus
				}));
			var E;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(E || (E = {}));
			class C extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: E.ADD
						})
					}, this.updateValue = (e, t) => {
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: E.REMOVE,
							value: n,
							index: e
						})
					}
				}
				componentWillReceiveProps(e) {
					e.values.length > this.props.values.length && this.setState({
						addingNewInputs: !0
					})
				}
				componentDidUpdate() {
					this.focusedInput && this.state.addingNewInputs && (this.focusedInput.focus(), this.setState({
						addingNewInputs: !1
					}))
				}
				setInputRef(e, t) {
					this.state.addingNewInputs && (!this.props.buttonOnTop || this.props.buttonOnTop && !t) && (this.focusedInput = e)
				}
				renderFields() {
					const {
						values: e,
						disabled: t,
						label: n,
						placeholder: o,
						errors: s = []
					} = this.props;
					return e.map((e, i) => r.a.createElement(b, {
						inputRef: e => this.setInputRef(e, i),
						isInvalid: !!s[i],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, i),
						placeholder: o,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, r.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(i)
					}, r.a.createElement(d.b, {
						className: u.a.trash
					})), !!s[i] && r.a.createElement(a.b, {
						className: u.a.errorText
					}, s[i])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: o,
						addValueText: i,
						disabled: a
					} = this.props;
					this.focusedInput = null;
					const c = !(!!o && n.length >= o) && !a;
					return r.a.createElement("div", {
						className: Object(s.a)(u.a.multiInputWrapper, e)
					}, t && c && r.a.createElement(g, {
						onClick: this.addValue,
						text: i
					}), this.renderFields(), !t && c && r.a.createElement(g, {
						onClick: this.addValue,
						text: i
					}))
				}
			}
		},
		"./src/reddit/controls/GrowingOutlinedInput/index.m.less": function(e, t, n) {
			e.exports = {
				growingOutlinedInput: "PqYQ3WC15KaceZuKcFI02"
			}
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/constants/keycodes.ts"),
				d = n("./src/reddit/controls/Input/index.m.less"),
				l = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			class p extends r.a.Component {
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
					return r.a.createElement("input", u({
						className: Object(i.a)(l.a.input, e),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(s.b)(null, {
				closeModal: a.f
			})(p)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Input/index.m.less"),
				s = n.n(r);
			t.a = o.a.input("input", s.a)
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => r.a.createElement("div", {
				className: Object(s.a)(a.a.loadingIcon, t, {
					[a.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
			})
		},
		"./src/reddit/controls/PillButton/index.m.less": function(e, t, n) {
			e.exports = {
				buttonContent: "_1HZjnB8bOdf81CZAkyN--u",
				PostActionButton: "YfC3dzPFWzw5Uh7t4eyxX",
				postActionButton: "YfC3dzPFWzw5Uh7t4eyxX",
				hasChildren: "_3sJWr2xzgQoVrLxbXYMKMY",
				background: "_3LYd27k2O7QQ4CB0n5l7IN",
				dark: "_11omUhmjhXU71rMQXq6aUQ",
				nightmode: "_2u4At4RuG5uMjsOyaMMJf-",
				upvote: "n74nWMQQf9xC988xNT4Od",
				activated: "E_CLGFtNN90EX8GK9sLoc",
				downvote: "_3D7vLfQ-NjeRYo1ZkeKvV5",
				gold: "_1x7f7HYHYhd_oc-kQKIj0G",
				blue: "_1dkGQtTxIMonqw2p5jWSbs",
				approve: "NhkZC_8NIYGBrP6qpr3PO",
				remove: "U0T8jceDCBfr8JH93t7wD",
				buttonChildren: "_3SSQaDQCW4r6GrvCSg9opO",
				compact: "_2OVRjKU_PrPyp2RjgIaMmv",
				classic: "_12vyrBVZ9uMjEDwrAWWkNl"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.m.less": function(e, t, n) {
			e.exports = {
				radioOption: "_2e6fJknJ4noSygWYov8-F1",
				radioOff: "_1lzSnSABNXX12WerTnwqI3",
				radioOn: "_3PYsg_uRJ6AGptv-hi7kqu"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/keycodes.ts"),
				a = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				l = n("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = n.n(l);
			class p extends r.a.Component {
				constructor() {
					super(...arguments), this.ref = null, this.onKeyPress = e => {
						const {
							props: t
						} = this;
						t.disabled || e.key !== i.b.Enter && e.key !== i.b.Space || (t.onClick && t.onClick(t.value), e.preventDefault())
					}
				}
				componentDidUpdate(e) {
					this.props.selected && !e.selected && this.ref && this.ref.focus()
				}
				render() {
					const {
						props: e
					} = this;
					return e.hidden ? null : r.a.createElement(d.a, {
						"aria-checked": e.selected,
						className: Object(s.a)(e.className, u.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? r.a.createElement(c.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : r.a.createElement(a.a, {
						className: u.a.radioOff,
						role: "presentation"
					})), e.children)
				}
			}
			t.a = p
		},
		"./src/reddit/controls/RadioInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/constants/keycodes.ts");
			class i extends r.a.Component {
				constructor(e) {
					super(e), this.handleClick = e => {
						const {
							disabled: t,
							onChange: n
						} = this.props;
						t || this.state.value !== e && (n(e), this.setState({
							value: e
						}))
					}, this.getValues = () => {
						const e = [];
						return r.a.Children.forEach(this.props.children, t => {
							t.props.hidden || t.props.disabled || e.push(t.props.value)
						}), e
					}, this.onKeyDown = e => {
						const {
							disabled: t,
							onChange: n
						} = this.props, {
							value: o
						} = this.state;
						if (t) return;
						const r = e.key === s.b.ArrowUp,
							i = e.key === s.b.ArrowDown;
						if (r || i) {
							const t = this.getValues();
							if (!t.length) return;
							const s = o ? t.indexOf(o) : 0,
								i = t[((r ? s - 1 : s + 1) + t.length) % t.length];
							n(i), this.setState({
								value: i
							}), e.preventDefault()
						}
					}, this.state = {
						value: e.value || null
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.value !== this.props.value && this.setState({
						value: e.value || null
					})
				}
				render() {
					const {
						props: e
					} = this, {
						value: t
					} = this.state;
					return r.a.createElement("div", {
						"aria-label": e.name,
						className: e.className,
						role: "radiogroup",
						onKeyDown: this.onKeyDown
					}, r.a.createElement("input", {
						disabled: e.disabled,
						type: "hidden",
						value: t || ""
					}), r.a.Children.map(e.children, (n, o) => {
						const s = 0 === o,
							i = n.props.value === t,
							a = null !== t ? i ? 0 : -1 : s ? 0 : -1;
						return r.a.cloneElement(n, {
							disabled: e.disabled,
							onClick: e => this.handleClick(n.props.value),
							selected: i,
							tabIndex: a
						})
					}))
				}
			}
		},
		"./src/reddit/controls/Sortable/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/helpers/dragDropContext/index.ts"),
				i = n("./node_modules/lodash/flow.js"),
				a = n.n(i),
				c = n("./node_modules/react-dnd/lib/index.js");
			class d extends r.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.onClick && this.props.onClick(this.props.id, this.props.index)
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.connectDropTarget && e.connectDragSource ? a()(e.connectDropTarget, e.connectDragSource)(r.a.createElement("div", {
						onClick: this.handleClick
					}, e.render(e.id, e.index, e.isDragging, e.isOver, e.canDrop))) : null
				}
			}
			var l = a()(Object(c.DragSource)("card", {
				beginDrag: e => ({
					id: e.id,
					index: e.index
				}),
				endDrag: (e, t) => {
					if (t && t.didDrop()) {
						const n = t.getDropResult();
						e.onDrop(e.id, n.id)
					}
				}
			}, (e, t) => ({
				connectDragSource: e.dragSource(),
				isDragging: t.isDragging()
			})), Object(c.DropTarget)("card", {
				drop: (e, t) => {
					if (!t || !t.didDrop()) return {
						id: e.id,
						index: e.index
					}
				},
				canDrop: (e, t) => {
					if (!t) return !1;
					const n = t.getItem();
					return e.id !== n.id
				}
			}, (e, t) => ({
				connectDropTarget: e.dropTarget(),
				isOver: t.isOver(),
				canDrop: t.canDrop()
			})))(d);
			class u extends r.a.Component {
				constructor(e) {
					super(e), this.onDrop = (e, t) => {
						this.setState(n => {
							const o = n.values.slice(),
								r = o.indexOf(e),
								s = o.splice(r, 1)[0];
							let i = o.indexOf(t);
							return r <= i && (i += 1), o.splice(i, 0, s), this.props.onDrop(e, t, o), {
								values: o
							}
						})
					}, this.state = {
						values: e.values
					}
				}
				componentWillReceiveProps(e) {
					this.setState(() => ({
						values: e.values
					}))
				}
				render() {
					const {
						className: e,
						getReactKey: t,
						onClick: n,
						render: o
					} = this.props;
					return r.a.createElement("div", {
						className: e
					}, this.state.values.map((e, s) => r.a.createElement(l, {
						id: e,
						key: t && t(e, s),
						index: s,
						render: o,
						onDrop: this.onDrop,
						onClick: n
					})))
				}
			}
			t.a = Object(s.a)(u)
		},
		"./src/reddit/controls/SubredditDropdown/index.m.less": function(e, t, n) {
			e.exports = {
				entry: "BR2J4z5ndMj6r3-QW2hHI",
				mIsFocused: "_2KXTnIrbZ1Fr5F4nZyXeKS",
				list: "_17g61LC45mhwjs-g79qbZK"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SearchBar/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_1MHSX9NVr4C2QxH2dMcg4M",
				inputWrapper: "anPJr_ybRailY8NbAunl2",
				searchBar: "_3cWzf-usAKfGV1Ay7h2zM_",
				commonIconStyles: "_3UX5zf2Jh7UCwxr3e1Rrt2",
				dropdownIcon: "_15FJlGHQ_lg8wmnMsXlnes",
				iconEmpty: "_3adQsrepNO01e3sMjt2z0P",
				subredditRoundIcon: "jpIFeDw811_DQwlQEqBjm",
				userIcon: "_1Xb3_WGBJKTWZNy0MHWTsR",
				searchIcon: "_2MCEtCukiOUDUHF1PDgWwH",
				mDisabled: "I8Mbkr_v6UNBq2UjXD24r"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownEntry/index.m.less": function(e, t, n) {
			e.exports = {
				entry: "_2_6Q3rlmltjQM8nEBoNJr-",
				disabled: "_1eGUunOsIyMkgTF3IiieVl"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less": function(e, t, n) {
			e.exports = {
				title: "-T-WBPEANCCRwTdAGSdj_",
				dropdownSection: "_2MAa_9ffQVHzsZ-RD1dD5F"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "_2jjSvas2tvdAFgIvSzSBax",
				mDisabled: "_2PoEIlhFzgV0sUWfM40K-N",
				rowStyle: "_3DfMNtnkrzHeGN0WyUTTuX"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less": function(e, t, n) {
			e.exports = {
				subredditIcon: "vxu9qtznQ1Kvakd5mtfxV",
				main: "_11CAFoZ5ryUXHrO5iX6Ktk",
				title: "_1bEDlh2fhWPx9-h3IqUvFa",
				secondary: "_2q4aqq7yddFWa3SfRCihRH",
				container: "_3oyS3dPRsa51zDEONlIdts",
				mHighLight: "F6s6qTIrbT1UvKhtNmPq4"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less": function(e, t, n) {
			e.exports = {
				profileIcon: "_3JCR5jV3N1dbyHaUswxl4K"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_20inB3H1vZ94tVilqSJmU2"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less": function(e, t, n) {
			e.exports = {
				noMatches: "kaGogHhtbK_vPZj9943oa",
				container: "_3DQXGvoE1SM3Kmz20of7Iz",
				mIsValid: "_28z84WGIIVp4uDMcA3-Kgw",
				mIsVisible: "_3009h778F7QI2qu6YmsxVV"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Q
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/debounce.js"),
				s = n.n(r),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./src/lib/classNames/index.ts");
			const d = {
				leading: !0,
				trailing: !1
			};
			var l = (e, t, n, o = d) => {
					const r = {
							...d,
							...o
						},
						s = t > e ? 1 : -1;
					let i = e;
					if (e !== t) {
						for (r.leading || (i += s); i !== t;) n(i), i += s;
						r.trailing && n(i)
					} else(r.leading || r.trailing) && n(e)
				},
				u = n("./src/lib/forEachGroup/index.ts"),
				p = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				m = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownEntry/index.m.less"),
				h = n.n(m);
			class b extends i.Component {
				constructor(e) {
					super(e), this.mouseDown = !1, this.element = null, this.setRef = e => this.element = e, this.onMouseUp = () => {
						this.mouseDown && (this.props.disabled || this.props.onSelect(this.props.entryIndex), this.mouseDown = !1)
					}, this.onMouseDown = e => {
						this.mouseDown = !0, e.preventDefault()
					}, this.onMouseOver = () => {
						this.props.onOver(this.props.entryIndex)
					}, this.mouseDown = !1
				}
				componentDidUpdate() {
					this.mouseDown = !1, this.element && this.props.onUpdate(this.props.entryIndex, this.element)
				}
				render() {
					return a.a.createElement("div", {
						className: Object(c.a)(h.a.entry, this.props.disabled && h.a.disabled),
						onMouseDown: this.onMouseDown,
						onMouseOver: this.onMouseOver,
						onMouseUp: this.onMouseUp,
						ref: this.setRef
					}, this.props.children)
				}
			}
			var f = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less"),
				g = n.n(f);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var C = ({
					className: e,
					children: t,
					title: n,
					...o
				}) => a.a.createElement("div", E({
					className: Object(c.a)(g.a.dropdownSection, e)
				}, o), n && a.a.createElement("div", {
					className: g.a.title
				}, n), t),
				y = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				x = n("./src/reddit/helpers/name/index.ts"),
				v = n("./src/lib/lessComponent.tsx"),
				O = n("./src/reddit/components/SubredditIcon/index.tsx"),
				_ = n("./src/reddit/icons/svgs/ImagePost/index.tsx"),
				k = n("./src/reddit/icons/svgs/Link/index.tsx"),
				S = n("./src/reddit/icons/svgs/TextPost/index.tsx"),
				j = n("./src/reddit/icons/svgs/Video/index.tsx"),
				T = n("./src/reddit/layout/row/Inline/index.tsx"),
				w = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less"),
				I = n.n(w);
			const P = [{
				type: "text",
				Icon: S.a
			}, {
				type: "images",
				Icon: _.a
			}, {
				type: "videos",
				Icon: j.a
			}, {
				type: "links",
				Icon: k.a
			}];

			function R(e) {
				const {
					allowedPostTypes: t,
					className: n
				} = e;
				return a.a.createElement(T.a, {
					className: Object(c.a)(I.a.rowStyle, n)
				}, P.map(({
					type: e,
					Icon: n
				}) => a.a.createElement("div", {
					className: Object(c.a)(I.a.iconWrapper, {
						[I.a.mDisabled]: !t[e]
					})
				}, a.a.createElement(n, null))))
			}
			var M = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less"),
				N = n.n(M);
			const D = v.a.wrapped(O.b, "subredditIcon", N.a);

			function L(e) {
				const {
					highlight: t,
					icon: n,
					title: o,
					secondaryText: r,
					item: s
				} = e, {
					allowedPostTypes: i
				} = s;
				return a.a.createElement("div", {
					className: Object(c.a)(N.a.container, {
						[N.a.mHighlight]: t
					})
				}, n, a.a.createElement("div", {
					className: N.a.main
				}, a.a.createElement("span", {
					className: N.a.title
				}, o), r && a.a.createElement("span", {
					className: N.a.secondary
				}, r)), t && i && a.a.createElement(R, {
					allowedPostTypes: i
				}))
			}
			var A = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less"),
				F = n.n(A);

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function U(e) {
				const {
					item: {
						name: t,
						subscribers: n
					}
				} = e, r = Object(x.d)(t), s = void 0 !== n ? o.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [o.fbt._plural(n, "number")], {
					hk: "2SvJUX"
				}) : void 0, i = a.a.createElement(y.a, {
					className: Object(c.a)(F.a.profileIcon, N.a.subredditIcon)
				});
				return a.a.createElement(L, B({
					icon: i,
					title: r,
					secondaryText: s
				}, e))
			}
			var K = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.m.less"),
				W = n.n(K);

			function G() {
				return (G = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function H(e) {
				const {
					item: {
						primaryColor: t,
						iconUrl: n,
						name: r,
						subscribers: s
					}
				} = e, i = Object(x.c)(r), c = void 0 !== s ? o.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [o.fbt._plural(s, "number")], {
					hk: "2SvJUX"
				}) : void 0, d = a.a.createElement(D, {
					className: W.a.icon,
					iconUrl: n,
					primaryColor: t,
					redditStyle: !0
				});
				return a.a.createElement(L, G({
					icon: d,
					title: i,
					secondaryText: c
				}, e))
			}
			var q = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less"),
				V = n.n(q);
			const z = {
				[p.a.OWN_PROFILE]: () => o.fbt._("Your profile", null, {
					hk: "1Qoy4P"
				}),
				[p.a.SUBSCRIBED_TO_SUBREDDIT]: () => o.fbt._("My communities", null, {
					hk: "2NVUpl"
				}),
				[p.a.OTHER_SUBREDDIT]: () => o.fbt._("Others", null, {
					hk: "3WQHlu"
				}),
				[p.a.MODERATED_SUBREDDIT]: () => o.fbt._("Moderated subreddits", null, {
					hk: "uZtld"
				})
			};
			class Q extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.selectedEntryElement = null, this.containerElement = null, this.ignoreEntryOverEvents = !1, this.activateEntryOverEvents = s()(() => this.ignoreEntryOverEvents = !1, 100), this.setContainerRef = e => this.containerElement = e, this.onEntryUpdate = (e, t) => {
						e === this.props.focusedIndex && (this.selectedEntryElement = t)
					}, this.onScroll = () => {
						this.ignoreEntryOverEvents && this.activateEntryOverEvents()
					}, this.onEntryOver = e => {
						this.ignoreEntryOverEvents || this.props.items[e].disabled || this.props.onEntryFocus(e), this.ignoreEntryOverEvents = !1
					}
				}
				componentDidUpdate() {
					if (this.props.focusedIndex >= 0 && this.selectedEntryElement && this.containerElement) {
						const e = this.selectedEntryElement.getBoundingClientRect(),
							t = this.containerElement.getBoundingClientRect();
						(e.top < t.top || e.bottom > t.bottom) && (this.ignoreEntryOverEvents = !0, 0 === this.props.focusedIndex ? this.containerElement.scrollTop = 0 : this.selectedEntryElement.scrollIntoView(e.top < t.top)), this.props.onEntryFocus(this.props.focusedIndex)
					}
				}
				getEntryContentComponent(e, t) {
					switch (e) {
						case p.a.OWN_PROFILE:
							return U;
						default:
							return H
					}
				}
				render() {
					const {
						focusedIndex: e,
						items: t
					} = this.props, n = [];
					return this.props.showNoMatchesCaption && n.push(a.a.createElement(C, {
						key: "no-matches"
					}, a.a.createElement("div", {
						className: V.a.noMatches
					}, o.fbt._("No communities found", null, {
						hk: "4wDUHv"
					})))), Object(u.a)(t, {
						keyFn: e => e.type
					}, (o, r, s, i) => {
						const c = [];
						l(s, i, n => {
							const o = t[n],
								r = n === e,
								s = this.getEntryContentComponent(o.type, o.name);
							s && c.push(a.a.createElement(b, {
								entryIndex: n,
								disabled: o.disabled,
								key: o.id || o.name,
								onSelect: this.props.onEntrySelect,
								onOver: this.onEntryOver,
								onUpdate: this.onEntryUpdate
							}, a.a.createElement(s, {
								highlight: r,
								item: o
							})))
						});
						const d = z[r];
						n.push(a.a.createElement(C, {
							key: r,
							title: d && d()
						}, c))
					}), a.a.createElement("div", {
						className: Object(c.a)(V.a.container, this.props.className, {
							[V.a.mIsValid]: this.props.isValid,
							[V.a.mIsVisible]: n.length > 0
						}),
						ref: this.setContainerRef,
						onMouseDown: this.props.onContainerMouseDown,
						onScroll: this.onScroll
					}, n)
				}
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2sfaZWDVT8JLAt2J9p4IzV",
				mIsActive: "_1d_qHIhircwk0cy-gLlRQq",
				mIsInvalid: "_3sp2CpDC4eODg63Hhf8_lz"
			}
		},
		"./src/reddit/controls/SubredditPicker/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "c", (function() {
				return h
			}));
			var o = n("./src/reddit/constants/posts.ts"),
				r = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				s = n("./src/reddit/helpers/name/index.ts"),
				i = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				a = n("./src/reddit/models/User/index.ts");
			const c = (e, t, n) => {
					if (Object(s.a)(e, t.name)) {
						const {
							id: e,
							name: i
						} = t, {
							url: a,
							color: c
						} = Object(r.a)({
							shouldHideNsfwIcon: n,
							subredditOrProfile: t
						});
						return {
							rawString: Object(s.c)(i),
							record: {
								id: e,
								name: i,
								iconUrl: a,
								primaryColor: c,
								type: o.a.SUBREDDIT
							}
						}
					}
					return {
						rawString: e,
						record: null
					}
				},
				d = (e, t, n) => {
					const r = Object(a.e)(t);
					if (Object(s.a)(e, r)) {
						const {
							id: e,
							accountIcon: n
						} = t;
						return {
							rawString: Object(s.d)(r),
							record: {
								id: e,
								name: r,
								iconUrl: n,
								type: o.a.PROFILE
							}
						}
					}
					return {
						rawString: e,
						record: null
					}
				},
				l = (e, t, n, o) => {
					if (t && (!n || Object(s.e)(e))) return c(e, t, o);
					if (n && (!t || Object(s.f)(e))) return d(e, n);
					if (t && n) {
						const r = c(e, t, o);
						return r.record ? r : d(e, n)
					}
					return {
						rawString: e,
						record: null
					}
				},
				u = e => {
					let t;
					return t = e.type === o.a.PROFILE ? i.a.OWN_PROFILE : i.a.OTHER_SUBREDDIT, {
						...e,
						type: t
					}
				},
				p = new RegExp("^(r/)?[A-Za-z0-9][A-Za-z0-9_]{1,20}$", "i"),
				m = new RegExp("^u/[A-Za-z0-9_-]{2,20}$", "i"),
				h = e => p.test(e) || m.test(e) || "" === e
		},
		"./src/reddit/controls/SubredditPicker/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return V
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/lodash/isEqual.js"),
				i = n.n(s),
				a = n("./src/reddit/helpers/name/index.ts");
			class c extends r.a.Component {
				constructor(e) {
					super(e), this.isFocused = !1, this.onFocus = () => {
						this.isFocused = !0, this.props.onFocus && this.props.onFocus()
					}, this.onChange = (e, t) => {
						this.setState({
							value: e
						}, () => {
							t && (this.props.onSelect(e), this.isFocused = !1)
						})
					}, this.state = {
						value: e.value
					}
				}
				componentWillReceiveProps(e) {
					const {
						value: t
					} = this.state, {
						value: n
					} = e;
					if (!i()(t, n) && !this.isFocused) {
						t.record && !n.record && Object(a.a)(t.record.name, n.rawString) ? this.setState({
							value: {
								rawString: n.rawString,
								record: t.record
							}
						}) : this.setState({
							value: n
						})
					}
				}
				render() {
					return r.a.createElement(r.a.Fragment, null, this.props.renderPicker({
						onChange: this.onChange,
						onFocus: this.onFocus,
						value: this.state.value
					}))
				}
			}
			var d = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				u = n("./src/lib/objectSelector/index.ts"),
				p = n("./src/reddit/actions/subredditAutocomplete/index.ts"),
				m = n("./src/reddit/actions/subredditCrosspostable.ts"),
				h = n("./src/reddit/actions/subscription/index.ts"),
				b = n("./src/reddit/controls/SubredditPicker/helpers.ts"),
				f = n("./node_modules/lodash/debounce.js"),
				g = n.n(f),
				E = n("./src/lib/classNames/index.ts"),
				C = n("./src/reddit/constants/keycodes.ts"),
				y = n("./src/reddit/constants/posts.ts"),
				x = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				v = n("./node_modules/fbt/lib/FbtPublic.js"),
				O = n("./src/reddit/icons/fonts/index.tsx"),
				_ = n("./src/lib/lessComponent.tsx"),
				k = n("./src/reddit/components/SubredditIcon/index.tsx"),
				S = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				j = n("./src/reddit/controls/SubredditPicker/Picker/SearchBar/index.m.less"),
				T = n.n(j);
			const w = _.a.wrapped(k.b, "subredditRoundIcon", T.a),
				I = _.a.wrapped(S.a, "userIcon", T.a),
				P = _.a.span("iconEmpty", T.a);

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const M = e => {
				e.preventDefault(), e.stopPropagation()
			};

			function N(e) {
				const {
					className: t,
					disabled: n,
					isActive: o,
					onDropdownClick: s,
					inputRef: i,
					record: a,
					value: c,
					...d
				} = e;
				let l = r.a.createElement(P, null);
				return o ? l = r.a.createElement(O.a, {
					name: "search",
					className: T.a.searchIcon
				}) : a && (l = a.type === y.a.SUBREDDIT ? r.a.createElement(w, a) : r.a.createElement(I, null)), r.a.createElement("div", {
					className: Object(E.a)(T.a.searchBar, t)
				}, l, r.a.createElement("div", {
					className: T.a.inputWrapper
				}, r.a.createElement("input", R({
					className: T.a.input,
					ref: i,
					disabled: n,
					placeholder: o ? v.fbt._("Search communities", null, {
						hk: "1mtF5A"
					}) : v.fbt._("Choose a community", null, {
						hk: "44gKTd"
					}),
					spellCheck: !1,
					value: c
				}, d))), r.a.createElement("div", {
					onClick: s,
					onMouseDown: M
				}, r.a.createElement(O.a, {
					name: "caret_down",
					className: T.a.dropdownIcon
				})))
			}
			var D = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx"),
				L = n("./src/reddit/controls/SubredditPicker/Picker/index.m.less"),
				A = n.n(L);
			class F extends r.a.Component {
				constructor(e) {
					super(e), this.inputRef = null, this.setInputRef = e => {
						this.inputRef = e, this.props.inputRef && this.props.inputRef(e)
					}, this.commitSelection = () => {
						const e = this.getPickerValue(!0);
						Object(b.c)(e.rawString) ? this.props.onChange(e, !0) : this.props.onChange({
							rawString: "",
							record: null
						}, !0), this.state.isOpen && this.setState({
							isOpen: !1
						})
					}, this.callOnChange = () => this.props.onChange(this.getPickerValue()), this.requestAutocomplete = g()(e => this.props.onGetSubredditAutocomplete(e), 200, {
						maxWait: 200
					}), this.selectItem = e => {
						const t = this.props.items[e];
						if (!t) throw new Error("Invalid item index");
						let n;
						n = t.type === x.a.OWN_PROFILE ? Object(a.d)(t.name) : Object(a.c)(t.name), this.setState({
							inputValue: n,
							focusedIndex: e
						}, this.commitSelection)
					}, this.getPickerValue = (e = !1) => {
						const t = this.state.inputValue,
							n = this.state.focusedIndex,
							{
								items: o,
								value: r
							} = this.props;
						if (r && r.record && Object(a.a)(t, r.record.name)) return {
							...r,
							rawString: t
						};
						const s = o[n] || e && o.find(e => Object(a.a)(e.name, t));
						if (!s) return {
							rawString: t,
							record: null
						};
						const {
							type: i,
							id: c,
							name: d,
							iconUrl: l,
							primaryColor: u,
							allowedPostTypes: p
						} = s;
						return {
							rawString: t,
							record: Object(a.a)(t, d) ? {
								id: c,
								name: d,
								iconUrl: l,
								primaryColor: u,
								allowedPostTypes: p,
								type: i === x.a.OWN_PROFILE ? y.a.PROFILE : y.a.SUBREDDIT
							} : null
						}
					}, this.findNextEnabledItemIndex = e => {
						const t = e ? -1 : 1;
						let n = this.state.focusedIndex + t,
							o = this.props.items[n];
						for (; o;) {
							if (!o.disabled) return n;
							n += t, o = this.props.items[n]
						}
						return n
					}, this.moveSelection = (e = !1) => {
						const {
							value: t,
							items: n
						} = this.props;
						let o = this.findNextEnabledItemIndex(e);
						o < -1 ? o = n.length - 1 : o >= n.length && (o = -1);
						const r = -1 === o ? t.rawString : n[o].name;
						r && this.setState({
							focusedIndex: o,
							inputValue: r
						})
					}, this.placeCursorAtTheEnd = () => {
						const e = this.state.inputValue.length;
						this.inputRef && this.inputRef.setSelectionRange(e, e)
					}, this.onDropdownClick = e => {
						const {
							inputRef: t
						} = this;
						this.state.isOpen ? this.setState({
							isOpen: !1
						}) : (t && t.focus(), this.setState({
							isOpen: !0
						}), this.placeCursorAtTheEnd()), e.preventDefault(), e.stopPropagation()
					}, this.onFocus = () => {
						this.props.onFocus && this.props.onFocus(), this.setState({
							isActive: !0,
							isOpen: !0
						}), this.inputRef && this.inputRef.select()
					}, this.onBlur = () => {
						this.props.selectOnBlur && this.state.isOpen ? (this.commitSelection(), this.setState({
							isActive: !1
						})) : this.setState({
							isActive: !1,
							isOpen: !1
						})
					}, this.onDropdownContainerMouseDown = e => {
						e.preventDefault()
					}, this.onEntryFocus = e => {
						this.setState({
							focusedIndex: e
						})
					}, this.onEntrySelect = e => {
						this.selectItem(e)
					}, this.onInputChange = e => {
						this.state.isOpen || this.setState({
							isOpen: !0
						});
						const t = e.target.value;
						this.requestAutocomplete(t), this.setState({
							inputValue: t
						}, this.callOnChange)
					}, this.onKeyDown = e => {
						e.which === C.a.ArrowUp ? (this.moveSelection(!0), e.preventDefault()) : e.which === C.a.ArrowDown ? (this.moveSelection(), e.preventDefault()) : e.which === C.a.Enter || e.which === C.a.Tab ? (-1 !== this.state.focusedIndex ? this.selectItem(this.state.focusedIndex) : this.commitSelection(), e.which !== C.a.Tab && e.preventDefault()) : e.which === C.a.Escape && (this.inputRef && this.inputRef.blur(), e.preventDefault())
					}, this.state = {
						isActive: !1,
						isOpen: !1,
						focusedIndex: 0,
						inputValue: e.value.rawString
					}
				}
				componentDidMount() {
					const {
						value: {
							rawString: e
						}
					} = this.props;
					e && this.requestAutocomplete(e)
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.setState({
						focusedIndex: -1,
						inputValue: e.value.rawString
					})
				}
				render() {
					const {
						className: e,
						disabled: t,
						isValid: n = !0,
						items: o,
						value: s
					} = this.props, {
						isActive: i,
						isOpen: a
					} = this.state, c = s.record;
					return r.a.createElement("div", {
						className: Object(E.a)(A.a.container, e, {
							[A.a.mIsActive]: i,
							[A.a.mIsInvalid]: !n
						})
					}, r.a.createElement(N, {
						disabled: t,
						isActive: this.state.isActive,
						value: this.state.inputValue,
						inputRef: this.setInputRef,
						onDropdownClick: this.onDropdownClick,
						onChange: this.onInputChange,
						onFocus: this.onFocus,
						onBlur: this.onBlur,
						onKeyDown: this.onKeyDown,
						record: c
					}), a && r.a.createElement(D.a, {
						items: o,
						isValid: n,
						focusedIndex: this.state.focusedIndex,
						showNoMatchesCaption: !this.props.haveSuggestions && this.props.isAllDataRetrieved,
						onContainerMouseDown: this.onDropdownContainerMouseDown,
						onEntryFocus: this.onEntryFocus,
						onEntrySelect: this.onEntrySelect
					}))
				}
			}
			var B = F,
				U = n("./src/reddit/selectors/subredditAutocomplete.ts");

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const W = Object(u.a)(Object(l.a)((e, t) => t.value, (e, {
					allowCrosspostableOnly: t,
					includeUserProfile: n,
					value: o
				}) => Object(U.a)(e, {
					allowCrosspostableOnly: t,
					includeUserProfile: n,
					substring: o.rawString
				}), (e, t) => {
					const {
						suggestedItems: n,
						fallbackItems: o,
						isAllDataRetrieved: r
					} = t, s = n.length ? n : e.record ? [Object(b.a)(e.record)] : [];
					return {
						items: 0 === s.length && r ? o : s,
						haveSuggestions: s.length > 0,
						isAllDataRetrieved: t.isAllDataRetrieved,
						isAutocompletePending: t.isPending
					}
				})),
				G = {
					onGetInitialData: e => t => t(e ? m.d() : h.e()),
					onGetSubredditAutocomplete: p.a
				};
			class H extends r.a.Component {
				constructor() {
					super(...arguments), this.onGetSubredditAutocomplete = e => {
						this.props.onGetSubredditAutocomplete(e)
					}
				}
				componentDidMount() {
					this.props.onGetInitialData(!!this.props.allowCrosspostableOnly)
				}
				render() {
					return r.a.createElement(B, K({}, this.props, {
						onGetSubredditAutocomplete: this.onGetSubredditAutocomplete
					}))
				}
			}
			var q = Object(d.b)(W, G)(H);
			class V extends r.a.Component {
				constructor() {
					super(...arguments), this.renderPicker = e => r.a.createElement(q, {
						allowCrosspostableOnly: this.props.allowCrosspostableOnly,
						className: this.props.className,
						disabled: this.props.disabled || !1,
						includeUserProfile: this.props.includeUserProfile,
						inputRef: this.props.inputRef,
						isValid: this.props.isValid,
						onChange: e.onChange,
						onFocus: e.onFocus,
						value: e.value,
						selectOnBlur: this.props.selectOnBlur || !1
					})
				}
				render() {
					return r.a.createElement(c, {
						onFocus: this.props.onFocus,
						onSelect: this.props.onSelect,
						renderPicker: this.renderPicker,
						value: this.props.value
					})
				}
			}
		},
		"./src/reddit/controls/TextButton/index.m.less": function(e, t, n) {
			e.exports = {
				textButton: "qYzY57HWQ8W424hj3s10-"
			}
		},
		"./src/reddit/controls/TextButton/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/TextButton/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("button", {
				children: e.children,
				className: Object(s.a)(a.a.textButton, e.className),
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				c = n.n(a);
			t.a = r.a.memo(e => {
				const t = e.size || i.c.XS;
				return r.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(s.a)(c.a.toggleSwitch, e.className, c.a[t], {
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
				}, r.a.createElement("div", {
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
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			}));
			var o = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Typography/index.m.less"),
				s = n.n(r);
			o.a.h1("heading1", s.a), o.a.h2("heading2", s.a), o.a.h3("heading3", s.a), o.a.h4("heading4", s.a);
			const i = o.a.h5("heading5", s.a),
				a = (o.a.h6("heading6", s.a), o.a.p("body1", s.a), o.a.p("body2", s.a)),
				c = (o.a.p("actionFont", s.a), o.a.p("metadata", s.a));
			o.a.p("metadata3", s.a)
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/InternalLink/index.tsx"),
				s = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				i = n.n(s);
			t.a = o.a.wrapped(r.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/endpoints/comment/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return p
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "b", (function() {
				return v
			}));
			var o = n("./src/config.ts"),
				r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = n("./src/reddit/models/Comment/addProfileImgParam.ts"),
				l = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				u = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const p = (e, t) => Object(s.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/save`),
					method: r.hb.POST,
					data: {
						id: t
					}
				}),
				m = (e, t) => Object(s.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/unsave`),
					method: r.hb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(s.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/lock`),
					method: r.hb.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(s.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/unlock`),
					method: r.hb.POST,
					data: {
						id: t
					}
				}),
				f = (e, t) => Object(s.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/approve`),
					method: r.hb.POST,
					data: {
						id: t
					}
				}),
				g = (e, t, n) => Object(s.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/remove`),
					method: r.hb.POST,
					data: {
						id: t,
						spam: n
					}
				}),
				E = (e, t) => Object(s.a)(Object(i.a)(e, [a.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: r.hb.POST,
					data: {
						id: t
					}
				}),
				C = (e, t) => Object(s.a)(Object(i.a)(e, [a.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: r.hb.POST,
					data: {
						id: t
					}
				}),
				y = (e, t) => Object(s.a)(Object(i.a)(e, [a.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: r.hb.POST,
					data: {
						id: t
					}
				}),
				x = (e, t, n, i) => {
					let a = Object(c.a)(Object(u.a)(Object(l.a)(`${o.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return i && (a = Object(d.a)(a)), Object(s.a)(e, {
						data: n,
						endpoint: a,
						method: r.hb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				v = (e, t, n, o) => Object(s.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/distinguish/${n}`),
					method: r.hb.POST,
					data: {
						id: t,
						sticky: o
					}
				})
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			}));
			var o = n("./src/config.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");
			const s = (e, t) => Object(r.a)(e, {
					method: "post",
					endpoint: `${o.a.metaUrl}/orders`,
					data: {
						price: "0",
						currency: "usd",
						products: [{
							productId: t.productId,
							quantity: "1"
						}],
						subredditId: t.subredditId
					}
				}),
				i = (e, t) => Object(r.a)(e, {
					method: "get",
					endpoint: `${o.a.metaUrl}/product-collections/${t}?types=emotes_pack`
				})
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return b
			})), n.d(t, "l", (function() {
				return f
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "g", (function() {
				return S
			}));
			var o = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/redditGQL/operations/AddPredictionDrafts.json"),
				s = n("./src/redditGQL/operations/CreatePredictionTournament.json"),
				i = n("./src/redditGQL/operations/EndPredictionTournament.json"),
				a = n("./src/redditGQL/operations/GetPredictionChipPackages.json"),
				c = n("./src/redditGQL/operations/GetPredictionCoinPackages.json"),
				d = n("./src/redditGQL/operations/GetPredictionToken.json"),
				l = n("./src/redditGQL/operations/GetTournaments.json"),
				u = n("./src/redditGQL/operations/ResolvePrediction.json"),
				p = n("./src/redditGQL/operations/SubredditTopPredictors.json"),
				m = n("./src/redditGQL/operations/UpdatePredictionTournament.json"),
				h = n("./src/redditGQL/operations/VotePrediction.json");
			const b = (e, t, n) => Object(o.a)(e, {
					...c,
					variables: {
						subredditName: t,
						includeFreePackage: n
					}
				}),
				f = (e, {
					postId: t,
					optionId: n,
					coinPackageId: r,
					price: s
				}) => Object(o.a)(e, {
					...h,
					variables: {
						input: {
							postId: t,
							optionId: n,
							coinPackageId: r,
							price: s
						}
					}
				}),
				g = (e, {
					postId: t,
					optionId: n
				}) => Object(o.a)(e, {
					...u,
					variables: {
						input: {
							postId: t,
							optionId: n
						}
					}
				});
			var E;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(E || (E = {}));
			const C = (e, {
					subredditId: t,
					period: n,
					top: r,
					includeCurrentRank: s,
					tournamentId: i
				}) => Object(o.a)(e, {
					...p,
					variables: {
						subredditId: t,
						period: n,
						top: r,
						includeCurrentRank: s,
						tournamentId: i
					}
				}),
				y = (e, t) => Object(o.a)(e, {
					...s,
					variables: {
						input: t
					}
				}),
				x = (e, t) => Object(o.a)(e, {
					...l,
					variables: t
				}),
				v = (e, t) => Object(o.a)(e, {
					...r,
					variables: {
						input: t
					}
				}),
				O = (e, t) => Object(o.a)(e, {
					...m,
					variables: {
						input: t
					}
				}),
				_ = (e, t) => Object(o.a)(e, {
					...i,
					variables: {
						input: t
					}
				}),
				k = (e, t) => Object(o.a)(e, {
					...a,
					variables: t
				}),
				S = (e, t) => Object(o.a)(e, {
					...d,
					variables: t
				})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "c", (function() {
				return m
			}));
			var o = n("./src/config.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				s = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/endpoints/governance/requester.ts"),
				a = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				c = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function d(e, t) {
				return Object(i.a)(e, {
					endpoint: `${o.a.metaUrl}/communities/${t.subredditId}/me`,
					method: "patch",
					data: {
						specialMemberships: {
							settings: {
								renew: !1
							}
						}
					}
				})
			}

			function l(e, t) {
				return Object(i.a)(e, {
					endpoint: `${o.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function u(e, t) {
				return Object(i.a)(e, {
					endpoint: `${o.a.metaUrl}/orders`,
					method: "post",
					data: {
						currency: "usd",
						orderTarget: "special_membership",
						price: t.trial ? "0" : t.price,
						products: [{
							productId: t.productId,
							quantity: "1"
						}],
						providerArgs: {
							paymentNonce: t.nonce,
							savePaymentMethod: !0
						},
						providerName: "braintree",
						subredditId: t.subredditId,
						targetArgs: {
							renew: !0,
							receiverName: t.username
						}
					}
				})
			}

			function p(e, t) {
				return Object(i.a)(Object(r.a)(e, [s.a]), {
					endpoint: `${e.apiUrl}/api/info?id=${t.join(",")}`,
					method: "get"
				}).then(e => {
					if (e.ok) {
						const t = e.body.data.children.map(({
							data: e
						}) => Object(c.a)(e)).reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							body: t
						}
					}
					return e
				})
			}
			async function m(e, t) {
				const n = await Object(i.a)(e, {
					endpoint: `${o.a.metaUrl}/orders`,
					method: "post",
					data: {
						...t,
						currency: "points",
						orderTarget: "special_membership",
						products: [{
							productId: "provisional_membership",
							quantity: "1"
						}],
						targetArgs: {
							renew: !1
						}
					}
				});
				if (!n.ok) throw new Error(`Error fetching provisional membership: ${Object(a.b)(n.error)}`);
				return n.body
			}
		},
		"./src/reddit/endpoints/economics/subredditPremium.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/merge.js"),
				r = n.n(o),
				s = n("./src/config.ts"),
				i = n("./src/reddit/endpoints/governance/badges.ts"),
				a = n("./src/reddit/endpoints/governance/community.ts"),
				c = n("./src/reddit/endpoints/governance/products/badges.ts"),
				d = n("./src/reddit/endpoints/governance/requester.ts");
			async function l(e, t, n) {
				const o = {
						subredditId: t,
						badges: {},
						errors: {},
						collections: {},
						products: {},
						subscription: void 0,
						userOwnedBadges: []
					},
					l = function(e, t) {
						return Object(d.a)(e, {
							method: "get",
							endpoint: `${s.a.metaUrl}/product-collections/${t}?types=badge`
						})
					}(e, t),
					u = Object(a.a)(e, {
						subredditId: t
					}),
					p = Object(c.b)(e, t),
					m = Object(i.c)(e, t, n),
					[h, b, f, g] = await Promise.all([l, u, p, m]);
				if (h.ok ? o.collections = h.body : o.errors.collections = h.error, b.ok) {
					const e = b.body;
					o.subscription = e.specialMemberships, o.communityRaw = e
				}
				return f.ok ? o.products = f.body : o.errors.products = f.error, g.ok ? (r()(o.badges, g.body.badges), o.userOwnedBadges = g.body.userOwnedBadges) : o.errors.userBadges = g.error, o
			}
			const u = (e, t) => Object(d.a)(e, {
				endpoint: `${s.a.metaUrl}/products/${t}?types=badge,membership`,
				method: "delete"
			})
		},
		"./src/reddit/endpoints/governance/badges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/config.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");
			async function s(e, t, n) {
				const s = Object(r.a)(e, {
						headers: {
							"X-HTTP-Method-Override": "GET"
						},
						method: "post",
						endpoint: `${o.a.metaUrl}/badges/${t}`,
						data: {
							selected: !0,
							users: n
						}
					}),
					i = await s;
				if (i.ok) {
					const e = {},
						t = {},
						n = i.body;
					return Object.keys(n).forEach(o => {
						const r = n[o];
						t[o] = r, e[r.userId] || (e[r.userId] = []), e[r.userId].push(r.id)
					}), {
						...i,
						body: {
							badges: t,
							usersAppliedBadges: e
						}
					}
				}
				return i
			}
			async function i(e, t, n) {
				const s = await Object(r.a)(e, {
					method: "get",
					endpoint: `${o.a.metaUrl}/badges/${t}?users=${n}`
				});
				if (s.ok) {
					const e = {},
						t = [],
						n = s.body;
					return Object.keys(n).forEach(o => {
						const r = n[o];
						e[o] = r, t.push(r.id)
					}), {
						...s,
						body: {
							badges: e,
							userOwnedBadges: t
						}
					}
				}
				return s
			}

			function a(e, t, n, s = !0) {
				return Object(r.a)(e, {
					method: "patch",
					endpoint: `${o.a.metaUrl}/badges/${t}/${n}`,
					data: {
						selected: s
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/community.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./src/config.ts"),
				r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");

			function i(e, t) {
				return Object(s.a)(e, {
					endpoint: `${o.a.metaUrl}/communities/${t.subredditId}/me`,
					method: r.hb.GET
				})
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "j", (function() {
				return i
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "l", (function() {
				return d
			})), n.d(t, "k", (function() {
				return l
			})), n.d(t, "m", (function() {
				return u
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "n", (function() {
				return E
			}));
			var o, r = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");

			function i(e) {
				switch (e) {
					case o.Ethereum:
					case o.EthTraderEthereum:
						return "Ethereum Main Network";
					case o.Rinkeby:
					case o.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function a(e) {
				switch (e) {
					case o.Ethereum:
					case o.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case o.Rinkeby:
					case o.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby";
					case o.ArbitrumRinkeby:
						return "https://meta-api.reddit.com/ethereum/ethereum:29199749760514"
				}
				throw new Error(`No JSON RPC url for provider: ${e}`)
			}

			function c(e) {
				switch (e) {
					case o.Ethereum:
					case o.EthTraderEthereum:
						return "homestead";
					case o.Rinkeby:
					case o.EthTraderRinkeby:
						return "rinkeby";
					case o.ArbitrumRinkeby:
						return 42161
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}

			function d(e) {
				return e === o.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function l(e, t, n) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: `${r.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function u(e, t, n) {
				return await Object(s.a)(e, {
					method: "post",
					endpoint: `${r.a.metaUrl}/crypto/${t}/registrations`,
					data: n
				})
			}
			async function p(e, t, n) {
				return await Object(s.a)(e, {
					method: "delete",
					endpoint: `${r.a.metaUrl}/crypto/${t}/registrations/${n}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumRinkeby = "ethereum:29199749760514", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader"
			}(o || (o = {}));
			const m = (e, t, n) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: n
				}),
				h = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				b = e => ({
					type: "claim",
					subredditId: e
				}),
				f = e => ({
					type: "subscribe",
					subredditId: e
				}),
				g = (e, t, n, o) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: n,
					amount: o
				});
			async function E(e, t) {
				return await Object(s.a)(e, {
					method: "put",
					endpoint: `${r.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/endpoints/governance/products/badges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			}));
			var o = n("./src/config.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function s(e, t) {
				return Object(r.a)(e, {
					method: "get",
					endpoint: `${o.a.metaUrl}/products/${t}?types=badge`
				})
			}

			function i(e, t) {
				return Object(r.a)(e, {
					method: "get",
					endpoint: `${o.a.metaUrl}/products/${t}?types=badge,membership`
				})
			}

			function a(e, t) {
				return Object(r.a)(e, {
					method: "post",
					endpoint: `${o.a.metaUrl}/orders`,
					data: t
				})
			}

			function c(e, t) {
				return Object(r.a)(e, {
					method: "post",
					endpoint: `${o.a.metaUrl}/orders`,
					data: {
						currency: "usd",
						price: t.price,
						products: t.products,
						providerArgs: {
							paymentNonce: t.nonce
						},
						providerName: "braintree",
						subredditId: t.subredditId
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var o = n("./src/config.ts"),
				r = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				s = n("./src/reddit/endpoints/governance/requester.ts");

			function i(e, t) {
				return Object(s.a)(e, {
					endpoint: `${o.a.metaUrl}/wallets/${t.subredditId}/me`,
					method: r.hb.GET
				}).then(e => {
					if (e.ok) {
						const n = e.body,
							o = {
								[t.subredditId]: n
							};
						return {
							...e,
							body: o
						}
					}
					return e
				})
			}

			function a(e, t) {
				return Object(s.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${o.a.metaUrl}/wallets/${t.subredditId}`,
					method: r.hb.POST,
					data: t.userIds
				}).then(e => e.ok ? {
					...e,
					body: {
						wallets: e.body
					}
				} : e)
			}
		},
		"./src/reddit/endpoints/post/convert.ts": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				s = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				a = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = n("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, n) => {
				const d = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === c.h.MARKDOWN ? d.richtext_json = n : d.markdown_text = n, Object(r.a)(Object(s.a)(e, [i.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: o.hb.POST,
					data: d
				})
			}
		},
		"./src/reddit/endpoints/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "a", (function() {
				return v
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/reddit/helpers/flair.ts"),
				s = n("./src/reddit/helpers/richTextJson/index.ts"),
				i = n("./src/reddit/models/Post/index.ts"),
				a = n("./src/reddit/models/PostCreationForm/index.ts"),
				c = n("./src/reddit/models/ScheduledPost/index.ts"),
				d = n("./src/redditGQL/operations/CreateScheduledPost.json"),
				l = n("./src/redditGQL/operations/SubredditScheduledPosts.json");
			const u = (e, t) => Object(o.a)(e, {
					...l,
					variables: {
						...t,
						includeRecurring: !(!t.includeRecurring || !t.includeRecurring.recurringFirst),
						includeStandalone: !(!t.includeStandalone || !t.includeStandalone.standaloneFirst),
						recurringAfter: t.includeRecurring ? t.includeRecurring.recurringAfter : void 0,
						recurringFirst: t.includeRecurring ? t.includeRecurring.recurringFirst : void 0,
						standaloneAfter: t.includeStandalone ? t.includeStandalone.standaloneAfter : void 0,
						standaloneFirst: t.includeStandalone ? t.includeStandalone.standaloneFirst : void 0
					}
				}),
				p = (e, t) => {
					if (!e.ok || !e.body) return !1;
					const n = e.body;
					return !!(n.data && n.data.subredditInfoById && n.data.subredditInfoById.scheduledPosts && n.data.subredditInfoById.scheduledPosts[t] && n.data.subredditInfoById.scheduledPosts[t].edges)
				},
				m = (e, t) => !(!e.ok || !e.body) && (!(t.includeStandalone && !(e => p(e, c.f.standalonePosts))(e)) && !(t.includeRecurring && !(e => p(e, c.f.recurringPosts))(e))),
				h = ({
					poll: e,
					schedule: t,
					submission: n,
					subredditId: o
				}) => ({
					collectionId: n.collectionId || "",
					discussionType: n.isChatPost ? i.b.Chat : i.b.Comment,
					isContestMode: n.isContestMode,
					isPostAsMetaMod: n.isPostAsMetaMod,
					isSpoiler: n.isSpoiler,
					isNsfw: n.isNSFW,
					poll: e && x(e),
					title: n.title,
					isOriginalContent: n.isOC,
					flair: n.flair ? {
						id: n.flair.templateId,
						text: Object(r.g)(n.flair)
					} : {},
					sticky: n.sticky,
					subredditId: o,
					suggestedCommentSort: n.suggestedSort,
					isSendReplies: n.sendReplies,
					...b(t),
					...C(n),
					assetIds: y(n)
				}),
				b = e => ({
					scheduling: {
						publishAt: e.submitDate,
						clientTimezone: e.timezoneName,
						frequency: e.recurrenceInfo ? e.recurrenceInfo.frequency : void 0,
						interval: e.recurrenceInfo ? e.recurrenceInfo.interval : void 0,
						byMonthDays: e.recurrenceInfo ? e.recurrenceInfo.byMonthDays : void 0,
						byWeekDays: e.recurrenceInfo ? e.recurrenceInfo.byWeekDays : void 0
					}
				}),
				f = e => ({
					scheduling: Object.keys(e).length > 0 ? {
						clientTimezone: e.timezoneName || void 0,
						publishAt: e.submitDate || void 0,
						frequency: e.recurrenceInfo ? e.recurrenceInfo.frequency : void 0,
						interval: e.recurrenceInfo ? e.recurrenceInfo.interval : void 0,
						byMonthDays: e.recurrenceInfo ? e.recurrenceInfo.byMonthDays : void 0,
						byWeekDays: e.recurrenceInfo ? e.recurrenceInfo.byWeekDays : void 0
					} : void 0
				}),
				g = ({
					poll: e,
					schedule: t,
					scheduledPostId: n,
					submission: o,
					subredditId: r
				}) => {
					const s = h({
						poll: e,
						schedule: t,
						submission: o,
						subredditId: r
					});
					return {
						id: n,
						...s,
						flair: Object.keys(s.flair || {}).length ? {
							...s.flair
						} : {
							id: "",
							text: ""
						}
					}
				},
				E = e => /^https?:\/\//i.test(e) ? e : `http://${e}`,
				C = e => {
					switch (e.kind) {
						case a.o.RICH_TEXT:
							return {
								content: {
									richText: JSON.stringify({
										document: e.document
									})
								}
							};
						case a.o.MARKDOWN:
							return {
								content: {
									markdown: e.markdown
								}
							};
						case a.o.LINK:
							return {
								content: {}, link: {
									url: E(e.url)
								}
							};
						default:
							return {
								content: {}
							}
					}
				},
				y = e => {
					let t = [];
					if (e.document) {
						const n = e.document || [];
						t = Object(s.c)(n)
					}
					return t
				},
				x = e => {
					if (e && e.options && e.duration && (e.options = e.options.map(e => ({
							text: e.text.trim()
						})).filter(e => !!e.text), e.options.length)) return e.duration = Math.floor(e.duration / 864e5), e
				},
				v = (e, t) => Object(o.a)(e, {
					...d,
					variables: {
						input: t
					}
				})
		},
		"./src/reddit/endpoints/scheduledPosts/update.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./src/redditGQL/operations/UpdateScheduledPost.json"),
				r = n("./src/lib/makeGqlRequest/index.ts");
			const s = (e, t) => Object(r.a)(e, {
				...o,
				variables: {
					input: t
				}
			})
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const o = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(s.b)(o)(e => {
					const {
						featureEnabled: o,
						...s
					} = e, i = s;
					return o ? r.a.createElement(t, i) : void 0 !== n ? r.a.createElement(n, i) : null
				})
			}
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function o(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function r(e) {
				const {
					subreddit: t,
					amount: n,
					memo: o,
					cta: r
				} = e;
				return t && n && o && r ? {
					subreddit: t,
					amount: n,
					memo: o,
					cta: r
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/helpers/dragDropContext/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react-dnd/lib/index.js"),
				r = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				s = n.n(r);
			t.a = Object(o.DragDropContext)(s.a)
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, n) {
			"use strict";

			function o(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let n = 0;
				return e.placement && t.placement && (n = e.placement.localeCompare(t.placement)), 0 === n && e.position && t.position && (n = e.position - t.position), 0 === n && (n = e.title.localeCompare(t.title)), n
			}

			function r(e) {
				return [...e].sort(o)
			}
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/helpers/externalAccount/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			const o = () => new BroadcastChannel("external_account"),
				r = e => {
					const t = o();
					t.postMessage({
						type: "connected",
						provider: e
					}), t.close()
				}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			t.a = () => ({
				type: r.G.SERVER_ERROR,
				fields: [{
					field: "",
					msg: o.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/bignumber.js/bignumber.js"),
				r = n("./src/lib/prettyPrintNumber/index.ts");

			function s(e, t) {
				const n = new o.BigNumber(e),
					r = new o.BigNumber(t || 1);
				return n.dividedToIntegerBy(r).toString()
			}

			function i(e, t) {
				return Object(r.b)(parseInt(s(e, t), 10))
			}

			function a(e, t) {
				const n = new o.BigNumber(e),
					r = new o.BigNumber(t || 1);
				return n.multipliedBy(r).toFixed(0)
			}
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js");

			function r(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function s(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(r).join(" ") : o.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function i(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "d", (function() {
				return b
			}));
			const o = e => e.subredditInfoById.scheduledPosts.recurringPosts ? {
					recurringPosts: {
						models: m(e.subredditInfoById.scheduledPosts.recurringPosts.edges),
						pageInfo: {
							...e.subredditInfoById.scheduledPosts.recurringPosts.pageInfo
						}
					},
					recurringPostsIds: e.subredditInfoById.scheduledPosts.recurringPosts.edges.map(e => e.node.id)
				} : {},
				r = e => e.subredditInfoById.scheduledPosts.standalonePosts ? {
					standalonePosts: {
						models: u(e.subredditInfoById.scheduledPosts.standalonePosts.edges),
						pageInfo: {
							...e.subredditInfoById.scheduledPosts.standalonePosts.pageInfo
						}
					},
					standalonePostsIds: e.subredditInfoById.scheduledPosts.standalonePosts.edges.map(e => e.node.id)
				} : {},
				s = e => ({
					...e,
					subredditInfoById: {
						id: e.subredditInfoById.id,
						scheduledPosts: {
							...o(e),
							...r(e)
						}
					}
				}),
				i = e => e.subredditInfoById.scheduledPosts && !!e.subredditInfoById.scheduledPosts.recurringPosts && !!e.subredditInfoById.scheduledPosts.recurringPostsIds,
				a = e => e.subredditInfoById.scheduledPosts && !!e.subredditInfoById.scheduledPosts.standalonePosts && !!e.subredditInfoById.scheduledPosts.standalonePostsIds,
				c = e => i(e) && a(e),
				d = e => !i(e) && a(e),
				l = e => i(e) && !a(e),
				u = e => e.map(e => p(e.node)),
				p = e => ({
					id: e.id,
					title: e.title,
					body: e.body,
					postKind: e.postKind,
					collectionId: e.collections.edges.length ? e.collections.edges[0].node.id : void 0,
					discussionType: e.discussionType,
					isContestMode: e.isContestMode,
					isPostAsMetaMod: e.isPostAsMetaMod,
					isSpoiler: e.isSpoiler,
					isNsfw: e.isNsfw,
					isOriginalContent: e.isOriginalContent,
					isSendReplies: e.isSendReplies,
					isSticky: !!e.sticky && "NONE" !== e.sticky,
					mediaAssets: e.mediaAssets,
					subreddit: {
						...e.subreddit
					},
					suggestedCommentSort: e.suggestedCommentSort,
					owner: {
						...e.owner
					},
					poll: e.poll,
					contentType: e.contentType,
					clientTimezone: e.clientTimezone,
					publishAt: e.publishAt.split(".")[0],
					state: e.state,
					flair: e.flair ? {
						...e.flair
					} : void 0,
					sticky: e.sticky,
					isModDistinguished: "MODERATOR" === e.distinguishedAs,
					url: e.url
				}),
				m = e => e.map(e => h(e.node)),
				h = e => ({
					...p(e),
					frequency: e.frequency,
					byMonthDays: e.byMonthDays || [],
					byWeekDays: e.byWeekDays || [],
					interval: e.interval || 1
				}),
				b = e => (e => !!e.frequency && !!e.interval)(e) ? h(e) : p(e)
		},
		"./src/reddit/helpers/isArrayEqual.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/lodash/isEqual.js"),
				r = n.n(o),
				s = n("./node_modules/lodash/xorWith.js"),
				i = n.n(s);
			t.a = (e, t) => {
				const n = i()(e, t, r.a);
				return !(!n || 0 !== n.length)
			}
		},
		"./src/reddit/helpers/ordinal/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				const t = ["th", "st", "nd", "rd"],
					n = e % 100;
				return e + (t[(n - 20) % 10] || t[n] || t[0])
			}
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			}));
			var o = n("./src/lib/constants/index.ts");
			const r = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case o.G.NO_STRIPE_SUBSCRIPTION:
							case o.G.USER_DOESNT_EXIST:
							case o.G.USER_REQUIRED_ERROR:
							case o.G.VALIDATION_ERROR:
								return e;
							case o.G.NO_USER:
							case o.G.NO_TEXT:
							case o.G.NO_URL:
								return o.G.VALIDATION_ERROR;
							case o.G.CREDIT_CARD_FAILURE:
							case o.G.CREDIT_CARD_FAILURE_GENERIC:
								return o.G.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return o.G.SUBMIT_VALIDATION_ERROR
						}
					}
					return o.G.VALIDATION_ERROR
				},
				s = e => {
					const t = e.body;
					return {
						type: r(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				i = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: s(e)
					} : e
				};
			t.a = s
		},
		"./src/reddit/helpers/richTextEditor/index.ts": function(e, t, n) {
			"use strict";
			var o;
			n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e[e.Post = 0] = "Post", e[e.Comment = 1] = "Comment"
				}(o || (o = {}))
		},
		"./src/reddit/helpers/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "g", (function() {
				return _
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js");
			n("./node_modules/react/index.js");
			const r = function(e) {
				if (void 0 === e) throw new Error("invariant(...): Second argument must be a string.")
			};

			function s(e, t, ...n) {
				if (r(t), !e) {
					let e;
					if (void 0 === t) e = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
					else {
						let o = 0;
						(e = new Error(t.replace(/%s/g, () => String(n[o++])))).name = "Invariant Violation"
					}
					throw e.framesToPop = 1, e
				}
			}
			const i = {
					AND: "AND",
					NONE: "NONE",
					OR: "OR"
				},
				a = {
					COMMA: "COMMA",
					SEMICOLON: "SEMICOLON"
				};
			var c = function(e, t, n) {
					const r = e.length;
					if (0 === r) return "";
					if (1 === r) return e[0];
					const c = e[r - 1];
					let d = e[0];
					for (let s = 1; s < r - 1; ++s) switch (n) {
						case a.SEMICOLON:
							d = o.fbt._("{previous items}; {following items}", [o.fbt._param("previous items", d), o.fbt._param("following items", e[s])], {
								hk: "4hs4xq"
							});
							break;
						default:
							d = o.fbt._("{previous items}, {following items}", [o.fbt._param("previous items", d), o.fbt._param("following items", e[s])], {
								hk: "2z8RMb"
							})
					}
					return function(e, t, n, r) {
						switch (n) {
							case i.AND:
								return o.fbt._("{list of items} and {last item }", [o.fbt._param("list of items", e), o.fbt._param("last item ", t)], {
									hk: "1ylan1"
								});
							case i.OR:
								return o.fbt._("{list of items} or {last item}", [o.fbt._param("list of items", e), o.fbt._param("last item", t)], {
									hk: "3q8AmB"
								});
							case i.NONE:
								switch (r) {
									case a.SEMICOLON:
										return o.fbt._("{previous item}; {last item}", [o.fbt._param("previous item", e), o.fbt._param("last item", t)], {
											hk: "1h77rJ"
										});
									default:
										return o.fbt._("{list of items}, {last item}", [o.fbt._param("list of items", e), o.fbt._param("last item", t)], {
											hk: "3Q0iaX"
										})
								}
								default:
									s(!1, "Invalid conjunction %s provided to intlList", n)
						}
					}(d, c, t || i.AND, n || a.COMMA)
				},
				d = n("./src/lib/timezone/index.ts"),
				l = n("./src/reddit/helpers/isArrayEqual.ts"),
				u = n("./src/reddit/helpers/ordinal/index.ts"),
				p = n("./src/reddit/models/ScheduledPost/index.ts");
			const m = e => {
					return `${e.toLocaleDateString(void 0,{month:"numeric",day:"numeric"})} @ ${e.toLocaleTimeString(void 0,{hour:"numeric",minute:"numeric"}).replace(" ","").toLowerCase()}`
				},
				h = (e, t) => {
					if (e && t) {
						const n = Object(d.f)(f(e, t)),
							r = m(n);
						return o.fbt._("Submit post at {time}", [o.fbt._param("time", r)], {
							hk: "IZ3L"
						})
					}
					return o.fbt._("Submit post at scheduled event time", null, {
						hk: "lYsoU"
					})
				},
				b = e => e.slice(0, 5),
				f = (e, t) => `${e}T${b(t)}:00`,
				g = e => {
					const [t, n] = e.split("T");
					return [t, b(n)]
				},
				E = e => {
					const [t, n] = g(e);
					if (t && n) {
						const e = Object(d.f)(f(t, n));
						return m(e)
					}
					return ""
				},
				C = e => {
					const t = Object(d.d)(e);
					let n, o = e;
					if (t) {
						n = t.offset, o = `(GMT${Object(d.e)(t.offset)}) ${e.replace("/"," - ").replace(/_/g," ")}`
					}
					return {
						name: e,
						displayText: o,
						offset: n
					}
				},
				y = e => "string" == typeof e,
				x = e => {
					const t = new Date,
						n = e - t.getDay();
					return t.setDate(t.getDate() + n), t.toLocaleDateString(void 0, {
						weekday: "long"
					})
				},
				v = e => {
					const t = (e => {
						const [t, n] = g(e);
						if (t && n) {
							return Object(d.f)(f(t, n)).toLocaleTimeString(void 0, {
								hour: "numeric",
								minute: "numeric"
							})
						}
						return ""
					})(e.publishAt);
					if (e.frequency === p.d.Hourly) return 2 === e.interval ? o.fbt._("Every other hour", null, {
						hk: "64vzK"
					}) : e.interval > 1 ? o.fbt._("Every {hour interval} hours", [o.fbt._param("hour interval", e.interval.toString())], {
						hk: "3x8zaD"
					}) : o.fbt._("Every hour", null, {
						hk: "1VzCs"
					});
					if (e.frequency === p.d.Daily) return 2 === e.interval ? o.fbt._("Every other day at {start time}", [o.fbt._param("start time", t)], {
						hk: "yTynp"
					}) : e.interval > 1 ? o.fbt._("Every {day interval} days at {start time}", [o.fbt._param("day interval", e.interval.toString()), o.fbt._param("start time", t)], {
						hk: "2OoGlG"
					}) : o.fbt._("Every day at {start time}", [o.fbt._param("start time", t)], {
						hk: "1cvwm2"
					});
					if (e.frequency === p.d.Weekly) {
						const n = (e => c(e.map(p.k).sort((e, t) => e - t).map(x), i.AND, a.COMMA))(e.byWeekDays);
						return 2 === e.interval ? o.fbt._("Every other week on {days of week } at {start time}", [o.fbt._param("days of week ", n), o.fbt._param("start time", t)], {
							hk: "43xwaa"
						}) : e.interval > 1 ? o.fbt._("Every {interval} weeks on {days of week} at {start time}", [o.fbt._param("interval", e.interval.toString()), o.fbt._param("days of week", n), o.fbt._param("start time", t)], {
							hk: "2IVbH"
						}) : o.fbt._("Every week on {days of week} at {start time}", [o.fbt._param("days of week", n), o.fbt._param("start time", t)], {
							hk: "2Zl0L"
						})
					}
					const n = (e => c(e.sort((e, t) => e - t).map(u.a), i.AND, a.COMMA))(e.byMonthDays);
					return 2 === e.interval ? o.fbt._({
						"*": "Every other month on the {days of month} days at {start time}",
						_1: "Every other month on the {days of month} day at {start time}"
					}, [o.fbt._param("days of month", n), o.fbt._plural(e.byMonthDays.length), o.fbt._param("start time", t)], {
						hk: "okH9o"
					}) : e.interval > 1 ? o.fbt._({
						"*": "Every {interval} months on the {days of month} days at {start time}",
						_1: "Every {interval} months on the {days of month} day at {start time}"
					}, [o.fbt._param("interval", e.interval.toString()), o.fbt._param("days of month", n), o.fbt._plural(e.byMonthDays.length), o.fbt._param("start time", t)], {
						hk: "KqN3x"
					}) : o.fbt._({
						"*": "Every month on the {days of month} days at {start time}",
						_1: "Every month on the {days of month} day at {start time}"
					}, [o.fbt._param("days of month", n), o.fbt._plural(e.byMonthDays.length), o.fbt._param("start time", t)], {
						hk: "1jBuYc"
					})
				},
				O = e => {
					let t = null;
					e.frequency && (t = e.frequency), (e.byWeekDays.length > 1 || e.byMonthDays.length > 1 || e.interval > 1) && (t = p.b);
					const n = Object(d.f)(e.publishAt),
						o = Object(p.q)(n.getDay()),
						r = n.getDate();
					return 1 === e.byWeekDays.length && e.byWeekDays[0] !== o && (t = p.b), 1 === e.byMonthDays.length && e.byMonthDays[0] !== r && (t = p.b), {
						recurrenceInfo: e.frequency ? {
							frequency: e.frequency,
							byMonthDays: e.byMonthDays,
							byWeekDays: e.byWeekDays,
							interval: e.interval
						} : null,
						frequencyOption: t,
						submitDate: e.publishAt,
						timezoneName: e.clientTimezone
					}
				},
				_ = (e, t) => {
					if (!e && t || e && !t) return !1;
					if (!e && !t) return !0;
					for (const n in e) {
						if (!t) return !1;
						if (e.hasOwnProperty(n)) {
							if (Array.isArray(e[n]) && (!Array.isArray(t[n]) || !Object(l.a)(e[n], t[n]))) return !1;
							if (e[n] !== t[n]) return !1
						}
					}
					return !0
				}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, n) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				s = n.n(r);
			const i = ({
					isLoading: e
				}) => Object(o.a)(s.a.loadingBackground, {
					[s.a["m-loading"]]: e
				}),
				a = e => Object(o.a)(s.a.loadingBar, i(e))
		},
		"./src/reddit/helpers/styles/postBackgroundColor.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			n("./node_modules/polished/dist/polished.es.js");
			var o = n("./src/reddit/models/Theme/NewColorSystem/index.ts");

			function r(e) {
				return e.flairStyleTemplate && e.flairStyleTemplate.postBackgroundColor ? e.flairStyleTemplate.postBackgroundColor : Object(o.a)(e).post
			}
		},
		"./src/reddit/helpers/toggleBodyScroll/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			}));
			var o = n("./src/reddit/constants/elementIds.ts");
			let r;
			const s = () => {
					const e = document.body.dataset.previousOverflow;
					if (!e) return;
					document.body.removeAttribute("data-previous-overflow");
					const t = document.getElementById(o.c);
					document.body.style.overflow = e, document.body.style.marginRight = "", t && (t.style.marginRight = "")
				},
				i = () => {
					if (document.body.dataset.previousOverflow) return;
					const e = document.body.style.overflow || "auto";
					document.body.dataset.previousOverflow = e, r || (r = a(document.body)), document.body.style.overflow = "hidden", document.body.style.marginRight = `${r}px`;
					const t = document.getElementById(o.c);
					t && (t.style.marginRight = `${r}px`)
				},
				a = e => {
					const t = e.getBoundingClientRect();
					return window.innerWidth - (t.left + t.right)
				},
				c = e => {
					if (!e || !document.body) return 0;
					const t = a(document.body),
						n = e.offsetWidth - e.scrollWidth;
					return t || n
				}
		},
		"./src/reddit/helpers/trackers/comment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var o = n("./src/telemetry/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const s = ({
					state: e,
					commentId: t
				}) => Object(o.a)({
					source: "comment",
					action: "view",
					noun: "comment",
					...r.defaults(e),
					profile: r.profile(e),
					post: r.post(e, t),
					media: r.media(e, t),
					subreddit: r.subreddit(e),
					comment: r.comment(e, t)
				}),
				i = ({
					state: e,
					commentId: t
				}) => Object(o.a)({
					source: "comment",
					action: "consume",
					noun: "comment",
					...r.defaults(e),
					profile: r.profile(e),
					post: r.post(e, t),
					media: r.media(e, t),
					subreddit: r.subreddit(e),
					comment: r.comment(e, t)
				}),
				a = e => t => ({
					source: "online_presence",
					action: "view",
					noun: "user",
					user: r.user(t),
					subreddit: r.subreddit(t),
					post: r.post(t, e),
					actionInfo: r.actionInfo(t),
					app: r.app(t),
					referrer: r.referrer(t),
					session: r.session(t)
				})
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return u
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return g
			}));
			var o = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/helpers/trackers/userFlair.ts"),
				s = n("./src/reddit/models/PostDraft/index.ts"),
				i = n("./src/reddit/selectors/comments.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/index.ts");
			const l = e => {
					const t = Object(a.m)(e);
					return {
						source: "comment_composer",
						action: o.c.CLICK,
						...Object(c.defaults)(e),
						screen: Object(c.screen)(e),
						subreddit: Object(c.subreddit)(e),
						post: t ? Object(c.post)(e, t) : null,
						profile: Object(c.profile)(e)
					}
				},
				u = (e, t, n, o) => {
					const s = {
							commentId: o,
							commentsPageKey: n
						},
						a = o && Object(i.j)(e, s) || 0;
					return Object(d.a)({
						noun: "comment",
						...l(e),
						comment: o ? Object(c.comment)(e, o) : null,
						listing: Object(c.listing)(e, void 0, {
							depth: a
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: Object(r.d)(e)
					})
				},
				p = (e, t, n, o) => {
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
							parentId: o,
							postId: n
						}
					})
				},
				m = e => Object(d.a)({
					noun: "cancel",
					...l(e)
				}),
				h = (e, t) => {
					t === s.c.replyToPost && Object(d.a)({
						noun: "input",
						...l(e)
					})
				},
				b = (e, t) => Object(d.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(c.defaults)(t),
					screen: Object(c.screen)(t),
					subreddit: Object(c.subreddit)(t),
					post: Object(c.post)(t, e)
				}),
				f = e => Object(d.a)({
					noun: "edit",
					...l(e)
				}),
				g = e => Object(d.a)({
					noun: "save_edit",
					...l(e)
				})
		},
		"./src/reddit/helpers/trackers/communityAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "i", (function() {
				return g
			}));
			var o = n("./src/reddit/models/Gold/Award.ts"),
				r = n("./src/reddit/selectors/telemetry.ts"),
				s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				i = n("./src/reddit/helpers/trackers/gild.ts");
			const a = e => ({
					...r.defaults(e),
					screen: r.screen(e),
					subreddit: r.subreddit(e),
					userSubreddit: r.userSubreddit(e)
				}),
				c = e => ({
					awardId: e.id,
					awardName: e.name,
					isModAward: e.awardType === o.f.Moderator,
					isTemporatyAward: !!e.endsAt,
					numberCoins: e.coinPrice,
					numberMonths: Math.floor((e.daysOfPremium || 0) / 30),
					numberCoinsToRecipient: e.coinReward || 0,
					numberCoinsToCommunity: e.subredditCoinReward || 0,
					type: Object(i.getAwardTypeFromAward)(e)
				}),
				d = () => e => ({
					...a(e),
					source: "awards",
					action: "click",
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: "create"
				}),
				l = e => t => ({
					...a(t),
					source: "awards",
					action: "click",
					correlationId: Object(s.c)(s.a.AwardDeletionFlow),
					noun: "delete",
					goldPurchase: e ? c(e) : null,
					media: e ? {
						url: e.icon.url
					} : null
				}),
				u = (e, t, n) => o => ({
					...a(o),
					source: "create_award",
					action: e,
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n
				}),
				p = (e, t, n, o) => r => ({
					...a(r),
					source: "create_award",
					action: "upload",
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: "image",
					actionInfo: o ? {
						reason: o
					} : {
						success: !0
					},
					media: t ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						uploadDuration: n,
						url: e,
						width: t.width
					} : null
				}),
				m = (e, t, n) => o => ({
					...a(o),
					source: "create_award",
					action: "click",
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: "create",
					media: t && e ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						url: e,
						width: t.width
					} : null,
					goldPurchase: n ? c(n) : null
				}),
				h = (e, t, n) => o => ({
					...a(o),
					source: "create_award",
					action: e,
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n ? c(n) : null
				}),
				b = (e, t, n) => o => ({
					...a(o),
					source: "awards",
					action: "click",
					noun: n,
					goldPurchase: c(e),
					profile: r.profileById(o, t),
					subreddit: r.subredditById(o, t)
				}),
				f = (e, t) => b(e, t, "disable_in_community"),
				g = (e, t) => b(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "getAwardTypeFromAward", (function() {
				return d
			})), n.d(t, "clickGildEvent", (function() {
				return p
			})), n.d(t, "clickRpanGiveAward", (function() {
				return m
			})), n.d(t, "clickAddAward", (function() {
				return h
			})), n.d(t, "clickHideAward", (function() {
				return b
			})), n.d(t, "clickConfirmHideAward", (function() {
				return f
			})), n.d(t, "clickCancelHideAward", (function() {
				return g
			})), n.d(t, "clickAwardReportFlow", (function() {
				return C
			})), n.d(t, "clickCancelAwardReportFlow", (function() {
				return y
			})), n.d(t, "clickFlagAwardUsage", (function() {
				return x
			})), n.d(t, "clickCancelFlagAwardUsage", (function() {
				return v
			})), n.d(t, "clickConfirmFlagAwardUsage", (function() {
				return O
			})), n.d(t, "clickReportAward", (function() {
				return _
			})), n.d(t, "clickCancelReportAward", (function() {
				return k
			})), n.d(t, "clickConfirmReportAward", (function() {
				return S
			})), n.d(t, "viewGildModalEvent", (function() {
				return j
			})), n.d(t, "clickSelectAwardEvent", (function() {
				return T
			})), n.d(t, "triggerAnonymousEvent", (function() {
				return w
			})), n.d(t, "clickMessageInputEvent", (function() {
				return I
			})), n.d(t, "typeMessageInputEvent", (function() {
				return P
			})), n.d(t, "clickLearnMoreLinkEvent", (function() {
				return R
			})), n.d(t, "clickQuestionMarkEvent", (function() {
				return M
			})), n.d(t, "clickConfirmAwardEvent", (function() {
				return N
			})), n.d(t, "clickGetPremiumEvent", (function() {
				return D
			})), n.d(t, "clickAddCoinsButtonEvent", (function() {
				return L
			})), n.d(t, "clickNextButtonEvent", (function() {
				return A
			})), n.d(t, "clickCloseGildModalEvent", (function() {
				return F
			})), n.d(t, "viewKarmaSuccessEvent", (function() {
				return B
			})), n.d(t, "clickFilterEvent", (function() {
				return U
			})), n.d(t, "clickNextFiltersEvent", (function() {
				return K
			})), n.d(t, "clickPreviousFiltersEvent", (function() {
				return W
			}));
			var o = n("./src/reddit/models/Gold/Award.ts"),
				r = n("./src/reddit/selectors/telemetry.ts"),
				s = n("./src/telemetry/models/GoldPurchase.ts"),
				i = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/helpers/isComment.ts"),
				c = n("./src/reddit/selectors/gild.ts");
			const d = e => e.awardType === o.f.Global && e.awardSubType === o.d.Appreciation ? s.GoldPurchaseType.GidAppreciation : e.awardType === o.f.Global && e.awardSubType === o.d.Premium ? s.GoldPurchaseType.GidPremium : e.awardSubType === o.d.Group ? s.GoldPurchaseType.GidGroup : e.awardType === o.f.Community ? s.GoldPurchaseType.GidCommunity : e.awardType === o.f.Moderator ? s.GoldPurchaseType.GidMod : e.awardType === o.f.Global && e.awardSubType === o.d.Global ? s.GoldPurchaseType.GidGlobal : s.GoldPurchaseType.GidUnknown,
				l = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: d(e),
					...t
				}),
				u = (e, t) => ({
					...r.defaults(e),
					comment: t ? r.comment(e, t) : void 0,
					correlationId: Object(c.b)(e) || Object(i.d)(i.a.GildingFlow, !1),
					post: t ? r.post(e, t) : void 0,
					screen: r.screen(e),
					subreddit: r.subreddit(e),
					userSubreddit: r.userSubreddit(e)
				}),
				p = e => t => ({
					...u(t, e),
					source: Object(a.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold"
				}),
				m = e => t => ({
					...u(t, e),
					source: "stream_player",
					action: "click",
					noun: "give_gold"
				}),
				h = e => t => ({
					...u(t, e),
					source: Object(a.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award"
				}),
				b = (e, t) => n => ({
					...u(n, t),
					source: Object(a.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: l(e)
				}),
				f = (e, t) => n => ({
					...u(n, t),
					source: Object(a.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: l(e)
				}),
				g = (e, t) => n => ({
					...u(n, t),
					source: Object(a.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: l(e)
				}),
				E = e => (t, n) => o => ({
					...u(o, n),
					source: Object(a.a)(n) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: l(t)
				}),
				C = E("award_hovercard_report"),
				y = E("cancel_award_hovercard_report"),
				x = E("flag_award"),
				v = E("cancel_flag_award"),
				O = E("confirm_flag_award"),
				_ = E("report_community_award"),
				k = E("cancel_report_community_award"),
				S = E("confirm_report_community_award"),
				j = (e, t, n) => o => ({
					...u(o, n),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				T = (e, t, n) => o => ({
					...u(o, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: l(e, n)
				}),
				w = (e, t) => n => ({
					...u(n, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				I = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				P = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				R = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				M = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				N = (e, t) => n => ({
					...u(n, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(a.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				D = (e, t) => n => ({
					...u(n, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(a.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				L = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "add_coins"
				}),
				A = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "next"
				}),
				F = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "close"
				}),
				B = ({
					award: e,
					awardeeKarmaEarned: t,
					awarderKarmaEarned: n,
					numberCoins: o,
					thingId: r
				}) => s => ({
					...u(s, r),
					source: "give_gold",
					action: "view",
					noun: "karma_success",
					goldPurchase: {
						contentType: Object(a.a)(r) ? "comment" : "post",
						awardeeKarmaEarned: t,
						awarderKarmaEarned: n,
						numberCoins: o,
						...l(e)
					}
				}),
				U = e => t => ({
					...u(t),
					source: "give_gold",
					action: "click",
					noun: "filter",
					goldPurchase: {
						filterId: e.tag,
						filterName: e.content.markdown
					}
				}),
				K = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				W = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return b
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "i", (function() {
				return O
			}));
			var o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/models/Gold/ProductOffer.ts"),
				s = n("./src/reddit/selectors/gold/giveAwards.ts"),
				i = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				a = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/models/GoldPurchase.ts"),
				l = n("./src/telemetry/models/Payment.ts"),
				u = n("./src/reddit/helpers/trackers/gild.ts"),
				p = n("./src/reddit/helpers/correlationIdTracker.ts"),
				m = n("./src/reddit/helpers/isComment.ts"),
				h = n("./src/reddit/helpers/trackers/communityAwards.ts");
			const b = (e, t) => {
					const {
						thingId: n,
						packageId: l
					} = t, b = !!n, f = s.b(e), g = f ? Object(u.getAwardTypeFromAward)(f) : null, E = b ? g : a.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, C = n ? Object(m.a)(n) ? "comment" : "post" : void 0, y = l || a.t(e), x = [...Object(i.d)(e), ...Object(i.f)(e)].filter(e => e.mobileId === y)[0], v = t.offerContext || (f && 0 === f.coinPrice ? r.a.StorefrontFreeAward : Object(r.d)(x, b)), O = x ? Math.round(1e4 * (x.baselinePennies - x.pennies) / x.baselinePennies) / 100 : 0, _ = x ? Math.round(1e4 * (x.coins - x.baselineCoins) / x.coins) / 100 : 0, k = x ? x.baselinePennies !== x.pennies ? `${O}_percent_price` : x.baselineCoins !== x.coins ? `${_}_percent_bonus` : void 0 : void 0, S = E === d.GoldPurchaseType.Premium ? o.vb : x ? x.pennies : void 0;
					return {
						...c.defaults(e),
						comment: n ? c.comment(e, n) : null,
						correlationId: a.r(e) || Object(p.d)(p.a.GoldPayment, !1),
						post: n ? c.post(e, n) : null,
						screen: c.screen(e),
						subreddit: n ? c.subreddit(e) : null,
						goldPurchase: {
							...f ? Object(h.a)(f) : null,
							type: E,
							gildedContent: b,
							contentType: C,
							numberCoins: x ? x.coins : void 0,
							offerContext: v,
							offerType: k
						},
						payment: {
							currency: "USD",
							amountInSmallestDenom: S
						},
						purchase: {
							priceMicros: S
						}
					}
				},
				f = (e, t, n) => o => ({
					...b(o, {
						packageId: t,
						thingId: e,
						offerContext: n
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				g = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				E = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				C = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				y = (e, t) => n => ({
					...b(n, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				x = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				v = (e, t, n) => o => {
					const r = b(o, {
						packageId: t,
						thingId: e,
						offerContext: n
					});
					return {
						...r,
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: {
							...r.payment,
							defaultOption: l.PaymentMethod.Paypal
						},
						goldPurchase: {
							...r.goldPurchase,
							source: e ? d.GiveGold : a.o(o) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				O = e => t => {
					const n = b(t, {
						thingId: e
					});
					return {
						...n,
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: {
							...n.payment,
							method: t.platform.currentPage.queryParams.thanks ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
						}
					}
				}
		},
		"./src/reddit/helpers/trackers/postCollection.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "o", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "n", (function() {
				return b
			})), n.d(t, "m", (function() {
				return f
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "p", (function() {
				return C
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "j", (function() {
				return x
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "l", (function() {
				return _
			})), n.d(t, "i", (function() {
				return k
			})), n.d(t, "d", (function() {
				return S
			}));
			var o, r, s = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/helpers/trackers/postEvent.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.collection = "collection", e.collectionComposer = "collection_composer", e.postComposer = "post_composer", e.postOverflowMenu = "post_overflow_menu"
			}(o || (o = {})),
			function(e) {
				e.post = "post", e.follow = "follow", e.unfollow = "unfollow", e.screen = "screen", e.eventEducation = "event_education", e.eventEducationGotIt = "event_education_got_it", e.collectionEducation = "collection_education", e.collectionEducationGotIt = "collection_education_got_it", e.collectionCancel = "cancel", e.collectionCreate = "collection_create", e.collectionSelect = "collection_select", e.collectionDelete = "collection_delete", e.collectionEdit = "collection_edit", e.collectionAddPost = "collection_add_post", e.collectionRemovePost = "remove_post_from_collection", e.startEvent = "start_event"
			}(r || (r = {}));
			const d = e => t => ({
					source: o.collection,
					noun: r.post,
					...p(t, e)
				}),
				l = ({
					postId: e,
					isFollowed: t
				}) => n => ({
					source: o.collection,
					noun: t ? r.unfollow : r.follow,
					...p(n, e)
				}),
				u = ({
					postId: e,
					isFollowed: t
				}) => n => ({
					source: i.a.postEvent,
					noun: t ? r.unfollow : r.follow,
					...p(n, e)
				}),
				p = (e, t) => {
					const n = {
						...c.defaults(e),
						action: s.c.CLICK,
						subreddit: c.subreddit(e)
					};
					return void 0 === t ? n : {
						...n,
						post: c.post(e, t),
						postCollection: c.postCollectionI13nSelector(e, {
							postId: t
						}),
						postEvent: c.postEventI13nSelector(e, {
							postId: t
						})
					}
				},
				m = e => ({
					...g(e),
					action: s.c.VIEW,
					noun: r.collectionEducation
				}),
				h = e => ({
					...g(e),
					action: s.c.CLICK,
					noun: r.collectionEducationGotIt
				}),
				b = e => ({
					...g(e),
					action: s.c.VIEW,
					noun: r.eventEducation
				}),
				f = e => ({
					...g(e),
					action: s.c.CLICK,
					noun: r.eventEducationGotIt
				}),
				g = e => ({
					...c.defaults(e),
					subreddit: c.subreddit(e),
					source: o.postComposer
				}),
				E = (e, t) => n => ({
					...p(n, e),
					source: t || o.postOverflowMenu,
					noun: r.collectionAddPost
				}),
				C = e => t => ({
					...p(t, e),
					source: o.collectionComposer,
					noun: r.collectionRemovePost
				}),
				y = () => e => ({
					...p(e),
					source: o.collectionComposer,
					noun: r.collectionCancel
				}),
				x = () => e => {
					const t = Object(a.m)(e) || void 0;
					return {
						...p(e, t),
						source: o.collectionComposer,
						noun: r.collectionCreate
					}
				},
				v = () => e => ({
					...p(e),
					source: o.collectionComposer,
					noun: r.collectionSelect
				}),
				O = e => t => ({
					...c.defaults(t),
					subreddit: c.subreddit(t),
					source: o.collectionComposer,
					action: s.c.CLICK,
					noun: r.collectionDelete,
					postCollection: c.postCollectionI13nByCollectionIdSelector(t, {
						collectionId: e
					})
				}),
				_ = e => t => ({
					...p(t),
					source: o.collectionComposer,
					noun: r.collectionEdit,
					postCollection: c.postCollectionI13nByCollectionIdSelector(t, {
						collectionId: e
					})
				}),
				k = e => t => ({
					...p(t, e),
					source: o.collectionComposer,
					noun: r.startEvent
				}),
				S = () => e => {
					const t = Object(a.m)(e) || void 0;
					return {
						...p(e, t),
						source: o.collectionComposer,
						action: s.c.VIEW,
						noun: r.screen
					}
				}
		},
		"./src/reddit/helpers/trackers/postEvent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "d", (function() {
				return C
			}));
			var o, r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/eventTools/index.ts"),
				i = n("./src/lib/timezone/index.ts"),
				a = n("./src/reddit/constants/tracking.ts"),
				c = n("./src/reddit/models/PostCreationForm/index.ts"),
				d = n("./src/reddit/selectors/platform.ts"),
				l = n("./src/reddit/selectors/postCreations.ts"),
				u = n("./src/reddit/selectors/telemetry.ts"),
				p = n("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(o || (o = {}));
			const m = e => u.actionInfo(e, {
					pageType: "event_submit"
				}),
				h = e => {
					Object(p.a)({
						...u.defaults(e),
						source: o.postComposer,
						action: a.c.CLICK,
						noun: "event_create",
						subreddit: u.subreddit(e)
					})
				},
				b = e => {
					Object(p.a)({
						...u.defaults(e),
						source: o.postComposer,
						action: a.c.CLICK,
						noun: "event_edit",
						subreddit: u.subreddit(e),
						postEvent: y(e),
						postComposer: x(e)
					})
				},
				f = () => e => ({
					source: o.eventComposer,
					action: a.c.VIEW,
					noun: a.b.SCREEN,
					actionInfo: m(e),
					postEvent: y(e)
				}),
				g = e => t => ({
					..._(t, Object(d.m)(t)),
					source: o.postComposer,
					noun: "apply",
					postComposer: v(e)
				}),
				E = () => e => ({
					..._(e, Object(d.m)(e)),
					noun: "cancel",
					actionInfo: m(e)
				}),
				C = e => t => ({
					..._(t, Object(d.m)(t)),
					noun: "delete",
					actionInfo: m(t),
					postComposer: x(t),
					postEvent: O(e)
				}),
				y = e => {
					const t = Object(l.p)(e);
					return t && O(t)
				},
				x = e => v(Object(l.p)(e)),
				v = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === c.i.AtEventTime ? Object(i.f)(e.startDate).getTime() / r.Nb : void 0
					}
				},
				O = e => {
					const t = Object(i.f)(e.startDate).getTime() / r.Nb,
						n = Object(i.f)(e.endDate).getTime() / r.Nb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: n,
						eventState: Object(s.e)(t, n)
					}
				},
				_ = (e, t) => {
					const n = {
						source: o.eventComposer,
						action: a.c.CLICK,
						subreddit: u.subreddit(e)
					};
					return t ? {
						...n,
						post: u.post(e, t),
						postEvent: u.postEventI13nSelector(e, {
							postId: t
						}),
						postCollection: u.postCollectionI13nSelector(e, {
							postId: t
						})
					} : n
				}
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "p", (function() {
				return s
			})), n.d(t, "q", (function() {
				return i
			})), n.d(t, "r", (function() {
				return a
			})), n.d(t, "l", (function() {
				return c
			})), n.d(t, "t", (function() {
				return d
			})), n.d(t, "n", (function() {
				return l
			})), n.d(t, "o", (function() {
				return u
			})), n.d(t, "m", (function() {
				return p
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "s", (function() {
				return h
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "v", (function() {
				return f
			})), n.d(t, "k", (function() {
				return g
			})), n.d(t, "x", (function() {
				return E
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "w", (function() {
				return y
			})), n.d(t, "u", (function() {
				return x
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "j", (function() {
				return S
			})), n.d(t, "h", (function() {
				return j
			})), n.d(t, "f", (function() {
				return T
			}));
			var o = n("./src/reddit/selectors/telemetry.ts");
			const r = "poll",
				s = e => ({
					...Object(o.defaults)(e),
					source: r,
					action: "select",
					noun: "poll_option"
				}),
				i = e => ({
					...Object(o.defaults)(e),
					source: r,
					action: "select",
					noun: "prediction_option"
				}),
				a = e => ({
					...Object(o.defaults)(e),
					source: r,
					action: "view",
					noun: "predict_info_modal"
				}),
				c = e => ({
					...Object(o.defaults)(e),
					source: r,
					action: "close",
					noun: "predict_info_modal"
				}),
				d = e => ({
					...Object(o.defaults)(e),
					source: r,
					action: "view",
					noun: "predict_option_modal"
				}),
				l = ({
					pollId: e,
					selectedNumberCoins: t,
					totalStakeAmount: n
				}) => s => ({
					...Object(o.defaults)(s),
					source: r,
					action: "confirm",
					noun: "predict",
					poll: Object(o.poll)(s, e, !1, void 0, t),
					goldPurchase: {
						numberCoins: n
					}
				}),
				u = ({
					pollId: e,
					selectedNumberTokens: t
				}) => n => ({
					...Object(o.defaults)(n),
					source: r,
					action: "confirm",
					noun: "predict",
					poll: Object(o.poll)(n, e, !1, void 0, void 0, t)
				}),
				p = ({
					pollId: e,
					selectedNumberCoins: t,
					selectedNumberTokens: n
				}) => s => ({
					...Object(o.defaults)(s),
					source: r,
					action: "close",
					noun: "prediction_modal",
					poll: Object(o.poll)(s, e, !1, t, n)
				}),
				m = e => ({
					...Object(o.defaults)(e),
					source: r,
					action: "click",
					noun: "add_coins"
				}),
				h = e => t => ({
					...Object(o.defaults)(t),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "predictions_leaderboard",
						reason: e ? "prediction_details" : "subreddit_header"
					}
				}),
				b = ({
					targetUserId: e
				}) => t => ({
					...Object(o.defaults)(t),
					source: "predictions",
					action: "click",
					noun: "leaderboard_profile",
					targetUser: {
						id: e
					}
				}),
				f = ({
					numberPredictionTokens: e,
					pollId: t
				}) => n => ({
					...Object(o.defaults)(n),
					source: r,
					action: "view",
					noun: "token_claim_modal",
					poll: Object(o.poll)(n, t, !1, void 0, void 0, e)
				}),
				g = ({
					pageType: e
				}) => t => ({
					...Object(o.defaults)(t),
					source: "predictions",
					action: "click",
					noun: "tournament",
					actionInfo: {
						pageType: e
					}
				}),
				E = () => e => ({
					...Object(o.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					}
				}),
				C = () => e => ({
					...Object(o.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "leaderboard",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					}
				}),
				y = () => e => ({
					...Object(o.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "tournament_leaderboard",
						reason: "predictions_tab"
					}
				}),
				x = () => e => ({
					...Object(o.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "mod_tool_predict"
					}
				}),
				v = () => e => ({
					...Object(o.defaults)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "end_tournament"
				}),
				O = () => e => ({
					...Object(o.defaults)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "rename_tournament"
				}),
				_ = () => e => ({
					...Object(o.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "next"
				}),
				k = () => e => ({
					...Object(o.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "add_more"
				}),
				S = () => e => ({
					...Object(o.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "start_tournament"
				}),
				j = () => e => ({
					...Object(o.defaults)(e),
					source: "menu_links_bar",
					action: "click",
					noun: "predictions_tab"
				}),
				T = e => t => ({
					...Object(o.defaults)(t),
					source: "predictions",
					action: "click",
					noun: "play_tournament",
					poll: Object(o.predictionTournamentPoll)(t, e),
					post: Object(o.post)(t, e),
					predictions: Object(o.predictions)(t, e),
					subreddit: Object(o.subreddit)(t)
				})
		},
		"./src/reddit/helpers/trackers/privateCommunity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			var o = n("./src/reddit/selectors/telemetry.ts");
			const r = e => t => ({
					...o.defaults(t),
					source: e,
					action: "click",
					noun: "request_to_join_button",
					subreddit: o.subreddit(t)
				}),
				s = e => t => ({
					...o.defaults(t),
					source: e,
					action: "click",
					noun: "request_to_join_submit",
					subreddit: o.subreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/restrictedCommunity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			var o = n("./src/reddit/selectors/telemetry.ts");
			const r = e => t => ({
					...o.defaults(t),
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: o.subreddit(t)
				}),
				s = e => t => ({
					...o.defaults(t),
					source: "request_restricted_approval_form",
					action: "click",
					noun: e,
					subreddit: o.subreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return a
			})), n.d(t, "y", (function() {
				return c
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "p", (function() {
				return l
			})), n.d(t, "q", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "r", (function() {
				return b
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "t", (function() {
				return _
			})), n.d(t, "j", (function() {
				return k
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "x", (function() {
				return j
			})), n.d(t, "u", (function() {
				return T
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "s", (function() {
				return I
			})), n.d(t, "v", (function() {
				return P
			})), n.d(t, "w", (function() {
				return R
			}));
			var o = n("./src/reddit/models/ScheduledPost/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					...r.defaults(e),
					screen: r.screen(e),
					subreddit: r.subreddit(e),
					userSubreddit: r.userSubreddit(e)
				}),
				i = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(o.p)(e)
				}),
				a = () => e => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post",
					...s(e)
				}),
				c = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer",
					...s(e)
				}),
				d = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date",
					...s(e)
				}),
				l = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time",
					...s(e)
				}),
				u = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone",
					...s(e)
				}),
				p = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply",
					...s(e)
				}),
				m = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel",
					...s(e)
				}),
				h = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit",
					...s(t),
					scheduledPost: i(e)
				}),
				b = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...s(t),
					scheduledPost: i(e)
				}),
				f = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts",
					...s(e)
				}),
				g = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...s(e)
				}),
				E = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...s(e)
				}),
				C = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...s(e)
				}),
				y = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...s(t),
					actionInfo: r.actionInfo(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				x = {
					[o.d.Hourly]: "hourly_frequency",
					[o.d.Daily]: "daily_frequency",
					[o.d.Weekly]: "weekly_frequency",
					[o.d.Monthly]: "monthly_frequency",
					[o.b]: "custom_frequency"
				},
				v = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : x[e],
					...s(t)
				}),
				O = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...s(e)
				}),
				_ = (e, t, n) => i => ({
					source: "post",
					action: "click",
					noun: Object(o.l)(e),
					...s(i),
					actionInfo: r.actionInfo(i, {
						settingValue: t ? "true" : "false",
						pageType: n ? "recurring_posts" : "scheduled_posts"
					})
				}),
				k = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...s(e)
				}),
				S = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...s(e)
				}),
				j = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...s(e)
				}),
				T = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...s(e),
					scheduledPost: i(t)
				}),
				w = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...s(e)
				}),
				I = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...s(e),
					scheduledPost: i(t)
				}),
				P = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...s(e)
				}),
				R = () => (e, t) => {
					const n = s(e);
					return {
						source: "post",
						action: "view",
						noun: "error",
						...n,
						actionInfo: {
							...n.actionInfo,
							reason: "failed_post"
						},
						scheduledPost: i(t)
					}
				}
		},
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "e", (function() {
				return m
			}));
			var o = n("./src/reddit/helpers/flair.ts"),
				r = n("./src/reddit/selectors/comments.ts"),
				s = n("./src/reddit/selectors/gold/powerups/achievements.ts"),
				i = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/reddit/selectors/user.ts"),
				c = n("./src/reddit/selectors/userFlair.ts");

			function d(e) {
				const t = i.subreddit(e),
					n = null == t ? void 0 : t.id;
				if (!n) return;
				const r = Object(c.c)(e, {
						subredditId: n
					}),
					d = Object(a.h)(e),
					l = d ? Object(s.c)(e, {
						subredditId: n,
						userId: d
					}) : void 0,
					u = {
						achievementFlairId: null == l ? void 0 : l.type,
						achievementFlairTitle: null == l ? void 0 : l.name
					};
				if (!(null == r ? void 0 : r.displaySettings.isUserEnabled) || !(null == r ? void 0 : r.applied)) return {
					isActive: !1,
					...u
				};
				const p = r.applied.templateId,
					m = Object(o.g)(r.applied);
				return m ? {
					id: p,
					title: m,
					isActive: !0,
					...u
				} : {
					isActive: !1,
					...u
				}
			}
			const l = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...i.defaults(e)
				}),
				u = e => t => {
					const {
						userFlair: n,
						achievementFlair: r
					} = e;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...i.defaults(t),
						userFlair: {
							id: null == n ? void 0 : n.id,
							title: n && Object(o.g)(n),
							isActive: n && !!n,
							achievementFlairId: null == r ? void 0 : r.type,
							achievementFlairTitle: null == r ? void 0 : r.name,
							isLocked: null == r ? void 0 : r.isLocked
						}
					}
				},
				p = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...i.defaults(e)
				}),
				m = (e, t, n) => a => {
					const c = Object(r.e)(a, {
							commentId: e
						}),
						d = Object(s.c)(a, {
							subredditId: t,
							userId: n
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...i.defaults(a),
						userFlair: {
							id: null == c ? void 0 : c.templateId,
							title: c ? Object(o.g)(c) : void 0,
							achievementFlairId: null == d ? void 0 : d.type,
							achievementFlairTitle: null == d ? void 0 : d.name
						}
					}
				}
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			}));
			var o, r, s = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(o || (o = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {}));
			const a = (e, t) => n => ({
					source: r.COMMUNITY_WIDGETS,
					action: s.c.CLICK,
					noun: o.SEE_MORE,
					widget: Object(i.widget)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...i.defaults
				}),
				c = (e, t) => n => ({
					source: r.POST,
					action: s.c.CLICK,
					noun: o.REREDDIT_PROMO,
					post: i.post(n, e),
					subreddit: i.subreddit(n),
					...t && {
						banner: {
							buttonText: t,
							id: o.REREDDIT_PROMO
						}
					},
					...i.defaults(n)
				}),
				d = () => e => ({
					source: r.SIDEBAR,
					action: s.c.VIEW,
					noun: o.TOPICS_WIDGET,
					...i.defaults(e)
				}),
				l = e => t => ({
					source: r.TOPICS_WIDGET,
					action: s.c.CLICK,
					noun: o.TOPIC,
					...i.defaults(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/hooks/useExperimentVariant.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");

			function s(e, t = r.a) {
				return Object(o.e)(n => Object(r.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: t
				}))
			}
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/icepick/icepick.js"),
				r = n("./node_modules/react/index.js"),
				s = n("./src/lib/hooks/useTooltip.ts");
			const i = Object(o.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function a(e) {
				const t = Object(r.useMemo)(() => {
					const t = Object(s.a)(e);
					return Object(o.updateIn)(t, ["modifiers"], e => Object(o.push)(e, i))
				}, [e]);
				return Object(s.b)(t)
			}
		},
		"./src/reddit/hooks/useLocalStorage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/react/index.js"),
				r = n("./src/reddit/helpers/localStorage/index.ts");
			const s = {},
				i = (e, t, n) => (s[e] || (s[e] = {
					callbacks: [],
					value: n
				}), s[e].callbacks.push(t), {
					deregister: () => {
						const {
							callbacks: n
						} = s[e], o = n.indexOf(t);
						o > -1 && n.splice(o, 1)
					},
					emit: n => {
						s[e].value !== n && (s[e].value = n, s[e].callbacks.forEach(e => {
							e !== t && e(n)
						}))
					}
				});

			function a(e, t) {
				const n = Object(o.useRef)(null);
				let s;
				s = Object(r.y)(e);
				const [a, c] = Object(o.useState)(null != s ? s : t);
				return Object(o.useEffect)(() => (n.current = i(e, c, t), () => {
					var e;
					return null === (e = n.current) || void 0 === e ? void 0 : e.deregister()
				}), [e, t]), Object(o.useEffect)(() => {
					var e;
					null === (e = n.current) || void 0 === e || e.emit(a)
				}, [a]), [a, function(t) {
					Object(r.yb)(e, t), c(t)
				}]
			}
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, n) {
			"use strict";
			var o = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = o.Z
		},
		"./src/reddit/hooks/usePrevious.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/react/index.js");

			function r(e) {
				const t = Object(o.useRef)();
				return Object(o.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/reddit/hooks/useTracking.ts": function(e, t, n) {
			"use strict";
			var o = n("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = o.b
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(s.a)(Object(i.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(s.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(s.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, t, n) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Premium/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				title: e.title,
				className: `${Object(s.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(s.a)(Object(i.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(s.a)(Object(i.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, n) {},
		"./src/reddit/icons/svgs/AddCollection/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, r.a.createElement("defs", null, r.a.createElement("path", {
				id: "svg-add-collection",
				d: "M19.2 2.4a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V4.8a2.4 2.4 0 0 1 2.4-2.4h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V8.4A2.4 2.4 0 0 1 4.8 6h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v7.2a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.4V12a2.4 2.4 0 0 1 2.4-2.4h14.4zm-3.806 5.1H12.9v-2.494a.9.9 0 1 0-1.8 0V14.7H8.607a.9.9 0 1 0 0 1.8H11.1v2.494a.9.9 0 1 0 1.8 0V16.5h2.494a.9.9 0 0 0 0-1.8z"
			})), r.a.createElement("use", {
				fill: "inherit",
				xlinkHref: "#svg-add-collection",
				fillRule: "evenodd"
			}))
		},
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				a = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
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
				className: Object(s.a)(a.a.checkbox, e)
			}, t), r.a.createElement("path", {
				fill: "inherit",
				d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
			}))
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", s({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), r.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
			}))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
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
		"./src/reddit/icons/svgs/Clear/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				onMouseUp: e.onMouseUp,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, r.a.createElement("path", {
				d: "M20 2.5C10.3 2.5 2.5 10.3 2.5 20c0 9.7 7.8 17.5 17.5 17.5S37.5 29.7 37.5 20C37.5 10.3 29.7 2.5 20 2.5zM24.2 27.7L20 23.5l-4.2 4.2c-1.1 1.1-2.5 1.1-3.5 0-1.1-1.1-1.1-2.4 0-3.5l4.2-4.2-4.2-4.2c-1.1-1.1-1.1-2.5 0-3.5 1.1-1.1 2.4-1.1 3.5 0l4.2 4.2 4.2-4.2c1.1-1.1 2.5-1.1 3.5 0 1.1 1.1 1.1 2.4 0 3.5L23.5 20l4.2 4.2c1.1 1.1 1.1 2.5 0 3.5C26.7 28.8 25.3 28.8 24.2 27.7z"
			}))
		},
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", s({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
			}), r.a.createElement("path", {
				d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
			}))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const d = ({
				className: e,
				isSubreddit: t,
				...n
			}) => r.a.createElement("svg", c({
				className: Object(s.a)(a.a.dropdown, {
					[a.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), r.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = d
		},
		"./src/reddit/icons/svgs/FormattingAlignCenter/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1ZVHRoTDdo57082D2GcC80"
			}
		},
		"./src/reddit/icons/svgs/FormattingAlignCenter/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingAlignCenter/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero"
			}, r.a.createElement("path", {
				d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM7.42 16h5.08c.55 0 1-.45 1-1s-.45-1-1-1H7.42c-.56 0-1 .45-1 1s.44 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingAlignLeft/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_33vXt91MK_ualpifvvw_3v"
			}
		},
		"./src/reddit/icons/svgs/FormattingAlignLeft/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingAlignLeft/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero"
			}, r.a.createElement("path", {
				d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 16h5.4c.54 0 1-.45 1-1s-.46-1-1-1H3.5c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingAlignRight/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_34rYEsgbWk8eOQx_bs7fTV"
			}
		},
		"./src/reddit/icons/svgs/FormattingAlignRight/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingAlignRight/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero"
			}, r.a.createElement("path", {
				d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM11.5 16h5c.55 0 1-.45 1-1s-.45-1-1-1h-5c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingDeleteRow/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_8Y1-XP7A1OOfoU_mUqKcg"
			}
		},
		"./src/reddit/icons/svgs/FormattingDeleteRow/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingDeleteRow/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero",
				transform: "vertical" === e.orientation ? "rotate(90, 10, 10)" : ""
			}, r.a.createElement("path", {
				d: "M3 3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V3zM2 3v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2z"
			}), r.a.createElement("path", {
				d: "M2 15h16v1H2M2 4h16v1H2M7.17 11.4l4.24-4.23c.4-.4 1.04-.4 1.43 0 .4.4.4 1.03 0 1.42L8.6 12.82c-.4.4-1.04.4-1.43 0-.4-.4-.4-1.03 0-1.42z"
			}), r.a.createElement("path", {
				d: "M8.6 7.17l4.23 4.24c.4.4.4 1.04 0 1.43-.4.4-1.03.4-1.42 0L7.18 8.6c-.4-.4-.4-1.04 0-1.43.4-.4 1.03-.4 1.42 0z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingInsertRow/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1PNKgIKbpvIWTVU3LO0PJQ"
			}
		},
		"./src/reddit/icons/svgs/FormattingInsertRow/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingInsertRow/index.m.less"),
				a = n.n(i);
			const c = {
				up: "rotate(180 10 10)",
				down: "",
				left: "rotate(90 10 10)",
				right: "rotate(-90 10 10)"
			};
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero",
				transform: c[e.orientation || "down"]
			}, r.a.createElement("path", {
				d: "M17 17c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v14zm1 0V3c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2z"
			}), r.a.createElement("path", {
				d: "M18 6H2V5h16M13 13H7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1z"
			}), r.a.createElement("path", {
				d: "M9 15V9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1z"
			})))
		},
		"./src/reddit/icons/svgs/GovSmall/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.5,0.2l6.2,3c0.5,0.3,0.6,0.9,0.3,1.4C14.9,4.8,14.6,5,14.2,5H1.8c-0.6,0-1-0.4-1-1 c0-0.4,0.2-0.7,0.5-0.9l6.2-3C7.9,0,8.1,0,8.5,0.2z"
			}), r.a.createElement("path", {
				d: "M2,12h12c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H2c-0.6,0-1-0.4-1-1l0,0C1,12.4,1.4,12,2,12z"
			}), r.a.createElement("path", {
				d: "M3.8,6h0.5C4.7,6,5,6.3,5,6.8v3.5C5,10.7,4.7,11,4.2,11H3.8C3.3,11,3,10.7,3,10.3V6.8C3,6.3,3.3,6,3.8,6z"
			}), r.a.createElement("path", {
				d: "M7.8,6h0.5C8.7,6,9,6.3,9,6.8v3.5C9,10.7,8.7,11,8.2,11H7.8C7.3,11,7,10.7,7,10.3V6.8 C7,6.3,7.3,6,7.8,6z"
			}), r.a.createElement("path", {
				d: "M11.8,6h0.5C12.7,6,13,6.3,13,6.8v3.5c0,0.4-0.3,0.8-0.8,0.8h-0.5c-0.4,0-0.8-0.3-0.8-0.8V6.8 C11,6.3,11.3,6,11.8,6z"
			})))
		},
		"./src/reddit/icons/svgs/Grapple/index.m.less": function(e, t, n) {
			e.exports = {
				grapple: "_23XYJUJn_XitrV-LLkNyCQ",
				mIsDragging: "_1jCsYjqdUw4PYY-s3mGB47"
			}
		},
		"./src/reddit/icons/svgs/Grapple/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Grapple/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(e.className, a.a.grapple, {
					[a.a.mIsDragging]: e.isDragging
				}),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8,2 C8.553,2 9,2.447 9,3 L9,5 C9,5.553 8.553,6 8,6 L6,6 C5.447,6 5,5.553 5,5 L5,3 C5,2.447 5.447,2 6,2 L8,2 Z M14,2 C14.553,2 15,2.447 15,3 L15,5 C15,5.553 14.553,6 14,6 L12,6 C11.447,6 11,5.553 11,5 L11,3 C11,2.447 11.447,2 12,2 L14,2 Z M8,8 C8.553,8 9,8.447 9,9 L9,11 C9,11.553 8.553,12 8,12 L6,12 C5.447,12 5,11.553 5,11 L5,9 C5,8.447 5.447,8 6,8 L8,8 Z M14,8 C14.553,8 15,8.447 15,9 L15,11 C15,11.553 14.553,12 14,12 L12,12 C11.447,12 11,11.553 11,11 L11,9 C11,8.447 11.447,8 12,8 L14,8 Z M8,14 C8.553,14 9,14.447 9,15 L9,17 C9,17.553 8.553,18 8,18 L6,18 C5.447,18 5,17.553 5,17 L5,15 C5,14.447 5.447,14 6,14 L8,14 Z M14,14 C14.553,14 15,14.447 15,15 L15,17 C15,17.553 14.553,18 14,18 L12,18 C11.447,18 11,17.553 11,17 L11,15 C11,14.447 11.447,14 12,14 L14,14 Z"
			})))
		},
		"./src/reddit/icons/svgs/Hamster1/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 53 67"
			}, r.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, r.a.createElement("path", {
				fill: "#000",
				d: "M36.17 15.7877c-2.1457-.6233-4.6272.5142-5.0853 2.419-.174.7268-.5168 1.0273-1.2283 1.124-1.5643.2126-2.9247.8707-4.0924 1.901-.807.7112-1.2403 1.523-1.2154 2.6702.0477 2.1067 1.0792 3.8318 2.0054 5.608.2256.432 2.0283-.631 1.111-.082-.616-1.9145-1.1994-3.6348-1.7152-5.3744-.2127-.72.0527-1.406.7364-1.754 1.2204-.6195 2.4954-1.1375 3.7456-1.702.5923-.2676.93-.057 1.27.465.821 1.2544 1.9995 2.04 3.5757 1.8642 1.6357-.1817 2.555-1.264 3.054-2.7215.6707-1.956-.2665-3.8677-2.1616-4.4176"
			}), r.a.createElement("path", {
				fill: "#FF8717",
				d: "M32.575 18.997c-.1866-1.1486.5913-2.0766 1.949-2.3235 1.4877-.2722 2.729.4466 2.9796 1.7235.2642 1.345-.7003 2.9457-1.9175 3.1832-1.341.2627-2.7447-.9416-3.011-2.5832"
			}), r.a.createElement("path", {
				fill: "#000",
				d: "M17.0857 23.965c-2.5846-.806-4.1367.6-4.4678 3.2556-.3653 2.9378.675 6.234 3.5116 7.1787 2.9598.9843 5.8344-1.5318 6.3822-4.5023.4535-2.4616-3.5227-5.3826-5.426-5.932-3.1034-.9685 1.507.4345 0 0M39.321 24.512c-2.184-2.2814-6.028.2842-7.4777 2.256-.521.7074-.9206 1.5057-1.1896 2.3475-.35 1.0897.269.94.3743 1.8643.1922 1.6742 2.1314 3.3578 3.7206 3.5912 4.7354.694 7.7125-6.7713 4.3803-10.2603.1294.1364.259.2717.3894.408-.0658-.0692-.1315-.1384-.1973-.2066-1.9745-2.0624.696.7283 0 0M18.9308 59.6326c-.1867-.0458-.3346.0093-.443.1056-.001 0-.001-.001-.002-.001-1.5598.099-3.8566.7662-4.6848 2.1695-.8887 1.507.7358 2.5096 2.148 2.674 1.553.1813 3.8715-.3148 4.4405-1.8975.439-1.2193-.0328-2.7012-1.4587-3.0506M34.37 60.348c-.242-.0358-.5174.043-.6267.2957-1.5118 3.4664 6.185 5.586 7.6074 2.4245 1.3572-3.016-4.6648-4.4187-6.9808-2.7203"
			}), r.a.createElement("path", {
				fill: "#000",
				d: "M39.9895 37.3797c-3.8707-9.353-16.7772-11.6802-23.5762-4.7352-3.177 3.245-4.373 8.2466-4.83 9.7576-1.4357 4.748-1.561 10.198.7932 14.6874 3.987 7.605 16.61 9.4605 23.792 5.505 9.1842-5.058 6.6638-18.3606 3.437-26.1424.2377.5734.4746 1.1468.7124 1.7202-.1096-.2645-.219-.528-.3285-.7925-2.1562-5.211 1.182 2.856 0 0"
			}), r.a.createElement("path", {
				fill: "#FF8717",
				d: "M26.4406 29.6162c3.5285 0 8.4696 2.1882 10.6613 4.9576 2.5828 3.2633 3.7284 8.3103 4.3175 12.3626.4945 3.4113-.4807 8.203-2.2755 11.186-2.1327 3.5455-6.732 4.5153-10.5422 4.4935-4.6918-.026-10.162-.5288-13.2412-4.577-2.77-3.643-3.234-8.4117-2.506-12.8188.401-2.4216 1.0284-5.207 1.9967-7.4706 2.105-4.9197 5.7597-8.1334 11.5893-8.1334"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M41.5915 49.6162c.03-.6952.008-1.3605-.044-2l.044 2zM37.4186 60.1975c-1.3365-.7743-2.342-2.1664-2.536-3.716-.0665-.533-.0396-1.074-.0128-1.61.0477-.9814.1004-1.9818.458-2.8933.4095-1.0428 1.1846-1.8868 1.9427-2.7034.46-.4967.9212-.9934 1.3823-1.49.7273-.7844 1.6783-1.6223 2.688-1.475-.4125-2.465-1.0336-5.1514-2.0422-7.567-1.0493 2.024-3.0208 3.9137-5.4086 2.871-.5147-.2242-.8774-.3756-1.3395-.7027-.8615-.7398-1.9138-.9498-3.157-.6288-.2702.3008-.5265.6128-.769.9368-.5157.521-1.1567.9812-1.9347.7632-1.7777-.5007-2.97-2.9346-5.1046-1.4002-.8675.624-1.9396 1.5637-3.0953 1.5082-2.0044-.096-3.3925-1.0983-4.2153-2.752-.776 2.0393-1.2024 4.4066-1.5432 6.479-.0407.2524-.0636.5098-.0974.7652.6232-.0353 1.2462-.013 1.8206.219.6776.2727 1.2182.8037 1.74 1.3225.8435.8388 1.708 1.706 2.187 2.8033.4382 1.0014.5227 2.123.5366 3.2183.015 1.0882-.0338 2.1754-.145 3.2566-.1313 1.284-.475 2.7296-1.571 3.3606 3.1707 2.359 7.553 2.7054 11.4153 2.7266 3.2216.0182 6.9976-.6774 9.4033-3.0224-.2027-.0868-.4104-.1585-.6022-.2695"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M19.3634 62.297c-.4735.8925-1.877 1.0785-2.832 1.1074-.5274.0154-1.058-.045-1.5395-.25-.894-.3822-.2403-1.1526.2322-1.5266.884-.7018 2.083-1.0513 3.2383-1.1217.114-.0072.2012-.0478.2752-.0993.846.2655.982 1.2193.6257 1.8904M39.1353 63.7074c-.7183.2857-1.607.0788-2.318-.0972-1.225-.3028-2.4647-1.2617-2.3147-2.656.0894-.0388.1756-.0948.2438-.1942 1.16-1.6788 4.4677-.7897 5.5096.6697.7194 1.008-.38 1.984-1.1207 2.2777"
			}), r.a.createElement("path", {
				fill: "#C18D42",
				d: "M17.2218 28.842c-.2698-1.599-.862-3.239-2.209-4.0722-1.519-.9397-1.5314 2.7022-1.4284 3.646.1773 1.6212.7036 4.1546 2.031 4.9962 1.0735.6814 1.7476-.4387 1.9068-1.9332.105-.9777-.1392-1.678-.3004-2.6368-.3327-1.9776.2232 1.3268 0 0"
			}), r.a.createElement("path", {
				fill: "#FF8717",
				d: "M15.5475 24.681c1.747.664 2.8352 2.0178 3.3196 3.9672.3962 1.5937.7234 3.6126-.1366 4.959 1.6953.081 3.8534-.3464 3.6123-2.602 1.339-1.9475-4.229-7.018-6.7952-6.3243M33.6698 32.7516c-.407-.451.364.404 0 0"
			}), r.a.createElement("path", {
				fill: "#C18D42",
				d: "M35.796 29.1142c-.1635.7146-.323 1.4594-.211 2.192.178 1.1545.9577 1.6425 1.872 1.0695 1.2238-.7655 1.577-2.3845 1.9186-3.693.1864-.7164.529-3.6248-.9526-2.9716-1.4423.6354-2.308 2.0174-2.627 3.4032-.238 1.0394.3698-1.6104 0 0"
			}), r.a.createElement("path", {
				fill: "#FF8717",
				d: "M35.3533 32.5596c-1.0047-1.2304-.5965-3.2887-.0174-4.64.6404-1.496 1.6748-2.6295 3.2115-3.037-.0695-.041-.136-.083-.2138-.114-1.9296-.775-4.9295 1.584-5.8667 3.0262-.6885 1.0606-2.0135 2.6206.8063 4.2594.7018.4085 1.3024.687 2.08.5054"
			}), r.a.createElement("path", {
				fill: "#000",
				d: "M32.8514 39.097c-.577.676-1.6076.6748-2.4273.0963-1.264-.8917-1.1062-3.3024.122-4.234.7017-.532 1.6705-.4205 2.1302.1645 1.53 1.946.6833 3.3772.1752 3.973"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M30.755 38.0938c-.2703-.432-.2692-1.2056-.039-1.8203.3575-.9478 1.322-.8296 1.6942.092.213.5263.1684 1.252-.0664 1.597-.7778 1.1484-1.3505.512-1.5888.1313"
			}), r.a.createElement("path", {
				fill: "#000",
				d: "M24.71 39.009c-.6662.8048-2.161.7863-3.1096.0826-1.5367-1.1425-1.2565-2.9377-.0257-3.8424.9816-.721 1.9472-.897 2.8605-.1542 1.636 1.3315 1.2372 2.751.2748 3.914"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M21.79 38.1136c-.322-.4-.3135-1.296-.0326-1.8656.4566-.922 1.1752-.7538 1.537-.016.2884.589.359 1.1686.0612 1.7166-.5324.982-1.0995.7425-1.5656.165"
			}), r.a.createElement("path", {
				fill: "#000",
				d: "M24.5598 40.2202c.8506 1.8878 3.3605 1.9104 3.9825-.235.0587-.206-.3954-.314-.471-.3215-1.1-.0954-2.188-.0502-3.278.1646-.637.1256.158.5627.459.5024.9212-.182 1.8433-.2474 2.7733-.167-.157-.1068-.314-.2136-.471-.3216-.14.4862-.3785.834-.7293 1.098-.5525.4157-1.0443-.1445-1.3017-.716-.147-.3266-1.094-.2915-.9638-.0038"
			}), r.a.createElement("path", {
				fill: "#000",
				d: "M22.5907 41.495c1.505 1.488 4.0743 1.4078 5.0584-.571-.3263-.06-.6527-.121-.98-.182-.2436 2.3982 3.9335 2.359 4.8708.653.1018-.186-.8275-.4596-.9802-.1822-.556 1.1467-1.526 1.0504-2.9105-.2888.029-.284-.8573-.428-.98-.182-.497 1.0008-1.7188 2.179-3.194.7215-.1837-.182-1.14-.221-.8843.0315M19.5653 46.516c-.473 6.7128 8.6924 4.2055 5.1774-.548-.6672-.903-.7844.151-.5202.7218.5274 1.1447.4853 2.1653-.5644 2.844-1.2192.7874-2.6945.0107-2.9834-1.216-.112-.5384-.144-1.082-.0936-1.6312.0237-.3453-.993-.4877-1.0157-.1705M29.6923 44.8475c-1.689 1.2247-1.5924 4.6386.8496 4.7633 1.13.0575 2.2874-.3435 3.0557-1.1673.3415-.3653 1.5518-2.4732.5793-2.709-1.2043-.293-1.2043 3.92-3.9756 3.001-.9725-.3227-.5812-1.1573-.5253-1.9048.0163-.218 1.4523-3.0258.0163-1.9832"
			})))
		},
		"./src/reddit/icons/svgs/Hamster2/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 53 67"
			}, r.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, r.a.createElement("path", {
				fill: "#FFF",
				d: "M9.5927 33.2517c.829 1.0475-1.9245 5.7044-2.2983 5.6247-7.91-1.6942-2.065-11.142 2.2983-5.6247z"
			}), r.a.createElement("path", {
				fill: "#000",
				d: "M7.2853 38.8738c-7.8952-1.69-2.0557-11.1393 2.297-5.625.8272 1.047-.4264.8297-.9997.3446-1.1508-.97-2.3416-1.2604-3.462-.3077-1.3005 1.107-.879 3.0184.443 3.748.585.3038 1.202.5194 1.8517.6446.4058.0876.243 1.275-.13 1.1955"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M50.0333 34.034c-.1167 1.5037-.772 2.978-1.8564 3.877-.4812.3997-3.1335 1.7-3.25.3792-.1457-1.6356-1.7525-4.3107-.3047-6.062 1.7012-2.06 5.6625-1.444 5.411 1.8057z"
			}), r.a.createElement("path", {
				fill: "#000",
				d: "M38.8415 2.2205c-2.7586-.8015-5.949.661-6.538 3.11-.2237.9345-.6645 1.321-1.5794 1.4452-2.011.2734-3.7602 1.1195-5.2615 2.444-1.0375.9146-1.5946 1.9584-1.5627 3.4333.0614 2.7088 1.3876 4.9268 2.5785 7.2106.29.5554 2.6078-.8114 1.4285-.1056-.7922-2.4615-1.5422-4.6733-2.2054-6.91-.2734-.9256.0677-1.8078.9468-2.2552 1.569-.7964 3.2084-1.4625 4.8157-2.188.7615-.3443 1.196-.0734 1.633.5976 1.0553 1.6128 2.5707 2.623 4.597 2.397 2.1033-.2337 3.2852-1.6254 3.9266-3.4992.8624-2.515-.3425-4.9727-2.779-5.6797"
			}), r.a.createElement("path", {
				fill: "#FF8717",
				d: "M33.9315 6.857c-.224-1.3784.7095-2.492 2.3388-2.7883 1.7852-.3266 3.275.536 3.5755 2.0682.317 1.614-.8404 3.5347-2.301 3.8197-1.6092.3153-3.2938-1.13-3.6133-3.0997"
			}), r.a.createElement("path", {
				fill: "#000",
				d: "M14.7982 12.4437c-3.36-1.0258-5.3778.7637-5.8082 4.1436-.4748 3.739.8778 7.9344 4.5652 9.1366 3.8478 1.2526 7.5847-1.9496 8.297-5.7303.5894-3.133-4.5797-6.8506-7.054-7.55-4.0343-1.2325 1.959.5532 0 0M43.3042 13.0588c-2.8393-2.6964-7.8367.3357-9.7212 2.666-.6773.836-1.1967 1.7795-1.5465 2.7743-.455 1.288.3498 1.111.4866 2.2034.25 1.9786 2.771 3.9682 4.837 4.244 6.156.8204 10.0262-8.0023 5.6943-12.1256.1683.161.3367.321.5063.482-.0855-.0817-.171-.1634-.2564-.244-2.567-2.4376.9047.8605 0 0M16.2644 58.021c-.2208-.059-.3958.012-.5237.136-.0012 0-.0012-.0012-.0024-.0012-1.8447.1275-4.5607.9865-5.54 2.7936-1.051 1.9405.87 3.2314 2.5398 3.4432 1.8366.2334 4.5785-.4055 5.2513-2.4435.519-1.57-.0387-3.478-1.725-3.928M35.8236 58.9218c-.272-.045-.582.0543-.705.3726-1.7005 4.3674 6.9575 7.0378 8.5576 3.0546 1.5267-3.7998-5.2473-5.567-7.8526-3.4272"
			}), r.a.createElement("path", {
				fill: "#000",
				d: "M43.621 29.1977c-4.9592-11.951-21.4957-14.9246-30.207-6.0505-4.0707 4.1463-5.603 10.5374-6.1882 12.468-1.8397 6.067-2.0003 13.0306 1.016 18.767 5.1085 9.718 21.2816 12.0886 30.4837 7.0343 11.767-6.463 8.538-23.4607 4.4034-33.4042.3046.7327.608 1.4654.9127 2.198-.1402-.338-.2804-.6746-.4207-1.0126-2.7626-6.6584 1.5146 3.6495 0 0"
			}), r.a.createElement("path", {
				fill: "#FF8717",
				d: "M25.8506 19.7317c4.5594 0 10.944 2.8204 13.7762 6.3902 3.3375 4.2063 4.8178 10.7118 5.579 15.935.639 4.3973-.6212 10.5736-2.9403 14.4188-2.7558 4.57-8.6988 5.8202-13.6222 5.792-6.0627-.0332-13.131-.6814-17.1098-5.8996-3.5793-4.6956-4.179-10.8425-3.2382-16.523.518-3.1216 1.329-6.7118 2.58-9.6297 2.7202-6.3415 7.4425-10.4838 14.9753-10.4838"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M45.9425 45c.03-.6952.008-1.3605-.044-2l.044 2zM39.8434 58.144c-1.7227-.9698-3.0188-2.7136-3.2686-4.6547-.0858-.6677-.0512-1.3455-.0166-2.017.0615-1.2292.1293-2.4824.5904-3.6243.5277-1.3063 1.5267-2.3634 2.504-3.3865.593-.622 1.1872-1.2443 1.7815-1.8665.9376-.9825 2.1633-2.032 3.4645-1.8475-.5315-3.088-1.332-6.453-2.632-9.4792-1.3524 2.5355-3.8935 4.9027-6.971 3.5964-.6636-.2807-1.131-.4704-1.7266-.88-1.1105-.927-2.467-1.19-4.069-.788-.3485.377-.679.7677-.9914 1.1736-.6647.6525-1.4908 1.2292-2.4937.956-2.2913-.6272-3.8283-3.676-6.5793-1.754-1.1182.7816-2.5 1.959-3.9896 1.8893-2.5832-.12-4.3725-1.3758-5.433-3.4472-1.0002 2.5544-1.5497 5.5198-1.989 8.116-.0525.316-.082.6386-.1255.9585.803-.0443 1.606-.0165 2.3464.2743.8734.3415 1.57 1.0066 2.2425 1.6566 1.0874 1.0508 2.2016 2.137 2.819 3.5116.5648 1.2545.6737 2.6594.6916 4.0315.0193 1.3633-.0435 2.7252-.187 4.0796-.169 1.6085-.612 3.4193-2.0248 4.2097 4.087 2.9553 9.735 3.389 14.7134 3.4156 4.1523.0226 9.0192-.8486 12.12-3.7862-.2614-.1088-.529-.1986-.7762-.3377"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M16.6775 61.5205c-.5682 1.19-2.2523 1.438-3.3982 1.4765-.633.0205-1.2697-.0602-1.8475-.3336-1.0727-.5094-.2883-1.5367.2787-2.0352 1.0607-.9357 2.4997-1.4018 3.886-1.4957.137-.0097.2414-.064.3303-.1325 1.015.354 1.1784 1.6258.7507 2.5205M41.3178 62.8585c-.838.2857-1.875.079-2.7043-.097-1.429-.303-2.8756-1.2618-2.7005-2.656.1043-.039.2048-.095.2843-.1944 1.3534-1.6787 5.2124-.7896 6.428.6698.8393 1.008-.4433 1.984-1.3075 2.2777"
			}), r.a.createElement("path", {
				fill: "#C18D42",
				d: "M14.4914 18.1648c-.3373-1.9542-1.0774-3.9587-2.7615-4.977-1.8987-1.1487-1.9142 3.3025-1.7855 4.4562.2217 1.9814.8796 5.0777 2.5387 6.1064 1.342.8328 2.1846-.5362 2.3836-2.363.131-1.1948-.174-2.0508-.3754-3.2226-.416-2.417.279 1.6217 0 0"
			}), r.a.createElement("path", {
				fill: "#FF8717",
				d: "M11.8985 13.079c1.9966.812 3.2402 2.4664 3.7938 4.849.4527 1.9478.8267 4.4154-.1562 6.061 1.9376.099 4.404-.4234 4.1285-3.1804 1.5303-2.38-4.8333-8.5774-7.766-7.7295M35.0207 23.1353c-.407-.451.364.404 0 0"
			}), r.a.createElement("path", {
				fill: "#C18D42",
				d: "M38.2093 19.4974c-.2045.9188-.4038 1.8764-.264 2.8182.2225 1.4844 1.197 2.112 2.34 1.3752 1.5298-.9843 1.9712-3.066 2.3983-4.748.233-.9213.6613-4.6607-1.1908-3.8208-1.803.8168-2.885 2.5937-3.2835 4.3754-.2977 1.3363.462-2.0706 0 0"
			}), r.a.createElement("path", {
				fill: "#FF8717",
				d: "M37.7916 23.9292c-1.2917-1.538-.767-4.111-.0223-5.8.8235-1.87 2.1534-3.287 4.1292-3.7963-.0894-.0513-.175-.1037-.275-.1424-2.481-.9687-6.3378 1.98-7.5428 3.7826-.8853 1.3257-2.5888 3.2757 1.0366 5.3243.9024.5106 1.6746.859 2.6743.6317"
			}), r.a.createElement("path", {
				fill: "#000",
				d: "M34.0283 31.3767c-.721.8113-2.0094.81-3.034.1158-1.58-1.07-1.383-3.963.1523-5.081.877-.6384 2.088-.5045 2.6627.1976 1.9127 2.3352.854 4.0527.219 4.7677"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M31.106 29.4776c-.2703-.432-.2692-1.2056-.039-1.8204.3574-.9477 1.322-.8296 1.6942.092.213.5264.1684 1.252-.0664 1.597-.7778 1.1484-1.3506.5122-1.5888.1314"
			}), r.a.createElement("path", {
				fill: "#000",
				d: "M23.8934 30.2714c-.7994.9656-2.5933.9435-3.7315.099-1.844-1.371-1.508-3.5252-.031-4.6108 1.178-.8653 2.3368-1.0765 3.4327-.185 1.9633 1.5977 1.4846 3.301.3297 4.6968"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M20.141 29.4974c-.322-.4-.3135-1.2962-.0326-1.8657.4566-.922 1.1752-.7537 1.537-.0158.2884.5886.359 1.1683.061 1.7164-.5322.982-1.0993.7424-1.5654.165"
			}), r.a.createElement("path", {
				fill: "#000",
				d: "M23.9138 33.604c1.0632 1.8878 4.2007 1.9104 4.9782-.235.0733-.206-.4943-.314-.5887-.3215-1.375-.0955-2.735-.0502-4.0976.1646-.796.1257.1975.5628.574.5025 1.1512-.1822 2.304-.2475 3.4664-.167-.196-.1068-.3923-.2136-.5886-.3216-.175.486-.4732.834-.9117 1.0977-.6905.4157-1.3054-.1445-1.627-.716-.184-.3266-1.3676-.2914-1.205-.0038"
			}), r.a.createElement("path", {
				fill: "#000",
				d: "M20.9512 35.318c1.8397 2.232 4.9797 2.112 6.1826-.8564-.399-.09-.798-.1816-1.198-.273-.2976 3.5973 4.8077 3.5387 5.9532.9794.1245-.279-1.0113-.6892-1.198-.273-.6794 1.72-1.8652 1.5755-3.5572-.4334.0354-.426-1.048-.642-1.198-.273-.6075 1.5012-2.1007 3.2685-3.9037 1.0823-.2244-.2732-1.393-.3318-1.0808.047M44.4978 32.213c1.7332-2.056 5.7836-1.429 5.5353 1.821-.115 1.5038-.7808 2.977-1.8867 3.8733-.4907.3984-3.198 1.692-3.3206.3704-.1534-1.6365 4.8643-1.0204 4.2203-4.8223-.2264-1.3343-1.284-.9385-2.1835-.974-.262-.0102-3.8398 1.4795-2.3647-.2684"
			})))
		},
		"./src/reddit/icons/svgs/Help/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fill: "inherit",
				d: "M8.622 10.616c.078.08.14.175.183.28.044.105.07.218.07.332 0 .237-.087.456-.253.62-.167.168-.385.255-.622.255-.236 0-.455-.087-.62-.254-.167-.166-.255-.385-.255-.622 0-.114.027-.227.07-.332.044-.105.105-.2.184-.28.087-.088.174-.15.288-.193.324-.13.71-.052.954.193zm-.205-6.242c1.595 0 2.466.807 2.466 1.92 0 .976-.556 1.448-1.238 1.816-.615.317-.83.518-.904.898 0 .004-.034.207-.036.21-.034.126-.087.244-.18.336-.14.14-.323.21-.524.21-.097 0-.192-.017-.29-.052-.087-.035-.165-.088-.235-.158-.14-.14-.22-.333-.22-.533 0-.11.02-.188.074-.348.16-.472.55-.896 1.056-1.17.577-.327.84-.558.84-1.07 0-.42-.357-.715-.987-.715-.496 0-.996.218-1.39.52-.26.2-.62.202-.858-.02l-.05-.05c-.313-.29-.27-.787.075-1.04.603-.444 1.394-.753 2.4-.753zM8 13.25c-2.895 0-5.25-2.355-5.25-5.25S5.105 2.75 8 2.75 13.25 5.105 13.25 8 10.895 13.25 8 13.25M8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7"
			}))
		},
		"./src/reddit/icons/svgs/ImagePost/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1pAYDrDlDFEJk994qhxbYj"
			}
		},
		"./src/reddit/icons/svgs/ImagePost/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/ImagePost/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2Zm0,14H10.14a.49.49,0,0,1,.05-.48l3.15-4.26a.5.5,0,0,1,.38-.2.53.53,0,0,1,.4.17L16,13.35ZM4,13.51,7.26,8.82a.54.54,0,0,1,.42-.21.5.5,0,0,1,.41.23l2.85,4.34L8.84,16H4Zm10.4-7.1a1.7,1.7,0,1,1-1.7-1.7A1.7,1.7,0,0,1,14.4,6.41Z"
			}))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Link/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M18.4773727,1.51993937 C19.4600354,2.50135191 20.0013751,3.80656808 20.0013751,5.19554812 C20.0013751,6.58577837 19.4600354,7.89099453 18.4773727,8.87240707 C17.9885417,9.35998782 17.1984109,9.35998782 16.7095799,8.87240707 C16.2207489,8.38357611 16.2207489,7.59094484 16.7095799,7.10461429 C17.2196644,6.59452982 17.500961,5.91691759 17.500961,5.19554812 C17.500961,4.47542886 17.2196644,3.79781663 16.7095799,3.28773215 C15.6569056,2.23755822 13.9453721,2.23755822 12.8926978,3.28773215 L8.62324066,7.55843946 C7.57181653,8.6111138 7.57181653,10.3226473 8.62324066,11.3753216 C9.11207162,11.8629024 9.11207162,12.6555336 8.62324066,13.1431144 C8.37945029,13.3869048 8.05939728,13.509425 7.73934427,13.509425 C7.41929127,13.509425 7.09923826,13.3869048 6.85544788,13.1431144 C4.82886225,11.1152785 4.82886225,7.81723232 6.85544788,5.79064668 L11.124905,1.51993937 C13.1502404,-0.505396058 16.4495368,-0.507896472 18.4773727,1.51993937 Z M11.3753215,6.8540728 C11.8641524,6.36524184 12.6542833,6.36524184 13.1431142,6.8540728 C15.1696999,8.88065844 15.1696999,12.1799549 13.1431142,14.2065405 L8.87240693,18.4772478 C7.89099439,19.4586603 6.58452801,20 5.19679818,20 C3.80781814,20 2.50135177,19.4586603 1.51993923,18.4772478 C-0.50664641,16.4506622 -0.50664641,13.1513657 1.51993923,11.1247801 C2.00877019,10.6359491 2.80015125,10.6359491 3.28773201,11.1247801 C3.77656297,11.6136111 3.77656297,12.4037419 3.28773201,12.8925729 C2.23505767,13.9452472 2.23505767,15.6567807 3.28773201,16.709455 C4.34040635,17.7621294 6.05193981,17.7621294 7.10461415,16.709455 L11.3753215,12.4387477 C12.4279958,11.3860734 12.4279958,9.67453992 11.3753215,8.62186558 C10.8864905,8.13303462 10.8864905,7.34290376 11.3753215,6.8540728 Z"
			})))
		},
		"./src/reddit/icons/svgs/MarkdownMode/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 208 128"
			}, r.a.createElement("rect", {
				width: "198",
				height: "118",
				x: "5",
				y: "5",
				ry: "10",
				stroke: "currentColor",
				strokeWidth: "10",
				fill: "none"
			}), r.a.createElement("path", {
				d: "M30 98v-68h20l20 25 20-25h20v68h-20v-39l-20 25-20-25v39zM155 98l-30-33h20v-35h20v35h20z"
			}))
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M15.75,7.834625 L12,4.084625 L12.808,3.276625 C13.8435,2.241125 15.5225,2.241125 16.558,3.276625 C17.5935,4.312125 17.5935,5.991125 16.558,7.026625 L15.75,7.834625 Z M11.366,5 L15.116,8.75 L7.25,16.616 L3.5,12.866 L11.366,5 Z M2.5035,13.5 L6.1125,17.109 L1,18.6125 L2.5035,13.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, r.a.createElement("g", {
				stroke: "none"
			}, r.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Poll/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M2.1952,13.9279 C2.9452,13.9279 3.5382,14.3119 3.8382,14.8939 L2.8962,15.3249 C2.7702,15.0489 2.4882,14.8519 2.1232,14.8519 C1.6192,14.8519 1.2232,15.3189 1.2232,15.9489 C1.2232,16.5849 1.6252,17.0409 2.1172,17.0409 C2.4882,17.0409 2.7772,16.8369 2.9262,16.5369 L3.9162,16.8909 C3.6102,17.5559 2.9802,17.9639 2.1952,17.9639 C1.0492,17.9639 0.1202,17.0759 0.1202,15.9489 C0.1202,14.8279 1.0492,13.9279 2.1952,13.9279 Z M11.5004,14.5 C12.3294,14.5 13.0004,15.171 13.0004,16 C13.0004,16.829 12.3294,17.5 11.5004,17.5 L6.5004,17.5 C5.6714,17.5 5.0004,16.829 5.0004,16 C5.0004,15.171 5.6714,14.5 6.5004,14.5 L11.5004,14.5 Z M1.8953,8.0003 C2.8063,8.0003 3.5503,8.2643 3.5503,9.0313 C3.5503,9.3433 3.3523,9.5893 3.0763,9.7813 C3.4483,9.9553 3.7243,10.2253 3.7243,10.6623 C3.7243,11.5179667 2.93757778,11.8598556 2.22929983,11.8952023 L2.1053,11.8983 L0.3723,11.8983 L0.3723,8.0003 L1.8953,8.0003 Z M18.5004,8.5 C19.3294,8.5 20.0004,9.171 20.0004,10 C20.0004,10.829 19.3294,11.5 18.5004,11.5 L6.5004,11.5 C5.6714,11.5 5.0004,10.829 5.0004,10 C5.0004,9.171 5.6714,8.5 6.5004,8.5 L18.5004,8.5 Z M1.8623,8.8693 L1.4753,8.8693 L1.4753,11.0283 L1.9843,11.0283 C2.3013,11.0283 2.5853,10.7603 2.5853,10.4623 C2.5853,10.0713909 2.27786198,9.92097769 2.01460128,9.89686048 L1.9373,9.8933 L1.9373,9.7853 C2.0923,9.7853 2.4353,9.6783 2.4353,9.3333 C2.4353,8.9793 2.1923,8.8693 1.8623,8.8693 Z M2.783,1.9997 L4.096,5.8977 L2.963,5.8977 C2.963,5.8977 2.147,3.3737 2.063,3.0137 L2.063,3.0137 L2.039,3.0137 C1.955,3.3737 1.127,5.8977 1.127,5.8977 L1.127,5.8977 L-2.25597319e-13,5.8977 L1.319,1.9997 L2.783,1.9997 Z M15.5004,2.5 C16.3294,2.5 17.0004,3.171 17.0004,4 C17.0004,4.829 16.3294,5.5 15.5004,5.5 L6.5004,5.5 C5.6714,5.5 5.0004,4.829 5.0004,4 C5.0004,3.171 5.6714,2.5 6.5004,2.5 L15.5004,2.5 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				a = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", c({}, e, {
				className: Object(s.a)(a.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", s({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/Replay/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", s({}, e, {
				viewBox: "13 12 23 23",
				xmlns: "http://www.w3.org/2000/svg"
			}), r.a.createElement("g", null, r.a.createElement("path", {
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Send/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M17.98 8.87c-.012-.093-.03-.182-.062-.27-.017-.043-.034-.085-.055-.126-.013-.026-.02-.057-.034-.082l-.07-.1c-.018-.02-.04-.03-.055-.046-.073-.083-.158-.145-.252-.204-.032-.02-.053-.055-.088-.072L3.88 1.12c-.35-.176-.764-.158-1.096.05-.332.208-.534.576-.534.973V5c0 .507.33.954.81 1.097L9 7.857H3.375c-.175 0-.347.04-.503.12L.622 9.12c-.48.243-.724.8-.582 1.325.135.5.582.84 1.085.84.027 0 .054 0 .08-.003l1.045-.075v4.65c0 .396.202.764.534.972.18.112.386.17.59.17.173 0 .346-.04.505-.12l13.483-6.85c.08-.044.134-.075.184-.113.05-.038.092-.085.136-.13.012-.013.026-.022.037-.036.092-.107.147-.21.19-.32.013-.03.02-.06.03-.09.013-.045.033-.086.042-.132.008-.046.013-.09.017-.138 0-.023-.008-.043-.008-.063 0-.017.008-.03.008-.048 0-.032-.017-.058-.02-.09z"
			})))
		},
		"./src/reddit/icons/svgs/SnooPosting/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 45 43"
			}, r.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, r.a.createElement("g", {
				fill: "#0DD3BB",
				transform: "translate(0 4)"
			}, r.a.createElement("ellipse", {
				cx: "25.492",
				cy: "22.2631",
				transform: "rotate(5 25.492 22.263)",
				rx: "17.6396",
				ry: "13.9883"
			}), r.a.createElement("ellipse", {
				cx: "19.3519",
				cy: "17.9699",
				transform: "rotate(5 19.352 17.97)",
				rx: "14.7297",
				ry: "16.0688"
			}), r.a.createElement("ellipse", {
				cx: "14.0251",
				cy: "27.7862",
				transform: "rotate(5 14.025 27.786)",
				rx: "8.4751",
				ry: "8.9243"
			}), r.a.createElement("ellipse", {
				cx: "11.808",
				cy: "17.4531",
				transform: "rotate(5 11.808 17.453)",
				rx: "10.7695",
				ry: "10.8575"
			}), r.a.createElement("ellipse", {
				cx: "12.1168",
				cy: "22.4429",
				transform: "rotate(5 12.117 22.443)",
				rx: "8.4751",
				ry: "8.9243"
			})), r.a.createElement("path", {
				fill: "#FFF",
				d: "M35.6875 31.5625c-1.3275 1.8696-6.7017 5.0483-8.7188 6.0313-2.0174.983-13.478 2.1465-15.625-.6876-1.5625-2.0624-.9687-4.625 1-6.1562C9.6563 29.2812 8.125 27.8437 7 24.9062c-.0872-.2277-1.1015-1.763-.875-1.7812l.9375-4.0313c.8158-2.9308 4.2118-5.1638 6.7992-6.5715 2.3198-1.2615 4.9067-1.934 7.5113-2.1714 2.1052-.192 4.259-.101 6.277.554 2.0182.6552 4.2956 1.063 5.5063 2.8765 0 0 1.5532 3.6305 1.6736 5.5487.1204 1.9177-2.0402 6.1206-2.0402 6.1206"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M31.5665 34.5708c.6293 1.944.9 4.0143.794 6.0635 0 0-.473 1.3654-6.7204 1.3654-6.2478 0-7.6077-.7104-7.6077-.7104.047-1.224.0518-2.4493.014-3.6732-.0028-.097.0414-.2356.13-.2062l-.1555-7.319 12.5354-2.0634c.4433.252.8525.5696 1.211.9412l-.2007 5.6022z"
			}), r.a.createElement("path", {
				fill: "#FF0",
				d: "M34.0514 21.4676c-.3642.8707-.5738 1.8017-.8143 2.7188-.601 2.29-1.4044 4.5218-2.3967 6.658.1578.0357.3286.0014.4624-.0927.072.7567 1.0046 1.1686 1.678.8836.6734-.2846 1.071-1.0334 1.2235-1.777.0223-.1084.0407-.2198.0277-.33-.0202-.1737-.114-.3265-.1996-.477-.6817-1.2056-.9025-2.6877-.6033-4.0528.099-.4518.2715-.9186.6318-1.1878.2046-.1536.452-.2293.6975-.2872.6156-.146 1.2512-.198 1.8812-.154l.33-1.1467c.054-.1864.108-.3773.0993-.572-.0212-.4554-.393-.8263-.8058-.9727-.412-.1463-.8604-.115-1.2947-.0823"
			}), r.a.createElement("path", {
				fill: "#F15A24",
				d: "M12.322 21.7194c.061.3407.127.693.3168.977.3034.4517.85.6324 1.3573.785.3797.1136.7785.2284 1.165.141.2643-.0598.5012-.2104.725-.3697.61-.433 1.1792-.9615 1.5326-1.6395.3962-.7593.4926-1.684.2625-2.5148-.0912-.3294-.2458-.6615-.524-.843-.2292-.1494-.5564-.2205-.6293-.4927-.1057-.3946-1.938-.4537-2.25-.4202-.474.051-.939.1728-1.2797.5403-.9068.9784-.8953 2.613-.676 3.8366M24.194 19.0418c.0644.3482.1334.708.3344.998.3193.462.8963.6468 1.431.8023.4005.1164.8212.234 1.2286.1447.2793-.0614.529-.2154.7647-.3776.644-.443 1.244-.983 1.617-1.6756.4174-.776.5195-1.7205.2768-2.5694-.0964-.3366-.2596-.6762-.5526-.8614-.242-.1528-.587-.2255-.664-.5037-.1117-.4033-2.0443-.464-2.3736-.4297-.4998.052-.9902.1766-1.3498.5523-.9564 1-.9442 2.67-.7126 3.9202"
			}), r.a.createElement("path", {
				fill: "#CCC",
				d: "M35.9408 20.9708c.222.0064.4462.0053.6533.066.4068.1196.9188.5786.945-.1845.007-.1902.012-.3904-.0708-.56-.122-.251-.5983-.9602-.824-1.087-.1087-.061-.236-.0694-.359-.073-.3063-.0092-.613.0014-.9182.0315-.9906.0986-.7374 1.4513.01 1.725.177.0647.3693.0764.5638.082"
			}), r.a.createElement("path", {
				fill: "#FF7BAC",
				d: "M37.8215 19.8532c-.0306.0467-.0694.0968-.123.099-.0946.0034-.1258-.128-.1816-.2085-.0644-.0938-.1824-.1258-.29-.1506-.4784-.112-1.163-.1415-1.5974-.3738-.4688-.251-.4095-.3117-.2434-.8975.178-.6268.4606-1.3722 1.071-1.6617 2.0532-.9728 2.1506 1.9814 1.3643 3.1932"
			}), r.a.createElement("path", {
				fill: "#FF0",
				d: "M30.808 32.959c.0077.0694.0343.1556.1004.1593-.0834-.0335-.1158.1122-.095.203.429.0508.8583.1012 1.2877.152.263.0313.5674.0482.752-.151.1304-.141.16-.3512.1825-.5462.032-.274.064-.548.0964-.822.0082-.0724.0135-.1552-.0336-.2086-.034-.0388-.087-.051-.137-.0588-.219-.0327-.446-.0064-.6532.075-.6713.2642-.6634-.6747-1.1966-.4688-.4516.1747-.346 1.279-.3035 1.6663"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M31.9858 34.3613c.3538.146.738.196 1.1182.2014 2.1213.03 4.1668-1.396 5.0646-3.4086.8978-2.0117.661-4.4994-.4998-6.3584-.514-.8238-1.3235-1.5857-2.2608-1.5168-.594.0433-1.1344.429-1.4745.9404-.3405.5112-.499 1.1347-.552 1.7558-.1233 1.4442.3143 2.9324 1.1923 4.053"
			}), r.a.createElement("path", {
				fill: "#F7E1CB",
				d: "M11.2195 30.4984l9.4083-2.7606 1.318 7.9058-7.4904 2.7607"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M12.7516 37.7683c.2136.2304.5864.1393.8525-.0207 1.096-.6588 1.5454-2.1516 1.337-3.4564-.108-.6758-.3805-1.3463-.877-1.792-.4966-.446-1.243-.6212-1.827-.3125-.402.212-.682.6167-.8776 1.041-.4437.9637-.5192 2.107-.206 3.1258.1683.548.462 1.0782.9255 1.388.4637.3095 1.1184.3464 1.543-.0195"
			}), r.a.createElement("g", null, r.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M27.37 11.0563c-2.068-.6386-4.2747-.727-6.4318-.54-2.669.2313-5.8933.8336-7.6967 2.1168-.6986.4972-3.0193 1.2145-3.5257 3.1977"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M10.0543 14.9054c-1.561-.3985-3.317.0782-4.4594 1.2103-1.1422 1.132-1.726 2.906-1.237 4.4356.5752 1.8004 1.926 3.0712 2.306 3.275"
			}), r.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M10.0543 14.9054c-1.561-.3985-3.317.0782-4.4594 1.2103-1.1422 1.132-1.7258 2.906-1.237 4.4356.5756 1.8004 1.926 3.0712 2.306 3.275"
			}), r.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M11.823 29.9606c-2.7657-.9024-4.92-3.4455-5.3476-6.3126-.034-.2298.0103-.55.2428-.5677M33.1486 15.4973c.192.314.384.6286.576.9427.114.1872.2283.374.33.5677.5276 1.003.7084 2.182.5062 3.2958M35.8308 16.6844c-1.6376 4.9262-3.3644 9.8235-5.1785 14.688"
			}), r.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M35.671 17.0804c.2263-.288.586-.4587.9517-.4895.366-.0313.736.0692 1.0563.2483.2708.1508.515.364.6543.6404.1393.276.161.6202.0118.8913M38.3983 17.8874c-.6142 1.9982-1.3304 3.9652-2.145 5.891"
			}), r.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M37.245 21.08c.2485-.5347.1342-1.2158-.2747-1.641-.4093-.425-1.0872-.5678-1.6347-.3436-.1367.0562-.278.1512-.301.297"
			}), r.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M37.2275 21.501c.0044-.5535-.3094-1.0984-.791-1.374-.482-.2753-1.113-.2705-1.5904.012"
			}), r.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M34.2996 20.788c.7136-.389 1.6686-.2757 2.2706.269.2052.1856.376.4304.3964.706.006.0785-.0008.1578-.0196.2345M31.8127 33.921c.3626.1424.7564.1912 1.1458.1963 2.1737.0294 4.2697-1.3607 5.1896-3.3225.92-1.961.6773-4.386-.512-6.1982-.5268-.803-1.3562-1.5457-2.3166-1.4785-.6087.0423-1.1624.4184-1.511.9168-.3488.4983-.5113 1.106-.5655 1.7115-.1264 1.4077.322 2.8584 1.2216 3.9508M33.9912 29.3915l-1.467 4.0393M32.6352 33.0774c-.951.6286-1.8904 1.2738-2.8177 1.935"
			}), r.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M30.6496 31.0486l-.6455 4.1743c-.0058.0366-.0053.083.0385.099.044.0162.0833-.0547.0346-.0517"
			}), r.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M30.1422 33.367c.1982-.3278.4635-.6147.7748-.8386.078.1534.1257.3226.139.4943.287-.1218.5986-.183.9103-.1802-.3703.3692-.701.778-.9844 1.2173"
			}), r.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M31.195 33.0817c-.389.5013-.7464 1.0268-1.0695 1.5725.0302-.0257.0604-.0514.0902-.0775M30.7412 32.969c.0104.3634-.12.7275-.3766 1.0607M32.6658 33.0168c.1094-.676.1787-1.3585.2074-2.0422-.326.1956-.6525.3912-.979.5872-.1045.0627-.2386.1262-.3414.06-.063-.04-.091-.1166-.1135-.1874-.133-.4158-.2417-.8396-.3253-1.2682-.291.3247-.547.6807-.7626 1.0594"
			}), r.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M33.4372 28.176c-.177.4906-.354.9812-.5313 1.472-.285.7874-.5726 1.5822-1.0206 2.291M36.2456 21.1264c.048-.0176.0608-.0917.0218-.1244-.3043.6815-.5497 1.3883-.732 2.1112M30.4806 30.95c-.0843.2098-.1095.43-.074.6453M32.6366 25.235c-1.3602 1.8225-3.2855 3.1704-5.3524 4.1286-2.0672.958-4.284 1.55-6.5023 2.0763M30.348 27.747c.454.2455.8732.5552 1.24.9174M31.3832 34.1252c.6447 1.895.9225 3.913.8134 5.9105"
			}), r.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M20.2203 27.5033c.529 2.5225.9453 5.069 1.2474 7.6282.0048.042.0063.0925-.0276.1178-.0345.0253-.095-.029-.0603-.0536"
			}), r.a.createElement("path", {
				stroke: "#000",
				d: "M21.462 35.1753c-2.4317 1.1842-4.9882 2.113-7.614 2.7662-.0714.0177-.1587.031-.208-.023-.0494-.0544.038-.1667.0828-.1083",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), r.a.createElement("path", {
				stroke: "#000",
				d: "M13.3965 36.9094l.6482 1.51c-.01-.0428-.0207-.086-.0312-.129",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), r.a.createElement("path", {
				stroke: "#000",
				d: "M12.104 37.242c.219.2246.601.1358.8735-.0202 1.123-.6422 1.5835-2.0972 1.3698-3.369-.111-.659-.3898-1.3124-.8986-1.747-.5087-.4348-1.2736-.6054-1.872-.3045-.4118.2066-.6988.601-.8992 1.0147-.4546.9394-.532 2.054-.211 3.047.1723.5342.4733 1.051.9482 1.353.4753.3016 1.1462.3376 1.5813-.019M10.6766 30.3595c-.0715-.0158-.065.1064-.022.1655l.7927 1.0914c.011.0154.0276.0326.0457.0264.018-.006.0015-.0418-.01-.0268M10.6893 30.2222c3.1114-1.025 6.255-1.953 9.425-2.782.0814.1758.1628.352.2443.5274",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), r.a.createElement("path", {
				stroke: "#000",
				d: "M17.6433 28.0588c-.2222-.2202-.246-.6037-.5073-.7755-.2244-.148-.522-.0737-.7792.0048-1.0368.3175-2.073.6346-3.11.952-.2287.07-.4843.163-.579.382-.1275.2944.111.6096.332.843M13.849 27.877c-.025-.1897.085-.3783.2402-.4906.1554-.1123.349-.1592.5393-.1816.302-.0364.678.0275.7848.3115M17.774 36.8926c-.1595-.0286-.2392.1064-.234.201.068 1.193.0596 2.3876-.0247 3.5806M27.3276 14.627c-1.155-.254-2.4348.1776-3.1982 1.0778-.763.9005-.975 2.23-.5294 3.3214.203.498.537.9487.9825 1.252.757.5157 1.7714.556 2.64.263.9157-.3095 1.7137-.983 2.115-1.8592.401-.8763.3797-1.9464-.108-2.7783-.4875-.8312-1.447-1.3828-2.412-1.3303",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), r.a.createElement("path", {
				stroke: "#000",
				strokeWidth: ".5",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M15.604 17.5287c-.993-.5754-2.3376-.3743-3.2093.371-.872.745-1.2777 1.9505-1.1753 3.0903.038.4224.1422.845.359 1.2103.4368.7372 1.309 1.1618 2.168 1.1684.8592.007 1.6937-.3673 2.346-.924.2724-.2316.518-.497.7086-.799.465-.738.5666-1.6924.2675-2.511-.2992-.8188-.993-1.485-1.8255-1.7524"
			}), r.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M25.8734 23.061c.019.8443.036 1.706-.2144 2.513-.3128 1.0058-1.0497 1.8733-1.9936 2.347-.9442.4738-2.0827.547-3.0803.1982"
			}), r.a.createElement("path", {
				fill: "#000",
				d: "M24.826 27.045c-.909 1.0263-2.4282 1.5463-3.7262 1.098-.325-.1124-.682-.385-.5983-.7172-.305-.1123-.6554.132-.9616.024-.1132-.0405-.2045-.124-.2882-.21-.507-.519-.8602-1.1846-1.0054-1.894 1.3742.2257 2.797.237 4.147-.1035.6403-.1614 1.2614-.404 1.8365-.7284.2493-.1406 1.482-1.2717 1.6324-1.2287.3404.0972-.014 1.6884-.081 1.9398-.1798.6673-.4952 1.3003-.9554 1.82"
			}), r.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M24.826 27.045c-.909 1.0263-2.4282 1.5463-3.7262 1.098-.325-.1124-.682-.385-.5983-.7172-.305-.1123-.6554.132-.9616.024-.1132-.0405-.2045-.124-.2882-.21-.507-.519-.8602-1.1846-1.0054-1.894 1.3742.2257 2.797.237 4.147-.1035.6403-.1614 1.2614-.404 1.8365-.7284.2493-.1406 1.482-1.2717 1.6324-1.2287.3404.0972-.014 1.6884-.081 1.9398-.1798.6673-.4952 1.3003-.9554 1.82z"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M27.1593 11.0486c.356-.539.901-.9515 1.5182-1.148.3725-.1184.7656-.1595 1.157-.1632 1.2186-.011 2.452.3553 3.4137 1.1013.9616.7464 1.63 1.8822 1.7275 3.0925l.0405 1.2437c.0792.8083-.1735 1.644-.687 2.274-.0244.03-.0506.0716-.0296.1038.021.0323.0833-.0212.0465-.033"
			}), r.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M27.1593 11.0486c.356-.539.901-.9515 1.5182-1.148.3725-.1184.7656-.1595 1.157-.1632 1.2186-.011 2.452.3553 3.4137 1.1013.9616.7464 1.63 1.8822 1.7275 3.0925l.0405 1.2437c.0792.8083-.1735 1.644-.687 2.274-.0244.03-.0506.0716-.0296.1038.021.0323.0833-.0212.0465-.033M19.0092 10.923c-.1602-.079-.1772-.2954-.172-.4733.078-2.7703.1672-5.5993 1.1384-8.1964 1.835.0793 3.6632.3303 5.4515.7494"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M24.8624 3.1944c-.9362 1.032-.8485 2.7633.0626 3.8172.9108 1.0536 2.4758 1.4224 3.826 1.0687.64-.1677 1.2505-.4896 1.6915-.981 1.0054-1.121.9137-2.9152.1555-4.215-.237-.407-.534-.784-.9052-1.075-.72-.5643-1.7132-.7643-2.597-.5235-.883.241-1.6355.917-1.9667 1.768"
			}), r.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M24.8624 3.1944c-.9362 1.032-.8485 2.7633.0626 3.8172.9108 1.0536 2.4758 1.4224 3.826 1.0687.64-.1677 1.2505-.4896 1.6915-.981 1.0054-1.121.9137-2.9152.1555-4.215-.237-.407-.534-.784-.9052-1.075-.72-.5643-1.7132-.7643-2.597-.5235-.883.241-1.6355.917-1.9667 1.768"
			}))))
		},
		"./src/reddit/icons/svgs/TextPost/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_13NhOjx-Siom7MKe3Dex5y"
			}
		},
		"./src/reddit/icons/svgs/TextPost/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/TextPost/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M16.8656 7.205H13.139c-.3428 0-.621-.2782-.621-.621 0-.343.2782-.621.621-.621h3.7266c.343 0 .621.278.621.621 0 .3428-.278.621-.621.621zm0 3.416H13.139c-.3428 0-.621-.2782-.621-.621s.2782-.621.621-.621h3.7266c.343 0 .621.2782.621.621s-.278.621-.621.621zm0 3.416H3.2016c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621zm-13.664 3.416c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621H3.2016zm-.621-14.285c0-.343.278-.621.621-.621h6.5997c.343 0 .621.278.621.621V10c0 .3428-.278.621-.621.621H3.2016c-.343 0-.621-.2782-.621-.621V3.168zM1.3382.0625C.6513.0625.096.6178.096 1.3047v17.3906c0 .687.5554 1.2422 1.2423 1.2422H18.729c.6868 0 1.242-.5553 1.242-1.2422V1.3047c0-.687-.5552-1.2422-1.242-1.2422H1.3382z"
			}))
		},
		"./src/reddit/icons/svgs/ThumbnailSelect/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_3QNLLzw_kUPhkWkxg22tT9"
			}
		},
		"./src/reddit/icons/svgs/ThumbnailSelect/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/ThumbnailSelect/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, r.a.createElement("path", {
				d: "M0 0h20v20H0z"
			}), r.a.createElement("path", {
				fill: "#A5A4A4",
				d: "M6 3h8c1.1046 0 2 .8954 2 2v10c0 1.1046-.8954 2-2 2H6c-1.1046 0-2-.8954-2-2V5c0-1.1046.8954-2 2-2zm11 1c1.1046 0 2 .8954 2 2v8c0 1.1046-.8954 2-2 2V4zM3 4v12h-.6667C1.597 16 1 15.1734 1 14.1538V5.8462C1 4.8266 1.597 4 2.3333 4H3z"
			})))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				a = n.n(i);
			const c = e => r.a.createElement("svg", {
				className: Object(s.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), r.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/Video/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", {
				transform: "translate(3, 4)"
			}, r.a.createElement("path", {
				d: "M15.4927,2.1514 C15.1797,1.9734 14.7947,1.9784 14.4857,2.1644 L11.9997,3.6554 L11.9997,2.0004 C11.9997,0.8974 11.1027,0.0004 9.9997,0.0004 L1.9997,0.0004 C0.8967,0.0004 -0.0003,0.8974 -0.0003,2.0004 L-0.0003,10.0004 C-0.0003,11.1034 0.8967,12.0004 1.9997,12.0004 L9.9997,12.0004 C11.1027,12.0004 11.9997,11.1034 11.9997,10.0004 L11.9997,8.3664 L14.4907,9.8394 C14.6477,9.9324 14.8237,9.9784 14.9997,9.9784 C15.1707,9.9784 15.3417,9.9344 15.4957,9.8474 C15.8077,9.6694 15.9997,9.3384 15.9997,8.9784 L15.9997,3.0214 C15.9997,2.6614 15.8057,2.3284 15.4927,2.1514"
			})))
		},
		"./src/reddit/layout/page/Listing/Content.m.less": function(e, t, n) {
			e.exports = {
				styledContent: "_1OVBBWLtHoSPfGCRaPzpTf",
				mCanFlexFullWidth: "PaJBYLqPf_Gie2aZntVQ7",
				mLargePostLayout: "_3nSp9cdBpqL13CqjdMr2L_",
				mDisableFullScreen: "_2udhMC-jldHp_EpAuBeSR1",
				mClassicWidth: "_1Tc65kRFm7a8piCXHVL4L4",
				mIsEditing: "_25-JsrYQ-pXWBM8eqpxeN7"
			}
		},
		"./src/reddit/layout/page/Listing/Content.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/structuredStyles.ts"),
				u = n("./src/reddit/layout/page/Listing/Content.m.less"),
				p = n.n(u);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const h = Object(d.t)(),
				b = Object(i.c)({
					isEditing: l.i,
					layout: (e, t) => t.forcedLayout || Object(d.O)(e, t)
				}),
				f = Object(s.b)(b),
				g = ({
					disableFullscreen: e,
					dispatch: t,
					fitPageToContent: n,
					forcedLayout: o,
					isCollectionLayout: s,
					isEditing: i,
					layout: a,
					pageLayer: c,
					...d
				}) => r.a.createElement("div", d);
			t.a = h(f(({
				className: e,
				...t
			}) => r.a.createElement(g, m({
				className: Object(a.a)(e, p.a.styledContent, {
					[p.a.mLargePostLayout]: t.layout === c.g.Large,
					[p.a.mDisableFullScreen]: t.disableFullscreen && !t.isCollectionLayout,
					[p.a.mClassicWidth]: t.isCollectionLayout,
					[p.a.mIsEditing]: !!t.isEditing,
					[p.a.mCanFlexFullWidth]: !t.fitPageToContent
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
				innerContainer: "_3ozFtOe6WpJEMUtxDOIvtU",
				bannerNavContainer: "q4a8asWOWdfdniAbgNhMh",
				backgroundContainer: "_33erTQ46yfKeF2B6B-ooMJ"
			}
		},
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/layout/page/Listing/Content.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/constants/componentSizes.ts"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				u = n("./src/reddit/constants/screenWidths.ts"),
				p = n("./src/reddit/models/Theme/index.ts"),
				m = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				h = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class b extends r.a.Component {
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
			var f = Object(h.a)(b);
			var g = e => r.a.createElement(f, e),
				E = n("./src/reddit/layout/page/Listing/index.m.less"),
				C = n.n(E);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const x = Object(a.a)(e => {
					const {
						backgroundColor: t,
						className: n,
						redditStyle: o,
						theme: s,
						...a
					} = e, c = Object(m.a)(e), d = {
						"--pseudo-before-background": t || Object(p.g)(c.canvas, c.canvasImgUrl, c.canvasImgPosition)
					};
					return r.a.createElement("div", y({
						className: Object(i.a)(C.a.backgroundContainer, n),
						style: d
					}, a))
				}),
				v = c.a.div("Body", C.a),
				O = c.a.div("Sidebar", C.a),
				_ = e => e.hero ? r.a.createElement(r.a.Fragment, null, e.hero) : null;

			function k(e) {
				const t = e.trendingUnit ? "28px" : "0",
					n = e.isPageSwapped ? {
						marginRight: `${d.q}px`,
						marginTop: t
					} : {
						marginLeft: `${d.q}px`,
						marginTop: t
					},
					o = e.sidebar && r.a.createElement(O, {
						className: e.isCollectionLayout ? C.a["m-collectionLayout"] : C.a.defaultLayout,
						style: n
					}, e.sidebar),
					a = r.a.createElement(s.a, {
						className: e.contentClassName,
						disableFullscreen: e.disableFullscreen,
						fitPageToContent: e.fitPageToContent,
						forcedLayout: e.forcedLayout,
						isCollectionLayout: e.isCollectionLayout
					}, e.contentBanner, e.content);
				let c;
				c = e.sidebars ? r.a.createElement(r.a.Fragment, null, e.sidebars[0], a, e.sidebars[1]) : e.isPageSwapped ? r.a.createElement(r.a.Fragment, null, o, a) : r.a.createElement(r.a.Fragment, null, a, o);
				const p = e.disableFullscreen ? `${e.maxWidth||u.a+2*d.m}px` : "100%";
				return r.a.createElement(g, {
					subredditId: e.subredditId
				}, r.a.createElement("div", {
					className: Object(i.a)(C.a.outerContainer, l.i, e.className),
					ref: e.containerRef
				}, r.a.createElement(x, {
					className: l.h,
					redditStyle: e.redditStyle,
					backgroundColor: e.backgroundColor
				}), r.a.createElement("div", {
					className: C.a.innerContainer
				}, r.a.createElement("div", {
					className: C.a.bannerNavContainer
				}, e.navBar), e.contentNavBar, _(e), r.a.createElement("div", {
					style: {
						maxWidth: p
					}
				}, e.trendingUnit), r.a.createElement(v, {
					style: {
						maxWidth: p
					}
				}, c))))
			}
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/Inline/index.m.less"),
				s = n.n(r);
			t.a = o.a.div("inlineRow", s.a)
		},
		"./src/reddit/layout/row/InlineButton/index.m.less": function(e, t, n) {
			e.exports = {
				inlineButton: "_10K5i7NW6qcm-UoCtpB3aK"
			}
		},
		"./src/reddit/layout/row/InlineButton/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/InlineButton/index.m.less"),
				s = n.n(r);
			t.a = o.a.button("inlineButton", s.a)
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, n) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/RightAlign/index.m.less"),
				s = n.n(r);
			t.a = o.a.div("rightAligned", s.a)
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, n) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = n.n(a);
			t.a = Object(s.a)(e => r.a.createElement("div", {
				className: Object(i.a)(c.a.expandedCenterContainer, e.className)
			}, r.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), r.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), r.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				c = n.n(a);
			t.a = Object(s.a)(e => r.a.createElement("div", {
				className: Object(i.a)(c.a.exapndLeftContainer, e.className)
			}, r.a.createElement("div", {
				className: c.a.left
			}, Array.isArray(e.children) && e.children[0]), r.a.createElement("div", {
				className: c.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			var o, r, s = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(o || (o = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(r || (r = {}));
			const i = {
					[o.Loyalty]: s.a.First,
					[o.Achievement]: s.a.Second,
					[o.Cosmetic]: void 0
				},
				a = e => e === s.a.First ? o.Loyalty : e === s.a.Second ? o.Achievement : o.Cosmetic
		},
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			}));
			var o, r = n("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups", e.Premium = "premium"
			}(o || (o = {}));
			const s = {
				[o.Powerups]: () => r.fbt._("Reddit - Buy Powerups", null, {
					hk: "4sEI31"
				}),
				[o.Premium]: () => r.fbt._("Reddit - Buy Premium", null, {
					hk: "19EtMU"
				})
			};
			var i, a;
			! function(e) {
				e.Month = "MONTH", e.Year = "YEAR"
			}(i || (i = {})),
			function(e) {
				e.GildFlow = "gild_flow", e.LowCoinBalance = "low_coin_balance", e.NewUserTargetedOffer = "new_user_targeted_offer", e.RepeatUserTargetedOffer = "repeat_user_targeted_offer", e.StorefrontFreeAward = "storefront_free_award", e.CoinSale = "coin_sale", e.AvatarNewGear = "avatar_new_gear"
			}(a || (a = {}));
			const c = (e, t) => {
				const n = e && e.dealInfo && e.dealInfo.type,
					o = "low_coin_upsell" === n,
					r = "new_purchaser" === n,
					s = "repeat_purchaser" === n;
				return t ? a.GildFlow : o ? a.LowCoinBalance : r ? a.NewUserTargetedOffer : s ? a.RepeatUserTargetedOffer : void 0
			}
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "n", (function() {
				return u
			})), n.d(t, "o", (function() {
				return p
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "q", (function() {
				return g
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "m", (function() {
				return O
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "p", (function() {
				return S
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/lib/assertNever.ts"),
				r = n("./src/reddit/models/GqlTopLevelField.ts"),
				s = n("./src/reddit/models/User/index.ts");
			const i = "scheduledposts";
			var a, c, d;
			! function(e) {
				e.LINK = "LINK", e.POLL = "POLL", e.SELF = "SELF"
			}(a || (a = {})),
			function(e) {
				e.RTJSON = "RTJSON", e.TEXT = "TEXT"
			}(c || (c = {})),
			function(e) {
				e.CREATED = "CREATED", e.PROCESSING = "PROCESSING", e.FAILED = "FAILED", e.SUCCESS = "SUCCESS"
			}(d || (d = {}));
			const l = e => {
					return new Set(["links", "text", "polls"]).has(e)
				},
				u = e => e.__typename === s.c.AvailableRedditor,
				p = e => e.__typename === r.a.Subreddit;
			var m, h, b, f;
			! function(e) {
				e.standalonePosts = "standalonePosts", e.recurringPosts = "recurringPosts"
			}(m || (m = {})),
			function(e) {
				e.MONDAY = "MONDAY", e.TUESDAY = "TUESDAY", e.WEDNESDAY = "WEDNESDAY", e.THURSDAY = "THURSDAY", e.FRIDAY = "FRIDAY", e.SATURDAY = "SATURDAY", e.SUNDAY = "SUNDAY"
			}(h || (h = {})),
			function(e) {
				e[e.MONDAY = 0] = "MONDAY", e[e.TUESDAY = 1] = "TUESDAY", e[e.WEDNESDAY = 2] = "WEDNESDAY", e[e.THURSDAY = 3] = "THURSDAY", e[e.FRIDAY = 4] = "FRIDAY", e[e.SATURDAY = 5] = "SATURDAY", e[e.SUNDAY = 6] = "SUNDAY"
			}(b || (b = {})),
			function(e) {
				e[e.SUNDAY = 0] = "SUNDAY", e[e.MONDAY = 1] = "MONDAY", e[e.TUESDAY = 2] = "TUESDAY", e[e.WEDNESDAY = 3] = "WEDNESDAY", e[e.THURSDAY = 4] = "THURSDAY", e[e.FRIDAY = 5] = "FRIDAY", e[e.SATURDAY = 6] = "SATURDAY"
			}(f || (f = {}));
			const g = e => h[f[e]],
				E = e => f[h[e]],
				C = e => b[h[e]],
				y = e => h[b[e]],
				x = e => f[b[e]];
			var v;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(v || (v = {}));
			const O = e => {
					switch (e) {
						case v.Hourly:
						case v.Daily:
						case v.Weekly:
						case v.Monthly:
							return !0
					}
					return !1
				},
				_ = "custom",
				k = e => {
					switch (e) {
						case "isNsfw":
							return "mark_as_nsfw";
						case "isOriginalContent":
							return "mark_as_oc";
						case "isSticky":
							return "sticky";
						case "isModDistinguished":
							return "mod_distinguish";
						case "isSpoiler":
							return "mark_as_spoiler";
						case "isContestMode":
							return "mark_as_contest_mode";
						case "isPostAsMetaMod":
							return "post_as_meta_mod";
						default:
							return Object(o.a)(e)
					}
				},
				S = e => "frequency" in e && !!e.frequency
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, n) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/pages/ErrorPages/index.m.less"),
				c = n.n(a);
			const d = ({
					message: e
				}) => s.a.createElement("div", {
					className: c.a.container
				}, s.a.createElement("h3", {
					className: c.a.title
				}, e || o.fbt._("Sorry, there doesn't seem to be anything here.", null, {
					hk: "3VvHek"
				})), s.a.createElement(i.k, {
					className: c.a.primaryRouterLink,
					to: "/"
				}, o.fbt._("Go Home", null, {
					hk: "3E9E1g"
				}))),
				l = ({
					message: e
				}) => s.a.createElement("div", {
					className: c.a.container
				}, s.a.createElement("h3", {
					className: c.a.title
				}, e || o.fbt._("Sorry, You do not have permission to view this page.", null, {
					hk: "4lRbHD"
				})), s.a.createElement(i.k, {
					className: c.a.primaryRouterLink,
					to: "/"
				}, o.fbt._("Go Home", null, {
					hk: "3E9E1g"
				})))
		},
		"./src/reddit/pages/PostCreation/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/postCreation/general.ts"),
				c = n("./src/reddit/components/JumpToContent/index.tsx"),
				d = n("./node_modules/fbt/lib/FbtPublic.js"),
				l = n("./node_modules/lodash/once.js"),
				u = n.n(l),
				p = n("./node_modules/react-router-redux/es/index.js"),
				m = n("./src/lib/constants/index.ts"),
				h = n("./src/reddit/constants/keycodes.ts"),
				b = n("./src/reddit/helpers/correlationIdTracker.ts"),
				f = n("./src/reddit/models/PostCreationForm/index.ts"),
				g = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				E = n("./src/reddit/pages/ErrorPages/index.tsx"),
				C = n("./src/reddit/components/CrosspostBox/index.tsx"),
				y = n("./src/reddit/components/RequestPendingBanner/index.tsx"),
				x = n("./src/reddit/components/RichTextEditor/media/helpers.ts"),
				v = n("./src/reddit/contexts/PageLayer/index.tsx"),
				O = n("./src/reddit/helpers/trackers/postComposer.ts"),
				_ = n("./src/reddit/selectors/activeModalId.ts"),
				k = n("./src/reddit/selectors/platform.ts"),
				S = n("./src/reddit/selectors/postCreations.ts"),
				j = n("./src/reddit/selectors/postDraft.ts"),
				T = n("./src/reddit/selectors/subreddit.ts"),
				w = n("./src/reddit/selectors/user.ts"),
				I = n("./src/reddit/actions/changeUsername.ts"),
				P = n("./src/reddit/actions/externalAccount.ts"),
				R = n("./src/reddit/actions/postCreation/mediaUpload.ts"),
				M = n("./src/lib/makeActionCreator/index.ts"),
				N = n("./src/telemetry/index.ts"),
				D = n("./src/reddit/actions/governance/index.ts"),
				L = n("./src/reddit/actions/pages/subreddit.ts"),
				A = n("./src/reddit/actions/postDraft.ts"),
				F = n("./src/reddit/actions/scheduledPosts/index.ts"),
				B = n("./src/reddit/actions/urlRequested.ts"),
				U = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				K = n("./src/config.ts"),
				W = n("./src/lib/convertToCamelCase/index.ts"),
				G = n("./src/lib/makeApiRequest/index.ts"),
				H = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				q = n("./src/lib/omitHeaders/index.ts"),
				V = n("./src/reddit/constants/headers.ts"),
				z = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				Q = n("./src/reddit/helpers/flair.ts"),
				Y = n("./src/reddit/helpers/name/index.ts"),
				J = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				X = n("./src/reddit/models/Poll/index.ts"),
				Z = n("./src/reddit/models/Post/index.ts"),
				$ = n("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function ee(e) {
				return Math.floor(e.valueOf() / 1e3)
			}
			const te = e => {
					switch (e.kind) {
						case f.o.CROSSPOST:
							return f.o.CROSSPOST;
						case f.o.LINK:
							return f.o.LINK;
						case f.o.POLL:
							return f.o.POLL;
						case f.o.MEDIA:
							return e.makeGif ? f.o.VIDEO_GIF : e.mediaType;
						default:
							return "self"
					}
				},
				ne = e => {
					switch (e.kind) {
						case f.o.RICH_TEXT:
							return {
								richtext_json: JSON.stringify({
									document: e.document
								})
							};
						case f.o.MARKDOWN:
							return {
								text: e.markdown
							};
						case f.o.LINK:
						case f.o.MEDIA:
							return {
								url: e.url
							};
						case f.o.CROSSPOST:
							return {
								crosspost_fullname: e.sourcePostId
							};
						case f.o.POLL:
							return e.poll.type === X.a.Prediction ? {
								duration: 999999,
								end_timestamp: ee(e.poll.endDate),
								options: e.poll.options.map(e => e.text),
								prediction: !0,
								text: e.markdown,
								raw_rtjson: "markdown" in e ? null : JSON.stringify({
									document: e.document
								})
							} : {
								duration: Math.floor(e.poll.duration / 864e5),
								options: e.poll.options.map(e => e.text),
								text: e.markdown,
								raw_rtjson: "markdown" in e ? null : JSON.stringify({
									document: e.document
								})
							}
					}
				},
				oe = e => {
					const t = Object(Y.g)(e.destSubreddit.name);
					return {
						sr: t,
						api_type: "json",
						show_error_list: !0,
						draft_id: e.draftId || void 0,
						title: e.title,
						discussion_type: e.isChatPost ? Z.b.Chat : void 0,
						spoiler: e.isSpoiler,
						nsfw: e.isNSFW,
						...e.kind !== f.o.POLL ? {
							kind: te(e),
							original_content: e.isOC,
							...e.destSubreddit.isProfile ? {
								sr: `u_${t}`,
								submit_type: "profile"
							} : {
								sr: t,
								submit_type: "subreddit"
							}
						} : {},
						post_to_twitter: e.postToTwitter,
						sendreplies: e.sendReplies,
						...e.gRecaptchaResponse ? {
							"g-recaptcha-response": e.gRecaptchaResponse
						} : {},
						resubmit: e.resubmit,
						...ne(e),
						...e.kind === f.o.MEDIA && "video" === e.mediaType ? {
							video_poster_url: e.videoThumbnailUrl
						} : {},
						...e.kind === f.o.MEDIA && e.makeGif ? {
							make_gif: "on"
						} : {},
						...e.flair ? {
							flair_id: e.flair.templateId,
							flair_text: Object(Q.g)(e.flair)
						} : {},
						...e.validate_on_submit ? {
							validate_on_submit: e.validate_on_submit
						} : {},
						...e.eventSchedule && {
							event_start: e.eventSchedule.startDate,
							event_end: e.eventSchedule.endDate,
							event_tz: e.eventSchedule.timezoneName,
							unlist: e.eventSchedule.submitTime === f.i.AtEventTime
						},
						...e.collectionId && {
							collection_id: e.collectionId
						}
					}
				},
				re = async (e, t) => {
					if (!e.ok) return Object(J.b)(e);
					const n = e.body.json.data;
					let o = n.url;
					o || t.kind !== f.o.MEDIA || (o = await ((e, t) => new Promise(n => {
						const o = new WebSocket(e),
							r = e => {
								o.close(), clearTimeout(s), n(e)
							},
							s = setTimeout(() => {
								r("")
							}, t);
						o.onmessage = e => {
							const t = JSON.parse(e.data),
								n = "success" === t.type ? t.payload.redirect : "";
							r(n)
						}, o.onerror = e => {
							r("")
						}
					}))(n.websocket_url, 3e4));
					const r = n.id || (e => {
							const t = /comments\/(\w+)\/.*$/.exec(e),
								n = t && t[1];
							return n ? `${m.Fb.Post}_${n}` : ""
						})(o),
						s = Object(H.parse)(o).path,
						i = n.drafts_count;
					return {
						...e,
						body: {
							id: r,
							path: s,
							draftsCount: i
						}
					}
				};
			var se = (e, t) => Object(G.a)(Object(q.a)(e, [V.a]), {
				endpoint: Object($.a)(Object(z.a)(`${e.apiUrl}/api/submit?resubmit=true`)),
				method: m.hb.POST,
				data: oe(t)
			}).then(async e => await re(e, t));
			var ie = n("./src/reddit/endpoints/scheduledPosts/index.ts"),
				ae = n("./src/reddit/endpoints/scheduledPosts/update.ts"),
				ce = n("./src/reddit/featureFlags/index.ts"),
				de = n("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				le = n("./src/reddit/helpers/scheduledPosts/index.ts"),
				ue = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				pe = n("./src/reddit/models/User/index.ts"),
				me = n("./src/reddit/selectors/scheduledPosts/index.ts"),
				he = n("./src/reddit/models/ScheduledPost/index.ts"),
				be = n("./src/reddit/actions/postCreation/constants.ts");
			const fe = Object(M.a)(be.w),
				ge = Object(M.a)(be.L),
				Ee = Object(M.a)(be.o),
				Ce = Object(M.a)(be.y),
				ye = Object(M.a)(be.X),
				xe = Object(M.a)(be.F),
				ve = Object(M.a)(be.a),
				Oe = Object(M.a)(be.B),
				_e = e => `/r/${e}/about/${he.r}`,
				ke = (e, t) => {
					const n = e || {
							duration: m.z,
							options: []
						},
						{
							govType: o,
							newSubreddit: r,
							newTopMod: s
						} = Object(S.s)(t),
						i = {
							...n
						};
					return o && (i.type = o), i.type === X.a.ReplaceTopMod ? (i.params = {
						userName: s
					}, i.options = X.f[X.a.ReplaceTopMod]()) : i.type === X.a.Spinoff ? (i.params = {
						subreddit: r
					}, i.options = X.f[X.a.Spinoff](r)) : i.options = i.options.map(e => ({
						text: e.text.trim()
					})).filter(e => !!e.text), i
				},
				Se = e => {
					const t = e.uploads,
						n = Object(S.U)(e),
						o = Object(S.a)(e),
						r = Object(S.eb)(e);
					if (o === m.Rb.POST) return U.a.getPendingThumbnailUploads(r, t);
					if (o === m.Rb.MEDIA && n && n.items.length) {
						const {
							video: e
						} = n.items[0];
						if (e && e.thumbnail && !t[f.m]) return [{
							...e.thumbnail,
							uploadKey: f.m
						}]
					}
				},
				je = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = n(),
						s = Object(S.bb)(r),
						i = Object(S.cb)(r, e),
						a = Object(S.h)(r),
						c = Object(me.r)(r);
					if (!(i && a.id && s && Object(le.f)(c))) return;
					const d = a.id,
						l = Object(me.a)(r, {
							subredditId: d,
							scheduledPostId: c
						});
					if (l && Object(N.a)(Object(ue.r)(l)(r)), t(fe(i)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(S.v)(n()))) return;
					const {
						isPoll: u,
						polls: p
					} = Object(S.s)(r), m = ke(p, r), h = {
						...Object(ie.e)({
							poll: u ? m : void 0,
							submission: i,
							schedule: s,
							subredditId: a.id,
							scheduledPostId: c
						})
					}, b = await Object(ae.a)(o(), h);
					if (b.ok) return t(Object(F.e)({
						subredditId: a.id
					})), void t(Object(B.a)(_e(a.name), !1));
					const f = b.error;
					t(Ee(f))
				}, Te = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = n(),
						s = Object(S.bb)(r),
						i = Object(S.cb)(r, e),
						a = Object(S.h)(r),
						c = Object(me.b)(r);
					if (!i || !a.id || !s) return;
					if (t(fe(i)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(S.v)(n()))) return;
					const {
						isPoll: d,
						polls: l
					} = Object(S.s)(r), u = ke(l, r), p = {
						duration: u.duration,
						options: u.options
					}, m = {
						...Object(ie.d)({
							poll: d ? p : void 0,
							submission: i,
							schedule: s,
							subredditId: a.id
						}),
						creationToken: c
					}, h = await Object(ie.a)(o(), m);
					if (h.ok) {
						t(Object(F.e)({
							subredditId: a.id
						}));
						const e = h.body.data.createScheduledPost.scheduledPost;
						return e && Object(N.a)(Object(ue.o)(Object(de.d)(e))(r)), void t(Object(B.a)(_e(a.name), !1))
					}
					const b = h.error;
					t(Ee(b))
				}, we = e => async (t, n, {
					apiContext: o
				}) => {
					const r = n(),
						s = Object(S.cb)(r, e),
						{
							isPoll: i,
							polls: c
						} = Object(S.s)(r),
						d = ke(c, r);
					if (!s) return;
					if (t(fe(s)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(S.v)(n()))) return;
					let l;
					const u = i && ce.d.spPolls(r);
					if ((l = u ? await
							function(e, t, n) {
								const o = t.destSubreddit.id;
								return Object(G.a)(e, {
									method: m.hb.POST,
									endpoint: `${K.a.metaUrl}/polls/${o}`,
									type: "json",
									data: {
										poll: n,
										subredditId: o,
										...Object(W.a)(oe(t))
									}
								}).then(async e => {
									const n = e.ok ? {
											...e,
											body: {
												json: {
													data: e.body
												}
											}
										} : e,
										o = await re(n, t);
									if (o.ok) {
										return {
											body: {
												...o.body,
												poll: e.body.poll
											},
											ok: !0,
											status: e.status
										}
									}
									return {
										error: o.body,
										ok: !1,
										status: e.status
									}
								})
							}(o(), s, d) : i ? await ((e, t) => Object(G.a)(Object(q.a)(e, [V.a]), {
								endpoint: Object($.a)(Object(z.a)(`${e.apiUrl}/api/submit_poll_post.json?resubmit=true`)),
								method: m.hb.POST,
								data: oe(t),
								type: "json"
							}).then(e => re(e, t)))(o(), {
								...s,
								kind: f.o.POLL,
								poll: d
							}) : s.kind === f.o.GALLERY ? await ((e, t) => Object(G.a)(Object(q.a)(e, [V.a]), {
								endpoint: Object($.a)(Object(z.a)(`${e.apiUrl}/api/submit_gallery_post.json?resubmit=true`)),
								method: m.hb.POST,
								data: {
									...oe(t),
									items: t.galleryItems.map(e => ({
										caption: e.caption,
										outbound_url: e.url,
										media_id: e.assetId
									}))
								},
								type: "json"
							}).then(e => re(e, t)))(o(), s) : await se(o(), s)).ok) {
						const e = Object(w.j)(r),
							n = l.body;
						t(ge({
							draftId: s.draftId,
							response: n
						})), u && t(Object(D.c)({
							poll: n.poll
						}));
						const o = (n.path || `/user/${Object(pe.e)(e)}/posts`).replace(/^\/r\/u_/, "/user/");
						t(Object(L.subredditInvalidateListing)(s.destSubreddit.name)), t(Object(B.a)(o, !1))
					} else {
						if (i) {
							const e = l.error;
							t(Ce(e))
						}
						const e = l.error;
						e.type === m.G.BAD_CAPTCHA_ERROR ? t(ve()) : e.type === m.G.VALIDATION_ERROR ? t(ye(e)) : e.type === m.G.SUBMIT_VALIDATION_ERROR ? t(xe(e)) : t(Ee(e))
					}
					const p = Object(a.m)(s.kind),
						h = l.ok && l.body && l.body.id && Object(Z.s)(l.body.id),
						b = n();
					O.r(b, p, h)
				};
			var Ie = n("./src/reddit/actions/postCreation/subredditChange.ts"),
				Pe = n("./src/reddit/actions/upload.ts"),
				Re = n("./src/reddit/helpers/externalAccount/index.tsx"),
				Me = n("./node_modules/history/esm/history.js"),
				Ne = n("./node_modules/react-router/esm/react-router.js"),
				De = n("./src/lib/matchRoute/index.ts"),
				Le = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx");
			const Ae = "DISCARD_POST_ON_NAVIGATION_MODAL_ID",
				Fe = Object(i.c)({
					isEditingScheduledPost: e => !!Object(me.r)(e),
					isScheduledPost: S.Q
				});
			var Be = Object(s.b)(Fe)(e => {
					const {
						isEditingScheduledPost: t,
						isScheduledPost: n,
						onAbort: o,
						onDiscardConfirmed: s,
						onSaveDraft: i,
						submissionType: a
					} = e;
					return m.F.has(a) && !n ? r.a.createElement(Le.a, {
						bodyText: d.fbt._("Do you want to save a draft of your post?", null, {
							hk: "3EV54t"
						}),
						onClose: o,
						onPrimaryAction: i,
						onSecondaryAction: s,
						primaryButtonText: d.fbt._("Save Draft", null, {
							hk: "1VdofA"
						}),
						secondaryButtonText: d.fbt._("Discard Post", null, {
							hk: "1CBjtn"
						}),
						titleText: d.fbt._("Save draft", null, {
							hk: "44JnYT"
						})
					}) : r.a.createElement(Le.a, {
						bodyText: t ? d.fbt._("Returning to the previous page will discard your changes", null, {
							hk: "2LlXOp"
						}) : d.fbt._("Returning to the previous page will discard your post", null, {
							hk: "3fT0mW"
						}),
						onClose: o,
						onPrimaryAction: o,
						onSecondaryAction: s,
						primaryButtonText: d.fbt._("Edit Post", null, {
							hk: "3dI1el"
						}),
						secondaryButtonText: t ? d.fbt._("Discard Changes", null, {
							hk: "7JOA"
						}) : d.fbt._("Discard Post", null, {
							hk: "1CBjtn"
						}),
						titleText: t ? d.fbt._("Discard Changes", null, {
							hk: "2vyCBa"
						}) : d.fbt._("Discard Post", null, {
							hk: "2BlkSe"
						})
					})
				}),
				Ue = n("./src/reddit/routes/postCreation/index.ts");
			const Ke = e => (e.returnValue = "", ""),
				We = Object(i.c)({
					destSubreddit: S.h,
					hasError: S.u,
					havePostContent: S.B,
					isChanged: S.F,
					modalId: _.a,
					submitPostPending: S.mb
				}),
				Ge = Object(s.b)(We, e => ({
					onToggleDiscardModal: () => e(a.x(Ae))
				}), (e, t, n) => ({
					...e,
					...t,
					...n
				}));
			class He extends r.a.Component {
				constructor() {
					super(...arguments), this.unblockNavigation = null, this.ensureBlocked = e => {
						e.isChanged && (e.havePostContent || e.destSubreddit.name) ? this.block(e) : this.unblock()
					}, this.block = e => {
						this.unblockNavigation || (window.addEventListener("beforeunload", Ke), this.unblockNavigation = e.history.block((e, t) => {
							if (!Object(De.a)(Object(Me.e)(e), [Ue.a])) return this.props.modalId !== Ae && this.props.onToggleDiscardModal(), "Are you sure you want to leave?"
						}))
					}, this.unblock = () => {
						this.unblockNavigation && (this.unblockNavigation(), this.unblockNavigation = null), window.removeEventListener("beforeunload", Ke)
					}
				}
				componentDidMount() {
					this.ensureBlocked(this.props)
				}
				componentWillReceiveProps(e) {
					!this.props.submitPostPending || e.submitPostPending || e.hasError ? this.ensureBlocked(e) : this.unblock()
				}
				componentWillUnmount() {
					this.unblock()
				}
				render() {
					return null
				}
			}
			var qe = Object(v.t)({
					draftId: v.u,
					pageLayer: e => e
				})(Ge(Object(Ne.i)(He))),
				Ve = n("./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx"),
				ze = n("./src/lib/classNames/index.ts"),
				Qe = n("./src/lib/lessComponent.tsx"),
				Ye = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"),
				Je = n("./src/reddit/components/ScheduledPost/PostSchedulePickerModal/loader.tsx"),
				Xe = n("./src/reddit/controls/ErrorText/index.tsx"),
				Ze = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				$e = n("./src/reddit/icons/fonts/index.tsx"),
				et = n("./src/reddit/layout/row/Inline/index.tsx"),
				tt = n("./src/reddit/models/Media/index.ts"),
				nt = n("./src/reddit/models/Upload/index.ts"),
				ot = n("./src/reddit/selectors/moderatorPermissions.ts"),
				rt = n("./src/reddit/models/Duplicates/index.ts"),
				st = n("./src/reddit/selectors/posts.ts");
			var it = n("./src/reddit/controls/Button/index.tsx"),
				at = n("./src/reddit/components/PostCreationForm/Button/index.m.less"),
				ct = n.n(at);
			const dt = Qe.a.wrapped(it.i, "PrimaryButton", ct.a),
				lt = Qe.a.wrapped(it.l, "SecondaryButton", ct.a);
			var ut = n("./src/lib/timezone/index.ts"),
				pt = n("./src/reddit/icons/svgs/Replay/index.tsx"),
				mt = n("./src/reddit/components/PostCreationForm/PostCreationFooter/ScheduledTimeInfo/index.m.less"),
				ht = n.n(mt);
			const {
				fbt: bt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ft = Qe.a.div("Container", ht.a), gt = Object(i.c)({
				eventSchedule: S.p,
				postSchedule: S.bb
			});
			var Et = Object(s.b)(gt)(e => {
					const {
						eventSchedule: t,
						postSchedule: n
					} = e;
					let o;
					if (t && t.submitTime !== f.i.Now) o = (e => {
						const t = Object(ut.f)(e.startDate);
						let n = `${t.toLocaleDateString(void 0,{month:"numeric",day:"numeric",year:"2-digit"})} ${t.toLocaleTimeString([],{hour:"numeric",minute:"numeric"}).replace(" ","")}`;
						const o = Object(ut.d)(e.timezoneName, +t);
						return o && (n += ` ${o.abbreviation}`), r.a.createElement("span", null, bt._("Will automatically post at", null, {
							hk: "1ixr16"
						}), " ", r.a.createElement("time", {
							dateTime: e.startDate
						}, n))
					})(t);
					else {
						if (!n) return null;
						o = (e => {
							const t = Object(ut.f)(e.submitDate);
							let n = `${t.toLocaleDateString(void 0,{month:"numeric",day:"numeric"})} ${t.toLocaleTimeString([],{hour:"numeric",minute:"numeric"}).replace(" ","")}`;
							const o = Object(ut.d)(e.timezoneName, +t);
							o && (n += ` ${o.abbreviation}`);
							const s = e.recurrenceInfo ? r.a.createElement("span", null, r.a.createElement(pt.a, {
								className: ht.a.replayIcon
							}), bt._("Recurring post template scheduled for", null, {
								hk: "2tTwIB"
							})) : bt._("Post scheduled for", null, {
								hk: "47yVoo"
							});
							return r.a.createElement("span", null, s, " ", r.a.createElement("time", {
								dateTime: e.submitDate
							}, n))
						})(n)
					}
					return r.a.createElement(ft, null, o)
				}),
				Ct = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				yt = n("./src/lib/linkMatchers/index.ts"),
				xt = n("./src/reddit/contexts/PageLayer/selectors.ts");
			const vt = Object(M.a)(be.G),
				Ot = Object(M.a)(be.H),
				_t = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const s = o(),
						i = Object(xt.r)(s, {
							pageLayer: t
						});
					if (!i) return;
					const a = Object(S.q)(s, {
						field: e
					});
					if (!a) return;
					const c = Object(S.f)(s),
						l = await ((e, t, n, o, r) => Object(G.a)(Object(q.a)(e, [V.a]), {
							endpoint: `${e.apiUrl}/api/validate_submission_field`,
							method: m.hb.POST,
							data: {
								sr: t,
								field: n,
								kind: o,
								title: r.title || "",
								url: r.url || null,
								text: r.selftext,
								richtext_json: r.rtjson && JSON.stringify({
									document: r.rtjson
								}),
								flair_id: r.flairId || null,
								show_error_list: !0
							}
						}).then(J.b))(r(), i.name, e, c, a),
						u = l.error || function(e, t) {
							if (e === m.ub.LINK && !Object(yt.h)(yt.f, t.url || "")) return {
								fields: [{
									field: m.ub.LINK,
									msg: d.fbt._("Link doesn't look right", null, {
										hk: "11qrsa"
									})
								}],
								type: m.G.SUBMIT_VALIDATION_ERROR
							}
						}(e, a);
					u && u.fields && u.fields.length ? n(vt(u)) : n(Ot(e)), l.error && n(xe(l.error))
				};
			var kt = n("./src/reddit/components/Flair/index.tsx"),
				St = n("./src/reddit/controls/TextButton/index.tsx"),
				jt = n("./src/reddit/controls/Typography/index.tsx"),
				Tt = n("./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/OCDisclaimer/index.m.less"),
				wt = n.n(Tt);
			const {
				fbt: It
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Pt = Qe.a.wrapped(St.a, "DontShowButton", wt.a);
			var Rt, Mt = Qe.a.wrapped(e => {
					const {
						className: t,
						onDoNotShowClick: n
					} = e;
					return r.a.createElement("div", {
						className: t
					}, r.a.createElement(jt.a, null, It._("Use the OC tag if you want to take credit for your post as Original Content.", null, {
						hk: "2D3GYX"
					})), r.a.createElement(jt.a, null, r.a.createElement(Pt, {
						onClick: n
					}, It._("Cool, whatever, don't show me this again.", null, {
						hk: "4nvsEF"
					}))))
				}, "Component", wt.a),
				Nt = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				Dt = n("./src/reddit/constants/colors.ts");
			! function(e) {
				e.CHAT = "chat", e.FLAIR = "flair", e.GOVERNANCE = "gov", e.SPOILER = "spoiler", e.NSFW = "nsfw", e.ORIGINAL_CONTENT = "originalContent", e.SCHEDULE = "schedule"
			}(Rt || (Rt = {}));
			var Lt = n("./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/PostModifierButton/index.m.less"),
				At = n.n(Lt);
			Qe.a.div("TintOverlay", At.a);
			const Ft = (e, t) => {
					switch (t) {
						case Rt.ORIGINAL_CONTENT:
							return {
								backgroundColor: Dt.b.orangered, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Rt.CHAT:
							return {
								backgroundColor: Dt.b.chat, textColor: e.newCommunityTheme.lightText, iconColor: e.newCommunityTheme.lightText
							};
						case Rt.SPOILER:
							return {
								backgroundColor: Dt.b.spoiler, textColor: e.newCommunityTheme.lightText, iconColor: e.newCommunityTheme.lightText
							};
						case Rt.NSFW:
							return {
								backgroundColor: Dt.b.nsfw, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Rt.FLAIR:
							return {
								backgroundColor: e.newCommunityTheme.flair, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Rt.SCHEDULE:
							return {
								backgroundColor: e.newCommunityTheme.active, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Rt.GOVERNANCE:
							return {
								backgroundColor: e.newCommunityTheme.line, textColor: e.newCommunityTheme.bodyText, iconColor: e.newCommunityTheme.bodyText
							};
						default:
							return {
								backgroundColor: "none", textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							}
					}
				},
				Bt = e => Object(Ct.a)(t => {
					const {
						addModifierTooltip: n,
						children: o,
						className: s,
						disabled: i,
						disabledTooltip: a,
						Icon: c,
						id: d,
						onClick: l,
						removeModifierTooltip: u,
						style: p,
						text: m,
						theme: h,
						toggled: b
					} = t, f = i && a ? a : b ? u : n, g = {
						color: t.textColor || h && Ft(h, e).textColor,
						fill: t.textColor || h && Ft(h, e).iconColor,
						backgroundColor: t.backgroundColor || h && Ft(h, e).backgroundColor,
						borderColor: "transparent"
					};
					return r.a.createElement(it.q, {
						"aria-label": f,
						className: Object(ze.a)(s, At.a.PostModifierButton),
						disabled: i,
						Icon: c,
						id: d,
						onClick: l,
						priority: it.b.Secondary,
						style: {
							...p,
							...b ? g : {}
						},
						text: m
					}, r.a.createElement(Nt.a, {
						text: f,
						className: At.a.HoverTooltip,
						tooltipContentClass: t.shiftTooltipToRight ? At.a.mShiftTooltipToTheRight : void 0
					}), o)
				});
			var Ut = n("./src/reddit/constants/postCreation.ts"),
				Kt = n("./src/higherOrderComponents/asTooltip.tsx"),
				Wt = n("./src/reddit/components/PostCreationForm/EduTooltips/BaseEduTooltip/index.m.less"),
				Gt = n.n(Wt);
			const {
				fbt: Ht
			} = n("./node_modules/fbt/lib/FbtPublic.js"), qt = Qe.a.div("Container", Gt.a), Vt = Qe.a.div("OuterContainer", Gt.a);
			class zt extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipRef = null, this.onGotItClick = e => {
						this.close(!0), e.stopPropagation()
					}, this.onKeyDown = e => {
						e.keyCode === h.a.Escape && this.close(!1)
					}, this.onMouseClick = e => {
						this.tooltipRef && !this.tooltipRef.contains(e.target) && this.close(!1)
					}, this.onWindowResize = () => {
						this.close(!1)
					}, this.setTooltipRef = e => {
						this.tooltipRef = e
					}
				}
				componentDidMount() {
					document.addEventListener("keydown", this.onKeyDown), document.addEventListener("click", this.onMouseClick), window.addEventListener("resize", this.onWindowResize), this.tooltipRef && this.tooltipRef.scrollIntoView({
						behavior: "smooth",
						block: "end"
					})
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.onKeyDown), document.removeEventListener("click", this.onMouseClick), window.removeEventListener("resize", this.onWindowResize)
				}
				close(e) {
					this.props.onClose(e)
				}
				render() {
					const e = this.props;
					return r.a.createElement(Vt, {
						className: e.className,
						innerRef: this.setTooltipRef,
						style: e.style
					}, r.a.createElement(qt, {
						className: Gt.a.container
					}, r.a.createElement("img", {
						src: e.heroImagePath,
						className: Gt.a.hero
					}), r.a.createElement("div", {
						className: Gt.a.contentContainer
					}, r.a.createElement("div", {
						className: Gt.a.title
					}, e.title), r.a.createElement("div", {
						className: Gt.a.description
					}, e.description), r.a.createElement("div", {
						className: Gt.a.iconsExplanations
					}, e.iconsExplanations.map((e, t) => {
						const n = e.iconComponent;
						return r.a.createElement("div", {
							className: Gt.a.iconExplanation,
							key: t
						}, r.a.createElement(n, {
							className: Gt.a.icon
						}), e.text)
					})), r.a.createElement(it.i, {
						className: Gt.a.gotIt,
						onClick: this.onGotItClick
					}, Ht._("Got it", null, {
						hk: "2RPumB"
					})))))
				}
			}
			var Qt = Object(Kt.a)(zt),
				Yt = n("./node_modules/lodash/debounce.js"),
				Jt = n.n(Yt),
				Xt = n("./src/reddit/actions/modal.ts"),
				Zt = n("./src/reddit/helpers/localStorage/index.ts"),
				$t = n("./src/reddit/helpers/trackers/postCollection.ts");
			const en = [{
					id: Ut.d,
					getShowTimesLeft: Zt.H,
					setShowTimesLeft: Zt.Gb,
					tooltipShown: $t.n,
					tooltipDismissed: $t.m
				}, {
					id: Ut.c,
					getShowTimesLeft: Zt.G,
					setShowTimesLeft: Zt.Fb,
					tooltipShown: $t.f,
					tooltipDismissed: $t.e
				}],
				tn = {};
			let nn;
			const on = () => (void 0 === nn && (nn = en.filter(e => e.getShowTimesLeft() > 0).map(e => e.id)), nn),
				rn = e => {
					const t = on().indexOf(e);
					t > -1 && on().splice(t, 1)
				},
				sn = e => async (t, n) => {
					const o = en.find(t => t.id === e);
					o && (an(o, !0), Object(N.a)(o.tooltipDismissed(n())))
				}, an = (e, t) => {
					e.setShowTimesLeft(t ? 0 : e.getShowTimesLeft() - 1)
				}, cn = () => async (e, t) => {
					const n = Object(_.a)(t()),
						o = on().find(e => !!tn[e]);
					if (!o || o === n) return;
					const r = en.find(e => e.id === o);
					r && (Object(N.a)(r.tooltipShown(t())), an(r)), e(Xt.i(o))
				}, dn = Jt()(e => e(), 100);

			function ln(e, t) {
				const n = Object(i.c)({
					isOpen: e => Object(_.a)(e) === t
				});
				class o extends r.a.Component {
					componentDidMount() {
						tn[t] = !0, dn(this.props.onShowNextTooltip)
					}
					componentWillUnmount() {
						tn[t] = !1, dn(this.props.onShowNextTooltip)
					}
					render() {
						const {
							isOpen: t,
							...n
						} = this.props;
						return t ? r.a.createElement(e, n) : null
					}
				}
				return Object(s.b)(n, e => ({
					onCloseTooltip: n => {
						rn(t), n && e(sn(t)), e(Xt.i(t)), e(cn())
					},
					onShowNextTooltip: () => e(cn())
				}))(o)
			}
			var un = n("./src/reddit/components/PostCreationForm/EduTooltips/EventButtonTooltip/index.m.less"),
				pn = n.n(un);
			var mn, hn = ln(e => {
					const {
						onCloseTooltip: t
					} = e;
					return r.a.createElement(Qt, {
						className: pn.a.container,
						description: d.fbt._("Let your community know about discussion threads, AMA’s or even a game thread.", null, {
							hk: "4aMUL6"
						}),
						heroImagePath: `${K.a.assetPath}/img/events-tooltip-hero@2x.png`,
						iconsExplanations: [{
							iconComponent: Object($e.b)("add"),
							text: d.fbt._("Compose a post like normal.", null, {
								hk: "so4h7"
							})
						}, {
							iconComponent: Object($e.b)("scheduled"),
							text: d.fbt._("Schedule when the event is happening.", null, {
								hk: "2EoghL"
							})
						}, {
							iconComponent: Object($e.b)("live"),
							text: d.fbt._("Remind your community when its live.", null, {
								hk: "2W4fY"
							})
						}],
						isOpen: !0,
						isOverlayOff: !0,
						onClose: t,
						title: d.fbt._("Make an Event", null, {
							hk: "4Bz0L3"
						}),
						tooltipId: Ut.a
					})
				}, Ut.d),
				bn = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx"),
				fn = n("./src/reddit/components/PostFlairPicker/index.tsx");
			! function(e) {
				e.ORIGINAL_CONTENT_DISCLAIMER = "original_content_disclaimer"
			}(mn || (mn = {}));
			var gn = n("./src/reddit/helpers/trackers/postEvent.ts"),
				En = n("./src/reddit/models/Subreddit/index.ts"),
				Cn = n("./src/reddit/selectors/chatPost.ts");
			const yn = e => e.creations.formState.fieldValidation;
			var xn = n("./src/telemetry/models/PostComposer.ts"),
				vn = n("./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/index.m.less"),
				On = n.n(vn);
			const _n = "PostFlair--Modal--CreationForm",
				kn = e => {
					let t = Object(ut.f)(e.startDate).toLocaleDateString(void 0, {
						month: "numeric",
						day: "numeric",
						hour: "numeric",
						minute: "numeric"
					});
					return t = t.replace(" ", "").replace(",", " ")
				},
				Sn = Qe.a.wrapped(kt.b, "FlairComponent", On.a),
				jn = Qe.a.div("FlairTextWrapper", On.a),
				Tn = Qe.a.wrapped(et.a, "ModifierRow", On.a),
				wn = Bt(Rt.ORIGINAL_CONTENT),
				In = Bt(Rt.CHAT),
				Pn = Bt(Rt.SPOILER),
				Rn = Bt(Rt.NSFW),
				Mn = Bt(Rt.FLAIR),
				Nn = Bt(Rt.SCHEDULE),
				Dn = Object(v.t)({
					draftId: v.u,
					pageLayer: e => e
				}),
				Ln = Object(i.c)({
					activeModalId: _.a,
					canAddPostFlair: S.c,
					canPostAsModerator: S.e,
					currentSubredditId: v.m,
					destSubreddit: S.h,
					destSubredditAboutInfo: S.g,
					eventSchedule: S.p,
					isChatPostAvailable: Cn.a,
					isChatPostSelected: S.G,
					isNsfw: S.M,
					isSpoiler: S.R,
					isOriginalContent: S.N,
					flair: S.r,
					postCreationFieldErrors: yn,
					postSchedule: S.bb,
					submissionType: S.a
				}),
				An = Object(s.b)(Ln, (e, {
					onPostFieldValidation: t,
					pageLayer: n
				}) => ({
					doNotShowOriginalContentDisclaimerClicked: () => e((e, t) => O.d(t())),
					onEventScheduleChange: t => {
						e(a.a(t))
					},
					postFlairAdded: o => {
						e(a.b(o)), t(e(_t(m.ub.FLAIR, n)))
					},
					toggleSchedulePicker: (t, n) => {
						e(a.x(f.f)), t && e((e, t) => {
							(n ? gn.g : gn.f)(t())
						})
					},
					toggleChatPostTag: t => {
						e(a.s(!t)), e((e, n) => O.y(n(), !t, xn.ToggleNoun.CHAT))
					},
					toggleFlairPicker: () => e(a.x(_n)),
					toggleNsfwTag: t => {
						e(a.t(!t)), e((e, n) => O.y(n(), !t, xn.ToggleNoun.NSFW))
					},
					toggleOriginalContentTag: t => {
						e(a.u(!t)), e((e, n) => O.y(n(), !t, xn.ToggleNoun.ORIGINAL_CONTENT))
					},
					toggleSpoilerTag: t => {
						e(a.w(!t)), e((e, n) => O.y(n(), !t, xn.ToggleNoun.SPOILER))
					}
				}));
			class Fn extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showOCDisclaimer: !1
					}, this.handlePostFlairSelected = ({
						previewFlair: e
					}) => {
						this.props.flair !== e && this.props.postFlairAdded(e)
					}, this.handleOCDisclaimerDoNotShowClick = () => {
						const {
							doNotShowOriginalContentDisclaimerClicked: e
						} = this.props;
						e(), Object(Zt.jb)(mn.ORIGINAL_CONTENT_DISCLAIMER, !0), this.setState({
							showOCDisclaimer: !1
						})
					}, this.handleOriginalContentClick = () => {
						this.props.toggleOriginalContentTag(this.props.isOriginalContent)
					}, this.handleChatPostClick = () => {
						this.props.toggleChatPostTag(this.props.isChatPostSelected)
					}, this.handleSpoilerClick = () => {
						this.props.toggleSpoilerTag(this.props.isSpoiler)
					}, this.handleNsfwClick = () => {
						this.props.toggleNsfwTag(this.props.isNsfw)
					}, this.handleToggleSchedulePicker = () => {
						const e = this.props.activeModalId !== f.f,
							t = !!this.props.eventSchedule;
						this.props.toggleSchedulePicker(e, t)
					}
				}
				componentDidMount() {
					this.setState({
						showOCDisclaimer: !Object(Zt.i)(mn.ORIGINAL_CONTENT_DISCLAIMER)
					})
				}
				render() {
					const {
						activeModalId: e,
						canAddPostFlair: t,
						canPostAsModerator: n,
						className: o,
						currentSubredditId: s,
						destSubreddit: i,
						destSubredditAboutInfo: a,
						eventSchedule: c,
						disabled: l,
						flair: u,
						isChatPostAvailable: p,
						isChatPostSelected: h,
						isNsfw: b,
						isSpoiler: g,
						isOriginalContent: E,
						postCreationFieldErrors: C,
						postSchedule: y,
						submissionType: x,
						theme: v,
						toggleFlairPicker: O
					} = this.props, {
						showOCDisclaimer: _
					} = this.state, k = !!u, {
						backgroundColor: S = null,
						textColor: j = null
					} = u || {}, {
						allOriginalContent: T = !1,
						eventPostsEnabled: w = !1
					} = a || {}, I = i.isProfile || Object(En.g)(a), P = l || !I || T || x === m.Rb.CROSSPOST, R = l, M = l || !!y;
					return r.a.createElement("div", {
						className: o
					}, r.a.createElement(Tn, null, p && r.a.createElement(In, {
						disabled: R,
						onClick: this.handleChatPostClick,
						toggled: h,
						addModifierTooltip: d.fbt._("Use live chat instead of comments", null, {
							hk: "27t9lW"
						}),
						removeModifierTooltip: d.fbt._("Use comments instead of live chat", null, {
							hk: "3seokS"
						}),
						Icon: Object($e.b)(h ? "checkmark" : "chat"),
						text: d.fbt._("Live Chat", null, {
							hk: "cZlvm"
						})
					}), n && w && r.a.createElement(Nn, {
						disabled: M,
						id: Ut.a,
						onClick: this.handleToggleSchedulePicker,
						shiftTooltipToRight: !0,
						toggled: !!c,
						addModifierTooltip: d.fbt._("Add time and date info", null, {
							hk: "L2KN8"
						}),
						removeModifierTooltip: d.fbt._("Edit event data", null, {
							hk: "1FSblM"
						}),
						Icon: Object($e.b)("scheduled"),
						text: c ? kn(c) : d.fbt._("Event", null, {
							hk: "40pq7b"
						})
					}, r.a.createElement(hn, null), c && r.a.createElement($e.a, {
						name: "edit",
						className: On.a.editScheduledIcon
					})), e === f.f && r.a.createElement(bn.default, {
						schedule: this.props.eventSchedule,
						onClose: this.handleToggleSchedulePicker,
						onChange: this.props.onEventScheduleChange,
						shouldShowSubmitTime: !0,
						shouldShowDeleteButton: !0
					}), r.a.createElement(wn, {
						disabled: P,
						onClick: this.handleOriginalContentClick,
						shiftTooltipToRight: !0,
						toggled: I && (E || T),
						addModifierTooltip: d.fbt._("Mark this post as Original Content [OC]", null, {
							hk: "3V5aHC"
						}),
						removeModifierTooltip: d.fbt._("Unmark this post as Original Content [OC]", null, {
							hk: "2oj9GI"
						}),
						disabledTooltip: I ? "" : d.fbt._("This community does not allow original content tag", null, {
							hk: "gBN3o"
						}),
						Icon: Object($e.b)(E ? "checkmark" : "add"),
						text: d.fbt._("OC", null, {
							hk: "2GRpRs"
						})
					}), r.a.createElement(Pn, {
						disabled: l,
						onClick: this.handleSpoilerClick,
						toggled: g,
						addModifierTooltip: d.fbt._("Mark as a spoiler", null, {
							hk: "3ICynB"
						}),
						removeModifierTooltip: d.fbt._("Unmark as a spoiler", null, {
							hk: "34pmqg"
						}),
						Icon: Object($e.b)(g ? "checkmark" : "add"),
						text: d.fbt._("Spoiler", null, {
							hk: "1K7ROJ"
						})
					}), r.a.createElement(Rn, {
						disabled: l,
						onClick: this.handleNsfwClick,
						toggled: b,
						addModifierTooltip: d.fbt._("Mark as Not Safe For Work", null, {
							hk: "1LNeZB"
						}),
						removeModifierTooltip: d.fbt._("Unmark Not Safe For Work", null, {
							hk: "1EcrjD"
						}),
						Icon: Object($e.b)(b ? "checkmark" : "add"),
						text: d.fbt._("NSFW", null, {
							hk: "3Tg62D"
						})
					}), r.a.createElement(Mn, {
						className: Object(ze.a)(On.a.AddFlair, {
							[On.a.isToggled]: k,
							[On.a.mHasError]: C[m.ub.FLAIR].length > 0
						}),
						disabled: !t || l,
						disabledTooltip: i.id ? d.fbt._("Not available for this community", null, {
							hk: "2gkbLI"
						}) : d.fbt._("Select a subreddit to enable flair", null, {
							hk: "1LNvTq"
						}),
						onClick: O,
						toggled: k,
						addModifierTooltip: d.fbt._("Add flair", null, {
							hk: "1RHLMM"
						}),
						removeModifierTooltip: d.fbt._("Change or remove flair", null, {
							hk: "34t9cQ"
						}),
						backgroundColor: S,
						textColor: j,
						Icon: e => r.a.createElement($e.a, {
							name: "tag",
							className: Object(ze.a)(e.className, On.a.FlairIcon)
						}),
						style: {
							"--flairColor": k ? Object(kt.c)({
								...this.props,
								backgroundColor: S,
								textColor: j
							}) : !t || l ? v.newCommunityTheme.actionIconTinted80 : v.newCommunityTheme.actionIcon
						},
						text: r.a.createElement(r.a.Fragment, null, u ? r.a.createElement(Sn, {
							flair: u,
							forceSmallEmojis: !0
						}) : r.a.createElement(jn, null, d.fbt._("Flair", null, {
							hk: "4Dtvp0"
						})), r.a.createElement($e.a, {
							name: "caret_down",
							className: On.a.StyledCaretIcon
						}))
					}), e === _n && r.a.createElement(fn.a, {
						flairs: u ? [u] : [],
						modalId: _n,
						onFlairChanged: this.handlePostFlairSelected,
						subredditId: s || ""
					})), r.a.createElement(Xe.a, {
						className: On.a.errorMessages,
						messages: C[m.ub.FLAIR]
					}), I && E && _ && r.a.createElement(Mt, {
						onDoNotShowClick: this.handleOCDisclaimerDoNotShowClick
					}))
				}
			}
			var Bn = Dn(Object(Ct.a)(An(Fn))),
				Un = n("./src/reddit/components/PostCreationForm/EduTooltips/CollectionButtonTooltip/index.m.less"),
				Kn = n.n(Un);
			var Wn = ln(e => r.a.createElement(Qt, {
					className: Kn.a.container,
					description: d.fbt._("Create a series of scheduled events or just group random things. Make something awesome.", null, {
						hk: "40PwoH"
					}),
					heroImagePath: `${K.a.assetPath}/img/collection-tooltip-hero@2x.png`,
					iconsExplanations: [{
						iconComponent: Object($e.b)("add"),
						text: d.fbt._("Compose a post like normal.", null, {
							hk: "466GER"
						})
					}, {
						iconComponent: Object($e.b)("collection"),
						text: d.fbt._("Create & name your collection.", null, {
							hk: "3BuZKz"
						})
					}, {
						iconComponent: Object($e.b)("add_to_feed"),
						text: d.fbt._("Add more posts to your collection.", null, {
							hk: "2wzlHs"
						})
					}],
					isOpen: !0,
					isOverlayOff: !0,
					onClose: e.onCloseTooltip,
					title: d.fbt._("Create Collections!", null, {
						hk: "3tSmbj"
					}),
					tooltipId: Ut.g
				}), Ut.c),
				Gn = n("./src/reddit/components/PostCreationForm/ControlRow/ToggleDestCollectionButton/index.m.less"),
				Hn = n.n(Gn);
			var qn = r.a.memo(e => {
					const {
						disabled: t,
						isToggled: n
					} = e, o = n ? "delete" : "collection";
					return r.a.createElement(it.q, {
						className: Hn.a.button,
						priority: it.b.Plain,
						disabled: t,
						id: Ut.g,
						onClick: e.onClick,
						Icon: Object($e.b)(o)
					}, r.a.createElement(Nt.a, {
						text: n ? d.fbt._("Cancel adding to collection", null, {
							hk: "359w09"
						}) : d.fbt._("Add to collection", null, {
							hk: "48nVCZ"
						})
					}), !n && r.a.createElement(Wn, null))
				}),
				Vn = n("./src/reddit/components/TrackingHelper/index.tsx"),
				zn = n("./src/reddit/actions/economics/predictions/index.ts"),
				Qn = n("./src/reddit/actions/toaster.ts"),
				Yn = n("./src/reddit/helpers/trackers/predictions.ts"),
				Jn = n("./src/reddit/hooks/usePageLayer.ts"),
				Xn = n("./src/reddit/hooks/useTracking.ts"),
				Zn = n("./src/reddit/models/Toast/index.ts"),
				$n = n("./src/reddit/selectors/experiments/econ/index.ts"),
				eo = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				to = n("./src/higherOrderComponents/asModal/index.tsx");
			const {
				fbt: no
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var oo = Object(to.a)((function({
					onClose: e
				}) {
					const t = Object(s.d)(),
						n = Object(Xn.a)(),
						[i, c] = Object(o.useState)(!1),
						d = Object(s.e)(S.s),
						l = Object(s.e)(S.t),
						u = Object(Jn.a)(),
						{
							subredditName: m
						} = (null == u ? void 0 : u.urlParams) || {},
						h = Object(s.e)(e => Object(T.E)(e, m));
					return r.a.createElement(Le.a, {
						titleText: no._("Prediction created", null, {
							hk: "1O6btq"
						}),
						bodyText: no._("The prediction remains unpublished until the tournament begins. More predictions can be added at any time before the tournament ends.", null, {
							hk: "20T2xQ"
						}),
						onClose: e,
						primaryButtonText: no._("Start Tournament", null, {
							hk: "ft2Io"
						}),
						primaryButtonLoading: i,
						onPrimaryAction: async () => {
							n(Object(Yn.j)()), c(!0), t(Object(zn.b)({
								prediction: {
									formData: d,
									formState: l
								}
							}));
							try {
								await t(Object(zn.c)({
									subredditId: h
								})), t(Object(a.q)()), t(Object(zn.m)()), t(Object(p.b)(`/r/${m}/predictions/`))
							} catch (e) {
								t(Object(zn.l)()), t(Object(Qn.f)({
									duration: 5e3,
									kind: Zn.b.Error,
									text: no._("Error: Failed to create prediction tournament", null, {
										hk: "1gJN9i"
									})
								}))
							}
							c(!1)
						},
						onSecondaryAction: () => {
							n(Object(Yn.b)()), t(Object(zn.b)({
								prediction: {
									formData: d,
									formState: l
								}
							})), t(Object(a.q)()), t(Object(a.g)({
								submissionType: "poll"
							})), t(Object(a.v)(!0)), t(Object(a.j)({
								oldType: X.a.GA,
								type: X.a.Prediction
							})), e()
						},
						secondaryButtonText: no._("Create Another", null, {
							hk: "pQB1L"
						})
					})
				})),
				ro = n("./src/reddit/components/PostCreationForm/ControlRow/AddTournamentPredictionButton/index.m.less"),
				so = n.n(ro);
			const {
				fbt: io
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function ao({
				className: e,
				disabled: t
			}) {
				const n = Object(s.d)(),
					i = Object(Xn.a)(),
					c = Object(s.e)(S.s),
					d = Object(s.e)(S.t),
					[l, u] = Object(o.useState)(!1),
					[m, h] = Object(o.useState)(!1),
					b = Object(s.e)(S.D),
					f = Object(s.e)(S.x),
					g = Object(s.e)(S.w),
					E = Object(Jn.a)(),
					C = Object(s.e)(e => Object(xt.n)(e, {
						pageLayer: E
					})),
					y = Object(s.e)(e => Object(T.T)(e, {
						subredditId: C
					})),
					x = Object(s.e)(e => Object(eo.a)(e, {
						subredditId: C
					})),
					v = Object(s.e)($n.b);
				return r.a.createElement("div", {
					className: Object(ze.a)(so.a.addTournamentPredictionButton, e)
				}, r.a.createElement(it.i, {
					disabled: m || t || !f || !g,
					onClick: () => {
						x && !v ? (async () => {
							h(!0), n(Object(zn.b)({
								prediction: {
									formData: c,
									formState: d
								}
							}));
							try {
								await n(Object(zn.a)(x.tournamentId, C)), n(Object(a.q)()), n(Object(zn.m)()), n(Object(p.b)(`/r/${y.name}/predictions/`))
							} catch (e) {
								n(Object(zn.l)()), e.message.match(/max limit/) ? n(Object(Qn.f)({
									duration: 1e4,
									kind: Zn.b.Error,
									text: io._("Error: Failed to add prediction to tournament, there can only be 100 predictions created for a tournament", null, {
										hk: "UqJLw"
									})
								})) : n(Object(Qn.f)({
									duration: 5e3,
									kind: Zn.b.Error,
									text: io._("Error: Failed to add prediction to tournament", null, {
										hk: "3YK8YR"
									})
								}))
							}
							h(!1)
						})() : (i(Object(Yn.e)()), u(!0))
					}
				}, m ? r.a.createElement(Ze.a, {
					sizePx: 16
				}) : x ? io._("Post", null, {
					hk: "12GkA5"
				}) : io._("Next", null, {
					hk: "2m41ub"
				})), r.a.createElement("div", {
					className: so.a.tooltip
				}, b ? f ? g ? null : io._("End must be at least one hour from now", null, {
					hk: "lWM41"
				}) : io._("Options cannot be empty", null, {
					hk: "2BR1pQ"
				}) : io._("A title is required", null, {
					hk: "2hoEW2"
				})), l && r.a.createElement(oo, {
					onClose: () => u(!1)
				}))
			}
			var co = n("./src/reddit/components/PostCreationForm/ControlRow/index.m.less"),
				lo = n.n(co);
			const uo = () => d.fbt._("Post", null, {
					hk: "47QFCY"
				}),
				po = () => d.fbt._("Cancel", null, {
					hk: "2TSLl5"
				}),
				mo = () => d.fbt._("Saved!", null, {
					hk: "34qXtS"
				}),
				ho = () => d.fbt._("Save Draft", null, {
					hk: "3wckxd"
				}),
				bo = () => d.fbt._("Updated!", null, {
					hk: "45fGGU"
				}),
				fo = () => d.fbt._("Update draft", null, {
					hk: "1c8tCb"
				}),
				go = () => d.fbt._("Please fix the above requirements", null, {
					hk: "17Yk98"
				}),
				Eo = () => d.fbt._("Something went wrong. Just don't panic.", null, {
					hk: "4x2ypi"
				}),
				Co = 10,
				yo = Qe.a.wrapped(et.a, "Container", lo.a),
				xo = e => {
					return [m.Rb.LINK_ONLY, m.Rb.POLL, m.Rb.POST].includes(e)
				},
				vo = Qe.a.div("ButtonsAndErrors", lo.a),
				Oo = Qe.a.wrapped(et.a, "ButtonRow", lo.a),
				_o = Qe.a.div("ButtonLayout", lo.a),
				ko = Qe.a.div("SaveDraftButtonLayout", lo.a),
				So = Qe.a.wrapped(Ze.a, "PostLoadingIcon", lo.a),
				jo = Qe.a.wrapped(So, "DraftLoadingIcon", lo.a),
				To = Object(i.a)(S.eb, U.a.getMediaCount),
				wo = (e, t) => {
					return !!!Object(v.j)(e, t) && e.creations.formData.isPoll
				},
				Io = [],
				Po = e => {
					const t = Object(S.eb)(e),
						n = Object(S.kb)(e);
					if (!t.isBound || n !== m.Rb.POST || !Object(S.gb)(e)) return Io;
					const o = (e => {
						const {
							allowedPostTypes: t,
							name: n
						} = Object(S.h)(e), o = To(e);
						if (!o || !t) return null;
						let r = "";
						return !o.total || t.images || t.videos ? o.video && !t.videos ? r = d.fbt._("Videos are not allowed in r/{subreddit name}", [d.fbt._param("subreddit name", n)], {
							hk: "1EUr31"
						}) : !o.image && !o.gifvideo || t.images || (r = d.fbt._("Images are not allowed in r/{subreddit name}", [d.fbt._param("subreddit name", n)], {
							hk: "2pxaRa"
						})) : r = d.fbt._("Videos and images are not allowed in r/{subreddit name}", [d.fbt._param("subreddit name", n)], {
							hk: "3AMcQ8"
						}), r || null
					})(e);
					return o ? [o] : (e => {
						const t = To(e);
						if (!t) return Io;
						const n = [];
						return t.image > m.Y && n.push(d.fbt._("Post may not contain more that 20 images", null, {
							hk: "1Szc36"
						})), t.video + t.gifvideo > m.bb && n.push(d.fbt._("Post may not contain more that 5 videos", null, {
							hk: "2WhZ8k"
						})), n
					})(e)
				},
				Ro = (e, {
					sourcePostId: t
				}) => {
					const n = Object(S.ib)(e, {
							sourcePostId: t
						}),
						{
							allowedPostTypes: o,
							id: r,
							isProfile: s,
							name: i
						} = Object(S.h)(e);
					if (!t) return d.fbt._("A source post is required to crosspost", null, {
						hk: "2TeLDw"
					});
					if (!r) return d.fbt._("A destination community is required to crosspost", null, {
						hk: "3haidF"
					});
					const a = s ? Object(w.eb)(e, {
						userId: r
					}) : r;
					if (a) {
						if (((e, t, n) => {
								const o = Object(rt.a)(n, {
										sort: "new",
										crossposts_only: !0
									}),
									r = e.subreddits.duplicates.models[t];
								return !(r && r[o])
							})(e, a, t)) return d.fbt._("Checking community...", null, {
							hk: "1ycXCe"
						});
						if (((e, t, n) => {
								const o = ((e, t, n) => {
									const o = e.subreddits.duplicates.models[t];
									return o ? o[n] : []
								})(e, t, Object(rt.a)(n, {
									sort: "new",
									crossposts_only: !0
								}));
								return 0 !== o.length && Object(st.x)(e, o[0])
							})(e, a, t)) return d.fbt._("This community has the same crosspost within last 24 hours", null, {
							hk: "177pgf"
						})
					}
					if (!o || !n) return null;
					if (n.source) return !o.links && d.fbt._("This community does not allow for crossposting of link posts", null, {
						hk: "2cZPxJ"
					});
					const {
						isCrosspostableSubreddit: c
					} = Object(T.w)(e, {
						subredditName: i
					});
					if (!c) return d.fbt._("This community does not allow for crossposting of any posts", null, {
						hk: "2KrrAO"
					});
					switch (n.media && n.media.type) {
						case tt.o.TEXT:
						case tt.o.RTJSON:
							return !o.text && d.fbt._("This community does not allow for crossposting of text posts", null, {
								hk: "1a4voI"
							});
						case tt.o.IMAGE:
							return !o.images && d.fbt._("This community does not allow for crossposting of image posts", null, {
								hk: "tGzk7"
							});
						case tt.o.VIDEO:
						case tt.o.GIFVIDEO:
						case tt.o.EMBED:
							return !o.videos && d.fbt._("This community does not allow for crossposting of video posts", null, {
								hk: "w6HED"
							})
					}
					return null
				},
				Mo = (e, {
					sourcePostId: t
				}) => {
					const n = Object(S.U)(e),
						o = Object(S.eb)(e),
						r = Object(S.kb)(e);
					if (r === m.Rb.IMAGE_ONLY) return !1;
					if (!Object(S.h)(e).name || !Object(S.D)(e)) return !1;
					if (r === m.Rb.POST || r === m.Rb.POLL) {
						const t = Po(e),
							n = !U.a.isAllMediaUploaded(o, e.uploads);
						return !t.length && !n
					}
					if (r === m.Rb.MEDIA) {
						const {
							items: t
						} = n, o = t.every(t => {
							const n = e.uploads[t.uploadKey];
							return !(!n || !n.url || n.status !== nt.a.SUCCESS)
						});
						return t.length > 0 && o
					}
					return r === m.Rb.LINK_ONLY ? Object(S.y)(e) : r === m.Rb.CROSSPOST && !Ro(e, {
						sourcePostId: t
					})
				},
				No = Object(i.c)({
					isPoll: wo,
					activeModalId: _.a,
					currentSubredditOrProfile: v.o,
					canPostAsModerator: S.e,
					currentCollection: v.f,
					errorMsgs: (e, {
						sourcePostId: t
					}) => {
						if (Object(S.u)(e)) return Object(S.o)(e);
						if (t) {
							const n = Ro(e, {
								sourcePostId: t
							});
							if (n) return [n]
						}
						return Po(e)
					},
					eventSchedule: S.p,
					hasDraftError: j.f,
					hasError: S.u,
					hasSubmitValidationError: S.v,
					destSubredditAboutInfo: S.g,
					govType: e => e.creations.formData.govType,
					isAddingToTournament: (e, {
						subredditId: t
					}) => !!t && Object(S.E)(e, {
						subredditId: t
					}),
					isChatPostSelected: S.G,
					isContestMode: S.H,
					isCreatingTournamentPrediction: (e, {
						subredditId: t
					}) => !!t && Object(S.I)(e, {
						subredditId: t
					}),
					isDraftsFeatureEnabled: (e, t) => !wo(e, t),
					isDraftPending: j.g,
					isMediaUploadPending: S.V,
					isModeratorSomewhere: ot.i,
					isPostAsMetaMod: S.O,
					isPostPending: S.mb,
					isPostSubmitEnabled: Mo,
					isSaveDraftEnabled: e => {
						const t = Object(S.kb)(e);
						if (!m.F.has(t) || !Object(S.F)(e)) return !1;
						const n = Object(S.h)(e),
							o = Object(S.n)(e),
							r = t === m.Rb.LINK_ONLY && Object(S.y)(e),
							s = t === m.Rb.POST && o === f.h.RICH_TEXT && Object(S.C)(e),
							i = t === m.Rb.POST && o === f.h.MARKDOWN && Object(S.z)(e),
							a = r || s || i;
						return !!n.name || Object(S.D)(e) || a
					},
					isScheduledPost: S.Q,
					postSchedule: S.bb,
					postToTwitter: S.db,
					isEditingScheduledPost: e => !!Object(me.r)(e),
					showContributorRequestFlow: e => Object(T.q)(e, g.e.Post),
					showScheduledPosts: S.hb,
					stickyPosition: S.jb,
					submissionType: S.a,
					submitMode: S.lb,
					suggestedSort: S.ob
				}),
				Do = Object(v.t)(),
				Lo = Object(s.b)(No, e => ({
					onResetDestCollection: () => e(Ie.c()),
					onScheduledPostSettingsChange: t => e(a.A(t)),
					onTrackCancelButtonClick: () => {
						e((e, t) => O.a(t()))
					},
					openCollectionsListOrCreationModal: t => e(a.l(t)),
					togglePostSchedulePicker: () => e(a.x(f.n)),
					clickPostSchedule: () => {
						e((e, t) => Object(N.a)(Object(ue.i)()(t())))
					}
				})),
				Ao = 2e3,
				Fo = e => e ? d.fbt._("Update", null, {
					hk: "3MoYFL"
				}) : d.fbt._("Schedule", null, {
					hk: "4bXWUG"
				});
			class Bo extends r.a.Component {
				constructor() {
					super(...arguments), this.isSavedTimer = null, this.state = {
						draftId: null,
						isSaved: !1
					}, this.onCancel = () => {
						this.props.onTrackCancelButtonClick(), this.props.onCancel()
					}, this.handleDestCollectionClick = () => {
						const {
							currentCollection: e,
							onResetDestCollection: t,
							currentSubredditOrProfile: n,
							openCollectionsListOrCreationModal: o,
							sendEvent: r
						} = this.props;
						if (e) return t();
						n && (o(n.id), r(Object($t.b)(void 0, $t.a.collectionComposer)))
					}, this.shouldDisablePostButton = () => {
						const {
							contributorRequestPending: e,
							hasSubmitValidationError: t,
							isDraftPending: n,
							isMediaUploadPending: o,
							isPostPending: r,
							isPostSubmitEnabled: s
						} = this.props;
						return !s || n || r || o || this.state.isSaved || t || e
					}, this.shouldDisablePostScheduleButton = () => {
						const {
							eventSchedule: e,
							postToTwitter: t,
							submissionType: n
						} = this.props;
						return !!e || t || !xo(n)
					}, this.openPostSchedulePickerModal = () => {
						this.props.togglePostSchedulePicker(), this.props.clickPostSchedule()
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					!this.props.isDraftPending || e.isDraftPending || e.hasDraftError || this.setState({
						isSaved: !0,
						draftId: this.props.draftId
					}, () => {
						this.isSavedTimer = window.setTimeout(() => {
							this.isSavedTimer = null, this.setState({
								isSaved: !1,
								draftId: null
							})
						}, Ao)
					})
				}
				componentWillUnmount() {
					this.isSavedTimer && (clearTimeout(this.isSavedTimer), this.isSavedTimer = null)
				}
				getSaveDraftButtonText() {
					const {
						draftId: e
					} = this.props, {
						isSaved: t,
						draftId: n
					} = this.state;
					return t ? n ? bo() : mo() : e ? fo() : ho()
				}
				render() {
					const {
						activeModalId: e,
						canPostAsModerator: t,
						currentCollection: n,
						className: s,
						destSubredditAboutInfo: i,
						govType: a,
						hasError: c,
						hasSubmitValidationError: l,
						isEditingScheduledPost: u,
						errorMsgs: p,
						isAddingToTournament: h,
						isContestMode: b,
						isCreatingTournamentPrediction: E,
						isDraftsFeatureEnabled: C,
						isDraftPending: y,
						isPoll: x,
						isMediaUploadPending: v,
						isPostAsMetaMod: O,
						isPostPending: _,
						isSaveDraftEnabled: k,
						isScheduledPost: S,
						onPostFieldValidation: j,
						onScheduledPostSettingsChange: T,
						onSaveDraft: w,
						onSubmit: I,
						postSchedule: P,
						sendEvent: R,
						showContributorRequestFlow: M,
						showScheduledPosts: N,
						stickyPosition: D,
						submissionType: L,
						submitMode: A,
						suggestedSort: F,
						togglePostSchedulePicker: B
					} = this.props, {
						isSaved: U
					} = this.state, K = y || _ || v, W = A === f.q.Post && v, G = A === f.q.Draft && v, {
						collectionsEnabled: H = !1
					} = i || {}, q = K, V = Object(ze.a)(lo.a.ButtonLayout, {
						[lo.a.autoWidth]: x || M || N
					}), z = a === X.a.Prediction && (E || h);
					return r.a.createElement(yo, {
						className: s
					}, r.a.createElement(Bn, {
						className: lo.a.postModifiers,
						disabled: K,
						onPostFieldValidation: j
					}), r.a.createElement("hr", {
						className: lo.a.Divider
					}), r.a.createElement(vo, null, r.a.createElement(Oo, null, r.a.createElement("div", {
						className: V
					}, M ? r.a.createElement(Ye.default, {
						eventSource: g.b.PostSubmission,
						smallButton: !0
					}) : z ? r.a.createElement(ao, {
						disabled: this.shouldDisablePostButton()
					}) : r.a.createElement(dt, {
						disabled: this.shouldDisablePostButton(),
						onClick: I,
						className: Object(ze.a)(N && lo.a.removeRightBorderRadius)
					}, _ || W ? r.a.createElement(So, {
						sizePx: Co
					}) : r.a.createElement(o.Fragment, null, S ? Fo(u) : uo())), N && !z && r.a.createElement(dt, {
						title: d.fbt._("Make a scheduled post", null, {
							hk: "3TBSMs"
						}),
						disabled: this.shouldDisablePostScheduleButton(),
						onClick: this.openPostSchedulePickerModal,
						className: lo.a.postScheduleButton,
						Icon: P ? Object($e.b)("edit", {
							className: lo.a.postScheduleIcon
						}) : Object($e.b)("scheduled", {
							className: lo.a.postScheduleIcon
						})
					})), e === f.n && r.a.createElement(Je.a, {
						isContestMode: b,
						isPostAsMetaMod: O,
						sendEvent: R,
						schedule: P,
						stickyPosition: D,
						suggestedSort: F,
						onChange: T,
						onClose: B
					}), C && L !== m.Rb.MEDIA && L !== m.Rb.POLL && !S ? r.a.createElement(ko, null, r.a.createElement(lt, {
						disabled: !k || K || U,
						onClick: w
					}, y || G ? r.a.createElement(jo, {
						sizePx: Co
					}) : this.getSaveDraftButtonText())) : r.a.createElement(_o, null, r.a.createElement(lt, {
						disabled: K || U,
						onClick: this.onCancel
					}, po())), H && t && r.a.createElement(qn, {
						disabled: q,
						isToggled: !!n,
						onClick: this.handleDestCollectionClick
					})), r.a.createElement(Et, null), !!(c || p.length || l) && r.a.createElement(Xe.a, {
						className: lo.a.errorMessages,
						messages: p,
						fallbackMessage: l ? go() : Eo()
					})))
				}
			}
			var Uo = Do(Lo(Object(Vn.c)(Bo))),
				Ko = n("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx"),
				Wo = n("./src/reddit/constants/posts.ts"),
				Go = n("./src/reddit/controls/SubredditPicker/index.tsx"),
				Ho = n("./src/reddit/controls/SubredditPicker/helpers.ts"),
				qo = n("./src/reddit/components/PostCreationForm/CreationControls/index.m.less"),
				Vo = n.n(qo);
			const zo = Qe.a.wrapped(Go.a, "SubredditPicker", Vo.a),
				Qo = Qe.a.wrapped(et.a, "ControlRow", Vo.a),
				Yo = Object(i.a)(S.h, _.a, S.X, w.j, v.q, w.C, (e, t, n, o, r, s) => {
					const i = n && !t ? n : e;
					if (!i || !i.name) return Object(Ho.b)("", null, null, s);
					const {
						name: a,
						isProfile: c
					} = i;
					return c ? Object(Ho.b)(Object(Y.d)(a), null, o, s) : Object(Ho.b)(Object(Y.c)(a), r, null, s)
				}),
				Jo = Object(i.c)({
					pending: S.Z,
					pickerValue: Yo
				}),
				Xo = Object(s.b)(Jo, (e, {
					draftId: t,
					pageLayer: n
				}) => ({
					onSubredditChangeRequested: t => e(Ie.b(t, n)),
					onTrackSubredditPickerClick: () => e((e, t) => O.w(t()))
				}));
			class Zo extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.inputRef = null, this.onSelectSubreddit = e => {
						const {
							rawString: t,
							record: n
						} = e, o = {
							name: n && n.name || Object(Y.g)(t),
							isProfile: n && n.type === Wo.a.PROFILE || Object(Y.f)(t),
							allowedPostTypes: n && n.allowedPostTypes
						};
						this.props.onSubredditChangeRequested(o)
					}, this.setInputRef = e => this.inputRef = e
				}
				render() {
					return r.a.createElement(Qo, null, r.a.createElement(zo, {
						allowCrosspostableOnly: this.props.allowCrosspostableOnly,
						disabled: this.props.pending,
						includeUserProfile: this.props.includeUserProfile,
						inputRef: this.setInputRef,
						onSelect: this.onSelectSubreddit,
						onFocus: this.props.onTrackSubredditPickerClick,
						selectOnBlur: !0,
						value: this.props.pickerValue
					}))
				}
			}
			var $o = Object(v.t)({
					draftId: v.u,
					pageLayer: e => e
				})(Xo(Zo)),
				er = n("./node_modules/lodash/range.js"),
				tr = n.n(er),
				nr = n("./src/reddit/icons/svgs/Close/index.tsx"),
				or = n("./src/lib/timeAgo/index.ts"),
				rr = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				sr = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				ir = n("./src/reddit/models/PostDraft/index.ts"),
				ar = n("./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/Icon.m.less"),
				cr = n.n(ar),
				dr = n("./src/lib/constants/icons.ts");

			function lr() {
				return (lr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const ur = {
				[ir.b.Image]: dr.a.image_post,
				[ir.b.Link]: dr.a.link_post,
				[ir.b.Markdown]: dr.a.text_post,
				[ir.b.RichText]: dr.a.text_post,
				[ir.b.Video]: dr.a.video_post
			};
			var pr = Qe.a.wrapped(e => {
					const {
						draftKind: t,
						...n
					} = e, o = ur[t] || dr.a.link_post;
					return r.a.createElement($e.a, lr({
						name: o
					}, n))
				}, "Component", cr.a),
				mr = n("./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/index.m.less"),
				hr = n.n(mr);
			const br = Qe.a.div("Container", hr.a),
				fr = Qe.a.div("LeftBlock", hr.a),
				gr = Qe.a.div("Content", hr.a),
				Er = Qe.a.div("RightBlock", hr.a),
				Cr = Qe.a.h2("PostTitle", hr.a),
				yr = Qe.a.wrapped(Cr, "EditingPostTitle", hr.a),
				xr = Qe.a.div("MetaLine", hr.a),
				vr = Qe.a.span("SubredditName", hr.a),
				Or = Qe.a.time("DraftSavedTime", hr.a),
				_r = Qe.a.wrapped(sr.b, "TrashIcon", hr.a),
				kr = Qe.a.div("InteractiveDiv", hr.a),
				Sr = Qe.a.button("ConfirmDelete", hr.a),
				jr = Object(i.c)({
					isDraftDeletionPending: (e, {
						draft: {
							id: t
						}
					}) => Object(j.a)(e, t),
					subreddit: (e, {
						draft: {
							subredditId: t
						}
					}) => t ? Object(T.T)(e, {
						subredditId: t
					}) : void 0,
					user: w.j
				}),
				Tr = Object(s.b)(jr, (e, {
					pageLayer: t
				}) => ({
					deleteDraft: n => e(A.o(n, t))
				})),
				wr = Object(v.t)({
					currentDraftId: v.u,
					pageLayer: e => e
				}),
				Ir = 1e3;
			class Pr extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showConfirmText: !1
					}, this.onClick = () => {
						this.props.onClick(this.props.draft.id)
					}, this.onConfirmClick = e => {
						e.stopPropagation(), this.props.deleteDraft(this.props.draft.id)
					}, this.onTrashCanClick = e => {
						e.stopPropagation(), this.setState({
							showConfirmText: !0
						})
					}
				}
				render() {
					const {
						draft: e,
						currentDraftId: t,
						isDraftDeletionPending: n,
						subreddit: o,
						user: s
					} = this.props, i = o && Object(En.h)(o) && s ? {
						displayText: Object(Y.d)(Object(pe.e)(s)),
						url: `/user/${Object(pe.e)(s)}/`
					} : o;
					if (n) return null;
					const a = e.title || d.fbt._("Untitled", null, {
						hk: "2gEXjp"
					});
					return r.a.createElement(br, {
						onClick: this.onClick
					}, r.a.createElement(fr, null, r.a.createElement(pr, {
						draftKind: e.kind
					})), r.a.createElement(gr, null, t === e.id ? r.a.createElement(yr, {
						"data-redditstyle": !0
					}, d.fbt._("EDITING: {postTitle}", [d.fbt._param("postTitle", a)], {
						hk: "3M5MUj"
					})) : r.a.createElement(Cr, {
						"data-redditstyle": !0
					}, a), r.a.createElement(xr, {
						"data-redditstyle": !0
					}, i && r.a.createElement(vr, {
						"data-redditstyle": !0
					}, i.displayText), i && r.a.createElement(rr.b, null), r.a.createElement(Or, null, d.fbt._("Draft saved {draftSavedAtTime}", [d.fbt._param("draftSavedAtTime", Object(or.d)((e.modified || e.created) / Ir))], {
						hk: "2HjAWY"
					})))), r.a.createElement(Er, null, this.state.showConfirmText ? r.a.createElement(Sr, {
						onClick: this.onConfirmClick,
						"data-redditstyle": !0
					}, t === e.id ? d.fbt._("Delete working draft?", null, {
						hk: "2iGoUj"
					}) : d.fbt._("Confirm", null, {
						hk: "2bjb66"
					})) : r.a.createElement(kr, {
						onClick: this.onTrashCanClick
					}, r.a.createElement(_r, {
						"data-redditstyle": !0
					}))))
				}
			}
			var Rr = wr(Tr(Pr)),
				Mr = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				Nr = n("./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/Placeholder.m.less"),
				Dr = n.n(Nr);
			const Lr = Qe.a.div("Container", Dr.a),
				Ar = Qe.a.div("LeftBlock", Dr.a),
				Fr = Qe.a.div("Content", Dr.a),
				Br = Qe.a.div("MediaIcon", Dr.a),
				Ur = Qe.a.div("Title", Dr.a),
				Kr = Qe.a.div("Secondary", Dr.a);
			var Wr = ({
					className: e,
					isLoading: t
				}) => r.a.createElement(Lr, {
					className: e,
					"data-redditstyle": !0
				}, r.a.createElement(Ar, null, r.a.createElement(Br, {
					className: Object(Mr.a)({
						isLoading: t
					}),
					"data-redditstyle": !0
				})), r.a.createElement(Fr, null, r.a.createElement(Ur, {
					className: Object(Mr.b)({
						isLoading: t
					}),
					"data-redditstyle": !0
				}), r.a.createElement(Kr, {
					className: Object(Mr.b)({
						isLoading: t
					}),
					"data-redditstyle": !0
				}))),
				Gr = n("./src/reddit/components/PostCreationForm/DraftListModal/index.m.less"),
				Hr = n.n(Gr);

			function qr() {
				return (qr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: Vr
			} = n("./node_modules/fbt/lib/FbtPublic.js"), zr = `${K.a.assetPath}/img/snoo-drafts.png`, Qr = 3, Yr = Qe.a.div("Wrapper", Hr.a), Jr = Qe.a.div("TitleRow", Hr.a), Xr = Qe.a.span("DraftsNumber", Hr.a), Zr = Qe.a.div("DetailsContainer", Hr.a), $r = Qe.a.wrapped(et.a, "ButtonRow", Hr.a), es = Qe.a.wrapped(it.l, "CancelButton", Hr.a), ts = Qe.a.div("CloseWrapper", Hr.a), ns = Qe.a.wrapped(nr.a, "Close", Hr.a), os = Qe.a.div("Empty", Hr.a), rs = Qe.a.img("EmptyImage", Hr.a), ss = Qe.a.p("EmptyText", Hr.a), is = Object(i.c)({
				drafts: j.c,
				isPending: j.b,
				maxDrafts: w.V
			}), as = Object(s.b)(is);
			class cs extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === h.a.Escape && this.props.onClose()
					}, this.renderItem = e => r.a.createElement(Rr, {
						key: e.id,
						draft: e,
						onClick: () => this.props.onLoadDraft(e)
					})
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				renderPlaceholder(e) {
					return r.a.createElement(Wr, {
						isLoading: !0,
						key: e
					})
				}
				renderEmpty() {
					return r.a.createElement(os, null, r.a.createElement(rs, {
						src: zr
					}), r.a.createElement(ss, null, Vr._("Your drafts will live here", null, {
						hk: "NIEIr"
					})))
				}
				render() {
					const {
						drafts: e,
						isPending: t,
						maxDrafts: n
					} = this.props;
					let o;
					return o = t ? tr()(Qr).map(this.renderPlaceholder) : 0 === e.length ? this.renderEmpty() : e.map(this.renderItem), r.a.createElement(Yr, {
						"data-redditstyle": !0
					}, r.a.createElement(Jr, {
						"data-redditstyle": !0
					}, Vr._("Drafts", null, {
						hk: "1fvOmI"
					}), r.a.createElement(Xr, {
						"data-redditstyle": !0
					}, e.length, "/", n), r.a.createElement(ts, {
						onClick: this.props.onClose
					}, r.a.createElement(ns, {
						"data-redditstyle": !0
					}))), r.a.createElement(Zr, null, o), r.a.createElement($r, {
						"data-redditstyle": !0
					}, r.a.createElement(es, {
						onClick: this.props.onClose,
						"data-redditstyle": !0
					}, Vr._("Close", null, {
						hk: "4gbyAA"
					}))))
				}
			}
			const ds = Qe.a.wrapped(Object(to.a)(as(cs)), "DraftListModal", Hr.a);
			var ls = e => r.a.createElement(ds, qr({
					withOverlay: !0,
					onOverlayClick: e.onClose
				}, e)),
				us = n("./src/lib/forceHttps/index.ts"),
				ps = n("./src/reddit/components/PostCreationForm/SafeHarborText/index.m.less"),
				ms = n.n(ps);
			const {
				fbt: hs
			} = n("./node_modules/fbt/lib/FbtPublic.js"), bs = new RegExp(`\\b(${[...tt.x].join("|")})\\.com$`, "i"), fs = new RegExp(`\\.(${tt.w.join("|")})$`), gs = Qe.a.div("TextContainer", ms.a);
			class Es extends r.a.Component {
				constructor() {
					super(...arguments), this.isUrlScraped = e => {
						const t = Object(H.parse)(Object(us.a)(e));
						return !(!t.hostname || !bs.test(t.hostname)) || !(!t.pathname || !fs.test(t.pathname))
					}
				}
				render() {
					return this.props.value && this.isUrlScraped(this.props.value) ? r.a.createElement(gs, null, hs._("Posting this link saves the image or gif to Reddit", null, {
						hk: "1zFV82"
					})) : null
				}
			}
			var Cs = n("./node_modules/react-autosize-textarea/lib/index.js"),
				ys = n.n(Cs),
				xs = n("./src/reddit/controls/GrowingOutlinedInput/index.m.less"),
				vs = n.n(xs);

			function Os() {
				return (Os = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			class _s extends r.a.Component {
				constructor(e) {
					super(e), this.innerRef = null, this.focused = !1, this.setInnerRef = e => {
						this.innerRef = e, this.props.textareaRef && this.props.textareaRef(e)
					}, this.handleOnValueChange = () => {
						this.props.onValueChange && this.props.onValueChange(this.state.value)
					}, this.onFocus = e => {
						this.focused = !0, this.props.onFocus && this.props.onFocus(e)
					}, this.onBlur = e => {
						this.focused = !1, this.props.onBlur && this.props.onBlur(e)
					}, this.onChange = e => {
						if (this.innerRef) {
							const e = this.innerRef.value.replace(/\n/g, " ");
							this.setState(() => ({
								value: e
							}), this.handleOnValueChange)
						}
						this.props.onChange && this.props.onChange(e)
					}, this.onKeyPress = e => {
						13 === e.which && e.preventDefault(), this.props.onKeyPress && this.props.onKeyPress(e)
					}, this.state = {
						value: e.value || ""
					}
				}
				componentWillReceiveProps(e) {
					this.focused || this.state.value === e.value || this.setState({
						value: e.value
					})
				}
				render() {
					const {
						value: e
					} = this.state, {
						className: t,
						onValueChange: n,
						textareaRef: o,
						minHeight: s,
						...i
					} = this.props;
					return r.a.createElement(ys.a, Os({}, i, {
						className: Object(ze.a)(vs.a.growingOutlinedInput, t),
						style: {
							minHeight: s
						},
						innerRef: this.setInnerRef,
						onFocus: this.onFocus,
						onBlur: this.onBlur,
						onChange: this.onChange,
						onKeyPress: this.onKeyPress,
						value: e
					}))
				}
			}
			var ks = n("./src/reddit/components/PostCreationForm/LinkEditor/index.m.less"),
				Ss = n.n(ks);
			const js = Object(i.c)({
					pending: S.Z,
					postCreationFieldErrors: yn,
					subreddit: v.q,
					value: S.S
				}),
				Ts = Object(s.b)(js, (e, {
					onChange: t,
					onPostFieldValidation: n,
					pageLayer: o
				}) => ({
					onBlur: () => {
						n(e(_t(m.ub.LINK, o)))
					},
					onChange: n => {
						e(a.p(n)), t(n)
					},
					onFocus: () => e((e, t) => O.n(t(), f.k.CLICK, f.l.URL))
				}));
			var ws, Is = Object(v.t)()(Ts(e => {
					const {
						pending: t,
						postCreationFieldErrors: n,
						subreddit: o,
						value: s
					} = e, i = n[m.ub.LINK].length > 0;
					return r.a.createElement("div", null, r.a.createElement(_s, {
						className: Object(ze.a)(Ss.a.URLInput, {
							[Ss.a.mHasError]: i
						}),
						placeholder: d.fbt._("Url", null, {
							hk: "4dfMY"
						}),
						value: s,
						onBlur: e.onBlur,
						onFocus: e.onFocus,
						onKeyDown: e.onKeyDown,
						onValueChange: e.onChange,
						readOnly: t
					}), r.a.createElement(Xe.a, {
						errorModalTitle: o ? Object(Y.c)(o.name) : void 0,
						messages: n[m.ub.LINK]
					}), r.a.createElement(Es, {
						value: s
					}))
				})),
				Ps = n("./node_modules/lodash/clamp.js"),
				Rs = n.n(Ps),
				Ms = n("./node_modules/lodash/pickBy.js"),
				Ns = n.n(Ms),
				Ds = n("./src/lib/formatApiError/index.ts"),
				Ls = n("./src/lib/objectSelector/index.ts"),
				As = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/lodash/isEqual.js")),
				Fs = n.n(As),
				Bs = n("./src/reddit/controls/Sortable/index.tsx");
			! function(e) {
				e.RemoveGalleryItem = "REMOVE_GALLERY_ITEM", e.SelectGalleryItem = "SELECT_GALLERY_ITEM", e.SetGalleryItems = "SET_GALLERY_ITEMS", e.SetCaptionInput = "SET_CAPTION_INPUT", e.SetURLInput = "SET_URL_INPUT", e.SelectPrevMedia = "SELECT_PREV_MEDIA", e.SelectNextMedia = "SELECT_NEXT_MEDIA"
			}(ws || (ws = {}));
			var Us = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts"),
				Ks = n("./node_modules/lodash/upperFirst.js"),
				Ws = n.n(Ks),
				Gs = n("./src/reddit/icons/svgs/Hamster1/index.tsx"),
				Hs = n("./src/reddit/icons/svgs/Hamster2/index.tsx"),
				qs = n("./src/reddit/components/PostCreationForm/MediaInput/DropArea/index.m.less"),
				Vs = n.n(qs);
			const {
				fbt: zs
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Qs = [...Array.from(m.a), ...Array.from(m.b)].join(), Ys = Qe.a.input("HiddenInput", Vs.a), Js = Qe.a.wrapped(it.l, "UploadButton", Vs.a), Xs = Qe.a.wrapped(Gs.a, "HamsterSmall", Vs.a), Zs = Qe.a.wrapped(Hs.a, "HamsterLarge", Vs.a), $s = Qe.a.div("Container", Vs.a), ei = Qe.a.div("DropArea", Vs.a), ti = Qe.a.wrapped(ei, "DropAreaActive", Vs.a), ni = Qe.a.wrapped(ti, "DropAreaOver", Vs.a), oi = Qe.a.p("Paragraph", Vs.a), ri = Qe.a.p("ErrorMsg", Vs.a), si = Qe.a.div("Box", Vs.a);
			class ii extends r.a.Component {
				constructor() {
					super(...arguments), this.hiddenInputEl = null, this.onFileInput = e => {
						this.props.onFileInput(e.currentTarget.files)
					}, this.clickUploadButton = () => this.hiddenInputEl && this.hiddenInputEl.click()
				}
				render() {
					const {
						isOver: e,
						canDrop: t,
						lastErrorMsg: n,
						allowMultiple: o
					} = this.props;
					return r.a.createElement($s, null, r.a.createElement(Ys, {
						innerRef: e => this.hiddenInputEl = e,
						onChange: this.onFileInput,
						type: "file",
						accept: Qs,
						multiple: o
					}), e ? r.a.createElement(ni, null, r.a.createElement(si, null, r.a.createElement(Zs, null), r.a.createElement(oi, null, zs._("Drop Here to Upload", null, {
						hk: "3e1xuE"
					})))) : t ? r.a.createElement(ti, null, r.a.createElement(si, null, r.a.createElement(Xs, null), zs._("Drop Here to Upload", null, {
						hk: "3e1xuE"
					}))) : r.a.createElement(ei, null, r.a.createElement(oi, null, zs._({
						"*": "Drag and drop images or {=Upload}",
						_1: "Drag and drop image or {=Upload}"
					}, [zs._plural(o ? 2 : 1), zs._param("=Upload", r.a.createElement(Js, {
						onClick: this.clickUploadButton
					}, zs._("Upload", null, {
						hk: "41ZNAf"
					})))], {
						hk: "2OuWpT"
					})), n && r.a.createElement(ri, null, Ws()(n))))
				}
			}
			var ai = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				ci = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/AddImageItem.m.less"),
				di = n.n(ci);

			function li(e) {
				const {
					onClickEvent: t,
					onFileInput: n
				} = e, s = Object(o.useRef)(null), i = Object(o.useCallback)(() => {
					s && s.current && s.current.click(), t()
				}, [t, s]), a = Object(o.useCallback)(e => {
					n(e.currentTarget.files)
				}, [n]);
				return r.a.createElement("span", {
					className: di.a.AddImageWrapper
				}, r.a.createElement("input", {
					accept: Qs,
					className: di.a.hiddenInput,
					multiple: !0,
					onChange: a,
					ref: s,
					type: "file"
				}), r.a.createElement("button", {
					className: di.a.AddImageItem,
					onClick: i
				}, r.a.createElement(ai.a, {
					className: di.a.plusIcon
				})))
			}
			var ui = n("./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx"),
				pi = n("./src/reddit/icons/svgs/Clear/index.tsx"),
				mi = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/ImageItem.m.less"),
				hi = n.n(mi);
			var bi = e => {
					const {
						canDrop: t,
						mediaUpload: n,
						isDragging: s,
						isOver: i,
						isSelected: a,
						mediaItem: c,
						removeGalleryItem: d,
						dispatch: l
					} = e, u = Object(o.useRef)(null), p = n.key, m = n.status === nt.a.FAILED, h = Object(o.useCallback)(() => l((e => ({
						type: ws.SelectGalleryItem,
						payload: {
							key: e
						}
					}))(p)), [l, p]), b = Object(o.useCallback)(e => {
						e.stopPropagation(), d(c)
					}, [d, c]), f = n.metadata.localUrl;
					return f ? r.a.createElement("span", {
						ref: u
					}, r.a.createElement(ui.a, {
						canDrop: t,
						className: Object(ze.a)(hi.a.GalleryMediaUpload, {
							[hi.a.isDragging]: s,
							[hi.a.isSelected]: a,
							[hi.a.isError]: m
						}),
						isDragging: s,
						isOver: i
					}, r.a.createElement("span", {
						className: Object(ze.a)(hi.a.galleryImage, {
							[hi.a.isDragging]: s,
							[hi.a.isSelected]: a,
							[hi.a.isError]: m
						}),
						onClick: h,
						style: {
							backgroundImage: `url("${f}")`
						}
					}, r.a.createElement("button", {
						className: Object(ze.a)(hi.a.deleteButton, {
							[hi.a.isDragging]: s,
							[hi.a.showDeleteNormal]: !a,
							[hi.a.isError]: m
						}),
						onClick: b
					}, r.a.createElement(pi.a, {
						className: Object(ze.a)(hi.a.deleteIcon, {
							[hi.a.isDragging]: s
						})
					}))))) : null
				},
				fi = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/ImageItemsWrapper.m.less"),
				gi = n.n(fi);
			var Ei = e => {
					const {
						onRemoveUpload: t,
						dispatch: n,
						mediaState: s,
						uploads: i
					} = e, a = Object(Xn.a)(), c = Object(o.useCallback)(() => a(O.j()), [a]), d = Object(o.useCallback)(e => {
						t(e.uploadKey), a(O.l())
					}, [a, t]);
					return r.a.createElement("div", {
						className: gi.a.itemsWrapper
					}, r.a.createElement(Bs.a, {
						className: gi.a.sortableImages,
						values: s.items,
						getReactKey: e => e.uploadKey,
						render: (e, t, o, a, c) => {
							const l = i[e.uploadKey];
							if (!l) return null;
							if (Object(nt.c)(l)) return r.a.createElement("span", {
								className: Object(ze.a)(gi.a.pendingItem, Object(Mr.b)({
									isLoading: !0
								}))
							});
							const u = e.uploadKey === s.selectedKey;
							return r.a.createElement("span", {
								className: gi.a.imageStyles
							}, a && r.a.createElement("span", {
								className: gi.a.hoverMarker
							}), r.a.createElement(bi, {
								canDrop: c,
								dispatch: n,
								isDragging: o,
								isOver: a,
								isSelected: u,
								mediaItem: e,
								key: e.uploadKey,
								mediaUpload: l,
								removeGalleryItem: d
							}))
						},
						onDrop: (e, t, o) => {
							n((e => ({
								type: ws.SetGalleryItems,
								payload: {
									items: e
								}
							}))(o))
						}
					}), s.items.length < Us.b && r.a.createElement(li, {
						onClickEvent: c,
						onFileInput: e.onFileInput
					}))
				},
				Ci = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/InputWrapper.m.less"),
				yi = n.n(Ci);
			var xi = e => {
					const {
						uploads: t,
						galleryItem: n,
						isSelected: s,
						dispatch: i
					} = e, a = t[n.uploadKey], c = n.caption, l = n.url, u = Object(Xn.a)(), p = Object(o.useCallback)(e => i((e => ({
						type: ws.SetCaptionInput,
						payload: {
							input: e
						}
					}))(e)), [i]), m = Object(o.useCallback)(e => i((e => ({
						type: ws.SetURLInput,
						payload: {
							input: e
						}
					}))(e)), [i]), h = Object(o.useCallback)(e => u(O.k(e)), [u]), b = Object(o.useCallback)(() => h(f.l.CAPTION), [h]), g = Object(o.useCallback)(() => h(f.l.OUTBOUND_URL), [h]), E = !s || !a || !a.url || Object(nt.c)(a);
					return r.a.createElement("div", null, r.a.createElement("div", {
						className: yi.a.inputWrapper
					}, r.a.createElement(_s, {
						className: yi.a.inputStyles,
						disabled: E,
						maxLength: Us.a,
						onFocus: b,
						onValueChange: p,
						placeholder: d.fbt._("Add a caption...", null, {
							hk: "1fOmKi"
						}),
						value: c
					}), r.a.createElement("div", {
						className: yi.a.charsCounter
					}, c.length, "/", Us.a)), r.a.createElement("div", {
						className: yi.a.inputWrapper
					}, r.a.createElement(_s, {
						className: Object(ze.a)(yi.a.inputStyles, yi.a.urlInputStyles),
						disabled: E,
						onFocus: g,
						onValueChange: m,
						placeholder: d.fbt._("Add a link...", null, {
							hk: "Z6l9K"
						}),
						value: l
					})))
				},
				vi = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/Layout.m.less"),
				Oi = n.n(vi);
			var _i = e => {
					const {
						heroSlot: t,
						mainContent: n,
						sideMetaContent: o,
						bottomContent: s
					} = e;
					return r.a.createElement("div", {
						className: Oi.a.Layout
					}, r.a.createElement("div", {
						className: Oi.a.hero
					}, t), n && r.a.createElement("div", {
						className: Oi.a.mainContent
					}, n), o && r.a.createElement("div", {
						className: Oi.a.sideMetaContent
					}, o), r.a.createElement("div", {
						className: Oi.a.bottomContent
					}, s))
				},
				ki = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/SelectedImage.m.less"),
				Si = n.n(ki);
			var ji = e => {
					const {
						upload: t
					} = e, n = t.metadata.localUrl;
					return Object(nt.c)(t) ? r.a.createElement("span", {
						className: Object(ze.a)(Si.a.pendingImage, Object(Mr.b)({
							isLoading: !0
						}))
					}) : r.a.createElement("img", {
						className: Si.a.selectedImage,
						src: n
					})
				},
				Ti = n("./src/reddit/components/ProgressBar/index.tsx"),
				wi = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/MultipleUploadStatusBar/index.m.less"),
				Ii = n.n(wi);
			const {
				fbt: Pi
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ri = Qe.a.div("ControlRow", Ii.a), Mi = Qe.a.div("Status", Ii.a);
			var Ni = Qe.a.wrapped(e => {
					const {
						progress: t
					} = e, n = t && t.percent || 0;
					return r.a.createElement("div", {
						className: e.className
					}, r.a.createElement(Ti.a, {
						percent: n,
						className: Ii.a.OuterDivProgressBar,
						innerBarClassName: Ii.a.ProgressBar
					}), r.a.createElement(Ri, null, r.a.createElement(Mi, {
						className: Ii.a.StatusText
					}, n < 100 ? Pi._("Image uploading in progress...", null, {
						hk: "n2dCj"
					}) : Pi._("Image uploading completed", null, {
						hk: "4ko42w"
					}))))
				}, "Component", Ii.a),
				Di = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/index.m.less"),
				Li = n.n(Di);

			function Ai(e) {
				const {
					canDrop: t,
					dispatch: n,
					isOver: s,
					mediaState: i,
					onFileInput: a,
					onRemoveUpload: c,
					uploads: l
				} = e, [u, p] = Object(o.useState)([]), m = i.selectedKey, h = i.items.length > 1, b = i.items.find(e => e.uploadKey === m), f = m && l[m], g = i.items.filter(e => {
					const t = l[e.uploadKey];
					return !!t && t.status === nt.a.FAILED
				}).length, E = Object.values(l).filter(nt.c);
				if (!Fs()(u, E))
					if (0 === E.length) p([]);
					else {
						const e = E.filter(e => !u.some(t => t.key === e.key));
						e.length > 0 && p([...u, ...e])
					} const C = u.length > 0,
					y = {
						percent: (() => {
							if (!C) return 0;
							let e = 0;
							return u.forEach(t => {
								const n = l[t.key];
								if (null == n || n && (n.status === nt.a.CANCELED || n.status === nt.a.FAILED || n.status === nt.a.SUCCESS)) e += 100;
								else {
									const n = l[t.key].progress;
									e += n && n.percent || 0
								}
							}), e / u.length
						})(),
						uploaded: 0
					};
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: Object(ze.a)(Li.a.dropArea, {
						[Li.a.isDropAreaActive]: t,
						[Li.a.isDropAreaOver]: s
					})
				}, r.a.createElement(_i, {
					heroSlot: r.a.createElement(Ei, {
						mediaState: i,
						onFileInput: a,
						onRemoveUpload: c,
						uploads: l,
						dispatch: n
					}),
					mainContent: f && h && r.a.createElement(ji, {
						upload: f
					}),
					sideMetaContent: b && h && r.a.createElement(xi, {
						dispatch: n,
						galleryItem: b,
						uploads: l,
						isSelected: !!m
					}),
					bottomContent: null
				})), C ? r.a.createElement(Ni, {
					progress: y
				}) : null, !!g && r.a.createElement(Xe.a, {
					className: Li.a.errorMessage,
					messages: [d.fbt._("Some files failed to upload, please remove or retry them", null, {
						hk: "3BP9AQ"
					})]
				}))
			}
			var Fi = n("./src/reddit/components/RichTextEditor/DragController/helpers.ts"),
				Bi = n("./src/reddit/components/ThumbnailSelector/index.tsx"),
				Ui = n("./src/reddit/controls/FileDrop/index.tsx"),
				Ki = n("./src/reddit/helpers/media/index.ts"),
				Wi = n("./src/telemetry/models/Media.ts"),
				Gi = n("./src/reddit/components/MakeGifToggle/index.tsx"),
				Hi = n("./src/reddit/icons/svgs/ThumbnailSelect/index.tsx"),
				qi = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				Vi = n("./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/Preview/index.m.less"),
				zi = n.n(Vi);
			const Qi = Qe.a.img("Img", zi.a),
				Yi = Qe.a.img("BlurImg", zi.a),
				Ji = Qe.a.wrapped(e => {
					const {
						className: t,
						url: n
					} = e;
					return r.a.createElement("div", {
						className: t
					}, r.a.createElement(Yi, {
						src: n
					}), r.a.createElement(Qi, {
						src: n
					}))
				}, "ImagePreview", zi.a),
				Xi = Qe.a.wrapped(e => {
					const {
						className: t,
						url: n,
						showControls: o,
						videoBlurImgSrc: s
					} = e;
					return r.a.createElement("div", {
						className: t
					}, r.a.createElement(qi.b, {
						shouldLoad: !1,
						shouldPause: !1,
						isGif: !1,
						otherSource: n,
						showControlBar: o,
						showSettingsIcon: !1,
						blurImageSrc: s
					}))
				}, "VideoPreview", zi.a);
			var Zi = Qe.a.wrapped(e => {
					const {
						className: t,
						type: n,
						url: o,
						showControls: s,
						videoBlurImgSrc: i
					} = e;
					return r.a.createElement("div", {
						className: t
					}, "image" === n ? r.a.createElement(Ji, {
						url: o
					}) : r.a.createElement(Xi, {
						url: o,
						videoBlurImgSrc: i,
						showControls: s
					}))
				}, "Component", zi.a),
				$i = n("./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/UploadStatusBar/index.m.less"),
				ea = n.n($i);
			const {
				fbt: ta
			} = n("./node_modules/fbt/lib/FbtPublic.js"), na = Qe.a.div("ControlRow", ea.a), oa = Qe.a.wrapped(it.o, "Button", ea.a), ra = Qe.a.div("Status", ea.a);
			var sa = Qe.a.wrapped(e => {
					const {
						name: t,
						progress: n,
						onCancel: o
					} = e, s = n && n.percent || 0;
					return r.a.createElement("div", {
						className: e.className
					}, r.a.createElement(Ti.a, {
						percent: s
					}), r.a.createElement(na, null, r.a.createElement(ra, null, s < 100 ? ta._("Uploading {fileName}", [ta._param("fileName", t)], {
						hk: "1F1ZHh"
					}) : ta._("Success!", null, {
						hk: "2SQAeu"
					})), s < 100 && r.a.createElement(oa, {
						onClick: o
					}, ta._("Cancel", null, {
						hk: "2TSLl5"
					}))))
				}, "Component", ea.a),
				ia = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				aa = n("./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/index.m.less"),
				ca = n.n(aa);
			const da = Qe.a.div("Wrapper", ca.a),
				la = Qe.a.div("Controls", ca.a),
				ua = Qe.a.wrapped(Hi.a, "ThumbnailSelect", ca.a),
				pa = ({
					isFilled: e,
					...t
				}) => r.a.createElement(ua, t);

			function ma(e) {
				const {
					isPostSubmitPending: t,
					mediaType: n,
					onCancelUpload: o,
					onRemove: s,
					upload: i
				} = e, a = i.metadata, {
					localUrl: c,
					videoFirstFrameUrl: l
				} = a, u = i.status, p = u === nt.a.PENDING || u === nt.a.UPLOADING, m = u === nt.a.SUCCESS, h = !t;
				return r.a.createElement(da, null, p ? r.a.createElement(sa, {
					className: ca.a.UploadStatusBar,
					name: i.file.name,
					progress: i.progress,
					onCancel: o
				}) : null, c ? r.a.createElement(Zi, {
					type: n,
					url: c,
					showControls: m,
					videoBlurImgSrc: l
				}) : null, m && r.a.createElement(la, null, "video" === n && r.a.createElement(Gi.a, {
					disabled: !!e.makeGifDisableReason || !h,
					tooltip: e.makeGifDisableReason,
					on: e.isMakeGifToggleOn,
					onClick: e.onMakeGifToggle
				}), "video" === n && r.a.createElement(ia.a, {
					enabled: h,
					Icon: pa,
					tooltip: d.fbt._("Choose thumbnail", null, {
						hk: "2XlKfd"
					}),
					onClick: e.onShowThumbnailSelector
				}), r.a.createElement(ia.a, {
					enabled: h,
					iconName: "delete",
					tooltip: d.fbt._("Remove", null, {
						hk: "H42IB"
					}),
					onClick: s
				})))
			}
			var ha = n("./src/reddit/components/PostCreationForm/MediaInput/RemovePrompt/index.m.less"),
				ba = n.n(ha);
			const fa = "POST_CREATION_MEDIA_REMOVE_PROMPT_ID",
				ga = Qe.a.div("Wrapper", ba.a),
				Ea = Qe.a.wrapped(et.a, "TitleRow", ba.a),
				Ca = Qe.a.div("DetailsContainer", ba.a),
				ya = Qe.a.wrapped(et.a, "ButtonRow", ba.a),
				xa = Qe.a.wrapped(it.l, "CancelButton", ba.a),
				va = Qe.a.wrapped(it.i, "ConfirmButton", ba.a);
			var Oa = Object(to.a)(e => {
					const {
						isVideo: t
					} = e;
					return r.a.createElement(ga, null, r.a.createElement(Ea, null, t ? d.fbt._("Remove video?", null, {
						hk: "34eepe"
					}) : d.fbt._("Remove image?", null, {
						hk: "41e1Uy"
					})), r.a.createElement(Ca, null, t ? d.fbt._("Are you sure you want to remove your video?", null, {
						hk: "smTuF"
					}) : d.fbt._("Are you sure you want to remove your image?", null, {
						hk: "Ci5LM"
					})), r.a.createElement(ya, null, r.a.createElement(xa, {
						onClick: e.onCanceled
					}, d.fbt._("Keep", null, {
						hk: "4gFSdj"
					})), r.a.createElement(va, {
						onClick: e.onConfirmed
					}, d.fbt._("Remove", null, {
						hk: "1Jdd3U"
					}))))
				}),
				_a = n("./src/reddit/components/PostCreationForm/MediaInput/index.m.less"),
				ka = n.n(_a);
			const Sa = "MEDIA_POST_VIDEO_THUMBNAIL_SELECTOR_MODAL_ID",
				ja = Object(v.t)(),
				Ta = Object(i.c)({
					activeModalId: _.a,
					isPostPending: S.Z,
					uploads: Object(Ls.a)(e => Ns()(e.uploads, e => e.key.startsWith(R.a))),
					value: S.U,
					isImageGalleryCreationEnabled: S.L
				}),
				wa = Object(s.b)(Ta, e => ({
					onChange: t => e(a.d(t)),
					startMediaGalleryUploads: (t, n) => e(R.d(t, n)),
					removeUpload: t => e(Pe.i(t, !0)),
					toggleThumbnailModal: () => e(a.x(Sa)),
					toggleRemovePrompt: () => e(a.x(fa))
				})),
				Ia = Qe.a.div("Container", ka.a),
				Pa = (e, t, n) => {
					if (!e.length) return null;
					let o = e.findIndex(e => e.uploadKey === n);
					if (-1 === o) {
						const r = t.findIndex(e => e.uploadKey === n);
						o = Rs()(r - 1, 0, e.length - 1)
					}
					return e[o].uploadKey
				};
			class Ra extends r.a.Component {
				constructor() {
					super(...arguments), this.onFileDrop = e => this.uploadMediaFiles(e, Wi.FileSource.DragAndDrop), this.onFileInput = e => this.uploadMediaFiles(e, Wi.FileSource.FileSelector), this.onRemoveUpload = e => {
						const {
							value: t
						} = this.props, {
							items: n,
							selectedKey: o
						} = t, r = n.filter(t => t.uploadKey !== e);
						this.props.onChange({
							...t,
							items: r,
							selectedKey: Pa(r, n, o)
						}), this.props.removeUpload(e)
					}, this.onCancelSingleMediaUpload = () => {
						this.onRemoveUpload(this.getSingleUpload().key)
					}, this.handlePaste = e => {
						if (e.clipboardData) {
							const t = Object(Fi.a)(e.clipboardData);
							t.length && (e.preventDefault(), e.stopPropagation(), this.uploadMediaFiles(t, Wi.FileSource.Clipboard))
						}
					}, this.onRemoveConfirmed = () => {
						this.props.toggleRemovePrompt(), this.onRemoveUpload(this.getSingleUpload().key)
					}, this.onThumbnailSelect = e => {
						this.toggleThumbnailSelector();
						const {
							value: t
						} = this.props;
						if (!Object(f.v)(t)) return;
						const n = t.items[0],
							o = n.video;
						this.props.onChange({
							...t,
							items: [{
								...n,
								video: {
									...o,
									thumbnail: e
								}
							}]
						})
					}, this.toggleThumbnailSelector = () => {
						this.props.toggleThumbnailModal()
					}, this.onMakeGifToggle = () => {
						const {
							value: e
						} = this.props;
						if (!Object(f.v)(e)) return;
						const t = e.items[0],
							n = t.video;
						this.props.onChange({
							...e,
							items: [{
								...t,
								video: {
									...n,
									isMakeGif: !n.isMakeGif
								}
							}]
						})
					}, this.dispatchAction = e => {
						const {
							value: t
						} = this.props, n = function(e, t) {
							switch (t.type) {
								case ws.SelectGalleryItem: {
									const {
										key: n
									} = t.payload;
									return {
										...e,
										selectedKey: n
									}
								}
								case ws.SetGalleryItems: {
									const {
										items: n
									} = t.payload;
									return {
										...e,
										items: n
									}
								}
								case ws.SetCaptionInput: {
									const {
										input: n
									} = t.payload, {
										selectedKey: o,
										items: r
									} = e;
									return o ? {
										...e,
										items: r.map(e => e.uploadKey === o ? {
											...e,
											caption: n
										} : e)
									} : e
								}
								case ws.SetURLInput: {
									const {
										input: n
									} = t.payload, {
										selectedKey: o,
										items: r
									} = e;
									return o ? {
										...e,
										items: r.map(e => e.uploadKey === o ? {
											...e,
											url: n
										} : e)
									} : e
								}
								case ws.SelectPrevMedia: {
									const {
										selectedKey: t,
										items: n
									} = e, o = n.findIndex(e => e.uploadKey === t);
									let r = -1 === o ? 0 : o - 1;
									return r < 0 && (r = n.length - 1), {
										...e,
										selectedKey: n[r].uploadKey
									}
								}
								case ws.SelectNextMedia: {
									const {
										selectedKey: t,
										items: n
									} = e, o = n.findIndex(e => e.uploadKey === t), r = -1 === o ? 0 : (o + 1) % n.length;
									return {
										...e,
										selectedKey: n[r].uploadKey
									}
								}
								default:
									return e
							}
						}(t, e);
						this.props.onChange(n)
					}, this.renderDropArea = (e, t) => {
						const {
							isPostPending: n,
							value: o,
							isImageGalleryCreationEnabled: s,
							uploads: i
						} = this.props;
						if (!Object(f.v)(o) && s && o.items.length >= 1) return r.a.createElement(Ai, {
							isOver: e,
							canDrop: t,
							dispatch: this.dispatchAction,
							mediaState: o,
							onFileInput: this.onFileInput,
							onRemoveUpload: this.onRemoveUpload,
							uploads: i
						}); {
							const i = this.getSingleUpload(),
								a = this.props.value.items[0],
								{
									isMakeGif: c = !1,
									makeGifDisableReason: d = null
								} = a && a.video || {},
								l = i && i.status === nt.a.FAILED,
								u = i && l ? Object(Ds.a)(i.error) : "",
								p = i && Object(Ki.f)(i.metadata.mimetype);
							return o && p && i && !l ? r.a.createElement(ma, {
								isPostSubmitPending: n,
								upload: i,
								mediaType: p,
								onRemove: this.props.toggleRemovePrompt,
								onCancelUpload: this.onCancelSingleMediaUpload,
								onShowThumbnailSelector: this.toggleThumbnailSelector,
								onMakeGifToggle: this.onMakeGifToggle,
								isMakeGifToggleOn: c,
								makeGifDisableReason: d
							}) : r.a.createElement(ii, {
								lastErrorMsg: u,
								isOver: e,
								canDrop: t,
								onFileInput: this.onFileInput,
								allowMultiple: s
							})
						}
					}
				}
				componentDidMount() {
					document.addEventListener("paste", this.handlePaste)
				}
				componentWillUnmount() {
					document.removeEventListener("paste", this.handlePaste)
				}
				getSingleUpload() {
					const {
						items: e
					} = this.props.value, t = 1 === e.length && e[0];
					return t && this.props.uploads[t.uploadKey] || void 0
				}
				uploadMediaFiles(e, t) {
					this.props.startMediaGalleryUploads([...e], t)
				}
				render() {
					const {
						value: e
					} = this.props, {
						items: t
					} = e, n = this.getSingleUpload(), o = t[0], s = Object(f.v)(e), i = s && o.video.thumbnail || void 0;
					return r.a.createElement(Ia, null, r.a.createElement(Ui.a, {
						render: (e, t) => this.renderDropArea(e, t),
						onDrop: this.onFileDrop
					}), n && n.metadata.videoDuration && r.a.createElement(Bi.a, {
						onSelect: this.onThumbnailSelect,
						onToggleModal: this.toggleThumbnailSelector,
						videoSource: n.metadata.localUrl,
						videoDuration: n.metadata.videoDuration,
						selected: i,
						isOpen: this.props.activeModalId === Sa
					}), this.props.activeModalId === fa && r.a.createElement(Oa, {
						isVideo: s,
						onCanceled: this.props.toggleRemovePrompt,
						onConfirmed: this.onRemoveConfirmed
					}))
				}
			}
			var Ma = ja(wa(Ra)),
				Na = n("./src/reddit/actions/post.ts"),
				Da = n("./src/reddit/controls/CheckboxInput/index.tsx"),
				La = n("./src/reddit/controls/OutboundLink/index.tsx"),
				Aa = n("./src/reddit/selectors/externalAccount.ts"),
				Fa = n("./src/reddit/icons/fonts/Info/index.tsx"),
				Ba = n("./src/reddit/components/PostCreationForm/PostCreationFooter/PostSettings/Hint/index.m.less"),
				Ua = n.n(Ba);
			const Ka = Qe.a.wrapped(Fa.a, "Info", Ua.a),
				Wa = Qe.a.div("TooltipContent", Ua.a);
			var Ga = e => r.a.createElement("div", {
					className: Ua.a.Hint
				}, r.a.createElement(Nt.a, {
					className: Ua.a.HoverTooltip,
					tooltipContentClass: Ua.a.tooltipContentClass,
					text: r.a.createElement(Wa, null, e.text)
				}), r.a.createElement(Ka, null)),
				Ha = n("./src/reddit/components/PostCreationForm/PostCreationFooter/PostSettings/index.m.less"),
				qa = n.n(Ha);
			const Va = Qe.a.wrapped(Da.a, "CheckboxInput", qa.a),
				za = Qe.a.wrapped(La.b, "ConnectAccountLink", qa.a),
				Qa = Qe.a.div("Container", qa.a),
				Ya = Qe.a.div("ContainerLeft", qa.a),
				Ja = Qe.a.div("ContainerRight", qa.a),
				Xa = Qe.a.div("CheckboxText", qa.a),
				Za = Qe.a.div("Option", qa.a),
				$a = Qe.a.wrapped(St.a, "TextButton", qa.a),
				ec = Qe.a.input("TextBox", qa.a),
				tc = Qe.a.div("Wrapper", qa.a),
				nc = Object(i.c)({
					connectedTwitterAccount: Aa.a,
					currentSubredditOrProfile: v.o,
					currentUser: w.j,
					isDraftPending: j.g,
					isMediaUploadPending: S.V,
					isPostPending: S.mb,
					isPublicLink: S.P,
					postToTwitter: S.db,
					sendReplies: S.fb,
					sharingLink: j.i,
					submissionType: S.a
				}),
				oc = Object(s.b)(nc, (e, t) => ({
					togglePostToTwitter: t => {
						e(a.y(t)), e((e, n) => O.v(n(), t))
					},
					toggleSendReplies: t => {
						e(a.z(t))
					},
					toggleDraftIsPublic: n => {
						e(A.s(n)), e(Object(A.r)(t.draftId)), e((e, o) => {
							const r = Object(j.h)(o(), t.draftId);
							r && O.g(o(), r, n)
						})
					},
					copyLink: t => e(Object(Na.B)(t)),
					trackConnectAccountsClick: () => e((e, t) => O.b(t()))
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onTogglePostToTwitter: () => t.togglePostToTwitter(!e.postToTwitter),
					onToggleSendReplies: () => t.toggleSendReplies(!e.sendReplies),
					onToggleDraftIsPublic: () => {
						t.toggleDraftIsPublic(!e.isPublicLink), e.isPublicLink || t.copyLink(e.sharingLink)
					},
					onCopyLink: () => t.copyLink(e.sharingLink)
				}));
			var rc = Object(v.t)()(oc(e => {
					const {
						connectedTwitterAccount: t,
						currentSubredditOrProfile: n,
						currentUser: o,
						draftId: s,
						submissionType: i
					} = e, a = !!n && !!n.isQuarantined, c = e.isDraftPending || e.isPostPending || e.isMediaUploadPending, l = i !== m.Rb.MEDIA && s, u = e.isPublicLink, p = o && o.hasUserProfile;
					return r.a.createElement(Qa, null, r.a.createElement(Ya, {
						className: e.className
					}, r.a.createElement(et.a, null, r.a.createElement(Za, null, r.a.createElement(Va, {
						disabled: c,
						name: "send-replies",
						onChange: e.onToggleSendReplies,
						value: e.sendReplies
					}, r.a.createElement(Xa, null, d.fbt._("Send me post reply notifications", null, {
						hk: "3kNmey"
					}))))), p && t && r.a.createElement(et.a, null, r.a.createElement(Za, null, r.a.createElement(Va, {
						disabled: c || a,
						name: "post-to-twitter",
						onChange: e.onTogglePostToTwitter,
						value: e.postToTwitter
					}, r.a.createElement(Xa, null, d.fbt._("Share this post on Twitter", null, {
						hk: "3SPI4V"
					}))))), p && !t && !a && r.a.createElement(et.a, null, r.a.createElement(za, {
						href: "/settings#connected-accounts",
						isSponsored: !1,
						onClick: e.trackConnectAccountsClick,
						source: null
					}, d.fbt._("Connect accounts to share your post", null, {
						hk: "1nIuWp"
					})), r.a.createElement(Ga, {
						text: d.fbt._("Connect a Twitter account in your User Settings. With a connected account you can choose to share new posts you make directly to Twitter.", null, {
							hk: "JRoQz"
						})
					}))), r.a.createElement(Ja, {
						className: e.className
					}, l && r.a.createElement(tc, null, r.a.createElement(Za, null, r.a.createElement(Va, {
						name: "enable-public-link",
						onChange: e.onToggleDraftIsPublic,
						value: e.isPublicLink
					}, r.a.createElement(Xa, null, d.fbt._("Enable public draft link", null, {
						hk: "1SpDgT"
					})), r.a.createElement(Ga, {
						text: d.fbt._("This option will create a link to a preview of this draft. Anyone with this link will be able to see this draft. You can disable this link at any time.", null, {
							hk: "1r77YF"
						})
					})))), l && u && r.a.createElement(et.a, null, r.a.createElement(ec, {
						disabled: !0,
						value: e.sharingLink
					}), r.a.createElement($a, {
						onClick: e.onCopyLink
					}, d.fbt._("Copy link", null, {
						hk: "22rywZ"
					})))))
				})),
				sc = n("./src/reddit/components/PostCreationForm/PostCreationFooter/index.m.less"),
				ic = n.n(sc);
			const ac = Qe.a.div("Container", ic.a);
			var cc = e => r.a.createElement(ac, null, r.a.createElement(rc, {
					draftId: e.draftId
				})),
				dc = n("./src/reddit/featureFlags/profileCollections.ts"),
				lc = n("./src/reddit/selectors/postCollection.ts"),
				uc = n("./src/reddit/selectors/profile.ts"),
				pc = n("./src/reddit/components/PostCreationForm/PostCreationHeader/index.m.less"),
				mc = n.n(pc);
			const hc = Qe.a.div("CreateLabel", mc.a),
				bc = Qe.a.span("CountIndicator", mc.a),
				fc = Qe.a.wrapped(it.o, "LinkButton", mc.a),
				gc = fc,
				Ec = Qe.a.div("CreatePostHeader", mc.a),
				Cc = Object(i.c)({
					canPostAsModerator: S.e,
					collectionsCount: e => {
						const t = Object(S.h)(e);
						let n = t.id;
						if (t.isProfile && Object(dc.a)(e)) {
							const o = Object(uc.j)(e, {
								profileName: t.name
							});
							n = o && o.id
						}
						return n ? Object(lc.u)(e, {
							subredditId: n
						}) : 0
					},
					destSubredditAboutInfo: S.g,
					draftsCount: w.k,
					isPending: S.Z
				});
			var yc = Object(s.b)(Cc, e => ({
					showDraftsList: () => {
						e(A.p()), e(a.x(f.d))
					},
					showCollectionsList: () => {
						e(a.x(f.a))
					}
				}))(e => {
					const {
						canPostAsModerator: t,
						collectionsCount: n,
						destSubredditAboutInfo: o,
						draftsCount: s,
						isPending: i,
						showCollectionsList: a,
						showDraftsList: c,
						submissionType: l,
						submitMode: u
					} = e, p = l === m.Rb.CROSSPOST, h = p ? d.fbt._("Create a crosspost", null, {
						hk: "1oNF7H"
					}) : d.fbt._("Create a post", null, {
						hk: "4u8qEy"
					}), b = t && o && o.collectionsEnabled;
					return r.a.createElement(Ec, null, r.a.createElement(hc, null, u === f.q.Draft ? d.fbt._("Edit draft", null, {
						hk: "oMgcW"
					}) : h), !p && r.a.createElement(r.a.Fragment, null, b && r.a.createElement(gc, {
						onClick: a
					}, d.fbt._("Collections", null, {
						hk: "2FVot0"
					}), r.a.createElement(bc, null, n)), r.a.createElement(fc, {
						disabled: i,
						onClick: c
					}, d.fbt._("Drafts", null, {
						hk: "25z4rQ"
					}), r.a.createElement(bc, null, s))))
				}),
				xc = n("./src/reddit/actions/polls.ts"),
				vc = n("./src/reddit/actions/postCreation/editorContent.ts"),
				Oc = n("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				_c = n("./src/reddit/selectors/crypto/points.ts"),
				kc = n("./src/reddit/components/Governance/PollHelpText/index.m.less"),
				Sc = n.n(kc);

			function jc(e) {
				var t;
				const {
					subreddit: n
				} = e, o = Object(s.e)(e => Object(_c.b)(e, n.id));
				if (!o) return null;
				const i = null === (t = o.polls) || void 0 === t ? void 0 : t.decisionThreshold;
				return r.a.createElement("div", {
					className: Sc.a.pollHelpText
				}, i && r.a.createElement(r.a.Fragment, null, r.a.createElement(Oc.a, {
					className: Sc.a.decisionThreholdAmount,
					amount: i,
					subredditId: n.id
				}), r.a.createElement("div", {
					className: Sc.a.decisionThresholdTitle
				}, d.fbt._("Decision Threshold", null, {
					hk: "39nut8"
				}))), r.a.createElement("div", {
					className: Sc.a.decisionThresholdExplanation
				}, d.fbt._("Governance Polls pass when one option reaches the Decision Threshold. The Decision Threshold is updated regularly based on the number of {tokenName} that voted in previous governance polls.", [d.fbt._param("tokenName", o.name)], {
					hk: "Di1tp"
				})))
			}
			var Tc = n("./src/reddit/actions/tooltip.ts"),
				wc = n("./src/reddit/controls/Dropdown/index.tsx"),
				Ic = n("./src/reddit/controls/Dropdown/Row.tsx"),
				Pc = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				Rc = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.tsx"),
				Mc = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.tsx"),
				Nc = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/utils.ts");
			const Dc = () => {
					const e = new Date,
						[t] = Object(le.i)(Object(ut.g)(e));
					return t
				},
				Lc = () => {
					const e = new Date;
					return e.setDate(e.getDate() + 3), e
				},
				Ac = e => {
					const [t, n] = Object(le.i)(Object(ut.g)(e));
					return {
						date: t,
						time: n
					}
				},
				Fc = ({
					date: e,
					time: t
				}) => new Date(`${e}T${t}`);
			var Bc = n("./src/reddit/components/PollCreator/EndDatePicker/index.m.less"),
				Uc = n.n(Bc);

			function Kc({
				poll: e
			}) {
				const {
					endDate: t
				} = e, {
					date: n,
					time: o
				} = Ac(t), i = Object(ut.b)(), a = i ? Object(ut.d)(i) : null, c = Object(s.d)(), l = t => {
					Object.values(t).every(e => e.length) && c(Object(xc.b)({
						...e,
						endDate: Fc({
							date: n,
							time: o,
							...t
						})
					}))
				};
				return r.a.createElement("div", {
					className: Uc.a.endDatePicker
				}, r.a.createElement("label", {
					className: Uc.a.title
				}, d.fbt._("Prediction ends", null, {
					hk: "1fsk1v"
				})), r.a.createElement("div", {
					className: Uc.a.dateTime
				}, r.a.createElement(Rc.a, {
					"aria-label": d.fbt._("Prediction end date", null, {
						hk: "4zYv4T"
					}),
					onChange: e => l({
						date: e
					}),
					min: Dc(),
					max: Object(Nc.a)(),
					value: n,
					required: !0
				}), r.a.createElement(Mc.a, {
					className: Uc.a.timeInput,
					"aria-label": d.fbt._("Prediction end time", null, {
						hk: "1idFl4"
					}),
					onChange: e => l({
						time: e
					}),
					value: o,
					required: !0
				}), a && r.a.createElement("div", {
					className: Uc.a.timeZone
				}, a.abbreviation)))
			}
			var Wc = n("./src/reddit/icons/svgs/Grapple/index.tsx"),
				Gc = n("./src/reddit/components/PollCreator/Option/index.m.less"),
				Hc = n.n(Gc);

			function qc(e) {
				return r.a.createElement("div", {
					className: Object(ze.a)(e.className, Hc.a.container),
					style: {
						left: e.isDropTarget ? 16 : 0,
						opacity: Vc(e),
						pointerEvents: e.isDisabled ? "none" : void 0
					}
				}, r.a.createElement(Wc.a, {
					className: Hc.a.grapple
				}), r.a.createElement("input", {
					className: Hc.a.input,
					maxLength: 120,
					placeholder: `${d.fbt._("option",null,{hk:"3IGnB"})} ${e.index+1}`,
					value: e.text,
					onBlur: e.onBlur,
					onChange: t => e.onTextChange(t.currentTarget.value),
					onFocus: e.onFocus
				}), e.removable && r.a.createElement(sr.a, {
					className: Hc.a.trash,
					onClick: e.onRemove
				}))
			}

			function Vc(e) {
				return e.isDisabled ? .5 : e.isBeingDragged ? .25 : 1
			}
			var zc = n("./src/reddit/constants/postLayout.ts"),
				Qc = n("./src/reddit/components/Econ/Prediction/EducationMessage/constants.ts"),
				Yc = n("./src/reddit/components/Econ/Prediction/NewBadge/index.m.less"),
				Jc = n.n(Yc);
			const {
				fbt: Xc
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Zc({
				className: e
			}) {
				return r.a.createElement("div", {
					className: Object(ze.a)(Jc.a.newBadge, e)
				}, Xc._("New", null, {
					hk: "2N0EBb"
				}))
			}
			var $c = n("./src/reddit/components/Econ/Prediction/PredictionFeatureEducationMessage/index.tsx"),
				ed = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				td = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				nd = n("./src/reddit/controls/PillButton/index.m.less"),
				od = n.n(nd);
			class rd extends r.a.Component {
				constructor() {
					super(...arguments), this.handleMouseEnter = e => {
						const {
							onMouseEnter: t,
							tooltipSet: n
						} = this.props;
						t && t(e), n()
					}, this.handleMouseLeave = e => {
						const {
							onMouseLeave: t,
							tooltipUnset: n
						} = this.props;
						t && t(e), n()
					}
				}
				render() {
					const {
						backgroundClassName: e,
						children: t,
						className: n,
						colorTheme: o = "default",
						contentClassName: s,
						disabled: i,
						hoverText: a,
						icon: c,
						id: d,
						isActive: l,
						isDarkDayMode: u,
						isNightMode: p,
						layout: m,
						onBlur: h,
						onClick: b,
						onFocus: f,
						title: g,
						tooltipId: E
					} = this.props, C = c, y = Object(ze.a)({
						[od.a.classic]: m === zc.g.Classic,
						[od.a.compact]: m === zc.g.Compact,
						[od.a.activated]: l,
						[od.a.nightmode]: p,
						[od.a.dark]: u,
						[od.a.upvote]: "upvote" === o,
						[od.a.downvote]: "downvote" === o,
						[od.a.gold]: "gold" === o,
						[od.a.blue]: "blue" === o,
						[od.a.approve]: "approve" === o,
						[od.a.remove]: "remove" === o,
						[od.a.hasChildren]: !!t
					});
					if (this.props.href) {
						const {
							href: e,
							rel: o,
							target: i
						} = this.props;
						return r.a.createElement(ed.a, {
							"aria-label": g,
							"aria-pressed": l,
							className: Object(ze.a)(n, y, od.a.PostActionButton),
							"data-click-id": this.props["data-click-id"],
							"data-test-id": this.props["data-test-id"],
							id: d,
							onBlur: h,
							onClick: b,
							onFocus: f,
							onMouseEnter: this.handleMouseEnter,
							onMouseLeave: this.handleMouseLeave,
							rel: o,
							target: i,
							to: e
						}, r.a.createElement("span", {
							className: Object(ze.a)(s, y, od.a.buttonContent),
							id: E,
							tabIndex: -1
						}, r.a.createElement("div", {
							className: od.a.background
						}), a && E && r.a.createElement(td.c, {
							text: a,
							tooltipId: E
						}), C && r.a.createElement(C, null), r.a.createElement("span", {
							className: od.a.buttonChildren
						}, t)))
					}
					return r.a.createElement("button", {
						"aria-label": g,
						"aria-pressed": l,
						className: Object(ze.a)(n, y, od.a.PostActionButton),
						"data-click-id": this.props["data-click-id"],
						"data-test-id": this.props["data-test-id"],
						disabled: i,
						id: d,
						onBlur: h,
						onClick: b,
						onFocus: f,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave
					}, r.a.createElement("span", {
						className: Object(ze.a)(s, y, od.a.buttonContent),
						id: E,
						tabIndex: -1
					}, r.a.createElement("div", {
						className: Object(ze.a)(od.a.background, e)
					}), a && E && r.a.createElement(td.c, {
						text: a,
						tooltipId: E
					}), C && r.a.createElement(C, null), r.a.createElement("span", {
						className: od.a.buttonChildren
					}, t)))
				}
			}
			var sd = Object(s.b)(void 0, (e, {
					tooltipId: t
				}) => ({
					tooltipSet: () => {
						t && e(Object(Tc.g)({
							tooltipId: t
						}))
					},
					tooltipUnset: () => {
						t && e(Object(Tc.j)({
							tooltipId: t
						}))
					}
				}))(rd),
				id = n("./src/reddit/hooks/useLocalStorage.ts"),
				ad = n("./src/reddit/selectors/features/predictions/creation/index.ts"),
				cd = n("./src/reddit/components/PollCreator/PollTypePicker/index.m.less"),
				dd = n.n(cd);

			function ld() {
				return (ld = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function ud({
				tournamentsEnabled: e
			}) {
				const [t] = Object(id.a)(Qc.a.creation, !1), {
					govType: n
				} = Object(s.e)(S.s), o = Object(s.e)(ad.a), i = Object(s.d)(), c = Object(Xn.a)(), l = {
					backgroundClassName: dd.a.buttonBackground,
					colorTheme: "blue",
					className: Object(ze.a)(dd.a.button, dd.a.pollTypePickerButton),
					contentClassName: dd.a.buttonContent,
					disabled: o,
					isDarkDayMode: !1,
					isNightMode: !1,
					layout: zc.g.Compact
				};
				return r.a.createElement("div", {
					className: dd.a.pollTypePicker
				}, r.a.createElement(sd, ld({}, l, {
					isActive: n === X.a.GA || !n,
					onClick: () => {
						i(Object(a.j)({
							oldType: n,
							type: X.a.GA
						})), c(Yn.p)
					},
					title: d.fbt._("Poll", null, {
						hk: "2uKNlH"
					})
				}), d.fbt._("Poll", null, {
					hk: "1l7ZuP"
				})), r.a.createElement(sd, ld({}, l, {
					isActive: n === X.a.Prediction,
					onClick: () => {
						i(Object(a.j)({
							oldType: n,
							type: X.a.Prediction
						})), c(Yn.q)
					},
					title: d.fbt._("Prediction", null, {
						hk: "3wu0FO"
					})
				}), r.a.createElement("div", {
					className: dd.a.predictionLabel
				}, d.fbt._("Prediction", null, {
					hk: "1CbFag"
				}), !t && n !== X.a.Prediction && r.a.createElement(Zc, {
					className: dd.a.newBadge
				}))), n === X.a.Prediction && r.a.createElement("div", {
					className: dd.a.education
				}, r.a.createElement($c.a, {
					isTokens: e,
					onClose: () => c(Yn.l),
					onView: () => c(Yn.r),
					storageKey: Qc.a.creation
				})))
			}
			var pd = n("./src/reddit/actions/economics/predictions/constants.ts"),
				md = n("./src/reddit/components/PollCreator/TournamentPicker/index.m.less"),
				hd = n.n(md);

			function bd({
				className: e,
				poll: t
			}) {
				const n = Object(s.d)(),
					i = Object(Jn.a)(),
					{
						subredditName: a
					} = (null == i ? void 0 : i.urlParams) || {},
					c = Object(s.e)(e => Object(T.E)(e, a)),
					l = Object(s.e)(e => Object(eo.a)(e, {
						subredditId: c
					})) || {
						id: pd.e,
						name: "Predictions Tournament"
					};
				return Object(o.useEffect)(() => {
					(async () => {
						a && n(Object(zn.g)(a))
					})()
				}, [n, a]), a ? r.a.createElement("div", {
					className: Object(ze.a)(hd.a.tournamentPicker, e)
				}, r.a.createElement("label", {
					className: hd.a.title
				}, d.fbt._("Tournament", null, {
					hk: "1eyps5"
				})), r.a.createElement("input", {
					disabled: !0,
					className: hd.a.input,
					readOnly: !0,
					type: "text",
					value: l.name || d.fbt._("New tournament", null, {
						hk: "1DwyZA"
					})
				})) : null
			}
			var fd = n("./src/reddit/components/PollCreator/index.m.less"),
				gd = n.n(fd);
			const Ed = 2,
				Cd = 6,
				yd = 7,
				xd = "poll-creation-voting-length";
			var vd;
			! function(e) {
				e.Options = "options", e.VotingLength = "votingLength"
			}(vd || (vd = {}));
			const Od = Object(Kt.a)(wc.a);

			function _d(e, t) {
				return `${t}-${e}`
			}
			const kd = Object(i.c)({
				isModerator: (e, t) => {
					const {
						subredditId: n
					} = t;
					return !!n && Object(ot.g)(e, {
						subredditId: n
					})
				},
				tournamentsEnabled: (e, {
					subredditId: t
				}) => !!t && Object(T.N)(e, {
					subredditId: t
				}),
				votingLengthDropdownIsOpen: e => e.tooltipId === xd
			});
			class Sd extends r.a.Component {
				constructor(e) {
					super(e), this.handleAddOption = e => () => {
						const {
							sendEvent: t
						} = this.props;
						e.options.length < 7 && (t(Object(O.p)()), this.props.onUpdatePoll({
							...e,
							options: e.options.concat(this.makeOption())
						}))
					}, this.handleBlur = () => this.inputFocused = !1, this.handleVotingLengthDropdownClick = () => {
						const {
							sendEvent: e,
							votingLengthDropdownIsOpen: t
						} = this.props;
						t || e(Object(O.q)()), this.props.onToggleVotingLengthDropdown()
					}, this.handleChangeVotingLength = e => t => {
						this.props.onUpdatePoll({
							...e,
							duration: t
						}), this.props.onToggleVotingLengthDropdown()
					}, this.handleFocus = () => this.inputFocused = !0, this.handleOptionTextChange = (e, t) => n => {
						const o = e.options.indexOf(t);
						this.props.onUpdatePoll({
							...e,
							options: e.options.slice(0, o).concat({
								text: n
							}).concat(e.options.slice(o + 1))
						})
					}, this.handleRemoveOption = (e, t) => () => {
						this.props.onUpdatePoll({
							...e,
							options: e.options.filter(e => e !== t)
						})
					}, this.makeOption = () => ({
						text: ""
					}), this.makeDefaultPoll = () => ({
						duration: 3 * m.z,
						endDate: Lc(),
						options: Array.from({
							length: Ed
						}).map(this.makeOption)
					}), this.preventDrag = e => {
						this.inputFocused && (e.preventDefault(), e.stopPropagation())
					}, this.inputFocused = !1
				}
				componentDidMount() {
					document.addEventListener("dragstart", this.preventDrag), document.addEventListener("drop", this.preventDrag), document.addEventListener("dragover", this.preventDrag)
				}
				componentWillUnmount() {
					document.removeEventListener("dragstart", this.preventDrag), document.removeEventListener("drop", this.preventDrag), document.removeEventListener("dragover", this.preventDrag)
				}
				sectionIsDisabled(e) {
					return this.props.disabledSections && this.props.disabledSections.includes(e)
				}
				render() {
					const {
						className: e,
						allowPredictions: t,
						isModerator: n,
						poll: o = this.makeDefaultPoll(),
						pollType: s,
						tournamentsEnabled: i
					} = this.props, a = !Object(X.d)(o) && t && n, c = s === X.a.Prediction;
					return r.a.createElement("div", {
						"data-testid": "poll-creator"
					}, a && r.a.createElement(ud, {
						tournamentsEnabled: i
					}), r.a.createElement("div", {
						className: Object(ze.a)(e, gd.a.container)
					}, r.a.createElement("div", {
						className: gd.a.options
					}, this.renderPollCreator(o), this.renderControls(o)), r.a.createElement("div", {
						className: gd.a.help
					}, this.props.hintTextComponent)), c && r.a.createElement("div", {
						className: gd.a.predictionSettings
					}, r.a.createElement(Kc, {
						poll: o
					}), i && r.a.createElement(bd, {
						poll: o
					})))
				}
				renderPollCreator(e) {
					const t = this.sectionIsDisabled(vd.Options);
					return r.a.createElement(Bs.a, {
						getReactKey: _d,
						render: (n, o, s, i, a) => r.a.createElement(qc, {
							className: gd.a.option,
							index: o,
							isBeingDragged: s,
							isDisabled: t,
							isDropTarget: i && a,
							option: n,
							removable: o > 1,
							text: n.text,
							onBlur: this.handleBlur,
							onFocus: this.handleFocus,
							onTextChange: this.handleOptionTextChange(e, n),
							onRemove: this.handleRemoveOption(e, n)
						}),
						values: e.options,
						onDrop: (t, n, o) => this.props.onUpdatePoll({
							...e,
							options: o
						})
					})
				}
				renderControls(e) {
					const {
						pollType: t
					} = this.props, n = e.options.length >= Cd || this.sectionIsDisabled(vd.Options), o = this.sectionIsDisabled(vd.VotingLength), s = Math.floor(e.duration / m.z), i = t === X.a.Prediction;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: gd.a.controls
					}, r.a.createElement(it.o, {
						className: gd.a.addButton,
						disabled: n,
						onClick: this.handleAddOption(e)
					}, d.fbt._("Add Option", null, {
						hk: "hUP0k"
					})), !i && r.a.createElement("div", {
						className: Object(ze.a)(gd.a.votingLengthSelector, {
							[gd.a.votingLengthSelector__disabled]: !!o
						})
					}, r.a.createElement("div", {
						className: gd.a.votingLengthTitleText
					}, d.fbt._("Voting length:", null, {
						hk: "4pPVUg"
					})), r.a.createElement("div", {
						className: gd.a.votingLengthDropdownContainer,
						id: xd
					}, r.a.createElement("div", {
						className: gd.a.votingLengthDisplay,
						onClick: this.handleVotingLengthDropdownClick
					}, r.a.createElement("div", null, d.fbt._({
						"*": "{numDays} days",
						_1: "{numDays} day"
					}, [d.fbt._param("numDays", String(s)), d.fbt._plural(s)], {
						hk: "2HsFBA"
					})), r.a.createElement(Pc.a, {
						className: gd.a.votingLengthCaret
					})), this.renderVotingLengthDropdown(e)))))
				}
				renderVotingLengthDropdown(e) {
					const {
						votingLengthDropdownIsOpen: t
					} = this.props, n = this.handleChangeVotingLength(e);
					return r.a.createElement(Od, {
						className: gd.a.votingLengthDropdown,
						tooltipId: xd,
						isOpen: t
					}, Array.from({
						length: yd
					}).map((t, o) => {
						const s = o + 1;
						return r.a.createElement(Ic.b, {
							"data-redditstyle": !0,
							key: o,
							index: o,
							displayText: d.fbt._({
								"*": "{number} days",
								_1: "1 day"
							}, [d.fbt._plural(s, "number")], {
								hk: "bXXYo"
							}),
							isSelected: Math.floor(e.duration / m.z) === s,
							onClick: () => n(s * m.z)
						})
					}))
				}
			}
			var jd = Object(s.b)(kd, e => ({
					onToggleVotingLengthDropdown: () => e(Object(Tc.h)({
						tooltipId: xd
					}))
				}))(Object(Vn.c)(Sd)),
				Td = n("./src/reddit/components/Governance/ProposalTemplates/Generic/index.m.less"),
				wd = n.n(Td);
			const Id = [{
				text: "Yes"
			}, {
				text: "No"
			}];

			function Pd(e) {
				const t = {
					duration: e.poll ? e.poll.duration : m.z,
					options: e.options || Id
				};
				return r.a.createElement("div", {
					className: Object(ze.a)(wd.a.container, e.className)
				}, r.a.createElement("div", {
					className: wd.a.topline
				}, e.children.map(e => "string" == typeof e ? r.a.createElement("div", {
					className: wd.a.text
				}, e) : e)), r.a.createElement(jd, {
					disabledSections: [vd.Options],
					hintTextComponent: r.a.createElement("div", {
						className: wd.a.hintText
					}, r.a.createElement(jc, {
						subreddit: e.subreddit
					})),
					poll: t,
					onUpdatePoll: e.onUpdatePoll
				}))
			}
			var Rd = n("./src/reddit/controls/FormFields/index.tsx"),
				Md = n("./src/reddit/components/Governance/ProposalTemplates/Spinoff/index.m.less"),
				Nd = n.n(Md);
			const Dd = 3,
				Ld = 20,
				Ad = /[^(\w|_)]/g;
			const Fd = Object(i.c)({
				newSubredditName: e => e.creations.formData.newSubreddit
			});
			var Bd = Object(s.b)(Fd, e => ({
					onSubredditNameChange: t => e(Object(D.a)({
						subredditName: t
					}))
				}))((function(e) {
					return r.a.createElement(Pd, {
						className: e.className,
						options: X.f[X.a.Spinoff](e.newSubredditName),
						poll: e.poll,
						subreddit: e.subreddit,
						onUpdatePoll: e.onUpdatePoll
					}, d.fbt._("Should we spin-off to", null, {
						hk: "3oKiyE"
					}), r.a.createElement(Rd.c, {
						redditStyle: !0,
						className: Nd.a.input,
						label: d.fbt._("subreddit name", null, {
							hk: "1qzJqB"
						}),
						max: Ld,
						min: Dd,
						type: "text",
						value: e.newSubredditName,
						onChange: t => {
							const n = t.currentTarget.value.replace(Ad, "");
							e.onSubredditNameChange(n)
						}
					}), d.fbt._("?", null, {
						hk: "1b1vhH"
					}))
				})),
				Ud = n("./src/reddit/components/Governance/ProposalTemplates/TopModReplacement/index.m.less"),
				Kd = n.n(Ud);
			const Wd = 20;
			const Gd = Object(i.c)({
				topMod: e => e.creations.formData.newTopMod
			});
			var Hd = Object(s.b)(Gd, e => ({
					onUsernameChange: t => e(Object(D.b)({
						username: t
					}))
				}))((function(e) {
					return r.a.createElement(Pd, {
						className: e.className,
						options: X.f[X.a.ReplaceTopMod](),
						poll: e.poll,
						subreddit: e.subreddit,
						onUpdatePoll: e.onUpdatePoll
					}, d.fbt._("Should", null, {
						hk: "22RF0A"
					}), r.a.createElement(Rd.c, {
						redditStyle: !0,
						className: Kd.a.input,
						label: d.fbt._("username", null, {
							hk: "1Fk03V"
						}),
						max: Wd,
						type: "text",
						value: e.topMod,
						onChange: t => e.onUsernameChange(t.currentTarget.value)
					}), d.fbt._("become the top moderator?", null, {
						hk: "4COtce"
					}))
				})),
				qd = n("./src/reddit/icons/svgs/Info/index.tsx"),
				Vd = n("./src/reddit/components/PollCreator/DefaultHintText/index.m.less"),
				zd = n.n(Vd);
			const Qd = e => [() => d.fbt._("Suggest short clear options", null, {
				hk: "4bpIfe"
			}), () => d.fbt._("The more options, the better", null, {
				hk: "37GJUq"
			}), () => e ? d.fbt._("Choose the prediction duration", null, {
				hk: "16Yw7y"
			}) : d.fbt._("Choose the poll duration", null, {
				hk: "19Gh6D"
			}), () => d.fbt._("Options can't be edited after post creation", null, {
				hk: "3iRICg"
			})];

			function Yd(e) {
				const {
					isPrediction: t
				} = e;
				return r.a.createElement(o.Fragment, null, r.a.createElement("div", {
					className: zd.a.helpTitle
				}, r.a.createElement(qd.a, {
					className: zd.a.infoIcon
				}), r.a.createElement("div", {
					className: zd.a.helpTitleText
				}, t ? d.fbt._("Tips on Better Predictions", null, {
					hk: "3kIzkr"
				}) : d.fbt._("Tips on Better Polls", null, {
					hk: "2QMuX9"
				}))), r.a.createElement("ol", {
					className: zd.a.helpTextList
				}, Qd(!!t).map(e => r.a.createElement("li", {
					className: zd.a.helpTextItem,
					key: e()
				}, e()))))
			}
			var Jd = n("./src/reddit/components/PostCreationForm/MarkdownEditor/index.tsx"),
				Xd = n("./src/reddit/components/RichTextEditor/index.tsx"),
				Zd = n("./src/reddit/featureFlags/component.tsx"),
				$d = n("./src/reddit/helpers/richTextEditor/index.ts"),
				el = n("./src/reddit/models/PostRequirements/index.ts"),
				tl = n("./src/reddit/icons/svgs/GovSmall/index.tsx"),
				nl = n("./src/reddit/icons/svgs/Poll/index.tsx"),
				ol = n("./src/reddit/components/PostCreationForm/PostEditor/GovTypeSelector/index.m.less"),
				rl = n.n(ol);
			const sl = Object(Kt.a)(wc.a),
				il = [{
					Icon: nl.a,
					showNewTag: !0,
					text: () => d.fbt._("general", null, {
						hk: "2zk1er"
					}),
					type: null
				}, {
					Icon: tl.a,
					showNewTag: !1,
					text: () => d.fbt._("governance", null, {
						hk: "1wlLfQ"
					}),
					type: X.a.GovGeneric
				}, {
					Icon: tl.a,
					showNewTag: !1,
					text: () => d.fbt._("spin-off a new community", null, {
						hk: "jNK0c"
					}),
					type: X.a.Spinoff
				}],
				al = "gov-type-selector-dropdown";
			const cl = Object(i.c)({
				dropdownIsOpen: e => e.tooltipId === al,
				govType: e => e.creations.formData.govType,
				spinoffEnabled: ce.d.spSpinoffs
			});
			var dl = Object(s.b)(cl, e => ({
					onChangeGovType: (t, n) => {
						e(Object(a.j)({
							oldType: n,
							type: t
						})), e(Object(Tc.i)())
					},
					onToggleDropdown: () => e(Object(Tc.h)({
						tooltipId: al
					}))
				}))((function(e) {
					const t = function(e, t) {
							return il.filter(({
								type: e
							}) => !(!t.spinoffEnabled && e === X.a.Spinoff))
						}(0, e),
						n = t.find(t => t.type === e.govType) || t[0];
					return r.a.createElement("div", {
						className: Object(ze.a)(rl.a.container, e.className)
					}, r.a.createElement("div", {
						className: rl.a.currentSelection,
						id: al,
						onClick: e.onToggleDropdown
					}, r.a.createElement(n.Icon, {
						className: rl.a.pollTypeIcon
					}), r.a.createElement("div", {
						className: rl.a.text
					}, n.text()), r.a.createElement(Pc.a, {
						className: rl.a.dropdownIcon
					}), n.showNewTag && r.a.createElement("div", {
						className: rl.a.newLabel
					}, d.fbt._("new", null, {
						hk: "4iv34v"
					}))), r.a.createElement(sl, {
						className: rl.a.dropdown,
						tooltipId: al,
						isOpen: e.dropdownIsOpen
					}, t.map((t, o) => r.a.createElement(Ic.b, {
						"data-redditstyle": !0,
						displayText: t.text(),
						isSelected: t.type === n.type,
						key: o,
						onClick: () => e.onChangeGovType(t.type, e.govType)
					}))))
				})),
				ll = n("./src/reddit/components/PostCreationForm/PostEditor/index.m.less"),
				ul = n.n(ll);

			function pl() {
				return (pl = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const ml = Object(Zd.a)("spGovPolls", dl),
				hl = (e, t) => !e && t && t.bodyRestrictionPolicy === el.a.Required,
				bl = Object(i.c)({
					canPostAsModerator: S.e,
					destSubreddit: S.h,
					draft: j.d,
					editorMode: S.n,
					govType: e => e.creations.formData.govType,
					markdownBody: S.T,
					pending: S.Z,
					poll: e => e.creations.formData.polls || void 0,
					postCreationFieldErrors: yn,
					postRequirements: S.nb,
					rteState: S.eb,
					shouldAllowBodyText: S.gb,
					subreddit: v.q
				}),
				fl = Object(s.b)(bl, (e, {
					onChange: t,
					onPostFieldValidation: n,
					pageLayer: o
				}) => ({
					onBlur: () => {
						n(e(_t(m.ub.BODY, o)))
					},
					onFocus: () => e((e, t) => O.n(t(), f.k.CLICK, f.l.BODY)),
					onRTEStateChange: (n, o) => {
						e(a.e({
							rteState: n,
							isContentChanged: o
						})), t()
					},
					onToggleEditorMode: (t, n) => e(vc.d(f.g.POST_CREATION, t, n)),
					onTrackToolbarClick: (t, n) => e((e, o) => O.z(o(), t, n)),
					onUpdatePoll: t => e(Object(xc.b)(t))
				}));
			class gl extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {}, this.onEditorResize = e => {
						this.setState({
							editorHeight: e
						})
					}, this.onToggleEditorMode = async (e, t) => {
						await this.props.onToggleEditorMode(e, t), e === f.h.RICH_TEXT ? this.rteRef && this.rteRef.focus() : this.markdownEditorRef && this.markdownEditorRef.focus()
					}, this.setRteRef = e => this.rteRef = e, this.setMarkdownEditorRef = e => this.markdownEditorRef = e
				}
				renderEditor() {
					const {
						canPostAsModerator: e,
						destSubreddit: t,
						displayPollCreation: n,
						editorMode: o,
						markdownBody: s,
						pending: i,
						postCreationFieldErrors: a,
						postRequirements: c,
						rteState: l,
						subreddit: u
					} = this.props, p = a[m.ub.BODY].length > 0, h = !!u && u.isNSFW, b = hl(e, c) ? d.fbt._("Text (required)", null, {
						hk: "E1dIP"
					}) : d.fbt._("Text (optional)", null, {
						hk: "4jfNex"
					}), g = h;
					return o === f.h.RICH_TEXT ? r.a.createElement(Xd.a, {
						allowMediaUploads: !g,
						focusableContentRTEClassName: Object(ze.a)(ul.a.focusableContent, {
							[ul.a.mHasError]: p,
							[ul.a.mPollBorder]: !!n
						}),
						destSubreddit: t,
						editorType: $d.a.Post,
						initialHeight: this.state.editorHeight,
						rteState: l,
						onBlur: this.props.onBlur,
						onChange: this.props.onRTEStateChange,
						onEditorResize: this.onEditorResize,
						onFocus: this.props.onFocus,
						onSubmit: this.props.onSubmit,
						onSwitchEditorMode: this.onToggleEditorMode,
						placeholderText: b,
						readOnly: i,
						rteRef: this.setRteRef,
						trackToolbarClick: this.props.onTrackToolbarClick
					}) : r.a.createElement(Jd.a, {
						focusableContentMarkdownClassName: Object(ze.a)(ul.a.focusableContent, {
							[ul.a.mHasError]: p,
							[ul.a.mPollBorder]: !!n
						}),
						initialHeight: this.state.editorHeight,
						instanceRef: this.setMarkdownEditorRef,
						onBlur: this.props.onBlur,
						onChange: this.props.onChange,
						onEditorResize: this.onEditorResize,
						onFocus: this.props.onFocus,
						value: s,
						onSubmit: this.props.onSubmit,
						onSwitchEditorMode: this.onToggleEditorMode,
						placeholderText: b
					})
				}
				render() {
					const {
						displayPollCreation: e,
						postCreationFieldErrors: t,
						shouldAllowBodyText: n,
						subreddit: o
					} = this.props;
					return r.a.createElement("div", null, n && this.renderEditor(), n && e && r.a.createElement("div", {
						className: ul.a.pollCreator
					}, r.a.createElement(ml, {
						className: ul.a.govToggle
					}), this.govType()), r.a.createElement(Xe.a, {
						errorModalTitle: o ? Object(Y.c)(o.name) : void 0,
						messages: t[m.ub.BODY]
					}))
				}
				govType() {
					var e, t;
					const {
						govType: n,
						poll: o,
						subreddit: s
					} = this.props, i = {
						onUpdatePoll: this.props.onUpdatePoll,
						poll: o
					}, a = {
						...i,
						pollType: n
					}, c = {
						...a,
						allowPredictions: null === (e = this.props.subreddit) || void 0 === e ? void 0 : e.allowPredictions,
						subredditId: null === (t = this.props.subreddit) || void 0 === t ? void 0 : t.id
					};
					switch (n) {
						case X.a.ReplaceTopMod:
							return s ? r.a.createElement(Hd, pl({}, i, {
								subreddit: s
							})) : r.a.createElement(jd, pl({}, a, {
								hintTextComponent: r.a.createElement(Yd, null)
							}));
						case X.a.GovGeneric:
							return r.a.createElement(jd, pl({}, a, {
								hintTextComponent: s ? r.a.createElement(jc, {
									subreddit: s
								}) : r.a.createElement(Yd, null)
							}));
						case X.a.Spinoff:
							return s ? r.a.createElement(Bd, pl({}, i, {
								subreddit: s
							})) : r.a.createElement(jd, pl({}, a, {
								hintTextComponent: r.a.createElement(Yd, null)
							}));
						case X.a.Prediction:
							return r.a.createElement(jd, pl({}, c, {
								hintTextComponent: r.a.createElement(Yd, {
									isPrediction: !0
								})
							}));
						case X.a.GA:
						case null:
							return r.a.createElement(jd, pl({}, c, {
								hintTextComponent: r.a.createElement(Yd, null)
							}))
					}
				}
			}
			var El = Object(v.t)({
					draftId: v.u,
					pageLayer: e => e
				})(fl(gl)),
				Cl = n("./src/reddit/components/PostCreationForm/PostTitle/index.m.less"),
				yl = n.n(Cl);
			const xl = Object(i.c)({
					canPostAsModerator: S.e,
					disableTitleEdits: e => e.creations.formData.govType === X.a.ReplaceTopMod || e.creations.formData.govType === X.a.Spinoff,
					pending: S.Z,
					postCreationFieldErrors: yn,
					postRequirements: S.nb,
					shouldAllowBodyText: S.gb,
					submissionType: S.a,
					subreddit: v.q,
					title: S.pb
				}),
				vl = Object(s.b)(xl, (e, {
					onChange: t,
					onPostFieldValidation: n,
					pageLayer: o
				}) => ({
					onBlur: () => {
						n(e(_t(m.ub.TITLE, o)))
					},
					onChange: n => {
						e(a.h(n)), t(n)
					},
					onInputFocus: () => e((e, t) => O.n(t(), f.k.CLICK, f.l.TITLE))
				}));
			var Ol = Object(v.t)()(vl(e => {
					const {
						canPostAsModerator: t,
						postRequirements: n,
						postCreationFieldErrors: o,
						subreddit: s
					} = e, i = e.submissionType === m.Rb.POST && !e.shouldAllowBodyText, a = o[m.ub.TITLE].length > 0, c = t ? Ut.f : n && n.titleTextMaxLength || Ut.f;
					return r.a.createElement("div", {
						className: yl.a.container
					}, r.a.createElement("div", {
						className: yl.a.inputWrapper
					}, r.a.createElement(_s, {
						className: Object(ze.a)(yl.a.PostTitleInput, {
							[yl.a.mHasError]: a
						}),
						disabled: e.disableTitleEdits,
						maxLength: c,
						minHeight: i ? 92 : void 0,
						onBlur: e.onBlur,
						onFocus: e.onInputFocus,
						onKeyDown: e.onKeyDown,
						onValueChange: e.onChange,
						placeholder: d.fbt._("Title", null, {
							hk: "j3s6r"
						}),
						readOnly: e.pending,
						value: e.title
					}), r.a.createElement("div", {
						className: yl.a.charsCounter
					}, e.title.length, "/", c)), r.a.createElement(Xe.a, {
						errorModalTitle: s ? Object(Y.c)(s.name) : void 0,
						messages: o[m.ub.TITLE]
					}))
				})),
				_l = n("./src/reddit/components/PostCreationForm/Prompt/index.tsx");
			const kl = "g-recaptcha",
				Sl = "image",
				jl = {
					COMPACT: "compact",
					NORMAL: "normal"
				},
				Tl = () => new Promise(e => {
					if (window.grecaptcha) return e(window.grecaptcha);
					window.grecaptchaOnLoad = () => e(window.grecaptcha);
					const t = document.createElement("script");
					t.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaOnLoad&render=explicit", document.body.appendChild(t)
				});
			class wl extends r.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				componentDidMount() {
					const {
						callback: e,
						size: t,
						type: n
					} = this.props;
					Tl().then(o => {
						o.render(kl, {
							callback: e,
							type: n,
							sitekey: K.a.recaptchaSitekey,
							size: t || jl.COMPACT
						})
					})
				}
				componentWillReceiveProps(e) {
					this.props.submissionPending && !e.submissionPending && Tl().then(e => {
						e.reset()
					})
				}
				render() {
					return r.a.createElement("div", {
						className: "Recaptcha",
						id: kl
					})
				}
			}
			var Il = n("./src/reddit/components/PostCreationForm/RecaptchaOverlay/index.m.less"),
				Pl = n.n(Il);
			const {
				fbt: Rl
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ml = Qe.a.div("OverlayWrapper", Pl.a), Nl = Qe.a.div("OverlayContent", Pl.a), Dl = Qe.a.div("ExplanationText", Pl.a);
			var Ll = Object(s.b)(void 0, (e, t) => ({
				onChange: n => {
					e(a.f(n)), t.callback(n)
				}
			}))(e => r.a.createElement(Ml, null, r.a.createElement(Nl, null, r.a.createElement(Dl, null, Rl._("Ok, one more thing ... you're human, right?", null, {
				hk: "2xDwBB"
			})), r.a.createElement(wl, {
				submissionPending: !0,
				callback: e.onChange,
				size: jl.NORMAL,
				type: Sl
			}))));
			const Al = "POST_CREATION__CONFIRM_SAVE_DRAFT_WITH_LIMITATIONS";

			function Fl(e) {
				const {
					hasEventSchedule: t,
					hasRichPostMedia: n
				} = e;
				let o = d.fbt._("Saving this draft will not save media and the applied event schedule, all other information will be saved", null, {
					hk: "3NIEQF"
				});
				return n && !t ? o = d.fbt._("Saving this draft will not save media, all other information will be saved", null, {
					hk: "2tpNPY"
				}) : !n && t && (o = d.fbt._("Saving this draft will not save the applied event schedule, all other information will be saved", null, {
					hk: "3wm3T3"
				})), r.a.createElement(Le.a, {
					bodyText: o,
					onClose: e.onCancel,
					onPrimaryAction: e.onConfirm,
					onSecondaryAction: e.onCancel,
					primaryButtonText: d.fbt._("Save", null, {
						hk: "1YTiSI"
					}),
					secondaryButtonText: d.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}),
					titleText: d.fbt._("Save draft", null, {
						hk: "1RxZQJ"
					})
				})
			}
			var Bl = n("./src/reddit/components/PostCreationForm/SubredditChangePrompt/index.m.less"),
				Ul = n.n(Bl);
			const Kl = {
					[f.p.ImageWillBeRemoved]: {
						removePromptTitle: () => d.fbt._("Remove image?", null, {
							hk: "3Pk53F"
						}),
						removeConfirm: () => d.fbt._("Change and remove image", null, {
							hk: "Ik8BT"
						}),
						removeCancel: () => d.fbt._("Keep image", null, {
							hk: "1e7FY0"
						}),
						details: e => d.fbt._("Aw crap, {sureddit name} doesn't allow images. If you change to {suredditName} your image will be removed.", [d.fbt._param("sureddit name", `r/${e}`), d.fbt._param("suredditName", `r/${e}`)], {
							hk: "1zQOEn"
						})
					},
					[f.p.VideoWillBeRemovedMediaNotAllowed]: {
						removePromptTitle: () => d.fbt._("Remove video?", null, {
							hk: "12xLOq"
						}),
						removeConfirm: () => d.fbt._("Change and remove video", null, {
							hk: "3izwIJ"
						}),
						removeCancel: () => d.fbt._("Keep video", null, {
							hk: "32ZDlX"
						}),
						details: e => d.fbt._("Aw crap, {sureddit name} doesn't allow videos. If you change to {suredditName} your video will be removed.", [d.fbt._param("sureddit name", `r/${e}`), d.fbt._param("suredditName", `r/${e}`)], {
							hk: "1sxEJG"
						})
					},
					[f.p.VideoWillBeRemovedTooLongForGif]: {
						removePromptTitle: () => d.fbt._("Remove video?", null, {
							hk: "12xLOq"
						}),
						removeConfirm: () => d.fbt._("Change and remove video", null, {
							hk: "3izwIJ"
						}),
						removeCancel: () => d.fbt._("Keep video", null, {
							hk: "32ZDlX"
						}),
						details: e => d.fbt._("Aw crap, {sureddit name} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF. If you change to {suredditName} your video will be removed.", [d.fbt._param("sureddit name", `r/${e}`), d.fbt._param("suredditName", `r/${e}`)], {
							hk: "34j8hI"
						})
					},
					[f.p.GalleryWillBeRemovedGalleryNotAllowed]: {
						removePromptTitle: () => d.fbt._("Remove gallery?", null, {
							hk: "4mddlm"
						}),
						removeConfirm: () => d.fbt._("Change and remove gallery", null, {
							hk: "2JB1HN"
						}),
						removeCancel: () => d.fbt._("Keep gallery", null, {
							hk: "26kW19"
						}),
						details: e => d.fbt._("Aw crap, {sureddit name} doesn't allow galleries. If you change to {suredditName} your gallery will be removed.", [d.fbt._param("sureddit name", `r/${e}`), d.fbt._param("suredditName", `r/${e}`)], {
							hk: "11irkw"
						})
					}
				},
				Wl = Qe.a.div("Wrapper", Ul.a),
				Gl = Qe.a.wrapped(et.a, "TitleRow", Ul.a),
				Hl = Qe.a.div("DetailsContainer", Ul.a),
				ql = Qe.a.wrapped(et.a, "ButtonRow", Ul.a),
				Vl = Qe.a.wrapped(it.i, "CancelButton", Ul.a),
				zl = Qe.a.wrapped(it.l, "ConfirmButton", Ul.a);
			var Ql = Object(to.a)(e => {
					const {
						promptType: t,
						nextSubreddit: n
					} = e, o = Kl[t];
					return r.a.createElement(Wl, null, r.a.createElement(Gl, null, o.removePromptTitle()), r.a.createElement(Hl, null, o.details(n.name)), r.a.createElement(ql, null, r.a.createElement(zl, {
						onClick: e.onConfirmed
					}, o.removeConfirm()), r.a.createElement(Vl, {
						onClick: e.onCanceled
					}, o.removeCancel())))
				}),
				Yl = n("./src/lib/filterQueryParams/index.ts"),
				Jl = n("./src/reddit/selectors/gold/powerups/index.ts"),
				Xl = n("./src/reddit/components/PostCreationForm/Tabs/index.m.less"),
				Zl = n.n(Xl);
			const $l = Qe.a.wrapped(et.a, "Stretched", Zl.a),
				eu = Qe.a.div("Container", Zl.a),
				tu = e => r.a.createElement("button", {
					className: Object(ze.a)(Zl.a.Tab, e.className, {
						[Zl.a.isActive]: e.active
					}),
					disabled: e.disabled,
					onClick: e.onClick
				}, e.children),
				nu = Object(i.a)(S.d, S.e, S.h, S.Q, S.Z, v.q, (e, t) => {
					const n = Object(v.m)(e, t);
					return !!n && Object(Jl.r)(e, {
						subredditId: n
					})
				}, (e, t, n, o, r, s, i) => {
					const {
						images: a = !0,
						links: c = !0,
						text: d = !0,
						videos: l = !0
					} = n.allowedPostTypes || {}, u = !!s && s.isNSFW;
					return {
						link: r || !c || o && !Object(he.g)("links"),
						media: !l && !a && !t || r || u && !i || o && !Object(he.g)("images"),
						post: !d && !t || r || o && !Object(he.g)("text"),
						poll: !e || o && !Object(he.g)("polls")
					}
				}),
				ou = Object(i.c)({
					canPostAsModerator: S.e,
					destSubreddit: S.h,
					govType: e => e.creations.formData.govType,
					hasCreatedPredictionDrafts: ad.a,
					isTabsDisabled: nu,
					pending: S.Z,
					submissionType: S.a,
					subreddit: v.q,
					isImageGalleryCreationEnabled: S.L
				}),
				ru = Object(s.b)(ou, (e, t) => ({
					onChange: (n, o) => {
						e(a.g({
							submissionType: n,
							extra: o
						})), e((e, t) => O.s(t(), n)), e(a.v(n === m.Rb.POLL)), ((e, t, n) => {
							if (!t) return;
							const o = Object(Yl.a)(t.url, n);
							t.url !== o && e(Object(p.c)(o))
						})(e, t.pageLayer, ["url", "media", "onlyTitle", "text", "selftext"])
					}
				}));
			class su extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onPostTabClick = () => {
						this.props.isTabsDisabled.post || this.props.onChange(m.Rb.POST, {
							govType: this.props.govType
						})
					}, this.onMediaTabClick = () => {
						this.props.isTabsDisabled.media || this.props.onChange(m.Rb.MEDIA, {
							govType: this.props.govType
						})
					}, this.onLinkTabClick = () => {
						this.props.isTabsDisabled.link || this.props.onChange(m.Rb.LINK_ONLY, {
							govType: this.props.govType
						})
					}, this.onPollTabClick = () => {
						this.props.isTabsDisabled.poll || this.props.onChange(m.Rb.POLL, {
							govType: this.props.govType
						})
					}
				}
				render() {
					const {
						destSubreddit: e,
						hasCreatedPredictionDrafts: t,
						isTabsDisabled: n,
						submissionType: o,
						isImageGalleryCreationEnabled: s
					} = this.props, {
						name: i = "",
						allowedPostTypes: a
					} = e, {
						images: c = !0,
						videos: l = !0
					} = a || {};
					let u = d.fbt._({
						"*": "Images & Video",
						_1: "Image & Video"
					}, [d.fbt._plural(s ? 2 : 1)], {
						hk: "3VeQoy"
					});
					return c && !l ? u = s ? d.fbt._("Images", null, {
						hk: "3fSX8N"
					}) : d.fbt._("Image", null, {
						hk: "uFHQ1"
					}) : l && !c && (u = d.fbt._("Video", null, {
						hk: "3w6DFr"
					})), r.a.createElement(eu, null, r.a.createElement($l, null, r.a.createElement(tu, {
						active: o === m.Rb.POST,
						disabled: t || n.post,
						onClick: this.onPostTabClick
					}, r.a.createElement($e.a, {
						name: "text_post",
						isFilled: o === m.Rb.POST,
						className: Zl.a.Icon
					}), d.fbt._("Post", null, {
						hk: "ozUj2"
					})), r.a.createElement(tu, {
						active: o === m.Rb.MEDIA,
						disabled: t || n.media,
						onClick: this.onMediaTabClick
					}, n.media && r.a.createElement(Nt.a, {
						text: d.fbt._("Images and videos are not allowed in {subreddit name}", [d.fbt._param("subreddit name", `r/${i}`)], {
							hk: "2uC6BP"
						})
					}), r.a.createElement($e.a, {
						name: "image_post",
						isFilled: o === m.Rb.MEDIA,
						className: Zl.a.Icon
					}), u), r.a.createElement(tu, {
						active: o === m.Rb.LINK_ONLY,
						disabled: t || n.link,
						onClick: this.onLinkTabClick
					}, r.a.createElement($e.a, {
						name: "link_post",
						isFilled: o === m.Rb.LINK_ONLY,
						className: Zl.a.Icon
					}), d.fbt._("Link", null, {
						hk: "1pbEKv"
					})), r.a.createElement(tu, {
						active: o === m.Rb.POLL,
						disabled: t || n.poll,
						onClick: this.onPollTabClick
					}, r.a.createElement($e.a, {
						name: "poll_post",
						isFilled: o === m.Rb.POLL,
						className: Zl.a.Icon
					}), d.fbt._("Poll", null, {
						hk: "SQdo4"
					}))))
				}
			}
			var iu = Object(v.t)()(ru(su)),
				au = n("./src/reddit/components/PostCreationForm/index.m.less"),
				cu = n.n(au);
			const du = Qe.a.div("FormContent", cu.a),
				lu = Qe.a.wrapped(C.a, "CrosspostBox", cu.a),
				uu = Qe.a.div("FormContainer", cu.a),
				pu = Qe.a.div("TabContent", cu.a),
				mu = Qe.a.div("PostingGuidelines", cu.a),
				hu = Object(v.t)({
					draftId: v.u,
					isPostCreationPage: v.D,
					pageLayer: e => e,
					sourcePostId: e => Object(v.U)(e).source_id
				}),
				bu = Object(i.c)({
					submissionType: S.a,
					allowNavigationCallback: k.a,
					contributorRequestPending: e => Object(T.f)(e, g.e.Post),
					discardGoesBack: (e, {
						pageLayer: t
					}) => {
						const n = Object(v.R)(e, {
							pageLayer: t
						});
						return !!n && "/" === n[0]
					},
					draft: j.d,
					draftsCount: w.k,
					editorMode: S.n,
					eventSchedule: S.p,
					includeUserProfile: w.g,
					isChanged: S.F,
					isNameEditable: w.M,
					isPostSubmitEnabled: Mo,
					isScheduledPost: S.Q,
					flair: S.r,
					hasError: S.u,
					havePostContent: S.B,
					linkBody: S.S,
					markdownBody: S.T,
					rteBody: S.eb,
					maxDrafts: w.V,
					modalId: _.a,
					needsCaptcha: S.W,
					nextSubreddit: S.X,
					pending: S.Z,
					postRequirements: S.nb,
					sourcePostRoot: S.ib,
					submitMode: S.lb,
					subredditOrProfile: v.o,
					title: S.pb,
					uploads: e => e.uploads
				});
			class fu extends r.a.Component {
				constructor(e) {
					super(e), this.postFieldValidationPending = null, this.sendStartTypingInputBodyEvent = u()(() => this.props.onStartTypingInput(f.l.BODY)), this.sendStartTypingInputTitleEvent = u()(() => this.props.onStartTypingInput(f.l.TITLE)), this.sendStartTypingInputUrlEvent = u()(() => this.props.onStartTypingInput(f.l.URL)), this.onExternalAccountConnected = () => {
						this.props.onExternalAccountsDataRequested()
					}, this.onRecaptchaSucceeded = () => {
						this.props.onSubmit(this.props.submitMode, this.postFieldValidationPending)
					}, this.onDiscardPromptOnNavigationConfirm = () => {
						this.props.onTrackDiscardButtonClick(), this.props.discardGoesBack || this.props.onDiscardPromptOnNavigationConfirmed(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onDiscardPromptOnNewPostConfirm = () => {
						this.props.onTrackDiscardButtonClick(), this.props.onToggleModal(f.c), this.props.onDiscardPromptOnCreatePostConfirmed()
					}, this.onDiscardPromptAbort = () => {
						this.props.onToggleModal(this.props.modalId), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}, this.onDiscardPromptSaveDraft = () => {
						this.props.onToggleModal(this.props.modalId), this.onSaveDraft()
					}, this.handleKeyDown = e => {
						const {
							ctrlKey: t,
							metaKey: n,
							keyCode: o
						} = e;
						(t || n) && o === h.a.Enter && this.onSubmit()
					}, this.onSubredditChangePromptConfirmed = () => {
						this.props.nextSubreddit && (this.props.onCancelAndRemoveMediaUpload(), this.props.onRedirectToSubreddit(this.props.nextSubreddit))
					}, this.onSubmit = () => {
						const {
							isPostSubmitEnabled: e,
							isScheduledPost: t,
							onSubmit: n
						} = this.props;
						e && n(t ? f.q.ScheduledPost : f.q.Post, this.postFieldValidationPending)
					}, this.onSaveDraft = async () => {
						const {
							draftId: e,
							draftsCount: t,
							eventSchedule: n,
							maxDrafts: o,
							onToggleModal: r
						} = this.props;
						!e && t >= o ? r(_l.a.MAX_DRAFTS_MODAL_ID) : n || this.hasRichPostMedia() ? r(Al) : this.props.onSubmit(f.q.Draft, this.postFieldValidationPending)
					}, this.tryLoadDraft = e => {
						this.props.isChanged ? (this.setState({
							draftToLoad: e
						}), this.props.onToggleModal(_l.a.LOAD_DRAFT_MODAL_ID)) : (this.props.onToggleModal(f.d), this.onLoadDraft(e))
					}, this.onLoadDraft = e => {
						e && this.props.onLoadDraft(e)
					}, this.onSelectCollection = e => {
						this.props.onSetDestCollection(e.id)
					}, this.onPromptCancel = e => {
						this.props.onToggleModal(e)
					}, this.onToggleCurrentModal = () => {
						this.props.modalId && this.props.onToggleModal(this.props.modalId)
					}, this.onPromptConfirm = e => {
						switch (e) {
							case _l.a.LOAD_DRAFT_MODAL_ID:
								this.props.onToggleModal(e), this.onLoadDraft(this.state.draftToLoad);
								break;
							case _l.a.MAX_DRAFTS_MODAL_ID:
								this.props.onRequestDraftList(), this.props.onToggleModal(f.d);
								break;
							default:
								this.props.onToggleModal(e)
						}
					}, this.onConfirmSavingDraftWithLimitations = () => {
						this.onToggleCurrentModal(), this.props.onSubmit(f.q.Draft, this.postFieldValidationPending)
					}, this.onToggleCollectionListModal = () => {
						this.props.onToggleModal(f.a)
					}, this.onCollectionCreated = e => {
						this.onToggleCurrentModal(), this.onSelectCollection(e)
					}, this.onDraftListClose = () => {
						this.props.onToggleModal(f.d)
					}, this.onPostFieldValidation = e => {
						this.postFieldValidationPending = e
					}, this.state = {
						draftToLoad: null
					}
				}
				componentDidMount() {
					Object(b.d)(b.a.PostComposer), this.externalAccountEventsChannel = Object(Re.a)(), this.externalAccountEventsChannel.addEventListener("message", this.onExternalAccountConnected), this.props.isNameEditable && this.props.startChangeUsernameFlow()
				}
				componentWillUnmount() {
					Object(b.b)(b.a.PostComposer), this.externalAccountEventsChannel && this.externalAccountEventsChannel.close(), this.props.onUnmount()
				}
				hasRichPostMedia() {
					const {
						rteBody: e,
						submissionType: t
					} = this.props;
					return t === m.Rb.POST && e.isBound && Object(x.j)(e.editorState.getCurrentContent())
				}
				renderActiveForm() {
					switch (this.props.submissionType) {
						case m.Rb.POST:
						case m.Rb.POLL:
							return r.a.createElement(El, {
								displayPollCreation: this.props.submissionType === m.Rb.POLL,
								onChange: this.sendStartTypingInputBodyEvent,
								onPostFieldValidation: this.onPostFieldValidation,
								onSubmit: this.onSubmit
							});
						case m.Rb.MEDIA:
							return r.a.createElement(Ma, null);
						case m.Rb.LINK_ONLY:
							return r.a.createElement(Is, {
								onChange: this.sendStartTypingInputUrlEvent,
								onKeyDown: this.handleKeyDown,
								onPostFieldValidation: this.onPostFieldValidation
							});
						case m.Rb.CROSSPOST: {
							const {
								sourcePostRoot: e
							} = this.props;
							return e && r.a.createElement(lu, {
								postId: e.id,
								mediaProps: {
									isExpando: !1,
									isListing: !1,
									isNotCardView: !0,
									post: e,
									primaryContent: !1,
									showCentered: !0,
									showFull: !0,
									shouldLoad: !0,
									shouldPause: !1
								}
							})
						}
						default:
							return "Invalid submissionType"
					}
				}
				render() {
					const {
						contributorRequestPending: e,
						draftId: t,
						includeUserProfile: n,
						modalId: o,
						needsCaptcha: s,
						nextSubreddit: i,
						postRequirements: a,
						sourcePostId: c,
						sourcePostRoot: l,
						submissionType: u,
						submitMode: p,
						subredditOrProfile: h
					} = this.props;
					if (u === m.Rb.CROSSPOST) {
						if (!l) return r.a.createElement(E.b, {
							message: d.fbt._("The original post cannot be found", null, {
								hk: "3ieS5B"
							})
						});
						if (!l.isCrosspostable || l.isSponsored) return r.a.createElement(E.a, {
							message: d.fbt._("The original post cannot be crossposted", null, {
								hk: "4hn9ht"
							})
						})
					}
					const b = a && a.guidelinesText && a.guidelinesText.trim() || "";
					return r.a.createElement(uu, null, r.a.createElement(yc, {
						submissionType: u,
						submitMode: p
					}), r.a.createElement($o, {
						includeUserProfile: n,
						allowCrosspostableOnly: !!c
					}), !!b && r.a.createElement(mu, null, b), r.a.createElement(du, null, u !== m.Rb.CROSSPOST && r.a.createElement(iu, null), r.a.createElement(pu, null, r.a.createElement(Ol, {
						onChange: this.sendStartTypingInputTitleEvent,
						onKeyDown: this.handleKeyDown,
						onPostFieldValidation: this.onPostFieldValidation
					}), this.renderActiveForm()), e && r.a.createElement(y.a, null), r.a.createElement(Uo, {
						contributorRequestPending: e,
						draftId: t,
						onCancel: this.props.onDiscardPromptOnNavigationConfirmed,
						onPostFieldValidation: this.onPostFieldValidation,
						onSaveDraft: this.onSaveDraft,
						onSubmit: this.onSubmit,
						sourcePostId: c,
						subredditId: null == h ? void 0 : h.id
					}), r.a.createElement(cc, {
						draftId: t
					})), s && r.a.createElement(Ll, {
						callback: this.onRecaptchaSucceeded
					}), o === Ae && r.a.createElement(Be, {
						onAbort: this.onDiscardPromptAbort,
						onDiscardConfirmed: this.onDiscardPromptOnNavigationConfirm,
						onSaveDraft: this.onDiscardPromptSaveDraft,
						submissionType: u
					}), o === f.c && r.a.createElement(Be, {
						onAbort: this.onDiscardPromptAbort,
						onDiscardConfirmed: this.onDiscardPromptOnNewPostConfirm,
						onSaveDraft: this.onDiscardPromptSaveDraft,
						submissionType: u
					}), o === f.d && r.a.createElement(ls, {
						onClose: this.onDraftListClose,
						onLoadDraft: this.tryLoadDraft
					}), o === f.a && h && r.a.createElement(Ve.a, {
						onClose: this.onToggleCollectionListModal,
						onSelectCollection: this.onSelectCollection,
						subredditId: h.id
					}), o === f.b && h && r.a.createElement(Ko.a, {
						onCancel: this.onToggleCollectionListModal,
						onCollectionCreated: this.onCollectionCreated,
						subredditId: h.id
					}), o === _l.a.LOAD_DRAFT_MODAL_ID && r.a.createElement(_l.b, {
						modalId: _l.a.LOAD_DRAFT_MODAL_ID,
						onCancel: this.onPromptCancel,
						onConfirm: this.onPromptConfirm
					}), o === _l.a.MAX_DRAFTS_MODAL_ID && r.a.createElement(_l.b, {
						modalId: _l.a.MAX_DRAFTS_MODAL_ID,
						onCancel: this.onPromptCancel,
						onConfirm: this.onPromptConfirm
					}), o === Al && r.a.createElement(Fl, {
						onCancel: this.onToggleCurrentModal,
						onConfirm: this.onConfirmSavingDraftWithLimitations,
						hasEventSchedule: !!this.props.eventSchedule,
						hasRichPostMedia: this.hasRichPostMedia()
					}), i && (o === f.p.ImageWillBeRemoved || o === f.p.VideoWillBeRemovedTooLongForGif || o === f.p.VideoWillBeRemovedMediaNotAllowed || o === f.p.GalleryWillBeRemovedGalleryNotAllowed) && r.a.createElement(Ql, {
						withOverlay: !0,
						promptType: o,
						nextSubreddit: i,
						onConfirmed: this.onSubredditChangePromptConfirmed,
						onCanceled: this.props.onCancelSubredditChange
					}), r.a.createElement(qe, null))
				}
			}
			var gu = hu(Object(s.b)(bu, (e, {
					draftId: t,
					sourcePostId: n,
					pageLayer: o
				}) => ({
					onLoadDraft: t => e(A.q(t)),
					onSubmit: (r, s) => e(((e, t) => async (n, o, {
						apiContext: r
					}) => {
						let s = o();
						const {
							pending: i
						} = s.creations.api.post.submit, a = Object(j.g)(s);
						if (i || a) return;
						n(Oe(e)), s = o();
						const c = Object(S.a)(s),
							d = ce.d.rteVideoPoster(s),
							l = Se(s),
							u = c === m.Rb.MEDIA;
						l && (d || u) && (await n(R.f(l)), Se(o())) || (e === f.q.Draft ? await n(Object(A.r)(t.draftId)) : e === f.q.ScheduledPost && Object(me.r)(s) ? await n(je(t)) : e === f.q.ScheduledPost ? await n(Te(t)) : await n(we(t)))
					})(r, {
						draftId: t || void 0,
						pageLayer: o,
						postFieldValidationPending: s,
						sourcePostId: n
					})),
					onDiscardPromptOnCreatePostConfirmed: () => {
						e(a.o(!1, o))
					},
					onDiscardPromptOnNavigationConfirmed: (t, n) => {
						e(t ? Object(p.a)() : n ? Object(p.b)(n.url) : Object(p.b)("/"))
					},
					onExternalAccountsDataRequested: () => e(P.o()),
					onRedirectToSubreddit: n => e(Ie.a(n, t)),
					onCancelSubredditChange: () => {
						e(a.x("")), e(Ie.e())
					},
					onCancelAndRemoveMediaUpload: () => {
						e(Object(a.d)({
							items: [],
							selectedKey: null
						})), e(Pe.j(R.a, !0))
					},
					onClearErrors: (t, n) => t && e(a.i(n)),
					onRequestDraftList: () => e(A.p()),
					onSetDestCollection: t => e(Ie.d(t)),
					onStartTypingInput: t => e((e, n) => O.n(n(), f.k.TYPE, t)),
					onToggleIsChanged: t => e(a.r(t)),
					onToggleModal: t => e(a.x(t)),
					onTrackDiscardButtonClick: () => e((e, t) => O.c(t())),
					onUnmount: () => e((e, t) => {
						e(Pe.j(R.a, !0)), e(Pe.i(f.m, !0))
					}),
					onUploadPendingThumbnails: t => e(R.f(t)),
					startChangeUsernameFlow: () => e(Object(I.f)())
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onClearErrors: n => t.onClearErrors(e.hasError || e.hasSubmitValidationError, n),
					onDiscardPromptOnNavigationConfirmed: () => t.onDiscardPromptOnNavigationConfirmed(e.discardGoesBack, e.subreddit)
				}))(fu)),
				Eu = n("./src/reddit/components/PostingSidebar/index.tsx"),
				Cu = n("./src/reddit/layout/page/Listing/index.tsx"),
				yu = n("./src/lib/makePostCreationPageKey/index.ts"),
				xu = n("./src/reddit/helpers/trackers/screenview.ts"),
				vu = n("./src/telemetry/models/Timer.ts");
			const Ou = Object(i.c)({
					destSubreddit: S.h,
					user: w.j
				}),
				_u = Object(s.b)(Ou, (e, {
					pageLayer: t
				}) => ({
					onResetForm: () => e(a.o(!1, t))
				})),
				ku = Object(v.t)({
					draftId: v.u,
					pageLayer: e => e
				});
			class Su extends o.Component {
				componentDidMount() {
					document.documentElement.scrollTop = document.body.scrollTop = 0;
					const e = this.props.pageLayer;
					if (e) {
						const t = Object(yu.a)(e.urlParams);
						N.c.has(t) && this.props.sendEvent(Object(xu.l)(t, vu.TimerType.InApp, N.c.end(t)))
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.draftId && !e.draftId && e.onResetForm()
				}
				render() {
					const {
						destSubreddit: e,
						user: t
					} = this.props;
					if (e.isProfile) {
						if (!t) return r.a.createElement(E.b, null);
						if (Object(pe.e)(t).toLowerCase() !== e.name.toLowerCase()) return r.a.createElement(E.a, null)
					}
					return r.a.createElement(Cu.a, {
						redditStyle: !0,
						disableFullscreen: !0,
						navBar: r.a.createElement("div", null),
						content: r.a.createElement(r.a.Fragment, null, r.a.createElement(c.a, null), r.a.createElement(gu, null)),
						sidebar: r.a.createElement(Eu.a, null)
					})
				}
			}
			t.default = ku(_u(Object(Vn.c)(Su)))
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var o, r = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(o || (o = {}));
			const s = {
				status: o.NotFetched
			};
			t.b = (e = s, t) => {
				switch (t.type) {
					case r.a:
						if (e.status === o.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: o,
									...r
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: r
									}
								}
							}
						}
						return e;
					case r.e:
						if (e.status === o.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: o,
									...r
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: r
									}
								}
							}
						}
						return e;
					case r.b:
						return {
							error: t.payload.error, status: o.Failure
						};
					case r.c:
						return {
							data: t.payload, status: o.Fetched
						};
					case r.d:
						return {
							status: o.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o, r = n("./src/lib/constants/specialMembership.ts"),
				s = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = n("./src/reddit/helpers/economics/sortBadges.ts"),
				a = n("./src/reddit/models/Badge/index.ts"),
				c = n("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(o || (o = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, n, o) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(r => {
						let s;
						(s = e.placement ? e.placement === a.a.First ? o[c.a.Loyalty][r] : o[c.a.Achievement][r] : l(e) ? o[c.a.Cosmetic][c.c.MyBadges][r] : o[c.a.Cosmetic][c.c.Gallery][r]) && (l(e) ? n.has(e.id) && s.unlocked.push(e) : t.has(e.id) || s.locked.push(e))
					})
				})
			}

			function p(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						o = parseInt(t.price || "0");
					return n === o ? Object(i.b)(e, t) : n - o
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function m(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === r.a).map(p).sort((e, n) => {
					const o = t[e.id],
						r = t[n.id];
					return Object(i.b)(o, r)
				})
			}

			function h(e) {
				const t = {
					[c.a.Loyalty]: {},
					[c.a.Achievement]: {},
					[c.a.Cosmetic]: {
						[c.c.Gallery]: {},
						[c.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(n => {
					const o = e.collections[n],
						r = {
							description: o.description,
							highlight: o.extra && o.extra.style && o.extra.style.color,
							id: o.id,
							locked: [],
							title: o.title,
							unlocked: []
						};
					t[c.a.Loyalty][n] = {
						...r,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][n] = {
						...r,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][n] = {
						...r,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][n] = {
						...r,
						locked: [],
						unlocked: []
					}
				});
				const n = new Set;
				e.userOwnedBadges.forEach(t => {
					const o = e.badges[t];
					o && n.add(o.type)
				});
				const o = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), n, o, t), u(Object.keys(e.products).map(t => e.products[t]), n, o, t), {
					collections: {
						[c.a.Loyalty]: m(t[c.a.Loyalty], e.collections),
						[c.a.Achievement]: m(t[c.a.Achievement], e.collections),
						[c.a.Cosmetic]: {
							[c.c.Gallery]: m(t[c.a.Cosmetic][c.c.Gallery], e.collections),
							[c.c.MyBadges]: m(t[c.a.Cosmetic][c.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = (e = d, t) => {
				switch (t.type) {
					case s.a: {
						const {
							subredditId: n
						} = t.payload, r = e[n];
						return r && r.status === o.Fetched ? {
							...e,
							[n]: {
								...r,
								data: {
									...r.data
								},
								raw: {
									...r.raw
								}
							}
						} : e
					}
					case s.h: {
						const {
							subredditId: n
						} = t.payload, r = e[n];
						return r && r.status === o.Fetched ? {
							...e,
							[n]: {
								...r,
								data: {
									...r.data,
									subscription: {
										...r.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...r.raw,
									subscription: {
										...r.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case s.i: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: {
								raw: n,
								data: h(n),
								status: o.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/redux/es/redux.js"),
				r = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/economics/claims/constants.ts")),
				s = n("./src/reddit/actions/economics/me/constants.ts");
			const i = {};
			var a = (e = i, t) => {
					switch (t.type) {
						case s.a: {
							const n = t.payload.claimPoints || {},
								o = Object.keys(n).reduce((t, o) => (t[o] = {
									...e[o],
									availableClaims: n[o]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var n;
								(null === (n = e[t]) || void 0 === n ? void 0 : n.isClaiming) && (o[t] = o[t] || {
									availableClaims: []
								}, o[t].isClaiming = !0)
							}), o
						}
						case r.b:
						case r.a:
							const {
								subredditId: n
							} = t.payload;
							return {
								...e, [n]: {
									...e[n],
									isClaiming: t.type === r.b
								}
							};
						default:
							return e
					}
				},
				c = n("./src/reddit/actions/governance/constants.ts");
			const d = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function u(e) {
				var t, n, o, r, s;
				const i = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					a = null == i ? void 0 : i.contracts,
					c = null == a ? void 0 : a.unlocked,
					d = null !== (o = null === (n = e.walletProvider) || void 0 === n ? void 0 : n.provider) && void 0 !== o ? o : e.provider,
					u = !!(null === (r = e.walletProvider) || void 0 === r ? void 0 : r.inTransition),
					p = (null == c ? void 0 : c.decimals) || 0,
					m = "1" + "0".repeat(p);
				return {
					blockchainProvider: d,
					contractAddress: (null == c ? void 0 : c.address) || "",
					contracts: a,
					decimals: p,
					displayConversion: m,
					images: e.images || l,
					inTransition: u,
					name: e.name,
					nomenclature: null === (s = e.extra) || void 0 === s ? void 0 : s.nomenclature,
					polls: e.polls,
					symbol: (null == c ? void 0 : c.token) || ""
				}
			}
			var p = (e = d, t) => {
				switch (t.type) {
					case c.a: {
						const {
							subredditId: n,
							meta: o
						} = t.payload;
						return {
							...e,
							[n]: u(o)
						}
					}
					default:
						return e
				}
			};
			const m = {};
			var h = (e = m, t) => {
				switch (t.type) {
					case c.n: {
						const {
							subredditId: n,
							wallets: o
						} = t.payload, r = Object.keys(o).reduce((t, r) => {
							return {
								...t,
								[r]: {
									...e[r] || {},
									[n]: o[r]
								}
							}
						}, {});
						return {
							...e,
							...r
						}
					}
					default:
						return e
				}
			};
			t.a = Object(o.c)({
				claims: a,
				points: p,
				publicWallets: h
			})
		},
		"./src/reddit/reducers/features/userFlair/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/omit.js"),
				r = n.n(o),
				s = n("./src/reddit/actions/grantUserFlair/constants.ts"),
				i = n("./src/reddit/actions/modQueue/constants.ts"),
				a = n("./src/reddit/actions/pages/constants.ts"),
				c = n("./src/reddit/actions/pages/postCreation.ts"),
				d = n("./src/reddit/actions/pages/postDraft.ts"),
				l = n("./src/reddit/actions/pages/subreddit.ts"),
				u = n("./src/reddit/actions/userFlair/constants.ts");
			const p = {};
			t.a = (e = p, t) => {
				switch (t.type) {
					case l.SUBREDDIT_LOADED:
					case c.PAGE_LOADED:
					case d.PAGE_LOADED:
					case a.b:
					case a.f:
					case u.k:
						return {
							...e, ...t.payload.userFlair
						};
					case i.i:
					case i.f:
					case i.m:
					case i.p:
					case i.v: {
						const {
							response: n
						} = t.payload, {
							userFlair: o
						} = n, r = {
							...e
						};
						return Object.keys(o).forEach(e => {
							r[e] || (r[e] = o[e])
						}), r
					}
					case u.r: {
						const {
							subredditId: n,
							applied: o,
							displaySettings: r
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								applied: o,
								displaySettings: r
							}
						}
					}
					case s.h: {
						const {
							subredditId: n,
							applied: o
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								applied: o
							}
						}
					}
					case u.j: {
						const {
							subredditId: n,
							isEnabled: o
						} = t.payload, r = {
							...e[n].displaySettings,
							isEnabled: o
						};
						return {
							...e,
							[n]: {
								...e[n],
								displaySettings: r
							}
						}
					}
					case u.d: {
						const {
							subredditId: n,
							canAssignOwn: o
						} = t.payload, r = {
							...e[n].permissions,
							canAssignOwn: o
						};
						return {
							...e,
							[n]: {
								...e[n],
								permissions: r
							}
						}
					}
					case u.q: {
						const n = t.payload,
							o = e[n.subredditId],
							r = e[n.subredditId].templates,
							s = e[n.subredditId].templateIds,
							i = {
								...r,
								[n.template.id]: n.template
							},
							a = [...s];
						return a.includes(n.template.id) || a.push(n.template.id), {
							...e,
							[n.subredditId]: {
								...o,
								templates: i,
								templateIds: a
							}
						}
					}
					case u.g: {
						const n = t.payload,
							o = e[n.subredditId],
							s = e[n.subredditId].templates,
							i = e[n.subredditId].templateIds,
							a = r()(s, n.templateId),
							c = i.filter(e => e !== n.templateId);
						return {
							...e,
							[n.subredditId]: {
								...o,
								templates: {
									...a
								},
								templateIds: c
							}
						}
					}
					case u.m:
					case u.l: {
						const n = t.payload,
							o = e[n.subredditId];
						return {
							...e,
							[n.subredditId]: {
								...o,
								templateIds: n.templateIds
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			}));
			const o = (e, {
					post: t
				}) => {
					const n = t.belongsTo.id;
					if (!n) return null;
					const o = e.authorFlair.models[n];
					if (!o) return null;
					const r = t.author;
					return r && o[r] || null
				},
				r = (e, {
					subredditId: t
				}) => {
					const n = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!n) return null;
					if (!t) return null;
					const o = e.authorFlair.models[t];
					return o ? o[n] : null
				},
				s = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/crypto/points.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			}));
			var o = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/endpoints/governance/crypto.ts"),
				i = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(i.a)({
				features: {
					crypto: a.a
				}
			});
			const c = (e, t) => {
				var n, o, r;
				return t ? null === (r = null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === o ? void 0 : o.points) || void 0 === r ? void 0 : r[t] : void 0
			};

			function d() {
				const e = Object(r.Z)(),
					t = Object(o.e)(t => Object(r.q)(t, {
						pageLayer: e
					})),
					n = Object(o.e)(e => c(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: n
				}
			}
			const l = (e, t) => {
				var n;
				const o = null === (n = c(e, t)) || void 0 === n ? void 0 : n.blockchainProvider;
				return o === s.a.Ethereum || o === s.a.Rinkeby || o === s.a.EthTraderEthereum || o === s.a.EthTraderRinkeby || o === s.a.ArbitrumRinkeby
			}
		},
		"./src/reddit/selectors/editorContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./src/reddit/actions/postCreation/constants.ts");
			const r = (e, t) => e.creations.api.editor.converting.pending[t || o.k]
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const s = e => Object(r.c)(e, {
				experimentName: o.yc,
				experimentEligibilitySelector: r.a,
				expEventOverride: !1
			}) === o.Ec.Enabled
		},
		"./src/reddit/selectors/experiments/presenceIndicator.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return i
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const s = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: o.Mc
					}) === o.Wc.Enabled
				},
				i = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: o.Lc
					}) === o.Vc.Enabled
				}
		},
		"./src/reddit/selectors/features/predictions/creation/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			var o = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/reducers/features/predictions/index.ts"),
				s = n("./src/reddit/selectors/postCreations.ts");
			Object(o.a)({
				features: {
					predictions: r.a
				}
			});
			const i = e => {
					const t = (e => {
						var t, n;
						return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === n ? void 0 : n.creation
					})(e);
					return (null == t ? void 0 : t.length) ? null == t ? void 0 : t.map(t => {
						const n = Object(s.cb)({
								...e,
								creations: {
									...e.creations,
									formData: t.formData,
									formState: t.formState
								}
							}, {}),
							o = t.formData.polls,
							r = o.options.map(e => ({
								text: e.text
							})),
							i = {};
						return n.document ? i.richText = JSON.stringify({
							document: n.document
						}) : n.markdown && (i.markdown = n.markdown), {
							title: n.title,
							isLiveChat: n.isChatPost,
							isNsfw: n.isNSFW,
							isSpoiler: n.isSpoiler,
							votingEndsAt: o.endDate.toISOString(),
							body: i,
							options: r
						}
					}) : []
				},
				a = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === n ? void 0 : n.creation.length)
				}
		},
		"./src/reddit/selectors/gild.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "f", (function() {
				return s
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			const o = e => e.gild.gildModalThingId,
				r = e => e.gild.correlationId || void 0,
				s = e => e.gild.isAnonymous,
				i = e => e.gild.isIframed,
				a = e => e.gild.message,
				c = e => e.gild.api.pending,
				d = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/awardIcon.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "d", (function() {
				return b
			}));
			var o = n("./src/reddit/models/Gold/Award.ts"),
				r = n("./src/reddit/selectors/commentSelector.ts"),
				s = n("./src/reddit/selectors/gold/giveAwards.ts"),
				i = n("./src/reddit/selectors/posts.ts"),
				a = n("./src/reddit/selectors/user.ts"),
				c = n("./src/reddit/selectors/userPrefs.ts");
			const d = [32, 48, 64, 128],
				l = (e, t, n) => {
					const o = t ? e[`staticIcon${n}`] : e[`icon${n}`];
					return (null == o ? void 0 : o.url) ? o.url : t ? e.staticIcon.url : e.icon.url
				},
				u = ({
					award: e,
					size: t,
					prefersReducedMotion: n,
					postOrComment: r
				}) => e.awardSubType === o.d.Group ? (({
					award: e,
					size: t,
					prefersReducedMotion: n,
					postOrComment: o
				}) => {
					let r = e;
					if ((null == o ? void 0 : o.awardCountsById) && o.awardCountsById[e.id] && e.tiers) {
						const t = o.awardCountsById[e.id];
						r = e.tiers.reduce((e, n) => t >= n.awardingsRequired ? n : e)
					}
					return l(r, n, t)
				})({
					award: e,
					size: t,
					prefersReducedMotion: n,
					postOrComment: r
				}) : l(e, n, t),
				p = (e, {
					awards: t,
					minSize: n,
					postOrCommentId: o
				}) => {
					const s = Object(c.c)(e),
						a = d.find(e => e >= n),
						l = o ? Object(i.F)(e, {
							postId: o
						}) || Object(r.a)(e, {
							commentId: o
						}) : void 0;
					return t.reduce((e, t) => (t && (e[t.id] = u({
						award: t,
						size: a,
						prefersReducedMotion: s,
						postOrComment: l
					})), e), {})
				},
				m = (e, {
					award: t,
					minSize: n,
					postOrCommentId: o
				}) => t ? p(e, {
					awards: [t],
					minSize: n,
					postOrCommentId: o
				})[t.id] : void 0,
				h = (e, {
					minSize: t,
					userName: n
				}) => {
					const o = Object(a.nb)(e, {
						userName: n
					});
					if (o && o.awardedLastMonth && o.awardedLastMonth.topAward) return m(e, {
						award: o.awardedLastMonth.topAward,
						minSize: t
					})
				},
				b = e => {
					const t = Object(s.b)(e),
						n = Object(s.a)(e);
					return m(e, {
						award: t,
						postOrCommentId: n || void 0,
						minSize: 512
					})
				}
		},
		"./src/reddit/selectors/gold/enabledFeatures.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/featureFlags/index.ts"),
				s = n("./src/reddit/selectors/economics.ts"),
				i = n("./src/reddit/selectors/gold/powerups/index.ts");
			const a = Object(o.a)(r.d.spEmotes, s.b, i.f, (e, {
					subredditId: t
				}) => {
					var n;
					return t && (null === (n = e.subreddits.about[t]) || void 0 === n ? void 0 : n.userIsSubscriber) || !1
				}, (e, t, n, o) => {
					if (n && o) return !0;
					const r = !(!t || !Object.keys(t).length);
					return e && r
				}),
				c = Object(o.a)(s.b, i.g, i.h, i.f, (e, t, n, o) => {
					if (o) return [...t, ...n].slice(0, 3);
					let r = [];
					for (const s of e || [])
						if ((r = [...r, ...Object.values(s.emotes)]).length > 3) break;
					return r.slice(0, 3)
				}),
				d = Object(o.a)(r.d.spGiphy, i.q, (e, t) => e || t)
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			}));
			const o = e => e.gild.selectedAward,
				r = e => e.gild.gildedThing
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "q", (function() {
				return i
			})), n.d(t, "s", (function() {
				return a
			})), n.d(t, "r", (function() {
				return c
			})), n.d(t, "u", (function() {
				return d
			})), n.d(t, "t", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "p", (function() {
				return p
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "n", (function() {
				return h
			})), n.d(t, "o", (function() {
				return b
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "l", (function() {
				return E
			})), n.d(t, "w", (function() {
				return C
			})), n.d(t, "x", (function() {
				return y
			})), n.d(t, "v", (function() {
				return x
			})), n.d(t, "y", (function() {
				return v
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "i", (function() {
				return k
			})), n.d(t, "k", (function() {
				return S
			})), n.d(t, "j", (function() {
				return j
			})), n.d(t, "m", (function() {
				return T
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "d", (function() {
				return I
			}));
			var o = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				r = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(r.a)({
				features: {
					goldPurchase: s.a
				}
			});
			const i = e => e.features.goldPurchase.purchaseModal.activePage,
				a = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				c = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.showModal,
				l = e => e.features.goldPurchase.purchaseModal.packageId,
				u = e => e.features.goldPurchase.packageOfferModal.packageId,
				p = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				m = e => {
					const t = Object(o.i)(e),
						n = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && n && t.find(e => e.mobileId === n) || null
				},
				h = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				b = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				f = e => e.features.goldPurchase.payment.paymentMethod,
				g = e => e.features.goldPurchase.payment.cardName,
				E = e => e.features.goldPurchase.payment.postalCode,
				C = e => e.features.goldPurchase.payment.savedCardsPending,
				y = e => e.features.goldPurchase.payment.savedCards,
				x = e => e.features.goldPurchase.payment.rememberCard,
				v = e => e.features.goldPurchase.payment.useSavedCard,
				O = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				_ = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				k = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				S = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				j = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				T = e => e.features.goldPurchase.payment.stripeToken.pending,
				w = e => e.features.goldPurchase.payment.paypal.passthrough,
				I = e => e.features.goldPurchase.payment.paypal.errorMessage
		},
		"./src/reddit/selectors/moderatingComments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			}));
			const o = (e, {
					commentId: t,
					commentsPageKey: n
				}) => {
					if (!t) return !1;
					if (e.features.comments.collapsed[n] && t in e.features.comments.collapsed[n]) return !!e.features.comments.collapsed[n][t];
					const o = e.features.comments.models[t];
					return !!o && ("computedCollapsed" in o ? !!o.computedCollapsed : o.collapsedBecauseCrowdControl ? !e.modModeEnabled : o.collapsed)
				},
				r = (e, {
					commentId: t
				}) => {
					if (!t) return !1;
					const n = e.features.comments.models[t];
					return !(!n || !n.collapsedBecauseCrowdControl) && e.modModeEnabled
				}
		},
		"./src/reddit/selectors/products.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/models/Product/index.ts");
			const r = (e, t) => {
					const n = e.products.models[t];
					if (n && n.type === o.a.Badge) return n
				},
				s = (e, {
					productId: t
				}) => {
					const n = e.products.models[t];
					if (n) {
						const o = n.subredditId,
							r = Object.keys(e.user.ownedBadges[o] || {}),
							s = e.badges.models,
							i = Date.now();
						let a = !1;
						return r.forEach(e => {
							const n = s[e];
							n && n.type === t && n.endsAt > i && (a = !0)
						}), a
					}
					return !1
				}
		},
		"./src/reddit/selectors/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return i
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "i", (function() {
				return d
			})), n.d(t, "j", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "q", (function() {
				return h
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "r", (function() {
				return y
			})), n.d(t, "m", (function() {
				return x
			})), n.d(t, "n", (function() {
				return v
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "o", (function() {
				return k
			})), n.d(t, "b", (function() {
				return S
			}));
			var o = n("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				r = n("./src/reddit/models/Flair/index.ts"),
				s = n("./src/reddit/models/ScheduledPost/index.ts");
			const i = (e, {
					subredditId: t
				}) => ((e, {
					subredditId: t,
					type: n
				}) => !!e.posts.scheduledPosts[n].models[t])(e, {
					subredditId: t,
					type: s.f.standalonePosts
				}),
				a = (e, {
					subredditId: t,
					type: n
				}) => !!e.posts.scheduledPosts[n].pageInfo[t] && e.posts.scheduledPosts[n].pageInfo[t].hasNextPage,
				c = (e, {
					subredditId: t,
					type: n
				}) => e.posts.scheduledPosts[n].pageInfo[t] ? e.posts.scheduledPosts[n].pageInfo[t].endCursor : null,
				d = e => e.posts.scheduledPosts.api.pending,
				l = e => e.posts.scheduledPosts.api.pendingUpdate,
				u = e => e.posts.scheduledPosts.api.error,
				p = {},
				m = [],
				h = (e, {
					subredditId: t
				}) => (e.posts.scheduledPosts.standalonePosts.postOrder[t] || m).filter(n => !!(e.posts.scheduledPosts.standalonePosts.models[t] || p)[n]).map(n => e.posts.scheduledPosts.standalonePosts.models[t][n]),
				b = (e, {
					subredditId: t
				}) => (e.posts.scheduledPosts.recurringPosts.postOrder[t] || m).filter(n => !!(e.posts.scheduledPosts.recurringPosts.models[t] || p)[n]).map(n => e.posts.scheduledPosts.recurringPosts.models[t][n]),
				f = (e, {
					subredditId: t,
					scheduledPostId: n,
					type: o
				}) => {
					return (e.posts.scheduledPosts[o].models[t] || p)[n] || void 0
				},
				g = (e, {
					subredditId: t,
					scheduledPostId: n
				}) => f(e, {
					subredditId: t,
					scheduledPostId: n,
					type: s.f.standalonePosts
				}),
				E = (e, {
					subredditId: t,
					scheduledPostId: n
				}) => {
					const o = f(e, {
						subredditId: t,
						scheduledPostId: n,
						type: s.f.recurringPosts
					});
					return o || o
				},
				C = (e, {
					subredditId: t,
					scheduledPostId: n
				}) => g(e, {
					subredditId: t,
					scheduledPostId: n
				}) || E(e, {
					subredditId: t,
					scheduledPostId: n
				}),
				y = e => e.creations.formData.scheduledPostId,
				x = ({
					scheduledPost: e
				}) => (({
					flair: e,
					isNsfw: t,
					isSpoiler: n,
					isOriginalContent: s
				}) => {
					const i = [];
					return s && i.push({
						text: "OC",
						type: r.f.Oc
					}), e && i.push(...Object(o.b)(e)), n && i.push({
						text: "spoiler",
						type: r.f.Spoiler
					}), t && i.push({
						text: "nsfw",
						type: r.f.Nsfw
					}), i
				})(e),
				v = ({
					scheduledPost: e
				}) => {
					const t = x({
							scheduledPost: e
						}),
						n = t.find(e => e.type === r.f.Richtext);
					return n || (t.find(e => e.type === r.f.Text) || null)
				},
				O = e => e.posts.scheduledPosts[s.f.recurringPosts].editModal.scheduledPostId,
				_ = e => e.posts.scheduledPosts[s.f.recurringPosts].editModal.subredditId,
				k = e => e.posts.scheduledPosts.api.pendingUpdate,
				S = e => e.posts.scheduledPosts.api.creationToken
		},
		"./src/reddit/selectors/userFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			}));
			var o = n("./src/lib/objectSelector/index.ts"),
				r = n("./src/reddit/models/Flair/index.ts"),
				s = n("./src/reddit/selectors/moderatorPermissions.ts"),
				i = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/userFlair/index.ts");
			Object(i.a)({
				features: {
					userFlair: a.a
				}
			});
			const c = (e, {
					subredditId: t
				}) => e.features.userFlair[t],
				d = (e, {
					subredditId: t
				}) => !e.features.userFlair[t] || e.features.userFlair[t].displaySettings.isEnabled,
				l = (e, {
					subredditId: t
				}) => e.features.userFlair[t] ? e.features.userFlair[t].displaySettings.position : r.b.Right,
				u = Object(o.a)((e, {
					subredditId: t
				}) => {
					const n = c(e, {
						subredditId: t
					});
					if (n) return {
						type: r.d.UserFlair,
						displaySettings: n.displaySettings,
						permissions: n.permissions
					}
				}),
				p = (e, {
					subredditId: t
				}) => {
					const n = d(e, {
							subredditId: t
						}),
						o = u(e, {
							subredditId: t
						}),
						r = c(e, {
							subredditId: t
						});
					if (!n || !o || !r) return !1;
					if (r.applied) return !0;
					const i = Object(s.f)(e, {
							subredditId: t
						}),
						{
							canUserChange: a
						} = o.permissions;
					return !!r.templateIds.find(e => {
						return !r.templates[e].modOnly || i
					}) && a
				}
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, n) {
			"use strict";
			var o = n("./src/config.ts"),
				r = n("./src/lib/fastdom/index.ts"),
				s = n("./src/reddit/actions/jsApi.ts");
			const i = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				a = "jsapi.consumer",
				c = "/r/redesign/wiki/jsapi";
			var d = n("./src/reddit/constants/jsapiEvents.ts");
			const l = 100;
			const u = new class {
				constructor() {
					if (this.queue = [], this.active = !1, "undefined" == typeof document) return;
					let e;
					this.store = new Promise(t => e = t), this.attachStore = t => e(t);
					const t = document.querySelectorAll(`meta[name="${a}"]`);
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(s.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(d.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === a && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(i, `${o.a.redditUrl}${c}`, e))
					} catch (n) {
						return void console.error(i, `${o.a.redditUrl}${c}`, n)
					}
					this.store.then(e => {
						e.dispatch(s.b(t || "")), this.fireEventsQueue()
					})
				}
				publish(e, t, n) {
					const o = {
						name: e,
						props: t,
						element: n
					};
					this.queue.push(o), this.queue.length > l && this.queue.shift(), this.active && this.fireEvent(o)
				}
				fireEvent(e) {
					e.element.dispatchEvent(new CustomEvent(e.name, {
						detail: e.props
					}))
				}
				fireEventsQueue() {
					r.a.read(() => {
						for (let e = 0; e < this.queue.length; e++) {
							const t = this.queue[e];
							this.fireEvent(t)
						}
					})
				}
			};
			t.a = u
		},
		"./src/redditGQL/operations/AddPredictionDrafts.json": function(e) {
			e.exports = JSON.parse('{"id":"84c24426ab00"}')
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/CreatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"b8bc80c247a6"}')
		},
		"./src/redditGQL/operations/CreateScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"1e0a4bfe5ac9"}')
		},
		"./src/redditGQL/operations/EndPredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"160c1d2839c1"}')
		},
		"./src/redditGQL/operations/GetPredictionChipPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"3785e4a718f5"}')
		},
		"./src/redditGQL/operations/GetPredictionCoinPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"6829c428155b"}')
		},
		"./src/redditGQL/operations/GetPredictionToken.json": function(e) {
			e.exports = JSON.parse('{"id":"26b911e67a5f"}')
		},
		"./src/redditGQL/operations/GetTournaments.json": function(e) {
			e.exports = JSON.parse('{"id":"d2575383d168"}')
		},
		"./src/redditGQL/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/redditGQL/operations/ResolvePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"45c2e0b86b90"}')
		},
		"./src/redditGQL/operations/SubredditScheduledPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"de72339b938a"}')
		},
		"./src/redditGQL/operations/SubredditTopPredictors.json": function(e) {
			e.exports = JSON.parse('{"id":"3407d5f67207"}')
		},
		"./src/redditGQL/operations/SubredditTypeaheadSearch.json": function(e) {
			e.exports = JSON.parse('{"id":"20edc5ee12df"}')
		},
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"9995fe64fd5a"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"eab9458f507c"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		},
		"./src/redditGQL/operations/UpdatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"aeb2b0e42e97"}')
		},
		"./src/redditGQL/operations/UpdateScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"f5276d63e133"}')
		},
		"./src/redditGQL/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"1712829dfb21"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostCreation.41f14ccc9370e93f74ff.js.map