// https://www.redditstatic.com/desktop2x/ShortcutWrapper.448e137faac02378b0a8.js
// Retrieved at 8/3/2020, 10:10:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ShortcutWrapper"], {
		"./src/reddit/components/Comments/helpers/hiddenComments.ts": function(t, e, s) {
			"use strict";
			s.d(e, "b", (function() {
				return c
			})), s.d(e, "a", (function() {
				return n
			})), s.d(e, "c", (function() {
				return d
			}));
			let o = {};

			function c(t) {
				return t in o
			}

			function n(t) {
				o[t] = !0
			}

			function d() {
				o = {}
			}
		},
		"./src/reddit/components/ShortcutWrapper/index.tsx": function(t, e, s) {
			"use strict";
			s.r(e);
			var o = s("./node_modules/lodash/noop.js"),
				c = s.n(o),
				n = s("./node_modules/prop-types/index.js"),
				d = s.n(n),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/react-shortcuts/lib/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/shortcuts.ts");
			var b = s("./src/reddit/selectors/structuredStyles.ts");
			const O = {
					[u.c.OpenIndex]: {
						osx: ["cmd + ?", "?"],
						windows: ["ctrl + ?", "?"],
						linux: ["ctrl + ?", "?"],
						other: ["ctrl + ?", "?"]
					},
					[u.c.Close]: "esc",
					[u.c.Konami]: "up up down down left right left right b a enter"
				},
				h = {
					[u.c.Upvote]: "a",
					[u.c.Downvote]: "z",
					[u.c.Save]: "s",
					[u.c.Hide]: "h",
					[u.c.OpenLink]: "l"
				},
				x = {
					[u.c.CollapseOrLoad]: "enter",
					[u.c.NextComment]: "j",
					[u.c.PrevComment]: "k",
					[u.c.Reply]: "r"
				};
			var j = {
					[u.d.CommentPage]: Object.assign(Object.assign(Object.assign({}, O), h), x),
					[u.d.Global]: Object.assign({}, O),
					[u.d.Lightbox]: Object.assign(Object.assign(Object.assign(Object.assign({}, O), h), x), {
						[u.c.NextPost]: "n",
						[u.c.PrevPost]: "p"
					}),
					[u.d.Listing]: Object.assign(Object.assign(Object.assign({}, O), h), {
						[u.c.OpenLightbox]: "enter",
						[u.c.NextPost]: "j",
						[u.c.PrevPost]: "k",
						[u.c.Expando]: "x",
						[u.c.NewPost]: "c",
						Reserved: ["n", "p", "r"]
					}),
					[u.d.Modqueue]: Object.assign(Object.assign(Object.assign({}, O), h), {
						[u.c.OpenLightbox]: "enter",
						[u.c.NextPost]: "j",
						[u.c.PrevPost]: "k",
						[u.c.Expando]: "x",
						[u.c.NewPost]: "c"
					})
				},
				v = s("./node_modules/react-router-redux/es/index.js"),
				g = s("./src/reddit/actions/comment/index.ts"),
				C = s("./src/reddit/actions/modal.ts"),
				f = s("./src/reddit/actions/post.ts"),
				P = s("./src/reddit/components/Comments/helpers/hiddenComments.ts"),
				y = s("./src/reddit/constants/elementIds.ts"),
				I = s("./src/reddit/constants/modals.ts"),
				w = s("./src/reddit/constants/postLayout.ts"),
				T = s("./src/reddit/helpers/overlay/index.ts"),
				_ = s("./src/reddit/helpers/trackers/lightbox.ts"),
				L = s("./src/reddit/helpers/trackers/shortcuts.ts"),
				k = s("./src/reddit/selectors/listings.ts"),
				E = s("./src/reddit/selectors/platform.ts"),
				N = s("./src/reddit/actions/shortcuts/active.ts"),
				S = s("./src/reddit/actions/shortcuts/utils.ts");
			const A = (t, e) => async (s, o, c) => {
				let {
					apiContext: n
				} = c;
				const d = o(),
					i = d.shortcuts.activePostId,
					r = d.listings.activeKey,
					a = d.listings.postOrder.ids[r];
				if (!i || a && a.indexOf(i) < 0) {
					const t = a[0];
					return s(Object(N.b)(t)), void Object(S.a)(t)
				}
				let l, m = i;
				do {
					if (!(l = Object(k.b)(d, {
							postId: m
						})) || !l.nextPost) return;
					m = l.nextPost.id
				} while (d.posts.models[m].hidden);
				d.shortcuts.namespace === u.d.Lightbox ? (D(s, l.nextPost), t(e ? _.b(i, "next_post", !0) : L.l(m))) : (s(Object(N.b)(m)), Object(S.a)(m), t(L.k(m)))
			}, K = t => async (e, s, o) => {
				let {
					apiContext: c
				} = o;
				const n = s(),
					d = Object(S.c)(n);
				if (!d) return;
				let i;
				const r = n.shortcuts.activeCommentId;
				if (r && r !== n.commentsPage.keyToHeadCommentId[d]) {
					const t = n.commentsPage.keyToCommentThreadLinkSets[d];
					for (i = t[r].prev.id; P.b(i);) i = t[i].prev.id
				} else {
					const t = n.commentsPage.keyToHeadCommentId[d];
					if (!t || r === t) return;
					i = t
				}
				e(Object(N.a)(i)), Object(S.a)(i), t(L.n(i))
			}, D = (t, e) => {
				Object(S.b)(u.b), t(Object(N.b)(e.id)), document.body.style.overflow = "", Object(S.a)(e.id), document.body.style.overflow = "hidden", t(Object(T.a)(e.permalink));
				const s = document.getElementById(y.d);
				s && s.scrollTo(0, 0)
			};
			var R = s("./src/reddit/actions/shortcuts/close.ts");
			const H = {
					[u.c.Close]: R.a,
					[u.c.CollapseOrLoad]: t => async (e, s, o) => {
						let {
							apiContext: c
						} = o;
						const n = s(),
							d = n.shortcuts.activeCommentId,
							i = Object(S.c)(n);
						if (i && d) {
							if (n.comments.models[d]) e(g.nb({
								commentId: d,
								commentsPageKey: i,
								scrollToAndRemeasure: () => null
							}));
							else if (n.continueThreads.models[d]) {
								const t = n.continueThreads.models[d].parentId,
									s = n.comments.models[t].permalink;
								e(Object(v.b)(s))
							} else e(K(t)), e(g.Z(i, d));
							t(L.b(d))
						}
					},
					[u.c.Downvote]: t => async (e, s, o) => {
						let {
							apiContext: c
						} = o;
						const n = s(),
							{
								activeCommentId: d,
								activePostId: i
							} = n.shortcuts,
							r = Object(S.c)(n);
						r && (d && !n.comments.collapsed[r][d] ? (e(g.T(d)), t(L.e(d))) : i && (e(f.w(i)), t(L.f(i))))
					},
					[u.c.Expando]: t => async (e, s, o) => {
						let {
							apiContext: c
						} = o;
						const n = s(),
							d = n.shortcuts.activePostId,
							i = w.b[n.user.prefs.layout];
						if (d && (i === w.g.Compact || i === w.g.Classic)) {
							const s = n.posts.models[d].crosspostRootId;
							(n.posts.models[d].media || s && n.posts.models[s] && n.posts.models[s].media) && (e(f.x({
								postId: d
							})), t(L.g(d)))
						}
					},
					[u.c.Hide]: t => async (e, s, o) => {
						let {
							apiContext: c
						} = o;
						const n = s(),
							d = n.shortcuts.activePostId;
						d && !n.posts.models[d].isSponsored && (e(f.V(d, !n.posts.models[d].hidden, n.shortcuts.namespace === u.d.Lightbox, !0)), e(A(t)), t(L.i(d)))
					},
					[u.c.NextComment]: t => async (e, s, o) => {
						let {
							apiContext: c
						} = o;
						const n = s(),
							d = Object(S.c)(n);
						if (!d) return;
						let i;
						const r = n.shortcuts.activeCommentId;
						if (r) {
							const t = n.comments.collapsed[d],
								e = n.commentsPage.keyToCommentThreadLinkSets[d];
							if (t[i = r])
								do {
									if (!e[i].next) return;
									i = e[i].next.id
								} while (P.b(i));
							else i = e[i].next.id
						} else {
							const t = n.commentsPage.keyToHeadCommentId[d];
							if (!t) return;
							i = t
						}
						e(Object(N.a)(i)), Object(S.a)(i), t(L.j(i))
					},
					[u.c.NextPost]: A,
					[u.c.NewPost]: t => async (e, s, o) => {
						let {
							apiContext: c
						} = o;
						const n = s();
						if (!n.user.account) return;
						const d = Object(E.f)(n),
							i = d ? d.url : "/";
						e(Object(v.b)("".concat(i, "submit"))), t(L.d)
					},
					[u.c.OpenIndex]: t => async (e, s, o) => {
						let {
							apiContext: c
						} = o;
						e(Object(C.i)(I.a.KEYBOARD_SHORTCUTS)), t(L.s)
					},
					[u.c.OpenLightbox]: t => async (e, s, o) => {
						let {
							apiContext: c
						} = o;
						const n = s(),
							d = n.listings.activeKey,
							i = n.listings.postOrder.ids[d],
							r = n.shortcuts.activePostId;
						!i || !r || i.indexOf(r) < 0 || (e(Object(T.a)(n.posts.models[r].permalink)), t(L.m(r)))
					},
					[u.c.OpenLink]: t => async (e, s, o) => {
						let {
							apiContext: c
						} = o;
						const n = s(),
							{
								activePostId: d
							} = n.shortcuts;
						if (d) {
							const e = n.posts.models[d];
							if (e.source) {
								const s = e.source.url,
									o = window.open(s, "_blank");
								o && o.focus(), t(L.h(d))
							}
						}
					},
					[u.c.PrevComment]: K,
					[u.c.PrevPost]: t => async (e, s, o) => {
						let {
							apiContext: c
						} = o;
						const n = s(),
							d = n.shortcuts.activePostId,
							i = n.listings.activeKey,
							r = n.listings.postOrder.ids[i];
						if (!d || r && r.indexOf(d) < 0) return e(Object(N.b)(r[0])), void Object(S.a)(r[0]);
						if (0 === r.indexOf(d)) return;
						let a, l = d;
						do {
							if (!(a = Object(k.b)(n, {
									postId: l
								})) || !a.prevPost) return;
							l = a.prevPost.id
						} while (n.posts.models[l].hidden);
						n.shortcuts.namespace === u.d.Lightbox ? (D(e, a.prevPost), t(L.p(l))) : (e(Object(N.b)(l)), Object(S.a)(l), t(L.o(l)))
					},
					[u.c.Reply]: t => async (e, s, o) => {
						let {
							apiContext: c
						} = o;
						const n = s(),
							d = Object(S.c)(n),
							{
								activeCommentId: i
							} = n.shortcuts;
						i && d && d !== n.listings.activeKey && (e(g.ob({
							commentsPageKey: d,
							parentCommentId: i
						})), t(L.c(i)))
					},
					[u.c.Save]: t => async (e, s, o) => {
						let {
							apiContext: c
						} = o;
						const n = s(),
							{
								activeCommentId: d,
								activePostId: i
							} = n.shortcuts,
							r = Object(S.c)(n);
						r && (d && !n.comments.collapsed[r][d] ? (e(g.gb(d)), t(L.q(d))) : i && (e(f.R(i)), t(L.r(i))))
					},
					[u.c.Upvote]: t => async (e, s, o) => {
						let {
							apiContext: c
						} = o;
						const n = s(),
							{
								activeCommentId: d,
								activePostId: i
							} = n.shortcuts,
							r = Object(S.c)(n);
						r && (d && !n.comments.collapsed[r][d] ? (e(g.rb(d)), t(L.t(d))) : i && (e(f.Y(i)), t(L.u(i))))
					},
					[u.c.Konami]: null
				},
				B = (t, e) => (s, o) => {
					if (!document.activeElement) return;
					const c = document.activeElement.nodeName;
					if ("INPUT" === c || "TEXTAREA" === c || "BUTTON" === c && u.a.includes(o.which)) return;
					const n = H[s];
					n && t(n(e))
				},
				U = new l.ShortcutManager(j),
				M = Object(m.c)({
					isBladeOpen: b.j,
					namespace: t => t.activeModalId ? u.d.Global : t.shortcuts.namespace
				}),
				q = Object(a.b)(M, t => ({
					dispatchAction: e => t(e)
				}));
			class Y extends i.Component {
				getChildContext() {
					return {
						shortcuts: U
					}
				}
				componentDidMount() {
					const t = document.getElementById(u.b);
					if (t) {
						const e = window.scrollX,
							s = window.scrollY;
						t.focus(), window.scrollTo(e, s)
					}
				}
				render() {
					const {
						dispatchAction: t,
						isBladeOpen: e,
						namespace: s,
						sendEvent: o
					} = this.props;
					return r.a.createElement(l.Shortcuts, {
						handler: e ? c.a : B(t, o),
						isolate: !0,
						name: s,
						targetNodeSelector: "#".concat(u.b)
					})
				}
			}
			Y.childContextTypes = {
				shortcuts: d.a.object.isRequired
			};
			e.default = q(Object(p.c)(Y))
		}
	}
]);
//# sourceMappingURL=ShortcutWrapper.448e137faac02378b0a8.js.map