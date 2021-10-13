// https://www.redditstatic.com/desktop2x/PostCreation.c1e033b07ecbcef09e56.js
// Retrieved at 10/13/2021, 9:50:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PostCreation", "ContributorRequestButton"], {
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/FocusTrap/index.ts"),
				a = n("./src/lib/portal/index.tsx"),
				c = n("./src/reddit/actions/shortcuts/utils.ts"),
				d = n("./src/reddit/constants/shortcuts.ts"),
				l = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				u = n("./src/higherOrderComponents/asModal/index.m.less"),
				m = n.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ({
				className: e,
				isVisible: t,
				...n
			}) => r.a.createElement("div", p({
				className: Object(s.a)(m.a.overlay, e, {
					[m.a.mIsVisible]: t
				})
			}, n));

			function h(e) {
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
						}), Object(l.b)(), Object(c.d)(), this.focusTrap && this.focusTrap.deactivate()
					}
					render() {
						const {
							props: t
						} = this, {
							className: n,
							ignoreDefaultFocus: o,
							onOverlayClick: i,
							overlayClassName: c,
							overlayCustomStyles: l,
							withOverlay: u,
							...p
						} = t, h = p;
						return r.a.createElement(a.a, {
							container: document.getElementById(d.b)
						}, r.a.createElement(b, {
							className: c,
							isVisible: u,
							onClick: this.onOverlayClick,
							style: l
						}, r.a.createElement("div", {
							"aria-modal": !0,
							className: Object(s.a)(m.a.modal, n),
							onClick: this.onClick,
							ref: this.getRef,
							role: "dialog",
							tabIndex: -1
						}, r.a.createElement(e, h))))
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
				const [t, n] = Object(r.useState)(null), [i, c] = Object(r.useState)(null), [d, l] = Object(r.useState)(null), [u, m] = Object(r.useState)(!1), p = Object(r.useCallback)(async () => m(!0), []), b = Object(r.useCallback)(() => m(!1), []), h = Object(r.useCallback)(() => m(!u), [u]), f = Object(r.useMemo)(() => {
					const t = a(e);
					return d ? Object(o.updateIn)(t, ["modifiers"], e => Object(o.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: g,
					styles: C,
					update: _
				} = Object(s.a)(t, i, f);
				return Object(r.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: C.arrow,
						...g.arrow
					},
					hide: b,
					popperProps: {
						ref: c,
						style: C.popper,
						...g.popper
					},
					show: p,
					target: {
						element: t,
						ref: n
					},
					toggle: h,
					visible: u,
					update: _
				}), [l, g, c, b, p, C, t, n, h, u, _])
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
			const s = [r.mc, r.ob, r.A, r.P, r.jb, r.Pb],
				i = {
					[r.Pb]: e => o.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [o.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[r.jb]: e => o.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [o.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[r.P]: e => o.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [o.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[r.A]: e => o.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [o.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[r.ob]: e => o.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [o.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[r.mc]: e => o.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [o.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				a = {
					[r.Pb]: e => o.fbt._("{amount}s", [o.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[r.jb]: e => o.fbt._("{amount}m", [o.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[r.P]: e => o.fbt._("{amount}h", [o.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[r.A]: e => o.fbt._("{amount}d", [o.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[r.ob]: e => o.fbt._("{amount}m", [o.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.mc]: e => o.fbt._("{amount}y", [o.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[r.ob]: e => o.fbt._("{amount}m", [o.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.mc]: e => o.fbt._("{amount}y", [o.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, n = !1) {
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[r.mc]: "",
						[r.ob]: "",
						[r.A]: "",
						[r.P]: "",
						[r.jb]: "",
						[r.Pb]: ""
					};
				let u = d - c;
				if (u <= 0) return o.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const o of s) {
					const e = Math.floor(u / o);
					e && (l[o] = (t ? a : i)[o](e).toString()), u -= e * o
				}
				const m = s.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || n ? m : o.fbt._("{amount of time left} left", [o.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/comment/authoring.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return ee
			})), n.d(t, "o", (function() {
				return ne
			})), n.d(t, "m", (function() {
				return oe
			})), n.d(t, "q", (function() {
				return ie
			})), n.d(t, "t", (function() {
				return ae
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
				return _e
			})), n.d(t, "j", (function() {
				return xe
			})), n.d(t, "d", (function() {
				return ve
			})), n.d(t, "c", (function() {
				return Se
			})), n.d(t, "i", (function() {
				return je
			})), n.d(t, "h", (function() {
				return Ie
			})), n.d(t, "k", (function() {
				return De
			})), n.d(t, "r", (function() {
				return Ne
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
				m = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				p = n("./src/reddit/actions/shortcuts/utils.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				f = n("./src/reddit/constants/adEvents.ts"),
				g = n("./src/reddit/constants/localStorage.ts"),
				C = n("./src/redditGQL/operations/CommentToxicity.json"),
				_ = n("./src/lib/makeApiRequest/index.ts"),
				x = n("./src/lib/makeGqlRequest/index.ts"),
				E = n("./src/lib/omitHeaders/index.ts"),
				v = n("./src/reddit/constants/headers.ts"),
				O = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				y = n("./src/reddit/helpers/genericServerError/index.ts"),
				k = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				S = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				j = n("./src/reddit/models/PostCreationForm/index.ts"),
				P = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				T = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const w = (e, t, n, o) => {
					let r, s;
					if (o === j.i.MARKDOWN) r = n.text, s = null;
					else {
						r = null;
						let e = null;
						n.rteState && (e = h.a.toRichTextJSON(n.rteState).document), s = JSON.stringify({
							document: e
						})
					}
					return Object(x.a)(e, {
						...C,
						variables: {
							subredditName: t,
							markdown: r,
							richText: s
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				I = async (e, t, n, o, s) => {
					const i = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (s === j.i.MARKDOWN) i.text = n.text;
					else {
						i.text = null;
						let e = null;
						n.rteState && (e = h.a.toRichTextJSON(n.rteState).document), i.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(_.a)(Object(E.a)(e, [v.a]), {
						method: r.ib.POST,
						endpoint: Object(O.a)(Object(P.a)(Object(T.a)(`${e.apiUrl}/api/comment.json`))),
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
						error: e.error || Object(y.a)()
					})
				};
			var D = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var N = n("./src/reddit/endpoints/post/index.tsx"),
				M = n("./src/reddit/endpoints/post/convert.ts"),
				R = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				L = n("./src/reddit/featureFlags/index.ts"),
				A = n("./src/reddit/helpers/correlationIdTracker.ts"),
				F = n("./src/reddit/helpers/dom/index.ts"),
				B = n("./src/reddit/helpers/localStorage/index.ts"),
				U = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				W = n("./src/reddit/models/Comment/index.ts"),
				G = n("./src/reddit/models/PostDraft/index.ts"),
				V = n("./src/reddit/models/RichTextJson/index.ts"),
				H = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				K = n("./src/reddit/models/Toast/index.ts"),
				q = n("./src/reddit/selectors/comments.ts"),
				z = n("./src/reddit/selectors/commentSelector.ts"),
				Q = n("./src/reddit/selectors/platform.ts"),
				J = n("./src/reddit/selectors/posts.ts"),
				Y = n("./src/reddit/selectors/user.ts"),
				Z = n("./src/reddit/actions/comment/index.ts"),
				X = n("./src/reddit/actions/comment/constants.ts");
			const $ = Object(s.a)(X.k),
				ee = ({
					hasFocus: e,
					draftKey: t
				}) => async (n, o) => {
					const r = o();
					if (!!r.features.comments.drafts[t])
						if (Object(Y.M)(r) && e) {
							const o = $({
								hasFocus: e,
								draftKey: t
							});
							n(Object(a.f)(o))
						} else n($({
							hasFocus: e,
							draftKey: t
						}))
				}, te = Object(s.a)(X.H), ne = Object(s.a)(X.J), oe = Object(s.a)(X.I), re = Object(s.a)(X.G), se = async (e, t, n, o) => {
					const r = o.ok && o.body,
						s = r && r.comment && r.comment.id;
					await U.g(e, n, t, s)
				}, ie = "Toxicity_Warning__Modal", ae = (e, t, n, o, r, s) => async (i, a, {
					gqlContext: c
				}) => {
					const l = a(),
						u = Object(Q.e)(l);
					let m = "";
					if (u && (m = u.name), L.d.enableToxicityWarning(l)) {
						if (!(await w(c(), m, o, r))) return void i(Object(d.i)(ie))
					}
					i(de(e, t, n, o, r, s))
				}, ce = e => e.rteState ? h.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, de = (e, t, n, s, i, a, c) => async (u, h, {
					apiContext: g
				}) => {
					u(Object(d.g)(ie));
					const C = h(),
						_ = C.features.comments.submit.pending[n];
					if (!C.user.account || _) return;
					u(te({
						draftKey: n,
						draft: s
					}));
					const x = C.user.account.displayText,
						E = s.commentMode;
					let v;
					if (c ? (v = await Object(R.i)(g(), e, s, x), u(Object(m.a)({
							streamId: e,
							level: v.body.automuteLevel
						}))) : v = await I(g(), e, s, x, E), v.ok) {
						let o;
						o = v.body, u(ne({
							...o,
							headCommentId: Object(q.w)(C, {
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
						v.error && v.error.type === r.Hb && U.i(C, ce(s), e);
						const t = v.error && v.error.fields && v.error.fields[0] ? v.error.fields[0].msg : o.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u(re({
							draftKey: n,
							error: v.error
						})), u(Object(b.f)({
							duration: b.a,
							kind: K.b.Error,
							text: t
						}))
					}
					se(h(), t, i, v).then(() => v.ok && i === j.i.RICH_TEXT ? Object(A.b)(A.a.CommentComposer) : void 0), a || Object(p.d)()
				}, le = e => async (t, n, {
					gqlContext: o
				}) => {
					const {
						parentCommentId: r,
						commentsPageKey: s,
						parentCommentDepth: i,
						draftKey: a,
						formData: c,
						editorMode: l
					} = e, u = n(), m = Object(Q.e)(u);
					let p = "";
					if (m && (p = m.name), L.d.enableToxicityWarning(u)) {
						if (!(await w(o(), p, c, l))) return void t(Object(d.i)(ie))
					}
					t(ue({
						commentsPageKey: s,
						draftKey: a,
						parentCommentDepth: i,
						parentCommentId: r,
						formData: c,
						editorMode: l
					}))
				}, ue = e => async (t, n, {
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
					t(Object(d.g)(ie));
					const m = n(),
						b = m.features.comments.submit.pending[c];
					if (!m.user.account || b) return;
					t(te({
						draftKey: c,
						draft: l
					}));
					const h = m.user.account.displayText,
						f = l.commentMode,
						g = await I(o(), s, l, h, f);
					if (g.ok) t(oe({
						...g.body,
						parentCommentId: s,
						commentsPageKey: i,
						draftKey: c,
						depth: a + 1
					}));
					else {
						if (g.error && g.error.type === r.Hb) {
							const e = Object(z.b)(m, {
								commentId: s
							});
							if (!e) return;
							U.i(m, ce(l), e.postId, s)
						}
						t(re({
							draftKey: c,
							error: g.error
						}))
					}
					se(n(), i, u, g), Object(p.d)()
				}, me = Object(s.a)(X.q), pe = Object(s.a)(X.p), be = Object(s.a)(X.l), he = (Object(s.a)(X.g), Object(s.a)(X.m)), fe = (Object(s.a)(X.t), (e, t, n) => async (r, s, {
					apiContext: i
				}) => {
					const a = e === j.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(V.G)(t)) r(he({
						editorMode: e,
						draftKey: n,
						content: a ? V.i : ""
					})), r(Object(u.c)(e));
					else {
						r(Object(u.b)(n));
						const s = await Object(M.a)(i(), e, a ? t : JSON.stringify(t));
						if (s.ok) {
							const t = s.body.output;
							r(Object(u.a)(n)), r(he({
								editorMode: e,
								draftKey: n,
								content: t
							})), r(Object(u.c)(e))
						} else r(Object(u.a)(n)), r(Object(b.f)({
							duration: b.a,
							kind: K.b.Error,
							text: o.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), ge = ({
					commentsPageKey: e,
					parentCommentId: t,
					singleOpen: n
				}) => async (o, r) => {
					const s = r(),
						l = Object(i.a)(G.c.replyToComment, t);
					if (!Object(Y.K)(r())) return o(Object(c.k)()), void o(Object(d.k)({
						actionSource: d.a.Reply,
						redirectUrl: Object(q.m)(r(), {
							commentId: t
						})
					}));
					const u = s.features.comments.replyFormOpen[e],
						m = u && u[t];
					if ((m || u && n) && (Object.keys(u).forEach(t => u[t] && o(pe({
							parentCommentId: t,
							commentsPageKey: e
						}))), m)) return;
					let p = "",
						b = null;
					const h = s.user.prefs.commentMode,
						f = Object(F.d)();
					if (f) {
						const e = f.filter(e => !!e && 10 !== e.charCodeAt(0));
						if (h === j.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
						else {
							const t = e.map(e => H.s(e, null)).map(e => H.l([e])),
								n = H.s("", null),
								o = H.l([n]);
							b = {
								document: [H.c(t), o]
							}
						}
					}
					const g = s.features.comments.drafts[l];
					let C;
					if (C = f ? {
							commentMode: h,
							draftType: G.c.replyToComment,
							rtJson: b,
							text: `${p}\n`
						} : g || {
							commentMode: h,
							draftType: G.c.replyToComment,
							rtJson: b,
							text: ""
						}, Object(Y.M)(s)) {
						const n = me({
							parentCommentId: t,
							commentsPageKey: e,
							draftKey: l,
							formData: C
						});
						o(Object(a.f)(n))
					} else o(me({
						parentCommentId: t,
						commentsPageKey: e,
						draftKey: l,
						formData: C
					}))
				}, Ce = e => async t => {
					t(Object(Z.p)(e)), t(ve(e))
				}, _e = ({
					parentCommentId: e,
					commentsPageKey: t
				}) => async n => {
					n(pe({
						parentCommentId: e,
						commentsPageKey: t
					})), n(ge({
						parentCommentId: e,
						commentsPageKey: t
					})), n(Object(Z.p)({
						commentId: e,
						commentsPageKey: t
					}))
				}, xe = (e, t) => n => n(be({
					draftKey: e,
					formData: t
				})), Ee = Object(s.a)(X.s), ve = ({
					commentId: e,
					commentMode: t,
					commentsPageKey: n,
					draftKey: o,
					text: r
				}) => async (s, i) => {
					const a = i();
					a.user.account && (U.d(a), s(Ee({
						commentId: e,
						commentsPageKey: n,
						draftKey: o,
						formData: {
							text: r,
							commentMode: t,
							rteState: null,
							draftType: G.c.edit,
							hasFocus: !0
						}
					})))
				}, Oe = Object(s.a)(X.C), ye = Object(s.a)(X.B), ke = Object(s.a)(X.D), Se = Object(s.a)(X.h), je = ({
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
					n(Oe({
						draftKey: o
					})), U.e(c);
					const d = c.user.account.displayText || "",
						l = s.commentMode,
						u = await (async (e, t, n, o, s, i) => {
							const a = {
								api_type: "json",
								return_rtjson: !0,
								thing_id: t
							};
							if (i === j.i.MARKDOWN) a.text = o.text;
							else {
								a.text = null;
								let e = null;
								o.rteState && (e = h.a.toRichTextJSON(o.rteState).document), a.richtext_json = JSON.stringify({
									document: e
								})
							}
							return Object(_.a)(Object(E.a)(e, [v.a]), {
								endpoint: Object(O.a)(Object(T.a)(Object(P.a)(`${e.apiUrl}/api/editusertext`))),
								method: r.ib.POST,
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
								error: e.error || Object(y.a)()
							})
						})(a(), e, 0, s, d, l);
					if (u.ok) {
						const r = u.body;
						n(ke({
							commentId: e,
							commentsPageKey: t,
							draftKey: o
						})), n(Object(Z.i)({
							[e]: {
								...r.comment
							}
						}))
					} else n(ye({
						draftKey: o,
						error: u.error
					}))
				}, Pe = Object(s.a)(X.z), Te = Object(s.a)(X.y), we = Object(s.a)(X.A), Ie = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const i = o();
					n(Pe({
						id: e
					})), U.b(e, i);
					const a = await ((e, t) => Object(_.a)(Object(E.a)(e, [v.a]), {
						endpoint: Object(O.a)(`${e.apiUrl}/api/del`),
						method: r.ib.POST,
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
						error: e.error || Object(y.a)()
					}))(s(), e);
					a.ok ? n(we({
						id: e,
						postId: t
					})) : n(Te({
						id: e,
						error: a.error
					}))
				}, De = e => async (t, n, {
					apiContext: o
				}) => {
					const r = !n().features.comments.models[e].sendReplies;
					t(Object(Z.i)({
						[e]: {
							sendReplies: r
						}
					})), (await Object(N.q)(o(), e, r)).ok || t(Object(Z.i)({
						[e]: {
							sendReplies: !r
						}
					}))
				}, Ne = (e, t) => async (n, r, {
					gqlContext: s
				}) => {
					var i, a, c, d, l, u;
					n(Object(Z.c)());
					const m = e => Object(b.f)(Object(b.e)(e, K.b.Error));
					if (((null === (a = null === (i = r().pages) || void 0 === i ? void 0 : i.comments) || void 0 === a ? void 0 : a.followed) || []).length === g.a) n(m(o.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const i = t === W.a.FOLLOWED,
							a = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(Z.n)(a)), (await ((e, t) => Object(x.a)(e, {
								...D,
								variables: {
									input: t
								}
							}))(s(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(B.tb)(null !== (l = null === (d = null === (c = r().pages) || void 0 === c ? void 0 : c.comments) || void 0 === d ? void 0 : d.followed) && void 0 !== l ? l : [], null === (u = r().user.account) || void 0 === u ? void 0 : u.id);
							const e = i ? o.fbt._("Followed! You’ll receive updates when there’s new activity", null, {
								hk: "1Dp5UH"
							}) : o.fbt._("Unfollowed, You’ll no longer recieve updates on this comment", null, {
								hk: "2fJsVC"
							});
							n(Object(b.f)({
								kind: K.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(Z.n)(a)), n(m(o.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				}
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return T
			})), n.d(t, "m", (function() {
				return w
			})), n.d(t, "e", (function() {
				return N
			})), n.d(t, "h", (function() {
				return M
			})), n.d(t, "l", (function() {
				return F
			})), n.d(t, "q", (function() {
				return B
			})), n.d(t, "j", (function() {
				return U
			})), n.d(t, "g", (function() {
				return W
			})), n.d(t, "f", (function() {
				return G
			})), n.d(t, "o", (function() {
				return K
			})), n.d(t, "p", (function() {
				return q
			})), n.d(t, "d", (function() {
				return z
			})), n.d(t, "a", (function() {
				return J
			})), n.d(t, "b", (function() {
				return Y
			})), n.d(t, "n", (function() {
				return Z
			})), n.d(t, "c", (function() {
				return X
			})), n.d(t, "k", (function() {
				return $
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/telemetry/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/economics/helpers/async.ts"),
				c = n("./src/lib/loadableAction/index.ts");
			const d = Object(c.a)(() => n.e("AchievementsActions").then(n.bind(null, "./src/reddit/actions/economics/powerups/flairs/index.ts")).then(e => e.getSubredditUserCommentsPowerupsInfoFromCommentCollection));
			var l = n("./src/reddit/actions/login.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/shortcuts/utils.ts"),
				p = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/actions/vote.ts"),
				h = n("./src/reddit/endpoints/comment/index.tsx"),
				f = n("./src/reddit/helpers/commentList/index.ts"),
				g = n("./src/reddit/helpers/trackers/comment.ts"),
				C = n("./src/reddit/models/Comment/index.ts"),
				_ = n("./src/reddit/models/Post/index.ts"),
				x = n("./src/reddit/models/Toast/index.ts"),
				E = n("./src/reddit/models/Vote/index.ts"),
				v = n("./src/reddit/selectors/comments.ts"),
				O = n("./src/reddit/selectors/commentSelector.ts"),
				y = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				k = n("./src/reddit/selectors/moderatingComments.ts"),
				S = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/actions/comment/constants.ts");
			const P = {},
				T = Object(i.a)(j.o),
				w = e => async (t, n, {
					apiContext: o
				}) => {
					if (!Object(S.K)(n())) return t(Object(l.k)()), void t(Object(u.k)({
						actionSource: u.a.Save,
						redirectUrl: Object(v.m)(n(), {
							commentId: e
						})
					}));
					const s = n().features.comments.models[e];
					if (!s) return;
					const i = s.isSaved ? h.k : h.g;
					if (t(T({
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
						t(Object(p.f)({
							text: n,
							kind: x.b.Undo,
							buttonText: o,
							buttonAction: w(e)
						}))
					} else t(T({
						[e]: {
							isSaved: s.isSaved
						}
					}))
				}, I = e => `viewing-comment-${e}`, D = o.a.telemetry.commentConsumedThreshold, N = e => async (t, n) => {
					const r = n();
					if (!Object(O.b)(r, {
							commentId: e
						}) || Math.random() > o.a.telemetry.commentSampleRate) return;
					g.g({
						state: r,
						commentId: e
					}), s.c.start(I(e));
					const i = setTimeout(() => g.a({
						state: r,
						commentId: e
					}), D);
					P[e] = i
				}, M = (e, t) => async (n, o) => {
					const r = o(),
						i = I(e);
					if (Object(O.b)(r, {
							commentId: e
						}) && s.c.has(i)) {
						const n = s.c.end(i);
						!t && n < D && (clearTimeout(P[e]), delete P[e])
					}
				}, R = Object(i.a)(j.x), L = Object(i.a)(j.w), A = Object(i.a)(j.v), F = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const s = o(),
						i = s.moreComments.models[t],
						c = s.platform.currentPage,
						l = c && c.routeMatch,
						u = l && l.match,
						{
							partialPostId: m
						} = u ? u.params : null;
					if (!m) return;
					const p = Object(_.s)(m);
					n(R({
						moreCommentsId: i.id
					}));
					const b = await Object(h.e)(r(), p, {
						token: i.token
					}, Object(y.a)(s));
					if (b.ok) {
						const t = b.body,
							o = Object(f.a)(t, p, s);
						n(L({
							key: e,
							moreCommentsItem: i,
							shouldCollapse: o,
							...t
						}));
						const r = s.posts.models[p];
						let c;
						r && "subreddit" === r.belongsTo.type && t.comments && (c = r.belongsTo.id, await n(Object(a.a)({
							commentIds: Object.keys(b.body.comments),
							postIds: [r.id],
							skip: ["communityDetails", "subscription"],
							subredditId: c
						})));
						const l = b.body.comments;
						await n(d(c, l))
					} else n(A({
						moreCommentsItem: i,
						...b.error
					}))
				}, B = Object(b.a)(f.b, E.a.upvoted), U = Object(b.a)(f.b, E.a.downvoted), W = Object(i.a)(j.j), G = Object(i.a)(j.i), V = Object(i.a)(j.e), H = Object(i.a)(j.f), K = (Object(i.a)(j.c), Object(i.a)(j.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: n
				}) => async (o, r) => {
					const s = r(),
						i = Object(C.i)(e),
						a = Object(v.n)(s, {
							commentLink: i,
							commentsPageKey: t
						}),
						c = Object(k.b)(s, {
							commentId: e,
							commentsPageKey: t
						}),
						d = a.depth;
					o(V({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: c
					})), c || 0 !== d || n(e, !0), Object(m.d)()
				}), q = ({
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
					r(V({
						commentId: a,
						commentsPageKey: t,
						isCollapsed: c
					})), 0 === n && o(a, !0), Object(m.d)()
				}, Q = Object(i.a)(j.r), J = e => t => t(Q({
					draftKey: e
				})), Y = Object(i.a)(j.a), Z = Object(i.a)(j.E), X = Object(i.a)(j.b), $ = Object(i.a)(j.u)
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
				return m
			})), n.d(t, "a", (function() {
				return p
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
				m = e => async (t, n, {
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
				}, p = () => async (e, t) => {
					const n = t(),
						s = n.economics.me.data;
					if (!s) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(l());
						const t = `https://${s.pointsDocsBaseUrl}v1.json?web`,
							n = await Object(r.b)({
								endpoint: t,
								method: o.ib.GET
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
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return P
			})), n.d(t, "k", (function() {
				return T
			})), n.d(t, "o", (function() {
				return w
			})), n.d(t, "n", (function() {
				return I
			})), n.d(t, "l", (function() {
				return R
			})), n.d(t, "b", (function() {
				return L
			})), n.d(t, "r", (function() {
				return A
			})), n.d(t, "s", (function() {
				return F
			})), n.d(t, "g", (function() {
				return B
			})), n.d(t, "a", (function() {
				return U
			})), n.d(t, "t", (function() {
				return G
			})), n.d(t, "m", (function() {
				return V
			})), n.d(t, "i", (function() {
				return H
			})), n.d(t, "j", (function() {
				return K
			})), n.d(t, "p", (function() {
				return q
			})), n.d(t, "q", (function() {
				return z
			})), n.d(t, "f", (function() {
				return Q
			})), n.d(t, "c", (function() {
				return J
			})), n.d(t, "d", (function() {
				return Y
			})), n.d(t, "h", (function() {
				return Z
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/uuid/index.js"),
				s = n.n(r),
				i = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/predictions/index.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/lib/makeActionCreator/index.ts"),
				u = n("./src/reddit/endpoints/economics/predictions.ts"),
				m = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				p = n("./src/reddit/helpers/graphql/normalizePredictionTournamentFromGql/index.ts"),
				b = n("./src/redditGQL/types.ts"),
				h = n("./src/reddit/actions/login.ts"),
				f = n("./src/reddit/actions/modal.ts"),
				g = n("./src/reddit/constants/modals.ts"),
				C = n("./src/reddit/selectors/experiments/econ/index.ts"),
				_ = n("./src/reddit/selectors/subreddit.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/selectors/features/predictions/creation/index.ts"),
				v = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				O = n("./src/reddit/actions/economics/predictions/constants.ts");
			Object(i.a)({
				features: {
					predictions: a.a
				}
			});
			const y = Object(l.a)(O.e),
				k = Object(l.a)(O.i),
				S = Object(l.a)(O.l),
				j = Object(l.a)(O.h),
				P = Object(l.a)(O.b),
				T = (e, t, n, o) => async (r, s, {
					gqlContext: i
				}) => {
					const a = Object(x.K)(s()),
						c = await Object(u.j)(i(), {
							subredditId: e,
							period: t,
							top: n,
							includeCurrentRank: a,
							tournamentId: o
						});
					if (c.error || !c.ok) throw new Error("Failed to fetch subreddit top predictors");
					const {
						subredditInfoById: d
					} = c.body.data;
					if (!d || !d.predictionWinners) throw new Error("Subreddit has no prediction winners");
					const {
						predictionWinners: l
					} = d, m = {
						subredditId: e,
						...l
					};
					return r(y(m)), m
				}, w = ({
					coinPackageId: e,
					optionId: t,
					postId: n,
					price: o
				}) => async (r, s, {
					gqlContext: i
				}) => {
					const a = await Object(u.o)(i(), {
						coinPackageId: e,
						optionId: t,
						postId: n,
						price: o
					});
					return r(k({
						pollId: n,
						prediction: a,
						price: o
					})), a
				}, I = ({
					optionId: e,
					postId: t
				}) => async (n, o, {
					gqlContext: r
				}) => {
					const s = await Object(u.m)(r(), {
							optionId: e,
							postId: t
						}),
						{
							resolvePrediction: i
						} = s.body.data;
					if (!(null == i ? void 0 : i.poll)) throw new Error("Failed to resolve prediction");
					return n(j({
						pollId: t,
						prediction: i.poll
					})), i.poll
				}, D = Object(l.a)(O.c), N = Object(l.a)(O.d), M = Object(l.a)(O.g), R = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = n(),
						s = Object(_.B)(r, e),
						i = Object(v.j)(r, {
							subredditId: s
						}),
						a = Object(C.n)(r);
					if (i) return Object(v.f)(r, {
						subredditId: s
					});
					t(D({
						subredditId: s
					}));
					const c = await Object(u.k)(o(), {
							subredditName: e,
							isLatestOnly: !0,
							isIncludingPredictions: !0,
							isIncludingParticipants: !0,
							isIncludingCancelledPredictions: a
						}),
						d = {};
					c.forEach(e => {
						var t;
						(null === (t = e.predictionPosts) || void 0 === t ? void 0 : t.length) && e.predictionPosts.forEach(e => {
							e && (d[e.id] = Object(m.e)(e))
						})
					});
					const l = c.map(e => Object(p.a)(e));
					return t(N({
						subredditId: s,
						tournaments: l
					})), t(M({
						posts: d,
						meta: r.meta
					})), l
				}, L = Object(l.a)(O.a), A = Object(l.a)(O.j), F = Object(l.a)(O.k), B = ({
					subredditId: e
				}) => async (t, n, {
					gqlContext: o
				}) => {
					const r = n(),
						s = Object(E.b)(r),
						i = Object(C.a)(r);
					if (!s) throw new Error("Failed to create tournament, no prediction drafts attached");
					const a = await Object(u.f)(o(), {
							tournamentId: null,
							name: "Predictions Tournament",
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: s,
							currency: i ? b.g.Coins : b.g.Tokens
						}),
						{
							createPredictionTournament: c
						} = a.body.data;
					if (!(null == c ? void 0 : c.tournament)) throw new Error("Failed to resolve prediction");
					const {
						tournament: d
					} = c;
					return t(N({
						subredditId: e,
						tournaments: [d]
					})), d
				}, U = (e, t) => async (n, o, {
					gqlContext: r
				}) => {
					var i;
					const a = Object(E.b)(o());
					if (!a) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const c = await Object(u.b)(r(), {
							tournamentId: e,
							isStartImmediately: !0,
							iKey: `add-dfts-${s.a.v4()}`,
							subredditId: t,
							predictionDrafts: a
						}),
						{
							addPredictionDrafts: d
						} = c.body.data;
					if (null === (i = d.errors) || void 0 === i ? void 0 : i.length) throw new Error(d.errors[0].message);
					if (!(null == d ? void 0 : d.tournament)) throw new Error("Failed to create prediction");
					return d.tournament
				}, W = Object(l.a)(O.m), G = (e, t, n) => async (t, o, {
					gqlContext: r
				}) => {
					const s = await Object(u.n)(r(), {
							tournamentId: e,
							name: n
						}),
						{
							updatePredictionTournament: i
						} = s.body.data;
					if (!i.tournament) throw new Error("Failed to update prediction name");
					return t(W(i.tournament)), i.tournament
				}, V = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = await Object(u.g)(o(), {
							tournamentId: e
						}),
						{
							endPredictionTournament: s
						} = r.body.data;
					if (!s.tournament) throw new Error("Failed to update prediction name");
					return t(W(s.tournament)), s.tournament
				}, H = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = await Object(u.h)(o(), {
						postId: e
					});
					if (!r.ok || r.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: s
					} = r.body.data;
					if (!s.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return s.predictionChipPackages
				}, K = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = await Object(u.i)(o(), {
						tournamentId: e
					});
					if (!r.ok || r.error) throw new Error("Failed to fetch token balance");
					const {
						identity: s
					} = r.body.data;
					if (!s.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return s.predictionTokens
				}, q = ({
					coinPackageId: e,
					selectedOptionId: t,
					price: n,
					pollId: o,
					tournamentId: r,
					tournamentPostId: s
				}) => async i => {
					const a = await i(w({
						coinPackageId: e,
						optionId: t,
						postId: o,
						price: n
					}));
					return i(S({
						predictionId: o,
						selectedOptionId: t,
						tournamentId: r,
						tournamentPostId: s
					})), a
				}, z = e => async (t, n) => {
					const o = n();
					Object(x.K)(o) ? await t(Object(f.h)(g.a.ECON_PREDICTIONS_PREMIUM_UPSELL, {
						feature: e
					})) : await t(Object(h.i)())
				}, Q = () => Object(f.g)(g.a.ECON_PREDICTIONS_PREMIUM_UPSELL), J = e => async (t, n, {
					gqlContext: r
				}) => {
					try {
						const n = await Object(u.c)(r(), {
							postId: e
						});
						t(P({
							postId: e,
							prediction: n
						}));
						const s = Object(c.e)(o.fbt._("Prediction has been cancelled", null, {
							hk: "3Bh9Fw"
						}), d.b.SuccessMod);
						t(Object(c.f)(s))
					} catch {
						const e = Object(c.e)(o.fbt._("Unable to cancel prediction", null, {
							hk: "2wkeKy"
						}), d.b.Error);
						t(Object(c.f)(e))
					}
				};

			function Y(e, t) {
				return async (n, o, {
					gqlContext: r
				}) => {
					const s = await Object(u.d)(r(), {
						postId: e,
						...t
					});
					return n(P({
						postId: e,
						prediction: s
					})), s
				}
			}
			const Z = e => async (t, n, {
				gqlContext: o
			}) => Object(u.l)(o(), {
				subredditId: e
			})
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
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "h", (function() {
				return b
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
				m = Object(o.a)(r("removeCommunityAward")),
				p = Object(o.a)(r("disableAwardinCommunity")),
				b = Object(o.a)(r("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return f
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "f", (function() {
				return y
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
				m = n("./src/reddit/selectors/posts.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/telemetry/index.ts"),
				h = n("./src/reddit/actions/gold/constants.ts");
			const f = Object(o.a)(h.L),
				g = Object(o.a)(h.f),
				C = () => async (e, t) => {
					const o = t();
					e(g()), Object(c.b)(c.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: r
					} = await n.e("givePremiumTrackers").then(n.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(b.a)(r()(o))
				}, _ = Object(o.a)(h.K), x = ({
					awardId: e,
					correlationId: t,
					thingId: n
				}) => async (o, r) => {
					const a = r(),
						c = e ? Object(u.a)(a, e) : void 0;
					o(_({
						award: c && c.isEnabled ? c : void 0,
						thingId: n,
						correlationId: t
					})), o(Object(l.h)(i.a.GOLD_GILD_MODAL));
					const b = Object(p.G)(a, {
						thingId: n
					});
					let h = null;
					if (b) h = b.id;
					else if (Object(s.a)(n)) {
						const e = Object(m.H)(a, {
							postId: n
						});
						e && (h = e.belongsTo.id)
					}
					h && Object(d.a)(h, n)
				}, E = Object(o.a)(h.e), v = Object(o.a)(h.J), O = () => async (e, t) => {
					const o = t(),
						s = Object(a.d)(o);
					if (Object(a.g)(o)) {
						const e = "close.gild";
						Object(r.a)({
							type: e
						})
					}
					e(E()), e(Object(l.g)(i.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(b.a)(d(s)(o)), Object(c.b)(c.a.GildingFlow)
				}, y = () => async () => {
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
				return m
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "m", (function() {
				return h
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "p", (function() {
				return C
			})), n.d(t, "q", (function() {
				return _
			})), n.d(t, "r", (function() {
				return x
			})), n.d(t, "s", (function() {
				return E
			})), n.d(t, "t", (function() {
				return v
			})), n.d(t, "u", (function() {
				return O
			})), n.d(t, "v", (function() {
				return y
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
				m = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				p = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				b = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				h = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				f = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				g = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				C = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				_ = "GOVERNANCE__TRANSFER_FAILURE",
				x = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				E = "GOVERNANCE__TRANSFER_PENDING",
				v = "GOVERNANCE__TRANSFER_SUCCESS",
				O = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				y = "GOVERNANCE__WALLETS_FETCH_PENDING",
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
				return x
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "f", (function() {
				return P
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "d", (function() {
				return R
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
				m = n("./src/redditGQL/operations/PollVote.json"),
				p = n("./src/reddit/endpoints/governance/requester.ts");
			var b = n("./src/reddit/endpoints/governance/wallet.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/models/Vote/index.ts"),
				g = n("./src/reddit/selectors/crypto/points.ts"),
				C = n("./src/reddit/actions/governance/constants.ts"),
				_ = n("./src/reddit/actions/governance/errorToast.ts");
			const x = Object(r.a)(C.b),
				E = Object(r.a)(C.c),
				v = Object(r.a)(C.e),
				O = (Object(r.a)(C.f), Object(r.a)(C.g), Object(r.a)(C.h)),
				y = Object(r.a)(C.i),
				k = Object(r.a)(C.j),
				S = Object(r.a)(C.k),
				j = Object(r.a)(C.q),
				P = Object(r.a)(C.r),
				T = Object(r.a)(C.s),
				w = Object(r.a)(C.t),
				I = Object(r.a)(C.u),
				D = Object(r.a)(C.v),
				N = Object(r.a)(C.w),
				M = Object(r.a)(C.x),
				R = (e, t) => async (n, o, {
					apiContext: r,
					gqlContext: s
				}) => {
					let i, c = o().polls.models[e];
					if (n(k({
							pollId: e
						})), (i = c.type === u.a.GA ? await ((e, t, n) => Object(l.a)(e, {
								...m,
								variables: {
									input: {
										postId: t,
										optionId: n
									}
								}
							}))(s(), e, t) : await
							function(e, t, n, o) {
								return Object(p.a)(e, {
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
							t && t.voteState === f.a.notVoted && n(Object(a.db)(e))
						}
					} else n(y({
						pollId: e,
						error: i.error || i.errors[0].message
					})), Object(_.a)(n, i.error || i.errors[0].messsage)
				}, L = (e, t) => async (n, r, {
					apiContext: a
				}) => {
					var l;
					n(T());
					const u = r().transfers.communityPoints.contentId || void 0,
						m = await
					function(e, t) {
						return Object(p.a)(e, {
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
					m.ok ? (n(w({
						...m.body,
						subredditId: e.subredditId
					})), n(Object(c.f)({
						kind: h.b.SuccessCommunity,
						text: o.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [o.fbt._param("amount", Object(s.a)(e.amount)), o.fbt._param("tokenName", (null === (l = Object(g.b)(r(), e.subredditId)) || void 0 === l ? void 0 : l.name) || ""), o.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(i.f)())) : (n(j({
						error: m.error
					})), Object(_.a)(n, m.error))
				}, A = e => async (t, n, {
					apiContext: o
				}) => {
					t(D());
					const r = await Object(b.a)(o(), e);
					r.ok ? t(N(r.body)) : t(I({
						error: r.error
					}))
				}
		},
		"./src/reddit/actions/grantUserFlair/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return o
			})), n.d(t, "g", (function() {
				return r
			})), n.d(t, "f", (function() {
				return s
			})), n.d(t, "l", (function() {
				return i
			})), n.d(t, "k", (function() {
				return a
			})), n.d(t, "j", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			}));
			const o = "SUBREDDIT__FLAIRED_USERS_PENDING",
				r = "SUBREDDIT__FLAIRED_USERS_LOADED",
				s = "SUBREDDIT__FLAIRED_USERS_FAILED",
				i = "SUBREDDIT__FLAIRED_USERS_SEARCH_PENDING",
				a = "SUBREDDIT__FLAIRED_USERS_SEARCH_LOADED",
				c = "SUBREDDIT__FLAIRED_USERS_SEARCH_FAILED",
				d = "SUBREDDIT__FLAIRED_USERS_OWNFLAIR_CHANGED",
				l = "SUBREDDIT__FLAIRED_USERS_AUTHORFLAIR_ADDED",
				u = "SUBREDDIT__FLAIRED_USERS_AUTHORFLAIR_CHANGED",
				m = "SUBREDDIT__FLAIRED_USERS_DELETE_PENDING",
				p = "SUBREDDIT__FLAIRED_USERS_DELETE_COMPLETED",
				b = "SUBREDDIT__FLAIRED_USERS_DELETE_FAILED"
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
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "m", (function() {
				return h
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "p", (function() {
				return x
			})), n.d(t, "q", (function() {
				return E
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
				m = "UPDATE_COLLECTION_SUCCESS",
				p = "UPDATE_COLLECTION_FAILED",
				b = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				h = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				f = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				g = "REORDER_COLLECTION_PENDING",
				C = "REORDER_COLLECTION_SUCCESS",
				_ = "REORDER_COLLECTION_FAILED",
				x = "UPDATE_COLLECTION_LAYOUT_PENDING",
				E = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				v = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postCollection/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return N
			})), n.d(t, "e", (function() {
				return R
			})), n.d(t, "g", (function() {
				return A
			})), n.d(t, "a", (function() {
				return U
			})), n.d(t, "c", (function() {
				return G
			})), n.d(t, "h", (function() {
				return q
			})), n.d(t, "f", (function() {
				return Y
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
				m = n("./src/lib/omitHeaders/index.ts"),
				p = n("./src/reddit/constants/headers.ts");
			var b = (e, t, n) => Object(u.a)(Object(m.a)(e, [p.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/add_post_to_collection.json`,
				method: l.ib.POST,
				data: {
					collection_id: t,
					link_fullname: n
				}
			});
			var h = (e, t, n) => Object(u.a)(Object(m.a)(e, [p.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/create_collection.json`,
				method: l.ib.POST,
				data: {
					title: t,
					sr_fullname: n
				}
			});
			var f = (e, t) => Object(u.a)(Object(m.a)(e, [p.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/delete_collection.json`,
					method: l.ib.POST,
					data: {
						collection_id: t
					}
				}),
				g = n("./src/config.ts");
			var C = (e, t) => Object(u.a)(Object(m.a)(e, [p.a]), {
				endpoint: `${g.a.gatewayUrl}/desktopapi/v1/subreddit_collections/${t}`,
				method: l.ib.GET
			});
			var _ = (e, t, n) => Object(u.a)(Object(m.a)(e, [p.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/remove_post_in_collection.json`,
				method: l.ib.POST,
				data: {
					collection_id: t,
					link_fullname: n
				}
			});
			var x = (e, t, n) => Object(u.a)(Object(m.a)(e, [p.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_title.json`,
				method: l.ib.POST,
				data: {
					collection_id: t,
					title: n
				}
			});
			var E = (e, t, n) => Object(u.a)(Object(m.a)(e, [p.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/reorder_collection.json`,
				method: l.ib.POST,
				data: {
					collection_id: t,
					link_ids: n.join(",")
				}
			});
			var v = (e, t, n) => Object(u.a)(Object(m.a)(e, [p.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_description.json`,
				method: l.ib.POST,
				data: {
					collection_id: t,
					description: n
				}
			});
			var O = (e, t, n) => Object(u.a)(Object(m.a)(e, [p.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/update_collection_display_layout.json`,
					method: l.ib.POST,
					data: {
						collection_id: t,
						display_layout: n
					}
				}),
				y = n("./src/reddit/helpers/overlay/index.ts"),
				k = n("./src/reddit/helpers/path/index.ts"),
				S = n("./src/reddit/models/Toast/index.ts"),
				j = n("./src/reddit/selectors/postCollection.ts"),
				P = n("./src/reddit/selectors/posts.ts"),
				T = n("./src/reddit/selectors/subreddit.ts");
			const w = Object(i.a)(a.c),
				I = Object(i.a)(a.b),
				D = Object(i.a)(a.d),
				N = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					n(w());
					const s = await h(r(), e, t);
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
						n(D({
							collection: t,
							meta: e
						})), i = t
					} else {
						const e = s.error;
						n(I(e))
					}
					return i
				}, M = Object(i.a)(a.f), R = e => async (t, n, {
					apiContext: r
				}) => {
					const s = n().postCollection.subredditToIds || {};
					if (Object.keys(s).length > 0) return;
					const i = await C(r(), e);
					i.ok ? t(M(i.body)) : t(Object(c.f)({
						kind: S.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, L = Object(i.a)(a.g), A = (e, t, n) => async (r, s, {
					apiContext: i
				}) => {
					if ((await _(i(), e, t)).ok) {
						const i = s(),
							a = Object(P.H)(i, {
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
								i = Object(P.H)(t, {
									postId: o
								});
							i && i.permalink && r(Object(y.a)(i.permalink))
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
					if ((await b(s(), e, t)).ok) {
						n(F({
							collectionId: e,
							postId: t
						})), n(B({
							collectionId: e,
							postId: t
						}));
						const r = Object(P.H)(i, {
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
							buttonAction: Object(y.a)(r.permalink)
						}))
					} else n(Object(c.f)({
						kind: S.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, W = Object(i.a)(a.e), G = (e, t) => async (n, i, {
					apiContext: a
				}) => {
					const d = i();
					if ((await f(a(), e)).ok) {
						const {
							url: i
						} = d.platform.currentPage, a = Object(j.q)(d, {
							collectionId: e
						}), l = a && a.title || "", u = a && a.subredditId, m = u ? Object(T.c)(d, u) : "/";
						n(W({
							collectionId: e,
							collection: a
						})), n(t ? Object(r.c)(Object(s.a)(i, ["collection"])) : Object(r.b)(m)), n(Object(c.f)({
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
				}, V = Object(i.a)(a.r), H = Object(i.a)(a.n), K = Object(i.a)(a.s), q = (e, t) => async (n, r, {
					apiContext: s
				}) => {
					n(V());
					const i = await x(s(), e, t);
					let a = !1;
					if (i.ok) n(K({
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
				}, z = Object(i.a)(a.l), Q = Object(i.a)(a.m), J = Object(i.a)(a.k), Y = e => async (t, n) => {
					const o = n().platform.currentPage.locationState;
					t(!(!o || !o[d.a.IsOverlay]) ? Object(y.a)(e.permalink) : Object(r.b)(Object(k.b)(e.permalink)))
				}, Z = Object(i.a)(a.i), X = Object(i.a)(a.j), $ = Object(i.a)(a.h), ee = Object(i.a)(a.p), te = Object(i.a)(a.o), ne = Object(i.a)(a.q), oe = e => async t => {
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
						n(Z());
						const i = await E(s(), e, t);
						let a = !1;
						return i.ok ? (n(X({
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
					})(r, a))), d && n.push(t(q(r, d))), void 0 !== s && n.push(t(((e, t) => async (n, r, {
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
							n(J(e)), n(Object(c.f)({
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
				return p
			})), n.d(t, "a", (function() {
				return b
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
				m = n("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(r.a)(m.G),
				b = Object(r.a)(m.p),
				h = Object(r.a)(m.Q),
				f = (e, t, n) => async (r, a, {
					apiContext: f
				}) => {
					c.j(a(), t);
					const C = t === d.i.MARKDOWN,
						_ = t === d.i.RICH_TEXT,
						x = m.k;
					if (C && Object(l.G)(n)) return r(h({
						editorKey: e,
						editorMode: d.i.MARKDOWN,
						content: ""
					})), void r(g(t));
					if (_ && !n) return r(h({
						editorKey: e,
						editorMode: d.i.RICH_TEXT,
						content: l.i
					})), void r(g(t));
					r(p(x));
					const E = await Object(i.a)(f(), t, C ? JSON.stringify(n) : n);
					E.ok ? (r(b(x)), r(h({
						editorKey: e,
						editorMode: t,
						content: E.body.output
					})), r(g(t))) : (r(b(x)), r(Object(s.f)({
						duration: s.a,
						kind: u.b.Error,
						text: o.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, g = e => async (t, n) => {
					const r = Object(a.l)();
					if (r >= 3) return;
					const i = n().user.prefs.useMarkdown ? d.i.MARKDOWN : d.i.RICH_TEXT;
					if (e === i) return;
					const c = e === d.i.MARKDOWN ? o.fbt._("You can set Markdown as the default editor mode in the settings", null, {
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
					})), Object(a.qb)(r + 1)
				}
		},
		"./src/reddit/actions/postCreation/mediaUpload.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return N
			})), n.d(t, "b", (function() {
				return R
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
				m = n("./src/lib/makeApiRequest/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				b = n("./src/reddit/constants/headers.ts");
			var h = n("./src/reddit/helpers/correlationIdTracker.ts"),
				f = n("./src/reddit/helpers/imagePreview/index.ts"),
				g = n("./src/reddit/helpers/media/index.ts"),
				C = n("./src/reddit/models/Upload/index.ts"),
				_ = n("./src/reddit/selectors/telemetry.ts"),
				x = n("./src/telemetry/index.ts");
			const E = e => ({
				..._.defaults(e),
				screen: _.screen(e),
				profile: _.profile(e),
				subreddit: _.subreddit(e)
			});
			var v = n("./src/reddit/helpers/trackers/postComposer.ts"),
				O = n("./src/reddit/models/Gold/Powerups/index.ts"),
				y = n("./src/reddit/models/PostCreationForm/index.ts"),
				k = n("./src/reddit/models/Toast/index.ts"),
				S = n("./src/reddit/selectors/gold/powerups/index.ts"),
				j = n("./src/reddit/selectors/postCreations.ts"),
				P = n("./src/reddit/actions/postCreation/constants.ts"),
				T = n("./src/reddit/actions/postCreation/general.ts");
			const w = Object(c.a)(P.u),
				I = Object(c.a)(P.v),
				D = Object(c.a)(P.t),
				N = e => async (t, n) => {
					t(w());
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
						}) => r[e]).find(e => e.status !== C.a.SUCCESS);
					t(s ? D(s.error) : I())
				}, M = (e, t) => ({
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
			const R = "RTE",
				L = "GALLERY",
				A = (e, t, n, r) => async (s, a, {
					apiContext: c
				}) => {
					const d = Object(j.h)(a()),
						u = Date.now();
					let y = null,
						k = !1,
						P = !1,
						T = !1;
					const w = e => {
						if (!T && n && k) {
							T = !0;
							const o = a(),
								r = Date.now() - u,
								s = Object(h.c)(h.a.PostComposer);
							P ? (async ({
								state: e,
								uploadKey: t,
								assetId: n,
								isCanceled: o,
								fileSource: r,
								uploadDuration: s,
								correlationId: i
							}) => {
								const a = e.uploads[t],
									c = o || a.status === C.a.CANCELED,
									{
										file: d,
										url: l,
										metadata: u,
										error: m
									} = a,
									p = u.mimetype || d.type,
									b = p.startsWith("video/"),
									h = a.status === C.a.SUCCESS;
								let f = "";
								m ? f = JSON.stringify(m) : c && (f = "canceled");
								const g = {
									width: u.width,
									height: u.height,
									duration: u.videoDuration && Math.round(1e3 * u.videoDuration)
								};
								Object(x.a)({
									source: b ? "videoupload" : "imageupload",
									action: "upload",
									correlationId: i,
									noun: b ? "video" : "image",
									...E(e),
									actionInfo: {
										..._.actionInfo(e),
										success: h,
										...f ? {
											reason: f
										} : {}
									},
									media: {
										mimetype: p,
										uploadDuration: s,
										source: r,
										fileName: d.name,
										size: d.size,
										type: b ? "video" : "image",
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
								assetId: y,
								isCanceled: e,
								fileSource: n,
								uploadDuration: r,
								correlationId: s
							}) : v.x(o, t)
						}
					};
					return await s(Object(l.l)(e, t, async u => {
						k = !0, Object(l.k)(u.id, () => {
							w(!0)
						});
						const {
							error: h,
							metadata: C
						} = await async function(e, t, n) {
							const r = n && n.allowedPostTypes,
								s = n && n.name,
								a = await Object(g.g)(t) || t.type,
								c = Object(g.b)(t) || void 0;
							if (!c) return M("UNSUPPORTED_BROWSER");
							const d = {
								localUrl: c,
								mimetype: a
							};
							if (!a || !Object(g.i)(a)) return {
								error: {
									type: i.S
								}
							};
							if (a.startsWith("image/")) {
								if (r && !r.images) {
									const e = o.fbt._("Images are not allowed in r/{subredditName}", [o.fbt._param("subredditName", s)], {
										hk: "3C2E7Q"
									});
									return M(i.S, e)
								}
								if ("image/gif" === a) {
									if (t.size > i.Y) return M(i.K)
								} else if (t.size > i.ab) return M(i.Q);
								const e = await Object(f.a)(c);
								d.width = e.width, d.height = e.height
							} else if (a.startsWith("video/")) {
								const a = !(null == n || !n.id) && Object(S.p)(e, {
										subredditId: n.id,
										benefit: O.a.HdVideo
									}),
									u = a ? 2 * i.eb : i.eb;
								if (t.size > u) return M(i.jc);
								let m;
								try {
									m = await Object(g.h)(c, !0)
								} catch (l) {
									return M(i.S)
								}
								if (r) {
									const {
										videos: e,
										images: t
									} = r;
									if (t && !e && m.duration > i.fb) {
										const e = o.fbt._("Sorry, r/{subredditName} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF.", [o.fbt._param("subredditName", s)], {
											hk: "46ULiz"
										});
										return M(i.S, e)
									}
									if (!t && !e) {
										const e = o.fbt._("Videos are not allowed in r/{subredditName}", [o.fbt._param("subredditName", s)], {
											hk: "4uTUZb"
										});
										return M(i.S, e)
									}
								}
								const p = a ? 2 * i.db : i.db;
								if (m.duration > p) {
									const e = o.fbt._("Video is too long. Maximum video length is {duration} minutes.", [o.fbt._param("duration", (p / 60).toString())], {
										hk: "20nB6Q"
									});
									return M(i.S, e)
								}
								if (m.duration < i.lb) {
									const e = o.fbt._("Video is too short. Minimum video length is {duration} seconds.", [o.fbt._param("duration", i.lb.toString())], {
										hk: "49PSW8"
									});
									return M(i.S, e)
								}
								if (m.height < i.mb || m.width < i.nb) {
									const e = o.fbt._("Videos must be {min_video_width}x{min_video_height} pixels or larger.", [o.fbt._param("min_video_width", i.nb.toString()), o.fbt._param("min_video_height", i.mb.toString())], {
										hk: "2HSUGl"
									});
									return M(i.S, e)
								}
								if (t.size / m.duration < i.kb) {
									const e = o.fbt._("Videos must have a bitrate of {min_bitrate}KB/s or larger.", [o.fbt._param("min_bitrate", (i.kb / i.T).toString())], {
										hk: "1ehgDE"
									});
									return M(i.S, e)
								}
								d.height = m.height, d.width = m.width, d.videoDuration = m.duration, d.videoFirstFrameUrl = m.firstFrame.dataUrl
							}
							return {
								metadata: d
							}
						}(a(), e, d);
						if (h || !C) return {
							error: h
						};
						s(Object(l.m)({
							key: t,
							metadata: {
								fileSource: n,
								...C
							}
						})), P = !0, r && r();
						const _ = e.name,
							x = await (async (e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
								endpoint: `${e.apiUrl}/api/media/asset.json`,
								method: i.ib.POST,
								data: {
									filepath: t,
									mimetype: n
								}
							}))(c(), _, C.mimetype);
						return x.ok ? (y = x.body.asset.asset_id, {
							uploadLease: x.body.args
						}) : {
							error: x.error || void 0
						}
					}, !0)), w(!1), a().uploads[t] || null
				}, F = e => async (t, n, {
					apiContext: o
				}) => {
					const r = n().uploads[e];
					r && !Object(C.c)(r) && await t(A(r.file, r.key, r.metadata.fileSource, void 0))
				}, B = (e, t, n) => async (r, i) => {
					const c = e.map((e, o) => new Promise(async o => {
							const i = Object(C.d)(n, s()().slice(-6));
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
						} = r(), i = e.map(e => s[e]).filter(e => e.status === C.a.FAILED && !e.metadata.mimetype).map(e => e.error), c = i.length > t ? t - 1 : i.length, l = i.length - c;
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
						m = Object(j.L)(s) && !c;
					let p = !1,
						b = e;
					if (m) {
						if (Object(y.x)(i)) return void n(Object(d.f)({
							kind: k.b.Error,
							text: o.fbt._("Please remove the existing video first. Videos aren't supported within galleries yet.", null, {
								hk: "3lGxp4"
							})
						}));
						b.some(e => Object(g.l)(e.type)) && n(Object(d.f)({
							kind: k.b.Error,
							text: o.fbt._("Videos aren’t supported within galleries...yet", null, {
								hk: "9Cl20"
							})
						})), b = b.filter(e => Object(g.k)(e.type));
						const e = Math.max(0, u.b - a.length);
						b.length > e && (n(Object(d.f)({
							kind: k.b.Error,
							text: o.fbt._("You have hit the limit of {images_limit} images", [o.fbt._param("images_limit", `${u.b}`)], {
								hk: "6M4kX"
							})
						})), b = b.slice(0, e))
					} else b = b.slice(0, 1), p = !0, n(Object(l.j)(L, !0));
					const h = await n(B(b, t, L));
					if (!h.length) return;
					const f = h.map(e => ({
							uploadKey: e,
							caption: "",
							url: ""
						})),
						C = 0 === a.length;
					n(Object(T.d)({
						...i,
						items: p ? f : [...a, ...f],
						selectedKey: C ? h[0] : h[h.length - 1]
					}))
				}
		},
		"./src/reddit/actions/postCreation/submit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return $
			})), n.d(t, "a", (function() {
				return se
			})), n.d(t, "b", (function() {
				return ce
			}));
			var o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/telemetry/index.ts"),
				i = n("./src/reddit/actions/governance/index.ts"),
				a = n("./src/reddit/actions/pages/subreddit.ts"),
				c = n("./src/reddit/actions/postDraft.ts"),
				d = n("./src/reddit/actions/scheduledPosts/index.ts"),
				l = n("./src/reddit/actions/urlRequested.ts"),
				u = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				m = n("./src/config.ts"),
				p = n("./src/lib/convertToCamelCase/index.ts"),
				b = n("./src/lib/makeApiRequest/index.ts"),
				h = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				f = n("./src/lib/omitHeaders/index.ts"),
				g = n("./src/reddit/constants/headers.ts"),
				C = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				_ = n("./src/reddit/helpers/flair.ts"),
				x = n("./src/reddit/helpers/name/index.ts"),
				E = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				v = n("./src/reddit/models/Poll/index.ts"),
				O = n("./src/reddit/models/Post/index.ts"),
				y = n("./src/reddit/models/PostCreationForm/index.ts"),
				k = n("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function S(e) {
				return Math.floor(e.valueOf() / 1e3)
			}
			const j = e => {
					switch (e.kind) {
						case y.p.CROSSPOST:
							return y.p.CROSSPOST;
						case y.p.LINK:
							return y.p.LINK;
						case y.p.POLL:
							return y.p.POLL;
						case y.p.MEDIA:
							return e.makeGif ? y.p.VIDEO_GIF : e.mediaType;
						default:
							return "self"
					}
				},
				P = e => {
					switch (e.kind) {
						case y.p.RICH_TEXT:
							return {
								richtext_json: JSON.stringify({
									document: e.document
								})
							};
						case y.p.MARKDOWN:
							return {
								text: e.markdown
							};
						case y.p.LINK:
						case y.p.MEDIA:
							return {
								url: e.url
							};
						case y.p.CROSSPOST:
							return {
								crosspost_fullname: e.sourcePostId
							};
						case y.p.POLL:
							return e.poll.type === v.a.Prediction ? {
								duration: 999999,
								end_timestamp: S(e.poll.endDate),
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
				T = e => {
					const t = Object(x.g)(e.destSubreddit.name);
					return {
						...e.destSubreddit.isProfile ? {
							sr: `u_${t}`,
							submit_type: "profile"
						} : {
							sr: t,
							submit_type: "subreddit"
						},
						api_type: "json",
						show_error_list: !0,
						draft_id: e.draftId || void 0,
						title: e.title,
						discussion_type: e.isChatPost ? O.b.Chat : void 0,
						spoiler: e.isSpoiler,
						nsfw: e.isNSFW,
						...e.kind !== y.p.POLL ? {
							kind: j(e),
							original_content: e.isOC
						} : {},
						post_to_twitter: e.postToTwitter,
						sendreplies: e.sendReplies,
						...e.gRecaptchaResponse ? {
							"g-recaptcha-response": e.gRecaptchaResponse
						} : {},
						resubmit: e.resubmit,
						...P(e),
						...e.kind === y.p.MEDIA && "video" === e.mediaType ? {
							video_poster_url: e.videoThumbnailUrl
						} : {},
						...e.kind === y.p.MEDIA && e.makeGif ? {
							make_gif: "on"
						} : {},
						...e.flair ? {
							flair_id: e.flair.templateId,
							flair_text: Object(_.g)(e.flair)
						} : {},
						...e.validate_on_submit ? {
							validate_on_submit: e.validate_on_submit
						} : {},
						...e.eventSchedule && {
							event_start: e.eventSchedule.startDate,
							event_end: e.eventSchedule.endDate,
							event_tz: e.eventSchedule.timezoneName,
							unlist: e.eventSchedule.submitTime === y.j.AtEventTime
						},
						...e.collectionId && {
							collection_id: e.collectionId
						}
					}
				},
				w = async (e, t) => {
					if (!e.ok) return Object(E.b)(e);
					const n = e.body.json.data;
					let r = n.url;
					r || t.kind !== y.p.MEDIA || (r = await ((e, t) => new Promise(n => {
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
					const s = n.id || (e => {
							const t = /comments\/(\w+)\/.*$/.exec(e),
								n = t && t[1];
							return n ? `${o.Gb.Post}_${n}` : ""
						})(r),
						i = Object(h.parse)(r).path,
						a = n.drafts_count;
					return {
						...e,
						body: {
							id: s,
							path: i,
							draftsCount: a
						}
					}
				};
			var I = (e, t) => Object(b.a)(Object(f.a)(e, [g.a]), {
				endpoint: Object(k.a)(Object(C.a)(`${e.apiUrl}/api/submit?resubmit=true`)),
				method: o.ib.POST,
				data: T(t)
			}).then(async e => await w(e, t));
			var D = n("./src/reddit/endpoints/scheduledPosts/index.ts"),
				N = n("./src/reddit/endpoints/scheduledPosts/update.ts"),
				M = n("./src/reddit/featureFlags/index.ts"),
				R = n("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				L = n("./src/reddit/helpers/scheduledPosts/index.ts"),
				A = n("./src/reddit/helpers/trackers/postComposer.ts"),
				F = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				B = n("./src/reddit/models/User/index.ts"),
				U = n("./src/reddit/selectors/postCreations.ts"),
				W = n("./src/reddit/selectors/postDraft.ts"),
				G = n("./src/reddit/selectors/scheduledPosts/index.ts"),
				V = n("./src/reddit/selectors/user.ts"),
				H = n("./src/reddit/models/ScheduledPost/index.ts"),
				K = n("./src/reddit/actions/postCreation/constants.ts"),
				q = n("./src/reddit/actions/postCreation/general.ts"),
				z = n("./src/reddit/actions/postCreation/mediaUpload.ts");
			const Q = Object(r.a)(K.w),
				J = Object(r.a)(K.P),
				Y = Object(r.a)(K.o),
				Z = Object(r.a)(K.y),
				X = Object(r.a)(K.bb),
				$ = Object(r.a)(K.J),
				ee = Object(r.a)(K.a),
				te = Object(r.a)(K.F),
				ne = e => `/r/${e}/about/${H.r}`,
				oe = (e, t) => {
					const n = e || {
							duration: o.A,
							options: []
						},
						{
							govType: r,
							newSubreddit: s,
							newTopMod: i
						} = Object(U.s)(t),
						a = {
							...n
						};
					return r && (a.type = r), a.type === v.a.ReplaceTopMod ? (a.params = {
						userName: i
					}, a.options = v.f[v.a.ReplaceTopMod]()) : a.type === v.a.Spinoff ? (a.params = {
						subreddit: s
					}, a.options = v.f[v.a.Spinoff](s)) : a.options = a.options.map(e => ({
						text: e.text.trim()
					})).filter(e => !!e.text), a
				},
				re = e => {
					const t = e.uploads,
						n = Object(U.U)(e),
						r = Object(U.a)(e),
						s = Object(U.eb)(e);
					if (r === o.Tb.POST) return u.a.getPendingThumbnailUploads(s, t);
					if (r === o.Tb.MEDIA && n && n.items.length) {
						const {
							video: e
						} = n.items[0];
						if (e && e.thumbnail && !t[y.n]) return [{
							...e.thumbnail,
							uploadKey: y.n
						}]
					}
				},
				se = (e, t) => async (n, r, {
					apiContext: s
				}) => {
					let i = r();
					const {
						pending: a
					} = i.creations.api.post.submit, d = Object(W.g)(i);
					if (a || d) return;
					n(te(e)), i = r();
					const l = Object(U.a)(i),
						u = M.d.rteVideoPoster(i),
						m = re(i),
						p = l === o.Tb.MEDIA;
					m && (u || p) && (await n(z.f(m)), re(r())) || (e === y.r.Draft ? await n(Object(c.r)(t.draftId)) : e === y.r.ScheduledPost && Object(G.r)(i) ? await n(ie(t)) : e === y.r.ScheduledPost ? await n(ae(t)) : await n(ce(t)))
				}, ie = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = n(),
						i = Object(U.bb)(r),
						a = Object(U.cb)(r, e),
						c = Object(U.h)(r),
						u = Object(G.r)(r);
					if (!(a && c.id && i && Object(L.f)(u))) return;
					const m = c.id,
						p = Object(G.a)(r, {
							subredditId: m,
							scheduledPostId: u
						});
					if (p && Object(s.a)(Object(F.r)(p)(r)), t(Q(a)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(U.v)(n()))) return;
					const {
						isPoll: b,
						polls: h
					} = Object(U.s)(r), f = oe(h, r), g = {
						...Object(D.e)({
							poll: b ? f : void 0,
							submission: a,
							schedule: i,
							subredditId: c.id,
							scheduledPostId: u
						})
					}, C = await Object(N.a)(o(), g);
					if (C.ok) return t(Object(d.e)({
						subredditId: c.id
					})), void t(Object(l.a)(ne(c.name), !1));
					const _ = C.error;
					t(Y(_))
				}, ae = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = n(),
						i = Object(U.bb)(r),
						a = Object(U.cb)(r, e),
						c = Object(U.h)(r),
						u = Object(G.b)(r);
					if (!a || !c.id || !i) return;
					if (t(Q(a)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(U.v)(n()))) return;
					const {
						isPoll: m,
						polls: p
					} = Object(U.s)(r), b = oe(p, r), h = {
						duration: b.duration,
						options: b.options
					}, f = {
						...Object(D.d)({
							poll: m ? h : void 0,
							submission: a,
							schedule: i,
							subredditId: c.id
						}),
						creationToken: u
					}, g = await Object(D.a)(o(), f);
					if (g.ok) {
						t(Object(d.e)({
							subredditId: c.id
						}));
						const e = g.body.data.createScheduledPost.scheduledPost;
						return e && Object(s.a)(Object(F.o)(Object(R.d)(e))(r)), void t(Object(l.a)(ne(c.name), !1))
					}
					const C = g.error;
					t(Y(C))
				}, ce = e => async (t, n, {
					apiContext: r
				}) => {
					const s = n(),
						c = Object(U.cb)(s, e),
						{
							isPoll: d,
							polls: u
						} = Object(U.s)(s),
						h = oe(u, s);
					if (!c) return;
					if (t(Q(c)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(U.v)(n()))) return;
					let _;
					const x = d && M.d.spPolls(s);
					if ((_ = x ? await
							function(e, t, n) {
								const r = t.destSubreddit.id;
								return Object(b.a)(e, {
									method: o.ib.POST,
									endpoint: `${m.a.metaUrl}/polls/${r}`,
									type: "json",
									data: {
										poll: n,
										subredditId: r,
										...Object(p.a)(T(t))
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
										o = await w(n, t);
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
							}(r(), c, h) : d ? await ((e, t) => Object(b.a)(Object(f.a)(e, [g.a]), {
								endpoint: Object(k.a)(Object(C.a)(`${e.apiUrl}/api/submit_poll_post.json?resubmit=true`)),
								method: o.ib.POST,
								data: T(t),
								type: "json"
							}).then(e => w(e, t)))(r(), {
								...c,
								kind: y.p.POLL,
								poll: h
							}) : c.kind === y.p.GALLERY ? await ((e, t) => Object(b.a)(Object(f.a)(e, [g.a]), {
								endpoint: Object(k.a)(Object(C.a)(`${e.apiUrl}/api/submit_gallery_post.json?resubmit=true`)),
								method: o.ib.POST,
								data: {
									...T(t),
									items: t.galleryItems.map(e => ({
										caption: e.caption,
										outbound_url: e.url,
										media_id: e.assetId
									}))
								},
								type: "json"
							}).then(e => w(e, t)))(r(), c) : await I(r(), c)).ok) {
						const e = Object(V.k)(s),
							n = _.body;
						t(J({
							draftId: c.draftId,
							response: n
						})), x && t(Object(i.c)({
							poll: n.poll
						}));
						const o = (n.path || `/user/${Object(B.e)(e)}/posts`).replace(/^\/r\/u_/, "/user/");
						t(Object(a.subredditInvalidateListing)(c.destSubreddit.name)), t(Object(l.a)(o, !1))
					} else {
						if (d) {
							const e = _.error;
							t(Z(e))
						}
						const e = _.error;
						e.type === o.H.BAD_CAPTCHA_ERROR ? t(ee()) : e.type === o.H.VALIDATION_ERROR ? t(X(e)) : e.type === o.H.SUBMIT_VALIDATION_ERROR ? t($(e)) : t(Y(e))
					}
					const E = Object(q.n)(c.kind),
						v = _.ok && _.body && _.body.id && Object(O.s)(_.body.id),
						S = n();
					A.v(S, E, v, e.correlationId)
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
				return m
			})), n.d(t, "o", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "n", (function() {
				return g
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "r", (function() {
				return _
			})), n.d(t, "u", (function() {
				return x
			})), n.d(t, "p", (function() {
				return E
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "v", (function() {
				return O
			})), n.d(t, "s", (function() {
				return y
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
				m = "SCHEDULED_POST_MUTATE_FAILED",
				p = "STANDALONE_POST_MUTATE_SUCCESS",
				b = "RECURRING_POST_MUTATE_SUCCESS",
				h = "RECURRING_POST__EDIT_MODAL_LOAD",
				f = "RECURRING_POST__EDIT_LOAD",
				g = "STANDALONE_POST__EDIT_LOAD",
				C = "SCHEDULED_POST__DELETE_SUCCESS",
				_ = () => o.fbt._("Failed to load scheduled posts", null, {
					hk: "1fhkq4"
				}),
				x = () => o.fbt._("Whoops! Invalid scheduled post", null, {
					hk: "35jBb6"
				}),
				E = () => o.fbt._("Unable to delete scheduled post", null, {
					hk: "23nWms"
				}),
				v = () => o.fbt._("Successfully deleted scheduled post", null, {
					hk: "1Lk7r2"
				}),
				O = () => o.fbt._("Unable to submit scheduled post", null, {
					hk: "vCW43"
				}),
				y = () => o.fbt._("Retry", null, {
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
				return _
			})), n.d(t, "a", (function() {
				return E
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
				m = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				p = n("./src/reddit/models/ScheduledPost/index.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/routes/postCreation/index.ts"),
				f = n("./src/reddit/selectors/scheduledPosts/index.ts");
			const g = Object(i.a)(c.n),
				C = Object(i.a)(c.b),
				_ = (e, t) => async (n, o, s) => {
					const i = Object(f.a)(o(), {
						scheduledPostId: t,
						subredditId: e
					});
					i && (await n(Object(r.b)(Object(h.c)(i.subreddit.name, i.collectionId))), n((Object(p.p)(i) ? C : g)(i)))
				}, x = (e, t) => {
					Object(p.p)(t) ? e(Object(a.d)({
						scheduledPost: t
					})) : e(Object(a.h)({
						scheduledPost: t
					}))
				}, E = (e, t, n) => async (r, i, {
					gqlContext: h
				}) => {
					r(Object(a.g)());
					const g = Object(f.a)(i(), {
						subredditId: e,
						scheduledPostId: t
					});
					if (g && Object(p.p)(g) && Object(s.a)(Object(m.u)()(i(), g)), !g) return void r(Object(a.f)({
						message: o.fbt._("Scheduled post not found", null, {
							hk: "2zjM55"
						})
					}));
					if (!Object.keys(n).length) return void x(r, g);
					const C = await Object(l.a)(h(), {
							...n,
							id: t
						}),
						_ = C.body;
					if (!(C.ok && _ && _.data && _.data.updateScheduledPost && _.data.updateScheduledPost.ok && _.data.updateScheduledPost.scheduledPost)) return r(Object(a.f)({
						message: C.error && C.error.fields && C.error.fields.length && C.error.fields[0].msg || o.fbt._("Unknown error", null, {
							hk: "fXs5s"
						})
					})), void r(Object(d.f)(Object(d.e)(c.t(), b.b.Error, c.s(), E(e, t, n))));
					r(Object(d.f)(Object(d.e)(c.w(), b.b.SuccessCommunity))), x(r, Object(u.d)(_.data.updateScheduledPost.scheduledPost))
				}
		},
		"./src/reddit/actions/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "b", (function() {
				return w
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
				m = n("./src/reddit/models/Toast/index.ts"),
				p = n("./src/reddit/selectors/scheduledPosts/index.ts"),
				b = n("./src/telemetry/index.ts");
			const h = Object(r.a)(s.g),
				f = Object(r.a)(s.k),
				g = Object(r.a)(s.j),
				C = Object(r.a)(s.o),
				_ = Object(r.a)(s.d),
				x = Object(r.a)(s.f),
				E = Object(r.a)(s.m),
				v = Object(r.a)(s.a),
				O = Object(r.a)(s.c),
				y = Object(r.a)(s.e),
				k = Object(r.a)(s.h),
				S = (e, t) => {
					e(y()), e(Object(a.f)(Object(a.e)(s.r(), m.b.Error, s.s(), j(t))))
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
					if (Object(p.h)(s(), {
							subredditId: e
						})) return;
					r(h());
					const a = {
							subredditId: e,
							includeRecurring: n,
							includeStandalone: t,
							...o
						},
						l = await Object(c.b)(i(), a);
					Object(c.f)(l, a) ? T(r, Object(d.e)(l.body.data), a) : S(r, a)
				}, P = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = n();
					if (!Object(p.h)(r, {
							subredditId: e
						})) return t(j({
						subredditId: e
					}));
					if (!Object(p.g)(r, {
							subredditId: e,
							type: u.f.standalonePosts
						})) return;
					const s = Object(p.c)(r, {
						subredditId: e,
						type: u.f.standalonePosts
					});
					if (!s) return;
					t(h());
					const i = {
							subredditId: e,
							includeStandalone: {
								standaloneFirst: 25,
								standaloneAfter: s
							}
						},
						a = await Object(c.b)(o(), i);
					a.ok ? T(t, Object(d.e)(a.body.data), i) : t(y())
				}, T = (e, t, n) => {
					Object(d.b)(t) ? e(x(t)) : Object(d.a)(t) ? e(v(t)) : Object(d.c)(t) ? e(E(t)) : S(e, n)
				}, w = (e, t) => async (n, r, s) => {
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
					Object(b.a)(Object(l.t)(e, a[e], Object(u.p)(t))(c)), n(Object(i.a)(t.subreddit.id, t.id, a))
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
		"./src/reddit/actions/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "d", (function() {
				return x
			}));
			var o = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/sentry/index.ts"),
				i = n("./src/config.ts"),
				a = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts");
			var u = n("./src/reddit/reducers/features/avatar/index.ts"),
				m = n("./src/reddit/selectors/avatar.ts"),
				p = n("./src/reddit/actions/users.ts");
			Object(o.a)({
				features: {
					avatar: u.a
				}
			});
			const b = "SET_AVATAR_USER",
				h = Object(r.a)(b),
				f = "RANDOM_AVATAR_LOADED",
				g = Object(r.a)(f),
				C = (e, t, n) => async (o, r, {
					apiContext: s
				}) => {
					const u = Object(m.b)(r()),
						b = await (async (e, t, n, o, r) => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${i.a.snoovatarUrl}/api/snoovatar`,
							method: a.ib.POST,
							headers: {
								"Content-Type": "application/json ",
								"X-CSRF-Token": r
							},
							data: {
								accessory_ids: t,
								styles: n,
								...o
							}
						}))(s(), e, t, n, u);
					if (!b.ok) throw new Error("User avatar failed to save");
					o(Object(p.A)(b.body))
				}, _ = () => async (e, t, {
					apiContext: n
				}) => {
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${i.a.snoovatarUrl}/api/account`,
							method: a.ib.GET
						}))(n());
						t.ok && e(h(t.body))
					} catch (o) {
						s.c.captureException(o)
					}
				}, x = () => async (e, t, {
					apiContext: n
				}) => {
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${i.a.snoovatarUrl}/api/snoovatars/random:byId`,
							method: a.ib.GET
						}))(n());
						t.ok && e(g(t.body))
					} catch (o) {
						s.c.captureException(o)
					}
				}
		},
		"./src/reddit/actions/snoovatarModal.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			var o = n("./src/reddit/actions/login.ts"),
				r = n("./src/reddit/actions/modal.ts"),
				s = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				a = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				d = n("./src/telemetry/index.ts");
			const l = () => async (e, t) => {
				const n = t();
				Object(d.a)(Object(a.j)(n)), e(Object(s.t)({
					forceFetch: !0
				})), await e(Object(r.g)(i.a.SNOOVATAR_MODAL))
			};

			function u(e = {}) {
				return async (t, n) => {
					const {
						clickSource: s,
						share: l,
						source: u
					} = e, m = n();
					s && Object(d.a)(Object(a.e)(s)(m)), Object(c.K)(m) ? await t(Object(r.h)(i.a.SNOOVATAR_MODAL, {
						share: l,
						source: u
					})) : await t(Object(o.i)())
				}
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
		"./src/reddit/actions/subredditCrosspostable.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "d", (function() {
				return h
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
				m = "SUBREDDIT_CROSSPOSTABLE__FAILED",
				p = (Object(o.a)(l), Object(o.a)(u)),
				b = Object(o.a)(m),
				h = () => async (e, t, {
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
						method: s.ib.GET
					}))(n(), {
						sr_detail: !1
					});
					if (u.ok) {
						const n = t(),
							o = u.body && u.body.length ? u.body.map(e => Object(d.B)(n, e)).filter(e => !!e).reduce((e, t) => (e[t] = !0, e), {}) : {};
						e(p({
							subredditIds: o
						}))
					} else e(b({
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
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "m", (function() {
				return x
			})), n.d(t, "k", (function() {
				return j
			})), n.d(t, "l", (function() {
				return P
			})), n.d(t, "i", (function() {
				return T
			})), n.d(t, "j", (function() {
				return w
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
				m = "UPLOAD_METADATA_CHANGED",
				p = "UPLOAD_PROGRESS",
				b = "UPLOAD_SUCCESS",
				h = "UPLOAD_FAILED",
				f = "UPLOAD_CANCELED",
				g = "UPLOAD_REMOVED",
				C = Object(a.a)(l),
				_ = Object(a.a)(u),
				x = Object(a.a)(m),
				E = Object(a.a)(p),
				v = Object(a.a)(b),
				O = Object(a.a)(h),
				y = Object(a.a)(f),
				k = Object(a.a)(g),
				S = new Map,
				j = (e, t) => {
					const n = S.get(e) || [];
					n.push(t), S.set(e, n)
				},
				P = (e, t, n, o = !1) => async (s, a, {
					apiContext: l
				}) => {
					const u = t;
					if (a().uploads[u] && Object(d.c)(a().uploads[u])) return;
					const m = i()(),
						p = () => {
							const e = a().uploads[u];
							return !e || e.id !== m || e.status === d.a.CANCELED
						};
					s(C({
						key: u,
						id: m,
						file: e
					}));
					const {
						uploadLease: b,
						error: h
					} = await n(a().uploads[u]);
					if (p()) return;
					if (h || !b) return void s(O({
						key: u,
						error: h
					}));
					let f;
					j(m, () => {
						f && f.abort()
					}), s(_({
						key: u
					}));
					const g = await Object(c.a)(e, b, e => (f = e, o && e.on("progress", e => {
						if (!p() && "upload" === e.direction) {
							const t = {
								percent: e.percent,
								total: e.total,
								uploaded: e.loaded
							};
							s(E({
								key: u,
								progress: t
							}))
						}
					}), e));
					if (f = null, !p())
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
				}, T = (e, t = !1) => (n, o) => {
					const r = o().uploads[e];
					r && (((e, t) => {
						const n = S.get(e);
						n && n.forEach(n => n(e, t)), S.delete(e)
					})(r.id, t), n(t ? k({
						key: e
					}) : y({
						key: e
					})))
				}, w = (e, t = !1) => (n, o) => {
					Object.keys(o().uploads).forEach(o => {
						o.startsWith(e) && n(T(o, t))
					})
				}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./src/lib/matchRoute/index.ts"),
				r = n("./src/lib/opener/index.ts"),
				s = n("./node_modules/react-router-redux/es/index.js");
			const i = (e, t = !0) => async (n, i, {
				routes: a
			}) => {
				const c = i();
				Object(o.a)(e, a, c) ? n(Object(s.b)(e)) : t ? Object(r.e)(e, "_blank") : window.location.assign(e)
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
				return m
			})), n.d(t, "o", (function() {
				return p
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "m", (function() {
				return g
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "l", (function() {
				return _
			})), n.d(t, "k", (function() {
				return x
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
				m = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				p = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				b = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				h = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				f = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				g = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				C = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				_ = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				x = "USERFLAIR_FETCH_SUCCESS"
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
				isReplyWithUpvoteExperiment: "_1F9KyCoFHXADTJ_MqdUmVG",
				ButtonWrapper: "_3SNMf5ZJL_5F1qxcZkD0Cp",
				buttonWrapper: "_3SNMf5ZJL_5F1qxcZkD0Cp",
				FormFooterWrapper: "_17TqawK-44tH0psnHPIhzS",
				formFooterWrapper: "_17TqawK-44tH0psnHPIhzS",
				pending: "_5p2VqxvUAZTtPIXr7XU5p"
			}
		},
		"./src/reddit/components/CommentCreation/FormFooter/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/constants/icons.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = n("./src/reddit/components/TypingIndicators/index.m.less"),
				m = n.n(u),
				p = n("./src/reddit/components/CommentCreation/FormFooter/index.m.less"),
				b = n.n(p);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js"), f = Object(o.a)({
				resolved: {},
				chunkName: () => "reddit-components-RichTextEditor-Toolbar-EmoteButton",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-RichTextEditor-Toolbar-EmoteButton").then(n.bind(null, "./src/reddit/components/RichTextEditor/Toolbar/EmoteButton/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/RichTextEditor/Toolbar/EmoteButton/index.tsx"
				}
			}), g = Object(o.a)({
				resolved: {},
				chunkName: () => "reddit-components-RichTextEditor-Toolbar-GifButton",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-RichTextEditor-Toolbar-GifButton").then(n.bind(null, "./src/reddit/components/RichTextEditor/Toolbar/GifButton/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/RichTextEditor/Toolbar/GifButton/index.tsx"
				}
			}), C = Object(o.a)({
				resolved: {},
				chunkName: () => "reddit-components-RichTextEditor-Toolbar-FormatterButton",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.resolve().then(n.bind(null, "./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"
				}
			}), _ = 10, x = c.a.div("FormFooterWrapper", b.a), E = c.a.wrapped(d.s, "SubmitButton", b.a), v = c.a.wrapped(l.a, "LoadingIcon", b.a), O = c.a.wrapped(d.s, "CancelButton", b.a), y = c.a.div("ButtonWrapper", b.a), k = e => e.preventDefault(), S = ({
				onTypingIndicatorsFormattingToolsClick: e,
				destSubreddit: t,
				onEmoteButtonClick: n,
				onGifButtonClick: o,
				userCanUseGifs: r,
				showEmoteButton: i,
				gifsEnabled: c,
				controlsState: d,
				isShowTypingIndicatorsFormattingTools: l
			}) => s.a.createElement("div", {
				className: m.a.footerButtons
			}, s.a.createElement(C, {
				iconName: l ? a.a.format_fill : a.a.format,
				onClick: () => e(),
				overridingClassName: l ? m.a.formatFillIcon : void 0,
				tooltip: h._("Formatting Tools", null, {
					hk: "3HxAVI"
				})
			}), c && s.a.createElement(g, {
				controlsState: d,
				onGifButtonClick: o,
				useRainbowStyling: !1,
				userCanUseGifs: r
			}), i && s.a.createElement(f, {
				controlsState: d,
				subredditId: null == t ? void 0 : t.id,
				onEmoteButtonClick: n,
				showEmoteMask: !1,
				useIconName: !0
			})), j = ({
				pending: e,
				cancelButtonEnabled: t = !0,
				children: n,
				className: o,
				submitButtonText: r,
				canSubmit: a,
				onSubmit: c,
				onCancel: l,
				isReplyWithUpvoteExperiment: u,
				typingIndicatorsFormFooterProps: p
			}) => s.a.createElement(x, {
				className: Object(i.a)(o, {
					[b.a.pending]: e
				})
			}, !u && s.a.createElement(y, null, !!p && s.a.createElement(S, p), s.a.createElement(E, {
				className: p ? m.a.submitButton : void 0,
				size: d.c.XS,
				type: "submit",
				disabled: !a,
				onClick: c,
				onMouseDown: k
			}, e ? s.a.createElement(v, {
				sizePx: _
			}) : r), t && s.a.createElement(O, {
				priority: d.b.Secondary,
				size: d.c.XS,
				type: "reset",
				disabled: e,
				onClick: l,
				onMouseDown: k
			}, h._("Cancel", null, {
				hk: "2TSLl5"
			}))), n);
			t.a = j
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
				isReplyWithUpvoteExperiment: "_2kZGOdxUE2mbz8KKHzAZy9",
				Wrapper: "B0932G-wzdOKwoaSaKsKU",
				wrapper: "B0932G-wzdOKwoaSaKsKU",
				FormFooter: "OQubMtSYxy2qH2Q1upQvp",
				formFooter: "OQubMtSYxy2qH2Q1upQvp",
				FormWrapper: "_2LoNYeXgOQfq1adQ3jWSbi",
				formWrapper: "_2LoNYeXgOQfq1adQ3jWSbi",
				bottomWrapper: "_2m2Tc_zlrewhQiaDiNFFzP",
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
				isTopLevelComment: "_3-O087Fe8Gpv51vkui03iG",
				mRedesign: "dDb_knwHdpaUGniyi2rvM",
				ResizableAutosizeTextarea: "AISc5olsWsxMr-ZvG8ywU",
				resizableAutosizeTextarea: "AISc5olsWsxMr-ZvG8ywU",
				mExpanded: "_2FiN5dLqiHVqs1l1NeoU-W",
				userIcon: "_1LJWM5yPEtZv26nvbB_mvr",
				CurrentUserIcon: "_6R8kWvljXn9F_7IAh1RG4",
				currentUserIcon: "_6R8kWvljXn9F_7IAh1RG4",
				pending: "_1N53zdZlGyvjHMUoXkJa42",
				focused: "_2sPOgUISlhUYTMcHhUPCTP",
				checkboxText: "_35eDyBmPTHmQfVHWSATtHr",
				isUpvoteChecked: "EF9nE_PvLBxmtQXU9Fx2n"
			}
		},
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _e
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
				m = n("./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx"),
				p = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				b = n("./src/reddit/components/MarkdownHelp/index.tsx"),
				h = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				f = n("./src/reddit/controls/ErrorText/index.tsx"),
				g = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				C = n("./src/reddit/icons/svgs/Help/index.tsx"),
				_ = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx"),
				x = n("./src/reddit/components/CommentCreation/FormFooter/index.tsx"),
				E = n("./src/lib/fastdom/index.ts"),
				v = n("./src/reddit/components/CommentCreation/ToolbarSelector.m.less"),
				O = n.n(v),
				y = n("./src/lib/lessComponent.tsx");
			const k = 310,
				S = y.a.div("Container", O.a);
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
						n !== this.state.toolbarType && E.a.write(() => {
							this.setState({
								toolbarType: n
							})
						})
					}
				}
				componentDidMount() {
					E.a.read(this.selectToolbar), window.addEventListener("resize", this.selectToolbar)
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
			var P = n("./src/reddit/icons/svgs/MarkdownMode/index.tsx"),
				T = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				w = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/MarkdownModeButton.m.less"),
				I = n.n(w),
				D = n("./src/reddit/controls/Button/index.tsx");
			const N = y.a.wrapped(g.a, "LoadingIcon", I.a),
				M = ({
					isFilled: e,
					...t
				}) => s.a.createElement(N, t),
				R = y.a.div("Wrapper", I.a),
				L = y.a.wrapped(P.a, "MarkdownModeIcon", I.a),
				A = ({
					isFilled: e,
					...t
				}) => s.a.createElement(L, t);
			var F = s.a.memo((function(e) {
					const t = o.fbt._("Switch to fancy pants editor", null, {
						hk: "1XOb4H"
					});
					return s.a.createElement(R, null, s.a.createElement(D.s, {
						priority: D.b.Plain,
						size: D.c.XS,
						"aria-label": t,
						innerRef: e.buttonRef,
						className: e.className,
						onClick: e.onClick,
						Icon: e.isConverting ? M : A
					}, s.a.createElement(T.a, {
						text: t
					})))
				})),
				B = n("./src/lib/classNames/index.ts"),
				U = n("./src/reddit/constants/keycodes.ts"),
				W = n("./src/reddit/components/CommentCreation/getCancelModalId.ts"),
				G = n("./src/reddit/constants/componentSizes.ts"),
				V = n("./src/reddit/constants/componentTestIds.ts"),
				H = n("./src/reddit/selectors/activeModalId.ts"),
				K = n("./src/reddit/selectors/comments.ts"),
				q = n("./src/reddit/selectors/editorContent.ts"),
				z = n("./src/reddit/actions/modal.ts"),
				Q = n("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				J = n("./src/reddit/models/PostCreationForm/index.ts"),
				Y = n("./src/reddit/models/PostDraft/index.ts"),
				Z = n("./src/reddit/models/User/index.ts"),
				X = n("./src/reddit/components/CommentCreation/FormFooter/index.m.less"),
				$ = n.n(X),
				ee = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.m.less"),
				te = n.n(ee),
				ne = n("./src/reddit/actions/comment/index.ts"),
				oe = n("./src/reddit/actions/post.ts"),
				re = n("./src/reddit/components/TrackingHelper/index.tsx"),
				se = n("./src/reddit/controls/CheckboxInput/index.tsx"),
				ie = n("./src/reddit/helpers/trackers/comment.ts"),
				ae = n("./src/reddit/models/Vote/index.ts"),
				ce = n("./src/reddit/selectors/experiments/replyWithUpvote.ts");
			const de = e => e.preventDefault(),
				le = y.a.button("SwitchModeButton", te.a),
				ue = y.a.wrapped(g.a, "LoadingIcon", te.a),
				me = y.a.div("CommentHeader", te.a),
				pe = y.a.span("FormHeaderText", te.a),
				be = y.a.button("HelpButton", te.a),
				he = y.a.wrapped(C.a, "HelpIcon", te.a),
				fe = y.a.wrapped(Q.a, "ResizableAutosizeTextarea", te.a),
				ge = y.a.wrapped(x.a, "FormFooter", te.a),
				Ce = y.a.wrapped(h.a, "CurrentUserIcon", te.a),
				_e = e => s.a.createElement(be, {
					className: e.className,
					onClick: e.onClick
				}, s.a.createElement(he, null)),
				xe = 8,
				Ee = 16,
				ve = y.a.div("Wrapper", te.a),
				Oe = y.a.div("FormWrapper", te.a),
				ye = Object(a.b)(() => Object(c.c)({
					activeModalId: H.a,
					userName: e => e.user.account ? Object(Z.e)(e.user.account) : "",
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					draft: K.i,
					isConverting: (e, t) => Object(q.a)(e, t.draftKey),
					isReplyWithUpvoteExperiment: ce.a,
					voteState: (e, t) => {
						var n, o, r;
						return t.isTopLevelComment ? e.posts.models[t.postId].voteState : null === (r = null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.comments) || void 0 === o ? void 0 : o.models[t.parentCommentId]) || void 0 === r ? void 0 : r.voteState
					}
				}), (e, t) => ({
					cancelModalToggled: () => e(Object(z.i)(Object(W.a)(t.draftKey))),
					helpModalToggled: () => e(Object(z.i)(b.b)),
					onVoteClick: () => {
						t.isTopLevelComment ? e(Object(oe.db)(t.postId)) : e(Object(ne.q)(t.parentCommentId))
					}
				}));
			class ke extends s.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.cancelForm = () => {
						this.props.onCancel(), this.onBlur()
					}, this.detectBreakout = () => {
						if (!this.wrapperEl || !this.wrapperEl.parentElement || this.props.isTopLevelComment) return;
						const e = this.wrapperEl.parentElement.getBoundingClientRect().width < G.c,
							t = this.getWrapperHeight();
						e === this.state.breakOut && t === this.state.wrapperHeight || E.a.write(() => {
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
							E.a.read(this.detectBreakout)
						})
					}, this.shouldConfirmCancel = () => this.userHasEnteredText() && this.state.hasChanged && this.props.draftType === Y.c.edit, this.onCancel = () => {
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
						if (this.props.onSubmit({
								commentMode: J.i.MARKDOWN,
								draftType: this.props.draftType,
								editorState: null,
								text: this.getCurrentText(),
								validate: this.props.showWarningModal
							}), this.onBlur(), this.state.upvoteDefault && this.props.isReplyWithUpvoteExperiment && (this.props.onVoteClick(), this.setState({
								hasAlreadyVoted: !0
							}), this.props.sendEvent(Object(ie.e)(this.props.parentCommentId))), this.props.triggerCelebratoryMoment) {
							const {
								postId: e
							} = this.props;
							this.props.triggerCelebratoryMoment(!1, e)
						}
					}, this.userHasEnteredText = () => {
						const {
							text: e
						} = this.state;
						return !!e.trim()
					}, this.setWrapperRef = e => {
						this.wrapperEl = e, this.props.editorElementRef && this.props.editorElementRef(e)
					}, this.setTextAreaRef = e => this.textAreaRef = e, this.onCheck = () => {
						this.setState({
							upvoteDefault: !this.state.upvoteDefault
						}), this.state.upvoteDefault ? (localStorage.removeItem("upvoteDefault"), this.props.sendEvent(Object(ie.c)(this.props.parentCommentId))) : (localStorage.setItem("upvoteDefault", "true"), this.props.sendEvent(Object(ie.d)(this.props.parentCommentId)))
					};
					const {
						draftType: t,
						hasError: n,
						initialText: r,
						voteState: s
					} = e, i = !!localStorage.getItem("upvoteDefault"), a = s === ae.a.upvoted || s === ae.a.downvoted;
					this.state = {
						text: r || "",
						autofocusDisabled: !1,
						hasChanged: !1,
						showError: n,
						breakOut: !1,
						wrapperHeight: void 0,
						formHeight: null,
						cancelModalText: t === Y.c.edit ? o.fbt._("Are you sure that you want to discard your edits?", null, {
							hk: "3RHatI"
						}) : o.fbt._("Are you sure that you want to discard your comment?", null, {
							hk: "38Df9h"
						}),
						upvoteDefault: i,
						hasAlreadyVoted: a
					}
				}
				componentDidMount() {
					this.props.onMount(), window.addEventListener("resize", this.detectBreakout), E.a.read(this.detectBreakout), E.a.write(() => {
						this.props.draft.hasFocus && this.textAreaRef && this.textAreaRef.focus()
					}), this.props.instanceRef && this.props.instanceRef(this), this.state.hasAlreadyVoted || this.props.sendEvent(Object(ie.f)(this.props.parentCommentId))
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
					}), this.props.voteState !== e.voteState && this.props.voteState !== ae.a.notVoted && this.setState({
						hasAlreadyVoted: !0
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
					return e instanceof Element ? e.getBoundingClientRect().height + xe + Ee + G.o : void 0
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
						draftKey: h,
						draftType: C,
						errorMsgs: x,
						pending: E,
						modalSeen: v,
						submitButtonText: O,
						isCommentBoxDesignEnabled: y,
						isExpanded: k,
						isReplyWithUpvoteExperiment: S,
						isTopLevelComment: P,
						onSwitchMode: T,
						userName: w
					} = this.props, {
						cancelModalText: I,
						hasAlreadyVoted: N,
						showError: M,
						text: R,
						breakOut: L,
						wrapperHeight: A,
						upvoteDefault: U
					} = this.state, G = Object(W.a)(h), H = c.draftType === Y.c.edit;
					return s.a.createElement(ve, {
						"data-test-id": V.b,
						className: Object(B.a)(r, {
							[te.a.isTopLevelComment]: P,
							[te.a.mExpanded]: k,
							[te.a.mRedesign]: y,
							[te.a.isReplyWithUpvoteExperiment]: S
						}),
						ref: this.setWrapperRef,
						style: {
							height: L ? A : void 0
						}
					}, !y && P && !S && s.a.createElement(me, null, s.a.createElement(pe, null, o.fbt._("Comment as {authorLink}", [o.fbt._param("authorLink", s.a.createElement(l.a, {
						author: w,
						isAuthorDeleted: !1
					}, w))], {
						hk: "4pMWAk"
					}))), s.a.createElement(_.a, {
						breakOut: L,
						depth: a,
						isEditing: H
					}, y && s.a.createElement("div", {
						className: te.a.userIcon
					}, s.a.createElement(Ce, null)), s.a.createElement(Oe, {
						className: Object(B.a)({
							[te.a.pending]: E,
							[te.a.focused]: c.hasFocus,
							[te.a.isReplyWithUpvoteExperiment]: S
						})
					}, s.a.createElement(fe, {
						innerRef: this.setTextAreaRef,
						autoFocus: t && !i,
						disabled: E,
						initialHeight: this.props.initialHeight,
						onBlur: this.onBlur,
						onChange: this.onChange,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.onFocus,
						onKeyDown: this.handleKeyDown,
						placeholder: y ? o.fbt._("Add a comment", null, {
							hk: "39ZBm0"
						}) : S ? o.fbt._("Comment as u/{username}", [o.fbt._param("username", w)], {
							hk: "Rg4bJ"
						}) : o.fbt._("What are your thoughts?", null, {
							hk: "4or1AH"
						}),
						value: R
					}), (!y || k) && s.a.createElement(ge, {
						cancelButtonEnabled: C !== Y.c.replyToPost,
						onSubmit: this.onSubmit,
						onCancel: this.onCancel,
						pending: E,
						submitButtonText: O,
						canSubmit: this.userHasEnteredText(),
						isReplyWithUpvoteExperiment: S
					}, s.a.createElement(j, null, e => "compact" === e ? s.a.createElement(F, {
						buttonRef: e => this.switchModeBtn = e,
						onClick: () => T(J.i.RICH_TEXT, R, h),
						isConverting: this.props.isConverting
					}) : s.a.createElement("div", null, s.a.createElement(le, {
						innerRef: e => this.switchModeBtn = e,
						onClick: () => T(J.i.RICH_TEXT, R, h)
					}, o.fbt._("Switch to Fancy Pants Editor", null, {
						hk: "ousUG"
					}), this.props.isConverting && s.a.createElement(ue, {
						sizePx: 12
					})))), s.a.createElement(_e, {
						onClick: this.props.helpModalToggled
					})))), S && s.a.createElement("div", {
						className: te.a.bottomWrapper
					}, s.a.createElement("div", {
						className: Object(B.a)($.a.buttonWrapper, {
							[$.a.isReplyWithUpvoteExperiment]: S
						})
					}, s.a.createElement(D.s, {
						className: $.a.SubmitButton,
						size: D.c.XS,
						type: "submit",
						disabled: !this.userHasEnteredText(),
						onClick: this.onSubmit,
						onMouseDown: de
					}, E ? s.a.createElement(g.a, {
						sizePx: 10
					}) : O), C !== Y.c.replyToPost && s.a.createElement(D.s, {
						className: $.a.CancelButton,
						priority: D.b.Secondary,
						size: D.c.XS,
						type: "reset",
						disabled: E,
						onClick: this.onCancel,
						onMouseDown: de
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}))), !N && s.a.createElement(se.a, {
						name: "replyWithUpvote",
						value: U,
						onChange: this.onCheck
					}, s.a.createElement("div", {
						className: te.a.checkboxText
					}, s.a.createElement("div", {
						className: Object(B.a)(r, {
							[te.a.isUpvoteChecked]: U
						})
					}, P ? o.fbt._("Upvote this post", null, {
						hk: "2FkFmV"
					}) : o.fbt._("Upvote this comment", null, {
						hk: "dduL8"
					}))))), M && Object(f.c)(x), e === G && s.a.createElement(p.a, {
						actionText: o.fbt._("Discard", null, {
							hk: "1kJ5PR"
						}),
						cancelActionText: o.fbt._("keep", null, {
							hk: "J0ER1"
						}),
						modalText: I,
						onConfirm: () => this.cancelForm(),
						toggleModal: n,
						trackClick: () => {}
					}), e === b.b && s.a.createElement(b.a, null), e === d.q && s.a.createElement(m.a, {
						onSubmit: this.onSubmit,
						modalSeen: v,
						withOverlay: !0
					}), s.a.createElement(u.a, {
						editKey: h,
						hasValue: !!R
					}))
				}
			}
			t.b = ye(Object(re.c)(ke))
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
						return !!window.confirm(e) && void 0
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
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/controls/TextButton/index.tsx"),
				b = n("./src/reddit/constants/tracking.ts"),
				h = n("./src/reddit/selectors/telemetry.ts");
			const f = e => ({
					source: "toxicity_modal",
					...h.defaults(e),
					screen: h.screen(e),
					subreddit: h.subreddit(e)
				}),
				g = e => t => ({
					action: b.c.VIEW,
					noun: "modal",
					correlationId: e,
					...f(t)
				}),
				C = e => t => ({
					action: b.c.CLICK,
					noun: "submit",
					correlationId: e,
					...f(t)
				}),
				_ = e => t => ({
					action: b.c.CLICK,
					noun: "edit",
					correlationId: e,
					...f(t)
				}),
				x = e => t => ({
					action: b.c.CLICK,
					noun: "close",
					correlationId: e,
					...f(t)
				});
			var E = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
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
			class y extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						correlationId: a()()
					}
				}
				componentDidMount() {
					this.props.modalSeen(), this.props.sendEvent(g(this.state.correlationId))
				}
				render() {
					return r.a.createElement(u.e, null, r.a.createElement(u.i, null, r.a.createElement(E.a, null, r.a.createElement(u.q, null, v._("Are you sure you want to post that?", null, {
						hk: "4yXqtu"
					})), r.a.createElement(p.a, {
						onClick: () => {
							this.props.sendEvent(x(this.state.correlationId)), this.props.closeModal()
						}
					}, r.a.createElement(u.b, null)))), r.a.createElement(u.l, null, r.a.createElement(u.p, null, v._("A reminder from the mods: Please follow community rules when commenting.", null, {
						hk: "Hdi9f"
					}))), r.a.createElement(u.g, null, r.a.createElement(u.a, {
						onClick: () => {
							this.props.sendEvent(_(this.state.correlationId)), this.props.closeModal()
						},
						"data-redditstyle": !0
					}, v._("Go back and edit", null, {
						hk: "3nGNI7"
					})), r.a.createElement(u.r, {
						onClick: () => {
							this.props.sendEvent(C(this.state.correlationId)), this.props.continue()
						},
						"data-redditstyle": !0
					}, v._("Comment", null, {
						hk: "1leYg7"
					}))))
				}
			}
			t.a = Object(c.a)(O(Object(m.c)(y)))
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
			const m = e => e.preventDefault();
			t.a = Object(i.a)(e => s.a.createElement(a.e, null, s.a.createElement(a.i, null, s.a.createElement(d.a, null, s.a.createElement(a.q, null, e.headerText || o.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), s.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, s.a.createElement(a.b, null)))), s.a.createElement(a.l, null, s.a.createElement(a.p, {
				className: u.a.ModalText
			}, e.modalText)), s.a.createElement(a.g, null, !e.hideCancelButton && s.a.createElement(a.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || o.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), s.a.createElement(a.u, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
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
				m = n("./src/reddit/helpers/trackers/privateCommunity.ts"),
				p = n("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				b = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				h = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.m.less"),
				f = n.n(h);
			const g = () => ({
				[b.b.Comment]: o.fbt._("Request to Comment", null, {
					hk: "3KRhw5"
				}),
				[b.b.IdCard]: o.fbt._("Request to Post", null, {
					hk: "2xsrGd"
				}),
				[b.b.PostSubmission]: o.fbt._("Request to Post", null, {
					hk: "2xsrGd"
				}),
				[b.b.ContentGate]: o.fbt._("Request to Join", null, {
					hk: "1nK8Vv"
				})
			});
			class C extends s.a.Component {
				constructor() {
					super(...arguments), this.onRequest = () => {
						const {
							sendEvent: e,
							eventSource: t,
							openRequestToJoinSubredditModal: n,
							openContributorRequestModal: o
						} = this.props;
						t === b.b.ContentGate ? (e(Object(m.a)(t)), n()) : (e(Object(p.a)(t)), o())
					}
				}
				render() {
					const {
						eventSource: e,
						smallButton: t,
						className: n,
						isContributorRequestPending: r
					} = this.props;
					return s.a.createElement(u.s, {
						priority: e === b.b.ContentGate ? u.b.Secondary : u.b.Primary,
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
			}))(Object(d.c)(C))
		},
		"./src/reddit/components/Econ/Prediction/NewBadge/index.m.less": function(e, t, n) {
			e.exports = {
				newBadge: "_25Zpk4lWyvwk-rK1hZ0N8m"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts": function(e, t, n) {
			"use strict";
			var o;
			n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.nonDismissable = "predictionEducationNonDismissable", e.creation = "predictionEducationCreation", e.feature = "predictionEducationFeature"
				}(o || (o = {}))
		},
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.m.less": function(e, t, n) {
			e.exports = {
				educationMessage: "_3fy4maW8GQWdzcWGdeMbsa",
				titleRow: "_1OeK7ZGX2fnKzdqjn-5gQD",
				header: "_1Y7_NWRItnxdsOq9DSlCDi",
				title: "_2ZZDhQ9qffZd-pGxZE6R4I",
				newBadge: "_1cHmK8KSQMLT0mELC910oM",
				closeButton: "_1C2XLQWgnLb_MVlB0fwAc_"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/hooks/useLocalStorage.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts"),
				d = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function m({
				message: e,
				newBadge: t,
				onClose: n,
				onView: d,
				storageKey: m = c.a.nonDismissable,
				title: p
			}) {
				const b = m !== c.a.nonDismissable,
					[h, f] = Object(s.a)(m, !b || !1),
					[g, C] = Object(o.useState)(!1);
				return Object(o.useEffect)(() => {
					h || g || !d || (d(), C(!0))
				}, [h, g, d]), b && h ? null : r.a.createElement("div", {
					className: l.a.educationMessage
				}, r.a.createElement("div", {
					className: l.a.titleRow
				}, r.a.createElement("div", {
					className: l.a.header
				}, r.a.createElement("h3", {
					className: l.a.title
				}, p), t && r.a.createElement("div", {
					className: l.a.newBadge
				}, u._("New", null, {
					hk: "2N0EBb"
				}))), b && r.a.createElement(i.s, {
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
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionFeatureEducationMessage/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.tsx");

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
			t.a = e => i.a.createElement(a.i, {
				className: l.a.modalHeader
			}, i.a.createElement(a.q, null, e.title), i.a.createElement(c.a, {
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
				m = i.a.wrapped(a.b, "FlairComponent", d.a);
			t.a = e => e.flair ? s.a.createElement(u, null, s.a.createElement(l, null, o.fbt._("{placeholder}", [o.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), s.a.createElement(m, {
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
				return b
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
				m = n.n(u);
			const p = d.a.wrapped(e => i.a.createElement("div", {
					className: Object(c.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				b = r()((e = p) => Object(a.a)({
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
				m = n("./src/reddit/helpers/trackers/userFlair.ts"),
				p = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/selectors/moderatorPermissions.ts"),
				h = n("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				f = n("./src/reddit/components/Flair/index.tsx"),
				g = n("./src/reddit/controls/RadioInput/index.tsx"),
				C = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				x = n("./src/reddit/icons/svgs/Search/index.tsx"),
				E = n("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				v = n.n(E);
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
					}), s.a.createElement(x.a, {
						className: v.a.searchIcon
					})), s.a.createElement(g.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: n
					}, i.map((e, t) => {
						const o = Object(u.c)(e),
							r = n === e.id || !a && 0 === t;
						return s.a.createElement(C.a, {
							className: v.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: r ? 0 : -1,
							value: e.id
						}, s.a.createElement(f.b, {
							className: v.a.flairComponent,
							flair: o,
							forceSmallEmojis: !0
						}), e.textEditable && s.a.createElement(_.a, {
							className: v.a.pencil
						}))
					})))
				}
			}
			var y = n("./src/reddit/components/FlairSearch/index.m.less"),
				k = n.n(y);
			const S = Object(d.a)(e => e && Object(u.c)(e)),
				j = Object(a.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: b.g
				}),
				P = Object(i.b)(j);
			t.a = P(e => {
				const {
					flairTemplateType: t,
					flair: n,
					className: r,
					onChange: i,
					subredditId: a,
					templates: d,
					templateIds: l,
					areFlairRestrictionsEnabled: b,
					isModerator: f
				} = e, g = Object(p.a)(), C = d && n && n.templateId && d[n.templateId] || void 0, _ = Object(h.a)(), x = n || S(C);
				return s.a.createElement("div", {
					className: Object(c.a)(r, k.a.container)
				}, d && l && s.a.createElement(O, {
					flairTemplateType: t,
					onChange: e => {
						if (d) {
							const t = d[e],
								n = Object(u.c)(t);
							g(Object(m.b)({
								userFlair: t
							})), i(n)
						}
					},
					selectedTemplateId: C ? C.id : "",
					templateIds: l,
					templates: d
				}), x && C && (f || C.textEditable) && s.a.createElement("div", {
					className: k.a.flairEditSection
				}, s.a.createElement("div", {
					className: k.a.editLabel
				}, o.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), b && s.a.createElement("div", {
					className: k.a.restrictionHintText
				}, Object(u.k)(C)), s.a.createElement(_, {
					autofocus: !0,
					emojiPickerId: "FlairSearch-EmojiPicker-DropdownId",
					flair: x,
					flairTemplate: C,
					flairTemplateType: t,
					isFlairModOnly: C.modOnly,
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
			const m = Object(i.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(d.b)(e, t)
			});
			t.a = Object(s.b)(m)((function(e) {
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
				m = n("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				p = n.n(m);
			const b = Object(i.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(u.b)(e, t)
			});
			t.a = Object(s.b)(b)((function(e) {
				var t;
				return r.a.createElement("div", {
					className: Object(a.a)(p.a.container, e.className, {
						[p.a.small]: e.small
					})
				}, r.a.createElement(d.a, {
					className: Object(a.a)(p.a.token, {
						[p.a.small]: e.small
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
					title: c,
					textWrapperClassName: u
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
				}), o ? r.a.createElement(d, null, o) : r.a.createElement(d, null), r.a.createElement(l, {
					className: u
				}, r.a.createElement("div", {
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
					className: Object(s.a)(a.a.tooltip, t.className, {
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/componentSizes.ts"),
				c = n("./src/reddit/contexts/NavbarExp.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/components/JumpToContent/index.m.less"),
				u = n.n(l);
			const m = Object(r.createContext)(null),
				p = Object(r.createContext)(null);
			class b extends s.a.Component {
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
					return s.a.createElement(m.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, s.a.createElement(p.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const h = a.f + 10,
				f = s.a.memo(() => {
					const [e, t] = Object(r.useState)("-500px"), n = Object(r.useContext)(c.a);
					return s.a.createElement(m.Consumer, null, r => r && s.a.createElement("div", {
						className: Object(i.a)(u.a.wrapper, {
							[u.a.wrapperExp]: n
						}),
						"data-testid": "jump-to-content"
					}, s.a.createElement(d.s, {
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
							r.focus(), r.scrollIntoView(), window.scrollBy(0, -h)
						}
					}, o.fbt._("Jump to content", null, {
						hk: "2zWOmQ"
					})), s.a.createElement("div", {
						className: Object(i.a)(u.a.rightBorder, {
							[u.a.rightBorderExp]: n
						})
					})))
				}),
				g = s.a.memo(() => s.a.createElement(p.Consumer, null, e => s.a.createElement("div", {
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
				return x
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
				m = n("./src/higherOrderComponents/asModal/index.tsx"),
				p = n("./src/reddit/actions/modal.ts"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/layout/row/Inline/index.tsx"),
				f = n("./src/reddit/layout/row/RightAlign/index.tsx"),
				g = n("./src/reddit/components/MarkdownHelp/index.m.less"),
				C = n.n(g),
				_ = n("./src/lib/lessComponent.tsx");
			const x = "Markdown_Help__Modal",
				E = _.a.wrapped(h.a, "Section", C.a),
				v = _.a.div("Container", C.a),
				O = _.a.table("Table", C.a),
				y = _.a.p("P", C.a);
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
						className: C.a.helpTable
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
					}))), s.a.createElement("tr", null, s.a.createElement(d.p, null, s.a.createElement(d.j, null, `>!${u}!<`)), s.a.createElement(d.p, null, s.a.createElement(l.a, null, u)))), s.a.createElement(y, null, o.fbt._("Check the {=commenting wiki page} for more help", [o.fbt._param("=commenting wiki page", s.a.createElement(d.a, {
						href: "https://www.reddit.com/wiki/commenting"
					}, o.fbt._("commenting wiki page", null, {
						hk: "25UBE"
					})))], {
						hk: "1J9oBy"
					}))), s.a.createElement(E, null, s.a.createElement(f.a, null, s.a.createElement(b.k, {
						onClick: this.props.closeModal,
						"data-redditstyle": !0
					}, o.fbt._("Close", null, {
						hk: "4gbyAA"
					})))))
				}
			}
			const S = Object(i.b)(null, (e, t) => ({
				closeModal: () => e(Object(p.i)(x))
			}))(k);
			t.a = Object(m.a)(Object(u.c)(S))
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
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj",
				ConfirmButton: "JZC61-VzVuaiHdWuRUiSC",
				confirmButton: "JZC61-VzVuaiHdWuRUiSC"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "n", (function() {
				return h
			})), n.d(t, "p", (function() {
				return f
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "m", (function() {
				return _
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "k", (function() {
				return v
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "q", (function() {
				return k
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "l", (function() {
				return j
			})), n.d(t, "t", (function() {
				return P
			})), n.d(t, "u", (function() {
				return T
			})), n.d(t, "r", (function() {
				return w
			})), n.d(t, "a", (function() {
				return I
			})), n.d(t, "s", (function() {
				return D
			})), n.d(t, "c", (function() {
				return N
			}));
			var o = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/Input/ModalInput.tsx"),
				d = n("./src/reddit/icons/svgs/Close/index.tsx"),
				l = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const p = r.a.wrapped(d.a, "CloseIcon", u.a),
				b = r.a.section("ModalBody", u.a),
				h = r.a.section("ModalPostPreview", u.a),
				f = r.a.p("ModalText", u.a),
				g = r.a.div("ModalSmallText", u.a),
				C = r.a.div("ModalDescriptionText", u.a),
				_ = r.a.div("ModalMetaText", u.a),
				x = r.a.label("ModalFormItem", u.a),
				E = r.a.wrapped(c.a, "ModalInput", u.a),
				v = r.a.label("ModalInputLabel", u.a),
				O = r.a.footer("ModalFooter", u.a),
				y = r.a.header("ModalHeader", u.a),
				k = r.a.div("ModalTitle", u.a),
				S = r.a.div("ModalAnnotation", u.a),
				j = r.a.div("ModalMain", u.a),
				P = r.a.textarea("TextArea", u.a),
				T = r.a.wrapped(a.k, "WarningButton", u.a),
				w = r.a.wrapped(a.k, "PrimaryButton", u.a),
				I = r.a.wrapped(a.n, "CancelButton", u.a),
				D = r.a.wrapped(a.q, "RemoveButton", u.a),
				N = ({
					className: e,
					...t
				}) => i.a.createElement(a.s, m({
					kind: a.a.Button,
					priority: a.b.Primary,
					className: Object(o.a)(u.a.ConfirmButton, e)
				}, t))
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
				return E
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
				m = n("./src/reddit/controls/Dropdown/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/Row.tsx"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/selectors/tooltip.ts"),
				f = n("./src/reddit/components/OverflowMenu/index.m.less"),
				g = n.n(f);
			const C = d.a.wrapped(m.a, "_Dropdown", g.a),
				_ = Object(u.a)(C),
				x = d.a.button("MenuButton", g.a),
				E = d.a.wrapped(p.b, "DropdownRow", g.a),
				v = Object(a.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(h.b)(t)(e)
				}),
				O = Object(i.b)(v, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				y = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = O(e => s.a.createElement(x, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": o.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[g.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: y(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : s.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: g.a.MenuIcon
			}), s.a.createElement(_, {
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
				return d
			}));
			var o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/components/HumanDate/index.tsx"),
				s = n("./src/lib/timeUntil/index.ts"),
				i = n("./node_modules/react/index.js"),
				a = n.n(i);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return a.a.createElement("span", {
					className: e.className
				}, t ? c._("Voting closed {timeAgo}", [c._param("timeAgo", a.a.createElement(r.d, {
					seconds: e.poll.endsAt / o.Pb
				}))], {
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
		"./src/reddit/components/PollCreator/EndDatePicker/useEndDatePicker.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/lib/timezone/index.ts"),
				r = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/utils.ts"),
				s = n("./src/reddit/components/PollCreator/EndDatePicker/utils.ts");

			function i(e, t) {
				var n;
				const {
					date: i,
					time: a
				} = Object(s.a)(e), c = Object(o.b)(), d = c ? Object(o.d)(c) : null, l = new Date, {
					minDate: u,
					minTime: m,
					formattedMinDatetime: p
				} = Object(s.c)(l), b = Object(r.a)(), h = Object(s.d)({
					date: u,
					time: m
				});
				return {
					date: i,
					time: a,
					timeZoneAbbr: null !== (n = null == d ? void 0 : d.abbreviation) && void 0 !== n ? n : "",
					onChange: e => {
						Object.values(e).every(e => e.length) && t(Object(s.d)({
							date: i,
							time: a,
							...e
						}))
					},
					maxDate: b,
					minDate: u,
					minTime: m,
					fullMinDatetime: h,
					formattedMinDatetime: p
				}
			}
		},
		"./src/reddit/components/PollCreator/EndDatePicker/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return d
			}));
			var o = n("./src/lib/timezone/index.ts"),
				r = n("./src/reddit/helpers/scheduledPosts/index.ts");
			const s = () => {
					const e = new Date;
					return e.setDate(e.getDate() + 3), e
				},
				i = e => {
					const [t, n] = Object(r.i)(Object(o.g)(e));
					return {
						date: t,
						time: n
					}
				},
				a = ({
					date: e,
					time: t
				}) => new Date(`${e}T${t}`),
				c = e => e.toLocaleString("en-US", {
					month: "numeric",
					day: "numeric",
					year: "numeric",
					hour: "numeric",
					minute: "2-digit",
					hour12: !0
				}),
				d = e => {
					const t = new Date(e);
					t.setHours(t.getHours() + 1);
					const {
						date: n,
						time: o
					} = i(t);
					return {
						minDate: n,
						minTime: o,
						formattedMinDatetime: c(t)
					}
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
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/constants/keycodes.ts"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/controls/Input/index.tsx"),
				f = n("./src/reddit/icons/svgs/Close/index.tsx"),
				g = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				C = n("./src/reddit/icons/svgs/Search/index.tsx"),
				_ = n("./src/reddit/layout/row/Inline/index.tsx"),
				x = n("./src/reddit/models/PostCreationForm/index.ts"),
				E = n("./src/reddit/selectors/postCollection.ts"),
				v = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				O = n("./src/reddit/components/HumanDate/index.tsx"),
				y = n("./src/reddit/helpers/name/index.ts"),
				k = n("./src/reddit/models/Subreddit/index.ts"),
				S = n("./src/reddit/models/User/index.ts"),
				j = n("./src/reddit/selectors/subreddit.ts"),
				P = n("./src/reddit/selectors/user.ts"),
				T = n("./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less"),
				w = n.n(T),
				I = n("./src/lib/lessComponent.tsx");
			const {
				fbt: D
			} = n("./node_modules/fbt/lib/FbtPublic.js"), N = I.a.div("Container", w.a), M = I.a.h2("PostTitle", w.a), R = I.a.div("MetaLine", w.a), L = I.a.span("SubredditName", w.a), A = I.a.time("InfoSpan", w.a), F = Object(c.c)({
				subreddit: (e, {
					collection: {
						subredditId: t
					}
				}) => t ? Object(j.Q)(e, {
					subredditId: t
				}) : void 0,
				user: P.k
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
					} = this.props, r = t && Object(k.h)(t) && n ? Object(y.d)(Object(S.e)(n)) : t ? t.displayText : "", s = e.postIds.length;
					return i.a.createElement(N, {
						onClick: this.onClick,
						className: w.a.container
					}, i.a.createElement(M, {
						"data-redditstyle": !0
					}, e.title), i.a.createElement(R, {
						"data-redditstyle": !0
					}, r && i.a.createElement(L, {
						"data-redditstyle": !0
					}, r), r && i.a.createElement(v.b, null), i.a.createElement(A, null, D._({
						"*": "{number of posts} posts",
						_1: "1 post"
					}, [D._plural(s, "number of posts")], {
						hk: "1Uy96U"
					})), i.a.createElement(v.b, null), i.a.createElement(A, null, D._("created {time}", [D._param("time", i.a.createElement(O.d, {
						seconds: e.createdAtUTC
					}))], {
						hk: "2cUc5m"
					}))), o && i.a.createElement("div", {
						className: w.a.onHoverActionText
					}, i.a.createElement("span", null, o)))
				}
			}
			var U = Object(a.b)(F)(B),
				W = n("./src/reddit/helpers/trackers/postCollection.ts"),
				G = n("./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less"),
				V = n.n(G);
			const H = `${o.a.assetPath}/img/snoo-drafts.png`,
				K = I.a.div("TopRow", V.a),
				q = I.a.div("TitleRow", V.a),
				z = I.a.div("DetailsContainer", V.a),
				Q = I.a.wrapped(_.a, "ButtonRow", V.a),
				J = I.a.div("CloseWrapper", V.a),
				Y = I.a.wrapped(f.a, "Close", V.a),
				Z = I.a.div("Empty", V.a),
				X = I.a.img("EmptyImage", V.a),
				$ = I.a.p("EmptyText", V.a),
				ee = I.a.div("FilterWrapper", V.a),
				te = I.a.wrapped(h.a, "FilterInput", V.a),
				ne = I.a.wrapped(C.a, "SearchIcon", V.a),
				oe = I.a.wrapped(g.a, "PlusIcon", V.a),
				re = I.a.wrapped(b.o, "CreateCollectionButton", V.a),
				se = Object(l.a)((e, t) => {
					const n = t.toLowerCase();
					return e.filter(e => e.title.toLowerCase().includes(n))
				}),
				ie = Object(c.c)({
					collections: E.v
				}),
				ae = Object(a.b)(ie, (e, {
					postId: t,
					isOverlay: n
				}) => ({
					onOpenCreateCollectionModal: () => {
						let o = x.b;
						t && (o = Object(x.u)(t, !!n)), e(Object(u.y)(o))
					}
				}));
			class ce extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						filterStr: ""
					}, this.close = () => {
						this.props.sendEvent(Object(W.c)()), this.props.onClose()
					}, this.handleEscapeKey = e => {
						e.keyCode === p.a.Escape && this.close()
					}, this.handleCreateCollectionClicked = () => {
						this.props.onOpenCreateCollectionModal(), this.props.sendEvent(Object(W.j)())
					}, this.handleCollectionSelected = e => {
						this.props.onSelectCollection(e), this.props.sendEvent(Object(W.q)())
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
					document.addEventListener("keydown", this.handleEscapeKey), this.props.sendEvent(Object(W.d)())
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				renderNoCollections() {
					return i.a.createElement(Z, null, i.a.createElement(X, {
						src: H
					}), i.a.createElement($, null, r.fbt._("Your collections will live here", null, {
						hk: "FCxWg"
					})))
				}
				renderNoFilterMatches() {
					return i.a.createElement(Z, null, i.a.createElement($, null, r.fbt._("No collection matching filter", null, {
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
						className: V.a.wrapper,
						"data-redditstyle": !0
					}, i.a.createElement(K, null, i.a.createElement(q, {
						"data-redditstyle": !0
					}, t || r.fbt._("My collections", null, {
						hk: "3yKovS"
					}), i.a.createElement(J, {
						onClick: this.close
					}, i.a.createElement(Y, {
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
			const de = Object(d.a)(ae(Object(m.c)(ce)));
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
				isSubRec: "_10YwpQ5TofUedjLm5Gxek4",
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
				m = n("./src/reddit/constants/postCreation.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/controls/ErrorText/index.tsx"),
				h = n("./src/reddit/controls/Input/index.tsx"),
				f = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = n("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				C = n("./src/reddit/icons/svgs/Close/index.tsx"),
				_ = n("./src/reddit/layout/row/Inline/index.tsx"),
				x = n("./src/reddit/selectors/postCollection.ts"),
				E = n("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less"),
				v = n.n(E),
				O = n("./src/lib/lessComponent.tsx");
			const y = O.a.div("Container", v.a),
				k = O.a.div("Content", v.a),
				S = O.a.div("TitleRow", v.a),
				j = O.a.div("Details", v.a),
				P = O.a.wrapped(u.g, "Footer", v.a),
				T = O.a.wrapped(p.n, "CancelButton", v.a),
				w = O.a.div("CloseWrapper", v.a),
				I = O.a.wrapped(C.a, "CloseIcon", v.a),
				D = O.a.label("Label", v.a),
				N = O.a.wrapped(h.a, "TitleInput", v.a),
				M = O.a.wrapped(g.a, "AddCollectionIcon", v.a),
				R = O.a.wrapped(p.k, "PrimaryActionButton", v.a),
				L = O.a.wrapped(f.a, "LoadingIcon", v.a),
				A = O.a.wrapped(b.b, "ErrorText", v.a),
				F = Object(a.c)({
					collection: x.q,
					error: x.c,
					isPending: x.g
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
						hk: "4yMsMq"
					});
					return s.a.createElement(y, null, s.a.createElement(w, {
						onClick: this.props.onCancel
					}, s.a.createElement(I, null)), s.a.createElement(k, null, r && s.a.createElement(s.a.Fragment, null, s.a.createElement(S, null, s.a.createElement(M, null), o.fbt._("Create a collection", null, {
						hk: "3ndxk5"
					})), s.a.createElement(j, null, o.fbt._("Group posts into one feed. Create a series of events or just a group of random things. Make something awesome!", null, {
						hk: "2eCAQw"
					}))), s.a.createElement(D, null, r ? o.fbt._("Give a title for your collection", null, {
						hk: "Uaqbe"
					}) : o.fbt._("Edit title", null, {
						hk: "1jzweg"
					}), s.a.createElement(N, {
						maxLength: m.e,
						onChange: this.onTitleChange,
						placeholder: o.fbt._("Enter title", null, {
							hk: "3B0iRI"
						}),
						value: this.state.collectionTitle
					}))), s.a.createElement(P, null, s.a.createElement(_.a, null, s.a.createElement(T, {
						onClick: this.props.onCancel
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(R, {
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
				controlRow: "i0kJNtq5ma1uzbOX9_mM4",
				SubredditRec: "_1tgC4BQSzljd9viPIEvxd3",
				subredditRec: "_1tgC4BQSzljd9viPIEvxd3"
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
				m = n("./src/reddit/components/PostCreationForm/Prompt/index.tsx"),
				p = n("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				b = n("./src/reddit/constants/keycodes.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = n("./src/reddit/models/PostCreationForm/index.ts"),
				C = n("./src/reddit/selectors/activeModalId.ts"),
				_ = n("./src/reddit/selectors/editorContent.ts"),
				x = n("./src/reddit/components/PostCreationForm/MarkdownEditor/index.m.less"),
				E = n.n(x),
				v = n("./src/lib/lessComponent.tsx");
			const O = v.a.wrapped(f.a, "LoadingIcon", E.a),
				y = ({
					isFilled: e,
					...t
				}) => s.a.createElement(O, t),
				k = v.a.span("ModeDescription", E.a),
				S = v.a.div("ModeWrapper", E.a),
				j = v.a.wrapped(d.a, "MarkdownHelpButton", E.a),
				P = v.a.div("Toolbar", E.a),
				T = Object(a.c)({
					activeModalId: C.a,
					isConverting: e => Object(_.a)(e)
				}),
				w = Object(i.b)(T, (e, t) => ({
					onChange: n => {
						e(Object(c.c)(n)), t.onChange && t.onChange(n)
					},
					helpModalToggled: () => e(Object(c.y)(u.b)),
					switchToRTEModalToggled: () => e(Object(c.y)(m.a.SWITCH_TO_RTE_MODAL_ID))
				}));
			class I extends s.a.Component {
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
						(t || n) && o === b.a.Enter && this.props.onSubmit()
					}, this.handleSwitchModeClick = () => {
						this.props.value ? this.props.switchToRTEModalToggled() : this.props.onSwitchEditorMode(g.i.RICH_TEXT, this.props.value)
					}, this.handleSwitchToRTEConfirm = () => {
						this.props.switchToRTEModalToggled(), this.props.onSwitchEditorMode(g.i.RICH_TEXT, this.props.value)
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
					}, s.a.createElement(P, null, s.a.createElement(S, null, s.a.createElement(k, null, o.fbt._("Markdown", null, {
						hk: "42KuwU"
					})), s.a.createElement(j, {
						onClick: this.props.helpModalToggled
					})), s.a.createElement(D, {
						isConverting: t,
						onClick: this.handleSwitchModeClick
					})), s.a.createElement(p.a, {
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
					})), this.props.activeModalId === u.b && s.a.createElement(u.a, null), this.props.activeModalId === m.a.SWITCH_TO_RTE_MODAL_ID && s.a.createElement(m.b, {
						modalId: m.a.SWITCH_TO_RTE_MODAL_ID,
						onCancel: this.props.switchToRTEModalToggled,
						onConfirm: this.handleSwitchToRTEConfirm
					}))
				}
			}
			const D = s.a.memo(({
				isConverting: e,
				onClick: t
			}) => {
				const n = o.fbt._("Switch to Fancy Pants Editor", null, {
					hk: "1AKY7t"
				});
				return s.a.createElement(h.s, {
					priority: h.b.Plain,
					size: h.c.XS,
					onClick: t,
					Icon: e ? y : void 0,
					text: n
				})
			});
			t.a = w(I)
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
				createPostHeader: "_1HWpiNu6dkOnZixxwDYTVJ",
				isSubredditRec: "_3VA7_aIOtAXL0OdVGez50V"
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
				m = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less"),
				p = n.n(m),
				b = n("./src/lib/lessComponent.tsx");
			const h = b.a.wrapped(c.k, "PrimaryButton", p.a),
				f = b.a.wrapped(i.p, "ModalText", p.a);
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
					return r.a.createElement(i.e, null, r.a.createElement(i.i, null, r.a.createElement(u.a, null, r.a.createElement(i.q, null, this.props.titleText), r.a.createElement(l.a, {
						onClick: this.props.onClose
					}, r.a.createElement(i.b, null)))), r.a.createElement(i.l, null, r.a.createElement(f, null, this.props.bodyText)), r.a.createElement(i.g, null, r.a.createElement(i.a, {
						onClick: this.props.onSecondaryAction
					}, t ? r.a.createElement(d.a, {
						sizePx: 16
					}) : this.props.secondaryButtonText), r.a.createElement(h, {
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
			class m extends i.a.PureComponent {
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
			t.b = m
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
			const m = u.a.div("Container", l.a),
				p = u.a.select("Select", l.a),
				b = u.a.span("Delimiter", l.a),
				h = 2018,
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
			class C extends i.a.PureComponent {
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
					return i.a.createElement(m, {
						className: this.props.className
					}, i.a.createElement(p, {
						onChange: this.onChangeMonth,
						value: t
					}, c()(12).map(e => i.a.createElement("option", {
						key: e,
						value: e
					}, f(e)))), i.a.createElement(b, null, "/"), i.a.createElement(p, {
						onChange: this.onChangeDay,
						value: n
					}, c()(1, 32).map(e => i.a.createElement("option", {
						key: e,
						value: e
					}, ("0" + e).slice(-2)))), i.a.createElement(b, null, "/"), i.a.createElement(p, {
						onChange: this.onChangeYear,
						value: e
					}, c()(h, h + 10).map(e => i.a.createElement("option", {
						key: e,
						value: e
					}, e))))
				}
			}
			var _ = C,
				x = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.m.less"),
				E = n.n(x);

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
				y = u.a.input("Input", E.a);

			function k(e) {
				return O() ? i.a.createElement(y, v({
					type: "date"
				}, e, {
					onChange: t => e.onChange(t.target.value)
				})) : i.a.createElement(_, e)
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
				m = n("./src/lib/lessComponent.tsx");
			const p = m.a.wrapped(d.a, "Container", u.a),
				b = m.a.input("Input", u.a),
				h = m.a.span("Delimiter", u.a),
				f = e => ("0" + e).slice(-2),
				g = (e, t) => {
					const n = +e.slice(-2);
					if (Number.isInteger(n)) return n > t ? 0 : n
				};
			class C extends i.a.PureComponent {
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
					return i.a.createElement(p, {
						className: this.props.className,
						isFocused: e
					}, i.a.createElement(b, {
						type: "number",
						onChange: this.onChangeHour,
						onFocus: this.onHourInputFocus,
						onBlur: this.onHourInputBlur,
						value: f(this.state.hour)
					}), i.a.createElement(h, null, ":"), i.a.createElement(b, {
						type: "number",
						onChange: this.onChangeMinute,
						onFocus: this.onMinuteInputFocus,
						onBlur: this.onMinuteInputBlur,
						value: f(this.state.minute)
					}))
				}
			}
			var _ = C,
				x = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.m.less"),
				E = n.n(x);

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
				y = m.a.input("TimeInput", E.a);

			function k(e) {
				return O() ? i.a.createElement(y, v({
					type: "time"
				}, e, {
					onChange: t => e.onChange(t.target.value)
				})) : i.a.createElement(_, e)
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
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/controls/RadioInput/index.tsx"),
				h = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				f = n("./src/reddit/helpers/scheduledPosts/index.ts"),
				g = n("./src/reddit/helpers/trackers/postEvent.ts"),
				C = n("./src/reddit/icons/svgs/Clear/index.tsx"),
				_ = n("./src/reddit/layout/row/Inline/index.tsx"),
				x = n("./src/reddit/models/PostCreationForm/index.ts"),
				E = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.tsx"),
				v = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.tsx"),
				O = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.tsx"),
				y = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/index.m.less"),
				k = n.n(y);
			const S = 240,
				j = () => {
					const e = new Date;
					e.setMinutes(60);
					const t = Object(d.g)(e);
					return e.setMinutes(e.getMinutes() + S), {
						startDate: t,
						endDate: Object(d.g)(e),
						submitTime: x.j.Now,
						timezoneName: Object(d.b)() || d.a
					}
				},
				P = c.a.div("Container", k.a),
				T = c.a.div("Content", k.a),
				w = c.a.div("TitleRow", k.a),
				I = c.a.hr("Hr", k.a),
				D = c.a.wrapped(v.a, "TimeInput", k.a),
				N = c.a.div("TimeSelectionRow", k.a),
				M = c.a.div("RadioOptionContent", k.a),
				R = c.a.span("OptionDetails", k.a),
				L = c.a.wrapped(b.a, "RadioInput", k.a),
				A = c.a.wrapped(h.a, "RadioOption", k.a),
				F = c.a.span("Delimiter", k.a),
				B = c.a.wrapped(l.g, "Footer", k.a),
				U = c.a.wrapped(p.n, "CancelButton", k.a),
				W = c.a.wrapped(p.n, "DeleteButton", k.a),
				G = c.a.div("ErrorMessage", k.a),
				V = c.a.wrapped(C.a, "ClearIcon", k.a);
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
						return s < (this.currentTimezone === this.state.timezoneName ? new Date : new Date(Date.now() - a.A)) ? o.fbt._("Event start time needs to be in the future", null, {
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
						value: x.j.Now
					}, s.a.createElement(M, null, s.a.createElement("span", null, o.fbt._("Submit post now", null, {
						hk: "2ueTnc"
					})), s.a.createElement(R, null, o.fbt._("Submitting post before your event allows people to follow your event and come back at the event time", null, {
						hk: "3LTavv"
					})))), s.a.createElement(A, {
						showButton: !0,
						value: x.j.AtEventTime
					}, s.a.createElement(M, null, s.a.createElement("span", null, this.getSubmitAtLabel()), s.a.createElement(R, null, o.fbt._("This post will be editable and hidden from people visiting your community until the event starts.", null, {
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
					return s.a.createElement(P, null, s.a.createElement(T, null, s.a.createElement(w, null, o.fbt._("When is the event?", null, {
						hk: "2fTD7f"
					})), s.a.createElement(N, null, o.fbt._("{start time}{to}{end time}", [o.fbt._param("start time", s.a.createElement("fieldset", null, s.a.createElement("legend", null, o.fbt._("Start time", null, {
						hk: "3nqplI"
					})), s.a.createElement(E.a, {
						max: this.maxDate,
						onChange: this.onStartDateChange,
						value: this.state.startDate
					}), s.a.createElement(D, {
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
					})), s.a.createElement(E.a, {
						max: this.maxDate,
						onChange: this.onEndDateChange,
						value: this.state.endDate
					}), s.a.createElement(D, {
						onChange: this.onEndTimeChange,
						value: this.state.endTime
					})))], {
						hk: "3MRWfF"
					})), s.a.createElement("div", null, s.a.createElement("label", null, o.fbt._("Time zone", null, {
						hk: "3F7Bko"
					}), s.a.createElement(O.a, {
						selectedTimezoneName: this.state.timezoneName,
						onChange: this.onTimezoneChange
					}))), e && s.a.createElement(s.a.Fragment, null, s.a.createElement(I, null), s.a.createElement("fieldset", null, s.a.createElement("legend", null, o.fbt._("When do you want to submit this post?", null, {
						hk: "3kBgxg"
					})), this.renderSubmitTimeRadio()))), s.a.createElement(B, null, s.a.createElement(_.a, null, this.props.schedule && this.props.shouldShowDeleteButton && s.a.createElement(W, {
						onClick: this.onDeleteButtonClick
					}, s.a.createElement(V, null), o.fbt._("Clear", null, {
						hk: "npkgK"
					})), s.a.createElement(U, {
						onClick: this.onCancelButtonClick
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(p.k, {
						onClick: this.onApplyClick,
						disabled: !!t
					}, o.fbt._("Apply", null, {
						hk: "2TE8JD"
					}))), t && s.a.createElement(G, null, t)))
				}
			}
			t.default = Object(i.a)(Object(m.c)(H))
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
				row: "_3fd4Ceu6mb8NI6WVk0Yv5c",
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
				postingGuidelines: "_2vcPDTxC76PPQ70AdMkN0C",
				isSubredditRec: "_1JYtueM9ArhhK0dI1oOwCA",
				postToTitle: "_1Kxdp9wMJTKjsFvSZoeDzP"
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
				m = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				p = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				b = n("./src/reddit/components/FlairPreview/index.tsx"),
				h = n("./src/reddit/components/FlairSearch/index.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/models/Flair/index.ts"),
				C = n("./src/reddit/selectors/moderatorPermissions.ts"),
				_ = n("./src/reddit/selectors/postFlair.ts"),
				x = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/reddit/selectors/telemetry.ts"),
				v = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				O = n("./src/reddit/components/PostFlairPicker/index.m.less"),
				y = n.n(O);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(o || (o = {}));
			const k = (e, t = !1, n = o.UNSET) => `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${n}]`,
				S = Object(c.c)({
					flairData: _.d,
					subreddit: x.Q,
					isMod: (e, t) => !!Object(C.m)(e, t)
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
						subreddit: Object(E.subredditById)(t, this.props.subredditId)
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
					return i.a.createElement(p.a, {
						className: n
					}, i.a.createElement(m.a, {
						onClosePressed: e.closeModal,
						title: r.fbt._("Select {subredditName} flair", [r.fbt._param("subredditName", a)], {
							hk: "1lDMWS"
						})
					}), i.a.createElement(b.a, {
						flair: t,
						flairTemplateType: g.d.LinkFlair,
						placeholderText: r.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), i.a.createElement(h.a, {
						flair: t,
						flairTemplateType: g.d.LinkFlair,
						subredditId: s.id,
						templates: c,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), i.a.createElement("div", {
						className: y.a.buttonsRow
					}, i.a.createElement(f.k, {
						disabled: !l,
						onClick: this.onApply
					}, r.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), i.a.createElement(f.n, {
						className: y.a.clearButton,
						onClick: this.onClear
					}, r.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const P = Object(a.b)(S, (e, t) => ({
				closeModal: () => e(Object(u.i)(t.modalId))
			}))(j);
			t.a = Object(l.a)(Object(d.c)(P))
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
				return D
			})), n.d(t, "a", (function() {
				return q
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
				m = n("./src/reddit/constants/experiments.ts"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/controls/OutboundLink/index.tsx"),
				h = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				f = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				g = n("./src/reddit/helpers/flair.ts"),
				C = n("./src/reddit/helpers/path/index.ts"),
				_ = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				E = n("./src/reddit/models/Flair/index.ts"),
				v = n("./src/reddit/models/Media/index.ts"),
				O = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				y = n("./src/lib/getShortenedLink.ts"),
				k = n("./src/reddit/components/FlairWrapper/index.tsx"),
				S = n("./node_modules/fbt/lib/FbtPublic.js"),
				j = n("./src/lib/prettyPrintNumber/index.ts"),
				P = n("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				T = n("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				w = n.n(T);
			const I = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var D, N = Object(i.b)(I)((function(e) {
					const {
						poll: t,
						resultsByVoters: n
					} = e, o = n ? n.totalVotes : "0";
					return s.a.createElement("div", {
						className: Object(l.a)(e.className, w.a.proposalMetaData)
					}, s.a.createElement("span", null, S.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [S.fbt._param("count", Object(j.a)(o)), S.fbt._plural(parseInt(o))], {
						hk: "4rP1VK"
					})), t && s.a.createElement(P.a, {
						className: w.a.proposalExpiry,
						poll: t
					}))
				})),
				M = n("./src/reddit/components/SEOTitle/index.tsx"),
				R = n("./src/reddit/selectors/experiments/econ/index.ts"),
				L = n("./src/reddit/selectors/user.ts"),
				A = n("./src/reddit/components/PostTitle/index.m.less"),
				F = n.n(A),
				B = n("./src/config.ts"),
				U = n("./src/reddit/hooks/useClickSourceData.ts"),
				W = n("./src/reddit/hooks/useExperimentVariant.ts"),
				G = n("./src/reddit/hooks/usePostContext.ts"),
				V = n("./src/reddit/hooks/useTheme.ts"),
				H = n("./src/telemetry/models/Outbound.ts");

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(D || (D = {}));
			const q = ({
					size: e,
					titleColor: t,
					titleType: n,
					nowrap: o,
					children: r,
					className: i,
					redditStyle: a
				}) => {
					const c = Object(V.a)();
					let d = "";
					switch (e) {
						case D.ExtraLarge:
							d = F.a.ExtraLarge;
							break;
						case D.Large:
							d = F.a.Large;
							break;
						case D.Medium:
							d = F.a.Medium;
							break;
						case D.Small:
							d = F.a.Small;
							break;
						case D.ExtraSmall:
							d = F.a.ExtraSmall
					}
					return s.a.createElement("div", {
						className: Object(l.a)(F.a.Title, i, d, {
							[F.a.isNoWrap]: o
						}),
						style: {
							"--posttitletextcolor": t || Object(O.a)({
								redditStyle: a,
								theme: c
							}).titleText
						}
					}, n ? s.a.createElement(M.b, {
						type: n
					}, r) : r)
				},
				z = ({
					className: e,
					disableVisited: t,
					titleColor: n,
					children: o,
					...r
				}) => s.a.createElement(a.a, K({}, r, {
					className: Object(l.a)(e, F.a.styledLink, {
						[F.a.isVisitedEnabled]: !t
					})
				}), o),
				Q = ({
					disableVisited: e,
					nowrap: t,
					className: n,
					children: o
				}) => s.a.createElement("div", {
					className: Object(l.a)(F.a.titleContainer, n, {
						[F.a.isNoWrap]: t,
						[F.a.isVisitedEnabled]: !e
					})
				}, o),
				J = Object(c.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(p.q)(e, {
						pageLayer: t
					}),
					shouldOpenPostInNewTab: L.db,
					isTournamentPredictionPostV2: R.v
				}),
				Y = e => {
					const {
						post: t,
						subreddit: n
					} = e, {
						isSponsored: o
					} = t, r = Object(U.a)(), i = Object(W.a)(m.Pc) === m.Tc.Enabled;
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return s.a.createElement(Q, {
						nowrap: e.nowrap
					}, s.a.createElement(Z, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return s.a.createElement(b.b, {
						href: t.source.url,
						isSponsored: o,
						postId: t.id,
						source: t.source
					}, s.a.createElement(Z, e)); {
						const a = t.media && Object(v.G)(t.media) ? Object(_.c)(t.id, n.name) : t.permalink,
							c = e.isCommentPermalink ? Object(C.b)(a) : i ? Object(f.a)(a, void 0, r) : Object(f.a)(a);
						return s.a.createElement(Q, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, o ? ((e, t) => {
							const {
								source: n
							} = Object(d.t)(e, t.imageGalleryCurrentItem);
							return n ? s.a.createElement(b.b, {
								href: n.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: n
							}, s.a.createElement(Z, t)) : s.a.createElement(Z, t)
						})(t, e) : s.a.createElement(z, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: c
						}, s.a.createElement(Z, e)))
					}
				},
				Z = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: n,
						post: o
					} = e;
					let r = e.format ? e.format(o) : o.title;
					n && "string" == typeof r && (r = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(r));
					const i = e.isCommentsPage ? M.a.PostComments : M.a.PostItem;
					return s.a.createElement(q, {
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
				X = e => {
					const {
						hideSourceLink: t,
						post: n
					} = e, {
						isSponsored: o
					} = n, r = e.isCommentsPage ? H.SourceElement.PostLink : H.SourceElement.ListingPostLink, i = !t && !e.isCrosspost && e.size !== D.Large && !n.isSponsored && !(n.media && Object(v.G)(n.media)) && (n.source || n.media && (n.media.type === v.o.GIFVIDEO || n.media.type === v.o.IMAGE || n.media.type === v.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (i) return s.a.createElement(h.a, {
							className: e.outboundLinkClassName,
							href: Object(v.D)(n),
							isSponsored: o,
							postId: n.id,
							source: n.source,
							sourceElement: r
						}, Object(y.a)(n), !n.isSponsored && s.a.createElement(x.a, {
							name: "external_link",
							className: F.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== D.Large && e.size !== D.ExtraLarge) return s.a.createElement(h.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: o,
						postId: n.id,
						source: n.source,
						sourceElement: r
					}, Object(y.a)(n), !n.isSponsored && s.a.createElement(x.a, {
						name: "external_link",
						className: F.a.outboundLinkIcon
					}));
					return null
				};
			class $ extends s.a.Component {
				getDynamicStyleTags() {
					return s.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${F.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(o.c)(.45,Object(O.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(o.c)(.45,this.props.titleColor||Object(O.a)(this.props).titleText,Object(O.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					var e;
					const {
						className: t,
						disableFlair: n,
						flairPosition: o,
						isCommentsPage: r,
						isOverlay: i,
						poll: a,
						post: c,
						showNSFWSpoilerFlairsOnly: d,
						isTournamentPredictionPostV2: u
					} = this.props, m = o === E.b.Left, p = Object(k.b)(c), b = d ? p.filter(e => e.type === E.f.Nsfw || e.type === E.f.Spoiler) : m ? p.filter(e => Object(g.q)(e.type)) : [], h = d ? [] : m ? p.filter(e => !Object(g.q)(e.type)) : p, f = !i && !r, C = !n && b && b.length > 0 && f, _ = !n && h && h.length > 0 && f, x = !(u && (null === (e = c.pollData) || void 0 === e ? void 0 : e.isPrediction));
					return s.a.createElement("div", {
						className: Object(l.a)(F.a.Component, t, c.id)
					}, !d && C && s.a.createElement(k.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), x && s.a.createElement(Y, K({}, this.props, {
						leftFlair: d ? b : void 0
					})), a && s.a.createElement(N, {
						className: F.a.pollMeta,
						pollId: a.id
					}), s.a.createElement(X, this.props), _ && s.a.createElement(k.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), s.a.createElement("div", {
						className: F.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${B.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = s.a.memo((function(e) {
				const t = Object(p.db)(),
					n = Object(p.w)(t),
					o = Object(G.a)(),
					r = Object(i.e)(r => J(r, {
						...o,
						...e,
						isCommentPermalink: n,
						pageLayer: t
					})),
					a = Object(V.a)(),
					c = Object(u.b)();
				return o ? s.a.createElement($, K({
					pageLayer: t,
					isCommentPermalink: n
				}, o, r, e, {
					theme: a,
					sendEvent: c
				})) : null
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
				m = n.n(u),
				p = n("./src/lib/lessComponent.tsx");
			const b = p.a.wrapped(d.a, "Snoo", m.a),
				h = p.a.li("Li", m.a),
				f = p.a.ol("Ol", m.a),
				g = p.a.div("Title", m.a),
				C = Object(a.c)({
					submissionType: l.kb
				});
			t.a = p.a.wrapped(Object(i.b)(C)(e => {
				const {
					className: t,
					submissionType: n
				} = e, r = n === c.Tb.CROSSPOST;
				return s.a.createElement("div", {
					className: t
				}, s.a.createElement(g, null, s.a.createElement(b, null), r ? o.fbt._("Crossposting to Reddit", null, {
					hk: "2ODPDt"
				}) : o.fbt._("Posting to Reddit", null, {
					hk: "8eEIT"
				})), s.a.createElement(f, null, s.a.createElement(h, null, o.fbt._("Remember the human", null, {
					hk: "1x3u5R"
				})), s.a.createElement(h, null, o.fbt._("Behave like you would in real life", null, {
					hk: "3pxfk1"
				})), s.a.createElement(h, null, o.fbt._("Look for the original source of content", null, {
					hk: "1FfUM4"
				})), s.a.createElement(h, null, o.fbt._("Search for duplicates before posting", null, {
					hk: "3Ij1gf"
				})), s.a.createElement(h, null, o.fbt._("Read the community’s rules", null, {
					hk: "3RNQW2"
				})), r && s.a.createElement(h, null, o.fbt._("You must join a community to crosspost there", null, {
					hk: "1YAEPX"
				}))))
			}), "Component", m.a)
		},
		"./src/reddit/components/PostingSidebar/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "itxZANPrH4AAYOj6VgfL9",
				container: "itxZANPrH4AAYOj6VgfL9",
				isOpenAIPilotV1: "xpmGc4AuyuOP6ErObihFx",
				isOpenAiPilotV1: "xpmGc4AuyuOP6ErObihFx"
			}
		},
		"./src/reddit/components/PostingSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(o),
				s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./node_modules/react/index.js"),
				c = n.n(a),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				u = n("./src/reddit/components/IdCard/async.tsx"),
				m = n("./src/reddit/components/SidebarFooter/index.tsx"),
				p = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				b = n("./src/reddit/components/Widgets/PostCollection/index.tsx"),
				h = n("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				f = n("./src/reddit/contexts/PageLayer/index.tsx"),
				g = n("./src/reddit/models/Widgets/index.ts"),
				C = n("./src/reddit/selectors/experiments/postCreationSubRec.ts"),
				_ = n("./src/reddit/selectors/postCreations.ts"),
				x = n("./src/reddit/selectors/profile.ts"),
				E = n("./src/reddit/selectors/subreddit.ts"),
				v = n("./src/reddit/selectors/widgets.ts"),
				O = n("./src/reddit/components/PostingSidebar/PolicyRow/index.tsx"),
				y = n("./src/reddit/components/PostingSidebar/PostingReddiquette/index.tsx"),
				k = n("./src/reddit/components/PostingSidebar/index.m.less"),
				S = n.n(k),
				j = n("./src/lib/lessComponent.tsx");
			const P = Object(s.a)({
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
				T = j.a.div("Container", S.a),
				w = Object(f.u)(),
				I = new Set(["all", "post"]),
				D = Object(l.a)((e, {
					pageLayer: t
				}) => {
					const n = Object(f.r)(e, {
						pageLayer: t
					});
					return n && Object(E.P)(e, {
						subredditId: n.id
					})
				}, e => (e || []).filter(e => I.has(e.kind))),
				N = (e, {
					pageLayer: t
				}) => {
					const n = Object(f.r)(e, {
						pageLayer: t
					});
					return !(!n || !Object(v.d)(e, {
						subredditName: n.name
					}))
				},
				M = Object(l.c)({
					hasIdCardWidgetData: N,
					isCreationPagePending: _.J,
					profile: (e, {
						pageLayer: t,
						subredditOrProfileId: n
					}) => n ? Object(x.p)(e, {
						profileId: n
					}) : Object(f.k)(e, {
						pageLayer: t
					}),
					subreddit: f.r,
					subredditRules: D,
					currentPostCollection: f.g,
					isOpenAIPilotV1: C.e
				}),
				R = Object(d.b)(M),
				L = e => {
					const {
						className: t,
						currentPostCollection: n,
						hasIdCardWidgetData: o,
						isCreationPagePending: r,
						isOpenAIPilotV1: s,
						profile: a,
						subreddit: d,
						subredditRules: l
					} = e, f = o || r;
					return c.a.createElement(T, {
						className: Object(i.a)(t, {
							[S.a.isOpenAIPilotV1]: s
						})
					}, n && c.a.createElement(b.a, {
						collection: n
					}), d && f && c.a.createElement(p.a, null, c.a.createElement(u.a, {
						isSubmissionPage: !0,
						listingName: d.name
					})), a && !d && c.a.createElement(p.a, null, c.a.createElement(P, {
						profileName: a.name,
						isOverlay: !1,
						isSubmissionPage: !0
					})), d && l && c.a.createElement(p.a, null, c.a.createElement(h.a, {
						subredditName: d.name,
						display: g.h.COMPACT,
						rules: l,
						redditStyle: !0
					})), c.a.createElement(y.a, null), c.a.createElement(p.a, null), c.a.createElement(O.a, null), c.a.createElement(m.a, {
						redditStyle: !0
					}))
				};
			t.a = w(R(L))
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
				m = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/components/RequestPendingBanner/index.m.less"),
				b = n.n(p);
			const h = c.a.wrapped(d.a, "Banner", b.a),
				f = Object(i.b)(() => Object(a.c)({
					restrictions: m.n,
					subreddit: u.e
				}));
			t.a = f(({
				restrictions: e,
				subreddit: t
			}) => {
				if (!t) return null;
				const n = e === l.e.Comment ? l.a.Create : l.a.Draft;
				return s.a.createElement(h, {
					subtitle: s.a.createElement("span", {
						className: b.a.Subtitle
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
				m = ({
					isFullHeight: e,
					textAreaRef: t,
					...n
				}) => r.a.createElement(i.a, l({
					className: Object(a.a)(d.a.textareaAutosize, {
						[d.a.mIsFullHeight]: e
					}),
					innerRef: t
				}, n));
			class p extends r.a.Component {
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
					}, r.a.createElement(m, l({}, s, {
						children: !0,
						isFullHeight: !!i,
						textAreaRef: n
					})))
				}
			}
			t.a = p
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
				return m
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
					onClick: e.disabled ? void 0 : e.onClick,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, e.children, e.text && r.a.createElement("span", {
					className: Object(s.a)(c.a.TextWrapper, e.textClassName)
				}, e.text, " ")),
				l = i.a.wrapped(d, "ApproveButton", c.a),
				u = i.a.wrapped(d, "RemoveButton", c.a),
				m = e => r.a.createElement("button", {
					className: Object(s.a)(c.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
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
				m = n.n(u);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = s.a.a("Link", m.a), h = Object(l.c)({
				isNavbarLikeMwebEnabled: d.a
			}), f = Object(i.b)(h), g = Object(c.u)({
				isFrontpage: c.z
			});
			t.a = g(f(e => e.isNavbarLikeMwebEnabled ? e.isFrontpage ? r.a.createElement(a.a, {
				className: m.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, r.a.createElement("div", {
				className: m.a.LinkContainer
			}, r.a.createElement("div", {
				className: m.a.Column
			}, r.a.createElement(b, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, p._("User Agreement", null, {
				hk: "2RA6JL"
			})), r.a.createElement(b, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, p._("Privacy policy", null, {
				hk: "10K04G"
			}))), r.a.createElement("div", {
				className: m.a.Column
			}, r.a.createElement(b, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, p._("Content policy", null, {
				hk: "1DyxZS"
			})), r.a.createElement(b, {
				href: "https://www.redditinc.com/policies/moderator-guidelines"
			}, p._("Moderator Guidelines", null, {
				hk: "2O9otm"
			})))), r.a.createElement("div", {
				className: m.a.Copyright
			}, p._("© {year} Reddit, Inc. All rights reserved.", [p._param("year", (new Date).getFullYear().toString())], {
				hk: "sR7zP"
			}))) : null : r.a.createElement(a.a, {
				className: m.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, r.a.createElement("div", {
				className: m.a.LinkContainer
			}, r.a.createElement("div", {
				className: m.a.Column
			}, r.a.createElement(b, {
				href: "https://www.reddithelp.com"
			}, p._("help", null, {
				hk: "4lyYaD"
			})), r.a.createElement(b, {
				href: "https://www.reddit.com/coins"
			}, p._("Reddit coins", null, {
				hk: "32iMaN"
			})), r.a.createElement(b, {
				href: "https://www.reddit.com/premium"
			}, p._("Reddit premium", null, {
				hk: "RuO3A"
			})), r.a.createElement(b, {
				href: "https://redditgifts.com/"
			}, p._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && r.a.createElement(r.a.Fragment, null, r.a.createElement(b, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, p._("Communities", null, {
				hk: "3CJu37"
			})), r.a.createElement(b, {
				href: "https://www.reddit.com/posts/2020/"
			}, p._("Rereddit", null, {
				hk: "1z3k7C"
			})), r.a.createElement(b, {
				href: "https://www.reddit.com/topics/a-1/"
			}, p._("Topics", null, {
				hk: "349RFt"
			})))), r.a.createElement("div", {
				className: m.a.Column
			}, r.a.createElement(b, {
				href: "https://about.reddit.com"
			}, p._("about", null, {
				hk: "1sqJKs"
			})), r.a.createElement(b, {
				href: "https://about.reddit.com/careers/"
			}, p._("careers", null, {
				hk: "26ABvc"
			})), r.a.createElement(b, {
				href: "https://about.reddit.com/press/"
			}, p._("press", null, {
				hk: "2Qmgdz"
			})), r.a.createElement(b, {
				href: "https://www.redditinc.com/advertising"
			}, p._("advertise", null, {
				hk: "Mt40U"
			})), r.a.createElement(b, {
				href: "http://www.redditblog.com/"
			}, p._("blog", null, {
				hk: "46IQJw"
			})), r.a.createElement(b, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, p._("Terms", null, {
				hk: "4qRzfE"
			})), r.a.createElement(b, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, p._("Content policy", null, {
				hk: "1DyxZS"
			})), r.a.createElement(b, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, p._("Privacy policy", null, {
				hk: "10K04G"
			})), r.a.createElement(b, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, p._("Mod policy", null, {
				hk: "2gYc2T"
			})))), r.a.createElement("div", {
				className: m.a.Copyright
			}, p._("Reddit Inc © {year} . All rights reserved", [p._param("year", (new Date).getFullYear().toString())], {
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
		"./src/reddit/components/StructuredStyles/BladeManager/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class i extends r.a.Component {
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
			var a = Object(s.a)(i);
			t.a = e => r.a.createElement(a, e)
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
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				s = {
					subredditActions: {
						subscribe: () => o.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => o.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => o.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => o.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => o.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => o.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = ({
					type: e,
					key: t
				}) => s[r({
					type: e
				})][t]()
		},
		"./src/reddit/components/TypingIndicators/index.m.less": function(e, t, n) {
			e.exports = {
				justifyCenter: "_1WevNRsphqv7-1U44SSi2a",
				commentComposer: "_1Qf1b13Wfxrwm5CKS9cME2",
				roundCorners: "_3-KjSdkLq0TxR6iPCUMV0a",
				isOverlay: "_3azyTJy_p5TQz2a8drvrCn",
				richTextEditor: "_13Vh8SbdNDl0dufOVZLBRi",
				footerButtons: "_2YOcnzi1qyJFKhP4cPf8dS",
				submitButton: "_1Dto34mvqasf8L9JtRr2Hx",
				formatFillIcon: "_3f2-CZrr2ok_ytt9YSTS7c",
				overflowPopupMenu: "_3mZz56Ei8KgWZSPXH7JrN4",
				typingIndicator: "xQIeDIIVr1yVZYxsz0ozp",
				isDisplayed: "_3SppaUc9TkqJc-zbqJt-3h",
				numUsersTyping: "_3TiTD1rBkrFHlvu6vJ2D_n",
				typingDots: "_3Sck3A9yG3NOFzt_N7zrlr",
				dot: "_1fMgUDC_-k-rdiT8UGZ6j4",
				typingAnimation: "_3Qj9QSvdQ5qft-VPaBowdQ",
				offsetMembersIcons: "CnV1Edi-ImN72TXNKOCUu",
				offsetMemberIcon: "KCCH40yFmIIE1YdtzgwrD"
			}
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
				m = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				p = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				b = n.n(p);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const f = Object(a.c)({
					currentUser: d.k,
					isNightMode: d.X,
					isPresenceUserPrefEnabled: d.P,
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
					className: Object(o.a)(b.a.currentUserIconWrapper, i)
				}, d ? s.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : s.a.createElement(m.b, h({}, a, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && s.a.createElement(l.default, {
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
				m = n("./src/reddit/actions/postCollection/index.ts"),
				p = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				b = n("./src/reddit/components/OverflowMenu/index.tsx"),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/controls/Dropdown/Row.tsx"),
				g = n("./src/reddit/selectors/activeModalId.ts"),
				C = n("./src/reddit/selectors/postCollection.ts"),
				_ = n("./node_modules/reselect/es/index.js"),
				x = n("./src/reddit/helpers/trackers/postCollection.ts"),
				E = n("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less"),
				v = n.n(E),
				O = n("./node_modules/fbt/lib/FbtPublic.js");
			const y = d.a.wrapped(f.b, "DropdownRow", v.a);
			let k;
			const S = Object(g.b)("DELETE_COLLECTION_CONFM_MODAL_ID"),
				j = Object(g.b)("EDIT_POST_COLLECTION_MODAL_ID"),
				P = Object(_.c)({
					createPostUrl: C.d,
					isDeleteConfirmModalOpen: S,
					isEditCollectionModalOpen: j,
					shouldShowCollectionEditOptions: C.s
				}),
				T = Object(a.b)(P, (e, t) => ({
					copyLink: () => e(Object(u.D)(t.permalink)),
					onCreatePost: n => {
						t.shouldShowCreatePost && e(Object(c.b)(n))
					},
					onRemoveCollection: () => e(Object(m.c)(t.collectionId, t.isSubmitPage)),
					onToggleDeleteConfirmModal: () => e(l.i("DELETE_COLLECTION_CONFM_MODAL_ID")),
					onToggleEditModal: async () => {
						k || (k = await Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("editCollectionModal")]).then(n.bind(null, "./src/reddit/components/EditCollectionModal/index.tsx")).then(e => e.EditCollectionModal)), e(l.i("EDIT_POST_COLLECTION_MODAL_ID"))
					}
				}));
			t.a = T(Object(h.c)(e => {
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
					onToggleEditModal: m,
					shouldShowCollectionEditOptions: h,
					shouldShowCreatePost: f,
					targetPosition: g,
					tooltipPosition: C,
					sendEvent: _
				} = e;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement(b.b, {
					className: t,
					dropdownId: `collection-menu-${n}-${f?1:2}`,
					onClick: r.a,
					targetPosition: g,
					tooltipPosition: C
				}, i.a.createElement(y, {
					onClick: o,
					displayText: O.fbt._("Copy collection link", null, {
						hk: "3Rfodz"
					})
				}), h && i.a.createElement(i.a.Fragment, null, i.a.createElement(y, {
					onClick: () => {
						_(Object(x.l)(n)), m()
					},
					displayText: O.fbt._("Edit", null, {
						hk: "1nftDt"
					})
				}), i.a.createElement(y, {
					onClick: () => {
						_(Object(x.k)(n)), u()
					},
					displayText: O.fbt._("Delete collection", null, {
						hk: "2FyIJB"
					})
				}), f && i.a.createElement(y, {
					onClick: () => {
						d(s)
					},
					displayText: O.fbt._("Create post", null, {
						hk: "1v2jHl"
					})
				}))), c && k && i.a.createElement(k, {
					collectionId: n,
					onClose: m,
					onEditSuccess: m
				}), a && i.a.createElement(p.a, {
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
				m = n("./src/reddit/controls/Dropdown/Row.tsx"),
				p = n("./src/reddit/helpers/path/index.ts"),
				b = n("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.m.less"),
				h = n.n(b);
			const f = c.a.wrapped(m.b, "DropdownRow", h.a);
			t.a = e => {
				const {
					isFutureEvent: t,
					onAddEventStartTime: n,
					onEditStartTime: r,
					onStartEventNow: i,
					postPermalink: c,
					shouldShowAddEventStartTime: m,
					targetPosition: b,
					tooltipPosition: h
				} = e;
				return a.a.createElement(u.b, {
					className: e.className,
					dropdownId: e.dropdownId,
					onClick: s.a,
					targetPosition: b,
					tooltipPosition: h
				}, m && n && a.a.createElement(f, {
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
					target: d.d.BLANK,
					rel: d.c,
					isOverlay: !1,
					to: Object(p.b)(c)
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
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = Object(c.c)({
				title: d.pb
			});
			var b = Object(a.b)(p)(e => {
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
					}, m._("Editing", null, {
						hk: "2w5fAf"
					})))
				}),
				h = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				f = n("./src/reddit/actions/postCollection/index.ts"),
				g = n("./src/reddit/selectors/posts.ts"),
				C = n("./src/reddit/components/HumanDate/index.tsx"),
				_ = n("./src/lib/constants/index.ts"),
				x = n("./src/reddit/components/Widgets/PostCollection/PostItem/index.m.less"),
				E = n.n(x),
				v = n("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.tsx"),
				O = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				y = n("./src/reddit/components/Widgets/PostCollection/PostItem/Placeholder.m.less"),
				k = n.n(y);

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
			const {
				fbt: j
			} = n("./node_modules/fbt/lib/FbtPublic.js"), P = ["right", "bottom"], T = ["right", "top"];
			var w = Object(a.b)(() => Object(c.c)({
					post: g.H
				}), (e, t) => ({
					onRemovePostFromCollection: () => e(Object(f.g)(t.collectionId, t.postId))
				}))(e => {
					const {
						post: t,
						onRemovePostFromCollection: n
					} = e;
					return t ? r.a.createElement("div", {
						className: E.a.container
					}, r.a.createElement("div", {
						className: E.a.content
					}, r.a.createElement(h.a, {
						className: E.a.title,
						target: "_blank",
						to: t.permalink
					}, t.title), r.a.createElement("div", {
						className: E.a.metaLine
					}, j._("Posted · {timeAgo}", [j._param("timeAgo", r.a.createElement(C.d, {
						seconds: t.created / _.Pb
					}))], {
						hk: "ZVJpV"
					}))), r.a.createElement(v.a, {
						onRemoveClick: n,
						className: E.a.overflowMenu,
						dropdownId: "collection-widget-item" + t.id,
						postPermalink: t.permalink,
						targetPosition: P,
						tooltipPosition: T
					})) : r.a.createElement(S, {
						className: E.a.container,
						isLoading: !0
					})
				}),
				I = n("./src/reddit/components/Widgets/PostCollection/index.m.less"),
				D = n.n(I);
			const {
				fbt: N
			} = n("./node_modules/fbt/lib/FbtPublic.js"), M = ["right", "bottom"], R = ["right", "top"];
			class L extends r.a.PureComponent {
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
						className: Object(s.a)(e, D.a.container)
					}, r.a.createElement("div", {
						className: D.a.topRow
					}, N._("Collection", null, {
						hk: "1pY1s2"
					}), r.a.createElement(i.a, {
						className: D.a.menuButton,
						collectionId: t.id,
						isSubmitPage: !0,
						permalink: t.permalink,
						targetPosition: M,
						tooltipPosition: R
					})), r.a.createElement("h4", {
						className: D.a.collectionDescription
					}, t.title), r.a.createElement("div", {
						className: D.a.listWrapper
					}, r.a.createElement("div", {
						className: D.a.listContainer
					}, n)), r.a.createElement(b, null))
				}
			}
			t.a = L
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
				cleanStyle: "_12zeaxHNQC7XniG1qunPev",
				RuleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				ruleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				RuleTitle: "tbIApBd2DM_drfZQJjIum",
				ruleTitle: "tbIApBd2DM_drfZQJjIum",
				RuleDescription: "_2QhEclR_DjIrTv_oNU5MMN",
				ruleDescription: "_2QhEclR_DjIrTv_oNU5MMN"
			}
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				c = n("./src/reddit/components/RichTextJson/index.tsx"),
				d = n("./src/reddit/helpers/dom/index.ts"),
				l = n("./src/reddit/icons/fonts/index.tsx"),
				u = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				m = n("./src/reddit/models/Widgets/index.ts"),
				p = n("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				b = n.n(p);
			const h = i.a.div("RuleShortName", b.a),
				f = i.a.div("RuleIndex", b.a),
				g = i.a.div("RuleTitle", b.a),
				C = i.a.div("RuleDescription", b.a),
				_ = i.a.wrapped(a.a, "RawHTMLDisplay", b.a),
				x = {};
			class E extends r.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(d.f)() || this.setState({
							isVisible: !this.state.isVisible
						})
					}, this.state = {
						isVisible: this.shouldShowFullDisplay(e)
					}
				}
				shouldShowFullDisplay(e) {
					return e.display === m.h.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: n,
						shouldShowFullDisplay: o
					} = this, i = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), a = !o(e) && !!i;
					return r.a.createElement(h, {
						className: Object(s.a)({
							[b.a.pointerCursor]: a,
							[b.a.cleanStyle]: e.cleanStyle
						}),
						onClick: o(e) || !i ? void 0 : n
					}, r.a.createElement(u.a, null, r.a.createElement(f, {
						className: Object(s.a)({
							[b.a.cleanStyle]: e.cleanStyle
						})
					}, `${e.humanIndex}.`), r.a.createElement(g, null, `${e.rule.shortName}`), r.a.createElement("div", null, !o(e) && i && r.a.createElement(l.a, {
						name: t.isVisible ? "caret_up" : "caret_down"
					}))), t.isVisible && r.a.createElement(C, {
						className: Object(s.a)({
							[b.a.cleanStyle]: e.cleanStyle
						})
					}, e.rule.descriptionRichText ? r.a.createElement(c.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: x
					}) : e.rule.descriptionHtml ? r.a.createElement(_, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
		},
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				a = n("./src/reddit/components/Widgets/SubredditRules/Rule/index.tsx");
			const c = e => e.rules.length > 0 ? s.a.createElement(i.a, {
				className: e.className,
				styles: e.styles,
				title: o.fbt._("{subredditName} Rules", [o.fbt._param("subredditName", `r/${e.subredditName}`)], {
					hk: "2AwRLk"
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, n) {
				return s.a.createElement(a.a, {
					key: `rule${t.shortName}${t.createdUtc}`,
					rule: t,
					display: e.display,
					humanIndex: n + 1
				})
			}))) : null;
			t.b = e => s.a.createElement(c, {
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
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/widgets.ts"),
				b = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = n("./src/reddit/selectors/experiments/topPosts.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/models/Theme/index.ts"),
				_ = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const x = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(_.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				E = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(_.a)(e).widgetColors.sidebarWidgetHeaderColor,
				v = e => {
					const t = x(e);
					return Object(C.f)(t)
				},
				O = e => {
					const t = E(e);
					return Object(C.f)(t)
				};
			var y = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				k = n.n(y);
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js"), j = Object(u.u)(), P = Object(s.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.n)(e, t) || void 0,
						o = t.redditStyle || Object(f.l)(e, {
							subredditId: n
						}),
						r = Object(g.X)(e);
					return o || r
				},
				nigtmode: g.X,
				subredditId: u.n,
				topPostVariant: h.d
			}));
			class T extends r.a.Component {
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
					return e.backgroundColor = x(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = v(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = E(this.props), e.color = e.fill = O(this.props), e
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
					} = this.props, p = n ? k.a.widgetContentOnly : k.a.widgetContent, b = !o && this.props.styles, h = b ? this.getWidgetBackgroundStyles() : {}, f = b ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(a.a)(t, k.a.widgetBackground, {
							[k.a.redditStyle]: o,
							[k.a.clickable]: !!i,
							[k.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": o,
						onClick: i,
						style: h
					}, c && r.a.createElement("div", {
						className: k.a.widgetHeader,
						style: f
					}, r.a.createElement("div", {
						className: Object(a.a)(k.a.widgetTitle, l)
					}, r.a.createElement(d.b, {
						type: d.a.Widget
					}, c)), s), r.a.createElement("div", {
						className: Object(a.a)(p, {
							[k.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? u : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(m.q, {
						className: k.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, S._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = j(P(Object(c.a)(Object(l.c)(T))))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/actions/subscription/index.ts"),
				i = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				a = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(o.b)(() => Object(r.c)({
				isInJoinOptimizationsExperiment: e => Object(i.a)(e) || Object(i.b)(e) || Object(i.c)(e) || Object(i.d)(e),
				userIsSubscriber: a.cb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(s.d([t], !0)),
				onSubscriptionsRequested: () => e(s.e()),
				onUnsubscribe: () => e(s.d([t], !1))
			}))
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
				return m
			})), n.d(t, "m", (function() {
				return p
			})), n.d(t, "q", (function() {
				return b
			})), n.d(t, "r", (function() {
				return h
			})), n.d(t, "s", (function() {
				return f
			})), n.d(t, "u", (function() {
				return g
			})), n.d(t, "t", (function() {
				return C
			})), n.d(t, "v", (function() {
				return _
			})), n.d(t, "w", (function() {
				return x
			})), n.d(t, "l", (function() {
				return E
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "o", (function() {
				return y
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
				m = 48,
				p = 24,
				b = 24,
				h = 312,
				f = 40,
				g = 270,
				C = 106,
				_ = 5,
				x = 16,
				E = 1250,
				v = 82,
				O = 48,
				y = 36,
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
					e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.Backspace = "Backspace", e.Enter = "Enter", e.Escape = "Escape", e.F = "f", e.Tab = "Tab", e.Space = " ", e.Comma = ","
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
		"./src/reddit/contexts/NavbarExp.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = r.a.createContext(!1)
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
				xsmallBigPaddingButtonStyles: "UEPNkU0rd1-nvbkOcBatc",
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
				chatButton: "_13twe55MPRo1LqypxB-LJx",
				PlainLinkButton: "_2UhHcZFBOYxMULbf2p-skl",
				plainLinkButton: "_2UhHcZFBOYxMULbf2p-skl"
			}
		},
		"./src/reddit/controls/Button/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "l", (function() {
				return _
			})), n.d(t, "m", (function() {
				return x
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "o", (function() {
				return v
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "n", (function() {
				return y
			})), n.d(t, "r", (function() {
				return k
			})), n.d(t, "q", (function() {
				return S
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "f", (function() {
				return P
			})), n.d(t, "j", (function() {
				return T
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "h", (function() {
				return I
			})), n.d(t, "i", (function() {
				return D
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
			var u, m, p, b;
			! function(e) {
				e.XXS = "xxsmallButtonStyles", e.XS = "xsmallButtonStyles", e.XSP = "xsmallBigPaddingButtonStyles", e.S = "smallButtonStyles", e.M = "mediumButtonStyles", e.L = "largeButtonStyles", e.XL = "xlargeButtonStyles"
			}(u || (u = {})),
			function(e) {
				e.Primary = "primary", e.Secondary = "secondary", e.Tertiary = "tertiary", e.Plain = "plain", e.PlainLink = "plainLink"
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
						iconClassName: o,
						iconPosition: i = p.C,
						isFullWidth: a = !1,
						isSquare: h = !1,
						children: _,
						className: x,
						kind: E = b.Button,
						priority: v = m.Primary,
						redditStyle: O,
						size: y = u.S,
						text: k,
						textClassName: S,
						...j
					} = e, P = (({
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
						baseClassName: x,
						children: _,
						dataRedditStyle: t,
						Icon: n,
						isFullWidth: a,
						isSquare: h,
						priority: v,
						redditStyle: O,
						size: y,
						text: k
					}), T = (({
						children: e,
						text: t,
						Icon: n,
						iconClassName: o,
						iconPosition: i,
						priority: a,
						textClassName: d
					}) => !n && t ? r.a.createElement("span", {
						className: d
					}, t) : r.a.createElement(r.a.Fragment, null, n && (i === p.C || i === p.L) && r.a.createElement(n, {
						className: Object(s.a)(c.a.Icon, o, {
							[c.a.isLeft]: i === p.L
						}),
						isFilled: a === m.Primary
					}), t && r.a.createElement("span", {
						className: Object(s.a)(c.a.Text, d)
					}, t), e && e, n && i === p.R && r.a.createElement(n, {
						className: Object(s.a)(c.a.Icon, o, c.a.isRight),
						isFilled: a === m.Primary
					})))({
						children: _,
						text: k,
						Icon: n,
						iconClassName: o,
						iconPosition: i,
						priority: v,
						textClassName: S
					});
					return E === b.InternalLink && (e => "to" in e)(j) ? r.a.createElement(f, d({}, l, j, {
						className: P
					}), T) : E === b.ExternalLink && (e => "href" in e)(j) ? r.a.createElement(g, d({}, l, j, {
						className: P
					}), T) : r.a.createElement(C, d({}, l, j, {
						className: P
					}), T)
				},
				f = e => r.a.createElement(i.a, e),
				g = e => r.a.createElement("a", e),
				C = e => r.a.createElement("button", e),
				_ = e => r.a.createElement(h, d({
					kind: b.ExternalLink,
					priority: m.Primary
				}, e)),
				x = e => r.a.createElement(h, d({
					kind: b.InternalLink,
					priority: m.Primary
				}, e)),
				E = e => r.a.createElement(h, d({
					kind: b.Button,
					priority: m.Primary
				}, e)),
				v = e => r.a.createElement(h, d({
					kind: b.ExternalLink,
					priority: m.Secondary
				}, e)),
				O = e => r.a.createElement(h, d({
					kind: b.InternalLink,
					priority: m.Secondary
				}, e)),
				y = e => r.a.createElement(h, d({
					kind: b.Button,
					priority: m.Secondary
				}, e)),
				k = e => r.a.createElement(h, d({
					kind: b.InternalLink,
					priority: m.Plain
				}, e)),
				S = e => r.a.createElement(h, d({
					kind: b.Button,
					priority: m.Plain
				}, e)),
				j = ({
					className: e,
					...t
				}) => r.a.createElement(h, d({
					kind: b.Button,
					priority: m.Primary,
					className: Object(s.a)(e, c.a.DangerButtonColors)
				}, t)),
				P = ({
					className: e,
					...t
				}) => r.a.createElement(h, d({
					kind: b.Button,
					className: Object(s.a)(e, c.a.GoldButtonColors)
				}, t)),
				T = ({
					className: e,
					...t
				}) => r.a.createElement(h, d({
					kind: b.Button,
					className: Object(s.a)(e, c.a.PremiumButtonColors)
				}, t)),
				w = ({
					className: e,
					...t
				}) => r.a.createElement(h, d({
					kind: b.Button,
					className: Object(s.a)(e, c.a.ChatButton)
				}, t)),
				I = ({
					className: e,
					...t
				}) => r.a.createElement(h, d({
					kind: b.Button,
					className: Object(s.a)(e, c.a.InlineTextButton)
				}, t)),
				D = ({
					className: e,
					...t
				}) => r.a.createElement(h, d({
					kind: b.Button,
					className: Object(s.a)(e, c.a.PlainLinkButton),
					priority: m.PlainLink
				}, t));
			t.s = h
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
				m = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(m),
				b = n("./src/reddit/controls/Dropdown/row.m.less"),
				h = n.n(b);

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
					}, n = Object(a.a)(h.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(c.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href,
						disabled: e.disabled
					}), e.children && i.a.createElement("span", {
						className: n
					}, e.children), i.a.createElement("span", {
						className: Object(a.a)(h.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(u.a, f({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: r()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(a.a)(h.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(l.a, {
						className: h.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(d.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(a.a)(h.a.row, e, {
					[h.a.mIsInteractive]: !t.noHover,
					[h.a.mIsSelected]: t.isSelected,
					[h.a.topics]: t.isTopicsStyle
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
				return x
			})), n.d(t, "c", (function() {
				return E
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/uniqueId.js"),
				s = n.n(r),
				i = n("./node_modules/raf/index.js"),
				a = n.n(i),
				c = n("./node_modules/react/index.js"),
				d = n.n(c),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/higherOrderComponents/asModal/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/layout/row/Inline/index.tsx"),
				b = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				h = n.n(b);
			var f = Object(u.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return d.a.createElement("div", {
						className: h.a.wrapper
					}, d.a.createElement(p.a, {
						className: h.a.titleRow
					}, n), d.a.createElement("div", {
						className: h.a.detailsContainer
					}, t), d.a.createElement(p.a, {
						className: h.a.buttonRow
					}, d.a.createElement(m.k, {
						className: h.a.confirmButton,
						onClick: e.onConfirmed
					}, o.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				g = n("./src/reddit/controls/ErrorText/index.m.less"),
				C = n.n(g);
			class _ extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${s()()}`,
						isModalOpen: !1
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
						className: t,
						errorModalBody: n,
						errorModalTitle: r = o.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: s = o.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: i,
						isModalOpen: a
					} = this.state;
					return d.a.createElement("div", {
						className: Object(l.a)(C.a.wrapper, t)
					}, d.a.createElement("span", {
						className: C.a.description,
						ref: this.spanRef
					}, e), i && d.a.createElement("span", {
						className: C.a.moreText,
						onClick: this.toggleModal
					}, s), a && d.a.createElement(f, {
						onConfirmed: this.toggleModal,
						title: r
					}, n || e))
				}
			}
			const x = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: o,
						fallbackMessage: r,
						messages: s = []
					} = e, i = s.length ? s : r ? [r] : [];
					return i.length ? d.a.createElement("div", {
						className: t
					}, i.map((e, t) => d.a.createElement(_, {
						className: n,
						errorModalTitle: o,
						key: t
					}, e))) : null
				},
				E = e => d.a.createElement(x, {
					fallbackMessage: o.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = _
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
			class m extends i.a.Component {
				render() {
					return this.props.connectDropTarget ? this.props.connectDropTarget(i.a.createElement("div", {
						className: this.props.className
					}, this.props.render(this.props.isOver, this.props.canDrop))) : null
				}
			}
			t.a = u(m)
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
				return p
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return _
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

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const p = i.a.input("input", u.a),
				b = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				h = e => {
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
						onClick: b
					}, r.a.createElement(p, m({
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
						onClick: b
					}, r.a.createElement(p, m({
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
			var C;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(C || (C = {}));
			class _ extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: C.ADD
						})
					}, this.updateValue = (e, t) => {
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: C.REMOVE,
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
					return e.map((e, i) => r.a.createElement(h, {
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
			class m extends r.a.Component {
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
			})(m)
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
				},
				"data-testid": "LoadingIcon"
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
			class m extends r.a.Component {
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
			t.a = m
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
				dropdownSection: "_2MAa_9ffQVHzsZ-RD1dD5F",
				titleContainer: "_112QSSyLmEVry3hGjIPV--",
				titleText: "_3fpkz04m3VEANbACfYOR0H",
				srCreationButton: "_3ujvK82qZ7yzbpEffTiXH-"
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
				lockTitleWithEllipsis: "mFsxWzlvJHnXmu7_xaIzI",
				secondary: "_2q4aqq7yddFWa3SfRCihRH",
				container: "_3oyS3dPRsa51zDEONlIdts",
				mHighLight: "F6s6qTIrbT1UvKhtNmPq4"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "b", (function() {
				return E
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/SubredditIcon/index.tsx"),
				c = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				d = n("./src/reddit/icons/svgs/ImagePost/index.tsx"),
				l = n("./src/reddit/icons/svgs/Link/index.tsx"),
				u = n("./src/reddit/icons/svgs/TextPost/index.tsx"),
				m = n("./src/reddit/icons/svgs/Video/index.tsx"),
				p = n("./src/reddit/layout/row/Inline/index.tsx"),
				b = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less"),
				h = n.n(b);
			const f = [{
				type: "text",
				Icon: u.a
			}, {
				type: "images",
				Icon: d.a
			}, {
				type: "videos",
				Icon: m.a
			}, {
				type: "links",
				Icon: l.a
			}];

			function g(e) {
				const {
					allowedPostTypes: t,
					className: n
				} = e;
				return r.a.createElement(p.a, {
					className: Object(s.a)(h.a.rowStyle, n)
				}, f.map(({
					type: e,
					Icon: n
				}) => r.a.createElement("div", {
					className: Object(s.a)(h.a.iconWrapper, {
						[h.a.mDisabled]: !t[e]
					})
				}, r.a.createElement(n, null))))
			}
			var C = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less"),
				_ = n.n(C);
			const x = i.a.wrapped(a.b, "subredditIcon", _.a);

			function E(e) {
				const {
					className: t,
					explanationText: n,
					highlight: o,
					icon: i,
					item: a,
					lockTitleWithEllipsis: d,
					onClick: l,
					secondaryText: u,
					subText: m,
					title: p
				} = e, {
					allowedPostTypes: b
				} = a;
				return r.a.createElement("div", {
					className: Object(s.a)(_.a.container, {
						[_.a.mHighlight]: o
					}, t),
					onClick: l
				}, i, r.a.createElement("div", {
					className: _.a.main
				}, r.a.createElement("span", {
					className: Object(s.a)(_.a.title, {
						[_.a.lockTitleWithEllipsis]: d
					})
				}, p), u && r.a.createElement("span", {
					className: _.a.secondary
				}, u, m && r.a.createElement(r.a.Fragment, null, r.a.createElement(c.a, null), r.a.createElement("span", {
					className: _.a.secondary
				}, m))), n && r.a.createElement("span", {
					className: _.a.secondary
				}, n)), o && b && r.a.createElement(g, {
					allowedPostTypes: b
				}))
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less": function(e, t, n) {
			e.exports = {
				profileIcon: "_3JCR5jV3N1dbyHaUswxl4K"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/RecommendedSubreddits/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "C_XJ2ZB_b9iAPcFCHr4SW",
				title: "_1qKkNpHiC5Vgwbp0N8pOiG",
				contentWrapper: "_2l-m9MtS29tOlexExTlpXo",
				spinner: "_3rJ_SLWBH_jxAMlgNkciE9",
				itemWrapper: "Tx6TtQK3xJ9F5qpQlrEHT"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_20inB3H1vZ94tVilqSJmU2",
				hasExplanationText: "_1xZtDFYDxzgIqaJfg9XzJh"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				c = n("./src/reddit/helpers/name/index.ts"),
				d = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.tsx"),
				l = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function p(e) {
				const {
					item: {
						primaryColor: t,
						iconUrl: n,
						name: r,
						subscribers: l,
						active: p
					},
					shouldPrettyPrint: b,
					explanationText: h
				} = e, f = Object(c.c)(r), g = void 0 !== l ? o.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [o.fbt._plural(l, "number", b ? Object(a.b)(l) : void 0)], {
					hk: "2SvJUX"
				}) : void 0, C = void 0 !== p ? o.fbt._({
					"*": "{number} online",
					_1: "1 online"
				}, [o.fbt._plural(p, "number", b ? Object(a.b)(p) : void 0)], {
					hk: "NgOAJ"
				}) : void 0, _ = s.a.createElement(d.a, {
					className: Object(i.a)(u.a.icon, {
						[u.a.hasExplanationText]: !!h
					}),
					iconUrl: n,
					primaryColor: t,
					redditStyle: !0
				});
				return s.a.createElement(d.b, m({
					icon: _,
					title: f,
					secondaryText: g,
					subText: C
				}, e))
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
				return M
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
				m = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				p = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownEntry/index.m.less"),
				b = n.n(p);
			class h extends i.Component {
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
						className: Object(c.a)(b.a.entry, this.props.disabled && b.a.disabled),
						onMouseDown: this.onMouseDown,
						onMouseOver: this.onMouseOver,
						onMouseUp: this.onMouseUp,
						ref: this.setRef
					}, this.props.children)
				}
			}
			var f = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less"),
				C = n.n(g);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var x = ({
					className: e,
					children: t,
					title: n,
					onOpenCommunityCreation: r,
					shouldShowCreateCommunityButton: s,
					...i
				}) => a.a.createElement("div", _({
					className: Object(c.a)(C.a.dropdownSection, e)
				}, i), n && s ? a.a.createElement("div", {
					className: C.a.titleContainer
				}, a.a.createElement("span", {
					className: C.a.titleText
				}, n), a.a.createElement(f.s, {
					className: C.a.srCreationButton,
					onClick: r,
					priority: f.b.Plain,
					size: f.c.XS
				}, o.fbt._("Create New", null, {
					hk: "3WP7G4"
				}))) : n && a.a.createElement("div", {
					className: C.a.title
				}, n), t),
				E = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				v = n("./src/reddit/helpers/name/index.ts"),
				O = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.tsx"),
				y = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less"),
				k = n.n(y),
				S = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less"),
				j = n.n(S);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function T(e) {
				const {
					item: {
						name: t,
						subscribers: n
					}
				} = e, r = Object(v.d)(t), s = void 0 !== n ? o.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [o.fbt._plural(n, "number")], {
					hk: "2SvJUX"
				}) : void 0, i = a.a.createElement(E.a, {
					className: Object(c.a)(j.a.profileIcon, k.a.subredditIcon)
				});
				return a.a.createElement(O.b, P({
					icon: i,
					title: r,
					secondaryText: s
				}, e))
			}
			var w = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.tsx"),
				I = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less"),
				D = n.n(I);
			const N = {
				[m.a.OWN_PROFILE]: () => o.fbt._("Your profile", null, {
					hk: "1Qoy4P"
				}),
				[m.a.SUBSCRIBED_TO_SUBREDDIT]: () => o.fbt._("My communities", null, {
					hk: "2NVUpl"
				}),
				[m.a.OTHER_SUBREDDIT]: () => o.fbt._("Others", null, {
					hk: "3WQHlu"
				}),
				[m.a.MODERATED_SUBREDDIT]: () => o.fbt._("Moderated subreddits", null, {
					hk: "uZtld"
				})
			};
			class M extends a.a.PureComponent {
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
						case m.a.OWN_PROFILE:
							return T;
						default:
							return w.a
					}
				}
				render() {
					const {
						focusedIndex: e,
						items: t,
						onOpenCommunityCreation: n,
						shouldShowCreateCommunityButton: r
					} = this.props, s = [];
					return this.props.showNoMatchesCaption && s.push(a.a.createElement(x, {
						key: "no-matches"
					}, a.a.createElement("div", {
						className: D.a.noMatches
					}, o.fbt._("No communities found", null, {
						hk: "4wDUHv"
					})))), Object(u.a)(t, {
						keyFn: e => e.type
					}, (o, i, c, d) => {
						const u = [];
						l(c, d, n => {
							const o = t[n],
								r = n === e,
								s = this.getEntryContentComponent(o.type, o.name);
							s && u.push(a.a.createElement(h, {
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
						const p = N[i];
						s.push(a.a.createElement(x, {
							key: i,
							title: p && p(),
							onOpenCommunityCreation: n,
							shouldShowCreateCommunityButton: r && i === m.a.SUBSCRIBED_TO_SUBREDDIT
						}, u))
					}), a.a.createElement("div", {
						className: Object(c.a)(D.a.container, this.props.className, {
							[D.a.mIsValid]: this.props.isValid,
							[D.a.mIsVisible]: s.length > 0
						}),
						ref: this.setContainerRef,
						onMouseDown: this.props.onContainerMouseDown,
						onScroll: this.onScroll
					}, s)
				}
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2sfaZWDVT8JLAt2J9p4IzV",
				mIsActive: "_1d_qHIhircwk0cy-gLlRQq",
				mIsInvalid: "_3sp2CpDC4eODg63Hhf8_lz",
				subredditDropdownOpenAI: "_1OS0KkjeJ7foERCmAoM2Zc",
				subredditDropdownOpenAi: "_1OS0KkjeJ7foERCmAoM2Zc"
			}
		},
		"./src/reddit/controls/SubredditPicker/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "c", (function() {
				return b
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
				m = new RegExp("^(r/)?[A-Za-z0-9][A-Za-z0-9_]{1,20}$", "i"),
				p = new RegExp("^u/[A-Za-z0-9_-]{2,20}$", "i"),
				b = e => m.test(e) || p.test(e) || "" === e
		},
		"./src/reddit/controls/SubredditPicker/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return ue
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
				m = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/actions/subredditAutocomplete/index.ts"),
				b = n("./src/reddit/actions/subredditCrosspostable.ts"),
				h = n("./src/reddit/actions/subscription/index.ts"),
				f = n("./src/reddit/constants/modals.ts"),
				g = n("./src/reddit/contexts/PageLayer/index.tsx"),
				C = n("./src/reddit/controls/SubredditPicker/helpers.ts"),
				_ = n("./node_modules/lodash/debounce.js"),
				x = n.n(_),
				E = n("./src/lib/classNames/index.ts"),
				v = n("./src/reddit/constants/keycodes.ts"),
				O = n("./src/reddit/constants/posts.ts"),
				y = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				k = n("./node_modules/fbt/lib/FbtPublic.js"),
				S = n("./src/reddit/icons/fonts/index.tsx"),
				j = n("./src/lib/lessComponent.tsx"),
				P = n("./src/reddit/components/SubredditIcon/index.tsx"),
				T = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				w = n("./src/reddit/controls/SubredditPicker/Picker/SearchBar/index.m.less"),
				I = n.n(w);
			const D = j.a.wrapped(P.b, "subredditRoundIcon", I.a),
				N = j.a.wrapped(T.a, "userIcon", I.a),
				M = j.a.span("iconEmpty", I.a);

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const L = e => {
				e.preventDefault(), e.stopPropagation()
			};

			function A(e) {
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
				let l = r.a.createElement(M, null);
				return o ? l = r.a.createElement(S.a, {
					name: "search",
					className: I.a.searchIcon
				}) : a && (l = a.type === O.a.SUBREDDIT ? r.a.createElement(D, a) : r.a.createElement(N, null)), r.a.createElement("div", {
					className: Object(E.a)(I.a.searchBar, t)
				}, l, r.a.createElement("div", {
					className: I.a.inputWrapper
				}, r.a.createElement("input", R({
					className: I.a.input,
					ref: i,
					disabled: n,
					placeholder: o ? k.fbt._("Search communities", null, {
						hk: "1mtF5A"
					}) : k.fbt._("Choose a community", null, {
						hk: "44gKTd"
					}),
					spellCheck: !1,
					value: c
				}, d))), r.a.createElement("div", {
					onClick: s,
					onMouseDown: L
				}, r.a.createElement(S.a, {
					name: "caret_down",
					className: I.a.dropdownIcon
				})))
			}
			var F = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx"),
				B = n("./src/reddit/selectors/experiments/postCreationSubRec.ts"),
				U = n("./src/reddit/controls/SubredditPicker/Picker/index.m.less"),
				W = n.n(U),
				G = n("./src/reddit/actions/postCreation/general.ts"),
				V = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				H = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				K = n("./src/reddit/helpers/trackers/postComposer.ts"),
				q = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				z = n("./src/reddit/hooks/useTracking.ts"),
				Q = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.tsx"),
				J = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/RecommendedSubreddits/index.m.less"),
				Y = n.n(J);
			const Z = e => {
					const {
						items: t,
						isRedditRec: n,
						onSelectRecommendation: s
					} = e, i = Object(z.a)(), a = Object(o.useCallback)((e, t) => {
						i(Object(K.s)(e, t))
					}, []), c = Object(o.useRef)(null), d = Object(o.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && i(Object(K.r)())
						})
					}, []);
					return Object(q.a)(c, d), r.a.createElement(r.a.Fragment, null, t.map((e, t) => r.a.createElement("div", {
						className: Y.a.itemWrapper,
						key: e.name
					}, r.a.createElement(V.a, {
						subredditName: e.name,
						shouldOpenNewTabOnClicks: !0,
						onShow: () => a(e.name, t)
					}, r.a.createElement(Q.a, {
						item: e,
						highlight: !1,
						shouldPrettyPrint: !0,
						explanationText: n ? k.fbt._("based on your subscription", null, {
							hk: "3Hb2XK"
						}) : k.fbt._("based on your content", null, {
							hk: "3u8Nrt"
						}),
						onClick: () => {
							s(e), i(Object(K.q)(e.name, t))
						},
						lockTitleWithEllipsis: !0
					})))), r.a.createElement("span", {
						ref: c,
						key: "recommended-render"
					}))
				},
				X = e => {
					const t = Object(d.d)(),
						{
							isPending: n,
							hasData: s,
							isChanged: i,
							items: a,
							isRedditRec: c
						} = Object(d.e)(Object(l.c)({
							isPending: B.h,
							hasData: B.c,
							isChanged: B.d,
							items: B.b,
							isRedditRec: B.i
						}));
					return Object(o.useEffect)(() => {
						i && t(Object(G.j)())
					}, [i, t]), r.a.createElement("div", {
						className: Y.a.wrapper,
						onMouseDown: e.onContainerMouseDown
					}, r.a.createElement("div", {
						className: Y.a.title
					}, k.fbt._("Suggested communities", null, {
						hk: "4BebuH"
					})), r.a.createElement("div", {
						className: Y.a.contentWrapper
					}, n && r.a.createElement(H.a, {
						sizePx: 30,
						className: Y.a.spinner
					}), s && !n && r.a.createElement(Z, {
						items: a,
						isRedditRec: c,
						onSelectRecommendation: e.onSelectRecommendation
					})))
				},
				$ = Object(l.c)({
					isOpenAIPilotV1: B.e,
					shouldRenderRec: B.m
				});
			class ee extends r.a.Component {
				constructor(e) {
					super(e), this.inputRef = null, this.setInputRef = e => {
						this.inputRef = e, this.props.inputRef && this.props.inputRef(e)
					}, this.commitSelection = () => {
						const e = this.getPickerValue(!0);
						Object(C.c)(e.rawString) ? this.props.onChange(e, !0) : this.props.onChange({
							rawString: "",
							record: null
						}, !0), this.state.isOpen && this.setState({
							isOpen: !1
						})
					}, this.callOnChange = () => this.props.onChange(this.getPickerValue()), this.requestAutocomplete = x()(e => this.props.onGetSubredditAutocomplete(e), 200, {
						maxWait: 200
					}), this.selectItem = e => {
						const t = this.props.items[e];
						if (!t) throw new Error("Invalid item index");
						let n;
						n = t.type === y.a.OWN_PROFILE ? Object(a.d)(t.name) : Object(a.c)(t.name), this.setState({
							inputValue: n,
							focusedIndex: e
						}, this.commitSelection)
					}, this.onSelectRecommendation = e => {
						if (!e) throw new Error("Invalid item index");
						let t;
						t = e.type === y.a.OWN_PROFILE ? Object(a.d)(e.name) : Object(a.c)(e.name), this.props.onChange({
							rawString: t,
							record: {
								name: e.name,
								iconUrl: e.iconUrl,
								primaryColor: e.primaryColor,
								type: O.a.SUBREDDIT
							}
						}, !0), this.state.isOpen && this.setState({
							isOpen: !1
						})
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
							allowedPostTypes: m
						} = s;
						return {
							rawString: t,
							record: Object(a.a)(t, d) ? {
								id: c,
								name: d,
								iconUrl: l,
								primaryColor: u,
								allowedPostTypes: m,
								type: i === y.a.OWN_PROFILE ? O.a.PROFILE : O.a.SUBREDDIT
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
						e.which === v.a.ArrowUp ? (this.moveSelection(!0), e.preventDefault()) : e.which === v.a.ArrowDown ? (this.moveSelection(), e.preventDefault()) : e.which === v.a.Enter || e.which === v.a.Tab ? (-1 !== this.state.focusedIndex ? this.selectItem(this.state.focusedIndex) : this.commitSelection(), e.which !== v.a.Tab && e.preventDefault()) : e.which === v.a.Escape && (this.inputRef && this.inputRef.blur(), e.preventDefault())
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
						isOpenAIPilotV1: n,
						isValid: o = !0,
						items: s,
						shouldRenderRec: i,
						value: a,
						shouldShowCreateCommunityButton: c
					} = this.props, {
						isActive: d,
						isOpen: l
					} = this.state, u = a.record;
					return r.a.createElement("div", {
						className: Object(E.a)(W.a.container, e, {
							[W.a.mIsActive]: d,
							[W.a.mIsInvalid]: !o
						})
					}, r.a.createElement(A, {
						disabled: t,
						isActive: this.state.isActive,
						value: this.state.inputValue,
						inputRef: this.setInputRef,
						onDropdownClick: this.onDropdownClick,
						onChange: this.onInputChange,
						onFocus: this.onFocus,
						onBlur: this.onBlur,
						onKeyDown: this.onKeyDown,
						record: u
					}), !this.state.inputValue && l && i && r.a.createElement(X, {
						onSelectRecommendation: this.onSelectRecommendation,
						onContainerMouseDown: this.onDropdownContainerMouseDown
					}), l && (!i || !!this.state.inputValue) && r.a.createElement(F.a, {
						className: n ? W.a.subredditDropdownOpenAI : void 0,
						items: s,
						isValid: o,
						focusedIndex: this.state.focusedIndex,
						showNoMatchesCaption: !this.props.haveSuggestions && this.props.isAllDataRetrieved,
						onContainerMouseDown: this.onDropdownContainerMouseDown,
						onEntryFocus: this.onEntryFocus,
						onEntrySelect: this.onEntrySelect,
						onOpenCommunityCreation: this.props.openCommunityCreation,
						shouldShowCreateCommunityButton: c
					}))
				}
			}
			var te = Object(d.b)($)(ee),
				ne = n("./src/reddit/selectors/platform.ts"),
				oe = n("./src/reddit/selectors/subredditAutocomplete.ts"),
				re = n("./src/reddit/selectors/user.ts");

			function se() {
				return (se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const ie = Object(g.u)(),
				ae = Object(u.a)(Object(l.a)((e, t) => t.value, (e, {
					allowCrosspostableOnly: t,
					includeUserProfile: n,
					value: o
				}) => Object(oe.a)(e, {
					allowCrosspostableOnly: t,
					includeUserProfile: n,
					substring: o.rawString
				}), e => Object(re.ib)(e) && Object(ne.j)(e), (e, t, n) => {
					const {
						suggestedItems: o,
						fallbackItems: r,
						isAllDataRetrieved: s
					} = t, i = o.length ? o : e.record ? [Object(C.a)(e.record)] : [];
					return {
						items: 0 === i.length && s ? r : i,
						haveSuggestions: i.length > 0,
						isAllDataRetrieved: t.isAllDataRetrieved,
						isAutocompletePending: t.isPending,
						shouldShowCreateCommunityButton: n
					}
				})),
				ce = {
					onGetInitialData: e => t => t(e ? b.d() : h.e()),
					onGetSubredditAutocomplete: p.a,
					openCommunityCreation: () => async (e, t) => {
						Object(K.b)(t()), e(Object(m.h)(f.a.SUBREDDIT_CREATION_MODAL_ID))
					}
				};
			class de extends r.a.Component {
				constructor() {
					super(...arguments), this.onGetSubredditAutocomplete = e => {
						this.props.onGetSubredditAutocomplete(e)
					}
				}
				componentDidMount() {
					this.props.onGetInitialData(!!this.props.allowCrosspostableOnly)
				}
				render() {
					return r.a.createElement(te, se({}, this.props, {
						onGetSubredditAutocomplete: this.onGetSubredditAutocomplete
					}))
				}
			}
			var le = ie(Object(d.b)(ae, ce)(de));
			class ue extends r.a.Component {
				constructor() {
					super(...arguments), this.renderPicker = e => r.a.createElement(le, {
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
			t.a = Object(o.memo)(Object(o.forwardRef)((e, t) => {
				const n = e.size || i.c.XS;
				return r.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(s.a)(c.a.toggleSwitch, e.className, c.a[n], {
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
				return m
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "i", (function() {
				return _
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "e", (function() {
				return E
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
			const m = (e, t) => Object(s.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/save`),
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				p = (e, t) => Object(s.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/unsave`),
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(s.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/lock`),
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(s.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/unlock`),
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				f = (e, t) => Object(s.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/approve`),
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				g = (e, t, n) => Object(s.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/remove`),
					method: r.ib.POST,
					data: {
						id: t,
						spam: n
					}
				}),
				C = (e, t) => Object(s.a)(Object(i.a)(e, [a.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				_ = (e, t) => Object(s.a)(Object(i.a)(e, [a.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				x = (e, t) => Object(s.a)(Object(i.a)(e, [a.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				E = (e, t, n, i) => {
					let a = Object(c.a)(Object(u.a)(Object(l.a)(`${o.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return i && (a = Object(d.a)(a)), Object(s.a)(e, {
						data: n,
						endpoint: a,
						method: r.ib.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				v = (e, t, n, o) => Object(s.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/distinguish/${n}`),
					method: r.ib.POST,
					data: {
						id: t,
						sticky: o
					}
				})
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "o", (function() {
				return _
			})), n.d(t, "m", (function() {
				return x
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "n", (function() {
				return S
			})), n.d(t, "g", (function() {
				return j
			})), n.d(t, "h", (function() {
				return P
			})), n.d(t, "i", (function() {
				return T
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "c", (function() {
				return I
			})), n.d(t, "e", (function() {
				return D
			})), n.d(t, "l", (function() {
				return N
			}));
			var o = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/lib/makeRequest/index.ts"),
				s = n("./src/redditGQL/operations/AddPredictionDrafts.json"),
				i = n("./src/redditGQL/operations/CancelPrediction.json"),
				a = n("./src/redditGQL/operations/ChangePrediction.json"),
				c = n("./src/redditGQL/operations/ChangePredictionVote.json"),
				d = n("./src/redditGQL/operations/CreatePredictionTournament.json"),
				l = n("./src/redditGQL/operations/EndPredictionTournament.json"),
				u = n("./src/redditGQL/operations/GetPredictionChipPackages.json"),
				m = n("./src/redditGQL/operations/GetPredictionCreationAllowance.json"),
				p = n("./src/redditGQL/operations/GetPredictionToken.json"),
				b = n("./src/redditGQL/operations/GetTournaments.json"),
				h = n("./src/redditGQL/operations/ResolvePrediction.json"),
				f = n("./src/redditGQL/operations/SubredditTopPredictors.json"),
				g = n("./src/redditGQL/operations/UpdatePredictionTournament.json"),
				C = n("./src/redditGQL/operations/VotePrediction.json");
			const _ = async (e, {
				postId: t,
				optionId: n,
				coinPackageId: s,
				price: i
			}) => {
				var a;
				const c = await Object(o.a)(e, {
					...C,
					variables: {
						input: {
							postId: t,
							optionId: n,
							coinPackageId: s,
							price: i
						}
					}
				});
				if (!Object(r.c)(c) || c.error || !(null === (a = c.body.data.votePrediction) || void 0 === a ? void 0 : a.ok)) throw new Error("Failed to make prediction");
				return c.body.data.votePrediction.poll
			}, x = (e, {
				postId: t,
				optionId: n
			}) => Object(o.a)(e, {
				...h,
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
			const v = (e, {
					subredditId: t,
					period: n,
					top: r,
					includeCurrentRank: s,
					tournamentId: i
				}) => Object(o.a)(e, {
					...f,
					variables: {
						subredditId: t,
						period: n,
						top: r,
						includeCurrentRank: s,
						tournamentId: i
					}
				}),
				O = (e, t) => Object(o.a)(e, {
					...d,
					variables: {
						input: t
					}
				}),
				y = async (e, t) => {
					const n = await Object(o.a)(e, {
						...b,
						variables: t
					});
					if (!Object(r.c)(n) || n.error) throw new Error("Failed to fetch tournaments");
					return n.body.data.subredditInfoByName.predictionTournaments || []
				}, k = (e, t) => Object(o.a)(e, {
					...s,
					variables: {
						input: t
					}
				}), S = (e, t) => Object(o.a)(e, {
					...g,
					variables: {
						input: t
					}
				}), j = (e, t) => Object(o.a)(e, {
					...l,
					variables: {
						input: t
					}
				}), P = (e, t) => Object(o.a)(e, {
					...u,
					variables: t
				}), T = (e, t) => Object(o.a)(e, {
					...p,
					variables: t
				}), w = async (e, t) => {
					const n = await Object(o.a)(e, {
						...a,
						variables: {
							input: t
						}
					});
					if (!Object(r.c)(n) || !n.body.data.changePrediction.ok) throw new Error("Unable to update prediction");
					return n.body.data.changePrediction.poll
				}, I = async (e, {
					postId: t
				}) => {
					var n, s;
					const a = await Object(o.a)(e, {
						...i,
						variables: {
							input: {
								postId: t
							}
						}
					});
					if (!Object(r.c)(a) || !(null === (n = a.body.data.cancelPrediction) || void 0 === n ? void 0 : n.ok) || !(null === (s = a.body.data.cancelPrediction) || void 0 === s ? void 0 : s.poll)) throw new Error("Unable to cancel prediction");
					return a.body.data.cancelPrediction.poll
				}, D = async (e, t) => {
					var n, s;
					const i = await Object(o.a)(e, {
						...c,
						variables: {
							input: t
						}
					});
					if (!Object(r.c)(i) || !(null === (n = i.body.data.changePredictionVote) || void 0 === n ? void 0 : n.ok) || !(null === (s = i.body.data.changePredictionVote) || void 0 === s ? void 0 : s.poll)) throw new Error("Unable to change prediction.");
					return i.body.data.changePredictionVote.poll
				}, N = async (e, t) => {
					const n = await Object(o.a)(e, {
						...m,
						variables: t
					});
					return !!Object(r.c)(n) && n.body.data.identity.isPredictionCreationAllowed
				}
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
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "n", (function() {
				return C
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
						return "https://meta-api.reddit.com/ethereum/ethereum:5391184"
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
						return 5391184
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
			async function m(e, t, n) {
				return await Object(s.a)(e, {
					method: "delete",
					endpoint: `${r.a.metaUrl}/crypto/${t}/registrations/${n}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumRinkeby = "ethereum:5391184", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader"
			}(o || (o = {}));
			const p = (e, t, n) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: n
				}),
				b = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				h = e => ({
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
			async function C(e, t) {
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
					method: r.ib.GET
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
					method: r.ib.POST,
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
				return t === c.i.MARKDOWN ? d.richtext_json = n : d.markdown_text = n, Object(r.a)(Object(s.a)(e, [i.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: o.ib.POST,
					data: d
				})
			}
		},
		"./src/reddit/endpoints/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
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
				m = (e, t) => {
					if (!e.ok || !e.body) return !1;
					const n = e.body;
					return !!(n.data && n.data.subredditInfoById && n.data.subredditInfoById.scheduledPosts && n.data.subredditInfoById.scheduledPosts[t] && n.data.subredditInfoById.scheduledPosts[t].edges)
				},
				p = (e, t) => !(!e.ok || !e.body) && (!(t.includeStandalone && !(e => m(e, c.f.standalonePosts))(e)) && !(t.includeRecurring && !(e => m(e, c.f.recurringPosts))(e))),
				b = ({
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
					poll: e && E(e),
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
					...h(t),
					..._(n),
					assetIds: x(n)
				}),
				h = e => ({
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
					const s = b({
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
				C = e => /^https?:\/\//i.test(e) ? e : `http://${e}`,
				_ = e => {
					switch (e.kind) {
						case a.p.RICH_TEXT:
							return {
								content: {
									richText: JSON.stringify({
										document: e.document
									})
								}
							};
						case a.p.MARKDOWN:
							return {
								content: {
									markdown: e.markdown
								}
							};
						case a.p.LINK:
							return {
								content: {}, link: {
									url: C(e.url)
								}
							};
						default:
							return {
								content: {}
							}
					}
				},
				x = e => {
					let t = [];
					if (e.document) {
						const n = e.document || [];
						t = Object(s.c)(n)
					}
					return t
				},
				E = e => {
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
				type: r.H.SERVER_ERROR,
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
				return h
			}));
			const o = e => e.subredditInfoById.scheduledPosts.recurringPosts ? {
					recurringPosts: {
						models: p(e.subredditInfoById.scheduledPosts.recurringPosts.edges),
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
				u = e => e.map(e => m(e.node)),
				m = e => ({
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
				p = e => e.map(e => b(e.node)),
				b = e => ({
					...m(e),
					frequency: e.frequency,
					byMonthDays: e.byMonthDays || [],
					byWeekDays: e.byWeekDays || [],
					interval: e.interval || 1
				}),
				h = e => (e => !!e.frequency && !!e.interval)(e) ? b(e) : m(e)
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
							case o.H.NO_STRIPE_SUBSCRIPTION:
							case o.H.USER_DOESNT_EXIST:
							case o.H.USER_REQUIRED_ERROR:
							case o.H.VALIDATION_ERROR:
								return e;
							case o.H.NO_USER:
							case o.H.NO_TEXT:
							case o.H.NO_URL:
								return o.H.VALIDATION_ERROR;
							case o.H.CREDIT_CARD_FAILURE:
							case o.H.CREDIT_CARD_FAILURE_GENERIC:
								return o.H.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return o.H.SUBMIT_VALIDATION_ERROR
						}
					}
					return o.H.VALIDATION_ERROR
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
		"./src/reddit/helpers/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "g", (function() {
				return y
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
				m = n("./src/reddit/models/ScheduledPost/index.ts");
			const p = e => {
					return `${e.toLocaleDateString(void 0,{month:"numeric",day:"numeric"})} @ ${e.toLocaleTimeString(void 0,{hour:"numeric",minute:"numeric"}).replace(" ","").toLowerCase()}`
				},
				b = (e, t) => {
					if (e && t) {
						const n = Object(d.f)(f(e, t)),
							r = p(n);
						return o.fbt._("Submit post at {time}", [o.fbt._param("time", r)], {
							hk: "IZ3L"
						})
					}
					return o.fbt._("Submit post at scheduled event time", null, {
						hk: "lYsoU"
					})
				},
				h = e => e.slice(0, 5),
				f = (e, t) => `${e}T${h(t)}:00`,
				g = e => {
					const [t, n] = e.split("T");
					return [t, h(n)]
				},
				C = e => {
					const [t, n] = g(e);
					if (t && n) {
						const e = Object(d.f)(f(t, n));
						return p(e)
					}
					return ""
				},
				_ = e => {
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
				x = e => "string" == typeof e,
				E = e => {
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
					if (e.frequency === m.d.Hourly) return 2 === e.interval ? o.fbt._("Every other hour", null, {
						hk: "64vzK"
					}) : e.interval > 1 ? o.fbt._("Every {hour interval} hours", [o.fbt._param("hour interval", e.interval.toString())], {
						hk: "3x8zaD"
					}) : o.fbt._("Every hour", null, {
						hk: "1VzCs"
					});
					if (e.frequency === m.d.Daily) return 2 === e.interval ? o.fbt._("Every other day at {start time}", [o.fbt._param("start time", t)], {
						hk: "yTynp"
					}) : e.interval > 1 ? o.fbt._("Every {day interval} days at {start time}", [o.fbt._param("day interval", e.interval.toString()), o.fbt._param("start time", t)], {
						hk: "2OoGlG"
					}) : o.fbt._("Every day at {start time}", [o.fbt._param("start time", t)], {
						hk: "1cvwm2"
					});
					if (e.frequency === m.d.Weekly) {
						const n = (e => c(e.map(m.k).sort((e, t) => e - t).map(E), i.AND, a.COMMA))(e.byWeekDays);
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
					e.frequency && (t = e.frequency), (e.byWeekDays.length > 1 || e.byMonthDays.length > 1 || e.interval > 1) && (t = m.b);
					const n = Object(d.f)(e.publishAt),
						o = Object(m.q)(n.getDay()),
						r = n.getDate();
					return 1 === e.byWeekDays.length && e.byWeekDays[0] !== o && (t = m.b), 1 === e.byMonthDays.length && e.byMonthDays[0] !== r && (t = m.b), {
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
				y = (e, t) => {
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
			n.d(t, "g", (function() {
				return s
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
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
				}),
				c = e => t => ({
					source: "comment_composer",
					action: "view",
					noun: "upvote_checkbox",
					...r.defaults(t),
					subreddit: r.subreddit(t),
					post: r.post(t, e),
					comment: r.comment(t, e)
				}),
				d = e => t => ({
					source: "comment_composer",
					action: "submit",
					noun: "upvote_checkbox",
					...r.defaults(t),
					subreddit: r.subreddit(t),
					post: r.post(t, e),
					comment: r.comment(t, e)
				}),
				l = e => t => ({
					source: "comment_composer",
					action: "select",
					noun: "upvote_checkbox",
					...r.defaults(t),
					subreddit: r.subreddit(t),
					post: r.post(t, e),
					comment: r.comment(t, e)
				}),
				u = e => t => ({
					source: "comment_composer",
					action: "deselect",
					noun: "upvote_checkbox",
					...r.defaults(t),
					subreddit: r.subreddit(t),
					post: r.post(t, e),
					comment: r.comment(t, e)
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
				return _
			}));
			var o = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				s = n("./src/reddit/models/PostDraft/index.ts"),
				i = n("./src/reddit/selectors/comments.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/index.ts");
			const l = "comment_composer",
				u = e => {
					const t = Object(a.n)(e);
					return {
						source: l,
						action: o.c.CLICK,
						...Object(c.defaults)(e),
						screen: Object(c.screen)(e),
						subreddit: Object(c.subreddit)(e),
						post: t ? Object(c.post)(e, t) : null,
						profile: Object(c.profile)(e),
						correlationId: Object(r.c)(r.a.CommentComposer)
					}
				},
				m = async (e, t, o, r) => {
					const s = {
							commentId: r,
							commentsPageKey: o
						},
						a = r && Object(i.j)(e, s) || 0,
						{
							getFlairData: l
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(d.a)({
						noun: "comment",
						...u(e),
						comment: r ? Object(c.comment)(e, r) : null,
						listing: Object(c.listing)(e, void 0, {
							depth: a
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: l(e)
					})
				}, p = (e, t, n, o) => {
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
							parentId: o,
							postId: n
						}
					})
				}, b = e => Object(d.a)({
					noun: "cancel",
					...u(e)
				}), h = (e, t) => {
					t === s.c.replyToPost && Object(d.a)({
						noun: "input",
						...u(e)
					})
				}, f = (e, t) => Object(d.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(c.defaults)(t),
					screen: Object(c.screen)(t),
					subreddit: Object(c.subreddit)(t),
					post: Object(c.post)(t, e)
				}), g = e => Object(d.a)({
					noun: "edit",
					...u(e)
				}), C = e => Object(d.a)({
					noun: "save_edit",
					...u(e)
				}), _ = (e, t) => n => {
					const o = "image_upload" === e || "video_upload" === e;
					return {
						...u(n),
						noun: o ? e : "text_option",
						commentComposer: {
							textType: e,
							finalStatus: t ? "on" : "off"
						}
					}
				}
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
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
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
				m = (e, t, n, o) => r => ({
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
				p = (e, t, n) => o => ({
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
				b = (e, t, n) => o => ({
					...a(o),
					source: "create_award",
					action: e,
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n ? c(n) : null
				}),
				h = (e, t, n) => o => ({
					...a(o),
					source: "awards",
					action: "click",
					noun: n,
					goldPurchase: c(e),
					profile: r.profileById(o, t),
					subreddit: r.subredditById(o, t)
				}),
				f = (e, t) => h(e, t, "disable_in_community"),
				g = (e, t) => h(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "getAwardTypeFromAward", (function() {
				return d
			})), n.d(t, "clickGildEvent", (function() {
				return m
			})), n.d(t, "clickRpanGiveAward", (function() {
				return p
			})), n.d(t, "clickAddAward", (function() {
				return b
			})), n.d(t, "clickHideAward", (function() {
				return h
			})), n.d(t, "clickConfirmHideAward", (function() {
				return f
			})), n.d(t, "clickCancelHideAward", (function() {
				return g
			})), n.d(t, "clickAwardReportFlow", (function() {
				return _
			})), n.d(t, "clickCancelAwardReportFlow", (function() {
				return x
			})), n.d(t, "clickFlagAwardUsage", (function() {
				return E
			})), n.d(t, "clickCancelFlagAwardUsage", (function() {
				return v
			})), n.d(t, "clickConfirmFlagAwardUsage", (function() {
				return O
			})), n.d(t, "clickReportAward", (function() {
				return y
			})), n.d(t, "clickCancelReportAward", (function() {
				return k
			})), n.d(t, "clickConfirmReportAward", (function() {
				return S
			})), n.d(t, "viewGildModalEvent", (function() {
				return j
			})), n.d(t, "clickSelectAwardEvent", (function() {
				return P
			})), n.d(t, "triggerAnonymousEvent", (function() {
				return T
			})), n.d(t, "clickMessageInputEvent", (function() {
				return w
			})), n.d(t, "typeMessageInputEvent", (function() {
				return I
			})), n.d(t, "clickLearnMoreLinkEvent", (function() {
				return D
			})), n.d(t, "clickQuestionMarkEvent", (function() {
				return N
			})), n.d(t, "clickConfirmAwardEvent", (function() {
				return M
			})), n.d(t, "clickGetPremiumEvent", (function() {
				return R
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
				return W
			})), n.d(t, "clickPreviousFiltersEvent", (function() {
				return G
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
				m = e => t => ({
					...u(t, e),
					source: Object(a.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold"
				}),
				p = e => t => ({
					...u(t, e),
					source: "stream_player",
					action: "click",
					noun: "give_gold"
				}),
				b = e => t => ({
					...u(t, e),
					source: Object(a.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award"
				}),
				h = (e, t) => n => ({
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
				C = e => (t, n) => o => ({
					...u(o, n),
					source: Object(a.a)(n) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: l(t)
				}),
				_ = C("award_hovercard_report"),
				x = C("cancel_award_hovercard_report"),
				E = C("flag_award"),
				v = C("cancel_flag_award"),
				O = C("confirm_flag_award"),
				y = C("report_community_award"),
				k = C("cancel_report_community_award"),
				S = C("confirm_report_community_award"),
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
				P = (e, t, n) => o => ({
					...u(o, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: l(e, n)
				}),
				T = (e, t) => n => ({
					...u(n, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				w = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				I = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				D = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				N = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				M = (e, t) => n => ({
					...u(n, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(a.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				R = (e, t) => n => ({
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
				W = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				G = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return h
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "f", (function() {
				return E
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
				m = n("./src/reddit/helpers/correlationIdTracker.ts"),
				p = n("./src/reddit/helpers/isComment.ts"),
				b = n("./src/reddit/helpers/trackers/communityAwards.ts");
			const h = (e, t) => {
					const {
						thingId: n,
						packageId: l
					} = t, h = !!n, f = s.b(e), g = f ? Object(u.getAwardTypeFromAward)(f) : null, C = h ? g : a.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, _ = n ? Object(p.a)(n) ? "comment" : "post" : void 0, x = l || a.t(e), E = [...Object(i.d)(e), ...Object(i.f)(e)].filter(e => e.mobileId === x)[0], v = t.offerContext || (f && 0 === f.coinPrice ? r.a.StorefrontFreeAward : Object(r.d)(E, h)), O = E ? Math.round(1e4 * (E.baselinePennies - E.pennies) / E.baselinePennies) / 100 : 0, y = E ? Math.round(1e4 * (E.coins - E.baselineCoins) / E.coins) / 100 : 0, k = E ? E.baselinePennies !== E.pennies ? `${O}_percent_price` : E.baselineCoins !== E.coins ? `${y}_percent_bonus` : void 0 : void 0, S = C === d.GoldPurchaseType.Premium ? o.wb : E ? E.pennies : void 0;
					return {
						...c.defaults(e),
						comment: n ? c.comment(e, n) : null,
						correlationId: a.r(e) || Object(m.d)(m.a.GoldPayment, !1),
						post: n ? c.post(e, n) : null,
						screen: c.screen(e),
						subreddit: n ? c.subreddit(e) : null,
						goldPurchase: {
							...f ? Object(b.a)(f) : null,
							type: C,
							gildedContent: h,
							contentType: _,
							numberCoins: E ? E.coins : void 0,
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
					...h(o, {
						packageId: t,
						thingId: e,
						offerContext: n
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				g = e => t => ({
					...h(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				C = e => t => ({
					...h(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				_ = e => t => ({
					...h(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				x = (e, t) => n => ({
					...h(n, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				E = e => t => ({
					...h(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				v = (e, t, n) => o => {
					const r = h(o, {
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
					var n;
					const o = h(t, {
						thingId: e
					});
					return {
						...o,
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: {
							...o.payment,
							method: (null === (n = t.platform.currentPage) || void 0 === n ? void 0 : n.queryParams.thanks) ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
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
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "n", (function() {
				return h
			})), n.d(t, "m", (function() {
				return f
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "p", (function() {
				return _
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "l", (function() {
				return y
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
					...m(t, e)
				}),
				l = ({
					postId: e,
					isFollowed: t
				}) => n => ({
					source: o.collection,
					noun: t ? r.unfollow : r.follow,
					...m(n, e)
				}),
				u = ({
					postId: e,
					isFollowed: t
				}) => n => ({
					source: i.a.postEvent,
					noun: t ? r.unfollow : r.follow,
					...m(n, e)
				}),
				m = (e, t) => {
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
				p = e => ({
					...g(e),
					action: s.c.VIEW,
					noun: r.collectionEducation
				}),
				b = e => ({
					...g(e),
					action: s.c.CLICK,
					noun: r.collectionEducationGotIt
				}),
				h = e => ({
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
				C = (e, t) => n => ({
					...m(n, e),
					source: t || o.postOverflowMenu,
					noun: r.collectionAddPost
				}),
				_ = e => t => ({
					...m(t, e),
					source: o.collectionComposer,
					noun: r.collectionRemovePost
				}),
				x = () => e => ({
					...m(e),
					source: o.collectionComposer,
					noun: r.collectionCancel
				}),
				E = () => e => {
					const t = Object(a.n)(e) || void 0;
					return {
						...m(e, t),
						source: o.collectionComposer,
						noun: r.collectionCreate
					}
				},
				v = () => e => ({
					...m(e),
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
				y = e => t => ({
					...m(t),
					source: o.collectionComposer,
					noun: r.collectionEdit,
					postCollection: c.postCollectionI13nByCollectionIdSelector(t, {
						collectionId: e
					})
				}),
				k = e => t => ({
					...m(t, e),
					source: o.collectionComposer,
					noun: r.startEvent
				}),
				S = () => e => {
					const t = Object(a.n)(e) || void 0;
					return {
						...m(e, t),
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
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "d", (function() {
				return _
			}));
			var o, r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/eventTools/index.ts"),
				i = n("./src/lib/timezone/index.ts"),
				a = n("./src/reddit/constants/tracking.ts"),
				c = n("./src/reddit/models/PostCreationForm/index.ts"),
				d = n("./src/reddit/selectors/platform.ts"),
				l = n("./src/reddit/selectors/postCreations.ts"),
				u = n("./src/reddit/selectors/telemetry.ts"),
				m = n("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(o || (o = {}));
			const p = e => u.actionInfo(e, {
					pageType: "event_submit"
				}),
				b = e => {
					Object(m.a)({
						...u.defaults(e),
						source: o.postComposer,
						action: a.c.CLICK,
						noun: "event_create",
						subreddit: u.subreddit(e)
					})
				},
				h = e => {
					Object(m.a)({
						...u.defaults(e),
						source: o.postComposer,
						action: a.c.CLICK,
						noun: "event_edit",
						subreddit: u.subreddit(e),
						postEvent: x(e),
						postComposer: E(e)
					})
				},
				f = () => e => ({
					source: o.eventComposer,
					action: a.c.VIEW,
					noun: a.b.SCREEN,
					actionInfo: p(e),
					postEvent: x(e)
				}),
				g = e => t => ({
					...y(t, Object(d.n)(t)),
					source: o.postComposer,
					noun: "apply",
					postComposer: v(e)
				}),
				C = () => e => ({
					...y(e, Object(d.n)(e)),
					noun: "cancel",
					actionInfo: p(e)
				}),
				_ = e => t => ({
					...y(t, Object(d.n)(t)),
					noun: "delete",
					actionInfo: p(t),
					postComposer: E(t),
					postEvent: O(e)
				}),
				x = e => {
					const t = Object(l.p)(e);
					return t && O(t)
				},
				E = e => v(Object(l.p)(e)),
				v = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === c.j.AtEventTime ? Object(i.f)(e.startDate).getTime() / r.Pb : void 0
					}
				},
				O = e => {
					const t = Object(i.f)(e.startDate).getTime() / r.Pb,
						n = Object(i.f)(e.endDate).getTime() / r.Pb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: n,
						eventState: Object(s.e)(t, n)
					}
				},
				y = (e, t) => {
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
			n.d(t, "q", (function() {
				return i
			})), n.d(t, "r", (function() {
				return a
			})), n.d(t, "s", (function() {
				return c
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "v", (function() {
				return l
			})), n.d(t, "o", (function() {
				return u
			})), n.d(t, "p", (function() {
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "u", (function() {
				return h
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "x", (function() {
				return g
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "y", (function() {
				return x
			})), n.d(t, "w", (function() {
				return E
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "j", (function() {
				return O
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "b", (function() {
				return S
			})), n.d(t, "k", (function() {
				return j
			})), n.d(t, "i", (function() {
				return P
			})), n.d(t, "t", (function() {
				return T
			})), n.d(t, "e", (function() {
				return w
			}));
			var o = n("./src/reddit/models/Prediction/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const s = "poll",
				i = e => ({
					...Object(r.defaults)(e),
					source: s,
					action: "select",
					noun: "poll_option"
				}),
				a = e => ({
					...Object(r.defaults)(e),
					source: s,
					action: "select",
					noun: "prediction_option"
				}),
				c = e => ({
					...Object(r.defaults)(e),
					source: s,
					action: "view",
					noun: "predict_info_modal"
				}),
				d = e => ({
					...Object(r.defaults)(e),
					source: s,
					action: "close",
					noun: "predict_info_modal"
				}),
				l = e => ({
					...Object(r.defaults)(e),
					source: s,
					action: "view",
					noun: "predict_option_modal"
				}),
				u = ({
					pollId: e,
					selectedNumberCoins: t,
					totalStakeAmount: n
				}) => o => ({
					...Object(r.defaults)(o),
					source: s,
					action: "confirm",
					noun: "predict",
					poll: Object(r.poll)(o, e, !1, void 0, t),
					goldPurchase: {
						numberCoins: n
					}
				}),
				m = ({
					pollId: e,
					selectedNumberTokens: t
				}) => n => ({
					...Object(r.defaults)(n),
					source: s,
					action: "confirm",
					noun: "predict",
					poll: Object(r.poll)(n, e, !1, void 0, void 0, t)
				}),
				p = ({
					pollId: e,
					currency: t,
					amount: n
				}) => i => {
					const a = t === o.a.Coins ? n : void 0,
						c = t === o.a.Tokens ? n : void 0;
					return {
						...Object(r.defaults)(i),
						source: s,
						action: "close",
						noun: "prediction_modal",
						poll: Object(r.poll)(i, e, !1, a, c)
					}
				},
				b = e => ({
					...Object(r.defaults)(e),
					source: s,
					action: "click",
					noun: "add_coins"
				}),
				h = e => t => ({
					...Object(r.defaults)(t),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "predictions_leaderboard",
						reason: e ? "prediction_details" : "subreddit_header"
					}
				}),
				f = ({
					targetUserId: e
				}) => t => ({
					...Object(r.defaults)(t),
					source: "predictions",
					action: "click",
					noun: "leaderboard_profile",
					targetUser: {
						id: e
					}
				}),
				g = ({
					numberPredictionTokens: e,
					pollId: t
				}) => n => ({
					...Object(r.defaults)(n),
					source: s,
					action: "view",
					noun: "token_claim_modal",
					poll: Object(r.poll)(n, t, !1, void 0, void 0, e)
				}),
				C = ({
					pageType: e
				}) => t => ({
					...Object(r.defaults)(t),
					source: "predictions",
					action: "click",
					noun: "tournament",
					actionInfo: {
						pageType: e
					}
				}),
				_ = () => e => ({
					...Object(r.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "leaderboard",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					}
				}),
				x = () => e => ({
					...Object(r.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "tournament_leaderboard",
						reason: "predictions_tab"
					}
				}),
				E = () => e => ({
					...Object(r.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "mod_tool_predict"
					}
				}),
				v = () => e => ({
					...Object(r.defaults)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "end_tournament"
				}),
				O = () => e => ({
					...Object(r.defaults)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "rename_tournament"
				}),
				y = e => t => ({
					...Object(r.defaults)(t),
					source: "mod_tool_predict",
					action: "click",
					noun: "enable_predictions",
					actionInfo: {
						pageType: "predictions_picker"
					},
					setting: {
						value: e ? "1" : "0",
						oldValue: e ? "0" : "1"
					}
				}),
				k = () => e => ({
					...Object(r.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "next"
				}),
				S = () => e => ({
					...Object(r.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "add_more"
				}),
				j = () => e => ({
					...Object(r.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "start_tournament"
				}),
				P = () => e => ({
					...Object(r.defaults)(e),
					source: "menu_links_bar",
					action: "click",
					noun: "predictions_tab"
				}),
				T = () => e => ({
					...Object(r.defaults)(e),
					source: "predictions_tab",
					action: "view",
					noun: "predictions_how_it_works"
				}),
				w = () => e => ({
					...Object(r.defaults)(e),
					source: "predictions_how_it_works",
					action: "click",
					noun: "learn_more"
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
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "o", (function() {
				return b
			})), n.d(t, "r", (function() {
				return h
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "n", (function() {
				return _
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "j", (function() {
				return k
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "x", (function() {
				return j
			})), n.d(t, "u", (function() {
				return P
			})), n.d(t, "a", (function() {
				return T
			})), n.d(t, "s", (function() {
				return w
			})), n.d(t, "v", (function() {
				return I
			})), n.d(t, "w", (function() {
				return D
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
				m = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply",
					...s(e)
				}),
				p = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel",
					...s(e)
				}),
				b = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit",
					...s(t),
					scheduledPost: i(e)
				}),
				h = e => t => ({
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
				C = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...s(e)
				}),
				_ = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...s(e)
				}),
				x = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...s(t),
					actionInfo: r.actionInfo(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				E = {
					[o.d.Hourly]: "hourly_frequency",
					[o.d.Daily]: "daily_frequency",
					[o.d.Weekly]: "weekly_frequency",
					[o.d.Monthly]: "monthly_frequency",
					[o.b]: "custom_frequency"
				},
				v = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : E[e],
					...s(t)
				}),
				O = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...s(e)
				}),
				y = (e, t, n) => i => ({
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
				P = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...s(e),
					scheduledPost: i(t)
				}),
				T = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...s(e)
				}),
				w = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...s(e),
					scheduledPost: i(t)
				}),
				I = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...s(e)
				}),
				D = () => (e, t) => {
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
		"./src/reddit/helpers/trackers/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "p", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "l", (function() {
				return p
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "a", (function() {
				return S
			})), n.d(t, "m", (function() {
				return j
			}));
			var o = n("./src/reddit/models/Gold/ProductOffer.ts"),
				r = n("./src/reddit/selectors/avatarMarketing.ts"),
				s = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const a = {
					goldPurchase: {
						offerContext: o.a.AvatarNewGear
					}
				},
				c = e => t => {
					const n = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...s.defaults(t)
					};
					return Object(r.a)(t) && Object.assign(n, a), n
				},
				d = (e, t) => n => {
					const {
						id: o
					} = Object(i.nb)(n, {
						userName: t
					});
					return {
						source: e,
						action: "click",
						noun: "copy_avatar",
						...s.defaults(n),
						snoovatar: {
							userGenerated: o
						}
					}
				},
				l = e => ({
					...s.defaults(e),
					source: "avatar",
					action: "click",
					noun: "try_this_look_post",
					snoovatar: s.snoovatarActiveForBuilderEvent(e)
				}),
				u = e => ({
					...s.defaults(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: s.snoovatarActiveForBuilderEvent(e)
				}),
				m = e => ({
					...s.defaults(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: s.snoovatarActiveForBuilderEvent(e)
				}),
				p = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...s.defaults(e),
					...a
				}),
				b = e => t => n => ({
					source: "avatar",
					action: e,
					noun: "community_spaces",
					...s.defaults(n),
					snoovatar: s.snoovatarActiveForBuilderEvent(n),
					actionInfo: {
						paneName: "avatar_community_spaces" + (t ? "_control" : "")
					}
				}),
				h = b("view"),
				f = b("click"),
				g = b("dismiss"),
				C = (e, t, n) => () => o => ({
					source: e,
					action: t,
					noun: n,
					...s.defaults(o),
					snoovatar: s.snoovatarActiveForBuilderEvent(o)
				}),
				_ = C("anniversary_achievement", "view", "anniversary_achievement"),
				x = C("anniversary_achievement", "click", "close"),
				E = C("anniversary_achievement", "click", "equip"),
				v = e => () => t => ({
					...s.defaults(t),
					source: "gold_top_nav",
					action: e,
					noun: "quick_create_cta"
				}),
				O = v("view"),
				y = v("click"),
				k = (e, t, n) => o => ({
					source: e,
					action: t,
					noun: n,
					...s.defaults(o),
					actionInfo: {
						pageType: "onboarding"
					},
					snoovatar: s.snoovatarActiveForBuilderEvent(o)
				}),
				S = e => k("onboarding", "click", e),
				j = () => k("avatar", "view", "onboarding")
		},
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, n) {
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
			var o = n("./src/reddit/helpers/flair.ts"),
				r = n("./src/reddit/selectors/gold/powerups/index.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const i = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...s.defaults(e)
				}),
				a = e => t => {
					const n = s.subreddit(t),
						i = Object(r.w)(t, {
							subredditId: null == n ? void 0 : n.id
						}),
						{
							userFlair: a,
							achievementFlair: c,
							supporterFlair: d
						} = e,
						l = c || d;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...s.defaults(t),
						subreddit: n,
						userFlair: {
							id: null == a ? void 0 : a.id,
							title: a ? Object(o.g)(a) : void 0,
							isActive: !!a || void 0,
							achievementFlairId: null == c ? void 0 : c.type,
							achievementFlairTitle: null == c ? void 0 : c.name,
							isLocked: null == l ? void 0 : l.isLocked,
							supporterFlairId: null == d ? void 0 : d.type,
							supporterFlairTitle: null == d ? void 0 : d.name,
							isSupporter: i
						}
					}
				},
				c = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...s.defaults(e)
				}),
				d = e => t => ({
					source: "user_flair_picker",
					action: "click",
					noun: "enable_powerups_flair",
					setting: {
						value: e ? "0" : "1",
						oldValue: e ? "1" : "0"
					},
					subreddit: s.subreddit(t),
					...s.defaults(t)
				})
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
				s = Object(r.B)(e);
				const [a, c] = Object(o.useState)(null != s ? s : t);
				return Object(o.useEffect)(() => (n.current = i(e, c, t), () => {
					var e;
					return null === (e = n.current) || void 0 === e ? void 0 : e.deregister()
				}), [e, t]), Object(o.useEffect)(() => {
					var e;
					null === (e = n.current) || void 0 === e || e.emit(a)
				}, [a]), [a, function(t) {
					Object(r.Eb)(e, t), c(t)
				}]
			}
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, n) {
			"use strict";
			var o = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = o.db
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/layout/page/Listing/BackgroundContainer.m.less"),
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
			const m = Object(i.a)(e => {
				const {
					backgroundColor: t,
					className: n,
					redditStyle: o,
					theme: i,
					...d
				} = e, m = Object(c.a)(e), p = {
					"--pseudo-before-background": t || Object(a.g)(m.canvas, m.canvasImgUrl, m.canvasImgPosition)
				};
				return r.a.createElement("div", u({
					className: Object(s.a)(l.a.backgroundContainer, n),
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/structuredStyles.ts"),
				u = n("./src/reddit/layout/page/Listing/Content.m.less"),
				m = n.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const b = Object(d.u)(),
				h = Object(i.c)({
					isEditing: l.i,
					layout: (e, t) => t.forcedLayout || Object(d.Q)(e, t)
				}),
				f = Object(s.b)(h),
				g = ({
					hideOnlyChildMargin: e,
					disableFullscreen: t,
					dispatch: n,
					fitPageToContent: o,
					forcedLayout: s,
					isCollectionLayout: i,
					isEditing: a,
					layout: c,
					pageLayer: d,
					...l
				}) => r.a.createElement("div", l);
			t.a = b(f(({
				className: e,
				...t
			}) => r.a.createElement(g, p({
				className: Object(a.a)(e, m.a.styledContent, {
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				i = n("./src/reddit/layout/page/Listing/Content.tsx"),
				a = n("./src/lib/classNames/index.ts"),
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
					disableFullscreen: _,
					fitPageToContent: x,
					forcedLayout: E,
					hideOnlyChildMargin: v,
					isCollectionLayout: O,
					isPageSwapped: y,
					maxWidth: k,
					navBar: S,
					redditStyle: j,
					sidebar: P,
					sidebars: T,
					trendingUnit: w,
					subredditId: I
				} = e, D = w ? "28px" : "0", N = y ? {
					marginRight: `${c.q}px`,
					marginTop: D
				} : {
					marginLeft: `${c.q}px`,
					marginTop: D
				}, M = P && r.a.createElement("div", {
					className: Object(a.a)(b.a.sidebar, O ? b.a["m-collectionLayout"] : b.a.defaultLayout),
					style: N
				}, P), R = r.a.createElement(i.a, {
					hideOnlyChildMargin: v,
					className: g,
					disableFullscreen: _,
					fitPageToContent: x,
					forcedLayout: E,
					isCollectionLayout: O
				}, f, h);
				let L;
				L = T ? r.a.createElement(r.a.Fragment, null, T[0], R, T[1]) : y ? r.a.createElement(r.a.Fragment, null, M, R) : r.a.createElement(r.a.Fragment, null, R, M);
				const A = _ ? `${k||l.a+2*c.m}px` : "100%",
					F = Object(o.useContext)(u.a);
				return r.a.createElement(m.a, {
					subredditId: I
				}, r.a.createElement("div", {
					className: Object(a.a)(b.a.outerContainer, d.i, n, {
						[b.a.outerContainerExp]: F
					}),
					ref: p
				}, r.a.createElement(s.a, {
					className: d.h,
					redditStyle: j,
					backgroundColor: t
				}), r.a.createElement("div", {
					className: b.a.innerContainer
				}, r.a.createElement("div", {
					className: b.a.bannerNavContainer
				}, S), C, (e => e.hero ? r.a.createElement(r.a.Fragment, null, e.hero) : null)(e), r.a.createElement("div", {
					style: {
						maxWidth: A
					}
				}, w), r.a.createElement("div", {
					className: b.a.body,
					style: {
						maxWidth: A
					}
				}, L))))
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
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "q", (function() {
				return g
			})), n.d(t, "k", (function() {
				return C
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "m", (function() {
				return O
			})), n.d(t, "b", (function() {
				return y
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
				m = e => e.__typename === r.a.Subreddit;
			var p, b, h, f;
			! function(e) {
				e.standalonePosts = "standalonePosts", e.recurringPosts = "recurringPosts"
			}(p || (p = {})),
			function(e) {
				e.MONDAY = "MONDAY", e.TUESDAY = "TUESDAY", e.WEDNESDAY = "WEDNESDAY", e.THURSDAY = "THURSDAY", e.FRIDAY = "FRIDAY", e.SATURDAY = "SATURDAY", e.SUNDAY = "SUNDAY"
			}(b || (b = {})),
			function(e) {
				e[e.MONDAY = 0] = "MONDAY", e[e.TUESDAY = 1] = "TUESDAY", e[e.WEDNESDAY = 2] = "WEDNESDAY", e[e.THURSDAY = 3] = "THURSDAY", e[e.FRIDAY = 4] = "FRIDAY", e[e.SATURDAY = 5] = "SATURDAY", e[e.SUNDAY = 6] = "SUNDAY"
			}(h || (h = {})),
			function(e) {
				e[e.SUNDAY = 0] = "SUNDAY", e[e.MONDAY = 1] = "MONDAY", e[e.TUESDAY = 2] = "TUESDAY", e[e.WEDNESDAY = 3] = "WEDNESDAY", e[e.THURSDAY = 4] = "THURSDAY", e[e.FRIDAY = 5] = "FRIDAY", e[e.SATURDAY = 6] = "SATURDAY"
			}(f || (f = {}));
			const g = e => b[f[e]],
				C = e => f[b[e]],
				_ = e => h[b[e]],
				x = e => b[h[e]],
				E = e => f[h[e]];
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
				y = "custom",
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
				})), s.a.createElement(i.m, {
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
				})), s.a.createElement(i.m, {
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
				m = n("./node_modules/react-router-redux/es/index.js"),
				p = n("./src/lib/classNames/index.ts"),
				b = n("./src/lib/constants/index.ts"),
				h = n("./src/reddit/constants/keycodes.ts"),
				f = n("./src/reddit/helpers/correlationIdTracker.ts"),
				g = n("./src/reddit/models/PostCreationForm/index.ts"),
				C = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				_ = n("./src/reddit/pages/ErrorPages/index.tsx"),
				x = n("./src/reddit/selectors/postCollection.ts"),
				E = n("./src/reddit/components/CrosspostBox/index.tsx"),
				v = n("./src/reddit/components/RequestPendingBanner/index.tsx"),
				O = n("./src/reddit/components/RichTextEditor/media/helpers.ts"),
				y = n("./src/reddit/contexts/PageLayer/index.tsx"),
				k = n("./src/reddit/helpers/trackers/postComposer.ts"),
				S = n("./src/reddit/selectors/activeModalId.ts"),
				j = n("./src/reddit/selectors/platform.ts"),
				P = n("./src/reddit/selectors/postCreations.ts"),
				T = n("./src/reddit/selectors/postDraft.ts"),
				w = n("./src/reddit/selectors/subreddit.ts"),
				I = n("./src/reddit/selectors/user.ts"),
				D = n("./src/reddit/actions/changeUsername.ts"),
				N = n("./src/reddit/actions/externalAccount.ts"),
				M = n("./src/reddit/actions/postCreation/mediaUpload.ts"),
				R = n("./src/reddit/actions/postCreation/submit.ts"),
				L = n("./src/reddit/actions/postCreation/subredditChange.ts"),
				A = n("./src/reddit/actions/postDraft.ts"),
				F = n("./src/reddit/actions/upload.ts"),
				B = n("./src/reddit/helpers/externalAccount/index.tsx"),
				U = n("./node_modules/history/esm/history.js"),
				W = n("./node_modules/react-router/esm/react-router.js"),
				G = n("./src/lib/matchRoute/index.ts"),
				V = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx"),
				H = n("./src/reddit/selectors/scheduledPosts/index.ts");
			const K = "DISCARD_POST_ON_NAVIGATION_MODAL_ID",
				q = Object(i.c)({
					isEditingScheduledPost: e => !!Object(H.r)(e),
					isScheduledPost: P.Q
				});
			var z = Object(s.b)(q)(e => {
					const {
						isEditingScheduledPost: t,
						isScheduledPost: n,
						onAbort: o,
						onDiscardConfirmed: s,
						onSaveDraft: i,
						submissionType: a
					} = e;
					return b.G.has(a) && !n ? r.a.createElement(V.a, {
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
					}) : r.a.createElement(V.a, {
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
				Q = n("./src/reddit/routes/postCreation/index.ts");
			const J = e => (e.returnValue = "", ""),
				Y = Object(i.c)({
					destSubreddit: P.h,
					hasError: P.u,
					havePostContent: P.B,
					isChanged: P.F,
					modalId: S.a,
					submitPostPending: P.mb
				}),
				Z = Object(s.b)(Y, e => ({
					onToggleDiscardModal: () => e(a.y(K))
				}), (e, t, n) => ({
					...e,
					...t,
					...n
				}));
			class X extends r.a.Component {
				constructor() {
					super(...arguments), this.unblockNavigation = null, this.ensureBlocked = e => {
						e.isChanged && (e.havePostContent || e.destSubreddit.name) ? this.block(e) : this.unblock()
					}, this.block = e => {
						this.unblockNavigation || (window.addEventListener("beforeunload", J), this.unblockNavigation = e.history.block((e, t) => {
							if (!Object(G.a)(Object(U.e)(e), [Q.a])) return this.props.modalId !== K && this.props.onToggleDiscardModal(), "Are you sure you want to leave?"
						}))
					}, this.unblock = () => {
						this.unblockNavigation && (this.unblockNavigation(), this.unblockNavigation = null), window.removeEventListener("beforeunload", J)
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
			var $ = Object(y.u)({
					draftId: y.v,
					pageLayer: e => e
				})(Z(Object(W.i)(X))),
				ee = n("./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx"),
				te = n("./src/telemetry/index.ts"),
				ne = n("./src/lib/lessComponent.tsx"),
				oe = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"),
				re = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				se = n("./src/reddit/components/ScheduledPost/PostSchedulePickerModal/loader.tsx"),
				ie = n("./src/reddit/controls/ErrorText/index.tsx"),
				ae = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				ce = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				de = n("./src/reddit/icons/fonts/index.tsx"),
				le = n("./src/reddit/layout/row/Inline/index.tsx"),
				ue = n("./src/reddit/models/Media/index.ts"),
				me = n("./src/reddit/models/Poll/index.ts"),
				pe = n("./src/reddit/models/Upload/index.ts"),
				be = n("./src/reddit/selectors/moderatorPermissions.ts"),
				he = n("./src/reddit/models/Duplicates/index.ts"),
				fe = n("./src/reddit/selectors/posts.ts");
			var ge = n("./src/reddit/controls/Button/index.tsx"),
				Ce = n("./src/reddit/components/PostCreationForm/Button/index.m.less"),
				_e = n.n(Ce);
			const xe = ne.a.wrapped(ge.k, "PrimaryButton", _e.a),
				Ee = ne.a.wrapped(ge.n, "SecondaryButton", _e.a);
			var ve = n("./src/lib/timezone/index.ts"),
				Oe = n("./src/reddit/icons/svgs/Replay/index.tsx"),
				ye = n("./src/reddit/components/PostCreationForm/PostCreationFooter/ScheduledTimeInfo/index.m.less"),
				ke = n.n(ye);
			const {
				fbt: Se
			} = n("./node_modules/fbt/lib/FbtPublic.js"), je = ne.a.div("Container", ke.a), Pe = Object(i.c)({
				eventSchedule: P.p,
				postSchedule: P.bb
			});
			var Te = Object(s.b)(Pe)(e => {
					const {
						eventSchedule: t,
						postSchedule: n
					} = e;
					let o;
					if (t && t.submitTime !== g.j.Now) o = (e => {
						const t = Object(ve.f)(e.startDate);
						let n = `${t.toLocaleDateString(void 0,{month:"numeric",day:"numeric",year:"2-digit"})} ${t.toLocaleTimeString([],{hour:"numeric",minute:"numeric"}).replace(" ","")}`;
						const o = Object(ve.d)(e.timezoneName, +t);
						return o && (n += ` ${o.abbreviation}`), r.a.createElement("span", null, Se._("Will automatically post at", null, {
							hk: "1ixr16"
						}), " ", r.a.createElement("time", {
							dateTime: e.startDate
						}, n))
					})(t);
					else {
						if (!n) return null;
						o = (e => {
							const t = Object(ve.f)(e.submitDate);
							let n = `${t.toLocaleDateString(void 0,{month:"numeric",day:"numeric"})} ${t.toLocaleTimeString([],{hour:"numeric",minute:"numeric"}).replace(" ","")}`;
							const o = Object(ve.d)(e.timezoneName, +t);
							o && (n += ` ${o.abbreviation}`);
							const s = e.recurrenceInfo ? r.a.createElement("span", null, r.a.createElement(Oe.a, {
								className: ke.a.replayIcon
							}), Se._("Recurring post template scheduled for", null, {
								hk: "2tTwIB"
							})) : Se._("Post scheduled for", null, {
								hk: "47yVoo"
							});
							return r.a.createElement("span", null, s, " ", r.a.createElement("time", {
								dateTime: e.submitDate
							}, n))
						})(n)
					}
					return r.a.createElement(je, null, o)
				}),
				we = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Ie = n("./src/lib/linkMatchers/index.ts"),
				De = n("./src/lib/makeActionCreator/index.ts"),
				Ne = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				Me = n("./src/lib/makeApiRequest/index.ts"),
				Re = n("./src/lib/omitHeaders/index.ts"),
				Le = n("./src/reddit/constants/headers.ts"),
				Ae = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			var Fe = n("./src/reddit/actions/postCreation/constants.ts");
			const Be = Object(De.a)(Fe.K),
				Ue = Object(De.a)(Fe.L),
				We = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const s = o(),
						i = Object(Ne.s)(s, {
							pageLayer: t
						});
					if (!i) return;
					const a = Object(P.q)(s, {
						field: e
					});
					if (!a) return;
					const c = Object(P.f)(s),
						l = await ((e, t, n, o, r) => Object(Me.a)(Object(Re.a)(e, [Le.a]), {
							endpoint: `${e.apiUrl}/api/validate_submission_field`,
							method: b.ib.POST,
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
						}).then(Ae.b))(r(), i.name, e, c, a),
						u = l.error || function(e, t) {
							if (e === b.vb.LINK && !Object(Ie.h)(Ie.f, t.url || "")) return {
								fields: [{
									field: b.vb.LINK,
									msg: d.fbt._("Link doesn't look right", null, {
										hk: "11qrsa"
									})
								}],
								type: b.H.SUBMIT_VALIDATION_ERROR
							}
						}(e, a);
					u && u.fields && u.fields.length ? n(Be(u)) : n(Ue(e)), l.error && n(Object(R.c)(l.error))
				};
			var Ge = n("./src/reddit/components/Flair/index.tsx"),
				Ve = n("./src/reddit/controls/TextButton/index.tsx"),
				He = n("./src/reddit/controls/Typography/index.tsx"),
				Ke = n("./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/OCDisclaimer/index.m.less"),
				qe = n.n(Ke);
			const {
				fbt: ze
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Qe = ne.a.wrapped(Ve.a, "DontShowButton", qe.a);
			var Je, Ye = ne.a.wrapped(e => {
					const {
						className: t,
						onDoNotShowClick: n
					} = e;
					return r.a.createElement("div", {
						className: t
					}, r.a.createElement(He.a, null, ze._("Use the OC tag if you want to take credit for your post as Original Content.", null, {
						hk: "2D3GYX"
					})), r.a.createElement(He.a, null, r.a.createElement(Qe, {
						onClick: n
					}, ze._("Cool, whatever, don't show me this again.", null, {
						hk: "4nvsEF"
					}))))
				}, "Component", qe.a),
				Ze = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				Xe = n("./src/reddit/constants/colors.ts");
			! function(e) {
				e.CHAT = "chat", e.FLAIR = "flair", e.GOVERNANCE = "gov", e.SPOILER = "spoiler", e.NSFW = "nsfw", e.ORIGINAL_CONTENT = "originalContent", e.SCHEDULE = "schedule"
			}(Je || (Je = {}));
			var $e = n("./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/PostModifierButton/index.m.less"),
				et = n.n($e);
			ne.a.div("TintOverlay", et.a);
			const tt = (e, t) => {
					switch (t) {
						case Je.ORIGINAL_CONTENT:
							return {
								backgroundColor: Xe.b.orangered, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Je.CHAT:
							return {
								backgroundColor: Xe.b.chat, textColor: e.newCommunityTheme.lightText, iconColor: e.newCommunityTheme.lightText
							};
						case Je.SPOILER:
							return {
								backgroundColor: Xe.b.spoiler, textColor: e.newCommunityTheme.lightText, iconColor: e.newCommunityTheme.lightText
							};
						case Je.NSFW:
							return {
								backgroundColor: Xe.b.nsfw, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Je.FLAIR:
							return {
								backgroundColor: e.newCommunityTheme.flair, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Je.SCHEDULE:
							return {
								backgroundColor: e.newCommunityTheme.active, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Je.GOVERNANCE:
							return {
								backgroundColor: e.newCommunityTheme.line, textColor: e.newCommunityTheme.bodyText, iconColor: e.newCommunityTheme.bodyText
							};
						default:
							return {
								backgroundColor: "none", textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							}
					}
				},
				nt = e => Object(we.a)(t => {
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
						style: m,
						text: b,
						theme: h,
						toggled: f
					} = t, g = i && a ? a : f ? u : n, C = {
						color: t.textColor || h && tt(h, e).textColor,
						fill: t.textColor || h && tt(h, e).iconColor,
						backgroundColor: t.backgroundColor || h && tt(h, e).backgroundColor,
						borderColor: "transparent"
					};
					return r.a.createElement(ge.s, {
						"aria-label": g,
						className: Object(p.a)(s, et.a.PostModifierButton),
						disabled: i,
						Icon: c,
						id: d,
						onClick: l,
						priority: ge.b.Secondary,
						style: {
							...m,
							...f ? C : {}
						},
						text: b
					}, r.a.createElement(Ze.a, {
						text: g,
						className: et.a.HoverTooltip,
						tooltipContentClass: t.shiftTooltipToRight ? et.a.mShiftTooltipToTheRight : void 0
					}), o)
				});
			var ot, rt = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx"),
				st = n("./src/reddit/components/PostFlairPicker/index.tsx");
			! function(e) {
				e.ORIGINAL_CONTENT_DISCLAIMER = "original_content_disclaimer"
			}(ot || (ot = {}));
			var it = n("./src/reddit/constants/postCreation.ts"),
				at = n("./src/reddit/helpers/localStorage/index.ts"),
				ct = n("./src/reddit/helpers/trackers/postEvent.ts"),
				dt = n("./src/reddit/models/Subreddit/index.ts"),
				lt = n("./src/reddit/selectors/chatPost.ts");
			const ut = e => e.creations.formState.fieldValidation;
			var mt = n("./src/telemetry/models/PostComposer.ts"),
				pt = n("./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/index.m.less"),
				bt = n.n(pt);
			const ht = "PostFlair--Modal--CreationForm",
				ft = e => {
					let t = Object(ve.f)(e.startDate).toLocaleDateString(void 0, {
						month: "numeric",
						day: "numeric",
						hour: "numeric",
						minute: "numeric"
					});
					return t = t.replace(" ", "").replace(",", " ")
				},
				gt = ne.a.wrapped(Ge.b, "FlairComponent", bt.a),
				Ct = ne.a.div("FlairTextWrapper", bt.a),
				_t = ne.a.wrapped(le.a, "ModifierRow", bt.a),
				xt = nt(Je.ORIGINAL_CONTENT),
				Et = nt(Je.CHAT),
				vt = nt(Je.SPOILER),
				Ot = nt(Je.NSFW),
				yt = nt(Je.FLAIR),
				kt = nt(Je.SCHEDULE),
				St = Object(y.u)({
					draftId: y.v,
					pageLayer: e => e
				}),
				jt = Object(i.c)({
					activeModalId: S.a,
					canAddPostFlair: P.c,
					canPostAsModerator: P.e,
					currentSubredditId: y.n,
					destSubreddit: P.h,
					destSubredditAboutInfo: P.g,
					eventSchedule: P.p,
					isChatPostAvailable: lt.a,
					isChatPostSelected: P.G,
					isNsfw: P.M,
					isSpoiler: P.R,
					isOriginalContent: P.N,
					flair: P.r,
					postCreationFieldErrors: ut,
					postSchedule: P.bb,
					submissionType: P.a
				}),
				Pt = Object(s.b)(jt, (e, {
					onPostFieldValidation: t,
					pageLayer: n
				}) => ({
					doNotShowOriginalContentDisclaimerClicked: () => e((e, t) => k.e(t())),
					onEventScheduleChange: t => {
						e(a.a(t))
					},
					postFlairAdded: o => {
						e(a.b(o)), t(e(We(b.vb.FLAIR, n)))
					},
					toggleSchedulePicker: (t, n) => {
						e(a.y(g.g)), t && e((e, t) => {
							(n ? ct.g : ct.f)(t())
						})
					},
					toggleChatPostTag: t => {
						e(a.t(!t)), e((e, n) => k.D(n(), !t, mt.ToggleNoun.CHAT))
					},
					toggleFlairPicker: () => e(a.y(ht)),
					toggleNsfwTag: t => {
						e(a.u(!t)), e((e, n) => k.D(n(), !t, mt.ToggleNoun.NSFW))
					},
					toggleOriginalContentTag: t => {
						e(a.v(!t)), e((e, n) => k.D(n(), !t, mt.ToggleNoun.ORIGINAL_CONTENT))
					},
					toggleSpoilerTag: t => {
						e(a.x(!t)), e((e, n) => k.D(n(), !t, mt.ToggleNoun.SPOILER))
					}
				}));
			class Tt extends r.a.Component {
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
						e(), Object(at.nb)(ot.ORIGINAL_CONTENT_DISCLAIMER, !0), this.setState({
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
						const e = this.props.activeModalId !== g.g,
							t = !!this.props.eventSchedule;
						this.props.toggleSchedulePicker(e, t)
					}
				}
				componentDidMount() {
					this.setState({
						showOCDisclaimer: !Object(at.h)(ot.ORIGINAL_CONTENT_DISCLAIMER)
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
						isChatPostAvailable: m,
						isChatPostSelected: h,
						isNsfw: f,
						isSpoiler: C,
						isOriginalContent: _,
						postCreationFieldErrors: x,
						postSchedule: E,
						submissionType: v,
						theme: O,
						toggleFlairPicker: y
					} = this.props, {
						showOCDisclaimer: k
					} = this.state, S = !!u, {
						backgroundColor: j = null,
						textColor: P = null
					} = u || {}, {
						allOriginalContent: T = !1,
						eventPostsEnabled: w = !1
					} = a || {}, I = i.isProfile || Object(dt.g)(a), D = l || !I || T || v === b.Tb.CROSSPOST, N = l || !(i.isProfile || Object(dt.i)(a)), M = l, R = l || !!E;
					return r.a.createElement("div", {
						className: o
					}, r.a.createElement(_t, null, m && r.a.createElement(Et, {
						disabled: M,
						onClick: this.handleChatPostClick,
						toggled: h,
						addModifierTooltip: d.fbt._("Use live chat instead of comments", null, {
							hk: "27t9lW"
						}),
						removeModifierTooltip: d.fbt._("Use comments instead of live chat", null, {
							hk: "3seokS"
						}),
						Icon: Object(de.b)(h ? "checkmark" : "chat"),
						text: d.fbt._("Live Chat", null, {
							hk: "cZlvm"
						})
					}), n && w && r.a.createElement(kt, {
						disabled: R,
						id: it.a,
						onClick: this.handleToggleSchedulePicker,
						shiftTooltipToRight: !0,
						toggled: !!c,
						addModifierTooltip: d.fbt._("Add time and date info", null, {
							hk: "L2KN8"
						}),
						removeModifierTooltip: d.fbt._("Edit event data", null, {
							hk: "1FSblM"
						}),
						Icon: Object(de.b)("scheduled"),
						text: c ? ft(c) : d.fbt._("Event", null, {
							hk: "40pq7b"
						})
					}, c && r.a.createElement(de.a, {
						name: "edit",
						className: bt.a.editScheduledIcon
					})), e === g.g && r.a.createElement(rt.default, {
						schedule: this.props.eventSchedule,
						onClose: this.handleToggleSchedulePicker,
						onChange: this.props.onEventScheduleChange,
						shouldShowSubmitTime: !0,
						shouldShowDeleteButton: !0
					}), r.a.createElement(xt, {
						disabled: D,
						onClick: this.handleOriginalContentClick,
						shiftTooltipToRight: !0,
						toggled: I && (_ || T),
						addModifierTooltip: d.fbt._("Mark this post as Original Content [OC]", null, {
							hk: "3V5aHC"
						}),
						removeModifierTooltip: d.fbt._("Unmark this post as Original Content [OC]", null, {
							hk: "2oj9GI"
						}),
						disabledTooltip: I ? "" : d.fbt._("This community does not allow original content tag", null, {
							hk: "2ydrVm"
						}),
						Icon: Object(de.b)(_ ? "checkmark" : "add"),
						text: d.fbt._("OC", null, {
							hk: "2GRpRs"
						})
					}), r.a.createElement(vt, {
						disabled: N,
						onClick: this.handleSpoilerClick,
						toggled: C,
						addModifierTooltip: d.fbt._("Mark as a spoiler", null, {
							hk: "3ICynB"
						}),
						removeModifierTooltip: d.fbt._("Unmark as a spoiler", null, {
							hk: "34pmqg"
						}),
						disabledTooltip: N ? d.fbt._("This community does not allow spoiler tag", null, {
							hk: "H75tq"
						}) : "",
						Icon: Object(de.b)(C ? "checkmark" : "add"),
						text: d.fbt._("Spoiler", null, {
							hk: "4CA9TG"
						})
					}), r.a.createElement(Ot, {
						disabled: l,
						onClick: this.handleNsfwClick,
						toggled: f,
						addModifierTooltip: d.fbt._("Mark as Not Safe For Work", null, {
							hk: "1LNeZB"
						}),
						removeModifierTooltip: d.fbt._("Unmark Not Safe For Work", null, {
							hk: "1EcrjD"
						}),
						Icon: Object(de.b)(f ? "checkmark" : "add"),
						text: d.fbt._("NSFW", null, {
							hk: "3Tg62D"
						})
					}), r.a.createElement(yt, {
						className: Object(p.a)(bt.a.AddFlair, {
							[bt.a.isToggled]: S,
							[bt.a.mHasError]: x[b.vb.FLAIR].length > 0
						}),
						disabled: !t || l,
						disabledTooltip: i.id ? d.fbt._("Not available for this community", null, {
							hk: "2gkbLI"
						}) : d.fbt._("Select a subreddit to enable flair", null, {
							hk: "1LNvTq"
						}),
						onClick: y,
						toggled: S,
						addModifierTooltip: d.fbt._("Add flair", null, {
							hk: "1RHLMM"
						}),
						removeModifierTooltip: d.fbt._("Change or remove flair", null, {
							hk: "34t9cQ"
						}),
						backgroundColor: j,
						textColor: P,
						Icon: e => r.a.createElement(de.a, {
							name: "tag",
							className: Object(p.a)(e.className, bt.a.FlairIcon)
						}),
						style: {
							"--flairColor": S ? Object(Ge.c)({
								...this.props,
								backgroundColor: j,
								textColor: P
							}) : !t || l ? O.newCommunityTheme.actionIconTinted80 : O.newCommunityTheme.actionIcon
						},
						text: r.a.createElement(r.a.Fragment, null, u ? r.a.createElement(gt, {
							flair: u,
							forceSmallEmojis: !0
						}) : r.a.createElement(Ct, null, d.fbt._("Flair", null, {
							hk: "4Dtvp0"
						})), r.a.createElement(de.a, {
							name: "caret_down",
							className: bt.a.StyledCaretIcon
						}))
					}), e === ht && r.a.createElement(st.a, {
						flairs: u ? [u] : [],
						modalId: ht,
						onFlairChanged: this.handlePostFlairSelected,
						subredditId: s || ""
					})), r.a.createElement(ie.a, {
						className: bt.a.errorMessages,
						messages: x[b.vb.FLAIR]
					}), I && _ && k && r.a.createElement(Ye, {
						onDoNotShowClick: this.handleOCDisclaimerDoNotShowClick
					}))
				}
			}
			var wt = St(Object(we.a)(Pt(Tt))),
				It = n("./src/config.ts"),
				Dt = n("./src/higherOrderComponents/asTooltip.tsx"),
				Nt = n("./src/reddit/components/PostCreationForm/EduTooltips/BaseEduTooltip/index.m.less"),
				Mt = n.n(Nt);
			const {
				fbt: Rt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Lt = ne.a.div("Container", Mt.a), At = ne.a.div("OuterContainer", Mt.a);
			class Ft extends r.a.Component {
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
					return r.a.createElement(At, {
						className: e.className,
						innerRef: this.setTooltipRef,
						style: e.style
					}, r.a.createElement(Lt, {
						className: Mt.a.container
					}, r.a.createElement("img", {
						src: e.heroImagePath,
						className: Mt.a.hero
					}), r.a.createElement("div", {
						className: Mt.a.contentContainer
					}, r.a.createElement("div", {
						className: Mt.a.title
					}, e.title), r.a.createElement("div", {
						className: Mt.a.description
					}, e.description), r.a.createElement("div", {
						className: Mt.a.iconsExplanations
					}, e.iconsExplanations.map((e, t) => {
						const n = e.iconComponent;
						return r.a.createElement("div", {
							className: Mt.a.iconExplanation,
							key: t
						}, r.a.createElement(n, {
							className: Mt.a.icon
						}), e.text)
					})), r.a.createElement(ge.k, {
						className: Mt.a.gotIt,
						onClick: this.onGotItClick
					}, Rt._("Got it", null, {
						hk: "2RPumB"
					})))))
				}
			}
			var Bt = Object(Dt.a)(Ft),
				Ut = n("./node_modules/lodash/debounce.js"),
				Wt = n.n(Ut),
				Gt = n("./src/reddit/actions/modal.ts"),
				Vt = n("./src/reddit/helpers/trackers/postCollection.ts");
			const Ht = [{
					id: it.d,
					getShowTimesLeft: at.J,
					setShowTimesLeft: at.Lb,
					tooltipShown: Vt.n,
					tooltipDismissed: Vt.m
				}, {
					id: it.c,
					getShowTimesLeft: at.I,
					setShowTimesLeft: at.Kb,
					tooltipShown: Vt.f,
					tooltipDismissed: Vt.e
				}],
				Kt = {};
			let qt;
			const zt = () => (void 0 === qt && (qt = Ht.filter(e => e.getShowTimesLeft() > 0).map(e => e.id)), qt),
				Qt = e => {
					const t = zt().indexOf(e);
					t > -1 && zt().splice(t, 1)
				},
				Jt = e => async (t, n) => {
					const o = Ht.find(t => t.id === e);
					o && (Yt(o, !0), Object(te.a)(o.tooltipDismissed(n())))
				}, Yt = (e, t) => {
					e.setShowTimesLeft(t ? 0 : e.getShowTimesLeft() - 1)
				}, Zt = () => async (e, t) => {
					const n = Object(S.a)(t()),
						o = zt().find(e => !!Kt[e]);
					if (!o || o === n) return;
					const r = Ht.find(e => e.id === o);
					r && (Object(te.a)(r.tooltipShown(t())), Yt(r)), e(Gt.i(o))
				}, Xt = Wt()(e => e(), 100);
			var $t = n("./src/reddit/components/PostCreationForm/EduTooltips/CollectionButtonTooltip/index.m.less"),
				en = n.n($t);
			var tn = function(e, t) {
					const n = Object(i.c)({
						isOpen: e => Object(S.a)(e) === t
					});
					class o extends r.a.Component {
						componentDidMount() {
							Kt[t] = !0, Xt(this.props.onShowNextTooltip)
						}
						componentWillUnmount() {
							Kt[t] = !1, Xt(this.props.onShowNextTooltip)
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
							Qt(t), n && e(Jt(t)), e(Gt.i(t)), e(Zt())
						},
						onShowNextTooltip: () => e(Zt())
					}))(o)
				}(e => r.a.createElement(Bt, {
					className: en.a.container,
					description: d.fbt._("Create a series of scheduled events or just group random things. Make something awesome.", null, {
						hk: "40PwoH"
					}),
					heroImagePath: `${It.a.assetPath}/img/collection-tooltip-hero@2x.png`,
					iconsExplanations: [{
						iconComponent: Object(de.b)("add"),
						text: d.fbt._("Compose a post like normal.", null, {
							hk: "466GER"
						})
					}, {
						iconComponent: Object(de.b)("collection"),
						text: d.fbt._("Create & name your collection.", null, {
							hk: "3BuZKz"
						})
					}, {
						iconComponent: Object(de.b)("add_to_feed"),
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
					tooltipId: it.g
				}), it.c),
				nn = n("./src/reddit/components/PostCreationForm/ControlRow/ToggleDestCollectionButton/index.m.less"),
				on = n.n(nn);
			var rn = r.a.memo(e => {
					const {
						disabled: t,
						isToggled: n
					} = e, o = n ? "delete" : "collection";
					return r.a.createElement(ge.s, {
						className: on.a.button,
						priority: ge.b.Plain,
						disabled: t,
						id: it.g,
						onClick: e.onClick,
						Icon: Object(de.b)(o)
					}, r.a.createElement(Ze.a, {
						text: n ? d.fbt._("Cancel adding to collection", null, {
							hk: "359w09"
						}) : d.fbt._("Add to collection", null, {
							hk: "48nVCZ"
						})
					}), !n && r.a.createElement(tn, null))
				}),
				sn = n("./src/reddit/components/TrackingHelper/index.tsx"),
				an = n("./src/reddit/actions/economics/predictions/index.ts"),
				cn = n("./src/reddit/actions/toaster.ts"),
				dn = n("./src/reddit/helpers/trackers/predictions.ts"),
				ln = n("./src/reddit/hooks/usePageLayer.ts"),
				un = n("./src/reddit/hooks/useTracking.ts"),
				mn = n("./src/reddit/models/Toast/index.ts"),
				pn = n("./src/reddit/selectors/experiments/econ/index.ts"),
				bn = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				hn = n("./src/higherOrderComponents/asModal/index.tsx");
			const {
				fbt: fn
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var gn = Object(hn.a)((function({
					onClose: e
				}) {
					const t = Object(s.d)(),
						n = Object(un.a)(),
						[i, c] = Object(o.useState)(!1),
						d = Object(s.e)(P.s),
						l = Object(s.e)(P.t),
						u = Object(ln.a)(),
						{
							subredditName: p
						} = (null == u ? void 0 : u.urlParams) || {},
						b = Object(s.e)(e => Object(w.B)(e, p));
					return r.a.createElement(V.a, {
						titleText: fn._("Prediction created", null, {
							hk: "1O6btq"
						}),
						bodyText: fn._("The prediction remains unpublished until the tournament begins. More predictions can be added at any time before the tournament ends.", null, {
							hk: "20T2xQ"
						}),
						onClose: e,
						primaryButtonText: fn._("Start Tournament", null, {
							hk: "ft2Io"
						}),
						primaryButtonLoading: i,
						onPrimaryAction: async () => {
							n(Object(dn.k)()), c(!0), t(Object(an.b)({
								prediction: {
									formData: d,
									formState: l
								}
							}));
							try {
								await t(Object(an.g)({
									subredditId: b
								})), t(Object(a.r)()), t(Object(an.s)()), t(Object(m.b)(`/r/${p}/predictions/`))
							} catch (e) {
								t(Object(an.r)()), t(Object(cn.f)({
									duration: 5e3,
									kind: mn.b.Error,
									text: fn._("Error: Failed to create prediction tournament", null, {
										hk: "1gJN9i"
									})
								}))
							}
							c(!1)
						},
						onSecondaryAction: () => {
							n(Object(dn.b)()), t(Object(an.b)({
								prediction: {
									formData: d,
									formState: l
								}
							})), t(Object(a.r)()), t(Object(a.g)({
								submissionType: "poll"
							})), t(Object(a.w)(!0)), t(Object(a.k)({
								oldType: me.a.GA,
								type: me.a.Prediction
							})), e()
						},
						secondaryButtonText: fn._("Create Another", null, {
							hk: "pQB1L"
						})
					})
				})),
				Cn = n("./src/reddit/components/PostCreationForm/ControlRow/AddTournamentPredictionButton/index.m.less"),
				_n = n.n(Cn);
			const {
				fbt: xn
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function En({
				className: e,
				disabled: t
			}) {
				const n = Object(s.d)(),
					i = Object(un.a)(),
					c = Object(s.e)(P.s),
					d = Object(s.e)(P.t),
					[l, u] = Object(o.useState)(!1),
					[b, h] = Object(o.useState)(!1),
					f = Object(s.e)(P.D),
					g = Object(s.e)(P.x),
					C = Object(s.e)(P.w),
					_ = Object(ln.a)(),
					x = Object(s.e)(e => Object(Ne.o)(e, {
						pageLayer: _
					})),
					E = Object(s.e)(e => Object(w.Q)(e, {
						subredditId: x
					})),
					v = Object(s.e)(e => Object(bn.b)(e, {
						subredditId: x
					})),
					O = Object(s.e)(pn.b);
				return r.a.createElement("div", {
					className: Object(p.a)(_n.a.addTournamentPredictionButton, e)
				}, r.a.createElement(ge.k, {
					disabled: b || t || !g || !C,
					onClick: () => {
						v && !O ? (async () => {
							h(!0), n(Object(an.b)({
								prediction: {
									formData: c,
									formState: d
								}
							}));
							try {
								await n(Object(an.a)(v.tournamentId, x)), n(Object(a.r)()), n(Object(an.s)()), n(Object(m.b)(`/r/${E.name}/predictions/`))
							} catch (e) {
								n(Object(an.r)()), e.message.match(/max limit/) ? n(Object(cn.f)({
									duration: 1e4,
									kind: mn.b.Error,
									text: xn._("Error: Failed to add prediction to tournament, there can only be 100 predictions created for a tournament", null, {
										hk: "UqJLw"
									})
								})) : n(Object(cn.f)({
									duration: 5e3,
									kind: mn.b.Error,
									text: xn._("Error: Failed to add prediction to tournament", null, {
										hk: "3YK8YR"
									})
								}))
							}
							h(!1)
						})() : (i(Object(dn.g)()), u(!0))
					}
				}, b ? r.a.createElement(ae.a, {
					sizePx: 16
				}) : v ? xn._("Post", null, {
					hk: "12GkA5"
				}) : xn._("Next", null, {
					hk: "2m41ub"
				})), r.a.createElement("div", {
					className: _n.a.tooltip
				}, f ? g ? C ? null : xn._("End must be at least one hour from now", null, {
					hk: "lWM41"
				}) : xn._("Options cannot be empty", null, {
					hk: "2BR1pQ"
				}) : xn._("A title is required", null, {
					hk: "2hoEW2"
				})), l && r.a.createElement(gn, {
					onClose: () => u(!1)
				}))
			}
			var vn = n("./src/reddit/components/PostCreationForm/ControlRow/index.m.less"),
				On = n.n(vn);
			const yn = () => d.fbt._("Post", null, {
					hk: "47QFCY"
				}),
				kn = () => d.fbt._("Cancel", null, {
					hk: "2TSLl5"
				}),
				Sn = () => d.fbt._("Saved!", null, {
					hk: "34qXtS"
				}),
				jn = () => d.fbt._("Save Draft", null, {
					hk: "3wckxd"
				}),
				Pn = () => d.fbt._("Updated!", null, {
					hk: "45fGGU"
				}),
				Tn = () => d.fbt._("Update draft", null, {
					hk: "1c8tCb"
				}),
				wn = () => d.fbt._("Please fix the above requirements", null, {
					hk: "17Yk98"
				}),
				In = () => d.fbt._("Something went wrong. Just don't panic.", null, {
					hk: "4x2ypi"
				}),
				Dn = 10,
				Nn = e => {
					return [b.Tb.LINK_ONLY, b.Tb.POLL, b.Tb.POST].includes(e)
				},
				Mn = ne.a.div("ButtonsAndErrors", On.a),
				Rn = ne.a.wrapped(le.a, "ButtonRow", On.a),
				Ln = ne.a.div("ButtonLayout", On.a),
				An = ne.a.div("SaveDraftButtonLayout", On.a),
				Fn = ne.a.wrapped(ae.a, "PostLoadingIcon", On.a),
				Bn = ne.a.wrapped(Fn, "DraftLoadingIcon", On.a),
				Un = Object(i.a)(P.eb, re.a.getMediaCount),
				Wn = (e, t) => {
					return !!!Object(y.k)(e, t) && e.creations.formData.isPoll
				},
				Gn = [],
				Vn = e => {
					const t = Object(P.eb)(e),
						n = Object(P.kb)(e);
					if (!t.isBound || n !== b.Tb.POST || !Object(P.gb)(e)) return Gn;
					const o = (e => {
						const {
							allowedPostTypes: t,
							name: n
						} = Object(P.h)(e), o = Un(e);
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
						const t = Un(e);
						if (!t) return Gn;
						const n = [];
						return t.image > b.Z && n.push(d.fbt._("Post may not contain more that 20 images", null, {
							hk: "1Szc36"
						})), t.video + t.gifvideo > b.cb && n.push(d.fbt._("Post may not contain more that 5 videos", null, {
							hk: "2WhZ8k"
						})), n
					})(e)
				},
				Hn = (e, {
					sourcePostId: t
				}) => {
					const n = Object(P.ib)(e, {
							sourcePostId: t
						}),
						{
							allowedPostTypes: o,
							id: r,
							isProfile: s,
							name: i
						} = Object(P.h)(e);
					if (!t) return d.fbt._("A source post is required to crosspost", null, {
						hk: "2TeLDw"
					});
					if (!r) return d.fbt._("A destination community is required to crosspost", null, {
						hk: "3haidF"
					});
					const a = s ? Object(I.fb)(e, {
						userId: r
					}) : r;
					if (a) {
						if (((e, t, n) => {
								const o = Object(he.a)(n, {
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
								})(e, t, Object(he.a)(n, {
									sort: "new",
									crossposts_only: !0
								}));
								return 0 !== o.length && Object(fe.y)(e, o[0])
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
					} = Object(w.t)(e, {
						subredditName: i
					});
					if (!c) return d.fbt._("This community does not allow for crossposting of any posts", null, {
						hk: "2KrrAO"
					});
					switch (n.media && n.media.type) {
						case ue.o.TEXT:
						case ue.o.RTJSON:
							return !o.text && d.fbt._("This community does not allow for crossposting of text posts", null, {
								hk: "1a4voI"
							});
						case ue.o.IMAGE:
							return !o.images && d.fbt._("This community does not allow for crossposting of image posts", null, {
								hk: "tGzk7"
							});
						case ue.o.VIDEO:
						case ue.o.GIFVIDEO:
						case ue.o.EMBED:
							return !o.videos && d.fbt._("This community does not allow for crossposting of video posts", null, {
								hk: "w6HED"
							})
					}
					return null
				},
				Kn = (e, {
					sourcePostId: t
				}) => {
					const n = Object(P.U)(e),
						o = Object(P.eb)(e),
						r = Object(P.kb)(e);
					if (r === b.Tb.IMAGE_ONLY) return !1;
					if (!Object(P.h)(e).name || !Object(P.D)(e)) return !1;
					if (r === b.Tb.POST || r === b.Tb.POLL) {
						const t = Vn(e),
							n = !re.a.isAllMediaUploaded(o, e.uploads);
						return !t.length && !n
					}
					if (r === b.Tb.MEDIA) {
						const {
							items: t
						} = n, o = t.every(t => {
							const n = e.uploads[t.uploadKey];
							return !(!n || !n.url || n.status !== pe.a.SUCCESS)
						});
						return t.length > 0 && o
					}
					return r === b.Tb.LINK_ONLY ? Object(P.y)(e) : r === b.Tb.CROSSPOST && !Hn(e, {
						sourcePostId: t
					})
				},
				qn = Object(i.c)({
					isPoll: Wn,
					activeModalId: S.a,
					currentSubredditOrProfile: y.p,
					canPostAsModerator: P.e,
					currentCollection: y.g,
					errorMsgs: (e, {
						sourcePostId: t
					}) => {
						if (Object(P.u)(e)) return Object(P.o)(e);
						if (t) {
							const n = Hn(e, {
								sourcePostId: t
							});
							if (n) return [n]
						}
						return Vn(e)
					},
					eventSchedule: P.p,
					hasDraftError: T.f,
					hasError: P.u,
					hasSubmitValidationError: P.v,
					destSubredditAboutInfo: P.g,
					govType: e => e.creations.formData.govType,
					isAddingToTournament: (e, {
						subredditId: t
					}) => !!t && Object(P.E)(e, {
						subredditId: t
					}),
					isChatPostSelected: P.G,
					isContestMode: P.H,
					isCreatingTournamentPrediction: (e, {
						subredditId: t
					}) => !!t && Object(P.I)(e, {
						subredditId: t
					}),
					isDraftsFeatureEnabled: (e, t) => !Wn(e, t),
					isDraftPending: T.g,
					isMediaUploadPending: P.V,
					isModeratorSomewhere: be.j,
					isPostAsMetaMod: P.O,
					isPostPending: P.mb,
					isPostSubmitEnabled: Kn,
					isSaveDraftEnabled: e => {
						const t = Object(P.kb)(e);
						if (!b.G.has(t) || !Object(P.F)(e)) return !1;
						const n = Object(P.h)(e),
							o = Object(P.n)(e),
							r = t === b.Tb.LINK_ONLY && Object(P.y)(e),
							s = t === b.Tb.POST && o === g.i.RICH_TEXT && Object(P.C)(e),
							i = t === b.Tb.POST && o === g.i.MARKDOWN && Object(P.z)(e),
							a = r || s || i;
						return !!n.name || Object(P.D)(e) || a
					},
					isScheduledPost: P.Q,
					postSchedule: P.bb,
					postToTwitter: P.db,
					isEditingScheduledPost: e => !!Object(H.r)(e),
					showContributorRequestFlow: e => Object(w.q)(e, C.e.Post),
					showScheduledPosts: P.hb,
					stickyPosition: P.jb,
					submissionType: P.a,
					submitMode: P.lb,
					suggestedSort: P.ob
				}),
				zn = Object(y.u)(),
				Qn = Object(s.b)(qn, e => ({
					onResetDestCollection: () => e(L.c()),
					onScheduledPostSettingsChange: t => e(a.B(t)),
					onTrackCancelButtonClick: () => {
						e((e, t) => k.a(t()))
					},
					openCollectionsListOrCreationModal: t => e(a.m(t)),
					togglePostSchedulePicker: () => e(a.y(g.o)),
					clickPostSchedule: () => {
						e((e, t) => Object(te.a)(Object(ce.i)()(t())))
					}
				})),
				Jn = 2e3,
				Yn = e => e ? d.fbt._("Update", null, {
					hk: "3MoYFL"
				}) : d.fbt._("Schedule", null, {
					hk: "4bXWUG"
				});
			class Zn extends r.a.Component {
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
						n && (o(n.id), r(Object(Vt.b)(void 0, Vt.a.collectionComposer)))
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
						return !!e || t || !Nn(n)
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
						}, Jn)
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
					return t ? n ? Pn() : Sn() : e ? Tn() : jn()
				}
				render() {
					const {
						activeModalId: e,
						canPostAsModerator: t,
						currentCollection: n,
						destSubredditAboutInfo: s,
						govType: i,
						hasError: a,
						hasSubmitValidationError: c,
						isEditingScheduledPost: l,
						errorMsgs: u,
						isAddingToTournament: m,
						isContestMode: h,
						isCreatingTournamentPrediction: f,
						isDraftsFeatureEnabled: _,
						isDraftPending: x,
						isPoll: E,
						isMediaUploadPending: v,
						isOpenAISubRec: O,
						isPostAsMetaMod: y,
						isPostPending: k,
						isSaveDraftEnabled: S,
						isScheduledPost: j,
						onPostFieldValidation: P,
						onSaveDraft: T,
						onScheduledPostSettingsChange: w,
						onSubmit: I,
						postSchedule: D,
						sendEvent: N,
						shouldRenderDivider: M = !0,
						showContributorRequestFlow: R,
						showScheduledPosts: L,
						stickyPosition: A,
						submissionType: F,
						submitMode: B,
						suggestedSort: U,
						togglePostSchedulePicker: W
					} = this.props, {
						isSaved: G
					} = this.state, V = x || k || v, H = B === g.r.Post && v, K = B === g.r.Draft && v, {
						collectionsEnabled: q = !1
					} = s || {}, z = V, Q = Object(p.a)(On.a.ButtonLayout, {
						[On.a.autoWidth]: E || R || L
					}), J = i === me.a.Prediction && (f || m);
					return r.a.createElement("div", {
						className: Object(p.a)(On.a.Container, {
							[On.a.isSubRec]: O
						})
					}, r.a.createElement(wt, {
						className: On.a.postModifiers,
						disabled: V,
						onPostFieldValidation: P
					}), M && r.a.createElement("hr", {
						className: On.a.Divider
					}), r.a.createElement(Mn, null, r.a.createElement(Rn, null, r.a.createElement("div", {
						className: Q
					}, R ? r.a.createElement(oe.default, {
						eventSource: C.b.PostSubmission,
						smallButton: !0
					}) : J ? r.a.createElement(En, {
						disabled: this.shouldDisablePostButton()
					}) : r.a.createElement(xe, {
						disabled: this.shouldDisablePostButton(),
						onClick: I,
						className: Object(p.a)(L && On.a.removeRightBorderRadius)
					}, k || H ? r.a.createElement(Fn, {
						sizePx: Dn
					}) : r.a.createElement(o.Fragment, null, j ? Yn(l) : yn())), L && !J && r.a.createElement(xe, {
						title: d.fbt._("Make a scheduled post", null, {
							hk: "3TBSMs"
						}),
						disabled: this.shouldDisablePostScheduleButton(),
						onClick: this.openPostSchedulePickerModal,
						className: On.a.postScheduleButton,
						Icon: D ? Object(de.b)("edit", {
							className: On.a.postScheduleIcon
						}) : Object(de.b)("scheduled", {
							className: On.a.postScheduleIcon
						})
					})), e === g.o && r.a.createElement(se.a, {
						isContestMode: h,
						isPostAsMetaMod: y,
						sendEvent: N,
						schedule: D,
						stickyPosition: A,
						suggestedSort: U,
						onChange: w,
						onClose: W
					}), _ && F !== b.Tb.MEDIA && F !== b.Tb.POLL && !j ? r.a.createElement(An, null, r.a.createElement(Ee, {
						disabled: !S || V || G,
						onClick: T
					}, x || K ? r.a.createElement(Bn, {
						sizePx: Dn
					}) : this.getSaveDraftButtonText())) : r.a.createElement(Ln, null, r.a.createElement(Ee, {
						disabled: V || G,
						onClick: this.onCancel
					}, kn())), q && t && r.a.createElement(rn, {
						disabled: z,
						isToggled: !!n,
						onClick: this.handleDestCollectionClick
					})), r.a.createElement(Te, null), !!(a || u.length || c) && r.a.createElement(ie.a, {
						className: On.a.errorMessages,
						messages: u,
						fallbackMessage: c ? wn() : In()
					})))
				}
			}
			var Xn = zn(Qn(Object(sn.c)(Zn))),
				$n = n("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx"),
				eo = n("./src/reddit/constants/posts.ts"),
				to = n("./src/reddit/controls/SubredditPicker/index.tsx"),
				no = n("./src/reddit/controls/SubredditPicker/helpers.ts"),
				oo = n("./src/reddit/helpers/name/index.ts"),
				ro = n("./src/reddit/components/PostCreationForm/CreationControls/index.m.less"),
				so = n.n(ro);
			const io = Object(i.a)(P.h, S.a, P.X, I.k, y.r, I.C, (e, t, n, o, r, s) => {
					const i = n && !t ? n : e;
					if (!i || !i.name) return Object(no.b)("", null, null, s);
					const {
						name: a,
						isProfile: c
					} = i;
					return c ? Object(no.b)(Object(oo.d)(a), null, o, s) : Object(no.b)(Object(oo.c)(a), r, null, s)
				}),
				ao = Object(i.c)({
					pending: P.Z,
					pickerValue: io
				}),
				co = Object(s.b)(ao, (e, {
					draftId: t,
					pageLayer: n
				}) => ({
					onSubredditChangeRequested: t => e(L.b(t, n)),
					onTrackSubredditPickerClick: () => e((e, t) => k.B(t()))
				}));
			class lo extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.inputRef = null, this.onSelectSubreddit = e => {
						const {
							rawString: t,
							record: n
						} = e, o = {
							name: n && n.name || Object(oo.g)(t),
							isProfile: n && n.type === eo.a.PROFILE || Object(oo.f)(t),
							allowedPostTypes: n && n.allowedPostTypes
						};
						this.props.onSubredditChangeRequested(o)
					}, this.setInputRef = e => this.inputRef = e
				}
				render() {
					return r.a.createElement(le.a, {
						className: Object(p.a)(so.a.ControlRow, this.props.className)
					}, r.a.createElement(to.a, {
						allowCrosspostableOnly: this.props.allowCrosspostableOnly,
						className: so.a.SubredditPicker,
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
			var uo = Object(y.u)({
					draftId: y.v,
					pageLayer: e => e
				})(co(lo)),
				mo = n("./node_modules/lodash/range.js"),
				po = n.n(mo),
				bo = n("./src/reddit/icons/svgs/Close/index.tsx"),
				ho = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				fo = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				go = n("./src/reddit/models/User/index.ts"),
				Co = n("./src/reddit/components/HumanDate/index.tsx"),
				_o = n("./src/reddit/models/PostDraft/index.ts"),
				xo = n("./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/Icon.m.less"),
				Eo = n.n(xo),
				vo = n("./src/lib/constants/icons.ts");

			function Oo() {
				return (Oo = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const yo = {
				[_o.b.Image]: vo.a.image_post,
				[_o.b.Link]: vo.a.link_post,
				[_o.b.Markdown]: vo.a.text_post,
				[_o.b.RichText]: vo.a.text_post,
				[_o.b.Video]: vo.a.video_post
			};
			var ko = ne.a.wrapped(e => {
					const {
						draftKind: t,
						...n
					} = e, o = yo[t] || vo.a.link_post;
					return r.a.createElement(de.a, Oo({
						name: o
					}, n))
				}, "Component", Eo.a),
				So = n("./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/index.m.less"),
				jo = n.n(So);
			const Po = ne.a.div("Container", jo.a),
				To = ne.a.div("LeftBlock", jo.a),
				wo = ne.a.div("Content", jo.a),
				Io = ne.a.div("RightBlock", jo.a),
				Do = ne.a.h2("PostTitle", jo.a),
				No = ne.a.wrapped(Do, "EditingPostTitle", jo.a),
				Mo = ne.a.div("MetaLine", jo.a),
				Ro = ne.a.span("SubredditName", jo.a),
				Lo = ne.a.time("DraftSavedTime", jo.a),
				Ao = ne.a.wrapped(fo.b, "TrashIcon", jo.a),
				Fo = ne.a.div("InteractiveDiv", jo.a),
				Bo = ne.a.button("ConfirmDelete", jo.a),
				Uo = Object(i.c)({
					isDraftDeletionPending: (e, {
						draft: {
							id: t
						}
					}) => Object(T.a)(e, t),
					subreddit: (e, {
						draft: {
							subredditId: t
						}
					}) => t ? Object(w.Q)(e, {
						subredditId: t
					}) : void 0,
					user: I.k
				}),
				Wo = Object(s.b)(Uo, (e, {
					pageLayer: t
				}) => ({
					deleteDraft: n => e(A.o(n, t))
				})),
				Go = Object(y.u)({
					currentDraftId: y.v,
					pageLayer: e => e
				}),
				Vo = 1e3;
			class Ho extends r.a.Component {
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
					} = this.props, i = o && Object(dt.h)(o) && s ? {
						displayText: Object(oo.d)(Object(go.e)(s)),
						url: `/user/${Object(go.e)(s)}/`
					} : o;
					if (n) return null;
					const a = e.title || d.fbt._("Untitled", null, {
						hk: "2gEXjp"
					});
					return r.a.createElement(Po, {
						onClick: this.onClick
					}, r.a.createElement(To, null, r.a.createElement(ko, {
						draftKind: e.kind
					})), r.a.createElement(wo, null, t === e.id ? r.a.createElement(No, {
						"data-redditstyle": !0
					}, d.fbt._("EDITING: {postTitle}", [d.fbt._param("postTitle", a)], {
						hk: "3M5MUj"
					})) : r.a.createElement(Do, {
						"data-redditstyle": !0
					}, a), r.a.createElement(Mo, {
						"data-redditstyle": !0
					}, i && r.a.createElement(Ro, {
						"data-redditstyle": !0
					}, i.displayText), i && r.a.createElement(ho.b, null), r.a.createElement(Lo, null, d.fbt._("Draft saved {draftSavedAtTime}", [d.fbt._param("draftSavedAtTime", r.a.createElement(Co.d, {
						seconds: (e.modified || e.created) / Vo
					}))], {
						hk: "2HjAWY"
					})))), r.a.createElement(Io, null, this.state.showConfirmText ? r.a.createElement(Bo, {
						onClick: this.onConfirmClick,
						"data-redditstyle": !0
					}, t === e.id ? d.fbt._("Delete working draft?", null, {
						hk: "2iGoUj"
					}) : d.fbt._("Confirm", null, {
						hk: "2bjb66"
					})) : r.a.createElement(Fo, {
						onClick: this.onTrashCanClick
					}, r.a.createElement(Ao, {
						"data-redditstyle": !0
					}))))
				}
			}
			var Ko = Go(Wo(Ho)),
				qo = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				zo = n("./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/Placeholder.m.less"),
				Qo = n.n(zo);
			const Jo = ne.a.div("Container", Qo.a),
				Yo = ne.a.div("LeftBlock", Qo.a),
				Zo = ne.a.div("Content", Qo.a),
				Xo = ne.a.div("MediaIcon", Qo.a),
				$o = ne.a.div("Title", Qo.a),
				er = ne.a.div("Secondary", Qo.a);
			var tr = ({
					className: e,
					isLoading: t
				}) => r.a.createElement(Jo, {
					className: e,
					"data-redditstyle": !0
				}, r.a.createElement(Yo, null, r.a.createElement(Xo, {
					className: Object(qo.a)({
						isLoading: t
					}),
					"data-redditstyle": !0
				})), r.a.createElement(Zo, null, r.a.createElement($o, {
					className: Object(qo.b)({
						isLoading: t
					}),
					"data-redditstyle": !0
				}), r.a.createElement(er, {
					className: Object(qo.b)({
						isLoading: t
					}),
					"data-redditstyle": !0
				}))),
				nr = n("./src/reddit/components/PostCreationForm/DraftListModal/index.m.less"),
				or = n.n(nr);

			function rr() {
				return (rr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: sr
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ir = `${It.a.assetPath}/img/snoo-drafts.png`, ar = 3, cr = ne.a.div("Wrapper", or.a), dr = ne.a.div("TitleRow", or.a), lr = ne.a.span("DraftsNumber", or.a), ur = ne.a.div("DetailsContainer", or.a), mr = ne.a.wrapped(le.a, "ButtonRow", or.a), pr = ne.a.wrapped(ge.n, "CancelButton", or.a), br = ne.a.div("CloseWrapper", or.a), hr = ne.a.wrapped(bo.a, "Close", or.a), fr = ne.a.div("Empty", or.a), gr = ne.a.img("EmptyImage", or.a), Cr = ne.a.p("EmptyText", or.a), _r = Object(i.c)({
				drafts: T.c,
				isPending: T.b,
				maxDrafts: I.W
			}), xr = Object(s.b)(_r);
			class Er extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === h.a.Escape && this.props.onClose()
					}, this.renderItem = e => r.a.createElement(Ko, {
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
					return r.a.createElement(tr, {
						isLoading: !0,
						key: e
					})
				}
				renderEmpty() {
					return r.a.createElement(fr, null, r.a.createElement(gr, {
						src: ir
					}), r.a.createElement(Cr, null, sr._("Your drafts will live here", null, {
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
					return o = t ? po()(ar).map(this.renderPlaceholder) : 0 === e.length ? this.renderEmpty() : e.map(this.renderItem), r.a.createElement(cr, {
						"data-redditstyle": !0
					}, r.a.createElement(dr, {
						"data-redditstyle": !0
					}, sr._("Drafts", null, {
						hk: "1fvOmI"
					}), r.a.createElement(lr, {
						"data-redditstyle": !0
					}, e.length, "/", n), r.a.createElement(br, {
						onClick: this.props.onClose
					}, r.a.createElement(hr, {
						"data-redditstyle": !0
					}))), r.a.createElement(ur, null, o), r.a.createElement(mr, {
						"data-redditstyle": !0
					}, r.a.createElement(pr, {
						onClick: this.props.onClose,
						"data-redditstyle": !0
					}, sr._("Close", null, {
						hk: "4gbyAA"
					}))))
				}
			}
			const vr = ne.a.wrapped(Object(hn.a)(xr(Er)), "DraftListModal", or.a);
			var Or = e => r.a.createElement(vr, rr({
					withOverlay: !0,
					onOverlayClick: e.onClose
				}, e)),
				yr = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				kr = n("./src/lib/forceHttps/index.ts"),
				Sr = n("./src/reddit/components/PostCreationForm/SafeHarborText/index.m.less"),
				jr = n.n(Sr);
			const {
				fbt: Pr
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Tr = new RegExp(`\\b(${[...ue.x].join("|")})\\.com$`, "i"), wr = new RegExp(`\\.(${ue.w.join("|")})$`), Ir = ne.a.div("TextContainer", jr.a);
			class Dr extends r.a.Component {
				constructor() {
					super(...arguments), this.isUrlScraped = e => {
						const t = Object(yr.parse)(Object(kr.a)(e));
						return !(!t.hostname || !Tr.test(t.hostname)) || !(!t.pathname || !wr.test(t.pathname))
					}
				}
				render() {
					return this.props.value && this.isUrlScraped(this.props.value) ? r.a.createElement(Ir, null, Pr._("Posting this link saves the image or gif to Reddit", null, {
						hk: "1zFV82"
					})) : null
				}
			}
			var Nr = n("./node_modules/react-autosize-textarea/lib/index.js"),
				Mr = n.n(Nr),
				Rr = n("./src/reddit/controls/GrowingOutlinedInput/index.m.less"),
				Lr = n.n(Rr);

			function Ar() {
				return (Ar = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			class Fr extends r.a.Component {
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
					return r.a.createElement(Mr.a, Ar({}, i, {
						className: Object(p.a)(Lr.a.growingOutlinedInput, t),
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
			var Br = n("./src/reddit/components/PostCreationForm/LinkEditor/index.m.less"),
				Ur = n.n(Br);
			const Wr = Object(i.c)({
					pending: P.Z,
					postCreationFieldErrors: ut,
					subreddit: y.r,
					value: P.S
				}),
				Gr = Object(s.b)(Wr, (e, {
					onChange: t,
					onPostFieldValidation: n,
					pageLayer: o
				}) => ({
					onBlur: () => {
						n(e(We(b.vb.LINK, o)))
					},
					onChange: n => {
						e(a.q(n)), t(n)
					},
					onFocus: () => e((e, t) => k.o(t(), g.l.CLICK, g.m.URL))
				}));
			var Vr, Hr = Object(y.u)()(Gr(e => {
					const {
						pending: t,
						postCreationFieldErrors: n,
						subreddit: o,
						value: s
					} = e, i = n[b.vb.LINK].length > 0;
					return r.a.createElement("div", null, r.a.createElement(Fr, {
						className: Object(p.a)(Ur.a.URLInput, {
							[Ur.a.mHasError]: i
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
					}), r.a.createElement(ie.a, {
						errorModalTitle: o ? Object(oo.c)(o.name) : void 0,
						messages: n[b.vb.LINK]
					}), r.a.createElement(Dr, {
						value: s
					}))
				})),
				Kr = n("./node_modules/lodash/clamp.js"),
				qr = n.n(Kr),
				zr = n("./node_modules/lodash/pickBy.js"),
				Qr = n.n(zr),
				Jr = n("./src/lib/formatApiError/index.ts"),
				Yr = n("./src/lib/objectSelector/index.ts"),
				Zr = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/lodash/isEqual.js")),
				Xr = n.n(Zr),
				$r = n("./src/reddit/controls/Sortable/index.tsx");
			! function(e) {
				e.RemoveGalleryItem = "REMOVE_GALLERY_ITEM", e.SelectGalleryItem = "SELECT_GALLERY_ITEM", e.SetGalleryItems = "SET_GALLERY_ITEMS", e.SetCaptionInput = "SET_CAPTION_INPUT", e.SetURLInput = "SET_URL_INPUT", e.SelectPrevMedia = "SELECT_PREV_MEDIA", e.SelectNextMedia = "SELECT_NEXT_MEDIA"
			}(Vr || (Vr = {}));
			var es = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts"),
				ts = n("./node_modules/lodash/upperFirst.js"),
				ns = n.n(ts),
				os = n("./src/reddit/icons/svgs/Hamster1/index.tsx"),
				rs = n("./src/reddit/icons/svgs/Hamster2/index.tsx"),
				ss = n("./src/reddit/components/PostCreationForm/MediaInput/DropArea/index.m.less"),
				is = n.n(ss);
			const {
				fbt: as
			} = n("./node_modules/fbt/lib/FbtPublic.js"), cs = [...Array.from(b.a), ...Array.from(b.b)].join(), ds = ne.a.input("HiddenInput", is.a), ls = ne.a.wrapped(ge.n, "UploadButton", is.a), us = ne.a.wrapped(os.a, "HamsterSmall", is.a), ms = ne.a.wrapped(rs.a, "HamsterLarge", is.a), ps = ne.a.div("Container", is.a), bs = ne.a.div("DropArea", is.a), hs = ne.a.wrapped(bs, "DropAreaActive", is.a), fs = ne.a.wrapped(hs, "DropAreaOver", is.a), gs = ne.a.p("Paragraph", is.a), Cs = ne.a.p("ErrorMsg", is.a), _s = ne.a.div("Box", is.a);
			class xs extends r.a.Component {
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
					return r.a.createElement(ps, null, r.a.createElement(ds, {
						innerRef: e => this.hiddenInputEl = e,
						onChange: this.onFileInput,
						type: "file",
						accept: cs,
						multiple: o
					}), e ? r.a.createElement(fs, null, r.a.createElement(_s, null, r.a.createElement(ms, null), r.a.createElement(gs, null, as._("Drop Here to Upload", null, {
						hk: "3e1xuE"
					})))) : t ? r.a.createElement(hs, null, r.a.createElement(_s, null, r.a.createElement(us, null), as._("Drop Here to Upload", null, {
						hk: "3e1xuE"
					}))) : r.a.createElement(bs, null, r.a.createElement(gs, null, as._({
						"*": "Drag and drop images or {=Upload}",
						_1: "Drag and drop image or {=Upload}"
					}, [as._plural(o ? 2 : 1), as._param("=Upload", r.a.createElement(ls, {
						onClick: this.clickUploadButton
					}, as._("Upload", null, {
						hk: "41ZNAf"
					})))], {
						hk: "2OuWpT"
					})), n && r.a.createElement(Cs, null, ns()(n))))
				}
			}
			var Es = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				vs = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/AddImageItem.m.less"),
				Os = n.n(vs);

			function ys(e) {
				const {
					onClickEvent: t,
					onFileInput: n
				} = e, s = Object(o.useRef)(null), i = Object(o.useCallback)(() => {
					s && s.current && s.current.click(), t()
				}, [t, s]), a = Object(o.useCallback)(e => {
					n(e.currentTarget.files)
				}, [n]);
				return r.a.createElement("span", {
					className: Os.a.AddImageWrapper
				}, r.a.createElement("input", {
					accept: cs,
					className: Os.a.hiddenInput,
					multiple: !0,
					onChange: a,
					ref: s,
					type: "file"
				}), r.a.createElement("button", {
					className: Os.a.AddImageItem,
					onClick: i
				}, r.a.createElement(Es.a, {
					className: Os.a.plusIcon
				})))
			}
			var ks = n("./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx"),
				Ss = n("./src/reddit/icons/svgs/Clear/index.tsx"),
				js = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/ImageItem.m.less"),
				Ps = n.n(js);
			var Ts = e => {
					const {
						canDrop: t,
						mediaUpload: n,
						isDragging: s,
						isOver: i,
						isSelected: a,
						mediaItem: c,
						removeGalleryItem: d,
						dispatch: l
					} = e, u = Object(o.useRef)(null), m = n.key, b = n.status === pe.a.FAILED, h = Object(o.useCallback)(() => l((e => ({
						type: Vr.SelectGalleryItem,
						payload: {
							key: e
						}
					}))(m)), [l, m]), f = Object(o.useCallback)(e => {
						e.stopPropagation(), d(c)
					}, [d, c]), g = n.metadata.localUrl;
					return g ? r.a.createElement("span", {
						ref: u
					}, r.a.createElement(ks.a, {
						canDrop: t,
						className: Object(p.a)(Ps.a.GalleryMediaUpload, {
							[Ps.a.isDragging]: s,
							[Ps.a.isSelected]: a,
							[Ps.a.isError]: b
						}),
						isDragging: s,
						isOver: i
					}, r.a.createElement("span", {
						className: Object(p.a)(Ps.a.galleryImage, {
							[Ps.a.isDragging]: s,
							[Ps.a.isSelected]: a,
							[Ps.a.isError]: b
						}),
						onClick: h,
						style: {
							backgroundImage: `url("${g}")`
						}
					}, r.a.createElement("button", {
						className: Object(p.a)(Ps.a.deleteButton, {
							[Ps.a.isDragging]: s,
							[Ps.a.showDeleteNormal]: !a,
							[Ps.a.isError]: b
						}),
						onClick: f
					}, r.a.createElement(Ss.a, {
						className: Object(p.a)(Ps.a.deleteIcon, {
							[Ps.a.isDragging]: s
						})
					}))))) : null
				},
				ws = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/ImageItemsWrapper.m.less"),
				Is = n.n(ws);
			var Ds = e => {
					const {
						onRemoveUpload: t,
						dispatch: n,
						mediaState: s,
						uploads: i
					} = e, a = Object(un.a)(), c = Object(o.useCallback)(() => a(k.k()), [a]), d = Object(o.useCallback)(e => {
						t(e.uploadKey), a(k.m())
					}, [a, t]);
					return r.a.createElement("div", {
						className: Is.a.itemsWrapper
					}, r.a.createElement($r.a, {
						className: Is.a.sortableImages,
						values: s.items,
						getReactKey: e => e.uploadKey,
						render: (e, t, o, a, c) => {
							const l = i[e.uploadKey];
							if (!l) return null;
							if (Object(pe.c)(l)) return r.a.createElement("span", {
								className: Object(p.a)(Is.a.pendingItem, Object(qo.b)({
									isLoading: !0
								}))
							});
							const u = e.uploadKey === s.selectedKey;
							return r.a.createElement("span", {
								className: Is.a.imageStyles
							}, a && r.a.createElement("span", {
								className: Is.a.hoverMarker
							}), r.a.createElement(Ts, {
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
								type: Vr.SetGalleryItems,
								payload: {
									items: e
								}
							}))(o))
						}
					}), s.items.length < es.b && r.a.createElement(ys, {
						onClickEvent: c,
						onFileInput: e.onFileInput
					}))
				},
				Ns = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/InputWrapper.m.less"),
				Ms = n.n(Ns);
			var Rs = e => {
					const {
						uploads: t,
						galleryItem: n,
						isSelected: s,
						dispatch: i
					} = e, a = t[n.uploadKey], c = n.caption, l = n.url, u = Object(un.a)(), m = Object(o.useCallback)(e => i((e => ({
						type: Vr.SetCaptionInput,
						payload: {
							input: e
						}
					}))(e)), [i]), b = Object(o.useCallback)(e => i((e => ({
						type: Vr.SetURLInput,
						payload: {
							input: e
						}
					}))(e)), [i]), h = Object(o.useCallback)(e => u(k.l(e)), [u]), f = Object(o.useCallback)(() => h(g.m.CAPTION), [h]), C = Object(o.useCallback)(() => h(g.m.OUTBOUND_URL), [h]), _ = !s || !a || !a.url || Object(pe.c)(a);
					return r.a.createElement("div", null, r.a.createElement("div", {
						className: Ms.a.inputWrapper
					}, r.a.createElement(Fr, {
						className: Ms.a.inputStyles,
						disabled: _,
						maxLength: es.a,
						onFocus: f,
						onValueChange: m,
						placeholder: d.fbt._("Add a caption...", null, {
							hk: "1fOmKi"
						}),
						value: c
					}), r.a.createElement("div", {
						className: Ms.a.charsCounter
					}, c.length, "/", es.a)), r.a.createElement("div", {
						className: Ms.a.inputWrapper
					}, r.a.createElement(Fr, {
						className: Object(p.a)(Ms.a.inputStyles, Ms.a.urlInputStyles),
						disabled: _,
						onFocus: C,
						onValueChange: b,
						placeholder: d.fbt._("Add a link...", null, {
							hk: "Z6l9K"
						}),
						value: l
					})))
				},
				Ls = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/Layout.m.less"),
				As = n.n(Ls);
			var Fs = e => {
					const {
						heroSlot: t,
						mainContent: n,
						sideMetaContent: o,
						bottomContent: s
					} = e;
					return r.a.createElement("div", {
						className: As.a.Layout
					}, r.a.createElement("div", {
						className: As.a.hero
					}, t), n && r.a.createElement("div", {
						className: As.a.mainContent
					}, n), o && r.a.createElement("div", {
						className: As.a.sideMetaContent
					}, o), r.a.createElement("div", {
						className: As.a.bottomContent
					}, s))
				},
				Bs = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/SelectedImage.m.less"),
				Us = n.n(Bs);
			var Ws = e => {
					const {
						upload: t
					} = e, n = t.metadata.localUrl;
					return Object(pe.c)(t) ? r.a.createElement("span", {
						className: Object(p.a)(Us.a.pendingImage, Object(qo.b)({
							isLoading: !0
						}))
					}) : r.a.createElement("img", {
						className: Us.a.selectedImage,
						src: n
					})
				},
				Gs = n("./src/reddit/components/ProgressBar/index.tsx"),
				Vs = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/MultipleUploadStatusBar/index.m.less"),
				Hs = n.n(Vs);
			const {
				fbt: Ks
			} = n("./node_modules/fbt/lib/FbtPublic.js"), qs = ne.a.div("ControlRow", Hs.a), zs = ne.a.div("Status", Hs.a);
			var Qs = ne.a.wrapped(e => {
					const {
						progress: t
					} = e, n = t && t.percent || 0;
					return r.a.createElement("div", {
						className: e.className
					}, r.a.createElement(Gs.a, {
						percent: n,
						className: Hs.a.OuterDivProgressBar,
						innerBarClassName: Hs.a.ProgressBar
					}), r.a.createElement(qs, null, r.a.createElement(zs, {
						className: Hs.a.StatusText
					}, n < 100 ? Ks._("Image uploading in progress...", null, {
						hk: "n2dCj"
					}) : Ks._("Image uploading completed", null, {
						hk: "4ko42w"
					}))))
				}, "Component", Hs.a),
				Js = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/index.m.less"),
				Ys = n.n(Js);

			function Zs(e) {
				const {
					canDrop: t,
					dispatch: n,
					isOver: s,
					mediaState: i,
					onFileInput: a,
					onRemoveUpload: c,
					uploads: l
				} = e, [u, m] = Object(o.useState)([]), b = i.selectedKey, h = i.items.length > 1, f = i.items.find(e => e.uploadKey === b), g = b && l[b], C = i.items.filter(e => {
					const t = l[e.uploadKey];
					return !!t && t.status === pe.a.FAILED
				}).length, _ = Object.values(l).filter(pe.c);
				if (!Xr()(u, _))
					if (0 === _.length) m([]);
					else {
						const e = _.filter(e => !u.some(t => t.key === e.key));
						e.length > 0 && m([...u, ...e])
					} const x = u.length > 0,
					E = {
						percent: (() => {
							if (!x) return 0;
							let e = 0;
							return u.forEach(t => {
								const n = l[t.key];
								if (null == n || n && (n.status === pe.a.CANCELED || n.status === pe.a.FAILED || n.status === pe.a.SUCCESS)) e += 100;
								else {
									const n = l[t.key].progress;
									e += n && n.percent || 0
								}
							}), e / u.length
						})(),
						uploaded: 0
					};
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: Object(p.a)(Ys.a.dropArea, {
						[Ys.a.isDropAreaActive]: t,
						[Ys.a.isDropAreaOver]: s
					})
				}, r.a.createElement(Fs, {
					heroSlot: r.a.createElement(Ds, {
						mediaState: i,
						onFileInput: a,
						onRemoveUpload: c,
						uploads: l,
						dispatch: n
					}),
					mainContent: g && h && r.a.createElement(Ws, {
						upload: g
					}),
					sideMetaContent: f && h && r.a.createElement(Rs, {
						dispatch: n,
						galleryItem: f,
						uploads: l,
						isSelected: !!b
					}),
					bottomContent: null
				})), x ? r.a.createElement(Qs, {
					progress: E
				}) : null, !!C && r.a.createElement(ie.a, {
					className: Ys.a.errorMessage,
					messages: [d.fbt._("Some files failed to upload, please remove or retry them", null, {
						hk: "3BP9AQ"
					})]
				}))
			}
			var Xs = n("./src/reddit/components/RichTextEditor/DragController/helpers.ts"),
				$s = n("./src/reddit/components/ThumbnailSelector/index.tsx"),
				ei = n("./src/reddit/controls/FileDrop/index.tsx"),
				ti = n("./src/reddit/helpers/media/index.ts"),
				ni = n("./src/telemetry/models/Media.ts"),
				oi = n("./src/reddit/components/MakeGifToggle/index.tsx"),
				ri = n("./src/reddit/icons/svgs/ThumbnailSelect/index.tsx"),
				si = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				ii = n("./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/Preview/index.m.less"),
				ai = n.n(ii);
			const ci = ne.a.img("Img", ai.a),
				di = ne.a.img("BlurImg", ai.a),
				li = ne.a.wrapped(e => {
					const {
						className: t,
						url: n
					} = e;
					return r.a.createElement("div", {
						className: t
					}, r.a.createElement(di, {
						src: n
					}), r.a.createElement(ci, {
						src: n
					}))
				}, "ImagePreview", ai.a),
				ui = ne.a.wrapped(e => {
					const {
						className: t,
						url: n,
						showControls: o,
						videoBlurImgSrc: s
					} = e;
					return r.a.createElement("div", {
						className: t
					}, r.a.createElement(si.b, {
						shouldLoad: !1,
						shouldPause: !1,
						isGif: !1,
						otherSource: n,
						showControlBar: o,
						showSettingsIcon: !1,
						blurImageSrc: s
					}))
				}, "VideoPreview", ai.a);
			var mi = ne.a.wrapped(e => {
					const {
						className: t,
						type: n,
						url: o,
						showControls: s,
						videoBlurImgSrc: i
					} = e;
					return r.a.createElement("div", {
						className: t
					}, "image" === n ? r.a.createElement(li, {
						url: o
					}) : r.a.createElement(ui, {
						url: o,
						videoBlurImgSrc: i,
						showControls: s
					}))
				}, "Component", ai.a),
				pi = n("./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/UploadStatusBar/index.m.less"),
				bi = n.n(pi);
			const {
				fbt: hi
			} = n("./node_modules/fbt/lib/FbtPublic.js"), fi = ne.a.div("ControlRow", bi.a), gi = ne.a.wrapped(ge.q, "Button", bi.a), Ci = ne.a.div("Status", bi.a);
			var _i = ne.a.wrapped(e => {
					const {
						name: t,
						progress: n,
						onCancel: o
					} = e, s = n && n.percent || 0;
					return r.a.createElement("div", {
						className: e.className
					}, r.a.createElement(Gs.a, {
						percent: s
					}), r.a.createElement(fi, null, r.a.createElement(Ci, null, s < 100 ? hi._("Uploading {fileName}", [hi._param("fileName", t)], {
						hk: "1F1ZHh"
					}) : hi._("Success!", null, {
						hk: "2SQAeu"
					})), s < 100 && r.a.createElement(gi, {
						onClick: o
					}, hi._("Cancel", null, {
						hk: "2TSLl5"
					}))))
				}, "Component", bi.a),
				xi = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				Ei = n("./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/index.m.less"),
				vi = n.n(Ei);
			const Oi = ne.a.div("Wrapper", vi.a),
				yi = ne.a.div("Controls", vi.a),
				ki = ne.a.wrapped(ri.a, "ThumbnailSelect", vi.a),
				Si = ({
					isFilled: e,
					...t
				}) => r.a.createElement(ki, t);

			function ji(e) {
				const {
					isPostSubmitPending: t,
					mediaType: n,
					onCancelUpload: o,
					onRemove: s,
					upload: i
				} = e, a = i.metadata, {
					localUrl: c,
					videoFirstFrameUrl: l
				} = a, u = i.status, m = u === pe.a.PENDING || u === pe.a.UPLOADING, p = u === pe.a.SUCCESS, b = !t;
				return r.a.createElement(Oi, null, m ? r.a.createElement(_i, {
					className: vi.a.UploadStatusBar,
					name: i.file.name,
					progress: i.progress,
					onCancel: o
				}) : null, c ? r.a.createElement(mi, {
					type: n,
					url: c,
					showControls: p,
					videoBlurImgSrc: l
				}) : null, p && r.a.createElement(yi, null, "video" === n && r.a.createElement(oi.a, {
					disabled: !!e.makeGifDisableReason || !b,
					tooltip: e.makeGifDisableReason,
					on: e.isMakeGifToggleOn,
					onClick: e.onMakeGifToggle
				}), "video" === n && r.a.createElement(xi.default, {
					enabled: b,
					Icon: Si,
					tooltip: d.fbt._("Choose thumbnail", null, {
						hk: "2XlKfd"
					}),
					onClick: e.onShowThumbnailSelector
				}), r.a.createElement(xi.default, {
					enabled: b,
					iconName: "delete",
					tooltip: d.fbt._("Remove", null, {
						hk: "H42IB"
					}),
					onClick: s
				})))
			}
			var Pi = n("./src/reddit/components/PostCreationForm/MediaInput/RemovePrompt/index.m.less"),
				Ti = n.n(Pi);
			const wi = "POST_CREATION_MEDIA_REMOVE_PROMPT_ID",
				Ii = ne.a.div("Wrapper", Ti.a),
				Di = ne.a.wrapped(le.a, "TitleRow", Ti.a),
				Ni = ne.a.div("DetailsContainer", Ti.a),
				Mi = ne.a.wrapped(le.a, "ButtonRow", Ti.a),
				Ri = ne.a.wrapped(ge.n, "CancelButton", Ti.a),
				Li = ne.a.wrapped(ge.k, "ConfirmButton", Ti.a);
			var Ai = Object(hn.a)(e => {
					const {
						isVideo: t
					} = e;
					return r.a.createElement(Ii, null, r.a.createElement(Di, null, t ? d.fbt._("Remove video?", null, {
						hk: "34eepe"
					}) : d.fbt._("Remove image?", null, {
						hk: "41e1Uy"
					})), r.a.createElement(Ni, null, t ? d.fbt._("Are you sure you want to remove your video?", null, {
						hk: "smTuF"
					}) : d.fbt._("Are you sure you want to remove your image?", null, {
						hk: "Ci5LM"
					})), r.a.createElement(Mi, null, r.a.createElement(Ri, {
						onClick: e.onCanceled
					}, d.fbt._("Keep", null, {
						hk: "4gFSdj"
					})), r.a.createElement(Li, {
						onClick: e.onConfirmed
					}, d.fbt._("Remove", null, {
						hk: "3tYl0U"
					}))))
				}),
				Fi = n("./src/reddit/components/PostCreationForm/MediaInput/index.m.less"),
				Bi = n.n(Fi);
			const Ui = "MEDIA_POST_VIDEO_THUMBNAIL_SELECTOR_MODAL_ID",
				Wi = Object(y.u)(),
				Gi = Object(i.c)({
					activeModalId: S.a,
					isPostPending: P.Z,
					uploads: Object(Yr.a)(e => Qr()(e.uploads, e => e.key.startsWith(M.a))),
					value: P.U,
					isImageGalleryCreationEnabled: P.L
				}),
				Vi = Object(s.b)(Gi, e => ({
					onChange: t => e(a.d(t)),
					startMediaGalleryUploads: (t, n) => e(M.d(t, n)),
					removeUpload: t => e(F.i(t, !0)),
					toggleThumbnailModal: () => e(a.y(Ui)),
					toggleRemovePrompt: () => e(a.y(wi))
				})),
				Hi = ne.a.div("Container", Bi.a),
				Ki = (e, t, n) => {
					if (!e.length) return null;
					let o = e.findIndex(e => e.uploadKey === n);
					if (-1 === o) {
						const r = t.findIndex(e => e.uploadKey === n);
						o = qr()(r - 1, 0, e.length - 1)
					}
					return e[o].uploadKey
				};
			class qi extends r.a.Component {
				constructor() {
					super(...arguments), this.onFileDrop = e => this.uploadMediaFiles(e, ni.FileSource.DragAndDrop), this.onFileInput = e => this.uploadMediaFiles(e, ni.FileSource.FileSelector), this.onRemoveUpload = e => {
						const {
							value: t
						} = this.props, {
							items: n,
							selectedKey: o
						} = t, r = n.filter(t => t.uploadKey !== e);
						this.props.onChange({
							...t,
							items: r,
							selectedKey: Ki(r, n, o)
						}), this.props.removeUpload(e)
					}, this.onCancelSingleMediaUpload = () => {
						this.onRemoveUpload(this.getSingleUpload().key)
					}, this.handlePaste = e => {
						if (e.clipboardData) {
							const t = Object(Xs.a)(e.clipboardData);
							t.length && (e.preventDefault(), e.stopPropagation(), this.uploadMediaFiles(t, ni.FileSource.Clipboard))
						}
					}, this.onRemoveConfirmed = () => {
						this.props.toggleRemovePrompt(), this.onRemoveUpload(this.getSingleUpload().key)
					}, this.onThumbnailSelect = e => {
						this.toggleThumbnailSelector();
						const {
							value: t
						} = this.props;
						if (!Object(g.x)(t)) return;
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
						if (!Object(g.x)(e)) return;
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
								case Vr.SelectGalleryItem: {
									const {
										key: n
									} = t.payload;
									return {
										...e,
										selectedKey: n
									}
								}
								case Vr.SetGalleryItems: {
									const {
										items: n
									} = t.payload;
									return {
										...e,
										items: n
									}
								}
								case Vr.SetCaptionInput: {
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
								case Vr.SetURLInput: {
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
								case Vr.SelectPrevMedia: {
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
								case Vr.SelectNextMedia: {
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
						if (!Object(g.x)(o) && s && o.items.length >= 1) return r.a.createElement(Zs, {
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
								l = i && i.status === pe.a.FAILED,
								u = i && l ? Object(Jr.a)(i.error) : "",
								m = i && Object(ti.f)(i.metadata.mimetype);
							return o && m && i && !l ? r.a.createElement(ji, {
								isPostSubmitPending: n,
								upload: i,
								mediaType: m,
								onRemove: this.props.toggleRemovePrompt,
								onCancelUpload: this.onCancelSingleMediaUpload,
								onShowThumbnailSelector: this.toggleThumbnailSelector,
								onMakeGifToggle: this.onMakeGifToggle,
								isMakeGifToggleOn: c,
								makeGifDisableReason: d
							}) : r.a.createElement(xs, {
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
					} = e, n = this.getSingleUpload(), o = t[0], s = Object(g.x)(e), i = s && o.video.thumbnail || void 0;
					return r.a.createElement(Hi, null, r.a.createElement(ei.a, {
						render: (e, t) => this.renderDropArea(e, t),
						onDrop: this.onFileDrop
					}), n && n.metadata.videoDuration && r.a.createElement($s.a, {
						onSelect: this.onThumbnailSelect,
						onToggleModal: this.toggleThumbnailSelector,
						videoSource: n.metadata.localUrl,
						videoDuration: n.metadata.videoDuration,
						selected: i,
						isOpen: this.props.activeModalId === Ui
					}), this.props.activeModalId === wi && r.a.createElement(Ai, {
						isVideo: s,
						onCanceled: this.props.toggleRemovePrompt,
						onConfirmed: this.onRemoveConfirmed
					}))
				}
			}
			var zi = Wi(Vi(qi)),
				Qi = n("./src/reddit/actions/post.ts"),
				Ji = n("./src/reddit/controls/CheckboxInput/index.tsx"),
				Yi = n("./src/reddit/controls/OutboundLink/index.tsx"),
				Zi = n("./src/reddit/selectors/externalAccount.ts"),
				Xi = n("./src/reddit/icons/fonts/Info/index.tsx"),
				$i = n("./src/reddit/components/PostCreationForm/PostCreationFooter/PostSettings/Hint/index.m.less"),
				ea = n.n($i);
			const ta = ne.a.wrapped(Xi.a, "Info", ea.a),
				na = ne.a.div("TooltipContent", ea.a);
			var oa = e => r.a.createElement("div", {
					className: ea.a.Hint
				}, r.a.createElement(Ze.a, {
					className: ea.a.HoverTooltip,
					tooltipContentClass: ea.a.tooltipContentClass,
					text: r.a.createElement(na, null, e.text)
				}), r.a.createElement(ta, null)),
				ra = n("./src/reddit/components/PostCreationForm/PostCreationFooter/PostSettings/index.m.less"),
				sa = n.n(ra);
			const ia = ne.a.wrapped(Ji.a, "CheckboxInput", sa.a),
				aa = ne.a.wrapped(Yi.b, "ConnectAccountLink", sa.a),
				ca = ne.a.div("Container", sa.a),
				da = ne.a.div("ContainerLeft", sa.a),
				la = ne.a.div("ContainerRight", sa.a),
				ua = ne.a.div("CheckboxText", sa.a),
				ma = ne.a.div("Option", sa.a),
				pa = ne.a.wrapped(Ve.a, "TextButton", sa.a),
				ba = ne.a.input("TextBox", sa.a),
				ha = ne.a.div("Wrapper", sa.a),
				fa = Object(i.c)({
					connectedTwitterAccount: Zi.a,
					currentSubredditOrProfile: y.p,
					currentUser: I.k,
					isDraftPending: T.g,
					isMediaUploadPending: P.V,
					isPostPending: P.mb,
					isPublicLink: P.P,
					postToTwitter: P.db,
					sendReplies: P.fb,
					sharingLink: T.i,
					submissionType: P.a
				}),
				ga = Object(s.b)(fa, (e, t) => ({
					togglePostToTwitter: t => {
						e(a.z(t)), e((e, n) => k.A(n(), t))
					},
					toggleSendReplies: t => {
						e(a.A(t))
					},
					toggleDraftIsPublic: n => {
						e(A.s(n)), e(Object(A.r)(t.draftId)), e((e, o) => {
							const r = Object(T.h)(o(), t.draftId);
							r && k.h(o(), r, n)
						})
					},
					copyLink: t => e(Object(Qi.D)(t)),
					trackConnectAccountsClick: () => e((e, t) => k.c(t()))
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
			var Ca = Object(y.u)()(ga(e => {
					const {
						connectedTwitterAccount: t,
						currentSubredditOrProfile: n,
						currentUser: o,
						draftId: s,
						submissionType: i
					} = e, a = !!n && !!n.isQuarantined, c = e.isDraftPending || e.isPostPending || e.isMediaUploadPending, l = i !== b.Tb.MEDIA && s, u = e.isPublicLink, m = o && o.hasUserProfile;
					return r.a.createElement(ca, null, r.a.createElement(da, {
						className: e.className
					}, r.a.createElement(le.a, null, r.a.createElement(ma, null, r.a.createElement(ia, {
						disabled: c,
						name: "send-replies",
						onChange: e.onToggleSendReplies,
						value: e.sendReplies
					}, r.a.createElement(ua, null, d.fbt._("Send me post reply notifications", null, {
						hk: "3kNmey"
					}))))), m && t && r.a.createElement(le.a, null, r.a.createElement(ma, null, r.a.createElement(ia, {
						disabled: c || a,
						name: "post-to-twitter",
						onChange: e.onTogglePostToTwitter,
						value: e.postToTwitter
					}, r.a.createElement(ua, null, d.fbt._("Share this post on Twitter", null, {
						hk: "3SPI4V"
					}))))), m && !t && !a && r.a.createElement(le.a, null, r.a.createElement(aa, {
						href: "/settings#connected-accounts",
						onClick: e.trackConnectAccountsClick
					}, d.fbt._("Connect accounts to share your post", null, {
						hk: "1nIuWp"
					})), r.a.createElement(oa, {
						text: d.fbt._("Connect a Twitter account in your User Settings. With a connected account you can choose to share new posts you make directly to Twitter.", null, {
							hk: "JRoQz"
						})
					}))), r.a.createElement(la, {
						className: e.className
					}, l && r.a.createElement(ha, null, r.a.createElement(ma, null, r.a.createElement(ia, {
						name: "enable-public-link",
						onChange: e.onToggleDraftIsPublic,
						value: e.isPublicLink
					}, r.a.createElement(ua, null, d.fbt._("Enable public draft link", null, {
						hk: "1SpDgT"
					})), r.a.createElement(oa, {
						text: d.fbt._("This option will create a link to a preview of this draft. Anyone with this link will be able to see this draft. You can disable this link at any time.", null, {
							hk: "1r77YF"
						})
					})))), l && u && r.a.createElement(le.a, null, r.a.createElement(ba, {
						disabled: !0,
						value: e.sharingLink
					}), r.a.createElement(pa, {
						onClick: e.onCopyLink
					}, d.fbt._("Copy link", null, {
						hk: "22rywZ"
					})))))
				})),
				_a = n("./src/reddit/components/PostCreationForm/PostCreationFooter/index.m.less"),
				xa = n.n(_a);
			const Ea = ne.a.div("Container", xa.a);
			var va = e => r.a.createElement(Ea, null, r.a.createElement(Ca, {
					draftId: e.draftId
				})),
				Oa = n("./src/reddit/featureFlags/profileCollections.ts"),
				ya = n("./src/reddit/selectors/experiments/postCreationSubRec.ts"),
				ka = n("./src/reddit/selectors/profile.ts"),
				Sa = n("./src/reddit/components/PostCreationForm/PostCreationHeader/index.m.less"),
				ja = n.n(Sa);
			const Pa = ne.a.span("CountIndicator", ja.a),
				Ta = ne.a.wrapped(ge.q, "LinkButton", ja.a),
				wa = Ta,
				Ia = Object(i.c)({
					canPostAsModerator: P.e,
					collectionsCount: e => {
						const t = Object(P.h)(e);
						let n = t.id;
						if (t.isProfile && Object(Oa.a)(e)) {
							const o = Object(ka.j)(e, {
								profileName: t.name
							});
							n = o && o.id
						}
						return n ? Object(x.u)(e, {
							subredditId: n
						}) : 0
					},
					destSubredditAboutInfo: P.g,
					draftsCount: I.l,
					isPending: P.Z,
					isOpenAIPilotV1: ya.e
				});
			var Da = Object(s.b)(Ia, e => ({
					showDraftsList: () => {
						e(A.p()), e(a.y(g.e))
					},
					showCollectionsList: () => {
						e(a.y(g.a))
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
						submitMode: u,
						isOpenAIPilotV1: m
					} = e, h = l === b.Tb.CROSSPOST, f = h ? d.fbt._("Create a crosspost", null, {
						hk: "1oNF7H"
					}) : d.fbt._("Create a post", null, {
						hk: "4u8qEy"
					}), C = t && o && o.collectionsEnabled;
					return r.a.createElement("div", {
						className: Object(p.a)(ja.a.CreatePostHeader, {
							[ja.a.isSubredditRec]: m
						})
					}, r.a.createElement("div", {
						className: ja.a.CreateLabel
					}, u === g.r.Draft ? d.fbt._("Edit draft", null, {
						hk: "oMgcW"
					}) : f), !h && r.a.createElement(r.a.Fragment, null, C && r.a.createElement(wa, {
						onClick: a
					}, d.fbt._("Collections", null, {
						hk: "2FVot0"
					}), r.a.createElement(Pa, null, n)), r.a.createElement(Ta, {
						disabled: i,
						onClick: c
					}, d.fbt._("Drafts", null, {
						hk: "25z4rQ"
					}), r.a.createElement(Pa, null, s))))
				}),
				Na = n("./src/reddit/actions/polls.ts"),
				Ma = n("./src/reddit/actions/postCreation/editorContent.ts"),
				Ra = n("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				La = n("./src/reddit/selectors/crypto/points.ts"),
				Aa = n("./src/reddit/components/Governance/PollHelpText/index.m.less"),
				Fa = n.n(Aa);

			function Ba(e) {
				var t;
				const {
					subreddit: n
				} = e, o = Object(s.e)(e => Object(La.b)(e, n.id));
				if (!o) return null;
				const i = null === (t = o.polls) || void 0 === t ? void 0 : t.decisionThreshold;
				return r.a.createElement("div", {
					className: Fa.a.pollHelpText
				}, i && r.a.createElement(r.a.Fragment, null, r.a.createElement(Ra.a, {
					className: Fa.a.decisionThreholdAmount,
					amount: i,
					subredditId: n.id
				}), r.a.createElement("div", {
					className: Fa.a.decisionThresholdTitle
				}, d.fbt._("Decision Threshold", null, {
					hk: "39nut8"
				}))), r.a.createElement("div", {
					className: Fa.a.decisionThresholdExplanation
				}, d.fbt._("Governance Polls pass when one option reaches the Decision Threshold. The Decision Threshold is updated regularly based on the number of {tokenName} that voted in previous governance polls.", [d.fbt._param("tokenName", o.name)], {
					hk: "Di1tp"
				})))
			}
			var Ua = n("./src/reddit/actions/governance/index.ts"),
				Wa = n("./src/reddit/actions/tooltip.ts"),
				Ga = n("./src/reddit/controls/Dropdown/index.tsx"),
				Va = n("./src/reddit/controls/Dropdown/Row.tsx"),
				Ha = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				Ka = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.tsx"),
				qa = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.tsx"),
				za = n("./src/reddit/components/PollCreator/EndDatePicker/useEndDatePicker.tsx"),
				Qa = n("./src/reddit/components/PollCreator/EndDatePicker/index.m.less"),
				Ja = n.n(Qa);

			function Ya({
				poll: e
			}) {
				const t = Object(s.d)(),
					{
						endDate: n
					} = e,
					{
						date: o,
						time: i,
						timeZoneAbbr: a,
						onChange: c,
						maxDate: l,
						minDate: u,
						minTime: m
					} = Object(za.a)(n, n => t(Object(Na.b)({
						...e,
						endDate: n
					})));
				return r.a.createElement("div", {
					className: Ja.a.endDatePicker
				}, r.a.createElement("label", {
					className: Ja.a.title
				}, d.fbt._("Prediction ends", null, {
					hk: "1fsk1v"
				})), r.a.createElement("div", {
					className: Ja.a.dateTime
				}, r.a.createElement(Ka.a, {
					"aria-label": d.fbt._("Prediction end date", null, {
						hk: "4zYv4T"
					}),
					onChange: e => c({
						date: e
					}),
					min: u,
					max: l,
					value: o,
					required: !0
				}), r.a.createElement(qa.a, {
					className: Ja.a.timeInput,
					"aria-label": d.fbt._("Prediction end time", null, {
						hk: "1idFl4"
					}),
					onChange: e => c({
						time: e
					}),
					min: m,
					value: i,
					required: !0
				}), a && r.a.createElement("div", {
					className: Ja.a.timeZone
				}, a)))
			}
			var Za = n("./src/reddit/components/PollCreator/EndDatePicker/utils.ts"),
				Xa = n("./src/reddit/icons/svgs/Grapple/index.tsx"),
				$a = n("./src/reddit/components/PollCreator/Option/index.m.less"),
				ec = n.n($a);

			function tc(e) {
				return r.a.createElement("div", {
					className: Object(p.a)(e.className, ec.a.container),
					style: {
						left: e.isDropTarget ? 16 : 0,
						opacity: nc(e),
						pointerEvents: e.isDisabled ? "none" : void 0
					}
				}, r.a.createElement(Xa.a, {
					className: ec.a.grapple
				}), r.a.createElement("input", {
					className: ec.a.input,
					maxLength: 120,
					placeholder: `${d.fbt._("option",null,{hk:"3IGnB"})} ${e.index+1}`,
					value: e.text,
					onBlur: e.onBlur,
					onChange: t => e.onTextChange(t.currentTarget.value),
					onFocus: e.onFocus
				}), e.removable && r.a.createElement(fo.a, {
					className: ec.a.trash,
					onClick: e.onRemove
				}))
			}

			function nc(e) {
				return e.isDisabled ? .5 : e.isBeingDragged ? .25 : 1
			}
			var oc = n("./src/reddit/constants/postLayout.ts"),
				rc = n("./src/reddit/components/Econ/Prediction/NewBadge/index.m.less"),
				sc = n.n(rc);
			const {
				fbt: ic
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function ac({
				className: e
			}) {
				return r.a.createElement("div", {
					className: Object(p.a)(sc.a.newBadge, e)
				}, ic._("New", null, {
					hk: "2N0EBb"
				}))
			}
			var cc = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts"),
				dc = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionFeatureEducationMessage/index.tsx"),
				lc = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				uc = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				mc = n("./src/reddit/controls/PillButton/index.m.less"),
				pc = n.n(mc);
			class bc extends r.a.Component {
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
						isNightMode: m,
						layout: b,
						onBlur: h,
						onClick: f,
						onFocus: g,
						title: C,
						tooltipId: _
					} = this.props, x = c, E = Object(p.a)({
						[pc.a.classic]: b === oc.g.Classic,
						[pc.a.compact]: b === oc.g.Compact,
						[pc.a.activated]: l,
						[pc.a.nightmode]: m,
						[pc.a.dark]: u,
						[pc.a.upvote]: "upvote" === o,
						[pc.a.downvote]: "downvote" === o,
						[pc.a.gold]: "gold" === o,
						[pc.a.blue]: "blue" === o,
						[pc.a.approve]: "approve" === o,
						[pc.a.remove]: "remove" === o,
						[pc.a.hasChildren]: !!t
					});
					if (this.props.href) {
						const {
							href: e,
							rel: o,
							target: i
						} = this.props;
						return r.a.createElement(lc.a, {
							"aria-label": C,
							"aria-pressed": l,
							className: Object(p.a)(n, E, pc.a.PostActionButton),
							"data-click-id": this.props["data-click-id"],
							"data-test-id": this.props["data-test-id"],
							id: d,
							onBlur: h,
							onClick: f,
							onFocus: g,
							onMouseEnter: this.handleMouseEnter,
							onMouseLeave: this.handleMouseLeave,
							rel: o,
							target: i,
							to: e
						}, r.a.createElement("span", {
							className: Object(p.a)(s, E, pc.a.buttonContent),
							id: _,
							tabIndex: -1
						}, r.a.createElement("div", {
							className: pc.a.background
						}), a && _ && r.a.createElement(uc.c, {
							text: a,
							tooltipId: _
						}), x && r.a.createElement(x, null), r.a.createElement("span", {
							className: pc.a.buttonChildren
						}, t)))
					}
					return r.a.createElement("button", {
						"aria-label": C,
						"aria-pressed": l,
						className: Object(p.a)(n, E, pc.a.PostActionButton),
						"data-click-id": this.props["data-click-id"],
						"data-test-id": this.props["data-test-id"],
						disabled: i,
						id: d,
						onBlur: h,
						onClick: f,
						onFocus: g,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave
					}, r.a.createElement("span", {
						className: Object(p.a)(s, E, pc.a.buttonContent),
						id: _,
						tabIndex: -1
					}, r.a.createElement("div", {
						className: Object(p.a)(pc.a.background, e)
					}), a && _ && r.a.createElement(uc.c, {
						text: a,
						tooltipId: _
					}), x && r.a.createElement(x, null), r.a.createElement("span", {
						className: pc.a.buttonChildren
					}, t)))
				}
			}
			var hc = Object(s.b)(void 0, (e, {
					tooltipId: t
				}) => ({
					tooltipSet: () => {
						t && e(Object(Wa.g)({
							tooltipId: t
						}))
					},
					tooltipUnset: () => {
						t && e(Object(Wa.j)({
							tooltipId: t
						}))
					}
				}))(bc),
				fc = n("./src/reddit/hooks/useLocalStorage.ts"),
				gc = n("./src/reddit/selectors/features/predictions/creation/index.ts"),
				Cc = n("./src/reddit/components/PollCreator/PollTypePicker/index.m.less"),
				_c = n.n(Cc);

			function xc() {
				return (xc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function Ec({
				tournamentsEnabled: e
			}) {
				const [t] = Object(fc.a)(cc.a.creation, !1), {
					govType: n
				} = Object(s.e)(P.s), o = Object(s.e)(gc.a), i = Object(s.d)(), c = Object(un.a)(), l = {
					backgroundClassName: _c.a.buttonBackground,
					colorTheme: "blue",
					className: Object(p.a)(_c.a.button, _c.a.pollTypePickerButton),
					contentClassName: _c.a.buttonContent,
					disabled: o,
					isDarkDayMode: !1,
					isNightMode: !1,
					layout: oc.g.Compact
				};
				return r.a.createElement("div", {
					className: _c.a.pollTypePicker
				}, r.a.createElement(hc, xc({}, l, {
					isActive: n === me.a.GA || !n,
					onClick: () => {
						i(Object(a.k)({
							oldType: n,
							type: me.a.GA
						})), c(dn.q)
					},
					title: d.fbt._("Poll", null, {
						hk: "2uKNlH"
					})
				}), d.fbt._("Poll", null, {
					hk: "1l7ZuP"
				})), r.a.createElement(hc, xc({}, l, {
					isActive: n === me.a.Prediction,
					onClick: () => {
						i(Object(a.k)({
							oldType: n,
							type: me.a.Prediction
						})), c(dn.r)
					},
					title: d.fbt._("Prediction", null, {
						hk: "3wu0FO"
					})
				}), r.a.createElement("div", {
					className: _c.a.predictionLabel
				}, d.fbt._("Prediction", null, {
					hk: "1CbFag"
				}), !t && n !== me.a.Prediction && r.a.createElement(ac, {
					className: _c.a.newBadge
				}))), n === me.a.Prediction && r.a.createElement("div", {
					className: _c.a.education
				}, r.a.createElement(dc.a, {
					isTokens: e,
					onClose: () => c(dn.m),
					onView: () => c(dn.s),
					storageKey: cc.a.creation
				})))
			}
			var vc = n("./src/reddit/actions/economics/predictions/constants.ts"),
				Oc = n("./src/reddit/components/PollCreator/TournamentPicker/index.m.less"),
				yc = n.n(Oc);

			function kc({
				className: e,
				poll: t
			}) {
				const n = Object(s.d)(),
					i = Object(ln.a)(),
					{
						subredditName: a
					} = (null == i ? void 0 : i.urlParams) || {},
					c = Object(s.e)(e => Object(w.B)(e, a)),
					l = Object(s.e)(e => Object(bn.b)(e, {
						subredditId: c
					})) || {
						id: vc.f,
						name: "Predictions Tournament"
					};
				return Object(o.useEffect)(() => {
					(async () => {
						a && n(Object(an.l)(a))
					})()
				}, [n, a]), a ? r.a.createElement("div", {
					className: Object(p.a)(yc.a.tournamentPicker, e)
				}, r.a.createElement("label", {
					className: yc.a.title
				}, d.fbt._("Tournament", null, {
					hk: "1eyps5"
				})), r.a.createElement("input", {
					disabled: !0,
					className: yc.a.input,
					readOnly: !0,
					type: "text",
					value: l.name || d.fbt._("New tournament", null, {
						hk: "1DwyZA"
					})
				})) : null
			}
			var Sc = n("./src/reddit/components/PollCreator/index.m.less"),
				jc = n.n(Sc);
			const Pc = 2,
				Tc = 6,
				wc = 7,
				Ic = "poll-creation-voting-length";
			var Dc;
			! function(e) {
				e.Options = "options", e.VotingLength = "votingLength"
			}(Dc || (Dc = {}));
			const Nc = Object(Dt.a)(Ga.a);

			function Mc(e, t) {
				return `${t}-${e}`
			}
			const Rc = Object(i.c)({
				tournamentsEnabled: (e, {
					subredditId: t
				}) => !!t && Object(w.K)(e, {
					subredditId: t
				}),
				allowPolls: P.d,
				votingLengthDropdownIsOpen: e => e.tooltipId === Ic
			});
			class Lc extends r.a.Component {
				constructor(e) {
					super(e), this.handleAddOption = e => () => {
						const {
							sendEvent: t
						} = this.props;
						e.options.length < 7 && (t(Object(k.t)()), this.props.onUpdatePoll({
							...e,
							options: e.options.concat(this.makeOption())
						}))
					}, this.handleBlur = () => this.inputFocused = !1, this.handleVotingLengthDropdownClick = () => {
						const {
							sendEvent: e,
							votingLengthDropdownIsOpen: t
						} = this.props;
						t || e(Object(k.u)()), this.props.onToggleVotingLengthDropdown()
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
						duration: 3 * b.A,
						endDate: Object(Za.b)(),
						options: Array.from({
							length: Pc
						}).map(this.makeOption)
					}), this.preventDrag = e => {
						this.inputFocused && (e.preventDefault(), e.stopPropagation())
					}, this.inputFocused = !1
				}
				componentDidMount() {
					const {
						allowPolls: e,
						allowPredictions: t,
						setPollType: n
					} = this.props;
					!e && t && n(me.a.Prediction), document.addEventListener("dragstart", this.preventDrag), document.addEventListener("drop", this.preventDrag), document.addEventListener("dragover", this.preventDrag)
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
						poll: t = this.makeDefaultPoll(),
						pollType: n,
						tournamentsEnabled: o,
						allowPolls: s,
						allowPredictions: i
					} = this.props, a = !Object(me.d)(t) && s && i, c = n === me.a.Prediction;
					return r.a.createElement("div", {
						"data-testid": "poll-creator"
					}, a && r.a.createElement(Ec, {
						tournamentsEnabled: o
					}), r.a.createElement("div", {
						className: Object(p.a)(e, jc.a.container)
					}, r.a.createElement("div", {
						className: jc.a.options
					}, this.renderPollCreator(t), this.renderControls(t)), r.a.createElement("div", {
						className: jc.a.help
					}, this.props.hintTextComponent)), c && r.a.createElement("div", {
						className: jc.a.predictionSettings
					}, r.a.createElement(Ya, {
						poll: t
					}), o && r.a.createElement(kc, {
						poll: t
					})))
				}
				renderPollCreator(e) {
					const t = this.sectionIsDisabled(Dc.Options);
					return r.a.createElement($r.a, {
						getReactKey: Mc,
						render: (n, o, s, i, a) => r.a.createElement(tc, {
							className: jc.a.option,
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
					} = this.props, n = e.options.length >= Tc || this.sectionIsDisabled(Dc.Options), o = this.sectionIsDisabled(Dc.VotingLength), s = Math.floor(e.duration / b.A), i = t === me.a.Prediction;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: jc.a.controls
					}, r.a.createElement(ge.q, {
						className: jc.a.addButton,
						disabled: n,
						onClick: this.handleAddOption(e)
					}, d.fbt._("Add Option", null, {
						hk: "hUP0k"
					})), !i && r.a.createElement("div", {
						className: Object(p.a)(jc.a.votingLengthSelector, {
							[jc.a.votingLengthSelector__disabled]: !!o
						})
					}, r.a.createElement("div", {
						className: jc.a.votingLengthTitleText
					}, d.fbt._("Voting length:", null, {
						hk: "4pPVUg"
					})), r.a.createElement("div", {
						className: jc.a.votingLengthDropdownContainer,
						id: Ic
					}, r.a.createElement("div", {
						className: jc.a.votingLengthDisplay,
						onClick: this.handleVotingLengthDropdownClick
					}, r.a.createElement("div", null, d.fbt._({
						"*": "{numDays} days",
						_1: "{numDays} day"
					}, [d.fbt._param("numDays", String(s)), d.fbt._plural(s)], {
						hk: "2HsFBA"
					})), r.a.createElement(Ha.a, {
						className: jc.a.votingLengthCaret
					})), this.renderVotingLengthDropdown(e)))))
				}
				renderVotingLengthDropdown(e) {
					const {
						votingLengthDropdownIsOpen: t
					} = this.props, n = this.handleChangeVotingLength(e);
					return r.a.createElement(Nc, {
						className: jc.a.votingLengthDropdown,
						tooltipId: Ic,
						isOpen: t
					}, Array.from({
						length: wc
					}).map((t, o) => {
						const s = o + 1;
						return r.a.createElement(Va.b, {
							"data-redditstyle": !0,
							key: o,
							index: o,
							displayText: d.fbt._({
								"*": "{number} days",
								_1: "1 day"
							}, [d.fbt._plural(s, "number")], {
								hk: "bXXYo"
							}),
							isSelected: Math.floor(e.duration / b.A) === s,
							onClick: () => n(s * b.A)
						})
					}))
				}
			}
			var Ac = Object(s.b)(Rc, (e, t) => ({
					onToggleVotingLengthDropdown: () => e(Object(Wa.h)({
						tooltipId: Ic
					})),
					fetchIsPredictionCreationAllowed: async () => e(Object(an.h)(t.subredditId)),
					setPollType: n => e(Object(a.k)({
						oldType: t.pollType || null,
						type: n
					}))
				}))(Object(sn.c)(Lc)),
				Fc = n("./src/reddit/components/Governance/ProposalTemplates/Generic/index.m.less"),
				Bc = n.n(Fc);
			const Uc = [{
				text: "Yes"
			}, {
				text: "No"
			}];

			function Wc(e) {
				const t = {
					duration: e.poll ? e.poll.duration : b.A,
					options: e.options || Uc
				};
				return r.a.createElement("div", {
					className: Object(p.a)(Bc.a.container, e.className)
				}, r.a.createElement("div", {
					className: Bc.a.topline
				}, e.children.map(e => "string" == typeof e ? r.a.createElement("div", {
					className: Bc.a.text
				}, e) : e)), r.a.createElement(Ac, {
					disabledSections: [Dc.Options],
					hintTextComponent: r.a.createElement("div", {
						className: Bc.a.hintText
					}, r.a.createElement(Ba, {
						subreddit: e.subreddit
					})),
					poll: t,
					onUpdatePoll: e.onUpdatePoll
				}))
			}
			var Gc = n("./src/reddit/controls/FormFields/index.tsx"),
				Vc = n("./src/reddit/components/Governance/ProposalTemplates/Spinoff/index.m.less"),
				Hc = n.n(Vc);
			const Kc = 3,
				qc = 20,
				zc = /[^(\w|_)]/g;
			const Qc = Object(i.c)({
				newSubredditName: e => e.creations.formData.newSubreddit
			});
			var Jc = Object(s.b)(Qc, e => ({
					onSubredditNameChange: t => e(Object(Ua.a)({
						subredditName: t
					}))
				}))((function(e) {
					return r.a.createElement(Wc, {
						className: e.className,
						options: me.f[me.a.Spinoff](e.newSubredditName),
						poll: e.poll,
						subreddit: e.subreddit,
						onUpdatePoll: e.onUpdatePoll
					}, d.fbt._("Should we spin-off to", null, {
						hk: "3oKiyE"
					}), r.a.createElement(Gc.c, {
						redditStyle: !0,
						className: Hc.a.input,
						label: d.fbt._("subreddit name", null, {
							hk: "1qzJqB"
						}),
						max: qc,
						min: Kc,
						type: "text",
						value: e.newSubredditName,
						onChange: t => {
							const n = t.currentTarget.value.replace(zc, "");
							e.onSubredditNameChange(n)
						}
					}), d.fbt._("?", null, {
						hk: "1b1vhH"
					}))
				})),
				Yc = n("./src/reddit/components/Governance/ProposalTemplates/TopModReplacement/index.m.less"),
				Zc = n.n(Yc);
			const Xc = 20;
			const $c = Object(i.c)({
				topMod: e => e.creations.formData.newTopMod
			});
			var ed = Object(s.b)($c, e => ({
					onUsernameChange: t => e(Object(Ua.b)({
						username: t
					}))
				}))((function(e) {
					return r.a.createElement(Wc, {
						className: e.className,
						options: me.f[me.a.ReplaceTopMod](),
						poll: e.poll,
						subreddit: e.subreddit,
						onUpdatePoll: e.onUpdatePoll
					}, d.fbt._("Should", null, {
						hk: "22RF0A"
					}), r.a.createElement(Gc.c, {
						redditStyle: !0,
						className: Zc.a.input,
						label: d.fbt._("username", null, {
							hk: "1Fk03V"
						}),
						max: Xc,
						type: "text",
						value: e.topMod,
						onChange: t => e.onUsernameChange(t.currentTarget.value)
					}), d.fbt._("become the top moderator?", null, {
						hk: "4COtce"
					}))
				})),
				td = n("./src/reddit/icons/svgs/Info/index.tsx"),
				nd = n("./src/reddit/components/PollCreator/DefaultHintText/index.m.less"),
				od = n.n(nd);
			const rd = e => [() => d.fbt._("Suggest short clear options", null, {
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

			function sd(e) {
				const {
					isPrediction: t
				} = e;
				return r.a.createElement(o.Fragment, null, r.a.createElement("div", {
					className: od.a.helpTitle
				}, r.a.createElement(td.a, {
					className: od.a.infoIcon
				}), r.a.createElement("div", {
					className: od.a.helpTitleText
				}, t ? d.fbt._("Tips on Better Predictions", null, {
					hk: "3kIzkr"
				}) : d.fbt._("Tips on Better Polls", null, {
					hk: "2QMuX9"
				}))), r.a.createElement("ol", {
					className: od.a.helpTextList
				}, rd(!!t).map(e => r.a.createElement("li", {
					className: od.a.helpTextItem,
					key: e()
				}, e()))))
			}
			var id = n("./src/reddit/components/PostCreationForm/MarkdownEditor/index.tsx"),
				ad = n("./src/reddit/components/RichTextEditor/index.tsx"),
				cd = n("./src/reddit/featureFlags/component.tsx"),
				dd = n("./src/reddit/helpers/richTextEditor/index.ts"),
				ld = n("./src/reddit/models/PostRequirements/index.ts"),
				ud = n("./src/reddit/featureFlags/index.ts"),
				md = n("./src/reddit/icons/svgs/GovSmall/index.tsx"),
				pd = n("./src/reddit/icons/svgs/Poll/index.tsx"),
				bd = n("./src/reddit/components/PostCreationForm/PostEditor/GovTypeSelector/index.m.less"),
				hd = n.n(bd);
			const fd = Object(Dt.a)(Ga.a),
				gd = [{
					Icon: pd.a,
					showNewTag: !0,
					text: () => d.fbt._("general", null, {
						hk: "2zk1er"
					}),
					type: null
				}, {
					Icon: md.a,
					showNewTag: !1,
					text: () => d.fbt._("governance", null, {
						hk: "1wlLfQ"
					}),
					type: me.a.GovGeneric
				}, {
					Icon: md.a,
					showNewTag: !1,
					text: () => d.fbt._("spin-off a new community", null, {
						hk: "jNK0c"
					}),
					type: me.a.Spinoff
				}],
				Cd = "gov-type-selector-dropdown";
			const _d = Object(i.c)({
				dropdownIsOpen: e => e.tooltipId === Cd,
				govType: e => e.creations.formData.govType,
				spinoffEnabled: ud.d.spSpinoffs
			});
			var xd = Object(s.b)(_d, e => ({
					onChangeGovType: (t, n) => {
						e(Object(a.k)({
							oldType: n,
							type: t
						})), e(Object(Wa.i)())
					},
					onToggleDropdown: () => e(Object(Wa.h)({
						tooltipId: Cd
					}))
				}))((function(e) {
					const t = function(e, t) {
							return gd.filter(({
								type: e
							}) => !(!t.spinoffEnabled && e === me.a.Spinoff))
						}(0, e),
						n = t.find(t => t.type === e.govType) || t[0];
					return r.a.createElement("div", {
						className: Object(p.a)(hd.a.container, e.className)
					}, r.a.createElement("div", {
						className: hd.a.currentSelection,
						id: Cd,
						onClick: e.onToggleDropdown
					}, r.a.createElement(n.Icon, {
						className: hd.a.pollTypeIcon
					}), r.a.createElement("div", {
						className: hd.a.text
					}, n.text()), r.a.createElement(Ha.a, {
						className: hd.a.dropdownIcon
					}), n.showNewTag && r.a.createElement("div", {
						className: hd.a.newLabel
					}, d.fbt._("new", null, {
						hk: "4iv34v"
					}))), r.a.createElement(fd, {
						className: hd.a.dropdown,
						tooltipId: Cd,
						isOpen: e.dropdownIsOpen
					}, t.map((t, o) => r.a.createElement(Va.b, {
						"data-redditstyle": !0,
						displayText: t.text(),
						isSelected: t.type === n.type,
						key: o,
						onClick: () => e.onChangeGovType(t.type, e.govType)
					}))))
				})),
				Ed = n("./src/reddit/components/PostCreationForm/PostEditor/index.m.less"),
				vd = n.n(Ed);

			function Od() {
				return (Od = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const yd = Object(cd.a)("spGovPolls", xd),
				kd = (e, t) => !e && t && t.bodyRestrictionPolicy === ld.a.Required,
				Sd = Object(i.c)({
					canPostAsModerator: P.e,
					destSubreddit: P.h,
					draft: T.d,
					editorMode: P.n,
					govType: e => e.creations.formData.govType,
					markdownBody: P.T,
					pending: P.Z,
					poll: e => e.creations.formData.polls || void 0,
					postCreationFieldErrors: ut,
					postRequirements: P.nb,
					rteState: P.eb,
					shouldAllowBodyText: P.gb,
					subreddit: y.r
				}),
				jd = Object(s.b)(Sd, (e, {
					onChange: t,
					onPostFieldValidation: n,
					pageLayer: o
				}) => ({
					onBlur: () => {
						n(e(We(b.vb.BODY, o)))
					},
					onFocus: () => e((e, t) => k.o(t(), g.l.CLICK, g.m.BODY)),
					onRTEStateChange: (n, o) => {
						e(a.e({
							rteState: n,
							isContentChanged: o
						})), t()
					},
					onToggleEditorMode: (t, n) => e(Ma.d(g.h.POST_CREATION, t, n)),
					onTrackToolbarClick: (t, n) => e((e, o) => k.E(o(), t, n)),
					onUpdatePoll: t => e(Object(Na.b)(t))
				}));
			class Pd extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {}, this.onEditorResize = e => {
						this.setState({
							editorHeight: e
						})
					}, this.onToggleEditorMode = async (e, t) => {
						await this.props.onToggleEditorMode(e, t), e === g.i.RICH_TEXT ? this.rteRef && this.rteRef.focus() : this.markdownEditorRef && this.markdownEditorRef.focus()
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
					} = this.props, m = a[b.vb.BODY].length > 0, h = !!u && u.isNSFW, f = kd(e, c) ? d.fbt._("Text (required)", null, {
						hk: "E1dIP"
					}) : d.fbt._("Text (optional)", null, {
						hk: "4jfNex"
					}), C = h;
					return o === g.i.RICH_TEXT ? r.a.createElement(ad.a, {
						allowMediaUploads: !C,
						focusableContentRTEClassName: Object(p.a)(vd.a.focusableContent, {
							[vd.a.mHasError]: m,
							[vd.a.mPollBorder]: !!n
						}),
						destSubreddit: t,
						editorType: dd.a.Post,
						initialHeight: this.state.editorHeight,
						rteState: l,
						onBlur: this.props.onBlur,
						onChange: this.props.onRTEStateChange,
						onEditorResize: this.onEditorResize,
						onFocus: this.props.onFocus,
						onSubmit: this.props.onSubmit,
						onSwitchEditorMode: this.onToggleEditorMode,
						placeholderText: f,
						readOnly: i,
						rteRef: this.setRteRef,
						trackToolbarClick: this.props.onTrackToolbarClick
					}) : r.a.createElement(id.a, {
						focusableContentMarkdownClassName: Object(p.a)(vd.a.focusableContent, {
							[vd.a.mHasError]: m,
							[vd.a.mPollBorder]: !!n
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
						placeholderText: f
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
						className: vd.a.pollCreator
					}, r.a.createElement(yd, {
						className: vd.a.govToggle
					}), this.govType()), r.a.createElement(ie.a, {
						errorModalTitle: o ? Object(oo.c)(o.name) : void 0,
						messages: t[b.vb.BODY]
					}))
				}
				govType() {
					var e;
					const {
						govType: t,
						poll: n,
						subreddit: o
					} = this.props, s = {
						onUpdatePoll: this.props.onUpdatePoll,
						poll: n
					}, i = {
						...s,
						pollType: t
					}, a = {
						...i,
						allowPredictions: this.props.isPredictionCreationAllowed,
						subredditId: null === (e = this.props.subreddit) || void 0 === e ? void 0 : e.id
					};
					switch (t) {
						case me.a.ReplaceTopMod:
							return o ? r.a.createElement(ed, Od({}, s, {
								subreddit: o
							})) : r.a.createElement(Ac, Od({}, i, {
								hintTextComponent: r.a.createElement(sd, null)
							}));
						case me.a.GovGeneric:
							return r.a.createElement(Ac, Od({}, i, {
								hintTextComponent: o ? r.a.createElement(Ba, {
									subreddit: o
								}) : r.a.createElement(sd, null)
							}));
						case me.a.Spinoff:
							return o ? r.a.createElement(Jc, Od({}, s, {
								subreddit: o
							})) : r.a.createElement(Ac, Od({}, i, {
								hintTextComponent: r.a.createElement(sd, null)
							}));
						case me.a.Prediction:
							return r.a.createElement(Ac, Od({}, a, {
								hintTextComponent: r.a.createElement(sd, {
									isPrediction: !0
								})
							}));
						case me.a.GA:
						case null:
							return r.a.createElement(Ac, Od({}, a, {
								hintTextComponent: r.a.createElement(sd, null)
							}))
					}
				}
			}
			var Td = Object(y.u)({
					draftId: y.v,
					pageLayer: e => e
				})(jd(Pd)),
				wd = n("./src/reddit/components/PostCreationForm/PostTitle/index.m.less"),
				Id = n.n(wd);
			const Dd = Object(i.c)({
					canPostAsModerator: P.e,
					disableTitleEdits: e => e.creations.formData.govType === me.a.ReplaceTopMod || e.creations.formData.govType === me.a.Spinoff,
					pending: P.Z,
					postCreationFieldErrors: ut,
					postRequirements: P.nb,
					shouldAllowBodyText: P.gb,
					submissionType: P.a,
					subreddit: y.r,
					title: P.pb
				}),
				Nd = Object(s.b)(Dd, (e, {
					onChange: t,
					onPostFieldValidation: n,
					pageLayer: o
				}) => ({
					onBlur: () => {
						n(e(We(b.vb.TITLE, o)))
					},
					onChange: n => {
						e(a.h(n)), t(n)
					},
					onInputFocus: () => e((e, t) => k.o(t(), g.l.CLICK, g.m.TITLE))
				}));
			var Md = Object(y.u)()(Nd(e => {
					const {
						canPostAsModerator: t,
						postRequirements: n,
						postCreationFieldErrors: o,
						subreddit: s
					} = e, i = e.submissionType === b.Tb.POST && !e.shouldAllowBodyText, a = o[b.vb.TITLE].length > 0, c = t ? it.f : n && n.titleTextMaxLength || it.f;
					return r.a.createElement("div", {
						className: Id.a.container
					}, r.a.createElement("div", {
						className: Id.a.inputWrapper
					}, r.a.createElement(Fr, {
						className: Object(p.a)(Id.a.PostTitleInput, {
							[Id.a.mHasError]: a
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
						className: Id.a.charsCounter
					}, e.title.length, "/", c)), r.a.createElement(ie.a, {
						errorModalTitle: s ? Object(oo.c)(s.name) : void 0,
						messages: o[b.vb.TITLE]
					}))
				})),
				Rd = n("./src/reddit/components/PostCreationForm/Prompt/index.tsx");
			const Ld = "g-recaptcha",
				Ad = "image",
				Fd = {
					COMPACT: "compact",
					NORMAL: "normal"
				},
				Bd = () => new Promise(e => {
					if (window.grecaptcha) return e(window.grecaptcha);
					window.grecaptchaOnLoad = () => e(window.grecaptcha);
					const t = document.createElement("script");
					t.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaOnLoad&render=explicit", document.body.appendChild(t)
				});
			class Ud extends r.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				componentDidMount() {
					const {
						callback: e,
						size: t,
						type: n
					} = this.props;
					Bd().then(o => {
						o.render(Ld, {
							callback: e,
							type: n,
							sitekey: It.a.recaptchaSitekey,
							size: t || Fd.COMPACT
						})
					})
				}
				componentWillReceiveProps(e) {
					this.props.submissionPending && !e.submissionPending && Bd().then(e => {
						e.reset()
					})
				}
				render() {
					return r.a.createElement("div", {
						className: "Recaptcha",
						id: Ld
					})
				}
			}
			var Wd = n("./src/reddit/components/PostCreationForm/RecaptchaOverlay/index.m.less"),
				Gd = n.n(Wd);
			const {
				fbt: Vd
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Hd = ne.a.div("OverlayWrapper", Gd.a), Kd = ne.a.div("OverlayContent", Gd.a), qd = ne.a.div("ExplanationText", Gd.a);
			var zd = Object(s.b)(void 0, (e, t) => ({
				onChange: n => {
					e(a.f(n)), t.callback(n)
				}
			}))(e => r.a.createElement(Hd, null, r.a.createElement(Kd, null, r.a.createElement(qd, null, Vd._("Ok, one more thing ... you're human, right?", null, {
				hk: "2xDwBB"
			})), r.a.createElement(Ud, {
				submissionPending: !0,
				callback: e.onChange,
				size: Fd.NORMAL,
				type: Ad
			}))));
			const Qd = "POST_CREATION__CONFIRM_SAVE_DRAFT_WITH_LIMITATIONS";

			function Jd(e) {
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
				})), r.a.createElement(V.a, {
					bodyText: o,
					onClose: e.onCancel,
					onPrimaryAction: e.onConfirm,
					onSecondaryAction: e.onCancel,
					primaryButtonText: d.fbt._("Save", null, {
						hk: "4yMsMq"
					}),
					secondaryButtonText: d.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}),
					titleText: d.fbt._("Save draft", null, {
						hk: "1RxZQJ"
					})
				})
			}
			var Yd = n("./src/reddit/components/PostCreationForm/SubredditChangePrompt/index.m.less"),
				Zd = n.n(Yd);
			const Xd = {
					[g.q.ImageWillBeRemoved]: {
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
					[g.q.VideoWillBeRemovedMediaNotAllowed]: {
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
					[g.q.VideoWillBeRemovedTooLongForGif]: {
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
					[g.q.GalleryWillBeRemovedGalleryNotAllowed]: {
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
				$d = ne.a.div("Wrapper", Zd.a),
				el = ne.a.wrapped(le.a, "TitleRow", Zd.a),
				tl = ne.a.div("DetailsContainer", Zd.a),
				nl = ne.a.wrapped(le.a, "ButtonRow", Zd.a),
				ol = ne.a.wrapped(ge.k, "CancelButton", Zd.a),
				rl = ne.a.wrapped(ge.n, "ConfirmButton", Zd.a);
			var sl = Object(hn.a)(e => {
					const {
						promptType: t,
						nextSubreddit: n
					} = e, o = Xd[t];
					return r.a.createElement($d, null, r.a.createElement(el, null, o.removePromptTitle()), r.a.createElement(tl, null, o.details(n.name)), r.a.createElement(nl, null, r.a.createElement(rl, {
						onClick: e.onConfirmed
					}, o.removeConfirm()), r.a.createElement(ol, {
						onClick: e.onCanceled
					}, o.removeCancel())))
				}),
				il = n("./src/lib/filterQueryParams/index.ts"),
				al = n("./src/reddit/models/ScheduledPost/index.ts"),
				cl = n("./src/reddit/selectors/gold/powerups/index.ts"),
				dl = n("./src/reddit/components/PostCreationForm/Tabs/index.m.less"),
				ll = n.n(dl);
			const ul = e => r.a.createElement("button", {
					className: Object(p.a)(ll.a.Tab, e.className, {
						[ll.a.isActive]: e.active
					}),
					disabled: e.disabled,
					onClick: e.onClick
				}, e.children),
				ml = Object(i.a)(P.d, P.e, P.h, P.Q, P.Z, y.r, (e, t) => {
					const n = Object(y.n)(e, t);
					return !!n && Object(cl.t)(e, {
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
						link: r || !c || o && !Object(al.g)("links"),
						media: !l && !a && !t || r || u && !i || o && !Object(al.g)("images"),
						post: !d && !t || r || o && !Object(al.g)("text"),
						poll: !e || o && !Object(al.g)("polls")
					}
				}),
				pl = Object(i.c)({
					canPostAsModerator: P.e,
					destSubreddit: P.h,
					govType: e => e.creations.formData.govType,
					hasCreatedPredictionDrafts: gc.a,
					isTabsDisabled: ml,
					pending: P.Z,
					submissionType: P.a,
					subreddit: y.r,
					isImageGalleryCreationEnabled: P.L
				}),
				bl = Object(s.b)(pl, (e, t) => ({
					onChange: (n, o) => {
						e(a.g({
							submissionType: n,
							extra: o
						})), e((e, t) => k.w(t(), n)), e(a.w(n === b.Tb.POLL)), ((e, t, n) => {
							if (!t) return;
							const o = Object(il.a)(t.url, n);
							t.url !== o && e(Object(m.c)(o))
						})(e, t.pageLayer, ["url", "media", "onlyTitle", "text", "selftext"])
					}
				}));
			class hl extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onPostTabClick = () => {
						this.props.isTabsDisabled.post || this.props.onChange(b.Tb.POST, {
							govType: this.props.govType
						})
					}, this.onMediaTabClick = () => {
						this.props.isTabsDisabled.media || this.props.onChange(b.Tb.MEDIA, {
							govType: this.props.govType
						})
					}, this.onLinkTabClick = () => {
						this.props.isTabsDisabled.link || this.props.onChange(b.Tb.LINK_ONLY, {
							govType: this.props.govType
						})
					}, this.onPollTabClick = () => {
						this.props.isTabsDisabled.poll && !this.props.isPredictionCreationAllowed || this.props.onChange(b.Tb.POLL, {
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
						isImageGalleryCreationEnabled: s,
						isPredictionCreationAllowed: i
					} = this.props, {
						name: a = "",
						allowedPostTypes: c
					} = e, {
						images: l = !0,
						videos: u = !0
					} = c || {};
					let m = d.fbt._({
						"*": "Images & Video",
						_1: "Image & Video"
					}, [d.fbt._plural(s ? 2 : 1)], {
						hk: "3VeQoy"
					});
					return l && !u ? m = s ? d.fbt._("Images", null, {
						hk: "3fSX8N"
					}) : d.fbt._("Image", null, {
						hk: "uFHQ1"
					}) : u && !l && (m = d.fbt._("Video", null, {
						hk: "3w6DFr"
					})), r.a.createElement("div", {
						className: ll.a.Container
					}, r.a.createElement("div", {
						className: ll.a.row
					}, r.a.createElement(ul, {
						active: o === b.Tb.POST,
						disabled: t || n.post,
						onClick: this.onPostTabClick
					}, r.a.createElement(de.a, {
						name: "text_post",
						isFilled: o === b.Tb.POST,
						className: ll.a.Icon
					}), d.fbt._("Post", null, {
						hk: "ozUj2"
					})), r.a.createElement(ul, {
						active: o === b.Tb.MEDIA,
						disabled: t || n.media,
						onClick: this.onMediaTabClick
					}, n.media && r.a.createElement(Ze.a, {
						text: d.fbt._("Images and videos are not allowed in {subreddit name}", [d.fbt._param("subreddit name", `r/${a}`)], {
							hk: "2uC6BP"
						})
					}), r.a.createElement(de.a, {
						name: "image_post",
						isFilled: o === b.Tb.MEDIA,
						className: ll.a.Icon
					}), m), r.a.createElement(ul, {
						active: o === b.Tb.LINK_ONLY,
						disabled: t || n.link,
						onClick: this.onLinkTabClick
					}, r.a.createElement(de.a, {
						name: "link_post",
						isFilled: o === b.Tb.LINK_ONLY,
						className: ll.a.Icon
					}), d.fbt._("Link", null, {
						hk: "1pbEKv"
					})), r.a.createElement(ul, {
						active: o === b.Tb.POLL,
						disabled: t || n.poll && !i,
						onClick: this.onPollTabClick
					}, r.a.createElement(de.a, {
						name: "poll_post",
						isFilled: o === b.Tb.POLL,
						className: ll.a.Icon
					}), n.poll && i ? d.fbt._("Prediction", null, {
						hk: "3NTNLd"
					}) : d.fbt._("Poll", null, {
						hk: "SQdo4"
					}))))
				}
			}
			var fl = Object(y.u)()(bl(hl));

			function gl() {
				return (gl = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var Cl = n("./src/reddit/components/PostCreationForm/index.m.less"),
				_l = n.n(Cl);
			const xl = ne.a.div("FormContent", _l.a),
				El = ne.a.wrapped(E.a, "CrosspostBox", _l.a),
				vl = ne.a.div("FormContainer", _l.a),
				Ol = ne.a.div("TabContent", _l.a),
				yl = Object(y.u)({
					draftId: y.v,
					isPostCreationPage: y.F,
					pageLayer: e => e,
					sourcePostId: e => Object(y.W)(e).source_id
				}),
				kl = Object(i.c)({
					submissionType: P.a,
					allowNavigationCallback: j.a,
					contributorRequestPending: e => Object(w.f)(e, C.e.Post),
					discardGoesBack: (e, {
						pageLayer: t
					}) => {
						const n = Object(y.T)(e, {
							pageLayer: t
						});
						return !!n && "/" === n[0]
					},
					draft: T.d,
					draftsCount: I.l,
					editorMode: P.n,
					eventSchedule: P.p,
					includeUserProfile: I.h,
					isChanged: P.F,
					isNameEditable: I.M,
					isPostSubmitEnabled: Kn,
					isScheduledPost: P.Q,
					flair: P.r,
					hasError: P.u,
					havePostContent: P.B,
					linkBody: P.S,
					markdownBody: P.T,
					rteBody: P.eb,
					maxDrafts: I.W,
					modalId: S.a,
					needsCaptcha: P.W,
					nextSubreddit: P.X,
					pending: P.Z,
					postRequirements: P.nb,
					sourcePostRoot: P.ib,
					submitMode: P.lb,
					subredditOrProfile: y.p,
					title: P.pb,
					uploads: e => e.uploads,
					isOpenAIPilotV1: ya.e,
					isSubredditHasCollections: (e, t) => {
						const n = Object(y.p)(e, t);
						return !!n && Object(x.m)(e, {
							subredditId: n.id
						})
					}
				});
			class Sl extends r.a.Component {
				constructor(e) {
					super(e), this.postFieldValidationPending = null, this.sendStartTypingInputBodyEvent = u()(() => this.props.onStartTypingInput(g.m.BODY)), this.sendStartTypingInputTitleEvent = u()(() => this.props.onStartTypingInput(g.m.TITLE)), this.sendStartTypingInputUrlEvent = u()(() => this.props.onStartTypingInput(g.m.URL)), this.onExternalAccountConnected = () => {
						this.props.onExternalAccountsDataRequested()
					}, this.onRecaptchaSucceeded = () => {
						this.props.onSubmit(this.props.submitMode, this.postFieldValidationPending)
					}, this.onDiscardPromptOnNavigationConfirm = () => {
						this.props.onTrackDiscardButtonClick(), this.props.discardGoesBack || this.props.onDiscardPromptOnNavigationConfirmed(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onDiscardPromptOnNewPostConfirm = () => {
						this.props.onTrackDiscardButtonClick(), this.props.onToggleModal(g.d), this.props.onDiscardPromptOnCreatePostConfirmed()
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
						} = this.props, o = Object(f.c)(f.a.PostComposer);
						e && n(t ? g.r.ScheduledPost : g.r.Post, this.postFieldValidationPending, o)
					}, this.onSaveDraft = async () => {
						const {
							draftId: e,
							draftsCount: t,
							eventSchedule: n,
							maxDrafts: o,
							onToggleModal: r
						} = this.props;
						!e && t >= o ? r(Rd.a.MAX_DRAFTS_MODAL_ID) : n || this.hasRichPostMedia() ? r(Qd) : this.props.onSubmit(g.r.Draft, this.postFieldValidationPending)
					}, this.tryLoadDraft = e => {
						this.props.isChanged ? (this.setState({
							draftToLoad: e
						}), this.props.onToggleModal(Rd.a.LOAD_DRAFT_MODAL_ID)) : (this.props.onToggleModal(g.e), this.onLoadDraft(e))
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
							case Rd.a.LOAD_DRAFT_MODAL_ID:
								this.props.onToggleModal(e), this.onLoadDraft(this.state.draftToLoad);
								break;
							case Rd.a.MAX_DRAFTS_MODAL_ID:
								this.props.onRequestDraftList(), this.props.onToggleModal(g.e);
								break;
							default:
								this.props.onToggleModal(e)
						}
					}, this.onConfirmSavingDraftWithLimitations = () => {
						this.onToggleCurrentModal(), this.props.onSubmit(g.r.Draft, this.postFieldValidationPending)
					}, this.onToggleCollectionListModal = () => {
						this.props.onToggleModal(g.a)
					}, this.onCollectionCreated = e => {
						this.onToggleCurrentModal(), this.onSelectCollection(e)
					}, this.onDraftListClose = () => {
						this.props.onToggleModal(g.e)
					}, this.onPostFieldValidation = e => {
						this.postFieldValidationPending = e
					}, this.state = {
						draftToLoad: null
					}
				}
				componentDidMount() {
					Object(f.d)(f.a.PostComposer), this.externalAccountEventsChannel = Object(B.a)(), this.externalAccountEventsChannel.addEventListener("message", this.onExternalAccountConnected), this.props.isNameEditable && this.props.startChangeUsernameFlow()
				}
				componentWillUnmount() {
					Object(f.b)(f.a.PostComposer), this.externalAccountEventsChannel && this.externalAccountEventsChannel.close(), this.props.onUnmount()
				}
				hasRichPostMedia() {
					const {
						rteBody: e,
						submissionType: t
					} = this.props;
					return t === b.Tb.POST && e.isBound && Object(O.j)(e.editorState.getCurrentContent())
				}
				renderActiveForm() {
					switch (this.props.submissionType) {
						case b.Tb.POST:
						case b.Tb.POLL:
							return r.a.createElement(Td, {
								displayPollCreation: this.props.submissionType === b.Tb.POLL,
								isPredictionCreationAllowed: this.props.isPredictionCreationAllowed,
								onChange: this.sendStartTypingInputBodyEvent,
								onPostFieldValidation: this.onPostFieldValidation,
								onSubmit: this.onSubmit
							});
						case b.Tb.MEDIA:
							return r.a.createElement(zi, null);
						case b.Tb.LINK_ONLY:
							return r.a.createElement(Hr, {
								onChange: this.sendStartTypingInputUrlEvent,
								onKeyDown: this.handleKeyDown,
								onPostFieldValidation: this.onPostFieldValidation
							});
						case b.Tb.CROSSPOST: {
							const {
								sourcePostRoot: e
							} = this.props;
							return e && r.a.createElement(El, {
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
						isOpenAIPilotV1: o,
						isPredictionCreationAllowed: s,
						modalId: i,
						needsCaptcha: a,
						nextSubreddit: c,
						postRequirements: l,
						sourcePostId: u,
						sourcePostRoot: m,
						submissionType: h,
						submitMode: f,
						subredditOrProfile: C
					} = this.props;
					if (h === b.Tb.CROSSPOST) {
						if (!m) return r.a.createElement(_.b, {
							message: d.fbt._("The original post cannot be found", null, {
								hk: "3ieS5B"
							})
						});
						if (!m.isCrosspostable || m.isSponsored) return r.a.createElement(_.a, {
							message: d.fbt._("The original post cannot be crossposted", null, {
								hk: "4hn9ht"
							})
						})
					}
					const x = l && l.guidelinesText && l.guidelinesText.trim() || "";
					return r.a.createElement(vl, null, r.a.createElement(Da, {
						submissionType: h,
						submitMode: f
					}), !o && r.a.createElement(r.a.Fragment, null, r.a.createElement(uo, {
						includeUserProfile: n,
						allowCrosspostableOnly: !!u
					}), !!x && r.a.createElement("div", {
						className: _l.a.PostingGuidelines
					}, x)), r.a.createElement(xl, null, h !== b.Tb.CROSSPOST && r.a.createElement(fl, {
						isPredictionCreationAllowed: s
					}), r.a.createElement(Ol, null, r.a.createElement(Md, {
						onChange: this.sendStartTypingInputTitleEvent,
						onKeyDown: this.handleKeyDown,
						onPostFieldValidation: this.onPostFieldValidation
					}), this.renderActiveForm()), o && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: _l.a.postToTitle
					}, "Post to"), r.a.createElement(uo, {
						includeUserProfile: n,
						allowCrosspostableOnly: !!u,
						className: so.a.SubredditRec
					}), !!x && r.a.createElement("div", {
						className: Object(p.a)(_l.a.PostingGuidelines, _l.a.isSubredditRec)
					}, x)), e && r.a.createElement(v.a, null), r.a.createElement(Xn, {
						contributorRequestPending: e,
						draftId: t,
						onCancel: this.props.onDiscardPromptOnNavigationConfirmed,
						onPostFieldValidation: this.onPostFieldValidation,
						onSaveDraft: this.onSaveDraft,
						onSubmit: this.onSubmit,
						sourcePostId: u,
						subredditId: null == C ? void 0 : C.id,
						shouldRenderDivider: !o,
						isOpenAISubRec: o
					}), r.a.createElement(va, {
						draftId: t
					})), a && r.a.createElement(zd, {
						callback: this.onRecaptchaSucceeded
					}), i === K && r.a.createElement(z, {
						onAbort: this.onDiscardPromptAbort,
						onDiscardConfirmed: this.onDiscardPromptOnNavigationConfirm,
						onSaveDraft: this.onDiscardPromptSaveDraft,
						submissionType: h
					}), i === g.d && r.a.createElement(z, {
						onAbort: this.onDiscardPromptAbort,
						onDiscardConfirmed: this.onDiscardPromptOnNewPostConfirm,
						onSaveDraft: this.onDiscardPromptSaveDraft,
						submissionType: h
					}), i === g.e && r.a.createElement(Or, {
						onClose: this.onDraftListClose,
						onLoadDraft: this.tryLoadDraft
					}), i === g.a && C && r.a.createElement(ee.a, {
						onClose: this.onToggleCollectionListModal,
						onSelectCollection: this.onSelectCollection,
						subredditId: C.id
					}), Object(g.v)(i) && C && r.a.createElement($n.a, {
						onCancel: this.props.closeCreateCollectionModal,
						onCollectionCreated: this.onCollectionCreated,
						subredditId: C.id
					}), i === Rd.a.LOAD_DRAFT_MODAL_ID && r.a.createElement(Rd.b, {
						modalId: Rd.a.LOAD_DRAFT_MODAL_ID,
						onCancel: this.onPromptCancel,
						onConfirm: this.onPromptConfirm
					}), i === Rd.a.MAX_DRAFTS_MODAL_ID && r.a.createElement(Rd.b, {
						modalId: Rd.a.MAX_DRAFTS_MODAL_ID,
						onCancel: this.onPromptCancel,
						onConfirm: this.onPromptConfirm
					}), i === Qd && r.a.createElement(Jd, {
						onCancel: this.onToggleCurrentModal,
						onConfirm: this.onConfirmSavingDraftWithLimitations,
						hasEventSchedule: !!this.props.eventSchedule,
						hasRichPostMedia: this.hasRichPostMedia()
					}), c && (i === g.q.ImageWillBeRemoved || i === g.q.VideoWillBeRemovedTooLongForGif || i === g.q.VideoWillBeRemovedMediaNotAllowed || i === g.q.GalleryWillBeRemovedGalleryNotAllowed) && r.a.createElement(sl, {
						withOverlay: !0,
						promptType: i,
						nextSubreddit: c,
						onConfirmed: this.onSubredditChangePromptConfirmed,
						onCanceled: this.props.onCancelSubredditChange
					}), r.a.createElement($, null))
				}
			}
			var jl, Pl = yl(Object(s.b)(kl, (e, {
					draftId: t,
					sourcePostId: n,
					pageLayer: o
				}) => ({
					onLoadDraft: t => e(A.q(t)),
					onSubmit: (r, s, i) => e(R.a(r, {
						draftId: t || void 0,
						pageLayer: o,
						postFieldValidationPending: s,
						sourcePostId: n,
						correlationId: i
					})),
					onDiscardPromptOnCreatePostConfirmed: () => {
						e(a.p(!1, o))
					},
					onDiscardPromptOnNavigationConfirmed: (t, n) => {
						e(t ? Object(m.a)() : n ? Object(m.b)(n.url) : Object(m.b)("/"))
					},
					onExternalAccountsDataRequested: () => e(N.o()),
					onRedirectToSubreddit: n => e(L.a(n, t)),
					onCancelSubredditChange: () => {
						e(a.y("")), e(L.e())
					},
					onCancelAndRemoveMediaUpload: () => {
						e(Object(a.d)({
							items: [],
							selectedKey: null
						})), e(F.j(M.a, !0))
					},
					onClearErrors: (t, n) => t && e(a.i(n)),
					onRequestDraftList: () => e(A.p()),
					onSetDestCollection: t => e(L.d(t)),
					onStartTypingInput: t => e((e, n) => k.o(n(), g.l.TYPE, t)),
					onToggleIsChanged: t => e(a.s(t)),
					onToggleModal: t => e(a.y(t)),
					onTrackDiscardButtonClick: () => e((e, t) => k.d(t())),
					onUnmount: () => e((e, t) => {
						e(F.j(M.a, !0)), e(F.i(g.n, !0))
					}),
					onUploadPendingThumbnails: t => e(M.f(t)),
					startChangeUsernameFlow: () => e(Object(D.f)())
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onClearErrors: n => t.onClearErrors(e.hasError || e.hasSubmitValidationError, n),
					onDiscardPromptOnNavigationConfirmed: () => t.onDiscardPromptOnNavigationConfirmed(e.discardGoesBack, e.subreddit),
					closeCreateCollectionModal: () => {
						e.isSubredditHasCollections || e.modalId !== g.c ? t.onToggleModal(g.a) : t.onToggleModal(g.c)
					}
				}))((jl = Sl, e => {
					const t = function() {
						const [e, t] = r.a.useState(!1), n = Object(s.d)(), o = Object(y.db)(), i = Object(s.e)(e => Object(y.r)(e, {
							pageLayer: o
						})), a = Object(s.e)(e => i && Object(be.h)(e, {
							subredditId: i.id
						})), c = Object(s.e)(pn.p);
						return r.a.useEffect(() => i && i.allowPredictions ? a ? t(!0) : c ? void Promise.resolve(n(Object(an.h)(i.id))).then(e => t(Boolean(e))) : t(!1) : t(!1), [i, c]), e
					}();
					return r.a.createElement(jl, gl({}, e, {
						isPredictionCreationAllowed: t
					}))
				}))),
				Tl = n("./src/reddit/components/PostingSidebar/index.tsx"),
				wl = n("./src/reddit/layout/page/Listing/index.tsx"),
				Il = n("./src/lib/makePostCreationPageKey/index.ts"),
				Dl = n("./src/reddit/helpers/trackers/screenview.ts"),
				Nl = n("./src/telemetry/models/Timer.ts");
			const Ml = Object(i.c)({
					destSubreddit: P.h,
					user: I.k
				}),
				Rl = Object(s.b)(Ml, (e, {
					pageLayer: t
				}) => ({
					onResetForm: () => e(a.p(!1, t))
				})),
				Ll = Object(y.u)({
					draftId: y.v,
					pageLayer: e => e
				});
			class Al extends o.Component {
				componentDidMount() {
					document.documentElement.scrollTop = document.body.scrollTop = 0;
					const e = this.props.pageLayer;
					if (e) {
						const t = Object(Il.a)(e.urlParams);
						te.c.has(t) && this.props.sendEvent(Object(Dl.l)(t, Nl.TimerType.InApp, te.c.end(t)))
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
						if (!t) return r.a.createElement(_.b, null);
						if (Object(go.e)(t).toLowerCase() !== e.name.toLowerCase()) return r.a.createElement(_.a, null)
					}
					return r.a.createElement(wl.a, {
						redditStyle: !0,
						disableFullscreen: !0,
						navBar: r.a.createElement("div", null),
						content: r.a.createElement(r.a.Fragment, null, r.a.createElement(c.a, null), r.a.createElement(Pl, null)),
						sidebar: r.a.createElement(Tl.a, null)
					})
				}
			}
			t.default = Ll(Rl(Object(sn.c)(Al)))
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

			function m(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						o = parseInt(t.price || "0");
					return n === o ? Object(i.b)(e, t) : n - o
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === r.a).map(m).sort((e, n) => {
					const o = t[e.id],
						r = t[n.id];
					return Object(i.b)(o, r)
				})
			}

			function b(e) {
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
						[c.a.Loyalty]: p(t[c.a.Loyalty], e.collections),
						[c.a.Achievement]: p(t[c.a.Achievement], e.collections),
						[c.a.Cosmetic]: {
							[c.c.Gallery]: p(t[c.a.Cosmetic][c.c.Gallery], e.collections),
							[c.c.MyBadges]: p(t[c.a.Cosmetic][c.c.MyBadges], e.collections)
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
								data: b(n),
								status: o.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, n) {
			"use strict";
			var o, r, s = n("./node_modules/redux/es/redux.js"),
				i = n("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(o || (o = {})),
			function(e) {
				e[e.BACKGROUND = 0] = "BACKGROUND", e[e.ACCESSORY_BACK = 1] = "ACCESSORY_BACK", e[e.HAIR_BACK = 2] = "HAIR_BACK", e[e.BODY_BOTTOM = 3] = "BODY_BOTTOM", e[e.BODY = 4] = "BODY", e[e.ACCESSORY = 5] = "ACCESSORY", e[e.FACE_LOWER = 6] = "FACE_LOWER", e[e.FACE_UPPER = 7] = "FACE_UPPER", e[e.HAIR = 8] = "HAIR", e[e.HEAD_ACCESSORY = 9] = "HEAD_ACCESSORY"
			}(r || (r = {}));
			const a = {
				id: "",
				csrf_token: "",
				snoovatar: null,
				websocketsUrls: {
					renderer: "",
					download: ""
				},
				capabilities: [o.PREMIUM],
				hasActiveClosetSubscription: !1
			};
			var c = (e = a, t) => {
				switch (t.type) {
					case i.b:
						return {
							...t.payload
						};
					default:
						return e
				}
			};
			const d = {
					marketingEvent: {
						active: !1,
						assetUrls: null
					},
					quickCreateV1: {
						id: "-1",
						active: !1,
						text: "",
						min_days_on_reddit: 0,
						should_have_avatar: !1,
						max_event_views: 0,
						min_days_since_last_event_interaction: 0,
						webAssetUrls: []
					}
				},
				l = "avatar_quick_create_event",
				u = "avatar_marketing_event",
				m = "avatar_promo_archived",
				p = e => {
					const t = {};
					return e.forEach(e => {
						if (e.startsWith("targeting:")) {
							const n = e.split(":");
							if (!n.length && n.length < 3) return null;
							try {
								t[n[1]] = JSON.parse(n[2])
							} catch {
								t[n[1]] = n[2]
							}
						}
					}), t
				};
			var b = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				h = n("./src/reddit/actions/modal.ts"),
				f = n("./src/reddit/constants/modals.ts");
			var g = (e = null, t) => {
				var n;
				switch (t.type) {
					case b.o:
						const {
							avatarMarketingEvents: o
						} = t.payload;
						return o ? function(e) {
							if (!e) return d;
							const t = d;
							return e.forEach(e => {
								const {
									startsAt: n,
									endsAt: o,
									webAssetUrls: r,
									tags: s
								} = e, i = n && new Date(n) <= new Date, a = !!o && new Date(o) < new Date, c = !!i && !a, d = s.includes(m);
								if (s && s.includes(l) && !d) {
									const {
										text: n,
										id: o
									} = e, i = r || null, a = p(s);
									t && (t.quickCreateV1 = {
										...a,
										id: o,
										text: n,
										active: c && !!i,
										webAssetUrls: i
									})
								}
								if (s && s.includes(u) && !d) {
									const e = r || null;
									t && (t.marketingEvent = {
										active: c && !!e,
										assetUrls: e
									})
								}
							}), t
						}(o) : d;
					case h.c:
						return (null === (n = t.payload) || void 0 === n ? void 0 : n.id) === f.a.SNOOVATAR_MODAL ? d : e;
					default:
						return e
				}
			};
			var C = (e = null, t) => {
				switch (t.type) {
					case i.a: {
						const {
							image: e,
							accessory_ids: n
						} = t.payload;
						return {
							image: e,
							accessoryIds: n
						}
					}
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				marketing: g,
				avatarUser: c,
				randomAvatar: C
			})
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
					m = (null == c ? void 0 : c.decimals) || 0,
					p = "1" + "0".repeat(m);
				return {
					blockchainProvider: d,
					contractAddress: (null == c ? void 0 : c.address) || "",
					contracts: a,
					decimals: m,
					displayConversion: p,
					images: e.images || l,
					inTransition: u,
					name: e.name,
					nomenclature: null === (s = e.extra) || void 0 === s ? void 0 : s.nomenclature,
					polls: e.polls,
					symbol: (null == c ? void 0 : c.token) || ""
				}
			}
			var m = (e = d, t) => {
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
			const p = {};
			var b = (e = p, t) => {
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
				points: m,
				publicWallets: b
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
			const m = {};
			t.a = (e = m, t) => {
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
		"./src/reddit/selectors/avatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			}));
			var o = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(o.a)({
				features: {
					avatar: r.a
				}
			});
			const s = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.avatarUser
				},
				i = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.avatarUser.csrf_token
				},
				a = e => {
					var t, n;
					return (null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.randomAvatar) || null
				}
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			var o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/avatar/index.ts"),
				i = n("./src/reddit/selectors/experiments/econ/index.ts");
			Object(r.a)({
				features: {
					avatar: s.a
				}
			});
			const a = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing)
				},
				c = Object(o.a)(i.d, e => {
					var t, n, o;
					const r = null === (o = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === o ? void 0 : o.marketingEvent;
					return (null == r ? void 0 : r.active) ? (null == r ? void 0 : r.assetUrls) && (null == r ? void 0 : r.assetUrls[0]) : null
				}, (e, t) => e ? t : null)
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
				const e = Object(r.db)(),
					t = Object(o.e)(t => Object(r.r)(t, {
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
		"./src/reddit/selectors/experiments/joinOptimizations.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			}));
			var o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/index.ts");
			const a = Object(o.a)(e => Object(s.c)(e, {
					experimentName: r.qb,
					experimentEligibilitySelector: i.e
				}), e => e === r.V.Enabled),
				c = Object(o.a)(e => Object(s.c)(e, {
					experimentName: r.rb,
					experimentEligibilitySelector: i.e
				}), e => e === r.W.Enabled),
				d = Object(o.a)(e => Object(s.c)(e, {
					experimentName: r.sb,
					experimentEligibilitySelector: i.e
				}), e => e === r.X.Enabled),
				l = Object(o.a)(e => Object(s.c)(e, {
					experimentName: r.tb,
					experimentEligibilitySelector: i.e
				}), e => e === r.Y.Enabled)
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const s = e => Object(r.c)(e, {
				experimentName: o.ud,
				experimentEligibilitySelector: r.a
			}) === o.zd.Enabled
		},
		"./src/reddit/selectors/experiments/replyWithUpvote.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				s = n("./src/reddit/selectors/user.ts");

			function i(e) {
				const t = Object(s.k)(e);
				return !(!t || (null == t ? void 0 : t.karma) && t.karma.fromPosts < 5 && t.karma.fromComments < 10) && Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: o.yb
				}) === o.Fc
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
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "d", (function() {
				return f
			}));
			var o = n("./src/lib/objectSelector/index.ts"),
				r = n("./src/reddit/models/Gold/Award.ts"),
				s = n("./src/reddit/selectors/commentSelector.ts"),
				i = n("./src/reddit/selectors/gold/giveAwards.ts"),
				a = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				d = n("./src/reddit/selectors/userPrefs.ts");
			const l = [32, 48, 64, 128],
				u = (e, t, n) => {
					const o = t ? e[`staticIcon${n}`] : e[`icon${n}`];
					return (null == o ? void 0 : o.url) ? o.url : t ? e.staticIcon.url : e.icon.url
				},
				m = ({
					award: e,
					size: t,
					prefersReducedMotion: n,
					postOrComment: o
				}) => e.awardSubType === r.d.Group ? (({
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
					return u(r, n, t)
				})({
					award: e,
					size: t,
					prefersReducedMotion: n,
					postOrComment: o
				}) : u(e, n, t),
				p = Object(o.a)((e, {
					awards: t,
					minSize: n,
					postOrCommentId: o
				}) => {
					const r = Object(d.c)(e),
						i = l.find(e => e >= n),
						c = o ? Object(a.H)(e, {
							postId: o
						}) || Object(s.b)(e, {
							commentId: o
						}) : void 0;
					return t.reduce((e, t) => (t && (e[t.id] = m({
						award: t,
						size: i,
						prefersReducedMotion: r,
						postOrComment: c
					})), e), {})
				}),
				b = (e, {
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
					const o = Object(c.nb)(e, {
						userName: n
					});
					if (o && o.awardedLastMonth && o.awardedLastMonth.topAward) return b(e, {
						award: o.awardedLastMonth.topAward,
						minSize: t
					})
				},
				f = e => {
					const t = Object(i.b)(e),
						n = Object(i.a)(e);
					return b(e, {
						award: t,
						postOrCommentId: n || void 0,
						minSize: 512
					})
				}
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
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "n", (function() {
				return b
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "w", (function() {
				return _
			})), n.d(t, "x", (function() {
				return x
			})), n.d(t, "v", (function() {
				return E
			})), n.d(t, "y", (function() {
				return v
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "i", (function() {
				return k
			})), n.d(t, "k", (function() {
				return S
			})), n.d(t, "j", (function() {
				return j
			})), n.d(t, "m", (function() {
				return P
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "d", (function() {
				return w
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
				m = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				p = e => {
					const t = Object(o.j)(e),
						n = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && n && t.find(e => e.mobileId === n) || null
				},
				b = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				h = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				f = e => e.features.goldPurchase.payment.paymentMethod,
				g = e => e.features.goldPurchase.payment.cardName,
				C = e => e.features.goldPurchase.payment.postalCode,
				_ = e => e.features.goldPurchase.payment.savedCardsPending,
				x = e => e.features.goldPurchase.payment.savedCards,
				E = e => e.features.goldPurchase.payment.rememberCard,
				v = e => e.features.goldPurchase.payment.useSavedCard,
				O = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				y = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				k = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				S = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				j = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				P = e => e.features.goldPurchase.payment.stripeToken.pending,
				T = e => e.features.goldPurchase.payment.paypal.passthrough,
				w = e => e.features.goldPurchase.payment.paypal.errorMessage
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
				return b
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "k", (function() {
				return C
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "r", (function() {
				return x
			})), n.d(t, "m", (function() {
				return E
			})), n.d(t, "n", (function() {
				return v
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "e", (function() {
				return y
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
				m = {},
				p = [],
				b = (e, {
					subredditId: t
				}) => (e.posts.scheduledPosts.standalonePosts.postOrder[t] || p).filter(n => !!(e.posts.scheduledPosts.standalonePosts.models[t] || m)[n]).map(n => e.posts.scheduledPosts.standalonePosts.models[t][n]),
				h = (e, {
					subredditId: t
				}) => (e.posts.scheduledPosts.recurringPosts.postOrder[t] || p).filter(n => !!(e.posts.scheduledPosts.recurringPosts.models[t] || m)[n]).map(n => e.posts.scheduledPosts.recurringPosts.models[t][n]),
				f = (e, {
					subredditId: t,
					scheduledPostId: n,
					type: o
				}) => {
					return (e.posts.scheduledPosts[o].models[t] || m)[n] || void 0
				},
				g = (e, {
					subredditId: t,
					scheduledPostId: n
				}) => f(e, {
					subredditId: t,
					scheduledPostId: n,
					type: s.f.standalonePosts
				}),
				C = (e, {
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
				_ = (e, {
					subredditId: t,
					scheduledPostId: n
				}) => g(e, {
					subredditId: t,
					scheduledPostId: n
				}) || C(e, {
					subredditId: t,
					scheduledPostId: n
				}),
				x = e => e.creations.formData.scheduledPostId,
				E = ({
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
					const t = E({
							scheduledPost: e
						}),
						n = t.find(e => e.type === r.f.Richtext);
					return n || (t.find(e => e.type === r.f.Text) || null)
				},
				O = e => e.posts.scheduledPosts[s.f.recurringPosts].editModal.scheduledPostId,
				y = e => e.posts.scheduledPosts[s.f.recurringPosts].editModal.subredditId,
				k = e => e.posts.scheduledPosts.api.pendingUpdate,
				S = e => e.posts.scheduledPosts.api.creationToken
		},
		"./src/reddit/selectors/userFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			}));
			var o = n("./src/lib/objectSelector/index.ts"),
				r = n("./src/reddit/models/Flair/index.ts"),
				s = n("./src/reddit/selectors/gold/powerups/index.ts"),
				i = n("./src/reddit/selectors/moderatorPermissions.ts"),
				a = n("./src/lib/initializeClient/installReducer.ts"),
				c = n("./src/reddit/reducers/features/userFlair/index.ts");
			Object(a.a)({
				features: {
					userFlair: c.a
				}
			});
			const d = (e, {
					subredditId: t
				}) => e.features.userFlair[t],
				l = (e, {
					subredditId: t
				}) => !e.features.userFlair[t] || e.features.userFlair[t].displaySettings.isEnabled,
				u = (e, {
					subredditId: t
				}) => e.features.userFlair[t] ? e.features.userFlair[t].displaySettings.position : r.b.Right,
				m = Object(o.a)((e, {
					subredditId: t
				}) => {
					const n = d(e, {
						subredditId: t
					});
					if (n && n.displaySettings && n.permissions) return {
						type: r.d.UserFlair,
						displaySettings: n.displaySettings,
						permissions: n.permissions
					}
				}),
				p = (e, {
					subredditId: t
				}) => {
					const n = l(e, {
							subredditId: t
						}),
						o = m(e, {
							subredditId: t
						}),
						r = d(e, {
							subredditId: t
						});
					if (!n || !o || !r) return !1;
					if (r.applied) return !0;
					const s = Object(i.g)(e, {
							subredditId: t
						}),
						{
							canUserChange: a
						} = o.permissions;
					return !!r.templateIds.find(e => {
						return !r.templates[e].modOnly || s
					}) && a
				},
				b = (e, {
					subredditId: t
				}) => {
					if (!t) return !1;
					const n = p(e, {
							subredditId: t
						}),
						o = Object(s.h)(e, {
							subredditId: t
						});
					return n || o
				}
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			}));
			var o = n("./src/lib/constants/index.ts");
			const r = e => !s(e) && !!e.user.prefs.subscriptionsPinned,
				s = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== o.Kb.MODERATION_PAGES),
				i = e => e.user.prefs.reduceAnimationsFromAwards
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
			e.exports = JSON.parse('{"id":"55e2b71b7c14"}')
		},
		"./src/redditGQL/operations/CancelPrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"fac88c91fec8"}')
		},
		"./src/redditGQL/operations/ChangePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"614dbb8a54d2"}')
		},
		"./src/redditGQL/operations/ChangePredictionVote.json": function(e) {
			e.exports = JSON.parse('{"id":"90c7b71fa93f"}')
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/CreatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"3fb10f0c4910"}')
		},
		"./src/redditGQL/operations/CreateScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"1e0a4bfe5ac9"}')
		},
		"./src/redditGQL/operations/EndPredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"309c4e7f3e89"}')
		},
		"./src/redditGQL/operations/GetPredictionChipPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"5ce83e513fa5"}')
		},
		"./src/redditGQL/operations/GetPredictionCreationAllowance.json": function(e) {
			e.exports = JSON.parse('{"id":"d9fb5ec5128f"}')
		},
		"./src/redditGQL/operations/GetPredictionToken.json": function(e) {
			e.exports = JSON.parse('{"id":"26b911e67a5f"}')
		},
		"./src/redditGQL/operations/GetTournaments.json": function(e) {
			e.exports = JSON.parse('{"id":"50d44a50f01c"}')
		},
		"./src/redditGQL/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/redditGQL/operations/ResolvePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"d742e3019cfe"}')
		},
		"./src/redditGQL/operations/SubredditScheduledPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"de72339b938a"}')
		},
		"./src/redditGQL/operations/SubredditTopPredictors.json": function(e) {
			e.exports = JSON.parse('{"id":"a9582ea601a1"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		},
		"./src/redditGQL/operations/UpdatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"eacbeec256c7"}')
		},
		"./src/redditGQL/operations/UpdateScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"f5276d63e133"}')
		},
		"./src/redditGQL/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"484780ada6a2"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostCreation.c1e033b07ecbcef09e56.js.map