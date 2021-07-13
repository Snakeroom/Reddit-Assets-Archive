// https://www.redditstatic.com/desktop2x/reddit-components-Collection.3c114b93b87ac478d5fd.js
// Retrieved at 7/13/2021, 11:50:07 AM by Reddit Dataminer v1.0.0
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
			}, e.children), "Metadata", d.a), u = ({
				post: e
			}) => Object(r.a)(e) ? n.a.createElement(a.a, {
				className: d.a.postEventMeta,
				post: e
			}) : n.a.createElement(n.a.Fragment, null, !e.isScoreHidden && n.a.createElement(n.a.Fragment, null, n.a.createElement(p, {
				"data-click-id": "score"
			}, m._({
				"*": "{Post score} points",
				_1: "1 point"
			}, [m._plural(e.score, "Post score", Object(l.b)(e.score))], {
				hk: "1gwCFh"
			})), n.a.createElement(p, null, "·")), n.a.createElement(p, {
				"data-click-id": "comments"
			}, m._({
				"*": "{number} comments",
				_1: "1 comment"
			}, [m._plural(e.numComments, "number", Object(l.b)(e.numComments))], {
				hk: "3eG58Q"
			})))
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
				collectionTitleWrapperExp: "_3_0ssfMlBIty7mjaQrzfko",
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
				C = o("./src/reddit/contexts/NavbarExp.ts"),
				O = o("./src/reddit/contexts/PageLayer/index.tsx"),
				v = o("./src/reddit/controls/MetaSeparator/index.tsx"),
				x = o("./src/reddit/helpers/postCollection.ts"),
				_ = o("./src/reddit/models/Post/index.ts"),
				g = o("./src/reddit/models/PostCollection/index.ts"),
				y = o("./src/reddit/selectors/postCollection.ts"),
				f = o("./src/reddit/selectors/posts.ts"),
				S = (o("./node_modules/core-js/modules/web.dom.iterable.js"), o("./node_modules/react-router-dom/esm/react-router-dom.js")),
				T = o("./src/lib/prettyPrintNumber/index.ts"),
				N = o("./src/lib/timezone/index.ts"),
				w = o("./src/reddit/actions/modal.ts"),
				j = o("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				I = o("./src/reddit/components/Collection/PostAndPostEventMeta/index.tsx"),
				k = o("./src/reddit/components/PostContainer/index.tsx"),
				M = o("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.tsx"),
				L = o("./src/reddit/helpers/path/index.ts"),
				D = o("./src/reddit/helpers/postEvent.ts"),
				R = o("./src/reddit/helpers/trackers/postCollection.ts"),
				F = o("./src/reddit/models/PostCreationForm/index.ts"),
				A = o("./src/reddit/selectors/activeModalId.ts"),
				B = o("./src/reddit/components/Collection/PostItem/index.m.less"),
				W = o.n(B);

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
				fbt: U
			} = o("./node_modules/fbt/lib/FbtPublic.js");
			let X, Y;
			const z = e => `${e}--collectionItem`,
				G = e => {
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
					return n.a.createElement(k.a, {
						className: Object(a.a)(W.a.postContainer, {
							[W.a.isNightmodeOn]: i,
							[W.a.isSelectedPost]: c,
							[W.a.isProfilePage]: v
						}),
						isOverlay: r,
						makePostContainerId: z,
						post: b,
						onClick: d,
						eventFactory: s,
						style: E
					}, n.a.createElement("div", {
						ref: c && O || void 0
					}, n.a.createElement("div", {
						className: Object(a.a)(W.a.postContent, {
							[W.a.active]: c
						})
					}, h && n.a.createElement(j.a, {
						className: W.a.timelineThumbnail,
						classNameInnerThumbnail: Object(a.a)(W.a.timelineThumbnailOverride, W.a.commonThumbnailOverride),
						post: b
					}), n.a.createElement("div", {
						className: W.a.postBodyWrapper
					}, n.a.createElement("div", {
						className: W.a.postBody,
						"data-click-id": "body"
					}, n.a.createElement(S.a, {
						to: Object(L.b)(b.permalink),
						className: W.a.postTitle,
						style: {
							WebkitBoxOrient: "vertical"
						},
						title: b.title,
						onClick: u
					}, b.title)), n.a.createElement("div", {
						className: W.a.bottomline
					}, n.a.createElement(I.b, {
						post: b
					}), P && n.a.createElement(M.a, {
						className: W.a.defaultPostOverflowMenu,
						onRemoveClick: m,
						dropdownId: `collection-post-item-${b.id}`,
						isFutureEvent: l,
						onStartEventNow: p,
						onEditStartTime: C,
						onAddEventStartTime: C,
						shouldShowAddEventStartTime: !Object(D.a)(b)
					}))))), t === Object(F.r)(b.id, r, F.j.COLLECTION_INFO_POST) && X && n.a.createElement(X, {
						onChange: o,
						onClose: C,
						schedule: Object(N.c)(b),
						shouldShowDeleteButton: !1
					}))
				},
				J = j.a,
				Q = e => {
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
					} = e, v = l && l.url || "", x = b.isSpoiler || b.isNSFW, _ = b.isScoreHidden;
					return n.a.createElement(k.a, {
						className: Object(a.a)(W.a.galleryPostContainer, {
							[W.a.isSelectedPost]: d,
							[W.a.isNightmodeOn]: r,
							[W.a.isProfilePage]: O
						}),
						isOverlay: c,
						makePostContainerId: z,
						post: b,
						onClick: m,
						eventFactory: s,
						style: h
					}, n.a.createElement("div", {
						className: W.a.scrollToContainer,
						ref: d && C || void 0
					}, v ? n.a.createElement("div", {
						className: Object(a.a)(W.a.galleryPostImage, {
							[W.a.blurBackground]: x
						}),
						style: {
							backgroundImage: `url('${v}')`
						}
					}) : n.a.createElement(J, {
						className: W.a.galleryThumbnailPlaceholder,
						thumbnailContainerClassName: W.a.thumbnailContainerClassName,
						classNameInnerThumbnail: Object(a.a)(W.a.galleryPostPlaceholderThumbnailOverride, W.a.commonThumbnailOverride),
						post: b
					}), r && n.a.createElement("div", {
						className: W.a.gallerySeparator
					}), d && n.a.createElement("div", {
						className: W.a.gallerySelectedBorder
					}), n.a.createElement("div", {
						className: W.a.galleryPostOverlay
					}, n.a.createElement("div", {
						className: Object(a.a)(W.a.galleryBottomLine, {
							[W.a.isScoreHidden]: _
						})
					}, !_ && n.a.createElement(I.a, {
						"data-click-id": "score"
					}, U._({
						"*": "{Post score} points",
						_1: "1 point"
					}, [U._plural(b.score, "Post score", Object(T.b)(b.score))], {
						hk: "17XXwj"
					})), P && n.a.createElement(M.a, {
						onRemoveClick: p,
						dropdownId: `collection-post-item-${b.id}`,
						isFutureEvent: i,
						onStartEventNow: u,
						onEditStartTime: E,
						onAddEventStartTime: E,
						shouldShowAddEventStartTime: !Object(D.a)(b)
					})))), t === Object(F.r)(b.id, c, F.j.COLLECTION_INFO_POST) && X && n.a.createElement(X, {
						onChange: o,
						onClose: E,
						schedule: Object(N.c)(b),
						shouldShowDeleteButton: !1
					}))
				};
			class Z extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.onPostSelection = (e, t) => {
						const {
							onClickPost: o,
							postId: s,
							sendEvent: n
						} = this.props;
						n(Object(R.h)(s)), o && o(e, t)
					}, this.onRemovePost = () => {
						const {
							post: e,
							sendEvent: t
						} = this.props;
						this.props.onRemovePostFromCollection(), t(Object(R.p)(e.id))
					}, this.onStartEventNow = () => {
						const {
							post: e,
							sendEvent: t
						} = this.props;
						this.props.onStartEventNow(), t(Object(R.i)(e.id))
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
					return t ? e === g.a.TIMELINE ? n.a.createElement(G, H({}, this.props, {
						onPostSelection: this.onPostSelection,
						onRemovePost: this.onRemovePost,
						onStartEventNow: this.onStartEventNow,
						onPostTitleClick: this.onPostTitleClick
					})) : n.a.createElement(Q, H({}, this.props, {
						onPostSelection: this.onPostSelection,
						onRemovePost: this.onRemovePost,
						onStartEventNow: this.onStartEventNow
					})) : n.a.createElement("div", {
						className: W.a.postContainer
					})
				}
			}
			var q = Object(O.t)({
					currentProfileName: O.h,
					isCommentsPage: O.w,
					isProfilePostListing: O.I,
					isProfilePage: O.G,
					pageLayer: e => e
				})(Object(l.b)(() => Object(i.c)({
					activeModalId: A.a,
					galleryThumbnail: y.e,
					isFutureEvent: y.i,
					layout: O.O,
					post: f.F,
					shouldShowCollectionPostEdits: y.s,
					subredditOrProfile: f.R
				}), (e, {
					collectionId: t,
					postId: s,
					isSelectedPost: n,
					isOverlay: l
				}) => ({
					onRemovePostFromCollection: () => e(Object(d.g)(t, s, n)),
					onStartEventNow: async () => {
						Y || (Y = await Promise.resolve().then(o.bind(null, "./src/reddit/actions/eventPosts/index.ts"))), e(Y.startEventNowRequested(s))
					},
					toggleEditStartTimeModal: async () => {
						X && Y || ([X, Y] = await Promise.all([o.e("schedulePickerModal").then(o.bind(null, "./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx")).then(e => e.default), Promise.resolve().then(o.bind(null, "./src/reddit/actions/eventPosts/index.ts"))])), e(w.i(Object(F.r)(s, l, F.j.COLLECTION_INFO_POST)))
					},
					addEventStartTime: t => {
						Y && e(Y.editEventTimeRequested(s, t))
					}
				}))(Object(b.c)(Z))),
				K = o("./src/reddit/components/Collection/index.m.less"),
				V = o.n(K);
			const {
				fbt: $
			} = o("./node_modules/fbt/lib/FbtPublic.js"), ee = e => n.a.createElement(m.a, {
				author: e.author,
				className: V.a.author,
				"data-click-id": "user",
				isAuthorDeleted: e.isDeleted,
				isUnstyled: !0
			}, `u/${e.author}`), te = 100, oe = e => {
				return e.isOverlay ? h.n + h.b : h.f + h.b
			}, se = e => ({
				top: oe(e),
				maxHeight: `calc(100vh - ${h.f+(e.isOverlay?h.n:0)+h.b+5}px)`
			}), ne = Object(O.t)({
				isProfilePage: O.G,
				pageLayer: e => e
			}), le = Object(l.b)(() => Object(i.c)({
				collection: y.n,
				displayLayout: y.a,
				followPost: (e, {
					postId: t
				}) => {
					const o = Object(y.n)(e, {
							postId: t
						}),
						s = o && (o.primaryPostId || o.postIds[0]);
					return s && Object(f.F)(e, {
						postId: s
					}) || null
				},
				post: f.F,
				shouldShowThumbnail: (e, {
					postId: t
				}) => {
					const o = Object(y.n)(e, {
						postId: t
					});
					return !(!o || !o.id) && Object(y.t)(e, {
						collectionId: o.id
					})
				}
			}), (e, t) => ({
				onOpenPost: t => e(Object(d.f)(t))
			}));
			class ie extends n.a.Component {
				constructor() {
					super(...arguments), this.selectedPostRef = null, this.onClickPost = (e, t) => {
						this.props.onOpenPost(t)
					}, this.updateSelectedPostRef = e => {
						this.selectedPostRef = e
					}, this.renderPostInCollection = e => {
						const {
							collection: t,
							displayLayout: o,
							followPost: s,
							isNightmodeOn: l,
							isOverlay: i,
							postId: r,
							shouldShowThumbnail: c,
							isProfilePage: d
						} = this.props;
						if (!t) return null;
						const {
							author: m = "",
							description: b = "",
							postIds: h = [],
							id: C
						} = t;
						return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
							className: Object(a.a)(V.a.collectionTitleWrapper, {
								[V.a.isProfilePage]: d,
								[V.a.collectionTitleWrapperExp]: e
							})
						}, n.a.createElement("div", {
							className: V.a.collectionMetaData
						}, n.a.createElement("span", {
							className: V.a.collectionBy
						}, $._("Collection by {authorName}", [$._param("authorName", n.a.createElement(ee, {
							author: m,
							isDeleted: Object(_.n)(m)
						}))], {
							hk: "4E412f"
						})), n.a.createElement(v.a, {
							isSmall: !0
						}), n.a.createElement("span", {
							className: V.a.postCount
						}, $._({
							"*": "{number} posts",
							_1: "1 post"
						}, [$._plural(h.length, "number")], {
							hk: "2gFsfn"
						}))), n.a.createElement("div", {
							className: V.a.collectionTitleOptions
						}, n.a.createElement("span", {
							className: V.a.collectionTitle
						}, n.a.createElement(u.b, {
							type: u.a.Collection
						}, t.title)), s && n.a.createElement(p.a, {
							post: s,
							isEventFollow: d
						}), n.a.createElement(P.a, {
							className: V.a.overflowMenu,
							collectionId: C,
							isSubmitPage: !1,
							permalink: t.permalink,
							shouldShowCreatePost: !0
						}))), n.a.createElement("div", {
							className: V.a.postListWrapper
						}, n.a.createElement("div", {
							id: E.b,
							style: se(this.props),
							className: V.a.collectionList
						}, b && b.trim() && n.a.createElement("div", {
							className: V.a.collectionDescription
						}, b), n.a.createElement("div", {
							className: Object(a.a)({
								[V.a.galleryContainer]: o === g.a.GALLERY
							})
						}, h.map(e => n.a.createElement(q, {
							collectionId: C,
							postId: e,
							key: e,
							isSelectedPost: r === e,
							updateSelectedPostRef: this.updateSelectedPostRef,
							isOverlay: i,
							isNightmodeOn: l,
							onClickPost: this.onClickPost,
							shouldShowThumbnail: c,
							displayLayout: o
						}))))))
					}
				}
				componentDidMount() {
					const e = document.getElementById(E.b);
					if (e) {
						const t = this.selectedPostRef;
						let o;
						o = t ? t.offsetTop - te : 0, c.a.write(() => {
							Object(r.c)(e, o)
						})
					}
				}
				render() {
					const {
						post: e
					} = this.props;
					return e ? Object(x.a)(e) && n.a.createElement(C.a.Consumer, null, this.renderPostInCollection) : null
				}
			}
			t.default = ne(le(Object(b.c)(ie)))
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
				x = o("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less"),
				_ = o.n(x),
				g = o("./node_modules/fbt/lib/FbtPublic.js");
			const y = c.a.wrapped(h.b, "DropdownRow", _.a);
			let f;
			const S = Object(E.b)("DELETE_COLLECTION_CONFM_MODAL_ID"),
				T = Object(E.b)("EDIT_POST_COLLECTION_MODAL_ID"),
				N = Object(O.c)({
					createPostUrl: C.d,
					isDeleteConfirmModalOpen: S,
					isEditCollectionModalOpen: T,
					shouldShowCollectionEditOptions: C.s
				}),
				w = Object(a.b)(N, (e, t) => ({
					copyLink: () => e(Object(m.D)(t.permalink)),
					onCreatePost: o => {
						t.shouldShowCreatePost && e(Object(r.b)(o))
					},
					onRemoveCollection: () => e(Object(p.c)(t.collectionId, t.isSubmitPage)),
					onToggleDeleteConfirmModal: () => e(d.i("DELETE_COLLECTION_CONFM_MODAL_ID")),
					onToggleEditModal: async () => {
						f || (f = await Promise.all([o.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), o.e("editCollectionModal")]).then(o.bind(null, "./src/reddit/components/EditCollectionModal/index.tsx")).then(e => e.EditCollectionModal)), e(d.i("EDIT_POST_COLLECTION_MODAL_ID"))
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
					dropdownId: `collection-menu-${o}-${h?1:2}`,
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
						hk: "1nftDt"
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
				}))), r && f && i.a.createElement(f, {
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
				u = o("./src/reddit/helpers/path/index.ts"),
				b = o("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.m.less"),
				P = o.n(b);
			const h = r.a.wrapped(p.b, "DropdownRow", P.a);
			t.a = e => {
				const {
					isFutureEvent: t,
					onAddEventStartTime: o,
					onEditStartTime: n,
					onStartEventNow: i,
					postPermalink: r,
					shouldShowAddEventStartTime: p,
					targetPosition: b,
					tooltipPosition: P
				} = e;
				return a.a.createElement(m.b, {
					className: e.className,
					dropdownId: e.dropdownId,
					onClick: l.a,
					targetPosition: b,
					tooltipPosition: P
				}, p && o && a.a.createElement(h, {
					onClick: o,
					displayText: s.fbt._("Add event start time", null, {
						hk: "4xWttR"
					})
				}), t && i && a.a.createElement(h, {
					onClick: i,
					displayText: s.fbt._("Start event now", null, {
						hk: "2TTNfJ"
					})
				}), t && n && a.a.createElement(h, {
					onClick: n,
					displayText: s.fbt._("Edit start time", null, {
						hk: "44XUxC"
					})
				}), a.a.createElement(h, {
					onClick: e.onRemoveClick,
					displayText: s.fbt._("Remove from collection", null, {
						hk: "qsiiu"
					})
				}), r && a.a.createElement(d.a, {
					target: c.c.BLANK,
					rel: c.b,
					isOverlay: !1,
					to: Object(u.b)(r)
				}, a.a.createElement(h, {
					displayText: s.fbt._("View post", null, {
						hk: "1PtvnG"
					})
				})))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Collection.3c114b93b87ac478d5fd.js.map