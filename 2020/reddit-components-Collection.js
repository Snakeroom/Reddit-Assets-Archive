// https://www.redditstatic.com/desktop2x/reddit-components-Collection.0db630de1d58bc0e2188.js
// Retrieved at 6/4/2020, 6:00:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Collection"], {
		"./src/reddit/components/Collection/PostAndPostEventMeta/index.m.less": function(e, t, o) {
			e.exports = {
				Metadata: "YxCA1Mpgi_ThsEnFr_EFv",
				metadata: "YxCA1Mpgi_ThsEnFr_EFv",
				postEventMeta: "UORiCb6Mik-agLw97Owil"
			}
		},
		"./src/reddit/components/Collection/PostAndPostEventMeta/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return p
			})), o.d(t, "b", (function() {
				return u
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				l = o("./src/lib/prettyPrintNumber/index.ts"),
				i = o("./src/lib/lessComponent.tsx"),
				a = o("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				r = o("./src/reddit/helpers/postEvent.ts"),
				c = o("./src/reddit/components/Collection/PostAndPostEventMeta/index.m.less"),
				d = o.n(c);
			const {
				fbt: m
			} = o("./node_modules/fbt/lib/FbtPublic.js"), p = i.a.wrapped(e => n.a.createElement("span", {
				className: e.className
			}, e.children), "Metadata", d.a), u = e => {
				let {
					post: t
				} = e;
				return Object(r.a)(t) ? n.a.createElement(a.a, {
					className: d.a.postEventMeta,
					post: t
				}) : n.a.createElement(n.a.Fragment, null, !t.isScoreHidden && n.a.createElement(n.a.Fragment, null, n.a.createElement(p, {
					"data-click-id": "score"
				}, m._({
					"*": "{Post score} points",
					_1: "1 point"
				}, [m._plural(t.score, "Post score", Object(l.b)(t.score))], {
					hk: "1gwCFh"
				})), n.a.createElement(p, null, "·")), n.a.createElement(p, {
					"data-click-id": "comments"
				}, m._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [m._plural(t.numComments, "number", Object(l.b)(t.numComments))], {
					hk: "3eG58Q"
				})))
			}
		},
		"./src/reddit/components/Collection/PostItem/index.m.less": function(e, t, o) {
			e.exports = {
				postTitle: "_1bvyZ0jB0C8Lx6TlraZXE3",
				postContent: "_3giZKNlG6qJzee7UY1xsIJ",
				active: "_12zSt_pMIevRkRY1y7z0ZD",
				isProfilePage: "_3yF2XCFhSO-O3pN8ebYN1G",
				postBody: "_2L4qX-0aH7jj8yNe2FGxg-",
				bottomline: "NlMXOVW9HTmozMDSBJduL",
				postContainer: "rF1mJN5TPvOeX-Rs9PA04",
				postBodyWrapper: "_3LxyuVXMtCzPGToR6G4aUP",
				galleryPostContainer: "LbSOjrpQSZxNlzkqgp8IK",
				galleryPostOverlay: "_32s7Ik6Mvi_xJ6Q7PXN7cS",
				galleryPostImage: "_71EQniEmTXC8cbuXDlo2y",
				gallerySelectedBorder: "_3TY5O5VX0o1EJLeXO2CBIz",
				isNightmodeOn: "_3ToKa6hKRy0knGHXUZW0tI",
				isSelectedPost: "dKiTp-99N-ixy1MUgoxzt",
				galleryBottomLine: "_3juAZ5nip3xhlLYoa0eJHl",
				isScoreHidden: "_1gE7DLti39Ow23AU39DRyi",
				gallerySeparator: "_1REIFRRcgS4gb1OzCUiDdF",
				scrollToContainer: "R4W5__5pno6HuOR6cXIcW",
				blurBackground: "_1EmOtGLOIj5jVny00MsYDq",
				timelineThumbnail: "N7ZDF05PM85cnjxy8A9Kj",
				timelineThumbnailOverride: "_2qHZln2Y6YL5GXxpgP4Qf4",
				galleryThumbnailPlaceholder: "_3HsMbUHP3qlXSnSNv10i__",
				thumbnailContainerClassName: "_22Rd8vdnxySvffllxDpbGs",
				galleryPostPlaceholderThumbnailOverride: "_2XLoayiHEZSUCfwO0UAbso",
				commonThumbnailOverride: "_2tS9NgDPCzFiHnYMa3o1SV",
				defaultPostOverflowMenu: "Q8lxJgZLCmNGj_Ep4EMmD"
			}
		},
		"./src/reddit/components/Collection/index.m.less": function(e, t, o) {
			e.exports = {
				collectionTitleWrapper: "_10IcBRrmressbhblq2bqiU",
				isProfilePage: "_40cmCHyGWf1SgOpyoChQS",
				collectionTitle: "tFfYP5FF1o5CEXQ15uH7d",
				collectionMetaData: "_1-c9t8ecl06D08Su9pk4ni",
				collectionBy: "_17sTscKExP8XIU91kNOF2U",
				collectionTitleOptions: "_1IA_VhTzcdVBgjp_pZllHj",
				postListWrapper: "_2T_gfh-4AolUQ4rcgj8LV3",
				collectionDescription: "_1qekGnwXQb9ZXUYpC2vI3o",
				collectionList: "_3DA4B_0rR_osY0zjBQbJ8d",
				author: "_3fYAYBseZm3AMr8S-Q5ZoJ",
				overflowMenu: "_3LbMCmvXBCx5DLWUsYvKdV",
				postCount: "_1LY03RHQAwDBI6w3IOLqwg",
				galleryContainer: "_3sH08_Dk83Y6-vyvIc9ttc"
			}
		},
		"./src/reddit/components/Collection/index.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				l = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				a = o("./src/lib/classNames/index.ts"),
				r = o("./src/lib/domUtils/index.ts"),
				c = o("./src/lib/fastdom/index.ts"),
				d = o("./src/reddit/actions/postCollection/index.ts"),
				m = o("./src/reddit/components/AuthorLink/index.tsx"),
				p = o("./src/reddit/components/PostFollow/index.tsx"),
				u = o("./src/reddit/components/SEOTitle/index.tsx"),
				b = o("./src/reddit/components/TrackingHelper/index.tsx"),
				P = o("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.tsx"),
				h = o("./src/reddit/constants/componentSizes.ts"),
				E = o("./src/reddit/constants/elementIds.ts"),
				C = o("./src/reddit/contexts/PageLayer/index.tsx"),
				O = o("./src/reddit/controls/MetaSeparator/index.tsx"),
				v = o("./src/reddit/helpers/postCollection.ts"),
				_ = o("./src/reddit/models/Post/index.ts"),
				x = o("./src/reddit/models/PostCollection/index.ts"),
				g = o("./src/reddit/selectors/postCollection.ts"),
				y = o("./src/reddit/selectors/posts.ts"),
				S = (o("./node_modules/core-js/modules/web.dom.iterable.js"), o("./node_modules/react-router-dom/esm/react-router-dom.js")),
				f = o("./src/lib/prettyPrintNumber/index.ts"),
				T = o("./src/lib/timezone/index.ts"),
				N = o("./src/reddit/actions/modal.ts"),
				w = o("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				j = o("./src/reddit/components/Collection/PostAndPostEventMeta/index.tsx"),
				I = o("./src/reddit/components/PostContainer/index.tsx"),
				k = o("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.tsx"),
				M = o("./src/reddit/helpers/path/index.ts"),
				L = o("./src/reddit/helpers/postEvent.ts"),
				D = o("./src/reddit/helpers/trackers/postCollection.ts"),
				R = o("./src/reddit/models/PostCreationForm/index.ts"),
				F = o("./src/reddit/selectors/activeModalId.ts"),
				A = o("./src/reddit/components/Collection/PostItem/index.m.less"),
				B = o.n(A);

			function H() {
				return (H = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: W
			} = o("./node_modules/fbt/lib/FbtPublic.js");
			let U, X;
			const Y = e => "".concat(e, "--collectionItem"),
				z = e => {
					const {
						activeModalId: t,
						addEventStartTime: o,
						eventFactory: s,
						isFutureEvent: l,
						isNightmodeOn: i,
						isOverlay: r,
						isSelectedPost: c,
						onPostSelection: d,
						onRemovePost: m,
						onStartEventNow: p,
						onPostTitleClick: u,
						post: b,
						shouldShowCollectionPostEdits: P,
						shouldShowThumbnail: h,
						style: E,
						toggleEditStartTimeModal: C,
						updateSelectedPostRef: O,
						isProfilePage: v
					} = e;
					return n.a.createElement(I.a, {
						className: Object(a.a)(B.a.postContainer, {
							[B.a.isNightmodeOn]: i,
							[B.a.isSelectedPost]: c,
							[B.a.isProfilePage]: v
						}),
						isOverlay: r,
						makePostContainerId: Y,
						post: b,
						onClick: d,
						eventFactory: s,
						style: E
					}, n.a.createElement("div", {
						ref: c && O || void 0
					}, n.a.createElement("div", {
						className: Object(a.a)(B.a.postContent, {
							[B.a.active]: c
						})
					}, h && n.a.createElement(w.a, {
						className: B.a.timelineThumbnail,
						classNameInnerThumbnail: Object(a.a)(B.a.timelineThumbnailOverride, B.a.commonThumbnailOverride),
						post: b
					}), n.a.createElement("div", {
						className: B.a.postBodyWrapper
					}, n.a.createElement("div", {
						className: B.a.postBody,
						"data-click-id": "body"
					}, n.a.createElement(S.a, {
						to: Object(M.b)(b.permalink),
						className: B.a.postTitle,
						style: {
							WebkitBoxOrient: "vertical"
						},
						title: b.title,
						onClick: u
					}, b.title)), n.a.createElement("div", {
						className: B.a.bottomline
					}, n.a.createElement(j.b, {
						post: b
					}), P && n.a.createElement(k.a, {
						className: B.a.defaultPostOverflowMenu,
						onRemoveClick: m,
						dropdownId: "collection-post-item-".concat(b.id),
						isFutureEvent: l,
						onStartEventNow: p,
						onEditStartTime: C,
						onAddEventStartTime: C,
						shouldShowAddEventStartTime: !Object(L.a)(b)
					}))))), t === Object(R.s)(b.id, r, R.j.COLLECTION_INFO_POST) && U && n.a.createElement(U, {
						onChange: o,
						onClose: C,
						schedule: Object(T.c)(b),
						shouldShowDeleteButton: !1
					}))
				},
				G = w.a,
				J = e => {
					const {
						activeModalId: t,
						addEventStartTime: o,
						eventFactory: s,
						galleryThumbnail: l,
						isFutureEvent: i,
						isNightmodeOn: r,
						isOverlay: c,
						isSelectedPost: d,
						onPostSelection: m,
						onRemovePost: p,
						onStartEventNow: u,
						post: b,
						shouldShowCollectionPostEdits: P,
						style: h,
						toggleEditStartTimeModal: E,
						updateSelectedPostRef: C,
						isProfilePage: O
					} = e, v = l && l.url || "", _ = b.isSpoiler || b.isNSFW, x = b.isScoreHidden;
					return n.a.createElement(I.a, {
						className: Object(a.a)(B.a.galleryPostContainer, {
							[B.a.isSelectedPost]: d,
							[B.a.isNightmodeOn]: r,
							[B.a.isProfilePage]: O
						}),
						isOverlay: c,
						makePostContainerId: Y,
						post: b,
						onClick: m,
						eventFactory: s,
						style: h
					}, n.a.createElement("div", {
						className: B.a.scrollToContainer,
						ref: d && C || void 0
					}, v ? n.a.createElement("div", {
						className: Object(a.a)(B.a.galleryPostImage, {
							[B.a.blurBackground]: _
						}),
						style: {
							backgroundImage: "url('".concat(v, "')")
						}
					}) : n.a.createElement(G, {
						className: B.a.galleryThumbnailPlaceholder,
						thumbnailContainerClassName: B.a.thumbnailContainerClassName,
						classNameInnerThumbnail: Object(a.a)(B.a.galleryPostPlaceholderThumbnailOverride, B.a.commonThumbnailOverride),
						post: b
					}), r && n.a.createElement("div", {
						className: B.a.gallerySeparator
					}), d && n.a.createElement("div", {
						className: B.a.gallerySelectedBorder
					}), n.a.createElement("div", {
						className: B.a.galleryPostOverlay
					}, n.a.createElement("div", {
						className: Object(a.a)(B.a.galleryBottomLine, {
							[B.a.isScoreHidden]: x
						})
					}, !x && n.a.createElement(j.a, {
						"data-click-id": "score"
					}, W._({
						"*": "{Post score} points",
						_1: "1 point"
					}, [W._plural(b.score, "Post score", Object(f.b)(b.score))], {
						hk: "17XXwj"
					})), P && n.a.createElement(k.a, {
						onRemoveClick: p,
						dropdownId: "collection-post-item-".concat(b.id),
						isFutureEvent: i,
						onStartEventNow: u,
						onEditStartTime: E,
						onAddEventStartTime: E,
						shouldShowAddEventStartTime: !Object(L.a)(b)
					})))), t === Object(R.s)(b.id, c, R.j.COLLECTION_INFO_POST) && U && n.a.createElement(U, {
						onChange: o,
						onClose: E,
						schedule: Object(T.c)(b),
						shouldShowDeleteButton: !1
					}))
				};
			class Q extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.onPostSelection = (e, t) => {
						const {
							onClickPost: o,
							postId: s,
							sendEvent: n
						} = this.props;
						n(Object(D.h)(s)), o && o(e, t)
					}, this.onRemovePost = () => {
						const {
							post: e,
							sendEvent: t
						} = this.props;
						this.props.onRemovePostFromCollection(), t(Object(D.p)(e.id))
					}, this.onStartEventNow = () => {
						const {
							post: e,
							sendEvent: t
						} = this.props;
						this.props.onStartEventNow(), t(Object(D.i)(e.id))
					}, this.onPostTitleClick = e => {
						const {
							post: t
						} = this.props;
						e.preventDefault(), this.onPostSelection(e, t)
					}
				}
				render() {
					const {
						displayLayout: e,
						post: t
					} = this.props;
					return t ? e === x.a.TIMELINE ? n.a.createElement(z, H({}, this.props, {
						onPostSelection: this.onPostSelection,
						onRemovePost: this.onRemovePost,
						onStartEventNow: this.onStartEventNow,
						onPostTitleClick: this.onPostTitleClick
					})) : n.a.createElement(J, H({}, this.props, {
						onPostSelection: this.onPostSelection,
						onRemovePost: this.onRemovePost,
						onStartEventNow: this.onStartEventNow
					})) : n.a.createElement("div", {
						className: B.a.postContainer
					})
				}
			}
			var Z = Object(C.t)({
					currentProfileName: C.h,
					isCommentsPage: C.w,
					isProfilePostListing: C.I,
					isProfilePage: C.G,
					pageLayer: e => e
				})(Object(l.b)(() => Object(i.c)({
					activeModalId: F.a,
					galleryThumbnail: g.e,
					isFutureEvent: g.j,
					layout: C.N,
					post: y.O,
					shouldShowCollectionPostEdits: g.t,
					subredditOrProfile: y.bb
				}), (e, t) => {
					let {
						collectionId: s,
						postId: n,
						isSelectedPost: l,
						isOverlay: i
					} = t;
					return {
						onRemovePostFromCollection: () => e(Object(d.g)(s, n, l)),
						onStartEventNow: async () => {
							X || (X = await Promise.resolve().then(o.bind(null, "./src/reddit/actions/eventPosts/index.ts"))), e(X.startEventNowRequested(n))
						},
						toggleEditStartTimeModal: async () => {
							U && X || ([U, X] = await Promise.all([o.e("schedulePickerModal").then(o.bind(null, "./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx")).then(e => e.default), Promise.resolve().then(o.bind(null, "./src/reddit/actions/eventPosts/index.ts"))])), e(N.i(Object(R.s)(n, i, R.j.COLLECTION_INFO_POST)))
						},
						addEventStartTime: t => {
							X && e(X.editEventTimeRequested(n, t))
						}
					}
				})(Object(b.c)(Q))),
				q = o("./src/reddit/components/Collection/index.m.less"),
				K = o.n(q);
			const {
				fbt: V
			} = o("./node_modules/fbt/lib/FbtPublic.js"), $ = e => n.a.createElement(m.a, {
				author: e.author,
				className: K.a.author,
				"data-click-id": "user",
				isAuthorDeleted: e.isDeleted,
				isUnstyled: !0
			}, "u/".concat(e.author)), ee = 100, te = e => {
				return e.isOverlay ? h.n + h.b : h.f + h.b
			}, oe = e => ({
				top: te(e),
				maxHeight: "calc(100vh - ".concat(h.f + (e.isOverlay ? h.n : 0) + h.b + 5, "px)")
			}), se = Object(C.t)({
				isProfilePage: C.G,
				pageLayer: e => e
			}), ne = Object(l.b)(() => Object(i.c)({
				collection: g.o,
				displayLayout: g.a,
				followPost: (e, t) => {
					let {
						postId: o
					} = t;
					const s = Object(g.o)(e, {
							postId: o
						}),
						n = s && (s.primaryPostId || s.postIds[0]);
					return n && Object(y.O)(e, {
						postId: n
					}) || null
				},
				post: y.O,
				shouldShowThumbnail: (e, t) => {
					let {
						postId: o
					} = t;
					const s = Object(g.o)(e, {
						postId: o
					});
					return !(!s || !s.id) && Object(g.u)(e, {
						collectionId: s.id
					})
				}
			}), (e, t) => ({
				onOpenPost: t => e(Object(d.f)(t))
			}));
			class le extends n.a.Component {
				constructor() {
					super(...arguments), this.selectedPostRef = null, this.onClickPost = (e, t) => {
						this.props.onOpenPost(t)
					}, this.updateSelectedPostRef = e => {
						this.selectedPostRef = e
					}
				}
				componentDidMount() {
					const e = document.getElementById(E.b);
					if (e) {
						const t = this.selectedPostRef;
						let o;
						o = t ? t.offsetTop - ee : 0, c.a.write(() => {
							Object(r.c)(e, o)
						})
					}
				}
				render() {
					const {
						collection: e,
						displayLayout: t,
						followPost: o,
						isNightmodeOn: s,
						isOverlay: l,
						post: i,
						postId: r,
						shouldShowThumbnail: c,
						isProfilePage: d
					} = this.props;
					if (!i || !e) return null;
					const {
						author: m = "",
						description: b = "",
						postIds: h = [],
						id: C
					} = e;
					return Object(v.a)(i) && n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: Object(a.a)(K.a.collectionTitleWrapper, {
							[K.a.isProfilePage]: d
						})
					}, n.a.createElement("div", {
						className: K.a.collectionMetaData
					}, n.a.createElement("span", {
						className: K.a.collectionBy
					}, V._("Collection by {authorName}", [V._param("authorName", n.a.createElement($, {
						author: m,
						isDeleted: Object(_.h)(m)
					}))], {
						hk: "4E412f"
					})), n.a.createElement(O.a, {
						isSmall: !0
					}), n.a.createElement("span", {
						className: K.a.postCount
					}, V._({
						"*": "{number} posts",
						_1: "1 post"
					}, [V._plural(h.length, "number")], {
						hk: "2gFsfn"
					}))), n.a.createElement("div", {
						className: K.a.collectionTitleOptions
					}, n.a.createElement("span", {
						className: K.a.collectionTitle
					}, n.a.createElement(u.b, {
						type: u.a.Collection
					}, e.title)), o && n.a.createElement(p.a, {
						post: o,
						isEventFollow: d
					}), n.a.createElement(P.a, {
						className: K.a.overflowMenu,
						collectionId: C,
						isSubmitPage: !1,
						permalink: e.permalink,
						shouldShowCreatePost: !0
					}))), n.a.createElement("div", {
						className: K.a.postListWrapper
					}, n.a.createElement("div", {
						id: E.b,
						style: oe(this.props),
						className: K.a.collectionList
					}, b && b.trim() && n.a.createElement("div", {
						className: K.a.collectionDescription
					}, b), n.a.createElement("div", {
						className: Object(a.a)({
							[K.a.galleryContainer]: t === x.a.GALLERY
						})
					}, h.map(e => n.a.createElement(Z, {
						collectionId: C,
						postId: e,
						key: e,
						isSelectedPost: r === e,
						updateSelectedPostRef: this.updateSelectedPostRef,
						isOverlay: l,
						isNightmodeOn: s,
						onClickPost: this.onClickPost,
						shouldShowThumbnail: c,
						displayLayout: t
					}))))))
				}
			}
			t.default = se(ne(Object(b.c)(le)))
		},
		"./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less": function(e, t, o) {
			e.exports = {
				DropdownRow: "JoWBeMWu_l8J_Hn6Udz_j",
				dropdownRow: "JoWBeMWu_l8J_Hn6Udz_j"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/lodash/noop.js"),
				n = o.n(s),
				l = o("./node_modules/react/index.js"),
				i = o.n(l),
				a = o("./node_modules/react-redux/es/index.js"),
				r = o("./node_modules/react-router-redux/es/index.js"),
				c = o("./src/lib/lessComponent.tsx"),
				d = o("./src/reddit/actions/modal.ts"),
				m = o("./src/reddit/actions/post.ts"),
				p = o("./src/reddit/actions/postCollection/index.ts"),
				u = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				b = o("./src/reddit/components/OverflowMenu/index.tsx"),
				P = o("./src/reddit/components/TrackingHelper/index.tsx"),
				h = o("./src/reddit/controls/Dropdown/Row.tsx"),
				E = o("./src/reddit/selectors/activeModalId.ts"),
				C = o("./src/reddit/selectors/postCollection.ts"),
				O = o("./node_modules/reselect/es/index.js"),
				v = o("./src/reddit/helpers/trackers/postCollection.ts"),
				_ = o("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less"),
				x = o.n(_),
				g = o("./node_modules/fbt/lib/FbtPublic.js");
			const y = c.a.wrapped(h.b, "DropdownRow", x.a);
			let S;
			const f = Object(E.b)("DELETE_COLLECTION_CONFM_MODAL_ID"),
				T = Object(E.b)("EDIT_POST_COLLECTION_MODAL_ID"),
				N = Object(O.c)({
					createPostUrl: C.d,
					isDeleteConfirmModalOpen: f,
					isEditCollectionModalOpen: T,
					shouldShowCollectionEditOptions: C.t
				}),
				w = Object(a.b)(N, (e, t) => ({
					copyLink: () => e(Object(m.F)(t.permalink)),
					onCreatePost: o => {
						t.shouldShowCreatePost && e(Object(r.b)(o))
					},
					onRemoveCollection: () => e(Object(p.c)(t.collectionId, t.isSubmitPage)),
					onToggleDeleteConfirmModal: () => e(d.i("DELETE_COLLECTION_CONFM_MODAL_ID")),
					onToggleEditModal: async () => {
						S || (S = await Promise.all([o.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), o.e("editCollectionModal")]).then(o.bind(null, "./src/reddit/components/EditCollectionModal/index.tsx")).then(e => e.EditCollectionModal)), e(d.i("EDIT_POST_COLLECTION_MODAL_ID"))
					}
				}));
			t.a = w(Object(P.c)(e => {
				const {
					className: t,
					collectionId: o,
					copyLink: s,
					createPostUrl: l,
					isDeleteConfirmModalOpen: a,
					isEditCollectionModalOpen: r,
					onCreatePost: c,
					onRemoveCollection: d,
					onToggleDeleteConfirmModal: m,
					onToggleEditModal: p,
					shouldShowCollectionEditOptions: P,
					shouldShowCreatePost: h,
					targetPosition: E,
					tooltipPosition: C,
					sendEvent: O
				} = e;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement(b.b, {
					className: t,
					dropdownId: "collection-menu-".concat(o, "-").concat(h ? 1 : 2),
					onClick: n.a,
					targetPosition: E,
					tooltipPosition: C
				}, i.a.createElement(y, {
					onClick: s,
					displayText: g.fbt._("Copy collection link", null, {
						hk: "3Rfodz"
					})
				}), P && i.a.createElement(i.a.Fragment, null, i.a.createElement(y, {
					onClick: () => {
						O(Object(v.l)(o)), p()
					},
					displayText: g.fbt._("Edit", null, {
						hk: "2ehqo8"
					})
				}), i.a.createElement(y, {
					onClick: () => {
						O(Object(v.k)(o)), m()
					},
					displayText: g.fbt._("Delete collection", null, {
						hk: "2FyIJB"
					})
				}), h && i.a.createElement(y, {
					onClick: () => {
						c(l)
					},
					displayText: g.fbt._("Create post", null, {
						hk: "1v2jHl"
					})
				}))), r && S && i.a.createElement(S, {
					collectionId: o,
					onClose: p,
					onEditSuccess: p
				}), a && i.a.createElement(u.a, {
					actionText: g.fbt._("Yes, Delete", null, {
						hk: "15Espn"
					}),
					headerText: g.fbt._("Delete Collection", null, {
						hk: "1QJ3as"
					}),
					modalText: g.fbt._("Are you sure you want to delete this collection? The posts within the collection won't be deleted.", null, {
						hk: "36jKp5"
					}),
					onConfirm: d,
					toggleModal: m,
					trackClick: n.a
				}))
			}))
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.m.less": function(e, t, o) {
			e.exports = {
				DropdownRow: "_3V8ByF4idIiROiWQ9i468R",
				dropdownRow: "_3V8ByF4idIiROiWQ9i468R"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/lodash/noop.js"),
				l = o.n(n),
				i = o("./node_modules/react/index.js"),
				a = o.n(i),
				r = o("./src/lib/lessComponent.tsx"),
				c = o("./src/lib/opener/index.ts"),
				d = o("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				m = o("./src/reddit/components/OverflowMenu/index.tsx"),
				p = o("./src/reddit/controls/Dropdown/Row.tsx"),
				u = o("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.m.less"),
				b = o.n(u);
			const P = r.a.wrapped(p.b, "DropdownRow", b.a);
			t.a = e => {
				const {
					isFutureEvent: t,
					onAddEventStartTime: o,
					onEditStartTime: n,
					onStartEventNow: i,
					postPermalink: r,
					shouldShowAddEventStartTime: p,
					targetPosition: u,
					tooltipPosition: b
				} = e;
				return a.a.createElement(m.b, {
					className: e.className,
					dropdownId: e.dropdownId,
					onClick: l.a,
					targetPosition: u,
					tooltipPosition: b
				}, p && o && a.a.createElement(P, {
					onClick: o,
					displayText: s.fbt._("Add event start time", null, {
						hk: "4xWttR"
					})
				}), t && i && a.a.createElement(P, {
					onClick: i,
					displayText: s.fbt._("Start event now", null, {
						hk: "2TTNfJ"
					})
				}), t && n && a.a.createElement(P, {
					onClick: n,
					displayText: s.fbt._("Edit start time", null, {
						hk: "44XUxC"
					})
				}), a.a.createElement(P, {
					onClick: e.onRemoveClick,
					displayText: s.fbt._("Remove from collection", null, {
						hk: "qsiiu"
					})
				}), r && a.a.createElement(d.a, {
					target: c.c.BLANK,
					rel: c.b,
					isOverlay: !1,
					to: r
				}, a.a.createElement(P, {
					displayText: s.fbt._("View post", null, {
						hk: "1PtvnG"
					})
				})))
			}
		}
	}
]);
//# sourceMappingURL=reddit-components-Collection.0db630de1d58bc0e2188.js.map