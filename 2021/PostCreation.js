// https://www.redditstatic.com/desktop2x/PostCreation.d94f6194ee064307d373.js
// Retrieved at 11/3/2021, 2:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PostCreation", "ContributorRequestButton", "FrontpageSidebar"], {
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/FocusTrap/index.ts"),
				i = n("./src/lib/portal/index.tsx"),
				c = n("./src/reddit/actions/shortcuts/utils.ts"),
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
			const h = ({
				className: e,
				isVisible: t,
				...n
			}) => o.a.createElement("div", p({
				className: Object(r.a)(m.a.overlay, e, {
					[m.a.mIsVisible]: t
				})
			}, n));

			function b(e) {
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
						}), Object(l.b)(), Object(c.d)(), this.focusTrap && this.focusTrap.deactivate()
					}
					render() {
						const {
							props: t
						} = this, {
							className: n,
							ignoreDefaultFocus: s,
							onOverlayClick: a,
							overlayClassName: c,
							overlayCustomStyles: l,
							withOverlay: u,
							...p
						} = t, b = p;
						return o.a.createElement(i.a, {
							container: document.getElementById(d.b)
						}, o.a.createElement(h, {
							className: c,
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
						}, o.a.createElement(e, b))))
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
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/bignumber.js/bignumber.js");

			function o(e, t) {
				const n = new s.BigNumber(e),
					o = new s.BigNumber(t),
					r = new s.BigNumber(n.dividedBy(o)),
					a = new s.BigNumber("100").multipliedBy(r);
				return new s.BigNumber(a).toNumber()
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
				return s
			}));
			const s = "custom"
		},
		"./src/lib/forceHttps/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/lib/getShortenedLink.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/models/Media/index.ts"),
				o = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				r = n.n(o);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: n,
					domainOverride: o
				} = e;
				let a = "";
				if (n) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					a = o || Object(s.D)(e)
				} else a = Object(s.D)(e);
				const i = r.a.parse(a),
					c = i.path || "",
					d = c.length > 7 ? c.substring(0, 7) + "..." : c;
				return (i.hostname ? i.hostname.replace("www.", "") : "") + d
			}
		},
		"./src/lib/hooks/usePrevious.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js");

			function o(e) {
				const t = Object(s.useRef)();
				return Object(s.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/lib/hooks/useTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				o = n("./node_modules/react/index.js"),
				r = n("./node_modules/react-popper/lib/esm/usePopper.js");
			const a = Object(s.freeze)({
				modifiers: []
			});

			function i(e) {
				let t = "object" == typeof e ? e : a;
				return Array.isArray(t.modifiers) || (t = Object(s.assoc)(t, "modifiers", a.modifiers)), t
			}

			function c(e) {
				const [t, n] = Object(o.useState)(null), [a, c] = Object(o.useState)(null), [d, l] = Object(o.useState)(null), [u, m] = Object(o.useState)(!1), p = Object(o.useCallback)(async () => m(!0), []), h = Object(o.useCallback)(() => m(!1), []), b = Object(o.useCallback)(() => m(!u), [u]), f = Object(o.useMemo)(() => {
					const t = i(e);
					return d ? Object(s.updateIn)(t, ["modifiers"], e => Object(s.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: g,
					styles: x,
					update: C
				} = Object(r.a)(t, a, f);
				return Object(o.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: x.arrow,
						...g.arrow
					},
					hide: h,
					popperProps: {
						ref: c,
						style: x.popper,
						...g.popper
					},
					show: p,
					target: {
						element: t,
						ref: n
					},
					toggle: b,
					visible: u,
					update: C
				}), [l, g, c, h, p, x, t, n, b, u, C])
			}
		},
		"./src/lib/intersectionObserver/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			let s;
			const o = new Map,
				r = new Map;
			"undefined" != typeof window && (n("./node_modules/intersection-observer/intersection-observer.js"), s = new IntersectionObserver(e => {
				e.forEach(e => {
					const t = e.target,
						n = e.intersectionRatio > 0;
					if (n !== !!r.get(t)) {
						r.set(t, n);
						const s = o.get(t);
						if (s) {
							s(e, n && !!r.get(t))
						}
					}
				})
			}, {
				threshold: [.001]
			}));
			const a = (e, t) => {
					try {
						o.set(e, t), s && s.observe(e)
					} catch (n) {
						0
					}
				},
				i = e => {
					try {
						o.delete(e), s && s.unobserve(e)
					} catch (t) {
						0
					}
				}
		},
		"./src/lib/memoizeByReference/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/lodash/every.js"),
				o = n.n(s);

			function r(e) {
				let t = null,
					n = null;
				return (...s) => (null !== t && s.length === t.length && o()(s, (e, n) => e === t[n]) || (t = s, n = e(...s)), n)
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");
			const r = [o.nc, o.ob, o.A, o.P, o.jb, o.Qb],
				a = {
					[o.Qb]: e => s.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [s.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[o.jb]: e => s.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [s.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[o.P]: e => s.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [s.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[o.A]: e => s.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [s.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[o.ob]: e => s.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [s.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[o.nc]: e => s.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [s.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				i = {
					[o.Qb]: e => s.fbt._("{amount}s", [s.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[o.jb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[o.P]: e => s.fbt._("{amount}h", [s.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[o.A]: e => s.fbt._("{amount}d", [s.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[o.ob]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.nc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[o.ob]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.nc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, n = !1) {
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[o.nc]: "",
						[o.ob]: "",
						[o.A]: "",
						[o.P]: "",
						[o.jb]: "",
						[o.Qb]: ""
					};
				let u = d - c;
				if (u <= 0) return s.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const s of r) {
					const e = Math.floor(u / s);
					e && (l[s] = (t ? i : a)[s](e).toString()), u -= e * s
				}
				const m = r.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || n ? m : s.fbt._("{amount of time left} left", [s.fbt._param("amount of time left", m)], {
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
				return xe
			})), n.d(t, "g", (function() {
				return Ce
			})), n.d(t, "j", (function() {
				return ve
			})), n.d(t, "d", (function() {
				return _e
			})), n.d(t, "c", (function() {
				return we
			})), n.d(t, "i", (function() {
				return Se
			})), n.d(t, "h", (function() {
				return Ie
			})), n.d(t, "k", (function() {
				return Ne
			})), n.d(t, "r", (function() {
				return De
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
				h = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				f = n("./src/reddit/constants/adEvents.ts"),
				g = n("./src/reddit/constants/localStorage.ts"),
				x = n("./src/redditGQL/operations/CommentToxicity.json"),
				C = n("./src/lib/makeApiRequest/index.ts"),
				v = n("./src/lib/makeGqlRequest/index.ts"),
				E = n("./src/lib/omitHeaders/index.ts"),
				_ = n("./src/reddit/constants/headers.ts"),
				O = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				y = n("./src/reddit/helpers/genericServerError/index.ts"),
				k = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				w = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				S = n("./src/reddit/models/PostCreationForm/index.ts"),
				j = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				P = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const T = (e, t, n, s) => {
					let o, r;
					if (s === S.i.MARKDOWN) o = n.text, r = null;
					else {
						o = null;
						let e = null;
						n.rteState && (e = b.a.toRichTextJSON(n.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(v.a)(e, {
						...x,
						variables: {
							subredditName: t,
							markdown: o,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				I = async (e, t, n, s, r) => {
					const a = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (r === S.i.MARKDOWN) a.text = n.text;
					else {
						a.text = null;
						let e = null;
						n.rteState && (e = b.a.toRichTextJSON(n.rteState).document), a.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(C.a)(Object(E.a)(e, [_.a]), {
						method: o.ib.POST,
						endpoint: Object(O.a)(Object(j.a)(Object(P.a)(`${e.apiUrl}/api/comment.json`))),
						data: a
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(w.a)(e)
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
				};
			var N = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var D = n("./src/reddit/endpoints/post/index.tsx"),
				M = n("./src/reddit/endpoints/post/convert.ts"),
				R = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				L = n("./src/reddit/featureFlags/index.ts"),
				A = n("./src/reddit/helpers/correlationIdTracker.ts"),
				F = n("./src/reddit/helpers/dom/index.ts"),
				B = n("./src/reddit/helpers/localStorage/index.ts"),
				U = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				W = n("./src/reddit/models/Comment/index.ts"),
				V = n("./src/reddit/models/PostDraft/index.ts"),
				G = n("./src/reddit/models/RichTextJson/index.ts"),
				H = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				z = n("./src/reddit/models/Toast/index.ts"),
				K = n("./src/reddit/selectors/comments.ts"),
				q = n("./src/reddit/selectors/commentSelector.ts"),
				Q = n("./src/reddit/selectors/platform.ts"),
				Y = n("./src/reddit/selectors/posts.ts"),
				J = n("./src/reddit/selectors/user.ts"),
				Z = n("./src/reddit/actions/comment/index.ts"),
				X = n("./src/reddit/actions/comment/constants.ts");
			const $ = Object(r.a)(X.k),
				ee = ({
					hasFocus: e,
					draftKey: t
				}) => async (n, s) => {
					const o = s();
					if (!!o.features.comments.drafts[t])
						if (Object(J.M)(o) && e) {
							const s = $({
								hasFocus: e,
								draftKey: t
							});
							n(Object(i.f)(s))
						} else n($({
							hasFocus: e,
							draftKey: t
						}))
				}, te = Object(r.a)(X.H), ne = Object(r.a)(X.J), se = Object(r.a)(X.I), oe = Object(r.a)(X.G), re = async (e, t, n, s) => {
					const o = s.ok && s.body,
						r = o && o.comment && o.comment.id;
					await U.g(e, n, t, r)
				}, ae = "Toxicity_Warning__Modal", ie = (e, t, n, s, o, r) => async (a, i, {
					gqlContext: c
				}) => {
					const l = i(),
						u = Object(Q.e)(l);
					let m = "";
					if (u && (m = u.name), L.d.enableToxicityWarning(l)) {
						if (!(await T(c(), m, s, o))) return void a(Object(d.i)(ae))
					}
					a(de(e, t, n, s, o, r))
				}, ce = e => e.rteState ? b.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, de = (e, t, n, r, a, i, c) => async (u, b, {
					apiContext: g
				}) => {
					u(Object(d.g)(ae));
					const x = b(),
						C = x.features.comments.submit.pending[n];
					if (!x.user.account || C) return;
					u(te({
						draftKey: n,
						draft: r
					}));
					const v = x.user.account.displayText,
						E = r.commentMode;
					let _;
					if (c ? (_ = await Object(R.i)(g(), e, r, v), u(Object(m.a)({
							streamId: e,
							level: _.body.automuteLevel
						}))) : _ = await I(g(), e, r, v, E), _.ok) {
						let s;
						s = _.body, u(ne({
							...s,
							headCommentId: Object(K.w)(x, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const o = Object(Y.H)(b(), {
							postId: e
						});
						u(Object(l.z)(o, f.a.CommentSubmitted))
					} else {
						_.error && _.error.type === o.Ib && U.i(x, ce(r), e);
						const t = _.error && _.error.fields && _.error.fields[0] ? _.error.fields[0].msg : s.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u(oe({
							draftKey: n,
							error: _.error
						})), u(Object(h.f)({
							duration: h.a,
							kind: z.b.Error,
							text: t
						}))
					}
					re(b(), t, a, _).then(() => _.ok && a === S.i.RICH_TEXT ? Object(A.b)(A.a.CommentComposer) : void 0), i || Object(p.d)()
				}, le = e => async (t, n, {
					gqlContext: s
				}) => {
					const {
						parentCommentId: o,
						commentsPageKey: r,
						parentCommentDepth: a,
						draftKey: i,
						formData: c,
						editorMode: l
					} = e, u = n(), m = Object(Q.e)(u);
					let p = "";
					if (m && (p = m.name), L.d.enableToxicityWarning(u)) {
						if (!(await T(s(), p, c, l))) return void t(Object(d.i)(ae))
					}
					t(ue({
						commentsPageKey: r,
						draftKey: i,
						parentCommentDepth: a,
						parentCommentId: o,
						formData: c,
						editorMode: l
					}))
				}, ue = e => async (t, n, {
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
					t(Object(d.g)(ae));
					const m = n(),
						h = m.features.comments.submit.pending[c];
					if (!m.user.account || h) return;
					t(te({
						draftKey: c,
						draft: l
					}));
					const b = m.user.account.displayText,
						f = l.commentMode,
						g = await I(s(), r, l, b, f);
					if (g.ok) t(se({
						...g.body,
						parentCommentId: r,
						commentsPageKey: a,
						draftKey: c,
						depth: i + 1
					}));
					else {
						if (g.error && g.error.type === o.Ib) {
							const e = Object(q.b)(m, {
								commentId: r
							});
							if (!e) return;
							U.i(m, ce(l), e.postId, r)
						}
						t(oe({
							draftKey: c,
							error: g.error
						}))
					}
					re(n(), a, u, g), Object(p.d)()
				}, me = Object(r.a)(X.q), pe = Object(r.a)(X.p), he = Object(r.a)(X.l), be = (Object(r.a)(X.g), Object(r.a)(X.m)), fe = (Object(r.a)(X.t), (e, t, n) => async (o, r, {
					apiContext: a
				}) => {
					const i = e === S.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(G.G)(t)) o(be({
						editorMode: e,
						draftKey: n,
						content: i ? G.i : ""
					})), o(Object(u.c)(e));
					else {
						o(Object(u.b)(n));
						const r = await Object(M.a)(a(), e, i ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							o(Object(u.a)(n)), o(be({
								editorMode: e,
								draftKey: n,
								content: t
							})), o(Object(u.c)(e))
						} else o(Object(u.a)(n)), o(Object(h.f)({
							duration: h.a,
							kind: z.b.Error,
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
						l = Object(a.a)(V.c.replyToComment, t);
					if (!Object(J.K)(o())) return s(Object(c.k)()), void s(Object(d.k)({
						actionSource: d.a.Reply,
						redirectUrl: Object(K.m)(o(), {
							commentId: t
						})
					}));
					const u = r.features.comments.replyFormOpen[e],
						m = u && u[t];
					if ((m || u && n) && (Object.keys(u).forEach(t => u[t] && s(pe({
							parentCommentId: t,
							commentsPageKey: e
						}))), m)) return;
					let p = "",
						h = null;
					const b = r.user.prefs.commentMode,
						f = Object(F.d)();
					if (f) {
						const e = f.filter(e => !!e && 10 !== e.charCodeAt(0));
						if (b === S.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
						else {
							const t = e.map(e => H.s(e, null)).map(e => H.l([e])),
								n = H.s("", null),
								s = H.l([n]);
							h = {
								document: [H.c(t), s]
							}
						}
					}
					const g = r.features.comments.drafts[l];
					let x;
					if (x = f ? {
							commentMode: b,
							draftType: V.c.replyToComment,
							rtJson: h,
							text: `${p}\n`
						} : g || {
							commentMode: b,
							draftType: V.c.replyToComment,
							rtJson: h,
							text: ""
						}, Object(J.M)(r)) {
						const n = me({
							parentCommentId: t,
							commentsPageKey: e,
							draftKey: l,
							formData: x
						});
						s(Object(i.f)(n))
					} else s(me({
						parentCommentId: t,
						commentsPageKey: e,
						draftKey: l,
						formData: x
					}))
				}, xe = e => async t => {
					t(Object(Z.p)(e)), t(_e(e))
				}, Ce = ({
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
				}, ve = (e, t) => n => n(he({
					draftKey: e,
					formData: t
				})), Ee = Object(r.a)(X.s), _e = ({
					commentId: e,
					commentMode: t,
					commentsPageKey: n,
					draftKey: s,
					text: o
				}) => async (r, a) => {
					const i = a();
					i.user.account && (U.d(i), r(Ee({
						commentId: e,
						commentsPageKey: n,
						draftKey: s,
						formData: {
							text: o,
							commentMode: t,
							rteState: null,
							draftType: V.c.edit,
							hasFocus: !0
						}
					})))
				}, Oe = Object(r.a)(X.C), ye = Object(r.a)(X.B), ke = Object(r.a)(X.D), we = Object(r.a)(X.h), Se = ({
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
					n(Oe({
						draftKey: s
					})), U.e(c);
					const d = c.user.account.displayText || "",
						l = r.commentMode,
						u = await (async (e, t, n, s, r, a) => {
							const i = {
								api_type: "json",
								return_rtjson: !0,
								thing_id: t
							};
							if (a === S.i.MARKDOWN) i.text = s.text;
							else {
								i.text = null;
								let e = null;
								s.rteState && (e = b.a.toRichTextJSON(s.rteState).document), i.richtext_json = JSON.stringify({
									document: e
								})
							}
							return Object(C.a)(Object(E.a)(e, [_.a]), {
								endpoint: Object(O.a)(Object(P.a)(Object(j.a)(`${e.apiUrl}/api/editusertext`))),
								method: o.ib.POST,
								data: i
							}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
								...e,
								ok: !1,
								error: Object(w.a)(e)
							} : {
								...e,
								body: {
									comment: Object(k.a)(e.body.json.data.things[0].data, r)
								}
							} : {
								...e,
								body: {
									comment: Object(k.a)(e.body, r)
								}
							} : {
								...e,
								error: e.error || Object(y.a)()
							})
						})(i(), e, 0, r, d, l);
					if (u.ok) {
						const o = u.body;
						n(ke({
							commentId: e,
							commentsPageKey: t,
							draftKey: s
						})), n(Object(Z.i)({
							[e]: {
								...o.comment
							}
						}))
					} else n(ye({
						draftKey: s,
						error: u.error
					}))
				}, je = Object(r.a)(X.z), Pe = Object(r.a)(X.y), Te = Object(r.a)(X.A), Ie = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const a = s();
					n(je({
						id: e
					})), U.b(e, a);
					const i = await ((e, t) => Object(C.a)(Object(E.a)(e, [_.a]), {
						endpoint: Object(O.a)(`${e.apiUrl}/api/del`),
						method: o.ib.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(w.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(y.a)()
					}))(r(), e);
					i.ok ? n(Te({
						id: e,
						postId: t
					})) : n(Pe({
						id: e,
						error: i.error
					}))
				}, Ne = e => async (t, n, {
					apiContext: s
				}) => {
					const o = !n().features.comments.models[e].sendReplies;
					t(Object(Z.i)({
						[e]: {
							sendReplies: o
						}
					})), (await Object(D.q)(s(), e, o)).ok || t(Object(Z.i)({
						[e]: {
							sendReplies: !o
						}
					}))
				}, De = (e, t) => async (n, o, {
					gqlContext: r
				}) => {
					var a, i, c, d, l, u;
					n(Object(Z.c)());
					const m = e => Object(h.f)(Object(h.e)(e, z.b.Error));
					if (((null === (i = null === (a = o().pages) || void 0 === a ? void 0 : a.comments) || void 0 === i ? void 0 : i.followed) || []).length === g.a) n(m(s.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const a = t === W.a.FOLLOWED,
							i = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(Z.n)(i)), (await ((e, t) => Object(v.a)(e, {
								...N,
								variables: {
									input: t
								}
							}))(r(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(B.sb)(null !== (l = null === (d = null === (c = o().pages) || void 0 === c ? void 0 : c.comments) || void 0 === d ? void 0 : d.followed) && void 0 !== l ? l : [], null === (u = o().user.account) || void 0 === u ? void 0 : u.id);
							const e = a ? s.fbt._("Followed! You’ll receive updates when there’s new activity", null, {
								hk: "1Dp5UH"
							}) : s.fbt._("Unfollowed, You’ll no longer receive updates on this comment", null, {
								hk: "1L9sav"
							});
							n(Object(h.f)({
								kind: z.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(Z.n)(i)), n(m(s.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				}
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return j
			})), n.d(t, "m", (function() {
				return P
			})), n.d(t, "e", (function() {
				return N
			})), n.d(t, "h", (function() {
				return D
			})), n.d(t, "l", (function() {
				return A
			})), n.d(t, "q", (function() {
				return F
			})), n.d(t, "j", (function() {
				return B
			})), n.d(t, "g", (function() {
				return U
			})), n.d(t, "f", (function() {
				return W
			})), n.d(t, "o", (function() {
				return H
			})), n.d(t, "p", (function() {
				return z
			})), n.d(t, "d", (function() {
				return K
			})), n.d(t, "a", (function() {
				return Q
			})), n.d(t, "b", (function() {
				return Y
			})), n.d(t, "n", (function() {
				return J
			})), n.d(t, "c", (function() {
				return Z
			})), n.d(t, "k", (function() {
				return X
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/telemetry/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/economics/helpers/async.ts"),
				c = n("./src/reddit/actions/economics/powerups/flairs/async.ts"),
				d = n("./src/reddit/actions/login.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/shortcuts/utils.ts"),
				m = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/actions/vote.ts"),
				h = n("./src/reddit/endpoints/comment/index.tsx"),
				b = n("./src/reddit/helpers/commentList/index.ts"),
				f = n("./src/reddit/helpers/trackers/comment.ts"),
				g = n("./src/reddit/models/Comment/index.ts"),
				x = n("./src/reddit/models/Post/index.ts"),
				C = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/models/Vote/index.ts"),
				E = n("./src/reddit/selectors/comments.ts"),
				_ = n("./src/reddit/selectors/commentSelector.ts"),
				O = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				y = n("./src/reddit/selectors/moderatingComments.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				w = n("./src/reddit/actions/comment/constants.ts");
			const S = {},
				j = Object(a.a)(w.o),
				P = e => async (t, n, {
					apiContext: s
				}) => {
					if (!Object(k.K)(n())) return t(Object(d.k)()), void t(Object(l.k)({
						actionSource: l.a.Save,
						redirectUrl: Object(E.m)(n(), {
							commentId: e
						})
					}));
					const r = n().features.comments.models[e];
					if (!r) return;
					const a = r.isSaved ? h.k : h.g;
					if (t(j({
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
						t(Object(m.f)({
							text: n,
							kind: C.b.Undo,
							buttonText: s,
							buttonAction: P(e)
						}))
					} else t(j({
						[e]: {
							isSaved: r.isSaved
						}
					}))
				}, T = e => `viewing-comment-${e}`, I = s.a.telemetry.commentConsumedThreshold, N = e => async (t, n) => {
					const o = n();
					if (!Object(_.b)(o, {
							commentId: e
						}) || Math.random() > s.a.telemetry.commentSampleRate) return;
					f.c({
						state: o,
						commentId: e
					}), r.c.start(T(e));
					const a = setTimeout(() => f.a({
						state: o,
						commentId: e
					}), I);
					S[e] = a
				}, D = (e, t) => async (n, s) => {
					const o = s(),
						a = T(e);
					if (Object(_.b)(o, {
							commentId: e
						}) && r.c.has(a)) {
						const n = r.c.end(a);
						!t && n < I && (clearTimeout(S[e]), delete S[e])
					}
				}, M = Object(a.a)(w.x), R = Object(a.a)(w.w), L = Object(a.a)(w.v), A = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const r = s(),
						a = r.moreComments.models[t],
						d = r.platform.currentPage,
						l = d && d.routeMatch,
						u = l && l.match,
						{
							partialPostId: m
						} = u ? u.params : null;
					if (!m) return;
					const p = Object(x.t)(m);
					n(M({
						moreCommentsId: a.id
					}));
					const f = await Object(h.e)(o(), p, {
						token: a.token
					}, Object(O.a)(r));
					if (f.ok) {
						const t = f.body,
							s = Object(b.a)(t, p, r);
						n(R({
							key: e,
							moreCommentsItem: a,
							shouldCollapse: s,
							...t
						}));
						const o = r.posts.models[p];
						let d;
						o && "subreddit" === o.belongsTo.type && t.comments && (d = o.belongsTo.id, await n(Object(i.a)({
							commentIds: Object.keys(f.body.comments),
							postIds: [o.id],
							skip: ["communityDetails", "subscription"],
							subredditId: d
						})));
						const l = f.body.comments;
						await n(Object(c.b)(d, l))
					} else n(L({
						moreCommentsItem: a,
						...f.error
					}))
				}, F = Object(p.a)(b.b, v.a.upvoted), B = Object(p.a)(b.b, v.a.downvoted), U = Object(a.a)(w.j), W = Object(a.a)(w.i), V = Object(a.a)(w.e), G = Object(a.a)(w.f), H = (Object(a.a)(w.c), Object(a.a)(w.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: n
				}) => async (s, o) => {
					const r = o(),
						a = Object(g.i)(e),
						i = Object(E.n)(r, {
							commentLink: a,
							commentsPageKey: t
						}),
						c = Object(y.b)(r, {
							commentId: e,
							commentsPageKey: t
						}),
						d = i.depth;
					s(V({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: c
					})), c || 0 !== d || n(e, !0), Object(u.d)()
				}), z = ({
					commentId: e,
					commentsPageKey: t
				}) => async n => {
					n(G({
						commentId: e,
						commentsPageKey: t
					}))
				}, K = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: n,
					scrollToAndRemeasure: s
				}) => async (o, r) => {
					const a = r(),
						i = Object(b.e)(t, e, n, a),
						c = Object(y.b)(a, {
							commentId: e.id,
							commentsPageKey: t
						});
					o(V({
						commentId: i,
						commentsPageKey: t,
						isCollapsed: c
					})), 0 === n && s(i, !0), Object(u.d)()
				}, q = Object(a.a)(w.r), Q = e => t => t(q({
					draftKey: e
				})), Y = Object(a.a)(w.a), J = Object(a.a)(w.E), Z = Object(a.a)(w.b), X = Object(a.a)(w.u)
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				o = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			}));
			const s = "ECONOMICS__ME__ME_DATA_SUCCESS",
				o = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				r = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
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
								method: s.ib.GET
							});
						n.ok && n.body && e(u(n.body))
					}
				}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			}));
			const s = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			}));
			const s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
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
				return h
			}));
			var s = n("./src/lib/loadableAction/index.ts");
			const o = e => () => n.e("CommunityAwards").then(n.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				r = Object(s.a)(o("awardSheetInfoRequested")),
				a = Object(s.a)(o("manageableAwardsRequested")),
				i = Object(s.a)(o("createCommunityAward")),
				c = Object(s.a)(o("createGlobalAward")),
				d = Object(s.a)(o("createModAward")),
				l = Object(s.a)(o("createAwardFailed")),
				u = Object(s.a)(o("createAwardSuccessful")),
				m = Object(s.a)(o("removeCommunityAward")),
				p = Object(s.a)(o("disableAwardinCommunity")),
				h = Object(s.a)(o("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return f
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "f", (function() {
				return y
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/postParentMessage/index.ts"),
				r = n("./src/reddit/helpers/isPost.ts"),
				a = n("./src/reddit/constants/modals.ts"),
				i = n("./src/reddit/selectors/gild.ts"),
				c = n("./src/reddit/helpers/correlationIdTracker.ts"),
				d = n("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/selectors/communityAwards.ts"),
				m = n("./src/reddit/selectors/posts.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/telemetry/index.ts"),
				b = n("./src/reddit/actions/gold/constants.ts");
			const f = Object(s.a)(b.L),
				g = Object(s.a)(b.f),
				x = () => async (e, t) => {
					const s = t();
					e(g()), Object(c.b)(c.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: o
					} = await n.e("givePremiumTrackers").then(n.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(h.a)(o()(s))
				}, C = Object(s.a)(b.K), v = ({
					awardId: e,
					correlationId: t,
					thingId: n
				}) => async (s, o) => {
					const i = o(),
						c = e ? Object(u.a)(i, e) : void 0;
					s(C({
						award: c && c.isEnabled ? c : void 0,
						thingId: n,
						correlationId: t
					})), s(Object(l.h)(a.a.GOLD_GILD_MODAL));
					const h = Object(p.G)(i, {
						thingId: n
					});
					let b = null;
					if (h) b = h.id;
					else if (Object(r.a)(n)) {
						const e = Object(m.H)(i, {
							postId: n
						});
						e && (b = e.belongsTo.id)
					}
					b && Object(d.a)(b, n)
				}, E = Object(s.a)(b.e), _ = Object(s.a)(b.J), O = () => async (e, t) => {
					const s = t(),
						r = Object(i.d)(s);
					if (Object(i.g)(s)) {
						const e = "close.gild";
						Object(o.a)({
							type: e
						})
					}
					e(E()), e(Object(l.g)(a.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(h.a)(d(r)(s)), Object(c.b)(c.a.GildingFlow)
				}, y = () => async () => {
					Object(o.a)({
						type: "login.gild"
					})
				}
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
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
				return h
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "p", (function() {
				return x
			})), n.d(t, "q", (function() {
				return C
			})), n.d(t, "r", (function() {
				return v
			})), n.d(t, "s", (function() {
				return E
			})), n.d(t, "t", (function() {
				return _
			})), n.d(t, "u", (function() {
				return O
			})), n.d(t, "v", (function() {
				return y
			})), n.d(t, "w", (function() {
				return k
			})), n.d(t, "x", (function() {
				return w
			}));
			const s = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				o = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				r = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				a = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				i = "POLL_VOTE_SUCCESS",
				c = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				d = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				l = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				u = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				m = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				p = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				h = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				b = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				f = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				g = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				x = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				C = "GOVERNANCE__TRANSFER_FAILURE",
				v = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				E = "GOVERNANCE__TRANSFER_PENDING",
				_ = "GOVERNANCE__TRANSFER_SUCCESS",
				O = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				y = "GOVERNANCE__WALLETS_FETCH_PENDING",
				k = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				w = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				r = n("./src/reddit/models/Toast/index.ts");

			function a(e, t) {
				e(Object(s.f)({
					duration: 5e3,
					kind: r.b.Error,
					text: Object(o.a)(t)
				}))
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "d", (function() {
				return R
			})), n.d(t, "e", (function() {
				return L
			})), n.d(t, "h", (function() {
				return A
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/prettyPrintNumber/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/config.ts"),
				l = n("./src/lib/makeGqlRequest/index.ts"),
				u = n("./src/reddit/models/Poll/index.ts"),
				m = n("./src/redditGQL/operations/PollVote.json"),
				p = n("./src/reddit/endpoints/governance/requester.ts");
			var h = n("./src/reddit/endpoints/governance/wallet.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/models/Vote/index.ts"),
				g = n("./src/reddit/selectors/crypto/points.ts"),
				x = n("./src/reddit/actions/governance/constants.ts"),
				C = n("./src/reddit/actions/governance/errorToast.ts");
			const v = Object(o.a)(x.b),
				E = Object(o.a)(x.c),
				_ = Object(o.a)(x.e),
				O = (Object(o.a)(x.f), Object(o.a)(x.g), Object(o.a)(x.h)),
				y = Object(o.a)(x.i),
				k = Object(o.a)(x.j),
				w = Object(o.a)(x.k),
				S = Object(o.a)(x.q),
				j = Object(o.a)(x.r),
				P = Object(o.a)(x.s),
				T = Object(o.a)(x.t),
				I = Object(o.a)(x.u),
				N = Object(o.a)(x.v),
				D = Object(o.a)(x.w),
				M = Object(o.a)(x.x),
				R = (e, t) => async (n, s, {
					apiContext: o,
					gqlContext: r
				}) => {
					let a, c = s().polls.models[e];
					if (n(k({
							pollId: e
						})), (a = c.type === u.a.GA ? await ((e, t, n) => Object(l.a)(e, {
								...m,
								variables: {
									input: {
										postId: t,
										optionId: n
									}
								}
							}))(r(), e, t) : await
							function(e, t, n, s) {
								return Object(p.a)(e, {
									method: "put",
									endpoint: `${d.a.metaUrl}/polls/${t}/${n}/votes/me/${s}`
								})
							}(o(), c.subredditId, e, t)).ok) {
						if (c.type === u.a.GA) {
							const {
								options: e
							} = a.body.data.updatePostPollVoteState.poll;
							n(_({
								pollId: c.id,
								optionId: t,
								options: e
							}))
						} else n(w(a.body));
						const o = s();
						if ((c = o.polls.models[e]) && Object(u.d)(c)) {
							const {
								postId: e
							} = c, t = o.posts.models[e];
							t && t.voteState === f.a.notVoted && n(Object(i.db)(e))
						}
					} else n(y({
						pollId: e,
						error: a.error || a.errors[0].message
					})), Object(C.a)(n, a.error || a.errors[0].messsage)
				}, L = (e, t) => async (n, o, {
					apiContext: i
				}) => {
					var l;
					n(P());
					const u = o().transfers.communityPoints.contentId || void 0,
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
					}(i(), {
						...e,
						contentId: u
					});
					m.ok ? (n(T({
						...m.body,
						subredditId: e.subredditId
					})), n(Object(c.f)({
						kind: b.b.SuccessCommunity,
						text: s.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [s.fbt._param("amount", Object(r.a)(e.amount)), s.fbt._param("tokenName", (null === (l = Object(g.b)(o(), e.subredditId)) || void 0 === l ? void 0 : l.name) || ""), s.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(a.f)())) : (n(S({
						error: m.error
					})), Object(C.a)(n, m.error))
				}, A = e => async (t, n, {
					apiContext: s
				}) => {
					t(N());
					const o = await Object(h.a)(s(), e);
					o.ok ? t(D(o.body)) : t(I({
						error: o.error
					}))
				}
		},
		"./src/reddit/actions/grantUserFlair/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return s
			})), n.d(t, "g", (function() {
				return o
			})), n.d(t, "f", (function() {
				return r
			})), n.d(t, "l", (function() {
				return a
			})), n.d(t, "k", (function() {
				return i
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
				return h
			}));
			const s = "SUBREDDIT__FLAIRED_USERS_PENDING",
				o = "SUBREDDIT__FLAIRED_USERS_LOADED",
				r = "SUBREDDIT__FLAIRED_USERS_FAILED",
				a = "SUBREDDIT__FLAIRED_USERS_SEARCH_PENDING",
				i = "SUBREDDIT__FLAIRED_USERS_SEARCH_LOADED",
				c = "SUBREDDIT__FLAIRED_USERS_SEARCH_FAILED",
				d = "SUBREDDIT__FLAIRED_USERS_OWNFLAIR_CHANGED",
				l = "SUBREDDIT__FLAIRED_USERS_AUTHORFLAIR_ADDED",
				u = "SUBREDDIT__FLAIRED_USERS_AUTHORFLAIR_CHANGED",
				m = "SUBREDDIT__FLAIRED_USERS_DELETE_PENDING",
				p = "SUBREDDIT__FLAIRED_USERS_DELETE_COMPLETED",
				h = "SUBREDDIT__FLAIRED_USERS_DELETE_FAILED"
		},
		"./src/reddit/actions/polls.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const o = "POLLS__POLL_CREATION_UPDATED",
				r = Object(s.a)(o)
		},
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "g", (function() {
				return i
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
				return h
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "j", (function() {
				return x
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "p", (function() {
				return v
			})), n.d(t, "q", (function() {
				return E
			})), n.d(t, "o", (function() {
				return _
			}));
			const s = "CREATE_COLLECTION_PENDING",
				o = "CREATE_COLLECTION_SUCCESS",
				r = "CREATE_COLLECTION_FAILED",
				a = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				i = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				c = "ADD_POST_TO_COLLECTION_SUCCESS",
				d = "UPDATE_POST_WITH_COLLECTION_ID",
				l = "DELETE_COLLECTION_SUCCESS",
				u = "UPDATE_COLLECTION_PENDING",
				m = "UPDATE_COLLECTION_SUCCESS",
				p = "UPDATE_COLLECTION_FAILED",
				h = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				b = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				f = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				g = "REORDER_COLLECTION_PENDING",
				x = "REORDER_COLLECTION_SUCCESS",
				C = "REORDER_COLLECTION_FAILED",
				v = "UPDATE_COLLECTION_LAYOUT_PENDING",
				E = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				_ = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postCollection/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return D
			})), n.d(t, "e", (function() {
				return R
			})), n.d(t, "g", (function() {
				return A
			})), n.d(t, "a", (function() {
				return U
			})), n.d(t, "c", (function() {
				return V
			})), n.d(t, "h", (function() {
				return K
			})), n.d(t, "f", (function() {
				return J
			})), n.d(t, "d", (function() {
				return se
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/lib/filterQueryParams/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/postCollection/constants.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/constants/history.ts"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/makeApiRequest/index.ts"),
				m = n("./src/lib/omitHeaders/index.ts"),
				p = n("./src/reddit/constants/headers.ts");
			var h = (e, t, n) => Object(u.a)(Object(m.a)(e, [p.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/add_post_to_collection.json`,
				method: l.ib.POST,
				data: {
					collection_id: t,
					link_fullname: n
				}
			});
			var b = (e, t, n) => Object(u.a)(Object(m.a)(e, [p.a]), {
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
			var x = (e, t) => Object(u.a)(Object(m.a)(e, [p.a]), {
				endpoint: `${g.a.gatewayUrl}/desktopapi/v1/subreddit_collections/${t}`,
				method: l.ib.GET
			});
			var C = (e, t, n) => Object(u.a)(Object(m.a)(e, [p.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/remove_post_in_collection.json`,
				method: l.ib.POST,
				data: {
					collection_id: t,
					link_fullname: n
				}
			});
			var v = (e, t, n) => Object(u.a)(Object(m.a)(e, [p.a]), {
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
			var _ = (e, t, n) => Object(u.a)(Object(m.a)(e, [p.a]), {
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
				w = n("./src/reddit/models/Toast/index.ts"),
				S = n("./src/reddit/selectors/postCollection.ts"),
				j = n("./src/reddit/selectors/posts.ts"),
				P = n("./src/reddit/selectors/subreddit.ts");
			const T = Object(a.a)(i.c),
				I = Object(a.a)(i.b),
				N = Object(a.a)(i.d),
				D = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					n(T());
					const r = await b(o(), e, t);
					let a;
					if (r.ok) {
						const e = s().meta,
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
							}))(r.body);
						n(N({
							collection: t,
							meta: e
						})), a = t
					} else {
						const e = r.error;
						n(I(e))
					}
					return a
				}, M = Object(a.a)(i.f), R = e => async (t, n, {
					apiContext: o
				}) => {
					const r = n().postCollection.subredditToIds || {};
					if (Object.keys(r).length > 0) return;
					const a = await x(o(), e);
					a.ok ? t(M(a.body)) : t(Object(c.f)({
						kind: w.b.Error,
						text: s.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, L = Object(a.a)(i.g), A = (e, t, n) => async (o, r, {
					apiContext: a
				}) => {
					if ((await C(a(), e, t)).ok) {
						const a = r(),
							i = Object(j.H)(a, {
								postId: t
							}),
							d = i && i.title || "",
							l = Object(S.q)(a, {
								collectionId: e
							}),
							u = (l && l.postIds && l.postIds.indexOf(t) || -1) - 1;
						if (o(L({
								collectionId: e,
								postId: t
							})), n && u >= 0) {
							const t = r(),
								n = Object(S.q)(t, {
									collectionId: e
								}),
								s = n && n.postIds && n.postIds[u] || "",
								a = Object(j.H)(t, {
									postId: s
								});
							a && a.permalink && o(Object(y.a)(a.permalink))
						}
						o(Object(c.f)({
							kind: w.b.SuccessMod,
							text: s.fbt._("Following post removed from collection successfully: {postTitle}", [s.fbt._param("postTitle", d)], {
								hk: "8e1lV"
							}),
							buttonText: s.fbt._("UNDO", null, {
								hk: "3KPLib"
							}),
							buttonAction: U(e, t)
						}))
					} else o(Object(c.f)({
						kind: w.b.Error,
						text: s.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, F = Object(a.a)(i.a), B = Object(a.a)(i.t), U = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const a = o();
					if ((await h(r(), e, t)).ok) {
						n(F({
							collectionId: e,
							postId: t
						})), n(B({
							collectionId: e,
							postId: t
						}));
						const o = Object(j.H)(a, {
								postId: t
							}),
							r = Object(S.q)(a, {
								collectionId: e
							}),
							i = r && r.title || "";
						n(Object(c.f)({
							kind: w.b.SuccessMod,
							text: s.fbt._("Success! You added a post to the collection: {title}", [s.fbt._param("title", i)], {
								hk: "3KNJWi"
							}),
							buttonText: s.fbt._("VIEW", null, {
								hk: "1SSkgL"
							}),
							buttonAction: Object(y.a)(o.permalink)
						}))
					} else n(Object(c.f)({
						kind: w.b.Error,
						text: s.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, W = Object(a.a)(i.e), V = (e, t) => async (n, a, {
					apiContext: i
				}) => {
					const d = a();
					if ((await f(i(), e)).ok) {
						const {
							url: a
						} = d.platform.currentPage, i = Object(S.q)(d, {
							collectionId: e
						}), l = i && i.title || "", u = i && i.subredditId, m = u ? Object(P.c)(d, u) : "/";
						n(W({
							collectionId: e,
							collection: i
						})), n(t ? Object(o.c)(Object(r.a)(a, ["collection"])) : Object(o.b)(m)), n(Object(c.f)({
							kind: w.b.SuccessMod,
							text: s.fbt._("Collection deleted successfully: {title}", [s.fbt._param("title", l)], {
								hk: "4tcOKB"
							})
						}))
					} else n(Object(c.f)({
						kind: w.b.Error,
						text: s.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, G = Object(a.a)(i.r), H = Object(a.a)(i.n), z = Object(a.a)(i.s), K = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					n(G());
					const a = await v(r(), e, t);
					let i = !1;
					if (a.ok) n(z({
						collectionId: e,
						newTitle: t
					})), n(Object(c.f)({
						kind: w.b.SuccessMod,
						text: s.fbt._("Collection title updated successfully", null, {
							hk: "2hKzKl"
						})
					})), i = !0;
					else {
						const e = a.error;
						n(H(e)), n(Object(c.f)({
							kind: w.b.Error,
							text: s.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))
					}
					return i
				}, q = Object(a.a)(i.l), Q = Object(a.a)(i.m), Y = Object(a.a)(i.k), J = e => async (t, n) => {
					const s = n().platform.currentPage.locationState;
					t(!(!s || !s[d.b.IsOverlay]) ? Object(y.a)(e.permalink) : Object(o.b)(Object(k.b)(e.permalink)))
				}, Z = Object(a.a)(i.i), X = Object(a.a)(i.j), $ = Object(a.a)(i.h), ee = Object(a.a)(i.p), te = Object(a.a)(i.o), ne = Object(a.a)(i.q), se = e => async t => {
					const n = [],
						{
							collectionId: o,
							description: r,
							displayLayout: a,
							postIds: i,
							title: d
						} = e;
					i && n.push(t(((e, t) => async (n, o, {
						apiContext: r
					}) => {
						n(Z());
						const a = await E(r(), e, t);
						let i = !1;
						return a.ok ? (n(X({
							collectionId: e,
							postIds: t
						})), n(Object(c.f)({
							kind: w.b.SuccessMod,
							text: s.fbt._("Collection order updated successfully", null, {
								hk: "4ccHEL"
							})
						})), i = !0) : (n($({
							error: a.error
						})), n(Object(c.f)({
							kind: w.b.Error,
							text: s.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))), i
					})(o, i))), d && n.push(t(K(o, d))), void 0 !== r && n.push(t(((e, t) => async (n, o, {
						apiContext: r
					}) => {
						n(q());
						const a = await _(r(), e, t);
						let i = !1;
						if (a.ok) n(Q({
							collectionId: e,
							newDescription: t
						})), n(Object(c.f)({
							kind: w.b.SuccessMod,
							text: s.fbt._("Collection description updated successfully", null, {
								hk: "1rIDCC"
							})
						})), i = !0;
						else {
							const e = a.error;
							n(Y(e)), n(Object(c.f)({
								kind: w.b.Error,
								text: s.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return i
					})(o, r))), a && n.push(t(((e, t) => async (n, o, {
						apiContext: r
					}) => {
						n(ee());
						const a = await O(r(), e, t);
						let i = !1;
						if (a.ok) n(ne({
							collectionId: e,
							newLayout: t
						})), n(Object(c.f)({
							kind: w.b.SuccessMod,
							text: s.fbt._("Collection layout updated successfully", null, {
								hk: "1Rs19j"
							})
						})), i = !0;
						else {
							const e = a.error;
							n(te(e)), n(Object(c.f)({
								kind: w.b.Error,
								text: s.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return i
					})(o, a)));
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
				return h
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "c", (function() {
				return g
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
			const p = Object(o.a)(m.G),
				h = Object(o.a)(m.p),
				b = Object(o.a)(m.Q),
				f = (e, t, n) => async (o, i, {
					apiContext: f
				}) => {
					c.j(i(), t);
					const x = t === d.i.MARKDOWN,
						C = t === d.i.RICH_TEXT,
						v = m.k;
					if (x && Object(l.G)(n)) return o(b({
						editorKey: e,
						editorMode: d.i.MARKDOWN,
						content: ""
					})), void o(g(t));
					if (C && !n) return o(b({
						editorKey: e,
						editorMode: d.i.RICH_TEXT,
						content: l.i
					})), void o(g(t));
					o(p(v));
					const E = await Object(a.a)(f(), t, x ? JSON.stringify(n) : n);
					E.ok ? (o(h(v)), o(b({
						editorKey: e,
						editorMode: t,
						content: E.body.output
					})), o(g(t))) : (o(h(v)), o(Object(r.f)({
						duration: r.a,
						kind: u.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, g = e => async (t, n) => {
					const o = Object(i.l)();
					if (o >= 3) return;
					const a = n().user.prefs.useMarkdown ? d.i.MARKDOWN : d.i.RICH_TEXT;
					if (e === a) return;
					const c = e === d.i.MARKDOWN ? s.fbt._("You can set Markdown as the default editor mode in the settings", null, {
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
					})), Object(i.pb)(o + 1)
				}
		},
		"./src/reddit/actions/postCreation/mediaUpload.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return M
			})), n.d(t, "b", (function() {
				return L
			})), n.d(t, "a", (function() {
				return A
			})), n.d(t, "c", (function() {
				return B
			})), n.d(t, "e", (function() {
				return U
			})), n.d(t, "d", (function() {
				return W
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./node_modules/uuid/v4.js"),
				a = n.n(r),
				i = n("./src/lib/formatApiError/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/actions/upload.ts"),
				u = n("./src/reddit/actions/wrappedReddit/constants.ts");
			n("./src/lib/makeGqlRequest/index.ts"), n("./src/redditGQL/operations/PersonalizedYearInReview.json");
			Object(c.a)(u.d), Object(c.a)(u.c), Object(c.a)(u.b), Object(c.a)(u.e), Object(c.a)(u.a);
			var m = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				h = n("./src/lib/omitHeaders/index.ts"),
				b = n("./src/reddit/constants/headers.ts");
			var f = n("./src/reddit/helpers/correlationIdTracker.ts"),
				g = n("./src/reddit/helpers/imagePreview/index.ts"),
				x = n("./src/reddit/helpers/media/index.ts"),
				C = n("./src/reddit/models/Upload/index.ts"),
				v = n("./src/reddit/selectors/telemetry.ts"),
				E = n("./src/telemetry/index.ts");
			const _ = e => ({
				...v.defaults(e),
				screen: v.screen(e),
				profile: v.profile(e),
				subreddit: v.subreddit(e)
			});
			var O = n("./src/reddit/helpers/trackers/postComposer.ts"),
				y = n("./src/reddit/models/Gold/Powerups/index.ts"),
				k = n("./src/reddit/models/PostCreationForm/index.ts"),
				w = n("./src/reddit/models/Toast/index.ts"),
				S = n("./src/reddit/selectors/gold/powerups/index.ts"),
				j = n("./src/reddit/selectors/postCreations.ts"),
				P = n("./src/reddit/actions/postCreation/constants.ts"),
				T = n("./src/reddit/actions/postCreation/general.ts");
			const I = Object(c.a)(P.u),
				N = Object(c.a)(P.v),
				D = Object(c.a)(P.t),
				M = e => async (t, n) => {
					t(I());
					const s = e.map(({
						url: e,
						uploadKey: n
					}) => {
						const s = Object(x.a)(Object(x.c)(e), "poster.png");
						return t(F(s, n))
					});
					await Promise.all(s);
					const o = n().uploads,
						r = e.map(({
							uploadKey: e
						}) => o[e]).find(e => e.status !== C.a.SUCCESS);
					t(r ? D(r.error) : N())
				}, R = (e, t) => ({
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
			const L = "RTE",
				A = "GALLERY",
				F = (e, t, n, r) => async (a, i, {
					apiContext: c
				}) => {
					const d = Object(j.h)(i()),
						u = Date.now();
					let m = null,
						k = !1,
						w = !1,
						P = !1;
					const T = e => {
						if (!P && n && k) {
							P = !0;
							const s = i(),
								o = Date.now() - u,
								r = Object(f.c)(f.a.PostComposer);
							w ? (async ({
								state: e,
								uploadKey: t,
								assetId: n,
								isCanceled: s,
								fileSource: o,
								uploadDuration: r,
								correlationId: a
							}) => {
								const i = e.uploads[t],
									c = s || i.status === C.a.CANCELED,
									{
										file: d,
										url: l,
										metadata: u,
										error: m
									} = i,
									p = u.mimetype || d.type,
									h = p.startsWith("video/"),
									b = i.status === C.a.SUCCESS;
								let f = "";
								m ? f = JSON.stringify(m) : c && (f = "canceled");
								const g = {
									width: u.width,
									height: u.height,
									duration: u.videoDuration && Math.round(1e3 * u.videoDuration)
								};
								Object(E.a)({
									source: h ? "videoupload" : "imageupload",
									action: "upload",
									correlationId: a,
									noun: h ? "video" : "image",
									..._(e),
									actionInfo: {
										...v.actionInfo(e),
										success: b,
										...f ? {
											reason: f
										} : {}
									},
									media: {
										mimetype: p,
										uploadDuration: r,
										source: o,
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
								state: s,
								uploadKey: t,
								assetId: m,
								isCanceled: e,
								fileSource: n,
								uploadDuration: o,
								correlationId: r
							}) : O.x(s, t)
						}
					};
					return await a(Object(l.l)(e, t, async u => {
						k = !0, Object(l.k)(u.id, () => {
							T(!0)
						});
						const {
							error: f,
							metadata: C
						} = await async function(e, t, n) {
							const r = n && n.allowedPostTypes,
								a = n && n.name,
								i = await Object(x.g)(t) || t.type,
								c = Object(x.b)(t) || void 0;
							if (!c) return R("UNSUPPORTED_BROWSER");
							const d = {
								localUrl: c,
								mimetype: i
							};
							if (!i || !Object(x.i)(i)) return {
								error: {
									type: o.S
								}
							};
							if (i.startsWith("image/")) {
								if (r && !r.images) {
									const e = s.fbt._("Images are not allowed in r/{subredditName}", [s.fbt._param("subredditName", a)], {
										hk: "3C2E7Q"
									});
									return R(o.S, e)
								}
								if ("image/gif" === i) {
									if (t.size > o.Y) return R(o.K)
								} else if (t.size > o.ab) return R(o.Q);
								const e = await Object(g.a)(c);
								d.width = e.width, d.height = e.height
							} else if (i.startsWith("video/")) {
								const i = !(null == n || !n.id) && Object(S.p)(e, {
										subredditId: n.id,
										benefit: y.a.HdVideo
									}),
									u = i ? 2 * o.eb : o.eb;
								if (t.size > u) return R(o.kc);
								let m;
								try {
									m = await Object(x.h)(c, !0)
								} catch (l) {
									return R(o.S)
								}
								if (r) {
									const {
										videos: e,
										images: t
									} = r;
									if (t && !e && m.duration > o.fb) {
										const e = s.fbt._("Sorry, r/{subredditName} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF.", [s.fbt._param("subredditName", a)], {
											hk: "46ULiz"
										});
										return R(o.S, e)
									}
									if (!t && !e) {
										const e = s.fbt._("Videos are not allowed in r/{subredditName}", [s.fbt._param("subredditName", a)], {
											hk: "4uTUZb"
										});
										return R(o.S, e)
									}
								}
								const p = i ? 2 * o.db : o.db;
								if (m.duration > p) {
									const e = s.fbt._("Video is too long. Maximum video length is {duration} minutes.", [s.fbt._param("duration", (p / 60).toString())], {
										hk: "20nB6Q"
									});
									return R(o.S, e)
								}
								if (m.duration < o.lb) {
									const e = s.fbt._("Video is too short. Minimum video length is {duration} seconds.", [s.fbt._param("duration", o.lb.toString())], {
										hk: "49PSW8"
									});
									return R(o.S, e)
								}
								if (m.height < o.mb || m.width < o.nb) {
									const e = s.fbt._("Videos must be {min_video_width}x{min_video_height} pixels or larger.", [s.fbt._param("min_video_width", o.nb.toString()), s.fbt._param("min_video_height", o.mb.toString())], {
										hk: "2HSUGl"
									});
									return R(o.S, e)
								}
								if (t.size / m.duration < o.kb) {
									const e = s.fbt._("Videos must have a bitrate of {min_bitrate}KB/s or larger.", [s.fbt._param("min_bitrate", (o.kb / o.T).toString())], {
										hk: "1ehgDE"
									});
									return R(o.S, e)
								}
								d.height = m.height, d.width = m.width, d.videoDuration = m.duration, d.videoFirstFrameUrl = m.firstFrame.dataUrl
							}
							return {
								metadata: d
							}
						}(i(), e, d);
						if (f || !C) return {
							error: f
						};
						a(Object(l.m)({
							key: t,
							metadata: {
								fileSource: n,
								...C
							}
						})), w = !0, r && r();
						const v = e.name,
							E = await (async (e, t, n) => Object(p.a)(Object(h.a)(e, [b.a]), {
								endpoint: `${e.apiUrl}/api/media/asset.json`,
								method: o.ib.POST,
								data: {
									filepath: t,
									mimetype: n
								}
							}))(c(), v, C.mimetype);
						return E.ok ? (m = E.body.asset.asset_id, {
							uploadLease: E.body.args
						}) : {
							error: E.error || void 0
						}
					}, !0)), T(!1), i().uploads[t] || null
				}, B = e => async (t, n, {
					apiContext: s
				}) => {
					const o = n().uploads[e];
					o && !Object(C.c)(o) && await t(F(o.file, o.key, o.metadata.fileSource, void 0))
				}, U = (e, t, n) => async (o, r) => {
					const c = e.map((e, s) => new Promise(async s => {
							const r = Object(C.d)(n, a()().slice(-6));
							await o(F(e, r, t, () => s({
								uploadKey: r,
								isValid: !0
							}))), s({
								uploadKey: r,
								isValid: !1
							})
						})),
						l = await Promise.all(c),
						u = l.map(e => e.uploadKey);
					return o(((e, t = 3) => async (n, o) => {
						const {
							uploads: r
						} = o(), a = e.map(e => r[e]).filter(e => e.status === C.a.FAILED && !e.metadata.mimetype).map(e => e.error), c = a.length > t ? t - 1 : a.length, l = a.length - c;
						a.slice(0, c).forEach(e => n(Object(d.f)({
							duration: d.a,
							kind: w.b.Error,
							text: Object(i.a)(e)
						}))), l > 0 && n(Object(d.f)({
							duration: d.a,
							kind: w.b.Error,
							text: s.fbt._({
								"*": "Couldn't add {number} more files",
								_1: "Couldn't add 1 more file"
							}, [s.fbt._plural(l, "number")], {
								hk: "2fQwvl"
							})
						}))
					})(u)), l.filter(e => e.isValid).map(e => e.uploadKey)
				}, W = (e, t) => async (n, o) => {
					const r = o(),
						a = Object(j.U)(r),
						{
							items: i
						} = a,
						c = !i.length && 1 === e.length,
						u = Object(j.L)(r) && !c;
					let p = !1,
						h = e;
					if (u) {
						if (Object(k.x)(a)) return void n(Object(d.f)({
							kind: w.b.Error,
							text: s.fbt._("Please remove the existing video first. Videos aren't supported within galleries yet.", null, {
								hk: "3lGxp4"
							})
						}));
						h.some(e => Object(x.l)(e.type)) && n(Object(d.f)({
							kind: w.b.Error,
							text: s.fbt._("Videos aren’t supported within galleries...yet", null, {
								hk: "9Cl20"
							})
						})), h = h.filter(e => Object(x.k)(e.type));
						const e = Math.max(0, m.b - i.length);
						h.length > e && (n(Object(d.f)({
							kind: w.b.Error,
							text: s.fbt._("You have hit the limit of {images_limit} images", [s.fbt._param("images_limit", `${m.b}`)], {
								hk: "6M4kX"
							})
						})), h = h.slice(0, e))
					} else h = h.slice(0, 1), p = !0, n(Object(l.j)(A, !0));
					const b = await n(U(h, t, A));
					if (!b.length) return;
					const f = b.map(e => ({
							uploadKey: e,
							caption: "",
							url: ""
						})),
						g = 0 === i.length;
					n(Object(T.d)({
						...a,
						items: p ? f : [...i, ...f],
						selectedKey: g ? b[0] : b[b.length - 1]
					}))
				}
		},
		"./src/reddit/actions/postCreation/submit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return $
			})), n.d(t, "a", (function() {
				return re
			})), n.d(t, "b", (function() {
				return ce
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/telemetry/index.ts"),
				a = n("./src/reddit/actions/governance/index.ts"),
				i = n("./src/reddit/actions/pages/subreddit.ts"),
				c = n("./src/reddit/actions/postDraft.ts"),
				d = n("./src/reddit/actions/scheduledPosts/index.ts"),
				l = n("./src/reddit/actions/urlRequested.ts"),
				u = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				m = n("./src/config.ts"),
				p = n("./src/lib/convertToCamelCase/index.ts"),
				h = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				f = n("./src/lib/omitHeaders/index.ts"),
				g = n("./src/reddit/constants/headers.ts"),
				x = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				C = n("./src/reddit/helpers/flair.ts"),
				v = n("./src/reddit/helpers/name/index.ts"),
				E = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				_ = n("./src/reddit/models/Poll/index.ts"),
				O = n("./src/reddit/models/Post/index.ts"),
				y = n("./src/reddit/models/PostCreationForm/index.ts"),
				k = n("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function w(e) {
				return Math.floor(e.valueOf() / 1e3)
			}
			const S = e => {
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
				j = e => {
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
							return e.poll.type === _.a.Prediction ? {
								duration: 999999,
								end_timestamp: w(e.poll.endDate),
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
				P = e => {
					const t = Object(v.g)(e.destSubreddit.name);
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
							kind: S(e),
							original_content: e.isOC
						} : {},
						post_to_twitter: e.postToTwitter,
						sendreplies: e.sendReplies,
						...e.gRecaptchaResponse ? {
							"g-recaptcha-response": e.gRecaptchaResponse
						} : {},
						resubmit: e.resubmit,
						...j(e),
						...e.kind === y.p.MEDIA && "video" === e.mediaType ? {
							video_poster_url: e.videoThumbnailUrl
						} : {},
						...e.kind === y.p.MEDIA && e.makeGif ? {
							make_gif: "on"
						} : {},
						...e.flair ? {
							flair_id: e.flair.templateId,
							flair_text: Object(C.g)(e.flair)
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
				T = async (e, t) => {
					if (!e.ok) return Object(E.b)(e);
					const n = e.body.json.data;
					let o = n.url;
					o || t.kind !== y.p.MEDIA || (o = await ((e, t) => new Promise(n => {
						const s = new WebSocket(e),
							o = e => {
								s.close(), clearTimeout(r), n(e)
							},
							r = setTimeout(() => {
								o("")
							}, t);
						s.onmessage = e => {
							const t = JSON.parse(e.data),
								n = "success" === t.type ? t.payload.redirect : "";
							o(n)
						}, s.onerror = e => {
							o("")
						}
					}))(n.websocket_url, 3e4));
					const r = n.id || (e => {
							const t = /comments\/(\w+)\/.*$/.exec(e),
								n = t && t[1];
							return n ? `${s.Hb.Post}_${n}` : ""
						})(o),
						a = Object(b.parse)(o).path,
						i = n.drafts_count;
					return {
						...e,
						body: {
							id: r,
							path: a,
							draftsCount: i
						}
					}
				};
			var I = (e, t) => Object(h.a)(Object(f.a)(e, [g.a]), {
				endpoint: Object(k.a)(Object(x.a)(`${e.apiUrl}/api/submit?resubmit=true`)),
				method: s.ib.POST,
				data: P(t)
			}).then(async e => await T(e, t));
			var N = n("./src/reddit/endpoints/scheduledPosts/index.ts"),
				D = n("./src/reddit/endpoints/scheduledPosts/update.ts"),
				M = n("./src/reddit/featureFlags/index.ts"),
				R = n("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				L = n("./src/reddit/helpers/scheduledPosts/index.ts"),
				A = n("./src/reddit/helpers/trackers/postComposer.ts"),
				F = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				B = n("./src/reddit/models/User/index.ts"),
				U = n("./src/reddit/selectors/postCreations.ts"),
				W = n("./src/reddit/selectors/postDraft.ts"),
				V = n("./src/reddit/selectors/scheduledPosts/index.ts"),
				G = n("./src/reddit/selectors/user.ts"),
				H = n("./src/reddit/models/ScheduledPost/index.ts"),
				z = n("./src/reddit/actions/postCreation/constants.ts"),
				K = n("./src/reddit/actions/postCreation/general.ts"),
				q = n("./src/reddit/actions/postCreation/mediaUpload.ts");
			const Q = Object(o.a)(z.w),
				Y = Object(o.a)(z.P),
				J = Object(o.a)(z.o),
				Z = Object(o.a)(z.y),
				X = Object(o.a)(z.bb),
				$ = Object(o.a)(z.J),
				ee = Object(o.a)(z.a),
				te = Object(o.a)(z.F),
				ne = e => `/r/${e}/about/${H.r}`,
				se = (e, t) => {
					const n = e || {
							duration: s.A,
							options: []
						},
						{
							govType: o,
							newSubreddit: r,
							newTopMod: a
						} = Object(U.s)(t),
						i = {
							...n
						};
					return o && (i.type = o), i.type === _.a.ReplaceTopMod ? (i.params = {
						userName: a
					}, i.options = _.f[_.a.ReplaceTopMod]()) : i.type === _.a.Spinoff ? (i.params = {
						subreddit: r
					}, i.options = _.f[_.a.Spinoff](r)) : i.options = i.options.map(e => ({
						text: e.text.trim()
					})).filter(e => !!e.text), i
				},
				oe = e => {
					const t = e.uploads,
						n = Object(U.U)(e),
						o = Object(U.a)(e),
						r = Object(U.eb)(e);
					if (o === s.Ub.POST) return u.a.getPendingThumbnailUploads(r, t);
					if (o === s.Ub.MEDIA && n && n.items.length) {
						const {
							video: e
						} = n.items[0];
						if (e && e.thumbnail && !t[y.n]) return [{
							...e.thumbnail,
							uploadKey: y.n
						}]
					}
				},
				re = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					let a = o();
					const {
						pending: i
					} = a.creations.api.post.submit, d = Object(W.g)(a);
					if (i || d) return;
					n(te(e)), a = o();
					const l = Object(U.a)(a),
						u = M.d.rteVideoPoster(a),
						m = oe(a),
						p = l === s.Ub.MEDIA;
					m && (u || p) && (await n(q.f(m)), oe(o())) || (e === y.r.Draft ? await n(Object(c.r)(t.draftId)) : e === y.r.ScheduledPost && Object(V.r)(a) ? await n(ae(t)) : e === y.r.ScheduledPost ? await n(ie(t)) : await n(ce(t)))
				}, ae = e => async (t, n, {
					gqlContext: s
				}) => {
					const o = n(),
						a = Object(U.bb)(o),
						i = Object(U.cb)(o, e),
						c = Object(U.h)(o),
						u = Object(V.r)(o);
					if (!(i && c.id && a && Object(L.f)(u))) return;
					const m = c.id,
						p = Object(V.a)(o, {
							subredditId: m,
							scheduledPostId: u
						});
					if (p && Object(r.a)(Object(F.r)(p)(o)), t(Q(i)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(U.v)(n()))) return;
					const {
						isPoll: h,
						polls: b
					} = Object(U.s)(o), f = se(b, o), g = {
						...Object(N.e)({
							poll: h ? f : void 0,
							submission: i,
							schedule: a,
							subredditId: c.id,
							scheduledPostId: u
						})
					}, x = await Object(D.a)(s(), g);
					if (x.ok) return t(Object(d.e)({
						subredditId: c.id
					})), void t(Object(l.a)(ne(c.name), !1));
					const C = x.error;
					t(J(C))
				}, ie = e => async (t, n, {
					gqlContext: s
				}) => {
					const o = n(),
						a = Object(U.bb)(o),
						i = Object(U.cb)(o, e),
						c = Object(U.h)(o),
						u = Object(V.b)(o);
					if (!i || !c.id || !a) return;
					if (t(Q(i)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(U.v)(n()))) return;
					const {
						isPoll: m,
						polls: p
					} = Object(U.s)(o), h = se(p, o), b = {
						duration: h.duration,
						options: h.options
					}, f = {
						...Object(N.d)({
							poll: m ? b : void 0,
							submission: i,
							schedule: a,
							subredditId: c.id
						}),
						creationToken: u
					}, g = await Object(N.a)(s(), f);
					if (g.ok) {
						t(Object(d.e)({
							subredditId: c.id
						}));
						const e = g.body.data.createScheduledPost.scheduledPost;
						return e && Object(r.a)(Object(F.o)(Object(R.d)(e))(o)), void t(Object(l.a)(ne(c.name), !1))
					}
					const x = g.error;
					t(J(x))
				}, ce = e => async (t, n, {
					apiContext: o
				}) => {
					const r = n(),
						c = Object(U.cb)(r, e),
						{
							isPoll: d,
							polls: u
						} = Object(U.s)(r),
						b = se(u, r);
					if (!c) return;
					if (t(Q(c)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(U.v)(n()))) return;
					let C;
					const v = d && M.d.spPolls(r);
					if ((C = v ? await
							function(e, t, n) {
								const o = t.destSubreddit.id;
								return Object(h.a)(e, {
									method: s.ib.POST,
									endpoint: `${m.a.metaUrl}/polls/${o}`,
									type: "json",
									data: {
										poll: n,
										subredditId: o,
										...Object(p.a)(P(t))
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
										s = await T(n, t);
									if (s.ok) {
										return {
											body: {
												...s.body,
												poll: e.body.poll
											},
											ok: !0,
											status: e.status
										}
									}
									return {
										error: s.body,
										ok: !1,
										status: e.status
									}
								})
							}(o(), c, b) : d ? await ((e, t) => Object(h.a)(Object(f.a)(e, [g.a]), {
								endpoint: Object(k.a)(Object(x.a)(`${e.apiUrl}/api/submit_poll_post.json?resubmit=true`)),
								method: s.ib.POST,
								data: P(t),
								type: "json"
							}).then(e => T(e, t)))(o(), {
								...c,
								kind: y.p.POLL,
								poll: b
							}) : c.kind === y.p.GALLERY ? await ((e, t) => Object(h.a)(Object(f.a)(e, [g.a]), {
								endpoint: Object(k.a)(Object(x.a)(`${e.apiUrl}/api/submit_gallery_post.json?resubmit=true`)),
								method: s.ib.POST,
								data: {
									...P(t),
									items: t.galleryItems.map(e => ({
										caption: e.caption,
										outbound_url: e.url,
										media_id: e.assetId
									}))
								},
								type: "json"
							}).then(e => T(e, t)))(o(), c) : await I(o(), c)).ok) {
						const e = Object(G.k)(r),
							n = C.body;
						t(Y({
							draftId: c.draftId,
							response: n
						})), v && t(Object(a.c)({
							poll: n.poll
						}));
						const s = (n.path || `/user/${Object(B.e)(e)}/posts`).replace(/^\/r\/u_/, "/user/");
						t(Object(i.subredditInvalidateListing)(c.destSubreddit.name)), t(Object(l.a)(s, !1))
					} else {
						if (d) {
							const e = C.error;
							t(Z(e))
						}
						const e = C.error;
						e.type === s.H.BAD_CAPTCHA_ERROR ? t(ee()) : e.type === s.H.VALIDATION_ERROR ? t(X(e)) : e.type === s.H.SUBMIT_VALIDATION_ERROR ? t($(e)) : t(J(e))
					}
					const E = Object(K.n)(c.kind),
						_ = C.ok && C.body && C.body.id && Object(O.t)(C.body.id),
						w = n();
					A.v(w, E, _, e.correlationId)
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
		"./src/reddit/actions/scheduledPosts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return o
			})), n.d(t, "f", (function() {
				return r
			})), n.d(t, "m", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
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
				return h
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "n", (function() {
				return g
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "r", (function() {
				return C
			})), n.d(t, "u", (function() {
				return v
			})), n.d(t, "p", (function() {
				return E
			})), n.d(t, "q", (function() {
				return _
			})), n.d(t, "v", (function() {
				return O
			})), n.d(t, "s", (function() {
				return y
			})), n.d(t, "x", (function() {
				return k
			})), n.d(t, "w", (function() {
				return w
			})), n.d(t, "t", (function() {
				return S
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const o = "SCHEDULED_POSTS_REQUESTED",
				r = "SCHEDULED_POSTS_LOADED",
				a = "STANDALONE_SCHEDULED_POSTS_LOADED",
				i = "RECURRING_SCHEDULED_POSTS_LOADED",
				c = "SCHEDULED_POSTS_FAILED",
				d = "SCHEDULED_POST_CREATION_SUCCEEDED",
				l = "SCHEDULED_POST_SUBMIT_NOW_SUCCESS",
				u = "SCHEDULED_POST_MUTATE_REQUESTED",
				m = "SCHEDULED_POST_MUTATE_FAILED",
				p = "STANDALONE_POST_MUTATE_SUCCESS",
				h = "RECURRING_POST_MUTATE_SUCCESS",
				b = "RECURRING_POST__EDIT_MODAL_LOAD",
				f = "RECURRING_POST__EDIT_LOAD",
				g = "STANDALONE_POST__EDIT_LOAD",
				x = "SCHEDULED_POST__DELETE_SUCCESS",
				C = () => s.fbt._("Failed to load scheduled posts", null, {
					hk: "1fhkq4"
				}),
				v = () => s.fbt._("Whoops! Invalid scheduled post", null, {
					hk: "35jBb6"
				}),
				E = () => s.fbt._("Unable to delete scheduled post", null, {
					hk: "23nWms"
				}),
				_ = () => s.fbt._("Successfully deleted scheduled post", null, {
					hk: "1Lk7r2"
				}),
				O = () => s.fbt._("Unable to submit scheduled post", null, {
					hk: "vCW43"
				}),
				y = () => s.fbt._("Retry", null, {
					hk: "4bCZ7M"
				}),
				k = () => s.fbt._("Successfully submitted scheduled post!", null, {
					hk: "ONo6q"
				}),
				w = () => s.fbt._("Successfully edited scheduled post!", null, {
					hk: "HfGcT"
				}),
				S = () => s.fbt._("Failed to update scheduled post", null, {
					hk: "2zBuRu"
				})
		},
		"./src/reddit/actions/scheduledPosts/edit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return C
			})), n.d(t, "a", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/telemetry/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/scheduledPosts/index.ts"),
				c = n("./src/reddit/actions/scheduledPosts/constants.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/endpoints/scheduledPosts/update.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				m = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				p = n("./src/reddit/models/ScheduledPost/index.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/routes/postCreation/index.ts"),
				f = n("./src/reddit/selectors/scheduledPosts/index.ts");
			const g = Object(a.a)(c.n),
				x = Object(a.a)(c.b),
				C = (e, t) => async (n, s, r) => {
					const a = Object(f.a)(s(), {
						scheduledPostId: t,
						subredditId: e
					});
					a && (await n(Object(o.b)(Object(b.c)(a.subreddit.name, a.collectionId))), n((Object(p.p)(a) ? x : g)(a)))
				}, v = (e, t) => {
					Object(p.p)(t) ? e(Object(i.d)({
						scheduledPost: t
					})) : e(Object(i.h)({
						scheduledPost: t
					}))
				}, E = (e, t, n) => async (o, a, {
					gqlContext: b
				}) => {
					o(Object(i.g)());
					const g = Object(f.a)(a(), {
						subredditId: e,
						scheduledPostId: t
					});
					if (g && Object(p.p)(g) && Object(r.a)(Object(m.u)()(a(), g)), !g) return void o(Object(i.f)({
						message: s.fbt._("Scheduled post not found", null, {
							hk: "2zjM55"
						})
					}));
					if (!Object.keys(n).length) return void v(o, g);
					const x = await Object(l.a)(b(), {
							...n,
							id: t
						}),
						C = x.body;
					if (!(x.ok && C && C.data && C.data.updateScheduledPost && C.data.updateScheduledPost.ok && C.data.updateScheduledPost.scheduledPost)) return o(Object(i.f)({
						message: x.error && x.error.fields && x.error.fields.length && x.error.fields[0].msg || s.fbt._("Unknown error", null, {
							hk: "fXs5s"
						})
					})), void o(Object(d.f)(Object(d.e)(c.t(), h.b.Error, c.s(), E(e, t, n))));
					o(Object(d.f)(Object(d.e)(c.w(), h.b.SuccessCommunity))), v(o, Object(u.d)(C.data.updateScheduledPost.scheduledPost))
				}
		},
		"./src/reddit/actions/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "i", (function() {
				return S
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "b", (function() {
				return T
			}));
			var s = n("./src/lib/assertNever.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/scheduledPosts/constants.ts"),
				a = n("./src/reddit/actions/scheduledPosts/edit.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/scheduledPosts/index.ts"),
				d = n("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				l = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				u = n("./src/reddit/models/ScheduledPost/index.ts"),
				m = n("./src/reddit/models/Toast/index.ts"),
				p = n("./src/reddit/selectors/scheduledPosts/index.ts"),
				h = n("./src/telemetry/index.ts");
			const b = Object(o.a)(r.g),
				f = Object(o.a)(r.k),
				g = Object(o.a)(r.j),
				x = Object(o.a)(r.o),
				C = Object(o.a)(r.d),
				v = Object(o.a)(r.f),
				E = Object(o.a)(r.m),
				_ = Object(o.a)(r.a),
				O = Object(o.a)(r.c),
				y = Object(o.a)(r.e),
				k = Object(o.a)(r.h),
				w = (e, t) => {
					e(y()), e(Object(i.f)(Object(i.e)(r.r(), m.b.Error, r.s(), S(t))))
				},
				S = ({
					subredditId: e,
					includeStandalone: t = {
						standaloneFirst: 25
					},
					includeRecurring: n = {
						recurringFirst: 1e4
					},
					...s
				}) => async (o, r, {
					gqlContext: a
				}) => {
					if (Object(p.h)(r(), {
							subredditId: e
						})) return;
					o(b());
					const i = {
							subredditId: e,
							includeRecurring: n,
							includeStandalone: t,
							...s
						},
						l = await Object(c.b)(a(), i);
					Object(c.f)(l, i) ? P(o, Object(d.e)(l.body.data), i) : w(o, i)
				}, j = e => async (t, n, {
					gqlContext: s
				}) => {
					const o = n();
					if (!Object(p.h)(o, {
							subredditId: e
						})) return t(S({
						subredditId: e
					}));
					if (!Object(p.g)(o, {
							subredditId: e,
							type: u.f.standalonePosts
						})) return;
					const r = Object(p.c)(o, {
						subredditId: e,
						type: u.f.standalonePosts
					});
					if (!r) return;
					t(b());
					const a = {
							subredditId: e,
							includeStandalone: {
								standaloneFirst: 25,
								standaloneAfter: r
							}
						},
						i = await Object(c.b)(s(), a);
					i.ok ? P(t, Object(d.e)(i.body.data), a) : t(y())
				}, P = (e, t, n) => {
					Object(d.b)(t) ? e(v(t)) : Object(d.a)(t) ? e(_(t)) : Object(d.c)(t) ? e(E(t)) : w(e, n)
				}, T = (e, t) => async (n, o, r) => {
					const i = {},
						c = o();
					switch (e) {
						case "isModDistinguished":
						case "isNsfw":
						case "isOriginalContent":
						case "isContestMode":
						case "isPostAsMetaMod":
						case "isSpoiler":
							i[e] = !t[e];
							break;
						case "isSticky":
							const n = !!t.sticky && "NONE" !== t.sticky;
							i.sticky = n ? "NONE" : "SECOND";
							break;
						default:
							return Object(s.a)(e)
					}
					Object(h.a)(Object(l.t)(e, i[e], Object(u.p)(t))(c)), n(Object(a.a)(t.subreddit.id, t.id, i))
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
			n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "d", (function() {
				return v
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/sentry/index.ts"),
				a = n("./src/config.ts"),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts");
			var u = n("./src/reddit/reducers/features/avatar/index.ts"),
				m = n("./src/reddit/selectors/avatar.ts"),
				p = n("./src/reddit/actions/users.ts");
			Object(s.a)({
				features: {
					avatar: u.a
				}
			});
			const h = "SET_AVATAR_USER",
				b = Object(o.a)(h),
				f = "RANDOM_AVATAR_LOADED",
				g = Object(o.a)(f),
				x = (e, t, n) => async (s, o, {
					apiContext: r
				}) => {
					var u, h, b, f;
					const g = Object(m.b)(o()),
						x = await (async (e, t, n, s, o) => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${a.a.snoovatarUrl}/api/snoovatar`,
							method: i.ib.POST,
							headers: {
								"Content-Type": "application/json ",
								"X-CSRF-Token": o || ""
							},
							data: {
								accessory_ids: t,
								styles: n,
								...s
							}
						}))(r(), e, t, n, g);
					if (!x.ok) throw new Error("User avatar failed to save");
					return s(Object(p.A)(x.body)), {
						accountIcon: null === (h = null === (u = x.body) || void 0 === u ? void 0 : u.avatar) || void 0 === h ? void 0 : h.headshot_image_url,
						fullBodySnoovatar: null === (f = null === (b = x.body) || void 0 === b ? void 0 : b.avatar) || void 0 === f ? void 0 : f.image_url
					}
				}, C = () => async (e, t, {
					apiContext: n
				}) => {
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${a.a.snoovatarUrl}/api/account`,
							method: i.ib.GET
						}))(n());
						t.ok && e(b(t.body))
					} catch (s) {
						r.c.captureException(s)
					}
				}, v = () => async (e, t, {
					apiContext: n
				}) => {
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${a.a.snoovatarUrl}/api/snoovatars/random:byId`,
							method: i.ib.GET
						}))(n());
						t.ok && e(g(t.body))
					} catch (s) {
						r.c.captureException(s)
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
			var s = n("./src/reddit/actions/login.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				r = n("./src/reddit/actions/users.ts"),
				a = n("./src/reddit/constants/modals.ts"),
				i = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				d = n("./src/telemetry/index.ts");
			const l = () => async (e, t) => {
				const n = t();
				Object(d.a)(Object(i.j)(n)), e(Object(r.t)({
					forceFetch: !0
				})), await e(Object(o.g)(a.a.SNOOVATAR_MODAL))
			};

			function u(e = {}) {
				return async (t, n) => {
					const {
						clickSource: r,
						share: l,
						source: u
					} = e, m = n();
					r && Object(d.a)(Object(i.e)(r)(m)), Object(c.K)(m) ? await t(Object(o.h)(a.a.SNOOVATAR_MODAL, {
						share: l,
						source: u
					})) : await t(Object(s.i)())
				}
			}
		},
		"./src/reddit/actions/subredditAutocomplete/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = "SUBREDDIT_AUTOCOMPLETE__PENDING",
				o = "SUBREDDIT_AUTOCOMPLETE__LOADED",
				r = "SUBREDDIT_AUTOCOMPLETE__FAILED"
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
				return b
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/subscription/index.ts"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/selectors/subreddit.ts");
			const l = "SUBREDDIT_CROSSPOSTABLE__PENDING",
				u = "SUBREDDIT_CROSSPOSTABLE__LOADED",
				m = "SUBREDDIT_CROSSPOSTABLE__FAILED",
				p = (Object(s.a)(l), Object(s.a)(u)),
				h = Object(s.a)(m),
				b = () => async (e, t, {
					apiContext: n
				}) => {
					await e(o.e());
					const {
						api: s,
						ids: l
					} = t().subreddits.crosspostable;
					if (s.pending || Object.keys(l).length) return;
					const u = await ((e, t) => Object(a.a)(Object(i.a)(e, [c.a]), {
						data: t,
						endpoint: `${e.apiUrl}/api/crosspostable_subreddits.json`,
						method: r.ib.GET
					}))(n(), {
						sr_detail: !1
					});
					if (u.ok) {
						const n = t(),
							s = u.body && u.body.length ? u.body.map(e => Object(d.B)(n, e)).filter(e => !!e).reduce((e, t) => (e[t] = !0, e), {}) : {};
						e(p({
							subredditIds: s
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
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "m", (function() {
				return v
			})), n.d(t, "k", (function() {
				return S
			})), n.d(t, "l", (function() {
				return j
			})), n.d(t, "i", (function() {
				return P
			})), n.d(t, "j", (function() {
				return T
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/get.js"),
				o = n.n(s),
				r = n("./node_modules/uuid/v4.js"),
				a = n.n(r),
				i = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/uploadToS3/index.ts"),
				d = n("./src/reddit/models/Upload/index.ts");
			const l = "UPLOAD_PENDING",
				u = "UPLOAD_UPLOADING",
				m = "UPLOAD_METADATA_CHANGED",
				p = "UPLOAD_PROGRESS",
				h = "UPLOAD_SUCCESS",
				b = "UPLOAD_FAILED",
				f = "UPLOAD_CANCELED",
				g = "UPLOAD_REMOVED",
				x = Object(i.a)(l),
				C = Object(i.a)(u),
				v = Object(i.a)(m),
				E = Object(i.a)(p),
				_ = Object(i.a)(h),
				O = Object(i.a)(b),
				y = Object(i.a)(f),
				k = Object(i.a)(g),
				w = new Map,
				S = (e, t) => {
					const n = w.get(e) || [];
					n.push(t), w.set(e, n)
				},
				j = (e, t, n, s = !1) => async (r, i, {
					apiContext: l
				}) => {
					const u = t;
					if (i().uploads[u] && Object(d.c)(i().uploads[u])) return;
					const m = a()(),
						p = () => {
							const e = i().uploads[u];
							return !e || e.id !== m || e.status === d.a.CANCELED
						};
					r(x({
						key: u,
						id: m,
						file: e
					}));
					const {
						uploadLease: h,
						error: b
					} = await n(i().uploads[u]);
					if (p()) return;
					if (b || !h) return void r(O({
						key: u,
						error: b
					}));
					let f;
					S(m, () => {
						f && f.abort()
					}), r(C({
						key: u
					}));
					const g = await Object(c.a)(e, h, e => (f = e, s && e.on("progress", e => {
						if (!p() && "upload" === e.direction) {
							const t = {
								percent: e.percent,
								total: e.total,
								uploaded: e.loaded
							};
							r(E({
								key: u,
								progress: t
							}))
						}
					}), e));
					if (f = null, !p())
						if (g.ok) {
							const e = decodeURIComponent(g.body.PostResponse.Location);
							r(_({
								key: u,
								url: e
							}))
						} else {
							const e = o()(g, "body.Error.Message.0"),
								t = {
									type: "ERROR",
									...e ? {
										fields: [{
											field: "0",
											msg: e
										}]
									} : {}
								};
							r(O({
								key: u,
								error: t
							}))
						}
				}, P = (e, t = !1) => (n, s) => {
					const o = s().uploads[e];
					o && (((e, t) => {
						const n = w.get(e);
						n && n.forEach(n => n(e, t)), w.delete(e)
					})(o.id, t), n(t ? k({
						key: e
					}) : y({
						key: e
					})))
				}, T = (e, t = !1) => (n, s) => {
					Object.keys(s().uploads).forEach(s => {
						s.startsWith(e) && n(P(s, t))
					})
				}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/lib/matchRoute/index.ts"),
				o = n("./src/lib/opener/index.ts"),
				r = n("./node_modules/react-router-redux/es/index.js");
			const a = (e, t = !0) => async (n, a, {
				routes: i
			}) => {
				const c = a();
				Object(s.a)(e, i, c) ? n(Object(r.b)(e)) : t ? Object(o.e)(e, "_blank") : window.location.assign(e)
			}
		},
		"./src/reddit/actions/userFlair/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "i", (function() {
				return r
			})), n.d(t, "j", (function() {
				return a
			})), n.d(t, "h", (function() {
				return i
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
				return h
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "m", (function() {
				return g
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "k", (function() {
				return v
			}));
			const s = "USER_FLAIR_DATA__MUTATED",
				o = "AUTHOR_FLAIR_DATA__MUTATED",
				r = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				a = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				c = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				d = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				l = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				u = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				m = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				p = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				h = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				b = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				f = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				g = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				x = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				C = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				v = "USERFLAIR_FETCH_SUCCESS"
		},
		"./src/reddit/actions/wrappedReddit/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			const s = "WRAPPED_REDDIT_CARDS_PENDING",
				o = "WRAPPED_REDDIT_CARDS_LOADED",
				r = "WRAPPED_REDDIT_CARDS_FAILED",
				a = "WRAPPED_REDDIT_RESET",
				i = "WRAPPED_REDDIT_ADD_UPLOAD"
		},
		"./src/reddit/components/CommentCreation/ExpandingFormDiv.m.less": function(e, t, n) {
			e.exports = {
				breakout: "_1VBLErIxAjOke05q8yLOyf"
			}
		},
		"./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.m.less"),
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
			const d = (e, t) => 21 * e + 33 + (t ? 10 : 0);
			t.a = ({
				breakOut: e,
				depth: t,
				isEditing: n,
				...s
			}) => o.a.createElement("div", c({
				className: Object(r.a)({
					[i.a.breakout]: e
				}),
				style: {
					left: d(t, n)
				}
			}, s))
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
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/constants/icons.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = n("./src/reddit/components/TypingIndicators/index.m.less"),
				m = n.n(u),
				p = n("./src/reddit/components/CommentCreation/FormFooter/index.m.less"),
				h = n.n(p);
			const {
				fbt: b
			} = n("./node_modules/fbt/lib/FbtPublic.js"), f = Object(s.a)({
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
			}), g = Object(s.a)({
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
			}), x = Object(s.a)({
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
			}), C = 10, v = c.a.div("FormFooterWrapper", h.a), E = c.a.wrapped(d.s, "SubmitButton", h.a), _ = c.a.wrapped(l.a, "LoadingIcon", h.a), O = c.a.wrapped(d.s, "CancelButton", h.a), y = c.a.div("ButtonWrapper", h.a), k = e => e.preventDefault(), w = ({
				onTypingIndicatorsFormattingToolsClick: e,
				destSubreddit: t,
				onEmoteButtonClick: n,
				onGifButtonClick: s,
				userCanUseGifs: o,
				emojisEnabled: a,
				gifsEnabled: c,
				controlsState: d,
				isShowTypingIndicatorsFormattingTools: l
			}) => r.a.createElement("div", {
				className: m.a.footerButtons
			}, r.a.createElement(x, {
				iconName: l ? i.a.format_fill : i.a.format,
				onClick: () => e(),
				overridingClassName: l ? m.a.formatFillIcon : void 0,
				tooltip: b._("Formatting Tools", null, {
					hk: "3HxAVI"
				})
			}), c && r.a.createElement(g, {
				controlsState: d,
				onGifButtonClick: s,
				useRainbowStyling: !1,
				userCanUseGifs: o
			}), a && r.a.createElement(f, {
				controlsState: d,
				subredditId: null == t ? void 0 : t.id,
				onEmoteButtonClick: n,
				showEmoteMask: !1,
				useIconName: !0
			})), S = ({
				pending: e,
				cancelButtonEnabled: t = !0,
				children: n,
				className: s,
				submitButtonText: o,
				canSubmit: i,
				onSubmit: c,
				onCancel: l,
				typingIndicatorsFormFooterProps: u
			}) => r.a.createElement(v, {
				className: Object(a.a)(s, {
					[h.a.pending]: e
				})
			}, r.a.createElement(y, null, !!u && r.a.createElement(w, u), r.a.createElement(E, {
				className: u ? m.a.submitButton : void 0,
				size: d.c.XS,
				type: "submit",
				disabled: !i,
				onClick: c,
				onMouseDown: k
			}, e ? r.a.createElement(_, {
				sizePx: C
			}) : o), t && r.a.createElement(O, {
				priority: d.b.Secondary,
				size: d.c.XS,
				type: "reset",
				disabled: e,
				onClick: l,
				onMouseDown: k
			}, b._("Cancel", null, {
				hk: "2TSLl5"
			}))), n);
			t.a = S
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-dom/index.js"),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/comment/authoring.ts"),
				l = n("./src/reddit/components/AuthorLink/index.tsx"),
				u = n("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				m = n("./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx"),
				p = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				h = n("./src/reddit/components/MarkdownHelp/index.tsx"),
				b = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				f = n("./src/reddit/controls/ErrorText/index.tsx"),
				g = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = n("./src/reddit/icons/svgs/Help/index.tsx"),
				C = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx"),
				v = n("./src/reddit/components/CommentCreation/FormFooter/index.tsx"),
				E = n("./src/lib/fastdom/index.ts"),
				_ = n("./src/reddit/components/CommentCreation/ToolbarSelector.m.less"),
				O = n.n(_),
				y = n("./src/lib/lessComponent.tsx");
			const k = 310,
				w = y.a.div("Container", O.a);
			class S extends r.a.Component {
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
					return r.a.createElement(w, {
						innerRef: this.setContainerRef
					}, this.state.toolbarType ? this.props.children(this.state.toolbarType) : null)
				}
			}
			var j = n("./src/reddit/icons/svgs/MarkdownMode/index.tsx"),
				P = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				T = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/MarkdownModeButton.m.less"),
				I = n.n(T),
				N = n("./src/reddit/controls/Button/index.tsx");
			const D = y.a.wrapped(g.a, "LoadingIcon", I.a),
				M = ({
					isFilled: e,
					...t
				}) => r.a.createElement(D, t),
				R = y.a.div("Wrapper", I.a),
				L = y.a.wrapped(j.a, "MarkdownModeIcon", I.a),
				A = ({
					isFilled: e,
					...t
				}) => r.a.createElement(L, t);
			var F = r.a.memo((function(e) {
					const t = s.fbt._("Switch to fancy pants editor", null, {
						hk: "1XOb4H"
					});
					return r.a.createElement(R, null, r.a.createElement(N.s, {
						priority: N.b.Plain,
						size: N.c.XS,
						"aria-label": t,
						innerRef: e.buttonRef,
						className: e.className,
						onClick: e.onClick,
						Icon: e.isConverting ? M : A
					}, r.a.createElement(P.a, {
						text: t
					})))
				})),
				B = n("./src/lib/classNames/index.ts"),
				U = n("./src/reddit/constants/keycodes.ts"),
				W = n("./src/reddit/components/CommentCreation/getCancelModalId.ts"),
				V = n("./src/reddit/constants/componentSizes.ts"),
				G = n("./src/reddit/constants/componentTestIds.ts"),
				H = n("./src/reddit/selectors/activeModalId.ts"),
				z = n("./src/reddit/selectors/comments.ts"),
				K = n("./src/reddit/selectors/editorContent.ts"),
				q = n("./src/reddit/actions/modal.ts"),
				Q = n("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				Y = n("./src/reddit/models/PostCreationForm/index.ts"),
				J = n("./src/reddit/models/PostDraft/index.ts"),
				Z = n("./src/reddit/models/User/index.ts"),
				X = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.m.less"),
				$ = n.n(X);
			const ee = y.a.button("SwitchModeButton", $.a),
				te = y.a.wrapped(g.a, "LoadingIcon", $.a),
				ne = y.a.div("CommentHeader", $.a),
				se = y.a.span("FormHeaderText", $.a),
				oe = y.a.button("HelpButton", $.a),
				re = y.a.wrapped(x.a, "HelpIcon", $.a),
				ae = y.a.wrapped(Q.a, "ResizableAutosizeTextarea", $.a),
				ie = y.a.wrapped(v.a, "FormFooter", $.a),
				ce = y.a.wrapped(b.a, "CurrentUserIcon", $.a),
				de = e => r.a.createElement(oe, {
					className: e.className,
					onClick: e.onClick
				}, r.a.createElement(re, null)),
				le = 8,
				ue = 16,
				me = y.a.div("Wrapper", $.a),
				pe = y.a.div("FormWrapper", $.a),
				he = Object(i.b)(() => Object(c.c)({
					activeModalId: H.a,
					userName: e => e.user.account ? Object(Z.e)(e.user.account) : "",
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					draft: z.i,
					isConverting: (e, t) => Object(K.a)(e, t.draftKey)
				}), (e, t) => ({
					cancelModalToggled: () => e(Object(q.i)(Object(W.a)(t.draftKey))),
					helpModalToggled: () => e(Object(q.i)(h.b))
				}));
			class be extends r.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.cancelForm = () => {
						this.props.onCancel(), this.onBlur()
					}, this.detectBreakout = () => {
						if (!this.wrapperEl || !this.wrapperEl.parentElement || this.props.isTopLevelComment) return;
						const e = this.wrapperEl.parentElement.getBoundingClientRect().width < V.c,
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
							keyCode: s
						} = e;
						(t || n) && s === U.a.Enter && this.onSubmit()
					}, this.onSubmit = () => {
						this.props.onSubmit({
							commentMode: Y.i.MARKDOWN,
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
						initialText: o
					} = e;
					this.state = {
						text: o || "",
						autofocusDisabled: !1,
						hasChanged: !1,
						showError: n,
						breakOut: !1,
						wrapperHeight: void 0,
						formHeight: null,
						cancelModalText: t === J.c.edit ? s.fbt._("Are you sure that you want to discard your edits?", null, {
							hk: "3RHatI"
						}) : s.fbt._("Are you sure that you want to discard your comment?", null, {
							hk: "38Df9h"
						})
					}
				}
				componentDidMount() {
					this.props.onMount(), window.addEventListener("resize", this.detectBreakout), E.a.read(this.detectBreakout), E.a.write(() => {
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
							pending: s
						} = this.props;
					t && !s && !n ? this.setState({
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
					const e = Object(a.findDOMNode)(this.textAreaRef);
					return e instanceof Element ? e.getBoundingClientRect().height + le + ue + V.o : void 0
				}
				render() {
					const {
						activeModalId: e,
						autofocus: t,
						cancelModalToggled: n,
						className: o,
						disableAutofocus: a,
						depth: i,
						draft: c,
						draftKey: b,
						draftType: g,
						errorMsgs: x,
						pending: v,
						modalSeen: E,
						submitButtonText: _,
						isCommentBoxDesignEnabled: O,
						isExpanded: y,
						isTopLevelComment: k,
						onSwitchMode: w,
						userName: j
					} = this.props, {
						cancelModalText: P,
						showError: T,
						text: I,
						breakOut: N,
						wrapperHeight: D
					} = this.state, M = Object(W.a)(b), R = c.draftType === J.c.edit;
					return r.a.createElement(me, {
						"data-test-id": G.b,
						className: Object(B.a)(o, {
							[$.a.isTopLevelComment]: k,
							[$.a.mExpanded]: y,
							[$.a.mRedesign]: O
						}),
						ref: this.setWrapperRef,
						style: {
							height: N ? D : void 0
						}
					}, !O && k && r.a.createElement(ne, null, r.a.createElement(se, null, s.fbt._("Comment as {authorLink}", [s.fbt._param("authorLink", r.a.createElement(l.a, {
						author: j,
						isAuthorDeleted: !1
					}, j))], {
						hk: "4pMWAk"
					}))), r.a.createElement(C.a, {
						breakOut: N,
						depth: i,
						isEditing: R
					}, O && r.a.createElement("div", {
						className: $.a.userIcon
					}, r.a.createElement(ce, null)), r.a.createElement(pe, {
						className: Object(B.a)({
							[$.a.pending]: v,
							[$.a.focused]: c.hasFocus
						})
					}, r.a.createElement(ae, {
						innerRef: this.setTextAreaRef,
						autoFocus: t && !a,
						disabled: v,
						initialHeight: this.props.initialHeight,
						onBlur: this.onBlur,
						onChange: this.onChange,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.onFocus,
						onKeyDown: this.handleKeyDown,
						placeholder: O ? s.fbt._("Add a comment", null, {
							hk: "39ZBm0"
						}) : s.fbt._("What are your thoughts?", null, {
							hk: "4or1AH"
						}),
						value: I
					}), (!O || y) && r.a.createElement(ie, {
						cancelButtonEnabled: g !== J.c.replyToPost,
						onSubmit: this.onSubmit,
						onCancel: this.onCancel,
						pending: v,
						submitButtonText: _,
						canSubmit: this.userHasEnteredText()
					}, r.a.createElement(S, null, e => "compact" === e ? r.a.createElement(F, {
						buttonRef: e => this.switchModeBtn = e,
						onClick: () => w(Y.i.RICH_TEXT, I, b),
						isConverting: this.props.isConverting
					}) : r.a.createElement("div", null, r.a.createElement(ee, {
						innerRef: e => this.switchModeBtn = e,
						onClick: () => w(Y.i.RICH_TEXT, I, b)
					}, s.fbt._("Switch to Fancy Pants Editor", null, {
						hk: "ousUG"
					}), this.props.isConverting && r.a.createElement(te, {
						sizePx: 12
					})))), r.a.createElement(de, {
						onClick: this.props.helpModalToggled
					})))), T && Object(f.c)(x), e === M && r.a.createElement(p.a, {
						actionText: s.fbt._("Discard", null, {
							hk: "1kJ5PR"
						}),
						cancelActionText: s.fbt._("keep", null, {
							hk: "J0ER1"
						}),
						modalText: P,
						onConfirm: () => this.cancelForm(),
						toggleModal: n,
						trackClick: () => {}
					}), e === h.b && r.a.createElement(h.a, null), e === d.q && r.a.createElement(m.a, {
						onSubmit: this.onSubmit,
						modalSeen: E,
						withOverlay: !0
					}), r.a.createElement(u.a, {
						editKey: b,
						hasValue: !!I
					}))
				}
			}
			t.b = he(be)
		},
		"./src/reddit/components/CommentCreation/NavigationModule/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-router/esm/react-router.js");
			let i = null;
			class c extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.unblock = e => {
						c.blockers.delete(e), c.blockers.size || (i && i(), i = null, window.removeEventListener("beforeunload", c.navigationBlocker))
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
					c.blockers.add(e), i || (window.addEventListener("beforeunload", c.navigationBlocker), i = this.props.history.block(() => {
						const e = this.props.isPostEdit ? s.fbt._("You have a post edit in progress, are you sure you want to discard it?", null, {
							hk: "4u5L7p"
						}) : s.fbt._("You have a comment in progress, are you sure you want to discard it?", null, {
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
			}, t.a = Object(a.i)(c)
		},
		"./src/reddit/components/CommentCreation/ToolbarSelector.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1XC-wMQsKPqfaPcfWQCZdW",
				container: "_1XC-wMQsKPqfaPcfWQCZdW"
			}
		},
		"./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/uuid/v4.js"),
				i = n.n(a),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/reddit/actions/comment/authoring.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/controls/TextButton/index.tsx"),
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
				x = e => t => ({
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
				v = e => t => ({
					action: h.c.CLICK,
					noun: "close",
					correlationId: e,
					...f(t)
				});
			var E = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js"), O = Object(r.b)(null, (e, t) => ({
				closeModal: () => {
					e(Object(l.g)(d.q))
				},
				continue: () => {
					t.onSubmit()
				}
			}));
			class y extends o.a.Component {
				constructor(e) {
					super(e), this.state = {
						correlationId: i()()
					}
				}
				componentDidMount() {
					this.props.modalSeen(), this.props.sendEvent(g(this.state.correlationId))
				}
				render() {
					return o.a.createElement(u.e, null, o.a.createElement(u.i, null, o.a.createElement(E.a, null, o.a.createElement(u.q, null, _._("Are you sure you want to post that?", null, {
						hk: "4yXqtu"
					})), o.a.createElement(p.a, {
						onClick: () => {
							this.props.sendEvent(v(this.state.correlationId)), this.props.closeModal()
						}
					}, o.a.createElement(u.b, null)))), o.a.createElement(u.l, null, o.a.createElement(u.p, null, _._("A reminder from the mods: Please follow community rules when commenting.", null, {
						hk: "Hdi9f"
					}))), o.a.createElement(u.g, null, o.a.createElement(u.a, {
						onClick: () => {
							this.props.sendEvent(C(this.state.correlationId)), this.props.closeModal()
						},
						"data-redditstyle": !0
					}, _._("Go back and edit", null, {
						hk: "3nGNI7"
					})), o.a.createElement(u.r, {
						onClick: () => {
							this.props.sendEvent(x(this.state.correlationId)), this.props.continue()
						},
						"data-redditstyle": !0
					}, _._("Comment", null, {
						hk: "1leYg7"
					}))))
				}
			}
			t.a = Object(c.a)(O(Object(m.c)(y)))
		},
		"./src/reddit/components/CommentCreation/getCancelModalId.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = e => `Comment-cancelModal__${e}`
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(l);
			const m = e => e.preventDefault();
			t.a = Object(a.a)(e => r.a.createElement(i.e, null, r.a.createElement(i.i, null, r.a.createElement(d.a, null, r.a.createElement(i.q, null, e.headerText || s.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(i.b, null)))), r.a.createElement(i.l, null, r.a.createElement(i.p, {
				className: u.a.ModalText
			}, e.modalText)), r.a.createElement(i.g, null, !e.hideCancelButton && r.a.createElement(i.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || s.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(i.u, {
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/privateCommunity.ts"),
				p = n("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				h = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				b = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.m.less"),
				f = n.n(b);
			const g = () => ({
				[h.b.Comment]: s.fbt._("Request to Comment", null, {
					hk: "3KRhw5"
				}),
				[h.b.IdCard]: s.fbt._("Request to Post", null, {
					hk: "2xsrGd"
				}),
				[h.b.PostSubmission]: s.fbt._("Request to Post", null, {
					hk: "2xsrGd"
				}),
				[h.b.ContentGate]: s.fbt._("Request to Join", null, {
					hk: "1nK8Vv"
				})
			});
			class x extends r.a.Component {
				constructor() {
					super(...arguments), this.onRequest = () => {
						const {
							sendEvent: e,
							eventSource: t,
							openRequestToJoinSubredditModal: n,
							openContributorRequestModal: s
						} = this.props;
						t === h.b.ContentGate ? (e(Object(m.a)(t)), n()) : (e(Object(p.a)(t)), s())
					}
				}
				render() {
					const {
						eventSource: e,
						smallButton: t,
						className: n,
						isContributorRequestPending: o
					} = this.props;
					return r.a.createElement(u.s, {
						priority: e === h.b.ContentGate ? u.b.Secondary : u.b.Primary,
						className: Object(i.a)(t ? null : f.a.RequestButton, n),
						onClick: this.onRequest,
						size: t ? u.c.S : u.c.M,
						disabled: o
					}, o ? s.fbt._("Request Pending", null, {
						hk: "hVswi"
					}) : g()[e])
				}
			}
			t.default = Object(a.b)(null, e => ({
				openContributorRequestModal: () => e(Object(c.i)(l.a.CONTRIBUTOR_REQUEST)),
				openRequestToJoinSubredditModal: () => e(Object(c.i)(l.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT))
			}))(Object(d.c)(x))
		},
		"./src/reddit/components/Econ/Prediction/NewBadge/index.m.less": function(e, t, n) {
			e.exports = {
				newBadge: "_25Zpk4lWyvwk-rK1hZ0N8m"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.nonDismissable = "predictionEducationNonDismissable", e.creation = "predictionEducationCreation", e.feature = "predictionEducationFeature"
				}(s || (s = {}))
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/hooks/useLocalStorage.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
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
				const h = m !== c.a.nonDismissable,
					[b, f] = Object(r.a)(m, !h || !1),
					[g, x] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => {
					b || g || !d || (d(), x(!0))
				}, [b, g, d]), h && b ? null : o.a.createElement("div", {
					className: l.a.educationMessage
				}, o.a.createElement("div", {
					className: l.a.titleRow
				}, o.a.createElement("div", {
					className: l.a.header
				}, o.a.createElement("h3", {
					className: l.a.title
				}, p), t && o.a.createElement("div", {
					className: l.a.newBadge
				}, u._("New", null, {
					hk: "2N0EBb"
				}))), h && o.a.createElement(a.s, {
					"aria-label": u._("Close", null, {
						hk: "2UjnU"
					}),
					className: l.a.closeButton,
					Icon: Object(i.b)("close"),
					onClick: () => {
						f(!0), n && n()
					},
					priority: a.b.Plain
				})), e)
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionFeatureEducationMessage/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.tsx");

			function i({
				isTokens: e,
				onClose: t,
				onView: n,
				storageKey: o
			}) {
				const i = s.fbt._("Predictions", null, {
						hk: "3X6mhV"
					}),
					c = e ? s.fbt._("Redditors add tokens to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "FDY0l"
					}) : s.fbt._("Redditors add coins to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "4eP2MR"
					});
				return r.a.createElement("div", null, r.a.createElement(a.a, {
					onClose: t,
					onView: n,
					title: i,
					newBadge: !0,
					message: c,
					storageKey: o
				}))
			}
		},
		"./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/actions/economics/predictions/index.ts"),
				i = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				c = n("./src/reddit/selectors/subreddit.ts");

			function d(e) {
				const t = Object(r.d)(),
					n = Object(r.e)(t => Object(c.Q)(t, {
						subredditId: e
					})),
					s = Object(r.e)(t => Object(i.h)(t, {
						subredditId: e
					})),
					d = Object(r.e)(t => Object(i.j)(t, {
						subredditId: e
					})),
					l = o.a.useCallback(() => {
						n.name && t(Object(a.l)(n.name))
					}, [n.name, t]);
				return o.a.useEffect(() => {
					d || s || l()
				}, [d, s, l]), {
					isFetching: d,
					fetch: l
				}
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.m.less": function(e, t, n) {
			e.exports = {
				modalHeader: "_26bOTAKvGixX5tMC3vGfTv"
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/noop.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = n.n(d);
			t.a = e => a.a.createElement(i.i, {
				className: l.a.modalHeader
			}, a.a.createElement(i.q, null, e.title), a.a.createElement(c.a, {
				onClick: e.onClosePressed || o.a
			}, a.a.createElement(i.b, null)))
		},
		"./src/reddit/components/FlairPickerWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_3nRJIwLuth2pKYrXnr2jPN",
				wrapper: "_3nRJIwLuth2pKYrXnr2jPN"
			}
		},
		"./src/reddit/components/FlairPickerWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				r = n.n(o);
			const a = s.a.div("Wrapper", r.a);
			t.a = a
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Flair/index.tsx"),
				c = n("./src/reddit/components/FlairPreview/index.m.less"),
				d = n.n(c);
			const l = a.a.span("Placeholder", d.a),
				u = a.a.div("SelectedFlair", d.a),
				m = a.a.wrapped(i.b, "FlairComponent", d.a);
			t.a = e => e.flair ? r.a.createElement(u, null, r.a.createElement(l, null, s.fbt._("{placeholder}", [s.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), r.a.createElement(m, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : r.a.createElement(u, null, s.fbt._("No flair selected", null, {
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
			var s = n("./node_modules/lodash/once.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/loadWithRetries/index.ts"),
				u = n("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = n.n(u);
			const p = d.a.wrapped(e => a.a.createElement("div", {
					className: Object(c.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				h = o()((e = p) => Object(i.a)({
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/memoizeByReference/index.ts"),
				l = n("./src/reddit/featureFlags/index.ts"),
				u = n("./src/reddit/helpers/flair.ts"),
				m = n("./src/reddit/helpers/trackers/userFlair.ts"),
				p = n("./src/reddit/hooks/useTracking.ts"),
				h = n("./src/reddit/selectors/moderatorPermissions.ts"),
				b = n("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				f = n("./src/reddit/components/Flair/index.tsx"),
				g = n("./src/reddit/controls/RadioInput/index.tsx"),
				x = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				C = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				v = n("./src/reddit/icons/svgs/Search/index.tsx"),
				E = n("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				_ = n.n(E);
			class O extends r.a.Component {
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
						searchQuery: o
					} = this.state, a = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(o)), i = !!n && a.some(e => e.id === n);
					return r.a.createElement("div", {
						className: _.a.container
					}, r.a.createElement("div", {
						className: _.a.searchBoxWrapper
					}, r.a.createElement("input", {
						className: _.a.searchInput,
						onChange: this.onSearchChange,
						type: "text",
						placeholder: s.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: o
					}), r.a.createElement(v.a, {
						className: _.a.searchIcon
					})), r.a.createElement(g.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: n
					}, a.map((e, t) => {
						const s = Object(u.c)(e),
							o = n === e.id || !i && 0 === t;
						return r.a.createElement(x.a, {
							className: _.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: o ? 0 : -1,
							value: e.id
						}, r.a.createElement(f.b, {
							className: _.a.flairComponent,
							flair: s,
							forceSmallEmojis: !0
						}), e.textEditable && r.a.createElement(C.a, {
							className: _.a.pencil
						}))
					})))
				}
			}
			var y = n("./src/reddit/components/FlairSearch/index.m.less"),
				k = n.n(y);
			const w = Object(d.a)(e => e && Object(u.c)(e)),
				S = Object(i.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: h.g
				}),
				j = Object(a.b)(S);
			t.a = j(e => {
				const {
					flairTemplateType: t,
					flair: n,
					className: o,
					onChange: a,
					subredditId: i,
					templates: d,
					templateIds: l,
					areFlairRestrictionsEnabled: h,
					isModerator: f
				} = e, g = Object(p.a)(), x = d && n && n.templateId && d[n.templateId] || void 0, C = Object(b.a)(), v = n || w(x);
				return r.a.createElement("div", {
					className: Object(c.a)(o, k.a.container)
				}, d && l && r.a.createElement(O, {
					flairTemplateType: t,
					onChange: e => {
						if (d) {
							const t = d[e],
								n = Object(u.c)(t);
							g(Object(m.b)({
								userFlair: t
							})), a(n)
						}
					},
					selectedTemplateId: x ? x.id : "",
					templateIds: l,
					templates: d
				}), v && x && (f || x.textEditable) && r.a.createElement("div", {
					className: k.a.flairEditSection
				}, r.a.createElement("div", {
					className: k.a.editLabel
				}, s.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), h && r.a.createElement("div", {
					className: k.a.restrictionHintText
				}, Object(u.k)(x)), r.a.createElement(C, {
					autofocus: !0,
					emojiPickerId: "FlairSearch-EmojiPicker-DropdownId",
					flair: v,
					flairTemplate: x,
					flairTemplateType: t,
					isFlairModOnly: x.modOnly,
					onChange: e => {
						const t = d && e.templateId ? d[e.templateId] : void 0;
						let n = e;
						t && (n = Object(u.d)({
							flair: e,
							template: t,
							ignoreTextAllowance: !0
						})), a(n)
					},
					subredditId: i
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/FocusableContent/index.m.less"),
				c = n.n(i);
			t.a = a.a.wrapped(e => o.a.createElement("div", {
				className: Object(r.a)(e.className, {
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/selectors/crypto/points.ts"),
				l = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(l);
			const m = Object(a.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(d.b)(e, t)
			});
			t.a = Object(r.b)(m)((function(e) {
				var t;
				const n = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!n) return null;
				const s = e.grey ? n.greyVector || n.grey : n.filledVector || n.filled,
					r = `${i.a.assetPath}/${s}`;
				if (e.grey && r.endsWith(".svg")) {
					const t = `url(${r}) center/cover`;
					return o.a.createElement("div", {
						className: Object(c.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return o.a.createElement("img", {
					className: e.className,
					src: r
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/components/Governance/Token/index.tsx"),
				l = n("./src/reddit/helpers/governance/tokens.ts"),
				u = n("./src/reddit/selectors/crypto/points.ts"),
				m = n("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				p = n.n(m);
			const h = Object(a.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(u.b)(e, t)
			});
			t.a = Object(r.b)(h)((function(e) {
				var t;
				return o.a.createElement("div", {
					className: Object(i.a)(p.a.container, e.className, {
						[p.a.small]: e.small
					})
				}, o.a.createElement(d.a, {
					className: Object(i.a)(p.a.token, {
						[p.a.small]: e.small
					}),
					grey: e.grey,
					subredditId: e.subredditId
				}), Object(c.a)(Object(l.b)(e.amount, null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.displayConversion)), e.additionalText || null)
			}))
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				i = n.n(a),
				c = n("./src/lib/lessComponent.tsx");
			const d = c.a.div("IconWrapper", i.a),
				l = c.a.div("TextWrapper", i.a);

			function u(e) {
				const {
					className: t,
					color: n,
					icon: s,
					subtitle: a,
					title: c,
					textWrapperClassName: u
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(t, i.a.wrapper),
					style: n && {
						borderColor: n
					} || {}
				}, o.a.createElement("div", {
					className: i.a.leftSideRectangle,
					style: n && {
						backgroundColor: n
					} || {}
				}), s ? o.a.createElement(d, null, s) : o.a.createElement(d, null), o.a.createElement(l, {
					className: u
				}, o.a.createElement("div", {
					className: i.a.title
				}, c), a && o.a.createElement("div", {
					className: i.a.subtitle
				}, a)))
			}
		},
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/InfoTextTooltip/hooked.m.less"),
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
				...t
			}) {
				const [n, a] = Object(s.useState)(e);
				return Object(s.useEffect)(() => {
					let t = window.setTimeout(() => {
						t = void 0, a(e)
					}, 0);
					return () => {
						t && window.clearTimeout(t), a(!1)
					}
				}, [e]), e ? o.a.createElement("div", c({
					className: Object(r.a)(i.a.tooltip, t.className, {
						[i.a.visible]: n
					})
				}, t.popperProps), t.children, n && o.a.createElement("div", c({
					className: i.a.arrow
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
				return h
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return g
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
			class h extends r.a.Component {
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
			const b = i.f + 10,
				f = r.a.memo(() => {
					const [e, t] = Object(o.useState)("-500px"), n = Object(o.useContext)(c.a);
					return r.a.createElement(m.Consumer, null, o => o && r.a.createElement("div", {
						className: Object(a.a)(u.a.wrapper, {
							[u.a.wrapperExp]: n
						}),
						"data-testid": "jump-to-content"
					}, r.a.createElement(d.s, {
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
							o.focus(), o.scrollIntoView(), window.scrollBy(0, -b)
						}
					}, s.fbt._("Jump to content", null, {
						hk: "2zWOmQ"
					})), r.a.createElement("div", {
						className: Object(a.a)(u.a.rightBorder, {
							[u.a.rightBorderExp]: n
						})
					})))
				}),
				g = r.a.memo(() => r.a.createElement(p.Consumer, null, e => r.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				i = n("./src/reddit/helpers/overlay/index.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e) {
				const {
					children: t,
					className: n,
					to: s,
					...r
				} = e, d = Object(i.b)(s);
				return o.a.createElement(a.a, c({
					className: n,
					to: d
				}, r), t)
			}

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const {
					isOverlay: t,
					...n
				} = e, s = t ? d : r.a;
				return o.a.createElement(s, l({}, n, {
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
				return v
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				c = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				d = n("./src/reddit/components/RichTextJson/elements.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/higherOrderComponents/asModal/index.tsx"),
				p = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/layout/row/Inline/index.tsx"),
				f = n("./src/reddit/layout/row/RightAlign/index.tsx"),
				g = n("./src/reddit/components/MarkdownHelp/index.m.less"),
				x = n.n(g),
				C = n("./src/lib/lessComponent.tsx");
			const v = "Markdown_Help__Modal",
				E = C.a.wrapped(b.a, "Section", x.a),
				_ = C.a.div("Container", x.a),
				O = C.a.table("Table", x.a),
				y = C.a.p("P", x.a);
			class k extends r.a.Component {
				render() {
					const e = s.fbt._("italics", null, {
							hk: "9wBJ9"
						}),
						t = s.fbt._("bold", null, {
							hk: "yoD2u"
						}),
						n = s.fbt._("item", null, {
							hk: "20ZnoS"
						}),
						o = s.fbt._("quoted text", null, {
							hk: "1Lvb4b"
						}),
						a = s.fbt._("strikethrough", null, {
							hk: "UcaLr"
						}),
						u = s.fbt._("spoilers", null, {
							hk: "372XyC"
						});
					return r.a.createElement(c.a, null, r.a.createElement(i.a, {
						onClosePressed: this.props.closeModal,
						title: s.fbt._("Markdown Help", null, {
							hk: "w08E2"
						})
					}), r.a.createElement(_, null, r.a.createElement(O, {
						className: x.a.helpTable
					}, r.a.createElement("tr", null, r.a.createElement(d.s, null, r.a.createElement(d.j, null, s.fbt._("Type this:", null, {
						hk: "VDjXQ"
					}))), r.a.createElement(d.s, null, r.a.createElement(d.j, null, s.fbt._("to get this:", null, {
						hk: "4zlZi9"
					})))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, "*", e, "*")), r.a.createElement(d.p, null, r.a.createElement(d.f, null, e))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, "**", t, "**")), r.a.createElement(d.p, null, r.a.createElement(d.b, null, t))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, "[reddit!](https://reddit.com)")), r.a.createElement(d.p, null, r.a.createElement(d.a, {
						href: "https://www.reddit.com"
					}, "reddit!"))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, "* ", n, " 1"), r.a.createElement(d.j, null, "* ", n, " 2"), r.a.createElement(d.j, null, "* ", n, " 3")), r.a.createElement(d.p, null, r.a.createElement(d.v, null, r.a.createElement(d.g, null, n, " 1"), r.a.createElement(d.g, null, n, " 2"), r.a.createElement(d.g, null, n, " 3")))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, "> ", o)), r.a.createElement(d.p, null, r.a.createElement(d.c, null, o))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, "~~", a, "~~")), r.a.createElement(d.p, null, r.a.createElement(d.d, null, a))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, s.fbt._("super^script", null, {
						hk: "2WteOp"
					}))), r.a.createElement(d.p, null, s.fbt._("super{=script}", [s.fbt._param("=script", r.a.createElement(d.m, null, s.fbt._("script", null, {
						hk: "4a2qMi"
					})))], {
						hk: "1VvC4z"
					}))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, `>!${u}!<`)), r.a.createElement(d.p, null, r.a.createElement(l.a, null, u)))), r.a.createElement(y, null, s.fbt._("Check the {=commenting wiki page} for more help", [s.fbt._param("=commenting wiki page", r.a.createElement(d.a, {
						href: "https://www.reddit.com/wiki/commenting"
					}, s.fbt._("commenting wiki page", null, {
						hk: "25UBE"
					})))], {
						hk: "1J9oBy"
					}))), r.a.createElement(E, null, r.a.createElement(f.a, null, r.a.createElement(h.k, {
						onClick: this.props.closeModal,
						"data-redditstyle": !0
					}, s.fbt._("Close", null, {
						hk: "4gbyAA"
					})))))
				}
			}
			const w = Object(a.b)(null, (e, t) => ({
				closeModal: () => e(Object(p.i)(v))
			}))(k);
			t.a = Object(m.a)(Object(u.c)(w))
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
				return h
			})), n.d(t, "n", (function() {
				return b
			})), n.d(t, "p", (function() {
				return f
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "m", (function() {
				return C
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "q", (function() {
				return k
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "l", (function() {
				return S
			})), n.d(t, "t", (function() {
				return j
			})), n.d(t, "u", (function() {
				return P
			})), n.d(t, "r", (function() {
				return T
			})), n.d(t, "a", (function() {
				return I
			})), n.d(t, "s", (function() {
				return N
			})), n.d(t, "c", (function() {
				return D
			}));
			var s = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/Input/ModalInput.tsx"),
				d = n("./src/reddit/icons/svgs/Close/index.tsx"),
				l = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const p = o.a.wrapped(d.a, "CloseIcon", u.a),
				h = o.a.section("ModalBody", u.a),
				b = o.a.section("ModalPostPreview", u.a),
				f = o.a.p("ModalText", u.a),
				g = o.a.div("ModalSmallText", u.a),
				x = o.a.div("ModalDescriptionText", u.a),
				C = o.a.div("ModalMetaText", u.a),
				v = o.a.label("ModalFormItem", u.a),
				E = o.a.wrapped(c.a, "ModalInput", u.a),
				_ = o.a.label("ModalInputLabel", u.a),
				O = o.a.footer("ModalFooter", u.a),
				y = o.a.header("ModalHeader", u.a),
				k = o.a.div("ModalTitle", u.a),
				w = o.a.div("ModalAnnotation", u.a),
				S = o.a.div("ModalMain", u.a),
				j = o.a.textarea("TextArea", u.a),
				P = o.a.wrapped(i.k, "WarningButton", u.a),
				T = o.a.wrapped(i.k, "PrimaryButton", u.a),
				I = o.a.wrapped(i.n, "CancelButton", u.a),
				N = o.a.wrapped(i.q, "RemoveButton", u.a),
				D = ({
					className: e,
					...t
				}) => a.a.createElement(i.s, m({
					kind: i.a.Button,
					priority: i.b.Primary,
					className: Object(s.a)(u.a.ConfirmButton, e)
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/Row.tsx"),
				h = n("./src/reddit/icons/fonts/index.tsx"),
				b = n("./src/reddit/selectors/tooltip.ts"),
				f = n("./src/reddit/components/OverflowMenu/index.m.less"),
				g = n.n(f);
			const x = d.a.wrapped(m.a, "_Dropdown", g.a),
				C = Object(u.a)(x),
				v = d.a.button("MenuButton", g.a),
				E = d.a.wrapped(p.b, "DropdownRow", g.a),
				_ = Object(i.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(b.b)(t)(e)
				}),
				O = Object(a.b)(_, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				y = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = O(e => r.a.createElement(v, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": s.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[g.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: y(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : r.a.createElement(h.a, {
				name: "overflow_horizontal",
				className: g.a.MenuIcon
			}), r.a.createElement(C, {
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
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/components/HumanDate/index.tsx"),
				r = n("./src/lib/timeUntil/index.ts"),
				a = n("./node_modules/react/index.js"),
				i = n.n(a);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return i.a.createElement("span", {
					className: e.className
				}, t ? c._("Voting closed {timeAgo}", [c._param("timeAgo", i.a.createElement(o.d, {
					seconds: e.poll.endsAt / s.Qb
				}))], {
					hk: "3OERID"
				}) : Object(r.a)(new Date(e.poll.endsAt)))
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
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/timezone/index.ts"),
				o = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/utils.ts"),
				r = n("./src/reddit/components/PollCreator/EndDatePicker/utils.ts");

			function a(e, t) {
				var n;
				const {
					date: a,
					time: i
				} = Object(r.a)(e), c = Object(s.b)(), d = c ? Object(s.d)(c) : null, l = new Date, {
					minDate: u,
					minTime: m,
					formattedMinDatetime: p
				} = Object(r.c)(l), h = Object(o.a)(), b = Object(r.d)({
					date: u,
					time: m
				});
				return {
					date: a,
					time: i,
					timeZoneAbbr: null !== (n = null == d ? void 0 : d.abbreviation) && void 0 !== n ? n : "",
					onChange: e => {
						Object.values(e).every(e => e.length) && t(Object(r.d)({
							date: a,
							time: i,
							...e
						}))
					},
					maxDate: h,
					minDate: u,
					minTime: m,
					fullMinDatetime: b,
					formattedMinDatetime: p
				}
			}
		},
		"./src/reddit/components/PollCreator/EndDatePicker/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			}));
			var s = n("./src/lib/timezone/index.ts"),
				o = n("./src/reddit/helpers/scheduledPosts/index.ts");
			const r = () => {
					const e = new Date;
					return e.setDate(e.getDate() + 3), e
				},
				a = e => {
					const [t, n] = Object(o.i)(Object(s.g)(e));
					return {
						date: t,
						time: n
					}
				},
				i = ({
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
						time: s
					} = a(t);
					return {
						minDate: n,
						minTime: s,
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
			var s = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/lib/memoizeByReference/index.ts"),
				u = n("./src/reddit/actions/postCreation/general.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/constants/keycodes.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/controls/Input/index.tsx"),
				f = n("./src/reddit/icons/svgs/Close/index.tsx"),
				g = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				x = n("./src/reddit/icons/svgs/Search/index.tsx"),
				C = n("./src/reddit/layout/row/Inline/index.tsx"),
				v = n("./src/reddit/models/PostCreationForm/index.ts"),
				E = n("./src/reddit/selectors/postCollection.ts"),
				_ = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				O = n("./src/reddit/components/HumanDate/index.tsx"),
				y = n("./src/reddit/helpers/name/index.ts"),
				k = n("./src/reddit/models/Subreddit/index.ts"),
				w = n("./src/reddit/models/User/index.ts"),
				S = n("./src/reddit/selectors/subreddit.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				P = n("./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less"),
				T = n.n(P),
				I = n("./src/lib/lessComponent.tsx");
			const {
				fbt: N
			} = n("./node_modules/fbt/lib/FbtPublic.js"), D = I.a.div("Container", T.a), M = I.a.h2("PostTitle", T.a), R = I.a.div("MetaLine", T.a), L = I.a.span("SubredditName", T.a), A = I.a.time("InfoSpan", T.a), F = Object(c.c)({
				subreddit: (e, {
					collection: {
						subredditId: t
					}
				}) => t ? Object(S.Q)(e, {
					subredditId: t
				}) : void 0,
				user: j.k
			});
			class B extends a.a.PureComponent {
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
						onHoverActionText: s
					} = this.props, o = t && Object(k.h)(t) && n ? Object(y.d)(Object(w.e)(n)) : t ? t.displayText : "", r = e.postIds.length;
					return a.a.createElement(D, {
						onClick: this.onClick,
						className: T.a.container
					}, a.a.createElement(M, {
						"data-redditstyle": !0
					}, e.title), a.a.createElement(R, {
						"data-redditstyle": !0
					}, o && a.a.createElement(L, {
						"data-redditstyle": !0
					}, o), o && a.a.createElement(_.b, null), a.a.createElement(A, null, N._({
						"*": "{number of posts} posts",
						_1: "1 post"
					}, [N._plural(r, "number of posts")], {
						hk: "1Uy96U"
					})), a.a.createElement(_.b, null), a.a.createElement(A, null, N._("created {time}", [N._param("time", a.a.createElement(O.d, {
						seconds: e.createdAtUTC
					}))], {
						hk: "2cUc5m"
					}))), s && a.a.createElement("div", {
						className: T.a.onHoverActionText
					}, a.a.createElement("span", null, s)))
				}
			}
			var U = Object(i.b)(F)(B),
				W = n("./src/reddit/helpers/trackers/postCollection.ts"),
				V = n("./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less"),
				G = n.n(V);
			const H = `${s.a.assetPath}/img/snoo-drafts.png`,
				z = I.a.div("TopRow", G.a),
				K = I.a.div("TitleRow", G.a),
				q = I.a.div("DetailsContainer", G.a),
				Q = I.a.wrapped(C.a, "ButtonRow", G.a),
				Y = I.a.div("CloseWrapper", G.a),
				J = I.a.wrapped(f.a, "Close", G.a),
				Z = I.a.div("Empty", G.a),
				X = I.a.img("EmptyImage", G.a),
				$ = I.a.p("EmptyText", G.a),
				ee = I.a.div("FilterWrapper", G.a),
				te = I.a.wrapped(b.a, "FilterInput", G.a),
				ne = I.a.wrapped(x.a, "SearchIcon", G.a),
				se = I.a.wrapped(g.a, "PlusIcon", G.a),
				oe = I.a.wrapped(h.o, "CreateCollectionButton", G.a),
				re = Object(l.a)((e, t) => {
					const n = t.toLowerCase();
					return e.filter(e => e.title.toLowerCase().includes(n))
				}),
				ae = Object(c.c)({
					collections: E.v
				}),
				ie = Object(i.b)(ae, (e, {
					postId: t,
					isOverlay: n
				}) => ({
					onOpenCreateCollectionModal: () => {
						let s = v.b;
						t && (s = Object(v.u)(t, !!n)), e(Object(u.y)(s))
					}
				}));
			class ce extends a.a.PureComponent {
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
					}, this.renderItem = e => a.a.createElement(U, {
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
					return a.a.createElement(Z, null, a.a.createElement(X, {
						src: H
					}), a.a.createElement($, null, o.fbt._("Your collections will live here", null, {
						hk: "FCxWg"
					})))
				}
				renderNoFilterMatches() {
					return a.a.createElement(Z, null, a.a.createElement($, null, o.fbt._("No collection matching filter", null, {
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
						const t = re(e, this.state.filterStr);
						n = 0 === t.length ? this.renderNoFilterMatches() : t.map(this.renderItem)
					}
					return a.a.createElement("div", {
						className: G.a.wrapper,
						"data-redditstyle": !0
					}, a.a.createElement(z, null, a.a.createElement(K, {
						"data-redditstyle": !0
					}, t || o.fbt._("My collections", null, {
						hk: "3yKovS"
					}), a.a.createElement(Y, {
						onClick: this.close
					}, a.a.createElement(J, {
						"data-redditstyle": !0
					}))), a.a.createElement(ee, null, a.a.createElement(ne, null), a.a.createElement(te, {
						placeholder: o.fbt._("Find a collection", null, {
							hk: "3DbFBU"
						}),
						value: this.state.filterStr,
						onChange: this.onFilterStringChange
					}))), a.a.createElement(q, null, n), a.a.createElement(Q, null, a.a.createElement(oe, {
						onClick: this.handleCreateCollectionClicked
					}, a.a.createElement(se, null), o.fbt._("Create a collection", null, {
						hk: "37xJVm"
					}))))
				}
			}
			const de = Object(d.a)(ie(Object(m.c)(ce)));
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/lib/formatApiError/index.ts"),
				l = n("./src/reddit/actions/postCollection/index.ts"),
				u = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = n("./src/reddit/constants/postCreation.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/controls/ErrorText/index.tsx"),
				b = n("./src/reddit/controls/Input/index.tsx"),
				f = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = n("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				x = n("./src/reddit/icons/svgs/Close/index.tsx"),
				C = n("./src/reddit/layout/row/Inline/index.tsx"),
				v = n("./src/reddit/selectors/postCollection.ts"),
				E = n("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less"),
				_ = n.n(E),
				O = n("./src/lib/lessComponent.tsx");
			const y = O.a.div("Container", _.a),
				k = O.a.div("Content", _.a),
				w = O.a.div("TitleRow", _.a),
				S = O.a.div("Details", _.a),
				j = O.a.wrapped(u.g, "Footer", _.a),
				P = O.a.wrapped(p.n, "CancelButton", _.a),
				T = O.a.div("CloseWrapper", _.a),
				I = O.a.wrapped(x.a, "CloseIcon", _.a),
				N = O.a.label("Label", _.a),
				D = O.a.wrapped(b.a, "TitleInput", _.a),
				M = O.a.wrapped(g.a, "AddCollectionIcon", _.a),
				R = O.a.wrapped(p.k, "PrimaryActionButton", _.a),
				L = O.a.wrapped(f.a, "LoadingIcon", _.a),
				A = O.a.wrapped(h.b, "ErrorText", _.a),
				F = Object(i.c)({
					collection: v.q,
					error: v.c,
					isPending: v.g
				}),
				B = Object(a.b)(F, (e, t) => ({
					onCreate: (t, n) => e(Object(l.b)(t, n)),
					onUpdate: n => e(Object(l.h)(t.collectionId, n))
				}));
			class U extends r.a.PureComponent {
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
					} = this.props, o = !e, a = !!this.state.collectionTitle.trim(), i = o ? s.fbt._("Create", null, {
						hk: "Ijp7n"
					}) : s.fbt._("Save", null, {
						hk: "4yMsMq"
					});
					return r.a.createElement(y, null, r.a.createElement(T, {
						onClick: this.props.onCancel
					}, r.a.createElement(I, null)), r.a.createElement(k, null, o && r.a.createElement(r.a.Fragment, null, r.a.createElement(w, null, r.a.createElement(M, null), s.fbt._("Create a collection", null, {
						hk: "3ndxk5"
					})), r.a.createElement(S, null, s.fbt._("Group posts into one feed. Create a series of events or just a group of random things. Make something awesome!", null, {
						hk: "2eCAQw"
					}))), r.a.createElement(N, null, o ? s.fbt._("Give a title for your collection", null, {
						hk: "Uaqbe"
					}) : s.fbt._("Edit title", null, {
						hk: "1jzweg"
					}), r.a.createElement(D, {
						maxLength: m.e,
						onChange: this.onTitleChange,
						placeholder: s.fbt._("Enter title", null, {
							hk: "3B0iRI"
						}),
						value: this.state.collectionTitle
					}))), r.a.createElement(j, null, r.a.createElement(C.a, null, r.a.createElement(P, {
						onClick: this.props.onCancel
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(R, {
						onClick: this.onPrimaryButtonClick,
						disabled: n || !a
					}, n ? r.a.createElement(L, {
						sizePx: 10
					}) : i)), t && r.a.createElement(A, null, Object(d.a)(t))))
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/postCreation/general.ts"),
				d = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx"),
				l = n("./src/reddit/components/FocusableContent/index.tsx"),
				u = n("./src/reddit/components/MarkdownHelp/index.tsx"),
				m = n("./src/reddit/components/PostCreationForm/Prompt/index.tsx"),
				p = n("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				h = n("./src/reddit/constants/keycodes.ts"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = n("./src/reddit/models/PostCreationForm/index.ts"),
				x = n("./src/reddit/selectors/activeModalId.ts"),
				C = n("./src/reddit/selectors/editorContent.ts"),
				v = n("./src/reddit/components/PostCreationForm/MarkdownEditor/index.m.less"),
				E = n.n(v),
				_ = n("./src/lib/lessComponent.tsx");
			const O = _.a.wrapped(f.a, "LoadingIcon", E.a),
				y = ({
					isFilled: e,
					...t
				}) => r.a.createElement(O, t),
				k = _.a.span("ModeDescription", E.a),
				w = _.a.div("ModeWrapper", E.a),
				S = _.a.wrapped(d.a, "MarkdownHelpButton", E.a),
				j = _.a.div("Toolbar", E.a),
				P = Object(i.c)({
					activeModalId: x.a,
					isConverting: e => Object(C.a)(e)
				}),
				T = Object(a.b)(P, (e, t) => ({
					onChange: n => {
						e(Object(c.c)(n)), t.onChange && t.onChange(n)
					},
					helpModalToggled: () => e(Object(c.y)(u.b)),
					switchToRTEModalToggled: () => e(Object(c.y)(m.a.SWITCH_TO_RTE_MODAL_ID))
				}));
			class I extends r.a.Component {
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
							keyCode: s
						} = e;
						(t || n) && s === h.a.Enter && this.props.onSubmit()
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
						focusableContentMarkdownClassName: o,
						value: a
					} = this.props, {
						isFocused: i
					} = this.state;
					return r.a.createElement("div", {
						className: e
					}, r.a.createElement(l.a, {
						className: o,
						isFocused: i
					}, r.a.createElement(j, null, r.a.createElement(w, null, r.a.createElement(k, null, s.fbt._("Markdown", null, {
						hk: "42KuwU"
					})), r.a.createElement(S, {
						onClick: this.props.helpModalToggled
					})), r.a.createElement(N, {
						isConverting: t,
						onClick: this.handleSwitchModeClick
					})), r.a.createElement(p.a, {
						disabled: !!this.props.disabled,
						initialHeight: this.props.initialHeight,
						innerRef: this.setTextAreaRef,
						onBlur: this.onBlur,
						onChange: this.onChange,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.onFocus,
						onKeyDown: this.handleKeyDown,
						placeholder: n,
						value: a
					})), this.props.activeModalId === u.b && r.a.createElement(u.a, null), this.props.activeModalId === m.a.SWITCH_TO_RTE_MODAL_ID && r.a.createElement(m.b, {
						modalId: m.a.SWITCH_TO_RTE_MODAL_ID,
						onCancel: this.props.switchToRTEModalToggled,
						onConfirm: this.handleSwitchToRTEConfirm
					}))
				}
			}
			const N = r.a.memo(({
				isConverting: e,
				onClick: t
			}) => {
				const n = s.fbt._("Switch to Fancy Pants Editor", null, {
					hk: "1AKY7t"
				});
				return r.a.createElement(b.s, {
					priority: b.b.Plain,
					size: b.c.XS,
					onClick: t,
					Icon: e ? y : void 0,
					text: n
				})
			});
			t.a = T(I)
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
				return s
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = 20,
				o = 180
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = n("./src/reddit/constants/keycodes.ts"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = n("./src/reddit/controls/TextButton/index.tsx"),
				u = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				m = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less"),
				p = n.n(m),
				h = n("./src/lib/lessComponent.tsx");
			const b = h.a.wrapped(c.k, "PrimaryButton", p.a),
				f = h.a.wrapped(a.p, "ModalText", p.a);
			class g extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === i.a.Escape && this.props.onClose()
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
					return o.a.createElement(a.e, null, o.a.createElement(a.i, null, o.a.createElement(u.a, null, o.a.createElement(a.q, null, this.props.titleText), o.a.createElement(l.a, {
						onClick: this.props.onClose
					}, o.a.createElement(a.b, null)))), o.a.createElement(a.l, null, o.a.createElement(f, null, this.props.bodyText)), o.a.createElement(a.g, null, o.a.createElement(a.a, {
						onClick: this.props.onSecondaryAction
					}, t ? o.a.createElement(d.a, {
						sizePx: 16
					}) : this.props.secondaryButtonText), o.a.createElement(b, {
						onClick: this.props.onPrimaryAction
					}, e ? o.a.createElement(d.a, {
						sizePx: 16
					}) : this.props.primaryButtonText)))
				}
			}
			t.a = Object(r.a)(g)
		},
		"./src/reddit/components/PostCreationForm/Prompt/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s, o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx");
			! function(e) {
				e.LOAD_DRAFT_MODAL_ID = "POST_CREATION__LOAD_DRAFT_MODAL_ID", e.MAX_DRAFTS_MODAL_ID = "POST_CREATION__MAX_DRAFTS_MODAL_ID", e.SWITCH_TO_RTE_MODAL_ID = "MARKDOWN_EDITOR__SWITCH_TO_RTE_MODAL_ID"
			}(s || (s = {}));
			const c = {
					title: () => o.fbt._("Load draft", null, {
						hk: "VQ7SS"
					}),
					body: () => o.fbt._("Loading this draft will discard your current post.", null, {
						hk: "49vMci"
					}),
					confirm: () => o.fbt._("Load Draft", null, {
						hk: "29mFSs"
					}),
					cancel: () => o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				},
				d = {
					title: () => o.fbt._("Save draft", null, {
						hk: "36SGct"
					}),
					body: () => o.fbt._("Looks like you’ve hit your max number of drafts. Please delete one to make room.", null, {
						hk: "4g9gOF"
					}),
					confirm: () => o.fbt._("Manage Drafts", null, {
						hk: "3a6SXJ"
					}),
					cancel: () => o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				},
				l = {
					title: () => o.fbt._("Switch to Fancy Pants Editor", null, {
						hk: "22mr8J"
					}),
					body: () => o.fbt._("Switching to Fancy Pants Editor may result in a loss of content", null, {
						hk: "1cWryd"
					}),
					confirm: () => o.fbt._("Switch", null, {
						hk: "36pRzE"
					}),
					cancel: () => o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				},
				u = {
					[s.LOAD_DRAFT_MODAL_ID]: c,
					[s.MAX_DRAFTS_MODAL_ID]: d,
					[s.SWITCH_TO_RTE_MODAL_ID]: l
				};
			class m extends a.a.PureComponent {
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
					return a.a.createElement(i.a, {
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
			var s = n("./node_modules/lodash/once.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/lodash/range.js"),
				c = n.n(i),
				d = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/FallbackDateInput/index.m.less"),
				l = n.n(d),
				u = n("./src/lib/lessComponent.tsx");
			const m = u.a.div("Container", l.a),
				p = u.a.select("Select", l.a),
				h = u.a.span("Delimiter", l.a),
				b = 2018,
				f = e => {
					const t = new Date;
					return new Date(t.getFullYear(), e).toLocaleDateString([], {
						month: "short"
					})
				},
				g = e => {
					const [t, n, s] = e.split("-").map(Number);
					return {
						year: t,
						month: n - 1,
						day: s
					}
				};
			class x extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onChange = e => {
						const t = {
								...g(this.props.value),
								...e
							},
							{
								year: n,
								month: s,
								day: o
							} = t,
							r = new Date(Date.UTC(n, s, o)).toISOString().slice(0, 10);
						this.props.onChange(r)
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
					return a.a.createElement(m, {
						className: this.props.className
					}, a.a.createElement(p, {
						onChange: this.onChangeMonth,
						value: t
					}, c()(12).map(e => a.a.createElement("option", {
						key: e,
						value: e
					}, f(e)))), a.a.createElement(h, null, "/"), a.a.createElement(p, {
						onChange: this.onChangeDay,
						value: n
					}, c()(1, 32).map(e => a.a.createElement("option", {
						key: e,
						value: e
					}, ("0" + e).slice(-2)))), a.a.createElement(h, null, "/"), a.a.createElement(p, {
						onChange: this.onChangeYear,
						value: e
					}, c()(b, b + 10).map(e => a.a.createElement("option", {
						key: e,
						value: e
					}, e))))
				}
			}
			var C = x,
				v = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.m.less"),
				E = n.n(v);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = o()(() => {
					const e = document.createElement("input");
					return e.setAttribute("type", "date"), e.setAttribute("value", "not-a-date"), "not-a-date" !== e.value
				}),
				y = u.a.input("Input", E.a);

			function k(e) {
				return O() ? a.a.createElement(y, _({
					type: "date"
				}, e, {
					onChange: t => e.onChange(t.target.value)
				})) : a.a.createElement(C, e)
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
			var s = n("./node_modules/lodash/once.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/lodash/clamp.js"),
				c = n.n(i),
				d = n("./src/reddit/components/FocusableContent/index.tsx"),
				l = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/FallbackTimeInput/index.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");
			const p = m.a.wrapped(d.a, "Container", u.a),
				h = m.a.input("Input", u.a),
				b = m.a.span("Delimiter", u.a),
				f = e => ("0" + e).slice(-2),
				g = (e, t) => {
					const n = +e.slice(-2);
					if (Number.isInteger(n)) return n > t ? 0 : n
				};
			class x extends a.a.PureComponent {
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
					return a.a.createElement(p, {
						className: this.props.className,
						isFocused: e
					}, a.a.createElement(h, {
						type: "number",
						onChange: this.onChangeHour,
						onFocus: this.onHourInputFocus,
						onBlur: this.onHourInputBlur,
						value: f(this.state.hour)
					}), a.a.createElement(b, null, ":"), a.a.createElement(h, {
						type: "number",
						onChange: this.onChangeMinute,
						onFocus: this.onMinuteInputFocus,
						onBlur: this.onMinuteInputBlur,
						value: f(this.state.minute)
					}))
				}
			}
			var C = x,
				v = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.m.less"),
				E = n.n(v);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = o()(() => {
					const e = document.createElement("input");
					return e.setAttribute("type", "time"), e.setAttribute("value", "not-a-time"), "not-a-time" !== e.value
				}),
				y = m.a.input("TimeInput", E.a);

			function k(e) {
				return O() ? a.a.createElement(y, _({
					type: "time"
				}, e, {
					onChange: t => e.onChange(t.target.value)
				})) : a.a.createElement(C, e)
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.m.less": function(e, t, n) {
			e.exports = {
				select: "_1gQeiuYndtyKo6Or5iS8xL"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/helpers/scheduledPosts/index.ts"),
				c = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.m.less"),
				d = n.n(c);
			const l = e => {
				const t = e.map(i.d);
				return t.sort((e, t) => {
					const n = -1440,
						{
							offset: s = n
						} = e,
						{
							offset: o = n
						} = t;
					return o - s || (e.displayText < t.displayText ? -1 : 1) || 0
				}), t
			};
			class u extends o.a.PureComponent {
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
					const e = (await Object(a.a)(() => n.e("TimezoneList").then(n.bind(null, "./src/lib/timezone/timezoneList.ts")))).default,
						t = l(e);
					this.setState({
						timezoneOptions: t
					}), u.cachedTimezoneOptions = t
				}
				componentDidMount() {
					u.cachedTimezoneOptions || this.loadTimezones()
				}
				render() {
					return o.a.createElement("select", {
						onChange: this.onSelect,
						value: this.props.selectedTimezoneName,
						className: Object(r.a)(d.a.select, this.props.className)
					}, this.state.timezoneOptions.map(({
						name: e,
						displayText: t
					}) => o.a.createElement("option", {
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/lib/timezone/index.ts"),
				l = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/utils.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/controls/RadioInput/index.tsx"),
				b = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				f = n("./src/reddit/helpers/scheduledPosts/index.ts"),
				g = n("./src/reddit/helpers/trackers/postEvent.ts"),
				x = n("./src/reddit/icons/svgs/Clear/index.tsx"),
				C = n("./src/reddit/layout/row/Inline/index.tsx"),
				v = n("./src/reddit/models/PostCreationForm/index.ts"),
				E = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.tsx"),
				_ = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.tsx"),
				O = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.tsx"),
				y = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/index.m.less"),
				k = n.n(y);
			const w = 240,
				S = () => {
					const e = new Date;
					e.setMinutes(60);
					const t = Object(d.g)(e);
					return e.setMinutes(e.getMinutes() + w), {
						startDate: t,
						endDate: Object(d.g)(e),
						submitTime: v.j.Now,
						timezoneName: Object(d.b)() || d.a
					}
				},
				j = c.a.div("Container", k.a),
				P = c.a.div("Content", k.a),
				T = c.a.div("TitleRow", k.a),
				I = c.a.hr("Hr", k.a),
				N = c.a.wrapped(_.a, "TimeInput", k.a),
				D = c.a.div("TimeSelectionRow", k.a),
				M = c.a.div("RadioOptionContent", k.a),
				R = c.a.span("OptionDetails", k.a),
				L = c.a.wrapped(h.a, "RadioInput", k.a),
				A = c.a.wrapped(b.a, "RadioOption", k.a),
				F = c.a.span("Delimiter", k.a),
				B = c.a.wrapped(l.g, "Footer", k.a),
				U = c.a.wrapped(p.n, "CancelButton", k.a),
				W = c.a.wrapped(p.n, "DeleteButton", k.a),
				V = c.a.div("ErrorMessage", k.a),
				G = c.a.wrapped(x.a, "ClearIcon", k.a);
			class H extends r.a.PureComponent {
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
							n.setMinutes(n.getMinutes() + w);
							const [s, o] = Object(f.i)(Object(d.g)(n));
							this.setState({
								endDate: s,
								endTime: o
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
							startTime: o
						} = this.state;
						if (!(n && o && e && t)) return s.fbt._("Please enter valid start and end time", null, {
							hk: "2IyBsT"
						});
						const r = Object(d.f)(Object(f.a)(n, o)),
							a = Object(d.f)(Object(f.a)(e, t));
						return r < (this.currentTimezone === this.state.timezoneName ? new Date : new Date(Date.now() - i.A)) ? s.fbt._("Event start time needs to be in the future", null, {
							hk: "3oL3LM"
						}) : a < r ? s.fbt._("End time must be after start time", null, {
							hk: "3C3TKE"
						}) : null
					}, this.getSubmitAtLabel = () => {
						const {
							startDate: e,
							startTime: t
						} = this.state;
						return Object(f.b)(e, t)
					}, this.renderSubmitTimeRadio = () => r.a.createElement(L, {
						value: this.state.submitTime,
						name: "submit_time",
						onChange: this.onSubmitTimeChange
					}, r.a.createElement(A, {
						showButton: !0,
						value: v.j.Now
					}, r.a.createElement(M, null, r.a.createElement("span", null, s.fbt._("Submit post now", null, {
						hk: "2ueTnc"
					})), r.a.createElement(R, null, s.fbt._("Submitting post before your event allows people to follow your event and come back at the event time", null, {
						hk: "3LTavv"
					})))), r.a.createElement(A, {
						showButton: !0,
						value: v.j.AtEventTime
					}, r.a.createElement(M, null, r.a.createElement("span", null, this.getSubmitAtLabel()), r.a.createElement(R, null, s.fbt._("This post will be editable and hidden from people visiting your community until the event starts.", null, {
						hk: "1fGKlZ"
					})))));
					const t = e.schedule || S(),
						[n, o] = Object(f.i)(t.startDate),
						[a, c] = Object(f.i)(t.endDate);
					this.state = {
						startDate: n,
						startTime: o,
						endDate: a,
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
					return r.a.createElement(j, null, r.a.createElement(P, null, r.a.createElement(T, null, s.fbt._("When is the event?", null, {
						hk: "2fTD7f"
					})), r.a.createElement(D, null, s.fbt._("{start time}{to}{end time}", [s.fbt._param("start time", r.a.createElement("fieldset", null, r.a.createElement("legend", null, s.fbt._("Start time", null, {
						hk: "3nqplI"
					})), r.a.createElement(E.a, {
						max: this.maxDate,
						onChange: this.onStartDateChange,
						value: this.state.startDate
					}), r.a.createElement(N, {
						onChange: this.onStartTimeChange,
						value: this.state.startTime
					}))), s.fbt._param("to", r.a.createElement(F, null, s.fbt._("to", null, {
						hk: "2tWTBK"
					}))), s.fbt._param("end time", r.a.createElement("fieldset", {
						style: {
							opacity: this.state.isEndTimeTouched ? 1 : .5
						}
					}, r.a.createElement("legend", null, s.fbt._("End time (optional)", null, {
						hk: "2XKdsz"
					})), r.a.createElement(E.a, {
						max: this.maxDate,
						onChange: this.onEndDateChange,
						value: this.state.endDate
					}), r.a.createElement(N, {
						onChange: this.onEndTimeChange,
						value: this.state.endTime
					})))], {
						hk: "3MRWfF"
					})), r.a.createElement("div", null, r.a.createElement("label", null, s.fbt._("Time zone", null, {
						hk: "3F7Bko"
					}), r.a.createElement(O.a, {
						selectedTimezoneName: this.state.timezoneName,
						onChange: this.onTimezoneChange
					}))), e && r.a.createElement(r.a.Fragment, null, r.a.createElement(I, null), r.a.createElement("fieldset", null, r.a.createElement("legend", null, s.fbt._("When do you want to submit this post?", null, {
						hk: "3kBgxg"
					})), this.renderSubmitTimeRadio()))), r.a.createElement(B, null, r.a.createElement(C.a, null, this.props.schedule && this.props.shouldShowDeleteButton && r.a.createElement(W, {
						onClick: this.onDeleteButtonClick
					}, r.a.createElement(G, null), s.fbt._("Clear", null, {
						hk: "npkgK"
					})), r.a.createElement(U, {
						onClick: this.onCancelButtonClick
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(p.k, {
						onClick: this.onApplyClick,
						disabled: !!t
					}, s.fbt._("Apply", null, {
						hk: "2TE8JD"
					}))), t && r.a.createElement(V, null, t)))
				}
			}
			t.default = Object(a.a)(Object(m.c)(H))
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/lib/timezone/index.ts"),
				o = n("./src/reddit/helpers/scheduledPosts/index.ts");
			const r = () => {
				const e = new Date;
				e.setFullYear(e.getFullYear() + 1);
				const [t] = Object(o.i)(Object(s.g)(e));
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
			var s = n("./node_modules/lodash/isEqual.js"),
				o = n.n(s),
				r = n("./src/reddit/constants/flair.ts"),
				a = n("./src/reddit/helpers/flair.ts"),
				i = n("./src/reddit/models/Flair/index.ts");
			const c = e => (e || []).find(e => e.type === i.f.Text || e.type === i.f.Image || e.type === i.f.Richtext);
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
				const s = e && t.templateId ? e[t.templateId] : void 0;
				if (!s) return {
					canSave: !1,
					reason: d.InvalidTemplate
				};
				const i = Object(a.g)(t).length;
				return 0 === i ? {
					canSave: !1,
					reason: d.TextIsEmpty
				} : i > r.g ? {
					canSave: !1,
					reason: d.TextIsTooLong
				} : Object(a.n)(t) && !Object(a.r)(s) ? {
					canSave: !1,
					reason: d.TextIsNotAllowed
				} : o()(n, t) ? {
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
			var s, o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				p = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				h = n("./src/reddit/components/FlairPreview/index.tsx"),
				b = n("./src/reddit/components/FlairSearch/index.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/models/Flair/index.ts"),
				x = n("./src/reddit/selectors/moderatorPermissions.ts"),
				C = n("./src/reddit/selectors/postFlair.ts"),
				v = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/reddit/selectors/telemetry.ts"),
				_ = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				O = n("./src/reddit/components/PostFlairPicker/index.m.less"),
				y = n.n(O);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(s || (s = {}));
			const k = (e, t = !1, n = s.UNSET) => `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${n}]`,
				w = Object(c.c)({
					flairData: C.d,
					subreddit: v.Q,
					isMod: (e, t) => !!Object(x.m)(e, t)
				});
			class S extends a.a.Component {
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
					const t = Object(_.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, n = Object(_.c)(this.props.flairs) || null;
					return Object(_.b)(e, t, n)
				}
				render() {
					const {
						props: e
					} = this, {
						previewFlair: t
					} = this.state, {
						className: n,
						flairData: s,
						subreddit: r
					} = e, i = r.displayText, {
						templates: c,
						templateIds: d
					} = s, {
						canSave: l
					} = this.canSave();
					return a.a.createElement(p.a, {
						className: n
					}, a.a.createElement(m.a, {
						onClosePressed: e.closeModal,
						title: o.fbt._("Select {subredditName} flair", [o.fbt._param("subredditName", i)], {
							hk: "1lDMWS"
						})
					}), a.a.createElement(h.a, {
						flair: t,
						flairTemplateType: g.d.LinkFlair,
						placeholderText: o.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), a.a.createElement(b.a, {
						flair: t,
						flairTemplateType: g.d.LinkFlair,
						subredditId: r.id,
						templates: c,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), a.a.createElement("div", {
						className: y.a.buttonsRow
					}, a.a.createElement(f.k, {
						disabled: !l,
						onClick: this.onApply
					}, o.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), a.a.createElement(f.n, {
						className: y.a.clearButton,
						onClick: this.onClear
					}, o.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const j = Object(i.b)(w, (e, t) => ({
				closeModal: () => e(Object(u.i)(t.modalId))
			}))(S);
			t.a = Object(l.a)(Object(d.c)(j))
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
				return N
			})), n.d(t, "a", (function() {
				return K
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/ads/index.ts"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/experiments.ts"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/controls/OutboundLink/index.tsx"),
				b = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				f = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				g = n("./src/reddit/helpers/flair.ts"),
				x = n("./src/reddit/helpers/path/index.ts"),
				C = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				v = n("./src/reddit/icons/fonts/index.tsx"),
				E = n("./src/reddit/models/Flair/index.ts"),
				_ = n("./src/reddit/models/Media/index.ts"),
				O = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				y = n("./src/lib/getShortenedLink.ts"),
				k = n("./src/reddit/components/FlairWrapper/index.tsx"),
				w = n("./node_modules/fbt/lib/FbtPublic.js"),
				S = n("./src/lib/prettyPrintNumber/index.ts"),
				j = n("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				P = n("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				T = n.n(P);
			const I = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var N, D = Object(a.b)(I)((function(e) {
					const {
						poll: t,
						resultsByVoters: n
					} = e, s = n ? n.totalVotes : "0";
					return r.a.createElement("div", {
						className: Object(l.a)(e.className, T.a.proposalMetaData)
					}, r.a.createElement("span", null, w.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [w.fbt._param("count", Object(S.a)(s)), w.fbt._plural(parseInt(s))], {
						hk: "4rP1VK"
					})), t && r.a.createElement(j.a, {
						className: T.a.proposalExpiry,
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
				V = n("./src/reddit/hooks/usePostContext.ts"),
				G = n("./src/reddit/hooks/useTheme.ts"),
				H = n("./src/telemetry/models/Outbound.ts");

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(N || (N = {}));
			const K = ({
					size: e,
					titleColor: t,
					titleType: n,
					nowrap: s,
					children: o,
					className: a,
					redditStyle: i
				}) => {
					const c = Object(G.a)();
					let d = "";
					switch (e) {
						case N.ExtraLarge:
							d = F.a.ExtraLarge;
							break;
						case N.Large:
							d = F.a.Large;
							break;
						case N.Medium:
							d = F.a.Medium;
							break;
						case N.Small:
							d = F.a.Small;
							break;
						case N.ExtraSmall:
							d = F.a.ExtraSmall
					}
					return r.a.createElement("div", {
						className: Object(l.a)(F.a.Title, a, d, {
							[F.a.isNoWrap]: s
						}),
						style: {
							"--posttitletextcolor": t || Object(O.a)({
								redditStyle: i,
								theme: c
							}).titleText
						}
					}, n ? r.a.createElement(M.b, {
						type: n
					}, o) : o)
				},
				q = ({
					className: e,
					disableVisited: t,
					titleColor: n,
					children: s,
					...o
				}) => r.a.createElement(i.a, z({}, o, {
					className: Object(l.a)(e, F.a.styledLink, {
						[F.a.isVisitedEnabled]: !t
					})
				}), s),
				Q = ({
					disableVisited: e,
					nowrap: t,
					className: n,
					children: s
				}) => r.a.createElement("div", {
					className: Object(l.a)(F.a.titleContainer, n, {
						[F.a.isNoWrap]: t,
						[F.a.isVisitedEnabled]: !e
					})
				}, s),
				Y = Object(c.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(p.q)(e, {
						pageLayer: t
					}),
					shouldOpenPostInNewTab: L.db,
					isTournamentPredictionPostV2: R.u
				}),
				J = e => {
					const {
						post: t,
						subreddit: n
					} = e, {
						isSponsored: s
					} = t, o = Object(U.a)(), a = Object(W.a)(m.Rc) === m.Wc.Enabled;
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return r.a.createElement(Q, {
						nowrap: e.nowrap
					}, r.a.createElement(Z, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return r.a.createElement(h.b, {
						href: t.source.url,
						isSponsored: s,
						postId: t.id,
						source: t.source
					}, r.a.createElement(Z, e)); {
						const i = t.media && Object(_.H)(t.media) ? Object(C.c)(t.id, n.name) : t.permalink,
							c = e.isCommentPermalink ? Object(x.b)(i) : a ? Object(f.a)(i, void 0, o) : Object(f.a)(i);
						return r.a.createElement(Q, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, s ? ((e, t) => {
							const {
								source: n
							} = Object(d.t)(e, t.imageGalleryCurrentItem);
							return n ? r.a.createElement(h.b, {
								href: n.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: n
							}, r.a.createElement(Z, t)) : r.a.createElement(Z, t)
						})(t, e) : r.a.createElement(q, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: c
						}, r.a.createElement(Z, e)))
					}
				},
				Z = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: n,
						post: s
					} = e;
					let o = e.format ? e.format(s) : s.title;
					n && "string" == typeof o && (o = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(o));
					const a = e.isCommentsPage ? M.a.PostComments : M.a.PostItem;
					return r.a.createElement(K, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: a
					}, t && r.a.createElement(k.a, {
						titleFlair: t,
						nowrap: !0,
						post: s,
						sendEvent: e.sendEvent,
						showCategoryTag: !1
					}), o)
				},
				X = e => {
					const {
						hideSourceLink: t,
						post: n
					} = e, {
						isSponsored: s
					} = n, o = e.isCommentsPage ? H.SourceElement.PostLink : H.SourceElement.ListingPostLink, a = !t && !e.isCrosspost && e.size !== N.Large && !n.isSponsored && !(n.media && Object(_.H)(n.media)) && (n.source || n.media && (n.media.type === _.o.GIFVIDEO || n.media.type === _.o.IMAGE || n.media.type === _.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (a) return r.a.createElement(b.a, {
							className: e.outboundLinkClassName,
							href: Object(_.D)(n),
							isSponsored: s,
							postId: n.id,
							source: n.source,
							sourceElement: o
						}, Object(y.a)(n), !n.isSponsored && r.a.createElement(v.a, {
							name: "external_link",
							className: F.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== N.Large && e.size !== N.ExtraLarge) return r.a.createElement(b.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: s,
						postId: n.id,
						source: n.source,
						sourceElement: o
					}, Object(y.a)(n), !n.isSponsored && r.a.createElement(v.a, {
						name: "external_link",
						className: F.a.outboundLinkIcon
					}));
					return null
				};
			class $ extends r.a.Component {
				getDynamicStyleTags() {
					return r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${F.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(s.c)(.45,Object(O.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(s.c)(.45,this.props.titleColor||Object(O.a)(this.props).titleText,Object(O.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					var e;
					const {
						className: t,
						disableFlair: n,
						flairPosition: s,
						isCommentsPage: o,
						isOverlay: a,
						poll: i,
						post: c,
						showNSFWSpoilerFlairsOnly: d,
						isTournamentPredictionPostV2: u
					} = this.props, m = s === E.b.Left, p = Object(k.b)(c), h = d ? p.filter(e => e.type === E.f.Nsfw || e.type === E.f.Spoiler) : m ? p.filter(e => Object(g.q)(e.type)) : [], b = d ? [] : m ? p.filter(e => !Object(g.q)(e.type)) : p, f = !a && !o, x = !n && h && h.length > 0 && f, C = !n && b && b.length > 0 && f, v = !(u && (null === (e = c.pollData) || void 0 === e ? void 0 : e.isPrediction));
					return r.a.createElement("div", {
						className: Object(l.a)(F.a.Component, t, c.id)
					}, !d && x && r.a.createElement(k.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), v && r.a.createElement(J, z({}, this.props, {
						leftFlair: d ? h : void 0
					})), i && r.a.createElement(D, {
						className: F.a.pollMeta,
						pollId: i.id
					}), r.a.createElement(X, this.props), C && r.a.createElement(k.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), r.a.createElement("div", {
						className: F.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${B.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = r.a.memo((function(e) {
				const t = Object(p.eb)(),
					n = Object(p.w)(t),
					s = Object(V.a)(),
					o = Object(a.e)(o => Y(o, {
						...s,
						...e,
						isCommentPermalink: n,
						pageLayer: t
					})),
					i = Object(G.a)(),
					c = Object(u.b)();
				return s ? r.a.createElement($, z({
					pageLayer: t,
					isCommentPermalink: n
				}, s, o, e, {
					theme: i,
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/config.ts");
			const {
				redditUrl: a
			} = r.a, i = `${a}/help/contentpolicy`, c = `${a}/wiki/reddiquette`;
			var d = n("./src/reddit/components/PostingSidebar/PolicyRow/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => o.a.createElement("div", {
				className: l.a.PolicyRow
			}, u._("Please be mindful of reddit's {=content policy} and practice good {=reddiquette}.", [u._param("=content policy", o.a.createElement("a", {
				href: i
			}, u._("content policy", null, {
				hk: "2PeDvo"
			}))), u._param("=reddiquette", o.a.createElement("a", {
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/icons/svgs/SnooPosting/index.tsx"),
				l = n("./src/reddit/selectors/postCreations.ts"),
				u = n("./src/reddit/components/PostingSidebar/PostingReddiquette/index.m.less"),
				m = n.n(u),
				p = n("./src/lib/lessComponent.tsx");
			const h = p.a.wrapped(d.a, "Snoo", m.a),
				b = p.a.li("Li", m.a),
				f = p.a.ol("Ol", m.a),
				g = p.a.div("Title", m.a),
				x = Object(i.c)({
					submissionType: l.kb
				});
			t.a = p.a.wrapped(Object(a.b)(x)(e => {
				const {
					className: t,
					submissionType: n
				} = e, o = n === c.Ub.CROSSPOST;
				return r.a.createElement("div", {
					className: t
				}, r.a.createElement(g, null, r.a.createElement(h, null), o ? s.fbt._("Crossposting to Reddit", null, {
					hk: "2ODPDt"
				}) : s.fbt._("Posting to Reddit", null, {
					hk: "8eEIT"
				})), r.a.createElement(f, null, r.a.createElement(b, null, s.fbt._("Remember the human", null, {
					hk: "1x3u5R"
				})), r.a.createElement(b, null, s.fbt._("Behave like you would in real life", null, {
					hk: "3pxfk1"
				})), r.a.createElement(b, null, s.fbt._("Look for the original source of content", null, {
					hk: "1FfUM4"
				})), r.a.createElement(b, null, s.fbt._("Search for duplicates before posting", null, {
					hk: "3Ij1gf"
				})), r.a.createElement(b, null, s.fbt._("Read the community’s rules", null, {
					hk: "3RNQW2"
				})), o && r.a.createElement(b, null, s.fbt._("You must join a community to crosspost there", null, {
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
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./node_modules/react/index.js"),
				c = n.n(i),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				u = n("./src/reddit/components/IdCard/async.tsx"),
				m = n("./src/reddit/components/SidebarFooter/index.tsx"),
				p = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				h = n("./src/reddit/components/Widgets/PostCollection/index.tsx"),
				b = n("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				f = n("./src/reddit/contexts/PageLayer/index.tsx"),
				g = n("./src/reddit/models/Widgets/index.ts"),
				x = n("./src/reddit/selectors/experiments/postCreationSubRec.ts"),
				C = n("./src/reddit/selectors/postCreations.ts"),
				v = n("./src/reddit/selectors/profile.ts"),
				E = n("./src/reddit/selectors/subreddit.ts"),
				_ = n("./src/reddit/selectors/widgets.ts"),
				O = n("./src/reddit/components/PostingSidebar/PolicyRow/index.tsx"),
				y = n("./src/reddit/components/PostingSidebar/PostingReddiquette/index.tsx"),
				k = n("./src/reddit/components/PostingSidebar/index.m.less"),
				w = n.n(k),
				S = n("./src/lib/lessComponent.tsx");
			const j = Object(r.a)({
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
				P = S.a.div("Container", w.a),
				T = Object(f.u)(),
				I = new Set(["all", "post"]),
				N = Object(l.a)((e, {
					pageLayer: t
				}) => {
					const n = Object(f.r)(e, {
						pageLayer: t
					});
					return n && Object(E.P)(e, {
						subredditId: n.id
					})
				}, e => (e || []).filter(e => I.has(e.kind))),
				D = (e, {
					pageLayer: t
				}) => {
					const n = Object(f.r)(e, {
						pageLayer: t
					});
					return !(!n || !Object(_.d)(e, {
						subredditName: n.name
					}))
				},
				M = Object(l.c)({
					hasIdCardWidgetData: D,
					isCreationPagePending: C.J,
					profile: (e, {
						pageLayer: t,
						subredditOrProfileId: n
					}) => n ? Object(v.p)(e, {
						profileId: n
					}) : Object(f.k)(e, {
						pageLayer: t
					}),
					subreddit: f.r,
					subredditRules: N,
					currentPostCollection: f.g,
					isOpenAIPilotV1: x.e
				}),
				R = Object(d.b)(M),
				L = e => {
					const {
						className: t,
						currentPostCollection: n,
						hasIdCardWidgetData: s,
						isCreationPagePending: o,
						isOpenAIPilotV1: r,
						profile: i,
						subreddit: d,
						subredditRules: l
					} = e, f = s || o;
					return c.a.createElement(P, {
						className: Object(a.a)(t, {
							[w.a.isOpenAIPilotV1]: r
						})
					}, n && c.a.createElement(h.a, {
						collection: n
					}), d && f && c.a.createElement(p.a, null, c.a.createElement(u.a, {
						isSubmissionPage: !0,
						listingName: d.name
					})), i && !d && c.a.createElement(p.a, null, c.a.createElement(j, {
						profileName: i.name,
						isOverlay: !1,
						isSubmissionPage: !0
					})), d && l && c.a.createElement(p.a, null, c.a.createElement(b.a, {
						subredditName: d.name,
						display: g.h.COMPACT,
						rules: l,
						redditStyle: !0
					})), c.a.createElement(y.a, null), c.a.createElement(p.a, null), c.a.createElement(O.a, null), c.a.createElement(m.a, {
						redditStyle: !0
					}))
				};
			t.a = T(R(L))
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				l = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				u = n("./src/reddit/selectors/platform.ts"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/components/RequestPendingBanner/index.m.less"),
				h = n.n(p);
			const b = c.a.wrapped(d.a, "Banner", h.a),
				f = Object(a.b)(() => Object(i.c)({
					restrictions: m.n,
					subreddit: u.e
				}));
			t.a = f(({
				restrictions: e,
				subreddit: t
			}) => {
				if (!t) return null;
				const n = e === l.e.Comment ? l.a.Create : l.a.Draft;
				return r.a.createElement(b, {
					subtitle: r.a.createElement("span", {
						className: h.a.Subtitle
					}, s.fbt._("Your request to {restrictions} in {displayName} was sent and is pending. In the meantime, you can {action} a post and {=browse the community}", [s.fbt._param("restrictions", l.d[e]()), s.fbt._param("displayName", t.name), s.fbt._param("action", l.c[n]()), s.fbt._param("=browse the community", r.a.createElement("a", {
						href: `${t.url}`
					}, s.fbt._("browse the community", null, {
						hk: "3hwgAC"
					})))], {
						hk: "2CX6Q6"
					})),
					title: s.fbt._("Request to {restrictions} is pending...", [s.fbt._param("restrictions", l.d[e]())], {
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-autosize-textarea/lib/index.js"),
				a = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/ResizableAutosizeTextarea/index.m.less"),
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
			const u = ({
					className: e,
					children: t,
					editorWrapperRef: n,
					initialHeight: s
				}) => o.a.createElement("div", {
					className: Object(i.a)(d.a.editorWrapper, e),
					style: s ? {
						height: s
					} : void 0,
					ref: n
				}, t),
				m = ({
					isFullHeight: e,
					textAreaRef: t,
					...n
				}) => o.a.createElement(a.a, l({
					className: Object(i.a)(d.a.textareaAutosize, {
						[d.a.mIsFullHeight]: e
					}),
					innerRef: t
				}, n));
			class p extends o.a.Component {
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
						onEditorResize: s,
						...r
					} = this.props, {
						isResized: a
					} = this.state;
					return o.a.createElement(u, {
						className: e,
						editorWrapperRef: this.setEditorWrapperRef,
						initialHeight: t
					}, o.a.createElement(m, l({}, r, {
						children: !0,
						isFullHeight: !!a,
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				c = n.n(i);
			const d = e => o.a.createElement("button", {
					className: Object(r.a)(c.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, e.children, e.text && o.a.createElement("span", {
					className: Object(r.a)(c.a.TextWrapper, e.textClassName)
				}, e.text, " ")),
				l = a.a.wrapped(d, "ApproveButton", c.a),
				u = a.a.wrapped(d, "RemoveButton", c.a),
				m = e => o.a.createElement("button", {
					className: Object(r.a)(c.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/ScheduledPost/PostSchedulePickerModal/loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				l = n("./node_modules/reselect/es/index.js"),
				u = n("./src/reddit/components/SidebarFooter/index.m.less"),
				m = n.n(u);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), h = r.a.a("Link", m.a), b = Object(l.c)({
				isNavbarLikeMwebEnabled: d.a
			}), f = Object(a.b)(b), g = Object(c.u)({
				isFrontpage: c.z
			});
			t.a = g(f(e => e.isNavbarLikeMwebEnabled ? e.isFrontpage ? o.a.createElement(i.a, {
				className: m.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, o.a.createElement("div", {
				className: m.a.LinkContainer
			}, o.a.createElement("div", {
				className: m.a.Column
			}, o.a.createElement(h, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, p._("User Agreement", null, {
				hk: "2RA6JL"
			})), o.a.createElement(h, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, p._("Privacy policy", null, {
				hk: "10K04G"
			}))), o.a.createElement("div", {
				className: m.a.Column
			}, o.a.createElement(h, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, p._("Content policy", null, {
				hk: "1DyxZS"
			})), o.a.createElement(h, {
				href: "https://www.redditinc.com/policies/moderator-guidelines"
			}, p._("Moderator Guidelines", null, {
				hk: "2O9otm"
			})))), o.a.createElement("div", {
				className: m.a.Copyright
			}, p._("© {year} Reddit, Inc. All rights reserved.", [p._param("year", (new Date).getFullYear().toString())], {
				hk: "sR7zP"
			}))) : null : o.a.createElement(i.a, {
				className: m.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, o.a.createElement("div", {
				className: m.a.LinkContainer
			}, o.a.createElement("div", {
				className: m.a.Column
			}, o.a.createElement(h, {
				href: "https://www.reddithelp.com"
			}, p._("help", null, {
				hk: "4lyYaD"
			})), o.a.createElement(h, {
				href: "https://www.reddit.com/coins"
			}, p._("Reddit coins", null, {
				hk: "32iMaN"
			})), o.a.createElement(h, {
				href: "https://www.reddit.com/premium"
			}, p._("Reddit premium", null, {
				hk: "RuO3A"
			})), o.a.createElement(h, {
				href: "https://redditgifts.com/"
			}, p._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && o.a.createElement(o.a.Fragment, null, o.a.createElement(h, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, p._("Communities", null, {
				hk: "3CJu37"
			})), o.a.createElement(h, {
				href: "https://www.reddit.com/posts/2020/"
			}, p._("Rereddit", null, {
				hk: "1z3k7C"
			})), o.a.createElement(h, {
				href: "https://www.reddit.com/topics/a-1/"
			}, p._("Topics", null, {
				hk: "349RFt"
			})))), o.a.createElement("div", {
				className: m.a.Column
			}, o.a.createElement(h, {
				href: "https://about.reddit.com"
			}, p._("about", null, {
				hk: "1sqJKs"
			})), o.a.createElement(h, {
				href: "https://about.reddit.com/careers/"
			}, p._("careers", null, {
				hk: "26ABvc"
			})), o.a.createElement(h, {
				href: "https://about.reddit.com/press/"
			}, p._("press", null, {
				hk: "2Qmgdz"
			})), o.a.createElement(h, {
				href: "https://www.redditinc.com/advertising"
			}, p._("advertise", null, {
				hk: "Mt40U"
			})), o.a.createElement(h, {
				href: "http://www.redditblog.com/"
			}, p._("blog", null, {
				hk: "46IQJw"
			})), o.a.createElement(h, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, p._("Terms", null, {
				hk: "4qRzfE"
			})), o.a.createElement(h, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, p._("Content policy", null, {
				hk: "1DyxZS"
			})), o.a.createElement(h, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, p._("Privacy policy", null, {
				hk: "10K04G"
			})), o.a.createElement(h, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, p._("Mod policy", null, {
				hk: "2gYc2T"
			})))), o.a.createElement("div", {
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
			var s = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", o.a)
		},
		"./src/reddit/components/StructuredStyles/BladeManager/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class a extends o.a.Component {
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
			var i = Object(r.a)(a);
			t.a = e => o.a.createElement(i, e)
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/StructuredStyles/StyledComponents/navs.m.less"),
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
					disabled: e,
					...t
				}) => o.a.createElement("div", c({}, t, {
					className: Object(r.a)(i.a.FormNavElement, {
						[i.a.disabled]: e
					})
				}), t.children),
				l = ({
					canDrop: e,
					className: t,
					isDragging: n,
					isOver: s,
					disabled: a,
					...d
				}) => o.a.createElement("div", c({}, d, {
					className: Object(r.a)(i.a.DragCard, {
						[i.a.disabled]: a,
						[i.a.isDraffing]: n,
						[i.a.isOverAndCanDrop]: s && e
					}, t)
				}))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const o = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				r = {
					subredditActions: {
						subscribe: () => s.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => s.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => s.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => s.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => s.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => s.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				a = ({
					type: e,
					key: t
				}) => r[o({
					type: e
				})][t]()
		},
		"./src/reddit/components/TypingIndicators/index.m.less": function(e, t, n) {
			e.exports = {
				justifyCenter: "_1WevNRsphqv7-1U44SSi2a",
				roundCorners: "_3-KjSdkLq0TxR6iPCUMV0a",
				fadeOut: "hxgpjMmP5DkIH9qjzKU76",
				commentComposer: "_1Qf1b13Wfxrwm5CKS9cME2",
				isOverlay: "_3azyTJy_p5TQz2a8drvrCn",
				richTextEditor: "_13Vh8SbdNDl0dufOVZLBRi",
				footerButtons: "_2YOcnzi1qyJFKhP4cPf8dS",
				submitButton: "_1Dto34mvqasf8L9JtRr2Hx",
				formatFillIcon: "_3f2-CZrr2ok_ytt9YSTS7c",
				overflowPopupMenu: "_3mZz56Ei8KgWZSPXH7JrN4",
				typingIndicator: "xQIeDIIVr1yVZYxsz0ozp",
				isDisplayed: "_3SppaUc9TkqJc-zbqJt-3h",
				numUsersTyping: "_3TiTD1rBkrFHlvu6vJ2D_n",
				offsetMembersIcons: "CnV1Edi-ImN72TXNKOCUu",
				typingDots: "_3Sck3A9yG3NOFzt_N7zrlr",
				dot: "_1fMgUDC_-k-rdiT8UGZ6j4",
				typingAnimation: "_3Qj9QSvdQ5qft-VPaBowdQ",
				offsetMemberIcon: "KCCH40yFmIIE1YdtzgwrD"
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
				h = n.n(p);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const f = Object(i.c)({
					currentUser: d.k,
					isNightMode: d.X,
					isPresenceUserPrefEnabled: d.P,
					shouldHideNSFW: d.C
				}),
				g = Object(a.b)(f);
			t.a = g(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: o,
					wrapperClassName: a,
					...i
				} = e, d = Object(c.a)(null == t ? void 0 : t.accountIcon);
				return r.a.createElement("div", {
					className: Object(s.a)(h.a.currentUserIconWrapper, a)
				}, d ? r.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : r.a.createElement(m.b, b({}, i, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && r.a.createElement(l.default, {
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
			var s = n("./node_modules/lodash/noop.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/postCollection/index.ts"),
				p = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				h = n("./src/reddit/components/OverflowMenu/index.tsx"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/controls/Dropdown/Row.tsx"),
				g = n("./src/reddit/selectors/activeModalId.ts"),
				x = n("./src/reddit/selectors/postCollection.ts"),
				C = n("./node_modules/reselect/es/index.js"),
				v = n("./src/reddit/helpers/trackers/postCollection.ts"),
				E = n("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less"),
				_ = n.n(E),
				O = n("./node_modules/fbt/lib/FbtPublic.js");
			const y = d.a.wrapped(f.b, "DropdownRow", _.a);
			let k;
			const w = Object(g.b)("DELETE_COLLECTION_CONFM_MODAL_ID"),
				S = Object(g.b)("EDIT_POST_COLLECTION_MODAL_ID"),
				j = Object(C.c)({
					createPostUrl: x.d,
					isDeleteConfirmModalOpen: w,
					isEditCollectionModalOpen: S,
					shouldShowCollectionEditOptions: x.s
				}),
				P = Object(i.b)(j, (e, t) => ({
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
			t.a = P(Object(b.c)(e => {
				const {
					className: t,
					collectionId: n,
					copyLink: s,
					createPostUrl: r,
					isDeleteConfirmModalOpen: i,
					isEditCollectionModalOpen: c,
					onCreatePost: d,
					onRemoveCollection: l,
					onToggleDeleteConfirmModal: u,
					onToggleEditModal: m,
					shouldShowCollectionEditOptions: b,
					shouldShowCreatePost: f,
					targetPosition: g,
					tooltipPosition: x,
					sendEvent: C
				} = e;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement(h.b, {
					className: t,
					dropdownId: `collection-menu-${n}-${f?1:2}`,
					onClick: o.a,
					targetPosition: g,
					tooltipPosition: x
				}, a.a.createElement(y, {
					onClick: s,
					displayText: O.fbt._("Copy collection link", null, {
						hk: "3Rfodz"
					})
				}), b && a.a.createElement(a.a.Fragment, null, a.a.createElement(y, {
					onClick: () => {
						C(Object(v.l)(n)), m()
					},
					displayText: O.fbt._("Edit", null, {
						hk: "1nftDt"
					})
				}), a.a.createElement(y, {
					onClick: () => {
						C(Object(v.k)(n)), u()
					},
					displayText: O.fbt._("Delete collection", null, {
						hk: "2FyIJB"
					})
				}), f && a.a.createElement(y, {
					onClick: () => {
						d(r)
					},
					displayText: O.fbt._("Create post", null, {
						hk: "1v2jHl"
					})
				}))), c && k && a.a.createElement(k, {
					collectionId: n,
					onClose: m,
					onEditSuccess: m
				}), i && a.a.createElement(p.a, {
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
					trackClick: o.a
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/noop.js"),
				r = n.n(o),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/lib/opener/index.ts"),
				l = n("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				u = n("./src/reddit/components/OverflowMenu/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/Row.tsx"),
				p = n("./src/reddit/helpers/path/index.ts"),
				h = n("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.m.less"),
				b = n.n(h);
			const f = c.a.wrapped(m.b, "DropdownRow", b.a);
			t.a = e => {
				const {
					isFutureEvent: t,
					onAddEventStartTime: n,
					onEditStartTime: o,
					onStartEventNow: a,
					postPermalink: c,
					shouldShowAddEventStartTime: m,
					targetPosition: h,
					tooltipPosition: b
				} = e;
				return i.a.createElement(u.b, {
					className: e.className,
					dropdownId: e.dropdownId,
					onClick: r.a,
					targetPosition: h,
					tooltipPosition: b
				}, m && n && i.a.createElement(f, {
					onClick: n,
					displayText: s.fbt._("Add event start time", null, {
						hk: "4xWttR"
					})
				}), t && a && i.a.createElement(f, {
					onClick: a,
					displayText: s.fbt._("Start event now", null, {
						hk: "2TTNfJ"
					})
				}), t && o && i.a.createElement(f, {
					onClick: o,
					displayText: s.fbt._("Edit start time", null, {
						hk: "44XUxC"
					})
				}), i.a.createElement(f, {
					onClick: e.onRemoveClick,
					displayText: s.fbt._("Remove from collection", null, {
						hk: "qsiiu"
					})
				}), c && i.a.createElement(l.a, {
					target: d.d.BLANK,
					rel: d.c,
					isOverlay: !1,
					to: Object(p.b)(c)
				}, i.a.createElement(f, {
					displayText: s.fbt._("View post", null, {
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.tsx"),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/selectors/postCreations.ts"),
				l = n("./src/reddit/components/Widgets/PostCollection/PendingItem/index.m.less"),
				u = n.n(l);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = Object(c.c)({
				title: d.pb
			});
			var h = Object(i.b)(p)(e => {
					const {
						title: t
					} = e;
					return o.a.createElement("div", {
						className: u.a.container
					}, o.a.createElement("div", {
						className: u.a.activeItemIndicator
					}), t && o.a.createElement("h2", {
						className: u.a.title
					}, t), o.a.createElement("div", {
						className: u.a.metaLine
					}, m._("Editing", null, {
						hk: "2w5fAf"
					})))
				}),
				b = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				f = n("./src/reddit/actions/postCollection/index.ts"),
				g = n("./src/reddit/helpers/path/index.ts"),
				x = n("./src/reddit/selectors/posts.ts"),
				C = n("./src/reddit/components/HumanDate/index.tsx"),
				v = n("./src/lib/constants/index.ts"),
				E = n("./src/reddit/components/Widgets/PostCollection/PostItem/index.m.less"),
				_ = n.n(E),
				O = n("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.tsx"),
				y = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				k = n("./src/reddit/components/Widgets/PostCollection/PostItem/Placeholder.m.less"),
				w = n.n(k);

			function S({
				className: e,
				isLoading: t
			}) {
				const n = Object(y.a)({
					isLoading: t
				});
				return o.a.createElement("div", {
					className: Object(r.a)(w.a.Container, e)
				}, o.a.createElement("div", {
					className: w.a.Content
				}, o.a.createElement("div", {
					className: Object(r.a)(w.a.Title, n)
				}), o.a.createElement("div", {
					className: Object(r.a)(w.a.Secondary, n)
				})))
			}
			const {
				fbt: j
			} = n("./node_modules/fbt/lib/FbtPublic.js"), P = ["right", "bottom"], T = ["right", "top"];
			var I = Object(i.b)(() => Object(c.c)({
					post: x.H
				}), (e, t) => ({
					onRemovePostFromCollection: () => e(Object(f.g)(t.collectionId, t.postId))
				}))(e => {
					const {
						post: t,
						onRemovePostFromCollection: n
					} = e;
					return t ? o.a.createElement("div", {
						className: _.a.container
					}, o.a.createElement("div", {
						className: _.a.content
					}, o.a.createElement(b.a, {
						className: _.a.title,
						target: "_blank",
						to: Object(g.b)(t.permalink)
					}, t.title), o.a.createElement("div", {
						className: _.a.metaLine
					}, j._("Posted · {timeAgo}", [j._param("timeAgo", o.a.createElement(C.d, {
						seconds: t.created / v.Qb
					}))], {
						hk: "ZVJpV"
					}))), o.a.createElement(O.a, {
						onRemoveClick: n,
						className: _.a.overflowMenu,
						dropdownId: "collection-widget-item" + t.id,
						postPermalink: t.permalink,
						targetPosition: P,
						tooltipPosition: T
					})) : o.a.createElement(S, {
						className: _.a.container,
						isLoading: !0
					})
				}),
				N = n("./src/reddit/components/Widgets/PostCollection/index.m.less"),
				D = n.n(N);
			const {
				fbt: M
			} = n("./node_modules/fbt/lib/FbtPublic.js"), R = ["right", "bottom"], L = ["right", "top"];
			class A extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.renderItem = (e, t) => o.a.createElement(I, {
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
					return o.a.createElement("div", {
						className: Object(r.a)(e, D.a.container)
					}, o.a.createElement("div", {
						className: D.a.topRow
					}, M._("Collection", null, {
						hk: "1pY1s2"
					}), o.a.createElement(a.a, {
						className: D.a.menuButton,
						collectionId: t.id,
						isSubmitPage: !0,
						permalink: t.permalink,
						targetPosition: R,
						tooltipPosition: L
					})), o.a.createElement("h4", {
						className: D.a.collectionDescription
					}, t.title), o.a.createElement("div", {
						className: D.a.listWrapper
					}, o.a.createElement("div", {
						className: D.a.listContainer
					}, n)), o.a.createElement(h, null))
				}
			}
			t.a = A
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				c = n("./src/reddit/components/RichTextJson/index.tsx"),
				d = n("./src/reddit/helpers/dom/index.ts"),
				l = n("./src/reddit/icons/fonts/index.tsx"),
				u = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				m = n("./src/reddit/models/Widgets/index.ts"),
				p = n("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				h = n.n(p);
			const b = a.a.div("RuleShortName", h.a),
				f = a.a.div("RuleIndex", h.a),
				g = a.a.div("RuleTitle", h.a),
				x = a.a.div("RuleDescription", h.a),
				C = a.a.wrapped(i.a, "RawHTMLDisplay", h.a),
				v = {};
			class E extends o.a.Component {
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
						shouldShowFullDisplay: s
					} = this, a = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), i = !s(e) && !!a;
					return o.a.createElement(b, {
						className: Object(r.a)({
							[h.a.pointerCursor]: i,
							[h.a.cleanStyle]: e.cleanStyle
						}),
						onClick: s(e) || !a ? void 0 : n
					}, o.a.createElement(u.a, null, o.a.createElement(f, {
						className: Object(r.a)({
							[h.a.cleanStyle]: e.cleanStyle
						})
					}, `${e.humanIndex}.`), o.a.createElement(g, null, `${e.rule.shortName}`), o.a.createElement("div", null, !s(e) && a && o.a.createElement(l.a, {
						name: t.isVisible ? "caret_up" : "caret_down"
					}))), t.isVisible && o.a.createElement(x, {
						className: Object(r.a)({
							[h.a.cleanStyle]: e.cleanStyle
						})
					}, e.rule.descriptionRichText ? o.a.createElement(c.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: v
					}) : e.rule.descriptionHtml ? o.a.createElement(C, {
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				i = n("./src/reddit/components/Widgets/SubredditRules/Rule/index.tsx");
			const c = e => e.rules.length > 0 ? r.a.createElement(a.a, {
				className: e.className,
				styles: e.styles,
				title: s.fbt._("{subredditName} Rules", [s.fbt._param("subredditName", `r/${e.subredditName}`)], {
					hk: "2AwRLk"
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, n) {
				return r.a.createElement(i.a, {
					key: `rule${t.shortName}${t.createdUtc}`,
					rule: t,
					display: e.display,
					humanIndex: n + 1
				})
			}))) : null;
			t.b = e => r.a.createElement(c, {
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/reddit/components/SEOTitle/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/widgets.ts"),
				h = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				b = n("./src/reddit/selectors/experiments/topPosts.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/models/Theme/index.ts"),
				C = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const v = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(C.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				E = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(C.a)(e).widgetColors.sidebarWidgetHeaderColor,
				_ = e => {
					const t = v(e);
					return Object(x.f)(t)
				},
				O = e => {
					const t = E(e);
					return Object(x.f)(t)
				};
			var y = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				k = n.n(y);
			const {
				fbt: w
			} = n("./node_modules/fbt/lib/FbtPublic.js"), S = Object(u.u)(), j = Object(r.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.n)(e, t) || void 0,
						s = t.redditStyle || Object(f.l)(e, {
							subredditId: n
						}),
						o = Object(g.X)(e);
					return s || o
				},
				nigtmode: g.X,
				subredditId: u.n,
				topPostVariant: b.d
			}));
			class P extends o.a.Component {
				constructor() {
					super(...arguments), this.contentRef = o.a.createRef(), this.state = {
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
					return e.backgroundColor = v(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = _(this.props), e
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
						forceRedditStyle: s,
						headerButton: r,
						onClick: a,
						title: c,
						titleClassName: l,
						truncateThreshold: u
					} = this.props, p = n ? k.a.widgetContentOnly : k.a.widgetContent, h = !s && this.props.styles, b = h ? this.getWidgetBackgroundStyles() : {}, f = h ? this.getWidgetHeaderStyles() : {};
					return o.a.createElement("div", {
						className: Object(i.a)(t, k.a.widgetBackground, {
							[k.a.redditStyle]: s,
							[k.a.clickable]: !!a,
							[k.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: a,
						style: b
					}, c && o.a.createElement("div", {
						className: k.a.widgetHeader,
						style: f
					}, o.a.createElement("div", {
						className: Object(i.a)(k.a.widgetTitle, l)
					}, o.a.createElement(d.b, {
						type: d.a.Widget
					}, c)), r), o.a.createElement("div", {
						className: Object(i.a)(p, {
							[k.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? u : "none"
						}
					}, e), this.state.isTruncated && o.a.createElement(m.q, {
						className: k.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, w._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = S(j(Object(c.a)(Object(l.c)(P))))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/subscription/index.ts"),
				a = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(o.c)({
				isInJoinOptimizationsExperiment: e => Object(a.a)(e) || Object(a.b)(e) || Object(a.c)(e) || Object(a.d)(e),
				userIsSubscriber: i.cb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(r.d([t], !0)),
				onSubscriptionsRequested: () => e(r.e()),
				onUnsubscribe: () => e(r.d([t], !1))
			}))
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
				return h
			})), n.d(t, "r", (function() {
				return b
			})), n.d(t, "s", (function() {
				return f
			})), n.d(t, "u", (function() {
				return g
			})), n.d(t, "t", (function() {
				return x
			})), n.d(t, "v", (function() {
				return C
			})), n.d(t, "w", (function() {
				return v
			})), n.d(t, "l", (function() {
				return E
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "o", (function() {
				return y
			})), n.d(t, "p", (function() {
				return k
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
				h = 24,
				b = 312,
				f = 40,
				g = 270,
				x = 106,
				C = 5,
				v = 16,
				E = 1250,
				_ = 82,
				O = 48,
				y = 36,
				k = 40
		},
		"./src/reddit/constants/componentTestIds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			}));
			const s = "comment",
				o = "comment-submission-form-markdown",
				r = "comment-submission-form-richtext",
				a = "comments-page-link-num-comments",
				i = "post-content"
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			}));
			const s = "reddit",
				o = "reddit.ready",
				r = "reddit.urlChanged"
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
		"./src/reddit/constants/postCreation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			}));
			const s = "PostCreation-AddEventButton",
				o = 500,
				r = "PostCreation-CollectionEducationTooltip",
				a = "PostCreation-EventEducationTooltip",
				i = 300,
				c = i,
				d = "PostCreation-AddToCollectionButton"
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
		"./src/reddit/contexts/NavbarExp.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = o.a.createContext(!1)
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
				return h
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "m", (function() {
				return v
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "o", (function() {
				return _
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "n", (function() {
				return y
			})), n.d(t, "r", (function() {
				return k
			})), n.d(t, "q", (function() {
				return w
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "j", (function() {
				return P
			})), n.d(t, "d", (function() {
				return T
			})), n.d(t, "h", (function() {
				return I
			})), n.d(t, "i", (function() {
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
			var u, m, p, h;
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
			}(h || (h = {}));
			const b = e => {
					const {
						"data-redditstyle": t,
						Icon: n,
						iconClassName: s,
						iconPosition: a = p.C,
						isFullWidth: i = !1,
						isSquare: b = !1,
						children: C,
						className: v,
						kind: E = h.Button,
						priority: _ = m.Primary,
						redditStyle: O,
						size: y = u.S,
						text: k,
						textClassName: w,
						...S
					} = e, j = (({
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
						baseClassName: v,
						children: C,
						dataRedditStyle: t,
						Icon: n,
						isFullWidth: i,
						isSquare: b,
						priority: _,
						redditStyle: O,
						size: y,
						text: k
					}), P = (({
						children: e,
						text: t,
						Icon: n,
						iconClassName: s,
						iconPosition: a,
						priority: i,
						textClassName: d
					}) => !n && t ? o.a.createElement("span", {
						className: d
					}, t) : o.a.createElement(o.a.Fragment, null, n && (a === p.C || a === p.L) && o.a.createElement(n, {
						className: Object(r.a)(c.a.Icon, s, {
							[c.a.isLeft]: a === p.L
						}),
						isFilled: i === m.Primary
					}), t && o.a.createElement("span", {
						className: Object(r.a)(c.a.Text, d)
					}, t), e && e, n && a === p.R && o.a.createElement(n, {
						className: Object(r.a)(c.a.Icon, s, c.a.isRight),
						isFilled: i === m.Primary
					})))({
						children: C,
						text: k,
						Icon: n,
						iconClassName: s,
						iconPosition: a,
						priority: _,
						textClassName: w
					});
					return E === h.InternalLink && (e => "to" in e)(S) ? o.a.createElement(f, d({}, l, S, {
						className: j
					}), P) : E === h.ExternalLink && (e => "href" in e)(S) ? o.a.createElement(g, d({}, l, S, {
						className: j
					}), P) : o.a.createElement(x, d({}, l, S, {
						className: j
					}), P)
				},
				f = e => o.a.createElement(a.a, e),
				g = e => o.a.createElement("a", e),
				x = e => o.a.createElement("button", e),
				C = e => o.a.createElement(b, d({
					kind: h.ExternalLink,
					priority: m.Primary
				}, e)),
				v = e => o.a.createElement(b, d({
					kind: h.InternalLink,
					priority: m.Primary
				}, e)),
				E = e => o.a.createElement(b, d({
					kind: h.Button,
					priority: m.Primary
				}, e)),
				_ = e => o.a.createElement(b, d({
					kind: h.ExternalLink,
					priority: m.Secondary
				}, e)),
				O = e => o.a.createElement(b, d({
					kind: h.InternalLink,
					priority: m.Secondary
				}, e)),
				y = e => o.a.createElement(b, d({
					kind: h.Button,
					priority: m.Secondary
				}, e)),
				k = e => o.a.createElement(b, d({
					kind: h.InternalLink,
					priority: m.Plain
				}, e)),
				w = e => o.a.createElement(b, d({
					kind: h.Button,
					priority: m.Plain
				}, e)),
				S = ({
					className: e,
					...t
				}) => o.a.createElement(b, d({
					kind: h.Button,
					priority: m.Primary,
					className: Object(r.a)(e, c.a.DangerButtonColors)
				}, t)),
				j = ({
					className: e,
					...t
				}) => o.a.createElement(b, d({
					kind: h.Button,
					className: Object(r.a)(e, c.a.GoldButtonColors)
				}, t)),
				P = ({
					className: e,
					...t
				}) => o.a.createElement(b, d({
					kind: h.Button,
					className: Object(r.a)(e, c.a.PremiumButtonColors)
				}, t)),
				T = ({
					className: e,
					...t
				}) => o.a.createElement(b, d({
					kind: h.Button,
					className: Object(r.a)(e, c.a.ChatButton)
				}, t)),
				I = ({
					className: e,
					...t
				}) => o.a.createElement(b, d({
					kind: h.Button,
					className: Object(r.a)(e, c.a.InlineTextButton)
				}, t)),
				N = ({
					className: e,
					...t
				}) => o.a.createElement(b, d({
					kind: h.Button,
					className: Object(r.a)(e, c.a.PlainLinkButton),
					priority: m.PlainLink
				}, t));
			t.s = b
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/controls/CheckboxInput/index.m.less"),
				l = n.n(d);
			t.a = e => o.a.createElement(c.a, {
				"aria-checked": !!e.value,
				"aria-disabled": e.disabled,
				"aria-labelledby": e.name,
				className: Object(r.a)(e.className, l.a.checkboxInput, e.disabled ? l.a.disabled : null),
				onClick: e.onChange && !e.disabled ? () => e.onChange(!e.value) : void 0,
				role: "checkbox"
			}, o.a.createElement("input", {
				value: e.value ? e.value.toString() : "",
				type: "hidden"
			}), e.value ? o.a.createElement(i.a, {
				className: l.a.checkboxSelected
			}) : o.a.createElement(a.a, null), e.children)
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(m),
				h = n("./src/reddit/controls/Dropdown/row.m.less"),
				b = n.n(h);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class g extends a.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = o()(() => {
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
					}, n = Object(i.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? a.a.createElement(c.a, f({}, t, {
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
					}), e.children && a.a.createElement("span", {
						className: n
					}, e.children), a.a.createElement("span", {
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText)) : a.a.createElement(u.a, f({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: o()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? a.a.createElement("div", null, e.children) : a.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && a.a.createElement("span", {
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && a.a.createElement(l.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && a.a.createElement(d.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(i.a)(b.a.row, e, {
					[b.a.mIsInteractive]: !t.noHover,
					[b.a.mIsSelected]: t.isSelected,
					[b.a.topics]: t.isTopicsStyle
				});
				return a.a.createElement(g, f({
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
				return v
			})), n.d(t, "c", (function() {
				return E
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/uniqueId.js"),
				r = n.n(o),
				a = n("./node_modules/raf/index.js"),
				i = n.n(a),
				c = n("./node_modules/react/index.js"),
				d = n.n(c),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/higherOrderComponents/asModal/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/layout/row/Inline/index.tsx"),
				h = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				b = n.n(h);
			var f = Object(u.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return d.a.createElement("div", {
						className: b.a.wrapper
					}, d.a.createElement(p.a, {
						className: b.a.titleRow
					}, n), d.a.createElement("div", {
						className: b.a.detailsContainer
					}, t), d.a.createElement(p.a, {
						className: b.a.buttonRow
					}, d.a.createElement(m.k, {
						className: b.a.confirmButton,
						onClick: e.onConfirmed
					}, s.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				g = n("./src/reddit/controls/ErrorText/index.m.less"),
				x = n.n(g);
			class C extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${r()()}`,
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
					i()(() => {
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
						errorModalTitle: o = s.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: r = s.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: a,
						isModalOpen: i
					} = this.state;
					return d.a.createElement("div", {
						className: Object(l.a)(x.a.wrapper, t)
					}, d.a.createElement("span", {
						className: x.a.description,
						ref: this.spanRef
					}, e), a && d.a.createElement("span", {
						className: x.a.moreText,
						onClick: this.toggleModal
					}, r), i && d.a.createElement(f, {
						onConfirmed: this.toggleModal,
						title: o
					}, n || e))
				}
			}
			const v = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: s,
						fallbackMessage: o,
						messages: r = []
					} = e, a = r.length ? r : o ? [o] : [];
					return a.length ? d.a.createElement("div", {
						className: t
					}, a.map((e, t) => d.a.createElement(C, {
						className: n,
						errorModalTitle: s,
						key: t
					}, e))) : null
				},
				E = e => d.a.createElement(v, {
					fallbackMessage: s.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = C
		},
		"./src/reddit/controls/FileDrop/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/flow.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-dnd/lib/index.js"),
				c = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				d = n("./src/reddit/helpers/dragDropContext/index.ts");
			const l = c.NativeTypes.FILE,
				u = o()(Object(i.DropTarget)(l, {
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
			class m extends a.a.Component {
				render() {
					return this.props.connectDropTarget ? this.props.connectDropTarget(a.a.createElement("div", {
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
				return b
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return C
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/ErrorText/index.tsx"),
				c = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				d = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				l = n("./src/reddit/controls/FormFields/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const p = a.a.input("input", u.a),
				h = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				b = e => {
					const {
						label: t,
						children: n,
						inputRef: s,
						className: a,
						...i
					} = e, c = void 0 !== e.value && "" !== e.value;
					return o.a.createElement("div", {
						className: Object(r.a)(u.a.inputWrapper, a, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: h
					}, o.a.createElement(p, m({
						"aria-invalid": e.isInvalid,
						innerRef: s
					}, i)), e.label && o.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				f = e => {
					const {
						label: t,
						children: n,
						inputRef: s,
						isInvalid: a,
						className: i,
						redditStyle: c,
						...d
					} = e, l = void 0 !== e.value && "" !== e.value;
					return o.a.createElement("div", {
						className: Object(r.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: a,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: h
					}, o.a.createElement(p, m({
						innerRef: s
					}, d)), e.label && o.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: l
						})
					}, e.label), e.children)
				},
				g = e => o.a.createElement("div", {
					className: Object(r.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", o.a.createElement(c.a, {
					className: u.a.plus
				}));
			var x;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(x || (x = {}));
			class C extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: x.ADD
						})
					}, this.updateValue = (e, t) => {
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: x.REMOVE,
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
						placeholder: s,
						errors: r = []
					} = this.props;
					return e.map((e, a) => o.a.createElement(b, {
						inputRef: e => this.setInputRef(e, a),
						isInvalid: !!r[a],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, a),
						placeholder: s,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, o.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(a)
					}, o.a.createElement(d.b, {
						className: u.a.trash
					})), !!r[a] && o.a.createElement(i.b, {
						className: u.a.errorText
					}, r[a])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: s,
						addValueText: a,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const c = !(!!s && n.length >= s) && !i;
					return o.a.createElement("div", {
						className: Object(r.a)(u.a.multiInputWrapper, e)
					}, t && c && o.a.createElement(g, {
						onClick: this.addValue,
						text: a
					}), this.renderFields(), !t && c && o.a.createElement(g, {
						onClick: this.addValue,
						text: a
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
		"./src/reddit/controls/Input/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/Input/index.m.less"),
				r = n.n(o);
			t.a = s.a.input("input", r.a)
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(a);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => o.a.createElement("div", {
				className: Object(r.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/keycodes.ts"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				l = n("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = n.n(l);
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.ref = null, this.onKeyPress = e => {
						const {
							props: t
						} = this;
						t.disabled || e.key !== a.b.Enter && e.key !== a.b.Space || (t.onClick && t.onClick(t.value), e.preventDefault())
					}
				}
				componentDidUpdate(e) {
					this.props.selected && !e.selected && this.ref && this.ref.focus()
				}
				render() {
					const {
						props: e
					} = this;
					return e.hidden ? null : o.a.createElement(d.a, {
						"aria-checked": e.selected,
						className: Object(r.a)(e.className, u.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? o.a.createElement(c.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : o.a.createElement(i.a, {
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
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/constants/keycodes.ts");
			class a extends o.a.Component {
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
						return o.a.Children.forEach(this.props.children, t => {
							t.props.hidden || t.props.disabled || e.push(t.props.value)
						}), e
					}, this.onKeyDown = e => {
						const {
							disabled: t,
							onChange: n
						} = this.props, {
							value: s
						} = this.state;
						if (t) return;
						const o = e.key === r.b.ArrowUp,
							a = e.key === r.b.ArrowDown;
						if (o || a) {
							const t = this.getValues();
							if (!t.length) return;
							const r = s ? t.indexOf(s) : 0,
								a = t[((o ? r - 1 : r + 1) + t.length) % t.length];
							n(a), this.setState({
								value: a
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
					return o.a.createElement("div", {
						"aria-label": e.name,
						className: e.className,
						role: "radiogroup",
						onKeyDown: this.onKeyDown
					}, o.a.createElement("input", {
						disabled: e.disabled,
						type: "hidden",
						value: t || ""
					}), o.a.Children.map(e.children, (n, s) => {
						const r = 0 === s,
							a = n.props.value === t,
							i = null !== t ? a ? 0 : -1 : r ? 0 : -1;
						return o.a.cloneElement(n, {
							disabled: e.disabled,
							onClick: e => this.handleClick(n.props.value),
							selected: a,
							tabIndex: i
						})
					}))
				}
			}
		},
		"./src/reddit/controls/Sortable/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/helpers/dragDropContext/index.ts"),
				a = n("./node_modules/lodash/flow.js"),
				i = n.n(a),
				c = n("./node_modules/react-dnd/lib/index.js");
			class d extends o.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.onClick && this.props.onClick(this.props.id, this.props.index)
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.connectDropTarget && e.connectDragSource ? i()(e.connectDropTarget, e.connectDragSource)(o.a.createElement("div", {
						onClick: this.handleClick
					}, e.render(e.id, e.index, e.isDragging, e.isOver, e.canDrop))) : null
				}
			}
			var l = i()(Object(c.DragSource)("card", {
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
			class u extends o.a.Component {
				constructor(e) {
					super(e), this.onDrop = (e, t) => {
						this.setState(n => {
							const s = n.values.slice(),
								o = s.indexOf(e),
								r = s.splice(o, 1)[0];
							let a = s.indexOf(t);
							return o <= a && (a += 1), s.splice(a, 0, r), this.props.onDrop(e, t, s), {
								values: s
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
						render: s
					} = this.props;
					return o.a.createElement("div", {
						className: e
					}, this.state.values.map((e, r) => o.a.createElement(l, {
						id: e,
						key: t && t(e, r),
						index: r,
						render: s,
						onDrop: this.onDrop,
						onClick: n
					})))
				}
			}
			t.a = Object(r.a)(u)
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
				return v
			})), n.d(t, "b", (function() {
				return E
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/SubredditIcon/index.tsx"),
				c = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				d = n("./src/reddit/icons/svgs/ImagePost/index.tsx"),
				l = n("./src/reddit/icons/svgs/Link/index.tsx"),
				u = n("./src/reddit/icons/svgs/TextPost/index.tsx"),
				m = n("./src/reddit/icons/svgs/Video/index.tsx"),
				p = n("./src/reddit/layout/row/Inline/index.tsx"),
				h = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less"),
				b = n.n(h);
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
				return o.a.createElement(p.a, {
					className: Object(r.a)(b.a.rowStyle, n)
				}, f.map(({
					type: e,
					Icon: n
				}) => o.a.createElement("div", {
					className: Object(r.a)(b.a.iconWrapper, {
						[b.a.mDisabled]: !t[e]
					})
				}, o.a.createElement(n, null))))
			}
			var x = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less"),
				C = n.n(x);
			const v = a.a.wrapped(i.b, "subredditIcon", C.a);

			function E(e) {
				const {
					className: t,
					explanationText: n,
					highlight: s,
					icon: a,
					item: i,
					lockTitleWithEllipsis: d,
					onClick: l,
					secondaryText: u,
					subText: m,
					title: p
				} = e, {
					allowedPostTypes: h
				} = i;
				return o.a.createElement("div", {
					className: Object(r.a)(C.a.container, {
						[C.a.mHighlight]: s
					}, t),
					onClick: l
				}, a, o.a.createElement("div", {
					className: C.a.main
				}, o.a.createElement("span", {
					className: Object(r.a)(C.a.title, {
						[C.a.lockTitleWithEllipsis]: d
					})
				}, p), u && o.a.createElement("span", {
					className: C.a.secondary
				}, u, m && o.a.createElement(o.a.Fragment, null, o.a.createElement(c.a, null), o.a.createElement("span", {
					className: C.a.secondary
				}, m))), n && o.a.createElement("span", {
					className: C.a.secondary
				}, n)), s && h && o.a.createElement(g, {
					allowedPostTypes: h
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				c = n("./src/reddit/helpers/name/index.ts"),
				d = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.tsx"),
				l = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function p(e) {
				const {
					item: {
						primaryColor: t,
						iconUrl: n,
						name: o,
						subscribers: l,
						active: p
					},
					shouldPrettyPrint: h,
					explanationText: b
				} = e, f = Object(c.c)(o), g = void 0 !== l ? s.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [s.fbt._plural(l, "number", h ? Object(i.b)(l) : void 0)], {
					hk: "2SvJUX"
				}) : void 0, x = void 0 !== p ? s.fbt._({
					"*": "{number} online",
					_1: "1 online"
				}, [s.fbt._plural(p, "number", h ? Object(i.b)(p) : void 0)], {
					hk: "NgOAJ"
				}) : void 0, C = r.a.createElement(d.a, {
					className: Object(a.a)(u.a.icon, {
						[u.a.hasExplanationText]: !!b
					}),
					iconUrl: n,
					primaryColor: t,
					redditStyle: !0
				});
				return r.a.createElement(d.b, m({
					icon: C,
					title: f,
					secondaryText: g,
					subText: x
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/debounce.js"),
				r = n.n(o),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./src/lib/classNames/index.ts");
			const d = {
				leading: !0,
				trailing: !1
			};
			var l = (e, t, n, s = d) => {
					const o = {
							...d,
							...s
						},
						r = t > e ? 1 : -1;
					let a = e;
					if (e !== t) {
						for (o.leading || (a += r); a !== t;) n(a), a += r;
						o.trailing && n(a)
					} else(o.leading || o.trailing) && n(e)
				},
				u = n("./src/lib/forEachGroup/index.ts"),
				m = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				p = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownEntry/index.m.less"),
				h = n.n(p);
			class b extends a.Component {
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
					return i.a.createElement("div", {
						className: Object(c.a)(h.a.entry, this.props.disabled && h.a.disabled),
						onMouseDown: this.onMouseDown,
						onMouseOver: this.onMouseOver,
						onMouseUp: this.onMouseUp,
						ref: this.setRef
					}, this.props.children)
				}
			}
			var f = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less"),
				x = n.n(g);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var v = ({
					className: e,
					children: t,
					title: n,
					onOpenCommunityCreation: o,
					shouldShowCreateCommunityButton: r,
					...a
				}) => i.a.createElement("div", C({
					className: Object(c.a)(x.a.dropdownSection, e)
				}, a), n && r ? i.a.createElement("div", {
					className: x.a.titleContainer
				}, i.a.createElement("span", {
					className: x.a.titleText
				}, n), i.a.createElement(f.s, {
					className: x.a.srCreationButton,
					onClick: o,
					priority: f.b.Plain,
					size: f.c.XS
				}, s.fbt._("Create New", null, {
					hk: "3WP7G4"
				}))) : n && i.a.createElement("div", {
					className: x.a.title
				}, n), t),
				E = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				_ = n("./src/reddit/helpers/name/index.ts"),
				O = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.tsx"),
				y = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less"),
				k = n.n(y),
				w = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less"),
				S = n.n(w);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function P(e) {
				const {
					item: {
						name: t,
						subscribers: n
					}
				} = e, o = Object(_.d)(t), r = void 0 !== n ? s.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [s.fbt._plural(n, "number")], {
					hk: "2SvJUX"
				}) : void 0, a = i.a.createElement(E.a, {
					className: Object(c.a)(S.a.profileIcon, k.a.subredditIcon)
				});
				return i.a.createElement(O.b, j({
					icon: a,
					title: o,
					secondaryText: r
				}, e))
			}
			var T = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.tsx"),
				I = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less"),
				N = n.n(I);
			const D = {
				[m.a.OWN_PROFILE]: () => s.fbt._("Your profile", null, {
					hk: "1Qoy4P"
				}),
				[m.a.SUBSCRIBED_TO_SUBREDDIT]: () => s.fbt._("My communities", null, {
					hk: "2NVUpl"
				}),
				[m.a.OTHER_SUBREDDIT]: () => s.fbt._("Others", null, {
					hk: "3WQHlu"
				}),
				[m.a.MODERATED_SUBREDDIT]: () => s.fbt._("Moderated subreddits", null, {
					hk: "uZtld"
				})
			};
			class M extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.selectedEntryElement = null, this.containerElement = null, this.ignoreEntryOverEvents = !1, this.activateEntryOverEvents = r()(() => this.ignoreEntryOverEvents = !1, 100), this.setContainerRef = e => this.containerElement = e, this.onEntryUpdate = (e, t) => {
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
							return P;
						default:
							return T.a
					}
				}
				render() {
					const {
						focusedIndex: e,
						items: t,
						onOpenCommunityCreation: n,
						shouldShowCreateCommunityButton: o
					} = this.props, r = [];
					return this.props.showNoMatchesCaption && r.push(i.a.createElement(v, {
						key: "no-matches"
					}, i.a.createElement("div", {
						className: N.a.noMatches
					}, s.fbt._("No communities found", null, {
						hk: "4wDUHv"
					})))), Object(u.a)(t, {
						keyFn: e => e.type
					}, (s, a, c, d) => {
						const u = [];
						l(c, d, n => {
							const s = t[n],
								o = n === e,
								r = this.getEntryContentComponent(s.type, s.name);
							r && u.push(i.a.createElement(b, {
								entryIndex: n,
								disabled: s.disabled,
								key: s.id || s.name,
								onSelect: this.props.onEntrySelect,
								onOver: this.onEntryOver,
								onUpdate: this.onEntryUpdate
							}, i.a.createElement(r, {
								highlight: o,
								item: s
							})))
						});
						const p = D[a];
						r.push(i.a.createElement(v, {
							key: a,
							title: p && p(),
							onOpenCommunityCreation: n,
							shouldShowCreateCommunityButton: o && a === m.a.SUBSCRIBED_TO_SUBREDDIT
						}, u))
					}), i.a.createElement("div", {
						className: Object(c.a)(N.a.container, this.props.className, {
							[N.a.mIsValid]: this.props.isValid,
							[N.a.mIsVisible]: r.length > 0
						}),
						ref: this.setContainerRef,
						onMouseDown: this.props.onContainerMouseDown,
						onScroll: this.onScroll
					}, r)
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
				return h
			}));
			var s = n("./src/reddit/constants/posts.ts"),
				o = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				r = n("./src/reddit/helpers/name/index.ts"),
				a = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				i = n("./src/reddit/models/User/index.ts");
			const c = (e, t, n) => {
					if (Object(r.a)(e, t.name)) {
						const {
							id: e,
							name: a
						} = t, {
							url: i,
							color: c
						} = Object(o.a)({
							shouldHideNsfwIcon: n,
							subredditOrProfile: t
						});
						return {
							rawString: Object(r.c)(a),
							record: {
								id: e,
								name: a,
								iconUrl: i,
								primaryColor: c,
								type: s.a.SUBREDDIT
							}
						}
					}
					return {
						rawString: e,
						record: null
					}
				},
				d = (e, t, n) => {
					const o = Object(i.e)(t);
					if (Object(r.a)(e, o)) {
						const {
							id: e,
							accountIcon: n
						} = t;
						return {
							rawString: Object(r.d)(o),
							record: {
								id: e,
								name: o,
								iconUrl: n,
								type: s.a.PROFILE
							}
						}
					}
					return {
						rawString: e,
						record: null
					}
				},
				l = (e, t, n, s) => {
					if (t && (!n || Object(r.e)(e))) return c(e, t, s);
					if (n && (!t || Object(r.f)(e))) return d(e, n);
					if (t && n) {
						const o = c(e, t, s);
						return o.record ? o : d(e, n)
					}
					return {
						rawString: e,
						record: null
					}
				},
				u = e => {
					let t;
					return t = e.type === s.a.PROFILE ? a.a.OWN_PROFILE : a.a.OTHER_SUBREDDIT, {
						...e,
						type: t
					}
				},
				m = new RegExp("^(r/)?[A-Za-z0-9][A-Za-z0-9_]{1,20}$", "i"),
				p = new RegExp("^u/[A-Za-z0-9_-]{2,20}$", "i"),
				h = e => m.test(e) || p.test(e) || "" === e
		},
		"./src/reddit/controls/SubredditPicker/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return ue
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/lodash/isEqual.js"),
				a = n.n(r),
				i = n("./src/reddit/helpers/name/index.ts");
			class c extends o.a.Component {
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
					if (!a()(t, n) && !this.isFocused) {
						t.record && !n.record && Object(i.a)(t.record.name, n.rawString) ? this.setState({
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
					return o.a.createElement(o.a.Fragment, null, this.props.renderPicker({
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
				h = n("./src/reddit/actions/subredditCrosspostable.ts"),
				b = n("./src/reddit/actions/subscription/index.ts"),
				f = n("./src/reddit/constants/modals.ts"),
				g = n("./src/reddit/contexts/PageLayer/index.tsx"),
				x = n("./src/reddit/controls/SubredditPicker/helpers.ts"),
				C = n("./node_modules/lodash/debounce.js"),
				v = n.n(C),
				E = n("./src/lib/classNames/index.ts"),
				_ = n("./src/reddit/constants/keycodes.ts"),
				O = n("./src/reddit/constants/posts.ts"),
				y = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				k = n("./node_modules/fbt/lib/FbtPublic.js"),
				w = n("./src/reddit/icons/fonts/index.tsx"),
				S = n("./src/lib/lessComponent.tsx"),
				j = n("./src/reddit/components/SubredditIcon/index.tsx"),
				P = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				T = n("./src/reddit/controls/SubredditPicker/Picker/SearchBar/index.m.less"),
				I = n.n(T);
			const N = S.a.wrapped(j.b, "subredditRoundIcon", I.a),
				D = S.a.wrapped(P.a, "userIcon", I.a),
				M = S.a.span("iconEmpty", I.a);

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
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
					isActive: s,
					onDropdownClick: r,
					inputRef: a,
					record: i,
					value: c,
					...d
				} = e;
				let l = o.a.createElement(M, null);
				return s ? l = o.a.createElement(w.a, {
					name: "search",
					className: I.a.searchIcon
				}) : i && (l = i.type === O.a.SUBREDDIT ? o.a.createElement(N, i) : o.a.createElement(D, null)), o.a.createElement("div", {
					className: Object(E.a)(I.a.searchBar, t)
				}, l, o.a.createElement("div", {
					className: I.a.inputWrapper
				}, o.a.createElement("input", R({
					className: I.a.input,
					ref: a,
					disabled: n,
					placeholder: s ? k.fbt._("Search communities", null, {
						hk: "1mtF5A"
					}) : k.fbt._("Choose a community", null, {
						hk: "44gKTd"
					}),
					spellCheck: !1,
					value: c
				}, d))), o.a.createElement("div", {
					onClick: r,
					onMouseDown: L
				}, o.a.createElement(w.a, {
					name: "caret_down",
					className: I.a.dropdownIcon
				})))
			}
			var F = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx"),
				B = n("./src/reddit/selectors/experiments/postCreationSubRec.ts"),
				U = n("./src/reddit/controls/SubredditPicker/Picker/index.m.less"),
				W = n.n(U),
				V = n("./src/reddit/actions/postCreation/general.ts"),
				G = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				H = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				z = n("./src/reddit/helpers/trackers/postComposer.ts"),
				K = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				q = n("./src/reddit/hooks/useTracking.ts"),
				Q = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.tsx"),
				Y = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/RecommendedSubreddits/index.m.less"),
				J = n.n(Y);
			const Z = e => {
					const {
						items: t,
						isRedditRec: n,
						onSelectRecommendation: r
					} = e, a = Object(q.a)(), i = Object(s.useCallback)((e, t) => {
						a(Object(z.s)(e, t))
					}, []), c = Object(s.useRef)(null), d = Object(s.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && a(Object(z.r)())
						})
					}, []);
					return Object(K.a)(c, d), o.a.createElement(o.a.Fragment, null, t.map((e, t) => o.a.createElement("div", {
						className: J.a.itemWrapper,
						key: e.name
					}, o.a.createElement(G.a, {
						subredditName: e.name,
						shouldOpenNewTabOnClicks: !0,
						onShow: () => i(e.name, t)
					}, o.a.createElement(Q.a, {
						item: e,
						highlight: !1,
						shouldPrettyPrint: !0,
						explanationText: n ? k.fbt._("based on your subscription", null, {
							hk: "3Hb2XK"
						}) : k.fbt._("based on your content", null, {
							hk: "3u8Nrt"
						}),
						onClick: () => {
							r(e), a(Object(z.q)(e.name, t))
						},
						lockTitleWithEllipsis: !0
					})))), o.a.createElement("span", {
						ref: c,
						key: "recommended-render"
					}))
				},
				X = e => {
					const t = Object(d.d)(),
						{
							isPending: n,
							hasData: r,
							isChanged: a,
							items: i,
							isRedditRec: c
						} = Object(d.e)(Object(l.c)({
							isPending: B.h,
							hasData: B.c,
							isChanged: B.d,
							items: B.b,
							isRedditRec: B.i
						}));
					return Object(s.useEffect)(() => {
						a && t(Object(V.j)())
					}, [a, t]), o.a.createElement("div", {
						className: J.a.wrapper,
						onMouseDown: e.onContainerMouseDown
					}, o.a.createElement("div", {
						className: J.a.title
					}, k.fbt._("Suggested communities", null, {
						hk: "4BebuH"
					})), o.a.createElement("div", {
						className: J.a.contentWrapper
					}, n && o.a.createElement(H.a, {
						sizePx: 30,
						className: J.a.spinner
					}), r && !n && o.a.createElement(Z, {
						items: i,
						isRedditRec: c,
						onSelectRecommendation: e.onSelectRecommendation
					})))
				},
				$ = Object(l.c)({
					isOpenAIPilotV1: B.e,
					shouldRenderRec: B.m
				});
			class ee extends o.a.Component {
				constructor(e) {
					super(e), this.inputRef = null, this.setInputRef = e => {
						this.inputRef = e, this.props.inputRef && this.props.inputRef(e)
					}, this.commitSelection = () => {
						const e = this.getPickerValue(!0);
						Object(x.c)(e.rawString) ? this.props.onChange(e, !0) : this.props.onChange({
							rawString: "",
							record: null
						}, !0), this.state.isOpen && this.setState({
							isOpen: !1
						})
					}, this.callOnChange = () => this.props.onChange(this.getPickerValue()), this.requestAutocomplete = v()(e => this.props.onGetSubredditAutocomplete(e), 200, {
						maxWait: 200
					}), this.selectItem = e => {
						const t = this.props.items[e];
						if (!t) throw new Error("Invalid item index");
						let n;
						n = t.type === y.a.OWN_PROFILE ? Object(i.d)(t.name) : Object(i.c)(t.name), this.setState({
							inputValue: n,
							focusedIndex: e
						}, this.commitSelection)
					}, this.onSelectRecommendation = e => {
						if (!e) throw new Error("Invalid item index");
						let t;
						t = e.type === y.a.OWN_PROFILE ? Object(i.d)(e.name) : Object(i.c)(e.name), this.props.onChange({
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
								items: s,
								value: o
							} = this.props;
						if (o && o.record && Object(i.a)(t, o.record.name)) return {
							...o,
							rawString: t
						};
						const r = s[n] || e && s.find(e => Object(i.a)(e.name, t));
						if (!r) return {
							rawString: t,
							record: null
						};
						const {
							type: a,
							id: c,
							name: d,
							iconUrl: l,
							primaryColor: u,
							allowedPostTypes: m
						} = r;
						return {
							rawString: t,
							record: Object(i.a)(t, d) ? {
								id: c,
								name: d,
								iconUrl: l,
								primaryColor: u,
								allowedPostTypes: m,
								type: a === y.a.OWN_PROFILE ? O.a.PROFILE : O.a.SUBREDDIT
							} : null
						}
					}, this.findNextEnabledItemIndex = e => {
						const t = e ? -1 : 1;
						let n = this.state.focusedIndex + t,
							s = this.props.items[n];
						for (; s;) {
							if (!s.disabled) return n;
							n += t, s = this.props.items[n]
						}
						return n
					}, this.moveSelection = (e = !1) => {
						const {
							value: t,
							items: n
						} = this.props;
						let s = this.findNextEnabledItemIndex(e);
						s < -1 ? s = n.length - 1 : s >= n.length && (s = -1);
						const o = -1 === s ? t.rawString : n[s].name;
						o && this.setState({
							focusedIndex: s,
							inputValue: o
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
						e.which === _.a.ArrowUp ? (this.moveSelection(!0), e.preventDefault()) : e.which === _.a.ArrowDown ? (this.moveSelection(), e.preventDefault()) : e.which === _.a.Enter || e.which === _.a.Tab ? (-1 !== this.state.focusedIndex ? this.selectItem(this.state.focusedIndex) : this.commitSelection(), e.which !== _.a.Tab && e.preventDefault()) : e.which === _.a.Escape && (this.inputRef && this.inputRef.blur(), e.preventDefault())
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
						isValid: s = !0,
						items: r,
						shouldRenderRec: a,
						value: i,
						shouldShowCreateCommunityButton: c
					} = this.props, {
						isActive: d,
						isOpen: l
					} = this.state, u = i.record;
					return o.a.createElement("div", {
						className: Object(E.a)(W.a.container, e, {
							[W.a.mIsActive]: d,
							[W.a.mIsInvalid]: !s
						})
					}, o.a.createElement(A, {
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
					}), !this.state.inputValue && l && a && o.a.createElement(X, {
						onSelectRecommendation: this.onSelectRecommendation,
						onContainerMouseDown: this.onDropdownContainerMouseDown
					}), l && (!a || !!this.state.inputValue) && o.a.createElement(F.a, {
						className: n ? W.a.subredditDropdownOpenAI : void 0,
						items: r,
						isValid: s,
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
				se = n("./src/reddit/selectors/subredditAutocomplete.ts"),
				oe = n("./src/reddit/selectors/user.ts");

			function re() {
				return (re = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ae = Object(g.u)(),
				ie = Object(u.a)(Object(l.a)((e, t) => t.value, (e, {
					allowCrosspostableOnly: t,
					includeUserProfile: n,
					value: s
				}) => Object(se.a)(e, {
					allowCrosspostableOnly: t,
					includeUserProfile: n,
					substring: s.rawString
				}), e => Object(oe.ib)(e) && Object(ne.j)(e), (e, t, n) => {
					const {
						suggestedItems: s,
						fallbackItems: o,
						isAllDataRetrieved: r
					} = t, a = s.length ? s : e.record ? [Object(x.a)(e.record)] : [];
					return {
						items: 0 === a.length && r ? o : a,
						haveSuggestions: a.length > 0,
						isAllDataRetrieved: t.isAllDataRetrieved,
						isAutocompletePending: t.isPending,
						shouldShowCreateCommunityButton: n
					}
				})),
				ce = {
					onGetInitialData: e => t => t(e ? h.d() : b.e()),
					onGetSubredditAutocomplete: p.a,
					openCommunityCreation: () => async (e, t) => {
						Object(z.b)(t()), e(Object(m.h)(f.a.SUBREDDIT_CREATION_MODAL_ID))
					}
				};
			class de extends o.a.Component {
				constructor() {
					super(...arguments), this.onGetSubredditAutocomplete = e => {
						this.props.onGetSubredditAutocomplete(e)
					}
				}
				componentDidMount() {
					this.props.onGetInitialData(!!this.props.allowCrosspostableOnly)
				}
				render() {
					return o.a.createElement(te, re({}, this.props, {
						onGetSubredditAutocomplete: this.onGetSubredditAutocomplete
					}))
				}
			}
			var le = ae(Object(d.b)(ie, ce)(de));
			class ue extends o.a.Component {
				constructor() {
					super(...arguments), this.renderPicker = e => o.a.createElement(le, {
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
					return o.a.createElement(c, {
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
			t.a = Object(s.memo)(Object(s.forwardRef)((e, t) => {
				const n = e.size || a.c.XS;
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
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/InternalLink/index.tsx"),
				r = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = n.n(r);
			t.a = s.a.wrapped(o.a, "unstyledInternalLink", a.a)
		},
		"./src/reddit/endpoints/comment/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "b", (function() {
				return _
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
					method: o.ib.POST,
					data: {
						id: t
					}
				}),
				p = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/unsave`),
					method: o.ib.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/lock`),
					method: o.ib.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/unlock`),
					method: o.ib.POST,
					data: {
						id: t
					}
				}),
				f = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/approve`),
					method: o.ib.POST,
					data: {
						id: t
					}
				}),
				g = (e, t, n) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/remove`),
					method: o.ib.POST,
					data: {
						id: t,
						spam: n
					}
				}),
				x = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: o.ib.POST,
					data: {
						id: t
					}
				}),
				C = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: o.ib.POST,
					data: {
						id: t
					}
				}),
				v = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: o.ib.POST,
					data: {
						id: t
					}
				}),
				E = (e, t, n, a) => {
					let i = Object(c.a)(Object(u.a)(Object(l.a)(`${s.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return a && (i = Object(d.a)(i)), Object(r.a)(e, {
						data: n,
						endpoint: i,
						method: o.ib.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				_ = (e, t, n, s) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/distinguish/${n}`),
					method: o.ib.POST,
					data: {
						id: t,
						sticky: s
					}
				})
		},
		"./src/reddit/endpoints/governance/badges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");
			async function r(e, t, n) {
				const r = Object(o.a)(e, {
						headers: {
							"X-HTTP-Method-Override": "GET"
						},
						method: "post",
						endpoint: `${s.a.metaUrl}/badges/${t}`,
						data: {
							selected: !0,
							users: n
						}
					}),
					a = await r;
				if (a.ok) {
					const e = {},
						t = {},
						n = a.body;
					return Object.keys(n).forEach(s => {
						const o = n[s];
						t[s] = o, e[o.userId] || (e[o.userId] = []), e[o.userId].push(o.id)
					}), {
						...a,
						body: {
							badges: t,
							usersAppliedBadges: e
						}
					}
				}
				return a
			}
			async function a(e, t, n) {
				const r = await Object(o.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/badges/${t}?users=${n}`
				});
				if (r.ok) {
					const e = {},
						t = [],
						n = r.body;
					return Object.keys(n).forEach(s => {
						const o = n[s];
						e[s] = o, t.push(o.id)
					}), {
						...r,
						body: {
							badges: e,
							userOwnedBadges: t
						}
					}
				}
				return r
			}

			function i(e, t, n, r = !0) {
				return Object(o.a)(e, {
					method: "patch",
					endpoint: `${s.a.metaUrl}/badges/${t}/${n}`,
					data: {
						selected: r
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "j", (function() {
				return a
			})), n.d(t, "i", (function() {
				return i
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
				return h
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "n", (function() {
				return x
			}));
			var s, o = n("./src/config.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "Ethereum Main Network";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function i(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby";
					case s.ArbitrumRinkeby:
						return "https://meta-api.reddit.com/ethereum/ethereum:5391184"
				}
				throw new Error(`No JSON RPC url for provider: ${e}`)
			}

			function c(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "homestead";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "rinkeby";
					case s.ArbitrumRinkeby:
						return 5391184
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}

			function d(e) {
				return e === s.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function l(e, t, n) {
				return Object(r.a)(e, {
					method: "post",
					endpoint: `${o.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function u(e, t, n) {
				return await Object(r.a)(e, {
					method: "post",
					endpoint: `${o.a.metaUrl}/crypto/${t}/registrations`,
					data: n
				})
			}
			async function m(e, t, n) {
				return await Object(r.a)(e, {
					method: "delete",
					endpoint: `${o.a.metaUrl}/crypto/${t}/registrations/${n}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumRinkeby = "ethereum:5391184", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader"
			}(s || (s = {}));
			const p = (e, t, n) => ({
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
				g = (e, t, n, s) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: n,
					amount: s
				});
			async function x(e, t) {
				return await Object(r.a)(e, {
					method: "put",
					endpoint: `${o.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/endpoints/governance/products/badges.ts": function(e, t, n) {
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
			var s = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function r(e, t) {
				return Object(o.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/products/${t}?types=badge`
				})
			}

			function a(e, t) {
				return Object(o.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/products/${t}?types=badge,membership`
				})
			}

			function i(e, t) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/orders`,
					data: t
				})
			}

			function c(e, t) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/orders`,
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
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/config.ts"),
				o = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e, t) {
				return Object(r.a)(e, {
					endpoint: `${s.a.metaUrl}/wallets/${t.subredditId}/me`,
					method: o.ib.GET
				}).then(e => {
					if (e.ok) {
						const n = e.body,
							s = {
								[t.subredditId]: n
							};
						return {
							...e,
							body: s
						}
					}
					return e
				})
			}

			function i(e, t) {
				return Object(r.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${s.a.metaUrl}/wallets/${t.subredditId}`,
					method: o.ib.POST,
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
				return t === c.i.MARKDOWN ? d.richtext_json = n : d.markdown_text = n, Object(o.a)(Object(r.a)(e, [a.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: s.ib.POST,
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
				return h
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "a", (function() {
				return _
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/reddit/helpers/flair.ts"),
				r = n("./src/reddit/helpers/richTextJson/index.ts"),
				a = n("./src/reddit/models/Post/index.ts"),
				i = n("./src/reddit/models/PostCreationForm/index.ts"),
				c = n("./src/reddit/models/ScheduledPost/index.ts"),
				d = n("./src/redditGQL/operations/CreateScheduledPost.json"),
				l = n("./src/redditGQL/operations/SubredditScheduledPosts.json");
			const u = (e, t) => Object(s.a)(e, {
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
				h = ({
					poll: e,
					schedule: t,
					submission: n,
					subredditId: s
				}) => ({
					collectionId: n.collectionId || "",
					discussionType: n.isChatPost ? a.b.Chat : a.b.Comment,
					isContestMode: n.isContestMode,
					isPostAsMetaMod: n.isPostAsMetaMod,
					isSpoiler: n.isSpoiler,
					isNsfw: n.isNSFW,
					poll: e && E(e),
					title: n.title,
					isOriginalContent: n.isOC,
					flair: n.flair ? {
						id: n.flair.templateId,
						text: Object(o.g)(n.flair)
					} : {},
					sticky: n.sticky,
					subredditId: s,
					suggestedCommentSort: n.suggestedSort,
					isSendReplies: n.sendReplies,
					...b(t),
					...C(n),
					assetIds: v(n)
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
					submission: s,
					subredditId: o
				}) => {
					const r = h({
						poll: e,
						schedule: t,
						submission: s,
						subredditId: o
					});
					return {
						id: n,
						...r,
						flair: Object.keys(r.flair || {}).length ? {
							...r.flair
						} : {
							id: "",
							text: ""
						}
					}
				},
				x = e => /^https?:\/\//i.test(e) ? e : `http://${e}`,
				C = e => {
					switch (e.kind) {
						case i.p.RICH_TEXT:
							return {
								content: {
									richText: JSON.stringify({
										document: e.document
									})
								}
							};
						case i.p.MARKDOWN:
							return {
								content: {
									markdown: e.markdown
								}
							};
						case i.p.LINK:
							return {
								content: {}, link: {
									url: x(e.url)
								}
							};
						default:
							return {
								content: {}
							}
					}
				},
				v = e => {
					let t = [];
					if (e.document) {
						const n = e.document || [];
						t = Object(r.d)(n)
					}
					return t
				},
				E = e => {
					if (e && e.options && e.duration && (e.options = e.options.map(e => ({
							text: e.text.trim()
						})).filter(e => !!e.text), e.options.length)) return e.duration = Math.floor(e.duration / 864e5), e
				},
				_ = (e, t) => Object(s.a)(e, {
					...d,
					variables: {
						input: t
					}
				})
		},
		"./src/reddit/endpoints/scheduledPosts/update.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/redditGQL/operations/UpdateScheduledPost.json"),
				o = n("./src/lib/makeGqlRequest/index.ts");
			const r = (e, t) => Object(o.a)(e, {
				...s,
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const s = Object(a.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(r.b)(s)(e => {
					const {
						featureEnabled: s,
						...r
					} = e, a = r;
					return s ? o.a.createElement(t, a) : void 0 !== n ? o.a.createElement(n, a) : null
				})
			}
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
		"./src/reddit/helpers/dragDropContext/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-dnd/lib/index.js"),
				o = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				r = n.n(o);
			t.a = Object(s.DragDropContext)(r.a)
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, n) {
			"use strict";

			function s(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let n = 0;
				return e.placement && t.placement && (n = e.placement.localeCompare(t.placement)), 0 === n && e.position && t.position && (n = e.position - t.position), 0 === n && (n = e.title.localeCompare(t.title)), n
			}

			function o(e) {
				return [...e].sort(s)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/helpers/externalAccount/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			const s = () => new BroadcastChannel("external_account"),
				o = e => {
					const t = s();
					t.postMessage({
						type: "connected",
						provider: e
					}), t.close()
				}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");
			t.a = () => ({
				type: o.H.SERVER_ERROR,
				fields: [{
					field: "",
					msg: s.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/bignumber.js/bignumber.js"),
				o = n("./src/lib/prettyPrintNumber/index.ts");

			function r(e, t) {
				const n = new s.BigNumber(e),
					o = new s.BigNumber(t || 1);
				return n.dividedToIntegerBy(o).toString()
			}

			function a(e, t) {
				return Object(o.b)(parseInt(r(e, t), 10))
			}

			function i(e, t) {
				const n = new s.BigNumber(e),
					o = new s.BigNumber(t || 1);
				return n.multipliedBy(o).toFixed(0)
			}
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js");

			function o(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function r(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(o).join(" ") : s.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function a(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return r
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "d", (function() {
				return b
			}));
			const s = e => e.subredditInfoById.scheduledPosts.recurringPosts ? {
					recurringPosts: {
						models: p(e.subredditInfoById.scheduledPosts.recurringPosts.edges),
						pageInfo: {
							...e.subredditInfoById.scheduledPosts.recurringPosts.pageInfo
						}
					},
					recurringPostsIds: e.subredditInfoById.scheduledPosts.recurringPosts.edges.map(e => e.node.id)
				} : {},
				o = e => e.subredditInfoById.scheduledPosts.standalonePosts ? {
					standalonePosts: {
						models: u(e.subredditInfoById.scheduledPosts.standalonePosts.edges),
						pageInfo: {
							...e.subredditInfoById.scheduledPosts.standalonePosts.pageInfo
						}
					},
					standalonePostsIds: e.subredditInfoById.scheduledPosts.standalonePosts.edges.map(e => e.node.id)
				} : {},
				r = e => ({
					...e,
					subredditInfoById: {
						id: e.subredditInfoById.id,
						scheduledPosts: {
							...s(e),
							...o(e)
						}
					}
				}),
				a = e => e.subredditInfoById.scheduledPosts && !!e.subredditInfoById.scheduledPosts.recurringPosts && !!e.subredditInfoById.scheduledPosts.recurringPostsIds,
				i = e => e.subredditInfoById.scheduledPosts && !!e.subredditInfoById.scheduledPosts.standalonePosts && !!e.subredditInfoById.scheduledPosts.standalonePostsIds,
				c = e => a(e) && i(e),
				d = e => !a(e) && i(e),
				l = e => a(e) && !i(e),
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
				p = e => e.map(e => h(e.node)),
				h = e => ({
					...m(e),
					frequency: e.frequency,
					byMonthDays: e.byMonthDays || [],
					byWeekDays: e.byWeekDays || [],
					interval: e.interval || 1
				}),
				b = e => (e => !!e.frequency && !!e.interval)(e) ? h(e) : m(e)
		},
		"./src/reddit/helpers/isArrayEqual.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/isEqual.js"),
				o = n.n(s),
				r = n("./node_modules/lodash/xorWith.js"),
				a = n.n(r);
			t.a = (e, t) => {
				const n = a()(e, t, o.a);
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
				return a
			}));
			var s = n("./src/lib/constants/index.ts");
			const o = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case s.H.NO_STRIPE_SUBSCRIPTION:
							case s.H.USER_DOESNT_EXIST:
							case s.H.USER_REQUIRED_ERROR:
							case s.H.VALIDATION_ERROR:
								return e;
							case s.H.NO_USER:
							case s.H.NO_TEXT:
							case s.H.NO_URL:
								return s.H.VALIDATION_ERROR;
							case s.H.CREDIT_CARD_FAILURE:
							case s.H.CREDIT_CARD_FAILURE_GENERIC:
								return s.H.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return s.H.SUBMIT_VALIDATION_ERROR
						}
					}
					return s.H.VALIDATION_ERROR
				},
				r = e => {
					const t = e.body;
					return {
						type: o(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				a = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: r(e)
					} : e
				};
			t.a = r
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
				return x
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "g", (function() {
				return y
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			n("./node_modules/react/index.js");
			const o = function(e) {
				if (void 0 === e) throw new Error("invariant(...): Second argument must be a string.")
			};

			function r(e, t, ...n) {
				if (o(t), !e) {
					let e;
					if (void 0 === t) e = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
					else {
						let s = 0;
						(e = new Error(t.replace(/%s/g, () => String(n[s++])))).name = "Invariant Violation"
					}
					throw e.framesToPop = 1, e
				}
			}
			const a = {
					AND: "AND",
					NONE: "NONE",
					OR: "OR"
				},
				i = {
					COMMA: "COMMA",
					SEMICOLON: "SEMICOLON"
				};
			var c = function(e, t, n) {
					const o = e.length;
					if (0 === o) return "";
					if (1 === o) return e[0];
					const c = e[o - 1];
					let d = e[0];
					for (let r = 1; r < o - 1; ++r) switch (n) {
						case i.SEMICOLON:
							d = s.fbt._("{previous items}; {following items}", [s.fbt._param("previous items", d), s.fbt._param("following items", e[r])], {
								hk: "4hs4xq"
							});
							break;
						default:
							d = s.fbt._("{previous items}, {following items}", [s.fbt._param("previous items", d), s.fbt._param("following items", e[r])], {
								hk: "2z8RMb"
							})
					}
					return function(e, t, n, o) {
						switch (n) {
							case a.AND:
								return s.fbt._("{list of items} and {last item }", [s.fbt._param("list of items", e), s.fbt._param("last item ", t)], {
									hk: "1ylan1"
								});
							case a.OR:
								return s.fbt._("{list of items} or {last item}", [s.fbt._param("list of items", e), s.fbt._param("last item", t)], {
									hk: "3q8AmB"
								});
							case a.NONE:
								switch (o) {
									case i.SEMICOLON:
										return s.fbt._("{previous item}; {last item}", [s.fbt._param("previous item", e), s.fbt._param("last item", t)], {
											hk: "1h77rJ"
										});
									default:
										return s.fbt._("{list of items}, {last item}", [s.fbt._param("list of items", e), s.fbt._param("last item", t)], {
											hk: "3Q0iaX"
										})
								}
								default:
									r(!1, "Invalid conjunction %s provided to intlList", n)
						}
					}(d, c, t || a.AND, n || i.COMMA)
				},
				d = n("./src/lib/timezone/index.ts"),
				l = n("./src/reddit/helpers/isArrayEqual.ts"),
				u = n("./src/reddit/helpers/ordinal/index.ts"),
				m = n("./src/reddit/models/ScheduledPost/index.ts");
			const p = e => {
					return `${e.toLocaleDateString(void 0,{month:"numeric",day:"numeric"})} @ ${e.toLocaleTimeString(void 0,{hour:"numeric",minute:"numeric"}).replace(" ","").toLowerCase()}`
				},
				h = (e, t) => {
					if (e && t) {
						const n = Object(d.f)(f(e, t)),
							o = p(n);
						return s.fbt._("Submit post at {time}", [s.fbt._param("time", o)], {
							hk: "IZ3L"
						})
					}
					return s.fbt._("Submit post at scheduled event time", null, {
						hk: "lYsoU"
					})
				},
				b = e => e.slice(0, 5),
				f = (e, t) => `${e}T${b(t)}:00`,
				g = e => {
					const [t, n] = e.split("T");
					return [t, b(n)]
				},
				x = e => {
					const [t, n] = g(e);
					if (t && n) {
						const e = Object(d.f)(f(t, n));
						return p(e)
					}
					return ""
				},
				C = e => {
					const t = Object(d.d)(e);
					let n, s = e;
					if (t) {
						n = t.offset, s = `(GMT${Object(d.e)(t.offset)}) ${e.replace("/"," - ").replace(/_/g," ")}`
					}
					return {
						name: e,
						displayText: s,
						offset: n
					}
				},
				v = e => "string" == typeof e,
				E = e => {
					const t = new Date,
						n = e - t.getDay();
					return t.setDate(t.getDate() + n), t.toLocaleDateString(void 0, {
						weekday: "long"
					})
				},
				_ = e => {
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
					if (e.frequency === m.d.Hourly) return 2 === e.interval ? s.fbt._("Every other hour", null, {
						hk: "64vzK"
					}) : e.interval > 1 ? s.fbt._("Every {hour interval} hours", [s.fbt._param("hour interval", e.interval.toString())], {
						hk: "3x8zaD"
					}) : s.fbt._("Every hour", null, {
						hk: "1VzCs"
					});
					if (e.frequency === m.d.Daily) return 2 === e.interval ? s.fbt._("Every other day at {start time}", [s.fbt._param("start time", t)], {
						hk: "yTynp"
					}) : e.interval > 1 ? s.fbt._("Every {day interval} days at {start time}", [s.fbt._param("day interval", e.interval.toString()), s.fbt._param("start time", t)], {
						hk: "2OoGlG"
					}) : s.fbt._("Every day at {start time}", [s.fbt._param("start time", t)], {
						hk: "1cvwm2"
					});
					if (e.frequency === m.d.Weekly) {
						const n = (e => c(e.map(m.k).sort((e, t) => e - t).map(E), a.AND, i.COMMA))(e.byWeekDays);
						return 2 === e.interval ? s.fbt._("Every other week on {days of week } at {start time}", [s.fbt._param("days of week ", n), s.fbt._param("start time", t)], {
							hk: "43xwaa"
						}) : e.interval > 1 ? s.fbt._("Every {interval} weeks on {days of week} at {start time}", [s.fbt._param("interval", e.interval.toString()), s.fbt._param("days of week", n), s.fbt._param("start time", t)], {
							hk: "2IVbH"
						}) : s.fbt._("Every week on {days of week} at {start time}", [s.fbt._param("days of week", n), s.fbt._param("start time", t)], {
							hk: "2Zl0L"
						})
					}
					const n = (e => c(e.sort((e, t) => e - t).map(u.a), a.AND, i.COMMA))(e.byMonthDays);
					return 2 === e.interval ? s.fbt._({
						"*": "Every other month on the {days of month} days at {start time}",
						_1: "Every other month on the {days of month} day at {start time}"
					}, [s.fbt._param("days of month", n), s.fbt._plural(e.byMonthDays.length), s.fbt._param("start time", t)], {
						hk: "okH9o"
					}) : e.interval > 1 ? s.fbt._({
						"*": "Every {interval} months on the {days of month} days at {start time}",
						_1: "Every {interval} months on the {days of month} day at {start time}"
					}, [s.fbt._param("interval", e.interval.toString()), s.fbt._param("days of month", n), s.fbt._plural(e.byMonthDays.length), s.fbt._param("start time", t)], {
						hk: "KqN3x"
					}) : s.fbt._({
						"*": "Every month on the {days of month} days at {start time}",
						_1: "Every month on the {days of month} day at {start time}"
					}, [s.fbt._param("days of month", n), s.fbt._plural(e.byMonthDays.length), s.fbt._param("start time", t)], {
						hk: "1jBuYc"
					})
				},
				O = e => {
					let t = null;
					e.frequency && (t = e.frequency), (e.byWeekDays.length > 1 || e.byMonthDays.length > 1 || e.interval > 1) && (t = m.b);
					const n = Object(d.f)(e.publishAt),
						s = Object(m.q)(n.getDay()),
						o = n.getDate();
					return 1 === e.byWeekDays.length && e.byWeekDays[0] !== s && (t = m.b), 1 === e.byMonthDays.length && e.byMonthDays[0] !== o && (t = m.b), {
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
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = n.n(o);
			const a = ({
					isLoading: e
				}) => Object(s.a)(r.a.loadingBackground, {
					[r.a["m-loading"]]: e
				}),
				i = e => Object(s.a)(r.a.loadingBar, a(e))
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
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "h", (function() {
				return C
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/models/PostDraft/index.ts"),
				a = n("./src/reddit/selectors/comments.ts"),
				i = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/index.ts");
			const l = "comment_composer",
				u = e => {
					const t = Object(i.n)(e);
					return {
						source: l,
						action: s.c.CLICK,
						...Object(c.defaults)(e),
						screen: Object(c.screen)(e),
						subreddit: Object(c.subreddit)(e),
						post: t ? Object(c.post)(e, t) : null,
						profile: Object(c.profile)(e),
						correlationId: Object(o.c)(o.a.CommentComposer)
					}
				},
				m = async (e, t, s, o) => {
					const r = {
							commentId: o,
							commentsPageKey: s
						},
						i = o && Object(a.j)(e, r) || 0,
						{
							getFlairData: l
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(d.a)({
						noun: "comment",
						...u(e),
						comment: o ? Object(c.comment)(e, o) : null,
						listing: Object(c.listing)(e, void 0, {
							depth: i
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: l(e)
					})
				}, p = (e, t, n, s) => {
					const o = u(e);
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
				}, h = e => Object(d.a)({
					noun: "cancel",
					...u(e)
				}), b = (e, t) => {
					t === r.c.replyToPost && Object(d.a)({
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
				}), x = e => Object(d.a)({
					noun: "save_edit",
					...u(e)
				}), C = (e, t) => n => {
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
				return h
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "i", (function() {
				return g
			}));
			var s = n("./src/reddit/models/Gold/Award.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/helpers/trackers/gild.ts");
			const i = e => ({
					...o.defaults(e),
					screen: o.screen(e),
					subreddit: o.subreddit(e),
					userSubreddit: o.userSubreddit(e)
				}),
				c = e => ({
					awardId: e.id,
					awardName: e.name,
					isModAward: e.awardType === s.f.Moderator,
					isTemporatyAward: !!e.endsAt,
					numberCoins: e.coinPrice,
					numberMonths: Math.floor((e.daysOfPremium || 0) / 30),
					numberCoinsToRecipient: e.coinReward || 0,
					numberCoinsToCommunity: e.subredditCoinReward || 0,
					type: Object(a.getAwardTypeFromAward)(e)
				}),
				d = () => e => ({
					...i(e),
					source: "awards",
					action: "click",
					correlationId: Object(r.c)(r.a.AwardCreationFlow),
					noun: "create"
				}),
				l = e => t => ({
					...i(t),
					source: "awards",
					action: "click",
					correlationId: Object(r.c)(r.a.AwardDeletionFlow),
					noun: "delete",
					goldPurchase: e ? c(e) : null,
					media: e ? {
						url: e.icon.url
					} : null
				}),
				u = (e, t, n) => s => ({
					...i(s),
					source: "create_award",
					action: e,
					correlationId: Object(r.c)(r.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n
				}),
				m = (e, t, n, s) => o => ({
					...i(o),
					source: "create_award",
					action: "upload",
					correlationId: Object(r.c)(r.a.AwardCreationFlow),
					noun: "image",
					actionInfo: s ? {
						reason: s
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
				p = (e, t, n) => s => ({
					...i(s),
					source: "create_award",
					action: "click",
					correlationId: Object(r.c)(r.a.AwardCreationFlow),
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
				h = (e, t, n) => s => ({
					...i(s),
					source: "create_award",
					action: e,
					correlationId: Object(r.c)(r.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n ? c(n) : null
				}),
				b = (e, t, n) => s => ({
					...i(s),
					source: "awards",
					action: "click",
					noun: n,
					goldPurchase: c(e),
					profile: o.profileById(s, t),
					subreddit: o.subredditById(s, t)
				}),
				f = (e, t) => b(e, t, "disable_in_community"),
				g = (e, t) => b(e, t, "enable_in_community")
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
				return v
			})), n.d(t, "clickFlagAwardUsage", (function() {
				return E
			})), n.d(t, "clickCancelFlagAwardUsage", (function() {
				return _
			})), n.d(t, "clickConfirmFlagAwardUsage", (function() {
				return O
			})), n.d(t, "clickReportAward", (function() {
				return y
			})), n.d(t, "clickCancelReportAward", (function() {
				return k
			})), n.d(t, "clickConfirmReportAward", (function() {
				return w
			})), n.d(t, "viewGildModalEvent", (function() {
				return S
			})), n.d(t, "clickSelectAwardEvent", (function() {
				return j
			})), n.d(t, "triggerAnonymousEvent", (function() {
				return P
			})), n.d(t, "clickMessageInputEvent", (function() {
				return T
			})), n.d(t, "typeMessageInputEvent", (function() {
				return I
			})), n.d(t, "clickLearnMoreLinkEvent", (function() {
				return N
			})), n.d(t, "clickQuestionMarkEvent", (function() {
				return D
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
				return V
			}));
			var s = n("./src/reddit/models/Gold/Award.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				r = n("./src/telemetry/models/GoldPurchase.ts"),
				a = n("./src/reddit/helpers/correlationIdTracker.ts"),
				i = n("./src/reddit/helpers/isComment.ts"),
				c = n("./src/reddit/selectors/gild.ts");
			const d = e => e.awardType === s.f.Global && e.awardSubType === s.d.Appreciation ? r.GoldPurchaseType.GidAppreciation : e.awardType === s.f.Global && e.awardSubType === s.d.Premium ? r.GoldPurchaseType.GidPremium : e.awardSubType === s.d.Group ? r.GoldPurchaseType.GidGroup : e.awardType === s.f.Community ? r.GoldPurchaseType.GidCommunity : e.awardType === s.f.Moderator ? r.GoldPurchaseType.GidMod : e.awardType === s.f.Global && e.awardSubType === s.d.Global ? r.GoldPurchaseType.GidGlobal : r.GoldPurchaseType.GidUnknown,
				l = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: d(e),
					...t
				}),
				u = (e, t) => ({
					...o.defaults(e),
					comment: t ? o.comment(e, t) : void 0,
					correlationId: Object(c.b)(e) || Object(a.d)(a.a.GildingFlow, !1),
					post: t ? o.post(e, t) : void 0,
					screen: o.screen(e),
					subreddit: o.subreddit(e),
					userSubreddit: o.userSubreddit(e)
				}),
				m = e => t => ({
					...u(t, e),
					source: Object(i.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold",
					feed: o.feed(t)
				}),
				p = e => t => ({
					...u(t, e),
					source: "stream_player",
					action: "click",
					noun: "give_gold"
				}),
				h = e => t => ({
					...u(t, e),
					source: Object(i.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award",
					feed: o.feed(t)
				}),
				b = (e, t) => n => ({
					...u(n, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: l(e)
				}),
				f = (e, t) => n => ({
					...u(n, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: l(e)
				}),
				g = (e, t) => n => ({
					...u(n, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: l(e)
				}),
				x = e => (t, n) => s => ({
					...u(s, n),
					source: Object(i.a)(n) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: l(t)
				}),
				C = x("award_hovercard_report"),
				v = x("cancel_award_hovercard_report"),
				E = x("flag_award"),
				_ = x("cancel_flag_award"),
				O = x("confirm_flag_award"),
				y = x("report_community_award"),
				k = x("cancel_report_community_award"),
				w = x("confirm_report_community_award"),
				S = (e, t, n) => s => ({
					...u(s, n),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				j = (e, t, n) => s => ({
					...u(s, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: l(e, n)
				}),
				P = (e, t) => n => ({
					...u(n, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				T = e => t => ({
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
				N = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				D = e => t => ({
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
						contentType: Object(i.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				R = (e, t) => n => ({
					...u(n, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(i.a)(e) ? "comment" : "post",
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
					numberCoins: s,
					thingId: o
				}) => r => ({
					...u(r, o),
					source: "give_gold",
					action: "view",
					noun: "karma_success",
					goldPurchase: {
						contentType: Object(i.a)(o) ? "comment" : "post",
						awardeeKarmaEarned: t,
						awarderKarmaEarned: n,
						numberCoins: s,
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
				V = () => e => ({
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
				return x
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "i", (function() {
				return O
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/models/Gold/ProductOffer.ts"),
				r = n("./src/reddit/selectors/gold/giveAwards.ts"),
				a = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				i = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/models/GoldPurchase.ts"),
				l = n("./src/telemetry/models/Payment.ts"),
				u = n("./src/reddit/helpers/trackers/gild.ts"),
				m = n("./src/reddit/helpers/correlationIdTracker.ts"),
				p = n("./src/reddit/helpers/isComment.ts"),
				h = n("./src/reddit/helpers/trackers/communityAwards.ts");
			const b = (e, t) => {
					const {
						thingId: n,
						packageId: l
					} = t, b = !!n, f = r.b(e), g = f ? Object(u.getAwardTypeFromAward)(f) : null, x = b ? g : i.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, C = n ? Object(p.a)(n) ? "comment" : "post" : void 0, v = l || i.t(e), E = [...Object(a.d)(e), ...Object(a.f)(e)].filter(e => e.mobileId === v)[0], _ = t.offerContext || (f && 0 === f.coinPrice ? o.a.StorefrontFreeAward : Object(o.d)(E, b)), O = E ? Math.round(1e4 * (E.baselinePennies - E.pennies) / E.baselinePennies) / 100 : 0, y = E ? Math.round(1e4 * (E.coins - E.baselineCoins) / E.coins) / 100 : 0, k = E ? E.baselinePennies !== E.pennies ? `${O}_percent_price` : E.baselineCoins !== E.coins ? `${y}_percent_bonus` : void 0 : void 0, w = x === d.GoldPurchaseType.Premium ? s.xb : E ? E.pennies : void 0;
					return {
						...c.defaults(e),
						comment: n ? c.comment(e, n) : null,
						correlationId: i.r(e) || Object(m.d)(m.a.GoldPayment, !1),
						post: n ? c.post(e, n) : null,
						screen: c.screen(e),
						subreddit: n ? c.subreddit(e) : null,
						goldPurchase: {
							...f ? Object(h.a)(f) : null,
							type: x,
							gildedContent: b,
							contentType: C,
							numberCoins: E ? E.coins : void 0,
							offerContext: _,
							offerType: k
						},
						payment: {
							currency: "USD",
							amountInSmallestDenom: w
						},
						purchase: {
							priceMicros: w
						}
					}
				},
				f = (e, t, n) => s => ({
					...b(s, {
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
				x = e => t => ({
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
				v = (e, t) => n => ({
					...b(n, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				E = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				_ = (e, t, n) => s => {
					const o = b(s, {
						packageId: t,
						thingId: e,
						offerContext: n
					});
					return {
						...o,
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: {
							...o.payment,
							defaultOption: l.PaymentMethod.Paypal
						},
						goldPurchase: {
							...o.goldPurchase,
							source: e ? d.GiveGold : i.o(s) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				O = e => t => {
					var n;
					const s = b(t, {
						thingId: e
					});
					return {
						...s,
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: {
							...s.payment,
							method: (null === (n = t.platform.currentPage) || void 0 === n ? void 0 : n.queryParams.thanks) ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
						}
					}
				}
		},
		"./src/reddit/helpers/trackers/postCollection.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "o", (function() {
				return u
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "n", (function() {
				return b
			})), n.d(t, "m", (function() {
				return f
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "p", (function() {
				return C
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "q", (function() {
				return _
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "l", (function() {
				return y
			})), n.d(t, "i", (function() {
				return k
			})), n.d(t, "d", (function() {
				return w
			}));
			var s, o, r = n("./src/reddit/constants/tracking.ts"),
				a = n("./src/reddit/helpers/trackers/postEvent.ts"),
				i = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.collection = "collection", e.collectionComposer = "collection_composer", e.postComposer = "post_composer", e.postOverflowMenu = "post_overflow_menu"
			}(s || (s = {})),
			function(e) {
				e.post = "post", e.follow = "follow", e.unfollow = "unfollow", e.screen = "screen", e.eventEducation = "event_education", e.eventEducationGotIt = "event_education_got_it", e.collectionEducation = "collection_education", e.collectionEducationGotIt = "collection_education_got_it", e.collectionCancel = "cancel", e.collectionCreate = "collection_create", e.collectionSelect = "collection_select", e.collectionDelete = "collection_delete", e.collectionEdit = "collection_edit", e.collectionAddPost = "collection_add_post", e.collectionRemovePost = "remove_post_from_collection", e.startEvent = "start_event"
			}(o || (o = {}));
			const d = e => t => ({
					source: s.collection,
					noun: o.post,
					...m(t, e)
				}),
				l = ({
					postId: e,
					isFollowed: t
				}) => n => ({
					source: s.collection,
					noun: t ? o.unfollow : o.follow,
					...m(n, e)
				}),
				u = ({
					postId: e,
					isFollowed: t
				}) => n => ({
					source: a.a.postEvent,
					noun: t ? o.unfollow : o.follow,
					...m(n, e)
				}),
				m = (e, t) => {
					const n = {
						...c.defaults(e),
						action: r.c.CLICK,
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
					action: r.c.VIEW,
					noun: o.collectionEducation
				}),
				h = e => ({
					...g(e),
					action: r.c.CLICK,
					noun: o.collectionEducationGotIt
				}),
				b = e => ({
					...g(e),
					action: r.c.VIEW,
					noun: o.eventEducation
				}),
				f = e => ({
					...g(e),
					action: r.c.CLICK,
					noun: o.eventEducationGotIt
				}),
				g = e => ({
					...c.defaults(e),
					subreddit: c.subreddit(e),
					source: s.postComposer
				}),
				x = (e, t) => n => ({
					...m(n, e),
					source: t || s.postOverflowMenu,
					noun: o.collectionAddPost
				}),
				C = e => t => ({
					...m(t, e),
					source: s.collectionComposer,
					noun: o.collectionRemovePost
				}),
				v = () => e => ({
					...m(e),
					source: s.collectionComposer,
					noun: o.collectionCancel
				}),
				E = () => e => {
					const t = Object(i.n)(e) || void 0;
					return {
						...m(e, t),
						source: s.collectionComposer,
						noun: o.collectionCreate
					}
				},
				_ = () => e => ({
					...m(e),
					source: s.collectionComposer,
					noun: o.collectionSelect
				}),
				O = e => t => ({
					...c.defaults(t),
					subreddit: c.subreddit(t),
					source: s.collectionComposer,
					action: r.c.CLICK,
					noun: o.collectionDelete,
					postCollection: c.postCollectionI13nByCollectionIdSelector(t, {
						collectionId: e
					})
				}),
				y = e => t => ({
					...m(t),
					source: s.collectionComposer,
					noun: o.collectionEdit,
					postCollection: c.postCollectionI13nByCollectionIdSelector(t, {
						collectionId: e
					})
				}),
				k = e => t => ({
					...m(t, e),
					source: s.collectionComposer,
					noun: o.startEvent
				}),
				w = () => e => {
					const t = Object(i.n)(e) || void 0;
					return {
						...m(e, t),
						source: s.collectionComposer,
						action: r.c.VIEW,
						noun: o.screen
					}
				}
		},
		"./src/reddit/helpers/trackers/postEvent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "d", (function() {
				return C
			}));
			var s, o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/eventTools/index.ts"),
				a = n("./src/lib/timezone/index.ts"),
				i = n("./src/reddit/constants/tracking.ts"),
				c = n("./src/reddit/models/PostCreationForm/index.ts"),
				d = n("./src/reddit/selectors/platform.ts"),
				l = n("./src/reddit/selectors/postCreations.ts"),
				u = n("./src/reddit/selectors/telemetry.ts"),
				m = n("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(s || (s = {}));
			const p = e => u.actionInfo(e, {
					pageType: "event_submit"
				}),
				h = e => {
					Object(m.a)({
						...u.defaults(e),
						source: s.postComposer,
						action: i.c.CLICK,
						noun: "event_create",
						subreddit: u.subreddit(e)
					})
				},
				b = e => {
					Object(m.a)({
						...u.defaults(e),
						source: s.postComposer,
						action: i.c.CLICK,
						noun: "event_edit",
						subreddit: u.subreddit(e),
						postEvent: v(e),
						postComposer: E(e)
					})
				},
				f = () => e => ({
					source: s.eventComposer,
					action: i.c.VIEW,
					noun: i.b.SCREEN,
					actionInfo: p(e),
					postEvent: v(e)
				}),
				g = e => t => ({
					...y(t, Object(d.n)(t)),
					source: s.postComposer,
					noun: "apply",
					postComposer: _(e)
				}),
				x = () => e => ({
					...y(e, Object(d.n)(e)),
					noun: "cancel",
					actionInfo: p(e)
				}),
				C = e => t => ({
					...y(t, Object(d.n)(t)),
					noun: "delete",
					actionInfo: p(t),
					postComposer: E(t),
					postEvent: O(e)
				}),
				v = e => {
					const t = Object(l.p)(e);
					return t && O(t)
				},
				E = e => _(Object(l.p)(e)),
				_ = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === c.j.AtEventTime ? Object(a.f)(e.startDate).getTime() / o.Qb : void 0
					}
				},
				O = e => {
					const t = Object(a.f)(e.startDate).getTime() / o.Qb,
						n = Object(a.f)(e.endDate).getTime() / o.Qb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: n,
						eventState: Object(r.e)(t, n)
					}
				},
				y = (e, t) => {
					const n = {
						source: s.eventComposer,
						action: i.c.CLICK,
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
				return a
			})), n.d(t, "r", (function() {
				return i
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
				return h
			})), n.d(t, "u", (function() {
				return b
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "x", (function() {
				return g
			})), n.d(t, "l", (function() {
				return x
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "y", (function() {
				return v
			})), n.d(t, "w", (function() {
				return E
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "j", (function() {
				return O
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "k", (function() {
				return S
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "t", (function() {
				return P
			})), n.d(t, "e", (function() {
				return T
			}));
			var s = n("./src/reddit/models/Prediction/index.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = "poll",
				a = e => ({
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
				c = e => ({
					...Object(o.defaults)(e),
					source: r,
					action: "view",
					noun: "predict_info_modal"
				}),
				d = e => ({
					...Object(o.defaults)(e),
					source: r,
					action: "close",
					noun: "predict_info_modal"
				}),
				l = e => ({
					...Object(o.defaults)(e),
					source: r,
					action: "view",
					noun: "predict_option_modal"
				}),
				u = ({
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
				m = ({
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
					currency: t,
					amount: n
				}) => a => {
					const i = t === s.a.Coins ? n : void 0,
						c = t === s.a.Tokens ? n : void 0;
					return {
						...Object(o.defaults)(a),
						source: r,
						action: "close",
						noun: "prediction_modal",
						poll: Object(o.poll)(a, e, !1, i, c)
					}
				},
				h = e => ({
					...Object(o.defaults)(e),
					source: r,
					action: "click",
					noun: "add_coins"
				}),
				b = e => t => ({
					...Object(o.defaults)(t),
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
					...Object(o.defaults)(t),
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
					...Object(o.defaults)(n),
					source: r,
					action: "view",
					noun: "token_claim_modal",
					poll: Object(o.poll)(n, t, !1, void 0, void 0, e)
				}),
				x = ({
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
				v = () => e => ({
					...Object(o.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "tournament_leaderboard",
						reason: "predictions_tab"
					}
				}),
				E = () => e => ({
					...Object(o.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "mod_tool_predict"
					}
				}),
				_ = () => e => ({
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
				y = e => t => ({
					...Object(o.defaults)(t),
					source: "mod_tool_predict",
					action: "click",
					noun: "enable_predictions",
					actionInfo: {
						pageType: "predictions_picker"
					},
					setting: {
						value: e ? "1" : "0",
						oldValue: e ? "0" : "1"
					},
					subreddit: Object(o.subreddit)(t)
				}),
				k = () => e => ({
					...Object(o.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "next"
				}),
				w = () => e => ({
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
				P = () => e => ({
					...Object(o.defaults)(e),
					source: "predictions_tab",
					action: "view",
					noun: "predictions_how_it_works",
					subreddit: Object(o.subreddit)(e)
				}),
				T = () => e => ({
					...Object(o.defaults)(e),
					source: "predictions_how_it_works",
					action: "click",
					noun: "learn_more",
					subreddit: Object(o.subreddit)(e)
				})
		},
		"./src/reddit/helpers/trackers/privateCommunity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => t => ({
					...s.defaults(t),
					source: e,
					action: "click",
					noun: "request_to_join_button",
					subreddit: s.subreddit(t)
				}),
				r = e => t => ({
					...s.defaults(t),
					source: e,
					action: "click",
					noun: "request_to_join_submit",
					subreddit: s.subreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/restrictedCommunity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => t => ({
					...s.defaults(t),
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: s.subreddit(t)
				}),
				r = e => t => ({
					...s.defaults(t),
					source: "request_restricted_approval_form",
					action: "click",
					noun: e,
					subreddit: s.subreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return i
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
				return h
			})), n.d(t, "r", (function() {
				return b
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "j", (function() {
				return k
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "x", (function() {
				return S
			})), n.d(t, "u", (function() {
				return j
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "s", (function() {
				return T
			})), n.d(t, "v", (function() {
				return I
			})), n.d(t, "w", (function() {
				return N
			}));
			var s = n("./src/reddit/models/ScheduledPost/index.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					...o.defaults(e),
					screen: o.screen(e),
					subreddit: o.subreddit(e),
					userSubreddit: o.userSubreddit(e)
				}),
				a = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(s.p)(e)
				}),
				i = () => e => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post",
					...r(e)
				}),
				c = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer",
					...r(e)
				}),
				d = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date",
					...r(e)
				}),
				l = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time",
					...r(e)
				}),
				u = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone",
					...r(e)
				}),
				m = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply",
					...r(e)
				}),
				p = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel",
					...r(e)
				}),
				h = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit",
					...r(t),
					scheduledPost: a(e)
				}),
				b = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...r(t),
					scheduledPost: a(e)
				}),
				f = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts",
					...r(e)
				}),
				g = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...r(e)
				}),
				x = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...r(e)
				}),
				C = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...r(e)
				}),
				v = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...r(t),
					actionInfo: o.actionInfo(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				E = {
					[s.d.Hourly]: "hourly_frequency",
					[s.d.Daily]: "daily_frequency",
					[s.d.Weekly]: "weekly_frequency",
					[s.d.Monthly]: "monthly_frequency",
					[s.b]: "custom_frequency"
				},
				_ = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : E[e],
					...r(t)
				}),
				O = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...r(e)
				}),
				y = (e, t, n) => a => ({
					source: "post",
					action: "click",
					noun: Object(s.l)(e),
					...r(a),
					actionInfo: o.actionInfo(a, {
						settingValue: t ? "true" : "false",
						pageType: n ? "recurring_posts" : "scheduled_posts"
					})
				}),
				k = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...r(e)
				}),
				w = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...r(e)
				}),
				S = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...r(e)
				}),
				j = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...r(e),
					scheduledPost: a(t)
				}),
				P = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...r(e)
				}),
				T = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...r(e),
					scheduledPost: a(t)
				}),
				I = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...r(e)
				}),
				N = () => (e, t) => {
					const n = r(e);
					return {
						source: "post",
						action: "view",
						noun: "error",
						...n,
						actionInfo: {
							...n.actionInfo,
							reason: "failed_post"
						},
						scheduledPost: a(t)
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
				return b
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "k", (function() {
				return C
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "m", (function() {
				return S
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
					source: "avatar",
					action: "click",
					noun: "try_this_look_post",
					snoovatar: r.snoovatarActiveForBuilderEvent(e)
				}),
				u = e => ({
					...r.defaults(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: r.snoovatarActiveForBuilderEvent(e)
				}),
				m = e => ({
					...r.defaults(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: r.snoovatarActiveForBuilderEvent(e)
				}),
				p = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...r.defaults(e),
					...i
				}),
				h = e => t => n => ({
					source: "avatar",
					action: e,
					noun: "community_spaces",
					...r.defaults(n),
					snoovatar: r.snoovatarActiveForBuilderEvent(n),
					actionInfo: {
						paneName: "avatar_community_spaces" + (t ? "_control" : "")
					}
				}),
				b = h("view"),
				f = h("click"),
				g = h("dismiss"),
				x = (e, t, n) => () => s => ({
					source: e,
					action: t,
					noun: n,
					...r.defaults(s),
					snoovatar: r.snoovatarActiveForBuilderEvent(s)
				}),
				C = x("anniversary_achievement", "view", "anniversary_achievement"),
				v = x("anniversary_achievement", "click", "close"),
				E = x("anniversary_achievement", "click", "equip"),
				_ = e => () => t => ({
					...r.defaults(t),
					source: "gold_top_nav",
					action: e,
					noun: "quick_create_cta"
				}),
				O = _("view"),
				y = _("click"),
				k = (e, t, n) => s => ({
					source: e,
					action: t,
					noun: n,
					...r.defaults(s),
					actionInfo: {
						pageType: "onboarding"
					},
					snoovatar: r.snoovatarActiveForBuilderEvent(s)
				}),
				w = e => k("onboarding", "click", e),
				S = () => k("avatar", "view", "onboarding")
		},
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			}));
			var s = n("./src/reddit/helpers/flair.ts"),
				o = n("./src/reddit/selectors/gold/powerups/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...r.defaults(e)
				}),
				i = e => t => {
					const n = r.subreddit(t),
						a = Object(o.w)(t, {
							subredditId: null == n ? void 0 : n.id
						}),
						{
							userFlair: i,
							achievementFlair: c,
							supporterFlair: d
						} = e,
						l = c || d;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...r.defaults(t),
						subreddit: n,
						userFlair: {
							id: null == i ? void 0 : i.id,
							title: i ? Object(s.g)(i) : void 0,
							isActive: !!i || void 0,
							achievementFlairId: null == c ? void 0 : c.type,
							achievementFlairTitle: null == c ? void 0 : c.name,
							isLocked: null == l ? void 0 : l.isLocked,
							supporterFlairId: null == d ? void 0 : d.type,
							supporterFlairTitle: null == d ? void 0 : d.name,
							isSupporter: a
						}
					}
				},
				c = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...r.defaults(e)
				}),
				d = e => t => ({
					source: "user_flair_picker",
					action: "click",
					noun: "enable_powerups_flair",
					setting: {
						value: e ? "0" : "1",
						oldValue: e ? "1" : "0"
					},
					subreddit: r.subreddit(t),
					...r.defaults(t)
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
			var s, o, r = n("./src/reddit/constants/tracking.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(o || (o = {}));
			const i = (e, t) => n => ({
					source: o.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: s.SEE_MORE,
					widget: Object(a.widget)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...a.defaults
				}),
				c = (e, t) => n => ({
					source: o.POST,
					action: r.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: a.post(n, e),
					subreddit: a.subreddit(n),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...a.defaults(n)
				}),
				d = () => e => ({
					source: o.SIDEBAR,
					action: r.c.VIEW,
					noun: s.TOPICS_WIDGET,
					...a.defaults(e)
				}),
				l = e => t => ({
					source: o.TOPICS_WIDGET,
					action: r.c.CLICK,
					noun: s.TOPIC,
					...a.defaults(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/hooks/useExperimentVariant.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");

			function r(e, t = o.a) {
				return Object(s.e)(n => Object(o.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: t
				}))
			}
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				o = n("./node_modules/react/index.js"),
				r = n("./src/lib/hooks/useTooltip.ts");
			const a = Object(s.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function i(e) {
				const t = Object(o.useMemo)(() => {
					const t = Object(r.a)(e);
					return Object(s.updateIn)(t, ["modifiers"], e => Object(s.push)(e, a))
				}, [e]);
				return Object(r.b)(t)
			}
		},
		"./src/reddit/hooks/useLocalStorage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				o = n("./src/reddit/helpers/localStorage/index.ts");
			const r = {},
				a = (e, t, n) => (r[e] || (r[e] = {
					callbacks: [],
					value: n
				}), r[e].callbacks.push(t), {
					deregister: () => {
						const {
							callbacks: n
						} = r[e], s = n.indexOf(t);
						s > -1 && n.splice(s, 1)
					},
					emit: n => {
						r[e].value !== n && (r[e].value = n, r[e].callbacks.forEach(e => {
							e !== t && e(n)
						}))
					}
				});

			function i(e, t) {
				const n = Object(s.useRef)(null);
				let r;
				r = Object(o.A)(e);
				const [i, c] = Object(s.useState)(null != r ? r : t);
				return Object(s.useEffect)(() => (n.current = a(e, c, t), () => {
					var e;
					return null === (e = n.current) || void 0 === e ? void 0 : e.deregister()
				}), [e, t]), Object(s.useEffect)(() => {
					var e;
					null === (e = n.current) || void 0 === e || e.emit(i)
				}, [i]), [i, function(t) {
					Object(o.Cb)(e, t), c(t)
				}]
			}
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = s.eb
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("info",e.isFilled)} ${e.className}`
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Premium/index.m.less"),
				i = n.n(a);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				title: e.title,
				className: `${Object(r.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, n) {},
		"./src/reddit/icons/svgs/AddCollection/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, o.a.createElement("defs", null, o.a.createElement("path", {
				id: "svg-add-collection",
				d: "M19.2 2.4a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V4.8a2.4 2.4 0 0 1 2.4-2.4h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V8.4A2.4 2.4 0 0 1 4.8 6h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v7.2a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.4V12a2.4 2.4 0 0 1 2.4-2.4h14.4zm-3.806 5.1H12.9v-2.494a.9.9 0 1 0-1.8 0V14.7H8.607a.9.9 0 1 0 0 1.8H11.1v2.494a.9.9 0 1 0 1.8 0V16.5h2.494a.9.9 0 0 0 0-1.8z"
			})), o.a.createElement("use", {
				fill: "inherit",
				xlinkHref: "#svg-add-collection",
				fillRule: "evenodd"
			}))
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r(e) {
				return o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), o.a.createElement("path", {
					clipRule: "evenodd",
					d: "M13 9H11V7C11 6.7235 10.7765 6.5 10.5 6.5H9.5C9.2235 6.5 9 6.7235 9 7V9H7C6.724 9 6.5 9.2235 6.5 9.5V10.5C6.5 10.7765 6.724 11 7 11H9V13C9 13.2765 9.2235 13.5 9.5 13.5H10.5C10.7765 13.5 11 13.2765 11 13V11H13C13.2765 11 13.5 10.7765 13.5 10.5V9.5C13.5 9.2235 13.2765 9 13 9Z",
					fillRule: "evenodd"
				}))
			}
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
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, o.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), o.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
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
		"./src/reddit/icons/svgs/Clear/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				onMouseUp: e.onMouseUp,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, o.a.createElement("path", {
				d: "M20 2.5C10.3 2.5 2.5 10.3 2.5 20c0 9.7 7.8 17.5 17.5 17.5S37.5 29.7 37.5 20C37.5 10.3 29.7 2.5 20 2.5zM24.2 27.7L20 23.5l-4.2 4.2c-1.1 1.1-2.5 1.1-3.5 0-1.1-1.1-1.1-2.4 0-3.5l4.2-4.2-4.2-4.2c-1.1-1.1-1.1-2.5 0-3.5 1.1-1.1 2.4-1.1 3.5 0l4.2 4.2 4.2-4.2c1.1-1.1 2.5-1.1 3.5 0 1.1 1.1 1.1 2.4 0 3.5L23.5 20l4.2 4.2c1.1 1.1 1.1 2.5 0 3.5C26.7 28.8 25.3 28.8 24.2 27.7z"
			}))
		},
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, n) {
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
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
			}), o.a.createElement("path", {
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
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
				className: e,
				isSubreddit: t,
				...n
			}) => o.a.createElement("svg", c({
				className: Object(r.a)(i.a.dropdown, {
					[i.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), o.a.createElement("path", {
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/FormattingAlignCenter/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero"
			}, o.a.createElement("path", {
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/FormattingAlignLeft/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero"
			}, o.a.createElement("path", {
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/FormattingAlignRight/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero"
			}, o.a.createElement("path", {
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/FormattingDeleteRow/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero",
				transform: "vertical" === e.orientation ? "rotate(90, 10, 10)" : ""
			}, o.a.createElement("path", {
				d: "M3 3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V3zM2 3v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2z"
			}), o.a.createElement("path", {
				d: "M2 15h16v1H2M2 4h16v1H2M7.17 11.4l4.24-4.23c.4-.4 1.04-.4 1.43 0 .4.4.4 1.03 0 1.42L8.6 12.82c-.4.4-1.04.4-1.43 0-.4-.4-.4-1.03 0-1.42z"
			}), o.a.createElement("path", {
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/FormattingInsertRow/index.m.less"),
				i = n.n(a);
			const c = {
				up: "rotate(180 10 10)",
				down: "",
				left: "rotate(90 10 10)",
				right: "rotate(-90 10 10)"
			};
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero",
				transform: c[e.orientation || "down"]
			}, o.a.createElement("path", {
				d: "M17 17c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v14zm1 0V3c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2z"
			}), o.a.createElement("path", {
				d: "M18 6H2V5h16M13 13H7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1z"
			}), o.a.createElement("path", {
				d: "M9 15V9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1z"
			})))
		},
		"./src/reddit/icons/svgs/GovSmall/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M8.5,0.2l6.2,3c0.5,0.3,0.6,0.9,0.3,1.4C14.9,4.8,14.6,5,14.2,5H1.8c-0.6,0-1-0.4-1-1 c0-0.4,0.2-0.7,0.5-0.9l6.2-3C7.9,0,8.1,0,8.5,0.2z"
			}), o.a.createElement("path", {
				d: "M2,12h12c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H2c-0.6,0-1-0.4-1-1l0,0C1,12.4,1.4,12,2,12z"
			}), o.a.createElement("path", {
				d: "M3.8,6h0.5C4.7,6,5,6.3,5,6.8v3.5C5,10.7,4.7,11,4.2,11H3.8C3.3,11,3,10.7,3,10.3V6.8C3,6.3,3.3,6,3.8,6z"
			}), o.a.createElement("path", {
				d: "M7.8,6h0.5C8.7,6,9,6.3,9,6.8v3.5C9,10.7,8.7,11,8.2,11H7.8C7.3,11,7,10.7,7,10.3V6.8 C7,6.3,7.3,6,7.8,6z"
			}), o.a.createElement("path", {
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Grapple/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(e.className, i.a.grapple, {
					[i.a.mIsDragging]: e.isDragging
				}),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), o.a.createElement("g", null, o.a.createElement("path", {
				d: "M8,2 C8.553,2 9,2.447 9,3 L9,5 C9,5.553 8.553,6 8,6 L6,6 C5.447,6 5,5.553 5,5 L5,3 C5,2.447 5.447,2 6,2 L8,2 Z M14,2 C14.553,2 15,2.447 15,3 L15,5 C15,5.553 14.553,6 14,6 L12,6 C11.447,6 11,5.553 11,5 L11,3 C11,2.447 11.447,2 12,2 L14,2 Z M8,8 C8.553,8 9,8.447 9,9 L9,11 C9,11.553 8.553,12 8,12 L6,12 C5.447,12 5,11.553 5,11 L5,9 C5,8.447 5.447,8 6,8 L8,8 Z M14,8 C14.553,8 15,8.447 15,9 L15,11 C15,11.553 14.553,12 14,12 L12,12 C11.447,12 11,11.553 11,11 L11,9 C11,8.447 11.447,8 12,8 L14,8 Z M8,14 C8.553,14 9,14.447 9,15 L9,17 C9,17.553 8.553,18 8,18 L6,18 C5.447,18 5,17.553 5,17 L5,15 C5,14.447 5.447,14 6,14 L8,14 Z M14,14 C14.553,14 15,14.447 15,15 L15,17 C15,17.553 14.553,18 14,18 L12,18 C11.447,18 11,17.553 11,17 L11,15 C11,14.447 11.447,14 12,14 L14,14 Z"
			})))
		},
		"./src/reddit/icons/svgs/Hamster1/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 53 67"
			}, o.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, o.a.createElement("path", {
				fill: "#000",
				d: "M36.17 15.7877c-2.1457-.6233-4.6272.5142-5.0853 2.419-.174.7268-.5168 1.0273-1.2283 1.124-1.5643.2126-2.9247.8707-4.0924 1.901-.807.7112-1.2403 1.523-1.2154 2.6702.0477 2.1067 1.0792 3.8318 2.0054 5.608.2256.432 2.0283-.631 1.111-.082-.616-1.9145-1.1994-3.6348-1.7152-5.3744-.2127-.72.0527-1.406.7364-1.754 1.2204-.6195 2.4954-1.1375 3.7456-1.702.5923-.2676.93-.057 1.27.465.821 1.2544 1.9995 2.04 3.5757 1.8642 1.6357-.1817 2.555-1.264 3.054-2.7215.6707-1.956-.2665-3.8677-2.1616-4.4176"
			}), o.a.createElement("path", {
				fill: "#FF8717",
				d: "M32.575 18.997c-.1866-1.1486.5913-2.0766 1.949-2.3235 1.4877-.2722 2.729.4466 2.9796 1.7235.2642 1.345-.7003 2.9457-1.9175 3.1832-1.341.2627-2.7447-.9416-3.011-2.5832"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M17.0857 23.965c-2.5846-.806-4.1367.6-4.4678 3.2556-.3653 2.9378.675 6.234 3.5116 7.1787 2.9598.9843 5.8344-1.5318 6.3822-4.5023.4535-2.4616-3.5227-5.3826-5.426-5.932-3.1034-.9685 1.507.4345 0 0M39.321 24.512c-2.184-2.2814-6.028.2842-7.4777 2.256-.521.7074-.9206 1.5057-1.1896 2.3475-.35 1.0897.269.94.3743 1.8643.1922 1.6742 2.1314 3.3578 3.7206 3.5912 4.7354.694 7.7125-6.7713 4.3803-10.2603.1294.1364.259.2717.3894.408-.0658-.0692-.1315-.1384-.1973-.2066-1.9745-2.0624.696.7283 0 0M18.9308 59.6326c-.1867-.0458-.3346.0093-.443.1056-.001 0-.001-.001-.002-.001-1.5598.099-3.8566.7662-4.6848 2.1695-.8887 1.507.7358 2.5096 2.148 2.674 1.553.1813 3.8715-.3148 4.4405-1.8975.439-1.2193-.0328-2.7012-1.4587-3.0506M34.37 60.348c-.242-.0358-.5174.043-.6267.2957-1.5118 3.4664 6.185 5.586 7.6074 2.4245 1.3572-3.016-4.6648-4.4187-6.9808-2.7203"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M39.9895 37.3797c-3.8707-9.353-16.7772-11.6802-23.5762-4.7352-3.177 3.245-4.373 8.2466-4.83 9.7576-1.4357 4.748-1.561 10.198.7932 14.6874 3.987 7.605 16.61 9.4605 23.792 5.505 9.1842-5.058 6.6638-18.3606 3.437-26.1424.2377.5734.4746 1.1468.7124 1.7202-.1096-.2645-.219-.528-.3285-.7925-2.1562-5.211 1.182 2.856 0 0"
			}), o.a.createElement("path", {
				fill: "#FF8717",
				d: "M26.4406 29.6162c3.5285 0 8.4696 2.1882 10.6613 4.9576 2.5828 3.2633 3.7284 8.3103 4.3175 12.3626.4945 3.4113-.4807 8.203-2.2755 11.186-2.1327 3.5455-6.732 4.5153-10.5422 4.4935-4.6918-.026-10.162-.5288-13.2412-4.577-2.77-3.643-3.234-8.4117-2.506-12.8188.401-2.4216 1.0284-5.207 1.9967-7.4706 2.105-4.9197 5.7597-8.1334 11.5893-8.1334"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M41.5915 49.6162c.03-.6952.008-1.3605-.044-2l.044 2zM37.4186 60.1975c-1.3365-.7743-2.342-2.1664-2.536-3.716-.0665-.533-.0396-1.074-.0128-1.61.0477-.9814.1004-1.9818.458-2.8933.4095-1.0428 1.1846-1.8868 1.9427-2.7034.46-.4967.9212-.9934 1.3823-1.49.7273-.7844 1.6783-1.6223 2.688-1.475-.4125-2.465-1.0336-5.1514-2.0422-7.567-1.0493 2.024-3.0208 3.9137-5.4086 2.871-.5147-.2242-.8774-.3756-1.3395-.7027-.8615-.7398-1.9138-.9498-3.157-.6288-.2702.3008-.5265.6128-.769.9368-.5157.521-1.1567.9812-1.9347.7632-1.7777-.5007-2.97-2.9346-5.1046-1.4002-.8675.624-1.9396 1.5637-3.0953 1.5082-2.0044-.096-3.3925-1.0983-4.2153-2.752-.776 2.0393-1.2024 4.4066-1.5432 6.479-.0407.2524-.0636.5098-.0974.7652.6232-.0353 1.2462-.013 1.8206.219.6776.2727 1.2182.8037 1.74 1.3225.8435.8388 1.708 1.706 2.187 2.8033.4382 1.0014.5227 2.123.5366 3.2183.015 1.0882-.0338 2.1754-.145 3.2566-.1313 1.284-.475 2.7296-1.571 3.3606 3.1707 2.359 7.553 2.7054 11.4153 2.7266 3.2216.0182 6.9976-.6774 9.4033-3.0224-.2027-.0868-.4104-.1585-.6022-.2695"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M19.3634 62.297c-.4735.8925-1.877 1.0785-2.832 1.1074-.5274.0154-1.058-.045-1.5395-.25-.894-.3822-.2403-1.1526.2322-1.5266.884-.7018 2.083-1.0513 3.2383-1.1217.114-.0072.2012-.0478.2752-.0993.846.2655.982 1.2193.6257 1.8904M39.1353 63.7074c-.7183.2857-1.607.0788-2.318-.0972-1.225-.3028-2.4647-1.2617-2.3147-2.656.0894-.0388.1756-.0948.2438-.1942 1.16-1.6788 4.4677-.7897 5.5096.6697.7194 1.008-.38 1.984-1.1207 2.2777"
			}), o.a.createElement("path", {
				fill: "#C18D42",
				d: "M17.2218 28.842c-.2698-1.599-.862-3.239-2.209-4.0722-1.519-.9397-1.5314 2.7022-1.4284 3.646.1773 1.6212.7036 4.1546 2.031 4.9962 1.0735.6814 1.7476-.4387 1.9068-1.9332.105-.9777-.1392-1.678-.3004-2.6368-.3327-1.9776.2232 1.3268 0 0"
			}), o.a.createElement("path", {
				fill: "#FF8717",
				d: "M15.5475 24.681c1.747.664 2.8352 2.0178 3.3196 3.9672.3962 1.5937.7234 3.6126-.1366 4.959 1.6953.081 3.8534-.3464 3.6123-2.602 1.339-1.9475-4.229-7.018-6.7952-6.3243M33.6698 32.7516c-.407-.451.364.404 0 0"
			}), o.a.createElement("path", {
				fill: "#C18D42",
				d: "M35.796 29.1142c-.1635.7146-.323 1.4594-.211 2.192.178 1.1545.9577 1.6425 1.872 1.0695 1.2238-.7655 1.577-2.3845 1.9186-3.693.1864-.7164.529-3.6248-.9526-2.9716-1.4423.6354-2.308 2.0174-2.627 3.4032-.238 1.0394.3698-1.6104 0 0"
			}), o.a.createElement("path", {
				fill: "#FF8717",
				d: "M35.3533 32.5596c-1.0047-1.2304-.5965-3.2887-.0174-4.64.6404-1.496 1.6748-2.6295 3.2115-3.037-.0695-.041-.136-.083-.2138-.114-1.9296-.775-4.9295 1.584-5.8667 3.0262-.6885 1.0606-2.0135 2.6206.8063 4.2594.7018.4085 1.3024.687 2.08.5054"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M32.8514 39.097c-.577.676-1.6076.6748-2.4273.0963-1.264-.8917-1.1062-3.3024.122-4.234.7017-.532 1.6705-.4205 2.1302.1645 1.53 1.946.6833 3.3772.1752 3.973"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M30.755 38.0938c-.2703-.432-.2692-1.2056-.039-1.8203.3575-.9478 1.322-.8296 1.6942.092.213.5263.1684 1.252-.0664 1.597-.7778 1.1484-1.3505.512-1.5888.1313"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M24.71 39.009c-.6662.8048-2.161.7863-3.1096.0826-1.5367-1.1425-1.2565-2.9377-.0257-3.8424.9816-.721 1.9472-.897 2.8605-.1542 1.636 1.3315 1.2372 2.751.2748 3.914"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M21.79 38.1136c-.322-.4-.3135-1.296-.0326-1.8656.4566-.922 1.1752-.7538 1.537-.016.2884.589.359 1.1686.0612 1.7166-.5324.982-1.0995.7425-1.5656.165"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M24.5598 40.2202c.8506 1.8878 3.3605 1.9104 3.9825-.235.0587-.206-.3954-.314-.471-.3215-1.1-.0954-2.188-.0502-3.278.1646-.637.1256.158.5627.459.5024.9212-.182 1.8433-.2474 2.7733-.167-.157-.1068-.314-.2136-.471-.3216-.14.4862-.3785.834-.7293 1.098-.5525.4157-1.0443-.1445-1.3017-.716-.147-.3266-1.094-.2915-.9638-.0038"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M22.5907 41.495c1.505 1.488 4.0743 1.4078 5.0584-.571-.3263-.06-.6527-.121-.98-.182-.2436 2.3982 3.9335 2.359 4.8708.653.1018-.186-.8275-.4596-.9802-.1822-.556 1.1467-1.526 1.0504-2.9105-.2888.029-.284-.8573-.428-.98-.182-.497 1.0008-1.7188 2.179-3.194.7215-.1837-.182-1.14-.221-.8843.0315M19.5653 46.516c-.473 6.7128 8.6924 4.2055 5.1774-.548-.6672-.903-.7844.151-.5202.7218.5274 1.1447.4853 2.1653-.5644 2.844-1.2192.7874-2.6945.0107-2.9834-1.216-.112-.5384-.144-1.082-.0936-1.6312.0237-.3453-.993-.4877-1.0157-.1705M29.6923 44.8475c-1.689 1.2247-1.5924 4.6386.8496 4.7633 1.13.0575 2.2874-.3435 3.0557-1.1673.3415-.3653 1.5518-2.4732.5793-2.709-1.2043-.293-1.2043 3.92-3.9756 3.001-.9725-.3227-.5812-1.1573-.5253-1.9048.0163-.218 1.4523-3.0258.0163-1.9832"
			})))
		},
		"./src/reddit/icons/svgs/Hamster2/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 53 67"
			}, o.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, o.a.createElement("path", {
				fill: "#FFF",
				d: "M9.5927 33.2517c.829 1.0475-1.9245 5.7044-2.2983 5.6247-7.91-1.6942-2.065-11.142 2.2983-5.6247z"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M7.2853 38.8738c-7.8952-1.69-2.0557-11.1393 2.297-5.625.8272 1.047-.4264.8297-.9997.3446-1.1508-.97-2.3416-1.2604-3.462-.3077-1.3005 1.107-.879 3.0184.443 3.748.585.3038 1.202.5194 1.8517.6446.4058.0876.243 1.275-.13 1.1955"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M50.0333 34.034c-.1167 1.5037-.772 2.978-1.8564 3.877-.4812.3997-3.1335 1.7-3.25.3792-.1457-1.6356-1.7525-4.3107-.3047-6.062 1.7012-2.06 5.6625-1.444 5.411 1.8057z"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M38.8415 2.2205c-2.7586-.8015-5.949.661-6.538 3.11-.2237.9345-.6645 1.321-1.5794 1.4452-2.011.2734-3.7602 1.1195-5.2615 2.444-1.0375.9146-1.5946 1.9584-1.5627 3.4333.0614 2.7088 1.3876 4.9268 2.5785 7.2106.29.5554 2.6078-.8114 1.4285-.1056-.7922-2.4615-1.5422-4.6733-2.2054-6.91-.2734-.9256.0677-1.8078.9468-2.2552 1.569-.7964 3.2084-1.4625 4.8157-2.188.7615-.3443 1.196-.0734 1.633.5976 1.0553 1.6128 2.5707 2.623 4.597 2.397 2.1033-.2337 3.2852-1.6254 3.9266-3.4992.8624-2.515-.3425-4.9727-2.779-5.6797"
			}), o.a.createElement("path", {
				fill: "#FF8717",
				d: "M33.9315 6.857c-.224-1.3784.7095-2.492 2.3388-2.7883 1.7852-.3266 3.275.536 3.5755 2.0682.317 1.614-.8404 3.5347-2.301 3.8197-1.6092.3153-3.2938-1.13-3.6133-3.0997"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M14.7982 12.4437c-3.36-1.0258-5.3778.7637-5.8082 4.1436-.4748 3.739.8778 7.9344 4.5652 9.1366 3.8478 1.2526 7.5847-1.9496 8.297-5.7303.5894-3.133-4.5797-6.8506-7.054-7.55-4.0343-1.2325 1.959.5532 0 0M43.3042 13.0588c-2.8393-2.6964-7.8367.3357-9.7212 2.666-.6773.836-1.1967 1.7795-1.5465 2.7743-.455 1.288.3498 1.111.4866 2.2034.25 1.9786 2.771 3.9682 4.837 4.244 6.156.8204 10.0262-8.0023 5.6943-12.1256.1683.161.3367.321.5063.482-.0855-.0817-.171-.1634-.2564-.244-2.567-2.4376.9047.8605 0 0M16.2644 58.021c-.2208-.059-.3958.012-.5237.136-.0012 0-.0012-.0012-.0024-.0012-1.8447.1275-4.5607.9865-5.54 2.7936-1.051 1.9405.87 3.2314 2.5398 3.4432 1.8366.2334 4.5785-.4055 5.2513-2.4435.519-1.57-.0387-3.478-1.725-3.928M35.8236 58.9218c-.272-.045-.582.0543-.705.3726-1.7005 4.3674 6.9575 7.0378 8.5576 3.0546 1.5267-3.7998-5.2473-5.567-7.8526-3.4272"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M43.621 29.1977c-4.9592-11.951-21.4957-14.9246-30.207-6.0505-4.0707 4.1463-5.603 10.5374-6.1882 12.468-1.8397 6.067-2.0003 13.0306 1.016 18.767 5.1085 9.718 21.2816 12.0886 30.4837 7.0343 11.767-6.463 8.538-23.4607 4.4034-33.4042.3046.7327.608 1.4654.9127 2.198-.1402-.338-.2804-.6746-.4207-1.0126-2.7626-6.6584 1.5146 3.6495 0 0"
			}), o.a.createElement("path", {
				fill: "#FF8717",
				d: "M25.8506 19.7317c4.5594 0 10.944 2.8204 13.7762 6.3902 3.3375 4.2063 4.8178 10.7118 5.579 15.935.639 4.3973-.6212 10.5736-2.9403 14.4188-2.7558 4.57-8.6988 5.8202-13.6222 5.792-6.0627-.0332-13.131-.6814-17.1098-5.8996-3.5793-4.6956-4.179-10.8425-3.2382-16.523.518-3.1216 1.329-6.7118 2.58-9.6297 2.7202-6.3415 7.4425-10.4838 14.9753-10.4838"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M45.9425 45c.03-.6952.008-1.3605-.044-2l.044 2zM39.8434 58.144c-1.7227-.9698-3.0188-2.7136-3.2686-4.6547-.0858-.6677-.0512-1.3455-.0166-2.017.0615-1.2292.1293-2.4824.5904-3.6243.5277-1.3063 1.5267-2.3634 2.504-3.3865.593-.622 1.1872-1.2443 1.7815-1.8665.9376-.9825 2.1633-2.032 3.4645-1.8475-.5315-3.088-1.332-6.453-2.632-9.4792-1.3524 2.5355-3.8935 4.9027-6.971 3.5964-.6636-.2807-1.131-.4704-1.7266-.88-1.1105-.927-2.467-1.19-4.069-.788-.3485.377-.679.7677-.9914 1.1736-.6647.6525-1.4908 1.2292-2.4937.956-2.2913-.6272-3.8283-3.676-6.5793-1.754-1.1182.7816-2.5 1.959-3.9896 1.8893-2.5832-.12-4.3725-1.3758-5.433-3.4472-1.0002 2.5544-1.5497 5.5198-1.989 8.116-.0525.316-.082.6386-.1255.9585.803-.0443 1.606-.0165 2.3464.2743.8734.3415 1.57 1.0066 2.2425 1.6566 1.0874 1.0508 2.2016 2.137 2.819 3.5116.5648 1.2545.6737 2.6594.6916 4.0315.0193 1.3633-.0435 2.7252-.187 4.0796-.169 1.6085-.612 3.4193-2.0248 4.2097 4.087 2.9553 9.735 3.389 14.7134 3.4156 4.1523.0226 9.0192-.8486 12.12-3.7862-.2614-.1088-.529-.1986-.7762-.3377"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M16.6775 61.5205c-.5682 1.19-2.2523 1.438-3.3982 1.4765-.633.0205-1.2697-.0602-1.8475-.3336-1.0727-.5094-.2883-1.5367.2787-2.0352 1.0607-.9357 2.4997-1.4018 3.886-1.4957.137-.0097.2414-.064.3303-.1325 1.015.354 1.1784 1.6258.7507 2.5205M41.3178 62.8585c-.838.2857-1.875.079-2.7043-.097-1.429-.303-2.8756-1.2618-2.7005-2.656.1043-.039.2048-.095.2843-.1944 1.3534-1.6787 5.2124-.7896 6.428.6698.8393 1.008-.4433 1.984-1.3075 2.2777"
			}), o.a.createElement("path", {
				fill: "#C18D42",
				d: "M14.4914 18.1648c-.3373-1.9542-1.0774-3.9587-2.7615-4.977-1.8987-1.1487-1.9142 3.3025-1.7855 4.4562.2217 1.9814.8796 5.0777 2.5387 6.1064 1.342.8328 2.1846-.5362 2.3836-2.363.131-1.1948-.174-2.0508-.3754-3.2226-.416-2.417.279 1.6217 0 0"
			}), o.a.createElement("path", {
				fill: "#FF8717",
				d: "M11.8985 13.079c1.9966.812 3.2402 2.4664 3.7938 4.849.4527 1.9478.8267 4.4154-.1562 6.061 1.9376.099 4.404-.4234 4.1285-3.1804 1.5303-2.38-4.8333-8.5774-7.766-7.7295M35.0207 23.1353c-.407-.451.364.404 0 0"
			}), o.a.createElement("path", {
				fill: "#C18D42",
				d: "M38.2093 19.4974c-.2045.9188-.4038 1.8764-.264 2.8182.2225 1.4844 1.197 2.112 2.34 1.3752 1.5298-.9843 1.9712-3.066 2.3983-4.748.233-.9213.6613-4.6607-1.1908-3.8208-1.803.8168-2.885 2.5937-3.2835 4.3754-.2977 1.3363.462-2.0706 0 0"
			}), o.a.createElement("path", {
				fill: "#FF8717",
				d: "M37.7916 23.9292c-1.2917-1.538-.767-4.111-.0223-5.8.8235-1.87 2.1534-3.287 4.1292-3.7963-.0894-.0513-.175-.1037-.275-.1424-2.481-.9687-6.3378 1.98-7.5428 3.7826-.8853 1.3257-2.5888 3.2757 1.0366 5.3243.9024.5106 1.6746.859 2.6743.6317"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M34.0283 31.3767c-.721.8113-2.0094.81-3.034.1158-1.58-1.07-1.383-3.963.1523-5.081.877-.6384 2.088-.5045 2.6627.1976 1.9127 2.3352.854 4.0527.219 4.7677"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M31.106 29.4776c-.2703-.432-.2692-1.2056-.039-1.8204.3574-.9477 1.322-.8296 1.6942.092.213.5264.1684 1.252-.0664 1.597-.7778 1.1484-1.3506.5122-1.5888.1314"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M23.8934 30.2714c-.7994.9656-2.5933.9435-3.7315.099-1.844-1.371-1.508-3.5252-.031-4.6108 1.178-.8653 2.3368-1.0765 3.4327-.185 1.9633 1.5977 1.4846 3.301.3297 4.6968"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M20.141 29.4974c-.322-.4-.3135-1.2962-.0326-1.8657.4566-.922 1.1752-.7537 1.537-.0158.2884.5886.359 1.1683.061 1.7164-.5322.982-1.0993.7424-1.5654.165"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M23.9138 33.604c1.0632 1.8878 4.2007 1.9104 4.9782-.235.0733-.206-.4943-.314-.5887-.3215-1.375-.0955-2.735-.0502-4.0976.1646-.796.1257.1975.5628.574.5025 1.1512-.1822 2.304-.2475 3.4664-.167-.196-.1068-.3923-.2136-.5886-.3216-.175.486-.4732.834-.9117 1.0977-.6905.4157-1.3054-.1445-1.627-.716-.184-.3266-1.3676-.2914-1.205-.0038"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M20.9512 35.318c1.8397 2.232 4.9797 2.112 6.1826-.8564-.399-.09-.798-.1816-1.198-.273-.2976 3.5973 4.8077 3.5387 5.9532.9794.1245-.279-1.0113-.6892-1.198-.273-.6794 1.72-1.8652 1.5755-3.5572-.4334.0354-.426-1.048-.642-1.198-.273-.6075 1.5012-2.1007 3.2685-3.9037 1.0823-.2244-.2732-1.393-.3318-1.0808.047M44.4978 32.213c1.7332-2.056 5.7836-1.429 5.5353 1.821-.115 1.5038-.7808 2.977-1.8867 3.8733-.4907.3984-3.198 1.692-3.3206.3704-.1534-1.6365 4.8643-1.0204 4.2203-4.8223-.2264-1.3343-1.284-.9385-2.1835-.974-.262-.0102-3.8398 1.4795-2.3647-.2684"
			})))
		},
		"./src/reddit/icons/svgs/Help/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/ImagePost/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2Zm0,14H10.14a.49.49,0,0,1,.05-.48l3.15-4.26a.5.5,0,0,1,.38-.2.53.53,0,0,1,.4.17L16,13.35ZM4,13.51,7.26,8.82a.54.54,0,0,1,.42-.21.5.5,0,0,1,.41.23l2.85,4.34L8.84,16H4Zm10.4-7.1a1.7,1.7,0,1,1-1.7-1.7A1.7,1.7,0,0,1,14.4,6.41Z"
			}))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Link/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "M18.4773727,1.51993937 C19.4600354,2.50135191 20.0013751,3.80656808 20.0013751,5.19554812 C20.0013751,6.58577837 19.4600354,7.89099453 18.4773727,8.87240707 C17.9885417,9.35998782 17.1984109,9.35998782 16.7095799,8.87240707 C16.2207489,8.38357611 16.2207489,7.59094484 16.7095799,7.10461429 C17.2196644,6.59452982 17.500961,5.91691759 17.500961,5.19554812 C17.500961,4.47542886 17.2196644,3.79781663 16.7095799,3.28773215 C15.6569056,2.23755822 13.9453721,2.23755822 12.8926978,3.28773215 L8.62324066,7.55843946 C7.57181653,8.6111138 7.57181653,10.3226473 8.62324066,11.3753216 C9.11207162,11.8629024 9.11207162,12.6555336 8.62324066,13.1431144 C8.37945029,13.3869048 8.05939728,13.509425 7.73934427,13.509425 C7.41929127,13.509425 7.09923826,13.3869048 6.85544788,13.1431144 C4.82886225,11.1152785 4.82886225,7.81723232 6.85544788,5.79064668 L11.124905,1.51993937 C13.1502404,-0.505396058 16.4495368,-0.507896472 18.4773727,1.51993937 Z M11.3753215,6.8540728 C11.8641524,6.36524184 12.6542833,6.36524184 13.1431142,6.8540728 C15.1696999,8.88065844 15.1696999,12.1799549 13.1431142,14.2065405 L8.87240693,18.4772478 C7.89099439,19.4586603 6.58452801,20 5.19679818,20 C3.80781814,20 2.50135177,19.4586603 1.51993923,18.4772478 C-0.50664641,16.4506622 -0.50664641,13.1513657 1.51993923,11.1247801 C2.00877019,10.6359491 2.80015125,10.6359491 3.28773201,11.1247801 C3.77656297,11.6136111 3.77656297,12.4037419 3.28773201,12.8925729 C2.23505767,13.9452472 2.23505767,15.6567807 3.28773201,16.709455 C4.34040635,17.7621294 6.05193981,17.7621294 7.10461415,16.709455 L11.3753215,12.4387477 C12.4279958,11.3860734 12.4279958,9.67453992 11.3753215,8.62186558 C10.8864905,8.13303462 10.8864905,7.34290376 11.3753215,6.8540728 Z"
			})))
		},
		"./src/reddit/icons/svgs/MarkdownMode/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 208 128"
			}, o.a.createElement("rect", {
				width: "198",
				height: "118",
				x: "5",
				y: "5",
				ry: "10",
				stroke: "currentColor",
				strokeWidth: "10",
				fill: "none"
			}), o.a.createElement("path", {
				d: "M30 98v-68h20l20 25 20-25h20v68h-20v-39l-20 25-20-25v39zM155 98l-30-33h20v-35h20v35h20z"
			}))
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), o.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "M15.75,7.834625 L12,4.084625 L12.808,3.276625 C13.8435,2.241125 15.5225,2.241125 16.558,3.276625 C17.5935,4.312125 17.5935,5.991125 16.558,7.026625 L15.75,7.834625 Z M11.366,5 L15.116,8.75 L7.25,16.616 L3.5,12.866 L11.366,5 Z M2.5035,13.5 L6.1125,17.109 L1,18.6125 L2.5035,13.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, o.a.createElement("g", {
				stroke: "none"
			}, o.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Poll/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M2.1952,13.9279 C2.9452,13.9279 3.5382,14.3119 3.8382,14.8939 L2.8962,15.3249 C2.7702,15.0489 2.4882,14.8519 2.1232,14.8519 C1.6192,14.8519 1.2232,15.3189 1.2232,15.9489 C1.2232,16.5849 1.6252,17.0409 2.1172,17.0409 C2.4882,17.0409 2.7772,16.8369 2.9262,16.5369 L3.9162,16.8909 C3.6102,17.5559 2.9802,17.9639 2.1952,17.9639 C1.0492,17.9639 0.1202,17.0759 0.1202,15.9489 C0.1202,14.8279 1.0492,13.9279 2.1952,13.9279 Z M11.5004,14.5 C12.3294,14.5 13.0004,15.171 13.0004,16 C13.0004,16.829 12.3294,17.5 11.5004,17.5 L6.5004,17.5 C5.6714,17.5 5.0004,16.829 5.0004,16 C5.0004,15.171 5.6714,14.5 6.5004,14.5 L11.5004,14.5 Z M1.8953,8.0003 C2.8063,8.0003 3.5503,8.2643 3.5503,9.0313 C3.5503,9.3433 3.3523,9.5893 3.0763,9.7813 C3.4483,9.9553 3.7243,10.2253 3.7243,10.6623 C3.7243,11.5179667 2.93757778,11.8598556 2.22929983,11.8952023 L2.1053,11.8983 L0.3723,11.8983 L0.3723,8.0003 L1.8953,8.0003 Z M18.5004,8.5 C19.3294,8.5 20.0004,9.171 20.0004,10 C20.0004,10.829 19.3294,11.5 18.5004,11.5 L6.5004,11.5 C5.6714,11.5 5.0004,10.829 5.0004,10 C5.0004,9.171 5.6714,8.5 6.5004,8.5 L18.5004,8.5 Z M1.8623,8.8693 L1.4753,8.8693 L1.4753,11.0283 L1.9843,11.0283 C2.3013,11.0283 2.5853,10.7603 2.5853,10.4623 C2.5853,10.0713909 2.27786198,9.92097769 2.01460128,9.89686048 L1.9373,9.8933 L1.9373,9.7853 C2.0923,9.7853 2.4353,9.6783 2.4353,9.3333 C2.4353,8.9793 2.1923,8.8693 1.8623,8.8693 Z M2.783,1.9997 L4.096,5.8977 L2.963,5.8977 C2.963,5.8977 2.147,3.3737 2.063,3.0137 L2.063,3.0137 L2.039,3.0137 C1.955,3.3737 1.127,5.8977 1.127,5.8977 L1.127,5.8977 L-2.25597319e-13,5.8977 L1.319,1.9997 L2.783,1.9997 Z M15.5004,2.5 C16.3294,2.5 17.0004,3.171 17.0004,4 C17.0004,4.829 16.3294,5.5 15.5004,5.5 L6.5004,5.5 C5.6714,5.5 5.0004,4.829 5.0004,4 C5.0004,3.171 5.6714,2.5 6.5004,2.5 L15.5004,2.5 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Powerup/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 32 32",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && o.a.createElement("title", null, e.title), o.a.createElement("path", {
				d: "M12.249 32c-.4 0-.8-.1-1.2-.25l-.05-.05-5.05-2.6c-1.25-.7-1.75-2.2-1.25-3.5l.05-.1 2.45-5.45-3.15-1.5a2.985 2.985 0 01-1.4-3.55l3.5-12.05C6.649 1.2 8.299 0 10.099 0h7.8c.45 0 .9.1 1.3.3l.15.1 4.85 2.45c1.5.8 2.05 2.55 1.35 4.05l-2.2 4.3 4.45 2.25c.8.45 1.35 1.25 1.45 2.2.1.9-.2 1.8-.9 2.45l-14.15 13.15c-.55.5-1.25.75-1.95.75z",
				fill: "#000"
			}), o.a.createElement("path", {
				d: "M10.648 17l-.85 2.1-4.65-2.2c.1.05.25.1.4.1h5.1zM23.749 13.6l3.1 1.6c.5.3.65 1 .15 1.45L12.849 29.8c-.3.25-.65.3-.95.15l-4.85-2.5c.3.1.65.1.9-.15l14.15-13.15c.5-.45.35-1.15-.15-1.45l1.8.9z",
				fill: "#FF4500"
			}), o.a.createElement("path", {
				d: "M23.75 13.6l3.1 1.6c.5.3.65 1 .15 1.45l-4.9-2.5c.5-.45.35-1.15-.15-1.45l1.8.9z",
				fill: "#FF8717"
			}), o.a.createElement("path", {
				d: "M18.898 3.5c.25-.55.05-1.1-.45-1.4l4.9 2.5c.5.25.7.85.45 1.4l-3.35 6.55h-6.05l4.5-9.05z",
				fill: "#FF4500"
			}), o.a.createElement("path", {
				d: "M18.9 3.5c.25-.55.05-1.1-.45-1.4l4.9 2.5c.5.25.7.85.45 1.4l-4.9-2.5z",
				fill: "#FF8717"
			}), o.a.createElement("path", {
				d: "M21.95 12.65c.5.3.65 1 .15 1.45L7.95 27.3c-.3.25-.65.3-.9.15l-.1-.05a.86.86 0 01-.4-1.05l4.1-9.35h-5.1c-.15 0-.3-.05-.45-.1l-.1-.05c-.4-.25-.65-.75-.5-1.25L8.05 3.55A2.19 2.19 0 0110.15 2h7.8c.15 0 .3.05.45.1l.05.05c.45.25.7.85.45 1.4l-4.5 9.05h7.1c.15 0 .3.05.4.1l.05-.05z",
				fill: "#FFD635"
			}), o.a.createElement("path", {
				d: "M15.599 3.45c.55-.15 1.15-.25 1.7-.45-.6-.1-1.15-.15-1.75-.2-.6-.05-1.15-.05-1.75-.1-1.15-.05-2.25 0-3.4.05-.55 0-1.05.3-1.35.8-.15.3-.15.35-.2.5l-.15.4-.5 1.55c-.35 1.05-.7 2.1-1 3.15-.3 1.05-.65 2.1-.9 3.2-.3 1.05-.6 2.15-.8 3.25.55-1 1-2 1.5-3 .45-1 .9-2 1.35-3.05.4-1 .85-2.05 1.2-3.1l.6-1.55.25-.65h.05c1.15-.1 2.3-.25 3.4-.45.6-.1 1.15-.2 1.75-.35zM20.25 13.35c-1.1-.05-2.2-.05-3.3 0-.55 0-1.1.05-1.65.1-.55.05-1.1.1-1.65.2.55.15 1.1.25 1.6.35.55.1 1.1.2 1.65.25.6.1 1.25.15 1.85.2-.45.45-.9.85-1.3 1.3-.75.75-1.5 1.5-2.25 2.3-.75.8-1.5 1.55-2.2 2.35-.7.8-1.45 1.6-2.1 2.45.9-.65 1.7-1.3 2.55-2 .85-.7 1.65-1.4 2.45-2.1.8-.7 1.6-1.45 2.4-2.15l2.35-2.2c.1-.1.15-.25.2-.4 0-.4-.3-.65-.6-.65z",
				fill: "#fff"
			}))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = ({
				className: e
			}) => o.a.createElement("svg", {
				className: e,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				fillRule: "evenodd"
			}, o.a.createElement("path", {
				d: "M0 12h12V0H0z",
				fill: "none"
			}), o.a.createElement("path", {
				d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/RadioOff/index.m.less"),
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
			t.a = e => o.a.createElement("svg", c({}, e, {
				className: Object(r.a)(i.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, n) {
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
			t.a = e => o.a.createElement("svg", r({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/Replay/index.tsx": function(e, t, n) {
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
			t.a = e => o.a.createElement("svg", r({}, e, {
				viewBox: "13 12 23 23",
				xmlns: "http://www.w3.org/2000/svg"
			}), o.a.createElement("g", null, o.a.createElement("path", {
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Send/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M17.98 8.87c-.012-.093-.03-.182-.062-.27-.017-.043-.034-.085-.055-.126-.013-.026-.02-.057-.034-.082l-.07-.1c-.018-.02-.04-.03-.055-.046-.073-.083-.158-.145-.252-.204-.032-.02-.053-.055-.088-.072L3.88 1.12c-.35-.176-.764-.158-1.096.05-.332.208-.534.576-.534.973V5c0 .507.33.954.81 1.097L9 7.857H3.375c-.175 0-.347.04-.503.12L.622 9.12c-.48.243-.724.8-.582 1.325.135.5.582.84 1.085.84.027 0 .054 0 .08-.003l1.045-.075v4.65c0 .396.202.764.534.972.18.112.386.17.59.17.173 0 .346-.04.505-.12l13.483-6.85c.08-.044.134-.075.184-.113.05-.038.092-.085.136-.13.012-.013.026-.022.037-.036.092-.107.147-.21.19-.32.013-.03.02-.06.03-.09.013-.045.033-.086.042-.132.008-.046.013-.09.017-.138 0-.023-.008-.043-.008-.063 0-.017.008-.03.008-.048 0-.032-.017-.058-.02-.09z"
			})))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = function({
				className: e
			}) {
				return o.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("g", {
					fill: "inherit"
				}, o.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/icons/svgs/SnooPosting/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 45 43"
			}, o.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, o.a.createElement("g", {
				fill: "#0DD3BB",
				transform: "translate(0 4)"
			}, o.a.createElement("ellipse", {
				cx: "25.492",
				cy: "22.2631",
				transform: "rotate(5 25.492 22.263)",
				rx: "17.6396",
				ry: "13.9883"
			}), o.a.createElement("ellipse", {
				cx: "19.3519",
				cy: "17.9699",
				transform: "rotate(5 19.352 17.97)",
				rx: "14.7297",
				ry: "16.0688"
			}), o.a.createElement("ellipse", {
				cx: "14.0251",
				cy: "27.7862",
				transform: "rotate(5 14.025 27.786)",
				rx: "8.4751",
				ry: "8.9243"
			}), o.a.createElement("ellipse", {
				cx: "11.808",
				cy: "17.4531",
				transform: "rotate(5 11.808 17.453)",
				rx: "10.7695",
				ry: "10.8575"
			}), o.a.createElement("ellipse", {
				cx: "12.1168",
				cy: "22.4429",
				transform: "rotate(5 12.117 22.443)",
				rx: "8.4751",
				ry: "8.9243"
			})), o.a.createElement("path", {
				fill: "#FFF",
				d: "M35.6875 31.5625c-1.3275 1.8696-6.7017 5.0483-8.7188 6.0313-2.0174.983-13.478 2.1465-15.625-.6876-1.5625-2.0624-.9687-4.625 1-6.1562C9.6563 29.2812 8.125 27.8437 7 24.9062c-.0872-.2277-1.1015-1.763-.875-1.7812l.9375-4.0313c.8158-2.9308 4.2118-5.1638 6.7992-6.5715 2.3198-1.2615 4.9067-1.934 7.5113-2.1714 2.1052-.192 4.259-.101 6.277.554 2.0182.6552 4.2956 1.063 5.5063 2.8765 0 0 1.5532 3.6305 1.6736 5.5487.1204 1.9177-2.0402 6.1206-2.0402 6.1206"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M31.5665 34.5708c.6293 1.944.9 4.0143.794 6.0635 0 0-.473 1.3654-6.7204 1.3654-6.2478 0-7.6077-.7104-7.6077-.7104.047-1.224.0518-2.4493.014-3.6732-.0028-.097.0414-.2356.13-.2062l-.1555-7.319 12.5354-2.0634c.4433.252.8525.5696 1.211.9412l-.2007 5.6022z"
			}), o.a.createElement("path", {
				fill: "#FF0",
				d: "M34.0514 21.4676c-.3642.8707-.5738 1.8017-.8143 2.7188-.601 2.29-1.4044 4.5218-2.3967 6.658.1578.0357.3286.0014.4624-.0927.072.7567 1.0046 1.1686 1.678.8836.6734-.2846 1.071-1.0334 1.2235-1.777.0223-.1084.0407-.2198.0277-.33-.0202-.1737-.114-.3265-.1996-.477-.6817-1.2056-.9025-2.6877-.6033-4.0528.099-.4518.2715-.9186.6318-1.1878.2046-.1536.452-.2293.6975-.2872.6156-.146 1.2512-.198 1.8812-.154l.33-1.1467c.054-.1864.108-.3773.0993-.572-.0212-.4554-.393-.8263-.8058-.9727-.412-.1463-.8604-.115-1.2947-.0823"
			}), o.a.createElement("path", {
				fill: "#F15A24",
				d: "M12.322 21.7194c.061.3407.127.693.3168.977.3034.4517.85.6324 1.3573.785.3797.1136.7785.2284 1.165.141.2643-.0598.5012-.2104.725-.3697.61-.433 1.1792-.9615 1.5326-1.6395.3962-.7593.4926-1.684.2625-2.5148-.0912-.3294-.2458-.6615-.524-.843-.2292-.1494-.5564-.2205-.6293-.4927-.1057-.3946-1.938-.4537-2.25-.4202-.474.051-.939.1728-1.2797.5403-.9068.9784-.8953 2.613-.676 3.8366M24.194 19.0418c.0644.3482.1334.708.3344.998.3193.462.8963.6468 1.431.8023.4005.1164.8212.234 1.2286.1447.2793-.0614.529-.2154.7647-.3776.644-.443 1.244-.983 1.617-1.6756.4174-.776.5195-1.7205.2768-2.5694-.0964-.3366-.2596-.6762-.5526-.8614-.242-.1528-.587-.2255-.664-.5037-.1117-.4033-2.0443-.464-2.3736-.4297-.4998.052-.9902.1766-1.3498.5523-.9564 1-.9442 2.67-.7126 3.9202"
			}), o.a.createElement("path", {
				fill: "#CCC",
				d: "M35.9408 20.9708c.222.0064.4462.0053.6533.066.4068.1196.9188.5786.945-.1845.007-.1902.012-.3904-.0708-.56-.122-.251-.5983-.9602-.824-1.087-.1087-.061-.236-.0694-.359-.073-.3063-.0092-.613.0014-.9182.0315-.9906.0986-.7374 1.4513.01 1.725.177.0647.3693.0764.5638.082"
			}), o.a.createElement("path", {
				fill: "#FF7BAC",
				d: "M37.8215 19.8532c-.0306.0467-.0694.0968-.123.099-.0946.0034-.1258-.128-.1816-.2085-.0644-.0938-.1824-.1258-.29-.1506-.4784-.112-1.163-.1415-1.5974-.3738-.4688-.251-.4095-.3117-.2434-.8975.178-.6268.4606-1.3722 1.071-1.6617 2.0532-.9728 2.1506 1.9814 1.3643 3.1932"
			}), o.a.createElement("path", {
				fill: "#FF0",
				d: "M30.808 32.959c.0077.0694.0343.1556.1004.1593-.0834-.0335-.1158.1122-.095.203.429.0508.8583.1012 1.2877.152.263.0313.5674.0482.752-.151.1304-.141.16-.3512.1825-.5462.032-.274.064-.548.0964-.822.0082-.0724.0135-.1552-.0336-.2086-.034-.0388-.087-.051-.137-.0588-.219-.0327-.446-.0064-.6532.075-.6713.2642-.6634-.6747-1.1966-.4688-.4516.1747-.346 1.279-.3035 1.6663"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M31.9858 34.3613c.3538.146.738.196 1.1182.2014 2.1213.03 4.1668-1.396 5.0646-3.4086.8978-2.0117.661-4.4994-.4998-6.3584-.514-.8238-1.3235-1.5857-2.2608-1.5168-.594.0433-1.1344.429-1.4745.9404-.3405.5112-.499 1.1347-.552 1.7558-.1233 1.4442.3143 2.9324 1.1923 4.053"
			}), o.a.createElement("path", {
				fill: "#F7E1CB",
				d: "M11.2195 30.4984l9.4083-2.7606 1.318 7.9058-7.4904 2.7607"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M12.7516 37.7683c.2136.2304.5864.1393.8525-.0207 1.096-.6588 1.5454-2.1516 1.337-3.4564-.108-.6758-.3805-1.3463-.877-1.792-.4966-.446-1.243-.6212-1.827-.3125-.402.212-.682.6167-.8776 1.041-.4437.9637-.5192 2.107-.206 3.1258.1683.548.462 1.0782.9255 1.388.4637.3095 1.1184.3464 1.543-.0195"
			}), o.a.createElement("g", null, o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M27.37 11.0563c-2.068-.6386-4.2747-.727-6.4318-.54-2.669.2313-5.8933.8336-7.6967 2.1168-.6986.4972-3.0193 1.2145-3.5257 3.1977"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M10.0543 14.9054c-1.561-.3985-3.317.0782-4.4594 1.2103-1.1422 1.132-1.726 2.906-1.237 4.4356.5752 1.8004 1.926 3.0712 2.306 3.275"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M10.0543 14.9054c-1.561-.3985-3.317.0782-4.4594 1.2103-1.1422 1.132-1.7258 2.906-1.237 4.4356.5756 1.8004 1.926 3.0712 2.306 3.275"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M11.823 29.9606c-2.7657-.9024-4.92-3.4455-5.3476-6.3126-.034-.2298.0103-.55.2428-.5677M33.1486 15.4973c.192.314.384.6286.576.9427.114.1872.2283.374.33.5677.5276 1.003.7084 2.182.5062 3.2958M35.8308 16.6844c-1.6376 4.9262-3.3644 9.8235-5.1785 14.688"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M35.671 17.0804c.2263-.288.586-.4587.9517-.4895.366-.0313.736.0692 1.0563.2483.2708.1508.515.364.6543.6404.1393.276.161.6202.0118.8913M38.3983 17.8874c-.6142 1.9982-1.3304 3.9652-2.145 5.891"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M37.245 21.08c.2485-.5347.1342-1.2158-.2747-1.641-.4093-.425-1.0872-.5678-1.6347-.3436-.1367.0562-.278.1512-.301.297"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M37.2275 21.501c.0044-.5535-.3094-1.0984-.791-1.374-.482-.2753-1.113-.2705-1.5904.012"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M34.2996 20.788c.7136-.389 1.6686-.2757 2.2706.269.2052.1856.376.4304.3964.706.006.0785-.0008.1578-.0196.2345M31.8127 33.921c.3626.1424.7564.1912 1.1458.1963 2.1737.0294 4.2697-1.3607 5.1896-3.3225.92-1.961.6773-4.386-.512-6.1982-.5268-.803-1.3562-1.5457-2.3166-1.4785-.6087.0423-1.1624.4184-1.511.9168-.3488.4983-.5113 1.106-.5655 1.7115-.1264 1.4077.322 2.8584 1.2216 3.9508M33.9912 29.3915l-1.467 4.0393M32.6352 33.0774c-.951.6286-1.8904 1.2738-2.8177 1.935"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M30.6496 31.0486l-.6455 4.1743c-.0058.0366-.0053.083.0385.099.044.0162.0833-.0547.0346-.0517"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M30.1422 33.367c.1982-.3278.4635-.6147.7748-.8386.078.1534.1257.3226.139.4943.287-.1218.5986-.183.9103-.1802-.3703.3692-.701.778-.9844 1.2173"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M31.195 33.0817c-.389.5013-.7464 1.0268-1.0695 1.5725.0302-.0257.0604-.0514.0902-.0775M30.7412 32.969c.0104.3634-.12.7275-.3766 1.0607M32.6658 33.0168c.1094-.676.1787-1.3585.2074-2.0422-.326.1956-.6525.3912-.979.5872-.1045.0627-.2386.1262-.3414.06-.063-.04-.091-.1166-.1135-.1874-.133-.4158-.2417-.8396-.3253-1.2682-.291.3247-.547.6807-.7626 1.0594"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M33.4372 28.176c-.177.4906-.354.9812-.5313 1.472-.285.7874-.5726 1.5822-1.0206 2.291M36.2456 21.1264c.048-.0176.0608-.0917.0218-.1244-.3043.6815-.5497 1.3883-.732 2.1112M30.4806 30.95c-.0843.2098-.1095.43-.074.6453M32.6366 25.235c-1.3602 1.8225-3.2855 3.1704-5.3524 4.1286-2.0672.958-4.284 1.55-6.5023 2.0763M30.348 27.747c.454.2455.8732.5552 1.24.9174M31.3832 34.1252c.6447 1.895.9225 3.913.8134 5.9105"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M20.2203 27.5033c.529 2.5225.9453 5.069 1.2474 7.6282.0048.042.0063.0925-.0276.1178-.0345.0253-.095-.029-.0603-.0536"
			}), o.a.createElement("path", {
				stroke: "#000",
				d: "M21.462 35.1753c-2.4317 1.1842-4.9882 2.113-7.614 2.7662-.0714.0177-.1587.031-.208-.023-.0494-.0544.038-.1667.0828-.1083",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), o.a.createElement("path", {
				stroke: "#000",
				d: "M13.3965 36.9094l.6482 1.51c-.01-.0428-.0207-.086-.0312-.129",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), o.a.createElement("path", {
				stroke: "#000",
				d: "M12.104 37.242c.219.2246.601.1358.8735-.0202 1.123-.6422 1.5835-2.0972 1.3698-3.369-.111-.659-.3898-1.3124-.8986-1.747-.5087-.4348-1.2736-.6054-1.872-.3045-.4118.2066-.6988.601-.8992 1.0147-.4546.9394-.532 2.054-.211 3.047.1723.5342.4733 1.051.9482 1.353.4753.3016 1.1462.3376 1.5813-.019M10.6766 30.3595c-.0715-.0158-.065.1064-.022.1655l.7927 1.0914c.011.0154.0276.0326.0457.0264.018-.006.0015-.0418-.01-.0268M10.6893 30.2222c3.1114-1.025 6.255-1.953 9.425-2.782.0814.1758.1628.352.2443.5274",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), o.a.createElement("path", {
				stroke: "#000",
				d: "M17.6433 28.0588c-.2222-.2202-.246-.6037-.5073-.7755-.2244-.148-.522-.0737-.7792.0048-1.0368.3175-2.073.6346-3.11.952-.2287.07-.4843.163-.579.382-.1275.2944.111.6096.332.843M13.849 27.877c-.025-.1897.085-.3783.2402-.4906.1554-.1123.349-.1592.5393-.1816.302-.0364.678.0275.7848.3115M17.774 36.8926c-.1595-.0286-.2392.1064-.234.201.068 1.193.0596 2.3876-.0247 3.5806M27.3276 14.627c-1.155-.254-2.4348.1776-3.1982 1.0778-.763.9005-.975 2.23-.5294 3.3214.203.498.537.9487.9825 1.252.757.5157 1.7714.556 2.64.263.9157-.3095 1.7137-.983 2.115-1.8592.401-.8763.3797-1.9464-.108-2.7783-.4875-.8312-1.447-1.3828-2.412-1.3303",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeWidth: ".5",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M15.604 17.5287c-.993-.5754-2.3376-.3743-3.2093.371-.872.745-1.2777 1.9505-1.1753 3.0903.038.4224.1422.845.359 1.2103.4368.7372 1.309 1.1618 2.168 1.1684.8592.007 1.6937-.3673 2.346-.924.2724-.2316.518-.497.7086-.799.465-.738.5666-1.6924.2675-2.511-.2992-.8188-.993-1.485-1.8255-1.7524"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M25.8734 23.061c.019.8443.036 1.706-.2144 2.513-.3128 1.0058-1.0497 1.8733-1.9936 2.347-.9442.4738-2.0827.547-3.0803.1982"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M24.826 27.045c-.909 1.0263-2.4282 1.5463-3.7262 1.098-.325-.1124-.682-.385-.5983-.7172-.305-.1123-.6554.132-.9616.024-.1132-.0405-.2045-.124-.2882-.21-.507-.519-.8602-1.1846-1.0054-1.894 1.3742.2257 2.797.237 4.147-.1035.6403-.1614 1.2614-.404 1.8365-.7284.2493-.1406 1.482-1.2717 1.6324-1.2287.3404.0972-.014 1.6884-.081 1.9398-.1798.6673-.4952 1.3003-.9554 1.82"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M24.826 27.045c-.909 1.0263-2.4282 1.5463-3.7262 1.098-.325-.1124-.682-.385-.5983-.7172-.305-.1123-.6554.132-.9616.024-.1132-.0405-.2045-.124-.2882-.21-.507-.519-.8602-1.1846-1.0054-1.894 1.3742.2257 2.797.237 4.147-.1035.6403-.1614 1.2614-.404 1.8365-.7284.2493-.1406 1.482-1.2717 1.6324-1.2287.3404.0972-.014 1.6884-.081 1.9398-.1798.6673-.4952 1.3003-.9554 1.82z"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M27.1593 11.0486c.356-.539.901-.9515 1.5182-1.148.3725-.1184.7656-.1595 1.157-.1632 1.2186-.011 2.452.3553 3.4137 1.1013.9616.7464 1.63 1.8822 1.7275 3.0925l.0405 1.2437c.0792.8083-.1735 1.644-.687 2.274-.0244.03-.0506.0716-.0296.1038.021.0323.0833-.0212.0465-.033"
			}), o.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M27.1593 11.0486c.356-.539.901-.9515 1.5182-1.148.3725-.1184.7656-.1595 1.157-.1632 1.2186-.011 2.452.3553 3.4137 1.1013.9616.7464 1.63 1.8822 1.7275 3.0925l.0405 1.2437c.0792.8083-.1735 1.644-.687 2.274-.0244.03-.0506.0716-.0296.1038.021.0323.0833-.0212.0465-.033M19.0092 10.923c-.1602-.079-.1772-.2954-.172-.4733.078-2.7703.1672-5.5993 1.1384-8.1964 1.835.0793 3.6632.3303 5.4515.7494"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M24.8624 3.1944c-.9362 1.032-.8485 2.7633.0626 3.8172.9108 1.0536 2.4758 1.4224 3.826 1.0687.64-.1677 1.2505-.4896 1.6915-.981 1.0054-1.121.9137-2.9152.1555-4.215-.237-.407-.534-.784-.9052-1.075-.72-.5643-1.7132-.7643-2.597-.5235-.883.241-1.6355.917-1.9667 1.768"
			}), o.a.createElement("path", {
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/TextPost/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/ThumbnailSelect/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, o.a.createElement("path", {
				d: "M0 0h20v20H0z"
			}), o.a.createElement("path", {
				fill: "#A5A4A4",
				d: "M6 3h8c1.1046 0 2 .8954 2 2v10c0 1.1046-.8954 2-2 2H6c-1.1046 0-2-.8954-2-2V5c0-1.1046.8954-2 2-2zm11 1c1.1046 0 2 .8954 2 2v8c0 1.1046-.8954 2-2 2V4zM3 4v12h-.6667C1.597 16 1 15.1734 1 14.1538V5.8462C1 4.8266 1.597 4 2.3333 4H3z"
			})))
		},
		"./src/reddit/icons/svgs/Tile/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("rect", {
				stroke: "inherit",
				fill: "none",
				x: "1.5",
				y: "1.5",
				width: "17",
				height: "17",
				rx: "4"
			}), o.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "4",
				y: "4",
				width: "5.5",
				height: "5.5"
			}), o.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "10.5",
				y: "4",
				width: "5.5",
				height: "5.5"
			}), o.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "4",
				y: "10",
				width: "5.5",
				height: "5.5"
			}), o.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "10.5",
				y: "10",
				width: "5.5",
				height: "5.5"
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = n.n(a);
			const c = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/Video/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", {
				transform: "translate(3, 4)"
			}, o.a.createElement("path", {
				d: "M15.4927,2.1514 C15.1797,1.9734 14.7947,1.9784 14.4857,2.1644 L11.9997,3.6554 L11.9997,2.0004 C11.9997,0.8974 11.1027,0.0004 9.9997,0.0004 L1.9997,0.0004 C0.8967,0.0004 -0.0003,0.8974 -0.0003,2.0004 L-0.0003,10.0004 C-0.0003,11.1034 0.8967,12.0004 1.9997,12.0004 L9.9997,12.0004 C11.1027,12.0004 11.9997,11.1034 11.9997,10.0004 L11.9997,8.3664 L14.4907,9.8394 C14.6477,9.9324 14.8237,9.9784 14.9997,9.9784 C15.1707,9.9784 15.3417,9.9344 15.4957,9.8474 C15.8077,9.6694 15.9997,9.3384 15.9997,8.9784 L15.9997,3.0214 C15.9997,2.6614 15.8057,2.3284 15.4927,2.1514"
			})))
		},
		"./src/reddit/icons/svgs/VideoApplyNow/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1x0QJr7iXMkiGpOnQbAvYN"
			}
		},
		"./src/reddit/icons/svgs/VideoApplyNow/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/VideoApplyNow/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M27.7 20.4h-7.4c-.2 0-.4-.2-.4-.4s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.3.4-.5.4m0 3.1h-7.4c-.2 0-.4-.3-.4-.5 0-.3.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.2-.3.5-.5.5m0 3h-7.4c-.2 0-.4-.2-.4-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.3-.3.5-.5.5m0 3h-7.4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.2.5-.4.5m2-12.2h-2.2c-.3-.6-1-1-1.7-1h-3.6c-.7 0-1.4.4-1.7 1h-2.2c-.5 0-1 .4-1 1v12.5c0 .5.4 1 1 1h11.5c.5 0 1-.4 1-1V18.2c-.1-.5-.5-.9-1.1-.9"
			})))
		},
		"./src/reddit/icons/svgs/VideoCheckmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 77.06 60"
			}, o.a.createElement("g", {
				fill: "none"
			}, o.a.createElement("path", {
				d: "M75.17,11.35l-44.9,46.7a6.17,6.17,0,0,1-9,0L1.88,37.55a6.83,6.83,0,0,1,0-9.4,6.17,6.17,0,0,1,9,0l15,15.8L66.27,2a6.17,6.17,0,0,1,9,0A6.93,6.93,0,0,1,75.17,11.35Z",
				fill: "#FFFFFF"
			})))
		},
		"./src/reddit/icons/svgs/VideoCollapse/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M14.41,13H17a1,1,0,0,0,0-2H12a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V14.41l3.24,3.24a1,1,0,0,0,1.41-1.41Z",
				fill: "#FFFFFF"
			}), o.a.createElement("path", {
				d: "M8,2A1,1,0,0,0,7,3V5.59L3.76,2.34A1,1,0,0,0,2.34,3.76L5.59,7H3A1,1,0,0,0,3,9H8A1,1,0,0,0,9,8V3A1,1,0,0,0,8,2Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoContactUs/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_11XLCF2uLCEj35_lDddpNT"
			}
		},
		"./src/reddit/icons/svgs/VideoContactUs/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/VideoContactUs/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M34.5 23.7s-.1 0 0 0c-.1 0-.1 0 0 0-.1 0-.1 0 0 0-.1-.1-.1-.1-.2-.1l-15.4-7.2c-.1-.1-.3-.1-.5 0-.1.1-.2.2-.2.4v4.3c0 .2.2.4.4.5l10.3 1.9H18.2c-.1 0-.2 0-.2.1L15.6 25c-.2.1-.3.3-.2.6.1.2.2.3.5.3l2.4-.2v5.5c0 .2.1.3.2.4.1 0 .2.1.3.1h.2l15.4-7.2s.1 0 .1-.1c0 0 .1 0 .1-.1.1-.1.1-.2.1-.3-.1-.1-.2-.2-.2-.3"
			})))
		},
		"./src/reddit/icons/svgs/VideoExpand/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M9,3A1,1,0,0,0,8,2H3A1,1,0,0,0,2,3V8A1,1,0,0,0,4,8V5.41L7.24,8.66A1,1,0,0,0,8.66,7.24L5.41,4H8A1,1,0,0,0,9,3Z",
				fill: "#FFFFFF"
			}), o.a.createElement("path", {
				d: "M17,11a1,1,0,0,0-1,1v2.59l-3.24-3.24a1,1,0,0,0-1.41,1.41L14.59,16H12a1,1,0,0,0,0,2h5a1,1,0,0,0,1-1V12A1,1,0,0,0,17,11Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoGetAQuote/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "Ui8OEQfWnkN9BO2o-qSXV"
			}
		},
		"./src/reddit/icons/svgs/VideoGetAQuote/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/VideoGetAQuote/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M19.5 17.3h3.1l-1.8 5h2.3v6.5h-6.8v-6l3.2-5.5zm8.5 0h3.1l-1.8 5h2.3v6.5h-6.8v-6l3.2-5.5z"
			})))
		},
		"./src/reddit/icons/svgs/VideoGetShowtimes/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "o2NVVhdZrQ3VeGMHO8aA0"
			}
		},
		"./src/reddit/icons/svgs/VideoGetShowtimes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/VideoGetShowtimes/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M32.2 20.3c-.3-.2-.7-.2-1 0l-2.4 1.4v-1.5c0-1.1-.9-1.9-1.9-1.9h-7.7c-1.1 0-1.9.9-1.9 1.9v7.7c0 1.1.9 1.9 1.9 1.9h7.7c1.1 0 1.9-.9 1.9-1.9v-1.6l2.4 1.4c.2.1.3.1.5.1s.3 0 .5-.1c.3-.2.5-.5.5-.8v-5.8c-.1-.3-.2-.6-.5-.8"
			})))
		},
		"./src/reddit/icons/svgs/VideoInstall/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_3DFi9BDKHWFWnty75sJhyJ"
			}
		},
		"./src/reddit/icons/svgs/VideoInstall/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/VideoInstall/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M30.7 25c.5 0 1 .4 1 1v2.9c0 1.6-1.3 2.9-2.9 2.9h-9.6c-1.6 0-2.9-1.3-2.9-2.9v-3c0-.5.4-1 1-1s1 .4 1 1v2.9c0 .5.4 1 1 1h9.6c.5 0 1-.4 1-1v-2.9c-.1-.5.3-.9.8-.9zm-7.4 1.6l-2.9-2.9c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l1.2 1.3v-6.3c0-.5.4-1 1-1 .5 0 1 .4 1 1v6.3l1.2-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-2.9 2.8c-.1.1-.2.2-.3.2-.2.1-.3.1-.4.1-.1 0-.2 0-.4-.1-.1 0-.2-.1-.3-.2z"
			})))
		},
		"./src/reddit/icons/svgs/VideoLearnMore/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1PkP2GybP9Bh6mN4gmbPN4"
			}
		},
		"./src/reddit/icons/svgs/VideoLearnMore/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/VideoLearnMore/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M25.4 24c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4.6-1.4 1.4-1.4 1.4.6 1.4 1.4zm5.3 0c0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4c.8 0 1.4.6 1.4 1.4zm-10.5 0c0 .8-.6 1.4-1.4 1.4s-1.5-.6-1.5-1.4.6-1.4 1.4-1.4 1.5.6 1.5 1.4z"
			})))
		},
		"./src/reddit/icons/svgs/VideoMute/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M16.41,10.5l1.79-1.79a1,1,0,0,0-1.41-1.41L15,9.09,13.21,7.29a1,1,0,0,0-1.41,1.41l1.79,1.79-1.79,1.79a1,1,0,1,0,1.41,1.41L15,11.91l1.79,1.79a1,1,0,0,0,1.41-1.41Z",
				fill: "#FFFFFF"
			}), o.a.createElement("path", {
				d: "M9.7,1.54a.5.5,0,0,0-.54.09L3.81,6.5H1.5A.5.5,0,0,0,1,7v6a.5.5,0,0,0,.5.5H3.81l5.36,4.87a.5.5,0,0,0,.34.13.49.49,0,0,0,.2,0A.5.5,0,0,0,10,18V2A.5.5,0,0,0,9.7,1.54Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoNewPlayButton/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "eI6Ep6BNFA5DZjPWNVb4O"
			}
		},
		"./src/reddit/icons/svgs/VideoNewPlayButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/VideoNewPlayButton/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M33.1 22.2l-11.5-6.7c-.3-.2-.7-.2-1 0-.3.2-.4.5-.4.8v13.4c0 .3.2.7.5.8.1.1.3.1.5.1s.3 0 .5-.1l11.5-6.7c.3-.2.5-.5.5-.8-.1-.3-.3-.6-.6-.8"
			})))
		},
		"./src/reddit/icons/svgs/VideoPause/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("rect", {
				x: "11",
				y: "2",
				width: "6",
				height: "16",
				rx: "1",
				ry: "1",
				fill: "#FFFFFF"
			}), o.a.createElement("rect", {
				x: "3",
				y: "2",
				width: "6",
				height: "16",
				rx: "1",
				ry: "1",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoPlay/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M18.5,9.14l-12-7A1,1,0,0,0,5,3V17a1,1,0,0,0,1.5.86l12-7a1,1,0,0,0,0-1.73Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoPlayNow/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1EfHCA6m0dIgLYzGW2aor1"
			}
		},
		"./src/reddit/icons/svgs/VideoPlayNow/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/VideoPlayNow/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M32.5,23.5c-0.7,0-1.4-0.6-1.4-1.4c0-0.7,0.6-1.4,1.4-1.4s1.4,0.6,1.4,1.4 C33.8,22.8,33.2,23.5,32.5,23.5 M29.8,26.2c-0.7,0-1.4-0.6-1.4-1.4c0-0.7,0.6-1.4,1.4-1.4c0.7,0,1.4,0.6,1.4,1.4 C31.1,25.6,30.5,26.2,29.8,26.2 M27.1,23.5c-0.7,0-1.4-0.6-1.4-1.4c0-0.7,0.6-1.4,1.4-1.4c0.7,0,1.4,0.6,1.4,1.4 C28.4,22.8,27.8,23.5,27.1,23.5 M21.6,23.1H20v1.7c0,0.6-0.5,1-1,1s-1-0.5-1-1v-1.7h-1.7c-0.6,0-1-0.5-1-1c0-0.6,0.5-1,1-1H18 v-1.7c0-0.6,0.5-1,1-1s1,0.5,1,1v1.7h1.7c0.6,0,1,0.5,1,1C22.7,22.7,22.2,23.1,21.6,23.1 M29.8,18c0.7,0,1.4,0.6,1.4,1.4 c0,0.7-0.6,1.4-1.4,1.4c-0.7,0-1.4-0.6-1.4-1.4C28.4,18.6,29,18,29.8,18 M37.3,28.1l-1.7-9.5c-0.4-1.9-2-3.3-4-3.3H17.1 c-2,0-3.6,1.4-4,3.3l-1.7,9.5c-0.2,1.2,0.1,2.4,0.9,3.3c0.8,0.9,1.9,1.5,3.1,1.5h0.2c1.8,0,3.3-1.1,3.9-2.8l0.4-1.3h8.9 l0.4,1.3c0.6,1.7,2.1,2.8,3.9,2.8h0.2c1.2,0,2.3-0.5,3.1-1.5C37.2,30.5,37.5,29.3,37.3,28.1"
			})))
		},
		"./src/reddit/icons/svgs/VideoReplay/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_3N5UJK0Os17icJ33e54tfY"
			}
		},
		"./src/reddit/icons/svgs/VideoReplay/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/VideoReplay/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2"
			})))
		},
		"./src/reddit/icons/svgs/VideoSeeMenu/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "G2_89gx6TwcALtRI4k7hc"
			}
		},
		"./src/reddit/icons/svgs/VideoSeeMenu/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/VideoSeeMenu/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M29.3 20.2h-5.8c-.2 0-.5-.3-.5-.5 0-.3.2-.5.5-.5h5.8c.3 0 .5.2.5.5 0 .2-.3.5-.5.5zm0 4.3h-5.8c-.2 0-.5-.2-.5-.5s.2-.5.5-.5h5.8c.3 0 .5.2.5.5s-.3.5-.5.5zm0 4.3h-5.8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5.8c.3 0 .5.2.5.5s-.3.5-.5.5zm-8.2-8.2c0 .3-.2.5-.5.5h-1.9c-.3 0-.5-.2-.5-.5v-1.9c0-.3.2-.5.5-.5h1.9c.3 0 .5.2.5.5v1.9zm0 4.4c0 .3-.2.5-.5.5h-1.9c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5h1.9c.3 0 .5.2.5.5v2zm0 4.3c0 .3-.2.5-.5.5h-1.9c-.3 0-.5-.2-.5-.5v-1.9c0-.3.2-.5.5-.5h1.9c.3 0 .5.2.5.5v1.9zm8.7-13H18.2c-1.1 0-1.9.9-1.9 1.9v11.5c0 1.1.9 1.9 1.9 1.9h11.5c1.1 0 1.9-.9 1.9-1.9V18.2c.1-1-.8-1.9-1.8-1.9z"
			})))
		},
		"./src/reddit/icons/svgs/VideoSetting/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				fill: "#fff",
				d: "M18.5,8.94,16.32,8.5h0a6.46,6.46,0,0,0-.79-1.9h0l1.23-1.85a1.08,1.08,0,0,0-1.5-1.5L13.41,4.47h0a6.45,6.45,0,0,0-1.9-.79h0L11.06,1.5a1.08,1.08,0,0,0-2.12,0L8.5,3.68h0a6.45,6.45,0,0,0-1.9.79h0L4.74,3.24a1.08,1.08,0,0,0-1.5,1.5L4.47,6.59h0a6.45,6.45,0,0,0-.79,1.9h0L1.5,8.94a1.08,1.08,0,0,0,0,2.12l2.18.44h0a6.45,6.45,0,0,0,.79,1.9h0L3.24,15.26a1.08,1.08,0,0,0,1.5,1.5l1.85-1.23h0a6.45,6.45,0,0,0,1.9.79h0l.44,2.18a1.08,1.08,0,0,0,2.12,0l.44-2.18h0a6.45,6.45,0,0,0,1.9-.79h0l1.85,1.23a1.08,1.08,0,0,0,1.5-1.5l-1.23-1.85h0a6.45,6.45,0,0,0,.79-1.9h0l2.18-.44a1.08,1.08,0,0,0,0-2.12ZM10,13.5A3.5,3.5,0,1,1,13.5,10,3.5,3.5,0,0,1,10,13.5Z"
			}))
		},
		"./src/reddit/icons/svgs/VideoShopNow/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_2kG3YOJULmYUC8YtVtNO9J"
			}
		},
		"./src/reddit/icons/svgs/VideoShopNow/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/VideoShopNow/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M29 26c-.6 0-1-.4-1-1 0-.5.4-1 1-1s1 .4 1 1-.5 1-1 1zm-6.9-6c0-.5.4-1 1-1H27c.6 0 1 .4 1 1v2.1h-5.9V20zM21 26c-.6 0-1-.4-1-1 0-.5.4-1 1-1s1 .4 1 1-.5 1-1 1zm11.7-3.6c-.2-.2-.5-.3-.7-.3h-2V20c0-1.6-1.3-3-3-3h-3.9c-1.7 0-3 1.3-3 3v2.1H18c-.3 0-.6.1-.7.3-.2.2-.3.5-.2.8l1 9c.1.5.5.9 1 .9h12c.5 0 .9-.4 1-.9l1-9c-.1-.4-.2-.6-.4-.8z"
			})))
		},
		"./src/reddit/icons/svgs/VideoSignUp/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1NxifIlpri3Af8fEoxkaUr"
			}
		},
		"./src/reddit/icons/svgs/VideoSignUp/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/VideoSignUp/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M27.7 20.4h-7.4c-.2 0-.4-.2-.4-.4s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.3.4-.5.4m0 3.1h-7.4c-.2 0-.4-.3-.4-.5 0-.3.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.2-.3.5-.5.5m0 3h-7.4c-.2 0-.4-.2-.4-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.3-.3.5-.5.5m0 3h-7.4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.2.5-.4.5m2-12.2h-2.2c-.3-.6-1-1-1.7-1h-3.6c-.7 0-1.4.4-1.7 1h-2.2c-.5 0-1 .4-1 1v12.5c0 .5.4 1 1 1h11.5c.5 0 1-.4 1-1V18.2c-.1-.5-.5-.9-1.1-.9"
			})))
		},
		"./src/reddit/icons/svgs/VideoSnoo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "16px",
				height: "16px",
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, o.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M13.43,13.02125 C12.5683333,13.02125 11.8675,12.3204167 11.8675,11.45875 C11.8675,10.5970833 12.5683333,9.89583333 13.43,9.89583333 C14.2916667,9.89583333 14.9925,10.5970833 14.9925,11.45875 C14.9925,12.3204167 14.2916667,13.02125 13.43,13.02125 M13.705,15.5875 C12.63875,16.6525 10.595,16.735 9.99416667,16.735 C9.39333333,16.735 7.34958333,16.6525 6.28458333,15.5870833 C6.12625,15.4291667 6.12625,15.1725 6.28458333,15.0145833 C6.4425,14.8566667 6.69916667,14.85625 6.85708333,15.0145833 C7.52916667,15.6866667 8.96708333,15.9254167 9.99416667,15.9254167 C11.02125,15.9254167 12.4595833,15.6866667 13.1329167,15.0141667 C13.29125,14.85625 13.5475,14.8566667 13.7054167,15.0145833 C13.8633333,15.1729167 13.8633333,15.4291667 13.705,15.5875 M4.9925,11.45875 C4.9925,10.5970833 5.69375,9.89583333 6.55583333,9.89583333 C7.41666667,9.89583333 8.1175,10.5970833 8.1175,11.45875 C8.1175,12.32 7.41666667,13.0208333 6.55583333,13.0208333 C5.69375,13.0208333 4.9925,12.32 4.9925,11.45875 M19.99,9.89583333 C19.99,8.68791667 19.0108333,7.70833333 17.8025,7.70833333 C17.2129167,7.70833333 16.67875,7.94291667 16.2854167,8.32208333 C14.79,7.24333333 12.73,6.54625 10.4354167,6.46625 L11.4316667,1.77833333 L14.6875,2.47041667 C14.7270833,3.29791667 15.405,3.95833333 16.2425,3.95833333 C17.1054167,3.95833333 17.805,3.25875 17.805,2.39583333 C17.805,1.53291667 17.1054167,0.833333333 16.2425,0.833333333 C15.62875,0.833333333 15.1029167,1.19083333 14.8475,1.70541667 L11.2120833,0.932916667 C11.1108333,0.910833333 11.005,0.930833333 10.9183333,0.987083333 C10.83125,1.04375 10.7704167,1.1325 10.74875,1.23375 L9.65541667,6.37791667 C9.64916667,6.4075 9.65416667,6.43541667 9.65458333,6.46458333 C7.31875,6.52583333 5.21875,7.22458333 3.7,8.31833333 C3.30708333,7.94125 2.775,7.70833333 2.1875,7.70833333 C0.979166667,7.70833333 0,8.68791667 0,9.89583333 C0,10.785 0.530833333,11.5483333 1.29208333,11.8904167 C1.25833333,12.1079167 1.24,12.32875 1.24,12.5520833 C1.24,15.9179167 5.1575,18.6458333 9.99,18.6458333 C14.8225,18.6458333 18.74,15.9179167 18.74,12.5520833 C18.74,12.33 18.7220833,12.1108333 18.68875,11.895 C19.455,11.5545833 19.99,10.7883333 19.99,9.89583333"
			})))
		},
		"./src/reddit/icons/svgs/VideoViewMore/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_2X_GdgwreX3clU-MfCHx-Y"
			}
		},
		"./src/reddit/icons/svgs/VideoViewMore/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/VideoViewMore/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M29.8 23H25v-4.8c0-.5-.4-1-1-1s-1 .4-1 1V23h-4.8c-.5 0-1 .4-1 1s.4 1 1 1H23v4.8c0 .5.4 1 1 1s1-.4 1-1V25h4.8c.5 0 1-.4 1-1s-.5-1-1-1"
			})))
		},
		"./src/reddit/icons/svgs/VideoVolume/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M12.67,3.1a1,1,0,0,0-.33,2,5,5,0,0,1,0,9.85,1,1,0,0,0,.17,2h.17a7,7,0,0,0,0-13.79Z",
				fill: "#FFFFFF"
			}), o.a.createElement("path", {
				d: "M9.7,1.54a.5.5,0,0,0-.54.09L3.81,6.5H1.5A.5.5,0,0,0,1,7v6a.5.5,0,0,0,.5.5H3.81l5.36,4.87a.5.5,0,0,0,.34.13.49.49,0,0,0,.2,0A.5.5,0,0,0,10,18V2A.5.5,0,0,0,9.7,1.54Z",
				fill: "#FFFFFF"
			}), o.a.createElement("path", {
				d: "M12,10.86a1,1,0,0,0,1,1.73,3,3,0,0,0,0-5.17,1,1,0,0,0-1,1.73,1,1,0,0,1,0,1.72Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoWatchNow/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "egx9Z9oH6-wpjLKKhAEoM"
			}
		},
		"./src/reddit/icons/svgs/VideoWatchNow/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/VideoWatchNow/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(1 1)"
			}, o.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M32.2 20.3c-.3-.2-.7-.2-1 0l-2.4 1.4v-1.5c0-1.1-.9-1.9-1.9-1.9h-7.7c-1.1 0-1.9.9-1.9 1.9v7.7c0 1.1.9 1.9 1.9 1.9h7.7c1.1 0 1.9-.9 1.9-1.9v-1.6l2.4 1.4c.2.1.3.1.5.1s.3 0 .5-.1c.3-.2.5-.5.5-.8v-5.8c-.1-.3-.2-.6-.5-.8"
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
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
				return o.a.createElement("div", u({
					className: Object(r.a)(l.a.backgroundContainer, n),
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
			const h = Object(d.u)(),
				b = Object(a.c)({
					isEditing: l.i,
					layout: (e, t) => t.forcedLayout || Object(d.Q)(e, t)
				}),
				f = Object(r.b)(b);
			t.a = h(f(({
				className: e,
				hideOnlyChildMargin: t,
				disableFullscreen: n,
				dispatch: s,
				fitPageToContent: r,
				forcedLayout: a,
				isCollectionLayout: l,
				isEditing: u,
				layout: h,
				pageLayer: b,
				...f
			}) => o.a.createElement("div", p({
				className: Object(i.a)(e, m.a.styledContent, {
					[m.a.mLargePostLayout]: h === c.g.Large || Object(d.N)(b),
					[m.a.mDisableFullScreen]: n && !l,
					[m.a.mClassicWidth]: l,
					[m.a.mIsEditing]: !!u,
					[m.a.mCanFlexFullWidth]: !r,
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
				o = n.n(s),
				r = n("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				a = n("./src/reddit/layout/page/Listing/Content.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/componentSizes.ts"),
				d = n("./src/reddit/constants/elementClassNames.ts"),
				l = n("./src/reddit/constants/screenWidths.ts"),
				u = n("./src/reddit/contexts/NavbarExp.ts"),
				m = n("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				p = n("./src/reddit/layout/page/Listing/index.m.less"),
				h = n.n(p);
			t.a = e => {
				const {
					backgroundColor: t,
					className: n,
					containerRef: p,
					content: b,
					contentBanner: f,
					contentClassName: g,
					contentNavBar: x,
					disableFullscreen: C,
					fitPageToContent: v,
					forcedLayout: E,
					hideOnlyChildMargin: _,
					isCollectionLayout: O,
					isPageSwapped: y,
					maxWidth: k,
					navBar: w,
					redditStyle: S,
					sidebar: j,
					sidebars: P,
					trendingUnit: T,
					subredditId: I
				} = e, N = T ? "28px" : "0", D = y ? {
					marginRight: `${c.q}px`,
					marginTop: N
				} : {
					marginLeft: `${c.q}px`,
					marginTop: N
				}, M = j && o.a.createElement("div", {
					className: Object(i.a)(h.a.sidebar, O ? h.a["m-collectionLayout"] : h.a.defaultLayout),
					style: D
				}, j), R = o.a.createElement(a.a, {
					hideOnlyChildMargin: _,
					className: g,
					disableFullscreen: C,
					fitPageToContent: v,
					forcedLayout: E,
					isCollectionLayout: O
				}, f, b);
				let L;
				L = P ? o.a.createElement(o.a.Fragment, null, P[0], R, P[1]) : y ? o.a.createElement(o.a.Fragment, null, M, R) : o.a.createElement(o.a.Fragment, null, R, M);
				const A = C ? `${k||l.a+2*c.m}px` : "100%",
					F = Object(s.useContext)(u.a);
				return o.a.createElement(m.a, {
					subredditId: I
				}, o.a.createElement("div", {
					className: Object(i.a)(h.a.outerContainer, d.i, n, {
						[h.a.outerContainerExp]: F
					}),
					ref: p
				}, o.a.createElement(r.a, {
					className: d.h,
					redditStyle: S,
					backgroundColor: t
				}), o.a.createElement("div", {
					className: h.a.innerContainer
				}, o.a.createElement("div", {
					className: h.a.bannerNavContainer
				}, w), x, (e => e.hero ? o.a.createElement(o.a.Fragment, null, e.hero) : null)(e), o.a.createElement("div", {
					style: {
						maxWidth: A
					}
				}, T), o.a.createElement("div", {
					className: h.a.body,
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
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/layout/row/Inline/index.m.less"),
				r = n.n(o);
			t.a = s.a.div("inlineRow", r.a)
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
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, n) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/layout/row/RightAlign/index.m.less"),
				r = n.n(o);
			t.a = s.a.div("rightAligned", r.a)
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = n.n(i);
			t.a = Object(r.a)(e => o.a.createElement("div", {
				className: Object(a.a)(c.a.expandedCenterContainer, e.className)
			}, o.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), o.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), o.a.createElement("div", {
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
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			}));
			var s, o, r = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(s || (s = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(o || (o = {}));
			const a = {
					[s.Loyalty]: r.a.First,
					[s.Achievement]: r.a.Second,
					[s.Cosmetic]: void 0
				},
				i = e => e === r.a.First ? s.Loyalty : e === r.a.Second ? s.Achievement : s.Cosmetic
		},
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var s, o = n("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups", e.Premium = "premium"
			}(s || (s = {}));
			const r = {
				[s.Powerups]: () => o.fbt._("Reddit - Buy Powerups", null, {
					hk: "4sEI31"
				}),
				[s.Premium]: () => o.fbt._("Reddit - Buy Premium", null, {
					hk: "19EtMU"
				})
			};
			var a, i;
			! function(e) {
				e.Month = "MONTH", e.Year = "YEAR"
			}(a || (a = {})),
			function(e) {
				e.GildFlow = "gild_flow", e.LowCoinBalance = "low_coin_balance", e.NewUserTargetedOffer = "new_user_targeted_offer", e.RepeatUserTargetedOffer = "repeat_user_targeted_offer", e.StorefrontFreeAward = "storefront_free_award", e.CoinSale = "coin_sale", e.AvatarNewGear = "avatar_new_gear"
			}(i || (i = {}));
			const c = (e, t) => {
				const n = e && e.dealInfo && e.dealInfo.type,
					s = "low_coin_upsell" === n,
					o = "new_purchaser" === n,
					r = "repeat_purchaser" === n;
				return t ? i.GildFlow : s ? i.LowCoinBalance : o ? i.NewUserTargetedOffer : r ? i.RepeatUserTargetedOffer : void 0
			}
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return a
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
				return b
			})), n.d(t, "q", (function() {
				return g
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "m", (function() {
				return O
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "p", (function() {
				return w
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/assertNever.ts"),
				o = n("./src/reddit/models/GqlTopLevelField.ts"),
				r = n("./src/reddit/models/User/index.ts");
			const a = "scheduledposts";
			var i, c, d;
			! function(e) {
				e.LINK = "LINK", e.POLL = "POLL", e.SELF = "SELF"
			}(i || (i = {})),
			function(e) {
				e.RTJSON = "RTJSON", e.TEXT = "TEXT"
			}(c || (c = {})),
			function(e) {
				e.CREATED = "CREATED", e.PROCESSING = "PROCESSING", e.FAILED = "FAILED", e.SUCCESS = "SUCCESS"
			}(d || (d = {}));
			const l = e => {
					return new Set(["links", "text", "polls"]).has(e)
				},
				u = e => e.__typename === r.c.AvailableRedditor,
				m = e => e.__typename === o.a.Subreddit;
			var p, h, b, f;
			! function(e) {
				e.standalonePosts = "standalonePosts", e.recurringPosts = "recurringPosts"
			}(p || (p = {})),
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
				x = e => f[h[e]],
				C = e => b[h[e]],
				v = e => h[b[e]],
				E = e => f[b[e]];
			var _;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(_ || (_ = {}));
			const O = e => {
					switch (e) {
						case _.Hourly:
						case _.Daily:
						case _.Weekly:
						case _.Monthly:
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
							return Object(s.a)(e)
					}
				},
				w = e => "frequency" in e && !!e.frequency
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/pages/ErrorPages/index.m.less"),
				c = n.n(i);
			const d = ({
					message: e
				}) => r.a.createElement("div", {
					className: c.a.container
				}, r.a.createElement("h3", {
					className: c.a.title
				}, e || s.fbt._("Sorry, there doesn't seem to be anything here.", null, {
					hk: "3VvHek"
				})), r.a.createElement(a.m, {
					className: c.a.primaryRouterLink,
					to: "/"
				}, s.fbt._("Go Home", null, {
					hk: "3E9E1g"
				}))),
				l = ({
					message: e
				}) => r.a.createElement("div", {
					className: c.a.container
				}, r.a.createElement("h3", {
					className: c.a.title
				}, e || s.fbt._("Sorry, You do not have permission to view this page.", null, {
					hk: "4lRbHD"
				})), r.a.createElement(a.m, {
					className: c.a.primaryRouterLink,
					to: "/"
				}, s.fbt._("Go Home", null, {
					hk: "3E9E1g"
				})))
		},
		"./src/reddit/pages/PostCreation/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/postCreation/general.ts"),
				c = n("./src/reddit/components/JumpToContent/index.tsx"),
				d = n("./node_modules/fbt/lib/FbtPublic.js"),
				l = n("./node_modules/lodash/once.js"),
				u = n.n(l),
				m = n("./node_modules/react-router-redux/es/index.js"),
				p = n("./src/lib/classNames/index.ts"),
				h = n("./src/lib/constants/index.ts"),
				b = n("./src/reddit/constants/keycodes.ts"),
				f = n("./src/reddit/helpers/correlationIdTracker.ts"),
				g = n("./src/reddit/models/PostCreationForm/index.ts"),
				x = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				C = n("./src/reddit/pages/ErrorPages/index.tsx"),
				v = n("./src/reddit/selectors/postCollection.ts"),
				E = n("./src/reddit/components/CrosspostBox/index.tsx"),
				_ = n("./src/reddit/components/RequestPendingBanner/index.tsx"),
				O = n("./src/reddit/components/RichTextEditor/media/helpers.ts"),
				y = n("./src/reddit/contexts/PageLayer/index.tsx"),
				k = n("./src/reddit/helpers/trackers/postComposer.ts"),
				w = n("./src/reddit/selectors/activeModalId.ts"),
				S = n("./src/reddit/selectors/platform.ts"),
				j = n("./src/reddit/selectors/postCreations.ts"),
				P = n("./src/reddit/selectors/postDraft.ts"),
				T = n("./src/reddit/selectors/subreddit.ts"),
				I = n("./src/reddit/selectors/user.ts"),
				N = n("./src/reddit/actions/changeUsername.ts"),
				D = n("./src/reddit/actions/externalAccount.ts"),
				M = n("./src/reddit/actions/postCreation/mediaUpload.ts"),
				R = n("./src/reddit/actions/postCreation/submit.ts"),
				L = n("./src/reddit/actions/postCreation/subredditChange.ts"),
				A = n("./src/reddit/actions/postDraft.ts"),
				F = n("./src/reddit/actions/upload.ts"),
				B = n("./src/reddit/helpers/externalAccount/index.tsx"),
				U = n("./node_modules/history/esm/history.js"),
				W = n("./node_modules/react-router/esm/react-router.js"),
				V = n("./src/lib/matchRoute/index.ts"),
				G = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx"),
				H = n("./src/reddit/selectors/scheduledPosts/index.ts");
			const z = "DISCARD_POST_ON_NAVIGATION_MODAL_ID",
				K = Object(a.c)({
					isEditingScheduledPost: e => !!Object(H.r)(e),
					isScheduledPost: j.Q
				});
			var q = Object(r.b)(K)(e => {
					const {
						isEditingScheduledPost: t,
						isScheduledPost: n,
						onAbort: s,
						onDiscardConfirmed: r,
						onSaveDraft: a,
						submissionType: i
					} = e;
					return h.G.has(i) && !n ? o.a.createElement(G.a, {
						bodyText: d.fbt._("Do you want to save a draft of your post?", null, {
							hk: "3EV54t"
						}),
						onClose: s,
						onPrimaryAction: a,
						onSecondaryAction: r,
						primaryButtonText: d.fbt._("Save Draft", null, {
							hk: "1VdofA"
						}),
						secondaryButtonText: d.fbt._("Discard Post", null, {
							hk: "1CBjtn"
						}),
						titleText: d.fbt._("Save draft", null, {
							hk: "44JnYT"
						})
					}) : o.a.createElement(G.a, {
						bodyText: t ? d.fbt._("Returning to the previous page will discard your changes", null, {
							hk: "2LlXOp"
						}) : d.fbt._("Returning to the previous page will discard your post", null, {
							hk: "3fT0mW"
						}),
						onClose: s,
						onPrimaryAction: s,
						onSecondaryAction: r,
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
			const Y = e => (e.returnValue = "", ""),
				J = Object(a.c)({
					destSubreddit: j.h,
					hasError: j.u,
					havePostContent: j.B,
					isChanged: j.F,
					modalId: w.a,
					submitPostPending: j.mb
				}),
				Z = Object(r.b)(J, e => ({
					onToggleDiscardModal: () => e(i.y(z))
				}), (e, t, n) => ({
					...e,
					...t,
					...n
				}));
			class X extends o.a.Component {
				constructor() {
					super(...arguments), this.unblockNavigation = null, this.ensureBlocked = e => {
						e.isChanged && (e.havePostContent || e.destSubreddit.name) ? this.block(e) : this.unblock()
					}, this.block = e => {
						this.unblockNavigation || (window.addEventListener("beforeunload", Y), this.unblockNavigation = e.history.block((e, t) => {
							if (!Object(V.a)(Object(U.e)(e), [Q.a])) return this.props.modalId !== z && this.props.onToggleDiscardModal(), "Are you sure you want to leave?"
						}))
					}, this.unblock = () => {
						this.unblockNavigation && (this.unblockNavigation(), this.unblockNavigation = null), window.removeEventListener("beforeunload", Y)
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
				se = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"),
				oe = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				re = n("./src/reddit/components/ScheduledPost/PostSchedulePickerModal/loader.tsx"),
				ae = n("./src/reddit/controls/ErrorText/index.tsx"),
				ie = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				ce = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				de = n("./src/reddit/icons/fonts/index.tsx"),
				le = n("./src/reddit/layout/row/Inline/index.tsx"),
				ue = n("./src/reddit/models/Media/index.ts"),
				me = n("./src/reddit/models/Poll/index.ts"),
				pe = n("./src/reddit/models/Upload/index.ts"),
				he = n("./src/reddit/selectors/moderatorPermissions.ts"),
				be = n("./src/reddit/models/Duplicates/index.ts"),
				fe = n("./src/reddit/selectors/posts.ts");
			var ge = n("./src/reddit/controls/Button/index.tsx"),
				xe = n("./src/reddit/components/PostCreationForm/Button/index.m.less"),
				Ce = n.n(xe);
			const ve = ne.a.wrapped(ge.k, "PrimaryButton", Ce.a),
				Ee = ne.a.wrapped(ge.n, "SecondaryButton", Ce.a);
			var _e = n("./src/lib/timezone/index.ts"),
				Oe = n("./src/reddit/icons/svgs/Replay/index.tsx"),
				ye = n("./src/reddit/components/PostCreationForm/PostCreationFooter/ScheduledTimeInfo/index.m.less"),
				ke = n.n(ye);
			const {
				fbt: we
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Se = ne.a.div("Container", ke.a), je = Object(a.c)({
				eventSchedule: j.p,
				postSchedule: j.bb
			});
			var Pe = Object(r.b)(je)(e => {
					const {
						eventSchedule: t,
						postSchedule: n
					} = e;
					let s;
					if (t && t.submitTime !== g.j.Now) s = (e => {
						const t = Object(_e.f)(e.startDate);
						let n = `${t.toLocaleDateString(void 0,{month:"numeric",day:"numeric",year:"2-digit"})} ${t.toLocaleTimeString([],{hour:"numeric",minute:"numeric"}).replace(" ","")}`;
						const s = Object(_e.d)(e.timezoneName, +t);
						return s && (n += ` ${s.abbreviation}`), o.a.createElement("span", null, we._("Will automatically post at", null, {
							hk: "1ixr16"
						}), " ", o.a.createElement("time", {
							dateTime: e.startDate
						}, n))
					})(t);
					else {
						if (!n) return null;
						s = (e => {
							const t = Object(_e.f)(e.submitDate);
							let n = `${t.toLocaleDateString(void 0,{month:"numeric",day:"numeric"})} ${t.toLocaleTimeString([],{hour:"numeric",minute:"numeric"}).replace(" ","")}`;
							const s = Object(_e.d)(e.timezoneName, +t);
							s && (n += ` ${s.abbreviation}`);
							const r = e.recurrenceInfo ? o.a.createElement("span", null, o.a.createElement(Oe.a, {
								className: ke.a.replayIcon
							}), we._("Recurring post template scheduled for", null, {
								hk: "2tTwIB"
							})) : we._("Post scheduled for", null, {
								hk: "47yVoo"
							});
							return o.a.createElement("span", null, r, " ", o.a.createElement("time", {
								dateTime: e.submitDate
							}, n))
						})(n)
					}
					return o.a.createElement(Se, null, s)
				}),
				Te = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Ie = n("./src/lib/linkMatchers/index.ts"),
				Ne = n("./src/lib/makeActionCreator/index.ts"),
				De = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				Me = n("./src/lib/makeApiRequest/index.ts"),
				Re = n("./src/lib/omitHeaders/index.ts"),
				Le = n("./src/reddit/constants/headers.ts"),
				Ae = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			var Fe = n("./src/reddit/actions/postCreation/constants.ts");
			const Be = Object(Ne.a)(Fe.K),
				Ue = Object(Ne.a)(Fe.L),
				We = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const r = s(),
						a = Object(De.s)(r, {
							pageLayer: t
						});
					if (!a) return;
					const i = Object(j.q)(r, {
						field: e
					});
					if (!i) return;
					const c = Object(j.f)(r),
						l = await ((e, t, n, s, o) => Object(Me.a)(Object(Re.a)(e, [Le.a]), {
							endpoint: `${e.apiUrl}/api/validate_submission_field`,
							method: h.ib.POST,
							data: {
								sr: t,
								field: n,
								kind: s,
								title: o.title || "",
								url: o.url || null,
								text: o.selftext,
								richtext_json: o.rtjson && JSON.stringify({
									document: o.rtjson
								}),
								flair_id: o.flairId || null,
								show_error_list: !0
							}
						}).then(Ae.b))(o(), a.name, e, c, i),
						u = l.error || function(e, t) {
							if (e === h.vb.LINK && !Object(Ie.h)(Ie.f, t.url || "")) return {
								fields: [{
									field: h.vb.LINK,
									msg: d.fbt._("Link doesn't look right", null, {
										hk: "11qrsa"
									})
								}],
								type: h.H.SUBMIT_VALIDATION_ERROR
							}
						}(e, i);
					u && u.fields && u.fields.length ? n(Be(u)) : n(Ue(e)), l.error && n(Object(R.c)(l.error))
				};
			var Ve = n("./src/reddit/components/Flair/index.tsx"),
				Ge = n("./src/reddit/controls/TextButton/index.tsx"),
				He = n("./src/reddit/controls/Typography/index.tsx"),
				ze = n("./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/OCDisclaimer/index.m.less"),
				Ke = n.n(ze);
			const {
				fbt: qe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Qe = ne.a.wrapped(Ge.a, "DontShowButton", Ke.a);
			var Ye, Je = ne.a.wrapped(e => {
					const {
						className: t,
						onDoNotShowClick: n
					} = e;
					return o.a.createElement("div", {
						className: t
					}, o.a.createElement(He.a, null, qe._("Use the OC tag if you want to take credit for your post as Original Content.", null, {
						hk: "2D3GYX"
					})), o.a.createElement(He.a, null, o.a.createElement(Qe, {
						onClick: n
					}, qe._("Cool, whatever, don't show me this again.", null, {
						hk: "4nvsEF"
					}))))
				}, "Component", Ke.a),
				Ze = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				Xe = n("./src/reddit/constants/colors.ts");
			! function(e) {
				e.CHAT = "chat", e.FLAIR = "flair", e.GOVERNANCE = "gov", e.SPOILER = "spoiler", e.NSFW = "nsfw", e.ORIGINAL_CONTENT = "originalContent", e.SCHEDULE = "schedule"
			}(Ye || (Ye = {}));
			var $e = n("./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/PostModifierButton/index.m.less"),
				et = n.n($e);
			ne.a.div("TintOverlay", et.a);
			const tt = (e, t) => {
					switch (t) {
						case Ye.ORIGINAL_CONTENT:
							return {
								backgroundColor: Xe.b.orangered, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Ye.CHAT:
							return {
								backgroundColor: Xe.b.chat, textColor: e.newCommunityTheme.lightText, iconColor: e.newCommunityTheme.lightText
							};
						case Ye.SPOILER:
							return {
								backgroundColor: Xe.b.spoiler, textColor: e.newCommunityTheme.lightText, iconColor: e.newCommunityTheme.lightText
							};
						case Ye.NSFW:
							return {
								backgroundColor: Xe.b.nsfw, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Ye.FLAIR:
							return {
								backgroundColor: e.newCommunityTheme.flair, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Ye.SCHEDULE:
							return {
								backgroundColor: e.newCommunityTheme.active, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Ye.GOVERNANCE:
							return {
								backgroundColor: e.newCommunityTheme.line, textColor: e.newCommunityTheme.bodyText, iconColor: e.newCommunityTheme.bodyText
							};
						default:
							return {
								backgroundColor: "none", textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							}
					}
				},
				nt = e => Object(Te.a)(t => {
					const {
						addModifierTooltip: n,
						children: s,
						className: r,
						disabled: a,
						disabledTooltip: i,
						Icon: c,
						id: d,
						onClick: l,
						removeModifierTooltip: u,
						style: m,
						text: h,
						theme: b,
						toggled: f
					} = t, g = a && i ? i : f ? u : n, x = {
						color: t.textColor || b && tt(b, e).textColor,
						fill: t.textColor || b && tt(b, e).iconColor,
						backgroundColor: t.backgroundColor || b && tt(b, e).backgroundColor,
						borderColor: "transparent"
					};
					return o.a.createElement(ge.s, {
						"aria-label": g,
						className: Object(p.a)(r, et.a.PostModifierButton),
						disabled: a,
						Icon: c,
						id: d,
						onClick: l,
						priority: ge.b.Secondary,
						style: {
							...m,
							...f ? x : {}
						},
						text: h
					}, o.a.createElement(Ze.a, {
						text: g,
						className: et.a.HoverTooltip,
						tooltipContentClass: t.shiftTooltipToRight ? et.a.mShiftTooltipToTheRight : void 0
					}), s)
				});
			var st, ot = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx"),
				rt = n("./src/reddit/components/PostFlairPicker/index.tsx");
			! function(e) {
				e.ORIGINAL_CONTENT_DISCLAIMER = "original_content_disclaimer"
			}(st || (st = {}));
			var at = n("./src/reddit/constants/postCreation.ts"),
				it = n("./src/reddit/helpers/localStorage/index.ts"),
				ct = n("./src/reddit/helpers/trackers/postEvent.ts"),
				dt = n("./src/reddit/models/Subreddit/index.ts"),
				lt = n("./src/reddit/selectors/chatPost.ts");
			const ut = e => e.creations.formState.fieldValidation;
			var mt = n("./src/telemetry/models/PostComposer.ts"),
				pt = n("./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/index.m.less"),
				ht = n.n(pt);
			const bt = "PostFlair--Modal--CreationForm",
				ft = e => {
					let t = Object(_e.f)(e.startDate).toLocaleDateString(void 0, {
						month: "numeric",
						day: "numeric",
						hour: "numeric",
						minute: "numeric"
					});
					return t = t.replace(" ", "").replace(",", " ")
				},
				gt = ne.a.wrapped(Ve.b, "FlairComponent", ht.a),
				xt = ne.a.div("FlairTextWrapper", ht.a),
				Ct = ne.a.wrapped(le.a, "ModifierRow", ht.a),
				vt = nt(Ye.ORIGINAL_CONTENT),
				Et = nt(Ye.CHAT),
				_t = nt(Ye.SPOILER),
				Ot = nt(Ye.NSFW),
				yt = nt(Ye.FLAIR),
				kt = nt(Ye.SCHEDULE),
				wt = Object(y.u)({
					draftId: y.v,
					pageLayer: e => e
				}),
				St = Object(a.c)({
					activeModalId: w.a,
					canAddPostFlair: j.c,
					canPostAsModerator: j.e,
					currentSubredditId: y.n,
					destSubreddit: j.h,
					destSubredditAboutInfo: j.g,
					eventSchedule: j.p,
					isChatPostAvailable: lt.a,
					isChatPostSelected: j.G,
					isNsfw: j.M,
					isSpoiler: j.R,
					isOriginalContent: j.N,
					flair: j.r,
					postCreationFieldErrors: ut,
					postSchedule: j.bb,
					submissionType: j.a
				}),
				jt = Object(r.b)(St, (e, {
					onPostFieldValidation: t,
					pageLayer: n
				}) => ({
					doNotShowOriginalContentDisclaimerClicked: () => e((e, t) => k.e(t())),
					onEventScheduleChange: t => {
						e(i.a(t))
					},
					postFlairAdded: s => {
						e(i.b(s)), t(e(We(h.vb.FLAIR, n)))
					},
					toggleSchedulePicker: (t, n) => {
						e(i.y(g.g)), t && e((e, t) => {
							(n ? ct.g : ct.f)(t())
						})
					},
					toggleChatPostTag: t => {
						e(i.t(!t)), e((e, n) => k.D(n(), !t, mt.ToggleNoun.CHAT))
					},
					toggleFlairPicker: () => e(i.y(bt)),
					toggleNsfwTag: t => {
						e(i.u(!t)), e((e, n) => k.D(n(), !t, mt.ToggleNoun.NSFW))
					},
					toggleOriginalContentTag: t => {
						e(i.v(!t)), e((e, n) => k.D(n(), !t, mt.ToggleNoun.ORIGINAL_CONTENT))
					},
					toggleSpoilerTag: t => {
						e(i.x(!t)), e((e, n) => k.D(n(), !t, mt.ToggleNoun.SPOILER))
					}
				}));
			class Pt extends o.a.Component {
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
						e(), Object(it.mb)(st.ORIGINAL_CONTENT_DISCLAIMER, !0), this.setState({
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
						showOCDisclaimer: !Object(it.h)(st.ORIGINAL_CONTENT_DISCLAIMER)
					})
				}
				render() {
					const {
						activeModalId: e,
						canAddPostFlair: t,
						canPostAsModerator: n,
						className: s,
						currentSubredditId: r,
						destSubreddit: a,
						destSubredditAboutInfo: i,
						eventSchedule: c,
						disabled: l,
						flair: u,
						isChatPostAvailable: m,
						isChatPostSelected: b,
						isNsfw: f,
						isSpoiler: x,
						isOriginalContent: C,
						postCreationFieldErrors: v,
						postSchedule: E,
						submissionType: _,
						theme: O,
						toggleFlairPicker: y
					} = this.props, {
						showOCDisclaimer: k
					} = this.state, w = !!u, {
						backgroundColor: S = null,
						textColor: j = null
					} = u || {}, {
						allOriginalContent: P = !1,
						eventPostsEnabled: T = !1
					} = i || {}, I = a.isProfile || Object(dt.g)(i), N = l || !I || P || _ === h.Ub.CROSSPOST, D = l || !(a.isProfile || Object(dt.i)(i)), M = l, R = l || !!E;
					return o.a.createElement("div", {
						className: s
					}, o.a.createElement(Ct, null, m && o.a.createElement(Et, {
						disabled: M,
						onClick: this.handleChatPostClick,
						toggled: b,
						addModifierTooltip: d.fbt._("Use live chat instead of comments", null, {
							hk: "27t9lW"
						}),
						removeModifierTooltip: d.fbt._("Use comments instead of live chat", null, {
							hk: "3seokS"
						}),
						Icon: Object(de.b)(b ? "checkmark" : "chat"),
						text: d.fbt._("Live Chat", null, {
							hk: "cZlvm"
						})
					}), n && T && o.a.createElement(kt, {
						disabled: R,
						id: at.a,
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
					}, c && o.a.createElement(de.a, {
						name: "edit",
						className: ht.a.editScheduledIcon
					})), e === g.g && o.a.createElement(ot.default, {
						schedule: this.props.eventSchedule,
						onClose: this.handleToggleSchedulePicker,
						onChange: this.props.onEventScheduleChange,
						shouldShowSubmitTime: !0,
						shouldShowDeleteButton: !0
					}), o.a.createElement(vt, {
						disabled: N,
						onClick: this.handleOriginalContentClick,
						shiftTooltipToRight: !0,
						toggled: I && (C || P),
						addModifierTooltip: d.fbt._("Mark this post as Original Content [OC]", null, {
							hk: "3V5aHC"
						}),
						removeModifierTooltip: d.fbt._("Unmark this post as Original Content [OC]", null, {
							hk: "2oj9GI"
						}),
						disabledTooltip: I ? "" : d.fbt._("This community does not allow original content tag", null, {
							hk: "2ydrVm"
						}),
						Icon: Object(de.b)(C ? "checkmark" : "add"),
						text: d.fbt._("OC", null, {
							hk: "2GRpRs"
						})
					}), o.a.createElement(_t, {
						disabled: D,
						onClick: this.handleSpoilerClick,
						toggled: x,
						addModifierTooltip: d.fbt._("Mark as a spoiler", null, {
							hk: "3ICynB"
						}),
						removeModifierTooltip: d.fbt._("Unmark as a spoiler", null, {
							hk: "34pmqg"
						}),
						disabledTooltip: D ? d.fbt._("This community does not allow spoiler tag", null, {
							hk: "H75tq"
						}) : "",
						Icon: Object(de.b)(x ? "checkmark" : "add"),
						text: d.fbt._("Spoiler", null, {
							hk: "4CA9TG"
						})
					}), o.a.createElement(Ot, {
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
					}), o.a.createElement(yt, {
						className: Object(p.a)(ht.a.AddFlair, {
							[ht.a.isToggled]: w,
							[ht.a.mHasError]: v[h.vb.FLAIR].length > 0
						}),
						disabled: !t || l,
						disabledTooltip: a.id ? d.fbt._("Not available for this community", null, {
							hk: "2gkbLI"
						}) : d.fbt._("Select a subreddit to enable flair", null, {
							hk: "1LNvTq"
						}),
						onClick: y,
						toggled: w,
						addModifierTooltip: d.fbt._("Add flair", null, {
							hk: "1RHLMM"
						}),
						removeModifierTooltip: d.fbt._("Change or remove flair", null, {
							hk: "34t9cQ"
						}),
						backgroundColor: S,
						textColor: j,
						Icon: e => o.a.createElement(de.a, {
							name: "tag",
							className: Object(p.a)(e.className, ht.a.FlairIcon)
						}),
						style: {
							"--flairColor": w ? Object(Ve.c)({
								...this.props,
								backgroundColor: S,
								textColor: j
							}) : !t || l ? O.newCommunityTheme.actionIconTinted80 : O.newCommunityTheme.actionIcon
						},
						text: o.a.createElement(o.a.Fragment, null, u ? o.a.createElement(gt, {
							flair: u,
							forceSmallEmojis: !0
						}) : o.a.createElement(xt, null, d.fbt._("Flair", null, {
							hk: "4Dtvp0"
						})), o.a.createElement(de.a, {
							name: "caret_down",
							className: ht.a.StyledCaretIcon
						}))
					}), e === bt && o.a.createElement(rt.a, {
						flairs: u ? [u] : [],
						modalId: bt,
						onFlairChanged: this.handlePostFlairSelected,
						subredditId: r || ""
					})), o.a.createElement(ae.a, {
						className: ht.a.errorMessages,
						messages: v[h.vb.FLAIR]
					}), I && C && k && o.a.createElement(Je, {
						onDoNotShowClick: this.handleOCDisclaimerDoNotShowClick
					}))
				}
			}
			var Tt = wt(Object(Te.a)(jt(Pt))),
				It = n("./src/config.ts"),
				Nt = n("./src/higherOrderComponents/asTooltip.tsx"),
				Dt = n("./src/reddit/components/PostCreationForm/EduTooltips/BaseEduTooltip/index.m.less"),
				Mt = n.n(Dt);
			const {
				fbt: Rt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Lt = ne.a.div("Container", Mt.a), At = ne.a.div("OuterContainer", Mt.a);
			class Ft extends o.a.Component {
				constructor() {
					super(...arguments), this.tooltipRef = null, this.onGotItClick = e => {
						this.close(!0), e.stopPropagation()
					}, this.onKeyDown = e => {
						e.keyCode === b.a.Escape && this.close(!1)
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
					return o.a.createElement(At, {
						className: e.className,
						innerRef: this.setTooltipRef,
						style: e.style
					}, o.a.createElement(Lt, {
						className: Mt.a.container
					}, o.a.createElement("img", {
						src: e.heroImagePath,
						className: Mt.a.hero
					}), o.a.createElement("div", {
						className: Mt.a.contentContainer
					}, o.a.createElement("div", {
						className: Mt.a.title
					}, e.title), o.a.createElement("div", {
						className: Mt.a.description
					}, e.description), o.a.createElement("div", {
						className: Mt.a.iconsExplanations
					}, e.iconsExplanations.map((e, t) => {
						const n = e.iconComponent;
						return o.a.createElement("div", {
							className: Mt.a.iconExplanation,
							key: t
						}, o.a.createElement(n, {
							className: Mt.a.icon
						}), e.text)
					})), o.a.createElement(ge.k, {
						className: Mt.a.gotIt,
						onClick: this.onGotItClick
					}, Rt._("Got it", null, {
						hk: "2RPumB"
					})))))
				}
			}
			var Bt = Object(Nt.a)(Ft),
				Ut = n("./node_modules/lodash/debounce.js"),
				Wt = n.n(Ut),
				Vt = n("./src/reddit/actions/modal.ts"),
				Gt = n("./src/reddit/helpers/trackers/postCollection.ts");
			const Ht = [{
					id: at.d,
					getShowTimesLeft: it.I,
					setShowTimesLeft: it.Jb,
					tooltipShown: Gt.n,
					tooltipDismissed: Gt.m
				}, {
					id: at.c,
					getShowTimesLeft: it.H,
					setShowTimesLeft: it.Ib,
					tooltipShown: Gt.f,
					tooltipDismissed: Gt.e
				}],
				zt = {};
			let Kt;
			const qt = () => (void 0 === Kt && (Kt = Ht.filter(e => e.getShowTimesLeft() > 0).map(e => e.id)), Kt),
				Qt = e => {
					const t = qt().indexOf(e);
					t > -1 && qt().splice(t, 1)
				},
				Yt = e => async (t, n) => {
					const s = Ht.find(t => t.id === e);
					s && (Jt(s, !0), Object(te.a)(s.tooltipDismissed(n())))
				}, Jt = (e, t) => {
					e.setShowTimesLeft(t ? 0 : e.getShowTimesLeft() - 1)
				}, Zt = () => async (e, t) => {
					const n = Object(w.a)(t()),
						s = qt().find(e => !!zt[e]);
					if (!s || s === n) return;
					const o = Ht.find(e => e.id === s);
					o && (Object(te.a)(o.tooltipShown(t())), Jt(o)), e(Vt.i(s))
				}, Xt = Wt()(e => e(), 100);
			var $t = n("./src/reddit/components/PostCreationForm/EduTooltips/CollectionButtonTooltip/index.m.less"),
				en = n.n($t);
			var tn = function(e, t) {
					const n = Object(a.c)({
						isOpen: e => Object(w.a)(e) === t
					});
					class s extends o.a.Component {
						componentDidMount() {
							zt[t] = !0, Xt(this.props.onShowNextTooltip)
						}
						componentWillUnmount() {
							zt[t] = !1, Xt(this.props.onShowNextTooltip)
						}
						render() {
							const {
								isOpen: t,
								...n
							} = this.props;
							return t ? o.a.createElement(e, n) : null
						}
					}
					return Object(r.b)(n, e => ({
						onCloseTooltip: n => {
							Qt(t), n && e(Yt(t)), e(Vt.i(t)), e(Zt())
						},
						onShowNextTooltip: () => e(Zt())
					}))(s)
				}(e => o.a.createElement(Bt, {
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
					tooltipId: at.g
				}), at.c),
				nn = n("./src/reddit/components/PostCreationForm/ControlRow/ToggleDestCollectionButton/index.m.less"),
				sn = n.n(nn);
			var on = o.a.memo(e => {
					const {
						disabled: t,
						isToggled: n
					} = e, s = n ? "delete" : "collection";
					return o.a.createElement(ge.s, {
						className: sn.a.button,
						priority: ge.b.Plain,
						disabled: t,
						id: at.g,
						onClick: e.onClick,
						Icon: Object(de.b)(s)
					}, o.a.createElement(Ze.a, {
						text: n ? d.fbt._("Cancel adding to collection", null, {
							hk: "359w09"
						}) : d.fbt._("Add to collection", null, {
							hk: "48nVCZ"
						})
					}), !n && o.a.createElement(tn, null))
				}),
				rn = n("./src/reddit/components/TrackingHelper/index.tsx"),
				an = n("./src/reddit/actions/economics/predictions/index.ts"),
				cn = n("./src/reddit/actions/toaster.ts"),
				dn = n("./src/reddit/helpers/trackers/predictions.ts"),
				ln = n("./src/reddit/hooks/usePageLayer.ts"),
				un = n("./src/reddit/hooks/useTracking.ts"),
				mn = n("./src/reddit/models/Toast/index.ts"),
				pn = n("./src/reddit/selectors/experiments/econ/index.ts"),
				hn = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				bn = n("./src/higherOrderComponents/asModal/index.tsx");
			const {
				fbt: fn
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var gn = Object(bn.a)((function({
					onClose: e
				}) {
					const t = Object(r.d)(),
						n = Object(un.a)(),
						[a, c] = Object(s.useState)(!1),
						d = Object(r.e)(j.s),
						l = Object(r.e)(j.t),
						u = Object(ln.a)(),
						{
							subredditName: p
						} = (null == u ? void 0 : u.urlParams) || {},
						h = Object(r.e)(e => Object(T.B)(e, p));
					return o.a.createElement(G.a, {
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
						primaryButtonLoading: a,
						onPrimaryAction: async () => {
							n(Object(dn.k)()), c(!0), t(Object(an.b)({
								prediction: {
									formData: d,
									formState: l
								}
							}));
							try {
								await t(Object(an.g)({
									subredditId: h
								})), t(Object(i.r)()), t(Object(an.u)()), t(Object(m.b)(`/r/${p}/predictions/`))
							} catch (e) {
								t(Object(an.t)()), t(Object(cn.f)({
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
							})), t(Object(i.r)()), t(Object(i.g)({
								submissionType: "poll"
							})), t(Object(i.w)(!0)), t(Object(i.k)({
								oldType: me.a.GA,
								type: me.a.Prediction
							})), e()
						},
						secondaryButtonText: fn._("Create Another", null, {
							hk: "pQB1L"
						})
					})
				})),
				xn = n("./src/reddit/components/PostCreationForm/ControlRow/AddTournamentPredictionButton/index.m.less"),
				Cn = n.n(xn);
			const {
				fbt: vn
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function En({
				className: e,
				disabled: t
			}) {
				const n = Object(r.d)(),
					a = Object(un.a)(),
					c = Object(r.e)(j.s),
					d = Object(r.e)(j.t),
					[l, u] = Object(s.useState)(!1),
					[h, b] = Object(s.useState)(!1),
					f = Object(r.e)(j.D),
					g = Object(r.e)(j.x),
					x = Object(r.e)(j.w),
					C = Object(ln.a)(),
					v = Object(r.e)(e => Object(De.o)(e, {
						pageLayer: C
					})),
					E = Object(r.e)(e => Object(T.Q)(e, {
						subredditId: v
					})),
					_ = Object(r.e)(e => Object(hn.b)(e, {
						subredditId: v
					})),
					O = Object(r.e)(pn.b);
				return o.a.createElement("div", {
					className: Object(p.a)(Cn.a.addTournamentPredictionButton, e)
				}, o.a.createElement(ge.k, {
					disabled: h || t || !g || !x,
					onClick: () => {
						_ && !O ? (async () => {
							b(!0), n(Object(an.b)({
								prediction: {
									formData: c,
									formState: d
								}
							}));
							try {
								await n(Object(an.a)(_.tournamentId, v)), n(Object(i.r)()), n(Object(an.u)()), n(Object(m.b)(`/r/${E.name}/predictions/`))
							} catch (e) {
								n(Object(an.t)()), e.message.match(/max limit/) ? n(Object(cn.f)({
									duration: 1e4,
									kind: mn.b.Error,
									text: vn._("Error: Failed to add prediction to tournament, there can only be 100 predictions created for a tournament", null, {
										hk: "UqJLw"
									})
								})) : n(Object(cn.f)({
									duration: 5e3,
									kind: mn.b.Error,
									text: vn._("Error: Failed to add prediction to tournament", null, {
										hk: "3YK8YR"
									})
								}))
							}
							b(!1)
						})() : (a(Object(dn.g)()), u(!0))
					}
				}, h ? o.a.createElement(ie.a, {
					sizePx: 16
				}) : _ ? vn._("Post", null, {
					hk: "12GkA5"
				}) : vn._("Next", null, {
					hk: "2m41ub"
				})), o.a.createElement("div", {
					className: Cn.a.tooltip
				}, f ? g ? x ? null : vn._("End must be at least one hour from now", null, {
					hk: "lWM41"
				}) : vn._("Options cannot be empty", null, {
					hk: "2BR1pQ"
				}) : vn._("A title is required", null, {
					hk: "2hoEW2"
				})), l && o.a.createElement(gn, {
					onClose: () => u(!1)
				}))
			}
			var _n = n("./src/reddit/components/PostCreationForm/ControlRow/index.m.less"),
				On = n.n(_n);
			const yn = () => d.fbt._("Post", null, {
					hk: "47QFCY"
				}),
				kn = () => d.fbt._("Cancel", null, {
					hk: "2TSLl5"
				}),
				wn = () => d.fbt._("Saved!", null, {
					hk: "34qXtS"
				}),
				Sn = () => d.fbt._("Save Draft", null, {
					hk: "3wckxd"
				}),
				jn = () => d.fbt._("Updated!", null, {
					hk: "45fGGU"
				}),
				Pn = () => d.fbt._("Update draft", null, {
					hk: "1c8tCb"
				}),
				Tn = () => d.fbt._("Please fix the above requirements", null, {
					hk: "17Yk98"
				}),
				In = () => d.fbt._("Something went wrong. Just don't panic.", null, {
					hk: "4x2ypi"
				}),
				Nn = 10,
				Dn = e => {
					return [h.Ub.LINK_ONLY, h.Ub.POLL, h.Ub.POST].includes(e)
				},
				Mn = ne.a.div("ButtonsAndErrors", On.a),
				Rn = ne.a.wrapped(le.a, "ButtonRow", On.a),
				Ln = ne.a.div("ButtonLayout", On.a),
				An = ne.a.div("SaveDraftButtonLayout", On.a),
				Fn = ne.a.wrapped(ie.a, "PostLoadingIcon", On.a),
				Bn = ne.a.wrapped(Fn, "DraftLoadingIcon", On.a),
				Un = Object(a.a)(j.eb, oe.a.getMediaCount),
				Wn = (e, t) => {
					return !!!Object(y.k)(e, t) && e.creations.formData.isPoll
				},
				Vn = [],
				Gn = e => {
					const t = Object(j.eb)(e),
						n = Object(j.kb)(e);
					if (!t.isBound || n !== h.Ub.POST || !Object(j.gb)(e)) return Vn;
					const s = (e => {
						const {
							allowedPostTypes: t,
							name: n
						} = Object(j.h)(e), s = Un(e);
						if (!s || !t) return null;
						let o = "";
						return !s.total || t.images || t.videos ? s.video && !t.videos ? o = d.fbt._("Videos are not allowed in r/{subreddit name}", [d.fbt._param("subreddit name", n)], {
							hk: "1EUr31"
						}) : !s.image && !s.gifvideo || t.images || (o = d.fbt._("Images are not allowed in r/{subreddit name}", [d.fbt._param("subreddit name", n)], {
							hk: "2pxaRa"
						})) : o = d.fbt._("Videos and images are not allowed in r/{subreddit name}", [d.fbt._param("subreddit name", n)], {
							hk: "3AMcQ8"
						}), o || null
					})(e);
					return s ? [s] : (e => {
						const t = Un(e);
						if (!t) return Vn;
						const n = [];
						return t.image > h.Z && n.push(d.fbt._("Post may not contain more that 20 images", null, {
							hk: "1Szc36"
						})), t.video + t.gifvideo > h.cb && n.push(d.fbt._("Post may not contain more that 5 videos", null, {
							hk: "2WhZ8k"
						})), n
					})(e)
				},
				Hn = (e, {
					sourcePostId: t
				}) => {
					const n = Object(j.ib)(e, {
							sourcePostId: t
						}),
						{
							allowedPostTypes: s,
							id: o,
							isProfile: r,
							name: a
						} = Object(j.h)(e);
					if (!t) return d.fbt._("A source post is required to crosspost", null, {
						hk: "2TeLDw"
					});
					if (!o) return d.fbt._("A destination community is required to crosspost", null, {
						hk: "3haidF"
					});
					const i = r ? Object(I.fb)(e, {
						userId: o
					}) : o;
					if (i) {
						if (((e, t, n) => {
								const s = Object(be.a)(n, {
										sort: "new",
										crossposts_only: !0
									}),
									o = e.subreddits.duplicates.models[t];
								return !(o && o[s])
							})(e, i, t)) return d.fbt._("Checking community...", null, {
							hk: "1ycXCe"
						});
						if (((e, t, n) => {
								const s = ((e, t, n) => {
									const s = e.subreddits.duplicates.models[t];
									return s ? s[n] : []
								})(e, t, Object(be.a)(n, {
									sort: "new",
									crossposts_only: !0
								}));
								return 0 !== s.length && Object(fe.y)(e, s[0])
							})(e, i, t)) return d.fbt._("This community has the same crosspost within last 24 hours", null, {
							hk: "177pgf"
						})
					}
					if (!s || !n) return null;
					if (n.source) return !s.links && d.fbt._("This community does not allow for crossposting of link posts", null, {
						hk: "2cZPxJ"
					});
					const {
						isCrosspostableSubreddit: c
					} = Object(T.t)(e, {
						subredditName: a
					});
					if (!c) return d.fbt._("This community does not allow for crossposting of any posts", null, {
						hk: "2KrrAO"
					});
					switch (n.media && n.media.type) {
						case ue.o.TEXT:
						case ue.o.RTJSON:
							return !s.text && d.fbt._("This community does not allow for crossposting of text posts", null, {
								hk: "1a4voI"
							});
						case ue.o.IMAGE:
							return !s.images && d.fbt._("This community does not allow for crossposting of image posts", null, {
								hk: "tGzk7"
							});
						case ue.o.VIDEO:
						case ue.o.GIFVIDEO:
						case ue.o.EMBED:
							return !s.videos && d.fbt._("This community does not allow for crossposting of video posts", null, {
								hk: "w6HED"
							})
					}
					return null
				},
				zn = (e, {
					sourcePostId: t
				}) => {
					const n = Object(j.U)(e),
						s = Object(j.eb)(e),
						o = Object(j.kb)(e);
					if (o === h.Ub.IMAGE_ONLY) return !1;
					if (!Object(j.h)(e).name || !Object(j.D)(e)) return !1;
					if (o === h.Ub.POST || o === h.Ub.POLL) {
						const t = Gn(e),
							n = !oe.a.isAllMediaUploaded(s, e.uploads);
						return !t.length && !n
					}
					if (o === h.Ub.MEDIA) {
						const {
							items: t
						} = n, s = t.every(t => {
							const n = e.uploads[t.uploadKey];
							return !(!n || !n.url || n.status !== pe.a.SUCCESS)
						});
						return t.length > 0 && s
					}
					return o === h.Ub.LINK_ONLY ? Object(j.y)(e) : o === h.Ub.CROSSPOST && !Hn(e, {
						sourcePostId: t
					})
				},
				Kn = Object(a.c)({
					isPoll: Wn,
					activeModalId: w.a,
					currentSubredditOrProfile: y.p,
					canPostAsModerator: j.e,
					currentCollection: y.g,
					errorMsgs: (e, {
						sourcePostId: t
					}) => {
						if (Object(j.u)(e)) return Object(j.o)(e);
						if (t) {
							const n = Hn(e, {
								sourcePostId: t
							});
							if (n) return [n]
						}
						return Gn(e)
					},
					eventSchedule: j.p,
					hasDraftError: P.f,
					hasError: j.u,
					hasSubmitValidationError: j.v,
					destSubredditAboutInfo: j.g,
					govType: e => e.creations.formData.govType,
					isAddingToTournament: (e, {
						subredditId: t
					}) => !!t && Object(j.E)(e, {
						subredditId: t
					}),
					isChatPostSelected: j.G,
					isContestMode: j.H,
					isCreatingTournamentPrediction: (e, {
						subredditId: t
					}) => !!t && Object(j.I)(e, {
						subredditId: t
					}),
					isDraftsFeatureEnabled: (e, t) => !Wn(e, t),
					isDraftPending: P.g,
					isMediaUploadPending: j.V,
					isModeratorSomewhere: he.j,
					isPostAsMetaMod: j.O,
					isPostPending: j.mb,
					isPostSubmitEnabled: zn,
					isSaveDraftEnabled: e => {
						const t = Object(j.kb)(e);
						if (!h.G.has(t) || !Object(j.F)(e)) return !1;
						const n = Object(j.h)(e),
							s = Object(j.n)(e),
							o = t === h.Ub.LINK_ONLY && Object(j.y)(e),
							r = t === h.Ub.POST && s === g.i.RICH_TEXT && Object(j.C)(e),
							a = t === h.Ub.POST && s === g.i.MARKDOWN && Object(j.z)(e),
							i = o || r || a;
						return !!n.name || Object(j.D)(e) || i
					},
					isScheduledPost: j.Q,
					postSchedule: j.bb,
					postToTwitter: j.db,
					isEditingScheduledPost: e => !!Object(H.r)(e),
					showContributorRequestFlow: e => Object(T.q)(e, x.e.Post),
					showScheduledPosts: j.hb,
					stickyPosition: j.jb,
					submissionType: j.a,
					submitMode: j.lb,
					suggestedSort: j.ob
				}),
				qn = Object(y.u)(),
				Qn = Object(r.b)(Kn, e => ({
					onResetDestCollection: () => e(L.c()),
					onScheduledPostSettingsChange: t => e(i.B(t)),
					onTrackCancelButtonClick: () => {
						e((e, t) => k.a(t()))
					},
					openCollectionsListOrCreationModal: t => e(i.m(t)),
					togglePostSchedulePicker: () => e(i.y(g.o)),
					clickPostSchedule: () => {
						e((e, t) => Object(te.a)(Object(ce.i)()(t())))
					}
				})),
				Yn = 2e3,
				Jn = e => e ? d.fbt._("Update", null, {
					hk: "3MoYFL"
				}) : d.fbt._("Schedule", null, {
					hk: "4bXWUG"
				});
			class Zn extends o.a.Component {
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
							openCollectionsListOrCreationModal: s,
							sendEvent: o
						} = this.props;
						if (e) return t();
						n && (s(n.id), o(Object(Gt.b)(void 0, Gt.a.collectionComposer)))
					}, this.shouldDisablePostButton = () => {
						const {
							contributorRequestPending: e,
							hasSubmitValidationError: t,
							isDraftPending: n,
							isMediaUploadPending: s,
							isPostPending: o,
							isPostSubmitEnabled: r
						} = this.props;
						return !r || n || o || s || this.state.isSaved || t || e
					}, this.shouldDisablePostScheduleButton = () => {
						const {
							eventSchedule: e,
							postToTwitter: t,
							submissionType: n
						} = this.props;
						return !!e || t || !Dn(n)
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
						}, Yn)
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
					return t ? n ? jn() : wn() : e ? Pn() : Sn()
				}
				render() {
					const {
						activeModalId: e,
						canPostAsModerator: t,
						currentCollection: n,
						destSubredditAboutInfo: r,
						govType: a,
						hasError: i,
						hasSubmitValidationError: c,
						isEditingScheduledPost: l,
						errorMsgs: u,
						isAddingToTournament: m,
						isContestMode: b,
						isCreatingTournamentPrediction: f,
						isDraftsFeatureEnabled: C,
						isDraftPending: v,
						isPoll: E,
						isMediaUploadPending: _,
						isOpenAISubRec: O,
						isPostAsMetaMod: y,
						isPostPending: k,
						isSaveDraftEnabled: w,
						isScheduledPost: S,
						onPostFieldValidation: j,
						onSaveDraft: P,
						onScheduledPostSettingsChange: T,
						onSubmit: I,
						postSchedule: N,
						sendEvent: D,
						shouldRenderDivider: M = !0,
						showContributorRequestFlow: R,
						showScheduledPosts: L,
						stickyPosition: A,
						submissionType: F,
						submitMode: B,
						suggestedSort: U,
						togglePostSchedulePicker: W
					} = this.props, {
						isSaved: V
					} = this.state, G = v || k || _, H = B === g.r.Post && _, z = B === g.r.Draft && _, {
						collectionsEnabled: K = !1
					} = r || {}, q = G, Q = Object(p.a)(On.a.ButtonLayout, {
						[On.a.autoWidth]: E || R || L
					}), Y = a === me.a.Prediction && (f || m);
					return o.a.createElement("div", {
						className: Object(p.a)(On.a.Container, {
							[On.a.isSubRec]: O
						})
					}, o.a.createElement(Tt, {
						className: On.a.postModifiers,
						disabled: G,
						onPostFieldValidation: j
					}), M && o.a.createElement("hr", {
						className: On.a.Divider
					}), o.a.createElement(Mn, null, o.a.createElement(Rn, null, o.a.createElement("div", {
						className: Q
					}, R ? o.a.createElement(se.default, {
						eventSource: x.b.PostSubmission,
						smallButton: !0
					}) : Y ? o.a.createElement(En, {
						disabled: this.shouldDisablePostButton()
					}) : o.a.createElement(ve, {
						disabled: this.shouldDisablePostButton(),
						onClick: I,
						className: Object(p.a)(L && On.a.removeRightBorderRadius)
					}, k || H ? o.a.createElement(Fn, {
						sizePx: Nn
					}) : o.a.createElement(s.Fragment, null, S ? Jn(l) : yn())), L && !Y && o.a.createElement(ve, {
						title: d.fbt._("Make a scheduled post", null, {
							hk: "3TBSMs"
						}),
						disabled: this.shouldDisablePostScheduleButton(),
						onClick: this.openPostSchedulePickerModal,
						className: On.a.postScheduleButton,
						Icon: N ? Object(de.b)("edit", {
							className: On.a.postScheduleIcon
						}) : Object(de.b)("scheduled", {
							className: On.a.postScheduleIcon
						})
					})), e === g.o && o.a.createElement(re.a, {
						isContestMode: b,
						isPostAsMetaMod: y,
						sendEvent: D,
						schedule: N,
						stickyPosition: A,
						suggestedSort: U,
						onChange: T,
						onClose: W
					}), C && F !== h.Ub.MEDIA && F !== h.Ub.POLL && !S ? o.a.createElement(An, null, o.a.createElement(Ee, {
						disabled: !w || G || V,
						onClick: P
					}, v || z ? o.a.createElement(Bn, {
						sizePx: Nn
					}) : this.getSaveDraftButtonText())) : o.a.createElement(Ln, null, o.a.createElement(Ee, {
						disabled: G || V,
						onClick: this.onCancel
					}, kn())), K && t && o.a.createElement(on, {
						disabled: q,
						isToggled: !!n,
						onClick: this.handleDestCollectionClick
					})), o.a.createElement(Pe, null), !!(i || u.length || c) && o.a.createElement(ae.a, {
						className: On.a.errorMessages,
						messages: u,
						fallbackMessage: c ? Tn() : In()
					})))
				}
			}
			var Xn = qn(Qn(Object(rn.c)(Zn))),
				$n = n("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx"),
				es = n("./src/reddit/constants/posts.ts"),
				ts = n("./src/reddit/controls/SubredditPicker/index.tsx"),
				ns = n("./src/reddit/controls/SubredditPicker/helpers.ts"),
				ss = n("./src/reddit/helpers/name/index.ts"),
				os = n("./src/reddit/components/PostCreationForm/CreationControls/index.m.less"),
				rs = n.n(os);
			const as = Object(a.a)(j.h, w.a, j.X, I.k, y.r, I.C, (e, t, n, s, o, r) => {
					const a = n && !t ? n : e;
					if (!a || !a.name) return Object(ns.b)("", null, null, r);
					const {
						name: i,
						isProfile: c
					} = a;
					return c ? Object(ns.b)(Object(ss.d)(i), null, s, r) : Object(ns.b)(Object(ss.c)(i), o, null, r)
				}),
				is = Object(a.c)({
					pending: j.Z,
					pickerValue: as
				}),
				cs = Object(r.b)(is, (e, {
					draftId: t,
					pageLayer: n
				}) => ({
					onSubredditChangeRequested: t => e(L.b(t, n)),
					onTrackSubredditPickerClick: () => e((e, t) => k.B(t()))
				}));
			class ds extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.inputRef = null, this.onSelectSubreddit = e => {
						const {
							rawString: t,
							record: n
						} = e, s = {
							name: n && n.name || Object(ss.g)(t),
							isProfile: n && n.type === es.a.PROFILE || Object(ss.f)(t),
							allowedPostTypes: n && n.allowedPostTypes
						};
						this.props.onSubredditChangeRequested(s)
					}, this.setInputRef = e => this.inputRef = e
				}
				render() {
					return o.a.createElement(le.a, {
						className: Object(p.a)(rs.a.ControlRow, this.props.className)
					}, o.a.createElement(ts.a, {
						allowCrosspostableOnly: this.props.allowCrosspostableOnly,
						className: rs.a.SubredditPicker,
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
			var ls = Object(y.u)({
					draftId: y.v,
					pageLayer: e => e
				})(cs(ds)),
				us = n("./node_modules/lodash/range.js"),
				ms = n.n(us),
				ps = n("./src/reddit/icons/svgs/Close/index.tsx"),
				hs = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				bs = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				fs = n("./src/reddit/models/User/index.ts"),
				gs = n("./src/reddit/components/HumanDate/index.tsx"),
				xs = n("./src/reddit/models/PostDraft/index.ts"),
				Cs = n("./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/Icon.m.less"),
				vs = n.n(Cs),
				Es = n("./src/lib/constants/icons.ts");

			function _s() {
				return (_s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Os = {
				[xs.b.Image]: Es.a.image_post,
				[xs.b.Link]: Es.a.link_post,
				[xs.b.Markdown]: Es.a.text_post,
				[xs.b.RichText]: Es.a.text_post,
				[xs.b.Video]: Es.a.video_post
			};
			var ys = ne.a.wrapped(e => {
					const {
						draftKind: t,
						...n
					} = e, s = Os[t] || Es.a.link_post;
					return o.a.createElement(de.a, _s({
						name: s
					}, n))
				}, "Component", vs.a),
				ks = n("./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/index.m.less"),
				ws = n.n(ks);
			const Ss = ne.a.div("Container", ws.a),
				js = ne.a.div("LeftBlock", ws.a),
				Ps = ne.a.div("Content", ws.a),
				Ts = ne.a.div("RightBlock", ws.a),
				Is = ne.a.h2("PostTitle", ws.a),
				Ns = ne.a.wrapped(Is, "EditingPostTitle", ws.a),
				Ds = ne.a.div("MetaLine", ws.a),
				Ms = ne.a.span("SubredditName", ws.a),
				Rs = ne.a.time("DraftSavedTime", ws.a),
				Ls = ne.a.wrapped(bs.b, "TrashIcon", ws.a),
				As = ne.a.div("InteractiveDiv", ws.a),
				Fs = ne.a.button("ConfirmDelete", ws.a),
				Bs = Object(a.c)({
					isDraftDeletionPending: (e, {
						draft: {
							id: t
						}
					}) => Object(P.a)(e, t),
					subreddit: (e, {
						draft: {
							subredditId: t
						}
					}) => t ? Object(T.Q)(e, {
						subredditId: t
					}) : void 0,
					user: I.k
				}),
				Us = Object(r.b)(Bs, (e, {
					pageLayer: t
				}) => ({
					deleteDraft: n => e(A.o(n, t))
				})),
				Ws = Object(y.u)({
					currentDraftId: y.v,
					pageLayer: e => e
				}),
				Vs = 1e3;
			class Gs extends o.a.Component {
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
						subreddit: s,
						user: r
					} = this.props, a = s && Object(dt.h)(s) && r ? {
						displayText: Object(ss.d)(Object(fs.e)(r)),
						url: `/user/${Object(fs.e)(r)}/`
					} : s;
					if (n) return null;
					const i = e.title || d.fbt._("Untitled", null, {
						hk: "2gEXjp"
					});
					return o.a.createElement(Ss, {
						onClick: this.onClick
					}, o.a.createElement(js, null, o.a.createElement(ys, {
						draftKind: e.kind
					})), o.a.createElement(Ps, null, t === e.id ? o.a.createElement(Ns, {
						"data-redditstyle": !0
					}, d.fbt._("EDITING: {postTitle}", [d.fbt._param("postTitle", i)], {
						hk: "3M5MUj"
					})) : o.a.createElement(Is, {
						"data-redditstyle": !0
					}, i), o.a.createElement(Ds, {
						"data-redditstyle": !0
					}, a && o.a.createElement(Ms, {
						"data-redditstyle": !0
					}, a.displayText), a && o.a.createElement(hs.b, null), o.a.createElement(Rs, null, d.fbt._("Draft saved {draftSavedAtTime}", [d.fbt._param("draftSavedAtTime", o.a.createElement(gs.d, {
						seconds: (e.modified || e.created) / Vs
					}))], {
						hk: "2HjAWY"
					})))), o.a.createElement(Ts, null, this.state.showConfirmText ? o.a.createElement(Fs, {
						onClick: this.onConfirmClick,
						"data-redditstyle": !0
					}, t === e.id ? d.fbt._("Delete working draft?", null, {
						hk: "2iGoUj"
					}) : d.fbt._("Confirm", null, {
						hk: "2bjb66"
					})) : o.a.createElement(As, {
						onClick: this.onTrashCanClick
					}, o.a.createElement(Ls, {
						"data-redditstyle": !0
					}))))
				}
			}
			var Hs = Ws(Us(Gs)),
				zs = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				Ks = n("./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/Placeholder.m.less"),
				qs = n.n(Ks);
			const Qs = ne.a.div("Container", qs.a),
				Ys = ne.a.div("LeftBlock", qs.a),
				Js = ne.a.div("Content", qs.a),
				Zs = ne.a.div("MediaIcon", qs.a),
				Xs = ne.a.div("Title", qs.a),
				$s = ne.a.div("Secondary", qs.a);
			var eo = ({
					className: e,
					isLoading: t
				}) => o.a.createElement(Qs, {
					className: e,
					"data-redditstyle": !0
				}, o.a.createElement(Ys, null, o.a.createElement(Zs, {
					className: Object(zs.a)({
						isLoading: t
					}),
					"data-redditstyle": !0
				})), o.a.createElement(Js, null, o.a.createElement(Xs, {
					className: Object(zs.b)({
						isLoading: t
					}),
					"data-redditstyle": !0
				}), o.a.createElement($s, {
					className: Object(zs.b)({
						isLoading: t
					}),
					"data-redditstyle": !0
				}))),
				to = n("./src/reddit/components/PostCreationForm/DraftListModal/index.m.less"),
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
			const {
				fbt: oo
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ro = `${It.a.assetPath}/img/snoo-drafts.png`, ao = 3, io = ne.a.div("Wrapper", no.a), co = ne.a.div("TitleRow", no.a), lo = ne.a.span("DraftsNumber", no.a), uo = ne.a.div("DetailsContainer", no.a), mo = ne.a.wrapped(le.a, "ButtonRow", no.a), po = ne.a.wrapped(ge.n, "CancelButton", no.a), ho = ne.a.div("CloseWrapper", no.a), bo = ne.a.wrapped(ps.a, "Close", no.a), fo = ne.a.div("Empty", no.a), go = ne.a.img("EmptyImage", no.a), xo = ne.a.p("EmptyText", no.a), Co = Object(a.c)({
				drafts: P.c,
				isPending: P.b,
				maxDrafts: I.W
			}), vo = Object(r.b)(Co);
			class Eo extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === b.a.Escape && this.props.onClose()
					}, this.renderItem = e => o.a.createElement(Hs, {
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
					return o.a.createElement(eo, {
						isLoading: !0,
						key: e
					})
				}
				renderEmpty() {
					return o.a.createElement(fo, null, o.a.createElement(go, {
						src: ro
					}), o.a.createElement(xo, null, oo._("Your drafts will live here", null, {
						hk: "NIEIr"
					})))
				}
				render() {
					const {
						drafts: e,
						isPending: t,
						maxDrafts: n
					} = this.props;
					let s;
					return s = t ? ms()(ao).map(this.renderPlaceholder) : 0 === e.length ? this.renderEmpty() : e.map(this.renderItem), o.a.createElement(io, {
						"data-redditstyle": !0
					}, o.a.createElement(co, {
						"data-redditstyle": !0
					}, oo._("Drafts", null, {
						hk: "1fvOmI"
					}), o.a.createElement(lo, {
						"data-redditstyle": !0
					}, e.length, "/", n), o.a.createElement(ho, {
						onClick: this.props.onClose
					}, o.a.createElement(bo, {
						"data-redditstyle": !0
					}))), o.a.createElement(uo, null, s), o.a.createElement(mo, {
						"data-redditstyle": !0
					}, o.a.createElement(po, {
						onClick: this.props.onClose,
						"data-redditstyle": !0
					}, oo._("Close", null, {
						hk: "4gbyAA"
					}))))
				}
			}
			const _o = ne.a.wrapped(Object(bn.a)(vo(Eo)), "DraftListModal", no.a);
			var Oo = e => o.a.createElement(_o, so({
					withOverlay: !0,
					onOverlayClick: e.onClose
				}, e)),
				yo = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				ko = n("./src/lib/forceHttps/index.ts"),
				wo = n("./src/reddit/components/PostCreationForm/SafeHarborText/index.m.less"),
				So = n.n(wo);
			const {
				fbt: jo
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Po = new RegExp(`\\b(${[...ue.x].join("|")})\\.com$`, "i"), To = new RegExp(`\\.(${ue.w.join("|")})$`), Io = ne.a.div("TextContainer", So.a);
			class No extends o.a.Component {
				constructor() {
					super(...arguments), this.isUrlScraped = e => {
						const t = Object(yo.parse)(Object(ko.a)(e));
						return !(!t.hostname || !Po.test(t.hostname)) || !(!t.pathname || !To.test(t.pathname))
					}
				}
				render() {
					return this.props.value && this.isUrlScraped(this.props.value) ? o.a.createElement(Io, null, jo._("Posting this link saves the image or gif to Reddit", null, {
						hk: "1zFV82"
					})) : null
				}
			}
			var Do = n("./node_modules/react-autosize-textarea/lib/index.js"),
				Mo = n.n(Do),
				Ro = n("./src/reddit/controls/GrowingOutlinedInput/index.m.less"),
				Lo = n.n(Ro);

			function Ao() {
				return (Ao = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class Fo extends o.a.Component {
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
						textareaRef: s,
						minHeight: r,
						...a
					} = this.props;
					return o.a.createElement(Mo.a, Ao({}, a, {
						className: Object(p.a)(Lo.a.growingOutlinedInput, t),
						style: {
							minHeight: r
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
			var Bo = n("./src/reddit/components/PostCreationForm/LinkEditor/index.m.less"),
				Uo = n.n(Bo);
			const Wo = Object(a.c)({
					pending: j.Z,
					postCreationFieldErrors: ut,
					subreddit: y.r,
					value: j.S
				}),
				Vo = Object(r.b)(Wo, (e, {
					onChange: t,
					onPostFieldValidation: n,
					pageLayer: s
				}) => ({
					onBlur: () => {
						n(e(We(h.vb.LINK, s)))
					},
					onChange: n => {
						e(i.q(n)), t(n)
					},
					onFocus: () => e((e, t) => k.o(t(), g.l.CLICK, g.m.URL))
				}));
			var Go, Ho = Object(y.u)()(Vo(e => {
					const {
						pending: t,
						postCreationFieldErrors: n,
						subreddit: s,
						value: r
					} = e, a = n[h.vb.LINK].length > 0;
					return o.a.createElement("div", null, o.a.createElement(Fo, {
						className: Object(p.a)(Uo.a.URLInput, {
							[Uo.a.mHasError]: a
						}),
						placeholder: d.fbt._("Url", null, {
							hk: "4dfMY"
						}),
						value: r,
						onBlur: e.onBlur,
						onFocus: e.onFocus,
						onKeyDown: e.onKeyDown,
						onValueChange: e.onChange,
						readOnly: t
					}), o.a.createElement(ae.a, {
						errorModalTitle: s ? Object(ss.c)(s.name) : void 0,
						messages: n[h.vb.LINK]
					}), o.a.createElement(No, {
						value: r
					}))
				})),
				zo = n("./node_modules/lodash/clamp.js"),
				Ko = n.n(zo),
				qo = n("./node_modules/lodash/pickBy.js"),
				Qo = n.n(qo),
				Yo = n("./src/lib/formatApiError/index.ts"),
				Jo = n("./src/lib/objectSelector/index.ts"),
				Zo = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/lodash/isEqual.js")),
				Xo = n.n(Zo),
				$o = n("./src/reddit/controls/Sortable/index.tsx");
			! function(e) {
				e.RemoveGalleryItem = "REMOVE_GALLERY_ITEM", e.SelectGalleryItem = "SELECT_GALLERY_ITEM", e.SetGalleryItems = "SET_GALLERY_ITEMS", e.SetCaptionInput = "SET_CAPTION_INPUT", e.SetURLInput = "SET_URL_INPUT", e.SelectPrevMedia = "SELECT_PREV_MEDIA", e.SelectNextMedia = "SELECT_NEXT_MEDIA"
			}(Go || (Go = {}));
			var er = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts"),
				tr = n("./node_modules/lodash/upperFirst.js"),
				nr = n.n(tr),
				sr = n("./src/reddit/icons/svgs/Hamster1/index.tsx"),
				or = n("./src/reddit/icons/svgs/Hamster2/index.tsx"),
				rr = n("./src/reddit/components/PostCreationForm/MediaInput/DropArea/index.m.less"),
				ar = n.n(rr);
			const {
				fbt: ir
			} = n("./node_modules/fbt/lib/FbtPublic.js"), cr = [...Array.from(h.a), ...Array.from(h.b)].join(), dr = ne.a.input("HiddenInput", ar.a), lr = ne.a.wrapped(ge.n, "UploadButton", ar.a), ur = ne.a.wrapped(sr.a, "HamsterSmall", ar.a), mr = ne.a.wrapped(or.a, "HamsterLarge", ar.a), pr = ne.a.div("Container", ar.a), hr = ne.a.div("DropArea", ar.a), br = ne.a.wrapped(hr, "DropAreaActive", ar.a), fr = ne.a.wrapped(br, "DropAreaOver", ar.a), gr = ne.a.p("Paragraph", ar.a), xr = ne.a.p("ErrorMsg", ar.a), Cr = ne.a.div("Box", ar.a);
			class vr extends o.a.Component {
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
						allowMultiple: s
					} = this.props;
					return o.a.createElement(pr, null, o.a.createElement(dr, {
						innerRef: e => this.hiddenInputEl = e,
						onChange: this.onFileInput,
						type: "file",
						accept: cr,
						multiple: s
					}), e ? o.a.createElement(fr, null, o.a.createElement(Cr, null, o.a.createElement(mr, null), o.a.createElement(gr, null, ir._("Drop Here to Upload", null, {
						hk: "3e1xuE"
					})))) : t ? o.a.createElement(br, null, o.a.createElement(Cr, null, o.a.createElement(ur, null), ir._("Drop Here to Upload", null, {
						hk: "3e1xuE"
					}))) : o.a.createElement(hr, null, o.a.createElement(gr, null, ir._({
						"*": "Drag and drop images or {=Upload}",
						_1: "Drag and drop image or {=Upload}"
					}, [ir._plural(s ? 2 : 1), ir._param("=Upload", o.a.createElement(lr, {
						onClick: this.clickUploadButton
					}, ir._("Upload", null, {
						hk: "41ZNAf"
					})))], {
						hk: "2OuWpT"
					})), n && o.a.createElement(xr, null, nr()(n))))
				}
			}
			var Er = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				_r = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/AddImageItem.m.less"),
				Or = n.n(_r);

			function yr(e) {
				const {
					onClickEvent: t,
					onFileInput: n
				} = e, r = Object(s.useRef)(null), a = Object(s.useCallback)(() => {
					r && r.current && r.current.click(), t()
				}, [t, r]), i = Object(s.useCallback)(e => {
					n(e.currentTarget.files)
				}, [n]);
				return o.a.createElement("span", {
					className: Or.a.AddImageWrapper
				}, o.a.createElement("input", {
					accept: cr,
					className: Or.a.hiddenInput,
					multiple: !0,
					onChange: i,
					ref: r,
					type: "file"
				}), o.a.createElement("button", {
					className: Or.a.AddImageItem,
					onClick: a
				}, o.a.createElement(Er.a, {
					className: Or.a.plusIcon
				})))
			}
			var kr = n("./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx"),
				wr = n("./src/reddit/icons/svgs/Clear/index.tsx"),
				Sr = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/ImageItem.m.less"),
				jr = n.n(Sr);
			var Pr = e => {
					const {
						canDrop: t,
						mediaUpload: n,
						isDragging: r,
						isOver: a,
						isSelected: i,
						mediaItem: c,
						removeGalleryItem: d,
						dispatch: l
					} = e, u = Object(s.useRef)(null), m = n.key, h = n.status === pe.a.FAILED, b = Object(s.useCallback)(() => l((e => ({
						type: Go.SelectGalleryItem,
						payload: {
							key: e
						}
					}))(m)), [l, m]), f = Object(s.useCallback)(e => {
						e.stopPropagation(), d(c)
					}, [d, c]), g = n.metadata.localUrl;
					return g ? o.a.createElement("span", {
						ref: u
					}, o.a.createElement(kr.a, {
						canDrop: t,
						className: Object(p.a)(jr.a.GalleryMediaUpload, {
							[jr.a.isDragging]: r,
							[jr.a.isSelected]: i,
							[jr.a.isError]: h
						}),
						isDragging: r,
						isOver: a
					}, o.a.createElement("span", {
						className: Object(p.a)(jr.a.galleryImage, {
							[jr.a.isDragging]: r,
							[jr.a.isSelected]: i,
							[jr.a.isError]: h
						}),
						onClick: b,
						style: {
							backgroundImage: `url("${g}")`
						}
					}, o.a.createElement("button", {
						className: Object(p.a)(jr.a.deleteButton, {
							[jr.a.isDragging]: r,
							[jr.a.showDeleteNormal]: !i,
							[jr.a.isError]: h
						}),
						onClick: f
					}, o.a.createElement(wr.a, {
						className: Object(p.a)(jr.a.deleteIcon, {
							[jr.a.isDragging]: r
						})
					}))))) : null
				},
				Tr = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/ImageItemsWrapper.m.less"),
				Ir = n.n(Tr);
			var Nr = e => {
					const {
						onRemoveUpload: t,
						dispatch: n,
						mediaState: r,
						uploads: a
					} = e, i = Object(un.a)(), c = Object(s.useCallback)(() => i(k.k()), [i]), d = Object(s.useCallback)(e => {
						t(e.uploadKey), i(k.m())
					}, [i, t]);
					return o.a.createElement("div", {
						className: Ir.a.itemsWrapper
					}, o.a.createElement($o.a, {
						className: Ir.a.sortableImages,
						values: r.items,
						getReactKey: e => e.uploadKey,
						render: (e, t, s, i, c) => {
							const l = a[e.uploadKey];
							if (!l) return null;
							if (Object(pe.c)(l)) return o.a.createElement("span", {
								className: Object(p.a)(Ir.a.pendingItem, Object(zs.b)({
									isLoading: !0
								}))
							});
							const u = e.uploadKey === r.selectedKey;
							return o.a.createElement("span", {
								className: Ir.a.imageStyles
							}, i && o.a.createElement("span", {
								className: Ir.a.hoverMarker
							}), o.a.createElement(Pr, {
								canDrop: c,
								dispatch: n,
								isDragging: s,
								isOver: i,
								isSelected: u,
								mediaItem: e,
								key: e.uploadKey,
								mediaUpload: l,
								removeGalleryItem: d
							}))
						},
						onDrop: (e, t, s) => {
							n((e => ({
								type: Go.SetGalleryItems,
								payload: {
									items: e
								}
							}))(s))
						}
					}), r.items.length < er.b && o.a.createElement(yr, {
						onClickEvent: c,
						onFileInput: e.onFileInput
					}))
				},
				Dr = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/InputWrapper.m.less"),
				Mr = n.n(Dr);
			var Rr = e => {
					const {
						uploads: t,
						galleryItem: n,
						isSelected: r,
						dispatch: a
					} = e, i = t[n.uploadKey], c = n.caption, l = n.url, u = Object(un.a)(), m = Object(s.useCallback)(e => a((e => ({
						type: Go.SetCaptionInput,
						payload: {
							input: e
						}
					}))(e)), [a]), h = Object(s.useCallback)(e => a((e => ({
						type: Go.SetURLInput,
						payload: {
							input: e
						}
					}))(e)), [a]), b = Object(s.useCallback)(e => u(k.l(e)), [u]), f = Object(s.useCallback)(() => b(g.m.CAPTION), [b]), x = Object(s.useCallback)(() => b(g.m.OUTBOUND_URL), [b]), C = !r || !i || !i.url || Object(pe.c)(i);
					return o.a.createElement("div", null, o.a.createElement("div", {
						className: Mr.a.inputWrapper
					}, o.a.createElement(Fo, {
						className: Mr.a.inputStyles,
						disabled: C,
						maxLength: er.a,
						onFocus: f,
						onValueChange: m,
						placeholder: d.fbt._("Add a caption...", null, {
							hk: "1fOmKi"
						}),
						value: c
					}), o.a.createElement("div", {
						className: Mr.a.charsCounter
					}, c.length, "/", er.a)), o.a.createElement("div", {
						className: Mr.a.inputWrapper
					}, o.a.createElement(Fo, {
						className: Object(p.a)(Mr.a.inputStyles, Mr.a.urlInputStyles),
						disabled: C,
						onFocus: x,
						onValueChange: h,
						placeholder: d.fbt._("Add a link...", null, {
							hk: "Z6l9K"
						}),
						value: l
					})))
				},
				Lr = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/Layout.m.less"),
				Ar = n.n(Lr);
			var Fr = e => {
					const {
						heroSlot: t,
						mainContent: n,
						sideMetaContent: s,
						bottomContent: r
					} = e;
					return o.a.createElement("div", {
						className: Ar.a.Layout
					}, o.a.createElement("div", {
						className: Ar.a.hero
					}, t), n && o.a.createElement("div", {
						className: Ar.a.mainContent
					}, n), s && o.a.createElement("div", {
						className: Ar.a.sideMetaContent
					}, s), o.a.createElement("div", {
						className: Ar.a.bottomContent
					}, r))
				},
				Br = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/SelectedImage.m.less"),
				Ur = n.n(Br);
			var Wr = e => {
					const {
						upload: t
					} = e, n = t.metadata.localUrl;
					return Object(pe.c)(t) ? o.a.createElement("span", {
						className: Object(p.a)(Ur.a.pendingImage, Object(zs.b)({
							isLoading: !0
						}))
					}) : o.a.createElement("img", {
						className: Ur.a.selectedImage,
						src: n
					})
				},
				Vr = n("./src/reddit/components/ProgressBar/index.tsx"),
				Gr = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/MultipleUploadStatusBar/index.m.less"),
				Hr = n.n(Gr);
			const {
				fbt: zr
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Kr = ne.a.div("ControlRow", Hr.a), qr = ne.a.div("Status", Hr.a);
			var Qr = ne.a.wrapped(e => {
					const {
						progress: t
					} = e, n = t && t.percent || 0;
					return o.a.createElement("div", {
						className: e.className
					}, o.a.createElement(Vr.a, {
						percent: n,
						className: Hr.a.OuterDivProgressBar,
						innerBarClassName: Hr.a.ProgressBar
					}), o.a.createElement(Kr, null, o.a.createElement(qr, {
						className: Hr.a.StatusText
					}, n < 100 ? zr._("Image uploading in progress...", null, {
						hk: "n2dCj"
					}) : zr._("Image uploading completed", null, {
						hk: "4ko42w"
					}))))
				}, "Component", Hr.a),
				Yr = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/index.m.less"),
				Jr = n.n(Yr);

			function Zr(e) {
				const {
					canDrop: t,
					dispatch: n,
					isOver: r,
					mediaState: a,
					onFileInput: i,
					onRemoveUpload: c,
					uploads: l
				} = e, [u, m] = Object(s.useState)([]), h = a.selectedKey, b = a.items.length > 1, f = a.items.find(e => e.uploadKey === h), g = h && l[h], x = a.items.filter(e => {
					const t = l[e.uploadKey];
					return !!t && t.status === pe.a.FAILED
				}).length, C = Object.values(l).filter(pe.c);
				if (!Xo()(u, C))
					if (0 === C.length) m([]);
					else {
						const e = C.filter(e => !u.some(t => t.key === e.key));
						e.length > 0 && m([...u, ...e])
					} const v = u.length > 0,
					E = {
						percent: (() => {
							if (!v) return 0;
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
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: Object(p.a)(Jr.a.dropArea, {
						[Jr.a.isDropAreaActive]: t,
						[Jr.a.isDropAreaOver]: r
					})
				}, o.a.createElement(Fr, {
					heroSlot: o.a.createElement(Nr, {
						mediaState: a,
						onFileInput: i,
						onRemoveUpload: c,
						uploads: l,
						dispatch: n
					}),
					mainContent: g && b && o.a.createElement(Wr, {
						upload: g
					}),
					sideMetaContent: f && b && o.a.createElement(Rr, {
						dispatch: n,
						galleryItem: f,
						uploads: l,
						isSelected: !!h
					}),
					bottomContent: null
				})), v ? o.a.createElement(Qr, {
					progress: E
				}) : null, !!x && o.a.createElement(ae.a, {
					className: Jr.a.errorMessage,
					messages: [d.fbt._("Some files failed to upload, please remove or retry them", null, {
						hk: "3BP9AQ"
					})]
				}))
			}
			var Xr = n("./src/reddit/components/RichTextEditor/DragController/helpers.ts"),
				$r = n("./src/reddit/components/ThumbnailSelector/index.tsx"),
				ea = n("./src/reddit/controls/FileDrop/index.tsx"),
				ta = n("./src/reddit/helpers/media/index.ts"),
				na = n("./src/telemetry/models/Media.ts"),
				sa = n("./src/reddit/components/MakeGifToggle/index.tsx"),
				oa = n("./src/reddit/icons/svgs/ThumbnailSelect/index.tsx"),
				ra = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				aa = n("./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/Preview/index.m.less"),
				ia = n.n(aa);
			const ca = ne.a.img("Img", ia.a),
				da = ne.a.img("BlurImg", ia.a),
				la = ne.a.wrapped(e => {
					const {
						className: t,
						url: n
					} = e;
					return o.a.createElement("div", {
						className: t
					}, o.a.createElement(da, {
						src: n
					}), o.a.createElement(ca, {
						src: n
					}))
				}, "ImagePreview", ia.a),
				ua = ne.a.wrapped(e => {
					const {
						className: t,
						url: n,
						showControls: s,
						videoBlurImgSrc: r
					} = e;
					return o.a.createElement("div", {
						className: t
					}, o.a.createElement(ra.b, {
						shouldLoad: !1,
						shouldPause: !1,
						isGif: !1,
						otherSource: n,
						showControlBar: s,
						showSettingsIcon: !1,
						blurImageSrc: r
					}))
				}, "VideoPreview", ia.a);
			var ma = ne.a.wrapped(e => {
					const {
						className: t,
						type: n,
						url: s,
						showControls: r,
						videoBlurImgSrc: a
					} = e;
					return o.a.createElement("div", {
						className: t
					}, "image" === n ? o.a.createElement(la, {
						url: s
					}) : o.a.createElement(ua, {
						url: s,
						videoBlurImgSrc: a,
						showControls: r
					}))
				}, "Component", ia.a),
				pa = n("./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/UploadStatusBar/index.m.less"),
				ha = n.n(pa);
			const {
				fbt: ba
			} = n("./node_modules/fbt/lib/FbtPublic.js"), fa = ne.a.div("ControlRow", ha.a), ga = ne.a.wrapped(ge.q, "Button", ha.a), xa = ne.a.div("Status", ha.a);
			var Ca = ne.a.wrapped(e => {
					const {
						name: t,
						progress: n,
						onCancel: s
					} = e, r = n && n.percent || 0;
					return o.a.createElement("div", {
						className: e.className
					}, o.a.createElement(Vr.a, {
						percent: r
					}), o.a.createElement(fa, null, o.a.createElement(xa, null, r < 100 ? ba._("Uploading {fileName}", [ba._param("fileName", t)], {
						hk: "1F1ZHh"
					}) : ba._("Success!", null, {
						hk: "2SQAeu"
					})), r < 100 && o.a.createElement(ga, {
						onClick: s
					}, ba._("Cancel", null, {
						hk: "2TSLl5"
					}))))
				}, "Component", ha.a),
				va = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				Ea = n("./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/index.m.less"),
				_a = n.n(Ea);
			const Oa = ne.a.div("Wrapper", _a.a),
				ya = ne.a.div("Controls", _a.a),
				ka = ne.a.wrapped(oa.a, "ThumbnailSelect", _a.a),
				wa = ({
					isFilled: e,
					...t
				}) => o.a.createElement(ka, t);

			function Sa(e) {
				const {
					isPostSubmitPending: t,
					mediaType: n,
					onCancelUpload: s,
					onRemove: r,
					upload: a
				} = e, i = a.metadata, {
					localUrl: c,
					videoFirstFrameUrl: l
				} = i, u = a.status, m = u === pe.a.PENDING || u === pe.a.UPLOADING, p = u === pe.a.SUCCESS, h = !t;
				return o.a.createElement(Oa, null, m ? o.a.createElement(Ca, {
					className: _a.a.UploadStatusBar,
					name: a.file.name,
					progress: a.progress,
					onCancel: s
				}) : null, c ? o.a.createElement(ma, {
					type: n,
					url: c,
					showControls: p,
					videoBlurImgSrc: l
				}) : null, p && o.a.createElement(ya, null, "video" === n && o.a.createElement(sa.a, {
					disabled: !!e.makeGifDisableReason || !h,
					tooltip: e.makeGifDisableReason,
					on: e.isMakeGifToggleOn,
					onClick: e.onMakeGifToggle
				}), "video" === n && o.a.createElement(va.default, {
					enabled: h,
					Icon: wa,
					tooltip: d.fbt._("Choose thumbnail", null, {
						hk: "2XlKfd"
					}),
					onClick: e.onShowThumbnailSelector
				}), o.a.createElement(va.default, {
					enabled: h,
					iconName: "delete",
					tooltip: d.fbt._("Remove", null, {
						hk: "H42IB"
					}),
					onClick: r
				})))
			}
			var ja = n("./src/reddit/components/PostCreationForm/MediaInput/RemovePrompt/index.m.less"),
				Pa = n.n(ja);
			const Ta = "POST_CREATION_MEDIA_REMOVE_PROMPT_ID",
				Ia = ne.a.div("Wrapper", Pa.a),
				Na = ne.a.wrapped(le.a, "TitleRow", Pa.a),
				Da = ne.a.div("DetailsContainer", Pa.a),
				Ma = ne.a.wrapped(le.a, "ButtonRow", Pa.a),
				Ra = ne.a.wrapped(ge.n, "CancelButton", Pa.a),
				La = ne.a.wrapped(ge.k, "ConfirmButton", Pa.a);
			var Aa = Object(bn.a)(e => {
					const {
						isVideo: t
					} = e;
					return o.a.createElement(Ia, null, o.a.createElement(Na, null, t ? d.fbt._("Remove video?", null, {
						hk: "34eepe"
					}) : d.fbt._("Remove image?", null, {
						hk: "41e1Uy"
					})), o.a.createElement(Da, null, t ? d.fbt._("Are you sure you want to remove your video?", null, {
						hk: "smTuF"
					}) : d.fbt._("Are you sure you want to remove your image?", null, {
						hk: "Ci5LM"
					})), o.a.createElement(Ma, null, o.a.createElement(Ra, {
						onClick: e.onCanceled
					}, d.fbt._("Keep", null, {
						hk: "4gFSdj"
					})), o.a.createElement(La, {
						onClick: e.onConfirmed
					}, d.fbt._("Remove", null, {
						hk: "3tYl0U"
					}))))
				}),
				Fa = n("./src/reddit/components/PostCreationForm/MediaInput/index.m.less"),
				Ba = n.n(Fa);
			const Ua = "MEDIA_POST_VIDEO_THUMBNAIL_SELECTOR_MODAL_ID",
				Wa = Object(y.u)(),
				Va = Object(a.c)({
					activeModalId: w.a,
					isPostPending: j.Z,
					uploads: Object(Jo.a)(e => Qo()(e.uploads, e => e.key.startsWith(M.a))),
					value: j.U,
					isImageGalleryCreationEnabled: j.L
				}),
				Ga = Object(r.b)(Va, e => ({
					onChange: t => e(i.d(t)),
					startMediaGalleryUploads: (t, n) => e(M.d(t, n)),
					removeUpload: t => e(F.i(t, !0)),
					toggleThumbnailModal: () => e(i.y(Ua)),
					toggleRemovePrompt: () => e(i.y(Ta))
				})),
				Ha = ne.a.div("Container", Ba.a),
				za = (e, t, n) => {
					if (!e.length) return null;
					let s = e.findIndex(e => e.uploadKey === n);
					if (-1 === s) {
						const o = t.findIndex(e => e.uploadKey === n);
						s = Ko()(o - 1, 0, e.length - 1)
					}
					return e[s].uploadKey
				};
			class Ka extends o.a.Component {
				constructor() {
					super(...arguments), this.onFileDrop = e => this.uploadMediaFiles(e, na.FileSource.DragAndDrop), this.onFileInput = e => this.uploadMediaFiles(e, na.FileSource.FileSelector), this.onRemoveUpload = e => {
						const {
							value: t
						} = this.props, {
							items: n,
							selectedKey: s
						} = t, o = n.filter(t => t.uploadKey !== e);
						this.props.onChange({
							...t,
							items: o,
							selectedKey: za(o, n, s)
						}), this.props.removeUpload(e)
					}, this.onCancelSingleMediaUpload = () => {
						this.onRemoveUpload(this.getSingleUpload().key)
					}, this.handlePaste = e => {
						if (e.clipboardData) {
							const t = Object(Xr.a)(e.clipboardData);
							t.length && (e.preventDefault(), e.stopPropagation(), this.uploadMediaFiles(t, na.FileSource.Clipboard))
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
							s = n.video;
						this.props.onChange({
							...t,
							items: [{
								...n,
								video: {
									...s,
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
								case Go.SelectGalleryItem: {
									const {
										key: n
									} = t.payload;
									return {
										...e,
										selectedKey: n
									}
								}
								case Go.SetGalleryItems: {
									const {
										items: n
									} = t.payload;
									return {
										...e,
										items: n
									}
								}
								case Go.SetCaptionInput: {
									const {
										input: n
									} = t.payload, {
										selectedKey: s,
										items: o
									} = e;
									return s ? {
										...e,
										items: o.map(e => e.uploadKey === s ? {
											...e,
											caption: n
										} : e)
									} : e
								}
								case Go.SetURLInput: {
									const {
										input: n
									} = t.payload, {
										selectedKey: s,
										items: o
									} = e;
									return s ? {
										...e,
										items: o.map(e => e.uploadKey === s ? {
											...e,
											url: n
										} : e)
									} : e
								}
								case Go.SelectPrevMedia: {
									const {
										selectedKey: t,
										items: n
									} = e, s = n.findIndex(e => e.uploadKey === t);
									let o = -1 === s ? 0 : s - 1;
									return o < 0 && (o = n.length - 1), {
										...e,
										selectedKey: n[o].uploadKey
									}
								}
								case Go.SelectNextMedia: {
									const {
										selectedKey: t,
										items: n
									} = e, s = n.findIndex(e => e.uploadKey === t), o = -1 === s ? 0 : (s + 1) % n.length;
									return {
										...e,
										selectedKey: n[o].uploadKey
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
							value: s,
							isImageGalleryCreationEnabled: r,
							uploads: a
						} = this.props;
						if (!Object(g.x)(s) && r && s.items.length >= 1) return o.a.createElement(Zr, {
							isOver: e,
							canDrop: t,
							dispatch: this.dispatchAction,
							mediaState: s,
							onFileInput: this.onFileInput,
							onRemoveUpload: this.onRemoveUpload,
							uploads: a
						}); {
							const a = this.getSingleUpload(),
								i = this.props.value.items[0],
								{
									isMakeGif: c = !1,
									makeGifDisableReason: d = null
								} = i && i.video || {},
								l = a && a.status === pe.a.FAILED,
								u = a && l ? Object(Yo.a)(a.error) : "",
								m = a && Object(ta.f)(a.metadata.mimetype);
							return s && m && a && !l ? o.a.createElement(Sa, {
								isPostSubmitPending: n,
								upload: a,
								mediaType: m,
								onRemove: this.props.toggleRemovePrompt,
								onCancelUpload: this.onCancelSingleMediaUpload,
								onShowThumbnailSelector: this.toggleThumbnailSelector,
								onMakeGifToggle: this.onMakeGifToggle,
								isMakeGifToggleOn: c,
								makeGifDisableReason: d
							}) : o.a.createElement(vr, {
								lastErrorMsg: u,
								isOver: e,
								canDrop: t,
								onFileInput: this.onFileInput,
								allowMultiple: r
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
					} = e, n = this.getSingleUpload(), s = t[0], r = Object(g.x)(e), a = r && s.video.thumbnail || void 0;
					return o.a.createElement(Ha, null, o.a.createElement(ea.a, {
						render: (e, t) => this.renderDropArea(e, t),
						onDrop: this.onFileDrop
					}), n && n.metadata.videoDuration && o.a.createElement($r.a, {
						onSelect: this.onThumbnailSelect,
						onToggleModal: this.toggleThumbnailSelector,
						videoSource: n.metadata.localUrl,
						videoDuration: n.metadata.videoDuration,
						selected: a,
						isOpen: this.props.activeModalId === Ua
					}), this.props.activeModalId === Ta && o.a.createElement(Aa, {
						isVideo: r,
						onCanceled: this.props.toggleRemovePrompt,
						onConfirmed: this.onRemoveConfirmed
					}))
				}
			}
			var qa = Wa(Ga(Ka)),
				Qa = n("./src/reddit/actions/post.ts"),
				Ya = n("./src/reddit/controls/CheckboxInput/index.tsx"),
				Ja = n("./src/reddit/controls/OutboundLink/index.tsx"),
				Za = n("./src/reddit/selectors/externalAccount.ts"),
				Xa = n("./src/reddit/icons/fonts/Info/index.tsx"),
				$a = n("./src/reddit/components/PostCreationForm/PostCreationFooter/PostSettings/Hint/index.m.less"),
				ei = n.n($a);
			const ti = ne.a.wrapped(Xa.a, "Info", ei.a),
				ni = ne.a.div("TooltipContent", ei.a);
			var si = e => o.a.createElement("div", {
					className: ei.a.Hint
				}, o.a.createElement(Ze.a, {
					className: ei.a.HoverTooltip,
					tooltipContentClass: ei.a.tooltipContentClass,
					text: o.a.createElement(ni, null, e.text)
				}), o.a.createElement(ti, null)),
				oi = n("./src/reddit/components/PostCreationForm/PostCreationFooter/PostSettings/index.m.less"),
				ri = n.n(oi);
			const ai = ne.a.wrapped(Ya.a, "CheckboxInput", ri.a),
				ii = ne.a.wrapped(Ja.b, "ConnectAccountLink", ri.a),
				ci = ne.a.div("Container", ri.a),
				di = ne.a.div("ContainerLeft", ri.a),
				li = ne.a.div("ContainerRight", ri.a),
				ui = ne.a.div("CheckboxText", ri.a),
				mi = ne.a.div("Option", ri.a),
				pi = ne.a.wrapped(Ge.a, "TextButton", ri.a),
				hi = ne.a.input("TextBox", ri.a),
				bi = ne.a.div("Wrapper", ri.a),
				fi = Object(a.c)({
					connectedTwitterAccount: Za.a,
					currentSubredditOrProfile: y.p,
					currentUser: I.k,
					isDraftPending: P.g,
					isMediaUploadPending: j.V,
					isPostPending: j.mb,
					isPublicLink: j.P,
					postToTwitter: j.db,
					sendReplies: j.fb,
					sharingLink: P.i,
					submissionType: j.a
				}),
				gi = Object(r.b)(fi, (e, t) => ({
					togglePostToTwitter: t => {
						e(i.z(t)), e((e, n) => k.A(n(), t))
					},
					toggleSendReplies: t => {
						e(i.A(t))
					},
					toggleDraftIsPublic: n => {
						e(A.s(n)), e(Object(A.r)(t.draftId)), e((e, s) => {
							const o = Object(P.h)(s(), t.draftId);
							o && k.h(s(), o, n)
						})
					},
					copyLink: t => e(Object(Qa.D)(t)),
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
			var xi = Object(y.u)()(gi(e => {
					const {
						connectedTwitterAccount: t,
						currentSubredditOrProfile: n,
						currentUser: s,
						draftId: r,
						submissionType: a
					} = e, i = !!n && !!n.isQuarantined, c = e.isDraftPending || e.isPostPending || e.isMediaUploadPending, l = a !== h.Ub.MEDIA && r, u = e.isPublicLink, m = s && s.hasUserProfile;
					return o.a.createElement(ci, null, o.a.createElement(di, {
						className: e.className
					}, o.a.createElement(le.a, null, o.a.createElement(mi, null, o.a.createElement(ai, {
						disabled: c,
						name: "send-replies",
						onChange: e.onToggleSendReplies,
						value: e.sendReplies
					}, o.a.createElement(ui, null, d.fbt._("Send me post reply notifications", null, {
						hk: "3kNmey"
					}))))), m && t && o.a.createElement(le.a, null, o.a.createElement(mi, null, o.a.createElement(ai, {
						disabled: c || i,
						name: "post-to-twitter",
						onChange: e.onTogglePostToTwitter,
						value: e.postToTwitter
					}, o.a.createElement(ui, null, d.fbt._("Share this post on Twitter", null, {
						hk: "3SPI4V"
					}))))), m && !t && !i && o.a.createElement(le.a, null, o.a.createElement(ii, {
						href: "/settings#connected-accounts",
						onClick: e.trackConnectAccountsClick
					}, d.fbt._("Connect accounts to share your post", null, {
						hk: "1nIuWp"
					})), o.a.createElement(si, {
						text: d.fbt._("Connect a Twitter account in your User Settings. With a connected account you can choose to share new posts you make directly to Twitter.", null, {
							hk: "JRoQz"
						})
					}))), o.a.createElement(li, {
						className: e.className
					}, l && o.a.createElement(bi, null, o.a.createElement(mi, null, o.a.createElement(ai, {
						name: "enable-public-link",
						onChange: e.onToggleDraftIsPublic,
						value: e.isPublicLink
					}, o.a.createElement(ui, null, d.fbt._("Enable public draft link", null, {
						hk: "1SpDgT"
					})), o.a.createElement(si, {
						text: d.fbt._("This option will create a link to a preview of this draft. Anyone with this link will be able to see this draft. You can disable this link at any time.", null, {
							hk: "1r77YF"
						})
					})))), l && u && o.a.createElement(le.a, null, o.a.createElement(hi, {
						disabled: !0,
						value: e.sharingLink
					}), o.a.createElement(pi, {
						onClick: e.onCopyLink
					}, d.fbt._("Copy link", null, {
						hk: "22rywZ"
					})))))
				})),
				Ci = n("./src/reddit/components/PostCreationForm/PostCreationFooter/index.m.less"),
				vi = n.n(Ci);
			const Ei = ne.a.div("Container", vi.a);
			var _i = e => o.a.createElement(Ei, null, o.a.createElement(xi, {
					draftId: e.draftId
				})),
				Oi = n("./src/reddit/featureFlags/profileCollections.ts"),
				yi = n("./src/reddit/selectors/experiments/postCreationSubRec.ts"),
				ki = n("./src/reddit/selectors/profile.ts"),
				wi = n("./src/reddit/components/PostCreationForm/PostCreationHeader/index.m.less"),
				Si = n.n(wi);
			const ji = ne.a.span("CountIndicator", Si.a),
				Pi = ne.a.wrapped(ge.q, "LinkButton", Si.a),
				Ti = Pi,
				Ii = Object(a.c)({
					canPostAsModerator: j.e,
					collectionsCount: e => {
						const t = Object(j.h)(e);
						let n = t.id;
						if (t.isProfile && Object(Oi.a)(e)) {
							const s = Object(ki.j)(e, {
								profileName: t.name
							});
							n = s && s.id
						}
						return n ? Object(v.u)(e, {
							subredditId: n
						}) : 0
					},
					destSubredditAboutInfo: j.g,
					draftsCount: I.l,
					isPending: j.Z,
					isOpenAIPilotV1: yi.e
				});
			var Ni = Object(r.b)(Ii, e => ({
					showDraftsList: () => {
						e(A.p()), e(i.y(g.e))
					},
					showCollectionsList: () => {
						e(i.y(g.a))
					}
				}))(e => {
					const {
						canPostAsModerator: t,
						collectionsCount: n,
						destSubredditAboutInfo: s,
						draftsCount: r,
						isPending: a,
						showCollectionsList: i,
						showDraftsList: c,
						submissionType: l,
						submitMode: u,
						isOpenAIPilotV1: m
					} = e, b = l === h.Ub.CROSSPOST, f = b ? d.fbt._("Create a crosspost", null, {
						hk: "1oNF7H"
					}) : d.fbt._("Create a post", null, {
						hk: "4u8qEy"
					}), x = t && s && s.collectionsEnabled;
					return o.a.createElement("div", {
						className: Object(p.a)(Si.a.CreatePostHeader, {
							[Si.a.isSubredditRec]: m
						})
					}, o.a.createElement("div", {
						className: Si.a.CreateLabel
					}, u === g.r.Draft ? d.fbt._("Edit draft", null, {
						hk: "oMgcW"
					}) : f), !b && o.a.createElement(o.a.Fragment, null, x && o.a.createElement(Ti, {
						onClick: i
					}, d.fbt._("Collections", null, {
						hk: "2FVot0"
					}), o.a.createElement(ji, null, n)), o.a.createElement(Pi, {
						disabled: a,
						onClick: c
					}, d.fbt._("Drafts", null, {
						hk: "25z4rQ"
					}), o.a.createElement(ji, null, r))))
				}),
				Di = n("./src/reddit/actions/polls.ts"),
				Mi = n("./src/reddit/actions/postCreation/editorContent.ts"),
				Ri = n("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				Li = n("./src/reddit/selectors/crypto/points.ts"),
				Ai = n("./src/reddit/components/Governance/PollHelpText/index.m.less"),
				Fi = n.n(Ai);

			function Bi(e) {
				var t;
				const {
					subreddit: n
				} = e, s = Object(r.e)(e => Object(Li.b)(e, n.id));
				if (!s) return null;
				const a = null === (t = s.polls) || void 0 === t ? void 0 : t.decisionThreshold;
				return o.a.createElement("div", {
					className: Fi.a.pollHelpText
				}, a && o.a.createElement(o.a.Fragment, null, o.a.createElement(Ri.a, {
					className: Fi.a.decisionThreholdAmount,
					amount: a,
					subredditId: n.id
				}), o.a.createElement("div", {
					className: Fi.a.decisionThresholdTitle
				}, d.fbt._("Decision Threshold", null, {
					hk: "39nut8"
				}))), o.a.createElement("div", {
					className: Fi.a.decisionThresholdExplanation
				}, d.fbt._("Governance Polls pass when one option reaches the Decision Threshold. The Decision Threshold is updated regularly based on the number of {tokenName} that voted in previous governance polls.", [d.fbt._param("tokenName", s.name)], {
					hk: "Di1tp"
				})))
			}
			var Ui = n("./src/reddit/actions/governance/index.ts"),
				Wi = n("./src/reddit/actions/tooltip.ts"),
				Vi = n("./src/reddit/controls/Dropdown/index.tsx"),
				Gi = n("./src/reddit/controls/Dropdown/Row.tsx"),
				Hi = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				zi = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.tsx"),
				Ki = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.tsx"),
				qi = n("./src/reddit/components/PollCreator/EndDatePicker/useEndDatePicker.tsx"),
				Qi = n("./src/reddit/components/PollCreator/EndDatePicker/index.m.less"),
				Yi = n.n(Qi);

			function Ji({
				poll: e
			}) {
				const t = Object(r.d)(),
					{
						endDate: n
					} = e,
					{
						date: s,
						time: a,
						timeZoneAbbr: i,
						onChange: c,
						maxDate: l,
						minDate: u,
						minTime: m
					} = Object(qi.a)(n, n => t(Object(Di.b)({
						...e,
						endDate: n
					})));
				return o.a.createElement("div", {
					className: Yi.a.endDatePicker
				}, o.a.createElement("label", {
					className: Yi.a.title
				}, d.fbt._("Prediction ends", null, {
					hk: "1fsk1v"
				})), o.a.createElement("div", {
					className: Yi.a.dateTime
				}, o.a.createElement(zi.a, {
					"aria-label": d.fbt._("Prediction end date", null, {
						hk: "4zYv4T"
					}),
					onChange: e => c({
						date: e
					}),
					min: u,
					max: l,
					value: s,
					required: !0
				}), o.a.createElement(Ki.a, {
					className: Yi.a.timeInput,
					"aria-label": d.fbt._("Prediction end time", null, {
						hk: "1idFl4"
					}),
					onChange: e => c({
						time: e
					}),
					min: m,
					value: a,
					required: !0
				}), i && o.a.createElement("div", {
					className: Yi.a.timeZone
				}, i)))
			}
			var Zi = n("./src/reddit/components/PollCreator/EndDatePicker/utils.ts"),
				Xi = n("./src/reddit/icons/svgs/Grapple/index.tsx"),
				$i = n("./src/reddit/components/PollCreator/Option/index.m.less"),
				ec = n.n($i);

			function tc(e) {
				return o.a.createElement("div", {
					className: Object(p.a)(e.className, ec.a.container),
					style: {
						left: e.isDropTarget ? 16 : 0,
						opacity: nc(e),
						pointerEvents: e.isDisabled ? "none" : void 0
					}
				}, o.a.createElement(Xi.a, {
					className: ec.a.grapple
				}), o.a.createElement("input", {
					className: ec.a.input,
					maxLength: 120,
					placeholder: `${d.fbt._("option",null,{hk:"3IGnB"})} ${e.index+1}`,
					value: e.text,
					onBlur: e.onBlur,
					onChange: t => e.onTextChange(t.currentTarget.value),
					onFocus: e.onFocus
				}), e.removable && o.a.createElement(bs.a, {
					className: ec.a.trash,
					onClick: e.onRemove
				}))
			}

			function nc(e) {
				return e.isDisabled ? .5 : e.isBeingDragged ? .25 : 1
			}
			var sc = n("./src/reddit/constants/postLayout.ts"),
				oc = n("./src/reddit/components/Econ/Prediction/NewBadge/index.m.less"),
				rc = n.n(oc);
			const {
				fbt: ac
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function ic({
				className: e
			}) {
				return o.a.createElement("div", {
					className: Object(p.a)(rc.a.newBadge, e)
				}, ac._("New", null, {
					hk: "2N0EBb"
				}))
			}
			var cc = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts"),
				dc = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionFeatureEducationMessage/index.tsx"),
				lc = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				uc = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				mc = n("./src/reddit/controls/PillButton/index.m.less"),
				pc = n.n(mc);
			class hc extends o.a.Component {
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
						colorTheme: s = "default",
						contentClassName: r,
						disabled: a,
						hoverText: i,
						icon: c,
						id: d,
						isActive: l,
						isDarkDayMode: u,
						isNightMode: m,
						layout: h,
						onBlur: b,
						onClick: f,
						onFocus: g,
						title: x,
						tooltipId: C
					} = this.props, v = c, E = Object(p.a)({
						[pc.a.classic]: h === sc.g.Classic,
						[pc.a.compact]: h === sc.g.Compact,
						[pc.a.activated]: l,
						[pc.a.nightmode]: m,
						[pc.a.dark]: u,
						[pc.a.upvote]: "upvote" === s,
						[pc.a.downvote]: "downvote" === s,
						[pc.a.gold]: "gold" === s,
						[pc.a.blue]: "blue" === s,
						[pc.a.approve]: "approve" === s,
						[pc.a.remove]: "remove" === s,
						[pc.a.hasChildren]: !!t
					});
					if (this.props.href) {
						const {
							href: e,
							rel: s,
							target: a
						} = this.props;
						return o.a.createElement(lc.a, {
							"aria-label": x,
							"aria-pressed": l,
							className: Object(p.a)(n, E, pc.a.PostActionButton),
							"data-click-id": this.props["data-click-id"],
							"data-test-id": this.props["data-test-id"],
							id: d,
							onBlur: b,
							onClick: f,
							onFocus: g,
							onMouseEnter: this.handleMouseEnter,
							onMouseLeave: this.handleMouseLeave,
							rel: s,
							target: a,
							to: e
						}, o.a.createElement("span", {
							className: Object(p.a)(r, E, pc.a.buttonContent),
							id: C,
							tabIndex: -1
						}, o.a.createElement("div", {
							className: pc.a.background
						}), i && C && o.a.createElement(uc.c, {
							text: i,
							tooltipId: C
						}), v && o.a.createElement(v, null), o.a.createElement("span", {
							className: pc.a.buttonChildren
						}, t)))
					}
					return o.a.createElement("button", {
						"aria-label": x,
						"aria-pressed": l,
						className: Object(p.a)(n, E, pc.a.PostActionButton),
						"data-click-id": this.props["data-click-id"],
						"data-test-id": this.props["data-test-id"],
						disabled: a,
						id: d,
						onBlur: b,
						onClick: f,
						onFocus: g,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave
					}, o.a.createElement("span", {
						className: Object(p.a)(r, E, pc.a.buttonContent),
						id: C,
						tabIndex: -1
					}, o.a.createElement("div", {
						className: Object(p.a)(pc.a.background, e)
					}), i && C && o.a.createElement(uc.c, {
						text: i,
						tooltipId: C
					}), v && o.a.createElement(v, null), o.a.createElement("span", {
						className: pc.a.buttonChildren
					}, t)))
				}
			}
			var bc = Object(r.b)(void 0, (e, {
					tooltipId: t
				}) => ({
					tooltipSet: () => {
						t && e(Object(Wi.g)({
							tooltipId: t
						}))
					},
					tooltipUnset: () => {
						t && e(Object(Wi.j)({
							tooltipId: t
						}))
					}
				}))(hc),
				fc = n("./src/reddit/hooks/useLocalStorage.ts"),
				gc = n("./src/reddit/selectors/features/predictions/creation/index.ts"),
				xc = n("./src/reddit/components/PollCreator/PollTypePicker/index.m.less"),
				Cc = n.n(xc);

			function vc() {
				return (vc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function Ec({
				tournamentsEnabled: e
			}) {
				const [t] = Object(fc.a)(cc.a.creation, !1), {
					govType: n
				} = Object(r.e)(j.s), a = Object(r.e)(gc.a), c = Object(r.d)(), l = Object(un.a)(), u = Object(ln.a)(), m = null == u ? void 0 : u.queryParams.type, b = {
					backgroundClassName: Cc.a.buttonBackground,
					colorTheme: "blue",
					className: Object(p.a)(Cc.a.button, Cc.a.pollTypePickerButton),
					contentClassName: Cc.a.buttonContent,
					disabled: a,
					isDarkDayMode: !1,
					isNightMode: !1,
					layout: sc.g.Compact
				}, f = Object(s.useCallback)(() => {
					c(Object(i.k)({
						oldType: n,
						type: me.a.Prediction
					})), l(dn.r)
				}, [c, n, l]);
				return Object(s.useEffect)(() => {
					m === h.wb && f()
				}, [m, f]), o.a.createElement("div", {
					className: Cc.a.pollTypePicker
				}, o.a.createElement(bc, vc({}, b, {
					isActive: n === me.a.GA || !n,
					onClick: () => {
						c(Object(i.k)({
							oldType: n,
							type: me.a.GA
						})), l(dn.q)
					},
					title: d.fbt._("Poll", null, {
						hk: "2uKNlH"
					})
				}), d.fbt._("Poll", null, {
					hk: "1l7ZuP"
				})), o.a.createElement(bc, vc({}, b, {
					isActive: n === me.a.Prediction,
					onClick: f,
					title: d.fbt._("Prediction", null, {
						hk: "3wu0FO"
					})
				}), o.a.createElement("div", {
					className: Cc.a.predictionLabel
				}, d.fbt._("Prediction", null, {
					hk: "1CbFag"
				}), !t && n !== me.a.Prediction && o.a.createElement(ic, {
					className: Cc.a.newBadge
				}))), n === me.a.Prediction && o.a.createElement("div", {
					className: Cc.a.education
				}, o.a.createElement(dc.a, {
					isTokens: e,
					onClose: () => l(dn.m),
					onView: () => l(dn.s),
					storageKey: cc.a.creation
				})))
			}
			var _c = n("./src/reddit/actions/economics/predictions/constants.ts"),
				Oc = n("./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts"),
				yc = n("./src/reddit/components/PollCreator/TournamentPicker/index.m.less"),
				kc = n.n(yc);

			function wc({
				className: e,
				poll: t
			}) {
				const n = Object(ln.a)(),
					{
						subredditName: s
					} = (null == n ? void 0 : n.urlParams) || {},
					a = Object(r.e)(e => Object(T.B)(e, s)),
					i = Object(r.e)(e => Object(hn.b)(e, {
						subredditId: a
					})) || {
						id: _c.g,
						name: "Predictions Tournament"
					};
				return Object(Oc.a)(s), s ? o.a.createElement("div", {
					className: Object(p.a)(kc.a.tournamentPicker, e)
				}, o.a.createElement("label", {
					className: kc.a.title
				}, d.fbt._("Tournament", null, {
					hk: "1eyps5"
				})), o.a.createElement("input", {
					disabled: !0,
					className: kc.a.input,
					readOnly: !0,
					type: "text",
					value: i.name || d.fbt._("New tournament", null, {
						hk: "1DwyZA"
					})
				})) : null
			}
			var Sc = n("./src/reddit/components/PollCreator/index.m.less"),
				jc = n.n(Sc);
			const Pc = 2,
				Tc = 6,
				Ic = 7,
				Nc = "poll-creation-voting-length";
			var Dc;
			! function(e) {
				e.Options = "options", e.VotingLength = "votingLength"
			}(Dc || (Dc = {}));
			const Mc = Object(Nt.a)(Vi.a);

			function Rc(e, t) {
				return `${t}-${e}`
			}
			const Lc = Object(a.c)({
				tournamentsEnabled: (e, {
					subredditId: t
				}) => !!t && Object(T.K)(e, {
					subredditId: t
				}),
				allowPolls: j.d,
				votingLengthDropdownIsOpen: e => e.tooltipId === Nc
			});
			class Ac extends o.a.Component {
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
						const s = e.options.indexOf(t);
						this.props.onUpdatePoll({
							...e,
							options: e.options.slice(0, s).concat({
								text: n
							}).concat(e.options.slice(s + 1))
						})
					}, this.handleRemoveOption = (e, t) => () => {
						this.props.onUpdatePoll({
							...e,
							options: e.options.filter(e => e !== t)
						})
					}, this.makeOption = () => ({
						text: ""
					}), this.makeDefaultPoll = () => ({
						duration: 3 * h.A,
						endDate: Object(Zi.b)(),
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
						tournamentsEnabled: s,
						allowPolls: r,
						allowPredictions: a
					} = this.props, i = !Object(me.d)(t) && r && a, c = n === me.a.Prediction;
					return o.a.createElement("div", {
						"data-testid": "poll-creator"
					}, i && o.a.createElement(Ec, {
						tournamentsEnabled: s
					}), o.a.createElement("div", {
						className: Object(p.a)(e, jc.a.container)
					}, o.a.createElement("div", {
						className: jc.a.options
					}, this.renderPollCreator(t), this.renderControls(t)), o.a.createElement("div", {
						className: jc.a.help
					}, this.props.hintTextComponent)), c && o.a.createElement("div", {
						className: jc.a.predictionSettings
					}, o.a.createElement(Ji, {
						poll: t
					}), s && o.a.createElement(wc, {
						poll: t
					})))
				}
				renderPollCreator(e) {
					const t = this.sectionIsDisabled(Dc.Options);
					return o.a.createElement($o.a, {
						getReactKey: Rc,
						render: (n, s, r, a, i) => o.a.createElement(tc, {
							className: jc.a.option,
							index: s,
							isBeingDragged: r,
							isDisabled: t,
							isDropTarget: a && i,
							option: n,
							removable: s > 1,
							text: n.text,
							onBlur: this.handleBlur,
							onFocus: this.handleFocus,
							onTextChange: this.handleOptionTextChange(e, n),
							onRemove: this.handleRemoveOption(e, n)
						}),
						values: e.options,
						onDrop: (t, n, s) => this.props.onUpdatePoll({
							...e,
							options: s
						})
					})
				}
				renderControls(e) {
					const {
						pollType: t
					} = this.props, n = e.options.length >= Tc || this.sectionIsDisabled(Dc.Options), s = this.sectionIsDisabled(Dc.VotingLength), r = Math.floor(e.duration / h.A), a = t === me.a.Prediction;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: jc.a.controls
					}, o.a.createElement(ge.q, {
						className: jc.a.addButton,
						disabled: n,
						onClick: this.handleAddOption(e)
					}, d.fbt._("Add Option", null, {
						hk: "hUP0k"
					})), !a && o.a.createElement("div", {
						className: Object(p.a)(jc.a.votingLengthSelector, {
							[jc.a.votingLengthSelector__disabled]: !!s
						})
					}, o.a.createElement("div", {
						className: jc.a.votingLengthTitleText
					}, d.fbt._("Voting length:", null, {
						hk: "4pPVUg"
					})), o.a.createElement("div", {
						className: jc.a.votingLengthDropdownContainer,
						id: Nc
					}, o.a.createElement("div", {
						className: jc.a.votingLengthDisplay,
						onClick: this.handleVotingLengthDropdownClick
					}, o.a.createElement("div", null, d.fbt._({
						"*": "{numDays} days",
						_1: "{numDays} day"
					}, [d.fbt._param("numDays", String(r)), d.fbt._plural(r)], {
						hk: "2HsFBA"
					})), o.a.createElement(Hi.a, {
						className: jc.a.votingLengthCaret
					})), this.renderVotingLengthDropdown(e)))))
				}
				renderVotingLengthDropdown(e) {
					const {
						votingLengthDropdownIsOpen: t
					} = this.props, n = this.handleChangeVotingLength(e);
					return o.a.createElement(Mc, {
						className: jc.a.votingLengthDropdown,
						tooltipId: Nc,
						isOpen: t
					}, Array.from({
						length: Ic
					}).map((t, s) => {
						const r = s + 1;
						return o.a.createElement(Gi.b, {
							"data-redditstyle": !0,
							key: s,
							index: s,
							displayText: d.fbt._({
								"*": "{number} days",
								_1: "1 day"
							}, [d.fbt._plural(r, "number")], {
								hk: "bXXYo"
							}),
							isSelected: Math.floor(e.duration / h.A) === r,
							onClick: () => n(r * h.A)
						})
					}))
				}
			}
			var Fc = Object(r.b)(Lc, (e, t) => ({
					onToggleVotingLengthDropdown: () => e(Object(Wi.h)({
						tooltipId: Nc
					})),
					fetchIsPredictionCreationAllowed: async () => e(Object(an.h)(t.subredditId)),
					setPollType: n => e(Object(i.k)({
						oldType: t.pollType || null,
						type: n
					}))
				}))(Object(rn.c)(Ac)),
				Bc = n("./src/reddit/components/Governance/ProposalTemplates/Generic/index.m.less"),
				Uc = n.n(Bc);
			const Wc = [{
				text: "Yes"
			}, {
				text: "No"
			}];

			function Vc(e) {
				const t = {
					duration: e.poll ? e.poll.duration : h.A,
					options: e.options || Wc
				};
				return o.a.createElement("div", {
					className: Object(p.a)(Uc.a.container, e.className)
				}, o.a.createElement("div", {
					className: Uc.a.topline
				}, e.children.map(e => "string" == typeof e ? o.a.createElement("div", {
					className: Uc.a.text
				}, e) : e)), o.a.createElement(Fc, {
					disabledSections: [Dc.Options],
					hintTextComponent: o.a.createElement("div", {
						className: Uc.a.hintText
					}, o.a.createElement(Bi, {
						subreddit: e.subreddit
					})),
					poll: t,
					onUpdatePoll: e.onUpdatePoll
				}))
			}
			var Gc = n("./src/reddit/controls/FormFields/index.tsx"),
				Hc = n("./src/reddit/components/Governance/ProposalTemplates/Spinoff/index.m.less"),
				zc = n.n(Hc);
			const Kc = 3,
				qc = 20,
				Qc = /[^(\w|_)]/g;
			const Yc = Object(a.c)({
				newSubredditName: e => e.creations.formData.newSubreddit
			});
			var Jc = Object(r.b)(Yc, e => ({
					onSubredditNameChange: t => e(Object(Ui.a)({
						subredditName: t
					}))
				}))((function(e) {
					return o.a.createElement(Vc, {
						className: e.className,
						options: me.f[me.a.Spinoff](e.newSubredditName),
						poll: e.poll,
						subreddit: e.subreddit,
						onUpdatePoll: e.onUpdatePoll
					}, d.fbt._("Should we spin-off to", null, {
						hk: "3oKiyE"
					}), o.a.createElement(Gc.c, {
						redditStyle: !0,
						className: zc.a.input,
						label: d.fbt._("subreddit name", null, {
							hk: "1qzJqB"
						}),
						max: qc,
						min: Kc,
						type: "text",
						value: e.newSubredditName,
						onChange: t => {
							const n = t.currentTarget.value.replace(Qc, "");
							e.onSubredditNameChange(n)
						}
					}), d.fbt._("?", null, {
						hk: "1b1vhH"
					}))
				})),
				Zc = n("./src/reddit/components/Governance/ProposalTemplates/TopModReplacement/index.m.less"),
				Xc = n.n(Zc);
			const $c = 20;
			const ed = Object(a.c)({
				topMod: e => e.creations.formData.newTopMod
			});
			var td = Object(r.b)(ed, e => ({
					onUsernameChange: t => e(Object(Ui.b)({
						username: t
					}))
				}))((function(e) {
					return o.a.createElement(Vc, {
						className: e.className,
						options: me.f[me.a.ReplaceTopMod](),
						poll: e.poll,
						subreddit: e.subreddit,
						onUpdatePoll: e.onUpdatePoll
					}, d.fbt._("Should", null, {
						hk: "22RF0A"
					}), o.a.createElement(Gc.c, {
						redditStyle: !0,
						className: Xc.a.input,
						label: d.fbt._("username", null, {
							hk: "1Fk03V"
						}),
						max: $c,
						type: "text",
						value: e.topMod,
						onChange: t => e.onUsernameChange(t.currentTarget.value)
					}), d.fbt._("become the top moderator?", null, {
						hk: "4COtce"
					}))
				})),
				nd = n("./src/reddit/icons/svgs/Info/index.tsx"),
				sd = n("./src/reddit/components/PollCreator/DefaultHintText/index.m.less"),
				od = n.n(sd);
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

			function ad(e) {
				const {
					isPrediction: t
				} = e;
				return o.a.createElement(s.Fragment, null, o.a.createElement("div", {
					className: od.a.helpTitle
				}, o.a.createElement(nd.a, {
					className: od.a.infoIcon
				}), o.a.createElement("div", {
					className: od.a.helpTitleText
				}, t ? d.fbt._("Tips on Better Predictions", null, {
					hk: "3kIzkr"
				}) : d.fbt._("Tips on Better Polls", null, {
					hk: "2QMuX9"
				}))), o.a.createElement("ol", {
					className: od.a.helpTextList
				}, rd(!!t).map(e => o.a.createElement("li", {
					className: od.a.helpTextItem,
					key: e()
				}, e()))))
			}
			var id = n("./src/reddit/components/PostCreationForm/MarkdownEditor/index.tsx"),
				cd = n("./src/reddit/components/RichTextEditor/index.tsx"),
				dd = n("./src/reddit/featureFlags/component.tsx"),
				ld = n("./src/reddit/helpers/richTextEditor/index.ts"),
				ud = n("./src/reddit/models/PostRequirements/index.ts"),
				md = n("./src/reddit/featureFlags/index.ts"),
				pd = n("./src/reddit/icons/svgs/GovSmall/index.tsx"),
				hd = n("./src/reddit/icons/svgs/Poll/index.tsx"),
				bd = n("./src/reddit/components/PostCreationForm/PostEditor/GovTypeSelector/index.m.less"),
				fd = n.n(bd);
			const gd = Object(Nt.a)(Vi.a),
				xd = [{
					Icon: hd.a,
					showNewTag: !0,
					text: () => d.fbt._("general", null, {
						hk: "2zk1er"
					}),
					type: null
				}, {
					Icon: pd.a,
					showNewTag: !1,
					text: () => d.fbt._("governance", null, {
						hk: "1wlLfQ"
					}),
					type: me.a.GovGeneric
				}, {
					Icon: pd.a,
					showNewTag: !1,
					text: () => d.fbt._("spin-off a new community", null, {
						hk: "jNK0c"
					}),
					type: me.a.Spinoff
				}],
				Cd = "gov-type-selector-dropdown";
			const vd = Object(a.c)({
				dropdownIsOpen: e => e.tooltipId === Cd,
				govType: e => e.creations.formData.govType,
				spinoffEnabled: md.d.spSpinoffs
			});
			var Ed = Object(r.b)(vd, e => ({
					onChangeGovType: (t, n) => {
						e(Object(i.k)({
							oldType: n,
							type: t
						})), e(Object(Wi.i)())
					},
					onToggleDropdown: () => e(Object(Wi.h)({
						tooltipId: Cd
					}))
				}))((function(e) {
					const t = function(e, t) {
							return xd.filter(({
								type: e
							}) => !(!t.spinoffEnabled && e === me.a.Spinoff))
						}(0, e),
						n = t.find(t => t.type === e.govType) || t[0];
					return o.a.createElement("div", {
						className: Object(p.a)(fd.a.container, e.className)
					}, o.a.createElement("div", {
						className: fd.a.currentSelection,
						id: Cd,
						onClick: e.onToggleDropdown
					}, o.a.createElement(n.Icon, {
						className: fd.a.pollTypeIcon
					}), o.a.createElement("div", {
						className: fd.a.text
					}, n.text()), o.a.createElement(Hi.a, {
						className: fd.a.dropdownIcon
					}), n.showNewTag && o.a.createElement("div", {
						className: fd.a.newLabel
					}, d.fbt._("new", null, {
						hk: "4iv34v"
					}))), o.a.createElement(gd, {
						className: fd.a.dropdown,
						tooltipId: Cd,
						isOpen: e.dropdownIsOpen
					}, t.map((t, s) => o.a.createElement(Gi.b, {
						"data-redditstyle": !0,
						displayText: t.text(),
						isSelected: t.type === n.type,
						key: s,
						onClick: () => e.onChangeGovType(t.type, e.govType)
					}))))
				})),
				_d = n("./src/reddit/components/PostCreationForm/PostEditor/index.m.less"),
				Od = n.n(_d);

			function yd() {
				return (yd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const kd = Object(dd.a)("spGovPolls", Ed),
				wd = (e, t) => !e && t && t.bodyRestrictionPolicy === ud.a.Required,
				Sd = Object(a.c)({
					canPostAsModerator: j.e,
					destSubreddit: j.h,
					draft: P.d,
					editorMode: j.n,
					govType: e => e.creations.formData.govType,
					markdownBody: j.T,
					pending: j.Z,
					poll: e => e.creations.formData.polls || void 0,
					postCreationFieldErrors: ut,
					postRequirements: j.nb,
					rteState: j.eb,
					shouldAllowBodyText: j.gb,
					subreddit: y.r
				}),
				jd = Object(r.b)(Sd, (e, {
					onChange: t,
					onPostFieldValidation: n,
					pageLayer: s
				}) => ({
					onBlur: () => {
						n(e(We(h.vb.BODY, s)))
					},
					onFocus: () => e((e, t) => k.o(t(), g.l.CLICK, g.m.BODY)),
					onRTEStateChange: (n, s) => {
						e(i.e({
							rteState: n,
							isContentChanged: s
						})), t()
					},
					onToggleEditorMode: (t, n) => e(Mi.d(g.h.POST_CREATION, t, n)),
					onTrackToolbarClick: (t, n) => e((e, s) => k.E(s(), t, n)),
					onUpdatePoll: t => e(Object(Di.b)(t))
				}));
			class Pd extends o.a.Component {
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
						editorMode: s,
						markdownBody: r,
						pending: a,
						postCreationFieldErrors: i,
						postRequirements: c,
						rteState: l,
						subreddit: u
					} = this.props, m = i[h.vb.BODY].length > 0, b = !!u && u.isNSFW, f = wd(e, c) ? d.fbt._("Text (required)", null, {
						hk: "E1dIP"
					}) : d.fbt._("Text (optional)", null, {
						hk: "4jfNex"
					}), x = b;
					return s === g.i.RICH_TEXT ? o.a.createElement(cd.a, {
						allowMediaUploads: !x,
						focusableContentRTEClassName: Object(p.a)(Od.a.focusableContent, {
							[Od.a.mHasError]: m,
							[Od.a.mPollBorder]: !!n
						}),
						destSubreddit: t,
						editorType: ld.a.Post,
						initialHeight: this.state.editorHeight,
						rteState: l,
						onBlur: this.props.onBlur,
						onChange: this.props.onRTEStateChange,
						onEditorResize: this.onEditorResize,
						onFocus: this.props.onFocus,
						onSubmit: this.props.onSubmit,
						onSwitchEditorMode: this.onToggleEditorMode,
						placeholderText: f,
						readOnly: a,
						rteRef: this.setRteRef,
						trackToolbarClick: this.props.onTrackToolbarClick
					}) : o.a.createElement(id.a, {
						focusableContentMarkdownClassName: Object(p.a)(Od.a.focusableContent, {
							[Od.a.mHasError]: m,
							[Od.a.mPollBorder]: !!n
						}),
						initialHeight: this.state.editorHeight,
						instanceRef: this.setMarkdownEditorRef,
						onBlur: this.props.onBlur,
						onChange: this.props.onChange,
						onEditorResize: this.onEditorResize,
						onFocus: this.props.onFocus,
						value: r,
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
						subreddit: s
					} = this.props;
					return o.a.createElement("div", null, n && this.renderEditor(), n && e && o.a.createElement("div", {
						className: Od.a.pollCreator
					}, o.a.createElement(kd, {
						className: Od.a.govToggle
					}), this.govType()), o.a.createElement(ae.a, {
						errorModalTitle: s ? Object(ss.c)(s.name) : void 0,
						messages: t[h.vb.BODY]
					}))
				}
				govType() {
					var e;
					const {
						govType: t,
						poll: n,
						subreddit: s
					} = this.props, r = {
						onUpdatePoll: this.props.onUpdatePoll,
						poll: n
					}, a = {
						...r,
						pollType: t
					}, i = {
						...a,
						allowPredictions: this.props.isPredictionCreationAllowed,
						subredditId: null === (e = this.props.subreddit) || void 0 === e ? void 0 : e.id
					};
					switch (t) {
						case me.a.ReplaceTopMod:
							return s ? o.a.createElement(td, yd({}, r, {
								subreddit: s
							})) : o.a.createElement(Fc, yd({}, a, {
								hintTextComponent: o.a.createElement(ad, null)
							}));
						case me.a.GovGeneric:
							return o.a.createElement(Fc, yd({}, a, {
								hintTextComponent: s ? o.a.createElement(Bi, {
									subreddit: s
								}) : o.a.createElement(ad, null)
							}));
						case me.a.Spinoff:
							return s ? o.a.createElement(Jc, yd({}, r, {
								subreddit: s
							})) : o.a.createElement(Fc, yd({}, a, {
								hintTextComponent: o.a.createElement(ad, null)
							}));
						case me.a.Prediction:
							return o.a.createElement(Fc, yd({}, i, {
								hintTextComponent: o.a.createElement(ad, {
									isPrediction: !0
								})
							}));
						case me.a.GA:
						case null:
							return o.a.createElement(Fc, yd({}, i, {
								hintTextComponent: o.a.createElement(ad, null)
							}))
					}
				}
			}
			var Td = Object(y.u)({
					draftId: y.v,
					pageLayer: e => e
				})(jd(Pd)),
				Id = n("./src/reddit/components/PostCreationForm/PostTitle/index.m.less"),
				Nd = n.n(Id);
			const Dd = Object(a.c)({
					canPostAsModerator: j.e,
					disableTitleEdits: e => e.creations.formData.govType === me.a.ReplaceTopMod || e.creations.formData.govType === me.a.Spinoff,
					pending: j.Z,
					postCreationFieldErrors: ut,
					postRequirements: j.nb,
					shouldAllowBodyText: j.gb,
					submissionType: j.a,
					subreddit: y.r,
					title: j.pb
				}),
				Md = Object(r.b)(Dd, (e, {
					onChange: t,
					onPostFieldValidation: n,
					pageLayer: s
				}) => ({
					onBlur: () => {
						n(e(We(h.vb.TITLE, s)))
					},
					onChange: n => {
						e(i.h(n)), t(n)
					},
					onInputFocus: () => e((e, t) => k.o(t(), g.l.CLICK, g.m.TITLE))
				}));
			var Rd = Object(y.u)()(Md(e => {
					const {
						canPostAsModerator: t,
						postRequirements: n,
						postCreationFieldErrors: s,
						subreddit: r
					} = e, a = e.submissionType === h.Ub.POST && !e.shouldAllowBodyText, i = s[h.vb.TITLE].length > 0, c = t ? at.f : n && n.titleTextMaxLength || at.f;
					return o.a.createElement("div", {
						className: Nd.a.container
					}, o.a.createElement("div", {
						className: Nd.a.inputWrapper
					}, o.a.createElement(Fo, {
						className: Object(p.a)(Nd.a.PostTitleInput, {
							[Nd.a.mHasError]: i
						}),
						disabled: e.disableTitleEdits,
						maxLength: c,
						minHeight: a ? 92 : void 0,
						onBlur: e.onBlur,
						onFocus: e.onInputFocus,
						onKeyDown: e.onKeyDown,
						onValueChange: e.onChange,
						placeholder: d.fbt._("Title", null, {
							hk: "j3s6r"
						}),
						readOnly: e.pending,
						value: e.title
					}), o.a.createElement("div", {
						className: Nd.a.charsCounter
					}, e.title.length, "/", c)), o.a.createElement(ae.a, {
						errorModalTitle: r ? Object(ss.c)(r.name) : void 0,
						messages: s[h.vb.TITLE]
					}))
				})),
				Ld = n("./src/reddit/components/PostCreationForm/Prompt/index.tsx");
			const Ad = "g-recaptcha",
				Fd = "image",
				Bd = {
					COMPACT: "compact",
					NORMAL: "normal"
				},
				Ud = () => new Promise(e => {
					if (window.grecaptcha) return e(window.grecaptcha);
					window.grecaptchaOnLoad = () => e(window.grecaptcha);
					const t = document.createElement("script");
					t.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaOnLoad&render=explicit", document.body.appendChild(t)
				});
			class Wd extends o.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				componentDidMount() {
					const {
						callback: e,
						size: t,
						type: n
					} = this.props;
					Ud().then(s => {
						s.render(Ad, {
							callback: e,
							type: n,
							sitekey: It.a.recaptchaSitekey,
							size: t || Bd.COMPACT
						})
					})
				}
				componentWillReceiveProps(e) {
					this.props.submissionPending && !e.submissionPending && Ud().then(e => {
						e.reset()
					})
				}
				render() {
					return o.a.createElement("div", {
						className: "Recaptcha",
						id: Ad
					})
				}
			}
			var Vd = n("./src/reddit/components/PostCreationForm/RecaptchaOverlay/index.m.less"),
				Gd = n.n(Vd);
			const {
				fbt: Hd
			} = n("./node_modules/fbt/lib/FbtPublic.js"), zd = ne.a.div("OverlayWrapper", Gd.a), Kd = ne.a.div("OverlayContent", Gd.a), qd = ne.a.div("ExplanationText", Gd.a);
			var Qd = Object(r.b)(void 0, (e, t) => ({
				onChange: n => {
					e(i.f(n)), t.callback(n)
				}
			}))(e => o.a.createElement(zd, null, o.a.createElement(Kd, null, o.a.createElement(qd, null, Hd._("Ok, one more thing ... you're human, right?", null, {
				hk: "2xDwBB"
			})), o.a.createElement(Wd, {
				submissionPending: !0,
				callback: e.onChange,
				size: Bd.NORMAL,
				type: Fd
			}))));
			const Yd = "POST_CREATION__CONFIRM_SAVE_DRAFT_WITH_LIMITATIONS";

			function Jd(e) {
				const {
					hasEventSchedule: t,
					hasRichPostMedia: n
				} = e;
				let s = d.fbt._("Saving this draft will not save media and the applied event schedule, all other information will be saved", null, {
					hk: "3NIEQF"
				});
				return n && !t ? s = d.fbt._("Saving this draft will not save media, all other information will be saved", null, {
					hk: "2tpNPY"
				}) : !n && t && (s = d.fbt._("Saving this draft will not save the applied event schedule, all other information will be saved", null, {
					hk: "3wm3T3"
				})), o.a.createElement(G.a, {
					bodyText: s,
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
			var Zd = n("./src/reddit/components/PostCreationForm/SubredditChangePrompt/index.m.less"),
				Xd = n.n(Zd);
			const $d = {
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
				el = ne.a.div("Wrapper", Xd.a),
				tl = ne.a.wrapped(le.a, "TitleRow", Xd.a),
				nl = ne.a.div("DetailsContainer", Xd.a),
				sl = ne.a.wrapped(le.a, "ButtonRow", Xd.a),
				ol = ne.a.wrapped(ge.k, "CancelButton", Xd.a),
				rl = ne.a.wrapped(ge.n, "ConfirmButton", Xd.a);
			var al = Object(bn.a)(e => {
					const {
						promptType: t,
						nextSubreddit: n
					} = e, s = $d[t];
					return o.a.createElement(el, null, o.a.createElement(tl, null, s.removePromptTitle()), o.a.createElement(nl, null, s.details(n.name)), o.a.createElement(sl, null, o.a.createElement(rl, {
						onClick: e.onConfirmed
					}, s.removeConfirm()), o.a.createElement(ol, {
						onClick: e.onCanceled
					}, s.removeCancel())))
				}),
				il = n("./src/lib/filterQueryParams/index.ts"),
				cl = n("./src/reddit/models/ScheduledPost/index.ts"),
				dl = n("./src/reddit/selectors/gold/powerups/index.ts"),
				ll = n("./src/reddit/components/PostCreationForm/Tabs/index.m.less"),
				ul = n.n(ll);
			const ml = e => o.a.createElement("button", {
					className: Object(p.a)(ul.a.Tab, e.className, {
						[ul.a.isActive]: e.active
					}),
					disabled: e.disabled,
					onClick: e.onClick
				}, e.children),
				pl = Object(a.a)(j.d, j.e, j.h, j.Q, j.Z, y.r, (e, t) => {
					const n = Object(y.n)(e, t);
					return !!n && Object(dl.t)(e, {
						subredditId: n
					})
				}, (e, t, n, s, o, r, a) => {
					const {
						images: i = !0,
						links: c = !0,
						text: d = !0,
						videos: l = !0
					} = n.allowedPostTypes || {}, u = !!r && r.isNSFW;
					return {
						link: o || !c || s && !Object(cl.g)("links"),
						media: !l && !i && !t || o || u && !a || s && !Object(cl.g)("images"),
						post: !d && !t || o || s && !Object(cl.g)("text"),
						poll: !e || s && !Object(cl.g)("polls")
					}
				}),
				hl = Object(a.c)({
					canPostAsModerator: j.e,
					destSubreddit: j.h,
					govType: e => e.creations.formData.govType,
					hasCreatedPredictionDrafts: gc.a,
					isTabsDisabled: pl,
					pending: j.Z,
					submissionType: j.a,
					subreddit: y.r,
					isImageGalleryCreationEnabled: j.L
				}),
				bl = Object(r.b)(hl, (e, t) => ({
					onChange: (n, s) => {
						e(i.g({
							submissionType: n,
							extra: s
						})), e((e, t) => k.w(t(), n)), e(i.w(n === h.Ub.POLL)), ((e, t, n) => {
							if (!t) return;
							const s = Object(il.a)(t.url, n);
							t.url !== s && e(Object(m.c)(s))
						})(e, t.pageLayer, ["url", "media", "onlyTitle", "text", "selftext"])
					}
				}));
			class fl extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onPostTabClick = () => {
						this.props.isTabsDisabled.post || this.props.onChange(h.Ub.POST, {
							govType: this.props.govType
						})
					}, this.onMediaTabClick = () => {
						this.props.isTabsDisabled.media || this.props.onChange(h.Ub.MEDIA, {
							govType: this.props.govType
						})
					}, this.onLinkTabClick = () => {
						this.props.isTabsDisabled.link || this.props.onChange(h.Ub.LINK_ONLY, {
							govType: this.props.govType
						})
					}, this.onPollTabClick = () => {
						this.props.isTabsDisabled.poll && !this.props.isPredictionCreationAllowed || this.props.onChange(h.Ub.POLL, {
							govType: this.props.govType
						})
					}
				}
				render() {
					const {
						destSubreddit: e,
						hasCreatedPredictionDrafts: t,
						isTabsDisabled: n,
						submissionType: s,
						isImageGalleryCreationEnabled: r,
						isPredictionCreationAllowed: a
					} = this.props, {
						name: i = "",
						allowedPostTypes: c
					} = e, {
						images: l = !0,
						videos: u = !0
					} = c || {};
					let m = d.fbt._({
						"*": "Images & Video",
						_1: "Image & Video"
					}, [d.fbt._plural(r ? 2 : 1)], {
						hk: "3VeQoy"
					});
					return l && !u ? m = r ? d.fbt._("Images", null, {
						hk: "3fSX8N"
					}) : d.fbt._("Image", null, {
						hk: "uFHQ1"
					}) : u && !l && (m = d.fbt._("Video", null, {
						hk: "3w6DFr"
					})), o.a.createElement("div", {
						className: ul.a.Container
					}, o.a.createElement("div", {
						className: ul.a.row
					}, o.a.createElement(ml, {
						active: s === h.Ub.POST,
						disabled: t || n.post,
						onClick: this.onPostTabClick
					}, o.a.createElement(de.a, {
						name: "text_post",
						isFilled: s === h.Ub.POST,
						className: ul.a.Icon
					}), d.fbt._("Post", null, {
						hk: "ozUj2"
					})), o.a.createElement(ml, {
						active: s === h.Ub.MEDIA,
						disabled: t || n.media,
						onClick: this.onMediaTabClick
					}, n.media && o.a.createElement(Ze.a, {
						text: d.fbt._("Images and videos are not allowed in {subreddit name}", [d.fbt._param("subreddit name", `r/${i}`)], {
							hk: "2uC6BP"
						})
					}), o.a.createElement(de.a, {
						name: "image_post",
						isFilled: s === h.Ub.MEDIA,
						className: ul.a.Icon
					}), m), o.a.createElement(ml, {
						active: s === h.Ub.LINK_ONLY,
						disabled: t || n.link,
						onClick: this.onLinkTabClick
					}, o.a.createElement(de.a, {
						name: "link_post",
						isFilled: s === h.Ub.LINK_ONLY,
						className: ul.a.Icon
					}), d.fbt._("Link", null, {
						hk: "1pbEKv"
					})), o.a.createElement(ml, {
						active: s === h.Ub.POLL,
						disabled: t || n.poll && !a,
						onClick: this.onPollTabClick
					}, o.a.createElement(de.a, {
						name: "poll_post",
						isFilled: s === h.Ub.POLL,
						className: ul.a.Icon
					}), n.poll && a ? d.fbt._("Prediction", null, {
						hk: "3NTNLd"
					}) : d.fbt._("Poll", null, {
						hk: "SQdo4"
					}))))
				}
			}
			var gl = Object(y.u)()(bl(fl));

			function xl() {
				return (xl = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Cl = n("./src/reddit/components/PostCreationForm/index.m.less"),
				vl = n.n(Cl);
			const El = ne.a.div("FormContent", vl.a),
				_l = ne.a.wrapped(E.c, "CrosspostBox", vl.a),
				Ol = ne.a.div("FormContainer", vl.a),
				yl = ne.a.div("TabContent", vl.a),
				kl = Object(y.u)({
					draftId: y.v,
					isPostCreationPage: y.F,
					pageLayer: e => e,
					sourcePostId: e => Object(y.W)(e).source_id
				}),
				wl = Object(a.c)({
					submissionType: j.a,
					allowNavigationCallback: S.a,
					contributorRequestPending: e => Object(T.f)(e, x.e.Post),
					discardGoesBack: (e, {
						pageLayer: t
					}) => {
						const n = Object(y.T)(e, {
							pageLayer: t
						});
						return !!n && "/" === n[0]
					},
					draft: P.d,
					draftsCount: I.l,
					editorMode: j.n,
					eventSchedule: j.p,
					includeUserProfile: I.h,
					isChanged: j.F,
					isNameEditable: I.M,
					isPostSubmitEnabled: zn,
					isScheduledPost: j.Q,
					flair: j.r,
					hasError: j.u,
					havePostContent: j.B,
					linkBody: j.S,
					markdownBody: j.T,
					rteBody: j.eb,
					maxDrafts: I.W,
					modalId: w.a,
					needsCaptcha: j.W,
					nextSubreddit: j.X,
					pending: j.Z,
					postRequirements: j.nb,
					sourcePostRoot: j.ib,
					submitMode: j.lb,
					subredditOrProfile: y.p,
					title: j.pb,
					uploads: e => e.uploads,
					isOpenAIPilotV1: yi.e,
					isSubredditHasCollections: (e, t) => {
						const n = Object(y.p)(e, t);
						return !!n && Object(v.m)(e, {
							subredditId: n.id
						})
					}
				});
			class Sl extends o.a.Component {
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
							keyCode: s
						} = e;
						(t || n) && s === b.a.Enter && this.onSubmit()
					}, this.onSubredditChangePromptConfirmed = () => {
						this.props.nextSubreddit && (this.props.onCancelAndRemoveMediaUpload(), this.props.onRedirectToSubreddit(this.props.nextSubreddit))
					}, this.onSubmit = () => {
						const {
							isPostSubmitEnabled: e,
							isScheduledPost: t,
							onSubmit: n
						} = this.props, s = Object(f.c)(f.a.PostComposer);
						e && n(t ? g.r.ScheduledPost : g.r.Post, this.postFieldValidationPending, s)
					}, this.onSaveDraft = async () => {
						const {
							draftId: e,
							draftsCount: t,
							eventSchedule: n,
							maxDrafts: s,
							onToggleModal: o
						} = this.props;
						!e && t >= s ? o(Ld.a.MAX_DRAFTS_MODAL_ID) : n || this.hasRichPostMedia() ? o(Yd) : this.props.onSubmit(g.r.Draft, this.postFieldValidationPending)
					}, this.tryLoadDraft = e => {
						this.props.isChanged ? (this.setState({
							draftToLoad: e
						}), this.props.onToggleModal(Ld.a.LOAD_DRAFT_MODAL_ID)) : (this.props.onToggleModal(g.e), this.onLoadDraft(e))
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
							case Ld.a.LOAD_DRAFT_MODAL_ID:
								this.props.onToggleModal(e), this.onLoadDraft(this.state.draftToLoad);
								break;
							case Ld.a.MAX_DRAFTS_MODAL_ID:
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
					return t === h.Ub.POST && e.isBound && Object(O.j)(e.editorState.getCurrentContent())
				}
				renderActiveForm() {
					switch (this.props.submissionType) {
						case h.Ub.POST:
						case h.Ub.POLL:
							return o.a.createElement(Td, {
								displayPollCreation: this.props.submissionType === h.Ub.POLL,
								isPredictionCreationAllowed: this.props.isPredictionCreationAllowed,
								onChange: this.sendStartTypingInputBodyEvent,
								onPostFieldValidation: this.onPostFieldValidation,
								onSubmit: this.onSubmit
							});
						case h.Ub.MEDIA:
							return o.a.createElement(qa, null);
						case h.Ub.LINK_ONLY:
							return o.a.createElement(Ho, {
								onChange: this.sendStartTypingInputUrlEvent,
								onKeyDown: this.handleKeyDown,
								onPostFieldValidation: this.onPostFieldValidation
							});
						case h.Ub.CROSSPOST: {
							const {
								sourcePostRoot: e
							} = this.props;
							return e && o.a.createElement(_l, {
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
						isOpenAIPilotV1: s,
						isPredictionCreationAllowed: r,
						modalId: a,
						needsCaptcha: i,
						nextSubreddit: c,
						postRequirements: l,
						sourcePostId: u,
						sourcePostRoot: m,
						submissionType: b,
						submitMode: f,
						subredditOrProfile: x
					} = this.props;
					if (b === h.Ub.CROSSPOST) {
						if (!m) return o.a.createElement(C.b, {
							message: d.fbt._("The original post cannot be found", null, {
								hk: "3ieS5B"
							})
						});
						if (!m.isCrosspostable || m.isSponsored) return o.a.createElement(C.a, {
							message: d.fbt._("The original post cannot be crossposted", null, {
								hk: "4hn9ht"
							})
						})
					}
					const v = l && l.guidelinesText && l.guidelinesText.trim() || "";
					return o.a.createElement(Ol, null, o.a.createElement(Ni, {
						submissionType: b,
						submitMode: f
					}), !s && o.a.createElement(o.a.Fragment, null, o.a.createElement(ls, {
						includeUserProfile: n,
						allowCrosspostableOnly: !!u
					}), !!v && o.a.createElement("div", {
						className: vl.a.PostingGuidelines
					}, v)), o.a.createElement(El, null, b !== h.Ub.CROSSPOST && o.a.createElement(gl, {
						isPredictionCreationAllowed: r
					}), o.a.createElement(yl, null, o.a.createElement(Rd, {
						onChange: this.sendStartTypingInputTitleEvent,
						onKeyDown: this.handleKeyDown,
						onPostFieldValidation: this.onPostFieldValidation
					}), this.renderActiveForm()), s && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: vl.a.postToTitle
					}, "Post to"), o.a.createElement(ls, {
						includeUserProfile: n,
						allowCrosspostableOnly: !!u,
						className: rs.a.SubredditRec
					}), !!v && o.a.createElement("div", {
						className: Object(p.a)(vl.a.PostingGuidelines, vl.a.isSubredditRec)
					}, v)), e && o.a.createElement(_.a, null), o.a.createElement(Xn, {
						contributorRequestPending: e,
						draftId: t,
						onCancel: this.props.onDiscardPromptOnNavigationConfirmed,
						onPostFieldValidation: this.onPostFieldValidation,
						onSaveDraft: this.onSaveDraft,
						onSubmit: this.onSubmit,
						sourcePostId: u,
						subredditId: null == x ? void 0 : x.id,
						shouldRenderDivider: !s,
						isOpenAISubRec: s
					}), o.a.createElement(_i, {
						draftId: t
					})), i && o.a.createElement(Qd, {
						callback: this.onRecaptchaSucceeded
					}), a === z && o.a.createElement(q, {
						onAbort: this.onDiscardPromptAbort,
						onDiscardConfirmed: this.onDiscardPromptOnNavigationConfirm,
						onSaveDraft: this.onDiscardPromptSaveDraft,
						submissionType: b
					}), a === g.d && o.a.createElement(q, {
						onAbort: this.onDiscardPromptAbort,
						onDiscardConfirmed: this.onDiscardPromptOnNewPostConfirm,
						onSaveDraft: this.onDiscardPromptSaveDraft,
						submissionType: b
					}), a === g.e && o.a.createElement(Oo, {
						onClose: this.onDraftListClose,
						onLoadDraft: this.tryLoadDraft
					}), a === g.a && x && o.a.createElement(ee.a, {
						onClose: this.onToggleCollectionListModal,
						onSelectCollection: this.onSelectCollection,
						subredditId: x.id
					}), Object(g.v)(a) && x && o.a.createElement($n.a, {
						onCancel: this.props.closeCreateCollectionModal,
						onCollectionCreated: this.onCollectionCreated,
						subredditId: x.id
					}), a === Ld.a.LOAD_DRAFT_MODAL_ID && o.a.createElement(Ld.b, {
						modalId: Ld.a.LOAD_DRAFT_MODAL_ID,
						onCancel: this.onPromptCancel,
						onConfirm: this.onPromptConfirm
					}), a === Ld.a.MAX_DRAFTS_MODAL_ID && o.a.createElement(Ld.b, {
						modalId: Ld.a.MAX_DRAFTS_MODAL_ID,
						onCancel: this.onPromptCancel,
						onConfirm: this.onPromptConfirm
					}), a === Yd && o.a.createElement(Jd, {
						onCancel: this.onToggleCurrentModal,
						onConfirm: this.onConfirmSavingDraftWithLimitations,
						hasEventSchedule: !!this.props.eventSchedule,
						hasRichPostMedia: this.hasRichPostMedia()
					}), c && (a === g.q.ImageWillBeRemoved || a === g.q.VideoWillBeRemovedTooLongForGif || a === g.q.VideoWillBeRemovedMediaNotAllowed || a === g.q.GalleryWillBeRemovedGalleryNotAllowed) && o.a.createElement(al, {
						withOverlay: !0,
						promptType: a,
						nextSubreddit: c,
						onConfirmed: this.onSubredditChangePromptConfirmed,
						onCanceled: this.props.onCancelSubredditChange
					}), o.a.createElement($, null))
				}
			}
			var jl, Pl = kl(Object(r.b)(wl, (e, {
					draftId: t,
					sourcePostId: n,
					pageLayer: s
				}) => ({
					onLoadDraft: t => e(A.q(t)),
					onSubmit: (o, r, a) => e(R.a(o, {
						draftId: t || void 0,
						pageLayer: s,
						postFieldValidationPending: r,
						sourcePostId: n,
						correlationId: a
					})),
					onDiscardPromptOnCreatePostConfirmed: () => {
						e(i.p(!1, s))
					},
					onDiscardPromptOnNavigationConfirmed: (t, n) => {
						e(t ? Object(m.a)() : n ? Object(m.b)(n.url) : Object(m.b)("/"))
					},
					onExternalAccountsDataRequested: () => e(D.o()),
					onRedirectToSubreddit: n => e(L.a(n, t)),
					onCancelSubredditChange: () => {
						e(i.y("")), e(L.e())
					},
					onCancelAndRemoveMediaUpload: () => {
						e(Object(i.d)({
							items: [],
							selectedKey: null
						})), e(F.j(M.a, !0))
					},
					onClearErrors: (t, n) => t && e(i.i(n)),
					onRequestDraftList: () => e(A.p()),
					onSetDestCollection: t => e(L.d(t)),
					onStartTypingInput: t => e((e, n) => k.o(n(), g.l.TYPE, t)),
					onToggleIsChanged: t => e(i.s(t)),
					onToggleModal: t => e(i.y(t)),
					onTrackDiscardButtonClick: () => e((e, t) => k.d(t())),
					onUnmount: () => e((e, t) => {
						e(F.j(M.a, !0)), e(F.i(g.n, !0))
					}),
					onUploadPendingThumbnails: t => e(M.f(t)),
					startChangeUsernameFlow: () => e(Object(N.f)())
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
						const [e, t] = o.a.useState(!1), n = Object(r.d)(), s = Object(y.eb)(), a = Object(r.e)(e => Object(y.r)(e, {
							pageLayer: s
						})), i = Object(r.e)(e => a && Object(he.h)(e, {
							subredditId: a.id
						})), c = Object(r.e)(pn.o);
						return o.a.useEffect(() => a && a.allowPredictions ? i ? t(!0) : c ? void Promise.resolve(n(Object(an.h)(a.id))).then(e => t(Boolean(e))) : t(!1) : t(!1), [a, c]), e
					}();
					return o.a.createElement(jl, xl({}, e, {
						isPredictionCreationAllowed: t
					}))
				}))),
				Tl = n("./src/reddit/components/PostingSidebar/index.tsx"),
				Il = n("./src/reddit/layout/page/Listing/index.tsx"),
				Nl = n("./src/lib/makePostCreationPageKey/index.ts"),
				Dl = n("./src/reddit/helpers/trackers/screenview.ts"),
				Ml = n("./src/telemetry/models/Timer.ts");
			const Rl = Object(a.c)({
					destSubreddit: j.h,
					user: I.k
				}),
				Ll = Object(r.b)(Rl, (e, {
					pageLayer: t
				}) => ({
					onResetForm: () => e(i.p(!1, t))
				})),
				Al = Object(y.u)({
					draftId: y.v,
					pageLayer: e => e
				});
			class Fl extends s.Component {
				componentDidMount() {
					document.documentElement.scrollTop = document.body.scrollTop = 0;
					const e = this.props.pageLayer;
					if (e) {
						const t = Object(Nl.a)(e.urlParams);
						te.c.has(t) && this.props.sendEvent(Object(Dl.l)(t, Ml.TimerType.InApp, te.c.end(t)))
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
						if (!t) return o.a.createElement(C.b, null);
						if (Object(fs.e)(t).toLowerCase() !== e.name.toLowerCase()) return o.a.createElement(C.a, null)
					}
					return o.a.createElement(Il.a, {
						redditStyle: !0,
						disableFullscreen: !0,
						navBar: o.a.createElement("div", null),
						content: o.a.createElement(o.a.Fragment, null, o.a.createElement(c.a, null), o.a.createElement(Pl, null)),
						sidebar: o.a.createElement(Tl.a, null)
					})
				}
			}
			t.default = Al(Ll(Object(rn.c)(Fl)))
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s, o = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(s || (s = {}));
			const r = {
				status: s.NotFetched
			};
			t.b = (e = r, t) => {
				switch (t.type) {
					case o.a:
						if (e.status === s.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: s,
									...o
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: o
									}
								}
							}
						}
						return e;
					case o.e:
						if (e.status === s.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: s,
									...o
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: o
									}
								}
							}
						}
						return e;
					case o.b:
						return {
							error: t.payload.error, status: s.Failure
						};
					case o.c:
						return {
							data: t.payload, status: s.Fetched
						};
					case o.d:
						return {
							status: s.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, o = n("./src/lib/constants/specialMembership.ts"),
				r = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				a = n("./src/reddit/helpers/economics/sortBadges.ts"),
				i = n("./src/reddit/models/Badge/index.ts"),
				c = n("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(s || (s = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, n, s) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(o => {
						let r;
						(r = e.placement ? e.placement === i.a.First ? s[c.a.Loyalty][o] : s[c.a.Achievement][o] : l(e) ? s[c.a.Cosmetic][c.c.MyBadges][o] : s[c.a.Cosmetic][c.c.Gallery][o]) && (l(e) ? n.has(e.id) && r.unlocked.push(e) : t.has(e.id) || r.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						s = parseInt(t.price || "0");
					return n === s ? Object(a.b)(e, t) : n - s
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === o.a).map(m).sort((e, n) => {
					const s = t[e.id],
						o = t[n.id];
					return Object(a.b)(s, o)
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
					const s = e.collections[n],
						o = {
							description: s.description,
							highlight: s.extra && s.extra.style && s.extra.style.color,
							id: s.id,
							locked: [],
							title: s.title,
							unlocked: []
						};
					t[c.a.Loyalty][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][n] = {
						...o,
						locked: [],
						unlocked: []
					}
				});
				const n = new Set;
				e.userOwnedBadges.forEach(t => {
					const s = e.badges[t];
					s && n.add(s.type)
				});
				const s = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), n, s, t), u(Object.keys(e.products).map(t => e.products[t]), n, s, t), {
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
					case r.a: {
						const {
							subredditId: n
						} = t.payload, o = e[n];
						return o && o.status === s.Fetched ? {
							...e,
							[n]: {
								...o,
								data: {
									...o.data
								},
								raw: {
									...o.raw
								}
							}
						} : e
					}
					case r.h: {
						const {
							subredditId: n
						} = t.payload, o = e[n];
						return o && o.status === s.Fetched ? {
							...e,
							[n]: {
								...o,
								data: {
									...o.data,
									subscription: {
										...o.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...o.raw,
									subscription: {
										...o.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case r.i: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: {
								raw: n,
								data: h(n),
								status: s.Fetched
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
			var s, o, r = n("./node_modules/redux/es/redux.js"),
				a = n("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(s || (s = {})),
			function(e) {
				e[e.BACKGROUND = 0] = "BACKGROUND", e[e.ACCESSORY_BACK = 1] = "ACCESSORY_BACK", e[e.HAIR_BACK = 2] = "HAIR_BACK", e[e.BODY_BOTTOM = 3] = "BODY_BOTTOM", e[e.BODY = 4] = "BODY", e[e.ACCESSORY = 5] = "ACCESSORY", e[e.FACE_LOWER = 6] = "FACE_LOWER", e[e.FACE_UPPER = 7] = "FACE_UPPER", e[e.HAIR = 8] = "HAIR", e[e.HEAD_ACCESSORY = 9] = "HEAD_ACCESSORY"
			}(o || (o = {}));
			const i = {
				id: "",
				csrf_token: "",
				snoovatar: null,
				websocketsUrls: {
					renderer: "",
					download: ""
				},
				capabilities: [s.PREMIUM],
				hasActiveClosetSubscription: !1
			};
			var c = (e = i, t) => {
				switch (t.type) {
					case a.b:
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
			var h = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				b = n("./src/reddit/actions/modal.ts"),
				f = n("./src/reddit/constants/modals.ts");
			var g = (e = null, t) => {
				var n;
				switch (t.type) {
					case h.o:
						const {
							avatarMarketingEvents: s
						} = t.payload;
						return s ? function(e) {
							if (!e) return d;
							const t = d;
							return e.forEach(e => {
								const {
									startsAt: n,
									endsAt: s,
									webAssetUrls: o,
									tags: r
								} = e, a = n && new Date(n) <= new Date, i = !!s && new Date(s) < new Date, c = !!a && !i, d = r.includes(m);
								if (r && r.includes(l) && !d) {
									const {
										text: n,
										id: s
									} = e, a = o || null, i = p(r);
									t && (t.quickCreateV1 = {
										...i,
										id: s,
										text: n,
										active: c && !!a,
										webAssetUrls: a
									})
								}
								if (r && r.includes(u) && !d) {
									const e = o || null;
									t && (t.marketingEvent = {
										active: c && !!e,
										assetUrls: e
									})
								}
							}), t
						}(s) : d;
					case b.c:
						return (null === (n = t.payload) || void 0 === n ? void 0 : n.id) === f.a.SNOOVATAR_MODAL ? d : e;
					default:
						return e
				}
			};
			var x = (e = null, t) => {
				switch (t.type) {
					case a.a: {
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
			t.a = Object(r.c)({
				marketing: g,
				avatarUser: c,
				randomAvatar: x
			})
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				o = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/economics/claims/constants.ts")),
				r = n("./src/reddit/actions/economics/me/constants.ts");
			const a = {};
			var i = (e = a, t) => {
					switch (t.type) {
						case r.a: {
							const n = t.payload.claimPoints || {},
								s = Object.keys(n).reduce((t, s) => (t[s] = {
									...e[s],
									availableClaims: n[s]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var n;
								(null === (n = e[t]) || void 0 === n ? void 0 : n.isClaiming) && (s[t] = s[t] || {
									availableClaims: []
								}, s[t].isClaiming = !0)
							}), s
						}
						case o.b:
						case o.a:
							const {
								subredditId: n
							} = t.payload;
							return {
								...e, [n]: {
									...e[n],
									isClaiming: t.type === o.b
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
				var t, n, s, o, r;
				const a = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					i = null == a ? void 0 : a.contracts,
					c = null == i ? void 0 : i.unlocked,
					d = null !== (s = null === (n = e.walletProvider) || void 0 === n ? void 0 : n.provider) && void 0 !== s ? s : e.provider,
					u = !!(null === (o = e.walletProvider) || void 0 === o ? void 0 : o.inTransition),
					m = (null == c ? void 0 : c.decimals) || 0,
					p = "1" + "0".repeat(m);
				return {
					blockchainProvider: d,
					contractAddress: (null == c ? void 0 : c.address) || "",
					contracts: i,
					decimals: m,
					displayConversion: p,
					images: e.images || l,
					inTransition: u,
					name: e.name,
					nomenclature: null === (r = e.extra) || void 0 === r ? void 0 : r.nomenclature,
					polls: e.polls,
					symbol: (null == c ? void 0 : c.token) || ""
				}
			}
			var m = (e = d, t) => {
				switch (t.type) {
					case c.a: {
						const {
							subredditId: n,
							meta: s
						} = t.payload;
						return {
							...e,
							[n]: u(s)
						}
					}
					default:
						return e
				}
			};
			const p = {};
			var h = (e = p, t) => {
				switch (t.type) {
					case c.n: {
						const {
							subredditId: n,
							wallets: s
						} = t.payload, o = Object.keys(s).reduce((t, o) => {
							return {
								...t,
								[o]: {
									...e[o] || {},
									[n]: s[o]
								}
							}
						}, {});
						return {
							...e,
							...o
						}
					}
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				claims: i,
				points: m,
				publicWallets: h
			})
		},
		"./src/reddit/reducers/features/userFlair/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/omit.js"),
				o = n.n(s),
				r = n("./src/reddit/actions/grantUserFlair/constants.ts"),
				a = n("./src/reddit/actions/modQueue/constants.ts"),
				i = n("./src/reddit/actions/pages/constants.ts"),
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
					case i.b:
					case i.f:
					case u.k:
						return {
							...e, ...t.payload.userFlair
						};
					case a.i:
					case a.f:
					case a.m:
					case a.p:
					case a.v: {
						const {
							response: n
						} = t.payload, {
							userFlair: s
						} = n, o = {
							...e
						};
						return Object.keys(s).forEach(e => {
							o[e] || (o[e] = s[e])
						}), o
					}
					case u.r: {
						const {
							subredditId: n,
							applied: s,
							displaySettings: o
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								applied: s,
								displaySettings: o
							}
						}
					}
					case r.h: {
						const {
							subredditId: n,
							applied: s
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								applied: s
							}
						}
					}
					case u.j: {
						const {
							subredditId: n,
							isEnabled: s
						} = t.payload, o = {
							...e[n].displaySettings,
							isEnabled: s
						};
						return {
							...e,
							[n]: {
								...e[n],
								displaySettings: o
							}
						}
					}
					case u.d: {
						const {
							subredditId: n,
							canAssignOwn: s
						} = t.payload, o = {
							...e[n].permissions,
							canAssignOwn: s
						};
						return {
							...e,
							[n]: {
								...e[n],
								permissions: o
							}
						}
					}
					case u.q: {
						const n = t.payload,
							s = e[n.subredditId],
							o = e[n.subredditId].templates,
							r = e[n.subredditId].templateIds,
							a = {
								...o,
								[n.template.id]: n.template
							},
							i = [...r];
						return i.includes(n.template.id) || i.push(n.template.id), {
							...e,
							[n.subredditId]: {
								...s,
								templates: a,
								templateIds: i
							}
						}
					}
					case u.g: {
						const n = t.payload,
							s = e[n.subredditId],
							r = e[n.subredditId].templates,
							a = e[n.subredditId].templateIds,
							i = o()(r, n.templateId),
							c = a.filter(e => e !== n.templateId);
						return {
							...e,
							[n.subredditId]: {
								...s,
								templates: {
									...i
								},
								templateIds: c
							}
						}
					}
					case u.m:
					case u.l: {
						const n = t.payload,
							s = e[n.subredditId];
						return {
							...e,
							[n.subredditId]: {
								...s,
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
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			}));
			const s = (e, {
					post: t
				}) => {
					const n = t.belongsTo.id;
					if (!n) return null;
					const s = e.authorFlair.models[n];
					if (!s) return null;
					const o = t.author;
					return o && s[o] || null
				},
				o = (e, {
					subredditId: t
				}) => {
					const n = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!n) return null;
					if (!t) return null;
					const s = e.authorFlair.models[t];
					return s ? s[n] : null
				},
				r = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/avatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(s.a)({
				features: {
					avatar: o.a
				}
			});
			const r = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.avatarUser
				},
				a = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.avatarUser.csrf_token
				},
				i = e => {
					var t, n;
					return (null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.randomAvatar) || null
				}
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
				c = Object(s.a)(a.d, e => {
					var t, n, s;
					const o = null === (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === s ? void 0 : s.marketingEvent;
					return (null == o ? void 0 : o.active) ? (null == o ? void 0 : o.assetUrls) && (null == o ? void 0 : o.assetUrls[0]) : null
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
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				r = n("./src/reddit/endpoints/governance/crypto.ts"),
				a = n("./src/lib/initializeClient/installReducer.ts"),
				i = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(a.a)({
				features: {
					crypto: i.a
				}
			});
			const c = (e, t) => {
				var n, s, o;
				return t ? null === (o = null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === s ? void 0 : s.points) || void 0 === o ? void 0 : o[t] : void 0
			};

			function d() {
				const e = Object(o.eb)(),
					t = Object(s.e)(t => Object(o.r)(t, {
						pageLayer: e
					})),
					n = Object(s.e)(e => c(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: n
				}
			}
			const l = (e, t) => {
				var n;
				const s = null === (n = c(e, t)) || void 0 === n ? void 0 : n.blockchainProvider;
				return s === r.a.Ethereum || s === r.a.Rinkeby || s === r.a.EthTraderEthereum || s === r.a.EthTraderRinkeby || s === r.a.ArbitrumRinkeby
			}
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
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts");
			const i = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.sb,
					experimentEligibilitySelector: a.e
				}), e => e === o.W.Enabled),
				c = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.tb,
					experimentEligibilitySelector: a.e
				}), e => e === o.X.Enabled),
				d = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.ub,
					experimentEligibilitySelector: a.e
				}), e => e === o.Y.Enabled),
				l = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.vb,
					experimentEligibilitySelector: a.e
				}), e => e === o.Z.Enabled)
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => Object(o.c)(e, {
				experimentName: s.zd,
				experimentEligibilitySelector: o.a
			}) === s.Ed.Enabled
		},
		"./src/reddit/selectors/gild.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "f", (function() {
				return r
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			const s = e => e.gild.gildModalThingId,
				o = e => e.gild.correlationId || void 0,
				r = e => e.gild.isAnonymous,
				a = e => e.gild.isIframed,
				i = e => e.gild.message,
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
				return h
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/models/Gold/Award.ts"),
				r = n("./src/reddit/selectors/commentSelector.ts"),
				a = n("./src/reddit/selectors/gold/giveAwards.ts"),
				i = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				d = n("./src/reddit/selectors/userPrefs.ts");
			const l = [32, 48, 64, 128],
				u = (e, t, n) => {
					const s = t ? e[`staticIcon${n}`] : e[`icon${n}`];
					return (null == s ? void 0 : s.url) ? s.url : t ? e.staticIcon.url : e.icon.url
				},
				m = ({
					award: e,
					size: t,
					prefersReducedMotion: n,
					postOrComment: s
				}) => e.awardSubType === o.d.Group ? (({
					award: e,
					size: t,
					prefersReducedMotion: n,
					postOrComment: s
				}) => {
					let o = e;
					if ((null == s ? void 0 : s.awardCountsById) && s.awardCountsById[e.id] && e.tiers) {
						const t = s.awardCountsById[e.id];
						o = e.tiers.reduce((e, n) => t >= n.awardingsRequired ? n : e)
					}
					return u(o, n, t)
				})({
					award: e,
					size: t,
					prefersReducedMotion: n,
					postOrComment: s
				}) : u(e, n, t),
				p = Object(s.a)((e, {
					awards: t,
					minSize: n,
					postOrCommentId: s
				}) => {
					const o = Object(d.c)(e),
						a = l.find(e => e >= n),
						c = s ? Object(i.H)(e, {
							postId: s
						}) || Object(r.b)(e, {
							commentId: s
						}) : void 0;
					return t.reduce((e, t) => (t && (e[t.id] = m({
						award: t,
						size: a,
						prefersReducedMotion: o,
						postOrComment: c
					})), e), {})
				}),
				h = (e, {
					award: t,
					minSize: n,
					postOrCommentId: s
				}) => t ? p(e, {
					awards: [t],
					minSize: n,
					postOrCommentId: s
				})[t.id] : void 0,
				b = (e, {
					minSize: t,
					userName: n
				}) => {
					const s = Object(c.nb)(e, {
						userName: n
					});
					if (s && s.awardedLastMonth && s.awardedLastMonth.topAward) return h(e, {
						award: s.awardedLastMonth.topAward,
						minSize: t
					})
				},
				f = e => {
					const t = Object(a.b)(e),
						n = Object(a.a)(e);
					return h(e, {
						award: t,
						postOrCommentId: n || void 0,
						minSize: 512
					})
				}
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = e => e.gild.selectedAward,
				o = e => e.gild.gildedThing
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "q", (function() {
				return a
			})), n.d(t, "s", (function() {
				return i
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
				return h
			})), n.d(t, "o", (function() {
				return b
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "l", (function() {
				return x
			})), n.d(t, "w", (function() {
				return C
			})), n.d(t, "x", (function() {
				return v
			})), n.d(t, "v", (function() {
				return E
			})), n.d(t, "y", (function() {
				return _
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "i", (function() {
				return k
			})), n.d(t, "k", (function() {
				return w
			})), n.d(t, "j", (function() {
				return S
			})), n.d(t, "m", (function() {
				return j
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "d", (function() {
				return T
			}));
			var s = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(o.a)({
				features: {
					goldPurchase: r.a
				}
			});
			const a = e => e.features.goldPurchase.purchaseModal.activePage,
				i = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				c = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.showModal,
				l = e => e.features.goldPurchase.purchaseModal.packageId,
				u = e => e.features.goldPurchase.packageOfferModal.packageId,
				m = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				p = e => {
					const t = Object(s.l)(e),
						n = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && n && t.find(e => e.mobileId === n) || null
				},
				h = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				b = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				f = e => e.features.goldPurchase.payment.paymentMethod,
				g = e => e.features.goldPurchase.payment.cardName,
				x = e => e.features.goldPurchase.payment.postalCode,
				C = e => e.features.goldPurchase.payment.savedCardsPending,
				v = e => e.features.goldPurchase.payment.savedCards,
				E = e => e.features.goldPurchase.payment.rememberCard,
				_ = e => e.features.goldPurchase.payment.useSavedCard,
				O = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				y = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				k = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				w = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				S = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				j = e => e.features.goldPurchase.payment.stripeToken.pending,
				P = e => e.features.goldPurchase.payment.paypal.passthrough,
				T = e => e.features.goldPurchase.payment.paypal.errorMessage
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
		"./src/reddit/selectors/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return a
			})), n.d(t, "g", (function() {
				return i
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
				return x
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "r", (function() {
				return v
			})), n.d(t, "m", (function() {
				return E
			})), n.d(t, "n", (function() {
				return _
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "o", (function() {
				return k
			})), n.d(t, "b", (function() {
				return w
			}));
			var s = n("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				o = n("./src/reddit/models/Flair/index.ts"),
				r = n("./src/reddit/models/ScheduledPost/index.ts");
			const a = (e, {
					subredditId: t
				}) => ((e, {
					subredditId: t,
					type: n
				}) => !!e.posts.scheduledPosts[n].models[t])(e, {
					subredditId: t,
					type: r.f.standalonePosts
				}),
				i = (e, {
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
				h = (e, {
					subredditId: t
				}) => (e.posts.scheduledPosts.standalonePosts.postOrder[t] || p).filter(n => !!(e.posts.scheduledPosts.standalonePosts.models[t] || m)[n]).map(n => e.posts.scheduledPosts.standalonePosts.models[t][n]),
				b = (e, {
					subredditId: t
				}) => (e.posts.scheduledPosts.recurringPosts.postOrder[t] || p).filter(n => !!(e.posts.scheduledPosts.recurringPosts.models[t] || m)[n]).map(n => e.posts.scheduledPosts.recurringPosts.models[t][n]),
				f = (e, {
					subredditId: t,
					scheduledPostId: n,
					type: s
				}) => {
					return (e.posts.scheduledPosts[s].models[t] || m)[n] || void 0
				},
				g = (e, {
					subredditId: t,
					scheduledPostId: n
				}) => f(e, {
					subredditId: t,
					scheduledPostId: n,
					type: r.f.standalonePosts
				}),
				x = (e, {
					subredditId: t,
					scheduledPostId: n
				}) => {
					const s = f(e, {
						subredditId: t,
						scheduledPostId: n,
						type: r.f.recurringPosts
					});
					return s || s
				},
				C = (e, {
					subredditId: t,
					scheduledPostId: n
				}) => g(e, {
					subredditId: t,
					scheduledPostId: n
				}) || x(e, {
					subredditId: t,
					scheduledPostId: n
				}),
				v = e => e.creations.formData.scheduledPostId,
				E = ({
					scheduledPost: e
				}) => (({
					flair: e,
					isNsfw: t,
					isSpoiler: n,
					isOriginalContent: r
				}) => {
					const a = [];
					return r && a.push({
						text: "OC",
						type: o.f.Oc
					}), e && a.push(...Object(s.b)(e)), n && a.push({
						text: "spoiler",
						type: o.f.Spoiler
					}), t && a.push({
						text: "nsfw",
						type: o.f.Nsfw
					}), a
				})(e),
				_ = ({
					scheduledPost: e
				}) => {
					const t = E({
							scheduledPost: e
						}),
						n = t.find(e => e.type === o.f.Richtext);
					return n || (t.find(e => e.type === o.f.Text) || null)
				},
				O = e => e.posts.scheduledPosts[r.f.recurringPosts].editModal.scheduledPostId,
				y = e => e.posts.scheduledPosts[r.f.recurringPosts].editModal.subredditId,
				k = e => e.posts.scheduledPosts.api.pendingUpdate,
				w = e => e.posts.scheduledPosts.api.creationToken
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
				return h
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/models/Flair/index.ts"),
				r = n("./src/reddit/selectors/gold/powerups/index.ts"),
				a = n("./src/reddit/selectors/moderatorPermissions.ts"),
				i = n("./src/lib/initializeClient/installReducer.ts"),
				c = n("./src/reddit/reducers/features/userFlair/index.ts");
			Object(i.a)({
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
				}) => e.features.userFlair[t] ? e.features.userFlair[t].displaySettings.position : o.b.Right,
				m = Object(s.a)((e, {
					subredditId: t
				}) => {
					const n = d(e, {
						subredditId: t
					});
					if (n && n.displaySettings && n.permissions) return {
						type: o.d.UserFlair,
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
						s = m(e, {
							subredditId: t
						}),
						o = d(e, {
							subredditId: t
						});
					if (!n || !s || !o) return !1;
					if (o.applied) return !0;
					const r = Object(a.g)(e, {
							subredditId: t
						}),
						{
							canUserChange: i
						} = s.permissions;
					return !!o.templateIds.find(e => {
						return !o.templates[e].modOnly || r
					}) && i
				},
				h = (e, {
					subredditId: t
				}) => {
					if (!t) return !1;
					const n = p(e, {
							subredditId: t
						}),
						s = Object(r.h)(e, {
							subredditId: t
						});
					return n || s
				}
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
				r = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== s.Lb.MODERATION_PAGES),
				a = e => e.user.prefs.reduceAnimationsFromAwards
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				o = n("./src/lib/fastdom/index.ts"),
				r = n("./src/reddit/actions/jsApi.ts");
			const a = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				i = "jsapi.consumer",
				c = "/r/redesign/wiki/jsapi";
			var d = n("./src/reddit/constants/jsapiEvents.ts");
			const l = 100;
			const u = new class {
				constructor() {
					if (this.queue = [], this.active = !1, "undefined" == typeof document) return;
					let e;
					this.store = new Promise(t => e = t), this.attachStore = t => e(t);
					const t = document.querySelectorAll(`meta[name="${i}"]`);
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(r.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(d.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === i && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(a, `${s.a.redditUrl}${c}`, e))
					} catch (n) {
						return void console.error(a, `${s.a.redditUrl}${c}`, n)
					}
					this.store.then(e => {
						e.dispatch(r.b(t || "")), this.fireEventsQueue()
					})
				}
				publish(e, t, n) {
					const s = {
						name: e,
						props: t,
						element: n
					};
					this.queue.push(s), this.queue.length > l && this.queue.shift(), this.active && this.fireEvent(s)
				}
				fireEvent(e) {
					e.element.dispatchEvent(new CustomEvent(e.name, {
						detail: e.props
					}))
				}
				fireEventsQueue() {
					o.a.read(() => {
						for (let e = 0; e < this.queue.length; e++) {
							const t = this.queue[e];
							this.fireEvent(t)
						}
					})
				}
			};
			t.a = u
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/CreateScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"1e0a4bfe5ac9"}')
		},
		"./src/redditGQL/operations/PersonalizedYearInReview.json": function(e) {
			e.exports = JSON.parse('{"id":"3a93daf526ed"}')
		},
		"./src/redditGQL/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/redditGQL/operations/SubredditScheduledPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"de72339b938a"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		},
		"./src/redditGQL/operations/UpdateScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"f5276d63e133"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostCreation.d94f6194ee064307d373.js.map