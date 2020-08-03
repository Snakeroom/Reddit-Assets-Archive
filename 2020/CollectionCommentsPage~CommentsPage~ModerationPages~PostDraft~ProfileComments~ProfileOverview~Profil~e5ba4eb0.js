// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ModerationPages~PostDraft~ProfileComments~ProfileOverview~Profil~e5ba4eb0.f6684607ab267716a61c.js
// Retrieved at 8/3/2020, 6:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~ModerationPages~PostDraft~ProfileComments~ProfileOverview~Profil~e5ba4eb0"], {
		"./src/reddit/actions/postCollection/index.ts": function(t, e, o) {
			"use strict";
			o.d(e, "b", (function() {
				return M
			})), o.d(e, "e", (function() {
				return U
			})), o.d(e, "g", (function() {
				return K
			})), o.d(e, "a", (function() {
				return R
			})), o.d(e, "c", (function() {
				return G
			})), o.d(e, "h", (function() {
				return q
			})), o.d(e, "f", (function() {
				return X
			})), o.d(e, "d", (function() {
				return nt
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				c = o("./node_modules/react-router-redux/es/index.js"),
				s = o("./src/lib/filterQueryParams/index.ts"),
				i = o("./src/lib/makeActionCreator/index.ts"),
				l = o("./src/reddit/actions/postCollection/constants.ts"),
				r = o("./src/reddit/actions/toaster.ts"),
				d = o("./src/reddit/constants/history.ts"),
				a = o("./src/lib/constants/index.ts"),
				u = o("./src/lib/makeApiRequest/index.ts"),
				b = o("./src/lib/omitHeaders/index.ts"),
				p = o("./src/reddit/constants/headers.ts");
			var O = (t, e, o) => Object(u.a)(Object(b.a)(t, [p.a]), {
				endpoint: "".concat(t.apiUrl, "/api/v1/collections/add_post_to_collection.json"),
				method: a.db.POST,
				data: {
					collection_id: e,
					link_fullname: o
				}
			});
			var j = (t, e, o) => Object(u.a)(Object(b.a)(t, [p.a]), {
				endpoint: "".concat(t.apiUrl, "/api/v1/collections/create_collection.json"),
				method: a.db.POST,
				data: {
					title: e,
					sr_fullname: o
				}
			});
			var m = (t, e) => Object(u.a)(Object(b.a)(t, [p.a]), {
					endpoint: "".concat(t.apiUrl, "/api/v1/collections/delete_collection.json"),
					method: a.db.POST,
					data: {
						collection_id: e
					}
				}),
				f = o("./src/config.ts");
			var _ = (t, e) => Object(u.a)(Object(b.a)(t, [p.a]), {
				endpoint: "".concat(f.a.gatewayUrl, "/desktopapi/v1/subreddit_collections/").concat(e),
				method: a.db.GET
			});
			var C = (t, e, o) => Object(u.a)(Object(b.a)(t, [p.a]), {
				endpoint: "".concat(t.apiUrl, "/api/v1/collections/remove_post_in_collection.json"),
				method: a.db.POST,
				data: {
					collection_id: e,
					link_fullname: o
				}
			});
			var g = (t, e, o) => Object(u.a)(Object(b.a)(t, [p.a]), {
				endpoint: "".concat(t.apiUrl, "/api/v1/collections/update_collection_title.json"),
				method: a.db.POST,
				data: {
					collection_id: e,
					title: o
				}
			});
			var I = (t, e, o) => Object(u.a)(Object(b.a)(t, [p.a]), {
				endpoint: "".concat(t.apiUrl, "/api/v1/collections/reorder_collection.json"),
				method: a.db.POST,
				data: {
					collection_id: e,
					link_ids: o.join(",")
				}
			});
			var w = (t, e, o) => Object(u.a)(Object(b.a)(t, [p.a]), {
				endpoint: "".concat(t.apiUrl, "/api/v1/collections/update_collection_description.json"),
				method: a.db.POST,
				data: {
					collection_id: e,
					description: o
				}
			});
			var k = (t, e, o) => Object(u.a)(Object(b.a)(t, [p.a]), {
					endpoint: "".concat(t.apiUrl, "/api/v1/collections/update_collection_display_layout.json"),
					method: a.db.POST,
					data: {
						collection_id: e,
						display_layout: o
					}
				}),
				v = o("./src/reddit/helpers/overlay/index.ts"),
				h = o("./src/reddit/helpers/path/index.ts"),
				x = o("./src/reddit/models/Toast/index.ts"),
				E = o("./src/reddit/selectors/postCollection.ts"),
				y = o("./src/reddit/selectors/posts.ts"),
				S = o("./src/reddit/selectors/subreddit.ts");
			const P = Object(i.a)(l.c),
				D = Object(i.a)(l.b),
				T = Object(i.a)(l.d),
				M = (t, e) => async (o, n, c) => {
					let {
						apiContext: s
					} = c;
					o(P());
					const i = await j(s(), t, e);
					let l;
					if (i.ok) {
						const t = n().meta,
							e = (t => ({
								author: t.author_name || void 0,
								createdAtUTC: t.created_at_utc,
								description: t.description,
								displayLayout: t.display_layout,
								id: t.collection_id,
								lastUpdateUTC: t.last_update_utc,
								permalink: t.permalink,
								postIds: t.link_ids,
								primaryPostId: t.primary_link_id || void 0,
								subredditId: t.subreddit_id,
								title: t.title
							}))(i.body);
						o(T({
							collection: e,
							meta: t
						})), l = e
					} else {
						const t = i.error;
						o(D(t))
					}
					return l
				}, L = Object(i.a)(l.f), U = t => async (e, o, c) => {
					let {
						apiContext: s
					} = c;
					const i = o().postCollection.subredditToIds || {};
					if (Object.keys(i).length > 0) return;
					const l = await _(s(), t);
					l.ok ? e(L(l.body)) : e(Object(r.e)({
						kind: x.b.Error,
						text: n.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, F = Object(i.a)(l.g), K = (t, e, o) => async (c, s, i) => {
					let {
						apiContext: l
					} = i;
					if ((await C(l(), t, e)).ok) {
						const i = s(),
							l = Object(y.M)(i, {
								postId: e
							}),
							d = l && l.title || "",
							a = Object(E.r)(i, {
								collectionId: t
							}),
							u = (a && a.postIds && a.postIds.indexOf(e) || -1) - 1;
						if (c(F({
								collectionId: t,
								postId: e
							})), o && u >= 0) {
							const e = s(),
								o = Object(E.r)(e, {
									collectionId: t
								}),
								n = o && o.postIds && o.postIds[u] || "",
								i = Object(y.M)(e, {
									postId: n
								});
							i && i.permalink && c(Object(v.a)(i.permalink))
						}
						c(Object(r.e)({
							kind: x.b.SuccessMod,
							text: n.fbt._("Following post removed from collection successfully: {postTitle}", [n.fbt._param("postTitle", d)], {
								hk: "8e1lV"
							}),
							buttonText: n.fbt._("UNDO", null, {
								hk: "3KPLib"
							}),
							buttonAction: R(t, e)
						}))
					} else c(Object(r.e)({
						kind: x.b.Error,
						text: n.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, A = Object(i.a)(l.a), B = Object(i.a)(l.t), R = (t, e) => async (o, c, s) => {
					let {
						apiContext: i
					} = s;
					const l = c();
					if ((await O(i(), t, e)).ok) {
						o(A({
							collectionId: t,
							postId: e
						})), o(B({
							collectionId: t,
							postId: e
						}));
						const c = Object(y.M)(l, {
								postId: e
							}),
							s = Object(E.r)(l, {
								collectionId: t
							}),
							i = s && s.title || "";
						o(Object(r.e)({
							kind: x.b.SuccessMod,
							text: n.fbt._("Success! You added a post to the collection: {title}", [n.fbt._param("title", i)], {
								hk: "3KNJWi"
							}),
							buttonText: n.fbt._("VIEW", null, {
								hk: "1SSkgL"
							}),
							buttonAction: Object(v.a)(c.permalink)
						}))
					} else o(Object(r.e)({
						kind: x.b.Error,
						text: n.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, N = Object(i.a)(l.e), G = (t, e) => async (o, i, l) => {
					let {
						apiContext: d
					} = l;
					const a = i();
					if ((await m(d(), t)).ok) {
						const {
							url: i
						} = a.platform.currentPage, l = Object(E.r)(a, {
							collectionId: t
						}), d = l && l.title || "", u = l && l.subredditId, b = u ? Object(S.c)(a, u) : "/";
						o(N({
							collectionId: t,
							collection: l
						})), o(e ? Object(c.c)(Object(s.a)(i, ["collection"])) : Object(c.b)(b)), o(Object(r.e)({
							kind: x.b.SuccessMod,
							text: n.fbt._("Collection deleted successfully: {title}", [n.fbt._param("title", d)], {
								hk: "4tcOKB"
							})
						}))
					} else o(Object(r.e)({
						kind: x.b.Error,
						text: n.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, J = Object(i.a)(l.r), V = Object(i.a)(l.n), W = Object(i.a)(l.s), q = (t, e) => async (o, c, s) => {
					let {
						apiContext: i
					} = s;
					o(J());
					const l = await g(i(), t, e);
					let d = !1;
					if (l.ok) o(W({
						collectionId: t,
						newTitle: e
					})), o(Object(r.e)({
						kind: x.b.SuccessMod,
						text: n.fbt._("Collection title updated successfully", null, {
							hk: "2hKzKl"
						})
					})), d = !0;
					else {
						const t = l.error;
						o(V(t)), o(Object(r.e)({
							kind: x.b.Error,
							text: n.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))
					}
					return d
				}, Y = Object(i.a)(l.l), z = Object(i.a)(l.m), H = Object(i.a)(l.k), X = t => async (e, o) => {
					const n = o().platform.currentPage.locationState;
					e(!(!n || !n[d.a.IsOverlay]) ? Object(v.a)(t.permalink) : Object(c.b)(Object(h.b)(t.permalink)))
				}, Z = Object(i.a)(l.i), Q = Object(i.a)(l.j), $ = Object(i.a)(l.h), tt = Object(i.a)(l.p), et = Object(i.a)(l.o), ot = Object(i.a)(l.q), nt = t => async e => {
					const o = [],
						{
							collectionId: c,
							description: s,
							displayLayout: i,
							postIds: l,
							title: d
						} = t;
					l && o.push(e(((t, e) => async (o, c, s) => {
						let {
							apiContext: i
						} = s;
						o(Z());
						const l = await I(i(), t, e);
						let d = !1;
						return l.ok ? (o(Q({
							collectionId: t,
							postIds: e
						})), o(Object(r.e)({
							kind: x.b.SuccessMod,
							text: n.fbt._("Collection order updated successfully", null, {
								hk: "4ccHEL"
							})
						})), d = !0) : (o($({
							error: l.error
						})), o(Object(r.e)({
							kind: x.b.Error,
							text: n.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))), d
					})(c, l))), d && o.push(e(q(c, d))), void 0 !== s && o.push(e(((t, e) => async (o, c, s) => {
						let {
							apiContext: i
						} = s;
						o(Y());
						const l = await w(i(), t, e);
						let d = !1;
						if (l.ok) o(z({
							collectionId: t,
							newDescription: e
						})), o(Object(r.e)({
							kind: x.b.SuccessMod,
							text: n.fbt._("Collection description updated successfully", null, {
								hk: "1rIDCC"
							})
						})), d = !0;
						else {
							const t = l.error;
							o(H(t)), o(Object(r.e)({
								kind: x.b.Error,
								text: n.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return d
					})(c, s))), i && o.push(e(((t, e) => async (o, c, s) => {
						let {
							apiContext: i
						} = s;
						o(tt());
						const l = await k(i(), t, e);
						let d = !1;
						if (l.ok) o(ot({
							collectionId: t,
							newLayout: e
						})), o(Object(r.e)({
							kind: x.b.SuccessMod,
							text: n.fbt._("Collection layout updated successfully", null, {
								hk: "1Rs19j"
							})
						})), d = !0;
						else {
							const t = l.error;
							o(et(t)), o(Object(r.e)({
								kind: x.b.Error,
								text: n.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return d
					})(c, i)));
					let a = !0;
					return await Promise.all(o).then(t => {
						t.forEach(t => {
							t || (a = !1)
						})
					}), a
				}
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(t, e, o) {
			t.exports = {
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
		"./src/reddit/components/OverflowMenu/index.tsx": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return w
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				c = o("./node_modules/react/index.js"),
				s = o.n(c),
				i = o("./node_modules/react-redux/es/index.js"),
				l = o("./node_modules/reselect/es/index.js"),
				r = o("./src/lib/classNames/index.ts"),
				d = o("./src/lib/lessComponent.tsx"),
				a = o("./src/reddit/actions/tooltip.ts"),
				u = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				b = o("./src/reddit/controls/Dropdown/index.tsx"),
				p = o("./src/reddit/controls/Dropdown/Row.tsx"),
				O = o("./src/reddit/icons/fonts/Menu/index.tsx"),
				j = o("./src/reddit/selectors/tooltip.ts"),
				m = o("./src/reddit/components/OverflowMenu/index.m.less"),
				f = o.n(m);
			const _ = d.a.wrapped(b.a, "_Dropdown", f.a),
				C = Object(u.a)(_),
				g = d.a.button("MenuButton", f.a),
				I = d.a.wrapped(O.a, "MenuIcon", f.a),
				w = d.a.wrapped(p.b, "DropdownRow", f.a),
				k = Object(l.c)({
					dropdownIsOpen: (t, e) => {
						let {
							dropdownId: o
						} = e;
						return Object(j.b)(o)(t)
					}
				}),
				v = Object(i.b)(k, (t, e) => {
					let {
						dropdownId: o
					} = e;
					return {
						toggleDropdown: () => t(Object(a.h)({
							tooltipId: o
						}))
					}
				}),
				h = t => e => {
					t.onClick && t.onClick(), t.toggleDropdown(), e.stopPropagation()
				};
			e.b = v(t => s.a.createElement(g, {
				"aria-expanded": t.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": n.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(r.a)(t.className, {
					[f.a.mIsEnabled]: !t.disabled && !t.defaultButtonOutline
				}),
				disabled: t.disabled,
				onClick: h(t),
				onMouseDown: t.handleMouseDown,
				id: t.dropdownId
			}, t.icon ? t.icon : s.a.createElement(I, null), s.a.createElement(C, {
				className: t.dropdownClassName,
				isOpen: t.dropdownIsOpen,
				tooltipId: t.dropdownId,
				isFixed: t.isFixed,
				targetPosition: t.targetPosition,
				tooltipPosition: t.tooltipPosition
			}, t.children)))
		},
		"./src/reddit/helpers/trackers/postCollection.ts": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return n
			})), o.d(e, "h", (function() {
				return d
			})), o.d(e, "g", (function() {
				return a
			})), o.d(e, "o", (function() {
				return u
			})), o.d(e, "f", (function() {
				return p
			})), o.d(e, "e", (function() {
				return O
			})), o.d(e, "n", (function() {
				return j
			})), o.d(e, "m", (function() {
				return m
			})), o.d(e, "b", (function() {
				return _
			})), o.d(e, "p", (function() {
				return C
			})), o.d(e, "c", (function() {
				return g
			})), o.d(e, "j", (function() {
				return I
			})), o.d(e, "q", (function() {
				return w
			})), o.d(e, "k", (function() {
				return k
			})), o.d(e, "l", (function() {
				return v
			})), o.d(e, "i", (function() {
				return h
			})), o.d(e, "d", (function() {
				return x
			}));
			var n, c, s = o("./src/reddit/constants/tracking.ts"),
				i = o("./src/reddit/helpers/trackers/postEvent.ts"),
				l = o("./src/reddit/selectors/platform.ts"),
				r = o("./src/reddit/selectors/telemetry.ts");
			! function(t) {
				t.collection = "collection", t.collectionComposer = "collection_composer", t.postComposer = "post_composer", t.postOverflowMenu = "post_overflow_menu"
			}(n || (n = {})),
			function(t) {
				t.post = "post", t.follow = "follow", t.unfollow = "unfollow", t.screen = "screen", t.eventEducation = "event_education", t.eventEducationGotIt = "event_education_got_it", t.collectionEducation = "collection_education", t.collectionEducationGotIt = "collection_education_got_it", t.collectionCancel = "cancel", t.collectionCreate = "collection_create", t.collectionSelect = "collection_select", t.collectionDelete = "collection_delete", t.collectionEdit = "collection_edit", t.collectionAddPost = "collection_add_post", t.collectionRemovePost = "remove_post_from_collection", t.startEvent = "start_event"
			}(c || (c = {}));
			const d = t => e => Object.assign({
					source: n.collection,
					noun: c.post
				}, b(e, t)),
				a = t => {
					let {
						postId: e,
						isFollowed: o
					} = t;
					return t => Object.assign({
						source: n.collection,
						noun: o ? c.unfollow : c.follow
					}, b(t, e))
				},
				u = t => {
					let {
						postId: e,
						isFollowed: o
					} = t;
					return t => Object.assign({
						source: i.a.postEvent,
						noun: o ? c.unfollow : c.follow
					}, b(t, e))
				},
				b = (t, e) => {
					const o = Object.assign(Object.assign({}, r.defaults(t)), {
						action: s.c.CLICK,
						subreddit: r.subreddit(t)
					});
					return void 0 === e ? o : Object.assign(Object.assign({}, o), {
						post: r.post(t, e),
						postCollection: r.postCollectionI13nSelector(t, {
							postId: e
						}),
						postEvent: r.postEventI13nSelector(t, {
							postId: e
						})
					})
				},
				p = t => Object.assign(Object.assign({}, f(t)), {
					action: s.c.VIEW,
					noun: c.collectionEducation
				}),
				O = t => Object.assign(Object.assign({}, f(t)), {
					action: s.c.CLICK,
					noun: c.collectionEducationGotIt
				}),
				j = t => Object.assign(Object.assign({}, f(t)), {
					action: s.c.VIEW,
					noun: c.eventEducation
				}),
				m = t => Object.assign(Object.assign({}, f(t)), {
					action: s.c.CLICK,
					noun: c.eventEducationGotIt
				}),
				f = t => Object.assign(Object.assign({}, r.defaults(t)), {
					subreddit: r.subreddit(t),
					source: n.postComposer
				}),
				_ = (t, e) => o => Object.assign(Object.assign({}, b(o, t)), {
					source: e || n.postOverflowMenu,
					noun: c.collectionAddPost
				}),
				C = t => e => Object.assign(Object.assign({}, b(e, t)), {
					source: n.collectionComposer,
					noun: c.collectionRemovePost
				}),
				g = () => t => Object.assign(Object.assign({}, b(t)), {
					source: n.collectionComposer,
					noun: c.collectionCancel
				}),
				I = () => t => {
					const e = Object(l.o)(t) || void 0;
					return Object.assign(Object.assign({}, b(t, e)), {
						source: n.collectionComposer,
						noun: c.collectionCreate
					})
				},
				w = () => t => Object.assign(Object.assign({}, b(t)), {
					source: n.collectionComposer,
					noun: c.collectionSelect
				}),
				k = t => e => Object.assign(Object.assign({}, r.defaults(e)), {
					subreddit: r.subreddit(e),
					source: n.collectionComposer,
					action: s.c.CLICK,
					noun: c.collectionDelete,
					postCollection: r.postCollectionI13nByCollectionIdSelector(e, {
						collectionId: t
					})
				}),
				v = t => e => Object.assign(Object.assign({}, b(e)), {
					source: n.collectionComposer,
					noun: c.collectionEdit,
					postCollection: r.postCollectionI13nByCollectionIdSelector(e, {
						collectionId: t
					})
				}),
				h = t => e => Object.assign(Object.assign({}, b(e, t)), {
					source: n.collectionComposer,
					noun: c.startEvent
				}),
				x = () => t => {
					const e = Object(l.o)(t) || void 0;
					return Object.assign(Object.assign({}, b(t, e)), {
						source: n.collectionComposer,
						action: s.c.VIEW,
						noun: c.screen
					})
				}
		},
		"./src/reddit/helpers/trackers/postEvent.ts": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return n
			})), o.d(e, "f", (function() {
				return O
			})), o.d(e, "g", (function() {
				return j
			})), o.d(e, "e", (function() {
				return m
			})), o.d(e, "b", (function() {
				return f
			})), o.d(e, "c", (function() {
				return _
			})), o.d(e, "d", (function() {
				return C
			}));
			var n, c = o("./src/lib/constants/index.ts"),
				s = o("./src/lib/eventTools/index.ts"),
				i = o("./src/lib/timezone/index.ts"),
				l = o("./src/reddit/constants/tracking.ts"),
				r = o("./src/reddit/models/PostCreationForm/index.ts"),
				d = o("./src/reddit/selectors/platform.ts"),
				a = o("./src/reddit/selectors/postCreations.ts"),
				u = o("./src/reddit/selectors/telemetry.ts"),
				b = o("./src/telemetry/index.ts");
			! function(t) {
				t.postEvent = "post_event", t.postComposer = "post_composer", t.eventComposer = "event_composer"
			}(n || (n = {}));
			const p = t => u.actionInfo(t, {
					pageType: "event_submit"
				}),
				O = t => {
					Object(b.a)(Object.assign(Object.assign({}, u.defaults(t)), {
						source: n.postComposer,
						action: l.c.CLICK,
						noun: "event_create",
						subreddit: u.subreddit(t)
					}))
				},
				j = t => {
					Object(b.a)(Object.assign(Object.assign({}, u.defaults(t)), {
						source: n.postComposer,
						action: l.c.CLICK,
						noun: "event_edit",
						subreddit: u.subreddit(t),
						postEvent: g(t),
						postComposer: I(t)
					}))
				},
				m = () => t => ({
					source: n.eventComposer,
					action: l.c.VIEW,
					noun: l.b.SCREEN,
					actionInfo: p(t),
					postEvent: g(t)
				}),
				f = t => e => Object.assign(Object.assign({}, v(e, Object(d.o)(e))), {
					source: n.postComposer,
					noun: "apply",
					postComposer: w(t)
				}),
				_ = () => t => Object.assign(Object.assign({}, v(t, Object(d.o)(t))), {
					noun: "cancel",
					actionInfo: p(t)
				}),
				C = t => e => Object.assign(Object.assign({}, v(e, Object(d.o)(e))), {
					noun: "delete",
					actionInfo: p(e),
					postComposer: I(e),
					postEvent: k(t)
				}),
				g = t => {
					const e = Object(a.o)(t);
					return e && k(e)
				},
				I = t => w(Object(a.o)(t)),
				w = t => {
					return {
						postScheduled: !!t,
						submitScheduledTime: t && t.submitTime === r.i.AtEventTime ? Object(i.f)(t.startDate).getTime() / c.Fb : void 0
					}
				},
				k = t => {
					const e = Object(i.f)(t.startDate).getTime() / c.Fb,
						o = Object(i.f)(t.endDate).getTime() / c.Fb;
					return {
						eventStartTimestamp: e,
						eventEndTimestamp: o,
						eventState: Object(s.e)(e, o)
					}
				},
				v = (t, e) => {
					const o = {
						source: n.eventComposer,
						action: l.c.CLICK,
						subreddit: u.subreddit(t)
					};
					return e ? Object.assign(Object.assign({}, o), {
						post: u.post(t, e),
						postEvent: u.postEventI13nSelector(t, {
							postId: e
						}),
						postCollection: u.postCollectionI13nSelector(t, {
							postId: e
						})
					}) : o
				}
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~ModerationPages~PostDraft~ProfileComments~ProfileOverview~Profil~e5ba4eb0.f6684607ab267716a61c.js.map