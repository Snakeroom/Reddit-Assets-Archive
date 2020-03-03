// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Poll~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~Rp~acc70187.4583b140a0cd30f86393.js
// Retrieved at 3/3/2020, 1:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Poll~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~Rp~acc70187"], {
		"./src/reddit/actions/postCollection/index.ts": function(t, e, o) {
			"use strict";
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
				p = o("./src/lib/omitHeaders/index.ts"),
				b = o("./src/reddit/constants/headers.ts");
			var O = (t, e, o) => Object(u.b)(Object(p.a)(t, [b.a]), {
				endpoint: "".concat(t.apiUrl, "/api/v1/collections/add_post_to_collection.json"),
				method: a.cb.POST,
				data: {
					collection_id: e,
					link_fullname: o
				}
			});
			var m = (t, e, o) => Object(u.b)(Object(p.a)(t, [b.a]), {
				endpoint: "".concat(t.apiUrl, "/api/v1/collections/create_collection.json"),
				method: a.cb.POST,
				data: {
					title: e,
					sr_fullname: o
				}
			});
			var j = (t, e) => Object(u.b)(Object(p.a)(t, [b.a]), {
					endpoint: "".concat(t.apiUrl, "/api/v1/collections/delete_collection.json"),
					method: a.cb.POST,
					data: {
						collection_id: e
					}
				}),
				f = o("./src/config.ts");
			var _ = (t, e) => Object(u.b)(Object(p.a)(t, [b.a]), {
				endpoint: "".concat(f.a.gatewayUrl, "/desktopapi/v1/subreddit_collections/").concat(e),
				method: a.cb.GET
			});
			var C = (t, e, o) => Object(u.b)(Object(p.a)(t, [b.a]), {
				endpoint: "".concat(t.apiUrl, "/api/v1/collections/remove_post_in_collection.json"),
				method: a.cb.POST,
				data: {
					collection_id: e,
					link_fullname: o
				}
			});
			var I = (t, e, o) => Object(u.b)(Object(p.a)(t, [b.a]), {
				endpoint: "".concat(t.apiUrl, "/api/v1/collections/update_collection_title.json"),
				method: a.cb.POST,
				data: {
					collection_id: e,
					title: o
				}
			});
			var w = (t, e, o) => Object(u.b)(Object(p.a)(t, [b.a]), {
				endpoint: "".concat(t.apiUrl, "/api/v1/collections/reorder_collection.json"),
				method: a.cb.POST,
				data: {
					collection_id: e,
					link_ids: o.join(",")
				}
			});
			var v = (t, e, o) => Object(u.b)(Object(p.a)(t, [b.a]), {
				endpoint: "".concat(t.apiUrl, "/api/v1/collections/update_collection_description.json"),
				method: a.cb.POST,
				data: {
					collection_id: e,
					description: o
				}
			});
			var k = (t, e, o) => Object(u.b)(Object(p.a)(t, [b.a]), {
					endpoint: "".concat(t.apiUrl, "/api/v1/collections/update_collection_display_layout.json"),
					method: a.cb.POST,
					data: {
						collection_id: e,
						display_layout: o
					}
				}),
				g = o("./src/reddit/helpers/overlay/index.ts"),
				h = o("./src/reddit/helpers/path/index.ts"),
				x = o("./src/reddit/models/Toast/index.ts"),
				E = o("./src/reddit/selectors/postCollection.ts"),
				y = o("./src/reddit/selectors/posts.ts"),
				S = o("./src/reddit/selectors/subreddit.ts");
			o.d(e, "b", (function() {
				return M
			})), o.d(e, "e", (function() {
				return U
			})), o.d(e, "g", (function() {
				return A
			})), o.d(e, "a", (function() {
				return R
			})), o.d(e, "c", (function() {
				return N
			})), o.d(e, "h", (function() {
				return W
			})), o.d(e, "f", (function() {
				return X
			})), o.d(e, "d", (function() {
				return nt
			}));
			const P = Object(i.a)(l.c),
				D = Object(i.a)(l.b),
				T = Object(i.a)(l.d),
				M = (t, e) => async (o, n, c) => {
					let {
						apiContext: s
					} = c;
					o(P());
					const i = await m(s(), t, e);
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
				}, K = Object(i.a)(l.g), A = (t, e, o) => async (c, s, i) => {
					let {
						apiContext: l
					} = i;
					if ((await C(l(), t, e)).ok) {
						const i = s(),
							l = Object(y.M)(i, {
								postId: e
							}),
							d = l && l.title || "",
							a = Object(E.q)(i, {
								collectionId: t
							}),
							u = (a && a.postIds && a.postIds.indexOf(e) || -1) - 1;
						if (c(K({
								collectionId: t,
								postId: e
							})), o && u >= 0) {
							const e = s(),
								o = Object(E.q)(e, {
									collectionId: t
								}),
								n = o && o.postIds && o.postIds[u] || "",
								i = Object(y.M)(e, {
									postId: n
								});
							i && i.permalink && c(Object(g.a)(i.permalink))
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
				}, B = Object(i.a)(l.a), F = Object(i.a)(l.t), R = (t, e) => async (o, c, s) => {
					let {
						apiContext: i
					} = s;
					const l = c();
					if ((await O(i(), t, e)).ok) {
						o(B({
							collectionId: t,
							postId: e
						})), o(F({
							collectionId: t,
							postId: e
						}));
						const c = Object(y.M)(l, {
								postId: e
							}),
							s = Object(E.q)(l, {
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
							buttonAction: Object(g.a)(c.permalink)
						}))
					} else o(Object(r.e)({
						kind: x.b.Error,
						text: n.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, q = Object(i.a)(l.e), N = (t, e) => async (o, i, l) => {
					let {
						apiContext: d
					} = l;
					const a = i();
					if ((await j(d(), t)).ok) {
						const {
							url: i
						} = a.platform.currentPage, l = Object(E.q)(a, {
							collectionId: t
						}), d = l && l.title || "", u = l && l.subredditId, p = u ? Object(S.c)(a, u) : "/";
						o(q({
							collectionId: t,
							collection: l
						})), o(e ? Object(c.c)(Object(s.a)(i, ["collection"])) : Object(c.b)(p)), o(Object(r.e)({
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
				}, G = Object(i.a)(l.r), J = Object(i.a)(l.n), V = Object(i.a)(l.s), W = (t, e) => async (o, c, s) => {
					let {
						apiContext: i
					} = s;
					o(G());
					const l = await I(i(), t, e);
					let d = !1;
					if (l.ok) o(V({
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
						o(J(t)), o(Object(r.e)({
							kind: x.b.Error,
							text: n.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))
					}
					return d
				}, z = Object(i.a)(l.l), Y = Object(i.a)(l.m), H = Object(i.a)(l.k), X = t => async (e, o) => {
					const n = o().platform.currentPage.locationState;
					e(!(!n || !n[d.a.IsOverlay]) ? Object(g.a)(t.permalink) : Object(c.b)(Object(h.b)(t.permalink)))
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
						const l = await w(i(), t, e);
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
					})(c, l))), d && o.push(e(W(c, d))), void 0 !== s && o.push(e(((t, e) => async (o, c, s) => {
						let {
							apiContext: i
						} = s;
						o(z());
						const l = await v(i(), t, e);
						let d = !1;
						if (l.ok) o(Y({
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
				return v
			}));
			var n = o("./node_modules/react/index.js"),
				c = o.n(n),
				s = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				l = o("./src/lib/classNames/index.ts"),
				r = o("./src/lib/lessComponent.tsx"),
				d = o("./src/reddit/actions/tooltip.ts"),
				a = o("./src/reddit/i18n/utils.ts"),
				u = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = o("./src/reddit/controls/Dropdown/index.tsx"),
				b = o("./src/reddit/controls/Dropdown/Row.tsx"),
				O = o("./src/reddit/icons/fonts/Menu/index.tsx"),
				m = o("./src/reddit/selectors/tooltip.ts"),
				j = o("./src/reddit/components/OverflowMenu/index.m.less"),
				f = o.n(j);
			const _ = r.a.wrapped(p.a, "_Dropdown", f.a),
				C = Object(u.a)(_),
				I = r.a.button("MenuButton", f.a),
				w = r.a.wrapped(O.a, "MenuIcon", f.a),
				v = r.a.wrapped(b.b, "DropdownRow", f.a),
				k = Object(i.c)({
					dropdownIsOpen: (t, e) => {
						let {
							dropdownId: o
						} = e;
						return Object(m.b)(o)(t)
					}
				}),
				g = Object(s.b)(k, (t, e) => {
					let {
						dropdownId: o
					} = e;
					return {
						toggleDropdown: () => t(Object(d.h)({
							tooltipId: o
						}))
					}
				}),
				h = t => e => {
					t.onClick && t.onClick(), t.toggleDropdown(), e.stopPropagation()
				};
			e.b = g(t => c.a.createElement(I, {
				"aria-expanded": t.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": Object(a.c)("more options"),
				className: Object(l.a)(t.className, {
					[f.a.mIsEnabled]: !t.disabled && !t.defaultButtonOutline
				}),
				disabled: t.disabled,
				onClick: h(t),
				onMouseDown: t.handleMouseDown,
				id: t.dropdownId
			}, t.icon ? t.icon : c.a.createElement(w, null), c.a.createElement(C, {
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
				return b
			})), o.d(e, "e", (function() {
				return O
			})), o.d(e, "n", (function() {
				return m
			})), o.d(e, "m", (function() {
				return j
			})), o.d(e, "b", (function() {
				return _
			})), o.d(e, "p", (function() {
				return C
			})), o.d(e, "c", (function() {
				return I
			})), o.d(e, "j", (function() {
				return w
			})), o.d(e, "q", (function() {
				return v
			})), o.d(e, "k", (function() {
				return k
			})), o.d(e, "l", (function() {
				return g
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
				}, p(e, t)),
				a = t => {
					let {
						postId: e,
						isFollowed: o
					} = t;
					return t => Object.assign({
						source: n.collection,
						noun: o ? c.unfollow : c.follow
					}, p(t, e))
				},
				u = t => {
					let {
						postId: e,
						isFollowed: o
					} = t;
					return t => Object.assign({
						source: i.a.postEvent,
						noun: o ? c.unfollow : c.follow
					}, p(t, e))
				},
				p = (t, e) => {
					const o = Object.assign({}, r.defaults(t), {
						action: s.c.CLICK,
						subreddit: r.subreddit(t)
					});
					return void 0 === e ? o : Object.assign({}, o, {
						post: r.post(t, e),
						postCollection: r.postCollectionI13nSelector(t, {
							postId: e
						}),
						postEvent: r.postEventI13nSelector(t, {
							postId: e
						})
					})
				},
				b = t => Object.assign({}, f(t), {
					action: s.c.VIEW,
					noun: c.collectionEducation
				}),
				O = t => Object.assign({}, f(t), {
					action: s.c.CLICK,
					noun: c.collectionEducationGotIt
				}),
				m = t => Object.assign({}, f(t), {
					action: s.c.VIEW,
					noun: c.eventEducation
				}),
				j = t => Object.assign({}, f(t), {
					action: s.c.CLICK,
					noun: c.eventEducationGotIt
				}),
				f = t => Object.assign({}, r.defaults(t), {
					subreddit: r.subreddit(t),
					source: n.postComposer
				}),
				_ = (t, e) => o => Object.assign({}, p(o, t), {
					source: e || n.postOverflowMenu,
					noun: c.collectionAddPost
				}),
				C = t => e => Object.assign({}, p(e, t), {
					source: n.collectionComposer,
					noun: c.collectionRemovePost
				}),
				I = () => t => Object.assign({}, p(t), {
					source: n.collectionComposer,
					noun: c.collectionCancel
				}),
				w = () => t => {
					const e = Object(l.n)(t) || void 0;
					return Object.assign({}, p(t, e), {
						source: n.collectionComposer,
						noun: c.collectionCreate
					})
				},
				v = () => t => Object.assign({}, p(t), {
					source: n.collectionComposer,
					noun: c.collectionSelect
				}),
				k = t => e => Object.assign({}, r.defaults(e), {
					subreddit: r.subreddit(e),
					source: n.collectionComposer,
					action: s.c.CLICK,
					noun: c.collectionDelete,
					postCollection: r.postCollectionI13nByCollectionIdSelector(e, {
						collectionId: t
					})
				}),
				g = t => e => Object.assign({}, p(e), {
					source: n.collectionComposer,
					noun: c.collectionEdit,
					postCollection: r.postCollectionI13nByCollectionIdSelector(e, {
						collectionId: t
					})
				}),
				h = t => e => Object.assign({}, p(e, t), {
					source: n.collectionComposer,
					noun: c.startEvent
				}),
				x = () => t => {
					const e = Object(l.n)(t) || void 0;
					return Object.assign({}, p(t, e), {
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
				return m
			})), o.d(e, "e", (function() {
				return j
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
				p = o("./src/telemetry/index.ts");
			! function(t) {
				t.postEvent = "post_event", t.postComposer = "post_composer", t.eventComposer = "event_composer"
			}(n || (n = {}));
			const b = t => u.actionInfo(t, {
					pageType: "event_submit"
				}),
				O = t => {
					Object(p.a)(Object.assign({}, u.defaults(t), {
						source: n.postComposer,
						action: l.c.CLICK,
						noun: "event_create",
						subreddit: u.subreddit(t)
					}))
				},
				m = t => {
					Object(p.a)(Object.assign({}, u.defaults(t), {
						source: n.postComposer,
						action: l.c.CLICK,
						noun: "event_edit",
						subreddit: u.subreddit(t),
						postEvent: I(t),
						postComposer: w(t)
					}))
				},
				j = () => t => ({
					source: n.eventComposer,
					action: l.c.VIEW,
					noun: l.b.SCREEN,
					actionInfo: b(t),
					postEvent: I(t)
				}),
				f = t => e => Object.assign({}, g(e, Object(d.n)(e)), {
					source: n.postComposer,
					noun: "apply",
					postComposer: v(t)
				}),
				_ = () => t => Object.assign({}, g(t, Object(d.n)(t)), {
					noun: "cancel",
					actionInfo: b(t)
				}),
				C = t => e => Object.assign({}, g(e, Object(d.n)(e)), {
					noun: "delete",
					actionInfo: b(e),
					postComposer: w(e),
					postEvent: k(t)
				}),
				I = t => {
					const e = Object(a.o)(t);
					return e && k(e)
				},
				w = t => v(Object(a.o)(t)),
				v = t => {
					return {
						postScheduled: !!t,
						submitScheduledTime: t && t.submitTime === r.i.AtEventTime ? Object(i.f)(t.startDate).getTime() / c.Db : void 0
					}
				},
				k = t => {
					const e = Object(i.f)(t.startDate).getTime() / c.Db,
						o = Object(i.f)(t.endDate).getTime() / c.Db;
					return {
						eventStartTimestamp: e,
						eventEndTimestamp: o,
						eventState: Object(s.e)(e, o)
					}
				},
				g = (t, e) => {
					const o = {
						source: n.eventComposer,
						action: l.c.CLICK,
						subreddit: u.subreddit(t)
					};
					return e ? Object.assign({}, o, {
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
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Poll~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~Rp~acc70187.4583b140a0cd30f86393.js.map